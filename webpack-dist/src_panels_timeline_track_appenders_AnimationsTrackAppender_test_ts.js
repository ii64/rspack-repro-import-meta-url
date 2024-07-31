"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_track_appenders_AnimationsTrackAppender_test_ts"],{

/***/ "./src/panels/timeline/track_appenders/AnimationsTrackAppender.test.ts":
/*!*****************************************************************************!*\
  !*** ./src/panels/timeline/track_appenders/AnimationsTrackAppender.test.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/legacy/components/perf_ui/perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
/* harmony import */ var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/legacy/theme_support/theme_support.js */ "./src/ui/legacy/theme_support/theme_support.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






function initTrackAppender(flameChartData, traceParsedData, entryData, entryTypeByLevel) {
    const compatibilityTracksAppender = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.CompatibilityTracksAppender.CompatibilityTracksAppender(flameChartData, traceParsedData, entryData, entryTypeByLevel);
    return compatibilityTracksAppender.animationsTrackAppender();
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('AnimationsTrackAppender', function () {
    let traceData;
    let animationsTrackAppender;
    let entryData = [];
    let flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.createEmpty();
    let entryTypeByLevel = [];
    beforeEach(async function () {
        ({ traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'animation.json.gz'));
        animationsTrackAppender = initTrackAppender(flameChartData, traceData, entryData, entryTypeByLevel);
        animationsTrackAppender.appendTrackAtLevel(0);
    });
    afterEach(() => {
        entryData = [];
        flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.createEmpty();
        entryTypeByLevel = [];
    });
    describe('appendTrackAtLevel', function () {
        it('creates a flamechart group for the Animations track', function () {
            assert.strictEqual(flameChartData.groups.length, 1);
            assert.strictEqual(flameChartData.groups[0].name, 'Animations');
        });
        it('adds start times correctly', function () {
            const animationsRequests = traceData.Animations.animations;
            for (let i = 0; i < animationsRequests.length; ++i) {
                const event = animationsRequests[i];
                assert.strictEqual(flameChartData.entryStartTimes[i], _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(event.ts));
            }
        });
        it('adds total times correctly', function () {
            const animationsRequests = traceData.Animations.animations;
            for (let i = 0; i < animationsRequests.length; i++) {
                const event = animationsRequests[i];
                if (_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isTraceEventMarkerEvent(event)) {
                    assert.isNaN(flameChartData.entryTotalTimes[i]);
                    continue;
                }
                const expectedTotalTimeForEvent = event.dur ?
                    _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(event.dur) :
                    _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.InstantEventVisibleDurationMs;
                assert.strictEqual(flameChartData.entryTotalTimes[i], expectedTotalTimeForEvent);
            }
        });
    });
    describe('colorForEvent and titleForEvent', function () {
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
          --app-color-rendering: rgb(4 4 4);
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
        it('returns the correct color and title for GPU tasks', function () {
            const animationsRequests = traceData.Animations.animations;
            for (const event of animationsRequests) {
                assert.strictEqual(animationsTrackAppender.titleForEvent(event), event.name);
                assert.strictEqual(animationsTrackAppender.colorForEvent(), 'rgb(4 4 4)');
            }
        });
    });
    describe('highlightedEntryInfo', function () {
        it('returns the info for an entry correctly', function () {
            const animationsRequests = traceData.Animations.animations;
            const highlightedEntryInfo = animationsTrackAppender.highlightedEntryInfo(animationsRequests[0]);
            // The i18n encodes spaces using the u00A0 unicode character.
            assert.strictEqual(highlightedEntryInfo.formattedTime, '2.01\u00A0s');
        });
    });
});


/***/ })

}]);