"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_track_appenders_ExtensionTrackAppender_test_ts"],{

/***/ "./src/panels/timeline/track_appenders/ExtensionTrackAppender.test.ts":
/*!****************************************************************************!*\
  !*** ./src/panels/timeline/track_appenders/ExtensionTrackAppender.test.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/legacy/components/perf_ui/perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
/* harmony import */ var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/legacy/theme_support/theme_support.js */ "./src/ui/legacy/theme_support/theme_support.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






function initTrackAppender(flameChartData, traceParsedData, entryData, entryTypeByLevel) {
    _timeline_js__WEBPACK_IMPORTED_MODULE_5__.ExtensionDataGatherer.ExtensionDataGatherer.instance().modelChanged(traceParsedData);
    const compatibilityTracksAppender = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.CompatibilityTracksAppender.CompatibilityTracksAppender(flameChartData, traceParsedData, entryData, entryTypeByLevel);
    return compatibilityTracksAppender.allVisibleTrackAppenders().filter(track => track.appenderName === 'Extension');
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('ExtensionTrackAppender', function () {
    let traceData;
    let extensionTrackAppenders;
    let entryData = [];
    let flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.createEmpty();
    let entryTypeByLevel = [];
    beforeEach(async function () {
        _timeline_js__WEBPACK_IMPORTED_MODULE_5__.ExtensionDataGatherer.ExtensionDataGatherer.removeInstance();
        ({ traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'extension-tracks-and-marks.json.gz'));
        extensionTrackAppenders = initTrackAppender(flameChartData, traceData, entryData, entryTypeByLevel);
        let level = 0;
        extensionTrackAppenders.forEach(appender => {
            level = appender.appendTrackAtLevel(level);
        });
    });
    afterEach(() => {
        entryData = [];
        flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.createEmpty();
        entryTypeByLevel = [];
    });
    describe('appendTrackAtLevel', function () {
        it('creates flamechart groups for the Extension tracks properly', function () {
            assert.strictEqual(flameChartData.groups.length, 3);
            assert.strictEqual(flameChartData.groups[0].name, 'A track group — Custom Track');
            assert.strictEqual(flameChartData.groups[0].startLevel, 0);
            assert.strictEqual(flameChartData.groups[0].style.nestingLevel, 0);
            assert.strictEqual(flameChartData.groups[1].name, 'Another Extension Track');
            assert.strictEqual(flameChartData.groups[1].startLevel, 0);
            assert.strictEqual(flameChartData.groups[1].style.nestingLevel, 1);
            assert.strictEqual(flameChartData.groups[2].name, 'An Extension Track — Custom Track');
            assert.strictEqual(flameChartData.groups[2].startLevel, 1);
            assert.strictEqual(flameChartData.groups[2].style.nestingLevel, 0);
        });
        it('adds start times correctly', function () {
            const allExtensionTrackEntries = traceData.ExtensionTraceData.extensionTrackData.map(track => Object.values(track.entriesByTrack)).flat(2);
            for (let i = 0; i < allExtensionTrackEntries.length; ++i) {
                const event = allExtensionTrackEntries[i];
                assert.strictEqual(flameChartData.entryStartTimes[i], _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(event.ts));
            }
        });
        it('adds total times correctly', function () {
            const allExtensionTrackEntries = traceData.ExtensionTraceData.extensionTrackData.map(track => Object.values(track.entriesByTrack)).flat(2);
            for (let i = 0; i < allExtensionTrackEntries.length; i++) {
                const event = allExtensionTrackEntries[i];
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
          --ref-palette-primary70: rgb(4 4 4);
          --ref-palette-tertiary70: rgb(10 10 10);
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
        it('returns the correct color and title for extension entries', function () {
            const allExtensionTrackEntries = traceData.ExtensionTraceData.extensionTrackData.map(track => Object.values(track.entriesByTrack)).flat(2);
            for (const event of allExtensionTrackEntries) {
                assert.strictEqual(extensionTrackAppenders[0].titleForEvent(event), event.name);
                if (event.args.color === 'tertiary') {
                    // "tertiary" color category is mapped to --ref-palette-tertiary70
                    // which is faked out to 10, 10, 10
                    assert.strictEqual(extensionTrackAppenders[0].colorForEvent(event), 'rgb(10 10 10)');
                }
                else {
                    // Unknown colors are mapped to "primary" by default, and
                    // "primary" color category is mapped to --ref-palette-primary70
                    // which is faked out to 4, 4, 4
                    assert.strictEqual(extensionTrackAppenders[0].colorForEvent(event), 'rgb(4 4 4)');
                }
            }
        });
        it('sets a default value when a color is not set or is set an unknown value', function () {
            const mockExtensionEntryNoColor = {
                args: {
                    metadata: { dataType: 'track-entry', extensionName: 'Extension' },
                    track: 'A track',
                },
                cat: 'devtools.extension',
            };
            const mockExtensionEntryUnknownColor = {
                args: {
                    metadata: { dataType: 'track-entry', extensionName: 'Extension' },
                    track: 'A track',
                    color: 'anUnknownColor',
                },
                cat: 'devtools.extension',
            };
            // "primary" color category is mapped to --ref-palette-primary70
            // which is faked out to 4, 4, 4
            assert.strictEqual(extensionTrackAppenders[0].colorForEvent(mockExtensionEntryNoColor), 'rgb(4 4 4)');
            assert.strictEqual(extensionTrackAppenders[0].colorForEvent(mockExtensionEntryUnknownColor), 'rgb(4 4 4)');
        });
    });
    describe('toggling', function () {
        it('Does not append extension data when the configuration is set to disabled', async function () {
            _timeline_js__WEBPACK_IMPORTED_MODULE_5__.ExtensionDataGatherer.ExtensionDataGatherer.removeInstance();
            entryData = [];
            flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.createEmpty();
            entryTypeByLevel = [];
            _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelinePanel.TimelinePanel.extensionDataVisibilitySetting().set(false);
            traceData = (await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'extension-tracks-and-marks.json.gz')).traceData;
            extensionTrackAppenders = initTrackAppender(flameChartData, traceData, entryData, entryTypeByLevel);
            let level = 0;
            extensionTrackAppenders.forEach(appender => {
                level = appender.appendTrackAtLevel(level);
            });
            assert.strictEqual(flameChartData.groups.length, 0);
            _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelinePanel.TimelinePanel.extensionDataVisibilitySetting().set(true);
        });
    });
    describe('highlightedEntryInfo', function () {
        it('returns the info for an entry correctly', function () {
            const allExtensionTrackEntries = traceData.ExtensionTraceData.extensionTrackData.map(track => Object.values(track.entriesByTrack)).flat(2);
            const highlightedEntryInfo = extensionTrackAppenders[0].highlightedEntryInfo(allExtensionTrackEntries[0]);
            // The i18n encodes spaces using the u00A0 unicode character.
            assert.strictEqual(highlightedEntryInfo.formattedTime, '1.00\u00A0s');
            assert.strictEqual(highlightedEntryInfo.title, 'A hint if needed');
        });
    });
});


/***/ })

}]);