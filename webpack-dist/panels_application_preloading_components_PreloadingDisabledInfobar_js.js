"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_preloading_components_PreloadingDisabledInfobar_js"],{

/***/ "./panels/application/preloading/components/PreloadingDisabledInfobar.js":
/*!*******************************************************************************!*\
  !*** ./panels/application/preloading/components/PreloadingDisabledInfobar.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloadingDisabledInfobar: () => (/* binding */ PreloadingDisabledInfobar)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ui/components/chrome_link/chrome_link.js */ "./ui/components/chrome_link/chrome_link.js");
/* harmony import */ var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui/components/dialogs/dialogs.js */ "./ui/components/dialogs/dialogs.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _preloadingDisabledInfobar_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./preloadingDisabledInfobar.css.js */ "./panels/application/preloading/components/preloadingDisabledInfobar.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











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
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.literal `devtools-resources-preloading-disabled-infobar`;
    #shadow = this.attachShadow({ mode: 'open' });
    #data = {
        disabledByPreference: false,
        disabledByDataSaver: false,
        disabledByBatterySaver: false,
        disabledByHoldbackPrefetchSpeculationRules: false,
        disabledByHoldbackPrerenderSpeculationRules: false,
    };
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_preloadingDisabledInfobar_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]];
        void this.#render();
    }
    set data(data) {
        this.#data = data;
        void this.#render();
    }
    async #render() {
        await coordinator.write('PreloadingDisabledInfobar render', () => {
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.render(this.#renderInternal(), this.#shadow, { host: this });
        });
    }
    #renderInternal() {
        const forceEnabled = this.#data.disabledByHoldbackPrefetchSpeculationRules || this.#data.disabledByHoldbackPrerenderSpeculationRules;
        const disabled = this.#data.disabledByPreference || this.#data.disabledByDataSaver || this.#data.disabledByBatterySaver;
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
            position: "auto" /* Dialogs.Dialog.DialogVerticalPosition.AUTO */,
            horizontalAlignment: "auto" /* Dialogs.Dialog.DialogHorizontalAlignment.AUTO */,
            closeOnESC: true,
            closeOnScroll: false,
        }}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.dialog('preloading-disabled').track({ resize: true, keydown: 'Escape' })}
        >
          ${this.#dialogContents()}
        </${_ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__.IconDialog.IconDialog.litTagName}>
      </div>
    `;
        // clang-format on
    }
    #dialogContents() {
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
          ${this.#maybeDisalebByPreference()}
          ${this.#maybeDisalebByDataSaver()}
          ${this.#maybeDisalebByBatterySaver()}
          ${this.#maybeDisalebByHoldbackPrefetchSpeculationRules()}
          ${this.#maybeDisalebByHoldbackPrerenderSpeculationRules()}

          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionDivider.litTagName}>
          </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionDivider.litTagName}>
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.Report.litTagName}>

        <div id='footer'>
          ${learnMoreLink}
          ${iconLink}
        </div>
      </div>
    `;
    }
    #maybeKeyValue(shouldShow, header, description) {
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
    }
    #maybeDisalebByPreference() {
        const preloadingSettingLink = new _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_1__.ChromeLink.ChromeLink();
        preloadingSettingLink.href = 'chrome://settings/performance';
        preloadingSettingLink.textContent = i18nString(UIStrings.preloadingPagesSettings);
        const extensionsSettingLink = new _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_1__.ChromeLink.ChromeLink();
        extensionsSettingLink.href = 'chrome://extensions';
        extensionsSettingLink.textContent = i18nString(UIStrings.extensionsSettings);
        const description = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getFormatLocalizedString(str_, UIStrings.descriptionDisabledByPreference, { PH1: preloadingSettingLink, PH2: extensionsSettingLink });
        return this.#maybeKeyValue(this.#data.disabledByPreference, i18nString(UIStrings.headerDisabledByPreference), description);
    }
    #maybeDisalebByDataSaver() {
        return this.#maybeKeyValue(this.#data.disabledByDataSaver, i18nString(UIStrings.headerDisabledByDataSaver), i18nString(UIStrings.descriptionDisabledByDataSaver));
    }
    #maybeDisalebByBatterySaver() {
        return this.#maybeKeyValue(this.#data.disabledByBatterySaver, i18nString(UIStrings.headerDisabledByBatterySaver), i18nString(UIStrings.descriptionDisabledByBatterySaver));
    }
    #maybeDisalebByHoldbackPrefetchSpeculationRules() {
        return this.#maybeKeyValue(this.#data.disabledByHoldbackPrefetchSpeculationRules, i18nString(UIStrings.headerDisabledByHoldbackPrefetchSpeculationRules), i18nString(UIStrings.descriptionDisabledByHoldbackPrefetchSpeculationRules));
    }
    #maybeDisalebByHoldbackPrerenderSpeculationRules() {
        return this.#maybeKeyValue(this.#data.disabledByHoldbackPrerenderSpeculationRules, i18nString(UIStrings.headerDisabledByHoldbackPrerenderSpeculationRules), i18nString(UIStrings.descriptionDisabledByHoldbackPrerenderSpeculationRules));
    }
}
customElements.define('devtools-resources-preloading-disabled-infobar', PreloadingDisabledInfobar);
//# sourceMappingURL=PreloadingDisabledInfobar.js.map

/***/ }),

/***/ "./panels/application/preloading/components/preloadingDisabledInfobar.css.js":
/*!***********************************************************************************!*\
  !*** ./panels/application/preloading/components/preloadingDisabledInfobar.css.js ***!
  \***********************************************************************************/
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
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

#container {
  padding: 6px 12px;
  border-bottom: 1px solid var(--sys-color-divider);
}

#contents {
  margin-top: 14px;
}

#contents * {
  background: var(--color-background-elevation-dark-only);
}

#title {
  padding-bottom: 12px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid var(--sys-color-divider);
  color: var(--sys-color-token-subtle);
  grid-column-start: span 2;
  font-weight: bold;
}

#contents .key {
  grid-column-start: span 2;
  padding: 12px 0;
  font-weight: bold;
  margin-bottom: -1.2em;
}

#contents .value {
  grid-column-start: span 2;
  padding: 12px 0;
}

#footer {
  padding-top: 12px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--sys-color-token-subtle);
  grid-column-start: span 2;
  font-weight: bold;
}

#footer .icon-link {
  vertical-align: sub;
  float: right;
}

devtools-icon-dialog {
  vertical-align: sub;
}

/*# sourceURL=preloadingDisabledInfobar.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);