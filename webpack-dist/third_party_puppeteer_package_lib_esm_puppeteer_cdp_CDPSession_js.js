"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_CDPSession_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js":
/*!***************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDPSession: () => (/* binding */ CDPSession),
/* harmony export */   CDPSessionEvent: () => (/* binding */ CDPSessionEvent)
/* harmony export */ });
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");

/**
 * Events that the CDPSession class emits.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
var CDPSessionEvent;
(function (CDPSessionEvent) {
    /** @internal */
    CDPSessionEvent.Disconnected = Symbol('CDPSession.Disconnected');
    /** @internal */
    CDPSessionEvent.Swapped = Symbol('CDPSession.Swapped');
    /**
     * Emitted when the session is ready to be configured during the auto-attach
     * process. Right after the event is handled, the session will be resumed.
     *
     * @internal
     */
    CDPSessionEvent.Ready = Symbol('CDPSession.Ready');
    CDPSessionEvent.SessionAttached = 'sessionattached';
    CDPSessionEvent.SessionDetached = 'sessiondetached';
})(CDPSessionEvent || (CDPSessionEvent = {}));
/**
 * The `CDPSession` instances are used to talk raw Chrome Devtools Protocol.
 *
 * @remarks
 *
 * Protocol methods can be called with {@link CDPSession.send} method and protocol
 * events can be subscribed to with `CDPSession.on` method.
 *
 * Useful links: {@link https://chromedevtools.github.io/devtools-protocol/ | DevTools Protocol Viewer}
 * and {@link https://github.com/aslushnikov/getting-started-with-cdp/blob/HEAD/README.md | Getting Started with DevTools Protocol}.
 *
 * @example
 *
 * ```ts
 * const client = await page.createCDPSession();
 * await client.send('Animation.enable');
 * client.on('Animation.animationCreated', () =>
 *   console.log('Animation created!')
 * );
 * const response = await client.send('Animation.getPlaybackRate');
 * console.log('playback rate is ' + response.playbackRate);
 * await client.send('Animation.setPlaybackRate', {
 *   playbackRate: response.playbackRate / 2,
 * });
 * ```
 *
 * @public
 */
class CDPSession extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
    /**
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * Parent session in terms of CDP's auto-attach mechanism.
     *
     * @internal
     */
    parentSession() {
        return undefined;
    }
}
//# sourceMappingURL=CDPSession.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/CDPSession.js":
/*!***************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/CDPSession.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpCDPSession: () => (/* binding */ CdpCDPSession)
/* harmony export */ });
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */ var _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/CallbackRegistry.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/CallbackRegistry.js");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */





/**
 * @internal
 */
class CdpCDPSession extends _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSession {
    #sessionId;
    #targetType;
    #callbacks = new _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_1__.CallbackRegistry();
    #connection;
    #parentSessionId;
    #target;
    /**
     * @internal
     */
    constructor(connection, targetType, sessionId, parentSessionId) {
        super();
        this.#connection = connection;
        this.#targetType = targetType;
        this.#sessionId = sessionId;
        this.#parentSessionId = parentSessionId;
    }
    /**
     * Sets the {@link CdpTarget} associated with the session instance.
     *
     * @internal
     */
    _setTarget(target) {
        this.#target = target;
    }
    /**
     * Gets the {@link CdpTarget} associated with the session instance.
     *
     * @internal
     */
    _target() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(this.#target, 'Target must exist');
        return this.#target;
    }
    connection() {
        return this.#connection;
    }
    parentSession() {
        if (!this.#parentSessionId) {
            // To make it work in Firefox that does not have parent (tab) sessions.
            return this;
        }
        const parent = this.#connection?.session(this.#parentSessionId);
        return parent ?? undefined;
    }
    send(method, params, options) {
        if (!this.#connection) {
            return Promise.reject(new _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__.TargetCloseError(`Protocol error (${method}): Session closed. Most likely the ${this.#targetType} has been closed.`));
        }
        return this.#connection._rawSend(this.#callbacks, method, params, this.#sessionId, options);
    }
    /**
     * @internal
     */
    _onMessage(object) {
        if (object.id) {
            if (object.error) {
                this.#callbacks.reject(object.id, (0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_4__.createProtocolErrorMessage)(object), object.error.message);
            }
            else {
                this.#callbacks.resolve(object.id, object.result);
            }
        }
        else {
            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(!object.id);
            this.emit(object.method, object.params);
        }
    }
    /**
     * Detaches the cdpSession from the target. Once detached, the cdpSession object
     * won't emit any events and can't be used to send messages.
     */
    async detach() {
        if (!this.#connection) {
            throw new Error(`Session already detached. Most likely the ${this.#targetType} has been closed.`);
        }
        await this.#connection.send('Target.detachFromTarget', {
            sessionId: this.#sessionId,
        });
    }
    /**
     * @internal
     */
    _onClosed() {
        this.#callbacks.clear();
        this.#connection = undefined;
        this.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, undefined);
    }
    /**
     * Returns the session's id.
     */
    id() {
        return this.#sessionId;
    }
    /**
     * @internal
     */
    getPendingProtocolErrors() {
        return this.#callbacks.getPendingProtocolErrors();
    }
}
//# sourceMappingURL=CDPSession.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/CallbackRegistry.js":
/*!************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/CallbackRegistry.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Callback: () => (/* binding */ Callback),
/* harmony export */   CallbackRegistry: () => (/* binding */ CallbackRegistry),
/* harmony export */   createIncrementalIdGenerator: () => (/* binding */ createIncrementalIdGenerator)
/* harmony export */ });
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */ var _Errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */




