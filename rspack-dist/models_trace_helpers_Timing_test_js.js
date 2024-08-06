"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_helpers_Timing_test_js"], {
"./models/trace/helpers/Timing.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
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



function milliToMicro(value) {
    return _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(value * 1000);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('Timing helpers', function() {
    describe('Timing conversions', function() {
        it('can convert milliseconds to microseconds', function() {
            var input = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MilliSeconds(1);
            var expected = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000);
            assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.Timing.millisecondsToMicroseconds(input), expected);
        });
        it('can convert seconds to milliseconds', function() {
            var input = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.Seconds(1);
            var expected = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MilliSeconds(1000);
            assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.Timing.secondsToMilliseconds(input), expected);
        });
        it('can convert seconds to microseconds', function() {
            var input = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.Seconds(1);
            // 1 Second = 1000 Milliseconds
            // 1000 Milliseconds = 1,000,000 Microseconds
            var expected = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000000);
            assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.Timing.secondsToMicroseconds(input), expected);
        });
        it('can convert microSeconds milliseconds', function() {
            var input = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000000);
            var expected = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MilliSeconds(1000);
            assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.Timing.microSecondsToMilliseconds(input), expected);
        });
    });
    it('eventTimingsMicroSeconds returns the right numbers', /*#__PURE__*/ _async_to_generator(function() {
        var event;
        return _ts_generator(this, function(_state) {
            event = {
                ts: 10,
                dur: 5
            };
            assert.deepEqual(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.Timing.eventTimingsMicroSeconds(event), {
                startTime: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(10),
                endTime: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(15),
                duration: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(5),
                selfTime: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(5)
            });
            return [
                2
            ];
        });
    }));
    it('eventTimingsMilliSeconds returns the right numbers', /*#__PURE__*/ _async_to_generator(function() {
        var event;
        return _ts_generator(this, function(_state) {
            event = {
                ts: 10000,
                dur: 5000
            };
            assert.deepEqual(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.Timing.eventTimingsMilliSeconds(event), {
                startTime: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MilliSeconds(10),
                endTime: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MilliSeconds(15),
                duration: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MilliSeconds(5),
                selfTime: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MilliSeconds(5)
            });
            return [
                2
            ];
        });
    }));
    it('eventTimingsSeconds returns the right numbers', /*#__PURE__*/ _async_to_generator(function() {
        var event;
        return _ts_generator(this, function(_state) {
            event = {
                ts: 100000,
                dur: 50000
            };
            assert.deepEqual(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.Timing.eventTimingsSeconds(event), {
                startTime: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.Seconds(0.1),
                endTime: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.Seconds(0.15),
                duration: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.Seconds(0.05),
                selfTime: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.Seconds(0.05)
            });
            return [
                2
            ];
        });
    }));
    describe('timeStampForEventAdjustedByClosestNavigation', function() {
        it('can use the navigation ID to adjust the time correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _lcpEvent_args_data, traceData, lcpEvent, adjustedTime, unadjustedTime, timeAsMS;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        lcpEvent = traceData.PageLoadMetrics.allMarkerEvents.find(function(event) {
                            // Just one LCP Event so we do not need to worry about ordering and finding the right one.
                            return event.name === 'largestContentfulPaint::Candidate';
                        });
                        if (!lcpEvent) {
                            throw new Error('Could not find LCP event');
                        }
                        // Ensure we are testing the navigationID path!
                        assert.exists((_lcpEvent_args_data = lcpEvent.args.data) === null || _lcpEvent_args_data === void 0 ? void 0 : _lcpEvent_args_data.navigationId);
                        adjustedTime = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.Timing.timeStampForEventAdjustedByClosestNavigation(lcpEvent, traceData.Meta.traceBounds, traceData.Meta.navigationsByNavigationId, traceData.Meta.navigationsByFrameId);
                        unadjustedTime = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.Timing.microSecondsToMilliseconds(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(lcpEvent.ts - traceData.Meta.traceBounds.min));
                        assert.strictEqual(unadjustedTime.toFixed(2), String(130.31));
                        // To make the assertion easier to read.
                        timeAsMS = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.Timing.microSecondsToMilliseconds(adjustedTime);
                        assert.strictEqual(timeAsMS.toFixed(2), String(118.44));
                        return [
                            2
                        ];
                }
            });
        }));
        it('can use the frame ID to adjust the time correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _dclEvent_args_data, traceData, dclEvent, unadjustedTime, adjustedTime, timeAsMS;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        dclEvent = traceData.PageLoadMetrics.allMarkerEvents.find(function(event) {
                            var _event_args_data;
                            return event.name === 'MarkDOMContent' && ((_event_args_data = event.args.data) === null || _event_args_data === void 0 ? void 0 : _event_args_data.frame) === traceData.Meta.mainFrameId;
                        });
                        if (!dclEvent) {
                            throw new Error('Could not find DCL event');
                        }
                        // Ensure we are testing the frameID path!
                        assert.isUndefined((_dclEvent_args_data = dclEvent.args.data) === null || _dclEvent_args_data === void 0 ? void 0 : _dclEvent_args_data.navigationId);
                        unadjustedTime = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.Timing.microSecondsToMilliseconds(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(dclEvent.ts - traceData.Meta.traceBounds.min));
                        assert.strictEqual(unadjustedTime.toFixed(2), String(190.79));
                        adjustedTime = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.Timing.timeStampForEventAdjustedByClosestNavigation(dclEvent, traceData.Meta.traceBounds, traceData.Meta.navigationsByNavigationId, traceData.Meta.navigationsByFrameId);
                        // To make the assertion easier to read.
                        timeAsMS = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.Timing.microSecondsToMilliseconds(adjustedTime);
                        assert.strictEqual(timeAsMS.toFixed(2), String(178.92));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('BoundsIncludeTimeRange', function() {
        var _TraceModel_Helpers_Timing = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.Timing, boundsIncludeTimeRange = _TraceModel_Helpers_Timing.boundsIncludeTimeRange, traceWindowFromMicroSeconds = _TraceModel_Helpers_Timing.traceWindowFromMicroSeconds;
        it('is false for an event that is outside the LHS of the visible bounds', function() {
            var bounds = traceWindowFromMicroSeconds(milliToMicro(50), milliToMicro(100));
            var timeRange = traceWindowFromMicroSeconds(milliToMicro(10), milliToMicro(20));
            assert.isFalse(boundsIncludeTimeRange({
                bounds: bounds,
                timeRange: timeRange
            }));
        });
        it('is false for an event that is outside the RHS of the visible bounds', function() {
            var bounds = traceWindowFromMicroSeconds(milliToMicro(50), milliToMicro(100));
            var timeRange = traceWindowFromMicroSeconds(milliToMicro(101), milliToMicro(200));
            assert.isFalse(boundsIncludeTimeRange({
                bounds: bounds,
                timeRange: timeRange
            }));
        });
        it('is true for an event that overlaps the LHS of the bounds', function() {
            var bounds = traceWindowFromMicroSeconds(milliToMicro(50), milliToMicro(100));
            var timeRange = traceWindowFromMicroSeconds(milliToMicro(0), milliToMicro(52));
            assert.isTrue(boundsIncludeTimeRange({
                bounds: bounds,
                timeRange: timeRange
            }));
        });
        it('is true for an event that overlaps the RHS of the bounds', function() {
            var bounds = traceWindowFromMicroSeconds(milliToMicro(50), milliToMicro(100));
            var timeRange = traceWindowFromMicroSeconds(milliToMicro(99), milliToMicro(101));
            assert.isTrue(boundsIncludeTimeRange({
                bounds: bounds,
                timeRange: timeRange
            }));
        });
        it('is true for an event that is entirely within the bounds', function() {
            var bounds = traceWindowFromMicroSeconds(milliToMicro(50), milliToMicro(100));
            var timeRange = traceWindowFromMicroSeconds(milliToMicro(51), milliToMicro(75));
            assert.isTrue(boundsIncludeTimeRange({
                bounds: bounds,
                timeRange: timeRange
            }));
        });
        it('is true for an event that is larger than the bounds', function() {
            var bounds = traceWindowFromMicroSeconds(milliToMicro(50), milliToMicro(100));
            var timeRange = traceWindowFromMicroSeconds(milliToMicro(0), milliToMicro(200));
            assert.isTrue(boundsIncludeTimeRange({
                bounds: bounds,
                timeRange: timeRange
            }));
        });
    });
    describe('timestampIsInBounds', function() {
        var timestampIsInBounds = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.Timing.timestampIsInBounds;
        var MicroSeconds = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds;
        it('is true if the value is in the bounds and false otherwise', /*#__PURE__*/ _async_to_generator(function() {
            var bounds;
            return _ts_generator(this, function(_state) {
                bounds = {
                    min: MicroSeconds(1),
                    max: MicroSeconds(10),
                    range: MicroSeconds(9)
                };
                assert.isTrue(timestampIsInBounds(bounds, MicroSeconds(1)));
                assert.isTrue(timestampIsInBounds(bounds, MicroSeconds(5)));
                assert.isTrue(timestampIsInBounds(bounds, MicroSeconds(10)));
                assert.isFalse(timestampIsInBounds(bounds, MicroSeconds(0)));
                assert.isFalse(timestampIsInBounds(bounds, MicroSeconds(11)));
                return [
                    2
                ];
            });
        }));
    });
}); //# sourceMappingURL=Timing.test.js.map


}),

}]);