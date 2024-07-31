"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_settings_components_SyncSection_ts"],{

/***/ "./src/panels/settings/components/SyncSection.ts":
/*!*******************************************************!*\
  !*** ./src/panels/settings/components/SyncSection.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyncSection: () => (/* binding */ SyncSection)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_components_settings_settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/settings/settings.js */ "./src/ui/components/settings/settings.ts");
/* harmony import */ var _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/chrome_link/chrome_link.js */ "./src/ui/components/chrome_link/chrome_link.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './syncSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _SyncSection_instances, _SyncSection_shadow, _SyncSection_syncInfo, _SyncSection_syncSetting, _SyncSection_boundRender, _SyncSection_render;







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
    constructor() {
        super(...arguments);
        _SyncSection_instances.add(this);
        _SyncSection_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _SyncSection_syncInfo.set(this, { isSyncActive: false });
        _SyncSection_syncSetting.set(this, void 0);
        _SyncSection_boundRender.set(this, __classPrivateFieldGet(this, _SyncSection_instances, "m", _SyncSection_render).bind(this));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _SyncSection_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './syncSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _SyncSection_syncInfo, data.syncInfo, "f");
        __classPrivateFieldSet(this, _SyncSection_syncSetting, data.syncSetting, "f");
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _SyncSection_boundRender, "f"));
    }
}
_SyncSection_shadow = new WeakMap(), _SyncSection_syncInfo = new WeakMap(), _SyncSection_syncSetting = new WeakMap(), _SyncSection_boundRender = new WeakMap(), _SyncSection_instances = new WeakSet(), _SyncSection_render = function _SyncSection_render() {
    if (!__classPrivateFieldGet(this, _SyncSection_syncSetting, "f")) {
        throw new Error('SyncSection not properly initialized');
    }
    // TODO: this should not probably happen in render, instead, the setting
    // should be disabled.
    const checkboxDisabled = !__classPrivateFieldGet(this, _SyncSection_syncInfo, "f").isSyncActive || !__classPrivateFieldGet(this, _SyncSection_syncInfo, "f").arePreferencesSynced;
    __classPrivateFieldGet(this, _SyncSection_syncSetting, "f")?.setDisabled(checkboxDisabled);
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <fieldset>
        <legend>${_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.getLocalizedSettingsCategory(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.SYNC)}</legend>
        ${renderAccountInfoOrWarning(__classPrivateFieldGet(this, _SyncSection_syncInfo, "f"))}
        <${_ui_components_settings_settings_js__WEBPACK_IMPORTED_MODULE_4__.SettingCheckbox.SettingCheckbox.litTagName} .data=${{ setting: __classPrivateFieldGet(this, _SyncSection_syncSetting, "f") }}>
        </${_ui_components_settings_settings_js__WEBPACK_IMPORTED_MODULE_4__.SettingCheckbox.SettingCheckbox.litTagName}>
      </fieldset>
    `, __classPrivateFieldGet(this, _SyncSection_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(SyncSection, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-sync-section`
});
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


/***/ }),

/***/ "./src/ui/components/chrome_link/ChromeLink.ts":
/*!*****************************************************!*\
  !*** ./src/ui/components/chrome_link/ChromeLink.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeLink: () => (/* binding */ ChromeLink)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './chromeLink.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _ChromeLink_instances, _ChromeLink_shadow, _ChromeLink_boundRender, _ChromeLink_href, _ChromeLink_handleClick, _ChromeLink_render;








// Use this component to render links to 'chrome://...'-URLs
// (for which regular <x-link>s do not work).
class ChromeLink extends HTMLElement {
    constructor() {
        super(...arguments);
        _ChromeLink_instances.add(this);
        _ChromeLink_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ChromeLink_boundRender.set(this, __classPrivateFieldGet(this, _ChromeLink_instances, "m", _ChromeLink_render).bind(this));
        _ChromeLink_href.set(this, '');
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ChromeLink_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './chromeLink.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _ChromeLink_boundRender, "f"));
    }
    set href(href) {
        if (!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.schemeIs(href, 'chrome:')) {
            throw new Error('ChromeLink href needs to start with \'chrome://\'');
        }
        __classPrivateFieldSet(this, _ChromeLink_href, href, "f");
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _ChromeLink_boundRender, "f"));
    }
}
_ChromeLink_shadow = new WeakMap(), _ChromeLink_boundRender = new WeakMap(), _ChromeLink_href = new WeakMap(), _ChromeLink_instances = new WeakSet(), _ChromeLink_handleClick = function _ChromeLink_handleClick(event) {
    const rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().rootTarget();
    if (rootTarget === null) {
        return;
    }
    const url = __classPrivateFieldGet(this, _ChromeLink_href, "f");
    void rootTarget.targetAgent().invoke_createTarget({ url }).then(result => {
        if (result.getError()) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(url);
        }
    });
    event.consume(true);
}, _ChromeLink_render = function _ChromeLink_render() {
    const urlForContext = new URL(__classPrivateFieldGet(this, _ChromeLink_href, "f"));
    urlForContext.search = '';
    const jslogContext = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(urlForContext.toString());
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(
    /* x-link doesn't work with custom click/keydown handlers */
    /* eslint-disable rulesdir/ban_a_tags_in_lit_html */
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <a href=${__classPrivateFieldGet(this, _ChromeLink_href, "f")} class="link" target="_blank"
          jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.link().track({ click: true }).context(jslogContext)}
          @click=${__classPrivateFieldGet(this, _ChromeLink_instances, "m", _ChromeLink_handleClick)}><slot></slot></a>
      `, __classPrivateFieldGet(this, _ChromeLink_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ChromeLink, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-chrome-link`
});
customElements.define('devtools-chrome-link', ChromeLink);


/***/ }),

/***/ "./src/ui/components/chrome_link/chrome_link.ts":
/*!******************************************************!*\
  !*** ./src/ui/components/chrome_link/chrome_link.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeLink: () => (/* reexport module object */ _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromeLink.js */ "./src/ui/components/chrome_link/ChromeLink.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);