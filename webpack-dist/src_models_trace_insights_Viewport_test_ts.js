"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_insights_Viewport_test_ts"],{

/***/ "./src/models/trace/insights/Viewport.test.ts":
/*!****************************************************!*\
  !*** ./src/models/trace/insights/Viewport.test.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processTrace: () => (/* binding */ processTrace)
/* harmony export */ });
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./src/models/trace/trace.ts");
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
    const insight = navInsights.Viewport;
    if (insight instanceof Error) {
        throw insight;
    }
    return insight;
}
describe('Viewport', function () {
    it('detects mobile optimized viewport', async () => {
        const { data, insights } = await processTrace(this, 'lcp-images.json.gz');
        const insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
        assert.strictEqual(insight.mobileOptimized, true);
    });
    it('detects mobile unoptimized viewport', async () => {
        const { data } = await processTrace(this, 'lcp-images.json.gz');
        const context = {
            frameId: data.Meta.mainFrameId,
            navigationId: data.Meta.navigationsByNavigationId.keys().next().value,
        };
        const events = data.UserInteractions.beginCommitCompositorFrameEvents.filter(event => event.args.frame === context.frameId);
        assert.isNotEmpty(events);
        for (const event of events) {
            event.args.is_mobile_optimized = false;
        }
        const insight = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Insights.InsightRunners.Viewport.generateInsight(data, context);
        assert.strictEqual(insight.mobileOptimized, false);
    });
});


/***/ })

}]);