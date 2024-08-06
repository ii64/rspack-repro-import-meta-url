"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_lantern_metrics_SpeedIndex_test_js"],{

/***/ "./models/trace/lantern/metrics/SpeedIndex.test.js":
/*!*********************************************************!*\
  !*** ./models/trace/lantern/metrics/SpeedIndex.test.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lantern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lantern.js */ "./models/trace/lantern/lantern.js");
/* harmony import */ var _testing_testing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../testing/testing.js */ "./models/trace/lantern/testing/testing.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const { SpeedIndex, FirstContentfulPaint } = _lantern_js__WEBPACK_IMPORTED_MODULE_0__.Metrics;
const defaultThrottling = _lantern_js__WEBPACK_IMPORTED_MODULE_0__.Simulation.Constants.throttling.mobileSlow4G;
describe('Metrics: Lantern Speed Index', () => {
    let trace;
    before(async function () {
        trace = await (0,_testing_testing_js__WEBPACK_IMPORTED_MODULE_1__.loadTrace)(this, 'lantern/progressive-app/trace.json.gz');
    });
    it('should compute predicted value', async () => {
        const data = await (0,_testing_testing_js__WEBPACK_IMPORTED_MODULE_1__.getComputationDataFromFixture)({ trace });
        // TODO: observedSpeedIndex is from the Speedline library, and is used for optimistic
        // mode. At the moment callers must pass the result into Lantern.
        const observedSpeedIndex = 379.04474997520487;
        const result = SpeedIndex.compute(data, {
            fcpResult: FirstContentfulPaint.compute(data),
            observedSpeedIndex,
        });
        assert.deepStrictEqual({
            timing: Math.round(result.timing),
            optimistic: Math.round(result.optimisticEstimate.timeInMs),
            pessimistic: Math.round(result.pessimisticEstimate.timeInMs),
        }, {
            timing: 1107,
            optimistic: 379,
            pessimistic: 1122,
        });
    });
    it('should compute predicted value for different settings', async () => {
        const settings = {
            throttlingMethod: 'simulate',
            throttling: { ...defaultThrottling, rttMs: 300 },
            // @ts-expect-error: not needed for test
            networkAnalysis: null,
        };
        const data = await (0,_testing_testing_js__WEBPACK_IMPORTED_MODULE_1__.getComputationDataFromFixture)({ trace, settings });
        const observedSpeedIndex = 379.04474997520487;
        const result = SpeedIndex.compute(data, {
            fcpResult: FirstContentfulPaint.compute(data),
            observedSpeedIndex,
        });
        assert.deepStrictEqual({
            timing: Math.round(result.timing),
            optimistic: Math.round(result.optimisticEstimate.timeInMs),
            pessimistic: Math.round(result.pessimisticEstimate.timeInMs),
        }, {
            timing: 2007,
            optimistic: 379,
            pessimistic: 2022,
        });
    });
    it('should not scale coefficients at default', async () => {
        const result = SpeedIndex.getScaledCoefficients(defaultThrottling.rttMs);
        expect(result).to.deep.equal(SpeedIndex.coefficients);
    });
    it('should scale coefficients back', async () => {
        const result = SpeedIndex.getScaledCoefficients(5);
        expect(result).to.deep.equal({ intercept: 0, pessimistic: 0.5, optimistic: 0.5 });
    });
    it('should scale coefficients forward', async () => {
        const result = SpeedIndex.getScaledCoefficients(300);
        assert.deepStrictEqual(result, {
            intercept: 0,
            optimistic: 2.525,
            pessimistic: 0.275,
        });
    });
});
//# sourceMappingURL=SpeedIndex.test.js.map

/***/ }),

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