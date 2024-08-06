"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_security_SecurityPanel_test_js"],{

/***/ "./panels/security/SecurityPanel.test.js":
/*!***********************************************!*\
  !*** ./panels/security/SecurityPanel.test.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */ var _security_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security.js */ "./panels/security/security.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('SecurityPanel', () => {
    let target;
    let prerenderTarget;
    beforeEach(() => {
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget });
    });
    it('updates when security state changes', async () => {
        const securityPanel = _security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityPanel.SecurityPanel.instance({ forceNew: true });
        const securityModel = target.model(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.SecurityModel);
        assert.exists(securityModel);
        const visibleSecurityState = {
            securityState: "insecure" /* Protocol.Security.SecurityState.Insecure */,
            securityStateIssueIds: [],
            certificateSecurityState: null,
        };
        securityModel.dispatchEventToListeners(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.Events.VisibleSecurityStateChanged, visibleSecurityState);
        assert.isTrue(securityPanel.mainView.contentElement.querySelector('.security-summary')
            ?.classList.contains('security-summary-insecure'));
        visibleSecurityState.securityState = "secure" /* Protocol.Security.SecurityState.Secure */;
        securityModel.dispatchEventToListeners(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.Events.VisibleSecurityStateChanged, visibleSecurityState);
        assert.isFalse(securityPanel.mainView.contentElement.querySelector('.security-summary')
            ?.classList.contains('security-summary-insecure'));
        assert.isTrue(securityPanel.mainView.contentElement.querySelector('.security-summary')
            ?.classList.contains('security-summary-secure'));
    });
    it('can switch to a different SecurityModel', async () => {
        const mainSecurityModel = target.model(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.SecurityModel);
        assert.exists(mainSecurityModel);
        const securityPanel = _security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityPanel.SecurityPanel.instance({ forceNew: true });
        // Add the main target to the security panel.
        securityPanel.modelAdded(mainSecurityModel);
        const visibleSecurityState = {
            securityState: "insecure" /* Protocol.Security.SecurityState.Insecure */,
            securityStateIssueIds: [],
            certificateSecurityState: null,
        };
        mainSecurityModel.dispatchEventToListeners(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.Events.VisibleSecurityStateChanged, visibleSecurityState);
        assert.isTrue(securityPanel.mainView.contentElement.querySelector('.security-summary')
            ?.classList.contains('security-summary-insecure'));
        // Switch to the prerender target.
        const prerenderSecurityModel = prerenderTarget.model(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.SecurityModel);
        assert.exists(prerenderSecurityModel);
        securityPanel.modelAdded(prerenderSecurityModel);
        securityPanel.modelRemoved(mainSecurityModel);
        // Check that the security panel does not listen to events from the previous target.
        visibleSecurityState.securityState = "secure" /* Protocol.Security.SecurityState.Secure */;
        mainSecurityModel.dispatchEventToListeners(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.Events.VisibleSecurityStateChanged, visibleSecurityState);
        assert.isTrue(securityPanel.mainView.contentElement.querySelector('.security-summary')
            ?.classList.contains('security-summary-insecure'));
        // Check that the security panel listens to events from the current target.
        prerenderSecurityModel.dispatchEventToListeners(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.Events.VisibleSecurityStateChanged, visibleSecurityState);
        assert.isTrue(securityPanel.mainView.contentElement.querySelector('.security-summary')
            ?.classList.contains('security-summary-secure'));
        // Check that the SecurityPanel listens to any PrimaryPageChanged event
        const sidebarTreeClearSpy = sinon.spy(securityPanel.sidebarTree, 'clearOrigins');
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target));
        assert.isTrue(sidebarTreeClearSpy.calledOnce);
    });
    it('shows \'reload page\' message when no data is available', async () => {
        const securityModel = target.model(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.SecurityModel);
        assert.exists(securityModel);
        const securityPanel = _security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityPanel.SecurityPanel.instance({ forceNew: true });
        // Check that reload message is visible initially.
        const reloadMessage = securityPanel.sidebarTree.shadowRoot.querySelector('.security-main-view-reload-message');
        assert.instanceOf(reloadMessage, HTMLLIElement);
        assert.isFalse(reloadMessage.classList.contains('hidden'));
        // Check that reload message is hidden when there is data to display.
        const networkManager = securityModel.networkManager();
        const request = {
            wasBlocked: () => false,
            url: () => 'https://www.example.com',
            securityState: () => "secure" /* Protocol.Security.SecurityState.Secure */,
            securityDetails: () => null,
            cached: () => false,
        };
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Events.RequestFinished, request);
        assert.isTrue(reloadMessage.classList.contains('hidden'));
        // Check that reload message is hidden after clearing data.
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target));
        assert.isFalse(reloadMessage.classList.contains('hidden'));
    });
});
//# sourceMappingURL=SecurityPanel.test.js.map

/***/ }),

/***/ "./panels/security/security.js":
/*!*************************************!*\
  !*** ./panels/security/security.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecurityModel: () => (/* reexport module object */ _SecurityModel_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   SecurityPanel: () => (/* reexport module object */ _SecurityPanel_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _SecurityModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecurityModel.js */ "./panels/security/SecurityModel.js");
/* harmony import */ var _SecurityPanel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecurityPanel.js */ "./panels/security/SecurityPanel.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



//# sourceMappingURL=security.js.map

/***/ })

}]);