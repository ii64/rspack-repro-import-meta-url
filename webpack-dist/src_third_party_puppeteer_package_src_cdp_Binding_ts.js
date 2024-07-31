"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_Binding_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/Binding.ts":
/*!**************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/Binding.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Binding: () => (/* binding */ Binding)
/* harmony export */ });
/* harmony import */ var _api_JSHandle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/JSHandle.js */ "./src/third_party/puppeteer/package/src/api/JSHandle.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/src/util/ErrorLike.ts");
var __addDisposableResource = (undefined && undefined.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
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
var _Binding_name, _Binding_fn, _Binding_initSource;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */




/**
 * @internal
 */
class Binding {
    constructor(name, fn, initSource) {
        _Binding_name.set(this, void 0);
        _Binding_fn.set(this, void 0);
        _Binding_initSource.set(this, void 0);
        __classPrivateFieldSet(this, _Binding_name, name, "f");
        __classPrivateFieldSet(this, _Binding_fn, fn, "f");
        __classPrivateFieldSet(this, _Binding_initSource, initSource, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _Binding_name, "f");
    }
    get initSource() {
        return __classPrivateFieldGet(this, _Binding_initSource, "f");
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
                    }, __classPrivateFieldGet(this, _Binding_name, "f"), id), false);
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
            }, __classPrivateFieldGet(this, _Binding_name, "f"), id, await __classPrivateFieldGet(this, _Binding_fn, "f").call(this, ...args));
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
                }, __classPrivateFieldGet(this, _Binding_name, "f"), id, error.message, error.stack)
                    .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
            }
            else {
                await context
                    .evaluate((name, seq, error) => {
                    // @ts-expect-error Code is evaluated in a different context.
                    const callbacks = globalThis[name].callbacks;
                    callbacks.get(seq).reject(error);
                    callbacks.delete(seq);
                }, __classPrivateFieldGet(this, _Binding_name, "f"), id, error)
                    .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
            }
        }
    }
}
_Binding_name = new WeakMap(), _Binding_fn = new WeakMap(), _Binding_initSource = new WeakMap();


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