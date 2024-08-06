"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["legacy_test_runner_extensions_test_runner_ExtensionsTestRunner_js"],{

/***/ "./legacy_test_runner/extensions_test_runner/ExtensionsTestRunner.js":
/*!***************************************************************************!*\
  !*** ./legacy_test_runner/extensions_test_runner/ExtensionsTestRunner.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
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


/***/ })

}]);