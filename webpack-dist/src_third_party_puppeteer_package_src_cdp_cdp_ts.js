"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_cdp_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/ExtensionTransport.ts":
/*!*************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/ExtensionTransport.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionTransport: () => (/* binding */ ExtensionTransport)
/* harmony export */ });
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
var _ExtensionTransport_instances, _ExtensionTransport_tabId, _ExtensionTransport_debuggerEventHandler, _ExtensionTransport_dispatchResponse;
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
    /**
     * @internal
     */
    constructor(tabId) {
        _ExtensionTransport_instances.add(this);
        Object.defineProperty(this, "onmessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "onclose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _ExtensionTransport_tabId.set(this, void 0);
        _ExtensionTransport_debuggerEventHandler.set(this, (source, method, params) => {
            if (source.tabId !== __classPrivateFieldGet(this, _ExtensionTransport_tabId, "f")) {
                return;
            }
            __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                // @ts-expect-error sessionId is not in stable yet.
                sessionId: source.sessionId ?? 'pageTargetSessionId',
                method: method,
                params: params,
            });
        });
        __classPrivateFieldSet(this, _ExtensionTransport_tabId, tabId, "f");
        chrome.debugger.onEvent.addListener(__classPrivateFieldGet(this, _ExtensionTransport_debuggerEventHandler, "f"));
    }
    send(message) {
        const parsed = JSON.parse(message);
        switch (parsed.method) {
            case 'Browser.getVersion': {
                __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
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
                __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
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
                __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                    method: 'Target.targetCreated',
                    params: {
                        targetInfo: tabTargetInfo,
                    },
                });
                __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                    method: 'Target.targetCreated',
                    params: {
                        targetInfo: pageTargetInfo,
                    },
                });
                __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                    id: parsed.id,
                    sessionId: parsed.sessionId,
                    method: parsed.method,
                    result: {},
                });
                return;
            }
            case 'Target.setAutoAttach': {
                if (parsed.sessionId === 'tabTargetSessionId') {
                    __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                        method: 'Target.attachedToTarget',
                        params: {
                            targetInfo: pageTargetInfo,
                            sessionId: 'pageTargetSessionId',
                        },
                    });
                }
                else if (!parsed.sessionId) {
                    __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                        method: 'Target.attachedToTarget',
                        params: {
                            targetInfo: tabTargetInfo,
                            sessionId: 'tabTargetSessionId',
                        },
                    });
                }
                __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
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
        { tabId: __classPrivateFieldGet(this, _ExtensionTransport_tabId, "f"), sessionId: parsed.sessionId }, parsed.method, parsed.params)
            .then(response => {
            __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                id: parsed.id,
                sessionId: parsed.sessionId ?? 'pageTargetSessionId',
                method: parsed.method,
                result: response,
            });
        })
            .catch(err => {
            __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                id: parsed.id,
                sessionId: parsed.sessionId ?? 'pageTargetSessionId',
                method: parsed.method,
                error: err,
            });
        });
    }
    close() {
        chrome.debugger.onEvent.removeListener(__classPrivateFieldGet(this, _ExtensionTransport_debuggerEventHandler, "f"));
        void chrome.debugger.detach({ tabId: __classPrivateFieldGet(this, _ExtensionTransport_tabId, "f") });
    }
}
_ExtensionTransport_tabId = new WeakMap(), _ExtensionTransport_debuggerEventHandler = new WeakMap(), _ExtensionTransport_instances = new WeakSet(), _ExtensionTransport_dispatchResponse = function _ExtensionTransport_dispatchResponse(message) {
    this.onmessage?.(JSON.stringify(message));
};


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/cdp/PredefinedNetworkConditions.ts":
/*!**********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/PredefinedNetworkConditions.ts ***!
  \**********************************************************************************/
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


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/cdp/cdp.ts":
/*!**********************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/cdp.ts ***!
  \**********************************************************/
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
/* harmony export */   TargetManagerEvent: () => (/* reexport safe */ _TargetManager_js__WEBPACK_IMPORTED_MODULE_32__.TargetManagerEvent),
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
/* harmony import */ var _Accessibility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accessibility.js */ "./src/third_party/puppeteer/package/src/cdp/Accessibility.ts");
/* harmony import */ var _AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AriaQueryHandler.js */ "./src/third_party/puppeteer/package/src/cdp/AriaQueryHandler.ts");
/* harmony import */ var _Binding_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Binding.js */ "./src/third_party/puppeteer/package/src/cdp/Binding.ts");
/* harmony import */ var _Browser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Browser.js */ "./src/third_party/puppeteer/package/src/cdp/Browser.ts");
/* harmony import */ var _BrowserConnector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BrowserConnector.js */ "./src/third_party/puppeteer/package/src/cdp/BrowserConnector.ts");
/* harmony import */ var _CDPSession_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CDPSession.js */ "./src/third_party/puppeteer/package/src/cdp/CDPSession.ts");
/* harmony import */ var _ChromeTargetManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChromeTargetManager.js */ "./src/third_party/puppeteer/package/src/cdp/ChromeTargetManager.ts");
/* harmony import */ var _Connection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Connection.js */ "./src/third_party/puppeteer/package/src/cdp/Connection.ts");
/* harmony import */ var _Coverage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Coverage.js */ "./src/third_party/puppeteer/package/src/cdp/Coverage.ts");
/* harmony import */ var _DeviceRequestPrompt_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DeviceRequestPrompt.js */ "./src/third_party/puppeteer/package/src/cdp/DeviceRequestPrompt.ts");
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Dialog.js */ "./src/third_party/puppeteer/package/src/cdp/Dialog.ts");
/* harmony import */ var _ElementHandle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ElementHandle.js */ "./src/third_party/puppeteer/package/src/cdp/ElementHandle.ts");
/* harmony import */ var _EmulationManager_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EmulationManager.js */ "./src/third_party/puppeteer/package/src/cdp/EmulationManager.ts");
/* harmony import */ var _ExecutionContext_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ExecutionContext.js */ "./src/third_party/puppeteer/package/src/cdp/ExecutionContext.ts");
/* harmony import */ var _ExtensionTransport_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ExtensionTransport.js */ "./src/third_party/puppeteer/package/src/cdp/ExtensionTransport.ts");
/* harmony import */ var _FirefoxTargetManager_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FirefoxTargetManager.js */ "./src/third_party/puppeteer/package/src/cdp/FirefoxTargetManager.ts");
/* harmony import */ var _Frame_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Frame.js */ "./src/third_party/puppeteer/package/src/cdp/Frame.ts");
/* harmony import */ var _FrameManager_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./FrameManager.js */ "./src/third_party/puppeteer/package/src/cdp/FrameManager.ts");
/* harmony import */ var _FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./FrameManagerEvents.js */ "./src/third_party/puppeteer/package/src/cdp/FrameManagerEvents.ts");
/* harmony import */ var _FrameTree_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./FrameTree.js */ "./src/third_party/puppeteer/package/src/cdp/FrameTree.ts");
/* harmony import */ var _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./HTTPRequest.js */ "./src/third_party/puppeteer/package/src/cdp/HTTPRequest.ts");
/* harmony import */ var _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./HTTPResponse.js */ "./src/third_party/puppeteer/package/src/cdp/HTTPResponse.ts");
/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Input.js */ "./src/third_party/puppeteer/package/src/cdp/Input.ts");
/* harmony import */ var _IsolatedWorld_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./IsolatedWorld.js */ "./src/third_party/puppeteer/package/src/cdp/IsolatedWorld.ts");
/* harmony import */ var _IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./IsolatedWorlds.js */ "./src/third_party/puppeteer/package/src/cdp/IsolatedWorlds.ts");
/* harmony import */ var _JSHandle_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/src/cdp/JSHandle.ts");
/* harmony import */ var _LifecycleWatcher_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./LifecycleWatcher.js */ "./src/third_party/puppeteer/package/src/cdp/LifecycleWatcher.ts");
/* harmony import */ var _NetworkEventManager_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./NetworkEventManager.js */ "./src/third_party/puppeteer/package/src/cdp/NetworkEventManager.ts");
/* harmony import */ var _NetworkManager_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./NetworkManager.js */ "./src/third_party/puppeteer/package/src/cdp/NetworkManager.ts");
/* harmony import */ var _Page_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Page.js */ "./src/third_party/puppeteer/package/src/cdp/Page.ts");
/* harmony import */ var _PredefinedNetworkConditions_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./PredefinedNetworkConditions.js */ "./src/third_party/puppeteer/package/src/cdp/PredefinedNetworkConditions.ts");
/* harmony import */ var _Target_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Target.js */ "./src/third_party/puppeteer/package/src/cdp/Target.ts");
/* harmony import */ var _TargetManager_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./TargetManager.js */ "./src/third_party/puppeteer/package/src/cdp/TargetManager.ts");
/* harmony import */ var _Tracing_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Tracing.js */ "./src/third_party/puppeteer/package/src/cdp/Tracing.ts");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./utils.js */ "./src/third_party/puppeteer/package/src/cdp/utils.ts");
/* harmony import */ var _WebWorker_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./WebWorker.js */ "./src/third_party/puppeteer/package/src/cdp/WebWorker.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */






































/***/ })

}]);