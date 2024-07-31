"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_CookieItemsView_ts"],{

/***/ "./src/panels/application/CookieItemsView.ts":
/*!***************************************************!*\
  !*** ./src/panels/application/CookieItemsView.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CookieItemsView: () => (/* binding */ CookieItemsView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _ui_legacy_components_cookie_table_cookie_table_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/cookie_table/cookie_table.js */ "./src/ui/legacy/components/cookie_table/cookie_table.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cookieItemsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StorageItemsView.js */ "./src/panels/application/StorageItemsView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2009 Apple Inc.  All rights reserved.
 * Copyright (C) 2009 Joseph Pecoraro
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */









const UIStrings = {
    /**
     *@description Label for checkbox to show URL-decoded cookie values
     */
    showUrlDecoded: 'Show URL-decoded',
    /**
     *@description Text for web cookies
     */
    cookies: 'Cookies',
    /**
     *@description Text in Cookie Items View of the Application panel
     */
    selectACookieToPreviewItsValue: 'Select a cookie to preview its value',
    /**
     *@description Text for filter in Cookies View of the Application panel
     */
    onlyShowCookiesWithAnIssue: 'Only show cookies with an issue',
    /**
     *@description Title for filter in the Cookies View of the Application panel
     */
    onlyShowCookiesWhichHaveAn: 'Only show cookies that have an associated issue',
    /**
     *@description Label to only delete the cookies that are visible after filtering
     */
    clearFilteredCookies: 'Clear filtered cookies',
    /**
     *@description Label to delete all cookies
     */
    clearAllCookies: 'Clear all cookies',
    /**
     *@description Alert message for screen reader to announce # of cookies in the table
     *@example {5} PH1
     */
    numberOfCookiesShownInTableS: 'Number of cookies shown in table: {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/CookieItemsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class CookiePreviewWidget extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox {
    constructor() {
        super();
        Object.defineProperty(this, "cookie", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showDecodedSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toggle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.setMinimumSize(230, 45);
        this.cookie = null;
        this.showDecodedSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('cookie-view-show-decoded', false);
        const header = document.createElement('div');
        header.classList.add('cookie-preview-widget-header');
        const span = document.createElement('span');
        span.classList.add('cookie-preview-widget-header-label');
        span.textContent = 'Cookie Value';
        header.appendChild(span);
        this.contentElement.appendChild(header);
        const toggle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.showUrlDecoded), this.showDecodedSetting.get(), undefined, 'show-url-decoded');
        toggle.classList.add('cookie-preview-widget-toggle');
        toggle.checkboxElement.addEventListener('click', () => this.showDecoded(!this.showDecodedSetting.get()));
        header.appendChild(toggle);
        this.toggle = toggle;
        const value = document.createElement('div');
        value.classList.add('cookie-preview-widget-cookie-value');
        value.textContent = '';
        value.addEventListener('dblclick', this.handleDblClickOnCookieValue.bind(this));
        this.value = value;
        this.contentElement.classList.add('cookie-preview-widget');
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.section('cookie-preview')}`);
        this.contentElement.appendChild(value);
    }
    showDecoded(decoded) {
        if (!this.cookie) {
            return;
        }
        this.showDecodedSetting.set(decoded);
        this.toggle.checkboxElement.checked = decoded;
        this.updatePreview();
    }
    updatePreview() {
        if (this.cookie) {
            this.value.textContent =
                this.showDecodedSetting.get() ? decodeURIComponent(this.cookie.value()) : this.cookie.value();
        }
        else {
            this.value.textContent = '';
        }
    }
    setCookie(cookie) {
        this.cookie = cookie;
        this.updatePreview();
    }
    /**
     * Select all text even if there a spaces in it
     */
    handleDblClickOnCookieValue(event) {
        event.preventDefault();
        const range = document.createRange();
        range.selectNode(this.value);
        const selection = window.getSelection();
        if (!selection) {
            return;
        }
        selection.removeAllRanges();
        selection.addRange(range);
    }
}
class CookieItemsView extends _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_8__.StorageItemsView {
    constructor(model, cookieDomain) {
        super(i18nString(UIStrings.cookies), 'cookiesPanel');
        Object.defineProperty(this, "model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cookieDomain", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "totalSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cookiesTable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "splitWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "previewPanel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "previewWidget", {
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
        Object.defineProperty(this, "onlyIssuesFilterUI", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "allCookies", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shownCookies", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectedCookie", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.classList.add('storage-view');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('cookies-data')}`);
        this.model = model;
        this.cookieDomain = cookieDomain;
        this.totalSize = 0;
        this.cookiesTable = new _ui_legacy_components_cookie_table_cookie_table_js__WEBPACK_IMPORTED_MODULE_4__.CookiesTable.CookiesTable(
        /* renderInline */ false, this.saveCookie.bind(this), this.refreshItems.bind(this), this.handleCookieSelected.bind(this), this.deleteCookie.bind(this));
        this.cookiesTable.setMinimumSize(0, 50);
        this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SplitWidget.SplitWidget(
        /* isVertical: */ false, /* secondIsSidebar: */ true, 'cookie-items-split-view-state');
        this.splitWidget.show(this.element);
        this.previewPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox();
        this.previewPanel.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('preview').track({ resize: true })}`);
        const resizer = this.previewPanel.element.createChild('div', 'preview-panel-resizer');
        this.splitWidget.setMainWidget(this.cookiesTable);
        this.splitWidget.setSidebarWidget(this.previewPanel);
        this.splitWidget.installResizer(resizer);
        this.previewWidget = new CookiePreviewWidget();
        this.emptyWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.EmptyWidget.EmptyWidget(i18nString(UIStrings.selectACookieToPreviewItsValue));
        this.emptyWidget.show(this.previewPanel.contentElement);
        this.onlyIssuesFilterUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarCheckbox(i18nString(UIStrings.onlyShowCookiesWithAnIssue), i18nString(UIStrings.onlyShowCookiesWhichHaveAn), () => {
            this.updateWithCookies(this.allCookies);
        }, 'only-show-cookies-with-issues');
        this.appendToolbarItem(this.onlyIssuesFilterUI);
        this.allCookies = [];
        this.shownCookies = [];
        this.selectedCookie = null;
        this.setCookiesDomain(model, cookieDomain);
    }
    setCookiesDomain(model, domain) {
        this.model.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CookieModel.Events.CookieListUpdated, this.onCookieListUpdate, this);
        this.model = model;
        this.cookieDomain = domain;
        this.refreshItems();
        this.model.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CookieModel.Events.CookieListUpdated, this.onCookieListUpdate, this);
    }
    showPreview(cookie) {
        if (cookie === this.selectedCookie) {
            return;
        }
        this.selectedCookie = cookie;
        if (!cookie) {
            this.previewWidget.detach();
            this.emptyWidget.show(this.previewPanel.contentElement);
        }
        else {
            this.emptyWidget.detach();
            this.previewWidget.setCookie(cookie);
            this.previewWidget.show(this.previewPanel.contentElement);
        }
    }
    handleCookieSelected() {
        const cookie = this.cookiesTable.selectedCookie();
        this.setCanDeleteSelected(Boolean(cookie));
        this.showPreview(cookie);
    }
    async saveCookie(newCookie, oldCookie) {
        if (oldCookie && newCookie.key() !== oldCookie.key()) {
            await this.model.deleteCookie(oldCookie);
        }
        return this.model.saveCookie(newCookie);
    }
    deleteCookie(cookie, callback) {
        void this.model.deleteCookie(cookie).then(callback);
    }
    updateWithCookies(allCookies) {
        this.allCookies = allCookies;
        this.totalSize = allCookies.reduce((size, cookie) => size + cookie.size(), 0);
        const parsedURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString(this.cookieDomain);
        const host = parsedURL ? parsedURL.host : '';
        this.cookiesTable.setCookieDomain(host);
        this.shownCookies = this.filter(allCookies, cookie => `${cookie.name()} ${cookie.value()} ${cookie.domain()}`);
        if (this.hasFilter()) {
            this.setDeleteAllTitle(i18nString(UIStrings.clearFilteredCookies));
            this.setDeleteAllGlyph('filter-clear');
        }
        else {
            this.setDeleteAllTitle(i18nString(UIStrings.clearAllCookies));
            this.setDeleteAllGlyph('clear-list');
        }
        this.cookiesTable.setCookies(this.shownCookies, this.model.getCookieToBlockedReasonsMap());
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.numberOfCookiesShownInTableS, { PH1: this.shownCookies.length }));
        this.setCanFilter(true);
        this.setCanDeleteAll(this.shownCookies.length > 0);
        this.setCanDeleteSelected(Boolean(this.cookiesTable.selectedCookie()));
        if (!this.cookiesTable.selectedCookie()) {
            this.showPreview(null);
        }
    }
    filter(items, keyFunction) {
        const predicate = (object) => {
            if (!this.onlyIssuesFilterUI.checked()) {
                return true;
            }
            if (object instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Cookie.Cookie) {
                return _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.RelatedIssue.hasIssues(object);
            }
            return false;
        };
        return super.filter(items, keyFunction).filter(predicate);
    }
    /**
     * This will only delete the currently visible cookies.
     */
    deleteAllItems() {
        this.showPreview(null);
        void this.model.deleteCookies(this.shownCookies);
    }
    deleteSelectedItem() {
        const selectedCookie = this.cookiesTable.selectedCookie();
        if (selectedCookie) {
            this.showPreview(null);
            void this.model.deleteCookie(selectedCookie);
        }
    }
    onCookieListUpdate() {
        void this.model.getCookiesForDomain(this.cookieDomain).then(this.updateWithCookies.bind(this));
    }
    refreshItems() {
        void this.model.getCookiesForDomain(this.cookieDomain, true).then(this.updateWithCookies.bind(this));
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './cookieItemsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}


/***/ })

}]);