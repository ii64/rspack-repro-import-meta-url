"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_BrowserContext_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Browser.js":
/*!************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/api/Browser.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Browser: () => (/* binding */ Browser),
/* harmony export */   WEB_PERMISSION_TO_PROTOCOL_PERMISSION: () => (/* binding */ WEB_PERMISSION_TO_PROTOCOL_PERMISSION)
/* harmony export */ });
/* harmony import */ var _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./third_party/puppeteer/package/lib/esm/third_party/rxjs/rxjs.js");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
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
        return await (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.merge)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.fromEmitterEvent)(this, "targetcreated" /* BrowserEvent.TargetCreated */), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.fromEmitterEvent)(this, "targetchanged" /* BrowserEvent.TargetChanged */), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(this.targets())).pipe((0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.filterAsync)(predicate), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.timeout)(ms))));
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
//# sourceMappingURL=Browser.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/api/BrowserContext.js":
/*!*******************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/api/BrowserContext.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserContext: () => (/* binding */ BrowserContext)
/* harmony export */ });
/* harmony import */ var _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./third_party/puppeteer/package/lib/esm/third_party/rxjs/rxjs.js");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */ var _util_Mutex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Mutex.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Mutex.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */





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
    }
    /**
     * If defined, indicates an ongoing screenshot opereation.
     */
    #pageScreenshotMutex;
    #screenshotOperationsCount = 0;
    /**
     * @internal
     */
    startScreenshot() {
        const mutex = this.#pageScreenshotMutex || new _util_Mutex_js__WEBPACK_IMPORTED_MODULE_4__.Mutex();
        this.#pageScreenshotMutex = mutex;
        this.#screenshotOperationsCount++;
        return mutex.acquire(() => {
            this.#screenshotOperationsCount--;
            if (this.#screenshotOperationsCount === 0) {
                // Remove the mutex to indicate no ongoing screenshot operation.
                this.#pageScreenshotMutex = undefined;
            }
        });
    }
    /**
     * @internal
     */
    waitForScreenshotOperations() {
        return this.#pageScreenshotMutex?.acquire();
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
        return await (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.merge)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.fromEmitterEvent)(this, "targetcreated" /* BrowserContextEvent.TargetCreated */), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.fromEmitterEvent)(this, "targetchanged" /* BrowserContextEvent.TargetChanged */), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(this.targets())).pipe((0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.filterAsync)(predicate), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.timeout)(ms))));
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
    [_util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.disposeSymbol]() {
        return void this.close().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
    }
    /** @internal */
    [_util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.asyncDisposeSymbol]() {
        return this.close();
    }
}
//# sourceMappingURL=BrowserContext.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Target.js":
/*!***********************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/api/Target.js ***!
  \***********************************************************************/
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
//# sourceMappingURL=Target.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/BrowserContext.js":
/*!********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/bidi/BrowserContext.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiBrowserContext: () => (/* binding */ BidiBrowserContext)
/* harmony export */ });
/* harmony import */ var _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Browser.js");
/* harmony import */ var _api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/BrowserContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/BrowserContext.js");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */ var _core_UserContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/UserContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/UserContext.js");
/* harmony import */ var _Page_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Page.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Page.js");
/* harmony import */ var _Target_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Target.js");
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
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
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









/**
 * @internal
 */
