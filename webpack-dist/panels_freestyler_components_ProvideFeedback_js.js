"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_freestyler_components_ProvideFeedback_js"],{

/***/ "./panels/freestyler/components/ProvideFeedback.js":
/*!*********************************************************!*\
  !*** ./panels/freestyler/components/ProvideFeedback.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProvideFeedback: () => (/* binding */ ProvideFeedback)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _provideFeedback_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./provideFeedback.css.js */ "./panels/freestyler/components/provideFeedback.css.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






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
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-provide-feedback`;
    #shadow = this.attachShadow({ mode: 'open' });
    #props;
    #isShowingFeedbackForm = false;
    #currentRating;
    constructor(props) {
        super();
        this.#props = props;
    }
    set props(props) {
        this.#props = props;
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_provideFeedback_css_js__WEBPACK_IMPORTED_MODULE_5__["default"], _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_3__.textInputStyles];
        this.#render();
    }
    #handleRateClick(rating) {
        if (this.#currentRating === rating) {
            return;
        }
        this.#currentRating = rating;
        this.#isShowingFeedbackForm = this.#props.canShowFeedbackForm;
        this.#props.onFeedbackSubmit(this.#currentRating);
        this.#render();
    }
    #handleClose = () => {
        this.#isShowingFeedbackForm = false;
        this.#render();
    };
    #handleSubmit = (ev) => {
        ev.preventDefault();
        const input = this.#shadow.querySelector('.feedback-input');
        if (!this.#currentRating || !input || !input.value) {
            return;
        }
        this.#props.onFeedbackSubmit(this.#currentRating, input.value);
        this.#isShowingFeedbackForm = false;
        this.#render();
    };
    #handleReportClick = () => {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(REPORT_URL);
    };
    #renderButtons() {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
        .data=${{
            variant: "icon" /* Buttons.Button.Variant.ICON */,
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
            iconName: 'thumb-up',
            active: this.#currentRating === "POSITIVE" /* Host.AidaClient.Rating.POSITIVE */,
            title: i18nString(UIStringsTemp.thumbsUp),
            jslogContext: 'thumbs-up',
        }}
        @click=${() => this.#handleRateClick("POSITIVE" /* Host.AidaClient.Rating.POSITIVE */)}
      ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
        .data=${{
            variant: "icon" /* Buttons.Button.Variant.ICON */,
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
            iconName: 'thumb-down',
            active: this.#currentRating === "NEGATIVE" /* Host.AidaClient.Rating.NEGATIVE */,
            title: i18nString(UIStringsTemp.thumbsDown),
            jslogContext: 'thumbs-down',
        }}
        @click=${() => this.#handleRateClick("NEGATIVE" /* Host.AidaClient.Rating.NEGATIVE */)}
      ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
      <div class="vertical-separator"></div>
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
        .data=${{
            variant: "icon" /* Buttons.Button.Variant.ICON */,
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
            title: i18nString(UIStringsTemp.report),
            iconName: 'report',
            jslogContext: 'report',
        }}
        @click=${this.#handleReportClick}
      ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
    `;
        // clang-format on
    }
    #renderFeedbackForm() {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
      <form class="feedback" @submit=${this.#handleSubmit}>
        <div class="feedback-header">
          <h4 class="feedback-title">${i18nString(UIStringsTemp.whyThisRating)}</h4>
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
            aria-label=${i18nString(UIStringsTemp.close)}
            @click=${this.#handleClose}
            .data=${{
            variant: "icon" /* Buttons.Button.Variant.ICON */,
            iconName: 'cross',
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
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
            variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
            title: i18nString(UIStringsTemp.submit),
            jslogContext: 'send',
        }}
        >${i18nString(UIStringsTemp.submit)}</${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
      </div>
    `;
        // clang-format on
    }
    #render() {
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <div class="rate-buttons">
          ${this.#renderButtons()}
          ${this.#isShowingFeedbackForm
            ? this.#renderFeedbackForm()
            : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.nothing}
        </div>`, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-provide-feedback', ProvideFeedback);
//# sourceMappingURL=ProvideFeedback.js.map

/***/ }),

/***/ "./panels/freestyler/components/provideFeedback.css.js":
/*!*************************************************************!*\
  !*** ./panels/freestyler/components/provideFeedback.css.js ***!
  \*************************************************************/
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
 * Copyright 2024 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  box-sizing: border-box;
}

.feedback {
  display: flex;
  flex-direction: column;
  gap: var(--sys-size-4);
  margin-top: var(--sys-size-4);
}

.feedback-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.feedback-title {
  margin: 0;
}

.feedback-disclaimer {
  padding: 0 var(--sys-size-4);
}

.vertical-separator {
  height: 20px;
  width: 1px;
  vertical-align: top;
  margin: 0 var(--sys-size-2);
  background: var(--color-background-inverted);
  opacity: 10%;
  display: inline-block;
}

/*# sourceURL=./components/provideFeedback.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);