"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_heap_snapshot_model_heap_snapshot_model_js-panels_profiler_HeapProfilerPanel_js"],{

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

/***/ }),

/***/ "./panels/profiler/HeapProfilerPanel.js":
/*!**********************************************!*\
  !*** ./panels/profiler/HeapProfilerPanel.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeapProfilerPanel: () => (/* binding */ HeapProfilerPanel)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ProfilesPanel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfilesPanel.js */ "./panels/profiler/ProfilesPanel.js");
/* harmony import */ var _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfileTypeRegistry.js */ "./panels/profiler/ProfileTypeRegistry.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description A context menu item in the Heap Profiler Panel of a profiler tool
     */
    revealInSummaryView: 'Reveal in Summary view',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/HeapProfilerPanel.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
let heapProfilerPanelInstance;
class HeapProfilerPanel extends _ProfilesPanel_js__WEBPACK_IMPORTED_MODULE_3__.ProfilesPanel {
    constructor() {
        const registry = _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_4__.instance;
        const profileTypes = [registry.heapSnapshotProfileType, registry.trackingHeapSnapshotProfileType, registry.samplingHeapProfileType];
        super('heap-profiler', profileTypes, 'profiler.heap-toggle-recording');
    }
    static instance() {
        if (!heapProfilerPanelInstance) {
            heapProfilerPanelInstance = new HeapProfilerPanel();
        }
        return heapProfilerPanelInstance;
    }
    appendApplicableItems(_event, contextMenu, object) {
        if (!this.isShowing()) {
            return;
        }
        if (!object.objectId) {
            return;
        }
        const objectId = object.objectId;
        const heapProfiles = _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_4__.instance.heapSnapshotProfileType.getProfiles();
        if (!heapProfiles.length) {
            return;
        }
        const heapProfilerModel = object.runtimeModel().heapProfilerModel();
        if (!heapProfilerModel) {
            return;
        }
        function revealInView(viewName) {
            void heapProfilerModel.snapshotObjectIdForObjectId(objectId).then(result => {
                if (this.isShowing() && result) {
                    this.showObject(result, viewName);
                }
            });
        }
        contextMenu.revealSection().appendItem(i18nString(UIStrings.revealInSummaryView), revealInView.bind(this, 'Summary'), { jslogContext: 'reveal-in-summary' });
    }
    handleAction(_context, _actionId) {
        const panel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(HeapProfilerPanel);
        console.assert(Boolean(panel) && panel instanceof HeapProfilerPanel);
        if (panel) {
            panel.toggleRecord();
        }
        return true;
    }
    wasShown() {
        super.wasShown();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().setFlavor(HeapProfilerPanel, this);
        // Record the memory tool load time.
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.panelLoaded('heap-profiler', 'DevTools.Launch.HeapProfiler');
    }
    willHide() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().setFlavor(HeapProfilerPanel, null);
        super.willHide();
    }
    showObject(snapshotObjectId, perspectiveName) {
        const registry = _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_4__.instance;
        const heapProfiles = registry.heapSnapshotProfileType.getProfiles();
        for (let i = 0; i < heapProfiles.length; i++) {
            const profile = heapProfiles[i];
            // FIXME: allow to choose snapshot if there are several options.
            if (profile.maxJSObjectId >= parseInt(snapshotObjectId, 10)) {
                this.showProfile(profile);
                const view = this.viewForProfile(profile);
                void view.selectLiveObject(perspectiveName, snapshotObjectId);
                break;
            }
        }
    }
}
//# sourceMappingURL=HeapProfilerPanel.js.map

/***/ })

}]);