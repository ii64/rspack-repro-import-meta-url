"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_issues_AttributionReportingIssueDetailsView_ts"],{

/***/ "./src/panels/issues/AttributionReportingIssueDetailsView.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/issues/AttributionReportingIssueDetailsView.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributionReportingIssueDetailsView: () => (/* binding */ AttributionReportingIssueDetailsView)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./src/panels/issues/AffectedResourcesView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AttributionReportingIssueDetailsView_instances, _AttributionReportingIssueDetailsView_appendDetails, _AttributionReportingIssueDetailsView_appendDetail, _AttributionReportingIssueDetailsView_appendElementOrEmptyCell, _AttributionReportingIssueDetailsView_appendRequestOrEmptyCell;




const UIStrings = {
    /**
     * @description Label for number of rows in the issue details table.
     */
    nViolations: '{n, plural, =1 {# violation} other {# violations}}',
    /**
     * @description Noun, label for the column showing the associated HTML element in the issue details table.
     */
    element: 'Element',
    /**
     * @description Noun, label for the column showing the invalid header value in the issue details table.
     */
    invalidHeaderValue: 'Invalid Header Value',
    /**
     * @description Noun, label for the column showing the associated network request in the issue details table.
     */
    request: 'Request',
    /**
     * @description Label for the column showing the invalid URL used in an HTML anchor element ("a link").
     * A origin is (roughly said) the front part of a URL.
     */
    untrustworthyOrigin: 'Untrustworthy origin',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/issues/AttributionReportingIssueDetailsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class AttributionReportingIssueDetailsView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__.AffectedResourcesView {
    constructor() {
        super(...arguments);
        _AttributionReportingIssueDetailsView_instances.add(this);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nViolations, { n: count });
    }
    update() {
        this.clear();
        const issues = this.issue.getAttributionReportingIssues();
        if (issues.size > 0) {
            __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendDetails).call(this, issues.values().next().value.code(), issues);
        }
        else {
            this.updateAffectedResourceCount(0);
        }
    }
}
_AttributionReportingIssueDetailsView_instances = new WeakSet(), _AttributionReportingIssueDetailsView_appendDetails = function _AttributionReportingIssueDetailsView_appendDetails(issueCode, issues) {
    const header = document.createElement('tr');
    switch (issueCode) {
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InvalidRegisterSourceHeader:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InvalidRegisterTriggerHeader:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InvalidRegisterOsSourceHeader:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InvalidRegisterOsTriggerHeader:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.OsSourceIgnored:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.OsTriggerIgnored:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.SourceIgnored:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.TriggerIgnored:
            this.appendColumnTitle(header, i18nString(UIStrings.request));
            this.appendColumnTitle(header, i18nString(UIStrings.invalidHeaderValue));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InsecureContext:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.UntrustworthyReportingOrigin:
            this.appendColumnTitle(header, i18nString(UIStrings.element));
            this.appendColumnTitle(header, i18nString(UIStrings.request));
            this.appendColumnTitle(header, i18nString(UIStrings.untrustworthyOrigin));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.PermissionPolicyDisabled:
            this.appendColumnTitle(header, i18nString(UIStrings.element));
            this.appendColumnTitle(header, i18nString(UIStrings.request));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.SourceAndTriggerHeaders:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.WebAndOsHeaders:
            this.appendColumnTitle(header, i18nString(UIStrings.request));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.NavigationRegistrationWithoutTransientUserActivation:
            this.appendColumnTitle(header, i18nString(UIStrings.element));
            break;
    }
    this.affectedResources.appendChild(header);
    let count = 0;
    for (const issue of issues) {
        count++;
        void __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendDetail).call(this, issueCode, issue);
    }
    this.updateAffectedResourceCount(count);
}, _AttributionReportingIssueDetailsView_appendDetail = async function _AttributionReportingIssueDetailsView_appendDetail(issueCode, issue) {
    const element = document.createElement('tr');
    element.classList.add('affected-resource-directive');
    const details = issue.issueDetails;
    switch (issueCode) {
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InvalidRegisterSourceHeader:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InvalidRegisterTriggerHeader:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InvalidRegisterOsSourceHeader:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InvalidRegisterOsTriggerHeader:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.OsSourceIgnored:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.OsTriggerIgnored:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.SourceIgnored:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.TriggerIgnored:
            __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendRequestOrEmptyCell).call(this, element, details.request);
            this.appendIssueDetailCell(element, details.invalidParameter || '');
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InsecureContext:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.UntrustworthyReportingOrigin:
            await __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendElementOrEmptyCell).call(this, element, issue);
            __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendRequestOrEmptyCell).call(this, element, details.request);
            this.appendIssueDetailCell(element, details.invalidParameter || '');
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.PermissionPolicyDisabled:
            await __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendElementOrEmptyCell).call(this, element, issue);
            __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendRequestOrEmptyCell).call(this, element, details.request);
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.SourceAndTriggerHeaders:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.WebAndOsHeaders:
            __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendRequestOrEmptyCell).call(this, element, details.request);
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.NavigationRegistrationWithoutTransientUserActivation:
            await __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendElementOrEmptyCell).call(this, element, issue);
            break;
    }
    this.affectedResources.appendChild(element);
}, _AttributionReportingIssueDetailsView_appendElementOrEmptyCell = async function _AttributionReportingIssueDetailsView_appendElementOrEmptyCell(parent, issue) {
    const details = issue.issueDetails;
    if (details.violatingNodeId !== undefined) {
        const target = issue.model()?.target() || null;
        parent.appendChild(await this.createElementCell({ backendNodeId: details.violatingNodeId, target, nodeName: 'Attribution source element' }, issue.getCategory()));
    }
    else {
        this.appendIssueDetailCell(parent, '');
    }
}, _AttributionReportingIssueDetailsView_appendRequestOrEmptyCell = function _AttributionReportingIssueDetailsView_appendRequestOrEmptyCell(parent, request) {
    if (!request) {
        this.appendIssueDetailCell(parent, '');
        return;
    }
    const opts = {
        additionalOnClickAction() {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.issuesPanelResourceOpened(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueCategory.AttributionReporting, _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__.AffectedItem.Request);
        },
    };
    parent.appendChild(this.createRequestCell(request, opts));
};


/***/ })

}]);