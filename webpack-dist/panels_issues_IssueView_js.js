"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_IssueView_js"],{

/***/ "./panels/issues/AffectedBlockedByResponseView.js":
/*!********************************************************!*\
  !*** ./panels/issues/AffectedBlockedByResponseView.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedBlockedByResponseView: () => (/* binding */ AffectedBlockedByResponseView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




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
    #appendDetails(details) {
        const header = document.createElement('tr');
        this.appendColumnTitle(header, i18nString(UIStrings.requestC));
        this.appendColumnTitle(header, i18nString(UIStrings.parentFrame));
        this.appendColumnTitle(header, i18nString(UIStrings.blockedResource));
        this.affectedResources.appendChild(header);
        let count = 0;
        for (const detail of details) {
            this.#appendDetail(detail);
            count++;
        }
        this.updateAffectedResourceCount(count);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nRequests, { n: count });
    }
    #appendDetail(details) {
        const element = document.createElement('tr');
        element.classList.add('affected-resource-row');
        const requestCell = this.createRequestCell(details.request, {
            additionalOnClickAction() {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_2__.userMetrics.issuesPanelResourceOpened("CrossOriginEmbedderPolicy" /* IssuesManager.Issue.IssueCategory.CrossOriginEmbedderPolicy */, "Request" /* AffectedItem.Request */);
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
    }
    update() {
        this.clear();
        this.#appendDetails(this.issue.getBlockedByResponseDetails());
    }
}
//# sourceMappingURL=AffectedBlockedByResponseView.js.map

/***/ }),

/***/ "./panels/issues/AffectedCookiesView.js":
/*!**********************************************!*\
  !*** ./panels/issues/AffectedCookiesView.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedCookiesView: () => (/* binding */ AffectedCookiesView),
/* harmony export */   AffectedRawCookieLinesView: () => (/* binding */ AffectedRawCookieLinesView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Noun, singular or plural. Label for the kind and number of affected resources associated with a DevTools issue. A cookie is a small piece of data that a server sends to the user's web browser. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies.
     */
    nCookies: '{n, plural, =1 {# cookie} other {# cookies}}',
    /**
     *@description Noun, singular. Label for a column in a table which lists cookies in the affected resources section of a DevTools issue. Each cookie has a name.
     */
    name: 'Name',
    /**
     *@description Noun, singular. Label for a column in a table which lists cookies in the affected resources section of a DevTools issue. Cookies may have a 'Domain' attribute: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies.#define_where_cookies_are_sent
     */
    domain: 'Domain',
    /**
     *@description Noun, singular. Label for a column in a table which lists cookies in the affected resources section of a DevTools issue. Cookies may have a 'Path' attribute: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies.#define_where_cookies_are_sent
     */
    path: 'Path',
    /**
     *@description Label for the the number of affected `Set-Cookie` lines associated with a DevTools issue. `Set-Cookie` is a specific header line in an HTTP network request and consists of a single line of text.
     */
    nRawCookieLines: '{n, plural, =1 {1 Raw `Set-Cookie` header} other {# Raw `Set-Cookie` headers}}',
    /**
     *@description Title for text button in the Issues panel. Clicking the button navigates the user to the Network Panel. `Set-Cookie` is a specific header line in an HTTP network request and consists of a single line of text.
     */
    filterSetCookieTitle: 'Show network requests that include this `Set-Cookie` header in the network panel',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/issues/AffectedCookiesView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class AffectedCookiesView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_5__.AffectedResourcesView {
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nCookies, { n: count });
    }
    #appendAffectedCookies(cookies) {
        const header = document.createElement('tr');
        this.appendColumnTitle(header, i18nString(UIStrings.name));
        this.appendColumnTitle(header, i18nString(UIStrings.domain) + ' & ' + i18nString(UIStrings.path), 'affected-resource-cookie-info-header');
        this.affectedResources.appendChild(header);
        let count = 0;
        for (const cookie of cookies) {
            count++;
            this.#appendAffectedCookie(cookie.cookie, cookie.hasRequest);
        }
        this.updateAffectedResourceCount(count);
    }
    #appendAffectedCookie(cookie, hasAssociatedRequest) {
        const element = document.createElement('tr');
        element.classList.add('affected-resource-cookie');
        const name = document.createElement('td');
        if (hasAssociatedRequest) {
            const link = document.createElement('button');
            link.classList.add('link', 'devtools-link');
            link.textContent = cookie.name;
            link.tabIndex = 0;
            link.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.link('issues.filter-network-requests-by-cookie').track({ click: true })}`);
            link.addEventListener('click', () => {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened(this.issue.getCategory(), "Cookie" /* AffectedItem.Cookie */);
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIFilter.UIRequestFilter.filters([
                    {
                        filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIFilter.FilterType.CookieDomain,
                        filterValue: cookie.domain,
                    },
                    {
                        filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIFilter.FilterType.CookieName,
                        filterValue: cookie.name,
                    },
                    {
                        filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIFilter.FilterType.CookiePath,
                        filterValue: cookie.path,
                    },
                ]));
            });
            name.appendChild(link);
        }
        else {
            name.textContent = cookie.name;
        }
        element.appendChild(name);
        this.appendIssueDetailCell(element, `${cookie.domain}${cookie.path}`, 'affected-resource-cookie-info');
        this.affectedResources.appendChild(element);
    }
    update() {
        this.clear();
        this.#appendAffectedCookies(this.issue.cookiesWithRequestIndicator());
    }
}
class AffectedRawCookieLinesView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_5__.AffectedResourcesView {
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nRawCookieLines, { n: count });
    }
    update() {
        this.clear();
        const cookieLinesWithRequestIndicator = this.issue.getRawCookieLines();
        let count = 0;
        for (const cookie of cookieLinesWithRequestIndicator) {
            const row = document.createElement('tr');
            row.classList.add('affected-resource-directive');
            if (cookie.hasRequest) {
                const cookieLine = document.createElement('td');
                const link = document.createElement('button');
                link.classList.add('link', 'devtools-link');
                link.textContent = cookie.rawCookieLine;
                link.title = i18nString(UIStrings.filterSetCookieTitle);
                link.tabIndex = 0;
                link.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.link('issues.filter-network-requests-by-raw-cookie').track({ click: true })}`);
                link.addEventListener('click', () => {
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIFilter.UIRequestFilter.filters([
                        {
                            filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIFilter.FilterType.ResponseHeaderValueSetCookie,
                            filterValue: cookie.rawCookieLine,
                        },
                    ]));
                });
                cookieLine.appendChild(link);
                row.appendChild(cookieLine);
            }
            else {
                this.appendIssueDetailCell(row, cookie.rawCookieLine);
            }
            this.affectedResources.appendChild(row);
            count++;
        }
        this.updateAffectedResourceCount(count);
    }
}
//# sourceMappingURL=AffectedCookiesView.js.map

