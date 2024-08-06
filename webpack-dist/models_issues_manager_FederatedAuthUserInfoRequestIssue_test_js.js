"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_issues_manager_FederatedAuthUserInfoRequestIssue_test_js"],{

/***/ "./models/issues_manager/FederatedAuthUserInfoRequestIssue.test.js":
/*!*************************************************************************!*\
  !*** ./models/issues_manager/FederatedAuthUserInfoRequestIssue.test.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockIssuesModel.js */ "./testing/MockIssuesModel.js");
/* harmony import */ var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



function createProtocolIssue(federatedAuthUserInfoRequestIssueDetails) {
    return {
        code: "FederatedAuthUserInfoRequestIssue" /* Protocol.Audits.InspectorIssueCode.FederatedAuthUserInfoRequestIssue */,
        details: { federatedAuthUserInfoRequestIssueDetails },
    };
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('FederatedAuthUserInfoRequestIssue', () => {
    const mockModel = new _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_1__.MockIssuesModel([]);
    it('can be created for various error reasons', () => {
        const errorReasons = [
            "NotSameOrigin" /* Protocol.Audits.FederatedAuthUserInfoRequestIssueReason.NotSameOrigin */,
            "NotIframe" /* Protocol.Audits.FederatedAuthUserInfoRequestIssueReason.NotIframe */,
            "NotPotentiallyTrustworthy" /* Protocol.Audits.FederatedAuthUserInfoRequestIssueReason.NotPotentiallyTrustworthy */,
            "NoApiPermission" /* Protocol.Audits.FederatedAuthUserInfoRequestIssueReason.NoAPIPermission */,
            "NotSignedInWithIdp" /* Protocol.Audits.FederatedAuthUserInfoRequestIssueReason.NotSignedInWithIdp */,
            "NoAccountSharingPermission" /* Protocol.Audits.FederatedAuthUserInfoRequestIssueReason.NoAccountSharingPermission */,
            "InvalidConfigOrWellKnown" /* Protocol.Audits.FederatedAuthUserInfoRequestIssueReason.InvalidConfigOrWellKnown */,
            "InvalidAccountsResponse" /* Protocol.Audits.FederatedAuthUserInfoRequestIssueReason.InvalidAccountsResponse */,
            "NoReturningUserFromFetchedAccounts" /* Protocol.Audits.FederatedAuthUserInfoRequestIssueReason.NoReturningUserFromFetchedAccounts */,
        ];
        for (const errorReason of errorReasons) {
            const issueDetails = {
                federatedAuthUserInfoRequestIssueReason: errorReason,
            };
            const issue = createProtocolIssue(issueDetails);
            const federatedAuthUserInfoRequestIssues = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.FederatedAuthUserInfoRequestIssue.FederatedAuthUserInfoRequestIssue.fromInspectorIssue(mockModel, issue);
            assert.lengthOf(federatedAuthUserInfoRequestIssues, 1);
            const federatedAuthUserInfoRequestIssue = federatedAuthUserInfoRequestIssues[0];
            assert.strictEqual(federatedAuthUserInfoRequestIssue.getCategory(), "Other" /* IssuesManager.Issue.IssueCategory.Other */);
            assert.deepStrictEqual(federatedAuthUserInfoRequestIssue.details(), issueDetails);
            assert.strictEqual(federatedAuthUserInfoRequestIssue.getKind(), "PageError" /* IssuesManager.Issue.IssueKind.PageError */);
            assert.isNotNull(federatedAuthUserInfoRequestIssue.getDescription());
        }
    });
});
//# sourceMappingURL=FederatedAuthUserInfoRequestIssue.test.js.map

/***/ }),

/***/ "./testing/MockIssuesModel.js":
/*!************************************!*\
  !*** ./testing/MockIssuesModel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockIssuesModel: () => (/* binding */ MockIssuesModel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class MockIssuesModel extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    mockIssues;
    constructor(issues) {
        super();
        this.mockIssues = issues;
    }
    issues() {
        return this.mockIssues;
    }
    target() {
        return { id: () => 'fake-id' };
    }
}
//# sourceMappingURL=MockIssuesModel.js.map

/***/ })

}]);