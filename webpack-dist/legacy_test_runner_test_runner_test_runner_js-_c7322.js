(self["webpackChunk"] = self["webpackChunk"] || []).push([["legacy_test_runner_test_runner_test_runner_js-_c7322"],{

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