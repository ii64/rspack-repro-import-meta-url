"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_common_QueryHandler_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/ElementHandleSymbol.js":
/*!****************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/ElementHandleSymbol.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._isElementHandle = void 0;
/**
 * @internal
 */
exports._isElementHandle = Symbol('_isElementHandle');
//# sourceMappingURL=ElementHandleSymbol.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/HandleIterator.js":
/*!**************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/HandleIterator.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __addDisposableResource = (this && this.__addDisposableResource) || function (env, value, async) {
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
var __disposeResources = (this && this.__disposeResources) || (function (SuppressedError) {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.transposeIterableHandle = void 0;
const disposable_js_1 = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/disposable.js");
const DEFAULT_BATCH_SIZE = 20;
/**
 * This will transpose an iterator JSHandle into a fast, Puppeteer-side iterator
 * of JSHandles.
 *
 * @param size - The number of elements to transpose. This should be something
 * reasonable.
 */
async function* fastTransposeIteratorHandle(iterator, size) {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const array = __addDisposableResource(env_1, await iterator.evaluateHandle(async (iterator, size) => {
            const results = [];
            while (results.length < size) {
                const result = await iterator.next();
                if (result.done) {
                    break;
                }
                results.push(result.value);
            }
            return results;
        }, size), false);
        const properties = (await array.getProperties());
        const handles = properties.values();
        const stack = __addDisposableResource(env_1, new disposable_js_1.DisposableStack(), false);
        stack.defer(() => {
            for (const handle_1 of handles) {
                const env_2 = { stack: [], error: void 0, hasError: false };
                try {
                    const handle = __addDisposableResource(env_2, handle_1, false);
                    handle[disposable_js_1.disposeSymbol]();
                }
                catch (e_2) {
                    env_2.error = e_2;
                    env_2.hasError = true;
                }
                finally {
                    __disposeResources(env_2);
                }
            }
        });
        yield* handles;
        return properties.size === 0;
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
}
/**
 * This will transpose an iterator JSHandle in batches based on the default size
 * of {@link fastTransposeIteratorHandle}.
 */
async function* transposeIteratorHandle(iterator) {
    let size = DEFAULT_BATCH_SIZE;
    while (!(yield* fastTransposeIteratorHandle(iterator, size))) {
        size <<= 1;
    }
}
/**
 * @internal
 */
async function* transposeIterableHandle(handle) {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        const generatorHandle = __addDisposableResource(env_3, await handle.evaluateHandle(iterable => {
            return (async function* () {
                yield* iterable;
            })();
        }), false);
        yield* transposeIteratorHandle(generatorHandle);
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
}
exports.transposeIterableHandle = transposeIterableHandle;
//# sourceMappingURL=HandleIterator.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/LazyArg.js":
/*!*******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/LazyArg.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LazyArg = void 0;
/**
 * @internal
 */
class LazyArg {
    static create = (get) => {
        // We don't want to introduce LazyArg to the type system, otherwise we would
        // have to make it public.
        return new LazyArg(get);
    };
    #get;
    constructor(get) {
        this.#get = get;
    }
    async get(context) {
        return await this.#get(context);
    }
}
exports.LazyArg = LazyArg;
//# sourceMappingURL=LazyArg.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/QueryHandler.js":
/*!************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/QueryHandler.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __addDisposableResource = (this && this.__addDisposableResource) || function (env, value, async) {
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
var __disposeResources = (this && this.__disposeResources) || (function (SuppressedError) {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryHandler = void 0;
const ElementHandleSymbol_js_1 = __webpack_require__(/*! ../api/ElementHandleSymbol.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/ElementHandleSymbol.js");
const ErrorLike_js_1 = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/ErrorLike.js");
const Function_js_1 = __webpack_require__(/*! ../util/Function.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Function.js");
const HandleIterator_js_1 = __webpack_require__(/*! ./HandleIterator.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/HandleIterator.js");
const LazyArg_js_1 = __webpack_require__(/*! ./LazyArg.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/LazyArg.js");
/**
 * @internal
 */
