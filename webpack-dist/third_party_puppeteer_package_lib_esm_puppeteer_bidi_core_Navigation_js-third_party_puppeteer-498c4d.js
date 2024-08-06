"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_core_Navigation_js-third_party_puppeteer-498c4d"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Navigation.js":
/*!*********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Navigation.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Navigation: () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
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



/**
 * @internal
 */
let Navigation = (() => {
    var _a;
    let _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    return class Navigation extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(context) {
            const navigation = new Navigation(context);
            navigation.#initialize();
            return navigation;
        }
        #request = __runInitializers(this, _instanceExtraInitializers);
        #navigation;
        #browsingContext;
        #disposables = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack();
        #id;
        constructor(context) {
            super();
            this.#browsingContext = context;
        }
        #initialize() {
            const browsingContextEmitter = this.#disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.#browsingContext));
            browsingContextEmitter.once('closed', () => {
                this.emit('failed', {
                    url: this.#browsingContext.url,
                    timestamp: new Date(),
                });
                this.dispose();
            });
            browsingContextEmitter.on('request', ({ request }) => {
                if (request.navigation === undefined ||
                    // If a request with a navigation ID comes in, then the navigation ID is
                    // for this navigation.
                    !this.#matches(request.navigation)) {
                    return;
                }
                this.#request = request;
                this.emit('request', request);
                const requestEmitter = this.#disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.#request));
                requestEmitter.on('redirect', request => {
                    this.#request = request;
                });
            });
            const sessionEmitter = this.#disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.#session));
            sessionEmitter.on('browsingContext.navigationStarted', info => {
                if (info.context !== this.#browsingContext.id ||
                    this.#navigation !== undefined) {
                    return;
                }
                this.#navigation = Navigation.from(this.#browsingContext);
            });
            for (const eventName of [
                'browsingContext.domContentLoaded',
                'browsingContext.load',
            ]) {
                sessionEmitter.on(eventName, info => {
                    if (info.context !== this.#browsingContext.id ||
                        info.navigation === null ||
                        !this.#matches(info.navigation)) {
                        return;
                    }
                    this.dispose();
                });
            }
            for (const [eventName, event] of [
                ['browsingContext.fragmentNavigated', 'fragment'],
                ['browsingContext.navigationFailed', 'failed'],
                ['browsingContext.navigationAborted', 'aborted'],
            ]) {
                sessionEmitter.on(eventName, info => {
                    if (info.context !== this.#browsingContext.id ||
                        // Note we don't check if `navigation` is null since `null` means the
                        // fragment navigated.
                        !this.#matches(info.navigation)) {
                        return;
                    }
                    this.emit(event, {
                        url: info.url,
                        timestamp: new Date(info.timestamp),
                    });
                    this.dispose();
                });
            }
        }
        #matches(navigation) {
            if (this.#navigation !== undefined && !this.#navigation.disposed) {
                return false;
            }
            if (this.#id === undefined) {
                this.#id = navigation;
                return true;
            }
            return this.#id === navigation;
        }
        get #session() {
            return this.#browsingContext.userContext.browser.session;
        }
        get disposed() {
            return this.#disposables.disposed;
        }
        get request() {
            return this.#request;
        }
        get navigation() {
            return this.#navigation;
        }
        dispose() {
            this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
        }
        [(_dispose_decorators = [_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.inertIfDisposed], _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol)]() {
            this.#disposables.dispose();
            super[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
        }
    };
})();

//# sourceMappingURL=Navigation.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js":
/*!**************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js ***!
  \**************************************************************************/
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
//# sourceMappingURL=Errors.js.map

/***/ })

}]);