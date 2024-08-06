"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_TimelineTreeView_test_js"], {
"./panels/timeline/TimelineTreeView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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




var MockViewDelegate = /*#__PURE__*/ function() {
    "use strict";
    function MockViewDelegate() {
        _class_call_check(this, MockViewDelegate);
        _define_property(this, "element", document.createElement('div'));
    }
    _create_class(MockViewDelegate, [
        {
            key: "select",
            value: function select(_selection) {}
        },
        {
            key: "selectEntryAtTime",
            value: function selectEntryAtTime(_events, _time) {}
        },
        {
            key: "highlightEvent",
            value: function highlightEvent(_event) {}
        }
    ]);
    return MockViewDelegate;
}();
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('TimelineTreeView', function() {
    var mockViewDelegate = new MockViewDelegate();
    describe('EventsTimelineTreeView', function() {
        afterEach(function() {
            // One of the unit tests changes this, so ensure it gets set back after the test.
            _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineUIUtils.TimelineUIUtils.categories().scripting.hidden = false;
        });
        it('Creates a tree from nestable async events', /*#__PURE__*/ _async_to_generator(function() {
            var _firstNode_event, _secondNode_event, _bottomNode_event, traceData, eventTreeView, consoleTimings, tree, topNodesIterator, firstNode, secondNode, bottomNode;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'sync-like-timings.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        eventTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.EventsTimelineTreeView.EventsTimelineTreeView(mockViewDelegate);
                        consoleTimings = _to_consumable_array(traceData.UserTimings.consoleTimings);
                        eventTreeView.setModelWithEvents(consoleTimings, traceData);
                        tree = eventTreeView.buildTree();
                        topNodesIterator = tree.children().values();
                        firstNode = topNodesIterator.next().value;
                        assert.strictEqual((_firstNode_event = firstNode.event) === null || _firstNode_event === void 0 ? void 0 : _firstNode_event.name, 'first console time');
                        secondNode = topNodesIterator.next().value;
                        assert.strictEqual((_secondNode_event = secondNode.event) === null || _secondNode_event === void 0 ? void 0 : _secondNode_event.name, 'third console time');
                        bottomNode = firstNode.children().values().next().value;
                        assert.strictEqual((_bottomNode_event = bottomNode.event) === null || _bottomNode_event === void 0 ? void 0 : _bottomNode_event.name, 'second console time');
                        return [
                            2
                        ];
                }
            });
        }));
        it('shows instant events as nodes', /*#__PURE__*/ _async_to_generator(function() {
            var _firstNode_event, _secondNode_event, traceData, eventTreeView, consoleTimings, tree, topNodesIterator, firstNode, secondNode;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'user-timings.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        eventTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.EventsTimelineTreeView.EventsTimelineTreeView(mockViewDelegate);
                        consoleTimings = _to_consumable_array(traceData.UserTimings.performanceMarks);
                        eventTreeView.setModelWithEvents(consoleTimings, traceData);
                        tree = eventTreeView.buildTree();
                        topNodesIterator = tree.children().values();
                        firstNode = topNodesIterator.next().value;
                        assert.strictEqual((_firstNode_event = firstNode.event) === null || _firstNode_event === void 0 ? void 0 : _firstNode_event.name, 'mark1');
                        secondNode = topNodesIterator.next().value;
                        assert.strictEqual((_secondNode_event = secondNode.event) === null || _secondNode_event === void 0 ? void 0 : _secondNode_event.name, 'mark3');
                        return [
                            2
                        ];
                }
            });
        }));
        it('can filter events by text', /*#__PURE__*/ _async_to_generator(function() {
            var _eventTreeView_textFilterUI, traceData, eventTreeView, consoleTimings, tree, topLevelChildren, newTopLevelChildren;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'user-timings.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        eventTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.EventsTimelineTreeView.EventsTimelineTreeView(mockViewDelegate);
                        consoleTimings = _to_consumable_array(traceData.UserTimings.performanceMarks);
                        eventTreeView.setModelWithEvents(consoleTimings, traceData);
                        tree = eventTreeView.buildTree();
                        topLevelChildren = Array.from(tree.children().values(), function(childNode) {
                            var _childNode_event;
                            return ((_childNode_event = childNode.event) === null || _childNode_event === void 0 ? void 0 : _childNode_event.name) || 'NO_EVENT_FOR_NODE';
                        });
                        assert.deepEqual(topLevelChildren, [
                            'mark1',
                            'mark3'
                        ]);
                        (_eventTreeView_textFilterUI = eventTreeView.textFilterUI) === null || _eventTreeView_textFilterUI === void 0 ? void 0 : _eventTreeView_textFilterUI.setValue('mark1', true);
                        tree = eventTreeView.buildTree();
                        newTopLevelChildren = Array.from(tree.children().values(), function(childNode) {
                            var _childNode_event;
                            return ((_childNode_event = childNode.event) === null || _childNode_event === void 0 ? void 0 : _childNode_event.name) || 'NO_EVENT_FOR_NODE';
                        });
                        assert.deepEqual(newTopLevelChildren, [
                            'mark1'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can filter and hide entire categories', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, eventTreeView, performanceTimingEvents, tree, topLevelChildren, newTopLevelChildren;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'user-timings.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        eventTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.EventsTimelineTreeView.EventsTimelineTreeView(mockViewDelegate);
                        performanceTimingEvents = _to_consumable_array(traceData.UserTimings.performanceMeasures);
                        eventTreeView.setModelWithEvents(performanceTimingEvents, traceData);
                        tree = eventTreeView.buildTree();
                        topLevelChildren = Array.from(tree.children().values(), function(childNode) {
                            var _childNode_event;
                            return ((_childNode_event = childNode.event) === null || _childNode_event === void 0 ? void 0 : _childNode_event.name) || 'NO_EVENT_FOR_NODE';
                        });
                        assert.deepEqual(topLevelChildren, [
                            'first measure',
                            'third measure'
                        ]);
                        // Now make the scripting category hidden and tell the treeview to re-render.
                        _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineUIUtils.TimelineUIUtils.categories().scripting.hidden = true;
                        eventTreeView.refreshTree();
                        tree = eventTreeView.buildTree();
                        newTopLevelChildren = Array.from(tree.children().values(), function(childNode) {
                            var _childNode_event;
                            return ((_childNode_event = childNode.event) === null || _childNode_event === void 0 ? void 0 : _childNode_event.name) || 'NO_EVENT_FOR_NODE';
                        });
                        assert.deepEqual(newTopLevelChildren, []);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('BottomUpTimelineTreeView', function() {
        it('Creates a bottom up tree from nestable events', /*#__PURE__*/ _async_to_generator(function() {
            var _firstNode_event, _secondNode_event, _thirdNode_event, _childNode_event, traceData, bottomUpTreeView, consoleTimings, startTime, endTime, tree, topNodesIterator, firstNode, secondNode, thirdNode, childNode;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'sync-like-timings.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        bottomUpTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.BottomUpTimelineTreeView();
                        consoleTimings = _to_consumable_array(traceData.UserTimings.consoleTimings);
                        startTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
                        endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
                        bottomUpTreeView.setRange(startTime, endTime);
                        bottomUpTreeView.setModelWithEvents(consoleTimings, traceData);
                        tree = bottomUpTreeView.buildTree();
                        topNodesIterator = tree.children().values();
                        firstNode = topNodesIterator.next().value;
                        assert.strictEqual((_firstNode_event = firstNode.event) === null || _firstNode_event === void 0 ? void 0 : _firstNode_event.name, 'second console time');
                        secondNode = topNodesIterator.next().value;
                        assert.strictEqual((_secondNode_event = secondNode.event) === null || _secondNode_event === void 0 ? void 0 : _secondNode_event.name, 'first console time');
                        thirdNode = topNodesIterator.next().value;
                        assert.strictEqual((_thirdNode_event = thirdNode.event) === null || _thirdNode_event === void 0 ? void 0 : _thirdNode_event.name, 'third console time');
                        childNode = firstNode.children().values().next().value;
                        assert.strictEqual((_childNode_event = childNode.event) === null || _childNode_event === void 0 ? void 0 : _childNode_event.name, 'first console time');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('CallTreeTimelineTreeView', function() {
        it('Creates a call tree from nestable events', /*#__PURE__*/ _async_to_generator(function() {
            var _firstNode_event, _secondNode_event, _childNode_event, traceData, callTreeView, consoleTimings, startTime, endTime, tree, topNodesIterator, firstNode, secondNode, childNode;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'sync-like-timings.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        callTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.CallTreeTimelineTreeView();
                        consoleTimings = _to_consumable_array(traceData.UserTimings.consoleTimings);
                        startTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
                        endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
                        callTreeView.setRange(startTime, endTime);
                        callTreeView.setModelWithEvents(consoleTimings, traceData);
                        tree = callTreeView.buildTree();
                        topNodesIterator = tree.children().values();
                        firstNode = topNodesIterator.next().value;
                        assert.strictEqual((_firstNode_event = firstNode.event) === null || _firstNode_event === void 0 ? void 0 : _firstNode_event.name, 'first console time');
                        secondNode = topNodesIterator.next().value;
                        assert.strictEqual((_secondNode_event = secondNode.event) === null || _secondNode_event === void 0 ? void 0 : _secondNode_event.name, 'third console time');
                        childNode = firstNode.children().values().next().value;
                        assert.strictEqual((_childNode_event = childNode.event) === null || _childNode_event === void 0 ? void 0 : _childNode_event.name, 'second console time');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('event grouping', function() {
        it('groups events by category in the Call Tree view', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, callTreeView, consoleTimings, startTime, endTime, tree, treeEntries, groupEntry, nodeName, node, children;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'sync-like-timings.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        callTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.CallTreeTimelineTreeView();
                        consoleTimings = _to_consumable_array(traceData.UserTimings.consoleTimings);
                        startTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
                        endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
                        callTreeView.setRange(startTime, endTime);
                        callTreeView.setGroupBySettingForTests(_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.AggregatedTimelineTreeView.GroupBy.Category);
                        callTreeView.setModelWithEvents(consoleTimings, traceData);
                        tree = callTreeView.buildTree();
                        treeEntries = tree.children().entries();
                        groupEntry = treeEntries.next();
                        nodeName = groupEntry.value[0];
                        node = groupEntry.value[1];
                        assert.strictEqual(nodeName, 'scripting');
                        assert.strictEqual(callTreeView.displayInfoForGroupNode(node).color, 'rgb(250 204 21 / 100%)');
                        assert.isTrue(node.isGroupNode());
                        children = node.children().values();
                        assert.strictEqual(children.next().value.event.name, 'first console time');
                        assert.strictEqual(children.next().value.event.name, 'third console time');
                        return [
                            2
                        ];
                }
            });
        }));
        it('groups events by category in the Bottom up Tree view', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, callTreeView, consoleTimings, startTime, endTime, tree, treeEntries, groupEntry, nodeName, node, children;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'sync-like-timings.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        callTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.BottomUpTimelineTreeView();
                        consoleTimings = _to_consumable_array(traceData.UserTimings.consoleTimings);
                        startTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
                        endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
                        callTreeView.setRange(startTime, endTime);
                        callTreeView.setGroupBySettingForTests(_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.AggregatedTimelineTreeView.GroupBy.Category);
                        callTreeView.setModelWithEvents(consoleTimings, traceData);
                        tree = callTreeView.buildTree();
                        treeEntries = tree.children().entries();
                        groupEntry = treeEntries.next();
                        nodeName = groupEntry.value[0];
                        node = groupEntry.value[1];
                        assert.strictEqual(nodeName, 'scripting');
                        assert.strictEqual(callTreeView.displayInfoForGroupNode(node).color, 'rgb(250 204 21 / 100%)');
                        assert.isTrue(node.isGroupNode());
                        children = node.children().values();
                        assert.strictEqual(children.next().value.event.name, 'second console time');
                        assert.strictEqual(children.next().value.event.name, 'first console time');
                        assert.strictEqual(children.next().value.event.name, 'third console time');
                        return [
                            2
                        ];
                }
            });
        }));
        it('can group entries by domain', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, callTreeView, startTime, endTime, tree, topLevelGroupNodes;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        callTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.BottomUpTimelineTreeView();
                        startTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
                        endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
                        callTreeView.setRange(startTime, endTime);
                        callTreeView.setGroupBySettingForTests(_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.AggregatedTimelineTreeView.GroupBy.Domain);
                        callTreeView.setModelWithEvents(traceData.Renderer.allTraceEntries, traceData);
                        tree = callTreeView.buildTree();
                        topLevelGroupNodes = Array.from(tree.children().entries());
                        assert.deepEqual(topLevelGroupNodes.map(function(node) {
                            return node[0];
                        }), [
                            '',
                            'web.dev',
                            'extensions::',
                            'chrome-extension://noondiphcddnnabmjcihcjfbhfklnnep',
                            'imgix.net',
                            'googletagmanager.com',
                            'google-analytics.com',
                            'web.app'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can group entries by frame', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, callTreeView, startTime, endTime, tree, topLevelGroupNodes;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        callTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.BottomUpTimelineTreeView();
                        startTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
                        endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
                        callTreeView.setRange(startTime, endTime);
                        callTreeView.setGroupBySettingForTests(_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.AggregatedTimelineTreeView.GroupBy.Frame);
                        callTreeView.setModelWithEvents(traceData.Renderer.allTraceEntries, traceData);
                        tree = callTreeView.buildTree();
                        topLevelGroupNodes = Array.from(tree.children().entries());
                        assert.deepEqual(topLevelGroupNodes.map(function(node) {
                            return node[0];
                        }), [
                            '25D2F12F1818C70B5BD4325CC9ACD8FF',
                            '1094B71EC09B8BD3DD48B77D091D6024'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can group entries by URL', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, callTreeView, startTime, endTime, tree, topLevelGroupNodes;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        callTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.BottomUpTimelineTreeView();
                        startTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
                        endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
                        callTreeView.setRange(startTime, endTime);
                        callTreeView.setGroupBySettingForTests(_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.AggregatedTimelineTreeView.GroupBy.URL);
                        callTreeView.setModelWithEvents(traceData.Renderer.allTraceEntries, traceData);
                        tree = callTreeView.buildTree();
                        topLevelGroupNodes = Array.from(tree.children().entries());
                        assert.deepEqual(topLevelGroupNodes.map(function(node) {
                            return node[0];
                        }), [
                            '',
                            'https://web.dev/',
                            'extensions::SafeBuiltins',
                            'chrome-extension://noondiphcddnnabmjcihcjfbhfklnnep/content_script_compiled.js',
                            'https://web-dev.imgix.net/image/kheDArv5csY6rvQUJDbWRscckLr1/4i7JstVZvgTFk9dxCe4a.svg',
                            'https://web.dev/js/home.js?v=73b0d143',
                            'https://web.dev/js/actions-f0eb5c8e.js',
                            'https://web.dev/js/app.js?v=fedf5fbe',
                            'https://web.dev/js/index-f45448ab.js',
                            'https://web.dev/js/index-7e29abb6.js',
                            'https://www.googletagmanager.com/gtm.js?id=GTM-MZWCJPP',
                            'https://www.google-analytics.com/analytics.js',
                            'https://www.googletagmanager.com/gtag/js?id=G-18JR3Q8PJ8&l=dataLayer&cx=c',
                            'https://www.google-analytics.com/j/collect?v=1&_v=j101&a=68725886&t=event&ni=1&_s=1&dl=https%3A%2F%2Fweb.dev%2F&ul=en-gb&de=UTF-8&dt=web.dev&sd=24-bit&sr=3360x1890&vp=1665x846&je=0&ec=Web%20Vitals&ea=FCP&el=v3-1696581005645-6472407333688&ev=129&_u=QACAAEABAAAAACAAIg~&jid=&gjid=&cid=1874137241.1685438100&tid=UA-126406676-2&_gid=656288571.1696581004&_slc=1&gtm=45He3a40n81MZWCJPP&cd5=15&cd6=navigate&cd7=light&cd8=dom-content-loaded&cd9=8&z=54974500',
                            'https://shared-storage-demo-content-producer.web.app/paa/scripts/private-aggregation-test.js',
                            'https://shared-storage-demo-content-producer.web.app/paa/scripts/private-aggregation-test.html',
                            'https://web-dev.imgix.net/image/SZHNhsfjU9RbCestTGZU6N7JEWs1/VwL892KEz6bakZMlq10D.png?auto=format&w=740'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=TimelineTreeView.test.js.map


}),

}]);