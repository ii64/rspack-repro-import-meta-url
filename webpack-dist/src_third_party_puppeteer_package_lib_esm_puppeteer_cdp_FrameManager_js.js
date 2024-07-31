"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_cdp_FrameManager_js"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/CdpPreloadScript.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/CdpPreloadScript.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpPreloadScript: () => (/* binding */ CdpPreloadScript)
/* harmony export */ });
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
class CdpPreloadScript {
    /**
     * This is the ID of the preload script returned by
     * Page.addScriptToEvaluateOnNewDocument in the main frame.
     *
     * Sub-frames would get a different CDP ID because
     * addScriptToEvaluateOnNewDocument is called for each subframe. But
     * users only see this ID and subframe IDs are internal to Puppeteer.
     */
    #id;
    #source;
    #frameToId = new WeakMap();
    constructor(mainFrame, id, source) {
        this.#id = id;
        this.#source = source;
        this.#frameToId.set(mainFrame, id);
    }
    get id() {
        return this.#id;
    }
    get source() {
        return this.#source;
    }
    getIdForFrame(frame) {
        return this.#frameToId.get(frame);
    }
    setIdForFrame(frame, identifier) {
        this.#frameToId.set(frame, identifier);
    }
}
//# sourceMappingURL=CdpPreloadScript.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/DeviceRequestPrompt.js":
/*!****************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/DeviceRequestPrompt.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceRequestPrompt: () => (/* binding */ DeviceRequestPrompt),
/* harmony export */   DeviceRequestPromptDevice: () => (/* binding */ DeviceRequestPromptDevice),
/* harmony export */   DeviceRequestPromptManager: () => (/* binding */ DeviceRequestPromptManager)
/* harmony export */ });
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * Device in a request prompt.
 *
 * @public
 */
class DeviceRequestPromptDevice {
    /**
     * Device id during a prompt.
     */
    id;
    /**
     * Device name as it appears in a prompt.
     */
    name;
    /**
     * @internal
     */
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
/**
 * Device request prompts let you respond to the page requesting for a device
 * through an API like WebBluetooth.
 *
 * @remarks
 * `DeviceRequestPrompt` instances are returned via the
 * {@link Page.waitForDevicePrompt} method.
 *
 * @example
 *
 * ```ts
 * const [devicePrompt] = Promise.all([
 *   page.waitForDevicePrompt(),
 *   page.click('#connect-bluetooth'),
 * ]);
 * await devicePrompt.select(
 *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device'))
 * );
 * ```
 *
 * @public
 */
class DeviceRequestPrompt {
    #client;
    #timeoutSettings;
    #id;
    #handled = false;
    #updateDevicesHandle = this.#updateDevices.bind(this);
    #waitForDevicePromises = new Set();
    /**
     * Current list of selectable devices.
     */
    devices = [];
    /**
     * @internal
     */
    constructor(client, timeoutSettings, firstEvent) {
        this.#client = client;
        this.#timeoutSettings = timeoutSettings;
        this.#id = firstEvent.id;
        this.#client.on('DeviceAccess.deviceRequestPrompted', this.#updateDevicesHandle);
        this.#client.on('Target.detachedFromTarget', () => {
            this.#client = null;
        });
        this.#updateDevices(firstEvent);
    }
    #updateDevices(event) {
        if (event.id !== this.#id) {
            return;
        }
        for (const rawDevice of event.devices) {
            if (this.devices.some(device => {
                return device.id === rawDevice.id;
            })) {
                continue;
            }
            const newDevice = new DeviceRequestPromptDevice(rawDevice.id, rawDevice.name);
            this.devices.push(newDevice);
            for (const waitForDevicePromise of this.#waitForDevicePromises) {
                if (waitForDevicePromise.filter(newDevice)) {
                    waitForDevicePromise.promise.resolve(newDevice);
                }
            }
        }
    }
    /**
     * Resolve to the first device in the prompt matching a filter.
     */
    async waitForDevice(filter, options = {}) {
        for (const device of this.devices) {
            if (filter(device)) {
                return device;
            }
        }
        const { timeout = this.#timeoutSettings.timeout() } = options;
        const deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create({
            message: `Waiting for \`DeviceRequestPromptDevice\` failed: ${timeout}ms exceeded`,
            timeout,
        });
        const handle = { filter, promise: deferred };
        this.#waitForDevicePromises.add(handle);
        try {
            return await deferred.valueOrThrow();
        }
        finally {
            this.#waitForDevicePromises.delete(handle);
        }
    }
    /**
     * Select a device in the prompt's list.
     */
    async select(device) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.#client !== null, 'Cannot select device through detached session!');
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.devices.includes(device), 'Cannot select unknown device!');
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!this.#handled, 'Cannot select DeviceRequestPrompt which is already handled!');
        this.#client.off('DeviceAccess.deviceRequestPrompted', this.#updateDevicesHandle);
        this.#handled = true;
        return await this.#client.send('DeviceAccess.selectPrompt', {
            id: this.#id,
            deviceId: device.id,
        });
    }
    /**
     * Cancel the prompt.
     */
    async cancel() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.#client !== null, 'Cannot cancel prompt through detached session!');
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!this.#handled, 'Cannot cancel DeviceRequestPrompt which is already handled!');
        this.#client.off('DeviceAccess.deviceRequestPrompted', this.#updateDevicesHandle);
        this.#handled = true;
        return await this.#client.send('DeviceAccess.cancelPrompt', { id: this.#id });
    }
}
/**
 * @internal
 */
