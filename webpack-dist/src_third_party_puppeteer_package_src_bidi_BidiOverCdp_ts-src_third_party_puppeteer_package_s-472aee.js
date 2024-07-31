"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_BidiOverCdp_ts-src_third_party_puppeteer_package_s-472aee"],{

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

/***/ "./src/third_party/puppeteer/package/src/bidi/BidiOverCdp.ts":
/*!*******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/BidiOverCdp.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   connectBidiOverCdp: () => (/* binding */ connectBidiOverCdp)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_Debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Debug.js */ "./src/third_party/puppeteer/package/src/common/Debug.ts");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _Connection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Connection.js */ "./src/third_party/puppeteer/package/src/bidi/Connection.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
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
var _CdpConnectionAdapter_cdp, _CdpConnectionAdapter_adapters, _CdpConnectionAdapter_browserCdpConnection, _CDPClientAdapter_closed, _CDPClientAdapter_client, _CDPClientAdapter_browserClient, _CDPClientAdapter_forwardMessage, _NoOpTransport_onMessage;





const bidiServerLogger = (prefix, ...args) => {
    (0,_common_Debug_js__WEBPACK_IMPORTED_MODULE_1__.debug)(`bidi:${prefix}`)(args);
};
/**
 * @internal
 */
async function connectBidiOverCdp(cdp, options) {
    const transportBiDi = new NoOpTransport();
    const cdpConnectionAdapter = new CdpConnectionAdapter(cdp);
    const pptrTransport = {
        send(message) {
            // Forwards a BiDi command sent by Puppeteer to the input of the BidiServer.
            transportBiDi.emitMessage(JSON.parse(message));
        },
        close() {
            bidiServer.close();
            cdpConnectionAdapter.close();
            cdp.dispose();
        },
        onmessage(_message) {
            // The method is overridden by the Connection.
        },
    };
    transportBiDi.on('bidiResponse', (message) => {
        // Forwards a BiDi event sent by BidiServer to Puppeteer.
        pptrTransport.onmessage(JSON.stringify(message));
    });
    const pptrBiDiConnection = new _Connection_js__WEBPACK_IMPORTED_MODULE_3__.BidiConnection(cdp.url(), pptrTransport, cdp.delay, cdp.timeout);
    const bidiServer = await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createAndStart(transportBiDi, cdpConnectionAdapter, cdpConnectionAdapter.browserClient(), 
    /* selfTargetId= */ '', {
        // Override Mapper's `unhandledPromptBehavior` default value of `dismiss` to
        // `ignore`, so that user can handle the prompt instead of just closing it.
        unhandledPromptBehavior: {
            default: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).UserPromptHandlerType.Ignore,
        },
        ...options,
    }, undefined, bidiServerLogger);
    return pptrBiDiConnection;
}
/**
 * Manages CDPSessions for BidiServer.
 * @internal
 */
class CdpConnectionAdapter {
    constructor(cdp) {
        _CdpConnectionAdapter_cdp.set(this, void 0);
        _CdpConnectionAdapter_adapters.set(this, new Map());
        _CdpConnectionAdapter_browserCdpConnection.set(this, void 0);
        __classPrivateFieldSet(this, _CdpConnectionAdapter_cdp, cdp, "f");
        __classPrivateFieldSet(this, _CdpConnectionAdapter_browserCdpConnection, new CDPClientAdapter(cdp), "f");
    }
    browserClient() {
        return __classPrivateFieldGet(this, _CdpConnectionAdapter_browserCdpConnection, "f");
    }
    getCdpClient(id) {
        const session = __classPrivateFieldGet(this, _CdpConnectionAdapter_cdp, "f").session(id);
        if (!session) {
            throw new Error(`Unknown CDP session with id ${id}`);
        }
        if (!__classPrivateFieldGet(this, _CdpConnectionAdapter_adapters, "f").has(session)) {
            const adapter = new CDPClientAdapter(session, id, __classPrivateFieldGet(this, _CdpConnectionAdapter_browserCdpConnection, "f"));
            __classPrivateFieldGet(this, _CdpConnectionAdapter_adapters, "f").set(session, adapter);
            return adapter;
        }
        return __classPrivateFieldGet(this, _CdpConnectionAdapter_adapters, "f").get(session);
    }
    close() {
        __classPrivateFieldGet(this, _CdpConnectionAdapter_browserCdpConnection, "f").close();
        for (const adapter of __classPrivateFieldGet(this, _CdpConnectionAdapter_adapters, "f").values()) {
            adapter.close();
        }
    }
}
_CdpConnectionAdapter_cdp = new WeakMap(), _CdpConnectionAdapter_adapters = new WeakMap(), _CdpConnectionAdapter_browserCdpConnection = new WeakMap();
/**
 * Wrapper on top of CDPSession/CDPConnection to satisfy CDP interface that
 * BidiServer needs.
 *
 * @internal
 */
