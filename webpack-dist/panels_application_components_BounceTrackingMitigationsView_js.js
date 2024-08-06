"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_components_BounceTrackingMitigationsView_js"],{

/***/ "./panels/application/components/BounceTrackingMitigationsView.js":
/*!************************************************************************!*\
  !*** ./panels/application/components/BounceTrackingMitigationsView.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BounceTrackingMitigationsView: () => (/* binding */ BounceTrackingMitigationsView),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/chrome_link/chrome_link.js */ "./ui/components/chrome_link/chrome_link.js");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _bounceTrackingMitigationsView_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bounceTrackingMitigationsView.css.js */ "./panels/application/components/bounceTrackingMitigationsView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










const UIStrings = {
    /**
     * @description Title text in bounce tracking mitigations view of the Application panel.
     */
    bounceTrackingMitigationsTitle: 'Bounce tracking mitigations',
    /**
     * @description Label for the button to force bounce tracking mitigations to run.
     */
    forceRun: 'Force run',
    /**
     * @description Label for the disabled button while bounce tracking mitigations are running
     */
    runningMitigations: 'Running',
    /**
     * @description Heading of table which displays sites whose state was deleted by bounce tracking mitigations.
     */
    stateDeletedFor: 'State was deleted for the following sites:',
    /**
     * @description Text shown once the deletion command has been sent to the browser process.
     */
    checkingPotentialTrackers: 'Checking for potential bounce tracking sites.',
    /**
     * @description Link text about explanation of Bounce Tracking Mitigations.
     */
    learnMore: 'Learn more: Bounce Tracking Mitigations',
    /**
     * @description Text shown when bounce tracking mitigations have been forced to run and
     * identified no potential bounce tracking sites to delete state for. This may also
     * indicate that bounce tracking mitigations are disabled or third-party cookies aren't being blocked.
     */
    noPotentialBounceTrackersIdentified: 'State was not cleared for any potential bounce tracking sites. Either none were identified or third-party cookies are not blocked.',
    /**
     * @description Text shown when bounce tracking mitigations bounce tracking mitigations are disabled. Has a link.
     * @example {Bounce Tracking Mitigations Feature Flag} PH1
     */
    featureDisabled: 'Bounce tracking mitigations are disabled. To enable them, set the flag at {PH1} to "Enabled With Deletion".',
    /**
     * @description Text for link to Bounce Tracking Mitigations feature flag entry in the chrome://flags page.
     */
    featureFlag: 'Bounce Tracking Mitigations Feature Flag',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/BounceTrackingMitigationsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class BounceTrackingMitigationsView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__.LegacyWrapper.WrappableComponent {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.literal `devtools-bounce-tracking-mitigations-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #trackingSites = [];
    #screenStatus = "Result" /* ScreenStatusType.Result */;
    #checkedFeature = false;
    #seenButtonClick = false;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_bounceTrackingMitigationsView_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]];
        void this.#render();
    }
    async #render() {
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.Report.litTagName} .data=${{ reportTitle: i18nString(UIStrings.bounceTrackingMitigationsTitle) }}
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('bounce-tracking-mitigations')}>
        ${await this.#renderMainFrameInformation()}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.Report.litTagName}>
    `, this.#shadow, { host: this });
        // clang-format on
    }
    async #renderMainFrameInformation() {
        if (!this.#checkedFeature) {
            await this.#checkFeatureState();
        }
        if (this.#screenStatus === "Disabled" /* ScreenStatusType.Disabled */) {
            const mitigationsFlagLink = new _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_3__.ChromeLink.ChromeLink();
            mitigationsFlagLink.href = 'chrome://flags/#bounce-tracking-mitigations';
            mitigationsFlagLink.textContent = i18nString(UIStrings.featureFlag);
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName}>
          ${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getFormatLocalizedString(str_, UIStrings.featureDisabled, { PH1: mitigationsFlagLink })}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName}>
      `;
            // clang-format on
        }
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName}>
        ${this.#renderForceRunButton()}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName}>
        ${this.#renderDeletedSitesOrNoSitesMessage()}
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionDivider.litTagName}>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionDivider.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName}>
        <x-link href="https://privacycg.github.io/nav-tracking-mitigations/#bounce-tracking-mitigations" class="link"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.link('learn-more').track({ click: true })}>
          ${i18nString(UIStrings.learnMore)}
        </x-link>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName}>
    `;
        // clang-format on
    }
    #renderForceRunButton() {
        const isMitigationRunning = (this.#screenStatus === "Running" /* ScreenStatusType.Running */);
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
        aria-label=${i18nString(UIStrings.forceRun)}
        .disabled=${isMitigationRunning}
        .spinner=${isMitigationRunning}
        .variant=${"primary" /* Buttons.Button.Variant.PRIMARY */}
        @click=${this.#runMitigations}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('force-run').track({ click: true })}>
        ${isMitigationRunning ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
          ${i18nString(UIStrings.runningMitigations)}` : `
          ${i18nString(UIStrings.forceRun)}
        `}
      </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
    `;
        // clang-format on
    }
    #renderDeletedSitesOrNoSitesMessage() {
        if (!this.#seenButtonClick) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html ``;
        }
        if (this.#trackingSites.length === 0) {
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName}>
        ${(this.#screenStatus === "Running" /* ScreenStatusType.Running */) ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
          ${i18nString(UIStrings.checkingPotentialTrackers)}` : `
          ${i18nString(UIStrings.noPotentialBounceTrackersIdentified)}
        `}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName}>
      `;
            // clang-format on
        }
        const gridData = {
            columns: [
                {
                    id: 'sites',
                    title: i18nString(UIStrings.stateDeletedFor),
                    widthWeighting: 10,
                    hideable: false,
                    visible: true,
                    sortable: true,
                },
            ],
            rows: this.#buildRowsFromDeletedSites(),
            initialSort: {
                columnId: 'sites',
                direction: "ASC" /* DataGrid.DataGridUtils.SortDirection.ASC */,
            },
        };
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName}>
        <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName} .data=${gridData}>
        </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName}>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName}>
    `;
        // clang-format on
    }
    async #runMitigations() {
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!mainTarget) {
            return;
        }
        this.#seenButtonClick = true;
        this.#screenStatus = "Running" /* ScreenStatusType.Running */;
        void this.#render();
        const response = await mainTarget.storageAgent().invoke_runBounceTrackingMitigations();
        this.#trackingSites = [];
        response.deletedSites.forEach(element => {
            this.#trackingSites.push(element);
        });
        this.#renderMitigationsResult();
    }
    #renderMitigationsResult() {
        this.#screenStatus = "Result" /* ScreenStatusType.Result */;
        void this.#render();
    }
    #buildRowsFromDeletedSites() {
        const trackingSites = this.#trackingSites;
        return trackingSites.map(site => ({
            cells: [
                { columnId: 'sites', value: site },
            ],
        }));
    }
    async #checkFeatureState() {
        this.#checkedFeature = true;
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!mainTarget) {
            return;
        }
        if (!(await mainTarget.systemInfo().invoke_getFeatureState({ featureState: 'DIPS' })).featureEnabled) {
            this.#screenStatus = "Disabled" /* ScreenStatusType.Disabled */;
        }
    }
}
customElements.define('devtools-bounce-tracking-mitigations-view', BounceTrackingMitigationsView);
//# sourceMappingURL=BounceTrackingMitigationsView.js.map

/***/ }),

/***/ "./panels/application/components/bounceTrackingMitigationsView.css.js":
/*!****************************************************************************!*\
  !*** ./panels/application/components/bounceTrackingMitigationsView.css.js ***!
  \****************************************************************************/
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
 * Copyright (c) 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
devtools-data-grid-controller {
  border: 1px solid var(--sys-color-divider);
  margin-top: 0;
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

@media (forced-colors: active) {
  .link,
  .devtools-link {
    color: linktext;
    text-decoration-color: linktext;
  }
}

/*# sourceURL=bounceTrackingMitigationsView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);