class DeviceRequestPromptManager {
    #client;
    #timeoutSettings;
    #deviceRequestPrompDeferreds = new Set();
    /**
     * @internal
     */
    constructor(client, timeoutSettings) {
        this.#client = client;
        this.#timeoutSettings = timeoutSettings;
        this.#client.on('DeviceAccess.deviceRequestPrompted', event => {
            this.#onDeviceRequestPrompted(event);
        });
        this.#client.on('Target.detachedFromTarget', () => {
            this.#client = null;
        });
    }
    /**
     * Wait for device prompt created by an action like calling WebBluetooth's
     * requestDevice.
     */
    async waitForDevicePrompt(options = {}) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.#client !== null, 'Cannot wait for device prompt through detached session!');
        const needsEnable = this.#deviceRequestPrompDeferreds.size === 0;
        let enablePromise;
        if (needsEnable) {
            enablePromise = this.#client.send('DeviceAccess.enable');
        }
        const { timeout = this.#timeoutSettings.timeout() } = options;
        const deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create({
            message: `Waiting for \`DeviceRequestPrompt\` failed: ${timeout}ms exceeded`,
            timeout,
        });
        this.#deviceRequestPrompDeferreds.add(deferred);
        try {
            const [result] = await Promise.all([
                deferred.valueOrThrow(),
                enablePromise,
            ]);
            return result;
        }
        finally {
            this.#deviceRequestPrompDeferreds.delete(deferred);
        }
    }
    /**
     * @internal
     */
    #onDeviceRequestPrompted(event) {
        if (!this.#deviceRequestPrompDeferreds.size) {
            return;
        }
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.#client !== null);
        const devicePrompt = new DeviceRequestPrompt(this.#client, this.#timeoutSettings, event);
        for (const promise of this.#deviceRequestPrompDeferreds) {
            promise.resolve(devicePrompt);
        }
        this.#deviceRequestPrompDeferreds.clear();
    }
}
//# sourceMappingURL=DeviceRequestPrompt.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManager.js":
/*!*********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManager.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FrameManager: () => (/* binding */ FrameManager)
/* harmony export */ });
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */ var _api_Frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Frame.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/api/Frame.js");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */ var _CdpPreloadScript_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CdpPreloadScript.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/CdpPreloadScript.js");
/* harmony import */ var _CDPSession_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CDPSession.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/CDPSession.js");
/* harmony import */ var _Connection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Connection.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js");
/* harmony import */ var _DeviceRequestPrompt_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DeviceRequestPrompt.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/DeviceRequestPrompt.js");
/* harmony import */ var _ExecutionContext_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ExecutionContext.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/ExecutionContext.js");
/* harmony import */ var _Frame_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Frame.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Frame.js");
/* harmony import */ var _FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FrameManagerEvents.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManagerEvents.js");
/* harmony import */ var _FrameTree_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FrameTree.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameTree.js");
/* harmony import */ var _IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./IsolatedWorlds.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorlds.js");
/* harmony import */ var _NetworkManager_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./NetworkManager.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/NetworkManager.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */


















const TIME_FOR_WAITING_FOR_SWAP = 100; // ms.
/**
 * A frame manager manages the frames for a given {@link Page | page}.
 *
 * @internal
 */
