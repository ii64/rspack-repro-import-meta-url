"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_perf_ui_TimelineGrid_test_js"], {
"./ui/legacy/components/perf_ui/TimelineGrid.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('TimelineGrid', function() {
    it('calculates a set of dividers for the grid', /*#__PURE__*/ _async_to_generator(function() {
        var calculator, dividers;
        return _ts_generator(this, function(_state) {
            calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
            calculator.setDisplayWidth(200);
            calculator.setBounds(MilliSeconds(0), MilliSeconds(200));
            dividers = _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineGrid.TimelineGrid.calculateGridOffsets(calculator);
            assert.deepEqual(dividers, {
                offsets: [
                    {
                        position: 0,
                        time: 0
                    },
                    {
                        position: 100,
                        time: 100
                    },
                    {
                        position: 200,
                        time: 200
                    }
                ],
                precision: 0
            });
            return [
                2
            ];
        });
    }));
    it('ups the precision if it is showing decimal values', /*#__PURE__*/ _async_to_generator(function() {
        var calculator, dividers;
        return _ts_generator(this, function(_state) {
            calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
            calculator.setDisplayWidth(1000);
            calculator.setBounds(MilliSeconds(0), MilliSeconds(2));
            dividers = _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineGrid.TimelineGrid.calculateGridOffsets(calculator);
            assert.deepEqual(dividers, {
                offsets: [
                    {
                        position: 0,
                        time: 0
                    },
                    {
                        position: 100,
                        time: 0.2
                    },
                    {
                        position: 200,
                        time: 0.4
                    },
                    {
                        position: 300,
                        time: 0.6
                    },
                    {
                        position: 400,
                        time: 0.8
                    },
                    {
                        position: 500,
                        time: 1
                    },
                    {
                        position: 600,
                        time: 1.2
                    },
                    {
                        position: 700,
                        time: 1.4
                    },
                    {
                        position: 800,
                        time: 1.6
                    },
                    {
                        position: 900,
                        time: 1.8
                    },
                    {
                        position: 1000,
                        time: 2
                    }
                ],
                precision: 1
            });
            return [
                2
            ];
        });
    }));
    it('generates more dividers if there is more pixel room', /*#__PURE__*/ _async_to_generator(function() {
        var calculator, dividers;
        return _ts_generator(this, function(_state) {
            calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
            calculator.setDisplayWidth(1000);
            calculator.setBounds(MilliSeconds(0), MilliSeconds(200));
            dividers = _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineGrid.TimelineGrid.calculateGridOffsets(calculator);
            assert.deepEqual(dividers, {
                offsets: [
                    {
                        position: 0,
                        time: 0
                    },
                    {
                        position: 100,
                        time: 20
                    },
                    {
                        position: 200,
                        time: 40
                    },
                    {
                        position: 300,
                        time: 60
                    },
                    {
                        position: 400,
                        time: 80
                    },
                    {
                        position: 500,
                        time: 100
                    },
                    {
                        position: 600,
                        time: 120
                    },
                    {
                        position: 700,
                        time: 140
                    },
                    {
                        position: 800,
                        time: 160
                    },
                    {
                        position: 900,
                        time: 180
                    },
                    {
                        position: 1000,
                        time: 200
                    }
                ],
                precision: 0
            });
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=TimelineGrid.test.js.map


}),

}]);