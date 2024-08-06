"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_timeline_model_TimelineModelFilter_test_js"], {
"./models/timeline_model/TimelineModelFilter.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../timeline_model/timeline_model.js */ "./models/timeline_model/timeline_model.js");
/* harmony import */var _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace/trace.js */ "./models/trace/trace.js");
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



describe('TimelineModelFilter', function() {
    describe('TimelineVisibleEventsFilter', function() {
        it('accepts events that are set in the constructor and rejects other events', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, userTimingEvent, visibleFilter;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'user-timings.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        userTimingEvent = traceData.UserTimings.performanceMeasures.at(0);
                        assert.isOk(userTimingEvent);
                        visibleFilter = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__.TimelineModelFilter.TimelineVisibleEventsFilter([
                            "UserTiming" /* TraceEngine.Types.TraceEvents.KnownEventName.UserTiming */ 
                        ]);
                        assert.isTrue(visibleFilter.accept(userTimingEvent));
                        return [
                            2
                        ];
                }
            });
        }));
        describe('eventType', function() {
            it('returns ConsoleTime if the event has the blink.console category', /*#__PURE__*/ _async_to_generator(function() {
                var traceData, consoleTimingEvent;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'timings-track.json.gz')
                            ];
                        case 1:
                            traceData = _state.sent().traceData;
                            consoleTimingEvent = traceData.UserTimings.consoleTimings.at(0);
                            assert.isOk(consoleTimingEvent);
                            assert.strictEqual(_timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__.TimelineModelFilter.TimelineVisibleEventsFilter.eventType(consoleTimingEvent), "ConsoleTime" /* TraceEngine.Types.TraceEvents.KnownEventName.ConsoleTime */ );
                            return [
                                2
                            ];
                    }
                });
            }));
            it('returns UserTiming if the event has the blink.user_timing category', /*#__PURE__*/ _async_to_generator(function() {
                var traceData, userTimingEvent;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'timings-track.json.gz')
                            ];
                        case 1:
                            traceData = _state.sent().traceData;
                            userTimingEvent = traceData.UserTimings.performanceMeasures.at(0);
                            assert.isOk(userTimingEvent);
                            assert.strictEqual(_timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__.TimelineModelFilter.TimelineVisibleEventsFilter.eventType(userTimingEvent), "UserTiming" /* TraceEngine.Types.TraceEvents.KnownEventName.UserTiming */ );
                            return [
                                2
                            ];
                    }
                });
            }));
            it('returns the event name if the event is any other category', /*#__PURE__*/ _async_to_generator(function() {
                var _traceData_LayoutShifts_clusters_at, traceData, layoutShiftEvent;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'cls-single-frame.json.gz')
                            ];
                        case 1:
                            traceData = _state.sent().traceData;
                            layoutShiftEvent = (_traceData_LayoutShifts_clusters_at = traceData.LayoutShifts.clusters.at(0)) === null || _traceData_LayoutShifts_clusters_at === void 0 ? void 0 : _traceData_LayoutShifts_clusters_at.events.at(0);
                            assert.isOk(layoutShiftEvent);
                            assert.strictEqual(_timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__.TimelineModelFilter.TimelineVisibleEventsFilter.eventType(layoutShiftEvent), "LayoutShift" /* TraceEngine.Types.TraceEvents.KnownEventName.LayoutShift */ );
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
    describe('TimelineInvisibleEventsFilter', function() {
        it('does not accept events that have been set as invisible', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, userTimingEvent, invisibleFilter;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'user-timings.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        userTimingEvent = traceData.UserTimings.performanceMeasures.at(0);
                        assert.isOk(userTimingEvent);
                        invisibleFilter = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__.TimelineModelFilter.TimelineInvisibleEventsFilter([
                            "UserTiming" /* TraceEngine.Types.TraceEvents.KnownEventName.UserTiming */ 
                        ]);
                        assert.isFalse(invisibleFilter.accept(userTimingEvent));
                        return [
                            2
                        ];
                }
            });
        }));
        it('accepts events that have not been set as invisible', /*#__PURE__*/ _async_to_generator(function() {
            var _traceData_LayoutShifts_clusters_at, traceData, layoutShiftEvent, invisibleFilter;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'cls-single-frame.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        layoutShiftEvent = (_traceData_LayoutShifts_clusters_at = traceData.LayoutShifts.clusters.at(0)) === null || _traceData_LayoutShifts_clusters_at === void 0 ? void 0 : _traceData_LayoutShifts_clusters_at.events.at(0);
                        assert.isOk(layoutShiftEvent);
                        invisibleFilter = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__.TimelineModelFilter.TimelineInvisibleEventsFilter([
                            "UserTiming" /* TraceEngine.Types.TraceEvents.KnownEventName.UserTiming */ 
                        ]);
                        assert.isTrue(invisibleFilter.accept(layoutShiftEvent));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('ExclusiveNameFilter', function() {
        it('accepts events that do not match the provided set of names to exclude', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, userTimingEvent, filter;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'user-timings.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        userTimingEvent = traceData.UserTimings.performanceMeasures.at(0);
                        assert.isOk(userTimingEvent);
                        filter = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__.TimelineModelFilter.ExclusiveNameFilter([
                            "LayoutShift" /* TraceEngine.Types.TraceEvents.KnownEventName.LayoutShift */ 
                        ]);
                        assert.isTrue(filter.accept(userTimingEvent));
                        return [
                            2
                        ];
                }
            });
        }));
        it('rejects events that match the provided set of names to exclude', /*#__PURE__*/ _async_to_generator(function() {
            var _traceData_LayoutShifts_clusters_at, traceData, layoutShiftEvent, filter;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'cls-single-frame.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        layoutShiftEvent = (_traceData_LayoutShifts_clusters_at = traceData.LayoutShifts.clusters.at(0)) === null || _traceData_LayoutShifts_clusters_at === void 0 ? void 0 : _traceData_LayoutShifts_clusters_at.events.at(0);
                        assert.isOk(layoutShiftEvent);
                        filter = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__.TimelineModelFilter.ExclusiveNameFilter([
                            "LayoutShift" /* TraceEngine.Types.TraceEvents.KnownEventName.LayoutShift */ 
                        ]);
                        assert.isFalse(filter.accept(layoutShiftEvent));
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=TimelineModelFilter.test.js.map


}),

}]);