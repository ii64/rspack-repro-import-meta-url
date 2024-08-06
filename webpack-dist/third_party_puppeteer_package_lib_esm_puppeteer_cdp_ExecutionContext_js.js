"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_ExecutionContext_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Binding.js":
/*!************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Binding.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Binding: () => (/* binding */ Binding)
/* harmony export */ });
/* harmony import */ var _api_JSHandle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/JSHandle.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
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
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */




/**
 * @internal
 */
class Binding {
    #name;
    #fn;
    #initSource;
    constructor(name, fn, initSource) {
        this.#name = name;
        this.#fn = fn;
        this.#initSource = initSource;
    }
    get name() {
        return this.#name;
    }
    get initSource() {
        return this.#initSource;
    }
    /**
     * @param context - Context to run the binding in; the context should have
     * the binding added to it beforehand.
     * @param id - ID of the call. This should come from the CDP
     * `onBindingCalled` response.
     * @param args - Plain arguments from CDP.
     */
    async run(context, id, args, isTrivial) {
        const stack = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack();
        try {
            if (!isTrivial) {
                const env_1 = { stack: [], error: void 0, hasError: false };
                try {
                    // Getting non-trivial arguments.
                    const handles = __addDisposableResource(env_1, await context.evaluateHandle((name, seq) => {
                        // @ts-expect-error Code is evaluated in a different context.
                        return globalThis[name].args.get(seq);
                    }, this.#name, id), false);
                    const properties = await handles.getProperties();
                    for (const [index, handle] of properties) {
                        // This is not straight-forward since some arguments can stringify, but
                        // aren't plain objects so add subtypes when the use-case arises.
                        if (index in args) {
                            switch (handle.remoteObject().subtype) {
                                case 'node':
                                    args[+index] = handle;
                                    break;
                                default:
                                    stack.use(handle);
                            }
                        }
                        else {
                            stack.use(handle);
                        }
                    }
                }
                catch (e_1) {
                    env_1.error = e_1;
                    env_1.hasError = true;
                }
                finally {
                    __disposeResources(env_1);
                }
            }
            await context.evaluate((name, seq, result) => {
                // @ts-expect-error Code is evaluated in a different context.
                const callbacks = globalThis[name].callbacks;
                callbacks.get(seq).resolve(result);
                callbacks.delete(seq);
            }, this.#name, id, await this.#fn(...args));
            for (const arg of args) {
                if (arg instanceof _api_JSHandle_js__WEBPACK_IMPORTED_MODULE_0__.JSHandle) {
                    stack.use(arg);
                }
            }
        }
        catch (error) {
            if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_3__.isErrorLike)(error)) {
                await context
                    .evaluate((name, seq, message, stack) => {
                    const error = new Error(message);
                    error.stack = stack;
                    // @ts-expect-error Code is evaluated in a different context.
                    const callbacks = globalThis[name].callbacks;
                    callbacks.get(seq).reject(error);
                    callbacks.delete(seq);
                }, this.#name, id, error.message, error.stack)
                    .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
            }
            else {
                await context
                    .evaluate((name, seq, error) => {
                    // @ts-expect-error Code is evaluated in a different context.
                    const callbacks = globalThis[name].callbacks;
                    callbacks.get(seq).reject(error);
                    callbacks.delete(seq);
                }, this.#name, id, error)
                    .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
            }
        }
    }
}
//# sourceMappingURL=Binding.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ExecutionContext.js":
/*!*********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ExecutionContext.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExecutionContext: () => (/* binding */ ExecutionContext)
/* harmony export */ });
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _common_LazyArg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/LazyArg.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/LazyArg.js");
/* harmony import */ var _common_ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ScriptInjector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/ScriptInjector.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/AsyncIterableUtil.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */ var _util_Function_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/Function.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js");
/* harmony import */ var _util_Mutex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/Mutex.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Mutex.js");
/* harmony import */ var _AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AriaQueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/AriaQueryHandler.js");
/* harmony import */ var _Binding_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Binding.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Binding.js");
/* harmony import */ var _ElementHandle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ElementHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ElementHandle.js");
/* harmony import */ var _JSHandle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/JSHandle.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/utils.js");
/**
 * @license
 * Copyright 2017 Google Inc.
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














const ariaQuerySelectorBinding = new _Binding_js__WEBPACK_IMPORTED_MODULE_10__.Binding('__ariaQuerySelector', _AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_9__.ARIAQueryHandler.queryOne, '' // custom init
);
const ariaQuerySelectorAllBinding = new _Binding_js__WEBPACK_IMPORTED_MODULE_10__.Binding('__ariaQuerySelectorAll', (async (element, selector) => {
    const results = _AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_9__.ARIAQueryHandler.queryAll(element, selector);
    return await element.realm.evaluateHandle((...elements) => {
        return elements;
    }, ...(await _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_5__.AsyncIterableUtil.collect(results)));
}), '' // custom init
);
/**
 * @internal
 */
