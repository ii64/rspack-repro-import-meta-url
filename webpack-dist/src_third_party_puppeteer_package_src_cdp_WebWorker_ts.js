"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_WebWorker_ts"],{

/***/ "./src/third_party/puppeteer/package/src/api/Target.ts":
/*!*************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/Target.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Target: () => (/* binding */ Target),
/* harmony export */   TargetType: () => (/* binding */ TargetType)
/* harmony export */ });
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @public
 */
var TargetType;
(function (TargetType) {
    TargetType["PAGE"] = "page";
    TargetType["BACKGROUND_PAGE"] = "background_page";
    TargetType["SERVICE_WORKER"] = "service_worker";
    TargetType["SHARED_WORKER"] = "shared_worker";
    TargetType["BROWSER"] = "browser";
    TargetType["WEBVIEW"] = "webview";
    TargetType["OTHER"] = "other";
    /**
     * @internal
     */
    TargetType["TAB"] = "tab";
})(TargetType || (TargetType = {}));
/**
 * Target represents a
 * {@link https://chromedevtools.github.io/devtools-protocol/tot/Target/ | CDP target}.
 * In CDP a target is something that can be debugged such a frame, a page or a
 * worker.
 * @public
 */
class Target {
    /**
     * @internal
     */
    constructor() { }
    /**
     * If the target is not of type `"service_worker"` or `"shared_worker"`, returns `null`.
     */
    async worker() {
        return null;
    }
    /**
     * If the target is not of type `"page"`, `"webview"` or `"background_page"`,
     * returns `null`.
     */
    async page() {
        return null;
    }
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/api/WebWorker.ts":
/*!****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/WebWorker.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebWorker: () => (/* binding */ WebWorker)
/* harmony export */ });
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _common_TimeoutSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/TimeoutSettings.js */ "./src/third_party/puppeteer/package/src/common/TimeoutSettings.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
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
var _WebWorker_url;




/**
 * This class represents a
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API | WebWorker}.
 *
 * @remarks
 * The events `workercreated` and `workerdestroyed` are emitted on the page
 * object to signal the worker lifecycle.
 *
 * @example
 *
 * ```ts
 * page.on('workercreated', worker =>
 *   console.log('Worker created: ' + worker.url())
 * );
 * page.on('workerdestroyed', worker =>
 *   console.log('Worker destroyed: ' + worker.url())
 * );
 *
 * console.log('Current workers:');
 * for (const worker of page.workers()) {
 *   console.log('  ' + worker.url());
 * }
 * ```
 *
 * @public
 */
class WebWorker extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter {
    /**
     * @internal
     */
    constructor(url) {
        super();
        /**
         * @internal
         */
        Object.defineProperty(this, "timeoutSettings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _common_TimeoutSettings_js__WEBPACK_IMPORTED_MODULE_2__.TimeoutSettings()
        });
        _WebWorker_url.set(this, void 0);
        __classPrivateFieldSet(this, _WebWorker_url, url, "f");
    }
    /**
     * The URL of this web worker.
     */
    url() {
        return __classPrivateFieldGet(this, _WebWorker_url, "f");
    }
    /**
     * Evaluates a given function in the {@link WebWorker | worker}.
     *
     * @remarks If the given function returns a promise,
     * {@link WebWorker.evaluate | evaluate} will wait for the promise to resolve.
     *
     * As a rule of thumb, if the return value of the given function is more
     * complicated than a JSON object (e.g. most classes), then
     * {@link WebWorker.evaluate | evaluate} will _likely_ return some truncated
     * value (or `{}`). This is because we are not returning the actual return
     * value, but a deserialized version as a result of transferring the return
     * value through a protocol to Puppeteer.
     *
     * In general, you should use
     * {@link WebWorker.evaluateHandle | evaluateHandle} if
     * {@link WebWorker.evaluate | evaluate} cannot serialize the return value
     * properly or you need a mutable {@link JSHandle | handle} to the return
     * object.
     *
     * @param func - Function to be evaluated.
     * @param args - Arguments to pass into `func`.
     * @returns The result of `func`.
     */
    async evaluate(func, ...args) {
        func = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.withSourcePuppeteerURLIfNone)(this.evaluate.name, func);
        return await this.mainRealm().evaluate(func, ...args);
    }
    /**
     * Evaluates a given function in the {@link WebWorker | worker}.
     *
     * @remarks If the given function returns a promise,
     * {@link WebWorker.evaluate | evaluate} will wait for the promise to resolve.
     *
     * In general, you should use
     * {@link WebWorker.evaluateHandle | evaluateHandle} if
     * {@link WebWorker.evaluate | evaluate} cannot serialize the return value
     * properly or you need a mutable {@link JSHandle | handle} to the return
     * object.
     *
     * @param func - Function to be evaluated.
     * @param args - Arguments to pass into `func`.
     * @returns A {@link JSHandle | handle} to the return value of `func`.
     */
    async evaluateHandle(func, ...args) {
        func = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, func);
        return await this.mainRealm().evaluateHandle(func, ...args);
    }
    async close() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.UnsupportedOperation('WebWorker.close() is not supported');
    }
}
_WebWorker_url = new WeakMap();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/cdp/WebWorker.ts":
/*!****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/WebWorker.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpWebWorker: () => (/* binding */ CdpWebWorker)
/* harmony export */ });
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/src/api/CDPSession.ts");
/* harmony import */ var _api_Target_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Target.js */ "./src/third_party/puppeteer/package/src/api/Target.ts");
/* harmony import */ var _api_WebWorker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/WebWorker.js */ "./src/third_party/puppeteer/package/src/api/WebWorker.ts");
/* harmony import */ var _common_TimeoutSettings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/TimeoutSettings.js */ "./src/third_party/puppeteer/package/src/common/TimeoutSettings.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _ExecutionContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExecutionContext.js */ "./src/third_party/puppeteer/package/src/cdp/ExecutionContext.ts");
/* harmony import */ var _IsolatedWorld_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IsolatedWorld.js */ "./src/third_party/puppeteer/package/src/cdp/IsolatedWorld.ts");
/* harmony import */ var _JSHandle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/src/cdp/JSHandle.ts");
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
var _CdpWebWorker_world, _CdpWebWorker_client, _CdpWebWorker_id, _CdpWebWorker_targetType;