class FrameManager extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__.EventEmitter {
    #page;
    #networkManager;
    #timeoutSettings;
    #isolatedWorlds = new Set();
    #client;
    #scriptsToEvaluateOnNewDocument = new Map();
    #bindings = new Set();
    _frameTree = new _FrameTree_js__WEBPACK_IMPORTED_MODULE_15__.FrameTree();
    /**
     * Set of frame IDs stored to indicate if a frame has received a
     * frameNavigated event so that frame tree responses could be ignored as the
     * frameNavigated event usually contains the latest information.
     */
    #frameNavigatedReceived = new Set();
    #deviceRequestPromptManagerMap = new WeakMap();
    #frameTreeHandled;
    get timeoutSettings() {
        return this.#timeoutSettings;
    }
    get networkManager() {
        return this.#networkManager;
    }
    get client() {
        return this.#client;
    }
    constructor(client, page, timeoutSettings) {
        super();
        this.#client = client;
        this.#page = page;
        this.#networkManager = new _NetworkManager_js__WEBPACK_IMPORTED_MODULE_17__.NetworkManager(this);
        this.#timeoutSettings = timeoutSettings;
        this.setupEventListeners(this.#client);
        client.once(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, () => {
            this.#onClientDisconnect().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
        });
    }
    /**
     * Called when the frame's client is disconnected. We don't know if the
     * disconnect means that the frame is removed or if it will be replaced by a
     * new frame. Therefore, we wait for a swap event.
     */
    async #onClientDisconnect() {
        const mainFrame = this._frameTree.getMainFrame();
        if (!mainFrame) {
            return;
        }
        for (const child of mainFrame.childFrames()) {
            this.#removeFramesRecursively(child);
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
            this.#removeFramesRecursively(mainFrame);
        }
    }
    /**
     * When the main frame is replaced by another main frame,
     * we maintain the main frame object identity while updating
     * its frame tree and ID.
     */
    async swapFrameTree(client) {
        this.#client = client;
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)(this.#client instanceof _CDPSession_js__WEBPACK_IMPORTED_MODULE_9__.CdpCDPSession, 'CDPSession is not an instance of CDPSessionImpl.');
        const frame = this._frameTree.getMainFrame();
        if (frame) {
            this.#frameNavigatedReceived.add(this.#client._target()._targetId);
            this._frameTree.removeFrame(frame);
            frame.updateId(this.#client._target()._targetId);
            this._frameTree.addFrame(frame);
            frame.updateClient(client);
        }
        this.setupEventListeners(client);
        client.once(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, () => {
            this.#onClientDisconnect().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
        });
        await this.initialize(client, frame);
        await this.#networkManager.addClient(client);
        if (frame) {
            frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameSwappedByActivation, undefined);
        }
    }
    async registerSpeculativeSession(client) {
        await this.#networkManager.addClient(client);
    }
    setupEventListeners(session) {
        session.on('Page.frameAttached', async (event) => {
            await this.#frameTreeHandled?.valueOrThrow();
            this.#onFrameAttached(session, event.frameId, event.parentFrameId);
        });
        session.on('Page.frameNavigated', async (event) => {
            this.#frameNavigatedReceived.add(event.frame.id);
            await this.#frameTreeHandled?.valueOrThrow();
            void this.#onFrameNavigated(event.frame, event.type);
        });
        session.on('Page.navigatedWithinDocument', async (event) => {
            await this.#frameTreeHandled?.valueOrThrow();
            this.#onFrameNavigatedWithinDocument(event.frameId, event.url);
        });
        session.on('Page.frameDetached', async (event) => {
            await this.#frameTreeHandled?.valueOrThrow();
            this.#onFrameDetached(event.frameId, event.reason);
        });
        session.on('Page.frameStartedLoading', async (event) => {
            await this.#frameTreeHandled?.valueOrThrow();
            this.#onFrameStartedLoading(event.frameId);
        });
        session.on('Page.frameStoppedLoading', async (event) => {
            await this.#frameTreeHandled?.valueOrThrow();
            this.#onFrameStoppedLoading(event.frameId);
        });
        session.on('Runtime.executionContextCreated', async (event) => {
            await this.#frameTreeHandled?.valueOrThrow();
            this.#onExecutionContextCreated(event.context, session);
        });
        session.on('Page.lifecycleEvent', async (event) => {
            await this.#frameTreeHandled?.valueOrThrow();
            this.#onLifecycleEvent(event);
        });
    }
    async initialize(client, frame) {
        try {
            this.#frameTreeHandled?.resolve();
            this.#frameTreeHandled = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_5__.Deferred.create();
            // We need to schedule all these commands while the target is paused,
            // therefore, it needs to happen synchroniously. At the same time we
            // should not start processing execution context and frame events before
            // we received the initial information about the frame tree.
            await Promise.all([
                this.#networkManager.addClient(client),
                client.send('Page.enable'),
                client.send('Page.getFrameTree').then(({ frameTree }) => {
                    this.#handleFrameTree(client, frameTree);
                    this.#frameTreeHandled?.resolve();
                }),
                client.send('Page.setLifecycleEventsEnabled', { enabled: true }),
                client.send('Runtime.enable').then(() => {
                    return this.#createIsolatedWorld(client, _common_util_js__WEBPACK_IMPORTED_MODULE_3__.UTILITY_WORLD_NAME);
                }),
                ...(frame
                    ? Array.from(this.#scriptsToEvaluateOnNewDocument.values())
                    : []).map(script => {
                    return frame?.addPreloadScript(script);
                }),
                ...(frame ? Array.from(this.#bindings.values()) : []).map(binding => {
                    return frame?.addExposedFunctionBinding(binding);
                }),
            ]);
        }
        catch (error) {
            this.#frameTreeHandled?.resolve();
            // The target might have been closed before the initialization finished.
            if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_7__.isErrorLike)(error) && (0,_Connection_js__WEBPACK_IMPORTED_MODULE_10__.isTargetClosedError)(error)) {
                return;
            }
            throw error;
        }
    }
    page() {
        return this.#page;
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
        this.#bindings.add(binding);
        await Promise.all(this.frames().map(async (frame) => {
            return await frame.addExposedFunctionBinding(binding);
        }));
    }
    async removeExposedFunctionBinding(binding) {
        this.#bindings.delete(binding);
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
        this.#scriptsToEvaluateOnNewDocument.set(identifier, preloadScript);
        await Promise.all(this.frames().map(async (frame) => {
            return await frame.addPreloadScript(preloadScript);
        }));
        return { identifier };
    }
    async removeScriptToEvaluateOnNewDocument(identifier) {
        const preloadScript = this.#scriptsToEvaluateOnNewDocument.get(identifier);
        if (!preloadScript) {
            throw new Error(`Script to evaluate on new document with id ${identifier} not found`);
        }
        this.#scriptsToEvaluateOnNewDocument.delete(identifier);
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
        let manager = this.#deviceRequestPromptManagerMap.get(client);
        if (manager === undefined) {
            manager = new _DeviceRequestPrompt_js__WEBPACK_IMPORTED_MODULE_11__.DeviceRequestPromptManager(client, this.#timeoutSettings);
            this.#deviceRequestPromptManagerMap.set(client, manager);
        }
        return manager;
    }
    #onLifecycleEvent(event) {
        const frame = this.frame(event.frameId);
        if (!frame) {
            return;
        }
        frame._onLifecycleEvent(event.loaderId, event.name);
        this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.LifecycleEvent, frame);
        frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.LifecycleEvent, undefined);
    }
    #onFrameStartedLoading(frameId) {
        const frame = this.frame(frameId);
        if (!frame) {
            return;
        }
        frame._onLoadingStarted();
    }
    #onFrameStoppedLoading(frameId) {
        const frame = this.frame(frameId);
        if (!frame) {
            return;
        }
        frame._onLoadingStopped();
        this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.LifecycleEvent, frame);
        frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.LifecycleEvent, undefined);
    }
    #handleFrameTree(session, frameTree) {
        if (frameTree.frame.parentId) {
            this.#onFrameAttached(session, frameTree.frame.id, frameTree.frame.parentId);
        }
        if (!this.#frameNavigatedReceived.has(frameTree.frame.id)) {
            void this.#onFrameNavigated(frameTree.frame, 'Navigation');
        }
        else {
            this.#frameNavigatedReceived.delete(frameTree.frame.id);
        }
        if (!frameTree.childFrames) {
            return;
        }
        for (const child of frameTree.childFrames) {
            this.#handleFrameTree(session, child);
        }
    }
    #onFrameAttached(session, frameId, parentFrameId) {
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
    }
    async #onFrameNavigated(framePayload, navigationType) {
        const frameId = framePayload.id;
        const isMainFrame = !framePayload.parentId;
        let frame = this._frameTree.getById(frameId);
        // Detach all child frames first.
        if (frame) {
            for (const child of frame.childFrames()) {
                this.#removeFramesRecursively(child);
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
                frame = new _Frame_js__WEBPACK_IMPORTED_MODULE_13__.CdpFrame(this, frameId, undefined, this.#client);
            }
            this._frameTree.addFrame(frame);
        }
        frame = await this._frameTree.waitForFrame(frameId);
        frame._navigated(framePayload);
        this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameNavigated, frame);
        frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameNavigated, navigationType);
    }
    async #createIsolatedWorld(session, name) {
        const key = `${session.id()}:${name}`;
        if (this.#isolatedWorlds.has(key)) {
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
        this.#isolatedWorlds.add(key);
    }
    #onFrameNavigatedWithinDocument(frameId, url) {
        const frame = this.frame(frameId);
        if (!frame) {
            return;
        }
        frame._navigatedWithinDocument(url);
        this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameNavigatedWithinDocument, frame);
        frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameNavigatedWithinDocument, undefined);
        this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameNavigated, frame);
        frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameNavigated, 'Navigation');
    }
    #onFrameDetached(frameId, reason) {
        const frame = this.frame(frameId);
        if (!frame) {
            return;
        }
        switch (reason) {
            case 'remove':
                // Only remove the frame if the reason for the detached event is
                // an actual removement of the frame.
                // For frames that become OOP iframes, the reason would be 'swap'.
                this.#removeFramesRecursively(frame);
                break;
            case 'swap':
                this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameSwapped, frame);
                frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameSwapped, undefined);
                break;
        }
    }
    #onExecutionContextCreated(contextPayload, session) {
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
        const context = new _ExecutionContext_js__WEBPACK_IMPORTED_MODULE_12__.ExecutionContext(frame?.client || this.#client, contextPayload, world);
        world.setContext(context);
    }
    #removeFramesRecursively(frame) {
        for (const child of frame.childFrames()) {
            this.#removeFramesRecursively(child);
        }
        frame[_util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.disposeSymbol]();
        this._frameTree.removeFrame(frame);
        this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameDetached, frame);
        frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameDetached, frame);
    }
}
//# sourceMappingURL=FrameManager.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameTree.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameTree.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FrameTree: () => (/* binding */ FrameTree)
/* harmony export */ });
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Keeps track of the page frame tree and it's is managed by
 * {@link FrameManager}. FrameTree uses frame IDs to reference frame and it
 * means that referenced frames might not be in the tree anymore. Thus, the tree
 * structure is eventually consistent.
 * @internal
 */
