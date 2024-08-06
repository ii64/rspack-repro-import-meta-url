"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_heap_snapshot_worker_HeapSnapshot_js"], {
"./entrypoints/heap_snapshot_worker/HeapSnapshot.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HeapSnapshot: function() { return HeapSnapshot; },
  HeapSnapshotEdge: function() { return HeapSnapshotEdge; },
  HeapSnapshotEdgeIndexProvider: function() { return HeapSnapshotEdgeIndexProvider; },
  HeapSnapshotEdgeIterator: function() { return HeapSnapshotEdgeIterator; },
  HeapSnapshotEdgesProvider: function() { return HeapSnapshotEdgesProvider; },
  HeapSnapshotFilteredIterator: function() { return HeapSnapshotFilteredIterator; },
  HeapSnapshotHeader: function() { return HeapSnapshotHeader; },
  HeapSnapshotIndexRangeIterator: function() { return HeapSnapshotIndexRangeIterator; },
  HeapSnapshotItemProvider: function() { return HeapSnapshotItemProvider; },
  HeapSnapshotNode: function() { return HeapSnapshotNode; },
  HeapSnapshotNodeIndexProvider: function() { return HeapSnapshotNodeIndexProvider; },
  HeapSnapshotNodeIterator: function() { return HeapSnapshotNodeIterator; },
  HeapSnapshotNodesProvider: function() { return HeapSnapshotNodesProvider; },
  HeapSnapshotProblemReport: function() { return HeapSnapshotProblemReport; },
  HeapSnapshotProgress: function() { return HeapSnapshotProgress; },
  HeapSnapshotRetainerEdge: function() { return HeapSnapshotRetainerEdge; },
  HeapSnapshotRetainerEdgeIndexProvider: function() { return HeapSnapshotRetainerEdgeIndexProvider; },
  HeapSnapshotRetainerEdgeIterator: function() { return HeapSnapshotRetainerEdgeIterator; },
  JSHeapSnapshot: function() { return JSHeapSnapshot; },
  JSHeapSnapshotEdge: function() { return JSHeapSnapshotEdge; },
  JSHeapSnapshotNode: function() { return JSHeapSnapshotNode; },
  JSHeapSnapshotRetainerEdge: function() { return JSHeapSnapshotRetainerEdge; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/heap_snapshot_model/heap_snapshot_model.js */ "./models/heap_snapshot_model/heap_snapshot_model.js");
/* harmony import */var _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllocationProfile.js */ "./entrypoints/heap_snapshot_worker/AllocationProfile.js");
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
 */ /* eslint-disable rulesdir/use_private_class_members */ function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _check_private_redeclaration(obj, privateCollection) {
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
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) {
            throw new TypeError("attempted to read set only private field");
        }
        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value (v){
                    descriptor.set.call(receiver, v);
                },
                get value () {
                    return descriptor.get.call(receiver);
                }
            };
        }
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
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
function _class_private_field_update(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "update");
    return _class_apply_descriptor_update(receiver, descriptor);
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}




