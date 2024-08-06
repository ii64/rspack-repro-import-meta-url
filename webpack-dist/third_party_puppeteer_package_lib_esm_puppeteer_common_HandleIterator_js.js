"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_HandleIterator_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/HandleIterator.js":
/*!**********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/HandleIterator.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transposeIterableHandle: () => (/* binding */ transposeIterableHandle)
/* harmony export */ });
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
//# sourceMappingURL=HandleIterator.js.map

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