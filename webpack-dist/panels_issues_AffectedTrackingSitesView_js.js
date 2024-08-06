"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_AffectedTrackingSitesView_js"],{

/***/ "./panels/issues/AffectedTrackingSitesView.js":
/*!****************************************************!*\
  !*** ./panels/issues/AffectedTrackingSitesView.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedTrackingSitesView: () => (/* binding */ AffectedTrackingSitesView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const UIStrings = {
    /**
     *@description Label for the the number of affected `Potentially-tracking Sites` associated with a
     *DevTools issue. In this context, `tracking` refers to bounce tracking and `Site` is equivalent
     *to eTLD+1.
     *See https://github.com/privacycg/nav-tracking-mitigations/blob/main/bounce-tracking-explainer.md
     *and https://developer.mozilla.org/en-US/docs/Glossary/eTLD.
     */
    nTrackingSites: '{n, plural, =1 {1 potentially tracking website} other {# potentially tracking websites}}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedTrackingSitesView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class AffectedTrackingSitesView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_1__.AffectedResourcesView {
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nTrackingSites, { n: count });
    }
    update() {
        this.clear();
        const trackingSites = this.issue.getBounceTrackingSites();
        let count = 0;
        for (const site of trackingSites) {
            const row = document.createElement('tr');
            row.classList.add('affected-resource-directive');
            this.appendIssueDetailCell(row, site);
            this.affectedResources.appendChild(row);
            count++;
        }
        this.updateAffectedResourceCount(count);
    }
}
//# sourceMappingURL=AffectedTrackingSitesView.js.map

/***/ })

}]);