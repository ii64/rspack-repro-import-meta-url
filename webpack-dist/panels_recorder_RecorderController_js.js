"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_RecorderController_js"],{

/***/ "./panels/emulation/emulation.js":
/*!***************************************!*\
  !*** ./panels/emulation/emulation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedApp: () => (/* reexport module object */ _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   DeviceModeToolbar: () => (/* reexport module object */ _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   DeviceModeView: () => (/* reexport module object */ _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   DeviceModeWrapper: () => (/* reexport module object */ _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   InspectedPagePlaceholder: () => (/* reexport module object */ _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   MediaQueryInspector: () => (/* reexport module object */ _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedApp.js */ "./panels/emulation/AdvancedApp.js");
/* harmony import */ var _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectedPagePlaceholder.js */ "./panels/emulation/InspectedPagePlaceholder.js");
/* harmony import */ var _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaQueryInspector.js */ "./panels/emulation/MediaQueryInspector.js");
/* harmony import */ var _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeviceModeToolbar.js */ "./panels/emulation/DeviceModeToolbar.js");
/* harmony import */ var _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeviceModeView.js */ "./panels/emulation/DeviceModeView.js");
/* harmony import */ var _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeviceModeWrapper.js */ "./panels/emulation/DeviceModeWrapper.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.













//# sourceMappingURL=emulation.js.map

/***/ }),

/***/ "./panels/recorder/RecorderController.js":
/*!***********************************************!*\
  !*** ./panels/recorder/RecorderController.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecorderController: () => (/* binding */ RecorderController)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/extensions/extensions.js */ "./models/extensions/extensions.js");
/* harmony import */ var _panels_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../panels/emulation/emulation.js */ "./panels/emulation/emulation.js");
/* harmony import */ var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../panels/timeline/timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */ var _services_tracing_tracing_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/tracing/tracing.js */ "./services/tracing/tracing.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/components/dialogs/dialogs.js */ "./ui/components/dialogs/dialogs.js");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/components/menus/menus.js */ "./ui/components/menus/menus.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/components.js */ "./panels/recorder/components/components.js");
/* harmony import */ var _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./converters/converters.js */ "./panels/recorder/converters/converters.js");
/* harmony import */ var _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./extensions/extensions.js */ "./panels/recorder/extensions/extensions.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */ var _recorderController_css_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./recorderController.css.js */ "./panels/recorder/recorderController.css.js");
/* harmony import */ var _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./RecorderEvents.js */ "./panels/recorder/RecorderEvents.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