class QueryHandler {
    // Either one of these may be implemented, but at least one must be.
    static querySelectorAll;
    static querySelector;
    static get _querySelector() {
        if (this.querySelector) {
            return this.querySelector;
        }
        if (!this.querySelectorAll) {
            throw new Error('Cannot create default `querySelector`.');
        }
        return (this.querySelector = (0, Function_js_1.interpolateFunction)(async (node, selector, PuppeteerUtil) => {
            const querySelectorAll = PLACEHOLDER('querySelectorAll');
            const results = querySelectorAll(node, selector, PuppeteerUtil);
            for await (const result of results) {
                return result;
            }
            return null;
        }, {
            querySelectorAll: (0, Function_js_1.stringifyFunction)(this.querySelectorAll),
        }));
    }
    static get _querySelectorAll() {
        if (this.querySelectorAll) {
            return this.querySelectorAll;
        }
        if (!this.querySelector) {
            throw new Error('Cannot create default `querySelectorAll`.');
        }
        return (this.querySelectorAll = (0, Function_js_1.interpolateFunction)(async function* (node, selector, PuppeteerUtil) {
            const querySelector = PLACEHOLDER('querySelector');
            const result = await querySelector(node, selector, PuppeteerUtil);
            if (result) {
                yield result;
            }
        }, {
            querySelector: (0, Function_js_1.stringifyFunction)(this.querySelector),
        }));
    }
    /**
     * Queries for multiple nodes given a selector and {@link ElementHandle}.
     *
     * Akin to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll | Document.querySelectorAll()}.
     */
    static async *queryAll(element, selector) {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
            const handle = __addDisposableResource(env_1, await element.evaluateHandle(this._querySelectorAll, selector, LazyArg_js_1.LazyArg.create(context => {
                return context.puppeteerUtil;
            })), false);
            yield* (0, HandleIterator_js_1.transposeIterableHandle)(handle);
        }
        catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        }
        finally {
            __disposeResources(env_1);
        }
    }
    /**
     * Queries for a single node given a selector and {@link ElementHandle}.
     *
     * Akin to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector}.
     */
    static async queryOne(element, selector) {
        const env_2 = { stack: [], error: void 0, hasError: false };
        try {
            const result = __addDisposableResource(env_2, await element.evaluateHandle(this._querySelector, selector, LazyArg_js_1.LazyArg.create(context => {
                return context.puppeteerUtil;
            })), false);
            if (!(ElementHandleSymbol_js_1._isElementHandle in result)) {
                return null;
            }
            return result.move();
        }
        catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        }
        finally {
            __disposeResources(env_2);
        }
    }
    /**
     * Waits until a single node appears for a given selector and
     * {@link ElementHandle}.
     *
     * This will always query the handle in the Puppeteer world and migrate the
     * result to the main world.
     */
    static async waitFor(elementOrFrame, selector, options) {
        const env_3 = { stack: [], error: void 0, hasError: false };
        try {
            let frame;
            const element = __addDisposableResource(env_3, await (async () => {
                if (!(ElementHandleSymbol_js_1._isElementHandle in elementOrFrame)) {
                    frame = elementOrFrame;
                    return;
                }
                frame = elementOrFrame.frame;
                return await frame.isolatedRealm().adoptHandle(elementOrFrame);
            })(), false);
            const { visible = false, hidden = false, timeout, signal } = options;
            const polling = options.polling ??
                (visible || hidden ? "raf" /* PollingOptions.RAF */ : "mutation" /* PollingOptions.MUTATION */);
            try {
                const env_4 = { stack: [], error: void 0, hasError: false };
                try {
                    signal?.throwIfAborted();
                    const handle = __addDisposableResource(env_4, await frame.isolatedRealm().waitForFunction(async (PuppeteerUtil, query, selector, root, visible) => {
                        const querySelector = PuppeteerUtil.createFunction(query);
                        const node = await querySelector(root ?? document, selector, PuppeteerUtil);
                        return PuppeteerUtil.checkVisibility(node, visible);
                    }, {
                        polling,
                        root: element,
                        timeout,
                        signal,
                    }, LazyArg_js_1.LazyArg.create(context => {
                        return context.puppeteerUtil;
                    }), (0, Function_js_1.stringifyFunction)(this._querySelector), selector, element, visible ? true : hidden ? false : undefined), false);
                    if (signal?.aborted) {
                        throw signal.reason;
                    }
                    if (!(ElementHandleSymbol_js_1._isElementHandle in handle)) {
                        return null;
                    }
                    return await frame.mainRealm().transferHandle(handle);
                }
                catch (e_3) {
                    env_4.error = e_3;
                    env_4.hasError = true;
                }
                finally {
                    __disposeResources(env_4);
                }
            }
            catch (error) {
                if (!(0, ErrorLike_js_1.isErrorLike)(error)) {
                    throw error;
                }
                if (error.name === 'AbortError') {
                    throw error;
                }
                error.message = `Waiting for selector \`${selector}\` failed: ${error.message}`;
                throw error;
            }
        }
        catch (e_4) {
            env_3.error = e_4;
            env_3.hasError = true;
        }
        finally {
            __disposeResources(env_3);
        }
    }
}
exports.QueryHandler = QueryHandler;
//# sourceMappingURL=QueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/ErrorLike.js":
/*!*******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/ErrorLike.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createProtocolErrorMessage = exports.rewriteError = exports.isErrnoException = exports.isErrorLike = void 0;
/**
 * @internal
 */
