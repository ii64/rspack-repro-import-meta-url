"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_api_api_ts"],{

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

/***/ "./src/third_party/puppeteer/package/src/api/CDPSession.ts":
/*!*****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/CDPSession.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDPSession: () => (/* binding */ CDPSession),
/* harmony export */   CDPSessionEvent: () => (/* binding */ CDPSessionEvent)
/* harmony export */ });
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");

/**
 * Events that the CDPSession class emits.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
var CDPSessionEvent;
(function (CDPSessionEvent) {
    /** @internal */
    CDPSessionEvent.Disconnected = Symbol('CDPSession.Disconnected');
    /** @internal */
    CDPSessionEvent.Swapped = Symbol('CDPSession.Swapped');
    /**
     * Emitted when the session is ready to be configured during the auto-attach
     * process. Right after the event is handled, the session will be resumed.
     *
     * @internal
     */
    CDPSessionEvent.Ready = Symbol('CDPSession.Ready');
    CDPSessionEvent.SessionAttached = 'sessionattached';
    CDPSessionEvent.SessionDetached = 'sessiondetached';
})(CDPSessionEvent || (CDPSessionEvent = {}));
/**
 * The `CDPSession` instances are used to talk raw Chrome Devtools Protocol.
 *
 * @remarks
 *
 * Protocol methods can be called with {@link CDPSession.send} method and protocol
 * events can be subscribed to with `CDPSession.on` method.
 *
 * Useful links: {@link https://chromedevtools.github.io/devtools-protocol/ | DevTools Protocol Viewer}
 * and {@link https://github.com/aslushnikov/getting-started-with-cdp/blob/HEAD/README.md | Getting Started with DevTools Protocol}.
 *
 * @example
 *
 * ```ts
 * const client = await page.createCDPSession();
 * await client.send('Animation.enable');
 * client.on('Animation.animationCreated', () =>
 *   console.log('Animation created!')
 * );
 * const response = await client.send('Animation.getPlaybackRate');
 * console.log('playback rate is ' + response.playbackRate);
 * await client.send('Animation.setPlaybackRate', {
 *   playbackRate: response.playbackRate / 2,
 * });
 * ```
 *
 * @public
 */
class CDPSession extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
    /**
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * Parent session in terms of CDP's auto-attach mechanism.
     *
     * @internal
     */
    parentSession() {
        return undefined;
    }
}


/***/ }),

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

/***/ "./src/third_party/puppeteer/package/src/api/Environment.ts":
/*!******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/Environment.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./src/third_party/puppeteer/package/src/api/HTTPResponse.ts":
/*!*******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/HTTPResponse.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTTPResponse: () => (/* binding */ HTTPResponse)
/* harmony export */ });
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The HTTPResponse class represents responses which are received by the
 * {@link Page} class.
 *
 * @public
 */
