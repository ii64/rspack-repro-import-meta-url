"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_Binding_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Binding.js":
/*!************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Binding.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Binding: () => (/* binding */ Binding)
/* harmony export */ });
/* harmony import */ var _api_JSHandle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/JSHandle.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
var __addDisposableResource = (undefined && undefined.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources = (undefined && undefined.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */




/**
 * @internal
 */
class Binding {
    #name;
    #fn;
    #initSource;
    constructor(name, fn, initSource) {
        this.#name = name;
        this.#fn = fn;
        this.#initSource = initSource;
    }
    get name() {
        return this.#name;
    }
    get initSource() {
        return this.#initSource;
    }
    /**
     * @param context - Context to run the binding in; the context should have
     * the binding added to it beforehand.
     * @param id - ID of the call. This should come from the CDP
     * `onBindingCalled` response.
     * @param args - Plain arguments from CDP.
     */
    async run(context, id, args, isTrivial) {
        const stack = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack();
        try {
            if (!isTrivial) {
                const env_1 = { stack: [], error: void 0, hasError: false };
                try {
                    // Getting non-trivial arguments.
                    const handles = __addDisposableResource(env_1, await context.evaluateHandle((name, seq) => {
                        // @ts-expect-error Code is evaluated in a different context.
                        return globalThis[name].args.get(seq);
                    }, this.#name, id), false);
                    const properties = await handles.getProperties();
                    for (const [index, handle] of properties) {
                        // This is not straight-forward since some arguments can stringify, but
                        // aren't plain objects so add subtypes when the use-case arises.
                        if (index in args) {
                            switch (handle.remoteObject().subtype) {
                                case 'node':
                                    args[+index] = handle;
                                    break;
                                default:
                                    stack.use(handle);
                            }
                        }
                        else {
                            stack.use(handle);
                        }
                    }
                }
                catch (e_1) {
                    env_1.error = e_1;
                    env_1.hasError = true;
                }
                finally {
                    __disposeResources(env_1);
                }
            }
            await context.evaluate((name, seq, result) => {
                // @ts-expect-error Code is evaluated in a different context.
                const callbacks = globalThis[name].callbacks;
                callbacks.get(seq).resolve(result);
                callbacks.delete(seq);
            }, this.#name, id, await this.#fn(...args));
            for (const arg of args) {
                if (arg instanceof _api_JSHandle_js__WEBPACK_IMPORTED_MODULE_0__.JSHandle) {
                    stack.use(arg);
                }
            }
        }
        catch (error) {
            if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_3__.isErrorLike)(error)) {
                await context
                    .evaluate((name, seq, message, stack) => {
                    const error = new Error(message);
                    error.stack = stack;
                    // @ts-expect-error Code is evaluated in a different context.
                    const callbacks = globalThis[name].callbacks;
                    callbacks.get(seq).reject(error);
                    callbacks.delete(seq);
                }, this.#name, id, error.message, error.stack)
                    .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
            }
            else {
                await context
                    .evaluate((name, seq, error) => {
                    // @ts-expect-error Code is evaluated in a different context.
                    const callbacks = globalThis[name].callbacks;
                    callbacks.get(seq).reject(error);
                    callbacks.delete(seq);
                }, this.#name, id, error)
                    .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
            }
        }
    }
}
//# sourceMappingURL=Binding.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js":
/*!***************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js ***!
  \***************************************************************************/
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
//# sourceMappingURL=ErrorLike.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js":
/*!****************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js ***!
  \****************************************************************************/
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
Symbol.dispose ??= Symbol('dispose');
Symbol.asyncDispose ??= Symbol('asyncDispose');
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
    #disposed = false;
    #stack = [];
    /**
     * Returns a value indicating whether this stack has been disposed.
     */
    get disposed() {
        return this.#disposed;
    }
    /**
     * Disposes each resource in the stack in the reverse order that they were added.
     */
    dispose() {
        if (this.#disposed) {
            return;
        }
        this.#disposed = true;
        for (const resource of this.#stack.reverse()) {
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
            this.#stack.push(value);
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
        this.#stack.push({
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
        this.#stack.push({
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
        if (this.#disposed) {
            throw new ReferenceError('a disposed stack can not use anything new'); // step 3
        }
        const stack = new DisposableStack(); // step 4-5
        stack.#stack = this.#stack;
        this.#disposed = true;
        return stack;
    }
    [disposeSymbol] = this.dispose;
    [Symbol.toStringTag] = 'DisposableStack';
}
/**
 * @internal
 */
class AsyncDisposableStack {
    #disposed = false;
    #stack = [];
    /**
     * Returns a value indicating whether this stack has been disposed.
     */
    get disposed() {
        return this.#disposed;
    }
    /**
     * Disposes each resource in the stack in the reverse order that they were added.
     */
    async dispose() {
        if (this.#disposed) {
            return;
        }
        this.#disposed = true;
        for (const resource of this.#stack.reverse()) {
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
            this.#stack.push(value);
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
        this.#stack.push({
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
        this.#stack.push({
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
        if (this.#disposed) {
            throw new ReferenceError('a disposed stack can not use anything new'); // step 3
        }
        const stack = new AsyncDisposableStack(); // step 4-5
        stack.#stack = this.#stack;
        this.#disposed = true;
        return stack;
    }
    [asyncDisposeSymbol] = this.dispose;
    [Symbol.toStringTag] = 'AsyncDisposableStack';
}
//# sourceMappingURL=disposable.js.map

/***/ })

}]);