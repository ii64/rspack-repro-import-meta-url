"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_insights_InteractionToNextPaint_test_js"],{

/***/ "./models/trace/insights/InteractionToNextPaint.test.js":
/*!**************************************************************!*\
  !*** ./models/trace/insights/InteractionToNextPaint.test.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processTrace: () => (/* binding */ processTrace)
/* harmony export */ });
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
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
describe('InteractionToNextPaint', function () {
    const test = (traceFile, longest, highPercentile) => {
        if (highPercentile === undefined) {
            highPercentile = longest;
        }
        it(`process ${traceFile}`, async () => {
            const { data } = await processTrace(this, traceFile);
            // TODO(crbug.com/313905799): The traces don't all have navigations, and currently #computeInsights
            // doesn't account for analyzing stuff outside a navigation bound. So instead of this ...
            //      const insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
            // we manually run the insight.
            const insight = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Insights.InsightRunners.InteractionToNextPaint.generateInsight(data, {
                frameId: data.Meta.mainFrameId,
                navigationId: data.Meta.navigationsByNavigationId.keys().next().value,
            });
            assert.strictEqual(insight.longestInteractionEvent?.dur, longest);
            assert.strictEqual(insight.highPercentileInteractionEvent?.dur, highPercentile);
        });
    };
    test('lcp-images.json.gz', undefined);
    test('slow-interaction-keydown.json.gz', 163609);
    test('nested-interactions.json.gz', 23370);
    test('slow-interaction-button-click.json.gz', 139238);
});
//# sourceMappingURL=InteractionToNextPaint.test.js.map

/***/ })

}]);