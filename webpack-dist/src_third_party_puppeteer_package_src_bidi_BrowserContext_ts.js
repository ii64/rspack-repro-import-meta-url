"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_BrowserContext_ts"],{

/***/ "./src/third_party/puppeteer/package/src/api/Browser.ts":
/*!**************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/Browser.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Browser: () => (/* binding */ Browser),
/* harmony export */   BrowserEvent: () => (/* binding */ BrowserEvent),
/* harmony export */   WEB_PERMISSION_TO_PROTOCOL_PERMISSION: () => (/* binding */ WEB_PERMISSION_TO_PROTOCOL_PERMISSION)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */




/**
 * @internal
 */
const WEB_PERMISSION_TO_PROTOCOL_PERMISSION = new Map([
    ['geolocation', 'geolocation'],
    ['midi', 'midi'],
    ['notifications', 'notifications'],
    // TODO: push isn't a valid type?
    // ['push', 'push'],
    ['camera', 'videoCapture'],
    ['microphone', 'audioCapture'],
    ['background-sync', 'backgroundSync'],
    ['ambient-light-sensor', 'sensors'],
    ['accelerometer', 'sensors'],
    ['gyroscope', 'sensors'],
    ['magnetometer', 'sensors'],
    ['accessibility-events', 'accessibilityEvents'],
    ['clipboard-read', 'clipboardReadWrite'],
    ['clipboard-write', 'clipboardReadWrite'],
    ['clipboard-sanitized-write', 'clipboardSanitizedWrite'],
    ['payment-handler', 'paymentHandler'],
    ['persistent-storage', 'durableStorage'],
    ['idle-detection', 'idleDetection'],
    // chrome-specific permissions we have.
    ['midi-sysex', 'midiSysex'],
]);
/**
 * All the events a {@link Browser | browser instance} may emit.
 *
 * @public
 */
var BrowserEvent;
(function (BrowserEvent) {
    /**
     * Emitted when Puppeteer gets disconnected from the browser instance. This
     * might happen because either:
     *
     * - The browser closes/crashes or
     * - {@link Browser.disconnect} was called.
     */
    BrowserEvent["Disconnected"] = "disconnected";
    /**
     * Emitted when the URL of a target changes. Contains a {@link Target}
     * instance.
     *
     * @remarks Note that this includes target changes in all browser
     * contexts.
     */
    BrowserEvent["TargetChanged"] = "targetchanged";
    /**
     * Emitted when a target is created, for example when a new page is opened by
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/open | window.open}
     * or by {@link Browser.newPage | browser.newPage}
     *
     * Contains a {@link Target} instance.
     *
     * @remarks Note that this includes target creations in all browser
     * contexts.
     */
    BrowserEvent["TargetCreated"] = "targetcreated";
    /**
     * Emitted when a target is destroyed, for example when a page is closed.
     * Contains a {@link Target} instance.
     *
     * @remarks Note that this includes target destructions in all browser
     * contexts.
     */
    BrowserEvent["TargetDestroyed"] = "targetdestroyed";
    /**
     * @internal
     */
    BrowserEvent["TargetDiscovered"] = "targetdiscovered";
})(BrowserEvent || (BrowserEvent = {}));
/**
 * {@link Browser} represents a browser instance that is either:
 *
 * - connected to via {@link Puppeteer.connect} or
 * - launched by {@link PuppeteerNode.launch}.
 *
 * {@link Browser} {@link EventEmitter.emit | emits} various events which are
 * documented in the {@link BrowserEvent} enum.
 *
 * @example Using a {@link Browser} to create a {@link Page}:
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * const browser = await puppeteer.launch();
 * const page = await browser.newPage();
 * await page.goto('https://example.com');
 * await browser.close();
 * ```
 *
 * @example Disconnecting from and reconnecting to a {@link Browser}:
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * const browser = await puppeteer.launch();
 * // Store the endpoint to be able to reconnect to the browser.
 * const browserWSEndpoint = browser.wsEndpoint();
 * // Disconnect puppeteer from the browser.
 * await browser.disconnect();
 *
 * // Use the endpoint to reestablish a connection
 * const browser2 = await puppeteer.connect({browserWSEndpoint});
 * // Close the browser.
 * await browser2.close();
 * ```
 *
 * @public
 */
