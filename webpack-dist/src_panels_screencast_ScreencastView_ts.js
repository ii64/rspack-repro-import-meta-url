"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_screencast_ScreencastView_ts"],{

/***/ "./src/panels/screencast/InputModel.ts":
/*!*********************************************!*\
  !*** ./src/panels/screencast/InputModel.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputModel: () => (/* binding */ InputModel)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const BUTTONS = [
    _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Input.MouseButton.Left,
    _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Input.MouseButton.Middle,
    _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Input.MouseButton.Right,
    _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Input.MouseButton.Back,
    _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Input.MouseButton.Forward,
];
const MOUSE_EVENT_TYPES = {
    mousedown: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Input.DispatchMouseEventRequestType.MousePressed,
    mouseup: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Input.DispatchMouseEventRequestType.MouseReleased,
    mousemove: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Input.DispatchMouseEventRequestType.MouseMoved,
};
class InputModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel {
    constructor(target) {
        super(target);
        Object.defineProperty(this, "inputAgent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "activeMouseOffsetTop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.inputAgent = target.inputAgent();
        this.activeMouseOffsetTop = null;
    }
    emitKeyEvent(event) {
        let type;
        switch (event.type) {
            case 'keydown':
                type = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Input.DispatchKeyEventRequestType.KeyDown;
                break;
            case 'keyup':
                type = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Input.DispatchKeyEventRequestType.KeyUp;
                break;
            case 'keypress':
                type = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Input.DispatchKeyEventRequestType.Char;
                break;
            default:
                return;
        }
        const text = event.type === 'keypress' ? String.fromCharCode(event.charCode) : undefined;
        void this.inputAgent.invoke_dispatchKeyEvent({
            type: type,
            modifiers: this.modifiersForEvent(event),
            text: text,
            unmodifiedText: text ? text.toLowerCase() : undefined,
            keyIdentifier: event.keyIdentifier,
            code: event.code,
            key: event.key,
            windowsVirtualKeyCode: event.keyCode,
            nativeVirtualKeyCode: event.keyCode,
            autoRepeat: event.repeat,
            isKeypad: event.location === 3,
            isSystemKey: false,
            location: event.location !== 3 ? event.location : undefined,
        });
    }
    emitMouseEvent(event, offsetTop, zoom) {
        if (!(event.type in MOUSE_EVENT_TYPES)) {
            return;
        }
        if (event.type === 'mousedown' || this.activeMouseOffsetTop === null) {
            this.activeMouseOffsetTop = offsetTop;
        }
        void this.inputAgent.invoke_dispatchMouseEvent({
            type: MOUSE_EVENT_TYPES[event.type],
            x: Math.round(event.offsetX / zoom),
            y: Math.round(event.offsetY / zoom - this.activeMouseOffsetTop),
            modifiers: this.modifiersForEvent(event),
            button: BUTTONS[event.button],
            clickCount: event.detail,
        });
        if (event.type === 'mouseup') {
            this.activeMouseOffsetTop = null;
        }
    }
    emitWheelEvent(event, offsetTop, zoom) {
        if (this.activeMouseOffsetTop === null) {
            this.activeMouseOffsetTop = offsetTop;
        }
        void this.inputAgent.invoke_dispatchMouseEvent({
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Input.DispatchMouseEventRequestType.MouseWheel,
            x: Math.round(event.offsetX / zoom),
            y: Math.round(event.offsetY / zoom - this.activeMouseOffsetTop),
            modifiers: this.modifiersForEvent(event),
            button: BUTTONS[event.button],
            clickCount: event.detail,
            deltaX: event.deltaX / zoom,
            deltaY: event.deltaY / zoom,
        });
    }
    modifiersForEvent(event) {
        return Number(event.getModifierState('Alt')) | (Number(event.getModifierState('Control')) << 1) |
            (Number(event.getModifierState('Meta')) << 2) | (Number(event.getModifierState('Shift')) << 3);
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(InputModel, {
    capabilities: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Capability.Input,
    autostart: false,
});


/***/ }),

/***/ "./src/panels/screencast/ScreencastView.ts":
/*!*************************************************!*\
  !*** ./src/panels/screencast/ScreencastView.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BORDERS_SIZE: () => (/* binding */ BORDERS_SIZE),
