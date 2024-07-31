"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_injected_Poller_ts"],{

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

/***/ "./src/third_party/puppeteer/package/src/injected/Poller.ts":
/*!******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/injected/Poller.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntervalPoller: () => (/* binding */ IntervalPoller),
/* harmony export */   MutationPoller: () => (/* binding */ MutationPoller),
/* harmony export */   RAFPoller: () => (/* binding */ RAFPoller)
/* harmony export */ });
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/src/util/Deferred.ts");
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
var _MutationPoller_fn, _MutationPoller_root, _MutationPoller_observer, _MutationPoller_deferred, _RAFPoller_fn, _RAFPoller_deferred, _IntervalPoller_fn, _IntervalPoller_ms, _IntervalPoller_interval, _IntervalPoller_deferred;


/**
 * @internal
 */
class MutationPoller {
    constructor(fn, root) {
        _MutationPoller_fn.set(this, void 0);
        _MutationPoller_root.set(this, void 0);
        _MutationPoller_observer.set(this, void 0);
        _MutationPoller_deferred.set(this, void 0);
        __classPrivateFieldSet(this, _MutationPoller_fn, fn, "f");
        __classPrivateFieldSet(this, _MutationPoller_root, root, "f");
    }
    async start() {
        const deferred = (__classPrivateFieldSet(this, _MutationPoller_deferred, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create(), "f"));
        const result = await __classPrivateFieldGet(this, _MutationPoller_fn, "f").call(this);
        if (result) {
            deferred.resolve(result);
            return;
        }
        __classPrivateFieldSet(this, _MutationPoller_observer, new MutationObserver(async () => {
            const result = await __classPrivateFieldGet(this, _MutationPoller_fn, "f").call(this);
            if (!result) {
                return;
            }
            deferred.resolve(result);
            await this.stop();
        }), "f");
        __classPrivateFieldGet(this, _MutationPoller_observer, "f").observe(__classPrivateFieldGet(this, _MutationPoller_root, "f"), {
            childList: true,
            subtree: true,
            attributes: true,
        });
    }
    async stop() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(__classPrivateFieldGet(this, _MutationPoller_deferred, "f"), 'Polling never started.');
        if (!__classPrivateFieldGet(this, _MutationPoller_deferred, "f").finished()) {
            __classPrivateFieldGet(this, _MutationPoller_deferred, "f").reject(new Error('Polling stopped'));
        }
        if (__classPrivateFieldGet(this, _MutationPoller_observer, "f")) {
            __classPrivateFieldGet(this, _MutationPoller_observer, "f").disconnect();
            __classPrivateFieldSet(this, _MutationPoller_observer, undefined, "f");
        }
    }
    result() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(__classPrivateFieldGet(this, _MutationPoller_deferred, "f"), 'Polling never started.');
        return __classPrivateFieldGet(this, _MutationPoller_deferred, "f").valueOrThrow();
    }
}
_MutationPoller_fn = new WeakMap(), _MutationPoller_root = new WeakMap(), _MutationPoller_observer = new WeakMap(), _MutationPoller_deferred = new WeakMap();
/**
 * @internal
 */
class RAFPoller {
    constructor(fn) {
        _RAFPoller_fn.set(this, void 0);
        _RAFPoller_deferred.set(this, void 0);
        __classPrivateFieldSet(this, _RAFPoller_fn, fn, "f");
    }
    async start() {
        const deferred = (__classPrivateFieldSet(this, _RAFPoller_deferred, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create(), "f"));
        const result = await __classPrivateFieldGet(this, _RAFPoller_fn, "f").call(this);
        if (result) {
            deferred.resolve(result);
            return;
        }
        const poll = async () => {
            if (deferred.finished()) {
                return;
            }
            const result = await __classPrivateFieldGet(this, _RAFPoller_fn, "f").call(this);
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
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(__classPrivateFieldGet(this, _RAFPoller_deferred, "f"), 'Polling never started.');
        if (!__classPrivateFieldGet(this, _RAFPoller_deferred, "f").finished()) {
            __classPrivateFieldGet(this, _RAFPoller_deferred, "f").reject(new Error('Polling stopped'));
        }
    }
    result() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(__classPrivateFieldGet(this, _RAFPoller_deferred, "f"), 'Polling never started.');
        return __classPrivateFieldGet(this, _RAFPoller_deferred, "f").valueOrThrow();
    }
}
_RAFPoller_fn = new WeakMap(), _RAFPoller_deferred = new WeakMap();
/**
 * @internal
 */
class IntervalPoller {
    constructor(fn, ms) {
        _IntervalPoller_fn.set(this, void 0);
        _IntervalPoller_ms.set(this, void 0);
        _IntervalPoller_interval.set(this, void 0);
        _IntervalPoller_deferred.set(this, void 0);
        __classPrivateFieldSet(this, _IntervalPoller_fn, fn, "f");
        __classPrivateFieldSet(this, _IntervalPoller_ms, ms, "f");
    }
    async start() {
        const deferred = (__classPrivateFieldSet(this, _IntervalPoller_deferred, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create(), "f"));
        const result = await __classPrivateFieldGet(this, _IntervalPoller_fn, "f").call(this);
        if (result) {
            deferred.resolve(result);
            return;
        }
        __classPrivateFieldSet(this, _IntervalPoller_interval, setInterval(async () => {
            const result = await __classPrivateFieldGet(this, _IntervalPoller_fn, "f").call(this);
            if (!result) {
                return;
            }
            deferred.resolve(result);
            await this.stop();
        }, __classPrivateFieldGet(this, _IntervalPoller_ms, "f")), "f");
    }
    async stop() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(__classPrivateFieldGet(this, _IntervalPoller_deferred, "f"), 'Polling never started.');
        if (!__classPrivateFieldGet(this, _IntervalPoller_deferred, "f").finished()) {
            __classPrivateFieldGet(this, _IntervalPoller_deferred, "f").reject(new Error('Polling stopped'));
        }
        if (__classPrivateFieldGet(this, _IntervalPoller_interval, "f")) {
            clearInterval(__classPrivateFieldGet(this, _IntervalPoller_interval, "f"));
            __classPrivateFieldSet(this, _IntervalPoller_interval, undefined, "f");
        }
    }
    result() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(__classPrivateFieldGet(this, _IntervalPoller_deferred, "f"), 'Polling never started.');
        return __classPrivateFieldGet(this, _IntervalPoller_deferred, "f").valueOrThrow();
    }
}
_IntervalPoller_fn = new WeakMap(), _IntervalPoller_ms = new WeakMap(), _IntervalPoller_interval = new WeakMap(), _IntervalPoller_deferred = new WeakMap();


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

/***/ "./src/third_party/puppeteer/package/src/util/assert.ts":
/*!**************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/util/assert.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ assert)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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


/***/ })

}]);