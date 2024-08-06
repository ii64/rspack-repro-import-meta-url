"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_AffectedElementsWithLowContrastView_js"],{

/***/ "./panels/issues/AffectedElementsView.js":
/*!***********************************************!*\
  !*** ./panels/issues/AffectedElementsView.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedElementsView: () => (/* binding */ AffectedElementsView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const UIStrings = {
    /**
     *@description Noun for singular or plural number of affected element resource indication in issue view.
     */
    nElements: '{n, plural, =1 {# element} other {# elements}}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedElementsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class AffectedElementsView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_1__.AffectedResourcesView {
    async #appendAffectedElements(affectedElements) {
        let count = 0;
        for (const element of affectedElements) {
            await this.#appendAffectedElement(element);
            count++;
        }
        this.updateAffectedResourceCount(count);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nElements, { n: count });
    }
    async #appendAffectedElement(element) {
        const cellElement = await this.createElementCell(element, this.issue.getCategory());
        const rowElement = document.createElement('tr');
        rowElement.appendChild(cellElement);
        this.affectedResources.appendChild(rowElement);
    }
    update() {
        this.clear();
        void this.#appendAffectedElements(this.issue.elements());
    }
}
//# sourceMappingURL=AffectedElementsView.js.map

/***/ }),

/***/ "./panels/issues/AffectedElementsWithLowContrastView.js":
/*!**************************************************************!*\
  !*** ./panels/issues/AffectedElementsWithLowContrastView.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedElementsWithLowContrastView: () => (/* binding */ AffectedElementsWithLowContrastView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _AffectedElementsView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AffectedElementsView.js */ "./panels/issues/AffectedElementsView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class AffectedElementsWithLowContrastView extends _AffectedElementsView_js__WEBPACK_IMPORTED_MODULE_2__.AffectedElementsView {
    #runningUpdatePromise = Promise.resolve();
    update() {
        // Ensure that doUpdate is invoked atomically by serializing the update calls
        // because it's not re-entrace safe.
        this.#runningUpdatePromise = this.#runningUpdatePromise.then(this.#doUpdate.bind(this));
    }
    async #doUpdate() {
        this.clear();
        await this.#appendLowContrastElements(this.issue.getLowContrastIssues());
    }
    async #appendLowContrastElement(issue) {
        const row = document.createElement('tr');
        row.classList.add('affected-resource-low-contrast');
        const details = issue.details();
        const target = issue.model()?.target() || null;
        row.appendChild(await this.createElementCell({ nodeName: details.violatingNodeSelector, backendNodeId: details.violatingNodeId, target }, issue.getCategory()));
        this.appendIssueDetailCell(row, String(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.floor(details.contrastRatio, 2)));
        this.appendIssueDetailCell(row, String(details.thresholdAA));
        this.appendIssueDetailCell(row, String(details.thresholdAAA));
        this.appendIssueDetailCell(row, details.fontSize);
        this.appendIssueDetailCell(row, details.fontWeight);
        this.affectedResources.appendChild(row);
    }
    async #appendLowContrastElements(issues) {
        const header = document.createElement('tr');
        this.appendColumnTitle(header, i18nString(UIStrings.element));
        this.appendColumnTitle(header, i18nString(UIStrings.contrastRatio));
        this.appendColumnTitle(header, i18nString(UIStrings.minimumAA));
        this.appendColumnTitle(header, i18nString(UIStrings.minimumAAA));
        this.appendColumnTitle(header, i18nString(UIStrings.textSize));
        this.appendColumnTitle(header, i18nString(UIStrings.textWeight));
        this.affectedResources.appendChild(header);
        let count = 0;
        for (const lowContrastIssue of issues) {
            count++;
            await this.#appendLowContrastElement(lowContrastIssue);
        }
        this.updateAffectedResourceCount(count);
    }
}
const UIStrings = {
    /**
     *@description Column title for the element column in the low contrast issue view
     */
    element: 'Element',
    /**
     *@description Column title for the contrast ratio column in the low contrast issue view
     */
    contrastRatio: 'Contrast ratio',
    /**
     *@description Column title for the minimum AA contrast ratio column in the low contrast issue view
     */
    minimumAA: 'Minimum AA ratio',
    /**
     *@description Column title for the minimum AAA contrast ratio column in the low contrast issue view
     */
    minimumAAA: 'Minimum AAA ratio',
    /**
     *@description Column title for the text size column in the low contrast issue view
     */
    textSize: 'Text size',
    /**
     *@description Column title for the text weight column in the low contrast issue view
     */
    textWeight: 'Text weight',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedElementsWithLowContrastView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
//# sourceMappingURL=AffectedElementsWithLowContrastView.js.map

/***/ })

}]);