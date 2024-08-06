"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_injected_injected_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js":
/*!**************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtocolError: () => (/* binding */ ProtocolError),
/* harmony export */   PuppeteerError: () => (/* binding */ PuppeteerError),
/* harmony export */   TargetCloseError: () => (/* binding */ TargetCloseError),
/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),
/* harmony export */   UnsupportedOperation: () => (/* binding */ UnsupportedOperation)
/* harmony export */ });
/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The base class for all Puppeteer-specific errors
 *
 * @public
 */
class PuppeteerError extends Error {
    /**
     * @internal
     */
    constructor(message, options) {
        super(message, options);
        this.name = this.constructor.name;
    }
    /**
     * @internal
     */
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
}
/**
 * TimeoutError is emitted whenever certain operations are terminated due to
 * timeout.
 *
 * @remarks
 * Example operations are {@link Page.waitForSelector | page.waitForSelector} or
 * {@link PuppeteerNode.launch | puppeteer.launch}.
 *
 * @public
 */
class TimeoutError extends PuppeteerError {
}
/**
 * ProtocolError is emitted whenever there is an error from the protocol.
 *
 * @public
 */
class ProtocolError extends PuppeteerError {
    #code;
    #originalMessage = '';
    set code(code) {
        this.#code = code;
    }
    /**
     * @readonly
     * @public
     */
    get code() {
        return this.#code;
    }
    set originalMessage(originalMessage) {
        this.#originalMessage = originalMessage;
    }
    /**
     * @readonly
     * @public
     */
    get originalMessage() {
        return this.#originalMessage;
    }
}
/**
 * Puppeteer will throw this error if a method is not
 * supported by the currently used protocol
 *
 * @public
 */
class UnsupportedOperation extends PuppeteerError {
}
/**
 * @internal
 */
class TargetCloseError extends ProtocolError {
}
//# sourceMappingURL=Errors.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/CSSSelector.js":
/*!*********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/injected/CSSSelector.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssQuerySelector: () => (/* binding */ cssQuerySelector),
/* harmony export */   cssQuerySelectorAll: () => (/* binding */ cssQuerySelectorAll)
/* harmony export */ });
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const cssQuerySelector = (root, selector) => {
    // @ts-expect-error assume element root
    return root.querySelector(selector);
};
const cssQuerySelectorAll = function (root, selector) {
    // @ts-expect-error assume element root
    return root.querySelectorAll(selector);
};
//# sourceMappingURL=CSSSelector.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js":
/*!*****************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pierceQuerySelector: () => (/* binding */ pierceQuerySelector),
/* harmony export */   pierceQuerySelectorAll: () => (/* binding */ pierceQuerySelectorAll)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
const pierceQuerySelector = (root, selector) => {
    let found = null;
    const search = (root) => {
        const iter = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
        do {
            const currentNode = iter.currentNode;
            if (currentNode.shadowRoot) {
                search(currentNode.shadowRoot);
            }
            if (currentNode instanceof ShadowRoot) {
                continue;
            }
            if (currentNode !== root && !found && currentNode.matches(selector)) {
                found = currentNode;
            }
        } while (!found && iter.nextNode());
    };
    if (root instanceof Document) {
        root = root.documentElement;
    }
    search(root);
    return found;
};
/**
 * @internal
 */
const pierceQuerySelectorAll = (element, selector) => {
    const result = [];
    const collect = (root) => {
        const iter = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
        do {
            const currentNode = iter.currentNode;
            if (currentNode.shadowRoot) {
                collect(currentNode.shadowRoot);
            }
            if (currentNode instanceof ShadowRoot) {
                continue;
            }
            if (currentNode !== root && currentNode.matches(selector)) {
                result.push(currentNode);
            }
        } while (iter.nextNode());
    };
    if (element instanceof Document) {
        element = element.documentElement;
    }
    collect(element);
    return result;
};
//# sourceMappingURL=PierceQuerySelector.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/Poller.js":
/*!****************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/injected/Poller.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntervalPoller: () => (/* binding */ IntervalPoller),
/* harmony export */   MutationPoller: () => (/* binding */ MutationPoller),
/* harmony export */   RAFPoller: () => (/* binding */ RAFPoller)
/* harmony export */ });
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * @internal
 */
class MutationPoller {
    #fn;
    #root;
    #observer;
    #deferred;
    constructor(fn, root) {
        this.#fn = fn;
        this.#root = root;
    }
    async start() {
        const deferred = (this.#deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create());
        const result = await this.#fn();
        if (result) {
            deferred.resolve(result);
            return;
        }
        this.#observer = new MutationObserver(async () => {
            const result = await this.#fn();
            if (!result) {
                return;
            }
            deferred.resolve(result);
            await this.stop();
        });
        this.#observer.observe(this.#root, {
            childList: true,
            subtree: true,
            attributes: true,
        });
    }
    async stop() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.#deferred, 'Polling never started.');
        if (!this.#deferred.finished()) {
            this.#deferred.reject(new Error('Polling stopped'));
        }
        if (this.#observer) {
            this.#observer.disconnect();
            this.#observer = undefined;
        }
    }
    result() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.#deferred, 'Polling never started.');
        return this.#deferred.valueOrThrow();
    }
}
/**
 * @internal
 */
