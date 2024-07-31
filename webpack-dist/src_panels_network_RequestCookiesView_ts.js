"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_RequestCookiesView_ts"],{

/***/ "./src/panels/network/RequestCookiesView.ts":
/*!**************************************************!*\
  !*** ./src/panels/network/RequestCookiesView.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestCookiesView: () => (/* binding */ RequestCookiesView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_components_cookie_table_cookie_table_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/cookie_table/cookie_table.js */ "./src/ui/legacy/components/cookie_table/cookie_table.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './requestCookiesView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */









const UIStrings = {
    /**
     *@description Text in Request Cookies View of the Network panel
     */
    thisRequestHasNoCookies: 'This request has no cookies.',
    /**
     * @description Title for a table which shows all of the cookies associated with a selected network
     * request, in the Network panel. Noun phrase.
     */
    requestCookies: 'Request Cookies',
    /**
     *@description Tooltip to explain what request cookies are
     */
    cookiesThatWereSentToTheServerIn: 'Cookies that were sent to the server in the \'cookie\' header of the request',
    /**
     *@description Label for showing request cookies that were not actually sent
     */
    showFilteredOutRequestCookies: 'show filtered out request cookies',
    /**
     *@description Text in Request Headers View of the Network Panel
     */
    noRequestCookiesWereSent: 'No request cookies were sent.',
    /**
     *@description Text in Request Cookies View of the Network panel
     */
    responseCookies: 'Response Cookies',
    /**
     *@description Tooltip to explain what response cookies are
     */
    cookiesThatWereReceivedFromThe: 'Cookies that were received from the server in the \'`set-cookie`\' header of the response',
    /**
     *@description Label for response cookies with invalid syntax
     */
    malformedResponseCookies: 'Malformed Response Cookies',
    /**
     * @description Tooltip to explain what malformed response cookies are. Malformed cookies are
     * cookies that did not match the expected format and could not be interpreted, and are invalid.
     */
    cookiesThatWereReceivedFromTheServer: 'Cookies that were received from the server in the \'`set-cookie`\' header of the response but were malformed',
    /**
     * @description Informational text to explain that there were other cookies
     * that were not used and not shown in the list.
     * @example {Learn more} PH1
     *
     */
    siteHasCookieInOtherPartition: 'This site has cookies in another partition, that were not sent with this request. {PH1}',
    /**
     * @description Title of a link to the developer documentation.
     */
    learnMore: 'Learn more',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/network/RequestCookiesView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class RequestCookiesView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.Widget {
    constructor(request) {
        super();
        Object.defineProperty(this, "request", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showFilteredOutCookiesSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "emptyWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "requestCookiesTitle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "requestCookiesEmpty", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "requestCookiesTable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "responseCookiesTitle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "responseCookiesTable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "siteHasCookieInOtherPartition", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "malformedResponseCookiesTitle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "malformedResponseCookiesList", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.classList.add('request-cookies-view');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('cookies').track({ resize: true })}`);
        this.request = request;
        this.showFilteredOutCookiesSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('show-filtered-out-request-cookies', /* defaultValue */ false);
        this.emptyWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.EmptyWidget.EmptyWidget(i18nString(UIStrings.thisRequestHasNoCookies));
        this.emptyWidget.show(this.element);
        this.requestCookiesTitle = this.element.createChild('div');
        const titleText = this.requestCookiesTitle.createChild('span', 'request-cookies-title');
        titleText.textContent = i18nString(UIStrings.requestCookies);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(titleText, i18nString(UIStrings.cookiesThatWereSentToTheServerIn));
        const requestCookiesCheckbox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.SettingsUI.createSettingCheckbox(i18nString(UIStrings.showFilteredOutRequestCookies), this.showFilteredOutCookiesSetting, true);
        requestCookiesCheckbox.checkboxElement.addEventListener('change', () => {
            this.refreshRequestCookiesView();
        });
        this.requestCookiesTitle.appendChild(requestCookiesCheckbox);
        this.requestCookiesEmpty = this.element.createChild('div', 'cookies-panel-item');
        this.requestCookiesEmpty.textContent = i18nString(UIStrings.noRequestCookiesWereSent);
        this.requestCookiesTable = new _ui_legacy_components_cookie_table_cookie_table_js__WEBPACK_IMPORTED_MODULE_5__.CookiesTable.CookiesTable(/* renderInline */ true);
        this.requestCookiesTable.contentElement.classList.add('cookie-table', 'cookies-panel-item');
        this.requestCookiesTable.show(this.element);
        this.siteHasCookieInOtherPartition =
            this.element.createChild('div', 'cookies-panel-item site-has-cookies-in-other-partition');
        this.siteHasCookieInOtherPartition.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.siteHasCookieInOtherPartition, {
            PH1: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.XLink.XLink.create('https://developer.chrome.com/en/docs/privacy-sandbox/chips/', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more'),
        }));
        this.responseCookiesTitle = this.element.createChild('div', 'request-cookies-title');
        this.responseCookiesTitle.textContent = i18nString(UIStrings.responseCookies);
        this.responseCookiesTitle.title = i18nString(UIStrings.cookiesThatWereReceivedFromThe);
        this.responseCookiesTable = new _ui_legacy_components_cookie_table_cookie_table_js__WEBPACK_IMPORTED_MODULE_5__.CookiesTable.CookiesTable(/* renderInline */ true);
        this.responseCookiesTable.contentElement.classList.add('cookie-table', 'cookies-panel-item');
        this.responseCookiesTable.show(this.element);
        this.malformedResponseCookiesTitle = this.element.createChild('div', 'request-cookies-title');
        this.malformedResponseCookiesTitle.textContent = i18nString(UIStrings.malformedResponseCookies);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(this.malformedResponseCookiesTitle, i18nString(UIStrings.cookiesThatWereReceivedFromTheServer));
        this.malformedResponseCookiesList = this.element.createChild('div');
    }
    getRequestCookies() {
        const requestCookieToBlockedReasons = new Map();
        const requestCookieToExemptionReason = new Map();
        const requestCookies = this.request.includedRequestCookies().map(includedRequestCookie => includedRequestCookie.cookie);
        if (this.showFilteredOutCookiesSetting.get()) {
            for (const blockedCookie of this.request.blockedRequestCookies()) {
                requestCookieToBlockedReasons.set(blockedCookie.cookie, blockedCookie.blockedReasons.map(blockedReason => {
                    return {
                        attribute: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.cookieBlockedReasonToAttribute(blockedReason),
                        uiString: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.cookieBlockedReasonToUiString(blockedReason),
                    };
                }));
                requestCookies.push(blockedCookie.cookie);
            }
        }
        for (const includedCookie of this.request.includedRequestCookies()) {
            if (includedCookie.exemptionReason) {
                requestCookieToExemptionReason.set(includedCookie.cookie, {
                    uiString: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.cookieExemptionReasonToUiString(includedCookie.exemptionReason),
                });
            }
        }
        return { requestCookies, requestCookieToBlockedReasons, requestCookieToExemptionReason };
    }
    getResponseCookies() {
        let responseCookies = [];
        const responseCookieToBlockedReasons = new Map();
        const responseCookieToExemptionReason = new Map();
        const malformedResponseCookies = [];
        if (this.request.responseCookies.length) {
            responseCookies = this.request.nonBlockedResponseCookies();
            for (const blockedCookie of this.request.blockedResponseCookies()) {
                const parsedCookies = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CookieParser.CookieParser.parseSetCookie(blockedCookie.cookieLine);
                if ((parsedCookies && !parsedCookies.length) ||
                    blockedCookie.blockedReasons.includes(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.SetCookieBlockedReason.SyntaxError) ||
                    blockedCookie.blockedReasons.includes(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.SetCookieBlockedReason.NameValuePairExceedsMaxSize)) {
                    malformedResponseCookies.push(blockedCookie);
                    continue;
                }
                let cookie = blockedCookie.cookie;
                if (!cookie && parsedCookies) {
                    cookie = parsedCookies[0];
                }
                if (cookie) {
                    responseCookieToBlockedReasons.set(cookie, blockedCookie.blockedReasons.map(blockedReason => {
                        return {
                            attribute: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.setCookieBlockedReasonToAttribute(blockedReason),
                            uiString: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.setCookieBlockedReasonToUiString(blockedReason),
                        };
                    }));
                    responseCookies.push(cookie);
                }
            }
            for (const exemptedCookie of this.request.exemptedResponseCookies()) {
                // `responseCookies` are generated from `Set-Cookie` header, which should include the exempted cookies, whereas
                // exempted cookies are received via CDP as objects of type cookie. Therefore they are different objects in
                // DevTools and need to be matched here in order for the rendering logic to be able to lookup a potential
                // exemption reason for a cookie.
                const matchedResponseCookie = responseCookies.find(responseCookie => exemptedCookie.cookieLine === responseCookie.getCookieLine());
                if (matchedResponseCookie) {
                    responseCookieToExemptionReason.set(matchedResponseCookie, {
                        uiString: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.cookieExemptionReasonToUiString(exemptedCookie.exemptionReason),
                    });
                }
            }
        }
        return { responseCookies, responseCookieToBlockedReasons, responseCookieToExemptionReason, malformedResponseCookies };
    }
    refreshRequestCookiesView() {
        if (!this.isShowing()) {
            return;
        }
        const gotCookies = this.request.hasRequestCookies() || this.request.responseCookies.length;
        if (gotCookies) {
            this.emptyWidget.hideWidget();
        }
        else {
            this.emptyWidget.showWidget();
        }
        const { requestCookies, requestCookieToBlockedReasons, requestCookieToExemptionReason } = this.getRequestCookies();
        const { responseCookies, responseCookieToBlockedReasons, responseCookieToExemptionReason, malformedResponseCookies } = this.getResponseCookies();
        if (requestCookies.length) {
            this.requestCookiesTitle.classList.remove('hidden');
            this.requestCookiesEmpty.classList.add('hidden');
            this.requestCookiesTable.showWidget();
            this.requestCookiesTable.setCookies(requestCookies, requestCookieToBlockedReasons, requestCookieToExemptionReason);
        }
        else if (this.request.blockedRequestCookies().length) {
            this.requestCookiesTitle.classList.remove('hidden');
            this.requestCookiesEmpty.classList.remove('hidden');
            this.requestCookiesTable.hideWidget();
        }
        else {
            this.requestCookiesTitle.classList.add('hidden');
            this.requestCookiesEmpty.classList.add('hidden');
            this.requestCookiesTable.hideWidget();
        }
        if (responseCookies.length) {
            this.responseCookiesTitle.classList.remove('hidden');
            this.responseCookiesTable.showWidget();
            this.responseCookiesTable.setCookies(responseCookies, responseCookieToBlockedReasons, responseCookieToExemptionReason);
        }
        else {
            this.responseCookiesTitle.classList.add('hidden');
            this.responseCookiesTable.hideWidget();
        }
        if (malformedResponseCookies.length) {
            this.malformedResponseCookiesTitle.classList.remove('hidden');
            this.malformedResponseCookiesList.classList.remove('hidden');
            this.malformedResponseCookiesList.removeChildren();
            for (const malformedCookie of malformedResponseCookies) {
                const listItem = this.malformedResponseCookiesList.createChild('span', 'cookie-line source-code');
                const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
                icon.data = { iconName: 'cross-circle-filled', color: 'var(--icon-error)', width: '14px', height: '14px' };
                icon.classList.add('cookie-warning-icon');
                listItem.appendChild(icon);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(listItem, malformedCookie.cookieLine);
                if (malformedCookie.blockedReasons.includes(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.SetCookieBlockedReason.NameValuePairExceedsMaxSize)) {
                    listItem.title = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.setCookieBlockedReasonToUiString(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.SetCookieBlockedReason.NameValuePairExceedsMaxSize);
                }
                else {
                    listItem.title =
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.setCookieBlockedReasonToUiString(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.SetCookieBlockedReason.SyntaxError);
                }
            }
        }
        else {
            this.malformedResponseCookiesTitle.classList.add('hidden');
            this.malformedResponseCookiesList.classList.add('hidden');
        }
        if (this.request.siteHasCookieInOtherPartition()) {
            this.siteHasCookieInOtherPartition.classList.remove('hidden');
        }
        else {
            this.siteHasCookieInOtherPartition.classList.add('hidden');
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './requestCookiesView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.request.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.Events.RequestHeadersChanged, this.refreshRequestCookiesView, this);
        this.request.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.Events.ResponseHeadersChanged, this.refreshRequestCookiesView, this);
        this.refreshRequestCookiesView();
    }
    willHide() {
        this.request.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.Events.RequestHeadersChanged, this.refreshRequestCookiesView, this);
        this.request.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.Events.ResponseHeadersChanged, this.refreshRequestCookiesView, this);
    }
}


/***/ }),

/***/ "./src/ui/legacy/components/cookie_table/cookie_table.ts":
/*!***************************************************************!*\
  !*** ./src/ui/legacy/components/cookie_table/cookie_table.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CookiesTable: () => (/* reexport module object */ _CookiesTable_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _CookiesTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CookiesTable.js */ "./src/ui/legacy/components/cookie_table/CookiesTable.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);