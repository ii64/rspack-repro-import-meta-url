"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_models_RecordingPlayer_js"],{

/***/ "./panels/recorder/models/RecordingPlayer.js":
/*!***************************************************!*\
  !*** ./panels/recorder/models/RecordingPlayer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordingPlayer: () => (/* binding */ RecordingPlayer),
/* harmony export */   defaultTimeout: () => (/* binding */ defaultTimeout)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _services_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/puppeteer/puppeteer.js */ "./services/puppeteer/puppeteer.js");
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const speedDelayMap = {
    ["normal" /* PlayRecordingSpeed.Normal */]: 0,
    ["slow" /* PlayRecordingSpeed.Slow */]: 500,
    ["very_slow" /* PlayRecordingSpeed.VerySlow */]: 1000,
    ["extremely_slow" /* PlayRecordingSpeed.ExtremelySlow */]: 2000,
};
const defaultTimeout = 5000; // ms
function isPageTarget(target) {
    // Treat DevTools targets as page targets too.
    return (_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.schemeIs(target.url, 'devtools:') || target.type === 'page' ||
        target.type === 'background_page' || target.type === 'webview');
}
class RecordingPlayer extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    #stopPromise;
    #resolveStopPromise;
    userFlow;
    speed;
    timeout;
    breakpointIndexes;
    steppingOver = false;
    aborted = false;
    abortPromise;
    #abortResolveFn;
    #runner;
    constructor(userFlow, { speed, breakpointIndexes = new Set(), }) {
        super();
        this.userFlow = userFlow;
        this.speed = speed;
        this.timeout = userFlow.timeout || defaultTimeout;
        this.breakpointIndexes = breakpointIndexes;
        this.#stopPromise = new Promise(resolve => {
            this.#resolveStopPromise = resolve;
        });
        this.abortPromise = new Promise(resolve => {
            this.#abortResolveFn = resolve;
        });
    }
    #resolveAndRefreshStopPromise() {
        this.#resolveStopPromise?.();
        this.#stopPromise = new Promise(resolve => {
            this.#resolveStopPromise = resolve;
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
        await Promise.race([this.#stopPromise, this.abortPromise]);
    }
    abort() {
        this.aborted = true;
        this.#abortResolveFn?.();
        this.#runner?.abort();
    }
    disposeForTesting() {
        this.#resolveStopPromise?.();
        this.#abortResolveFn?.();
    }
    continue() {
        this.steppingOver = false;
        this.#resolveAndRefreshStopPromise();
    }
    stepOver() {
        this.steppingOver = true;
        this.#resolveAndRefreshStopPromise();
    }
    updateBreakpointIndexes(breakpointIndexes) {
        this.breakpointIndexes = breakpointIndexes;
    }
    async play() {
        const { page, browser } = await RecordingPlayer.connectPuppeteer();
        this.aborted = false;
        const player = this;
        class ExtensionWithBreak extends _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_3__.PuppeteerRunnerExtension {
            #speed;
            constructor(browser, page, { timeout, speed, }) {
                super(browser, page, { timeout });
                this.#speed = speed;
            }
            async beforeEachStep(step, flow) {
                let resolver = () => { };
                const promise = new Promise(r => {
                    resolver = r;
                });
                player.dispatchEventToListeners("Step" /* Events.Step */, {
                    step,
                    resolve: resolver,
                });
                await promise;
                const currentStepIndex = flow.steps.indexOf(step);
                const shouldStopAtCurrentStep = player.steppingOver || player.breakpointIndexes.has(currentStepIndex);
                const shouldWaitForSpeed = step.type !== 'setViewport' && step.type !== 'navigate' && !player.aborted;
                if (shouldStopAtCurrentStep) {
                    player.dispatchEventToListeners("Stop" /* Events.Stop */);
                    await player.stop();
                    player.dispatchEventToListeners("Continue" /* Events.Continue */);
                }
                else if (shouldWaitForSpeed) {
                    await Promise.race([
                        new Promise(resolve => setTimeout(resolve, speedDelayMap[this.#speed])),
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
        const extension = new ExtensionWithBreak(browser, page, {
            timeout: this.timeout,
            speed: this.speed,
        });
        this.#runner = await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_3__.createRunner(this.userFlow, extension);
        let error;
        try {
            await this.#runner.run();
        }
        catch (err) {
            error = err;
            console.error('Replay error', err.message);
        }
        finally {
            await RecordingPlayer.disconnectPuppeteer(browser);
        }
        if (this.aborted) {
            this.dispatchEventToListeners("Abort" /* Events.Abort */);
        }
        else if (error) {
            this.dispatchEventToListeners("Error" /* Events.Error */, error);
        }
        else {
            this.dispatchEventToListeners("Done" /* Events.Done */);
        }
    }
}
//# sourceMappingURL=RecordingPlayer.js.map

/***/ }),

/***/ "./services/puppeteer/PuppeteerConnection.js":
/*!***************************************************!*\
  !*** ./services/puppeteer/PuppeteerConnection.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PuppeteerConnectionHelper: () => (/* binding */ PuppeteerConnectionHelper)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/puppeteer/puppeteer.js */ "./third_party/puppeteer/puppeteer.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class Transport {
    #connection;
    constructor(connection) {
        this.#connection = connection;
    }
    send(data) {
        this.#connection.sendRawMessage(data);
    }
    close() {
        void this.#connection.disconnect();
    }
    set onmessage(cb) {
        this.#connection.setOnMessage((message) => {
            const data = (message);
            if (!data.sessionId) {
                return;
            }
            return cb(JSON.stringify({
                ...data,
                // Puppeteer is expecting to use the default session, but we give it a non-default session in #connection.
                // Replace that sessionId with undefined so Puppeteer treats it as default.
                sessionId: data.sessionId === this.#connection.getSessionId() ? undefined : data.sessionId,
            }));
        });
    }
    set onclose(cb) {
        const prev = this.#connection.getOnDisconnect();
        this.#connection.setOnDisconnect(reason => {
            if (prev) {
                prev(reason);
            }
            if (cb) {
                cb();
            }
        });
    }
}
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
//# sourceMappingURL=PuppeteerConnection.js.map

/***/ }),

/***/ "./services/puppeteer/puppeteer.js":
/*!*****************************************!*\
  !*** ./services/puppeteer/puppeteer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PuppeteerConnection: () => (/* reexport module object */ _PuppeteerConnection_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _PuppeteerConnection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PuppeteerConnection.js */ "./services/puppeteer/PuppeteerConnection.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=puppeteer.js.map

/***/ }),

/***/ "./third_party/puppeteer/puppeteer.js":
/*!********************************************!*\
  !*** ./third_party/puppeteer/puppeteer.js ***!
  \********************************************/
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
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Browser.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Connection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Connection.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Frame.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Frame.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_ElementHandle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/ElementHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ElementHandle.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Page.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Page.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Target_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Target.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







//# sourceMappingURL=puppeteer.js.map

/***/ })

}]);