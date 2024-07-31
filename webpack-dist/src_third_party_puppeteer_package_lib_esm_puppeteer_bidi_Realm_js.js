"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_bidi_Realm_js"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/api/Realm.js":
/*!**************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/api/Realm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Realm: () => (/* binding */ Realm)
/* harmony export */ });
/* harmony import */ var _common_WaitTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/WaitTask.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/WaitTask.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * @internal
 */
class Realm {
    timeoutSettings;
    taskManager = new _common_WaitTask_js__WEBPACK_IMPORTED_MODULE_0__.TaskManager();
    constructor(timeoutSettings) {
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
        return this.#disposed;
    }
    #disposed = false;
    /** @internal */
    dispose() {
        this.#disposed = true;
        this.taskManager.terminateAll(new Error('waitForFunction failed: frame got detached.'));
    }
    /** @internal */
    [_util_disposable_js__WEBPACK_IMPORTED_MODULE_1__.disposeSymbol]() {
        this.dispose();
    }
}
//# sourceMappingURL=Realm.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/ExposedFunction.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/ExposedFunction.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExposeableFunction: () => (/* binding */ ExposeableFunction)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */ var _util_Function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Function.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js");
/* harmony import */ var _ElementHandle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementHandle.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/ElementHandle.js");
/* harmony import */ var _JSHandle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/JSHandle.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
class ExposeableFunction {
    static async from(frame, name, apply, isolate = false) {
        const func = new ExposeableFunction(frame, name, apply, isolate);
        await func.#initialize();
        return func;
    }
    #frame;
    name;
    #apply;
    #isolate;
    #channel;
    #scripts = [];
    #disposables = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.DisposableStack();
    constructor(frame, name, apply, isolate = false) {
        this.#frame = frame;
        this.name = name;
        this.#apply = apply;
        this.#isolate = isolate;
        this.#channel = `__puppeteer__${this.#frame._id}_page_exposeFunction_${this.name}`;
    }
    async #initialize() {
        const connection = this.#connection;
        const channel = {
            type: 'channel',
            value: {
                channel: this.#channel,
                ownership: "root" /* Bidi.Script.ResultOwnership.Root */,
            },
        };
        const connectionEmitter = this.#disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(connection));
        connectionEmitter.on(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Script.EventNames.Message, this.#handleMessage);
        const functionDeclaration = (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_4__.stringifyFunction)((0,_util_Function_js__WEBPACK_IMPORTED_MODULE_4__.interpolateFunction)((callback) => {
            Object.assign(globalThis, {
                [PLACEHOLDER('name')]: function (...args) {
                    return new Promise((resolve, reject) => {
                        callback([resolve, reject, args]);
                    });
                },
            });
        }, { name: JSON.stringify(this.name) }));
        const frames = [this.#frame];
        for (const frame of frames) {
            frames.push(...frame.childFrames());
        }
        await Promise.all(frames.map(async (frame) => {
            const realm = this.#isolate ? frame.isolatedRealm() : frame.mainRealm();
            try {
                const [script] = await Promise.all([
                    frame.browsingContext.addPreloadScript(functionDeclaration, {
                        arguments: [channel],
                        sandbox: realm.sandbox,
                    }),
                    realm.realm.callFunction(functionDeclaration, false, {
                        arguments: [channel],
                    }),
                ]);
                this.#scripts.push([frame, script]);
            }
            catch (error) {
                // If it errors, the frame probably doesn't support call function. We
                // fail gracefully.
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)(error);
            }
        }));
    }
    get #connection() {
        return this.#frame.page().browser().connection;
    }
    #handleMessage = async (params) => {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
            if (params.channel !== this.#channel) {
                return;
            }
            const realm = this.#getRealm(params.source);
            if (!realm) {
                // Unrelated message.
                return;
            }
            const dataHandle = __addDisposableResource(env_1, _JSHandle_js__WEBPACK_IMPORTED_MODULE_6__.BidiJSHandle.from(params.data, realm), false);
            const argsHandle = __addDisposableResource(env_1, await dataHandle.evaluateHandle(([, , args]) => {
                return args;
            }), false);
            const stack = __addDisposableResource(env_1, new _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.DisposableStack(), false);
            const args = [];
            for (const [index, handle] of await argsHandle.getProperties()) {
                stack.use(handle);
                // Element handles are passed as is.
                if (handle instanceof _ElementHandle_js__WEBPACK_IMPORTED_MODULE_5__.BidiElementHandle) {
                    args[+index] = handle;
                    stack.use(handle);
                    continue;
                }
                // Everything else is passed as the JS value.
                args[+index] = handle.jsonValue();
            }
            let result;
            try {
                result = await this.#apply(...(await Promise.all(args)));
            }
            catch (error) {
                try {
                    if (error instanceof Error) {
                        await dataHandle.evaluate(([, reject], name, message, stack) => {
                            const error = new Error(message);
                            error.name = name;
                            if (stack) {
                                error.stack = stack;
                            }
                            reject(error);
                        }, error.name, error.message, error.stack);
                    }
                    else {
                        await dataHandle.evaluate(([, reject], error) => {
                            reject(error);
                        }, error);
                    }
                }
                catch (error) {
                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)(error);
                }
                return;
            }
            try {
                await dataHandle.evaluate(([resolve], result) => {
                    resolve(result);
                }, result);
            }
            catch (error) {
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)(error);
            }
        }
        catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        }
        finally {
            __disposeResources(env_1);
        }
    };
    #getRealm(source) {
        const frame = this.#findFrame(source.context);
        if (!frame) {
            // Unrelated message.
            return;
        }
        return frame.realm(source.realm);
    }
    #findFrame(id) {
        const frames = [this.#frame];
        for (const frame of frames) {
            if (frame._id === id) {
                return frame;
            }
            frames.push(...frame.childFrames());
        }
        return;
    }
    [Symbol.dispose]() {
        void this[Symbol.asyncDispose]().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
    }
    async [Symbol.asyncDispose]() {
        this.#disposables.dispose();
        await Promise.all(this.#scripts.map(async ([frame, script]) => {
            const realm = this.#isolate ? frame.isolatedRealm() : frame.mainRealm();
            try {
                await Promise.all([
                    realm.evaluate(name => {
                        delete globalThis[name];
                    }, this.name),
                    ...frame.childFrames().map(childFrame => {
                        return childFrame.evaluate(name => {
                            delete globalThis[name];
                        }, this.name);
                    }),
                    frame.browsingContext.removePreloadScript(script),
                ]);
            }
            catch (error) {
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)(error);
            }
        }));
    }
}
//# sourceMappingURL=ExposedFunction.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/Realm.js":
/*!***************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/Realm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiFrameRealm: () => (/* binding */ BidiFrameRealm),
/* harmony export */   BidiRealm: () => (/* binding */ BidiRealm),
/* harmony export */   BidiWorkerRealm: () => (/* binding */ BidiWorkerRealm)
/* harmony export */ });
/* harmony import */ var _api_Realm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Realm.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/api/Realm.js");
/* harmony import */ var _cdp_AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cdp/AriaQueryHandler.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/AriaQueryHandler.js");
/* harmony import */ var _common_LazyArg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/LazyArg.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/LazyArg.js");
/* harmony import */ var _common_ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ScriptInjector.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/ScriptInjector.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/AsyncIterableUtil.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js");
/* harmony import */ var _util_Function_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/Function.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js");
/* harmony import */ var _Deserializer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Deserializer.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/Deserializer.js");
/* harmony import */ var _ElementHandle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ElementHandle.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/ElementHandle.js");
/* harmony import */ var _ExposedFunction_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ExposedFunction.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/ExposedFunction.js");
/* harmony import */ var _JSHandle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/JSHandle.js");
/* harmony import */ var _Serializer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Serializer.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/Serializer.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/util.js");
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
class BidiRealm extends _api_Realm_js__WEBPACK_IMPORTED_MODULE_0__.Realm {
    realm;
    constructor(realm, timeoutSettings) {
        super(timeoutSettings);
        this.realm = realm;
    }
    initialize() {
        this.realm.on('destroyed', ({ reason }) => {
            this.taskManager.terminateAll(new Error(reason));
            this.dispose();
        });
        this.realm.on('updated', () => {
            this.internalPuppeteerUtil = undefined;
            void this.taskManager.rerunAll();
        });
    }
    internalPuppeteerUtil;
    get puppeteerUtil() {
        const promise = Promise.resolve();
        _common_ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__.scriptInjector.inject(script => {
            if (this.internalPuppeteerUtil) {
                void this.internalPuppeteerUtil.then(handle => {
                    void handle.dispose();
                });
            }
            this.internalPuppeteerUtil = promise.then(() => {
                return this.evaluateHandle(script);
            });
        }, !this.internalPuppeteerUtil);
        return this.internalPuppeteerUtil;
    }
    async evaluateHandle(pageFunction, ...args) {
        return await this.#evaluate(false, pageFunction, ...args);
    }
    async evaluate(pageFunction, ...args) {
        return await this.#evaluate(true, pageFunction, ...args);
    }
    async #evaluate(returnByValue, pageFunction, ...args) {
        const sourceUrlComment = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.getSourceUrlComment)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.getSourcePuppeteerURLIfAvailable)(pageFunction)?.toString() ??
            _common_util_js__WEBPACK_IMPORTED_MODULE_4__.PuppeteerURL.INTERNAL_URL);
        let responsePromise;
        const resultOwnership = returnByValue
            ? "none" /* Bidi.Script.ResultOwnership.None */
            : "root" /* Bidi.Script.ResultOwnership.Root */;
        const serializationOptions = returnByValue
            ? {}
            : {
                maxObjectDepth: 0,
                maxDomDepth: 0,
            };
        if ((0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.isString)(pageFunction)) {
            const expression = _common_util_js__WEBPACK_IMPORTED_MODULE_4__.SOURCE_URL_REGEX.test(pageFunction)
                ? pageFunction
                : `${pageFunction}\n${sourceUrlComment}\n`;
            responsePromise = this.realm.evaluate(expression, true, {
                resultOwnership,
                userActivation: true,
                serializationOptions,
            });
        }
        else {
            let functionDeclaration = (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_6__.stringifyFunction)(pageFunction);
            functionDeclaration = _common_util_js__WEBPACK_IMPORTED_MODULE_4__.SOURCE_URL_REGEX.test(functionDeclaration)
                ? functionDeclaration
                : `${functionDeclaration}\n${sourceUrlComment}\n`;
            responsePromise = this.realm.callFunction(functionDeclaration, 
            /* awaitPromise= */ true, {
                // LazyArgs are used only internally and should not affect the order
                // evaluate calls for the public APIs.
                arguments: args.some(arg => {
                    return arg instanceof _common_LazyArg_js__WEBPACK_IMPORTED_MODULE_2__.LazyArg;
                })
                    ? await Promise.all(args.map(arg => {
                        return this.serializeAsync(arg);
                    }))
                    : args.map(arg => {
                        return this.serialize(arg);
                    }),
                resultOwnership,
                userActivation: true,
                serializationOptions,
            });
        }
        const result = await responsePromise;
        if ('type' in result && result.type === 'exception') {
            throw (0,_util_js__WEBPACK_IMPORTED_MODULE_12__.createEvaluationError)(result.exceptionDetails);
        }
        return returnByValue
            ? _Deserializer_js__WEBPACK_IMPORTED_MODULE_7__.BidiDeserializer.deserialize(result.result)
            : this.createHandle(result.result);
    }
    createHandle(result) {
        if ((result.type === 'node' || result.type === 'window') &&
            this instanceof BidiFrameRealm) {
            return _ElementHandle_js__WEBPACK_IMPORTED_MODULE_8__.BidiElementHandle.from(result, this);
        }
        return _JSHandle_js__WEBPACK_IMPORTED_MODULE_10__.BidiJSHandle.from(result, this);
    }
    async serializeAsync(arg) {
        if (arg instanceof _common_LazyArg_js__WEBPACK_IMPORTED_MODULE_2__.LazyArg) {
            arg = await arg.get(this);
        }
        return this.serialize(arg);
    }
    serialize(arg) {
        if (arg instanceof _JSHandle_js__WEBPACK_IMPORTED_MODULE_10__.BidiJSHandle || arg instanceof _ElementHandle_js__WEBPACK_IMPORTED_MODULE_8__.BidiElementHandle) {
            if (arg.realm !== this) {
                if (!(arg.realm instanceof BidiFrameRealm) ||
                    !(this instanceof BidiFrameRealm)) {
                    throw new Error("Trying to evaluate JSHandle from different global types. Usually this means you're using a handle from a worker in a page or vice versa.");
                }
                if (arg.realm.environment !== this.environment) {
                    throw new Error("Trying to evaluate JSHandle from different frames. Usually this means you're using a handle from a page on a different page.");
                }
            }
            if (arg.disposed) {
                throw new Error('JSHandle is disposed!');
            }
            return arg.remoteValue();
        }
        return _Serializer_js__WEBPACK_IMPORTED_MODULE_11__.BidiSerializer.serialize(arg);
    }
    async destroyHandles(handles) {
        if (this.disposed) {
            return;
        }
        const handleIds = handles
            .map(({ id }) => {
            return id;
        })
            .filter((id) => {
            return id !== undefined;
        });
        if (handleIds.length === 0) {
            return;
        }
        await this.realm.disown(handleIds).catch(error => {
            // Exceptions might happen in case of a page been navigated or closed.
            // Swallow these since they are harmless and we don't leak anything in this case.
            (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError)(error);
        });
    }
    async adoptHandle(handle) {
        return (await this.evaluateHandle(node => {
            return node;
        }, handle));
    }
    async transferHandle(handle) {
        if (handle.realm === this) {
            return handle;
        }
        const transferredHandle = this.adoptHandle(handle);
        await handle.dispose();
        return await transferredHandle;
    }
}
/**
 * @internal
 */