class RAFPoller {
    #fn;
    #deferred;
    constructor(fn) {
        this.#fn = fn;
    }
    async start() {
        const deferred = (this.#deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create());
        const result = await this.#fn();
        if (result) {
            deferred.resolve(result);
            return;
        }
        const poll = async () => {
            if (deferred.finished()) {
                return;
            }
            const result = await this.#fn();
            if (!result) {
                window.requestAnimationFrame(poll);
                return;
            }
            deferred.resolve(result);
            await this.stop();
        };
        window.requestAnimationFrame(poll);
    }
    async stop() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.#deferred, 'Polling never started.');
        if (!this.#deferred.finished()) {
            this.#deferred.reject(new Error('Polling stopped'));
        }
    }
    result() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.#deferred, 'Polling never started.');
        return this.#deferred.valueOrThrow();
    }
}
/**
 * @internal
 */
class IntervalPoller {
    #fn;
    #ms;
    #interval;
    #deferred;
    constructor(fn, ms) {
        this.#fn = fn;
        this.#ms = ms;
    }
    async start() {
        const deferred = (this.#deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create());
        const result = await this.#fn();
        if (result) {
            deferred.resolve(result);
            return;
        }
        this.#interval = setInterval(async () => {
            const result = await this.#fn();
            if (!result) {
                return;
            }
            deferred.resolve(result);
            await this.stop();
        }, this.#ms);
    }
    async stop() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.#deferred, 'Polling never started.');
        if (!this.#deferred.finished()) {
            this.#deferred.reject(new Error('Polling stopped'));
        }
        if (this.#interval) {
            clearInterval(this.#interval);
            this.#interval = undefined;
        }
    }
    result() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.#deferred, 'Polling never started.');
        return this.#deferred.valueOrThrow();
    }
}
//# sourceMappingURL=Poller.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/injected.js":
/*!******************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/injected/injected.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */ var _util_Function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Function.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js");
/* harmony import */ var _ARIAQuerySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ARIAQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/ARIAQuerySelector.js");
/* harmony import */ var _CSSSelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSSelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/CSSSelector.js");
/* harmony import */ var _CustomQuerySelector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/CustomQuerySelector.js");
/* harmony import */ var _PierceQuerySelector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PierceQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js");
/* harmony import */ var _Poller_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Poller.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/Poller.js");
/* harmony import */ var _PQuerySelector_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/PQuerySelector.js");
/* harmony import */ var _TextContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TextContent.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js");
/* harmony import */ var _TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TextQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/util.js");
/* harmony import */ var _XPathQuerySelector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./XPathQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/XPathQuerySelector.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */












/**
 * @internal
 */
const PuppeteerUtil = Object.freeze({
    ..._ARIAQuerySelector_js__WEBPACK_IMPORTED_MODULE_2__,
    ..._CustomQuerySelector_js__WEBPACK_IMPORTED_MODULE_4__,
    ..._PierceQuerySelector_js__WEBPACK_IMPORTED_MODULE_5__,
    ..._PQuerySelector_js__WEBPACK_IMPORTED_MODULE_7__,
    ..._TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_9__,
    ..._util_js__WEBPACK_IMPORTED_MODULE_10__,
    ..._XPathQuerySelector_js__WEBPACK_IMPORTED_MODULE_11__,
    ..._CSSSelector_js__WEBPACK_IMPORTED_MODULE_3__,
    Deferred: _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred,
    createFunction: _util_Function_js__WEBPACK_IMPORTED_MODULE_1__.createFunction,
    createTextContent: _TextContent_js__WEBPACK_IMPORTED_MODULE_8__.createTextContent,
    IntervalPoller: _Poller_js__WEBPACK_IMPORTED_MODULE_6__.IntervalPoller,
    isSuitableNodeForTextMatching: _TextContent_js__WEBPACK_IMPORTED_MODULE_8__.isSuitableNodeForTextMatching,
    MutationPoller: _Poller_js__WEBPACK_IMPORTED_MODULE_6__.MutationPoller,
    RAFPoller: _Poller_js__WEBPACK_IMPORTED_MODULE_6__.RAFPoller,
});
/**
 * @internal
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PuppeteerUtil);
//# sourceMappingURL=injected.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js":
/*!**************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Creates and returns a deferred object along with the resolve/reject functions.
 *
 * If the deferred has not been resolved/rejected within the `timeout` period,
 * the deferred gets resolves with a timeout error. `timeout` has to be greater than 0 or
 * it is ignored.
 *
 * @internal
 */
