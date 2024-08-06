"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_Connection_js"],{

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

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js":
/*!***************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Connection: () => (/* binding */ Connection),
/* harmony export */   isTargetClosedError: () => (/* binding */ isTargetClosedError)
/* harmony export */ });
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */ var _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/CallbackRegistry.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/CallbackRegistry.js");
/* harmony import */ var _common_Debug_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Debug.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Debug.js");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */ var _CDPSession_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/CDPSession.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */







const debugProtocolSend = (0,_common_Debug_js__WEBPACK_IMPORTED_MODULE_2__.debug)('puppeteer:protocol:SEND ►');
const debugProtocolReceive = (0,_common_Debug_js__WEBPACK_IMPORTED_MODULE_2__.debug)('puppeteer:protocol:RECV ◀');
/**
 * @public
 */
class Connection extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_4__.EventEmitter {
    #url;
    #transport;
    #delay;
    #timeout;
    #sessions = new Map();
    #closed = false;
    #manuallyAttached = new Set();
    #callbacks = new _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_1__.CallbackRegistry();
    constructor(url, transport, delay = 0, timeout) {
        super();
        this.#url = url;
        this.#delay = delay;
        this.#timeout = timeout ?? 180_000;
        this.#transport = transport;
        this.#transport.onmessage = this.onMessage.bind(this);
        this.#transport.onclose = this.#onClose.bind(this);
    }
    static fromSession(session) {
        return session.connection();
    }
    /**
     * @internal
     */
    get delay() {
        return this.#delay;
    }
    get timeout() {
        return this.#timeout;
    }
    /**
     * @internal
     */
    get _closed() {
        return this.#closed;
    }
    /**
     * @internal
     */
    get _sessions() {
        return this.#sessions;
    }
    /**
     * @param sessionId - The session id
     * @returns The current CDP session if it exists
     */
    session(sessionId) {
        return this.#sessions.get(sessionId) || null;
    }
    url() {
        return this.#url;
    }
    send(method, params, options) {
        // There is only ever 1 param arg passed, but the Protocol defines it as an
        // array of 0 or 1 items See this comment:
        // https://github.com/ChromeDevTools/devtools-protocol/pull/113#issuecomment-412603285
        // which explains why the protocol defines the params this way for better
        // type-inference.
        // So now we check if there are any params or not and deal with them accordingly.
        return this._rawSend(this.#callbacks, method, params, undefined, options);
    }
    /**
     * @internal
     */
    _rawSend(callbacks, method, params, sessionId, options) {
        if (this.#closed) {
            return Promise.reject(new Error('Protocol error: Connection closed.'));
        }
        return callbacks.create(method, options?.timeout ?? this.#timeout, id => {
            const stringifiedMessage = JSON.stringify({
                method,
                params,
                id,
                sessionId,
            });
            debugProtocolSend(stringifiedMessage);
            this.#transport.send(stringifiedMessage);
        });
    }
    /**
     * @internal
     */
    async closeBrowser() {
        await this.send('Browser.close');
    }
    /**
     * @internal
     */
    async onMessage(message) {
        if (this.#delay) {
            await new Promise(r => {
                return setTimeout(r, this.#delay);
            });
        }
        debugProtocolReceive(message);
        const object = JSON.parse(message);
        if (object.method === 'Target.attachedToTarget') {
            const sessionId = object.params.sessionId;
            const session = new _CDPSession_js__WEBPACK_IMPORTED_MODULE_6__.CdpCDPSession(this, object.params.targetInfo.type, sessionId, object.sessionId);
            this.#sessions.set(sessionId, session);
            this.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionAttached, session);
            const parentSession = this.#sessions.get(object.sessionId);
            if (parentSession) {
                parentSession.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionAttached, session);
            }
        }
        else if (object.method === 'Target.detachedFromTarget') {
            const session = this.#sessions.get(object.params.sessionId);
            if (session) {
                session._onClosed();
                this.#sessions.delete(object.params.sessionId);
                this.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionDetached, session);
                const parentSession = this.#sessions.get(object.sessionId);
                if (parentSession) {
                    parentSession.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionDetached, session);
                }
            }
        }
        if (object.sessionId) {
            const session = this.#sessions.get(object.sessionId);
            if (session) {
                session._onMessage(object);
            }
        }
        else if (object.id) {
            if (object.error) {
                this.#callbacks.reject(object.id, (0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_5__.createProtocolErrorMessage)(object), object.error.message);
            }
            else {
                this.#callbacks.resolve(object.id, object.result);
            }
        }
        else {
            this.emit(object.method, object.params);
        }
    }
    #onClose() {
        if (this.#closed) {
            return;
        }
        this.#closed = true;
        this.#transport.onmessage = undefined;
        this.#transport.onclose = undefined;
        this.#callbacks.clear();
        for (const session of this.#sessions.values()) {
            session._onClosed();
        }
        this.#sessions.clear();
        this.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, undefined);
    }
    dispose() {
        this.#onClose();
        this.#transport.close();
    }
    /**
     * @internal
     */
    isAutoAttached(targetId) {
        return !this.#manuallyAttached.has(targetId);
    }
    /**
     * @internal
     */
    async _createSession(targetInfo, isAutoAttachEmulated = true) {
        if (!isAutoAttachEmulated) {
            this.#manuallyAttached.add(targetInfo.targetId);
        }
        const { sessionId } = await this.send('Target.attachToTarget', {
            targetId: targetInfo.targetId,
            flatten: true,
        });
        this.#manuallyAttached.delete(targetInfo.targetId);
        const session = this.#sessions.get(sessionId);
        if (!session) {
            throw new Error('CDPSession creation failed.');
        }
        return session;
    }
    /**
     * @param targetInfo - The target info
     * @returns The CDP session that is created
     */
    async createSession(targetInfo) {
        return await this._createSession(targetInfo, false);
    }
    /**
     * @internal
     */
    getPendingProtocolErrors() {
        const result = [];
        result.push(...this.#callbacks.getPendingProtocolErrors());
        for (const session of this.#sessions.values()) {
            result.push(...session.getPendingProtocolErrors());
        }
        return result;
    }
}
/**
 * @internal
 */
function isTargetClosedError(error) {
    return error instanceof _common_Errors_js__WEBPACK_IMPORTED_MODULE_3__.TargetCloseError;
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