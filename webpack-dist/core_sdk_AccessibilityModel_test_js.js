"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_AccessibilityModel_test_js"],{

/***/ "./core/sdk/AccessibilityModel.test.js":
/*!*********************************************!*\
  !*** ./core/sdk/AccessibilityModel.test.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('AccessibilityModel', () => {
    it('can be instantiated', () => {
        assert.doesNotThrow(() => {
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
            new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.AccessibilityModel.AccessibilityModel(target);
        });
    });
});
//# sourceMappingURL=AccessibilityModel.test.js.map

/***/ })

}]);