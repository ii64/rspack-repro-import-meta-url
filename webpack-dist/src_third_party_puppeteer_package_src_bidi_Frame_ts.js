"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_Frame_ts"],{

/***/ "./src/third_party/puppeteer/package/src/api/Dialog.ts":
/*!*************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/Dialog.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
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
var _Dialog_type, _Dialog_message, _Dialog_defaultValue;

/**
 * Dialog instances are dispatched by the {@link Page} via the `dialog` event.
 *
 * @remarks
 *
 * @example
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * (async () => {
 *   const browser = await puppeteer.launch();
 *   const page = await browser.newPage();
 *   page.on('dialog', async dialog => {
 *     console.log(dialog.message());
 *     await dialog.dismiss();
 *     await browser.close();
 *   });
 *   page.evaluate(() => alert('1'));
 * })();
 * ```
 *
 * @public
 */
class Dialog {
    /**
     * @internal
     */
    constructor(type, message, defaultValue = '') {
        _Dialog_type.set(this, void 0);
        _Dialog_message.set(this, void 0);
        _Dialog_defaultValue.set(this, void 0);
        /**
         * @internal
         */
        Object.defineProperty(this, "handled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        __classPrivateFieldSet(this, _Dialog_type, type, "f");
        __classPrivateFieldSet(this, _Dialog_message, message, "f");
        __classPrivateFieldSet(this, _Dialog_defaultValue, defaultValue, "f");
    }
    /**
     * The type of the dialog.
     */
    type() {
        return __classPrivateFieldGet(this, _Dialog_type, "f");
    }
    /**
     * The message displayed in the dialog.
     */
    message() {
        return __classPrivateFieldGet(this, _Dialog_message, "f");
    }
    /**
     * The default value of the prompt, or an empty string if the dialog
     * is not a `prompt`.
     */
    defaultValue() {
        return __classPrivateFieldGet(this, _Dialog_defaultValue, "f");
    }
    /**
     * A promise that resolves when the dialog has been accepted.
     *
     * @param promptText - optional text that will be entered in the dialog
     * prompt. Has no effect if the dialog's type is not `prompt`.
     *
     */
    async accept(promptText) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!this.handled, 'Cannot accept dialog which is already handled!');
        this.handled = true;
        await this.handle({
            accept: true,
            text: promptText,
        });
    }
    /**
     * A promise which will resolve once the dialog has been dismissed
     */
    async dismiss() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!this.handled, 'Cannot dismiss dialog which is already handled!');
        this.handled = true;
        await this.handle({
            accept: false,
        });
    }
}
_Dialog_type = new WeakMap(), _Dialog_message = new WeakMap(), _Dialog_defaultValue = new WeakMap();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/api/WebWorker.ts":
/*!****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/WebWorker.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebWorker: () => (/* binding */ WebWorker)
/* harmony export */ });
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _common_TimeoutSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/TimeoutSettings.js */ "./src/third_party/puppeteer/package/src/common/TimeoutSettings.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
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
var _WebWorker_url;




/**
 * This class represents a
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API | WebWorker}.
 *
 * @remarks
 * The events `workercreated` and `workerdestroyed` are emitted on the page
 * object to signal the worker lifecycle.
 *
 * @example
 *
 * ```ts
 * page.on('workercreated', worker =>
 *   console.log('Worker created: ' + worker.url())
 * );
 * page.on('workerdestroyed', worker =>
 *   console.log('Worker destroyed: ' + worker.url())
 * );
 *
 * console.log('Current workers:');
 * for (const worker of page.workers()) {
 *   console.log('  ' + worker.url());
 * }
 * ```
 *
 * @public
 */
