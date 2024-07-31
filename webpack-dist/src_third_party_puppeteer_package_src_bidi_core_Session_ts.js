"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_core_Session_ts"],{

/***/ "./src/third_party/puppeteer/package/src/bidi/core/Session.ts":
/*!********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/core/Session.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Session: () => (/* binding */ Session)
/* harmony export */ });
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/decorators.js */ "./src/third_party/puppeteer/package/src/util/decorators.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/* harmony import */ var _Browser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Browser.js */ "./src/third_party/puppeteer/package/src/bidi/core/Browser.ts");
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




/**
 * @internal
 */
let Session = (() => {
    var _Session_instances, _a, _Session_reason, _Session_disposables, _Session_info, _Session_initialize, _Session_connection_accessor_storage;
    let _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;
    let _instanceExtraInitializers = [];
    let _connection_decorators;
    let _connection_initializers = [];
    let _connection_extraInitializers = [];
    let _dispose_decorators;
    let _send_decorators;
    let _subscribe_decorators;
    let _addIntercepts_decorators;
    let _end_decorators;
    return _a = class Session extends _classSuper {
            static async from(connection, capabilities) {
                const { result } = await connection.send('session.new', {
                    capabilities,
                });
                const session = new _a(connection, result);
                await __classPrivateFieldGet(session, _Session_instances, "m", _Session_initialize).call(session);
                return session;
            }
            get connection() { return __classPrivateFieldGet(this, _Session_connection_accessor_storage, "f"); }
            set connection(value) { __classPrivateFieldSet(this, _Session_connection_accessor_storage, value, "f"); }
            constructor(connection, info) {
                super();
                _Session_instances.add(this);
                _Session_reason.set(this, __runInitializers(this, _instanceExtraInitializers));
                _Session_disposables.set(this, new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack());
                _Session_info.set(this, void 0);
                Object.defineProperty(this, "browser", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                _Session_connection_accessor_storage.set(this, __runInitializers(this, _connection_initializers, void 0));
                __runInitializers(this, _connection_extraInitializers);
                __classPrivateFieldSet(this, _Session_info, info, "f");
                this.connection = connection;
            }
            get capabilities() {
                return __classPrivateFieldGet(this, _Session_info, "f").capabilities;
            }
            get disposed() {
                return this.ended;
            }
            get ended() {
                return __classPrivateFieldGet(this, _Session_reason, "f") !== undefined;
            }
            get id() {
                return __classPrivateFieldGet(this, _Session_info, "f").sessionId;
            }
            dispose(reason) {
                __classPrivateFieldSet(this, _Session_reason, reason, "f");
                this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
            }
            /**
             * Currently, there is a 1:1 relationship between the session and the
             * session. In the future, we might support multiple sessions and in that
             * case we always needs to make sure that the session for the right session
             * object is used, so we implement this method here, although it's not defined
             * in the spec.
             */
            async send(method, params) {
                return await this.connection.send(method, params);
            }
            async subscribe(events, contexts) {
                await this.send('session.subscribe', {
                    events,
                    contexts,
                });
            }
            async addIntercepts(events, contexts) {
                await this.send('session.subscribe', {
                    events,
                    contexts,
                });
            }
            async end() {
                try {
                    await this.send('session.end', {});
                }
                finally {
                    this.dispose(`Session already ended.`);
                }
            }
            [(_Session_reason = new WeakMap(), _Session_disposables = new WeakMap(), _Session_info = new WeakMap(), _Session_instances = new WeakSet(), _Session_connection_accessor_storage = new WeakMap(), _Session_initialize = async function _Session_initialize() {
                // SAFETY: We use `any` to allow assignment of the readonly property.
                this.browser = await _Browser_js__WEBPACK_IMPORTED_MODULE_3__.Browser.from(this);
                const browserEmitter = __classPrivateFieldGet(this, _Session_disposables, "f").use(this.browser);
                browserEmitter.once('closed', ({ reason }) => {
                    this.dispose(reason);
                });
                // TODO: Currently, some implementations do not emit navigationStarted event
                // for fragment navigations (as per spec) and some do. This could emits a
                // synthetic navigationStarted to work around this inconsistency.
                const seen = new WeakSet();
                this.on('browsingContext.fragmentNavigated', info => {
                    if (seen.has(info)) {
                        return;
                    }
                    seen.add(info);
                    this.emit('browsingContext.navigationStarted', info);
                    this.emit('browsingContext.fragmentNavigated', info);
                });
            }, _connection_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.bubble)()], _dispose_decorators = [_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.inertIfDisposed], _send_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(session => {
                    // SAFETY: By definition of `disposed`, `#reason` is defined.
                    return __classPrivateFieldGet(session, _Session_reason, "f");
                })], _subscribe_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(session => {
                    // SAFETY: By definition of `disposed`, `#reason` is defined.
                    return __classPrivateFieldGet(session, _Session_reason, "f");
                })], _addIntercepts_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(session => {
                    // SAFETY: By definition of `disposed`, `#reason` is defined.
                    return __classPrivateFieldGet(session, _Session_reason, "f");
                })], _end_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(session => {
                    // SAFETY: By definition of `disposed`, `#reason` is defined.
                    return __classPrivateFieldGet(session, _Session_reason, "f");
                })], _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol)]() {
                __classPrivateFieldSet(this, _Session_reason, __classPrivateFieldGet(this, _Session_reason, "f") ?? 'Session already destroyed, probably because the connection broke.', "f");
                this.emit('ended', { reason: __classPrivateFieldGet(this, _Session_reason, "f") });
                __classPrivateFieldGet(this, _Session_disposables, "f").dispose();
                super[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(_a, null, _connection_decorators, { kind: "accessor", name: "connection", static: false, private: false, access: { has: obj => "connection" in obj, get: obj => obj.connection, set: (obj, value) => { obj.connection = value; } }, metadata: _metadata }, _connection_initializers, _connection_extraInitializers);
            __esDecorate(_a, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _send_decorators, { kind: "method", name: "send", static: false, private: false, access: { has: obj => "send" in obj, get: obj => obj.send }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _subscribe_decorators, { kind: "method", name: "subscribe", static: false, private: false, access: { has: obj => "subscribe" in obj, get: obj => obj.subscribe }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _addIntercepts_decorators, { kind: "method", name: "addIntercepts", static: false, private: false, access: { has: obj => "addIntercepts" in obj, get: obj => obj.addIntercepts }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _end_decorators, { kind: "method", name: "end", static: false, private: false, access: { has: obj => "end" in obj, get: obj => obj.end }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();



/***/ })

}]);