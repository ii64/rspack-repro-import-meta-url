"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_issues_IssueView_ts"],{

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


/***/ }),

/***/ "./src/panels/issues/AffectedCookiesView.ts":
/*!**************************************************!*\
  !*** ./src/panels/issues/AffectedCookiesView.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedCookiesView: () => (/* binding */ AffectedCookiesView),
/* harmony export */   AffectedRawCookieLinesView: () => (/* binding */ AffectedRawCookieLinesView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./src/panels/network/forward/forward.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./src/panels/issues/AffectedResourcesView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AffectedCookiesView_instances, _AffectedCookiesView_appendAffectedCookies, _AffectedCookiesView_appendAffectedCookie;






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
    constructor() {
        super(...arguments);
        _AffectedCookiesView_instances.add(this);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nCookies, { n: count });
    }
    update() {
        this.clear();
        __classPrivateFieldGet(this, _AffectedCookiesView_instances, "m", _AffectedCookiesView_appendAffectedCookies).call(this, this.issue.cookiesWithRequestIndicator());
    }
}
_AffectedCookiesView_instances = new WeakSet(), _AffectedCookiesView_appendAffectedCookies = function _AffectedCookiesView_appendAffectedCookies(cookies) {
    const header = document.createElement('tr');
    this.appendColumnTitle(header, i18nString(UIStrings.name));
    this.appendColumnTitle(header, i18nString(UIStrings.domain) + ' & ' + i18nString(UIStrings.path), 'affected-resource-cookie-info-header');
    this.affectedResources.appendChild(header);
    let count = 0;
    for (const cookie of cookies) {
        count++;
        __classPrivateFieldGet(this, _AffectedCookiesView_instances, "m", _AffectedCookiesView_appendAffectedCookie).call(this, cookie.cookie, cookie.hasRequest);
    }
    this.updateAffectedResourceCount(count);
}, _AffectedCookiesView_appendAffectedCookie = function _AffectedCookiesView_appendAffectedCookie(cookie, hasAssociatedRequest) {
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
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened(this.issue.getCategory(), _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_5__.AffectedItem.Cookie);
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
};
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


/***/ }),

/***/ "./src/panels/issues/AffectedDocumentsInQuirksModeView.ts":
/*!****************************************************************!*\
  !*** ./src/panels/issues/AffectedDocumentsInQuirksModeView.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedDocumentsInQuirksModeView: () => (/* binding */ AffectedDocumentsInQuirksModeView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
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
var _AffectedDocumentsInQuirksModeView_instances, _AffectedDocumentsInQuirksModeView_runningUpdatePromise, _AffectedDocumentsInQuirksModeView_doUpdate, _AffectedDocumentsInQuirksModeView_appendQuirksModeDocument, _AffectedDocumentsInQuirksModeView_appendQuirksModeDocuments;



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
    constructor() {
        super(...arguments);
        _AffectedDocumentsInQuirksModeView_instances.add(this);
        _AffectedDocumentsInQuirksModeView_runningUpdatePromise.set(this, Promise.resolve());
    }
    update() {
        // Ensure that doUpdate is invoked atomically by serializing the update calls
        // because it's not re-entrace safe.
        __classPrivateFieldSet(this, _AffectedDocumentsInQuirksModeView_runningUpdatePromise, __classPrivateFieldGet(this, _AffectedDocumentsInQuirksModeView_runningUpdatePromise, "f").then(__classPrivateFieldGet(this, _AffectedDocumentsInQuirksModeView_instances, "m", _AffectedDocumentsInQuirksModeView_doUpdate).bind(this)), "f");
    }
    getResourceName(count) {
        return i18nString(UIStrings.nDocuments, { n: count });
    }
}
_AffectedDocumentsInQuirksModeView_runningUpdatePromise = new WeakMap(), _AffectedDocumentsInQuirksModeView_instances = new WeakSet(), _AffectedDocumentsInQuirksModeView_doUpdate = async function _AffectedDocumentsInQuirksModeView_doUpdate() {
    this.clear();
    await __classPrivateFieldGet(this, _AffectedDocumentsInQuirksModeView_instances, "m", _AffectedDocumentsInQuirksModeView_appendQuirksModeDocuments).call(this, this.issue.getQuirksModeIssues());
}, _AffectedDocumentsInQuirksModeView_appendQuirksModeDocument = async function _AffectedDocumentsInQuirksModeView_appendQuirksModeDocument(issue) {
    const row = document.createElement('tr');
    row.classList.add('affected-resource-quirks-mode');
    const details = issue.details();
    const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager.instance().getFrame(details.frameId)?.resourceTreeModel().target() || null;
    row.appendChild(await this.createElementCell({ nodeName: 'document', backendNodeId: details.documentNodeId, target }, issue.getCategory()));
    this.appendIssueDetailCell(row, details.isLimitedQuirksMode ? 'Limited Quirks Mode' : 'Quirks Mode');
    this.appendIssueDetailCell(row, details.url);
    this.affectedResources.appendChild(row);
}, _AffectedDocumentsInQuirksModeView_appendQuirksModeDocuments = async function _AffectedDocumentsInQuirksModeView_appendQuirksModeDocuments(issues) {
    const header = document.createElement('tr');
    this.appendColumnTitle(header, i18nString(UIStrings.documentInTheDOMTree));
    this.appendColumnTitle(header, i18nString(UIStrings.mode));
    this.appendColumnTitle(header, i18nString(UIStrings.url));
    this.affectedResources.appendChild(header);
    let count = 0;
    for (const issue of issues) {
        count++;
        await __classPrivateFieldGet(this, _AffectedDocumentsInQuirksModeView_instances, "m", _AffectedDocumentsInQuirksModeView_appendQuirksModeDocument).call(this, issue);
    }
    this.updateAffectedResourceCount(count);
};


