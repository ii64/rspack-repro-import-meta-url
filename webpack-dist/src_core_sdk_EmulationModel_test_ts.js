"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_EmulationModel_test_ts"],{

/***/ "./src/core/sdk/EmulationModel.test.ts":
/*!*********************************************!*\
  !*** ./src/core/sdk/EmulationModel.test.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('EmulationModel', () => {
    it('should `emulateTouch` enable touch emulation', async () => {
        const parentTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ parentTarget });
        const emulationModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.EmulationModel.EmulationModel);
        const emulationAgent = target.emulationAgent();
        const spySetTouchEmulationEnabled = sinon.stub(emulationAgent, 'invoke_setTouchEmulationEnabled');
        const spySetEmitTouchEventsForMouse = sinon.stub(emulationAgent, 'invoke_setEmitTouchEventsForMouse');
        assert.isTrue(spySetTouchEmulationEnabled.notCalled);
        assert.isTrue(spySetEmitTouchEventsForMouse.notCalled);
        await emulationModel.emulateTouch(true, true);
        assert.isTrue(spySetTouchEmulationEnabled.calledOnce);
        assert.isTrue(spySetEmitTouchEventsForMouse.calledOnce);
        assert.isTrue(spySetTouchEmulationEnabled.calledWith({ enabled: true, maxTouchPoints: 1 }));
    });
    it('should `emulateTouch` not enable touch emulation when `setTouchEmulationAllowed` is called with false', async () => {
        const parentTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ parentTarget });
        const emulationModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.EmulationModel.EmulationModel);
        const emulationAgent = target.emulationAgent();
        const spySetTouchEmulationEnabled = sinon.stub(emulationAgent, 'invoke_setTouchEmulationEnabled');
        const spySetEmitTouchEventsForMouse = sinon.stub(emulationAgent, 'invoke_setEmitTouchEventsForMouse');
        assert.isTrue(spySetTouchEmulationEnabled.notCalled);
        assert.isTrue(spySetEmitTouchEventsForMouse.notCalled);
        emulationModel.setTouchEmulationAllowed(false);
        await emulationModel.emulateTouch(true, true);
        assert.isFalse(spySetTouchEmulationEnabled.called);
        assert.isFalse(spySetEmitTouchEventsForMouse.called);
    });
});


/***/ })

}]);