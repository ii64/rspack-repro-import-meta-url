"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_injected_SelectorPicker_js"],{

/***/ "./panels/recorder/injected/Logger.js":
/*!********************************************!*\
  !*** ./panels/recorder/injected/Logger.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const noop = () => void 0;
class Logger {
    #log;
    #time;
    #timeEnd;
    constructor(level) {
        switch (level) {
            case 'silent':
                this.#log = noop;
                this.#time = noop;
                this.#timeEnd = noop;
                break;
            default:
                // eslint-disable-next-line no-console
                this.#log = console.log;
                this.#time = console.time;
                this.#timeEnd = console.timeEnd;
                break;
        }
    }
    log(...args) {
        this.#log(...args);
    }
    timed(label, action) {
        this.#time(label);
        const value = action();
        this.#timeEnd(label);
        return value;
    }
}
//# sourceMappingURL=Logger.js.map

/***/ }),

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

/***/ "./panels/recorder/injected/util.js":
/*!******************************************!*\
  !*** ./panels/recorder/injected/util.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ assert),
/* harmony export */   createClickAttributes: () => (/* binding */ createClickAttributes),
/* harmony export */   getClickableTargetFromEvent: () => (/* binding */ getClickableTargetFromEvent),
/* harmony export */   getMouseEventOffsets: () => (/* binding */ getMouseEventOffsets),
/* harmony export */   haultImmediateEvent: () => (/* binding */ haultImmediateEvent)
/* harmony export */ });
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert(condition) {
    if (!condition) {
        throw new Error('Assertion failed!');
    }
}
const haultImmediateEvent = (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
};
const getMouseEventOffsets = (event, target) => {
    const rect = target.getBoundingClientRect();
    return { offsetX: event.clientX - rect.x, offsetY: event.clientY - rect.y };
};
/**
 * @returns the element that emitted the event.
 */
const getClickableTargetFromEvent = (event) => {
    for (const element of event.composedPath()) {
        if (!(element instanceof Element)) {
            continue;
        }
        // If an element has no width or height, we skip this target.
        const rect = element.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) {
            continue;
        }
        return element;
    }
    throw new Error(`No target is found in event of type ${event.type}`);
};
const createClickAttributes = (event, target) => {
    let deviceType;
    if (event instanceof PointerEvent) {
        switch (event.pointerType) {
            case 'mouse':
                // Default device.
                break;
            case 'pen':
            case 'touch':
                deviceType = event.pointerType;
                break;
            default:
                // Unsupported device type.
                return;
        }
    }
    const { offsetX, offsetY } = getMouseEventOffsets(event, target);
    if (offsetX < 0 || offsetY < 0) {
        // Event comes from outside the viewport. Can happen as a result of a
        // simulated click (through a keyboard event e.g.).
        return;
    }
    return {
        button: ['auxiliary', 'secondary', 'back', 'forward'][event.button - 1],
        deviceType,
        offsetX,
        offsetY,
    };
};
//# sourceMappingURL=util.js.map

/***/ })

}]);