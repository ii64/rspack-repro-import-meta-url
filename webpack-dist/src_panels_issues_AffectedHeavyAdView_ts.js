"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_issues_AffectedHeavyAdView_ts"],{

/***/ "./src/panels/issues/AffectedHeavyAdView.ts":
/*!**************************************************!*\
  !*** ./src/panels/issues/AffectedHeavyAdView.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedHeavyAdView: () => (/* binding */ AffectedHeavyAdView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./src/panels/issues/AffectedResourcesView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AffectedHeavyAdView_instances, _AffectedHeavyAdView_appendAffectedHeavyAds, _AffectedHeavyAdView_statusToString, _AffectedHeavyAdView_limitToString, _AffectedHeavyAdView_appendAffectedHeavyAd;



const UIStrings = {
    /**
     *@description Label for number of affected resources indication in issue view
     */
    nResources: '{n, plural, =1 {# resource} other {# resources}}',
    /**
     *@description Title for a column in an Heavy Ads issue view
     */
    limitExceeded: 'Limit exceeded',
    /**
     *@description Title for a column in an Heavy Ads issue view
     */
    resolutionStatus: 'Resolution Status',
    /**
     *@description Title for a column in an Heavy Ads issue view
     */
    frameUrl: 'Frame URL',
    /**
     * @description When there is a Heavy Ad, the browser can choose to deal with it in different ways.
     * This string indicates that the ad was bad enough that it was removed.
     */
    removed: 'Removed',
    /**
     * @description When there is a Heavy Ad, the browser can choose to deal with it in different ways.
     * This string indicates that the ad was only warned, and not removed.
     */
    warned: 'Warned',
    /**
     *@description Reason for a Heavy Ad being flagged in issue view. The Ad has been flagged as a
     *Heavy Ad because it exceeded the set limit for peak CPU usage, e.g. it blocked the main thread
     *for more than 15 seconds in any 30-second window.
     */
    cpuPeakLimit: 'CPU peak limit',
    /**
     *@description Reason for a Heavy Ad being flagged in issue view
     */
    cpuTotalLimit: 'CPU total limit',
    /**
     *@description Reason for a Heavy Ad being flagged in issue view
     */
    networkLimit: 'Network limit',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedHeavyAdView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class AffectedHeavyAdView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_2__.AffectedResourcesView {
    constructor() {
        super(...arguments);
        _AffectedHeavyAdView_instances.add(this);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nResources, { n: count });
    }
    update() {
        this.clear();
        __classPrivateFieldGet(this, _AffectedHeavyAdView_instances, "m", _AffectedHeavyAdView_appendAffectedHeavyAds).call(this, this.issue.getHeavyAdIssues());
    }
}
_AffectedHeavyAdView_instances = new WeakSet(), _AffectedHeavyAdView_appendAffectedHeavyAds = function _AffectedHeavyAdView_appendAffectedHeavyAds(heavyAds) {
    const header = document.createElement('tr');
    this.appendColumnTitle(header, i18nString(UIStrings.limitExceeded));
    this.appendColumnTitle(header, i18nString(UIStrings.resolutionStatus));
    this.appendColumnTitle(header, i18nString(UIStrings.frameUrl));
    this.affectedResources.appendChild(header);
    let count = 0;
    for (const heavyAd of heavyAds) {
        __classPrivateFieldGet(this, _AffectedHeavyAdView_instances, "m", _AffectedHeavyAdView_appendAffectedHeavyAd).call(this, heavyAd.details());
        count++;
    }
    this.updateAffectedResourceCount(count);
}, _AffectedHeavyAdView_statusToString = function _AffectedHeavyAdView_statusToString(status) {
    switch (status) {
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Audits.HeavyAdResolutionStatus.HeavyAdBlocked:
            return i18nString(UIStrings.removed);
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Audits.HeavyAdResolutionStatus.HeavyAdWarning:
            return i18nString(UIStrings.warned);
    }
    return '';
}, _AffectedHeavyAdView_limitToString = function _AffectedHeavyAdView_limitToString(status) {
    switch (status) {
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Audits.HeavyAdReason.CpuPeakLimit:
            return i18nString(UIStrings.cpuPeakLimit);
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Audits.HeavyAdReason.CpuTotalLimit:
            return i18nString(UIStrings.cpuTotalLimit);
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Audits.HeavyAdReason.NetworkTotalLimit:
            return i18nString(UIStrings.networkLimit);
    }
    return '';
}, _AffectedHeavyAdView_appendAffectedHeavyAd = function _AffectedHeavyAdView_appendAffectedHeavyAd(heavyAd) {
    const element = document.createElement('tr');
    element.classList.add('affected-resource-heavy-ad');
    const reason = document.createElement('td');
    reason.classList.add('affected-resource-heavy-ad-info');
    reason.textContent = __classPrivateFieldGet(this, _AffectedHeavyAdView_instances, "m", _AffectedHeavyAdView_limitToString).call(this, heavyAd.reason);
    element.appendChild(reason);
    const status = document.createElement('td');
    status.classList.add('affected-resource-heavy-ad-info');
    status.textContent = __classPrivateFieldGet(this, _AffectedHeavyAdView_instances, "m", _AffectedHeavyAdView_statusToString).call(this, heavyAd.resolution);
    element.appendChild(status);
    const frameId = heavyAd.frame.frameId;
    const frameUrl = this.createFrameCell(frameId, this.issue.getCategory());
    element.appendChild(frameUrl);
    this.affectedResources.appendChild(element);
};


/***/ })

}]);