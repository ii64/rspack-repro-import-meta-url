"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_index-browser_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/api/Environment.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */  //# sourceMappingURL=Environment.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/api/api.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Browser: function() { return /* reexport safe */ _Browser_js__WEBPACK_IMPORTED_MODULE_0__.Browser; },
  BrowserContext: function() { return /* reexport safe */ _BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__.BrowserContext; },
  CDPSession: function() { return /* reexport safe */ _CDPSession_js__WEBPACK_IMPORTED_MODULE_2__.CDPSession; },
  CDPSessionEvent: function() { return /* reexport safe */ _CDPSession_js__WEBPACK_IMPORTED_MODULE_2__.CDPSessionEvent; },
  DEFAULT_INTERCEPT_RESOLUTION_PRIORITY: function() { return /* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_INTERCEPT_RESOLUTION_PRIORITY; },
  DelegatedLocator: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.DelegatedLocator; },
  Dialog: function() { return /* reexport safe */ _Dialog_js__WEBPACK_IMPORTED_MODULE_3__.Dialog; },
  ElementHandle: function() { return /* reexport safe */ _ElementHandle_js__WEBPACK_IMPORTED_MODULE_4__.ElementHandle; },
  FilteredLocator: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.FilteredLocator; },
  Frame: function() { return /* reexport safe */ _Frame_js__WEBPACK_IMPORTED_MODULE_6__.Frame; },
  FrameEvent: function() { return /* reexport safe */ _Frame_js__WEBPACK_IMPORTED_MODULE_6__.FrameEvent; },
  FunctionLocator: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.FunctionLocator; },
  HTTPRequest: function() { return /* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.HTTPRequest; },
  HTTPResponse: function() { return /* reexport safe */ _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_8__.HTTPResponse; },
  InterceptResolutionAction: function() { return /* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.InterceptResolutionAction; },
  JSHandle: function() { return /* reexport safe */ _JSHandle_js__WEBPACK_IMPORTED_MODULE_10__.JSHandle; },
  Keyboard: function() { return /* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_9__.Keyboard; },
  Locator: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.Locator; },
  LocatorEvent: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.LocatorEvent; },
  MappedLocator: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.MappedLocator; },
  Mouse: function() { return /* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_9__.Mouse; },
  MouseButton: function() { return /* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_9__.MouseButton; },
  NodeLocator: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.NodeLocator; },
  Page: function() { return /* reexport safe */ _Page_js__WEBPACK_IMPORTED_MODULE_11__.Page; },
  RETRY_DELAY: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.RETRY_DELAY; },
  RaceLocator: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.RaceLocator; },
  Realm: function() { return /* reexport safe */ _Realm_js__WEBPACK_IMPORTED_MODULE_12__.Realm; },
  STATUS_TEXTS: function() { return /* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.STATUS_TEXTS; },
  Target: function() { return /* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_13__.Target; },
  TargetType: function() { return /* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_13__.TargetType; },
  Touchscreen: function() { return /* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_9__.Touchscreen; },
  WEB_PERMISSION_TO_PROTOCOL_PERMISSION: function() { return /* reexport safe */ _Browser_js__WEBPACK_IMPORTED_MODULE_0__.WEB_PERMISSION_TO_PROTOCOL_PERMISSION; },
  WebWorker: function() { return /* reexport safe */ _WebWorker_js__WEBPACK_IMPORTED_MODULE_14__.WebWorker; },
  handleError: function() { return /* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.handleError; },
  headersArray: function() { return /* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.headersArray; },
  setDefaultScreenshotOptions: function() { return /* reexport safe */ _Page_js__WEBPACK_IMPORTED_MODULE_11__.setDefaultScreenshotOptions; },
  supportedMetrics: function() { return /* reexport safe */ _Page_js__WEBPACK_IMPORTED_MODULE_11__.supportedMetrics; },
  throwIfDetached: function() { return /* reexport safe */ _Frame_js__WEBPACK_IMPORTED_MODULE_6__.throwIfDetached; }
});
/* harmony import */var _Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Browser.js");
/* harmony import */var _BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowserContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/BrowserContext.js");
/* harmony import */var _CDPSession_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */var _Dialog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dialog.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Dialog.js");
/* harmony import */var _ElementHandle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ElementHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/ElementHandle.js");
/* harmony import */var _Environment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Environment.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Environment.js");
/* harmony import */var _Frame_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Frame.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Frame.js");
/* harmony import */var _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HTTPRequest.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPRequest.js");
/* harmony import */var _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HTTPResponse.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPResponse.js");
/* harmony import */var _Input_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Input.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Input.js");
/* harmony import */var _JSHandle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/JSHandle.js");
/* harmony import */var _Page_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Page.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Page.js");
/* harmony import */var _Realm_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Realm.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Realm.js");
/* harmony import */var _Target_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Target.js");
/* harmony import */var _WebWorker_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./WebWorker.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/WebWorker.js");
/* harmony import */var _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./locators/locators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/locators/locators.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ 














 //# sourceMappingURL=api.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/PredefinedNetworkConditions.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PredefinedNetworkConditions: function() { return PredefinedNetworkConditions; }
});
/**
 * @license
 * Copyright 2021 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
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
 */ var PredefinedNetworkConditions = Object.freeze({
    // Generally aligned with DevTools
    // https://source.chromium.org/chromium/chromium/src/+/main:third_party/devtools-frontend/src/front_end/core/sdk/NetworkManager.ts;l=398;drc=225e1240f522ca684473f541ae6dae6cd766dd33.
    'Slow 3G': {
        // ~500Kbps down
        download: 500 * 1000 / 8 * 0.8,
        // ~500Kbps up
        upload: 500 * 1000 / 8 * 0.8,
        // 400ms RTT
        latency: 400 * 5
    },
    'Fast 3G': {
        // ~1.6 Mbps down
        download: 1.6 * 1000 * 1000 / 8 * 0.9,
        // ~0.75 Mbps up
        upload: 750 * 1000 / 8 * 0.9,
        // 150ms RTT
        latency: 150 * 3.75
    },
    // alias to Fast 3G to align with Lighthouse (crbug.com/342406608)
    // and DevTools (crbug.com/342406608),
    'Slow 4G': {
        // ~1.6 Mbps down
        download: 1.6 * 1000 * 1000 / 8 * 0.9,
        // ~0.75 Mbps up
        upload: 750 * 1000 / 8 * 0.9,
        // 150ms RTT
        latency: 150 * 3.75
    },
    'Fast 4G': {
        // 9 Mbps down
        download: 9 * 1000 * 1000 / 8 * 0.9,
        // 1.5 Mbps up
        upload: 1.5 * 1000 * 1000 / 8 * 0.9,
        // 60ms RTT
        latency: 60 * 2.75
    }
}); //# sourceMappingURL=PredefinedNetworkConditions.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/TargetManager.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */  //# sourceMappingURL=TargetManager.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/cdp.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ARIAQueryHandler: function() { return /* reexport safe */ _AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__.ARIAQueryHandler; },
  Accessibility: function() { return /* reexport safe */ _Accessibility_js__WEBPACK_IMPORTED_MODULE_0__.Accessibility; },
  Binding: function() { return /* reexport safe */ _Binding_js__WEBPACK_IMPORTED_MODULE_2__.Binding; },
  CDP_BINDING_PREFIX: function() { return /* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_34__.CDP_BINDING_PREFIX; },
  CSSCoverage: function() { return /* reexport safe */ _Coverage_js__WEBPACK_IMPORTED_MODULE_8__.CSSCoverage; },
  CdpBrowser: function() { return /* reexport safe */ _Browser_js__WEBPACK_IMPORTED_MODULE_3__.CdpBrowser; },
  CdpCDPSession: function() { return /* reexport safe */ _CDPSession_js__WEBPACK_IMPORTED_MODULE_5__.CdpCDPSession; },
  CdpDialog: function() { return /* reexport safe */ _Dialog_js__WEBPACK_IMPORTED_MODULE_10__.CdpDialog; },
  CdpElementHandle: function() { return /* reexport safe */ _ElementHandle_js__WEBPACK_IMPORTED_MODULE_11__.CdpElementHandle; },
  CdpFrame: function() { return /* reexport safe */ _Frame_js__WEBPACK_IMPORTED_MODULE_16__.CdpFrame; },
  CdpHTTPRequest: function() { return /* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_20__.CdpHTTPRequest; },
  CdpHTTPResponse: function() { return /* reexport safe */ _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_21__.CdpHTTPResponse; },
  CdpJSHandle: function() { return /* reexport safe */ _JSHandle_js__WEBPACK_IMPORTED_MODULE_25__.CdpJSHandle; },
  CdpKeyboard: function() { return /* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_22__.CdpKeyboard; },
  CdpMouse: function() { return /* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_22__.CdpMouse; },
  CdpPage: function() { return /* reexport safe */ _Page_js__WEBPACK_IMPORTED_MODULE_29__.CdpPage; },
  CdpTarget: function() { return /* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_31__.CdpTarget; },
  CdpTouchscreen: function() { return /* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_22__.CdpTouchscreen; },
  CdpWebWorker: function() { return /* reexport safe */ _WebWorker_js__WEBPACK_IMPORTED_MODULE_35__.CdpWebWorker; },
  ChromeTargetManager: function() { return /* reexport safe */ _ChromeTargetManager_js__WEBPACK_IMPORTED_MODULE_6__.ChromeTargetManager; },
  Connection: function() { return /* reexport safe */ _Connection_js__WEBPACK_IMPORTED_MODULE_7__.Connection; },
  Coverage: function() { return /* reexport safe */ _Coverage_js__WEBPACK_IMPORTED_MODULE_8__.Coverage; },
  DevToolsTarget: function() { return /* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_31__.DevToolsTarget; },
  DeviceRequestPrompt: function() { return /* reexport safe */ _DeviceRequestPrompt_js__WEBPACK_IMPORTED_MODULE_9__.DeviceRequestPrompt; },
  DeviceRequestPromptDevice: function() { return /* reexport safe */ _DeviceRequestPrompt_js__WEBPACK_IMPORTED_MODULE_9__.DeviceRequestPromptDevice; },
  DeviceRequestPromptManager: function() { return /* reexport safe */ _DeviceRequestPrompt_js__WEBPACK_IMPORTED_MODULE_9__.DeviceRequestPromptManager; },
  EmulatedState: function() { return /* reexport safe */ _EmulationManager_js__WEBPACK_IMPORTED_MODULE_12__.EmulatedState; },
  EmulationManager: function() { return /* reexport safe */ _EmulationManager_js__WEBPACK_IMPORTED_MODULE_12__.EmulationManager; },
  ExecutionContext: function() { return /* reexport safe */ _ExecutionContext_js__WEBPACK_IMPORTED_MODULE_13__.ExecutionContext; },
  ExtensionTransport: function() { return /* reexport safe */ _ExtensionTransport_js__WEBPACK_IMPORTED_MODULE_14__.ExtensionTransport; },
  FirefoxTargetManager: function() { return /* reexport safe */ _FirefoxTargetManager_js__WEBPACK_IMPORTED_MODULE_15__.FirefoxTargetManager; },
  FrameManager: function() { return /* reexport safe */ _FrameManager_js__WEBPACK_IMPORTED_MODULE_17__.FrameManager; },
  FrameManagerEvent: function() { return /* reexport safe */ _FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_18__.FrameManagerEvent; },
  FrameTree: function() { return /* reexport safe */ _FrameTree_js__WEBPACK_IMPORTED_MODULE_19__.FrameTree; },
  InitializationStatus: function() { return /* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_31__.InitializationStatus; },
  IsolatedWorld: function() { return /* reexport safe */ _IsolatedWorld_js__WEBPACK_IMPORTED_MODULE_23__.IsolatedWorld; },
  JSCoverage: function() { return /* reexport safe */ _Coverage_js__WEBPACK_IMPORTED_MODULE_8__.JSCoverage; },
  LifecycleWatcher: function() { return /* reexport safe */ _LifecycleWatcher_js__WEBPACK_IMPORTED_MODULE_26__.LifecycleWatcher; },
  MAIN_WORLD: function() { return /* reexport safe */ _IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_24__.MAIN_WORLD; },
  NetworkEventManager: function() { return /* reexport safe */ _NetworkEventManager_js__WEBPACK_IMPORTED_MODULE_27__.NetworkEventManager; },
  NetworkManager: function() { return /* reexport safe */ _NetworkManager_js__WEBPACK_IMPORTED_MODULE_28__.NetworkManager; },
  OtherTarget: function() { return /* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_31__.OtherTarget; },
  PUPPETEER_WORLD: function() { return /* reexport safe */ _IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_24__.PUPPETEER_WORLD; },
  PageTarget: function() { return /* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_31__.PageTarget; },
  PredefinedNetworkConditions: function() { return /* reexport safe */ _PredefinedNetworkConditions_js__WEBPACK_IMPORTED_MODULE_30__.PredefinedNetworkConditions; },
  Tracing: function() { return /* reexport safe */ _Tracing_js__WEBPACK_IMPORTED_MODULE_33__.Tracing; },
  WorkerTarget: function() { return /* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_31__.WorkerTarget; },
  _connectToCdpBrowser: function() { return /* reexport safe */ _BrowserConnector_js__WEBPACK_IMPORTED_MODULE_4__._connectToCdpBrowser; },
  addPageBinding: function() { return /* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_34__.addPageBinding; },
  createClientError: function() { return /* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_34__.createClientError; },
  createEvaluationError: function() { return /* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_34__.createEvaluationError; },
  isTargetClosedError: function() { return /* reexport safe */ _Connection_js__WEBPACK_IMPORTED_MODULE_7__.isTargetClosedError; },
  pageBindingInitString: function() { return /* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_34__.pageBindingInitString; },
  releaseObject: function() { return /* reexport safe */ _JSHandle_js__WEBPACK_IMPORTED_MODULE_25__.releaseObject; },
  valueFromRemoteObject: function() { return /* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_34__.valueFromRemoteObject; }
});
/* harmony import */var _Accessibility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accessibility.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Accessibility.js");
/* harmony import */var _AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AriaQueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/AriaQueryHandler.js");
/* harmony import */var _Binding_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Binding.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Binding.js");
/* harmony import */var _Browser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Browser.js");
/* harmony import */var _BrowserConnector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BrowserConnector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/BrowserConnector.js");
/* harmony import */var _CDPSession_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/CDPSession.js");
/* harmony import */var _ChromeTargetManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChromeTargetManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ChromeTargetManager.js");
/* harmony import */var _Connection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Connection.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js");
/* harmony import */var _Coverage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Coverage.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Coverage.js");
/* harmony import */var _DeviceRequestPrompt_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DeviceRequestPrompt.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/DeviceRequestPrompt.js");
/* harmony import */var _Dialog_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Dialog.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Dialog.js");
/* harmony import */var _ElementHandle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ElementHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ElementHandle.js");
/* harmony import */var _EmulationManager_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EmulationManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/EmulationManager.js");
/* harmony import */var _ExecutionContext_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ExecutionContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ExecutionContext.js");
/* harmony import */var _ExtensionTransport_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ExtensionTransport.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ExtensionTransport.js");
/* harmony import */var _FirefoxTargetManager_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FirefoxTargetManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FirefoxTargetManager.js");
/* harmony import */var _Frame_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Frame.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Frame.js");
/* harmony import */var _FrameManager_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./FrameManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManager.js");
/* harmony import */var _FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./FrameManagerEvents.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManagerEvents.js");
/* harmony import */var _FrameTree_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./FrameTree.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameTree.js");
/* harmony import */var _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./HTTPRequest.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/HTTPRequest.js");
/* harmony import */var _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./HTTPResponse.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/HTTPResponse.js");
/* harmony import */var _Input_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Input.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Input.js");
/* harmony import */var _IsolatedWorld_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./IsolatedWorld.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorld.js");
/* harmony import */var _IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./IsolatedWorlds.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorlds.js");
/* harmony import */var _JSHandle_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/JSHandle.js");
/* harmony import */var _LifecycleWatcher_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./LifecycleWatcher.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/LifecycleWatcher.js");
/* harmony import */var _NetworkEventManager_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./NetworkEventManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/NetworkEventManager.js");
/* harmony import */var _NetworkManager_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./NetworkManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/NetworkManager.js");
/* harmony import */var _Page_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Page.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Page.js");
/* harmony import */var _PredefinedNetworkConditions_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./PredefinedNetworkConditions.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/PredefinedNetworkConditions.js");
/* harmony import */var _Target_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Target.js");
/* harmony import */var _TargetManager_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./TargetManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/TargetManager.js");
/* harmony import */var _Tracing_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Tracing.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Tracing.js");
/* harmony import */var _utils_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./utils.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/utils.js");
/* harmony import */var _WebWorker_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./WebWorker.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/WebWorker.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ 


































 //# sourceMappingURL=cdp.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/index-browser.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ARIAQueryHandler: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.ARIAQueryHandler; },
  Accessibility: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.Accessibility; },
  AsyncDisposableStack: function() { return /* reexport safe */ _util_util_js__WEBPACK_IMPORTED_MODULE_4__.AsyncDisposableStack; },
  AsyncIterableUtil: function() { return /* reexport safe */ _util_util_js__WEBPACK_IMPORTED_MODULE_4__.AsyncIterableUtil; },
  Binding: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.Binding; },
  Browser: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.Browser; },
  BrowserContext: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.BrowserContext; },
  BrowserWebSocketTransport: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.BrowserWebSocketTransport; },
  CDPSession: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.CDPSession; },
  CDPSessionEvent: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent; },
  CDP_BINDING_PREFIX: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.CDP_BINDING_PREFIX; },
  CSSCoverage: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.CSSCoverage; },
  Callback: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.Callback; },
  CallbackRegistry: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.CallbackRegistry; },
  CdpBrowser: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.CdpBrowser; },
  CdpCDPSession: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.CdpCDPSession; },
  CdpDialog: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.CdpDialog; },
  CdpElementHandle: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.CdpElementHandle; },
  CdpFrame: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.CdpFrame; },
  CdpHTTPRequest: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.CdpHTTPRequest; },
  CdpHTTPResponse: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.CdpHTTPResponse; },
  CdpJSHandle: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.CdpJSHandle; },
  CdpKeyboard: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.CdpKeyboard; },
  CdpMouse: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.CdpMouse; },
  CdpPage: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.CdpPage; },
  CdpTarget: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.CdpTarget; },
  CdpTouchscreen: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.CdpTouchscreen; },
  CdpWebWorker: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.CdpWebWorker; },
  ChromeTargetManager: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.ChromeTargetManager; },
  Connection: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.Connection; },
  ConsoleMessage: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleMessage; },
  Coverage: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.Coverage; },
  CustomQueryHandlerRegistry: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.CustomQueryHandlerRegistry; },
  DEFAULT_INTERCEPT_RESOLUTION_PRIORITY: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_INTERCEPT_RESOLUTION_PRIORITY; },
  DEFAULT_VIEWPORT: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_VIEWPORT; },
  Deferred: function() { return /* reexport safe */ _util_util_js__WEBPACK_IMPORTED_MODULE_4__.Deferred; },
  DelegatedLocator: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.DelegatedLocator; },
  DevToolsTarget: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsTarget; },
  DeviceRequestPrompt: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.DeviceRequestPrompt; },
  DeviceRequestPromptDevice: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.DeviceRequestPromptDevice; },
  DeviceRequestPromptManager: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.DeviceRequestPromptManager; },
  Dialog: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.Dialog; },
  DisposableStack: function() { return /* reexport safe */ _util_util_js__WEBPACK_IMPORTED_MODULE_4__.DisposableStack; },
  ElementHandle: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.ElementHandle; },
  EmulatedState: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.EmulatedState; },
  EmulationManager: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.EmulationManager; },
  EventEmitter: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.EventEmitter; },
  ExecutionContext: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.ExecutionContext; },
  ExtensionTransport: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.ExtensionTransport; },
  FileChooser: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.FileChooser; },
  FilteredLocator: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.FilteredLocator; },
  FirefoxTargetManager: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.FirefoxTargetManager; },
  Frame: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.Frame; },
  FrameEvent: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent; },
  FrameManager: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager; },
  FrameManagerEvent: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.FrameManagerEvent; },
  FrameTree: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.FrameTree; },
  FunctionLocator: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.FunctionLocator; },
  HTTPRequest: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.HTTPRequest; },
  HTTPResponse: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.HTTPResponse; },
  InitializationStatus: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.InitializationStatus; },
  InterceptResolutionAction: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.InterceptResolutionAction; },
  IsolatedWorld: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.IsolatedWorld; },
  JSCoverage: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.JSCoverage; },
  JSHandle: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.JSHandle; },
  Keyboard: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.Keyboard; },
  KnownDevices: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.KnownDevices; },
  LazyArg: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.LazyArg; },
  LifecycleWatcher: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.LifecycleWatcher; },
  Locator: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.Locator; },
  LocatorEvent: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.LocatorEvent; },
  MAIN_WORLD: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.MAIN_WORLD; },
  MappedLocator: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.MappedLocator; },
  Mouse: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.Mouse; },
  MouseButton: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton; },
  NETWORK_IDLE_TIME: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.NETWORK_IDLE_TIME; },
  NetworkEventManager: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.NetworkEventManager; },
  NetworkManager: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager; },
  NetworkManagerEvent: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent; },
  NodeLocator: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.NodeLocator; },
  OtherTarget: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.OtherTarget; },
  PQueryHandler: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.PQueryHandler; },
  PUPPETEER_REVISIONS: function() { return /* reexport safe */ _revisions_js__WEBPACK_IMPORTED_MODULE_3__.PUPPETEER_REVISIONS; },
  PUPPETEER_WORLD: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.PUPPETEER_WORLD; },
  Page: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.Page; },
  PageTarget: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.PageTarget; },
  PierceQueryHandler: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.PierceQueryHandler; },
  PredefinedNetworkConditions: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.PredefinedNetworkConditions; },
  ProtocolError: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.ProtocolError; },
  Puppeteer: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.Puppeteer; },
  PuppeteerError: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.PuppeteerError; },
  PuppeteerURL: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.PuppeteerURL; },
  QueryHandler: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.QueryHandler; },
  RETRY_DELAY: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.RETRY_DELAY; },
  RaceLocator: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.RaceLocator; },
  Realm: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.Realm; },
  SOURCE_URL_REGEX: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.SOURCE_URL_REGEX; },
  STATUS_TEXTS: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.STATUS_TEXTS; },
  ScriptInjector: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.ScriptInjector; },
  SecurityDetails: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.SecurityDetails; },
  Target: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.Target; },
  TargetCloseError: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.TargetCloseError; },
  TargetType: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.TargetType; },
  TaskManager: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.TaskManager; },
  TaskQueue: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.TaskQueue; },
  TextQueryHandler: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.TextQueryHandler; },
  TimeoutError: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.TimeoutError; },
  TimeoutSettings: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.TimeoutSettings; },
  Touchscreen: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.Touchscreen; },
  Tracing: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.Tracing; },
  UTILITY_WORLD_NAME: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.UTILITY_WORLD_NAME; },
  UnsupportedOperation: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.UnsupportedOperation; },
  WEB_PERMISSION_TO_PROTOCOL_PERMISSION: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.WEB_PERMISSION_TO_PROTOCOL_PERMISSION; },
  WaitTask: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.WaitTask; },
  WebWorker: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.WebWorker; },
  WorkerTarget: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.WorkerTarget; },
  XPathQueryHandler: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.XPathQueryHandler; },
  _connectToCdpBrowser: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__._connectToCdpBrowser; },
  _keyDefinitions: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__._keyDefinitions; },
  addPageBinding: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.addPageBinding; },
  assert: function() { return /* reexport safe */ _util_util_js__WEBPACK_IMPORTED_MODULE_4__.assert; },
  asyncDisposeSymbol: function() { return /* reexport safe */ _util_util_js__WEBPACK_IMPORTED_MODULE_4__.asyncDisposeSymbol; },
  clearCustomQueryHandlers: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.clearCustomQueryHandlers; },
  createClientError: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.createClientError; },
  createEvaluationError: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.createEvaluationError; },
  createIncrementalIdGenerator: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.createIncrementalIdGenerator; },
  createProtocolErrorMessage: function() { return /* reexport safe */ _util_util_js__WEBPACK_IMPORTED_MODULE_4__.createProtocolErrorMessage; },
  customQueryHandlerNames: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.customQueryHandlerNames; },
  customQueryHandlers: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.customQueryHandlers; },
  debug: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.debug; },
  debugError: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.debugError; },
  disposeSymbol: function() { return /* reexport safe */ _util_util_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol; },
  evaluationString: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.evaluationString; },
  filterAsync: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.filterAsync; },
  fromAbortSignal: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.fromAbortSignal; },
  fromEmitterEvent: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.fromEmitterEvent; },
  getCapturedLogs: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.getCapturedLogs; },
  getQueryHandlerAndSelector: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.getQueryHandlerAndSelector; },
  getReadableAsBuffer: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.getReadableAsBuffer; },
  getReadableFromProtocolStream: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.getReadableFromProtocolStream; },
  getSourcePuppeteerURLIfAvailable: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.getSourcePuppeteerURLIfAvailable; },
  getSourceUrlComment: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.getSourceUrlComment; },
  handleError: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.handleError; },
  headersArray: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.headersArray; },
  importDebug: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.importDebug; },
  importFSPromises: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.importFSPromises; },
  isDate: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.isDate; },
  isErrnoException: function() { return /* reexport safe */ _util_util_js__WEBPACK_IMPORTED_MODULE_4__.isErrnoException; },
  isErrorLike: function() { return /* reexport safe */ _util_util_js__WEBPACK_IMPORTED_MODULE_4__.isErrorLike; },
  isNumber: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.isNumber; },
  isPlainObject: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.isPlainObject; },
  isRegExp: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.isRegExp; },
  isString: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.isString; },
  isTargetClosedError: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.isTargetClosedError; },
  pageBindingInitString: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.pageBindingInitString; },
  paperFormats: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.paperFormats; },
  parsePDFOptions: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.parsePDFOptions; },
  parsePSelectors: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.parsePSelectors; },
  registerCustomQueryHandler: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.registerCustomQueryHandler; },
  releaseObject: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.releaseObject; },
  rewriteError: function() { return /* reexport safe */ _util_util_js__WEBPACK_IMPORTED_MODULE_4__.rewriteError; },
  scriptInjector: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.scriptInjector; },
  setDefaultScreenshotOptions: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.setDefaultScreenshotOptions; },
  setLogCapture: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.setLogCapture; },
  supportedMetrics: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.supportedMetrics; },
  throwIfDetached: function() { return /* reexport safe */ _api_api_js__WEBPACK_IMPORTED_MODULE_0__.throwIfDetached; },
  timeout: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.timeout; },
  transposeIterableHandle: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.transposeIterableHandle; },
  unitToPixels: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.unitToPixels; },
  unregisterCustomQueryHandler: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.unregisterCustomQueryHandler; },
  validateDialogType: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.validateDialogType; },
  valueFromRemoteObject: function() { return /* reexport safe */ _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__.valueFromRemoteObject; },
  withSourcePuppeteerURLIfNone: function() { return /* reexport safe */ _common_common_js__WEBPACK_IMPORTED_MODULE_2__.withSourcePuppeteerURLIfNone; }
});
/* harmony import */var _api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/api.js");
/* harmony import */var _cdp_cdp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cdp/cdp.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/cdp.js");
/* harmony import */var _common_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/common.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/common.js");
/* harmony import */var _revisions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revisions.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/revisions.js");
/* harmony import */var _util_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/util.js");
/* harmony import */var _common_CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/CustomQueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/CustomQueryHandler.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ 




