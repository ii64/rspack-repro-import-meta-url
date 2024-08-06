"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_security_SecurityModel_test_js"],{

/***/ "./panels/security/SecurityModel.test.js":
/*!***********************************************!*\
  !*** ./panels/security/SecurityModel.test.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _security_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security.js */ "./panels/security/security.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('SecurityModel', () => {
    describe('securityStateCompare', () => {
        const { securityStateCompare } = _security_js__WEBPACK_IMPORTED_MODULE_0__.SecurityModel;
        const { SecurityState } = Protocol.Security;
        it('identifies security states', () => {
            assert.strictEqual(securityStateCompare("unknown" /* SecurityState.Unknown */, "unknown" /* SecurityState.Unknown */), 0);
            assert.strictEqual(securityStateCompare("neutral" /* SecurityState.Neutral */, "neutral" /* SecurityState.Neutral */), 0);
            assert.strictEqual(securityStateCompare("insecure" /* SecurityState.Insecure */, "insecure" /* SecurityState.Insecure */), 0);
            assert.strictEqual(securityStateCompare("secure" /* SecurityState.Secure */, "secure" /* SecurityState.Secure */), 0);
            assert.strictEqual(securityStateCompare("info" /* SecurityState.Info */, "info" /* SecurityState.Info */), 0);
            assert.strictEqual(securityStateCompare("insecure-broken" /* SecurityState.InsecureBroken */, "insecure-broken" /* SecurityState.InsecureBroken */), 0);
        });
        it('ranks Info lowest', () => {
            assert.isBelow(securityStateCompare("info" /* SecurityState.Info */, "unknown" /* SecurityState.Unknown */), 0);
            assert.isBelow(securityStateCompare("info" /* SecurityState.Info */, "neutral" /* SecurityState.Neutral */), 0);
            assert.isBelow(securityStateCompare("info" /* SecurityState.Info */, "insecure" /* SecurityState.Insecure */), 0);
            assert.isBelow(securityStateCompare("info" /* SecurityState.Info */, "secure" /* SecurityState.Secure */), 0);
            assert.isBelow(securityStateCompare("info" /* SecurityState.Info */, "insecure-broken" /* SecurityState.InsecureBroken */), 0);
        });
        it('ranks Unknown highest', () => {
            assert.isAbove(securityStateCompare("unknown" /* SecurityState.Unknown */, "neutral" /* SecurityState.Neutral */), 0);
            assert.isAbove(securityStateCompare("unknown" /* SecurityState.Unknown */, "insecure" /* SecurityState.Insecure */), 0);
            assert.isAbove(securityStateCompare("unknown" /* SecurityState.Unknown */, "secure" /* SecurityState.Secure */), 0);
            assert.isAbove(securityStateCompare("unknown" /* SecurityState.Unknown */, "info" /* SecurityState.Info */), 0);
            assert.isAbove(securityStateCompare("unknown" /* SecurityState.Unknown */, "insecure-broken" /* SecurityState.InsecureBroken */), 0);
        });
        it('orders correctly from InsecureBroken to Secure', () => {
            assert.isBelow(securityStateCompare("insecure-broken" /* SecurityState.InsecureBroken */, "insecure" /* SecurityState.Insecure */), 0);
            assert.isBelow(securityStateCompare("insecure" /* SecurityState.Insecure */, "neutral" /* SecurityState.Neutral */), 0);
            assert.isBelow(securityStateCompare("neutral" /* SecurityState.Neutral */, "secure" /* SecurityState.Secure */), 0);
        });
    });
});
//# sourceMappingURL=SecurityModel.test.js.map

/***/ }),

/***/ "./panels/security/security.js":
/*!*************************************!*\
  !*** ./panels/security/security.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecurityModel: () => (/* reexport module object */ _SecurityModel_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   SecurityPanel: () => (/* reexport module object */ _SecurityPanel_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _SecurityModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecurityModel.js */ "./panels/security/SecurityModel.js");
/* harmony import */ var _SecurityPanel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecurityPanel.js */ "./panels/security/SecurityPanel.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



//# sourceMappingURL=security.js.map

/***/ })

}]);