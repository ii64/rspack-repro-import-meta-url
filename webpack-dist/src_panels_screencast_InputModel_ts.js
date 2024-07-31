"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_screencast_InputModel_ts"],{

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


/***/ })

}]);