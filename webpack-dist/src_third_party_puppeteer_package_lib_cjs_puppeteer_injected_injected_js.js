"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_injected_injected_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TargetCloseError = exports.UnsupportedOperation = exports.ProtocolError = exports.TimeoutError = exports.PuppeteerError = void 0;
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
exports.PuppeteerError = PuppeteerError;
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
exports.TimeoutError = TimeoutError;
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
exports.ProtocolError = ProtocolError;
/**
 * Puppeteer will throw this error if a method is not
 * supported by the currently used protocol
 *
 * @public
 */
class UnsupportedOperation extends PuppeteerError {
}
exports.UnsupportedOperation = UnsupportedOperation;
/**
 * @internal
 */
class TargetCloseError extends ProtocolError {
}
exports.TargetCloseError = TargetCloseError;
//# sourceMappingURL=Errors.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/CSSSelector.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/CSSSelector.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cssQuerySelectorAll = exports.cssQuerySelector = void 0;
const cssQuerySelector = (root, selector) => {
    // @ts-expect-error assume element root
    return root.querySelector(selector);
};
exports.cssQuerySelector = cssQuerySelector;
const cssQuerySelectorAll = function (root, selector) {
    // @ts-expect-error assume element root
    return root.querySelectorAll(selector);
};
exports.cssQuerySelectorAll = cssQuerySelectorAll;
//# sourceMappingURL=CSSSelector.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/PierceQuerySelector.js":
/*!*********************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/PierceQuerySelector.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pierceQuerySelectorAll = exports.pierceQuerySelector = void 0;
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
exports.pierceQuerySelector = pierceQuerySelector;
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
exports.pierceQuerySelectorAll = pierceQuerySelectorAll;
//# sourceMappingURL=PierceQuerySelector.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/Poller.js":
/*!********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/Poller.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntervalPoller = exports.RAFPoller = exports.MutationPoller = void 0;
const assert_js_1 = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js");
const Deferred_js_1 = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Deferred.js");
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
        const deferred = (this.#deferred = Deferred_js_1.Deferred.create());
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
        (0, assert_js_1.assert)(this.#deferred, 'Polling never started.');
        if (!this.#deferred.finished()) {
            this.#deferred.reject(new Error('Polling stopped'));
        }
        if (this.#observer) {
            this.#observer.disconnect();
            this.#observer = undefined;
        }
    }
    result() {
        (0, assert_js_1.assert)(this.#deferred, 'Polling never started.');
        return this.#deferred.valueOrThrow();
    }
}
exports.MutationPoller = MutationPoller;
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
        const deferred = (this.#deferred = Deferred_js_1.Deferred.create());
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
        (0, assert_js_1.assert)(this.#deferred, 'Polling never started.');
        if (!this.#deferred.finished()) {
            this.#deferred.reject(new Error('Polling stopped'));
        }
    }
    result() {
        (0, assert_js_1.assert)(this.#deferred, 'Polling never started.');
        return this.#deferred.valueOrThrow();
    }
}
exports.RAFPoller = RAFPoller;
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
        const deferred = (this.#deferred = Deferred_js_1.Deferred.create());
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
        (0, assert_js_1.assert)(this.#deferred, 'Polling never started.');
        if (!this.#deferred.finished()) {
            this.#deferred.reject(new Error('Polling stopped'));
        }
        if (this.#interval) {
            clearInterval(this.#interval);
            this.#interval = undefined;
        }
    }
    result() {
        (0, assert_js_1.assert)(this.#deferred, 'Polling never started.');
        return this.#deferred.valueOrThrow();
    }
}
exports.IntervalPoller = IntervalPoller;
//# sourceMappingURL=Poller.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/injected.js":
/*!**********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/injected.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Deferred_js_1 = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Deferred.js");
const Function_js_1 = __webpack_require__(/*! ../util/Function.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Function.js");
const ARIAQuerySelector = __importStar(__webpack_require__(/*! ./ARIAQuerySelector.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/ARIAQuerySelector.js"));
const CSSSelector = __importStar(__webpack_require__(/*! ./CSSSelector.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/CSSSelector.js"));
const CustomQuerySelectors = __importStar(__webpack_require__(/*! ./CustomQuerySelector.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/CustomQuerySelector.js"));
const PierceQuerySelector = __importStar(__webpack_require__(/*! ./PierceQuerySelector.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/PierceQuerySelector.js"));
const Poller_js_1 = __webpack_require__(/*! ./Poller.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/Poller.js");
const PQuerySelector = __importStar(__webpack_require__(/*! ./PQuerySelector.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/PQuerySelector.js"));
const TextContent_js_1 = __webpack_require__(/*! ./TextContent.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/TextContent.js");
const TextQuerySelector = __importStar(__webpack_require__(/*! ./TextQuerySelector.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/TextQuerySelector.js"));
const util = __importStar(__webpack_require__(/*! ./util.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/util.js"));
const XPathQuerySelector = __importStar(__webpack_require__(/*! ./XPathQuerySelector.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/XPathQuerySelector.js"));
/**
 * @internal
 */
const PuppeteerUtil = Object.freeze({
    ...ARIAQuerySelector,
    ...CustomQuerySelectors,
    ...PierceQuerySelector,
    ...PQuerySelector,
    ...TextQuerySelector,
    ...util,
    ...XPathQuerySelector,
    ...CSSSelector,
    Deferred: Deferred_js_1.Deferred,
    createFunction: Function_js_1.createFunction,
    createTextContent: TextContent_js_1.createTextContent,
    IntervalPoller: Poller_js_1.IntervalPoller,
    isSuitableNodeForTextMatching: TextContent_js_1.isSuitableNodeForTextMatching,
    MutationPoller: Poller_js_1.MutationPoller,
    RAFPoller: Poller_js_1.RAFPoller,
});
/**
 * @internal
 */
exports["default"] = PuppeteerUtil;
//# sourceMappingURL=injected.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Deferred.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Deferred.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Deferred = void 0;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const Errors_js_1 = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js");
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
            this.#timeoutError = new Errors_js_1.TimeoutError(opts.message);
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
exports.Deferred = Deferred;
//# sourceMappingURL=Deferred.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Function.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Function.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.interpolateFunction = exports.stringifyFunction = exports.createFunction = void 0;
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
exports.createFunction = createFunction;
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
exports.stringifyFunction = stringifyFunction;
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
    return (0, exports.createFunction)(value);
};
exports.interpolateFunction = interpolateFunction;
//# sourceMappingURL=Function.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js":
/*!****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assert = void 0;
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
exports.assert = assert;
//# sourceMappingURL=assert.js.map

/***/ })

}]);