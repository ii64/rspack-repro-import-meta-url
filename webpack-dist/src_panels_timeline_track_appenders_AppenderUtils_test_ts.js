"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_track_appenders_AppenderUtils_test_ts"],{

/***/ "./src/panels/timeline/track_appenders/AppenderUtils.test.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/timeline/track_appenders/AppenderUtils.test.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./src/testing/TraceHelpers.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('AppenderUtils', () => {
    const defaultGroupStyle = {
        padding: 4,
        height: 17,
        collapsible: true,
        // This color is same as --sys-color-on-surface in themeColors.css
        color: 'rgb(31 31 31 / 100%)',
        // This color is same as --sys-color-cdt-base-container in themeColors.css
        backgroundColor: 'rgb(253 252 251 / 100%)',
        nestingLevel: 0,
        shareHeaderLine: true,
    };
    describe('buildGroupStyle', () => {
        it('builds default GroupStyle correctly', () => {
            const builtGroupStyle = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.buildGroupStyle();
            assert.deepEqual(builtGroupStyle, defaultGroupStyle);
        });
        it('builds GroupStyle with customized fields correctly', () => {
            const gpuGroupStyle = { ...defaultGroupStyle };
            gpuGroupStyle.shareHeaderLine = false;
            const builtGroupStyle = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.buildGroupStyle({ shareHeaderLine: false });
            assert.deepEqual(builtGroupStyle, gpuGroupStyle);
        });
    });
    describe('buildTrackHeader', () => {
        const legends = [{
                color: 'yellow',
                category: 'test',
            }];
        const trackHeader = {
            startLevel: 0,
            name: 'Header Name',
            style: defaultGroupStyle,
            selectable: true,
            expanded: true,
            showStackContextMenu: true,
            legends,
            jslogContext: 'animations',
        };
        it('builds a track header correctly', () => {
            const builtHeader = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.buildTrackHeader(_timeline_js__WEBPACK_IMPORTED_MODULE_3__.CompatibilityTracksAppender.VisualLoggingTrackName.ANIMATIONS, 
            /* startLevel= */ 0, 'Header Name', _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.buildGroupStyle(), /* selectable= */ true, 
            /* expanded= */ true, /* showStackContextMenu= */ true, legends);
            assert.deepEqual(builtHeader, trackHeader);
        });
    });
    describe('getFormattedTime', () => {
        it('returns the time info for a entry with no duration correctly', async () => {
            const formattedTime = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getFormattedTime(_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.defaultTraceEvent.dur);
            assert.strictEqual(formattedTime, '');
        });
        it('returns the time info for given total time correctly', async () => {
            const totalTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000);
            const formattedTime = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getFormattedTime(totalTime);
            // The i18n encodes spaces using the u00A0 unicode character.
            assert.strictEqual(formattedTime, '10.00\u00A0ms');
        });
        it('returns the time info for given total time and self time correctly', async () => {
            const totalTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000);
            const selfTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1000);
            const formattedTime = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getFormattedTime(totalTime, selfTime);
            // The i18n encodes spaces using the u00A0 unicode character.
            assert.strictEqual(formattedTime, '10.00\u00A0ms (self 1.00\u00A0ms)');
        });
        it('returns the time info for same total time and self time correctly', async () => {
            const totalTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000);
            const selfTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000);
            const formattedTime = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getFormattedTime(totalTime, selfTime);
            // The i18n encodes spaces using the u00A0 unicode character.
            assert.strictEqual(formattedTime, '10.00\u00A0ms');
        });
    });
    describe('getEventLevel', () => {
        it('returns the level for async events correctly', async () => {
            const lastTimestampByLevel = [];
            const eventOne = {
                ..._testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.defaultTraceEvent,
                ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(0),
                dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10),
            };
            const eventTwo = {
                ..._testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.defaultTraceEvent,
                ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(5),
                dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10),
            };
            const eventThree = {
                ..._testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.defaultTraceEvent,
                ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(20),
                dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10),
            };
            let level = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getEventLevel(eventOne, lastTimestampByLevel);
            // For first event, the track is empty, so it always returns 0.
            assert.strictEqual(level, 0);
            level = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getEventLevel(eventTwo, lastTimestampByLevel);
            // For eventTwo, its start time is smaller than eventOne's end time, so it should be appended to level 1.
            assert.strictEqual(level, 1);
            level = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getEventLevel(eventThree, lastTimestampByLevel);
            // For eventThree, it doesn't overlap with eventOne, so it can fit in level 0.
            assert.strictEqual(level, 0);
        });
        it('returns the level for sync events correctly', async () => {
            const lastTimestampByLevel = [];
            const eventOne = {
                ..._testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.defaultTraceEvent,
                ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(0),
                dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(30),
            };
            const eventTwo = {
                ..._testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.defaultTraceEvent,
                ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(5),
                dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10),
            };
            const eventThree = {
                ..._testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.defaultTraceEvent,
                ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10),
                dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(2),
            };
            const eventFour = {
                ..._testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.defaultTraceEvent,
                ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(20),
                dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10),
            };
            let level = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getEventLevel(eventOne, lastTimestampByLevel);
            // For first event, the track is empty, so it always returns 0.
            assert.strictEqual(level, 0);
            level = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getEventLevel(eventTwo, lastTimestampByLevel);
            // For eventTwo, its time is a subset of the eventOne, so it will be append as eventOne's child.
            assert.strictEqual(level, 1);
            level = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getEventLevel(eventThree, lastTimestampByLevel);
            // For eventTwo, its time is a subset of the eventTwo, so it will be append as eventTwo's child.
            assert.strictEqual(level, 2);
            level = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getEventLevel(eventFour, lastTimestampByLevel);
            // For eventFour, its time is a subset of eventOne but not eventTwo, so it will be append as eventTwo's child.
            assert.strictEqual(level, 1);
        });
    });
});


/***/ })

}]);