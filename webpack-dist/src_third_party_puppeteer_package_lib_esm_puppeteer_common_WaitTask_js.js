"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_common_WaitTask_js"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/LazyArg.js":
/*!*******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/common/LazyArg.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyArg: () => (/* binding */ LazyArg)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
class LazyArg {
    static create = (get) => {
        // We don't want to introduce LazyArg to the type system, otherwise we would
        // have to make it public.
        return new LazyArg(get);
    };
    #get;
    constructor(get) {
        this.#get = get;
    }
    async get(context) {
        return await this.#get(context);
    }
}
//# sourceMappingURL=LazyArg.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/WaitTask.js":
/*!********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/common/WaitTask.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskManager: () => (/* binding */ TaskManager),
/* harmony export */   WaitTask: () => (/* binding */ WaitTask)
/* harmony export */ });
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */ var _util_Function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Function.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js");
/* harmony import */ var _Errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Errors.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LazyArg.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/LazyArg.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */





/**
 * @internal
 */
class WaitTask {
    #world;
    #polling;
    #root;
    #fn;
    #args;
    #timeout;
    #timeoutError;
    #result = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred.create();
    #poller;
    #signal;
    #reruns = [];
    constructor(world, options, fn, ...args) {
        this.#world = world;
        this.#polling = options.polling;
        this.#root = options.root;
        this.#signal = options.signal;
        this.#signal?.addEventListener('abort', () => {
            void this.terminate(this.#signal?.reason);
        }, {
            once: true,
        });
        switch (typeof fn) {
            case 'string':
                this.#fn = `() => {return (${fn});}`;
                break;
            default:
                this.#fn = (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_2__.stringifyFunction)(fn);
                break;
        }
        this.#args = args;
        this.#world.taskManager.add(this);
        if (options.timeout) {
            this.#timeoutError = new _Errors_js__WEBPACK_IMPORTED_MODULE_3__.TimeoutError(`Waiting failed: ${options.timeout}ms exceeded`);
            this.#timeout = setTimeout(() => {
                void this.terminate(this.#timeoutError);
            }, options.timeout);
        }
        void this.rerun();
    }
    get result() {
        return this.#result.valueOrThrow();
    }
    async rerun() {
        for (const prev of this.#reruns) {
            prev.abort();
        }
        this.#reruns.length = 0;
        const controller = new AbortController();
        this.#reruns.push(controller);
        try {
            switch (this.#polling) {
                case 'raf':
                    this.#poller = await this.#world.evaluateHandle(({ RAFPoller, createFunction }, fn, ...args) => {
                        const fun = createFunction(fn);
                        return new RAFPoller(() => {
                            return fun(...args);
                        });
                    }, _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__.LazyArg.create(context => {
                        return context.puppeteerUtil;
                    }), this.#fn, ...this.#args);
                    break;
                case 'mutation':
                    this.#poller = await this.#world.evaluateHandle(({ MutationPoller, createFunction }, root, fn, ...args) => {
                        const fun = createFunction(fn);
                        return new MutationPoller(() => {
                            return fun(...args);
                        }, root || document);
                    }, _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__.LazyArg.create(context => {
                        return context.puppeteerUtil;
                    }), this.#root, this.#fn, ...this.#args);
                    break;
                default:
                    this.#poller = await this.#world.evaluateHandle(({ IntervalPoller, createFunction }, ms, fn, ...args) => {
                        const fun = createFunction(fn);
                        return new IntervalPoller(() => {
                            return fun(...args);
                        }, ms);
                    }, _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__.LazyArg.create(context => {
                        return context.puppeteerUtil;
                    }), this.#polling, this.#fn, ...this.#args);
                    break;
            }
            await this.#poller.evaluate(poller => {
                void poller.start();
            });
            const result = await this.#poller.evaluateHandle(poller => {
                return poller.result();
            });
            this.#result.resolve(result);
            await this.terminate();
        }
        catch (error) {
            if (controller.signal.aborted) {
                return;
            }
            const badError = this.getBadError(error);
            if (badError) {
                await this.terminate(badError);
            }
        }
    }
    async terminate(error) {
        this.#world.taskManager.delete(this);
        clearTimeout(this.#timeout);
        if (error && !this.#result.finished()) {
            this.#result.reject(error);
        }
        if (this.#poller) {
            try {
                await this.#poller.evaluateHandle(async (poller) => {
                    await poller.stop();
                });
                if (this.#poller) {
                    await this.#poller.dispose();
                    this.#poller = undefined;
                }
            }
            catch {
                // Ignore errors since they most likely come from low-level cleanup.
            }
        }
    }
    /**
     * Not all errors lead to termination. They usually imply we need to rerun the task.
     */
    getBadError(error) {
        if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__.isErrorLike)(error)) {
            // When frame is detached the task should have been terminated by the IsolatedWorld.
            // This can fail if we were adding this task while the frame was detached,
            // so we terminate here instead.
            if (error.message.includes('Execution context is not available in detached frame')) {
                return new Error('Waiting failed: Frame detached');
            }
            // When the page is navigated, the promise is rejected.
            // We will try again in the new execution context.
            if (error.message.includes('Execution context was destroyed')) {
                return;
            }
            // We could have tried to evaluate in a context which was already
            // destroyed.
            if (error.message.includes('Cannot find context with specified id')) {
                return;
            }
            // Errors coming from WebDriver BiDi. TODO: Adjust messages after
            // https://github.com/w3c/webdriver-bidi/issues/540 is resolved.
            if (error.message.includes("AbortError: Actor 'MessageHandlerFrame' destroyed")) {
                return;
            }
            return error;
        }
        return new Error('WaitTask failed with an error', {
            cause: error,
        });
    }
}
/**
 * @internal
 */
class TaskManager {
    #tasks = new Set();
    add(task) {
        this.#tasks.add(task);
    }
    delete(task) {
        this.#tasks.delete(task);
    }
    terminateAll(error) {
        for (const task of this.#tasks) {
            void task.terminate(error);
        }
        this.#tasks.clear();
    }
    async rerunAll() {
        await Promise.all([...this.#tasks].map(task => {
            return task.rerun();
        }));
    }
}
//# sourceMappingURL=WaitTask.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
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

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js":
/*!*******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProtocolErrorMessage: () => (/* binding */ createProtocolErrorMessage),
/* harmony export */   isErrnoException: () => (/* binding */ isErrnoException),
/* harmony export */   isErrorLike: () => (/* binding */ isErrorLike),
/* harmony export */   rewriteError: () => (/* binding */ rewriteError)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
function isErrorLike(obj) {
    return (typeof obj === 'object' && obj !== null && 'name' in obj && 'message' in obj);
}
/**
 * @internal
 */
function isErrnoException(obj) {
    return (isErrorLike(obj) &&
        ('errno' in obj || 'code' in obj || 'path' in obj || 'syscall' in obj));
}
/**
 * @internal
 */
function rewriteError(error, message, originalMessage) {
    error.message = message;
    error.originalMessage = originalMessage ?? error.originalMessage;
    return error;
}
/**
 * @internal
 */
function createProtocolErrorMessage(object) {
    let message = object.error.message;
    // TODO: remove the type checks when we stop connecting to BiDi with a CDP
    // client.
    if (object.error &&
        typeof object.error === 'object' &&
        'data' in object.error) {
        message += ` ${object.error.data}`;
    }
    return message;
}
//# sourceMappingURL=ErrorLike.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ })

}]);