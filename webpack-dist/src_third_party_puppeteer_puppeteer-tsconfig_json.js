"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_puppeteer-tsconfig_json"],{

/***/ "./src/third_party/puppeteer/puppeteer-tsconfig.json":
/*!***********************************************************!*\
  !*** ./src/third_party/puppeteer/puppeteer-tsconfig.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"compilerOptions":{"composite":true},"files":["package/lib/esm/puppeteer/api/Browser.js","package/lib/esm/puppeteer/api/BrowserContext.js","package/lib/esm/puppeteer/api/CDPSession.js","package/lib/esm/puppeteer/api/Dialog.js","package/lib/esm/puppeteer/api/ElementHandle.js","package/lib/esm/puppeteer/api/ElementHandleSymbol.js","package/lib/esm/puppeteer/api/Environment.js","package/lib/esm/puppeteer/api/Frame.js","package/lib/esm/puppeteer/api/HTTPRequest.js","package/lib/esm/puppeteer/api/HTTPResponse.js","package/lib/esm/puppeteer/api/Input.js","package/lib/esm/puppeteer/api/JSHandle.js","package/lib/esm/puppeteer/api/Page.js","package/lib/esm/puppeteer/api/Realm.js","package/lib/esm/puppeteer/api/Target.js","package/lib/esm/puppeteer/api/WebWorker.js","package/lib/esm/puppeteer/api/api.js","package/lib/esm/puppeteer/api/locators/locators.js","package/lib/esm/puppeteer/bidi/BidiOverCdp.js","package/lib/esm/puppeteer/bidi/Browser.js","package/lib/esm/puppeteer/bidi/BrowserConnector.js","package/lib/esm/puppeteer/bidi/BrowserContext.js","package/lib/esm/puppeteer/bidi/CDPSession.js","package/lib/esm/puppeteer/bidi/Connection.js","package/lib/esm/puppeteer/bidi/Deserializer.js","package/lib/esm/puppeteer/bidi/Dialog.js","package/lib/esm/puppeteer/bidi/ElementHandle.js","package/lib/esm/puppeteer/bidi/ExposedFunction.js","package/lib/esm/puppeteer/bidi/Frame.js","package/lib/esm/puppeteer/bidi/HTTPRequest.js","package/lib/esm/puppeteer/bidi/HTTPResponse.js","package/lib/esm/puppeteer/bidi/Input.js","package/lib/esm/puppeteer/bidi/JSHandle.js","package/lib/esm/puppeteer/bidi/Page.js","package/lib/esm/puppeteer/bidi/Realm.js","package/lib/esm/puppeteer/bidi/Serializer.js","package/lib/esm/puppeteer/bidi/Target.js","package/lib/esm/puppeteer/bidi/WebWorker.js","package/lib/esm/puppeteer/bidi/bidi.js","package/lib/esm/puppeteer/bidi/core/Browser.js","package/lib/esm/puppeteer/bidi/core/BrowsingContext.js","package/lib/esm/puppeteer/bidi/core/Connection.js","package/lib/esm/puppeteer/bidi/core/Navigation.js","package/lib/esm/puppeteer/bidi/core/Realm.js","package/lib/esm/puppeteer/bidi/core/Request.js","package/lib/esm/puppeteer/bidi/core/Session.js","package/lib/esm/puppeteer/bidi/core/UserContext.js","package/lib/esm/puppeteer/bidi/core/UserPrompt.js","package/lib/esm/puppeteer/bidi/core/core.js","package/lib/esm/puppeteer/bidi/util.js","package/lib/esm/puppeteer/cdp/Accessibility.js","package/lib/esm/puppeteer/cdp/AriaQueryHandler.js","package/lib/esm/puppeteer/cdp/Binding.js","package/lib/esm/puppeteer/cdp/Browser.js","package/lib/esm/puppeteer/cdp/BrowserConnector.js","package/lib/esm/puppeteer/cdp/BrowserContext.js","package/lib/esm/puppeteer/cdp/CDPSession.js","package/lib/esm/puppeteer/cdp/CdpPreloadScript.js","package/lib/esm/puppeteer/cdp/ChromeTargetManager.js","package/lib/esm/puppeteer/cdp/Connection.js","package/lib/esm/puppeteer/cdp/Coverage.js","package/lib/esm/puppeteer/cdp/DeviceRequestPrompt.js","package/lib/esm/puppeteer/cdp/Dialog.js","package/lib/esm/puppeteer/cdp/ElementHandle.js","package/lib/esm/puppeteer/cdp/EmulationManager.js","package/lib/esm/puppeteer/cdp/ExecutionContext.js","package/lib/esm/puppeteer/cdp/ExtensionTransport.js","package/lib/esm/puppeteer/cdp/FirefoxTargetManager.js","package/lib/esm/puppeteer/cdp/Frame.js","package/lib/esm/puppeteer/cdp/FrameManager.js","package/lib/esm/puppeteer/cdp/FrameManagerEvents.js","package/lib/esm/puppeteer/cdp/FrameTree.js","package/lib/esm/puppeteer/cdp/HTTPRequest.js","package/lib/esm/puppeteer/cdp/HTTPResponse.js","package/lib/esm/puppeteer/cdp/Input.js","package/lib/esm/puppeteer/cdp/IsolatedWorld.js","package/lib/esm/puppeteer/cdp/IsolatedWorlds.js","package/lib/esm/puppeteer/cdp/JSHandle.js","package/lib/esm/puppeteer/cdp/LifecycleWatcher.js","package/lib/esm/puppeteer/cdp/NetworkEventManager.js","package/lib/esm/puppeteer/cdp/NetworkManager.js","package/lib/esm/puppeteer/cdp/Page.js","package/lib/esm/puppeteer/cdp/PredefinedNetworkConditions.js","package/lib/esm/puppeteer/cdp/Target.js","package/lib/esm/puppeteer/cdp/TargetManager.js","package/lib/esm/puppeteer/cdp/Tracing.js","package/lib/esm/puppeteer/cdp/WebWorker.js","package/lib/esm/puppeteer/cdp/cdp.js","package/lib/esm/puppeteer/cdp/utils.js","package/lib/esm/puppeteer/common/BrowserConnector.js","package/lib/esm/puppeteer/common/BrowserWebSocketTransport.js","package/lib/esm/puppeteer/common/CSSQueryHandler.js","package/lib/esm/puppeteer/common/CallbackRegistry.js","package/lib/esm/puppeteer/common/Configuration.js","package/lib/esm/puppeteer/common/ConnectOptions.js","package/lib/esm/puppeteer/common/ConnectionTransport.js","package/lib/esm/puppeteer/common/ConsoleMessage.js","package/lib/esm/puppeteer/common/Cookie.js","package/lib/esm/puppeteer/common/CustomQueryHandler.js","package/lib/esm/puppeteer/common/Debug.js","package/lib/esm/puppeteer/common/Device.js","package/lib/esm/puppeteer/common/Errors.js","package/lib/esm/puppeteer/common/EventEmitter.js","package/lib/esm/puppeteer/common/FileChooser.js","package/lib/esm/puppeteer/common/GetQueryHandler.js","package/lib/esm/puppeteer/common/HandleIterator.js","package/lib/esm/puppeteer/common/LazyArg.js","package/lib/esm/puppeteer/common/NetworkManagerEvents.js","package/lib/esm/puppeteer/common/PDFOptions.js","package/lib/esm/puppeteer/common/PQueryHandler.js","package/lib/esm/puppeteer/common/PSelectorParser.js","package/lib/esm/puppeteer/common/PierceQueryHandler.js","package/lib/esm/puppeteer/common/Product.js","package/lib/esm/puppeteer/common/Puppeteer.js","package/lib/esm/puppeteer/common/QueryHandler.js","package/lib/esm/puppeteer/common/ScriptInjector.js","package/lib/esm/puppeteer/common/SecurityDetails.js","package/lib/esm/puppeteer/common/TaskQueue.js","package/lib/esm/puppeteer/common/TextQueryHandler.js","package/lib/esm/puppeteer/common/TimeoutSettings.js","package/lib/esm/puppeteer/common/USKeyboardLayout.js","package/lib/esm/puppeteer/common/Viewport.js","package/lib/esm/puppeteer/common/WaitTask.js","package/lib/esm/puppeteer/common/XPathQueryHandler.js","package/lib/esm/puppeteer/common/common.js","package/lib/esm/puppeteer/common/types.js","package/lib/esm/puppeteer/common/util.js","package/lib/esm/puppeteer/environment.js","package/lib/esm/puppeteer/generated/injected.js","package/lib/esm/puppeteer/generated/version.js","package/lib/esm/puppeteer/index-browser.js","package/lib/esm/puppeteer/index.js","package/lib/esm/puppeteer/injected/ARIAQuerySelector.js","package/lib/esm/puppeteer/injected/CSSSelector.js","package/lib/esm/puppeteer/injected/CustomQuerySelector.js","package/lib/esm/puppeteer/injected/PQuerySelector.js","package/lib/esm/puppeteer/injected/PierceQuerySelector.js","package/lib/esm/puppeteer/injected/Poller.js","package/lib/esm/puppeteer/injected/TextContent.js","package/lib/esm/puppeteer/injected/TextQuerySelector.js","package/lib/esm/puppeteer/injected/XPathQuerySelector.js","package/lib/esm/puppeteer/injected/injected.js","package/lib/esm/puppeteer/injected/util.js","package/lib/esm/puppeteer/node/ChromeLauncher.js","package/lib/esm/puppeteer/node/FirefoxLauncher.js","package/lib/esm/puppeteer/node/LaunchOptions.js","package/lib/esm/puppeteer/node/NodeWebSocketTransport.js","package/lib/esm/puppeteer/node/PipeTransport.js","package/lib/esm/puppeteer/node/ProductLauncher.js","package/lib/esm/puppeteer/node/PuppeteerNode.js","package/lib/esm/puppeteer/node/ScreenRecorder.js","package/lib/esm/puppeteer/node/node.js","package/lib/esm/puppeteer/node/util/fs.js","package/lib/esm/puppeteer/puppeteer-core-browser.js","package/lib/esm/puppeteer/puppeteer-core.js","package/lib/esm/puppeteer/revisions.js","package/lib/esm/puppeteer/util/AsyncIterableUtil.js","package/lib/esm/puppeteer/util/Deferred.js","package/lib/esm/puppeteer/util/ErrorLike.js","package/lib/esm/puppeteer/util/Function.js","package/lib/esm/puppeteer/util/Mutex.js","package/lib/esm/puppeteer/util/assert.js","package/lib/esm/puppeteer/util/decorators.js","package/lib/esm/puppeteer/util/disposable.js","package/lib/esm/puppeteer/util/util.js","package/lib/esm/third_party/mitt/mitt.js","package/lib/esm/third_party/parsel-js/parsel-js.js","package/lib/esm/third_party/rxjs/rxjs.js"]}');

/***/ })

}]);