/**
 * @deprecated Use the query handler API defined on {@link Puppeteer}
 */  //# sourceMappingURL=index-browser.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/revisions.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PUPPETEER_REVISIONS: function() { return PUPPETEER_REVISIONS; }
});
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @internal
 */ var PUPPETEER_REVISIONS = Object.freeze({
    chrome: '127.0.6533.72',
    'chrome-headless-shell': '127.0.6533.72',
    firefox: 'latest'
}); //# sourceMappingURL=revisions.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/util/util.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AsyncDisposableStack: function() { return /* reexport safe */ _disposable_js__WEBPACK_IMPORTED_MODULE_4__.AsyncDisposableStack; },
  AsyncIterableUtil: function() { return /* reexport safe */ _AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_3__.AsyncIterableUtil; },
  Deferred: function() { return /* reexport safe */ _Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred; },
  DisposableStack: function() { return /* reexport safe */ _disposable_js__WEBPACK_IMPORTED_MODULE_4__.DisposableStack; },
  assert: function() { return /* reexport safe */ _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert; },
  asyncDisposeSymbol: function() { return /* reexport safe */ _disposable_js__WEBPACK_IMPORTED_MODULE_4__.asyncDisposeSymbol; },
  createProtocolErrorMessage: function() { return /* reexport safe */ _ErrorLike_js__WEBPACK_IMPORTED_MODULE_2__.createProtocolErrorMessage; },
  disposeSymbol: function() { return /* reexport safe */ _disposable_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol; },
  isErrnoException: function() { return /* reexport safe */ _ErrorLike_js__WEBPACK_IMPORTED_MODULE_2__.isErrnoException; },
  isErrorLike: function() { return /* reexport safe */ _ErrorLike_js__WEBPACK_IMPORTED_MODULE_2__.isErrorLike; },
  rewriteError: function() { return /* reexport safe */ _ErrorLike_js__WEBPACK_IMPORTED_MODULE_2__.rewriteError; }
});
/* harmony import */var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _Deferred_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */var _ErrorLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */var _AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AsyncIterableUtil.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js");
/* harmony import */var _disposable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ 



 //# sourceMappingURL=util.js.map


}),

}]);