const { html, Decorators, LitElement } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__;
const { customElement, state } = Decorators;
const UIStrings = {
    /**
     * @description The title of the button that leads to a page for creating a new recording.
     */
    createRecording: 'Create a new recording',
    /**
     * @description The title of the button that allows importing a recording.
     */
    importRecording: 'Import recording',
    /**
     * @description The title of the button that deletes the recording
     */
    deleteRecording: 'Delete recording',
    /**
     * @description The title of the select if user has no saved recordings
     */
    noRecordings: 'No recordings',
    /**
     * @description The title of the select option for one or more recording
     * number followed by this text - `1 recording(s)` or `4 recording(s)`
     */
    numberOfRecordings: 'recording(s)',
    /**
     * @description The title of the button that continues the replay
     */
    continueReplay: 'Continue',
    /**
     * @description The title of the button that executes only one step in the replay
     */
    stepOverReplay: 'Execute one step',
    /**
     * @description The title of the button that opens a menu with various options of exporting a recording to file.
     */
    exportRecording: 'Export',
    /**
     * @description The title of shortcut for starting and stopping recording.
     */
    startStopRecording: 'Start/Stop recording',
    /**
     * @description The title of shortcut for replaying recording.
     */
    replayRecording: 'Replay recording',
    /**
     * @description The title of shortcut for copying a recording or selected step.
     */
    copyShortcut: 'Copy recording or selected step',
    /**
     * @description The title of shortcut for toggling code view.
     */
    toggleCode: 'Toggle code view',
    /**
     * @description The title of the menu group in the export menu of the Recorder
     * panel that is followed by the list of built-in export formats.
     */
    export: 'Export',
    /**
     * @description The title of the menu group in the export menu of the Recorder
     * panel that is followed by the list of export formats available via browser
     * extensions.
     */
    exportViaExtensions: 'Export via extensions',
    /**
     * @description The title of the menu option that leads to a page that lists
     * all browsers extensions available for Recorder.
     */
    getExtensions: 'Get extensions…',
    /**
     * @description The button label that leads to the feedback form for Recorder.
     */
    sendFeedback: 'Send feedback',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/recorder/RecorderController.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const GET_EXTENSIONS_MENU_ITEM = 'get-extensions-link';
const GET_EXTENSIONS_URL = 'https://goo.gle/recorder-extension-list';
const CONVERTER_ID_TO_METRIC = {
    ["json" /* Models.ConverterIds.ConverterIds.JSON */]: 2 /* Host.UserMetrics.RecordingExported.ToJSON */,
    ["@puppeteer/replay" /* Models.ConverterIds.ConverterIds.Replay */]: 3 /* Host.UserMetrics.RecordingExported.ToPuppeteerReplay */,
    ["puppeteer" /* Models.ConverterIds.ConverterIds.Puppeteer */]: 1 /* Host.UserMetrics.RecordingExported.ToPuppeteer */,
    ["lighthouse" /* Models.ConverterIds.ConverterIds.Lighthouse */]: 5 /* Host.UserMetrics.RecordingExported.ToLighthouse */,
};
let RecorderController = class RecorderController extends LitElement {
    static styles = [_recorderController_css_js__WEBPACK_IMPORTED_MODULE_20__["default"]];
    #storage = _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingStorage.RecordingStorage.instance();
    #screenshotStorage = _models_models_js__WEBPACK_IMPORTED_MODULE_19__.ScreenshotStorage.ScreenshotStorage.instance();
    // TODO: we keep the functionality to allow/disallow replay but right now it's not used.
    // It can be used to decide if we allow replay on a certain target for example.
    #replayAllowed = true;
    #replayState = { isPlaying: false, isPausedOnBreakpoint: false };
    #fileSelector;
    #exportMenuButton;
    #stepBreakpointIndexes = new Set();
    #builtInConverters;
    #recorderSettings = new _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecorderSettings.RecorderSettings();
    #shortcutHelper = new _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecorderShortcutHelper.RecorderShortcutHelper();
    constructor() {
        super();
        this.isRecording = false;
        this.isToggling = false;
        this.exportMenuExpanded = false;
        this.currentPage = "StartPage" /* Pages.StartPage */;
        if (this.#storage.getRecordings().length) {
            this.#setCurrentPage("AllRecordingsPage" /* Pages.AllRecordingsPage */);
        }
        const textEditorIndent = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').get();
        this.#builtInConverters = Object.freeze([
            new _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.JSONConverter.JSONConverter(textEditorIndent),
            new _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.PuppeteerReplayConverter.PuppeteerReplayConverter(textEditorIndent),
            new _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.PuppeteerConverter.PuppeteerConverter(textEditorIndent),
            new _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.LighthouseConverter.LighthouseConverter(textEditorIndent),
        ]);
        const extensionManager = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_18__.ExtensionManager.ExtensionManager.instance();
        this.#updateExtensions(extensionManager.extensions());
        extensionManager.addEventListener("extensionsUpdated" /* Extensions.ExtensionManager.Events.ExtensionsUpdated */, event => {
            this.#updateExtensions(event.data);
        });
        // used in e2e tests only.
        this.addEventListener('setrecording', (event) => this.#onSetRecording(event));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.currentRecordingSession) {
            void this.currentRecordingSession.stop();
        }
    }
    #updateExtensions(extensions) {
        this.extensionConverters =
            extensions.filter(extension => extension.getCapabilities().includes('export')).map((extension, idx) => {
                return new _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.ExtensionConverter.ExtensionConverter(idx, extension);
            });
        this.replayExtensions = extensions.filter(extension => extension.getCapabilities().includes('replay'));
    }
    setIsRecordingStateForTesting(isRecording) {
        this.isRecording = isRecording;
    }
    setRecordingStateForTesting(state) {
        this.#replayState.isPlaying = state.isPlaying;
        this.#replayState.isPausedOnBreakpoint = state.isPausedOnBreakpoint;
    }
    setCurrentPageForTesting(page) {
        this.#setCurrentPage(page);
    }
    getCurrentPageForTesting() {
        return this.currentPage;
    }
    getCurrentRecordingForTesting() {
        return this.currentRecording;
    }
    getStepBreakpointIndexesForTesting() {
        return [...this.#stepBreakpointIndexes.values()];
    }
    /**
     * We should clear errors on every new action in the controller.
     * TODO: think how to make handle this centrally so that in no case
     * the error remains shown for longer than needed. Maybe a timer?
     */
    #clearError() {
        this.importError = undefined;
    }
    async #importFile(file) {
        const outputStream = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.StringOutputStream.StringOutputStream();
        const reader = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__.FileUtils.ChunkedFileReader(file, 
        /* chunkSize */ 10000000);
        const success = await reader.read(outputStream);
        if (!success) {
            throw reader.error();
        }
        let flow;
        try {
            flow = _models_models_js__WEBPACK_IMPORTED_MODULE_19__.SchemaUtils.parse(JSON.parse(outputStream.data()));
        }
        catch (error) {
            this.importError = error;
            return;
        }
        this.#setCurrentRecording(await this.#storage.saveRecording(flow));
        this.#setCurrentPage("RecordingPage" /* Pages.RecordingPage */);
        this.#clearError();
    }
    setCurrentRecordingForTesting(recording) {
        this.#setCurrentRecording(recording);
    }
    getSectionsForTesting() {
        return this.sections;
    }
    #setCurrentRecording(recording, opts = {}) {
        const { keepBreakpoints = false, updateSession = false } = opts;
        this.recordingPlayer?.abort();
        this.currentStep = undefined;
        this.recordingError = undefined;
        this.lastReplayResult = undefined;
        this.recordingPlayer = undefined;
        this.#replayState.isPlaying = false;
        this.#replayState.isPausedOnBreakpoint = false;
        this.#stepBreakpointIndexes = keepBreakpoints ? this.#stepBreakpointIndexes : new Set();
        if (recording) {
            this.currentRecording = recording;
            this.sections = _models_models_js__WEBPACK_IMPORTED_MODULE_19__.Section.buildSections(recording.flow.steps);
            this.settings = this.#buildSettings(recording.flow);
            if (updateSession && this.currentRecordingSession) {
                this.currentRecordingSession.overwriteUserFlow(recording.flow);
            }
        }
        else {
            this.currentRecording = undefined;
            this.sections = undefined;
            this.settings = undefined;
        }
        this.#updateScreenshotsForSections();
    }
    #setCurrentPage(page) {
        if (page === this.currentPage) {
            return;
        }
        this.previousPage = this.currentPage;
        this.currentPage = page;
    }
    #buildSettings(flow) {
        const steps = flow.steps;
        const navigateStepIdx = steps.findIndex(step => step.type === 'navigate');
        const settings = { timeout: flow.timeout };
        for (let i = navigateStepIdx - 1; i >= 0; i--) {
            const step = steps[i];
            if (!settings.viewportSettings && step.type === 'setViewport') {
                settings.viewportSettings = step;
            }
            if (!settings.networkConditionsSettings && step.type === 'emulateNetworkConditions') {
                settings.networkConditionsSettings = { ...step };
                for (const preset of [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.OfflineConditions, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Slow3GConditions,
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Slow4GConditions, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Fast4GConditions]) {
                    // Using i18nTitleKey as a title here because we only want to compare the parameters of the network conditions.
                    if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.networkConditionsEqual({ ...preset, title: preset.i18nTitleKey || '' }, { ...step, title: preset.i18nTitleKey || '' })) {
                        settings.networkConditionsSettings.title = preset.title instanceof Function ? preset.title() : preset.title;
                        settings.networkConditionsSettings.i18nTitleKey = preset.i18nTitleKey;
                    }
                }
            }
        }
        return settings;
    }
    #getMainTarget() {
        const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!target) {
            throw new Error('Missing main page target');
        }
        return target;
    }
    #getSectionFromStep(step) {
        if (!this.sections) {
            return null;
        }
        for (const section of this.sections) {
            if (section.steps.indexOf(step) !== -1) {
                return section;
            }
        }
        return null;
    }
    #updateScreenshotsForSections() {
        if (!this.sections || !this.currentRecording) {
            return;
        }
        const storageName = this.currentRecording.storageName;
        for (let i = 0; i < this.sections.length; i++) {
            const screenshot = this.#screenshotStorage.getScreenshotForSection(storageName, i);
            this.sections[i].screenshot = screenshot || undefined;
        }
        this.requestUpdate();
    }
    #onAbortReplay() {
        this.recordingPlayer?.abort();
    }
    async #onPlayViaExtension(extension) {
        if (!this.currentRecording || !this.#replayAllowed) {
            return;
        }
        const pluginManager = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_5__.RecorderPluginManager.RecorderPluginManager.instance();
        const promise = pluginManager.once("showViewRequested" /* PublicExtensions.RecorderPluginManager.Events.ShowViewRequested */);
        extension.replay(this.currentRecording.flow);
        const descriptor = await promise;
        this.viewDescriptor = descriptor;
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayStarted(3 /* Host.UserMetrics.RecordingReplayStarted.ReplayViaExtension */);
    }
    async #onPlayRecording(event) {
        if (!this.currentRecording || !this.#replayAllowed) {
            return;
        }
        if (this.viewDescriptor) {
            this.viewDescriptor = undefined;
        }
        if (event.data.extension) {
            return this.#onPlayViaExtension(event.data.extension);
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayStarted(event.data.targetPanel !== "chrome-recorder" /* Components.RecordingView.TargetPanel.Default */ ?
            2 /* Host.UserMetrics.RecordingReplayStarted.ReplayWithPerformanceTracing */ :
            1 /* Host.UserMetrics.RecordingReplayStarted.ReplayOnly */);
        this.#replayState.isPlaying = true;
        this.currentStep = undefined;
        this.recordingError = undefined;
        this.lastReplayResult = undefined;
        const currentRecording = this.currentRecording;
        this.#clearError();
        await this.#disableDeviceModeIfEnabled();
        this.recordingPlayer = new _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingPlayer.RecordingPlayer(this.currentRecording.flow, { speed: event.data.speed, breakpointIndexes: this.#stepBreakpointIndexes });
        const withPerformanceTrace = event.data.targetPanel === "timeline" /* Components.RecordingView.TargetPanel.PerformancePanel */;
        const sectionsWithScreenshot = new Set();
        this.recordingPlayer.addEventListener("Step" /* Models.RecordingPlayer.Events.Step */, async ({ data: { step, resolve } }) => {
            this.currentStep = step;
            const currentSection = this.#getSectionFromStep(step);
            if (this.sections && currentSection && !sectionsWithScreenshot.has(currentSection)) {
                sectionsWithScreenshot.add(currentSection);
                const currentSectionIndex = this.sections.indexOf(currentSection);
                const screenshot = await _models_models_js__WEBPACK_IMPORTED_MODULE_19__.ScreenshotUtils.takeScreenshot();
                currentSection.screenshot = screenshot;
                _models_models_js__WEBPACK_IMPORTED_MODULE_19__.ScreenshotStorage.ScreenshotStorage.instance().storeScreenshotForSection(currentRecording.storageName, currentSectionIndex, screenshot);
            }
            resolve();
        });
        this.recordingPlayer.addEventListener("Stop" /* Models.RecordingPlayer.Events.Stop */, () => {
            this.#replayState.isPausedOnBreakpoint = true;
            this.requestUpdate();
        });
        this.recordingPlayer.addEventListener("Continue" /* Models.RecordingPlayer.Events.Continue */, () => {
            this.#replayState.isPausedOnBreakpoint = false;
            this.requestUpdate();
        });
        this.recordingPlayer.addEventListener("Error" /* Models.RecordingPlayer.Events.Error */, ({ data: error }) => {
            this.recordingError = error;
            if (!withPerformanceTrace) {
                this.#replayState.isPlaying = false;
                this.recordingPlayer = undefined;
            }
            this.lastReplayResult = "Failure" /* Models.RecordingPlayer.ReplayResult.Failure */;
            const errorMessage = error.message.toLowerCase();
            if (errorMessage.startsWith('could not find element')) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayFinished(2 /* Host.UserMetrics.RecordingReplayFinished.TimeoutErrorSelectors */);
            }
            else if (errorMessage.startsWith('waiting for target failed')) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayFinished(3 /* Host.UserMetrics.RecordingReplayFinished.TimeoutErrorTarget */);
            }
            else {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayFinished(4 /* Host.UserMetrics.RecordingReplayFinished.OtherError */);
            }
        });
        this.recordingPlayer.addEventListener("Done" /* Models.RecordingPlayer.Events.Done */, () => {
            if (!withPerformanceTrace) {
                this.#replayState.isPlaying = false;
                this.recordingPlayer = undefined;
            }
            this.lastReplayResult = "Success" /* Models.RecordingPlayer.ReplayResult.Success */;
            // Dispatch an event for e2e testing.
            this.dispatchEvent(new _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_21__.ReplayFinishedEvent());
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayFinished(1 /* Host.UserMetrics.RecordingReplayFinished.Success */);
        });
        this.recordingPlayer.addEventListener("Abort" /* Models.RecordingPlayer.Events.Abort */, () => {
            this.currentStep = undefined;
            this.recordingError = undefined;
            this.lastReplayResult = undefined;
            this.#replayState.isPlaying = false;
        });
        let resolveWithEvents = (_events) => { };
        const eventsPromise = new Promise((resolve) => {
            resolveWithEvents = resolve;
        });
        let performanceTracing = null;
        switch (event.data?.targetPanel) {
            case "timeline" /* Components.RecordingView.TargetPanel.PerformancePanel */:
                performanceTracing = new _services_tracing_tracing_js__WEBPACK_IMPORTED_MODULE_8__.PerformanceTracing.PerformanceTracing(this.#getMainTarget(), {
                    tracingBufferUsage() { },
                    eventsRetrievalProgress() { },
                    tracingComplete(events) {
                        resolveWithEvents(events);
                    },
                });
                break;
        }
        if (performanceTracing) {
            await performanceTracing.start();
        }
        this.#setTouchEmulationAllowed(false);
        await this.recordingPlayer.play();
        this.#setTouchEmulationAllowed(true);
        if (performanceTracing) {
            await performanceTracing.stop();
            const events = await eventsPromise;
            this.#replayState.isPlaying = false;
            this.recordingPlayer = undefined;
            await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.InspectorView.InspectorView.instance().showPanel(event.data?.targetPanel);
            switch (event.data?.targetPanel) {
                case "timeline" /* Components.RecordingView.TargetPanel.PerformancePanel */:
                    _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_7__.TimelinePanel.TimelinePanel.instance().loadFromEvents(events);
                    break;
            }
        }
    }
    async #disableDeviceModeIfEnabled() {
        try {
            const deviceModeWrapper = _panels_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_6__.DeviceModeWrapper.DeviceModeWrapper.instance();
            if (deviceModeWrapper.isDeviceModeOn()) {
                deviceModeWrapper.toggleDeviceMode();
                const emulationModel = this.#getMainTarget().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.EmulationModel);
                await emulationModel?.emulateDevice(null);
            }
        }
        catch {
            // in the hosted mode, when the DeviceMode toolbar is not supported,
            // Emulation.DeviceModeWrapper.DeviceModeWrapper.instance throws an exception.
        }
    }
    #setTouchEmulationAllowed(touchEmulationAllowed) {
        const emulationModel = this.#getMainTarget().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.EmulationModel);
        emulationModel?.setTouchEmulationAllowed(touchEmulationAllowed);
    }
    async #onSetRecording(event) {
        const json = JSON.parse(event.detail);
        this.#setCurrentRecording(await this.#storage.saveRecording(_models_models_js__WEBPACK_IMPORTED_MODULE_19__.SchemaUtils.parse(json)));
        this.#setCurrentPage("RecordingPage" /* Pages.RecordingPage */);
        this.#clearError();
    }
    // Used by e2e tests to inspect the current recording.
    getUserFlow() {
        return this.currentRecording?.flow;
    }
    async #handleRecordingChanged(event) {
        if (!this.currentRecording) {
            throw new Error('Current recording expected to be defined.');
        }
        const recording = {
            ...this.currentRecording,
            flow: {
                ...this.currentRecording.flow,
                steps: this.currentRecording.flow.steps.map(step => step === event.currentStep ? event.newStep : step),
            },
        };
        this.#setCurrentRecording(await this.#storage.updateRecording(recording.storageName, recording.flow), { keepBreakpoints: true, updateSession: true });
    }
    async #handleStepAdded(event) {
        if (!this.currentRecording) {
            throw new Error('Current recording expected to be defined.');
        }
        const stepOrSection = event.stepOrSection;
        let step;
        let position = event.position;
        if ('steps' in stepOrSection) {
            // section
            const sectionIdx = this.sections?.indexOf(stepOrSection);
            if (sectionIdx === undefined || sectionIdx === -1) {
                throw new Error('There is no section to add a step to');
            }
            if (event.position === "after" /* Components.StepView.AddStepPosition.AFTER */) {
                if (this.sections?.[sectionIdx].steps.length) {
                    step = this.sections?.[sectionIdx].steps[0];
                    position = "before" /* Components.StepView.AddStepPosition.BEFORE */;
                }
                else {
                    step = this.sections?.[sectionIdx].causingStep;
                    position = "after" /* Components.StepView.AddStepPosition.AFTER */;
                }
            }
            else {
                if (sectionIdx <= 0) {
                    throw new Error('There is no section to add a step to');
                }
                const prevSection = this.sections?.[sectionIdx - 1];
                step = prevSection?.steps[prevSection.steps.length - 1];
                position = "after" /* Components.StepView.AddStepPosition.AFTER */;
            }
        }
        else {
            // step
            step = stepOrSection;
        }
        if (!step) {
            throw new Error('Anchor step is not found when adding a step');
        }
        const steps = this.currentRecording.flow.steps;
        const currentIndex = steps.indexOf(step);
        const indexToInsertAt = currentIndex + (position === "before" /* Components.StepView.AddStepPosition.BEFORE */ ? 0 : 1);
        steps.splice(indexToInsertAt, 0, { type: _models_models_js__WEBPACK_IMPORTED_MODULE_19__.Schema.StepType.WaitForElement, selectors: ['body'] });
        const recording = { ...this.currentRecording, flow: { ...this.currentRecording.flow, steps } };
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingEdited(2 /* Host.UserMetrics.RecordingEdited.StepAdded */);
        this.#stepBreakpointIndexes = new Set([...this.#stepBreakpointIndexes.values()].map(breakpointIndex => {
            if (indexToInsertAt > breakpointIndex) {
                return breakpointIndex;
            }
            return breakpointIndex + 1;
        }));
        this.#setCurrentRecording(await this.#storage.updateRecording(recording.storageName, recording.flow), { keepBreakpoints: true, updateSession: true });
    }
    async #handleRecordingTitleChanged(event) {
        if (!this.currentRecording) {
            throw new Error('Current recording expected to be defined.');
        }
        const flow = { ...this.currentRecording.flow, title: event.title };
        this.#setCurrentRecording(await this.#storage.updateRecording(this.currentRecording.storageName, flow));
    }
    async #handleStepRemoved(event) {
        if (!this.currentRecording) {
            throw new Error('Current recording expected to be defined.');
        }
        const steps = this.currentRecording.flow.steps;
        const currentIndex = steps.indexOf(event.step);
        steps.splice(currentIndex, 1);
        const flow = { ...this.currentRecording.flow, steps };
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingEdited(3 /* Host.UserMetrics.RecordingEdited.StepRemoved */);
        this.#stepBreakpointIndexes = new Set([...this.#stepBreakpointIndexes.values()]
            .map(breakpointIndex => {
            if (currentIndex > breakpointIndex) {
                return breakpointIndex;
            }
            if (currentIndex === breakpointIndex) {
                return -1;
            }
            return breakpointIndex - 1;
        })
            .filter(index => index >= 0));
        this.#setCurrentRecording(await this.#storage.updateRecording(this.currentRecording.storageName, flow), { keepBreakpoints: true, updateSession: true });
    }
    async #onNetworkConditionsChanged(event) {
        if (!this.currentRecording) {
            throw new Error('Current recording expected to be defined.');
        }
        const navigateIdx = this.currentRecording.flow.steps.findIndex(step => step.type === 'navigate');
        if (navigateIdx === -1) {
            throw new Error('Current recording does not have a navigate step');
        }
        const emulateNetworkConditionsIdx = this.currentRecording.flow.steps.findIndex((step, idx) => {
            if (idx >= navigateIdx) {
                return false;
            }
            return step.type === 'emulateNetworkConditions';
        });
        if (!event.data) {
            // Delete step if present.
            if (emulateNetworkConditionsIdx !== -1) {
                this.currentRecording.flow.steps.splice(emulateNetworkConditionsIdx, 1);
            }
        }
        else if (emulateNetworkConditionsIdx === -1) {
            // Insert at the first position.
            this.currentRecording.flow.steps.splice(0, 0, _models_models_js__WEBPACK_IMPORTED_MODULE_19__.SchemaUtils.createEmulateNetworkConditionsStep({ download: event.data.download, upload: event.data.upload, latency: event.data.latency }));
        }
        else {
            // Update existing step.
            const step = this.currentRecording.flow.steps[emulateNetworkConditionsIdx];
            step.download = event.data.download;
            step.upload = event.data.upload;
            step.latency = event.data.latency;
        }
        this.#setCurrentRecording(await this.#storage.updateRecording(this.currentRecording.storageName, this.currentRecording.flow));
    }
    async #onTimeoutChanged(event) {
        if (!this.currentRecording) {
            throw new Error('Current recording expected to be defined.');
        }
        this.currentRecording.flow.timeout = event.data;
        this.#setCurrentRecording(await this.#storage.updateRecording(this.currentRecording.storageName, this.currentRecording.flow));
    }
    async #onDeleteRecording(event) {
        event.stopPropagation();
        if (event instanceof _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingListView.DeleteRecordingEvent) {
            await this.#storage.deleteRecording(event.storageName);
            this.#screenshotStorage.deleteScreenshotsForRecording(event.storageName);
            this.requestUpdate();
        }
        else {
            if (!this.currentRecording) {
                return;
            }
            await this.#storage.deleteRecording(this.currentRecording.storageName);
            this.#screenshotStorage.deleteScreenshotsForRecording(this.currentRecording.storageName);
        }
        if ((await this.#storage.getRecordings()).length) {
            this.#setCurrentPage("AllRecordingsPage" /* Pages.AllRecordingsPage */);
        }
        else {
            this.#setCurrentPage("StartPage" /* Pages.StartPage */);
        }
        this.#setCurrentRecording(undefined);
        this.#clearError();
    }
    #onCreateNewRecording(event) {
        event?.stopPropagation();
        this.#setCurrentPage("CreateRecordingPage" /* Pages.CreateRecordingPage */);
        this.#clearError();
    }
    async #onRecordingStarted(event) {
        // Recording is not available in device mode.
        await this.#disableDeviceModeIfEnabled();
        // Setting up some variables to notify the user we are initializing a recording.
        this.isToggling = true;
        this.#clearError();
        // -- Recording logic starts here --
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingToggled(1 /* Host.UserMetrics.RecordingToggled.RecordingStarted */);
        this.currentRecordingSession = new _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingSession.RecordingSession(this.#getMainTarget(), {
            title: event.name,
            selectorAttribute: event.selectorAttribute,
            selectorTypesToRecord: event.selectorTypesToRecord.length ? event.selectorTypesToRecord :
                Object.values(_models_models_js__WEBPACK_IMPORTED_MODULE_19__.Schema.SelectorType),
        });
        this.#setCurrentRecording(await this.#storage.saveRecording(this.currentRecordingSession.cloneUserFlow()));
        let previousSectionIndex = -1;
        let screenshotPromise;
        const takeScreenshot = async (currentRecording) => {
            if (!this.sections) {
                throw new Error('Could not find sections.');
            }
            const currentSectionIndex = this.sections.length - 1;
            const currentSection = this.sections[currentSectionIndex];
            if (screenshotPromise || previousSectionIndex === currentSectionIndex) {
                return;
            }
            screenshotPromise = _models_models_js__WEBPACK_IMPORTED_MODULE_19__.ScreenshotUtils.takeScreenshot();
            const screenshot = await screenshotPromise;
            screenshotPromise = undefined;
            currentSection.screenshot = screenshot;
            _models_models_js__WEBPACK_IMPORTED_MODULE_19__.ScreenshotStorage.ScreenshotStorage.instance().storeScreenshotForSection(currentRecording.storageName, currentSectionIndex, screenshot);
            previousSectionIndex = currentSectionIndex;
            this.#updateScreenshotsForSections();
        };
        this.currentRecordingSession.addEventListener("recordingupdated" /* Models.RecordingSession.Events.RecordingUpdated */, async ({ data }) => {
            if (!this.currentRecording) {
                throw new Error('No current recording found');
            }
            this.#setCurrentRecording(await this.#storage.updateRecording(this.currentRecording.storageName, data));
            const recordingView = this.shadowRoot?.querySelector('devtools-recording-view');
            recordingView?.scrollToBottom();
            await takeScreenshot(this.currentRecording);
        });
        this.currentRecordingSession.addEventListener("recordingstopped" /* Models.RecordingSession.Events.RecordingStopped */, async ({ data }) => {
            if (!this.currentRecording) {
                throw new Error('No current recording found');
            }
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.keyboardShortcutFired("chrome-recorder.start-recording" /* Actions.RecorderActions.StartRecording */);
            this.#setCurrentRecording(await this.#storage.updateRecording(this.currentRecording.storageName, data));
            await this.#onRecordingFinished();
        });
        await this.currentRecordingSession.start();
        // -- Recording logic ends here --
        // Setting up some variables to notify the user we are finished initialization.
        this.isToggling = false;
        this.isRecording = true;
        this.#setCurrentPage("RecordingPage" /* Pages.RecordingPage */);
        // Dispatch an event for e2e testing.
        this.dispatchEvent(new _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_21__.RecordingStateChangedEvent(this.currentRecording.flow));
    }
    async #onRecordingFinished() {
        if (!this.currentRecording || !this.currentRecordingSession) {
            throw new Error('Recording was never started');
        }
        // Setting up some variables to notify the user we are finalizing a recording.
        this.isToggling = true;
        this.#clearError();
        // -- Recording logic starts here --
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingToggled(2 /* Host.UserMetrics.RecordingToggled.RecordingFinished */);
        await this.currentRecordingSession.stop();
        this.currentRecordingSession = undefined;
        // -- Recording logic ends here --
        // Setting up some variables to notify the user we are finished finalizing.
        this.isToggling = false;
        this.isRecording = false;
        // Dispatch an event for e2e testing.
        this.dispatchEvent(new _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_21__.RecordingStateChangedEvent(this.currentRecording.flow));
    }
    async #onRecordingCancelled() {
        if (this.previousPage) {
            this.#setCurrentPage(this.previousPage);
        }
    }
    async #onRecordingSelected(event) {
        const storageName = event instanceof _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingListView.OpenRecordingEvent ||
            event instanceof _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingListView.PlayRecordingEvent ?
            event.storageName :
            event.target?.value;
        this.#setCurrentRecording(await this.#storage.getRecording(storageName));
        if (this.currentRecording) {
            this.#setCurrentPage("RecordingPage" /* Pages.RecordingPage */);
        }
        else if (storageName === "StartPage" /* Pages.StartPage */) {
            this.#setCurrentPage("StartPage" /* Pages.StartPage */);
        }
        else if (storageName === "AllRecordingsPage" /* Pages.AllRecordingsPage */) {
            this.#setCurrentPage("AllRecordingsPage" /* Pages.AllRecordingsPage */);
        }
    }
    async #onExportOptionSelected(event) {
        if (typeof event.itemValue !== 'string') {
            throw new Error('Invalid export option value');
        }
        if (event.itemValue === GET_EXTENSIONS_MENU_ITEM) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(GET_EXTENSIONS_URL);
            return;
        }
        if (!this.currentRecording) {
            throw new Error('No recording selected');
        }
        const id = event.itemValue;
        const byId = (converter) => converter.getId() === id;
        const converter = this.#builtInConverters.find(byId) || this.extensionConverters.find(byId);
        if (!converter) {
            throw new Error('No recording selected');
        }
        const [content] = await converter.stringify(this.currentRecording.flow);
        await this.#exportContent(converter.getFilename(this.currentRecording.flow), content);
        const builtInMetric = CONVERTER_ID_TO_METRIC[converter.getId()];
        if (builtInMetric) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingExported(builtInMetric);
        }
        else if (converter.getId().startsWith(_converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.ExtensionConverter.EXTENSION_PREFIX)) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingExported(4 /* Host.UserMetrics.RecordingExported.ToExtension */);
        }
        else {
            throw new Error('Could not find a metric for the export option with id = ' + id);
        }
    }
    async #exportContent(suggestedName, data) {
        try {
            const handle = await window.showSaveFilePicker({ suggestedName });
            const writable = await handle.createWritable();
            await writable.write(data);
            await writable.close();
        }
        catch (error) {
            // If the user aborts the action no need to report it, otherwise do.
            if (error.name === 'AbortError') {
                return;
            }
            throw error;
        }
    }
    async #handleAddAssertionEvent() {
        if (!this.currentRecordingSession || !this.currentRecording) {
            return;
        }
        const flow = this.currentRecordingSession.cloneUserFlow();
        flow.steps.push({ type: 'waitForElement', selectors: [['.cls']] });
        this.#setCurrentRecording(await this.#storage.updateRecording(this.currentRecording.storageName, flow), { keepBreakpoints: true, updateSession: true });
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingAssertion(1 /* Host.UserMetrics.RecordingAssertion.AssertionAdded */);
        await this.updateComplete;
        this.renderRoot.querySelector('devtools-recording-view')
            ?.shadowRoot?.querySelector('.section:last-child devtools-step-view:last-of-type')
            ?.shadowRoot?.querySelector('.action')
            ?.click();
    }
    #onImportRecording(event) {
        event.stopPropagation();
        this.#clearError();
        this.#fileSelector = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createFileSelectorElement(this.#importFile.bind(this));
        this.#fileSelector.click();
    }
    async #onPlayRecordingByName(event) {
        await this.#onRecordingSelected(event);
        await this.#onPlayRecording(new _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.PlayRecordingEvent({ targetPanel: "chrome-recorder" /* Components.RecordingView.TargetPanel.Default */, speed: this.#recorderSettings.speed }));
    }
    #onAddBreakpoint = (event) => {
        this.#stepBreakpointIndexes.add(event.index);
        this.recordingPlayer?.updateBreakpointIndexes(this.#stepBreakpointIndexes);
        this.requestUpdate();
    };
    #onRemoveBreakpoint = (event) => {
        this.#stepBreakpointIndexes.delete(event.index);
        this.recordingPlayer?.updateBreakpointIndexes(this.#stepBreakpointIndexes);
        this.requestUpdate();
    };
    #onExtensionViewClosed() {
        this.viewDescriptor = undefined;
    }
    handleActions(actionId) {
        if (!this.isActionPossible(actionId)) {
            return;
        }
        switch (actionId) {
            case "chrome-recorder.create-recording" /* Actions.RecorderActions.CreateRecording */:
                this.#onCreateNewRecording();
                return;
            case "chrome-recorder.start-recording" /* Actions.RecorderActions.StartRecording */:
                if (this.currentPage !== "CreateRecordingPage" /* Pages.CreateRecordingPage */ && !this.isRecording) {
                    this.#shortcutHelper.handleShortcut(this.#onRecordingStarted.bind(this, new _components_components_js__WEBPACK_IMPORTED_MODULE_16__.CreateRecordingView.RecordingStartedEvent(this.#recorderSettings.defaultTitle, this.#recorderSettings.defaultSelectors, this.#recorderSettings.selectorAttribute)));
                }
                else if (this.currentPage === "CreateRecordingPage" /* Pages.CreateRecordingPage */) {
                    const view = this.renderRoot.querySelector('devtools-create-recording-view');
                    if (view) {
                        this.#shortcutHelper.handleShortcut(view.startRecording.bind(view));
                    }
                }
                else if (this.isRecording) {
                    void this.#onRecordingFinished();
                }
                return;
            case "chrome-recorder.replay-recording" /* Actions.RecorderActions.ReplayRecording */:
                void this.#onPlayRecording(new _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.PlayRecordingEvent({ targetPanel: "chrome-recorder" /* Components.RecordingView.TargetPanel.Default */, speed: this.#recorderSettings.speed }));
                return;
            case "chrome-recorder.toggle-code-view" /* Actions.RecorderActions.ToggleCodeView */: {
                const view = this.renderRoot.querySelector('devtools-recording-view');
                if (view) {
                    view.showCodeToggle();
                }
                return;
            }
        }
    }
    isActionPossible(actionId) {
        switch (actionId) {
            case "chrome-recorder.create-recording" /* Actions.RecorderActions.CreateRecording */:
                return !this.isRecording && !this.#replayState.isPlaying;
            case "chrome-recorder.start-recording" /* Actions.RecorderActions.StartRecording */:
                return !this.#replayState.isPlaying;
            case "chrome-recorder.replay-recording" /* Actions.RecorderActions.ReplayRecording */:
                return (this.currentPage === "RecordingPage" /* Pages.RecordingPage */ && !this.#replayState.isPlaying);
            case "chrome-recorder.toggle-code-view" /* Actions.RecorderActions.ToggleCodeView */:
                return this.currentPage === "RecordingPage" /* Pages.RecordingPage */;
            case "chrome-recorder.copy-recording-or-step" /* Actions.RecorderActions.CopyRecordingOrStep */:
                // This action is handled in the RecordingView
                // It relies on browser `copy` event.
                return false;
        }
    }
    #getShortcutsInfo() {
        const getBindingForAction = (action) => {
            const shortcuts = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ShortcutRegistry.ShortcutRegistry.instance().shortcutsForAction(action);
            return shortcuts.map(shortcut => shortcut.title());
        };
        return [
            {
                title: i18nString(UIStrings.startStopRecording),
                bindings: getBindingForAction("chrome-recorder.start-recording" /* Actions.RecorderActions.StartRecording */),
            },
            {
                title: i18nString(UIStrings.replayRecording),
                bindings: getBindingForAction("chrome-recorder.replay-recording" /* Actions.RecorderActions.ReplayRecording */),
            },
            { title: i18nString(UIStrings.copyShortcut), bindings: [`${_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isMac() ? '⌘ C' : 'Ctrl+C'}`] },
            { title: i18nString(UIStrings.toggleCode), bindings: getBindingForAction("chrome-recorder.toggle-code-view" /* Actions.RecorderActions.ToggleCodeView */) },
        ];
    }
    #renderCurrentPage() {
        switch (this.currentPage) {
            case "StartPage" /* Pages.StartPage */:
                return this.#renderStartPage();
            case "AllRecordingsPage" /* Pages.AllRecordingsPage */:
                return this.#renderAllRecordingsPage();
            case "RecordingPage" /* Pages.RecordingPage */:
                return this.#renderRecordingPage();
            case "CreateRecordingPage" /* Pages.CreateRecordingPage */:
                return this.#renderCreateRecordingPage();
        }
    }
    #renderAllRecordingsPage() {
        const recordings = this.#storage.getRecordings();
        // clang-format off
        return html `
      <${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingListView.RecordingListView.litTagName}
        .recordings=${recordings.map(recording => ({
            storageName: recording.storageName,
            name: recording.flow.title,
        }))}
        .replayAllowed=${this.#replayAllowed}
        @createrecording=${this.#onCreateNewRecording}
        @deleterecording=${this.#onDeleteRecording}
        @openrecording=${this.#onRecordingSelected}
        @playrecording=${this.#onPlayRecordingByName}
        >
      </${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingListView.RecordingListView.litTagName}>
    `;
        // clang-format on
    }
    #renderStartPage() {
        // clang-format off
        return html `
      <${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.StartView.StartView.litTagName}
        @createrecording=${this.#onCreateNewRecording}
      ></${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.StartView.StartView.litTagName}>
    `;
        // clang-format on
    }
    #renderRecordingPage() {
        // clang-format off
        return html `
      <${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.RecordingView.litTagName}
        .data=${{
            recording: this.currentRecording?.flow,
            replayState: this.#replayState,
            isRecording: this.isRecording,
            recordingTogglingInProgress: this.isToggling,
            currentStep: this.currentStep,
            currentError: this.recordingError,
            sections: this.sections,
            settings: this.settings,
            recorderSettings: this.#recorderSettings,
            lastReplayResult: this.lastReplayResult,
            replayAllowed: this.#replayAllowed,
            breakpointIndexes: this.#stepBreakpointIndexes,
            builtInConverters: this.#builtInConverters,
            extensionConverters: this.extensionConverters,
            replayExtensions: this.replayExtensions,
            extensionDescriptor: this.viewDescriptor,
        }}
        @networkconditionschanged=${this.#onNetworkConditionsChanged}
        @timeoutchanged=${this.#onTimeoutChanged}
        @requestselectorattribute=${(event) => {
            event.send(this.currentRecording?.flow.selectorAttribute);
        }}
        @recordingfinished=${this.#onRecordingFinished}
        @stepchanged=${this.#handleRecordingChanged.bind(this)}
        @recordingtitlechanged=${this.#handleRecordingTitleChanged.bind(this)}
        @addstep=${this.#handleStepAdded.bind(this)}
        @removestep=${this.#handleStepRemoved.bind(this)}
        @addbreakpoint=${this.#onAddBreakpoint}
        @removebreakpoint=${this.#onRemoveBreakpoint}
        @playrecording=${this.#onPlayRecording}
        @abortreplay=${this.#onAbortReplay}
        @recorderextensionviewclosed=${this.#onExtensionViewClosed}
        @addassertion=${this.#handleAddAssertionEvent}
      ></${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.RecordingView.litTagName}>
    `;
        // clang-format on
    }
    #renderCreateRecordingPage() {
        // clang-format off
        return html `
      <${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.CreateRecordingView.CreateRecordingView.litTagName}
        .data=${{
            recorderSettings: this.#recorderSettings,
        }}
        @recordingstarted=${this.#onRecordingStarted}
        @recordingcancelled=${this.#onRecordingCancelled}
      ></${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.CreateRecordingView.CreateRecordingView.litTagName}>
    `;
        // clang-format on
    }
    #getExportMenuButton = () => {
        if (!this.#exportMenuButton) {
            throw new Error('#exportMenuButton not found');
        }
        return this.#exportMenuButton;
    };
    #onExportRecording(event) {
        event.stopPropagation();
        this.#clearError();
        this.exportMenuExpanded = !this.exportMenuExpanded;
    }
    #onExportMenuClosed() {
        this.exportMenuExpanded = false;
    }
    render() {
        const recordings = this.#storage.getRecordings();
        const selectValue = this.currentRecording ? this.currentRecording.storageName : this.currentPage;
        // clang-format off
        const values = [
            recordings.length === 0
                ? {
                    value: "StartPage" /* Pages.StartPage */,
                    name: i18nString(UIStrings.noRecordings),
                    selected: selectValue === "StartPage" /* Pages.StartPage */,
                }
                : {
                    value: "AllRecordingsPage" /* Pages.AllRecordingsPage */,
                    name: `${recordings.length} ${i18nString(UIStrings.numberOfRecordings)}`,
                    selected: selectValue === "AllRecordingsPage" /* Pages.AllRecordingsPage */,
                },
            ...recordings.map(recording => ({
                value: recording.storageName,
                name: recording.flow.title,
                selected: selectValue === recording.storageName,
            })),
        ];
        return html `
        <div class="wrapper">
          <div class="header" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.toolbar()}>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}
              @click=${this.#onCreateNewRecording}
              .data=${{
            variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */,
            iconName: 'plus',
            disabled: this.#replayState.isPlaying ||
                this.isRecording ||
                this.isToggling,
            title: _models_models_js__WEBPACK_IMPORTED_MODULE_19__.Tooltip.getTooltipForActions(i18nString(UIStrings.createRecording), "chrome-recorder.create-recording" /* Actions.RecorderActions.CreateRecording */),
            jslogContext: "chrome-recorder.create-recording" /* Actions.RecorderActions.CreateRecording */,
        }}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}>
            <div class="separator"></div>
            <select
              .disabled=${recordings.length === 0 ||
            this.#replayState.isPlaying ||
            this.isRecording ||
            this.isToggling}
              @click=${(e) => e.stopPropagation()}
              @change=${this.#onRecordingSelected}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.dropDown('recordings').track({ change: true })}
            >
              ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.repeat(values, item => item.value, item => {
            return html `<option .selected=${item.selected} value=${item.value}>${item.name}</option>`;
        })}
            </select>
            <div class="separator"></div>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}
              @click=${this.#onImportRecording}
              .data=${{
            variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */,
            iconName: 'import',
            title: i18nString(UIStrings.importRecording),
            jslogContext: 'import-recording',
        }}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}
              id='origin'
              @click=${this.#onExportRecording}
              on-render=${_ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_11__.Directives.nodeRenderedCallback(node => {
            this.#exportMenuButton = node;
        })}
              .data=${{
            variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */,
            iconName: 'download',
            title: i18nString(UIStrings.exportRecording),
            disabled: !this.currentRecording,
        }}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.dropDown('export-recording').track({ click: true })}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}>
            <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.Menu.litTagName}
              @menucloserequest=${this.#onExportMenuClosed}
              @menuitemselected=${this.#onExportOptionSelected}
              .origin=${this.#getExportMenuButton}
              .showDivider=${false}
              .showSelectedItem=${false}
              .showConnector=${false}
              .open=${this.exportMenuExpanded}
            >
              <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuGroup.litTagName} .name=${i18nString(UIStrings.export)}>
                ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.repeat(this.#builtInConverters, converter => {
            return html `
                    <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuItem.litTagName} .value=${converter.getId()}
                      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.item(`converter-${converter.getFormatName()}`).track({ click: true })}>
                      ${converter.getFormatName()}
                    </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuItem.litTagName}>
                  `;
        })}
              </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuGroup.litTagName}>
              <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuGroup.litTagName} .name=${i18nString(UIStrings.exportViaExtensions)}>
                ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.repeat(this.extensionConverters, converter => {
            return html `
                    <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuItem.litTagName} .value=${converter.getId()}
                      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.item(`converter-${converter.getFormatName()}`).track({ click: true })}>
                    ${converter.getFormatName()}
                    </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuItem.litTagName}>
                  `;
        })}
                <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuItem.litTagName} .value=${GET_EXTENSIONS_MENU_ITEM}>
                  ${i18nString(UIStrings.getExtensions)}
                </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuItem.litTagName}>
              </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuGroup.litTagName}>
            </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.Menu.litTagName}>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}
              @click=${this.#onDeleteRecording}
              .data=${{
            variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */,
            iconName: 'bin',
            disabled: !this.currentRecording ||
                this.#replayState.isPlaying ||
                this.isRecording ||
                this.isToggling,
            title: i18nString(UIStrings.deleteRecording),
            jslogContext: 'delete-recording',
        }}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}>
            <div class="separator"></div>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}
              @click=${() => this.recordingPlayer?.continue()}
              .data=${{
            variant: "primary_toolbar" /* Buttons.Button.Variant.PRIMARY_TOOLBAR */,
            iconName: 'resume',
            disabled: !this.recordingPlayer ||
                !this.#replayState.isPausedOnBreakpoint,
            title: i18nString(UIStrings.continueReplay),
            jslogContext: 'continue-replay',
        }}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}
              @click=${() => this.recordingPlayer?.stepOver()}
              .data=${{
            variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */,
            iconName: 'step-over',
            disabled: !this.recordingPlayer ||
                !this.#replayState.isPausedOnBreakpoint,
            title: i18nString(UIStrings.stepOverReplay),
            jslogContext: 'step-over',
        }}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}>
            <div class="feedback">
              <x-link class="x-link" href=${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.StartView.FEEDBACK_URL} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.link('feedback').track({ click: true })}>${i18nString(UIStrings.sendFeedback)}</x-link>
            </div>
            <div class="separator"></div>
            <${_ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_10__.ShortcutDialog.ShortcutDialog.litTagName}
              .data=${{
            shortcuts: this.#getShortcutsInfo(),
        }} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.action('show-shortcuts').track({ click: true })}
            ></${_ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_10__.ShortcutDialog.ShortcutDialog.litTagName}>
          </div>
          ${this.importError
            ? html `<div class='error'>Import error: ${this.importError.message}</div>`
            : ''}
          ${this.#renderCurrentPage()}
        </div>
      `;
        // clang-format on
    }
};
__decorate([
    state()
], RecorderController.prototype, "currentRecordingSession", void 0);
__decorate([
    state()
], RecorderController.prototype, "currentRecording", void 0);
__decorate([
    state()
], RecorderController.prototype, "currentStep", void 0);
__decorate([
    state()
], RecorderController.prototype, "recordingError", void 0);
__decorate([
    state()
], RecorderController.prototype, "isRecording", void 0);
__decorate([
    state()
], RecorderController.prototype, "isToggling", void 0);
__decorate([
    state()
], RecorderController.prototype, "recordingPlayer", void 0);
__decorate([
    state()
], RecorderController.prototype, "lastReplayResult", void 0);
__decorate([
    state()
], RecorderController.prototype, "currentPage", void 0);
__decorate([
    state()
], RecorderController.prototype, "previousPage", void 0);
__decorate([
    state()
], RecorderController.prototype, "sections", void 0);
__decorate([
    state()
], RecorderController.prototype, "settings", void 0);
__decorate([
    state()
], RecorderController.prototype, "importError", void 0);
__decorate([
    state()
], RecorderController.prototype, "exportMenuExpanded", void 0);
__decorate([
    state()
], RecorderController.prototype, "extensionConverters", void 0);
__decorate([
    state()
], RecorderController.prototype, "replayExtensions", void 0);
__decorate([
    state()
], RecorderController.prototype, "viewDescriptor", void 0);
RecorderController = __decorate([
    customElement('devtools-recorder-controller')
], RecorderController);

