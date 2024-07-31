"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_FrameManager_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/CdpPreloadScript.ts":
/*!***********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/CdpPreloadScript.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpPreloadScript: () => (/* binding */ CdpPreloadScript)
/* harmony export */ });
/**
 * @license
 * Copyright 2024 Google Inc.
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
var _CdpPreloadScript_id, _CdpPreloadScript_source, _CdpPreloadScript_frameToId;
/**
 * @internal
 */
class CdpPreloadScript {
    constructor(mainFrame, id, source) {
        /**
         * This is the ID of the preload script returned by
         * Page.addScriptToEvaluateOnNewDocument in the main frame.
         *
         * Sub-frames would get a different CDP ID because
         * addScriptToEvaluateOnNewDocument is called for each subframe. But
         * users only see this ID and subframe IDs are internal to Puppeteer.
         */
        _CdpPreloadScript_id.set(this, void 0);
        _CdpPreloadScript_source.set(this, void 0);
        _CdpPreloadScript_frameToId.set(this, new WeakMap());
        __classPrivateFieldSet(this, _CdpPreloadScript_id, id, "f");
        __classPrivateFieldSet(this, _CdpPreloadScript_source, source, "f");
        __classPrivateFieldGet(this, _CdpPreloadScript_frameToId, "f").set(mainFrame, id);
    }
    get id() {
        return __classPrivateFieldGet(this, _CdpPreloadScript_id, "f");
    }
    get source() {
        return __classPrivateFieldGet(this, _CdpPreloadScript_source, "f");
    }
    getIdForFrame(frame) {
        return __classPrivateFieldGet(this, _CdpPreloadScript_frameToId, "f").get(frame);
    }
    setIdForFrame(frame, identifier) {
        __classPrivateFieldGet(this, _CdpPreloadScript_frameToId, "f").set(frame, identifier);
    }
}
_CdpPreloadScript_id = new WeakMap(), _CdpPreloadScript_source = new WeakMap(), _CdpPreloadScript_frameToId = new WeakMap();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/cdp/FrameManager.ts":
/*!*******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/FrameManager.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FrameManager: () => (/* binding */ FrameManager)
/* harmony export */ });
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/src/api/CDPSession.ts");
/* harmony import */ var _api_Frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Frame.js */ "./src/third_party/puppeteer/package/src/api/Frame.ts");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/src/util/Deferred.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/src/util/ErrorLike.ts");
/* harmony import */ var _CdpPreloadScript_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CdpPreloadScript.js */ "./src/third_party/puppeteer/package/src/cdp/CdpPreloadScript.ts");
/* harmony import */ var _CDPSession_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CDPSession.js */ "./src/third_party/puppeteer/package/src/cdp/CDPSession.ts");
/* harmony import */ var _Connection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Connection.js */ "./src/third_party/puppeteer/package/src/cdp/Connection.ts");
/* harmony import */ var _DeviceRequestPrompt_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DeviceRequestPrompt.js */ "./src/third_party/puppeteer/package/src/cdp/DeviceRequestPrompt.ts");
/* harmony import */ var _ExecutionContext_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ExecutionContext.js */ "./src/third_party/puppeteer/package/src/cdp/ExecutionContext.ts");
/* harmony import */ var _Frame_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Frame.js */ "./src/third_party/puppeteer/package/src/cdp/Frame.ts");
/* harmony import */ var _FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FrameManagerEvents.js */ "./src/third_party/puppeteer/package/src/cdp/FrameManagerEvents.ts");
/* harmony import */ var _FrameTree_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FrameTree.js */ "./src/third_party/puppeteer/package/src/cdp/FrameTree.ts");
/* harmony import */ var _IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./IsolatedWorlds.js */ "./src/third_party/puppeteer/package/src/cdp/IsolatedWorlds.ts");
/* harmony import */ var _NetworkManager_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./NetworkManager.js */ "./src/third_party/puppeteer/package/src/cdp/NetworkManager.ts");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
var _FrameManager_instances, _FrameManager_page, _FrameManager_networkManager, _FrameManager_timeoutSettings, _FrameManager_isolatedWorlds, _FrameManager_client, _FrameManager_scriptsToEvaluateOnNewDocument, _FrameManager_bindings, _FrameManager_frameNavigatedReceived, _FrameManager_deviceRequestPromptManagerMap, _FrameManager_frameTreeHandled, _FrameManager_onClientDisconnect, _FrameManager_onLifecycleEvent, _FrameManager_onFrameStartedLoading, _FrameManager_onFrameStoppedLoading, _FrameManager_handleFrameTree, _FrameManager_onFrameAttached, _FrameManager_onFrameNavigated, _FrameManager_createIsolatedWorld, _FrameManager_onFrameNavigatedWithinDocument, _FrameManager_onFrameDetached, _FrameManager_onExecutionContextCreated, _FrameManager_removeFramesRecursively;


















