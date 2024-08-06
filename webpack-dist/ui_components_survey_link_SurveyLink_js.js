"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_survey_link_SurveyLink_js"],{

/***/ "./ui/components/survey_link/SurveyLink.js":
/*!*************************************************!*\
  !*** ./ui/components/survey_link/SurveyLink.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyLink: () => (/* binding */ SurveyLink)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _surveyLink_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./surveyLink.css.js */ "./ui/components/survey_link/surveyLink.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Text shown when the link to open a survey is clicked but the survey has not yet appeared
     */
    openingSurvey: 'Opening survey …',
    /**
     *@description Text displayed instead of the survey link after the survey link is clicked, if the survey was shown successfully
     */
    thankYouForYourFeedback: 'Thank you for your feedback',
    /**
     *@description Text displayed instead of the survey link after the survey link is clicked, if the survey was not shown successfully
     */
    anErrorOccurredWithTheSurvey: 'An error occurred with the survey',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('ui/components/survey_link/SurveyLink.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
// A link to a survey. The link is rendered aysnchronously because we need to first check if
// canShowSurvey succeeds.
class SurveyLink extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-survey-link`;
    #shadow = this.attachShadow({ mode: 'open' });
    #trigger = '';
    #promptText = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UIString.LocalizedEmptyString;
    #canShowSurvey = () => { };
    #showSurvey = () => { };
    #state = "Checking" /* State.Checking */;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_surveyLink_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
    }
    // Re-setting data will cause the state to go back to 'Checking' which hides the link.
    set data(data) {
        this.#trigger = data.trigger;
        this.#promptText = data.promptText;
        this.#canShowSurvey = data.canShowSurvey;
        this.#showSurvey = data.showSurvey;
        this.#checkSurvey();
    }
    #checkSurvey() {
        this.#state = "Checking" /* State.Checking */;
        this.#canShowSurvey(this.#trigger, ({ canShowSurvey }) => {
            if (!canShowSurvey) {
                this.#state = "DontShowLink" /* State.DontShowLink */;
            }
            else {
                this.#state = "ShowLink" /* State.ShowLink */;
            }
            this.#render();
        });
    }
    #sendSurvey() {
        this.#state = "Sending" /* State.Sending */;
        this.#render();
        this.#showSurvey(this.#trigger, ({ surveyShown }) => {
            if (!surveyShown) {
                this.#state = "Failed" /* State.Failed */;
            }
            else {
                this.#state = "SurveyShown" /* State.SurveyShown */;
            }
            this.#render();
        });
    }
    #render() {
        if (this.#state === "Checking" /* State.Checking */ || this.#state === "DontShowLink" /* State.DontShowLink */) {
            return;
        }
        let linkText = this.#promptText;
        if (this.#state === "Sending" /* State.Sending */) {
            linkText = i18nString(UIStrings.openingSurvey);
        }
        else if (this.#state === "SurveyShown" /* State.SurveyShown */) {
            linkText = i18nString(UIStrings.thankYouForYourFeedback);
        }
        else if (this.#state === "Failed" /* State.Failed */) {
            linkText = i18nString(UIStrings.anErrorOccurredWithTheSurvey);
        }
        let linkState = '';
        if (this.#state === "Sending" /* State.Sending */) {
            linkState = 'pending-link';
        }
        else if (this.#state === "Failed" /* State.Failed */ || this.#state === "SurveyShown" /* State.SurveyShown */) {
            linkState = 'disabled-link';
        }
        const ariaDisabled = this.#state !== "ShowLink" /* State.ShowLink */;
        // clang-format off
        // eslint-disable-next-line rulesdir/ban_style_tags_in_lit_html
        const output = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `
      <button class="link ${linkState}" tabindex=${ariaDisabled ? '-1' : '0'} .disabled=${ariaDisabled} aria-disabled=${ariaDisabled} @click=${this.#sendSurvey}>
        <${_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName} class="link-icon" .data=${{ iconName: 'review', color: 'var(--sys-color-primary)', width: 'var(--issue-link-icon-size, 16px)', height: 'var(--issue-link-icon-size, 16px)' }}></${_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}><!--
      -->${linkText}
      </button>
    `;
        // clang-format on
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(output, this.#shadow, { host: this });
    }
}
customElements.define('devtools-survey-link', SurveyLink);
//# sourceMappingURL=SurveyLink.js.map

/***/ }),

/***/ "./ui/components/survey_link/surveyLink.css.js":
/*!*****************************************************!*\
  !*** ./ui/components/survey_link/surveyLink.css.js ***!
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.link-icon {
  vertical-align: sub;
  margin-right: 0.5ch;
}

.link {
  padding: var(--issue-link-padding, 4px 0 0 0);
  text-decoration: var(--issue-link-text-decoration, underline);
  cursor: pointer;
  font-size: var(--issue-link-font-size, 14px);
  color: var(--sys-color-primary);
  outline-offset: 2px;
  border: none;
  background: none;
  font-family: inherit;
}

.link:focus:not(:focus-visible) {
  outline: none;
}

.pending-link {
  opacity: 75%;
  pointer-events: none;
  cursor: default;
  text-decoration: none;
}

.disabled-link {
  pointer-events: none;
  cursor: default;
  text-decoration: none;
}

/*# sourceURL=surveyLink.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);