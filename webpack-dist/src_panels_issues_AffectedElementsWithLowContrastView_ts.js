"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_issues_AffectedElementsWithLowContrastView_ts"],{

/***/ "./src/panels/issues/AffectedElementsView.ts":
/*!***************************************************!*\
  !*** ./src/panels/issues/AffectedElementsView.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedElementsView: () => (/* binding */ AffectedElementsView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./src/panels/issues/AffectedResourcesView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AffectedElementsView_instances, _AffectedElementsView_appendAffectedElements, _AffectedElementsView_appendAffectedElement;


const UIStrings = {
    /**
     *@description Noun for singular or plural number of affected element resource indication in issue view.
     */
    nElements: '{n, plural, =1 {# element} other {# elements}}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedElementsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class AffectedElementsView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_1__.AffectedResourcesView {
    constructor() {
        super(...arguments);
        _AffectedElementsView_instances.add(this);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nElements, { n: count });
    }
    update() {
        this.clear();
        void __classPrivateFieldGet(this, _AffectedElementsView_instances, "m", _AffectedElementsView_appendAffectedElements).call(this, this.issue.elements());
    }
}
_AffectedElementsView_instances = new WeakSet(), _AffectedElementsView_appendAffectedElements = async function _AffectedElementsView_appendAffectedElements(affectedElements) {
    let count = 0;
    for (const element of affectedElements) {
        await __classPrivateFieldGet(this, _AffectedElementsView_instances, "m", _AffectedElementsView_appendAffectedElement).call(this, element);
        count++;
    }
    this.updateAffectedResourceCount(count);
}, _AffectedElementsView_appendAffectedElement = async function _AffectedElementsView_appendAffectedElement(element) {
    const cellElement = await this.createElementCell(element, this.issue.getCategory());
    const rowElement = document.createElement('tr');
    rowElement.appendChild(cellElement);
    this.affectedResources.appendChild(rowElement);
};


/***/ }),

/***/ "./src/panels/issues/AffectedElementsWithLowContrastView.ts":
/*!******************************************************************!*\
  !*** ./src/panels/issues/AffectedElementsWithLowContrastView.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedElementsWithLowContrastView: () => (/* binding */ AffectedElementsWithLowContrastView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _AffectedElementsView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AffectedElementsView.js */ "./src/panels/issues/AffectedElementsView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _AffectedElementsWithLowContrastView_instances, _AffectedElementsWithLowContrastView_runningUpdatePromise, _AffectedElementsWithLowContrastView_doUpdate, _AffectedElementsWithLowContrastView_appendLowContrastElement, _AffectedElementsWithLowContrastView_appendLowContrastElements;



class AffectedElementsWithLowContrastView extends _AffectedElementsView_js__WEBPACK_IMPORTED_MODULE_2__.AffectedElementsView {
    constructor() {
        super(...arguments);
        _AffectedElementsWithLowContrastView_instances.add(this);
        _AffectedElementsWithLowContrastView_runningUpdatePromise.set(this, Promise.resolve());
    }
    update() {
        // Ensure that doUpdate is invoked atomically by serializing the update calls
        // because it's not re-entrace safe.
        __classPrivateFieldSet(this, _AffectedElementsWithLowContrastView_runningUpdatePromise, __classPrivateFieldGet(this, _AffectedElementsWithLowContrastView_runningUpdatePromise, "f").then(__classPrivateFieldGet(this, _AffectedElementsWithLowContrastView_instances, "m", _AffectedElementsWithLowContrastView_doUpdate).bind(this)), "f");
    }
}
_AffectedElementsWithLowContrastView_runningUpdatePromise = new WeakMap(), _AffectedElementsWithLowContrastView_instances = new WeakSet(), _AffectedElementsWithLowContrastView_doUpdate = async function _AffectedElementsWithLowContrastView_doUpdate() {
    this.clear();
    await __classPrivateFieldGet(this, _AffectedElementsWithLowContrastView_instances, "m", _AffectedElementsWithLowContrastView_appendLowContrastElements).call(this, this.issue.getLowContrastIssues());
}, _AffectedElementsWithLowContrastView_appendLowContrastElement = async function _AffectedElementsWithLowContrastView_appendLowContrastElement(issue) {
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
}, _AffectedElementsWithLowContrastView_appendLowContrastElements = async function _AffectedElementsWithLowContrastView_appendLowContrastElements(issues) {
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
        await __classPrivateFieldGet(this, _AffectedElementsWithLowContrastView_instances, "m", _AffectedElementsWithLowContrastView_appendLowContrastElement).call(this, lowContrastIssue);
    }
    this.updateAffectedResourceCount(count);
};
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


/***/ })

}]);