"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_worker_app_worker_app_js"],{

/***/ "./entrypoints/worker_app/WorkerMain.js":
/*!**********************************************!*\
  !*** ./entrypoints/worker_app/WorkerMain.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkerMainImpl: () => (/* binding */ WorkerMainImpl)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _panels_mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/mobile_throttling/mobile_throttling.js */ "./panels/mobile_throttling/mobile_throttling.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
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
//# sourceMappingURL=WorkerMain.js.map

/***/ }),

/***/ "./entrypoints/worker_app/worker_app.js":
/*!**********************************************!*\
  !*** ./entrypoints/worker_app/worker_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shell_shell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/shell.js */ "./entrypoints/shell/shell.js");
/* harmony import */ var _panels_browser_debugger_browser_debugger_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/browser_debugger/browser_debugger-meta.js */ "./panels/browser_debugger/browser_debugger-meta.js");
/* harmony import */ var _panels_developer_resources_developer_resources_meta_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/developer_resources/developer_resources-meta.js */ "./panels/developer_resources/developer_resources-meta.js");
/* harmony import */ var _panels_issues_issues_meta_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/issues/issues-meta.js */ "./panels/issues/issues-meta.js");
/* harmony import */ var _panels_layer_viewer_layer_viewer_meta_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../panels/layer_viewer/layer_viewer-meta.js */ "./panels/layer_viewer/layer_viewer-meta.js");
/* harmony import */ var _panels_mobile_throttling_mobile_throttling_meta_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/mobile_throttling/mobile_throttling-meta.js */ "./panels/mobile_throttling/mobile_throttling-meta.js");
/* harmony import */ var _panels_network_network_meta_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../panels/network/network-meta.js */ "./panels/network/network-meta.js");
/* harmony import */ var _panels_application_application_meta_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../panels/application/application-meta.js */ "./panels/application/application-meta.js");
/* harmony import */ var _panels_timeline_timeline_meta_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../panels/timeline/timeline-meta.js */ "./panels/timeline/timeline-meta.js");
/* harmony import */ var _WorkerMain_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WorkerMain.js */ "./entrypoints/worker_app/WorkerMain.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _main_main_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../main/main.js */ "./entrypoints/main/main.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.












// @ts-ignore Exposed for legacy layout tests
self.runtime = _core_root_root_js__WEBPACK_IMPORTED_MODULE_10__.Runtime.Runtime.instance({ forceNew: true });
new _main_main_js__WEBPACK_IMPORTED_MODULE_11__.MainImpl.MainImpl();
//# sourceMappingURL=worker_app.js.map

/***/ })

}]);