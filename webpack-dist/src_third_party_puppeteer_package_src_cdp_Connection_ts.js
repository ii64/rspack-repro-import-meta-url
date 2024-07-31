"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_Connection_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/Connection.ts":
/*!*****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/Connection.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Connection: () => (/* binding */ Connection),
/* harmony export */   isTargetClosedError: () => (/* binding */ isTargetClosedError)
/* harmony export */ });
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/src/api/CDPSession.ts");
/* harmony import */ var _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/CallbackRegistry.js */ "./src/third_party/puppeteer/package/src/common/CallbackRegistry.ts");
/* harmony import */ var _common_Debug_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Debug.js */ "./src/third_party/puppeteer/package/src/common/Debug.ts");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/src/util/ErrorLike.ts");
/* harmony import */ var _CDPSession_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CDPSession.js */ "./src/third_party/puppeteer/package/src/cdp/CDPSession.ts");
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
var _Connection_instances, _Connection_url, _Connection_transport, _Connection_delay, _Connection_timeout, _Connection_sessions, _Connection_closed, _Connection_manuallyAttached, _Connection_callbacks, _Connection_onClose;







const debugProtocolSend = (0,_common_Debug_js__WEBPACK_IMPORTED_MODULE_2__.debug)('puppeteer:protocol:SEND ►');
const debugProtocolReceive = (0,_common_Debug_js__WEBPACK_IMPORTED_MODULE_2__.debug)('puppeteer:protocol:RECV ◀');
/**
 * @public
 */
