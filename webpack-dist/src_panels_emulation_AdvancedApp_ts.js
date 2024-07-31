"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_emulation_AdvancedApp_ts"],{

/***/ "./src/panels/emulation/AdvancedApp.ts":
/*!*********************************************!*\
  !*** ./src/panels/emulation/AdvancedApp.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedApp: () => (/* binding */ AdvancedApp),
/* harmony export */   AdvancedAppProvider: () => (/* binding */ AdvancedAppProvider)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./src/ui/legacy/theme_support/theme_support.ts");
/* harmony import */ var _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeviceModeWrapper.js */ "./src/panels/emulation/DeviceModeWrapper.ts");
/* harmony import */ var _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InspectedPagePlaceholder.js */ "./src/panels/emulation/InspectedPagePlaceholder.ts");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





let appInstance;
class AdvancedApp {
    constructor() {
        Object.defineProperty(this, "rootSplitWidget", {
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
        Object.defineProperty(this, "inspectedPagePlaceholder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toolboxWindow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toolboxRootView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "changingDockSide", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toolboxDocument", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockController.instance().addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.Events.BeforeDockSideChanged, this.openToolboxWindow, this);
    }
    /**
     * Note: it's used by toolbox.ts without real type checks.
     */
    static instance() {
        if (!appInstance) {
            appInstance = new AdvancedApp();
        }
        return appInstance;
    }
    presentUI(document) {
        const rootView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.RootView.RootView();
        this.rootSplitWidget =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.SplitWidget.SplitWidget(false, true, 'inspector-view.split-view-state', 555, 300, true);
        this.rootSplitWidget.show(rootView.element);
        this.rootSplitWidget.setSidebarWidget(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.InspectorView.InspectorView.instance());
        this.rootSplitWidget.setDefaultFocusedChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.InspectorView.InspectorView.instance());
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.InspectorView.InspectorView.instance().setOwnerSplit(this.rootSplitWidget);
        this.inspectedPagePlaceholder = _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_4__.InspectedPagePlaceholder.instance();
        this.inspectedPagePlaceholder.addEventListener(_InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_4__.Events.Update, this.onSetInspectedPageBounds.bind(this), this);
        this.deviceModeView =
            _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_3__.DeviceModeWrapper.instance({ inspectedPagePlaceholder: this.inspectedPagePlaceholder, forceNew: false });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockController.instance().addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.Events.BeforeDockSideChanged, this.onBeforeDockSideChange, this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockController.instance().addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.Events.DockSideChanged, this.onDockSideChange, this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockController.instance().addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.Events.AfterDockSideChanged, this.onAfterDockSideChange, this);
        this.onDockSideChange();
        console.timeStamp('AdvancedApp.attachToBody');
        rootView.attachToDocument(document);
        rootView.focus();
        this.inspectedPagePlaceholder.update();
    }
    openToolboxWindow(event) {
        if (event.data.to !== _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockState.UNDOCKED) {
            return;
        }
        if (this.toolboxWindow) {
            return;
        }
        const url = window.location.href.replace('devtools_app.html', 'device_mode_emulation_frame.html');
        this.toolboxWindow = window.open(url, undefined);
    }
    deviceModeEmulationFrameLoaded(toolboxDocument) {
        _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_2__.ThemeSupport.instance().addDocumentToTheme(toolboxDocument);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.initializeUIUtils(toolboxDocument);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.addPlatformClass(toolboxDocument.documentElement);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.installComponentRootStyles(toolboxDocument.body);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ContextMenu.ContextMenu.installHandler(toolboxDocument);
        this.toolboxRootView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.RootView.RootView();
        this.toolboxRootView.attachToDocument(toolboxDocument);
        this.toolboxDocument = toolboxDocument;
        this.updateDeviceModeView();
    }
    updateDeviceModeView() {
        if (this.isDocked()) {
            this.rootSplitWidget.setMainWidget(this.deviceModeView);
        }
        else if (this.toolboxRootView) {
            this.deviceModeView.show(this.toolboxRootView.element);
        }
    }
    onBeforeDockSideChange(event) {
        if (event.data.to === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockState.UNDOCKED && this.toolboxRootView) {
            // Hide inspectorView and force layout to mimic the undocked state.
            this.rootSplitWidget.hideSidebar();
            this.inspectedPagePlaceholder.update();
        }
        this.changingDockSide = true;
    }
    onDockSideChange(event) {
        this.updateDeviceModeView();
        const toDockSide = event ? event.data.to : _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockController.instance().dockSide();
        if (toDockSide === undefined) {
            throw new Error('Got onDockSideChange event with unexpected undefined for dockSide()');
        }
        if (toDockSide === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockState.UNDOCKED) {
            this.updateForUndocked();
        }
        else if (this.toolboxRootView && event && event.data.from === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockState.UNDOCKED) {
            // Don't update yet for smooth transition.
            this.rootSplitWidget.hideSidebar();
        }
        else {
            this.updateForDocked(toDockSide);
        }
    }
    onAfterDockSideChange(event) {
        // We may get here on the first dock side change while loading without BeforeDockSideChange.
        if (!this.changingDockSide) {
            return;
        }
        if (event.data.from && event.data.from === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockState.UNDOCKED) {
            this.updateForDocked(event.data.to);
        }
        this.changingDockSide = false;
        this.inspectedPagePlaceholder.update();
    }
    updateForDocked(dockSide) {
        const resizerElement = this.rootSplitWidget.resizerElement();
        resizerElement.style.transform = dockSide === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockState.RIGHT ? 'translateX(2px)' :
            dockSide === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockState.LEFT ? 'translateX(-2px)' :
                '';
        this.rootSplitWidget.setVertical(dockSide === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockState.RIGHT || dockSide === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockState.LEFT);
        this.rootSplitWidget.setSecondIsSidebar(dockSide === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockState.RIGHT || dockSide === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockState.BOTTOM);
        this.rootSplitWidget.toggleResizer(this.rootSplitWidget.resizerElement(), true);
        this.rootSplitWidget.toggleResizer(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.InspectorView.InspectorView.instance().topResizerElement(), dockSide === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockState.BOTTOM);
        this.rootSplitWidget.showBoth();
    }
    updateForUndocked() {
        this.rootSplitWidget.toggleResizer(this.rootSplitWidget.resizerElement(), false);
        this.rootSplitWidget.toggleResizer(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.InspectorView.InspectorView.instance().topResizerElement(), false);
        this.rootSplitWidget.hideMain();
    }
    isDocked() {
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockController.instance().dockSide() !== _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockState.UNDOCKED;
    }
    onSetInspectedPageBounds(event) {
        if (this.changingDockSide) {
            return;
        }
        const window = this.inspectedPagePlaceholder.element.window();
        if (!window.innerWidth || !window.innerHeight) {
            return;
        }
        if (!this.inspectedPagePlaceholder.isShowing()) {
            return;
        }
        const bounds = event.data;
        console.timeStamp('AdvancedApp.setInspectedPageBounds');
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setInspectedPageBounds(bounds);
    }
}
// Export required for usage in toolbox.ts
// @ts-ignore Exported for Tests.js
globalThis.Emulation = globalThis.Emulation || {};
// @ts-ignore Exported for Tests.js
globalThis.Emulation.AdvancedApp = AdvancedApp;
let advancedAppProviderInstance;
class AdvancedAppProvider {
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!advancedAppProviderInstance || forceNew) {
            advancedAppProviderInstance = new AdvancedAppProvider();
        }
        return advancedAppProviderInstance;
    }
    createApp() {
        return AdvancedApp.instance();
    }
}


