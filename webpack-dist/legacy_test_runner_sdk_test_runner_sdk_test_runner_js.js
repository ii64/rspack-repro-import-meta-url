(self["webpackChunk"] = self["webpackChunk"] || []).push([["legacy_test_runner_sdk_test_runner_sdk_test_runner_js"],{

/***/ "./legacy_test_runner/sdk_test_runner/sdk_test_runner.js":
/*!***************************************************************!*\
  !*** ./legacy_test_runner/sdk_test_runner/sdk_test_runner.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SDKTestRunner: () => (/* binding */ SDKTestRunner)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/protocol_client/protocol_client.js */ "./core/protocol_client/protocol_client.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */
const SDKTestRunner = {};

let id = 0;

function nextId(prefix) {
  return (prefix || '') + ++id;
}

SDKTestRunner.PageMock = class {
  constructor(url) {
    this.url = url;
    this.type = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame;
    this.enabledDomains = new Set();
    this.children = new Map();

    this.mainFrame = {id: nextId(), loaderId: nextId(), mimeType: 'text/html', securityOrigin: this.url, url: this.url};

    this.executionContexts = [];
    this.executionContexts.push(this.createExecutionContext(this.mainFrame, false));
    this.scripts = [];
    this.scriptContents = new Map();

    this.dispatchMap = {
      'Debugger.enable': this.debuggerEnable,
      'Debugger.getScriptSource': this.debuggerGetScriptSource,
      'Debugger.setBlackboxPatterns': (id, params) => this.sendResponse(id, {}),
      'Runtime.enable': this.runtimeEnable,
      'Page.enable': this.pageEnable,
      'Page.getResourceTree': this.pageGetResourceTree
    };
  }

  turnIntoWorker() {
    this.type = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Worker;
  }

  connectAsMainTarget(targetName) {
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().resetForTest(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.mainTarget);
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().resourceMapping.resetForTest(
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.mainTarget);
    this.enabledDomains.clear();
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().clearAllTargetsForTest();

    const oldFactory = _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.InspectorBackend.Connection.getFactory();
    _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.InspectorBackend.Connection.setFactory(() => {
      this.connection = new MockPageConnection(this);
      return this.connection;
    });
    const target =
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().createTarget(nextId('mock-target-'), targetName, this.type, null);
    _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.InspectorBackend.Connection.setFactory(oldFactory);

    this.target = target;
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
    return target;
  }

  connectAsChildTarget(targetName, parentMock) {
    this.enabledDomains.clear();
    this.sessionId = nextId('mock-target-');
    this.root = parentMock.root || parentMock;
    this.root.children.set(this.sessionId, this);
    const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().createTarget(
        this.sessionId, targetName, this.type, parentMock.target, this.sessionId);
    this.target = target;
    return target;
  }

  disconnect() {
    if (this.root) {
      this.root.children.delete(this.sessionId);
      this.target.dispose();
      this.root = null;
      this.sessionId = null;
    } else {
      this.connection.disconnect();
      this.connection = null;
    }
    this.target = null;
  }

  evalScript(url, content, isContentScript) {
    const id = nextId();
    content += '\n//# sourceURL=' + url;
    this.scriptContents.set(id, content);
    let context = this.executionContexts.find(context => context.auxData.isDefault !== isContentScript);

    if (!context) {
      context = this.createExecutionContext(this.mainFrame, isContentScript);
      this.executionContexts.push(context);

      this.fireEvent('Runtime.executionContextCreated', {context: context});
    }

    const text = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.Text.Text(content);

    const script = {
      scriptId: id,
      url: url,
      startLine: 0,
      startColumn: 0,
      endLine: text.lineCount(),
      endColumn: text.lineAt(text.lineCount()).length - 1,
      executionContextId: context.id,
      hash: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.hashCode(content),
      executionContextAuxData: context.auxData,
      sourceMapURL: '',
      hasSourceURL: true,
      isLiveEdit: false,
      isModule: false,
      length: content.length
    };

    this.scripts.push(script);
    this.fireEvent('Debugger.scriptParsed', script);
  }

  removeContentScripts() {
    const index = this.executionContexts.findIndex(context => !context.auxData.isDefault);
    if (index !== -1) {
      this.fireEvent('Runtime.executionContextDestroyed', {executionContextId: this.executionContexts[index].id});
      this.executionContexts.splice(index, 1);
    }
  }

  reload() {
    this.fireEvent('Page.frameStartedLoading', {frameId: this.mainFrame.id});

    for (const context of this.executionContexts) {
      this.fireEvent('Runtime.executionContextDestroyed', {executionContextId: context.id});
    }

    this.scripts = [];
    this.scriptContents.clear();
    this.executionContexts = [];
    this.fireEvent('Runtime.executionContextsCleared', {});
    this.executionContexts.push(this.createExecutionContext(this.mainFrame, false));

    for (const context of this.executionContexts) {
      this.fireEvent('Runtime.executionContextCreated', {context: context});
    }

    this.fireEvent('Page.frameNavigated', {frame: this.mainFrame});

    this.fireEvent('Page.loadEventFired', {timestamp: Date.now() / 1000});

    this.fireEvent('Page.frameStoppedLoading', {frameId: this.mainFrame.id});

    this.fireEvent('Page.domContentEventFired', {timestamp: Date.now() / 1000});
  }

  createExecutionContext(frame, isContentScript) {
    return {
      id: nextId(),

      auxData: {isDefault: !isContentScript, frameId: frame.id},

      origin: frame.securityOrigin,
      name: isContentScript ? 'content-script-context' : ''
    };
  }

  debuggerEnable(id, params) {
    this.enabledDomains.add('Debugger');
    this.sendResponse(id, {});

    for (const script of this.scripts) {
      this.fireEvent('Debugger.scriptParsed', script);
    }
  }

  debuggerGetScriptSource(id, params) {
    if (!this.scriptContents.has(params.scriptId)) {
      this.sendResponse(id, undefined, {message: 'Can\'t get script content for id ' + params.scriptId, code: 1});

      return;
    }

    const result = {scriptSource: this.scriptContents.get(params.scriptId)};

    this.sendResponse(id, result);
  }

  runtimeEnable(id, params) {
    this.enabledDomains.add('Runtime');
    this.sendResponse(id, {});

    for (const context of this.executionContexts) {
      this.fireEvent('Runtime.executionContextCreated', {context: context});
    }
  }

  pageEnable(id, params) {
    this.enabledDomains.add('Page');
    this.sendResponse(id, {});
  }

  pageGetResourceTree(id, params) {
    const result = {frameTree: {frame: this.mainFrame, resources: []}};

    this.sendResponse(id, result);
  }

  isSupportedDomain(methodName) {
    const domain = methodName.split('.')[0];

    if (domain === 'Page') {
      return this.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame;
    }

    return true;
  }

  dispatch(sessionId, id, methodName, params) {
    if (sessionId) {
      const child = this.children.get(sessionId);
      if (child) {
        child.dispatch('', id, methodName, params);
      }
      return;
    }

    const handler = (this.isSupportedDomain(methodName) ? this.dispatchMap[methodName] : null);

    if (handler) {
      return handler.call(this, id, params);
    }

    this.sendResponse(
        id, undefined,
        {message: 'Can\'t handle command ' + methodName, code: _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.InspectorBackend.DevToolsStubErrorCode});
  }

  sendResponse(id, result, error) {
    const message = {id: id, result: result, error: error};
    if (this.root) {
      message.sessionId = this.sessionId;
      this.root.connection.sendMessageToDevTools(message);
    } else {
      this.connection.sendMessageToDevTools(message);
    }
  }

  fireEvent(methodName, params) {
    const domain = methodName.split('.')[0];

    if (!this.enabledDomains.has(domain)) {
      return;
    }

    const message = {method: methodName, params: params};
    if (this.root) {
      message.sessionId = this.sessionId;
      this.root.connection.sendMessageToDevTools(message);
    } else {
      this.connection.sendMessageToDevTools(message);
    }
  }
};

class MockPageConnection {
  constructor(page) {
    this.page = page;
  }

  setOnMessage(onMessage) {
    this.onMessage = onMessage;
  }

  setOnDisconnect(onDisconnect) {
    this.onDisconnect = onDisconnect;
  }

  sendMessageToDevTools(message) {
    setTimeout(() => this.onMessage.call(null, JSON.stringify(message)), 0);
  }

  sendRawMessage(messageString) {
    const message = JSON.parse(messageString);
    this.page.dispatch(message.sessionId, message.id, message.method, message.params || {});
  }

  disconnect() {
    this.onDisconnect.call(null, 'force disconnect');
    this.onDisconnect = null;
    this.onMessage = null;
    return Promise.resolve();
  }
}


/***/ }),

/***/ "./legacy_test_runner/test_runner/test_runner.js":
/*!*******************************************************!*\
  !*** ./legacy_test_runner/test_runner/test_runner.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestRunner: () => (/* binding */ globalTestRunner),
/* harmony export */   _TestObserver: () => (/* binding */ _TestObserver),
/* harmony export */   _executeTestScript: () => (/* binding */ _executeTestScript)
/* harmony export */ });
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */ var _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestRunner.js */ "./legacy_test_runner/test_runner/TestRunner.js");
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
        self.test = async function () {
            await __webpack_require__("./legacy_test_runner/test_runner lazy recursive")(testScriptURL);
        };
        return;
    }
    try {
        await __webpack_require__("./legacy_test_runner/test_runner lazy recursive")(testScriptURL);
    }
    catch (err) {
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

//# sourceMappingURL=test_runner.js.map

/***/ }),

/***/ "./legacy_test_runner/test_runner lazy recursive":
/*!***************************************************************!*\
  !*** ./legacy_test_runner/test_runner/ lazy namespace object ***!
  \***************************************************************/
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
webpackEmptyAsyncContext.id = "./legacy_test_runner/test_runner lazy recursive";
module.exports = webpackEmptyAsyncContext;

/***/ })

}]);