"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_cdp_WebWorker_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/CDPSession.js":
/*!*******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/CDPSession.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CDPSession = exports.CDPSessionEvent = void 0;
const EventEmitter_js_1 = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/EventEmitter.js");
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
})(CDPSessionEvent || (exports.CDPSessionEvent = CDPSessionEvent = {}));
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
class CDPSession extends EventEmitter_js_1.EventEmitter {
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
exports.CDPSession = CDPSession;
//# sourceMappingURL=CDPSession.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/Target.js":
/*!***************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/Target.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Target = exports.TargetType = void 0;
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
})(TargetType || (exports.TargetType = TargetType = {}));
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
exports.Target = Target;
//# sourceMappingURL=Target.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/WebWorker.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/WebWorker.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebWorker = void 0;
const Errors_js_1 = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js");
const EventEmitter_js_1 = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/EventEmitter.js");
const TimeoutSettings_js_1 = __webpack_require__(/*! ../common/TimeoutSettings.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/TimeoutSettings.js");
const util_js_1 = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/util.js");
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
class WebWorker extends EventEmitter_js_1.EventEmitter {
    /**
     * @internal
     */
    timeoutSettings = new TimeoutSettings_js_1.TimeoutSettings();
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
        func = (0, util_js_1.withSourcePuppeteerURLIfNone)(this.evaluate.name, func);
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
        func = (0, util_js_1.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, func);
        return await this.mainRealm().evaluateHandle(func, ...args);
    }
    async close() {
        throw new Errors_js_1.UnsupportedOperation('WebWorker.close() is not supported');
    }
}
exports.WebWorker = WebWorker;
//# sourceMappingURL=WebWorker.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/WebWorker.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/WebWorker.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CdpWebWorker = void 0;
const CDPSession_js_1 = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/CDPSession.js");
const Target_js_1 = __webpack_require__(/*! ../api/Target.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/Target.js");
const WebWorker_js_1 = __webpack_require__(/*! ../api/WebWorker.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/WebWorker.js");
const TimeoutSettings_js_1 = __webpack_require__(/*! ../common/TimeoutSettings.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/TimeoutSettings.js");
const util_js_1 = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/util.js");
const ExecutionContext_js_1 = __webpack_require__(/*! ./ExecutionContext.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/ExecutionContext.js");
const IsolatedWorld_js_1 = __webpack_require__(/*! ./IsolatedWorld.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/IsolatedWorld.js");
const JSHandle_js_1 = __webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/JSHandle.js");
/**
 * @internal
 */
class CdpWebWorker extends WebWorker_js_1.WebWorker {
    #world;
    #client;
    #id;
    #targetType;
    constructor(client, url, targetId, targetType, consoleAPICalled, exceptionThrown) {
        super(url);
        this.#id = targetId;
        this.#client = client;
        this.#targetType = targetType;
        this.#world = new IsolatedWorld_js_1.IsolatedWorld(this, new TimeoutSettings_js_1.TimeoutSettings());
        this.#client.once('Runtime.executionContextCreated', async (event) => {
            this.#world.setContext(new ExecutionContext_js_1.ExecutionContext(client, event.context, this.#world));
        });
        this.#world.emitter.on('consoleapicalled', async (event) => {
            try {
                return consoleAPICalled(event.type, event.args.map((object) => {
                    return new JSHandle_js_1.CdpJSHandle(this.#world, object);
                }), event.stackTrace);
            }
            catch (err) {
                (0, util_js_1.debugError)(err);
            }
        });
        this.#client.on('Runtime.exceptionThrown', exceptionThrown);
        this.#client.once(CDPSession_js_1.CDPSessionEvent.Disconnected, () => {
            this.#world.dispose();
        });
        // This might fail if the target is closed before we receive all execution contexts.
        this.#client.send('Runtime.enable').catch(util_js_1.debugError);
    }
    mainRealm() {
        return this.#world;
    }
    get client() {
        return this.#client;
    }
    async close() {
        switch (this.#targetType) {
            case Target_js_1.TargetType.SERVICE_WORKER:
            case Target_js_1.TargetType.SHARED_WORKER: {
                // For service and shared workers we need to close the target and detach to allow
                // the worker to stop.
                await this.client.connection()?.send('Target.closeTarget', {
                    targetId: this.#id,
                });
                await this.client.connection()?.send('Target.detachFromTarget', {
                    sessionId: this.client.id(),
                });
                break;
            }
            default:
                await this.evaluate(() => {
                    self.close();
                });
        }
    }
}
exports.CdpWebWorker = CdpWebWorker;
//# sourceMappingURL=WebWorker.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/TimeoutSettings.js":
/*!***************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/TimeoutSettings.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimeoutSettings = void 0;
const DEFAULT_TIMEOUT = 30000;
/**
 * @internal
 */
class TimeoutSettings {
    #defaultTimeout;
    #defaultNavigationTimeout;
    constructor() {
        this.#defaultTimeout = null;
        this.#defaultNavigationTimeout = null;
    }
    setDefaultTimeout(timeout) {
        this.#defaultTimeout = timeout;
    }
    setDefaultNavigationTimeout(timeout) {
        this.#defaultNavigationTimeout = timeout;
    }
    navigationTimeout() {
        if (this.#defaultNavigationTimeout !== null) {
            return this.#defaultNavigationTimeout;
        }
        if (this.#defaultTimeout !== null) {
            return this.#defaultTimeout;
        }
        return DEFAULT_TIMEOUT;
    }
    timeout() {
        if (this.#defaultTimeout !== null) {
            return this.#defaultTimeout;
        }
        return DEFAULT_TIMEOUT;
    }
}
exports.TimeoutSettings = TimeoutSettings;
//# sourceMappingURL=TimeoutSettings.js.map

/***/ })

}]);