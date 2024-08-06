"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_insights_Viewport_test_js"], {
"./models/trace/insights/Viewport.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  processTrace: function() { return processTrace; }
});
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
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
    var insight = navInsights.Viewport;
    if (_instanceof(insight, Error)) {
        throw insight;
    }
    return insight;
}
describe('Viewport', function() {
    var _this = this;
    it('detects mobile optimized viewport', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, data, insights, insight;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this, 'lcp-images.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                    insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
                    assert.strictEqual(insight.mobileOptimized, true);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this1 = this;
    it('detects mobile unoptimized viewport', /*#__PURE__*/ _async_to_generator(function() {
        var data, context, events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, insight;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this1, 'lcp-images.json.gz')
                    ];
                case 1:
                    data = _state.sent().data;
                    context = {
                        frameId: data.Meta.mainFrameId,
                        navigationId: data.Meta.navigationsByNavigationId.keys().next().value
                    };
                    events = data.UserInteractions.beginCommitCompositorFrameEvents.filter(function(event) {
                        return event.args.frame === context.frameId;
                    });
                    assert.isNotEmpty(events);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            event.args.is_mobile_optimized = false;
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    insight = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Insights.InsightRunners.Viewport.generateInsight(data, context);
                    assert.strictEqual(insight.mobileOptimized, false);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=Viewport.test.js.map


}),

}]);