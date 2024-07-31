"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_bindings_DebuggerWorkspaceBinding_test_ts"],{

/***/ "./src/models/bindings/DebuggerWorkspaceBinding.test.ts":
/*!**************************************************************!*\
  !*** ./src/models/bindings/DebuggerWorkspaceBinding.test.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./src/testing/MockScopeChain.ts");
/* harmony import */ var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bindings.js */ "./src/models/bindings/bindings.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('DebuggerWorkspaceBinding', () => {
    let target;
    let backend;
    let debuggerWorkspaceBinding;
    beforeEach(() => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ id: 'main', name: 'main', type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Frame });
        const targetManager = target.targetManager();
        const workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
        const resourceMapping = new _bindings_js__WEBPACK_IMPORTED_MODULE_5__.ResourceMapping.ResourceMapping(targetManager, workspace);
        debuggerWorkspaceBinding = _bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({ forceNew: false, resourceMapping, targetManager });
        backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_3__.MockProtocolBackend();
        _bindings_js__WEBPACK_IMPORTED_MODULE_5__.IgnoreListManager.IgnoreListManager.instance({ forceNew: false, debuggerWorkspaceBinding });
    });
    it('can wait for a uiSourceCode if it is not yet available', async () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(target);
        const scriptUrl = 'http://script-host/script.js';
        const scriptInfo = { url: scriptUrl, content: 'console.log(1);', startLine: 0, startColumn: 0, hasSourceURL: false };
        // Create a second target.
        const workerTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            id: 'worker',
            name: 'worker',
            type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.ServiceWorker,
            parentTarget: target,
        });
        // Before any script is registered, there shouldn't be any uiSourceCodes.
        assert.isNull(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(scriptUrl));
        // Create promise to await the uiSourceCode given the url and its target.
        const uiSourceCodePromise = debuggerWorkspaceBinding.waitForUISourceCodeAdded(scriptUrl, target);
        // Register the script, which will kick off creating the uiSourceCode.
        await backend.addScript(target, scriptInfo, null);
        await backend.addScript(workerTarget, scriptInfo, null);
        // Await the promise to retrieve the uiSourceCode.
        const uiSourceCode = await uiSourceCodePromise;
        // Check if the uiSourceCode is the expected one (from the main target, and having the correct sourceURL).
        assert.strictEqual(uiSourceCode.url(), scriptUrl);
        assert.deepEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_5__.NetworkProject.NetworkProject.targetForUISourceCode(uiSourceCode), target);
    });
});


/***/ })

}]);