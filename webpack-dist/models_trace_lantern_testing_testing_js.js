"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_lantern_testing_testing_js"],{

/***/ "./models/trace/lantern/testing/MetricTestUtils.js":
/*!*********************************************************!*\
  !*** ./models/trace/lantern/testing/MetricTestUtils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComputationDataFromFixture: () => (/* binding */ getComputationDataFromFixture),
/* harmony export */   loadTrace: () => (/* binding */ loadTrace),
/* harmony export */   runTraceEngine: () => (/* binding */ runTraceEngine)
/* harmony export */ });
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../trace.js */ "./models/trace/trace.js");
/* harmony import */ var _lantern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lantern.js */ "./models/trace/lantern/lantern.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Why can other tests import this directly but we get yelled at here?
// eslint-disable-next-line rulesdir/es_modules_import



async function loadTrace(context, name) {
    const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(context, name);
    return {
        traceEvents: traceEvents,
    };
}
async function runTraceEngine(trace) {
    const processor = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Processor.TraceProcessor.createWithAllHandlers();
    await processor.parse(trace.traceEvents);
    if (!processor.traceParsedData) {
        throw new Error('No data');
    }
    return processor.traceParsedData;
}
async function getComputationDataFromFixture({ trace, settings, url }) {
    settings = settings ?? {};
    if (!settings.throttlingMethod) {
        settings.throttlingMethod = 'simulate';
    }
    const traceEngineData = await runTraceEngine(trace);
    const requests = _trace_js__WEBPACK_IMPORTED_MODULE_1__.LanternComputationData.createNetworkRequests(trace, traceEngineData);
    const networkAnalysis = _lantern_js__WEBPACK_IMPORTED_MODULE_2__.Core.NetworkAnalyzer.analyze(requests);
    return {
        simulator: _lantern_js__WEBPACK_IMPORTED_MODULE_2__.Simulation.Simulator.createSimulator({ ...settings, networkAnalysis }),
        graph: _trace_js__WEBPACK_IMPORTED_MODULE_1__.LanternComputationData.createGraph(requests, trace, traceEngineData, url),
        processedNavigation: _trace_js__WEBPACK_IMPORTED_MODULE_1__.LanternComputationData.createProcessedNavigation(traceEngineData),
    };
}

//# sourceMappingURL=MetricTestUtils.js.map

/***/ }),

/***/ "./models/trace/lantern/testing/testing.js":
/*!*************************************************!*\
  !*** ./models/trace/lantern/testing/testing.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComputationDataFromFixture: () => (/* reexport safe */ _MetricTestUtils_js__WEBPACK_IMPORTED_MODULE_0__.getComputationDataFromFixture),
/* harmony export */   loadTrace: () => (/* reexport safe */ _MetricTestUtils_js__WEBPACK_IMPORTED_MODULE_0__.loadTrace),
/* harmony export */   runTraceEngine: () => (/* reexport safe */ _MetricTestUtils_js__WEBPACK_IMPORTED_MODULE_0__.runTraceEngine)
/* harmony export */ });
/* harmony import */ var _MetricTestUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetricTestUtils.js */ "./models/trace/lantern/testing/MetricTestUtils.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=testing.js.map

/***/ })

}]);