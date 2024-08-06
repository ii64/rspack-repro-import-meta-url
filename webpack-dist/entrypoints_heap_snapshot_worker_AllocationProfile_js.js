"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_heap_snapshot_worker_AllocationProfile_js"],{

/***/ "./entrypoints/heap_snapshot_worker/AllocationProfile.js":
/*!***************************************************************!*\
  !*** ./entrypoints/heap_snapshot_worker/AllocationProfile.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllocationProfile: () => (/* binding */ AllocationProfile),
/* harmony export */   BottomUpAllocationNode: () => (/* binding */ BottomUpAllocationNode),
/* harmony export */   FunctionAllocationInfo: () => (/* binding */ FunctionAllocationInfo),
/* harmony export */   TopDownAllocationNode: () => (/* binding */ TopDownAllocationNode)
/* harmony export */ });
/* harmony import */ var _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/heap_snapshot_model/heap_snapshot_model.js */ "./models/heap_snapshot_model/heap_snapshot_model.js");
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

class AllocationProfile {
    #strings;
    #nextNodeId;
    #functionInfos;
    #idToNode;
    #idToTopDownNode;
    #collapsedTopNodeIdToFunctionInfo;
    #traceTops;
    constructor(profile, liveObjectStats) {
        this.#strings = profile.strings;
        this.#nextNodeId = 1;
        this.#functionInfos = [];
        this.#idToNode = {};
        this.#idToTopDownNode = {};
        this.#collapsedTopNodeIdToFunctionInfo = {};
        this.#traceTops = null;
        this.#buildFunctionAllocationInfos(profile);
        this.#buildAllocationTree(profile, liveObjectStats);
    }
    #buildFunctionAllocationInfos(profile) {
        const strings = this.#strings;
        const functionInfoFields = profile.snapshot.meta.trace_function_info_fields;
        const functionNameOffset = functionInfoFields.indexOf('name');
        const scriptNameOffset = functionInfoFields.indexOf('script_name');
        const scriptIdOffset = functionInfoFields.indexOf('script_id');
        const lineOffset = functionInfoFields.indexOf('line');
        const columnOffset = functionInfoFields.indexOf('column');
        const functionInfoFieldCount = functionInfoFields.length;
        const rawInfos = profile.trace_function_infos;
        const infoLength = rawInfos.length;
        const functionInfos = this.#functionInfos = new Array(infoLength / functionInfoFieldCount);
        let index = 0;
        for (let i = 0; i < infoLength; i += functionInfoFieldCount) {
            functionInfos[index++] = new FunctionAllocationInfo(strings[rawInfos[i + functionNameOffset]], strings[rawInfos[i + scriptNameOffset]], rawInfos[i + scriptIdOffset], rawInfos[i + lineOffset], rawInfos[i + columnOffset]);
        }
    }
    #buildAllocationTree(profile, liveObjectStats) {
        const traceTreeRaw = profile.trace_tree;
        const functionInfos = this.#functionInfos;
        const idToTopDownNode = this.#idToTopDownNode;
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
    }
    serializeTraceTops() {
        if (this.#traceTops) {
            return this.#traceTops;
        }
        const result = this.#traceTops = [];
        const functionInfos = this.#functionInfos;
        for (let i = 0; i < functionInfos.length; i++) {
            const info = functionInfos[i];
            if (info.totalCount === 0) {
                continue;
            }
            const nodeId = this.#nextNodeId++;
            const isRoot = i === 0;
            result.push(this.#serializeNode(nodeId, info, info.totalCount, info.totalSize, info.totalLiveCount, info.totalLiveSize, !isRoot));
            this.#collapsedTopNodeIdToFunctionInfo[nodeId] = info;
        }
        result.sort(function (a, b) {
            return b.size - a.size;
        });
        return result;
    }
    serializeCallers(nodeId) {
        let node = this.#ensureBottomUpNode(nodeId);
        const nodesWithSingleCaller = [];
        while (node.callers().length === 1) {
            node = node.callers()[0];
            nodesWithSingleCaller.push(this.#serializeCaller(node));
        }
        const branchingCallers = [];
        const callers = node.callers();
        for (let i = 0; i < callers.length; i++) {
            branchingCallers.push(this.#serializeCaller(callers[i]));
        }
        return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__.HeapSnapshotModel.AllocationNodeCallers(nodesWithSingleCaller, branchingCallers);
    }
    serializeAllocationStack(traceNodeId) {
        let node = this.#idToTopDownNode[traceNodeId];
        const result = [];
        while (node) {
            const functionInfo = node.functionInfo;
            result.push(new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__.HeapSnapshotModel.AllocationStackFrame(functionInfo.functionName, functionInfo.scriptName, functionInfo.scriptId, functionInfo.line, functionInfo.column));
            node = node.parent;
        }
        return result;
    }
    traceIds(allocationNodeId) {
        return this.#ensureBottomUpNode(allocationNodeId).traceTopIds;
    }
    #ensureBottomUpNode(nodeId) {
        let node = this.#idToNode[nodeId];
        if (!node) {
            const functionInfo = this.#collapsedTopNodeIdToFunctionInfo[nodeId];
            node = functionInfo.bottomUpRoot();
            delete this.#collapsedTopNodeIdToFunctionInfo[nodeId];
            this.#idToNode[nodeId] = node;
        }
        return node;
    }
    #serializeCaller(node) {
        const callerId = this.#nextNodeId++;
        this.#idToNode[callerId] = node;
        return this.#serializeNode(callerId, node.functionInfo, node.allocationCount, node.allocationSize, node.liveCount, node.liveSize, node.hasCallers());
    }
    #serializeNode(nodeId, functionInfo, count, size, liveCount, liveSize, hasChildren) {
        return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__.HeapSnapshotModel.SerializedAllocationNode(nodeId, functionInfo.functionName, functionInfo.scriptName, functionInfo.scriptId, functionInfo.line, functionInfo.column, count, size, liveCount, liveSize, hasChildren);
    }
}
class TopDownAllocationNode {
    id;
    functionInfo;
    allocationCount;
    allocationSize;
    liveCount;
    liveSize;
    parent;
    children;
    constructor(id, functionInfo, count, size, liveCount, liveSize, parent) {
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
    functionInfo;
    allocationCount;
    allocationSize;
    liveCount;
    liveSize;
    traceTopIds;
    #callersInternal;
    constructor(functionInfo) {
        this.functionInfo = functionInfo;
        this.allocationCount = 0;
        this.allocationSize = 0;
        this.liveCount = 0;
        this.liveSize = 0;
        this.traceTopIds = [];
        this.#callersInternal = [];
    }
    addCaller(traceNode) {
        const functionInfo = traceNode.functionInfo;
        let result;
        for (let i = 0; i < this.#callersInternal.length; i++) {
            const caller = this.#callersInternal[i];
            if (caller.functionInfo === functionInfo) {
                result = caller;
                break;
            }
        }
        if (!result) {
            result = new BottomUpAllocationNode(functionInfo);
            this.#callersInternal.push(result);
        }
        return result;
    }
    callers() {
        return this.#callersInternal;
    }
    hasCallers() {
        return this.#callersInternal.length > 0;
    }
}
class FunctionAllocationInfo {
    functionName;
    scriptName;
    scriptId;
    line;
    column;
    totalCount;
    totalSize;
    totalLiveCount;
    totalLiveSize;
    #traceTops;
    #bottomUpTree;
    constructor(functionName, scriptName, scriptId, line, column) {
        this.functionName = functionName;
        this.scriptName = scriptName;
        this.scriptId = scriptId;
        this.line = line;
        this.column = column;
        this.totalCount = 0;
        this.totalSize = 0;
        this.totalLiveCount = 0;
        this.totalLiveSize = 0;
        this.#traceTops = [];
    }
    addTraceTopNode(node) {
        if (node.allocationCount === 0) {
            return;
        }
        this.#traceTops.push(node);
        this.totalCount += node.allocationCount;
        this.totalSize += node.allocationSize;
        this.totalLiveCount += node.liveCount;
        this.totalLiveSize += node.liveSize;
    }
    bottomUpRoot() {
        if (!this.#traceTops.length) {
            return null;
        }
        if (!this.#bottomUpTree) {
            this.#buildAllocationTraceTree();
        }
        return this.#bottomUpTree;
    }
    #buildAllocationTraceTree() {
        this.#bottomUpTree = new BottomUpAllocationNode(this);
        for (let i = 0; i < this.#traceTops.length; i++) {
            let node = this.#traceTops[i];
            let bottomUpNode = this.#bottomUpTree;
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
    }
}
//# sourceMappingURL=AllocationProfile.js.map

/***/ }),

