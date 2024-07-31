"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_worker_app_worker_app_ts"],{

/***/ "./src/entrypoints/worker_app/WorkerMain.ts":
/*!**************************************************!*\
  !*** ./src/entrypoints/worker_app/WorkerMain.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkerMainImpl: () => (/* binding */ WorkerMainImpl)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _panels_mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/mobile_throttling/mobile_throttling.js */ "./src/panels/mobile_throttling/mobile_throttling.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Text that refers to the main target.
     */
    main: 'Main',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('entrypoints/worker_app/WorkerMain.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
let workerMainImplInstance;
class WorkerMainImpl {
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!workerMainImplInstance || forceNew) {
            workerMainImplInstance = new WorkerMainImpl();
        }
        return workerMainImplInstance;
    }
    async run() {
        void _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Connections.initMainConnection(async () => {
            if (await _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().maybeAttachInitialTarget()) {
                return;
            }
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().createTarget('main', i18nString(UIStrings.main), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.ServiceWorker, null);
        }, _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.TargetDetachedDialog.TargetDetachedDialog.webSocketConnectionLost);
        new _panels_mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_3__.NetworkPanelIndicator.NetworkPanelIndicator();
    }
}
_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Runnable.registerEarlyInitializationRunnable(WorkerMainImpl.instance);
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager.install(async ({ target, waitingForDebugger }) => {
    // Only pause the new worker if debugging SW - we are going through the pause on start checkbox.
    if (target.parentTarget() || target.type() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.ServiceWorker || !waitingForDebugger) {
        return;
    }
    const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
    if (!debuggerModel) {
        return;
    }
    if (!debuggerModel.isReadyToPause()) {
        await debuggerModel.once(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.Events.DebuggerIsReadyToPause);
    }
    debuggerModel.pause();
});


/***/ }),

/***/ "./src/entrypoints/worker_app/worker_app.ts":
/*!**************************************************!*\
  !*** ./src/entrypoints/worker_app/worker_app.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shell_shell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/shell.js */ "./src/entrypoints/shell/shell.ts");
/* harmony import */ var _panels_browser_debugger_browser_debugger_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/browser_debugger/browser_debugger-meta.js */ "./src/panels/browser_debugger/browser_debugger-meta.ts");
/* harmony import */ var _panels_developer_resources_developer_resources_meta_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/developer_resources/developer_resources-meta.js */ "./src/panels/developer_resources/developer_resources-meta.ts");
/* harmony import */ var _panels_issues_issues_meta_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/issues/issues-meta.js */ "./src/panels/issues/issues-meta.ts");
/* harmony import */ var _panels_layer_viewer_layer_viewer_meta_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../panels/layer_viewer/layer_viewer-meta.js */ "./src/panels/layer_viewer/layer_viewer-meta.ts");
/* harmony import */ var _panels_mobile_throttling_mobile_throttling_meta_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/mobile_throttling/mobile_throttling-meta.js */ "./src/panels/mobile_throttling/mobile_throttling-meta.ts");
/* harmony import */ var _panels_network_network_meta_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../panels/network/network-meta.js */ "./src/panels/network/network-meta.ts");
/* harmony import */ var _panels_application_application_meta_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../panels/application/application-meta.js */ "./src/panels/application/application-meta.ts");
/* harmony import */ var _panels_timeline_timeline_meta_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../panels/timeline/timeline-meta.js */ "./src/panels/timeline/timeline-meta.ts");
/* harmony import */ var _WorkerMain_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WorkerMain.js */ "./src/entrypoints/worker_app/WorkerMain.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _main_main_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../main/main.js */ "./src/entrypoints/main/main.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.












// @ts-ignore Exposed for legacy layout tests
self.runtime = _core_root_root_js__WEBPACK_IMPORTED_MODULE_10__.Runtime.Runtime.instance({ forceNew: true });
new _main_main_js__WEBPACK_IMPORTED_MODULE_11__.MainImpl.MainImpl();


/***/ })

}]);