"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_CDPSession_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/CDPSession.ts":
/*!*****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/CDPSession.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpCDPSession: () => (/* binding */ CdpCDPSession)
/* harmony export */ });
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/src/api/CDPSession.ts");
/* harmony import */ var _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/CallbackRegistry.js */ "./src/third_party/puppeteer/package/src/common/CallbackRegistry.ts");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/src/util/ErrorLike.ts");
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
var _CdpCDPSession_sessionId, _CdpCDPSession_targetType, _CdpCDPSession_callbacks, _CdpCDPSession_connection, _CdpCDPSession_parentSessionId, _CdpCDPSession_target;





/**
 * @internal
 */
class CdpCDPSession extends _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSession {
    /**
     * @internal
     */
    constructor(connection, targetType, sessionId, parentSessionId) {
        super();
        _CdpCDPSession_sessionId.set(this, void 0);
        _CdpCDPSession_targetType.set(this, void 0);
        _CdpCDPSession_callbacks.set(this, new _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_1__.CallbackRegistry());
        _CdpCDPSession_connection.set(this, void 0);
        _CdpCDPSession_parentSessionId.set(this, void 0);
        _CdpCDPSession_target.set(this, void 0);
        __classPrivateFieldSet(this, _CdpCDPSession_connection, connection, "f");
        __classPrivateFieldSet(this, _CdpCDPSession_targetType, targetType, "f");
        __classPrivateFieldSet(this, _CdpCDPSession_sessionId, sessionId, "f");
        __classPrivateFieldSet(this, _CdpCDPSession_parentSessionId, parentSessionId, "f");
    }
    /**
     * Sets the {@link CdpTarget} associated with the session instance.
     *
     * @internal
     */
    _setTarget(target) {
        __classPrivateFieldSet(this, _CdpCDPSession_target, target, "f");
    }
    /**
     * Gets the {@link CdpTarget} associated with the session instance.
     *
     * @internal
     */
    _target() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(__classPrivateFieldGet(this, _CdpCDPSession_target, "f"), 'Target must exist');
        return __classPrivateFieldGet(this, _CdpCDPSession_target, "f");
    }
    connection() {
        return __classPrivateFieldGet(this, _CdpCDPSession_connection, "f");
    }
    parentSession() {
        if (!__classPrivateFieldGet(this, _CdpCDPSession_parentSessionId, "f")) {
            // To make it work in Firefox that does not have parent (tab) sessions.
            return this;
        }
        const parent = __classPrivateFieldGet(this, _CdpCDPSession_connection, "f")?.session(__classPrivateFieldGet(this, _CdpCDPSession_parentSessionId, "f"));
        return parent ?? undefined;
    }
    send(method, params, options) {
        if (!__classPrivateFieldGet(this, _CdpCDPSession_connection, "f")) {
            return Promise.reject(new _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__.TargetCloseError(`Protocol error (${method}): Session closed. Most likely the ${__classPrivateFieldGet(this, _CdpCDPSession_targetType, "f")} has been closed.`));
        }
        return __classPrivateFieldGet(this, _CdpCDPSession_connection, "f")._rawSend(__classPrivateFieldGet(this, _CdpCDPSession_callbacks, "f"), method, params, __classPrivateFieldGet(this, _CdpCDPSession_sessionId, "f"), options);
    }
    /**
     * @internal
     */
    _onMessage(object) {
        if (object.id) {
            if (object.error) {
                __classPrivateFieldGet(this, _CdpCDPSession_callbacks, "f").reject(object.id, (0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_4__.createProtocolErrorMessage)(object), object.error.message);
            }
            else {
                __classPrivateFieldGet(this, _CdpCDPSession_callbacks, "f").resolve(object.id, object.result);
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
        if (!__classPrivateFieldGet(this, _CdpCDPSession_connection, "f")) {
            throw new Error(`Session already detached. Most likely the ${__classPrivateFieldGet(this, _CdpCDPSession_targetType, "f")} has been closed.`);
        }
        await __classPrivateFieldGet(this, _CdpCDPSession_connection, "f").send('Target.detachFromTarget', {
            sessionId: __classPrivateFieldGet(this, _CdpCDPSession_sessionId, "f"),
        });
    }
    /**
     * @internal
     */
    _onClosed() {
        __classPrivateFieldGet(this, _CdpCDPSession_callbacks, "f").clear();
        __classPrivateFieldSet(this, _CdpCDPSession_connection, undefined, "f");
        this.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, undefined);
    }
    /**
     * Returns the session's id.
     */
    id() {
        return __classPrivateFieldGet(this, _CdpCDPSession_sessionId, "f");
    }
    /**
     * @internal
     */
    getPendingProtocolErrors() {
        return __classPrivateFieldGet(this, _CdpCDPSession_callbacks, "f").getPendingProtocolErrors();
    }
}
_CdpCDPSession_sessionId = new WeakMap(), _CdpCDPSession_targetType = new WeakMap(), _CdpCDPSession_callbacks = new WeakMap(), _CdpCDPSession_connection = new WeakMap(), _CdpCDPSession_parentSessionId = new WeakMap(), _CdpCDPSession_target = new WeakMap();


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