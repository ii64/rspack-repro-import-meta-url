"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_AffectedElementsView_js"],{

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

/***/ })

}]);