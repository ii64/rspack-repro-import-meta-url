"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_extras_MainThreadActivity_test_js"], {
"./models/trace/extras/MainThreadActivity.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
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


var DEVTOOLS_CATEGORY = 'disabled-by-default-devtools.timeline';
function milliToMicro(x) {
    return _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.Timing.millisecondsToMicroseconds(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(x));
}
function makeFakeBounds(min, max) {
    return {
        min: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(min),
        max: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(max),
        range: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(max - min)
    };
}
describe('MainThreadActivity', function() {
    it('will use the trace bounds if there is no period of low utilitisation', /*#__PURE__*/ _async_to_generator(function() {
        var events, bounds, win;
        return _ts_generator(this, function(_state) {
            events = [
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(100), milliToMicro(50), DEVTOOLS_CATEGORY),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(200), milliToMicro(50), DEVTOOLS_CATEGORY),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(300), milliToMicro(50), DEVTOOLS_CATEGORY),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(400), milliToMicro(50), DEVTOOLS_CATEGORY)
            ];
            bounds = makeFakeBounds(milliToMicro(100), milliToMicro(450));
            win = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Extras.MainThreadActivity.calculateWindow(bounds, events);
            assert.strictEqual(win.min, bounds.min);
            assert.strictEqual(win.max, bounds.max);
            return [
                2
            ];
        });
    }));
    it('focuses the window to avoid periods of low utilisation', /*#__PURE__*/ _async_to_generator(function() {
        var events, bounds, win;
        return _ts_generator(this, function(_state) {
            events = [
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(1), milliToMicro(50), DEVTOOLS_CATEGORY),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(200), milliToMicro(50), DEVTOOLS_CATEGORY),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(210), milliToMicro(50), DEVTOOLS_CATEGORY),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(240), milliToMicro(50), DEVTOOLS_CATEGORY),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(230), milliToMicro(50), DEVTOOLS_CATEGORY),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(1000), milliToMicro(50), DEVTOOLS_CATEGORY)
            ];
            bounds = makeFakeBounds(milliToMicro(1), milliToMicro(1050));
            win = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Extras.MainThreadActivity.calculateWindow(bounds, events);
            // This trace has:
            // 1 event at 1
            // 4 events between 200 and 230ms
            // 1 event at 1000ms
            // Therefore, the window focuses on the time period of 1 to 280ms (280 is
            // the end time of the event that starts at 230ms).
            // The right number looks odd because when we zoom the window we adjust it
            // postively by 5% for the upper bound to give it some breathing room.
            assert.strictEqual(win.min, milliToMicro(1));
            assert.strictEqual(win.max, milliToMicro(293.95));
            return [
                2
            ];
        });
    }));
    it('uses the entire trace window if the period of low utilisation makes up the majority of the trace', /*#__PURE__*/ _async_to_generator(function() {
        var events, bounds, win;
        return _ts_generator(this, function(_state) {
            events = [
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(100), milliToMicro(50), DEVTOOLS_CATEGORY),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(200000), milliToMicro(50000), DEVTOOLS_CATEGORY),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(300000), milliToMicro(50000), DEVTOOLS_CATEGORY),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(400000), milliToMicro(50000), DEVTOOLS_CATEGORY),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(4000000), milliToMicro(50000), DEVTOOLS_CATEGORY)
            ];
            // These events are very spaced out!
            // 1 at 100ms
            // 1 at 200,000ms
            // 1 at 300,000ms
            // 1 at 400,000ms
            // 1 at 4million ms!
            // This means that the area the autozoom picks is less than 10% of the
            // total time span, meaning that we fallback to just showing the entire
            // trace window.
            bounds = makeFakeBounds(milliToMicro(100), milliToMicro(4050000));
            win = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Extras.MainThreadActivity.calculateWindow(bounds, events);
            // We expect the window to equal the entire trace bounds.
            assert.deepEqual(win, bounds);
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=MainThreadActivity.test.js.map


}),

}]);