class BidiFrameRealm extends BidiRealm {
    static from(realm, frame) {
        const frameRealm = new BidiFrameRealm(realm, frame);
        frameRealm.#initialize();
        return frameRealm;
    }
    #frame;
    constructor(realm, frame) {
        super(realm, frame.timeoutSettings);
        this.#frame = frame;
    }
    #initialize() {
        super.initialize();
        // This should run first.
        this.realm.on('updated', () => {
            this.environment.clearDocumentHandle();
            this.#bindingsInstalled = false;
        });
    }
    #bindingsInstalled = false;
    get puppeteerUtil() {
        let promise = Promise.resolve();
        if (!this.#bindingsInstalled) {
            promise = Promise.all([
                _ExposedFunction_js__WEBPACK_IMPORTED_MODULE_9__.ExposeableFunction.from(this.environment, '__ariaQuerySelector', _cdp_AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__.ARIAQueryHandler.queryOne, !!this.sandbox),
                _ExposedFunction_js__WEBPACK_IMPORTED_MODULE_9__.ExposeableFunction.from(this.environment, '__ariaQuerySelectorAll', async (element, selector) => {
                    const results = _cdp_AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__.ARIAQueryHandler.queryAll(element, selector);
                    return await element.realm.evaluateHandle((...elements) => {
                        return elements;
                    }, ...(await _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_5__.AsyncIterableUtil.collect(results)));
                }, !!this.sandbox),
            ]);
            this.#bindingsInstalled = true;
        }
        return promise.then(() => {
            return super.puppeteerUtil;
        });
    }
    get sandbox() {
        return this.realm.sandbox;
    }
    get environment() {
        return this.#frame;
    }
    async adoptBackendNode(backendNodeId) {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
            const { object } = await this.#frame.client.send('DOM.resolveNode', {
                backendNodeId,
                executionContextId: await this.realm.resolveExecutionContextId(),
            });
            const handle = __addDisposableResource(env_1, _ElementHandle_js__WEBPACK_IMPORTED_MODULE_8__.BidiElementHandle.from({
                handle: object.objectId,
                type: 'node',
            }, this), false);
            // We need the sharedId, so we perform the following to obtain it.
            return await handle.evaluateHandle(element => {
                return element;
            });
        }
        catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        }
        finally {
            __disposeResources(env_1);
        }
    }
}
/**
 * @internal
 */
