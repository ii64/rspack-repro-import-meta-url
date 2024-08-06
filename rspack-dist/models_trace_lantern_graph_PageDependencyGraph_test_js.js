"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_lantern_graph_PageDependencyGraph_test_js"], {
"./models/trace/lantern/graph/PageDependencyGraph.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _lantern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lantern.js */ "./models/trace/lantern/lantern.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ts-nocheck TODO(crbug.com/348449529)
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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

var NetworkRequestTypes = _lantern_js__WEBPACK_IMPORTED_MODULE_0__.Types.NetworkRequestTypes;
var PageDependencyGraph = _lantern_js__WEBPACK_IMPORTED_MODULE_0__.Graph.PageDependencyGraph;
function createRequest(requestId, url) {
    var rendererStartTime = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, initiator = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, resourceType = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : NetworkRequestTypes.Document, fromWorker = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
    var networkEndTime = rendererStartTime + 50;
    return {
        requestId: requestId,
        url: url,
        rendererStartTime: rendererStartTime,
        networkEndTime: networkEndTime,
        initiator: initiator,
        resourceType: resourceType,
        fromWorker: fromWorker
    };
}
var TOPLEVEL_TASK_NAME = 'TaskQueueManager::ProcessTaskFromWorkQueue';
describe('PageDependencyGraph', function() {
    var addTaskEvents = function addTaskEvents(startTs, duration, evts) {
        var mainEvent = {
            name: TOPLEVEL_TASK_NAME,
            tid: 1,
            ts: startTs * 1000,
            dur: duration * 1000,
            args: {}
        };
        traceEvents.push(mainEvent);
        var i = 0;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = evts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var evt = _step.value;
                i++;
                traceEvents.push({
                    name: evt.name,
                    ts: evt.ts * 1000 || startTs * 1000 + i,
                    args: {
                        data: evt.data
                    }
                });
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
    };
    var traceEvents;
    var url;
    beforeEach(function() {
        traceEvents = [];
        url = {
            requestedUrl: 'https://example.com/',
            mainDocumentUrl: 'https://example.com/'
        };
    });
    describe('#getNetworkNodeOutput', function() {
        var request1 = createRequest(1, 'https://example.com/');
        var request2 = createRequest(2, 'https://example.com/page');
        var request3 = createRequest(3, 'https://example.com/page');
        var networkRequests = [
            request1,
            request2,
            request3
        ];
        it('should create network nodes', function() {
            var networkNodeOutput = PageDependencyGraph.getNetworkNodeOutput(networkRequests);
            for(var i = 0; i < networkRequests.length; i++){
                var node = networkNodeOutput.nodes[i];
                assert.ok(node, "did not create node at index ".concat(i));
                assert.strictEqual(node.id, i + 1);
                assert.strictEqual(node.type, 'network');
                assert.strictEqual(node.request, networkRequests[i]);
            }
        });
        it('should ignore worker requests', function() {
            var workerRequest = createRequest(4, 'https://example.com/worker.js', 0, null, 'Script', true);
            var recordsWithWorker = _to_consumable_array(networkRequests).concat([
                workerRequest
            ]);
            var networkNodeOutput = PageDependencyGraph.getNetworkNodeOutput(recordsWithWorker);
            expect(networkNodeOutput.nodes).to.have.lengthOf(3);
            expect(networkNodeOutput.nodes.map(function(node) {
                return node.request;
            })).not.contain(workerRequest);
        });
        it('should index nodes by ID', function() {
            var networkNodeOutput = PageDependencyGraph.getNetworkNodeOutput(networkRequests);
            var indexedById = networkNodeOutput.idToNodeMap;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = networkRequests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var request = _step.value;
                    assert.strictEqual(indexedById.get(request.requestId).request, request);
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
        });
        it('should index nodes by URL', function() {
            var networkNodeOutput = PageDependencyGraph.getNetworkNodeOutput(networkRequests);
            var nodes = networkNodeOutput.nodes;
            var indexedByUrl = networkNodeOutput.urlToNodeMap;
            assert.deepEqual(indexedByUrl.get('https://example.com/'), [
                nodes[0]
            ]);
            assert.deepEqual(indexedByUrl.get('https://example.com/page'), [
                nodes[1],
                nodes[2]
            ]);
        });
        it('should index nodes by frame', function() {
            var networkNodeOutput = PageDependencyGraph.getNetworkNodeOutput([
                _object_spread_props(_object_spread({}, createRequest(1, 'https://example.com/')), {
                    documentURL: 'https://example.com/',
                    frameId: 'A'
                }),
                _object_spread_props(_object_spread({}, createRequest(2, 'https://example.com/page')), {
                    documentURL: 'https://example.com/',
                    frameId: 'A'
                }),
                _object_spread_props(_object_spread({}, createRequest(3, 'https://example.com/page2')), {
                    documentURL: 'https://example.com/page2',
                    frameId: 'C',
                    resourceType: NetworkRequestTypes.XHR
                }),
                _object_spread_props(_object_spread({}, createRequest(4, 'https://example.com/page3')), {
                    documentURL: 'https://example.com/page3',
                    frameId: 'D'
                }),
                _object_spread_props(_object_spread({}, createRequest(4, 'https://example.com/page4')), {
                    documentURL: 'https://example.com/page4',
                    frameId: undefined
                }),
                _object_spread_props(_object_spread({}, createRequest(4, 'https://example.com/page5')), {
                    documentURL: 'https://example.com/page5',
                    frameId: 'collision'
                }),
                _object_spread_props(_object_spread({}, createRequest(4, 'https://example.com/page6')), {
                    documentURL: 'https://example.com/page6',
                    frameId: 'collision'
                })
            ]);
            var nodes = networkNodeOutput.nodes;
            var indexedByFrame = networkNodeOutput.frameIdToNodeMap;
            expect(_to_consumable_array(indexedByFrame.entries())).deep.equals([
                [
                    'A',
                    nodes[0]
                ],
                [
                    'D',
                    nodes[3]
                ],
                [
                    'collision',
                    null
                ]
            ]);
        });
    });
    describe('#getCPUNodes', function() {
        it('should create CPU nodes', function() {
            addTaskEvents(0, 100, [
                {
                    name: 'MyCustomEvent'
                },
                {
                    name: 'OtherEvent'
                },
                {
                    name: 'OutsideTheWindow',
                    ts: 200
                },
                {
                    name: 'OrphanedEvent'
                }
            ]);
            addTaskEvents(250, 50, [
                {
                    name: 'LaterEvent'
                }
            ]);
            assert.strictEqual(traceEvents.length, 7);
            var nodes = PageDependencyGraph.getCPUNodes(traceEvents);
            assert.strictEqual(nodes.length, 2);
            var node1 = nodes[0];
            assert.strictEqual(node1.id, '1.0');
            assert.strictEqual(node1.type, 'cpu');
            assert.strictEqual(node1.event, traceEvents[0]);
            assert.strictEqual(node1.childEvents.length, 2);
            assert.strictEqual(node1.childEvents[1].name, 'OtherEvent');
            var node2 = nodes[1];
            assert.strictEqual(node2.id, '1.250000');
            assert.strictEqual(node2.type, 'cpu');
            assert.strictEqual(node2.event, traceEvents[5]);
            assert.strictEqual(node2.childEvents.length, 1);
            assert.strictEqual(node2.childEvents[0].name, 'LaterEvent');
        });
        it('should correct overlapping tasks', function() {
            addTaskEvents(0, 500, [
                {
                    name: 'MyCustomEvent'
                },
                {
                    name: 'OtherEvent'
                }
            ]);
            addTaskEvents(400, 50, [
                {
                    name: 'OverlappingEvent'
                }
            ]);
            assert.strictEqual(traceEvents.length, 5);
            var nodes = PageDependencyGraph.getCPUNodes(traceEvents);
            assert.strictEqual(nodes.length, 2);
            var node1 = nodes[0];
            assert.strictEqual(node1.id, '1.0');
            assert.strictEqual(node1.type, 'cpu');
            assert.strictEqual(node1.event, traceEvents[0]);
            assert.strictEqual(node1.childEvents.length, 2);
            assert.strictEqual(node1.childEvents[0].name, 'MyCustomEvent');
            assert.strictEqual(node1.childEvents[1].name, 'OtherEvent');
            var node2 = nodes[1];
            assert.strictEqual(node2.id, '1.400000');
            assert.strictEqual(node2.type, 'cpu');
            assert.strictEqual(node2.event, traceEvents[3]);
            assert.strictEqual(node2.childEvents.length, 1);
            assert.strictEqual(node2.childEvents[0].name, 'OverlappingEvent');
        });
    });
    describe('#createGraph', function() {
        it('should compute a simple network graph', function() {
            var request1 = createRequest(1, 'https://example.com/', 0);
            var request2 = createRequest(2, 'https://example.com/page', 5);
            var request3 = createRequest(3, 'https://example.com/page2', 5);
            var request4 = createRequest(4, 'https://example.com/page3', 10, {
                url: 'https://example.com/page'
            });
            var networkRequests = [
                request1,
                request2,
                request3,
                request4
            ];
            addTaskEvents(0, 0, []);
            var graph = PageDependencyGraph.createGraph(traceEvents, networkRequests, url);
            var nodes = [];
            graph.traverse(function(node) {
                return nodes.push(node);
            });
            assert.strictEqual(nodes.length, 4);
            assert.deepEqual(nodes.map(function(node) {
                return node.id;
            }), [
                1,
                2,
                3,
                4
            ]);
            assert.deepEqual(nodes[0].getDependencies(), []);
            assert.deepEqual(nodes[1].getDependencies(), [
                nodes[0]
            ]);
            assert.deepEqual(nodes[2].getDependencies(), [
                nodes[0]
            ]);
            assert.deepEqual(nodes[3].getDependencies(), [
                nodes[1]
            ]);
        });
        it('should compute a simple network and CPU graph', function() {
            var request1 = createRequest(1, 'https://example.com/', 0);
            var request2 = createRequest(2, 'https://example.com/page', 50);
            var request3 = createRequest(3, 'https://example.com/page2', 50);
            var request4 = createRequest(4, 'https://example.com/page3', 300, null, NetworkRequestTypes.XHR);
            var networkRequests = [
                request1,
                request2,
                request3,
                request4
            ];
            addTaskEvents(200, 200, [
                {
                    name: 'EvaluateScript',
                    data: {
                        url: 'https://example.com/page'
                    }
                },
                {
                    name: 'ResourceSendRequest',
                    data: {
                        requestId: 4
                    }
                }
            ]);
            addTaskEvents(700, 50, [
                {
                    name: 'InvalidateLayout',
                    data: {
                        stackTrace: [
                            {
                                url: 'https://example.com/page2'
                            }
                        ]
                    }
                },
                {
                    name: 'XHRReadyStateChange',
                    data: {
                        readyState: 4,
                        url: 'https://example.com/page3'
                    }
                }
            ]);
            var graph = PageDependencyGraph.createGraph(traceEvents, networkRequests, url);
            var nodes = [];
            graph.traverse(function(node) {
                return nodes.push(node);
            });
            var getIds = function(nodes) {
                return nodes.map(function(node) {
                    return node.id;
                });
            };
            var getDependencyIds = function(node) {
                return getIds(node.getDependencies());
            };
            assert.strictEqual(nodes.length, 6);
            assert.deepEqual(getIds(nodes), [
                1,
                2,
                3,
                4,
                '1.200000',
                '1.700000'
            ]);
            assert.deepEqual(getDependencyIds(nodes[0]), []);
            assert.deepEqual(getDependencyIds(nodes[1]), [
                1
            ]);
            assert.deepEqual(getDependencyIds(nodes[2]), [
                1
            ]);
            assert.deepEqual(getDependencyIds(nodes[3]), [
                1,
                '1.200000'
            ]);
            assert.deepEqual(getDependencyIds(nodes[4]), [
                2
            ]);
            assert.deepEqual(getDependencyIds(nodes[5]), [
                3,
                4
            ]);
        });
        it('should compute a network graph with duplicate URLs', function() {
            var request1 = createRequest(1, 'https://example.com/', 0);
            var request2 = createRequest(2, 'https://example.com/page', 5);
            var request3 = createRequest(3, 'https://example.com/page', 5); // duplicate URL
            var request4 = createRequest(4, 'https://example.com/page3', 10, {
                url: 'https://example.com/page'
            });
            var networkRequests = [
                request1,
                request2,
                request3,
                request4
            ];
            addTaskEvents(0, 0, []);
            var graph = PageDependencyGraph.createGraph(traceEvents, networkRequests, url);
            var nodes = [];
            graph.traverse(function(node) {
                return nodes.push(node);
            });
            assert.strictEqual(nodes.length, 4);
            assert.deepEqual(nodes.map(function(node) {
                return node.id;
            }), [
                1,
                2,
                3,
                4
            ]);
            assert.deepEqual(nodes[0].getDependencies(), []);
            assert.deepEqual(nodes[1].getDependencies(), [
                nodes[0]
            ]);
            assert.deepEqual(nodes[2].getDependencies(), [
                nodes[0]
            ]);
            assert.deepEqual(nodes[3].getDependencies(), [
                nodes[0]
            ]); // should depend on rootNode instead
        });
        it('should be forgiving without cyclic dependencies', function() {
            var request1 = createRequest(1, 'https://example.com/', 0);
            var request2 = createRequest(2, 'https://example.com/page', 250, null, NetworkRequestTypes.XHR);
            var request3 = createRequest(3, 'https://example.com/page2', 210);
            var request4 = createRequest(4, 'https://example.com/page3', 590);
            var request5 = createRequest(5, 'https://example.com/page4', 595, null, NetworkRequestTypes.XHR);
            var networkRequests = [
                request1,
                request2,
                request3,
                request4,
                request5
            ];
            addTaskEvents(200, 200, [
                // CPU 1.2 should depend on Network 1
                {
                    name: 'EvaluateScript',
                    data: {
                        url: 'https://example.com/'
                    }
                },
                // Network 2 should depend on CPU 1.2, but 1.2 should not depend on Network 1
                {
                    name: 'ResourceSendRequest',
                    data: {
                        requestId: 2
                    }
                },
                {
                    name: 'XHRReadyStateChange',
                    data: {
                        readyState: 4,
                        url: 'https://example.com/page'
                    }
                },
                // CPU 1.2 should not depend on Network 3 because it starts after CPU 1.2
                {
                    name: 'EvaluateScript',
                    data: {
                        url: 'https://example.com/page2'
                    }
                }
            ]);
            addTaskEvents(600, 150, [
                // CPU 1.6 should depend on Network 4 even though it ends at 410ms
                {
                    name: 'InvalidateLayout',
                    data: {
                        stackTrace: [
                            {
                                url: 'https://example.com/page3'
                            }
                        ]
                    }
                },
                // Network 5 should not depend on CPU 1.6 because it started before CPU 1.6
                {
                    name: 'ResourceSendRequest',
                    data: {
                        requestId: 5
                    }
                }
            ]);
            var graph = PageDependencyGraph.createGraph(traceEvents, networkRequests, url);
            var nodes = [];
            graph.traverse(function(node) {
                return nodes.push(node);
            });
            var getDependencyIds = function(node) {
                return node.getDependencies().map(function(node) {
                    return node.id;
                });
            };
            assert.strictEqual(nodes.length, 7);
            assert.deepEqual(getDependencyIds(nodes[0]), []);
            assert.deepEqual(getDependencyIds(nodes[1]), [
                1,
                '1.200000'
            ]);
            assert.deepEqual(getDependencyIds(nodes[2]), [
                1
            ]);
            assert.deepEqual(getDependencyIds(nodes[3]), [
                1
            ]);
            assert.deepEqual(getDependencyIds(nodes[4]), [
                1
            ]);
            assert.deepEqual(getDependencyIds(nodes[5]), [
                1
            ]);
            assert.deepEqual(getDependencyIds(nodes[6]), [
                4
            ]);
        });
        it('should not install timer dependency on itself', function() {
            var request1 = createRequest(1, 'https://example.com/', 0);
            var networkRequests = [
                request1
            ];
            addTaskEvents(200, 200, [
                // CPU 1.2 should depend on Network 1
                {
                    name: 'EvaluateScript',
                    data: {
                        url: 'https://example.com/'
                    }
                },
                // CPU 1.2 will install and fire it's own timer, but should not depend on itself
                {
                    name: 'TimerInstall',
                    data: {
                        timerId: 'timer1'
                    }
                },
                {
                    name: 'TimerFire',
                    data: {
                        timerId: 'timer1'
                    }
                }
            ]);
            var graph = PageDependencyGraph.createGraph(traceEvents, networkRequests, url);
            var nodes = [];
            graph.traverse(function(node) {
                return nodes.push(node);
            });
            var getDependencyIds = function(node) {
                return node.getDependencies().map(function(node) {
                    return node.id;
                });
            };
            assert.strictEqual(nodes.length, 2);
            assert.deepEqual(getDependencyIds(nodes[0]), []);
            assert.deepEqual(getDependencyIds(nodes[1]), [
                1
            ]);
        });
        it('should prune short tasks', function() {
            var request0 = createRequest(0, 'https://example.com/page0', 0);
            var request1 = createRequest(1, 'https://example.com/', 100, null, NetworkRequestTypes.Script);
            var request2 = createRequest(2, 'https://example.com/page', 200, null, NetworkRequestTypes.XHR);
            var request3 = createRequest(3, 'https://example.com/page2', 300, null, NetworkRequestTypes.Script);
            var request4 = createRequest(4, 'https://example.com/page3', 400, null, NetworkRequestTypes.XHR);
            var networkRequests = [
                request0,
                request1,
                request2,
                request3,
                request4
            ];
            url = {
                requestedUrl: 'https://example.com/page0',
                mainDocumentUrl: 'https://example.com/page0'
            };
            // Long task, should be kept in the output.
            addTaskEvents(120, 50, [
                {
                    name: 'EvaluateScript',
                    data: {
                        url: 'https://example.com/'
                    }
                },
                {
                    name: 'ResourceSendRequest',
                    data: {
                        requestId: 2
                    }
                },
                {
                    name: 'XHRReadyStateChange',
                    data: {
                        readyState: 4,
                        url: 'https://example.com/page'
                    }
                }
            ]);
            // Short task, should be pruned, but the 3->4 relationship should be retained
            addTaskEvents(350, 5, [
                {
                    name: 'EvaluateScript',
                    data: {
                        url: 'https://example.com/page2'
                    }
                },
                {
                    name: 'ResourceSendRequest',
                    data: {
                        requestId: 4
                    }
                },
                {
                    name: 'XHRReadyStateChange',
                    data: {
                        readyState: 4,
                        url: 'https://example.com/page3'
                    }
                }
            ]);
            var graph = PageDependencyGraph.createGraph(traceEvents, networkRequests, url);
            var nodes = [];
            graph.traverse(function(node) {
                return nodes.push(node);
            });
            var getDependencyIds = function(node) {
                return node.getDependencies().map(function(node) {
                    return node.id;
                });
            };
            assert.strictEqual(nodes.length, 6);
            assert.deepEqual(getDependencyIds(nodes[0]), []);
            assert.deepEqual(getDependencyIds(nodes[1]), [
                0
            ]);
            assert.deepEqual(getDependencyIds(nodes[2]), [
                0,
                '1.120000'
            ]);
            assert.deepEqual(getDependencyIds(nodes[3]), [
                0
            ]);
            assert.deepEqual(getDependencyIds(nodes[4]), [
                0,
                3
            ]);
            assert.strictEqual('1.120000', nodes[5].id);
            assert.deepEqual(getDependencyIds(nodes[5]), [
                1
            ]);
        });
        it('should not prune highly-connected short tasks', function() {
            var request0 = createRequest(0, 'https://example.com/page0', 0);
            var request1 = _object_spread_props(_object_spread({}, createRequest(1, 'https://example.com/', 100, null, NetworkRequestTypes.Document)), {
                documentURL: 'https://example.com/',
                frameId: 'frame1'
            });
            var request2 = _object_spread_props(_object_spread({}, createRequest(2, 'https://example.com/page', 200, null, NetworkRequestTypes.Script)), {
                documentURL: 'https://example.com/',
                frameId: 'frame1'
            });
            var request3 = createRequest(3, 'https://example.com/page2', 300, null, NetworkRequestTypes.XHR);
            var request4 = createRequest(4, 'https://example.com/page3', 400, null, NetworkRequestTypes.XHR);
            var networkRequests = [
                request0,
                request1,
                request2,
                request3,
                request4
            ];
            url = {
                requestedUrl: 'https://example.com/page0',
                mainDocumentUrl: 'https://example.com/page0'
            };
            // Short task, evaluates script (2) and sends two XHRs.
            addTaskEvents(220, 5, [
                {
                    name: 'EvaluateScript',
                    data: {
                        url: 'https://example.com/page',
                        frame: 'frame1'
                    }
                },
                {
                    name: 'ResourceSendRequest',
                    data: {
                        requestId: 3
                    }
                },
                {
                    name: 'XHRReadyStateChange',
                    data: {
                        readyState: 4,
                        url: 'https://example.com/page2'
                    }
                },
                {
                    name: 'ResourceSendRequest',
                    data: {
                        requestId: 4
                    }
                },
                {
                    name: 'XHRReadyStateChange',
                    data: {
                        readyState: 4,
                        url: 'https://example.com/page3'
                    }
                }
            ]);
            var graph = PageDependencyGraph.createGraph(traceEvents, networkRequests, url);
            var nodes = [];
            graph.traverse(function(node) {
                return nodes.push(node);
            });
            var getDependencyIds = function(node) {
                return node.getDependencies().map(function(node) {
                    return node.id;
                });
            };
            assert.strictEqual(nodes.length, 6);
            assert.deepEqual(getDependencyIds(nodes[0]), []);
            assert.deepEqual(getDependencyIds(nodes[1]), [
                0
            ]);
            assert.deepEqual(getDependencyIds(nodes[2]), [
                0
            ]);
            assert.deepEqual(getDependencyIds(nodes[3]), [
                0,
                '1.220000'
            ]);
            assert.deepEqual(getDependencyIds(nodes[4]), [
                0,
                '1.220000'
            ]);
            assert.strictEqual('1.220000', nodes[5].id);
            assert.deepEqual(getDependencyIds(nodes[5]), [
                1,
                2
            ]);
        });
        it('should not prune short, first tasks of critical events', function() {
            var request0 = createRequest(0, 'https://example.com/page0', 0);
            var networkRequests = [
                request0
            ];
            url = {
                requestedUrl: 'https://example.com/page0',
                mainDocumentUrl: 'https://example.com/page0'
            };
            var makeShortEvent = function(firstEventName) {
                var startTs = traceEvents.length * 100;
                addTaskEvents(startTs, 5, [
                    {
                        name: firstEventName,
                        data: {
                            url: 'https://example.com/page0'
                        }
                    }
                ]);
            };
            var criticalEventNames = [
                'Paint',
                'Layout',
                'ParseHTML'
            ];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = criticalEventNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var eventName = _step.value;
                    makeShortEvent(eventName);
                    makeShortEvent(eventName);
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
            var graph = PageDependencyGraph.createGraph(traceEvents, networkRequests, url);
            var cpuNodes = [];
            graph.traverse(function(node) {
                return node.type === 'cpu' && cpuNodes.push(node);
            });
            expect(cpuNodes.map(function(node) {
                return {
                    id: node.id,
                    name: node.childEvents[0].name
                };
            })).deep.equals([
                {
                    id: '1.0',
                    name: 'Paint'
                },
                {
                    // ID jumps by 4 between each because each node has 2 CPU tasks and we skip the 2nd of each event type
                    id: '1.400000',
                    name: 'Layout'
                },
                {
                    id: '1.800000',
                    name: 'ParseHTML'
                }
            ]);
        });
        it('should set isMainDocument on request with mainDocumentUrl', function() {
            var request1 = createRequest(1, 'https://example.com/', 0, null, NetworkRequestTypes.Other);
            var request2 = createRequest(2, 'https://example.com/page', 5, null, NetworkRequestTypes.Document);
            // Add in another unrelated + early request to make sure we pick the correct chain
            var request3 = createRequest(3, 'https://example.com/page2', 0, null, NetworkRequestTypes.Other);
            request2.redirects = [
                request1
            ];
            var networkRequests = [
                request1,
                request2,
                request3
            ];
            url = {
                requestedUrl: 'https://example.com/',
                mainDocumentUrl: 'https://example.com/page'
            };
            addTaskEvents(0, 0, []);
            var graph = PageDependencyGraph.createGraph(traceEvents, networkRequests, url);
            var nodes = [];
            graph.traverse(function(node) {
                return nodes.push(node);
            });
            assert.strictEqual(nodes.length, 3);
            assert.strictEqual(nodes[0].id, 1);
            assert.strictEqual(nodes[0].isMainDocument(), false);
            assert.strictEqual(nodes[1].isMainDocument(), true);
            assert.strictEqual(nodes[2].isMainDocument(), false);
        });
        it('should link up script initiators', function() {
            var request1 = createRequest(1, 'https://example.com/', 0);
            var request2 = createRequest(2, 'https://example.com/page', 5);
            var request3 = createRequest(3, 'https://example.com/page2', 5);
            var request4 = createRequest(4, 'https://example.com/page3', 20);
            // Set multiple initiator requests through script stack.
            request4.initiator = {
                type: 'script',
                stack: {
                    callFrames: [
                        {
                            url: 'https://example.com/page'
                        }
                    ],
                    parent: {
                        parent: {
                            callFrames: [
                                {
                                    url: 'https://example.com/page2'
                                }
                            ]
                        }
                    }
                }
            };
            // Also set the initiatorRequest that Lighthouse's network-recorder.js creates.
            // This should be ignored and only used as a fallback.
            request4.initiatorRequest = request1;
            var networkRequests = [
                request1,
                request2,
                request3,
                request4
            ];
            addTaskEvents(0, 0, []);
            var graph = PageDependencyGraph.createGraph(traceEvents, networkRequests, url);
            var nodes = [];
            graph.traverse(function(node) {
                return nodes.push(node);
            });
            assert.strictEqual(nodes.length, 4);
            assert.deepEqual(nodes.map(function(node) {
                return node.id;
            }), [
                1,
                2,
                3,
                4
            ]);
            assert.deepEqual(nodes[0].getDependencies(), []);
            assert.deepEqual(nodes[1].getDependencies(), [
                nodes[0]
            ]);
            assert.deepEqual(nodes[2].getDependencies(), [
                nodes[0]
            ]);
            assert.deepEqual(nodes[3].getDependencies(), [
                nodes[1],
                nodes[2]
            ]);
        });
        it('should link up script initiators only when timing is valid', function() {
            var request1 = createRequest(1, 'https://example.com/', 0);
            var request2 = createRequest(2, 'https://example.com/page', 500);
            var request3 = createRequest(3, 'https://example.com/page2', 500);
            var request4 = createRequest(4, 'https://example.com/page3', 20);
            request4.initiator = {
                type: 'script',
                stack: {
                    callFrames: [
                        {
                            url: 'https://example.com/page'
                        }
                    ],
                    parent: {
                        parent: {
                            callFrames: [
                                {
                                    url: 'https://example.com/page2'
                                }
                            ]
                        }
                    }
                }
            };
            var networkRequests = [
                request1,
                request2,
                request3,
                request4
            ];
            addTaskEvents(0, 0, []);
            var graph = PageDependencyGraph.createGraph(traceEvents, networkRequests, url);
            var nodes = [];
            graph.traverse(function(node) {
                return nodes.push(node);
            });
            assert.strictEqual(nodes.length, 4);
            assert.deepEqual(nodes.map(function(node) {
                return node.id;
            }), [
                1,
                2,
                3,
                4
            ]);
            assert.deepEqual(nodes[0].getDependencies(), []);
            assert.deepEqual(nodes[1].getDependencies(), [
                nodes[0]
            ]);
            assert.deepEqual(nodes[2].getDependencies(), [
                nodes[0]
            ]);
            assert.deepEqual(nodes[3].getDependencies(), [
                nodes[0]
            ]);
        });
        it('should link up script initiators with prefetch requests', function() {
            var request1 = createRequest(1, 'https://a.com/1', 0);
            var request2Prefetch = createRequest(2, 'https://a.com/js', 5);
            var request2Fetch = createRequest(3, 'https://a.com/js', 10);
            var request3 = createRequest(4, 'https://a.com/4', 20);
            // Set the initiator to an ambiguous URL (there are 2 requests for https://a.com/js)
            request3.initiator = {
                type: 'script',
                stack: {
                    callFrames: [
                        {
                            url: 'https://a.com/js'
                        }
                    ],
                    parent: {
                        parent: {
                            callFrames: [
                                {
                                    url: 'js'
                                }
                            ]
                        }
                    }
                }
            };
            // Set the initiatorRequest that it should fallback to.
            request3.initiatorRequest = request2Fetch;
            var networkRequests = [
                request1,
                request2Prefetch,
                request2Fetch,
                request3
            ];
            url = {
                requestedUrl: 'https://a.com/1',
                mainDocumentUrl: 'https://a.com/1'
            };
            addTaskEvents(0, 0, []);
            var graph = PageDependencyGraph.createGraph(traceEvents, networkRequests, url);
            var nodes = [];
            graph.traverse(function(node) {
                return nodes.push(node);
            });
            assert.strictEqual(nodes.length, 4);
            assert.deepEqual(nodes.map(function(node) {
                return node.id;
            }), [
                1,
                2,
                3,
                4
            ]);
            assert.deepEqual(nodes[0].getDependencies(), []);
            assert.deepEqual(nodes[1].getDependencies(), [
                nodes[0]
            ]);
            assert.deepEqual(nodes[2].getDependencies(), [
                nodes[0]
            ]);
            assert.deepEqual(nodes[3].getDependencies(), [
                nodes[2]
            ]);
        });
        it('should not link up initiators with circular dependencies', function() {
            var rootRequest = createRequest(1, 'https://a.com', 0);
            // jsRequest1 initiated by jsRequest2
            //              *AND*
            // jsRequest2 initiated by jsRequest1
            var jsRequest1 = createRequest(2, 'https://a.com/js1', 1, {
                url: 'https://a.com/js2'
            });
            var jsRequest2 = createRequest(3, 'https://a.com/js2', 1, {
                url: 'https://a.com/js1'
            });
            var networkRequests = [
                rootRequest,
                jsRequest1,
                jsRequest2
            ];
            url = {
                requestedUrl: 'https://a.com',
                mainDocumentUrl: 'https://a.com'
            };
            addTaskEvents(0, 0, []);
            var graph = PageDependencyGraph.createGraph(traceEvents, networkRequests, url);
            var nodes = [];
            graph.traverse(function(node) {
                return nodes.push(node);
            });
            nodes.sort(function(a, b) {
                return a.id - b.id;
            });
            assert.strictEqual(nodes.length, 3);
            assert.deepEqual(nodes.map(function(node) {
                return node.id;
            }), [
                1,
                2,
                3
            ]);
            assert.deepEqual(nodes[0].getDependencies(), []);
            // We don't know which of the initiators to trust in a cycle, so for now we
            // trust the earliest one (mostly because it's simplest).
            // In the wild so far we've only seen this for self-referential relationships.
            // If the evidence changes, then feel free to change these expectations :)
            assert.deepEqual(nodes[1].getDependencies(), [
                nodes[2]
            ]);
            assert.deepEqual(nodes[2].getDependencies(), [
                nodes[0]
            ]);
        });
        it('should not link up initiatorRequests with circular dependencies', function() {
            var rootRequest = createRequest(1, 'https://a.com', 0);
            // jsRequest1 initiated by jsRequest2
            //              *AND*
            // jsRequest2 initiated by jsRequest1
            var jsRequest1 = createRequest(2, 'https://a.com/js1', 1);
            var jsRequest2 = createRequest(3, 'https://a.com/js2', 1);
            jsRequest1.initiatorRequest = jsRequest2;
            jsRequest2.initiatorRequest = jsRequest1;
            var networkRequests = [
                rootRequest,
                jsRequest1,
                jsRequest2
            ];
            url = {
                requestedUrl: 'https://a.com',
                mainDocumentUrl: 'https://a.com'
            };
            addTaskEvents(0, 0, []);
            var graph = PageDependencyGraph.createGraph(traceEvents, networkRequests, url);
            var nodes = [];
            graph.traverse(function(node) {
                return nodes.push(node);
            });
            nodes.sort(function(a, b) {
                return a.id - b.id;
            });
            assert.strictEqual(nodes.length, 3);
            assert.deepEqual(nodes.map(function(node) {
                return node.id;
            }), [
                1,
                2,
                3
            ]);
            assert.deepEqual(nodes[0].getDependencies(), []);
            assert.deepEqual(nodes[1].getDependencies(), [
                nodes[2]
            ]);
            assert.deepEqual(nodes[2].getDependencies(), [
                nodes[0]
            ]);
        });
        it('should find root if it is not the first node', function() {
            var request1 = createRequest(1, 'https://example.com/', 0, null, NetworkRequestTypes.Other);
            var request2 = createRequest(2, 'https://example.com/page', 5, null, NetworkRequestTypes.Document);
            var networkRequests = [
                request1,
                request2
            ];
            url = {
                requestedUrl: 'https://example.com/page',
                mainDocumentUrl: 'https://example.com/page'
            };
            // Evaluated before root request.
            addTaskEvents(0.1, 50, [
                {
                    name: 'EvaluateScript'
                }
            ]);
            var graph = PageDependencyGraph.createGraph(traceEvents, networkRequests, url);
            var nodes = [];
            graph.traverse(function(node) {
                return nodes.push(node);
            });
            assert.strictEqual(nodes.length, 1);
            assert.deepEqual(nodes.map(function(node) {
                return node.id;
            }), [
                2
            ]);
            assert.deepEqual(nodes[0].getDependencies(), []);
            assert.deepEqual(nodes[0].getDependents(), []);
        });
    });
}); //# sourceMappingURL=PageDependencyGraph.test.js.map


}),

}]);