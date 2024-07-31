"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_Target_test_ts"],{

/***/ "./src/core/sdk/Target.test.ts":
/*!*************************************!*\
  !*** ./src/core/sdk/Target.test.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('Target', () => {
    let tabTarget;
    let mainFrameTargetUnderTab;
    let subframeTarget;
    beforeEach(() => {
        tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Tab });
        mainFrameTargetUnderTab = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame, parentTarget: tabTarget });
        subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame, parentTarget: mainFrameTargetUnderTab });
    });
    it('has capabilities based on the type', () => {
        assert.isTrue(tabTarget.hasAllCapabilities(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Capability.Target | _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Capability.Tracing));
        assert.isFalse(tabTarget.hasAllCapabilities(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Capability.DOM));
        assert.isTrue(mainFrameTargetUnderTab.hasAllCapabilities(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Capability.Target | _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Capability.DOM | _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Capability.DeviceEmulation));
        assert.isTrue(subframeTarget.hasAllCapabilities(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Capability.Target | _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Capability.DOM));
        assert.isFalse(subframeTarget.hasAllCapabilities(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Capability.DeviceEmulation));
    });
    it('notifies about inspected URL change', () => {
        const inspectedURLChanged = sinon.spy(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance(), 'onInspectedURLChange');
        subframeTarget.setInspectedURL('https://example.com/');
        assert.isTrue(inspectedURLChanged.calledOnce);
        mainFrameTargetUnderTab.setInspectedURL('https://example.com/');
        assert.isTrue(inspectedURLChanged.calledTwice);
    });
    it('determines outermost target', () => {
        assert.isNull(tabTarget.outermostTarget());
        assert.strictEqual(mainFrameTargetUnderTab.outermostTarget(), mainFrameTargetUnderTab);
        assert.strictEqual(subframeTarget.outermostTarget(), mainFrameTargetUnderTab);
        assert.strictEqual((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Worker, parentTarget: subframeTarget }).outermostTarget(), mainFrameTargetUnderTab);
        const nodeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Node });
        assert.strictEqual(nodeTarget.outermostTarget(), nodeTarget);
        const browserTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Browser });
        assert.isNull(browserTarget.outermostTarget());
        const serviceWorkerTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.ServiceWorker, parentTarget: browserTarget });
        assert.strictEqual(serviceWorkerTarget.outermostTarget(), serviceWorkerTarget);
    });
});


/***/ })

}]);