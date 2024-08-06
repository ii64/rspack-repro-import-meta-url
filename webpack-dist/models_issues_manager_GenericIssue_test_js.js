"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_issues_manager_GenericIssue_test_js"],{

/***/ "./models/issues_manager/GenericIssue.test.js":
/*!****************************************************!*\
  !*** ./models/issues_manager/GenericIssue.test.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockIssuesModel.js */ "./testing/MockIssuesModel.js");
/* harmony import */ var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('GenericIssue', () => {
    const mockModel = new _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_1__.MockIssuesModel([]);
    function createProtocolIssueWithoutDetails() {
        return {
            code: "GenericIssue" /* Protocol.Audits.InspectorIssueCode.GenericIssue */,
            details: {},
        };
    }
    function createProtocolIssueWithDetails(genericIssueDetails) {
        return {
            code: "GenericIssue" /* Protocol.Audits.InspectorIssueCode.GenericIssue */,
            details: { genericIssueDetails },
        };
    }
    beforeEach(() => {
        // The component warns if not provided with an issue that has details, but
        // we don't need that noise in the test output.
        sinon.stub(console, 'warn');
    });
    it('adds an incorrect form label use issue with valid details', () => {
        const issueDetails = {
            errorType: "FormLabelForNameError" /* Protocol.Audits.GenericIssueErrorType.FormLabelForNameError */,
            frameId: 'main',
            violatingNodeId: 1,
            violatingNodeAttribute: 'attribute',
        };
        const issue = createProtocolIssueWithDetails(issueDetails);
        const genericIssues = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.GenericIssue.GenericIssue.fromInspectorIssue(mockModel, issue);
        assert.strictEqual(genericIssues.length, 1);
        const genericIssue = genericIssues[0];
        assert.strictEqual(genericIssue.getCategory(), "Generic" /* IssuesManager.Issue.IssueCategory.Generic */);
        assert.strictEqual(genericIssue.primaryKey(), `GenericIssue::FormLabelForNameError-(${'main'})-(1)-(attribute)-(no-request)`);
        assert.strictEqual(genericIssue.getKind(), "PageError" /* IssuesManager.Issue.IssueKind.PageError */);
        assert.isNotNull(genericIssue.getDescription());
    });
    it('adds an incorrect form label use issue without details', () => {
        const inspectorIssueWithoutGenericDetails = createProtocolIssueWithoutDetails();
        const genericIssues = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.GenericIssue.GenericIssue.fromInspectorIssue(mockModel, inspectorIssueWithoutGenericDetails);
        assert.isEmpty(genericIssues);
    });
    it('adds a CORB/ORB issue with valid details', () => {
        const issueDetails = {
            errorType: "ResponseWasBlockedByORB" /* Protocol.Audits.GenericIssueErrorType.ResponseWasBlockedByORB */,
            request: { requestId: 'blabla' },
        };
        const issue = createProtocolIssueWithDetails(issueDetails);
        const genericIssues = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.GenericIssue.GenericIssue.fromInspectorIssue(mockModel, issue);
        assert.strictEqual(genericIssues.length, 1);
        const genericIssue = genericIssues[0];
        assert.strictEqual(genericIssue.getCategory(), "Generic" /* IssuesManager.Issue.IssueCategory.Generic */);
        assert.strictEqual(genericIssue.primaryKey(), 'GenericIssue::ResponseWasBlockedByORB-(undefined)-(undefined)-(undefined)-(blabla)');
        assert.strictEqual(genericIssue.getKind(), "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */);
        assert.isNotNull(genericIssue.getDescription());
    });
});
//# sourceMappingURL=GenericIssue.test.js.map

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