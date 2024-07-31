(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_legacy_test_runner_heap_profiler_test_runner_heap_profiler_test_runner_js"],{

/***/ "./src/entrypoints/heap_snapshot_worker/HeapSnapshotWorkerDispatcher.ts":
/*!******************************************************************************!*\
  !*** ./src/entrypoints/heap_snapshot_worker/HeapSnapshotWorkerDispatcher.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeapSnapshotWorkerDispatcher: () => (/* binding */ HeapSnapshotWorkerDispatcher)
/* harmony export */ });
/* harmony import */ var _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/heap_snapshot_model/heap_snapshot_model.js */ "./src/models/heap_snapshot_model/heap_snapshot_model.ts");
/* harmony import */ var _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllocationProfile.js */ "./src/entrypoints/heap_snapshot_worker/AllocationProfile.ts");
/* harmony import */ var _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeapSnapshot.js */ "./src/entrypoints/heap_snapshot_worker/HeapSnapshot.ts");
/* harmony import */ var _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeapSnapshotLoader.js */ "./src/entrypoints/heap_snapshot_worker/HeapSnapshotLoader.ts");
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
var _HeapSnapshotWorkerDispatcher_objects, _HeapSnapshotWorkerDispatcher_postMessage;

// We mirror what heap_snapshot_worker.ts does, but we can't use it here as we'd have a
// cyclic GN dependency otherwise.



class HeapSnapshotWorkerDispatcher {
    constructor(postMessage) {
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _HeapSnapshotWorkerDispatcher_objects.set(this, void 0);
        _HeapSnapshotWorkerDispatcher_postMessage.set(this, void 0);
        __classPrivateFieldSet(this, _HeapSnapshotWorkerDispatcher_objects, [], "f");
        __classPrivateFieldSet(this, _HeapSnapshotWorkerDispatcher_postMessage, postMessage, "f");
    }
    sendEvent(name, data) {
        __classPrivateFieldGet(this, _HeapSnapshotWorkerDispatcher_postMessage, "f").call(this, { eventName: name, data: data });
    }
    dispatchMessage({ data }) {
        const response = { callId: data.callId, result: null, error: undefined, errorCallStack: undefined, errorMethodName: undefined };
        try {
            switch (data.disposition) {
                case 'createLoader':
                    __classPrivateFieldGet(this, _HeapSnapshotWorkerDispatcher_objects, "f")[data.objectId] = new _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_3__.HeapSnapshotLoader(this);
                    break;
                case 'dispose': {
                    delete __classPrivateFieldGet(this, _HeapSnapshotWorkerDispatcher_objects, "f")[data.objectId];
                    break;
                }
                case 'getter': {
                    const object = __classPrivateFieldGet(this, _HeapSnapshotWorkerDispatcher_objects, "f")[data.objectId];
                    const result = object[data.methodName];
                    response.result = result;
                    break;
                }
                case 'factory': {
                    const object = __classPrivateFieldGet(this, _HeapSnapshotWorkerDispatcher_objects, "f")[data.objectId];
                    const result = object[data.methodName].apply(object, data.methodArguments);
                    if (result) {
                        __classPrivateFieldGet(this, _HeapSnapshotWorkerDispatcher_objects, "f")[data.newObjectId] = result;
                    }
                    response.result = Boolean(result);
                    break;
                }
                case 'method': {
                    const object = __classPrivateFieldGet(this, _HeapSnapshotWorkerDispatcher_objects, "f")[data.objectId];
                    response.result = object[data.methodName].apply(object, data.methodArguments);
                    break;
                }
                case 'evaluateForTest': {
                    try {
                        // Make 'HeapSnapshotWorker' and 'HeapSnapshotModel' available to web tests. 'eval' can't use 'import'.
                        // @ts-ignore
                        globalThis.HeapSnapshotWorker = {
                            AllocationProfile: _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_1__,
                            HeapSnapshot: _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__,
                            HeapSnapshotLoader: _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_3__,
                        };
                        // @ts-ignore
                        globalThis.HeapSnapshotModel = _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__;
                        response.result = self.eval(data.source);
                    }
                    catch (error) {
                        response.result = error.toString();
                    }
                    break;
                }
            }
        }
        catch (error) {
            response.error = error.toString();
            response.errorCallStack = error.stack;
            if (data.methodName) {
                response.errorMethodName = data.methodName;
            }
        }
        __classPrivateFieldGet(this, _HeapSnapshotWorkerDispatcher_postMessage, "f").call(this, response);
    }
}
_HeapSnapshotWorkerDispatcher_objects = new WeakMap(), _HeapSnapshotWorkerDispatcher_postMessage = new WeakMap();


/***/ }),

