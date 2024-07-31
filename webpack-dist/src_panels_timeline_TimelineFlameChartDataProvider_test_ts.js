"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_TimelineFlameChartDataProvider_test_ts"],{

/***/ "./src/panels/timeline/TimelineFlameChartDataProvider.test.ts":
/*!********************************************************************!*\
  !*** ./src/panels/timeline/TimelineFlameChartDataProvider.test.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./src/testing/TraceHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('TimelineFlameChartDataProvider', function () {
    describe('groupTreeEvents', function () {
        it('returns the correct events for tree views given a flame chart group', async function () {
            const dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'sync-like-timings.json.gz');
            dataProvider.setModel(traceData);
            const timingsTrackGroup = dataProvider.timelineData().groups.find(g => g.name === 'Timings');
            if (!timingsTrackGroup) {
                assert.fail('Could not find Timings track flame chart group');
            }
            const groupTreeEvents = dataProvider.groupTreeEvents(timingsTrackGroup);
            const allTimingEvents = [
                ...traceData.UserTimings.consoleTimings,
                ...traceData.UserTimings.timestampEvents,
                ...traceData.UserTimings.performanceMarks,
                ...traceData.UserTimings.performanceMeasures,
                ...traceData.PageLoadMetrics.allMarkerEvents,
            ].sort((a, b) => a.ts - b.ts);
            assert.deepEqual(groupTreeEvents, allTimingEvents);
        });
        it('filters out async events if they cannot be added to the tree', async function () {
            const dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'timings-track.json.gz');
            dataProvider.setModel(traceData);
            const timingsTrackGroup = dataProvider.timelineData().groups.find(g => g.name === 'Timings');
            if (!timingsTrackGroup) {
                assert.fail('Could not find Timings track flame chart group');
            }
            const groupTreeEvents = dataProvider.groupTreeEvents(timingsTrackGroup);
            assert.strictEqual(groupTreeEvents?.length, 12);
            const allEventsAreSync = groupTreeEvents?.every(event => !_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isAsyncPhase(event.ph));
            assert.isTrue(allEventsAreSync);
        });
    });
    it('can provide the index for an event and the event for a given index', async function () {
        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupIgnoreListManagerEnvironment)();
        const dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'one-second-interaction.json.gz');
        dataProvider.setModel(traceData);
        // Need to use an index that is not a frame, so jump past the frames.
        const event = dataProvider.eventByIndex(100);
        assert.isOk(event);
        assert.strictEqual(dataProvider.indexForEvent(event), 100);
    });
    it('renders track in the correct order by default', async function () {
        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupIgnoreListManagerEnvironment)();
        const dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'extension-tracks-and-marks.json.gz');
        dataProvider.setModel(traceData);
        const groupNames = dataProvider.timelineData().groups.map(g => g.name);
        assert.deepEqual(groupNames, [
            'Frames',
            'Timings',
            'Interactions',
            'A track group — Custom Track',
            'Another Extension Track',
            'An Extension Track — Custom Track',
            'Main — http://localhost:3000/',
            'Thread Pool',
            'Thread Pool Worker 1',
            'Thread Pool Worker 2',
            'Thread Pool Worker 3',
            'StackSamplingProfiler',
            'GPU',
        ]);
    });
    it('adds candy stripe and triangle decorations to long tasks in the main thread', async function () {
        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupIgnoreListManagerEnvironment)();
        const dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'one-second-interaction.json.gz');
        dataProvider.setModel(traceData);
        const { entryDecorations } = dataProvider.timelineData();
        const stripingTitles = [];
        const triangleTitles = [];
        Object.entries(entryDecorations).forEach(([index, decorationsForEvent]) => {
            const entryTitle = dataProvider.entryTitle(parseInt(index, 10)) ?? '';
            for (const decoration of decorationsForEvent) {
                if (decoration.type === _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChartDecorationType.CANDY) {
                    stripingTitles.push(entryTitle);
                }
                if (decoration.type === _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE) {
                    triangleTitles.push(entryTitle);
                }
            }
        });
        assert.deepEqual(stripingTitles, [
            'Pointer', // The interaction event in the Interactions track for the pointer event.
            'Task', // The same long task as above, but rendered by the new engine.
        ]);
        assert.deepEqual(triangleTitles, [
            'Pointer', // The interaction event in the Interactions track for the pointer event.
            'Task', // The same long task as above, but rendered by the new engine.
        ]);
    });
    it('populates the frames track with frames and screenshots', async function () {
        const dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
        dataProvider.setModel(traceData);
        const framesTrack = dataProvider.timelineData().groups.find(g => {
            return g.name.includes('Frames');
        });
        if (!framesTrack) {
            throw new Error('Could not find expected Frames track');
        }
        const framesLevel = framesTrack.startLevel;
        const screenshotsLevel = framesLevel + 1;
        // The frames track first shows the frames, and then shows screenhots just below it.
        assert.strictEqual(dataProvider.getEntryTypeForLevel(framesLevel), _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.EntryType.Frame);
        assert.strictEqual(dataProvider.getEntryTypeForLevel(screenshotsLevel), _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.EntryType.Screenshot);
        // There are 5 screenshots in this trace, so we expect there to be 5 events on the screenshots track level.
        const eventsOnScreenshotsLevel = dataProvider.timelineData().entryLevels.filter(e => e === screenshotsLevel);
        assert.lengthOf(eventsOnScreenshotsLevel, 5);
    });
    describe('ignoring frames', function () {
        it('removes entries from the data that match the ignored URL', async function () {
            const { ignoreListManager } = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupIgnoreListManagerEnvironment)();
            const dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'react-hello-world.json.gz');
            dataProvider.setModel(traceData);
            const eventCountBeforeIgnoreList = dataProvider.timelineData().entryStartTimes.length;
            const SCRIPT_TO_IGNORE = 'https://unpkg.com/react@18.2.0/umd/react.development.js';
            // Clear the data provider cache and add the React script to the ignore list.
            dataProvider.reset();
            ignoreListManager.ignoreListURL(SCRIPT_TO_IGNORE);
            const eventCountAfterIgnoreList = dataProvider.timelineData().entryStartTimes.length;
            // Ensure that the amount of events we show on the flame chart is less
            // than before, now we have added the React URL to the ignore list.
            assert.isBelow(eventCountAfterIgnoreList, eventCountBeforeIgnoreList);
            // Clear the data provider cache and unignore the script again
            dataProvider.reset();
            ignoreListManager.unIgnoreListURL(SCRIPT_TO_IGNORE);
            // Ensure that now we have un-ignored the URL that we get the full set of events again.
            assert.strictEqual(dataProvider.timelineData().entryStartTimes.length, eventCountBeforeIgnoreList);
        });
    });
    it('filters navigations to only return those that happen on the main frame', async function () {
        const dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'multiple-navigations-with-iframes.json.gz');
        dataProvider.setModel(traceData);
        const mainFrameID = traceData.Meta.mainFrameId;
        const navigationEvents = dataProvider.mainFrameNavigationStartEvents();
        // Ensure that every navigation event that we return is for the main frame.
        assert.isTrue(navigationEvents.every(navEvent => {
            return navEvent.args.frame === mainFrameID;
        }));
    });
});


/***/ })

}]);