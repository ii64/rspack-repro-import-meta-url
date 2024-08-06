"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_worker_app_WorkerMain_js"],{

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

/***/ })

}]);