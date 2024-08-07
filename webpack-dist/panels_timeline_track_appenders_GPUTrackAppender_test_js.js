"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_timeline_track_appenders_GPUTrackAppender_test_js"],{

/***/ "./panels/timeline/track_appenders/GPUTrackAppender.test.js":
/*!******************************************************************!*\
  !*** ./panels/timeline/track_appenders/GPUTrackAppender.test.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */ var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/legacy/theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../timeline.js */ "./panels/timeline/timeline.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






function initTrackAppender(flameChartData, traceData, entryData, entryTypeByLevel) {
    const compatibilityTracksAppender = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.CompatibilityTracksAppender.CompatibilityTracksAppender(flameChartData, traceData, entryData, entryTypeByLevel);
    return compatibilityTracksAppender.gpuTrackAppender();
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('GPUTrackAppender', function () {
    let traceData;
    let gpuTrackAppender;
    let entryData = [];
    let flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.createEmpty();
    let entryTypeByLevel = [];
    beforeEach(async function () {
        ({ traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'threejs-gpu.json.gz'));
        gpuTrackAppender = initTrackAppender(flameChartData, traceData, entryData, entryTypeByLevel);
        gpuTrackAppender.appendTrackAtLevel(0);
    });
    afterEach(() => {
        entryData = [];
        flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.createEmpty();
        entryTypeByLevel = [];
    });
    describe('appendTrackAtLevel', () => {
        it('marks all levels used by the track with the `TrackAppender` type', () => {
            // One levels should be taken: 1 for the GPU tasks.
            const levelCount = 1;
            assert.strictEqual(entryTypeByLevel.length, levelCount);
            const allEntriesAreTrackAppender = entryTypeByLevel.every(type => type === "TrackAppender" /* Timeline.TimelineFlameChartDataProvider.EntryType.TrackAppender */);
            assert.isTrue(allEntriesAreTrackAppender);
        });
        it('creates a flamechart group for the GPU track', () => {
            assert.strictEqual(flameChartData.groups.length, 1);
            assert.strictEqual(flameChartData.groups[0].name, 'GPU');
        });
        it('adds start times correctly', () => {
            const gpuEvents = traceData.GPU.mainGPUThreadTasks;
            for (const event of gpuEvents) {
                const index = entryData.indexOf(event);
                assert.exists(index);
                assert.strictEqual(flameChartData.entryStartTimes[index], _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(event.ts));
            }
        });
        it('adds total times correctly', () => {
            const gpuEvents = traceData.GPU.mainGPUThreadTasks;
            for (const event of gpuEvents) {
                const index = entryData.indexOf(event);
                assert.exists(index);
                if (_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isTraceEventMarkerEvent(event)) {
                    assert.isNaN(flameChartData.entryTotalTimes[index]);
                    continue;
                }
                const expectedTotalTimeForEvent = event.dur ?
                    _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(event.dur) :
                    _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.InstantEventVisibleDurationMs;
                assert.strictEqual(flameChartData.entryTotalTimes[index], expectedTotalTimeForEvent);
            }
        });
    });
    describe('colorForEvent and titleForEvent', () => {
        before(() => {
            // Rather than use the real colours here and burden the test with having to
            // inject loads of CSS, we fake out the colours. this is fine for our tests as
            // the exact value of the colours is not important; we just make sure that it
            // parses them out correctly. Each variable is given a different rgb() value to
            // ensure we know the code is working and using the right one.
            const styleElement = document.createElement('style');
            styleElement.id = 'fake-perf-panel-colors';
            styleElement.textContent = `
        :root {
          --app-color-painting: rgb(6 6 6);
        }
      `;
            document.documentElement.appendChild(styleElement);
            _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.clearThemeCache();
        });
        after(() => {
            const styleElementToRemove = document.documentElement.querySelector('#fake-perf-panel-colors');
            if (styleElementToRemove) {
                document.documentElement.removeChild(styleElementToRemove);
            }
            _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.clearThemeCache();
        });
        it('returns the correct color and title for GPU tasks', () => {
            const gpuEvents = traceData.GPU.mainGPUThreadTasks;
            for (const event of gpuEvents) {
                assert.strictEqual(gpuTrackAppender.titleForEvent(event), 'GPU');
                assert.strictEqual(gpuTrackAppender.colorForEvent(event), 'rgb(6 6 6)');
            }
        });
    });
    describe('highlightedEntryInfo', () => {
        it('returns the info for a entry correctly', () => {
            const gpuEvents = traceData.GPU.mainGPUThreadTasks;
            const highlightedEntryInfo = gpuTrackAppender.highlightedEntryInfo(gpuEvents[0]);
            // The i18n encodes spaces using the u00A0 unicode character.
            assert.strictEqual(highlightedEntryInfo.formattedTime, '52.37\u00A0ms');
        });
    });
});
//# sourceMappingURL=GPUTrackAppender.test.js.map

/***/ })

}]);