"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_performance_panel_flamechart_js"],{

/***/ "./ui/components/docs/performance_panel/flamechart.js":
/*!************************************************************!*\
  !*** ./ui/components/docs/performance_panel/flamechart.js ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */ var _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars();
await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_4__.ComponentServerSetup.setup();
const defaultGroupStyle = {
    height: 17,
    padding: 4,
    collapsible: false,
    color: 'black',
    backgroundColor: 'grey',
    nestingLevel: 0,
    itemsHeight: 17,
};
/**
 * Render a basic flame chart with 3 events on the same level
 **/
function renderBasicExample() {
    class FakeProviderWithBasicEvents extends _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.FakeFlameChartProvider {
        timelineData() {
            return _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.create({
                entryLevels: [0, 0, 0, 1, 1, 1, 2, 2, 2],
                entryStartTimes: [5, 60, 80, 5, 60, 80, 5, 60, 80],
                entryTotalTimes: [50, 10, 10, 50, 10, 10, 50, 10, 10],
                groups: [
                    {
                        name: 'Test Group 0',
                        startLevel: 0,
                        style: { ...defaultGroupStyle, collapsible: true },
                    },
                    {
                        name: 'Test Group 1',
                        startLevel: 1,
                        style: { ...defaultGroupStyle, collapsible: true, color: 'red', backgroundColor: 'green' },
                    },
                    {
                        name: 'Test Group 2',
                        startLevel: 2,
                        style: { ...defaultGroupStyle, collapsible: true, color: 'blue', backgroundColor: 'yellow' },
                    },
                ],
            });
        }
    }
    const container = document.querySelector('div#basic');
    if (!container) {
        throw new Error('No container');
    }
    const delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.MockFlameChartDelegate();
    const dataProvider = new FakeProviderWithBasicEvents();
    const flameChart = new _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChart(dataProvider, delegate);
    flameChart.markAsRoot();
    flameChart.setWindowTimes(0, 100);
    flameChart.show(container);
    flameChart.update();
}
/**
 * Render a flame chart with main thread long events to stripe and a warning triangle.
 **/
function renderLongTaskExample() {
    class FakeProviderWithLongTasksForStriping extends _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.FakeFlameChartProvider {
        timelineData() {
            return _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.create({
                entryLevels: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2],
                entryStartTimes: [5, 55, 70, 5, 30, 55, 75, 5, 10, 15, 20],
                entryTotalTimes: [45, 10, 20, 20, 20, 5, 15, 4, 4, 4, 4],
                entryDecorations: [
                    [
                        {
                            type: "CANDY" /* PerfUI.FlameChart.FlameChartDecorationType.CANDY */,
                            startAtTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(25_000),
                        },
                        { type: "WARNING_TRIANGLE" /* PerfUI.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ },
                    ],
                    [{ type: "WARNING_TRIANGLE" /* PerfUI.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ }],
                    [
                        { type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ },
                        { type: "WARNING_TRIANGLE" /* PerfUI.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ },
                    ],
                    [
                        {
                            type: "CANDY" /* PerfUI.FlameChart.FlameChartDecorationType.CANDY */,
                            startAtTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(15_000),
                        },
                    ],
                    [
                        {
                            type: "CANDY" /* PerfUI.FlameChart.FlameChartDecorationType.CANDY */,
                            startAtTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10_000),
                        },
                        { type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ },
                    ],
                    [
                        { type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ },
                    ],
                    [
                        {
                            type: "CANDY" /* PerfUI.FlameChart.FlameChartDecorationType.CANDY */,
                            startAtTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10_000),
                        },
                        { type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ },
                        { type: "WARNING_TRIANGLE" /* PerfUI.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ },
                    ],
                    [
                        { type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ },
                    ],
                    [
                        { type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ },
                        { type: "WARNING_TRIANGLE" /* PerfUI.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ },
                    ],
                    [
                        {
                            type: "CANDY" /* PerfUI.FlameChart.FlameChartDecorationType.CANDY */,
                            startAtTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1_000),
                        },
                        { type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ },
                    ],
                    [
                        {
                            type: "CANDY" /* PerfUI.FlameChart.FlameChartDecorationType.CANDY */,
                            startAtTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1_000),
                        },
                        { type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ },
                        { type: "WARNING_TRIANGLE" /* PerfUI.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ },
                    ],
                ],
                groups: [{
                        name: 'Testing Candy Stripe, warning triangles and hidden descendants arrow decorations',
                        startLevel: 0,
                        style: defaultGroupStyle,
                    }],
            });
        }
    }
    const container = document.querySelector('div#long-task');
    if (!container) {
        throw new Error('No container');
    }
    const delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.MockFlameChartDelegate();
    const dataProvider = new FakeProviderWithLongTasksForStriping();
    const flameChart = new _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChart(dataProvider, delegate);
    flameChart.markAsRoot();
    flameChart.setWindowTimes(0, 100);
    flameChart.show(container);
    flameChart.update();
}
/**
 * Render a flame chart with nested track.
 **/
function renderNestedExample() {
    class FakeProviderWithNestedGroup extends _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.FakeFlameChartProvider {
        timelineData() {
            return _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.create({
                entryLevels: [0, 1, 2],
                entryStartTimes: [5, 5, 5],
                entryTotalTimes: [50, 50, 50],
                groups: [
                    {
                        name: 'Test Group 0',
                        startLevel: 0,
                        style: { ...defaultGroupStyle, collapsible: true },
                    },
                    {
                        name: 'Test Nested Group 1',
                        startLevel: 0,
                        style: { ...defaultGroupStyle, collapsible: true, color: 'red', backgroundColor: 'green' },
                    },
                    {
                        name: 'Test Group 2',
                        startLevel: 2,
                        style: { ...defaultGroupStyle, collapsible: true, color: 'blue', backgroundColor: 'yellow' },
                    },
                ],
            });
        }
    }
    const container = document.querySelector('div#nested');
    if (!container) {
        throw new Error('No container');
    }
    const delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.MockFlameChartDelegate();
    const dataProvider = new FakeProviderWithNestedGroup();
    const flameChart = new _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChart(dataProvider, delegate);
    flameChart.markAsRoot();
    flameChart.setWindowTimes(0, 100);
    flameChart.show(container);
    flameChart.update();
}
/**
 * Render a flame chart with nested case and buttons to hide/unhide and reorder
 * tracks
 **/
function renderTrackCustomizationExample() {
    class FakeProviderWithBasicEvents extends _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.FakeFlameChartProvider {
        timelineData() {
            return _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.create({
                entryLevels: [0, 0, 1, 1, 2, 2, 3, 3],
                entryStartTimes: [5, 60, 5, 60, 5, 60],
                entryTotalTimes: [50, 10, 50, 10, 50, 10],
                groups: [
                    {
                        name: 'Test Group 0',
                        startLevel: 0,
                        expanded: true,
                        style: { ...defaultGroupStyle, collapsible: true },
                    },
                    {
                        name: 'Test Group 1',
                        startLevel: 1,
                        expanded: true,
                        style: { ...defaultGroupStyle, collapsible: true, color: 'red', backgroundColor: 'green' },
                    },
                    {
                        name: 'Test Group 2',
                        startLevel: 2,
                        expanded: true,
                        style: { ...defaultGroupStyle, collapsible: true, color: 'blue', backgroundColor: 'yellow' },
                    },
                    {
                        name: 'Test Group 3',
                        startLevel: 2,
                        expanded: true,
                        style: { ...defaultGroupStyle, nestingLevel: 1 },
                    },
                ],
            });
        }
    }
    const container = document.querySelector('div#track-customization');
    if (!container) {
        throw new Error('No container');
    }
    const delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.MockFlameChartDelegate();
    const dataProvider = new FakeProviderWithBasicEvents();
    const flameChart = new _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChart(dataProvider, delegate);
    flameChart.markAsRoot();
    flameChart.setWindowTimes(0, 100);
    flameChart.show(container);
    flameChart.update();
    const indexInput = document.querySelector('#indexOfTrack');
    const buttonHide = document.querySelector('#hide');
    buttonHide?.addEventListener('click', () => {
        const index = Number(indexInput.value);
        flameChart.hideGroup(index);
    });
    const buttonUnhide = document.querySelector('#unhide');
    buttonUnhide?.addEventListener('click', () => {
        const index = Number(indexInput.value);
        flameChart.showGroup(index);
    });
    const buttonForMoveUp = document.querySelector('#testForMoveUp');
    buttonForMoveUp?.addEventListener('click', () => {
        const index = Number(indexInput.value);
        flameChart.moveGroupUp(index);
    });
    const buttonForMoveDown = document.querySelector('#testForMoveDown');
    buttonForMoveDown?.addEventListener('click', () => {
        const index = Number(indexInput.value);
        flameChart.moveGroupDown(index);
    });
}
/**
 * Render a flame chart with event initiators of different sizes.
 * Some initiator and initiated events are hidden.
 **/
function renderInitiatorsExample() {
    class FakeProviderWithVariousTasksForInitiators extends _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.FakeFlameChartProvider {
        timelineData() {
            return _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.create({
                entryLevels: [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 3],
                entryStartTimes: [5, 5, 5, 15, 15, 15, 40, 40, 40, 55.4, 55.4, 55.4, 80, 80, 80, 17],
                entryTotalTimes: [6, 6, 6, 5, 5, 20, 15, 15, 15, 2, 2, 2, 10, 10, 10, 10],
                entryDecorations: [
                    [],
                    [],
                    [
                        { type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ },
                    ],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [
                        { type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ },
                    ],
                    [],
                    [],
                    [
                        { type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ },
                    ],
                    [
                        { type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ },
                    ],
                ],
                initiatorsData: [
                    { initiatorIndex: 2, eventIndex: 3, isInitiatorHidden: true },
                    { initiatorIndex: 1, eventIndex: 13 },
                    { initiatorIndex: 3, eventIndex: 6 },
                    { initiatorIndex: 3, eventIndex: 8, isEntryHidden: true },
                    { initiatorIndex: 6, eventIndex: 11 },
                    { initiatorIndex: 11, eventIndex: 12, isInitiatorHidden: true, isEntryHidden: true },
                    { initiatorIndex: 5, eventIndex: 15 },
                ],
                groups: [{
                        name: 'Testing initiators',
                        startLevel: 0,
                        style: defaultGroupStyle,
                    }],
            });
        }
        maxStackDepth() {
            return 4;
        }
    }
    const container = document.querySelector('div#initiators');
    if (!container) {
        throw new Error('No container');
    }
    const delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.MockFlameChartDelegate();
    const dataProvider = new FakeProviderWithVariousTasksForInitiators();
    const flameChart = new _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChart(dataProvider, delegate);
    flameChart.markAsRoot();
    flameChart.setSelectedEntry(14);
    flameChart.setWindowTimes(0, 100);
    flameChart.show(container);
    flameChart.update();
}
renderBasicExample();
renderLongTaskExample();
renderNestedExample();
renderTrackCustomizationExample();
renderInitiatorsExample();
//# sourceMappingURL=flamechart.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);