/***/ }),

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


/***/ }),

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


/***/ }),

/***/ "./src/panels/issues/AffectedMetadataAllowedSitesView.ts":
/*!***************************************************************!*\
  !*** ./src/panels/issues/AffectedMetadataAllowedSitesView.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedMetadataAllowedSitesView: () => (/* binding */ AffectedMetadataAllowedSitesView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./src/panels/issues/AffectedResourcesView.ts");
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


/***/ }),

/***/ "./src/panels/issues/AffectedSharedArrayBufferIssueDetailsView.ts":
/*!************************************************************************!*\
  !*** ./src/panels/issues/AffectedSharedArrayBufferIssueDetailsView.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedSharedArrayBufferIssueDetailsView: () => (/* binding */ AffectedSharedArrayBufferIssueDetailsView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./src/panels/issues/AffectedResourcesView.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AffectedSharedArrayBufferIssueDetailsView_instances, _AffectedSharedArrayBufferIssueDetailsView_appendStatus, _AffectedSharedArrayBufferIssueDetailsView_appendType, _AffectedSharedArrayBufferIssueDetailsView_appendDetails, _AffectedSharedArrayBufferIssueDetailsView_appendDetail;




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
class AffectedSharedArrayBufferIssueDetailsView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__.AffectedResourcesView {
    constructor() {
        super(...arguments);
        _AffectedSharedArrayBufferIssueDetailsView_instances.add(this);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nViolations, { n: count });
    }
    update() {
        this.clear();
        __classPrivateFieldGet(this, _AffectedSharedArrayBufferIssueDetailsView_instances, "m", _AffectedSharedArrayBufferIssueDetailsView_appendDetails).call(this, this.issue.getSharedArrayBufferIssues());
    }
}
_AffectedSharedArrayBufferIssueDetailsView_instances = new WeakSet(), _AffectedSharedArrayBufferIssueDetailsView_appendStatus = function _AffectedSharedArrayBufferIssueDetailsView_appendStatus(element, isWarning) {
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
}, _AffectedSharedArrayBufferIssueDetailsView_appendType = function _AffectedSharedArrayBufferIssueDetailsView_appendType(element, type) {
    const status = document.createElement('td');
    switch (type) {
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Audits.SharedArrayBufferIssueType.CreationIssue:
            status.textContent = i18nString(UIStrings.instantiation);
            status.title = i18nString(UIStrings.aSharedarraybufferWas);
            break;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Audits.SharedArrayBufferIssueType.TransferIssue:
            status.textContent = i18nString(UIStrings.transfer);
            status.title = i18nString(UIStrings.sharedarraybufferWasTransferedTo);
            break;
    }
    element.appendChild(status);
}, _AffectedSharedArrayBufferIssueDetailsView_appendDetails = function _AffectedSharedArrayBufferIssueDetailsView_appendDetails(sabIssues) {
    const header = document.createElement('tr');
    this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
    this.appendColumnTitle(header, i18nString(UIStrings.trigger));
    this.appendColumnTitle(header, i18nString(UIStrings.status));
    this.affectedResources.appendChild(header);
    let count = 0;
    for (const sabIssue of sabIssues) {
        count++;
        __classPrivateFieldGet(this, _AffectedSharedArrayBufferIssueDetailsView_instances, "m", _AffectedSharedArrayBufferIssueDetailsView_appendDetail).call(this, sabIssue);
    }
    this.updateAffectedResourceCount(count);
}, _AffectedSharedArrayBufferIssueDetailsView_appendDetail = function _AffectedSharedArrayBufferIssueDetailsView_appendDetail(sabIssue) {
    const element = document.createElement('tr');
    element.classList.add('affected-resource-directive');
    const sabIssueDetails = sabIssue.details();
    const location = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.toZeroBasedLocation(sabIssueDetails.sourceCodeLocation);
    this.appendSourceLocation(element, location, sabIssue.model()?.getTargetIfNotDisposed());
    __classPrivateFieldGet(this, _AffectedSharedArrayBufferIssueDetailsView_instances, "m", _AffectedSharedArrayBufferIssueDetailsView_appendType).call(this, element, sabIssueDetails.type);
    __classPrivateFieldGet(this, _AffectedSharedArrayBufferIssueDetailsView_instances, "m", _AffectedSharedArrayBufferIssueDetailsView_appendStatus).call(this, element, sabIssueDetails.isWarning);
    this.affectedResources.appendChild(element);
};


/***/ }),

/***/ "./src/panels/issues/AffectedSourcesView.ts":
/*!**************************************************!*\
  !*** ./src/panels/issues/AffectedSourcesView.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedSourcesView: () => (/* binding */ AffectedSourcesView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./src/panels/issues/AffectedResourcesView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AffectedSourcesView_instances, _AffectedSourcesView_appendAffectedSources, _AffectedSourcesView_appendAffectedSource;




