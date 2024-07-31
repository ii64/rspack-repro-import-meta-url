(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_legacy_test_runner_extensions_test_runner_extensions_test_runner_js"],{

/***/ "./src/legacy_test_runner/extensions_test_runner/ExtensionsNetworkTestRunner.js":
/*!**************************************************************************************!*\
  !*** ./src/legacy_test_runner/extensions_test_runner/ExtensionsNetworkTestRunner.js ***!
  \**************************************************************************************/
/***/ (() => {

// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

self.extension_getRequestByUrl = function(urls, callback) {
  function onHAR(response) {
    const entries = response.entries;

    for (let i = 0; i < entries.length; ++i) {
      for (let url = 0; url < urls.length; ++url) {
        if (urls[url].test(entries[i].request.url)) {
          callback(entries[i]);
          return;
        }
      }
    }

    output('no item found');
    callback(null);
  }

  webInspector.network.getHAR(onHAR);
};


/***/ }),

/***/ "./src/legacy_test_runner/extensions_test_runner/ExtensionsTestRunner.js":
/*!*******************************************************************************!*\
  !*** ./src/legacy_test_runner/extensions_test_runner/ExtensionsTestRunner.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */
self.ExtensionsTestRunner = self.ExtensionsTestRunner || {};

const extensionsHost = 'devtools-extensions.oopif.test';
self.Extensions.extensionServer.registerHandler('evaluateForTestInFrontEnd', onEvaluate);
Extensions.extensionsOrigin = `http://${extensionsHost}:8000`;
self.Extensions.extensionServer.extensionAPITestHook = function(extensionServerClient, coreAPI) {
  window.webInspector = coreAPI;
  window._extensionServerForTests = extensionServerClient;
  coreAPI.panels.themeName = 'themeNameForTest';
};

ExtensionsTestRunner.replyToExtension = function(requestId, port) {
  self.Extensions.extensionServer.dispatchCallback(requestId, port);
};

function onEvaluate(message, port) {
  // Note: reply(...) is actually used in eval strings
  // eslint-disable-next-line no-unused-vars
  function reply(param) {
    self.Extensions.extensionServer.dispatchCallback(message.requestId, port, param);
  }

  try {
    eval(message.expression);
  } catch (e) {
    TestRunner.addResult('Exception while running: ' + message.expression + '\n' + (e.stack || e));
    TestRunner.completeTest();
  }
}

ExtensionsTestRunner.showPanel = function(panelId) {
  if (panelId === 'extension') {
    panelId = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.InspectorView.InspectorView.instance()
                  .tabbedPane.tabs[_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.InspectorView.InspectorView.instance().tabbedPane.tabs.length - 1]
                  .id;
  }
  return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.InspectorView.InspectorView.instance().showPanel(panelId);
};

ExtensionsTestRunner.evaluateInExtension = function(code) {
  ExtensionsTestRunner.codeToEvaluateBeforeTests = code;
};

ExtensionsTestRunner.runExtensionTests = async function(tests) {
  const result = await TestRunner.RuntimeAgent.evaluate('location.href', 'console', false);

  if (!result) {
    return;
  }

  ExtensionsTestRunner._pendingTests = (ExtensionsTestRunner.codeToEvaluateBeforeTests || '') + tests.join('\n');
  const pageURL = result.value;
  let extensionURL = pageURL.replace(/^(https?:\/\/[^\/]*\/).*$/, '$1') + 'devtools/resources/extension-main.html';
  extensionURL = extensionURL.replace('127.0.0.1', extensionsHost);

  self.Extensions.extensionServer.addExtension(
      {startPage: extensionURL, name: 'test extension', exposeWebInspectorNamespace: true});
};

(function disableLogging() {
  // Suppress console warnings from ExtensionServer.js
  console.warn = () => undefined;
})();


/***/ }),

/***/ "./src/legacy_test_runner/extensions_test_runner/extensions_test_runner.js":
/*!*********************************************************************************!*\
  !*** ./src/legacy_test_runner/extensions_test_runner/extensions_test_runner.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionsTestRunner: () => (/* binding */ ExtensionsTestRunner)
/* harmony export */ });
/* harmony import */ var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./src/legacy_test_runner/test_runner/test_runner.js");
/* harmony import */ var _ExtensionsNetworkTestRunner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtensionsNetworkTestRunner.js */ "./src/legacy_test_runner/extensions_test_runner/ExtensionsNetworkTestRunner.js");
/* harmony import */ var _ExtensionsNetworkTestRunner_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ExtensionsNetworkTestRunner_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ExtensionsTestRunner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExtensionsTestRunner.js */ "./src/legacy_test_runner/extensions_test_runner/ExtensionsTestRunner.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const {ExtensionsTestRunner} = self;



/***/ }),