/***/ "./models/heap_snapshot_model/HeapSnapshotModel.js":
/*!*********************************************************!*\
  !*** ./models/heap_snapshot_model/HeapSnapshotModel.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Aggregate: () => (/* binding */ Aggregate),
/* harmony export */   AggregateForDiff: () => (/* binding */ AggregateForDiff),
/* harmony export */   AllocationNodeCallers: () => (/* binding */ AllocationNodeCallers),
/* harmony export */   AllocationStackFrame: () => (/* binding */ AllocationStackFrame),
/* harmony export */   ComparatorConfig: () => (/* binding */ ComparatorConfig),
/* harmony export */   Diff: () => (/* binding */ Diff),
/* harmony export */   DiffForClass: () => (/* binding */ DiffForClass),
/* harmony export */   Edge: () => (/* binding */ Edge),
/* harmony export */   HeapSnapshotProgressEvent: () => (/* binding */ HeapSnapshotProgressEvent),
/* harmony export */   ItemsRange: () => (/* binding */ ItemsRange),
/* harmony export */   Location: () => (/* binding */ Location),
/* harmony export */   Node: () => (/* binding */ Node),
/* harmony export */   NodeFilter: () => (/* binding */ NodeFilter),
/* harmony export */   Samples: () => (/* binding */ Samples),
/* harmony export */   SearchConfig: () => (/* binding */ SearchConfig),
/* harmony export */   SerializedAllocationNode: () => (/* binding */ SerializedAllocationNode),
/* harmony export */   StaticData: () => (/* binding */ StaticData),
/* harmony export */   Statistics: () => (/* binding */ Statistics),
/* harmony export */   WorkerCommand: () => (/* binding */ WorkerCommand),
/* harmony export */   baseSystemDistance: () => (/* binding */ baseSystemDistance),
/* harmony export */   baseUnreachableDistance: () => (/* binding */ baseUnreachableDistance)
/* harmony export */ });
/*
 * Copyright (C) 2014 Google Inc. All rights reserved.
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
const HeapSnapshotProgressEvent = {
    Update: 'ProgressUpdate',
    BrokenSnapshot: 'BrokenSnapshot',
};
const baseSystemDistance = 100000000;
const baseUnreachableDistance = baseSystemDistance * 2;
class AllocationNodeCallers {
    nodesWithSingleCaller;
    branchingCallers;
    constructor(nodesWithSingleCaller, branchingCallers) {
        this.nodesWithSingleCaller = nodesWithSingleCaller;
        this.branchingCallers = branchingCallers;
    }
}
class SerializedAllocationNode {
    id;
    name;
    scriptName;
    scriptId;
    line;
    column;
    count;
    size;
    liveCount;
    liveSize;
    hasChildren;
    constructor(nodeId, functionName, scriptName, scriptId, line, column, count, size, liveCount, liveSize, hasChildren) {
        this.id = nodeId;
        this.name = functionName;
        this.scriptName = scriptName;
        this.scriptId = scriptId;
        this.line = line;
        this.column = column;
        this.count = count;
        this.size = size;
        this.liveCount = liveCount;
        this.liveSize = liveSize;
        this.hasChildren = hasChildren;
    }
}
class AllocationStackFrame {
    functionName;
    scriptName;
    scriptId;
    line;
    column;
    constructor(functionName, scriptName, scriptId, line, column) {
        this.functionName = functionName;
        this.scriptName = scriptName;
        this.scriptId = scriptId;
        this.line = line;
        this.column = column;
    }
}
class Node {
    id;
    name;
    distance;
    nodeIndex;
    retainedSize;
    selfSize;
    type;
    canBeQueried;
    detachedDOMTreeNode;
    isAddedNotRemoved;
    ignored;
    constructor(id, name, distance, nodeIndex, retainedSize, selfSize, type) {
        this.id = id;
        this.name = name;
        this.distance = distance;
        this.nodeIndex = nodeIndex;
        this.retainedSize = retainedSize;
        this.selfSize = selfSize;
        this.type = type;
        this.canBeQueried = false;
        this.detachedDOMTreeNode = false;
        this.isAddedNotRemoved = null;
        this.ignored = false;
    }
}
class Edge {
    name;
    node;
    type;
    edgeIndex;
    isAddedNotRemoved;
    constructor(name, node, type, edgeIndex) {
        this.name = name;
        this.node = node;
        this.type = type;
        this.edgeIndex = edgeIndex;
        this.isAddedNotRemoved = null;
    }
}
class Aggregate {
    count;
    distance;
    self;
    maxRet;
    type;
    name;
    idxs;
    constructor() {
    }
}
class AggregateForDiff {
    indexes;
    ids;
    selfSizes;
    constructor() {
        this.indexes = [];
        this.ids = [];
        this.selfSizes = [];
    }
}
class Diff {
    addedCount;
    removedCount;
    addedSize;
    removedSize;
    deletedIndexes;
    addedIndexes;
    countDelta;
    sizeDelta;
    constructor() {
        this.addedCount = 0;
        this.removedCount = 0;
        this.addedSize = 0;
        this.removedSize = 0;
        this.deletedIndexes = [];
        this.addedIndexes = [];
    }
}
class DiffForClass {
    addedCount;
    removedCount;
    addedSize;
    removedSize;
    deletedIndexes;
    addedIndexes;
    countDelta;
    sizeDelta;
    constructor() {
    }
}
class ComparatorConfig {
    fieldName1;
    ascending1;
    fieldName2;
    ascending2;
    constructor(fieldName1, ascending1, fieldName2, ascending2) {
        this.fieldName1 = fieldName1;
        this.ascending1 = ascending1;
        this.fieldName2 = fieldName2;
        this.ascending2 = ascending2;
    }
}
class WorkerCommand {
    callId;
    disposition;
    objectId;
    newObjectId;
    methodName;
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    methodArguments;
    source;
    constructor() {
    }
}
class ItemsRange {
    startPosition;
    endPosition;
    totalLength;
    items;
    constructor(startPosition, endPosition, totalLength, items) {
        this.startPosition = startPosition;
        this.endPosition = endPosition;
        this.totalLength = totalLength;
        this.items = items;
    }
}
class StaticData {
    nodeCount;
    rootNodeIndex;
    totalSize;
    maxJSObjectId;
    constructor(nodeCount, rootNodeIndex, totalSize, maxJSObjectId) {
        this.nodeCount = nodeCount;
        this.rootNodeIndex = rootNodeIndex;
        this.totalSize = totalSize;
        this.maxJSObjectId = maxJSObjectId;
    }
}
class Statistics {
    total;
    v8heap;
    native;
    code;
    jsArrays;
    strings;
    system;
    constructor() {
    }
}
class NodeFilter {
    minNodeId;
    maxNodeId;
    allocationNodeId;
    filterName;
    constructor(minNodeId, maxNodeId) {
        this.minNodeId = minNodeId;
        this.maxNodeId = maxNodeId;
    }
    equals(o) {
        return this.minNodeId === o.minNodeId && this.maxNodeId === o.maxNodeId &&
            this.allocationNodeId === o.allocationNodeId && this.filterName === o.filterName;
    }
}
class SearchConfig {
    query;
    caseSensitive;
    isRegex;
    shouldJump;
    jumpBackward;
    constructor(query, caseSensitive, isRegex, shouldJump, jumpBackward) {
        this.query = query;
        this.caseSensitive = caseSensitive;
        this.isRegex = isRegex;
        this.shouldJump = shouldJump;
        this.jumpBackward = jumpBackward;
    }
    toSearchRegex(_global) {
        throw new Error('Unsupported operation on search config');
    }
}
class Samples {
    timestamps;
    lastAssignedIds;
    sizes;
    constructor(timestamps, lastAssignedIds, sizes) {
        this.timestamps = timestamps;
        this.lastAssignedIds = lastAssignedIds;
        this.sizes = sizes;
    }
}
class Location {
    scriptId;
    lineNumber;
    columnNumber;
    constructor(scriptId, lineNumber, columnNumber) {
        this.scriptId = scriptId;
        this.lineNumber = lineNumber;
        this.columnNumber = columnNumber;
    }
}
//# sourceMappingURL=HeapSnapshotModel.js.map

/***/ }),

/***/ "./models/heap_snapshot_model/heap_snapshot_model.js":
/*!***********************************************************!*\
  !*** ./models/heap_snapshot_model/heap_snapshot_model.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeapSnapshotModel: () => (/* reexport module object */ _HeapSnapshotModel_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _HeapSnapshotModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeapSnapshotModel.js */ "./models/heap_snapshot_model/HeapSnapshotModel.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=heap_snapshot_model.js.map

/***/ })

}]);