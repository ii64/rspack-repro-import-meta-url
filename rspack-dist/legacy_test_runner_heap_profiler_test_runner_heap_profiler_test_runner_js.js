"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_heap_profiler_test_runner_heap_profiler_test_runner_js"], {
"./entrypoints/heap_snapshot_worker/HeapSnapshotWorkerDispatcher.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HeapSnapshotWorkerDispatcher: function() { return HeapSnapshotWorkerDispatcher; }
});
/* harmony import */var _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/heap_snapshot_model/heap_snapshot_model.js */ "./models/heap_snapshot_model/heap_snapshot_model.js");
/* harmony import */var _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllocationProfile.js */ "./entrypoints/heap_snapshot_worker/AllocationProfile.js");
/* harmony import */var _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeapSnapshot.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshot.js");
/* harmony import */var _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeapSnapshotLoader.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshotLoader.js");
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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

// We mirror what heap_snapshot_worker.ts does, but we can't use it here as we'd have a
// cyclic GN dependency otherwise.



var // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
_objects = /*#__PURE__*/ new WeakMap(), _postMessage = /*#__PURE__*/ new WeakMap();
var HeapSnapshotWorkerDispatcher = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotWorkerDispatcher(postMessage) {
        _class_call_check(this, HeapSnapshotWorkerDispatcher);
        _class_private_field_init(this, _objects, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _postMessage, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _objects, []);
        _class_private_field_set(this, _postMessage, postMessage);
    }
    _create_class(HeapSnapshotWorkerDispatcher, [
        {
            key: "sendEvent",
            value: function sendEvent(name, data) {
                _class_private_field_get(this, _postMessage).call(this, {
                    eventName: name,
                    data: data
                });
            }
        },
        {
            key: "dispatchMessage",
            value: function dispatchMessage(param) {
                var data = param.data;
                var response = {
                    callId: data.callId,
                    result: null,
                    error: undefined,
                    errorCallStack: undefined,
                    errorMethodName: undefined
                };
                try {
                    switch(data.disposition){
                        case 'createLoader':
                            _class_private_field_get(this, _objects)[data.objectId] = new _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_3__.HeapSnapshotLoader(this);
                            break;
                        case 'dispose':
                            {
                                delete _class_private_field_get(this, _objects)[data.objectId];
                                break;
                            }
                        case 'getter':
                            {
                                var object = _class_private_field_get(this, _objects)[data.objectId];
                                var result = object[data.methodName];
                                response.result = result;
                                break;
                            }
                        case 'factory':
                            {
                                var object1 = _class_private_field_get(this, _objects)[data.objectId];
                                var result1 = object1[data.methodName].apply(object1, data.methodArguments);
                                if (result1) {
                                    _class_private_field_get(this, _objects)[data.newObjectId] = result1;
                                }
                                response.result = Boolean(result1);
                                break;
                            }
                        case 'method':
                            {
                                var object2 = _class_private_field_get(this, _objects)[data.objectId];
                                response.result = object2[data.methodName].apply(object2, data.methodArguments);
                                break;
                            }
                        case 'evaluateForTest':
                            {
                                try {
                                    // Make 'HeapSnapshotWorker' and 'HeapSnapshotModel' available to web tests. 'eval' can't use 'import'.
                                    // @ts-ignore
                                    globalThis.HeapSnapshotWorker = {
                                        AllocationProfile: _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_1__,
                                        HeapSnapshot: _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__,
                                        HeapSnapshotLoader: _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_3__
                                    };
                                    // @ts-ignore
                                    globalThis.HeapSnapshotModel = _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__;
                                    response.result = self.eval(data.source);
                                } catch (error) {
                                    response.result = error.toString();
                                }
                                break;
                            }
                    }
                } catch (error) {
                    response.error = error.toString();
                    response.errorCallStack = error.stack;
                    if (data.methodName) {
                        response.errorMethodName = data.methodName;
                    }
                }
                _class_private_field_get(this, _postMessage).call(this, response);
            }
        }
    ]);
    return HeapSnapshotWorkerDispatcher;
} //# sourceMappingURL=HeapSnapshotWorkerDispatcher.js.map
();


}),
"./entrypoints/heap_snapshot_worker/heap_snapshot_worker.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AllocationProfile: function() { return /* reexport module object */ _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_0__; },
  HeapSnapshot: function() { return /* reexport module object */ _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_1__; },
  HeapSnapshotLoader: function() { return /* reexport module object */ _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_2__; },
  HeapSnapshotWorkerDispatcher: function() { return /* reexport module object */ _HeapSnapshotWorkerDispatcher_js__WEBPACK_IMPORTED_MODULE_3__; }
});
/* harmony import */var _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllocationProfile.js */ "./entrypoints/heap_snapshot_worker/AllocationProfile.js");
/* harmony import */var _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeapSnapshot.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshot.js");
/* harmony import */var _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeapSnapshotLoader.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshotLoader.js");
/* harmony import */var _HeapSnapshotWorkerDispatcher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeapSnapshotWorkerDispatcher.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshotWorkerDispatcher.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




 //# sourceMappingURL=heap_snapshot_worker.js.map


}),
"./legacy_test_runner/heap_profiler_test_runner/heap_profiler_test_runner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HeapProfilerTestRunner: function() { return HeapProfilerTestRunner; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _entrypoints_heap_snapshot_worker_heap_snapshot_worker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entrypoints/heap_snapshot_worker/heap_snapshot_worker.js */ "./entrypoints/heap_snapshot_worker/heap_snapshot_worker.js");
/* harmony import */var _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/profiler/profiler.js */ "./panels/profiler/profiler.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__);
// Copyright 2017 The Chromium Authors. All rights reserved.
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






