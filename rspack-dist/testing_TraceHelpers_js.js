"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_TraceHelpers_js"], {
"./testing/TraceHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DevToolsTimelineCategory: function() { return DevToolsTimelineCategory; },
  FakeFlameChartProvider: function() { return FakeFlameChartProvider; },
  MockFlameChartDelegate: function() { return MockFlameChartDelegate; },
  defaultTraceEvent: function() { return defaultTraceEvent; },
  getAllNodes: function() { return getAllNodes; },
  getBaseTraceParseModelData: function() { return getBaseTraceParseModelData; },
  getEventOfType: function() { return getEventOfType; },
  getEventsIn: function() { return getEventsIn; },
  getMainFlameChartWithTracks: function() { return getMainFlameChartWithTracks; },
  getMainThread: function() { return getMainThread; },
  getNetworkFlameChart: function() { return getNetworkFlameChart; },
  getNodeFor: function() { return getNodeFor; },
  getRootAt: function() { return getRootAt; },
  getTree: function() { return getTree; },
  makeAsyncEndEvent: function() { return makeAsyncEndEvent; },
  makeAsyncStartEvent: function() { return makeAsyncStartEvent; },
  makeBeginEvent: function() { return makeBeginEvent; },
  makeCompleteEvent: function() { return makeCompleteEvent; },
  makeCompleteEventInMilliseconds: function() { return makeCompleteEventInMilliseconds; },
  makeEndEvent: function() { return makeEndEvent; },
  makeInstantEvent: function() { return makeInstantEvent; },
  makeMockRendererHandlerData: function() { return makeMockRendererHandlerData; },
  makeMockSamplesHandlerData: function() { return makeMockSamplesHandlerData; },
  makeProfileCall: function() { return makeProfileCall; },
  prettyPrint: function() { return prettyPrint; },
  setupIgnoreListManagerEnvironment: function() { return setupIgnoreListManagerEnvironment; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/cpu_profile/cpu_profile.js */ "./models/cpu_profile/cpu_profile.js");
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../panels/timeline/timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _TraceLoader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TraceLoader.js */ "./testing/TraceLoader.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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









// This mock class is used for instancing a flame chart in the helpers.
// Its implementation is empty because the methods aren't used by the
// helpers, only the mere definition.
var MockFlameChartDelegate = /*#__PURE__*/ function() {
    "use strict";
    function MockFlameChartDelegate() {
        _class_call_check(this, MockFlameChartDelegate);
    }
    _create_class(MockFlameChartDelegate, [
        {
            key: "windowChanged",
            value: function windowChanged(_startTime, _endTime, _animate) {}
        },
        {
            key: "updateRangeSelection",
            value: function updateRangeSelection(_startTime, _endTime) {}
        },
        {
            key: "updateSelectedGroup",
            value: function updateSelectedGroup(_flameChart, _group) {}
        }
    ]);
    return MockFlameChartDelegate;
}();
/**
 * Draws a set of tracks track in the flame chart using the new system.
 * For this to work, every track that will be rendered must have a
 * corresponding track appender registered in the
 * CompatibilityTracksAppender.
 *
 * @param traceFileName The name of the trace file to be loaded into the
 * flame chart.
 * @param trackAppenderNames A Set with the names of the tracks to be
 * rendered. For example, Set("Timings").
 * @param expanded whether the track should be expanded
 * @param trackName optional param to filter tracks by their name.
 * @returns a flame chart element and its corresponding data provider.
 */ function getMainFlameChartWithTracks(traceFileName, trackAppenderNames, expanded, trackName) {
    return _getMainFlameChartWithTracks.apply(this, arguments);
}
function _getMainFlameChartWithTracks() {
    _getMainFlameChartWithTracks = _async_to_generator(function(traceFileName, trackAppenderNames, expanded, trackName) {
        var traceData, dataProvider, tracksAppender, delegate, flameChart, minTime, maxTime;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.initializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        _TraceLoader_js__WEBPACK_IMPORTED_MODULE_8__.TraceLoader.traceEngine(/* context= */ null, traceFileName)
                    ];
                case 2:
                    traceData = _state.sent().traceData;
                    dataProvider = new _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
                    // The data provider still needs a reference to the legacy model to
                    // work properly.
                    dataProvider.setModel(traceData);
                    tracksAppender = dataProvider.compatibilityTracksAppenderInstance();
                    tracksAppender.setVisibleTracks(trackAppenderNames);
                    dataProvider.buildFromTrackAppenders({
                        filterThreadsByName: trackName,
                        expandedTracks: expanded ? trackAppenderNames : undefined
                    });
                    delegate = new MockFlameChartDelegate();
                    flameChart = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__.FlameChart.FlameChart(dataProvider, delegate);
                    minTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
                    maxTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
                    flameChart.setWindowTimes(minTime, maxTime);
                    flameChart.markAsRoot();
                    flameChart.update();
                    return [
                        2,
                        {
                            flameChart: flameChart,
                            dataProvider: dataProvider
                        }
                    ];
            }
        });
    });
    return _getMainFlameChartWithTracks.apply(this, arguments);
}
/**
 * Draws the network track in the flame chart using the legacy system.
 *
 * @param traceFileName The name of the trace file to be loaded to the flame
 * chart.
 * @param expanded if the track is expanded
 * @returns a flame chart element and its corresponding data provider.
 */ function getNetworkFlameChart(traceFileName, expanded) {
    return _getNetworkFlameChart.apply(this, arguments);
}
function _getNetworkFlameChart() {
    _getNetworkFlameChart = _async_to_generator(function(traceFileName, expanded) {
        var traceData, minTime, maxTime, dataProvider, delegate, flameChart;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.initializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        _TraceLoader_js__WEBPACK_IMPORTED_MODULE_8__.TraceLoader.traceEngine(/* context= */ null, traceFileName)
                    ];
                case 2:
                    traceData = _state.sent().traceData;
                    minTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
                    maxTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
                    dataProvider = new _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartNetworkDataProvider.TimelineFlameChartNetworkDataProvider();
                    dataProvider.setModel(traceData);
                    dataProvider.setWindowTimes(minTime, maxTime);
                    dataProvider.timelineData().groups.forEach(function(group) {
                        group.expanded = expanded;
                    });
                    delegate = new MockFlameChartDelegate();
                    flameChart = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__.FlameChart.FlameChart(dataProvider, delegate);
                    flameChart.setWindowTimes(minTime, maxTime);
                    flameChart.markAsRoot();
                    flameChart.update();
                    return [
                        2,
                        {
                            flameChart: flameChart,
                            dataProvider: dataProvider
                        }
                    ];
            }
        });
    });
    return _getNetworkFlameChart.apply(this, arguments);
}
// We create here a cross-test base trace event. It is assumed that each
// test will import this default event and copy-override properties at will.
var defaultTraceEvent = {
    name: 'process_name',
    tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(0),
    pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(0),
    ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(0),
    cat: 'test',
    ph: "M" /* TraceEngine.Types.TraceEvents.Phase.METADATA */ 
};
/**
 * Gets the tree in a thread.
 * @see RendererHandler.ts
 */ function getTree(thread) {
    var tree = thread.tree;
    if (!tree) {
        assert(false, "Couldn't get tree in thread ".concat(thread.name));
    }
    return tree;
}
/**
 * Gets the n-th root from a tree in a thread.
 * @see RendererHandler.ts
 */ function getRootAt(thread, index) {
    var tree = getTree(thread);
    var node = _to_consumable_array(tree.roots)[index];
    if (node === undefined) {
        assert(false, "Couldn't get the id of the root at index ".concat(index, " in thread ").concat(thread.name));
    }
    return node;
}
/**
 * Gets all nodes in a thread. To finish this task, we Walk through all the nodes, starting from the root node.
 */ function getAllNodes(roots) {
    var allNodes = [];
    var children = Array.from(roots);
    while(children.length > 0){
        var childNode = children.shift();
        if (childNode) {
            var _children;
            allNodes.push(childNode);
            (_children = children).push.apply(_children, _to_consumable_array(childNode.children));
        }
    }
    return allNodes;
}
/**
 * Gets the node with an id from a tree in a thread.
 * @see RendererHandler.ts
 */ function getNodeFor(thread, nodeId) {
    var tree = getTree(thread);
    function findNode(nodes, nodeId) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var node = _step.value;
                var event = node.entry;
                if (_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(event) && event.nodeId === nodeId) {
                    return node;
                }
                return findNode(node.children, nodeId);
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
        return undefined;
    }
    var node = findNode(tree.roots, nodeId);
    if (!node) {
        assert(false, "Couldn't get the node with id ".concat(nodeId, " in thread ").concat(thread.name));
    }
    return node;
}
/**
 * Gets all the `events` for the `nodes`.
 */ function getEventsIn(nodes) {
    return _to_consumable_array(nodes).flatMap(function(node) {
        return node ? node.entry : [];
    });
}
/**
 * Pretty-prints a tree.
 */ function prettyPrint(tree) {
    var predicate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
        return true;
    }, indentation = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 2, delimiter = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ' ', prefix = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : '-', newline = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : '\n', out = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : '';
    var skipped = false;
    return printNodes(tree.roots);
    function printNodes(nodes) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var node = _step.value;
                var _event_args_data;
                var event = node.entry;
                if (!predicate(node, event)) {
                    out += "".concat(!skipped ? newline : '', ".");
                    skipped = true;
                    continue;
                }
                skipped = false;
                var spacing = new Array(node.depth * indentation).fill(delimiter).join('');
                var eventType = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventDispatch(event) ? "(".concat((_event_args_data = event.args.data) === null || _event_args_data === void 0 ? void 0 : _event_args_data.type, ")") : false;
                var jsFunctionName = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(event) ? "(".concat(event.callFrame.functionName || 'anonymous', ")") : false;
                var duration = "[".concat((event.dur || 0) / 1000, "ms]");
                var info = [
                    jsFunctionName,
                    eventType,
                    duration
                ].filter(Boolean);
                out += "".concat(newline).concat(spacing).concat(prefix).concat(event.name, " ").concat(info.join(' '));
                out = printNodes(node.children);
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
        return out;
    }
}
/**
 * Builds a mock TraceEventComplete.
 */ function makeCompleteEvent(name, ts, dur) {
    var cat = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '*', pid = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, tid = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
    return {
        args: {},
        cat: cat,
        name: name,
        ph: "X" /* TraceEngine.Types.TraceEvents.Phase.COMPLETE */ ,
        pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(pid),
        tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(tid),
        ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(ts),
        dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(dur)
    };
}
function makeAsyncStartEvent(name, ts) {
    var pid = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, tid = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    return {
        args: {},
        cat: '*',
        name: name,
        ph: "b" /* TraceEngine.Types.TraceEvents.Phase.ASYNC_NESTABLE_START */ ,
        pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(pid),
        tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(tid),
        ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(ts)
    };
}
function makeAsyncEndEvent(name, ts) {
    var pid = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, tid = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    return {
        args: {},
        cat: '*',
        name: name,
        ph: "e" /* TraceEngine.Types.TraceEvents.Phase.ASYNC_NESTABLE_END */ ,
        pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(pid),
        tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(tid),
        ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(ts)
    };
}
function makeCompleteEventInMilliseconds(name, tsMillis, durMillis) {
    var cat = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '*', pid = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, tid = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
    return makeCompleteEvent(name, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Timing.millisecondsToMicroseconds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MilliSeconds(tsMillis)), _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Timing.millisecondsToMicroseconds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MilliSeconds(durMillis)), cat, pid, tid);
}
/**
 * Builds a mock TraceEventInstant.
 */ function makeInstantEvent(name, tsMicroseconds) {
    var cat = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', pid = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, tid = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, s = arguments.length > 5 && arguments[5] !== void 0 /* TraceEngine.Types.TraceEvents.TraceEventScope.THREAD */  ? arguments[5] : "t";
    return {
        args: {},
        cat: cat,
        name: name,
        ph: "I" /* TraceEngine.Types.TraceEvents.Phase.INSTANT */ ,
        pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(pid),
        tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(tid),
        ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(tsMicroseconds),
        s: s
    };
}
/**
 * Builds a mock TraceEventBegin.
 */ function makeBeginEvent(name, ts) {
    var cat = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '*', pid = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, tid = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    return {
        args: {},
        cat: cat,
        name: name,
        ph: "B" /* TraceEngine.Types.TraceEvents.Phase.BEGIN */ ,
        pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(pid),
        tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(tid),
        ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(ts)
    };
}
/**
 * Builds a mock TraceEventEnd.
 */ function makeEndEvent(name, ts) {
    var cat = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '*', pid = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, tid = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    return {
        args: {},
        cat: cat,
        name: name,
        ph: "E" /* TraceEngine.Types.TraceEvents.Phase.END */ ,
        pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(pid),
        tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(tid),
        ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(ts)
    };
}
function makeProfileCall(functionName, tsMs, durMs) {
    var pid = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(0), tid = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(0), nodeId = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, url = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : '';
    return {
        cat: '',
        name: 'ProfileCall',
        nodeId: nodeId,
        sampleIndex: 0,
        profileId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProfileID('fake-profile-id'),
        ph: "X" /* TraceEngine.Types.TraceEvents.Phase.COMPLETE */ ,
        pid: pid,
        tid: tid,
        ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(tsMs),
        dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(durMs),
        selfTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(0),
        callFrame: {
            functionName: functionName,
            scriptId: '',
            url: url,
            lineNumber: -1,
            columnNumber: -1
        },
        args: {}
    };
}
var DevToolsTimelineCategory = 'disabled-by-default-devtools.timeline';
/**
 * Mocks an object compatible with the return type of the
 * RendererHandler using only an array of ordered entries.
 */ function makeMockRendererHandlerData(entries) {
    var _TraceEngine_Helpers_TreeHelpers_treify = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.TreeHelpers.treify(entries, {
        filter: {
            has: function() {
                return true;
            }
        }
    }), tree = _TraceEngine_Helpers_TreeHelpers_treify.tree, entryToNode = _TraceEngine_Helpers_TreeHelpers_treify.entryToNode;
    var mockThread = {
        tree: tree,
        name: 'thread',
        entries: entries,
        profileCalls: entries.filter(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall)
    };
    var mockProcess = {
        url: 'url',
        isOnMainFrame: true,
        threads: new Map([
            [
                1,
                mockThread
            ]
        ])
    };
    var renderereEvents = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var entry = _step.value;
            if (_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventRendererEvent(entry)) {
                renderereEvents.push(entry);
            }
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
        processes: new Map([
            [
                1,
                mockProcess
            ]
        ]),
        compositorTileWorkers: new Map(),
        entryToNode: entryToNode,
        allTraceEntries: renderereEvents
    };
}
/**
 * Mocks an object compatible with the return type of the
 * SamplesHandler using only an array of ordered profile calls.
 */ function makeMockSamplesHandlerData(profileCalls) {
    var _profileCalls_at, _profileCalls_at1;
    var _TraceEngine_Helpers_TreeHelpers_treify = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.TreeHelpers.treify(profileCalls, {
        filter: {
            has: function() {
                return true;
            }
        }
    }), tree = _TraceEngine_Helpers_TreeHelpers_treify.tree, entryToNode = _TraceEngine_Helpers_TreeHelpers_treify.entryToNode;
    var profile = {
        nodes: [],
        startTime: ((_profileCalls_at = profileCalls.at(0)) === null || _profileCalls_at === void 0 ? void 0 : _profileCalls_at.ts) || _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(0),
        endTime: ((_profileCalls_at1 = profileCalls.at(-1)) === null || _profileCalls_at1 === void 0 ? void 0 : _profileCalls_at1.ts) || _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(10e5),
        samples: [],
        timeDeltas: []
    };
    var nodesIds = new Map();
    var lastTimestamp = profile.startTime;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = profileCalls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var profileCall = _step.value;
            var _profile_samples, _profile_timeDeltas;
            var node = nodesIds.get(profileCall.nodeId);
            if (!node) {
                node = {
                    id: profileCall.nodeId,
                    callFrame: profileCall.callFrame
                };
                profile.nodes.push(node);
                nodesIds.set(profileCall.nodeId, node);
            }
            (_profile_samples = profile.samples) === null || _profile_samples === void 0 ? void 0 : _profile_samples.push(node.id);
            var timeDelta = profileCall.ts - lastTimestamp;
            (_profile_timeDeltas = profile.timeDeltas) === null || _profile_timeDeltas === void 0 ? void 0 : _profile_timeDeltas.push(timeDelta);
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
    var profileData = {
        rawProfile: profile,
        parsedProfile: new _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_2__.CPUProfileDataModel.CPUProfileDataModel(profile),
        profileCalls: profileCalls,
        profileTree: tree,
        profileId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProfileID('fake-profile-id')
    };
    var profilesInThread = new Map([
        [
            1,
            profileData
        ]
    ]);
    return {
        profilesInProcess: new Map([
            [
                1,
                profilesInThread
            ]
        ]),
        entryToNode: entryToNode
    };
}
var FakeFlameChartProvider = /*#__PURE__*/ function() {
    "use strict";
    function FakeFlameChartProvider() {
        _class_call_check(this, FakeFlameChartProvider);
    }
    _create_class(FakeFlameChartProvider, [
        {
            key: "minimumBoundary",
            value: function minimumBoundary() {
                return 0;
            }
        },
        {
            key: "hasTrackConfigurationMode",
            value: function hasTrackConfigurationMode() {
                return false;
            }
        },
        {
            key: "totalTime",
            value: function totalTime() {
                return 100;
            }
        },
        {
            key: "formatValue",
            value: function formatValue(value) {
                return value.toString();
            }
        },
        {
            key: "maxStackDepth",
            value: function maxStackDepth() {
                return 3;
            }
        },
        {
            key: "prepareHighlightedEntryInfo",
            value: function prepareHighlightedEntryInfo(_entryIndex) {
                return null;
            }
        },
        {
            key: "canJumpToEntry",
            value: function canJumpToEntry(_entryIndex) {
                return false;
            }
        },
        {
            key: "entryTitle",
            value: function entryTitle(entryIndex) {
                return "Entry ".concat(entryIndex);
            }
        },
        {
            key: "entryFont",
            value: function entryFont(_entryIndex) {
                return null;
            }
        },
        {
            key: "entryColor",
            value: function entryColor(entryIndex) {
                return [
                    'lightblue',
                    'lightpink',
                    'yellow',
                    'lightgray',
                    'lightgreen',
                    'lightsalmon',
                    'orange',
                    'pink'
                ][entryIndex % 8];
            }
        },
        {
            key: "decorateEntry",
            value: function decorateEntry() {
                return false;
            }
        },
        {
            key: "forceDecoration",
            value: function forceDecoration(_entryIndex) {
                return false;
            }
        },
        {
            key: "textColor",
            value: function textColor(_entryIndex) {
                return 'black';
            }
        },
        {
            key: "timelineData",
            value: function timelineData() {
                return _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__.FlameChart.FlameChartTimelineData.createEmpty();
            }
        }
    ]);
    return FakeFlameChartProvider;
}();
function getMainThread(data) {
    var mainThread = null;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = data.processes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), process = _step_value[1];
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = process.threads[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var _step_value1 = _sliced_to_array(_step1.value, 2), thread = _step_value1[1];
                    if (thread.name === 'CrRendererMain') {
                        mainThread = thread;
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
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
    if (!mainThread) {
        throw new Error('Could not find main thread.');
    }
    return mainThread;
}
function getBaseTraceParseModelData() {
    var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return _object_spread({
        Animations: [],
        LayoutShifts: {
            clusters: [],
            sessionMaxScore: 0,
            clsWindowID: 0,
            prePaintEvents: [],
            layoutInvalidationEvents: [],
            styleRecalcInvalidationEvents: [],
            backendNodeIds: [],
            scoreRecords: []
        },
        Meta: {
            traceBounds: {
                min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(0),
                max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(100),
                range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(100)
            },
            browserProcessId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(-1),
            browserThreadId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(-1),
            gpuProcessId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(-1),
            gpuThreadId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(-1),
            threadsInProcess: new Map(),
            navigationsByFrameId: new Map(),
            navigationsByNavigationId: new Map(),
            mainFrameId: '',
            mainFrameURL: '',
            rendererProcessesByFrame: new Map(),
            topLevelRendererIds: new Set(),
            frameByProcessId: new Map(),
            mainFrameNavigations: []
        },
        Renderer: {
            processes: new Map(),
            compositorTileWorkers: new Map(),
            entryToNode: new Map(),
            allTraceEntries: []
        },
        Screenshots: [],
        Samples: {
            profiles: new Map(),
            processes: new Map()
        },
        PageLoadMetrics: {
            metricScoresByFrameId: new Map(),
            lcpEventNodeIdToDOMNodeMap: new Map()
        },
        UserInteractions: {
            allEvents: [],
            interactionEvents: []
        },
        NetworkRequests: {
            byOrigin: new Map(),
            byTime: []
        },
        GPU: {
            mainGPUThreadTasks: [],
            errorsByUseCase: new Map()
        },
        UserTimings: {
            timings: []
        },
        LargestImagePaint: new Map(),
        LargestTextPaint: new Map()
    }, overrides);
}
/**
 * A helper that will query the given array of events and find the first event
 * matching the predicate. It will also assert that a match is found, which
 * saves the need to do that for every test.
 */ function getEventOfType(events, predicate) {
    var match = events.find(predicate);
    if (!match) {
        throw new Error('Failed to find matching event of type.');
    }
    return match;
}
/**
 * The Performance Panel is integrated with the IgnoreListManager so in tests
 * that render a flame chart or a track appender, it needs to be setup to avoid
 * errors.
 */ function setupIgnoreListManagerEnvironment() {
    var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance({
        forceNew: true
    });
    var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance({
        forceNew: true
    });
    var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
    var debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
        forceNew: true,
        resourceMapping: resourceMapping,
        targetManager: targetManager
    });
    var ignoreListManager = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance({
        forceNew: true,
        debuggerWorkspaceBinding: debuggerWorkspaceBinding
    });
    return {
        ignoreListManager: ignoreListManager
    };
} //# sourceMappingURL=TraceHelpers.js.map


}),

}]);