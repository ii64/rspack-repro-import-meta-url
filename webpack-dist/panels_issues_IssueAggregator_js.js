"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_IssueAggregator_js"],{

/***/ "./panels/issues/IssueAggregator.js":
/*!******************************************!*\
  !*** ./panels/issues/IssueAggregator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AggregatedIssue: () => (/* binding */ AggregatedIssue),
/* harmony export */   IssueAggregator: () => (/* binding */ IssueAggregator)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * An `AggregatedIssue` representes a number of `IssuesManager.Issue.Issue` objects that are displayed together.
 * Currently only grouping by issue code, is supported. The class provides helpers to support displaying
 * of all resources that are affected by the aggregated issues.
 */
class AggregatedIssue extends _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.Issue {
    #affectedCookies = new Map();
    #affectedRawCookieLines = new Map();
    #affectedRequests = new Map();
    #affectedLocations = new Map();
    #heavyAdIssues = new Set();
    #blockedByResponseDetails = new Map();
    #bounceTrackingSites = new Set();
    #corsIssues = new Set();
    #cspIssues = new Set();
    #deprecationIssues = new Set();
    #issueKind = "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */;
    #lowContrastIssues = new Set();
    #cookieDeprecationMetadataIssues = new Set();
    #mixedContentIssues = new Set();
    #sharedArrayBufferIssues = new Set();
    #quirksModeIssues = new Set();
    #attributionReportingIssues = new Set();
    #genericIssues = new Set();
    #representative;
    #aggregatedIssuesCount = 0;
    #key;
    constructor(code, aggregationKey) {
        super(code);
        this.#key = aggregationKey;
    }
    primaryKey() {
        throw new Error('This should never be called');
    }
    aggregationKey() {
        return this.#key;
    }
    getBlockedByResponseDetails() {
        return this.#blockedByResponseDetails.values();
    }
    cookies() {
        return Array.from(this.#affectedCookies.values()).map(x => x.cookie);
    }
    getRawCookieLines() {
        return this.#affectedRawCookieLines.values();
    }
    sources() {
        return this.#affectedLocations.values();
    }
    getBounceTrackingSites() {
        return this.#bounceTrackingSites.values();
    }
    cookiesWithRequestIndicator() {
        return this.#affectedCookies.values();
    }
    getHeavyAdIssues() {
        return this.#heavyAdIssues;
    }
    getCookieDeprecationMetadataIssues() {
        return this.#cookieDeprecationMetadataIssues;
    }
    getMixedContentIssues() {
        return this.#mixedContentIssues;
    }
    getCorsIssues() {
        return this.#corsIssues;
    }
    getCspIssues() {
        return this.#cspIssues;
    }
    getDeprecationIssues() {
        return this.#deprecationIssues;
    }
    getLowContrastIssues() {
        return this.#lowContrastIssues;
    }
    requests() {
        return this.#affectedRequests.values();
    }
    getSharedArrayBufferIssues() {
        return this.#sharedArrayBufferIssues;
    }
    getQuirksModeIssues() {
        return this.#quirksModeIssues;
    }
    getAttributionReportingIssues() {
        return this.#attributionReportingIssues;
    }
    getGenericIssues() {
        return this.#genericIssues;
    }
    getDescription() {
        if (this.#representative) {
            return this.#representative.getDescription();
        }
        return null;
    }
    getCategory() {
        if (this.#representative) {
            return this.#representative.getCategory();
        }
        return "Other" /* IssuesManager.Issue.IssueCategory.Other */;
    }
    getAggregatedIssuesCount() {
        return this.#aggregatedIssuesCount;
    }
    /**
     * Produces a primary key for a cookie. Use this instead of `JSON.stringify` in
     * case new fields are added to `AffectedCookie`.
     */
    #keyForCookie(cookie) {
        const { domain, path, name } = cookie;
        return `${domain};${path};${name}`;
    }
    addInstance(issue) {
        this.#aggregatedIssuesCount++;
        if (!this.#representative) {
            this.#representative = issue;
        }
        this.#issueKind = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.unionIssueKind(this.#issueKind, issue.getKind());
        let hasRequest = false;
        for (const request of issue.requests()) {
            hasRequest = true;
            if (!this.#affectedRequests.has(request.requestId)) {
                this.#affectedRequests.set(request.requestId, request);
            }
        }
        for (const cookie of issue.cookies()) {
            const key = this.#keyForCookie(cookie);
            if (!this.#affectedCookies.has(key)) {
                this.#affectedCookies.set(key, { cookie, hasRequest });
            }
        }
        for (const rawCookieLine of issue.rawCookieLines()) {
            if (!this.#affectedRawCookieLines.has(rawCookieLine)) {
                this.#affectedRawCookieLines.set(rawCookieLine, { rawCookieLine, hasRequest });
            }
        }
        for (const site of issue.trackingSites()) {
            if (!this.#bounceTrackingSites.has(site)) {
                this.#bounceTrackingSites.add(site);
            }
        }
        for (const location of issue.sources()) {
            const key = JSON.stringify(location);
            if (!this.#affectedLocations.has(key)) {
                this.#affectedLocations.set(key, location);
            }
        }
        if (issue instanceof _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.CookieDeprecationMetadataIssue.CookieDeprecationMetadataIssue) {
            this.#cookieDeprecationMetadataIssues.add(issue);
        }
        if (issue instanceof _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.MixedContentIssue.MixedContentIssue) {
            this.#mixedContentIssues.add(issue);
        }
        if (issue instanceof _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.HeavyAdIssue.HeavyAdIssue) {
            this.#heavyAdIssues.add(issue);
        }
        for (const details of issue.getBlockedByResponseDetails()) {
            const key = JSON.stringify(details, ['parentFrame', 'blockedFrame', 'requestId', 'frameId', 'reason', 'request']);
            this.#blockedByResponseDetails.set(key, details);
        }
        if (issue instanceof _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.ContentSecurityPolicyIssue.ContentSecurityPolicyIssue) {
            this.#cspIssues.add(issue);
        }
        if (issue instanceof _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.DeprecationIssue.DeprecationIssue) {
            this.#deprecationIssues.add(issue);
        }
        if (issue instanceof _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.SharedArrayBufferIssue.SharedArrayBufferIssue) {
            this.#sharedArrayBufferIssues.add(issue);
        }
        if (issue instanceof _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.LowTextContrastIssue.LowTextContrastIssue) {
            this.#lowContrastIssues.add(issue);
        }
        if (issue instanceof _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.CorsIssue.CorsIssue) {
            this.#corsIssues.add(issue);
        }
        if (issue instanceof _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.QuirksModeIssue.QuirksModeIssue) {
            this.#quirksModeIssues.add(issue);
        }
        if (issue instanceof _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.AttributionReportingIssue.AttributionReportingIssue) {
            this.#attributionReportingIssues.add(issue);
        }
        if (issue instanceof _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.GenericIssue.GenericIssue) {
            this.#genericIssues.add(issue);
        }
    }
    getKind() {
        return this.#issueKind;
    }
    isHidden() {
        return this.#representative?.isHidden() || false;
    }
    setHidden(_value) {
        throw new Error('Should not call setHidden on aggregatedIssue');
    }
}
class IssueAggregator extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    issuesManager;
    #aggregatedIssuesByKey = new Map();
    #hiddenAggregatedIssuesByKey = new Map();
    constructor(issuesManager) {
        super();
        this.issuesManager = issuesManager;
        this.issuesManager.addEventListener("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */, this.#onIssueAdded, this);
        this.issuesManager.addEventListener("FullUpdateRequired" /* IssuesManager.IssuesManager.Events.FullUpdateRequired */, this.#onFullUpdateRequired, this);
        for (const issue of this.issuesManager.issues()) {
            this.#aggregateIssue(issue);
        }
    }
    #onIssueAdded(event) {
        this.#aggregateIssue(event.data.issue);
    }
    #onFullUpdateRequired() {
        this.#aggregatedIssuesByKey.clear();
        this.#hiddenAggregatedIssuesByKey.clear();
        for (const issue of this.issuesManager.issues()) {
            this.#aggregateIssue(issue);
        }
        this.dispatchEventToListeners("FullUpdateRequired" /* Events.FullUpdateRequired */);
    }
    #aggregateIssue(issue) {
        const map = issue.isHidden() ? this.#hiddenAggregatedIssuesByKey : this.#aggregatedIssuesByKey;
        const aggregatedIssue = this.#aggregateIssueByStatus(map, issue);
        this.dispatchEventToListeners("AggregatedIssueUpdated" /* Events.AggregatedIssueUpdated */, aggregatedIssue);
        return aggregatedIssue;
    }
    #aggregateIssueByStatus(aggregatedIssuesMap, issue) {
        const key = issue.code();
        let aggregatedIssue = aggregatedIssuesMap.get(key);
        if (!aggregatedIssue) {
            aggregatedIssue = new AggregatedIssue(issue.code(), key);
            aggregatedIssuesMap.set(key, aggregatedIssue);
        }
        aggregatedIssue.addInstance(issue);
        return aggregatedIssue;
    }
    aggregatedIssues() {
        return [...this.#aggregatedIssuesByKey.values(), ...this.#hiddenAggregatedIssuesByKey.values()];
    }
    hiddenAggregatedIssues() {
        return this.#hiddenAggregatedIssuesByKey.values();
    }
    aggregatedIssueCodes() {
        return new Set([...this.#aggregatedIssuesByKey.keys(), ...this.#hiddenAggregatedIssuesByKey.keys()]);
    }
    aggregatedIssueCategories() {
        const result = new Set();
        for (const issue of this.#aggregatedIssuesByKey.values()) {
            result.add(issue.getCategory());
        }
        return result;
    }
    aggregatedIssueKinds() {
        const result = new Set();
        for (const issue of this.#aggregatedIssuesByKey.values()) {
            result.add(issue.getKind());
        }
        return result;
    }
    numberOfAggregatedIssues() {
        return this.#aggregatedIssuesByKey.size;
    }
    numberOfHiddenAggregatedIssues() {
        return this.#hiddenAggregatedIssuesByKey.size;
    }
    keyForIssue(issue) {
        return issue.code();
    }
}
//# sourceMappingURL=IssueAggregator.js.map

/***/ })

}]);