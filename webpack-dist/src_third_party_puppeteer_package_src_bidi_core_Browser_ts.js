"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_core_Browser_ts"],{

/***/ "./src/third_party/puppeteer/package/src/bidi/core/Browser.ts":
/*!********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/core/Browser.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Browser: () => (/* binding */ Browser)
/* harmony export */ });
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/decorators.js */ "./src/third_party/puppeteer/package/src/util/decorators.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/* harmony import */ var _Realm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Realm.js */ "./src/third_party/puppeteer/package/src/bidi/core/Realm.ts");
/* harmony import */ var _UserContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserContext.js */ "./src/third_party/puppeteer/package/src/bidi/core/UserContext.ts");
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
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





/**
 * @internal
 */
let Browser = (() => {
    var _Browser_instances, _a, _Browser_closed, _Browser_reason, _Browser_disposables, _Browser_userContexts, _Browser_sharedWorkers, _Browser_initialize, _Browser_syncUserContexts, _Browser_syncBrowsingContexts, _Browser_createUserContext;
    let _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    let _close_decorators;
    let _addPreloadScript_decorators;
    let _removeIntercept_decorators;
    let _removePreloadScript_decorators;
    let _createUserContext_decorators;
    return _a = class Browser extends _classSuper {
            static async from(session) {
                const browser = new _a(session);
                await __classPrivateFieldGet(browser, _Browser_instances, "m", _Browser_initialize).call(browser);
                return browser;
            }
            constructor(session) {
                super();
                _Browser_instances.add(this);
                _Browser_closed.set(this, (__runInitializers(this, _instanceExtraInitializers), false));
                _Browser_reason.set(this, void 0);
                _Browser_disposables.set(this, new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack());
                _Browser_userContexts.set(this, new Map());
                Object.defineProperty(this, "session", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                _Browser_sharedWorkers.set(this, new Map());
                this.session = session;
            }
            get closed() {
                return __classPrivateFieldGet(this, _Browser_closed, "f");
            }
            get defaultUserContext() {
                // SAFETY: A UserContext is always created for the default context.
                return __classPrivateFieldGet(this, _Browser_userContexts, "f").get(_UserContext_js__WEBPACK_IMPORTED_MODULE_4__.UserContext.DEFAULT);
            }
            get disconnected() {
                return __classPrivateFieldGet(this, _Browser_reason, "f") !== undefined;
            }
            get disposed() {
                return this.disconnected;
            }
            get userContexts() {
                return __classPrivateFieldGet(this, _Browser_userContexts, "f").values();
            }
            dispose(reason, closed = false) {
                __classPrivateFieldSet(this, _Browser_closed, closed, "f");
                __classPrivateFieldSet(this, _Browser_reason, reason, "f");
                this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
            }
            async close() {
                try {
                    await this.session.send('browser.close', {});
                }
                finally {
                    this.dispose('Browser already closed.', true);
                }
            }
            async addPreloadScript(functionDeclaration, options = {}) {
                const { result: { script }, } = await this.session.send('script.addPreloadScript', {
                    functionDeclaration,
                    ...options,
                    contexts: options.contexts?.map(context => {
                        return context.id;
                    }),
                });
                return script;
            }
            async removeIntercept(intercept) {
                await this.session.send('network.removeIntercept', {
                    intercept,
                });
            }
            async removePreloadScript(script) {
                await this.session.send('script.removePreloadScript', {
                    script,
                });
            }
            async createUserContext() {
                const { result: { userContext: context }, } = await this.session.send('browser.createUserContext', {});
                return __classPrivateFieldGet(this, _Browser_instances, "m", _Browser_createUserContext).call(this, context);
            }
            [(_Browser_closed = new WeakMap(), _Browser_reason = new WeakMap(), _Browser_disposables = new WeakMap(), _Browser_userContexts = new WeakMap(), _Browser_sharedWorkers = new WeakMap(), _Browser_instances = new WeakSet(), _Browser_initialize = async function _Browser_initialize() {
                const sessionEmitter = __classPrivateFieldGet(this, _Browser_disposables, "f").use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.session));
                sessionEmitter.once('ended', ({ reason }) => {
                    this.dispose(reason);
                });
                sessionEmitter.on('script.realmCreated', info => {
                    if (info.type !== 'shared-worker') {
                        return;
                    }
                    __classPrivateFieldGet(this, _Browser_sharedWorkers, "f").set(info.realm, _Realm_js__WEBPACK_IMPORTED_MODULE_3__.SharedWorkerRealm.from(this, info.realm, info.origin));
                });
                await __classPrivateFieldGet(this, _Browser_instances, "m", _Browser_syncUserContexts).call(this);
                await __classPrivateFieldGet(this, _Browser_instances, "m", _Browser_syncBrowsingContexts).call(this);
            }, _Browser_syncUserContexts = async function _Browser_syncUserContexts() {
                const { result: { userContexts }, } = await this.session.send('browser.getUserContexts', {});
                for (const context of userContexts) {
                    __classPrivateFieldGet(this, _Browser_instances, "m", _Browser_createUserContext).call(this, context.userContext);
                }
            }, _Browser_syncBrowsingContexts = async function _Browser_syncBrowsingContexts() {
                // In case contexts are created or destroyed during `getTree`, we use this
                // set to detect them.
                const contextIds = new Set();
                let contexts;
                {
                    const env_1 = { stack: [], error: void 0, hasError: false };
                    try {
                        const sessionEmitter = __addDisposableResource(env_1, new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.session), false);
                        sessionEmitter.on('browsingContext.contextCreated', info => {
                            contextIds.add(info.context);
                        });
                        const { result } = await this.session.send('browsingContext.getTree', {});
                        contexts = result.contexts;
                    }
                    catch (e_1) {
                        env_1.error = e_1;
                        env_1.hasError = true;
                    }
                    finally {
                        __disposeResources(env_1);
                    }
                }
                // Simulating events so contexts are created naturally.
                for (const info of contexts) {
                    if (!contextIds.has(info.context)) {
                        this.session.emit('browsingContext.contextCreated', info);
                    }
                    if (info.children) {
                        contexts.push(...info.children);
                    }
                }
            }, _Browser_createUserContext = function _Browser_createUserContext(id) {
                const userContext = _UserContext_js__WEBPACK_IMPORTED_MODULE_4__.UserContext.create(this, id);
                __classPrivateFieldGet(this, _Browser_userContexts, "f").set(userContext.id, userContext);
                const userContextEmitter = __classPrivateFieldGet(this, _Browser_disposables, "f").use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(userContext));
                userContextEmitter.once('closed', () => {
                    userContextEmitter.removeAllListeners();
                    __classPrivateFieldGet(this, _Browser_userContexts, "f").delete(userContext.id);
                });
                return userContext;
            }, _dispose_decorators = [_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.inertIfDisposed], _close_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(browser => {
                    // SAFETY: By definition of `disposed`, `#reason` is defined.
                    return __classPrivateFieldGet(browser, _Browser_reason, "f");
                })], _addPreloadScript_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(browser => {
                    // SAFETY: By definition of `disposed`, `#reason` is defined.
                    return __classPrivateFieldGet(browser, _Browser_reason, "f");
                })], _removeIntercept_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(browser => {
                    // SAFETY: By definition of `disposed`, `#reason` is defined.
                    return __classPrivateFieldGet(browser, _Browser_reason, "f");
                })], _removePreloadScript_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(browser => {
                    // SAFETY: By definition of `disposed`, `#reason` is defined.
                    return __classPrivateFieldGet(browser, _Browser_reason, "f");
                })], _createUserContext_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(browser => {
                    // SAFETY: By definition of `disposed`, `#reason` is defined.
                    return __classPrivateFieldGet(browser, _Browser_reason, "f");
                })], _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol)]() {
                __classPrivateFieldSet(this, _Browser_reason, __classPrivateFieldGet(this, _Browser_reason, "f") ?? 'Browser was disconnected, probably because the session ended.', "f");
                if (this.closed) {
                    this.emit('closed', { reason: __classPrivateFieldGet(this, _Browser_reason, "f") });
                }
                this.emit('disconnected', { reason: __classPrivateFieldGet(this, _Browser_reason, "f") });
                __classPrivateFieldGet(this, _Browser_disposables, "f").dispose();
                super[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(_a, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _close_decorators, { kind: "method", name: "close", static: false, private: false, access: { has: obj => "close" in obj, get: obj => obj.close }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _addPreloadScript_decorators, { kind: "method", name: "addPreloadScript", static: false, private: false, access: { has: obj => "addPreloadScript" in obj, get: obj => obj.addPreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _removeIntercept_decorators, { kind: "method", name: "removeIntercept", static: false, private: false, access: { has: obj => "removeIntercept" in obj, get: obj => obj.removeIntercept }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _removePreloadScript_decorators, { kind: "method", name: "removePreloadScript", static: false, private: false, access: { has: obj => "removePreloadScript" in obj, get: obj => obj.removePreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _createUserContext_decorators, { kind: "method", name: "createUserContext", static: false, private: false, access: { has: obj => "createUserContext" in obj, get: obj => obj.createUserContext }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();



/***/ })

}]);