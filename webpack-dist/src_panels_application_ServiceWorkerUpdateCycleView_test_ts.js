"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_ServiceWorkerUpdateCycleView_test_ts"],{

/***/ "./src/panels/application/ServiceWorkerUpdateCycleView.test.ts":
/*!*********************************************************************!*\
  !*** ./src/panels/application/ServiceWorkerUpdateCycleView.test.ts ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_3__]);
_application_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




var View = _application_js__WEBPACK_IMPORTED_MODULE_3__.ServiceWorkerUpdateCycleView;
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('ServiceWorkerUpdateCycleView', () => {
    let versionId = 0;
    const registrationId = 'fake-sw-id';
    it('calculates update cycle ranges', () => {
        const payload = { registrationId, scopeURL: '', isDeleted: false };
        const registration = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.ServiceWorkerRegistration(payload);
        let view = new View.ServiceWorkerUpdateCycleView(registration);
        let ranges = view.calculateServiceWorkerUpdateRanges();
        assert.strictEqual(ranges.length, 0, 'A nascent registration has no ranges to display.');
        versionId++;
        let versionPayload = {
            registrationId,
            versionId: versionId.toString(),
            scriptURL: '',
            status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.New,
            runningStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionRunningStatus.Starting,
        };
        registration.updateVersion(versionPayload);
        view = new View.ServiceWorkerUpdateCycleView(registration);
        ranges = view.calculateServiceWorkerUpdateRanges();
        assert.strictEqual(ranges.length, 0, 'A new registration has no ranges to display.');
        versionId++;
        versionPayload = {
            registrationId,
            versionId: versionId.toString(),
            scriptURL: '',
            status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.Installing,
            runningStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionRunningStatus.Running,
        };
        registration.updateVersion(versionPayload);
        view = new View.ServiceWorkerUpdateCycleView(registration);
        ranges = view.calculateServiceWorkerUpdateRanges();
        assert.strictEqual(ranges.length, 1, 'An installing registration has a range to display.');
        versionId++;
        versionPayload = {
            registrationId,
            versionId: versionId.toString(),
            scriptURL: '',
            status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.Installing,
            runningStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionRunningStatus.Running,
        };
        registration.updateVersion(versionPayload);
        view = new View.ServiceWorkerUpdateCycleView(registration);
        ranges = view.calculateServiceWorkerUpdateRanges();
        assert.strictEqual(ranges.length, 1, 'An installing registration (reported multiple times) has a range to display.');
        versionId++;
        versionPayload = {
            registrationId,
            versionId: versionId.toString(),
            scriptURL: '',
            status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.Installed,
            runningStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionRunningStatus.Running,
        };
        registration.updateVersion(versionPayload);
        view = new View.ServiceWorkerUpdateCycleView(registration);
        ranges = view.calculateServiceWorkerUpdateRanges();
        assert.strictEqual(ranges.length, 1, 'An installed registration has a range to display. ');
        versionId++;
        versionPayload = {
            registrationId,
            versionId: versionId.toString(),
            scriptURL: '',
            status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.Activating,
            runningStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionRunningStatus.Running,
        };
        registration.updateVersion(versionPayload);
        view = new View.ServiceWorkerUpdateCycleView(registration);
        ranges = view.calculateServiceWorkerUpdateRanges();
        assert.strictEqual(ranges.length, 3, 'An activating registration has ranges to display.');
        versionId++;
        versionPayload = {
            registrationId,
            versionId: versionId.toString(),
            scriptURL: '',
            status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.Activating,
            runningStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionRunningStatus.Running,
        };
        registration.updateVersion(versionPayload);
        view = new View.ServiceWorkerUpdateCycleView(registration);
        ranges = view.calculateServiceWorkerUpdateRanges();
        assert.strictEqual(ranges.length, 3, 'An activating registration has ranges to display.');
        versionId++;
        versionPayload = {
            registrationId,
            versionId: versionId.toString(),
            scriptURL: '',
            status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.Activated,
            runningStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionRunningStatus.Running,
        };
        registration.updateVersion(versionPayload);
        view = new View.ServiceWorkerUpdateCycleView(registration);
        ranges = view.calculateServiceWorkerUpdateRanges();
        assert.strictEqual(ranges.length, 3, 'An activated registration has ranges to display.');
        versionId++;
        versionPayload = {
            registrationId,
            versionId: versionId.toString(),
            scriptURL: '',
            status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.Redundant,
            runningStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionRunningStatus.Stopped,
        };
        registration.updateVersion(versionPayload);
        view = new View.ServiceWorkerUpdateCycleView(registration);
        ranges = view.calculateServiceWorkerUpdateRanges();
        assert.strictEqual(ranges.length, 3, 'A redundent registration has ranges to display.');
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);