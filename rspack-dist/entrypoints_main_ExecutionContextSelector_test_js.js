"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_main_ExecutionContextSelector_test_js"], {
"./entrypoints/main/ExecutionContextSelector.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.js */ "./entrypoints/main/main.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('ExecutionContextSelector', function() {
    it('switches to the default context once available', function() {
        new _main_js__WEBPACK_IMPORTED_MODULE_5__.ExecutionContextSelector.ExecutionContextSelector(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance());
        var tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab
        });
        var mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Frame,
            parentTarget: tabTarget
        });
        var subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Frame,
            parentTarget: mainFrameTarget
        });
        var prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Frame,
            parentTarget: tabTarget,
            subtype: 'prerender'
        });
        var contextSetFlavor = sinon.spy(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance(), 'setFlavor');
        var sentExecutionContextCreated = function(target) {
            var frame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target);
            var runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.RuntimeModel);
            runtimeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.Events.ExecutionContextCreated, {
                isDefault: true,
                frameId: frame.id,
                target: function() {
                    return target;
                }
            });
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
}); //# sourceMappingURL=ExecutionContextSelector.test.js.map


}),

}]);