"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_Connection_ts"],{

/***/ "./src/third_party/puppeteer/package/src/bidi/Connection.ts":
/*!******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/Connection.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiConnection: () => (/* binding */ BidiConnection)
/* harmony export */ });
/* harmony import */ var _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/CallbackRegistry.js */ "./src/third_party/puppeteer/package/src/common/CallbackRegistry.ts");
/* harmony import */ var _common_Debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Debug.js */ "./src/third_party/puppeteer/package/src/common/Debug.ts");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/* harmony import */ var _CDPSession_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CDPSession.js */ "./src/third_party/puppeteer/package/src/bidi/CDPSession.ts");
/**
 * @license
 * Copyright 2017 Google Inc.
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
var _BidiConnection_url, _BidiConnection_transport, _BidiConnection_delay, _BidiConnection_timeout, _BidiConnection_closed, _BidiConnection_callbacks, _BidiConnection_emitters;






const debugProtocolSend = (0,_common_Debug_js__WEBPACK_IMPORTED_MODULE_1__.debug)('puppeteer:webDriverBiDi:SEND ►');
const debugProtocolReceive = (0,_common_Debug_js__WEBPACK_IMPORTED_MODULE_1__.debug)('puppeteer:webDriverBiDi:RECV ◀');
/**
 * @internal
 */
class BidiConnection extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__.EventEmitter {
    constructor(url, transport, delay = 0, timeout) {
        super();
        _BidiConnection_url.set(this, void 0);
        _BidiConnection_transport.set(this, void 0);
        _BidiConnection_delay.set(this, void 0);
        _BidiConnection_timeout.set(this, 0);
        _BidiConnection_closed.set(this, false);
        _BidiConnection_callbacks.set(this, new _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_0__.CallbackRegistry());
        _BidiConnection_emitters.set(this, []);
        __classPrivateFieldSet(this, _BidiConnection_url, url, "f");
        __classPrivateFieldSet(this, _BidiConnection_delay, delay, "f");
        __classPrivateFieldSet(this, _BidiConnection_timeout, timeout ?? 180000, "f");
        __classPrivateFieldSet(this, _BidiConnection_transport, transport, "f");
        __classPrivateFieldGet(this, _BidiConnection_transport, "f").onmessage = this.onMessage.bind(this);
        __classPrivateFieldGet(this, _BidiConnection_transport, "f").onclose = this.unbind.bind(this);
    }
    get closed() {
        return __classPrivateFieldGet(this, _BidiConnection_closed, "f");
    }
    get url() {
        return __classPrivateFieldGet(this, _BidiConnection_url, "f");
    }
    pipeTo(emitter) {
        __classPrivateFieldGet(this, _BidiConnection_emitters, "f").push(emitter);
    }
    emit(type, event) {
        for (const emitter of __classPrivateFieldGet(this, _BidiConnection_emitters, "f")) {
            emitter.emit(type, event);
        }
        return super.emit(type, event);
    }
    send(method, params, timeout) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)(!__classPrivateFieldGet(this, _BidiConnection_closed, "f"), 'Protocol error: Connection closed.');
        return __classPrivateFieldGet(this, _BidiConnection_callbacks, "f").create(method, timeout ?? __classPrivateFieldGet(this, _BidiConnection_timeout, "f"), id => {
            const stringifiedMessage = JSON.stringify({
                id,
                method,
                params,
            });
            debugProtocolSend(stringifiedMessage);
            __classPrivateFieldGet(this, _BidiConnection_transport, "f").send(stringifiedMessage);
        });
    }
    /**
     * @internal
     */
    async onMessage(message) {
        if (__classPrivateFieldGet(this, _BidiConnection_delay, "f")) {
            await new Promise(f => {
                return setTimeout(f, __classPrivateFieldGet(this, _BidiConnection_delay, "f"));
            });
        }
        debugProtocolReceive(message);
        const object = JSON.parse(message);
        if ('type' in object) {
            switch (object.type) {
                case 'success':
                    __classPrivateFieldGet(this, _BidiConnection_callbacks, "f").resolve(object.id, object);
                    return;
                case 'error':
                    if (object.id === null) {
                        break;
                    }
                    __classPrivateFieldGet(this, _BidiConnection_callbacks, "f").reject(object.id, createProtocolError(object), `${object.error}: ${object.message}`);
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
            __classPrivateFieldGet(this, _BidiConnection_callbacks, "f").reject(object.id, `Protocol Error. Message is not in BiDi protocol format: '${message}'`, object.message);
        }
        (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError)(object);
    }
    /**
     * Unbinds the connection, but keeps the transport open. Useful when the transport will
     * be reused by other connection e.g. with different protocol.
     * @internal
     */
    unbind() {
        if (__classPrivateFieldGet(this, _BidiConnection_closed, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _BidiConnection_closed, true, "f");
        // Both may still be invoked and produce errors
        __classPrivateFieldGet(this, _BidiConnection_transport, "f").onmessage = () => { };
        __classPrivateFieldGet(this, _BidiConnection_transport, "f").onclose = () => { };
        __classPrivateFieldGet(this, _BidiConnection_callbacks, "f").clear();
    }
    /**
     * Unbinds the connection and closes the transport.
     */
    dispose() {
        this.unbind();
        __classPrivateFieldGet(this, _BidiConnection_transport, "f").close();
    }
    getPendingProtocolErrors() {
        return __classPrivateFieldGet(this, _BidiConnection_callbacks, "f").getPendingProtocolErrors();
    }
}
_BidiConnection_url = new WeakMap(), _BidiConnection_transport = new WeakMap(), _BidiConnection_delay = new WeakMap(), _BidiConnection_timeout = new WeakMap(), _BidiConnection_closed = new WeakMap(), _BidiConnection_callbacks = new WeakMap(), _BidiConnection_emitters = new WeakMap();
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


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/CallbackRegistry.ts":
/*!**************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/CallbackRegistry.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Callback: () => (/* binding */ Callback),
/* harmony export */   CallbackRegistry: () => (/* binding */ CallbackRegistry),
/* harmony export */   createIncrementalIdGenerator: () => (/* binding */ createIncrementalIdGenerator)
/* harmony export */ });
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/src/util/Deferred.ts");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/src/util/ErrorLike.ts");
/* harmony import */ var _Errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
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
var _CallbackRegistry_callbacks, _CallbackRegistry_idGenerator, _Callback_id, _Callback_error, _Callback_deferred, _Callback_timer, _Callback_label;




