"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_api_HTTPResponse_js-src_third_party_puppe-754c92"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/HTTPResponse.js":
/*!*********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/HTTPResponse.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HTTPResponse = void 0;
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
exports.HTTPResponse = HTTPResponse;
//# sourceMappingURL=HTTPResponse.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/Realm.js":
/*!**************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/Realm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Realm = void 0;
const WaitTask_js_1 = __webpack_require__(/*! ../common/WaitTask.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/WaitTask.js");
const disposable_js_1 = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/disposable.js");
/**
 * @internal
 */
class Realm {
    timeoutSettings;
    taskManager = new WaitTask_js_1.TaskManager();
    constructor(timeoutSettings) {
        this.timeoutSettings = timeoutSettings;
    }
    async waitForFunction(pageFunction, options = {}, ...args) {
        const { polling = 'raf', timeout = this.timeoutSettings.timeout(), root, signal, } = options;
        if (typeof polling === 'number' && polling < 0) {
            throw new Error('Cannot poll with non-positive interval');
        }
        const waitTask = new WaitTask_js_1.WaitTask(this, {
            polling,
            root,
            timeout,
            signal,
        }, pageFunction, ...args);
        return await waitTask.result;
    }
    get disposed() {
        return this.#disposed;
    }
    #disposed = false;
    /** @internal */
    dispose() {
        this.#disposed = true;
        this.taskManager.terminateAll(new Error('waitForFunction failed: frame got detached.'));
    }
    /** @internal */
    [disposable_js_1.disposeSymbol]() {
        this.dispose();
    }
}
exports.Realm = Realm;
//# sourceMappingURL=Realm.js.map

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

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/BrowserConnector.js":
/*!**************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/BrowserConnector.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._connectToBiDiBrowser = void 0;
const Connection_js_1 = __webpack_require__(/*! ../cdp/Connection.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Connection.js");
const Errors_js_1 = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js");
const util_js_1 = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/util.js");
/**
 * Users should never call this directly; it's called when calling `puppeteer.connect`
 * with `protocol: 'webDriverBiDi'`. This method attaches Puppeteer to an existing browser
 * instance. First it tries to connect to the browser using pure BiDi. If the protocol is
 * not supported, connects to the browser using BiDi over CDP.
 *
 * @internal
 */
