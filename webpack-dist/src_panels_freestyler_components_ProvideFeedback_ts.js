"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_freestyler_components_ProvideFeedback_ts"],{

/***/ "./src/panels/freestyler/components/ProvideFeedback.ts":
/*!*************************************************************!*\
  !*** ./src/panels/freestyler/components/ProvideFeedback.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProvideFeedback: () => (/* binding */ ProvideFeedback)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./src/ui/components/input/input.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './provideFeedback.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ProvideFeedback_instances, _ProvideFeedback_shadow, _ProvideFeedback_props, _ProvideFeedback_isShowingFeedbackForm, _ProvideFeedback_currentRating, _ProvideFeedback_handleRateClick, _ProvideFeedback_handleClose, _ProvideFeedback_handleSubmit, _ProvideFeedback_handleReportClick, _ProvideFeedback_renderButtons, _ProvideFeedback_renderFeedbackForm, _ProvideFeedback_render;






/*
  * TODO(nvitkov): b/346933425
  * Temporary string that should not be translated
  * as they may change often during development.
  */
const UIStringsTemp = {
    /**
     * @description The title of the button that allows submitting positive
     * feedback about the response for freestyler.
     */
    thumbsUp: 'Thumbs up',
    /**
     * @description The title of the button that allows submitting negative
     * feedback about the response for freestyler.
     */
    thumbsDown: 'Thumbs down',
    /**
     * @description The placeholder text for the feedback input.
     */
    provideFeedbackPlaceholder: 'Provide additional feedback',
    /**
     * @description The disclaimer text that tells the user what will be shared
     * and what will be stored.
     */
    disclaimer: 'Feedback submitted will also include your conversation.',
    /**
     * @description The button text for the action of submitting feedback.
     */
    submit: 'Submit',
    /**
     * @description The header of the feedback form asking.
     */
    whyThisRating: 'Why did you choose this rating? (optional)',
    /**
     * @description The button text for the action that hides the feedback form.
     */
    close: 'Close',
    /**
     * @description The title of the button that opens a page to report a legal
     * issue with the Freestyler message.
     */
    report: 'Report legal issue',
};
// const str_ = i18n.i18n.registerUIStrings('panels/freestyler/components/AiRatings.ts', UIStrings);
// const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);
/* eslint-disable  rulesdir/l10n_i18nString_call_only_with_uistrings */
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString;
const REPORT_URL = 'https://support.google.com/legal/troubleshooter/1114905?hl=en#ts=1115658%2C13380504';
class ProvideFeedback extends HTMLElement {
    constructor(props) {
        super();
        _ProvideFeedback_instances.add(this);
        _ProvideFeedback_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ProvideFeedback_props.set(this, void 0);
        _ProvideFeedback_isShowingFeedbackForm.set(this, false);
        _ProvideFeedback_currentRating.set(this, void 0);
        _ProvideFeedback_handleClose.set(this, () => {
            __classPrivateFieldSet(this, _ProvideFeedback_isShowingFeedbackForm, false, "f");
            __classPrivateFieldGet(this, _ProvideFeedback_instances, "m", _ProvideFeedback_render).call(this);
        });
        _ProvideFeedback_handleSubmit.set(this, (ev) => {
            ev.preventDefault();
            const input = __classPrivateFieldGet(this, _ProvideFeedback_shadow, "f").querySelector('.feedback-input');
            if (!__classPrivateFieldGet(this, _ProvideFeedback_currentRating, "f") || !input || !input.value) {
                return;
            }
            __classPrivateFieldGet(this, _ProvideFeedback_props, "f").onFeedbackSubmit(__classPrivateFieldGet(this, _ProvideFeedback_currentRating, "f"), input.value);
            __classPrivateFieldSet(this, _ProvideFeedback_isShowingFeedbackForm, false, "f");
            __classPrivateFieldGet(this, _ProvideFeedback_instances, "m", _ProvideFeedback_render).call(this);
        });
        _ProvideFeedback_handleReportClick.set(this, () => {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(REPORT_URL);
        });
        __classPrivateFieldSet(this, _ProvideFeedback_props, props, "f");
    }
    set props(props) {
        __classPrivateFieldSet(this, _ProvideFeedback_props, props, "f");
        __classPrivateFieldGet(this, _ProvideFeedback_instances, "m", _ProvideFeedback_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ProvideFeedback_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './provideFeedback.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_3__.textInputStyles];
        __classPrivateFieldGet(this, _ProvideFeedback_instances, "m", _ProvideFeedback_render).call(this);
    }
}
_ProvideFeedback_shadow = new WeakMap(), _ProvideFeedback_props = new WeakMap(), _ProvideFeedback_isShowingFeedbackForm = new WeakMap(), _ProvideFeedback_currentRating = new WeakMap(), _ProvideFeedback_handleClose = new WeakMap(), _ProvideFeedback_handleSubmit = new WeakMap(), _ProvideFeedback_handleReportClick = new WeakMap(), _ProvideFeedback_instances = new WeakSet(), _ProvideFeedback_handleRateClick = function _ProvideFeedback_handleRateClick(rating) {
    if (__classPrivateFieldGet(this, _ProvideFeedback_currentRating, "f") === rating) {
        return;
    }
    __classPrivateFieldSet(this, _ProvideFeedback_currentRating, rating, "f");
    __classPrivateFieldSet(this, _ProvideFeedback_isShowingFeedbackForm, __classPrivateFieldGet(this, _ProvideFeedback_props, "f").canShowFeedbackForm, "f");
    __classPrivateFieldGet(this, _ProvideFeedback_props, "f").onFeedbackSubmit(__classPrivateFieldGet(this, _ProvideFeedback_currentRating, "f"));
    __classPrivateFieldGet(this, _ProvideFeedback_instances, "m", _ProvideFeedback_render).call(this);
}, _ProvideFeedback_renderButtons = function _ProvideFeedback_renderButtons() {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
        .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.ICON,
        size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Size.SMALL,
        iconName: 'thumb-up',
        active: __classPrivateFieldGet(this, _ProvideFeedback_currentRating, "f") === _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.Rating.POSITIVE,
        title: i18nString(UIStringsTemp.thumbsUp),
        jslogContext: 'thumbs-up',
    }}
        @click=${() => __classPrivateFieldGet(this, _ProvideFeedback_instances, "m", _ProvideFeedback_handleRateClick).call(this, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.Rating.POSITIVE)}
      ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
        .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.ICON,
        size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Size.SMALL,
        iconName: 'thumb-down',
        active: __classPrivateFieldGet(this, _ProvideFeedback_currentRating, "f") === _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.Rating.NEGATIVE,
        title: i18nString(UIStringsTemp.thumbsDown),
        jslogContext: 'thumbs-down',
    }}
        @click=${() => __classPrivateFieldGet(this, _ProvideFeedback_instances, "m", _ProvideFeedback_handleRateClick).call(this, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.Rating.NEGATIVE)}
      ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
      <div class="vertical-separator"></div>
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
        .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.ICON,
        size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Size.SMALL,
        title: i18nString(UIStringsTemp.report),
        iconName: 'report',
        jslogContext: 'report',
    }}
        @click=${__classPrivateFieldGet(this, _ProvideFeedback_handleReportClick, "f")}
      ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
    `;
    // clang-format on
}, _ProvideFeedback_renderFeedbackForm = function _ProvideFeedback_renderFeedbackForm() {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
      <form class="feedback" @submit=${__classPrivateFieldGet(this, _ProvideFeedback_handleSubmit, "f")}>
        <div class="feedback-header">
          <h4 class="feedback-title">${i18nString(UIStringsTemp.whyThisRating)}</h4>
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
            aria-label=${i18nString(UIStringsTemp.close)}
            @click=${__classPrivateFieldGet(this, _ProvideFeedback_handleClose, "f")}
            .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.ICON,
        iconName: 'cross',
        size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Size.SMALL,
        title: i18nString(UIStringsTemp.close),
        jslogContext: 'close',
    }}
          ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
        </div>
        <input
          type="text"
          class="devtools-text-input feedback-input"
          placeholder=${i18nString(UIStringsTemp.provideFeedbackPlaceholder)}
        >
        <span class="feedback-disclaimer">${i18nString(UIStringsTemp.disclaimer)}</span>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
        aria-label=${i18nString(UIStringsTemp.submit)}
        .data=${{
        type: 'submit',
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.OUTLINED,
        size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Size.SMALL,
        title: i18nString(UIStringsTemp.submit),
        jslogContext: 'send',
    }}
        >${i18nString(UIStringsTemp.submit)}</${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
      </div>
    `;
    // clang-format on
}, _ProvideFeedback_render = function _ProvideFeedback_render() {
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <div class="rate-buttons">
          ${__classPrivateFieldGet(this, _ProvideFeedback_instances, "m", _ProvideFeedback_renderButtons).call(this)}
          ${__classPrivateFieldGet(this, _ProvideFeedback_isShowingFeedbackForm, "f")
        ? __classPrivateFieldGet(this, _ProvideFeedback_instances, "m", _ProvideFeedback_renderFeedbackForm).call(this)
        : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.nothing}
        </div>`, __classPrivateFieldGet(this, _ProvideFeedback_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ProvideFeedback, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-provide-feedback`
});
customElements.define('devtools-provide-feedback', ProvideFeedback);


/***/ })

}]);