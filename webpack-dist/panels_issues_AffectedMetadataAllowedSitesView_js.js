"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_AffectedMetadataAllowedSitesView_js"],{

/***/ "./panels/issues/AffectedMetadataAllowedSitesView.js":
/*!***********************************************************!*\
  !*** ./panels/issues/AffectedMetadataAllowedSitesView.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedMetadataAllowedSitesView: () => (/* binding */ AffectedMetadataAllowedSitesView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const UIStrings = {
    /**
     *@description Label for the the number of affected `Allowed Sites` associated with a
     *DevTools issue. In this context, `Allowed` refers to permission to access cookies
     *via the third-party cookie deprecation global metadata, and `Site` is equivalent
     *to eTLD+1.
     *See https://developer.mozilla.org/en-US/docs/Glossary/eTLD.
     */
    nAllowedSites: '{n, plural, =1 {1 website allowed to access cookies} other {# websites allowed to access cookies}}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedMetadataAllowedSitesView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class AffectedMetadataAllowedSitesView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_2__.AffectedResourcesView {
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nAllowedSites, { n: count });
    }
    update() {
        this.clear();
        const issues = this.issue.getCookieDeprecationMetadataIssues();
        let count = 0;
        for (const issueData of issues) {
            const row = document.createElement('tr');
            row.classList.add('affected-resource-directive');
            const textContentElement = document.createElement('div');
            const textElement = document.createElement('span');
            textElement.textContent = issueData.details().allowedSites.join(', ');
            textContentElement.appendChild(textElement);
            if (!issueData.details().isOptOutTopLevel && issueData.details().optOutPercentage > 0) {
                const optOutTextElement = document.createElement('span');
                optOutTextElement.textContent = ' (opt-out: ' + issueData.details().optOutPercentage + '% - ';
                textContentElement.appendChild(optOutTextElement);
                const linkElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.XLink.XLink.create('https://developers.google.com/privacy-sandbox/blog/grace-period-opt-out', 'learn more');
                textContentElement.appendChild(linkElement);
                const endTextElement = document.createElement('span');
                endTextElement.textContent = ')';
                textContentElement.appendChild(endTextElement);
            }
            this.appendIssueDetailCell(row, textContentElement);
            this.affectedResources.appendChild(row);
            count++;
        }
        this.updateAffectedResourceCount(count);
    }
}
//# sourceMappingURL=AffectedMetadataAllowedSitesView.js.map

/***/ })

}]);