"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_injected_injected_ts"],{

/***/ "./src/panels/recorder/injected/SelectorPicker.ts":
/*!********************************************************!*\
  !*** ./src/panels/recorder/injected/SelectorPicker.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorPicker: () => (/* binding */ SelectorPicker)
/* harmony export */ });
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger.js */ "./src/panels/recorder/injected/Logger.ts");
/* harmony import */ var _SelectorComputer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectorComputer.js */ "./src/panels/recorder/injected/SelectorComputer.ts");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./src/panels/recorder/injected/util.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SelectorPicker_logger, _SelectorPicker_computer, _SelectorPicker_handleClickEvent;



class SelectorPicker {
    constructor(bindings, customAttribute = '', debug = true) {
        _SelectorPicker_logger.set(this, void 0);
        _SelectorPicker_computer.set(this, void 0);
        _SelectorPicker_handleClickEvent.set(this, (event) => {
            (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.haultImmediateEvent)(event);
            const target = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.getClickableTargetFromEvent)(event);
            window.captureSelectors(JSON.stringify({
                selectors: __classPrivateFieldGet(this, _SelectorPicker_computer, "f").getSelectors(target),
                ...(0,_util_js__WEBPACK_IMPORTED_MODULE_2__.getMouseEventOffsets)(event, target),
            }));
        });
        Object.defineProperty(this, "start", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                __classPrivateFieldGet(this, _SelectorPicker_logger, "f").log('Setting up selector listeners');
                window.addEventListener('click', __classPrivateFieldGet(this, _SelectorPicker_handleClickEvent, "f"), true);
                window.addEventListener('mousedown', _util_js__WEBPACK_IMPORTED_MODULE_2__.haultImmediateEvent, true);
                window.addEventListener('mouseup', _util_js__WEBPACK_IMPORTED_MODULE_2__.haultImmediateEvent, true);
            }
        });
        Object.defineProperty(this, "stop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                __classPrivateFieldGet(this, _SelectorPicker_logger, "f").log('Tearing down selector listeners');
                window.removeEventListener('click', __classPrivateFieldGet(this, _SelectorPicker_handleClickEvent, "f"), true);
                window.removeEventListener('mousedown', _util_js__WEBPACK_IMPORTED_MODULE_2__.haultImmediateEvent, true);
                window.removeEventListener('mouseup', _util_js__WEBPACK_IMPORTED_MODULE_2__.haultImmediateEvent, true);
            }
        });
        __classPrivateFieldSet(this, _SelectorPicker_logger, new _Logger_js__WEBPACK_IMPORTED_MODULE_0__.Logger(debug ? 'debug' : 'silent'), "f");
        __classPrivateFieldGet(this, _SelectorPicker_logger, "f").log('Creating a SelectorPicker');
        __classPrivateFieldSet(this, _SelectorPicker_computer, new _SelectorComputer_js__WEBPACK_IMPORTED_MODULE_1__.SelectorComputer(bindings, __classPrivateFieldGet(this, _SelectorPicker_logger, "f"), customAttribute), "f");
    }
}
_SelectorPicker_logger = new WeakMap(), _SelectorPicker_computer = new WeakMap(), _SelectorPicker_handleClickEvent = new WeakMap();



/***/ }),

/***/ "./src/panels/recorder/injected/injected.ts":
/*!**************************************************!*\
  !*** ./src/panels/recorder/injected/injected.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecordingClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecordingClient.js */ "./src/panels/recorder/injected/RecordingClient.ts");
/* harmony import */ var _SelectorPicker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectorPicker.js */ "./src/panels/recorder/injected/SelectorPicker.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _DevToolsRecorder_recordingClient, _DevToolsRecorder_selectorPicker;


class DevToolsRecorder {
    constructor() {
        _DevToolsRecorder_recordingClient.set(this, void 0);
        _DevToolsRecorder_selectorPicker.set(this, void 0);
    }
    startRecording(bindings, options) {
        if (__classPrivateFieldGet(this, _DevToolsRecorder_recordingClient, "f")) {
            throw new Error('Recording client already started.');
        }
        if (__classPrivateFieldGet(this, _DevToolsRecorder_selectorPicker, "f")) {
            throw new Error('Selector picker is active.');
        }
        __classPrivateFieldSet(this, _DevToolsRecorder_recordingClient, new _RecordingClient_js__WEBPACK_IMPORTED_MODULE_0__.RecordingClient(bindings, options), "f");
        __classPrivateFieldGet(this, _DevToolsRecorder_recordingClient, "f").start();
    }
    stopRecording() {
        if (!__classPrivateFieldGet(this, _DevToolsRecorder_recordingClient, "f")) {
            throw new Error('Recording client was not started.');
        }
        __classPrivateFieldGet(this, _DevToolsRecorder_recordingClient, "f").stop();
        __classPrivateFieldSet(this, _DevToolsRecorder_recordingClient, undefined, "f");
    }
    get recordingClientForTesting() {
        if (!__classPrivateFieldGet(this, _DevToolsRecorder_recordingClient, "f")) {
            throw new Error('Recording client was not started.');
        }
        return __classPrivateFieldGet(this, _DevToolsRecorder_recordingClient, "f");
    }
    startSelectorPicker(bindings, customAttribute, debug) {
        if (__classPrivateFieldGet(this, _DevToolsRecorder_selectorPicker, "f")) {
            throw new Error('Selector picker already started.');
        }
        if (__classPrivateFieldGet(this, _DevToolsRecorder_recordingClient, "f")) {
            __classPrivateFieldGet(this, _DevToolsRecorder_recordingClient, "f").stop();
        }
        __classPrivateFieldSet(this, _DevToolsRecorder_selectorPicker, new _SelectorPicker_js__WEBPACK_IMPORTED_MODULE_1__.SelectorPicker(bindings, customAttribute, debug), "f");
        __classPrivateFieldGet(this, _DevToolsRecorder_selectorPicker, "f").start();
    }
    stopSelectorPicker() {
        if (!__classPrivateFieldGet(this, _DevToolsRecorder_selectorPicker, "f")) {
            throw new Error('Selector picker was not started.');
        }
        __classPrivateFieldGet(this, _DevToolsRecorder_selectorPicker, "f").stop();
        __classPrivateFieldSet(this, _DevToolsRecorder_selectorPicker, undefined, "f");
        if (__classPrivateFieldGet(this, _DevToolsRecorder_recordingClient, "f")) {
            __classPrivateFieldGet(this, _DevToolsRecorder_recordingClient, "f").start();
        }
    }
}
_DevToolsRecorder_recordingClient = new WeakMap(), _DevToolsRecorder_selectorPicker = new WeakMap();
if (!window.DevToolsRecorder) {
    window.DevToolsRecorder = new DevToolsRecorder();
}


/***/ })

}]);