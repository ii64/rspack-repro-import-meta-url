"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_perf_ui_TimelineOverviewCalculator_test_js"], {
"./ui/legacy/components/perf_ui/TimelineOverviewCalculator.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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



var MilliSeconds = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MilliSeconds;
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('TimelineOverviewCalculator', function() {
    it('can calculate pixels for a given time', /*#__PURE__*/ _async_to_generator(function() {
        var calculator;
        return _ts_generator(this, function(_state) {
            calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
            calculator.setDisplayWidth(200);
            calculator.setBounds(MilliSeconds(0), MilliSeconds(100));
            assert.strictEqual(calculator.computePosition(MilliSeconds(50)), 100);
            return [
                2
            ];
        });
    }));
    it('can calculate the time position for a pixel value', /*#__PURE__*/ _async_to_generator(function() {
        var calculator;
        return _ts_generator(this, function(_state) {
            calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
            calculator.setDisplayWidth(200);
            calculator.setBounds(MilliSeconds(0), MilliSeconds(100));
            assert.strictEqual(calculator.positionToTime(100), 50);
            return [
                2
            ];
        });
    }));
    it('formats time values', /*#__PURE__*/ _async_to_generator(function() {
        var calculator, result;
        return _ts_generator(this, function(_state) {
            calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
            calculator.setDisplayWidth(200);
            calculator.setBounds(MilliSeconds(0), MilliSeconds(100));
            result = calculator.formatValue(55.234);
            assert.deepEqual(result, '55\u00A0ms');
            return [
                2
            ];
        });
    }));
    it('formats time values with custom precision', /*#__PURE__*/ _async_to_generator(function() {
        var calculator, result;
        return _ts_generator(this, function(_state) {
            calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
            calculator.setDisplayWidth(200);
            calculator.setBounds(MilliSeconds(0), MilliSeconds(100));
            result = calculator.formatValue(55.234, 2);
            assert.deepEqual(result, '55.23\u00A0ms');
            return [
                2
            ];
        });
    }));
    it('adjusts times based on navigaton start times', /*#__PURE__*/ _async_to_generator(function() {
        var calculator, fakeNavStart, result;
        return _ts_generator(this, function(_state) {
            calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
            calculator.setDisplayWidth(200);
            calculator.setBounds(MilliSeconds(0), MilliSeconds(100));
            fakeNavStart = {
                // TraceEngine events are in microseconds
                ts: 100000
            };
            calculator.setNavStartTimes([
                fakeNavStart
            ]);
            // There is a navigation at 100ms, so this time gets changed to 5ms
            result = calculator.formatValue(105);
            assert.deepEqual(result, '5\u00A0ms');
            return [
                2
            ];
        });
    }));
    it('returns the correct range', /*#__PURE__*/ _async_to_generator(function() {
        var calculator;
        return _ts_generator(this, function(_state) {
            calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
            calculator.setDisplayWidth(200);
            calculator.setBounds(MilliSeconds(0), MilliSeconds(100));
            assert.strictEqual(calculator.boundarySpan(), 100);
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=TimelineOverviewCalculator.test.js.map


}),

}]);