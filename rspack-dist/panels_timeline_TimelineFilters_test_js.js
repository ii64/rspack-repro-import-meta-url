"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_TimelineFilters_test_js"], {
"./panels/timeline/TimelineFilters.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
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





(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('TimelineFilters', function() {
    describe('IsLong', function() {
        it('returns true if the event is longer than the defined duration for a new engine event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, longEvent, filter;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'one-second-interaction.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        longEvent = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainThread)(traceData.Renderer).entries.find(function(event) {
                            return event.dur && event.dur > _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.millisecondsToMicroseconds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MilliSeconds(50));
                        });
                        if (!longEvent) {
                            throw new Error('Could not find expected long event.');
                        }
                        filter = new _timeline_js__WEBPACK_IMPORTED_MODULE_4__.TimelineFilters.IsLong();
                        filter.setMinimumRecordDuration(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MilliSeconds(50));
                        assert.isTrue(filter.accept(longEvent));
                        return [
                            2
                        ];
                }
            });
        }));
        it('returns false if the event is shorter than the defined duration for a new engine event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, longEvent, filter;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'one-second-interaction.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        longEvent = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainThread)(traceData.Renderer).entries.find(function(event) {
                            return event.dur && event.dur > _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.millisecondsToMicroseconds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MilliSeconds(50)) && event.dur < _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.millisecondsToMicroseconds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MilliSeconds(100));
                        });
                        if (!longEvent) {
                            throw new Error('Could not find expected long event.');
                        }
                        filter = new _timeline_js__WEBPACK_IMPORTED_MODULE_4__.TimelineFilters.IsLong();
                        filter.setMinimumRecordDuration(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MilliSeconds(101));
                        assert.isFalse(filter.accept(longEvent));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Category', function() {
        it('returns false for a new event if it has a category that is hidden', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, userTimingEvent, filter;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'user-timings.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        // These events are usually visible, so make the category hidden before
                        // running this test.
                        _timeline_js__WEBPACK_IMPORTED_MODULE_4__.EventUICategory.getCategoryStyles()['scripting'].hidden = true;
                        userTimingEvent = traceData.UserTimings.performanceMeasures.at(0);
                        if (!userTimingEvent) {
                            throw new Error('Could not find expected event.');
                        }
                        filter = new _timeline_js__WEBPACK_IMPORTED_MODULE_4__.TimelineFilters.Category();
                        assert.isFalse(filter.accept(userTimingEvent));
                        _timeline_js__WEBPACK_IMPORTED_MODULE_4__.EventUICategory.getCategoryStyles()['scripting'].hidden = false;
                        return [
                            2
                        ];
                }
            });
        }));
        it('returns true for a new event if it has a category that is visible', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, userTimingEvent, filter;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'user-timings.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        userTimingEvent = traceData.UserTimings.performanceMeasures.at(0);
                        if (!userTimingEvent) {
                            throw new Error('Could not find expected event.');
                        }
                        filter = new _timeline_js__WEBPACK_IMPORTED_MODULE_4__.TimelineFilters.Category();
                        assert.isTrue(filter.accept(userTimingEvent));
                        _timeline_js__WEBPACK_IMPORTED_MODULE_4__.EventUICategory.getCategoryStyles()['scripting'].hidden = false;
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=TimelineFilters.test.js.map


}),

}]);