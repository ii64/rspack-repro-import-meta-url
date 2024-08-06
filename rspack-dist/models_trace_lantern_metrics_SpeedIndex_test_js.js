"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_lantern_metrics_SpeedIndex_test_js"], {
"./models/trace/lantern/metrics/SpeedIndex.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _lantern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lantern.js */ "./models/trace/lantern/lantern.js");
/* harmony import */var _testing_testing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../testing/testing.js */ "./models/trace/lantern/testing/testing.js");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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


var _Lantern_Metrics = _lantern_js__WEBPACK_IMPORTED_MODULE_0__.Metrics, SpeedIndex = _Lantern_Metrics.SpeedIndex, FirstContentfulPaint = _Lantern_Metrics.FirstContentfulPaint;
var defaultThrottling = _lantern_js__WEBPACK_IMPORTED_MODULE_0__.Simulation.Constants.throttling.mobileSlow4G;
describe('Metrics: Lantern Speed Index', function() {
    var trace;
    before(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_testing_js__WEBPACK_IMPORTED_MODULE_1__.loadTrace)(this, 'lantern/progressive-app/trace.json.gz')
                    ];
                case 1:
                    trace = _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('should compute predicted value', /*#__PURE__*/ _async_to_generator(function() {
        var data, observedSpeedIndex, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_testing_js__WEBPACK_IMPORTED_MODULE_1__.getComputationDataFromFixture)({
                            trace: trace
                        })
                    ];
                case 1:
                    data = _state.sent();
                    // TODO: observedSpeedIndex is from the Speedline library, and is used for optimistic
                    // mode. At the moment callers must pass the result into Lantern.
                    observedSpeedIndex = 379.04474997520487;
                    result = SpeedIndex.compute(data, {
                        fcpResult: FirstContentfulPaint.compute(data),
                        observedSpeedIndex: observedSpeedIndex
                    });
                    assert.deepStrictEqual({
                        timing: Math.round(result.timing),
                        optimistic: Math.round(result.optimisticEstimate.timeInMs),
                        pessimistic: Math.round(result.pessimisticEstimate.timeInMs)
                    }, {
                        timing: 1107,
                        optimistic: 379,
                        pessimistic: 1122
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('should compute predicted value for different settings', /*#__PURE__*/ _async_to_generator(function() {
        var settings, data, observedSpeedIndex, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    settings = {
                        throttlingMethod: 'simulate',
                        throttling: _object_spread_props(_object_spread({}, defaultThrottling), {
                            rttMs: 300
                        }),
                        // @ts-expect-error: not needed for test
                        networkAnalysis: null
                    };
                    return [
                        4,
                        (0,_testing_testing_js__WEBPACK_IMPORTED_MODULE_1__.getComputationDataFromFixture)({
                            trace: trace,
                            settings: settings
                        })
                    ];
                case 1:
                    data = _state.sent();
                    observedSpeedIndex = 379.04474997520487;
                    result = SpeedIndex.compute(data, {
                        fcpResult: FirstContentfulPaint.compute(data),
                        observedSpeedIndex: observedSpeedIndex
                    });
                    assert.deepStrictEqual({
                        timing: Math.round(result.timing),
                        optimistic: Math.round(result.optimisticEstimate.timeInMs),
                        pessimistic: Math.round(result.pessimisticEstimate.timeInMs)
                    }, {
                        timing: 2007,
                        optimistic: 379,
                        pessimistic: 2022
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('should not scale coefficients at default', /*#__PURE__*/ _async_to_generator(function() {
        var result;
        return _ts_generator(this, function(_state) {
            result = SpeedIndex.getScaledCoefficients(defaultThrottling.rttMs);
            expect(result).to.deep.equal(SpeedIndex.coefficients);
            return [
                2
            ];
        });
    }));
    it('should scale coefficients back', /*#__PURE__*/ _async_to_generator(function() {
        var result;
        return _ts_generator(this, function(_state) {
            result = SpeedIndex.getScaledCoefficients(5);
            expect(result).to.deep.equal({
                intercept: 0,
                pessimistic: 0.5,
                optimistic: 0.5
            });
            return [
                2
            ];
        });
    }));
    it('should scale coefficients forward', /*#__PURE__*/ _async_to_generator(function() {
        var result;
        return _ts_generator(this, function(_state) {
            result = SpeedIndex.getScaledCoefficients(300);
            assert.deepStrictEqual(result, {
                intercept: 0,
                optimistic: 2.525,
                pessimistic: 0.275
            });
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=SpeedIndex.test.js.map


}),
"./models/trace/lantern/testing/MetricTestUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getComputationDataFromFixture: function() { return getComputationDataFromFixture; },
  loadTrace: function() { return loadTrace; },
  runTraceEngine: function() { return runTraceEngine; }
});
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../trace.js */ "./models/trace/trace.js");
/* harmony import */var _lantern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lantern.js */ "./models/trace/lantern/lantern.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Why can other tests import this directly but we get yelled at here?
// eslint-disable-next-line rulesdir/es_modules_import
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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



function loadTrace(context, name) {
    return _loadTrace.apply(this, arguments);
}
function _loadTrace() {
    _loadTrace = _async_to_generator(function(context, name) {
        var traceEvents;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(context, name)
                    ];
                case 1:
                    traceEvents = _state.sent();
                    return [
                        2,
                        {
                            traceEvents: traceEvents
                        }
                    ];
            }
        });
    });
    return _loadTrace.apply(this, arguments);
}
function runTraceEngine(trace) {
    return _runTraceEngine.apply(this, arguments);
}
function _runTraceEngine() {
    _runTraceEngine = _async_to_generator(function(trace) {
        var processor;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    processor = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Processor.TraceProcessor.createWithAllHandlers();
                    return [
                        4,
                        processor.parse(trace.traceEvents)
                    ];
                case 1:
                    _state.sent();
                    if (!processor.traceParsedData) {
                        throw new Error('No data');
                    }
                    return [
                        2,
                        processor.traceParsedData
                    ];
            }
        });
    });
    return _runTraceEngine.apply(this, arguments);
}
function getComputationDataFromFixture(_) {
    return _getComputationDataFromFixture.apply(this, arguments);
}
function _getComputationDataFromFixture() {
    _getComputationDataFromFixture = _async_to_generator(function(param) {
        var trace, settings, url, traceEngineData, requests, networkAnalysis;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    trace = param.trace, settings = param.settings, url = param.url;
                    settings = settings !== null && settings !== void 0 ? settings : {};
                    if (!settings.throttlingMethod) {
                        settings.throttlingMethod = 'simulate';
                    }
                    return [
                        4,
                        runTraceEngine(trace)
                    ];
                case 1:
                    traceEngineData = _state.sent();
                    requests = _trace_js__WEBPACK_IMPORTED_MODULE_1__.LanternComputationData.createNetworkRequests(trace, traceEngineData);
                    networkAnalysis = _lantern_js__WEBPACK_IMPORTED_MODULE_2__.Core.NetworkAnalyzer.analyze(requests);
                    return [
                        2,
                        {
                            simulator: _lantern_js__WEBPACK_IMPORTED_MODULE_2__.Simulation.Simulator.createSimulator(_object_spread_props(_object_spread({}, settings), {
                                networkAnalysis: networkAnalysis
                            })),
                            graph: _trace_js__WEBPACK_IMPORTED_MODULE_1__.LanternComputationData.createGraph(requests, trace, traceEngineData, url),
                            processedNavigation: _trace_js__WEBPACK_IMPORTED_MODULE_1__.LanternComputationData.createProcessedNavigation(traceEngineData)
                        }
                    ];
            }
        });
    });
    return _getComputationDataFromFixture.apply(this, arguments);
}
 //# sourceMappingURL=MetricTestUtils.js.map


}),
"./models/trace/lantern/testing/testing.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getComputationDataFromFixture: function() { return /* reexport safe */ _MetricTestUtils_js__WEBPACK_IMPORTED_MODULE_0__.getComputationDataFromFixture; },
  loadTrace: function() { return /* reexport safe */ _MetricTestUtils_js__WEBPACK_IMPORTED_MODULE_0__.loadTrace; },
  runTraceEngine: function() { return /* reexport safe */ _MetricTestUtils_js__WEBPACK_IMPORTED_MODULE_0__.runTraceEngine; }
});
/* harmony import */var _MetricTestUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetricTestUtils.js */ "./models/trace/lantern/testing/MetricTestUtils.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=testing.js.map


}),

}]);