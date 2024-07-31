"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_api_CDPSession_ts-src_third_party_puppeteer_package_src-08049a"],{

/***/ "./src/third_party/puppeteer/package/src/api/CDPSession.ts":
/*!*****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/CDPSession.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDPSession: () => (/* binding */ CDPSession),
/* harmony export */   CDPSessionEvent: () => (/* binding */ CDPSessionEvent)
/* harmony export */ });
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");

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


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/bidi/BrowserConnector.ts":
/*!************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/BrowserConnector.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _connectToBiDiBrowser: () => (/* binding */ _connectToBiDiBrowser)
/* harmony export */ });
/* harmony import */ var _cdp_Connection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cdp/Connection.js */ "./src/third_party/puppeteer/package/src/cdp/Connection.ts");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/**
 * Users should never call this directly; it's called when calling `puppeteer.connect`
 * with `protocol: 'webDriverBiDi'`. This method attaches Puppeteer to an existing browser
 * instance. First it tries to connect to the browser using pure BiDi. If the protocol is
 * not supported, connects to the browser using BiDi over CDP.
 *
 * @internal
 */
async function _connectToBiDiBrowser(connectionTransport, url, options) {
    const { ignoreHTTPSErrors = false, defaultViewport = _common_util_js__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_VIEWPORT } = options;
    const { bidiConnection, cdpConnection, closeCallback } = await getBiDiConnection(connectionTransport, url, options);
    const BiDi = await import(/* webpackIgnore: true */ './bidi.js');
    const bidiBrowser = await BiDi.BidiBrowser.create({
        connection: bidiConnection,
        cdpConnection,
        closeCallback,
        process: undefined,
        defaultViewport: defaultViewport,
        ignoreHTTPSErrors: ignoreHTTPSErrors,
    });
    return bidiBrowser;
}
/**
 * Returns a BiDiConnection established to the endpoint specified by the options and a
 * callback closing the browser. Callback depends on whether the connection is pure BiDi
 * or BiDi over CDP.
 * The method tries to connect to the browser using pure BiDi protocol, and falls back
 * to BiDi over CDP.
 */
async function getBiDiConnection(connectionTransport, url, options) {
    const BiDi = await import(/* webpackIgnore: true */ './bidi.js');
    const { ignoreHTTPSErrors = false, slowMo = 0, protocolTimeout } = options;
    // Try pure BiDi first.
    const pureBidiConnection = new BiDi.BidiConnection(url, connectionTransport, slowMo, protocolTimeout);
    try {
        const result = await pureBidiConnection.send('session.status', {});
        if ('type' in result && result.type === 'success') {
            // The `browserWSEndpoint` points to an endpoint supporting pure WebDriver BiDi.
            return {
                bidiConnection: pureBidiConnection,
                closeCallback: async () => {
                    await pureBidiConnection.send('browser.close', {}).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
                },
            };
        }
    }
    catch (e) {
        if (!(e instanceof _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.ProtocolError)) {
            // Unexpected exception not related to BiDi / CDP. Rethrow.
            throw e;
        }
    }
    // Unbind the connection to avoid memory leaks.
    pureBidiConnection.unbind();
    // Fall back to CDP over BiDi reusing the WS connection.
    const cdpConnection = new _cdp_Connection_js__WEBPACK_IMPORTED_MODULE_0__.Connection(url, connectionTransport, slowMo, protocolTimeout);
    const version = await cdpConnection.send('Browser.getVersion');
    if (version.product.toLowerCase().includes('firefox')) {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation('Firefox is not supported in BiDi over CDP mode.');
    }
    const bidiOverCdpConnection = await BiDi.connectBidiOverCdp(cdpConnection, {
        acceptInsecureCerts: ignoreHTTPSErrors,
    });
    return {
        cdpConnection,
        bidiConnection: bidiOverCdpConnection,
        closeCallback: async () => {
            // In case of BiDi over CDP, we need to close browser via CDP.
            await cdpConnection.send('Browser.close').catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
        },
    };
}


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


/***/ })

}]);