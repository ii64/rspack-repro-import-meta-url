"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_heap_snapshot_model_heap_snapshot_model_ts-src_panels_profiler_HeapProfilerPanel_ts"],{

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


/***/ })

}]);