"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_source_map_scopes_ScopeChainModel_test_ts"],{

/***/ "./src/models/source_map_scopes/ScopeChainModel.test.ts":
/*!**************************************************************!*\
  !*** ./src/models/source_map_scopes/ScopeChainModel.test.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./source_map_scopes.js */ "./src/models/source_map_scopes/source_map_scopes.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('ScopeChainModel', () => {
    let clock;
    let stubPluginManager;
    beforeEach(() => {
        clock = sinon.useFakeTimers();
        const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance();
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance();
        const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
        const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping,
            targetManager,
        });
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance({ forceNew: true, debuggerWorkspaceBinding });
        stubPluginManager = sinon.createStubInstance(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerLanguagePlugins.DebuggerLanguagePluginManager, { resolveScopeChain: Promise.resolve(null) });
        sinon.stub(debuggerWorkspaceBinding, 'pluginManager').value(stubPluginManager);
    });
    afterEach(() => {
        clock.restore();
    });
    it('emits an event after it was constructed with the scope chain', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
        const fakeFrame = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame);
        fakeFrame.debuggerModel = debuggerModel;
        // @ts-ignore readonly for test.
        fakeFrame.script = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Script.Script, { isWasm: false });
        fakeFrame.scopeChain.returns([]);
        const scopeChainModel = new _source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.ScopeChainModel.ScopeChainModel(fakeFrame);
        const listenerStub = sinon.stub();
        scopeChainModel.addEventListener(_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.ScopeChainModel.Events.ScopeChainUpdated, listenerStub);
        await clock.tickAsync(10);
        assert.isTrue(listenerStub.calledOnce);
    });
    it('does not emit an event after it was disposed even with an update still in-flight', async () => {
        // Stub out the pluginManagers `resolveScopeChain` with a promise that we control.
        const { promise, resolve } = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.PromiseUtilities.promiseWithResolvers();
        stubPluginManager.resolveScopeChain.returns(promise);
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
        const fakeFrame = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame);
        fakeFrame.debuggerModel = debuggerModel;
        // @ts-ignore readonly for test.
        fakeFrame.script = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Script.Script, { isWasm: false });
        fakeFrame.scopeChain.returns([]);
        const scopeChainModel = new _source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.ScopeChainModel.ScopeChainModel(fakeFrame);
        const listenerStub = sinon.stub();
        scopeChainModel.addEventListener(_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.ScopeChainModel.Events.ScopeChainUpdated, listenerStub);
        await clock.tickAsync(10);
        assert.isTrue(stubPluginManager.resolveScopeChain.calledOnce);
        assert.isFalse(listenerStub.calledOnce);
        scopeChainModel.dispose();
        resolve(null);
        await clock.tickAsync(10);
        assert.isFalse(listenerStub.calledOnce);
    });
});


/***/ })

}]);