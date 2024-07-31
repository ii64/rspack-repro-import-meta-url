"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_bidi_Browser_js"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/Browser.js":
/*!*****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/Browser.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiBrowser: () => (/* binding */ BidiBrowser)
/* harmony export */ });
/* harmony import */ var _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Browser.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/api/Browser.js");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/decorators.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */ var _BrowserContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BrowserContext.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/BrowserContext.js");
/* harmony import */ var _core_Session_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/Session.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Session.js");
/* harmony import */ var _Target_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Target.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/Target.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (undefined && undefined.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};







/**
 * @internal
 */
let BidiBrowser = (() => {
    let _classSuper = _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__.Browser;
    let _private_trustedEmitter_decorators;
    let _private_trustedEmitter_initializers = [];
    let _private_trustedEmitter_extraInitializers = [];
    let _private_trustedEmitter_descriptor;
    return class BidiBrowser extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _private_trustedEmitter_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_3__.bubble)()];
            __esDecorate(this, _private_trustedEmitter_descriptor = { get: __setFunctionName(function () { return this.#trustedEmitter_accessor_storage; }, "#trustedEmitter", "get"), set: __setFunctionName(function (value) { this.#trustedEmitter_accessor_storage = value; }, "#trustedEmitter", "set") }, _private_trustedEmitter_decorators, { kind: "accessor", name: "#trustedEmitter", static: false, private: true, access: { has: obj => #trustedEmitter in obj, get: obj => obj.#trustedEmitter, set: (obj, value) => { obj.#trustedEmitter = value; } }, metadata: _metadata }, _private_trustedEmitter_initializers, _private_trustedEmitter_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        protocol = 'webDriverBiDi';
        static subscribeModules = [
            'browsingContext',
            'network',
            'log',
            'script',
        ];
        static subscribeCdpEvents = [
            // Coverage
            'cdp.Debugger.scriptParsed',
            'cdp.CSS.styleSheetAdded',
            'cdp.Runtime.executionContextsCleared',
            // Tracing
            'cdp.Tracing.tracingComplete',
            // TODO: subscribe to all CDP events in the future.
            'cdp.Network.requestWillBeSent',
            'cdp.Debugger.scriptParsed',
            'cdp.Page.screencastFrame',
        ];
        static async create(opts) {
            const session = await _core_Session_js__WEBPACK_IMPORTED_MODULE_5__.Session.from(opts.connection, {
                alwaysMatch: {
                    acceptInsecureCerts: opts.ignoreHTTPSErrors,
                    unhandledPromptBehavior: {
                        default: "ignore" /* Bidi.Session.UserPromptHandlerType.Ignore */,
                    },
                    webSocketUrl: true,
                },
            });
            await session.subscribe(session.capabilities.browserName.toLocaleLowerCase().includes('firefox')
                ? BidiBrowser.subscribeModules
                : [...BidiBrowser.subscribeModules, ...BidiBrowser.subscribeCdpEvents]);
            const browser = new BidiBrowser(session.browser, opts);
            browser.#initialize();
            return browser;
        }
        #trustedEmitter_accessor_storage = __runInitializers(this, _private_trustedEmitter_initializers, new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
        get #trustedEmitter() { return _private_trustedEmitter_descriptor.get.call(this); }
        set #trustedEmitter(value) { return _private_trustedEmitter_descriptor.set.call(this, value); }
        #process = __runInitializers(this, _private_trustedEmitter_extraInitializers);
        #closeCallback;
        #browserCore;
        #defaultViewport;
        #browserContexts = new WeakMap();
        #target = new _Target_js__WEBPACK_IMPORTED_MODULE_6__.BidiBrowserTarget(this);
        #cdpConnection;
        constructor(browserCore, opts) {
            super();
            this.#process = opts.process;
            this.#closeCallback = opts.closeCallback;
            this.#browserCore = browserCore;
            this.#defaultViewport = opts.defaultViewport;
            this.#cdpConnection = opts.cdpConnection;
        }
        #initialize() {
            // Initializing existing contexts.
            for (const userContext of this.#browserCore.userContexts) {
                this.#createBrowserContext(userContext);
            }
            this.#browserCore.once('disconnected', () => {
                this.#trustedEmitter.emit("disconnected" /* BrowserEvent.Disconnected */, undefined);
                this.#trustedEmitter.removeAllListeners();
            });
            this.#process?.once('close', () => {
                this.#browserCore.dispose('Browser process exited.', true);
                this.connection.dispose();
            });
        }
        get #browserName() {
            return this.#browserCore.session.capabilities.browserName;
        }
        get #browserVersion() {
            return this.#browserCore.session.capabilities.browserVersion;
        }
        get cdpSupported() {
            return this.#cdpConnection !== undefined;
        }
        get cdpConnection() {
            return this.#cdpConnection;
        }
        async userAgent() {
            return this.#browserCore.session.capabilities.userAgent;
        }
        #createBrowserContext(userContext) {
            const browserContext = _BrowserContext_js__WEBPACK_IMPORTED_MODULE_4__.BidiBrowserContext.from(this, userContext, {
                defaultViewport: this.#defaultViewport,
            });
            this.#browserContexts.set(userContext, browserContext);
            browserContext.trustedEmitter.on("targetcreated" /* BrowserContextEvent.TargetCreated */, target => {
                this.#trustedEmitter.emit("targetcreated" /* BrowserEvent.TargetCreated */, target);
            });
            browserContext.trustedEmitter.on("targetchanged" /* BrowserContextEvent.TargetChanged */, target => {
                this.#trustedEmitter.emit("targetchanged" /* BrowserEvent.TargetChanged */, target);
            });
            browserContext.trustedEmitter.on("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */, target => {
                this.#trustedEmitter.emit("targetdestroyed" /* BrowserEvent.TargetDestroyed */, target);
            });
            return browserContext;
        }
        get connection() {
            // SAFETY: We only have one implementation.
            return this.#browserCore.session.connection;
        }
        wsEndpoint() {
            return this.connection.url;
        }
        async close() {
            if (this.connection.closed) {
                return;
            }
            try {
                await this.#browserCore.close();
                await this.#closeCallback?.call(null);
            }
            catch (error) {
                // Fail silently.
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)(error);
            }
            finally {
                this.connection.dispose();
            }
        }
        get connected() {
            return !this.#browserCore.disconnected;
        }
        process() {
            return this.#process ?? null;
        }
        async createBrowserContext(_options) {
            const userContext = await this.#browserCore.createUserContext();
            return this.#createBrowserContext(userContext);
        }
        async version() {
            return `${this.#browserName}/${this.#browserVersion}`;
        }
        browserContexts() {
            return [...this.#browserCore.userContexts].map(context => {
                return this.#browserContexts.get(context);
            });
        }
        defaultBrowserContext() {
            return this.#browserContexts.get(this.#browserCore.defaultUserContext);
        }
        newPage() {
            return this.defaultBrowserContext().newPage();
        }
        targets() {
            return [
                this.#target,
                ...this.browserContexts().flatMap(context => {
                    return context.targets();
                }),
            ];
        }
        target() {
            return this.#target;
        }
        async disconnect() {
            try {
                await this.#browserCore.session.end();
            }
            catch (error) {
                // Fail silently.
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)(error);
            }
            finally {
                this.connection.dispose();
            }
        }
        get debugInfo() {
            return {
                pendingProtocolErrors: this.connection.getPendingProtocolErrors(),
            };
        }
    };
})();