class Connection extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_4__.EventEmitter {
    constructor(url, transport, delay = 0, timeout) {
        super();
        _Connection_instances.add(this);
        _Connection_url.set(this, void 0);
        _Connection_transport.set(this, void 0);
        _Connection_delay.set(this, void 0);
        _Connection_timeout.set(this, void 0);
        _Connection_sessions.set(this, new Map());
        _Connection_closed.set(this, false);
        _Connection_manuallyAttached.set(this, new Set());
        _Connection_callbacks.set(this, new _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_1__.CallbackRegistry());
        __classPrivateFieldSet(this, _Connection_url, url, "f");
        __classPrivateFieldSet(this, _Connection_delay, delay, "f");
        __classPrivateFieldSet(this, _Connection_timeout, timeout ?? 180000, "f");
        __classPrivateFieldSet(this, _Connection_transport, transport, "f");
        __classPrivateFieldGet(this, _Connection_transport, "f").onmessage = this.onMessage.bind(this);
        __classPrivateFieldGet(this, _Connection_transport, "f").onclose = __classPrivateFieldGet(this, _Connection_instances, "m", _Connection_onClose).bind(this);
    }
    static fromSession(session) {
        return session.connection();
    }
    /**
     * @internal
     */
    get delay() {
        return __classPrivateFieldGet(this, _Connection_delay, "f");
    }
    get timeout() {
        return __classPrivateFieldGet(this, _Connection_timeout, "f");
    }
    /**
     * @internal
     */
    get _closed() {
        return __classPrivateFieldGet(this, _Connection_closed, "f");
    }
    /**
     * @internal
     */
    get _sessions() {
        return __classPrivateFieldGet(this, _Connection_sessions, "f");
    }
    /**
     * @param sessionId - The session id
     * @returns The current CDP session if it exists
     */
    session(sessionId) {
        return __classPrivateFieldGet(this, _Connection_sessions, "f").get(sessionId) || null;
    }
    url() {
        return __classPrivateFieldGet(this, _Connection_url, "f");
    }
    send(method, params, options) {
        // There is only ever 1 param arg passed, but the Protocol defines it as an
        // array of 0 or 1 items See this comment:
        // https://github.com/ChromeDevTools/devtools-protocol/pull/113#issuecomment-412603285
        // which explains why the protocol defines the params this way for better
        // type-inference.
        // So now we check if there are any params or not and deal with them accordingly.
        return this._rawSend(__classPrivateFieldGet(this, _Connection_callbacks, "f"), method, params, undefined, options);
    }
    /**
     * @internal
     */
    _rawSend(callbacks, method, params, sessionId, options) {
        if (__classPrivateFieldGet(this, _Connection_closed, "f")) {
            return Promise.reject(new Error('Protocol error: Connection closed.'));
        }
        return callbacks.create(method, options?.timeout ?? __classPrivateFieldGet(this, _Connection_timeout, "f"), id => {
            const stringifiedMessage = JSON.stringify({
                method,
                params,
                id,
                sessionId,
            });
            debugProtocolSend(stringifiedMessage);
            __classPrivateFieldGet(this, _Connection_transport, "f").send(stringifiedMessage);
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
        if (__classPrivateFieldGet(this, _Connection_delay, "f")) {
            await new Promise(r => {
                return setTimeout(r, __classPrivateFieldGet(this, _Connection_delay, "f"));
            });
        }
        debugProtocolReceive(message);
        const object = JSON.parse(message);
        if (object.method === 'Target.attachedToTarget') {
            const sessionId = object.params.sessionId;
            const session = new _CDPSession_js__WEBPACK_IMPORTED_MODULE_6__.CdpCDPSession(this, object.params.targetInfo.type, sessionId, object.sessionId);
            __classPrivateFieldGet(this, _Connection_sessions, "f").set(sessionId, session);
            this.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionAttached, session);
            const parentSession = __classPrivateFieldGet(this, _Connection_sessions, "f").get(object.sessionId);
            if (parentSession) {
                parentSession.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionAttached, session);
            }
        }
        else if (object.method === 'Target.detachedFromTarget') {
            const session = __classPrivateFieldGet(this, _Connection_sessions, "f").get(object.params.sessionId);
            if (session) {
                session._onClosed();
                __classPrivateFieldGet(this, _Connection_sessions, "f").delete(object.params.sessionId);
                this.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionDetached, session);
                const parentSession = __classPrivateFieldGet(this, _Connection_sessions, "f").get(object.sessionId);
                if (parentSession) {
                    parentSession.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionDetached, session);
                }
            }
        }
        if (object.sessionId) {
            const session = __classPrivateFieldGet(this, _Connection_sessions, "f").get(object.sessionId);
            if (session) {
                session._onMessage(object);
            }
        }
        else if (object.id) {
            if (object.error) {
                __classPrivateFieldGet(this, _Connection_callbacks, "f").reject(object.id, (0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_5__.createProtocolErrorMessage)(object), object.error.message);
            }
            else {
                __classPrivateFieldGet(this, _Connection_callbacks, "f").resolve(object.id, object.result);
            }
        }
        else {
            this.emit(object.method, object.params);
        }
    }
    dispose() {
        __classPrivateFieldGet(this, _Connection_instances, "m", _Connection_onClose).call(this);
        __classPrivateFieldGet(this, _Connection_transport, "f").close();
    }
    /**
     * @internal
     */
    isAutoAttached(targetId) {
        return !__classPrivateFieldGet(this, _Connection_manuallyAttached, "f").has(targetId);
    }
    /**
     * @internal
     */
    async _createSession(targetInfo, isAutoAttachEmulated = true) {
        if (!isAutoAttachEmulated) {
            __classPrivateFieldGet(this, _Connection_manuallyAttached, "f").add(targetInfo.targetId);
        }
        const { sessionId } = await this.send('Target.attachToTarget', {
            targetId: targetInfo.targetId,
            flatten: true,
        });
        __classPrivateFieldGet(this, _Connection_manuallyAttached, "f").delete(targetInfo.targetId);
        const session = __classPrivateFieldGet(this, _Connection_sessions, "f").get(sessionId);
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
        result.push(...__classPrivateFieldGet(this, _Connection_callbacks, "f").getPendingProtocolErrors());
        for (const session of __classPrivateFieldGet(this, _Connection_sessions, "f").values()) {
            result.push(...session.getPendingProtocolErrors());
        }
        return result;
    }
}
_Connection_url = new WeakMap(), _Connection_transport = new WeakMap(), _Connection_delay = new WeakMap(), _Connection_timeout = new WeakMap(), _Connection_sessions = new WeakMap(), _Connection_closed = new WeakMap(), _Connection_manuallyAttached = new WeakMap(), _Connection_callbacks = new WeakMap(), _Connection_instances = new WeakSet(), _Connection_onClose = function _Connection_onClose() {
    if (__classPrivateFieldGet(this, _Connection_closed, "f")) {
        return;
    }
    __classPrivateFieldSet(this, _Connection_closed, true, "f");
    __classPrivateFieldGet(this, _Connection_transport, "f").onmessage = undefined;
    __classPrivateFieldGet(this, _Connection_transport, "f").onclose = undefined;
    __classPrivateFieldGet(this, _Connection_callbacks, "f").clear();
    for (const session of __classPrivateFieldGet(this, _Connection_sessions, "f").values()) {
        session._onClosed();
    }
    __classPrivateFieldGet(this, _Connection_sessions, "f").clear();
    this.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, undefined);
};
/**
 * @internal
 */
function isTargetClosedError(error) {
    return error instanceof _common_Errors_js__WEBPACK_IMPORTED_MODULE_3__.TargetCloseError;
}


/***/ })

}]);