"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_issues_manager_RelatedIssue_test_js"],{

/***/ "./models/issues_manager/RelatedIssue.test.js":
/*!****************************************************!*\
  !*** ./models/issues_manager/RelatedIssue.test.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/StubIssue.js */ "./testing/StubIssue.js");
/* harmony import */ var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




describe('issuesAssociatedWith', () => {
    const requestId1 = 'r0';
    const requestId2 = 'r1';
    it('should return no issues if no issues exist', () => {
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create(requestId1, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString, null, null, null);
        assert.strictEqual(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.RelatedIssue.issuesAssociatedWith([], request).length, 0);
    });
    it('should return no issues if issues dont affect any resources', () => {
        const issue = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_2__.StubIssue('code', [], []);
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create(requestId1, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString, null, null, null);
        assert.strictEqual(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.RelatedIssue.issuesAssociatedWith([issue], request).length, 0);
    });
    it('should correctly filter issues associated with a given request id', () => {
        const issue1 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_2__.StubIssue.createFromRequestIds([requestId1, requestId2]);
        const issue2 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_2__.StubIssue.createFromRequestIds([requestId1]);
        const issues = [issue1, issue2];
        const request1 = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create(requestId1, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString, null, null, null);
        const request2 = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create(requestId2, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString, null, null, null);
        assert.deepStrictEqual(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.RelatedIssue.issuesAssociatedWith(issues, request1), issues);
        assert.deepStrictEqual(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.RelatedIssue.issuesAssociatedWith(issues, request2), [issue1]);
    });
    function createTestCookie(name) {
        const cookie = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Cookie.Cookie(name, '');
        cookie.addAttribute("domain" /* SDK.Cookie.Attribute.Domain */, '');
        cookie.addAttribute("path" /* SDK.Cookie.Attribute.Path */, '');
        return cookie;
    }
    it('should correctly filter issues associated with a cookie', () => {
        const issue1 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_2__.StubIssue.createFromCookieNames(['c1', 'c2']);
        const issue2 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_2__.StubIssue.createFromCookieNames(['c3']);
        const issue3 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_2__.StubIssue.createFromCookieNames(['c1']);
        const issues = [issue1, issue2, issue3];
        const cookie1 = createTestCookie('c1');
        const cookie2 = createTestCookie('c2');
        const cookie3 = createTestCookie('c3');
        assert.deepStrictEqual(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.RelatedIssue.issuesAssociatedWith(issues, cookie1), [issue1, issue3]);
        assert.deepStrictEqual(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.RelatedIssue.issuesAssociatedWith(issues, cookie2), [issue1]);
        assert.deepStrictEqual(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.RelatedIssue.issuesAssociatedWith(issues, cookie3), [issue2]);
    });
});
//# sourceMappingURL=RelatedIssue.test.js.map

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