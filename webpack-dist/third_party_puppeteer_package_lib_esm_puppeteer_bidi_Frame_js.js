"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_Frame_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Dialog.js":
/*!***********************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/api/Dialog.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

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
    #type;
    #message;
    #defaultValue;
    /**
     * @internal
     */
    handled = false;
    /**
     * @internal
     */
    constructor(type, message, defaultValue = '') {
        this.#type = type;
        this.#message = message;
        this.#defaultValue = defaultValue;
    }
    /**
     * The type of the dialog.
     */
    type() {
        return this.#type;
    }
    /**
     * The message displayed in the dialog.
     */
    message() {
        return this.#message;
    }
    /**
     * The default value of the prompt, or an empty string if the dialog
     * is not a `prompt`.
     */
    defaultValue() {
        return this.#defaultValue;
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
//# sourceMappingURL=Dialog.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/api/WebWorker.js":
/*!**************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/api/WebWorker.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebWorker: () => (/* binding */ WebWorker)
/* harmony export */ });
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _common_TimeoutSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/TimeoutSettings.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/TimeoutSettings.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */




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
    timeoutSettings = new _common_TimeoutSettings_js__WEBPACK_IMPORTED_MODULE_2__.TimeoutSettings();
    #url;
    /**
     * @internal
     */
    constructor(url) {
        super();
        this.#url = url;
    }
    /**
     * The URL of this web worker.
     */
    url() {
        return this.#url;
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
//# sourceMappingURL=WebWorker.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/CDPSession.js":
/*!****************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/bidi/CDPSession.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiCdpSession: () => (/* binding */ BidiCdpSession)
/* harmony export */ });
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");



/**
 * @internal
 */
class BidiCdpSession extends _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSession {
    static sessions = new Map();
    #detached = false;
    #connection;
    #sessionId = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred.create();
    frame;
    constructor(frame, sessionId) {
        super();
        this.frame = frame;
        if (!this.frame.page().browser().cdpSupported) {
            return;
        }
        const connection = this.frame.page().browser().connection;
        this.#connection = connection;
        if (sessionId) {
            this.#sessionId.resolve(sessionId);
            BidiCdpSession.sessions.set(sessionId, this);
        }
        else {
            (async () => {
                try {
                    const { result } = await connection.send('cdp.getSession', {
                        context: frame._id,
                    });
                    this.#sessionId.resolve(result.session);
                    BidiCdpSession.sessions.set(result.session, this);
                }
                catch (error) {
                    this.#sessionId.reject(error);
                }
            })();
        }
        // SAFETY: We never throw #sessionId.
        BidiCdpSession.sessions.set(this.#sessionId.value(), this);
    }
    connection() {
        return undefined;
    }
    async send(method, params, options) {
        if (this.#connection === undefined) {
            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation('CDP support is required for this feature. The current browser does not support CDP.');
        }
        if (this.#detached) {
            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.TargetCloseError(`Protocol error (${method}): Session closed. Most likely the page has been closed.`);
        }
        const session = await this.#sessionId.valueOrThrow();
        const { result } = await this.#connection.send('cdp.sendCommand', {
            method: method,
            params: params,
            session,
        }, options?.timeout);
        return result.result;
    }
    async detach() {
        if (this.#connection === undefined ||
            this.#connection.closed ||
            this.#detached) {
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
    /**
     * @internal
     */
    onClose = () => {
        BidiCdpSession.sessions.delete(this.id());
        this.#detached = true;
    };
    id() {
        const value = this.#sessionId.value();
        return typeof value === 'string' ? value : '';
    }
}
//# sourceMappingURL=CDPSession.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Dialog.js":
/*!************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Dialog.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiDialog: () => (/* binding */ BidiDialog)
/* harmony export */ });
/* harmony import */ var _api_Dialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Dialog.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Dialog.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

