"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_components_components_js"],{

/***/ "./panels/recorder/components/ControlButton.js":
/*!*****************************************************!*\
  !*** ./panels/recorder/components/ControlButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlButton: () => (/* binding */ ControlButton)
/* harmony export */ });
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _controlButton_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controlButton.css.js */ "./panels/recorder/components/controlButton.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const { html, Decorators, LitElement } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__;
const { customElement, property } = Decorators;
let ControlButton = class ControlButton extends LitElement {
    static styles = [_controlButton_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]];
    constructor() {
        super();
        this.label = '';
        this.shape = 'square';
        this.disabled = false;
    }
    #handleClickEvent = (event) => {
        if (this.disabled) {
            event.stopPropagation();
            event.preventDefault();
        }
    };
    render() {
        return html `
            <button
                @click=${this.#handleClickEvent}
                .disabled=${this.disabled}
                class="control"
            >
                <div class="icon ${this.shape}"></div>
                <div class="label">${this.label}</div>
            </button>
        `;
    }
};
__decorate([
    property()
], ControlButton.prototype, "label", void 0);
__decorate([
    property()
], ControlButton.prototype, "shape", void 0);
__decorate([
    property()
], ControlButton.prototype, "disabled", void 0);
ControlButton = __decorate([
    customElement('devtools-control-button')
], ControlButton);

//# sourceMappingURL=ControlButton.js.map

/***/ }),

/***/ "./panels/recorder/components/RecordingListView.js":
/*!*********************************************************!*\
  !*** ./panels/recorder/components/RecordingListView.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateRecordingEvent: () => (/* binding */ CreateRecordingEvent),
