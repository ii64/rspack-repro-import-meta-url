"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_preloading_components_PreloadingDetailsReportView_ts"],{

/***/ "./src/panels/application/preloading/components/PreloadingDetailsReportView.ts":
/*!*************************************************************************************!*\
  !*** ./src/panels/application/preloading/components/PreloadingDetailsReportView.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloadingDetailsReportView: () => (/* binding */ PreloadingDetailsReportView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/logs/logs.js */ "./src/models/logs/logs.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ui/components/report_view/report_view.js */ "./src/ui/components/report_view/report_view.ts");
/* harmony import */ var _ui_components_request_link_icon_request_link_icon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../ui/components/request_link_icon/request_link_icon.js */ "./src/ui/components/request_link_icon/request_link_icon.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../helper/helper.js */ "./src/panels/application/preloading/helper/helper.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './preloadingDetailsReportView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _PreloadingString_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PreloadingString.js */ "./src/panels/application/preloading/components/PreloadingString.ts");
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
var _PreloadingDetailsReportView_instances, _PreloadingDetailsReportView_shadow, _PreloadingDetailsReportView_data, _PreloadingDetailsReportView_render, _PreloadingDetailsReportView_url, _PreloadingDetailsReportView_action, _PreloadingDetailsReportView_maybePrefetchFailureReason, _PreloadingDetailsReportView_maybePrerenderFailureReason, _PreloadingDetailsReportView_renderRuleSet;


















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
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.NotTriggered:
                return i18nString(UIStrings.detailedStatusNotTriggered);
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.Pending:
                return i18nString(UIStrings.detailedStatusPending);
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.Running:
                return i18nString(UIStrings.detailedStatusRunning);
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.Ready:
                return i18nString(UIStrings.detailedStatusReady);
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.Success:
                return i18nString(UIStrings.detailedStatusSuccess);
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.Failure:
                return i18nString(UIStrings.detailedStatusFailure);
            // NotSupported is used to handle unreachable case. For example,
            // there is no code path for
            // PreloadingTriggeringOutcome::kTriggeredButPending in prefetch,
            // which is mapped to NotSupported. So, we regard it as an
            // internal error.
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.NotSupported:
                return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Internal error');
        }
    }
}
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__.RenderCoordinator.RenderCoordinator.instance();
class PreloadingDetailsReportView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_7__.LegacyWrapper.WrappableComponent {
    constructor() {
        super(...arguments);
        _PreloadingDetailsReportView_instances.add(this);
        _PreloadingDetailsReportView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _PreloadingDetailsReportView_data.set(this, null);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _PreloadingDetailsReportView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './preloadingDetailsReportView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _PreloadingDetailsReportView_data, data, "f");
        void __classPrivateFieldGet(this, _PreloadingDetailsReportView_instances, "m", _PreloadingDetailsReportView_render).call(this);
    }
}
_PreloadingDetailsReportView_shadow = new WeakMap(), _PreloadingDetailsReportView_data = new WeakMap(), _PreloadingDetailsReportView_instances = new WeakSet(), _PreloadingDetailsReportView_render = async function _PreloadingDetailsReportView_render() {
    await coordinator.write('PreloadingDetailsReportView render', () => {
        if (__classPrivateFieldGet(this, _PreloadingDetailsReportView_data, "f") === null) {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
          <div class="preloading-noselected">
            <div>
              <p>${i18nString(UIStrings.selectAnElementForMoreDetails)}</p>
            </div>
          </div>
        `, __classPrivateFieldGet(this, _PreloadingDetailsReportView_shadow, "f"), { host: this });
            // clang-format on
            return;
        }
        const detailedStatus = PreloadingUIUtils.detailedStatus(__classPrivateFieldGet(this, _PreloadingDetailsReportView_data, "f").preloadingAttempt);
        const pageURL = __classPrivateFieldGet(this, _PreloadingDetailsReportView_data, "f").pageURL;
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.Report.litTagName} .data=${{ reportTitle: 'Speculative Loading Attempt' }}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.section('preloading-details')}>
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.detailsDetailedInformation)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSectionHeader.litTagName}>

          ${__classPrivateFieldGet(this, _PreloadingDetailsReportView_instances, "m", _PreloadingDetailsReportView_url).call(this)}
          ${__classPrivateFieldGet(this, _PreloadingDetailsReportView_instances, "m", _PreloadingDetailsReportView_action).call(this)}

          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.detailsStatus)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportKey.litTagName}>
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportValue.litTagName}>
            ${detailedStatus}
          </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportValue.litTagName}>

          ${__classPrivateFieldGet(this, _PreloadingDetailsReportView_instances, "m", _PreloadingDetailsReportView_maybePrefetchFailureReason).call(this)}
          ${__classPrivateFieldGet(this, _PreloadingDetailsReportView_instances, "m", _PreloadingDetailsReportView_maybePrerenderFailureReason).call(this)}

          ${__classPrivateFieldGet(this, _PreloadingDetailsReportView_data, "f").ruleSets.map(ruleSet => __classPrivateFieldGet(this, _PreloadingDetailsReportView_instances, "m", _PreloadingDetailsReportView_renderRuleSet).call(this, ruleSet, pageURL))}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.Report.litTagName}>
      `, __classPrivateFieldGet(this, _PreloadingDetailsReportView_shadow, "f"), { host: this });
        // clang-format on
    });
}, _PreloadingDetailsReportView_url = function _PreloadingDetailsReportView_url() {
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(__classPrivateFieldGet(this, _PreloadingDetailsReportView_data, "f"));
    const attempt = __classPrivateFieldGet(this, _PreloadingDetailsReportView_data, "f").preloadingAttempt;
    let value;
    if (attempt.action === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Preload.SpeculationAction.Prefetch && attempt.requestId !== undefined) {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        value = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
          <${_ui_components_request_link_icon_request_link_icon_js__WEBPACK_IMPORTED_MODULE_10__.RequestLinkIcon.RequestLinkIcon.litTagName}
            .data=${{
            affectedRequest: {
                requestId: attempt.requestId,
                url: attempt.key.url,
            },
            requestResolver: __classPrivateFieldGet(this, _PreloadingDetailsReportView_data, "f").requestResolver || new _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_5__.RequestResolver.RequestResolver(),
            displayURL: true,
            urlToDisplay: attempt.key.url,
        }}
          >
          </${_ui_components_request_link_icon_request_link_icon_js__WEBPACK_IMPORTED_MODULE_10__.RequestLinkIcon.RequestLinkIcon.litTagName}>
      `;
    }
    else {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        value = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
          <div class="text-ellipsis" title=${attempt.key.url}>${attempt.key.url}</div>
      `;
        // clang-format on
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportKey.litTagName}>${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('URL')}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportValue.litTagName}>
          ${value}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportValue.litTagName}>
    `;
    // clang-format on
}, _PreloadingDetailsReportView_action = function _PreloadingDetailsReportView_action() {
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(__classPrivateFieldGet(this, _PreloadingDetailsReportView_data, "f"));
    const attempt = __classPrivateFieldGet(this, _PreloadingDetailsReportView_data, "f").preloadingAttempt;
    const action = _PreloadingString_js__WEBPACK_IMPORTED_MODULE_16__.capitalizedAction(__classPrivateFieldGet(this, _PreloadingDetailsReportView_data, "f").preloadingAttempt.action);
    let maybeInspectButton = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
    (() => {
        if (attempt.action !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Preload.SpeculationAction.Prerender) {
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
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Target, prerenderTarget);
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        maybeInspectButton = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_6__.Button.Button.litTagName}
            @click=${inspect}
            .title=${i18nString(UIStrings.buttonClickToInspect)}
            .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_6__.Button.Size.SMALL}
            .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_6__.Button.Variant.OUTLINED}
            .disabled=${disabled}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.action('inspect-prerendered-page').track({ click: true })}
          >
            ${i18nString(UIStrings.buttonInspect)}
          </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_6__.Button.Button.litTagName}>
      `;
        // clang-format on
    })();
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.detailsAction)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportValue.litTagName}>
          <div class="text-ellipsis" title="">
            ${action}
            ${maybeInspectButton}
          </div>
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportValue.litTagName}>
    `;
    // clang-format on
}, _PreloadingDetailsReportView_maybePrefetchFailureReason = function _PreloadingDetailsReportView_maybePrefetchFailureReason() {
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(__classPrivateFieldGet(this, _PreloadingDetailsReportView_data, "f"));
    const attempt = __classPrivateFieldGet(this, _PreloadingDetailsReportView_data, "f").preloadingAttempt;
    if (attempt.action !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Preload.SpeculationAction.Prefetch) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
    }
    const failureDescription = (0,_PreloadingString_js__WEBPACK_IMPORTED_MODULE_16__.prefetchFailureReason)(attempt);
    if (failureDescription === null) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.detailsFailureReason)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportValue.litTagName}>
          ${failureDescription}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportValue.litTagName}>
    `;
}, _PreloadingDetailsReportView_maybePrerenderFailureReason = function _PreloadingDetailsReportView_maybePrerenderFailureReason() {
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(__classPrivateFieldGet(this, _PreloadingDetailsReportView_data, "f"));
    const attempt = __classPrivateFieldGet(this, _PreloadingDetailsReportView_data, "f").preloadingAttempt;
    if (attempt.action !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Preload.SpeculationAction.Prerender) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
    }
    const failureReason = (0,_PreloadingString_js__WEBPACK_IMPORTED_MODULE_16__.prerenderFailureReason)(attempt);
    if (failureReason === null) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.detailsFailureReason)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportValue.litTagName}>
          ${failureReason}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportValue.litTagName}>
    `;
}, _PreloadingDetailsReportView_renderRuleSet = function _PreloadingDetailsReportView_renderRuleSet(ruleSet, pageURL) {
    const revealRuleSetView = () => {
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new _helper_helper_js__WEBPACK_IMPORTED_MODULE_14__.PreloadingForward.RuleSetView(ruleSet.id));
    };
    const location = (0,_PreloadingString_js__WEBPACK_IMPORTED_MODULE_16__.ruleSetLocationShort)(ruleSet, pageURL);
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.detailsRuleSet)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportValue.litTagName}>
        <div class="text-ellipsis" title="">
          <button class="link" role="link"
            @click=${revealRuleSetView}
            title=${i18nString(UIStrings.buttonClickToRevealRuleSet)}
            style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.Directives.styleMap({
        color: 'var(--sys-color-primary)',
        'text-decoration': 'underline',
    })}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.action('reveal-rule-set').track({ click: true })}
          >
            ${location}
          </button>
        </div>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportValue.litTagName}>
    `;
    // clang-format on
};
Object.defineProperty(PreloadingDetailsReportView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.literal `devtools-resources-preloading-details-report-view`
});
customElements.define('devtools-resources-preloading-details-report-view', PreloadingDetailsReportView);


/***/ })

}]);