//# sourceMappingURL=RecorderController.js.map

/***/ }),

/***/ "./panels/recorder/RecorderEvents.js":
/*!*******************************************!*\
  !*** ./panels/recorder/RecorderEvents.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordingStateChangedEvent: () => (/* binding */ RecordingStateChangedEvent),
/* harmony export */   ReplayFinishedEvent: () => (/* binding */ ReplayFinishedEvent)
/* harmony export */ });
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ReplayFinishedEvent extends Event {
    static eventName = 'replayfinished';
    constructor() {
        super(ReplayFinishedEvent.eventName, { bubbles: true, composed: true });
    }
}
class RecordingStateChangedEvent extends Event {
    recording;
    static eventName = 'recordingstatechanged';
    constructor(recording) {
        super(RecordingStateChangedEvent.eventName, {
            bubbles: true,
            composed: true,
        });
        this.recording = recording;
    }
}
//# sourceMappingURL=RecorderEvents.js.map

/***/ }),

/***/ "./panels/recorder/converters/Converter.js":
/*!*************************************************!*\
  !*** ./panels/recorder/converters/Converter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=Converter.js.map

/***/ }),

/***/ "./panels/recorder/converters/ExtensionConverter.js":
/*!**********************************************************!*\
  !*** ./panels/recorder/converters/ExtensionConverter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXTENSION_PREFIX: () => (/* binding */ EXTENSION_PREFIX),