/***/ "./src/entrypoints/heap_snapshot_worker/heap_snapshot_worker.ts":
/*!**********************************************************************!*\
  !*** ./src/entrypoints/heap_snapshot_worker/heap_snapshot_worker.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllocationProfile: () => (/* reexport module object */ _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   HeapSnapshot: () => (/* reexport module object */ _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   HeapSnapshotLoader: () => (/* reexport module object */ _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   HeapSnapshotWorkerDispatcher: () => (/* reexport module object */ _HeapSnapshotWorkerDispatcher_js__WEBPACK_IMPORTED_MODULE_3__)
/* harmony export */ });
/* harmony import */ var _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllocationProfile.js */ "./src/entrypoints/heap_snapshot_worker/AllocationProfile.ts");
/* harmony import */ var _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeapSnapshot.js */ "./src/entrypoints/heap_snapshot_worker/HeapSnapshot.ts");
/* harmony import */ var _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeapSnapshotLoader.js */ "./src/entrypoints/heap_snapshot_worker/HeapSnapshotLoader.ts");
/* harmony import */ var _HeapSnapshotWorkerDispatcher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeapSnapshotWorkerDispatcher.js */ "./src/entrypoints/heap_snapshot_worker/HeapSnapshotWorkerDispatcher.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







/***/ }),

/***/ "./src/panels/profiler/ChildrenProvider.ts":
/*!*************************************************!*\
  !*** ./src/panels/profiler/ChildrenProvider.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ }),

/***/ "./src/panels/profiler/HeapProfilerPanel.ts":
/*!**************************************************!*\
  !*** ./src/panels/profiler/HeapProfilerPanel.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeapProfilerPanel: () => (/* binding */ HeapProfilerPanel)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ProfilesPanel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfilesPanel.js */ "./src/panels/profiler/ProfilesPanel.ts");
/* harmony import */ var _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfileTypeRegistry.js */ "./src/panels/profiler/ProfileTypeRegistry.ts");
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


/***/ }),

/***/ "./src/panels/profiler/profiler.ts":
/*!*****************************************!*\
  !*** ./src/panels/profiler/profiler.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BottomUpProfileDataGrid: () => (/* reexport module object */ _BottomUpProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   ChildrenProvider: () => (/* reexport module object */ _ChildrenProvider_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   HeapProfileView: () => (/* reexport module object */ _HeapProfileView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   HeapProfilerPanel: () => (/* reexport module object */ _HeapProfilerPanel_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   HeapSnapshotDataGrids: () => (/* reexport module object */ _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   HeapSnapshotGridNodes: () => (/* reexport module object */ _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   HeapSnapshotProxy: () => (/* reexport module object */ _HeapSnapshotProxy_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   HeapSnapshotView: () => (/* reexport module object */ _HeapSnapshotView_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   HeapTimelineOverview: () => (/* reexport module object */ _HeapTimelineOverview_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   IsolateSelector: () => (/* reexport module object */ _IsolateSelector_js__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   LiveHeapProfileView: () => (/* reexport module object */ _LiveHeapProfileView_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   ProfileDataGrid: () => (/* reexport module object */ _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   ProfileFlameChart: () => (/* reexport module object */ _ProfileFlameChartDataProvider_js__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   ProfileHeader: () => (/* reexport module object */ _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   ProfileLauncherView: () => (/* reexport module object */ _ProfileLauncherView_js__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   ProfileSidebarTreeElement: () => (/* reexport module object */ _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   ProfileTypeRegistry: () => (/* reexport module object */ _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_17__),
/* harmony export */   ProfileView: () => (/* reexport module object */ _ProfileView_js__WEBPACK_IMPORTED_MODULE_18__),
/* harmony export */   ProfilesPanel: () => (/* reexport module object */ _ProfilesPanel_js__WEBPACK_IMPORTED_MODULE_16__),
/* harmony export */   TopDownProfileDataGrid: () => (/* reexport module object */ _TopDownProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_19__)
/* harmony export */ });
/* harmony import */ var _BottomUpProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BottomUpProfileDataGrid.js */ "./src/panels/profiler/BottomUpProfileDataGrid.ts");
/* harmony import */ var _ChildrenProvider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChildrenProvider.js */ "./src/panels/profiler/ChildrenProvider.ts");
/* harmony import */ var _HeapProfilerPanel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeapProfilerPanel.js */ "./src/panels/profiler/HeapProfilerPanel.ts");
/* harmony import */ var _HeapProfileView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeapProfileView.js */ "./src/panels/profiler/HeapProfileView.ts");
/* harmony import */ var _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeapSnapshotDataGrids.js */ "./src/panels/profiler/HeapSnapshotDataGrids.ts");
/* harmony import */ var _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeapSnapshotGridNodes.js */ "./src/panels/profiler/HeapSnapshotGridNodes.ts");
/* harmony import */ var _HeapSnapshotProxy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeapSnapshotProxy.js */ "./src/panels/profiler/HeapSnapshotProxy.ts");
/* harmony import */ var _HeapSnapshotView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HeapSnapshotView.js */ "./src/panels/profiler/HeapSnapshotView.ts");
/* harmony import */ var _HeapTimelineOverview_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HeapTimelineOverview.js */ "./src/panels/profiler/HeapTimelineOverview.ts");
/* harmony import */ var _IsolateSelector_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IsolateSelector.js */ "./src/panels/profiler/IsolateSelector.ts");
/* harmony import */ var _LiveHeapProfileView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LiveHeapProfileView.js */ "./src/panels/profiler/LiveHeapProfileView.ts");
/* harmony import */ var _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProfileDataGrid.js */ "./src/panels/profiler/ProfileDataGrid.ts");
/* harmony import */ var _ProfileFlameChartDataProvider_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ProfileFlameChartDataProvider.js */ "./src/panels/profiler/ProfileFlameChartDataProvider.ts");
/* harmony import */ var _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ProfileHeader.js */ "./src/panels/profiler/ProfileHeader.ts");
/* harmony import */ var _ProfileLauncherView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ProfileLauncherView.js */ "./src/panels/profiler/ProfileLauncherView.ts");
/* harmony import */ var _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ProfileSidebarTreeElement.js */ "./src/panels/profiler/ProfileSidebarTreeElement.ts");
/* harmony import */ var _ProfilesPanel_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ProfilesPanel.js */ "./src/panels/profiler/ProfilesPanel.ts");
/* harmony import */ var _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ProfileTypeRegistry.js */ "./src/panels/profiler/ProfileTypeRegistry.ts");
/* harmony import */ var _ProfileView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ProfileView.js */ "./src/panels/profiler/ProfileView.ts");
/* harmony import */ var _TopDownProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TopDownProfileDataGrid.js */ "./src/panels/profiler/TopDownProfileDataGrid.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.