const UIStrings = {
    /**
     *@description Singular or Plural label for number of affected sources (consisting of (source) file name + line number) in issue view
     */
    nSources: '{n, plural, =1 {# source} other {# sources}}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedSourcesView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class AffectedSourcesView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__.AffectedResourcesView {
    constructor() {
        super(...arguments);
        _AffectedSourcesView_instances.add(this);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nSources, { n: count });
    }
    update() {
        this.clear();
        __classPrivateFieldGet(this, _AffectedSourcesView_instances, "m", _AffectedSourcesView_appendAffectedSources).call(this, this.issue.sources());
    }
}
_AffectedSourcesView_instances = new WeakSet(), _AffectedSourcesView_appendAffectedSources = function _AffectedSourcesView_appendAffectedSources(affectedSources) {
    let count = 0;
    for (const source of affectedSources) {
        __classPrivateFieldGet(this, _AffectedSourcesView_instances, "m", _AffectedSourcesView_appendAffectedSource).call(this, source);
        count++;
    }
    this.updateAffectedResourceCount(count);
}, _AffectedSourcesView_appendAffectedSource = function _AffectedSourcesView_appendAffectedSource({ url, lineNumber, columnNumber }) {
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
};


/***/ }),

/***/ "./src/panels/issues/AffectedTrackingSitesView.ts":
/*!********************************************************!*\
  !*** ./src/panels/issues/AffectedTrackingSitesView.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedTrackingSitesView: () => (/* binding */ AffectedTrackingSitesView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./src/panels/issues/AffectedResourcesView.ts");
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


/***/ }),

/***/ "./src/panels/issues/AttributionReportingIssueDetailsView.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/issues/AttributionReportingIssueDetailsView.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributionReportingIssueDetailsView: () => (/* binding */ AttributionReportingIssueDetailsView)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./src/panels/issues/AffectedResourcesView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AttributionReportingIssueDetailsView_instances, _AttributionReportingIssueDetailsView_appendDetails, _AttributionReportingIssueDetailsView_appendDetail, _AttributionReportingIssueDetailsView_appendElementOrEmptyCell, _AttributionReportingIssueDetailsView_appendRequestOrEmptyCell;




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
    constructor() {
        super(...arguments);
        _AttributionReportingIssueDetailsView_instances.add(this);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nViolations, { n: count });
    }
    update() {
        this.clear();
        const issues = this.issue.getAttributionReportingIssues();
        if (issues.size > 0) {
            __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendDetails).call(this, issues.values().next().value.code(), issues);
        }
        else {
            this.updateAffectedResourceCount(0);
        }
    }
}
_AttributionReportingIssueDetailsView_instances = new WeakSet(), _AttributionReportingIssueDetailsView_appendDetails = function _AttributionReportingIssueDetailsView_appendDetails(issueCode, issues) {
    const header = document.createElement('tr');
    switch (issueCode) {
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InvalidRegisterSourceHeader:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InvalidRegisterTriggerHeader:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InvalidRegisterOsSourceHeader:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InvalidRegisterOsTriggerHeader:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.OsSourceIgnored:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.OsTriggerIgnored:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.SourceIgnored:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.TriggerIgnored:
            this.appendColumnTitle(header, i18nString(UIStrings.request));
            this.appendColumnTitle(header, i18nString(UIStrings.invalidHeaderValue));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InsecureContext:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.UntrustworthyReportingOrigin:
            this.appendColumnTitle(header, i18nString(UIStrings.element));
            this.appendColumnTitle(header, i18nString(UIStrings.request));
            this.appendColumnTitle(header, i18nString(UIStrings.untrustworthyOrigin));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.PermissionPolicyDisabled:
            this.appendColumnTitle(header, i18nString(UIStrings.element));
            this.appendColumnTitle(header, i18nString(UIStrings.request));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.SourceAndTriggerHeaders:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.WebAndOsHeaders:
            this.appendColumnTitle(header, i18nString(UIStrings.request));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.NavigationRegistrationWithoutTransientUserActivation:
            this.appendColumnTitle(header, i18nString(UIStrings.element));
            break;
    }
    this.affectedResources.appendChild(header);
    let count = 0;
    for (const issue of issues) {
        count++;
        void __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendDetail).call(this, issueCode, issue);
    }
    this.updateAffectedResourceCount(count);
}, _AttributionReportingIssueDetailsView_appendDetail = async function _AttributionReportingIssueDetailsView_appendDetail(issueCode, issue) {
    const element = document.createElement('tr');
    element.classList.add('affected-resource-directive');
    const details = issue.issueDetails;
    switch (issueCode) {
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InvalidRegisterSourceHeader:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InvalidRegisterTriggerHeader:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InvalidRegisterOsSourceHeader:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InvalidRegisterOsTriggerHeader:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.OsSourceIgnored:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.OsTriggerIgnored:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.SourceIgnored:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.TriggerIgnored:
            __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendRequestOrEmptyCell).call(this, element, details.request);
            this.appendIssueDetailCell(element, details.invalidParameter || '');
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.InsecureContext:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.UntrustworthyReportingOrigin:
            await __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendElementOrEmptyCell).call(this, element, issue);
            __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendRequestOrEmptyCell).call(this, element, details.request);
            this.appendIssueDetailCell(element, details.invalidParameter || '');
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.PermissionPolicyDisabled:
            await __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendElementOrEmptyCell).call(this, element, issue);
            __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendRequestOrEmptyCell).call(this, element, details.request);
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.SourceAndTriggerHeaders:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.WebAndOsHeaders:
            __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendRequestOrEmptyCell).call(this, element, details.request);
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.AttributionReportingIssue.IssueCode.NavigationRegistrationWithoutTransientUserActivation:
            await __classPrivateFieldGet(this, _AttributionReportingIssueDetailsView_instances, "m", _AttributionReportingIssueDetailsView_appendElementOrEmptyCell).call(this, element, issue);
            break;
    }
    this.affectedResources.appendChild(element);
}, _AttributionReportingIssueDetailsView_appendElementOrEmptyCell = async function _AttributionReportingIssueDetailsView_appendElementOrEmptyCell(parent, issue) {
    const details = issue.issueDetails;
    if (details.violatingNodeId !== undefined) {
        const target = issue.model()?.target() || null;
        parent.appendChild(await this.createElementCell({ backendNodeId: details.violatingNodeId, target, nodeName: 'Attribution source element' }, issue.getCategory()));
    }
    else {
        this.appendIssueDetailCell(parent, '');
    }
}, _AttributionReportingIssueDetailsView_appendRequestOrEmptyCell = function _AttributionReportingIssueDetailsView_appendRequestOrEmptyCell(parent, request) {
    if (!request) {
        this.appendIssueDetailCell(parent, '');
        return;
    }
    const opts = {
        additionalOnClickAction() {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.issuesPanelResourceOpened(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueCategory.AttributionReporting, _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__.AffectedItem.Request);
        },
    };
    parent.appendChild(this.createRequestCell(request, opts));
};


