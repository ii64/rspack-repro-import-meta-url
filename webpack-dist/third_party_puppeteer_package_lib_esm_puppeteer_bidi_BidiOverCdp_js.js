"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_BidiOverCdp_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/BidiOverCdp.js":
/*!*****************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/bidi/BidiOverCdp.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   connectBidiOverCdp: () => (/* binding */ connectBidiOverCdp)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_Debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Debug.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Debug.js");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _Connection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Connection.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Connection.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */




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
            default: "ignore" /* Bidi.Session.UserPromptHandlerType.Ignore */,
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
    #cdp;
    #adapters = new Map();
    #browserCdpConnection;
    constructor(cdp) {
        this.#cdp = cdp;
        this.#browserCdpConnection = new CDPClientAdapter(cdp);
    }
    browserClient() {
        return this.#browserCdpConnection;
    }
    getCdpClient(id) {
        const session = this.#cdp.session(id);
        if (!session) {
            throw new Error(`Unknown CDP session with id ${id}`);
        }
        if (!this.#adapters.has(session)) {
            const adapter = new CDPClientAdapter(session, id, this.#browserCdpConnection);
            this.#adapters.set(session, adapter);
            return adapter;
        }
        return this.#adapters.get(session);
    }
    close() {
        this.#browserCdpConnection.close();
        for (const adapter of this.#adapters.values()) {
            adapter.close();
        }
    }
}
/**
 * Wrapper on top of CDPSession/CDPConnection to satisfy CDP interface that
 * BidiServer needs.
 *
 * @internal
 */
class CDPClientAdapter extends Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) {
    #closed = false;
    #client;
    sessionId = undefined;
    #browserClient;
    constructor(client, sessionId, browserClient) {
        super();
        this.#client = client;
        this.sessionId = sessionId;
        this.#browserClient = browserClient;
        this.#client.on('*', this.#forwardMessage);
    }
    browserClient() {
        return this.#browserClient;
    }
    #forwardMessage = (method, event) => {
        this.emit(method, event);
    };
    async sendCommand(method, ...params) {
        if (this.#closed) {
            return;
        }
        try {
            return await this.#client.send(method, ...params);
        }
        catch (err) {
            if (this.#closed) {
                return;
            }
            throw err;
        }
    }
    close() {
        this.#client.off('*', this.#forwardMessage);
        this.#closed = true;
    }
    isCloseError(error) {
        return error instanceof _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__.TargetCloseError;
    }
}
/**
 * This transport is given to the BiDi server instance and allows Puppeteer
 * to send and receive commands to the BiDiServer.
 * @internal
 */
class NoOpTransport extends Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) {
    #onMessage = async (_m) => {
        return;
    };
    emitMessage(message) {
        void this.#onMessage(message);
    }
    setOnMessage(onMessage) {
        this.#onMessage = onMessage;
    }
    async sendMessage(message) {
        this.emit('bidiResponse', message);
    }
    close() {
        this.#onMessage = async (_m) => {
            return;
        };
    }
}
//# sourceMappingURL=BidiOverCdp.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Connection.js":
/*!****************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Connection.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiConnection: () => (/* binding */ BidiConnection)
/* harmony export */ });
/* harmony import */ var _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/CallbackRegistry.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/CallbackRegistry.js");
/* harmony import */ var _common_Debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Debug.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Debug.js");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _CDPSession_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/CDPSession.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */






const debugProtocolSend = (0,_common_Debug_js__WEBPACK_IMPORTED_MODULE_1__.debug)('puppeteer:webDriverBiDi:SEND ►');
const debugProtocolReceive = (0,_common_Debug_js__WEBPACK_IMPORTED_MODULE_1__.debug)('puppeteer:webDriverBiDi:RECV ◀');
/**
 * @internal
 */
class BidiConnection extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__.EventEmitter {
    #url;
    #transport;
    #delay;
    #timeout = 0;
    #closed = false;
    #callbacks = new _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_0__.CallbackRegistry();
    #emitters = [];
    constructor(url, transport, delay = 0, timeout) {
        super();
        this.#url = url;
        this.#delay = delay;
        this.#timeout = timeout ?? 180_000;
        this.#transport = transport;
        this.#transport.onmessage = this.onMessage.bind(this);
        this.#transport.onclose = this.unbind.bind(this);
    }
    get closed() {
        return this.#closed;
    }
    get url() {
        return this.#url;
    }
    pipeTo(emitter) {
        this.#emitters.push(emitter);
    }
    emit(type, event) {
        for (const emitter of this.#emitters) {
            emitter.emit(type, event);
        }
        return super.emit(type, event);
    }
    send(method, params, timeout) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)(!this.#closed, 'Protocol error: Connection closed.');
        return this.#callbacks.create(method, timeout ?? this.#timeout, id => {
            const stringifiedMessage = JSON.stringify({
                id,
                method,
                params,
            });
            debugProtocolSend(stringifiedMessage);
            this.#transport.send(stringifiedMessage);
        });
    }
    /**
     * @internal
     */
    async onMessage(message) {
        if (this.#delay) {
            await new Promise(f => {
                return setTimeout(f, this.#delay);
            });
        }
        debugProtocolReceive(message);
        const object = JSON.parse(message);
        if ('type' in object) {
            switch (object.type) {
                case 'success':
                    this.#callbacks.resolve(object.id, object);
                    return;
                case 'error':
                    if (object.id === null) {
                        break;
                    }
                    this.#callbacks.reject(object.id, createProtocolError(object), `${object.error}: ${object.message}`);
                    return;
                case 'event':
                    if (isCdpEvent(object)) {
                        _CDPSession_js__WEBPACK_IMPORTED_MODULE_5__.BidiCdpSession.sessions
                            .get(object.params.session)
                            ?.emit(object.params.event, object.params.params);
                        return;
                    }
                    // SAFETY: We know the method and parameter still match here.
                    this.emit(object.method, object.params);
                    return;
            }
        }
        // Even if the response in not in BiDi protocol format but `id` is provided, reject
        // the callback. This can happen if the endpoint supports CDP instead of BiDi.
        if ('id' in object) {
            this.#callbacks.reject(object.id, `Protocol Error. Message is not in BiDi protocol format: '${message}'`, object.message);
        }
        (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError)(object);
    }
    /**
     * Unbinds the connection, but keeps the transport open. Useful when the transport will
     * be reused by other connection e.g. with different protocol.
     * @internal
     */
    unbind() {
        if (this.#closed) {
            return;
        }
        this.#closed = true;
        // Both may still be invoked and produce errors
        this.#transport.onmessage = () => { };
        this.#transport.onclose = () => { };
        this.#callbacks.clear();
    }
    /**
     * Unbinds the connection and closes the transport.
     */
    dispose() {
        this.unbind();
        this.#transport.close();
    }
    getPendingProtocolErrors() {
        return this.#callbacks.getPendingProtocolErrors();
    }
}
/**
 * @internal
 */
function createProtocolError(object) {
    let message = `${object.error} ${object.message}`;
    if (object.stacktrace) {
        message += ` ${object.stacktrace}`;
    }
    return message;
}
function isCdpEvent(event) {
    return event.method.startsWith('cdp.');
}
//# sourceMappingURL=Connection.js.map

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

/***/ })

}]);