/***/ }),

/***/ "./src/legacy_test_runner/heap_profiler_test_runner/heap_profiler_test_runner.js":
/*!***************************************************************************************!*\
  !*** ./src/legacy_test_runner/heap_profiler_test_runner/heap_profiler_test_runner.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeapProfilerTestRunner: () => (/* binding */ HeapProfilerTestRunner)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _entrypoints_heap_snapshot_worker_heap_snapshot_worker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entrypoints/heap_snapshot_worker/heap_snapshot_worker.js */ "./src/entrypoints/heap_snapshot_worker/heap_snapshot_worker.ts");
/* harmony import */ var _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/profiler/profiler.js */ "./src/panels/profiler/profiler.ts");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./src/ui/legacy/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./src/legacy_test_runner/test_runner/test_runner.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */
const HeapProfilerTestRunner = {};

HeapProfilerTestRunner.createHeapSnapshotMockFactories = function() {
  HeapProfilerTestRunner.createJSHeapSnapshotMockObject = function() {
    const result = {
      rootNodeIndex: 0,
      nodeTypeOffset: 0,
      nodeNameOffset: 1,
      nodeEdgeCountOffset: 2,
      nodeFieldCount: 3,
      edgeFieldsCount: 3,
      edgeTypeOffset: 0,
      edgeNameOffset: 1,
      edgeToNodeOffset: 2,
      nodeTypes: ['hidden', 'object'],
      edgeTypes: ['element', 'property', 'shortcut'],
      edgeShortcutType: -1,
      edgeHiddenType: -1,
      edgeElementType: 0,
      realNodesLength: 18,
      nodes: new Uint32Array([0, 0, 2, 1, 1, 2, 1, 2, 2, 1, 3, 1, 1, 4, 0, 1, 5, 0]),
      containmentEdges: new Uint32Array([2, 6, 3, 1, 7, 6, 0, 1, 6, 1, 8, 9, 1, 9, 9, 1, 10, 12, 1, 11, 15]),
      strings: ['', 'A', 'B', 'C', 'D', 'E', 'a', 'b', 'ac', 'bc', 'bd', 'ce'],
      firstEdgeIndexes: new Uint32Array([0, 6, 12, 18, 21, 21, 21]),
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
          node_fields: ['type', 'name', 'id', 'self_size', 'retained_size', 'dominator', 'edge_count'],
          node_types: [['hidden', 'object'], '', '', '', '', '', ''],
          edge_fields: ['type', 'name_or_index', 'to_node'],
          edge_types: [['element', 'property', 'shortcut'], '', ''],
          location_fields: ['object_index', 'script_id', 'line', 'column'],
          trace_function_info_fields: ['function_id', 'name', 'script_name', 'script_id', 'line', 'column'],
          trace_node_fields: ['id', 'function_info_index', 'count', 'size', 'children']
        },
        node_count: 6,
        edge_count: 7
      },

      nodes: [
        0, 0, 1, 0, 20, 0, 2, 1, 1, 2, 2, 2, 0,  2, 1, 2, 3, 3, 8, 0,  2,
        1, 3, 4, 4, 10, 0, 1, 1, 4, 5, 5, 5, 14, 0, 1, 5, 6, 6, 6, 21, 0
      ],

      edges: [1, 6, 7, 1, 7, 14, 0, 1, 14, 1, 8, 21, 1, 9, 21, 1, 10, 28, 1, 11, 35],

      trace_function_infos: [0, 2, 1, 0, 0, 0],

      trace_tree: [1, 0, 0, 0, []],

      locations: [0, 1, 2, 3, 18, 2, 3, 4],

      strings: ['', 'A', 'B', 'C', 'D', 'E', 'a', 'b', 'ac', 'bc', 'bd', 'ce']
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
          node_fields: ['type', 'name', 'id', 'edge_count'],
          node_types: [['hidden', 'object', 'synthetic'], '', '', ''],
          edge_fields: ['type', 'name_or_index', 'to_node'],
          edge_types: [['element', 'hidden', 'internal'], '', ''],
          location_fields: ['object_index', 'script_id', 'line', 'column']
        },

        node_count: 13,
        edge_count: 13
      },

      nodes: [
        2, 0, 1, 4, 1, 11, 2, 2, 1, 11, 3, 3, 2,  5, 4, 0, 2,  6, 5, 1,  1,  1, 6, 0, 1,  2,
        7, 1, 1, 4, 8, 2,  1, 8, 9, 0,  1, 7, 10, 0, 1, 3, 11, 0, 1, 10, 12, 0, 1, 9, 13, 0
      ],

      edges: [
        0,  1, 4, 0,  2, 8, 0,  3, 12, 0,  4, 16, 0,  1, 20, 0,  2, 24, 0, 1,
        24, 0, 2, 28, 1, 3, 32, 0, 1,  36, 0, 1,  40, 2, 12, 44, 2, 1,  48
      ],

      locations: [0, 2, 1, 1, 6, 2, 2, 2],

      strings: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'M', 'N', 'Window', 'native']
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
    linkNode: function(node, type, nameOrIndex) {
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
        throw new Error(
            'Can\'t add edge with the same nameOrIndex. nameOrIndex: ' + nameOrIndex +
            ' oldNodeName: ' + this.edges[nameOrIndex].name + ' newNodeName: ' + node.name);
      }

      this.edges[nameOrIndex] = new HeapProfilerTestRunner.HeapEdge(node, type, nameOrIndex);
    },

    setBuilder: function(builder) {
      if (this.builder) {
        throw new Error('node reusing is prohibited');
      }

      this.builder = builder;
      this.ordinal = this.builder.registerNode(this);
    },

    serialize: function(rawSnapshot) {
      rawSnapshot.nodes.push(this.builder.lookupNodeType(this.type));
      rawSnapshot.nodes.push(this.builder.lookupOrAddString(this.name));
      rawSnapshot.nodes.push(this.id || this.ordinal * 2 + 1);
      rawSnapshot.nodes.push(this.selfSize);
      rawSnapshot.nodes.push(0);
      rawSnapshot.nodes.push(0);
      rawSnapshot.nodes.push(Object.keys(this.edges).length);

      for (const i in this.edges) {
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
    serialize: function(rawSnapshot) {
      if (!this.targetNode.builder) {
        throw new Error('Inconsistent state of node: ' + this.name + ' no builder assigned');
      }

      const builder = this.targetNode.builder;
      rawSnapshot.edges.push(builder.lookupEdgeType(this.type));
      rawSnapshot.edges.push(
          (typeof this.nameOrIndex === 'string' ? builder.lookupOrAddString(this.nameOrIndex) : this.nameOrIndex));
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

    for (const nodeType in HeapProfilerTestRunner.HeapNode.Type) {
      this.nodeTypesMap[nodeType] = this.nodeTypesArray.length;
      this.nodeTypesArray.push(nodeType);
    }

    this.edgeTypesMap = {};
    this.edgeTypesArray = [];

    for (const edgeType in HeapProfilerTestRunner.HeapEdge.Type) {
      this.edgeTypesMap[edgeType] = this.edgeTypesArray.length;
      this.edgeTypesArray.push(edgeType);
    }

    this.rootNode = new HeapProfilerTestRunner.HeapNode('root', 0, 'object');
    this.rootNode.setBuilder(this);
  };

  HeapProfilerTestRunner.HeapSnapshotBuilder.prototype = {
    generateSnapshot: function() {
      const rawSnapshot = {
        'snapshot': {
          'meta': {
            'node_fields': ['type', 'name', 'id', 'self_size', 'retained_size', 'dominator', 'edge_count'],
            'node_types': [this.nodeTypesArray, 'string', 'number', 'number', 'number', 'number', 'number'],
            'edge_fields': ['type', 'name_or_index', 'to_node'],
            'edge_types': [this.edgeTypesArray, 'string_or_number', 'node']
          }
        },

        'nodes': [],
        'edges': [],
        'locations': [],
        'strings': []
      };

      for (let i = 0; i < this.nodes.length; ++i) {
        this.nodes[i].serialize(rawSnapshot);
      }

      rawSnapshot.strings = this.strings.slice();
      const meta = rawSnapshot.snapshot.meta;
      rawSnapshot.snapshot.edge_count = rawSnapshot.edges.length / meta.edge_fields.length;
      rawSnapshot.snapshot.node_count = rawSnapshot.nodes.length / meta.node_fields.length;
      return rawSnapshot;
    },

    createJSHeapSnapshot: function() {
      const parsedSnapshot = HeapProfilerTestRunner.postprocessHeapSnapshotMock(this.generateSnapshot());
      return new _entrypoints_heap_snapshot_worker_heap_snapshot_worker_js__WEBPACK_IMPORTED_MODULE_1__.HeapSnapshot.JSHeapSnapshot(
          parsedSnapshot, new _entrypoints_heap_snapshot_worker_heap_snapshot_worker_js__WEBPACK_IMPORTED_MODULE_1__.HeapSnapshot.HeapSnapshotProgress());
    },

    registerNode: function(node) {
      this.nodes.push(node);
      return this.nodes.length - 1;
    },

    lookupNodeType: function(typeName) {
      if (typeName === undefined) {
        throw new Error('wrong node type: ' + typeName);
      }

      if (!(typeName in this.nodeTypesMap)) {
        throw new Error('wrong node type name: ' + typeName);
      }

      return this.nodeTypesMap[typeName];
    },

    lookupEdgeType: function(typeName) {
      if (!(typeName in this.edgeTypesMap)) {
        throw new Error('wrong edge type name: ' + typeName);
      }

      return this.edgeTypesMap[typeName];
    },

    lookupOrAddString: function(string) {
      if (string in this.string2id) {
        return this.string2id[string];
      }

      this.string2id[string] = this.strings.length;
      this.strings.push(string);
      return this.strings.length - 1;
    }
  };

  HeapProfilerTestRunner.createHeapSnapshot = function(instanceCount, firstId) {
    let seed = 881669;

    function pseudoRandom(limit) {
      seed = seed * 355109 + 153763 >> 2 & 65535;
      return seed % limit;
    }

    const builder = new HeapProfilerTestRunner.HeapSnapshotBuilder();
    const rootNode = builder.rootNode;
    const gcRootsNode =
        new HeapProfilerTestRunner.HeapNode('(GC roots)', 0, HeapProfilerTestRunner.HeapNode.Type.synthetic);
    rootNode.linkNode(gcRootsNode, HeapProfilerTestRunner.HeapEdge.Type.element);
    const windowNode = new HeapProfilerTestRunner.HeapNode('Window', 20);
    rootNode.linkNode(windowNode, HeapProfilerTestRunner.HeapEdge.Type.shortcut);
    gcRootsNode.linkNode(windowNode, HeapProfilerTestRunner.HeapEdge.Type.element);

    for (let i = 0; i < instanceCount; ++i) {
      const sizeOfB = pseudoRandom(20) + 1;
      const nodeB = new HeapProfilerTestRunner.HeapNode('B', sizeOfB, undefined, firstId++);
      windowNode.linkNode(nodeB, HeapProfilerTestRunner.HeapEdge.Type.element);
      const sizeOfA = pseudoRandom(50) + 1;
      const nodeA = new HeapProfilerTestRunner.HeapNode('A', sizeOfA, undefined, firstId++);
      nodeB.linkNode(nodeA, HeapProfilerTestRunner.HeapEdge.Type.property, 'a');
      nodeA.linkNode(nodeA, HeapProfilerTestRunner.HeapEdge.Type.property, 'a');
    }

    return builder.generateSnapshot();
  };
};

HeapProfilerTestRunner.createHeapSnapshotMockFactories();

HeapProfilerTestRunner.startProfilerTest = function(callback) {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('Profiler was enabled.');
  HeapProfilerTestRunner.panelReset =
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.override(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfilerPanel.HeapProfilerPanel.instance(), 'reset', function() {}, true);
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addSniffer(
      _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfilerPanel.HeapProfilerPanel.instance(), 'addProfileHeader',
      HeapProfilerTestRunner.profileHeaderAdded, true);
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addSniffer(
      _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.ProfileView.ProfileView.prototype, 'refresh', HeapProfilerTestRunner.profileViewRefresh, true);
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addSniffer(
      _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotView.HeapSnapshotView.prototype, 'show', HeapProfilerTestRunner.snapshotViewShown, true);

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
  const testSuiteTests = testSuite.slice();
  let completeTestStack;

  function runner() {
    if (!testSuiteTests.length) {
      if (completeTestStack) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('FAIL: test already completed at ' + completeTestStack);
      }

      HeapProfilerTestRunner.completeProfilerTest();
      completeTestStack = new Error().stack;
      return;
    }

    const nextTest = testSuiteTests.shift();
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('');
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult(
        'Running: ' +
        /function\s([^(]*)/.exec(nextTest)[1]);
    HeapProfilerTestRunner.panelReset.call(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfilerPanel.HeapProfilerPanel.instance());
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(nextTest)(runner, runner);
  }

  HeapProfilerTestRunner.startProfilerTest(runner);
};

HeapProfilerTestRunner.assertColumnContentsEqual = function(reference, actual) {
  const length = Math.min(reference.length, actual.length);

  for (let i = 0; i < length; ++i) {
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
    return (a < b ? -1 : (a > b ? 1 : 0));
  }

  function parseSize(size) {
    return parseInt(size.replace(/[\xa0,]/g, ''), 10);
  }

  const extractor = {
    text: function(data) {
      data;
    },

    number: function(data) {
      return parseInt(data, 10);
    },

    size: parseSize,

    name: function(data) {
      return data;
    },

    id: function(data) {
      return parseInt(data, 10);
    }
  }[sortType];

  if (!extractor) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('Invalid sort type: ' + sortType);
    return;
  }

  let acceptableComparisonResult;

  if (sortOrder === _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Ascending) {
    acceptableComparisonResult = -1;
  } else if (sortOrder === _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Descending) {
    acceptableComparisonResult = 1;
  } else {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('Invalid sort order: ' + sortOrder);
    return;
  }

  for (let i = 0; i < contents.length - 1; ++i) {
    const a = extractor(contents[i]);
    const b = extractor(contents[i + 1]);
    const result = simpleComparator(a, b);

    if (result !== 0 && result !== acceptableComparisonResult) {
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult(
          'Elements ' + i + ' and ' + (i + 1) + ' are out of order: ' + a + ' ' + b + ' (' + sortOrder + ')');
    }
  }
};

