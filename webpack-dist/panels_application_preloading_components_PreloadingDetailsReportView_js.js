"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_preloading_components_PreloadingDetailsReportView_js"],{

/***/ "./panels/application/preloading/components/PreloadingDetailsReportView.js":
/*!*********************************************************************************!*\
  !*** ./panels/application/preloading/components/PreloadingDetailsReportView.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloadingDetailsReportView: () => (/* binding */ PreloadingDetailsReportView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */ var _ui_components_request_link_icon_request_link_icon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ui/components/request_link_icon/request_link_icon.js */ "./ui/components/request_link_icon/request_link_icon.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helper/helper.js */ "./panels/application/preloading/helper/helper.js");
/* harmony import */ var _preloadingDetailsReportView_css_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./preloadingDetailsReportView.css.js */ "./panels/application/preloading/components/preloadingDetailsReportView.css.js");
/* harmony import */ var _PreloadingString_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PreloadingString.js */ "./panels/application/preloading/components/PreloadingString.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

















const UIStrings = {
    /**
     *@description Text in PreloadingDetailsReportView of the Application panel
     */
    selectAnElementForMoreDetails: 'Select an element for more details',
    /**
     *@description Text in details
     */
    detailsDetailedInformation: 'Detailed information',
    /**
     *@description Text in details
     */
    detailsAction: 'Action',
    /**
     *@description Text in details
     */
    detailsStatus: 'Status',
    /**
     *@description Text in details
     */
    detailsFailureReason: 'Failure reason',
    /**
     *@description Header of rule set
     */
    detailsRuleSet: 'Rule set',
    /**
     *@description Description: status
     */
    detailedStatusNotTriggered: 'Speculative load attempt is not yet triggered.',
    /**
     *@description Description: status
     */
    detailedStatusPending: 'Speculative load attempt is eligible but pending.',
    /**
     *@description Description: status
     */
    detailedStatusRunning: 'Speculative load is running.',
    /**
     *@description Description: status
     */
    detailedStatusReady: 'Speculative load finished and the result is ready for the next navigation.',
    /**
     *@description Description: status
     */
    detailedStatusSuccess: 'Speculative load finished and used for a navigation.',
    /**
     *@description Description: status
     */
    detailedStatusFailure: 'Speculative load failed.',
    /**
     *@description button: Contents of button to inspect prerendered page
     */
    buttonInspect: 'Inspect',
    /**
     *@description button: Title of button to inspect prerendered page
     */
    buttonClickToInspect: 'Click to inspect prerendered page',
    /**
     *@description button: Title of button to reveal rule set
     */
    buttonClickToRevealRuleSet: 'Click to reveal rule set',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/preloading/components/PreloadingDetailsReportView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class PreloadingUIUtils {
    static detailedStatus({ status }) {
        // See content/public/browser/preloading.h PreloadingAttemptOutcome.
        switch (status) {
            case "NotTriggered" /* SDK.PreloadingModel.PreloadingStatus.NotTriggered */:
                return i18nString(UIStrings.detailedStatusNotTriggered);
            case "Pending" /* SDK.PreloadingModel.PreloadingStatus.Pending */:
                return i18nString(UIStrings.detailedStatusPending);
            case "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */:
                return i18nString(UIStrings.detailedStatusRunning);
            case "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */:
                return i18nString(UIStrings.detailedStatusReady);
            case "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */:
                return i18nString(UIStrings.detailedStatusSuccess);
            case "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */:
                return i18nString(UIStrings.detailedStatusFailure);
            // NotSupported is used to handle unreachable case. For example,
            // there is no code path for
            // PreloadingTriggeringOutcome::kTriggeredButPending in prefetch,
            // which is mapped to NotSupported. So, we regard it as an
            // internal error.
            case "NotSupported" /* SDK.PreloadingModel.PreloadingStatus.NotSupported */:
                return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Internal error');
        }
    }
}
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__.RenderCoordinator.RenderCoordinator.instance();
class PreloadingDetailsReportView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.WrappableComponent {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.literal `devtools-resources-preloading-details-report-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #data = null;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_preloadingDetailsReportView_css_js__WEBPACK_IMPORTED_MODULE_14__["default"]];
    }
    set data(data) {
        this.#data = data;
        void this.#render();
    }
    async #render() {
        await coordinator.write('PreloadingDetailsReportView render', () => {
            if (this.#data === null) {
                // Disabled until https://crbug.com/1079231 is fixed.
                // clang-format off
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html `
          <div class="preloading-noselected">
            <div>
              <p>${i18nString(UIStrings.selectAnElementForMoreDetails)}</p>
            </div>
          </div>
        `, this.#shadow, { host: this });
                // clang-format on
                return;
            }
            const detailedStatus = PreloadingUIUtils.detailedStatus(this.#data.preloadingAttempt);
            const pageURL = this.#data.pageURL;
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.Report.litTagName} .data=${{ reportTitle: 'Speculative Loading Attempt' }}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.section('preloading-details')}>
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.detailsDetailedInformation)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName}>

          ${this.#url()}
          ${this.#action()}

          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.detailsStatus)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>
            ${detailedStatus}
          </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>

          ${this.#maybePrefetchFailureReason()}
          ${this.#maybePrerenderFailureReason()}

          ${this.#data.ruleSets.map(ruleSet => this.#renderRuleSet(ruleSet, pageURL))}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.Report.litTagName}>
      `, this.#shadow, { host: this });
            // clang-format on
        });
    }
    #url() {
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(this.#data);
        const attempt = this.#data.preloadingAttempt;
        let value;
        if (attempt.action === "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ && attempt.requestId !== undefined) {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            value = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html `
          <${_ui_components_request_link_icon_request_link_icon_js__WEBPACK_IMPORTED_MODULE_9__.RequestLinkIcon.RequestLinkIcon.litTagName}
            .data=${{
                affectedRequest: {
                    requestId: attempt.requestId,
                    url: attempt.key.url,
                },
                requestResolver: this.#data.requestResolver || new _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__.RequestResolver.RequestResolver(),
                displayURL: true,
                urlToDisplay: attempt.key.url,
            }}
          >
          </${_ui_components_request_link_icon_request_link_icon_js__WEBPACK_IMPORTED_MODULE_9__.RequestLinkIcon.RequestLinkIcon.litTagName}>
      `;
        }
        else {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            value = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html `
          <div class="text-ellipsis" title=${attempt.key.url}>${attempt.key.url}</div>
      `;
            // clang-format on
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('URL')}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>
          ${value}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>
    `;
        // clang-format on
    }
    #action() {
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(this.#data);
        const attempt = this.#data.preloadingAttempt;
        const action = _PreloadingString_js__WEBPACK_IMPORTED_MODULE_15__.capitalizedAction(this.#data.preloadingAttempt.action);
        let maybeInspectButton = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.nothing;
        (() => {
            if (attempt.action !== "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */) {
                return;
            }
            const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
            if (target === null) {
                return;
            }
            const prerenderTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().targets().find(child => child.targetInfo()?.subtype === 'prerender' && child.inspectedURL() === attempt.key.url);
            const disabled = (prerenderTarget === undefined);
            const inspect = () => {
                if (prerenderTarget === undefined) {
                    return;
                }
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Target, prerenderTarget);
            };
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            maybeInspectButton = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html `
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
            @click=${inspect}
            .title=${i18nString(UIStrings.buttonClickToInspect)}
            .size=${"SMALL" /* Buttons.Button.Size.SMALL */}
            .variant=${"outlined" /* Buttons.Button.Variant.OUTLINED */}
            .disabled=${disabled}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.action('inspect-prerendered-page').track({ click: true })}
          >
            ${i18nString(UIStrings.buttonInspect)}
          </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
      `;
            // clang-format on
        })();
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.detailsAction)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>
          <div class="text-ellipsis" title="">
            ${action}
            ${maybeInspectButton}
          </div>
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>
    `;
        // clang-format on
    }
    #maybePrefetchFailureReason() {
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(this.#data);
        const attempt = this.#data.preloadingAttempt;
        if (attempt.action !== "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.nothing;
        }
        const failureDescription = (0,_PreloadingString_js__WEBPACK_IMPORTED_MODULE_15__.prefetchFailureReason)(attempt);
        if (failureDescription === null) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.nothing;
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.detailsFailureReason)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>
          ${failureDescription}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>
    `;
    }
    #maybePrerenderFailureReason() {
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(this.#data);
        const attempt = this.#data.preloadingAttempt;
        if (attempt.action !== "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.nothing;
        }
        const failureReason = (0,_PreloadingString_js__WEBPACK_IMPORTED_MODULE_15__.prerenderFailureReason)(attempt);
        if (failureReason === null) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.nothing;
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.detailsFailureReason)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>
          ${failureReason}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>
    `;
    }
    #renderRuleSet(ruleSet, pageURL) {
        const revealRuleSetView = () => {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new _helper_helper_js__WEBPACK_IMPORTED_MODULE_13__.PreloadingForward.RuleSetView(ruleSet.id));
        };
        const location = (0,_PreloadingString_js__WEBPACK_IMPORTED_MODULE_15__.ruleSetLocationShort)(ruleSet, pageURL);
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.detailsRuleSet)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>
        <div class="text-ellipsis" title="">
          <button class="link" role="link"
            @click=${revealRuleSetView}
            title=${i18nString(UIStrings.buttonClickToRevealRuleSet)}
            style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.Directives.styleMap({
            color: 'var(--sys-color-primary)',
            'text-decoration': 'underline',
        })}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.action('reveal-rule-set').track({ click: true })}
          >
            ${location}
          </button>
        </div>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>
    `;
        // clang-format on
    }
}
customElements.define('devtools-resources-preloading-details-report-view', PreloadingDetailsReportView);
//# sourceMappingURL=PreloadingDetailsReportView.js.map

/***/ }),

/***/ "./panels/application/preloading/components/preloadingDetailsReportView.css.js":
/*!*************************************************************************************!*\
  !*** ./panels/application/preloading/components/preloadingDetailsReportView.css.js ***!
  \*************************************************************************************/
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

button.link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  padding: 0;
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
  height: 16px;
}

button.link devtools-icon {
  vertical-align: sub;
}

.link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
}

/*# sourceURL=preloadingDetailsReportView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);