/**
 * @internal
 */
class CdpWebWorker extends _api_WebWorker_js__WEBPACK_IMPORTED_MODULE_2__.WebWorker {
    constructor(client, url, targetId, targetType, consoleAPICalled, exceptionThrown) {
        super(url);
        _CdpWebWorker_world.set(this, void 0);
        _CdpWebWorker_client.set(this, void 0);
        _CdpWebWorker_id.set(this, void 0);
        _CdpWebWorker_targetType.set(this, void 0);
        __classPrivateFieldSet(this, _CdpWebWorker_id, targetId, "f");
        __classPrivateFieldSet(this, _CdpWebWorker_client, client, "f");
        __classPrivateFieldSet(this, _CdpWebWorker_targetType, targetType, "f");
        __classPrivateFieldSet(this, _CdpWebWorker_world, new _IsolatedWorld_js__WEBPACK_IMPORTED_MODULE_6__.IsolatedWorld(this, new _common_TimeoutSettings_js__WEBPACK_IMPORTED_MODULE_3__.TimeoutSettings()), "f");
        __classPrivateFieldGet(this, _CdpWebWorker_client, "f").once('Runtime.executionContextCreated', async (event) => {
            __classPrivateFieldGet(this, _CdpWebWorker_world, "f").setContext(new _ExecutionContext_js__WEBPACK_IMPORTED_MODULE_5__.ExecutionContext(client, event.context, __classPrivateFieldGet(this, _CdpWebWorker_world, "f")));
        });
        __classPrivateFieldGet(this, _CdpWebWorker_world, "f").emitter.on('consoleapicalled', async (event) => {
            try {
                return consoleAPICalled(event.type, event.args.map((object) => {
                    return new _JSHandle_js__WEBPACK_IMPORTED_MODULE_7__.CdpJSHandle(__classPrivateFieldGet(this, _CdpWebWorker_world, "f"), object);
                }), event.stackTrace);
            }
            catch (err) {
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError)(err);
            }
        });
        __classPrivateFieldGet(this, _CdpWebWorker_client, "f").on('Runtime.exceptionThrown', exceptionThrown);
        __classPrivateFieldGet(this, _CdpWebWorker_client, "f").once(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, () => {
            __classPrivateFieldGet(this, _CdpWebWorker_world, "f").dispose();
        });
        // This might fail if the target is closed before we receive all execution contexts.
        __classPrivateFieldGet(this, _CdpWebWorker_client, "f").send('Runtime.enable').catch(_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError);
    }
    mainRealm() {
        return __classPrivateFieldGet(this, _CdpWebWorker_world, "f");
    }
    get client() {
        return __classPrivateFieldGet(this, _CdpWebWorker_client, "f");
    }
    async close() {
        switch (__classPrivateFieldGet(this, _CdpWebWorker_targetType, "f")) {
            case _api_Target_js__WEBPACK_IMPORTED_MODULE_1__.TargetType.SERVICE_WORKER:
            case _api_Target_js__WEBPACK_IMPORTED_MODULE_1__.TargetType.SHARED_WORKER: {
                // For service and shared workers we need to close the target and detach to allow
                // the worker to stop.
                await this.client.connection()?.send('Target.closeTarget', {
                    targetId: __classPrivateFieldGet(this, _CdpWebWorker_id, "f"),
                });
                await this.client.connection()?.send('Target.detachFromTarget', {
                    sessionId: this.client.id(),
                });
                break;
            }
            default:
                await this.evaluate(() => {
                    self.close();
                });
        }
    }
}
_CdpWebWorker_world = new WeakMap(), _CdpWebWorker_client = new WeakMap(), _CdpWebWorker_id = new WeakMap(), _CdpWebWorker_targetType = new WeakMap();


/***/ })

}]);