/***/ }),

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

/***/ }),

/***/ "./panels/issues/AffectedHeavyAdView.js":
/*!**********************************************!*\
  !*** ./panels/issues/AffectedHeavyAdView.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedHeavyAdView: () => (/* binding */ AffectedHeavyAdView)
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
class AffectedHeavyAdView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_1__.AffectedResourcesView {
    #appendAffectedHeavyAds(heavyAds) {
        const header = document.createElement('tr');
        this.appendColumnTitle(header, i18nString(UIStrings.limitExceeded));
        this.appendColumnTitle(header, i18nString(UIStrings.resolutionStatus));
        this.appendColumnTitle(header, i18nString(UIStrings.frameUrl));
        this.affectedResources.appendChild(header);
        let count = 0;
        for (const heavyAd of heavyAds) {
            this.#appendAffectedHeavyAd(heavyAd.details());
            count++;
        }
        this.updateAffectedResourceCount(count);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nResources, { n: count });
    }
    #statusToString(status) {
        switch (status) {
            case "HeavyAdBlocked" /* Protocol.Audits.HeavyAdResolutionStatus.HeavyAdBlocked */:
                return i18nString(UIStrings.removed);
            case "HeavyAdWarning" /* Protocol.Audits.HeavyAdResolutionStatus.HeavyAdWarning */:
                return i18nString(UIStrings.warned);
        }
        return '';
    }
    #limitToString(status) {
        switch (status) {
            case "CpuPeakLimit" /* Protocol.Audits.HeavyAdReason.CpuPeakLimit */:
                return i18nString(UIStrings.cpuPeakLimit);
            case "CpuTotalLimit" /* Protocol.Audits.HeavyAdReason.CpuTotalLimit */:
                return i18nString(UIStrings.cpuTotalLimit);
            case "NetworkTotalLimit" /* Protocol.Audits.HeavyAdReason.NetworkTotalLimit */:
                return i18nString(UIStrings.networkLimit);
        }
        return '';
    }
    #appendAffectedHeavyAd(heavyAd) {
        const element = document.createElement('tr');
        element.classList.add('affected-resource-heavy-ad');
        const reason = document.createElement('td');
        reason.classList.add('affected-resource-heavy-ad-info');
        reason.textContent = this.#limitToString(heavyAd.reason);
        element.appendChild(reason);
        const status = document.createElement('td');
        status.classList.add('affected-resource-heavy-ad-info');
        status.textContent = this.#statusToString(heavyAd.resolution);
        element.appendChild(status);
        const frameId = heavyAd.frame.frameId;
        const frameUrl = this.createFrameCell(frameId, this.issue.getCategory());
        element.appendChild(frameUrl);
        this.affectedResources.appendChild(element);
    }
    update() {
        this.clear();
        this.#appendAffectedHeavyAds(this.issue.getHeavyAdIssues());
    }
}
//# sourceMappingURL=AffectedHeavyAdView.js.map

/***/ }),

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

/***/ }),

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

/***/ }),

