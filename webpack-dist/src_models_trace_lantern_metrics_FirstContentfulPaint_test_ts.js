"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_lantern_metrics_FirstContentfulPaint_test_ts"],{

/***/ "./src/models/trace/lantern/metrics/FirstContentfulPaint.test.ts":
/*!***********************************************************************!*\
  !*** ./src/models/trace/lantern/metrics/FirstContentfulPaint.test.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lantern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lantern.js */ "./src/models/trace/lantern/lantern.ts");
/* harmony import */ var _testing_testing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../testing/testing.js */ "./src/models/trace/lantern/testing/testing.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const { FirstContentfulPaint } = _lantern_js__WEBPACK_IMPORTED_MODULE_0__.Metrics;
describe('Metrics: Lantern FCP', () => {
    let trace;
    before(async function () {
        trace = await (0,_testing_testing_js__WEBPACK_IMPORTED_MODULE_1__.loadTrace)(this, 'lantern/progressive-app/trace.json.gz');
    });
    it('should compute predicted value', async () => {
        const data = await (0,_testing_testing_js__WEBPACK_IMPORTED_MODULE_1__.getComputationDataFromFixture)({ trace });
        const result = FirstContentfulPaint.compute(data);
        assert.deepStrictEqual({
            timing: Math.round(result.timing),
            optimistic: Math.round(result.optimisticEstimate.timeInMs),
            pessimistic: Math.round(result.pessimisticEstimate.timeInMs),
            optimisticNodeTimings: result.optimisticEstimate.nodeTimings.size,
            pessimisticNodeTimings: result.pessimisticEstimate.nodeTimings.size,
        }, {
            timing: 1107,
            optimistic: 1107,
            pessimistic: 1107,
            optimisticNodeTimings: 4,
            pessimisticNodeTimings: 4,
        });
        assert.ok(result.optimisticGraph, 'should have created optimistic graph');
        assert.ok(result.pessimisticGraph, 'should have created pessimistic graph');
    });
    it('should handle negative request networkEndTime', async () => {
        const data = await (0,_testing_testing_js__WEBPACK_IMPORTED_MODULE_1__.getComputationDataFromFixture)({ trace });
        assert(data.graph.type === 'network');
        data.graph.request.networkEndTime = -1;
        const result = FirstContentfulPaint.compute(data);
        const optimisticNodes = [];
        result.optimisticGraph.traverse(node => {
            if (node.type === 'network') {
                optimisticNodes.push(node);
            }
        });
        expect(optimisticNodes.map(node => node.request.url)).to.deep.equal(['https://squoosh.app/']);
        const pessimisticNodes = [];
        result.pessimisticGraph.traverse(node => {
            if (node.type === 'network') {
                pessimisticNodes.push(node);
            }
        });
        expect(pessimisticNodes.map(node => node.request.url)).to.deep.equal(['https://squoosh.app/']);
    });
});


/***/ }),

/***/ "./src/models/trace/lantern/testing/MetricTestUtils.ts":
/*!*************************************************************!*\
  !*** ./src/models/trace/lantern/testing/MetricTestUtils.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComputationDataFromFixture: () => (/* binding */ getComputationDataFromFixture),
/* harmony export */   loadTrace: () => (/* binding */ loadTrace),
/* harmony export */   runTraceEngine: () => (/* binding */ runTraceEngine)
/* harmony export */ });
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _lantern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lantern.js */ "./src/models/trace/lantern/lantern.ts");
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



/***/ }),

/***/ "./src/models/trace/lantern/testing/testing.ts":
/*!*****************************************************!*\
  !*** ./src/models/trace/lantern/testing/testing.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComputationDataFromFixture: () => (/* reexport safe */ _MetricTestUtils_js__WEBPACK_IMPORTED_MODULE_0__.getComputationDataFromFixture),
/* harmony export */   loadTrace: () => (/* reexport safe */ _MetricTestUtils_js__WEBPACK_IMPORTED_MODULE_0__.loadTrace),
/* harmony export */   runTraceEngine: () => (/* reexport safe */ _MetricTestUtils_js__WEBPACK_IMPORTED_MODULE_0__.runTraceEngine)
/* harmony export */ });
/* harmony import */ var _MetricTestUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetricTestUtils.js */ "./src/models/trace/lantern/testing/MetricTestUtils.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ })

}]);