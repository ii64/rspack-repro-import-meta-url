"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_timeline_TimelineHistoryManager_test_js"],{

/***/ "./panels/timeline/TimelineHistoryManager.test.js":
/*!********************************************************!*\
  !*** ./panels/timeline/TimelineHistoryManager.test.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('TimelineHistoryManager', function () {
    let historyManager;
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.registerNoopActions)(['timeline.show-history']);
        historyManager = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineHistoryManager.TimelineHistoryManager();
    });
    afterEach(() => {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ActionRegistry.ActionRegistry.reset();
    });
    it('can select from multiple parsed data objects', async function () {
        // Add two parsed data objects to the history manager.
        const { traceData: trace1Data } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'slow-interaction-button-click.json.gz');
        historyManager.addRecording({
            data: {
                traceParseDataIndex: 1,
            },
            filmStripForPreview: null,
            traceParsedData: trace1Data,
            startTime: null,
        });
        const { traceData: trace2Data } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'slow-interaction-keydown.json.gz');
        historyManager.addRecording({
            data: {
                traceParseDataIndex: 2,
            },
            filmStripForPreview: null,
            traceParsedData: trace2Data,
            startTime: null,
        });
        // Make sure the correct model is returned when
        // using the history manager to navigate between trace files..
        const previousRecording = historyManager.navigate(1);
        assert.strictEqual(previousRecording?.traceParseDataIndex, 1);
        const nextRecording = historyManager.navigate(-1);
        assert.strictEqual(nextRecording?.traceParseDataIndex, 2);
    });
});
//# sourceMappingURL=TimelineHistoryManager.test.js.map

/***/ })

}]);