//# sourceMappingURL=Browser.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Session.js":
/*!**********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Session.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Session: () => (/* binding */ Session)
/* harmony export */ });
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/decorators.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/disposable.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */ var _Browser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Browser.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Browser.js");
/**
 * @license
 * Copyright 2024 Google Inc.
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




/**
 * @internal
 */
let Session = (() => {
    let _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;
    let _instanceExtraInitializers = [];
    let _connection_decorators;
    let _connection_initializers = [];
    let _connection_extraInitializers = [];
    let _dispose_decorators;
    let _send_decorators;
    let _subscribe_decorators;
    let _addIntercepts_decorators;
    let _end_decorators;
    return class Session extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(this, null, _connection_decorators, { kind: "accessor", name: "connection", static: false, private: false, access: { has: obj => "connection" in obj, get: obj => obj.connection, set: (obj, value) => { obj.connection = value; } }, metadata: _metadata }, _connection_initializers, _connection_extraInitializers);
            __esDecorate(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _send_decorators, { kind: "method", name: "send", static: false, private: false, access: { has: obj => "send" in obj, get: obj => obj.send }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _subscribe_decorators, { kind: "method", name: "subscribe", static: false, private: false, access: { has: obj => "subscribe" in obj, get: obj => obj.subscribe }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _addIntercepts_decorators, { kind: "method", name: "addIntercepts", static: false, private: false, access: { has: obj => "addIntercepts" in obj, get: obj => obj.addIntercepts }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _end_decorators, { kind: "method", name: "end", static: false, private: false, access: { has: obj => "end" in obj, get: obj => obj.end }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static async from(connection, capabilities) {
            const { result } = await connection.send('session.new', {
                capabilities,
            });
            const session = new Session(connection, result);
            await session.#initialize();
            return session;
        }
        #reason = __runInitializers(this, _instanceExtraInitializers);
        #disposables = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack();
        #info;
        browser;
        #connection_accessor_storage = __runInitializers(this, _connection_initializers, void 0);
        get connection() { return this.#connection_accessor_storage; }
        set connection(value) { this.#connection_accessor_storage = value; }
        constructor(connection, info) {
            super();
            __runInitializers(this, _connection_extraInitializers);
            this.#info = info;
            this.connection = connection;
        }
        async #initialize() {
            // SAFETY: We use `any` to allow assignment of the readonly property.
            this.browser = await _Browser_js__WEBPACK_IMPORTED_MODULE_3__.Browser.from(this);
            const browserEmitter = this.#disposables.use(this.browser);
            browserEmitter.once('closed', ({ reason }) => {
                this.dispose(reason);
            });
            // TODO: Currently, some implementations do not emit navigationStarted event
            // for fragment navigations (as per spec) and some do. This could emits a
            // synthetic navigationStarted to work around this inconsistency.
            const seen = new WeakSet();
            this.on('browsingContext.fragmentNavigated', info => {
                if (seen.has(info)) {
                    return;
                }
                seen.add(info);
                this.emit('browsingContext.navigationStarted', info);
                this.emit('browsingContext.fragmentNavigated', info);
            });
        }
        get capabilities() {
            return this.#info.capabilities;
        }
        get disposed() {
            return this.ended;
        }
        get ended() {
            return this.#reason !== undefined;
        }
        get id() {
            return this.#info.sessionId;
        }
        dispose(reason) {
            this.#reason = reason;
            this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
        }
        /**
         * Currently, there is a 1:1 relationship between the session and the
         * session. In the future, we might support multiple sessions and in that
         * case we always needs to make sure that the session for the right session
         * object is used, so we implement this method here, although it's not defined
         * in the spec.
         */
        async send(method, params) {
            return await this.connection.send(method, params);
        }
        async subscribe(events, contexts) {
            await this.send('session.subscribe', {
                events,
                contexts,
            });
        }
        async addIntercepts(events, contexts) {
            await this.send('session.subscribe', {
                events,
                contexts,
            });
        }
        async end() {
            try {
                await this.send('session.end', {});
            }
            finally {
                this.dispose(`Session already ended.`);
            }
        }
        [(_connection_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.bubble)()], _dispose_decorators = [_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.inertIfDisposed], _send_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(session => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return session.#reason;
            })], _subscribe_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(session => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return session.#reason;
            })], _addIntercepts_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(session => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return session.#reason;
            })], _end_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(session => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return session.#reason;
            })], _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol)]() {
            this.#reason ??=
                'Session already destroyed, probably because the connection broke.';
            this.emit('ended', { reason: this.#reason });
            this.#disposables.dispose();
            super[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
        }
    };
})();

//# sourceMappingURL=Session.js.map

/***/ })

}]);