function isErrorLike(obj) {
    return (typeof obj === 'object' && obj !== null && 'name' in obj && 'message' in obj);
}
exports.isErrorLike = isErrorLike;
/**
 * @internal
 */
function isErrnoException(obj) {
    return (isErrorLike(obj) &&
        ('errno' in obj || 'code' in obj || 'path' in obj || 'syscall' in obj));
}
exports.isErrnoException = isErrnoException;
/**
 * @internal
 */
function rewriteError(error, message, originalMessage) {
    error.message = message;
    error.originalMessage = originalMessage ?? error.originalMessage;
    return error;
}
exports.rewriteError = rewriteError;
/**
 * @internal
 */
function createProtocolErrorMessage(object) {
    let message = object.error.message;
    // TODO: remove the type checks when we stop connecting to BiDi with a CDP
    // client.
    if (object.error &&
        typeof object.error === 'object' &&
        'data' in object.error) {
        message += ` ${object.error.data}`;
    }
    return message;
}
exports.createProtocolErrorMessage = createProtocolErrorMessage;
//# sourceMappingURL=ErrorLike.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Function.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Function.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.interpolateFunction = exports.stringifyFunction = exports.createFunction = void 0;
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const createdFunctions = new Map();
/**
 * Creates a function from a string.
 *
 * @internal
 */
const createFunction = (functionValue) => {
    let fn = createdFunctions.get(functionValue);
    if (fn) {
        return fn;
    }
    fn = new Function(`return ${functionValue}`)();
    createdFunctions.set(functionValue, fn);
    return fn;
};
exports.createFunction = createFunction;
/**
 * @internal
 */
function stringifyFunction(fn) {
    let value = fn.toString();
    try {
        new Function(`(${value})`);
    }
    catch (err) {
        if (err.message.includes(`Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive`)) {
            // The content security policy does not allow Function eval. Let's
            // assume the value might be valid as is.
            return value;
        }
        // This means we might have a function shorthand (e.g. `test(){}`). Let's
        // try prefixing.
        let prefix = 'function ';
        if (value.startsWith('async ')) {
            prefix = `async ${prefix}`;
            value = value.substring('async '.length);
        }
        value = `${prefix}${value}`;
        try {
            new Function(`(${value})`);
        }
        catch {
            // We tried hard to serialize, but there's a weird beast here.
            throw new Error('Passed function cannot be serialized!');
        }
    }
    return value;
}
exports.stringifyFunction = stringifyFunction;
/**
 * Replaces `PLACEHOLDER`s with the given replacements.
 *
 * All replacements must be valid JS code.
 *
 * @example
 *
 * ```ts
 * interpolateFunction(() => PLACEHOLDER('test'), {test: 'void 0'});
 * // Equivalent to () => void 0
 * ```
 *
 * @internal
 */
const interpolateFunction = (fn, replacements) => {
    let value = stringifyFunction(fn);
    for (const [name, jsValue] of Object.entries(replacements)) {
        value = value.replace(new RegExp(`PLACEHOLDER\\(\\s*(?:'${name}'|"${name}")\\s*\\)`, 'g'), 
        // Wrapping this ensures tersers that accidentally inline PLACEHOLDER calls
        // are still valid. Without, we may get calls like ()=>{...}() which is
        // not valid.
        `(${jsValue})`);
    }
    return (0, exports.createFunction)(value);
};
exports.interpolateFunction = interpolateFunction;
//# sourceMappingURL=Function.js.map

/***/ })

}]);