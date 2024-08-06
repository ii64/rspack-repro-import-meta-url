"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_issues_manager_StylesheetLoadingIssue_test_js"],{

/***/ "./models/issues_manager/StylesheetLoadingIssue.test.js":
/*!**************************************************************!*\
  !*** ./models/issues_manager/StylesheetLoadingIssue.test.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panels_issues_issues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/issues/issues.js */ "./panels/issues/issues.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockIssuesManager.js */ "./testing/MockIssuesManager.js");
/* harmony import */ var _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockIssuesModel.js */ "./testing/MockIssuesModel.js");
/* harmony import */ var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





function createProtocolIssue(stylesheetLoadingIssueDetails) {
    return {
        code: "StylesheetLoadingIssue" /* Protocol.Audits.InspectorIssueCode.StylesheetLoadingIssue */,
        details: { stylesheetLoadingIssueDetails },
    };
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('StylesheetLoadingIssue', () => {
    const mockModel = new _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesModel([]);
    const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_2__.MockIssuesManager([]);
    it('can be created for failed stylesheet requests', () => {
        const issueDetails = {
            sourceCodeLocation: {
                url: 'http://example.com',
                lineNumber: 2,
                columnNumber: 2,
            },
            styleSheetLoadingIssueReason: "RequestFailed" /* Protocol.Audits.StyleSheetLoadingIssueReason.RequestFailed */,
            failedRequestInfo: { url: 'http://invalid', failureMessage: 'failureMessage', requestId: '12345' },
        };
        const issue = createProtocolIssue(issueDetails);
        const stylesheetIssues = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.StylesheetLoadingIssue.StylesheetLoadingIssue.fromInspectorIssue(mockModel, issue);
        assert.lengthOf(stylesheetIssues, 1);
        const stylesheetIssue = stylesheetIssues[0];
        assert.strictEqual(stylesheetIssue.getCategory(), "Other" /* IssuesManager.Issue.IssueCategory.Other */);
        assert.deepStrictEqual(stylesheetIssue.sources(), [issueDetails.sourceCodeLocation]);
        const { url, requestId } = issueDetails.failedRequestInfo;
        assert.deepStrictEqual(stylesheetIssue.requests(), [{ url, requestId }]);
        assert.strictEqual(stylesheetIssue.getKind(), "PageError" /* IssuesManager.Issue.IssueKind.PageError */);
        assert.isNotNull(stylesheetIssue.getDescription());
    });
    it('can be created for late import rules', () => {
        const issueDetails = {
            sourceCodeLocation: {
                url: 'http://example.com',
                lineNumber: 2,
                columnNumber: 2,
            },
            styleSheetLoadingIssueReason: "LateImportRule" /* Protocol.Audits.StyleSheetLoadingIssueReason.LateImportRule */,
        };
        const issue = createProtocolIssue(issueDetails);
        const stylesheetIssues = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.StylesheetLoadingIssue.StylesheetLoadingIssue.fromInspectorIssue(mockModel, issue);
        assert.lengthOf(stylesheetIssues, 1);
        const stylesheetIssue = stylesheetIssues[0];
        assert.strictEqual(stylesheetIssue.getCategory(), "Other" /* IssuesManager.Issue.IssueCategory.Other */);
        assert.deepStrictEqual(stylesheetIssue.sources(), [issueDetails.sourceCodeLocation]);
        assert.strictEqual(stylesheetIssue.getKind(), "PageError" /* IssuesManager.Issue.IssueKind.PageError */);
        assert.isNotNull(stylesheetIssue.getDescription());
    });
    it('correctly aggregates issues', () => {
        const issueDetails = [
            {
                sourceCodeLocation: {
                    url: 'http://example.com',
                    lineNumber: 1,
                    columnNumber: 1,
                },
                styleSheetLoadingIssueReason: "LateImportRule" /* Protocol.Audits.StyleSheetLoadingIssueReason.LateImportRule */,
            },
            {
                sourceCodeLocation: {
                    url: 'http://example.com',
                    lineNumber: 2,
                    columnNumber: 1,
                },
                styleSheetLoadingIssueReason: "LateImportRule" /* Protocol.Audits.StyleSheetLoadingIssueReason.LateImportRule */,
            },
            {
                sourceCodeLocation: {
                    url: 'http://example.com',
                    lineNumber: 1,
                    columnNumber: 2,
                },
                styleSheetLoadingIssueReason: "RequestFailed" /* Protocol.Audits.StyleSheetLoadingIssueReason.RequestFailed */,
                failedRequestInfo: { url: 'http://invalid', failureMessage: 'failureMessage' },
            },
            {
                sourceCodeLocation: {
                    url: 'http://example.com',
                    lineNumber: 2,
                    columnNumber: 2,
                },
                styleSheetLoadingIssueReason: "RequestFailed" /* Protocol.Audits.StyleSheetLoadingIssueReason.RequestFailed */,
                failedRequestInfo: { url: 'http://invalid', failureMessage: 'failureMessage', requestId: '12354' },
            },
        ];
        const issues = issueDetails
            .map(details => _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.StylesheetLoadingIssue.StylesheetLoadingIssue.fromInspectorIssue(mockModel, createProtocolIssue(details)))
            .flat();
        assert.lengthOf(issues, 4);
        const aggregator = new _panels_issues_issues_js__WEBPACK_IMPORTED_MODULE_0__.IssueAggregator.IssueAggregator(mockManager);
        for (const issue of issues) {
            mockManager.dispatchEventToListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */, { issuesModel: mockModel, issue });
        }
        const aggregatedIssues = Array.from(aggregator.aggregatedIssues());
        assert.lengthOf(aggregatedIssues, 2);
        assert.deepStrictEqual(Array.from(aggregatedIssues[0].sources()), [issueDetails[0].sourceCodeLocation, issueDetails[1].sourceCodeLocation]);
        assert.deepStrictEqual(Array.from(aggregatedIssues[1].sources()), [issueDetails[2].sourceCodeLocation, issueDetails[3].sourceCodeLocation]);
        assert.deepStrictEqual(Array.from(aggregatedIssues[0].requests()), []);
        const { url, requestId } = issueDetails[3].failedRequestInfo;
        assert.exists(requestId);
        assert.deepStrictEqual(Array.from(aggregatedIssues[1].requests()), [{ url, requestId }]);
    });
});
//# sourceMappingURL=StylesheetLoadingIssue.test.js.map

