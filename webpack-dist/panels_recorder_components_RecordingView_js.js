"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_components_RecordingView_js"],{

/***/ "./panels/recorder/components/ExtensionView.js":
/*!*****************************************************!*\
  !*** ./panels/recorder/components/ExtensionView.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClosedEvent: () => (/* binding */ ClosedEvent),
/* harmony export */   ExtensionView: () => (/* binding */ ExtensionView)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../extensions/extensions.js */ "./panels/recorder/extensions/extensions.js");
/* harmony import */ var _extensionView_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extensionView.css.js */ "./panels/recorder/components/extensionView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     * @description The button label that closes the panel that shows the extension content inside the Recorder panel.
     */
    closeView: 'Close',
    /**
     * @description The label that indicates that the content shown is provided by a browser extension.
     */
    extension: 'Content provided by a browser extension',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/recorder/components/ExtensionView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class ClosedEvent extends Event {
    static eventName = 'recorderextensionviewclosed';
    constructor() {
        super(ClosedEvent.eventName, { bubbles: true, composed: true });
    }
}
class ExtensionView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-recorder-extension-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #descriptor;
    constructor() {
        super();
        this.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.section('extension-view')}`);
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_extensionView_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]];
        this.#render();
    }
    disconnectedCallback() {
        if (!this.#descriptor) {
            return;
        }
        _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__.ExtensionManager.ExtensionManager.instance().getView(this.#descriptor.id).hide();
    }
    set descriptor(descriptor) {
        this.#descriptor = descriptor;
        this.#render();
        _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__.ExtensionManager.ExtensionManager.instance().getView(descriptor.id).show();
    }
    #closeView() {
        this.dispatchEvent(new ClosedEvent());
    }
    #render() {
        if (!this.#descriptor) {
            return;
        }
        const iframe = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__.ExtensionManager.ExtensionManager.instance().getView(this.#descriptor.id).frame();
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <div class="extension-view">
          <header>
            <div class="title">
              <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}
                class="icon"
                title=${i18nString(UIStrings.extension)}
                name="extension">
              </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
              ${this.#descriptor.title}
            </div>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
              title=${i18nString(UIStrings.closeView)}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.close().track({ click: true })}
              .data=${{
            variant: "icon" /* Buttons.Button.Variant.ICON */,
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
            iconName: 'cross',
        }}
              @click=${this.#closeView}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
          </header>
          <main>
            ${iframe}
          <main>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-recorder-extension-view', ExtensionView);
//# sourceMappingURL=ExtensionView.js.map

/***/ }),

/***/ "./panels/recorder/components/RecordingView.js":
/*!*****************************************************!*\
  !*** ./panels/recorder/components/RecordingView.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortReplayEvent: () => (/* binding */ AbortReplayEvent),
/* harmony export */   AddAssertionEvent: () => (/* binding */ AddAssertionEvent),
/* harmony export */   NetworkConditionsChanged: () => (/* binding */ NetworkConditionsChanged),
/* harmony export */   PlayRecordingEvent: () => (/* binding */ PlayRecordingEvent),
/* harmony export */   RecordingChangedEvent: () => (/* binding */ RecordingChangedEvent),
/* harmony export */   RecordingFinishedEvent: () => (/* binding */ RecordingFinishedEvent),
/* harmony export */   RecordingTitleChangedEvent: () => (/* binding */ RecordingTitleChangedEvent),
/* harmony export */   RecordingView: () => (/* binding */ RecordingView),
/* harmony export */   TimeoutChanged: () => (/* binding */ TimeoutChanged)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/code_highlighter/code_highlighter.js */ "./ui/components/code_highlighter/code_highlighter.js");
/* harmony import */ var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/dialogs/dialogs.js */ "./ui/components/dialogs/dialogs.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */ var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/components/menus/menus.js */ "./ui/components/menus/menus.js");
/* harmony import */ var _ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/components/split_view/split_view.js */ "./ui/components/split_view/split_view.js");
/* harmony import */ var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/components/text_editor/text_editor.js */ "./ui/components/text_editor/text_editor.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */ var _ExtensionView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ExtensionView.js */ "./panels/recorder/components/ExtensionView.js");
/* harmony import */ var _recordingView_css_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./recordingView.css.js */ "./panels/recorder/components/recordingView.css.js");
/* harmony import */ var _ReplaySection_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ReplaySection.js */ "./panels/recorder/components/ReplaySection.js");
/* harmony import */ var _StepView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./StepView.js */ "./panels/recorder/components/StepView.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




















const UIStrings = {
    /**
     * @description Depicts that the recording was done on a mobile device (e.g., a smartphone or tablet).
     */
    mobile: 'Mobile',
    /**
     * @description Depicts that the recording was done on a desktop device (e.g., on a PC or laptop).
     */
    desktop: 'Desktop',
    /**
     * @description Network latency in milliseconds.
     * @example {10} value
     */
    latency: 'Latency: {value} ms',
    /**
     * @description Upload speed.
     * @example {42 kB} value
     */
    upload: 'Upload: {value}',
    /**
     * @description Download speed.
     * @example {8 kB} value
     */
    download: 'Download: {value}',
    /**
     * @description Title of the button to edit replay settings.
     */
    editReplaySettings: 'Edit replay settings',
    /**
     * @description Title of the section that contains replay settings.
     */
    replaySettings: 'Replay settings',
    /**
     * @description The string is shown when a default value is used for some replay settings.
     */
    default: 'Default',
    /**
     * @description The title of the section with environment settings.
     */
    environment: 'Environment',
    /**
     * @description The title of the screenshot image that is shown for every section in the recordign view.
     */
    screenshotForSection: 'Screenshot for this section',
    /**
     * @description The title of the button that edits the current recording's title.
     */
    editTitle: 'Edit title',
    /**
     * @description The error for when the title is missing.
     */
    requiredTitleError: 'Title is required',
    /**
     * @description The status text that is shown while the recording is ongoing.
     */
    recording: 'Recording…',
    /**
     * @description The title of the button to end the current recording.
     */
    endRecording: 'End recording',
    /**
     * @description The title of the button while the recording is being ended.
     */
    recordingIsBeingStopped: 'Stopping recording…',
    /**
     * @description The text that describes a timeout setting of {value} milliseconds.
     * @example {1000} value
     */
    timeout: 'Timeout: {value} ms',
    /**
     * @description The label for the input that allows entering network throttling configuration.
     */
    network: 'Network',
    /**
     * @description The label for the input that allows entering timeout (a number in ms) configuration.
     */
    timeoutLabel: 'Timeout',
    /**
     * @description The text in a tooltip for the timeout input that explains what timeout settings do.
     */
    timeoutExplanation: 'The timeout setting (in milliseconds) applies to every action when replaying the recording. For example, if a DOM element identified by a CSS selector does not appear on the page within the specified timeout, the replay fails with an error.',
    /**
     * @description The label for the button that cancels replaying.
     */
    cancelReplay: 'Cancel replay',
    /**
     * @description Button title that shows the code view when clicked.
     */
    showCode: 'Show code',
    /**
     * @description Button title that hides the code view when clicked.
     */
    hideCode: 'Hide code',
    /**
     * @description Button title that adds an assertion to the step editor.
     */
    addAssertion: 'Add assertion',
    /**
     * @description The title of the button that open current recording in Performance panel.
     */
    performancePanel: 'Performance panel',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/recorder/components/RecordingView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class RecordingFinishedEvent extends Event {
    static eventName = 'recordingfinished';
    constructor() {
        super(RecordingFinishedEvent.eventName);
    }
}
class PlayRecordingEvent extends Event {
    static eventName = 'playrecording';
    data;
    constructor(data = {
        targetPanel: "chrome-recorder" /* TargetPanel.Default */,
        speed: "normal" /* PlayRecordingSpeed.Normal */,
    }) {
        super(PlayRecordingEvent.eventName);
        this.data = data;
    }
}
class AbortReplayEvent extends Event {
    static eventName = 'abortreplay';
    constructor() {
        super(AbortReplayEvent.eventName);
    }
}
class RecordingChangedEvent extends Event {
    static eventName = 'recordingchanged';
    data;
    constructor(currentStep, newStep) {
        super(RecordingChangedEvent.eventName);
        this.data = { currentStep, newStep };
    }
}
class AddAssertionEvent extends Event {
    static eventName = 'addassertion';
    constructor() {
        super(AddAssertionEvent.eventName);
    }
}
class RecordingTitleChangedEvent extends Event {
    static eventName = 'recordingtitlechanged';
    title;
    constructor(title) {
        super(RecordingTitleChangedEvent.eventName, {});
        this.title = title;
    }
}
class NetworkConditionsChanged extends Event {
    static eventName = 'networkconditionschanged';
    data;
    constructor(data) {
        super(NetworkConditionsChanged.eventName, {
            composed: true,
            bubbles: true,
        });
        this.data = data;
    }
}
class TimeoutChanged extends Event {
    static eventName = 'timeoutchanged';
    data;
    constructor(data) {
        super(TimeoutChanged.eventName, { composed: true, bubbles: true });
        this.data = data;
    }
}
const networkConditionPresets = [
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NoThrottlingConditions,
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.OfflineConditions,
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Slow3GConditions,
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Slow4GConditions,
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Fast4GConditions,
];
function converterIdToFlowMetric(converterId) {
    switch (converterId) {
        case "puppeteer" /* Models.ConverterIds.ConverterIds.Puppeteer */:
            return 1 /* Host.UserMetrics.RecordingCopiedToClipboard.CopiedRecordingWithPuppeteer */;
        case "json" /* Models.ConverterIds.ConverterIds.JSON */:
            return 2 /* Host.UserMetrics.RecordingCopiedToClipboard.CopiedRecordingWithJSON */;
        case "@puppeteer/replay" /* Models.ConverterIds.ConverterIds.Replay */:
            return 3 /* Host.UserMetrics.RecordingCopiedToClipboard.CopiedRecordingWithReplay */;
        default:
            return 4 /* Host.UserMetrics.RecordingCopiedToClipboard.CopiedRecordingWithExtension */;
    }
}
function converterIdToStepMetric(converterId) {
    switch (converterId) {
        case "puppeteer" /* Models.ConverterIds.ConverterIds.Puppeteer */:
            return 5 /* Host.UserMetrics.RecordingCopiedToClipboard.CopiedStepWithPuppeteer */;
        case "json" /* Models.ConverterIds.ConverterIds.JSON */:
            return 6 /* Host.UserMetrics.RecordingCopiedToClipboard.CopiedStepWithJSON */;
        case "@puppeteer/replay" /* Models.ConverterIds.ConverterIds.Replay */:
            return 7 /* Host.UserMetrics.RecordingCopiedToClipboard.CopiedStepWithReplay */;
        default:
            return 8 /* Host.UserMetrics.RecordingCopiedToClipboard.CopiedStepWithExtension */;
    }
}
class RecordingView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.literal `devtools-recording-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #replayState = { isPlaying: false, isPausedOnBreakpoint: false };
    #userFlow = null;
    #isRecording = false;
    #recordingTogglingInProgress = false;
    #isTitleInvalid = false;
    #currentStep;
    #steps = [];
    #currentError;
    #sections = [];
    #settings;
    #recorderSettings;
    #lastReplayResult;
    #breakpointIndexes = new Set();
    #selectedStep;
    #replaySettingsExpanded = false;
    #replayAllowed = true;
    #builtInConverters = [];
    #extensionConverters = [];
    #replayExtensions;
    #showCodeView = false;
    #code = '';
    #converterId = '';
    #editorState;
    #sourceMap;
    #extensionDescriptor;
    #onCopyBound = this.#onCopy.bind(this);
    constructor() {
        super();
    }
    set data(data) {
        this.#isRecording = data.isRecording;
        this.#replayState = data.replayState;
        this.#recordingTogglingInProgress = data.recordingTogglingInProgress;
        this.#currentStep = data.currentStep;
        this.#userFlow = data.recording;
        this.#steps = this.#userFlow.steps;
        this.#sections = data.sections;
        this.#settings = data.settings;
        this.#recorderSettings = data.recorderSettings;
        this.#currentError = data.currentError;
        this.#lastReplayResult = data.lastReplayResult;
        this.#replayAllowed = data.replayAllowed;
        this.#isTitleInvalid = false;
        this.#breakpointIndexes = data.breakpointIndexes;
        this.#builtInConverters = data.builtInConverters;
        this.#extensionConverters = data.extensionConverters;
        this.#replayExtensions = data.replayExtensions;
        this.#extensionDescriptor = data.extensionDescriptor;
        this.#converterId = this.#recorderSettings?.preferredCopyFormat ?? data.builtInConverters[0]?.getId();
        void this.#convertToCode();
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [
            _recordingView_css_js__WEBPACK_IMPORTED_MODULE_17__["default"],
            _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_9__.textInputStyles,
        ];
        document.addEventListener('copy', this.#onCopyBound);
        this.#render();
    }
    disconnectedCallback() {
        document.removeEventListener('copy', this.#onCopyBound);
    }
    scrollToBottom() {
        const wrapper = this.shadowRoot?.querySelector('.sections');
        if (!wrapper) {
            return;
        }
        wrapper.scrollTop = wrapper.scrollHeight;
    }
    #dispatchAddAssertionEvent() {
        this.dispatchEvent(new AddAssertionEvent());
    }
    #dispatchRecordingFinished() {
        this.dispatchEvent(new RecordingFinishedEvent());
    }
    #handleAbortReplay() {
        this.dispatchEvent(new AbortReplayEvent());
    }
    #handleTogglePlaying(event) {
        this.dispatchEvent(new PlayRecordingEvent({
            targetPanel: "chrome-recorder" /* TargetPanel.Default */,
            speed: event.speed,
            extension: event.extension,
        }));
    }
    #getStepState(step) {
        if (!this.#currentStep) {
            return "default" /* State.Default */;
        }
        if (step === this.#currentStep) {
            if (this.#currentError) {
                return "error" /* State.Error */;
            }
            if (!this.#replayState.isPlaying) {
                return "success" /* State.Success */;
            }
            if (this.#replayState.isPausedOnBreakpoint) {
                return "stopped" /* State.Stopped */;
            }
            return "current" /* State.Current */;
        }
        const currentIndex = this.#steps.indexOf(this.#currentStep);
        if (currentIndex === -1) {
            return "default" /* State.Default */;
        }
        const index = this.#steps.indexOf(step);
        return index < currentIndex ? "success" /* State.Success */ : "outstanding" /* State.Outstanding */;
    }
    #getSectionState(section) {
        const currentStep = this.#currentStep;
        if (!currentStep) {
            return "default" /* State.Default */;
        }
        const currentSection = this.#sections.find(section => section.steps.includes(currentStep));
        if (!currentSection) {
            if (this.#currentError) {
                return "error" /* State.Error */;
            }
        }
        if (section === currentSection) {
            return "success" /* State.Success */;
        }
        const index = this.#sections.indexOf(currentSection);
        const ownIndex = this.#sections.indexOf(section);
        return index >= ownIndex ? "success" /* State.Success */ : "outstanding" /* State.Outstanding */;
    }
    #renderStep(section, step, isLastSection) {
        const stepIndex = this.#steps.indexOf(step);
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <${_StepView_js__WEBPACK_IMPORTED_MODULE_19__.StepView.litTagName}
      @click=${this.#onStepClick}
      @mouseover=${this.#onStepHover}
      @copystep=${this.#onCopyStepEvent}
      .data=${{
            step,
            state: this.#getStepState(step),
            error: this.#currentStep === step ? this.#currentError : undefined,
            isFirstSection: false,
            isLastSection: isLastSection && this.#steps[this.#steps.length - 1] === step,
            isStartOfGroup: false,
            isEndOfGroup: section.steps[section.steps.length - 1] === step,
            stepIndex,
            hasBreakpoint: this.#breakpointIndexes.has(stepIndex),
            sectionIndex: -1,
            isRecording: this.#isRecording,
            isPlaying: this.#replayState.isPlaying,
            removable: this.#steps.length > 1,
            builtInConverters: this.#builtInConverters,
            extensionConverters: this.#extensionConverters,
            isSelected: this.#selectedStep === step,
            recorderSettings: this.#recorderSettings,
        }}
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.section('step').track({ click: true })}
      ></${_StepView_js__WEBPACK_IMPORTED_MODULE_19__.StepView.litTagName}>
    `;
        // clang-format on
    }
    #onStepHover = (event) => {
        const stepView = event.target;
        const step = stepView.step || stepView.section?.causingStep;
        if (!step || this.#selectedStep) {
            return;
        }
        this.#highlightCodeForStep(step);
    };
    #onStepClick(event) {
        event.stopPropagation();
        const stepView = event.target;
        const selectedStep = stepView.step || stepView.section?.causingStep || null;
        if (this.#selectedStep === selectedStep) {
            return;
        }
        this.#selectedStep = selectedStep;
        this.#render();
        if (selectedStep) {
            this.#highlightCodeForStep(selectedStep, /* scroll=*/ true);
        }
    }
    #onWrapperClick() {
        if (this.#selectedStep === undefined) {
            return;
        }
        this.#selectedStep = undefined;
        this.#render();
    }
    #onReplaySettingsKeydown(event) {
        if (event.key !== 'Enter') {
            return;
        }
        event.preventDefault();
        this.#onToggleReplaySettings(event);
    }
    #onToggleReplaySettings(event) {
        event.stopPropagation();
        this.#replaySettingsExpanded = !this.#replaySettingsExpanded;
        this.#render();
    }
    #onNetworkConditionsChange(event) {
        const preset = networkConditionPresets.find(preset => preset.i18nTitleKey === event.itemValue);
        this.dispatchEvent(new NetworkConditionsChanged(preset?.i18nTitleKey === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NoThrottlingConditions.i18nTitleKey ? undefined : preset));
    }
    #onTimeoutInput(event) {
        const target = event.target;
        if (!target.checkValidity()) {
            target.reportValidity();
            return;
        }
        this.dispatchEvent(new TimeoutChanged(Number(target.value)));
    }
    #onTitleBlur = (event) => {
        const target = event.target;
        const title = target.innerText.trim();
        if (!title) {
            this.#isTitleInvalid = true;
            this.#render();
            return;
        }
        this.dispatchEvent(new RecordingTitleChangedEvent(title));
    };
    #onTitleInputKeyDown = (event) => {
        switch (event.code) {
            case 'Escape':
            case 'Enter':
                event.target.blur();
                event.stopPropagation();
                break;
        }
    };
    #onEditTitleButtonClick = () => {
        const input = this.#shadow.getElementById('title-input');
        input.focus();
        const range = document.createRange();
        range.selectNodeContents(input);
        range.collapse(false);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
    };
    #onSelectMenuLabelClick = (event) => {
        const target = event.target;
        if (target.matches('.wrapping-label')) {
            target.querySelector('devtools-select-menu')?.click();
        }
    };
    async #copyCurrentSelection(step) {
        let converter = [
            ...this.#builtInConverters,
            ...this.#extensionConverters,
        ]
            .find(converter => converter.getId() === this.#recorderSettings?.preferredCopyFormat);
        if (!converter) {
            converter = this.#builtInConverters[0];
        }
        if (!converter) {
            throw new Error('No default converter found');
        }
        let text = '';
        if (step) {
            text = await converter.stringifyStep(step);
        }
        else if (this.#userFlow) {
            [text] = await converter.stringify(this.#userFlow);
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(text);
        const metric = step ? converterIdToStepMetric(converter.getId()) : converterIdToFlowMetric(converter.getId());
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingCopiedToClipboard(metric);
    }
    #onCopyStepEvent(event) {
        event.stopPropagation();
        void this.#copyCurrentSelection(event.step);
    }
    async #onCopy(event) {
        if (event.target !== document.body) {
            return;
        }
        event.preventDefault();
        await this.#copyCurrentSelection(this.#selectedStep);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.keyboardShortcutFired("chrome-recorder.copy-recording-or-step" /* Actions.RecorderActions.CopyRecordingOrStep */);
    }
    #renderSettings() {
        if (!this.#settings) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html ``;
        }
        const environmentFragments = [];
        if (this.#settings.viewportSettings) {
            // clang-format off
            environmentFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div>${this.#settings.viewportSettings.isMobile
                ? i18nString(UIStrings.mobile)
                : i18nString(UIStrings.desktop)}</div>`);
            environmentFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div class="separator"></div>`);
            environmentFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div>${this.#settings.viewportSettings.width}×${this.#settings.viewportSettings.height} px</div>`);
            // clang-format on
        }
        const replaySettingsFragments = [];
        if (!this.#replaySettingsExpanded) {
            if (this.#settings.networkConditionsSettings) {
                if (this.#settings.networkConditionsSettings.title) {
                    // clang-format off
                    replaySettingsFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div>${this.#settings.networkConditionsSettings.title}</div>`);
                    // clang-format on
                }
                else {
                    // clang-format off
                    replaySettingsFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div>
            ${i18nString(UIStrings.download, {
                        value: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(this.#settings.networkConditionsSettings.download),
                    })},
            ${i18nString(UIStrings.upload, {
                        value: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(this.#settings.networkConditionsSettings.upload),
                    })},
            ${i18nString(UIStrings.latency, {
                        value: this.#settings.networkConditionsSettings.latency,
                    })}
          </div>`);
                    // clang-format on
                }
            }
            else {
                // clang-format off
                replaySettingsFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div>${_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NoThrottlingConditions.title instanceof Function
                    ? _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NoThrottlingConditions.title()
                    : _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NoThrottlingConditions.title}</div>`);
                // clang-format on
            }
            // clang-format off
            replaySettingsFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div class="separator"></div>`);
            replaySettingsFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div>${i18nString(UIStrings.timeout, {
                value: this.#settings.timeout || _models_models_js__WEBPACK_IMPORTED_MODULE_15__.RecordingPlayer.defaultTimeout,
            })}</div>`);
            // clang-format on
        }
        else {
            // clang-format off
            const selectedOption = this.#settings.networkConditionsSettings?.i18nTitleKey ||
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NoThrottlingConditions.i18nTitleKey;
            const selectedOptionTitle = networkConditionPresets.find(preset => preset.i18nTitleKey === selectedOption);
            let menuButtonTitle = '';
            if (selectedOptionTitle) {
                menuButtonTitle =
                    selectedOptionTitle.title instanceof Function
                        ? selectedOptionTitle.title()
                        : selectedOptionTitle.title;
            }
            replaySettingsFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div class="editable-setting">
        <label class="wrapping-label" @click=${this.#onSelectMenuLabelClick}>
          ${i18nString(UIStrings.network)}
          <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.SelectMenu.SelectMenu.litTagName}
            @selectmenuselected=${this.#onNetworkConditionsChange}
            .disabled=${!this.#steps.find(step => step.type === 'navigate')}
            .showDivider=${true}
            .showArrow=${true}
            .sideButton=${false}
            .showSelectedItem=${true}
            .showConnector=${false}
            .jslogContext=${'network-conditions'}
            .position=${"bottom" /* Dialogs.Dialog.DialogVerticalPosition.BOTTOM */}
            .buttonTitle=${menuButtonTitle}
          >
            ${networkConditionPresets.map(condition => {
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.Menu.MenuItem.litTagName}
                .value=${condition.i18nTitleKey}
                .selected=${selectedOption === condition.i18nTitleKey}
                jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.item(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(condition.i18nTitleKey || ''))}
              >
                ${condition.title instanceof Function
                    ? condition.title()
                    : condition.title}
              </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.Menu.MenuItem.litTagName}>`;
            })}
          </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.SelectMenu.SelectMenu.litTagName}>
        </label>
      </div>`);
            replaySettingsFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div class="editable-setting">
        <label class="wrapping-label" title=${i18nString(UIStrings.timeoutExplanation)}>
          ${i18nString(UIStrings.timeoutLabel)}
          <input
            @input=${this.#onTimeoutInput}
            required
            min=${_models_models_js__WEBPACK_IMPORTED_MODULE_15__.SchemaUtils.minTimeout}
            max=${_models_models_js__WEBPACK_IMPORTED_MODULE_15__.SchemaUtils.maxTimeout}
            value=${this.#settings.timeout || _models_models_js__WEBPACK_IMPORTED_MODULE_15__.RecordingPlayer.defaultTimeout}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.textField('timeout').track({ change: true })}
            class="devtools-text-input"
            type="number">
        </label>
      </div>`);
            // clang-format on
        }
        const isEditable = !this.#isRecording && !this.#replayState.isPlaying;
        const replaySettingsButtonClassMap = {
            'settings-title': true,
            expanded: this.#replaySettingsExpanded,
        };
        const replaySettingsClassMap = {
            expanded: this.#replaySettingsExpanded,
            settings: true,
        };
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <div class="settings-row">
        <div class="settings-container">
          <div
            class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.Directives.classMap(replaySettingsButtonClassMap)}
            @keydown=${isEditable && this.#onReplaySettingsKeydown}
            @click=${isEditable && this.#onToggleReplaySettings}
            tabindex="0"
            role="button"
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.action('replay-settings').track({ click: true })}
            aria-label=${i18nString(UIStrings.editReplaySettings)}>
            <span>${i18nString(UIStrings.replaySettings)}</span>
            ${isEditable
            ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon.litTagName}
                    class="chevron"
                    name="triangle-down">
                  </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon.litTagName}>`
            : ''}
          </div>
          <div class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.Directives.classMap(replaySettingsClassMap)}>
            ${replaySettingsFragments.length
            ? replaySettingsFragments
            : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div>${i18nString(UIStrings.default)}</div>`}
          </div>
        </div>
        <div class="settings-container">
          <div class="settings-title">${i18nString(UIStrings.environment)}</div>
          <div class="settings">
            ${environmentFragments.length
            ? environmentFragments
            : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div>${i18nString(UIStrings.default)}</div>`}
          </div>
        </div>
      </div>
    `;
        // clang-format on
    }
    #getCurrentConverter() {
        const currentConverter = [
            ...(this.#builtInConverters || []),
            ...(this.#extensionConverters || []),
        ].find(converter => converter.getId() === this.#converterId);
        if (!currentConverter) {
            return this.#builtInConverters[0];
        }
        return currentConverter;
    }
    #renderTimelineArea() {
        if (this.#extensionDescriptor) {
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
        <${_ExtensionView_js__WEBPACK_IMPORTED_MODULE_16__.ExtensionView.litTagName} .descriptor=${this.#extensionDescriptor}>
        </${_ExtensionView_js__WEBPACK_IMPORTED_MODULE_16__.ExtensionView.litTagName}>
      `;
            // clang-format on
        }
        const currentConverter = this.#getCurrentConverter();
        const converterFormatName = currentConverter?.getFormatName();
        // clang-format off
        return !this.#showCodeView
            ? this.#renderSections()
            : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
        <${_ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_11__.SplitView.SplitView.litTagName}>
          <div slot="main">
            ${this.#renderSections()}
          </div>
          <div slot="sidebar" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.pane('source-code').track({ resize: true })}>
            <div class="section-toolbar" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.toolbar()}>
              <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.SelectMenu.SelectMenu.litTagName}
                @selectmenuselected=${this.#onCodeFormatChange}
                .showDivider=${true}
                .showArrow=${true}
                .sideButton=${false}
                .showSelectedItem=${true}
                .showConnector=${false}
                .position=${"bottom" /* Dialogs.Dialog.DialogVerticalPosition.BOTTOM */}
                .buttonTitle=${converterFormatName}
                .jslogContext=${'code-format'}
              >
                ${this.#builtInConverters.map(converter => {
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.Menu.MenuItem.litTagName}
                    .value=${converter.getId()}
                    .selected=${this.#converterId === converter.getId()}
                    jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.action().track({ click: true }).context(`converter-${_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(converter.getId())}`)}
                  >
                    ${converter.getFormatName()}
                  </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.Menu.MenuItem.litTagName}>`;
            })}
                ${this.#extensionConverters.map(converter => {
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.Menu.MenuItem.litTagName}
                    .value=${converter.getId()}
                    .selected=${this.#converterId === converter.getId()}
                    jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.action().track({ click: true }).context('converter-extension')}
                  >
                    ${converter.getFormatName()}
                  </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.Menu.MenuItem.litTagName}>`;
            })}
              </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.SelectMenu.SelectMenu.litTagName}>
              <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
                title=${_models_models_js__WEBPACK_IMPORTED_MODULE_15__.Tooltip.getTooltipForActions(i18nString(UIStrings.hideCode), "chrome-recorder.toggle-code-view" /* Actions.RecorderActions.ToggleCodeView */)}
                .data=${{
                variant: "icon" /* Buttons.Button.Variant.ICON */,
                size: "SMALL" /* Buttons.Button.Size.SMALL */,
                iconName: 'cross',
            }}
                @click=${this.showCodeToggle}
                jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.close().track({ click: true })}
              ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
            </div>
            <div class="text-editor" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.textField().track({ change: true })}>
              <${_ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor.litTagName} .state=${this.#editorState}></${_ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor.litTagName}>
            </div>
          </div>
        </${_ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_11__.SplitView.SplitView.litTagName}>
      `;
        // clang-format on
    }
    #renderScreenshot(section) {
        if (!section.screenshot) {
            return null;
        }
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <img class="screenshot" src=${section.screenshot} alt=${i18nString(UIStrings.screenshotForSection)} />
    `;
        // clang-format on
    }
    #renderReplayOrAbortButton() {
        if (this.#replayState.isPlaying) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName} .jslogContext=${'abort-replay'} @click=${this.#handleAbortReplay} .iconName=${'pause'} .variant=${"outlined" /* Buttons.Button.Variant.OUTLINED */}>
          ${i18nString(UIStrings.cancelReplay)}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>`;
        }
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<${_ReplaySection_js__WEBPACK_IMPORTED_MODULE_18__.ReplaySection.litTagName}
        .data=${{
            settings: this.#recorderSettings,
            replayExtensions: this.#replayExtensions,
        }}
        .disabled=${this.#replayState.isPlaying}
        @startreplay=${this.#handleTogglePlaying}
        >
      </${_ReplaySection_js__WEBPACK_IMPORTED_MODULE_18__.ReplaySection.litTagName}>`;
        // clang-format on
    }
    #handleMeasurePerformanceClickEvent(event) {
        event.stopPropagation();
        this.dispatchEvent(new PlayRecordingEvent({
            targetPanel: "timeline" /* TargetPanel.PerformancePanel */,
            speed: "normal" /* PlayRecordingSpeed.Normal */,
        }));
    }
    showCodeToggle = () => {
        this.#showCodeView = !this.#showCodeView;
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingCodeToggled(this.#showCodeView ? 1 /* Host.UserMetrics.RecordingCodeToggled.CodeShown */ :
            2 /* Host.UserMetrics.RecordingCodeToggled.CodeHidden */);
        void this.#convertToCode();
    };
    #convertToCode = async () => {
        if (!this.#userFlow) {
            return;
        }
        const converter = this.#getCurrentConverter();
        if (!converter) {
            return;
        }
        const [code, sourceMap] = await converter.stringify(this.#userFlow);
        this.#code = code;
        this.#sourceMap = sourceMap;
        this.#sourceMap?.shift();
        const mediaType = converter.getMediaType();
        const languageSupport = mediaType ? await _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_6__.CodeHighlighter.languageFromMIME(mediaType) : null;
        this.#editorState = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.create({
            doc: this.#code,
            extensions: [
                _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__.Config.baseConfiguration(this.#code),
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.readOnly.of(true),
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__.EditorView.lineWrapping,
                languageSupport ? languageSupport : [],
            ],
        });
        this.#render();
        // Used by tests.
        this.dispatchEvent(new Event('code-generated'));
    };
    #highlightCodeForStep = (step, scroll = false) => {
        if (!this.#sourceMap) {
            return;
        }
        const stepIndex = this.#steps.indexOf(step);
        if (stepIndex === -1) {
            return;
        }
        const editor = this.#shadow.querySelector('devtools-text-editor');
        if (!editor) {
            return;
        }
        const cm = editor.editor;
        if (!cm) {
            return;
        }
        const line = this.#sourceMap[stepIndex * 2];
        const length = this.#sourceMap[stepIndex * 2 + 1];
        let selection = editor.createSelection({ lineNumber: line + length, columnNumber: 0 }, { lineNumber: line, columnNumber: 0 });
        const lastLine = editor.state.doc.lineAt(selection.main.anchor);
        selection = editor.createSelection({ lineNumber: line + length - 1, columnNumber: lastLine.length + 1 }, { lineNumber: line, columnNumber: 0 });
        cm.dispatch({
            selection,
            effects: scroll ?
                [
                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__.EditorView.scrollIntoView(selection.main, {
                        y: 'nearest',
                    }),
                ] :
                undefined,
        });
    };
    #onCodeFormatChange = (event) => {
        this.#converterId = event.itemValue;
        if (this.#recorderSettings) {
            this.#recorderSettings.preferredCopyFormat = event.itemValue;
        }
        void this.#convertToCode();
    };
    #renderSections() {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <div class="sections">
      ${!this.#showCodeView
            ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div class="section-toolbar">
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
          @click=${this.showCodeToggle}
          class="show-code"
          .data=${{
                variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
                title: _models_models_js__WEBPACK_IMPORTED_MODULE_15__.Tooltip.getTooltipForActions(i18nString(UIStrings.showCode), "chrome-recorder.toggle-code-view" /* Actions.RecorderActions.ToggleCodeView */),
            }}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.toggleSubpane("chrome-recorder.toggle-code-view" /* Actions.RecorderActions.ToggleCodeView */).track({ click: true })}
        >
          ${i18nString(UIStrings.showCode)}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
      </div>`
            : ''}
      ${this.#sections.map((section, i) => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
            <div class="section">
              <div class="screenshot-wrapper">
                ${this.#renderScreenshot(section)}
              </div>
              <div class="content">
                <div class="steps">
                  <${_StepView_js__WEBPACK_IMPORTED_MODULE_19__.StepView.litTagName}
                    @click=${this.#onStepClick}
                    @mouseover=${this.#onStepHover}
                    .data=${{
            section,
            state: this.#getSectionState(section),
            isStartOfGroup: true,
            isEndOfGroup: section.steps.length === 0,
            isFirstSection: i === 0,
            isLastSection: i === this.#sections.length - 1 &&
                section.steps.length === 0,
            isSelected: this.#selectedStep === (section.causingStep || null),
            sectionIndex: i,
            isRecording: this.#isRecording,
            isPlaying: this.#replayState.isPlaying,
            error: this.#getSectionState(section) === "error" /* State.Error */
                ? this.#currentError
                : undefined,
            hasBreakpoint: false,
            removable: this.#steps.length > 1 && section.causingStep,
        }}
                  >
                  </${_StepView_js__WEBPACK_IMPORTED_MODULE_19__.StepView.litTagName}>
                  ${section.steps.map(step => this.#renderStep(section, step, i === this.#sections.length - 1))}
                  ${!this.#recordingTogglingInProgress && this.#isRecording && i === this.#sections.length - 1 ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<devtools-button
                    class="step add-assertion-button"
                    .data=${{
            variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
            title: i18nString(UIStrings.addAssertion),
            jslogContext: 'add-assertion',
        }}
                    @click=${this.#dispatchAddAssertionEvent}
                  >${i18nString(UIStrings.addAssertion)}</devtools-button>` : undefined}
                  ${this.#isRecording && i === this.#sections.length - 1
            ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div class="step recording">${i18nString(UIStrings.recording)}</div>`
            : null}
                </div>
              </div>
            </div>
      `)}
      </div>
    `;
        // clang-format on
    }
    #renderHeader() {
        if (!this.#userFlow) {
            return '';
        }
        const { title } = this.#userFlow;
        const isTitleEditable = !this.#replayState.isPlaying && !this.#isRecording;
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <div class="header">
        <div class="header-title-wrapper">
          <div class="header-title">
            <span @blur=${this.#onTitleBlur}
                  @keydown=${this.#onTitleInputKeyDown}
                  id="title-input"
                  .contentEditable=${isTitleEditable ? 'true' : 'false'}
                  jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.value('title').track({ change: true })}
                  class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.Directives.classMap({
            'has-error': this.#isTitleInvalid,
            'disabled': !isTitleEditable,
        })}
                  .innerText=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.Directives.live(title)}></span>
            <div class="title-button-bar">
              <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
                @click=${this.#onEditTitleButtonClick}
                .data=${{
            disabled: !isTitleEditable,
            variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */,
            iconName: 'edit',
            title: i18nString(UIStrings.editTitle),
            jslogContext: 'edit-title',
        }}
              ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
            </div>
          </div>
          ${this.#isTitleInvalid
            ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div class="title-input-error-text">
            ${i18nString(UIStrings.requiredTitleError)}
          </div>`
            : ''}
        </div>
        ${!this.#isRecording && this.#replayAllowed
            ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div class="actions">
                <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
                  @click=${this.#handleMeasurePerformanceClickEvent}
                  .data=${{
                disabled: this.#replayState.isPlaying,
                variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
                iconName: 'performance',
                title: i18nString(UIStrings.performancePanel),
                jslogContext: 'measure-performance',
            }}
                >
                  ${i18nString(UIStrings.performancePanel)}
                </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
                <div class="separator"></div>
                ${this.#renderReplayOrAbortButton()}
              </div>`
            : ''}
      </div>`;
        // clang-format on
    }
    #renderFooter() {
        if (!this.#isRecording) {
            return '';
        }
        const translation = this.#recordingTogglingInProgress ? i18nString(UIStrings.recordingIsBeingStopped) :
            i18nString(UIStrings.endRecording);
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <div class="footer">
        <div class="controls">
          <devtools-control-button
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.toggle('toggle-recording').track({ click: true })}
            @click=${this.#dispatchRecordingFinished}
            .disabled=${this.#recordingTogglingInProgress}
            .shape=${'square'}
            .label=${translation}
            title=${_models_models_js__WEBPACK_IMPORTED_MODULE_15__.Tooltip.getTooltipForActions(translation, "chrome-recorder.start-recording" /* Actions.RecorderActions.StartRecording */)}
          >
          </devtools-control-button>
        </div>
      </div>
    `;
        // clang-format on
    }
    #render() {
        const classNames = {
            wrapper: true,
            'is-recording': this.#isRecording,
            'is-playing': this.#replayState.isPlaying,
            'was-successful': this.#lastReplayResult === "Success" /* Models.RecordingPlayer.ReplayResult.Success */,
            'was-failure': this.#lastReplayResult === "Failure" /* Models.RecordingPlayer.ReplayResult.Failure */,
        };
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <div @click=${this.#onWrapperClick} class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.Directives.classMap(classNames)}>
        <div class="main">
          ${this.#renderHeader()}
          ${this.#extensionDescriptor
            ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
            <${_ExtensionView_js__WEBPACK_IMPORTED_MODULE_16__.ExtensionView.litTagName} .descriptor=${this.#extensionDescriptor}>
            </${_ExtensionView_js__WEBPACK_IMPORTED_MODULE_16__.ExtensionView.litTagName}>
          `
            : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
            ${this.#renderSettings()}
            ${this.#renderTimelineArea()}
          `}
          ${this.#renderFooter()}
        </div>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-recording-view', RecordingView);
//# sourceMappingURL=RecordingView.js.map

/***/ }),

/***/ "./panels/recorder/components/extensionView.css.js":
/*!*********************************************************!*\
  !*** ./panels/recorder/components/extensionView.css.js ***!
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
  outline: none;
  box-sizing: border-box;
  font-size: inherit;
}

.extension-view {
  display: flex;
  flex-direction: column;
  height: 100%;
}

main {
  flex: 1;
}

iframe {
  border: none;
  height: 100%;
  width: 100%;
}

header {
  display: flex;
  padding: 3px 8px;
  justify-content: space-between;
  border-bottom: 1px solid var(--sys-color-divider);
}

header > div {
  align-self: center;
}

.icon {
  display: block;
  width: 16px;
  height: 16px;
  color: var(--sys-color-secondary);
}

.title {
  display: flex;
  flex-direction: row;
  gap: 6px;
  color: var(--sys-color-secondary);
  align-items: center;
  font-weight: 500;
}

/*# sourceURL=extensionView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/recorder/components/recordingView.css.js":
/*!*********************************************************!*\
  !*** ./panels/recorder/components/recordingView.css.js ***!
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
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: inherit;
}

.wrapper {
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100%;
}

.main {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.sections {
  flex: 1;
  min-height: 0;
  overflow: hidden auto;
  background-color: var(--sys-color-cdt-base-container);
  z-index: 0;
  position: relative;
  container: sections / inline-size; /* stylelint-disable-line property-no-unknown */
}

.section {
  display: flex;
  padding: 0 16px;
  gap: 8px;
  position: relative;
}

.section::after {
  content: "";
  border-bottom: 1px solid var(--sys-color-divider);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.section:last-child {
  /* Make sure there is enough space for the context menu. */
  margin-bottom: 70px;
}

.section:last-child::after {
  content: none;
}

.screenshot-wrapper {
  flex: 0 0 80px;
  padding-top: 32px;
  z-index: 2; /* We want this to be on top of \\'.step-overlay\\' */
}

/* stylelint-disable-next-line at-rule-no-unknown */
@container sections (max-width: 400px) {
  .screenshot-wrapper {
    display: none;
  }
}

.screenshot {
  object-fit: cover;
  object-position: top center;
  max-width: 100%;
  width: 200px;
  height: auto;
  border: 1px solid var(--sys-color-divider);
  border-radius: 1px;
}

.content {
  flex: 1;
  min-width: 0;
}

.steps {
  flex: 1;
  position: relative;
  align-self: flex-start;
  overflow: visible;
}

.step {
  position: relative;
  padding-left: 40px;
  margin: 16px 0;
}

.step .action {
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.03em;
}

.recording {
  color: var(--sys-color-primary);
  font-style: italic;
  margin-top: 8px;
  margin-bottom: 0;
}

.add-assertion-button {
  margin-top: 8px;
}

.details {
  max-width: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.url {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.03em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--sys-color-secondary);
  max-width: 100%;
  margin-bottom: 16px;
}

.header {
  align-items: center;
  border-bottom: 1px solid var(--sys-color-divider);
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  padding: 16px;
}

.header-title-wrapper {
  max-width: 100%;
}

.header-title {
  align-items: center;
  display: flex;
  flex: 1;
  max-width: 100%;
}

.header-title::before {
  content: "";
  min-width: 12px;
  height: 12px;
  display: inline-block;
  background: var(--sys-color-primary);
  border-radius: 50%;
  margin-right: 7px;
}

#title-input {
  box-sizing: content-box;
  font-family: inherit;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.02em;
  padding: 1px 4px;
  border: 1px solid transparent;
  border-radius: 1px;
  word-break: break-all;
}

#title-input:hover {
  border-color: var(--input-outline);
}

#title-input.has-error {
  border-color: var(--sys-color-error);
}

#title-input.disabled {
  color: var(--sys-color-state-disabled);
}

.title-input-error-text {
  margin-top: 4px;
  margin-left: 19px;
  color: var(--sys-color-error);
}

.title-button-bar {
  padding-left: 2px;
  display: flex;
}

#title-input:focus + .title-button-bar {
  display: none;
}

.settings-row {
  padding: 16px 28px;
  border-bottom: 1px solid var(--sys-color-divider);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.settings-title {
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: var(--sys-color-on-surface);
  display: flex;
  align-items: center;
  align-content: center;
  gap: 5px;
  width: fit-content;
}

.settings {
  margin-top: 4px;
  display: flex;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.03em;
  color: var(--sys-color-on-surface-subtle);
}

.settings.expanded {
  gap: 10px;
}

.settings .separator {
  width: 1px;
  height: 20px;
  background-color: var(--sys-color-divider);
  margin: 0 5px;
}

.actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.actions .separator {
  width: 1px;
  height: 24px;
  background-color: var(--sys-color-divider);
}

.is-recording .header-title::before {
  background: var(--sys-color-error-bright);
}

.footer {
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--sys-color-divider);
  padding: 12px;
  background: var(--sys-color-cdt-base-container);
  z-index: 1;
}

.controls {
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
}

.chevron {
  width: 14px;
  height: 14px;
  transform: rotate(-90deg);
  color: var(--sys-color-on-surface);
}

.expanded .chevron {
  transform: rotate(0);
}

.editable-setting {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
}

.editable-setting devtools-select-menu {
  height: 32px;
}

.editable-setting .devtools-text-input {
  width: fit-content;
}

.wrapping-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.text-editor {
  height: 100%;
  overflow: auto;
}

.section-toolbar {
  display: flex;
  align-items: center;
  padding: 3px 5px;
  justify-content: space-between;
  gap: 3px;
}

.section-toolbar > devtools-select-menu {
  height: 24px;
  min-width: 50px;
}

.sections .section-toolbar {
  justify-content: flex-end;
}

devtools-split-view {
  flex: 1 1 0%;
  min-height: 0;
}

[slot="sidebar"] {
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  width: 100%;
}

[slot="sidebar"] .section-toolbar {
  border-bottom: 1px solid var(--sys-color-divider);
}

.show-code {
  margin-right: 14px;
  margin-top: 8px;
}

devtools-recorder-extension-view {
  flex: 1;
}

/*# sourceURL=recordingView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/recorder/extensions/ExtensionManager.js":
/*!********************************************************!*\
  !*** ./panels/recorder/extensions/ExtensionManager.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionManager: () => (/* binding */ ExtensionManager)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/extensions/extensions.js */ "./models/extensions/extensions.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


let instance = null;
class ExtensionManager extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    static instance() {
        if (!instance) {
            instance = new ExtensionManager();
        }
        return instance;
    }
    #views = new Map();
    constructor() {
        super();
        this.attach();
    }
    attach() {
        const pluginManager = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.RecorderPluginManager.instance();
        pluginManager.addEventListener("pluginAdded" /* Extensions.RecorderPluginManager.Events.PluginAdded */, this.#handlePlugin);
        pluginManager.addEventListener("pluginRemoved" /* Extensions.RecorderPluginManager.Events.PluginRemoved */, this.#handlePlugin);
        pluginManager.addEventListener("viewRegistered" /* Extensions.RecorderPluginManager.Events.ViewRegistered */, this.#handleView);
        for (const descriptor of pluginManager.views()) {
            this.#handleView({ data: descriptor });
        }
    }
    detach() {
        const pluginManager = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.RecorderPluginManager.instance();
        pluginManager.removeEventListener("pluginAdded" /* Extensions.RecorderPluginManager.Events.PluginAdded */, this.#handlePlugin);
        pluginManager.removeEventListener("pluginRemoved" /* Extensions.RecorderPluginManager.Events.PluginRemoved */, this.#handlePlugin);
        pluginManager.removeEventListener("viewRegistered" /* Extensions.RecorderPluginManager.Events.ViewRegistered */, this.#handleView);
        this.#views.clear();
    }
    extensions() {
        return _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.RecorderPluginManager.instance().plugins();
    }
    getView(descriptorId) {
        const view = this.#views.get(descriptorId);
        if (!view) {
            throw new Error('View not found');
        }
        return view;
    }
    #handlePlugin = () => {
        this.dispatchEventToListeners("extensionsUpdated" /* Events.ExtensionsUpdated */, this.extensions());
    };
    #handleView = (event) => {
        const descriptor = event.data;
        if (!this.#views.has(descriptor.id)) {
            this.#views.set(descriptor.id, new ExtensionIframe(descriptor));
        }
    };
}
class ExtensionIframe {
    #descriptor;
    #iframe;
    #isShowing = false;
    #isLoaded = false;
    constructor(descriptor) {
        this.#descriptor = descriptor;
        this.#iframe = document.createElement('iframe');
        this.#iframe.src = descriptor.pagePath;
        this.#iframe.onload = this.#onIframeLoad;
    }
    #onIframeLoad = () => {
        this.#isLoaded = true;
        if (this.#isShowing) {
            this.#descriptor.onShown();
        }
    };
    show() {
        if (this.#isShowing) {
            return;
        }
        this.#isShowing = true;
        if (this.#isLoaded) {
            this.#descriptor.onShown();
        }
    }
    hide() {
        if (!this.#isShowing) {
            return;
        }
        this.#isShowing = false;
        this.#isLoaded = false;
        this.#descriptor.onHidden();
    }
    frame() {
        return this.#iframe;
    }
}
//# sourceMappingURL=ExtensionManager.js.map

/***/ }),

/***/ "./panels/recorder/extensions/extensions.js":
/*!**************************************************!*\
  !*** ./panels/recorder/extensions/extensions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionManager: () => (/* reexport module object */ _ExtensionManager_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ExtensionManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExtensionManager.js */ "./panels/recorder/extensions/ExtensionManager.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=extensions.js.map

/***/ }),

/***/ "./ui/components/split_view/SplitView.js":
/*!***********************************************!*\
  !*** ./ui/components/split_view/SplitView.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitView: () => (/* binding */ SplitView)
/* harmony export */ });
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// clean-css does not compile this file correctly. So as a workaround adding styles inline.
const styles = `
  :host {
    --current-main-area-size: 50%;
    --resizer-size: 3px;
    --min-main-area-size: 200px;
    --min-sidebar-size: 150px;
    --main-area-size: calc(max(var(--current-main-area-size), var(--min-main-area-size)));

    height: 100%;
    width: 100%;
    display: block;
    overflow: auto;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    container: sidebar / size; /* stylelint-disable-line property-no-unknown */
  }

  .container {
    --resizer-position: calc(min(var(--main-area-size), calc(100% - var(--min-sidebar-size))));
    --min-container-size: calc(var(--min-sidebar-size) + var(--min-main-area-size) + var(--resizer-size));

    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    position: relative;
    gap: var(--resizer-size);

    min-width: var(--min-container-size);
  }

  #resizer {
    background-color: var(--sys-color-surface1);
    position: absolute;
    user-select: none;

    /* horizontal */
    width: var(--resizer-size);
    cursor: col-resize;
    left: var(--resizer-position);
    bottom: 0;
    top: 0;
  }

  slot {
    overflow: auto;
    display: block;
  }

  slot[name="main"] {

    /* horizontal */
    width: var(--resizer-position);
    min-width: var(--min-main-area-size);
  }

  slot[name="sidebar"] {
    flex: 1 0 0;

    min-width: var(--min-sidebar-size);
  }

  .horizontal .container {
    flex-direction: column;
    min-height: var(--min-container-size);
    min-width: auto;
  }

  .horizontal #resizer {
    width: auto;
    height: var(--resizer-size);
    cursor: row-resize;
    top: var(--resizer-position);
    left: 0;
    right: 0;
  }

  .horizontal slot[name="main"] {
    width: auto;
    min-width: auto;
    height: var(--resizer-position);
    min-height: var(--min-main-area-size);
  }

  .horizontal slot[name="sidebar"] {
    min-width: auto;
    min-height: var(--min-sidebar-size);
  }
`;
const splitViewStyles = new CSSStyleSheet();
splitViewStyles.replaceSync(styles);
class SplitView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-split-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #mousePos = [0, 0];
    #mainAxisIdx = 0;
    #mainDimensions = [0, 0];
    #observer;
    #horizontal = false;
    connectedCallback() {
        this.style.setProperty('--current-main-area-size', '60%');
        this.#shadow.adoptedStyleSheets = [splitViewStyles];
        this.#observer = new ResizeObserver(entries => this.#onResize(entries[0].contentRect));
        this.#observer.observe(this);
        this.#render();
    }
    get horizontal() {
        return this.#horizontal;
    }
    set horizontal(horizontal) {
        this.#horizontal = horizontal;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, this.#render);
    }
    #onResize = (rect) => {
        const prevMainAxisIdx = this.#mainAxisIdx;
        if (rect.width <= 600 && rect.height >= 600 || this.#horizontal) {
            this.#mainAxisIdx = 1;
        }
        else {
            this.#mainAxisIdx = 0;
        }
        if (this.#mainAxisIdx !== prevMainAxisIdx) {
            void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, this.#render);
        }
    };
    #onMouseDown = (event) => {
        const main = this.#shadow.querySelector('slot[name=main]');
        if (!main) {
            throw new Error('Main slot not found');
        }
        const rect = main.getBoundingClientRect();
        this.#mainDimensions = [rect.width, rect.height];
        this.#mousePos = [event.clientX, event.clientY];
        window.addEventListener('mousemove', this.#onMouseMove, true);
        window.addEventListener('mouseup', this.#onMouseUp, true);
    };
    #onMouseUp = () => {
        window.removeEventListener('mousemove', this.#onMouseMove, true);
        window.removeEventListener('mouseup', this.#onMouseUp, true);
    };
    #onMouseMove = (event) => {
        const mousePos = [event.clientX, event.clientY];
        const delta = mousePos[this.#mainAxisIdx] - this.#mousePos[this.#mainAxisIdx];
        const rect = this.getBoundingClientRect();
        const containerDimensions = [rect.width, rect.height];
        const length = ((this.#mainDimensions[this.#mainAxisIdx] + delta) * 100) / containerDimensions[this.#mainAxisIdx];
        this.style.setProperty('--current-main-area-size', length + '%');
    };
    #render = () => {
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
        <div class="wrapper ${this.#mainAxisIdx === 1 ? 'horizontal' : ''}">
          <div class="container">
            <slot name="main"></slot>
            <div id="resizer" @mousedown=${this.#onMouseDown}></div>
            <slot name="sidebar"></slot>
          </div>
        </div>
      `, this.#shadow, { host: this });
        // clang-format on
    };
}
customElements.define('devtools-split-view', SplitView);
//# sourceMappingURL=SplitView.js.map

/***/ }),

/***/ "./ui/components/split_view/split_view.js":
/*!************************************************!*\
  !*** ./ui/components/split_view/split_view.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitView: () => (/* reexport module object */ _SplitView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _SplitView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SplitView.js */ "./ui/components/split_view/SplitView.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=split_view.js.map

/***/ })

}]);