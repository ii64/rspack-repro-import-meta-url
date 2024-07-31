"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_heap_snapshot_worker_AllocationProfile_ts"],{

/***/ "./src/entrypoints/heap_snapshot_worker/AllocationProfile.ts":
/*!*******************************************************************!*\
  !*** ./src/entrypoints/heap_snapshot_worker/AllocationProfile.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllocationProfile: () => (/* binding */ AllocationProfile),
/* harmony export */   BottomUpAllocationNode: () => (/* binding */ BottomUpAllocationNode),
/* harmony export */   FunctionAllocationInfo: () => (/* binding */ FunctionAllocationInfo),
/* harmony export */   TopDownAllocationNode: () => (/* binding */ TopDownAllocationNode)
/* harmony export */ });
/* harmony import */ var _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/heap_snapshot_model/heap_snapshot_model.js */ "./src/models/heap_snapshot_model/heap_snapshot_model.ts");
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
 */
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AllocationProfile_instances, _AllocationProfile_strings, _AllocationProfile_nextNodeId, _AllocationProfile_functionInfos, _AllocationProfile_idToNode, _AllocationProfile_idToTopDownNode, _AllocationProfile_collapsedTopNodeIdToFunctionInfo, _AllocationProfile_traceTops, _AllocationProfile_buildFunctionAllocationInfos, _AllocationProfile_buildAllocationTree, _AllocationProfile_ensureBottomUpNode, _AllocationProfile_serializeCaller, _AllocationProfile_serializeNode, _BottomUpAllocationNode_callersInternal, _FunctionAllocationInfo_instances, _FunctionAllocationInfo_traceTops, _FunctionAllocationInfo_bottomUpTree, _FunctionAllocationInfo_buildAllocationTraceTree;

