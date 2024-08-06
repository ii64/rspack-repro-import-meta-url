"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_AffectedBlockedByResponseView_js"],{

/***/ "./panels/issues/AffectedBlockedByResponseView.js":
/*!********************************************************!*\
  !*** ./panels/issues/AffectedBlockedByResponseView.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedBlockedByResponseView: () => (/* binding */ AffectedBlockedByResponseView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const UIStrings = {
    /**
     *@description Noun for singular or plural network requests. Label for the affected resources section in the issue view.
     */
    nRequests: '{n, plural, =1 {# request} other {# requests}}',
    /**
     *@description Noun for a singular network request. Label for a column in the affected resources table in the issue view.
     */
    requestC: 'Request',
    /**
     *@description Noun for a singular parent frame. Label for a column in the affected resources table in the issue view.
     */
    parentFrame: 'Parent Frame',
    /**
     *@description Noun for a singular resource that was blocked (an example for a blocked resource would be a frame). Label for a column in the affected resources table in the issue view.
     */
    blockedResource: 'Blocked Resource',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedBlockedByResponseView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class AffectedBlockedByResponseView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__.AffectedResourcesView {
    #appendDetails(details) {
        const header = document.createElement('tr');
        this.appendColumnTitle(header, i18nString(UIStrings.requestC));
        this.appendColumnTitle(header, i18nString(UIStrings.parentFrame));
        this.appendColumnTitle(header, i18nString(UIStrings.blockedResource));
        this.affectedResources.appendChild(header);
        let count = 0;
        for (const detail of details) {
            this.#appendDetail(detail);
            count++;
        }
        this.updateAffectedResourceCount(count);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nRequests, { n: count });
    }
    #appendDetail(details) {
        const element = document.createElement('tr');
        element.classList.add('affected-resource-row');
        const requestCell = this.createRequestCell(details.request, {
            additionalOnClickAction() {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_2__.userMetrics.issuesPanelResourceOpened("CrossOriginEmbedderPolicy" /* IssuesManager.Issue.IssueCategory.CrossOriginEmbedderPolicy */, "Request" /* AffectedItem.Request */);
            },
        });
        element.appendChild(requestCell);
        if (details.parentFrame) {
            const frameUrl = this.createFrameCell(details.parentFrame.frameId, this.issue.getCategory());
            element.appendChild(frameUrl);
        }
        else {
            element.appendChild(document.createElement('td'));
        }
        if (details.blockedFrame) {
            const frameUrl = this.createFrameCell(details.blockedFrame.frameId, this.issue.getCategory());
            element.appendChild(frameUrl);
        }
        else {
            element.appendChild(document.createElement('td'));
        }
        this.affectedResources.appendChild(element);
    }
    update() {
        this.clear();
        this.#appendDetails(this.issue.getBlockedByResponseDetails());
    }
}
//# sourceMappingURL=AffectedBlockedByResponseView.js.map

/***/ })

}]);