"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_util_decorators_js"],{

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

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Mutex.js":
/*!***************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Mutex.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mutex = void 0;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const Deferred_js_1 = __webpack_require__(/*! ./Deferred.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Deferred.js");
const disposable_js_1 = __webpack_require__(/*! ./disposable.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/disposable.js");
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
        [disposable_js_1.disposeSymbol]() {
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
        const deferred = Deferred_js_1.Deferred.create();
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
exports.Mutex = Mutex;
//# sourceMappingURL=Mutex.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/decorators.js":
/*!********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/decorators.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __addDisposableResource = (this && this.__addDisposableResource) || function (env, value, async) {
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
var __disposeResources = (this && this.__disposeResources) || (function (SuppressedError) {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bubble = exports.guarded = exports.invokeAtMostOnceForArguments = exports.inertIfDisposed = exports.throwIfDisposed = exports.moveable = void 0;
const disposable_js_1 = __webpack_require__(/*! ./disposable.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/disposable.js");
const Mutex_js_1 = __webpack_require__(/*! ./Mutex.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Mutex.js");
const instances = new WeakSet();
function moveable(Class, _) {
    let hasDispose = false;
    if (Class.prototype[disposable_js_1.disposeSymbol]) {
        const dispose = Class.prototype[disposable_js_1.disposeSymbol];
        Class.prototype[disposable_js_1.disposeSymbol] = function () {
            if (instances.has(this)) {
                instances.delete(this);
                return;
            }
            return dispose.call(this);
        };
        hasDispose = true;
    }
    if (Class.prototype[disposable_js_1.asyncDisposeSymbol]) {
        const asyncDispose = Class.prototype[disposable_js_1.asyncDisposeSymbol];
        Class.prototype[disposable_js_1.asyncDisposeSymbol] = function () {
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
exports.moveable = moveable;
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
exports.throwIfDisposed = throwIfDisposed;
function inertIfDisposed(target, _) {
    return function (...args) {
        if (this.disposed) {
            return;
        }
        return target.call(this, ...args);
    };
}
exports.inertIfDisposed = inertIfDisposed;
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
exports.invokeAtMostOnceForArguments = invokeAtMostOnceForArguments;
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
                    mutex = new Mutex_js_1.Mutex();
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
exports.guarded = guarded;
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
exports.bubble = bubble;
//# sourceMappingURL=decorators.js.map

/***/ })

}]);