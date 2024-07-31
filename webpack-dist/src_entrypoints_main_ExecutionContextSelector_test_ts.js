"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_main_ExecutionContextSelector_test_ts"],{

/***/ "./src/entrypoints/main/ExecutionContextSelector.test.ts":
/*!***************************************************************!*\
  !*** ./src/entrypoints/main/ExecutionContextSelector.test.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.js */ "./src/entrypoints/main/main.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('ExecutionContextSelector', () => {
    it('switches to the default context once available', () => {
        new _main_js__WEBPACK_IMPORTED_MODULE_5__.ExecutionContextSelector.ExecutionContextSelector(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance());
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        const mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Frame, parentTarget: tabTarget });
        const subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Frame, parentTarget: mainFrameTarget });
        const prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Frame, parentTarget: tabTarget, subtype: 'prerender' });
        const contextSetFlavor = sinon.spy(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance(), 'setFlavor');
        const sentExecutionContextCreated = (target) => {
            const frame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target);
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.RuntimeModel);
            runtimeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.Events.ExecutionContextCreated, { isDefault: true, frameId: frame.id, target: () => target });
        };
        sentExecutionContextCreated(subframeTarget);
        assert.isTrue(contextSetFlavor.called);
        contextSetFlavor.resetHistory();
        sentExecutionContextCreated(subframeTarget);
        assert.isTrue(contextSetFlavor.notCalled);
        sentExecutionContextCreated(mainFrameTarget);
        assert.isTrue(contextSetFlavor.called);
        contextSetFlavor.resetHistory();
        sentExecutionContextCreated(prerenderTarget);
        assert.isFalse(contextSetFlavor.called);
    });
});


/***/ })

}]);