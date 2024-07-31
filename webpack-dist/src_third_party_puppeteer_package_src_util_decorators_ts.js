"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_util_decorators_ts"],{

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

/***/ "./src/third_party/puppeteer/package/src/util/Mutex.ts":
/*!*************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/util/Mutex.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mutex: () => (/* binding */ Mutex)
/* harmony export */ });
/* harmony import */ var _Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deferred.js */ "./src/third_party/puppeteer/package/src/util/Deferred.ts");
/* harmony import */ var _disposable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
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
var _Mutex_locked, _Mutex_acquirers, _Guard_mutex, _Guard_onRelease;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * @internal
 */
class Mutex {
    constructor() {
        _Mutex_locked.set(this, false);
        _Mutex_acquirers.set(this, []);
    }
    // This is FIFO.
    async acquire(onRelease) {
        if (!__classPrivateFieldGet(this, _Mutex_locked, "f")) {
            __classPrivateFieldSet(this, _Mutex_locked, true, "f");
            return new Mutex.Guard(this);
        }
        const deferred = _Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred.create();
        __classPrivateFieldGet(this, _Mutex_acquirers, "f").push(deferred.resolve.bind(deferred));
        await deferred.valueOrThrow();
        return new Mutex.Guard(this, onRelease);
    }
    release() {
        const resolve = __classPrivateFieldGet(this, _Mutex_acquirers, "f").shift();
        if (!resolve) {
            __classPrivateFieldSet(this, _Mutex_locked, false, "f");
            return;
        }
        resolve();
    }
}
_Mutex_locked = new WeakMap(), _Mutex_acquirers = new WeakMap();
Object.defineProperty(Mutex, "Guard", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: class Guard {
        constructor(mutex, onRelease) {
            _Guard_mutex.set(this, void 0);
            _Guard_onRelease.set(this, void 0);
            __classPrivateFieldSet(this, _Guard_mutex, mutex, "f");
            __classPrivateFieldSet(this, _Guard_onRelease, onRelease, "f");
        }
        [(_Guard_mutex = new WeakMap(), _Guard_onRelease = new WeakMap(), _disposable_js__WEBPACK_IMPORTED_MODULE_1__.disposeSymbol)]() {
            __classPrivateFieldGet(this, _Guard_onRelease, "f")?.call(this);
            return __classPrivateFieldGet(this, _Guard_mutex, "f").release();
        }
    }
});


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/util/decorators.ts":
/*!******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/util/decorators.ts ***!
  \******************************************************************/
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
/* harmony import */ var _disposable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/* harmony import */ var _Mutex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mutex.js */ "./src/third_party/puppeteer/package/src/util/Mutex.ts");
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


/***/ })

}]);