/**
 * Manages callbacks and their IDs for the protocol request/response communication.
 *
 * @internal
 */
class CallbackRegistry {
    #callbacks = new Map();
    #idGenerator = createIncrementalIdGenerator();
    create(label, timeout, request) {
        const callback = new Callback(this.#idGenerator(), label, timeout);
        this.#callbacks.set(callback.id, callback);
        try {
            request(callback.id);
        }
        catch (error) {
            // We still throw sync errors synchronously and clean up the scheduled
            // callback.
            callback.promise.catch(_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError).finally(() => {
                this.#callbacks.delete(callback.id);
            });
            callback.reject(error);
            throw error;
        }
        // Must only have sync code up until here.
        return callback.promise.finally(() => {
            this.#callbacks.delete(callback.id);
        });
    }
    reject(id, message, originalMessage) {
        const callback = this.#callbacks.get(id);
        if (!callback) {
            return;
        }
        this._reject(callback, message, originalMessage);
    }
    _reject(callback, errorMessage, originalMessage) {
        let error;
        let message;
        if (errorMessage instanceof _Errors_js__WEBPACK_IMPORTED_MODULE_2__.ProtocolError) {
            error = errorMessage;
            error.cause = callback.error;
            message = errorMessage.message;
        }
        else {
            error = callback.error;
            message = errorMessage;
        }
        callback.reject((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__.rewriteError)(error, `Protocol error (${callback.label}): ${message}`, originalMessage));
    }
    resolve(id, value) {
        const callback = this.#callbacks.get(id);
        if (!callback) {
            return;
        }
        callback.resolve(value);
    }
    clear() {
        for (const callback of this.#callbacks.values()) {
            // TODO: probably we can accept error messages as params.
            this._reject(callback, new _Errors_js__WEBPACK_IMPORTED_MODULE_2__.TargetCloseError('Target closed'));
        }
        this.#callbacks.clear();
    }
    /**
     * @internal
     */
    getPendingProtocolErrors() {
        const result = [];
        for (const callback of this.#callbacks.values()) {
            result.push(new Error(`${callback.label} timed out. Trace: ${callback.error.stack}`));
        }
        return result;
    }
}
/**
 * @internal
 */
class Callback {
    #id;
    #error = new _Errors_js__WEBPACK_IMPORTED_MODULE_2__.ProtocolError();
    #deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred.create();
    #timer;
    #label;
    constructor(id, label, timeout) {
        this.#id = id;
        this.#label = label;
        if (timeout) {
            this.#timer = setTimeout(() => {
                this.#deferred.reject((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__.rewriteError)(this.#error, `${label} timed out. Increase the 'protocolTimeout' setting in launch/connect calls for a higher timeout if needed.`));
            }, timeout);
        }
    }
    resolve(value) {
        clearTimeout(this.#timer);
        this.#deferred.resolve(value);
    }
    reject(error) {
        clearTimeout(this.#timer);
        this.#deferred.reject(error);
    }
    get id() {
        return this.#id;
    }
    get promise() {
        return this.#deferred.valueOrThrow();
    }
    get error() {
        return this.#error;
    }
    get label() {
        return this.#label;
    }
}
/**
 * @internal
 */
function createIncrementalIdGenerator() {
    let id = 0;
    return () => {
        return ++id;
    };
}
//# sourceMappingURL=CallbackRegistry.js.map

/***/ }),

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

/***/ })

}]);