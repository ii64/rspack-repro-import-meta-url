"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_mobile_throttling_ThrottlingManager_test_js"], {
"./panels/mobile_throttling/ThrottlingManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _mobile_throttling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile_throttling.js */ "./panels/mobile_throttling/mobile_throttling.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('ThrottlingManager', function() {
    describe('OfflineToolbarCheckbox', function() {
        it('has initial checked state which depends on throttling setting', function() {
            var throttlingManager = _mobile_throttling_js__WEBPACK_IMPORTED_MODULE_3__.ThrottlingManager.throttlingManager();
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.MultitargetNetworkManager.instance().setNetworkConditions(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.OfflineConditions);
            var checkbox = throttlingManager.createOfflineToolbarCheckbox();
            assert.isTrue(checkbox.checked());
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.MultitargetNetworkManager.instance().setNetworkConditions(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Slow4GConditions);
            checkbox = throttlingManager.createOfflineToolbarCheckbox();
            assert.isFalse(checkbox.checked());
        });
        it('listens to changes in throttling setting', function() {
            var throttlingManager = _mobile_throttling_js__WEBPACK_IMPORTED_MODULE_3__.ThrottlingManager.throttlingManager();
            var checkbox = throttlingManager.createOfflineToolbarCheckbox();
            assert.isFalse(checkbox.checked());
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.MultitargetNetworkManager.instance().setNetworkConditions(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.OfflineConditions);
            assert.isTrue(checkbox.checked());
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.MultitargetNetworkManager.instance().setNetworkConditions(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.NoThrottlingConditions);
            assert.isFalse(checkbox.checked());
        });
        it('updates setting when checkbox is clicked on', function() {
            var throttlingManager = _mobile_throttling_js__WEBPACK_IMPORTED_MODULE_3__.ThrottlingManager.throttlingManager();
            var multiTargetNetworkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.MultitargetNetworkManager.instance();
            multiTargetNetworkManager.setNetworkConditions(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.OfflineConditions);
            var checkbox = throttlingManager.createOfflineToolbarCheckbox();
            assert.isTrue(checkbox.checked());
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(checkbox.inputElement);
            assert.isFalse(checkbox.checked());
            assert.strictEqual(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.NoThrottlingConditions, multiTargetNetworkManager.networkConditions());
            multiTargetNetworkManager.setNetworkConditions(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Slow3GConditions);
            assert.isFalse(checkbox.checked());
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(checkbox.inputElement);
            assert.isTrue(checkbox.checked());
            assert.strictEqual(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.OfflineConditions, multiTargetNetworkManager.networkConditions());
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(checkbox.inputElement);
            assert.isFalse(checkbox.checked());
            assert.strictEqual(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Slow3GConditions, multiTargetNetworkManager.networkConditions());
        });
    });
}); //# sourceMappingURL=ThrottlingManager.test.js.map


}),

}]);