HeapProfilerTestRunner.clickColumn = function(column, callback) {
  callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback);
  const cell = this.currentGrid().dataTableHeaders[column.id];

  const event = {target: cell};

  function sortingComplete() {
    HeapProfilerTestRunner.currentGrid().removeEventListener(
        _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotDataGrids.HeapSnapshotSortableDataGridEvents.SortingComplete, sortingComplete, this);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.assertEquals(column.id, this.currentGrid().sortColumnId(), 'unexpected sorting');
    column.sort = this.currentGrid().sortOrder();

    function callCallback() {
      callback(column);
    }

    setTimeout(callCallback, 0);
  }

  HeapProfilerTestRunner.currentGrid().addEventListener(
      _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotDataGrids.HeapSnapshotSortableDataGridEvents.SortingComplete, sortingComplete, this);
  this.currentGrid().clickInHeaderCell(event);
};

HeapProfilerTestRunner.clickRowAndGetRetainers = function(row, callback) {
  callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback);

  const event = {target: row.element()};

  this.currentGrid().mouseDownInDataTable(event);
  const rootNode = HeapProfilerTestRunner.currentProfileView().retainmentDataGrid.rootNode();
  rootNode.once(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotGridNodes.HeapSnapshotGridNode.Events.PopulateComplete)
      .then(() => callback(rootNode));
};