class BidiDialog extends _api_Dialog_js__WEBPACK_IMPORTED_MODULE_0__.Dialog {
    static from(prompt) {
        return new BidiDialog(prompt);
    }
    #prompt;
    constructor(prompt) {
        super(prompt.info.type, prompt.info.message, prompt.info.defaultValue);
        this.#prompt = prompt;
        this.handled = prompt.handled;
    }
    async handle(options) {
        await this.#prompt.handle({
            accept: options.accept,
            userText: options.text,
        });
    }
}
//# sourceMappingURL=Dialog.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Frame.js":
/*!***********************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Frame.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiFrame: () => (/* binding */ BidiFrame)
/* harmony export */ });
/* harmony import */ var _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./third_party/puppeteer/package/lib/esm/third_party/rxjs/rxjs.js");
/* harmony import */ var _api_Frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Frame.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Frame.js");
/* harmony import */ var _cdp_Accessibility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cdp/Accessibility.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Accessibility.js");
/* harmony import */ var _common_ConsoleMessage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ConsoleMessage.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/ConsoleMessage.js");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */ var _CDPSession_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/CDPSession.js");
/* harmony import */ var _Deserializer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Deserializer.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Deserializer.js");
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Dialog.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Dialog.js");
/* harmony import */ var _ExposedFunction_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ExposedFunction.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/ExposedFunction.js");
/* harmony import */ var _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HTTPRequest.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/HTTPRequest.js");
/* harmony import */ var _JSHandle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/JSHandle.js");
/* harmony import */ var _Realm_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Realm.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Realm.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/util.js");
/* harmony import */ var _WebWorker_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./WebWorker.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/WebWorker.js");
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
















