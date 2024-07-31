"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_injected_RecordingClient_ts"],{

/***/ "./src/panels/recorder/injected/Logger.ts":
/*!************************************************!*\
  !*** ./src/panels/recorder/injected/Logger.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
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
var _Logger_log, _Logger_time, _Logger_timeEnd;
const noop = () => void 0;
class Logger {
    constructor(level) {
        _Logger_log.set(this, void 0);
        _Logger_time.set(this, void 0);
        _Logger_timeEnd.set(this, void 0);
        switch (level) {
            case 'silent':
                __classPrivateFieldSet(this, _Logger_log, noop, "f");
                __classPrivateFieldSet(this, _Logger_time, noop, "f");
                __classPrivateFieldSet(this, _Logger_timeEnd, noop, "f");
                break;
            default:
                // eslint-disable-next-line no-console
                __classPrivateFieldSet(this, _Logger_log, console.log, "f");
                __classPrivateFieldSet(this, _Logger_time, console.time, "f");
                __classPrivateFieldSet(this, _Logger_timeEnd, console.timeEnd, "f");
                break;
        }
    }
    log(...args) {
        __classPrivateFieldGet(this, _Logger_log, "f").call(this, ...args);
    }
    timed(label, action) {
        __classPrivateFieldGet(this, _Logger_time, "f").call(this, label);
        const value = action();
        __classPrivateFieldGet(this, _Logger_timeEnd, "f").call(this, label);
        return value;
    }
}
_Logger_log = new WeakMap(), _Logger_time = new WeakMap(), _Logger_timeEnd = new WeakMap();


/***/ }),

/***/ "./src/panels/recorder/injected/RecordingClient.ts":
/*!*********************************************************!*\
  !*** ./src/panels/recorder/injected/RecordingClient.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordingClient: () => (/* binding */ RecordingClient)
