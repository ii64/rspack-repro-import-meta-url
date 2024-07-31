"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_ReportingApiView_test_ts"],{

/***/ "./src/panels/application/ReportingApiView.test.ts":
/*!*********************************************************!*\
  !*** ./src/panels/application/ReportingApiView.test.ts ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/application/components/components.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_3__]);
_application_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('ReportingApiView', () => {
    const ORIGIN_1 = 'origin1';
    const ENDPOINTS_1 = [{ url: 'url1', groupName: 'group1' }];
    const ORIGIN_2 = 'origin2';
    const ENDPOINTS_2 = [{ url: 'url2', groupName: 'group1' }, { url: 'url3', groupName: 'group2' }];
    it('updates endpoints grid when they change', () => {
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        const frameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        const networkManager = frameTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.NetworkManager);
        assert.exists(networkManager);
        const endpointsGrid = new _components_components_js__WEBPACK_IMPORTED_MODULE_4__.EndpointsGrid.EndpointsGrid();
        new _application_js__WEBPACK_IMPORTED_MODULE_3__.ReportingApiView.ReportingApiView(endpointsGrid);
        const endpointsGridData = sinon.spy(endpointsGrid, 'data', ['set']);
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Events.ReportingApiEndpointsChangedForOrigin, { origin: ORIGIN_1, endpoints: ENDPOINTS_1 });
        assert.isTrue(endpointsGridData.set.calledOnce);
        sinon.assert.calledWith(endpointsGridData.set, { endpoints: new Map([[ORIGIN_1, ENDPOINTS_1]]) });
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Events.ReportingApiEndpointsChangedForOrigin, { origin: ORIGIN_2, endpoints: ENDPOINTS_2 });
        assert.isTrue(endpointsGridData.set.calledTwice);
        sinon.assert.calledWith(endpointsGridData.set, { endpoints: new Map([[ORIGIN_1, ENDPOINTS_1], [ORIGIN_2, ENDPOINTS_2]]) });
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);