class Browser extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter {
    /**
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * Waits until a {@link Target | target} matching the given `predicate`
     * appears and returns it.
     *
     * This will look all open {@link BrowserContext | browser contexts}.
     *
     * @example Finding a target for a page opened via `window.open`:
     *
     * ```ts
     * await page.evaluate(() => window.open('https://www.example.com/'));
     * const newWindowTarget = await browser.waitForTarget(
     *   target => target.url() === 'https://www.example.com/'
     * );
     * ```
     */
    async waitForTarget(predicate, options = {}) {
        const { timeout: ms = 30000 } = options;
        return await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.fromEmitterEvent)(this, BrowserEvent.TargetCreated), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.fromEmitterEvent)(this, BrowserEvent.TargetChanged), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.targets())).pipe((0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.filterAsync)(predicate), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.timeout)(ms))));
    }
    /**
     * Gets a list of all open {@link Page | pages} inside this {@link Browser}.
     *
     * If there ar multiple {@link BrowserContext | browser contexts}, this
     * returns all {@link Page | pages} in all
     * {@link BrowserContext | browser contexts}.
     *
     * @remarks Non-visible {@link Page | pages}, such as `"background_page"`,
     * will not be listed here. You can find them using {@link Target.page}.
     */
    async pages() {
        const contextPages = await Promise.all(this.browserContexts().map(context => {
            return context.pages();
        }));
        // Flatten array.
        return contextPages.reduce((acc, x) => {
            return acc.concat(x);
        }, []);
    }
    /**
     * Whether Puppeteer is connected to this {@link Browser | browser}.
     *
     * @deprecated Use {@link Browser | Browser.connected}.
     */
    isConnected() {
        return this.connected;
    }
    /** @internal */
    [_util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.disposeSymbol]() {
        if (this.process()) {
            return void this.close().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
        }
        return void this.disconnect().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
    }
    /** @internal */
    [_util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.asyncDisposeSymbol]() {
        if (this.process()) {
            return this.close();
        }
        return this.disconnect();
    }
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/api/BrowserContext.ts":
/*!*********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/BrowserContext.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserContext: () => (/* binding */ BrowserContext),
/* harmony export */   BrowserContextEvent: () => (/* binding */ BrowserContextEvent)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/* harmony import */ var _util_Mutex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Mutex.js */ "./src/third_party/puppeteer/package/src/util/Mutex.ts");
/**
 * @license
 * Copyright 2017 Google Inc.
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
var _BrowserContext_pageScreenshotMutex, _BrowserContext_screenshotOperationsCount;





/**
 * @public
 */
var BrowserContextEvent;
(function (BrowserContextEvent) {
    /**
     * Emitted when the url of a target inside the browser context changes.
     * Contains a {@link Target} instance.
     */
    BrowserContextEvent["TargetChanged"] = "targetchanged";
    /**
     * Emitted when a target is created within the browser context, for example
     * when a new page is opened by
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/open | window.open}
     * or by {@link BrowserContext.newPage | browserContext.newPage}
     *
     * Contains a {@link Target} instance.
     */
    BrowserContextEvent["TargetCreated"] = "targetcreated";
    /**
     * Emitted when a target is destroyed within the browser context, for example
     * when a page is closed. Contains a {@link Target} instance.
     */
    BrowserContextEvent["TargetDestroyed"] = "targetdestroyed";
})(BrowserContextEvent || (BrowserContextEvent = {}));
/**
 * {@link BrowserContext} represents individual user contexts within a
 * {@link Browser | browser}.
 *
 * When a {@link Browser | browser} is launched, it has a single
 * {@link BrowserContext | browser context} by default. Others can be created
 * using {@link Browser.createBrowserContext}. Each context has isolated storage
 * (cookies/localStorage/etc.)
 *
 * {@link BrowserContext} {@link EventEmitter | emits} various events which are
 * documented in the {@link BrowserContextEvent} enum.
 *
 * If a {@link Page | page} opens another {@link Page | page}, e.g. using
 * `window.open`, the popup will belong to the parent {@link Page.browserContext
 * | page's browser context}.
 *
 * @example Creating a new {@link BrowserContext | browser context}:
 *
 * ```ts
 * // Create a new browser context
 * const context = await browser.createBrowserContext();
 * // Create a new page inside context.
 * const page = await context.newPage();
 * // ... do stuff with page ...
 * await page.goto('https://example.com');
 * // Dispose context once it's no longer needed.
 * await context.close();
 * ```
 *
 * @public
 */
