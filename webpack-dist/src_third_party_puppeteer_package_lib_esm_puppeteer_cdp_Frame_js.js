"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_cdp_Frame_js"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Frame.js":
/*!**************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Frame.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpFrame: () => (/* binding */ CdpFrame)
/* harmony export */ });
/* harmony import */ var _api_Frame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Frame.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/api/Frame.js");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */ var _Accessibility_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Accessibility.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Accessibility.js");
/* harmony import */ var _FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FrameManagerEvents.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManagerEvents.js");
/* harmony import */ var _IsolatedWorld_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IsolatedWorld.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorld.js");
/* harmony import */ var _IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IsolatedWorlds.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorlds.js");
/* harmony import */ var _LifecycleWatcher_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LifecycleWatcher.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/LifecycleWatcher.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/utils.js");
/**
 * @license
 * Copyright 2017 Google Inc.
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
let CdpFrame = (() => {
    let _classSuper = _api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.Frame;
    let _instanceExtraInitializers = [];
    let _goto_decorators;
    let _waitForNavigation_decorators;
    let _setContent_decorators;
    let _addPreloadScript_decorators;
    let _addExposedFunctionBinding_decorators;
    let _removeExposedFunctionBinding_decorators;
    let _waitForDevicePrompt_decorators;
    return class CdpFrame extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(this, null, _goto_decorators, { kind: "method", name: "goto", static: false, private: false, access: { has: obj => "goto" in obj, get: obj => obj.goto }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _waitForNavigation_decorators, { kind: "method", name: "waitForNavigation", static: false, private: false, access: { has: obj => "waitForNavigation" in obj, get: obj => obj.waitForNavigation }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setContent_decorators, { kind: "method", name: "setContent", static: false, private: false, access: { has: obj => "setContent" in obj, get: obj => obj.setContent }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _addPreloadScript_decorators, { kind: "method", name: "addPreloadScript", static: false, private: false, access: { has: obj => "addPreloadScript" in obj, get: obj => obj.addPreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _addExposedFunctionBinding_decorators, { kind: "method", name: "addExposedFunctionBinding", static: false, private: false, access: { has: obj => "addExposedFunctionBinding" in obj, get: obj => obj.addExposedFunctionBinding }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _removeExposedFunctionBinding_decorators, { kind: "method", name: "removeExposedFunctionBinding", static: false, private: false, access: { has: obj => "removeExposedFunctionBinding" in obj, get: obj => obj.removeExposedFunctionBinding }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _waitForDevicePrompt_decorators, { kind: "method", name: "waitForDevicePrompt", static: false, private: false, access: { has: obj => "waitForDevicePrompt" in obj, get: obj => obj.waitForDevicePrompt }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #url = (__runInitializers(this, _instanceExtraInitializers), '');
        #detached = false;
        #client;
        _frameManager;
        _loaderId = '';
        _lifecycleEvents = new Set();
        _id;
        _parentId;
        accessibility;
        worlds;
        constructor(frameManager, frameId, parentFrameId, client) {
            super();
            this._frameManager = frameManager;
            this.#url = '';
            this._id = frameId;
            this._parentId = parentFrameId;
            this.#detached = false;
            this.#client = client;
            this._loaderId = '';
            this.worlds = {
                [_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.MAIN_WORLD]: new _IsolatedWorld_js__WEBPACK_IMPORTED_MODULE_8__.IsolatedWorld(this, this._frameManager.timeoutSettings),
                [_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.PUPPETEER_WORLD]: new _IsolatedWorld_js__WEBPACK_IMPORTED_MODULE_8__.IsolatedWorld(this, this._frameManager.timeoutSettings),
            };
            this.accessibility = new _Accessibility_js__WEBPACK_IMPORTED_MODULE_6__.Accessibility(this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.MAIN_WORLD]);
            this.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameSwappedByActivation, () => {
                // Emulate loading process for swapped frames.
                this._onLoadingStarted();
                this._onLoadingStopped();
            });
            this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.MAIN_WORLD].emitter.on('consoleapicalled', this.#onMainWorldConsoleApiCalled.bind(this));
            this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.MAIN_WORLD].emitter.on('bindingcalled', this.#onMainWorldBindingCalled.bind(this));
        }
        #onMainWorldConsoleApiCalled(event) {
            this._frameManager.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__.FrameManagerEvent.ConsoleApiCalled, [
                this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.MAIN_WORLD],
                event,
            ]);
        }
        #onMainWorldBindingCalled(event) {
            this._frameManager.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__.FrameManagerEvent.BindingCalled, [
                this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.MAIN_WORLD],
                event,
            ]);
        }
        /**
         * This is used internally in DevTools.
         *
         * @internal
         */
        _client() {
            return this.#client;
        }
        /**
         * Updates the frame ID with the new ID. This happens when the main frame is
         * replaced by a different frame.
         */
        updateId(id) {
            this._id = id;
        }
        updateClient(client) {
            this.#client = client;
        }
        page() {
            return this._frameManager.page();
        }
        isOOPFrame() {
            return this.#client !== this._frameManager.client;
        }
        async goto(url, options = {}) {
            const { referer = this._frameManager.networkManager.extraHTTPHeaders()['referer'], referrerPolicy = this._frameManager.networkManager.extraHTTPHeaders()['referer-policy'], waitUntil = ['load'], timeout = this._frameManager.timeoutSettings.navigationTimeout(), } = options;
            let ensureNewDocumentNavigation = false;
            const watcher = new _LifecycleWatcher_js__WEBPACK_IMPORTED_MODULE_10__.LifecycleWatcher(this._frameManager.networkManager, this, waitUntil, timeout);
            let error = await _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.race([
                navigate(this.#client, url, referer, referrerPolicy, this._id),
                watcher.terminationPromise(),
            ]);
            if (!error) {
                error = await _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.race([
                    watcher.terminationPromise(),
                    ensureNewDocumentNavigation
                        ? watcher.newDocumentNavigationPromise()
                        : watcher.sameDocumentNavigationPromise(),
                ]);
            }
            try {
                if (error) {
                    throw error;
                }
                return await watcher.navigationResponse();
            }
            finally {
                watcher.dispose();
            }
            async function navigate(client, url, referrer, referrerPolicy, frameId) {
                try {
                    const response = await client.send('Page.navigate', {
                        url,
                        referrer,
                        frameId,
                        referrerPolicy,
                    });
                    ensureNewDocumentNavigation = !!response.loaderId;
                    if (response.errorText === 'net::ERR_HTTP_RESPONSE_CODE_FAILURE') {
                        return null;
                    }
                    return response.errorText
                        ? new Error(`${response.errorText} at ${url}`)
                        : null;
                }
                catch (error) {
                    if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_5__.isErrorLike)(error)) {
                        return error;
                    }
                    throw error;
                }
            }
        }
        async waitForNavigation(options = {}) {
            const { waitUntil = ['load'], timeout = this._frameManager.timeoutSettings.navigationTimeout(), } = options;
            const watcher = new _LifecycleWatcher_js__WEBPACK_IMPORTED_MODULE_10__.LifecycleWatcher(this._frameManager.networkManager, this, waitUntil, timeout);
            const error = await _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.race([
                watcher.terminationPromise(),
                ...(options.ignoreSameDocumentNavigation
                    ? []
                    : [watcher.sameDocumentNavigationPromise()]),
                watcher.newDocumentNavigationPromise(),
            ]);
            try {
                if (error) {
                    throw error;
                }
                const result = await _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.race([watcher.terminationPromise(), watcher.navigationResponse()]);
                if (result instanceof Error) {
                    throw error;
                }
                return result || null;
            }
            finally {
                watcher.dispose();
            }
        }
        get client() {
            return this.#client;
        }
        mainRealm() {
            return this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.MAIN_WORLD];
        }
        isolatedRealm() {
            return this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.PUPPETEER_WORLD];
        }
        async setContent(html, options = {}) {
            const { waitUntil = ['load'], timeout = this._frameManager.timeoutSettings.navigationTimeout(), } = options;
            // We rely upon the fact that document.open() will reset frame lifecycle with "init"
            // lifecycle event. @see https://crrev.com/608658
            await this.setFrameContent(html);
            const watcher = new _LifecycleWatcher_js__WEBPACK_IMPORTED_MODULE_10__.LifecycleWatcher(this._frameManager.networkManager, this, waitUntil, timeout);
            const error = await _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.race([
                watcher.terminationPromise(),
                watcher.lifecyclePromise(),
            ]);
            watcher.dispose();
            if (error) {
                throw error;
            }
        }
        url() {
            return this.#url;
        }
        parentFrame() {
            return this._frameManager._frameTree.parentFrame(this._id) || null;
        }
        childFrames() {
            return this._frameManager._frameTree.childFrames(this._id);
        }
        #deviceRequestPromptManager() {
            const rootFrame = this.page().mainFrame();
            if (this.isOOPFrame() || rootFrame === null) {
                return this._frameManager._deviceRequestPromptManager(this.#client);
            }
            else {
                return rootFrame._frameManager._deviceRequestPromptManager(this.#client);
            }
        }
        async addPreloadScript(preloadScript) {
            if (!this.isOOPFrame() && this !== this._frameManager.mainFrame()) {
                return;
            }
            if (preloadScript.getIdForFrame(this)) {
                return;
            }
            const { identifier } = await this.#client.send('Page.addScriptToEvaluateOnNewDocument', {
                source: preloadScript.source,
            });
            preloadScript.setIdForFrame(this, identifier);
        }
        async addExposedFunctionBinding(binding) {
            // If a frame has not started loading, it might never start. Rely on
            // addScriptToEvaluateOnNewDocument in that case.
            if (this !== this._frameManager.mainFrame() && !this._hasStartedLoading) {
                return;
            }
            await Promise.all([
                this.#client.send('Runtime.addBinding', {
                    name: _utils_js__WEBPACK_IMPORTED_MODULE_11__.CDP_BINDING_PREFIX + binding.name,
                }),
                this.evaluate(binding.initSource).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError),
            ]);
        }
        async removeExposedFunctionBinding(binding) {
            // If a frame has not started loading, it might never start. Rely on
            // addScriptToEvaluateOnNewDocument in that case.
            if (this !== this._frameManager.mainFrame() && !this._hasStartedLoading) {
                return;
            }
            await Promise.all([
                this.#client.send('Runtime.removeBinding', {
                    name: _utils_js__WEBPACK_IMPORTED_MODULE_11__.CDP_BINDING_PREFIX + binding.name,
                }),
                this.evaluate(name => {
                    // Removes the dangling Puppeteer binding wrapper.
                    // @ts-expect-error: In a different context.
                    globalThis[name] = undefined;
                }, binding.name).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError),
            ]);
        }
        async waitForDevicePrompt(options = {}) {
            return await this.#deviceRequestPromptManager().waitForDevicePrompt(options);
        }
        _navigated(framePayload) {
            this._name = framePayload.name;
            this.#url = `${framePayload.url}${framePayload.urlFragment || ''}`;
        }
        _navigatedWithinDocument(url) {
            this.#url = url;
        }
        _onLifecycleEvent(loaderId, name) {
            if (name === 'init') {
                this._loaderId = loaderId;
                this._lifecycleEvents.clear();
            }
            this._lifecycleEvents.add(name);
        }
        _onLoadingStopped() {
            this._lifecycleEvents.add('DOMContentLoaded');
            this._lifecycleEvents.add('load');
        }
        _onLoadingStarted() {
            this._hasStartedLoading = true;
        }
        get detached() {
            return this.#detached;
        }
        [(_goto_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.throwIfDetached], _waitForNavigation_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.throwIfDetached], _setContent_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.throwIfDetached], _addPreloadScript_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.throwIfDetached], _addExposedFunctionBinding_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.throwIfDetached], _removeExposedFunctionBinding_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.throwIfDetached], _waitForDevicePrompt_decorators = [_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.throwIfDetached], _util_disposable_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol)]() {
            if (this.#detached) {
                return;
            }
            this.#detached = true;
            this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.MAIN_WORLD][_util_disposable_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol]();
            this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.PUPPETEER_WORLD][_util_disposable_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol]();
        }
        exposeFunction() {
            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
        }
    };
})();

