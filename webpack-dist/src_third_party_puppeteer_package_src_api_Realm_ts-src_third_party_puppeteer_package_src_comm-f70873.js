"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_api_Realm_ts-src_third_party_puppeteer_package_src_comm-f70873"],{

/***/ "./src/third_party/puppeteer/package/src/api/Realm.ts":
/*!************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/Realm.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Realm: () => (/* binding */ Realm)
/* harmony export */ });
/* harmony import */ var _common_WaitTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/WaitTask.js */ "./src/third_party/puppeteer/package/src/common/WaitTask.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
var _Realm_disposed;


/**
 * @internal
 */
class Realm {
    constructor(timeoutSettings) {
        Object.defineProperty(this, "timeoutSettings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "taskManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _common_WaitTask_js__WEBPACK_IMPORTED_MODULE_0__.TaskManager()
        });
        _Realm_disposed.set(this, false);
        this.timeoutSettings = timeoutSettings;
    }
    async waitForFunction(pageFunction, options = {}, ...args) {
        const { polling = 'raf', timeout = this.timeoutSettings.timeout(), root, signal, } = options;
        if (typeof polling === 'number' && polling < 0) {
            throw new Error('Cannot poll with non-positive interval');
        }
        const waitTask = new _common_WaitTask_js__WEBPACK_IMPORTED_MODULE_0__.WaitTask(this, {
            polling,
            root,
            timeout,
            signal,
        }, pageFunction, ...args);
        return await waitTask.result;
    }
    get disposed() {
        return __classPrivateFieldGet(this, _Realm_disposed, "f");
    }
    /** @internal */
    dispose() {
        __classPrivateFieldSet(this, _Realm_disposed, true, "f");
        this.taskManager.terminateAll(new Error('waitForFunction failed: frame got detached.'));
    }
    /** @internal */
    [(_Realm_disposed = new WeakMap(), _util_disposable_js__WEBPACK_IMPORTED_MODULE_1__.disposeSymbol)]() {
        this.dispose();
    }
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/Errors.ts":
/*!****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/Errors.ts ***!
  \****************************************************************/
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
var _ProtocolError_code, _ProtocolError_originalMessage;
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
    constructor() {
        super(...arguments);
        _ProtocolError_code.set(this, void 0);
        _ProtocolError_originalMessage.set(this, '');
    }
    set code(code) {
        __classPrivateFieldSet(this, _ProtocolError_code, code, "f");
    }
    /**
     * @readonly
     * @public
     */
    get code() {
        return __classPrivateFieldGet(this, _ProtocolError_code, "f");
    }
    set originalMessage(originalMessage) {
        __classPrivateFieldSet(this, _ProtocolError_originalMessage, originalMessage, "f");
    }
    /**
     * @readonly
     * @public
     */
    get originalMessage() {
        return __classPrivateFieldGet(this, _ProtocolError_originalMessage, "f");
    }
}
_ProtocolError_code = new WeakMap(), _ProtocolError_originalMessage = new WeakMap();
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


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/LazyArg.ts":
/*!*****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/LazyArg.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyArg: () => (/* binding */ LazyArg)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
var _LazyArg_get;
/**
 * @internal
 */