class HTTPResponse {
    /**
     * @internal
     */
    constructor() { }
    /**
     * True if the response was successful (status in the range 200-299).
     */
    ok() {
        // TODO: document === 0 case?
        const status = this.status();
        return status === 0 || (status >= 200 && status <= 299);
    }
    /**
     * Promise which resolves to a text (utf8) representation of response body.
     */
    async text() {
        const content = await this.buffer();
        return content.toString('utf8');
    }
    /**
     * Promise which resolves to a JSON representation of response body.
     *
     * @remarks
     *
     * This method will throw if the response body is not parsable via
     * `JSON.parse`.
     */
    async json() {
        const content = await this.text();
        return JSON.parse(content);
    }
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/api/Input.ts":
/*!************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/Input.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Keyboard: () => (/* binding */ Keyboard),
/* harmony export */   Mouse: () => (/* binding */ Mouse),
/* harmony export */   MouseButton: () => (/* binding */ MouseButton),
/* harmony export */   Touchscreen: () => (/* binding */ Touchscreen)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Keyboard provides an api for managing a virtual keyboard.
 * The high level api is {@link Keyboard."type"},
 * which takes raw characters and generates proper keydown, keypress/input,
 * and keyup events on your page.
 *
 * @remarks
 * For finer control, you can use {@link Keyboard.down},
 * {@link Keyboard.up}, and {@link Keyboard.sendCharacter}
 * to manually fire events as if they were generated from a real keyboard.
 *
 * On macOS, keyboard shortcuts like `⌘ A` -\> Select All do not work.
 * See {@link https://github.com/puppeteer/puppeteer/issues/1313 | #1313}.
 *
 * @example
 * An example of holding down `Shift` in order to select and delete some text:
 *
 * ```ts
 * await page.keyboard.type('Hello World!');
 * await page.keyboard.press('ArrowLeft');
 *
 * await page.keyboard.down('Shift');
 * for (let i = 0; i < ' World'.length; i++)
 *   await page.keyboard.press('ArrowLeft');
 * await page.keyboard.up('Shift');
 *
 * await page.keyboard.press('Backspace');
 * // Result text will end up saying 'Hello!'
 * ```
 *
 * @example
 * An example of pressing `A`
 *
 * ```ts
 * await page.keyboard.down('Shift');
 * await page.keyboard.press('KeyA');
 * await page.keyboard.up('Shift');
 * ```
 *
 * @public
 */
class Keyboard {
    /**
     * @internal
     */
    constructor() { }
}
/**
 * Enum of valid mouse buttons.
 *
 * @public
 */
const MouseButton = Object.freeze({
    Left: 'left',
    Right: 'right',
    Middle: 'middle',
    Back: 'back',
    Forward: 'forward',
});
/**
 * The Mouse class operates in main-frame CSS pixels
 * relative to the top-left corner of the viewport.
 *
 * @remarks
 * Every `page` object has its own Mouse, accessible with {@link Page.mouse}.
 *
 * @example
 *
 * ```ts
 * // Using ‘page.mouse’ to trace a 100x100 square.
 * await page.mouse.move(0, 0);
 * await page.mouse.down();
 * await page.mouse.move(0, 100);
 * await page.mouse.move(100, 100);
 * await page.mouse.move(100, 0);
 * await page.mouse.move(0, 0);
 * await page.mouse.up();
 * ```
 *
 * **Note**: The mouse events trigger synthetic `MouseEvent`s.
 * This means that it does not fully replicate the functionality of what a normal user
 * would be able to do with their mouse.
 *
 * For example, dragging and selecting text is not possible using `page.mouse`.
 * Instead, you can use the {@link https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection | `DocumentOrShadowRoot.getSelection()`} functionality implemented in the platform.
 *
 * @example
 * For example, if you want to select all content between nodes:
 *
 * ```ts
 * await page.evaluate(
 *   (from, to) => {
 *     const selection = from.getRootNode().getSelection();
 *     const range = document.createRange();
 *     range.setStartBefore(from);
 *     range.setEndAfter(to);
 *     selection.removeAllRanges();
 *     selection.addRange(range);
 *   },
 *   fromJSHandle,
 *   toJSHandle
 * );
 * ```
 *
 * If you then would want to copy-paste your selection, you can use the clipboard api:
 *
 * ```ts
 * // The clipboard api does not allow you to copy, unless the tab is focused.
 * await page.bringToFront();
 * await page.evaluate(() => {
 *   // Copy the selected content to the clipboard
 *   document.execCommand('copy');
 *   // Obtain the content of the clipboard as a string
 *   return navigator.clipboard.readText();
 * });
 * ```
 *
 * **Note**: If you want access to the clipboard API,
 * you have to give it permission to do so:
 *
 * ```ts
 * await browser
 *   .defaultBrowserContext()
 *   .overridePermissions('<your origin>', [
 *     'clipboard-read',
 *     'clipboard-write',
 *   ]);
 * ```
 *
 * @public
 */
class Mouse {
    /**
     * @internal
     */
    constructor() { }
}
/**
 * The Touchscreen class exposes touchscreen events.
 * @public
 */
class Touchscreen {
    /**
     * @internal
     */
    constructor() { }
    /**
     * Dispatches a `touchstart` and `touchend` event.
     * @param x - Horizontal position of the tap.
     * @param y - Vertical position of the tap.
     */
    async tap(x, y) {
        await this.touchStart(x, y);
        await this.touchEnd();
    }
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/api/Realm.ts":
/*!************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/Realm.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Realm: () => (/* binding */ Realm)
/* harmony export */ });
/* harmony import */ var _common_WaitTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/WaitTask.js */ "./src/third_party/puppeteer/package/src/common/WaitTask.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
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
var _Realm_disposed;