async function _connectToBiDiBrowser(connectionTransport, url, options) {
    const { ignoreHTTPSErrors = false, defaultViewport = util_js_1.DEFAULT_VIEWPORT } = options;
    const { bidiConnection, cdpConnection, closeCallback } = await getBiDiConnection(connectionTransport, url, options);
    const BiDi = await Promise.resolve().then(() => __importStar(__webpack_require__(/* webpackIgnore: true */ /*! ./bidi.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/bidi.js")));
    const bidiBrowser = await BiDi.BidiBrowser.create({
        connection: bidiConnection,
        cdpConnection,
        closeCallback,
        process: undefined,
        defaultViewport: defaultViewport,
        ignoreHTTPSErrors: ignoreHTTPSErrors,
    });
    return bidiBrowser;
}
exports._connectToBiDiBrowser = _connectToBiDiBrowser;
/**
 * Returns a BiDiConnection established to the endpoint specified by the options and a
 * callback closing the browser. Callback depends on whether the connection is pure BiDi
 * or BiDi over CDP.
 * The method tries to connect to the browser using pure BiDi protocol, and falls back
 * to BiDi over CDP.
 */
async function getBiDiConnection(connectionTransport, url, options) {
    const BiDi = await Promise.resolve().then(() => __importStar(__webpack_require__(/* webpackIgnore: true */ /*! ./bidi.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/bidi.js")));
    const { ignoreHTTPSErrors = false, slowMo = 0, protocolTimeout } = options;
    // Try pure BiDi first.
    const pureBidiConnection = new BiDi.BidiConnection(url, connectionTransport, slowMo, protocolTimeout);
    try {
        const result = await pureBidiConnection.send('session.status', {});
        if ('type' in result && result.type === 'success') {
            // The `browserWSEndpoint` points to an endpoint supporting pure WebDriver BiDi.
            return {
                bidiConnection: pureBidiConnection,
                closeCallback: async () => {
                    await pureBidiConnection.send('browser.close', {}).catch(util_js_1.debugError);
                },
            };
        }
    }
    catch (e) {
        if (!(e instanceof Errors_js_1.ProtocolError)) {
            // Unexpected exception not related to BiDi / CDP. Rethrow.
            throw e;
        }
    }
    // Unbind the connection to avoid memory leaks.
    pureBidiConnection.unbind();
    // Fall back to CDP over BiDi reusing the WS connection.
    const cdpConnection = new Connection_js_1.Connection(url, connectionTransport, slowMo, protocolTimeout);
    const version = await cdpConnection.send('Browser.getVersion');
    if (version.product.toLowerCase().includes('firefox')) {
        throw new Errors_js_1.UnsupportedOperation('Firefox is not supported in BiDi over CDP mode.');
    }
    const bidiOverCdpConnection = await BiDi.connectBidiOverCdp(cdpConnection, {
        acceptInsecureCerts: ignoreHTTPSErrors,
    });
    return {
        cdpConnection,
        bidiConnection: bidiOverCdpConnection,
        closeCallback: async () => {
            // In case of BiDi over CDP, we need to close browser via CDP.
            await cdpConnection.send('Browser.close').catch(util_js_1.debugError);
        },
    };
}
//# sourceMappingURL=BrowserConnector.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/bidi.js":
/*!**************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/bidi.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./BidiOverCdp.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/BidiOverCdp.js"), exports);
__exportStar(__webpack_require__(/*! ./Browser.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/Browser.js"), exports);
__exportStar(__webpack_require__(/*! ./BrowserContext.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/BrowserContext.js"), exports);
__exportStar(__webpack_require__(/*! ./Connection.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/Connection.js"), exports);
__exportStar(__webpack_require__(/*! ./ElementHandle.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/ElementHandle.js"), exports);
__exportStar(__webpack_require__(/*! ./Frame.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/Frame.js"), exports);
__exportStar(__webpack_require__(/*! ./HTTPRequest.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/HTTPRequest.js"), exports);
__exportStar(__webpack_require__(/*! ./HTTPResponse.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/HTTPResponse.js"), exports);
__exportStar(__webpack_require__(/*! ./Input.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/Input.js"), exports);
__exportStar(__webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/JSHandle.js"), exports);
__exportStar(__webpack_require__(/*! ./Page.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/Page.js"), exports);
__exportStar(__webpack_require__(/*! ./Realm.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/Realm.js"), exports);
//# sourceMappingURL=bidi.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Tracing.js":
/*!****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Tracing.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tracing = void 0;
const util_js_1 = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/util.js");
const assert_js_1 = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js");
const Deferred_js_1 = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Deferred.js");
const ErrorLike_js_1 = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/ErrorLike.js");
/**
 * The Tracing class exposes the tracing audit interface.
 * @remarks
 * You can use `tracing.start` and `tracing.stop` to create a trace file
 * which can be opened in Chrome DevTools or {@link https://chromedevtools.github.io/timeline-viewer/ | timeline viewer}.
 *
 * @example
 *
 * ```ts
 * await page.tracing.start({path: 'trace.json'});
 * await page.goto('https://www.google.com');
 * await page.tracing.stop();
 * ```
 *
 * @public
 */
class Tracing {
    #client;
    #recording = false;
    #path;
    /**
     * @internal
     */
    constructor(client) {
        this.#client = client;
    }
    /**
     * @internal
     */
    updateClient(client) {
        this.#client = client;
    }
    /**
     * Starts a trace for the current page.
     * @remarks
     * Only one trace can be active at a time per browser.
     *
     * @param options - Optional `TracingOptions`.
     */
    async start(options = {}) {
        (0, assert_js_1.assert)(!this.#recording, 'Cannot start recording trace while already recording trace.');
        const defaultCategories = [
            '-*',
            'devtools.timeline',
            'v8.execute',
            'disabled-by-default-devtools.timeline',
            'disabled-by-default-devtools.timeline.frame',
            'toplevel',
            'blink.console',
            'blink.user_timing',
            'latencyInfo',
            'disabled-by-default-devtools.timeline.stack',
            'disabled-by-default-v8.cpu_profiler',
        ];
        const { path, screenshots = false, categories = defaultCategories } = options;
        if (screenshots) {
            categories.push('disabled-by-default-devtools.screenshot');
        }
        const excludedCategories = categories
            .filter(cat => {
            return cat.startsWith('-');
        })
            .map(cat => {
            return cat.slice(1);
        });
        const includedCategories = categories.filter(cat => {
            return !cat.startsWith('-');
        });
        this.#path = path;
        this.#recording = true;
        await this.#client.send('Tracing.start', {
            transferMode: 'ReturnAsStream',
            traceConfig: {
                excludedCategories,
                includedCategories,
            },
        });
    }
    /**
     * Stops a trace started with the `start` method.
     * @returns Promise which resolves to buffer with trace data.
     */
    async stop() {
        const contentDeferred = Deferred_js_1.Deferred.create();
        this.#client.once('Tracing.tracingComplete', async (event) => {
            try {
                (0, assert_js_1.assert)(event.stream, 'Missing "stream"');
                const readable = await (0, util_js_1.getReadableFromProtocolStream)(this.#client, event.stream);
                const buffer = await (0, util_js_1.getReadableAsBuffer)(readable, this.#path);
                contentDeferred.resolve(buffer ?? undefined);
            }
            catch (error) {
                if ((0, ErrorLike_js_1.isErrorLike)(error)) {
                    contentDeferred.reject(error);
                }
                else {
                    contentDeferred.reject(new Error(`Unknown error: ${error}`));
                }
            }
        });
        await this.#client.send('Tracing.end');
        this.#recording = false;
        return await contentDeferred.valueOrThrow();
    }
}
exports.Tracing = Tracing;
//# sourceMappingURL=Tracing.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/SecurityDetails.js":
/*!***************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/SecurityDetails.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SecurityDetails = void 0;
/**
 * The SecurityDetails class represents the security details of a
 * response that was received over a secure connection.
 *
 * @public
 */
class SecurityDetails {
    #subjectName;
    #issuer;
    #validFrom;
    #validTo;
    #protocol;
    #sanList;
    /**
     * @internal
     */
    constructor(securityPayload) {
        this.#subjectName = securityPayload.subjectName;
        this.#issuer = securityPayload.issuer;
        this.#validFrom = securityPayload.validFrom;
        this.#validTo = securityPayload.validTo;
        this.#protocol = securityPayload.protocol;
        this.#sanList = securityPayload.sanList;
    }
    /**
     * The name of the issuer of the certificate.
     */
    issuer() {
        return this.#issuer;
    }
    /**
     * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
     * marking the start of the certificate's validity.
     */
    validFrom() {
        return this.#validFrom;
    }
    /**
     * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
     * marking the end of the certificate's validity.
     */
    validTo() {
        return this.#validTo;
    }
    /**
     * The security protocol being used, e.g. "TLS 1.2".
     */
    protocol() {
        return this.#protocol;
    }
    /**
     * The name of the subject to which the certificate was issued.
     */
    subjectName() {
        return this.#subjectName;
    }
    /**
     * The list of {@link https://en.wikipedia.org/wiki/Subject_Alternative_Name | subject alternative names (SANs)} of the certificate.
     */
    subjectAlternativeNames() {
        return this.#sanList;
    }
}
exports.SecurityDetails = SecurityDetails;
//# sourceMappingURL=SecurityDetails.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/WaitTask.js":
/*!********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/WaitTask.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskManager = exports.WaitTask = void 0;
const Deferred_js_1 = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Deferred.js");
const ErrorLike_js_1 = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/ErrorLike.js");
const Function_js_1 = __webpack_require__(/*! ../util/Function.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Function.js");
const Errors_js_1 = __webpack_require__(/*! ./Errors.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js");
const LazyArg_js_1 = __webpack_require__(/*! ./LazyArg.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/LazyArg.js");
/**
 * @internal
 */
class WaitTask {
    #world;
    #polling;
    #root;
    #fn;
    #args;
    #timeout;
    #timeoutError;
    #result = Deferred_js_1.Deferred.create();
    #poller;
    #signal;
    #reruns = [];
    constructor(world, options, fn, ...args) {
        this.#world = world;
        this.#polling = options.polling;
        this.#root = options.root;
        this.#signal = options.signal;
        this.#signal?.addEventListener('abort', () => {
            void this.terminate(this.#signal?.reason);
        }, {
            once: true,
        });
        switch (typeof fn) {
            case 'string':
                this.#fn = `() => {return (${fn});}`;
                break;
            default:
                this.#fn = (0, Function_js_1.stringifyFunction)(fn);
                break;
        }
        this.#args = args;
        this.#world.taskManager.add(this);
        if (options.timeout) {
            this.#timeoutError = new Errors_js_1.TimeoutError(`Waiting failed: ${options.timeout}ms exceeded`);
            this.#timeout = setTimeout(() => {
                void this.terminate(this.#timeoutError);
            }, options.timeout);
        }
        void this.rerun();
    }
    get result() {
        return this.#result.valueOrThrow();
    }
    async rerun() {
        for (const prev of this.#reruns) {
            prev.abort();
        }
        this.#reruns.length = 0;
        const controller = new AbortController();
        this.#reruns.push(controller);
        try {
            switch (this.#polling) {
                case 'raf':
                    this.#poller = await this.#world.evaluateHandle(({ RAFPoller, createFunction }, fn, ...args) => {
                        const fun = createFunction(fn);
                        return new RAFPoller(() => {
                            return fun(...args);
                        });
                    }, LazyArg_js_1.LazyArg.create(context => {
                        return context.puppeteerUtil;
                    }), this.#fn, ...this.#args);
                    break;
                case 'mutation':
                    this.#poller = await this.#world.evaluateHandle(({ MutationPoller, createFunction }, root, fn, ...args) => {
                        const fun = createFunction(fn);
                        return new MutationPoller(() => {
                            return fun(...args);
                        }, root || document);
                    }, LazyArg_js_1.LazyArg.create(context => {
                        return context.puppeteerUtil;
                    }), this.#root, this.#fn, ...this.#args);
                    break;
                default:
                    this.#poller = await this.#world.evaluateHandle(({ IntervalPoller, createFunction }, ms, fn, ...args) => {
                        const fun = createFunction(fn);
                        return new IntervalPoller(() => {
                            return fun(...args);
                        }, ms);
                    }, LazyArg_js_1.LazyArg.create(context => {
                        return context.puppeteerUtil;
                    }), this.#polling, this.#fn, ...this.#args);
                    break;
            }
            await this.#poller.evaluate(poller => {
                void poller.start();
            });
            const result = await this.#poller.evaluateHandle(poller => {
                return poller.result();
            });
            this.#result.resolve(result);
            await this.terminate();
        }
        catch (error) {
            if (controller.signal.aborted) {
                return;
            }
            const badError = this.getBadError(error);
            if (badError) {
                await this.terminate(badError);
            }
        }
    }
    async terminate(error) {
        this.#world.taskManager.delete(this);
        clearTimeout(this.#timeout);
        if (error && !this.#result.finished()) {
            this.#result.reject(error);
        }
        if (this.#poller) {
            try {
                await this.#poller.evaluateHandle(async (poller) => {
                    await poller.stop();
                });
                if (this.#poller) {
                    await this.#poller.dispose();
                    this.#poller = undefined;
                }
            }
            catch {
                // Ignore errors since they most likely come from low-level cleanup.
            }
        }
    }
    /**
     * Not all errors lead to termination. They usually imply we need to rerun the task.
     */
    getBadError(error) {
        if ((0, ErrorLike_js_1.isErrorLike)(error)) {
            // When frame is detached the task should have been terminated by the IsolatedWorld.
            // This can fail if we were adding this task while the frame was detached,
            // so we terminate here instead.
            if (error.message.includes('Execution context is not available in detached frame')) {
                return new Error('Waiting failed: Frame detached');
            }
            // When the page is navigated, the promise is rejected.
            // We will try again in the new execution context.
            if (error.message.includes('Execution context was destroyed')) {
                return;
            }
            // We could have tried to evaluate in a context which was already
            // destroyed.
            if (error.message.includes('Cannot find context with specified id')) {
                return;
            }
            // Errors coming from WebDriver BiDi. TODO: Adjust messages after
            // https://github.com/w3c/webdriver-bidi/issues/540 is resolved.
            if (error.message.includes("AbortError: Actor 'MessageHandlerFrame' destroyed")) {
                return;
            }
            return error;
        }
        return new Error('WaitTask failed with an error', {
            cause: error,
        });
    }
}
exports.WaitTask = WaitTask;
/**
 * @internal
 */
class TaskManager {
    #tasks = new Set();
    add(task) {
        this.#tasks.add(task);
    }
    delete(task) {
        this.#tasks.delete(task);
    }
    terminateAll(error) {
        for (const task of this.#tasks) {
            void task.terminate(error);
        }
        this.#tasks.clear();
    }
    async rerunAll() {
        await Promise.all([...this.#tasks].map(task => {
            return task.rerun();
        }));
    }
}
exports.TaskManager = TaskManager;
//# sourceMappingURL=WaitTask.js.map

/***/ })

}]);