class LazyArg {
    constructor(get) {
        _LazyArg_get.set(this, void 0);
        __classPrivateFieldSet(this, _LazyArg_get, get, "f");
    }
    async get(context) {
        return await __classPrivateFieldGet(this, _LazyArg_get, "f").call(this, context);
    }
}
_LazyArg_get = new WeakMap();
Object.defineProperty(LazyArg, "create", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (get) => {
        // We don't want to introduce LazyArg to the type system, otherwise we would
        // have to make it public.
        return new LazyArg(get);
    }
});


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/util/Deferred.ts":
/*!****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/util/Deferred.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
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
var _Deferred_instances, _Deferred_isResolved, _Deferred_isRejected, _Deferred_value, _Deferred_resolve, _Deferred_taskPromise, _Deferred_timeoutId, _Deferred_timeoutError, _Deferred_finish, _Deferred_promise;
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
                    if (__classPrivateFieldGet(value, _Deferred_timeoutId, "f")) {
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
    constructor(opts) {
        _Deferred_instances.add(this);
        _Deferred_isResolved.set(this, false);
        _Deferred_isRejected.set(this, false);
        _Deferred_value.set(this, void 0);
        // SAFETY: This is ensured by #taskPromise.
        _Deferred_resolve.set(this, void 0);
        _Deferred_taskPromise.set(this, new Promise(resolve => {
            __classPrivateFieldSet(this, _Deferred_resolve, resolve, "f");
        }));
        _Deferred_timeoutId.set(this, void 0);
        _Deferred_timeoutError.set(this, void 0);
        _Deferred_promise.set(this, void 0);
        if (opts && opts.timeout > 0) {
            __classPrivateFieldSet(this, _Deferred_timeoutError, new _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.TimeoutError(opts.message), "f");
            __classPrivateFieldSet(this, _Deferred_timeoutId, setTimeout(() => {
                this.reject(__classPrivateFieldGet(this, _Deferred_timeoutError, "f"));
            }, opts.timeout), "f");
        }
    }
    resolve(value) {
        if (__classPrivateFieldGet(this, _Deferred_isRejected, "f") || __classPrivateFieldGet(this, _Deferred_isResolved, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _Deferred_isResolved, true, "f");
        __classPrivateFieldGet(this, _Deferred_instances, "m", _Deferred_finish).call(this, value);
    }
    reject(error) {
        if (__classPrivateFieldGet(this, _Deferred_isRejected, "f") || __classPrivateFieldGet(this, _Deferred_isResolved, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _Deferred_isRejected, true, "f");
        __classPrivateFieldGet(this, _Deferred_instances, "m", _Deferred_finish).call(this, error);
    }
    resolved() {
        return __classPrivateFieldGet(this, _Deferred_isResolved, "f");
    }
    finished() {
        return __classPrivateFieldGet(this, _Deferred_isResolved, "f") || __classPrivateFieldGet(this, _Deferred_isRejected, "f");
    }
    value() {
        return __classPrivateFieldGet(this, _Deferred_value, "f");
    }
    valueOrThrow() {
        if (!__classPrivateFieldGet(this, _Deferred_promise, "f")) {
            __classPrivateFieldSet(this, _Deferred_promise, (async () => {
                await __classPrivateFieldGet(this, _Deferred_taskPromise, "f");
                if (__classPrivateFieldGet(this, _Deferred_isRejected, "f")) {
                    throw __classPrivateFieldGet(this, _Deferred_value, "f");
                }
                return __classPrivateFieldGet(this, _Deferred_value, "f");
            })(), "f");
        }
        return __classPrivateFieldGet(this, _Deferred_promise, "f");
    }
}
_Deferred_isResolved = new WeakMap(), _Deferred_isRejected = new WeakMap(), _Deferred_value = new WeakMap(), _Deferred_resolve = new WeakMap(), _Deferred_taskPromise = new WeakMap(), _Deferred_timeoutId = new WeakMap(), _Deferred_timeoutError = new WeakMap(), _Deferred_promise = new WeakMap(), _Deferred_instances = new WeakSet(), _Deferred_finish = function _Deferred_finish(value) {
    clearTimeout(__classPrivateFieldGet(this, _Deferred_timeoutId, "f"));
    __classPrivateFieldSet(this, _Deferred_value, value, "f");
    __classPrivateFieldGet(this, _Deferred_resolve, "f").call(this);
};


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/util/ErrorLike.ts":
/*!*****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/util/ErrorLike.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/util/Function.ts":
/*!****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/util/Function.ts ***!
  \****************************************************************/
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


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/util/disposable.ts":
/*!******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/util/disposable.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncDisposableStack: () => (/* binding */ AsyncDisposableStack),
/* harmony export */   DisposableStack: () => (/* binding */ DisposableStack),
/* harmony export */   asyncDisposeSymbol: () => (/* binding */ asyncDisposeSymbol),
/* harmony export */   disposeSymbol: () => (/* binding */ disposeSymbol)
/* harmony export */ });
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
var _a, _b;
var _DisposableStack_disposed, _DisposableStack_stack, _c, _d, _AsyncDisposableStack_disposed, _AsyncDisposableStack_stack, _e, _f;
(_a = Symbol).dispose ?? (_a.dispose = Symbol('dispose'));
(_b = Symbol).asyncDispose ?? (_b.asyncDispose = Symbol('asyncDispose'));
/**
 * @internal
 */
