"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_AffectedDocumentsInQuirksModeView_js"],{

/***/ "./panels/issues/AffectedDocumentsInQuirksModeView.js":
/*!************************************************************!*\
  !*** ./panels/issues/AffectedDocumentsInQuirksModeView.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedDocumentsInQuirksModeView: () => (/* binding */ AffectedDocumentsInQuirksModeView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _AffectedElementsView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AffectedElementsView.js */ "./panels/issues/AffectedElementsView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const UIStrings = {
    /**
     *@description Noun for singular or plural number of affected document nodes indication in issue view.
     */
    nDocuments: '{n, plural, =1 { document} other { documents}}',
    /**
     *@description Column title for the Document in the DOM tree column in the quirks mode issue view
     */
    documentInTheDOMTree: 'Document in the DOM tree',
    /**
     *@description Column title for the url column in the quirks mode issue view
     */
    url: 'URL',
    /**
     *@description Column title for the Mode column in the quirks mode issue view
     */
    mode: 'Mode',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedDocumentsInQuirksModeView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class AffectedDocumentsInQuirksModeView extends _AffectedElementsView_js__WEBPACK_IMPORTED_MODULE_2__.AffectedElementsView {
    #runningUpdatePromise = Promise.resolve();
    update() {
        // Ensure that doUpdate is invoked atomically by serializing the update calls
        // because it's not re-entrace safe.
        this.#runningUpdatePromise = this.#runningUpdatePromise.then(this.#doUpdate.bind(this));
    }
    getResourceName(count) {
        return i18nString(UIStrings.nDocuments, { n: count });
    }
    async #doUpdate() {
        this.clear();
        await this.#appendQuirksModeDocuments(this.issue.getQuirksModeIssues());
    }
    async #appendQuirksModeDocument(issue) {
        const row = document.createElement('tr');
        row.classList.add('affected-resource-quirks-mode');
        const details = issue.details();
        const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager.instance().getFrame(details.frameId)?.resourceTreeModel().target() || null;
        row.appendChild(await this.createElementCell({ nodeName: 'document', backendNodeId: details.documentNodeId, target }, issue.getCategory()));
        this.appendIssueDetailCell(row, details.isLimitedQuirksMode ? 'Limited Quirks Mode' : 'Quirks Mode');
        this.appendIssueDetailCell(row, details.url);
        this.affectedResources.appendChild(row);
    }
    async #appendQuirksModeDocuments(issues) {
        const header = document.createElement('tr');
        this.appendColumnTitle(header, i18nString(UIStrings.documentInTheDOMTree));
        this.appendColumnTitle(header, i18nString(UIStrings.mode));
        this.appendColumnTitle(header, i18nString(UIStrings.url));
        this.affectedResources.appendChild(header);
        let count = 0;
        for (const issue of issues) {
            count++;
            await this.#appendQuirksModeDocument(issue);
        }
        this.updateAffectedResourceCount(count);
    }
}
//# sourceMappingURL=AffectedDocumentsInQuirksModeView.js.map

/***/ }),

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