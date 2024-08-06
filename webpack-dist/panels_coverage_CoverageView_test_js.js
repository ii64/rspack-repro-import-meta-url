"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_coverage_CoverageView_test_js"],{

/***/ "./panels/coverage/CoverageView.test.js":
/*!**********************************************!*\
  !*** ./panels/coverage/CoverageView.test.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _coverage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coverage.js */ "./panels/coverage/coverage.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
const isShowingLandingPage = (view) => {
    return Boolean(view.contentElement.querySelector('.landing-page'));
};
const isShowingResults = (view) => {
    return Boolean(view.contentElement.querySelector('.coverage-results .vbox.flex-auto'));
};
const isShowingPrerenderPage = (view) => {
    return Boolean(view.contentElement.querySelector('.prerender-page'));
};
const isShowingBfcachePage = (view) => {
    return Boolean(view.contentElement.querySelector('.bfcache-page'));
};
const setupTargetAndModels = () => {
    const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance({ forceNew: true });
    const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
    const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
    const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
        forceNew: true,
        resourceMapping,
        targetManager,
    });
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance({ forceNew: true, debuggerWorkspaceBinding });
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance({ forceNew: true, resourceMapping, targetManager });
    const coverageModel = target.model(_coverage_js__WEBPACK_IMPORTED_MODULE_7__.CoverageModel.CoverageModel);
    assert.exists(coverageModel);
    const startSpy = sinon.spy(coverageModel, 'start');
    const stopSpy = sinon.spy(coverageModel, 'stop');
    const cssModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSModel.CSSModel);
    assert.exists(cssModel);
    sinon.stub(cssModel.agent, 'invoke_startRuleUsageTracking').resolves({
        getError: () => undefined,
    });
    sinon.stub(cssModel.agent, 'invoke_takeCoverageDelta').resolves({
        coverage: [],
        getError: () => undefined,
        timestamp: 0,
    });
    sinon.stub(cssModel.agent, 'invoke_stopRuleUsageTracking').resolves({
        getError: () => undefined,
        ruleUsage: [],
    });
    const profilerAgent = target.profilerAgent();
    sinon.stub(profilerAgent, 'invoke_startPreciseCoverage').resolves({
        timestamp: 0,
        getError: () => undefined,
    });
    sinon.stub(profilerAgent, 'invoke_stopPreciseCoverage').resolves({
        getError: () => undefined,
    });
    sinon.stub(profilerAgent, 'invoke_takePreciseCoverage').resolves({
        result: [],
        getError: () => undefined,
        timestamp: 0,
    });
    return { startSpy, stopSpy, target };
};
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('CoverageView', () => {
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.registerNoopActions)([
            'coverage.clear',
            'coverage.export',
            'coverage.start-with-reload',
            'coverage.toggle-recording',
            'inspector-main.reload',
        ]);
    });
    it('can handle back/forward cache navigations', async () => {
        const { startSpy, stopSpy, target } = setupTargetAndModels();
        const view = _coverage_js__WEBPACK_IMPORTED_MODULE_7__.CoverageView.CoverageView.instance();
        view.markAsRoot();
        view.show(document.body);
        assert.isTrue(isShowingLandingPage(view));
        assert.isFalse(isShowingResults(view));
        assert.isFalse(isShowingPrerenderPage(view));
        assert.isFalse(isShowingBfcachePage(view));
        assert.isTrue(startSpy.notCalled);
        await view.startRecording({ reload: false, jsCoveragePerBlock: false });
        await coordinator.done();
        assert.isFalse(isShowingLandingPage(view));
        assert.isTrue(isShowingResults(view));
        assert.isFalse(isShowingPrerenderPage(view));
        assert.isFalse(isShowingBfcachePage(view));
        assert.isTrue(startSpy.calledOnce);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target), {}, "BackForwardCacheRestore" /* Protocol.Page.NavigationType.BackForwardCacheRestore */);
        assert.isFalse(isShowingLandingPage(view));
        assert.isFalse(isShowingResults(view));
        assert.isFalse(isShowingPrerenderPage(view));
        assert.isTrue(isShowingBfcachePage(view));
        assert.isTrue(startSpy.calledOnce);
        assert.isTrue(stopSpy.notCalled);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target));
        assert.isFalse(isShowingLandingPage(view));
        assert.isTrue(isShowingResults(view));
        assert.isFalse(isShowingPrerenderPage(view));
        assert.isFalse(isShowingBfcachePage(view));
        assert.isTrue(startSpy.calledOnce);
        assert.isTrue(stopSpy.notCalled);
        await view.stopRecording();
        view.willHide();
        view.wasShown();
        view.detach();
        _coverage_js__WEBPACK_IMPORTED_MODULE_7__.CoverageView.CoverageView.removeInstance();
    });
    it('can handle prerender activations', async () => {
        const { startSpy, stopSpy } = setupTargetAndModels();
        const view = _coverage_js__WEBPACK_IMPORTED_MODULE_7__.CoverageView.CoverageView.instance();
        view.markAsRoot();
        view.show(document.body);
        assert.isTrue(isShowingLandingPage(view));
        assert.isFalse(isShowingResults(view));
        assert.isFalse(isShowingPrerenderPage(view));
        assert.isFalse(isShowingBfcachePage(view));
        assert.isTrue(startSpy.notCalled);
        await view.startRecording({ reload: false, jsCoveragePerBlock: false });
        await coordinator.done({ waitForWork: true });
        assert.isFalse(isShowingLandingPage(view));
        assert.isTrue(isShowingResults(view));
        assert.isFalse(isShowingPrerenderPage(view));
        assert.isFalse(isShowingBfcachePage(view));
        assert.isTrue(startSpy.calledOnce);
        // Create 2nd target for the prerendered frame.
        const { startSpy: startSpy2, stopSpy: stopSpy2, target: target2 } = setupTargetAndModels();
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.activate)(target2);
        await coordinator.done({ waitForWork: true });
        assert.isFalse(isShowingLandingPage(view));
        assert.isFalse(isShowingResults(view));
        assert.isTrue(isShowingPrerenderPage(view));
        assert.isFalse(isShowingBfcachePage(view));
        assert.isTrue(startSpy.calledOnce);
        assert.isTrue(stopSpy.calledOnce);
        assert.isTrue(startSpy2.calledOnce);
        assert.isTrue(stopSpy2.notCalled);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target2), { url: 'http://www.example.com/page' });
        assert.isFalse(isShowingLandingPage(view));
        assert.isTrue(isShowingResults(view));
        assert.isFalse(isShowingPrerenderPage(view));
        assert.isFalse(isShowingBfcachePage(view));
        assert.isTrue(startSpy.calledOnce);
        assert.isTrue(stopSpy.calledOnce);
        assert.isTrue(startSpy2.calledOnce);
        assert.isTrue(stopSpy2.notCalled);
        await view.stopRecording();
        view.willHide();
        view.wasShown();
        view.detach();
        _coverage_js__WEBPACK_IMPORTED_MODULE_7__.CoverageView.CoverageView.removeInstance();
    });
});
//# sourceMappingURL=CoverageView.test.js.map

/***/ }),

/***/ "./panels/coverage/coverage.js":
/*!*************************************!*\
  !*** ./panels/coverage/coverage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoverageDecorationManager: () => (/* reexport module object */ _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   CoverageListView: () => (/* reexport module object */ _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   CoverageModel: () => (/* reexport module object */ _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   CoverageView: () => (/* reexport module object */ _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoverageModel.js */ "./panels/coverage/CoverageModel.js");
/* harmony import */ var _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoverageListView.js */ "./panels/coverage/CoverageListView.js");
/* harmony import */ var _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoverageView.js */ "./panels/coverage/CoverageView.js");
/* harmony import */ var _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoverageDecorationManager.js */ "./panels/coverage/CoverageDecorationManager.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









//# sourceMappingURL=coverage.js.map

/***/ })

}]);