const disposeSymbol = Symbol.dispose;
/**
 * @internal
 */
const asyncDisposeSymbol = Symbol.asyncDispose;
/**
 * @internal
 */
class DisposableStack {
    constructor() {
        _DisposableStack_disposed.set(this, false);
        _DisposableStack_stack.set(this, []);
        Object.defineProperty(this, _c, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.dispose
        });
        Object.defineProperty(this, _d, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'DisposableStack'
        });
    }
    /**
     * Returns a value indicating whether this stack has been disposed.
     */
    get disposed() {
        return __classPrivateFieldGet(this, _DisposableStack_disposed, "f");
    }
    /**
     * Disposes each resource in the stack in the reverse order that they were added.
     */
    dispose() {
        if (__classPrivateFieldGet(this, _DisposableStack_disposed, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _DisposableStack_disposed, true, "f");
        for (const resource of __classPrivateFieldGet(this, _DisposableStack_stack, "f").reverse()) {
            resource[disposeSymbol]();
        }
    }
    /**
     * Adds a disposable resource to the stack, returning the resource.
     *
     * @param value - The resource to add. `null` and `undefined` will not be added,
     * but will be returned.
     * @returns The provided `value`.
     */
    use(value) {
        if (value) {
            __classPrivateFieldGet(this, _DisposableStack_stack, "f").push(value);
        }
        return value;
    }
    /**
     * Adds a value and associated disposal callback as a resource to the stack.
     *
     * @param value - The value to add.
     * @param onDispose - The callback to use in place of a `[disposeSymbol]()`
     * method. Will be invoked with `value` as the first parameter.
     * @returns The provided `value`.
     */
    adopt(value, onDispose) {
        __classPrivateFieldGet(this, _DisposableStack_stack, "f").push({
            [disposeSymbol]() {
                onDispose(value);
            },
        });
        return value;
    }
    /**
     * Adds a callback to be invoked when the stack is disposed.
     */
    defer(onDispose) {
        __classPrivateFieldGet(this, _DisposableStack_stack, "f").push({
            [disposeSymbol]() {
                onDispose();
            },
        });
    }
    /**
     * Move all resources out of this stack and into a new `DisposableStack`, and
     * marks this stack as disposed.
     *
     * @example
     *
     * ```ts
     * class C {
     *   #res1: Disposable;
     *   #res2: Disposable;
     *   #disposables: DisposableStack;
     *   constructor() {
     *     // stack will be disposed when exiting constructor for any reason
     *     using stack = new DisposableStack();
     *
     *     // get first resource
     *     this.#res1 = stack.use(getResource1());
     *
     *     // get second resource. If this fails, both `stack` and `#res1` will be disposed.
     *     this.#res2 = stack.use(getResource2());
     *
     *     // all operations succeeded, move resources out of `stack` so that
     *     // they aren't disposed when constructor exits
     *     this.#disposables = stack.move();
     *   }
     *
     *   [disposeSymbol]() {
     *     this.#disposables.dispose();
     *   }
     * }
     * ```
     */
    move() {
        if (__classPrivateFieldGet(this, _DisposableStack_disposed, "f")) {
            throw new ReferenceError('a disposed stack can not use anything new'); // step 3
        }
        const stack = new DisposableStack(); // step 4-5
        __classPrivateFieldSet(stack, _DisposableStack_stack, __classPrivateFieldGet(this, _DisposableStack_stack, "f"), "f");
        __classPrivateFieldSet(this, _DisposableStack_disposed, true, "f");
        return stack;
    }
}
_DisposableStack_disposed = new WeakMap(), _DisposableStack_stack = new WeakMap(), _c = disposeSymbol, _d = Symbol.toStringTag;
/**
 * @internal
 */
