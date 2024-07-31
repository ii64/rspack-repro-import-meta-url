"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_track_appenders_LayoutShiftsTrackAppender_test_ts"],{

/***/ "./src/panels/timeline/track_appenders/LayoutShiftsTrackAppender.test.ts":
/*!*******************************************************************************!*\
  !*** ./src/panels/timeline/track_appenders/LayoutShiftsTrackAppender.test.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/legacy/components/perf_ui/perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





function initTrackAppender(flameChartData, traceParsedData, entryData, entryTypeByLevel) {
    const compatibilityTracksAppender = new _timeline_js__WEBPACK_IMPORTED_MODULE_4__.CompatibilityTracksAppender.CompatibilityTracksAppender(flameChartData, traceParsedData, entryData, entryTypeByLevel);
    return compatibilityTracksAppender.layoutShiftsTrackAppender();
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('LayoutShiftsTrackAppender', function () {
    async function renderTrackAppender(context, trace) {
        const entryTypeByLevel = [];
        const entryData = [];
        const flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.createEmpty();
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(context, trace);
        const layoutShiftsTrackAppender = initTrackAppender(flameChartData, traceData, entryData, entryTypeByLevel);
        layoutShiftsTrackAppender.appendTrackAtLevel(0);
        return {
            entryTypeByLevel,
            traceParsedData: traceData,
            flameChartData,
            layoutShiftsTrackAppender,
            entryData,
        };
    }
    it('marks all levels used by the track with the TrackAppender type', async function () {
        const { entryTypeByLevel } = await renderTrackAppender(this, 'cls-single-frame.json.gz');
        // Only one row of layout shifts.
        assert.strictEqual(entryTypeByLevel.length, 1);
        assert.deepEqual(entryTypeByLevel, [
            _timeline_js__WEBPACK_IMPORTED_MODULE_4__.TimelineFlameChartDataProvider.EntryType.TrackAppender,
        ]);
    });
    it('does not append anything if there are no layout shifts', async function () {
        // No layout shifts.
        const { entryTypeByLevel } = await renderTrackAppender(this, 'animation.json.gz');
        assert.lengthOf(entryTypeByLevel, 0);
    });
    it('creates a flamechart group', async function () {
        const { flameChartData } = await renderTrackAppender(this, 'cls-single-frame.json.gz');
        assert.strictEqual(flameChartData.groups.length, 1);
        assert.strictEqual(flameChartData.groups[0].name, 'Layout Shifts');
    });
    it('adds all layout shifts with the correct start times', async function () {
        const { flameChartData, traceParsedData, entryData } = await renderTrackAppender(this, 'cls-single-frame.json.gz');
        const events = traceParsedData.LayoutShifts.clusters.flatMap(c => c.events);
        for (const event of events) {
            const markerIndex = entryData.indexOf(event);
            assert.exists(markerIndex);
            assert.strictEqual(flameChartData.entryStartTimes[markerIndex], _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(event.ts));
        }
    });
    it('sets all layout shifts to be 5ms in duration', async function () {
        const { flameChartData, traceParsedData, entryData } = await renderTrackAppender(this, 'cls-single-frame.json.gz');
        const events = traceParsedData.LayoutShifts.clusters.flatMap(c => c.events);
        for (const event of events) {
            const markerIndex = entryData.indexOf(event);
            assert.exists(markerIndex);
            assert.strictEqual(flameChartData.entryTotalTimes[markerIndex], 5);
        }
    });
    it('returns the correct title for a layout shift', async function () {
        const { layoutShiftsTrackAppender, traceParsedData } = await renderTrackAppender(this, 'cls-single-frame.json.gz');
        const shifts = traceParsedData.LayoutShifts.clusters.flatMap(c => c.events);
        const title = layoutShiftsTrackAppender.titleForEvent(shifts[0]);
        assert.strictEqual(title, 'Layout shift');
    });
    it('shows "Layout shift" text on hover', async function () {
        const { layoutShiftsTrackAppender, traceParsedData } = await renderTrackAppender(this, 'cls-single-frame.json.gz');
        const shifts = traceParsedData.LayoutShifts.clusters.flatMap(c => c.events);
        const info = layoutShiftsTrackAppender.highlightedEntryInfo(shifts[0]);
        assert.deepEqual(info, {
            title: 'Layout shift',
            formattedTime: '',
        });
    });
});


/***/ })

}]);