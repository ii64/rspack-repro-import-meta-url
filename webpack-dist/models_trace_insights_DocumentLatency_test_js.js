"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_insights_DocumentLatency_test_js"],{

/***/ "./models/trace/insights/DocumentLatency.test.js":
/*!*******************************************************!*\
  !*** ./models/trace/insights/DocumentLatency.test.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processTrace: () => (/* binding */ processTrace)
/* harmony export */ });
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
/* harmony import */ var _types_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/types.js */ "./models/trace/types/types.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



async function processTrace(testContext, traceFile) {
    const { traceData, insights } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(testContext, traceFile);
    if (!insights) {
        throw new Error('No insights');
    }
    return { data: traceData, insights };
}
function getInsight(insights, navigationId) {
    const navInsights = insights.get(navigationId);
    if (!navInsights) {
        throw new Error('missing navInsights');
    }
    const insight = navInsights.DocumentLatency;
    if (insight instanceof Error) {
        throw insight;
    }
    return insight;
}
describe('DocumentLatency', function () {
    it('reports savings for main document with redirects', async () => {
        const { data, insights } = await processTrace(this, 'lantern/redirect/trace.json.gz');
        const insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
        assert.strictEqual(insight.redirectDuration, 1779);
        assert.deepEqual(insight.metricSavings, { FCP: 1779, LCP: 1779 });
    });
    it('reports no savings for server with low response time', async () => {
        const { data, insights } = await processTrace(this, 'lantern/paul/trace.json.gz');
        const insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
        assert.strictEqual(insight.serverResponseTime, 43);
        assert.deepEqual(insight.metricSavings, { FCP: 0, LCP: 0 });
    });
    it('reports savings for server with high response time', async function () {
        const traceEvents = [...await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'lantern/paul/trace.json.gz')];
        const processor = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Processor.TraceProcessor.createWithAllHandlers();
        const mainRequestEventIndex = traceEvents.findIndex(e => e.name === 'ResourceReceiveResponse');
        const mainRequestEvent = structuredClone(traceEvents[mainRequestEventIndex]);
        assert(_types_types_js__WEBPACK_IMPORTED_MODULE_2__.TraceEvents.isTraceEventResourceReceiveResponse(mainRequestEvent));
        assert.strictEqual(mainRequestEvent.args.data.requestId, '1000C0FDC0A75327167272FC7438E999');
        mainRequestEvent.args.data.timing.receiveHeadersStart =
            _types_types_js__WEBPACK_IMPORTED_MODULE_2__.Timing.MilliSeconds(mainRequestEvent.args.data.timing.receiveHeadersStart + 1000);
        traceEvents[mainRequestEventIndex] = mainRequestEvent;
        await processor.parse(traceEvents);
        const data = processor.traceParsedData;
        if (!data) {
            throw new Error('missing traceParsedData');
        }
        const context = {
            frameId: data.Meta.mainFrameId,
            navigationId: data.Meta.navigationsByNavigationId.keys().next().value,
        };
        const insight = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Insights.InsightRunners.DocumentLatency.generateInsight(data, context);
        assert.strictEqual(insight.serverResponseTime, 1043);
        assert.deepEqual(insight.metricSavings, { FCP: 943, LCP: 943 });
    });
});
//# sourceMappingURL=DocumentLatency.test.js.map

/***/ })

}]);