class BidiWorkerRealm extends BidiRealm {
    static from(realm, worker) {
        const workerRealm = new BidiWorkerRealm(realm, worker);
        workerRealm.initialize();
        return workerRealm;
    }
    #worker;
    constructor(realm, frame) {
        super(realm, frame.timeoutSettings);
        this.#worker = frame;
    }
    get environment() {
        return this.#worker;
    }
    async adoptBackendNode() {
        throw new Error('Cannot adopt DOM nodes into a worker.');
    }
}
//# sourceMappingURL=Realm.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/Serializer.js":
/*!********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/Serializer.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiSerializer: () => (/* binding */ BidiSerializer)
/* harmony export */ });
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
class UnserializableError extends Error {
}
/**
 * @internal
 */
class BidiSerializer {
    static serialize(arg) {
        switch (typeof arg) {
            case 'symbol':
            case 'function':
                throw new UnserializableError(`Unable to serializable ${typeof arg}`);
            case 'object':
                return this.#serializeObject(arg);
            case 'undefined':
                return {
                    type: 'undefined',
                };
            case 'number':
                return this.#serializeNumber(arg);
            case 'bigint':
                return {
                    type: 'bigint',
                    value: arg.toString(),
                };
            case 'string':
                return {
                    type: 'string',
                    value: arg,
                };
            case 'boolean':
                return {
                    type: 'boolean',
                    value: arg,
                };
        }
    }
    static #serializeNumber(arg) {
        let value;
        if (Object.is(arg, -0)) {
            value = '-0';
        }
        else if (Object.is(arg, Infinity)) {
            value = 'Infinity';
        }
        else if (Object.is(arg, -Infinity)) {
            value = '-Infinity';
        }
        else if (Object.is(arg, NaN)) {
            value = 'NaN';
        }
        else {
            value = arg;
        }
        return {
            type: 'number',
            value,
        };
    }
    static #serializeObject(arg) {
        if (arg === null) {
            return {
                type: 'null',
            };
        }
        else if (Array.isArray(arg)) {
            const parsedArray = arg.map(subArg => {
                return this.serialize(subArg);
            });
            return {
                type: 'array',
                value: parsedArray,
            };
        }
        else if ((0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(arg)) {
            try {
                JSON.stringify(arg);
            }
            catch (error) {
                if (error instanceof TypeError &&
                    error.message.startsWith('Converting circular structure to JSON')) {
                    error.message += ' Recursive objects are not allowed.';
                }
                throw error;
            }
            const parsedObject = [];
            for (const key in arg) {
                parsedObject.push([this.serialize(key), this.serialize(arg[key])]);
            }
            return {
                type: 'object',
                value: parsedObject,
            };
        }
        else if ((0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.isRegExp)(arg)) {
            return {
                type: 'regexp',
                value: {
                    pattern: arg.source,
                    flags: arg.flags,
                },
            };
        }
        else if ((0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(arg)) {
            return {
                type: 'date',
                value: arg.toISOString(),
            };
        }
        throw new UnserializableError('Custom object serialization not possible. Use plain objects instead.');
    }
}
//# sourceMappingURL=Serializer.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/util.js":
/*!**************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/util.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEvaluationError: () => (/* binding */ createEvaluationError),
/* harmony export */   rewriteNavigationError: () => (/* binding */ rewriteNavigationError)
/* harmony export */ });
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _Deserializer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Deserializer.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/Deserializer.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/**
 * @internal
 */
