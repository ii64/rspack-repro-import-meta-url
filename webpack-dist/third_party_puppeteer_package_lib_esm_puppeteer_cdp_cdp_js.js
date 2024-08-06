"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_cdp_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/BrowserConnector.js":
/*!*********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/BrowserConnector.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _connectToCdpBrowser: () => (/* binding */ _connectToCdpBrowser)
/* harmony export */ });
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _Browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Browser.js");
/* harmony import */ var _Connection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Connection.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js");
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/**
 * Users should never call this directly; it's called when calling
 * `puppeteer.connect` with `protocol: 'cdp'`.
 *
 * @internal
 */
async function _connectToCdpBrowser(connectionTransport, url, options) {
    const { ignoreHTTPSErrors = false, defaultViewport = _common_util_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_VIEWPORT, targetFilter, _isPageTarget: isPageTarget, slowMo = 0, protocolTimeout, } = options;
    const connection = new _Connection_js__WEBPACK_IMPORTED_MODULE_2__.Connection(url, connectionTransport, slowMo, protocolTimeout);
    const version = await connection.send('Browser.getVersion');
    const product = version.product.toLowerCase().includes('firefox')
        ? 'firefox'
        : 'chrome';
    const { browserContextIds } = await connection.send('Target.getBrowserContexts');
    const browser = await _Browser_js__WEBPACK_IMPORTED_MODULE_1__.CdpBrowser._create(product || 'chrome', connection, browserContextIds, ignoreHTTPSErrors, defaultViewport, undefined, () => {
        return connection.send('Browser.close').catch(_common_util_js__WEBPACK_IMPORTED_MODULE_0__.debugError);
    }, targetFilter, isPageTarget);
    return browser;
}
//# sourceMappingURL=BrowserConnector.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ExtensionTransport.js":
/*!***********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ExtensionTransport.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionTransport: () => (/* binding */ ExtensionTransport)
/* harmony export */ });
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
//# sourceMappingURL=ExtensionTransport.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/PredefinedNetworkConditions.js":
/*!********************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/PredefinedNetworkConditions.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PredefinedNetworkConditions: () => (/* binding */ PredefinedNetworkConditions)
/* harmony export */ });
/**
 * @license
 * Copyright 2021 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
const PredefinedNetworkConditions = Object.freeze({
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

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/TargetManager.js":
/*!******************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/TargetManager.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

//# sourceMappingURL=TargetManager.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/cdp.js":
/*!********************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/cdp.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARIAQueryHandler: () => (/* reexport safe */ _AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__.ARIAQueryHandler),
/* harmony export */   Accessibility: () => (/* reexport safe */ _Accessibility_js__WEBPACK_IMPORTED_MODULE_0__.Accessibility),
/* harmony export */   Binding: () => (/* reexport safe */ _Binding_js__WEBPACK_IMPORTED_MODULE_2__.Binding),
/* harmony export */   CDP_BINDING_PREFIX: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_34__.CDP_BINDING_PREFIX),
/* harmony export */   CSSCoverage: () => (/* reexport safe */ _Coverage_js__WEBPACK_IMPORTED_MODULE_8__.CSSCoverage),
/* harmony export */   CdpBrowser: () => (/* reexport safe */ _Browser_js__WEBPACK_IMPORTED_MODULE_3__.CdpBrowser),
/* harmony export */   CdpCDPSession: () => (/* reexport safe */ _CDPSession_js__WEBPACK_IMPORTED_MODULE_5__.CdpCDPSession),
/* harmony export */   CdpDialog: () => (/* reexport safe */ _Dialog_js__WEBPACK_IMPORTED_MODULE_10__.CdpDialog),
/* harmony export */   CdpElementHandle: () => (/* reexport safe */ _ElementHandle_js__WEBPACK_IMPORTED_MODULE_11__.CdpElementHandle),
/* harmony export */   CdpFrame: () => (/* reexport safe */ _Frame_js__WEBPACK_IMPORTED_MODULE_16__.CdpFrame),
/* harmony export */   CdpHTTPRequest: () => (/* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_20__.CdpHTTPRequest),
/* harmony export */   CdpHTTPResponse: () => (/* reexport safe */ _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_21__.CdpHTTPResponse),
/* harmony export */   CdpJSHandle: () => (/* reexport safe */ _JSHandle_js__WEBPACK_IMPORTED_MODULE_25__.CdpJSHandle),
/* harmony export */   CdpKeyboard: () => (/* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_22__.CdpKeyboard),
/* harmony export */   CdpMouse: () => (/* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_22__.CdpMouse),
/* harmony export */   CdpPage: () => (/* reexport safe */ _Page_js__WEBPACK_IMPORTED_MODULE_29__.CdpPage),
/* harmony export */   CdpTarget: () => (/* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_31__.CdpTarget),
/* harmony export */   CdpTouchscreen: () => (/* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_22__.CdpTouchscreen),
/* harmony export */   CdpWebWorker: () => (/* reexport safe */ _WebWorker_js__WEBPACK_IMPORTED_MODULE_35__.CdpWebWorker),
/* harmony export */   ChromeTargetManager: () => (/* reexport safe */ _ChromeTargetManager_js__WEBPACK_IMPORTED_MODULE_6__.ChromeTargetManager),
/* harmony export */   Connection: () => (/* reexport safe */ _Connection_js__WEBPACK_IMPORTED_MODULE_7__.Connection),
/* harmony export */   Coverage: () => (/* reexport safe */ _Coverage_js__WEBPACK_IMPORTED_MODULE_8__.Coverage),
/* harmony export */   DevToolsTarget: () => (/* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_31__.DevToolsTarget),
/* harmony export */   DeviceRequestPrompt: () => (/* reexport safe */ _DeviceRequestPrompt_js__WEBPACK_IMPORTED_MODULE_9__.DeviceRequestPrompt),
/* harmony export */   DeviceRequestPromptDevice: () => (/* reexport safe */ _DeviceRequestPrompt_js__WEBPACK_IMPORTED_MODULE_9__.DeviceRequestPromptDevice),
/* harmony export */   DeviceRequestPromptManager: () => (/* reexport safe */ _DeviceRequestPrompt_js__WEBPACK_IMPORTED_MODULE_9__.DeviceRequestPromptManager),
/* harmony export */   EmulatedState: () => (/* reexport safe */ _EmulationManager_js__WEBPACK_IMPORTED_MODULE_12__.EmulatedState),
/* harmony export */   EmulationManager: () => (/* reexport safe */ _EmulationManager_js__WEBPACK_IMPORTED_MODULE_12__.EmulationManager),
/* harmony export */   ExecutionContext: () => (/* reexport safe */ _ExecutionContext_js__WEBPACK_IMPORTED_MODULE_13__.ExecutionContext),
/* harmony export */   ExtensionTransport: () => (/* reexport safe */ _ExtensionTransport_js__WEBPACK_IMPORTED_MODULE_14__.ExtensionTransport),
/* harmony export */   FirefoxTargetManager: () => (/* reexport safe */ _FirefoxTargetManager_js__WEBPACK_IMPORTED_MODULE_15__.FirefoxTargetManager),
/* harmony export */   FrameManager: () => (/* reexport safe */ _FrameManager_js__WEBPACK_IMPORTED_MODULE_17__.FrameManager),
/* harmony export */   FrameManagerEvent: () => (/* reexport safe */ _FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_18__.FrameManagerEvent),
/* harmony export */   FrameTree: () => (/* reexport safe */ _FrameTree_js__WEBPACK_IMPORTED_MODULE_19__.FrameTree),
/* harmony export */   InitializationStatus: () => (/* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_31__.InitializationStatus),
/* harmony export */   IsolatedWorld: () => (/* reexport safe */ _IsolatedWorld_js__WEBPACK_IMPORTED_MODULE_23__.IsolatedWorld),
/* harmony export */   JSCoverage: () => (/* reexport safe */ _Coverage_js__WEBPACK_IMPORTED_MODULE_8__.JSCoverage),
/* harmony export */   LifecycleWatcher: () => (/* reexport safe */ _LifecycleWatcher_js__WEBPACK_IMPORTED_MODULE_26__.LifecycleWatcher),
/* harmony export */   MAIN_WORLD: () => (/* reexport safe */ _IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_24__.MAIN_WORLD),
/* harmony export */   NetworkEventManager: () => (/* reexport safe */ _NetworkEventManager_js__WEBPACK_IMPORTED_MODULE_27__.NetworkEventManager),
/* harmony export */   NetworkManager: () => (/* reexport safe */ _NetworkManager_js__WEBPACK_IMPORTED_MODULE_28__.NetworkManager),
/* harmony export */   OtherTarget: () => (/* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_31__.OtherTarget),
/* harmony export */   PUPPETEER_WORLD: () => (/* reexport safe */ _IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_24__.PUPPETEER_WORLD),
/* harmony export */   PageTarget: () => (/* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_31__.PageTarget),
/* harmony export */   PredefinedNetworkConditions: () => (/* reexport safe */ _PredefinedNetworkConditions_js__WEBPACK_IMPORTED_MODULE_30__.PredefinedNetworkConditions),
/* harmony export */   Tracing: () => (/* reexport safe */ _Tracing_js__WEBPACK_IMPORTED_MODULE_33__.Tracing),
/* harmony export */   WorkerTarget: () => (/* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_31__.WorkerTarget),
/* harmony export */   _connectToCdpBrowser: () => (/* reexport safe */ _BrowserConnector_js__WEBPACK_IMPORTED_MODULE_4__._connectToCdpBrowser),
/* harmony export */   addPageBinding: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_34__.addPageBinding),
/* harmony export */   createClientError: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_34__.createClientError),
/* harmony export */   createEvaluationError: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_34__.createEvaluationError),
/* harmony export */   isTargetClosedError: () => (/* reexport safe */ _Connection_js__WEBPACK_IMPORTED_MODULE_7__.isTargetClosedError),
/* harmony export */   pageBindingInitString: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_34__.pageBindingInitString),
/* harmony export */   releaseObject: () => (/* reexport safe */ _JSHandle_js__WEBPACK_IMPORTED_MODULE_25__.releaseObject),
/* harmony export */   valueFromRemoteObject: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_34__.valueFromRemoteObject)
/* harmony export */ });
/* harmony import */ var _Accessibility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accessibility.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Accessibility.js");
/* harmony import */ var _AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AriaQueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/AriaQueryHandler.js");
/* harmony import */ var _Binding_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Binding.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Binding.js");
/* harmony import */ var _Browser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Browser.js");
/* harmony import */ var _BrowserConnector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BrowserConnector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/BrowserConnector.js");
/* harmony import */ var _CDPSession_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/CDPSession.js");
/* harmony import */ var _ChromeTargetManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChromeTargetManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ChromeTargetManager.js");
/* harmony import */ var _Connection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Connection.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js");
/* harmony import */ var _Coverage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Coverage.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Coverage.js");
/* harmony import */ var _DeviceRequestPrompt_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DeviceRequestPrompt.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/DeviceRequestPrompt.js");
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Dialog.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Dialog.js");
/* harmony import */ var _ElementHandle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ElementHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ElementHandle.js");
/* harmony import */ var _EmulationManager_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EmulationManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/EmulationManager.js");
/* harmony import */ var _ExecutionContext_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ExecutionContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ExecutionContext.js");
/* harmony import */ var _ExtensionTransport_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ExtensionTransport.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ExtensionTransport.js");
/* harmony import */ var _FirefoxTargetManager_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FirefoxTargetManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FirefoxTargetManager.js");
/* harmony import */ var _Frame_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Frame.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Frame.js");
/* harmony import */ var _FrameManager_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./FrameManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManager.js");
/* harmony import */ var _FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./FrameManagerEvents.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManagerEvents.js");
/* harmony import */ var _FrameTree_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./FrameTree.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameTree.js");
/* harmony import */ var _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./HTTPRequest.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/HTTPRequest.js");
/* harmony import */ var _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./HTTPResponse.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/HTTPResponse.js");
/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Input.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Input.js");
/* harmony import */ var _IsolatedWorld_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./IsolatedWorld.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorld.js");
/* harmony import */ var _IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./IsolatedWorlds.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorlds.js");
/* harmony import */ var _JSHandle_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/JSHandle.js");
/* harmony import */ var _LifecycleWatcher_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./LifecycleWatcher.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/LifecycleWatcher.js");
/* harmony import */ var _NetworkEventManager_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./NetworkEventManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/NetworkEventManager.js");
/* harmony import */ var _NetworkManager_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./NetworkManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/NetworkManager.js");
/* harmony import */ var _Page_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Page.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Page.js");
/* harmony import */ var _PredefinedNetworkConditions_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./PredefinedNetworkConditions.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/PredefinedNetworkConditions.js");
/* harmony import */ var _Target_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Target.js");
/* harmony import */ var _TargetManager_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./TargetManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/TargetManager.js");
/* harmony import */ var _Tracing_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Tracing.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Tracing.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./utils.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/utils.js");
/* harmony import */ var _WebWorker_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./WebWorker.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/WebWorker.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */




































//# sourceMappingURL=cdp.js.map

/***/ })

}]);