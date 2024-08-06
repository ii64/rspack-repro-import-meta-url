"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_insights_RenderBlocking_test_js"], {
"./models/trace/insights/RenderBlocking.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  processTrace: function() { return processTrace; }
});
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
    var insight = navInsights.RenderBlocking;
    if (_instanceof(insight, Error)) {
        throw insight;
    }
    return insight;
}
describe('RenderBlockingRequests', function() {
    var _this = this;
    it('finds render blocking requests', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, data, insights, insight;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this, 'load-simple.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                    assert.strictEqual(insights.size, 1);
                    insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
                    assert.strictEqual(insight.renderBlockingRequests.length, 2);
                    assert.deepEqual(insight.renderBlockingRequests.map(function(r) {
                        return r.args.data.url;
                    }), [
                        'https://fonts.googleapis.com/css2?family=Orelega+One&display=swap',
                        'http://localhost:8080/styles.css'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this1 = this;
    it('returns a warning if navigation does not have a first paint event', /*#__PURE__*/ _async_to_generator(function() {
        var _insight_warnings, _insight_warnings1, _ref, data, insights, insight;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this1, 'user-timings.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                    assert.strictEqual(insights.size, 1);
                    insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
                    assert.strictEqual(insight.renderBlockingRequests.length, 0);
                    assert.strictEqual((_insight_warnings = insight.warnings) === null || _insight_warnings === void 0 ? void 0 : _insight_warnings.length, 1);
                    assert.strictEqual((_insight_warnings1 = insight.warnings) === null || _insight_warnings1 === void 0 ? void 0 : _insight_warnings1[0], 'NO_FP');
                    return [
                        2
                    ];
            }
        });
    }));
    var _this2 = this;
    it('considers only the navigation specified by the context', /*#__PURE__*/ _async_to_generator(function() {
        var _navigations__args_data, _ref, data, insights, navigations, insight;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this2, 'multiple-navigations-render-blocking.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                    assert.strictEqual(insights.size, 2);
                    navigations = Array.from(data.Meta.navigationsByNavigationId.values());
                    insight = getInsight(insights, ((_navigations__args_data = navigations[0].args.data) === null || _navigations__args_data === void 0 ? void 0 : _navigations__args_data.navigationId) || '');
                    assert(insight.renderBlockingRequests.length > 0, 'no render blocking requests found');
                    assert(insight.renderBlockingRequests.every(function(r) {
                        return r.args.data.syntheticData.sendStartTime > navigations[0].ts;
                    }), 'a result is not contained by the nav bounds');
                    assert(insight.renderBlockingRequests.every(function(r) {
                        return r.args.data.syntheticData.finishTime < navigations[1].ts;
                    }), 'a result is not contained by the nav bounds');
                    return [
                        2
                    ];
            }
        });
    }));
    var _this3 = this;
    it('considers only the frame specified by the context', /*#__PURE__*/ _async_to_generator(function() {
        var _navigations__args_data, _ref, data, insights, navigations, insight;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this3, 'render-blocking-in-iframe.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                    assert.strictEqual(insights.size, 1);
                    navigations = Array.from(data.Meta.navigationsByNavigationId.values());
                    insight = getInsight(insights, ((_navigations__args_data = navigations[0].args.data) === null || _navigations__args_data === void 0 ? void 0 : _navigations__args_data.navigationId) || '');
                    assert(insight.renderBlockingRequests.length > 0, 'no render blocking requests found');
                    assert(insight.renderBlockingRequests.every(function(r) {
                        return r.args.data.frame === data.Meta.mainFrameId;
                    }), 'a result is not from the main frame');
                    return [
                        2
                    ];
            }
        });
    }));
    var _this4 = this;
    it('ignores blocking request after first paint', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, data, insights, insight;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this4, 'parser-blocking-after-paint.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                    assert.strictEqual(insights.size, 1);
                    insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
                    assert.strictEqual(insight.renderBlockingRequests.length, 0);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this5 = this;
    it('correctly handles body parser blocking requests', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, data, insights, insight;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this5, 'render-blocking-body.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                    assert.strictEqual(insights.size, 1);
                    insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
                    assert.deepStrictEqual(insight.renderBlockingRequests.map(function(r) {
                        return r.args.data.url;
                    }), [
                        'http://localhost:8080/render-blocking/style.css',
                        'http://localhost:8080/render-blocking/script.js?beforeImage'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this6 = this;
    it('estimates savings with Lantern', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, data, insights, insight, requestIds;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this6, 'lantern/render-blocking/trace.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), data = _ref.data, insights = _ref.insights;
                    assert.strictEqual(insights.size, 1);
                    insight = getInsight(insights, data.Meta.navigationsByNavigationId.keys().next().value);
                    assert.deepStrictEqual(insight.metricSavings, {
                        FCP: 2250,
                        LCP: 0
                    });
                    requestIds = [
                        'http://localhost:50049/style.css',
                        'http://localhost:50049/script.js'
                    ].map(function(url) {
                        var _insight_renderBlockingRequests_find;
                        return (_insight_renderBlockingRequests_find = insight.renderBlockingRequests.find(function(r) {
                            return r.args.data.url === url;
                        })) === null || _insight_renderBlockingRequests_find === void 0 ? void 0 : _insight_renderBlockingRequests_find.args.data.requestId;
                    });
                    assert.exists(insight.requestIdToWastedMs);
                    assert.deepStrictEqual(_to_consumable_array(insight.requestIdToWastedMs), [
                        [
                            requestIds[0],
                            2254
                        ],
                        [
                            requestIds[1],
                            304
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=RenderBlocking.test.js.map


}),

}]);