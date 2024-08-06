"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_performance_panel_overview_js"],{

/***/ "./ui/components/docs/performance_panel/overview.js":
/*!**********************************************************!*\
  !*** ./ui/components/docs/performance_panel/overview.js ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */ var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/timeline/timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */ var _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/trace_bounds/trace_bounds.js */ "./services/trace_bounds/trace_bounds.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.initializeGlobalVars();
await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_5__.ComponentServerSetup.setup();
const container = document.querySelector('div.container');
if (!container) {
    throw new Error('could not find container');
}
const params = new URLSearchParams(window.location.search);
const fileName = (params.get('trace') || 'web-dev') + '.json.gz';
const customStartWindowTime = params.get('windowStart');
const customEndWindowTime = params.get('windowEnd');
async function renderMiniMap(containerSelector, options) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        throw new Error('could not find container');
    }
    const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_4__.TraceLoader.traceEngine(null, fileName);
    const mainThread = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.Threads.threadsInRenderer(traceData.Renderer, traceData.AuctionWorklets)
        .find(t => t.type === "MAIN_THREAD" /* TraceEngine.Handlers.Threads.ThreadType.MAIN_THREAD */);
    if (!mainThread) {
        throw new Error('Could not find main thread.');
    }
    const minimap = new _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_1__.TimelineMiniMap.TimelineMiniMap();
    minimap.markAsRoot();
    minimap.show(container);
    _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_2__.TraceBounds.BoundsManager.instance().resetWithNewBounds(traceData.Meta.traceBounds);
    const zoomedWindow = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.MainThreadActivity.calculateWindow(traceData.Meta.traceBounds, mainThread.entries);
    _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_2__.TraceBounds.BoundsManager.instance().setTimelineVisibleWindow(zoomedWindow);
    minimap.setData({
        traceParsedData: traceData,
        settings: {
            showMemory: options.showMemory,
            showScreenshots: true,
        },
    });
    if (customStartWindowTime && customEndWindowTime) {
        _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_2__.TraceBounds.BoundsManager.instance().setTimelineVisibleWindow(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.traceWindowFromMilliSeconds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MilliSeconds(Number(customStartWindowTime)), _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MilliSeconds(Number(customEndWindowTime))));
    }
}
await renderMiniMap('.container', { showMemory: false });
await renderMiniMap('.container-with-memory', { showMemory: true });
//# sourceMappingURL=overview.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);