/***/ "./panels/issues/AffectedSourcesView.js":
/*!**********************************************!*\
  !*** ./panels/issues/AffectedSourcesView.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedSourcesView: () => (/* binding */ AffectedSourcesView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const UIStrings = {
    /**
     *@description Singular or Plural label for number of affected sources (consisting of (source) file name + line number) in issue view
     */
    nSources: '{n, plural, =1 {# source} other {# sources}}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedSourcesView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class AffectedSourcesView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__.AffectedResourcesView {
    #appendAffectedSources(affectedSources) {
        let count = 0;
        for (const source of affectedSources) {
            this.#appendAffectedSource(source);
            count++;
        }
        this.updateAffectedResourceCount(count);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nSources, { n: count });
    }
    #appendAffectedSource({ url, lineNumber, columnNumber }) {
        const cellElement = document.createElement('td');
        // TODO(chromium:1072331): Check feasibility of plumping through scriptId for `linkifyScriptLocation`
        //                         to support source maps and formatted scripts.
        const linkifierURLOptions = { columnNumber, lineNumber, tabStop: true, showColumnNumber: false, inlineFrameIndex: 0 };
        // An element created with linkifyURL can subscribe to the events
        // 'click' neither 'keydown' if that key is the 'Enter' key.
        // Also, this element has a context menu, so we should be able to
        // track when the user use the context menu too.
        // TODO(crbug.com/1108503): Add some mechanism to be able to add telemetry to this element.
        const anchorElement = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Linkifier.Linkifier.linkifyURL(url, linkifierURLOptions);
        anchorElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.link('source-location').track({ click: true })}`);
        cellElement.appendChild(anchorElement);
        const rowElement = document.createElement('tr');
        rowElement.classList.add('affected-resource-source');
        rowElement.appendChild(cellElement);
        this.affectedResources.appendChild(rowElement);
    }
    update() {
        this.clear();
        this.#appendAffectedSources(this.issue.sources());
    }
}
//# sourceMappingURL=AffectedSourcesView.js.map

/***/ }),

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

/***/ }),

/***/ "./panels/issues/AttributionReportingIssueDetailsView.js":
/*!***************************************************************!*\
  !*** ./panels/issues/AttributionReportingIssueDetailsView.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributionReportingIssueDetailsView: () => (/* binding */ AttributionReportingIssueDetailsView)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const UIStrings = {
    /**
     * @description Label for number of rows in the issue details table.
     */
    nViolations: '{n, plural, =1 {# violation} other {# violations}}',
    /**
     * @description Noun, label for the column showing the associated HTML element in the issue details table.
     */
    element: 'Element',
    /**
     * @description Noun, label for the column showing the invalid header value in the issue details table.
     */
    invalidHeaderValue: 'Invalid Header Value',
    /**
     * @description Noun, label for the column showing the associated network request in the issue details table.
     */
    request: 'Request',
    /**
     * @description Label for the column showing the invalid URL used in an HTML anchor element ("a link").
     * A origin is (roughly said) the front part of a URL.
     */
    untrustworthyOrigin: 'Untrustworthy origin',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/issues/AttributionReportingIssueDetailsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class AttributionReportingIssueDetailsView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__.AffectedResourcesView {
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nViolations, { n: count });
    }
    update() {
        this.clear();
        const issues = this.issue.getAttributionReportingIssues();
        if (issues.size > 0) {
            this.#appendDetails(issues.values().next().value.code(), issues);
        }
        else {
            this.updateAffectedResourceCount(0);
        }
    }
    #appendDetails(issueCode, issues) {
        const header = document.createElement('tr');
        switch (issueCode) {
            case "AttributionReportingIssue::InvalidRegisterSourceHeader" /* IssuesManager.AttributionReportingIssue.IssueCode.InvalidRegisterSourceHeader */:
            case "AttributionReportingIssue::InvalidRegisterTriggerHeader" /* IssuesManager.AttributionReportingIssue.IssueCode.InvalidRegisterTriggerHeader */:
            case "AttributionReportingIssue::InvalidRegisterOsSourceHeader" /* IssuesManager.AttributionReportingIssue.IssueCode.InvalidRegisterOsSourceHeader */:
            case "AttributionReportingIssue::InvalidRegisterOsTriggerHeader" /* IssuesManager.AttributionReportingIssue.IssueCode.InvalidRegisterOsTriggerHeader */:
            case "AttributionReportingIssue::OsSourceIgnored" /* IssuesManager.AttributionReportingIssue.IssueCode.OsSourceIgnored */:
            case "AttributionReportingIssue::OsTriggerIgnored" /* IssuesManager.AttributionReportingIssue.IssueCode.OsTriggerIgnored */:
            case "AttributionReportingIssue::SourceIgnored" /* IssuesManager.AttributionReportingIssue.IssueCode.SourceIgnored */:
            case "AttributionReportingIssue::TriggerIgnored" /* IssuesManager.AttributionReportingIssue.IssueCode.TriggerIgnored */:
                this.appendColumnTitle(header, i18nString(UIStrings.request));
                this.appendColumnTitle(header, i18nString(UIStrings.invalidHeaderValue));
                break;
            case "AttributionReportingIssue::InsecureContext" /* IssuesManager.AttributionReportingIssue.IssueCode.InsecureContext */:
            case "AttributionReportingIssue::UntrustworthyReportingOrigin" /* IssuesManager.AttributionReportingIssue.IssueCode.UntrustworthyReportingOrigin */:
                this.appendColumnTitle(header, i18nString(UIStrings.element));
                this.appendColumnTitle(header, i18nString(UIStrings.request));
                this.appendColumnTitle(header, i18nString(UIStrings.untrustworthyOrigin));
                break;
            case "AttributionReportingIssue::PermissionPolicyDisabled" /* IssuesManager.AttributionReportingIssue.IssueCode.PermissionPolicyDisabled */:
                this.appendColumnTitle(header, i18nString(UIStrings.element));
                this.appendColumnTitle(header, i18nString(UIStrings.request));
                break;
            case "AttributionReportingIssue::SourceAndTriggerHeaders" /* IssuesManager.AttributionReportingIssue.IssueCode.SourceAndTriggerHeaders */:
            case "AttributionReportingIssue::WebAndOsHeaders" /* IssuesManager.AttributionReportingIssue.IssueCode.WebAndOsHeaders */:
                this.appendColumnTitle(header, i18nString(UIStrings.request));
                break;
            case "AttributionReportingIssue::NavigationRegistrationWithoutTransientUserActivation" /* IssuesManager.AttributionReportingIssue.IssueCode.NavigationRegistrationWithoutTransientUserActivation */:
                this.appendColumnTitle(header, i18nString(UIStrings.element));
                break;
        }
        this.affectedResources.appendChild(header);
        let count = 0;
        for (const issue of issues) {
            count++;
            void this.#appendDetail(issueCode, issue);
        }
        this.updateAffectedResourceCount(count);
    }
    async #appendDetail(issueCode, issue) {
        const element = document.createElement('tr');
        element.classList.add('affected-resource-directive');
        const details = issue.issueDetails;
        switch (issueCode) {
            case "AttributionReportingIssue::InvalidRegisterSourceHeader" /* IssuesManager.AttributionReportingIssue.IssueCode.InvalidRegisterSourceHeader */:
            case "AttributionReportingIssue::InvalidRegisterTriggerHeader" /* IssuesManager.AttributionReportingIssue.IssueCode.InvalidRegisterTriggerHeader */:
            case "AttributionReportingIssue::InvalidRegisterOsSourceHeader" /* IssuesManager.AttributionReportingIssue.IssueCode.InvalidRegisterOsSourceHeader */:
            case "AttributionReportingIssue::InvalidRegisterOsTriggerHeader" /* IssuesManager.AttributionReportingIssue.IssueCode.InvalidRegisterOsTriggerHeader */:
            case "AttributionReportingIssue::OsSourceIgnored" /* IssuesManager.AttributionReportingIssue.IssueCode.OsSourceIgnored */:
            case "AttributionReportingIssue::OsTriggerIgnored" /* IssuesManager.AttributionReportingIssue.IssueCode.OsTriggerIgnored */:
            case "AttributionReportingIssue::SourceIgnored" /* IssuesManager.AttributionReportingIssue.IssueCode.SourceIgnored */:
            case "AttributionReportingIssue::TriggerIgnored" /* IssuesManager.AttributionReportingIssue.IssueCode.TriggerIgnored */:
                this.#appendRequestOrEmptyCell(element, details.request);
                this.appendIssueDetailCell(element, details.invalidParameter || '');
                break;
            case "AttributionReportingIssue::InsecureContext" /* IssuesManager.AttributionReportingIssue.IssueCode.InsecureContext */:
            case "AttributionReportingIssue::UntrustworthyReportingOrigin" /* IssuesManager.AttributionReportingIssue.IssueCode.UntrustworthyReportingOrigin */:
                await this.#appendElementOrEmptyCell(element, issue);
                this.#appendRequestOrEmptyCell(element, details.request);
                this.appendIssueDetailCell(element, details.invalidParameter || '');
                break;
            case "AttributionReportingIssue::PermissionPolicyDisabled" /* IssuesManager.AttributionReportingIssue.IssueCode.PermissionPolicyDisabled */:
                await this.#appendElementOrEmptyCell(element, issue);
                this.#appendRequestOrEmptyCell(element, details.request);
                break;
            case "AttributionReportingIssue::SourceAndTriggerHeaders" /* IssuesManager.AttributionReportingIssue.IssueCode.SourceAndTriggerHeaders */:
            case "AttributionReportingIssue::WebAndOsHeaders" /* IssuesManager.AttributionReportingIssue.IssueCode.WebAndOsHeaders */:
                this.#appendRequestOrEmptyCell(element, details.request);
                break;
            case "AttributionReportingIssue::NavigationRegistrationWithoutTransientUserActivation" /* IssuesManager.AttributionReportingIssue.IssueCode.NavigationRegistrationWithoutTransientUserActivation */:
                await this.#appendElementOrEmptyCell(element, issue);
                break;
        }
        this.affectedResources.appendChild(element);
    }
    async #appendElementOrEmptyCell(parent, issue) {
        const details = issue.issueDetails;
        if (details.violatingNodeId !== undefined) {
            const target = issue.model()?.target() || null;
            parent.appendChild(await this.createElementCell({ backendNodeId: details.violatingNodeId, target, nodeName: 'Attribution source element' }, issue.getCategory()));
        }
        else {
            this.appendIssueDetailCell(parent, '');
        }
    }
    #appendRequestOrEmptyCell(parent, request) {
        if (!request) {
            this.appendIssueDetailCell(parent, '');
            return;
        }
        const opts = {
            additionalOnClickAction() {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.issuesPanelResourceOpened("AttributionReporting" /* IssuesManager.Issue.IssueCategory.AttributionReporting */, "Request" /* AffectedItem.Request */);
            },
        };
        parent.appendChild(this.createRequestCell(request, opts));
    }
}
//# sourceMappingURL=AttributionReportingIssueDetailsView.js.map

/***/ }),

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

/***/ }),

/***/ "./panels/issues/IssueView.js":
/*!************************************!*\
  !*** ./panels/issues/IssueView.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssueView: () => (/* binding */ IssueView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */ var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./ui/components/adorners/adorners.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/components/issue_counter/issue_counter.js */ "./ui/components/issue_counter/issue_counter.js");
/* harmony import */ var _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/markdown_view/markdown_view.js */ "./ui/components/markdown_view/markdown_view.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _AffectedBlockedByResponseView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AffectedBlockedByResponseView.js */ "./panels/issues/AffectedBlockedByResponseView.js");
/* harmony import */ var _AffectedCookiesView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AffectedCookiesView.js */ "./panels/issues/AffectedCookiesView.js");
/* harmony import */ var _AffectedDirectivesView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AffectedDirectivesView.js */ "./panels/issues/AffectedDirectivesView.js");
/* harmony import */ var _AffectedDocumentsInQuirksModeView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AffectedDocumentsInQuirksModeView.js */ "./panels/issues/AffectedDocumentsInQuirksModeView.js");
/* harmony import */ var _AffectedElementsView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AffectedElementsView.js */ "./panels/issues/AffectedElementsView.js");
/* harmony import */ var _AffectedElementsWithLowContrastView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AffectedElementsWithLowContrastView.js */ "./panels/issues/AffectedElementsWithLowContrastView.js");
/* harmony import */ var _AffectedHeavyAdView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AffectedHeavyAdView.js */ "./panels/issues/AffectedHeavyAdView.js");
/* harmony import */ var _AffectedMetadataAllowedSitesView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AffectedMetadataAllowedSitesView.js */ "./panels/issues/AffectedMetadataAllowedSitesView.js");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
/* harmony import */ var _AffectedSharedArrayBufferIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./AffectedSharedArrayBufferIssueDetailsView.js */ "./panels/issues/AffectedSharedArrayBufferIssueDetailsView.js");
/* harmony import */ var _AffectedSourcesView_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./AffectedSourcesView.js */ "./panels/issues/AffectedSourcesView.js");
/* harmony import */ var _AffectedTrackingSitesView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./AffectedTrackingSitesView.js */ "./panels/issues/AffectedTrackingSitesView.js");
/* harmony import */ var _AttributionReportingIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./AttributionReportingIssueDetailsView.js */ "./panels/issues/AttributionReportingIssueDetailsView.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/components.js */ "./panels/issues/components/components.js");
/* harmony import */ var _CorsIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./CorsIssueDetailsView.js */ "./panels/issues/CorsIssueDetailsView.js");
/* harmony import */ var _GenericIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./GenericIssueDetailsView.js */ "./panels/issues/GenericIssueDetailsView.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



























const UIStrings = {
    /**
     *@description Noun, singular. Label for a column or field containing the name of an entity.
     */
    name: 'Name',
    /**
     *@description The kind of resolution for a mixed content issue
     */
    blocked: 'blocked',
    /**
     *@description Label for a type of issue that can appear in the Issues view. Noun for singular or plural number of network requests.
     */
    nRequests: '{n, plural, =1 {# request} other {# requests}}',
    /**
     *@description Label for singular or plural number of affected resources in issue view
     */
    nResources: '{n, plural, =1 {# resource} other {# resources}}',
    /**
     *@description Label for mixed content issue's restriction status
     */
    restrictionStatus: 'Restriction Status',
    /**
     * @description When there is a Heavy Ad, the browser can choose to deal with it in different ways.
     * This string indicates that the ad was only warned, and not removed.
     */
    warned: 'Warned',
    /**
     *@description Header for the section listing affected resources
     */
    affectedResources: 'Affected Resources',
    /**
     *@description Title for a link to further information in issue view
     *@example {SameSite Cookies Explained} PH1
     */
    learnMoreS: 'Learn more: {PH1}',
    /**
     *@description The kind of resolution for a mixed content issue
     */
    automaticallyUpgraded: 'automatically upgraded',
    /**
     *@description Menu entry for hiding a particular issue, in the Hide Issues context menu.
     */
    hideIssuesLikeThis: 'Hide issues like this',
    /**
     *@description Menu entry for unhiding a particular issue, in the Hide Issues context menu.
     */
    unhideIssuesLikeThis: 'Unhide issues like this',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/issues/IssueView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class AffectedRequestsView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_19__.AffectedResourcesView {
    #appendAffectedRequests(affectedRequests) {
        let count = 0;
        for (const affectedRequest of affectedRequests) {
            const element = document.createElement('tr');
            element.classList.add('affected-resource-request');
            const category = this.issue.getCategory();
            const tab = issueTypeToNetworkHeaderMap.get(category) || "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */;
            element.appendChild(this.createRequestCell(affectedRequest, {
                networkTab: tab,
                additionalOnClickAction() {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened(category, "Request" /* AffectedItem.Request */);
                },
            }));
            this.affectedResources.appendChild(element);
            count++;
        }
        this.updateAffectedResourceCount(count);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nRequests, { n: count });
    }
    update() {
        this.clear();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const unused of this.issue.getBlockedByResponseDetails()) {
            // If the issue has blockedByResponseDetails, the corresponding AffectedBlockedByResponseView
            // will take care of displaying the request.
            this.updateAffectedResourceCount(0);
            return;
        }
        if (this.issue.getCategory() === "MixedContent" /* IssuesManager.Issue.IssueCategory.MixedContent */) {
            // The AffectedMixedContentView takes care of displaying the resources.
            this.updateAffectedResourceCount(0);
            return;
        }
        this.#appendAffectedRequests(this.issue.requests());
    }
}
const issueTypeToNetworkHeaderMap = new Map([
    [
        "Cookie" /* IssuesManager.Issue.IssueCategory.Cookie */,
        "cookies" /* NetworkForward.UIRequestLocation.UIRequestTabs.Cookies */,
    ],
    [
        "CrossOriginEmbedderPolicy" /* IssuesManager.Issue.IssueCategory.CrossOriginEmbedderPolicy */,
        "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */,
    ],
    [
        "MixedContent" /* IssuesManager.Issue.IssueCategory.MixedContent */,
        "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */,
    ],
]);
class AffectedMixedContentView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_19__.AffectedResourcesView {
    #appendAffectedMixedContentDetails(mixedContentIssues) {
        const header = document.createElement('tr');
        this.appendColumnTitle(header, i18nString(UIStrings.name));
        this.appendColumnTitle(header, i18nString(UIStrings.restrictionStatus));
        this.affectedResources.appendChild(header);
        let count = 0;
        for (const issue of mixedContentIssues) {
            const details = issue.getDetails();
            this.appendAffectedMixedContent(details);
            count++;
        }
        this.updateAffectedResourceCount(count);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nResources, { n: count });
    }
    appendAffectedMixedContent(mixedContent) {
        const element = document.createElement('tr');
        element.classList.add('affected-resource-mixed-content');
        if (mixedContent.request) {
            const networkTab = issueTypeToNetworkHeaderMap.get(this.issue.getCategory()) ||
                "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */;
            element.appendChild(this.createRequestCell(mixedContent.request, {
                networkTab,
                additionalOnClickAction() {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened("MixedContent" /* IssuesManager.Issue.IssueCategory.MixedContent */, "Request" /* AffectedItem.Request */);
                },
            }));
        }
        else {
            const filename = (0,_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_19__.extractShortPath)(mixedContent.insecureURL);
            const cell = this.appendIssueDetailCell(element, filename, 'affected-resource-mixed-content-info');
            cell.title = mixedContent.insecureURL;
        }
        this.appendIssueDetailCell(element, AffectedMixedContentView.translateStatus(mixedContent.resolutionStatus), 'affected-resource-mixed-content-info');
        this.affectedResources.appendChild(element);
    }
    static translateStatus(resolutionStatus) {
        switch (resolutionStatus) {
            case "MixedContentBlocked" /* Protocol.Audits.MixedContentResolutionStatus.MixedContentBlocked */:
                return i18nString(UIStrings.blocked);
            case "MixedContentAutomaticallyUpgraded" /* Protocol.Audits.MixedContentResolutionStatus.MixedContentAutomaticallyUpgraded */:
                return i18nString(UIStrings.automaticallyUpgraded);
            case "MixedContentWarning" /* Protocol.Audits.MixedContentResolutionStatus.MixedContentWarning */:
                return i18nString(UIStrings.warned);
        }
    }
    update() {
        this.clear();
        this.#appendAffectedMixedContentDetails(this.issue.getMixedContentIssues());
    }
}
class IssueView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TreeOutline.TreeElement {
    #issue;
    #description;
    toggleOnClick;
    affectedResources;
    #affectedResourceViews;
    #aggregatedIssuesCount;
    #issueKindIcon = null;
    #hasBeenExpandedBefore;
    #throttle;
    #needsUpdateOnExpand = true;
    #hiddenIssuesMenu;
    #contentCreated = false;
    constructor(issue, description) {
        super();
        this.#issue = issue;
        this.#description = description;
        this.#throttle = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(250);
        this.toggleOnClick = true;
        this.listItemElement.classList.add('issue');
        this.childrenListElement.classList.add('body');
        this.childrenListElement.classList.add(IssueView.getBodyCSSClass(this.#issue.getKind()));
        this.affectedResources = this.#createAffectedResources();
        this.#affectedResourceViews = [
            new _AffectedCookiesView_js__WEBPACK_IMPORTED_MODULE_12__.AffectedCookiesView(this, this.#issue, 'affected-cookies'),
            new _AffectedElementsView_js__WEBPACK_IMPORTED_MODULE_15__.AffectedElementsView(this, this.#issue, 'affected-elements'),
            new AffectedRequestsView(this, this.#issue, 'affected-requests'),
            new AffectedMixedContentView(this, this.#issue, 'mixed-content-details'),
            new _AffectedSourcesView_js__WEBPACK_IMPORTED_MODULE_21__.AffectedSourcesView(this, this.#issue, 'affected-sources'),
            new _AffectedHeavyAdView_js__WEBPACK_IMPORTED_MODULE_17__.AffectedHeavyAdView(this, this.#issue, 'heavy-ad-details'),
            new _AffectedDirectivesView_js__WEBPACK_IMPORTED_MODULE_13__.AffectedDirectivesView(this, this.#issue, 'directives-details'),
            new _AffectedBlockedByResponseView_js__WEBPACK_IMPORTED_MODULE_11__.AffectedBlockedByResponseView(this, this.#issue, 'blocked-by-response-details'),
            new _AffectedSharedArrayBufferIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_20__.AffectedSharedArrayBufferIssueDetailsView(this, this.#issue, 'sab-details'),
            new _AffectedElementsWithLowContrastView_js__WEBPACK_IMPORTED_MODULE_16__.AffectedElementsWithLowContrastView(this, this.#issue, 'low-contrast-details'),
            new _CorsIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_25__.CorsIssueDetailsView(this, this.#issue, 'cors-details'),
            new _GenericIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_26__.GenericIssueDetailsView(this, this.#issue, 'generic-details'),
            new _AffectedDocumentsInQuirksModeView_js__WEBPACK_IMPORTED_MODULE_14__.AffectedDocumentsInQuirksModeView(this, this.#issue, 'affected-documents'),
            new _AttributionReportingIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_23__.AttributionReportingIssueDetailsView(this, this.#issue, 'attribution-reporting-details'),
            new _AffectedCookiesView_js__WEBPACK_IMPORTED_MODULE_12__.AffectedRawCookieLinesView(this, this.#issue, 'affected-raw-cookies'),
            new _AffectedTrackingSitesView_js__WEBPACK_IMPORTED_MODULE_22__.AffectedTrackingSitesView(this, this.#issue, 'tracking-sites-details'),
            new _AffectedMetadataAllowedSitesView_js__WEBPACK_IMPORTED_MODULE_18__.AffectedMetadataAllowedSitesView(this, this.#issue, 'metadata-allowed-sites-details'),
        ];
        this.#hiddenIssuesMenu = new _components_components_js__WEBPACK_IMPORTED_MODULE_24__.HideIssuesMenu.HideIssuesMenu();
        this.#aggregatedIssuesCount = null;
        this.#hasBeenExpandedBefore = false;
    }
    /**
     * Sets the issue to take the resources from. Assumes that the description
     * this IssueView was initialized with fits the new issue as well, i.e.
     * title and issue description will not be updated.
     */
    setIssue(issue) {
        if (this.#issue !== issue) {
            this.#needsUpdateOnExpand = true;
        }
        this.#issue = issue;
        this.#affectedResourceViews.forEach(view => view.setIssue(issue));
    }
    static getBodyCSSClass(issueKind) {
        switch (issueKind) {
            case "BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */:
                return 'issue-kind-breaking-change';
            case "PageError" /* IssuesManager.Issue.IssueKind.PageError */:
                return 'issue-kind-page-error';
            case "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */:
                return 'issue-kind-improvement';
        }
    }
    getIssueTitle() {
        return this.#description.title;
    }
    onattach() {
        if (!this.#contentCreated) {
            this.createContent();
            return;
        }
        this.update();
    }
    createContent() {
        this.#appendHeader();
        this.#createBody();
        this.appendChild(this.affectedResources);
        const visibleAffectedResource = [];
        for (const view of this.#affectedResourceViews) {
            this.appendAffectedResource(view);
            view.update();
            if (!view.isEmpty()) {
                visibleAffectedResource.push(view);
            }
        }
        this.#updateAffectedResourcesPositionAndSize(visibleAffectedResource);
        this.#createReadMoreLinks();
        this.updateAffectedResourceVisibility();
        this.#contentCreated = true;
    }
    appendAffectedResource(resource) {
        this.affectedResources.appendChild(resource);
    }
    #updateAffectedResourcesPositionAndSize(visibleAffectedResource) {
        for (let i = 0; i < visibleAffectedResource.length; i++) {
            const element = visibleAffectedResource[i].listItemElement;
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setPositionInSet(element, i + 1);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setSetSize(element, visibleAffectedResource.length);
        }
    }
    #appendHeader() {
        const header = document.createElement('div');
        header.classList.add('header');
        this.#issueKindIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon();
        this.#issueKindIcon.classList.add('leading-issue-icon');
        this.#aggregatedIssuesCount = document.createElement('span');
        const countAdorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_5__.Adorner.Adorner();
        countAdorner.data = {
            name: 'countWrapper',
            content: this.#aggregatedIssuesCount,
        };
        countAdorner.classList.add('aggregated-issues-count');
        header.appendChild(this.#issueKindIcon);
        header.appendChild(countAdorner);
        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = this.#description.title;
        header.appendChild(title);
        if (this.#hiddenIssuesMenu) {
            header.appendChild(this.#hiddenIssuesMenu);
        }
        this.#updateFromIssue();
        this.listItemElement.appendChild(header);
    }
    onexpand() {
        const category = this.#issue.getCategory();
        // Handle sub type for cookie issues.
        if (category === "Cookie" /* IssuesManager.Issue.IssueCategory.Cookie */) {
            const cookieIssueSubCatagory = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.CookieIssue.CookieIssue.getSubCategory(this.#issue.code());
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelIssueExpanded(cookieIssueSubCatagory);
        }
        else {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelIssueExpanded(category);
        }
        if (this.#needsUpdateOnExpand) {
            this.#doUpdate();
        }
        if (!this.#hasBeenExpandedBefore) {
            this.#hasBeenExpandedBefore = true;
            for (const view of this.#affectedResourceViews) {
                view.expandIfOneResource();
            }
        }
    }
    #updateFromIssue() {
        if (this.#issueKindIcon) {
            const kind = this.#issue.getKind();
            this.#issueKindIcon.data = _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_7__.IssueCounter.getIssueKindIconData(kind);
            this.#issueKindIcon.title = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.Issue.getIssueKindDescription(kind);
        }
        if (this.#aggregatedIssuesCount) {
            this.#aggregatedIssuesCount.textContent = `${this.#issue.getAggregatedIssuesCount()}`;
        }
        this.listItemElement.classList.toggle('hidden-issue', this.#issue.isHidden());
        if (this.#hiddenIssuesMenu) {
            const data = {
                menuItemLabel: this.#issue.isHidden() ? i18nString(UIStrings.unhideIssuesLikeThis) :
                    i18nString(UIStrings.hideIssuesLikeThis),
                menuItemAction: () => {
                    const setting = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.IssuesManager.getHideIssueByCodeSetting();
                    const values = setting.get();
                    values[this.#issue.code()] = this.#issue.isHidden() ? "Unhidden" /* IssuesManager.IssuesManager.IssueStatus.Unhidden */ :
                        "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */;
                    setting.set(values);
                },
            };
            this.#hiddenIssuesMenu.data = data;
        }
    }
    updateAffectedResourceVisibility() {
        const noResources = this.#affectedResourceViews.every(view => view.isEmpty());
        this.affectedResources.hidden = noResources;
    }
    #createAffectedResources() {
        const wrapper = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TreeOutline.TreeElement();
        wrapper.setCollapsible(false);
        wrapper.setExpandable(true);
        wrapper.expand();
        wrapper.selectable = false;
        wrapper.listItemElement.classList.add('affected-resources-label');
        wrapper.listItemElement.textContent = i18nString(UIStrings.affectedResources);
        wrapper.childrenListElement.classList.add('affected-resources');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setPositionInSet(wrapper.listItemElement, 2);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setSetSize(wrapper.listItemElement, this.#description.links.length === 0 ? 2 : 3);
        return wrapper;
    }
    #createBody() {
        const messageElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TreeOutline.TreeElement();
        messageElement.setCollapsible(false);
        messageElement.selectable = false;
        const markdownComponent = new _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_8__.MarkdownView.MarkdownView();
        markdownComponent.data = { tokens: this.#description.markdown };
        messageElement.listItemElement.appendChild(markdownComponent);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setPositionInSet(messageElement.listItemElement, 1);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setSetSize(messageElement.listItemElement, this.#description.links.length === 0 ? 2 : 3);
        this.appendChild(messageElement);
    }
    #createReadMoreLinks() {
        if (this.#description.links.length === 0) {
            return;
        }
        const linkWrapper = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TreeOutline.TreeElement();
        linkWrapper.setCollapsible(false);
        linkWrapper.listItemElement.classList.add('link-wrapper');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setPositionInSet(linkWrapper.listItemElement, 3);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setSetSize(linkWrapper.listItemElement, 3);
        const linkList = linkWrapper.listItemElement.createChild('ul', 'link-list');
        for (const description of this.#description.links) {
            const link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.html `<x-link class="link devtools-link" tabindex="0" href=${description.link}>${i18nString(UIStrings.learnMoreS, { PH1: description.linkTitle })}</x-link>`;
            link.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.link('learn-more').track({ click: true })}`);
            const linkListItem = linkList.createChild('li');
            linkListItem.appendChild(link);
        }
        this.appendChild(linkWrapper);
    }
    #doUpdate() {
        if (this.expanded) {
            this.#affectedResourceViews.forEach(view => view.update());
            this.updateAffectedResourceVisibility();
        }
        this.#needsUpdateOnExpand = !this.expanded;
        this.#updateFromIssue();
    }
    update() {
        void this.#throttle.schedule(async () => this.#doUpdate());
    }
    clear() {
        this.#affectedResourceViews.forEach(view => view.clear());
    }
    getIssueKind() {
        return this.#issue.getKind();
    }
    isForHiddenIssue() {
        return this.#issue.isHidden();
    }
    toggle(expand) {
        if (expand || (expand === undefined && !this.expanded)) {
            this.expand();
        }
        else {
            this.collapse();
        }
    }
}
//# sourceMappingURL=IssueView.js.map

/***/ }),

/***/ "./ui/components/markdown_view/markdown_view.js":
/*!******************************************************!*\
  !*** ./ui/components/markdown_view/markdown_view.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeBlock: () => (/* reexport module object */ _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   MarkdownImage: () => (/* reexport module object */ _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   MarkdownImagesMap: () => (/* reexport module object */ _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   MarkdownLink: () => (/* reexport module object */ _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   MarkdownLinksMap: () => (/* reexport module object */ _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   MarkdownView: () => (/* reexport module object */ _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__)
/* harmony export */ });
/* harmony import */ var _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeBlock.js */ "./ui/components/markdown_view/CodeBlock.js");
/* harmony import */ var _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownImage.js */ "./ui/components/markdown_view/MarkdownImage.js");
/* harmony import */ var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./ui/components/markdown_view/MarkdownImagesMap.js");
/* harmony import */ var _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownLink.js */ "./ui/components/markdown_view/MarkdownLink.js");
/* harmony import */ var _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLinksMap.js */ "./ui/components/markdown_view/MarkdownLinksMap.js");
/* harmony import */ var _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MarkdownView.js */ "./ui/components/markdown_view/MarkdownView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







//# sourceMappingURL=markdown_view.js.map

/***/ })

}]);