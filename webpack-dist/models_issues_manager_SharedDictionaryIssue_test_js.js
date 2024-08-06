"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_issues_manager_SharedDictionaryIssue_test_js"],{

/***/ "./models/issues_manager/SharedDictionaryIssue.test.js":
/*!*************************************************************!*\
  !*** ./models/issues_manager/SharedDictionaryIssue.test.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockIssuesModel.js */ "./testing/MockIssuesModel.js");
/* harmony import */ var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



function createProtocolIssue(sharedDictionaryIssueDetails) {
    return {
        code: "SharedDictionaryIssue" /* Protocol.Audits.InspectorIssueCode.SharedDictionaryIssue */,
        details: { sharedDictionaryIssueDetails },
    };
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('SharedDictionaryIssue', () => {
    const mockModel = new _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_1__.MockIssuesModel([]);
    it('can be created for various error reasons', () => {
        const errorReasons = [
            "UseErrorCrossOriginNoCorsRequest" /* Protocol.Audits.SharedDictionaryError.UseErrorCrossOriginNoCorsRequest */,
            "UseErrorDictionaryLoadFailure" /* Protocol.Audits.SharedDictionaryError.UseErrorDictionaryLoadFailure */,
            "UseErrorMatchingDictionaryNotUsed" /* Protocol.Audits.SharedDictionaryError.UseErrorMatchingDictionaryNotUsed */,
            "UseErrorUnexpectedContentDictionaryHeader" /* Protocol.Audits.SharedDictionaryError.UseErrorUnexpectedContentDictionaryHeader */,
            "WriteErrorCossOriginNoCorsRequest" /* Protocol.Audits.SharedDictionaryError.WriteErrorCossOriginNoCorsRequest */,
            "WriteErrorDisallowedBySettings" /* Protocol.Audits.SharedDictionaryError.WriteErrorDisallowedBySettings */,
            "WriteErrorExpiredResponse" /* Protocol.Audits.SharedDictionaryError.WriteErrorExpiredResponse */,
            "WriteErrorFeatureDisabled" /* Protocol.Audits.SharedDictionaryError.WriteErrorFeatureDisabled */,
            "WriteErrorInsufficientResources" /* Protocol.Audits.SharedDictionaryError.WriteErrorInsufficientResources */,
            "WriteErrorInvalidMatchField" /* Protocol.Audits.SharedDictionaryError.WriteErrorInvalidMatchField */,
            "WriteErrorInvalidStructuredHeader" /* Protocol.Audits.SharedDictionaryError.WriteErrorInvalidStructuredHeader */,
            "WriteErrorNavigationRequest" /* Protocol.Audits.SharedDictionaryError.WriteErrorNavigationRequest */,
            "WriteErrorNoMatchField" /* Protocol.Audits.SharedDictionaryError.WriteErrorNoMatchField */,
            "WriteErrorNonListMatchDestField" /* Protocol.Audits.SharedDictionaryError.WriteErrorNonListMatchDestField */,
            "WriteErrorNonSecureContext" /* Protocol.Audits.SharedDictionaryError.WriteErrorNonSecureContext */,
            "WriteErrorNonStringIdField" /* Protocol.Audits.SharedDictionaryError.WriteErrorNonStringIdField */,
            "WriteErrorNonStringInMatchDestList" /* Protocol.Audits.SharedDictionaryError.WriteErrorNonStringInMatchDestList */,
            "WriteErrorNonStringMatchField" /* Protocol.Audits.SharedDictionaryError.WriteErrorNonStringMatchField */,
            "WriteErrorNonTokenTypeField" /* Protocol.Audits.SharedDictionaryError.WriteErrorNonTokenTypeField */,
            "WriteErrorRequestAborted" /* Protocol.Audits.SharedDictionaryError.WriteErrorRequestAborted */,
            "WriteErrorShuttingDown" /* Protocol.Audits.SharedDictionaryError.WriteErrorShuttingDown */,
            "WriteErrorTooLongIdField" /* Protocol.Audits.SharedDictionaryError.WriteErrorTooLongIdField */,
            "WriteErrorUnsupportedType" /* Protocol.Audits.SharedDictionaryError.WriteErrorUnsupportedType */,
        ];
        for (const errorReason of errorReasons) {
            const issueDetails = {
                sharedDictionaryError: errorReason,
                request: {
                    requestId: 'test-request-id',
                    url: 'https://example.com/',
                },
            };
            const issue = createProtocolIssue(issueDetails);
            const sharedDictionaryIssues = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.SharedDictionaryIssue.SharedDictionaryIssue.fromInspectorIssue(mockModel, issue);
            assert.lengthOf(sharedDictionaryIssues, 1);
            const sharedDictionaryIssue = sharedDictionaryIssues[0];
            assert.strictEqual(sharedDictionaryIssue.getCategory(), "Other" /* IssuesManager.Issue.IssueCategory.Other */);
            assert.deepStrictEqual(sharedDictionaryIssue.details(), issueDetails);
            assert.strictEqual(sharedDictionaryIssue.getKind(), "PageError" /* IssuesManager.Issue.IssueKind.PageError */);
            assert.isNotNull(sharedDictionaryIssue.getDescription());
        }
    });
});
//# sourceMappingURL=SharedDictionaryIssue.test.js.map

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