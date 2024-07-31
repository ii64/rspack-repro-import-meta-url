"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_issues_AffectedBlockedByResponseView_ts"],{

/***/ "./src/panels/issues/AffectedBlockedByResponseView.ts":
/*!************************************************************!*\
  !*** ./src/panels/issues/AffectedBlockedByResponseView.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedBlockedByResponseView: () => (/* binding */ AffectedBlockedByResponseView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./src/panels/issues/AffectedResourcesView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AffectedBlockedByResponseView_instances, _AffectedBlockedByResponseView_appendDetails, _AffectedBlockedByResponseView_appendDetail;




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
    constructor() {
        super(...arguments);
        _AffectedBlockedByResponseView_instances.add(this);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nRequests, { n: count });
    }
    update() {
        this.clear();
        __classPrivateFieldGet(this, _AffectedBlockedByResponseView_instances, "m", _AffectedBlockedByResponseView_appendDetails).call(this, this.issue.getBlockedByResponseDetails());
    }
}
_AffectedBlockedByResponseView_instances = new WeakSet(), _AffectedBlockedByResponseView_appendDetails = function _AffectedBlockedByResponseView_appendDetails(details) {
    const header = document.createElement('tr');
    this.appendColumnTitle(header, i18nString(UIStrings.requestC));
    this.appendColumnTitle(header, i18nString(UIStrings.parentFrame));
    this.appendColumnTitle(header, i18nString(UIStrings.blockedResource));
    this.affectedResources.appendChild(header);
    let count = 0;
    for (const detail of details) {
        __classPrivateFieldGet(this, _AffectedBlockedByResponseView_instances, "m", _AffectedBlockedByResponseView_appendDetail).call(this, detail);
        count++;
    }
    this.updateAffectedResourceCount(count);
}, _AffectedBlockedByResponseView_appendDetail = function _AffectedBlockedByResponseView_appendDetail(details) {
    const element = document.createElement('tr');
    element.classList.add('affected-resource-row');
    const requestCell = this.createRequestCell(details.request, {
        additionalOnClickAction() {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_2__.userMetrics.issuesPanelResourceOpened(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.IssueCategory.CrossOriginEmbedderPolicy, _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__.AffectedItem.Request);
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
};


/***/ })

}]);