HeapProfilerTestRunner.clickShowMoreButton = function(buttonName, row, callback) {
  callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback);
  const parent = row.parent;
  parent.once(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotGridNodes.HeapSnapshotGridNode.Events.PopulateComplete)
      .then(() => setTimeout(() => callback(parent), 0));
  row[buttonName].click();
};

HeapProfilerTestRunner.columnContents = function(column, row) {
  this.currentGrid().updateVisibleNodes();
  const columnOrdinal = HeapProfilerTestRunner.viewColumns().indexOf(column);
  const result = [];
  const parent = row || this.currentGrid().rootNode();

  for (let node = parent.children[0]; node; node = node.traverseNextNode(true, parent, true)) {
    if (!node.selectable) {
      continue;
    }

    let content = node.element().children[columnOrdinal];

    if (content.firstElementChild) {
      content = content.firstElementChild;
    }

    result.push(content.textContent);
  }

  return result;
};

HeapProfilerTestRunner.countDataRows = function(row, filter) {
  let result = 0;

  filter = filter || function(node) {
    return node.selectable;
  };

  for (let node = row.children[0]; node; node = node.traverseNextNode(true, row, true)) {
    if (filter(node)) {
      ++result;
    }
  }

  return result;
};

HeapProfilerTestRunner.expandRow = function(row, callback) {
  callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback);
  row.once(_panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotGridNodes.HeapSnapshotGridNode.Events.PopulateComplete)
      .then(() => setTimeout(() => callback(row), 0));

  (function expand() {
    if (row.hasChildren()) {
      row.expand();
    } else {
      setTimeout(expand, 0);
    }
  })();
};