/***/ "./src/legacy_test_runner/test_runner/test_runner.js":
/*!***********************************************************!*\
  !*** ./src/legacy_test_runner/test_runner/test_runner.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestRunner: () => (/* binding */ globalTestRunner),
/* harmony export */   _TestObserver: () => (/* binding */ _TestObserver),
/* harmony export */   _executeTestScript: () => (/* binding */ _executeTestScript)
/* harmony export */ });
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestRunner.js */ "./src/legacy_test_runner/test_runner/TestRunner.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// @ts-nocheck This file is not checked by TypeScript as it has a lot of legacy code.






/**
 * @param {!SDK.Target.Target} target
 */
function _setupTestHelpers(target) {
  self.TestRunner.BrowserAgent = target.browserAgent();
  self.TestRunner.CSSAgent = target.cssAgent();
  self.TestRunner.DeviceOrientationAgent = target.deviceOrientationAgent();
  self.TestRunner.DOMAgent = target.domAgent();
  self.TestRunner.DOMDebuggerAgent = target.domdebuggerAgent();
  self.TestRunner.DebuggerAgent = target.debuggerAgent();
  self.TestRunner.EmulationAgent = target.emulationAgent();
  self.TestRunner.HeapProfilerAgent = target.heapProfilerAgent();
  self.TestRunner.InputAgent = target.inputAgent();
  self.TestRunner.InspectorAgent = target.inspectorAgent();
  self.TestRunner.NetworkAgent = target.networkAgent();
  self.TestRunner.OverlayAgent = target.overlayAgent();
  self.TestRunner.PageAgent = target.pageAgent();
  self.TestRunner.ProfilerAgent = target.profilerAgent();
  self.TestRunner.RuntimeAgent = target.runtimeAgent();
  self.TestRunner.TargetAgent = target.targetAgent();

  self.TestRunner.networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.NetworkManager);
  self.TestRunner.securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.SecurityOriginManager);
  self.TestRunner.storageKeyManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageKeyManager.StorageKeyManager);
  self.TestRunner.resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
  self.TestRunner.debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
  self.TestRunner.runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
  self.TestRunner.domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
  self.TestRunner.domDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerModel);
  self.TestRunner.cssModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
  self.TestRunner.cpuProfilerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CPUProfilerModel.CPUProfilerModel);
  self.TestRunner.overlayModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.OverlayModel);
  self.TestRunner.serviceWorkerManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorkerManager.ServiceWorkerManager);
  self.TestRunner.tracingManager = target.model(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.TracingManager.TracingManager);
  self.TestRunner.mainTarget = target;
}

async function _executeTestScript() {
  const testScriptURL = /** @type {string} */ (_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.Runtime.queryParam('test'));
  if (_TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.isDebugTest()) {
    /* eslint-disable no-console */
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.setInnerResult(console.log);
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.setInnerCompleteTest(() => console.log('Test completed'));
    /* eslint-enable no-console */

    // Auto-start unit tests
    self.test = async function() {
      await __webpack_require__("./src/legacy_test_runner/test_runner lazy recursive")(testScriptURL);
    };
    return;
  }

  try {
    await __webpack_require__("./src/legacy_test_runner/test_runner lazy recursive")(testScriptURL);
  } catch (err) {
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult('TEST ENDED EARLY DUE TO UNCAUGHT ERROR:');
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult(err && err.stack || err);
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult('=== DO NOT COMMIT THIS INTO -expected.txt ===');
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.completeTest();
  }
}

/** @type {boolean} */
let _startedTest = false;

/**
 * @implements {SDK.TargetManager.Observer}
 */
class _TestObserver {
  /**
   * @param {!SDK.Target.Target} target
   * @override
   */
  targetAdded(target) {
    if (target.id() === 'main' && target.type() === 'frame' ||
        target.parentTarget()?.type() === 'tab' && target.type() === 'frame' && !target.targetInfo()?.subtype?.length) {
      _setupTestHelpers(target);
      if (_startedTest) {
        return;
      }
      _startedTest = true;
      _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.loadHTML(`
        <head>
          <base href="${_TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.url()}">
        </head>
        <body>
        </body>
      `).then(() => _executeTestScript());
    }
  }

  /**
   * @param {!SDK.Target.Target} target
   * @override
   */
  targetRemoved(target) {
  }
}

_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().observeTargets(new _TestObserver());

const globalTestRunner = self.TestRunner;



/***/ }),

/***/ "./src/legacy_test_runner/test_runner lazy recursive":
/*!*******************************************************************!*\
  !*** ./src/legacy_test_runner/test_runner/ lazy namespace object ***!
  \*******************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/legacy_test_runner/test_runner lazy recursive";
module.exports = webpackEmptyAsyncContext;

/***/ })

}]);