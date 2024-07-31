"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_Browser_ts"],{

/***/ "./src/third_party/puppeteer/package/src/bidi/Browser.ts":
/*!***************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/Browser.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiBrowser: () => (/* binding */ BidiBrowser)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _api_Browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Browser.js */ "./src/third_party/puppeteer/package/src/api/Browser.ts");
/* harmony import */ var _api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/BrowserContext.js */ "./src/third_party/puppeteer/package/src/api/BrowserContext.ts");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/decorators.js */ "./src/third_party/puppeteer/package/src/util/decorators.ts");
/* harmony import */ var _BrowserContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BrowserContext.js */ "./src/third_party/puppeteer/package/src/bidi/BrowserContext.ts");
/* harmony import */ var _core_Session_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/Session.js */ "./src/third_party/puppeteer/package/src/bidi/core/Session.ts");
/* harmony import */ var _Target_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Target.js */ "./src/third_party/puppeteer/package/src/bidi/Target.ts");
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









/**
 * @internal
 */
let BidiBrowser = (() => {
    var _BidiBrowser_instances, _a, _BidiBrowser_trustedEmitter_accessor_storage, _BidiBrowser_trustedEmitter_get, _BidiBrowser_trustedEmitter_set, _BidiBrowser_process, _BidiBrowser_closeCallback, _BidiBrowser_browserCore, _BidiBrowser_defaultViewport, _BidiBrowser_browserContexts, _BidiBrowser_target, _BidiBrowser_cdpConnection, _BidiBrowser_initialize, _BidiBrowser_browserName_get, _BidiBrowser_browserVersion_get, _BidiBrowser_createBrowserContext;
    let _classSuper = _api_Browser_js__WEBPACK_IMPORTED_MODULE_1__.Browser;
    let _private_trustedEmitter_decorators;
    let _private_trustedEmitter_initializers = [];
    let _private_trustedEmitter_extraInitializers = [];
    let _private_trustedEmitter_descriptor;
    return _a = class BidiBrowser extends _classSuper {
            static async create(opts) {
                const session = await _core_Session_js__WEBPACK_IMPORTED_MODULE_7__.Session.from(opts.connection, {
                    alwaysMatch: {
                        acceptInsecureCerts: opts.ignoreHTTPSErrors,
                        unhandledPromptBehavior: {
                            default: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).UserPromptHandlerType.Ignore,
                        },
                        webSocketUrl: true,
                    },
                });
                await session.subscribe(session.capabilities.browserName.toLocaleLowerCase().includes('firefox')
                    ? _a.subscribeModules
                    : [..._a.subscribeModules, ..._a.subscribeCdpEvents]);
                const browser = new _a(session.browser, opts);
                __classPrivateFieldGet(browser, _BidiBrowser_instances, "m", _BidiBrowser_initialize).call(browser);
                return browser;
            }
            constructor(browserCore, opts) {
                super();
                _BidiBrowser_instances.add(this);
                Object.defineProperty(this, "protocol", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: 'webDriverBiDi'
                });
                _BidiBrowser_trustedEmitter_accessor_storage.set(this, __runInitializers(this, _private_trustedEmitter_initializers, new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_3__.EventEmitter()));
                _BidiBrowser_process.set(this, __runInitializers(this, _private_trustedEmitter_extraInitializers));
                _BidiBrowser_closeCallback.set(this, void 0);
                _BidiBrowser_browserCore.set(this, void 0);
                _BidiBrowser_defaultViewport.set(this, void 0);
                _BidiBrowser_browserContexts.set(this, new WeakMap());
                _BidiBrowser_target.set(this, new _Target_js__WEBPACK_IMPORTED_MODULE_8__.BidiBrowserTarget(this));
                _BidiBrowser_cdpConnection.set(this, void 0);
                __classPrivateFieldSet(this, _BidiBrowser_process, opts.process, "f");
                __classPrivateFieldSet(this, _BidiBrowser_closeCallback, opts.closeCallback, "f");
                __classPrivateFieldSet(this, _BidiBrowser_browserCore, browserCore, "f");
                __classPrivateFieldSet(this, _BidiBrowser_defaultViewport, opts.defaultViewport, "f");
                __classPrivateFieldSet(this, _BidiBrowser_cdpConnection, opts.cdpConnection, "f");
            }
            get cdpSupported() {
                return __classPrivateFieldGet(this, _BidiBrowser_cdpConnection, "f") !== undefined;
            }
            get cdpConnection() {
                return __classPrivateFieldGet(this, _BidiBrowser_cdpConnection, "f");
            }
            async userAgent() {
                return __classPrivateFieldGet(this, _BidiBrowser_browserCore, "f").session.capabilities.userAgent;
            }
            get connection() {
                // SAFETY: We only have one implementation.
                return __classPrivateFieldGet(this, _BidiBrowser_browserCore, "f").session.connection;
            }
            wsEndpoint() {
                return this.connection.url;
            }
            async close() {
                if (this.connection.closed) {
                    return;
                }
                try {
                    await __classPrivateFieldGet(this, _BidiBrowser_browserCore, "f").close();
                    await __classPrivateFieldGet(this, _BidiBrowser_closeCallback, "f")?.call(null);
                }
                catch (error) {
                    // Fail silently.
                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError)(error);
                }
                finally {
                    this.connection.dispose();
                }
            }
            get connected() {
                return !__classPrivateFieldGet(this, _BidiBrowser_browserCore, "f").disconnected;
            }
            process() {
                return __classPrivateFieldGet(this, _BidiBrowser_process, "f") ?? null;
            }
            async createBrowserContext(_options) {
                const userContext = await __classPrivateFieldGet(this, _BidiBrowser_browserCore, "f").createUserContext();
                return __classPrivateFieldGet(this, _BidiBrowser_instances, "m", _BidiBrowser_createBrowserContext).call(this, userContext);
            }
            async version() {
                return `${__classPrivateFieldGet(this, _BidiBrowser_instances, "a", _BidiBrowser_browserName_get)}/${__classPrivateFieldGet(this, _BidiBrowser_instances, "a", _BidiBrowser_browserVersion_get)}`;
            }
            browserContexts() {
                return [...__classPrivateFieldGet(this, _BidiBrowser_browserCore, "f").userContexts].map(context => {
                    return __classPrivateFieldGet(this, _BidiBrowser_browserContexts, "f").get(context);
                });
            }
            defaultBrowserContext() {
                return __classPrivateFieldGet(this, _BidiBrowser_browserContexts, "f").get(__classPrivateFieldGet(this, _BidiBrowser_browserCore, "f").defaultUserContext);
            }
            newPage() {
                return this.defaultBrowserContext().newPage();
            }
            targets() {
                return [
                    __classPrivateFieldGet(this, _BidiBrowser_target, "f"),
                    ...this.browserContexts().flatMap(context => {
                        return context.targets();
                    }),
                ];
            }
            target() {
                return __classPrivateFieldGet(this, _BidiBrowser_target, "f");
            }
            async disconnect() {
                try {
                    await __classPrivateFieldGet(this, _BidiBrowser_browserCore, "f").session.end();
                }
                catch (error) {
                    // Fail silently.
                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError)(error);
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
        },
        _BidiBrowser_trustedEmitter_accessor_storage = new WeakMap(),
        _BidiBrowser_process = new WeakMap(),
        _BidiBrowser_closeCallback = new WeakMap(),
        _BidiBrowser_browserCore = new WeakMap(),
        _BidiBrowser_defaultViewport = new WeakMap(),
        _BidiBrowser_browserContexts = new WeakMap(),
        _BidiBrowser_target = new WeakMap(),
        _BidiBrowser_cdpConnection = new WeakMap(),
        _BidiBrowser_instances = new WeakSet(),
        _BidiBrowser_trustedEmitter_get = function _BidiBrowser_trustedEmitter_get() { return _private_trustedEmitter_descriptor.get.call(this); },
        _BidiBrowser_trustedEmitter_set = function _BidiBrowser_trustedEmitter_set(value) { return _private_trustedEmitter_descriptor.set.call(this, value); },
        _BidiBrowser_initialize = function _BidiBrowser_initialize() {
            // Initializing existing contexts.
            for (const userContext of __classPrivateFieldGet(this, _BidiBrowser_browserCore, "f").userContexts) {
                __classPrivateFieldGet(this, _BidiBrowser_instances, "m", _BidiBrowser_createBrowserContext).call(this, userContext);
            }
            __classPrivateFieldGet(this, _BidiBrowser_browserCore, "f").once('disconnected', () => {
                __classPrivateFieldGet(this, _BidiBrowser_instances, "a", _BidiBrowser_trustedEmitter_get).emit(_api_Browser_js__WEBPACK_IMPORTED_MODULE_1__.BrowserEvent.Disconnected, undefined);
                __classPrivateFieldGet(this, _BidiBrowser_instances, "a", _BidiBrowser_trustedEmitter_get).removeAllListeners();
            });
            __classPrivateFieldGet(this, _BidiBrowser_process, "f")?.once('close', () => {
                __classPrivateFieldGet(this, _BidiBrowser_browserCore, "f").dispose('Browser process exited.', true);
                this.connection.dispose();
            });
        },
        _BidiBrowser_browserName_get = function _BidiBrowser_browserName_get() {
            return __classPrivateFieldGet(this, _BidiBrowser_browserCore, "f").session.capabilities.browserName;
        },
        _BidiBrowser_browserVersion_get = function _BidiBrowser_browserVersion_get() {
            return __classPrivateFieldGet(this, _BidiBrowser_browserCore, "f").session.capabilities.browserVersion;
        },
        _BidiBrowser_createBrowserContext = function _BidiBrowser_createBrowserContext(userContext) {
            const browserContext = _BrowserContext_js__WEBPACK_IMPORTED_MODULE_6__.BidiBrowserContext.from(this, userContext, {
                defaultViewport: __classPrivateFieldGet(this, _BidiBrowser_defaultViewport, "f"),
            });
            __classPrivateFieldGet(this, _BidiBrowser_browserContexts, "f").set(userContext, browserContext);
            browserContext.trustedEmitter.on(_api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.BrowserContextEvent.TargetCreated, target => {
                __classPrivateFieldGet(this, _BidiBrowser_instances, "a", _BidiBrowser_trustedEmitter_get).emit(_api_Browser_js__WEBPACK_IMPORTED_MODULE_1__.BrowserEvent.TargetCreated, target);
            });
            browserContext.trustedEmitter.on(_api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.BrowserContextEvent.TargetChanged, target => {
                __classPrivateFieldGet(this, _BidiBrowser_instances, "a", _BidiBrowser_trustedEmitter_get).emit(_api_Browser_js__WEBPACK_IMPORTED_MODULE_1__.BrowserEvent.TargetChanged, target);
            });
            browserContext.trustedEmitter.on(_api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.BrowserContextEvent.TargetDestroyed, target => {
                __classPrivateFieldGet(this, _BidiBrowser_instances, "a", _BidiBrowser_trustedEmitter_get).emit(_api_Browser_js__WEBPACK_IMPORTED_MODULE_1__.BrowserEvent.TargetDestroyed, target);
            });
            return browserContext;
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _private_trustedEmitter_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.bubble)()];
            __esDecorate(_a, _private_trustedEmitter_descriptor = { get: __setFunctionName(function () { return __classPrivateFieldGet(this, _BidiBrowser_trustedEmitter_accessor_storage, "f"); }, "#trustedEmitter", "get"), set: __setFunctionName(function (value) { __classPrivateFieldSet(this, _BidiBrowser_trustedEmitter_accessor_storage, value, "f"); }, "#trustedEmitter", "set") }, _private_trustedEmitter_decorators, { kind: "accessor", name: "#trustedEmitter", static: false, private: true, access: { has: obj => __classPrivateFieldIn(_BidiBrowser_instances, obj), get: obj => __classPrivateFieldGet(obj, _BidiBrowser_instances, "a", _BidiBrowser_trustedEmitter_get), set: (obj, value) => { __classPrivateFieldSet(obj, _BidiBrowser_instances, value, "a", _BidiBrowser_trustedEmitter_set); } }, metadata: _metadata }, _private_trustedEmitter_initializers, _private_trustedEmitter_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        Object.defineProperty(_a, "subscribeModules", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: [
                'browsingContext',
                'network',
                'log',
                'script',
            ]
        }),
        Object.defineProperty(_a, "subscribeCdpEvents", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: [
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
            ]
        }),
        _a;
})();



/***/ })

}]);