"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_helpers_TreeHelpers_test_js"], {
"./models/trace/helpers/TreeHelpers.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
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


describe('TreeHelpers', function() {
    describe('treify', function() {
        it('can build a hierarchy of events without filters', /*#__PURE__*/ _async_to_generator(function() {
            var data, tree, rootsEvents, nodeA, nodeE, childrenOfA, childrenOfE, nodeB, nodeD, childrenOfB, childrenOfD, nodeC, childrenOfC;
            return _ts_generator(this, function(_state) {
                /**
             * |------------- Task A -------------||-- Task E --|
             *  |-- Task B --||-- Task D --|
             *   |- Task C -|
             */ data = [
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('A', 0, 10),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('B', 1, 3),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('D', 5, 3),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('C', 2, 1),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('E', 11, 3)
                ];
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.Trace.sortTraceEventsInPlace(data);
                tree = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.TreeHelpers.treify(data, {
                    filter: {
                        has: function() {
                            return true;
                        }
                    }
                }).tree;
                assert.strictEqual(tree.maxDepth, 3, 'Got the correct tree max depth');
                rootsEvents = _to_consumable_array(tree.roots).map(function(n) {
                    return n ? n.entry : null;
                });
                assert.deepEqual(rootsEvents.map(function(e) {
                    return e ? {
                        name: e.name,
                        ts: e.ts,
                        dur: e.dur
                    } : null;
                }), [
                    {
                        'name': 'A',
                        'ts': 0,
                        'dur': 10
                    },
                    {
                        'name': 'E',
                        'ts': 11,
                        'dur': 3
                    }
                ]);
                nodeA = _to_consumable_array(tree.roots).at(0);
                nodeE = _to_consumable_array(tree.roots).at(1);
                if (!nodeA || !nodeE) {
                    assert(false, 'Root nodes were not found');
                    return [
                        2
                    ];
                }
                childrenOfA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventsIn)(nodeA.children.values());
                assert.deepEqual(childrenOfA.map(function(e) {
                    return e ? {
                        name: e.name,
                        ts: e.ts,
                        dur: e.dur
                    } : null;
                }), [
                    {
                        'name': 'B',
                        'ts': 1,
                        'dur': 3
                    },
                    {
                        'name': 'D',
                        'ts': 5,
                        'dur': 3
                    }
                ]);
                childrenOfE = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventsIn)(nodeE.children.values());
                assert.deepEqual(childrenOfE, []);
                nodeB = _to_consumable_array(nodeA.children).at(0);
                nodeD = _to_consumable_array(nodeA.children).at(1);
                if (!nodeB || !nodeD) {
                    assert(false, 'Child nodes were not found');
                    return [
                        2
                    ];
                }
                childrenOfB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventsIn)(nodeB.children.values());
                assert.deepEqual(childrenOfB.map(function(e) {
                    return e ? {
                        name: e.name,
                        ts: e.ts,
                        dur: e.dur
                    } : null;
                }), [
                    {
                        'name': 'C',
                        'ts': 2,
                        'dur': 1
                    }
                ]);
                childrenOfD = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventsIn)(nodeD.children.values());
                assert.deepEqual(childrenOfD, []);
                nodeC = _to_consumable_array(nodeB.children).at(0);
                if (!nodeC) {
                    assert(false, 'Child nodes were not found');
                    return [
                        2
                    ];
                }
                childrenOfC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventsIn)(nodeC.children.values());
                assert.deepEqual(childrenOfC, []);
                return [
                    2
                ];
            });
        }));
        it('can build a hierarchy of events with filters', /*#__PURE__*/ _async_to_generator(function() {
            var data, filter, tree, rootsEvents, nodeA, childrenOfA, nodeD, childrenOfD;
            return _ts_generator(this, function(_state) {
                /**
             * |------------- Task A -------------||-- ?????? --|
             *  |-- ?????? --||-- Task D --|
             *   |- ?????? -|
             */ data = [
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('A', 0, 10),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('B', 1, 3),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('D', 5, 3),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('C', 2, 1),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('E', 11, 3)
                ];
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.Trace.sortTraceEventsInPlace(data);
                filter = new Set([
                    'A',
                    'D'
                ]);
                tree = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.TreeHelpers.treify(data, {
                    filter: filter
                }).tree;
                assert.strictEqual(tree.maxDepth, 2, 'Got the correct tree max depth');
                rootsEvents = _to_consumable_array(tree.roots).map(function(n) {
                    return n.entry;
                });
                assert.deepEqual(rootsEvents.map(function(e) {
                    return e ? {
                        name: e.name,
                        ts: e.ts,
                        dur: e.dur
                    } : null;
                }), [
                    {
                        'name': 'A',
                        'ts': 0,
                        'dur': 10
                    }
                ]);
                nodeA = _to_consumable_array(tree.roots).at(0);
                if (!nodeA) {
                    assert(false, 'Root nodes were not found');
                    return [
                        2
                    ];
                }
                childrenOfA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventsIn)(nodeA.children.values());
                assert.deepEqual(childrenOfA.map(function(e) {
                    return e ? {
                        name: e.name,
                        ts: e.ts,
                        dur: e.dur
                    } : null;
                }), [
                    {
                        'name': 'D',
                        'ts': 5,
                        'dur': 3
                    }
                ]);
                nodeD = _to_consumable_array(nodeA.children).at(0);
                if (!nodeD) {
                    assert(false, 'Child nodes were not found');
                    return [
                        2
                    ];
                }
                childrenOfD = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventsIn)(nodeD.children.values());
                assert.deepEqual(childrenOfD, []);
                return [
                    2
                ];
            });
        }));
        it('can build a hierarchy of events that start and end close to each other', /*#__PURE__*/ _async_to_generator(function() {
            var data, tree, rootsEvents, nodeA, nodeE, childrenOfA, childrenOfE, nodeB, nodeD, childrenOfB, childrenOfD, nodeC, childrenOfC;
            return _ts_generator(this, function(_state) {
                /**
             * |------------- Task A -------------||-- Task E --|
             * |-- Task B --||-- Task D --|
             *   |- Task C -|
             */ data = [
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('A', 0, 10),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('B', 0, 3),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('D', 3, 3),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('C', 2, 1),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('E', 10, 3)
                ];
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.Trace.sortTraceEventsInPlace(data);
                tree = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.TreeHelpers.treify(data, {
                    filter: {
                        has: function() {
                            return true;
                        }
                    }
                }).tree;
                assert.strictEqual(tree.maxDepth, 3, 'Got the correct tree max depth');
                rootsEvents = _to_consumable_array(tree.roots).map(function(n) {
                    return n.entry;
                });
                assert.deepEqual(rootsEvents.map(function(e) {
                    return e ? {
                        name: e.name,
                        ts: e.ts,
                        dur: e.dur
                    } : null;
                }), [
                    {
                        'name': 'A',
                        'ts': 0,
                        'dur': 10
                    },
                    {
                        'name': 'E',
                        'ts': 10,
                        'dur': 3
                    }
                ]);
                nodeA = _to_consumable_array(tree.roots).at(0);
                nodeE = _to_consumable_array(tree.roots).at(1);
                if (!nodeA || !nodeE) {
                    assert(false, 'Root nodes were not found');
                    return [
                        2
                    ];
                }
                childrenOfA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventsIn)(nodeA.children.values());
                assert.deepEqual(childrenOfA.map(function(e) {
                    return e ? {
                        name: e.name,
                        ts: e.ts,
                        dur: e.dur
                    } : null;
                }), [
                    {
                        'name': 'B',
                        'ts': 0,
                        'dur': 3
                    },
                    {
                        'name': 'D',
                        'ts': 3,
                        'dur': 3
                    }
                ]);
                childrenOfE = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventsIn)(nodeE.children.values());
                assert.deepEqual(childrenOfE, []);
                nodeB = _to_consumable_array(nodeA.children).at(0);
                nodeD = _to_consumable_array(nodeA.children).at(1);
                if (!nodeB || !nodeD) {
                    assert(false, 'Child nodes were not found');
                    return [
                        2
                    ];
                }
                childrenOfB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventsIn)(nodeB.children.values());
                assert.deepEqual(childrenOfB.map(function(e) {
                    return e ? {
                        name: e.name,
                        ts: e.ts,
                        dur: e.dur
                    } : null;
                }), [
                    {
                        'name': 'C',
                        'ts': 2,
                        'dur': 1
                    }
                ]);
                childrenOfD = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventsIn)(nodeD.children.values());
                assert.deepEqual(childrenOfD, []);
                nodeC = _to_consumable_array(nodeB.children).at(0);
                if (!nodeC) {
                    assert(false, 'Child nodes were not found');
                    return [
                        2
                    ];
                }
                childrenOfC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventsIn)(nodeC.children.values());
                assert.deepEqual(childrenOfC, []);
                return [
                    2
                ];
            });
        }));
        it('correctly calculates the total and self times of a hierarchy of events', /*#__PURE__*/ _async_to_generator(function() {
            var data, tree, nodeA, nodeE, taskA, taskE, nodeD, nodeB, taskD, taskB, nodeC, taskC, taskCTotalTime, taskBTotalTime, taskDTotalTime, taskATotalTime, taskETotalTime;
            return _ts_generator(this, function(_state) {
                /**
             * |------------- Task A -------------||-- Task E --|
             * |-- Task B --||-- Task D --|
             *   |- Task C -|
             */ data = [
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('A', 0, 10),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('B', 0, 3),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('D', 3, 3),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('C', 2, 1),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('E', 10, 3)
                ];
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.Trace.sortTraceEventsInPlace(data);
                tree = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.TreeHelpers.treify(data, {
                    filter: {
                        has: function() {
                            return true;
                        }
                    }
                }).tree;
                nodeA = _to_consumable_array(tree.roots).at(0);
                nodeE = _to_consumable_array(tree.roots).at(1);
                if (!nodeA || !nodeE) {
                    assert(false, 'Root nodes were not found');
                    return [
                        2
                    ];
                }
                taskA = nodeA.entry;
                taskE = nodeE.entry;
                nodeD = _to_consumable_array(nodeA.children).at(1);
                nodeB = _to_consumable_array(nodeA.children).at(0);
                if (!nodeB || !nodeD) {
                    assert(false, 'Child nodes were not found');
                    return [
                        2
                    ];
                }
                taskD = nodeD.entry;
                taskB = nodeB.entry;
                nodeC = _to_consumable_array(nodeB.children).at(0);
                if (!nodeC) {
                    assert(false, 'Child nodes were not found');
                    return [
                        2
                    ];
                }
                taskC = nodeC.entry;
                taskCTotalTime = taskC.dur;
                if (taskCTotalTime === undefined) {
                    assert.fail('Total time for task was not found');
                    return [
                        2
                    ];
                }
                assert.strictEqual(taskCTotalTime, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(1));
                assert.strictEqual(taskC.selfTime, taskCTotalTime);
                taskBTotalTime = taskB.dur;
                if (taskBTotalTime === undefined) {
                    assert.fail('Total time for task was not found');
                    return [
                        2
                    ];
                }
                assert.strictEqual(taskBTotalTime, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(3));
                assert.strictEqual(taskB.selfTime, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(taskBTotalTime - taskCTotalTime));
                taskDTotalTime = taskD.dur;
                if (taskDTotalTime === undefined) {
                    assert.fail('Total time for task was not found');
                    return [
                        2
                    ];
                }
                assert.strictEqual(taskDTotalTime, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(3));
                assert.strictEqual(taskD.selfTime, taskDTotalTime);
                taskATotalTime = taskA.dur;
                if (taskATotalTime === undefined) {
                    assert.fail('Total time for task was not found');
                    return [
                        2
                    ];
                }
                assert.strictEqual(taskATotalTime, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(10));
                assert.strictEqual(taskA.selfTime, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(taskATotalTime - taskBTotalTime - taskDTotalTime));
                taskETotalTime = taskE.dur;
                if (taskETotalTime === undefined) {
                    assert.fail('Total time for task was not found');
                    return [
                        2
                    ];
                }
                assert.strictEqual(taskETotalTime, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(3));
                assert.strictEqual(taskD.selfTime, taskETotalTime);
                return [
                    2
                ];
            });
        }));
        describe('building hierarchies trace events and profile calls', function() {
            it('builds a hierarchy from trace events and profile calls', /*#__PURE__*/ _async_to_generator(function() {
                var evaluateScript, v8Run, parseFunction, traceEvents, profileCalls, allEntries, tree;
                return _ts_generator(this, function(_state) {
                    evaluateScript = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)("EvaluateScript" /* TraceModel.Types.TraceEvents.KnownEventName.EvaluateScript */ , 0, 500);
                    v8Run = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('v8.run', 10, 490);
                    parseFunction = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('V8.ParseFunction', 12, 1);
                    traceEvents = [
                        evaluateScript,
                        v8Run,
                        parseFunction
                    ];
                    profileCalls = [
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeProfileCall)('a', 100, 200),
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeProfileCall)('b', 300, 200)
                    ];
                    allEntries = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.Trace.mergeEventsInOrder(traceEvents, profileCalls);
                    tree = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.TreeHelpers.treify(allEntries, {
                        filter: {
                            has: function() {
                                return true;
                            }
                        }
                    }).tree;
                    assert.strictEqual((0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(tree), "\n-EvaluateScript [0.5ms]\n  -v8.run [0.49ms]\n    -V8.ParseFunction [0.001ms]\n    -ProfileCall (a) [0.2ms]\n    -ProfileCall (b) [0.2ms]");
                    return [
                        2
                    ];
                });
            }));
            it('builds a hierarchy from only profile calls', /*#__PURE__*/ _async_to_generator(function() {
                var allEntries, tree;
                return _ts_generator(this, function(_state) {
                    allEntries = [
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeProfileCall)('a', 100, 200),
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeProfileCall)('b', 300, 200),
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeProfileCall)('c', 300, 200),
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeProfileCall)('d', 400, 100)
                    ];
                    tree = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.TreeHelpers.treify(allEntries, {
                        filter: {
                            has: function() {
                                return true;
                            }
                        }
                    }).tree;
                    assert.strictEqual((0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(tree), "\n-ProfileCall (a) [0.2ms]\n-ProfileCall (b) [0.2ms]\n  -ProfileCall (c) [0.2ms]\n    -ProfileCall (d) [0.1ms]");
                    return [
                        2
                    ];
                });
            }));
        });
    });
    describe('walking trees', function() {
        it('walkEntireTree walks the entire tree and visits all the roots as well as all children', /*#__PURE__*/ _async_to_generator(function() {
            var data, _TraceModel_Helpers_TreeHelpers_treify, tree, entryToNode, callOrder;
            function onEntryStart(entry) {
                callOrder.push({
                    type: 'START',
                    entryName: entry.name
                });
            }
            function onEntryEnd(entry) {
                callOrder.push({
                    type: 'END',
                    entryName: entry.name
                });
            }
            return _ts_generator(this, function(_state) {
                /**
             * |------------- Task A -------------||-- Task E --|
             *  |-- Task B --||-- Task D --|
             *   |- Task C -|
             */ data = [
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('A', 0, 10),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('B', 1, 3),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('D', 5, 3),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('C', 2, 1),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('E', 11, 3)
                ];
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.Trace.sortTraceEventsInPlace(data);
                _TraceModel_Helpers_TreeHelpers_treify = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.TreeHelpers.treify(data, {
                    filter: {
                        has: function() {
                            return true;
                        }
                    }
                }), tree = _TraceModel_Helpers_TreeHelpers_treify.tree, entryToNode = _TraceModel_Helpers_TreeHelpers_treify.entryToNode;
                callOrder = [];
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.TreeHelpers.walkEntireTree(entryToNode, tree, onEntryStart, onEntryEnd);
                assert.deepEqual(callOrder, [
                    {
                        type: 'START',
                        entryName: 'A'
                    },
                    {
                        type: 'START',
                        entryName: 'B'
                    },
                    {
                        type: 'START',
                        entryName: 'C'
                    },
                    {
                        type: 'END',
                        entryName: 'C'
                    },
                    {
                        type: 'END',
                        entryName: 'B'
                    },
                    {
                        type: 'START',
                        entryName: 'D'
                    },
                    {
                        type: 'END',
                        entryName: 'D'
                    },
                    {
                        type: 'END',
                        entryName: 'A'
                    },
                    {
                        type: 'START',
                        entryName: 'E'
                    },
                    {
                        type: 'END',
                        entryName: 'E'
                    }
                ]);
                return [
                    2
                ];
            });
        }));
        it('walkEntireTree can take a trace window and will only run for events in that window', /*#__PURE__*/ _async_to_generator(function() {
            var data, _TraceModel_Helpers_TreeHelpers_treify, tree, entryToNode, callOrder;
            function onEntryStart(entry) {
                callOrder.push({
                    type: 'START',
                    entryName: entry.name
                });
            }
            function onEntryEnd(entry) {
                callOrder.push({
                    type: 'END',
                    entryName: entry.name
                });
            }
            return _ts_generator(this, function(_state) {
                /**
             *                | min: 5 - max 10| <<<< custom trace window
             * |------------- Task A -------------||-- Task E --|
             *  |-- Task B --||-- Task D --|
             *   |- Task C -|
             */ data = [
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('A', 0, 10),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('B', 1, 3),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('D', 5, 3),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('C', 2, 1),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('E', 11, 3)
                ];
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.Trace.sortTraceEventsInPlace(data);
                _TraceModel_Helpers_TreeHelpers_treify = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.TreeHelpers.treify(data, {
                    filter: {
                        has: function() {
                            return true;
                        }
                    }
                }), tree = _TraceModel_Helpers_TreeHelpers_treify.tree, entryToNode = _TraceModel_Helpers_TreeHelpers_treify.entryToNode;
                callOrder = [];
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.TreeHelpers.walkEntireTree(entryToNode, tree, onEntryStart, onEntryEnd, {
                    min: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(5),
                    max: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(10),
                    range: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(5)
                });
                assert.deepEqual(callOrder, [
                    {
                        type: 'START',
                        entryName: 'A'
                    },
                    {
                        type: 'START',
                        entryName: 'D'
                    },
                    {
                        type: 'END',
                        entryName: 'D'
                    },
                    {
                        type: 'END',
                        entryName: 'A'
                    }
                ]);
                return [
                    2
                ];
            });
        }));
        it('walkTreeFromEntry walks the tree down and then back up and calls onEntryStart and onEntryEnd', /*#__PURE__*/ _async_to_generator(function() {
            var data, _TraceModel_Helpers_TreeHelpers_treify, tree, entryToNode, callOrder, rootNode;
            function onEntryStart(entry) {
                callOrder.push({
                    type: 'START',
                    entryName: entry.name
                });
            }
            function onEntryEnd(entry) {
                callOrder.push({
                    type: 'END',
                    entryName: entry.name
                });
            }
            return _ts_generator(this, function(_state) {
                /**
             * |------------- Task A -------------||-- Task E --|
             *  |-- Task B --||-- Task D --|
             *   |- Task C -|
             */ data = [
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('A', 0, 10),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('B', 1, 3),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('D', 5, 3),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('C', 2, 1),
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('E', 11, 3)
                ];
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.Trace.sortTraceEventsInPlace(data);
                _TraceModel_Helpers_TreeHelpers_treify = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.TreeHelpers.treify(data, {
                    filter: {
                        has: function() {
                            return true;
                        }
                    }
                }), tree = _TraceModel_Helpers_TreeHelpers_treify.tree, entryToNode = _TraceModel_Helpers_TreeHelpers_treify.entryToNode;
                callOrder = [];
                rootNode = Array.from(tree.roots).at(0);
                if (!rootNode) {
                    throw new Error('Could not find root node');
                }
                assert.strictEqual(rootNode.entry.name, 'A');
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.TreeHelpers.walkTreeFromEntry(entryToNode, rootNode.entry, onEntryStart, onEntryEnd);
                assert.deepEqual(callOrder, [
                    {
                        type: 'START',
                        entryName: 'A'
                    },
                    {
                        type: 'START',
                        entryName: 'B'
                    },
                    {
                        type: 'START',
                        entryName: 'C'
                    },
                    {
                        type: 'END',
                        entryName: 'C'
                    },
                    {
                        type: 'END',
                        entryName: 'B'
                    },
                    {
                        type: 'START',
                        entryName: 'D'
                    },
                    {
                        type: 'END',
                        entryName: 'D'
                    },
                    {
                        type: 'END',
                        entryName: 'A'
                    }
                ]);
                return [
                    2
                ];
            });
        }));
    });
    describe('canBuildTreesFromEvents', function() {
        it('returns true if no pair of events (e1, e2) exists such that e1 overlaps with e2 without one fully containing the other', function() {
            var data = [
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('a', 0, 100),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('b', 0, 50),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('c', 0, 25),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('d', 26, 24),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('e', 51, 49),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('f', 51, 24),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('g', 76, 24)
            ];
            assert.isTrue(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.TreeHelpers.canBuildTreesFromEvents(data));
        });
        it('returns false if a pair of events (e1, e2) exists such that e1 overlaps with e2 without one fully containing the other', function() {
            var data = [
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('a', 0, 100),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('b', 0, 50),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('c', 0, 25),
                // d overlaps with b but isn't fully contained by it.
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('d', 26, 50),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('e', 51, 49),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('f', 51, 24),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('g', 76, 24)
            ];
            assert.isFalse(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.TreeHelpers.canBuildTreesFromEvents(data));
        });
    });
}); //# sourceMappingURL=TreeHelpers.test.js.map


}),

}]);