/**
 * @internal
 */
class Realm {
    constructor(timeoutSettings) {
        Object.defineProperty(this, "timeoutSettings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "taskManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _common_WaitTask_js__WEBPACK_IMPORTED_MODULE_0__.TaskManager()
        });
        _Realm_disposed.set(this, false);
        this.timeoutSettings = timeoutSettings;
    }
    async waitForFunction(pageFunction, options = {}, ...args) {
        const { polling = 'raf', timeout = this.timeoutSettings.timeout(), root, signal, } = options;
        if (typeof polling === 'number' && polling < 0) {
            throw new Error('Cannot poll with non-positive interval');
        }
        const waitTask = new _common_WaitTask_js__WEBPACK_IMPORTED_MODULE_0__.WaitTask(this, {
            polling,
            root,
            timeout,
            signal,
        }, pageFunction, ...args);
        return await waitTask.result;
    }
    get disposed() {
        return __classPrivateFieldGet(this, _Realm_disposed, "f");
    }
    /** @internal */
    dispose() {
        __classPrivateFieldSet(this, _Realm_disposed, true, "f");
        this.taskManager.terminateAll(new Error('waitForFunction failed: frame got detached.'));
    }
    /** @internal */
    [(_Realm_disposed = new WeakMap(), _util_disposable_js__WEBPACK_IMPORTED_MODULE_1__.disposeSymbol)]() {
        this.dispose();
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

/***/ "./src/third_party/puppeteer/package/src/api/api.ts":
/*!**********************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/api.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Browser: () => (/* reexport safe */ _Browser_js__WEBPACK_IMPORTED_MODULE_0__.Browser),
/* harmony export */   BrowserContext: () => (/* reexport safe */ _BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__.BrowserContext),
/* harmony export */   BrowserContextEvent: () => (/* reexport safe */ _BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__.BrowserContextEvent),
/* harmony export */   BrowserEvent: () => (/* reexport safe */ _Browser_js__WEBPACK_IMPORTED_MODULE_0__.BrowserEvent),
/* harmony export */   CDPSession: () => (/* reexport safe */ _CDPSession_js__WEBPACK_IMPORTED_MODULE_2__.CDPSession),
/* harmony export */   CDPSessionEvent: () => (/* reexport safe */ _CDPSession_js__WEBPACK_IMPORTED_MODULE_2__.CDPSessionEvent),
/* harmony export */   DEFAULT_INTERCEPT_RESOLUTION_PRIORITY: () => (/* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_INTERCEPT_RESOLUTION_PRIORITY),
/* harmony export */   DelegatedLocator: () => (/* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.DelegatedLocator),
/* harmony export */   Dialog: () => (/* reexport safe */ _Dialog_js__WEBPACK_IMPORTED_MODULE_3__.Dialog),
/* harmony export */   ElementHandle: () => (/* reexport safe */ _ElementHandle_js__WEBPACK_IMPORTED_MODULE_4__.ElementHandle),
/* harmony export */   FilteredLocator: () => (/* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.FilteredLocator),
/* harmony export */   Frame: () => (/* reexport safe */ _Frame_js__WEBPACK_IMPORTED_MODULE_6__.Frame),
/* harmony export */   FrameEvent: () => (/* reexport safe */ _Frame_js__WEBPACK_IMPORTED_MODULE_6__.FrameEvent),
/* harmony export */   FunctionLocator: () => (/* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.FunctionLocator),
/* harmony export */   HTTPRequest: () => (/* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.HTTPRequest),
/* harmony export */   HTTPResponse: () => (/* reexport safe */ _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_8__.HTTPResponse),
/* harmony export */   InterceptResolutionAction: () => (/* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.InterceptResolutionAction),
/* harmony export */   JSHandle: () => (/* reexport safe */ _JSHandle_js__WEBPACK_IMPORTED_MODULE_10__.JSHandle),
/* harmony export */   Keyboard: () => (/* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_9__.Keyboard),
/* harmony export */   Locator: () => (/* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.Locator),
/* harmony export */   LocatorEvent: () => (/* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.LocatorEvent),
/* harmony export */   MappedLocator: () => (/* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.MappedLocator),
/* harmony export */   Mouse: () => (/* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_9__.Mouse),
/* harmony export */   MouseButton: () => (/* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_9__.MouseButton),
/* harmony export */   NodeLocator: () => (/* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.NodeLocator),
/* harmony export */   Page: () => (/* reexport safe */ _Page_js__WEBPACK_IMPORTED_MODULE_11__.Page),
/* harmony export */   PageEvent: () => (/* reexport safe */ _Page_js__WEBPACK_IMPORTED_MODULE_11__.PageEvent),
/* harmony export */   RETRY_DELAY: () => (/* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.RETRY_DELAY),
/* harmony export */   RaceLocator: () => (/* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.RaceLocator),
/* harmony export */   Realm: () => (/* reexport safe */ _Realm_js__WEBPACK_IMPORTED_MODULE_12__.Realm),
/* harmony export */   STATUS_TEXTS: () => (/* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.STATUS_TEXTS),
/* harmony export */   Target: () => (/* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_13__.Target),
/* harmony export */   TargetType: () => (/* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_13__.TargetType),
/* harmony export */   Touchscreen: () => (/* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_9__.Touchscreen),
/* harmony export */   WEB_PERMISSION_TO_PROTOCOL_PERMISSION: () => (/* reexport safe */ _Browser_js__WEBPACK_IMPORTED_MODULE_0__.WEB_PERMISSION_TO_PROTOCOL_PERMISSION),
/* harmony export */   WebWorker: () => (/* reexport safe */ _WebWorker_js__WEBPACK_IMPORTED_MODULE_14__.WebWorker),
/* harmony export */   handleError: () => (/* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.handleError),
/* harmony export */   headersArray: () => (/* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.headersArray),
/* harmony export */   setDefaultScreenshotOptions: () => (/* reexport safe */ _Page_js__WEBPACK_IMPORTED_MODULE_11__.setDefaultScreenshotOptions),
/* harmony export */   supportedMetrics: () => (/* reexport safe */ _Page_js__WEBPACK_IMPORTED_MODULE_11__.supportedMetrics),
/* harmony export */   throwIfDetached: () => (/* reexport safe */ _Frame_js__WEBPACK_IMPORTED_MODULE_6__.throwIfDetached)
/* harmony export */ });
/* harmony import */ var _Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Browser.js */ "./src/third_party/puppeteer/package/src/api/Browser.ts");
/* harmony import */ var _BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowserContext.js */ "./src/third_party/puppeteer/package/src/api/BrowserContext.ts");
/* harmony import */ var _CDPSession_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CDPSession.js */ "./src/third_party/puppeteer/package/src/api/CDPSession.ts");
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dialog.js */ "./src/third_party/puppeteer/package/src/api/Dialog.ts");
/* harmony import */ var _ElementHandle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ElementHandle.js */ "./src/third_party/puppeteer/package/src/api/ElementHandle.ts");
/* harmony import */ var _Environment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Environment.js */ "./src/third_party/puppeteer/package/src/api/Environment.ts");
/* harmony import */ var _Frame_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Frame.js */ "./src/third_party/puppeteer/package/src/api/Frame.ts");
/* harmony import */ var _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HTTPRequest.js */ "./src/third_party/puppeteer/package/src/api/HTTPRequest.ts");
/* harmony import */ var _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HTTPResponse.js */ "./src/third_party/puppeteer/package/src/api/HTTPResponse.ts");
/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Input.js */ "./src/third_party/puppeteer/package/src/api/Input.ts");
/* harmony import */ var _JSHandle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/src/api/JSHandle.ts");
/* harmony import */ var _Page_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Page.js */ "./src/third_party/puppeteer/package/src/api/Page.ts");
/* harmony import */ var _Realm_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Realm.js */ "./src/third_party/puppeteer/package/src/api/Realm.ts");
/* harmony import */ var _Target_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Target.js */ "./src/third_party/puppeteer/package/src/api/Target.ts");
/* harmony import */ var _WebWorker_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./WebWorker.js */ "./src/third_party/puppeteer/package/src/api/WebWorker.ts");
/* harmony import */ var _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./locators/locators.js */ "./src/third_party/puppeteer/package/src/api/locators/locators.ts");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */


















/***/ })

}]);