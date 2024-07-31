"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_models_RecordingPlayer_ts"],{

/***/ "./src/panels/recorder/models/RecordingPlayer.ts":
/*!*******************************************************!*\
  !*** ./src/panels/recorder/models/RecordingPlayer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   PlayRecordingSpeed: () => (/* binding */ PlayRecordingSpeed),
/* harmony export */   RecordingPlayer: () => (/* binding */ RecordingPlayer),
/* harmony export */   ReplayResult: () => (/* binding */ ReplayResult),
/* harmony export */   defaultTimeout: () => (/* binding */ defaultTimeout)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _services_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/puppeteer/puppeteer.js */ "./src/services/puppeteer/puppeteer.ts");
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./src/third_party/puppeteer-replay/puppeteer-replay.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
var _RecordingPlayer_instances, _RecordingPlayer_stopPromise, _RecordingPlayer_resolveStopPromise, _RecordingPlayer_abortResolveFn, _RecordingPlayer_runner, _RecordingPlayer_resolveAndRefreshStopPromise;




var PlayRecordingSpeed;
(function (PlayRecordingSpeed) {
    PlayRecordingSpeed["Normal"] = "normal";
    PlayRecordingSpeed["Slow"] = "slow";
    PlayRecordingSpeed["VerySlow"] = "very_slow";
    PlayRecordingSpeed["ExtremelySlow"] = "extremely_slow";
})(PlayRecordingSpeed || (PlayRecordingSpeed = {}));
const speedDelayMap = {
    [PlayRecordingSpeed.Normal]: 0,
    [PlayRecordingSpeed.Slow]: 500,
    [PlayRecordingSpeed.VerySlow]: 1000,
    [PlayRecordingSpeed.ExtremelySlow]: 2000,
};
var ReplayResult;
(function (ReplayResult) {
    ReplayResult["Failure"] = "Failure";
    ReplayResult["Success"] = "Success";
})(ReplayResult || (ReplayResult = {}));
const defaultTimeout = 5000; // ms
function isPageTarget(target) {
    // Treat DevTools targets as page targets too.
    return (_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.schemeIs(target.url, 'devtools:') || target.type === 'page' ||
        target.type === 'background_page' || target.type === 'webview');
}
class RecordingPlayer extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor(userFlow, { speed, breakpointIndexes = new Set(), }) {
        super();
        _RecordingPlayer_instances.add(this);
        _RecordingPlayer_stopPromise.set(this, void 0);
        _RecordingPlayer_resolveStopPromise.set(this, void 0);
        Object.defineProperty(this, "userFlow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "speed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "breakpointIndexes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "steppingOver", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "aborted", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "abortPromise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _RecordingPlayer_abortResolveFn.set(this, void 0);
        _RecordingPlayer_runner.set(this, void 0);
        this.userFlow = userFlow;
        this.speed = speed;
        this.timeout = userFlow.timeout || defaultTimeout;
        this.breakpointIndexes = breakpointIndexes;
        __classPrivateFieldSet(this, _RecordingPlayer_stopPromise, new Promise(resolve => {
            __classPrivateFieldSet(this, _RecordingPlayer_resolveStopPromise, resolve, "f");
        }), "f");
        this.abortPromise = new Promise(resolve => {
            __classPrivateFieldSet(this, _RecordingPlayer_abortResolveFn, resolve, "f");
        });
    }
    static async connectPuppeteer() {
        const rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().rootTarget();
        if (!rootTarget) {
            throw new Error('Could not find the root target');
        }
        const primaryPageTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!primaryPageTarget) {
            throw new Error('Could not find the primary page target');
        }
        const childTargetManager = primaryPageTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ChildTargetManager.ChildTargetManager);
        if (!childTargetManager) {
            throw new Error('Could not get childTargetManager');
        }
        const resourceTreeModel = primaryPageTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
        if (!resourceTreeModel) {
            throw new Error('Could not get resource tree model');
        }
        const mainFrame = resourceTreeModel.mainFrame;
        if (!mainFrame) {
            throw new Error('Could not find main frame');
        }
        const rootChildTargetManager = rootTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ChildTargetManager.ChildTargetManager);
        if (!rootChildTargetManager) {
            throw new Error('Could not find the child target manager class for the root target');
        }
        // Pass an empty message handler because it will be overwritten by puppeteer anyways.
        const result = await rootChildTargetManager.createParallelConnection(() => { });
        const connection = result.connection;
        const mainTargetId = await childTargetManager.getParentTargetId();
        const rootTargetId = await rootChildTargetManager.getParentTargetId();
        const { page, browser, puppeteerConnection } = await _services_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_2__.PuppeteerConnection.PuppeteerConnectionHelper.connectPuppeteerToConnectionViaTab({
            connection,
            rootTargetId: rootTargetId,
            isPageTargetCallback: isPageTarget,
        });
        if (!page) {
            throw new Error('could not find main page!');
        }
        browser.on('targetdiscovered', (targetInfo) => {
            // Pop-ups opened by the main target won't be auto-attached. Therefore,
            // we need to create a session for them explicitly. We user openedId
            // and type to classify a target as requiring a session.
            if (targetInfo.type !== 'page') {
                return;
            }
            if (targetInfo.targetId === mainTargetId) {
                return;
            }
            if (targetInfo.openerId !== mainTargetId) {
                return;
            }
            void puppeteerConnection._createSession(targetInfo, 
            /* emulateAutoAttach= */ true);
        });
        return { page, browser };
    }
    static async disconnectPuppeteer(browser) {
        try {
            const pages = await browser.pages();
            for (const page of pages) {
                const client = page._client();
                await client.send('Network.disable');
                await client.send('Page.disable');
                await client.send('Log.disable');
                await client.send('Performance.disable');
                await client.send('Runtime.disable');
                await client.send('Emulation.clearDeviceMetricsOverride');
                await client.send('Emulation.setAutomationOverride', { enabled: false });
                for (const frame of page.frames()) {
                    const client = frame.client;
                    await client.send('Network.disable');
                    await client.send('Page.disable');
                    await client.send('Log.disable');
                    await client.send('Performance.disable');
                    await client.send('Runtime.disable');
                    await client.send('Emulation.setAutomationOverride', { enabled: false });
                }
            }
            await browser.disconnect();
        }
        catch (err) {
            console.error('Error disconnecting Puppeteer', err.message);
        }
    }
    async stop() {
        await Promise.race([__classPrivateFieldGet(this, _RecordingPlayer_stopPromise, "f"), this.abortPromise]);
    }
    abort() {
        this.aborted = true;
        __classPrivateFieldGet(this, _RecordingPlayer_abortResolveFn, "f")?.call(this);
        __classPrivateFieldGet(this, _RecordingPlayer_runner, "f")?.abort();
    }
    disposeForTesting() {
        __classPrivateFieldGet(this, _RecordingPlayer_resolveStopPromise, "f")?.call(this);
        __classPrivateFieldGet(this, _RecordingPlayer_abortResolveFn, "f")?.call(this);
    }
    continue() {
        this.steppingOver = false;
        __classPrivateFieldGet(this, _RecordingPlayer_instances, "m", _RecordingPlayer_resolveAndRefreshStopPromise).call(this);
    }
    stepOver() {
        this.steppingOver = true;
        __classPrivateFieldGet(this, _RecordingPlayer_instances, "m", _RecordingPlayer_resolveAndRefreshStopPromise).call(this);
    }
    updateBreakpointIndexes(breakpointIndexes) {
        this.breakpointIndexes = breakpointIndexes;
    }
    async play() {
        var _ExtensionWithBreak_speed;
        const { page, browser } = await RecordingPlayer.connectPuppeteer();
        this.aborted = false;
        const player = this;
        class ExtensionWithBreak extends _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_3__.PuppeteerRunnerExtension {
            constructor(browser, page, { timeout, speed, }) {
                super(browser, page, { timeout });
                _ExtensionWithBreak_speed.set(this, void 0);
                __classPrivateFieldSet(this, _ExtensionWithBreak_speed, speed, "f");
            }
            async beforeEachStep(step, flow) {
                let resolver = () => { };
                const promise = new Promise(r => {
                    resolver = r;
                });
                player.dispatchEventToListeners(Events.Step, {
                    step,
                    resolve: resolver,
                });
                await promise;
                const currentStepIndex = flow.steps.indexOf(step);
                const shouldStopAtCurrentStep = player.steppingOver || player.breakpointIndexes.has(currentStepIndex);
                const shouldWaitForSpeed = step.type !== 'setViewport' && step.type !== 'navigate' && !player.aborted;
                if (shouldStopAtCurrentStep) {
                    player.dispatchEventToListeners(Events.Stop);
                    await player.stop();
                    player.dispatchEventToListeners(Events.Continue);
                }
                else if (shouldWaitForSpeed) {
                    await Promise.race([
                        new Promise(resolve => setTimeout(resolve, speedDelayMap[__classPrivateFieldGet(this, _ExtensionWithBreak_speed, "f")])),
                        player.abortPromise,
                    ]);
                }
            }
            async runStep(step, flow) {
                // When replaying on a DevTools target we skip setViewport and navigate steps
                // because navigation and viewport changes are not supported there.
                if (_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.schemeIs(page?.url(), 'devtools:') &&
                    (step.type === 'setViewport' || step.type === 'navigate')) {
                    return;
                }
                // Focus the target in case it's not focused.
                await this.page.bringToFront();
                await super.runStep(step, flow);
            }
        }
        _ExtensionWithBreak_speed = new WeakMap();
        const extension = new ExtensionWithBreak(browser, page, {
            timeout: this.timeout,
            speed: this.speed,
        });
        __classPrivateFieldSet(this, _RecordingPlayer_runner, await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_3__.createRunner(this.userFlow, extension), "f");
        let error;
        try {
            await __classPrivateFieldGet(this, _RecordingPlayer_runner, "f").run();
        }
        catch (err) {
            error = err;
            console.error('Replay error', err.message);
        }
        finally {
            await RecordingPlayer.disconnectPuppeteer(browser);
        }
        if (this.aborted) {
            this.dispatchEventToListeners(Events.Abort);
        }
        else if (error) {
            this.dispatchEventToListeners(Events.Error, error);
        }
        else {
            this.dispatchEventToListeners(Events.Done);
        }
    }
}
_RecordingPlayer_stopPromise = new WeakMap(), _RecordingPlayer_resolveStopPromise = new WeakMap(), _RecordingPlayer_abortResolveFn = new WeakMap(), _RecordingPlayer_runner = new WeakMap(), _RecordingPlayer_instances = new WeakSet(), _RecordingPlayer_resolveAndRefreshStopPromise = function _RecordingPlayer_resolveAndRefreshStopPromise() {
    __classPrivateFieldGet(this, _RecordingPlayer_resolveStopPromise, "f")?.call(this);
    __classPrivateFieldSet(this, _RecordingPlayer_stopPromise, new Promise(resolve => {
        __classPrivateFieldSet(this, _RecordingPlayer_resolveStopPromise, resolve, "f");
    }), "f");
};
var Events;
(function (Events) {
    Events["Abort"] = "Abort";
    Events["Done"] = "Done";
    Events["Step"] = "Step";
    Events["Stop"] = "Stop";
    Events["Error"] = "Error";
    Events["Continue"] = "Continue";
})(Events || (Events = {}));