/* harmony export */   ExtensionConverter: () => (/* binding */ ExtensionConverter)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const EXTENSION_PREFIX = 'extension_';
class ExtensionConverter {
    #idx;
    #extension;
    constructor(idx, extension) {
        this.#idx = idx;
        this.#extension = extension;
    }
    getId() {
        return EXTENSION_PREFIX + this.#idx;
    }
    getFormatName() {
        return this.#extension.getName();
    }
    getMediaType() {
        return this.#extension.getMediaType();
    }
    getFilename(flow) {
        const fileExtension = this.#mediaTypeToExtension(this.#extension.getMediaType());
        return `${flow.title}${fileExtension}`;
    }
    async stringify(flow) {
        const text = await this.#extension.stringify(flow);
        const sourceMap = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap(text);
        return [_third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap(text), sourceMap];
    }
    async stringifyStep(step) {
        return await this.#extension.stringifyStep(step);
    }
    #mediaTypeToExtension(mediaType) {
        // See https://www.iana.org/assignments/media-types/media-types.xhtml
        switch (mediaType) {
            case 'application/json':
                return '.json';
            case 'application/javascript':
            case 'text/javascript':
                return '.js';
            case 'application/typescript':
            case 'text/typescript':
                return '.ts';
            default:
                // TODO: think of exhaustive mapping once the feature gets traction.
                return '';
        }
    }
}
//# sourceMappingURL=ExtensionConverter.js.map

