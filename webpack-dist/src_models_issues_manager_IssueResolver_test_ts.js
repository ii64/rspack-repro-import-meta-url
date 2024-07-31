"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_issues_manager_IssueResolver_test_ts"],{

/***/ "./src/models/issues_manager/IssueResolver.test.ts":
/*!*********************************************************!*\
  !*** ./src/models/issues_manager/IssueResolver.test.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/MockIssuesManager.js */ "./src/testing/MockIssuesManager.ts");
/* harmony import */ var _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/StubIssue.js */ "./src/testing/StubIssue.ts");
/* harmony import */ var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



describe('IssueResolver', () => {
    const issueId1 = 'foo';
    describe('tryGet', () => {
        it('should resolve an existing issue', () => {
            const mockIssue = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_1__.StubIssue.createFromIssueId(issueId1);
            const issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_0__.MockIssuesManager([mockIssue]);
            const issueResolver = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssueResolver.IssueResolver(issuesManager);
            const issue = issueResolver.tryGet(issueId1, () => {
                throw new Error('This should not get called');
            });
            assert.isFalse(issuesManager.hasEventListeners(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded));
            assert.strictEqual(issue, mockIssue);
        });
        it('should not resolve an unknown issue', () => {
            const issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_0__.MockIssuesManager([]);
            const issueResolver = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssueResolver.IssueResolver(issuesManager);
            const issue = issueResolver.tryGet(issueId1, () => {
                throw new Error('This should not get called');
            });
            assert.isTrue(issuesManager.hasEventListeners(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded));
            assert.strictEqual(issue, null);
            issueResolver.clear();
        });
        it('should resolve a previously unknown issue when it becomes available', async () => {
            const mockIssuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_0__.MockIssuesManager([]);
            const issuesManager = mockIssuesManager;
            const issueResolver = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssueResolver.IssueResolver(issuesManager);
            const waitForCall = new Promise(resolve => {
                const issue = issueResolver.tryGet(issueId1, resolve);
                assert.strictEqual(issue, null);
            });
            assert.isTrue(issuesManager.hasEventListeners(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded));
            const mockIssue = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_1__.StubIssue.createFromIssueId(issueId1);
            mockIssuesManager.addIssue(mockIssue);
            const issue = await waitForCall;
            assert.isFalse(issuesManager.hasEventListeners(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded));
            assert.strictEqual(issue, mockIssue);
        });
    });
    describe('waitFor', () => {
        it('should resolve an existing issue', async () => {
            const mockIssue = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_1__.StubIssue.createFromIssueId(issueId1);
            const issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_0__.MockIssuesManager([mockIssue]);
            const issueResolver = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssueResolver.IssueResolver(issuesManager);
            const issue = await issueResolver.waitFor(issueId1);
            assert.isFalse(issuesManager.hasEventListeners(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded));
            assert.strictEqual(issue, mockIssue);
        });
        it('should reject the promise after `clear` has been called', async () => {
            const issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_0__.MockIssuesManager([]);
            const issueResolver = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssueResolver.IssueResolver(issuesManager);
            const issue = issueResolver.waitFor(issueId1);
            assert.isTrue(issuesManager.hasEventListeners(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded));
            issueResolver.clear();
            assert.isFalse(issuesManager.hasEventListeners(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded));
            try {
                await issue;
            }
            catch (e) {
                return;
            }
            assert.fail('Expected `await issue` to throw.');
        });
        it('should resolve a previously unknown issue when it becomes available', async () => {
            const mockIssuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_0__.MockIssuesManager([]);
            const issuesManager = mockIssuesManager;
            const issueResolver = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssueResolver.IssueResolver(issuesManager);
            const issuePromise = issueResolver.waitFor(issueId1);
            assert.isTrue(issuesManager.hasEventListeners(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded));
            const mockIssue = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_1__.StubIssue.createFromIssueId(issueId1);
            mockIssuesManager.addIssue(mockIssue);
            const issue = await issuePromise;
            assert.isFalse(issuesManager.hasEventListeners(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded));
            assert.strictEqual(issue, mockIssue);
        });
    });
});


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


/***/ }),

/***/ "./src/testing/StubIssue.ts":
/*!**********************************!*\
  !*** ./src/testing/StubIssue.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StubIssue: () => (/* binding */ StubIssue),
/* harmony export */   ThirdPartyStubIssue: () => (/* binding */ ThirdPartyStubIssue),
/* harmony export */   mkInspectorCspIssue: () => (/* binding */ mkInspectorCspIssue)
/* harmony export */ });
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/issues_manager/Issue.js */ "./src/models/issues_manager/Issue.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// eslint-disable-next-line rulesdir/es_modules_import

class StubIssue extends _models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_1__.Issue {
    constructor(code, requestIds, cookieNames, issueKind = _models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_1__.IssueKind.Improvement) {
        super(code);
        Object.defineProperty(this, "requestIds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cookieNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "issueKind", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "locations", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "mockIssueId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mockIssueCategory", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.requestIds = requestIds;
        this.cookieNames = cookieNames;
        this.issueKind = issueKind;
    }
    getDescription() {
        return {
            file: '',
            links: [],
        };
    }
    primaryKey() {
        return `${this.code()}-(${this.cookieNames.join(';')})-(${this.requestIds.join(';')})`;
    }
    requests() {
        return this.requestIds.map(id => {
            return { requestId: id, url: '' };
        });
    }
    getCategory() {
        return this.mockIssueCategory ? this.mockIssueCategory : _models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_1__.IssueCategory.Other;
    }
    sources() {
        return this.locations;
    }
    getKind() {
        return this.issueKind;
    }
    cookies() {
        return this.cookieNames.map(name => {
            return { name, domain: '', path: '' };
        });
    }
    getIssueId() {
        return this.mockIssueId;
    }
    static createFromRequestIds(requestIds) {
        return new StubIssue('StubIssue', requestIds, []);
    }
    static createFromCookieNames(cookieNames) {
        return new StubIssue('StubIssue', [], cookieNames);
    }
    static createFromIssueKinds(issueKinds) {
        return issueKinds.map(k => new StubIssue('StubIssue', [], [], k));
    }
    static createFromAffectedLocations(locations) {
        const issue = new StubIssue('StubIssue', [], []);
        issue.locations = locations;
        return issue;
    }
    static createFromIssueId(issueId) {
        const issue = new StubIssue('StubIssue', [], []);
        issue.mockIssueId = issueId;
        return issue;
    }
    static createCookieIssue(code) {
        const issue = new StubIssue(code, [], []);
        issue.mockIssueCategory = _models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_1__.IssueCategory.Cookie;
        return issue;
    }
}
class ThirdPartyStubIssue extends StubIssue {
    constructor(code, isThirdParty) {
        super(code, [], []);
        Object.defineProperty(this, "isThirdParty", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.isThirdParty = isThirdParty;
    }
    isCausedByThirdParty() {
        return this.isThirdParty;
    }
}
function mkInspectorCspIssue(blockedURL) {
    return {
        code: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.InspectorIssueCode.ContentSecurityPolicyIssue,
        details: {
            contentSecurityPolicyIssueDetails: {
                isReportOnly: true,
                violatedDirective: 'testdirective',
                contentSecurityPolicyViolationType: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.ContentSecurityPolicyViolationType.KURLViolation,
                blockedURL,
            },
        },
    };
}


/***/ })

}]);