/***/ }),

/***/ "./src/panels/issues/GenericIssueDetailsView.ts":
/*!******************************************************!*\
  !*** ./src/panels/issues/GenericIssueDetailsView.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericIssueDetailsView: () => (/* binding */ GenericIssueDetailsView)
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
var _GenericIssueDetailsView_instances, _GenericIssueDetailsView_appendDetails, _GenericIssueDetailsView_appendDetail;



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
class GenericIssueDetailsView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_2__.AffectedResourcesView {
    constructor() {
        super(...arguments);
        _GenericIssueDetailsView_instances.add(this);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nResources, { n: count });
    }
    violatingNodeIdName(errorType) {
        switch (errorType) {
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Audits.GenericIssueErrorType.FormLabelForNameError:
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
            __classPrivateFieldGet(this, _GenericIssueDetailsView_instances, "m", _GenericIssueDetailsView_appendDetails).call(this, issues);
        }
        else {
            this.updateAffectedResourceCount(0);
        }
    }
}
_GenericIssueDetailsView_instances = new WeakSet(), _GenericIssueDetailsView_appendDetails = function _GenericIssueDetailsView_appendDetails(genericIssues) {
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
            void __classPrivateFieldGet(this, _GenericIssueDetailsView_instances, "m", _GenericIssueDetailsView_appendDetail).call(this, genericIssue);
        }
    }
    this.updateAffectedResourceCount(count);
}, _GenericIssueDetailsView_appendDetail = async function _GenericIssueDetailsView_appendDetail(genericIssue) {
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
};


/***/ }),

/***/ "./src/panels/issues/IssueView.ts":
/*!****************************************!*\
  !*** ./src/panels/issues/IssueView.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssueView: () => (/* binding */ IssueView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./src/panels/network/forward/forward.ts");
