"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_helpers_Trace_test_js"], {
"./models/trace/helpers/Trace.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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




(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('TraceModel helpers', function() {
    describe('extractOriginFromTrace', function() {
        it('extracts the origin of a parsed trace correctly', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, origin;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        origin = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.extractOriginFromTrace(traceData.Meta.mainFrameURL);
                        assert.strictEqual(origin, 'web.dev');
                        return [
                            2
                        ];
                }
            });
        }));
        it('will remove the `www` if it is present', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, origin;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'multiple-navigations.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        origin = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.extractOriginFromTrace(traceData.Meta.mainFrameURL);
                        assert.strictEqual(origin, 'google.com');
                        return [
                            2
                        ];
                }
            });
        }));
        it('returns null when no origin is found', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, origin;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'basic.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        origin = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.extractOriginFromTrace(traceData.Meta.mainFrameURL);
                        assert.isNull(origin);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('addEventToProcessThread', function() {
        var makeTraceEvent = function makeTraceEvent(pid, tid) {
            return {
                name: 'process_name',
                tid: tid,
                pid: pid,
                ts: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(0),
                cat: 'test',
                ph: "M" /* TraceModel.Types.TraceEvents.Phase.METADATA */ 
            };
        };
        var pid = function pid(x) {
            return _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(x);
        };
        var tid = function tid(x) {
            return _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(x);
        };
        var eventMap = new Map();
        beforeEach(function() {
            eventMap.clear();
        });
        it('will create a process and thread if it does not exist yet', /*#__PURE__*/ _async_to_generator(function() {
            var _eventMap_get, _eventMap_get1, event, threadEvents;
            return _ts_generator(this, function(_state) {
                event = makeTraceEvent(pid(1), tid(1));
                _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.addEventToProcessThread(event, eventMap);
                assert.strictEqual((_eventMap_get = eventMap.get(pid(1))) === null || _eventMap_get === void 0 ? void 0 : _eventMap_get.size, 1);
                threadEvents = (_eventMap_get1 = eventMap.get(pid(1))) === null || _eventMap_get1 === void 0 ? void 0 : _eventMap_get1.get(tid(1));
                assert.strictEqual(threadEvents === null || threadEvents === void 0 ? void 0 : threadEvents.length, 1);
                return [
                    2
                ];
            });
        }));
        it('adds new events to existing threads correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _eventMap_get, event, newEvent;
            return _ts_generator(this, function(_state) {
                event = makeTraceEvent(pid(1), tid(1));
                _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.addEventToProcessThread(event, eventMap);
                newEvent = makeTraceEvent(pid(1), tid(1));
                _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.addEventToProcessThread(newEvent, eventMap);
                assert.deepEqual((_eventMap_get = eventMap.get(pid(1))) === null || _eventMap_get === void 0 ? void 0 : _eventMap_get.get(tid(1)), [
                    event,
                    newEvent
                ]);
                return [
                    2
                ];
            });
        }));
    });
    describe('sortTraceEventsInPlace', function() {
        var makeFakeEvent = function makeFakeEvent(ts, dur) {
            return {
                ts: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(ts),
                dur: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(dur)
            };
        };
        it('sorts by start time in ASC order', function() {
            var event1 = makeFakeEvent(1, 1);
            var event2 = makeFakeEvent(2, 1);
            var event3 = makeFakeEvent(3, 1);
            var events = [
                event3,
                event1,
                event2
            ];
            _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.sortTraceEventsInPlace(events);
            assert.deepEqual(events, [
                event1,
                event2,
                event3
            ]);
        });
        it('sorts by longest duration if the timestamps are the same', function() {
            var event1 = makeFakeEvent(1, 1);
            var event2 = makeFakeEvent(1, 2);
            var event3 = makeFakeEvent(1, 3);
            var events = [
                event1,
                event2,
                event3
            ];
            _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.sortTraceEventsInPlace(events);
            assert.deepEqual(events, [
                event3,
                event2,
                event1
            ]);
        });
    });
    describe('getNavigationForTraceEvent', function() {
        it('returns the correct navigation for a request', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, NetworkRequests, Meta, request1, navigationForFirstRequest, request2, navigationForSecondRequest;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'multiple-navigations.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        NetworkRequests = traceData.NetworkRequests, Meta = traceData.Meta;
                        request1 = NetworkRequests.byTime[0];
                        navigationForFirstRequest = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.getNavigationForTraceEvent(request1, request1.args.data.frame, Meta.navigationsByFrameId);
                        assert.isUndefined(navigationForFirstRequest === null || navigationForFirstRequest === void 0 ? void 0 : navigationForFirstRequest.ts);
                        request2 = NetworkRequests.byTime[1];
                        navigationForSecondRequest = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.getNavigationForTraceEvent(request2, request2.args.data.frame, Meta.navigationsByFrameId);
                        assert.strictEqual(navigationForSecondRequest === null || navigationForSecondRequest === void 0 ? void 0 : navigationForSecondRequest.ts, _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(636471400029));
                        return [
                            2
                        ];
                }
            });
        }));
        it('returns the correct navigation for a page load event', /*#__PURE__*/ _async_to_generator(function() {
            var _PageLoadMetrics_metricScoresByFrameId_get_get, _PageLoadMetrics_metricScoresByFrameId_get, _navigationForFirstRequest_args_data, traceData, Meta, PageLoadMetrics, firstNavigationId, fcp, navigationForFirstRequest;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'multiple-navigations.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        Meta = traceData.Meta, PageLoadMetrics = traceData.PageLoadMetrics;
                        firstNavigationId = Meta.navigationsByNavigationId.keys().next().value;
                        fcp = (_PageLoadMetrics_metricScoresByFrameId_get = PageLoadMetrics.metricScoresByFrameId.get(Meta.mainFrameId)) === null || _PageLoadMetrics_metricScoresByFrameId_get === void 0 ? void 0 : (_PageLoadMetrics_metricScoresByFrameId_get_get = _PageLoadMetrics_metricScoresByFrameId_get.get(firstNavigationId)) === null || _PageLoadMetrics_metricScoresByFrameId_get_get === void 0 ? void 0 : _PageLoadMetrics_metricScoresByFrameId_get_get.get("FCP" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.MetricName.FCP */ );
                        if (!fcp || !fcp.event) {
                            assert.fail('FCP not found');
                        }
                        navigationForFirstRequest = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.getNavigationForTraceEvent(fcp.event, Meta.mainFrameId, Meta.navigationsByFrameId);
                        assert.strictEqual(navigationForFirstRequest === null || navigationForFirstRequest === void 0 ? void 0 : (_navigationForFirstRequest_args_data = navigationForFirstRequest.args.data) === null || _navigationForFirstRequest_args_data === void 0 ? void 0 : _navigationForFirstRequest_args_data.navigationId, firstNavigationId);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('extractId', function() {
        it('returns the correct id for an event', /*#__PURE__*/ _async_to_generator(function() {
            var _fakeEventWithGlobalId2_id2, _fakeEventWithLocalId2_id2, fakeEventWithId, id, fakeEventWithGlobalId2, globalId2, fakeEventWithLocalId2, localId2;
            return _ts_generator(this, function(_state) {
                fakeEventWithId = {
                    id: 'id'
                };
                id = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.extractId(fakeEventWithId);
                assert.strictEqual(id, fakeEventWithId.id);
                fakeEventWithGlobalId2 = {
                    id2: {
                        global: 'globalId2'
                    }
                };
                globalId2 = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.extractId(fakeEventWithGlobalId2);
                assert.strictEqual(globalId2, (_fakeEventWithGlobalId2_id2 = fakeEventWithGlobalId2.id2) === null || _fakeEventWithGlobalId2_id2 === void 0 ? void 0 : _fakeEventWithGlobalId2_id2.global);
                fakeEventWithLocalId2 = {
                    id2: {
                        local: 'localId2'
                    }
                };
                localId2 = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.extractId(fakeEventWithLocalId2);
                assert.strictEqual(localId2, (_fakeEventWithLocalId2_id2 = fakeEventWithLocalId2.id2) === null || _fakeEventWithLocalId2_id2 === void 0 ? void 0 : _fakeEventWithLocalId2_id2.local);
                return [
                    2
                ];
            });
        }));
    });
    describe('mergeEventsInOrder', function() {
        it('merges two ordered arrays of trace events with no duration', /*#__PURE__*/ _async_to_generator(function() {
            var array1, array2, ordered, i;
            return _ts_generator(this, function(_state) {
                array1 = [
                    {
                        name: 'a',
                        ts: 0
                    },
                    {
                        name: 'b',
                        ts: 2
                    },
                    {
                        name: 'c',
                        ts: 4
                    },
                    {
                        name: 'd',
                        ts: 6
                    },
                    {
                        name: 'e',
                        ts: 8
                    }
                ];
                array2 = [
                    {
                        name: 'a',
                        ts: 1
                    },
                    {
                        name: 'b',
                        ts: 3
                    },
                    {
                        name: 'c',
                        ts: 5
                    },
                    {
                        name: 'd',
                        ts: 7
                    },
                    {
                        name: 'e',
                        ts: 9
                    }
                ];
                ordered = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.mergeEventsInOrder(array1, array2);
                for(i = 1; i < ordered.length; i++){
                    assert.isAbove(ordered[i].ts, ordered[i - 1].ts);
                }
                return [
                    2
                ];
            });
        }));
        it('merges two ordered arrays of trace events with duration', /*#__PURE__*/ _async_to_generator(function() {
            var array1, array2, ordered, i;
            return _ts_generator(this, function(_state) {
                array1 = [
                    {
                        name: 'a',
                        ts: 0,
                        dur: 10
                    },
                    {
                        name: 'b',
                        ts: 2,
                        dur: 12
                    },
                    {
                        name: 'c',
                        ts: 4,
                        dur: 2
                    },
                    {
                        name: 'd',
                        ts: 6,
                        dur: 9
                    },
                    {
                        name: 'e',
                        ts: 8,
                        dur: 100
                    }
                ];
                array2 = [
                    {
                        name: 'a',
                        ts: 1,
                        dur: 2
                    },
                    {
                        name: 'b',
                        ts: 3,
                        dur: 1
                    },
                    {
                        name: 'c',
                        ts: 5,
                        dur: 99
                    },
                    {
                        name: 'd',
                        ts: 7
                    },
                    {
                        name: 'e',
                        ts: 9,
                        dur: 0
                    }
                ];
                ordered = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.mergeEventsInOrder(array1, array2);
                for(i = 1; i < ordered.length; i++){
                    assert.isAbove(ordered[i].ts, ordered[i - 1].ts);
                }
                return [
                    2
                ];
            });
        }));
        it('merges two ordered arrays of trace events when timestamps collide', /*#__PURE__*/ _async_to_generator(function() {
            var array1, array2, ordered, i, dur, durPrev, eventsHaveDuration, correctOrderForSharedTimestamp;
            return _ts_generator(this, function(_state) {
                array1 = [
                    {
                        name: 'a',
                        ts: 0,
                        dur: 10
                    },
                    {
                        name: 'b',
                        ts: 2,
                        dur: 12
                    },
                    {
                        name: 'c',
                        ts: 4,
                        dur: 2
                    },
                    {
                        name: 'd',
                        ts: 6,
                        dur: 9
                    },
                    {
                        name: 'e',
                        ts: 8,
                        dur: 100
                    }
                ];
                array2 = [
                    {
                        name: 'a',
                        ts: 0,
                        dur: 2
                    },
                    {
                        name: 'b',
                        ts: 2,
                        dur: 1
                    },
                    {
                        name: 'c',
                        ts: 4,
                        dur: 99
                    },
                    {
                        name: 'd',
                        ts: 7
                    },
                    {
                        name: 'e',
                        ts: 9,
                        dur: 0
                    }
                ];
                ordered = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.mergeEventsInOrder(array1, array2);
                for(i = 1; i < ordered.length; i++){
                    dur = ordered[i].dur;
                    durPrev = ordered[i - 1].dur;
                    eventsHaveDuration = dur !== undefined && durPrev !== undefined;
                    correctOrderForSharedTimestamp = eventsHaveDuration && ordered[i].ts === ordered[i - 1].ts && dur <= durPrev;
                    assert.isTrue(ordered[i].ts > ordered[i - 1].ts || correctOrderForSharedTimestamp);
                }
                return [
                    2
                ];
            });
        }));
        it('merges two ordered arrays of trace events when timestamps and durations collide', /*#__PURE__*/ _async_to_generator(function() {
            var array1, array2, ordered, i, dur, durPrev, eventsHaveDuration, correctOrderForSharedTimestamp;
            return _ts_generator(this, function(_state) {
                array1 = [
                    {
                        name: 'a',
                        ts: 0,
                        dur: 10
                    },
                    {
                        name: 'b',
                        ts: 2,
                        dur: 10
                    },
                    {
                        name: 'c',
                        ts: 4,
                        dur: 10
                    },
                    {
                        name: 'd',
                        ts: 6,
                        dur: 10
                    },
                    {
                        name: 'e',
                        ts: 8,
                        dur: 10
                    }
                ];
                array2 = _to_consumable_array(array1);
                ordered = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.mergeEventsInOrder(array1, array2);
                for(i = 1; i < ordered.length; i++){
                    dur = ordered[i].dur;
                    durPrev = ordered[i - 1].dur;
                    eventsHaveDuration = dur !== undefined && durPrev !== undefined;
                    correctOrderForSharedTimestamp = eventsHaveDuration && ordered[i].ts === ordered[i - 1].ts && dur <= durPrev;
                    assert.isTrue(ordered[i].ts > ordered[i - 1].ts || correctOrderForSharedTimestamp);
                }
                return [
                    2
                ];
            });
        }));
    });
    describe('activeURLForFrameAtTime', function() {
        it('extracts the active url for a frame at a given time', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, frameId, firstURL, secondURL;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'simple-js-program.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        frameId = '1F729458403A23CF1D8D246095129AC4';
                        firstURL = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.activeURLForFrameAtTime(frameId, _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(251126654355), traceData.Meta.rendererProcessesByFrame);
                        assert.strictEqual(firstURL, 'about:blank');
                        secondURL = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.activeURLForFrameAtTime(frameId, _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(251126663398), traceData.Meta.rendererProcessesByFrame);
                        assert.strictEqual(secondURL, 'https://www.google.com');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('createMatchedSortedSyntheticEvents', function() {
        it('matches up arbitrary async events', /*#__PURE__*/ _async_to_generator(function() {
            var events, asyncEvents, synthEvents, seen, eventSummary, eventsSummary;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.rawEvents(this, 'user-timings.json.gz')
                        ];
                    case 1:
                        events = _state.sent();
                        asyncEvents = events.filter(function(event) {
                            return _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventAsyncPhase(event);
                        });
                        synthEvents = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.createMatchedSortedSyntheticEvents(asyncEvents);
                        // There's a lot of events, let's only assert one event per name
                        seen = new Set();
                        // Make a readable output of each event to assert
                        eventSummary = function(e) {
                            return "@ ".concat((e.ts / 1000 - 1003e5).toFixed(3).padEnd(9), " for ").concat((e.dur / 1000).toFixed(3).padStart(8), ": ").concat(e.name);
                        };
                        eventsSummary = synthEvents.filter(function(e) {
                            var alreadySeen = seen.has(e.name);
                            seen.add(e.name);
                            return !alreadySeen;
                        }).map(eventSummary);
                        assert.deepEqual(eventsSummary, [
                            '@ 22336.946 for   16.959: PipelineReporter',
                            '@ 22350.590 for    3.315: BeginImplFrameToSendBeginMainFrame',
                            '@ 40732.328 for    0.834: SendBeginMainFrameToCommit',
                            '@ 40733.162 for    0.307: Commit',
                            '@ 40733.469 for    0.097: EndCommitToActivation',
                            '@ 40733.566 for    0.019: Activation',
                            '@ 40733.585 for    1.775: EndActivateToSubmitCompositorFrame',
                            '@ 40735.360 for   58.412: SubmitCompositorFrameToPresentationCompositorFrame',
                            '@ 40735.360 for    0.148: SubmitToReceiveCompositorFrame',
                            '@ 40735.508 for    3.667: ReceiveCompositorFrameToStartDraw',
                            '@ 40739.175 for   54.136: StartDrawToSwapStart',
                            '@ 40793.311 for    0.461: Swap',
                            '@ 40810.809 for  205.424: first measure',
                            '@ 40810.809 for  606.224: second measure',
                            '@ 40825.971 for   11.802: InputLatency::MouseMove',
                            '@ 41818.833 for 2005.601: third measure'
                        ]);
                        assert.strictEqual(synthEvents.length, 237);
                        return [
                            2
                        ];
                }
            });
        }));
        describe('createSortedSyntheticEvents()', function() {
            it('correctly creates synthetic events when instant animation events are present', /*#__PURE__*/ _async_to_generator(function() {
                var events, animationEvents, animationSynthEvents, wantPairs;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.rawEvents(this, 'instant-animation-events.json.gz')
                            ];
                        case 1:
                            events = _state.sent();
                            animationEvents = events.filter(function(event) {
                                return _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventAnimation(event);
                            });
                            animationSynthEvents = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.createMatchedSortedSyntheticEvents(animationEvents);
                            wantPairs = new Map([
                                [
                                    'blink.animations,devtools.timeline,benchmark,rail:0x11d00230380:Animation',
                                    {
                                        compositeFailed: 8224,
                                        unsupportedProperties: [
                                            'width'
                                        ]
                                    }
                                ],
                                [
                                    'blink.animations,devtools.timeline,benchmark,rail:0x11d00234738:Animation',
                                    {
                                        compositeFailed: 0
                                    }
                                ],
                                [
                                    'blink.animations,devtools.timeline,benchmark,rail:0x11d00234b08:Animation',
                                    {
                                        compositeFailed: 8224,
                                        unsupportedProperties: [
                                            'height'
                                        ]
                                    }
                                ],
                                [
                                    'blink.animations,devtools.timeline,benchmark,rail:0x11d00234ed8:Animation',
                                    {
                                        compositeFailed: 8224,
                                        unsupportedProperties: [
                                            'font-size'
                                        ]
                                    }
                                ]
                            ]);
                            // Ensure we have the correct numner of synthetic events created.
                            assert.deepEqual(wantPairs.size, animationSynthEvents.length);
                            animationSynthEvents.forEach(function(event) {
                                var _beginEvent_id2, _beginEvent_id21;
                                var id = event.id;
                                assert.exists(id);
                                assert.exists(wantPairs.get(id));
                                var beginEvent = event.args.data.beginEvent;
                                var endEvent = event.args.data.endEvent;
                                var instantEvents = event.args.data.instantEvents;
                                assert.exists(beginEvent);
                                // Check that the individual event ids match the synthetic id.
                                assert.isTrue(((_beginEvent_id2 = beginEvent.id2) === null || _beginEvent_id2 === void 0 ? void 0 : _beginEvent_id2.local) && id.includes((_beginEvent_id21 = beginEvent.id2) === null || _beginEvent_id21 === void 0 ? void 0 : _beginEvent_id21.local));
                                if (endEvent) {
                                    var _endEvent_id2, _endEvent_id21;
                                    assert.isTrue(((_endEvent_id2 = endEvent.id2) === null || _endEvent_id2 === void 0 ? void 0 : _endEvent_id2.local) && (id === null || id === void 0 ? void 0 : id.includes((_endEvent_id21 = endEvent.id2) === null || _endEvent_id21 === void 0 ? void 0 : _endEvent_id21.local)));
                                }
                                assert.isTrue(instantEvents === null || instantEvents === void 0 ? void 0 : instantEvents.every(function(event) {
                                    var _event_id2, _event_id21;
                                    return ((_event_id2 = event.id2) === null || _event_id2 === void 0 ? void 0 : _event_id2.local) && id.includes((_event_id21 = event.id2) === null || _event_id21 === void 0 ? void 0 : _event_id21.local);
                                }));
                                assert.strictEqual(instantEvents.length, 2);
                                // Check that the non-composited data matches the expected.
                                var nonCompositedEvents = instantEvents.filter(function(event) {
                                    return event.args.data.compositeFailed;
                                });
                                nonCompositedEvents.forEach(function(event) {
                                    var _wantPairs_get, _wantPairs_get1;
                                    assert.strictEqual(event.args.data.compositeFailed, (_wantPairs_get = wantPairs.get(id)) === null || _wantPairs_get === void 0 ? void 0 : _wantPairs_get.compositeFailed);
                                    assert.deepEqual(event.args.data.unsupportedProperties, (_wantPairs_get1 = wantPairs.get(id)) === null || _wantPairs_get1 === void 0 ? void 0 : _wantPairs_get1.unsupportedProperties);
                                });
                            });
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
    describe('getZeroIndexedLineAndColumnNumbersForEvent', function() {
        it('subtracts one from the line number of a function call', /*#__PURE__*/ _async_to_generator(function() {
            var fakeFunctionCall;
            return _ts_generator(this, function(_state) {
                fakeFunctionCall = {
                    name: "FunctionCall" /* TraceModel.Types.TraceEvents.KnownEventName.FunctionCall */ ,
                    ph: "X" /* TraceModel.Types.TraceEvents.Phase.COMPLETE */ ,
                    cat: 'devtools-timeline',
                    dur: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(100),
                    ts: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(100),
                    pid: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(1),
                    tid: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(1),
                    args: {
                        data: {
                            functionName: 'test',
                            url: 'https://google.com/test.js',
                            scriptId: Number(123),
                            lineNumber: 1,
                            columnNumber: 1
                        }
                    }
                };
                assert.deepEqual(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.getZeroIndexedLineAndColumnForEvent(fakeFunctionCall), {
                    lineNumber: 0,
                    columnNumber: 0
                });
                return [
                    2
                ];
            });
        }));
    });
    describe('frameIDForEvent', function() {
        it('returns the frame ID from beginData if the event has it', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, parseHTMLEvent, frameId;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        parseHTMLEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventParseHTML);
                        assert.isOk(parseHTMLEvent);
                        frameId = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.frameIDForEvent(parseHTMLEvent);
                        assert.isNotNull(frameId);
                        assert.strictEqual(frameId, parseHTMLEvent.args.beginData.frame);
                        return [
                            2
                        ];
                }
            });
        }));
        it('returns the frame ID from args.data if the event has it', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, invalidateLayoutEvent, frameId;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        invalidateLayoutEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventInvalidateLayout);
                        assert.isOk(invalidateLayoutEvent);
                        frameId = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.frameIDForEvent(invalidateLayoutEvent);
                        assert.isNotNull(frameId);
                        assert.strictEqual(frameId, invalidateLayoutEvent.args.data.frame);
                        return [
                            2
                        ];
                }
            });
        }));
        it('returns null if the event does not have a frame', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, v8CompileEvent, frameId;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        v8CompileEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventV8Compile);
                        assert.isOk(v8CompileEvent);
                        frameId = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.frameIDForEvent(v8CompileEvent);
                        assert.isNull(frameId);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('findUpdateLayoutTreeEvents', function() {
        it('returns the set of UpdateLayoutTree events within the right time range', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, mainThread, foundEvents, lastEvent, filteredByEndTimeEvents;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'selector-stats.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMainThread)(traceData.Renderer);
                        foundEvents = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.findUpdateLayoutTreeEvents(mainThread.entries, traceData.Meta.traceBounds.min);
                        assert.lengthOf(foundEvents, 11);
                        lastEvent = foundEvents.at(-1);
                        assert.isOk(lastEvent);
                        // Check we can filter by endTime by making the endTime less than the start
                        // time of the last event:
                        filteredByEndTimeEvents = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.findUpdateLayoutTreeEvents(mainThread.entries, traceData.Meta.traceBounds.min, _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(lastEvent.ts - 1000));
                        assert.lengthOf(filteredByEndTimeEvents, 10);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('forEachEvent', function() {
        var pid = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(1);
        var tid = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(1);
        it('iterates through the events in the expected tree-like order', /*#__PURE__*/ _async_to_generator(function() {
            var traceEvents, onStartEvent, onEndEvent, eventsFromStartEventCalls, eventsFromEndEventCalls;
            return _ts_generator(this, function(_state) {
                // |------------- RunTask -------------||-- RunTask --|
                //  |-- RunMicrotasks --||-- Layout --|
                //   |- FunctionCall -|
                traceEvents = [
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('RunTask', 0, 10, '*', pid, tid),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('RunMicrotasks', 1, 3, '*', pid, tid),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('FunctionCall', 2, 1, '*', pid, tid),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('Layout', 5, 3, '*', pid, tid),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('RunTask', 11, 3, '*', pid, tid)
                ];
                onStartEvent = sinon.spy(function(_event) {});
                onEndEvent = sinon.spy(function(_event) {});
                _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.forEachEvent(traceEvents, {
                    onEndEvent: onEndEvent,
                    onStartEvent: onStartEvent
                });
                eventsFromStartEventCalls = onStartEvent.getCalls().map(function(a) {
                    return a.args[0];
                });
                eventsFromEndEventCalls = onEndEvent.getCalls().map(function(a) {
                    return a.args[0];
                });
                assert.deepEqual(eventsFromStartEventCalls.map(function(e) {
                    return e.name;
                }), [
                    'RunTask',
                    'RunMicrotasks',
                    'FunctionCall',
                    'Layout',
                    'RunTask'
                ]);
                assert.deepEqual(eventsFromEndEventCalls.map(function(e) {
                    return e.name;
                }), [
                    'FunctionCall',
                    'RunMicrotasks',
                    'Layout',
                    'RunTask',
                    'RunTask'
                ]);
                return [
                    2
                ];
            });
        }));
        it('allows for a custom start and end time', /*#__PURE__*/ _async_to_generator(function() {
            var traceEvents, onStartEvent, onEndEvent, eventsFromStartEventCalls, eventsFromEndEventCalls;
            return _ts_generator(this, function(_state) {
                // |------------- RunTask -------------||-- RunTask --|
                //  |-- RunMicrotasks --||-- Layout --|
                //   |- FunctionCall -|
                traceEvents = [
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('RunTask', 0, 10, '*', pid, tid),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('RunMicrotasks', 1, 3, '*', pid, tid),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('FunctionCall', 2, 1, '*', pid, tid),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('Layout', 5, 3, '*', pid, tid)
                ];
                onStartEvent = sinon.spy(function(_event) {});
                onEndEvent = sinon.spy(function(_event) {});
                _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.forEachEvent(traceEvents, {
                    onEndEvent: onEndEvent,
                    onStartEvent: onStartEvent,
                    startTime: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(5),
                    endTime: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(9)
                });
                eventsFromStartEventCalls = onStartEvent.getCalls().map(function(a) {
                    return a.args[0];
                });
                eventsFromEndEventCalls = onEndEvent.getCalls().map(function(a) {
                    return a.args[0];
                });
                // We expect the RunTask event (0-10) and the Layout event (5-8) as
                // those fit in the 5-9 custom time range.
                assert.deepEqual(eventsFromStartEventCalls.map(function(e) {
                    return e.name;
                }), [
                    'RunTask',
                    'Layout'
                ]);
                assert.deepEqual(eventsFromEndEventCalls.map(function(e) {
                    return e.name;
                }), [
                    'Layout',
                    'RunTask'
                ]);
                return [
                    2
                ];
            });
        }));
        it('lets the user filter out events with a custom filter', /*#__PURE__*/ _async_to_generator(function() {
            var traceEvents, onStartEvent, onEndEvent, eventsFromStartEventCalls, eventsFromEndEventCalls;
            return _ts_generator(this, function(_state) {
                // |------------- RunTask -------------||-- RunTask --|
                //  |-- RunMicrotasks --||-- Layout --|
                //   |- FunctionCall -|
                traceEvents = [
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('RunTask', 0, 10, '*', pid, tid),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('RunMicrotasks', 1, 3, '*', pid, tid),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('FunctionCall', 2, 1, '*', pid, tid),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('Layout', 5, 3, '*', pid, tid),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('RunTask', 11, 3, '*', pid, tid)
                ];
                onStartEvent = sinon.spy(function(_event) {});
                onEndEvent = sinon.spy(function(_event) {});
                _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.forEachEvent(traceEvents, {
                    onEndEvent: onEndEvent,
                    onStartEvent: onStartEvent,
                    eventFilter: function eventFilter(event) {
                        return event.name !== 'RunTask';
                    }
                });
                eventsFromStartEventCalls = onStartEvent.getCalls().map(function(a) {
                    return a.args[0];
                });
                eventsFromEndEventCalls = onEndEvent.getCalls().map(function(a) {
                    return a.args[0];
                });
                assert.deepEqual(eventsFromStartEventCalls.map(function(e) {
                    return e.name;
                }), [
                    'RunMicrotasks',
                    'FunctionCall',
                    'Layout'
                ]);
                assert.deepEqual(eventsFromEndEventCalls.map(function(e) {
                    return e.name;
                }), [
                    'FunctionCall',
                    'RunMicrotasks',
                    'Layout'
                ]);
                return [
                    2
                ];
            });
        }));
        it('calls the onInstantEvent callback when it finds an event with 0 duration', /*#__PURE__*/ _async_to_generator(function() {
            var traceEvents, onStartEvent, onEndEvent, onInstantEvent;
            return _ts_generator(this, function(_state) {
                traceEvents = [
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeInstantEvent)('FakeInstantEvent', 0, '*', pid, tid)
                ];
                onStartEvent = sinon.spy(function(_event) {});
                onEndEvent = sinon.spy(function(_event) {});
                onInstantEvent = sinon.spy(function(_event) {});
                _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.forEachEvent(traceEvents, {
                    onEndEvent: onEndEvent,
                    onStartEvent: onStartEvent,
                    onInstantEvent: onInstantEvent
                });
                assert.strictEqual(onStartEvent.callCount, 0);
                assert.strictEqual(onEndEvent.callCount, 0);
                assert.strictEqual(onInstantEvent.callCount, 1);
                return [
                    2
                ];
            });
        }));
        it('skips async events by default', /*#__PURE__*/ _async_to_generator(function() {
            var traceEvents, onStartEvent, onEndEvent, onInstantEvent;
            return _ts_generator(this, function(_state) {
                traceEvents = [
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeAsyncStartEvent)('FakeAsync', 0, pid, tid),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeAsyncEndEvent)('FakeAsync', 0, pid, tid)
                ];
                onStartEvent = sinon.spy(function(_event) {});
                onEndEvent = sinon.spy(function(_event) {});
                onInstantEvent = sinon.spy(function(_event) {});
                _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.forEachEvent(traceEvents, {
                    onEndEvent: onEndEvent,
                    onStartEvent: onStartEvent,
                    onInstantEvent: onInstantEvent
                });
                assert.strictEqual(onStartEvent.callCount, 0);
                assert.strictEqual(onEndEvent.callCount, 0);
                assert.strictEqual(onInstantEvent.callCount, 0);
                return [
                    2
                ];
            });
        }));
        it('can be configured to include async events', /*#__PURE__*/ _async_to_generator(function() {
            var traceEvents, onStartEvent, onEndEvent, onInstantEvent;
            return _ts_generator(this, function(_state) {
                traceEvents = [
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeAsyncStartEvent)('FakeAsync', 0, pid, tid),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeAsyncEndEvent)('FakeAsync', 0, pid, tid)
                ];
                onStartEvent = sinon.spy(function(_event) {});
                onEndEvent = sinon.spy(function(_event) {});
                onInstantEvent = sinon.spy(function(_event) {});
                _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.forEachEvent(traceEvents, {
                    onEndEvent: onEndEvent,
                    onStartEvent: onStartEvent,
                    onInstantEvent: onInstantEvent,
                    ignoreAsyncEvents: false
                });
                assert.strictEqual(onStartEvent.callCount, 0);
                assert.strictEqual(onEndEvent.callCount, 0);
                assert.strictEqual(onInstantEvent.callCount, 2);
                return [
                    2
                ];
            });
        }));
    });
    describe('isTopLevelEvent', function() {
        it('is true for a RunTask event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, runTask;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        runTask = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventRunTask);
                        assert.isOk(runTask);
                        assert.isTrue(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.isTopLevelEvent(runTask));
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=Trace.test.js.map


}),

}]);