/***/ }),

/***/ "./src/services/puppeteer/PuppeteerConnection.ts":
/*!*******************************************************!*\
  !*** ./src/services/puppeteer/PuppeteerConnection.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PuppeteerConnectionHelper: () => (/* binding */ PuppeteerConnectionHelper)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/puppeteer/puppeteer.js */ "./src/third_party/puppeteer/puppeteer.ts");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
var _Transport_connection;

class Transport {
    constructor(connection) {
        _Transport_connection.set(this, void 0);
        __classPrivateFieldSet(this, _Transport_connection, connection, "f");
    }
    send(data) {
        __classPrivateFieldGet(this, _Transport_connection, "f").sendRawMessage(data);
    }
    close() {
        void __classPrivateFieldGet(this, _Transport_connection, "f").disconnect();
    }
    set onmessage(cb) {
        __classPrivateFieldGet(this, _Transport_connection, "f").setOnMessage((message) => {
            const data = (message);
            if (!data.sessionId) {
                return;
            }
            return cb(JSON.stringify({
                ...data,
                // Puppeteer is expecting to use the default session, but we give it a non-default session in #connection.
                // Replace that sessionId with undefined so Puppeteer treats it as default.
                sessionId: data.sessionId === __classPrivateFieldGet(this, _Transport_connection, "f").getSessionId() ? undefined : data.sessionId,
            }));
        });
    }
    set onclose(cb) {
        const prev = __classPrivateFieldGet(this, _Transport_connection, "f").getOnDisconnect();
        __classPrivateFieldGet(this, _Transport_connection, "f").setOnDisconnect(reason => {
            if (prev) {
                prev(reason);
            }
            if (cb) {
                cb();
            }
        });
    }
}
_Transport_connection = new WeakMap();
class PuppeteerConnection extends _third_party_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_0__.Connection {
    async onMessage(message) {
        const msgObj = JSON.parse(message);
        if (msgObj.sessionId && !this._sessions.has(msgObj.sessionId)) {
            return;
        }
        void super.onMessage(message);
    }
}
class PuppeteerConnectionHelper {
    static async connectPuppeteerToConnectionViaTab(options) {
        const { connection, rootTargetId, isPageTargetCallback } = options;
        // Pass an empty message handler because it will be overwritten by puppeteer anyways.
        const transport = new Transport(connection);
        // url is an empty string in this case parallel to:
        // https://github.com/puppeteer/puppeteer/blob/f63a123ecef86693e6457b07437a96f108f3e3c5/src/common/BrowserConnector.ts#L72
        const puppeteerConnection = new PuppeteerConnection('', transport);
        const browserPromise = _third_party_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_0__.Browser._create('chrome', puppeteerConnection, [] /* contextIds */, false /* ignoreHTTPSErrors */, undefined /* defaultViewport */, undefined /* process */, undefined /* closeCallback */, undefined, target => isPageTargetCallback(target._getTargetInfo()), false /* waitForInitiallyDiscoveredTargets */);
        const [, browser] = await Promise.all([
            puppeteerConnection._createSession({ targetId: rootTargetId }, /* emulateAutoAttach= */ true),
            browserPromise,
        ]);
        await browser.waitForTarget(t => t.type() === 'page');
        const pages = await browser.pages();
        return { page: pages[0], browser, puppeteerConnection };
    }
}


