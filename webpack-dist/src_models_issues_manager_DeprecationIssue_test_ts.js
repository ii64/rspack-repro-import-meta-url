"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_issues_manager_DeprecationIssue_test_ts"],{

/***/ "./src/models/issues_manager/DeprecationIssue.test.ts":
/*!************************************************************!*\
  !*** ./src/models/issues_manager/DeprecationIssue.test.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _panels_issues_issues_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/issues/issues.js */ "./src/panels/issues/issues.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockIssuesManager.js */ "./src/testing/MockIssuesManager.ts");
/* harmony import */ var _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockIssuesModel.js */ "./src/testing/MockIssuesModel.ts");
/* harmony import */ var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('DeprecationIssue', () => {
    const mockModel = new _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_4__.MockIssuesModel([]);
    const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
    function createDeprecationIssue(type) {
        return new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.DeprecationIssue.DeprecationIssue({
            sourceCodeLocation: {
                url: 'empty.html',
                lineNumber: 1,
                columnNumber: 1,
            },
            type,
        }, mockModel);
    }
    function createDeprecationIssueDetails(type) {
        return {
            code: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.InspectorIssueCode.DeprecationIssue,
            details: {
                deprecationIssueDetails: {
                    sourceCodeLocation: {
                        url: 'empty.html',
                        lineNumber: 1,
                        columnNumber: 1,
                    },
                    type,
                },
            },
        };
    }
    it('normal deprecation issue works', () => {
        const details = createDeprecationIssueDetails('DeprecationExample');
        const issue = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.DeprecationIssue.DeprecationIssue.fromInspectorIssue(mockModel, details);
        assert.isNotEmpty(issue);
    });
    it('aggregates issues with the same type', () => {
        const issues = [
            createDeprecationIssue('DeprecationExample'),
            createDeprecationIssue('DeprecationExample'),
        ];
        const aggregator = new _panels_issues_issues_js__WEBPACK_IMPORTED_MODULE_1__.IssueAggregator.IssueAggregator(mockManager);
        for (const issue of issues) {
            mockManager.dispatchEventToListeners(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.Events.IssueAdded, { issuesModel: mockModel, issue });
        }
        const aggregatedIssues = Array.from(aggregator.aggregatedIssues());
        assert.strictEqual(aggregatedIssues.length, 1);
        const deprecationIssues = Array.from(aggregatedIssues[0].getDeprecationIssues());
        assert.strictEqual(deprecationIssues.length, 2);
    });
    it('does not aggregate issues with different types', () => {
        const issues = [
            createDeprecationIssue('DeprecationExample'),
            createDeprecationIssue('CrossOriginWindowAlert'),
        ];
        const aggregator = new _panels_issues_issues_js__WEBPACK_IMPORTED_MODULE_1__.IssueAggregator.IssueAggregator(mockManager);
        for (const issue of issues) {
            mockManager.dispatchEventToListeners(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.Events.IssueAdded, { issuesModel: mockModel, issue });
        }
        const aggregatedIssues = Array.from(aggregator.aggregatedIssues());
        assert.strictEqual(aggregatedIssues.length, 2);
    });
});


/***/ }),

/***/ "./src/panels/issues/IssueRevealer.ts":
/*!********************************************!*\
  !*** ./src/panels/issues/IssueRevealer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssueRevealer: () => (/* binding */ IssueRevealer)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _IssuesPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssuesPane.js */ "./src/panels/issues/IssuesPane.ts");
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


/***/ }),

/***/ "./src/panels/issues/issues.ts":
/*!*************************************!*\
  !*** ./src/panels/issues/issues.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssueAggregator: () => (/* reexport module object */ _IssueAggregator_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   IssueRevealer: () => (/* reexport module object */ _IssueRevealer_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   IssueView: () => (/* reexport module object */ _IssueView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   IssuesPane: () => (/* reexport module object */ _IssuesPane_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _IssueAggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IssueAggregator.js */ "./src/panels/issues/IssueAggregator.ts");
/* harmony import */ var _IssueRevealer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueRevealer.js */ "./src/panels/issues/IssueRevealer.ts");
/* harmony import */ var _IssuesPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssuesPane.js */ "./src/panels/issues/IssuesPane.ts");
/* harmony import */ var _IssueView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueView.js */ "./src/panels/issues/IssueView.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







/***/ }),

/***/ "./src/testing/MockIssuesManager.ts":
/*!******************************************!*\
  !*** ./src/testing/MockIssuesManager.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockIssuesManager: () => (/* binding */ MockIssuesManager)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MockIssuesModel.js */ "./src/testing/MockIssuesModel.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class MockIssuesManager extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor(issues) {
        super();
        Object.defineProperty(this, "mockIssues", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "issueCounts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map([
                [_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.IssueKind.Improvement, 0],
                [_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.IssueKind.BreakingChange, 1],
                [_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.IssueKind.PageError, 2],
            ])
        });
        // An empty model to pass along for the IssuesManager.Events.IssueAdded event.
        Object.defineProperty(this, "mockModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_2__.MockIssuesModel([])
        });
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
        this.dispatchEventToListeners(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.IssuesManager.Events.IssuesCountUpdated);
    }
    addIssue(mockIssue) {
        this.mockIssues.push(mockIssue);
        this.dispatchEventToListeners(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.IssuesManager.Events.IssueAdded, { issue: mockIssue, issuesModel: this.mockModel });
    }
}


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