/* harmony export */ });
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger.js */ "./src/panels/recorder/injected/Logger.ts");
/* harmony import */ var _SelectorComputer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectorComputer.js */ "./src/panels/recorder/injected/SelectorComputer.ts");
/* harmony import */ var _selectors_CSSSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors/CSSSelector.js */ "./src/panels/recorder/injected/selectors/CSSSelector.ts");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ "./src/panels/recorder/injected/util.ts");
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
var _RecordingClient_computer, _RecordingClient_isTrustedEvent, _RecordingClient_stopShortcuts, _RecordingClient_logger, _RecordingClient_wasStopShortcutPress, _RecordingClient_initialInputTarget, _RecordingClient_setInitialInputTarget, _RecordingClient_onKeyDown, _RecordingClient_onBeforeInput, _RecordingClient_onInput, _RecordingClient_onKeyUp, _RecordingClient_initialPointerTarget, _RecordingClient_setInitialPointerTarget, _RecordingClient_pointerDownTimestamp, _RecordingClient_onPointerDown, _RecordingClient_onClick, _RecordingClient_onBeforeUnload, _RecordingClient_addStep;




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
    constructor(bindings, options = RecordingClient.defaultSetupOptions) {
        _RecordingClient_computer.set(this, void 0);
        _RecordingClient_isTrustedEvent.set(this, (event) => event.isTrusted);
        _RecordingClient_stopShortcuts.set(this, []);
        _RecordingClient_logger.set(this, void 0);
        Object.defineProperty(this, "start", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                __classPrivateFieldGet(this, _RecordingClient_logger, "f").log('Setting up recording listeners');
                window.addEventListener('keydown', __classPrivateFieldGet(this, _RecordingClient_onKeyDown, "f"), true);
                window.addEventListener('beforeinput', __classPrivateFieldGet(this, _RecordingClient_onBeforeInput, "f"), true);
                window.addEventListener('input', __classPrivateFieldGet(this, _RecordingClient_onInput, "f"), true);
                window.addEventListener('keyup', __classPrivateFieldGet(this, _RecordingClient_onKeyUp, "f"), true);
                window.addEventListener('pointerdown', __classPrivateFieldGet(this, _RecordingClient_onPointerDown, "f"), true);
                window.addEventListener('click', __classPrivateFieldGet(this, _RecordingClient_onClick, "f"), true);
                window.addEventListener('auxclick', __classPrivateFieldGet(this, _RecordingClient_onClick, "f"), true);
                window.addEventListener('beforeunload', __classPrivateFieldGet(this, _RecordingClient_onBeforeUnload, "f"), true);
            }
        });
        Object.defineProperty(this, "stop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                __classPrivateFieldGet(this, _RecordingClient_logger, "f").log('Tearing down client listeners');
                window.removeEventListener('keydown', __classPrivateFieldGet(this, _RecordingClient_onKeyDown, "f"), true);
                window.removeEventListener('beforeinput', __classPrivateFieldGet(this, _RecordingClient_onBeforeInput, "f"), true);
                window.removeEventListener('input', __classPrivateFieldGet(this, _RecordingClient_onInput, "f"), true);
                window.removeEventListener('keyup', __classPrivateFieldGet(this, _RecordingClient_onKeyUp, "f"), true);
                window.removeEventListener('pointerdown', __classPrivateFieldGet(this, _RecordingClient_onPointerDown, "f"), true);
                window.removeEventListener('click', __classPrivateFieldGet(this, _RecordingClient_onClick, "f"), true);
                window.removeEventListener('auxclick', __classPrivateFieldGet(this, _RecordingClient_onClick, "f"), true);
                window.removeEventListener('beforeunload', __classPrivateFieldGet(this, _RecordingClient_onBeforeUnload, "f"), true);
            }
        });
        Object.defineProperty(this, "getSelectors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (node) => {
                return __classPrivateFieldGet(this, _RecordingClient_computer, "f").getSelectors(node);
            }
        });
        Object.defineProperty(this, "getCSSSelector", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (node) => {
                return __classPrivateFieldGet(this, _RecordingClient_computer, "f").getCSSSelector(node);
            }
        });
        Object.defineProperty(this, "getTextSelector", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (node) => {
                return __classPrivateFieldGet(this, _RecordingClient_computer, "f").getTextSelector(node);
            }
        });
        Object.defineProperty(this, "queryCSSSelectorAllForTesting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (selector) => {
                return (0,_selectors_CSSSelector_js__WEBPACK_IMPORTED_MODULE_2__.queryCSSSelectorAll)(selector);
            }
        });
        _RecordingClient_wasStopShortcutPress.set(this, (event) => {
            for (const shortcut of __classPrivateFieldGet(this, _RecordingClient_stopShortcuts, "f") ?? []) {
                if (event.shiftKey === shortcut.shift && event.ctrlKey === shortcut.ctrl && event.metaKey === shortcut.meta &&
                    event.keyCode === shortcut.keyCode) {
                    this.stop();
                    (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.haultImmediateEvent)(event);
                    window.stopShortcut(getShortcutLength(shortcut));
                    return true;
                }
            }
            return false;
        });
        _RecordingClient_initialInputTarget.set(this, { element: document.documentElement, selectors: [] });
        /**
         * Sets the current input target and computes the selector.
         *
         * This needs to be called before any input-related events (keydown, keyup,
         * input, change, etc) occur so the precise selector is known. Since we
         * capture on the `Window`, it suffices to call this on the first event in any
         * given input sequence. This will always be either `keydown`, `beforeinput`,
         * or `input`.
         */
        _RecordingClient_setInitialInputTarget.set(this, (event) => {
            const element = event.composedPath()[0];
            (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.assert)(element instanceof Element);
            if (__classPrivateFieldGet(this, _RecordingClient_initialInputTarget, "f").element === element) {
                return;
            }
            __classPrivateFieldSet(this, _RecordingClient_initialInputTarget, { element, selectors: this.getSelectors(element) }, "f");
        });
        _RecordingClient_onKeyDown.set(this, (event) => {
            if (!__classPrivateFieldGet(this, _RecordingClient_isTrustedEvent, "f").call(this, event)) {
                return;
            }
            if (__classPrivateFieldGet(this, _RecordingClient_wasStopShortcutPress, "f").call(this, event)) {
                return;
            }
            __classPrivateFieldGet(this, _RecordingClient_setInitialInputTarget, "f").call(this, event);
            __classPrivateFieldGet(this, _RecordingClient_addStep, "f").call(this, {
                type: 'keyDown',
                key: event.key,
            });
        });
        _RecordingClient_onBeforeInput.set(this, (event) => {
            if (!__classPrivateFieldGet(this, _RecordingClient_isTrustedEvent, "f").call(this, event)) {
                return;
            }
            __classPrivateFieldGet(this, _RecordingClient_setInitialInputTarget, "f").call(this, event);
        });
        _RecordingClient_onInput.set(this, (event) => {
            if (!__classPrivateFieldGet(this, _RecordingClient_isTrustedEvent, "f").call(this, event)) {
                return;
            }
            __classPrivateFieldGet(this, _RecordingClient_setInitialInputTarget, "f").call(this, event);
            if (isIgnorableInputElement(__classPrivateFieldGet(this, _RecordingClient_initialInputTarget, "f").element)) {
                return;
            }
            const { element, selectors } = __classPrivateFieldGet(this, _RecordingClient_initialInputTarget, "f");
            __classPrivateFieldGet(this, _RecordingClient_addStep, "f").call(this, {
                type: 'change',
                selectors,
                value: 'value' in element ? element.value : element.textContent,
            });
        });
        _RecordingClient_onKeyUp.set(this, (event) => {
            if (!__classPrivateFieldGet(this, _RecordingClient_isTrustedEvent, "f").call(this, event)) {
                return;
            }
            __classPrivateFieldGet(this, _RecordingClient_addStep, "f").call(this, {
                type: 'keyUp',
                key: event.key,
            });
        });
        _RecordingClient_initialPointerTarget.set(this, {
            element: document.documentElement,
            selectors: [],
        });
        _RecordingClient_setInitialPointerTarget.set(this, (event) => {
            const element = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.getClickableTargetFromEvent)(event);
            if (__classPrivateFieldGet(this, _RecordingClient_initialPointerTarget, "f").element === element) {
                return;
            }
            __classPrivateFieldSet(this, _RecordingClient_initialPointerTarget, {
                element,
                selectors: __classPrivateFieldGet(this, _RecordingClient_computer, "f").getSelectors(element),
            }, "f");
        });
        _RecordingClient_pointerDownTimestamp.set(this, 0);
        _RecordingClient_onPointerDown.set(this, (event) => {
            if (!__classPrivateFieldGet(this, _RecordingClient_isTrustedEvent, "f").call(this, event)) {
                return;
            }
            __classPrivateFieldSet(this, _RecordingClient_pointerDownTimestamp, event.timeStamp, "f");
            __classPrivateFieldGet(this, _RecordingClient_setInitialPointerTarget, "f").call(this, event);
        });
        _RecordingClient_onClick.set(this, (event) => {
            if (!__classPrivateFieldGet(this, _RecordingClient_isTrustedEvent, "f").call(this, event)) {
                return;
            }
            __classPrivateFieldGet(this, _RecordingClient_setInitialPointerTarget, "f").call(this, event);
            const attributes = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.createClickAttributes)(event, __classPrivateFieldGet(this, _RecordingClient_initialPointerTarget, "f").element);
            if (!attributes) {
                return;
            }
            const duration = event.timeStamp - __classPrivateFieldGet(this, _RecordingClient_pointerDownTimestamp, "f");
            __classPrivateFieldGet(this, _RecordingClient_addStep, "f").call(this, {
                type: event.detail === 2 ? 'doubleClick' : 'click',
                selectors: __classPrivateFieldGet(this, _RecordingClient_initialPointerTarget, "f").selectors,
                duration: duration > 350 ? duration : undefined,
                ...attributes,
            });
        });
        _RecordingClient_onBeforeUnload.set(this, (event) => {
            __classPrivateFieldGet(this, _RecordingClient_logger, "f").log('Unloading...');
            if (!__classPrivateFieldGet(this, _RecordingClient_isTrustedEvent, "f").call(this, event)) {
                return;
            }
            __classPrivateFieldGet(this, _RecordingClient_addStep, "f").call(this, { type: 'beforeUnload' });
        });
        _RecordingClient_addStep.set(this, (step) => {
            const payload = JSON.stringify(step);
            __classPrivateFieldGet(this, _RecordingClient_logger, "f").log(`Adding step: ${payload}`);
            window.addStep(payload);
        });
        __classPrivateFieldSet(this, _RecordingClient_logger, new _Logger_js__WEBPACK_IMPORTED_MODULE_0__.Logger(options.debug ? 'debug' : 'silent'), "f");
        __classPrivateFieldGet(this, _RecordingClient_logger, "f").log('creating a RecordingClient');
        __classPrivateFieldSet(this, _RecordingClient_computer, new _SelectorComputer_js__WEBPACK_IMPORTED_MODULE_1__.SelectorComputer(bindings, __classPrivateFieldGet(this, _RecordingClient_logger, "f"), options.selectorAttribute, options.selectorTypesToRecord), "f");
        if (options.allowUntrustedEvents) {
            __classPrivateFieldSet(this, _RecordingClient_isTrustedEvent, () => true, "f");
        }
        __classPrivateFieldSet(this, _RecordingClient_stopShortcuts, options.stopShortcuts ?? [], "f");
    }
}
_RecordingClient_computer = new WeakMap(), _RecordingClient_isTrustedEvent = new WeakMap(), _RecordingClient_stopShortcuts = new WeakMap(), _RecordingClient_logger = new WeakMap(), _RecordingClient_wasStopShortcutPress = new WeakMap(), _RecordingClient_initialInputTarget = new WeakMap(), _RecordingClient_setInitialInputTarget = new WeakMap(), _RecordingClient_onKeyDown = new WeakMap(), _RecordingClient_onBeforeInput = new WeakMap(), _RecordingClient_onInput = new WeakMap(), _RecordingClient_onKeyUp = new WeakMap(), _RecordingClient_initialPointerTarget = new WeakMap(), _RecordingClient_setInitialPointerTarget = new WeakMap(), _RecordingClient_pointerDownTimestamp = new WeakMap(), _RecordingClient_onPointerDown = new WeakMap(), _RecordingClient_onClick = new WeakMap(), _RecordingClient_onBeforeUnload = new WeakMap(), _RecordingClient_addStep = new WeakMap();
Object.defineProperty(RecordingClient, "defaultSetupOptions", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: Object.freeze({
        debug: false,
        allowUntrustedEvents: false,
        selectorTypesToRecord: [
            'aria',
            'css',
            'text',
            'xpath',
            'pierce',
        ],
    })
});



/***/ }),

/***/ "./src/panels/recorder/injected/util.ts":
/*!**********************************************!*\
  !*** ./src/panels/recorder/injected/util.ts ***!
  \**********************************************/
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


/***/ })

}]);