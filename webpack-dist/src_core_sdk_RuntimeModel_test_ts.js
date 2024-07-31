"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_RuntimeModel_test_ts"],{

/***/ "./src/core/sdk/RuntimeModel.test.ts":
/*!*******************************************!*\
  !*** ./src/core/sdk/RuntimeModel.test.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('ExecutionContext', () => {
    function createExecutionContext(target, name, isDefault) {
        const runtimeModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
        assert.exists(runtimeModel);
        return new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.ExecutionContext(runtimeModel, 42, 'uniqueId', name ?? 'name', 'http://www.example.com', Boolean(isDefault));
    }
    it('can be compared based on target type', () => {
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Tab });
        const mainFrameTargetUnderTab = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame, parentTarget: tabTarget });
        assert.strictEqual(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.ExecutionContext.comparator(createExecutionContext(mainFrameTargetUnderTab), createExecutionContext((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame, parentTarget: mainFrameTargetUnderTab }))), -1);
        assert.strictEqual(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.ExecutionContext.comparator(createExecutionContext((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame, parentTarget: mainFrameTargetUnderTab })), createExecutionContext((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.ServiceWorker, parentTarget: mainFrameTargetUnderTab }))), -1);
        assert.strictEqual(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.ExecutionContext.comparator(createExecutionContext((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.ServiceWorker, parentTarget: mainFrameTargetUnderTab })), createExecutionContext((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.SharedWorker, parentTarget: mainFrameTargetUnderTab }))), -1);
        assert.strictEqual(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.ExecutionContext.comparator(createExecutionContext((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.ServiceWorker, parentTarget: mainFrameTargetUnderTab })), createExecutionContext((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Worker, parentTarget: mainFrameTargetUnderTab }))), -1);
    });
    it('can be compared based on target depth', () => {
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Tab });
        const mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame, parentTarget: tabTarget });
        const subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame, parentTarget: mainFrameTarget });
        assert.strictEqual(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.ExecutionContext.comparator(createExecutionContext(mainFrameTarget), createExecutionContext(subframeTarget)), -1);
    });
    it('can be compared based on defaultness', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame });
        const defaultExecutionContext = createExecutionContext(target, 'name', /* isDefault=*/ true);
        const notDefaultExecutionContext = createExecutionContext(target, 'name', /* isDefault=*/ false);
        assert.strictEqual(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.ExecutionContext.comparator(defaultExecutionContext, notDefaultExecutionContext), -1);
    });
    it('can be compared based on name', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame });
        const executionContextA = createExecutionContext(target, /* name=*/ 'a');
        const executionContextB = createExecutionContext(target, /* name=*/ 'b');
        assert.strictEqual(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.ExecutionContext.comparator(executionContextA, executionContextB), -1);
    });
});


/***/ })

}]);