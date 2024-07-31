"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_api_Realm_js-src_third_party_puppeteer_pa-2c6b65"],{

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

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/WebWorker.js":
/*!*******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/WebWorker.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BidiWebWorker = void 0;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const WebWorker_js_1 = __webpack_require__(/*! ../api/WebWorker.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/WebWorker.js");
const Errors_js_1 = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js");
const Realm_js_1 = __webpack_require__(/*! ./Realm.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/Realm.js");
/**
 * @internal
 */
class BidiWebWorker extends WebWorker_js_1.WebWorker {
    static from(frame, realm) {
        const worker = new BidiWebWorker(frame, realm);
        return worker;
    }
    #frame;
    #realm;
    constructor(frame, realm) {
        super(realm.origin);
        this.#frame = frame;
        this.#realm = Realm_js_1.BidiWorkerRealm.from(realm, this);
    }
    get frame() {
        return this.#frame;
    }
    mainRealm() {
        return this.#realm;
    }
    get client() {
        throw new Errors_js_1.UnsupportedOperation();
    }
}
exports.BidiWebWorker = BidiWebWorker;
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