/***/ }),

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


/***/ }),

/***/ "./src/panels/emulation/InspectedPagePlaceholder.ts":
/*!**********************************************************!*\
  !*** ./src/panels/emulation/InspectedPagePlaceholder.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   InspectedPagePlaceholder: () => (/* binding */ InspectedPagePlaceholder)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './inspectedPagePlaceholder.css.legacy.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



let inspectedPagePlaceholderInstance;
class InspectedPagePlaceholder extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.Widget) {
    constructor() {
        super(true);
        Object.defineProperty(this, "updateId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.registerRequiredCSS(Object(function webpackMissingModule() { var e = new Error("Cannot find module './inspectedPagePlaceholder.css.legacy.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ZoomManager.ZoomManager.instance().addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ZoomManager.Events.ZoomChanged, this.onResize, this);
        this.restoreMinimumSize();
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!inspectedPagePlaceholderInstance || forceNew) {
            inspectedPagePlaceholderInstance = new InspectedPagePlaceholder();
        }
        return inspectedPagePlaceholderInstance;
    }
    onResize() {
        if (this.updateId) {
            this.element.window().cancelAnimationFrame(this.updateId);
        }
        this.updateId = this.element.window().requestAnimationFrame(this.update.bind(this, false));
    }
    restoreMinimumSize() {
        this.setMinimumSize(150, 150);
    }
    clearMinimumSize() {
        this.setMinimumSize(1, 1);
    }
    dipPageRect() {
        const zoomFactor = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ZoomManager.ZoomManager.instance().zoomFactor();
        const rect = this.element.getBoundingClientRect();
        const bodyRect = this.element.ownerDocument.body.getBoundingClientRect();
        const left = Math.max(rect.left * zoomFactor, bodyRect.left * zoomFactor);
        const top = Math.max(rect.top * zoomFactor, bodyRect.top * zoomFactor);
        const bottom = Math.min(rect.bottom * zoomFactor, bodyRect.bottom * zoomFactor);
        const right = Math.min(rect.right * zoomFactor, bodyRect.right * zoomFactor);
        return { x: left, y: top, width: right - left, height: bottom - top };
    }
    update(force) {
        delete this.updateId;
        const rect = this.dipPageRect();
        const bounds = {
            x: Math.round(rect.x),
            y: Math.round(rect.y),
            height: Math.max(1, Math.round(rect.height)),
            width: Math.max(1, Math.round(rect.width)),
        };
        if (force) {
            // Short term fix for Lighthouse interop.
            --bounds.height;
            this.dispatchEventToListeners(Events.Update, bounds);
            ++bounds.height;
        }
        this.dispatchEventToListeners(Events.Update, bounds);
    }
}
var Events;
(function (Events) {
    Events["Update"] = "Update";
})(Events || (Events = {}));


/***/ })

}]);