/* harmony export */   HTTP_REGEX: () => (/* binding */ HTTP_REGEX),
/* harmony export */   NAVBAR_HEIGHT: () => (/* binding */ NAVBAR_HEIGHT),
/* harmony export */   ProgressTracker: () => (/* binding */ ProgressTracker),
/* harmony export */   SCHEME_REGEX: () => (/* binding */ SCHEME_REGEX),
/* harmony export */   ScreencastView: () => (/* binding */ ScreencastView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _InputModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InputModel.js */ "./src/panels/screencast/InputModel.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './screencastView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ScreencastView_instances, _ScreencastView_toggleTouchEmulation;









const UIStrings = {
    /**
     *@description Accessible alt text for the screencast canvas rendering of the debug target webpage
     */
    screencastViewOfDebugTarget: 'Screencast view of debug target',
    /**
     *@description Glass pane element text content in Screencast View of the Remote Devices tab when toggling screencast
     */
    theTabIsInactive: 'The tab is inactive',
    /**
     *@description Glass pane element text content in Screencast View of the Remote Devices tab when toggling screencast
     */
    profilingInProgress: 'Profiling in progress',
    /**
     *@description Accessible text for the screencast back button
     */
    back: 'back',
    /**
     *@description Accessible text for the screencast forward button
     */
    forward: 'forward',
    /**
     *@description Accessible text for the screencast reload button
     */
    reload: 'reload',
    /**
     *@description Accessible text for the address bar in screencast view
     */
    addressBar: 'Address bar',
    /**
     *@description Accessible text for the touch emulation button.
     */
    touchInput: 'Use touch',
    /**
     *@description Accessible text for the mouse emulation button.
     */
    mouseInput: 'Use mouse',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/screencast/ScreencastView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class ScreencastView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox {
    constructor(screenCaptureModel) {
        super();
        _ScreencastView_instances.add(this);
        Object.defineProperty(this, "screenCaptureModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "domModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "overlayModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "resourceTreeModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "networkManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "inputModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortcuts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "scrollOffsetX", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "scrollOffsetY", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "screenZoom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "screenOffsetTop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pageScaleFactor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "imageElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "viewportElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "glassPaneElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "canvasElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "titleElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "context", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "imageZoom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tagNameElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "attributeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nodeWidthElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nodeHeightElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "highlightConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "navigationUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "navigationBack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "navigationForward", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "canvasContainerElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isCasting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checkerboardPattern", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "targetInactive", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deferredCasting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "highlightNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "config", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "inspectModeConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "navigationBar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "navigationReload", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "navigationProgressBar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "touchInputToggle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mouseInputToggle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "touchInputToggleIcon", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mouseInputToggleIcon", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "historyIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "historyEntries", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.screenCaptureModel = screenCaptureModel;
        this.domModel = screenCaptureModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMModel);
        this.overlayModel = screenCaptureModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.OverlayModel);
        this.resourceTreeModel = screenCaptureModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
        this.networkManager = screenCaptureModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NetworkManager);
        this.inputModel = screenCaptureModel.target().model(_InputModel_js__WEBPACK_IMPORTED_MODULE_7__.InputModel);
        this.setMinimumSize(150, 150);
        this.shortcuts = {};
        this.scrollOffsetX = 0;
        this.scrollOffsetY = 0;
        this.screenZoom = 1;
        this.screenOffsetTop = 0;
        this.pageScaleFactor = 1;
        this.imageZoom = 1;
    }
    initialize() {
        this.element.classList.add('screencast');
        this.createNavigationBar();
        this.viewportElement = this.element.createChild('div', 'screencast-viewport hidden');
        this.canvasContainerElement = this.viewportElement.createChild('div', 'screencast-canvas-container');
        this.glassPaneElement =
            this.canvasContainerElement.createChild('div', 'screencast-glasspane fill hidden');
        this.canvasElement = this.canvasContainerElement.createChild('canvas');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(this.canvasElement, i18nString(UIStrings.screencastViewOfDebugTarget));
        this.canvasElement.tabIndex = 0;
        this.canvasElement.addEventListener('mousedown', this.handleMouseEvent.bind(this), false);
        this.canvasElement.addEventListener('mouseup', this.handleMouseEvent.bind(this), false);
        this.canvasElement.addEventListener('mousemove', this.handleMouseEvent.bind(this), false);
        this.canvasElement.addEventListener('wheel', this.handleWheelEvent.bind(this), false);
        this.canvasElement.addEventListener('click', this.handleMouseEvent.bind(this), false);
        this.canvasElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), false);
        this.canvasElement.addEventListener('keydown', this.handleKeyEvent.bind(this), false);
        this.canvasElement.addEventListener('keyup', this.handleKeyEvent.bind(this), false);
        this.canvasElement.addEventListener('keypress', this.handleKeyEvent.bind(this), false);
        this.canvasElement.addEventListener('blur', this.handleBlurEvent.bind(this), false);
        this.titleElement =
            this.canvasContainerElement.createChild('div', 'screencast-element-title monospace hidden');
        this.tagNameElement = this.titleElement.createChild('span', 'screencast-tag-name');
        this.attributeElement = this.titleElement.createChild('span', 'screencast-attribute');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(this.titleElement, ' ');
        const dimension = this.titleElement.createChild('span', 'screencast-dimension');
        this.nodeWidthElement = dimension.createChild('span');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(dimension, ' × ');
        this.nodeHeightElement = dimension.createChild('span');
        this.titleElement.style.top = '0';
        this.titleElement.style.left = '0';
        this.imageElement = new Image();
        this.isCasting = false;
        this.context = this.canvasElement.getContext('2d');
        this.checkerboardPattern = this.createCheckerboardPattern(this.context);
        this.shortcuts[_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.KeyboardShortcut.KeyboardShortcut.makeKey('l', _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.KeyboardShortcut.Modifiers.Ctrl)] =
            this.focusNavigationBar.bind(this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.Events.SuspendStateChanged, this.onSuspendStateChange, this);
        this.updateGlasspane();
    }
    wasShown() {
        this.startCasting();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './screencastView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
    willHide() {
        this.stopCasting();
    }
    startCasting() {
        if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().allTargetsSuspended()) {
            return;
        }
        if (this.isCasting) {
            return;
        }
        this.isCasting = true;
        const maxImageDimension = 2048;
        const dimensions = this.viewportDimensions();
        if (dimensions.width < 0 || dimensions.height < 0) {
            this.isCasting = false;
            return;
        }
        dimensions.width *= window.devicePixelRatio;
        dimensions.height *= window.devicePixelRatio;
        // Note: startScreencast width and height are expected to be integers so must be floored.
        this.screenCaptureModel.startScreencast(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Page.StartScreencastRequestFormat.Jpeg, 80, Math.floor(Math.min(maxImageDimension, dimensions.width)), Math.floor(Math.min(maxImageDimension, dimensions.height)), undefined, this.screencastFrame.bind(this), this.screencastVisibilityChanged.bind(this));
        if (this.overlayModel) {
            this.overlayModel.setHighlighter(this);
        }
    }
    stopCasting() {
        if (!this.isCasting) {
            return;
        }
        this.isCasting = false;
        this.screenCaptureModel.stopScreencast();
        for (const emulationModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.EmulationModel)) {
            void emulationModel.overrideEmulateTouch(false);
        }
        if (this.overlayModel) {
            this.overlayModel.setHighlighter(null);
        }
    }
    screencastFrame(base64Data, metadata) {
        this.imageElement.onload = () => {
            this.pageScaleFactor = metadata.pageScaleFactor;
            this.screenOffsetTop = metadata.offsetTop;
            this.scrollOffsetX = metadata.scrollOffsetX;
            this.scrollOffsetY = metadata.scrollOffsetY;
            const deviceSizeRatio = metadata.deviceHeight / metadata.deviceWidth;
            const dimensionsCSS = this.viewportDimensions();
            this.imageZoom = Math.min(dimensionsCSS.width / this.imageElement.naturalWidth, dimensionsCSS.height / (this.imageElement.naturalWidth * deviceSizeRatio));
            this.viewportElement.classList.remove('hidden');
            const bordersSize = BORDERS_SIZE;
            if (this.imageZoom < 1.01 / window.devicePixelRatio) {
                this.imageZoom = 1 / window.devicePixelRatio;
            }
            this.screenZoom = this.imageElement.naturalWidth * this.imageZoom / metadata.deviceWidth;
            this.viewportElement.style.width = metadata.deviceWidth * this.screenZoom + bordersSize + 'px';
            this.viewportElement.style.height = metadata.deviceHeight * this.screenZoom + bordersSize + 'px';
            const data = this.highlightNode ? { node: this.highlightNode, selectorList: undefined } : { clear: true };
            void this.updateHighlightInOverlayAndRepaint(data, this.highlightConfig);
        };
        this.imageElement.src = 'data:image/jpg;base64,' + base64Data;
    }
    isGlassPaneActive() {
        return !this.glassPaneElement.classList.contains('hidden');
    }
    screencastVisibilityChanged(visible) {
        this.targetInactive = !visible;
        this.updateGlasspane();
    }
    onSuspendStateChange() {
        if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().allTargetsSuspended()) {
            this.stopCasting();
        }
        else {
            this.startCasting();
        }
        this.updateGlasspane();
    }
    updateGlasspane() {
        if (this.targetInactive) {
            this.glassPaneElement.textContent = i18nString(UIStrings.theTabIsInactive);
            this.glassPaneElement.classList.remove('hidden');
        }
        else if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().allTargetsSuspended()) {
            this.glassPaneElement.textContent = i18nString(UIStrings.profilingInProgress);
            this.glassPaneElement.classList.remove('hidden');
        }
        else {
            this.glassPaneElement.classList.add('hidden');
        }
    }
    async handleMouseEvent(event) {
        if (this.isGlassPaneActive()) {
            event.consume();
            return;
        }
        if (!this.pageScaleFactor || !this.domModel) {
            return;
        }
        if (!this.inspectModeConfig) {
            if (this.inputModel) {
                this.inputModel.emitMouseEvent(event, this.screenOffsetTop, this.screenZoom);
            }
            event.preventDefault();
            if (event.type === 'mousedown') {
                this.canvasElement.focus();
            }
            return;
        }
        const position = this.convertIntoScreenSpace(event);
        const node = await this.domModel.nodeForLocation(Math.floor(position.x / this.pageScaleFactor + this.scrollOffsetX), Math.floor(position.y / this.pageScaleFactor + this.scrollOffsetY), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-ua-shadow-dom').get());
        if (!node) {
            return;
        }
        if (event.type === 'mousemove') {
            void this.updateHighlightInOverlayAndRepaint({ node, selectorList: undefined }, this.inspectModeConfig);
            this.domModel.overlayModel().nodeHighlightRequested({ nodeId: node.id });
        }
        else if (event.type === 'click') {
            this.domModel.overlayModel().inspectNodeRequested({ backendNodeId: node.backendNodeId() });
        }
    }
    async handleWheelEvent(event) {
        if (this.isGlassPaneActive()) {
            event.consume();
            return;
        }
        if (!this.pageScaleFactor || !this.domModel) {
            return;
        }
        if (this.inputModel) {
            this.inputModel.emitWheelEvent(event, this.screenOffsetTop, this.screenZoom);
        }
        event.preventDefault();
    }
    handleKeyEvent(event) {
        if (this.isGlassPaneActive()) {
            event.consume();
            return;
        }
        const shortcutKey = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.KeyboardShortcut.KeyboardShortcut.makeKeyFromEvent(event);
        const handler = this.shortcuts[shortcutKey];
        if (handler && handler(event)) {
            event.consume();
            return;
        }
        if (this.inputModel) {
            this.inputModel.emitKeyEvent(event);
        }
        event.consume();
        this.canvasElement.focus();
    }
    handleBlurEvent() {
        if (this.inputModel && this.mouseInputToggle?.disabled) {
            const event = new MouseEvent('mouseup');
            this.inputModel.emitMouseEvent(event, this.screenOffsetTop, this.screenZoom);
        }
    }
    handleContextMenuEvent(event) {
        event.consume(true);
    }
    convertIntoScreenSpace(event) {
        return {
            x: Math.round(event.offsetX / this.screenZoom),
            y: Math.round(event.offsetY / this.screenZoom - this.screenOffsetTop),
        };
    }
    onResize() {
        if (this.deferredCasting) {
            clearTimeout(this.deferredCasting);
            delete this.deferredCasting;
        }
        this.stopCasting();
        this.deferredCasting = window.setTimeout(this.startCasting.bind(this), 100);
    }
    highlightInOverlay(data, config) {
        void this.updateHighlightInOverlayAndRepaint(data, config);
    }
    async updateHighlightInOverlayAndRepaint(data, config) {
        let node = null;
        if ('node' in data) {
            node = data.node;
        }
        if (!node && 'deferredNode' in data) {
            node = await data.deferredNode.resolvePromise();
        }
        if (!node && 'object' in data) {
            const domModel = data.object.runtimeModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMModel);
            if (domModel) {
                node = await domModel.pushObjectAsNodeToFrontend(data.object);
            }
        }
        this.highlightNode = node;
        this.highlightConfig = config;
        if (!node) {
            this.model = null;
            this.config = null;
            this.node = null;
            this.titleElement.classList.add('hidden');
            this.repaint();
            return;
        }
        this.node = node;
        void node.boxModel().then(model => {
            if (!model || !this.pageScaleFactor) {
                this.repaint();
                return;
            }
            this.model = this.scaleModel(model);
            this.config = config;
            this.repaint();
        });
    }
    scaleModel(model) {
        function scaleQuad(quad) {
            for (let i = 0; i < quad.length; i += 2) {
                quad[i] = quad[i] * this.pageScaleFactor * this.screenZoom;
                quad[i + 1] = (quad[i + 1] * this.pageScaleFactor + this.screenOffsetTop) * this.screenZoom;
            }
        }
        scaleQuad.call(this, model.content);
        scaleQuad.call(this, model.padding);
        scaleQuad.call(this, model.border);
        scaleQuad.call(this, model.margin);
        return model;
    }
    repaint() {
        const model = this.model;
        const config = this.config;
        const canvasWidth = this.canvasElement.getBoundingClientRect().width;
        const canvasHeight = this.canvasElement.getBoundingClientRect().height;
        this.canvasElement.width = window.devicePixelRatio * canvasWidth;
        this.canvasElement.height = window.devicePixelRatio * canvasHeight;
        this.context.save();
        this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
        // Paint top and bottom gutter.
        this.context.save();
        if (this.checkerboardPattern) {
            this.context.fillStyle = this.checkerboardPattern;
        }
        this.context.fillRect(0, 0, canvasWidth, this.screenOffsetTop * this.screenZoom);
        this.context.fillRect(0, this.screenOffsetTop * this.screenZoom + this.imageElement.naturalHeight * this.imageZoom, canvasWidth, canvasHeight);
        this.context.restore();
        if (model && config) {
            this.context.save();
            const quads = [];
            const isTransparent = (color) => Boolean(color.a && color.a === 0);
            if (model.content && config.contentColor && !isTransparent(config.contentColor)) {
                quads.push({ quad: model.content, color: config.contentColor });
            }
            if (model.padding && config.paddingColor && !isTransparent(config.paddingColor)) {
                quads.push({ quad: model.padding, color: config.paddingColor });
            }
            if (model.border && config.borderColor && !isTransparent(config.borderColor)) {
                quads.push({ quad: model.border, color: config.borderColor });
            }
            if (model.margin && config.marginColor && !isTransparent(config.marginColor)) {
                quads.push({ quad: model.margin, color: config.marginColor });
            }
            for (let i = quads.length - 1; i > 0; --i) {
                this.drawOutlinedQuadWithClip(quads[i].quad, quads[i - 1].quad, quads[i].color);
            }
            if (quads.length > 0) {
                this.drawOutlinedQuad(quads[0].quad, quads[0].color);
            }
            this.context.restore();
            this.drawElementTitle();
            this.context.globalCompositeOperation = 'destination-over';
        }
        this.context.drawImage(this.imageElement, 0, this.screenOffsetTop * this.screenZoom, this.imageElement.naturalWidth * this.imageZoom, this.imageElement.naturalHeight * this.imageZoom);
        this.context.restore();
    }
    cssColor(color) {
        if (!color) {
            return 'transparent';
        }
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromRGBA([color.r, color.g, color.b, color.a !== undefined ? color.a : 1])
            .asString(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.RGBA) ||
            '';
    }
    quadToPath(quad) {
        this.context.beginPath();
        this.context.moveTo(quad[0], quad[1]);
        this.context.lineTo(quad[2], quad[3]);
        this.context.lineTo(quad[4], quad[5]);
        this.context.lineTo(quad[6], quad[7]);
        this.context.closePath();
        return this.context;
    }
    drawOutlinedQuad(quad, fillColor) {
        this.context.save();
        this.context.lineWidth = 2;
        this.quadToPath(quad).clip();
        this.context.fillStyle = this.cssColor(fillColor);
        this.context.fill();
        this.context.restore();
    }
    drawOutlinedQuadWithClip(quad, clipQuad, fillColor) {
        this.context.fillStyle = this.cssColor(fillColor);
        this.context.save();
        this.context.lineWidth = 0;
        this.quadToPath(quad).fill();
        this.context.globalCompositeOperation = 'destination-out';
        this.context.fillStyle = 'red';
        this.quadToPath(clipQuad).fill();
        this.context.restore();
    }
    drawElementTitle() {
        if (!this.node) {
            return;
        }
        const canvasWidth = this.canvasElement.getBoundingClientRect().width;
        const canvasHeight = this.canvasElement.getBoundingClientRect().height;
        const lowerCaseName = this.node.localName() || this.node.nodeName().toLowerCase();
        this.tagNameElement.textContent = lowerCaseName;
        this.attributeElement.textContent = getAttributesForElementTitle(this.node);
        this.nodeWidthElement.textContent = String(this.model ? this.model.width : 0);
        this.nodeHeightElement.textContent = String(this.model ? this.model.height : 0);
        this.titleElement.classList.remove('hidden');
        const titleWidth = this.titleElement.offsetWidth + 6;
        const titleHeight = this.titleElement.offsetHeight + 4;
        const anchorTop = this.model ? this.model.margin[1] : 0;
        const anchorBottom = this.model ? this.model.margin[7] : 0;
        const arrowHeight = 7;
        let renderArrowUp = false;
        let renderArrowDown = false;
        let boxX = Math.max(2, this.model ? this.model.margin[0] : 0);
        if (boxX + titleWidth > canvasWidth) {
            boxX = canvasWidth - titleWidth - 2;
        }
        let boxY;
        if (anchorTop > canvasHeight) {
            boxY = canvasHeight - titleHeight - arrowHeight;
            renderArrowDown = true;
        }
        else if (anchorBottom < 0) {
            boxY = arrowHeight;
            renderArrowUp = true;
        }
        else if (anchorBottom + titleHeight + arrowHeight < canvasHeight) {
            boxY = anchorBottom + arrowHeight - 4;
            renderArrowUp = true;
        }
        else if (anchorTop - titleHeight - arrowHeight > 0) {
            boxY = anchorTop - titleHeight - arrowHeight + 3;
            renderArrowDown = true;
        }
        else {
            boxY = arrowHeight;
        }
        this.context.save();
        this.context.translate(0.5, 0.5);
        this.context.beginPath();
        this.context.moveTo(boxX, boxY);
        if (renderArrowUp) {
            this.context.lineTo(boxX + 2 * arrowHeight, boxY);
            this.context.lineTo(boxX + 3 * arrowHeight, boxY - arrowHeight);
            this.context.lineTo(boxX + 4 * arrowHeight, boxY);
        }
        this.context.lineTo(boxX + titleWidth, boxY);
        this.context.lineTo(boxX + titleWidth, boxY + titleHeight);
        if (renderArrowDown) {
            this.context.lineTo(boxX + 4 * arrowHeight, boxY + titleHeight);
            this.context.lineTo(boxX + 3 * arrowHeight, boxY + titleHeight + arrowHeight);
            this.context.lineTo(boxX + 2 * arrowHeight, boxY + titleHeight);
        }
        this.context.lineTo(boxX, boxY + titleHeight);
        this.context.closePath();
        this.context.fillStyle = 'var(--sys-color-yellow-container)';
        this.context.fill();
        this.context.strokeStyle = 'var(--sys-color-outline)';
        this.context.stroke();
        this.context.restore();
        this.titleElement.style.top = (boxY + 3) + 'px';
        this.titleElement.style.left = (boxX + 3) + 'px';
    }
    viewportDimensions() {
        const gutterSize = 30;
        const bordersSize = BORDERS_SIZE;
        const width = this.element.offsetWidth - bordersSize - gutterSize;
        const height = this.element.offsetHeight - bordersSize - gutterSize - NAVBAR_HEIGHT;
        return { width: width, height: height };
    }
    setInspectMode(mode, config) {
        this.inspectModeConfig = mode !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Overlay.InspectMode.None ? config : null;
        return Promise.resolve();
    }
    highlightFrame(_frameId) {
    }
    createCheckerboardPattern(context) {
        const pattern = document.createElement('canvas');
        const size = 32;
        pattern.width = size * 2;
        pattern.height = size * 2;
        const pctx = pattern.getContext('2d');
        pctx.fillStyle = 'var(--sys-color-neutral-outline)';
        pctx.fillRect(0, 0, size * 2, size * 2);
        pctx.fillStyle = 'var(--sys-color-surface-variant)';
        pctx.fillRect(0, 0, size, size);
        pctx.fillRect(size, size, size, size);
        return context.createPattern(pattern, 'repeat');
    }
    createNavigationBar() {
        this.navigationBar = this.element.createChild('div', 'screencast-navigation');
        this.navigationBack = this.navigationBar.createChild('button', 'navigation');
        {
            const icon = this.navigationBack.appendChild(new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon());
            icon.data = { color: 'var(--icon-default)', iconName: 'arrow-back' };
        }
        this.navigationBack.disabled = true;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(this.navigationBack, i18nString(UIStrings.back));
        this.navigationForward = this.navigationBar.createChild('button', 'navigation');
        {
            const icon = this.navigationForward.appendChild(new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon());
            icon.data = { color: 'var(--icon-default)', iconName: 'arrow-forward' };
        }
        this.navigationForward.disabled = true;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(this.navigationForward, i18nString(UIStrings.forward));
        this.navigationReload = this.navigationBar.createChild('button', 'navigation');
        {
            const icon = this.navigationReload.appendChild(new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon());
            icon.data = { color: 'var(--icon-default)', iconName: 'refresh' };
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(this.navigationReload, i18nString(UIStrings.reload));
        this.navigationUrl = this.navigationBar.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createInput());
        this.navigationUrl.type = 'text';
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(this.navigationUrl, i18nString(UIStrings.addressBar));
        this.mouseInputToggle = this.navigationBar.createChild('button');
        this.mouseInputToggle.disabled = true;
        {
            this.mouseInputToggleIcon = this.mouseInputToggle.appendChild(new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon());
            this.mouseInputToggleIcon.data = { color: 'var(--icon-toggled)', iconName: 'mouse' };
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(this.mouseInputToggle, i18nString(UIStrings.mouseInput));
        this.touchInputToggle = this.navigationBar.createChild('button');
        {
            this.touchInputToggleIcon = this.touchInputToggle.appendChild(new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon());
            this.touchInputToggleIcon.data = { color: 'var(--icon-default)', iconName: 'touch-app' };
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(this.touchInputToggle, i18nString(UIStrings.touchInput));
        this.navigationProgressBar = new ProgressTracker(this.resourceTreeModel, this.networkManager, this.navigationBar.createChild('div', 'progress'));
        if (this.resourceTreeModel) {
            this.navigationBack.addEventListener('click', this.navigateToHistoryEntry.bind(this, -1), false);
            this.navigationForward.addEventListener('click', this.navigateToHistoryEntry.bind(this, 1), false);
            this.navigationReload.addEventListener('click', this.navigateReload.bind(this), false);
            this.navigationUrl.addEventListener('keyup', this.navigationUrlKeyUp.bind(this), true);
            this.touchInputToggle.addEventListener('click', __classPrivateFieldGet(this, _ScreencastView_instances, "m", _ScreencastView_toggleTouchEmulation).bind(this, true), false);
            this.mouseInputToggle.addEventListener('click', __classPrivateFieldGet(this, _ScreencastView_instances, "m", _ScreencastView_toggleTouchEmulation).bind(this, false), false);
            void this.requestNavigationHistory();
            this.resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.PrimaryPageChanged, this.requestNavigationHistoryEvent, this);
            this.resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.CachedResourcesLoaded, this.requestNavigationHistoryEvent, this);
        }
    }
    navigateToHistoryEntry(offset) {
        if (!this.resourceTreeModel) {
            return;
        }
        const newIndex = (this.historyIndex || 0) + offset;
        if (!this.historyEntries || newIndex < 0 || newIndex >= this.historyEntries.length) {
            return;
        }
        this.resourceTreeModel.navigateToHistoryEntry(this.historyEntries[newIndex]);
        void this.requestNavigationHistory();
    }
    navigateReload() {
        if (!this.resourceTreeModel) {
            return;
        }
        this.resourceTreeModel.reloadPage();
    }
    navigationUrlKeyUp(event) {
        if (event.key !== 'Enter') {
            return;
        }
        let url = this.navigationUrl.value;
        if (!url) {
            return;
        }
        if (!url.match(SCHEME_REGEX)) {
            url = 'http://' + url;
        }
        if (this.resourceTreeModel) {
            void this.resourceTreeModel.navigate(url);
        }
        this.canvasElement.focus();
    }
    requestNavigationHistoryEvent() {
        void this.requestNavigationHistory();
    }
    async requestNavigationHistory() {
        const history = this.resourceTreeModel ? await this.resourceTreeModel.navigationHistory() : null;
        if (!history) {
            return;
        }
        this.historyIndex = history.currentIndex;
        this.historyEntries = history.entries;
        this.navigationBack.disabled = this.historyIndex === 0;
        this.navigationForward.disabled = this.historyIndex === (this.historyEntries.length - 1);
        let url = this.historyEntries[this.historyIndex].url;
        const match = url.match(HTTP_REGEX);
        if (match) {
            url = match[1];
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.inspectedURLChanged(url);
        this.navigationUrl.value = decodeURI(url);
    }
    focusNavigationBar() {
        this.navigationUrl.focus();
        this.navigationUrl.select();
        return true;
    }
}
_ScreencastView_instances = new WeakSet(), _ScreencastView_toggleTouchEmulation = function _ScreencastView_toggleTouchEmulation(value) {
    if (!this.canvasContainerElement || !this.isCasting || !this.mouseInputToggle || !this.touchInputToggle ||
        !this.mouseInputToggleIcon || !this.touchInputToggleIcon) {
        return;
    }
    const models = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.EmulationModel);
    for (const model of models) {
        void model.overrideEmulateTouch(value);
    }
    this.mouseInputToggle.disabled = !value;
    this.touchInputToggle.disabled = value;
    this.mouseInputToggleIcon.data = {
        ...this.mouseInputToggleIcon.data,
        color: this.mouseInputToggle.disabled ? 'var(--icon-toggled)' : 'var(--icon-default)',
    };
    this.touchInputToggleIcon.data = {
        ...this.touchInputToggleIcon.data,
        color: this.touchInputToggle.disabled ? 'var(--icon-toggled)' : 'var(--icon-default)',
    };
    this.canvasContainerElement.classList.toggle('touchable', value);
};
const BORDERS_SIZE = 44;
const NAVBAR_HEIGHT = 29;
const HTTP_REGEX = /^http:\/\/(.+)/;
const SCHEME_REGEX = /^(https?|about|chrome):/;
class ProgressTracker {
    constructor(resourceTreeModel, networkManager, element) {
        Object.defineProperty(this, "element", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "requestIds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "startedRequests", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "finishedRequests", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "maxDisplayedProgress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element = element;
        if (resourceTreeModel) {
            resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.PrimaryPageChanged, this.onPrimaryPageChanged, this);
            resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, this.onLoad, this);
        }
        if (networkManager) {
            networkManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Events.RequestStarted, this.onRequestStarted, this);
            networkManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Events.RequestFinished, this.onRequestFinished, this);
        }
        this.requestIds = null;
        this.startedRequests = 0;
        this.finishedRequests = 0;
        this.maxDisplayedProgress = 0;
    }
    onPrimaryPageChanged() {
        this.requestIds = new Map();
        this.startedRequests = 0;
        this.finishedRequests = 0;
        this.maxDisplayedProgress = 0;
        this.updateProgress(0.1); // Display first 10% on navigation start.
    }
    onLoad() {
        this.requestIds = null;
        this.updateProgress(1); // Display 100% progress on load, hide it in 0.5s.
        window.setTimeout(() => {
            if (!this.navigationProgressVisible()) {
                this.displayProgress(0);
            }
        }, 500);
    }
    navigationProgressVisible() {
        return this.requestIds !== null;
    }
    onRequestStarted(event) {
        if (!this.navigationProgressVisible()) {
            return;
        }
        const request = event.data.request;
        // Ignore long-living WebSockets for the sake of progress indicator, as we won't be waiting them anyway.
        if (request.resourceType() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket) {
            return;
        }
        if (this.requestIds) {
            this.requestIds.set(request.requestId(), request);
        }
        ++this.startedRequests;
    }
    onRequestFinished(event) {
        if (!this.navigationProgressVisible()) {
            return;
        }
        const request = event.data;
        if (this.requestIds && !this.requestIds.has(request.requestId())) {
            return;
        }
        ++this.finishedRequests;
        window.setTimeout(() => {
            this.updateProgress(this.finishedRequests / this.startedRequests * 0.9); // Finished requests drive the progress up to 90%.
        }, 500); // Delay to give the new requests time to start. This makes the progress smoother.
    }
    updateProgress(progress) {
        if (!this.navigationProgressVisible()) {
            return;
        }
        if (this.maxDisplayedProgress >= progress) {
            return;
        }
        this.maxDisplayedProgress = progress;
        this.displayProgress(progress);
    }
    displayProgress(progress) {
        this.element.style.width = (100 * progress) + '%';
    }
}
function getAttributesForElementTitle(node) {
    const id = node.getAttribute('id');
    const className = node.getAttribute('class');
    let selector = id ? '#' + id : '';
    if (className) {
        selector += '.' + className.trim().replace(/\s+/g, '.');
    }
    if (selector.length > 50) {
        selector = selector.substring(0, 50) + '…';
    }
    return selector;
}


/***/ })

}]);