function createEvaluationError(details) {
    if (details.exception.type !== 'error') {
        return _Deserializer_js__WEBPACK_IMPORTED_MODULE_2__.BidiDeserializer.deserialize(details.exception);
    }
    const [name = '', ...parts] = details.text.split(': ');
    const message = parts.join(': ');
    const error = new Error(message);
    error.name = name;
    // The first line is this function which we ignore.
    const stackLines = [];
    if (details.stackTrace && stackLines.length < Error.stackTraceLimit) {
        for (const frame of details.stackTrace.callFrames.reverse()) {
            if (_common_util_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerURL.isPuppeteerURL(frame.url) &&
                frame.url !== _common_util_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerURL.INTERNAL_URL) {
                const url = _common_util_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerURL.parse(frame.url);
                stackLines.unshift(`    at ${frame.functionName || url.functionName} (${url.functionName} at ${url.siteString}, <anonymous>:${frame.lineNumber}:${frame.columnNumber})`);
            }
            else {
                stackLines.push(`    at ${frame.functionName || '<anonymous>'} (${frame.url}:${frame.lineNumber}:${frame.columnNumber})`);
            }
            if (stackLines.length >= Error.stackTraceLimit) {
                break;
            }
        }
    }
    error.stack = [details.text, ...stackLines].join('\n');
    return error;
}
/**
 * @internal
 */
