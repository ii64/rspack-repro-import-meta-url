"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_cdp_FrameManager_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/CdpPreloadScript.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/CdpPreloadScript.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CdpPreloadScript = void 0;
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
exports.CdpPreloadScript = CdpPreloadScript;
//# sourceMappingURL=CdpPreloadScript.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/DeviceRequestPrompt.js":
/*!****************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/DeviceRequestPrompt.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceRequestPromptManager = exports.DeviceRequestPrompt = exports.DeviceRequestPromptDevice = void 0;
const assert_js_1 = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js");
const Deferred_js_1 = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Deferred.js");
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
exports.DeviceRequestPromptDevice = DeviceRequestPromptDevice;
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
        const deferred = Deferred_js_1.Deferred.create({
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
        (0, assert_js_1.assert)(this.#client !== null, 'Cannot select device through detached session!');
        (0, assert_js_1.assert)(this.devices.includes(device), 'Cannot select unknown device!');
        (0, assert_js_1.assert)(!this.#handled, 'Cannot select DeviceRequestPrompt which is already handled!');
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
        (0, assert_js_1.assert)(this.#client !== null, 'Cannot cancel prompt through detached session!');
        (0, assert_js_1.assert)(!this.#handled, 'Cannot cancel DeviceRequestPrompt which is already handled!');
        this.#client.off('DeviceAccess.deviceRequestPrompted', this.#updateDevicesHandle);
        this.#handled = true;
        return await this.#client.send('DeviceAccess.cancelPrompt', { id: this.#id });
    }
}
exports.DeviceRequestPrompt = DeviceRequestPrompt;
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
        (0, assert_js_1.assert)(this.#client !== null, 'Cannot wait for device prompt through detached session!');
        const needsEnable = this.#deviceRequestPrompDeferreds.size === 0;
        let enablePromise;
        if (needsEnable) {
            enablePromise = this.#client.send('DeviceAccess.enable');
        }
        const { timeout = this.#timeoutSettings.timeout() } = options;
        const deferred = Deferred_js_1.Deferred.create({
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
        (0, assert_js_1.assert)(this.#client !== null);
        const devicePrompt = new DeviceRequestPrompt(this.#client, this.#timeoutSettings, event);
        for (const promise of this.#deviceRequestPrompDeferreds) {
            promise.resolve(devicePrompt);
        }
        this.#deviceRequestPrompDeferreds.clear();
    }
}
exports.DeviceRequestPromptManager = DeviceRequestPromptManager;
//# sourceMappingURL=DeviceRequestPrompt.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/FrameManager.js":
/*!*********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/FrameManager.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FrameManager = void 0;
const CDPSession_js_1 = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/CDPSession.js");
const Frame_js_1 = __webpack_require__(/*! ../api/Frame.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/Frame.js");
const EventEmitter_js_1 = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/EventEmitter.js");
const util_js_1 = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/util.js");
const assert_js_1 = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js");
const Deferred_js_1 = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Deferred.js");
const disposable_js_1 = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/disposable.js");
const ErrorLike_js_1 = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/ErrorLike.js");
const CdpPreloadScript_js_1 = __webpack_require__(/*! ./CdpPreloadScript.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/CdpPreloadScript.js");
const CDPSession_js_2 = __webpack_require__(/*! ./CDPSession.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/CDPSession.js");
const Connection_js_1 = __webpack_require__(/*! ./Connection.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Connection.js");
const DeviceRequestPrompt_js_1 = __webpack_require__(/*! ./DeviceRequestPrompt.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/DeviceRequestPrompt.js");
const ExecutionContext_js_1 = __webpack_require__(/*! ./ExecutionContext.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/ExecutionContext.js");
const Frame_js_2 = __webpack_require__(/*! ./Frame.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Frame.js");
const FrameManagerEvents_js_1 = __webpack_require__(/*! ./FrameManagerEvents.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/FrameManagerEvents.js");
const FrameTree_js_1 = __webpack_require__(/*! ./FrameTree.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/FrameTree.js");
const IsolatedWorlds_js_1 = __webpack_require__(/*! ./IsolatedWorlds.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/IsolatedWorlds.js");
const NetworkManager_js_1 = __webpack_require__(/*! ./NetworkManager.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/NetworkManager.js");
const TIME_FOR_WAITING_FOR_SWAP = 100; // ms.
/**
 * A frame manager manages the frames for a given {@link Page | page}.
 *
 * @internal
 */