/* harmony export */   DeleteRecordingEvent: () => (/* binding */ DeleteRecordingEvent),
/* harmony export */   OpenRecordingEvent: () => (/* binding */ OpenRecordingEvent),
/* harmony export */   PlayRecordingEvent: () => (/* binding */ PlayRecordingEvent),
/* harmony export */   RecordingListView: () => (/* binding */ RecordingListView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */ var _recordingListView_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recordingListView.css.js */ "./panels/recorder/components/recordingListView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     *@description The title of the page that contains a list of saved recordings that the user has..
     */
    savedRecordings: 'Saved recordings',
    /**
     * @description The title of the button that leads to create a new recording page.
     */
    createRecording: 'Create a new recording',
    /**
     * @description The title of the button that is shown next to each of the recordings and that triggers playing of the recording.
     */
    playRecording: 'Play recording',
    /**
     * @description The title of the button that is shown next to each of the recordings and that triggers deletion of the recording.
     */
    deleteRecording: 'Delete recording',
    /**
     * @description The title of the row corresponding to a recording. By clicking on the row, the user open the recording for editing.
     */
    openRecording: 'Open recording',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/recorder/components/RecordingListView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class CreateRecordingEvent extends Event {
    static eventName = 'createrecording';
    constructor() {
        super(CreateRecordingEvent.eventName);
    }
}
class DeleteRecordingEvent extends Event {
    storageName;
    static eventName = 'deleterecording';
    constructor(storageName) {
        super(DeleteRecordingEvent.eventName);
        this.storageName = storageName;
    }
}
class OpenRecordingEvent extends Event {
    storageName;
    static eventName = 'openrecording';
    constructor(storageName) {
        super(OpenRecordingEvent.eventName);
        this.storageName = storageName;
    }
}
class PlayRecordingEvent extends Event {
    storageName;
    static eventName = 'playrecording';
    constructor(storageName) {
        super(PlayRecordingEvent.eventName);
        this.storageName = storageName;
    }
}
class RecordingListView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-recording-list-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #props = {
        recordings: [],
        replayAllowed: true,
    };
    constructor() {
        super();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_recordingListView_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]];
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, this.#render);
    }
    set recordings(recordings) {
        this.#props.recordings = recordings;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, this.#render);
    }
    set replayAllowed(value) {
        this.#props.replayAllowed = value;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, this.#render);
    }
    #onCreateClick() {
        this.dispatchEvent(new CreateRecordingEvent());
    }
    #onDeleteClick(storageName, event) {
        event.stopPropagation();
        this.dispatchEvent(new DeleteRecordingEvent(storageName));
    }
    #onOpenClick(storageName, event) {
        event.stopPropagation();
        this.dispatchEvent(new OpenRecordingEvent(storageName));
    }
    #onPlayRecordingClick(storageName, event) {
        event.stopPropagation();
        this.dispatchEvent(new PlayRecordingEvent(storageName));
    }
    #onKeyDown(storageName, event) {
        if (event.key !== 'Enter') {
            return;
        }
        this.#onOpenClick(storageName, event);
    }
    #stopPropagation(event) {
        event.stopPropagation();
    }
    #render = () => {
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <div class="wrapper">
          <div class="header">
            <h1>${i18nString(UIStrings.savedRecordings)}</h1>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}
              .variant=${"primary" /* Buttons.Button.Variant.PRIMARY */}
              @click=${this.#onCreateClick}
              title=${_models_models_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.getTooltipForActions(i18nString(UIStrings.createRecording), "chrome-recorder.create-recording" /* Actions.RecorderActions.CreateRecording */)}
              .jslogContext=${'create-recording'}
            >
              ${i18nString(UIStrings.createRecording)}
            </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>
          </div>
          <div class="table">
            ${this.#props.recordings.map(recording => {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
                  <div
                    role="button"
                    tabindex="0"
                    aria-label=${i18nString(UIStrings.openRecording)}
                    class="row"
                    @keydown=${this.#onKeyDown.bind(this, recording.storageName)}
                    @click=${this.#onOpenClick.bind(this, recording.storageName)}
                    jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.item()
                .track({ click: true })
                .context('recording')}>
                    <div class="icon">
                      <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName} name="flow">
                      </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
                    </div>
                    <div class="title">${recording.name}</div>
                    <div class="actions">
                      ${this.#props.replayAllowed
                ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
                              <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}
                                title=${i18nString(UIStrings.playRecording)}
                                .data=${{
                    variant: "icon" /* Buttons.Button.Variant.ICON */,
                    iconName: 'play',
                    jslogContext: 'play-recording',
                }}
                                @click=${this.#onPlayRecordingClick.bind(this, recording.storageName)}
                                @keydown=${this.#stopPropagation}
                              ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>
                              <div class="divider"></div>`
                : ''}
                      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}
                        class="delete-recording-button"
                        title=${i18nString(UIStrings.deleteRecording)}
                        .data=${{
                variant: "icon" /* Buttons.Button.Variant.ICON */,
                iconName: 'bin',
                jslogContext: 'delete-recording',
            }}
                        @click=${this.#onDeleteClick.bind(this, recording.storageName)}
                        @keydown=${this.#stopPropagation}
                      ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>
                    </div>
                  </div>
                `;
        })}
          </div>
        </div>
      `, this.#shadow, { host: this });
        // clang-format on
    };
}
customElements.define('devtools-recording-list-view', RecordingListView);
//# sourceMappingURL=RecordingListView.js.map

/***/ }),

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

/***/ "./panels/recorder/components/components.js":
/*!**************************************************!*\
  !*** ./panels/recorder/components/components.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlButton: () => (/* reexport module object */ _ControlButton_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   CreateRecordingView: () => (/* reexport module object */ _CreateRecordingView_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   RecordingListView: () => (/* reexport module object */ _RecordingListView_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   RecordingView: () => (/* reexport module object */ _RecordingView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   ReplaySection: () => (/* reexport module object */ _ReplaySection_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   SelectButton: () => (/* reexport module object */ _SelectButton_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   StartView: () => (/* reexport module object */ _StartView_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   StepEditor: () => (/* reexport module object */ _StepEditor_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   StepView: () => (/* reexport module object */ _StepView_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   TimelineSection: () => (/* reexport module object */ _TimelineSection_js__WEBPACK_IMPORTED_MODULE_9__)
/* harmony export */ });
/* harmony import */ var _ControlButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlButton.js */ "./panels/recorder/components/ControlButton.js");
/* harmony import */ var _CreateRecordingView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateRecordingView.js */ "./panels/recorder/components/CreateRecordingView.js");
/* harmony import */ var _RecordingListView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecordingListView.js */ "./panels/recorder/components/RecordingListView.js");
/* harmony import */ var _RecordingView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecordingView.js */ "./panels/recorder/components/RecordingView.js");
/* harmony import */ var _ReplaySection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReplaySection.js */ "./panels/recorder/components/ReplaySection.js");
/* harmony import */ var _SelectButton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectButton.js */ "./panels/recorder/components/SelectButton.js");
/* harmony import */ var _StartView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StartView.js */ "./panels/recorder/components/StartView.js");
/* harmony import */ var _StepEditor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StepEditor.js */ "./panels/recorder/components/StepEditor.js");
/* harmony import */ var _StepView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StepView.js */ "./panels/recorder/components/StepView.js");
/* harmony import */ var _TimelineSection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TimelineSection.js */ "./panels/recorder/components/TimelineSection.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./panels/recorder/components/controlButton.css.js":
/*!*********************************************************!*\
  !*** ./panels/recorder/components/controlButton.css.js ***!
  \*********************************************************/
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
  font-size: inherit;
}

.control {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.control[disabled] {
  filter: grayscale(100%);
  cursor: auto;
}

.icon {
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--sys-color-error-bright);
  margin-bottom: 8px;
  position: relative;
  transition: background 200ms;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.icon::before {
  --override-white: #fff;

  box-sizing: border-box;
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  border: 1px solid var(--override-white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--override-white);
}

.icon.square::before {
  border-radius: 0;
}

.icon.circle::before {
  border-radius: 50%;
}

.icon:hover {
  background: color-mix(in sRGB, var(--sys-color-error-bright), var(--sys-color-state-hover-on-prominent) 10%);
}

.icon:active {
  background: color-mix(in sRGB, var(--sys-color-error-bright), var(--sys-color-state-ripple-neutral-on-prominent) 16%);
}

.control[disabled] .icon:hover {
  background: var(--sys-color-error);
}

.label {
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  color: var(--sys-color-on-surface);
}

/*# sourceURL=controlButton.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/recorder/components/recordingListView.css.js":
/*!*************************************************************!*\
  !*** ./panels/recorder/components/recordingListView.css.js ***!
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
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: inherit;
}

*:focus,
*:focus-visible {
  outline: none;
}

.wrapper {
  padding: 24px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

h1 {
  font-size: 16px;
  line-height: 19px;
  color: var(--sys-color-on-surface);
  font-weight: normal;
}

.icon,
.icon devtools-icon {
  width: 20px;
  height: 20px;
  color: var(--sys-color-primary);
}

.table {
  margin-top: 35px;
}

.title {
  font-size: 13px;
  color: var(--sys-color-on-surface);
  margin-left: 10px;
  flex: 1;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.row {
  display: flex;
  align-items: center;
  padding-right: 5px;
  height: 28px;
  border-bottom: 1px solid var(--sys-color-divider);
}

.row:focus-within,
.row:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.row:last-child {
  border-bottom: none;
}

.actions {
  display: flex;
  align-items: center;
}

.actions button {
  border: none;
  background-color: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.actions .divider {
  width: 1px;
  height: 17px;
  background-color: var(--sys-color-divider);
  margin: 0 6px;
}

/*# sourceURL=recordingListView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


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