"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_api_JSHandle_ts"],{

/***/ "./src/third_party/puppeteer/package/src/api/JSHandle.ts":
/*!***************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/JSHandle.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSHandle: () => (/* binding */ JSHandle)
/* harmony export */ });
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/decorators.js */ "./src/third_party/puppeteer/package/src/util/decorators.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
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
var __setFunctionName = (undefined && undefined.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};



/**
 * Represents a reference to a JavaScript object. Instances can be created using
 * {@link Page.evaluateHandle}.
 *
 * Handles prevent the referenced JavaScript object from being garbage-collected
 * unless the handle is purposely {@link JSHandle.dispose | disposed}. JSHandles
 * are auto-disposed when their associated frame is navigated away or the parent
 * context gets destroyed.
 *
 * Handles can be used as arguments for any evaluation function such as
 * {@link Page.$eval}, {@link Page.evaluate}, and {@link Page.evaluateHandle}.
 * They are resolved to their referenced object.
 *
 * @example
 *
 * ```ts
 * const windowHandle = await page.evaluateHandle(() => window);
 * ```
 *
 * @public
 */
let JSHandle = (() => {
    let _classDecorators = [_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.moveable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getProperty_decorators;
    let _getProperties_decorators;
    var JSHandle = _classThis = class {
        /**
         * @internal
         */
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
        /**
         * Evaluates the given function with the current handle as its first argument.
         */
        async evaluate(pageFunction, ...args) {
            pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.withSourcePuppeteerURLIfNone)(this.evaluate.name, pageFunction);
            return await this.realm.evaluate(pageFunction, this, ...args);
        }
        /**
         * Evaluates the given function with the current handle as its first argument.
         *
         */
        async evaluateHandle(pageFunction, ...args) {
            pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, pageFunction);
            return await this.realm.evaluateHandle(pageFunction, this, ...args);
        }
        /**
         * @internal
         */
        async getProperty(propertyName) {
            return await this.evaluateHandle((object, propertyName) => {
                return object[propertyName];
            }, propertyName);
        }
        /**
         * Gets a map of handles representing the properties of the current handle.
         *
         * @example
         *
         * ```ts
         * const listHandle = await page.evaluateHandle(() => document.body.children);
         * const properties = await listHandle.getProperties();
         * const children = [];
         * for (const property of properties.values()) {
         *   const element = property.asElement();
         *   if (element) {
         *     children.push(element);
         *   }
         * }
         * children; // holds elementHandles to all children of document.body
         * ```
         */
        async getProperties() {
            const propertyNames = await this.evaluate(object => {
                const enumerableProperties = [];
                const descriptors = Object.getOwnPropertyDescriptors(object);
                for (const propertyName in descriptors) {
                    if (descriptors[propertyName]?.enumerable) {
                        enumerableProperties.push(propertyName);
                    }
                }
                return enumerableProperties;
            });
            const map = new Map();
            const results = await Promise.all(propertyNames.map(key => {
                return this.getProperty(key);
            }));
            for (const [key, value] of Object.entries(propertyNames)) {
                const env_1 = { stack: [], error: void 0, hasError: false };
                try {
                    const handle = __addDisposableResource(env_1, results[key], false);
                    if (handle) {
                        map.set(value, handle.move());
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
            return map;
        }
        /** @internal */
        [(_getProperty_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)()], _getProperties_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)()], _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol)]() {
            return void this.dispose().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_0__.debugError);
        }
        /** @internal */
        [_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.asyncDisposeSymbol]() {
            return this.dispose();
        }
    };
    __setFunctionName(_classThis, "JSHandle");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(_classThis, null, _getProperty_decorators, { kind: "method", name: "getProperty", static: false, private: false, access: { has: obj => "getProperty" in obj, get: obj => obj.getProperty }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getProperties_decorators, { kind: "method", name: "getProperties", static: false, private: false, access: { has: obj => "getProperties" in obj, get: obj => obj.getProperties }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        JSHandle = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return JSHandle = _classThis;
})();



/***/ })

}]);