/***/ }),

/***/ "./panels/recorder/converters/JSONConverter.js":
/*!*****************************************************!*\
  !*** ./panels/recorder/converters/JSONConverter.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSONConverter: () => (/* binding */ JSONConverter)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class JSONConverter {
    #indent;
    constructor(indent) {
        this.#indent = indent;
    }
    getId() {
        return "json" /* Models.ConverterIds.ConverterIds.JSON */;
    }
    getFormatName() {
        return 'JSON';
    }
    getFilename(flow) {
        return `${flow.title}.json`;
    }
    async stringify(flow) {
        const text = await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringify(flow, {
            extension: new _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.JSONStringifyExtension(),
            indentation: this.#indent,
        });
        const sourceMap = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap(text);
        return [_third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap(text), sourceMap];
    }
    async stringifyStep(step) {
        return await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringifyStep(step, {
            extension: new _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.JSONStringifyExtension(),
            indentation: this.#indent,
        });
    }
    getMediaType() {
        return 'application/json';
    }
}
//# sourceMappingURL=JSONConverter.js.map

/***/ }),

/***/ "./panels/recorder/converters/LighthouseConverter.js":
/*!***********************************************************!*\
  !*** ./panels/recorder/converters/LighthouseConverter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LighthouseConverter: () => (/* binding */ LighthouseConverter)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class LighthouseConverter {
    #indent;
    constructor(indent) {
        this.#indent = indent;
    }
    getId() {
        return "lighthouse" /* Models.ConverterIds.ConverterIds.Lighthouse */;
    }
    getFormatName() {
        return 'Puppeteer (including Lighthouse analysis)';
    }
    getFilename(flow) {
        return `${flow.title}.js`;
    }
    async stringify(flow) {
        const text = await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringify(flow, {
            extension: new _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.LighthouseStringifyExtension(),
            indentation: this.#indent,
        });
        const sourceMap = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap(text);
        return [_third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap(text), sourceMap];
    }
    async stringifyStep(step) {
        // LighthouseStringifyExtension maintains state between steps, it cannot create a Lighthouse flow from a single step.
        // If we need to stringify a single step, we should return just the Puppeteer code without Lighthouse analysis.
        return await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringifyStep(step, {
            indentation: this.#indent,
        });
    }
    getMediaType() {
        return 'text/javascript';
    }
}
//# sourceMappingURL=LighthouseConverter.js.map

