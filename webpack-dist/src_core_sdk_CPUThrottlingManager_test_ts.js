"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_CPUThrottlingManager_test_ts"],{

/***/ "./src/core/sdk/CPUThrottlingManager.test.ts":
/*!***************************************************!*\
  !*** ./src/core/sdk/CPUThrottlingManager.test.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('CPUThrottlingManager', () => {
    let target;
    beforeEach(() => {
        // We need one target since CPUThrottlingManager gets it from TargetManager.
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
    });
    it('can get the current hardwareConcurrency.', async () => {
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('Runtime.evaluate', ({ expression }) => {
            assert.strictEqual(expression, 'navigator.hardwareConcurrency');
            return ({ getError: () => undefined, result: { value: 42 } });
        });
        const manager = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CPUThrottlingManager.CPUThrottlingManager.instance();
        const concurrency = await manager.getHardwareConcurrency();
        assert.strictEqual(concurrency, 42);
    });
    it('can set the current hardwareConcurrency', async () => {
        const cdpStub = sinon.stub(target.emulationAgent(), 'invoke_setHardwareConcurrencyOverride').resolves();
        const manager = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CPUThrottlingManager.CPUThrottlingManager.instance();
        manager.setHardwareConcurrency(5);
        assert.isTrue(cdpStub.calledOnce);
        assert.isTrue(cdpStub.calledWithExactly({ hardwareConcurrency: 5 }));
    });
    it('does not set concurrency to 0 or negative numbers', async () => {
        const cdpStub = sinon.stub(target.emulationAgent(), 'invoke_setHardwareConcurrencyOverride').resolves();
        const manager = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CPUThrottlingManager.CPUThrottlingManager.instance();
        manager.setHardwareConcurrency(0);
        assert.isFalse(cdpStub.called);
        manager.setHardwareConcurrency(-1);
        assert.isFalse(cdpStub.called);
    });
});


/***/ })

}]);