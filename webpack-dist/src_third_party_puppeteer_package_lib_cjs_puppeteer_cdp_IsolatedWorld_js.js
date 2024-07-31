"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_cdp_IsolatedWorld_js"],{

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

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/IsolatedWorld.js":
/*!**********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/IsolatedWorld.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsolatedWorld = void 0;
const rxjs_js_1 = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./src/third_party/puppeteer/package/lib/cjs/third_party/rxjs/rxjs.js");
const Realm_js_1 = __webpack_require__(/*! ../api/Realm.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/Realm.js");
const EventEmitter_js_1 = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/EventEmitter.js");
const util_js_1 = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/util.js");
const disposable_js_1 = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/disposable.js");
const ElementHandle_js_1 = __webpack_require__(/*! ./ElementHandle.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/ElementHandle.js");
const JSHandle_js_1 = __webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/JSHandle.js");
/**
 * @internal
 */
class IsolatedWorld extends Realm_js_1.Realm {
    #context;
    #emitter = new EventEmitter_js_1.EventEmitter();
    #frameOrWorker;
    constructor(frameOrWorker, timeoutSettings) {
        super(timeoutSettings);
        this.#frameOrWorker = frameOrWorker;
    }
    get environment() {
        return this.#frameOrWorker;
    }
    get client() {
        return this.#frameOrWorker.client;
    }
    get emitter() {
        return this.#emitter;
    }
    setContext(context) {
        this.#context?.[disposable_js_1.disposeSymbol]();
        context.once('disposed', this.#onContextDisposed.bind(this));
        context.on('consoleapicalled', this.#onContextConsoleApiCalled.bind(this));
        context.on('bindingcalled', this.#onContextBindingCalled.bind(this));
        this.#context = context;
        this.#emitter.emit('context', context);
        void this.taskManager.rerunAll();
    }
    #onContextDisposed() {
        this.#context = undefined;
        if ('clearDocumentHandle' in this.#frameOrWorker) {
            this.#frameOrWorker.clearDocumentHandle();
        }
    }
    #onContextConsoleApiCalled(event) {
        this.#emitter.emit('consoleapicalled', event);
    }
    #onContextBindingCalled(event) {
        this.#emitter.emit('bindingcalled', event);
    }
    hasContext() {
        return !!this.#context;
    }
    get context() {
        return this.#context;
    }
    #executionContext() {
        if (this.disposed) {
            throw new Error(`Execution context is not available in detached frame or worker "${this.environment.url()}" (are you trying to evaluate?)`);
        }
        return this.#context;
    }
    /**
     * Waits for the next context to be set on the isolated world.
     */
    async #waitForExecutionContext() {
        const result = await (0, rxjs_js_1.firstValueFrom)((0, util_js_1.fromEmitterEvent)(this.#emitter, 'context').pipe((0, rxjs_js_1.raceWith)((0, util_js_1.fromEmitterEvent)(this.#emitter, 'disposed').pipe((0, rxjs_js_1.map)(() => {
            // The message has to match the CDP message expected by the WaitTask class.
            throw new Error('Execution context was destroyed');
        })), (0, util_js_1.timeout)(this.timeoutSettings.timeout()))));
        return result;
    }
    async evaluateHandle(pageFunction, ...args) {
        pageFunction = (0, util_js_1.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, pageFunction);
        // This code needs to schedule evaluateHandle call synchroniously (at
        // least when the context is there) so we cannot unconditionally
        // await.
        let context = this.#executionContext();
        if (!context) {
            context = await this.#waitForExecutionContext();
        }
        return await context.evaluateHandle(pageFunction, ...args);
    }
    async evaluate(pageFunction, ...args) {
        pageFunction = (0, util_js_1.withSourcePuppeteerURLIfNone)(this.evaluate.name, pageFunction);
        // This code needs to schedule evaluate call synchroniously (at
        // least when the context is there) so we cannot unconditionally
        // await.
        let context = this.#executionContext();
        if (!context) {
            context = await this.#waitForExecutionContext();
        }
        return await context.evaluate(pageFunction, ...args);
    }
    async adoptBackendNode(backendNodeId) {
        // This code needs to schedule resolveNode call synchroniously (at
        // least when the context is there) so we cannot unconditionally
        // await.
        let context = this.#executionContext();
        if (!context) {
            context = await this.#waitForExecutionContext();
        }
        const { object } = await this.client.send('DOM.resolveNode', {
            backendNodeId: backendNodeId,
            executionContextId: context.id,
        });
        return this.createCdpHandle(object);
    }
    async adoptHandle(handle) {
        if (handle.realm === this) {
            // If the context has already adopted this handle, clone it so downstream
            // disposal doesn't become an issue.
            return (await handle.evaluateHandle(value => {
                return value;
            }));
        }
        const nodeInfo = await this.client.send('DOM.describeNode', {
            objectId: handle.id,
        });
        return (await this.adoptBackendNode(nodeInfo.node.backendNodeId));
    }
    async transferHandle(handle) {
        if (handle.realm === this) {
            return handle;
        }
        // Implies it's a primitive value, probably.
        if (handle.remoteObject().objectId === undefined) {
            return handle;
        }
        const info = await this.client.send('DOM.describeNode', {
            objectId: handle.remoteObject().objectId,
        });
        const newHandle = (await this.adoptBackendNode(info.node.backendNodeId));
        await handle.dispose();
        return newHandle;
    }
    /**
     * @internal
     */
    createCdpHandle(remoteObject) {
        if (remoteObject.subtype === 'node') {
            return new ElementHandle_js_1.CdpElementHandle(this, remoteObject);
        }
        return new JSHandle_js_1.CdpJSHandle(this, remoteObject);
    }
    [disposable_js_1.disposeSymbol]() {
        this.#context?.[disposable_js_1.disposeSymbol]();
        this.#emitter.emit('disposed', undefined);
        super[disposable_js_1.disposeSymbol]();
        this.#emitter.removeAllListeners();
    }
}
exports.IsolatedWorld = IsolatedWorld;
//# sourceMappingURL=IsolatedWorld.js.map

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