class BrowserContext extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter {
    /**
     * @internal
     */
    constructor() {
        super();
        /**
         * If defined, indicates an ongoing screenshot opereation.
         */
        _BrowserContext_pageScreenshotMutex.set(this, void 0);
        _BrowserContext_screenshotOperationsCount.set(this, 0);
    }
    /**
     * @internal
     */
    startScreenshot() {
        var _a;
        const mutex = __classPrivateFieldGet(this, _BrowserContext_pageScreenshotMutex, "f") || new _util_Mutex_js__WEBPACK_IMPORTED_MODULE_4__.Mutex();
        __classPrivateFieldSet(this, _BrowserContext_pageScreenshotMutex, mutex, "f");
        __classPrivateFieldSet(this, _BrowserContext_screenshotOperationsCount, (_a = __classPrivateFieldGet(this, _BrowserContext_screenshotOperationsCount, "f"), _a++, _a), "f");
        return mutex.acquire(() => {
            var _a;
            __classPrivateFieldSet(this, _BrowserContext_screenshotOperationsCount, (_a = __classPrivateFieldGet(this, _BrowserContext_screenshotOperationsCount, "f"), _a--, _a), "f");
            if (__classPrivateFieldGet(this, _BrowserContext_screenshotOperationsCount, "f") === 0) {
                // Remove the mutex to indicate no ongoing screenshot operation.
                __classPrivateFieldSet(this, _BrowserContext_pageScreenshotMutex, undefined, "f");
            }
        });
    }
    /**
     * @internal
     */
    waitForScreenshotOperations() {
        return __classPrivateFieldGet(this, _BrowserContext_pageScreenshotMutex, "f")?.acquire();
    }
    /**
     * Waits until a {@link Target | target} matching the given `predicate`
     * appears and returns it.
     *
     * This will look all open {@link BrowserContext | browser contexts}.
     *
     * @example Finding a target for a page opened via `window.open`:
     *
     * ```ts
     * await page.evaluate(() => window.open('https://www.example.com/'));
     * const newWindowTarget = await browserContext.waitForTarget(
     *   target => target.url() === 'https://www.example.com/'
     * );
     * ```
     */
    async waitForTarget(predicate, options = {}) {
        const { timeout: ms = 30000 } = options;
        return await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.fromEmitterEvent)(this, BrowserContextEvent.TargetCreated), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.fromEmitterEvent)(this, BrowserContextEvent.TargetChanged), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.targets())).pipe((0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.filterAsync)(predicate), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.timeout)(ms))));
    }
    /**
     * Whether this {@link BrowserContext | browser context} is closed.
     */
    get closed() {
        return !this.browser().browserContexts().includes(this);
    }
    /**
     * Identifier for this {@link BrowserContext | browser context}.
     */
    get id() {
        return undefined;
    }
    /** @internal */
    [(_BrowserContext_pageScreenshotMutex = new WeakMap(), _BrowserContext_screenshotOperationsCount = new WeakMap(), _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.disposeSymbol)]() {
        return void this.close().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
    }
    /** @internal */
    [_util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.asyncDisposeSymbol]() {
        return this.close();
    }
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/api/Target.ts":
/*!*************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/Target.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Target: () => (/* binding */ Target),
/* harmony export */   TargetType: () => (/* binding */ TargetType)
/* harmony export */ });
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @public
 */
