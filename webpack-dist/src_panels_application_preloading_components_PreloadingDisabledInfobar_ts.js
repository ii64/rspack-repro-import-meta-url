"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_preloading_components_PreloadingDisabledInfobar_ts"],{

/***/ "./src/panels/application/preloading/components/PreloadingDisabledInfobar.ts":
/*!***********************************************************************************!*\
  !*** ./src/panels/application/preloading/components/PreloadingDisabledInfobar.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloadingDisabledInfobar: () => (/* binding */ PreloadingDisabledInfobar)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ui/components/chrome_link/chrome_link.js */ "./src/ui/components/chrome_link/chrome_link.ts");
/* harmony import */ var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui/components/dialogs/dialogs.js */ "./src/ui/components/dialogs/dialogs.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/report_view/report_view.js */ "./src/ui/components/report_view/report_view.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './preloadingDisabledInfobar.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _PreloadingDisabledInfobar_instances, _PreloadingDisabledInfobar_shadow, _PreloadingDisabledInfobar_data, _PreloadingDisabledInfobar_render, _PreloadingDisabledInfobar_renderInternal, _PreloadingDisabledInfobar_dialogContents, _PreloadingDisabledInfobar_maybeKeyValue, _PreloadingDisabledInfobar_maybeDisalebByPreference, _PreloadingDisabledInfobar_maybeDisalebByDataSaver, _PreloadingDisabledInfobar_maybeDisalebByBatterySaver, _PreloadingDisabledInfobar_maybeDisalebByHoldbackPrefetchSpeculationRules, _PreloadingDisabledInfobar_maybeDisalebByHoldbackPrerenderSpeculationRules;