/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var HeapProfilerTestRunner = {};
HeapProfilerTestRunner.createHeapSnapshotMockFactories = function() {
    HeapProfilerTestRunner.createJSHeapSnapshotMockObject = function() {
        var result = {
            rootNodeIndex: 0,
            nodeTypeOffset: 0,
            nodeNameOffset: 1,
            nodeEdgeCountOffset: 2,
            nodeFieldCount: 3,
            edgeFieldsCount: 3,
            edgeTypeOffset: 0,
            edgeNameOffset: 1,
            edgeToNodeOffset: 2,
            nodeTypes: [
                'hidden',
                'object'
            ],
            edgeTypes: [
                'element',
                'property',
                'shortcut'
            ],
            edgeShortcutType: -1,
            edgeHiddenType: -1,
            edgeElementType: 0,
            realNodesLength: 18,
            nodes: new Uint32Array([
                0,
                0,
                2,
                1,
                1,
                2,
                1,
                2,
                2,
                1,
                3,
                1,
                1,
                4,
                0,
                1,
                5,
                0
            ]),
            containmentEdges: new Uint32Array([
                2,
                6,
                3,
                1,
                7,
                6,
                0,
                1,
                6,
                1,
                8,
                9,
                1,
                9,
                9,
                1,
                10,
                12,
                1,
                11,
                15
            ]),
            strings: [
                '',
                'A',
                'B',
                'C',
                'D',
                'E',
                'a',
                'b',
                'ac',
                'bc',
                'bd',
                'ce'
            ],
            firstEdgeIndexes: new Uint32Array([
                0,
                6,
                12,
                18,
                21,
                21,
                21
            ]),
            createNode: _entrypoints_heap_snapshot_worker_heap_snapshot_worker_js__WEBPACK_IMPORTED_MODULE_1__.HeapSnapshot.JSHeapSnapshot.prototype.createNode,
            createEdge: _entrypoints_heap_snapshot_worker_heap_snapshot_worker_js__WEBPACK_IMPORTED_MODULE_1__.HeapSnapshot.JSHeapSnapshot.prototype.createEdge,
            createRetainingEdge: _entrypoints_heap_snapshot_worker_heap_snapshot_worker_js__WEBPACK_IMPORTED_MODULE_1__.HeapSnapshot.JSHeapSnapshot.prototype.createRetainingEdge
        };
        result.nodes.getValue = result.containmentEdges.getValue = function(i) {
            return this[i];
        };
        return result;
    };
    HeapProfilerTestRunner.createHeapSnapshotMockRaw = function() {
        return {
            snapshot: {
                meta: {
                    node_fields: [
                        'type',
                        'name',
                        'id',
                        'self_size',
                        'retained_size',
                        'dominator',
                        'edge_count'
                    ],
                    node_types: [
                        [
                            'hidden',
                            'object'
                        ],
                        '',
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    edge_fields: [
                        'type',
                        'name_or_index',
                        'to_node'
                    ],
                    edge_types: [
                        [
                            'element',
                            'property',
                            'shortcut'
                        ],
                        '',
                        ''
                    ],
                    location_fields: [
                        'object_index',
                        'script_id',
                        'line',
                        'column'
                    ],
                    trace_function_info_fields: [
                        'function_id',
                        'name',
                        'script_name',
                        'script_id',
                        'line',
                        'column'
                    ],
                    trace_node_fields: [
                        'id',
                        'function_info_index',
                        'count',
                        'size',
                        'children'
                    ]
                },
                node_count: 6,
                edge_count: 7
            },
            nodes: [
                0,
                0,
                1,
                0,
                20,
                0,
                2,
                1,
                1,
                2,
                2,
                2,
                0,
                2,
                1,
                2,
                3,
                3,
                8,
                0,
                2,
                1,
                3,
                4,
                4,
                10,
                0,
                1,
                1,
                4,
                5,
                5,
                5,
                14,
                0,
                1,
                5,
                6,
                6,
                6,
                21,
                0
            ],
            edges: [
                1,
                6,
                7,
                1,
                7,
                14,
                0,
                1,
                14,
                1,
                8,
                21,
                1,
                9,
                21,
                1,
                10,
                28,
                1,
                11,
                35
            ],
            trace_function_infos: [
                0,
                2,
                1,
                0,
                0,
                0
            ],
            trace_tree: [
                1,
                0,
                0,
                0,
                []
            ],
            locations: [
                0,
                1,
                2,
                3,
                18,
                2,
                3,
                4
            ],
            strings: [
                '',
                'A',
                'B',
                'C',
                'D',
                'E',
                'a',
                'b',
                'ac',
                'bc',
                'bd',
                'ce'
            ]
        };
    };
    HeapProfilerTestRunner.postprocessHeapSnapshotMock = function(mock) {
        mock.nodes = new Uint32Array(mock.nodes);
        mock.edges = new Uint32Array(mock.edges);
        mock.nodes.getValue = mock.edges.getValue = function(i) {
            return this[i];
        };
        return mock;
    };
    HeapProfilerTestRunner.createHeapSnapshotMock = function() {
        return HeapProfilerTestRunner.postprocessHeapSnapshotMock(HeapProfilerTestRunner.createHeapSnapshotMockRaw());
    };
    HeapProfilerTestRunner.createHeapSnapshotMockWithDOM = function() {
        return HeapProfilerTestRunner.postprocessHeapSnapshotMock({
            snapshot: {
                meta: {
                    node_fields: [
                        'type',
                        'name',
                        'id',
                        'edge_count'
                    ],
                    node_types: [
                        [
                            'hidden',
                            'object',
                            'synthetic'
                        ],
                        '',
                        '',
                        ''
                    ],
                    edge_fields: [
                        'type',
                        'name_or_index',
                        'to_node'
                    ],
                    edge_types: [
                        [
                            'element',
                            'hidden',
                            'internal'
                        ],
                        '',
                        ''
                    ],
                    location_fields: [
                        'object_index',
                        'script_id',
                        'line',
                        'column'
                    ]
                },
                node_count: 13,
                edge_count: 13
            },
            nodes: [
                2,
                0,
                1,
                4,
                1,
                11,
                2,
                2,
                1,
                11,
                3,
                3,
                2,
                5,
                4,
                0,
                2,
                6,
                5,
                1,
                1,
                1,
                6,
                0,
                1,
                2,
                7,
                1,
                1,
                4,
                8,
                2,
                1,
                8,
                9,
                0,
                1,
                7,
                10,
                0,
                1,
                3,
                11,
                0,
                1,
                10,
                12,
                0,
                1,
                9,
                13,
                0
            ],
            edges: [
                0,
                1,
                4,
                0,
                2,
                8,
                0,
                3,
                12,
                0,
                4,
                16,
                0,
                1,
                20,
                0,
                2,
                24,
                0,
                1,
                24,
                0,
                2,
                28,
                1,
                3,
                32,
                0,
                1,
                36,
                0,
                1,
                40,
                2,
                12,
                44,
                2,
                1,
                48
            ],
            locations: [
                0,
                2,
                1,
                1,
                6,
                2,
                2,
                2
            ],
            strings: [
                '',
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'M',
                'N',
                'Window',
                'native'
            ]
        });
    };
    HeapProfilerTestRunner.HeapNode = function(name, selfSize, type, id) {
        this.type = type || HeapProfilerTestRunner.HeapNode.Type.object;
        this.name = name;
        this.selfSize = selfSize || 0;
        this.builder = null;
        this.edges = {};
        this.edgesCount = 0;
        this.id = id;
    };
    HeapProfilerTestRunner.HeapNode.Type = {
        'hidden': 'hidden',
        'array': 'array',
        'string': 'string',
        'object': 'object',
        'code': 'code',
        'closure': 'closure',
        'regexp': 'regexp',
        'number': 'number',
        'native': 'native',
        'synthetic': 'synthetic',
        'bigint': 'bigint'
    };
    HeapProfilerTestRunner.HeapNode.prototype = {
        linkNode: function linkNode(node, type, nameOrIndex) {
            if (!this.builder) {
                throw new Error('parent node is not connected to a snapshot');
            }
            if (!node.builder) {
                node.setBuilder(this.builder);
            }
            if (nameOrIndex === undefined) {
                nameOrIndex = this.edgesCount;
            }
            ++this.edgesCount;
            if (nameOrIndex in this.edges) {
                throw new Error('Can\'t add edge with the same nameOrIndex. nameOrIndex: ' + nameOrIndex + ' oldNodeName: ' + this.edges[nameOrIndex].name + ' newNodeName: ' + node.name);
            }
            this.edges[nameOrIndex] = new HeapProfilerTestRunner.HeapEdge(node, type, nameOrIndex);
        },
        setBuilder: function setBuilder(builder) {
            if (this.builder) {
                throw new Error('node reusing is prohibited');
            }
            this.builder = builder;
            this.ordinal = this.builder.registerNode(this);
        },
        serialize: function serialize(rawSnapshot) {
            rawSnapshot.nodes.push(this.builder.lookupNodeType(this.type));
            rawSnapshot.nodes.push(this.builder.lookupOrAddString(this.name));
            rawSnapshot.nodes.push(this.id || this.ordinal * 2 + 1);
            rawSnapshot.nodes.push(this.selfSize);
            rawSnapshot.nodes.push(0);
            rawSnapshot.nodes.push(0);
            rawSnapshot.nodes.push(Object.keys(this.edges).length);
            for(var i in this.edges){
                this.edges[i].serialize(rawSnapshot);
            }
        }
    };
    HeapProfilerTestRunner.HeapEdge = function(targetNode, type, nameOrIndex) {
        this.targetNode = targetNode;
        this.type = type;
        this.nameOrIndex = nameOrIndex;
    };
    HeapProfilerTestRunner.HeapEdge.prototype = {
        serialize: function serialize(rawSnapshot) {
            if (!this.targetNode.builder) {
                throw new Error('Inconsistent state of node: ' + this.name + ' no builder assigned');
            }
            var builder = this.targetNode.builder;
            rawSnapshot.edges.push(builder.lookupEdgeType(this.type));
            rawSnapshot.edges.push(typeof this.nameOrIndex === 'string' ? builder.lookupOrAddString(this.nameOrIndex) : this.nameOrIndex);
            rawSnapshot.edges.push(this.targetNode.ordinal * builder.nodeFieldsCount);
        }
    };
    HeapProfilerTestRunner.HeapEdge.Type = {
        'context': 'context',
        'element': 'element',
        'property': 'property',
        'internal': 'internal',
        'hidden': 'hidden',
        'shortcut': 'shortcut',
        'weak': 'weak'
    };
    HeapProfilerTestRunner.HeapSnapshotBuilder = function() {
        this.nodes = [];
        this.string2id = {};
        this.strings = [];
        this.nodeFieldsCount = 7;
        this.nodeTypesMap = {};
        this.nodeTypesArray = [];
        for(var nodeType in HeapProfilerTestRunner.HeapNode.Type){
            this.nodeTypesMap[nodeType] = this.nodeTypesArray.length;
            this.nodeTypesArray.push(nodeType);
        }
        this.edgeTypesMap = {};
        this.edgeTypesArray = [];
        for(var edgeType in HeapProfilerTestRunner.HeapEdge.Type){
            this.edgeTypesMap[edgeType] = this.edgeTypesArray.length;
            this.edgeTypesArray.push(edgeType);
        }
        this.rootNode = new HeapProfilerTestRunner.HeapNode('root', 0, 'object');
        this.rootNode.setBuilder(this);
    };
    HeapProfilerTestRunner.HeapSnapshotBuilder.prototype = {
        generateSnapshot: function generateSnapshot() {
            var rawSnapshot = {
                'snapshot': {
                    'meta': {
                        'node_fields': [
                            'type',
                            'name',
                            'id',
                            'self_size',
                            'retained_size',
                            'dominator',
                            'edge_count'
                        ],
                        'node_types': [
                            this.nodeTypesArray,
                            'string',
                            'number',
                            'number',
                            'number',
                            'number',
                            'number'
                        ],
                        'edge_fields': [
                            'type',
                            'name_or_index',
                            'to_node'
                        ],
                        'edge_types': [
                            this.edgeTypesArray,
                            'string_or_number',
                            'node'
                        ]
                    }
                },
                'nodes': [],
                'edges': [],
                'locations': [],
                'strings': []
            };
            for(var i = 0; i < this.nodes.length; ++i){
                this.nodes[i].serialize(rawSnapshot);
            }
            rawSnapshot.strings = this.strings.slice();
            var meta = rawSnapshot.snapshot.meta;
            rawSnapshot.snapshot.edge_count = rawSnapshot.edges.length / meta.edge_fields.length;
            rawSnapshot.snapshot.node_count = rawSnapshot.nodes.length / meta.node_fields.length;
            return rawSnapshot;
        },
        createJSHeapSnapshot: function createJSHeapSnapshot() {
            var parsedSnapshot = HeapProfilerTestRunner.postprocessHeapSnapshotMock(this.generateSnapshot());
            return new _entrypoints_heap_snapshot_worker_heap_snapshot_worker_js__WEBPACK_IMPORTED_MODULE_1__.HeapSnapshot.JSHeapSnapshot(parsedSnapshot, new _entrypoints_heap_snapshot_worker_heap_snapshot_worker_js__WEBPACK_IMPORTED_MODULE_1__.HeapSnapshot.HeapSnapshotProgress());
        },
        registerNode: function registerNode(node) {
            this.nodes.push(node);
            return this.nodes.length - 1;
        },
        lookupNodeType: function lookupNodeType(typeName) {
            if (typeName === undefined) {
                throw new Error('wrong node type: ' + typeName);
            }
            if (!(typeName in this.nodeTypesMap)) {
                throw new Error('wrong node type name: ' + typeName);
            }
            return this.nodeTypesMap[typeName];
        },
        lookupEdgeType: function lookupEdgeType(typeName) {
            if (!(typeName in this.edgeTypesMap)) {
                throw new Error('wrong edge type name: ' + typeName);
            }
            return this.edgeTypesMap[typeName];
        },
        lookupOrAddString: function lookupOrAddString(string) {
            if (string in this.string2id) {
                return this.string2id[string];
            }
            this.string2id[string] = this.strings.length;
            this.strings.push(string);
            return this.strings.length - 1;
        }
    };
    HeapProfilerTestRunner.createHeapSnapshot = function(instanceCount, firstId) {
        var seed = 881669;
        function pseudoRandom(limit) {
            seed = seed * 355109 + 153763 >> 2 & 65535;
            return seed % limit;
        }
        var builder = new HeapProfilerTestRunner.HeapSnapshotBuilder();
        var rootNode = builder.rootNode;
        var gcRootsNode = new HeapProfilerTestRunner.HeapNode('(GC roots)', 0, HeapProfilerTestRunner.HeapNode.Type.synthetic);
        rootNode.linkNode(gcRootsNode, HeapProfilerTestRunner.HeapEdge.Type.element);
        var windowNode = new HeapProfilerTestRunner.HeapNode('Window', 20);
        rootNode.linkNode(windowNode, HeapProfilerTestRunner.HeapEdge.Type.shortcut);
        gcRootsNode.linkNode(windowNode, HeapProfilerTestRunner.HeapEdge.Type.element);
        for(var i = 0; i < instanceCount; ++i){
            var sizeOfB = pseudoRandom(20) + 1;
            var nodeB = new HeapProfilerTestRunner.HeapNode('B', sizeOfB, undefined, firstId++);
            windowNode.linkNode(nodeB, HeapProfilerTestRunner.HeapEdge.Type.element);
            var sizeOfA = pseudoRandom(50) + 1;
            var nodeA = new HeapProfilerTestRunner.HeapNode('A', sizeOfA, undefined, firstId++);
            nodeB.linkNode(nodeA, HeapProfilerTestRunner.HeapEdge.Type.property, 'a');
            nodeA.linkNode(nodeA, HeapProfilerTestRunner.HeapEdge.Type.property, 'a');
        }
        return builder.generateSnapshot();
    };
};
HeapProfilerTestRunner.createHeapSnapshotMockFactories();
HeapProfilerTestRunner.startProfilerTest = function(callback) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('Profiler was enabled.');
    HeapProfilerTestRunner.panelReset = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.override(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfilerPanel.HeapProfilerPanel.instance(), 'reset', function() {}, true);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addSniffer(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfilerPanel.HeapProfilerPanel.instance(), 'addProfileHeader', HeapProfilerTestRunner.profileHeaderAdded, true);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addSniffer(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.ProfileView.ProfileView.prototype, 'refresh', HeapProfilerTestRunner.profileViewRefresh, true);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addSniffer(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotView.HeapSnapshotView.prototype, 'show', HeapProfilerTestRunner.snapshotViewShown, true);
    _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotDataGrids.HeapSnapshotContainmentDataGrid.prototype.defaultPopulateCount = function() {
        return 10;
    };
    _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotDataGrids.HeapSnapshotConstructorsDataGrid.prototype.defaultPopulateCount = function() {
        return 10;
    };
    _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotDataGrids.HeapSnapshotDiffDataGrid.prototype.defaultPopulateCount = function() {
        return 5;
    };
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('Detailed heap profiles were enabled.');
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback)();
};
HeapProfilerTestRunner.completeProfilerTest = function() {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('');
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('Profiler was disabled.');
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.completeTest();
};
HeapProfilerTestRunner.runHeapSnapshotTestSuite = function(testSuite) {
    var testSuiteTests = testSuite.slice();
    var completeTestStack;
    function runner() {
        if (!testSuiteTests.length) {
            if (completeTestStack) {
                _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('FAIL: test already completed at ' + completeTestStack);
            }
            HeapProfilerTestRunner.completeProfilerTest();
            completeTestStack = new Error().stack;
            return;
        }
        var nextTest = testSuiteTests.shift();
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('');
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('Running: ' + /function\s([^(]*)/.exec(nextTest)[1]);
        HeapProfilerTestRunner.panelReset.call(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfilerPanel.HeapProfilerPanel.instance());
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(nextTest)(runner, runner);
    }
    HeapProfilerTestRunner.startProfilerTest(runner);
};
HeapProfilerTestRunner.assertColumnContentsEqual = function(reference, actual) {
    var length = Math.min(reference.length, actual.length);
    for(var i = 0; i < length; ++i){
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.assertEquals(reference[i], actual[i], 'row ' + i);
    }
    if (reference.length > length) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('extra rows in reference array:\n' + reference.slice(length).join('\n'));
    } else if (actual.length > length) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('extra rows in actual array:\n' + actual.slice(length).join('\n'));
    }
};
HeapProfilerTestRunner.checkArrayIsSorted = function(contents, sortType, sortOrder) {
    function simpleComparator(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }
    function parseSize(size) {
        return parseInt(size.replace(/[\xa0,]/g, ''), 10);
    }
    var extractor = {
        text: function text(data) {
            data;
        },
        number: function number(data) {
            return parseInt(data, 10);
        },
        size: parseSize,
        name: function name(data) {
            return data;
        },
        id: function id(data) {
            return parseInt(data, 10);
        }
    }[sortType];
    if (!extractor) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('Invalid sort type: ' + sortType);
        return;
    }
    var acceptableComparisonResult;
    if (sortOrder === _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Ascending) {
        acceptableComparisonResult = -1;
    } else if (sortOrder === _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Descending) {
        acceptableComparisonResult = 1;
    } else {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('Invalid sort order: ' + sortOrder);
        return;
    }
    for(var i = 0; i < contents.length - 1; ++i){
        var a = extractor(contents[i]);
        var b = extractor(contents[i + 1]);
        var result = simpleComparator(a, b);
        if (result !== 0 && result !== acceptableComparisonResult) {
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('Elements ' + i + ' and ' + (i + 1) + ' are out of order: ' + a + ' ' + b + ' (' + sortOrder + ')');
        }
    }
};
HeapProfilerTestRunner.clickColumn = function(column, callback) {
    callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback);
    var cell = this.currentGrid().dataTableHeaders[column.id];
    var event = {
        target: cell
    };
    function sortingComplete() {
        HeapProfilerTestRunner.currentGrid().removeEventListener(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotDataGrids.HeapSnapshotSortableDataGridEvents.SortingComplete, sortingComplete, this);
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.assertEquals(column.id, this.currentGrid().sortColumnId(), 'unexpected sorting');
        column.sort = this.currentGrid().sortOrder();
        function callCallback() {
            callback(column);
        }
        setTimeout(callCallback, 0);
    }
    HeapProfilerTestRunner.currentGrid().addEventListener(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotDataGrids.HeapSnapshotSortableDataGridEvents.SortingComplete, sortingComplete, this);
    this.currentGrid().clickInHeaderCell(event);
};
HeapProfilerTestRunner.clickRowAndGetRetainers = function(row, callback) {
    callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback);
    var event = {
        target: row.element()
    };
    this.currentGrid().mouseDownInDataTable(event);
    var rootNode = HeapProfilerTestRunner.currentProfileView().retainmentDataGrid.rootNode();
    rootNode.once(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotGridNodes.HeapSnapshotGridNode.Events.PopulateComplete).then(function() {
        return callback(rootNode);
    });
};
HeapProfilerTestRunner.clickShowMoreButton = function(buttonName, row, callback) {
    callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback);
    var parent = row.parent;
    parent.once(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotGridNodes.HeapSnapshotGridNode.Events.PopulateComplete).then(function() {
        return setTimeout(function() {
            return callback(parent);
        }, 0);
    });
    row[buttonName].click();
};
HeapProfilerTestRunner.columnContents = function(column, row) {
    this.currentGrid().updateVisibleNodes();
    var columnOrdinal = HeapProfilerTestRunner.viewColumns().indexOf(column);
    var result = [];
    var parent = row || this.currentGrid().rootNode();
    for(var node = parent.children[0]; node; node = node.traverseNextNode(true, parent, true)){
        if (!node.selectable) {
            continue;
        }
        var content = node.element().children[columnOrdinal];
        if (content.firstElementChild) {
            content = content.firstElementChild;
        }
        result.push(content.textContent);
    }
    return result;
};
HeapProfilerTestRunner.countDataRows = function(row, filter) {
    var result = 0;
    filter = filter || function(node) {
        return node.selectable;
    };
    for(var node = row.children[0]; node; node = node.traverseNextNode(true, row, true)){
        if (filter(node)) {
            ++result;
        }
    }
    return result;
};
HeapProfilerTestRunner.expandRow = function(row, callback) {
    callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback);
    row.once(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotGridNodes.HeapSnapshotGridNode.Events.PopulateComplete).then(function() {
        return setTimeout(function() {
            return callback(row);
        }, 0);
    });
    (function expand() {
        if (row.hasChildren()) {
            row.expand();
        } else {
            setTimeout(expand, 0);
        }
    })();
};
HeapProfilerTestRunner.expandRowPromise = function(row) {
    return new Promise(function(resolve) {
        return HeapProfilerTestRunner.expandRow(row, resolve);
    });
};
HeapProfilerTestRunner.findAndExpandGCRoots = function(callback) {
    HeapProfilerTestRunner.findAndExpandRow('(GC roots)', callback);
};
HeapProfilerTestRunner.findAndExpandWindow = function(callback) {
    HeapProfilerTestRunner.findAndExpandRow('Window', callback);
};
HeapProfilerTestRunner.findAndExpandRow = function() {
    var _ref = _async_to_generator(function(name, callback) {
        var row;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    row = HeapProfilerTestRunner.findRow(name);
                    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.assertEquals(true, Boolean(row), '"'.concat(name, '" row'));
                    return [
                        4,
                        HeapProfilerTestRunner.expandRowPromise(row)
                    ];
                case 1:
                    _state.sent();
                    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback)(row);
                    return [
                        2,
                        row
                    ];
            }
        });
    });
    return function(name, callback) {
        return _ref.apply(this, arguments);
    };
}();
HeapProfilerTestRunner.findButtonsNode = function(row, startNode) {
    for(var node = startNode || row.children[0]; node; node = node.traverseNextNode(true, row, true)){
        if (!node.selectable && node.showNext) {
            return node;
        }
    }
    return null;
};
HeapProfilerTestRunner.findRow = function(name, parent) {
    return HeapProfilerTestRunner.findMatchingRow(function(node) {
        return node.name === name;
    }, parent);
};
HeapProfilerTestRunner.findMatchingRow = function(matcher, parent) {
    parent = parent || this.currentGrid().rootNode();
    for(var node = parent.children[0]; node; node = node.traverseNextNode(true, parent, true)){
        if (matcher(node)) {
            return node;
        }
    }
    return null;
};
HeapProfilerTestRunner.switchToView = function(title, callback) {
    return new Promise(function(resolve) {
        callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback);
        var view = _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfilerPanel.HeapProfilerPanel.instance().visibleView;
        view.changePerspectiveAndWait(title).then(callback).then(resolve);
        HeapProfilerTestRunner.currentGrid().scrollContainer.style.height = '10000px';
    });
};
HeapProfilerTestRunner.takeAndOpenSnapshot = function() {
    var _ref = _async_to_generator(function(generator, callback) {
        var snapshot, profileType;
        function pushGeneratedSnapshot(reportProgress) {
            return _pushGeneratedSnapshot.apply(this, arguments);
        }
        function _pushGeneratedSnapshot() {
            _pushGeneratedSnapshot = _async_to_generator(function(reportProgress) {
                return _ts_generator(this, function(_state) {
                    if (reportProgress) {
                        profileType.reportHeapSnapshotProgress({
                            data: {
                                done: 50,
                                total: 100,
                                finished: false
                            }
                        });
                        profileType.reportHeapSnapshotProgress({
                            data: {
                                done: 100,
                                total: 100,
                                finished: true
                            }
                        });
                    }
                    snapshot.snapshot.typeId = 'HEAP';
                    profileType.addHeapSnapshotChunk({
                        data: JSON.stringify(snapshot)
                    });
                    return [
                        2
                    ];
                });
            });
            return _pushGeneratedSnapshot.apply(this, arguments);
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback);
                    snapshot = generator();
                    profileType = _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.ProfileTypeRegistry.instance.heapSnapshotProfileType;
                    HeapProfilerTestRunner.takeAndOpenSnapshotCallback = callback;
                    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.override(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.HeapProfilerAgent, 'invoke_takeHeapSnapshot', pushGeneratedSnapshot);
                    if (!!_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.HeapProfilerModel.HeapProfilerModel)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        new Promise(function(resolve) {
                            return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.HeapProfilerModel.HeapProfilerModel, resolve);
                        })
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    profileType.takeHeapSnapshot();
                    return [
                        2
                    ];
            }
        });
    });
    return function(generator, callback) {
        return _ref.apply(this, arguments);
    };
}();
/**
 * @return {!Promise<!Profiler.HeapSnapshotView.HeapProfileHeader>}
 */ HeapProfilerTestRunner.takeSnapshotPromise = function() {
    return new Promise(function(resolve) {
        var finishHeapSnapshot = function finishHeapSnapshot() {
            var profiles = heapProfileType.getProfiles();
            if (!profiles.length) {
                throw 'FAILED: no profiles found.';
            }
            if (profiles.length > 1) {
                throw "FAILED: wrong number of recorded profiles was found. profiles.length = ".concat(profiles.length);
            }
            var profile = profiles[0];
            _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfilerPanel.HeapProfilerPanel.instance().showProfile(profile);
            var dataGrid = HeapProfilerTestRunner.currentProfileView().dataGrid;
            dataGrid.addEventListener(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotDataGrids.HeapSnapshotSortableDataGridEvents.SortingComplete, sortingComplete, null);
            function sortingComplete() {
                dataGrid.removeEventListener(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotDataGrids.HeapSnapshotSortableDataGridEvents.SortingComplete, sortingComplete, null);
                resolve(profile);
            }
        };
        var heapProfileType = _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.ProfileTypeRegistry.instance.heapSnapshotProfileType;
        heapProfileType.addEventListener(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotView.HeapSnapshotProfileType.SnapshotReceived, finishHeapSnapshot);
        heapProfileType.takeHeapSnapshot();
    });
};
HeapProfilerTestRunner.viewColumns = function() {
    return HeapProfilerTestRunner.currentGrid().columnsArray;
};
HeapProfilerTestRunner.currentProfileView = function() {
    return _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfilerPanel.HeapProfilerPanel.instance().visibleView;
};
HeapProfilerTestRunner.currentGrid = function() {
    return this.currentProfileView().dataGrid;
};
HeapProfilerTestRunner.snapshotViewShown = function() {
    if (HeapProfilerTestRunner.takeAndOpenSnapshotCallback) {
        var callback = HeapProfilerTestRunner.takeAndOpenSnapshotCallback;
        HeapProfilerTestRunner.takeAndOpenSnapshotCallback = null;
        var dataGrid = this.dataGrid;
        function sortingComplete() {
            dataGrid.removeEventListener(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotDataGrids.HeapSnapshotSortableDataGridEvents.SortingComplete, sortingComplete, null);
            callback();
        }
        dataGrid.addEventListener(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotDataGrids.HeapSnapshotSortableDataGridEvents.SortingComplete, sortingComplete, null);
    }
};
HeapProfilerTestRunner.showProfileWhenAdded = function(title) {
    HeapProfilerTestRunner.showProfileWhenAdded = title;
    return new Promise(function(resolve) {
        return HeapProfilerTestRunner.waitUntilProfileViewIsShown(title, resolve);
    });
};
HeapProfilerTestRunner.profileHeaderAdded = function(profile) {
    if (HeapProfilerTestRunner.showProfileWhenAdded === profile.title) {
        _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfilerPanel.HeapProfilerPanel.instance().showProfile(profile);
    }
};
HeapProfilerTestRunner.waitUntilProfileViewIsShown = function(title, callback) {
    callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback);
    var profilesPanel = _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfilerPanel.HeapProfilerPanel.instance();
    if (profilesPanel.visibleView && profilesPanel.visibleView.profile && profilesPanel.visibleView.profileHeader.title === title) {
        callback(profilesPanel.visibleView);
    } else {
        HeapProfilerTestRunner.waitUntilProfileViewIsShownCallback = {
            title: title,
            callback: callback
        };
    }
};
HeapProfilerTestRunner.profileViewRefresh = function() {
    if (HeapProfilerTestRunner.waitUntilProfileViewIsShownCallback && HeapProfilerTestRunner.waitUntilProfileViewIsShownCallback.title === this.profileHeader.title) {
        var callback = HeapProfilerTestRunner.waitUntilProfileViewIsShownCallback;
        delete HeapProfilerTestRunner.waitUntilProfileViewIsShownCallback;
        callback.callback(this);
    }
};
HeapProfilerTestRunner.startSamplingHeapProfiler = /*#__PURE__*/ _async_to_generator(function() {
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                if (!!_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.HeapProfilerModel.HeapProfilerModel)) return [
                    3,
                    2
                ];
                return [
                    4,
                    new Promise(function(resolve) {
                        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.HeapProfilerModel.HeapProfilerModel, resolve);
                    })
                ];
            case 1:
                _state.sent();
                _state.label = 2;
            case 2:
                _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfileView.SamplingHeapProfileType.instance.startRecordingProfile();
                return [
                    2
                ];
        }
    });
});
HeapProfilerTestRunner.stopSamplingHeapProfiler = function() {
    _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfileView.SamplingHeapProfileType.instance.stopRecordingProfile();
};


}),

}]);