function rewriteNavigationError(message, ms) {
    return error => {
        if (error instanceof _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolError) {
            error.message += ` at ${message}`;
        }
        else if (error instanceof _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.TimeoutError) {
            error.message = `Navigation timeout of ${ms} ms exceeded`;
        }
        throw error;
    };
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/WaitTask.js":
/*!********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/common/WaitTask.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskManager: () => (/* binding */ TaskManager),
/* harmony export */   WaitTask: () => (/* binding */ WaitTask)
/* harmony export */ });
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */ var _util_Function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Function.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js");
/* harmony import */ var _Errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Errors.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LazyArg.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/LazyArg.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */





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
    #result = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred.create();
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
                this.#fn = (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_2__.stringifyFunction)(fn);
                break;
        }
        this.#args = args;
        this.#world.taskManager.add(this);
        if (options.timeout) {
            this.#timeoutError = new _Errors_js__WEBPACK_IMPORTED_MODULE_3__.TimeoutError(`Waiting failed: ${options.timeout}ms exceeded`);
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
                    }, _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__.LazyArg.create(context => {
                        return context.puppeteerUtil;
                    }), this.#fn, ...this.#args);
                    break;
                case 'mutation':
                    this.#poller = await this.#world.evaluateHandle(({ MutationPoller, createFunction }, root, fn, ...args) => {
                        const fun = createFunction(fn);
                        return new MutationPoller(() => {
                            return fun(...args);
                        }, root || document);
                    }, _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__.LazyArg.create(context => {
                        return context.puppeteerUtil;
                    }), this.#root, this.#fn, ...this.#args);
                    break;
                default:
                    this.#poller = await this.#world.evaluateHandle(({ IntervalPoller, createFunction }, ms, fn, ...args) => {
                        const fun = createFunction(fn);
                        return new IntervalPoller(() => {
                            return fun(...args);
                        }, ms);
                    }, _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__.LazyArg.create(context => {
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
        if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__.isErrorLike)(error)) {
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
//# sourceMappingURL=WaitTask.js.map

/***/ })

}]);