class WebWorker extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter {
    /**
     * @internal
     */
    constructor(url) {
        super();
        /**
         * @internal
         */
        Object.defineProperty(this, "timeoutSettings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _common_TimeoutSettings_js__WEBPACK_IMPORTED_MODULE_2__.TimeoutSettings()
        });
        _WebWorker_url.set(this, void 0);
        __classPrivateFieldSet(this, _WebWorker_url, url, "f");
    }
    /**
     * The URL of this web worker.
     */
    url() {
        return __classPrivateFieldGet(this, _WebWorker_url, "f");
    }
    /**
     * Evaluates a given function in the {@link WebWorker | worker}.
     *
     * @remarks If the given function returns a promise,
     * {@link WebWorker.evaluate | evaluate} will wait for the promise to resolve.
     *
     * As a rule of thumb, if the return value of the given function is more
     * complicated than a JSON object (e.g. most classes), then
     * {@link WebWorker.evaluate | evaluate} will _likely_ return some truncated
     * value (or `{}`). This is because we are not returning the actual return
     * value, but a deserialized version as a result of transferring the return
     * value through a protocol to Puppeteer.
     *
     * In general, you should use
     * {@link WebWorker.evaluateHandle | evaluateHandle} if
     * {@link WebWorker.evaluate | evaluate} cannot serialize the return value
     * properly or you need a mutable {@link JSHandle | handle} to the return
     * object.
     *
     * @param func - Function to be evaluated.
     * @param args - Arguments to pass into `func`.
     * @returns The result of `func`.
     */
    async evaluate(func, ...args) {
        func = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.withSourcePuppeteerURLIfNone)(this.evaluate.name, func);
        return await this.mainRealm().evaluate(func, ...args);
    }
    /**
     * Evaluates a given function in the {@link WebWorker | worker}.
     *
     * @remarks If the given function returns a promise,
     * {@link WebWorker.evaluate | evaluate} will wait for the promise to resolve.
     *
     * In general, you should use
     * {@link WebWorker.evaluateHandle | evaluateHandle} if
     * {@link WebWorker.evaluate | evaluate} cannot serialize the return value
     * properly or you need a mutable {@link JSHandle | handle} to the return
     * object.
     *
     * @param func - Function to be evaluated.
     * @param args - Arguments to pass into `func`.
     * @returns A {@link JSHandle | handle} to the return value of `func`.
     */
    async evaluateHandle(func, ...args) {
        func = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, func);
        return await this.mainRealm().evaluateHandle(func, ...args);
    }
    async close() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.UnsupportedOperation('WebWorker.close() is not supported');
    }
}
_WebWorker_url = new WeakMap();


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

/***/ "./src/third_party/puppeteer/package/src/bidi/Dialog.ts":
/*!**************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/Dialog.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiDialog: () => (/* binding */ BidiDialog)
/* harmony export */ });
/* harmony import */ var _api_Dialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Dialog.js */ "./src/third_party/puppeteer/package/src/api/Dialog.ts");
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
var _BidiDialog_prompt;

class BidiDialog extends _api_Dialog_js__WEBPACK_IMPORTED_MODULE_0__.Dialog {
    static from(prompt) {
        return new BidiDialog(prompt);
    }
    constructor(prompt) {
        super(prompt.info.type, prompt.info.message, prompt.info.defaultValue);
        _BidiDialog_prompt.set(this, void 0);
        __classPrivateFieldSet(this, _BidiDialog_prompt, prompt, "f");
        this.handled = prompt.handled;
    }
    async handle(options) {
        await __classPrivateFieldGet(this, _BidiDialog_prompt, "f").handle({
            accept: options.accept,
            userText: options.text,
        });
    }
}
_BidiDialog_prompt = new WeakMap();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/bidi/Frame.ts":
/*!*************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/Frame.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiFrame: () => (/* binding */ BidiFrame)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _api_Frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Frame.js */ "./src/third_party/puppeteer/package/src/api/Frame.ts");
/* harmony import */ var _api_Page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/Page.js */ "./src/third_party/puppeteer/package/src/api/Page.ts");
/* harmony import */ var _cdp_Accessibility_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cdp/Accessibility.js */ "./src/third_party/puppeteer/package/src/cdp/Accessibility.ts");
/* harmony import */ var _common_ConsoleMessage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/ConsoleMessage.js */ "./src/third_party/puppeteer/package/src/common/ConsoleMessage.ts");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/src/util/ErrorLike.ts");
/* harmony import */ var _CDPSession_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CDPSession.js */ "./src/third_party/puppeteer/package/src/bidi/CDPSession.ts");
/* harmony import */ var _Deserializer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Deserializer.js */ "./src/third_party/puppeteer/package/src/bidi/Deserializer.ts");
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Dialog.js */ "./src/third_party/puppeteer/package/src/bidi/Dialog.ts");
/* harmony import */ var _ExposedFunction_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ExposedFunction.js */ "./src/third_party/puppeteer/package/src/bidi/ExposedFunction.ts");
/* harmony import */ var _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HTTPRequest.js */ "./src/third_party/puppeteer/package/src/bidi/HTTPRequest.ts");
/* harmony import */ var _JSHandle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/src/bidi/JSHandle.ts");
/* harmony import */ var _Realm_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Realm.js */ "./src/third_party/puppeteer/package/src/bidi/Realm.ts");
/* harmony import */ var _Realm_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Realm_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./util.js */ "./src/third_party/puppeteer/package/src/bidi/util.ts");
/* harmony import */ var _WebWorker_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./WebWorker.js */ "./src/third_party/puppeteer/package/src/bidi/WebWorker.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (undefined && undefined.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
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
var __classPrivateFieldIn = (undefined && undefined.__classPrivateFieldIn) || function(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
};


