HeapProfilerTestRunner.expandRowPromise = function(row) {
  return new Promise(resolve => HeapProfilerTestRunner.expandRow(row, resolve));
};

HeapProfilerTestRunner.findAndExpandGCRoots = function(callback) {
  HeapProfilerTestRunner.findAndExpandRow('(GC roots)', callback);
};

HeapProfilerTestRunner.findAndExpandWindow = function(callback) {
  HeapProfilerTestRunner.findAndExpandRow('Window', callback);
};

HeapProfilerTestRunner.findAndExpandRow = async function(name, callback) {
  const row = HeapProfilerTestRunner.findRow(name);
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.assertEquals(true, Boolean(row), `"${name}" row`);
  await HeapProfilerTestRunner.expandRowPromise(row);
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback)(row);
  return row;
};

HeapProfilerTestRunner.findButtonsNode = function(row, startNode) {
  for (let node = startNode || row.children[0]; node; node = node.traverseNextNode(true, row, true)) {
    if (!node.selectable && node.showNext) {
      return node;
    }
  }
  return null;
};

HeapProfilerTestRunner.findRow = function(name, parent) {
  return HeapProfilerTestRunner.findMatchingRow(node => node.name === name, parent);
};

HeapProfilerTestRunner.findMatchingRow = function(matcher, parent) {
  parent = parent || this.currentGrid().rootNode();

  for (let node = parent.children[0]; node; node = node.traverseNextNode(true, parent, true)) {
    if (matcher(node)) {
      return node;
    }
  }

  return null;
};

