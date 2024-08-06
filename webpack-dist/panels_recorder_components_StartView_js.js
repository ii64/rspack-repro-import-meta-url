"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_components_StartView_js"],{

/***/ "./panels/recorder/components/StartView.js":
/*!*************************************************!*\
  !*** ./panels/recorder/components/StartView.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateRecordingEvent: () => (/* binding */ CreateRecordingEvent),
/* harmony export */   FEEDBACK_URL: () => (/* binding */ FEEDBACK_URL),
/* harmony export */   StartView: () => (/* binding */ StartView)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/panel_feedback/panel_feedback.js */ "./ui/components/panel_feedback/panel_feedback.js");
/* harmony import */ var _ui_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/panel_introduction_steps/panel_introduction_steps.js */ "./ui/components/panel_introduction_steps/panel_introduction_steps.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _startView_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./startView.css.js */ "./panels/recorder/components/startView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const UIStrings = {
    /**
     * @description The header of the start page in the Recorder panel.
     */
    header: 'Measure performance across an entire user journey',
    /**
     * @description The Recorder start page contains a list of steps that the user can do. This is the text of the first step.
     */
    step1: 'Record a common user journey on your website or app',
    /**
     * @description The Recorder start page contains a list of steps that the user can do. This is the text of the second step.
     */
    step2: 'Replay the recording to check if the flow is working',
    /**
     * @description The Recorder start page contains a list of steps that the user can do. This is the text of the third step.
     */
    step3: 'Generate a detailed performance trace or export a Puppeteer script for testing',
    /**
     * @description The title of the button that leads to the page for creating a new recording.
     */
    createRecording: 'Create a new recording',
    /**
     * @description The link title in the Preview feature box leading to an article documenting the recorder feature.
     */
    quickStart: 'Quick start: learn the new Recorder panel in DevTools',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/recorder/components/StartView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const FEEDBACK_URL = 'https://goo.gle/recorder-feedback';
const DOC_URL = 'https://developer.chrome.com/docs/devtools/recorder';
class CreateRecordingEvent extends Event {
    static eventName = 'createrecording';
    constructor() {
        super(CreateRecordingEvent.eventName);
    }
}
class StartView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.literal `devtools-start-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    constructor() {
        super();
        this.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('start-view')}`);
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_startView_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, this.#render);
    }
    #onClick() {
        this.dispatchEvent(new CreateRecordingEvent());
    }
    #render = () => {
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `
        <div class="wrapper">
          <${_ui_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_5__.PanelIntroductionSteps.PanelIntroductionSteps
            .litTagName}>
            <span slot="title">${i18nString(UIStrings.header)}</span>
            <span slot="step-1">${i18nString(UIStrings.step1)}</span>
            <span slot="step-2">${i18nString(UIStrings.step2)}</span>
            <span slot="step-3">${i18nString(UIStrings.step3)}</span>
          </${_ui_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_5__.PanelIntroductionSteps.PanelIntroductionSteps
            .litTagName}>
          <div class="fit-content">
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName} .variant=${"primary" /* Buttons.Button.Variant.PRIMARY */} @click=${this.#onClick}
              .jslogContext=${"chrome-recorder.create-recording" /* Actions.RecorderActions.CreateRecording */}>
              ${i18nString(UIStrings.createRecording)}
            </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
          </div>
          <${_ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_4__.PanelFeedback.PanelFeedback.litTagName} .data=${{
            feedbackUrl: FEEDBACK_URL,
            quickStartUrl: DOC_URL,
            quickStartLinkText: i18nString(UIStrings.quickStart),
        }}>
          </${_ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_4__.PanelFeedback.PanelFeedback.litTagName}>
          <div class="align-right">
            <${_ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_4__.FeedbackButton.FeedbackButton.litTagName} .data=${{
            feedbackUrl: FEEDBACK_URL,
        }}>
            </${_ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_4__.FeedbackButton.FeedbackButton.litTagName}>
          </div>
        </div>
      `, this.#shadow, { host: this });
        // clang-format on
    };
}
customElements.define('devtools-start-view', StartView);
//# sourceMappingURL=StartView.js.map

/***/ }),

/***/ "./panels/recorder/components/startView.css.js":
/*!*****************************************************!*\
  !*** ./panels/recorder/components/startView.css.js ***!
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
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: normal;
  font-size: inherit;
}

:host {
  flex: 1;
  display: block;
  overflow: auto;
}

.wrapper {
  padding: 24px;
  background-color: var(--sys-color-cdt-base-container);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.fit-content {
  width: fit-content;
}

.align-right {
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

/*# sourceURL=startView.css */
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