let BidiFrame = (() => {
    var _BidiFrame_instances, _a, _BidiFrame_parent, _BidiFrame_frames, _BidiFrame_initialize, _BidiFrame_createFrameTarget, _BidiFrame_detached$, _BidiFrame_exposedFunctions, _BidiFrame_waitForLoad$_get, _BidiFrame_waitForNetworkIdle$_get;
    let _classSuper = _api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.Frame;
    let _instanceExtraInitializers = [];
    let _goto_decorators;
    let _setContent_decorators;
    let _waitForNavigation_decorators;
    let _private_waitForLoad$_decorators;
    let _private_waitForLoad$_descriptor;
    let _private_waitForNetworkIdle$_decorators;
    let _private_waitForNetworkIdle$_descriptor;
    let _setFiles_decorators;
    let _locateNodes_decorators;
    return _a = class BidiFrame extends _classSuper {
            static from(parent, browsingContext) {
                const frame = new _a(parent, browsingContext);
                __classPrivateFieldGet(frame, _BidiFrame_instances, "m", _BidiFrame_initialize).call(frame);
                return frame;
            }
            constructor(parent, browsingContext) {
                super();
                _BidiFrame_instances.add(this);
                _BidiFrame_parent.set(this, __runInitializers(this, _instanceExtraInitializers));
                Object.defineProperty(this, "browsingContext", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                _BidiFrame_frames.set(this, new WeakMap());
                Object.defineProperty(this, "realms", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                Object.defineProperty(this, "_id", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                Object.defineProperty(this, "client", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                Object.defineProperty(this, "accessibility", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                _BidiFrame_exposedFunctions.set(this, new Map());
                __classPrivateFieldSet(this, _BidiFrame_parent, parent, "f");
                this.browsingContext = browsingContext;
                this._id = browsingContext.id;
                this.client = new _CDPSession_js__WEBPACK_IMPORTED_MODULE_8__.BidiCdpSession(this);
                this.realms = {
                    default: _Realm_js__WEBPACK_IMPORTED_MODULE_14__.BidiFrameRealm.from(this.browsingContext.defaultRealm, this),
                    internal: _Realm_js__WEBPACK_IMPORTED_MODULE_14__.BidiFrameRealm.from(this.browsingContext.createWindowRealm(`__puppeteer_internal_${Math.ceil(Math.random() * 10000)}`), this),
                };
                this.accessibility = new _cdp_Accessibility_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility(this.realms.default);
            }
            get timeoutSettings() {
                return this.page()._timeoutSettings;
            }
            mainRealm() {
                return this.realms.default;
            }
            isolatedRealm() {
                return this.realms.internal;
            }
            realm(id) {
                for (const realm of Object.values(this.realms)) {
                    if (realm.realm.id === id) {
                        return realm;
                    }
                }
                return;
            }
            page() {
                let parent = __classPrivateFieldGet(this, _BidiFrame_parent, "f");
                while (parent instanceof _a) {
                    parent = __classPrivateFieldGet(parent, _BidiFrame_parent, "f");
                }
                return parent;
            }
            isOOPFrame() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
            }
            url() {
                return this.browsingContext.url;
            }
            parentFrame() {
                if (__classPrivateFieldGet(this, _BidiFrame_parent, "f") instanceof _a) {
                    return __classPrivateFieldGet(this, _BidiFrame_parent, "f");
                }
                return null;
            }
            childFrames() {
                return [...this.browsingContext.children].map(child => {
                    return __classPrivateFieldGet(this, _BidiFrame_frames, "f").get(child);
                });
            }
            async goto(url, options = {}) {
                const [response] = await Promise.all([
                    this.waitForNavigation(options),
                    // Some implementations currently only report errors when the
                    // readiness=interactive.
                    //
                    // Related: https://bugzilla.mozilla.org/show_bug.cgi?id=1846601
                    this.browsingContext
                        .navigate(url, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ReadinessState.Interactive)
                        .catch(error => {
                        if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_7__.isErrorLike)(error) &&
                            error.message.includes('net::ERR_HTTP_RESPONSE_CODE_FAILURE')) {
                            return;
                        }
                        throw error;
                    }),
                ]).catch((0,_util_js__WEBPACK_IMPORTED_MODULE_15__.rewriteNavigationError)(url, options.timeout ?? this.timeoutSettings.navigationTimeout()));
                return response;
            }
            async setContent(html, options = {}) {
                await Promise.all([
                    this.setFrameContent(html),
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())([
                        __classPrivateFieldGet(this, _BidiFrame_instances, "a", _BidiFrame_waitForLoad$_get).call(this, options),
                        __classPrivateFieldGet(this, _BidiFrame_instances, "a", _BidiFrame_waitForNetworkIdle$_get).call(this, options),
                    ])),
                ]);
            }
            async waitForNavigation(options = {}) {
                const { timeout: ms = this.timeoutSettings.navigationTimeout() } = options;
                const frames = this.childFrames().map(frame => {
                    return __classPrivateFieldGet(frame, _BidiFrame_instances, "m", _BidiFrame_detached$).call(frame);
                });
                return await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())([
                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_6__.fromEmitterEvent)(this.browsingContext, 'navigation')
                        .pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())())
                        .pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(({ navigation }) => {
                        return __classPrivateFieldGet(this, _BidiFrame_instances, "a", _BidiFrame_waitForLoad$_get).call(this, options).pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(() => {
                            if (frames.length === 0) {
                                return Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(undefined);
                            }
                            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(frames);
                        }), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,_common_util_js__WEBPACK_IMPORTED_MODULE_6__.fromEmitterEvent)(navigation, 'fragment'), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_6__.fromEmitterEvent)(navigation, 'failed'), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_6__.fromEmitterEvent)(navigation, 'aborted').pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(({ url }) => {
                            throw new Error(`Navigation aborted: ${url}`);
                        }))), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(() => {
                            if (navigation.request) {
                                function requestFinished$(request) {
                                    // Reduces flakiness if the response events arrive after
                                    // the load event.
                                    // Usually, the response or error is already there at this point.
                                    if (request.response || request.error) {
                                        return Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(navigation);
                                    }
                                    if (request.redirect) {
                                        return requestFinished$(request.redirect);
                                    }
                                    return (0,_common_util_js__WEBPACK_IMPORTED_MODULE_6__.fromEmitterEvent)(request, 'success')
                                        .pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,_common_util_js__WEBPACK_IMPORTED_MODULE_6__.fromEmitterEvent)(request, 'error')), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,_common_util_js__WEBPACK_IMPORTED_MODULE_6__.fromEmitterEvent)(request, 'redirect')))
                                        .pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(() => {
                                        return requestFinished$(request);
                                    }));
                                }
                                return requestFinished$(navigation.request);
                            }
                            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(navigation);
                        }));
                    })),
                    __classPrivateFieldGet(this, _BidiFrame_instances, "a", _BidiFrame_waitForNetworkIdle$_get).call(this, options),
                ]).pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(([navigation]) => {
                    const request = navigation.request;
                    if (!request) {
                        return null;
                    }
                    const lastRequest = request.lastRedirect ?? request;
                    const httpRequest = _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_12__.requests.get(lastRequest);
                    return httpRequest.response();
                }), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,_common_util_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(ms), __classPrivateFieldGet(this, _BidiFrame_instances, "m", _BidiFrame_detached$).call(this).pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(() => {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.TargetCloseError('Frame detached.');
                })))));
            }
            waitForDevicePrompt() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
            }
            get detached() {
                return this.browsingContext.closed;
            }
            async exposeFunction(name, apply) {
                if (__classPrivateFieldGet(this, _BidiFrame_exposedFunctions, "f").has(name)) {
                    throw new Error(`Failed to add page binding with name ${name}: globalThis['${name}'] already exists!`);
                }
                const exposeable = await _ExposedFunction_js__WEBPACK_IMPORTED_MODULE_11__.ExposeableFunction.from(this, name, apply);
                __classPrivateFieldGet(this, _BidiFrame_exposedFunctions, "f").set(name, exposeable);
            }
            async removeExposedFunction(name) {
                const exposedFunction = __classPrivateFieldGet(this, _BidiFrame_exposedFunctions, "f").get(name);
                if (!exposedFunction) {
                    throw new Error(`Failed to remove page binding with name ${name}: window['${name}'] does not exists!`);
                }
                __classPrivateFieldGet(this, _BidiFrame_exposedFunctions, "f").delete(name);
                await exposedFunction[Symbol.asyncDispose]();
            }
            async createCDPSession() {
                if (!this.page().browser().cdpSupported) {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
                }
                const cdpConnection = this.page().browser().cdpConnection;
                return await cdpConnection._createSession({ targetId: this._id });
            }
            async setFiles(element, files) {
                await this.browsingContext.setFiles(
                // SAFETY: ElementHandles are always remote references.
                element.remoteValue(), files);
            }
            async locateNodes(element, locator) {
                return await this.browsingContext.locateNodes(locator, 
                // SAFETY: ElementHandles are always remote references.
                [element.remoteValue()]);
            }
        },
        _BidiFrame_parent = new WeakMap(),
        _BidiFrame_frames = new WeakMap(),
        _BidiFrame_exposedFunctions = new WeakMap(),
        _BidiFrame_instances = new WeakSet(),
        _BidiFrame_initialize = function _BidiFrame_initialize() {
            for (const browsingContext of this.browsingContext.children) {
                __classPrivateFieldGet(this, _BidiFrame_instances, "m", _BidiFrame_createFrameTarget).call(this, browsingContext);
            }
            this.browsingContext.on('browsingcontext', ({ browsingContext }) => {
                __classPrivateFieldGet(this, _BidiFrame_instances, "m", _BidiFrame_createFrameTarget).call(this, browsingContext);
            });
            this.browsingContext.on('closed', () => {
                for (const session of _CDPSession_js__WEBPACK_IMPORTED_MODULE_8__.BidiCdpSession.sessions.values()) {
                    if (session.frame === this) {
                        session.onClose();
                    }
                }
                this.page().trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.FrameDetached, this);
            });
            this.browsingContext.on('request', ({ request }) => {
                const httpRequest = _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_12__.BidiHTTPRequest.from(request, this);
                request.once('success', () => {
                    this.page().trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.RequestFinished, httpRequest);
                });
                request.once('error', () => {
                    this.page().trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.RequestFailed, httpRequest);
                });
                void httpRequest.finalizeInterceptions();
            });
            this.browsingContext.on('navigation', ({ navigation }) => {
                navigation.once('fragment', () => {
                    this.page().trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.FrameNavigated, this);
                });
            });
            this.browsingContext.on('load', () => {
                this.page().trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.Load, undefined);
            });
            this.browsingContext.on('DOMContentLoaded', () => {
                this._hasStartedLoading = true;
                this.page().trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.DOMContentLoaded, undefined);
                this.page().trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.FrameNavigated, this);
            });
            this.browsingContext.on('userprompt', ({ userPrompt }) => {
                this.page().trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.Dialog, _Dialog_js__WEBPACK_IMPORTED_MODULE_10__.BidiDialog.from(userPrompt));
            });
            this.browsingContext.on('log', ({ entry }) => {
                if (this._id !== entry.source.context) {
                    return;
                }
                if (isConsoleLogEntry(entry)) {
                    const args = entry.args.map(arg => {
                        return this.mainRealm().createHandle(arg);
                    });
                    const text = args
                        .reduce((value, arg) => {
                        const parsedValue = arg instanceof _JSHandle_js__WEBPACK_IMPORTED_MODULE_13__.BidiJSHandle && arg.isPrimitiveValue
                            ? _Deserializer_js__WEBPACK_IMPORTED_MODULE_9__.BidiDeserializer.deserialize(arg.remoteValue())
                            : arg.toString();
                        return `${value} ${parsedValue}`;
                    }, '')
                        .slice(1);
                    this.page().trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.Console, new _common_ConsoleMessage_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleMessage(entry.method, text, args, getStackTraceLocations(entry.stackTrace)));
                }
                else if (isJavaScriptLogEntry(entry)) {
                    const error = new Error(entry.text ?? '');
                    const messageHeight = error.message.split('\n').length;
                    const messageLines = error.stack.split('\n').splice(0, messageHeight);
                    const stackLines = [];
                    if (entry.stackTrace) {
                        for (const frame of entry.stackTrace.callFrames) {
                            // Note we need to add `1` because the values are 0-indexed.
                            stackLines.push(`    at ${frame.functionName || '<anonymous>'} (${frame.url}:${frame.lineNumber + 1}:${frame.columnNumber + 1})`);
                            if (stackLines.length >= Error.stackTraceLimit) {
                                break;
                            }
                        }
                    }
                    error.stack = [...messageLines, ...stackLines].join('\n');
                    this.page().trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.PageError, error);
                }
                else {
                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_6__.debugError)(`Unhandled LogEntry with type "${entry.type}", text "${entry.text}" and level "${entry.level}"`);
                }
            });
            this.browsingContext.on('worker', ({ realm }) => {
                const worker = _WebWorker_js__WEBPACK_IMPORTED_MODULE_16__.BidiWebWorker.from(this, realm);
                realm.on('destroyed', () => {
                    this.page().trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.WorkerDestroyed, worker);
                });
                this.page().trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.WorkerCreated, worker);
            });
        },
        _BidiFrame_createFrameTarget = function _BidiFrame_createFrameTarget(browsingContext) {
            const frame = _a.from(this, browsingContext);
            __classPrivateFieldGet(this, _BidiFrame_frames, "f").set(browsingContext, frame);
            this.page().trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.FrameAttached, frame);
            browsingContext.on('closed', () => {
                __classPrivateFieldGet(this, _BidiFrame_frames, "f").delete(browsingContext);
            });
            return frame;
        },
        _BidiFrame_detached$ = function _BidiFrame_detached$() {
            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(() => {
                if (this.detached) {
                    return Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
                }
                return (0,_common_util_js__WEBPACK_IMPORTED_MODULE_6__.fromEmitterEvent)(this.page().trustedEmitter, _api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.FrameDetached).pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(detachedFrame => {
                    return detachedFrame === this;
                }));
            });
        },
        _BidiFrame_waitForLoad$_get = function _BidiFrame_waitForLoad$_get() { return _private_waitForLoad$_descriptor.value; },
        _BidiFrame_waitForNetworkIdle$_get = function _BidiFrame_waitForNetworkIdle$_get() { return _private_waitForNetworkIdle$_descriptor.value; },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _goto_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached];
            _setContent_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached];
            _waitForNavigation_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached];
            _private_waitForLoad$_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached];
            _private_waitForNetworkIdle$_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached];
            _setFiles_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached];
            _locateNodes_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached];
            __esDecorate(_a, null, _goto_decorators, { kind: "method", name: "goto", static: false, private: false, access: { has: obj => "goto" in obj, get: obj => obj.goto }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _setContent_decorators, { kind: "method", name: "setContent", static: false, private: false, access: { has: obj => "setContent" in obj, get: obj => obj.setContent }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _waitForNavigation_decorators, { kind: "method", name: "waitForNavigation", static: false, private: false, access: { has: obj => "waitForNavigation" in obj, get: obj => obj.waitForNavigation }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, _private_waitForLoad$_descriptor = { value: __setFunctionName(function (options = {}) {
                    let { waitUntil = 'load' } = options;
                    const { timeout: ms = this.timeoutSettings.navigationTimeout() } = options;
                    if (!Array.isArray(waitUntil)) {
                        waitUntil = [waitUntil];
                    }
                    const events = new Set();
                    for (const lifecycleEvent of waitUntil) {
                        switch (lifecycleEvent) {
                            case 'load': {
                                events.add('load');
                                break;
                            }
                            case 'domcontentloaded': {
                                events.add('DOMContentLoaded');
                                break;
                            }
                        }
                    }
                    if (events.size === 0) {
                        return Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(undefined);
                    }
                    return Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())([...events].map(event => {
                        return (0,_common_util_js__WEBPACK_IMPORTED_MODULE_6__.fromEmitterEvent)(this.browsingContext, event);
                    })).pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(() => { }), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,_common_util_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(ms), __classPrivateFieldGet(this, _BidiFrame_instances, "m", _BidiFrame_detached$).call(this).pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(() => {
                        throw new Error('Frame detached.');
                    }))));
                }, "#waitForLoad$") }, _private_waitForLoad$_decorators, { kind: "method", name: "#waitForLoad$", static: false, private: true, access: { has: obj => __classPrivateFieldIn(_BidiFrame_instances, obj), get: obj => __classPrivateFieldGet(obj, _BidiFrame_instances, "a", _BidiFrame_waitForLoad$_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, _private_waitForNetworkIdle$_descriptor = { value: __setFunctionName(function (options = {}) {
                    let { waitUntil = 'load' } = options;
                    if (!Array.isArray(waitUntil)) {
                        waitUntil = [waitUntil];
                    }
                    let concurrency = Infinity;
                    for (const event of waitUntil) {
                        switch (event) {
                            case 'networkidle0': {
                                concurrency = Math.min(0, concurrency);
                                break;
                            }
                            case 'networkidle2': {
                                concurrency = Math.min(2, concurrency);
                                break;
                            }
                        }
                    }
                    if (concurrency === Infinity) {
                        return Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(undefined);
                    }
                    return this.page().waitForNetworkIdle$({
                        idleTime: 500,
                        timeout: options.timeout ?? this.timeoutSettings.timeout(),
                        concurrency,
                    });
                }, "#waitForNetworkIdle$") }, _private_waitForNetworkIdle$_decorators, { kind: "method", name: "#waitForNetworkIdle$", static: false, private: true, access: { has: obj => __classPrivateFieldIn(_BidiFrame_instances, obj), get: obj => __classPrivateFieldGet(obj, _BidiFrame_instances, "a", _BidiFrame_waitForNetworkIdle$_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _setFiles_decorators, { kind: "method", name: "setFiles", static: false, private: false, access: { has: obj => "setFiles" in obj, get: obj => obj.setFiles }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _locateNodes_decorators, { kind: "method", name: "locateNodes", static: false, private: false, access: { has: obj => "locateNodes" in obj, get: obj => obj.locateNodes }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();

function isConsoleLogEntry(event) {
    return event.type === 'console';
}
function isJavaScriptLogEntry(event) {
    return event.type === 'javascript';
}
function getStackTraceLocations(stackTrace) {
    const stackTraceLocations = [];
    if (stackTrace) {
        for (const callFrame of stackTrace.callFrames) {
            stackTraceLocations.push({
                url: callFrame.url,
                lineNumber: callFrame.lineNumber,
                columnNumber: callFrame.columnNumber,
            });
        }
    }
    return stackTraceLocations;
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/bidi/WebWorker.ts":
/*!*****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/WebWorker.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiWebWorker: () => (/* binding */ BidiWebWorker)
/* harmony export */ });
/* harmony import */ var _api_WebWorker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/WebWorker.js */ "./src/third_party/puppeteer/package/src/api/WebWorker.ts");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _Realm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Realm.js */ "./src/third_party/puppeteer/package/src/bidi/Realm.ts");
/* harmony import */ var _Realm_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Realm_js__WEBPACK_IMPORTED_MODULE_2__);
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
var _BidiWebWorker_frame, _BidiWebWorker_realm;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/**
 * @internal
 */
class BidiWebWorker extends _api_WebWorker_js__WEBPACK_IMPORTED_MODULE_0__.WebWorker {
    static from(frame, realm) {
        const worker = new BidiWebWorker(frame, realm);
        return worker;
    }
    constructor(frame, realm) {
        super(realm.origin);
        _BidiWebWorker_frame.set(this, void 0);
        _BidiWebWorker_realm.set(this, void 0);
        __classPrivateFieldSet(this, _BidiWebWorker_frame, frame, "f");
        __classPrivateFieldSet(this, _BidiWebWorker_realm, _Realm_js__WEBPACK_IMPORTED_MODULE_2__.BidiWorkerRealm.from(realm, this), "f");
    }
    get frame() {
        return __classPrivateFieldGet(this, _BidiWebWorker_frame, "f");
    }
    mainRealm() {
        return __classPrivateFieldGet(this, _BidiWebWorker_realm, "f");
    }
    get client() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
_BidiWebWorker_frame = new WeakMap(), _BidiWebWorker_realm = new WeakMap();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/bidi/util.ts":
/*!************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/util.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEvaluationError: () => (/* binding */ createEvaluationError),
/* harmony export */   rewriteNavigationError: () => (/* binding */ rewriteNavigationError)
/* harmony export */ });
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _Deserializer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Deserializer.js */ "./src/third_party/puppeteer/package/src/bidi/Deserializer.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/**
 * @internal
 */
function createEvaluationError(details) {
    if (details.exception.type !== 'error') {
        return _Deserializer_js__WEBPACK_IMPORTED_MODULE_2__.BidiDeserializer.deserialize(details.exception);
    }
    const [name = '', ...parts] = details.text.split(': ');
    const message = parts.join(': ');
    const error = new Error(message);
    error.name = name;
    // The first line is this function which we ignore.
    const stackLines = [];
    if (details.stackTrace && stackLines.length < Error.stackTraceLimit) {
        for (const frame of details.stackTrace.callFrames.reverse()) {
            if (_common_util_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerURL.isPuppeteerURL(frame.url) &&
                frame.url !== _common_util_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerURL.INTERNAL_URL) {
                const url = _common_util_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerURL.parse(frame.url);
                stackLines.unshift(`    at ${frame.functionName || url.functionName} (${url.functionName} at ${url.siteString}, <anonymous>:${frame.lineNumber}:${frame.columnNumber})`);
            }
            else {
                stackLines.push(`    at ${frame.functionName || '<anonymous>'} (${frame.url}:${frame.lineNumber}:${frame.columnNumber})`);
            }
            if (stackLines.length >= Error.stackTraceLimit) {
                break;
            }
        }
    }
    error.stack = [details.text, ...stackLines].join('\n');
    return error;
}
/**
 * @internal
 */
function rewriteNavigationError(message, ms) {
    return error => {
        if (error instanceof _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolError) {
            error.message += ` at ${message}`;
        }
        else if (error instanceof _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.TimeoutError) {
            error.message = `Navigation timeout of ${ms} ms exceeded`;
        }
        throw error;
    };
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/ConsoleMessage.ts":
/*!************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/ConsoleMessage.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleMessage: () => (/* binding */ ConsoleMessage)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
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
var _ConsoleMessage_type, _ConsoleMessage_text, _ConsoleMessage_args, _ConsoleMessage_stackTraceLocations;
/**
 * ConsoleMessage objects are dispatched by page via the 'console' event.
 * @public
 */
class ConsoleMessage {
    /**
     * @internal
     */
    constructor(type, text, args, stackTraceLocations) {
        _ConsoleMessage_type.set(this, void 0);
        _ConsoleMessage_text.set(this, void 0);
        _ConsoleMessage_args.set(this, void 0);
        _ConsoleMessage_stackTraceLocations.set(this, void 0);
        __classPrivateFieldSet(this, _ConsoleMessage_type, type, "f");
        __classPrivateFieldSet(this, _ConsoleMessage_text, text, "f");
        __classPrivateFieldSet(this, _ConsoleMessage_args, args, "f");
        __classPrivateFieldSet(this, _ConsoleMessage_stackTraceLocations, stackTraceLocations, "f");
    }
    /**
     * The type of the console message.
     */
    type() {
        return __classPrivateFieldGet(this, _ConsoleMessage_type, "f");
    }
    /**
     * The text of the console message.
     */
    text() {
        return __classPrivateFieldGet(this, _ConsoleMessage_text, "f");
    }
    /**
     * An array of arguments passed to the console.
     */
    args() {
        return __classPrivateFieldGet(this, _ConsoleMessage_args, "f");
    }
    /**
     * The location of the console message.
     */
    location() {
        return __classPrivateFieldGet(this, _ConsoleMessage_stackTraceLocations, "f")[0] ?? {};
    }
    /**
     * The array of locations on the stack of the console message.
     */
    stackTrace() {
        return __classPrivateFieldGet(this, _ConsoleMessage_stackTraceLocations, "f");
    }
}
_ConsoleMessage_type = new WeakMap(), _ConsoleMessage_text = new WeakMap(), _ConsoleMessage_args = new WeakMap(), _ConsoleMessage_stackTraceLocations = new WeakMap();


/***/ })

}]);