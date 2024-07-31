"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_common_HandleIterator_ts"],{

/***/ "./src/third_party/puppeteer/package/src/common/HandleIterator.ts":
/*!************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/HandleIterator.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transposeIterableHandle: () => (/* binding */ transposeIterableHandle)
/* harmony export */ });
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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

const DEFAULT_BATCH_SIZE = 20;
/**
 * This will transpose an iterator JSHandle into a fast, Puppeteer-side iterator
 * of JSHandles.
 *
 * @param size - The number of elements to transpose. This should be something
 * reasonable.
 */
async function* fastTransposeIteratorHandle(iterator, size) {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const array = __addDisposableResource(env_1, await iterator.evaluateHandle(async (iterator, size) => {
            const results = [];
            while (results.length < size) {
                const result = await iterator.next();
                if (result.done) {
                    break;
                }
                results.push(result.value);
            }
            return results;
        }, size), false);
        const properties = (await array.getProperties());
        const handles = properties.values();
        const stack = __addDisposableResource(env_1, new _util_disposable_js__WEBPACK_IMPORTED_MODULE_0__.DisposableStack(), false);
        stack.defer(() => {
            for (const handle_1 of handles) {
                const env_2 = { stack: [], error: void 0, hasError: false };
                try {
                    const handle = __addDisposableResource(env_2, handle_1, false);
                    handle[_util_disposable_js__WEBPACK_IMPORTED_MODULE_0__.disposeSymbol]();
                }
                catch (e_2) {
                    env_2.error = e_2;
                    env_2.hasError = true;
                }
                finally {
                    __disposeResources(env_2);
                }
            }
        });
        yield* handles;
        return properties.size === 0;
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
}
/**
 * This will transpose an iterator JSHandle in batches based on the default size
 * of {@link fastTransposeIteratorHandle}.
 */
async function* transposeIteratorHandle(iterator) {
    let size = DEFAULT_BATCH_SIZE;
    while (!(yield* fastTransposeIteratorHandle(iterator, size))) {
        size <<= 1;
    }
}
/**
 * @internal
 */
async function* transposeIterableHandle(handle) {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        const generatorHandle = __addDisposableResource(env_3, await handle.evaluateHandle(iterable => {
            return (async function* () {
                yield* iterable;
            })();
        }), false);
        yield* transposeIteratorHandle(generatorHandle);
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
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