class CDPClientAdapter extends Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) {
    constructor(client, sessionId, browserClient) {
        super();
        _CDPClientAdapter_closed.set(this, false);
        _CDPClientAdapter_client.set(this, void 0);
        Object.defineProperty(this, "sessionId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        _CDPClientAdapter_browserClient.set(this, void 0);
        _CDPClientAdapter_forwardMessage.set(this, (method, event) => {
            this.emit(method, event);
        });
        __classPrivateFieldSet(this, _CDPClientAdapter_client, client, "f");
        this.sessionId = sessionId;
        __classPrivateFieldSet(this, _CDPClientAdapter_browserClient, browserClient, "f");
        __classPrivateFieldGet(this, _CDPClientAdapter_client, "f").on('*', __classPrivateFieldGet(this, _CDPClientAdapter_forwardMessage, "f"));
    }
    browserClient() {
        return __classPrivateFieldGet(this, _CDPClientAdapter_browserClient, "f");
    }
    async sendCommand(method, ...params) {
        if (__classPrivateFieldGet(this, _CDPClientAdapter_closed, "f")) {
            return;
        }
        try {
            return await __classPrivateFieldGet(this, _CDPClientAdapter_client, "f").send(method, ...params);
        }
        catch (err) {
            if (__classPrivateFieldGet(this, _CDPClientAdapter_closed, "f")) {
                return;
            }
            throw err;
        }
    }
    close() {
        __classPrivateFieldGet(this, _CDPClientAdapter_client, "f").off('*', __classPrivateFieldGet(this, _CDPClientAdapter_forwardMessage, "f"));
        __classPrivateFieldSet(this, _CDPClientAdapter_closed, true, "f");
    }
    isCloseError(error) {
        return error instanceof _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__.TargetCloseError;
    }
}
_CDPClientAdapter_closed = new WeakMap(), _CDPClientAdapter_client = new WeakMap(), _CDPClientAdapter_browserClient = new WeakMap(), _CDPClientAdapter_forwardMessage = new WeakMap();
/**
 * This transport is given to the BiDi server instance and allows Puppeteer
 * to send and receive commands to the BiDiServer.
 * @internal
 */
class NoOpTransport extends Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) {
    constructor() {
        super(...arguments);
        _NoOpTransport_onMessage.set(this, async (_m) => {
            return;
        });
    }
    emitMessage(message) {
        void __classPrivateFieldGet(this, _NoOpTransport_onMessage, "f").call(this, message);
    }
    setOnMessage(onMessage) {
        __classPrivateFieldSet(this, _NoOpTransport_onMessage, onMessage, "f");
    }
    async sendMessage(message) {
        this.emit('bidiResponse', message);
    }
    close() {
        __classPrivateFieldSet(this, _NoOpTransport_onMessage, async (_m) => {
            return;
        }, "f");
    }
}
_NoOpTransport_onMessage = new WeakMap();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/bidi/CDPSession.ts":
/*!******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/CDPSession.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiCdpSession: () => (/* binding */ BidiCdpSession)
/* harmony export */ });
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/src/api/CDPSession.ts");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/src/util/Deferred.ts");
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
var _BidiCdpSession_detached, _BidiCdpSession_connection, _BidiCdpSession_sessionId;



/**
 * @internal
 */
class BidiCdpSession extends _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSession {
    constructor(frame, sessionId) {
        super();
        _BidiCdpSession_detached.set(this, false);
        _BidiCdpSession_connection.set(this, void 0);
        _BidiCdpSession_sessionId.set(this, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred.create());
        Object.defineProperty(this, "frame", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * @internal
         */
        Object.defineProperty(this, "onClose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                BidiCdpSession.sessions.delete(this.id());
                __classPrivateFieldSet(this, _BidiCdpSession_detached, true, "f");
            }
        });
        this.frame = frame;
        if (!this.frame.page().browser().cdpSupported) {
            return;
        }
        const connection = this.frame.page().browser().connection;
        __classPrivateFieldSet(this, _BidiCdpSession_connection, connection, "f");
        if (sessionId) {
            __classPrivateFieldGet(this, _BidiCdpSession_sessionId, "f").resolve(sessionId);
            BidiCdpSession.sessions.set(sessionId, this);
        }
        else {
            (async () => {
                try {
                    const { result } = await connection.send('cdp.getSession', {
                        context: frame._id,
                    });
                    __classPrivateFieldGet(this, _BidiCdpSession_sessionId, "f").resolve(result.session);
                    BidiCdpSession.sessions.set(result.session, this);
                }
                catch (error) {
                    __classPrivateFieldGet(this, _BidiCdpSession_sessionId, "f").reject(error);
                }
            })();
        }
        // SAFETY: We never throw #sessionId.
        BidiCdpSession.sessions.set(__classPrivateFieldGet(this, _BidiCdpSession_sessionId, "f").value(), this);
    }
    connection() {
        return undefined;
    }
    async send(method, params, options) {
        if (__classPrivateFieldGet(this, _BidiCdpSession_connection, "f") === undefined) {
            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation('CDP support is required for this feature. The current browser does not support CDP.');
        }
        if (__classPrivateFieldGet(this, _BidiCdpSession_detached, "f")) {
            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.TargetCloseError(`Protocol error (${method}): Session closed. Most likely the page has been closed.`);
        }
        const session = await __classPrivateFieldGet(this, _BidiCdpSession_sessionId, "f").valueOrThrow();
        const { result } = await __classPrivateFieldGet(this, _BidiCdpSession_connection, "f").send('cdp.sendCommand', {
            method: method,
            params: params,
            session,
        }, options?.timeout);
        return result.result;
    }
    async detach() {
        if (__classPrivateFieldGet(this, _BidiCdpSession_connection, "f") === undefined ||
            __classPrivateFieldGet(this, _BidiCdpSession_connection, "f").closed ||
            __classPrivateFieldGet(this, _BidiCdpSession_detached, "f")) {
            return;
        }
        try {
            await this.frame.client.send('Target.detachFromTarget', {
                sessionId: this.id(),
            });
        }
        finally {
            this.onClose();
        }
    }
    id() {
        const value = __classPrivateFieldGet(this, _BidiCdpSession_sessionId, "f").value();
        return typeof value === 'string' ? value : '';
    }
}
_BidiCdpSession_detached = new WeakMap(), _BidiCdpSession_connection = new WeakMap(), _BidiCdpSession_sessionId = new WeakMap();
Object.defineProperty(BidiCdpSession, "sessions", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: new Map()
});


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