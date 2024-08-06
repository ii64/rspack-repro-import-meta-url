"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_track_appenders_CompatibilityTracksAppender_test_js"], {
"./panels/timeline/track_appenders/CompatibilityTracksAppender.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../timeline.js */ "./panels/timeline/timeline.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('CompatibilityTracksAppender', function() {
    var _this = this;
    var traceData;
    var tracksAppender;
    var entryData = [];
    var flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChartTimelineData.createEmpty();
    var entryTypeByLevel = [];
    function initTrackAppender(context) {
        return _initTrackAppender.apply(this, arguments);
    }
    function _initTrackAppender() {
        _initTrackAppender = _async_to_generator(function(context) {
            var fixture, timingsTrack, gpuTrack, threadAppenders, currentLevel, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, threadAppender;
            var _arguments = arguments;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        fixture = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : 'timings-track.json.gz';
                        entryData = [];
                        flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChartTimelineData.createEmpty();
                        entryTypeByLevel = [];
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(context, fixture)
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        tracksAppender = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.CompatibilityTracksAppender.CompatibilityTracksAppender(flameChartData, traceData, entryData, entryTypeByLevel);
                        timingsTrack = tracksAppender.timingsTrackAppender();
                        gpuTrack = tracksAppender.gpuTrackAppender();
                        threadAppenders = tracksAppender.threadAppenders();
                        currentLevel = timingsTrack.appendTrackAtLevel(0);
                        currentLevel = gpuTrack.appendTrackAtLevel(currentLevel);
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = threadAppenders[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                threadAppender = _step.value;
                                currentLevel = threadAppender.appendTrackAtLevel(currentLevel);
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
                        return [
                            2
                        ];
                }
            });
        });
        return _initTrackAppender.apply(this, arguments);
    }
    var _this1 = this;
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupIgnoreListManagerEnvironment)();
                    return [
                        4,
                        initTrackAppender(_this1)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    describe('Tree view data', function() {
        describe('eventsInTrack', function() {
            it('returns all the events appended by a track with multiple levels', function() {
                var timingsTrack = tracksAppender.timingsTrackAppender();
                var timingsTrackEvents = tracksAppender.eventsInTrack(timingsTrack);
                var allTimingEvents = _to_consumable_array(traceData.UserTimings.consoleTimings).concat(_to_consumable_array(traceData.UserTimings.timestampEvents), _to_consumable_array(traceData.UserTimings.performanceMarks), _to_consumable_array(traceData.UserTimings.performanceMeasures), _to_consumable_array(traceData.PageLoadMetrics.allMarkerEvents)).sort(function(a, b) {
                    return a.ts - b.ts;
                });
                assert.deepEqual(timingsTrackEvents, allTimingEvents);
            });
            it('returns all the events appended by a track with one level', function() {
                var gpuTrack = tracksAppender.gpuTrackAppender();
                var gpuTrackEvents = tracksAppender.eventsInTrack(gpuTrack);
                assert.deepEqual(gpuTrackEvents, traceData.GPU.mainGPUThreadTasks);
            });
        });
        describe('eventsForTreeView', function() {
            it('returns only sync events if using async events means a tree cannot be built', function() {
                var timingsTrack = tracksAppender.timingsTrackAppender();
                var timingsEvents = tracksAppender.eventsInTrack(timingsTrack);
                assert.isFalse(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.TreeHelpers.canBuildTreesFromEvents(timingsEvents));
                var treeEvents = tracksAppender.eventsForTreeView(timingsTrack);
                var allEventsAreSync = treeEvents.every(function(event) {
                    return !_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isAsyncPhase(event.ph);
                });
                assert.isTrue(allEventsAreSync);
            });
            var _this1 = _this;
            it('returns both sync and async events if a tree can be built with them', /*#__PURE__*/ _async_to_generator(function() {
                var timingsTrack, timingsEvents, treeEvents;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            // This file contains events in the timings track that can be assembled as a tree
                            return [
                                4,
                                initTrackAppender(_this1, 'sync-like-timings.json.gz')
                            ];
                        case 1:
                            _state.sent();
                            timingsTrack = tracksAppender.timingsTrackAppender();
                            timingsEvents = tracksAppender.eventsInTrack(timingsTrack);
                            assert.isTrue(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.TreeHelpers.canBuildTreesFromEvents(timingsEvents));
                            treeEvents = tracksAppender.eventsForTreeView(timingsTrack);
                            assert.deepEqual(treeEvents, timingsEvents);
                            return [
                                2
                            ];
                    }
                });
            }));
            var _this2 = _this;
            it('returns events for tree view for nested tracks', /*#__PURE__*/ _async_to_generator(function() {
                var rasterTracks, raster1Events, raster1TreeEvents, raster2Events, raster2TreeEvents;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            // This file contains two rasterizer threads which should be
                            // nested inside the same header.
                            return [
                                4,
                                initTrackAppender(_this2, 'lcp-images-rasterizer.json.gz')
                            ];
                        case 1:
                            _state.sent();
                            rasterTracks = tracksAppender.threadAppenders().filter(function(threadAppender) {
                                return threadAppender.threadType === "RASTERIZER" /* TraceModel.Handlers.Threads.ThreadType.RASTERIZER */ ;
                            });
                            assert.strictEqual(rasterTracks.length, 2);
                            raster1Events = tracksAppender.eventsInTrack(rasterTracks[0]);
                            assert.strictEqual(raster1Events.length, 6);
                            assert.isTrue(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.TreeHelpers.canBuildTreesFromEvents(raster1Events));
                            raster1TreeEvents = tracksAppender.eventsForTreeView(rasterTracks[0]);
                            assert.deepEqual(raster1TreeEvents, raster1Events);
                            raster2Events = tracksAppender.eventsInTrack(rasterTracks[1]);
                            assert.strictEqual(raster2Events.length, 1);
                            assert.isTrue(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.TreeHelpers.canBuildTreesFromEvents(raster2Events));
                            raster2TreeEvents = tracksAppender.eventsForTreeView(rasterTracks[1]);
                            assert.deepEqual(raster2TreeEvents, raster2Events);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('groupEventsForTreeView', function() {
            var _this1 = _this;
            it('returns all the events of a flame chart group with multiple levels', /*#__PURE__*/ _async_to_generator(function() {
                var timingsGroupEvents, allTimingEvents;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            // This file contains events in the timings track that can be assembled as a tree
                            return [
                                4,
                                initTrackAppender(_this1, 'sync-like-timings.json.gz')
                            ];
                        case 1:
                            _state.sent();
                            timingsGroupEvents = tracksAppender.groupEventsForTreeView(flameChartData.groups[0]);
                            if (!timingsGroupEvents) {
                                assert.fail('Could not find events for group');
                            }
                            allTimingEvents = _to_consumable_array(traceData.UserTimings.consoleTimings).concat(_to_consumable_array(traceData.UserTimings.timestampEvents), _to_consumable_array(traceData.UserTimings.performanceMarks), _to_consumable_array(traceData.UserTimings.performanceMeasures), _to_consumable_array(traceData.PageLoadMetrics.allMarkerEvents)).sort(function(a, b) {
                                return a.ts - b.ts;
                            });
                            assert.deepEqual(timingsGroupEvents, allTimingEvents);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('returns all the events of a flame chart group with one level', function() {
                var gpuGroupEvents = tracksAppender.groupEventsForTreeView(flameChartData.groups[1]);
                if (!gpuGroupEvents) {
                    assert.fail('Could not find events for group');
                }
                assert.deepEqual(gpuGroupEvents, traceData.GPU.mainGPUThreadTasks);
            });
        });
    });
    describe('highlightedEntryInfo', function() {
        it('shows the correct warning for a long task when hovered', /*#__PURE__*/ _async_to_generator(function() {
            var _traceData_Renderer, _info_warningElements, _info_warningElements1, events, longTask, info, warning;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            initTrackAppender(this, 'simple-js-program.json.gz')
                        ];
                    case 1:
                        _state.sent();
                        events = (_traceData_Renderer = traceData.Renderer) === null || _traceData_Renderer === void 0 ? void 0 : _traceData_Renderer.allTraceEntries;
                        if (!events) {
                            throw new Error('Could not find renderer events');
                        }
                        longTask = events.find(function(e) {
                            return (e.dur || 0) > 1000000;
                        });
                        if (!longTask) {
                            throw new Error('Could not find long task');
                        }
                        info = tracksAppender.highlightedEntryInfo(longTask, 2);
                        assert.strictEqual((_info_warningElements = info.warningElements) === null || _info_warningElements === void 0 ? void 0 : _info_warningElements.length, 1);
                        warning = (_info_warningElements1 = info.warningElements) === null || _info_warningElements1 === void 0 ? void 0 : _info_warningElements1[0];
                        if (!_instanceof(warning, HTMLSpanElement)) {
                            throw new Error('Found unexpected warning');
                        }
                        assert.strictEqual(warning === null || warning === void 0 ? void 0 : warning.innerText, 'Long task took 1.30\u00A0s.');
                        return [
                            2
                        ];
                }
            });
        }));
        it('shows the correct warning for a forced recalc styles when hovered', /*#__PURE__*/ _async_to_generator(function() {
            var _info_warningElements, _info_warningElements1, events, recalcStyles, info, warning;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            initTrackAppender(this, 'large-layout-small-recalc.json.gz')
                        ];
                    case 1:
                        _state.sent();
                        events = traceData.Warnings.perWarning.get('FORCED_REFLOW') || [];
                        if (!events) {
                            throw new Error('Could not find forced reflows events');
                        }
                        recalcStyles = events[0];
                        if (!recalcStyles) {
                            throw new Error('Could not find recalc styles');
                        }
                        info = tracksAppender.highlightedEntryInfo(recalcStyles, 2);
                        assert.strictEqual((_info_warningElements = info.warningElements) === null || _info_warningElements === void 0 ? void 0 : _info_warningElements.length, 1);
                        warning = (_info_warningElements1 = info.warningElements) === null || _info_warningElements1 === void 0 ? void 0 : _info_warningElements1[0];
                        if (!_instanceof(warning, HTMLSpanElement)) {
                            throw new Error('Found unexpected warning');
                        }
                        assert.strictEqual(warning === null || warning === void 0 ? void 0 : warning.innerText, 'Forced reflow is a likely performance bottleneck.');
                        return [
                            2
                        ];
                }
            });
        }));
        it('shows the correct warning for a forced layout when hovered', /*#__PURE__*/ _async_to_generator(function() {
            var _info_warningElements, _info_warningElements1, events, layout, info, warning;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            initTrackAppender(this, 'large-layout-small-recalc.json.gz')
                        ];
                    case 1:
                        _state.sent();
                        events = traceData.Warnings.perWarning.get('FORCED_REFLOW') || [];
                        if (!events) {
                            throw new Error('Could not find forced reflows events');
                        }
                        layout = events[1];
                        if (!layout) {
                            throw new Error('Could not find layout');
                        }
                        info = tracksAppender.highlightedEntryInfo(layout, 2);
                        assert.strictEqual((_info_warningElements = info.warningElements) === null || _info_warningElements === void 0 ? void 0 : _info_warningElements.length, 1);
                        warning = (_info_warningElements1 = info.warningElements) === null || _info_warningElements1 === void 0 ? void 0 : _info_warningElements1[0];
                        if (!_instanceof(warning, HTMLSpanElement)) {
                            throw new Error('Found unexpected warning');
                        }
                        assert.strictEqual(warning === null || warning === void 0 ? void 0 : warning.innerText, 'Forced reflow is a likely performance bottleneck.');
                        return [
                            2
                        ];
                }
            });
        }));
        it('shows the correct warning for slow idle callbacks', /*#__PURE__*/ _async_to_generator(function() {
            var _traceData_Renderer, _info_warningElements, _info_warningElements1, events, idleCallback, info, warning;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            initTrackAppender(this, 'idle-callback.json.gz')
                        ];
                    case 1:
                        _state.sent();
                        events = (_traceData_Renderer = traceData.Renderer) === null || _traceData_Renderer === void 0 ? void 0 : _traceData_Renderer.allTraceEntries;
                        if (!events) {
                            throw new Error('Could not find renderer events');
                        }
                        idleCallback = events.find(function(event) {
                            var duration = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMilliSeconds(event).duration;
                            if (!_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isTraceEventFireIdleCallback(event)) {
                                return false;
                            }
                            if (duration <= event.args.data.allottedMilliseconds) {
                                false;
                            }
                            return true;
                        });
                        if (!idleCallback) {
                            throw new Error('Could not find idle callback');
                        }
                        info = tracksAppender.highlightedEntryInfo(idleCallback, 2);
                        assert.strictEqual((_info_warningElements = info.warningElements) === null || _info_warningElements === void 0 ? void 0 : _info_warningElements.length, 1);
                        warning = (_info_warningElements1 = info.warningElements) === null || _info_warningElements1 === void 0 ? void 0 : _info_warningElements1[0];
                        if (!_instanceof(warning, HTMLSpanElement)) {
                            throw new Error('Found unexpected warning');
                        }
                        assert.strictEqual(warning === null || warning === void 0 ? void 0 : warning.innerText, 'Idle callback execution extended beyond deadline by 79.56\u00A0ms');
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=CompatibilityTracksAppender.test.js.map


}),

}]);