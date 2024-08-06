"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_util_decorators_js"],{

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

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Mutex.js":
/*!***********************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/util/Mutex.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mutex: () => (/* binding */ Mutex)
/* harmony export */ });
/* harmony import */ var _Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */ var _disposable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * @internal
 */
class Mutex {
    static Guard = class Guard {
        #mutex;
        #onRelease;
        constructor(mutex, onRelease) {
            this.#mutex = mutex;
            this.#onRelease = onRelease;
        }
        [_disposable_js__WEBPACK_IMPORTED_MODULE_1__.disposeSymbol]() {
            this.#onRelease?.();
            return this.#mutex.release();
        }
    };
    #locked = false;
    #acquirers = [];
    // This is FIFO.
    async acquire(onRelease) {
        if (!this.#locked) {
            this.#locked = true;
            return new Mutex.Guard(this);
        }
        const deferred = _Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred.create();
        this.#acquirers.push(deferred.resolve.bind(deferred));
        await deferred.valueOrThrow();
        return new Mutex.Guard(this, onRelease);
    }
    release() {
        const resolve = this.#acquirers.shift();
        if (!resolve) {
            this.#locked = false;
            return;
        }
        resolve();
    }
}
//# sourceMappingURL=Mutex.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js":
/*!****************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bubble: () => (/* binding */ bubble),
/* harmony export */   guarded: () => (/* binding */ guarded),
/* harmony export */   inertIfDisposed: () => (/* binding */ inertIfDisposed),
/* harmony export */   invokeAtMostOnceForArguments: () => (/* binding */ invokeAtMostOnceForArguments),
/* harmony export */   moveable: () => (/* binding */ moveable),
/* harmony export */   throwIfDisposed: () => (/* binding */ throwIfDisposed)
/* harmony export */ });
/* harmony import */ var _disposable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */ var _Mutex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mutex.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Mutex.js");
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


const instances = new WeakSet();
function moveable(Class, _) {
    let hasDispose = false;
    if (Class.prototype[_disposable_js__WEBPACK_IMPORTED_MODULE_0__.disposeSymbol]) {
        const dispose = Class.prototype[_disposable_js__WEBPACK_IMPORTED_MODULE_0__.disposeSymbol];
        Class.prototype[_disposable_js__WEBPACK_IMPORTED_MODULE_0__.disposeSymbol] = function () {
            if (instances.has(this)) {
                instances.delete(this);
                return;
            }
            return dispose.call(this);
        };
        hasDispose = true;
    }
    if (Class.prototype[_disposable_js__WEBPACK_IMPORTED_MODULE_0__.asyncDisposeSymbol]) {
        const asyncDispose = Class.prototype[_disposable_js__WEBPACK_IMPORTED_MODULE_0__.asyncDisposeSymbol];
        Class.prototype[_disposable_js__WEBPACK_IMPORTED_MODULE_0__.asyncDisposeSymbol] = function () {
            if (instances.has(this)) {
                instances.delete(this);
                return;
            }
            return asyncDispose.call(this);
        };
        hasDispose = true;
    }
    if (hasDispose) {
        Class.prototype.move = function () {
            instances.add(this);
            return this;
        };
    }
    return Class;
}
function throwIfDisposed(message = value => {
    return `Attempted to use disposed ${value.constructor.name}.`;
}) {
    return (target, _) => {
        return function (...args) {
            if (this.disposed) {
                throw new Error(message(this));
            }
            return target.call(this, ...args);
        };
    };
}
function inertIfDisposed(target, _) {
    return function (...args) {
        if (this.disposed) {
            return;
        }
        return target.call(this, ...args);
    };
}
/**
 * The decorator only invokes the target if the target has not been invoked with
 * the same arguments before. The decorated method throws an error if it's
 * invoked with a different number of elements: if you decorate a method, it
 * should have the same number of arguments
 *
 * @internal
 */
function invokeAtMostOnceForArguments(target, _) {
    const cache = new WeakMap();
    let cacheDepth = -1;
    return function (...args) {
        if (cacheDepth === -1) {
            cacheDepth = args.length;
        }
        if (cacheDepth !== args.length) {
            throw new Error('Memoized method was called with the wrong number of arguments');
        }
        let freshArguments = false;
        let cacheIterator = cache;
        for (const arg of args) {
            if (cacheIterator.has(arg)) {
                cacheIterator = cacheIterator.get(arg);
            }
            else {
                freshArguments = true;
                cacheIterator.set(arg, new WeakMap());
                cacheIterator = cacheIterator.get(arg);
            }
        }
        if (!freshArguments) {
            return;
        }
        return target.call(this, ...args);
    };
}
function guarded(getKey = function () {
    return this;
}) {
    return (target, _) => {
        const mutexes = new WeakMap();
        return async function (...args) {
            const env_1 = { stack: [], error: void 0, hasError: false };
            try {
                const key = getKey.call(this);
                let mutex = mutexes.get(key);
                if (!mutex) {
                    mutex = new _Mutex_js__WEBPACK_IMPORTED_MODULE_1__.Mutex();
                    mutexes.set(key, mutex);
                }
                const _ = __addDisposableResource(env_1, await mutex.acquire(), true);
                return await target.call(this, ...args);
            }
            catch (e_1) {
                env_1.error = e_1;
                env_1.hasError = true;
            }
            finally {
                const result_1 = __disposeResources(env_1);
                if (result_1)
                    await result_1;
            }
        };
    };
}
const bubbleHandlers = new WeakMap();
const bubbleInitializer = function (events) {
    const handlers = bubbleHandlers.get(this) ?? new Map();
    if (handlers.has(events)) {
        return;
    }
    const handler = events !== undefined
        ? (type, event) => {
            if (events.includes(type)) {
                this.emit(type, event);
            }
        }
        : (type, event) => {
            this.emit(type, event);
        };
    handlers.set(events, handler);
    bubbleHandlers.set(this, handlers);
};
/**
 * Event emitter fields marked with `bubble` will have their events bubble up
 * the field owner.
 */
// The type is too complicated to type.
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function bubble(events) {
    return ({ set, get }, context) => {
        context.addInitializer(function () {
            return bubbleInitializer.apply(this, [events]);
        });
        return {
            set(emitter) {
                const handler = bubbleHandlers.get(this).get(events);
                // In case we are re-setting.
                const oldEmitter = get.call(this);
                if (oldEmitter !== undefined) {
                    oldEmitter.off('*', handler);
                }
                if (emitter === undefined) {
                    return;
                }
                emitter.on('*', handler);
                set.call(this, emitter);
            },
            init(emitter) {
                if (emitter === undefined) {
                    return emitter;
                }
                bubbleInitializer.apply(this, [events]);
                const handler = bubbleHandlers.get(this).get(events);
                emitter.on('*', handler);
                return emitter;
            },
        };
    };
}
//# sourceMappingURL=decorators.js.map

/***/ })

}]);