"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_heap_snapshot_worker_AllocationProfile_js"], {
"./entrypoints/heap_snapshot_worker/AllocationProfile.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AllocationProfile: function() { return AllocationProfile; },
  BottomUpAllocationNode: function() { return BottomUpAllocationNode; },
  FunctionAllocationInfo: function() { return FunctionAllocationInfo; },
  TopDownAllocationNode: function() { return TopDownAllocationNode; }
});
/* harmony import */var _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/heap_snapshot_model/heap_snapshot_model.js */ "./models/heap_snapshot_model/heap_snapshot_model.js");
/*
 * Copyright (C) 2013 Google Inc. All rights reserved.
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

var _strings = /*#__PURE__*/ new WeakMap(), _nextNodeId = /*#__PURE__*/ new WeakMap(), _functionInfos = /*#__PURE__*/ new WeakMap(), _idToNode = /*#__PURE__*/ new WeakMap(), _idToTopDownNode = /*#__PURE__*/ new WeakMap(), _collapsedTopNodeIdToFunctionInfo = /*#__PURE__*/ new WeakMap(), _traceTops = /*#__PURE__*/ new WeakMap(), _buildFunctionAllocationInfos = /*#__PURE__*/ new WeakSet(), _buildAllocationTree = /*#__PURE__*/ new WeakSet(), _ensureBottomUpNode = /*#__PURE__*/ new WeakSet(), _serializeCaller = /*#__PURE__*/ new WeakSet(), _serializeNode = /*#__PURE__*/ new WeakSet();
var AllocationProfile = /*#__PURE__*/ function() {
    "use strict";
    function AllocationProfile(profile, liveObjectStats) {
        _class_call_check(this, AllocationProfile);
        _class_private_method_init(this, _buildFunctionAllocationInfos);
        _class_private_method_init(this, _buildAllocationTree);
        _class_private_method_init(this, _ensureBottomUpNode);
        _class_private_method_init(this, _serializeCaller);
        _class_private_method_init(this, _serializeNode);
        _class_private_field_init(this, _strings, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _nextNodeId, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _functionInfos, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _idToNode, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _idToTopDownNode, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _collapsedTopNodeIdToFunctionInfo, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _traceTops, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _strings, profile.strings);
        _class_private_field_set(this, _nextNodeId, 1);
        _class_private_field_set(this, _functionInfos, []);
        _class_private_field_set(this, _idToNode, {});
        _class_private_field_set(this, _idToTopDownNode, {});
        _class_private_field_set(this, _collapsedTopNodeIdToFunctionInfo, {});
        _class_private_field_set(this, _traceTops, null);
        _class_private_method_get(this, _buildFunctionAllocationInfos, buildFunctionAllocationInfos).call(this, profile);
        _class_private_method_get(this, _buildAllocationTree, buildAllocationTree).call(this, profile, liveObjectStats);
    }
    _create_class(AllocationProfile, [
        {
            key: "serializeTraceTops",
            value: function serializeTraceTops() {
                if (_class_private_field_get(this, _traceTops)) {
                    return _class_private_field_get(this, _traceTops);
                }
                var result = _class_private_field_set(this, _traceTops, []);
                var functionInfos = _class_private_field_get(this, _functionInfos);
                for(var i = 0; i < functionInfos.length; i++){
                    var info = functionInfos[i];
                    if (info.totalCount === 0) {
                        continue;
                    }
                    var nodeId = _class_private_field_update(this, _nextNodeId).value++;
                    var isRoot = i === 0;
                    result.push(_class_private_method_get(this, _serializeNode, serializeNode).call(this, nodeId, info, info.totalCount, info.totalSize, info.totalLiveCount, info.totalLiveSize, !isRoot));
                    _class_private_field_get(this, _collapsedTopNodeIdToFunctionInfo)[nodeId] = info;
                }
                result.sort(function(a, b) {
                    return b.size - a.size;
                });
                return result;
            }
        },
        {
            key: "serializeCallers",
            value: function serializeCallers(nodeId) {
                var node = _class_private_method_get(this, _ensureBottomUpNode, ensureBottomUpNode).call(this, nodeId);
                var nodesWithSingleCaller = [];
                while(node.callers().length === 1){
                    node = node.callers()[0];
                    nodesWithSingleCaller.push(_class_private_method_get(this, _serializeCaller, serializeCaller).call(this, node));
                }
                var branchingCallers = [];
                var callers = node.callers();
                for(var i = 0; i < callers.length; i++){
                    branchingCallers.push(_class_private_method_get(this, _serializeCaller, serializeCaller).call(this, callers[i]));
                }
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__.HeapSnapshotModel.AllocationNodeCallers(nodesWithSingleCaller, branchingCallers);
            }
        },
        {
            key: "serializeAllocationStack",
            value: function serializeAllocationStack(traceNodeId) {
                var node = _class_private_field_get(this, _idToTopDownNode)[traceNodeId];
                var result = [];
                while(node){
                    var functionInfo = node.functionInfo;
                    result.push(new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__.HeapSnapshotModel.AllocationStackFrame(functionInfo.functionName, functionInfo.scriptName, functionInfo.scriptId, functionInfo.line, functionInfo.column));
                    node = node.parent;
                }
                return result;
            }
        },
        {
            key: "traceIds",
            value: function traceIds(allocationNodeId) {
                return _class_private_method_get(this, _ensureBottomUpNode, ensureBottomUpNode).call(this, allocationNodeId).traceTopIds;
            }
        }
    ]);
    return AllocationProfile;
}();
function buildFunctionAllocationInfos(profile) {
    var strings = _class_private_field_get(this, _strings);
    var functionInfoFields = profile.snapshot.meta.trace_function_info_fields;
    var functionNameOffset = functionInfoFields.indexOf('name');
    var scriptNameOffset = functionInfoFields.indexOf('script_name');
    var scriptIdOffset = functionInfoFields.indexOf('script_id');
    var lineOffset = functionInfoFields.indexOf('line');
    var columnOffset = functionInfoFields.indexOf('column');
    var functionInfoFieldCount = functionInfoFields.length;
    var rawInfos = profile.trace_function_infos;
    var infoLength = rawInfos.length;
    var functionInfos = _class_private_field_set(this, _functionInfos, new Array(infoLength / functionInfoFieldCount));
    var index = 0;
    for(var i = 0; i < infoLength; i += functionInfoFieldCount){
        functionInfos[index++] = new FunctionAllocationInfo(strings[rawInfos[i + functionNameOffset]], strings[rawInfos[i + scriptNameOffset]], rawInfos[i + scriptIdOffset], rawInfos[i + lineOffset], rawInfos[i + columnOffset]);
    }
}
function buildAllocationTree(profile, liveObjectStats) {
    var traceTreeRaw = profile.trace_tree;
    var functionInfos = _class_private_field_get(this, _functionInfos);
    var idToTopDownNode = _class_private_field_get(this, _idToTopDownNode);
    var traceNodeFields = profile.snapshot.meta.trace_node_fields;
    var nodeIdOffset = traceNodeFields.indexOf('id');
    var functionInfoIndexOffset = traceNodeFields.indexOf('function_info_index');
    var allocationCountOffset = traceNodeFields.indexOf('count');
    var allocationSizeOffset = traceNodeFields.indexOf('size');
    var childrenOffset = traceNodeFields.indexOf('children');
    var nodeFieldCount = traceNodeFields.length;
    function traverseNode(// TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rawNodeArray, nodeOffset, parent) {
        var functionInfo = functionInfos[rawNodeArray[nodeOffset + functionInfoIndexOffset]];
        var id = rawNodeArray[nodeOffset + nodeIdOffset];
        var stats = liveObjectStats[id];
        var liveCount = stats ? stats.count : 0;
        var liveSize = stats ? stats.size : 0;
        var result = new TopDownAllocationNode(id, functionInfo, rawNodeArray[nodeOffset + allocationCountOffset], rawNodeArray[nodeOffset + allocationSizeOffset], liveCount, liveSize, parent);
        idToTopDownNode[id] = result;
        functionInfo.addTraceTopNode(result);
        var rawChildren = rawNodeArray[nodeOffset + childrenOffset];
        for(var i = 0; i < rawChildren.length; i += nodeFieldCount){
            result.children.push(traverseNode(rawChildren, i, result));
        }
        return result;
    }
    return traverseNode(traceTreeRaw, 0, null);
}
function ensureBottomUpNode(nodeId) {
    var node = _class_private_field_get(this, _idToNode)[nodeId];
    if (!node) {
        var functionInfo = _class_private_field_get(this, _collapsedTopNodeIdToFunctionInfo)[nodeId];
        node = functionInfo.bottomUpRoot();
        delete _class_private_field_get(this, _collapsedTopNodeIdToFunctionInfo)[nodeId];
        _class_private_field_get(this, _idToNode)[nodeId] = node;
    }
    return node;
}
function serializeCaller(node) {
    var callerId = _class_private_field_update(this, _nextNodeId).value++;
    _class_private_field_get(this, _idToNode)[callerId] = node;
    return _class_private_method_get(this, _serializeNode, serializeNode).call(this, callerId, node.functionInfo, node.allocationCount, node.allocationSize, node.liveCount, node.liveSize, node.hasCallers());
}
function serializeNode(nodeId, functionInfo, count, size, liveCount, liveSize, hasChildren) {
    return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__.HeapSnapshotModel.SerializedAllocationNode(nodeId, functionInfo.functionName, functionInfo.scriptName, functionInfo.scriptId, functionInfo.line, functionInfo.column, count, size, liveCount, liveSize, hasChildren);
}
var TopDownAllocationNode = function TopDownAllocationNode(id, functionInfo, count, size, liveCount, liveSize, parent) {
    "use strict";
    _class_call_check(this, TopDownAllocationNode);
    _define_property(this, "id", void 0);
    _define_property(this, "functionInfo", void 0);
    _define_property(this, "allocationCount", void 0);
    _define_property(this, "allocationSize", void 0);
    _define_property(this, "liveCount", void 0);
    _define_property(this, "liveSize", void 0);
    _define_property(this, "parent", void 0);
    _define_property(this, "children", void 0);
    this.id = id;
    this.functionInfo = functionInfo;
    this.allocationCount = count;
    this.allocationSize = size;
    this.liveCount = liveCount;
    this.liveSize = liveSize;
    this.parent = parent;
    this.children = [];
};
var _callersInternal = /*#__PURE__*/ new WeakMap();
var BottomUpAllocationNode = /*#__PURE__*/ function() {
    "use strict";
    function BottomUpAllocationNode(functionInfo) {
        _class_call_check(this, BottomUpAllocationNode);
        _define_property(this, "functionInfo", void 0);
        _define_property(this, "allocationCount", void 0);
        _define_property(this, "allocationSize", void 0);
        _define_property(this, "liveCount", void 0);
        _define_property(this, "liveSize", void 0);
        _define_property(this, "traceTopIds", void 0);
        _class_private_field_init(this, _callersInternal, {
            writable: true,
            value: void 0
        });
        this.functionInfo = functionInfo;
        this.allocationCount = 0;
        this.allocationSize = 0;
        this.liveCount = 0;
        this.liveSize = 0;
        this.traceTopIds = [];
        _class_private_field_set(this, _callersInternal, []);
    }
    _create_class(BottomUpAllocationNode, [
        {
            key: "addCaller",
            value: function addCaller(traceNode) {
                var functionInfo = traceNode.functionInfo;
                var result;
                for(var i = 0; i < _class_private_field_get(this, _callersInternal).length; i++){
                    var caller = _class_private_field_get(this, _callersInternal)[i];
                    if (caller.functionInfo === functionInfo) {
                        result = caller;
                        break;
                    }
                }
                if (!result) {
                    result = new BottomUpAllocationNode(functionInfo);
                    _class_private_field_get(this, _callersInternal).push(result);
                }
                return result;
            }
        },
        {
            key: "callers",
            value: function callers() {
                return _class_private_field_get(this, _callersInternal);
            }
        },
        {
            key: "hasCallers",
            value: function hasCallers() {
                return _class_private_field_get(this, _callersInternal).length > 0;
            }
        }
    ]);
    return BottomUpAllocationNode;
}();
var _traceTops1 = /*#__PURE__*/ new WeakMap(), _bottomUpTree = /*#__PURE__*/ new WeakMap(), _buildAllocationTraceTree = /*#__PURE__*/ new WeakSet();
var FunctionAllocationInfo = /*#__PURE__*/ function() {
    "use strict";
    function FunctionAllocationInfo(functionName, scriptName, scriptId, line, column) {
        _class_call_check(this, FunctionAllocationInfo);
        _class_private_method_init(this, _buildAllocationTraceTree);
        _define_property(this, "functionName", void 0);
        _define_property(this, "scriptName", void 0);
        _define_property(this, "scriptId", void 0);
        _define_property(this, "line", void 0);
        _define_property(this, "column", void 0);
        _define_property(this, "totalCount", void 0);
        _define_property(this, "totalSize", void 0);
        _define_property(this, "totalLiveCount", void 0);
        _define_property(this, "totalLiveSize", void 0);
        _class_private_field_init(this, _traceTops1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _bottomUpTree, {
            writable: true,
            value: void 0
        });
        this.functionName = functionName;
        this.scriptName = scriptName;
        this.scriptId = scriptId;
        this.line = line;
        this.column = column;
        this.totalCount = 0;
        this.totalSize = 0;
        this.totalLiveCount = 0;
        this.totalLiveSize = 0;
        _class_private_field_set(this, _traceTops1, []);
    }
    _create_class(FunctionAllocationInfo, [
        {
            key: "addTraceTopNode",
            value: function addTraceTopNode(node) {
                if (node.allocationCount === 0) {
                    return;
                }
                _class_private_field_get(this, _traceTops1).push(node);
                this.totalCount += node.allocationCount;
                this.totalSize += node.allocationSize;
                this.totalLiveCount += node.liveCount;
                this.totalLiveSize += node.liveSize;
            }
        },
        {
            key: "bottomUpRoot",
            value: function bottomUpRoot() {
                if (!_class_private_field_get(this, _traceTops1).length) {
                    return null;
                }
                if (!_class_private_field_get(this, _bottomUpTree)) {
                    _class_private_method_get(this, _buildAllocationTraceTree, buildAllocationTraceTree).call(this);
                }
                return _class_private_field_get(this, _bottomUpTree);
            }
        }
    ]);
    return FunctionAllocationInfo;
} //# sourceMappingURL=AllocationProfile.js.map
();
function buildAllocationTraceTree() {
    _class_private_field_set(this, _bottomUpTree, new BottomUpAllocationNode(this));
    for(var i = 0; i < _class_private_field_get(this, _traceTops1).length; i++){
        var node = _class_private_field_get(this, _traceTops1)[i];
        var bottomUpNode = _class_private_field_get(this, _bottomUpTree);
        var count = node.allocationCount;
        var size = node.allocationSize;
        var liveCount = node.liveCount;
        var liveSize = node.liveSize;
        var traceId = node.id;
        while(true){
            bottomUpNode.allocationCount += count;
            bottomUpNode.allocationSize += size;
            bottomUpNode.liveCount += liveCount;
            bottomUpNode.liveSize += liveSize;
            bottomUpNode.traceTopIds.push(traceId);
            node = node.parent;
            if (node === null) {
                break;
            }
            bottomUpNode = bottomUpNode.addCaller(node);
        }
    }
}


}),
"./models/heap_snapshot_model/heap_snapshot_model.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HeapSnapshotModel: function() { return /* reexport module object */ _HeapSnapshotModel_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _HeapSnapshotModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeapSnapshotModel.js */ "./models/heap_snapshot_model/HeapSnapshotModel.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=heap_snapshot_model.js.map


}),

}]);