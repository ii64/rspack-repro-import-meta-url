"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_ExposedFunction_ts"],{

/***/ "./src/third_party/puppeteer/package/src/bidi/ExposedFunction.ts":
/*!***********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/ExposedFunction.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExposeableFunction: () => (/* binding */ ExposeableFunction)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/* harmony import */ var _util_Function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Function.js */ "./src/third_party/puppeteer/package/src/util/Function.ts");
/* harmony import */ var _ElementHandle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementHandle.js */ "./src/third_party/puppeteer/package/src/bidi/ElementHandle.ts");
/* harmony import */ var _JSHandle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/src/bidi/JSHandle.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
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
var _ExposeableFunction_instances, _ExposeableFunction_frame, _ExposeableFunction_apply, _ExposeableFunction_isolate, _ExposeableFunction_channel, _ExposeableFunction_scripts, _ExposeableFunction_disposables, _ExposeableFunction_initialize, _ExposeableFunction_connection_get, _ExposeableFunction_handleMessage, _ExposeableFunction_getRealm, _ExposeableFunction_findFrame;







/**
 * @internal
 */
class ExposeableFunction {
    static async from(frame, name, apply, isolate = false) {
        const func = new ExposeableFunction(frame, name, apply, isolate);
        await __classPrivateFieldGet(func, _ExposeableFunction_instances, "m", _ExposeableFunction_initialize).call(func);
        return func;
    }
    constructor(frame, name, apply, isolate = false) {
        _ExposeableFunction_instances.add(this);
        _ExposeableFunction_frame.set(this, void 0);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _ExposeableFunction_apply.set(this, void 0);
        _ExposeableFunction_isolate.set(this, void 0);
        _ExposeableFunction_channel.set(this, void 0);
        _ExposeableFunction_scripts.set(this, []);
        _ExposeableFunction_disposables.set(this, new _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.DisposableStack());
        _ExposeableFunction_handleMessage.set(this, async (params) => {
            const env_1 = { stack: [], error: void 0, hasError: false };
            try {
                if (params.channel !== __classPrivateFieldGet(this, _ExposeableFunction_channel, "f")) {
                    return;
                }
                const realm = __classPrivateFieldGet(this, _ExposeableFunction_instances, "m", _ExposeableFunction_getRealm).call(this, params.source);
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
                    result = await __classPrivateFieldGet(this, _ExposeableFunction_apply, "f").call(this, ...(await Promise.all(args)));
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
        });
        __classPrivateFieldSet(this, _ExposeableFunction_frame, frame, "f");
        this.name = name;
        __classPrivateFieldSet(this, _ExposeableFunction_apply, apply, "f");
        __classPrivateFieldSet(this, _ExposeableFunction_isolate, isolate, "f");
        __classPrivateFieldSet(this, _ExposeableFunction_channel, `__puppeteer__${__classPrivateFieldGet(this, _ExposeableFunction_frame, "f")._id}_page_exposeFunction_${this.name}`, "f");
    }
    [(_ExposeableFunction_frame = new WeakMap(), _ExposeableFunction_apply = new WeakMap(), _ExposeableFunction_isolate = new WeakMap(), _ExposeableFunction_channel = new WeakMap(), _ExposeableFunction_scripts = new WeakMap(), _ExposeableFunction_disposables = new WeakMap(), _ExposeableFunction_handleMessage = new WeakMap(), _ExposeableFunction_instances = new WeakSet(), _ExposeableFunction_initialize = async function _ExposeableFunction_initialize() {
        const connection = __classPrivateFieldGet(this, _ExposeableFunction_instances, "a", _ExposeableFunction_connection_get);
        const channel = {
            type: 'channel',
            value: {
                channel: __classPrivateFieldGet(this, _ExposeableFunction_channel, "f"),
                ownership: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ResultOwnership.Root,
            },
        };
        const connectionEmitter = __classPrivateFieldGet(this, _ExposeableFunction_disposables, "f").use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(connection));
        connectionEmitter.on(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Script.EventNames.Message, __classPrivateFieldGet(this, _ExposeableFunction_handleMessage, "f"));
        const functionDeclaration = (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_4__.stringifyFunction)((0,_util_Function_js__WEBPACK_IMPORTED_MODULE_4__.interpolateFunction)((callback) => {
            Object.assign(globalThis, {
                [PLACEHOLDER('name')]: function (...args) {
                    return new Promise((resolve, reject) => {
                        callback([resolve, reject, args]);
                    });
                },
            });
        }, { name: JSON.stringify(this.name) }));
        const frames = [__classPrivateFieldGet(this, _ExposeableFunction_frame, "f")];
        for (const frame of frames) {
            frames.push(...frame.childFrames());
        }
        await Promise.all(frames.map(async (frame) => {
            const realm = __classPrivateFieldGet(this, _ExposeableFunction_isolate, "f") ? frame.isolatedRealm() : frame.mainRealm();
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
                __classPrivateFieldGet(this, _ExposeableFunction_scripts, "f").push([frame, script]);
            }
            catch (error) {
                // If it errors, the frame probably doesn't support call function. We
                // fail gracefully.
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)(error);
            }
        }));
    }, _ExposeableFunction_connection_get = function _ExposeableFunction_connection_get() {
        return __classPrivateFieldGet(this, _ExposeableFunction_frame, "f").page().browser().connection;
    }, _ExposeableFunction_getRealm = function _ExposeableFunction_getRealm(source) {
        const frame = __classPrivateFieldGet(this, _ExposeableFunction_instances, "m", _ExposeableFunction_findFrame).call(this, source.context);
        if (!frame) {
            // Unrelated message.
            return;
        }
        return frame.realm(source.realm);
    }, _ExposeableFunction_findFrame = function _ExposeableFunction_findFrame(id) {
        const frames = [__classPrivateFieldGet(this, _ExposeableFunction_frame, "f")];
        for (const frame of frames) {
            if (frame._id === id) {
                return frame;
            }
            frames.push(...frame.childFrames());
        }
        return;
    }, Symbol.dispose)]() {
        void this[Symbol.asyncDispose]().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
    }
    async [Symbol.asyncDispose]() {
        __classPrivateFieldGet(this, _ExposeableFunction_disposables, "f").dispose();
        await Promise.all(__classPrivateFieldGet(this, _ExposeableFunction_scripts, "f").map(async ([frame, script]) => {
            const realm = __classPrivateFieldGet(this, _ExposeableFunction_isolate, "f") ? frame.isolatedRealm() : frame.mainRealm();
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


/***/ })

}]);