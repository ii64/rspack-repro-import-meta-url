"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_testing_MockIssuesManager_ts"],{

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