let BidiFrame = (() => {
    var _a;
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
    return class BidiFrame extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _goto_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached];
            _setContent_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached];
            _waitForNavigation_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached];
            _private_waitForLoad$_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached];
            _private_waitForNetworkIdle$_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached];
            _setFiles_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached];
            _locateNodes_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached];
            __esDecorate(this, null, _goto_decorators, { kind: "method", name: "goto", static: false, private: false, access: { has: obj => "goto" in obj, get: obj => obj.goto }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setContent_decorators, { kind: "method", name: "setContent", static: false, private: false, access: { has: obj => "setContent" in obj, get: obj => obj.setContent }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _waitForNavigation_decorators, { kind: "method", name: "waitForNavigation", static: false, private: false, access: { has: obj => "waitForNavigation" in obj, get: obj => obj.waitForNavigation }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, _private_waitForLoad$_descriptor = { value: __setFunctionName(function (options = {}) {
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
                        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.of)(undefined);
                    }
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.combineLatest)([...events].map(event => {
                        return (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(this.browsingContext, event);
                    })).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(() => { }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.first)(), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.timeout)(ms), this.#detached$().pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(() => {
                        throw new Error('Frame detached.');
                    }))));
                }, "#waitForLoad$") }, _private_waitForLoad$_decorators, { kind: "method", name: "#waitForLoad$", static: false, private: true, access: { has: obj => #waitForLoad$ in obj, get: obj => obj.#waitForLoad$ }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, _private_waitForNetworkIdle$_descriptor = { value: __setFunctionName(function (options = {}) {
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
                        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.of)(undefined);
                    }
                    return this.page().waitForNetworkIdle$({
                        idleTime: 500,
                        timeout: options.timeout ?? this.timeoutSettings.timeout(),
                        concurrency,
                    });
                }, "#waitForNetworkIdle$") }, _private_waitForNetworkIdle$_decorators, { kind: "method", name: "#waitForNetworkIdle$", static: false, private: true, access: { has: obj => #waitForNetworkIdle$ in obj, get: obj => obj.#waitForNetworkIdle$ }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setFiles_decorators, { kind: "method", name: "setFiles", static: false, private: false, access: { has: obj => "setFiles" in obj, get: obj => obj.setFiles }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _locateNodes_decorators, { kind: "method", name: "locateNodes", static: false, private: false, access: { has: obj => "locateNodes" in obj, get: obj => obj.locateNodes }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(parent, browsingContext) {
            const frame = new BidiFrame(parent, browsingContext);
            frame.#initialize();
            return frame;
        }
        #parent = __runInitializers(this, _instanceExtraInitializers);
        browsingContext;
        #frames = new WeakMap();
        realms;
        _id;
        client;
        accessibility;
        constructor(parent, browsingContext) {
            super();
            this.#parent = parent;
            this.browsingContext = browsingContext;
            this._id = browsingContext.id;
            this.client = new _CDPSession_js__WEBPACK_IMPORTED_MODULE_7__.BidiCdpSession(this);
            this.realms = {
                default: _Realm_js__WEBPACK_IMPORTED_MODULE_13__.BidiFrameRealm.from(this.browsingContext.defaultRealm, this),
                internal: _Realm_js__WEBPACK_IMPORTED_MODULE_13__.BidiFrameRealm.from(this.browsingContext.createWindowRealm(`__puppeteer_internal_${Math.ceil(Math.random() * 10000)}`), this),
            };
            this.accessibility = new _cdp_Accessibility_js__WEBPACK_IMPORTED_MODULE_2__.Accessibility(this.realms.default);
        }
        #initialize() {
            for (const browsingContext of this.browsingContext.children) {
                this.#createFrameTarget(browsingContext);
            }
            this.browsingContext.on('browsingcontext', ({ browsingContext }) => {
                this.#createFrameTarget(browsingContext);
            });
            this.browsingContext.on('closed', () => {
                for (const session of _CDPSession_js__WEBPACK_IMPORTED_MODULE_7__.BidiCdpSession.sessions.values()) {
                    if (session.frame === this) {
                        session.onClose();
                    }
                }
                this.page().trustedEmitter.emit("framedetached" /* PageEvent.FrameDetached */, this);
            });
            this.browsingContext.on('request', ({ request }) => {
                const httpRequest = _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_11__.BidiHTTPRequest.from(request, this);
                request.once('success', () => {
                    this.page().trustedEmitter.emit("requestfinished" /* PageEvent.RequestFinished */, httpRequest);
                });
                request.once('error', () => {
                    this.page().trustedEmitter.emit("requestfailed" /* PageEvent.RequestFailed */, httpRequest);
                });
                void httpRequest.finalizeInterceptions();
            });
            this.browsingContext.on('navigation', ({ navigation }) => {
                navigation.once('fragment', () => {
                    this.page().trustedEmitter.emit("framenavigated" /* PageEvent.FrameNavigated */, this);
                });
            });
            this.browsingContext.on('load', () => {
                this.page().trustedEmitter.emit("load" /* PageEvent.Load */, undefined);
            });
            this.browsingContext.on('DOMContentLoaded', () => {
                this._hasStartedLoading = true;
                this.page().trustedEmitter.emit("domcontentloaded" /* PageEvent.DOMContentLoaded */, undefined);
                this.page().trustedEmitter.emit("framenavigated" /* PageEvent.FrameNavigated */, this);
            });
            this.browsingContext.on('userprompt', ({ userPrompt }) => {
                this.page().trustedEmitter.emit("dialog" /* PageEvent.Dialog */, _Dialog_js__WEBPACK_IMPORTED_MODULE_9__.BidiDialog.from(userPrompt));
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
                        const parsedValue = arg instanceof _JSHandle_js__WEBPACK_IMPORTED_MODULE_12__.BidiJSHandle && arg.isPrimitiveValue
                            ? _Deserializer_js__WEBPACK_IMPORTED_MODULE_8__.BidiDeserializer.deserialize(arg.remoteValue())
                            : arg.toString();
                        return `${value} ${parsedValue}`;
                    }, '')
                        .slice(1);
                    this.page().trustedEmitter.emit("console" /* PageEvent.Console */, new _common_ConsoleMessage_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleMessage(entry.method, text, args, getStackTraceLocations(entry.stackTrace)));
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
                    this.page().trustedEmitter.emit("pageerror" /* PageEvent.PageError */, error);
                }
                else {
                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.debugError)(`Unhandled LogEntry with type "${entry.type}", text "${entry.text}" and level "${entry.level}"`);
                }
            });
            this.browsingContext.on('worker', ({ realm }) => {
                const worker = _WebWorker_js__WEBPACK_IMPORTED_MODULE_15__.BidiWebWorker.from(this, realm);
                realm.on('destroyed', () => {
                    this.page().trustedEmitter.emit("workerdestroyed" /* PageEvent.WorkerDestroyed */, worker);
                });
                this.page().trustedEmitter.emit("workercreated" /* PageEvent.WorkerCreated */, worker);
            });
        }
        #createFrameTarget(browsingContext) {
            const frame = BidiFrame.from(this, browsingContext);
            this.#frames.set(browsingContext, frame);
            this.page().trustedEmitter.emit("frameattached" /* PageEvent.FrameAttached */, frame);
            browsingContext.on('closed', () => {
                this.#frames.delete(browsingContext);
            });
            return frame;
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
            let parent = this.#parent;
            while (parent instanceof BidiFrame) {
                parent = parent.#parent;
            }
            return parent;
        }
        isOOPFrame() {
            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__.UnsupportedOperation();
        }
        url() {
            return this.browsingContext.url;
        }
        parentFrame() {
            if (this.#parent instanceof BidiFrame) {
                return this.#parent;
            }
            return null;
        }
        childFrames() {
            return [...this.browsingContext.children].map(child => {
                return this.#frames.get(child);
            });
        }
        #detached$() {
            return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.defer)(() => {
                if (this.detached) {
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.of)(this);
                }
                return (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(this.page().trustedEmitter, "framedetached" /* PageEvent.FrameDetached */).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.filter)(detachedFrame => {
                    return detachedFrame === this;
                }));
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
                    .navigate(url, "interactive" /* Bidi.BrowsingContext.ReadinessState.Interactive */)
                    .catch(error => {
                    if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_6__.isErrorLike)(error) &&
                        error.message.includes('net::ERR_HTTP_RESPONSE_CODE_FAILURE')) {
                        return;
                    }
                    throw error;
                }),
            ]).catch((0,_util_js__WEBPACK_IMPORTED_MODULE_14__.rewriteNavigationError)(url, options.timeout ?? this.timeoutSettings.navigationTimeout()));
            return response;
        }
        async setContent(html, options = {}) {
            await Promise.all([
                this.setFrameContent(html),
                (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.combineLatest)([
                    this.#waitForLoad$(options),
                    this.#waitForNetworkIdle$(options),
                ])),
            ]);
        }
        async waitForNavigation(options = {}) {
            const { timeout: ms = this.timeoutSettings.navigationTimeout() } = options;
            const frames = this.childFrames().map(frame => {
                return frame.#detached$();
            });
            return await (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.combineLatest)([
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(this.browsingContext, 'navigation')
                    .pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.first)())
                    .pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.switchMap)(({ navigation }) => {
                    return this.#waitForLoad$(options).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.delayWhen)(() => {
                        if (frames.length === 0) {
                            return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.of)(undefined);
                        }
                        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.combineLatest)(frames);
                    }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(navigation, 'fragment'), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(navigation, 'failed'), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(navigation, 'aborted').pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(({ url }) => {
                        throw new Error(`Navigation aborted: ${url}`);
                    }))), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.switchMap)(() => {
                        if (navigation.request) {
                            function requestFinished$(request) {
                                // Reduces flakiness if the response events arrive after
                                // the load event.
                                // Usually, the response or error is already there at this point.
                                if (request.response || request.error) {
                                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.of)(navigation);
                                }
                                if (request.redirect) {
                                    return requestFinished$(request.redirect);
                                }
                                return (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(request, 'success')
                                    .pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(request, 'error')), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(request, 'redirect')))
                                    .pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.switchMap)(() => {
                                    return requestFinished$(request);
                                }));
                            }
                            return requestFinished$(navigation.request);
                        }
                        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.of)(navigation);
                    }));
                })),
                this.#waitForNetworkIdle$(options),
            ]).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(([navigation]) => {
                const request = navigation.request;
                if (!request) {
                    return null;
                }
                const lastRequest = request.lastRedirect ?? request;
                const httpRequest = _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_11__.requests.get(lastRequest);
                return httpRequest.response();
            }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.timeout)(ms), this.#detached$().pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(() => {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__.TargetCloseError('Frame detached.');
            })))));
        }
        waitForDevicePrompt() {
            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__.UnsupportedOperation();
        }
        get detached() {
            return this.browsingContext.closed;
        }
        #exposedFunctions = new Map();
        async exposeFunction(name, apply) {
            if (this.#exposedFunctions.has(name)) {
                throw new Error(`Failed to add page binding with name ${name}: globalThis['${name}'] already exists!`);
            }
            const exposeable = await _ExposedFunction_js__WEBPACK_IMPORTED_MODULE_10__.ExposeableFunction.from(this, name, apply);
            this.#exposedFunctions.set(name, exposeable);
        }
        async removeExposedFunction(name) {
            const exposedFunction = this.#exposedFunctions.get(name);
            if (!exposedFunction) {
                throw new Error(`Failed to remove page binding with name ${name}: window['${name}'] does not exists!`);
            }
            this.#exposedFunctions.delete(name);
            await exposedFunction[Symbol.asyncDispose]();
        }
        async createCDPSession() {
            if (!this.page().browser().cdpSupported) {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__.UnsupportedOperation();
            }
            const cdpConnection = this.page().browser().cdpConnection;
            return await cdpConnection._createSession({ targetId: this._id });
        }
        get #waitForLoad$() { return _private_waitForLoad$_descriptor.value; }
        get #waitForNetworkIdle$() { return _private_waitForNetworkIdle$_descriptor.value; }
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
    };
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
//# sourceMappingURL=Frame.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/WebWorker.js":
/*!***************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/bidi/WebWorker.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiWebWorker: () => (/* binding */ BidiWebWorker)
/* harmony export */ });
/* harmony import */ var _api_WebWorker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/WebWorker.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/WebWorker.js");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _Realm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Realm.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Realm.js");
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
    #frame;
    #realm;
    constructor(frame, realm) {
        super(realm.origin);
        this.#frame = frame;
        this.#realm = _Realm_js__WEBPACK_IMPORTED_MODULE_2__.BidiWorkerRealm.from(realm, this);
    }
    get frame() {
        return this.#frame;
    }
    mainRealm() {
        return this.#realm;
    }
    get client() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
//# sourceMappingURL=WebWorker.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/ConsoleMessage.js":
/*!**********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/ConsoleMessage.js ***!
  \**********************************************************************************/
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
/**
 * ConsoleMessage objects are dispatched by page via the 'console' event.
 * @public
 */
class ConsoleMessage {
    #type;
    #text;
    #args;
    #stackTraceLocations;
    /**
     * @internal
     */
    constructor(type, text, args, stackTraceLocations) {
        this.#type = type;
        this.#text = text;
        this.#args = args;
        this.#stackTraceLocations = stackTraceLocations;
    }
    /**
     * The type of the console message.
     */
    type() {
        return this.#type;
    }
    /**
     * The text of the console message.
     */
    text() {
        return this.#text;
    }
    /**
     * An array of arguments passed to the console.
     */
    args() {
        return this.#args;
    }
    /**
     * The location of the console message.
     */
    location() {
        return this.#stackTraceLocations[0] ?? {};
    }
    /**
     * The array of locations on the stack of the console message.
     */
    stackTrace() {
        return this.#stackTraceLocations;
    }
}
//# sourceMappingURL=ConsoleMessage.js.map

/***/ })

}]);