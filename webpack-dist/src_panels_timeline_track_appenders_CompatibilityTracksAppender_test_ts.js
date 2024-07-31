"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_track_appenders_CompatibilityTracksAppender_test_ts"],{

/***/ "./src/panels/timeline/track_appenders/CompatibilityTracksAppender.test.ts":
/*!*********************************************************************************!*\
  !*** ./src/panels/timeline/track_appenders/CompatibilityTracksAppender.test.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./src/testing/TraceHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/legacy/components/perf_ui/perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('CompatibilityTracksAppender', function () {
    let traceData;
    let tracksAppender;
    let entryData = [];
    let flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChartTimelineData.createEmpty();
    let entryTypeByLevel = [];
    async function initTrackAppender(context, fixture = 'timings-track.json.gz') {
        entryData = [];
        flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChartTimelineData.createEmpty();
        entryTypeByLevel = [];
        ({ traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(context, fixture));
        tracksAppender = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.CompatibilityTracksAppender.CompatibilityTracksAppender(flameChartData, traceData, entryData, entryTypeByLevel);
        const timingsTrack = tracksAppender.timingsTrackAppender();
        const gpuTrack = tracksAppender.gpuTrackAppender();
        const threadAppenders = tracksAppender.threadAppenders();
        let currentLevel = timingsTrack.appendTrackAtLevel(0);
        currentLevel = gpuTrack.appendTrackAtLevel(currentLevel);
        for (const threadAppender of threadAppenders) {
            currentLevel = threadAppender.appendTrackAtLevel(currentLevel);
        }
    }
    beforeEach(async () => {
        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupIgnoreListManagerEnvironment)();
        await initTrackAppender(this);
    });
    describe('Tree view data', () => {
        describe('eventsInTrack', () => {
            it('returns all the events appended by a track with multiple levels', () => {
                const timingsTrack = tracksAppender.timingsTrackAppender();
                const timingsTrackEvents = tracksAppender.eventsInTrack(timingsTrack);
                const allTimingEvents = [
                    ...traceData.UserTimings.consoleTimings,
                    ...traceData.UserTimings.timestampEvents,
                    ...traceData.UserTimings.performanceMarks,
                    ...traceData.UserTimings.performanceMeasures,
                    ...traceData.PageLoadMetrics.allMarkerEvents,
                ].sort((a, b) => a.ts - b.ts);
                assert.deepEqual(timingsTrackEvents, allTimingEvents);
            });
            it('returns all the events appended by a track with one level', () => {
                const gpuTrack = tracksAppender.gpuTrackAppender();
                const gpuTrackEvents = tracksAppender.eventsInTrack(gpuTrack);
                assert.deepEqual(gpuTrackEvents, traceData.GPU.mainGPUThreadTasks);
            });
        });
        describe('eventsForTreeView', () => {
            it('returns only sync events if using async events means a tree cannot be built', () => {
                const timingsTrack = tracksAppender.timingsTrackAppender();
                const timingsEvents = tracksAppender.eventsInTrack(timingsTrack);
                assert.isFalse(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.TreeHelpers.canBuildTreesFromEvents(timingsEvents));
                const treeEvents = tracksAppender.eventsForTreeView(timingsTrack);
                const allEventsAreSync = treeEvents.every(event => !_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isAsyncPhase(event.ph));
                assert.isTrue(allEventsAreSync);
            });
            it('returns both sync and async events if a tree can be built with them', async () => {
                // This file contains events in the timings track that can be assembled as a tree
                await initTrackAppender(this, 'sync-like-timings.json.gz');
                const timingsTrack = tracksAppender.timingsTrackAppender();
                const timingsEvents = tracksAppender.eventsInTrack(timingsTrack);
                assert.isTrue(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.TreeHelpers.canBuildTreesFromEvents(timingsEvents));
                const treeEvents = tracksAppender.eventsForTreeView(timingsTrack);
                assert.deepEqual(treeEvents, timingsEvents);
            });
            it('returns events for tree view for nested tracks', async () => {
                // This file contains two rasterizer threads which should be
                // nested inside the same header.
                await initTrackAppender(this, 'lcp-images-rasterizer.json.gz');
                const rasterTracks = tracksAppender.threadAppenders().filter(threadAppender => threadAppender.threadType === _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.Threads.ThreadType.RASTERIZER);
                assert.strictEqual(rasterTracks.length, 2);
                const raster1Events = tracksAppender.eventsInTrack(rasterTracks[0]);
                assert.strictEqual(raster1Events.length, 6);
                assert.isTrue(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.TreeHelpers.canBuildTreesFromEvents(raster1Events));
                const raster1TreeEvents = tracksAppender.eventsForTreeView(rasterTracks[0]);
                assert.deepEqual(raster1TreeEvents, raster1Events);
                const raster2Events = tracksAppender.eventsInTrack(rasterTracks[1]);
                assert.strictEqual(raster2Events.length, 1);
                assert.isTrue(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.TreeHelpers.canBuildTreesFromEvents(raster2Events));
                const raster2TreeEvents = tracksAppender.eventsForTreeView(rasterTracks[1]);
                assert.deepEqual(raster2TreeEvents, raster2Events);
            });
        });
        describe('groupEventsForTreeView', () => {
            it('returns all the events of a flame chart group with multiple levels', async () => {
                // This file contains events in the timings track that can be assembled as a tree
                await initTrackAppender(this, 'sync-like-timings.json.gz');
                const timingsGroupEvents = tracksAppender.groupEventsForTreeView(flameChartData.groups[0]);
                if (!timingsGroupEvents) {
                    assert.fail('Could not find events for group');
                }
                const allTimingEvents = [
                    ...traceData.UserTimings.consoleTimings,
                    ...traceData.UserTimings.timestampEvents,
                    ...traceData.UserTimings.performanceMarks,
                    ...traceData.UserTimings.performanceMeasures,
                    ...traceData.PageLoadMetrics.allMarkerEvents,
                ].sort((a, b) => a.ts - b.ts);
                assert.deepEqual(timingsGroupEvents, allTimingEvents);
            });
            it('returns all the events of a flame chart group with one level', () => {
                const gpuGroupEvents = tracksAppender.groupEventsForTreeView(flameChartData.groups[1]);
                if (!gpuGroupEvents) {
                    assert.fail('Could not find events for group');
                }
                assert.deepEqual(gpuGroupEvents, traceData.GPU.mainGPUThreadTasks);
            });
        });
    });
    describe('highlightedEntryInfo', () => {
        it('shows the correct warning for a long task when hovered', async function () {
            await initTrackAppender(this, 'simple-js-program.json.gz');
            const events = traceData.Renderer?.allTraceEntries;
            if (!events) {
                throw new Error('Could not find renderer events');
            }
            const longTask = events.find(e => (e.dur || 0) > 1000000);
            if (!longTask) {
                throw new Error('Could not find long task');
            }
            const info = tracksAppender.highlightedEntryInfo(longTask, 2);
            assert.strictEqual(info.warningElements?.length, 1);
            const warning = info.warningElements?.[0];
            if (!(warning instanceof HTMLSpanElement)) {
                throw new Error('Found unexpected warning');
            }
            assert.strictEqual(warning?.innerText, 'Long task took 1.30\u00A0s.');
        });
        it('shows the correct warning for a forced recalc styles when hovered', async function () {
            await initTrackAppender(this, 'large-layout-small-recalc.json.gz');
            const events = traceData.Warnings.perWarning.get('FORCED_REFLOW') || [];
            if (!events) {
                throw new Error('Could not find forced reflows events');
            }
            const recalcStyles = events[0];
            if (!recalcStyles) {
                throw new Error('Could not find recalc styles');
            }
            const info = tracksAppender.highlightedEntryInfo(recalcStyles, 2);
            assert.strictEqual(info.warningElements?.length, 1);
            const warning = info.warningElements?.[0];
            if (!(warning instanceof HTMLSpanElement)) {
                throw new Error('Found unexpected warning');
            }
            assert.strictEqual(warning?.innerText, 'Forced reflow is a likely performance bottleneck.');
        });
        it('shows the correct warning for a forced layout when hovered', async function () {
            await initTrackAppender(this, 'large-layout-small-recalc.json.gz');
            const events = traceData.Warnings.perWarning.get('FORCED_REFLOW') || [];
            if (!events) {
                throw new Error('Could not find forced reflows events');
            }
            const layout = events[1];
            if (!layout) {
                throw new Error('Could not find layout');
            }
            const info = tracksAppender.highlightedEntryInfo(layout, 2);
            assert.strictEqual(info.warningElements?.length, 1);
            const warning = info.warningElements?.[0];
            if (!(warning instanceof HTMLSpanElement)) {
                throw new Error('Found unexpected warning');
            }
            assert.strictEqual(warning?.innerText, 'Forced reflow is a likely performance bottleneck.');
        });
        it('shows the correct warning for slow idle callbacks', async function () {
            await initTrackAppender(this, 'idle-callback.json.gz');
            const events = traceData.Renderer?.allTraceEntries;
            if (!events) {
                throw new Error('Could not find renderer events');
            }
            const idleCallback = events.find(event => {
                const { duration } = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMilliSeconds(event);
                if (!_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isTraceEventFireIdleCallback(event)) {
                    return false;
                }
                if (duration <= event.args.data.allottedMilliseconds) {
                    false;
                }
                return true;
            });
            if (!idleCallback) {
                throw new Error('Could not find idle callback');
            }
            const info = tracksAppender.highlightedEntryInfo(idleCallback, 2);
            assert.strictEqual(info.warningElements?.length, 1);
            const warning = info.warningElements?.[0];
            if (!(warning instanceof HTMLSpanElement)) {
                throw new Error('Found unexpected warning');
            }
            assert.strictEqual(warning?.innerText, 'Idle callback execution extended beyond deadline by 79.56\u00A0ms');
        });
    });
});


/***/ })

}]);