const TIME_FOR_WAITING_FOR_SWAP = 100; // ms.
/**
 * A frame manager manages the frames for a given {@link Page | page}.
 *
 * @internal
 */
class FrameManager extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__.EventEmitter {
    get timeoutSettings() {
        return __classPrivateFieldGet(this, _FrameManager_timeoutSettings, "f");
    }
    get networkManager() {
        return __classPrivateFieldGet(this, _FrameManager_networkManager, "f");
    }
    get client() {
        return __classPrivateFieldGet(this, _FrameManager_client, "f");
    }
    constructor(client, page, timeoutSettings) {
        super();
        _FrameManager_instances.add(this);
        _FrameManager_page.set(this, void 0);
        _FrameManager_networkManager.set(this, void 0);
        _FrameManager_timeoutSettings.set(this, void 0);
        _FrameManager_isolatedWorlds.set(this, new Set());
        _FrameManager_client.set(this, void 0);
        _FrameManager_scriptsToEvaluateOnNewDocument.set(this, new Map());
        _FrameManager_bindings.set(this, new Set());
        Object.defineProperty(this, "_frameTree", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _FrameTree_js__WEBPACK_IMPORTED_MODULE_15__.FrameTree()
        });
        /**
         * Set of frame IDs stored to indicate if a frame has received a
         * frameNavigated event so that frame tree responses could be ignored as the
         * frameNavigated event usually contains the latest information.
         */
        _FrameManager_frameNavigatedReceived.set(this, new Set());
        _FrameManager_deviceRequestPromptManagerMap.set(this, new WeakMap());
        _FrameManager_frameTreeHandled.set(this, void 0);
        __classPrivateFieldSet(this, _FrameManager_client, client, "f");
        __classPrivateFieldSet(this, _FrameManager_page, page, "f");
        __classPrivateFieldSet(this, _FrameManager_networkManager, new _NetworkManager_js__WEBPACK_IMPORTED_MODULE_17__.NetworkManager(this), "f");
        __classPrivateFieldSet(this, _FrameManager_timeoutSettings, timeoutSettings, "f");
        this.setupEventListeners(__classPrivateFieldGet(this, _FrameManager_client, "f"));
        client.once(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, () => {
            __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_onClientDisconnect).call(this).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
        });
    }
    /**
     * When the main frame is replaced by another main frame,
     * we maintain the main frame object identity while updating
     * its frame tree and ID.
     */
    async swapFrameTree(client) {
        __classPrivateFieldSet(this, _FrameManager_client, client, "f");
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)(__classPrivateFieldGet(this, _FrameManager_client, "f") instanceof _CDPSession_js__WEBPACK_IMPORTED_MODULE_9__.CdpCDPSession, 'CDPSession is not an instance of CDPSessionImpl.');
        const frame = this._frameTree.getMainFrame();
        if (frame) {
            __classPrivateFieldGet(this, _FrameManager_frameNavigatedReceived, "f").add(__classPrivateFieldGet(this, _FrameManager_client, "f")._target()._targetId);
            this._frameTree.removeFrame(frame);
            frame.updateId(__classPrivateFieldGet(this, _FrameManager_client, "f")._target()._targetId);
            this._frameTree.addFrame(frame);
            frame.updateClient(client);
        }
        this.setupEventListeners(client);
        client.once(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, () => {
            __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_onClientDisconnect).call(this).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
        });
        await this.initialize(client, frame);
        await __classPrivateFieldGet(this, _FrameManager_networkManager, "f").addClient(client);
        if (frame) {
            frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameSwappedByActivation, undefined);
        }
    }
    async registerSpeculativeSession(client) {
        await __classPrivateFieldGet(this, _FrameManager_networkManager, "f").addClient(client);
    }
    setupEventListeners(session) {
        session.on('Page.frameAttached', async (event) => {
            await __classPrivateFieldGet(this, _FrameManager_frameTreeHandled, "f")?.valueOrThrow();
            __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_onFrameAttached).call(this, session, event.frameId, event.parentFrameId);
        });
        session.on('Page.frameNavigated', async (event) => {
            __classPrivateFieldGet(this, _FrameManager_frameNavigatedReceived, "f").add(event.frame.id);
            await __classPrivateFieldGet(this, _FrameManager_frameTreeHandled, "f")?.valueOrThrow();
            void __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_onFrameNavigated).call(this, event.frame, event.type);
        });
        session.on('Page.navigatedWithinDocument', async (event) => {
            await __classPrivateFieldGet(this, _FrameManager_frameTreeHandled, "f")?.valueOrThrow();
            __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_onFrameNavigatedWithinDocument).call(this, event.frameId, event.url);
        });
        session.on('Page.frameDetached', async (event) => {
            await __classPrivateFieldGet(this, _FrameManager_frameTreeHandled, "f")?.valueOrThrow();
            __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_onFrameDetached).call(this, event.frameId, event.reason);
        });
        session.on('Page.frameStartedLoading', async (event) => {
            await __classPrivateFieldGet(this, _FrameManager_frameTreeHandled, "f")?.valueOrThrow();
            __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_onFrameStartedLoading).call(this, event.frameId);
        });
        session.on('Page.frameStoppedLoading', async (event) => {
            await __classPrivateFieldGet(this, _FrameManager_frameTreeHandled, "f")?.valueOrThrow();
            __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_onFrameStoppedLoading).call(this, event.frameId);
        });
        session.on('Runtime.executionContextCreated', async (event) => {
            await __classPrivateFieldGet(this, _FrameManager_frameTreeHandled, "f")?.valueOrThrow();
            __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_onExecutionContextCreated).call(this, event.context, session);
        });
        session.on('Page.lifecycleEvent', async (event) => {
            await __classPrivateFieldGet(this, _FrameManager_frameTreeHandled, "f")?.valueOrThrow();
            __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_onLifecycleEvent).call(this, event);
        });
    }
    async initialize(client, frame) {
        try {
            __classPrivateFieldGet(this, _FrameManager_frameTreeHandled, "f")?.resolve();
            __classPrivateFieldSet(this, _FrameManager_frameTreeHandled, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_5__.Deferred.create(), "f");
            // We need to schedule all these commands while the target is paused,
            // therefore, it needs to happen synchroniously. At the same time we
            // should not start processing execution context and frame events before
            // we received the initial information about the frame tree.
            await Promise.all([
                __classPrivateFieldGet(this, _FrameManager_networkManager, "f").addClient(client),
                client.send('Page.enable'),
                client.send('Page.getFrameTree').then(({ frameTree }) => {
                    __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_handleFrameTree).call(this, client, frameTree);
                    __classPrivateFieldGet(this, _FrameManager_frameTreeHandled, "f")?.resolve();
                }),
                client.send('Page.setLifecycleEventsEnabled', { enabled: true }),
                client.send('Runtime.enable').then(() => {
                    return __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_createIsolatedWorld).call(this, client, _common_util_js__WEBPACK_IMPORTED_MODULE_3__.UTILITY_WORLD_NAME);
                }),
                ...(frame
                    ? Array.from(__classPrivateFieldGet(this, _FrameManager_scriptsToEvaluateOnNewDocument, "f").values())
                    : []).map(script => {
                    return frame?.addPreloadScript(script);
                }),
                ...(frame ? Array.from(__classPrivateFieldGet(this, _FrameManager_bindings, "f").values()) : []).map(binding => {
                    return frame?.addExposedFunctionBinding(binding);
                }),
            ]);
        }
        catch (error) {
            __classPrivateFieldGet(this, _FrameManager_frameTreeHandled, "f")?.resolve();
            // The target might have been closed before the initialization finished.
            if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_7__.isErrorLike)(error) && (0,_Connection_js__WEBPACK_IMPORTED_MODULE_10__.isTargetClosedError)(error)) {
                return;
            }
            throw error;
        }
    }
    page() {
        return __classPrivateFieldGet(this, _FrameManager_page, "f");
    }
    mainFrame() {
        const mainFrame = this._frameTree.getMainFrame();
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)(mainFrame, 'Requesting main frame too early!');
        return mainFrame;
    }
    frames() {
        return Array.from(this._frameTree.frames());
    }
    frame(frameId) {
        return this._frameTree.getById(frameId) || null;
    }
    async addExposedFunctionBinding(binding) {
        __classPrivateFieldGet(this, _FrameManager_bindings, "f").add(binding);
        await Promise.all(this.frames().map(async (frame) => {
            return await frame.addExposedFunctionBinding(binding);
        }));
    }
    async removeExposedFunctionBinding(binding) {
        __classPrivateFieldGet(this, _FrameManager_bindings, "f").delete(binding);
        await Promise.all(this.frames().map(async (frame) => {
            return await frame.removeExposedFunctionBinding(binding);
        }));
    }
    async evaluateOnNewDocument(source) {
        const { identifier } = await this.mainFrame()
            ._client()
            .send('Page.addScriptToEvaluateOnNewDocument', {
            source,
        });
        const preloadScript = new _CdpPreloadScript_js__WEBPACK_IMPORTED_MODULE_8__.CdpPreloadScript(this.mainFrame(), identifier, source);
        __classPrivateFieldGet(this, _FrameManager_scriptsToEvaluateOnNewDocument, "f").set(identifier, preloadScript);
        await Promise.all(this.frames().map(async (frame) => {
            return await frame.addPreloadScript(preloadScript);
        }));
        return { identifier };
    }
    async removeScriptToEvaluateOnNewDocument(identifier) {
        const preloadScript = __classPrivateFieldGet(this, _FrameManager_scriptsToEvaluateOnNewDocument, "f").get(identifier);
        if (!preloadScript) {
            throw new Error(`Script to evaluate on new document with id ${identifier} not found`);
        }
        __classPrivateFieldGet(this, _FrameManager_scriptsToEvaluateOnNewDocument, "f").delete(identifier);
        await Promise.all(this.frames().map(frame => {
            const identifier = preloadScript.getIdForFrame(frame);
            if (!identifier) {
                return;
            }
            return frame
                ._client()
                .send('Page.removeScriptToEvaluateOnNewDocument', {
                identifier,
            })
                .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
        }));
    }
    onAttachedToTarget(target) {
        if (target._getTargetInfo().type !== 'iframe') {
            return;
        }
        const frame = this.frame(target._getTargetInfo().targetId);
        if (frame) {
            frame.updateClient(target._session());
        }
        this.setupEventListeners(target._session());
        void this.initialize(target._session(), frame);
    }
    _deviceRequestPromptManager(client) {
        let manager = __classPrivateFieldGet(this, _FrameManager_deviceRequestPromptManagerMap, "f").get(client);
        if (manager === undefined) {
            manager = new _DeviceRequestPrompt_js__WEBPACK_IMPORTED_MODULE_11__.DeviceRequestPromptManager(client, __classPrivateFieldGet(this, _FrameManager_timeoutSettings, "f"));
            __classPrivateFieldGet(this, _FrameManager_deviceRequestPromptManagerMap, "f").set(client, manager);
        }
        return manager;
    }
}
_FrameManager_page = new WeakMap(), _FrameManager_networkManager = new WeakMap(), _FrameManager_timeoutSettings = new WeakMap(), _FrameManager_isolatedWorlds = new WeakMap(), _FrameManager_client = new WeakMap(), _FrameManager_scriptsToEvaluateOnNewDocument = new WeakMap(), _FrameManager_bindings = new WeakMap(), _FrameManager_frameNavigatedReceived = new WeakMap(), _FrameManager_deviceRequestPromptManagerMap = new WeakMap(), _FrameManager_frameTreeHandled = new WeakMap(), _FrameManager_instances = new WeakSet(), _FrameManager_onClientDisconnect = 
/**
 * Called when the frame's client is disconnected. We don't know if the
 * disconnect means that the frame is removed or if it will be replaced by a
 * new frame. Therefore, we wait for a swap event.
 */
