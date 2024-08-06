"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_insights_CumulativeLayoutShift_test_js"], {
"./models/trace/insights/CumulativeLayoutShift.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  processTrace: function() { return processTrace; }
});
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers.js */ "./models/trace/helpers/helpers.js");
/* harmony import */var _types_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/types.js */ "./models/trace/types/types.js");
/* harmony import */var _insights_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insights.js */ "./models/trace/insights/insights.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
    var insight = navInsights.CumulativeLayoutShift;
    if (_instanceof(insight, Error)) {
        throw insight;
    }
    return insight;
}
// Root cause invalidation window.
var INVALIDATION_WINDOW = _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.Timing.secondsToMicroseconds(_types_types_js__WEBPACK_IMPORTED_MODULE_2__.Timing.Seconds(0.5));
describe('CumulativeLayoutShift', function() {
    describe('non composited animations', function() {
        it('gets the correct non composited animations', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, data, insights, insight, animationFailures, expected;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            processTrace(this, 'non-composited-animation.json.gz')
                        ];
                    case 1:
                        _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                        insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
                        animationFailures = insight.animationFailures;
                        expected = [
                            {
                                name: 'simple-animation',
                                failureReasons: [
                                    "UNSUPPORTED_CSS_PROPERTY" /* InsightRunners.CumulativeLayoutShift.AnimationFailureReasons.UNSUPPORTED_CSS_PROPERTY */ 
                                ],
                                unsupportedProperties: [
                                    'color'
                                ]
                            },
                            {
                                name: 'top',
                                failureReasons: [
                                    "UNSUPPORTED_CSS_PROPERTY" /* InsightRunners.CumulativeLayoutShift.AnimationFailureReasons.UNSUPPORTED_CSS_PROPERTY */ 
                                ],
                                unsupportedProperties: [
                                    'top'
                                ]
                            }
                        ];
                        assert.deepStrictEqual(animationFailures, expected);
                        return [
                            2
                        ];
                }
            });
        }));
        it('returns no insights when there are no non-composited animations', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, data, insights, insight, animationFailures;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            processTrace(this, 'lcp-images.json.gz')
                        ];
                    case 1:
                        _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                        insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
                        animationFailures = insight.animationFailures;
                        assert.isEmpty(animationFailures);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('layout shifts', function() {
        it('returns correct layout shifts', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, data, insights, insight, shifts;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            processTrace(this, 'cls-single-frame.json.gz')
                        ];
                    case 1:
                        _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                        insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
                        shifts = insight.shifts;
                        assert.exists(shifts);
                        assert.strictEqual(shifts.size, 7);
                        return [
                            2
                        ];
                }
            });
        }));
        describe('root causes', function() {
            it('handles potential iframe root cause correctly', /*#__PURE__*/ _async_to_generator(function() {
                var _shifts_get, _shifts_get1, _shifts_get2, _ref, data, insights, insight, shifts, shift1, shiftIframes, iframe, iframeEndTime, shift2, shift3;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                processTrace(this, 'iframe-shift.json.gz')
                            ];
                        case 1:
                            _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                            insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
                            shifts = insight.shifts;
                            assert.exists(shifts);
                            assert.strictEqual(shifts.size, 3);
                            shift1 = Array.from(shifts)[0][0];
                            shiftIframes = (_shifts_get = shifts.get(shift1)) === null || _shifts_get === void 0 ? void 0 : _shifts_get.iframes;
                            assert.exists(shiftIframes);
                            assert.strictEqual(shiftIframes.length, 1);
                            iframe = shiftIframes[0];
                            iframeEndTime = iframe.dur ? iframe.ts + iframe.dur : iframe.ts;
                            // Ensure the iframe happens within the invalidation window.
                            assert.isTrue(iframeEndTime < shift1.ts && iframeEndTime >= shift1.ts - INVALIDATION_WINDOW);
                            // Other shifts should not have iframe root causes.
                            shift2 = Array.from(shifts)[1][0];
                            assert.isEmpty((_shifts_get1 = shifts.get(shift2)) === null || _shifts_get1 === void 0 ? void 0 : _shifts_get1.iframes);
                            shift3 = Array.from(shifts)[2][0];
                            assert.isEmpty((_shifts_get2 = shifts.get(shift3)) === null || _shifts_get2 === void 0 ? void 0 : _shifts_get2.iframes);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('handles potential font root cause correctly', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, data, insights, insight, shifts, layoutShiftEvents, shift2, shiftEvent, shiftFonts, fontRequest, fontRequestEndTime, shift1, shift3;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                processTrace(this, 'iframe-shift.json.gz')
                            ];
                        case 1:
                            _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                            insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
                            shifts = insight.shifts;
                            assert.exists(shifts);
                            assert.strictEqual(shifts.size, 3);
                            layoutShiftEvents = Array.from(shifts.entries());
                            shift2 = layoutShiftEvents.at(1);
                            assert.isOk(shift2);
                            shiftEvent = shift2[0];
                            shiftFonts = shift2[1].fontRequests;
                            assert.exists(shiftFonts);
                            assert.strictEqual(shiftFonts.length, 1);
                            fontRequest = shiftFonts[0];
                            fontRequestEndTime = fontRequest.ts + fontRequest.dur;
                            // Ensure the font loads within the invalidation window.
                            assert.isTrue(fontRequestEndTime < shiftEvent.ts && fontRequestEndTime >= shiftEvent.ts - INVALIDATION_WINDOW);
                            // Other shifts should not have font root causes.
                            shift1 = layoutShiftEvents.at(0);
                            assert.isOk(shift1);
                            assert.isEmpty(shift1[1].fontRequests);
                            shift3 = layoutShiftEvents.at(2);
                            assert.isOk(shift3);
                            assert.isEmpty(shift3[1].fontRequests);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
}); //# sourceMappingURL=CumulativeLayoutShift.test.js.map


}),

}]);