//# sourceMappingURL=Frame.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManagerEvents.js":
/*!***************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManagerEvents.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FrameManagerEvent: () => (/* binding */ FrameManagerEvent)
/* harmony export */ });
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * We use symbols to prevent external parties listening to these events.
 * They are internal to Puppeteer.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
var FrameManagerEvent;
(function (FrameManagerEvent) {
    FrameManagerEvent.FrameAttached = Symbol('FrameManager.FrameAttached');
    FrameManagerEvent.FrameNavigated = Symbol('FrameManager.FrameNavigated');
    FrameManagerEvent.FrameDetached = Symbol('FrameManager.FrameDetached');
    FrameManagerEvent.FrameSwapped = Symbol('FrameManager.FrameSwapped');
    FrameManagerEvent.LifecycleEvent = Symbol('FrameManager.LifecycleEvent');
    FrameManagerEvent.FrameNavigatedWithinDocument = Symbol('FrameManager.FrameNavigatedWithinDocument');
    FrameManagerEvent.ConsoleApiCalled = Symbol('FrameManager.ConsoleApiCalled');
    FrameManagerEvent.BindingCalled = Symbol('FrameManager.BindingCalled');
})(FrameManagerEvent || (FrameManagerEvent = {}));
//# sourceMappingURL=FrameManagerEvents.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorlds.js":
/*!***********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorlds.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAIN_WORLD: () => (/* binding */ MAIN_WORLD),
/* harmony export */   PUPPETEER_WORLD: () => (/* binding */ PUPPETEER_WORLD)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A unique key for {@link IsolatedWorldChart} to denote the default world.
 * Execution contexts are automatically created in the default world.
 *
 * @internal
 */
