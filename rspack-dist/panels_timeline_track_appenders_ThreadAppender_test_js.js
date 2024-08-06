"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_track_appenders_ThreadAppender_test_js"], {
"./panels/timeline/track_appenders/ThreadAppender.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../timeline.js */ "./panels/timeline/timeline.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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










function initTrackAppender(flameChartData, traceParsedData, entryData, entryTypeByLevel) {
    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_6__.setupIgnoreListManagerEnvironment)();
    var compatibilityTracksAppender = new _timeline_js__WEBPACK_IMPORTED_MODULE_9__.CompatibilityTracksAppender.CompatibilityTracksAppender(flameChartData, traceParsedData, entryData, entryTypeByLevel);
    return compatibilityTracksAppender.threadAppenders();
}
function renderThreadAppendersFromTrace(context, trace) {
    return _renderThreadAppendersFromTrace.apply(this, arguments);
}
function _renderThreadAppendersFromTrace() {
    _renderThreadAppendersFromTrace = _async_to_generator(function(context, trace) {
        var entryTypeByLevel, entryData, flameChartData, traceData, threadAppenders, level, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, appender;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    entryTypeByLevel = [];
                    entryData = [];
                    flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_8__.FlameChart.FlameChartTimelineData.createEmpty();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_7__.TraceLoader.traceEngine(context, trace)
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    threadAppenders = initTrackAppender(flameChartData, traceData, entryData, entryTypeByLevel);
                    level = 0;
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = threadAppenders[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            appender = _step.value;
                            level = appender.appendTrackAtLevel(level);
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
                        2,
                        {
                            entryTypeByLevel: entryTypeByLevel,
                            traceParsedData: traceData,
                            flameChartData: flameChartData,
                            threadAppenders: threadAppenders,
                            entryData: entryData
                        }
                    ];
            }
        });
    });
    return _renderThreadAppendersFromTrace.apply(this, arguments);
}
function renderThreadAppendersFromParsedData(traceParseData) {
    var entryTypeByLevel = [];
    var entryData = [];
    var flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_8__.FlameChart.FlameChartTimelineData.createEmpty();
    var threadAppenders = initTrackAppender(flameChartData, traceParseData, entryData, entryTypeByLevel);
    var level = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = threadAppenders[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var appender = _step.value;
            level = appender.appendTrackAtLevel(level);
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
    return {
        entryTypeByLevel: entryTypeByLevel,
        flameChartData: flameChartData,
        threadAppenders: threadAppenders,
        entryData: entryData
    };
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.describeWithEnvironment)('ThreadAppender', function() {
    it('creates a thread appender for each thread in a trace', /*#__PURE__*/ _async_to_generator(function() {
        var threadAppenders, expectedAppenderNames;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'simple-js-program.json.gz')
                    ];
                case 1:
                    threadAppenders = _state.sent().threadAppenders;
                    expectedAppenderNames = [
                        'Thread',
                        'Thread',
                        'Thread'
                    ];
                    assert.deepStrictEqual(threadAppenders.map(function(g) {
                        return g.appenderName;
                    }), expectedAppenderNames);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders tracks for threads in correct order', /*#__PURE__*/ _async_to_generator(function() {
        var flameChartData;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    flameChartData = _state.sent().flameChartData;
                    assert.strictEqual(flameChartData.groups[0].name, 'Main — http://localhost:5000/');
                    assert.strictEqual(flameChartData.groups[1].name, 'Frame — https://www.example.com/');
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders tracks for threads in correct order when a process url is about:blank', /*#__PURE__*/ _async_to_generator(function() {
        var flameChartData, groupNames;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'about-blank-first.json.gz')
                    ];
                case 1:
                    flameChartData = _state.sent().flameChartData;
                    groupNames = flameChartData.groups.map(function(g) {
                        return g.name.replace(/(new-tab-page\/).*/, '$1');
                    });
                    assert.deepStrictEqual(groupNames.slice(0, 3), [
                        'Frame — chrome-untrusted://new-tab-page/',
                        'Main — chrome://new-tab-page/',
                        'Main — about:blank'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('marks all levels used by the track with the TrackAppender type', /*#__PURE__*/ _async_to_generator(function() {
        var entryTypeByLevel, execptedLevelTypes;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'simple-js-program.json.gz')
                    ];
                case 1:
                    entryTypeByLevel = _state.sent().entryTypeByLevel;
                    // This includes all tracks rendered by the ThreadAppender.
                    execptedLevelTypes = [
                        "TrackAppender" /* Timeline.TimelineFlameChartDataProvider.EntryType.TrackAppender */ ,
                        "TrackAppender" /* Timeline.TimelineFlameChartDataProvider.EntryType.TrackAppender */ ,
                        "TrackAppender" /* Timeline.TimelineFlameChartDataProvider.EntryType.TrackAppender */ ,
                        "TrackAppender" /* Timeline.TimelineFlameChartDataProvider.EntryType.TrackAppender */ ,
                        "TrackAppender" /* Timeline.TimelineFlameChartDataProvider.EntryType.TrackAppender */ ,
                        "TrackAppender" /* Timeline.TimelineFlameChartDataProvider.EntryType.TrackAppender */ ,
                        "TrackAppender" /* Timeline.TimelineFlameChartDataProvider.EntryType.TrackAppender */ ,
                        "TrackAppender" /* Timeline.TimelineFlameChartDataProvider.EntryType.TrackAppender */ ,
                        "TrackAppender" /* Timeline.TimelineFlameChartDataProvider.EntryType.TrackAppender */ ,
                        "TrackAppender" /* Timeline.TimelineFlameChartDataProvider.EntryType.TrackAppender */ 
                    ];
                    assert.deepStrictEqual(entryTypeByLevel, execptedLevelTypes);
                    return [
                        2
                    ];
            }
        });
    }));
    it('creates a flamechart groups for track headers and titles', /*#__PURE__*/ _async_to_generator(function() {
        var flameChartData, expectedTrackNames;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'cls-single-frame.json.gz')
                    ];
                case 1:
                    flameChartData = _state.sent().flameChartData;
                    expectedTrackNames = [
                        'Main — https://output.jsbin.com/zajamil/quiet',
                        'Raster',
                        'Rasterizer Thread 1',
                        'Rasterizer Thread 2',
                        'Thread Pool',
                        'Thread Pool Worker 1'
                    ];
                    assert.deepStrictEqual(flameChartData.groups.map(function(g) {
                        return g.name;
                    }), expectedTrackNames);
                    return [
                        2
                    ];
            }
        });
    }));
    it('builds flamechart groups for nested tracks correctly', /*#__PURE__*/ _async_to_generator(function() {
        var flameChartData;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'cls-single-frame.json.gz')
                    ];
                case 1:
                    flameChartData = _state.sent().flameChartData;
                    // This group corresponds to the header that wraps the raster tracks
                    // together. It isn't selectable and isn't nested
                    assert.strictEqual(flameChartData.groups[1].name, 'Raster');
                    assert.strictEqual(flameChartData.groups[1].selectable, false);
                    assert.strictEqual(flameChartData.groups[1].style.nestingLevel, 0);
                    // These groups correspond to the raster tracks titles, or the
                    // individual raster tracks themselves. They are selectable and
                    // nested
                    assert.strictEqual(flameChartData.groups[2].name, 'Rasterizer Thread 1');
                    assert.strictEqual(flameChartData.groups[2].selectable, true);
                    assert.strictEqual(flameChartData.groups[2].style.nestingLevel, 1);
                    assert.strictEqual(flameChartData.groups[3].name, 'Rasterizer Thread 2');
                    assert.strictEqual(flameChartData.groups[3].selectable, true);
                    assert.strictEqual(flameChartData.groups[3].style.nestingLevel, 1);
                    return [
                        2
                    ];
            }
        });
    }));
    it('assigns correct names to multiple types of threads', /*#__PURE__*/ _async_to_generator(function() {
        var flameChartData, expectedTrackNames;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'simple-js-program.json.gz')
                    ];
                case 1:
                    flameChartData = _state.sent().flameChartData;
                    expectedTrackNames = [
                        'Main — https://www.google.com',
                        'Thread Pool',
                        'Thread Pool Worker 1',
                        'Thread Pool Worker 2'
                    ];
                    assert.deepStrictEqual(flameChartData.groups.map(function(g) {
                        return g.name;
                    }), expectedTrackNames);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this = this;
    it('adds thread IDs onto tracks when the trace is generic', /*#__PURE__*/ _async_to_generator(function() {
        var flameChartData;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(_this, 'generic-about-tracing.json.gz')
                    ];
                case 1:
                    flameChartData = _state.sent().flameChartData;
                    // This trace has a lot of tracks, so just test one.
                    assert.isTrue(flameChartData.groups.map(function(g) {
                        return g.name;
                    }).includes('CrBrowserMain (1213787)'));
                    return [
                        2
                    ];
            }
        });
    }));
    var _this1 = this;
    it('assigns the right color for events when the trace is generic', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, threadAppenders, traceParsedData, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(_this1, 'generic-about-tracing.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), threadAppenders = _ref.threadAppenders, traceParsedData = _ref.traceParsedData;
                    event = traceParsedData.Renderer.allTraceEntries.find(function(entry) {
                        return entry.name === 'ThreadControllerImpl::RunTask';
                    });
                    if (!event) {
                        throw new Error('Could not find event.');
                    }
                    assert.strictEqual(threadAppenders[0].colorForEvent(event), 'hsl(278, 40%, 70%)');
                    return [
                        2
                    ];
            }
        });
    }));
    it('assigns correct names to worker threads', /*#__PURE__*/ _async_to_generator(function() {
        var flameChartData, expectedTrackNames;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'two-workers.json.gz')
                    ];
                case 1:
                    flameChartData = _state.sent().flameChartData;
                    expectedTrackNames = [
                        'Main — https://chromedevtools.github.io/performance-stories/two-workers/index.html',
                        'Worker — https://chromedevtools.github.io/performance-stories/two-workers/fib-worker.js',
                        'Worker — https://chromedevtools.github.io/performance-stories/two-workers/fib-worker.js',
                        'Thread Pool',
                        'Thread Pool Worker 1',
                        'Thread Pool Worker 2'
                    ];
                    assert.deepStrictEqual(flameChartData.groups.map(function(g) {
                        return g.name;
                    }), expectedTrackNames);
                    return [
                        2
                    ];
            }
        });
    }));
    it('returns the correct title for a renderer event', /*#__PURE__*/ _async_to_generator(function() {
        var _traceParsedData_Renderer, _ref, threadAppenders, traceParsedData, events, title;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'simple-js-program.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), threadAppenders = _ref.threadAppenders, traceParsedData = _ref.traceParsedData;
                    events = (_traceParsedData_Renderer = traceParsedData.Renderer) === null || _traceParsedData_Renderer === void 0 ? void 0 : _traceParsedData_Renderer.allTraceEntries;
                    if (!events) {
                        throw new Error('Could not find renderer events');
                    }
                    title = threadAppenders[0].titleForEvent(events[0]);
                    assert.strictEqual(title, 'Task');
                    return [
                        2
                    ];
            }
        });
    }));
    it('adds the type for EventDispatch events to the title', /*#__PURE__*/ _async_to_generator(function() {
        var _traceParsedData_Renderer, _ref, threadAppenders, traceParsedData, events, clickEvent, title;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'one-second-interaction.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), threadAppenders = _ref.threadAppenders, traceParsedData = _ref.traceParsedData;
                    events = (_traceParsedData_Renderer = traceParsedData.Renderer) === null || _traceParsedData_Renderer === void 0 ? void 0 : _traceParsedData_Renderer.allTraceEntries;
                    if (!events) {
                        throw new Error('Could not find renderer events');
                    }
                    clickEvent = events.find(function(event) {
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventDispatch(event) && event.args.data.type === 'click';
                    });
                    if (!clickEvent) {
                        throw new Error('Could not find expected click event');
                    }
                    title = threadAppenders[0].titleForEvent(clickEvent);
                    assert.strictEqual(title, 'Event: click');
                    return [
                        2
                    ];
            }
        });
    }));
    it('returns the correct title for a profile call', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, threadAppenders, traceParsedData, rendererHandler, _rendererHandler_processes_values, process, _process_threads_values, thread, profileCalls, anonymousCall, n;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'simple-js-program.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), threadAppenders = _ref.threadAppenders, traceParsedData = _ref.traceParsedData;
                    rendererHandler = traceParsedData.Renderer;
                    if (!rendererHandler) {
                        throw new Error('RendererHandler is undefined');
                    }
                    _rendererHandler_processes_values = _sliced_to_array(rendererHandler.processes.values(), 1), process = _rendererHandler_processes_values[0];
                    _process_threads_values = _sliced_to_array(process.threads.values(), 1), thread = _process_threads_values[0];
                    profileCalls = thread.entries.filter(function(entry) {
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(entry);
                    });
                    if (!profileCalls) {
                        throw new Error('Could not find renderer events');
                    }
                    anonymousCall = threadAppenders[0].titleForEvent(profileCalls[0]);
                    assert.strictEqual(anonymousCall, '(anonymous)');
                    n = threadAppenders[0].titleForEvent(profileCalls[7]);
                    assert.strictEqual(n, 'n');
                    return [
                        2
                    ];
            }
        });
    }));
    it('will use the function name from the CPUProfile if it has been set', /*#__PURE__*/ _async_to_generator(function() {
        var _Samples_profilesInProcess_get_get, _Samples_profilesInProcess_get, _ref, threadAppenders, traceParsedData, Renderer, Samples, _Renderer_processes_values, process, _process_threads_values, thread, profileCalls, entry, cpuProfileNode, anonymousCall, originalName;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'simple-js-program.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), threadAppenders = _ref.threadAppenders, traceParsedData = _ref.traceParsedData;
                    Renderer = traceParsedData.Renderer, Samples = traceParsedData.Samples;
                    _Renderer_processes_values = _sliced_to_array(Renderer.processes.values(), 1), process = _Renderer_processes_values[0];
                    _process_threads_values = _sliced_to_array(process.threads.values(), 1), thread = _process_threads_values[0];
                    profileCalls = thread.entries.filter(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall);
                    if (!profileCalls || profileCalls.length === 0) {
                        throw new Error('Could not find renderer events');
                    }
                    entry = profileCalls[0];
                    cpuProfileNode = (_Samples_profilesInProcess_get = Samples.profilesInProcess.get(entry.pid)) === null || _Samples_profilesInProcess_get === void 0 ? void 0 : (_Samples_profilesInProcess_get_get = _Samples_profilesInProcess_get.get(entry.tid)) === null || _Samples_profilesInProcess_get_get === void 0 ? void 0 : _Samples_profilesInProcess_get_get.parsedProfile.nodeById(entry.nodeId);
                    if (!cpuProfileNode) {
                        throw new Error('Could not find CPU Profile Node');
                    }
                    anonymousCall = threadAppenders[0].titleForEvent(entry);
                    assert.strictEqual(anonymousCall, '(anonymous)');
                    originalName = cpuProfileNode.functionName;
                    cpuProfileNode.setFunctionName('new-resolved-function-name');
                    assert.strictEqual(threadAppenders[0].titleForEvent(entry), 'new-resolved-function-name');
                    // Reset the value for future tests.
                    cpuProfileNode.setFunctionName(originalName);
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows the correct title for a trace event when hovered', /*#__PURE__*/ _async_to_generator(function() {
        var _traceParsedData_Renderer, _ref, threadAppenders, traceParsedData, events, info;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'simple-js-program.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), threadAppenders = _ref.threadAppenders, traceParsedData = _ref.traceParsedData;
                    events = (_traceParsedData_Renderer = traceParsedData.Renderer) === null || _traceParsedData_Renderer === void 0 ? void 0 : _traceParsedData_Renderer.allTraceEntries;
                    if (!events) {
                        throw new Error('Could not find renderer events');
                    }
                    info = threadAppenders[0].highlightedEntryInfo(events[0]);
                    assert.strictEqual(info.title, 'Task');
                    assert.strictEqual(info.formattedTime, '0.27\u00A0ms');
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows self time only for events with self time above the threshold when hovered', /*#__PURE__*/ _async_to_generator(function() {
        var _traceParsedData_Renderer, _ref, threadAppenders, traceParsedData, events, infoForShortEvent, longTask, infoForLongEvent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'simple-js-program.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), threadAppenders = _ref.threadAppenders, traceParsedData = _ref.traceParsedData;
                    events = (_traceParsedData_Renderer = traceParsedData.Renderer) === null || _traceParsedData_Renderer === void 0 ? void 0 : _traceParsedData_Renderer.allTraceEntries;
                    if (!events) {
                        throw new Error('Could not find renderer events');
                    }
                    infoForShortEvent = threadAppenders[0].highlightedEntryInfo(events[0]);
                    assert.strictEqual(infoForShortEvent.formattedTime, '0.27\u00A0ms');
                    longTask = events.find(function(e) {
                        return (e.dur || 0) > 1000000;
                    });
                    if (!longTask) {
                        throw new Error('Could not find long task');
                    }
                    infoForLongEvent = threadAppenders[0].highlightedEntryInfo(longTask);
                    assert.strictEqual(infoForLongEvent.formattedTime, '1.30\u00A0s (self 47\u00A0μs)');
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows the correct title for a ParseHTML event', /*#__PURE__*/ _async_to_generator(function() {
        var _traceParsedData_Renderer, _ref, threadAppenders, traceParsedData, events, infoForShortEvent, longTask, infoForLongEvent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'simple-js-program.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), threadAppenders = _ref.threadAppenders, traceParsedData = _ref.traceParsedData;
                    events = (_traceParsedData_Renderer = traceParsedData.Renderer) === null || _traceParsedData_Renderer === void 0 ? void 0 : _traceParsedData_Renderer.allTraceEntries;
                    if (!events) {
                        throw new Error('Could not find renderer events');
                    }
                    infoForShortEvent = threadAppenders[0].highlightedEntryInfo(events[0]);
                    assert.strictEqual(infoForShortEvent.formattedTime, '0.27\u00A0ms');
                    longTask = events.find(function(e) {
                        return (e.dur || 0) > 1000000;
                    });
                    if (!longTask) {
                        throw new Error('Could not find long task');
                    }
                    infoForLongEvent = threadAppenders[0].highlightedEntryInfo(longTask);
                    assert.strictEqual(infoForLongEvent.formattedTime, '1.30\u00A0s (self 47\u00A0μs)');
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows the correct title for a profile call when hovered', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, threadAppenders, traceParsedData, rendererHandler, _rendererHandler_processes_values, process, _process_threads_values, thread, profileCalls, info;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'simple-js-program.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), threadAppenders = _ref.threadAppenders, traceParsedData = _ref.traceParsedData;
                    rendererHandler = traceParsedData.Renderer;
                    if (!rendererHandler) {
                        throw new Error('RendererHandler is undefined');
                    }
                    _rendererHandler_processes_values = _sliced_to_array(rendererHandler.processes.values(), 1), process = _rendererHandler_processes_values[0];
                    _process_threads_values = _sliced_to_array(process.threads.values(), 1), thread = _process_threads_values[0];
                    profileCalls = thread.entries.filter(function(entry) {
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(entry);
                    });
                    if (!profileCalls) {
                        throw new Error('Could not find renderer events');
                    }
                    info = threadAppenders[0].highlightedEntryInfo(profileCalls[0]);
                    assert.strictEqual(info.title, '(anonymous)');
                    assert.strictEqual(info.formattedTime, '15\u00A0μs');
                    return [
                        2
                    ];
            }
        });
    }));
    it('candy-stripes long tasks', /*#__PURE__*/ _async_to_generator(function() {
        var _traceParsedData_Renderer, _ref, traceParsedData, flameChartData, entryData, events, longTask, entryIndex, decorationsForEntry;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'simple-js-program.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), traceParsedData = _ref.traceParsedData, flameChartData = _ref.flameChartData, entryData = _ref.entryData;
                    events = (_traceParsedData_Renderer = traceParsedData.Renderer) === null || _traceParsedData_Renderer === void 0 ? void 0 : _traceParsedData_Renderer.allTraceEntries;
                    if (!events) {
                        throw new Error('Could not find renderer events');
                    }
                    longTask = events.find(function(e) {
                        return (e.dur || 0) > 1000000;
                    });
                    if (!longTask) {
                        throw new Error('Could not find long task');
                    }
                    entryIndex = entryData.indexOf(longTask);
                    decorationsForEntry = flameChartData.entryDecorations[entryIndex];
                    assert.deepEqual(decorationsForEntry, [
                        {
                            type: "WARNING_TRIANGLE" /* PerfUI.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ 
                        },
                        {
                            type: "CANDY" /* PerfUI.FlameChart.FlameChartDecorationType.CANDY */ ,
                            'startAtTime': _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(50000)
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not candy-stripe tasks below the long task threshold', /*#__PURE__*/ _async_to_generator(function() {
        var _traceParsedData_Renderer, _ref, traceParsedData, flameChartData, entryData, events, entryIndex, decorationsForEntry;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'simple-js-program.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), traceParsedData = _ref.traceParsedData, flameChartData = _ref.flameChartData, entryData = _ref.entryData;
                    events = (_traceParsedData_Renderer = traceParsedData.Renderer) === null || _traceParsedData_Renderer === void 0 ? void 0 : _traceParsedData_Renderer.allTraceEntries;
                    if (!events) {
                        throw new Error('Could not find renderer events');
                    }
                    entryIndex = entryData.indexOf(events[0]);
                    decorationsForEntry = flameChartData.entryDecorations[entryIndex];
                    assert.isUndefined(decorationsForEntry);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not append a track if there are no visible events on it', /*#__PURE__*/ _async_to_generator(function() {
        var flameChartData, expectedTrackNames;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderThreadAppendersFromTrace(this, 'one-second-interaction.json.gz')
                    ];
                case 1:
                    flameChartData = _state.sent().flameChartData;
                    expectedTrackNames = [
                        'Main — https://chromedevtools.github.io/performance-stories/long-interaction/index.html?x=40',
                        'Thread Pool',
                        // There are multiple ThreadPoolForegroundWorker threads present in
                        // the trace, but only one of these has trace events we deem as
                        // "visible".
                        'Thread Pool Worker 1',
                        // This second "worker" is the ThreadPoolServiceThread. TODO: perhaps hide ThreadPoolServiceThread completely?
                        'Thread Pool Worker 2'
                    ];
                    assert.deepStrictEqual(flameChartData.groups.map(function(g) {
                        return g.name;
                    }), expectedTrackNames);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('ignore listing', function() {
        var ignoreListManager;
        beforeEach(function() {
            var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance({
                forceNew: true
            });
            var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance({
                forceNew: true
            });
            var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
            var debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
                forceNew: true,
                resourceMapping: resourceMapping,
                targetManager: targetManager
            });
            ignoreListManager = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance({
                forceNew: true,
                debuggerWorkspaceBinding: debuggerWorkspaceBinding
            });
        });
        afterEach(function() {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.removeInstance();
            _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.removeInstance();
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.removeInstance();
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.removeInstance();
        });
        it('removes entries from the data that match the ignored URL', /*#__PURE__*/ _async_to_generator(function() {
            var initialTimelineData, initialFlamechartData, eventCountBeforeIgnoreList, SCRIPT_TO_IGNORE, finalTimelineData, finalFlamechartData, eventCountAfterIgnoreList, finalTimelineData2, finalFlamechartData2, eventCountAfterIgnoreList2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderThreadAppendersFromTrace(this, 'react-hello-world.json.gz')
                        ];
                    case 1:
                        initialTimelineData = _state.sent();
                        initialFlamechartData = initialTimelineData.flameChartData;
                        eventCountBeforeIgnoreList = initialFlamechartData.entryStartTimes.length;
                        SCRIPT_TO_IGNORE = 'https://unpkg.com/react@18.2.0/umd/react.development.js';
                        // Clear the data provider cache and add the React script to the ignore list.
                        ignoreListManager.ignoreListURL(SCRIPT_TO_IGNORE);
                        return [
                            4,
                            renderThreadAppendersFromTrace(this, 'react-hello-world.json.gz')
                        ];
                    case 2:
                        finalTimelineData = _state.sent();
                        finalFlamechartData = finalTimelineData.flameChartData;
                        eventCountAfterIgnoreList = finalFlamechartData.entryStartTimes.length;
                        // Ensure that the amount of events we show on the flame chart is less
                        // than before, now we have added the React URL to the ignore list.
                        assert.isBelow(eventCountAfterIgnoreList, eventCountBeforeIgnoreList);
                        // // Clear the data provider cache and unignore the script again
                        ignoreListManager.unIgnoreListURL(SCRIPT_TO_IGNORE);
                        return [
                            4,
                            renderThreadAppendersFromTrace(this, 'react-hello-world.json.gz')
                        ];
                    case 3:
                        finalTimelineData2 = _state.sent();
                        finalFlamechartData2 = finalTimelineData2.flameChartData;
                        eventCountAfterIgnoreList2 = finalFlamechartData2.entryStartTimes.length;
                        // // Ensure that now we have un-ignored the URL that we get the full set of events again.
                        assert.strictEqual(eventCountAfterIgnoreList2, eventCountBeforeIgnoreList);
                        return [
                            2
                        ];
                }
            });
        }));
        it('appends a tree that contains ignore listed entries correctly', /*#__PURE__*/ _async_to_generator(function() {
            var SCRIPT_TO_IGNORE, callFrameA, callFrameB, callFrameC, callFrameD, callFrameE, callFrameF, allEntries, rendererData, workersData, warningsData, mockTraceParseData, _renderThreadAppendersFromParsedData, entryData, flameChartData, threadAppenders, entryDataNames;
            return _ts_generator(this, function(_state) {
                SCRIPT_TO_IGNORE = 'https://some-framework/bundled.js';
                // Create the following hierarchy with profile calls. Events marked
                // with \\\\ represent ignored listed events.
                // |----------A-----------|
                // |\\\\\B\\\\\||----F----|
                // |\\C\\||\D\|
                // |--E--|
                //
                // Applying ignore listing in the appender, should yield the
                // following flame chart:
                // |----------A-----------|
                // |\\\\\B\\\\||----F----|
                // |--E--|
                callFrameA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_6__.makeProfileCall)('A', 100, 200);
                callFrameB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_6__.makeProfileCall)('IgnoreListedB', 100, 100);
                callFrameB.callFrame.url = SCRIPT_TO_IGNORE;
                callFrameC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_6__.makeProfileCall)('IgnoreListedC', 100, 50);
                callFrameC.callFrame.url = SCRIPT_TO_IGNORE;
                callFrameD = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_6__.makeProfileCall)('IgnoreListedD', 151, 49);
                callFrameD.callFrame.url = SCRIPT_TO_IGNORE;
                callFrameE = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_6__.makeProfileCall)('E', 100, 25);
                callFrameF = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_6__.makeProfileCall)('F', 200, 100);
                allEntries = [
                    callFrameA,
                    callFrameB,
                    callFrameC,
                    callFrameE,
                    callFrameD,
                    callFrameF
                ];
                rendererData = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_6__.makeMockRendererHandlerData)(allEntries);
                workersData = {
                    workerSessionIdEvents: [],
                    workerIdByThread: new Map(),
                    workerURLById: new Map()
                };
                warningsData = {
                    perWarning: new Map(),
                    perEvent: new Map()
                };
                // This only includes data used in the thread appender
                mockTraceParseData = {
                    Renderer: rendererData,
                    Workers: workersData,
                    Warnings: warningsData,
                    AuctionWorklets: {
                        worklets: new Map()
                    },
                    Meta: {
                        traceIsGeneric: false
                    }
                };
                // Add the script to ignore list and then append the flamechart data
                ignoreListManager.ignoreListURL(SCRIPT_TO_IGNORE);
                _renderThreadAppendersFromParsedData = renderThreadAppendersFromParsedData(mockTraceParseData), entryData = _renderThreadAppendersFromParsedData.entryData, flameChartData = _renderThreadAppendersFromParsedData.flameChartData, threadAppenders = _renderThreadAppendersFromParsedData.threadAppenders;
                entryDataNames = entryData.map(function(entry) {
                    var regularEvent = _timeline_js__WEBPACK_IMPORTED_MODULE_9__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider.timelineEntryIsTraceEvent(entry);
                    if (!regularEvent) {
                        return 'Unknown type';
                    }
                    if (_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(entry)) {
                        return entry.callFrame.functionName;
                    }
                    return entry.name;
                });
                assert.deepEqual(entryDataNames, [
                    'A',
                    'IgnoreListedB',
                    'E',
                    'F'
                ]);
                assert.deepEqual(flameChartData.entryLevels, [
                    0,
                    1,
                    2,
                    1
                ]);
                assert.deepEqual(flameChartData.entryStartTimes, [
                    0.1,
                    0.1,
                    0.1,
                    0.2
                ]);
                assert.deepEqual(flameChartData.entryTotalTimes, [
                    0.2,
                    0.1,
                    0.025,
                    0.1
                ]);
                assert.strictEqual(threadAppenders.length, 1);
                assert.strictEqual(threadAppenders[0].titleForEvent(callFrameB), 'On ignore list');
                return [
                    2
                ];
            });
        }));
    });
    describe('showAllEvents', function() {
        beforeEach(function() {
            var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance({
                forceNew: true
            });
            var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance({
                forceNew: true
            });
            var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
            var debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
                forceNew: true,
                resourceMapping: resourceMapping,
                targetManager: targetManager
            });
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance({
                forceNew: true,
                debuggerWorkspaceBinding: debuggerWorkspaceBinding
            });
        });
        afterEach(function() {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.removeInstance();
            _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.removeInstance();
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.removeInstance();
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.removeInstance();
        });
        it('appends unknown events to the flame chart data only when the experiment is enabled', /*#__PURE__*/ _async_to_generator(function() {
            var fileName, bizarreName, initialTimelineData, unknownEventIndex, finalTimelineData, finalFlamechartData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        fileName = 'react-hello-world.json.gz';
                        bizarreName = 'BackForwardCacheBufferLimitTracker::DidRemoveFrameOrWorkerFromBackForwardCache';
                        return [
                            4,
                            renderThreadAppendersFromTrace(this, fileName)
                        ];
                    case 1:
                        initialTimelineData = _state.sent();
                        unknownEventIndex = initialTimelineData.entryData.findIndex(function(entry) {
                            var event = entry;
                            return event.name === bizarreName;
                        });
                        assert.strictEqual(unknownEventIndex, -1);
                        // Now enable the experiment and make sure the event is appended to the timeline data this time
                        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.enableForTest('timeline-show-all-events');
                        return [
                            4,
                            renderThreadAppendersFromTrace(this, fileName)
                        ];
                    case 2:
                        finalTimelineData = _state.sent();
                        finalFlamechartData = finalTimelineData.flameChartData;
                        unknownEventIndex = finalTimelineData.entryData.findIndex(function(entry) {
                            var event = entry;
                            return event.name === bizarreName;
                        });
                        assert.isAbove(unknownEventIndex, -1);
                        assert.exists(finalFlamechartData.entryStartTimes);
                        assert.exists(finalFlamechartData.entryTotalTimes);
                        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.disableForTest('timeline-show-all-events');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('AuctionWorklet threads', function() {
        // We have to set these up because the ThreadAppender includes logic for
        // ignoring events that relies on the IgnoreListManager.
        beforeEach(function() {
            var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance({
                forceNew: true
            });
            var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance({
                forceNew: true
            });
            var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
            var debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
                forceNew: true,
                resourceMapping: resourceMapping,
                targetManager: targetManager
            });
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance({
                forceNew: true,
                debuggerWorkspaceBinding: debuggerWorkspaceBinding
            });
        });
        afterEach(function() {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.removeInstance();
            _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.removeInstance();
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.removeInstance();
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.removeInstance();
        });
        it('finds all the worklet threads', /*#__PURE__*/ _async_to_generator(function() {
            var threadAppenders, workletAppenders;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderThreadAppendersFromTrace(this, 'fenced-frame-fledge.json.gz')
                        ];
                    case 1:
                        threadAppenders = _state.sent().threadAppenders;
                        workletAppenders = threadAppenders.filter(function(threadAppender) {
                            return threadAppender.trackName().includes('Worklet');
                        });
                        assert.lengthOf(workletAppenders, 6);
                        return [
                            2
                        ];
                }
            });
        }));
        it('sets the title correctly for an Auction Worklet service', /*#__PURE__*/ _async_to_generator(function() {
            var UTILITY_THREAD_PID, UTILITY_THREAD_TID, threadAppenders, appender;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        UTILITY_THREAD_PID = 776435;
                        UTILITY_THREAD_TID = 1;
                        return [
                            4,
                            renderThreadAppendersFromTrace(this, 'fenced-frame-fledge.json.gz')
                        ];
                    case 1:
                        threadAppenders = _state.sent().threadAppenders;
                        appender = threadAppenders.find(function(threadAppender) {
                            return threadAppender.processId() === UTILITY_THREAD_PID && threadAppender.threadId() === UTILITY_THREAD_TID;
                        });
                        if (!appender) {
                            throw new Error('Could not find expected thread appender');
                        }
                        assert.strictEqual(appender.trackName(), 'Auction Worklet Service — https://ssp-fledge-demo.glitch.me');
                        return [
                            2
                        ];
                }
            });
        }));
        it('sets the title correctly for an Auction Worklet seller service', /*#__PURE__*/ _async_to_generator(function() {
            var SELLER_THREAD_PID, SELLER_THREAD_TID, threadAppenders, appender;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        SELLER_THREAD_PID = 776435;
                        SELLER_THREAD_TID = 6;
                        return [
                            4,
                            renderThreadAppendersFromTrace(this, 'fenced-frame-fledge.json.gz')
                        ];
                    case 1:
                        threadAppenders = _state.sent().threadAppenders;
                        appender = threadAppenders.find(function(threadAppender) {
                            return threadAppender.processId() === SELLER_THREAD_PID && threadAppender.threadId() === SELLER_THREAD_TID;
                        });
                        if (!appender) {
                            throw new Error('Could not find expected thread appender');
                        }
                        assert.strictEqual(appender.trackName(), 'Seller Worklet — https://ssp-fledge-demo.glitch.me');
                        return [
                            2
                        ];
                }
            });
        }));
        it('sets the title correctly for an Auction Worklet bidder service', /*#__PURE__*/ _async_to_generator(function() {
            var BIDDER_THREAD_PID, BIDDER_THREAD_TID, threadAppenders, appender;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        BIDDER_THREAD_PID = 776436;
                        BIDDER_THREAD_TID = 6;
                        return [
                            4,
                            renderThreadAppendersFromTrace(this, 'fenced-frame-fledge.json.gz')
                        ];
                    case 1:
                        threadAppenders = _state.sent().threadAppenders;
                        appender = threadAppenders.find(function(threadAppender) {
                            return threadAppender.processId() === BIDDER_THREAD_PID && threadAppender.threadId() === BIDDER_THREAD_TID;
                        });
                        if (!appender) {
                            throw new Error('Could not find expected thread appender');
                        }
                        assert.strictEqual(appender.trackName(), 'Bidder Worklet — https://dsp-fledge-demo.glitch.me');
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=ThreadAppender.test.js.map


}),

}]);