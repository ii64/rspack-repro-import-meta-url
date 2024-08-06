"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_issues_manager_Issue_test_js"],{

/***/ "./models/issues_manager/Issue.test.js":
/*!*********************************************!*\
  !*** ./models/issues_manager/Issue.test.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/StubIssue.js */ "./testing/StubIssue.js");
/* harmony import */ var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('Issue', () => {
    it('should store the code', () => {
        const code = 'anExampleIssueCodeString';
        const issue = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_0__.StubIssue(code, [], []);
        assert.strictEqual(issue.code(), code);
    });
});
describe('CookieIssue', () => {
    describe('isCausedByThirdParty', () => {
        const isCausedByThirdParty = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.CookieIssue.isCausedByThirdParty;
        const mockResourceTreeFrame = (domainAndRegistry) => {
            return { domainAndRegistry: () => domainAndRegistry };
        };
        it('returns true when the top frame is not yet available', () => {
            assert.isTrue(isCausedByThirdParty(null, 'https://example.com/index.html'));
        });
        it('returns false when no cookieUrl is available or cookieUrl is invalid', () => {
            const resourceTreeFrame = mockResourceTreeFrame('example.com');
            assert.isFalse(isCausedByThirdParty(resourceTreeFrame, undefined, 'http://www.example.com'));
            assert.isFalse(isCausedByThirdParty(resourceTreeFrame, '~~really an invalid URL', 'http://www.example.com'));
        });
        it('returns true for third-party cookieUrls', () => {
            const resourceTreeFrame = mockResourceTreeFrame('example.com');
            assert.isTrue(isCausedByThirdParty(resourceTreeFrame, 'http://foo.com/index.html'));
            assert.isTrue(isCausedByThirdParty(resourceTreeFrame, 'http://example.com.bar/foo.php'));
            assert.isTrue(isCausedByThirdParty(resourceTreeFrame, 'http://eexample.com/index.html'));
            assert.isTrue(isCausedByThirdParty(resourceTreeFrame, 'http://sub.domain.eexample.com/index.html'));
        });
        it('returns false for first-party cookieUrls', () => {
            const resourceTreeFrame = mockResourceTreeFrame('example.com');
            assert.isFalse(isCausedByThirdParty(resourceTreeFrame, 'http://www.example.com/index.html', 'http://www.example.com'));
            assert.isFalse(isCausedByThirdParty(resourceTreeFrame, 'http://sub.domain.example.com/should-work.php', 'http://www.example.com'));
        });
        it('returns true for first-party cookieUrls in a third-party context', () => {
            const resourceTreeFrame = mockResourceTreeFrame('example.com');
            assert.isTrue(isCausedByThirdParty(resourceTreeFrame, 'http://www.example.com/index.html'));
            assert.isTrue(isCausedByThirdParty(resourceTreeFrame, 'http://sub.domain.example.com/should-work.php'));
        });
    });
});
//# sourceMappingURL=Issue.test.js.map

/***/ }),

/***/ "./testing/StubIssue.js":
/*!******************************!*\
  !*** ./testing/StubIssue.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StubIssue: () => (/* binding */ StubIssue),
/* harmony export */   ThirdPartyStubIssue: () => (/* binding */ ThirdPartyStubIssue),
/* harmony export */   mkInspectorCspIssue: () => (/* binding */ mkInspectorCspIssue)
/* harmony export */ });
/* harmony import */ var _models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/issues_manager/Issue.js */ "./models/issues_manager/Issue.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line rulesdir/es_modules_import

class StubIssue extends _models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_0__.Issue {
    requestIds;
    cookieNames;
    issueKind;
    locations = [];
    mockIssueId;
    mockIssueCategory;
    constructor(code, requestIds, cookieNames, issueKind = "Improvement" /* IssueKind.Improvement */) {
        super(code);
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
        return this.mockIssueCategory ? this.mockIssueCategory : "Other" /* IssueCategory.Other */;
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
        issue.mockIssueCategory = "Cookie" /* IssueCategory.Cookie */;
        return issue;
    }
}
class ThirdPartyStubIssue extends StubIssue {
    isThirdParty;
    constructor(code, isThirdParty) {
        super(code, [], []);
        this.isThirdParty = isThirdParty;
    }
    isCausedByThirdParty() {
        return this.isThirdParty;
    }
}
function mkInspectorCspIssue(blockedURL) {
    return {
        code: "ContentSecurityPolicyIssue" /* Protocol.Audits.InspectorIssueCode.ContentSecurityPolicyIssue */,
        details: {
            contentSecurityPolicyIssueDetails: {
                isReportOnly: true,
                violatedDirective: 'testdirective',
                contentSecurityPolicyViolationType: "kURLViolation" /* Protocol.Audits.ContentSecurityPolicyViolationType.KURLViolation */,
                blockedURL,
            },
        },
    };
}
//# sourceMappingURL=StubIssue.js.map

/***/ })

}]);