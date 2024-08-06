"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_timeline_model_TimelineProfileTree_test_js"], {
"./models/timeline_model/TimelineProfileTree.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/timeline/timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../timeline_model/timeline_model.js */ "./models/timeline_model/timeline_model.js");
/* harmony import */var _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../trace/trace.js */ "./models/trace/trace.js");
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('TimelineProfileTree', function() {
    describe('TopDownRootNode', function() {
        it('builds the root node and its children properly from an event tree', function() {
            // This builds the following tree:
            // |------------------ROOT---------------------------|
            // |-----A----| |-----B-----| |----------C---------|
            var eventA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event A', 0, 40000);
            var eventB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event B', 50000, 50000);
            var eventC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event C', 150000, 100000);
            var events = [
                eventA,
                eventB,
                eventC
            ];
            var root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.TopDownRootNode(events, [], _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(0), _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(200000));
            var children = root.children();
            assert.strictEqual(children.size, 3);
            var nodesIterator = children.values();
            assert.strictEqual(nodesIterator.next().value.event, eventA);
            assert.strictEqual(nodesIterator.next().value.event, eventB);
            assert.strictEqual(nodesIterator.next().value.event, eventC);
        });
        it('builds a top-down tree from an event tree with multiple levels 1', function() {
            // This builds the following tree:
            // |------------ROOT-----------|
            // |-----A----| |-----B-----|
            // |-C-| |-D-|
            var eventA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event A', 0, 40000);
            var eventC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event C', 0, 10000);
            var eventD = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event D', 10000, 10000);
            var eventB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event B', 50000, 50000);
            // Events must be in order.
            var events = [
                eventA,
                eventC,
                eventD,
                eventB
            ];
            var root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.TopDownRootNode(events, [], _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(0), _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(200000));
            var rootChildren = root.children();
            assert.strictEqual(rootChildren.size, 2);
            var rootChildIterator = rootChildren.values();
            var nodeA = rootChildIterator.next().value;
            assert.strictEqual(nodeA.event, eventA);
            assert.strictEqual(rootChildIterator.next().value.event, eventB);
            var nodeAChildren = nodeA.children();
            assert.strictEqual(nodeAChildren.size, 2);
            var nodeAChildIterator = nodeAChildren.values();
            assert.strictEqual(nodeAChildIterator.next().value.event, eventC);
            assert.strictEqual(nodeAChildIterator.next().value.event, eventD);
        });
        it('builds a top-down tree from an event tree with multiple levels 2', function() {
            // This builds the following tree:
            // |------------ROOT-----------|
            // |-----A----| |-----B-----|
            //               |-C-| |-D-|
            var eventA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event A', 0, 40000);
            var eventB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event B', 50000, 50000);
            var eventC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event C', 50000, 10000);
            var eventD = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event D', 60000, 10000);
            // Events must be in order.
            var events = [
                eventA,
                eventB,
                eventC,
                eventD
            ];
            var root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.TopDownRootNode(events, [], _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(0), _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(200000));
            var rootChildren = root.children();
            assert.strictEqual(rootChildren.size, 2);
            var rootChildIterator = rootChildren.values();
            assert.strictEqual(rootChildIterator.next().value.event, eventA);
            var nodeB = rootChildIterator.next().value;
            assert.strictEqual(nodeB.event, eventB);
            var nodeBChildren = nodeB.children();
            assert.strictEqual(nodeBChildren.size, 2);
            var nodeBChildIterator = nodeBChildren.values();
            assert.strictEqual(nodeBChildIterator.next().value.event, eventC);
            assert.strictEqual(nodeBChildIterator.next().value.event, eventD);
        });
        it('calculates the self time for each node in an event tree correctly', function() {
            // This builds the following tree:
            // |------------ROOT-----------|
            // |-----A----| |-------B------|
            //               |-C-| |--D--|
            //                     |-E-|
            var eventA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event A', 0, 40000);
            var eventB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event B', 50000, 50000);
            var eventC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event C', 50000, 10000);
            var eventD = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event D', 60000, 10000);
            var eventE = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event E', 60000, 5000);
            // Events must be in order.
            var events = [
                eventA,
                eventB,
                eventC,
                eventD,
                eventE
            ];
            var root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.TopDownRootNode(events, [], _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(0), _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(200000));
            var rootChildren = root.children();
            assert.strictEqual(rootChildren.size, 2);
            var rootChildIterator = rootChildren.values();
            assert.strictEqual(rootChildIterator.next().value.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(eventA.dur));
            var nodeB = rootChildIterator.next().value;
            var nodeBSelfTime = _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MicroSeconds(eventB.dur - eventC.dur - eventD.dur);
            assert.strictEqual(nodeB.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(nodeBSelfTime));
            var nodeBChildren = nodeB.children();
            assert.strictEqual(nodeBChildren.size, 2);
            var nodeBChildIterator = nodeBChildren.values();
            assert.strictEqual(nodeBChildIterator.next().value.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(eventC.dur));
            var nodeD = nodeBChildIterator.next().value;
            var nodeDSelfTime = _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MicroSeconds(eventD.dur - eventE.dur);
            assert.strictEqual(nodeD.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(nodeDSelfTime));
            var nodeDChildren = nodeD.children();
            assert.strictEqual(nodeDChildren.size, 1);
            var nodeDChildIterator = nodeDChildren.values();
            var nodeE = nodeDChildIterator.next().value;
            assert.strictEqual(nodeE.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(eventE.dur));
        });
    });
    describe('BottomUpRootNode', function() {
        it('builds the root node and its children properly from an event tree', function() {
            // This builds the following tree:
            // |------------------ROOT---------------------------|
            // |-----A----| |-----B-----| |----------C---------|
            var eventA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event A', 0, 40000);
            var eventB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event B', 50000, 50000);
            var eventC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event C', 150000, 100000);
            var events = [
                eventA,
                eventB,
                eventC
            ];
            var root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.TopDownRootNode(events, [], _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(0), _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(200000));
            var children = root.children();
            assert.strictEqual(children.size, 3);
            var nodesIterator = children.values();
            assert.strictEqual(nodesIterator.next().value.event, eventA);
            assert.strictEqual(nodesIterator.next().value.event, eventB);
            assert.strictEqual(nodesIterator.next().value.event, eventC);
        });
        it('builds a bottom up tree from an event tree with multiple levels 1', function() {
            // This builds the following tree:
            // |------------ROOT-----------|
            // |-C-||-D-|
            // |-----A----| |-----B-----|
            var eventA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event A', 0, 40000);
            var eventC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event C', 0, 10000);
            var eventD = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event D', 10000, 10000);
            var eventB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event B', 50000, 50000);
            // Events must be in order.
            var events = [
                eventA,
                eventC,
                eventD,
                eventB
            ];
            var root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.BottomUpRootNode(events, new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineModelFilter.TimelineInvisibleEventsFilter([]), [], _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(0), _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(200000), null);
            var rootChildren = root.children();
            assert.strictEqual(rootChildren.size, 4);
            var rootChildIterator = rootChildren.values();
            var nodeC = rootChildIterator.next().value;
            assert.strictEqual(nodeC.event, eventC);
            var nodeD = rootChildIterator.next().value;
            assert.strictEqual(nodeD.event, eventD);
            var nodeA = rootChildIterator.next().value;
            assert.strictEqual(nodeA.event, eventA);
            var nodeB = rootChildIterator.next().value;
            assert.strictEqual(nodeB.event, eventB);
            var nodeCChildren = nodeC.children();
            assert.strictEqual(nodeCChildren.size, 1);
            var nodeCChildIterator = nodeCChildren.values();
            assert.strictEqual(nodeCChildIterator.next().value.event, eventA);
            var nodeDChildren = nodeC.children();
            assert.strictEqual(nodeDChildren.size, 1);
            var nodeDChildIterator = nodeDChildren.values();
            assert.strictEqual(nodeDChildIterator.next().value.event, eventA);
            var nodeAChildren = nodeA.children();
            assert.strictEqual(nodeAChildren.size, 0);
            var nodeBChildren = nodeB.children();
            assert.strictEqual(nodeBChildren.size, 0);
        });
        it('builds a tree from an event tree with multiple levels 2', function() {
            // This builds the following tree:
            // |------------ROOT-----------|
            //              |-C-||-D-|
            // |-----A----| |-----B-----|
            var eventA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event A', 0, 40000);
            var eventB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event B', 50000, 50000);
            var eventC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event C', 50000, 10000);
            var eventD = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event D', 60000, 10000);
            // Events must be in order.
            var events = [
                eventA,
                eventB,
                eventC,
                eventD
            ];
            var root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.BottomUpRootNode(events, new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineModelFilter.TimelineInvisibleEventsFilter([]), [], _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(0), _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(200000), null);
            var rootChildren = root.children();
            assert.strictEqual(rootChildren.size, 4);
            var rootChildIterator = rootChildren.values();
            var nodeA = rootChildIterator.next().value;
            assert.strictEqual(nodeA.event, eventA);
            var nodeC = rootChildIterator.next().value;
            assert.strictEqual(nodeC.event, eventC);
            var nodeD = rootChildIterator.next().value;
            assert.strictEqual(nodeD.event, eventD);
            var nodeB = rootChildIterator.next().value;
            assert.strictEqual(nodeB.event, eventB);
            var nodeCChildren = nodeC.children();
            assert.strictEqual(nodeCChildren.size, 1);
            var nodeCChildIterator = nodeCChildren.values();
            assert.strictEqual(nodeCChildIterator.next().value.event, eventB);
            var nodeDChildren = nodeC.children();
            assert.strictEqual(nodeDChildren.size, 1);
            var nodeDChildIterator = nodeDChildren.values();
            assert.strictEqual(nodeDChildIterator.next().value.event, eventB);
            var nodeAChildren = nodeA.children();
            assert.strictEqual(nodeAChildren.size, 0);
            var nodeBChildren = nodeB.children();
            assert.strictEqual(nodeBChildren.size, 0);
        });
        it('calculates the self time for each node in an event tree correctly', function() {
            // This builds the following tree:
            // |------------ROOT-----------|
            //                   |-E-|
            //              |-C-||--D--|
            // |-----A----| |-------B------|
            var eventA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event A', 0, 40000);
            var eventB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event B', 50000, 50000);
            var eventC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event C', 50000, 10000);
            var eventD = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event D', 60000, 10000);
            var eventE = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event E', 60000, 5000);
            // Events must be in order.
            var events = [
                eventA,
                eventB,
                eventC,
                eventD,
                eventE
            ];
            var root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.BottomUpRootNode(events, new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineModelFilter.TimelineInvisibleEventsFilter([]), [], _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(0), _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(200000), null);
            var rootChildren = root.children();
            assert.strictEqual(rootChildren.size, 5);
            var rootChildIterator = rootChildren.values();
            assert.strictEqual(rootChildIterator.next().value.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(eventA.dur));
            var nodeC = rootChildIterator.next().value;
            assert.strictEqual(nodeC.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(eventC.dur));
            var nodeE = rootChildIterator.next().value;
            assert.strictEqual(nodeE.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(eventE.dur));
            var nodeD = rootChildIterator.next().value;
            var nodeDSelfTime = _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MicroSeconds(eventD.dur - eventE.dur);
            assert.strictEqual(nodeD.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(nodeDSelfTime));
            var nodeB = rootChildIterator.next().value;
            var nodeBSelfTime = _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MicroSeconds(eventB.dur - eventC.dur - eventD.dur);
            assert.strictEqual(nodeB.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(nodeBSelfTime));
        });
        it('correctly keeps ProfileCall nodes and uses them to build up the tree', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, mainThread, bounds, textFilter, modelFilters, root, rootChildren, values, profileCalls, functionNames;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'mainWasm_profile.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainThread)(traceData.Renderer);
                        bounds = _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.traceWindowMilliSeconds(traceData.Meta.traceBounds);
                        // Replicate the filters as they would be when renderering in the actual panel.
                        textFilter = new _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_0__.TimelineFilters.TimelineRegExp();
                        modelFilters = [
                            _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_0__.TimelineUIUtils.TimelineUIUtils.visibleEventsFilter(),
                            new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineModelFilter.ExclusiveNameFilter([
                                "RunTask" /* TraceEngine.Types.TraceEvents.KnownEventName.RunTask */ 
                            ])
                        ];
                        root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.BottomUpRootNode(mainThread.entries, textFilter, modelFilters, bounds.min, bounds.max, null);
                        rootChildren = root.children();
                        values = Array.from(rootChildren.values());
                        // Find the list of profile calls that have been calculated as the top level rows in the Bottom Up table.
                        profileCalls = values.filter(function(node) {
                            return node.event && _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.TraceEvents.isProfileCall(node.event) && node.event.callFrame.functionName.length > 0;
                        }).map(function(n) {
                            return n.event;
                        });
                        functionNames = profileCalls.map(function(entry) {
                            return entry.callFrame.functionName;
                        });
                        assert.deepEqual(functionNames, [
                            'fetch',
                            'getTime',
                            'wasm-to-js::l-imports.getTime',
                            'mainWasm',
                            'js-to-wasm::i'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('generateEventID', function() {
        it('generates the right ID for new engine profile call events', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, mainThread, profileCallEntry, eventId;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'react-hello-world.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainThread)(traceData.Renderer);
                        profileCallEntry = mainThread.entries.find(function(entry) {
                            return _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'performConcurrentWorkOnRoot';
                        });
                        if (!profileCallEntry) {
                            throw new Error('Could not find a profile call');
                        }
                        eventId = _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.generateEventID(profileCallEntry);
                        assert.strictEqual(eventId, 'f:performConcurrentWorkOnRoot@7');
                        return [
                            2
                        ];
                }
            });
        }));
        it('generates the right ID for new engine native profile call events', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, mainThread, profileCallEntry, eventId;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'invalid-animation-events.json.gz', _object_spread_props(_object_spread({}, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Configuration.defaults()), {
                                includeRuntimeCallStats: true
                            }))
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainThread)(traceData.Renderer);
                        profileCallEntry = mainThread.entries.find(function(entry) {
                            return _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.url === 'native V8Runtime';
                        });
                        if (!profileCallEntry) {
                            throw new Error('Could not find a profile call');
                        }
                        eventId = _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.generateEventID(profileCallEntry);
                        assert.strictEqual(eventId, 'f:Compile@0');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('eventStackFrame', function() {
        it('extracts the stackFrame for ProfileCalls', /*#__PURE__*/ _async_to_generator(function() {
            var event, stackFrame;
            return _ts_generator(this, function(_state) {
                event = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeProfileCall)('somefunc', 100, 10, undefined, undefined, undefined, 'https://x.com/file.mjs');
                stackFrame = _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.eventStackFrame(event);
                assert.strictEqual(stackFrame.functionName, 'somefunc');
                assert.strictEqual(stackFrame.url, 'https://x.com/file.mjs');
                return [
                    2
                ];
            });
        }));
    });
}); //# sourceMappingURL=TimelineProfileTree.test.js.map


}),

}]);