class AllocationProfile {
    constructor(profile, liveObjectStats) {
        _AllocationProfile_instances.add(this);
        _AllocationProfile_strings.set(this, void 0);
        _AllocationProfile_nextNodeId.set(this, void 0);
        _AllocationProfile_functionInfos.set(this, void 0);
        _AllocationProfile_idToNode.set(this, void 0);
        _AllocationProfile_idToTopDownNode.set(this, void 0);
        _AllocationProfile_collapsedTopNodeIdToFunctionInfo.set(this, void 0);
        _AllocationProfile_traceTops.set(this, void 0);
        __classPrivateFieldSet(this, _AllocationProfile_strings, profile.strings, "f");
        __classPrivateFieldSet(this, _AllocationProfile_nextNodeId, 1, "f");
        __classPrivateFieldSet(this, _AllocationProfile_functionInfos, [], "f");
        __classPrivateFieldSet(this, _AllocationProfile_idToNode, {}, "f");
        __classPrivateFieldSet(this, _AllocationProfile_idToTopDownNode, {}, "f");
        __classPrivateFieldSet(this, _AllocationProfile_collapsedTopNodeIdToFunctionInfo, {}, "f");
        __classPrivateFieldSet(this, _AllocationProfile_traceTops, null, "f");
        __classPrivateFieldGet(this, _AllocationProfile_instances, "m", _AllocationProfile_buildFunctionAllocationInfos).call(this, profile);
        __classPrivateFieldGet(this, _AllocationProfile_instances, "m", _AllocationProfile_buildAllocationTree).call(this, profile, liveObjectStats);
    }
    serializeTraceTops() {
        var _a, _b;
        if (__classPrivateFieldGet(this, _AllocationProfile_traceTops, "f")) {
            return __classPrivateFieldGet(this, _AllocationProfile_traceTops, "f");
        }
        const result = __classPrivateFieldSet(this, _AllocationProfile_traceTops, [], "f");
        const functionInfos = __classPrivateFieldGet(this, _AllocationProfile_functionInfos, "f");
        for (let i = 0; i < functionInfos.length; i++) {
            const info = functionInfos[i];
            if (info.totalCount === 0) {
                continue;
            }
            const nodeId = (__classPrivateFieldSet(this, _AllocationProfile_nextNodeId, (_b = __classPrivateFieldGet(this, _AllocationProfile_nextNodeId, "f"), _a = _b++, _b), "f"), _a);
            const isRoot = i === 0;
            result.push(__classPrivateFieldGet(this, _AllocationProfile_instances, "m", _AllocationProfile_serializeNode).call(this, nodeId, info, info.totalCount, info.totalSize, info.totalLiveCount, info.totalLiveSize, !isRoot));
            __classPrivateFieldGet(this, _AllocationProfile_collapsedTopNodeIdToFunctionInfo, "f")[nodeId] = info;
        }
        result.sort(function (a, b) {
            return b.size - a.size;
        });
        return result;
    }
    serializeCallers(nodeId) {
        let node = __classPrivateFieldGet(this, _AllocationProfile_instances, "m", _AllocationProfile_ensureBottomUpNode).call(this, nodeId);
        const nodesWithSingleCaller = [];
        while (node.callers().length === 1) {
            node = node.callers()[0];
            nodesWithSingleCaller.push(__classPrivateFieldGet(this, _AllocationProfile_instances, "m", _AllocationProfile_serializeCaller).call(this, node));
        }
        const branchingCallers = [];
        const callers = node.callers();
        for (let i = 0; i < callers.length; i++) {
            branchingCallers.push(__classPrivateFieldGet(this, _AllocationProfile_instances, "m", _AllocationProfile_serializeCaller).call(this, callers[i]));
        }
        return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__.HeapSnapshotModel.AllocationNodeCallers(nodesWithSingleCaller, branchingCallers);
    }
    serializeAllocationStack(traceNodeId) {
        let node = __classPrivateFieldGet(this, _AllocationProfile_idToTopDownNode, "f")[traceNodeId];
        const result = [];
        while (node) {
            const functionInfo = node.functionInfo;
            result.push(new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__.HeapSnapshotModel.AllocationStackFrame(functionInfo.functionName, functionInfo.scriptName, functionInfo.scriptId, functionInfo.line, functionInfo.column));
            node = node.parent;
        }
        return result;
    }
    traceIds(allocationNodeId) {
        return __classPrivateFieldGet(this, _AllocationProfile_instances, "m", _AllocationProfile_ensureBottomUpNode).call(this, allocationNodeId).traceTopIds;
    }
}
_AllocationProfile_strings = new WeakMap(), _AllocationProfile_nextNodeId = new WeakMap(), _AllocationProfile_functionInfos = new WeakMap(), _AllocationProfile_idToNode = new WeakMap(), _AllocationProfile_idToTopDownNode = new WeakMap(), _AllocationProfile_collapsedTopNodeIdToFunctionInfo = new WeakMap(), _AllocationProfile_traceTops = new WeakMap(), _AllocationProfile_instances = new WeakSet(), _AllocationProfile_buildFunctionAllocationInfos = function _AllocationProfile_buildFunctionAllocationInfos(profile) {
    const strings = __classPrivateFieldGet(this, _AllocationProfile_strings, "f");
    const functionInfoFields = profile.snapshot.meta.trace_function_info_fields;
    const functionNameOffset = functionInfoFields.indexOf('name');
    const scriptNameOffset = functionInfoFields.indexOf('script_name');
    const scriptIdOffset = functionInfoFields.indexOf('script_id');
    const lineOffset = functionInfoFields.indexOf('line');
    const columnOffset = functionInfoFields.indexOf('column');
    const functionInfoFieldCount = functionInfoFields.length;
    const rawInfos = profile.trace_function_infos;
    const infoLength = rawInfos.length;
    const functionInfos = __classPrivateFieldSet(this, _AllocationProfile_functionInfos, new Array(infoLength / functionInfoFieldCount), "f");
    let index = 0;
    for (let i = 0; i < infoLength; i += functionInfoFieldCount) {
        functionInfos[index++] = new FunctionAllocationInfo(strings[rawInfos[i + functionNameOffset]], strings[rawInfos[i + scriptNameOffset]], rawInfos[i + scriptIdOffset], rawInfos[i + lineOffset], rawInfos[i + columnOffset]);
    }
}, _AllocationProfile_buildAllocationTree = function _AllocationProfile_buildAllocationTree(profile, liveObjectStats) {
    const traceTreeRaw = profile.trace_tree;
    const functionInfos = __classPrivateFieldGet(this, _AllocationProfile_functionInfos, "f");
    const idToTopDownNode = __classPrivateFieldGet(this, _AllocationProfile_idToTopDownNode, "f");
    const traceNodeFields = profile.snapshot.meta.trace_node_fields;
    const nodeIdOffset = traceNodeFields.indexOf('id');
    const functionInfoIndexOffset = traceNodeFields.indexOf('function_info_index');
    const allocationCountOffset = traceNodeFields.indexOf('count');
    const allocationSizeOffset = traceNodeFields.indexOf('size');
    const childrenOffset = traceNodeFields.indexOf('children');
    const nodeFieldCount = traceNodeFields.length;
    function traverseNode(
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rawNodeArray, nodeOffset, parent) {
        const functionInfo = functionInfos[rawNodeArray[nodeOffset + functionInfoIndexOffset]];
        const id = rawNodeArray[nodeOffset + nodeIdOffset];
        const stats = liveObjectStats[id];
        const liveCount = stats ? stats.count : 0;
        const liveSize = stats ? stats.size : 0;
        const result = new TopDownAllocationNode(id, functionInfo, rawNodeArray[nodeOffset + allocationCountOffset], rawNodeArray[nodeOffset + allocationSizeOffset], liveCount, liveSize, parent);
        idToTopDownNode[id] = result;
        functionInfo.addTraceTopNode(result);
        const rawChildren = rawNodeArray[nodeOffset + childrenOffset];
        for (let i = 0; i < rawChildren.length; i += nodeFieldCount) {
            result.children.push(traverseNode(rawChildren, i, result));
        }
        return result;
    }
    return traverseNode(traceTreeRaw, 0, null);
}, _AllocationProfile_ensureBottomUpNode = function _AllocationProfile_ensureBottomUpNode(nodeId) {
    let node = __classPrivateFieldGet(this, _AllocationProfile_idToNode, "f")[nodeId];
    if (!node) {
        const functionInfo = __classPrivateFieldGet(this, _AllocationProfile_collapsedTopNodeIdToFunctionInfo, "f")[nodeId];
        node = functionInfo.bottomUpRoot();
        delete __classPrivateFieldGet(this, _AllocationProfile_collapsedTopNodeIdToFunctionInfo, "f")[nodeId];
        __classPrivateFieldGet(this, _AllocationProfile_idToNode, "f")[nodeId] = node;
    }
    return node;
}, _AllocationProfile_serializeCaller = function _AllocationProfile_serializeCaller(node) {
    var _a, _b;
    const callerId = (__classPrivateFieldSet(this, _AllocationProfile_nextNodeId, (_b = __classPrivateFieldGet(this, _AllocationProfile_nextNodeId, "f"), _a = _b++, _b), "f"), _a);
    __classPrivateFieldGet(this, _AllocationProfile_idToNode, "f")[callerId] = node;
    return __classPrivateFieldGet(this, _AllocationProfile_instances, "m", _AllocationProfile_serializeNode).call(this, callerId, node.functionInfo, node.allocationCount, node.allocationSize, node.liveCount, node.liveSize, node.hasCallers());
}, _AllocationProfile_serializeNode = function _AllocationProfile_serializeNode(nodeId, functionInfo, count, size, liveCount, liveSize, hasChildren) {
    return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__.HeapSnapshotModel.SerializedAllocationNode(nodeId, functionInfo.functionName, functionInfo.scriptName, functionInfo.scriptId, functionInfo.line, functionInfo.column, count, size, liveCount, liveSize, hasChildren);
};
class TopDownAllocationNode {
    constructor(id, functionInfo, count, size, liveCount, liveSize, parent) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "functionInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "allocationCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "allocationSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "liveCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "liveSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "parent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "children", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = id;
        this.functionInfo = functionInfo;
        this.allocationCount = count;
        this.allocationSize = size;
        this.liveCount = liveCount;
        this.liveSize = liveSize;
        this.parent = parent;
        this.children = [];
    }
}
class BottomUpAllocationNode {
    constructor(functionInfo) {
        Object.defineProperty(this, "functionInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "allocationCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "allocationSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "liveCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "liveSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "traceTopIds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _BottomUpAllocationNode_callersInternal.set(this, void 0);
        this.functionInfo = functionInfo;
        this.allocationCount = 0;
        this.allocationSize = 0;
        this.liveCount = 0;
        this.liveSize = 0;
        this.traceTopIds = [];
        __classPrivateFieldSet(this, _BottomUpAllocationNode_callersInternal, [], "f");
    }
    addCaller(traceNode) {
        const functionInfo = traceNode.functionInfo;
        let result;
        for (let i = 0; i < __classPrivateFieldGet(this, _BottomUpAllocationNode_callersInternal, "f").length; i++) {
            const caller = __classPrivateFieldGet(this, _BottomUpAllocationNode_callersInternal, "f")[i];
            if (caller.functionInfo === functionInfo) {
                result = caller;
                break;
            }
        }
        if (!result) {
            result = new BottomUpAllocationNode(functionInfo);
            __classPrivateFieldGet(this, _BottomUpAllocationNode_callersInternal, "f").push(result);
        }
        return result;
    }
    callers() {
        return __classPrivateFieldGet(this, _BottomUpAllocationNode_callersInternal, "f");
    }
    hasCallers() {
        return __classPrivateFieldGet(this, _BottomUpAllocationNode_callersInternal, "f").length > 0;
    }
}
_BottomUpAllocationNode_callersInternal = new WeakMap();
class FunctionAllocationInfo {
    constructor(functionName, scriptName, scriptId, line, column) {
        _FunctionAllocationInfo_instances.add(this);
        Object.defineProperty(this, "functionName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "scriptName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "scriptId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "line", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "column", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "totalCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "totalSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "totalLiveCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "totalLiveSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _FunctionAllocationInfo_traceTops.set(this, void 0);
        _FunctionAllocationInfo_bottomUpTree.set(this, void 0);
        this.functionName = functionName;
        this.scriptName = scriptName;
        this.scriptId = scriptId;
        this.line = line;
        this.column = column;
        this.totalCount = 0;
        this.totalSize = 0;
        this.totalLiveCount = 0;
        this.totalLiveSize = 0;
        __classPrivateFieldSet(this, _FunctionAllocationInfo_traceTops, [], "f");
    }
    addTraceTopNode(node) {
        if (node.allocationCount === 0) {
            return;
        }
        __classPrivateFieldGet(this, _FunctionAllocationInfo_traceTops, "f").push(node);
        this.totalCount += node.allocationCount;
        this.totalSize += node.allocationSize;
        this.totalLiveCount += node.liveCount;
        this.totalLiveSize += node.liveSize;
    }
    bottomUpRoot() {
        if (!__classPrivateFieldGet(this, _FunctionAllocationInfo_traceTops, "f").length) {
            return null;
        }
        if (!__classPrivateFieldGet(this, _FunctionAllocationInfo_bottomUpTree, "f")) {
            __classPrivateFieldGet(this, _FunctionAllocationInfo_instances, "m", _FunctionAllocationInfo_buildAllocationTraceTree).call(this);
        }
        return __classPrivateFieldGet(this, _FunctionAllocationInfo_bottomUpTree, "f");
    }
}
_FunctionAllocationInfo_traceTops = new WeakMap(), _FunctionAllocationInfo_bottomUpTree = new WeakMap(), _FunctionAllocationInfo_instances = new WeakSet(), _FunctionAllocationInfo_buildAllocationTraceTree = function _FunctionAllocationInfo_buildAllocationTraceTree() {
    __classPrivateFieldSet(this, _FunctionAllocationInfo_bottomUpTree, new BottomUpAllocationNode(this), "f");
    for (let i = 0; i < __classPrivateFieldGet(this, _FunctionAllocationInfo_traceTops, "f").length; i++) {
        let node = __classPrivateFieldGet(this, _FunctionAllocationInfo_traceTops, "f")[i];
        let bottomUpNode = __classPrivateFieldGet(this, _FunctionAllocationInfo_bottomUpTree, "f");
        const count = node.allocationCount;
        const size = node.allocationSize;
        const liveCount = node.liveCount;
        const liveSize = node.liveSize;
        const traceId = node.id;
        while (true) {
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
};


/***/ }),

/***/ "./src/models/heap_snapshot_model/heap_snapshot_model.ts":
/*!***************************************************************!*\
  !*** ./src/models/heap_snapshot_model/heap_snapshot_model.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeapSnapshotModel: () => (/* reexport module object */ _HeapSnapshotModel_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _HeapSnapshotModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeapSnapshotModel.js */ "./src/models/heap_snapshot_model/HeapSnapshotModel.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);