var TargetType;
(function (TargetType) {
    TargetType["PAGE"] = "page";
    TargetType["BACKGROUND_PAGE"] = "background_page";
    TargetType["SERVICE_WORKER"] = "service_worker";
    TargetType["SHARED_WORKER"] = "shared_worker";
    TargetType["BROWSER"] = "browser";
    TargetType["WEBVIEW"] = "webview";
    TargetType["OTHER"] = "other";
    /**
     * @internal
     */
    TargetType["TAB"] = "tab";
})(TargetType || (TargetType = {}));
/**
 * Target represents a
 * {@link https://chromedevtools.github.io/devtools-protocol/tot/Target/ | CDP target}.
 * In CDP a target is something that can be debugged such a frame, a page or a
 * worker.
 * @public
 */
class Target {
    /**
     * @internal
     */
    constructor() { }
    /**
     * If the target is not of type `"service_worker"` or `"shared_worker"`, returns `null`.
     */
    async worker() {
        return null;
    }
    /**
     * If the target is not of type `"page"`, `"webview"` or `"background_page"`,
     * returns `null`.
     */
    async page() {
        return null;
    }
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/bidi/BrowserContext.ts":
/*!**********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/BrowserContext.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiBrowserContext: () => (/* binding */ BidiBrowserContext)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _api_Browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Browser.js */ "./src/third_party/puppeteer/package/src/api/Browser.ts");
/* harmony import */ var _api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/BrowserContext.js */ "./src/third_party/puppeteer/package/src/api/BrowserContext.ts");
/* harmony import */ var _api_Page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/Page.js */ "./src/third_party/puppeteer/package/src/api/Page.ts");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/decorators.js */ "./src/third_party/puppeteer/package/src/util/decorators.ts");
/* harmony import */ var _core_UserContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/UserContext.js */ "./src/third_party/puppeteer/package/src/bidi/core/UserContext.ts");
/* harmony import */ var _Page_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Page.js */ "./src/third_party/puppeteer/package/src/bidi/Page.ts");
/* harmony import */ var _Target_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Target.js */ "./src/third_party/puppeteer/package/src/bidi/Target.ts");
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
var __addDisposableResource = (undefined && undefined.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources = (undefined && undefined.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
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











/**
 * @internal
 */
let BidiBrowserContext = (() => {
    var _BidiBrowserContext_instances, _a, _BidiBrowserContext_browser, _BidiBrowserContext_defaultViewport, _BidiBrowserContext_pages, _BidiBrowserContext_targets, _BidiBrowserContext_overrides, _BidiBrowserContext_initialize, _BidiBrowserContext_createPage, _BidiBrowserContext_trustedEmitter_accessor_storage;
    let _classSuper = _api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.BrowserContext;
    let _trustedEmitter_decorators;
    let _trustedEmitter_initializers = [];
    let _trustedEmitter_extraInitializers = [];
    return _a = class BidiBrowserContext extends _classSuper {
            static from(browser, userContext, options) {
                const context = new _a(browser, userContext, options);
                __classPrivateFieldGet(context, _BidiBrowserContext_instances, "m", _BidiBrowserContext_initialize).call(context);
                return context;
            }
            get trustedEmitter() { return __classPrivateFieldGet(this, _BidiBrowserContext_trustedEmitter_accessor_storage, "f"); }
            set trustedEmitter(value) { __classPrivateFieldSet(this, _BidiBrowserContext_trustedEmitter_accessor_storage, value, "f"); }
            constructor(browser, userContext, options) {
                super();
                _BidiBrowserContext_instances.add(this);
                _BidiBrowserContext_trustedEmitter_accessor_storage.set(this, __runInitializers(this, _trustedEmitter_initializers, new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_4__.EventEmitter()));
                _BidiBrowserContext_browser.set(this, __runInitializers(this, _trustedEmitter_extraInitializers));
                _BidiBrowserContext_defaultViewport.set(this, void 0);
                // This is public because of cookies.
                Object.defineProperty(this, "userContext", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                _BidiBrowserContext_pages.set(this, new WeakMap());
                _BidiBrowserContext_targets.set(this, new Map());
                _BidiBrowserContext_overrides.set(this, []);
                __classPrivateFieldSet(this, _BidiBrowserContext_browser, browser, "f");
                this.userContext = userContext;
                __classPrivateFieldSet(this, _BidiBrowserContext_defaultViewport, options.defaultViewport, "f");
            }
            targets() {
                return [...__classPrivateFieldGet(this, _BidiBrowserContext_targets, "f").values()].flatMap(([target, frames]) => {
                    return [target, ...frames.values()];
                });
            }
            async newPage() {
                const env_1 = { stack: [], error: void 0, hasError: false };
                try {
                    const _guard = __addDisposableResource(env_1, await this.waitForScreenshotOperations(), false);
                    const context = await this.userContext.createBrowsingContext(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).CreateType.Tab);
                    const page = __classPrivateFieldGet(this, _BidiBrowserContext_pages, "f").get(context);
                    if (!page) {
                        throw new Error('Page is not found');
                    }
                    if (__classPrivateFieldGet(this, _BidiBrowserContext_defaultViewport, "f")) {
                        try {
                            await page.setViewport(__classPrivateFieldGet(this, _BidiBrowserContext_defaultViewport, "f"));
                        }
                        catch {
                            // No support for setViewport in Firefox.
                        }
                    }
                    return page;
                }
                catch (e_1) {
                    env_1.error = e_1;
                    env_1.hasError = true;
                }
                finally {
                    __disposeResources(env_1);
                }
            }
            async close() {
                if (!this.isIncognito()) {
                    throw new Error('Default context cannot be closed!');
                }
                try {
                    await this.userContext.remove();
                }
                catch (error) {
                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.debugError)(error);
                }
                __classPrivateFieldGet(this, _BidiBrowserContext_targets, "f").clear();
            }
            browser() {
                return __classPrivateFieldGet(this, _BidiBrowserContext_browser, "f");
            }
            async pages() {
                return [...this.userContext.browsingContexts].map(context => {
                    return __classPrivateFieldGet(this, _BidiBrowserContext_pages, "f").get(context);
                });
            }
            isIncognito() {
                return this.userContext.id !== _core_UserContext_js__WEBPACK_IMPORTED_MODULE_7__.UserContext.DEFAULT;
            }
            async overridePermissions(origin, permissions) {
                const permissionsSet = new Set(permissions.map(permission => {
                    const protocolPermission = _api_Browser_js__WEBPACK_IMPORTED_MODULE_1__.WEB_PERMISSION_TO_PROTOCOL_PERMISSION.get(permission);
                    if (!protocolPermission) {
                        throw new Error('Unknown permission: ' + permission);
                    }
                    return permission;
                }));
                await Promise.all(Array.from(_api_Browser_js__WEBPACK_IMPORTED_MODULE_1__.WEB_PERMISSION_TO_PROTOCOL_PERMISSION.keys()).map(permission => {
                    const result = this.userContext.setPermissions(origin, {
                        name: permission,
                    }, permissionsSet.has(permission)
                        ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).PermissionState.Granted
                        : Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).PermissionState.Denied);
                    __classPrivateFieldGet(this, _BidiBrowserContext_overrides, "f").push({ origin, permission });
                    // TODO: some permissions are outdated and setting them to denied does
                    // not work.
                    if (!permissionsSet.has(permission)) {
                        return result.catch(_common_util_js__WEBPACK_IMPORTED_MODULE_5__.debugError);
                    }
                    return result;
                }));
            }
            async clearPermissionOverrides() {
                const promises = __classPrivateFieldGet(this, _BidiBrowserContext_overrides, "f").map(({ permission, origin }) => {
                    return this.userContext
                        .setPermissions(origin, {
                        name: permission,
                    }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).PermissionState.Prompt)
                        .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_5__.debugError);
                });
                __classPrivateFieldSet(this, _BidiBrowserContext_overrides, [], "f");
                await Promise.all(promises);
            }
            get id() {
                if (this.userContext.id === _core_UserContext_js__WEBPACK_IMPORTED_MODULE_7__.UserContext.DEFAULT) {
                    return undefined;
                }
                return this.userContext.id;
            }
        },
        _BidiBrowserContext_browser = new WeakMap(),
        _BidiBrowserContext_defaultViewport = new WeakMap(),
        _BidiBrowserContext_pages = new WeakMap(),
        _BidiBrowserContext_targets = new WeakMap(),
        _BidiBrowserContext_overrides = new WeakMap(),
        _BidiBrowserContext_instances = new WeakSet(),
        _BidiBrowserContext_trustedEmitter_accessor_storage = new WeakMap(),
        _BidiBrowserContext_initialize = function _BidiBrowserContext_initialize() {
            // Create targets for existing browsing contexts.
            for (const browsingContext of this.userContext.browsingContexts) {
                __classPrivateFieldGet(this, _BidiBrowserContext_instances, "m", _BidiBrowserContext_createPage).call(this, browsingContext);
            }
            this.userContext.on('browsingcontext', ({ browsingContext }) => {
                const page = __classPrivateFieldGet(this, _BidiBrowserContext_instances, "m", _BidiBrowserContext_createPage).call(this, browsingContext);
                // We need to wait for the DOMContentLoaded as the
                // browsingContext still may be navigating from the about:blank
                browsingContext.once('DOMContentLoaded', () => {
                    if (browsingContext.originalOpener) {
                        for (const context of this.userContext.browsingContexts) {
                            if (context.id === browsingContext.originalOpener) {
                                __classPrivateFieldGet(this, _BidiBrowserContext_pages, "f")
                                    .get(context)
                                    .trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_3__.PageEvent.Popup, page);
                            }
                        }
                    }
                });
            });
            this.userContext.on('closed', () => {
                this.trustedEmitter.removeAllListeners();
            });
        },
        _BidiBrowserContext_createPage = function _BidiBrowserContext_createPage(browsingContext) {
            const page = _Page_js__WEBPACK_IMPORTED_MODULE_8__.BidiPage.from(this, browsingContext);
            __classPrivateFieldGet(this, _BidiBrowserContext_pages, "f").set(browsingContext, page);
            page.trustedEmitter.on(_api_Page_js__WEBPACK_IMPORTED_MODULE_3__.PageEvent.Close, () => {
                __classPrivateFieldGet(this, _BidiBrowserContext_pages, "f").delete(browsingContext);
            });
            // -- Target stuff starts here --
            const pageTarget = new _Target_js__WEBPACK_IMPORTED_MODULE_9__.BidiPageTarget(page);
            const pageTargets = new Map();
            __classPrivateFieldGet(this, _BidiBrowserContext_targets, "f").set(page, [pageTarget, pageTargets]);
            page.trustedEmitter.on(_api_Page_js__WEBPACK_IMPORTED_MODULE_3__.PageEvent.FrameAttached, frame => {
                const bidiFrame = frame;
                const target = new _Target_js__WEBPACK_IMPORTED_MODULE_9__.BidiFrameTarget(bidiFrame);
                pageTargets.set(bidiFrame, target);
                this.trustedEmitter.emit(_api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.BrowserContextEvent.TargetCreated, target);
            });
            page.trustedEmitter.on(_api_Page_js__WEBPACK_IMPORTED_MODULE_3__.PageEvent.FrameNavigated, frame => {
                const bidiFrame = frame;
                const target = pageTargets.get(bidiFrame);
                // If there is no target, then this is the page's frame.
                if (target === undefined) {
                    this.trustedEmitter.emit(_api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.BrowserContextEvent.TargetChanged, pageTarget);
                }
                else {
                    this.trustedEmitter.emit(_api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.BrowserContextEvent.TargetChanged, target);
                }
            });
            page.trustedEmitter.on(_api_Page_js__WEBPACK_IMPORTED_MODULE_3__.PageEvent.FrameDetached, frame => {
                const bidiFrame = frame;
                const target = pageTargets.get(bidiFrame);
                if (target === undefined) {
                    return;
                }
                pageTargets.delete(bidiFrame);
                this.trustedEmitter.emit(_api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.BrowserContextEvent.TargetDestroyed, target);
            });
            page.trustedEmitter.on(_api_Page_js__WEBPACK_IMPORTED_MODULE_3__.PageEvent.WorkerCreated, worker => {
                const bidiWorker = worker;
                const target = new _Target_js__WEBPACK_IMPORTED_MODULE_9__.BidiWorkerTarget(bidiWorker);
                pageTargets.set(bidiWorker, target);
                this.trustedEmitter.emit(_api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.BrowserContextEvent.TargetCreated, target);
            });
            page.trustedEmitter.on(_api_Page_js__WEBPACK_IMPORTED_MODULE_3__.PageEvent.WorkerDestroyed, worker => {
                const bidiWorker = worker;
                const target = pageTargets.get(bidiWorker);
                if (target === undefined) {
                    return;
                }
                pageTargets.delete(worker);
                this.trustedEmitter.emit(_api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.BrowserContextEvent.TargetDestroyed, target);
            });
            page.trustedEmitter.on(_api_Page_js__WEBPACK_IMPORTED_MODULE_3__.PageEvent.Close, () => {
                __classPrivateFieldGet(this, _BidiBrowserContext_targets, "f").delete(page);
                this.trustedEmitter.emit(_api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.BrowserContextEvent.TargetDestroyed, pageTarget);
            });
            this.trustedEmitter.emit(_api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.BrowserContextEvent.TargetCreated, pageTarget);
            // -- Target stuff ends here --
            return page;
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _trustedEmitter_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_6__.bubble)()];
            __esDecorate(_a, null, _trustedEmitter_decorators, { kind: "accessor", name: "trustedEmitter", static: false, private: false, access: { has: obj => "trustedEmitter" in obj, get: obj => obj.trustedEmitter, set: (obj, value) => { obj.trustedEmitter = value; } }, metadata: _metadata }, _trustedEmitter_initializers, _trustedEmitter_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();



/***/ }),