class FrameManager extends EventEmitter_js_1.EventEmitter {
    #page;
    #networkManager;
    #timeoutSettings;
    #isolatedWorlds = new Set();
    #client;
    #scriptsToEvaluateOnNewDocument = new Map();
    #bindings = new Set();
    _frameTree = new FrameTree_js_1.FrameTree();
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
        this.#networkManager = new NetworkManager_js_1.NetworkManager(this);
        this.#timeoutSettings = timeoutSettings;
        this.setupEventListeners(this.#client);
        client.once(CDPSession_js_1.CDPSessionEvent.Disconnected, () => {
            this.#onClientDisconnect().catch(util_js_1.debugError);
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
        const swapped = Deferred_js_1.Deferred.create({
            timeout: TIME_FOR_WAITING_FOR_SWAP,
            message: 'Frame was not swapped',
        });
        mainFrame.once(Frame_js_1.FrameEvent.FrameSwappedByActivation, () => {
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
        (0, assert_js_1.assert)(this.#client instanceof CDPSession_js_2.CdpCDPSession, 'CDPSession is not an instance of CDPSessionImpl.');
        const frame = this._frameTree.getMainFrame();
        if (frame) {
            this.#frameNavigatedReceived.add(this.#client._target()._targetId);
            this._frameTree.removeFrame(frame);
            frame.updateId(this.#client._target()._targetId);
            this._frameTree.addFrame(frame);
            frame.updateClient(client);
        }
        this.setupEventListeners(client);
        client.once(CDPSession_js_1.CDPSessionEvent.Disconnected, () => {
            this.#onClientDisconnect().catch(util_js_1.debugError);
        });
        await this.initialize(client, frame);
        await this.#networkManager.addClient(client);
        if (frame) {
            frame.emit(Frame_js_1.FrameEvent.FrameSwappedByActivation, undefined);
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
            this.#frameTreeHandled = Deferred_js_1.Deferred.create();
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
                    return this.#createIsolatedWorld(client, util_js_1.UTILITY_WORLD_NAME);
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
            if ((0, ErrorLike_js_1.isErrorLike)(error) && (0, Connection_js_1.isTargetClosedError)(error)) {
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
        (0, assert_js_1.assert)(mainFrame, 'Requesting main frame too early!');
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
        const preloadScript = new CdpPreloadScript_js_1.CdpPreloadScript(this.mainFrame(), identifier, source);
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
                .catch(util_js_1.debugError);
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
            manager = new DeviceRequestPrompt_js_1.DeviceRequestPromptManager(client, this.#timeoutSettings);
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
        this.emit(FrameManagerEvents_js_1.FrameManagerEvent.LifecycleEvent, frame);
        frame.emit(Frame_js_1.FrameEvent.LifecycleEvent, undefined);
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
        this.emit(FrameManagerEvents_js_1.FrameManagerEvent.LifecycleEvent, frame);
        frame.emit(Frame_js_1.FrameEvent.LifecycleEvent, undefined);
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
        frame = new Frame_js_2.CdpFrame(this, frameId, parentFrameId, session);
        this._frameTree.addFrame(frame);
        this.emit(FrameManagerEvents_js_1.FrameManagerEvent.FrameAttached, frame);
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
                frame = new Frame_js_2.CdpFrame(this, frameId, undefined, this.#client);
            }
            this._frameTree.addFrame(frame);
        }
        frame = await this._frameTree.waitForFrame(frameId);
        frame._navigated(framePayload);
        this.emit(FrameManagerEvents_js_1.FrameManagerEvent.FrameNavigated, frame);
        frame.emit(Frame_js_1.FrameEvent.FrameNavigated, navigationType);
    }
    async #createIsolatedWorld(session, name) {
        const key = `${session.id()}:${name}`;
        if (this.#isolatedWorlds.has(key)) {
            return;
        }
        await session.send('Page.addScriptToEvaluateOnNewDocument', {
            source: `//# sourceURL=${util_js_1.PuppeteerURL.INTERNAL_URL}`,
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
                .catch(util_js_1.debugError);
        }));
        this.#isolatedWorlds.add(key);
    }
    #onFrameNavigatedWithinDocument(frameId, url) {
        const frame = this.frame(frameId);
        if (!frame) {
            return;
        }
        frame._navigatedWithinDocument(url);
        this.emit(FrameManagerEvents_js_1.FrameManagerEvent.FrameNavigatedWithinDocument, frame);
        frame.emit(Frame_js_1.FrameEvent.FrameNavigatedWithinDocument, undefined);
        this.emit(FrameManagerEvents_js_1.FrameManagerEvent.FrameNavigated, frame);
        frame.emit(Frame_js_1.FrameEvent.FrameNavigated, 'Navigation');
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
                this.emit(FrameManagerEvents_js_1.FrameManagerEvent.FrameSwapped, frame);
                frame.emit(Frame_js_1.FrameEvent.FrameSwapped, undefined);
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
                world = frame.worlds[IsolatedWorlds_js_1.MAIN_WORLD];
            }
            else if (contextPayload.name === util_js_1.UTILITY_WORLD_NAME) {
                // In case of multiple sessions to the same target, there's a race between
                // connections so we might end up creating multiple isolated worlds.
                // We can use either.
                world = frame.worlds[IsolatedWorlds_js_1.PUPPETEER_WORLD];
            }
        }
        // If there is no world, the context is not meant to be handled by us.
        if (!world) {
            return;
        }
        const context = new ExecutionContext_js_1.ExecutionContext(frame?.client || this.#client, contextPayload, world);
        world.setContext(context);
    }
    #removeFramesRecursively(frame) {
        for (const child of frame.childFrames()) {
            this.#removeFramesRecursively(child);
        }
        frame[disposable_js_1.disposeSymbol]();
        this._frameTree.removeFrame(frame);
        this.emit(FrameManagerEvents_js_1.FrameManagerEvent.FrameDetached, frame);
        frame.emit(Frame_js_1.FrameEvent.FrameDetached, frame);
    }
}
exports.FrameManager = FrameManager;
//# sourceMappingURL=FrameManager.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/FrameTree.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/FrameTree.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FrameTree = void 0;
const Deferred_js_1 = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Deferred.js");
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
        const deferred = Deferred_js_1.Deferred.create();
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
exports.FrameTree = FrameTree;
//# sourceMappingURL=FrameTree.js.map

/***/ })

}]);