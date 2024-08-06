"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_settings_components_SyncSection_js"],{

/***/ "./panels/settings/components/SyncSection.js":
/*!***************************************************!*\
  !*** ./panels/settings/components/SyncSection.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyncSection: () => (/* binding */ SyncSection)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_components_settings_settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/settings/settings.js */ "./ui/components/settings/settings.js");
/* harmony import */ var _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/chrome_link/chrome_link.js */ "./ui/components/chrome_link/chrome_link.js");
/* harmony import */ var _syncSection_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syncSection.css.js */ "./panels/settings/components/syncSection.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     * @description Text shown to the user in the Settings UI. 'This setting' refers
     * to a checkbox that is disabled.
     */
    syncDisabled: 'To turn this setting on, you must enable Chrome sync.',
    /**
     * @description Text shown to the user in the Settings UI. 'This setting' refers
     * to a checkbox that is disabled.
     */
    preferencesSyncDisabled: 'To turn this setting on, you must first enable settings sync in Chrome.',
    /**
     * @description Label for a link that take the user to the "Sync" section of the
     * chrome settings. The link is shown in the DevTools Settings UI.
     */
    settings: 'Go to Settings',
    /**
     * @description Label for the account email address. Shown in the DevTools Settings UI in
     * front of the email address currently used for Chrome Sync.
     */
    signedIn: 'Signed into Chrome as:',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/settings/components/SyncSection.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class SyncSection extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-sync-section`;
    #shadow = this.attachShadow({ mode: 'open' });
    #syncInfo = { isSyncActive: false };
    #syncSetting;
    #boundRender = this.#render.bind(this);
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_syncSection_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]];
    }
    set data(data) {
        this.#syncInfo = data.syncInfo;
        this.#syncSetting = data.syncSetting;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ScheduledRender.scheduleRender(this, this.#boundRender);
    }
    #render() {
        if (!this.#syncSetting) {
            throw new Error('SyncSection not properly initialized');
        }
        // TODO: this should not probably happen in render, instead, the setting
        // should be disabled.
        const checkboxDisabled = !this.#syncInfo.isSyncActive || !this.#syncInfo.arePreferencesSynced;
        this.#syncSetting?.setDisabled(checkboxDisabled);
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <fieldset>
        <legend>${_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.getLocalizedSettingsCategory("SYNC" /* Common.Settings.SettingCategory.SYNC */)}</legend>
        ${renderAccountInfoOrWarning(this.#syncInfo)}
        <${_ui_components_settings_settings_js__WEBPACK_IMPORTED_MODULE_4__.SettingCheckbox.SettingCheckbox.litTagName} .data=${{ setting: this.#syncSetting }}>
        </${_ui_components_settings_settings_js__WEBPACK_IMPORTED_MODULE_4__.SettingCheckbox.SettingCheckbox.litTagName}>
      </fieldset>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
/* x-link doesn't work with custom click/keydown handlers */
/* eslint-disable rulesdir/ban_a_tags_in_lit_html */
function renderAccountInfoOrWarning(syncInfo) {
    if (!syncInfo.isSyncActive) {
        const link = 'chrome://settings/syncSetup';
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <span class="warning">
        ${i18nString(UIStrings.syncDisabled)}
        <${_ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_5__.ChromeLink.ChromeLink.litTagName} .href=${link}>${i18nString(UIStrings.settings)}</${_ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_5__.ChromeLink.ChromeLink.litTagName}>
      </span>`;
        // clang-format on
    }
    if (!syncInfo.arePreferencesSynced) {
        const link = 'chrome://settings/syncSetup/advanced';
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <span class="warning">
        ${i18nString(UIStrings.preferencesSyncDisabled)}
        <${_ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_5__.ChromeLink.ChromeLink.litTagName} .href=${link}>${i18nString(UIStrings.settings)}</${_ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_5__.ChromeLink.ChromeLink.litTagName}>
      </span>`;
        // clang-format on
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
    <div class="account-info">
      <img src="data:image/png;base64, ${syncInfo.accountImage}" alt="Account avatar" />
      <div class="account-email">
        <span>${i18nString(UIStrings.signedIn)}</span>
        <span>${syncInfo.accountEmail}</span>
      </div>
    </div>`;
}
customElements.define('devtools-sync-section', SyncSection);
//# sourceMappingURL=SyncSection.js.map

/***/ }),

/***/ "./panels/settings/components/syncSection.css.js":
/*!*******************************************************!*\
  !*** ./panels/settings/components/syncSection.css.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  break-inside: avoid;
  display: block;
  padding-bottom: 9px;
  width: 288px;
}

fieldset {
  border: 0;
  margin-left: 20px;
  padding: 0;
}

legend {
  color: var(--sys-color-token-subtle);
  font-size: 120%;
  margin-left: -20px;
  padding: 0;
  text-align: left;
}

.link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

img {
  background-size: 32px 32px;
  border: 0;
  border-radius: 50%;
  display: block;
  height: 32px;
  width: 32px;
}

.warning {
  display: block;
  margin-top: 12px;
}

.account-info {
  display: flex;
  align-items: center;
  margin-top: 12px;
}

.account-email {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
}

/*# sourceURL=syncSection.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/chrome_link/ChromeLink.js":
/*!*************************************************!*\
  !*** ./ui/components/chrome_link/ChromeLink.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeLink: () => (/* binding */ ChromeLink)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _chromeLink_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chromeLink.css.js */ "./ui/components/chrome_link/chromeLink.css.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








// Use this component to render links to 'chrome://...'-URLs
// (for which regular <x-link>s do not work).
class ChromeLink extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-chrome-link`;
    #shadow = this.attachShadow({ mode: 'open' });
    #boundRender = this.#render.bind(this);
    #href = '';
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_chromeLink_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]];
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, this.#boundRender);
    }
    set href(href) {
        if (!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.schemeIs(href, 'chrome:')) {
            throw new Error('ChromeLink href needs to start with \'chrome://\'');
        }
        this.#href = href;
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, this.#boundRender);
    }
    // Navigating to a chrome:// link via a normal anchor doesn't work, so we "navigate"
    // there using CDP.
    #handleClick(event) {
        const rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().rootTarget();
        if (rootTarget === null) {
            return;
        }
        const url = this.#href;
        void rootTarget.targetAgent().invoke_createTarget({ url }).then(result => {
            if (result.getError()) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(url);
            }
        });
        event.consume(true);
    }
    #render() {
        const urlForContext = new URL(this.#href);
        urlForContext.search = '';
        const jslogContext = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(urlForContext.toString());
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(
        /* x-link doesn't work with custom click/keydown handlers */
        /* eslint-disable rulesdir/ban_a_tags_in_lit_html */
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <a href=${this.#href} class="link" target="_blank"
          jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.link().track({ click: true }).context(jslogContext)}
          @click=${this.#handleClick}><slot></slot></a>
      `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-chrome-link', ChromeLink);
//# sourceMappingURL=ChromeLink.js.map

/***/ }),

/***/ "./ui/components/chrome_link/chromeLink.css.js":
/*!*****************************************************!*\
  !*** ./ui/components/chrome_link/chromeLink.css.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

/*# sourceURL=chromeLink.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/chrome_link/chrome_link.js":
/*!**************************************************!*\
  !*** ./ui/components/chrome_link/chrome_link.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeLink: () => (/* reexport module object */ _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromeLink.js */ "./ui/components/chrome_link/ChromeLink.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=chrome_link.js.map

/***/ })

}]);