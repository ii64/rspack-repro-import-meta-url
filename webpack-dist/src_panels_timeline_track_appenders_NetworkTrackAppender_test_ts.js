"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_track_appenders_NetworkTrackAppender_test_ts"],{

/***/ "./src/panels/timeline/track_appenders/NetworkTrackAppender.test.ts":
/*!**************************************************************************!*\
  !*** ./src/panels/timeline/track_appenders/NetworkTrackAppender.test.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/legacy/components/perf_ui/perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/components.js */ "./src/panels/timeline/components/components.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('NetworkTrackAppender', function () {
    let traceData;
    let networkTrackAppender;
    let flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.createEmpty();
    beforeEach(async function () {
        ({ traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'cls-cluster-max-timeout.json.gz'));
        networkTrackAppender =
            new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.NetworkTrackAppender.NetworkTrackAppender(flameChartData, traceData.NetworkRequests.byTime);
        networkTrackAppender.appendTrackAtLevel(0);
    });
    afterEach(() => {
        flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.createEmpty();
    });
    describe('appendTrackAtLevel', function () {
        it('creates a flamechart group for the Network track', function () {
            assert.strictEqual(flameChartData.groups.length, 1);
            assert.strictEqual(flameChartData.groups[0].name, 'Network');
        });
        it('adds start times correctly', function () {
            const networkRequests = traceData.NetworkRequests.byTime;
            for (let i = 0; i < networkRequests.length; ++i) {
                const event = networkRequests[i];
                assert.strictEqual(flameChartData.entryStartTimes[i], _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(event.ts));
            }
        });
        it('adds total times correctly', function () {
            const networkRequests = traceData.NetworkRequests.byTime;
            for (let i = 0; i < networkRequests.length; i++) {
                const event = networkRequests[i];
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
        it('returns the correct color and title for GPU tasks', function () {
            const networkRequests = traceData.NetworkRequests.byTime;
            for (const event of networkRequests) {
                assert.strictEqual(networkTrackAppender.titleForEvent(event), event.name);
                const color = _components_components_js__WEBPACK_IMPORTED_MODULE_4__.Utils.colorForNetworkRequest(event);
                assert.strictEqual(networkTrackAppender.colorForEvent(event), color);
            }
        });
    });
    describe('highlightedEntryInfo', function () {
        it('returns the info for a entry correctly', function () {
            const networkRequests = traceData.NetworkRequests.byTime;
            const highlightedEntryInfo = networkTrackAppender.highlightedEntryInfo(networkRequests[0]);
            // The i18n encodes spaces using the u00A0 unicode character.
            assert.strictEqual(highlightedEntryInfo.formattedTime, '286.21\u00A0ms');
        });
    });
});


/***/ })

}]);