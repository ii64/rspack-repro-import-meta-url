"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_heap_snapshot_model_HeapSnapshotModel_js"], {
"./models/heap_snapshot_model/HeapSnapshotModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Aggregate: function() { return Aggregate; },
  AggregateForDiff: function() { return AggregateForDiff; },
  AllocationNodeCallers: function() { return AllocationNodeCallers; },
  AllocationStackFrame: function() { return AllocationStackFrame; },
  ComparatorConfig: function() { return ComparatorConfig; },
  Diff: function() { return Diff; },
  DiffForClass: function() { return DiffForClass; },
  Edge: function() { return Edge; },
  HeapSnapshotProgressEvent: function() { return HeapSnapshotProgressEvent; },
  ItemsRange: function() { return ItemsRange; },
  Location: function() { return Location; },
  Node: function() { return Node; },
  NodeFilter: function() { return NodeFilter; },
  Samples: function() { return Samples; },
  SearchConfig: function() { return SearchConfig; },
  SerializedAllocationNode: function() { return SerializedAllocationNode; },
  StaticData: function() { return StaticData; },
  Statistics: function() { return Statistics; },
  WorkerCommand: function() { return WorkerCommand; },
  baseSystemDistance: function() { return baseSystemDistance; },
  baseUnreachableDistance: function() { return baseUnreachableDistance; }
});
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
 */ function _class_call_check(instance, Constructor) {
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
var HeapSnapshotProgressEvent = {
    Update: 'ProgressUpdate',
    BrokenSnapshot: 'BrokenSnapshot'
};
var baseSystemDistance = 100000000;
var baseUnreachableDistance = baseSystemDistance * 2;
var AllocationNodeCallers = function AllocationNodeCallers(nodesWithSingleCaller, branchingCallers) {
    "use strict";
    _class_call_check(this, AllocationNodeCallers);
    _define_property(this, "nodesWithSingleCaller", void 0);
    _define_property(this, "branchingCallers", void 0);
    this.nodesWithSingleCaller = nodesWithSingleCaller;
    this.branchingCallers = branchingCallers;
};
var SerializedAllocationNode = function SerializedAllocationNode(nodeId, functionName, scriptName, scriptId, line, column, count, size, liveCount, liveSize, hasChildren) {
    "use strict";
    _class_call_check(this, SerializedAllocationNode);
    _define_property(this, "id", void 0);
    _define_property(this, "name", void 0);
    _define_property(this, "scriptName", void 0);
    _define_property(this, "scriptId", void 0);
    _define_property(this, "line", void 0);
    _define_property(this, "column", void 0);
    _define_property(this, "count", void 0);
    _define_property(this, "size", void 0);
    _define_property(this, "liveCount", void 0);
    _define_property(this, "liveSize", void 0);
    _define_property(this, "hasChildren", void 0);
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
};
var AllocationStackFrame = function AllocationStackFrame(functionName, scriptName, scriptId, line, column) {
    "use strict";
    _class_call_check(this, AllocationStackFrame);
    _define_property(this, "functionName", void 0);
    _define_property(this, "scriptName", void 0);
    _define_property(this, "scriptId", void 0);
    _define_property(this, "line", void 0);
    _define_property(this, "column", void 0);
    this.functionName = functionName;
    this.scriptName = scriptName;
    this.scriptId = scriptId;
    this.line = line;
    this.column = column;
};
var Node = function Node(id, name, distance, nodeIndex, retainedSize, selfSize, type) {
    "use strict";
    _class_call_check(this, Node);
    _define_property(this, "id", void 0);
    _define_property(this, "name", void 0);
    _define_property(this, "distance", void 0);
    _define_property(this, "nodeIndex", void 0);
    _define_property(this, "retainedSize", void 0);
    _define_property(this, "selfSize", void 0);
    _define_property(this, "type", void 0);
    _define_property(this, "canBeQueried", void 0);
    _define_property(this, "detachedDOMTreeNode", void 0);
    _define_property(this, "isAddedNotRemoved", void 0);
    _define_property(this, "ignored", void 0);
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
};
var Edge = function Edge(name, node, type, edgeIndex) {
    "use strict";
    _class_call_check(this, Edge);
    _define_property(this, "name", void 0);
    _define_property(this, "node", void 0);
    _define_property(this, "type", void 0);
    _define_property(this, "edgeIndex", void 0);
    _define_property(this, "isAddedNotRemoved", void 0);
    this.name = name;
    this.node = node;
    this.type = type;
    this.edgeIndex = edgeIndex;
    this.isAddedNotRemoved = null;
};
var Aggregate = function Aggregate() {
    "use strict";
    _class_call_check(this, Aggregate);
    _define_property(this, "count", void 0);
    _define_property(this, "distance", void 0);
    _define_property(this, "self", void 0);
    _define_property(this, "maxRet", void 0);
    _define_property(this, "type", void 0);
    _define_property(this, "name", void 0);
    _define_property(this, "idxs", void 0);
};
var AggregateForDiff = function AggregateForDiff() {
    "use strict";
    _class_call_check(this, AggregateForDiff);
    _define_property(this, "indexes", void 0);
    _define_property(this, "ids", void 0);
    _define_property(this, "selfSizes", void 0);
    this.indexes = [];
    this.ids = [];
    this.selfSizes = [];
};
var Diff = function Diff() {
    "use strict";
    _class_call_check(this, Diff);
    _define_property(this, "addedCount", void 0);
    _define_property(this, "removedCount", void 0);
    _define_property(this, "addedSize", void 0);
    _define_property(this, "removedSize", void 0);
    _define_property(this, "deletedIndexes", void 0);
    _define_property(this, "addedIndexes", void 0);
    _define_property(this, "countDelta", void 0);
    _define_property(this, "sizeDelta", void 0);
    this.addedCount = 0;
    this.removedCount = 0;
    this.addedSize = 0;
    this.removedSize = 0;
    this.deletedIndexes = [];
    this.addedIndexes = [];
};
var DiffForClass = function DiffForClass() {
    "use strict";
    _class_call_check(this, DiffForClass);
    _define_property(this, "addedCount", void 0);
    _define_property(this, "removedCount", void 0);
    _define_property(this, "addedSize", void 0);
    _define_property(this, "removedSize", void 0);
    _define_property(this, "deletedIndexes", void 0);
    _define_property(this, "addedIndexes", void 0);
    _define_property(this, "countDelta", void 0);
    _define_property(this, "sizeDelta", void 0);
};
var ComparatorConfig = function ComparatorConfig(fieldName1, ascending1, fieldName2, ascending2) {
    "use strict";
    _class_call_check(this, ComparatorConfig);
    _define_property(this, "fieldName1", void 0);
    _define_property(this, "ascending1", void 0);
    _define_property(this, "fieldName2", void 0);
    _define_property(this, "ascending2", void 0);
    this.fieldName1 = fieldName1;
    this.ascending1 = ascending1;
    this.fieldName2 = fieldName2;
    this.ascending2 = ascending2;
};
var WorkerCommand = function WorkerCommand() {
    "use strict";
    _class_call_check(this, WorkerCommand);
    _define_property(this, "callId", void 0);
    _define_property(this, "disposition", void 0);
    _define_property(this, "objectId", void 0);
    _define_property(this, "newObjectId", void 0);
    _define_property(this, "methodName", void 0);
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _define_property(this, "methodArguments", void 0);
    _define_property(this, "source", void 0);
};
var ItemsRange = function ItemsRange(startPosition, endPosition, totalLength, items) {
    "use strict";
    _class_call_check(this, ItemsRange);
    _define_property(this, "startPosition", void 0);
    _define_property(this, "endPosition", void 0);
    _define_property(this, "totalLength", void 0);
    _define_property(this, "items", void 0);
    this.startPosition = startPosition;
    this.endPosition = endPosition;
    this.totalLength = totalLength;
    this.items = items;
};
var StaticData = function StaticData(nodeCount, rootNodeIndex, totalSize, maxJSObjectId) {
    "use strict";
    _class_call_check(this, StaticData);
    _define_property(this, "nodeCount", void 0);
    _define_property(this, "rootNodeIndex", void 0);
    _define_property(this, "totalSize", void 0);
    _define_property(this, "maxJSObjectId", void 0);
    this.nodeCount = nodeCount;
    this.rootNodeIndex = rootNodeIndex;
    this.totalSize = totalSize;
    this.maxJSObjectId = maxJSObjectId;
};
var Statistics = function Statistics() {
    "use strict";
    _class_call_check(this, Statistics);
    _define_property(this, "total", void 0);
    _define_property(this, "v8heap", void 0);
    _define_property(this, "native", void 0);
    _define_property(this, "code", void 0);
    _define_property(this, "jsArrays", void 0);
    _define_property(this, "strings", void 0);
    _define_property(this, "system", void 0);
};
var NodeFilter = /*#__PURE__*/ function() {
    "use strict";
    function NodeFilter(minNodeId, maxNodeId) {
        _class_call_check(this, NodeFilter);
        _define_property(this, "minNodeId", void 0);
        _define_property(this, "maxNodeId", void 0);
        _define_property(this, "allocationNodeId", void 0);
        _define_property(this, "filterName", void 0);
        this.minNodeId = minNodeId;
        this.maxNodeId = maxNodeId;
    }
    _create_class(NodeFilter, [
        {
            key: "equals",
            value: function equals(o) {
                return this.minNodeId === o.minNodeId && this.maxNodeId === o.maxNodeId && this.allocationNodeId === o.allocationNodeId && this.filterName === o.filterName;
            }
        }
    ]);
    return NodeFilter;
}();
var SearchConfig = /*#__PURE__*/ function() {
    "use strict";
    function SearchConfig(query, caseSensitive, isRegex, shouldJump, jumpBackward) {
        _class_call_check(this, SearchConfig);
        _define_property(this, "query", void 0);
        _define_property(this, "caseSensitive", void 0);
        _define_property(this, "isRegex", void 0);
        _define_property(this, "shouldJump", void 0);
        _define_property(this, "jumpBackward", void 0);
        this.query = query;
        this.caseSensitive = caseSensitive;
        this.isRegex = isRegex;
        this.shouldJump = shouldJump;
        this.jumpBackward = jumpBackward;
    }
    _create_class(SearchConfig, [
        {
            key: "toSearchRegex",
            value: function toSearchRegex(_global) {
                throw new Error('Unsupported operation on search config');
            }
        }
    ]);
    return SearchConfig;
}();
var Samples = function Samples(timestamps, lastAssignedIds, sizes) {
    "use strict";
    _class_call_check(this, Samples);
    _define_property(this, "timestamps", void 0);
    _define_property(this, "lastAssignedIds", void 0);
    _define_property(this, "sizes", void 0);
    this.timestamps = timestamps;
    this.lastAssignedIds = lastAssignedIds;
    this.sizes = sizes;
};
var Location = function Location(scriptId, lineNumber, columnNumber) {
    "use strict";
    _class_call_check(this, Location);
    _define_property(this, "scriptId", void 0);
    _define_property(this, "lineNumber", void 0);
    _define_property(this, "columnNumber", void 0);
    this.scriptId = scriptId;
    this.lineNumber = lineNumber;
    this.columnNumber = columnNumber;
} //# sourceMappingURL=HeapSnapshotModel.js.map
;


}),

}]);