HeapProfilerTestRunner.switchToView = function(title, callback) {
  return new Promise(resolve => {
    callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback);
    const view = _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfilerPanel.HeapProfilerPanel.instance().visibleView;
    view.changePerspectiveAndWait(title).then(callback).then(resolve);
    HeapProfilerTestRunner.currentGrid().scrollContainer.style.height = '10000px';
  });
};

HeapProfilerTestRunner.takeAndOpenSnapshot = async function(generator, callback) {
  callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback);
  const snapshot = generator();
  const profileType = _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.ProfileTypeRegistry.instance.heapSnapshotProfileType;

  async function pushGeneratedSnapshot(reportProgress) {
    if (reportProgress) {
      profileType.reportHeapSnapshotProgress({data: {done: 50, total: 100, finished: false}});
      profileType.reportHeapSnapshotProgress({data: {done: 100, total: 100, finished: true}});
    }
    snapshot.snapshot.typeId = 'HEAP';
    profileType.addHeapSnapshotChunk({data: JSON.stringify(snapshot)});
  }

  HeapProfilerTestRunner.takeAndOpenSnapshotCallback = callback;
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.override(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.HeapProfilerAgent, 'invoke_takeHeapSnapshot', pushGeneratedSnapshot);
  if (!_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.HeapProfilerModel.HeapProfilerModel)) {
    await new Promise(
        resolve =>
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.HeapProfilerModel.HeapProfilerModel, resolve));
  }
  profileType.takeHeapSnapshot();
};

/**
 * @return {!Promise<!Profiler.HeapSnapshotView.HeapProfileHeader>}
 */
HeapProfilerTestRunner.takeSnapshotPromise = function() {
  return new Promise(resolve => {
    const heapProfileType = _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.ProfileTypeRegistry.instance.heapSnapshotProfileType;
    heapProfileType.addEventListener(
        _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotView.HeapSnapshotProfileType.SnapshotReceived, finishHeapSnapshot);
    heapProfileType.takeHeapSnapshot();

    function finishHeapSnapshot() {
      const profiles = heapProfileType.getProfiles();
      if (!profiles.length) {
        throw 'FAILED: no profiles found.';
      }
      if (profiles.length > 1) {
        throw `FAILED: wrong number of recorded profiles was found. profiles.length = ${profiles.length}`;
      }
      const profile = profiles[0];
      _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfilerPanel.HeapProfilerPanel.instance().showProfile(profile);

      const dataGrid = HeapProfilerTestRunner.currentProfileView().dataGrid;
      dataGrid.addEventListener(
          _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotDataGrids.HeapSnapshotSortableDataGridEvents.SortingComplete, sortingComplete, null);

      function sortingComplete() {
        dataGrid.removeEventListener(
            _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotDataGrids.HeapSnapshotSortableDataGridEvents.SortingComplete, sortingComplete, null);
        resolve(profile);
      }
    }
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
    const callback = HeapProfilerTestRunner.takeAndOpenSnapshotCallback;
    HeapProfilerTestRunner.takeAndOpenSnapshotCallback = null;
    const dataGrid = this.dataGrid;

    function sortingComplete() {
      dataGrid.removeEventListener(
          _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotDataGrids.HeapSnapshotSortableDataGridEvents.SortingComplete, sortingComplete, null);
      callback();
    }

    dataGrid.addEventListener(
        _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotDataGrids.HeapSnapshotSortableDataGridEvents.SortingComplete, sortingComplete, null);
  }
};

HeapProfilerTestRunner.showProfileWhenAdded = function(title) {
  HeapProfilerTestRunner.showProfileWhenAdded = title;
  return new Promise(resolve => HeapProfilerTestRunner.waitUntilProfileViewIsShown(title, resolve));
};

HeapProfilerTestRunner.profileHeaderAdded = function(profile) {
  if (HeapProfilerTestRunner.showProfileWhenAdded === profile.title) {
    _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfilerPanel.HeapProfilerPanel.instance().showProfile(profile);
  }
};

HeapProfilerTestRunner.waitUntilProfileViewIsShown = function(title, callback) {
  callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.safeWrap(callback);
  const profilesPanel = _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfilerPanel.HeapProfilerPanel.instance();

  if (profilesPanel.visibleView && profilesPanel.visibleView.profile &&
      profilesPanel.visibleView.profileHeader.title === title) {
    callback(profilesPanel.visibleView);
  } else {
    HeapProfilerTestRunner.waitUntilProfileViewIsShownCallback = {title: title, callback: callback};
  }
};

HeapProfilerTestRunner.profileViewRefresh = function() {
  if (HeapProfilerTestRunner.waitUntilProfileViewIsShownCallback &&
      HeapProfilerTestRunner.waitUntilProfileViewIsShownCallback.title === this.profileHeader.title) {
    const callback = HeapProfilerTestRunner.waitUntilProfileViewIsShownCallback;
    delete HeapProfilerTestRunner.waitUntilProfileViewIsShownCallback;
    callback.callback(this);
  }
};

HeapProfilerTestRunner.startSamplingHeapProfiler = async function() {
  if (!_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.HeapProfilerModel.HeapProfilerModel)) {
    await new Promise(
        resolve =>
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.HeapProfilerModel.HeapProfilerModel, resolve));
  }
  _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfileView.SamplingHeapProfileType.instance.startRecordingProfile();
};