/***/ }),

/***/ "./panels/recorder/converters/PuppeteerConverter.js":
/*!**********************************************************!*\
  !*** ./panels/recorder/converters/PuppeteerConverter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PuppeteerConverter: () => (/* binding */ PuppeteerConverter)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class PuppeteerConverter {
    #indent;
    constructor(indent) {
        this.#indent = indent;
    }
    getId() {
        return "puppeteer" /* Models.ConverterIds.ConverterIds.Puppeteer */;
    }
    getFormatName() {
        return 'Puppeteer';
    }
    getFilename(flow) {
        return `${flow.title}.js`;
    }
    async stringify(flow) {
        const text = await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringify(flow, {
            indentation: this.#indent,
        });
        const sourceMap = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap(text);
        return [_third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap(text), sourceMap];
    }
    async stringifyStep(step) {
        return await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringifyStep(step, {
            indentation: this.#indent,
        });
    }
    getMediaType() {
        return 'text/javascript';
    }
}
//# sourceMappingURL=PuppeteerConverter.js.map

/***/ }),

/***/ "./panels/recorder/converters/PuppeteerReplayConverter.js":
/*!****************************************************************!*\
  !*** ./panels/recorder/converters/PuppeteerReplayConverter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PuppeteerReplayConverter: () => (/* binding */ PuppeteerReplayConverter)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class PuppeteerReplayConverter {
    #indent;
    constructor(indent) {
        this.#indent = indent;
    }
    getId() {
        return "@puppeteer/replay" /* Models.ConverterIds.ConverterIds.Replay */;
    }
    getFormatName() {
        return '@puppeteer/replay';
    }
    getFilename(flow) {
        return `${flow.title}.js`;
    }
    async stringify(flow) {
        const text = await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringify(flow, {
            extension: new _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerReplayStringifyExtension(),
            indentation: this.#indent,
        });
        const sourceMap = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap(text);
        return [_third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap(text), sourceMap];
    }
    async stringifyStep(step) {
        return await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringifyStep(step, {
            extension: new _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerReplayStringifyExtension(),
        });
    }
    getMediaType() {
        return 'text/javascript';
    }
}
//# sourceMappingURL=PuppeteerReplayConverter.js.map

