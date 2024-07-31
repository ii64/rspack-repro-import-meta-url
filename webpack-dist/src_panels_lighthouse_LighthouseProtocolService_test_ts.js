"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_lighthouse_LighthouseProtocolService_test_ts"],{

/***/ "./src/panels/lighthouse/LighthouseProtocolService.test.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lighthouse/LighthouseProtocolService.test.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('LighthouseProtocolService', () => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    let Lighthouse;
    let primaryTarget;
    let rootTarget;
    let suspendAllTargets;
    let resumeAllTargets;
    let createParallelConnection;
    beforeEach(async () => {
        Lighthouse = await Promise.all(/*! import() */[__webpack_require__.e("src_panels_emulation_DeviceModeToolbar_ts"), __webpack_require__.e("src_panels_emulation_MediaQueryInspector_ts"), __webpack_require__.e("src_panels_emulation_DeviceModeView_ts"), __webpack_require__.e("src_panels_emulation_AdvancedApp_ts"), __webpack_require__.e("src_third_party_lighthouse_report_bundle_js"), __webpack_require__.e("src_panels_lighthouse_LighthouseController_ts"), __webpack_require__.e("src_panels_lighthouse_LighthouseStatusView_ts"), __webpack_require__.e("src_panels_lighthouse_LighthouseStartView_ts"), __webpack_require__.e("src_panels_lighthouse_LighthouseProtocolService_ts"), __webpack_require__.e("src_third_party_lighthouse_report-assets_report-generator_mjs"), __webpack_require__.e("src_panels_lighthouse_LighthousePanel_ts"), __webpack_require__.e("src_panels_lighthouse_lighthouse_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./lighthouse.js */ "./src/panels/lighthouse/lighthouse.ts"));
        rootTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: rootTarget, subtype: 'prerender' });
        primaryTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: rootTarget });
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
        suspendAllTargets = sinon.stub(targetManager, 'suspendAllTargets').resolves();
        resumeAllTargets = sinon.stub(targetManager, 'resumeAllTargets').resolves();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ChildTargetManager.ChildTargetManager.install();
        const childTargetManager = primaryTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ChildTargetManager.ChildTargetManager);
        assert.exists(childTargetManager);
        sinon.stub(childTargetManager, 'getParentTargetId').resolves(primaryTarget.targetInfo()?.targetId);
        if (rootTarget === primaryTarget) {
            createParallelConnection = sinon.stub(childTargetManager, 'createParallelConnection').resolves({
                connection: { disconnect: () => { } },
                sessionId: 'foo',
            });
        }
        else {
            const rootChildTargetManager = rootTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ChildTargetManager.ChildTargetManager);
            assert.exists(rootChildTargetManager);
            sinon.stub(rootChildTargetManager, 'getParentTargetId').resolves(rootTarget.targetInfo()?.targetId);
            createParallelConnection = sinon.stub(rootChildTargetManager, 'createParallelConnection').resolves({
                connection: { disconnect: () => { } },
                sessionId: 'foo',
            });
        }
    });
    it('suspends all targets', async () => {
        const service = new Lighthouse.LighthouseProtocolService.ProtocolService();
        await service.attach();
        assert.isTrue(suspendAllTargets.calledOnce);
    });
    it('creates a parallel connection', async () => {
        const service = new Lighthouse.LighthouseProtocolService.ProtocolService();
        await service.attach();
        assert.isTrue(createParallelConnection.calledOnce);
    });
    it('resumes all targets', async () => {
        const service = new Lighthouse.LighthouseProtocolService.ProtocolService();
        await service.attach();
        await service.detach();
        assert.isTrue(resumeAllTargets.calledOnce);
    });
});


/***/ })

}]);