var HeapSnapshotEdge = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotEdge(snapshot, edgeIndex) {
        _class_call_check(this, HeapSnapshotEdge);
        _define_property(this, "snapshot", void 0);
        _define_property(this, "edges", void 0);
        _define_property(this, "edgeIndex", void 0);
        this.snapshot = snapshot;
        this.edges = snapshot.containmentEdges;
        this.edgeIndex = edgeIndex || 0;
    }
    _create_class(HeapSnapshotEdge, [
        {
            key: "clone",
            value: function clone() {
                return new HeapSnapshotEdge(this.snapshot, this.edgeIndex);
            }
        },
        {
            key: "hasStringName",
            value: function hasStringName() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "name",
            value: function name() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "node",
            value: function node() {
                return this.snapshot.createNode(this.nodeIndex());
            }
        },
        {
            key: "nodeIndex",
            value: function nodeIndex() {
                if (typeof this.snapshot.edgeToNodeOffset === 'undefined') {
                    throw new Error('edgeToNodeOffset is undefined');
                }
                return this.edges.getValue(this.edgeIndex + this.snapshot.edgeToNodeOffset);
            }
        },
        {
            key: "toString",
            value: function toString() {
                return 'HeapSnapshotEdge: ' + this.name();
            }
        },
        {
            key: "type",
            value: function type() {
                return this.snapshot.edgeTypes[this.rawType()];
            }
        },
        {
            key: "itemIndex",
            value: function itemIndex() {
                return this.edgeIndex;
            }
        },
        {
            key: "serialize",
            value: function serialize() {
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.Edge(this.name(), this.node().serialize(), this.type(), this.edgeIndex);
            }
        },
        {
            key: "rawType",
            value: function rawType() {
                if (typeof this.snapshot.edgeTypeOffset === 'undefined') {
                    throw new Error('edgeTypeOffset is undefined');
                }
                return this.edges.getValue(this.edgeIndex + this.snapshot.edgeTypeOffset);
            }
        },
        {
            key: "isInternal",
            value: function isInternal() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "isInvisible",
            value: function isInvisible() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "isWeak",
            value: function isWeak() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "getValueForSorting",
            value: function getValueForSorting(_fieldName) {
                throw new Error('Not implemented');
            }
        },
        {
            key: "nameIndex",
            value: function nameIndex() {
                throw new Error('Not implemented');
            }
        }
    ]);
    return HeapSnapshotEdge;
}();
var _node = /*#__PURE__*/ new WeakMap();
var HeapSnapshotNodeIndexProvider = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotNodeIndexProvider(snapshot) {
        _class_call_check(this, HeapSnapshotNodeIndexProvider);
        _class_private_field_init(this, _node, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _node, snapshot.createNode());
    }
    _create_class(HeapSnapshotNodeIndexProvider, [
        {
            key: "itemForIndex",
            value: function itemForIndex(index) {
                _class_private_field_get(this, _node).nodeIndex = index;
                return _class_private_field_get(this, _node);
            }
        }
    ]);
    return HeapSnapshotNodeIndexProvider;
}();
var _edge = /*#__PURE__*/ new WeakMap();
var HeapSnapshotEdgeIndexProvider = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotEdgeIndexProvider(snapshot) {
        _class_call_check(this, HeapSnapshotEdgeIndexProvider);
        _class_private_field_init(this, _edge, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _edge, snapshot.createEdge(0));
    }
    _create_class(HeapSnapshotEdgeIndexProvider, [
        {
            key: "itemForIndex",
            value: function itemForIndex(index) {
                _class_private_field_get(this, _edge).edgeIndex = index;
                return _class_private_field_get(this, _edge);
            }
        }
    ]);
    return HeapSnapshotEdgeIndexProvider;
}();
var _retainerEdge = /*#__PURE__*/ new WeakMap();
var HeapSnapshotRetainerEdgeIndexProvider = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotRetainerEdgeIndexProvider(snapshot) {
        _class_call_check(this, HeapSnapshotRetainerEdgeIndexProvider);
        _class_private_field_init(this, _retainerEdge, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _retainerEdge, snapshot.createRetainingEdge(0));
    }
    _create_class(HeapSnapshotRetainerEdgeIndexProvider, [
        {
            key: "itemForIndex",
            value: function itemForIndex(index) {
                _class_private_field_get(this, _retainerEdge).setRetainerIndex(index);
                return _class_private_field_get(this, _retainerEdge);
            }
        }
    ]);
    return HeapSnapshotRetainerEdgeIndexProvider;
}();
var _sourceNode = /*#__PURE__*/ new WeakMap();
var HeapSnapshotEdgeIterator = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotEdgeIterator(node) {
        _class_call_check(this, HeapSnapshotEdgeIterator);
        _class_private_field_init(this, _sourceNode, {
            writable: true,
            value: void 0
        });
        _define_property(this, "edge", void 0);
        _class_private_field_set(this, _sourceNode, node);
        this.edge = node.snapshot.createEdge(node.edgeIndexesStart());
    }
    _create_class(HeapSnapshotEdgeIterator, [
        {
            key: "hasNext",
            value: function hasNext() {
                return this.edge.edgeIndex < _class_private_field_get(this, _sourceNode).edgeIndexesEnd();
            }
        },
        {
            key: "item",
            value: function item() {
                return this.edge;
            }
        },
        {
            key: "next",
            value: function next() {
                if (typeof this.edge.snapshot.edgeFieldsCount === 'undefined') {
                    throw new Error('edgeFieldsCount is undefined');
                }
                this.edge.edgeIndex += this.edge.snapshot.edgeFieldsCount;
            }
        }
    ]);
    return HeapSnapshotEdgeIterator;
}();
var _retainerIndexInternal = /*#__PURE__*/ new WeakMap(), _globalEdgeIndex = /*#__PURE__*/ new WeakMap(), _retainingNodeIndex = /*#__PURE__*/ new WeakMap(), _edgeInstance = /*#__PURE__*/ new WeakMap(), _nodeInstance = /*#__PURE__*/ new WeakMap(), _distance = /*#__PURE__*/ new WeakSet();
var HeapSnapshotRetainerEdge = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotRetainerEdge(snapshot, retainerIndex) {
        _class_call_check(this, HeapSnapshotRetainerEdge);
        _class_private_method_init(this, _distance);
        _define_property(this, "snapshot", void 0);
        _class_private_field_init(this, _retainerIndexInternal, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _globalEdgeIndex, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _retainingNodeIndex, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _edgeInstance, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _nodeInstance, {
            writable: true,
            value: void 0
        });
        this.snapshot = snapshot;
        this.setRetainerIndex(retainerIndex);
    }
    _create_class(HeapSnapshotRetainerEdge, [
        {
            key: "clone",
            value: function clone() {
                return new HeapSnapshotRetainerEdge(this.snapshot, this.retainerIndex());
            }
        },
        {
            key: "hasStringName",
            value: function hasStringName() {
                return this.edge().hasStringName();
            }
        },
        {
            key: "name",
            value: function name() {
                return this.edge().name();
            }
        },
        {
            key: "nameIndex",
            value: function nameIndex() {
                return this.edge().nameIndex();
            }
        },
        {
            key: "node",
            value: function node() {
                return this.nodeInternal();
            }
        },
        {
            key: "nodeIndex",
            value: function nodeIndex() {
                if (typeof _class_private_field_get(this, _retainingNodeIndex) === 'undefined') {
                    throw new Error('retainingNodeIndex is undefined');
                }
                return _class_private_field_get(this, _retainingNodeIndex);
            }
        },
        {
            key: "retainerIndex",
            value: function retainerIndex() {
                return _class_private_field_get(this, _retainerIndexInternal);
            }
        },
        {
            key: "setRetainerIndex",
            value: function setRetainerIndex(retainerIndex) {
                if (retainerIndex === _class_private_field_get(this, _retainerIndexInternal)) {
                    return;
                }
                if (!this.snapshot.retainingEdges || !this.snapshot.retainingNodes) {
                    throw new Error('Snapshot does not contain retaining edges or retaining nodes');
                }
                _class_private_field_set(this, _retainerIndexInternal, retainerIndex);
                _class_private_field_set(this, _globalEdgeIndex, this.snapshot.retainingEdges[retainerIndex]);
                _class_private_field_set(this, _retainingNodeIndex, this.snapshot.retainingNodes[retainerIndex]);
                _class_private_field_set(this, _edgeInstance, null);
                _class_private_field_set(this, _nodeInstance, null);
            }
        },
        {
            key: "edgeIndex",
            set: function set(edgeIndex) {
                this.setRetainerIndex(edgeIndex);
            }
        },
        {
            key: "nodeInternal",
            value: function nodeInternal() {
                if (!_class_private_field_get(this, _nodeInstance)) {
                    _class_private_field_set(this, _nodeInstance, this.snapshot.createNode(_class_private_field_get(this, _retainingNodeIndex)));
                }
                return _class_private_field_get(this, _nodeInstance);
            }
        },
        {
            key: "edge",
            value: function edge() {
                if (!_class_private_field_get(this, _edgeInstance)) {
                    _class_private_field_set(this, _edgeInstance, this.snapshot.createEdge(_class_private_field_get(this, _globalEdgeIndex)));
                }
                return _class_private_field_get(this, _edgeInstance);
            }
        },
        {
            key: "toString",
            value: function toString() {
                return this.edge().toString();
            }
        },
        {
            key: "itemIndex",
            value: function itemIndex() {
                return _class_private_field_get(this, _retainerIndexInternal);
            }
        },
        {
            key: "serialize",
            value: function serialize() {
                var node = this.node();
                var serializedNode = node.serialize();
                serializedNode.distance = _class_private_method_get(this, _distance, distance).call(this);
                serializedNode.ignored = this.snapshot.isNodeIgnoredInRetainersView(node.nodeIndex);
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.Edge(this.name(), serializedNode, this.type(), _class_private_field_get(this, _globalEdgeIndex));
            }
        },
        {
            key: "type",
            value: function type() {
                return this.edge().type();
            }
        },
        {
            key: "isInternal",
            value: function isInternal() {
                return this.edge().isInternal();
            }
        },
        {
            key: "getValueForSorting",
            value: function getValueForSorting(fieldName) {
                if (fieldName === '!edgeDistance') {
                    return _class_private_method_get(this, _distance, distance).call(this);
                }
                throw new Error('Invalid field name');
            }
        }
    ]);
    return HeapSnapshotRetainerEdge;
}();
function distance() {
    if (this.snapshot.isEdgeIgnoredInRetainersView(_class_private_field_get(this, _globalEdgeIndex))) {
        return _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.baseUnreachableDistance;
    }
    return this.node().distanceForRetainersView();
}
var _retainersEnd = /*#__PURE__*/ new WeakMap();
var HeapSnapshotRetainerEdgeIterator = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotRetainerEdgeIterator(retainedNode) {
        _class_call_check(this, HeapSnapshotRetainerEdgeIterator);
        _class_private_field_init(this, _retainersEnd, {
            writable: true,
            value: void 0
        });
        _define_property(this, "retainer", void 0);
        var snapshot = retainedNode.snapshot;
        var retainedNodeOrdinal = retainedNode.ordinal();
        if (!snapshot.firstRetainerIndex) {
            throw new Error('Snapshot does not contain firstRetainerIndex');
        }
        var retainerIndex = snapshot.firstRetainerIndex[retainedNodeOrdinal];
        _class_private_field_set(this, _retainersEnd, snapshot.firstRetainerIndex[retainedNodeOrdinal + 1]);
        this.retainer = snapshot.createRetainingEdge(retainerIndex);
    }
    _create_class(HeapSnapshotRetainerEdgeIterator, [
        {
            key: "hasNext",
            value: function hasNext() {
                return this.retainer.retainerIndex() < _class_private_field_get(this, _retainersEnd);
            }
        },
        {
            key: "item",
            value: function item() {
                return this.retainer;
            }
        },
        {
            key: "next",
            value: function next() {
                this.retainer.setRetainerIndex(this.retainer.retainerIndex() + 1);
            }
        }
    ]);
    return HeapSnapshotRetainerEdgeIterator;
}();
var HeapSnapshotNode = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotNode(snapshot, nodeIndex) {
        _class_call_check(this, HeapSnapshotNode);
        _define_property(this, "snapshot", void 0);
        _define_property(this, "nodeIndex", void 0);
        this.snapshot = snapshot;
        this.nodeIndex = nodeIndex || 0;
    }
    _create_class(HeapSnapshotNode, [
        {
            key: "distance",
            value: function distance() {
                return this.snapshot.nodeDistances[this.nodeIndex / this.snapshot.nodeFieldCount];
            }
        },
        {
            key: "distanceForRetainersView",
            value: function distanceForRetainersView() {
                return this.snapshot.getDistanceForRetainersView(this.nodeIndex);
            }
        },
        {
            key: "className",
            value: function className() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "classIndex",
            value: function classIndex() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "dominatorIndex",
            value: function dominatorIndex() {
                var nodeFieldCount = this.snapshot.nodeFieldCount;
                return this.snapshot.dominatorsTree[this.nodeIndex / this.snapshot.nodeFieldCount] * nodeFieldCount;
            }
        },
        {
            key: "edges",
            value: function edges() {
                return new HeapSnapshotEdgeIterator(this);
            }
        },
        {
            key: "edgesCount",
            value: function edgesCount() {
                return (this.edgeIndexesEnd() - this.edgeIndexesStart()) / this.snapshot.edgeFieldsCount;
            }
        },
        {
            key: "id",
            value: function id() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "rawName",
            value: function rawName() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "isRoot",
            value: function isRoot() {
                return this.nodeIndex === this.snapshot.rootNodeIndex;
            }
        },
        {
            key: "isUserRoot",
            value: function isUserRoot() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "isHidden",
            value: function isHidden() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "isArray",
            value: function isArray() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "isSynthetic",
            value: function isSynthetic() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "isDocumentDOMTreesRoot",
            value: function isDocumentDOMTreesRoot() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "name",
            value: function name() {
                return this.snapshot.strings[this.nameInternal()];
            }
        },
        {
            key: "retainedSize",
            value: function retainedSize() {
                return this.snapshot.retainedSizes[this.ordinal()];
            }
        },
        {
            key: "retainers",
            value: function retainers() {
                return new HeapSnapshotRetainerEdgeIterator(this);
            }
        },
        {
            key: "retainersCount",
            value: function retainersCount() {
                var snapshot = this.snapshot;
                var ordinal = this.ordinal();
                return snapshot.firstRetainerIndex[ordinal + 1] - snapshot.firstRetainerIndex[ordinal];
            }
        },
        {
            key: "selfSize",
            value: function selfSize() {
                var snapshot = this.snapshot;
                return snapshot.nodes.getValue(this.nodeIndex + snapshot.nodeSelfSizeOffset);
            }
        },
        {
            key: "type",
            value: function type() {
                return this.snapshot.nodeTypes[this.rawType()];
            }
        },
        {
            key: "traceNodeId",
            value: function traceNodeId() {
                var snapshot = this.snapshot;
                return snapshot.nodes.getValue(this.nodeIndex + snapshot.nodeTraceNodeIdOffset);
            }
        },
        {
            key: "itemIndex",
            value: function itemIndex() {
                return this.nodeIndex;
            }
        },
        {
            key: "serialize",
            value: function serialize() {
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.Node(this.id(), this.name(), this.distance(), this.nodeIndex, this.retainedSize(), this.selfSize(), this.type());
            }
        },
        {
            key: "nameInternal",
            value: function nameInternal() {
                var snapshot = this.snapshot;
                return snapshot.nodes.getValue(this.nodeIndex + snapshot.nodeNameOffset);
            }
        },
        {
            key: "edgeIndexesStart",
            value: function edgeIndexesStart() {
                return this.snapshot.firstEdgeIndexes[this.ordinal()];
            }
        },
        {
            key: "edgeIndexesEnd",
            value: function edgeIndexesEnd() {
                return this.snapshot.firstEdgeIndexes[this.ordinal() + 1];
            }
        },
        {
            key: "ordinal",
            value: function ordinal() {
                return this.nodeIndex / this.snapshot.nodeFieldCount;
            }
        },
        {
            key: "nextNodeIndex",
            value: function nextNodeIndex() {
                return this.nodeIndex + this.snapshot.nodeFieldCount;
            }
        },
        {
            key: "rawType",
            value: function rawType() {
                var snapshot = this.snapshot;
                return snapshot.nodes.getValue(this.nodeIndex + snapshot.nodeTypeOffset);
            }
        },
        {
            key: "isFlatConsString",
            value: function isFlatConsString() {
                if (this.rawType() !== this.snapshot.nodeConsStringType) {
                    return false;
                }
                for(var iter = this.edges(); iter.hasNext(); iter.next()){
                    var edge = iter.edge;
                    if (!edge.isInternal()) {
                        continue;
                    }
                    var edgeName = edge.name();
                    if ((edgeName === 'first' || edgeName === 'second') && edge.node().name() === '') {
                        return true;
                    }
                }
                return false;
            }
        }
    ]);
    return HeapSnapshotNode;
}();
var _nodesLength = /*#__PURE__*/ new WeakMap();
var HeapSnapshotNodeIterator = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotNodeIterator(node) {
        _class_call_check(this, HeapSnapshotNodeIterator);
        _define_property(this, "node", void 0);
        _class_private_field_init(this, _nodesLength, {
            writable: true,
            value: void 0
        });
        this.node = node;
        _class_private_field_set(this, _nodesLength, node.snapshot.nodes.length);
    }
    _create_class(HeapSnapshotNodeIterator, [
        {
            key: "hasNext",
            value: function hasNext() {
                return this.node.nodeIndex < _class_private_field_get(this, _nodesLength);
            }
        },
        {
            key: "item",
            value: function item() {
                return this.node;
            }
        },
        {
            key: "next",
            value: function next() {
                this.node.nodeIndex = this.node.nextNodeIndex();
            }
        }
    ]);
    return HeapSnapshotNodeIterator;
}();
var _itemProvider = /*#__PURE__*/ new WeakMap(), _indexes = /*#__PURE__*/ new WeakMap(), _position = /*#__PURE__*/ new WeakMap();
var HeapSnapshotIndexRangeIterator = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotIndexRangeIterator(itemProvider, indexes) {
        _class_call_check(this, HeapSnapshotIndexRangeIterator);
        _class_private_field_init(this, _itemProvider, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _indexes, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _position, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _itemProvider, itemProvider);
        _class_private_field_set(this, _indexes, indexes);
        _class_private_field_set(this, _position, 0);
    }
    _create_class(HeapSnapshotIndexRangeIterator, [
        {
            key: "hasNext",
            value: function hasNext() {
                return _class_private_field_get(this, _position) < _class_private_field_get(this, _indexes).length;
            }
        },
        {
            key: "item",
            value: function item() {
                var index = _class_private_field_get(this, _indexes)[_class_private_field_get(this, _position)];
                return _class_private_field_get(this, _itemProvider).itemForIndex(index);
            }
        },
        {
            key: "next",
            value: function next() {
                ++_class_private_field_update(this, _position).value;
            }
        }
    ]);
    return HeapSnapshotIndexRangeIterator;
}();
var _iterator = /*#__PURE__*/ new WeakMap(), _filter = /*#__PURE__*/ new WeakMap();
var HeapSnapshotFilteredIterator = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotFilteredIterator(iterator, filter) {
        _class_call_check(this, HeapSnapshotFilteredIterator);
        _class_private_field_init(this, _iterator, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _filter, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _iterator, iterator);
        _class_private_field_set(this, _filter, filter);
        this.skipFilteredItems();
    }
    _create_class(HeapSnapshotFilteredIterator, [
        {
            key: "hasNext",
            value: function hasNext() {
                return _class_private_field_get(this, _iterator).hasNext();
            }
        },
        {
            key: "item",
            value: function item() {
                return _class_private_field_get(this, _iterator).item();
            }
        },
        {
            key: "next",
            value: function next() {
                _class_private_field_get(this, _iterator).next();
                this.skipFilteredItems();
            }
        },
        {
            key: "skipFilteredItems",
            value: function skipFilteredItems() {
                while(_class_private_field_get(this, _iterator).hasNext() && _class_private_field_get(this, _filter) && !_class_private_field_get(this, _filter).call(this, _class_private_field_get(this, _iterator).item())){
                    _class_private_field_get(this, _iterator).next();
                }
            }
        }
    ]);
    return HeapSnapshotFilteredIterator;
}();
var _dispatcher = /*#__PURE__*/ new WeakMap();
var HeapSnapshotProgress = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotProgress(dispatcher) {
        _class_call_check(this, HeapSnapshotProgress);
        _class_private_field_init(this, _dispatcher, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _dispatcher, dispatcher);
    }
    _create_class(HeapSnapshotProgress, [
        {
            key: "updateStatus",
            value: function updateStatus(status) {
                this.sendUpdateEvent(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.serializeUIString(status));
            }
        },
        {
            key: "updateProgress",
            value: function updateProgress(title, value, total) {
                var percentValue = ((total ? value / total : 0) * 100).toFixed(0);
                this.sendUpdateEvent(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.serializeUIString(title, {
                    PH1: percentValue
                }));
            }
        },
        {
            key: "reportProblem",
            value: function reportProblem(error) {
                // May be undefined in tests.
                if (_class_private_field_get(this, _dispatcher)) {
                    _class_private_field_get(this, _dispatcher).sendEvent(_models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.HeapSnapshotProgressEvent.BrokenSnapshot, error);
                }
            }
        },
        {
            key: "sendUpdateEvent",
            value: function sendUpdateEvent(serializedText) {
                // May be undefined in tests.
                if (_class_private_field_get(this, _dispatcher)) {
                    _class_private_field_get(this, _dispatcher).sendEvent(_models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.HeapSnapshotProgressEvent.Update, serializedText);
                }
            }
        }
    ]);
    return HeapSnapshotProgress;
}();
var _errors = /*#__PURE__*/ new WeakMap();
var HeapSnapshotProblemReport = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotProblemReport(title) {
        _class_call_check(this, HeapSnapshotProblemReport);
        _class_private_field_init(this, _errors, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _errors, [
            title
        ]);
    }
    _create_class(HeapSnapshotProblemReport, [
        {
            key: "addError",
            value: function addError(error) {
                if (_class_private_field_get(this, _errors).length > 100) {
                    return;
                }
                _class_private_field_get(this, _errors).push(error);
            }
        },
        {
            key: "toString",
            value: function toString() {
                return _class_private_field_get(this, _errors).join('\n  ');
            }
        }
    ]);
    return HeapSnapshotProblemReport;
}();
var _metaNode = /*#__PURE__*/ new WeakMap(), _rawSamples = /*#__PURE__*/ new WeakMap(), _samples = /*#__PURE__*/ new WeakMap(), _locations = /*#__PURE__*/ new WeakMap(), _progress = /*#__PURE__*/ new WeakMap(), _noDistance = /*#__PURE__*/ new WeakMap(), _snapshotDiffs = /*#__PURE__*/ new WeakMap(), _aggregatesForDiffInternal = /*#__PURE__*/ new WeakMap(), _aggregates = /*#__PURE__*/ new WeakMap(), _aggregatesSortedFlags = /*#__PURE__*/ new WeakMap(), _profile = /*#__PURE__*/ new WeakMap(), _nodeEdgeCountOffset = /*#__PURE__*/ new WeakMap(), _locationIndexOffset = /*#__PURE__*/ new WeakMap(), _locationScriptIdOffset = /*#__PURE__*/ new WeakMap(), _locationLineOffset = /*#__PURE__*/ new WeakMap(), _locationColumnOffset = /*#__PURE__*/ new WeakMap(), _locationFieldCount = /*#__PURE__*/ new WeakMap(), _edgeCount = /*#__PURE__*/ new WeakMap(), _allocationProfile = /*#__PURE__*/ new WeakMap(), _nodeDetachednessOffset = /*#__PURE__*/ new WeakMap(), _locationMap = /*#__PURE__*/ new WeakMap(), _ignoredNodesInRetainersView = /*#__PURE__*/ new WeakMap(), _ignoredEdgesInRetainersView = /*#__PURE__*/ new WeakMap(), _nodeDistancesForRetainersView = /*#__PURE__*/ new WeakMap(), _edgeNamesThatAreNotWeakMaps = /*#__PURE__*/ new WeakMap(), _syntheticClassNames = /*#__PURE__*/ new WeakMap(), _updateIgnoredEdgesInRetainersView = /*#__PURE__*/ new WeakSet();
var HeapSnapshot = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshot(profile, progress) {
        _class_call_check(this, HeapSnapshot);
        _class_private_method_init(this, _updateIgnoredEdgesInRetainersView);
        _define_property(this, "nodes", void 0);
        _define_property(this, "containmentEdges", void 0);
        _class_private_field_init(this, _metaNode, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _rawSamples, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _samples, {
            writable: true,
            value: void 0
        });
        _define_property(this, "strings", void 0);
        _class_private_field_init(this, _locations, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _progress, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _noDistance, {
            writable: true,
            value: void 0
        });
        _define_property(this, "rootNodeIndexInternal", void 0);
        _class_private_field_init(this, _snapshotDiffs, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _aggregatesForDiffInternal, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _aggregates, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _aggregatesSortedFlags, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _profile, {
            writable: true,
            value: void 0
        });
        _define_property(this, "nodeTypeOffset", void 0);
        _define_property(this, "nodeNameOffset", void 0);
        _define_property(this, "nodeIdOffset", void 0);
        _define_property(this, "nodeSelfSizeOffset", void 0);
        _class_private_field_init(this, _nodeEdgeCountOffset, {
            writable: true,
            value: void 0
        });
        _define_property(this, "nodeTraceNodeIdOffset", void 0);
        _define_property(this, "nodeFieldCount", void 0);
        _define_property(this, "nodeTypes", void 0);
        _define_property(this, "nodeArrayType", void 0);
        _define_property(this, "nodeHiddenType", void 0);
        _define_property(this, "nodeObjectType", void 0);
        _define_property(this, "nodeNativeType", void 0);
        _define_property(this, "nodeStringType", void 0);
        _define_property(this, "nodeConsStringType", void 0);
        _define_property(this, "nodeSlicedStringType", void 0);
        _define_property(this, "nodeCodeType", void 0);
        _define_property(this, "nodeSyntheticType", void 0);
        _define_property(this, "edgeFieldsCount", void 0);
        _define_property(this, "edgeTypeOffset", void 0);
        _define_property(this, "edgeNameOffset", void 0);
        _define_property(this, "edgeToNodeOffset", void 0);
        _define_property(this, "edgeTypes", void 0);
        _define_property(this, "edgeElementType", void 0);
        _define_property(this, "edgeHiddenType", void 0);
        _define_property(this, "edgeInternalType", void 0);
        _define_property(this, "edgeShortcutType", void 0);
        _define_property(this, "edgeWeakType", void 0);
        _define_property(this, "edgeInvisibleType", void 0);
        _class_private_field_init(this, _locationIndexOffset, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _locationScriptIdOffset, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _locationLineOffset, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _locationColumnOffset, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _locationFieldCount, {
            writable: true,
            value: void 0
        });
        _define_property(this, "nodeCount", void 0);
        _class_private_field_init(this, _edgeCount, {
            writable: true,
            value: void 0
        });
        _define_property(this, "retainedSizes", void 0);
        _define_property(this, "firstEdgeIndexes", void 0);
        _define_property(this, "retainingNodes", void 0);
        _define_property(this, "retainingEdges", void 0);
        _define_property(this, "firstRetainerIndex", void 0);
        _define_property(this, "nodeDistances", void 0);
        _define_property(this, "firstDominatedNodeIndex", void 0);
        _define_property(this, "dominatedNodes", void 0);
        _define_property(this, "dominatorsTree", void 0);
        _class_private_field_init(this, _allocationProfile, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _nodeDetachednessOffset, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _locationMap, {
            writable: true,
            value: void 0
        });
        _define_property(this, "lazyStringCache", void 0);
        _class_private_field_init(this, _ignoredNodesInRetainersView, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _ignoredEdgesInRetainersView, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _nodeDistancesForRetainersView, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _edgeNamesThatAreNotWeakMaps, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _syntheticClassNames, {
            writable: true,
            value: void 0
        });
        this.nodes = profile.nodes;
        this.containmentEdges = profile.edges;
        _class_private_field_set(this, _metaNode, profile.snapshot.meta);
        _class_private_field_set(this, _rawSamples, profile.samples);
        _class_private_field_set(this, _samples, null);
        this.strings = profile.strings;
        _class_private_field_set(this, _locations, profile.locations);
        _class_private_field_set(this, _progress, progress);
        _class_private_field_set(this, _noDistance, -5);
        this.rootNodeIndexInternal = 0;
        if (profile.snapshot.root_index) {
            this.rootNodeIndexInternal = profile.snapshot.root_index;
        }
        _class_private_field_set(this, _snapshotDiffs, {});
        _class_private_field_set(this, _aggregates, {});
        _class_private_field_set(this, _aggregatesSortedFlags, {});
        _class_private_field_set(this, _profile, profile);
        _class_private_field_set(this, _ignoredNodesInRetainersView, new Set());
        _class_private_field_set(this, _ignoredEdgesInRetainersView, new Set());
        _class_private_field_set(this, _edgeNamesThatAreNotWeakMaps, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.TypedArrayUtilities.createBitVector(this.strings.length));
        _class_private_field_set(this, _syntheticClassNames, new Map());
    }
    _create_class(HeapSnapshot, [
        {
            key: "initialize",
            value: function initialize() {
                var meta = _class_private_field_get(this, _metaNode);
                this.nodeTypeOffset = meta.node_fields.indexOf('type');
                this.nodeNameOffset = meta.node_fields.indexOf('name');
                this.nodeIdOffset = meta.node_fields.indexOf('id');
                this.nodeSelfSizeOffset = meta.node_fields.indexOf('self_size');
                _class_private_field_set(this, _nodeEdgeCountOffset, meta.node_fields.indexOf('edge_count'));
                this.nodeTraceNodeIdOffset = meta.node_fields.indexOf('trace_node_id');
                _class_private_field_set(this, _nodeDetachednessOffset, meta.node_fields.indexOf('detachedness'));
                this.nodeFieldCount = meta.node_fields.length;
                this.nodeTypes = meta.node_types[this.nodeTypeOffset];
                this.nodeArrayType = this.nodeTypes.indexOf('array');
                this.nodeHiddenType = this.nodeTypes.indexOf('hidden');
                this.nodeObjectType = this.nodeTypes.indexOf('object');
                this.nodeNativeType = this.nodeTypes.indexOf('native');
                this.nodeStringType = this.nodeTypes.indexOf('string');
                this.nodeConsStringType = this.nodeTypes.indexOf('concatenated string');
                this.nodeSlicedStringType = this.nodeTypes.indexOf('sliced string');
                this.nodeCodeType = this.nodeTypes.indexOf('code');
                this.nodeSyntheticType = this.nodeTypes.indexOf('synthetic');
                this.edgeFieldsCount = meta.edge_fields.length;
                this.edgeTypeOffset = meta.edge_fields.indexOf('type');
                this.edgeNameOffset = meta.edge_fields.indexOf('name_or_index');
                this.edgeToNodeOffset = meta.edge_fields.indexOf('to_node');
                this.edgeTypes = meta.edge_types[this.edgeTypeOffset];
                this.edgeTypes.push('invisible');
                this.edgeElementType = this.edgeTypes.indexOf('element');
                this.edgeHiddenType = this.edgeTypes.indexOf('hidden');
                this.edgeInternalType = this.edgeTypes.indexOf('internal');
                this.edgeShortcutType = this.edgeTypes.indexOf('shortcut');
                this.edgeWeakType = this.edgeTypes.indexOf('weak');
                this.edgeInvisibleType = this.edgeTypes.indexOf('invisible');
                var locationFields = meta.location_fields || [];
                _class_private_field_set(this, _locationIndexOffset, locationFields.indexOf('object_index'));
                _class_private_field_set(this, _locationScriptIdOffset, locationFields.indexOf('script_id'));
                _class_private_field_set(this, _locationLineOffset, locationFields.indexOf('line'));
                _class_private_field_set(this, _locationColumnOffset, locationFields.indexOf('column'));
                _class_private_field_set(this, _locationFieldCount, locationFields.length);
                this.nodeCount = this.nodes.length / this.nodeFieldCount;
                _class_private_field_set(this, _edgeCount, this.containmentEdges.length / this.edgeFieldsCount);
                this.retainedSizes = new Float64Array(this.nodeCount);
                this.firstEdgeIndexes = new Uint32Array(this.nodeCount + 1);
                this.retainingNodes = new Uint32Array(_class_private_field_get(this, _edgeCount));
                this.retainingEdges = new Uint32Array(_class_private_field_get(this, _edgeCount));
                this.firstRetainerIndex = new Uint32Array(this.nodeCount + 1);
                this.nodeDistances = new Int32Array(this.nodeCount);
                this.firstDominatedNodeIndex = new Uint32Array(this.nodeCount + 1);
                this.dominatedNodes = new Uint32Array(this.nodeCount - 1);
                _class_private_field_get(this, _progress).updateStatus('Building edge indexes…');
                this.buildEdgeIndexes();
                _class_private_field_get(this, _progress).updateStatus('Building retainers…');
                this.buildRetainers();
                _class_private_field_get(this, _progress).updateStatus('Propagating DOM state…');
                this.propagateDOMState();
                _class_private_field_get(this, _progress).updateStatus('Calculating node flags…');
                this.calculateFlags();
                _class_private_field_get(this, _progress).updateStatus('Calculating distances…');
                this.calculateDistances(/* isForRetainersView=*/ false);
                _class_private_field_get(this, _progress).updateStatus('Building postorder index…');
                var result = this.buildPostOrderIndex();
                // Actually it is array that maps node ordinal number to dominator node ordinal number.
                _class_private_field_get(this, _progress).updateStatus('Building dominator tree…');
                this.dominatorsTree = this.buildDominatorTree(result.postOrderIndex2NodeOrdinal, result.nodeOrdinal2PostOrderIndex);
                _class_private_field_get(this, _progress).updateStatus('Calculating shallow sizes…');
                this.calculateShallowSizes();
                _class_private_field_get(this, _progress).updateStatus('Calculating retained sizes…');
                this.calculateRetainedSizes(result.postOrderIndex2NodeOrdinal);
                _class_private_field_get(this, _progress).updateStatus('Building dominated nodes…');
                this.buildDominatedNodes();
                _class_private_field_get(this, _progress).updateStatus('Calculating statistics…');
                this.calculateStatistics();
                _class_private_field_get(this, _progress).updateStatus('Calculating samples…');
                this.buildSamples();
                _class_private_field_get(this, _progress).updateStatus('Building locations…');
                this.buildLocationMap();
                _class_private_field_get(this, _progress).updateStatus('Finished processing.');
                if (_class_private_field_get(this, _profile).snapshot.trace_function_count) {
                    _class_private_field_get(this, _progress).updateStatus('Building allocation statistics…');
                    var nodes = this.nodes;
                    var nodesLength = nodes.length;
                    var nodeFieldCount = this.nodeFieldCount;
                    var node = this.rootNode();
                    var liveObjects = {};
                    for(var nodeIndex = 0; nodeIndex < nodesLength; nodeIndex += nodeFieldCount){
                        node.nodeIndex = nodeIndex;
                        var traceNodeId = node.traceNodeId();
                        var stats = liveObjects[traceNodeId];
                        if (!stats) {
                            liveObjects[traceNodeId] = stats = {
                                count: 0,
                                size: 0,
                                ids: []
                            };
                        }
                        stats.count++;
                        stats.size += node.selfSize();
                        stats.ids.push(node.id());
                    }
                    _class_private_field_set(this, _allocationProfile, new _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_3__.AllocationProfile(_class_private_field_get(this, _profile), liveObjects));
                    _class_private_field_get(this, _progress).updateStatus('done');
                }
            }
        },
        {
            key: "buildEdgeIndexes",
            value: function buildEdgeIndexes() {
                var nodes = this.nodes;
                var nodeCount = this.nodeCount;
                var firstEdgeIndexes = this.firstEdgeIndexes;
                var nodeFieldCount = this.nodeFieldCount;
                var edgeFieldsCount = this.edgeFieldsCount;
                var nodeEdgeCountOffset = _class_private_field_get(this, _nodeEdgeCountOffset);
                firstEdgeIndexes[nodeCount] = this.containmentEdges.length;
                for(var nodeOrdinal = 0, edgeIndex = 0; nodeOrdinal < nodeCount; ++nodeOrdinal){
                    firstEdgeIndexes[nodeOrdinal] = edgeIndex;
                    edgeIndex += nodes.getValue(nodeOrdinal * nodeFieldCount + nodeEdgeCountOffset) * edgeFieldsCount;
                }
            }
        },
        {
            key: "buildRetainers",
            value: function buildRetainers() {
                var retainingNodes = this.retainingNodes;
                var retainingEdges = this.retainingEdges;
                // Index of the first retainer in the retainingNodes and retainingEdges
                // arrays. Addressed by retained node index.
                var firstRetainerIndex = this.firstRetainerIndex;
                var containmentEdges = this.containmentEdges;
                var edgeFieldsCount = this.edgeFieldsCount;
                var nodeFieldCount = this.nodeFieldCount;
                var edgeToNodeOffset = this.edgeToNodeOffset;
                var firstEdgeIndexes = this.firstEdgeIndexes;
                var nodeCount = this.nodeCount;
                for(var toNodeFieldIndex = edgeToNodeOffset, l = containmentEdges.length; toNodeFieldIndex < l; toNodeFieldIndex += edgeFieldsCount){
                    var toNodeIndex = containmentEdges.getValue(toNodeFieldIndex);
                    if (toNodeIndex % nodeFieldCount) {
                        throw new Error('Invalid toNodeIndex ' + toNodeIndex);
                    }
                    ++firstRetainerIndex[toNodeIndex / nodeFieldCount];
                }
                for(var i = 0, firstUnusedRetainerSlot = 0; i < nodeCount; i++){
                    var retainersCount = firstRetainerIndex[i];
                    firstRetainerIndex[i] = firstUnusedRetainerSlot;
                    retainingNodes[firstUnusedRetainerSlot] = retainersCount;
                    firstUnusedRetainerSlot += retainersCount;
                }
                firstRetainerIndex[nodeCount] = retainingNodes.length;
                var nextNodeFirstEdgeIndex = firstEdgeIndexes[0];
                for(var srcNodeOrdinal = 0; srcNodeOrdinal < nodeCount; ++srcNodeOrdinal){
                    var firstEdgeIndex = nextNodeFirstEdgeIndex;
                    nextNodeFirstEdgeIndex = firstEdgeIndexes[srcNodeOrdinal + 1];
                    var srcNodeIndex = srcNodeOrdinal * nodeFieldCount;
                    for(var edgeIndex = firstEdgeIndex; edgeIndex < nextNodeFirstEdgeIndex; edgeIndex += edgeFieldsCount){
                        var toNodeIndex1 = containmentEdges.getValue(edgeIndex + edgeToNodeOffset);
                        if (toNodeIndex1 % nodeFieldCount) {
                            throw new Error('Invalid toNodeIndex ' + toNodeIndex1);
                        }
                        var firstRetainerSlotIndex = firstRetainerIndex[toNodeIndex1 / nodeFieldCount];
                        var nextUnusedRetainerSlotIndex = firstRetainerSlotIndex + --retainingNodes[firstRetainerSlotIndex];
                        retainingNodes[nextUnusedRetainerSlotIndex] = srcNodeIndex;
                        retainingEdges[nextUnusedRetainerSlotIndex] = edgeIndex;
                    }
                }
            }
        },
        {
            key: "allNodes",
            value: function allNodes() {
                return new HeapSnapshotNodeIterator(this.rootNode());
            }
        },
        {
            key: "rootNode",
            value: function rootNode() {
                return this.createNode(this.rootNodeIndexInternal);
            }
        },
        {
            key: "rootNodeIndex",
            get: function get() {
                return this.rootNodeIndexInternal;
            }
        },
        {
            key: "totalSize",
            get: function get() {
                return this.rootNode().retainedSize();
            }
        },
        {
            key: "getDominatedIndex",
            value: function getDominatedIndex(nodeIndex) {
                if (nodeIndex % this.nodeFieldCount) {
                    throw new Error('Invalid nodeIndex: ' + nodeIndex);
                }
                return this.firstDominatedNodeIndex[nodeIndex / this.nodeFieldCount];
            }
        },
        {
            key: "createFilter",
            value: function createFilter(nodeFilter) {
                var minNodeId = nodeFilter.minNodeId, maxNodeId = nodeFilter.maxNodeId, allocationNodeId = nodeFilter.allocationNodeId, filterName = nodeFilter.filterName;
                var filter;
                if (typeof allocationNodeId === 'number') {
                    filter = this.createAllocationStackFilter(allocationNodeId);
                    if (!filter) {
                        throw new Error('Unable to create filter');
                    }
                    // @ts-ignore key can be added as a static property
                    filter.key = 'AllocationNodeId: ' + allocationNodeId;
                } else if (typeof minNodeId === 'number' && typeof maxNodeId === 'number') {
                    filter = this.createNodeIdFilter(minNodeId, maxNodeId);
                    // @ts-ignore key can be added as a static property
                    filter.key = 'NodeIdRange: ' + minNodeId + '..' + maxNodeId;
                } else if (filterName !== undefined) {
                    filter = this.createNamedFilter(filterName);
                    // @ts-ignore key can be added as a static property
                    filter.key = 'NamedFilter: ' + filterName;
                }
                return filter;
            }
        },
        {
            key: "search",
            value: function search(searchConfig, nodeFilter) {
                var query = searchConfig.query;
                function filterString(matchedStringIndexes, string, index) {
                    if (string.indexOf(query) !== -1) {
                        matchedStringIndexes.add(index);
                    }
                    return matchedStringIndexes;
                }
                var regexp = searchConfig.isRegex ? new RegExp(query) : _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.createPlainTextSearchRegex(query, 'i');
                function filterRegexp(matchedStringIndexes, string, index) {
                    if (regexp.test(string)) {
                        matchedStringIndexes.add(index);
                    }
                    return matchedStringIndexes;
                }
                var stringFilter = searchConfig.isRegex || !searchConfig.caseSensitive ? filterRegexp : filterString;
                var stringIndexes = this.strings.reduce(stringFilter, new Set());
                if (!stringIndexes.size) {
                    return [];
                }
                var filter = this.createFilter(nodeFilter);
                var nodeIds = [];
                var nodesLength = this.nodes.length;
                var nodes = this.nodes;
                var nodeNameOffset = this.nodeNameOffset;
                var nodeIdOffset = this.nodeIdOffset;
                var nodeFieldCount = this.nodeFieldCount;
                var node = this.rootNode();
                for(var nodeIndex = 0; nodeIndex < nodesLength; nodeIndex += nodeFieldCount){
                    node.nodeIndex = nodeIndex;
                    if (filter && !filter(node)) {
                        continue;
                    }
                    if (stringIndexes.has(nodes.getValue(nodeIndex + nodeNameOffset))) {
                        nodeIds.push(nodes.getValue(nodeIndex + nodeIdOffset));
                    }
                }
                return nodeIds;
            }
        },
        {
            key: "aggregatesWithFilter",
            value: function aggregatesWithFilter(nodeFilter) {
                var filter = this.createFilter(nodeFilter);
                // @ts-ignore key is added in createFilter
                var key = filter ? filter.key : 'allObjects';
                return this.getAggregatesByClassName(false, key, filter);
            }
        },
        {
            key: "createNodeIdFilter",
            value: function createNodeIdFilter(minNodeId, maxNodeId) {
                function nodeIdFilter(node) {
                    var id = node.id();
                    return id > minNodeId && id <= maxNodeId;
                }
                return nodeIdFilter;
            }
        },
        {
            key: "createAllocationStackFilter",
            value: function createAllocationStackFilter(bottomUpAllocationNodeId) {
                if (!_class_private_field_get(this, _allocationProfile)) {
                    throw new Error('No Allocation Profile provided');
                }
                var traceIds = _class_private_field_get(this, _allocationProfile).traceIds(bottomUpAllocationNodeId);
                if (!traceIds.length) {
                    return undefined;
                }
                var set = {};
                for(var i = 0; i < traceIds.length; i++){
                    set[traceIds[i]] = true;
                }
                function traceIdFilter(node) {
                    return Boolean(set[node.traceNodeId()]);
                }
                return traceIdFilter;
            }
        },
        {
            key: "createNamedFilter",
            value: function createNamedFilter(filterName) {
                var _this = this;
                // Allocate an array with a single bit per node, which can be used by each
                // specific filter implemented below.
                var bitmap = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.TypedArrayUtilities.createBitVector(this.nodeCount);
                var getBit = function(node) {
                    var ordinal = node.nodeIndex / _this.nodeFieldCount;
                    return bitmap.getBit(ordinal);
                };
                // Traverses the graph in breadth-first order with the given filter, and
                // sets the bit in `bitmap` for every visited node.
                var traverse = function(filter) {
                    var distances = new Int32Array(_this.nodeCount);
                    for(var i = 0; i < _this.nodeCount; ++i){
                        distances[i] = _class_private_field_get(_this, _noDistance);
                    }
                    var nodesToVisit = new Uint32Array(_this.nodeCount);
                    distances[_this.rootNode().ordinal()] = 0;
                    nodesToVisit[0] = _this.rootNode().nodeIndex;
                    var nodesToVisitLength = 1;
                    _this.bfs(nodesToVisit, nodesToVisitLength, distances, filter);
                    for(var i1 = 0; i1 < _this.nodeCount; ++i1){
                        if (distances[i1] !== _class_private_field_get(_this, _noDistance)) {
                            bitmap.setBit(i1);
                        }
                    }
                };
                var markUnreachableNodes = function() {
                    for(var i = 0; i < _this.nodeCount; ++i){
                        if (_this.nodeDistances[i] === _class_private_field_get(_this, _noDistance)) {
                            bitmap.setBit(i);
                        }
                    }
                };
                switch(filterName){
                    case 'objectsRetainedByDetachedDomNodes':
                        // Traverse the graph, avoiding detached nodes.
                        traverse(function(node, edge) {
                            return _this.nodes.getValue(edge.nodeIndex() + _class_private_field_get(_this, _nodeDetachednessOffset)) !== 2 /* DOMLinkState.Detached */ ;
                        });
                        markUnreachableNodes();
                        return function(node) {
                            return !getBit(node);
                        };
                    case 'objectsRetainedByConsole':
                        // Traverse the graph, avoiding edges that represent globals owned by
                        // the DevTools console.
                        traverse(function(node, edge) {
                            return !(node.isSynthetic() && edge.hasStringName() && edge.name().endsWith(' / DevTools console'));
                        });
                        markUnreachableNodes();
                        return function(node) {
                            return !getBit(node);
                        };
                    case 'duplicatedStrings':
                        {
                            var stringToNodeIndexMap = new Map();
                            var node = this.createNode(0);
                            for(var i = 0; i < this.nodeCount; ++i){
                                node.nodeIndex = i * this.nodeFieldCount;
                                var rawType = node.rawType();
                                if (rawType === this.nodeStringType || rawType === this.nodeConsStringType) {
                                    // Check whether the cons string is already "flattened", meaning
                                    // that one of its two parts is the empty string. If so, we should
                                    // skip it. We don't help anyone by reporting a flattened cons
                                    // string as a duplicate with its own content, since V8 controls
                                    // that behavior internally.
                                    if (node.isFlatConsString()) {
                                        continue;
                                    }
                                    var name = node.name();
                                    var alreadyVisitedNodeIndex = stringToNodeIndexMap.get(name);
                                    if (alreadyVisitedNodeIndex === undefined) {
                                        stringToNodeIndexMap.set(name, node.nodeIndex);
                                    } else {
                                        bitmap.setBit(alreadyVisitedNodeIndex / this.nodeFieldCount);
                                        bitmap.setBit(node.nodeIndex / this.nodeFieldCount);
                                    }
                                }
                            }
                            return getBit;
                        }
                }
                throw new Error('Invalid filter name');
            }
        },
        {
            key: "getAggregatesByClassName",
            value: function getAggregatesByClassName(sortedIndexes, key, filter) {
                var aggregates = this.buildAggregates(filter);
                var aggregatesByClassName;
                if (key && _class_private_field_get(this, _aggregates)[key]) {
                    aggregatesByClassName = _class_private_field_get(this, _aggregates)[key];
                } else {
                    this.calculateClassesRetainedSize(aggregates.aggregatesByClassIndex, filter);
                    aggregatesByClassName = aggregates.aggregatesByClassName;
                    if (key) {
                        _class_private_field_get(this, _aggregates)[key] = aggregatesByClassName;
                    }
                }
                if (sortedIndexes && (!key || !_class_private_field_get(this, _aggregatesSortedFlags)[key])) {
                    this.sortAggregateIndexes(aggregatesByClassName);
                    if (key) {
                        _class_private_field_get(this, _aggregatesSortedFlags)[key] = sortedIndexes;
                    }
                }
                return aggregatesByClassName;
            }
        },
        {
            key: "allocationTracesTops",
            value: function allocationTracesTops() {
                return _class_private_field_get(this, _allocationProfile).serializeTraceTops();
            }
        },
        {
            key: "allocationNodeCallers",
            value: function allocationNodeCallers(nodeId) {
                return _class_private_field_get(this, _allocationProfile).serializeCallers(nodeId);
            }
        },
        {
            key: "allocationStack",
            value: function allocationStack(nodeIndex) {
                var node = this.createNode(nodeIndex);
                var allocationNodeId = node.traceNodeId();
                if (!allocationNodeId) {
                    return null;
                }
                return _class_private_field_get(this, _allocationProfile).serializeAllocationStack(allocationNodeId);
            }
        },
        {
            key: "aggregatesForDiff",
            value: function aggregatesForDiff() {
                if (_class_private_field_get(this, _aggregatesForDiffInternal)) {
                    return _class_private_field_get(this, _aggregatesForDiffInternal);
                }
                var aggregatesByClassName = this.getAggregatesByClassName(true, 'allObjects');
                _class_private_field_set(this, _aggregatesForDiffInternal, {});
                var node = this.createNode();
                for(var className in aggregatesByClassName){
                    var aggregate = aggregatesByClassName[className];
                    var indexes = aggregate.idxs;
                    var ids = new Array(indexes.length);
                    var selfSizes = new Array(indexes.length);
                    for(var i = 0; i < indexes.length; i++){
                        node.nodeIndex = indexes[i];
                        ids[i] = node.id();
                        selfSizes[i] = node.selfSize();
                    }
                    _class_private_field_get(this, _aggregatesForDiffInternal)[className] = {
                        indexes: indexes,
                        ids: ids,
                        selfSizes: selfSizes
                    };
                }
                return _class_private_field_get(this, _aggregatesForDiffInternal);
            }
        },
        {
            key: "isUserRoot",
            value: function isUserRoot(_node) {
                return true;
            }
        },
        {
            key: "calculateShallowSizes",
            value: function calculateShallowSizes() {}
        },
        {
            key: "calculateDistances",
            value: function calculateDistances(isForRetainersView, filter) {
                var _this = this;
                var nodeCount = this.nodeCount;
                if (isForRetainersView) {
                    var originalFilter = filter;
                    filter = function(node, edge) {
                        return !_class_private_field_get(_this, _ignoredNodesInRetainersView).has(edge.nodeIndex()) && (!originalFilter || originalFilter(node, edge));
                    };
                    if (_class_private_field_get(this, _nodeDistancesForRetainersView) === undefined) {
                        _class_private_field_set(this, _nodeDistancesForRetainersView, new Int32Array(nodeCount));
                    }
                }
                var distances = isForRetainersView ? _class_private_field_get(this, _nodeDistancesForRetainersView) : this.nodeDistances;
                var noDistance = _class_private_field_get(this, _noDistance);
                for(var i = 0; i < nodeCount; ++i){
                    distances[i] = noDistance;
                }
                var nodesToVisit = new Uint32Array(this.nodeCount);
                var nodesToVisitLength = 0;
                // BFS for user root objects.
                for(var iter = this.rootNode().edges(); iter.hasNext(); iter.next()){
                    var node = iter.edge.node();
                    if (this.isUserRoot(node)) {
                        distances[node.ordinal()] = 1;
                        nodesToVisit[nodesToVisitLength++] = node.nodeIndex;
                    }
                }
                this.bfs(nodesToVisit, nodesToVisitLength, distances, filter);
                // BFS for objects not reached from user roots.
                distances[this.rootNode().ordinal()] = nodesToVisitLength > 0 ? _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.baseSystemDistance : 0;
                nodesToVisit[0] = this.rootNode().nodeIndex;
                nodesToVisitLength = 1;
                this.bfs(nodesToVisit, nodesToVisitLength, distances, filter);
            }
        },
        {
            key: "bfs",
            value: function bfs(nodesToVisit, nodesToVisitLength, distances, filter) {
                // Preload fields into local variables for better performance.
                var edgeFieldsCount = this.edgeFieldsCount;
                var nodeFieldCount = this.nodeFieldCount;
                var containmentEdges = this.containmentEdges;
                var firstEdgeIndexes = this.firstEdgeIndexes;
                var edgeToNodeOffset = this.edgeToNodeOffset;
                var edgeTypeOffset = this.edgeTypeOffset;
                var nodeCount = this.nodeCount;
                var edgeWeakType = this.edgeWeakType;
                var noDistance = _class_private_field_get(this, _noDistance);
                var index = 0;
                var edge = this.createEdge(0);
                var node = this.createNode(0);
                while(index < nodesToVisitLength){
                    var nodeIndex = nodesToVisit[index++]; // shift generates too much garbage.
                    var nodeOrdinal = nodeIndex / nodeFieldCount;
                    var distance = distances[nodeOrdinal] + 1;
                    var firstEdgeIndex = firstEdgeIndexes[nodeOrdinal];
                    var edgesEnd = firstEdgeIndexes[nodeOrdinal + 1];
                    node.nodeIndex = nodeIndex;
                    for(var edgeIndex = firstEdgeIndex; edgeIndex < edgesEnd; edgeIndex += edgeFieldsCount){
                        var edgeType = containmentEdges.getValue(edgeIndex + edgeTypeOffset);
                        if (edgeType === edgeWeakType) {
                            continue;
                        }
                        var childNodeIndex = containmentEdges.getValue(edgeIndex + edgeToNodeOffset);
                        var childNodeOrdinal = childNodeIndex / nodeFieldCount;
                        if (distances[childNodeOrdinal] !== noDistance) {
                            continue;
                        }
                        edge.edgeIndex = edgeIndex;
                        if (filter && !filter(node, edge)) {
                            continue;
                        }
                        distances[childNodeOrdinal] = distance;
                        nodesToVisit[nodesToVisitLength++] = childNodeIndex;
                    }
                }
                if (nodesToVisitLength > nodeCount) {
                    throw new Error('BFS failed. Nodes to visit (' + nodesToVisitLength + ') is more than nodes count (' + nodeCount + ')');
                }
            }
        },
        {
            key: "buildAggregates",
            value: function buildAggregates(filter) {
                var aggregates = {};
                var aggregatesByClassName = {};
                var classIndexes = [];
                var nodes = this.nodes;
                var nodesLength = nodes.length;
                var nodeFieldCount = this.nodeFieldCount;
                var selfSizeOffset = this.nodeSelfSizeOffset;
                var node = this.rootNode();
                var nodeDistances = this.nodeDistances;
                for(var nodeIndex = 0; nodeIndex < nodesLength; nodeIndex += nodeFieldCount){
                    node.nodeIndex = nodeIndex;
                    if (filter && !filter(node)) {
                        continue;
                    }
                    var selfSize = nodes.getValue(nodeIndex + selfSizeOffset);
                    if (!selfSize) {
                        continue;
                    }
                    var classIndex = node.classIndex();
                    var nodeOrdinal = nodeIndex / nodeFieldCount;
                    var distance = nodeDistances[nodeOrdinal];
                    if (!(classIndex in aggregates)) {
                        var nodeType = node.type();
                        var nameMatters = nodeType === 'object' || nodeType === 'native';
                        var value = {
                            count: 1,
                            distance: distance,
                            self: selfSize,
                            maxRet: 0,
                            type: nodeType,
                            name: nameMatters ? node.className() : null,
                            idxs: [
                                nodeIndex
                            ]
                        };
                        aggregates[classIndex] = value;
                        classIndexes.push(classIndex);
                        aggregatesByClassName[node.className()] = value;
                    } else {
                        var clss = aggregates[classIndex];
                        if (!clss) {
                            continue;
                        }
                        clss.distance = Math.min(clss.distance, distance);
                        ++clss.count;
                        clss.self += selfSize;
                        clss.idxs.push(nodeIndex);
                    }
                }
                // Shave off provisionally allocated space.
                for(var i = 0, l = classIndexes.length; i < l; ++i){
                    var classIndex1 = classIndexes[i];
                    var classIndexValues = aggregates[classIndex1];
                    if (!classIndexValues) {
                        continue;
                    }
                    classIndexValues.idxs = classIndexValues.idxs.slice();
                }
                return {
                    aggregatesByClassName: aggregatesByClassName,
                    aggregatesByClassIndex: aggregates
                };
            }
        },
        {
            key: "calculateClassesRetainedSize",
            value: function calculateClassesRetainedSize(aggregates, filter) {
                var rootNodeIndex = this.rootNodeIndexInternal;
                var node = this.createNode(rootNodeIndex);
                var list = [
                    rootNodeIndex
                ];
                var sizes = [
                    -1
                ];
                var classes = [];
                var seenClassNameIndexes = new Map();
                var nodeFieldCount = this.nodeFieldCount;
                var dominatedNodes = this.dominatedNodes;
                var firstDominatedNodeIndex = this.firstDominatedNodeIndex;
                while(list.length){
                    var nodeIndex = list.pop();
                    node.nodeIndex = nodeIndex;
                    var classIndex = node.classIndex();
                    var seen = Boolean(seenClassNameIndexes.get(classIndex));
                    var nodeOrdinal = nodeIndex / nodeFieldCount;
                    var dominatedIndexFrom = firstDominatedNodeIndex[nodeOrdinal];
                    var dominatedIndexTo = firstDominatedNodeIndex[nodeOrdinal + 1];
                    if (!seen && (!filter || filter(node)) && node.selfSize()) {
                        aggregates[classIndex].maxRet += node.retainedSize();
                        if (dominatedIndexFrom !== dominatedIndexTo) {
                            seenClassNameIndexes.set(classIndex, true);
                            sizes.push(list.length);
                            classes.push(classIndex);
                        }
                    }
                    for(var i = dominatedIndexFrom; i < dominatedIndexTo; i++){
                        list.push(dominatedNodes[i]);
                    }
                    var l = list.length;
                    while(sizes[sizes.length - 1] === l){
                        sizes.pop();
                        classIndex = classes.pop();
                        seenClassNameIndexes.set(classIndex, false);
                    }
                }
            }
        },
        {
            key: "sortAggregateIndexes",
            value: function sortAggregateIndexes(aggregates) {
                var nodeA = this.createNode();
                var nodeB = this.createNode();
                for(var clss in aggregates){
                    aggregates[clss].idxs.sort(function(idxA, idxB) {
                        nodeA.nodeIndex = idxA;
                        nodeB.nodeIndex = idxB;
                        return nodeA.id() < nodeB.id() ? -1 : 1;
                    });
                }
            }
        },
        {
            key: "tryParseWeakMapEdgeName",
            value: function tryParseWeakMapEdgeName(edgeNameIndex) {
                var previousResult = _class_private_field_get(this, _edgeNamesThatAreNotWeakMaps).getBit(edgeNameIndex);
                if (previousResult) {
                    return undefined;
                }
                var edgeName = this.strings[edgeNameIndex];
                var ephemeronNameRegex = RegExp("^\\d+(?<duplicatedPart> \\/ part of key \\(.*? @\\d+\\) -> value \\(.*? @\\d+\\) pair in WeakMap \\(table @(?<tableId>\\d+)\\))$");
                var match = edgeName.match(ephemeronNameRegex);
                if (!match) {
                    _class_private_field_get(this, _edgeNamesThatAreNotWeakMaps).setBit(edgeNameIndex);
                    return undefined;
                }
                return match.groups;
            }
        },
        {
            /**
     * The function checks is the edge should be considered during building
     * postorder iterator and dominator tree.
     */ key: "isEssentialEdge",
            value: function isEssentialEdge(nodeIndex, edgeIndex) {
                var edgeType = this.containmentEdges.getValue(edgeIndex + this.edgeTypeOffset);
                // Values in WeakMaps are retained by the key and table together. Removing
                // either the key or the table would be sufficient to remove the edge from
                // the other one, so we needn't use both of those edges when computing
                // dominators. We've found that the edge from the key generally produces
                // more useful results, so here we skip the edge from the table.
                if (edgeType === this.edgeInternalType) {
                    var edgeNameIndex = this.containmentEdges.getValue(edgeIndex + this.edgeNameOffset);
                    var match = this.tryParseWeakMapEdgeName(edgeNameIndex);
                    if (match) {
                        var nodeId = this.nodes.getValue(nodeIndex + this.nodeIdOffset);
                        return nodeId !== parseInt(match.tableId, 10);
                    }
                }
                // Shortcuts at the root node have special meaning of marking user global objects.
                return edgeType !== this.edgeWeakType && (edgeType !== this.edgeShortcutType || nodeIndex === this.rootNodeIndexInternal);
            }
        },
        {
            key: "buildPostOrderIndex",
            value: function buildPostOrderIndex() {
                var nodeFieldCount = this.nodeFieldCount;
                var nodeCount = this.nodeCount;
                var rootNodeOrdinal = this.rootNodeIndexInternal / nodeFieldCount;
                var edgeFieldsCount = this.edgeFieldsCount;
                var edgeToNodeOffset = this.edgeToNodeOffset;
                var firstEdgeIndexes = this.firstEdgeIndexes;
                var containmentEdges = this.containmentEdges;
                var mapAndFlag = this.userObjectsMapAndFlag();
                var flags = mapAndFlag ? mapAndFlag.map : null;
                var flag = mapAndFlag ? mapAndFlag.flag : 0;
                var stackNodes = new Uint32Array(nodeCount);
                var stackCurrentEdge = new Uint32Array(nodeCount);
                var postOrderIndex2NodeOrdinal = new Uint32Array(nodeCount);
                var nodeOrdinal2PostOrderIndex = new Uint32Array(nodeCount);
                var visited = new Uint8Array(nodeCount);
                var postOrderIndex = 0;
                var stackTop = 0;
                stackNodes[0] = rootNodeOrdinal;
                stackCurrentEdge[0] = firstEdgeIndexes[rootNodeOrdinal];
                visited[rootNodeOrdinal] = 1;
                var iteration = 0;
                while(true){
                    ++iteration;
                    while(stackTop >= 0){
                        var nodeOrdinal = stackNodes[stackTop];
                        var edgeIndex = stackCurrentEdge[stackTop];
                        var edgesEnd = firstEdgeIndexes[nodeOrdinal + 1];
                        if (edgeIndex < edgesEnd) {
                            stackCurrentEdge[stackTop] += edgeFieldsCount;
                            if (!this.isEssentialEdge(nodeOrdinal * nodeFieldCount, edgeIndex)) {
                                continue;
                            }
                            var childNodeIndex = containmentEdges.getValue(edgeIndex + edgeToNodeOffset);
                            var childNodeOrdinal = childNodeIndex / nodeFieldCount;
                            if (visited[childNodeOrdinal]) {
                                continue;
                            }
                            var nodeFlag = !flags || flags[nodeOrdinal] & flag;
                            var childNodeFlag = !flags || flags[childNodeOrdinal] & flag;
                            // We are skipping the edges from non-page-owned nodes to page-owned nodes.
                            // Otherwise the dominators for the objects that also were retained by debugger would be affected.
                            if (nodeOrdinal !== rootNodeOrdinal && childNodeFlag && !nodeFlag) {
                                continue;
                            }
                            ++stackTop;
                            stackNodes[stackTop] = childNodeOrdinal;
                            stackCurrentEdge[stackTop] = firstEdgeIndexes[childNodeOrdinal];
                            visited[childNodeOrdinal] = 1;
                        } else {
                            // Done with all the node children
                            nodeOrdinal2PostOrderIndex[nodeOrdinal] = postOrderIndex;
                            postOrderIndex2NodeOrdinal[postOrderIndex++] = nodeOrdinal;
                            --stackTop;
                        }
                    }
                    if (postOrderIndex === nodeCount || iteration > 1) {
                        break;
                    }
                    var errors = new HeapSnapshotProblemReport("Heap snapshot: ".concat(nodeCount - postOrderIndex, " nodes are unreachable from the root. Following nodes have only weak retainers:"));
                    var dumpNode = this.rootNode();
                    // Remove root from the result (last node in the array) and put it at the bottom of the stack so that it is
                    // visited after all orphan nodes and their subgraphs.
                    --postOrderIndex;
                    stackTop = 0;
                    stackNodes[0] = rootNodeOrdinal;
                    stackCurrentEdge[0] = firstEdgeIndexes[rootNodeOrdinal + 1]; // no need to reiterate its edges
                    for(var i = 0; i < nodeCount; ++i){
                        if (visited[i] || !this.hasOnlyWeakRetainers(i)) {
                            continue;
                        }
                        // Add all nodes that have only weak retainers to traverse their subgraphs.
                        stackNodes[++stackTop] = i;
                        stackCurrentEdge[stackTop] = firstEdgeIndexes[i];
                        visited[i] = 1;
                        dumpNode.nodeIndex = i * nodeFieldCount;
                        var retainers = [];
                        for(var it = dumpNode.retainers(); it.hasNext(); it.next()){
                            retainers.push("".concat(it.item().node().name(), "@").concat(it.item().node().id(), ".").concat(it.item().name()));
                        }
                        errors.addError("".concat(dumpNode.name(), " @").concat(dumpNode.id(), "  weak retainers: ").concat(retainers.join(', ')));
                    }
                    console.warn(errors.toString());
                }
                // If we already processed all orphan nodes that have only weak retainers and still have some orphans...
                if (postOrderIndex !== nodeCount) {
                    var errors1 = new HeapSnapshotProblemReport('Still found ' + (nodeCount - postOrderIndex) + ' unreachable nodes in heap snapshot:');
                    var dumpNode1 = this.rootNode();
                    // Remove root from the result (last node in the array) and put it at the bottom of the stack so that it is
                    // visited after all orphan nodes and their subgraphs.
                    --postOrderIndex;
                    for(var i1 = 0; i1 < nodeCount; ++i1){
                        if (visited[i1]) {
                            continue;
                        }
                        dumpNode1.nodeIndex = i1 * nodeFieldCount;
                        errors1.addError(dumpNode1.name() + ' @' + dumpNode1.id());
                        // Fix it by giving the node a postorder index anyway.
                        nodeOrdinal2PostOrderIndex[i1] = postOrderIndex;
                        postOrderIndex2NodeOrdinal[postOrderIndex++] = i1;
                    }
                    nodeOrdinal2PostOrderIndex[rootNodeOrdinal] = postOrderIndex;
                    postOrderIndex2NodeOrdinal[postOrderIndex++] = rootNodeOrdinal;
                    console.warn(errors1.toString());
                }
                return {
                    postOrderIndex2NodeOrdinal: postOrderIndex2NodeOrdinal,
                    nodeOrdinal2PostOrderIndex: nodeOrdinal2PostOrderIndex
                };
            }
        },
        {
            key: "hasOnlyWeakRetainers",
            value: function hasOnlyWeakRetainers(nodeOrdinal) {
                var edgeTypeOffset = this.edgeTypeOffset;
                var edgeWeakType = this.edgeWeakType;
                var edgeShortcutType = this.edgeShortcutType;
                var containmentEdges = this.containmentEdges;
                var retainingEdges = this.retainingEdges;
                var beginRetainerIndex = this.firstRetainerIndex[nodeOrdinal];
                var endRetainerIndex = this.firstRetainerIndex[nodeOrdinal + 1];
                for(var retainerIndex = beginRetainerIndex; retainerIndex < endRetainerIndex; ++retainerIndex){
                    var retainerEdgeIndex = retainingEdges[retainerIndex];
                    var retainerEdgeType = containmentEdges.getValue(retainerEdgeIndex + edgeTypeOffset);
                    if (retainerEdgeType !== edgeWeakType && retainerEdgeType !== edgeShortcutType) {
                        return false;
                    }
                }
                return true;
            }
        },
        {
            // The algorithm is based on the article:
            // K. Cooper, T. Harvey and K. Kennedy "A Simple, Fast Dominance Algorithm"
            // Softw. Pract. Exper. 4 (2001), pp. 1-10.
            key: "buildDominatorTree",
            value: function buildDominatorTree(postOrderIndex2NodeOrdinal, nodeOrdinal2PostOrderIndex) {
                var nodeFieldCount = this.nodeFieldCount;
                var firstRetainerIndex = this.firstRetainerIndex;
                var retainingNodes = this.retainingNodes;
                var retainingEdges = this.retainingEdges;
                var edgeFieldsCount = this.edgeFieldsCount;
                var edgeToNodeOffset = this.edgeToNodeOffset;
                var firstEdgeIndexes = this.firstEdgeIndexes;
                var containmentEdges = this.containmentEdges;
                var rootNodeIndex = this.rootNodeIndexInternal;
                var mapAndFlag = this.userObjectsMapAndFlag();
                var flags = mapAndFlag ? mapAndFlag.map : null;
                var flag = mapAndFlag ? mapAndFlag.flag : 0;
                var nodesCount = postOrderIndex2NodeOrdinal.length;
                var rootPostOrderedIndex = nodesCount - 1;
                var noEntry = nodesCount;
                var dominators = new Uint32Array(nodesCount);
                for(var i = 0; i < rootPostOrderedIndex; ++i){
                    dominators[i] = noEntry;
                }
                dominators[rootPostOrderedIndex] = rootPostOrderedIndex;
                // The affected array is used to mark entries which dominators
                // have to be recalculated because of changes in their retainers.
                var affected = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.TypedArrayUtilities.createBitVector(nodesCount);
                var nodeOrdinal;
                {
                    nodeOrdinal = this.rootNodeIndexInternal / nodeFieldCount;
                    var endEdgeIndex = firstEdgeIndexes[nodeOrdinal + 1];
                    for(var edgeIndex = firstEdgeIndexes[nodeOrdinal]; edgeIndex < endEdgeIndex; edgeIndex += edgeFieldsCount){
                        if (!this.isEssentialEdge(this.rootNodeIndexInternal, edgeIndex)) {
                            continue;
                        }
                        var childNodeOrdinal = containmentEdges.getValue(edgeIndex + edgeToNodeOffset) / nodeFieldCount;
                        affected.setBit(nodeOrdinal2PostOrderIndex[childNodeOrdinal]);
                    }
                }
                var changed = true;
                while(changed){
                    changed = false;
                    for(var postOrderIndex = affected.previous(rootPostOrderedIndex); postOrderIndex >= 0; postOrderIndex = affected.previous(postOrderIndex)){
                        affected.clearBit(postOrderIndex);
                        // If dominator of the entry has already been set to root,
                        // then it can't propagate any further.
                        if (dominators[postOrderIndex] === rootPostOrderedIndex) {
                            continue;
                        }
                        nodeOrdinal = postOrderIndex2NodeOrdinal[postOrderIndex];
                        var nodeFlag = !flags || flags[nodeOrdinal] & flag;
                        var newDominatorIndex = noEntry;
                        var beginRetainerIndex = firstRetainerIndex[nodeOrdinal];
                        var endRetainerIndex = firstRetainerIndex[nodeOrdinal + 1];
                        var orphanNode = true;
                        for(var retainerIndex = beginRetainerIndex; retainerIndex < endRetainerIndex; ++retainerIndex){
                            var retainerEdgeIndex = retainingEdges[retainerIndex];
                            var retainerNodeIndex = retainingNodes[retainerIndex];
                            if (!this.isEssentialEdge(retainerNodeIndex, retainerEdgeIndex)) {
                                continue;
                            }
                            orphanNode = false;
                            var retainerNodeOrdinal = retainerNodeIndex / nodeFieldCount;
                            var retainerNodeFlag = !flags || flags[retainerNodeOrdinal] & flag;
                            // We are skipping the edges from non-page-owned nodes to page-owned nodes.
                            // Otherwise the dominators for the objects that also were retained by debugger would be affected.
                            if (retainerNodeIndex !== rootNodeIndex && nodeFlag && !retainerNodeFlag) {
                                continue;
                            }
                            var retainerPostOrderIndex = nodeOrdinal2PostOrderIndex[retainerNodeOrdinal];
                            if (dominators[retainerPostOrderIndex] !== noEntry) {
                                if (newDominatorIndex === noEntry) {
                                    newDominatorIndex = retainerPostOrderIndex;
                                } else {
                                    while(retainerPostOrderIndex !== newDominatorIndex){
                                        while(retainerPostOrderIndex < newDominatorIndex){
                                            retainerPostOrderIndex = dominators[retainerPostOrderIndex];
                                        }
                                        while(newDominatorIndex < retainerPostOrderIndex){
                                            newDominatorIndex = dominators[newDominatorIndex];
                                        }
                                    }
                                }
                                // If item has already reached the root, it doesn't make sense
                                // to check other retainers.
                                if (newDominatorIndex === rootPostOrderedIndex) {
                                    break;
                                }
                            }
                        }
                        // Make root dominator of orphans.
                        if (orphanNode) {
                            newDominatorIndex = rootPostOrderedIndex;
                        }
                        if (newDominatorIndex !== noEntry && dominators[postOrderIndex] !== newDominatorIndex) {
                            dominators[postOrderIndex] = newDominatorIndex;
                            changed = true;
                            nodeOrdinal = postOrderIndex2NodeOrdinal[postOrderIndex];
                            var beginEdgeToNodeFieldIndex = firstEdgeIndexes[nodeOrdinal] + edgeToNodeOffset;
                            var endEdgeToNodeFieldIndex = firstEdgeIndexes[nodeOrdinal + 1];
                            for(var toNodeFieldIndex = beginEdgeToNodeFieldIndex; toNodeFieldIndex < endEdgeToNodeFieldIndex; toNodeFieldIndex += edgeFieldsCount){
                                var childNodeOrdinal1 = containmentEdges.getValue(toNodeFieldIndex) / nodeFieldCount;
                                affected.setBit(nodeOrdinal2PostOrderIndex[childNodeOrdinal1]);
                            }
                        }
                    }
                }
                var dominatorsTree = new Uint32Array(nodesCount);
                for(var postOrderIndex1 = 0, l = dominators.length; postOrderIndex1 < l; ++postOrderIndex1){
                    nodeOrdinal = postOrderIndex2NodeOrdinal[postOrderIndex1];
                    dominatorsTree[nodeOrdinal] = postOrderIndex2NodeOrdinal[dominators[postOrderIndex1]];
                }
                return dominatorsTree;
            }
        },
        {
            key: "calculateRetainedSizes",
            value: function calculateRetainedSizes(postOrderIndex2NodeOrdinal) {
                var nodeCount = this.nodeCount;
                var nodes = this.nodes;
                var nodeSelfSizeOffset = this.nodeSelfSizeOffset;
                var nodeFieldCount = this.nodeFieldCount;
                var dominatorsTree = this.dominatorsTree;
                var retainedSizes = this.retainedSizes;
                for(var nodeOrdinal = 0; nodeOrdinal < nodeCount; ++nodeOrdinal){
                    retainedSizes[nodeOrdinal] = nodes.getValue(nodeOrdinal * nodeFieldCount + nodeSelfSizeOffset);
                }
                // Propagate retained sizes for each node excluding root.
                for(var postOrderIndex = 0; postOrderIndex < nodeCount - 1; ++postOrderIndex){
                    var nodeOrdinal1 = postOrderIndex2NodeOrdinal[postOrderIndex];
                    var dominatorOrdinal = dominatorsTree[nodeOrdinal1];
                    retainedSizes[dominatorOrdinal] += retainedSizes[nodeOrdinal1];
                }
            }
        },
        {
            key: "buildDominatedNodes",
            value: function buildDominatedNodes() {
                // Builds up two arrays:
                //  - "dominatedNodes" is a continuous array, where each node owns an
                //    interval (can be empty) with corresponding dominated nodes.
                //  - "indexArray" is an array of indexes in the "dominatedNodes"
                //    with the same positions as in the _nodeIndex.
                var indexArray = this.firstDominatedNodeIndex;
                // All nodes except the root have dominators.
                var dominatedNodes = this.dominatedNodes;
                // Count the number of dominated nodes for each node. Skip the root (node at
                // index 0) as it is the only node that dominates itself.
                var nodeFieldCount = this.nodeFieldCount;
                var dominatorsTree = this.dominatorsTree;
                var fromNodeOrdinal = 0;
                var toNodeOrdinal = this.nodeCount;
                var rootNodeOrdinal = this.rootNodeIndexInternal / nodeFieldCount;
                if (rootNodeOrdinal === fromNodeOrdinal) {
                    fromNodeOrdinal = 1;
                } else if (rootNodeOrdinal === toNodeOrdinal - 1) {
                    toNodeOrdinal = toNodeOrdinal - 1;
                } else {
                    throw new Error('Root node is expected to be either first or last');
                }
                for(var nodeOrdinal = fromNodeOrdinal; nodeOrdinal < toNodeOrdinal; ++nodeOrdinal){
                    ++indexArray[dominatorsTree[nodeOrdinal]];
                }
                // Put in the first slot of each dominatedNodes slice the count of entries
                // that will be filled.
                var firstDominatedNodeIndex = 0;
                for(var i = 0, l = this.nodeCount; i < l; ++i){
                    var dominatedCount = dominatedNodes[firstDominatedNodeIndex] = indexArray[i];
                    indexArray[i] = firstDominatedNodeIndex;
                    firstDominatedNodeIndex += dominatedCount;
                }
                indexArray[this.nodeCount] = dominatedNodes.length;
                // Fill up the dominatedNodes array with indexes of dominated nodes. Skip the root (node at
                // index 0) as it is the only node that dominates itself.
                for(var nodeOrdinal1 = fromNodeOrdinal; nodeOrdinal1 < toNodeOrdinal; ++nodeOrdinal1){
                    var dominatorOrdinal = dominatorsTree[nodeOrdinal1];
                    var dominatedRefIndex = indexArray[dominatorOrdinal];
                    dominatedRefIndex += --dominatedNodes[dominatedRefIndex];
                    dominatedNodes[dominatedRefIndex] = nodeOrdinal1 * nodeFieldCount;
                }
            }
        },
        {
            /**
     * Iterates children of a node.
     */ key: "iterateFilteredChildren",
            value: function iterateFilteredChildren(nodeOrdinal, edgeFilterCallback, childCallback) {
                var beginEdgeIndex = this.firstEdgeIndexes[nodeOrdinal];
                var endEdgeIndex = this.firstEdgeIndexes[nodeOrdinal + 1];
                for(var edgeIndex = beginEdgeIndex; edgeIndex < endEdgeIndex; edgeIndex += this.edgeFieldsCount){
                    var childNodeIndex = this.containmentEdges.getValue(edgeIndex + this.edgeToNodeOffset);
                    var childNodeOrdinal = childNodeIndex / this.nodeFieldCount;
                    var type = this.containmentEdges.getValue(edgeIndex + this.edgeTypeOffset);
                    if (!edgeFilterCallback(type)) {
                        continue;
                    }
                    childCallback(childNodeOrdinal);
                }
            }
        },
        {
            /**
     * Adds a string to the snapshot.
     */ key: "addString",
            value: function addString(string) {
                this.strings.push(string);
                return this.strings.length - 1;
            }
        },
        {
            /**
     * The phase propagates whether a node is attached or detached through the
     * graph and adjusts the low-level representation of nodes.
     *
     * State propagation:
     * 1. Any object reachable from an attached object is itself attached.
     * 2. Any object reachable from a detached object that is not already
     *    attached is considered detached.
     *
     * Representation:
     * - Name of any detached node is changed from "<Name>"" to
     *   "Detached <Name>".
     */ key: "propagateDOMState",
            value: function propagateDOMState() {
                if (_class_private_field_get(this, _nodeDetachednessOffset) === -1) {
                    return;
                }
                console.time('propagateDOMState');
                var visited = new Uint8Array(this.nodeCount);
                var attached = [];
                var detached = [];
                var stringIndexCache = new Map();
                /**
         * Adds a 'Detached ' prefix to the name of a node.
         */ var addDetachedPrefixToNodeName = function addDetachedPrefixToNodeName(snapshot, nodeIndex) {
                    var oldStringIndex = snapshot.nodes.getValue(nodeIndex + snapshot.nodeNameOffset);
                    var newStringIndex = stringIndexCache.get(oldStringIndex);
                    if (newStringIndex === undefined) {
                        newStringIndex = snapshot.addString('Detached ' + snapshot.strings[oldStringIndex]);
                        stringIndexCache.set(oldStringIndex, newStringIndex);
                    }
                    snapshot.nodes.setValue(nodeIndex + snapshot.nodeNameOffset, newStringIndex);
                };
                /**
         * Processes a node represented by nodeOrdinal:
         * - Changes its name based on newState.
         * - Puts it onto working sets for attached or detached nodes.
         */ var processNode = function processNode(snapshot, nodeOrdinal, newState) {
                    if (visited[nodeOrdinal]) {
                        return;
                    }
                    var nodeIndex = nodeOrdinal * snapshot.nodeFieldCount;
                    // Early bailout: Do not propagate the state (and name change) through JavaScript. Every
                    // entry point into embedder code is a node that knows its own state. All embedder nodes
                    // have their node type set to native.
                    if (snapshot.nodes.getValue(nodeIndex + snapshot.nodeTypeOffset) !== snapshot.nodeNativeType) {
                        visited[nodeOrdinal] = 1;
                        return;
                    }
                    snapshot.nodes.setValue(nodeIndex + _class_private_field_get(snapshot, _nodeDetachednessOffset), newState);
                    if (newState === 1 /* DOMLinkState.Attached */ ) {
                        attached.push(nodeOrdinal);
                    } else if (newState === 2 /* DOMLinkState.Detached */ ) {
                        // Detached state: Rewire node name.
                        addDetachedPrefixToNodeName(snapshot, nodeIndex);
                        detached.push(nodeOrdinal);
                    }
                    visited[nodeOrdinal] = 1;
                };
                var propagateState = function propagateState(snapshot, parentNodeOrdinal, newState) {
                    snapshot.iterateFilteredChildren(parentNodeOrdinal, function(edgeType) {
                        return ![
                            snapshot.edgeHiddenType,
                            snapshot.edgeInvisibleType,
                            snapshot.edgeWeakType
                        ].includes(edgeType);
                    }, function(nodeOrdinal) {
                        return processNode(snapshot, nodeOrdinal, newState);
                    });
                };
                // 1. We re-use the deserialized field to store the propagated state. While
                //    the state for known nodes is already set, they still need to go
                //    through processing to have their name adjusted and them enqueued in
                //    the respective queues.
                for(var nodeOrdinal = 0; nodeOrdinal < this.nodeCount; ++nodeOrdinal){
                    var state = this.nodes.getValue(nodeOrdinal * this.nodeFieldCount + _class_private_field_get(this, _nodeDetachednessOffset));
                    // Bail out for objects that have no known state. For all other objects set that state.
                    if (state === 0 /* DOMLinkState.Unknown */ ) {
                        continue;
                    }
                    processNode(this, nodeOrdinal, state);
                }
                // 2. If the parent is attached, then the child is also attached.
                while(attached.length !== 0){
                    var nodeOrdinal1 = attached.pop();
                    propagateState(this, nodeOrdinal1, 1 /* DOMLinkState.Attached */ );
                }
                // 3. If the parent is not attached, then the child inherits the parent's state.
                while(detached.length !== 0){
                    var nodeOrdinal2 = detached.pop();
                    var nodeState = this.nodes.getValue(nodeOrdinal2 * this.nodeFieldCount + _class_private_field_get(this, _nodeDetachednessOffset));
                    // Ignore if the node has been found through propagating forward attached state.
                    if (nodeState === 1 /* DOMLinkState.Attached */ ) {
                        continue;
                    }
                    propagateState(this, nodeOrdinal2, 2 /* DOMLinkState.Detached */ );
                }
                console.timeEnd('propagateDOMState');
            }
        },
        {
            key: "buildSamples",
            value: function buildSamples() {
                var samples = _class_private_field_get(this, _rawSamples);
                if (!samples || !samples.length) {
                    return;
                }
                var sampleCount = samples.length / 2;
                var sizeForRange = new Array(sampleCount);
                var timestamps = new Array(sampleCount);
                var lastAssignedIds = new Array(sampleCount);
                var timestampOffset = _class_private_field_get(this, _metaNode).sample_fields.indexOf('timestamp_us');
                var lastAssignedIdOffset = _class_private_field_get(this, _metaNode).sample_fields.indexOf('last_assigned_id');
                for(var i = 0; i < sampleCount; i++){
                    sizeForRange[i] = 0;
                    timestamps[i] = samples[2 * i + timestampOffset] / 1000;
                    lastAssignedIds[i] = samples[2 * i + lastAssignedIdOffset];
                }
                var nodes = this.nodes;
                var nodesLength = nodes.length;
                var nodeFieldCount = this.nodeFieldCount;
                var node = this.rootNode();
                for(var nodeIndex = 0; nodeIndex < nodesLength; nodeIndex += nodeFieldCount){
                    node.nodeIndex = nodeIndex;
                    var nodeId = node.id();
                    // JS objects have odd ids, skip native objects.
                    if (nodeId % 2 === 0) {
                        continue;
                    }
                    var rangeIndex = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.lowerBound(lastAssignedIds, nodeId, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.DEFAULT_COMPARATOR);
                    if (rangeIndex === sampleCount) {
                        continue;
                    }
                    sizeForRange[rangeIndex] += node.selfSize();
                }
                _class_private_field_set(this, _samples, new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.Samples(timestamps, lastAssignedIds, sizeForRange));
            }
        },
        {
            key: "buildLocationMap",
            value: function buildLocationMap() {
                var map = new Map();
                var locations = _class_private_field_get(this, _locations);
                for(var i = 0; i < locations.length; i += _class_private_field_get(this, _locationFieldCount)){
                    var nodeIndex = locations[i + _class_private_field_get(this, _locationIndexOffset)];
                    var scriptId = locations[i + _class_private_field_get(this, _locationScriptIdOffset)];
                    var line = locations[i + _class_private_field_get(this, _locationLineOffset)];
                    var col = locations[i + _class_private_field_get(this, _locationColumnOffset)];
                    map.set(nodeIndex, new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.Location(scriptId, line, col));
                }
                _class_private_field_set(this, _locationMap, map);
            }
        },
        {
            key: "getLocation",
            value: function getLocation(nodeIndex) {
                return _class_private_field_get(this, _locationMap).get(nodeIndex) || null;
            }
        },
        {
            key: "getSamples",
            value: function getSamples() {
                return _class_private_field_get(this, _samples);
            }
        },
        {
            key: "calculateFlags",
            value: function calculateFlags() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "calculateStatistics",
            value: function calculateStatistics() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "userObjectsMapAndFlag",
            value: function userObjectsMapAndFlag() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "calculateSnapshotDiff",
            value: function calculateSnapshotDiff(baseSnapshotId, baseSnapshotAggregates) {
                var snapshotDiff = _class_private_field_get(this, _snapshotDiffs)[baseSnapshotId];
                if (snapshotDiff) {
                    return snapshotDiff;
                }
                snapshotDiff = {};
                var aggregates = this.getAggregatesByClassName(true, 'allObjects');
                for(var className in baseSnapshotAggregates){
                    var baseAggregate = baseSnapshotAggregates[className];
                    var diff = this.calculateDiffForClass(baseAggregate, aggregates[className]);
                    if (diff) {
                        snapshotDiff[className] = diff;
                    }
                }
                var emptyBaseAggregate = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.AggregateForDiff();
                for(var className1 in aggregates){
                    if (className1 in baseSnapshotAggregates) {
                        continue;
                    }
                    var classDiff = this.calculateDiffForClass(emptyBaseAggregate, aggregates[className1]);
                    if (classDiff) {
                        snapshotDiff[className1] = classDiff;
                    }
                }
                _class_private_field_get(this, _snapshotDiffs)[baseSnapshotId] = snapshotDiff;
                return snapshotDiff;
            }
        },
        {
            key: "calculateDiffForClass",
            value: function calculateDiffForClass(baseAggregate, aggregate) {
                var baseIds = baseAggregate.ids;
                var baseIndexes = baseAggregate.indexes;
                var baseSelfSizes = baseAggregate.selfSizes;
                var indexes = aggregate ? aggregate.idxs : [];
                var i = 0;
                var j = 0;
                var l = baseIds.length;
                var m = indexes.length;
                var diff = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.Diff();
                var nodeB = this.createNode(indexes[j]);
                while(i < l && j < m){
                    var nodeAId = baseIds[i];
                    if (nodeAId < nodeB.id()) {
                        diff.deletedIndexes.push(baseIndexes[i]);
                        diff.removedCount++;
                        diff.removedSize += baseSelfSizes[i];
                        ++i;
                    } else if (nodeAId > nodeB.id()) {
                        diff.addedIndexes.push(indexes[j]);
                        diff.addedCount++;
                        diff.addedSize += nodeB.selfSize();
                        nodeB.nodeIndex = indexes[++j];
                    } else {
                        ++i;
                        nodeB.nodeIndex = indexes[++j];
                    }
                }
                while(i < l){
                    diff.deletedIndexes.push(baseIndexes[i]);
                    diff.removedCount++;
                    diff.removedSize += baseSelfSizes[i];
                    ++i;
                }
                while(j < m){
                    diff.addedIndexes.push(indexes[j]);
                    diff.addedCount++;
                    diff.addedSize += nodeB.selfSize();
                    nodeB.nodeIndex = indexes[++j];
                }
                diff.countDelta = diff.addedCount - diff.removedCount;
                diff.sizeDelta = diff.addedSize - diff.removedSize;
                if (!diff.addedCount && !diff.removedCount) {
                    return null;
                }
                return diff;
            }
        },
        {
            key: "nodeForSnapshotObjectId",
            value: function nodeForSnapshotObjectId(snapshotObjectId) {
                for(var it = this.allNodes(); it.hasNext(); it.next()){
                    if (it.node.id() === snapshotObjectId) {
                        return it.node;
                    }
                }
                return null;
            }
        },
        {
            key: "nodeClassName",
            value: function nodeClassName(snapshotObjectId) {
                var node = this.nodeForSnapshotObjectId(snapshotObjectId);
                if (node) {
                    return node.className();
                }
                return null;
            }
        },
        {
            key: "idsOfObjectsWithName",
            value: function idsOfObjectsWithName(name) {
                var ids = [];
                for(var it = this.allNodes(); it.hasNext(); it.next()){
                    if (it.item().name() === name) {
                        ids.push(it.item().id());
                    }
                }
                return ids;
            }
        },
        {
            key: "createEdgesProvider",
            value: function createEdgesProvider(nodeIndex) {
                var node = this.createNode(nodeIndex);
                var filter = this.containmentEdgesFilter();
                var indexProvider = new HeapSnapshotEdgeIndexProvider(this);
                return new HeapSnapshotEdgesProvider(this, filter, node.edges(), indexProvider);
            }
        },
        {
            key: "createEdgesProviderForTest",
            value: function createEdgesProviderForTest(nodeIndex, filter) {
                var node = this.createNode(nodeIndex);
                var indexProvider = new HeapSnapshotEdgeIndexProvider(this);
                return new HeapSnapshotEdgesProvider(this, filter, node.edges(), indexProvider);
            }
        },
        {
            key: "retainingEdgesFilter",
            value: function retainingEdgesFilter() {
                return null;
            }
        },
        {
            key: "containmentEdgesFilter",
            value: function containmentEdgesFilter() {
                return null;
            }
        },
        {
            key: "createRetainingEdgesProvider",
            value: function createRetainingEdgesProvider(nodeIndex) {
                var node = this.createNode(nodeIndex);
                var filter = this.retainingEdgesFilter();
                var indexProvider = new HeapSnapshotRetainerEdgeIndexProvider(this);
                return new HeapSnapshotEdgesProvider(this, filter, node.retainers(), indexProvider);
            }
        },
        {
            key: "createAddedNodesProvider",
            value: function createAddedNodesProvider(baseSnapshotId, className) {
                var snapshotDiff = _class_private_field_get(this, _snapshotDiffs)[baseSnapshotId];
                var diffForClass = snapshotDiff[className];
                return new HeapSnapshotNodesProvider(this, diffForClass.addedIndexes);
            }
        },
        {
            key: "createDeletedNodesProvider",
            value: function createDeletedNodesProvider(nodeIndexes) {
                return new HeapSnapshotNodesProvider(this, nodeIndexes);
            }
        },
        {
            key: "createNodesProviderForClass",
            value: function createNodesProviderForClass(className, nodeFilter) {
                return new HeapSnapshotNodesProvider(this, this.aggregatesWithFilter(nodeFilter)[className].idxs);
            }
        },
        {
            key: "maxJsNodeId",
            value: function maxJsNodeId() {
                var nodeFieldCount = this.nodeFieldCount;
                var nodes = this.nodes;
                var nodesLength = nodes.length;
                var id = 0;
                for(var nodeIndex = this.nodeIdOffset; nodeIndex < nodesLength; nodeIndex += nodeFieldCount){
                    var nextId = nodes.getValue(nodeIndex);
                    // JS objects have odd ids, skip native objects.
                    if (nextId % 2 === 0) {
                        continue;
                    }
                    if (id < nextId) {
                        id = nextId;
                    }
                }
                return id;
            }
        },
        {
            key: "updateStaticData",
            value: function updateStaticData() {
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.StaticData(this.nodeCount, this.rootNodeIndexInternal, this.totalSize, this.maxJsNodeId());
            }
        },
        {
            key: "ignoreNodeInRetainersView",
            value: function ignoreNodeInRetainersView(nodeIndex) {
                _class_private_field_get(this, _ignoredNodesInRetainersView).add(nodeIndex);
                this.calculateDistances(/* isForRetainersView=*/ true);
                _class_private_method_get(this, _updateIgnoredEdgesInRetainersView, updateIgnoredEdgesInRetainersView).call(this);
            }
        },
        {
            key: "unignoreNodeInRetainersView",
            value: function unignoreNodeInRetainersView(nodeIndex) {
                _class_private_field_get(this, _ignoredNodesInRetainersView).delete(nodeIndex);
                if (_class_private_field_get(this, _ignoredNodesInRetainersView).size === 0) {
                    _class_private_field_set(this, _nodeDistancesForRetainersView, undefined);
                } else {
                    this.calculateDistances(/* isForRetainersView=*/ true);
                }
                _class_private_method_get(this, _updateIgnoredEdgesInRetainersView, updateIgnoredEdgesInRetainersView).call(this);
            }
        },
        {
            key: "unignoreAllNodesInRetainersView",
            value: function unignoreAllNodesInRetainersView() {
                _class_private_field_get(this, _ignoredNodesInRetainersView).clear();
                _class_private_field_set(this, _nodeDistancesForRetainersView, undefined);
                _class_private_method_get(this, _updateIgnoredEdgesInRetainersView, updateIgnoredEdgesInRetainersView).call(this);
            }
        },
        {
            key: "areNodesIgnoredInRetainersView",
            value: function areNodesIgnoredInRetainersView() {
                return _class_private_field_get(this, _ignoredNodesInRetainersView).size > 0;
            }
        },
        {
            key: "getDistanceForRetainersView",
            value: function getDistanceForRetainersView(nodeIndex) {
                var nodeOrdinal = nodeIndex / this.nodeFieldCount;
                var _$_class_private_field_get;
                var distances = (_$_class_private_field_get = _class_private_field_get(this, _nodeDistancesForRetainersView)) !== null && _$_class_private_field_get !== void 0 ? _$_class_private_field_get : this.nodeDistances;
                var distance = distances[nodeOrdinal];
                if (distance === _class_private_field_get(this, _noDistance)) {
                    // An unreachable node should be sorted to the end, not the beginning.
                    // To give such nodes a reasonable sorting order, we add a very large
                    // number to the original distance computed without ignoring any nodes.
                    return Math.max(0, this.nodeDistances[nodeOrdinal]) + _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.baseUnreachableDistance;
                }
                return distance;
            }
        },
        {
            key: "isNodeIgnoredInRetainersView",
            value: function isNodeIgnoredInRetainersView(nodeIndex) {
                return _class_private_field_get(this, _ignoredNodesInRetainersView).has(nodeIndex);
            }
        },
        {
            key: "isEdgeIgnoredInRetainersView",
            value: function isEdgeIgnoredInRetainersView(edgeIndex) {
                return _class_private_field_get(this, _ignoredEdgesInRetainersView).has(edgeIndex);
            }
        },
        {
            key: "getIndexForSyntheticClassName",
            value: function getIndexForSyntheticClassName(className) {
                var index = _class_private_field_get(this, _syntheticClassNames).get(className);
                if (index === undefined) {
                    index = this.addString(className);
                    _class_private_field_get(this, _syntheticClassNames).set(className, index);
                }
                return index;
            }
        }
    ]);
    return HeapSnapshot;
}();
function updateIgnoredEdgesInRetainersView() {
    var distances = _class_private_field_get(this, _nodeDistancesForRetainersView);
    _class_private_field_get(this, _ignoredEdgesInRetainersView).clear();
    if (distances === undefined) {
        return;
    }
    // To retain a value in a WeakMap, both the WeakMap and the corresponding
    // key must stay alive. If one of those two retainers is unreachable due to
    // the user ignoring some nodes, then the other retainer edge should also be
    // shown as unreachable, since it would be insufficient on its own to retain
    // the value.
    var unreachableWeakMapEdges = new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.MapUtilities.Multimap();
    var noDistance = _class_private_field_get(this, _noDistance);
    var _this = this, nodeCount = _this.nodeCount, nodeFieldCount = _this.nodeFieldCount;
    var node = this.createNode(0);
    // Populate unreachableWeakMapEdges.
    for(var nodeOrdinal = 0; nodeOrdinal < nodeCount; ++nodeOrdinal){
        if (distances[nodeOrdinal] !== noDistance) {
            continue;
        }
        node.nodeIndex = nodeOrdinal * nodeFieldCount;
        for(var iter = node.edges(); iter.hasNext(); iter.next()){
            var edge = iter.edge;
            if (!edge.isInternal()) {
                continue;
            }
            var match = this.tryParseWeakMapEdgeName(edge.nameIndex());
            if (match) {
                unreachableWeakMapEdges.set(edge.nodeIndex(), match.duplicatedPart);
            }
        }
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // Iterate the retaining edges for the target nodes found in the previous
        // step and mark any relevant WeakMap edges as ignored.
        for(var _iterator = unreachableWeakMapEdges.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var targetNodeIndex = _step.value;
            node.nodeIndex = targetNodeIndex;
            for(var it = node.retainers(); it.hasNext(); it.next()){
                var reverseEdge = it.item();
                if (!reverseEdge.isInternal()) {
                    continue;
                }
                var match1 = this.tryParseWeakMapEdgeName(reverseEdge.nameIndex());
                if (match1 && unreachableWeakMapEdges.hasValue(targetNodeIndex, match1.duplicatedPart)) {
                    var forwardEdgeIndex = this.retainingEdges[reverseEdge.itemIndex()];
                    _class_private_field_get(this, _ignoredEdgesInRetainersView).add(forwardEdgeIndex);
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
}
var HeapSnapshotMetainfo = function HeapSnapshotMetainfo() {
    "use strict";
    _class_call_check(this, HeapSnapshotMetainfo);
    _define_property(this, "location_fields", []) // eslint-disable-line @typescript-eslint/naming-convention
    ;
    _define_property(this, "node_fields", []) // eslint-disable-line @typescript-eslint/naming-convention
    ;
    _define_property(this, "node_types", []) // eslint-disable-line @typescript-eslint/naming-convention
    ;
    _define_property(this, "edge_fields", []) // eslint-disable-line @typescript-eslint/naming-convention
    ;
    _define_property(this, "edge_types", []) // eslint-disable-line @typescript-eslint/naming-convention
    ;
    _define_property(this, "trace_function_info_fields", []) // eslint-disable-line @typescript-eslint/naming-convention
    ;
    _define_property(this, "trace_node_fields", []) // eslint-disable-line @typescript-eslint/naming-convention
    ;
    _define_property(this, "sample_fields", []) // eslint-disable-line @typescript-eslint/naming-convention
    ;
    _define_property(this, "type_strings", {}) // eslint-disable-line @typescript-eslint/naming-convention
    ;
};
var HeapSnapshotHeader = function HeapSnapshotHeader() {
    "use strict";
    _class_call_check(this, HeapSnapshotHeader);
    _define_property(this, "title", void 0);
    _define_property(this, "meta", void 0);
    _define_property(this, "node_count", void 0 // eslint-disable-line @typescript-eslint/naming-convention
    );
    _define_property(this, "edge_count", void 0 // eslint-disable-line @typescript-eslint/naming-convention
    );
    _define_property(this, "trace_function_count", void 0 // eslint-disable-line @typescript-eslint/naming-convention
    );
    _define_property(this, "root_index", void 0 // eslint-disable-line @typescript-eslint/naming-convention
    );
    // New format.
    this.title = '';
    this.meta = new HeapSnapshotMetainfo();
    this.node_count = 0;
    this.edge_count = 0;
    this.trace_function_count = 0;
    this.root_index = 0;
};
var _indexProvider = /*#__PURE__*/ new WeakMap(), _isEmptyInternal = /*#__PURE__*/ new WeakMap(), _sortedPrefixLength = /*#__PURE__*/ new WeakMap(), _sortedSuffixLength = /*#__PURE__*/ new WeakMap();
var HeapSnapshotItemProvider = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotItemProvider(iterator, indexProvider) {
        _class_call_check(this, HeapSnapshotItemProvider);
        _define_property(this, "iterator", void 0);
        _class_private_field_init(this, _indexProvider, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _isEmptyInternal, {
            writable: true,
            value: void 0
        });
        _define_property(this, "iterationOrder", void 0);
        _define_property(this, "currentComparator", void 0);
        _class_private_field_init(this, _sortedPrefixLength, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _sortedSuffixLength, {
            writable: true,
            value: void 0
        });
        this.iterator = iterator;
        _class_private_field_set(this, _indexProvider, indexProvider);
        _class_private_field_set(this, _isEmptyInternal, !iterator.hasNext());
        this.iterationOrder = null;
        this.currentComparator = null;
        _class_private_field_set(this, _sortedPrefixLength, 0);
        _class_private_field_set(this, _sortedSuffixLength, 0);
    }
    _create_class(HeapSnapshotItemProvider, [
        {
            key: "createIterationOrder",
            value: function createIterationOrder() {
                if (this.iterationOrder) {
                    return;
                }
                this.iterationOrder = [];
                for(var iterator = this.iterator; iterator.hasNext(); iterator.next()){
                    this.iterationOrder.push(iterator.item().itemIndex());
                }
            }
        },
        {
            key: "isEmpty",
            value: function isEmpty() {
                return _class_private_field_get(this, _isEmptyInternal);
            }
        },
        {
            key: "serializeItemsRange",
            value: function serializeItemsRange(begin, end) {
                this.createIterationOrder();
                if (begin > end) {
                    throw new Error('Start position > end position: ' + begin + ' > ' + end);
                }
                if (!this.iterationOrder) {
                    throw new Error('Iteration order undefined');
                }
                if (end > this.iterationOrder.length) {
                    end = this.iterationOrder.length;
                }
                if (_class_private_field_get(this, _sortedPrefixLength) < end && begin < this.iterationOrder.length - _class_private_field_get(this, _sortedSuffixLength) && this.currentComparator) {
                    var currentComparator = this.currentComparator;
                    this.sort(currentComparator, _class_private_field_get(this, _sortedPrefixLength), this.iterationOrder.length - 1 - _class_private_field_get(this, _sortedSuffixLength), begin, end - 1);
                    if (begin <= _class_private_field_get(this, _sortedPrefixLength)) {
                        _class_private_field_set(this, _sortedPrefixLength, end);
                    }
                    if (end >= this.iterationOrder.length - _class_private_field_get(this, _sortedSuffixLength)) {
                        _class_private_field_set(this, _sortedSuffixLength, this.iterationOrder.length - begin);
                    }
                }
                var position = begin;
                var count = end - begin;
                var result = new Array(count);
                for(var i = 0; i < count; ++i){
                    var itemIndex = this.iterationOrder[position++];
                    var item = _class_private_field_get(this, _indexProvider).itemForIndex(itemIndex);
                    result[i] = item.serialize();
                }
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ItemsRange(begin, end, this.iterationOrder.length, result);
            }
        },
        {
            key: "sortAndRewind",
            value: function sortAndRewind(comparator) {
                this.currentComparator = comparator;
                _class_private_field_set(this, _sortedPrefixLength, 0);
                _class_private_field_set(this, _sortedSuffixLength, 0);
            }
        }
    ]);
    return HeapSnapshotItemProvider;
}();
var HeapSnapshotEdgesProvider = /*#__PURE__*/ function(HeapSnapshotItemProvider) {
    "use strict";
    _inherits(HeapSnapshotEdgesProvider, HeapSnapshotItemProvider);
    var _super = _create_super(HeapSnapshotEdgesProvider);
    function HeapSnapshotEdgesProvider(snapshot, filter, edgesIter, indexProvider) {
        _class_call_check(this, HeapSnapshotEdgesProvider);
        var _this;
        var iter = filter ? new HeapSnapshotFilteredIterator(edgesIter, filter) : edgesIter;
        _this = _super.call(this, iter, indexProvider);
        _define_property(_assert_this_initialized(_this), "snapshot", void 0);
        _this.snapshot = snapshot;
        return _this;
    }
    _create_class(HeapSnapshotEdgesProvider, [
        {
            key: "sort",
            value: function sort(comparator, leftBound, rightBound, windowLeft, windowRight) {
                var fieldName1 = comparator.fieldName1;
                var fieldName2 = comparator.fieldName2;
                var ascending1 = comparator.ascending1;
                var ascending2 = comparator.ascending2;
                var edgeA = this.iterator.item().clone();
                var edgeB = edgeA.clone();
                var nodeA = this.snapshot.createNode();
                var nodeB = this.snapshot.createNode();
                function compareEdgeField(fieldName, ascending, indexA, indexB) {
                    edgeA.edgeIndex = indexA;
                    edgeB.edgeIndex = indexB;
                    var result = 0;
                    if (fieldName === '!edgeName') {
                        if (edgeB.name() === '__proto__') {
                            return -1;
                        }
                        if (edgeA.name() === '__proto__') {
                            return 1;
                        }
                        result = edgeA.hasStringName() === edgeB.hasStringName() ? edgeA.name() < edgeB.name() ? -1 : edgeA.name() > edgeB.name() ? 1 : 0 : edgeA.hasStringName() ? -1 : 1;
                    } else {
                        result = edgeA.getValueForSorting(fieldName) - edgeB.getValueForSorting(fieldName);
                    }
                    return ascending ? result : -result;
                }
                function compareNodeField(fieldName, ascending, indexA, indexB) {
                    edgeA.edgeIndex = indexA;
                    nodeA.nodeIndex = edgeA.nodeIndex();
                    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    var valueA = nodeA[fieldName]();
                    edgeB.edgeIndex = indexB;
                    nodeB.nodeIndex = edgeB.nodeIndex();
                    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    var valueB = nodeB[fieldName]();
                    var result = valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
                    return ascending ? result : -result;
                }
                function compareEdgeAndEdge(indexA, indexB) {
                    var result = compareEdgeField(fieldName1, ascending1, indexA, indexB);
                    if (result === 0) {
                        result = compareEdgeField(fieldName2, ascending2, indexA, indexB);
                    }
                    if (result === 0) {
                        return indexA - indexB;
                    }
                    return result;
                }
                function compareEdgeAndNode(indexA, indexB) {
                    var result = compareEdgeField(fieldName1, ascending1, indexA, indexB);
                    if (result === 0) {
                        result = compareNodeField(fieldName2, ascending2, indexA, indexB);
                    }
                    if (result === 0) {
                        return indexA - indexB;
                    }
                    return result;
                }
                function compareNodeAndEdge(indexA, indexB) {
                    var result = compareNodeField(fieldName1, ascending1, indexA, indexB);
                    if (result === 0) {
                        result = compareEdgeField(fieldName2, ascending2, indexA, indexB);
                    }
                    if (result === 0) {
                        return indexA - indexB;
                    }
                    return result;
                }
                function compareNodeAndNode(indexA, indexB) {
                    var result = compareNodeField(fieldName1, ascending1, indexA, indexB);
                    if (result === 0) {
                        result = compareNodeField(fieldName2, ascending2, indexA, indexB);
                    }
                    if (result === 0) {
                        return indexA - indexB;
                    }
                    return result;
                }
                if (!this.iterationOrder) {
                    throw new Error('Iteration order not defined');
                }
                function isEdgeFieldName(fieldName) {
                    return fieldName.startsWith('!edge');
                }
                if (isEdgeFieldName(fieldName1)) {
                    if (isEdgeFieldName(fieldName2)) {
                        _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.sortRange(this.iterationOrder, compareEdgeAndEdge, leftBound, rightBound, windowLeft, windowRight);
                    } else {
                        _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.sortRange(this.iterationOrder, compareEdgeAndNode, leftBound, rightBound, windowLeft, windowRight);
                    }
                } else if (isEdgeFieldName(fieldName2)) {
                    _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.sortRange(this.iterationOrder, compareNodeAndEdge, leftBound, rightBound, windowLeft, windowRight);
                } else {
                    _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.sortRange(this.iterationOrder, compareNodeAndNode, leftBound, rightBound, windowLeft, windowRight);
                }
            }
        }
    ]);
    return HeapSnapshotEdgesProvider;
}(HeapSnapshotItemProvider);
var HeapSnapshotNodesProvider = /*#__PURE__*/ function(HeapSnapshotItemProvider) {
    "use strict";
    _inherits(HeapSnapshotNodesProvider, HeapSnapshotItemProvider);
    var _super = _create_super(HeapSnapshotNodesProvider);
    function HeapSnapshotNodesProvider(snapshot, nodeIndexes) {
        _class_call_check(this, HeapSnapshotNodesProvider);
        var _this;
        var indexProvider = new HeapSnapshotNodeIndexProvider(snapshot);
        var it = new HeapSnapshotIndexRangeIterator(indexProvider, nodeIndexes);
        _this = _super.call(this, it, indexProvider);
        _define_property(_assert_this_initialized(_this), "snapshot", void 0);
        _this.snapshot = snapshot;
        return _this;
    }
    _create_class(HeapSnapshotNodesProvider, [
        {
            key: "nodePosition",
            value: function nodePosition(snapshotObjectId) {
                this.createIterationOrder();
                var node = this.snapshot.createNode();
                var i = 0;
                if (!this.iterationOrder) {
                    throw new Error('Iteration order not defined');
                }
                for(; i < this.iterationOrder.length; i++){
                    node.nodeIndex = this.iterationOrder[i];
                    if (node.id() === snapshotObjectId) {
                        break;
                    }
                }
                if (i === this.iterationOrder.length) {
                    return -1;
                }
                var targetNodeIndex = this.iterationOrder[i];
                var smallerCount = 0;
                var currentComparator = this.currentComparator;
                var compare = this.buildCompareFunction(currentComparator);
                for(var i1 = 0; i1 < this.iterationOrder.length; i1++){
                    if (compare(this.iterationOrder[i1], targetNodeIndex) < 0) {
                        ++smallerCount;
                    }
                }
                return smallerCount;
            }
        },
        {
            key: "buildCompareFunction",
            value: function buildCompareFunction(comparator) {
                var nodeA = this.snapshot.createNode();
                var nodeB = this.snapshot.createNode();
                // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var fieldAccessor1 = nodeA[comparator.fieldName1];
                // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var fieldAccessor2 = nodeA[comparator.fieldName2];
                var ascending1 = comparator.ascending1 ? 1 : -1;
                var ascending2 = comparator.ascending2 ? 1 : -1;
                function sortByNodeField(fieldAccessor, ascending) {
                    var valueA = fieldAccessor.call(nodeA);
                    var valueB = fieldAccessor.call(nodeB);
                    return valueA < valueB ? -ascending : valueA > valueB ? ascending : 0;
                }
                function sortByComparator(indexA, indexB) {
                    nodeA.nodeIndex = indexA;
                    nodeB.nodeIndex = indexB;
                    var result = sortByNodeField(fieldAccessor1, ascending1);
                    if (result === 0) {
                        result = sortByNodeField(fieldAccessor2, ascending2);
                    }
                    return result || indexA - indexB;
                }
                return sortByComparator;
            }
        },
        {
            key: "sort",
            value: function sort(comparator, leftBound, rightBound, windowLeft, windowRight) {
                if (!this.iterationOrder) {
                    throw new Error('Iteration order not defined');
                }
                _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.sortRange(this.iterationOrder, this.buildCompareFunction(comparator), leftBound, rightBound, windowLeft, windowRight);
            }
        }
    ]);
    return HeapSnapshotNodesProvider;
}(HeapSnapshotItemProvider);
var _statistics = /*#__PURE__*/ new WeakMap(), _hasUserRoots = /*#__PURE__*/ new WeakSet();
var JSHeapSnapshot = /*#__PURE__*/ function(HeapSnapshot) {
    "use strict";
    _inherits(JSHeapSnapshot, HeapSnapshot);
    var _super = _create_super(JSHeapSnapshot);
    function JSHeapSnapshot(profile, progress) {
        _class_call_check(this, JSHeapSnapshot);
        var _this;
        _this = _super.call(this, profile, progress);
        _class_private_method_init(_assert_this_initialized(_this), _hasUserRoots);
        _define_property(_assert_this_initialized(_this), "nodeFlags", void 0);
        _define_property(_assert_this_initialized(_this), "lazyStringCache", void 0);
        _define_property(_assert_this_initialized(_this), "flags", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _statistics, {
            writable: true,
            value: void 0
        });
        _this.nodeFlags = {
            // bit flags
            canBeQueried: 1,
            detachedDOMTreeNode: 2,
            pageObject: 4
        };
        _this.lazyStringCache = {};
        _this.initialize();
        return _this;
    }
    _create_class(JSHeapSnapshot, [
        {
            key: "createNode",
            value: function createNode(nodeIndex) {
                return new JSHeapSnapshotNode(this, nodeIndex === undefined ? -1 : nodeIndex);
            }
        },
        {
            key: "createEdge",
            value: function createEdge(edgeIndex) {
                return new JSHeapSnapshotEdge(this, edgeIndex);
            }
        },
        {
            key: "createRetainingEdge",
            value: function createRetainingEdge(retainerIndex) {
                return new JSHeapSnapshotRetainerEdge(this, retainerIndex);
            }
        },
        {
            key: "containmentEdgesFilter",
            value: function containmentEdgesFilter() {
                return function(edge) {
                    return !edge.isInvisible();
                };
            }
        },
        {
            key: "retainingEdgesFilter",
            value: function retainingEdgesFilter() {
                var containmentEdgesFilter = this.containmentEdgesFilter();
                function filter(edge) {
                    return containmentEdgesFilter(edge) && !edge.node().isRoot() && !edge.isWeak();
                }
                return filter;
            }
        },
        {
            key: "calculateFlags",
            value: function calculateFlags() {
                this.flags = new Uint32Array(this.nodeCount);
                this.markDetachedDOMTreeNodes();
                this.markQueriableHeapObjects();
                this.markPageOwnedNodes();
            }
        },
        {
            // Updates the shallow sizes for "owned" objects of types kArray or kHidden to
            // zero, and add their sizes to the "owner" object instead.
            key: "calculateShallowSizes",
            value: function calculateShallowSizes() {
                // If there are no user roots, then that means the snapshot was produced with
                // the "expose internals" option enabled. In that case, we should faithfully
                // represent the actual memory allocations rather than attempting to make the
                // output more understandable to web developers.
                if (!_class_private_method_get(this, _hasUserRoots, hasUserRoots).call(this)) {
                    return;
                }
                var _this = this, nodeCount = _this.nodeCount, nodes = _this.nodes, nodeFieldCount = _this.nodeFieldCount, nodeSelfSizeOffset = _this.nodeSelfSizeOffset;
                var kUnvisited = 0xffffffff;
                var kHasMultipleOwners = 0xfffffffe;
                if (nodeCount >= kHasMultipleOwners) {
                    throw new Error('Too many nodes for calculateShallowSizes');
                }
                // For each node in order, `owners` will contain the index of the owning
                // node or one of the two values kUnvisited or kHasMultipleOwners. The
                // indexes in this array are NOT already multiplied by nodeFieldCount.
                var owners = new Uint32Array(nodeCount);
                // The worklist contains the indexes of nodes which should be visited during
                // the second loop below. The order of visiting doesn't matter. The indexes
                // in this array are NOT already multiplied by nodeFieldCount.
                var worklist = [];
                var node = this.createNode(0);
                for(var i = 0; i < nodeCount; ++i){
                    if (node.isHidden() || node.isArray()) {
                        owners[i] = kUnvisited;
                    } else {
                        // The node owns itself.
                        owners[i] = i;
                        worklist.push(i);
                    }
                    node.nodeIndex = node.nextNodeIndex();
                }
                while(worklist.length !== 0){
                    var id = worklist.pop();
                    var owner = owners[id];
                    node.nodeIndex = id * nodeFieldCount;
                    for(var iter = node.edges(); iter.hasNext(); iter.next()){
                        var edge = iter.edge;
                        if (edge.isWeak()) {
                            continue;
                        }
                        var targetId = edge.nodeIndex() / nodeFieldCount;
                        switch(owners[targetId]){
                            case kUnvisited:
                                owners[targetId] = owner;
                                worklist.push(targetId);
                                break;
                            case targetId:
                            case owner:
                            case kHasMultipleOwners:
                                break;
                            default:
                                owners[targetId] = kHasMultipleOwners;
                                // It is possible that this node is already in the worklist
                                // somewhere, but visiting it an extra time is not harmful. The
                                // iteration is guaranteed to complete because each node can only be
                                // added twice to the worklist: once when changing from kUnvisited
                                // to a specific owner, and a second time when changing from that
                                // owner to kHasMultipleOwners.
                                worklist.push(targetId);
                                break;
                        }
                    }
                }
                for(var i1 = 0; i1 < nodeCount; ++i1){
                    var ownerId = owners[i1];
                    switch(ownerId){
                        case kUnvisited:
                        case kHasMultipleOwners:
                        case i1:
                            break;
                        default:
                            {
                                var ownedNodeIndex = i1 * nodeFieldCount;
                                var ownerNodeIndex = ownerId * nodeFieldCount;
                                node.nodeIndex = ownerNodeIndex;
                                if (node.isSynthetic() || node.isRoot()) {
                                    break;
                                }
                                var sizeToTransfer = nodes.getValue(ownedNodeIndex + nodeSelfSizeOffset);
                                nodes.setValue(ownedNodeIndex + nodeSelfSizeOffset, 0);
                                nodes.setValue(ownerNodeIndex + nodeSelfSizeOffset, nodes.getValue(ownerNodeIndex + nodeSelfSizeOffset) + sizeToTransfer);
                                break;
                            }
                    }
                }
            }
        },
        {
            key: "calculateDistances",
            value: function calculateDistances(isForRetainersView) {
                var pendingEphemeronEdges = new Set();
                var snapshot = this;
                function filter(node, edge) {
                    if (node.isHidden() && edge.name() === 'sloppy_function_map' && node.rawName() === 'system / NativeContext') {
                        return false;
                    }
                    if (node.isArray() && node.rawName() === '(map descriptors)') {
                        // DescriptorArrays are fixed arrays used to hold instance descriptors.
                        // The format of the these objects is:
                        //   [0]: Number of descriptors
                        //   [1]: Either Smi(0) if uninitialized, or a pointer to small fixed array:
                        //          [0]: pointer to fixed array with enum cache
                        //          [1]: either Smi(0) or pointer to fixed array with indices
                        //   [i*3+2]: i-th key
                        //   [i*3+3]: i-th type
                        //   [i*3+4]: i-th descriptor
                        // As long as maps may share descriptor arrays some of the descriptor
                        // links may not be valid for all the maps. We just skip
                        // all the descriptor links when calculating distances.
                        // For more details see http://crbug.com/413608
                        var index = parseInt(edge.name(), 10);
                        return index < 2 || index % 3 !== 1;
                    }
                    if (edge.isInternal()) {
                        // Snapshots represent WeakMap values as being referenced by two edges:
                        // one from the WeakMap, and a second from the corresponding key. To
                        // avoid the case described in crbug.com/1290800, we should set the
                        // distance of that value to the greater of (WeakMap+1, key+1). This
                        // part of the filter skips the first edge in the matched pair of edges,
                        // so that the distance gets set based on the second, which should be
                        // greater or equal due to traversal order.
                        var match = snapshot.tryParseWeakMapEdgeName(edge.nameIndex());
                        if (match) {
                            if (!pendingEphemeronEdges.delete(match.duplicatedPart)) {
                                pendingEphemeronEdges.add(match.duplicatedPart);
                                return false;
                            }
                        }
                    }
                    return true;
                }
                _get(_get_prototype_of(JSHeapSnapshot.prototype), "calculateDistances", this).call(this, isForRetainersView, filter);
            }
        },
        {
            key: "isUserRoot",
            value: function isUserRoot(node) {
                return node.isUserRoot() || node.isDocumentDOMTreesRoot();
            }
        },
        {
            key: "userObjectsMapAndFlag",
            value: function userObjectsMapAndFlag() {
                return {
                    map: this.flags,
                    flag: this.nodeFlags.pageObject
                };
            }
        },
        {
            key: "flagsOfNode",
            value: function flagsOfNode(node) {
                return this.flags[node.nodeIndex / this.nodeFieldCount];
            }
        },
        {
            key: "markDetachedDOMTreeNodes",
            value: function markDetachedDOMTreeNodes() {
                var nodes = this.nodes;
                var nodesLength = nodes.length;
                var nodeFieldCount = this.nodeFieldCount;
                var nodeNativeType = this.nodeNativeType;
                var nodeTypeOffset = this.nodeTypeOffset;
                var flag = this.nodeFlags.detachedDOMTreeNode;
                var node = this.rootNode();
                for(var nodeIndex = 0, ordinal = 0; nodeIndex < nodesLength; nodeIndex += nodeFieldCount, ordinal++){
                    var nodeType = nodes.getValue(nodeIndex + nodeTypeOffset);
                    if (nodeType !== nodeNativeType) {
                        continue;
                    }
                    node.nodeIndex = nodeIndex;
                    if (node.name().startsWith('Detached ')) {
                        this.flags[ordinal] |= flag;
                    }
                }
            }
        },
        {
            key: "markQueriableHeapObjects",
            value: function markQueriableHeapObjects() {
                // Allow runtime properties query for objects accessible from Window objects
                // via regular properties, and for DOM wrappers. Trying to access random objects
                // can cause a crash due to inconsistent state of internal properties of wrappers.
                var flag = this.nodeFlags.canBeQueried;
                var hiddenEdgeType = this.edgeHiddenType;
                var internalEdgeType = this.edgeInternalType;
                var invisibleEdgeType = this.edgeInvisibleType;
                var weakEdgeType = this.edgeWeakType;
                var edgeToNodeOffset = this.edgeToNodeOffset;
                var edgeTypeOffset = this.edgeTypeOffset;
                var edgeFieldsCount = this.edgeFieldsCount;
                var containmentEdges = this.containmentEdges;
                var nodeFieldCount = this.nodeFieldCount;
                var firstEdgeIndexes = this.firstEdgeIndexes;
                var flags = this.flags;
                var list = [];
                for(var iter = this.rootNode().edges(); iter.hasNext(); iter.next()){
                    if (iter.edge.node().isUserRoot()) {
                        list.push(iter.edge.node().nodeIndex / nodeFieldCount);
                    }
                }
                while(list.length){
                    var nodeOrdinal = list.pop();
                    if (flags[nodeOrdinal] & flag) {
                        continue;
                    }
                    flags[nodeOrdinal] |= flag;
                    var beginEdgeIndex = firstEdgeIndexes[nodeOrdinal];
                    var endEdgeIndex = firstEdgeIndexes[nodeOrdinal + 1];
                    for(var edgeIndex = beginEdgeIndex; edgeIndex < endEdgeIndex; edgeIndex += edgeFieldsCount){
                        var childNodeIndex = containmentEdges.getValue(edgeIndex + edgeToNodeOffset);
                        var childNodeOrdinal = childNodeIndex / nodeFieldCount;
                        if (flags[childNodeOrdinal] & flag) {
                            continue;
                        }
                        var type = containmentEdges.getValue(edgeIndex + edgeTypeOffset);
                        if (type === hiddenEdgeType || type === invisibleEdgeType || type === internalEdgeType || type === weakEdgeType) {
                            continue;
                        }
                        list.push(childNodeOrdinal);
                    }
                }
            }
        },
        {
            key: "markPageOwnedNodes",
            value: function markPageOwnedNodes() {
                var edgeShortcutType = this.edgeShortcutType;
                var edgeElementType = this.edgeElementType;
                var edgeToNodeOffset = this.edgeToNodeOffset;
                var edgeTypeOffset = this.edgeTypeOffset;
                var edgeFieldsCount = this.edgeFieldsCount;
                var edgeWeakType = this.edgeWeakType;
                var firstEdgeIndexes = this.firstEdgeIndexes;
                var containmentEdges = this.containmentEdges;
                var nodeFieldCount = this.nodeFieldCount;
                var nodesCount = this.nodeCount;
                var flags = this.flags;
                var pageObjectFlag = this.nodeFlags.pageObject;
                var nodesToVisit = new Uint32Array(nodesCount);
                var nodesToVisitLength = 0;
                var rootNodeOrdinal = this.rootNodeIndexInternal / nodeFieldCount;
                var node = this.rootNode();
                // Populate the entry points. They are Window objects and DOM Tree Roots.
                for(var edgeIndex = firstEdgeIndexes[rootNodeOrdinal], endEdgeIndex = firstEdgeIndexes[rootNodeOrdinal + 1]; edgeIndex < endEdgeIndex; edgeIndex += edgeFieldsCount){
                    var edgeType = containmentEdges.getValue(edgeIndex + edgeTypeOffset);
                    var nodeIndex = containmentEdges.getValue(edgeIndex + edgeToNodeOffset);
                    if (edgeType === edgeElementType) {
                        node.nodeIndex = nodeIndex;
                        if (!node.isDocumentDOMTreesRoot()) {
                            continue;
                        }
                    } else if (edgeType !== edgeShortcutType) {
                        continue;
                    }
                    var nodeOrdinal = nodeIndex / nodeFieldCount;
                    nodesToVisit[nodesToVisitLength++] = nodeOrdinal;
                    flags[nodeOrdinal] |= pageObjectFlag;
                }
                // Mark everything reachable with the pageObject flag.
                while(nodesToVisitLength){
                    var nodeOrdinal1 = nodesToVisit[--nodesToVisitLength];
                    var beginEdgeIndex = firstEdgeIndexes[nodeOrdinal1];
                    var endEdgeIndex1 = firstEdgeIndexes[nodeOrdinal1 + 1];
                    for(var edgeIndex1 = beginEdgeIndex; edgeIndex1 < endEdgeIndex1; edgeIndex1 += edgeFieldsCount){
                        var childNodeIndex = containmentEdges.getValue(edgeIndex1 + edgeToNodeOffset);
                        var childNodeOrdinal = childNodeIndex / nodeFieldCount;
                        if (flags[childNodeOrdinal] & pageObjectFlag) {
                            continue;
                        }
                        var type = containmentEdges.getValue(edgeIndex1 + edgeTypeOffset);
                        if (type === edgeWeakType) {
                            continue;
                        }
                        nodesToVisit[nodesToVisitLength++] = childNodeOrdinal;
                        flags[childNodeOrdinal] |= pageObjectFlag;
                    }
                }
            }
        },
        {
            key: "calculateStatistics",
            value: function calculateStatistics() {
                var nodeFieldCount = this.nodeFieldCount;
                var nodes = this.nodes;
                var nodesLength = nodes.length;
                var nodeTypeOffset = this.nodeTypeOffset;
                var nodeSizeOffset = this.nodeSelfSizeOffset;
                var nodeNativeType = this.nodeNativeType;
                var nodeCodeType = this.nodeCodeType;
                var nodeConsStringType = this.nodeConsStringType;
                var nodeSlicedStringType = this.nodeSlicedStringType;
                var distances = this.nodeDistances;
                var sizeNative = 0;
                var sizeCode = 0;
                var sizeStrings = 0;
                var sizeJSArrays = 0;
                var sizeSystem = 0;
                var node = this.rootNode();
                for(var nodeIndex = 0; nodeIndex < nodesLength; nodeIndex += nodeFieldCount){
                    var nodeSize = nodes.getValue(nodeIndex + nodeSizeOffset);
                    var ordinal = nodeIndex / nodeFieldCount;
                    if (distances[ordinal] >= _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.baseSystemDistance) {
                        sizeSystem += nodeSize;
                        continue;
                    }
                    var nodeType = nodes.getValue(nodeIndex + nodeTypeOffset);
                    node.nodeIndex = nodeIndex;
                    if (nodeType === nodeNativeType) {
                        sizeNative += nodeSize;
                    } else if (nodeType === nodeCodeType) {
                        sizeCode += nodeSize;
                    } else if (nodeType === nodeConsStringType || nodeType === nodeSlicedStringType || node.type() === 'string') {
                        sizeStrings += nodeSize;
                    } else if (node.name() === 'Array') {
                        sizeJSArrays += this.calculateArraySize(node);
                    }
                }
                _class_private_field_set(this, _statistics, new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.Statistics());
                _class_private_field_get(this, _statistics).total = this.totalSize;
                _class_private_field_get(this, _statistics).v8heap = this.totalSize - sizeNative;
                _class_private_field_get(this, _statistics).native = sizeNative;
                _class_private_field_get(this, _statistics).code = sizeCode;
                _class_private_field_get(this, _statistics).jsArrays = sizeJSArrays;
                _class_private_field_get(this, _statistics).strings = sizeStrings;
                _class_private_field_get(this, _statistics).system = sizeSystem;
            }
        },
        {
            key: "calculateArraySize",
            value: function calculateArraySize(node) {
                var size = node.selfSize();
                var beginEdgeIndex = node.edgeIndexesStart();
                var endEdgeIndex = node.edgeIndexesEnd();
                var containmentEdges = this.containmentEdges;
                var strings = this.strings;
                var edgeToNodeOffset = this.edgeToNodeOffset;
                var edgeTypeOffset = this.edgeTypeOffset;
                var edgeNameOffset = this.edgeNameOffset;
                var edgeFieldsCount = this.edgeFieldsCount;
                var edgeInternalType = this.edgeInternalType;
                for(var edgeIndex = beginEdgeIndex; edgeIndex < endEdgeIndex; edgeIndex += edgeFieldsCount){
                    var edgeType = containmentEdges.getValue(edgeIndex + edgeTypeOffset);
                    if (edgeType !== edgeInternalType) {
                        continue;
                    }
                    var edgeName = strings[containmentEdges.getValue(edgeIndex + edgeNameOffset)];
                    if (edgeName !== 'elements') {
                        continue;
                    }
                    var elementsNodeIndex = containmentEdges.getValue(edgeIndex + edgeToNodeOffset);
                    node.nodeIndex = elementsNodeIndex;
                    if (node.retainersCount() === 1) {
                        size += node.selfSize();
                    }
                    break;
                }
                return size;
            }
        },
        {
            key: "getStatistics",
            value: function getStatistics() {
                return _class_private_field_get(this, _statistics);
            }
        }
    ]);
    return JSHeapSnapshot;
}(HeapSnapshot);
function hasUserRoots() {
    for(var iter = this.rootNode().edges(); iter.hasNext(); iter.next()){
        if (this.isUserRoot(iter.edge.node())) {
            return true;
        }
    }
    return false;
}
var JSHeapSnapshotNode = /*#__PURE__*/ function(HeapSnapshotNode) {
    "use strict";
    _inherits(JSHeapSnapshotNode, HeapSnapshotNode);
    var _super = _create_super(JSHeapSnapshotNode);
    function JSHeapSnapshotNode(snapshot, nodeIndex) {
        _class_call_check(this, JSHeapSnapshotNode);
        return _super.call(this, snapshot, nodeIndex);
    }
    _create_class(JSHeapSnapshotNode, [
        {
            key: "canBeQueried",
            value: function canBeQueried() {
                var snapshot = this.snapshot;
                var flags = snapshot.flagsOfNode(this);
                return Boolean(flags & snapshot.nodeFlags.canBeQueried);
            }
        },
        {
            key: "rawName",
            value: function rawName() {
                return _get(_get_prototype_of(JSHeapSnapshotNode.prototype), "name", this).call(this);
            }
        },
        {
            key: "name",
            value: function name() {
                var snapshot = this.snapshot;
                if (this.rawType() === snapshot.nodeConsStringType) {
                    var string = snapshot.lazyStringCache[this.nodeIndex];
                    if (typeof string === 'undefined') {
                        string = this.consStringName();
                        snapshot.lazyStringCache[this.nodeIndex] = string;
                    }
                    return string;
                }
                return this.rawName();
            }
        },
        {
            key: "consStringName",
            value: function consStringName() {
                var snapshot = this.snapshot;
                var consStringType = snapshot.nodeConsStringType;
                var edgeInternalType = snapshot.edgeInternalType;
                var edgeFieldsCount = snapshot.edgeFieldsCount;
                var edgeToNodeOffset = snapshot.edgeToNodeOffset;
                var edgeTypeOffset = snapshot.edgeTypeOffset;
                var edgeNameOffset = snapshot.edgeNameOffset;
                var strings = snapshot.strings;
                var edges = snapshot.containmentEdges;
                var firstEdgeIndexes = snapshot.firstEdgeIndexes;
                var nodeFieldCount = snapshot.nodeFieldCount;
                var nodeTypeOffset = snapshot.nodeTypeOffset;
                var nodeNameOffset = snapshot.nodeNameOffset;
                var nodes = snapshot.nodes;
                var nodesStack = [];
                nodesStack.push(this.nodeIndex);
                var name = '';
                while(nodesStack.length && name.length < 1024){
                    var nodeIndex = nodesStack.pop();
                    if (nodes.getValue(nodeIndex + nodeTypeOffset) !== consStringType) {
                        name += strings[nodes.getValue(nodeIndex + nodeNameOffset)];
                        continue;
                    }
                    var nodeOrdinal = nodeIndex / nodeFieldCount;
                    var beginEdgeIndex = firstEdgeIndexes[nodeOrdinal];
                    var endEdgeIndex = firstEdgeIndexes[nodeOrdinal + 1];
                    var firstNodeIndex = 0;
                    var secondNodeIndex = 0;
                    for(var edgeIndex = beginEdgeIndex; edgeIndex < endEdgeIndex && (!firstNodeIndex || !secondNodeIndex); edgeIndex += edgeFieldsCount){
                        var edgeType = edges.getValue(edgeIndex + edgeTypeOffset);
                        if (edgeType === edgeInternalType) {
                            var edgeName = strings[edges.getValue(edgeIndex + edgeNameOffset)];
                            if (edgeName === 'first') {
                                firstNodeIndex = edges.getValue(edgeIndex + edgeToNodeOffset);
                            } else if (edgeName === 'second') {
                                secondNodeIndex = edges.getValue(edgeIndex + edgeToNodeOffset);
                            }
                        }
                    }
                    nodesStack.push(secondNodeIndex);
                    nodesStack.push(firstNodeIndex);
                }
                return name;
            }
        },
        {
            key: "className",
            value: function className() {
                var type = this.type();
                switch(type){
                    case 'hidden':
                        return '(system)';
                    case 'object':
                    case 'native':
                        {
                            var name = this.name();
                            if (name.startsWith('<')) {
                                var firstSpace = name.indexOf(' ');
                                if (firstSpace !== -1) {
                                    name = name.substring(0, firstSpace) + '>';
                                }
                            } else if (name.startsWith('Detached <')) {
                                var firstSpace1 = name.indexOf(' ', 10);
                                if (firstSpace1 !== -1) {
                                    name = name.substring(0, firstSpace1) + '>';
                                }
                            }
                            return name;
                        }
                    case 'code':
                        return '(compiled code)';
                    case 'closure':
                        return 'Function';
                    case 'regexp':
                        return 'RegExp';
                    default:
                        return '(' + type + ')';
                }
            }
        },
        {
            key: "classIndex",
            value: function classIndex() {
                var snapshot = this.snapshot;
                var nodes = snapshot.nodes;
                var type = nodes.getValue(this.nodeIndex + snapshot.nodeTypeOffset);
                if (type === snapshot.nodeObjectType || type === snapshot.nodeNativeType) {
                    var name = this.name();
                    var useSyntheticClassName = name.startsWith('<') || name.startsWith('Detached <');
                    return useSyntheticClassName ? snapshot.getIndexForSyntheticClassName(this.className()) : nodes.getValue(this.nodeIndex + snapshot.nodeNameOffset);
                }
                return -1 - type;
            }
        },
        {
            key: "id",
            value: function id() {
                var snapshot = this.snapshot;
                return snapshot.nodes.getValue(this.nodeIndex + snapshot.nodeIdOffset);
            }
        },
        {
            key: "isHidden",
            value: function isHidden() {
                return this.rawType() === this.snapshot.nodeHiddenType;
            }
        },
        {
            key: "isArray",
            value: function isArray() {
                return this.rawType() === this.snapshot.nodeArrayType;
            }
        },
        {
            key: "isSynthetic",
            value: function isSynthetic() {
                return this.rawType() === this.snapshot.nodeSyntheticType;
            }
        },
        {
            key: "isUserRoot",
            value: function isUserRoot() {
                return !this.isSynthetic();
            }
        },
        {
            key: "isDocumentDOMTreesRoot",
            value: function isDocumentDOMTreesRoot() {
                return this.isSynthetic() && this.name() === '(Document DOM trees)';
            }
        },
        {
            key: "serialize",
            value: function serialize() {
                var result = _get(_get_prototype_of(JSHeapSnapshotNode.prototype), "serialize", this).call(this);
                var snapshot = this.snapshot;
                var flags = snapshot.flagsOfNode(this);
                if (flags & snapshot.nodeFlags.canBeQueried) {
                    result.canBeQueried = true;
                }
                if (flags & snapshot.nodeFlags.detachedDOMTreeNode) {
                    result.detachedDOMTreeNode = true;
                }
                return result;
            }
        }
    ]);
    return JSHeapSnapshotNode;
}(HeapSnapshotNode);
var JSHeapSnapshotEdge = /*#__PURE__*/ function(HeapSnapshotEdge) {
    "use strict";
    _inherits(JSHeapSnapshotEdge, HeapSnapshotEdge);
    var _super = _create_super(JSHeapSnapshotEdge);
    function JSHeapSnapshotEdge(snapshot, edgeIndex) {
        _class_call_check(this, JSHeapSnapshotEdge);
        return _super.call(this, snapshot, edgeIndex);
    }
    _create_class(JSHeapSnapshotEdge, [
        {
            key: "clone",
            value: function clone() {
                var snapshot = this.snapshot;
                return new JSHeapSnapshotEdge(snapshot, this.edgeIndex);
            }
        },
        {
            key: "hasStringName",
            value: function hasStringName() {
                if (!this.isShortcut()) {
                    return this.hasStringNameInternal();
                }
                // @ts-ignore parseInt is successful against numbers.
                return isNaN(parseInt(this.nameInternal(), 10));
            }
        },
        {
            key: "isElement",
            value: function isElement() {
                return this.rawType() === this.snapshot.edgeElementType;
            }
        },
        {
            key: "isHidden",
            value: function isHidden() {
                return this.rawType() === this.snapshot.edgeHiddenType;
            }
        },
        {
            key: "isWeak",
            value: function isWeak() {
                return this.rawType() === this.snapshot.edgeWeakType;
            }
        },
        {
            key: "isInternal",
            value: function isInternal() {
                return this.rawType() === this.snapshot.edgeInternalType;
            }
        },
        {
            key: "isInvisible",
            value: function isInvisible() {
                return this.rawType() === this.snapshot.edgeInvisibleType;
            }
        },
        {
            key: "isShortcut",
            value: function isShortcut() {
                return this.rawType() === this.snapshot.edgeShortcutType;
            }
        },
        {
            key: "name",
            value: function name() {
                var name = this.nameInternal();
                if (!this.isShortcut()) {
                    return String(name);
                }
                // @ts-ignore parseInt is successful against numbers.
                var numName = parseInt(name, 10);
                return String(isNaN(numName) ? name : numName);
            }
        },
        {
            key: "toString",
            value: function toString() {
                var name = this.name();
                switch(this.type()){
                    case 'context':
                        return '->' + name;
                    case 'element':
                        return '[' + name + ']';
                    case 'weak':
                        return '[[' + name + ']]';
                    case 'property':
                        return name.indexOf(' ') === -1 ? '.' + name : '["' + name + '"]';
                    case 'shortcut':
                        if (typeof name === 'string') {
                            return name.indexOf(' ') === -1 ? '.' + name : '["' + name + '"]';
                        }
                        return '[' + name + ']';
                    case 'internal':
                    case 'hidden':
                    case 'invisible':
                        return '{' + name + '}';
                }
                return '?' + name + '?';
            }
        },
        {
            key: "hasStringNameInternal",
            value: function hasStringNameInternal() {
                var type = this.rawType();
                var snapshot = this.snapshot;
                return type !== snapshot.edgeElementType && type !== snapshot.edgeHiddenType;
            }
        },
        {
            key: "nameInternal",
            value: function nameInternal() {
                return this.hasStringNameInternal() ? this.snapshot.strings[this.nameOrIndex()] : this.nameOrIndex();
            }
        },
        {
            key: "nameOrIndex",
            value: function nameOrIndex() {
                return this.edges.getValue(this.edgeIndex + this.snapshot.edgeNameOffset);
            }
        },
        {
            key: "rawType",
            value: function rawType() {
                return this.edges.getValue(this.edgeIndex + this.snapshot.edgeTypeOffset);
            }
        },
        {
            key: "nameIndex",
            value: function nameIndex() {
                if (!this.hasStringNameInternal()) {
                    throw new Error('Edge does not have string name');
                }
                return this.nameOrIndex();
            }
        }
    ]);
    return JSHeapSnapshotEdge;
}(HeapSnapshotEdge);
var JSHeapSnapshotRetainerEdge = /*#__PURE__*/ function(HeapSnapshotRetainerEdge) {
    "use strict";
    _inherits(JSHeapSnapshotRetainerEdge, HeapSnapshotRetainerEdge);
    var _super = _create_super(JSHeapSnapshotRetainerEdge);
    function JSHeapSnapshotRetainerEdge(snapshot, retainerIndex) {
        _class_call_check(this, JSHeapSnapshotRetainerEdge);
        return _super.call(this, snapshot, retainerIndex);
    }
    _create_class(JSHeapSnapshotRetainerEdge, [
        {
            key: "clone",
            value: function clone() {
                var snapshot = this.snapshot;
                return new JSHeapSnapshotRetainerEdge(snapshot, this.retainerIndex());
            }
        },
        {
            key: "isHidden",
            value: function isHidden() {
                return this.edge().isHidden();
            }
        },
        {
            key: "isInvisible",
            value: function isInvisible() {
                return this.edge().isInvisible();
            }
        },
        {
            key: "isShortcut",
            value: function isShortcut() {
                return this.edge().isShortcut();
            }
        },
        {
            key: "isWeak",
            value: function isWeak() {
                return this.edge().isWeak();
            }
        }
    ]);
    return JSHeapSnapshotRetainerEdge;
} //# sourceMappingURL=HeapSnapshot.js.map
(HeapSnapshotRetainerEdge);


}),

}]);