/***/ }),

/***/ "./panels/recorder/converters/converters.js":
/*!**************************************************!*\
  !*** ./panels/recorder/converters/converters.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Converter: () => (/* reexport module object */ _Converter_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   ExtensionConverter: () => (/* reexport module object */ _ExtensionConverter_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   JSONConverter: () => (/* reexport module object */ _JSONConverter_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   LighthouseConverter: () => (/* reexport module object */ _LighthouseConverter_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   PuppeteerConverter: () => (/* reexport module object */ _PuppeteerConverter_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   PuppeteerReplayConverter: () => (/* reexport module object */ _PuppeteerReplayConverter_js__WEBPACK_IMPORTED_MODULE_5__)
/* harmony export */ });
/* harmony import */ var _Converter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Converter.js */ "./panels/recorder/converters/Converter.js");
/* harmony import */ var _ExtensionConverter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtensionConverter.js */ "./panels/recorder/converters/ExtensionConverter.js");
/* harmony import */ var _JSONConverter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JSONConverter.js */ "./panels/recorder/converters/JSONConverter.js");
/* harmony import */ var _LighthouseConverter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LighthouseConverter.js */ "./panels/recorder/converters/LighthouseConverter.js");
/* harmony import */ var _PuppeteerConverter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PuppeteerConverter.js */ "./panels/recorder/converters/PuppeteerConverter.js");
/* harmony import */ var _PuppeteerReplayConverter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PuppeteerReplayConverter.js */ "./panels/recorder/converters/PuppeteerReplayConverter.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







