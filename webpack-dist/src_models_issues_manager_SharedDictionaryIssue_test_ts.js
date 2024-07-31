"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_issues_manager_SharedDictionaryIssue_test_ts"],{

/***/ "./src/models/issues_manager/SharedDictionaryIssue.test.ts":
/*!*****************************************************************!*\
  !*** ./src/models/issues_manager/SharedDictionaryIssue.test.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockIssuesModel.js */ "./src/testing/MockIssuesModel.ts");
/* harmony import */ var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




function createProtocolIssue(sharedDictionaryIssueDetails) {
    return {
        code: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.InspectorIssueCode.SharedDictionaryIssue,
        details: { sharedDictionaryIssueDetails },
    };
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('SharedDictionaryIssue', () => {
    const mockModel = new _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_2__.MockIssuesModel([]);
    it('can be created for various error reasons', () => {
        const errorReasons = [
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.UseErrorCrossOriginNoCorsRequest,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.UseErrorDictionaryLoadFailure,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.UseErrorMatchingDictionaryNotUsed,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.UseErrorUnexpectedContentDictionaryHeader,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorCossOriginNoCorsRequest,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorDisallowedBySettings,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorExpiredResponse,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorFeatureDisabled,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorInsufficientResources,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorInvalidMatchField,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorInvalidStructuredHeader,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorNavigationRequest,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorNoMatchField,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorNonListMatchDestField,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorNonSecureContext,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorNonStringIdField,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorNonStringInMatchDestList,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorNonStringMatchField,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorNonTokenTypeField,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorRequestAborted,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorShuttingDown,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorTooLongIdField,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.SharedDictionaryError.WriteErrorUnsupportedType,
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
            const sharedDictionaryIssues = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.SharedDictionaryIssue.SharedDictionaryIssue.fromInspectorIssue(mockModel, issue);
            assert.lengthOf(sharedDictionaryIssues, 1);
            const sharedDictionaryIssue = sharedDictionaryIssues[0];
            assert.strictEqual(sharedDictionaryIssue.getCategory(), _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.Issue.IssueCategory.Other);
            assert.deepStrictEqual(sharedDictionaryIssue.details(), issueDetails);
            assert.strictEqual(sharedDictionaryIssue.getKind(), _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.Issue.IssueKind.PageError);
            assert.isNotNull(sharedDictionaryIssue.getDescription());
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