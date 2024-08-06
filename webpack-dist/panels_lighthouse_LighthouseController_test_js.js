"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_lighthouse_LighthouseController_test_js"],{

/***/ "./panels/lighthouse/LighthouseController.test.js":
/*!********************************************************!*\
  !*** ./panels/lighthouse/LighthouseController.test.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('LighthouseController', () => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    let Lighthouse;
    let target;
    beforeEach(async () => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.stubNoopSettings)();
        Lighthouse = await Promise.all(/*! import() */[__webpack_require__.e("panels_emulation_DeviceModeToolbar_js"), __webpack_require__.e("panels_emulation_MediaQueryInspector_js"), __webpack_require__.e("panels_emulation_DeviceModeView_js"), __webpack_require__.e("panels_emulation_AdvancedApp_js"), __webpack_require__.e("third_party_lighthouse_report_bundle_js"), __webpack_require__.e("panels_lighthouse_LighthouseController_js"), __webpack_require__.e("panels_lighthouse_LighthouseStatusView_js"), __webpack_require__.e("panels_lighthouse_LighthouseStartView_js"), __webpack_require__.e("panels_lighthouse_LighthouseProtocolService_js"), __webpack_require__.e("third_party_lighthouse_report-assets_report-generator_mjs"), __webpack_require__.e("panels_lighthouse_LighthousePanel_js"), __webpack_require__.e("panels_lighthouse_lighthouse_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./lighthouse.js */ "./panels/lighthouse/lighthouse.js"));
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget });
    });
    it('updates page auditability on service worker registraion', async () => {
        const controller = new Lighthouse.LighthouseController.LighthouseController(sinon.createStubInstance(Lighthouse.LighthouseProtocolService.ProtocolService));
        const serviceWorkerManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.ServiceWorkerManager);
        assert.exists(serviceWorkerManager);
        const pageAuditabilityChange = controller.once(Lighthouse.LighthouseController.Events.PageAuditabilityChanged);
        serviceWorkerManager.dispatchEventToListeners("RegistrationUpdated" /* SDK.ServiceWorkerManager.Events.RegistrationUpdated */, {});
        await pageAuditabilityChange;
    });
});
//# sourceMappingURL=LighthouseController.test.js.map

/***/ })

}]);