const UIStrings = {
    /**
     *@description Infobar text for disabled case
     */
    infobarPreloadingIsDisabled: 'Speculative loading is disabled',
    /**
     *@description Infobar text for force-enabled case
     */
    infobarPreloadingIsForceEnabled: 'Speculative loading is force-enabled',
    /**
     *@description Title for dialog
     */
    titleReasonsPreventingPreloading: 'Reasons preventing speculative loading',
    /**
     *@description Header in dialog
     */
    headerDisabledByPreference: 'User settings or extensions',
    /**
     *@description Description in dialog
     *@example {Preload pages settings (linked to chrome://settings/performance)} PH1
     *@example {Extensions settings (linked to chrome://extensions)} PH2
     */
    descriptionDisabledByPreference: 'Speculative loading is disabled because of user settings or an extension. Go to {PH1} to update your preference. Go to {PH2} to disable any extension that blocks speculative loading.',
    /**
     *@description Text of link
     */
    preloadingPagesSettings: 'Preload pages settings',
    /**
     *@description Text of link
     */
    extensionsSettings: 'Extensions settings',
    /**
     *@description Header in dialog
     */
    headerDisabledByDataSaver: 'Data Saver',
    /**
     *@description Description in dialog
     */
    descriptionDisabledByDataSaver: 'Speculative loading is disabled because of the operating system\'s Data Saver mode.',
    /**
     *@description Header in dialog
     */
    headerDisabledByBatterySaver: 'Battery Saver',
    /**
     *@description Description in dialog
     */
    descriptionDisabledByBatterySaver: 'Speculative loading is disabled because of the operating system\'s Battery Saver mode.',
    /**
     *@description Header in dialog
     */
    headerDisabledByHoldbackPrefetchSpeculationRules: 'Prefetch was disabled, but is force-enabled now',
    /**
     *@description Description in infobar
     */
    descriptionDisabledByHoldbackPrefetchSpeculationRules: 'Prefetch is forced-enabled because DevTools is open. When DevTools is closed, prefetch will be disabled because this browser session is part of a holdback group used for performance comparisons.',
    /**
     *@description Header in dialog
     */
    headerDisabledByHoldbackPrerenderSpeculationRules: 'Prerendering was disabled, but is force-enabled now',
    /**
     *@description Description in infobar
     */
    descriptionDisabledByHoldbackPrerenderSpeculationRules: 'Prerendering is forced-enabled because DevTools is open. When DevTools is closed, prerendering will be disabled because this browser session is part of a holdback group used for performance comparisons.',
    /**
     *@description Footer link for more details
     */
    footerLearnMore: 'Learn more',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/preloading/components/PreloadingDisabledInfobar.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
class PreloadingDisabledInfobar extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_4__.LegacyWrapper.WrappableComponent {
    constructor() {
        super(...arguments);
        _PreloadingDisabledInfobar_instances.add(this);
        _PreloadingDisabledInfobar_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _PreloadingDisabledInfobar_data.set(this, {
            disabledByPreference: false,
            disabledByDataSaver: false,
            disabledByBatterySaver: false,
            disabledByHoldbackPrefetchSpeculationRules: false,
            disabledByHoldbackPrerenderSpeculationRules: false,
        });
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _PreloadingDisabledInfobar_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './preloadingDisabledInfobar.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        void __classPrivateFieldGet(this, _PreloadingDisabledInfobar_instances, "m", _PreloadingDisabledInfobar_render).call(this);
    }
    set data(data) {
        __classPrivateFieldSet(this, _PreloadingDisabledInfobar_data, data, "f");
        void __classPrivateFieldGet(this, _PreloadingDisabledInfobar_instances, "m", _PreloadingDisabledInfobar_render).call(this);
    }
}
_PreloadingDisabledInfobar_shadow = new WeakMap(), _PreloadingDisabledInfobar_data = new WeakMap(), _PreloadingDisabledInfobar_instances = new WeakSet(), _PreloadingDisabledInfobar_render = async function _PreloadingDisabledInfobar_render() {
    await coordinator.write('PreloadingDisabledInfobar render', () => {
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.render(__classPrivateFieldGet(this, _PreloadingDisabledInfobar_instances, "m", _PreloadingDisabledInfobar_renderInternal).call(this), __classPrivateFieldGet(this, _PreloadingDisabledInfobar_shadow, "f"), { host: this });
    });
}, _PreloadingDisabledInfobar_renderInternal = function _PreloadingDisabledInfobar_renderInternal() {
    const forceEnabled = __classPrivateFieldGet(this, _PreloadingDisabledInfobar_data, "f").disabledByHoldbackPrefetchSpeculationRules || __classPrivateFieldGet(this, _PreloadingDisabledInfobar_data, "f").disabledByHoldbackPrerenderSpeculationRules;
    const disabled = __classPrivateFieldGet(this, _PreloadingDisabledInfobar_data, "f").disabledByPreference || __classPrivateFieldGet(this, _PreloadingDisabledInfobar_data, "f").disabledByDataSaver || __classPrivateFieldGet(this, _PreloadingDisabledInfobar_data, "f").disabledByBatterySaver;
    let header;
    if (disabled) {
        header = i18nString(UIStrings.infobarPreloadingIsDisabled);
    }
    else if (forceEnabled) {
        header = i18nString(UIStrings.infobarPreloadingIsForceEnabled);
    }
    else {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      <div id='container'>
        <span id='header'>
          ${header}
        </span>

        <${_ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__.IconDialog.IconDialog.litTagName}
          .data=${{
        iconData: {
            iconName: 'info',
            color: 'var(--icon-default-hover)',
            width: '16px',
            height: '16px',
        },
        closeButton: true,
        position: _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__.Dialog.DialogVerticalPosition.AUTO,
        horizontalAlignment: _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__.Dialog.DialogHorizontalAlignment.AUTO,
        closeOnESC: true,
        closeOnScroll: false,
    }}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.dialog('preloading-disabled').track({ resize: true, keydown: 'Escape' })}
        >
          ${__classPrivateFieldGet(this, _PreloadingDisabledInfobar_instances, "m", _PreloadingDisabledInfobar_dialogContents).call(this)}
        </${_ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__.IconDialog.IconDialog.litTagName}>
      </div>
    `;
    // clang-format on
}, _PreloadingDisabledInfobar_dialogContents = function _PreloadingDisabledInfobar_dialogContents() {
    const LINK = 'https://developer.chrome.com/blog/prerender-pages/';
    const learnMoreLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.XLink.XLink.create(LINK, i18nString(UIStrings.footerLearnMore), undefined, undefined, 'learn-more');
    const iconLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.html `
      <x-link class="icon-link devtools-link" tabindex="0" href="${LINK}"></x-link>
    `;
    const iconLinkIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon();
    iconLinkIcon
        .data = { iconName: 'open-externally', color: 'var(--icon-default-hover)', width: '16px', height: '16px' };
    iconLink.append(iconLinkIcon);
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      <div id='contents'>
        <div id='title'>${i18nString(UIStrings.titleReasonsPreventingPreloading)}</div>

        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.Report.litTagName}>
          ${__classPrivateFieldGet(this, _PreloadingDisabledInfobar_instances, "m", _PreloadingDisabledInfobar_maybeDisalebByPreference).call(this)}
          ${__classPrivateFieldGet(this, _PreloadingDisabledInfobar_instances, "m", _PreloadingDisabledInfobar_maybeDisalebByDataSaver).call(this)}
          ${__classPrivateFieldGet(this, _PreloadingDisabledInfobar_instances, "m", _PreloadingDisabledInfobar_maybeDisalebByBatterySaver).call(this)}
          ${__classPrivateFieldGet(this, _PreloadingDisabledInfobar_instances, "m", _PreloadingDisabledInfobar_maybeDisalebByHoldbackPrefetchSpeculationRules).call(this)}
          ${__classPrivateFieldGet(this, _PreloadingDisabledInfobar_instances, "m", _PreloadingDisabledInfobar_maybeDisalebByHoldbackPrerenderSpeculationRules).call(this)}

          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionDivider.litTagName}>
          </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionDivider.litTagName}>
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.Report.litTagName}>

        <div id='footer'>
          ${learnMoreLink}
          ${iconLink}
        </div>
      </div>
    `;
}, _PreloadingDisabledInfobar_maybeKeyValue = function _PreloadingDisabledInfobar_maybeKeyValue(shouldShow, header, description) {
    if (!shouldShow) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      <div class='key'>
        ${header}
      </div>
      <div class='value'>
        ${description}
      </div>
    `;
}, _PreloadingDisabledInfobar_maybeDisalebByPreference = function _PreloadingDisabledInfobar_maybeDisalebByPreference() {
    const preloadingSettingLink = new _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_1__.ChromeLink.ChromeLink();
    preloadingSettingLink.href = 'chrome://settings/performance';
    preloadingSettingLink.textContent = i18nString(UIStrings.preloadingPagesSettings);
    const extensionsSettingLink = new _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_1__.ChromeLink.ChromeLink();
    extensionsSettingLink.href = 'chrome://extensions';
    extensionsSettingLink.textContent = i18nString(UIStrings.extensionsSettings);
    const description = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getFormatLocalizedString(str_, UIStrings.descriptionDisabledByPreference, { PH1: preloadingSettingLink, PH2: extensionsSettingLink });
    return __classPrivateFieldGet(this, _PreloadingDisabledInfobar_instances, "m", _PreloadingDisabledInfobar_maybeKeyValue).call(this, __classPrivateFieldGet(this, _PreloadingDisabledInfobar_data, "f").disabledByPreference, i18nString(UIStrings.headerDisabledByPreference), description);
}, _PreloadingDisabledInfobar_maybeDisalebByDataSaver = function _PreloadingDisabledInfobar_maybeDisalebByDataSaver() {
    return __classPrivateFieldGet(this, _PreloadingDisabledInfobar_instances, "m", _PreloadingDisabledInfobar_maybeKeyValue).call(this, __classPrivateFieldGet(this, _PreloadingDisabledInfobar_data, "f").disabledByDataSaver, i18nString(UIStrings.headerDisabledByDataSaver), i18nString(UIStrings.descriptionDisabledByDataSaver));
}, _PreloadingDisabledInfobar_maybeDisalebByBatterySaver = function _PreloadingDisabledInfobar_maybeDisalebByBatterySaver() {
    return __classPrivateFieldGet(this, _PreloadingDisabledInfobar_instances, "m", _PreloadingDisabledInfobar_maybeKeyValue).call(this, __classPrivateFieldGet(this, _PreloadingDisabledInfobar_data, "f").disabledByBatterySaver, i18nString(UIStrings.headerDisabledByBatterySaver), i18nString(UIStrings.descriptionDisabledByBatterySaver));
}, _PreloadingDisabledInfobar_maybeDisalebByHoldbackPrefetchSpeculationRules = function _PreloadingDisabledInfobar_maybeDisalebByHoldbackPrefetchSpeculationRules() {
    return __classPrivateFieldGet(this, _PreloadingDisabledInfobar_instances, "m", _PreloadingDisabledInfobar_maybeKeyValue).call(this, __classPrivateFieldGet(this, _PreloadingDisabledInfobar_data, "f").disabledByHoldbackPrefetchSpeculationRules, i18nString(UIStrings.headerDisabledByHoldbackPrefetchSpeculationRules), i18nString(UIStrings.descriptionDisabledByHoldbackPrefetchSpeculationRules));
}, _PreloadingDisabledInfobar_maybeDisalebByHoldbackPrerenderSpeculationRules = function _PreloadingDisabledInfobar_maybeDisalebByHoldbackPrerenderSpeculationRules() {
    return __classPrivateFieldGet(this, _PreloadingDisabledInfobar_instances, "m", _PreloadingDisabledInfobar_maybeKeyValue).call(this, __classPrivateFieldGet(this, _PreloadingDisabledInfobar_data, "f").disabledByHoldbackPrerenderSpeculationRules, i18nString(UIStrings.headerDisabledByHoldbackPrerenderSpeculationRules), i18nString(UIStrings.descriptionDisabledByHoldbackPrerenderSpeculationRules));
};
Object.defineProperty(PreloadingDisabledInfobar, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.literal `devtools-resources-preloading-disabled-infobar`
});
customElements.define('devtools-resources-preloading-disabled-infobar', PreloadingDisabledInfobar);


/***/ })

}]);