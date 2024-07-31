"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_security_SecurityModel_test_ts"],{

/***/ "./src/panels/security/SecurityModel.test.ts":
/*!***************************************************!*\
  !*** ./src/panels/security/SecurityModel.test.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _security_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security.js */ "./src/panels/security/security.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('SecurityModel', () => {
    describe('securityStateCompare', () => {
        const { securityStateCompare } = _security_js__WEBPACK_IMPORTED_MODULE_1__.SecurityModel;
        const { SecurityState } = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Security;
        it('identifies security states', () => {
            assert.strictEqual(securityStateCompare(SecurityState.Unknown, SecurityState.Unknown), 0);
            assert.strictEqual(securityStateCompare(SecurityState.Neutral, SecurityState.Neutral), 0);
            assert.strictEqual(securityStateCompare(SecurityState.Insecure, SecurityState.Insecure), 0);
            assert.strictEqual(securityStateCompare(SecurityState.Secure, SecurityState.Secure), 0);
            assert.strictEqual(securityStateCompare(SecurityState.Info, SecurityState.Info), 0);
            assert.strictEqual(securityStateCompare(SecurityState.InsecureBroken, SecurityState.InsecureBroken), 0);
        });
        it('ranks Info lowest', () => {
            assert.isBelow(securityStateCompare(SecurityState.Info, SecurityState.Unknown), 0);
            assert.isBelow(securityStateCompare(SecurityState.Info, SecurityState.Neutral), 0);
            assert.isBelow(securityStateCompare(SecurityState.Info, SecurityState.Insecure), 0);
            assert.isBelow(securityStateCompare(SecurityState.Info, SecurityState.Secure), 0);
            assert.isBelow(securityStateCompare(SecurityState.Info, SecurityState.InsecureBroken), 0);
        });
        it('ranks Unknown highest', () => {
            assert.isAbove(securityStateCompare(SecurityState.Unknown, SecurityState.Neutral), 0);
            assert.isAbove(securityStateCompare(SecurityState.Unknown, SecurityState.Insecure), 0);
            assert.isAbove(securityStateCompare(SecurityState.Unknown, SecurityState.Secure), 0);
            assert.isAbove(securityStateCompare(SecurityState.Unknown, SecurityState.Info), 0);
            assert.isAbove(securityStateCompare(SecurityState.Unknown, SecurityState.InsecureBroken), 0);
        });
        it('orders correctly from InsecureBroken to Secure', () => {
            assert.isBelow(securityStateCompare(SecurityState.InsecureBroken, SecurityState.Insecure), 0);
            assert.isBelow(securityStateCompare(SecurityState.Insecure, SecurityState.Neutral), 0);
            assert.isBelow(securityStateCompare(SecurityState.Neutral, SecurityState.Secure), 0);
        });
    });
});


/***/ }),

/***/ "./src/panels/security/security.ts":
/*!*****************************************!*\
  !*** ./src/panels/security/security.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecurityModel: () => (/* reexport module object */ _SecurityModel_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   SecurityPanel: () => (/* reexport module object */ _SecurityPanel_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _SecurityModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecurityModel.js */ "./src/panels/security/SecurityModel.ts");
/* harmony import */ var _SecurityPanel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecurityPanel.js */ "./src/panels/security/SecurityPanel.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/***/ })

}]);