let BidiBrowserContext = (() => {
    let _classSuper = _api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__.BrowserContext;
    let _trustedEmitter_decorators;
    let _trustedEmitter_initializers = [];
    let _trustedEmitter_extraInitializers = [];
    return class BidiBrowserContext extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _trustedEmitter_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.bubble)()];
            __esDecorate(this, null, _trustedEmitter_decorators, { kind: "accessor", name: "trustedEmitter", static: false, private: false, access: { has: obj => "trustedEmitter" in obj, get: obj => obj.trustedEmitter, set: (obj, value) => { obj.trustedEmitter = value; } }, metadata: _metadata }, _trustedEmitter_initializers, _trustedEmitter_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(browser, userContext, options) {
            const context = new BidiBrowserContext(browser, userContext, options);
            context.#initialize();
            return context;
        }
        #trustedEmitter_accessor_storage = __runInitializers(this, _trustedEmitter_initializers, new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__.EventEmitter());
        get trustedEmitter() { return this.#trustedEmitter_accessor_storage; }
        set trustedEmitter(value) { this.#trustedEmitter_accessor_storage = value; }
        #browser = __runInitializers(this, _trustedEmitter_extraInitializers);
        #defaultViewport;
        // This is public because of cookies.
        userContext;
        #pages = new WeakMap();
        #targets = new Map();
        #overrides = [];
        constructor(browser, userContext, options) {
            super();
            this.#browser = browser;
            this.userContext = userContext;
            this.#defaultViewport = options.defaultViewport;
        }
        #initialize() {
            // Create targets for existing browsing contexts.
            for (const browsingContext of this.userContext.browsingContexts) {
                this.#createPage(browsingContext);
            }
            this.userContext.on('browsingcontext', ({ browsingContext }) => {
                const page = this.#createPage(browsingContext);
                // We need to wait for the DOMContentLoaded as the
                // browsingContext still may be navigating from the about:blank
                browsingContext.once('DOMContentLoaded', () => {
                    if (browsingContext.originalOpener) {
                        for (const context of this.userContext.browsingContexts) {
                            if (context.id === browsingContext.originalOpener) {
                                this.#pages
                                    .get(context)
                                    .trustedEmitter.emit("popup" /* PageEvent.Popup */, page);
                            }
                        }
                    }
                });
            });
            this.userContext.on('closed', () => {
                this.trustedEmitter.removeAllListeners();
            });
        }
        #createPage(browsingContext) {
            const page = _Page_js__WEBPACK_IMPORTED_MODULE_6__.BidiPage.from(this, browsingContext);
            this.#pages.set(browsingContext, page);
            page.trustedEmitter.on("close" /* PageEvent.Close */, () => {
                this.#pages.delete(browsingContext);
            });
            // -- Target stuff starts here --
            const pageTarget = new _Target_js__WEBPACK_IMPORTED_MODULE_7__.BidiPageTarget(page);
            const pageTargets = new Map();
            this.#targets.set(page, [pageTarget, pageTargets]);
            page.trustedEmitter.on("frameattached" /* PageEvent.FrameAttached */, frame => {
                const bidiFrame = frame;
                const target = new _Target_js__WEBPACK_IMPORTED_MODULE_7__.BidiFrameTarget(bidiFrame);
                pageTargets.set(bidiFrame, target);
                this.trustedEmitter.emit("targetcreated" /* BrowserContextEvent.TargetCreated */, target);
            });
            page.trustedEmitter.on("framenavigated" /* PageEvent.FrameNavigated */, frame => {
                const bidiFrame = frame;
                const target = pageTargets.get(bidiFrame);
                // If there is no target, then this is the page's frame.
                if (target === undefined) {
                    this.trustedEmitter.emit("targetchanged" /* BrowserContextEvent.TargetChanged */, pageTarget);
                }
                else {
                    this.trustedEmitter.emit("targetchanged" /* BrowserContextEvent.TargetChanged */, target);
                }
            });
            page.trustedEmitter.on("framedetached" /* PageEvent.FrameDetached */, frame => {
                const bidiFrame = frame;
                const target = pageTargets.get(bidiFrame);
                if (target === undefined) {
                    return;
                }
                pageTargets.delete(bidiFrame);
                this.trustedEmitter.emit("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */, target);
            });
            page.trustedEmitter.on("workercreated" /* PageEvent.WorkerCreated */, worker => {
                const bidiWorker = worker;
                const target = new _Target_js__WEBPACK_IMPORTED_MODULE_7__.BidiWorkerTarget(bidiWorker);
                pageTargets.set(bidiWorker, target);
                this.trustedEmitter.emit("targetcreated" /* BrowserContextEvent.TargetCreated */, target);
            });
            page.trustedEmitter.on("workerdestroyed" /* PageEvent.WorkerDestroyed */, worker => {
                const bidiWorker = worker;
                const target = pageTargets.get(bidiWorker);
                if (target === undefined) {
                    return;
                }
                pageTargets.delete(worker);
                this.trustedEmitter.emit("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */, target);
            });
            page.trustedEmitter.on("close" /* PageEvent.Close */, () => {
                this.#targets.delete(page);
                this.trustedEmitter.emit("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */, pageTarget);
            });
            this.trustedEmitter.emit("targetcreated" /* BrowserContextEvent.TargetCreated */, pageTarget);
            // -- Target stuff ends here --
            return page;
        }
        targets() {
            return [...this.#targets.values()].flatMap(([target, frames]) => {
                return [target, ...frames.values()];
            });
        }
        async newPage() {
            const env_1 = { stack: [], error: void 0, hasError: false };
            try {
                const _guard = __addDisposableResource(env_1, await this.waitForScreenshotOperations(), false);
                const context = await this.userContext.createBrowsingContext("tab" /* Bidi.BrowsingContext.CreateType.Tab */);
                const page = this.#pages.get(context);
                if (!page) {
                    throw new Error('Page is not found');
                }
                if (this.#defaultViewport) {
                    try {
                        await page.setViewport(this.#defaultViewport);
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
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError)(error);
            }
            this.#targets.clear();
        }
        browser() {
            return this.#browser;
        }
        async pages() {
            return [...this.userContext.browsingContexts].map(context => {
                return this.#pages.get(context);
            });
        }
        isIncognito() {
            return this.userContext.id !== _core_UserContext_js__WEBPACK_IMPORTED_MODULE_5__.UserContext.DEFAULT;
        }
        async overridePermissions(origin, permissions) {
            const permissionsSet = new Set(permissions.map(permission => {
                const protocolPermission = _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__.WEB_PERMISSION_TO_PROTOCOL_PERMISSION.get(permission);
                if (!protocolPermission) {
                    throw new Error('Unknown permission: ' + permission);
                }
                return permission;
            }));
            await Promise.all(Array.from(_api_Browser_js__WEBPACK_IMPORTED_MODULE_0__.WEB_PERMISSION_TO_PROTOCOL_PERMISSION.keys()).map(permission => {
                const result = this.userContext.setPermissions(origin, {
                    name: permission,
                }, permissionsSet.has(permission)
                    ? "granted" /* Bidi.Permissions.PermissionState.Granted */
                    : "denied" /* Bidi.Permissions.PermissionState.Denied */);
                this.#overrides.push({ origin, permission });
                // TODO: some permissions are outdated and setting them to denied does
                // not work.
                if (!permissionsSet.has(permission)) {
                    return result.catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
                }
                return result;
            }));
        }
        async clearPermissionOverrides() {
            const promises = this.#overrides.map(({ permission, origin }) => {
                return this.userContext
                    .setPermissions(origin, {
                    name: permission,
                }, "prompt" /* Bidi.Permissions.PermissionState.Prompt */)
                    .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
            });
            this.#overrides = [];
            await Promise.all(promises);
        }
        get id() {
            if (this.userContext.id === _core_UserContext_js__WEBPACK_IMPORTED_MODULE_5__.UserContext.DEFAULT) {
                return undefined;
            }
            return this.userContext.id;
        }
    };
})();

