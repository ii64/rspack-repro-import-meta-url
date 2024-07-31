"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_issues_AffectedCookiesView_ts"],{

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


/***/ })

}]);