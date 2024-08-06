"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_injected_RecordingClient_js"],{

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

/***/ "./panels/recorder/injected/RecordingClient.js":
/*!*****************************************************!*\
  !*** ./panels/recorder/injected/RecordingClient.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordingClient: () => (/* binding */ RecordingClient)
/* harmony export */ });
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger.js */ "./panels/recorder/injected/Logger.js");
/* harmony import */ var _SelectorComputer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectorComputer.js */ "./panels/recorder/injected/SelectorComputer.js");
/* harmony import */ var _selectors_CSSSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors/CSSSelector.js */ "./panels/recorder/injected/selectors/CSSSelector.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ "./panels/recorder/injected/util.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/**
 * Determines whether an element is ignorable as an input.
 *
 * This is only called on input-like elements (elements that emit the `input`
 * event).
 *
 * With every `if` statement, please write a comment above explaining your
 * reasoning for ignoring the event.
 */
const isIgnorableInputElement = (element) => {
    if (element instanceof HTMLInputElement) {
        switch (element.type) {
            // Checkboxes are always changed as a consequence of another type of action
            // such as the keyboard or mouse. As such, we can safely ignore these
            // elements.
            case 'checkbox':
                return true;
            // Radios are always changed as a consequence of another type of action
            // such as the keyboard or mouse. As such, we can safely ignore these
            // elements.
            case 'radio':
                return true;
        }
    }
    return false;
};
const getShortcutLength = (shortcut) => {
    return Object.values(shortcut).filter(key => Boolean(key)).length.toString();
};
class RecordingClient {
    static defaultSetupOptions = Object.freeze({
        debug: false,
        allowUntrustedEvents: false,
        selectorTypesToRecord: [
            'aria',
            'css',
            'text',
            'xpath',
            'pierce',
        ],
    });
    #computer;
    #isTrustedEvent = (event) => event.isTrusted;
    #stopShortcuts = [];
    #logger;
    constructor(bindings, options = RecordingClient.defaultSetupOptions) {
        this.#logger = new _Logger_js__WEBPACK_IMPORTED_MODULE_0__.Logger(options.debug ? 'debug' : 'silent');
        this.#logger.log('creating a RecordingClient');
        this.#computer = new _SelectorComputer_js__WEBPACK_IMPORTED_MODULE_1__.SelectorComputer(bindings, this.#logger, options.selectorAttribute, options.selectorTypesToRecord);
        if (options.allowUntrustedEvents) {
            this.#isTrustedEvent = () => true;
        }
        this.#stopShortcuts = options.stopShortcuts ?? [];
    }
    start = () => {
        this.#logger.log('Setting up recording listeners');
        window.addEventListener('keydown', this.#onKeyDown, true);
        window.addEventListener('beforeinput', this.#onBeforeInput, true);
        window.addEventListener('input', this.#onInput, true);
        window.addEventListener('keyup', this.#onKeyUp, true);
        window.addEventListener('pointerdown', this.#onPointerDown, true);
        window.addEventListener('click', this.#onClick, true);
        window.addEventListener('auxclick', this.#onClick, true);
        window.addEventListener('beforeunload', this.#onBeforeUnload, true);
    };
    stop = () => {
        this.#logger.log('Tearing down client listeners');
        window.removeEventListener('keydown', this.#onKeyDown, true);
        window.removeEventListener('beforeinput', this.#onBeforeInput, true);
        window.removeEventListener('input', this.#onInput, true);
        window.removeEventListener('keyup', this.#onKeyUp, true);
        window.removeEventListener('pointerdown', this.#onPointerDown, true);
        window.removeEventListener('click', this.#onClick, true);
        window.removeEventListener('auxclick', this.#onClick, true);
        window.removeEventListener('beforeunload', this.#onBeforeUnload, true);
    };
    getSelectors = (node) => {
        return this.#computer.getSelectors(node);
    };
    getCSSSelector = (node) => {
        return this.#computer.getCSSSelector(node);
    };
    getTextSelector = (node) => {
        return this.#computer.getTextSelector(node);
    };
    queryCSSSelectorAllForTesting = (selector) => {
        return (0,_selectors_CSSSelector_js__WEBPACK_IMPORTED_MODULE_2__.queryCSSSelectorAll)(selector);
    };
    #wasStopShortcutPress = (event) => {
        for (const shortcut of this.#stopShortcuts ?? []) {
            if (event.shiftKey === shortcut.shift && event.ctrlKey === shortcut.ctrl && event.metaKey === shortcut.meta &&
                event.keyCode === shortcut.keyCode) {
                this.stop();
                (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.haultImmediateEvent)(event);
                window.stopShortcut(getShortcutLength(shortcut));
                return true;
            }
        }
        return false;
    };
    #initialInputTarget = { element: document.documentElement, selectors: [] };
    /**
     * Sets the current input target and computes the selector.
     *
     * This needs to be called before any input-related events (keydown, keyup,
     * input, change, etc) occur so the precise selector is known. Since we
     * capture on the `Window`, it suffices to call this on the first event in any
     * given input sequence. This will always be either `keydown`, `beforeinput`,
     * or `input`.
     */
    #setInitialInputTarget = (event) => {
        const element = event.composedPath()[0];
        (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.assert)(element instanceof Element);
        if (this.#initialInputTarget.element === element) {
            return;
        }
        this.#initialInputTarget = { element, selectors: this.getSelectors(element) };
    };
    #onKeyDown = (event) => {
        if (!this.#isTrustedEvent(event)) {
            return;
        }
        if (this.#wasStopShortcutPress(event)) {
            return;
        }
        this.#setInitialInputTarget(event);
        this.#addStep({
            type: 'keyDown',
            key: event.key,
        });
    };
    #onBeforeInput = (event) => {
        if (!this.#isTrustedEvent(event)) {
            return;
        }
        this.#setInitialInputTarget(event);
    };
    #onInput = (event) => {
        if (!this.#isTrustedEvent(event)) {
            return;
        }
        this.#setInitialInputTarget(event);
        if (isIgnorableInputElement(this.#initialInputTarget.element)) {
            return;
        }
        const { element, selectors } = this.#initialInputTarget;
        this.#addStep({
            type: 'change',
            selectors,
            value: 'value' in element ? element.value : element.textContent,
        });
    };
    #onKeyUp = (event) => {
        if (!this.#isTrustedEvent(event)) {
            return;
        }
        this.#addStep({
            type: 'keyUp',
            key: event.key,
        });
    };
    #initialPointerTarget = {
        element: document.documentElement,
        selectors: [],
    };
    #setInitialPointerTarget = (event) => {
        const element = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.getClickableTargetFromEvent)(event);
        if (this.#initialPointerTarget.element === element) {
            return;
        }
        this.#initialPointerTarget = {
            element,
            selectors: this.#computer.getSelectors(element),
        };
    };
    #pointerDownTimestamp = 0;
    #onPointerDown = (event) => {
        if (!this.#isTrustedEvent(event)) {
            return;
        }
        this.#pointerDownTimestamp = event.timeStamp;
        this.#setInitialPointerTarget(event);
    };
    #onClick = (event) => {
        if (!this.#isTrustedEvent(event)) {
            return;
        }
        this.#setInitialPointerTarget(event);
        const attributes = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.createClickAttributes)(event, this.#initialPointerTarget.element);
        if (!attributes) {
            return;
        }
        const duration = event.timeStamp - this.#pointerDownTimestamp;
        this.#addStep({
            type: event.detail === 2 ? 'doubleClick' : 'click',
            selectors: this.#initialPointerTarget.selectors,
            duration: duration > 350 ? duration : undefined,
            ...attributes,
        });
    };
    #onBeforeUnload = (event) => {
        this.#logger.log('Unloading...');
        if (!this.#isTrustedEvent(event)) {
            return;
        }
        this.#addStep({ type: 'beforeUnload' });
    };
    #addStep = (step) => {
        const payload = JSON.stringify(step);
        this.#logger.log(`Adding step: ${payload}`);
        window.addStep(payload);
    };
}

//# sourceMappingURL=RecordingClient.js.map

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