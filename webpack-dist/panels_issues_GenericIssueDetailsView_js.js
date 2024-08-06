"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_GenericIssueDetailsView_js"],{

/***/ "./panels/issues/GenericIssueDetailsView.js":
/*!**************************************************!*\
  !*** ./panels/issues/GenericIssueDetailsView.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericIssueDetailsView: () => (/* binding */ GenericIssueDetailsView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const UIStrings = {
    /**
     *@description Label for number of affected resources indication in issue view
     */
    nResources: '{n, plural, =1 {# resource} other {# resources}}',
    /**
     *@description Title for the 'Frame' column.
     */
    frameId: 'Frame',
    /**
     *@description Label for the violating node link in the issue view.
     */
    violatingNode: 'Violating node',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/GenericIssueDetailsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class GenericIssueDetailsView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_1__.AffectedResourcesView {
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nResources, { n: count });
    }
    #appendDetails(genericIssues) {
        const header = document.createElement('tr');
        const sampleIssueDetails = genericIssues.values().next().value.details();
        if (sampleIssueDetails.frameId) {
            this.appendColumnTitle(header, i18nString(UIStrings.frameId));
        }
        // Only some `GenericIssueDetails` have information for the 'affected
        // resources' view. We'll count them and only call `#appendDetail` for
        // those. `updateAffectedResourceCount` will hide the section if the
        // count is zero.
        this.affectedResources.appendChild(header);
        let count = 0;
        for (const genericIssue of genericIssues) {
            const hasAffectedResource = genericIssue.details().frameId || genericIssue.details().violatingNodeId;
            if (hasAffectedResource) {
                count++;
                void this.#appendDetail(genericIssue);
            }
        }
        this.updateAffectedResourceCount(count);
    }
    async #appendDetail(genericIssue) {
        const element = document.createElement('tr');
        element.classList.add('affected-resource-directive');
        const details = genericIssue.details();
        if (details.frameId) {
            element.appendChild(this.createFrameCell(details.frameId, genericIssue.getCategory()));
        }
        if (details.violatingNodeId) {
            const target = genericIssue.model()?.target() || null;
            element.appendChild(await this.createElementCell({ backendNodeId: details.violatingNodeId, nodeName: this.violatingNodeIdName(details.errorType), target }, genericIssue.getCategory()));
        }
        this.affectedResources.appendChild(element);
    }
    violatingNodeIdName(errorType) {
        switch (errorType) {
            case "FormLabelForNameError" /* Protocol.Audits.GenericIssueErrorType.FormLabelForNameError */:
                // Since the error is referencing the <label> tag, this string doesn't
                // need to be translated.
                return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Label');
            default:
                return i18nString(UIStrings.violatingNode);
        }
    }
    update() {
        this.clear();
        const issues = this.issue.getGenericIssues();
        if (issues.size > 0) {
            this.#appendDetails(issues);
        }
        else {
            this.updateAffectedResourceCount(0);
        }
    }
}
//# sourceMappingURL=GenericIssueDetailsView.js.map

/***/ })

}]);