/***/ }),

/***/ "./panels/issues/IssueRevealer.js":
/*!****************************************!*\
  !*** ./panels/issues/IssueRevealer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssueRevealer: () => (/* binding */ IssueRevealer)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _IssuesPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssuesPane.js */ "./panels/issues/IssuesPane.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class IssueRevealer {
    async reveal(issue) {
        await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ViewManager.ViewManager.instance().showView('issues-pane');
        const view = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ViewManager.ViewManager.instance().view('issues-pane');
        if (view) {
            const issuesPane = await view.widget();
            if (issuesPane instanceof _IssuesPane_js__WEBPACK_IMPORTED_MODULE_1__.IssuesPane) {
                await issuesPane.reveal(issue);
            }
            else {
                throw new Error('Expected issues pane to be an instance of IssuesPane');
            }
        }
    }
}
//# sourceMappingURL=IssueRevealer.js.map

/***/ }),

/***/ "./panels/issues/issues.js":
/*!*********************************!*\
  !*** ./panels/issues/issues.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssueAggregator: () => (/* reexport module object */ _IssueAggregator_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   IssueRevealer: () => (/* reexport module object */ _IssueRevealer_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   IssueView: () => (/* reexport module object */ _IssueView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   IssuesPane: () => (/* reexport module object */ _IssuesPane_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _IssueAggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IssueAggregator.js */ "./panels/issues/IssueAggregator.js");
/* harmony import */ var _IssueRevealer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueRevealer.js */ "./panels/issues/IssueRevealer.js");
/* harmony import */ var _IssuesPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssuesPane.js */ "./panels/issues/IssuesPane.js");
/* harmony import */ var _IssueView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueView.js */ "./panels/issues/IssueView.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





//# sourceMappingURL=issues.js.map

/***/ }),

/***/ "./testing/MockIssuesManager.js":
/*!**************************************!*\
  !*** ./testing/MockIssuesManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockIssuesManager: () => (/* binding */ MockIssuesManager)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */ var _MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MockIssuesModel.js */ "./testing/MockIssuesModel.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class MockIssuesManager extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    mockIssues;
    issueCounts = new Map([
        ["Improvement" /* IssuesManager.Issue.IssueKind.Improvement */, 0],
        ["BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */, 1],
        ["PageError" /* IssuesManager.Issue.IssueKind.PageError */, 2],
    ]);
    // An empty model to pass along for the IssuesManager.Events.IssueAdded event.
    mockModel = new _MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_2__.MockIssuesModel([]);
    constructor(issues) {
        super();
        this.mockIssues = Array.from(issues);
    }
    issues() {
        return this.mockIssues;
    }
    getIssueById(id) {
        for (const issue of this.mockIssues) {
            if (issue.getIssueId() === id) {
                return issue;
            }
        }
        return null;
    }
    numberOfIssues(kind) {
        if (kind) {
            return this.issueCounts.get(kind) ?? 0;
        }
        return Array.from(this.issueCounts.values()).reduce((sum, v) => sum + v, 0);
    }
    setNumberOfIssues(counts) {
        this.issueCounts = counts;
    }
    incrementIssueCountsOfAllKinds() {
        for (const [key, value] of this.issueCounts) {
            this.issueCounts.set(key, value + 1);
        }
        this.dispatchEventToListeners("IssuesCountUpdated" /* IssuesManager.IssuesManager.Events.IssuesCountUpdated */);
    }
    addIssue(mockIssue) {
        this.mockIssues.push(mockIssue);
        this.dispatchEventToListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */, { issue: mockIssue, issuesModel: this.mockModel });
    }
}
//# sourceMappingURL=MockIssuesManager.js.map

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