class Deferred {
    static create(opts) {
        return new Deferred(opts);
    }
    static async race(awaitables) {
        const deferredWithTimeout = new Set();
        try {
            const promises = awaitables.map(value => {
                if (value instanceof Deferred) {
                    if (value.#timeoutId) {
                        deferredWithTimeout.add(value);
                    }
                    return value.valueOrThrow();
                }
                return value;
            });
            // eslint-disable-next-line no-restricted-syntax
            return await Promise.race(promises);
        }
        finally {
            for (const deferred of deferredWithTimeout) {
                // We need to stop the timeout else
                // Node.JS will keep running the event loop till the
                // timer executes
                deferred.reject(new Error('Timeout cleared'));
            }
        }
    }
    #isResolved = false;
    #isRejected = false;
    #value;
    // SAFETY: This is ensured by #taskPromise.
    #resolve;
    #taskPromise = new Promise(resolve => {
        this.#resolve = resolve;
    });
    #timeoutId;
    #timeoutError;
    constructor(opts) {
        if (opts && opts.timeout > 0) {
            this.#timeoutError = new _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.TimeoutError(opts.message);
            this.#timeoutId = setTimeout(() => {
                this.reject(this.#timeoutError);
            }, opts.timeout);
        }
    }
    #finish(value) {
        clearTimeout(this.#timeoutId);
        this.#value = value;
        this.#resolve();
    }
    resolve(value) {
        if (this.#isRejected || this.#isResolved) {
            return;
        }
        this.#isResolved = true;
        this.#finish(value);
    }
    reject(error) {
        if (this.#isRejected || this.#isResolved) {
            return;
        }
        this.#isRejected = true;
        this.#finish(error);
    }
    resolved() {
        return this.#isResolved;
    }
    finished() {
        return this.#isResolved || this.#isRejected;
    }
    value() {
        return this.#value;
    }
    #promise;
    valueOrThrow() {
        if (!this.#promise) {
            this.#promise = (async () => {
                await this.#taskPromise;
                if (this.#isRejected) {
                    throw this.#value;
                }
                return this.#value;
            })();
        }
        return this.#promise;
    }
}
//# sourceMappingURL=Deferred.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js":
/*!**************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFunction: () => (/* binding */ createFunction),
/* harmony export */   interpolateFunction: () => (/* binding */ interpolateFunction),
/* harmony export */   stringifyFunction: () => (/* binding */ stringifyFunction)
/* harmony export */ });
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const createdFunctions = new Map();
/**
 * Creates a function from a string.
 *
 * @internal
 */
const createFunction = (functionValue) => {
    let fn = createdFunctions.get(functionValue);
    if (fn) {
        return fn;
    }
    fn = new Function(`return ${functionValue}`)();
    createdFunctions.set(functionValue, fn);
    return fn;
};
/**
 * @internal
 */
function stringifyFunction(fn) {
    let value = fn.toString();
    try {
        new Function(`(${value})`);
    }
    catch (err) {
        if (err.message.includes(`Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive`)) {
            // The content security policy does not allow Function eval. Let's
            // assume the value might be valid as is.
            return value;
        }
        // This means we might have a function shorthand (e.g. `test(){}`). Let's
        // try prefixing.
        let prefix = 'function ';
        if (value.startsWith('async ')) {
            prefix = `async ${prefix}`;
            value = value.substring('async '.length);
        }
        value = `${prefix}${value}`;
        try {
            new Function(`(${value})`);
        }
        catch {
            // We tried hard to serialize, but there's a weird beast here.
            throw new Error('Passed function cannot be serialized!');
        }
    }
    return value;
}
/**
 * Replaces `PLACEHOLDER`s with the given replacements.
 *
 * All replacements must be valid JS code.
 *
 * @example
 *
 * ```ts
 * interpolateFunction(() => PLACEHOLDER('test'), {test: 'void 0'});
 * // Equivalent to () => void 0
 * ```
 *
 * @internal
 */
const interpolateFunction = (fn, replacements) => {
    let value = stringifyFunction(fn);
    for (const [name, jsValue] of Object.entries(replacements)) {
        value = value.replace(new RegExp(`PLACEHOLDER\\(\\s*(?:'${name}'|"${name}")\\s*\\)`, 'g'), 
        // Wrapping this ensures tersers that accidentally inline PLACEHOLDER calls
        // are still valid. Without, we may get calls like ()=>{...}() which is
        // not valid.
        `(${jsValue})`);
    }
    return createFunction(value);
};
//# sourceMappingURL=Function.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js":
/*!************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ assert)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Asserts that the given value is truthy.
 * @param value - some conditional statement
 * @param message - the error message to throw if the value is not truthy.
 *
 * @internal
 */
const assert = (value, message) => {
    if (!value) {
        throw new Error(message);
    }
};
//# sourceMappingURL=assert.js.map

/***/ })

}]);