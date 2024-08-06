"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_recorder_injected_basic_js"],{

/***/ "./panels/recorder/injected/SelectorPicker.js":
/*!****************************************************!*\
  !*** ./panels/recorder/injected/SelectorPicker.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorPicker: () => (/* binding */ SelectorPicker)
/* harmony export */ });
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger.js */ "./panels/recorder/injected/Logger.js");
/* harmony import */ var _SelectorComputer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectorComputer.js */ "./panels/recorder/injected/SelectorComputer.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./panels/recorder/injected/util.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class SelectorPicker {
    #logger;
    #computer;
    constructor(bindings, customAttribute = '', debug = true) {
        this.#logger = new _Logger_js__WEBPACK_IMPORTED_MODULE_0__.Logger(debug ? 'debug' : 'silent');
        this.#logger.log('Creating a SelectorPicker');
        this.#computer = new _SelectorComputer_js__WEBPACK_IMPORTED_MODULE_1__.SelectorComputer(bindings, this.#logger, customAttribute);
    }
    #handleClickEvent = (event) => {
        (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.haultImmediateEvent)(event);
        const target = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.getClickableTargetFromEvent)(event);
        window.captureSelectors(JSON.stringify({
            selectors: this.#computer.getSelectors(target),
            ...(0,_util_js__WEBPACK_IMPORTED_MODULE_2__.getMouseEventOffsets)(event, target),
        }));
    };
    start = () => {
        this.#logger.log('Setting up selector listeners');
        window.addEventListener('click', this.#handleClickEvent, true);
        window.addEventListener('mousedown', _util_js__WEBPACK_IMPORTED_MODULE_2__.haultImmediateEvent, true);
        window.addEventListener('mouseup', _util_js__WEBPACK_IMPORTED_MODULE_2__.haultImmediateEvent, true);
    };
    stop = () => {
        this.#logger.log('Tearing down selector listeners');
        window.removeEventListener('click', this.#handleClickEvent, true);
        window.removeEventListener('mousedown', _util_js__WEBPACK_IMPORTED_MODULE_2__.haultImmediateEvent, true);
        window.removeEventListener('mouseup', _util_js__WEBPACK_IMPORTED_MODULE_2__.haultImmediateEvent, true);
    };
}

//# sourceMappingURL=SelectorPicker.js.map

/***/ }),

/***/ "./panels/recorder/injected/injected.js":
/*!**********************************************!*\
  !*** ./panels/recorder/injected/injected.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecordingClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecordingClient.js */ "./panels/recorder/injected/RecordingClient.js");
/* harmony import */ var _SelectorPicker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectorPicker.js */ "./panels/recorder/injected/SelectorPicker.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class DevToolsRecorder {
    #recordingClient;
    startRecording(bindings, options) {
        if (this.#recordingClient) {
            throw new Error('Recording client already started.');
        }
        if (this.#selectorPicker) {
            throw new Error('Selector picker is active.');
        }
        this.#recordingClient = new _RecordingClient_js__WEBPACK_IMPORTED_MODULE_0__.RecordingClient(bindings, options);
        this.#recordingClient.start();
    }
    stopRecording() {
        if (!this.#recordingClient) {
            throw new Error('Recording client was not started.');
        }
        this.#recordingClient.stop();
        this.#recordingClient = undefined;
    }
    get recordingClientForTesting() {
        if (!this.#recordingClient) {
            throw new Error('Recording client was not started.');
        }
        return this.#recordingClient;
    }
    #selectorPicker;
    startSelectorPicker(bindings, customAttribute, debug) {
        if (this.#selectorPicker) {
            throw new Error('Selector picker already started.');
        }
        if (this.#recordingClient) {
            this.#recordingClient.stop();
        }
        this.#selectorPicker = new _SelectorPicker_js__WEBPACK_IMPORTED_MODULE_1__.SelectorPicker(bindings, customAttribute, debug);
        this.#selectorPicker.start();
    }
    stopSelectorPicker() {
        if (!this.#selectorPicker) {
            throw new Error('Selector picker was not started.');
        }
        this.#selectorPicker.stop();
        this.#selectorPicker = undefined;
        if (this.#recordingClient) {
            this.#recordingClient.start();
        }
    }
}
if (!window.DevToolsRecorder) {
    window.DevToolsRecorder = new DevToolsRecorder();
}
//# sourceMappingURL=injected.js.map

/***/ }),

/***/ "./ui/components/docs/recorder_injected/basic.js":
/*!*******************************************************!*\
  !*** ./ui/components/docs/recorder_injected/basic.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panels_recorder_injected_injected_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../panels/recorder/injected/injected.js */ "./panels/recorder/injected/injected.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=basic.js.map

/***/ })

}]);