/***/ "./src/third_party/puppeteer/package/src/bidi/Target.ts":
/*!**************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/Target.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiBrowserTarget: () => (/* binding */ BidiBrowserTarget),
/* harmony export */   BidiFrameTarget: () => (/* binding */ BidiFrameTarget),
/* harmony export */   BidiPageTarget: () => (/* binding */ BidiPageTarget),
/* harmony export */   BidiWorkerTarget: () => (/* binding */ BidiWorkerTarget)
/* harmony export */ });
/* harmony import */ var _api_Target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Target.js */ "./src/third_party/puppeteer/package/src/api/Target.ts");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _Page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page.js */ "./src/third_party/puppeteer/package/src/bidi/Page.ts");
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
var _BidiBrowserTarget_browser, _BidiPageTarget_page, _BidiFrameTarget_frame, _BidiFrameTarget_page, _BidiWorkerTarget_worker;



/**
 * @internal
 */
class BidiBrowserTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    constructor(browser) {
        super();
        _BidiBrowserTarget_browser.set(this, void 0);
        __classPrivateFieldSet(this, _BidiBrowserTarget_browser, browser, "f");
    }
    asPage() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
    url() {
        return '';
    }
    createCDPSession() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
    type() {
        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.BROWSER;
    }
    browser() {
        return __classPrivateFieldGet(this, _BidiBrowserTarget_browser, "f");
    }
    browserContext() {
        return __classPrivateFieldGet(this, _BidiBrowserTarget_browser, "f").defaultBrowserContext();
    }
    opener() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
