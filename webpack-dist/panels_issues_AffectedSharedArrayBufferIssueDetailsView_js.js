"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_AffectedSharedArrayBufferIssueDetailsView_js"],{

/***/ "./panels/issues/AffectedSharedArrayBufferIssueDetailsView.js":
/*!********************************************************************!*\
  !*** ./panels/issues/AffectedSharedArrayBufferIssueDetailsView.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedSharedArrayBufferIssueDetailsView: () => (/* binding */ AffectedSharedArrayBufferIssueDetailsView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const UIStrings = {
    /**
     *@description Label for number of affected resources indication in issue view
     */
    nViolations: '{n, plural, =1 {# violation} other {# violations}}',
    /**
     *@description Value for the status column in SharedArrayBuffer issues
     */
    warning: 'warning',
    /**
     *@description The kind of resolution for a mixed content issue
     */
    blocked: 'blocked',
    /**
     *@description Value for the 'Trigger' column in the SAB affected resources list
     */
    instantiation: 'Instantiation',
    /**
     *@description Tooltip for the 'Trigger' column in the SAB affected resources list
     */
    aSharedarraybufferWas: 'A `SharedArrayBuffer` was instantiated in a context that is not cross-origin isolated',
    /**
     *@description Value for the 'Trigger' column in the SAB affected resources list
     */
    transfer: 'Transfer',
    /**
     *@description Tooltip for the 'Trigger' column in the SAB affected resources list
     */
    sharedarraybufferWasTransferedTo: '`SharedArrayBuffer` was transfered to a context that is not cross-origin isolated',
    /**
     *@description Header for the source location column
     */
    sourceLocation: 'Source Location',
    /**
     *@description Title for the 'Trigger' column in the SAB affected resources list
     */
    trigger: 'Trigger',
    /**
     *@description Title for the status column in the SAB affected resources list
     */
    status: 'Status',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedSharedArrayBufferIssueDetailsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class AffectedSharedArrayBufferIssueDetailsView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_2__.AffectedResourcesView {
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nViolations, { n: count });
    }
    #appendStatus(element, isWarning) {
        const status = document.createElement('td');
        if (isWarning) {
            status.classList.add('affected-resource-report-only-status');
            status.textContent = i18nString(UIStrings.warning);
        }
        else {
            status.classList.add('affected-resource-blocked-status');
            status.textContent = i18nString(UIStrings.blocked);
        }
        element.appendChild(status);
    }
    #appendType(element, type) {
        const status = document.createElement('td');
        switch (type) {
            case "CreationIssue" /* Protocol.Audits.SharedArrayBufferIssueType.CreationIssue */:
                status.textContent = i18nString(UIStrings.instantiation);
                status.title = i18nString(UIStrings.aSharedarraybufferWas);
                break;
            case "TransferIssue" /* Protocol.Audits.SharedArrayBufferIssueType.TransferIssue */:
                status.textContent = i18nString(UIStrings.transfer);
                status.title = i18nString(UIStrings.sharedarraybufferWasTransferedTo);
                break;
        }
        element.appendChild(status);
    }
    #appendDetails(sabIssues) {
        const header = document.createElement('tr');
        this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
        this.appendColumnTitle(header, i18nString(UIStrings.trigger));
        this.appendColumnTitle(header, i18nString(UIStrings.status));
        this.affectedResources.appendChild(header);
        let count = 0;
        for (const sabIssue of sabIssues) {
            count++;
            this.#appendDetail(sabIssue);
        }
        this.updateAffectedResourceCount(count);
    }
    #appendDetail(sabIssue) {
        const element = document.createElement('tr');
        element.classList.add('affected-resource-directive');
        const sabIssueDetails = sabIssue.details();
        const location = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.toZeroBasedLocation(sabIssueDetails.sourceCodeLocation);
        this.appendSourceLocation(element, location, sabIssue.model()?.getTargetIfNotDisposed());
        this.#appendType(element, sabIssueDetails.type);
        this.#appendStatus(element, sabIssueDetails.isWarning);
        this.affectedResources.appendChild(element);
    }
    update() {
        this.clear();
        this.#appendDetails(this.issue.getSharedArrayBufferIssues());
    }
}
//# sourceMappingURL=AffectedSharedArrayBufferIssueDetailsView.js.map

/***/ })

}]);