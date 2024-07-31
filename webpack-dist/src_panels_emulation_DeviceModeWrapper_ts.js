"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_emulation_DeviceModeWrapper_ts"],{

/***/ "./src/panels/emulation/DeviceModeWrapper.ts":
/*!***************************************************!*\
  !*** ./src/panels/emulation/DeviceModeWrapper.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   DeviceModeWrapper: () => (/* binding */ DeviceModeWrapper)
/* harmony export */ });
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/emulation/emulation.js */ "./src/models/emulation/emulation.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeviceModeView.js */ "./src/panels/emulation/DeviceModeView.ts");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





let deviceModeWrapperInstance;
class DeviceModeWrapper extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox {
    constructor(inspectedPagePlaceholder) {
        super();
        Object.defineProperty(this, "inspectedPagePlaceholder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deviceModeView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toggleDeviceModeAction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showDeviceModeSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.inspectedPagePlaceholder = inspectedPagePlaceholder;
        this.deviceModeView = null;
        this.toggleDeviceModeAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ActionRegistry.ActionRegistry.instance().getAction('emulation.toggle-device-mode');
        const model = _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_2__.DeviceModeModel.DeviceModeModel.instance();
        this.showDeviceModeSetting = model.enabledSetting();
        this.showDeviceModeSetting.setRequiresUserAction(Boolean(_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.Runtime.queryParam('hasOtherClients')));
        this.showDeviceModeSetting.addChangeListener(this.update.bind(this, false));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.OverlayModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.Events.ScreenshotRequested, this.screenshotRequestedFromOverlay, this);
        this.update(true);
    }
    static instance(opts = { forceNew: null, inspectedPagePlaceholder: null }) {
        const { forceNew, inspectedPagePlaceholder } = opts;
        if (!deviceModeWrapperInstance || forceNew) {
            if (!inspectedPagePlaceholder) {
                throw new Error(`Unable to create DeviceModeWrapper: inspectedPagePlaceholder must be provided: ${new Error().stack}`);
            }
            deviceModeWrapperInstance = new DeviceModeWrapper(inspectedPagePlaceholder);
        }
        return deviceModeWrapperInstance;
    }
    toggleDeviceMode() {
        this.showDeviceModeSetting.set(!this.showDeviceModeSetting.get());
    }
    isDeviceModeOn() {
        return this.showDeviceModeSetting.get();
    }
    captureScreenshot(fullSize, clip) {
        if (!this.deviceModeView) {
            this.deviceModeView = new _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeView();
        }
        this.deviceModeView.setNonEmulatedAvailableSize(this.inspectedPagePlaceholder.element);
        if (fullSize) {
            void this.deviceModeView.captureFullSizeScreenshot();
        }
        else if (clip) {
            void this.deviceModeView.captureAreaScreenshot(clip);
        }
        else {
            void this.deviceModeView.captureScreenshot();
        }
        return true;
    }
    screenshotRequestedFromOverlay(event) {
        const clip = event.data;
        this.captureScreenshot(false, clip);
    }
    update(force) {
        this.toggleDeviceModeAction.setToggled(this.showDeviceModeSetting.get());
        if (!force) {
            const showing = this.deviceModeView && this.deviceModeView.isShowing();
            if (this.showDeviceModeSetting.get() === showing) {
                return;
            }
        }
        if (this.showDeviceModeSetting.get()) {
            if (!this.deviceModeView) {
                this.deviceModeView = new _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeView();
            }
            this.deviceModeView.show(this.element);
            this.inspectedPagePlaceholder.clearMinimumSize();
            this.inspectedPagePlaceholder.show(this.deviceModeView.element);
        }
        else {
            if (this.deviceModeView) {
                this.deviceModeView.exitHingeMode();
                this.deviceModeView.detach();
            }
            this.inspectedPagePlaceholder.restoreMinimumSize();
            this.inspectedPagePlaceholder.show(this.element);
        }
    }
}
class ActionDelegate {
    handleAction(context, actionId) {
        switch (actionId) {
            case 'emulation.capture-screenshot':
                return DeviceModeWrapper.instance().captureScreenshot();
            case 'emulation.capture-node-screenshot': {
                const node = context.flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode);
                if (!node) {
                    return true;
                }
                async function captureClip() {
                    if (!node) {
                        return;
                    }
                    const object = await node.resolveToObject();
                    if (!object) {
                        return;
                    }
                    const result = await object.callFunction(function () {
                        const rect = this.getBoundingClientRect();
                        const docRect = this.ownerDocument.documentElement.getBoundingClientRect();
                        return JSON.stringify({
                            x: rect.left - docRect.left,
                            y: rect.top - docRect.top,
                            width: rect.width,
                            height: rect.height,
                            scale: 1,
                        });
                    });
                    if (!result.object) {
                        throw new Error('Clipping error: could not get object data.');
                    }
                    const clip = (JSON.parse(result.object.value));
                    const response = await node.domModel().target().pageAgent().invoke_getLayoutMetrics();
                    const error = response.getError();
                    const zoom = !error && response.visualViewport.zoom || 1;
                    clip.x *= zoom;
                    clip.y *= zoom;
                    clip.width *= zoom;
                    clip.height *= zoom;
                    DeviceModeWrapper.instance().captureScreenshot(false, clip);
                }
                void captureClip();
                return true;
            }
            case 'emulation.capture-full-height-screenshot':
                return DeviceModeWrapper.instance().captureScreenshot(true);
            case 'emulation.toggle-device-mode':
                DeviceModeWrapper.instance().toggleDeviceMode();
                return true;
        }
        return false;
    }
}


/***/ })

}]);