class ExecutionContext extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter {
    #client;
    #world;
    #id;
    #name;
    #disposables = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.DisposableStack();
    constructor(client, contextPayload, world) {
        super();
        this.#client = client;
        this.#world = world;
        this.#id = contextPayload.id;
        if (contextPayload.name) {
            this.#name = contextPayload.name;
        }
        const clientEmitter = this.#disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(this.#client));
        clientEmitter.on('Runtime.bindingCalled', this.#onBindingCalled.bind(this));
        clientEmitter.on('Runtime.executionContextDestroyed', async (event) => {
            if (event.executionContextId === this.#id) {
                this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.disposeSymbol]();
            }
        });
        clientEmitter.on('Runtime.executionContextsCleared', async () => {
            this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.disposeSymbol]();
        });
        clientEmitter.on('Runtime.consoleAPICalled', this.#onConsoleAPI.bind(this));
        clientEmitter.on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, () => {
            this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.disposeSymbol]();
        });
    }
    // Contains mapping from functions that should be bound to Puppeteer functions.
    #bindings = new Map();
    // If multiple waitFor are set up asynchronously, we need to wait for the
    // first one to set up the binding in the page before running the others.
    #mutex = new _util_Mutex_js__WEBPACK_IMPORTED_MODULE_8__.Mutex();
    async #addBinding(binding) {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
            if (this.#bindings.has(binding.name)) {
                return;
            }
            const _ = __addDisposableResource(env_1, await this.#mutex.acquire(), false);
            try {
                await this.#client.send('Runtime.addBinding', this.#name
                    ? {
                        name: _utils_js__WEBPACK_IMPORTED_MODULE_13__.CDP_BINDING_PREFIX + binding.name,
                        executionContextName: this.#name,
                    }
                    : {
                        name: _utils_js__WEBPACK_IMPORTED_MODULE_13__.CDP_BINDING_PREFIX + binding.name,
                        executionContextId: this.#id,
                    });
                await this.evaluate(_utils_js__WEBPACK_IMPORTED_MODULE_13__.addPageBinding, 'internal', binding.name, _utils_js__WEBPACK_IMPORTED_MODULE_13__.CDP_BINDING_PREFIX);
                this.#bindings.set(binding.name, binding);
            }
            catch (error) {
                // We could have tried to evaluate in a context which was already
                // destroyed. This happens, for example, if the page is navigated while
                // we are trying to add the binding
                if (error instanceof Error) {
                    // Destroyed context.
                    if (error.message.includes('Execution context was destroyed')) {
                        return;
                    }
                    // Missing context.
                    if (error.message.includes('Cannot find context with specified id')) {
                        return;
                    }
                }
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError)(error);
            }
        }
        catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        }
        finally {
            __disposeResources(env_1);
        }
    }
    async #onBindingCalled(event) {
        if (event.executionContextId !== this.#id) {
            return;
        }
        let payload;
        try {
            payload = JSON.parse(event.payload);
        }
        catch {
            // The binding was either called by something in the page or it was
            // called before our wrapper was initialized.
            return;
        }
        const { type, name, seq, args, isTrivial } = payload;
        if (type !== 'internal') {
            this.emit('bindingcalled', event);
            return;
        }
        if (!this.#bindings.has(name)) {
            this.emit('bindingcalled', event);
            return;
        }
        try {
            const binding = this.#bindings.get(name);
            await binding?.run(this, seq, args, isTrivial);
        }
        catch (err) {
            (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError)(err);
        }
    }
    get id() {
        return this.#id;
    }
    #onConsoleAPI(event) {
        if (event.executionContextId !== this.#id) {
            return;
        }
        this.emit('consoleapicalled', event);
    }
    #bindingsInstalled = false;
    #puppeteerUtil;
    get puppeteerUtil() {
        let promise = Promise.resolve();
        if (!this.#bindingsInstalled) {
            promise = Promise.all([
                this.#addBindingWithoutThrowing(ariaQuerySelectorBinding),
                this.#addBindingWithoutThrowing(ariaQuerySelectorAllBinding),
            ]);
            this.#bindingsInstalled = true;
        }
        _common_ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__.scriptInjector.inject(script => {
            if (this.#puppeteerUtil) {
                void this.#puppeteerUtil.then(handle => {
                    void handle.dispose();
                });
            }
            this.#puppeteerUtil = promise.then(() => {
                return this.evaluateHandle(script);
            });
        }, !this.#puppeteerUtil);
        return this.#puppeteerUtil;
    }
    async #addBindingWithoutThrowing(binding) {
        try {
            await this.#addBinding(binding);
        }
        catch (err) {
            // If the binding cannot be added, then either the browser doesn't support
            // bindings (e.g. Firefox) or the context is broken. Either breakage is
            // okay, so we ignore the error.
            (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError)(err);
        }
    }
    /**
     * Evaluates the given function.
     *
     * @example
     *
     * ```ts
     * const executionContext = await page.mainFrame().executionContext();
     * const result = await executionContext.evaluate(() => Promise.resolve(8 * 7))* ;
     * console.log(result); // prints "56"
     * ```
     *
     * @example
     * A string can also be passed in instead of a function:
     *
     * ```ts
     * console.log(await executionContext.evaluate('1 + 2')); // prints "3"
     * ```
     *
     * @example
     * Handles can also be passed as `args`. They resolve to their referenced object:
     *
     * ```ts
     * const oneHandle = await executionContext.evaluateHandle(() => 1);
     * const twoHandle = await executionContext.evaluateHandle(() => 2);
     * const result = await executionContext.evaluate(
     *   (a, b) => a + b,
     *   oneHandle,
     *   twoHandle
     * );
     * await oneHandle.dispose();
     * await twoHandle.dispose();
     * console.log(result); // prints '3'.
     * ```
     *
     * @param pageFunction - The function to evaluate.
     * @param args - Additional arguments to pass into the function.
     * @returns The result of evaluating the function. If the result is an object,
     * a vanilla object containing the serializable properties of the result is
     * returned.
     */
    async evaluate(pageFunction, ...args) {
        return await this.#evaluate(true, pageFunction, ...args);
    }
    /**
     * Evaluates the given function.
     *
     * Unlike {@link ExecutionContext.evaluate | evaluate}, this method returns a
     * handle to the result of the function.
     *
     * This method may be better suited if the object cannot be serialized (e.g.
     * `Map`) and requires further manipulation.
     *
     * @example
     *
     * ```ts
     * const context = await page.mainFrame().executionContext();
     * const handle: JSHandle<typeof globalThis> = await context.evaluateHandle(
     *   () => Promise.resolve(self)
     * );
     * ```
     *
     * @example
     * A string can also be passed in instead of a function.
     *
     * ```ts
     * const handle: JSHandle<number> = await context.evaluateHandle('1 + 2');
     * ```
     *
     * @example
     * Handles can also be passed as `args`. They resolve to their referenced object:
     *
     * ```ts
     * const bodyHandle: ElementHandle<HTMLBodyElement> =
     *   await context.evaluateHandle(() => {
     *     return document.body;
     *   });
     * const stringHandle: JSHandle<string> = await context.evaluateHandle(
     *   body => body.innerHTML,
     *   body
     * );
     * console.log(await stringHandle.jsonValue()); // prints body's innerHTML
     * // Always dispose your garbage! :)
     * await bodyHandle.dispose();
     * await stringHandle.dispose();
     * ```
     *
     * @param pageFunction - The function to evaluate.
     * @param args - Additional arguments to pass into the function.
     * @returns A {@link JSHandle | handle} to the result of evaluating the
     * function. If the result is a `Node`, then this will return an
     * {@link ElementHandle | element handle}.
     */
    async evaluateHandle(pageFunction, ...args) {
        return await this.#evaluate(false, pageFunction, ...args);
    }
    async #evaluate(returnByValue, pageFunction, ...args) {
        const sourceUrlComment = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.getSourceUrlComment)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.getSourcePuppeteerURLIfAvailable)(pageFunction)?.toString() ??
            _common_util_js__WEBPACK_IMPORTED_MODULE_4__.PuppeteerURL.INTERNAL_URL);
        if ((0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.isString)(pageFunction)) {
            const contextId = this.#id;
            const expression = pageFunction;
            const expressionWithSourceUrl = _common_util_js__WEBPACK_IMPORTED_MODULE_4__.SOURCE_URL_REGEX.test(expression)
                ? expression
                : `${expression}\n${sourceUrlComment}\n`;
            const { exceptionDetails, result: remoteObject } = await this.#client
                .send('Runtime.evaluate', {
                expression: expressionWithSourceUrl,
                contextId,
                returnByValue,
                awaitPromise: true,
                userGesture: true,
            })
                .catch(rewriteError);
            if (exceptionDetails) {
                throw (0,_utils_js__WEBPACK_IMPORTED_MODULE_13__.createEvaluationError)(exceptionDetails);
            }
            return returnByValue
                ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_13__.valueFromRemoteObject)(remoteObject)
                : this.#world.createCdpHandle(remoteObject);
        }
        const functionDeclaration = (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_7__.stringifyFunction)(pageFunction);
        const functionDeclarationWithSourceUrl = _common_util_js__WEBPACK_IMPORTED_MODULE_4__.SOURCE_URL_REGEX.test(functionDeclaration)
            ? functionDeclaration
            : `${functionDeclaration}\n${sourceUrlComment}\n`;
        let callFunctionOnPromise;
        try {
            callFunctionOnPromise = this.#client.send('Runtime.callFunctionOn', {
                functionDeclaration: functionDeclarationWithSourceUrl,
                executionContextId: this.#id,
                // LazyArgs are used only internally and should not affect the order
                // evaluate calls for the public APIs.
                arguments: args.some(arg => {
                    return arg instanceof _common_LazyArg_js__WEBPACK_IMPORTED_MODULE_2__.LazyArg;
                })
                    ? await Promise.all(args.map(arg => {
                        return convertArgumentAsync(this, arg);
                    }))
                    : args.map(arg => {
                        return convertArgument(this, arg);
                    }),
                returnByValue,
                awaitPromise: true,
                userGesture: true,
            });
        }
        catch (error) {
            if (error instanceof TypeError &&
                error.message.startsWith('Converting circular structure to JSON')) {
                error.message += ' Recursive objects are not allowed.';
            }
            throw error;
        }
        const { exceptionDetails, result: remoteObject } = await callFunctionOnPromise.catch(rewriteError);
        if (exceptionDetails) {
            throw (0,_utils_js__WEBPACK_IMPORTED_MODULE_13__.createEvaluationError)(exceptionDetails);
        }
        return returnByValue
            ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_13__.valueFromRemoteObject)(remoteObject)
            : this.#world.createCdpHandle(remoteObject);
        async function convertArgumentAsync(context, arg) {
            if (arg instanceof _common_LazyArg_js__WEBPACK_IMPORTED_MODULE_2__.LazyArg) {
                arg = await arg.get(context);
            }
            return convertArgument(context, arg);
        }
        function convertArgument(context, arg) {
            if (typeof arg === 'bigint') {
                // eslint-disable-line valid-typeof
                return { unserializableValue: `${arg.toString()}n` };
            }
            if (Object.is(arg, -0)) {
                return { unserializableValue: '-0' };
            }
            if (Object.is(arg, Infinity)) {
                return { unserializableValue: 'Infinity' };
            }
            if (Object.is(arg, -Infinity)) {
                return { unserializableValue: '-Infinity' };
            }
            if (Object.is(arg, NaN)) {
                return { unserializableValue: 'NaN' };
            }
            const objectHandle = arg && (arg instanceof _JSHandle_js__WEBPACK_IMPORTED_MODULE_12__.CdpJSHandle || arg instanceof _ElementHandle_js__WEBPACK_IMPORTED_MODULE_11__.CdpElementHandle)
                ? arg
                : null;
            if (objectHandle) {
                if (objectHandle.realm !== context.#world) {
                    throw new Error('JSHandles can be evaluated only in the context they were created!');
                }
                if (objectHandle.disposed) {
                    throw new Error('JSHandle is disposed!');
                }
                if (objectHandle.remoteObject().unserializableValue) {
                    return {
                        unserializableValue: objectHandle.remoteObject().unserializableValue,
                    };
                }
                if (!objectHandle.remoteObject().objectId) {
                    return { value: objectHandle.remoteObject().value };
                }
                return { objectId: objectHandle.remoteObject().objectId };
            }
            return { value: arg };
        }
    }
    [_util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.disposeSymbol]() {
        this.#disposables.dispose();
        this.emit('disposed', undefined);
    }
}
const rewriteError = (error) => {
    if (error.message.includes('Object reference chain is too long')) {
        return { result: { type: 'undefined' } };
    }
    if (error.message.includes("Object couldn't be returned by value")) {
        return { result: { type: 'undefined' } };
    }
    if (error.message.endsWith('Cannot find context with specified id') ||
        error.message.endsWith('Inspected target navigated or closed')) {
        throw new Error('Execution context was destroyed, most likely because of a navigation.');
    }
    throw error;
};
//# sourceMappingURL=ExecutionContext.js.map

/***/ })

}]);