const MAIN_WORLD = Symbol('mainWorld');
/**
 * A unique key for {@link IsolatedWorldChart} to denote the puppeteer world.
 * This world contains all puppeteer-internal bindings/code.
 *
 * @internal
 */
const PUPPETEER_WORLD = Symbol('puppeteerWorld');
//# sourceMappingURL=IsolatedWorlds.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/LifecycleWatcher.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/LifecycleWatcher.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LifecycleWatcher: () => (/* binding */ LifecycleWatcher)
/* harmony export */ });
/* harmony import */ var _api_Frame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Frame.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/api/Frame.js");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/NetworkManagerEvents.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/NetworkManagerEvents.js");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */ var _FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FrameManagerEvents.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManagerEvents.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */







const puppeteerToProtocolLifecycle = new Map([
    ['load', 'load'],
    ['domcontentloaded', 'DOMContentLoaded'],
    ['networkidle0', 'networkIdle'],
    ['networkidle2', 'networkAlmostIdle'],
]);
/**
 * @internal
 */
class LifecycleWatcher {
    #expectedLifecycle;
    #frame;
    #timeout;
    #navigationRequest = null;
    #subscriptions = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_5__.DisposableStack();
    #initialLoaderId;
    #terminationDeferred;
    #sameDocumentNavigationDeferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create();
    #lifecycleDeferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create();
    #newDocumentNavigationDeferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create();
    #hasSameDocumentNavigation;
    #swapped;
    #navigationResponseReceived;
    constructor(networkManager, frame, waitUntil, timeout) {
        if (Array.isArray(waitUntil)) {
            waitUntil = waitUntil.slice();
        }
        else if (typeof waitUntil === 'string') {
            waitUntil = [waitUntil];
        }
        this.#initialLoaderId = frame._loaderId;
        this.#expectedLifecycle = waitUntil.map(value => {
            const protocolEvent = puppeteerToProtocolLifecycle.get(value);
            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(protocolEvent, 'Unknown value for options.waitUntil: ' + value);
            return protocolEvent;
        });
        this.#frame = frame;
        this.#timeout = timeout;
        const frameManagerEmitter = this.#subscriptions.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(frame._frameManager));
        frameManagerEmitter.on(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_6__.FrameManagerEvent.LifecycleEvent, this.#checkLifecycleComplete.bind(this));
        const frameEmitter = this.#subscriptions.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(frame));
        frameEmitter.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameNavigatedWithinDocument, this.#navigatedWithinDocument.bind(this));
        frameEmitter.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameNavigated, this.#navigated.bind(this));
        frameEmitter.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameSwapped, this.#frameSwapped.bind(this));
        frameEmitter.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameSwappedByActivation, this.#frameSwapped.bind(this));
        frameEmitter.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameDetached, this.#onFrameDetached.bind(this));
        const networkManagerEmitter = this.#subscriptions.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(networkManager));
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Request, this.#onRequest.bind(this));
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Response, this.#onResponse.bind(this));
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.RequestFailed, this.#onRequestFailed.bind(this));
        this.#terminationDeferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create({
            timeout: this.#timeout,
            message: `Navigation timeout of ${this.#timeout} ms exceeded`,
        });
        this.#checkLifecycleComplete();
    }
    #onRequest(request) {
        if (request.frame() !== this.#frame || !request.isNavigationRequest()) {
            return;
        }
        this.#navigationRequest = request;
        // Resolve previous navigation response in case there are multiple
        // navigation requests reported by the backend. This generally should not
        // happen by it looks like it's possible.
        this.#navigationResponseReceived?.resolve();
        this.#navigationResponseReceived = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create();
        if (request.response() !== null) {
            this.#navigationResponseReceived?.resolve();
        }
    }
    #onRequestFailed(request) {
        if (this.#navigationRequest?.id !== request.id) {
            return;
        }
        this.#navigationResponseReceived?.resolve();
    }
    #onResponse(response) {
        if (this.#navigationRequest?.id !== response.request().id) {
            return;
        }
        this.#navigationResponseReceived?.resolve();
    }
    #onFrameDetached(frame) {
        if (this.#frame === frame) {
            this.#terminationDeferred.resolve(new Error('Navigating frame was detached'));
            return;
        }
        this.#checkLifecycleComplete();
    }
    async navigationResponse() {
        // Continue with a possibly null response.
        await this.#navigationResponseReceived?.valueOrThrow();
        return this.#navigationRequest ? this.#navigationRequest.response() : null;
    }
    sameDocumentNavigationPromise() {
        return this.#sameDocumentNavigationDeferred.valueOrThrow();
    }
    newDocumentNavigationPromise() {
        return this.#newDocumentNavigationDeferred.valueOrThrow();
    }
    lifecyclePromise() {
        return this.#lifecycleDeferred.valueOrThrow();
    }
    terminationPromise() {
        return this.#terminationDeferred.valueOrThrow();
    }
    #navigatedWithinDocument() {
        this.#hasSameDocumentNavigation = true;
        this.#checkLifecycleComplete();
    }
    #navigated(navigationType) {
        if (navigationType === 'BackForwardCacheRestore') {
            return this.#frameSwapped();
        }
        this.#checkLifecycleComplete();
    }
    #frameSwapped() {
        this.#swapped = true;
        this.#checkLifecycleComplete();
    }
    #checkLifecycleComplete() {
        // We expect navigation to commit.
        if (!checkLifecycle(this.#frame, this.#expectedLifecycle)) {
            return;
        }
        this.#lifecycleDeferred.resolve();
        if (this.#hasSameDocumentNavigation) {
            this.#sameDocumentNavigationDeferred.resolve(undefined);
        }
        if (this.#swapped || this.#frame._loaderId !== this.#initialLoaderId) {
            this.#newDocumentNavigationDeferred.resolve(undefined);
        }
        function checkLifecycle(frame, expectedLifecycle) {
            for (const event of expectedLifecycle) {
                if (!frame._lifecycleEvents.has(event)) {
                    return false;
                }
            }
            // TODO(#1): Its possible we don't need this check
            // CDP provided the correct order for Loading Events
            // And NetworkIdle is a global state
            // Consider removing
            for (const child of frame.childFrames()) {
                if (child._hasStartedLoading &&
                    !checkLifecycle(child, expectedLifecycle)) {
                    return false;
                }
            }
            return true;
        }
    }
    dispose() {
        this.#subscriptions.dispose();
        this.#terminationDeferred.resolve(new Error('LifecycleWatcher disposed'));
    }
}
//# sourceMappingURL=LifecycleWatcher.js.map

/***/ })

}]);