async function _FrameManager_onClientDisconnect() {
    const mainFrame = this._frameTree.getMainFrame();
    if (!mainFrame) {
        return;
    }
    for (const child of mainFrame.childFrames()) {
        __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_removeFramesRecursively).call(this, child);
    }
    const swapped = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_5__.Deferred.create({
        timeout: TIME_FOR_WAITING_FOR_SWAP,
        message: 'Frame was not swapped',
    });
    mainFrame.once(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameSwappedByActivation, () => {
        swapped.resolve();
    });
    try {
        await swapped.valueOrThrow();
    }
    catch (err) {
        __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_removeFramesRecursively).call(this, mainFrame);
    }
}, _FrameManager_onLifecycleEvent = function _FrameManager_onLifecycleEvent(event) {
    const frame = this.frame(event.frameId);
    if (!frame) {
        return;
    }
    frame._onLifecycleEvent(event.loaderId, event.name);
    this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.LifecycleEvent, frame);
    frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.LifecycleEvent, undefined);
}, _FrameManager_onFrameStartedLoading = function _FrameManager_onFrameStartedLoading(frameId) {
    const frame = this.frame(frameId);
    if (!frame) {
        return;
    }
    frame._onLoadingStarted();
}, _FrameManager_onFrameStoppedLoading = function _FrameManager_onFrameStoppedLoading(frameId) {
    const frame = this.frame(frameId);
    if (!frame) {
        return;
    }
    frame._onLoadingStopped();
    this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.LifecycleEvent, frame);
    frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.LifecycleEvent, undefined);
}, _FrameManager_handleFrameTree = function _FrameManager_handleFrameTree(session, frameTree) {
    if (frameTree.frame.parentId) {
        __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_onFrameAttached).call(this, session, frameTree.frame.id, frameTree.frame.parentId);
    }
    if (!__classPrivateFieldGet(this, _FrameManager_frameNavigatedReceived, "f").has(frameTree.frame.id)) {
        void __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_onFrameNavigated).call(this, frameTree.frame, 'Navigation');
    }
    else {
        __classPrivateFieldGet(this, _FrameManager_frameNavigatedReceived, "f").delete(frameTree.frame.id);
    }
    if (!frameTree.childFrames) {
        return;
    }
    for (const child of frameTree.childFrames) {
        __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_handleFrameTree).call(this, session, child);
    }
}, _FrameManager_onFrameAttached = function _FrameManager_onFrameAttached(session, frameId, parentFrameId) {
    let frame = this.frame(frameId);
    if (frame) {
        if (session && frame.isOOPFrame()) {
            // If an OOP iframes becomes a normal iframe again
            // it is first attached to the parent page before
            // the target is removed.
            frame.updateClient(session);
        }
        return;
    }
    frame = new _Frame_js__WEBPACK_IMPORTED_MODULE_13__.CdpFrame(this, frameId, parentFrameId, session);
    this._frameTree.addFrame(frame);
    this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameAttached, frame);
}, _FrameManager_onFrameNavigated = async function _FrameManager_onFrameNavigated(framePayload, navigationType) {
    const frameId = framePayload.id;
    const isMainFrame = !framePayload.parentId;
    let frame = this._frameTree.getById(frameId);
    // Detach all child frames first.
    if (frame) {
        for (const child of frame.childFrames()) {
            __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_removeFramesRecursively).call(this, child);
        }
    }
    // Update or create main frame.
    if (isMainFrame) {
        if (frame) {
            // Update frame id to retain frame identity on cross-process navigation.
            this._frameTree.removeFrame(frame);
            frame._id = frameId;
        }
        else {
            // Initial main frame navigation.
            frame = new _Frame_js__WEBPACK_IMPORTED_MODULE_13__.CdpFrame(this, frameId, undefined, __classPrivateFieldGet(this, _FrameManager_client, "f"));
        }
        this._frameTree.addFrame(frame);
    }
    frame = await this._frameTree.waitForFrame(frameId);
    frame._navigated(framePayload);
    this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameNavigated, frame);
    frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameNavigated, navigationType);
}, _FrameManager_createIsolatedWorld = async function _FrameManager_createIsolatedWorld(session, name) {
    const key = `${session.id()}:${name}`;
    if (__classPrivateFieldGet(this, _FrameManager_isolatedWorlds, "f").has(key)) {
        return;
    }
    await session.send('Page.addScriptToEvaluateOnNewDocument', {
        source: `//# sourceURL=${_common_util_js__WEBPACK_IMPORTED_MODULE_3__.PuppeteerURL.INTERNAL_URL}`,
        worldName: name,
    });
    await Promise.all(this.frames()
        .filter(frame => {
        return frame.client === session;
    })
        .map(frame => {
        // Frames might be removed before we send this, so we don't want to
        // throw an error.
        return session
            .send('Page.createIsolatedWorld', {
            frameId: frame._id,
            worldName: name,
            grantUniveralAccess: true,
        })
            .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
    }));
    __classPrivateFieldGet(this, _FrameManager_isolatedWorlds, "f").add(key);
}, _FrameManager_onFrameNavigatedWithinDocument = function _FrameManager_onFrameNavigatedWithinDocument(frameId, url) {
    const frame = this.frame(frameId);
    if (!frame) {
        return;
    }
    frame._navigatedWithinDocument(url);
    this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameNavigatedWithinDocument, frame);
    frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameNavigatedWithinDocument, undefined);
    this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameNavigated, frame);
    frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameNavigated, 'Navigation');
}, _FrameManager_onFrameDetached = function _FrameManager_onFrameDetached(frameId, reason) {
    const frame = this.frame(frameId);
    if (!frame) {
        return;
    }
    switch (reason) {
        case 'remove':
            // Only remove the frame if the reason for the detached event is
            // an actual removement of the frame.
            // For frames that become OOP iframes, the reason would be 'swap'.
            __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_removeFramesRecursively).call(this, frame);
            break;
        case 'swap':
            this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameSwapped, frame);
            frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameSwapped, undefined);
            break;
    }
}, _FrameManager_onExecutionContextCreated = function _FrameManager_onExecutionContextCreated(contextPayload, session) {
    const auxData = contextPayload.auxData;
    const frameId = auxData && auxData.frameId;
    const frame = typeof frameId === 'string' ? this.frame(frameId) : undefined;
    let world;
    if (frame) {
        // Only care about execution contexts created for the current session.
        if (frame.client !== session) {
            return;
        }
        if (contextPayload.auxData && contextPayload.auxData['isDefault']) {
            world = frame.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_16__.MAIN_WORLD];
        }
        else if (contextPayload.name === _common_util_js__WEBPACK_IMPORTED_MODULE_3__.UTILITY_WORLD_NAME) {
            // In case of multiple sessions to the same target, there's a race between
            // connections so we might end up creating multiple isolated worlds.
            // We can use either.
            world = frame.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_16__.PUPPETEER_WORLD];
        }
    }
    // If there is no world, the context is not meant to be handled by us.
    if (!world) {
        return;
    }
    const context = new _ExecutionContext_js__WEBPACK_IMPORTED_MODULE_12__.ExecutionContext(frame?.client || __classPrivateFieldGet(this, _FrameManager_client, "f"), contextPayload, world);
    world.setContext(context);
}, _FrameManager_removeFramesRecursively = function _FrameManager_removeFramesRecursively(frame) {
    for (const child of frame.childFrames()) {
        __classPrivateFieldGet(this, _FrameManager_instances, "m", _FrameManager_removeFramesRecursively).call(this, child);
    }
    frame[_util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.disposeSymbol]();
    this._frameTree.removeFrame(frame);
    this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameDetached, frame);
    frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameDetached, frame);
};


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/cdp/FrameTree.ts":
/*!****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/FrameTree.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FrameTree: () => (/* binding */ FrameTree)
/* harmony export */ });
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/src/util/Deferred.ts");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
var _FrameTree_frames, _FrameTree_parentIds, _FrameTree_childIds, _FrameTree_mainFrame, _FrameTree_isMainFrameStale, _FrameTree_waitRequests;

