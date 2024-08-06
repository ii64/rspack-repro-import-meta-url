"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_css_overview_components_CSSOverviewStartView_js"],{

/***/ "./panels/css_overview/components/CSSOverviewStartView.js":
/*!****************************************************************!*\
  !*** ./panels/css_overview/components/CSSOverviewStartView.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewStartView: () => (/* binding */ CSSOverviewStartView),
/* harmony export */   OverviewStartRequestedEvent: () => (/* binding */ OverviewStartRequestedEvent)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/panel_feedback/panel_feedback.js */ "./ui/components/panel_feedback/panel_feedback.js");
/* harmony import */ var _ui_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/panel_introduction_steps/panel_introduction_steps.js */ "./ui/components/panel_introduction_steps/panel_introduction_steps.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _cssOverviewStartView_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cssOverviewStartView.css.js */ "./panels/css_overview/components/cssOverviewStartView.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Label for the capture button in the CSS overview panel
     */
    captureOverview: 'Capture overview',
    /**
     *@description Header for the summary of CSS overview
     */
    identifyCSSImprovements: 'Identify potential CSS improvements',
    /**
     *@description First point of the summarized features of CSS overview
     */
    capturePageCSSOverview: 'Capture an overview of your page’s CSS',
    /**
     *@description Second point of the summarized features of CSS overview
     */
    identifyCSSImprovementsWithExampleIssues: 'Identify potential CSS improvements (e.g. low contrast issues, unused declarations, color or font mismatches)',
    /**
     *@description Third point of the summarized features of CSS overview
     */
    locateAffectedElements: 'Locate the affected elements in the Elements panel',
    /**
     *@description Title of the link to the quick start video and documentation to CSS overview panel
     */
    quickStartWithCSSOverview: 'Quick start: get started with the new CSS overview panel',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/css_overview/components/CSSOverviewStartView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__;
const FEEDBACK_LINK = 'https://g.co/devtools/css-overview-feedback';
const DOC_LINK = 'https://developer.chrome.com/docs/devtools/css-overview';
class OverviewStartRequestedEvent extends Event {
    static eventName = 'overviewstartrequested';
    constructor() {
        super(OverviewStartRequestedEvent.eventName);
    }
}
class CSSOverviewStartView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-css-overview-start-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_cssOverviewStartView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
        this.#render();
    }
    show() {
        this.classList.remove('hidden');
    }
    hide() {
        this.classList.add('hidden');
    }
    #onStartCaptureClick() {
        this.dispatchEvent(new OverviewStartRequestedEvent());
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="css-overview-start-view">
        <${_ui_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_3__.PanelIntroductionSteps.PanelIntroductionSteps.litTagName}>
          <span slot="title">${i18nString(UIStrings.identifyCSSImprovements)}</span>
          <span slot="step-1">${i18nString(UIStrings.capturePageCSSOverview)}</span>
          <span slot="step-2">${i18nString(UIStrings.identifyCSSImprovementsWithExampleIssues)}</span>
          <span slot="step-3">${i18nString(UIStrings.locateAffectedElements)}</span>
        </${_ui_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_3__.PanelIntroductionSteps.PanelIntroductionSteps.litTagName}>
        <div class="start-capture-wrapper">
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}
            class="start-capture"
            .variant=${"primary" /* Buttons.Button.Variant.PRIMARY */}
            .jslogContext=${'css-overview.capture-overview'}
            @click=${this.#onStartCaptureClick}>
            ${i18nString(UIStrings.captureOverview)}
          </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>
        </div>
        <${_ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_2__.PanelFeedback.PanelFeedback.litTagName} .data=${{
            feedbackUrl: FEEDBACK_LINK,
            quickStartUrl: DOC_LINK,
            quickStartLinkText: i18nString(UIStrings.quickStartWithCSSOverview),
        }}>
        </${_ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_2__.PanelFeedback.PanelFeedback.litTagName}>
        <${_ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_2__.FeedbackButton.FeedbackButton.litTagName} .data=${{
            feedbackUrl: FEEDBACK_LINK,
        }}>
        </${_ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_2__.FeedbackButton.FeedbackButton.litTagName}>
      </div>
    `, this.#shadow, {
            host: this,
        });
        // clang-format on
        const startButton = this.#shadow.querySelector('.start-capture');
        if (startButton) {
            startButton.focus();
        }
    }
}
customElements.define('devtools-css-overview-start-view', CSSOverviewStartView);
//# sourceMappingURL=CSSOverviewStartView.js.map

/***/ }),

/***/ "./panels/css_overview/components/cssOverviewStartView.css.js":
/*!********************************************************************!*\
  !*** ./panels/css_overview/components/cssOverviewStartView.css.js ***!
  \********************************************************************/
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
`/**
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

h1 {
  font-weight: normal;
}

.css-overview-start-view {
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: var(--sys-color-cdt-base-container);
  overflow: auto;
}

.start-capture-wrapper {
  width: fit-content;
}

.preview-feature {
  padding: 12px 16px;
  border: 1px solid var(--sys-color-neutral-outline);
  color: var(--sys-color-on-surface);
  font-size: 13px;
  line-height: 20px;
  border-radius: 12px;
  margin: 42px 0;
  letter-spacing: 0.01em;
}

.preview-header {
  color: var(--sys-color-primary);
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.01em;
  margin: 9px 0 14px;
}

.preview-icon {
  vertical-align: middle;
}

.feedback-prompt {
  margin-bottom: 24px;
}

.feedback-prompt .devtools-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}

.resources {
  display: flex;
  flex-direction: row;
}

.thumbnail-wrapper {
  width: 144px;
  height: 92px;
  margin-right: 20px;
}

.video-doc-header {
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: var(--sys-color-on-surface);
  margin-bottom: 2px;
}

devtools-feedback-button {
  align-self: flex-end;
}

.resources .devtools-link {
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  color: var(--sys-color-primary);
}

/*# sourceURL=cssOverviewStartView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/panel_introduction_steps/PanelIntroductionSteps.js":
/*!**************************************************************************!*\
  !*** ./ui/components/panel_introduction_steps/PanelIntroductionSteps.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelIntroductionSteps: () => (/* binding */ PanelIntroductionSteps)