/***/ }),

/***/ "./src/services/puppeteer/puppeteer.ts":
/*!*********************************************!*\
  !*** ./src/services/puppeteer/puppeteer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PuppeteerConnection: () => (/* reexport module object */ _PuppeteerConnection_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _PuppeteerConnection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PuppeteerConnection.js */ "./src/services/puppeteer/PuppeteerConnection.ts");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ }),

/***/ "./src/third_party/puppeteer-replay/puppeteer-replay.ts":
/*!**************************************************************!*\
  !*** ./src/third_party/puppeteer-replay/puppeteer-replay.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssertedEventType: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.AssertedEventType),
/* harmony export */   JSONStringifyExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.JSONStringifyExtension),
/* harmony export */   LighthouseRunnerExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.LighthouseRunnerExtension),
/* harmony export */   LighthouseStringifyExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.LighthouseStringifyExtension),
/* harmony export */   PuppeteerReplayStringifyExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerReplayStringifyExtension),
/* harmony export */   PuppeteerRunnerExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerRunnerExtension),
/* harmony export */   PuppeteerRunnerOwningBrowserExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerRunnerOwningBrowserExtension),
/* harmony export */   PuppeteerStringifyExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerStringifyExtension),
/* harmony export */   Runner: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.Runner),
/* harmony export */   RunnerExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.RunnerExtension),
/* harmony export */   Schema: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.Schema),
/* harmony export */   SelectorType: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.SelectorType),
/* harmony export */   StepType: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.StepType),
/* harmony export */   StringifyExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.StringifyExtension),
/* harmony export */   assertAllStepTypesAreHandled: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.assertAllStepTypesAreHandled),
/* harmony export */   createRunner: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.createRunner),
/* harmony export */   formatAsJSLiteral: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.formatAsJSLiteral),
/* harmony export */   formatJSONAsJS: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.formatJSONAsJS),
/* harmony export */   getSelectorType: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.getSelectorType),
/* harmony export */   maxTimeout: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.maxTimeout),
/* harmony export */   minTimeout: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.minTimeout),
/* harmony export */   mouseButtonMap: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.mouseButtonMap),
/* harmony export */   parse: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.parse),
/* harmony export */   parseSourceMap: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap),
/* harmony export */   parseStep: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.parseStep),
/* harmony export */   pointerDeviceTypes: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.pointerDeviceTypes),
/* harmony export */   selectorToPElementSelector: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.selectorToPElementSelector),
/* harmony export */   stringify: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.stringify),
/* harmony export */   stringifyStep: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.stringifyStep),
/* harmony export */   stripSourceMap: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap),
/* harmony export */   typeableInputTypes: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.typeableInputTypes),
/* harmony export */   validTimeout: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.validTimeout)
/* harmony export */ });
/* harmony import */ var _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/lib/main.js */ "./src/third_party/puppeteer-replay/package/lib/main.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ }),

