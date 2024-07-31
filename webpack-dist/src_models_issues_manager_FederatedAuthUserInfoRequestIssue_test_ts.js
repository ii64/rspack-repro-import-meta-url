"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_issues_manager_FederatedAuthUserInfoRequestIssue_test_ts"],{

/***/ "./src/models/issues_manager/FederatedAuthUserInfoRequestIssue.test.ts":
/*!*****************************************************************************!*\
  !*** ./src/models/issues_manager/FederatedAuthUserInfoRequestIssue.test.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockIssuesModel.js */ "./src/testing/MockIssuesModel.ts");
/* harmony import */ var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




function createProtocolIssue(federatedAuthUserInfoRequestIssueDetails) {
    return {
        code: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.InspectorIssueCode.FederatedAuthUserInfoRequestIssue,
        details: { federatedAuthUserInfoRequestIssueDetails },
    };
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('FederatedAuthUserInfoRequestIssue', () => {
    const mockModel = new _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_2__.MockIssuesModel([]);
    it('can be created for various error reasons', () => {
        const errorReasons = [
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.FederatedAuthUserInfoRequestIssueReason.NotSameOrigin,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.FederatedAuthUserInfoRequestIssueReason.NotIframe,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.FederatedAuthUserInfoRequestIssueReason.NotPotentiallyTrustworthy,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.FederatedAuthUserInfoRequestIssueReason.NoAPIPermission,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.FederatedAuthUserInfoRequestIssueReason.NotSignedInWithIdp,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.FederatedAuthUserInfoRequestIssueReason.NoAccountSharingPermission,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.FederatedAuthUserInfoRequestIssueReason.InvalidConfigOrWellKnown,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.FederatedAuthUserInfoRequestIssueReason.InvalidAccountsResponse,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.FederatedAuthUserInfoRequestIssueReason.NoReturningUserFromFetchedAccounts,
        ];
        for (const errorReason of errorReasons) {
            const issueDetails = {
                federatedAuthUserInfoRequestIssueReason: errorReason,
            };
            const issue = createProtocolIssue(issueDetails);
            const federatedAuthUserInfoRequestIssues = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.FederatedAuthUserInfoRequestIssue.FederatedAuthUserInfoRequestIssue.fromInspectorIssue(mockModel, issue);
            assert.lengthOf(federatedAuthUserInfoRequestIssues, 1);
            const federatedAuthUserInfoRequestIssue = federatedAuthUserInfoRequestIssues[0];
            assert.strictEqual(federatedAuthUserInfoRequestIssue.getCategory(), _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.Issue.IssueCategory.Other);
            assert.deepStrictEqual(federatedAuthUserInfoRequestIssue.details(), issueDetails);
            assert.strictEqual(federatedAuthUserInfoRequestIssue.getKind(), _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.Issue.IssueKind.PageError);
            assert.isNotNull(federatedAuthUserInfoRequestIssue.getDescription());
        }
    });
});


/***/ }),

/***/ "./src/testing/MockIssuesModel.ts":
/*!****************************************!*\
  !*** ./src/testing/MockIssuesModel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockIssuesModel: () => (/* binding */ MockIssuesModel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class MockIssuesModel extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor(issues) {
        super();
        Object.defineProperty(this, "mockIssues", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.mockIssues = issues;
    }
    issues() {
        return this.mockIssues;
    }
    target() {
        return { id: () => 'fake-id' };
    }
}


/***/ })

}]);