class FrameTree {
    #frames = new Map();
    // frameID -> parentFrameID
    #parentIds = new Map();
    // frameID -> childFrameIDs
    #childIds = new Map();
    #mainFrame;
    #isMainFrameStale = false;
    #waitRequests = new Map();
    getMainFrame() {
        return this.#mainFrame;
    }
    getById(frameId) {
        return this.#frames.get(frameId);
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
        const callbacks = this.#waitRequests.get(frameId) || new Set();
        callbacks.add(deferred);
        return deferred.valueOrThrow();
    }
    frames() {
        return Array.from(this.#frames.values());
    }
    addFrame(frame) {
        this.#frames.set(frame._id, frame);
        if (frame._parentId) {
            this.#parentIds.set(frame._id, frame._parentId);
            if (!this.#childIds.has(frame._parentId)) {
                this.#childIds.set(frame._parentId, new Set());
            }
            this.#childIds.get(frame._parentId).add(frame._id);
        }
        else if (!this.#mainFrame || this.#isMainFrameStale) {
            this.#mainFrame = frame;
            this.#isMainFrameStale = false;
        }
        this.#waitRequests.get(frame._id)?.forEach(request => {
            return request.resolve(frame);
        });
    }
    removeFrame(frame) {
        this.#frames.delete(frame._id);
        this.#parentIds.delete(frame._id);
        if (frame._parentId) {
            this.#childIds.get(frame._parentId)?.delete(frame._id);
        }
        else {
            this.#isMainFrameStale = true;
        }
    }
    childFrames(frameId) {
        const childIds = this.#childIds.get(frameId);
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
        const parentId = this.#parentIds.get(frameId);
        return parentId ? this.getById(parentId) : undefined;
    }
}
//# sourceMappingURL=FrameTree.js.map

/***/ })

}]);