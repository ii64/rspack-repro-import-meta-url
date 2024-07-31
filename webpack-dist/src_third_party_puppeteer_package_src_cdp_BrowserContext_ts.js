"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_BrowserContext_ts"],{

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

/***/ "./src/third_party/puppeteer/package/src/cdp/BrowserContext.ts":
/*!*********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/BrowserContext.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpBrowserContext: () => (/* binding */ CdpBrowserContext)
/* harmony export */ });
/* harmony import */ var _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Browser.js */ "./src/third_party/puppeteer/package/src/api/Browser.ts");
/* harmony import */ var _api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/BrowserContext.js */ "./src/third_party/puppeteer/package/src/api/BrowserContext.ts");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
var _CdpBrowserContext_connection, _CdpBrowserContext_browser, _CdpBrowserContext_id;



/**
 * @internal
 */
class CdpBrowserContext extends _api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__.BrowserContext {
    constructor(connection, browser, contextId) {
        super();
        _CdpBrowserContext_connection.set(this, void 0);
        _CdpBrowserContext_browser.set(this, void 0);
        _CdpBrowserContext_id.set(this, void 0);
        __classPrivateFieldSet(this, _CdpBrowserContext_connection, connection, "f");
        __classPrivateFieldSet(this, _CdpBrowserContext_browser, browser, "f");
        __classPrivateFieldSet(this, _CdpBrowserContext_id, contextId, "f");
    }
    get id() {
        return __classPrivateFieldGet(this, _CdpBrowserContext_id, "f");
    }
    targets() {
        return __classPrivateFieldGet(this, _CdpBrowserContext_browser, "f").targets().filter(target => {
            return target.browserContext() === this;
        });
    }
    async pages() {
        const pages = await Promise.all(this.targets()
            .filter(target => {
            return (target.type() === 'page' ||
                (target.type() === 'other' &&
                    __classPrivateFieldGet(this, _CdpBrowserContext_browser, "f")._getIsPageTargetCallback()?.(target)));
        })
            .map(target => {
            return target.page();
        }));
        return pages.filter((page) => {
            return !!page;
        });
    }
    isIncognito() {
        return !!__classPrivateFieldGet(this, _CdpBrowserContext_id, "f");
    }
    async overridePermissions(origin, permissions) {
        const protocolPermissions = permissions.map(permission => {
            const protocolPermission = _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__.WEB_PERMISSION_TO_PROTOCOL_PERMISSION.get(permission);
            if (!protocolPermission) {
                throw new Error('Unknown permission: ' + permission);
            }
            return protocolPermission;
        });
        await __classPrivateFieldGet(this, _CdpBrowserContext_connection, "f").send('Browser.grantPermissions', {
            origin,
            browserContextId: __classPrivateFieldGet(this, _CdpBrowserContext_id, "f") || undefined,
            permissions: protocolPermissions,
        });
    }
    async clearPermissionOverrides() {
        await __classPrivateFieldGet(this, _CdpBrowserContext_connection, "f").send('Browser.resetPermissions', {
            browserContextId: __classPrivateFieldGet(this, _CdpBrowserContext_id, "f") || undefined,
        });
    }
    async newPage() {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
            const _guard = __addDisposableResource(env_1, await this.waitForScreenshotOperations(), false);
            return await __classPrivateFieldGet(this, _CdpBrowserContext_browser, "f")._createPageInContext(__classPrivateFieldGet(this, _CdpBrowserContext_id, "f"));
        }
        catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        }
        finally {
            __disposeResources(env_1);
        }
    }
    browser() {
        return __classPrivateFieldGet(this, _CdpBrowserContext_browser, "f");
    }
    async close() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(__classPrivateFieldGet(this, _CdpBrowserContext_id, "f"), 'Non-incognito profiles cannot be closed!');
        await __classPrivateFieldGet(this, _CdpBrowserContext_browser, "f")._disposeContext(__classPrivateFieldGet(this, _CdpBrowserContext_id, "f"));
    }
}
_CdpBrowserContext_connection = new WeakMap(), _CdpBrowserContext_browser = new WeakMap(), _CdpBrowserContext_id = new WeakMap();


/***/ })

}]);