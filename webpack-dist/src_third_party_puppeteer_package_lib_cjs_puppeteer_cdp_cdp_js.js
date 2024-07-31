"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_cdp_cdp_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/ExtensionTransport.js":
/*!***************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/ExtensionTransport.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExtensionTransport = void 0;
const tabTargetInfo = {
    targetId: 'tabTargetId',
    type: 'tab',
    title: 'tab',
    url: 'about:blank',
    attached: false,
    canAccessOpener: false,
};
const pageTargetInfo = {
    targetId: 'pageTargetId',
    type: 'page',
    title: 'page',
    url: 'about:blank',
    attached: false,
    canAccessOpener: false,
};
/**
 * Experimental ExtensionTransport allows establishing a connection via
 * chrome.debugger API if Puppeteer runs in an extension. Since Chrome
 * DevTools Protocol is restricted for extensions, the transport
 * implements missing commands and events.
 *
 * @experimental
 * @public
 */
class ExtensionTransport {
    static async connectTab(tabId) {
        await chrome.debugger.attach({ tabId }, '1.3');
        return new ExtensionTransport(tabId);
    }
    onmessage;
    onclose;
    #tabId;
    /**
     * @internal
     */
    constructor(tabId) {
        this.#tabId = tabId;
        chrome.debugger.onEvent.addListener(this.#debuggerEventHandler);
    }
    #debuggerEventHandler = (source, method, params) => {
        if (source.tabId !== this.#tabId) {
            return;
        }
        this.#dispatchResponse({
            // @ts-expect-error sessionId is not in stable yet.
            sessionId: source.sessionId ?? 'pageTargetSessionId',
            method: method,
            params: params,
        });
    };
    #dispatchResponse(message) {
        this.onmessage?.(JSON.stringify(message));
    }
    send(message) {
        const parsed = JSON.parse(message);
        switch (parsed.method) {
            case 'Browser.getVersion': {
                this.#dispatchResponse({
                    id: parsed.id,
                    sessionId: parsed.sessionId,
                    method: parsed.method,
                    result: {
                        protocolVersion: '1.3',
                        product: 'chrome',
                        revision: 'unknown',
                        userAgent: 'chrome',
                        jsVersion: 'unknown',
                    },
                });
                return;
            }
            case 'Target.getBrowserContexts': {
                this.#dispatchResponse({
                    id: parsed.id,
                    sessionId: parsed.sessionId,
                    method: parsed.method,
                    result: {
                        browserContextIds: [],
                    },
                });
                return;
            }
            case 'Target.setDiscoverTargets': {
                this.#dispatchResponse({
                    method: 'Target.targetCreated',
                    params: {
                        targetInfo: tabTargetInfo,
                    },
                });
                this.#dispatchResponse({
                    method: 'Target.targetCreated',
                    params: {
                        targetInfo: pageTargetInfo,
                    },
                });
                this.#dispatchResponse({
                    id: parsed.id,
                    sessionId: parsed.sessionId,
                    method: parsed.method,
                    result: {},
                });
                return;
            }
            case 'Target.setAutoAttach': {
                if (parsed.sessionId === 'tabTargetSessionId') {
                    this.#dispatchResponse({
                        method: 'Target.attachedToTarget',
                        params: {
                            targetInfo: pageTargetInfo,
                            sessionId: 'pageTargetSessionId',
                        },
                    });
                }
                else if (!parsed.sessionId) {
                    this.#dispatchResponse({
                        method: 'Target.attachedToTarget',
                        params: {
                            targetInfo: tabTargetInfo,
                            sessionId: 'tabTargetSessionId',
                        },
                    });
                }
                this.#dispatchResponse({
                    id: parsed.id,
                    sessionId: parsed.sessionId,
                    method: parsed.method,
                    result: {},
                });
                return;
            }
        }
        if (parsed.sessionId === 'pageTargetSessionId') {
            delete parsed.sessionId;
        }
        chrome.debugger
            .sendCommand(
        // @ts-expect-error sessionId is not in stable yet.
        { tabId: this.#tabId, sessionId: parsed.sessionId }, parsed.method, parsed.params)
            .then(response => {
            this.#dispatchResponse({
                id: parsed.id,
                sessionId: parsed.sessionId ?? 'pageTargetSessionId',
                method: parsed.method,
                result: response,
            });
        })
            .catch(err => {
            this.#dispatchResponse({
                id: parsed.id,
                sessionId: parsed.sessionId ?? 'pageTargetSessionId',
                method: parsed.method,
                error: err,
            });
        });
    }
    close() {
        chrome.debugger.onEvent.removeListener(this.#debuggerEventHandler);
        void chrome.debugger.detach({ tabId: this.#tabId });
    }
}
exports.ExtensionTransport = ExtensionTransport;
//# sourceMappingURL=ExtensionTransport.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/PredefinedNetworkConditions.js":
/*!************************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/PredefinedNetworkConditions.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2021 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PredefinedNetworkConditions = void 0;
/**
 * A list of pre-defined network conditions to be used with
 * {@link Page.emulateNetworkConditions}.
 *
 * @example
 *
 * ```ts
 * import {PredefinedNetworkConditions} from 'puppeteer';
 * (async () => {
 *   const browser = await puppeteer.launch();
 *   const page = await browser.newPage();
 *   await page.emulateNetworkConditions(
 *     PredefinedNetworkConditions['Slow 3G']
 *   );
 *   await page.goto('https://www.google.com');
 *   await page.emulateNetworkConditions(
 *     PredefinedNetworkConditions['Fast 3G']
 *   );
 *   await page.goto('https://www.google.com');
 *   await page.emulateNetworkConditions(
 *     PredefinedNetworkConditions['Slow 4G']
 *   ); // alias to Fast 3G.
 *   await page.goto('https://www.google.com');
 *   await page.emulateNetworkConditions(
 *     PredefinedNetworkConditions['Fast 4G']
 *   );
 *   await page.goto('https://www.google.com');
 *   // other actions...
 *   await browser.close();
 * })();
 * ```
 *
 * @public
 */
exports.PredefinedNetworkConditions = Object.freeze({
    // Generally aligned with DevTools
    // https://source.chromium.org/chromium/chromium/src/+/main:third_party/devtools-frontend/src/front_end/core/sdk/NetworkManager.ts;l=398;drc=225e1240f522ca684473f541ae6dae6cd766dd33.
    'Slow 3G': {
        // ~500Kbps down
        download: ((500 * 1000) / 8) * 0.8,
        // ~500Kbps up
        upload: ((500 * 1000) / 8) * 0.8,
        // 400ms RTT
        latency: 400 * 5,
    },
    'Fast 3G': {
        // ~1.6 Mbps down
        download: ((1.6 * 1000 * 1000) / 8) * 0.9,
        // ~0.75 Mbps up
        upload: ((750 * 1000) / 8) * 0.9,
        // 150ms RTT
        latency: 150 * 3.75,
    },
    // alias to Fast 3G to align with Lighthouse (crbug.com/342406608)
    // and DevTools (crbug.com/342406608),
    'Slow 4G': {
        // ~1.6 Mbps down
        download: ((1.6 * 1000 * 1000) / 8) * 0.9,
        // ~0.75 Mbps up
        upload: ((750 * 1000) / 8) * 0.9,
        // 150ms RTT
        latency: 150 * 3.75,
    },
    'Fast 4G': {
        // 9 Mbps down
        download: ((9 * 1000 * 1000) / 8) * 0.9,
        // 1.5 Mbps up
        upload: ((1.5 * 1000 * 1000) / 8) * 0.9,
        // 60ms RTT
        latency: 60 * 2.75,
    },
});
//# sourceMappingURL=PredefinedNetworkConditions.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/TargetManager.js":
/*!**********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/TargetManager.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=TargetManager.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/cdp.js":
/*!************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/cdp.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2023 Google Inc.
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
__exportStar(__webpack_require__(/*! ./Accessibility.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Accessibility.js"), exports);
__exportStar(__webpack_require__(/*! ./AriaQueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/AriaQueryHandler.js"), exports);
__exportStar(__webpack_require__(/*! ./Binding.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Binding.js"), exports);
__exportStar(__webpack_require__(/*! ./Browser.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Browser.js"), exports);
__exportStar(__webpack_require__(/*! ./BrowserConnector.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/BrowserConnector.js"), exports);
__exportStar(__webpack_require__(/*! ./CDPSession.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/CDPSession.js"), exports);
__exportStar(__webpack_require__(/*! ./ChromeTargetManager.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/ChromeTargetManager.js"), exports);
__exportStar(__webpack_require__(/*! ./Connection.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Connection.js"), exports);
__exportStar(__webpack_require__(/*! ./Coverage.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Coverage.js"), exports);
__exportStar(__webpack_require__(/*! ./DeviceRequestPrompt.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/DeviceRequestPrompt.js"), exports);
__exportStar(__webpack_require__(/*! ./Dialog.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Dialog.js"), exports);
__exportStar(__webpack_require__(/*! ./ElementHandle.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/ElementHandle.js"), exports);
__exportStar(__webpack_require__(/*! ./EmulationManager.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/EmulationManager.js"), exports);
__exportStar(__webpack_require__(/*! ./ExecutionContext.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/ExecutionContext.js"), exports);
__exportStar(__webpack_require__(/*! ./ExtensionTransport.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/ExtensionTransport.js"), exports);
__exportStar(__webpack_require__(/*! ./FirefoxTargetManager.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/FirefoxTargetManager.js"), exports);
__exportStar(__webpack_require__(/*! ./Frame.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Frame.js"), exports);
__exportStar(__webpack_require__(/*! ./FrameManager.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/FrameManager.js"), exports);
__exportStar(__webpack_require__(/*! ./FrameManagerEvents.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/FrameManagerEvents.js"), exports);
__exportStar(__webpack_require__(/*! ./FrameTree.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/FrameTree.js"), exports);
__exportStar(__webpack_require__(/*! ./HTTPRequest.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/HTTPRequest.js"), exports);
__exportStar(__webpack_require__(/*! ./HTTPResponse.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/HTTPResponse.js"), exports);
__exportStar(__webpack_require__(/*! ./Input.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Input.js"), exports);
__exportStar(__webpack_require__(/*! ./IsolatedWorld.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/IsolatedWorld.js"), exports);
__exportStar(__webpack_require__(/*! ./IsolatedWorlds.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/IsolatedWorlds.js"), exports);
__exportStar(__webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/JSHandle.js"), exports);
__exportStar(__webpack_require__(/*! ./LifecycleWatcher.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/LifecycleWatcher.js"), exports);
__exportStar(__webpack_require__(/*! ./NetworkEventManager.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/NetworkEventManager.js"), exports);
__exportStar(__webpack_require__(/*! ./NetworkManager.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/NetworkManager.js"), exports);
__exportStar(__webpack_require__(/*! ./Page.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Page.js"), exports);
__exportStar(__webpack_require__(/*! ./PredefinedNetworkConditions.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/PredefinedNetworkConditions.js"), exports);
__exportStar(__webpack_require__(/*! ./Target.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Target.js"), exports);
__exportStar(__webpack_require__(/*! ./TargetManager.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/TargetManager.js"), exports);
__exportStar(__webpack_require__(/*! ./Tracing.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Tracing.js"), exports);
__exportStar(__webpack_require__(/*! ./utils.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/utils.js"), exports);
__exportStar(__webpack_require__(/*! ./WebWorker.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/WebWorker.js"), exports);
//# sourceMappingURL=cdp.js.map

/***/ })

}]);