/**
 * Keeps track of the page frame tree and it's is managed by
 * {@link FrameManager}. FrameTree uses frame IDs to reference frame and it
 * means that referenced frames might not be in the tree anymore. Thus, the tree
 * structure is eventually consistent.
 * @internal
 */
class FrameTree {
    constructor() {
        _FrameTree_frames.set(this, new Map());
        // frameID -> parentFrameID
        _FrameTree_parentIds.set(this, new Map());
        // frameID -> childFrameIDs
        _FrameTree_childIds.set(this, new Map());
        _FrameTree_mainFrame.set(this, void 0);
        _FrameTree_isMainFrameStale.set(this, false);
        _FrameTree_waitRequests.set(this, new Map());
    }
    getMainFrame() {
        return __classPrivateFieldGet(this, _FrameTree_mainFrame, "f");
    }
    getById(frameId) {
        return __classPrivateFieldGet(this, _FrameTree_frames, "f").get(frameId);
    }
    /**
     * Returns a promise that is resolved once the frame with
     * the given ID is added to the tree.
     */
    waitForFrame(frameId) {
        const frame = this.getById(frameId);
        if (frame) {
            return Promise.resolve(frame);
        }
        const deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred.create();
        const callbacks = __classPrivateFieldGet(this, _FrameTree_waitRequests, "f").get(frameId) || new Set();
        callbacks.add(deferred);
        return deferred.valueOrThrow();
    }
    frames() {
        return Array.from(__classPrivateFieldGet(this, _FrameTree_frames, "f").values());
    }
    addFrame(frame) {
        __classPrivateFieldGet(this, _FrameTree_frames, "f").set(frame._id, frame);
        if (frame._parentId) {
            __classPrivateFieldGet(this, _FrameTree_parentIds, "f").set(frame._id, frame._parentId);
            if (!__classPrivateFieldGet(this, _FrameTree_childIds, "f").has(frame._parentId)) {
                __classPrivateFieldGet(this, _FrameTree_childIds, "f").set(frame._parentId, new Set());
            }
            __classPrivateFieldGet(this, _FrameTree_childIds, "f").get(frame._parentId).add(frame._id);
        }
        else if (!__classPrivateFieldGet(this, _FrameTree_mainFrame, "f") || __classPrivateFieldGet(this, _FrameTree_isMainFrameStale, "f")) {
            __classPrivateFieldSet(this, _FrameTree_mainFrame, frame, "f");
            __classPrivateFieldSet(this, _FrameTree_isMainFrameStale, false, "f");
        }
        __classPrivateFieldGet(this, _FrameTree_waitRequests, "f").get(frame._id)?.forEach(request => {
            return request.resolve(frame);
        });
    }
    removeFrame(frame) {
        __classPrivateFieldGet(this, _FrameTree_frames, "f").delete(frame._id);
        __classPrivateFieldGet(this, _FrameTree_parentIds, "f").delete(frame._id);
        if (frame._parentId) {
            __classPrivateFieldGet(this, _FrameTree_childIds, "f").get(frame._parentId)?.delete(frame._id);
        }
        else {
            __classPrivateFieldSet(this, _FrameTree_isMainFrameStale, true, "f");
        }
    }
    childFrames(frameId) {
        const childIds = __classPrivateFieldGet(this, _FrameTree_childIds, "f").get(frameId);
        if (!childIds) {
            return [];
        }
        return Array.from(childIds)
            .map(id => {
            return this.getById(id);
        })
            .filter((frame) => {
            return frame !== undefined;
        });
    }
    parentFrame(frameId) {
        const parentId = __classPrivateFieldGet(this, _FrameTree_parentIds, "f").get(frameId);
        return parentId ? this.getById(parentId) : undefined;
    }
}
_FrameTree_frames = new WeakMap(), _FrameTree_parentIds = new WeakMap(), _FrameTree_childIds = new WeakMap(), _FrameTree_mainFrame = new WeakMap(), _FrameTree_isMainFrameStale = new WeakMap(), _FrameTree_waitRequests = new WeakMap();


/***/ })

}]);