"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_core_UserPrompt_ts-src_third_party_puppeteer_packa-6cb2db"],{

/***/ "./src/third_party/puppeteer/package/src/bidi/core/UserPrompt.ts":
/*!***********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/core/UserPrompt.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserPrompt: () => (/* binding */ UserPrompt)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/decorators.js */ "./src/third_party/puppeteer/package/src/util/decorators.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
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
let UserPrompt = (() => {
    var _UserPrompt_instances, _a, _UserPrompt_reason, _UserPrompt_result, _UserPrompt_disposables, _UserPrompt_initialize, _UserPrompt_session_get;
    let _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    let _handle_decorators;
    return _a = class UserPrompt extends _classSuper {
            static from(browsingContext, info) {
                const userPrompt = new _a(browsingContext, info);
                __classPrivateFieldGet(userPrompt, _UserPrompt_instances, "m", _UserPrompt_initialize).call(userPrompt);
                return userPrompt;
            }
            constructor(context, info) {
                super();
                _UserPrompt_instances.add(this);
                _UserPrompt_reason.set(this, __runInitializers(this, _instanceExtraInitializers));
                _UserPrompt_result.set(this, void 0);
                _UserPrompt_disposables.set(this, new _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.DisposableStack());
                Object.defineProperty(this, "browsingContext", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                Object.defineProperty(this, "info", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                this.browsingContext = context;
                this.info = info;
            }
            get closed() {
                return __classPrivateFieldGet(this, _UserPrompt_reason, "f") !== undefined;
            }
            get disposed() {
                return this.closed;
            }
            get handled() {
                if (this.info.handler === Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).UserPromptHandlerType.Accept ||
                    this.info.handler === Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).UserPromptHandlerType.Dismiss) {
                    return true;
                }
                return __classPrivateFieldGet(this, _UserPrompt_result, "f") !== undefined;
            }
            get result() {
                return __classPrivateFieldGet(this, _UserPrompt_result, "f");
            }
            dispose(reason) {
                __classPrivateFieldSet(this, _UserPrompt_reason, reason, "f");
                this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.disposeSymbol]();
            }
            async handle(options = {}) {
                await __classPrivateFieldGet(this, _UserPrompt_instances, "a", _UserPrompt_session_get).send('browsingContext.handleUserPrompt', {
                    ...options,
                    context: this.info.context,
                });
                // SAFETY: `handled` is triggered before the above promise resolved.
                return __classPrivateFieldGet(this, _UserPrompt_result, "f");
            }
            [(_UserPrompt_reason = new WeakMap(), _UserPrompt_result = new WeakMap(), _UserPrompt_disposables = new WeakMap(), _UserPrompt_instances = new WeakSet(), _UserPrompt_initialize = function _UserPrompt_initialize() {
                const browserContextEmitter = __classPrivateFieldGet(this, _UserPrompt_disposables, "f").use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(this.browsingContext));
                browserContextEmitter.once('closed', ({ reason }) => {
                    this.dispose(`User prompt already closed: ${reason}`);
                });
                const sessionEmitter = __classPrivateFieldGet(this, _UserPrompt_disposables, "f").use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(__classPrivateFieldGet(this, _UserPrompt_instances, "a", _UserPrompt_session_get)));
                sessionEmitter.on('browsingContext.userPromptClosed', parameters => {
                    if (parameters.context !== this.browsingContext.id) {
                        return;
                    }
                    __classPrivateFieldSet(this, _UserPrompt_result, parameters, "f");
                    this.emit('handled', parameters);
                    this.dispose('User prompt already handled.');
                });
            }, _UserPrompt_session_get = function _UserPrompt_session_get() {
                return this.browsingContext.userContext.browser.session;
            }, _dispose_decorators = [_util_decorators_js__WEBPACK_IMPORTED_MODULE_2__.inertIfDisposed], _handle_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_2__.throwIfDisposed)(prompt => {
                    // SAFETY: Disposal implies this exists.
                    return __classPrivateFieldGet(prompt, _UserPrompt_reason, "f");
                })], _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.disposeSymbol)]() {
                __classPrivateFieldSet(this, _UserPrompt_reason, __classPrivateFieldGet(this, _UserPrompt_reason, "f") ?? 'User prompt already closed, probably because the associated browsing context was destroyed.', "f");
                this.emit('closed', { reason: __classPrivateFieldGet(this, _UserPrompt_reason, "f") });
                __classPrivateFieldGet(this, _UserPrompt_disposables, "f").dispose();
                super[_util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.disposeSymbol]();
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(_a, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _handle_decorators, { kind: "method", name: "handle", static: false, private: false, access: { has: obj => "handle" in obj, get: obj => obj.handle }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();



/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/Errors.ts":
/*!****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/Errors.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtocolError: () => (/* binding */ ProtocolError),
/* harmony export */   PuppeteerError: () => (/* binding */ PuppeteerError),
/* harmony export */   TargetCloseError: () => (/* binding */ TargetCloseError),
/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),
/* harmony export */   UnsupportedOperation: () => (/* binding */ UnsupportedOperation)
/* harmony export */ });
/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ProtocolError_code, _ProtocolError_originalMessage;
/**
 * The base class for all Puppeteer-specific errors
 *
 * @public
 */
class PuppeteerError extends Error {
    /**
     * @internal
     */
    constructor(message, options) {
        super(message, options);
        this.name = this.constructor.name;
    }
    /**
     * @internal
     */
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
}
/**
 * TimeoutError is emitted whenever certain operations are terminated due to
 * timeout.
 *
 * @remarks
 * Example operations are {@link Page.waitForSelector | page.waitForSelector} or
 * {@link PuppeteerNode.launch | puppeteer.launch}.
 *
 * @public
 */
class TimeoutError extends PuppeteerError {
}
/**
 * ProtocolError is emitted whenever there is an error from the protocol.
 *
 * @public
 */
class ProtocolError extends PuppeteerError {
    constructor() {
        super(...arguments);
        _ProtocolError_code.set(this, void 0);
        _ProtocolError_originalMessage.set(this, '');
    }
    set code(code) {
        __classPrivateFieldSet(this, _ProtocolError_code, code, "f");
    }
    /**
     * @readonly
     * @public
     */
    get code() {
        return __classPrivateFieldGet(this, _ProtocolError_code, "f");
    }
    set originalMessage(originalMessage) {
        __classPrivateFieldSet(this, _ProtocolError_originalMessage, originalMessage, "f");
    }
    /**
     * @readonly
     * @public
     */
    get originalMessage() {
        return __classPrivateFieldGet(this, _ProtocolError_originalMessage, "f");
    }
}
_ProtocolError_code = new WeakMap(), _ProtocolError_originalMessage = new WeakMap();
/**
 * Puppeteer will throw this error if a method is not
 * supported by the currently used protocol
 *
 * @public
 */
class UnsupportedOperation extends PuppeteerError {
}
/**
 * @internal
 */
class TargetCloseError extends ProtocolError {
}


/***/ })

}]);