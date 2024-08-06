"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_insights_LargestContentfulPaint_test_js"], {
"./models/trace/insights/LargestContentfulPaint.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  processTrace: function() { return processTrace; }
});
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _types_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/types.js */ "./models/trace/types/types.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}


function processTrace(testContext, traceFile) {
    return _processTrace.apply(this, arguments);
}
function _processTrace() {
    _processTrace = _async_to_generator(function(testContext, traceFile) {
        var _ref, traceData, insights;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(testContext, traceFile)
                    ];
                case 1:
                    _ref = _state.sent(), traceData = _ref.traceData, insights = _ref.insights;
                    if (!insights) {
                        throw new Error('No insights');
                    }
                    return [
                        2,
                        {
                            data: traceData,
                            insights: insights
                        }
                    ];
            }
        });
    });
    return _processTrace.apply(this, arguments);
}
function getInsight(insights, navigationId) {
    var navInsights = insights.get(navigationId);
    if (!navInsights) {
        throw new Error('missing navInsights');
    }
    var insight = navInsights.LargestContentfulPaint;
    if (_instanceof(insight, Error)) {
        throw insight;
    }
    return insight;
}
describe('LargestContentfulPaint', function() {
    var _this = this;
    it('text lcp phases', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, data, insights, insight, wantTtfb, wantRenderDelay;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this, 'lcp-web-font.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                    insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
                    assert.strictEqual(insight.lcpMs, 106.482);
                    wantTtfb = _types_types_js__WEBPACK_IMPORTED_MODULE_1__.Timing.MilliSeconds(6.115);
                    wantRenderDelay = _types_types_js__WEBPACK_IMPORTED_MODULE_1__.Timing.MilliSeconds(100.367);
                    assert.deepEqual(insight.phases, {
                        ttfb: wantTtfb,
                        renderDelay: wantRenderDelay
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    var _this1 = this;
    it('image lcp phases', /*#__PURE__*/ _async_to_generator(function() {
        var _insight_phases_ttfb, _insight_phases_loadTime, _insight_phases_loadDelay, _insight_phases_renderDelay, _ref, data, insights, insight, phases;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this1, 'lcp-images.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                    insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
                    assert.strictEqual(insight.lcpMs, 109.623);
                    if (!insight.phases) {
                        throw new Error('No LCP phases');
                    }
                    phases = {
                        ttfb: (_insight_phases_ttfb = insight.phases.ttfb) === null || _insight_phases_ttfb === void 0 ? void 0 : _insight_phases_ttfb.toFixed(2),
                        loadTime: (_insight_phases_loadTime = insight.phases.loadTime) === null || _insight_phases_loadTime === void 0 ? void 0 : _insight_phases_loadTime.toFixed(2),
                        loadDelay: (_insight_phases_loadDelay = insight.phases.loadDelay) === null || _insight_phases_loadDelay === void 0 ? void 0 : _insight_phases_loadDelay.toFixed(2),
                        renderDelay: (_insight_phases_renderDelay = insight.phases.renderDelay) === null || _insight_phases_renderDelay === void 0 ? void 0 : _insight_phases_renderDelay.toFixed(2)
                    };
                    assert.deepEqual(phases, {
                        ttfb: '6.94',
                        loadTime: '12.09',
                        loadDelay: '33.74',
                        renderDelay: '56.85'
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    var _this2 = this;
    it('image lcp attributes', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, data, insights, insight, shouldIncreasePriorityHint, shouldPreloadImage, shouldRemoveLazyLoading;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this2, 'lcp-images.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                    insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
                    shouldIncreasePriorityHint = insight.shouldIncreasePriorityHint, shouldPreloadImage = insight.shouldPreloadImage, shouldRemoveLazyLoading = insight.shouldRemoveLazyLoading;
                    assert.strictEqual(shouldRemoveLazyLoading, false);
                    assert.strictEqual(shouldPreloadImage, true);
                    assert.strictEqual(shouldIncreasePriorityHint, true);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('warnings', function() {
        var _this = this;
        it('no lcp', /*#__PURE__*/ _async_to_generator(function() {
            var _insight_warnings, _ref, data, insights, insight;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            processTrace(_this, 'user-timings.json.gz')
                        ];
                    case 1:
                        _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                        insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
                        assert.strictEqual(insight.lcpMs, undefined);
                        assert.strictEqual(insight.phases, undefined);
                        assert.strictEqual((_insight_warnings = insight.warnings) === null || _insight_warnings === void 0 ? void 0 : _insight_warnings[0], 'NO_LCP');
                        return [
                            2
                        ];
                }
            });
        }));
        var _this1 = this;
        it('no main document url', /*#__PURE__*/ _async_to_generator(function() {
            var _insight_warnings, _ref, data, insights, insight;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            processTrace(_this1, 'about-blank-first.json.gz')
                        ];
                    case 1:
                        _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                        insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
                        assert.strictEqual(insight.lcpMs, 204.909);
                        assert.strictEqual(insight.phases, undefined);
                        assert.strictEqual((_insight_warnings = insight.warnings) === null || _insight_warnings === void 0 ? void 0 : _insight_warnings[0], 'NO_DOCUMENT_REQUEST');
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=LargestContentfulPaint.test.js.map


}),

}]);