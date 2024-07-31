"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_performance_panel_timeline_history_manager_ts"],{

/***/ "./src/ui/components/docs/performance_panel/timeline_history_manager.ts":
/*!******************************************************************************!*\
  !*** ./src/ui/components/docs/performance_panel/timeline_history_manager.ts ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/timeline/timeline.js */ "./src/panels/timeline/timeline.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars();
await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_5__.ComponentServerSetup.setup();
_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ActionRegistration.registerActionExtension({
    actionId: 'timeline.show-history',
    category: _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ActionRegistration.ActionCategory.PERFORMANCE,
    contextTypes() {
        return [_panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_1__.TimelinePanel.TimelinePanel];
    },
    async loadActionDelegate() {
        return new _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_1__.TimelinePanel.ActionDelegate();
    },
});
const { traceData: traceParsedData1 } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(null, 'multiple-navigations.json.gz');
_testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.initTraceBoundsManager(traceParsedData1);
new _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_1__.TimelineHistoryManager.TimelineHistoryManager().addRecording({
    data: {
        traceParseDataIndex: 0,
    },
    filmStripForPreview: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceParsedData1),
    traceParsedData: traceParsedData1,
    startTime: null,
});
const { traceData: traceParsedData2 } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(null, 'web-dev.json.gz');
_testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.initTraceBoundsManager(traceParsedData2);
const container = document.querySelector('.container');
if (!container) {
    throw new Error('could not find container');
}
new _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_1__.TimelineHistoryManager.TimelineHistoryManager().addRecording({
    data: {
        traceParseDataIndex: 1,
    },
    filmStripForPreview: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceParsedData2),
    traceParsedData: traceParsedData2,
    startTime: null,
});
await _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_1__.TimelineHistoryManager.DropDown.show([0, 1], 1, container);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);