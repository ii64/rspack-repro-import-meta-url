"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_IssueView_test_js"],{

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

/***/ "./panels/issues/IssueView.test.js":
/*!*****************************************!*\
  !*** ./panels/issues/IssueView.test.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/StubIssue.js */ "./testing/StubIssue.js");
/* harmony import */ var _testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/UserMetricsHelpers.js */ "./testing/UserMetricsHelpers.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _issues_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./issues.js */ "./panels/issues/issues.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('IssueView', () => {
    it('records metrics when an issue is expanded', () => {
        const aggregationKey = 'key';
        const issue = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_2__.StubIssue.createFromRequestIds(['id1', 'id2']);
        const aggregatedIssue = new _issues_js__WEBPACK_IMPORTED_MODULE_5__.IssueAggregator.AggregatedIssue('code', aggregationKey);
        aggregatedIssue.addInstance(issue);
        const view = new _issues_js__WEBPACK_IMPORTED_MODULE_5__.IssueView.IssueView(aggregatedIssue, { title: 'Mock issue', links: [], markdown: [] });
        const treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutline(); // TreeElements need to be part of a TreeOutline to be expandable.
        treeOutline.appendChild(view);
        view.expand();
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_3__.recordedMetricsContain)("DevTools.IssuesPanelIssueExpanded" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.IssuesPanelIssueExpanded */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.IssueExpanded.Other));
        view.clear();
    });
    it('records metrics when a SameSite Cookie issue is expanded', () => {
        const aggregationKey = 'key';
        const issue = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_2__.StubIssue.createCookieIssue('CookieIssue::WarnSameSiteUnspecifiedLaxAllowUnsafe::ReadCookie');
        const aggregatedIssue = new _issues_js__WEBPACK_IMPORTED_MODULE_5__.IssueAggregator.AggregatedIssue('CookieIssue::WarnSameSiteUnspecifiedLaxAllowUnsafe::ReadCookie', aggregationKey);
        aggregatedIssue.addInstance(issue);
        const view = new _issues_js__WEBPACK_IMPORTED_MODULE_5__.IssueView.IssueView(aggregatedIssue, { title: 'Mock Cookie Issue', links: [], markdown: [] });
        const treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutline(); // TreeElements need to be part of a TreeOutline to be expandable.
        treeOutline.appendChild(view);
        view.expand();
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_3__.recordedMetricsContain)("DevTools.IssuesPanelIssueExpanded" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.IssuesPanelIssueExpanded */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.IssueExpanded.SameSiteCookie));
        assert.isFalse((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_3__.recordedMetricsContain)("DevTools.IssuesPanelIssueExpanded" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.IssuesPanelIssueExpanded */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.IssueExpanded.GenericCookie));
        view.clear();
    });
    it('records metrics when a ThirdPartyPhaseout Cookie issue is expanded', () => {
        const aggregationKey = 'key';
        const issue = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_2__.StubIssue.createCookieIssue('CookieIssue::WarnThirdPartyPhaseout::ReadCookie');
        const aggregatedIssue = new _issues_js__WEBPACK_IMPORTED_MODULE_5__.IssueAggregator.AggregatedIssue('CookieIssue::WarnThirdPartyPhaseout::ReadCookie', aggregationKey);
        aggregatedIssue.addInstance(issue);
        const view = new _issues_js__WEBPACK_IMPORTED_MODULE_5__.IssueView.IssueView(aggregatedIssue, { title: 'Mock Cookie Issue', links: [], markdown: [] });
        const treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutline(); // TreeElements need to be part of a TreeOutline to be expandable.
        treeOutline.appendChild(view);
        view.expand();
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_3__.recordedMetricsContain)("DevTools.IssuesPanelIssueExpanded" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.IssuesPanelIssueExpanded */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.IssueExpanded.ThirdPartyPhaseoutCookie));
        assert.isFalse((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_3__.recordedMetricsContain)("DevTools.IssuesPanelIssueExpanded" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.IssuesPanelIssueExpanded */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.IssueExpanded.GenericCookie));
        view.clear();
    });
});
//# sourceMappingURL=IssueView.test.js.map

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

/***/ }),

/***/ "./testing/UserMetricsHelpers.js":
/*!***************************************!*\
  !*** ./testing/UserMetricsHelpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   recordedMetricsContain: () => (/* binding */ recordedMetricsContain),
/* harmony export */   resetRecordedMetrics: () => (/* binding */ resetRecordedMetrics)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/host/host.js */ "./core/host/host.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @returns True, iff a metric event with the provided name and code was recorded. False otherwise.
 */
function recordedMetricsContain(actionName, actionCode) {
    return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedEnumeratedHistograms.some(event => event.actionName === actionName && event.actionCode === actionCode);
}
function resetRecordedMetrics() {
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedEnumeratedHistograms = [];
}
//# sourceMappingURL=UserMetricsHelpers.js.map

/***/ })

}]);