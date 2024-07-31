"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_components_RecordingView_ts"],{

/***/ "./src/panels/recorder/components/RecordingView.ts":
/*!*********************************************************!*\
  !*** ./src/panels/recorder/components/RecordingView.ts ***!
  \*********************************************************/
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
/* harmony export */   TargetPanel: () => (/* binding */ TargetPanel),
/* harmony export */   TimeoutChanged: () => (/* binding */ TimeoutChanged)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/code_highlighter/code_highlighter.js */ "./src/ui/components/code_highlighter/code_highlighter.ts");
/* harmony import */ var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/dialogs/dialogs.js */ "./src/ui/components/dialogs/dialogs.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./src/ui/components/input/input.ts");
/* harmony import */ var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/components/menus/menus.js */ "./src/ui/components/menus/menus.ts");
/* harmony import */ var _ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/components/split_view/split_view.js */ "./src/ui/components/split_view/split_view.ts");
/* harmony import */ var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/components/text_editor/text_editor.js */ "./src/ui/components/text_editor/text_editor.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../models/models.js */ "./src/panels/recorder/models/models.ts");
/* harmony import */ var _models_RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../models/RecordingPlayer.js */ "./src/panels/recorder/models/RecordingPlayer.ts");
/* harmony import */ var _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../recorder-actions/recorder-actions.js */ "./src/panels/recorder/recorder-actions/recorder-actions.ts");
/* harmony import */ var _ExtensionView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ExtensionView.js */ "./src/panels/recorder/components/ExtensionView.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './recordingView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ReplaySection_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ReplaySection.js */ "./src/panels/recorder/components/ReplaySection.ts");
/* harmony import */ var _StepView_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./StepView.js */ "./src/panels/recorder/components/StepView.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _RecordingView_instances, _RecordingView_shadow, _RecordingView_replayState, _RecordingView_userFlow, _RecordingView_isRecording, _RecordingView_recordingTogglingInProgress, _RecordingView_isTitleInvalid, _RecordingView_currentStep, _RecordingView_steps, _RecordingView_currentError, _RecordingView_sections, _RecordingView_settings, _RecordingView_recorderSettings, _RecordingView_lastReplayResult, _RecordingView_breakpointIndexes, _RecordingView_selectedStep, _RecordingView_replaySettingsExpanded, _RecordingView_replayAllowed, _RecordingView_builtInConverters, _RecordingView_extensionConverters, _RecordingView_replayExtensions, _RecordingView_showCodeView, _RecordingView_code, _RecordingView_converterId, _RecordingView_editorState, _RecordingView_sourceMap, _RecordingView_extensionDescriptor, _RecordingView_onCopyBound, _RecordingView_dispatchAddAssertionEvent, _RecordingView_dispatchRecordingFinished, _RecordingView_handleAbortReplay, _RecordingView_handleTogglePlaying, _RecordingView_getStepState, _RecordingView_getSectionState, _RecordingView_renderStep, _RecordingView_onStepHover, _RecordingView_onStepClick, _RecordingView_onWrapperClick, _RecordingView_onReplaySettingsKeydown, _RecordingView_onToggleReplaySettings, _RecordingView_onNetworkConditionsChange, _RecordingView_onTimeoutInput, _RecordingView_onTitleBlur, _RecordingView_onTitleInputKeyDown, _RecordingView_onEditTitleButtonClick, _RecordingView_onSelectMenuLabelClick, _RecordingView_copyCurrentSelection, _RecordingView_onCopyStepEvent, _RecordingView_onCopy, _RecordingView_renderSettings, _RecordingView_getCurrentConverter, _RecordingView_renderTimelineArea, _RecordingView_renderScreenshot, _RecordingView_renderReplayOrAbortButton, _RecordingView_handleMeasurePerformanceClickEvent, _RecordingView_convertToCode, _RecordingView_highlightCodeForStep, _RecordingView_onCodeFormatChange, _RecordingView_renderSections, _RecordingView_renderHeader, _RecordingView_renderFooter, _RecordingView_render;






















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
    constructor() {
        super(RecordingFinishedEvent.eventName);
    }
}
Object.defineProperty(RecordingFinishedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'recordingfinished'
});
var TargetPanel;
(function (TargetPanel) {
    TargetPanel["PerformancePanel"] = "timeline";
    TargetPanel["Default"] = "chrome-recorder";
})(TargetPanel || (TargetPanel = {}));
class PlayRecordingEvent extends Event {
    constructor(data = {
        targetPanel: TargetPanel.Default,
        speed: _models_RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_16__.PlayRecordingSpeed.Normal,
    }) {
        super(PlayRecordingEvent.eventName);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
}
Object.defineProperty(PlayRecordingEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'playrecording'
});
class AbortReplayEvent extends Event {
    constructor() {
        super(AbortReplayEvent.eventName);
    }
}
Object.defineProperty(AbortReplayEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'abortreplay'
});
class RecordingChangedEvent extends Event {
    constructor(currentStep, newStep) {
        super(RecordingChangedEvent.eventName);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { currentStep, newStep };
    }
}
Object.defineProperty(RecordingChangedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'recordingchanged'
});
class AddAssertionEvent extends Event {
    constructor() {
        super(AddAssertionEvent.eventName);
    }
}
Object.defineProperty(AddAssertionEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'addassertion'
});
class RecordingTitleChangedEvent extends Event {
    constructor(title) {
        super(RecordingTitleChangedEvent.eventName, {});
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.title = title;
    }
}
Object.defineProperty(RecordingTitleChangedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'recordingtitlechanged'
});
class NetworkConditionsChanged extends Event {
    constructor(data) {
        super(NetworkConditionsChanged.eventName, {
            composed: true,
            bubbles: true,
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
}
Object.defineProperty(NetworkConditionsChanged, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'networkconditionschanged'
});
class TimeoutChanged extends Event {
    constructor(data) {
        super(TimeoutChanged.eventName, { composed: true, bubbles: true });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
}
Object.defineProperty(TimeoutChanged, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'timeoutchanged'
});
const networkConditionPresets = [
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NoThrottlingConditions,
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.OfflineConditions,
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Slow3GConditions,
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Slow4GConditions,
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Fast4GConditions,
];
function converterIdToFlowMetric(converterId) {
    switch (converterId) {
        case _models_models_js__WEBPACK_IMPORTED_MODULE_15__.ConverterIds.ConverterIds.Puppeteer:
            return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingCopiedToClipboard.CopiedRecordingWithPuppeteer;
        case _models_models_js__WEBPACK_IMPORTED_MODULE_15__.ConverterIds.ConverterIds.JSON:
            return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingCopiedToClipboard.CopiedRecordingWithJSON;
        case _models_models_js__WEBPACK_IMPORTED_MODULE_15__.ConverterIds.ConverterIds.Replay:
            return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingCopiedToClipboard.CopiedRecordingWithReplay;
        default:
            return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingCopiedToClipboard.CopiedRecordingWithExtension;
    }
}
function converterIdToStepMetric(converterId) {
    switch (converterId) {
        case _models_models_js__WEBPACK_IMPORTED_MODULE_15__.ConverterIds.ConverterIds.Puppeteer:
            return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingCopiedToClipboard.CopiedStepWithPuppeteer;
        case _models_models_js__WEBPACK_IMPORTED_MODULE_15__.ConverterIds.ConverterIds.JSON:
            return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingCopiedToClipboard.CopiedStepWithJSON;
        case _models_models_js__WEBPACK_IMPORTED_MODULE_15__.ConverterIds.ConverterIds.Replay:
            return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingCopiedToClipboard.CopiedStepWithReplay;
        default:
            return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingCopiedToClipboard.CopiedStepWithExtension;
    }
}
class RecordingView extends HTMLElement {
    constructor() {
        super();
        _RecordingView_instances.add(this);
        _RecordingView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _RecordingView_replayState.set(this, { isPlaying: false, isPausedOnBreakpoint: false });
        _RecordingView_userFlow.set(this, null);
        _RecordingView_isRecording.set(this, false);
        _RecordingView_recordingTogglingInProgress.set(this, false);
        _RecordingView_isTitleInvalid.set(this, false);
        _RecordingView_currentStep.set(this, void 0);
        _RecordingView_steps.set(this, []);
        _RecordingView_currentError.set(this, void 0);
        _RecordingView_sections.set(this, []);
        _RecordingView_settings.set(this, void 0);
        _RecordingView_recorderSettings.set(this, void 0);
        _RecordingView_lastReplayResult.set(this, void 0);
        _RecordingView_breakpointIndexes.set(this, new Set());
        _RecordingView_selectedStep.set(this, void 0);
        _RecordingView_replaySettingsExpanded.set(this, false);
        _RecordingView_replayAllowed.set(this, true);
        _RecordingView_builtInConverters.set(this, []);
        _RecordingView_extensionConverters.set(this, []);
        _RecordingView_replayExtensions.set(this, void 0);
        _RecordingView_showCodeView.set(this, false);
        _RecordingView_code.set(this, '');
        _RecordingView_converterId.set(this, '');
        _RecordingView_editorState.set(this, void 0);
        _RecordingView_sourceMap.set(this, void 0);
        _RecordingView_extensionDescriptor.set(this, void 0);
        _RecordingView_onCopyBound.set(this, __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_onCopy).bind(this));
        _RecordingView_onStepHover.set(this, (event) => {
            const stepView = event.target;
            const step = stepView.step || stepView.section?.causingStep;
            if (!step || __classPrivateFieldGet(this, _RecordingView_selectedStep, "f")) {
                return;
            }
            __classPrivateFieldGet(this, _RecordingView_highlightCodeForStep, "f").call(this, step);
        });
        _RecordingView_onTitleBlur.set(this, (event) => {
            const target = event.target;
            const title = target.innerText.trim();
            if (!title) {
                __classPrivateFieldSet(this, _RecordingView_isTitleInvalid, true, "f");
                __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_render).call(this);
                return;
            }
            this.dispatchEvent(new RecordingTitleChangedEvent(title));
        });
        _RecordingView_onTitleInputKeyDown.set(this, (event) => {
            switch (event.code) {
                case 'Escape':
                case 'Enter':
                    event.target.blur();
                    event.stopPropagation();
                    break;
            }
        });
        _RecordingView_onEditTitleButtonClick.set(this, () => {
            const input = __classPrivateFieldGet(this, _RecordingView_shadow, "f").getElementById('title-input');
            input.focus();
            const range = document.createRange();
            range.selectNodeContents(input);
            range.collapse(false);
            const selection = window.getSelection();
            selection?.removeAllRanges();
            selection?.addRange(range);
        });
        _RecordingView_onSelectMenuLabelClick.set(this, (event) => {
            const target = event.target;
            if (target.matches('.wrapping-label')) {
                target.querySelector('devtools-select-menu')?.click();
            }
        });
        Object.defineProperty(this, "showCodeToggle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                __classPrivateFieldSet(this, _RecordingView_showCodeView, !__classPrivateFieldGet(this, _RecordingView_showCodeView, "f"), "f");
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingCodeToggled(__classPrivateFieldGet(this, _RecordingView_showCodeView, "f") ? _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingCodeToggled.CodeShown :
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingCodeToggled.CodeHidden);
                void __classPrivateFieldGet(this, _RecordingView_convertToCode, "f").call(this);
            }
        });
        _RecordingView_convertToCode.set(this, async () => {
            if (!__classPrivateFieldGet(this, _RecordingView_userFlow, "f")) {
                return;
            }
            const converter = __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_getCurrentConverter).call(this);
            if (!converter) {
                return;
            }
            const [code, sourceMap] = await converter.stringify(__classPrivateFieldGet(this, _RecordingView_userFlow, "f"));
            __classPrivateFieldSet(this, _RecordingView_code, code, "f");
            __classPrivateFieldSet(this, _RecordingView_sourceMap, sourceMap, "f");
            __classPrivateFieldGet(this, _RecordingView_sourceMap, "f")?.shift();
            const mediaType = converter.getMediaType();
            const languageSupport = mediaType ? await _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_6__.CodeHighlighter.languageFromMIME(mediaType) : null;
            __classPrivateFieldSet(this, _RecordingView_editorState, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.create({
                doc: __classPrivateFieldGet(this, _RecordingView_code, "f"),
                extensions: [
                    _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__.Config.baseConfiguration(__classPrivateFieldGet(this, _RecordingView_code, "f")),
                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.readOnly.of(true),
                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__.EditorView.lineWrapping,
                    languageSupport ? languageSupport : [],
                ],
            }), "f");
            __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_render).call(this);
            // Used by tests.
            this.dispatchEvent(new Event('code-generated'));
        });
        _RecordingView_highlightCodeForStep.set(this, (step, scroll = false) => {
            if (!__classPrivateFieldGet(this, _RecordingView_sourceMap, "f")) {
                return;
            }
            const stepIndex = __classPrivateFieldGet(this, _RecordingView_steps, "f").indexOf(step);
            if (stepIndex === -1) {
                return;
            }
            const editor = __classPrivateFieldGet(this, _RecordingView_shadow, "f").querySelector('devtools-text-editor');
            if (!editor) {
                return;
            }
            const cm = editor.editor;
            if (!cm) {
                return;
            }
            const line = __classPrivateFieldGet(this, _RecordingView_sourceMap, "f")[stepIndex * 2];
            const length = __classPrivateFieldGet(this, _RecordingView_sourceMap, "f")[stepIndex * 2 + 1];
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
        });
        _RecordingView_onCodeFormatChange.set(this, (event) => {
            __classPrivateFieldSet(this, _RecordingView_converterId, event.itemValue, "f");
            if (__classPrivateFieldGet(this, _RecordingView_recorderSettings, "f")) {
                __classPrivateFieldGet(this, _RecordingView_recorderSettings, "f").preferredCopyFormat = event.itemValue;
            }
            void __classPrivateFieldGet(this, _RecordingView_convertToCode, "f").call(this);
        });
    }
    set data(data) {
        __classPrivateFieldSet(this, _RecordingView_isRecording, data.isRecording, "f");
        __classPrivateFieldSet(this, _RecordingView_replayState, data.replayState, "f");
        __classPrivateFieldSet(this, _RecordingView_recordingTogglingInProgress, data.recordingTogglingInProgress, "f");
        __classPrivateFieldSet(this, _RecordingView_currentStep, data.currentStep, "f");
        __classPrivateFieldSet(this, _RecordingView_userFlow, data.recording, "f");
        __classPrivateFieldSet(this, _RecordingView_steps, __classPrivateFieldGet(this, _RecordingView_userFlow, "f").steps, "f");
        __classPrivateFieldSet(this, _RecordingView_sections, data.sections, "f");
        __classPrivateFieldSet(this, _RecordingView_settings, data.settings, "f");
        __classPrivateFieldSet(this, _RecordingView_recorderSettings, data.recorderSettings, "f");
        __classPrivateFieldSet(this, _RecordingView_currentError, data.currentError, "f");
        __classPrivateFieldSet(this, _RecordingView_lastReplayResult, data.lastReplayResult, "f");
        __classPrivateFieldSet(this, _RecordingView_replayAllowed, data.replayAllowed, "f");
        __classPrivateFieldSet(this, _RecordingView_isTitleInvalid, false, "f");
        __classPrivateFieldSet(this, _RecordingView_breakpointIndexes, data.breakpointIndexes, "f");
        __classPrivateFieldSet(this, _RecordingView_builtInConverters, data.builtInConverters, "f");
        __classPrivateFieldSet(this, _RecordingView_extensionConverters, data.extensionConverters, "f");
        __classPrivateFieldSet(this, _RecordingView_replayExtensions, data.replayExtensions, "f");
        __classPrivateFieldSet(this, _RecordingView_extensionDescriptor, data.extensionDescriptor, "f");
        __classPrivateFieldSet(this, _RecordingView_converterId, __classPrivateFieldGet(this, _RecordingView_recorderSettings, "f")?.preferredCopyFormat ?? data.builtInConverters[0]?.getId(), "f");
        void __classPrivateFieldGet(this, _RecordingView_convertToCode, "f").call(this);
        __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _RecordingView_shadow, "f").adoptedStyleSheets = [
            Object(function webpackMissingModule() { var e = new Error("Cannot find module './recordingView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_9__.textInputStyles,
        ];
        document.addEventListener('copy', __classPrivateFieldGet(this, _RecordingView_onCopyBound, "f"));
        __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_render).call(this);
    }
    disconnectedCallback() {
        document.removeEventListener('copy', __classPrivateFieldGet(this, _RecordingView_onCopyBound, "f"));
    }
    scrollToBottom() {
        const wrapper = this.shadowRoot?.querySelector('.sections');
        if (!wrapper) {
            return;
        }
        wrapper.scrollTop = wrapper.scrollHeight;
    }
}
_RecordingView_shadow = new WeakMap(), _RecordingView_replayState = new WeakMap(), _RecordingView_userFlow = new WeakMap(), _RecordingView_isRecording = new WeakMap(), _RecordingView_recordingTogglingInProgress = new WeakMap(), _RecordingView_isTitleInvalid = new WeakMap(), _RecordingView_currentStep = new WeakMap(), _RecordingView_steps = new WeakMap(), _RecordingView_currentError = new WeakMap(), _RecordingView_sections = new WeakMap(), _RecordingView_settings = new WeakMap(), _RecordingView_recorderSettings = new WeakMap(), _RecordingView_lastReplayResult = new WeakMap(), _RecordingView_breakpointIndexes = new WeakMap(), _RecordingView_selectedStep = new WeakMap(), _RecordingView_replaySettingsExpanded = new WeakMap(), _RecordingView_replayAllowed = new WeakMap(), _RecordingView_builtInConverters = new WeakMap(), _RecordingView_extensionConverters = new WeakMap(), _RecordingView_replayExtensions = new WeakMap(), _RecordingView_showCodeView = new WeakMap(), _RecordingView_code = new WeakMap(), _RecordingView_converterId = new WeakMap(), _RecordingView_editorState = new WeakMap(), _RecordingView_sourceMap = new WeakMap(), _RecordingView_extensionDescriptor = new WeakMap(), _RecordingView_onCopyBound = new WeakMap(), _RecordingView_onStepHover = new WeakMap(), _RecordingView_onTitleBlur = new WeakMap(), _RecordingView_onTitleInputKeyDown = new WeakMap(), _RecordingView_onEditTitleButtonClick = new WeakMap(), _RecordingView_onSelectMenuLabelClick = new WeakMap(), _RecordingView_convertToCode = new WeakMap(), _RecordingView_highlightCodeForStep = new WeakMap(), _RecordingView_onCodeFormatChange = new WeakMap(), _RecordingView_instances = new WeakSet(), _RecordingView_dispatchAddAssertionEvent = function _RecordingView_dispatchAddAssertionEvent() {
    this.dispatchEvent(new AddAssertionEvent());
}, _RecordingView_dispatchRecordingFinished = function _RecordingView_dispatchRecordingFinished() {
    this.dispatchEvent(new RecordingFinishedEvent());
}, _RecordingView_handleAbortReplay = function _RecordingView_handleAbortReplay() {
    this.dispatchEvent(new AbortReplayEvent());
}, _RecordingView_handleTogglePlaying = function _RecordingView_handleTogglePlaying(event) {
    this.dispatchEvent(new PlayRecordingEvent({
        targetPanel: TargetPanel.Default,
        speed: event.speed,
        extension: event.extension,
    }));
}, _RecordingView_getStepState = function _RecordingView_getStepState(step) {
    if (!__classPrivateFieldGet(this, _RecordingView_currentStep, "f")) {
        return _StepView_js__WEBPACK_IMPORTED_MODULE_21__.State.Default;
    }
    if (step === __classPrivateFieldGet(this, _RecordingView_currentStep, "f")) {
        if (__classPrivateFieldGet(this, _RecordingView_currentError, "f")) {
            return _StepView_js__WEBPACK_IMPORTED_MODULE_21__.State.Error;
        }
        if (!__classPrivateFieldGet(this, _RecordingView_replayState, "f").isPlaying) {
            return _StepView_js__WEBPACK_IMPORTED_MODULE_21__.State.Success;
        }
        if (__classPrivateFieldGet(this, _RecordingView_replayState, "f").isPausedOnBreakpoint) {
            return _StepView_js__WEBPACK_IMPORTED_MODULE_21__.State.Stopped;
        }
        return _StepView_js__WEBPACK_IMPORTED_MODULE_21__.State.Current;
    }
    const currentIndex = __classPrivateFieldGet(this, _RecordingView_steps, "f").indexOf(__classPrivateFieldGet(this, _RecordingView_currentStep, "f"));
    if (currentIndex === -1) {
        return _StepView_js__WEBPACK_IMPORTED_MODULE_21__.State.Default;
    }
    const index = __classPrivateFieldGet(this, _RecordingView_steps, "f").indexOf(step);
    return index < currentIndex ? _StepView_js__WEBPACK_IMPORTED_MODULE_21__.State.Success : _StepView_js__WEBPACK_IMPORTED_MODULE_21__.State.Outstanding;
}, _RecordingView_getSectionState = function _RecordingView_getSectionState(section) {
    const currentStep = __classPrivateFieldGet(this, _RecordingView_currentStep, "f");
    if (!currentStep) {
        return _StepView_js__WEBPACK_IMPORTED_MODULE_21__.State.Default;
    }
    const currentSection = __classPrivateFieldGet(this, _RecordingView_sections, "f").find(section => section.steps.includes(currentStep));
    if (!currentSection) {
        if (__classPrivateFieldGet(this, _RecordingView_currentError, "f")) {
            return _StepView_js__WEBPACK_IMPORTED_MODULE_21__.State.Error;
        }
    }
    if (section === currentSection) {
        return _StepView_js__WEBPACK_IMPORTED_MODULE_21__.State.Success;
    }
    const index = __classPrivateFieldGet(this, _RecordingView_sections, "f").indexOf(currentSection);
    const ownIndex = __classPrivateFieldGet(this, _RecordingView_sections, "f").indexOf(section);
    return index >= ownIndex ? _StepView_js__WEBPACK_IMPORTED_MODULE_21__.State.Success : _StepView_js__WEBPACK_IMPORTED_MODULE_21__.State.Outstanding;
}, _RecordingView_renderStep = function _RecordingView_renderStep(section, step, isLastSection) {
    const stepIndex = __classPrivateFieldGet(this, _RecordingView_steps, "f").indexOf(step);
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <${_StepView_js__WEBPACK_IMPORTED_MODULE_21__.StepView.litTagName}
      @click=${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_onStepClick)}
      @mouseover=${__classPrivateFieldGet(this, _RecordingView_onStepHover, "f")}
      @copystep=${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_onCopyStepEvent)}
      .data=${{
        step,
        state: __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_getStepState).call(this, step),
        error: __classPrivateFieldGet(this, _RecordingView_currentStep, "f") === step ? __classPrivateFieldGet(this, _RecordingView_currentError, "f") : undefined,
        isFirstSection: false,
        isLastSection: isLastSection && __classPrivateFieldGet(this, _RecordingView_steps, "f")[__classPrivateFieldGet(this, _RecordingView_steps, "f").length - 1] === step,
        isStartOfGroup: false,
        isEndOfGroup: section.steps[section.steps.length - 1] === step,
        stepIndex,
        hasBreakpoint: __classPrivateFieldGet(this, _RecordingView_breakpointIndexes, "f").has(stepIndex),
        sectionIndex: -1,
        isRecording: __classPrivateFieldGet(this, _RecordingView_isRecording, "f"),
        isPlaying: __classPrivateFieldGet(this, _RecordingView_replayState, "f").isPlaying,
        removable: __classPrivateFieldGet(this, _RecordingView_steps, "f").length > 1,
        builtInConverters: __classPrivateFieldGet(this, _RecordingView_builtInConverters, "f"),
        extensionConverters: __classPrivateFieldGet(this, _RecordingView_extensionConverters, "f"),
        isSelected: __classPrivateFieldGet(this, _RecordingView_selectedStep, "f") === step,
        recorderSettings: __classPrivateFieldGet(this, _RecordingView_recorderSettings, "f"),
    }}
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.section('step').track({ click: true })}
      ></${_StepView_js__WEBPACK_IMPORTED_MODULE_21__.StepView.litTagName}>
    `;
    // clang-format on
}, _RecordingView_onStepClick = function _RecordingView_onStepClick(event) {
    event.stopPropagation();
    const stepView = event.target;
    const selectedStep = stepView.step || stepView.section?.causingStep || null;
    if (__classPrivateFieldGet(this, _RecordingView_selectedStep, "f") === selectedStep) {
        return;
    }
    __classPrivateFieldSet(this, _RecordingView_selectedStep, selectedStep, "f");
    __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_render).call(this);
    if (selectedStep) {
        __classPrivateFieldGet(this, _RecordingView_highlightCodeForStep, "f").call(this, selectedStep, /* scroll=*/ true);
    }
}, _RecordingView_onWrapperClick = function _RecordingView_onWrapperClick() {
    if (__classPrivateFieldGet(this, _RecordingView_selectedStep, "f") === undefined) {
        return;
    }
    __classPrivateFieldSet(this, _RecordingView_selectedStep, undefined, "f");
    __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_render).call(this);
}, _RecordingView_onReplaySettingsKeydown = function _RecordingView_onReplaySettingsKeydown(event) {
    if (event.key !== 'Enter') {
        return;
    }
    event.preventDefault();
    __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_onToggleReplaySettings).call(this, event);
}, _RecordingView_onToggleReplaySettings = function _RecordingView_onToggleReplaySettings(event) {
    event.stopPropagation();
    __classPrivateFieldSet(this, _RecordingView_replaySettingsExpanded, !__classPrivateFieldGet(this, _RecordingView_replaySettingsExpanded, "f"), "f");
    __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_render).call(this);
}, _RecordingView_onNetworkConditionsChange = function _RecordingView_onNetworkConditionsChange(event) {
    const preset = networkConditionPresets.find(preset => preset.i18nTitleKey === event.itemValue);
    this.dispatchEvent(new NetworkConditionsChanged(preset?.i18nTitleKey === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NoThrottlingConditions.i18nTitleKey ? undefined : preset));
}, _RecordingView_onTimeoutInput = function _RecordingView_onTimeoutInput(event) {
    const target = event.target;
    if (!target.checkValidity()) {
        target.reportValidity();
        return;
    }
    this.dispatchEvent(new TimeoutChanged(Number(target.value)));
}, _RecordingView_copyCurrentSelection = async function _RecordingView_copyCurrentSelection(step) {
    let converter = [
        ...__classPrivateFieldGet(this, _RecordingView_builtInConverters, "f"),
        ...__classPrivateFieldGet(this, _RecordingView_extensionConverters, "f"),
    ]
        .find(converter => converter.getId() === __classPrivateFieldGet(this, _RecordingView_recorderSettings, "f")?.preferredCopyFormat);
    if (!converter) {
        converter = __classPrivateFieldGet(this, _RecordingView_builtInConverters, "f")[0];
    }
    if (!converter) {
        throw new Error('No default converter found');
    }
    let text = '';
    if (step) {
        text = await converter.stringifyStep(step);
    }
    else if (__classPrivateFieldGet(this, _RecordingView_userFlow, "f")) {
        [text] = await converter.stringify(__classPrivateFieldGet(this, _RecordingView_userFlow, "f"));
    }
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(text);
    const metric = step ? converterIdToStepMetric(converter.getId()) : converterIdToFlowMetric(converter.getId());
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingCopiedToClipboard(metric);
}, _RecordingView_onCopyStepEvent = function _RecordingView_onCopyStepEvent(event) {
    event.stopPropagation();
    void __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_copyCurrentSelection).call(this, event.step);
}, _RecordingView_onCopy = async function _RecordingView_onCopy(event) {
    if (event.target !== document.body) {
        return;
    }
    event.preventDefault();
    await __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_copyCurrentSelection).call(this, __classPrivateFieldGet(this, _RecordingView_selectedStep, "f"));
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.keyboardShortcutFired(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_17__.RecorderActions.CopyRecordingOrStep);
}, _RecordingView_renderSettings = function _RecordingView_renderSettings() {
    if (!__classPrivateFieldGet(this, _RecordingView_settings, "f")) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html ``;
    }
    const environmentFragments = [];
    if (__classPrivateFieldGet(this, _RecordingView_settings, "f").viewportSettings) {
        // clang-format off
        environmentFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div>${__classPrivateFieldGet(this, _RecordingView_settings, "f").viewportSettings.isMobile
            ? i18nString(UIStrings.mobile)
            : i18nString(UIStrings.desktop)}</div>`);
        environmentFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div class="separator"></div>`);
        environmentFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div>${__classPrivateFieldGet(this, _RecordingView_settings, "f").viewportSettings.width}×${__classPrivateFieldGet(this, _RecordingView_settings, "f").viewportSettings.height} px</div>`);
        // clang-format on
    }
    const replaySettingsFragments = [];
    if (!__classPrivateFieldGet(this, _RecordingView_replaySettingsExpanded, "f")) {
        if (__classPrivateFieldGet(this, _RecordingView_settings, "f").networkConditionsSettings) {
            if (__classPrivateFieldGet(this, _RecordingView_settings, "f").networkConditionsSettings.title) {
                // clang-format off
                replaySettingsFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div>${__classPrivateFieldGet(this, _RecordingView_settings, "f").networkConditionsSettings.title}</div>`);
                // clang-format on
            }
            else {
                // clang-format off
                replaySettingsFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div>
            ${i18nString(UIStrings.download, {
                    value: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(__classPrivateFieldGet(this, _RecordingView_settings, "f").networkConditionsSettings.download),
                })},
            ${i18nString(UIStrings.upload, {
                    value: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(__classPrivateFieldGet(this, _RecordingView_settings, "f").networkConditionsSettings.upload),
                })},
            ${i18nString(UIStrings.latency, {
                    value: __classPrivateFieldGet(this, _RecordingView_settings, "f").networkConditionsSettings.latency,
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
            value: __classPrivateFieldGet(this, _RecordingView_settings, "f").timeout || _models_models_js__WEBPACK_IMPORTED_MODULE_15__.RecordingPlayer.defaultTimeout,
        })}</div>`);
        // clang-format on
    }
    else {
        // clang-format off
        const selectedOption = __classPrivateFieldGet(this, _RecordingView_settings, "f").networkConditionsSettings?.i18nTitleKey ||
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
        <label class="wrapping-label" @click=${__classPrivateFieldGet(this, _RecordingView_onSelectMenuLabelClick, "f")}>
          ${i18nString(UIStrings.network)}
          <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.SelectMenu.SelectMenu.litTagName}
            @selectmenuselected=${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_onNetworkConditionsChange)}
            .disabled=${!__classPrivateFieldGet(this, _RecordingView_steps, "f").find(step => step.type === 'navigate')}
            .showDivider=${true}
            .showArrow=${true}
            .sideButton=${false}
            .showSelectedItem=${true}
            .showConnector=${false}
            .jslogContext=${'network-conditions'}
            .position=${_ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_7__.Dialog.DialogVerticalPosition.BOTTOM}
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
            @input=${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_onTimeoutInput)}
            required
            min=${_models_models_js__WEBPACK_IMPORTED_MODULE_15__.SchemaUtils.minTimeout}
            max=${_models_models_js__WEBPACK_IMPORTED_MODULE_15__.SchemaUtils.maxTimeout}
            value=${__classPrivateFieldGet(this, _RecordingView_settings, "f").timeout || _models_models_js__WEBPACK_IMPORTED_MODULE_15__.RecordingPlayer.defaultTimeout}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.textField('timeout').track({ change: true })}
            class="devtools-text-input"
            type="number">
        </label>
      </div>`);
        // clang-format on
    }
    const isEditable = !__classPrivateFieldGet(this, _RecordingView_isRecording, "f") && !__classPrivateFieldGet(this, _RecordingView_replayState, "f").isPlaying;
    const replaySettingsButtonClassMap = {
        'settings-title': true,
        expanded: __classPrivateFieldGet(this, _RecordingView_replaySettingsExpanded, "f"),
    };
    const replaySettingsClassMap = {
        expanded: __classPrivateFieldGet(this, _RecordingView_replaySettingsExpanded, "f"),
        settings: true,
    };
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <div class="settings-row">
        <div class="settings-container">
          <div
            class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.Directives.classMap(replaySettingsButtonClassMap)}
            @keydown=${isEditable && __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_onReplaySettingsKeydown)}
            @click=${isEditable && __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_onToggleReplaySettings)}
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
}, _RecordingView_getCurrentConverter = function _RecordingView_getCurrentConverter() {
    const currentConverter = [
        ...(__classPrivateFieldGet(this, _RecordingView_builtInConverters, "f") || []),
        ...(__classPrivateFieldGet(this, _RecordingView_extensionConverters, "f") || []),
    ].find(converter => converter.getId() === __classPrivateFieldGet(this, _RecordingView_converterId, "f"));
    if (!currentConverter) {
        return __classPrivateFieldGet(this, _RecordingView_builtInConverters, "f")[0];
    }
    return currentConverter;
}, _RecordingView_renderTimelineArea = function _RecordingView_renderTimelineArea() {
    if (__classPrivateFieldGet(this, _RecordingView_extensionDescriptor, "f")) {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
        <${_ExtensionView_js__WEBPACK_IMPORTED_MODULE_18__.ExtensionView.litTagName} .descriptor=${__classPrivateFieldGet(this, _RecordingView_extensionDescriptor, "f")}>
        </${_ExtensionView_js__WEBPACK_IMPORTED_MODULE_18__.ExtensionView.litTagName}>
      `;
        // clang-format on
    }
    const currentConverter = __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_getCurrentConverter).call(this);
    const converterFormatName = currentConverter?.getFormatName();
    // clang-format off
    return !__classPrivateFieldGet(this, _RecordingView_showCodeView, "f")
        ? __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_renderSections).call(this)
        : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
        <${_ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_11__.SplitView.SplitView.litTagName}>
          <div slot="main">
            ${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_renderSections).call(this)}
          </div>
          <div slot="sidebar" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.pane('source-code').track({ resize: true })}>
            <div class="section-toolbar" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.toolbar()}>
              <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.SelectMenu.SelectMenu.litTagName}
                @selectmenuselected=${__classPrivateFieldGet(this, _RecordingView_onCodeFormatChange, "f")}
                .showDivider=${true}
                .showArrow=${true}
                .sideButton=${false}
                .showSelectedItem=${true}
                .showConnector=${false}
                .position=${_ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_7__.Dialog.DialogVerticalPosition.BOTTOM}
                .buttonTitle=${converterFormatName}
                .jslogContext=${'code-format'}
              >
                ${__classPrivateFieldGet(this, _RecordingView_builtInConverters, "f").map(converter => {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.Menu.MenuItem.litTagName}
                    .value=${converter.getId()}
                    .selected=${__classPrivateFieldGet(this, _RecordingView_converterId, "f") === converter.getId()}
                    jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.action().track({ click: true }).context(`converter-${_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(converter.getId())}`)}
                  >
                    ${converter.getFormatName()}
                  </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.Menu.MenuItem.litTagName}>`;
        })}
                ${__classPrivateFieldGet(this, _RecordingView_extensionConverters, "f").map(converter => {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.Menu.MenuItem.litTagName}
                    .value=${converter.getId()}
                    .selected=${__classPrivateFieldGet(this, _RecordingView_converterId, "f") === converter.getId()}
                    jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.action().track({ click: true }).context('converter-extension')}
                  >
                    ${converter.getFormatName()}
                  </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.Menu.MenuItem.litTagName}>`;
        })}
              </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.SelectMenu.SelectMenu.litTagName}>
              <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
                title=${_models_models_js__WEBPACK_IMPORTED_MODULE_15__.Tooltip.getTooltipForActions(i18nString(UIStrings.hideCode), _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_17__.RecorderActions.ToggleCodeView)}
                .data=${{
            variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.ICON,
            size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Size.SMALL,
            iconName: 'cross',
        }}
                @click=${this.showCodeToggle}
                jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.close().track({ click: true })}
              ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
            </div>
            <div class="text-editor" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.textField().track({ change: true })}>
              <${_ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor.litTagName} .state=${__classPrivateFieldGet(this, _RecordingView_editorState, "f")}></${_ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor.litTagName}>
            </div>
          </div>
        </${_ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_11__.SplitView.SplitView.litTagName}>
      `;
    // clang-format on
}, _RecordingView_renderScreenshot = function _RecordingView_renderScreenshot(section) {
    if (!section.screenshot) {
        return null;
    }
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <img class="screenshot" src=${section.screenshot} alt=${i18nString(UIStrings.screenshotForSection)} />
    `;
    // clang-format on
}, _RecordingView_renderReplayOrAbortButton = function _RecordingView_renderReplayOrAbortButton() {
    if (__classPrivateFieldGet(this, _RecordingView_replayState, "f").isPlaying) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName} .jslogContext=${'abort-replay'} @click=${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_handleAbortReplay)} .iconName=${'pause'} .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.OUTLINED}>
          ${i18nString(UIStrings.cancelReplay)}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>`;
    }
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<${_ReplaySection_js__WEBPACK_IMPORTED_MODULE_20__.ReplaySection.litTagName}
        .data=${{
        settings: __classPrivateFieldGet(this, _RecordingView_recorderSettings, "f"),
        replayExtensions: __classPrivateFieldGet(this, _RecordingView_replayExtensions, "f"),
    }}
        .disabled=${__classPrivateFieldGet(this, _RecordingView_replayState, "f").isPlaying}
        @startreplay=${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_handleTogglePlaying)}
        >
      </${_ReplaySection_js__WEBPACK_IMPORTED_MODULE_20__.ReplaySection.litTagName}>`;
    // clang-format on
}, _RecordingView_handleMeasurePerformanceClickEvent = function _RecordingView_handleMeasurePerformanceClickEvent(event) {
    event.stopPropagation();
    this.dispatchEvent(new PlayRecordingEvent({
        targetPanel: TargetPanel.PerformancePanel,
        speed: _models_RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_16__.PlayRecordingSpeed.Normal,
    }));
}, _RecordingView_renderSections = function _RecordingView_renderSections() {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <div class="sections">
      ${!__classPrivateFieldGet(this, _RecordingView_showCodeView, "f")
        ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div class="section-toolbar">
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
          @click=${this.showCodeToggle}
          class="show-code"
          .data=${{
            variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.OUTLINED,
            title: _models_models_js__WEBPACK_IMPORTED_MODULE_15__.Tooltip.getTooltipForActions(i18nString(UIStrings.showCode), _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_17__.RecorderActions.ToggleCodeView),
        }}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.toggleSubpane(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_17__.RecorderActions.ToggleCodeView).track({ click: true })}
        >
          ${i18nString(UIStrings.showCode)}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
      </div>`
        : ''}
      ${__classPrivateFieldGet(this, _RecordingView_sections, "f").map((section, i) => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
            <div class="section">
              <div class="screenshot-wrapper">
                ${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_renderScreenshot).call(this, section)}
              </div>
              <div class="content">
                <div class="steps">
                  <${_StepView_js__WEBPACK_IMPORTED_MODULE_21__.StepView.litTagName}
                    @click=${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_onStepClick)}
                    @mouseover=${__classPrivateFieldGet(this, _RecordingView_onStepHover, "f")}
                    .data=${{
        section,
        state: __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_getSectionState).call(this, section),
        isStartOfGroup: true,
        isEndOfGroup: section.steps.length === 0,
        isFirstSection: i === 0,
        isLastSection: i === __classPrivateFieldGet(this, _RecordingView_sections, "f").length - 1 &&
            section.steps.length === 0,
        isSelected: __classPrivateFieldGet(this, _RecordingView_selectedStep, "f") === (section.causingStep || null),
        sectionIndex: i,
        isRecording: __classPrivateFieldGet(this, _RecordingView_isRecording, "f"),
        isPlaying: __classPrivateFieldGet(this, _RecordingView_replayState, "f").isPlaying,
        error: __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_getSectionState).call(this, section) === _StepView_js__WEBPACK_IMPORTED_MODULE_21__.State.Error
            ? __classPrivateFieldGet(this, _RecordingView_currentError, "f")
            : undefined,
        hasBreakpoint: false,
        removable: __classPrivateFieldGet(this, _RecordingView_steps, "f").length > 1 && section.causingStep,
    }}
                  >
                  </${_StepView_js__WEBPACK_IMPORTED_MODULE_21__.StepView.litTagName}>
                  ${section.steps.map(step => __classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_renderStep).call(this, section, step, i === __classPrivateFieldGet(this, _RecordingView_sections, "f").length - 1))}
                  ${!__classPrivateFieldGet(this, _RecordingView_recordingTogglingInProgress, "f") && __classPrivateFieldGet(this, _RecordingView_isRecording, "f") && i === __classPrivateFieldGet(this, _RecordingView_sections, "f").length - 1 ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<devtools-button
                    class="step add-assertion-button"
                    .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.OUTLINED,
        title: i18nString(UIStrings.addAssertion),
        jslogContext: 'add-assertion',
    }}
                    @click=${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_dispatchAddAssertionEvent)}
                  >${i18nString(UIStrings.addAssertion)}</devtools-button>` : undefined}
                  ${__classPrivateFieldGet(this, _RecordingView_isRecording, "f") && i === __classPrivateFieldGet(this, _RecordingView_sections, "f").length - 1
        ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div class="step recording">${i18nString(UIStrings.recording)}</div>`
        : null}
                </div>
              </div>
            </div>
      `)}
      </div>
    `;
    // clang-format on
}, _RecordingView_renderHeader = function _RecordingView_renderHeader() {
    if (!__classPrivateFieldGet(this, _RecordingView_userFlow, "f")) {
        return '';
    }
    const { title } = __classPrivateFieldGet(this, _RecordingView_userFlow, "f");
    const isTitleEditable = !__classPrivateFieldGet(this, _RecordingView_replayState, "f").isPlaying && !__classPrivateFieldGet(this, _RecordingView_isRecording, "f");
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <div class="header">
        <div class="header-title-wrapper">
          <div class="header-title">
            <span @blur=${__classPrivateFieldGet(this, _RecordingView_onTitleBlur, "f")}
                  @keydown=${__classPrivateFieldGet(this, _RecordingView_onTitleInputKeyDown, "f")}
                  id="title-input"
                  .contentEditable=${isTitleEditable ? 'true' : 'false'}
                  jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.value('title').track({ change: true })}
                  class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.Directives.classMap({
        'has-error': __classPrivateFieldGet(this, _RecordingView_isTitleInvalid, "f"),
        'disabled': !isTitleEditable,
    })}
                  .innerText=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.Directives.live(title)}></span>
            <div class="title-button-bar">
              <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
                @click=${__classPrivateFieldGet(this, _RecordingView_onEditTitleButtonClick, "f")}
                .data=${{
        disabled: !isTitleEditable,
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.TOOLBAR,
        iconName: 'edit',
        title: i18nString(UIStrings.editTitle),
        jslogContext: 'edit-title',
    }}
              ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
            </div>
          </div>
          ${__classPrivateFieldGet(this, _RecordingView_isTitleInvalid, "f")
        ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div class="title-input-error-text">
            ${i18nString(UIStrings.requiredTitleError)}
          </div>`
        : ''}
        </div>
        ${!__classPrivateFieldGet(this, _RecordingView_isRecording, "f") && __classPrivateFieldGet(this, _RecordingView_replayAllowed, "f")
        ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div class="actions">
                <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
                  @click=${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_handleMeasurePerformanceClickEvent)}
                  .data=${{
            disabled: __classPrivateFieldGet(this, _RecordingView_replayState, "f").isPlaying,
            variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.OUTLINED,
            iconName: 'performance',
            title: i18nString(UIStrings.performancePanel),
            jslogContext: 'measure-performance',
        }}
                >
                  ${i18nString(UIStrings.performancePanel)}
                </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
                <div class="separator"></div>
                ${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_renderReplayOrAbortButton).call(this)}
              </div>`
        : ''}
      </div>`;
    // clang-format on
}, _RecordingView_renderFooter = function _RecordingView_renderFooter() {
    if (!__classPrivateFieldGet(this, _RecordingView_isRecording, "f")) {
        return '';
    }
    const translation = __classPrivateFieldGet(this, _RecordingView_recordingTogglingInProgress, "f") ? i18nString(UIStrings.recordingIsBeingStopped) :
        i18nString(UIStrings.endRecording);
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <div class="footer">
        <div class="controls">
          <devtools-control-button
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.toggle('toggle-recording').track({ click: true })}
            @click=${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_dispatchRecordingFinished)}
            .disabled=${__classPrivateFieldGet(this, _RecordingView_recordingTogglingInProgress, "f")}
            .shape=${'square'}
            .label=${translation}
            title=${_models_models_js__WEBPACK_IMPORTED_MODULE_15__.Tooltip.getTooltipForActions(translation, _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_17__.RecorderActions.StartRecording)}
          >
          </devtools-control-button>
        </div>
      </div>
    `;
    // clang-format on
}, _RecordingView_render = function _RecordingView_render() {
    const classNames = {
        wrapper: true,
        'is-recording': __classPrivateFieldGet(this, _RecordingView_isRecording, "f"),
        'is-playing': __classPrivateFieldGet(this, _RecordingView_replayState, "f").isPlaying,
        'was-successful': __classPrivateFieldGet(this, _RecordingView_lastReplayResult, "f") === _models_models_js__WEBPACK_IMPORTED_MODULE_15__.RecordingPlayer.ReplayResult.Success,
        'was-failure': __classPrivateFieldGet(this, _RecordingView_lastReplayResult, "f") === _models_models_js__WEBPACK_IMPORTED_MODULE_15__.RecordingPlayer.ReplayResult.Failure,
    };
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <div @click=${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_onWrapperClick)} class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.Directives.classMap(classNames)}>
        <div class="main">
          ${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_renderHeader).call(this)}
          ${__classPrivateFieldGet(this, _RecordingView_extensionDescriptor, "f")
        ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
            <${_ExtensionView_js__WEBPACK_IMPORTED_MODULE_18__.ExtensionView.litTagName} .descriptor=${__classPrivateFieldGet(this, _RecordingView_extensionDescriptor, "f")}>
            </${_ExtensionView_js__WEBPACK_IMPORTED_MODULE_18__.ExtensionView.litTagName}>
          `
        : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
            ${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_renderSettings).call(this)}
            ${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_renderTimelineArea).call(this)}
          `}
          ${__classPrivateFieldGet(this, _RecordingView_instances, "m", _RecordingView_renderFooter).call(this)}
        </div>
      </div>
    `, __classPrivateFieldGet(this, _RecordingView_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(RecordingView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.literal `devtools-recording-view`
});
customElements.define('devtools-recording-view', RecordingView);