/**
 * Manages callbacks and their IDs for the protocol request/response communication.
 *
 * @internal
 */
class CallbackRegistry {
    constructor() {
        _CallbackRegistry_callbacks.set(this, new Map());
        _CallbackRegistry_idGenerator.set(this, createIncrementalIdGenerator());
    }
    create(label, timeout, request) {
        const callback = new Callback(__classPrivateFieldGet(this, _CallbackRegistry_idGenerator, "f").call(this), label, timeout);
        __classPrivateFieldGet(this, _CallbackRegistry_callbacks, "f").set(callback.id, callback);
        try {
            request(callback.id);
        }
        catch (error) {
            // We still throw sync errors synchronously and clean up the scheduled
            // callback.
            callback.promise.catch(_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError).finally(() => {
                __classPrivateFieldGet(this, _CallbackRegistry_callbacks, "f").delete(callback.id);
            });
            callback.reject(error);
            throw error;
        }
        // Must only have sync code up until here.
        return callback.promise.finally(() => {
            __classPrivateFieldGet(this, _CallbackRegistry_callbacks, "f").delete(callback.id);
        });
    }
    reject(id, message, originalMessage) {
        const callback = __classPrivateFieldGet(this, _CallbackRegistry_callbacks, "f").get(id);
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
        const callback = __classPrivateFieldGet(this, _CallbackRegistry_callbacks, "f").get(id);
        if (!callback) {
            return;
        }
        callback.resolve(value);
    }
    clear() {
        for (const callback of __classPrivateFieldGet(this, _CallbackRegistry_callbacks, "f").values()) {
            // TODO: probably we can accept error messages as params.
            this._reject(callback, new _Errors_js__WEBPACK_IMPORTED_MODULE_2__.TargetCloseError('Target closed'));
        }
        __classPrivateFieldGet(this, _CallbackRegistry_callbacks, "f").clear();
    }
    /**
     * @internal
     */
    getPendingProtocolErrors() {
        const result = [];
        for (const callback of __classPrivateFieldGet(this, _CallbackRegistry_callbacks, "f").values()) {
            result.push(new Error(`${callback.label} timed out. Trace: ${callback.error.stack}`));
        }
        return result;
    }
}
_CallbackRegistry_callbacks = new WeakMap(), _CallbackRegistry_idGenerator = new WeakMap();
/**
 * @internal
 */
class Callback {
    constructor(id, label, timeout) {
        _Callback_id.set(this, void 0);
        _Callback_error.set(this, new _Errors_js__WEBPACK_IMPORTED_MODULE_2__.ProtocolError());
        _Callback_deferred.set(this, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred.create());
        _Callback_timer.set(this, void 0);
        _Callback_label.set(this, void 0);
        __classPrivateFieldSet(this, _Callback_id, id, "f");
        __classPrivateFieldSet(this, _Callback_label, label, "f");
        if (timeout) {
            __classPrivateFieldSet(this, _Callback_timer, setTimeout(() => {
                __classPrivateFieldGet(this, _Callback_deferred, "f").reject((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__.rewriteError)(__classPrivateFieldGet(this, _Callback_error, "f"), `${label} timed out. Increase the 'protocolTimeout' setting in launch/connect calls for a higher timeout if needed.`));
            }, timeout), "f");
        }
    }
    resolve(value) {
        clearTimeout(__classPrivateFieldGet(this, _Callback_timer, "f"));
        __classPrivateFieldGet(this, _Callback_deferred, "f").resolve(value);
    }
    reject(error) {
        clearTimeout(__classPrivateFieldGet(this, _Callback_timer, "f"));
        __classPrivateFieldGet(this, _Callback_deferred, "f").reject(error);
    }
    get id() {
        return __classPrivateFieldGet(this, _Callback_id, "f");
    }
    get promise() {
        return __classPrivateFieldGet(this, _Callback_deferred, "f").valueOrThrow();
    }
    get error() {
        return __classPrivateFieldGet(this, _Callback_error, "f");
    }
    get label() {
        return __classPrivateFieldGet(this, _Callback_label, "f");
    }
}
_Callback_id = new WeakMap(), _Callback_error = new WeakMap(), _Callback_deferred = new WeakMap(), _Callback_timer = new WeakMap(), _Callback_label = new WeakMap();
/**
 * @internal
 */
function createIncrementalIdGenerator() {
    let id = 0;
    return () => {
        return ++id;
    };
}


/***/ })

}]);