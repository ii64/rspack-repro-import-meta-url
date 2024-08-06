"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_extras_FetchNodes_test_js"], {
"./models/trace/extras/FetchNodes.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
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





function nodeId(x) {
    return x;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('FetchNodes', function() {
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.clearAllMockConnectionResponseHandlers)();
            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.clearCacheForTesting();
            return [
                2
            ];
        });
    }));
    describe('DOMNodeLookup', function() {
        it('returns the DOM Node for the given node ID', /*#__PURE__*/ _async_to_generator(function() {
            var target, domModel, documentNode, domNode, traceData, result, doesNotExistResult;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // Create a mock target, dom model, document and node.
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                        domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMModel);
                        assert.exists(domModel);
                        documentNode = {
                            nodeId: nodeId(1)
                        };
                        domNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode(domModel);
                        domNode.id = nodeId(2);
                        // Set related CDP methods responses to return our mock document and node.
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend', function() {
                            return {
                                nodeIds: [
                                    domNode.id
                                ]
                            };
                        });
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.getDocument', function() {
                            return {
                                root: documentNode
                            };
                        });
                        // Register the mock document and node in DOMModel, these use the mock responses set above.
                        return [
                            4,
                            domModel.requestDocument()
                        ];
                    case 1:
                        _state.sent();
                        domModel.registerNode(domNode);
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'cls-single-frame.json.gz')
                        ];
                    case 2:
                        traceData = _state.sent().traceData;
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.domNodeForBackendNodeID(traceData, nodeId(2))
                        ];
                    case 3:
                        result = _state.sent();
                        assert.strictEqual(result, domNode);
                        // Clear the mock and re-set it to return nothing to test the bad path.
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.clearMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend');
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend', function() {
                            return {
                                nodeIds: []
                            };
                        });
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.domNodeForBackendNodeID(traceData, nodeId(99))
                        ];
                    case 4:
                        doesNotExistResult = _state.sent();
                        assert.isNull(doesNotExistResult);
                        return [
                            2
                        ];
                }
            });
        }));
        it('caches the call and does not look up a node more than once per model data', /*#__PURE__*/ _async_to_generator(function() {
            var target, domModel, documentNode, domNode, pushNodesSpy, modelData1, modelData2, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // Create a mock target, dom model, document and node.
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                        domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMModel);
                        assert.exists(domModel);
                        documentNode = {
                            nodeId: nodeId(1)
                        };
                        domNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode(domModel);
                        domNode.id = nodeId(2);
                        pushNodesSpy = sinon.spy(domModel, 'pushNodesByBackendIdsToFrontend');
                        // Set related CDP methods responses to return our mock document and node.
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend', function() {
                            return {
                                nodeIds: [
                                    domNode.id
                                ]
                            };
                        });
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.getDocument', function() {
                            return {
                                root: documentNode
                            };
                        });
                        return [
                            4,
                            domModel.requestDocument()
                        ];
                    case 1:
                        _state.sent();
                        domModel.registerNode(domNode);
                        // The model data is only used as a cache key, so we don't need it to be real to test this.
                        modelData1 = {};
                        modelData2 = {};
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.domNodeForBackendNodeID(modelData1, nodeId(2))
                        ];
                    case 2:
                        result = _state.sent();
                        assert.isNotNull(result);
                        // Look it up again to test the cache.
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.domNodeForBackendNodeID(modelData1, nodeId(2))
                        ];
                    case 3:
                        _state.sent();
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.domNodeForBackendNodeID(modelData2, nodeId(2))
                        ];
                    case 4:
                        _state.sent();
                        // The call with the new model data did not hit the cache.
                        assert.strictEqual(pushNodesSpy.callCount, 2);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can look up multiple nodes at once', /*#__PURE__*/ _async_to_generator(function() {
            var target, domModel, documentNode, domNodeId2, domNodeId3, modelData, result, entries;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // Create a mock target, dom model, document and node.
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                        domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMModel);
                        assert.exists(domModel);
                        documentNode = {
                            nodeId: nodeId(1)
                        };
                        domNodeId2 = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode(domModel);
                        domNodeId2.id = nodeId(2);
                        domNodeId3 = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode(domModel);
                        domNodeId3.id = nodeId(3);
                        // Set related CDP methods responses to return our mock document and node.
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend', function() {
                            return {
                                nodeIds: [
                                    domNodeId2.id,
                                    domNodeId3.id
                                ]
                            };
                        });
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.getDocument', function() {
                            return {
                                root: documentNode
                            };
                        });
                        return [
                            4,
                            domModel.requestDocument()
                        ];
                    case 1:
                        _state.sent();
                        domModel.registerNode(domNodeId2);
                        domModel.registerNode(domNodeId3);
                        // The model data is only used as a cache key, so we don't need it to be real to test this.
                        modelData = {};
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.domNodesForMultipleBackendNodeIds(modelData, [
                                nodeId(2),
                                nodeId(3)
                            ])
                        ];
                    case 2:
                        result = _state.sent();
                        assert.isNotNull(result);
                        entries = Array.from(result.entries());
                        assert.deepEqual(entries, [
                            [
                                nodeId(2),
                                domNodeId2
                            ],
                            [
                                nodeId(3),
                                domNodeId3
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('nodeIdsForEvent', function() {
        it('identifies node ids for a Layout event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, layoutEvent, nodeIds;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        layoutEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.isTraceEventLayout);
                        assert.isOk(layoutEvent);
                        nodeIds = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.nodeIdsForEvent(traceData, layoutEvent);
                        assert.deepEqual(Array.from(nodeIds), [
                            2
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('identifies node ids for a LayoutShift event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, layoutShiftEvent, nodeIds;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        layoutShiftEvent = traceData.LayoutShifts.clusters[0].events.at(0);
                        assert.isOk(layoutShiftEvent);
                        nodeIds = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.nodeIdsForEvent(traceData, layoutShiftEvent);
                        assert.deepEqual(Array.from(nodeIds), [
                            193,
                            195,
                            178,
                            189,
                            188
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('identifies node ids for a Paint event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, paintEvent, nodeIds;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        paintEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.isTraceEventPaint);
                        assert.isOk(paintEvent);
                        nodeIds = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.nodeIdsForEvent(traceData, paintEvent);
                        assert.deepEqual(Array.from(nodeIds), [
                            75
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('identifies node ids for a PaintImage event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, paintImageEvent, nodeIds;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        paintImageEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.isTraceEventPaintImage);
                        assert.isOk(paintImageEvent);
                        nodeIds = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.nodeIdsForEvent(traceData, paintImageEvent);
                        assert.deepEqual(Array.from(nodeIds), [
                            107
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('identifies node ids for a ScrollLayer event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, scrollLayerEvent, nodeIds;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'extension-tracks-and-marks.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        scrollLayerEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.isTraceEventScrollLayer);
                        assert.isOk(scrollLayerEvent);
                        nodeIds = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.nodeIdsForEvent(traceData, scrollLayerEvent);
                        assert.deepEqual(Array.from(nodeIds), [
                            4
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('identifies node ids for a DecodeImage event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, decodeImageEvent, nodeIds;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        decodeImageEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.isTraceEventDecodeImage);
                        assert.isOk(decodeImageEvent);
                        nodeIds = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.nodeIdsForEvent(traceData, decodeImageEvent);
                        assert.deepEqual(Array.from(nodeIds), [
                            240
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('identifies node ids for a DrawLazyPixelRef event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, drawLazyPixelRefEvent, nodeIds;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        drawLazyPixelRefEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.isTraceEventDrawLazyPixelRef);
                        assert.isOk(drawLazyPixelRefEvent);
                        nodeIds = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.nodeIdsForEvent(traceData, drawLazyPixelRefEvent);
                        assert.deepEqual(Array.from(nodeIds), [
                            212
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('identifies node ids for a MarkLCP event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, lcpCandidateEvent, nodeIds;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        lcpCandidateEvent = traceData.PageLoadMetrics.allMarkerEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.isTraceEventLargestContentfulPaintCandidate);
                        assert.isOk(lcpCandidateEvent);
                        nodeIds = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.nodeIdsForEvent(traceData, lcpCandidateEvent);
                        assert.deepEqual(Array.from(nodeIds), [
                            209
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('LayoutShifts', function() {
        it('returns a list of sources for the given event', /*#__PURE__*/ _async_to_generator(function() {
            var target, domModel, documentNode, domNode, modelData, event, sources;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // Create a mock target, dom model, document and node.
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                        domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMModel);
                        assert.exists(domModel);
                        documentNode = {
                            nodeId: 1
                        };
                        domNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode(domModel);
                        domNode.id = 2;
                        // Set related CDP methods responses to return our mock document and node.
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend', function() {
                            return {
                                nodeIds: [
                                    domNode.id
                                ]
                            };
                        });
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.getDocument', function() {
                            return {
                                root: documentNode
                            };
                        });
                        // Register the mock document and node in DOMModel, these use the mock responses set above.
                        return [
                            4,
                            domModel.requestDocument()
                        ];
                    case 1:
                        _state.sent();
                        domModel.registerNode(domNode);
                        modelData = {};
                        event = {
                            args: {
                                data: {
                                    impacted_nodes: [
                                        {
                                            node_id: 1,
                                            old_rect: [
                                                0,
                                                0,
                                                10,
                                                10
                                            ],
                                            new_rect: [
                                                0,
                                                0,
                                                20,
                                                20
                                            ]
                                        }
                                    ]
                                }
                            }
                        };
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.sourcesForLayoutShift(modelData, event)
                        ];
                    case 2:
                        sources = _state.sent();
                        assert.lengthOf(sources, 1);
                        assert.deepEqual(sources.at(0), {
                            node: domNode,
                            previousRect: new DOMRect(0, 0, 10, 10),
                            currentRect: new DOMRect(0, 0, 20, 20)
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('returns normalized nodes if we can calculate the window.devicePixelRatio', /*#__PURE__*/ _async_to_generator(function() {
            var impactedNodes, mockShift, modelData, normalized;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Runtime.evaluate', function() {
                            return {
                                result: {
                                    value: 4,
                                    type: 'number'
                                }
                            };
                        });
                        impactedNodes = [
                            {
                                new_rect: [
                                    0,
                                    0,
                                    40,
                                    80
                                ],
                                node_id: 1,
                                old_rect: [
                                    20,
                                    20,
                                    40,
                                    80
                                ]
                            },
                            {
                                new_rect: [
                                    10,
                                    10,
                                    10,
                                    10
                                ],
                                node_id: 1,
                                old_rect: [
                                    0,
                                    0,
                                    10,
                                    10
                                ]
                            }
                        ];
                        mockShift = {
                            args: {
                                data: {
                                    impacted_nodes: impactedNodes
                                }
                            }
                        };
                        modelData = {};
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.normalizedImpactedNodesForLayoutShift(modelData, mockShift)
                        ];
                    case 1:
                        normalized = _state.sent();
                        assert.deepEqual(normalized, [
                            {
                                new_rect: [
                                    0,
                                    0,
                                    10,
                                    20
                                ],
                                node_id: 1,
                                old_rect: [
                                    5,
                                    5,
                                    10,
                                    20
                                ]
                            },
                            {
                                new_rect: [
                                    2.5,
                                    2.5,
                                    2.5,
                                    2.5
                                ],
                                node_id: 1,
                                old_rect: [
                                    0,
                                    0,
                                    2.5,
                                    2.5
                                ]
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=FetchNodes.test.js.map


}),

}]);