HeapProfilerTestRunner.stopSamplingHeapProfiler = function() {
  _panels_profiler_profiler_js__WEBPACK_IMPORTED_MODULE_2__.HeapProfileView.SamplingHeapProfileType.instance.stopRecordingProfile();
};


/***/ }),

/***/ "./src/legacy_test_runner/test_runner/test_runner.js":
/*!***********************************************************!*\
  !*** ./src/legacy_test_runner/test_runner/test_runner.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestRunner: () => (/* binding */ globalTestRunner),
/* harmony export */   _TestObserver: () => (/* binding */ _TestObserver),
/* harmony export */   _executeTestScript: () => (/* binding */ _executeTestScript)
/* harmony export */ });
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestRunner.js */ "./src/legacy_test_runner/test_runner/TestRunner.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// @ts-nocheck This file is not checked by TypeScript as it has a lot of legacy code.






/**
 * @param {!SDK.Target.Target} target
 */
function _setupTestHelpers(target) {
  self.TestRunner.BrowserAgent = target.browserAgent();
  self.TestRunner.CSSAgent = target.cssAgent();
  self.TestRunner.DeviceOrientationAgent = target.deviceOrientationAgent();
  self.TestRunner.DOMAgent = target.domAgent();
  self.TestRunner.DOMDebuggerAgent = target.domdebuggerAgent();
  self.TestRunner.DebuggerAgent = target.debuggerAgent();
  self.TestRunner.EmulationAgent = target.emulationAgent();
  self.TestRunner.HeapProfilerAgent = target.heapProfilerAgent();
  self.TestRunner.InputAgent = target.inputAgent();
  self.TestRunner.InspectorAgent = target.inspectorAgent();
  self.TestRunner.NetworkAgent = target.networkAgent();
  self.TestRunner.OverlayAgent = target.overlayAgent();
  self.TestRunner.PageAgent = target.pageAgent();
  self.TestRunner.ProfilerAgent = target.profilerAgent();
  self.TestRunner.RuntimeAgent = target.runtimeAgent();
  self.TestRunner.TargetAgent = target.targetAgent();

  self.TestRunner.networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.NetworkManager);
  self.TestRunner.securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.SecurityOriginManager);
  self.TestRunner.storageKeyManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageKeyManager.StorageKeyManager);
  self.TestRunner.resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
  self.TestRunner.debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
  self.TestRunner.runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
  self.TestRunner.domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
  self.TestRunner.domDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerModel);
  self.TestRunner.cssModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
  self.TestRunner.cpuProfilerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CPUProfilerModel.CPUProfilerModel);
  self.TestRunner.overlayModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.OverlayModel);
  self.TestRunner.serviceWorkerManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorkerManager.ServiceWorkerManager);
  self.TestRunner.tracingManager = target.model(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.TracingManager.TracingManager);
  self.TestRunner.mainTarget = target;
}

async function _executeTestScript() {
  const testScriptURL = /** @type {string} */ (_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.Runtime.queryParam('test'));
  if (_TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.isDebugTest()) {
    /* eslint-disable no-console */
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.setInnerResult(console.log);
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.setInnerCompleteTest(() => console.log('Test completed'));
    /* eslint-enable no-console */

    // Auto-start unit tests
    self.test = async function() {
      await __webpack_require__("./src/legacy_test_runner/test_runner lazy recursive")(testScriptURL);
    };
    return;
  }

  try {
    await __webpack_require__("./src/legacy_test_runner/test_runner lazy recursive")(testScriptURL);
  } catch (err) {
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult('TEST ENDED EARLY DUE TO UNCAUGHT ERROR:');
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult(err && err.stack || err);
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult('=== DO NOT COMMIT THIS INTO -expected.txt ===');
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.completeTest();
  }
}

/** @type {boolean} */
let _startedTest = false;

/**
 * @implements {SDK.TargetManager.Observer}
 */
class _TestObserver {
  /**
   * @param {!SDK.Target.Target} target
   * @override
   */
  targetAdded(target) {
    if (target.id() === 'main' && target.type() === 'frame' ||
        target.parentTarget()?.type() === 'tab' && target.type() === 'frame' && !target.targetInfo()?.subtype?.length) {
      _setupTestHelpers(target);
      if (_startedTest) {
        return;
      }
      _startedTest = true;
      _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.loadHTML(`
        <head>
          <base href="${_TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.url()}">
        </head>
        <body>
        </body>
      `).then(() => _executeTestScript());
    }
  }

  /**
   * @param {!SDK.Target.Target} target
   * @override
   */
  targetRemoved(target) {
  }
}

_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().observeTargets(new _TestObserver());

const globalTestRunner = self.TestRunner;



/***/ }),

/***/ "./src/legacy_test_runner/test_runner lazy recursive":
/*!*******************************************************************!*\
  !*** ./src/legacy_test_runner/test_runner/ lazy namespace object ***!
  \*******************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/legacy_test_runner/test_runner lazy recursive";
module.exports = webpackEmptyAsyncContext;

/***/ })

}]);