"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_api_BrowserContext_js"],{

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

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js":
/*!**************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Creates and returns a deferred object along with the resolve/reject functions.
 *
 * If the deferred has not been resolved/rejected within the `timeout` period,
 * the deferred gets resolves with a timeout error. `timeout` has to be greater than 0 or
 * it is ignored.
 *
 * @internal
 */
class Deferred {
    static create(opts) {
        return new Deferred(opts);
    }
    static async race(awaitables) {
        const deferredWithTimeout = new Set();
        try {
            const promises = awaitables.map(value => {
                if (value instanceof Deferred) {
                    if (value.#timeoutId) {
                        deferredWithTimeout.add(value);
                    }
                    return value.valueOrThrow();
                }
                return value;
            });
            // eslint-disable-next-line no-restricted-syntax
            return await Promise.race(promises);
        }
        finally {
            for (const deferred of deferredWithTimeout) {
                // We need to stop the timeout else
                // Node.JS will keep running the event loop till the
                // timer executes
                deferred.reject(new Error('Timeout cleared'));
            }
        }
    }
    #isResolved = false;
    #isRejected = false;
    #value;
    // SAFETY: This is ensured by #taskPromise.
    #resolve;
    #taskPromise = new Promise(resolve => {
        this.#resolve = resolve;
    });
    #timeoutId;
    #timeoutError;
    constructor(opts) {
        if (opts && opts.timeout > 0) {
            this.#timeoutError = new _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.TimeoutError(opts.message);
            this.#timeoutId = setTimeout(() => {
                this.reject(this.#timeoutError);
            }, opts.timeout);
        }
    }
    #finish(value) {
        clearTimeout(this.#timeoutId);
        this.#value = value;
        this.#resolve();
    }
    resolve(value) {
        if (this.#isRejected || this.#isResolved) {
            return;
        }
        this.#isResolved = true;
        this.#finish(value);
    }
    reject(error) {
        if (this.#isRejected || this.#isResolved) {
            return;
        }
        this.#isRejected = true;
        this.#finish(error);
    }
    resolved() {
        return this.#isResolved;
    }
    finished() {
        return this.#isResolved || this.#isRejected;
    }
    value() {
        return this.#value;
    }
    #promise;
    valueOrThrow() {
        if (!this.#promise) {
            this.#promise = (async () => {
                await this.#taskPromise;
                if (this.#isRejected) {
                    throw this.#value;
                }
                return this.#value;
            })();
        }
        return this.#promise;
    }
}
//# sourceMappingURL=Deferred.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Mutex.js":
/*!***********************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/util/Mutex.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mutex: () => (/* binding */ Mutex)
/* harmony export */ });
/* harmony import */ var _Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */ var _disposable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * @internal
 */
class Mutex {
    static Guard = class Guard {
        #mutex;
        #onRelease;
        constructor(mutex, onRelease) {
            this.#mutex = mutex;
            this.#onRelease = onRelease;
        }
        [_disposable_js__WEBPACK_IMPORTED_MODULE_1__.disposeSymbol]() {
            this.#onRelease?.();
            return this.#mutex.release();
        }
    };
    #locked = false;
    #acquirers = [];
    // This is FIFO.
    async acquire(onRelease) {
        if (!this.#locked) {
            this.#locked = true;
            return new Mutex.Guard(this);
        }
        const deferred = _Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred.create();
        this.#acquirers.push(deferred.resolve.bind(deferred));
        await deferred.valueOrThrow();
        return new Mutex.Guard(this, onRelease);
    }
    release() {
        const resolve = this.#acquirers.shift();
        if (!resolve) {
            this.#locked = false;
            return;
        }
        resolve();
    }
}
//# sourceMappingURL=Mutex.js.map

/***/ })

}]);