class AsyncDisposableStack {
    constructor() {
        _AsyncDisposableStack_disposed.set(this, false);
        _AsyncDisposableStack_stack.set(this, []);
        Object.defineProperty(this, _e, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.dispose
        });
        Object.defineProperty(this, _f, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AsyncDisposableStack'
        });
    }
    /**
     * Returns a value indicating whether this stack has been disposed.
     */
    get disposed() {
        return __classPrivateFieldGet(this, _AsyncDisposableStack_disposed, "f");
    }
    /**
     * Disposes each resource in the stack in the reverse order that they were added.
     */
    async dispose() {
        if (__classPrivateFieldGet(this, _AsyncDisposableStack_disposed, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _AsyncDisposableStack_disposed, true, "f");
        for (const resource of __classPrivateFieldGet(this, _AsyncDisposableStack_stack, "f").reverse()) {
            await resource[asyncDisposeSymbol]();
        }
    }
    /**
     * Adds a disposable resource to the stack, returning the resource.
     *
     * @param value - The resource to add. `null` and `undefined` will not be added,
     * but will be returned.
     * @returns The provided `value`.
     */
    use(value) {
        if (value) {
            __classPrivateFieldGet(this, _AsyncDisposableStack_stack, "f").push(value);
        }
        return value;
    }
    /**
     * Adds a value and associated disposal callback as a resource to the stack.
     *
     * @param value - The value to add.
     * @param onDispose - The callback to use in place of a `[disposeSymbol]()`
     * method. Will be invoked with `value` as the first parameter.
     * @returns The provided `value`.
     */
    adopt(value, onDispose) {
        __classPrivateFieldGet(this, _AsyncDisposableStack_stack, "f").push({
            [asyncDisposeSymbol]() {
                return onDispose(value);
            },
        });
        return value;
    }
    /**
     * Adds a callback to be invoked when the stack is disposed.
     */
    defer(onDispose) {
        __classPrivateFieldGet(this, _AsyncDisposableStack_stack, "f").push({
            [asyncDisposeSymbol]() {
                return onDispose();
            },
        });
    }
    /**
     * Move all resources out of this stack and into a new `DisposableStack`, and
     * marks this stack as disposed.
     *
     * @example
     *
     * ```ts
     * class C {
     *   #res1: Disposable;
     *   #res2: Disposable;
     *   #disposables: DisposableStack;
     *   constructor() {
     *     // stack will be disposed when exiting constructor for any reason
     *     using stack = new DisposableStack();
     *
     *     // get first resource
     *     this.#res1 = stack.use(getResource1());
     *
     *     // get second resource. If this fails, both `stack` and `#res1` will be disposed.
     *     this.#res2 = stack.use(getResource2());
     *
     *     // all operations succeeded, move resources out of `stack` so that
     *     // they aren't disposed when constructor exits
     *     this.#disposables = stack.move();
     *   }
     *
     *   [disposeSymbol]() {
     *     this.#disposables.dispose();
     *   }
     * }
     * ```
     */
    move() {
        if (__classPrivateFieldGet(this, _AsyncDisposableStack_disposed, "f")) {
            throw new ReferenceError('a disposed stack can not use anything new'); // step 3
        }
        const stack = new AsyncDisposableStack(); // step 4-5
        __classPrivateFieldSet(stack, _AsyncDisposableStack_stack, __classPrivateFieldGet(this, _AsyncDisposableStack_stack, "f"), "f");
        __classPrivateFieldSet(this, _AsyncDisposableStack_disposed, true, "f");
        return stack;
    }
}
_AsyncDisposableStack_disposed = new WeakMap(), _AsyncDisposableStack_stack = new WeakMap(), _e = asyncDisposeSymbol, _f = Symbol.toStringTag;


/***/ })

}]);