_BidiBrowserTarget_browser = new WeakMap();
/**
 * @internal
 */
class BidiPageTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    constructor(page) {
        super();
        _BidiPageTarget_page.set(this, void 0);
        __classPrivateFieldSet(this, _BidiPageTarget_page, page, "f");
    }
    async page() {
        return __classPrivateFieldGet(this, _BidiPageTarget_page, "f");
    }
    async asPage() {
        return _Page_js__WEBPACK_IMPORTED_MODULE_2__.BidiPage.from(this.browserContext(), __classPrivateFieldGet(this, _BidiPageTarget_page, "f").mainFrame().browsingContext);
    }
    url() {
        return __classPrivateFieldGet(this, _BidiPageTarget_page, "f").url();
    }
    createCDPSession() {
        return __classPrivateFieldGet(this, _BidiPageTarget_page, "f").createCDPSession();
    }
    type() {
        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.PAGE;
    }
    browser() {
        return this.browserContext().browser();
    }
    browserContext() {
        return __classPrivateFieldGet(this, _BidiPageTarget_page, "f").browserContext();
    }
    opener() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
_BidiPageTarget_page = new WeakMap();
/**
 * @internal
 */
class BidiFrameTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    constructor(frame) {
        super();
        _BidiFrameTarget_frame.set(this, void 0);
        _BidiFrameTarget_page.set(this, void 0);
        __classPrivateFieldSet(this, _BidiFrameTarget_frame, frame, "f");
    }
    async page() {
        if (__classPrivateFieldGet(this, _BidiFrameTarget_page, "f") === undefined) {
            __classPrivateFieldSet(this, _BidiFrameTarget_page, _Page_js__WEBPACK_IMPORTED_MODULE_2__.BidiPage.from(this.browserContext(), __classPrivateFieldGet(this, _BidiFrameTarget_frame, "f").browsingContext), "f");
        }
        return __classPrivateFieldGet(this, _BidiFrameTarget_page, "f");
    }
    async asPage() {
        return _Page_js__WEBPACK_IMPORTED_MODULE_2__.BidiPage.from(this.browserContext(), __classPrivateFieldGet(this, _BidiFrameTarget_frame, "f").browsingContext);
    }
    url() {
        return __classPrivateFieldGet(this, _BidiFrameTarget_frame, "f").url();
    }
    createCDPSession() {
        return __classPrivateFieldGet(this, _BidiFrameTarget_frame, "f").createCDPSession();
    }
    type() {
        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.PAGE;
    }
    browser() {
        return this.browserContext().browser();
    }
    browserContext() {
        return __classPrivateFieldGet(this, _BidiFrameTarget_frame, "f").page().browserContext();
    }
    opener() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
_BidiFrameTarget_frame = new WeakMap(), _BidiFrameTarget_page = new WeakMap();
/**
 * @internal
 */
class BidiWorkerTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    constructor(worker) {
        super();
        _BidiWorkerTarget_worker.set(this, void 0);
        __classPrivateFieldSet(this, _BidiWorkerTarget_worker, worker, "f");
    }
    async page() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
    async asPage() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
    url() {
        return __classPrivateFieldGet(this, _BidiWorkerTarget_worker, "f").url();
    }
    createCDPSession() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
    type() {
        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.OTHER;
    }
    browser() {
        return this.browserContext().browser();
    }
    browserContext() {
        return __classPrivateFieldGet(this, _BidiWorkerTarget_worker, "f").frame.page().browserContext();
    }
    opener() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
_BidiWorkerTarget_worker = new WeakMap();


/***/ })

}]);