/* harmony export */ });
/* harmony import */ var _components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _panelIntroductionSteps_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panelIntroductionSteps.css.js */ "./ui/components/panel_introduction_steps/panelIntroductionSteps.css.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class PanelIntroductionSteps extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-panel-introduction-steps`;
    #shadow = this.attachShadow({ mode: 'open' });
    #boundRender = this.#render.bind(this);
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_panelIntroductionSteps_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
        void _components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, this.#boundRender);
    }
    #render() {
        if (!_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.isScheduledRender(this)) {
            throw new Error('FeedbackButton render was not scheduled');
        }
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
      <h1><slot name="title">slot: title</slot></h1>

      <ol class="intro-steps">
        <li><slot name="step-1">slot: step-1</slot></li>
        <li><slot name="step-2">slot: step-2</slot></li>
        <li><slot name="step-3">slot: step-3</slot></li>
      </ol>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-panel-introduction-steps', PanelIntroductionSteps);
//# sourceMappingURL=PanelIntroductionSteps.js.map

/***/ }),

/***/ "./ui/components/panel_introduction_steps/panelIntroductionSteps.css.js":
/*!******************************************************************************!*\
  !*** ./ui/components/panel_introduction_steps/panelIntroductionSteps.css.js ***!
  \******************************************************************************/
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

:host {
  display: block;
}

h1 {
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  padding: 0;
  margin-top: 0;
  color: var(--sys-color-on-surface);
}

.intro-steps {
  counter-reset: custom-counter;
  list-style: none;
  margin: 16px 0 30px 30px;
  padding: 0;
}

.intro-steps li {
  color: var(--sys-color-on-surface);
  counter-increment: custom-counter;
  font-size: 13px;
  letter-spacing: 0.03em;
  line-height: 1.54;
  margin-bottom: 9px;
  position: relative;
}

.intro-steps li::before {
  --override-color-counter-background: var(--sys-color-tonal-container);

  box-sizing: border-box;
  background: var(--override-color-counter-background);
  border-radius: 50%;
  color: var(--sys-color-primary);
  content: counter(custom-counter);
  font-size: 12px;
  height: 18px;
  left: -30px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 0;
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/*# sourceURL=panelIntroductionSteps.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/panel_introduction_steps/panel_introduction_steps.js":
/*!****************************************************************************!*\
  !*** ./ui/components/panel_introduction_steps/panel_introduction_steps.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelIntroductionSteps: () => (/* reexport module object */ _PanelIntroductionSteps_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _PanelIntroductionSteps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PanelIntroductionSteps.js */ "./ui/components/panel_introduction_steps/PanelIntroductionSteps.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=panel_introduction_steps.js.map

/***/ })

}]);