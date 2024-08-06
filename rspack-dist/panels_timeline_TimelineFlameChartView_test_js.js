"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_TimelineFlameChartView_test_js"], {
"./panels/timeline/TimelineFlameChartView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
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








var MockViewDelegate = /*#__PURE__*/ function() {
    "use strict";
    function MockViewDelegate() {
        _class_call_check(this, MockViewDelegate);
        _define_property(this, "selection", null);
        _define_property(this, "element", document.createElement('div'));
    }
    _create_class(MockViewDelegate, [
        {
            key: "select",
            value: function select(selection) {
                this.selection = selection;
            }
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
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('TimelineFlameChartView', function() {
    beforeEach(function() {
        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.setupIgnoreListManagerEnvironment)();
    });
    describe('groupForLevel', function() {
        var groupForLevel = _timeline_js__WEBPACK_IMPORTED_MODULE_7__.TimelineFlameChartView.groupForLevel;
        it('finds the right group for the given level', /*#__PURE__*/ _async_to_generator(function() {
            var groups;
            return _ts_generator(this, function(_state) {
                groups = [
                    {
                        name: 'group-1',
                        startLevel: 0,
                        style: {}
                    },
                    {
                        name: 'group-2',
                        startLevel: 10,
                        style: {}
                    },
                    {
                        name: 'group-3',
                        startLevel: 12,
                        style: {}
                    }
                ];
                assert.strictEqual(groupForLevel(groups, 1), groups[0]);
                assert.strictEqual(groupForLevel(groups, 10), groups[1]);
                assert.strictEqual(groupForLevel(groups, 11), groups[1]);
                assert.strictEqual(groupForLevel(groups, 12), groups[2]);
                assert.strictEqual(groupForLevel(groups, 999), groups[2]);
                return [
                    2
                ];
            });
        }));
    });
    it('Can search for events by name in the timeline', /*#__PURE__*/ _async_to_generator(function() {
        var _flameChartView_getSearchResults, traceData, mockViewDelegate, flameChartView, searchableView, searchQuery, searchConfig;
        function assertSelectionName(name) {
            var selection = mockViewDelegate.selection;
            if (!selection || !_timeline_js__WEBPACK_IMPORTED_MODULE_7__.TimelineSelection.TimelineSelection.isTraceEventSelection(selection.object)) {
                throw new Error('Selection is not present or not a Trace Event');
            }
            var object = selection.object;
            assert.strictEqual(object.name, name);
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_4__.TraceLoader.traceEngine(this, 'lcp-images.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    // The timeline flamechart view will invoke the `select` method
                    // of this delegate every time an event has matched on a search.
                    mockViewDelegate = new MockViewDelegate();
                    flameChartView = new _timeline_js__WEBPACK_IMPORTED_MODULE_7__.TimelineFlameChartView.TimelineFlameChartView(mockViewDelegate);
                    searchableView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.SearchableView.SearchableView(flameChartView, null);
                    flameChartView.setSearchableView(searchableView);
                    flameChartView.setModel(traceData);
                    searchQuery = 'Paint';
                    searchConfig = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.SearchableView.SearchConfig(/* query */ searchQuery, /* caseSensitive */ false, /* isRegex */ false);
                    flameChartView.performSearch(searchConfig, true);
                    assert.strictEqual((_flameChartView_getSearchResults = flameChartView.getSearchResults()) === null || _flameChartView_getSearchResults === void 0 ? void 0 : _flameChartView_getSearchResults.length, 17);
                    assertSelectionName('PrePaint');
                    flameChartView.jumpToNextSearchResult();
                    assertSelectionName('Paint');
                    flameChartView.jumpToNextSearchResult();
                    assertSelectionName('Paint');
                    flameChartView.jumpToPreviousSearchResult();
                    assertSelectionName('Paint');
                    flameChartView.jumpToPreviousSearchResult();
                    assertSelectionName('PrePaint');
                    return [
                        2
                    ];
            }
        });
    }));
    // This test is still failing after bumping up the timeout to 20 seconds. So
    // skip it while we work on a fix for the trace load speed.
    it.skip('[crbug.com/1492405] Shows the network track correctly', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, mockViewDelegate, flameChartView;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_4__.TraceLoader.traceEngine(this, 'load-simple.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    // The timeline flamechart view will invoke the `select` method
                    // of this delegate every time an event has matched on a search.
                    mockViewDelegate = new MockViewDelegate();
                    flameChartView = new _timeline_js__WEBPACK_IMPORTED_MODULE_7__.TimelineFlameChartView.TimelineFlameChartView(mockViewDelegate);
                    flameChartView.setModel(traceData);
                    assert.isTrue(flameChartView.isNetworkTrackShownForTests());
                    return [
                        2
                    ];
            }
        });
    }));
    it('Does not show the network track when there is no network request', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, mockViewDelegate, flameChartView;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_4__.TraceLoader.traceEngine(this, 'basic.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    // The timeline flamechart view will invoke the `select` method
                    // of this delegate every time an event has matched on a search.
                    mockViewDelegate = new MockViewDelegate();
                    flameChartView = new _timeline_js__WEBPACK_IMPORTED_MODULE_7__.TimelineFlameChartView.TimelineFlameChartView(mockViewDelegate);
                    flameChartView.setModel(traceData);
                    assert.isFalse(flameChartView.isNetworkTrackShownForTests());
                    return [
                        2
                    ];
            }
        });
    }));
    it('Adds Hidden Descendants Arrow as a decoration when a Context Menu action is applied on a node', /*#__PURE__*/ _async_to_generator(function() {
        var _flameChartView_getMainFlameChart_timelineData, _flameChartView_getMainFlameChart_timelineData1, traceData, mockViewDelegate, flameChartView, mainTrack, nodeOfGroup, firstNodeWithChildren, node, decorationsForEntry;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_4__.TraceLoader.traceEngine(this, 'load-simple.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    mockViewDelegate = new MockViewDelegate();
                    flameChartView = new _timeline_js__WEBPACK_IMPORTED_MODULE_7__.TimelineFlameChartView.TimelineFlameChartView(mockViewDelegate);
                    flameChartView.setModel(traceData);
                    // Find the main track to later collapse entries of
                    mainTrack = (_flameChartView_getMainFlameChart_timelineData = flameChartView.getMainFlameChart().timelineData()) === null || _flameChartView_getMainFlameChart_timelineData === void 0 ? void 0 : _flameChartView_getMainFlameChart_timelineData.groups.find(function(group) {
                        return group.name === 'Main — http://localhost:8080/';
                    });
                    if (!mainTrack) {
                        throw new Error('Could not find main track');
                    }
                    // Find the first node that has children to collapse and is visible in the timeline
                    nodeOfGroup = flameChartView.getMainDataProvider().groupTreeEvents(mainTrack);
                    firstNodeWithChildren = nodeOfGroup === null || nodeOfGroup === void 0 ? void 0 : nodeOfGroup.find(function(node) {
                        var _traceData_Renderer_entryToNode_get;
                        var childrenAmount = (_traceData_Renderer_entryToNode_get = traceData.Renderer.entryToNode.get(node)) === null || _traceData_Renderer_entryToNode_get === void 0 ? void 0 : _traceData_Renderer_entryToNode_get.children.length;
                        if (!childrenAmount) {
                            return false;
                        }
                        return childrenAmount > 0 && node.cat === 'devtools.timeline';
                    });
                    node = traceData.Renderer.entryToNode.get(firstNodeWithChildren);
                    if (!node) {
                        throw new Error('Could not find a visible node with children');
                    }
                    // Apply COLLAPSE_FUNCTION action to the node. This action will hide all the children of the passed node and add HIDDEN_DESCENDANTS_ARROW decoration to it.
                    flameChartView.getMainFlameChart().modifyTree("COLLAPSE_FUNCTION" /* PerfUI.FlameChart.FilterAction.COLLAPSE_FUNCTION */ , node === null || node === void 0 ? void 0 : node.id);
                    decorationsForEntry = (_flameChartView_getMainFlameChart_timelineData1 = flameChartView.getMainFlameChart().timelineData()) === null || _flameChartView_getMainFlameChart_timelineData1 === void 0 ? void 0 : _flameChartView_getMainFlameChart_timelineData1.entryDecorations[node === null || node === void 0 ? void 0 : node.id];
                    assert.deepEqual(decorationsForEntry, [
                        {
                            type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ 
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('Adds Hidden Descendants Arrow as a decoration when a Context Menu action is applied on a selected node with a key shortcut event', /*#__PURE__*/ _async_to_generator(function() {
        var _flameChartView_getMainFlameChart_timelineData, _flameChartView_getMainFlameChart_timelineData1, traceData, mockViewDelegate, flameChartView, mainTrack, nodeOfGroup, firstNodeWithChildren, node, event, decorationsForEntry;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_4__.TraceLoader.traceEngine(this, 'load-simple.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    mockViewDelegate = new MockViewDelegate();
                    flameChartView = new _timeline_js__WEBPACK_IMPORTED_MODULE_7__.TimelineFlameChartView.TimelineFlameChartView(mockViewDelegate);
                    flameChartView.setModel(traceData);
                    // Find the main track to later collapse entries of
                    mainTrack = (_flameChartView_getMainFlameChart_timelineData = flameChartView.getMainFlameChart().timelineData()) === null || _flameChartView_getMainFlameChart_timelineData === void 0 ? void 0 : _flameChartView_getMainFlameChart_timelineData.groups.find(function(group) {
                        return group.name === 'Main — http://localhost:8080/';
                    });
                    if (!mainTrack) {
                        throw new Error('Could not find main track');
                    }
                    // Find the first node that has children to collapse and is visible in the timeline
                    nodeOfGroup = flameChartView.getMainDataProvider().groupTreeEvents(mainTrack);
                    firstNodeWithChildren = nodeOfGroup === null || nodeOfGroup === void 0 ? void 0 : nodeOfGroup.find(function(node) {
                        var _traceData_Renderer_entryToNode_get;
                        var childrenAmount = (_traceData_Renderer_entryToNode_get = traceData.Renderer.entryToNode.get(node)) === null || _traceData_Renderer_entryToNode_get === void 0 ? void 0 : _traceData_Renderer_entryToNode_get.children.length;
                        if (!childrenAmount) {
                            return false;
                        }
                        return childrenAmount > 0 && node.cat === 'devtools.timeline';
                    });
                    node = traceData.Renderer.entryToNode.get(firstNodeWithChildren);
                    if (!node) {
                        throw new Error('Could not find a visible node with children');
                    }
                    flameChartView.getMainFlameChart().setSelectedEntry(node === null || node === void 0 ? void 0 : node.id);
                    // Dispatch a shortcut keydown event that applies 'Hide Children' Context menu action
                    event = new KeyboardEvent('keydown', {
                        code: 'KeyC'
                    });
                    flameChartView.getMainFlameChart().getCanvas().dispatchEvent(event);
                    decorationsForEntry = (_flameChartView_getMainFlameChart_timelineData1 = flameChartView.getMainFlameChart().timelineData()) === null || _flameChartView_getMainFlameChart_timelineData1 === void 0 ? void 0 : _flameChartView_getMainFlameChart_timelineData1.entryDecorations[node === null || node === void 0 ? void 0 : node.id];
                    assert.deepEqual(decorationsForEntry, [
                        {
                            type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ 
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('Removes Hidden Descendants Arrow as a decoration when Reset Children action is applied on a node', /*#__PURE__*/ _async_to_generator(function() {
        var _flameChartView_getMainFlameChart_timelineData, _flameChartView_getMainFlameChart_timelineData1, _flameChartView_getMainFlameChart_timelineData2, _flameChartView_getMainFlameChart_timelineData3, traceData, mockViewDelegate, flameChartView, mainTrack, nodeOfGroup, firstNodeWithChildren, node, decorationsForEntry;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_4__.TraceLoader.traceEngine(this, 'load-simple.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    mockViewDelegate = new MockViewDelegate();
                    flameChartView = new _timeline_js__WEBPACK_IMPORTED_MODULE_7__.TimelineFlameChartView.TimelineFlameChartView(mockViewDelegate);
                    flameChartView.setModel(traceData);
                    _timeline_js__WEBPACK_IMPORTED_MODULE_7__.ModificationsManager.ModificationsManager.activeManager();
                    // Find the main track to later collapse entries of
                    mainTrack = (_flameChartView_getMainFlameChart_timelineData = flameChartView.getMainFlameChart().timelineData()) === null || _flameChartView_getMainFlameChart_timelineData === void 0 ? void 0 : _flameChartView_getMainFlameChart_timelineData.groups.find(function(group) {
                        return group.name === 'Main — http://localhost:8080/';
                    });
                    if (!mainTrack) {
                        throw new Error('Could not find main track');
                    }
                    // Find the first node that has children to collapse and is visible in the timeline
                    nodeOfGroup = flameChartView.getMainDataProvider().groupTreeEvents(mainTrack);
                    firstNodeWithChildren = nodeOfGroup === null || nodeOfGroup === void 0 ? void 0 : nodeOfGroup.find(function(node) {
                        var _traceData_Renderer_entryToNode_get;
                        var childrenAmount = (_traceData_Renderer_entryToNode_get = traceData.Renderer.entryToNode.get(node)) === null || _traceData_Renderer_entryToNode_get === void 0 ? void 0 : _traceData_Renderer_entryToNode_get.children.length;
                        if (!childrenAmount) {
                            return false;
                        }
                        return childrenAmount > 0 && node.cat === 'devtools.timeline';
                    });
                    node = traceData.Renderer.entryToNode.get(firstNodeWithChildren);
                    if (!node) {
                        throw new Error('Could not find a visible node with children');
                    }
                    // Apply COLLAPSE_FUNCTION Context Menu action to the node.
                    // This action will hide all the children of the passed node and add HIDDEN_DESCENDANTS_ARROW decoration to it.
                    flameChartView.getMainFlameChart().modifyTree("COLLAPSE_FUNCTION" /* PerfUI.FlameChart.FilterAction.COLLAPSE_FUNCTION */ , node === null || node === void 0 ? void 0 : node.id);
                    decorationsForEntry = (_flameChartView_getMainFlameChart_timelineData1 = flameChartView.getMainFlameChart().timelineData()) === null || _flameChartView_getMainFlameChart_timelineData1 === void 0 ? void 0 : _flameChartView_getMainFlameChart_timelineData1.entryDecorations[node === null || node === void 0 ? void 0 : node.id];
                    assert.deepEqual(decorationsForEntry, [
                        {
                            type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ 
                        }
                    ]);
                    mainTrack = (_flameChartView_getMainFlameChart_timelineData2 = flameChartView.getMainFlameChart().timelineData()) === null || _flameChartView_getMainFlameChart_timelineData2 === void 0 ? void 0 : _flameChartView_getMainFlameChart_timelineData2.groups.find(function(group) {
                        return group.name === 'Main — http://localhost:8080/';
                    });
                    if (!mainTrack) {
                        throw new Error('Could not find main track');
                    }
                    // Apply a RESET_CHILDREN action that will reveal all of the hidden children of the passed node and remove HIDDEN_DESCENDANTS_ARROW decoration from it.
                    flameChartView.getMainFlameChart().modifyTree("RESET_CHILDREN" /* PerfUI.FlameChart.FilterAction.RESET_CHILDREN */ , node === null || node === void 0 ? void 0 : node.id);
                    // No decorations should exist on the node
                    decorationsForEntry = (_flameChartView_getMainFlameChart_timelineData3 = flameChartView.getMainFlameChart().timelineData()) === null || _flameChartView_getMainFlameChart_timelineData3 === void 0 ? void 0 : _flameChartView_getMainFlameChart_timelineData3.entryDecorations[node === null || node === void 0 ? void 0 : node.id];
                    assert.isUndefined(decorationsForEntry);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('Context Menu', function() {
        var flameChartView;
        var traceData;
        var _this = this;
        this.beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            var mockViewDelegate;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_4__.TraceLoader.traceEngine(_this, 'recursive-blocking-js.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        mockViewDelegate = new MockViewDelegate();
                        flameChartView = new _timeline_js__WEBPACK_IMPORTED_MODULE_7__.TimelineFlameChartView.TimelineFlameChartView(mockViewDelegate);
                        flameChartView.setModel(traceData);
                        _timeline_js__WEBPACK_IMPORTED_MODULE_7__.ModificationsManager.ModificationsManager.activeManager();
                        return [
                            2
                        ];
                }
            });
        }));
        it('Does not create customized Context Menu for network track', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                // The mouse event passed to the Context Menu is used to indicate where the menu should appear. Since we don't
                // need it to actually appear for this test, pass an event with coordinates that is not in the track header.
                flameChartView.getNetworkFlameChart().onContextMenu(new MouseEvent('contextmenu', {
                    clientX: 100,
                    clientY: 100
                }));
                assert.isUndefined(flameChartView.getNetworkFlameChart().getContextMenu());
                return [
                    2
                ];
            });
        }));
        it('Does not create Context Menu for Network track header', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                // So for the first track header, its x will start from beginning.
                // And its y will start after the ruler (ruler's height is 17).
                flameChartView.getNetworkFlameChart().onContextMenu(new MouseEvent('contextmenu', {
                    clientX: 0,
                    clientY: 17
                }));
                assert.isUndefined(flameChartView.getNetworkFlameChart().getContextMenu());
                return [
                    2
                ];
            });
        }));
        it('Create correct Context Menu for track headers in main flame chart', /*#__PURE__*/ _async_to_generator(function() {
            var _flameChartView_getMainFlameChart_getContextMenu, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at, _flameChartView_getMainFlameChart_getContextMenu1;
            return _ts_generator(this, function(_state) {
                // So for the first track header, its x will start from beginning.
                // And its y will start after the ruler (ruler's height is 17).
                flameChartView.getMainFlameChart().onContextMenu(new MouseEvent('contextmenu', {
                    clientX: 0,
                    clientY: 17
                }));
                assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu.defaultSection().items.length, 1);
                assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu1 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu1 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at = _flameChartView_getMainFlameChart_getContextMenu1.defaultSection().items.at(0)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at.buildDescriptor().label, 'Configure tracks…');
                return [
                    2
                ];
            });
        }));
        describe('Context Menu Actions For Thread tracks', function() {
            this.beforeEach(/*#__PURE__*/ _async_to_generator(function() {
                var _flameChartView_getMainFlameChart_timelineData, mainTrack;
                return _ts_generator(this, function(_state) {
                    // Find the Main track to later collapse entries of
                    mainTrack = (_flameChartView_getMainFlameChart_timelineData = flameChartView.getMainFlameChart().timelineData()) === null || _flameChartView_getMainFlameChart_timelineData === void 0 ? void 0 : _flameChartView_getMainFlameChart_timelineData.groups.find(function(group) {
                        return group.name === 'Main — http://127.0.0.1:8080/';
                    });
                    if (!mainTrack) {
                        throw new Error('Could not find main track');
                    }
                    return [
                        2
                    ];
                });
            }));
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
            function findFirstEntry(allEntries, predicate) {
                var entry = allEntries.find(function(entry) {
                    return predicate(entry);
                });
                if (!entry) {
                    throw new Error('Could not find expected entry.');
                }
                return entry;
            }
            function generateContextMenuForNodeId(nodeId) {
                // Highlight the node to make the Context Menu dispatch on this node
                flameChartView.getMainFlameChart().highlightEntry(nodeId);
                // The mouse event passed to the Context Menu is used to indicate where the menu should appear. Since we don't
                // need it to actually appear for this test, pass an empty event.
                flameChartView.getMainFlameChart().onContextMenu(new MouseEvent(''));
            }
            function generateContextMenuForNode(node) {
                var nodeId = flameChartView.getMainDataProvider().indexForEvent(node);
                assert.isNotNull(nodeId);
                generateContextMenuForNodeId(nodeId);
            }
            it('When an entry has no children, correctly make only Hide Entry enabled in the Context Menu action', /*#__PURE__*/ _async_to_generator(function() {
                var _flameChartView_getMainFlameChart_getContextMenu, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at, _flameChartView_getMainFlameChart_getContextMenu1, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1, _flameChartView_getMainFlameChart_getContextMenu2, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2, _flameChartView_getMainFlameChart_getContextMenu3, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at3, _flameChartView_getMainFlameChart_getContextMenu4, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at4, _flameChartView_getMainFlameChart_getContextMenu5, nodeIdWithNoChildren;
                return _ts_generator(this, function(_state) {
                    /** Part of this stack looks roughly like so (with some events omitted):
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * == now ==      == updateCounters ==  <-- ID=245
                 *
                 * In this test we want to test that the Context Menu option available
                 * for an entry with no children and a parent is to hide given entry only.
                 * Since there are no children to hide, we don't want to show 'hide children' option.
                 *
                 * To achieve that, we will dispatch the context menu on the 'updateCounters' function that does not have
                 * children.
                 * The ID of 'updateCounters' is 245.
                 **/ nodeIdWithNoChildren = 245;
                    generateContextMenuForNodeId(nodeIdWithNoChildren);
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu.defaultSection().items.length, 5);
                    // Hide function enabled
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu1 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu1 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at = _flameChartView_getMainFlameChart_getContextMenu1.defaultSection().items.at(0)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at.buildDescriptor().enabled, true);
                    // Rest of the actions disabled
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu2 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu2 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1 = _flameChartView_getMainFlameChart_getContextMenu2.defaultSection().items.at(1)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1.buildDescriptor().enabled, false);
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu3 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu3 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2 = _flameChartView_getMainFlameChart_getContextMenu3.defaultSection().items.at(2)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2.buildDescriptor().enabled, false);
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu4 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu4 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at3 = _flameChartView_getMainFlameChart_getContextMenu4.defaultSection().items.at(3)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at3 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at3.buildDescriptor().enabled, false);
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu5 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu5 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at4 = _flameChartView_getMainFlameChart_getContextMenu5.defaultSection().items.at(4)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at4 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at4.buildDescriptor().enabled, false);
                    return [
                        2
                    ];
                });
            }));
            it('When an entry has children, correctly make only Hide Entry and Hide Children enabled in the Context Menu action', /*#__PURE__*/ _async_to_generator(function() {
                var _flameChartView_getMainFlameChart_getContextMenu, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at, _flameChartView_getMainFlameChart_getContextMenu1, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1, _flameChartView_getMainFlameChart_getContextMenu2, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2, _flameChartView_getMainFlameChart_getContextMenu3, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at3, _flameChartView_getMainFlameChart_getContextMenu4, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at4, _flameChartView_getMainFlameChart_getContextMenu5, nodeIdWithNoChildren;
                return _ts_generator(this, function(_state) {
                    /** Part of this stack looks roughly like so (with some events omitted):
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * ===== wait =====   ===== wait =====  <-- ID=204
                 * = now =  = now =   = now =  = now =
                 *
                 * In this test we want to test that the Context Menu option available
                 * for an entry with children and a parent is to hide given entry, and hide children only.
                 * Since there are no repeating children to hide, we don't want to show 'hide repeating children' option.
                 *
                 * To achieve that, we will dispatch the context menu on the 'wait' function that has only non-repeating
                 * children.
                 * The ID of the first 'wait' is 204.
                 **/ nodeIdWithNoChildren = 204;
                    generateContextMenuForNodeId(nodeIdWithNoChildren);
                    // This entry has URL, so there are 5 always-shown actions, and one to add script to ignore list.
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu.defaultSection().items.length, 6);
                    // Hide function enabled
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu1 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu1 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at = _flameChartView_getMainFlameChart_getContextMenu1.defaultSection().items.at(0)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at.buildDescriptor().enabled, true);
                    // Hide children enabled
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu2 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu2 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1 = _flameChartView_getMainFlameChart_getContextMenu2.defaultSection().items.at(1)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1.buildDescriptor().enabled, true);
                    // Rest of the actions disabled
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu3 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu3 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2 = _flameChartView_getMainFlameChart_getContextMenu3.defaultSection().items.at(2)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2.buildDescriptor().enabled, false);
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu4 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu4 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at3 = _flameChartView_getMainFlameChart_getContextMenu4.defaultSection().items.at(3)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at3 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at3.buildDescriptor().enabled, false);
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu5 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu5 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at4 = _flameChartView_getMainFlameChart_getContextMenu5.defaultSection().items.at(4)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at4 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at4.buildDescriptor().enabled, false);
                    return [
                        2
                    ];
                });
            }));
            it('When an entry has repeating children, correctly make only Hide Entry, Hide Children and Hide repeating children enabled in the Context Menu action', /*#__PURE__*/ _async_to_generator(function() {
                var _flameChartView_getMainFlameChart_getContextMenu, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at, _flameChartView_getMainFlameChart_getContextMenu1, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1, _flameChartView_getMainFlameChart_getContextMenu2, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2, _flameChartView_getMainFlameChart_getContextMenu3, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at3, _flameChartView_getMainFlameChart_getContextMenu4, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at4, _flameChartView_getMainFlameChart_getContextMenu5, nodeIdWithNoChildren;
                return _ts_generator(this, function(_state) {
                    /** Part of this stack looks roughly like so (with some events omitted):
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo =============== <-- ID=200
                 * =============== foo ===============
                 * =============== foo ===============
                 * ===== wait =====   ===== wait =====
                 * = now =  = now =   = now =  = now =
                 *
                 * In this test we want to test that the Context Menu option available
                 * for an entry with children repeating children and a parent is to hide given entry, hide children and hide
                 * repeating children.
                 *
                 * To achieve that, we will dispatch the context menu on the 'foo' function that has child 'foo' calls.
                 * The ID of the a matching 'foo' is 200.
                 **/ nodeIdWithNoChildren = 200;
                    generateContextMenuForNodeId(nodeIdWithNoChildren);
                    // This entry has URL, so there are 5 always-shown actions, and one to add script to ignore list.
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu.defaultSection().items.length, 6);
                    // Hide function enabled
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu1 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu1 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at = _flameChartView_getMainFlameChart_getContextMenu1.defaultSection().items.at(0)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at.buildDescriptor().enabled, true);
                    // Hide children enabled
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu2 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu2 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1 = _flameChartView_getMainFlameChart_getContextMenu2.defaultSection().items.at(1)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1.buildDescriptor().enabled, true);
                    // Hide repeating children enabled
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu3 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu3 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2 = _flameChartView_getMainFlameChart_getContextMenu3.defaultSection().items.at(2)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2.buildDescriptor().enabled, true);
                    // Rest of the actions disabled
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu4 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu4 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at3 = _flameChartView_getMainFlameChart_getContextMenu4.defaultSection().items.at(3)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at3 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at3.buildDescriptor().enabled, false);
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu5 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu5 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at4 = _flameChartView_getMainFlameChart_getContextMenu5.defaultSection().items.at(4)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at4 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at4.buildDescriptor().enabled, false);
                    return [
                        2
                    ];
                });
            }));
            it('When an entry has no parent and has children, correctly make only Hide Children enabled in the Context Menu action', /*#__PURE__*/ _async_to_generator(function() {
                var _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at, _flameChartView_getMainFlameChart_getContextMenu, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1, _flameChartView_getMainFlameChart_getContextMenu1, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2, _flameChartView_getMainFlameChart_getContextMenu2, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at3, _flameChartView_getMainFlameChart_getContextMenu3, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at4, _flameChartView_getMainFlameChart_getContextMenu4, nodeIdWithNoChildren;
                return _ts_generator(this, function(_state) {
                    /** Part of this stack looks roughly like so (with some events omitted):
                 * =============== Task ============== <-- ID=62
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * ===== wait =====   ===== wait =====
                 * = now =  = now =   = now =  = now =
                 *
                 * In this test we want to test that the Context Menu option available for an entry with no parent is only to
                 * hide children.
                 * If an entry has no parent, we don't want to show an option to hide the entry since when an entry is hidden,
                 * it is indicated by adding a decoration to the parent and if there is no parent, there is no way to show it
                 * is hidden.
                 *
                 * To achieve that, we will dispatch the context menu on the 'Task' function that is on the top of the stack
                 * and has no parent.
                 * The ID of the a matching 'Task' is 62.
                 **/ nodeIdWithNoChildren = 62;
                    generateContextMenuForNodeId(nodeIdWithNoChildren);
                    // Hide function disabled
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at = _flameChartView_getMainFlameChart_getContextMenu.defaultSection().items.at(0)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at.buildDescriptor().enabled, false);
                    // Hide children enabled
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu1 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu1 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1 = _flameChartView_getMainFlameChart_getContextMenu1.defaultSection().items.at(1)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1.buildDescriptor().enabled, true);
                    // Rest of the actions disabled
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu2 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu2 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2 = _flameChartView_getMainFlameChart_getContextMenu2.defaultSection().items.at(2)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2.buildDescriptor().enabled, false);
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu3 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu3 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at3 = _flameChartView_getMainFlameChart_getContextMenu3.defaultSection().items.at(3)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at3 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at3.buildDescriptor().enabled, false);
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu4 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu4 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at4 = _flameChartView_getMainFlameChart_getContextMenu4.defaultSection().items.at(4)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at4 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at4.buildDescriptor().enabled, false);
                    return [
                        2
                    ];
                });
            }));
            it('Reset Trace Context Menu action is disabled before some action has been applied', /*#__PURE__*/ _async_to_generator(function() {
                var _flameChartView_getMainFlameChart_getContextMenu, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at, _flameChartView_getMainFlameChart_getContextMenu1, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1, _flameChartView_getMainFlameChart_getContextMenu2, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2, _flameChartView_getMainFlameChart_getContextMenu3, nodeId;
                return _ts_generator(this, function(_state) {
                    /** Part of this stack looks roughly like so (with some events omitted):
                 * =============== Task ============== <-- ID=62
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * =============== foo ===============
                 * ===== wait =====   ===== wait =====
                 * = now =  = now =   = now =  = now =
                 *
                 * In this test we want to test that the Reset Trace Context Menu option is disabled by default and enabled after
                 * some action has been applied.
                 *
                 * To achieve that, we will first check if Reset Trace is disabled and then dispatch a Context Menu action on
                 * "Task" entry and then check if Reset Trace is enabled.
                 * The ID of the a matching 'Task' is 62.
                 **/ nodeId = 62;
                    generateContextMenuForNodeId(nodeId);
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu.defaultSection().items.length, 5);
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu1 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu1 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at = _flameChartView_getMainFlameChart_getContextMenu1.defaultSection().items.at(4)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at.buildDescriptor().label, 'Reset trace');
                    // Check that Reset Trace is disabled
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu2 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu2 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1 = _flameChartView_getMainFlameChart_getContextMenu2.defaultSection().items.at(4)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at1.buildDescriptor().enabled, false);
                    flameChartView.getMainFlameChart().modifyTree("MERGE_FUNCTION" /* PerfUI.FlameChart.FilterAction.MERGE_FUNCTION */ , nodeId);
                    generateContextMenuForNodeId(nodeId);
                    // Check that Reset Trace is enabled
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu3 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu3 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2 = _flameChartView_getMainFlameChart_getContextMenu3.defaultSection().items.at(4)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2 === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at2.buildDescriptor().enabled, true);
                    return [
                        2
                    ];
                });
            }));
            it('When an entry has URL and is not ignored, correctly show the Add script to ignore list in the Context Menu action', /*#__PURE__*/ _async_to_generator(function() {
                var _flameChartView_getMainFlameChart_getContextMenu, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at, _flameChartView_getMainFlameChart_getContextMenu1, mainThread, entryWithUrl;
                return _ts_generator(this, function(_state) {
                    mainThread = getMainThread(traceData.Renderer);
                    entryWithUrl = findFirstEntry(mainThread.entries, function(entry) {
                        // Let's find the first entry with URL.
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isProfileCall(entry) && Boolean(entry.callFrame.url);
                    });
                    generateContextMenuForNode(entryWithUrl);
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu.defaultSection().items.length, 6);
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu1 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu1 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at = _flameChartView_getMainFlameChart_getContextMenu1.defaultSection().items.at(5)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at.buildDescriptor().label, 'Add script to ignore list');
                    return [
                        2
                    ];
                });
            }));
            it('When an entry has URL and is ignored, correctly show the Remove script from ignore list in the Context Menu action', /*#__PURE__*/ _async_to_generator(function() {
                var _flameChartView_getMainFlameChart_getContextMenu, _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at, _flameChartView_getMainFlameChart_getContextMenu1, mainThread, entryWithIgnoredUrl;
                return _ts_generator(this, function(_state) {
                    mainThread = getMainThread(traceData.Renderer);
                    entryWithIgnoredUrl = findFirstEntry(mainThread.entries, function(entry) {
                        // Let's find the first entry with URL.
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isProfileCall(entry) && Boolean(entry.callFrame.url);
                    });
                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.IgnoreListManager.IgnoreListManager.instance().ignoreListURL(entryWithIgnoredUrl.callFrame.url);
                    generateContextMenuForNode(entryWithIgnoredUrl);
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu.defaultSection().items.length, 6);
                    assert.strictEqual((_flameChartView_getMainFlameChart_getContextMenu1 = flameChartView.getMainFlameChart().getContextMenu()) === null || _flameChartView_getMainFlameChart_getContextMenu1 === void 0 ? void 0 : (_flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at = _flameChartView_getMainFlameChart_getContextMenu1.defaultSection().items.at(5)) === null || _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at === void 0 ? void 0 : _flameChartView_getMainFlameChart_getContextMenu_defaultSection_items_at.buildDescriptor().label, 'Remove script from ignore list');
                    return [
                        2
                    ];
                });
            }));
        });
    });
}); //# sourceMappingURL=TimelineFlameChartView.test.js.map


}),

}]);