/***/ }),

/***/ "./src/ui/components/split_view/SplitView.ts":
/*!***************************************************!*\
  !*** ./src/ui/components/split_view/SplitView.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitView: () => (/* binding */ SplitView)
/* harmony export */ });
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _SplitView_shadow, _SplitView_mousePos, _SplitView_mainAxisIdx, _SplitView_mainDimensions, _SplitView_observer, _SplitView_horizontal, _SplitView_onResize, _SplitView_onMouseDown, _SplitView_onMouseUp, _SplitView_onMouseMove, _SplitView_render;


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
    constructor() {
        super(...arguments);
        _SplitView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _SplitView_mousePos.set(this, [0, 0]);
        _SplitView_mainAxisIdx.set(this, 0);
        _SplitView_mainDimensions.set(this, [0, 0]);
        _SplitView_observer.set(this, void 0);
        _SplitView_horizontal.set(this, false);
        _SplitView_onResize.set(this, (rect) => {
            const prevMainAxisIdx = __classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f");
            if (rect.width <= 600 && rect.height >= 600 || __classPrivateFieldGet(this, _SplitView_horizontal, "f")) {
                __classPrivateFieldSet(this, _SplitView_mainAxisIdx, 1, "f");
            }
            else {
                __classPrivateFieldSet(this, _SplitView_mainAxisIdx, 0, "f");
            }
            if (__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f") !== prevMainAxisIdx) {
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _SplitView_render, "f"));
            }
        });
        _SplitView_onMouseDown.set(this, (event) => {
            const main = __classPrivateFieldGet(this, _SplitView_shadow, "f").querySelector('slot[name=main]');
            if (!main) {
                throw new Error('Main slot not found');
            }
            const rect = main.getBoundingClientRect();
            __classPrivateFieldSet(this, _SplitView_mainDimensions, [rect.width, rect.height], "f");
            __classPrivateFieldSet(this, _SplitView_mousePos, [event.clientX, event.clientY], "f");
            window.addEventListener('mousemove', __classPrivateFieldGet(this, _SplitView_onMouseMove, "f"), true);
            window.addEventListener('mouseup', __classPrivateFieldGet(this, _SplitView_onMouseUp, "f"), true);
        });
        _SplitView_onMouseUp.set(this, () => {
            window.removeEventListener('mousemove', __classPrivateFieldGet(this, _SplitView_onMouseMove, "f"), true);
            window.removeEventListener('mouseup', __classPrivateFieldGet(this, _SplitView_onMouseUp, "f"), true);
        });
        _SplitView_onMouseMove.set(this, (event) => {
            const mousePos = [event.clientX, event.clientY];
            const delta = mousePos[__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f")] - __classPrivateFieldGet(this, _SplitView_mousePos, "f")[__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f")];
            const rect = this.getBoundingClientRect();
            const containerDimensions = [rect.width, rect.height];
            const length = ((__classPrivateFieldGet(this, _SplitView_mainDimensions, "f")[__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f")] + delta) * 100) / containerDimensions[__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f")];
            this.style.setProperty('--current-main-area-size', length + '%');
        });
        _SplitView_render.set(this, () => {
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
        <div class="wrapper ${__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f") === 1 ? 'horizontal' : ''}">
          <div class="container">
            <slot name="main"></slot>
            <div id="resizer" @mousedown=${__classPrivateFieldGet(this, _SplitView_onMouseDown, "f")}></div>
            <slot name="sidebar"></slot>
          </div>
        </div>
      `, __classPrivateFieldGet(this, _SplitView_shadow, "f"), { host: this });
            // clang-format on
        });
    }
    connectedCallback() {
        this.style.setProperty('--current-main-area-size', '60%');
        __classPrivateFieldGet(this, _SplitView_shadow, "f").adoptedStyleSheets = [splitViewStyles];
        __classPrivateFieldSet(this, _SplitView_observer, new ResizeObserver(entries => __classPrivateFieldGet(this, _SplitView_onResize, "f").call(this, entries[0].contentRect)), "f");
        __classPrivateFieldGet(this, _SplitView_observer, "f").observe(this);
        __classPrivateFieldGet(this, _SplitView_render, "f").call(this);
    }
    get horizontal() {
        return __classPrivateFieldGet(this, _SplitView_horizontal, "f");
    }
    set horizontal(horizontal) {
        __classPrivateFieldSet(this, _SplitView_horizontal, horizontal, "f");
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _SplitView_render, "f"));
    }
}
_SplitView_shadow = new WeakMap(), _SplitView_mousePos = new WeakMap(), _SplitView_mainAxisIdx = new WeakMap(), _SplitView_mainDimensions = new WeakMap(), _SplitView_observer = new WeakMap(), _SplitView_horizontal = new WeakMap(), _SplitView_onResize = new WeakMap(), _SplitView_onMouseDown = new WeakMap(), _SplitView_onMouseUp = new WeakMap(), _SplitView_onMouseMove = new WeakMap(), _SplitView_render = new WeakMap();
Object.defineProperty(SplitView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-split-view`
});
customElements.define('devtools-split-view', SplitView);


/***/ }),

/***/ "./src/ui/components/split_view/split_view.ts":
/*!****************************************************!*\
  !*** ./src/ui/components/split_view/split_view.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitView: () => (/* reexport module object */ _SplitView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _SplitView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SplitView.js */ "./src/ui/components/split_view/SplitView.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);