/* harmony import */ var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./src/ui/components/adorners/adorners.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/issue_counter/issue_counter.js */ "./src/ui/components/issue_counter/issue_counter.ts");
/* harmony import */ var _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/components/markdown_view/markdown_view.js */ "./src/ui/components/markdown_view/markdown_view.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _AffectedBlockedByResponseView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AffectedBlockedByResponseView.js */ "./src/panels/issues/AffectedBlockedByResponseView.ts");
/* harmony import */ var _AffectedCookiesView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AffectedCookiesView.js */ "./src/panels/issues/AffectedCookiesView.ts");
/* harmony import */ var _AffectedDirectivesView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AffectedDirectivesView.js */ "./src/panels/issues/AffectedDirectivesView.ts");
/* harmony import */ var _AffectedDocumentsInQuirksModeView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AffectedDocumentsInQuirksModeView.js */ "./src/panels/issues/AffectedDocumentsInQuirksModeView.ts");
/* harmony import */ var _AffectedElementsView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AffectedElementsView.js */ "./src/panels/issues/AffectedElementsView.ts");
/* harmony import */ var _AffectedElementsWithLowContrastView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AffectedElementsWithLowContrastView.js */ "./src/panels/issues/AffectedElementsWithLowContrastView.ts");
/* harmony import */ var _AffectedHeavyAdView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AffectedHeavyAdView.js */ "./src/panels/issues/AffectedHeavyAdView.ts");
/* harmony import */ var _AffectedMetadataAllowedSitesView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./AffectedMetadataAllowedSitesView.js */ "./src/panels/issues/AffectedMetadataAllowedSitesView.ts");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./src/panels/issues/AffectedResourcesView.ts");
/* harmony import */ var _AffectedSharedArrayBufferIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./AffectedSharedArrayBufferIssueDetailsView.js */ "./src/panels/issues/AffectedSharedArrayBufferIssueDetailsView.ts");
/* harmony import */ var _AffectedSourcesView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./AffectedSourcesView.js */ "./src/panels/issues/AffectedSourcesView.ts");
/* harmony import */ var _AffectedTrackingSitesView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./AffectedTrackingSitesView.js */ "./src/panels/issues/AffectedTrackingSitesView.ts");
/* harmony import */ var _AttributionReportingIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./AttributionReportingIssueDetailsView.js */ "./src/panels/issues/AttributionReportingIssueDetailsView.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/issues/components/components.ts");
/* harmony import */ var _CorsIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./CorsIssueDetailsView.js */ "./src/panels/issues/CorsIssueDetailsView.ts");
/* harmony import */ var _GenericIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./GenericIssueDetailsView.js */ "./src/panels/issues/GenericIssueDetailsView.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
var _AffectedRequestsView_instances, _AffectedRequestsView_appendAffectedRequests, _AffectedMixedContentView_instances, _AffectedMixedContentView_appendAffectedMixedContentDetails, _IssueView_instances, _IssueView_issue, _IssueView_description, _IssueView_affectedResourceViews, _IssueView_aggregatedIssuesCount, _IssueView_issueKindIcon, _IssueView_hasBeenExpandedBefore, _IssueView_throttle, _IssueView_needsUpdateOnExpand, _IssueView_hiddenIssuesMenu, _IssueView_contentCreated, _IssueView_updateAffectedResourcesPositionAndSize, _IssueView_appendHeader, _IssueView_updateFromIssue, _IssueView_createAffectedResources, _IssueView_createBody, _IssueView_createReadMoreLinks, _IssueView_doUpdate;




























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
class AffectedRequestsView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_20__.AffectedResourcesView {
    constructor() {
        super(...arguments);
        _AffectedRequestsView_instances.add(this);
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
        if (this.issue.getCategory() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.Issue.IssueCategory.MixedContent) {
            // The AffectedMixedContentView takes care of displaying the resources.
            this.updateAffectedResourceCount(0);
            return;
        }
        __classPrivateFieldGet(this, _AffectedRequestsView_instances, "m", _AffectedRequestsView_appendAffectedRequests).call(this, this.issue.requests());
    }
}
_AffectedRequestsView_instances = new WeakSet(), _AffectedRequestsView_appendAffectedRequests = function _AffectedRequestsView_appendAffectedRequests(affectedRequests) {
    let count = 0;
    for (const affectedRequest of affectedRequests) {
        const element = document.createElement('tr');
        element.classList.add('affected-resource-request');
        const category = this.issue.getCategory();
        const tab = issueTypeToNetworkHeaderMap.get(category) || _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIRequestLocation.UIRequestTabs.HeadersComponent;
        element.appendChild(this.createRequestCell(affectedRequest, {
            networkTab: tab,
            additionalOnClickAction() {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened(category, _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_20__.AffectedItem.Request);
            },
        }));
        this.affectedResources.appendChild(element);
        count++;
    }
    this.updateAffectedResourceCount(count);
};
const issueTypeToNetworkHeaderMap = new Map([
    [
        _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.Issue.IssueCategory.Cookie,
        _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIRequestLocation.UIRequestTabs.Cookies,
    ],
    [
        _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.Issue.IssueCategory.CrossOriginEmbedderPolicy,
        _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIRequestLocation.UIRequestTabs.HeadersComponent,
    ],
    [
        _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.Issue.IssueCategory.MixedContent,
        _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIRequestLocation.UIRequestTabs.HeadersComponent,
    ],
]);
class AffectedMixedContentView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_20__.AffectedResourcesView {
    constructor() {
        super(...arguments);
        _AffectedMixedContentView_instances.add(this);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nResources, { n: count });
    }
    appendAffectedMixedContent(mixedContent) {
        const element = document.createElement('tr');
        element.classList.add('affected-resource-mixed-content');
        if (mixedContent.request) {
            const networkTab = issueTypeToNetworkHeaderMap.get(this.issue.getCategory()) ||
                _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIRequestLocation.UIRequestTabs.HeadersComponent;
            element.appendChild(this.createRequestCell(mixedContent.request, {
                networkTab,
                additionalOnClickAction() {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.Issue.IssueCategory.MixedContent, _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_20__.AffectedItem.Request);
                },
            }));
        }
        else {
            const filename = (0,_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_20__.extractShortPath)(mixedContent.insecureURL);
            const cell = this.appendIssueDetailCell(element, filename, 'affected-resource-mixed-content-info');
            cell.title = mixedContent.insecureURL;
        }
        this.appendIssueDetailCell(element, AffectedMixedContentView.translateStatus(mixedContent.resolutionStatus), 'affected-resource-mixed-content-info');
        this.affectedResources.appendChild(element);
    }
    static translateStatus(resolutionStatus) {
        switch (resolutionStatus) {
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Audits.MixedContentResolutionStatus.MixedContentBlocked:
                return i18nString(UIStrings.blocked);
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Audits.MixedContentResolutionStatus.MixedContentAutomaticallyUpgraded:
                return i18nString(UIStrings.automaticallyUpgraded);
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Audits.MixedContentResolutionStatus.MixedContentWarning:
                return i18nString(UIStrings.warned);
        }
    }
    update() {
        this.clear();
        __classPrivateFieldGet(this, _AffectedMixedContentView_instances, "m", _AffectedMixedContentView_appendAffectedMixedContentDetails).call(this, this.issue.getMixedContentIssues());
    }
}
_AffectedMixedContentView_instances = new WeakSet(), _AffectedMixedContentView_appendAffectedMixedContentDetails = function _AffectedMixedContentView_appendAffectedMixedContentDetails(mixedContentIssues) {
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
};
class IssueView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeElement {
    constructor(issue, description) {
        super();
        _IssueView_instances.add(this);
        _IssueView_issue.set(this, void 0);
        _IssueView_description.set(this, void 0);
        Object.defineProperty(this, "toggleOnClick", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "affectedResources", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _IssueView_affectedResourceViews.set(this, void 0);
        _IssueView_aggregatedIssuesCount.set(this, void 0);
        _IssueView_issueKindIcon.set(this, null);
        _IssueView_hasBeenExpandedBefore.set(this, void 0);
        _IssueView_throttle.set(this, void 0);
        _IssueView_needsUpdateOnExpand.set(this, true);
        _IssueView_hiddenIssuesMenu.set(this, void 0);
        _IssueView_contentCreated.set(this, false);
        __classPrivateFieldSet(this, _IssueView_issue, issue, "f");
        __classPrivateFieldSet(this, _IssueView_description, description, "f");
        __classPrivateFieldSet(this, _IssueView_throttle, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(250), "f");
        this.toggleOnClick = true;
        this.listItemElement.classList.add('issue');
        this.childrenListElement.classList.add('body');
        this.childrenListElement.classList.add(IssueView.getBodyCSSClass(__classPrivateFieldGet(this, _IssueView_issue, "f").getKind()));
        this.affectedResources = __classPrivateFieldGet(this, _IssueView_instances, "m", _IssueView_createAffectedResources).call(this);
        __classPrivateFieldSet(this, _IssueView_affectedResourceViews, [
            new _AffectedCookiesView_js__WEBPACK_IMPORTED_MODULE_13__.AffectedCookiesView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'affected-cookies'),
            new _AffectedElementsView_js__WEBPACK_IMPORTED_MODULE_16__.AffectedElementsView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'affected-elements'),
            new AffectedRequestsView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'affected-requests'),
            new AffectedMixedContentView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'mixed-content-details'),
            new _AffectedSourcesView_js__WEBPACK_IMPORTED_MODULE_22__.AffectedSourcesView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'affected-sources'),
            new _AffectedHeavyAdView_js__WEBPACK_IMPORTED_MODULE_18__.AffectedHeavyAdView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'heavy-ad-details'),
            new _AffectedDirectivesView_js__WEBPACK_IMPORTED_MODULE_14__.AffectedDirectivesView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'directives-details'),
            new _AffectedBlockedByResponseView_js__WEBPACK_IMPORTED_MODULE_12__.AffectedBlockedByResponseView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'blocked-by-response-details'),
            new _AffectedSharedArrayBufferIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_21__.AffectedSharedArrayBufferIssueDetailsView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'sab-details'),
            new _AffectedElementsWithLowContrastView_js__WEBPACK_IMPORTED_MODULE_17__.AffectedElementsWithLowContrastView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'low-contrast-details'),
            new _CorsIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_26__.CorsIssueDetailsView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'cors-details'),
            new _GenericIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_27__.GenericIssueDetailsView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'generic-details'),
            new _AffectedDocumentsInQuirksModeView_js__WEBPACK_IMPORTED_MODULE_15__.AffectedDocumentsInQuirksModeView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'affected-documents'),
            new _AttributionReportingIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_24__.AttributionReportingIssueDetailsView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'attribution-reporting-details'),
            new _AffectedCookiesView_js__WEBPACK_IMPORTED_MODULE_13__.AffectedRawCookieLinesView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'affected-raw-cookies'),
            new _AffectedTrackingSitesView_js__WEBPACK_IMPORTED_MODULE_23__.AffectedTrackingSitesView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'tracking-sites-details'),
            new _AffectedMetadataAllowedSitesView_js__WEBPACK_IMPORTED_MODULE_19__.AffectedMetadataAllowedSitesView(this, __classPrivateFieldGet(this, _IssueView_issue, "f"), 'metadata-allowed-sites-details'),
        ], "f");
        __classPrivateFieldSet(this, _IssueView_hiddenIssuesMenu, new _components_components_js__WEBPACK_IMPORTED_MODULE_25__.HideIssuesMenu.HideIssuesMenu(), "f");
        __classPrivateFieldSet(this, _IssueView_aggregatedIssuesCount, null, "f");
        __classPrivateFieldSet(this, _IssueView_hasBeenExpandedBefore, false, "f");
    }
    /**
     * Sets the issue to take the resources from. Assumes that the description
     * this IssueView was initialized with fits the new issue as well, i.e.
     * title and issue description will not be updated.
     */
    setIssue(issue) {
        if (__classPrivateFieldGet(this, _IssueView_issue, "f") !== issue) {
            __classPrivateFieldSet(this, _IssueView_needsUpdateOnExpand, true, "f");
        }
        __classPrivateFieldSet(this, _IssueView_issue, issue, "f");
        __classPrivateFieldGet(this, _IssueView_affectedResourceViews, "f").forEach(view => view.setIssue(issue));
    }
    static getBodyCSSClass(issueKind) {
        switch (issueKind) {
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.Issue.IssueKind.BreakingChange:
                return 'issue-kind-breaking-change';
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.Issue.IssueKind.PageError:
                return 'issue-kind-page-error';
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.Issue.IssueKind.Improvement:
                return 'issue-kind-improvement';
        }
    }
    getIssueTitle() {
        return __classPrivateFieldGet(this, _IssueView_description, "f").title;
    }
    onattach() {
        if (!__classPrivateFieldGet(this, _IssueView_contentCreated, "f")) {
            this.createContent();
            return;
        }
        this.update();
    }
    createContent() {
        __classPrivateFieldGet(this, _IssueView_instances, "m", _IssueView_appendHeader).call(this);
        __classPrivateFieldGet(this, _IssueView_instances, "m", _IssueView_createBody).call(this);
        this.appendChild(this.affectedResources);
        const visibleAffectedResource = [];
        for (const view of __classPrivateFieldGet(this, _IssueView_affectedResourceViews, "f")) {
            this.appendAffectedResource(view);
            view.update();
            if (!view.isEmpty()) {
                visibleAffectedResource.push(view);
            }
        }
        __classPrivateFieldGet(this, _IssueView_instances, "m", _IssueView_updateAffectedResourcesPositionAndSize).call(this, visibleAffectedResource);
        __classPrivateFieldGet(this, _IssueView_instances, "m", _IssueView_createReadMoreLinks).call(this);
        this.updateAffectedResourceVisibility();
        __classPrivateFieldSet(this, _IssueView_contentCreated, true, "f");
    }
    appendAffectedResource(resource) {
        this.affectedResources.appendChild(resource);
    }
    onexpand() {
        const category = __classPrivateFieldGet(this, _IssueView_issue, "f").getCategory();
        // Handle sub type for cookie issues.
        if (category === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.Issue.IssueCategory.Cookie) {
            const cookieIssueSubCatagory = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CookieIssue.CookieIssue.getSubCategory(__classPrivateFieldGet(this, _IssueView_issue, "f").code());
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelIssueExpanded(cookieIssueSubCatagory);
        }
        else {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelIssueExpanded(category);
        }
        if (__classPrivateFieldGet(this, _IssueView_needsUpdateOnExpand, "f")) {
            __classPrivateFieldGet(this, _IssueView_instances, "m", _IssueView_doUpdate).call(this);
        }
        if (!__classPrivateFieldGet(this, _IssueView_hasBeenExpandedBefore, "f")) {
            __classPrivateFieldSet(this, _IssueView_hasBeenExpandedBefore, true, "f");
            for (const view of __classPrivateFieldGet(this, _IssueView_affectedResourceViews, "f")) {
                view.expandIfOneResource();
            }
        }
    }
    updateAffectedResourceVisibility() {
        const noResources = __classPrivateFieldGet(this, _IssueView_affectedResourceViews, "f").every(view => view.isEmpty());
        this.affectedResources.hidden = noResources;
    }
    update() {
        void __classPrivateFieldGet(this, _IssueView_throttle, "f").schedule(async () => __classPrivateFieldGet(this, _IssueView_instances, "m", _IssueView_doUpdate).call(this));
    }
    clear() {
        __classPrivateFieldGet(this, _IssueView_affectedResourceViews, "f").forEach(view => view.clear());
    }
    getIssueKind() {
        return __classPrivateFieldGet(this, _IssueView_issue, "f").getKind();
    }
    isForHiddenIssue() {
        return __classPrivateFieldGet(this, _IssueView_issue, "f").isHidden();
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
_IssueView_issue = new WeakMap(), _IssueView_description = new WeakMap(), _IssueView_affectedResourceViews = new WeakMap(), _IssueView_aggregatedIssuesCount = new WeakMap(), _IssueView_issueKindIcon = new WeakMap(), _IssueView_hasBeenExpandedBefore = new WeakMap(), _IssueView_throttle = new WeakMap(), _IssueView_needsUpdateOnExpand = new WeakMap(), _IssueView_hiddenIssuesMenu = new WeakMap(), _IssueView_contentCreated = new WeakMap(), _IssueView_instances = new WeakSet(), _IssueView_updateAffectedResourcesPositionAndSize = function _IssueView_updateAffectedResourcesPositionAndSize(visibleAffectedResource) {
    for (let i = 0; i < visibleAffectedResource.length; i++) {
        const element = visibleAffectedResource[i].listItemElement;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setPositionInSet(element, i + 1);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setSetSize(element, visibleAffectedResource.length);
    }
}, _IssueView_appendHeader = function _IssueView_appendHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    __classPrivateFieldSet(this, _IssueView_issueKindIcon, new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon(), "f");
    __classPrivateFieldGet(this, _IssueView_issueKindIcon, "f").classList.add('leading-issue-icon');
    __classPrivateFieldSet(this, _IssueView_aggregatedIssuesCount, document.createElement('span'), "f");
    const countAdorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_6__.Adorner.Adorner();
    countAdorner.data = {
        name: 'countWrapper',
        content: __classPrivateFieldGet(this, _IssueView_aggregatedIssuesCount, "f"),
    };
    countAdorner.classList.add('aggregated-issues-count');
    header.appendChild(__classPrivateFieldGet(this, _IssueView_issueKindIcon, "f"));
    header.appendChild(countAdorner);
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = __classPrivateFieldGet(this, _IssueView_description, "f").title;
    header.appendChild(title);
    if (__classPrivateFieldGet(this, _IssueView_hiddenIssuesMenu, "f")) {
        header.appendChild(__classPrivateFieldGet(this, _IssueView_hiddenIssuesMenu, "f"));
    }
    __classPrivateFieldGet(this, _IssueView_instances, "m", _IssueView_updateFromIssue).call(this);
    this.listItemElement.appendChild(header);
}, _IssueView_updateFromIssue = function _IssueView_updateFromIssue() {
    if (__classPrivateFieldGet(this, _IssueView_issueKindIcon, "f")) {
        const kind = __classPrivateFieldGet(this, _IssueView_issue, "f").getKind();
        __classPrivateFieldGet(this, _IssueView_issueKindIcon, "f").data = _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_8__.IssueCounter.getIssueKindIconData(kind);
        __classPrivateFieldGet(this, _IssueView_issueKindIcon, "f").title = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.Issue.getIssueKindDescription(kind);
    }
    if (__classPrivateFieldGet(this, _IssueView_aggregatedIssuesCount, "f")) {
        __classPrivateFieldGet(this, _IssueView_aggregatedIssuesCount, "f").textContent = `${__classPrivateFieldGet(this, _IssueView_issue, "f").getAggregatedIssuesCount()}`;
    }
    this.listItemElement.classList.toggle('hidden-issue', __classPrivateFieldGet(this, _IssueView_issue, "f").isHidden());
    if (__classPrivateFieldGet(this, _IssueView_hiddenIssuesMenu, "f")) {
        const data = {
            menuItemLabel: __classPrivateFieldGet(this, _IssueView_issue, "f").isHidden() ? i18nString(UIStrings.unhideIssuesLikeThis) :
                i18nString(UIStrings.hideIssuesLikeThis),
            menuItemAction: () => {
                const setting = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.IssuesManager.getHideIssueByCodeSetting();
                const values = setting.get();
                values[__classPrivateFieldGet(this, _IssueView_issue, "f").code()] = __classPrivateFieldGet(this, _IssueView_issue, "f").isHidden() ? _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.IssuesManager.IssueStatus.Unhidden :
                    _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.IssuesManager.IssueStatus.Hidden;
                setting.set(values);
            },
        };
        __classPrivateFieldGet(this, _IssueView_hiddenIssuesMenu, "f").data = data;
    }
}, _IssueView_createAffectedResources = function _IssueView_createAffectedResources() {
    const wrapper = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeElement();
    wrapper.setCollapsible(false);
    wrapper.setExpandable(true);
    wrapper.expand();
    wrapper.selectable = false;
    wrapper.listItemElement.classList.add('affected-resources-label');
    wrapper.listItemElement.textContent = i18nString(UIStrings.affectedResources);
    wrapper.childrenListElement.classList.add('affected-resources');
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setPositionInSet(wrapper.listItemElement, 2);
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setSetSize(wrapper.listItemElement, __classPrivateFieldGet(this, _IssueView_description, "f").links.length === 0 ? 2 : 3);
    return wrapper;
}, _IssueView_createBody = function _IssueView_createBody() {
    const messageElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeElement();
    messageElement.setCollapsible(false);
    messageElement.selectable = false;
    const markdownComponent = new _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_9__.MarkdownView.MarkdownView();
    markdownComponent.data = { tokens: __classPrivateFieldGet(this, _IssueView_description, "f").markdown };
    messageElement.listItemElement.appendChild(markdownComponent);
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setPositionInSet(messageElement.listItemElement, 1);
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setSetSize(messageElement.listItemElement, __classPrivateFieldGet(this, _IssueView_description, "f").links.length === 0 ? 2 : 3);
    this.appendChild(messageElement);
}, _IssueView_createReadMoreLinks = function _IssueView_createReadMoreLinks() {
    if (__classPrivateFieldGet(this, _IssueView_description, "f").links.length === 0) {
        return;
    }
    const linkWrapper = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeElement();
    linkWrapper.setCollapsible(false);
    linkWrapper.listItemElement.classList.add('link-wrapper');
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setPositionInSet(linkWrapper.listItemElement, 3);
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setSetSize(linkWrapper.listItemElement, 3);
    const linkList = linkWrapper.listItemElement.createChild('ul', 'link-list');
    for (const description of __classPrivateFieldGet(this, _IssueView_description, "f").links) {
        const link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Fragment.html `<x-link class="link devtools-link" tabindex="0" href=${description.link}>${i18nString(UIStrings.learnMoreS, { PH1: description.linkTitle })}</x-link>`;
        link.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('learn-more').track({ click: true })}`);
        const linkListItem = linkList.createChild('li');
        linkListItem.appendChild(link);
    }
    this.appendChild(linkWrapper);
}, _IssueView_doUpdate = function _IssueView_doUpdate() {
    if (this.expanded) {
        __classPrivateFieldGet(this, _IssueView_affectedResourceViews, "f").forEach(view => view.update());
        this.updateAffectedResourceVisibility();
    }
    __classPrivateFieldSet(this, _IssueView_needsUpdateOnExpand, !this.expanded, "f");
    __classPrivateFieldGet(this, _IssueView_instances, "m", _IssueView_updateFromIssue).call(this);
};


/***/ }),

/***/ "./src/ui/components/markdown_view/markdown_view.ts":
/*!**********************************************************!*\
  !*** ./src/ui/components/markdown_view/markdown_view.ts ***!
  \**********************************************************/
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
/* harmony import */ var _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeBlock.js */ "./src/ui/components/markdown_view/CodeBlock.ts");
/* harmony import */ var _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownImage.js */ "./src/ui/components/markdown_view/MarkdownImage.ts");
/* harmony import */ var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./src/ui/components/markdown_view/MarkdownImagesMap.ts");
/* harmony import */ var _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownLink.js */ "./src/ui/components/markdown_view/MarkdownLink.ts");
/* harmony import */ var _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLinksMap.js */ "./src/ui/components/markdown_view/MarkdownLinksMap.ts");
/* harmony import */ var _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MarkdownView.js */ "./src/ui/components/markdown_view/MarkdownView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









/***/ })

}]);