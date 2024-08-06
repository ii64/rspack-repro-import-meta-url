"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_InspectElementModeController_js"],{

/***/ "./panels/elements/InspectElementModeController.js":
/*!*********************************************************!*\
  !*** ./panels/elements/InspectElementModeController.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectElementModeController: () => (/* binding */ InspectElementModeController),
/* harmony export */   ToggleSearchActionDelegate: () => (/* binding */ ToggleSearchActionDelegate)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementsPanel.js */ "./panels/elements/ElementsPanel.js");
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






let inspectElementModeController;
class InspectElementModeController {
    toggleSearchAction;
    mode;
    showDetailedInspectTooltipSetting;
    constructor() {
        this.toggleSearchAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ActionRegistry.ActionRegistry.instance().getAction('elements.toggle-element-search');
        this.mode = "none" /* Protocol.Overlay.InspectMode.None */;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addEventListener("SuspendStateChanged" /* SDK.TargetManager.Events.SuspendStateChanged */, this.suspendStateChanged, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel, "InspectModeExited" /* SDK.OverlayModel.Events.ExitedInspectMode */, () => this.setMode("none" /* Protocol.Overlay.InspectMode.None */), undefined, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel.setInspectNodeHandler(this.inspectNode.bind(this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel, this, { scoped: true });
        this.showDetailedInspectTooltipSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-detailed-inspect-tooltip');
        this.showDetailedInspectTooltipSetting.addChangeListener(this.showDetailedInspectTooltipChanged.bind(this));
        document.addEventListener('keydown', event => {
            if (event.keyCode !== _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardShortcut.Keys.Esc.code) {
                return;
            }
            if (!this.isInInspectElementMode()) {
                return;
            }
            this.setMode("none" /* Protocol.Overlay.InspectMode.None */);
            event.consume(true);
            void _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.logKeyDown(null, event, 'cancel-inspect-mode');
        }, true);
    }
    static instance({ forceNew } = { forceNew: false }) {
        if (!inspectElementModeController || forceNew) {
            inspectElementModeController = new InspectElementModeController();
        }
        return inspectElementModeController;
    }
    modelAdded(overlayModel) {
        // When DevTools are opening in the inspect element mode, the first target comes in
        // much later than the InspectorFrontendAPI.enterInspectElementMode event.
        if (this.mode === "none" /* Protocol.Overlay.InspectMode.None */) {
            return;
        }
        void overlayModel.setInspectMode(this.mode, this.showDetailedInspectTooltipSetting.get());
    }
    modelRemoved(_overlayModel) {
    }
    isInInspectElementMode() {
        return this.mode !== "none" /* Protocol.Overlay.InspectMode.None */;
    }
    toggleInspectMode() {
        let mode;
        if (this.isInInspectElementMode()) {
            mode = "none" /* Protocol.Overlay.InspectMode.None */;
        }
        else {
            mode = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-ua-shadow-dom').get() ?
                "searchForUAShadowDOM" /* Protocol.Overlay.InspectMode.SearchForUAShadowDOM */ :
                "searchForNode" /* Protocol.Overlay.InspectMode.SearchForNode */;
        }
        this.setMode(mode);
    }
    captureScreenshotMode() {
        this.setMode("captureAreaScreenshot" /* Protocol.Overlay.InspectMode.CaptureAreaScreenshot */);
    }
    setMode(mode) {
        if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().allTargetsSuspended()) {
            return;
        }
        this.mode = mode;
        for (const overlayModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel, { scoped: true })) {
            void overlayModel.setInspectMode(mode, this.showDetailedInspectTooltipSetting.get());
        }
        this.toggleSearchAction.setToggled(this.isInInspectElementMode());
    }
    suspendStateChanged() {
        if (!_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().allTargetsSuspended()) {
            return;
        }
        this.mode = "none" /* Protocol.Overlay.InspectMode.None */;
        this.toggleSearchAction.setToggled(false);
    }
    inspectNode(node) {
        void _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_5__.ElementsPanel.instance().revealAndSelectNode(node, true, true);
    }
    showDetailedInspectTooltipChanged() {
        this.setMode(this.mode);
    }
}
class ToggleSearchActionDelegate {
    handleAction(_context, actionId) {
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.queryParam('isSharedWorker')) {
            return false;
        }
        inspectElementModeController = InspectElementModeController.instance();
        if (!inspectElementModeController) {
            return false;
        }
        if (actionId === 'elements.toggle-element-search') {
            inspectElementModeController.toggleInspectMode();
        }
        else if (actionId === 'elements.capture-area-screenshot') {
            inspectElementModeController.captureScreenshotMode();
        }
        return true;
    }
}
//# sourceMappingURL=InspectElementModeController.js.map

/***/ })

}]);