//# sourceMappingURL=converters.js.map

/***/ }),

/***/ "./panels/recorder/recorderController.css.js":
/*!***************************************************!*\
  !*** ./panels/recorder/recorderController.css.js ***!
  \***************************************************/
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

:host {
  overflow-x: auto;
}

:host,
devtools-recording-view,
devtools-create-recording-view {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  background-color: var(--sys-color-cdt-base-container);
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid var(--sys-color-divider);
  padding: 0 5px;
  min-height: 29px;
  max-height: 29px;
  gap: 3px;
}

.separator {
  background-color: var(--sys-color-divider);
  width: 1px;
  height: 17px;
  margin: 0;
}

select {
  border-radius: 2px;
  border: 1px solid transparent;
  height: 24px;
  max-width: 180px;
  min-width: 140px;
  padding: 0 5px;
  position: relative;
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);
  text-overflow: ellipsis;
}

select:disabled {
  color: var(--sys-color-state-disabled);
}

select:not([disabled]):hover,
select:not([disabled]):focus-visible,
select:not([disabled]):active {
  background-color: var(--sys-color-state-hover-on-subtle);
}

select:not([disabled]):focus-visible {
  box-shadow: 0 0 0 2px var(--sys-color-state-focus-ring);
}

select option {
  background-color: var(--sys-color-cdt-base-container);
  color: var(--sys-color-on-surface);
}

devtools-menu {
  width: 0;
  height: 0;
  position: absolute;
}

devtools-recording-list-view {
  overflow: auto;
}

.error {
  color: var(--sys-color-error);
  border: 1px solid var(--sys-color-error);
  background-color: var(--sys-color-error-container);
  padding: 4px;
}

.feedback {
  margin-left: auto;
  margin-right: 4px;
}

.feedback .x-link {
  letter-spacing: 0.03em;
  text-decoration-line: underline;
  font-size: 9px;
  line-height: 16px;
  color: var(--sys-color-on-surface-subtle);
  outline-offset: 3px;
}

.feedback .x-link:focus-visible {
  outline: -webkit-focus-ring-color auto 1px;
}

devtools-shortcut-dialog {
  padding-right: 6px;
}

/*# sourceURL=recorderController.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./services/tracing/PerformanceTracing.js":
/*!************************************************!*\
  !*** ./services/tracing/PerformanceTracing.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerformanceTracing: () => (/* binding */ PerformanceTracing),
/* harmony export */   RawTraceEvents: () => (/* binding */ RawTraceEvents)
/* harmony export */ });
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class PerformanceTracing {
    #traceEvents = [];
    #tracingManager = null;
    #delegate;
    constructor(target, delegate) {
        this.#tracingManager = target.model(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.TracingManager.TracingManager);
        this.#delegate = delegate;
    }
    async start() {
        this.#traceEvents.length = 0;
        if (!this.#tracingManager) {
            throw new Error('No tracing manager');
        }
        // This panel may be opened with trace data recorded in other tools.
        // Keep in sync with the categories arrays in:
        // https://source.chromium.org/chromium/chromium/src/+/main:third_party/devtools-frontend/src/front_end/panels/timeline/TimelineController.ts
        // https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/gather/gatherers/trace.js
        const categories = [
            '-*',
            'blink.console',
            'blink.user_timing',
            'devtools.timeline',
            'disabled-by-default-devtools.screenshot',
            'disabled-by-default-devtools.timeline',
            'disabled-by-default-devtools.timeline.invalidationTracking',
            'disabled-by-default-devtools.timeline.frame',
            'disabled-by-default-devtools.timeline.stack',
            'disabled-by-default-v8.cpu_profiler',
            'disabled-by-default-v8.cpu_profiler.hires',
            'latencyInfo',
            'loading',
            'disabled-by-default-lighthouse',
            'v8.execute',
            'v8',
        ].join(',');
        const started = await this.#tracingManager.start(this, categories, '');
        if (!started) {
            throw new Error('Unable to start tracing.');
        }
    }
    async stop() {
        return this.#tracingManager?.stop();
    }
    // Start of implementation of SDK.TracingManager.TracingManagerClient
    getTraceEvents() {
        return this.#traceEvents;
    }
    traceEventsCollected(events) {
        this.#traceEvents.push(...events);
    }
    tracingBufferUsage(usage) {
        this.#delegate.tracingBufferUsage(usage);
    }
    eventsRetrievalProgress(progress) {
        this.#delegate.eventsRetrievalProgress(progress);
    }
    tracingComplete() {
        this.#delegate.tracingComplete(this.#traceEvents);
    }
}
// Used by an implementation of Common.Revealer to transfer data from the recorder to the performance panel.
class RawTraceEvents {
    events;
    constructor(events) {
        this.events = events;
    }
    getEvents() {
        return this.events;
    }
}
//# sourceMappingURL=PerformanceTracing.js.map

/***/ }),

/***/ "./services/tracing/tracing.js":
/*!*************************************!*\
  !*** ./services/tracing/tracing.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerformanceTracing: () => (/* reexport module object */ _PerformanceTracing_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _PerformanceTracing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PerformanceTracing.js */ "./services/tracing/PerformanceTracing.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=tracing.js.map

/***/ })

}]);