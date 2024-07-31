"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_bidi_core_core_js-src_third_party_puppete-698dba"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/core/Connection.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/core/Connection.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Connection.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/core/Session.js":
/*!**********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/core/Session.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Session = void 0;
const EventEmitter_js_1 = __webpack_require__(/*! ../../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/EventEmitter.js");
const decorators_js_1 = __webpack_require__(/*! ../../util/decorators.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/decorators.js");
const disposable_js_1 = __webpack_require__(/*! ../../util/disposable.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/disposable.js");
const Browser_js_1 = __webpack_require__(/*! ./Browser.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/core/Browser.js");
/**
 * @internal
 */
let Session = (() => {
    let _classSuper = EventEmitter_js_1.EventEmitter;
    let _instanceExtraInitializers = [];
    let _connection_decorators;
    let _connection_initializers = [];
    let _connection_extraInitializers = [];
    let _dispose_decorators;
    let _send_decorators;
    let _subscribe_decorators;
    let _addIntercepts_decorators;
    let _end_decorators;
    return class Session extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(this, null, _connection_decorators, { kind: "accessor", name: "connection", static: false, private: false, access: { has: obj => "connection" in obj, get: obj => obj.connection, set: (obj, value) => { obj.connection = value; } }, metadata: _metadata }, _connection_initializers, _connection_extraInitializers);
            __esDecorate(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _send_decorators, { kind: "method", name: "send", static: false, private: false, access: { has: obj => "send" in obj, get: obj => obj.send }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _subscribe_decorators, { kind: "method", name: "subscribe", static: false, private: false, access: { has: obj => "subscribe" in obj, get: obj => obj.subscribe }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _addIntercepts_decorators, { kind: "method", name: "addIntercepts", static: false, private: false, access: { has: obj => "addIntercepts" in obj, get: obj => obj.addIntercepts }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _end_decorators, { kind: "method", name: "end", static: false, private: false, access: { has: obj => "end" in obj, get: obj => obj.end }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static async from(connection, capabilities) {
            const { result } = await connection.send('session.new', {
                capabilities,
            });
            const session = new Session(connection, result);
            await session.#initialize();
            return session;
        }
        #reason = __runInitializers(this, _instanceExtraInitializers);
        #disposables = new disposable_js_1.DisposableStack();
        #info;
        browser;
        #connection_accessor_storage = __runInitializers(this, _connection_initializers, void 0);
        get connection() { return this.#connection_accessor_storage; }
        set connection(value) { this.#connection_accessor_storage = value; }
        constructor(connection, info) {
            super();
            __runInitializers(this, _connection_extraInitializers);
            this.#info = info;
            this.connection = connection;
        }
        async #initialize() {
            // SAFETY: We use `any` to allow assignment of the readonly property.
            this.browser = await Browser_js_1.Browser.from(this);
            const browserEmitter = this.#disposables.use(this.browser);
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
        }
        get capabilities() {
            return this.#info.capabilities;
        }
        get disposed() {
            return this.ended;
        }
        get ended() {
            return this.#reason !== undefined;
        }
        get id() {
            return this.#info.sessionId;
        }
        dispose(reason) {
            this.#reason = reason;
            this[disposable_js_1.disposeSymbol]();
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
        [(_connection_decorators = [(0, decorators_js_1.bubble)()], _dispose_decorators = [decorators_js_1.inertIfDisposed], _send_decorators = [(0, decorators_js_1.throwIfDisposed)(session => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return session.#reason;
            })], _subscribe_decorators = [(0, decorators_js_1.throwIfDisposed)(session => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return session.#reason;
            })], _addIntercepts_decorators = [(0, decorators_js_1.throwIfDisposed)(session => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return session.#reason;
            })], _end_decorators = [(0, decorators_js_1.throwIfDisposed)(session => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return session.#reason;
            })], disposable_js_1.disposeSymbol)]() {
            this.#reason ??=
                'Session already destroyed, probably because the connection broke.';
            this.emit('ended', { reason: this.#reason });
            this.#disposables.dispose();
            super[disposable_js_1.disposeSymbol]();
        }
    };
})();
exports.Session = Session;
//# sourceMappingURL=Session.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/core/core.js":
/*!*******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/core/core.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Browser.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/core/Browser.js"), exports);
__exportStar(__webpack_require__(/*! ./BrowsingContext.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/core/BrowsingContext.js"), exports);
__exportStar(__webpack_require__(/*! ./Connection.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/core/Connection.js"), exports);
__exportStar(__webpack_require__(/*! ./Navigation.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/core/Navigation.js"), exports);
__exportStar(__webpack_require__(/*! ./Realm.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/core/Realm.js"), exports);
__exportStar(__webpack_require__(/*! ./Request.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/core/Request.js"), exports);
__exportStar(__webpack_require__(/*! ./Session.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/core/Session.js"), exports);
__exportStar(__webpack_require__(/*! ./UserContext.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/core/UserContext.js"), exports);
__exportStar(__webpack_require__(/*! ./UserPrompt.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/core/UserPrompt.js"), exports);
//# sourceMappingURL=core.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TargetCloseError = exports.UnsupportedOperation = exports.ProtocolError = exports.TimeoutError = exports.PuppeteerError = void 0;
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
exports.PuppeteerError = PuppeteerError;
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
exports.TimeoutError = TimeoutError;
/**
 * ProtocolError is emitted whenever there is an error from the protocol.
 *
 * @public
 */
class ProtocolError extends PuppeteerError {
    #code;
    #originalMessage = '';
    set code(code) {
        this.#code = code;
    }
    /**
     * @readonly
     * @public
     */
    get code() {
        return this.#code;
    }
    set originalMessage(originalMessage) {
        this.#originalMessage = originalMessage;
    }
    /**
     * @readonly
     * @public
     */
    get originalMessage() {
        return this.#originalMessage;
    }
}
exports.ProtocolError = ProtocolError;
/**
 * Puppeteer will throw this error if a method is not
 * supported by the currently used protocol
 *
 * @public
 */
class UnsupportedOperation extends PuppeteerError {
}
exports.UnsupportedOperation = UnsupportedOperation;
/**
 * @internal
 */
class TargetCloseError extends ProtocolError {
}
exports.TargetCloseError = TargetCloseError;
//# sourceMappingURL=Errors.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js":
/*!****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assert = void 0;
/**
 * Asserts that the given value is truthy.
 * @param value - some conditional statement
 * @param message - the error message to throw if the value is not truthy.
 *
 * @internal
 */
const assert = (value, message) => {
    if (!value) {
        throw new Error(message);
    }
};
exports.assert = assert;
//# sourceMappingURL=assert.js.map

/***/ })

}]);