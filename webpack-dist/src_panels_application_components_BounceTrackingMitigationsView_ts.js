"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_BounceTrackingMitigationsView_ts"],{

/***/ "./src/panels/application/components/BounceTrackingMitigationsView.ts":
/*!****************************************************************************!*\
  !*** ./src/panels/application/components/BounceTrackingMitigationsView.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BounceTrackingMitigationsView: () => (/* binding */ BounceTrackingMitigationsView),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/chrome_link/chrome_link.js */ "./src/ui/components/chrome_link/chrome_link.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./src/ui/components/report_view/report_view.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './bounceTrackingMitigationsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _BounceTrackingMitigationsView_instances, _BounceTrackingMitigationsView_shadow, _BounceTrackingMitigationsView_trackingSites, _BounceTrackingMitigationsView_screenStatus, _BounceTrackingMitigationsView_checkedFeature, _BounceTrackingMitigationsView_seenButtonClick, _BounceTrackingMitigationsView_render, _BounceTrackingMitigationsView_renderMainFrameInformation, _BounceTrackingMitigationsView_renderForceRunButton, _BounceTrackingMitigationsView_renderDeletedSitesOrNoSitesMessage, _BounceTrackingMitigationsView_runMitigations, _BounceTrackingMitigationsView_renderMitigationsResult, _BounceTrackingMitigationsView_buildRowsFromDeletedSites, _BounceTrackingMitigationsView_checkFeatureState;










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
var ScreenStatusType;
(function (ScreenStatusType) {
    ScreenStatusType["Running"] = "Running";
    ScreenStatusType["Result"] = "Result";
    ScreenStatusType["Disabled"] = "Disabled";
})(ScreenStatusType || (ScreenStatusType = {}));
class BounceTrackingMitigationsView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__.LegacyWrapper.WrappableComponent {
    constructor() {
        super(...arguments);
        _BounceTrackingMitigationsView_instances.add(this);
        _BounceTrackingMitigationsView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _BounceTrackingMitigationsView_trackingSites.set(this, []);
        _BounceTrackingMitigationsView_screenStatus.set(this, ScreenStatusType.Result);
        _BounceTrackingMitigationsView_checkedFeature.set(this, false);
        _BounceTrackingMitigationsView_seenButtonClick.set(this, false);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _BounceTrackingMitigationsView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './bounceTrackingMitigationsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        void __classPrivateFieldGet(this, _BounceTrackingMitigationsView_instances, "m", _BounceTrackingMitigationsView_render).call(this);
    }
}
_BounceTrackingMitigationsView_shadow = new WeakMap(), _BounceTrackingMitigationsView_trackingSites = new WeakMap(), _BounceTrackingMitigationsView_screenStatus = new WeakMap(), _BounceTrackingMitigationsView_checkedFeature = new WeakMap(), _BounceTrackingMitigationsView_seenButtonClick = new WeakMap(), _BounceTrackingMitigationsView_instances = new WeakSet(), _BounceTrackingMitigationsView_render = async function _BounceTrackingMitigationsView_render() {
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.Report.litTagName} .data=${{ reportTitle: i18nString(UIStrings.bounceTrackingMitigationsTitle) }}
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('bounce-tracking-mitigations')}>
        ${await __classPrivateFieldGet(this, _BounceTrackingMitigationsView_instances, "m", _BounceTrackingMitigationsView_renderMainFrameInformation).call(this)}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.Report.litTagName}>
    `, __classPrivateFieldGet(this, _BounceTrackingMitigationsView_shadow, "f"), { host: this });
    // clang-format on
}, _BounceTrackingMitigationsView_renderMainFrameInformation = async function _BounceTrackingMitigationsView_renderMainFrameInformation() {
    if (!__classPrivateFieldGet(this, _BounceTrackingMitigationsView_checkedFeature, "f")) {
        await __classPrivateFieldGet(this, _BounceTrackingMitigationsView_instances, "m", _BounceTrackingMitigationsView_checkFeatureState).call(this);
    }
    if (__classPrivateFieldGet(this, _BounceTrackingMitigationsView_screenStatus, "f") === ScreenStatusType.Disabled) {
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
        ${__classPrivateFieldGet(this, _BounceTrackingMitigationsView_instances, "m", _BounceTrackingMitigationsView_renderForceRunButton).call(this)}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName}>
        ${__classPrivateFieldGet(this, _BounceTrackingMitigationsView_instances, "m", _BounceTrackingMitigationsView_renderDeletedSitesOrNoSitesMessage).call(this)}
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
}, _BounceTrackingMitigationsView_renderForceRunButton = function _BounceTrackingMitigationsView_renderForceRunButton() {
    const isMitigationRunning = (__classPrivateFieldGet(this, _BounceTrackingMitigationsView_screenStatus, "f") === ScreenStatusType.Running);
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
        aria-label=${i18nString(UIStrings.forceRun)}
        .disabled=${isMitigationRunning}
        .spinner=${isMitigationRunning}
        .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY}
        @click=${__classPrivateFieldGet(this, _BounceTrackingMitigationsView_instances, "m", _BounceTrackingMitigationsView_runMitigations)}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('force-run').track({ click: true })}>
        ${isMitigationRunning ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
          ${i18nString(UIStrings.runningMitigations)}` : `
          ${i18nString(UIStrings.forceRun)}
        `}
      </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
    `;
    // clang-format on
}, _BounceTrackingMitigationsView_renderDeletedSitesOrNoSitesMessage = function _BounceTrackingMitigationsView_renderDeletedSitesOrNoSitesMessage() {
    if (!__classPrivateFieldGet(this, _BounceTrackingMitigationsView_seenButtonClick, "f")) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html ``;
    }
    if (__classPrivateFieldGet(this, _BounceTrackingMitigationsView_trackingSites, "f").length === 0) {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName}>
        ${(__classPrivateFieldGet(this, _BounceTrackingMitigationsView_screenStatus, "f") === ScreenStatusType.Running) ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
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
        rows: __classPrivateFieldGet(this, _BounceTrackingMitigationsView_instances, "m", _BounceTrackingMitigationsView_buildRowsFromDeletedSites).call(this),
        initialSort: {
            columnId: 'sites',
            direction: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridUtils.SortDirection.ASC,
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
}, _BounceTrackingMitigationsView_runMitigations = async function _BounceTrackingMitigationsView_runMitigations() {
    const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
    if (!mainTarget) {
        return;
    }
    __classPrivateFieldSet(this, _BounceTrackingMitigationsView_seenButtonClick, true, "f");
    __classPrivateFieldSet(this, _BounceTrackingMitigationsView_screenStatus, ScreenStatusType.Running, "f");
    void __classPrivateFieldGet(this, _BounceTrackingMitigationsView_instances, "m", _BounceTrackingMitigationsView_render).call(this);
    const response = await mainTarget.storageAgent().invoke_runBounceTrackingMitigations();
    __classPrivateFieldSet(this, _BounceTrackingMitigationsView_trackingSites, [], "f");
    response.deletedSites.forEach(element => {
        __classPrivateFieldGet(this, _BounceTrackingMitigationsView_trackingSites, "f").push(element);
    });
    __classPrivateFieldGet(this, _BounceTrackingMitigationsView_instances, "m", _BounceTrackingMitigationsView_renderMitigationsResult).call(this);
}, _BounceTrackingMitigationsView_renderMitigationsResult = function _BounceTrackingMitigationsView_renderMitigationsResult() {
    __classPrivateFieldSet(this, _BounceTrackingMitigationsView_screenStatus, ScreenStatusType.Result, "f");
    void __classPrivateFieldGet(this, _BounceTrackingMitigationsView_instances, "m", _BounceTrackingMitigationsView_render).call(this);
}, _BounceTrackingMitigationsView_buildRowsFromDeletedSites = function _BounceTrackingMitigationsView_buildRowsFromDeletedSites() {
    const trackingSites = __classPrivateFieldGet(this, _BounceTrackingMitigationsView_trackingSites, "f");
    return trackingSites.map(site => ({
        cells: [
            { columnId: 'sites', value: site },
        ],
    }));
}, _BounceTrackingMitigationsView_checkFeatureState = async function _BounceTrackingMitigationsView_checkFeatureState() {
    __classPrivateFieldSet(this, _BounceTrackingMitigationsView_checkedFeature, true, "f");
    const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
    if (!mainTarget) {
        return;
    }
    if (!(await mainTarget.systemInfo().invoke_getFeatureState({ featureState: 'DIPS' })).featureEnabled) {
        __classPrivateFieldSet(this, _BounceTrackingMitigationsView_screenStatus, ScreenStatusType.Disabled, "f");
    }
};
Object.defineProperty(BounceTrackingMitigationsView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.literal `devtools-bounce-tracking-mitigations-view`
});
customElements.define('devtools-bounce-tracking-mitigations-view', BounceTrackingMitigationsView);


/***/ })

}]);