"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_components_StartView_ts"],{

/***/ "./src/panels/recorder/components/StartView.ts":
/*!*****************************************************!*\
  !*** ./src/panels/recorder/components/StartView.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateRecordingEvent: () => (/* binding */ CreateRecordingEvent),
/* harmony export */   FEEDBACK_URL: () => (/* binding */ FEEDBACK_URL),
/* harmony export */   StartView: () => (/* binding */ StartView)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/panel_feedback/panel_feedback.js */ "./src/ui/components/panel_feedback/panel_feedback.ts");
/* harmony import */ var _ui_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/panel_introduction_steps/panel_introduction_steps.js */ "./src/ui/components/panel_introduction_steps/panel_introduction_steps.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../recorder-actions/recorder-actions.js */ "./src/panels/recorder/recorder-actions/recorder-actions.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './startView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StartView_instances, _StartView_shadow, _StartView_onClick, _StartView_render;










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
    constructor() {
        super(CreateRecordingEvent.eventName);
    }
}
Object.defineProperty(CreateRecordingEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'createrecording'
});
class StartView extends HTMLElement {
    constructor() {
        super();
        _StartView_instances.add(this);
        _StartView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _StartView_render.set(this, () => {
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
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName} .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY} @click=${__classPrivateFieldGet(this, _StartView_instances, "m", _StartView_onClick)}
              .jslogContext=${_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_8__.RecorderActions.CreateRecording}>
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
      `, __classPrivateFieldGet(this, _StartView_shadow, "f"), { host: this });
            // clang-format on
        });
        this.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('start-view')}`);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _StartView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './startView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _StartView_render, "f"));
    }
}
_StartView_shadow = new WeakMap(), _StartView_render = new WeakMap(), _StartView_instances = new WeakSet(), _StartView_onClick = function _StartView_onClick() {
    this.dispatchEvent(new CreateRecordingEvent());
};
Object.defineProperty(StartView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.literal `devtools-start-view`
});
customElements.define('devtools-start-view', StartView);


/***/ }),

/***/ "./src/ui/components/panel_introduction_steps/PanelIntroductionSteps.ts":
/*!******************************************************************************!*\
  !*** ./src/ui/components/panel_introduction_steps/PanelIntroductionSteps.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelIntroductionSteps: () => (/* binding */ PanelIntroductionSteps)
/* harmony export */ });
/* harmony import */ var _components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './panelIntroductionSteps.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PanelIntroductionSteps_instances, _PanelIntroductionSteps_shadow, _PanelIntroductionSteps_boundRender, _PanelIntroductionSteps_render;



class PanelIntroductionSteps extends HTMLElement {
    constructor() {
        super(...arguments);
        _PanelIntroductionSteps_instances.add(this);
        _PanelIntroductionSteps_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _PanelIntroductionSteps_boundRender.set(this, __classPrivateFieldGet(this, _PanelIntroductionSteps_instances, "m", _PanelIntroductionSteps_render).bind(this));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _PanelIntroductionSteps_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './panelIntroductionSteps.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        void _components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _PanelIntroductionSteps_boundRender, "f"));
    }
}
_PanelIntroductionSteps_shadow = new WeakMap(), _PanelIntroductionSteps_boundRender = new WeakMap(), _PanelIntroductionSteps_instances = new WeakSet(), _PanelIntroductionSteps_render = function _PanelIntroductionSteps_render() {
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
    `, __classPrivateFieldGet(this, _PanelIntroductionSteps_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(PanelIntroductionSteps, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-panel-introduction-steps`
});
customElements.define('devtools-panel-introduction-steps', PanelIntroductionSteps);


/***/ }),

/***/ "./src/ui/components/panel_introduction_steps/panel_introduction_steps.ts":
/*!********************************************************************************!*\
  !*** ./src/ui/components/panel_introduction_steps/panel_introduction_steps.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelIntroductionSteps: () => (/* reexport module object */ _PanelIntroductionSteps_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _PanelIntroductionSteps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PanelIntroductionSteps.js */ "./src/ui/components/panel_introduction_steps/PanelIntroductionSteps.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ })

}]);