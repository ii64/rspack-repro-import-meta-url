"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_bidi_ts"],{

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

/***/ "./src/third_party/puppeteer/package/src/bidi/bidi.ts":
/*!************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/bidi.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiBrowser: () => (/* reexport safe */ _Browser_js__WEBPACK_IMPORTED_MODULE_1__.BidiBrowser),
/* harmony export */   BidiBrowserContext: () => (/* reexport safe */ _BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.BidiBrowserContext),
/* harmony export */   BidiConnection: () => (/* reexport safe */ _Connection_js__WEBPACK_IMPORTED_MODULE_3__.BidiConnection),
/* harmony export */   BidiElementHandle: () => (/* reexport safe */ _ElementHandle_js__WEBPACK_IMPORTED_MODULE_4__.BidiElementHandle),
/* harmony export */   BidiFrame: () => (/* reexport safe */ _Frame_js__WEBPACK_IMPORTED_MODULE_5__.BidiFrame),
/* harmony export */   BidiHTTPRequest: () => (/* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_6__.BidiHTTPRequest),
/* harmony export */   BidiHTTPResponse: () => (/* reexport safe */ _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_7__.BidiHTTPResponse),
/* harmony export */   BidiJSHandle: () => (/* reexport safe */ _JSHandle_js__WEBPACK_IMPORTED_MODULE_9__.BidiJSHandle),
/* harmony export */   BidiKeyboard: () => (/* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_8__.BidiKeyboard),
/* harmony export */   BidiMouse: () => (/* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_8__.BidiMouse),
/* harmony export */   BidiPage: () => (/* reexport safe */ _Page_js__WEBPACK_IMPORTED_MODULE_10__.BidiPage),
/* harmony export */   BidiTouchscreen: () => (/* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_8__.BidiTouchscreen),
/* harmony export */   connectBidiOverCdp: () => (/* reexport safe */ _BidiOverCdp_js__WEBPACK_IMPORTED_MODULE_0__.connectBidiOverCdp),
/* harmony export */   requests: () => (/* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_6__.requests)
/* harmony export */ });
/* harmony import */ var _BidiOverCdp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BidiOverCdp.js */ "./src/third_party/puppeteer/package/src/bidi/BidiOverCdp.ts");
/* harmony import */ var _Browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Browser.js */ "./src/third_party/puppeteer/package/src/bidi/Browser.ts");
/* harmony import */ var _BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrowserContext.js */ "./src/third_party/puppeteer/package/src/bidi/BrowserContext.ts");
/* harmony import */ var _Connection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Connection.js */ "./src/third_party/puppeteer/package/src/bidi/Connection.ts");
/* harmony import */ var _ElementHandle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ElementHandle.js */ "./src/third_party/puppeteer/package/src/bidi/ElementHandle.ts");
/* harmony import */ var _Frame_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Frame.js */ "./src/third_party/puppeteer/package/src/bidi/Frame.ts");
/* harmony import */ var _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HTTPRequest.js */ "./src/third_party/puppeteer/package/src/bidi/HTTPRequest.ts");
/* harmony import */ var _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HTTPResponse.js */ "./src/third_party/puppeteer/package/src/bidi/HTTPResponse.ts");
/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Input.js */ "./src/third_party/puppeteer/package/src/bidi/Input.ts");
/* harmony import */ var _JSHandle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/src/bidi/JSHandle.ts");
/* harmony import */ var _Page_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Page.js */ "./src/third_party/puppeteer/package/src/bidi/Page.ts");
/* harmony import */ var _Realm_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Realm.js */ "./src/third_party/puppeteer/package/src/bidi/Realm.ts");
/* harmony import */ var _Realm_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Realm_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Realm_js__WEBPACK_IMPORTED_MODULE_11__) if(["default","connectBidiOverCdp","BidiBrowser","BidiBrowserContext","BidiConnection","BidiElementHandle","BidiFrame","BidiHTTPRequest","requests","BidiHTTPResponse","BidiKeyboard","BidiMouse","BidiTouchscreen","BidiJSHandle","BidiPage"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Realm_js__WEBPACK_IMPORTED_MODULE_11__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */














/***/ })

}]);