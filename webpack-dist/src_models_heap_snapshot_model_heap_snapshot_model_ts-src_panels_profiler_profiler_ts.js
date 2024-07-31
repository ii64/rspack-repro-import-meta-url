"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_heap_snapshot_model_heap_snapshot_model_ts-src_panels_profiler_profiler_ts"],{

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




/***/ }),

/***/ "./src/panels/profiler/ChildrenProvider.ts":
/*!*************************************************!*\
  !*** ./src/panels/profiler/ChildrenProvider.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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























/***/ })

}]);