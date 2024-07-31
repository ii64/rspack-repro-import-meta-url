"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_core_Realm_ts"],{

/***/ "./src/third_party/puppeteer/package/src/bidi/core/Realm.ts":
/*!******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/core/Realm.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DedicatedWorkerRealm: () => (/* binding */ DedicatedWorkerRealm),
/* harmony export */   Realm: () => (/* binding */ Realm),
/* harmony export */   SharedWorkerRealm: () => (/* binding */ SharedWorkerRealm),
/* harmony export */   WindowRealm: () => (/* binding */ WindowRealm)
/* harmony export */ });
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/decorators.js */ "./src/third_party/puppeteer/package/src/util/decorators.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
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
var _WindowRealm_instances, _WindowRealm_workers, _WindowRealm_initialize, _DedicatedWorkerRealm_instances, _a, _DedicatedWorkerRealm_workers, _DedicatedWorkerRealm_initialize, _SharedWorkerRealm_instances, _SharedWorkerRealm_workers, _SharedWorkerRealm_initialize;



/**
 * @internal
 */
let Realm = (() => {
    var _b, _Realm_reason;
    let _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    let _disown_decorators;
    let _callFunction_decorators;
    let _evaluate_decorators;
    let _resolveExecutionContextId_decorators;
    return _b = class Realm extends _classSuper {
            constructor(id, origin) {
                super();
                _Realm_reason.set(this, __runInitializers(this, _instanceExtraInitializers));
                Object.defineProperty(this, "disposables", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack()
                });
                Object.defineProperty(this, "id", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                Object.defineProperty(this, "origin", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                Object.defineProperty(this, "executionContextId", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                this.id = id;
                this.origin = origin;
            }
            get disposed() {
                return __classPrivateFieldGet(this, _Realm_reason, "f") !== undefined;
            }
            get target() {
                return { realm: this.id };
            }
            dispose(reason) {
                __classPrivateFieldSet(this, _Realm_reason, reason, "f");
                this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
            }
            async disown(handles) {
                await this.session.send('script.disown', {
                    target: this.target,
                    handles,
                });
            }
            async callFunction(functionDeclaration, awaitPromise, options = {}) {
                const { result } = await this.session.send('script.callFunction', {
                    functionDeclaration,
                    awaitPromise,
                    target: this.target,
                    ...options,
                });
                return result;
            }
            async evaluate(expression, awaitPromise, options = {}) {
                const { result } = await this.session.send('script.evaluate', {
                    expression,
                    awaitPromise,
                    target: this.target,
                    ...options,
                });
                return result;
            }
            async resolveExecutionContextId() {
                if (!this.executionContextId) {
                    const { result } = await this.session.connection.send('cdp.resolveRealm', { realm: this.id });
                    this.executionContextId = result.executionContextId;
                }
                return this.executionContextId;
            }
            [(_Realm_reason = new WeakMap(), _dispose_decorators = [_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.inertIfDisposed], _disown_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(realm => {
                    // SAFETY: Disposal implies this exists.
                    return __classPrivateFieldGet(realm, _Realm_reason, "f");
                })], _callFunction_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(realm => {
                    // SAFETY: Disposal implies this exists.
                    return __classPrivateFieldGet(realm, _Realm_reason, "f");
                })], _evaluate_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(realm => {
                    // SAFETY: Disposal implies this exists.
                    return __classPrivateFieldGet(realm, _Realm_reason, "f");
                })], _resolveExecutionContextId_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(realm => {
                    // SAFETY: Disposal implies this exists.
                    return __classPrivateFieldGet(realm, _Realm_reason, "f");
                })], _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol)]() {
                __classPrivateFieldSet(this, _Realm_reason, __classPrivateFieldGet(this, _Realm_reason, "f") ?? 'Realm already destroyed, probably because all associated browsing contexts closed.', "f");
                this.emit('destroyed', { reason: __classPrivateFieldGet(this, _Realm_reason, "f") });
                this.disposables.dispose();
                super[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(_b, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_b, null, _disown_decorators, { kind: "method", name: "disown", static: false, private: false, access: { has: obj => "disown" in obj, get: obj => obj.disown }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_b, null, _callFunction_decorators, { kind: "method", name: "callFunction", static: false, private: false, access: { has: obj => "callFunction" in obj, get: obj => obj.callFunction }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_b, null, _evaluate_decorators, { kind: "method", name: "evaluate", static: false, private: false, access: { has: obj => "evaluate" in obj, get: obj => obj.evaluate }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_b, null, _resolveExecutionContextId_decorators, { kind: "method", name: "resolveExecutionContextId", static: false, private: false, access: { has: obj => "resolveExecutionContextId" in obj, get: obj => obj.resolveExecutionContextId }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_b, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _b;
})();

/**
 * @internal
 */
class WindowRealm extends Realm {
    static from(context, sandbox) {
        const realm = new WindowRealm(context, sandbox);
        __classPrivateFieldGet(realm, _WindowRealm_instances, "m", _WindowRealm_initialize).call(realm);
        return realm;
    }
    constructor(context, sandbox) {
        super('', '');
        _WindowRealm_instances.add(this);
        Object.defineProperty(this, "browsingContext", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sandbox", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _WindowRealm_workers.set(this, new Map());
        this.browsingContext = context;
        this.sandbox = sandbox;
    }
    get session() {
        return this.browsingContext.userContext.browser.session;
    }
    get target() {
        return { context: this.browsingContext.id, sandbox: this.sandbox };
    }
}
_WindowRealm_workers = new WeakMap(), _WindowRealm_instances = new WeakSet(), _WindowRealm_initialize = function _WindowRealm_initialize() {
    const browsingContextEmitter = this.disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.browsingContext));
    browsingContextEmitter.on('closed', ({ reason }) => {
        this.dispose(reason);
    });
    const sessionEmitter = this.disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.session));
    sessionEmitter.on('script.realmCreated', info => {
        if (info.type !== 'window' ||
            info.context !== this.browsingContext.id ||
            info.sandbox !== this.sandbox) {
            return;
        }
        this.id = info.realm;
        this.origin = info.origin;
        this.executionContextId = undefined;
        this.emit('updated', this);
    });
    sessionEmitter.on('script.realmCreated', info => {
        if (info.type !== 'dedicated-worker') {
            return;
        }
        if (!info.owners.includes(this.id)) {
            return;
        }
        const realm = DedicatedWorkerRealm.from(this, info.realm, info.origin);
        __classPrivateFieldGet(this, _WindowRealm_workers, "f").set(realm.id, realm);
        const realmEmitter = this.disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(realm));
        realmEmitter.once('destroyed', () => {
            realmEmitter.removeAllListeners();
            __classPrivateFieldGet(this, _WindowRealm_workers, "f").delete(realm.id);
        });
        this.emit('worker', realm);
    });
};
/**
 * @internal
 */
class DedicatedWorkerRealm extends Realm {
    static from(owner, id, origin) {
        const realm = new _a(owner, id, origin);
        __classPrivateFieldGet(realm, _DedicatedWorkerRealm_instances, "m", _DedicatedWorkerRealm_initialize).call(realm);
        return realm;
    }
    constructor(owner, id, origin) {
        super(id, origin);
        _DedicatedWorkerRealm_instances.add(this);
        _DedicatedWorkerRealm_workers.set(this, new Map());
        Object.defineProperty(this, "owners", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.owners = new Set([owner]);
    }
    get session() {
        // SAFETY: At least one owner will exist.
        return this.owners.values().next().value.session;
    }
}
_a = DedicatedWorkerRealm, _DedicatedWorkerRealm_workers = new WeakMap(), _DedicatedWorkerRealm_instances = new WeakSet(), _DedicatedWorkerRealm_initialize = function _DedicatedWorkerRealm_initialize() {
    const sessionEmitter = this.disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.session));
    sessionEmitter.on('script.realmDestroyed', info => {
        if (info.realm !== this.id) {
            return;
        }
        this.dispose('Realm already destroyed.');
    });
    sessionEmitter.on('script.realmCreated', info => {
        if (info.type !== 'dedicated-worker') {
            return;
        }
        if (!info.owners.includes(this.id)) {
            return;
        }
        const realm = _a.from(this, info.realm, info.origin);
        __classPrivateFieldGet(this, _DedicatedWorkerRealm_workers, "f").set(realm.id, realm);
        const realmEmitter = this.disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(realm));
        realmEmitter.once('destroyed', () => {
            __classPrivateFieldGet(this, _DedicatedWorkerRealm_workers, "f").delete(realm.id);
        });
        this.emit('worker', realm);
    });
};
/**
 * @internal
 */