/***/ "./src/third_party/puppeteer/puppeteer.ts":
/*!************************************************!*\
  !*** ./src/third_party/puppeteer/puppeteer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Browser: () => (/* reexport safe */ _package_lib_esm_puppeteer_cdp_Browser_js__WEBPACK_IMPORTED_MODULE_0__.CdpBrowser),
/* harmony export */   Connection: () => (/* reexport safe */ _package_lib_esm_puppeteer_cdp_Connection_js__WEBPACK_IMPORTED_MODULE_1__.Connection),
/* harmony export */   ElementHandle: () => (/* reexport safe */ _package_lib_esm_puppeteer_cdp_ElementHandle_js__WEBPACK_IMPORTED_MODULE_3__.CdpElementHandle),
/* harmony export */   Frame: () => (/* reexport safe */ _package_lib_esm_puppeteer_cdp_Frame_js__WEBPACK_IMPORTED_MODULE_2__.CdpFrame),
/* harmony export */   Page: () => (/* reexport safe */ _package_lib_esm_puppeteer_cdp_Page_js__WEBPACK_IMPORTED_MODULE_4__.CdpPage),
/* harmony export */   Target: () => (/* reexport safe */ _package_lib_esm_puppeteer_cdp_Target_js__WEBPACK_IMPORTED_MODULE_5__.CdpTarget)
/* harmony export */ });
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Browser.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Browser.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Connection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Connection.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Frame.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Frame.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_ElementHandle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/ElementHandle.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/ElementHandle.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Page.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Page.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Target_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Target.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Target.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









/***/ })

}]);