//# sourceMappingURL=BrowserContext.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Target.js":
/*!************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Target.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiBrowserTarget: () => (/* binding */ BidiBrowserTarget),
/* harmony export */   BidiFrameTarget: () => (/* binding */ BidiFrameTarget),
/* harmony export */   BidiPageTarget: () => (/* binding */ BidiPageTarget),
/* harmony export */   BidiWorkerTarget: () => (/* binding */ BidiWorkerTarget)
/* harmony export */ });
/* harmony import */ var _api_Target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Target.js");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _Page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Page.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/**
 * @internal
 */
class BidiBrowserTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    #browser;
    constructor(browser) {
        super();
        this.#browser = browser;
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
        return this.#browser;
    }
    browserContext() {
        return this.#browser.defaultBrowserContext();
    }
    opener() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
/**
 * @internal
 */
class BidiPageTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    #page;
    constructor(page) {
        super();
        this.#page = page;
    }
    async page() {
        return this.#page;
    }
    async asPage() {
        return _Page_js__WEBPACK_IMPORTED_MODULE_2__.BidiPage.from(this.browserContext(), this.#page.mainFrame().browsingContext);
    }
    url() {
        return this.#page.url();
    }
    createCDPSession() {
        return this.#page.createCDPSession();
    }
    type() {
        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.PAGE;
    }
    browser() {
        return this.browserContext().browser();
    }
    browserContext() {
        return this.#page.browserContext();
    }
    opener() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
/**
 * @internal
 */
class BidiFrameTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    #frame;
    #page;
    constructor(frame) {
        super();
        this.#frame = frame;
    }
    async page() {
        if (this.#page === undefined) {
            this.#page = _Page_js__WEBPACK_IMPORTED_MODULE_2__.BidiPage.from(this.browserContext(), this.#frame.browsingContext);
        }
        return this.#page;
    }
    async asPage() {
        return _Page_js__WEBPACK_IMPORTED_MODULE_2__.BidiPage.from(this.browserContext(), this.#frame.browsingContext);
    }
    url() {
        return this.#frame.url();
    }
    createCDPSession() {
        return this.#frame.createCDPSession();
    }
    type() {
        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.PAGE;
    }
    browser() {
        return this.browserContext().browser();
    }
    browserContext() {
        return this.#frame.page().browserContext();
    }
    opener() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
/**
 * @internal
 */
class BidiWorkerTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    #worker;
    constructor(worker) {
        super();
        this.#worker = worker;
    }
    async page() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
    async asPage() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
    url() {
        return this.#worker.url();
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
        return this.#worker.frame.page().browserContext();
    }
    opener() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
//# sourceMappingURL=Target.js.map

/***/ })

}]);