class SharedWorkerRealm extends Realm {
    static from(browser, id, origin) {
        const realm = new SharedWorkerRealm(browser, id, origin);
        __classPrivateFieldGet(realm, _SharedWorkerRealm_instances, "m", _SharedWorkerRealm_initialize).call(realm);
        return realm;
    }
    constructor(browser, id, origin) {
        super(id, origin);
        _SharedWorkerRealm_instances.add(this);
        _SharedWorkerRealm_workers.set(this, new Map());
        Object.defineProperty(this, "browser", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.browser = browser;
    }
    get session() {
        return this.browser.session;
    }
}
_SharedWorkerRealm_workers = new WeakMap(), _SharedWorkerRealm_instances = new WeakSet(), _SharedWorkerRealm_initialize = function _SharedWorkerRealm_initialize() {
    const sessionEmitter = this.disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.session));
    sessionEmitter.on('script.realmDestroyed', info => {
        if (info.realm !== this.id) {
            return;
        }
        this.dispose('Realm already destroyed.');
    });
    sessionEmitter.on('script.realmCreated', info => {
        if (info.type !== 'dedicated-worker') {
            return;
        }
        if (!info.owners.includes(this.id)) {
            return;
        }
        const realm = DedicatedWorkerRealm.from(this, info.realm, info.origin);
        __classPrivateFieldGet(this, _SharedWorkerRealm_workers, "f").set(realm.id, realm);
        const realmEmitter = this.disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(realm));
        realmEmitter.once('destroyed', () => {
            __classPrivateFieldGet(this, _SharedWorkerRealm_workers, "f").delete(realm.id);
        });
        this.emit('worker', realm);
    });
};


/***/ })

}]);