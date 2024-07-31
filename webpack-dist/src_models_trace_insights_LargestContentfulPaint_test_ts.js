"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_insights_LargestContentfulPaint_test_ts"],{

/***/ "./src/models/trace/insights/LargestContentfulPaint.test.ts":
/*!******************************************************************!*\
  !*** ./src/models/trace/insights/LargestContentfulPaint.test.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processTrace: () => (/* binding */ processTrace)
/* harmony export */ });
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _types_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/types.js */ "./src/models/trace/types/types.ts");
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
    const insight = navInsights.LargestContentfulPaint;
    if (insight instanceof Error) {
        throw insight;
    }
    return insight;
}
describe('LargestContentfulPaint', function () {
    it('text lcp phases', async () => {
        const { data, insights } = await processTrace(this, 'lcp-web-font.json.gz');
        const insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
        assert.strictEqual(insight.lcpMs, 106.482);
        const wantTtfb = _types_types_js__WEBPACK_IMPORTED_MODULE_1__.Timing.MilliSeconds(6.115);
        const wantRenderDelay = _types_types_js__WEBPACK_IMPORTED_MODULE_1__.Timing.MilliSeconds(100.367);
        assert.deepEqual(insight.phases, { ttfb: wantTtfb, renderDelay: wantRenderDelay });
    });
    it('image lcp phases', async () => {
        const { data, insights } = await processTrace(this, 'lcp-images.json.gz');
        const insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
        assert.strictEqual(insight.lcpMs, 109.623);
        if (!insight.phases) {
            throw new Error('No LCP phases');
        }
        const phases = {
            ttfb: insight.phases.ttfb?.toFixed(2),
            loadTime: insight.phases.loadTime?.toFixed(2),
            loadDelay: insight.phases.loadDelay?.toFixed(2),
            renderDelay: insight.phases.renderDelay?.toFixed(2),
        };
        assert.deepEqual(phases, { ttfb: '6.94', loadTime: '12.09', loadDelay: '33.74', renderDelay: '56.85' });
    });
    it('image lcp attributes', async () => {
        const { data, insights } = await processTrace(this, 'lcp-images.json.gz');
        const insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
        const { shouldIncreasePriorityHint, shouldPreloadImage, shouldRemoveLazyLoading } = insight;
        assert.strictEqual(shouldRemoveLazyLoading, false);
        assert.strictEqual(shouldPreloadImage, true);
        assert.strictEqual(shouldIncreasePriorityHint, true);
    });
    describe('warnings', function () {
        it('no lcp', async () => {
            const { data, insights } = await processTrace(this, 'user-timings.json.gz');
            const insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
            assert.strictEqual(insight.lcpMs, undefined);
            assert.strictEqual(insight.phases, undefined);
            assert.strictEqual(insight.warnings?.[0], 'NO_LCP');
        });
        it('no main document url', async () => {
            const { data, insights } = await processTrace(this, 'about-blank-first.json.gz');
            const insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
            assert.strictEqual(insight.lcpMs, 204.909);
            assert.strictEqual(insight.phases, undefined);
            assert.strictEqual(insight.warnings?.[0], 'NO_DOCUMENT_REQUEST');
        });
    });
});


/***/ })

}]);