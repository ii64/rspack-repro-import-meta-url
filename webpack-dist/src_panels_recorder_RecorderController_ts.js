"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_RecorderController_ts"],{

/***/ "./src/panels/emulation/emulation.ts":
/*!*******************************************!*\
  !*** ./src/panels/emulation/emulation.ts ***!
  \*******************************************/
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
/* harmony import */ var _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedApp.js */ "./src/panels/emulation/AdvancedApp.ts");
/* harmony import */ var _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectedPagePlaceholder.js */ "./src/panels/emulation/InspectedPagePlaceholder.ts");
/* harmony import */ var _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaQueryInspector.js */ "./src/panels/emulation/MediaQueryInspector.ts");
/* harmony import */ var _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeviceModeToolbar.js */ "./src/panels/emulation/DeviceModeToolbar.ts");
/* harmony import */ var _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeviceModeView.js */ "./src/panels/emulation/DeviceModeView.ts");
/* harmony import */ var _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeviceModeWrapper.js */ "./src/panels/emulation/DeviceModeWrapper.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.















/***/ }),

/***/ "./src/panels/recorder/RecorderController.ts":
/*!***************************************************!*\
  !*** ./src/panels/recorder/RecorderController.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pages: () => (/* binding */ Pages),
/* harmony export */   RecorderController: () => (/* binding */ RecorderController)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/extensions/extensions.js */ "./src/models/extensions/extensions.ts");
/* harmony import */ var _panels_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../panels/emulation/emulation.js */ "./src/panels/emulation/emulation.ts");
/* harmony import */ var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../panels/timeline/timeline.js */ "./src/panels/timeline/timeline.ts");
/* harmony import */ var _services_tracing_tracing_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/tracing/tracing.js */ "./src/services/tracing/tracing.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/components/dialogs/dialogs.js */ "./src/ui/components/dialogs/dialogs.ts");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/components/menus/menus.js */ "./src/ui/components/menus/menus.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/recorder/components/components.ts");
/* harmony import */ var _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./converters/converters.js */ "./src/panels/recorder/converters/converters.ts");
/* harmony import */ var _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./extensions/extensions.js */ "./src/panels/recorder/extensions/extensions.ts");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./models/models.js */ "./src/panels/recorder/models/models.ts");
/* harmony import */ var _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./recorder-actions/recorder-actions.js */ "./src/panels/recorder/recorder-actions/recorder-actions.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './recorderController.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./RecorderEvents.js */ "./src/panels/recorder/RecorderEvents.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (undefined && undefined.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
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
var Pages;
(function (Pages) {
    Pages["StartPage"] = "StartPage";
    Pages["AllRecordingsPage"] = "AllRecordingsPage";
    Pages["CreateRecordingPage"] = "CreateRecordingPage";
    Pages["RecordingPage"] = "RecordingPage";
})(Pages || (Pages = {}));
const CONVERTER_ID_TO_METRIC = {
    [_models_models_js__WEBPACK_IMPORTED_MODULE_19__.ConverterIds.ConverterIds.JSON]: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingExported.ToJSON,
    [_models_models_js__WEBPACK_IMPORTED_MODULE_19__.ConverterIds.ConverterIds.Replay]: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingExported.ToPuppeteerReplay,
    [_models_models_js__WEBPACK_IMPORTED_MODULE_19__.ConverterIds.ConverterIds.Puppeteer]: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingExported.ToPuppeteer,
    [_models_models_js__WEBPACK_IMPORTED_MODULE_19__.ConverterIds.ConverterIds.Lighthouse]: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingExported.ToLighthouse,
};
let RecorderController = (() => {
    var _RecorderController_instances, _RecorderController_storage, _RecorderController_screenshotStorage, _RecorderController_replayAllowed, _RecorderController_replayState, _RecorderController_fileSelector, _RecorderController_exportMenuButton, _RecorderController_stepBreakpointIndexes, _RecorderController_builtInConverters, _RecorderController_recorderSettings, _RecorderController_shortcutHelper, _RecorderController_updateExtensions, _RecorderController_clearError, _RecorderController_importFile, _RecorderController_setCurrentRecording, _RecorderController_setCurrentPage, _RecorderController_buildSettings, _RecorderController_getMainTarget, _RecorderController_getSectionFromStep, _RecorderController_updateScreenshotsForSections, _RecorderController_onAbortReplay, _RecorderController_onPlayViaExtension, _RecorderController_onPlayRecording, _RecorderController_disableDeviceModeIfEnabled, _RecorderController_setTouchEmulationAllowed, _RecorderController_onSetRecording, _RecorderController_handleRecordingChanged, _RecorderController_handleStepAdded, _RecorderController_handleRecordingTitleChanged, _RecorderController_handleStepRemoved, _RecorderController_onNetworkConditionsChanged, _RecorderController_onTimeoutChanged, _RecorderController_onDeleteRecording, _RecorderController_onCreateNewRecording, _RecorderController_onRecordingStarted, _RecorderController_onRecordingFinished, _RecorderController_onRecordingCancelled, _RecorderController_onRecordingSelected, _RecorderController_onExportOptionSelected, _RecorderController_exportContent, _RecorderController_handleAddAssertionEvent, _RecorderController_onImportRecording, _RecorderController_onPlayRecordingByName, _RecorderController_onAddBreakpoint, _RecorderController_onRemoveBreakpoint, _RecorderController_onExtensionViewClosed, _RecorderController_getShortcutsInfo, _RecorderController_renderCurrentPage, _RecorderController_renderAllRecordingsPage, _RecorderController_renderStartPage, _RecorderController_renderRecordingPage, _RecorderController_renderCreateRecordingPage, _RecorderController_getExportMenuButton, _RecorderController_onExportRecording, _RecorderController_onExportMenuClosed;
    let _classDecorators = [customElement('devtools-recorder-controller')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    var RecorderController = _classThis = class extends _classSuper {
        constructor() {
            super();
            _RecorderController_instances.add(this);
            _RecorderController_storage.set(this, _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingStorage.RecordingStorage.instance());
            _RecorderController_screenshotStorage.set(this, _models_models_js__WEBPACK_IMPORTED_MODULE_19__.ScreenshotStorage.ScreenshotStorage.instance());
            // TODO: we keep the functionality to allow/disallow replay but right now it's not used.
            // It can be used to decide if we allow replay on a certain target for example.
            _RecorderController_replayAllowed.set(this, true);
            _RecorderController_replayState.set(this, { isPlaying: false, isPausedOnBreakpoint: false });
            _RecorderController_fileSelector.set(this, void 0);
            _RecorderController_exportMenuButton.set(this, void 0);
            _RecorderController_stepBreakpointIndexes.set(this, new Set());
            _RecorderController_builtInConverters.set(this, void 0);
            _RecorderController_recorderSettings.set(this, new _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecorderSettings.RecorderSettings());
            _RecorderController_shortcutHelper.set(this, new _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecorderShortcutHelper.RecorderShortcutHelper());
            _RecorderController_onAddBreakpoint.set(this, (event) => {
                __classPrivateFieldGet(this, _RecorderController_stepBreakpointIndexes, "f").add(event.index);
                this.recordingPlayer?.updateBreakpointIndexes(__classPrivateFieldGet(this, _RecorderController_stepBreakpointIndexes, "f"));
                this.requestUpdate();
            });
            _RecorderController_onRemoveBreakpoint.set(this, (event) => {
                __classPrivateFieldGet(this, _RecorderController_stepBreakpointIndexes, "f").delete(event.index);
                this.recordingPlayer?.updateBreakpointIndexes(__classPrivateFieldGet(this, _RecorderController_stepBreakpointIndexes, "f"));
                this.requestUpdate();
            });
            _RecorderController_getExportMenuButton.set(this, () => {
                if (!__classPrivateFieldGet(this, _RecorderController_exportMenuButton, "f")) {
                    throw new Error('#exportMenuButton not found');
                }
                return __classPrivateFieldGet(this, _RecorderController_exportMenuButton, "f");
            });
            this.isRecording = false;
            this.isToggling = false;
            this.exportMenuExpanded = false;
            this.currentPage = Pages.StartPage;
            if (__classPrivateFieldGet(this, _RecorderController_storage, "f").getRecordings().length) {
                __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentPage).call(this, Pages.AllRecordingsPage);
            }
            const textEditorIndent = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').get();
            __classPrivateFieldSet(this, _RecorderController_builtInConverters, Object.freeze([
                new _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.JSONConverter.JSONConverter(textEditorIndent),
                new _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.PuppeteerReplayConverter.PuppeteerReplayConverter(textEditorIndent),
                new _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.PuppeteerConverter.PuppeteerConverter(textEditorIndent),
                new _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.LighthouseConverter.LighthouseConverter(textEditorIndent),
            ]), "f");
            const extensionManager = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_18__.ExtensionManager.ExtensionManager.instance();
            __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_updateExtensions).call(this, extensionManager.extensions());
            extensionManager.addEventListener(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_18__.ExtensionManager.Events.ExtensionsUpdated, event => {
                __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_updateExtensions).call(this, event.data);
            });
            // used in e2e tests only.
            this.addEventListener('setrecording', (event) => __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onSetRecording).call(this, event));
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            if (this.currentRecordingSession) {
                void this.currentRecordingSession.stop();
            }
        }
        setIsRecordingStateForTesting(isRecording) {
            this.isRecording = isRecording;
        }
        setRecordingStateForTesting(state) {
            __classPrivateFieldGet(this, _RecorderController_replayState, "f").isPlaying = state.isPlaying;
            __classPrivateFieldGet(this, _RecorderController_replayState, "f").isPausedOnBreakpoint = state.isPausedOnBreakpoint;
        }
        setCurrentPageForTesting(page) {
            __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentPage).call(this, page);
        }
        getCurrentPageForTesting() {
            return this.currentPage;
        }
        getCurrentRecordingForTesting() {
            return this.currentRecording;
        }
        getStepBreakpointIndexesForTesting() {
            return [...__classPrivateFieldGet(this, _RecorderController_stepBreakpointIndexes, "f").values()];
        }
        setCurrentRecordingForTesting(recording) {
            __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentRecording).call(this, recording);
        }
        getSectionsForTesting() {
            return this.sections;
        }
        // Used by e2e tests to inspect the current recording.
        getUserFlow() {
            return this.currentRecording?.flow;
        }
        handleActions(actionId) {
            if (!this.isActionPossible(actionId)) {
                return;
            }
            switch (actionId) {
                case _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_20__.RecorderActions.CreateRecording:
                    __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onCreateNewRecording).call(this);
                    return;
                case _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_20__.RecorderActions.StartRecording:
                    if (this.currentPage !== Pages.CreateRecordingPage && !this.isRecording) {
                        __classPrivateFieldGet(this, _RecorderController_shortcutHelper, "f").handleShortcut(__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onRecordingStarted).bind(this, new _components_components_js__WEBPACK_IMPORTED_MODULE_16__.CreateRecordingView.RecordingStartedEvent(__classPrivateFieldGet(this, _RecorderController_recorderSettings, "f").defaultTitle, __classPrivateFieldGet(this, _RecorderController_recorderSettings, "f").defaultSelectors, __classPrivateFieldGet(this, _RecorderController_recorderSettings, "f").selectorAttribute)));
                    }
                    else if (this.currentPage === Pages.CreateRecordingPage) {
                        const view = this.renderRoot.querySelector('devtools-create-recording-view');
                        if (view) {
                            __classPrivateFieldGet(this, _RecorderController_shortcutHelper, "f").handleShortcut(view.startRecording.bind(view));
                        }
                    }
                    else if (this.isRecording) {
                        void __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onRecordingFinished).call(this);
                    }
                    return;
                case _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_20__.RecorderActions.ReplayRecording:
                    void __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onPlayRecording).call(this, new _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.PlayRecordingEvent({ targetPanel: _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.TargetPanel.Default, speed: __classPrivateFieldGet(this, _RecorderController_recorderSettings, "f").speed }));
                    return;
                case _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_20__.RecorderActions.ToggleCodeView: {
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
                case _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_20__.RecorderActions.CreateRecording:
                    return !this.isRecording && !__classPrivateFieldGet(this, _RecorderController_replayState, "f").isPlaying;
                case _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_20__.RecorderActions.StartRecording:
                    return !__classPrivateFieldGet(this, _RecorderController_replayState, "f").isPlaying;
                case _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_20__.RecorderActions.ReplayRecording:
                    return (this.currentPage === Pages.RecordingPage && !__classPrivateFieldGet(this, _RecorderController_replayState, "f").isPlaying);
                case _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_20__.RecorderActions.ToggleCodeView:
                    return this.currentPage === Pages.RecordingPage;
                case _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_20__.RecorderActions.CopyRecordingOrStep:
                    // This action is handled in the RecordingView
                    // It relies on browser `copy` event.
                    return false;
            }
        }
        render() {
            const recordings = __classPrivateFieldGet(this, _RecorderController_storage, "f").getRecordings();
            const selectValue = this.currentRecording ? this.currentRecording.storageName : this.currentPage;
            // clang-format off
            const values = [
                recordings.length === 0
                    ? {
                        value: Pages.StartPage,
                        name: i18nString(UIStrings.noRecordings),
                        selected: selectValue === Pages.StartPage,
                    }
                    : {
                        value: Pages.AllRecordingsPage,
                        name: `${recordings.length} ${i18nString(UIStrings.numberOfRecordings)}`,
                        selected: selectValue === Pages.AllRecordingsPage,
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
              @click=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onCreateNewRecording)}
              .data=${{
                variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Variant.TOOLBAR,
                iconName: 'plus',
                disabled: __classPrivateFieldGet(this, _RecorderController_replayState, "f").isPlaying ||
                    this.isRecording ||
                    this.isToggling,
                title: _models_models_js__WEBPACK_IMPORTED_MODULE_19__.Tooltip.getTooltipForActions(i18nString(UIStrings.createRecording), _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_20__.RecorderActions.CreateRecording),
                jslogContext: _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_20__.RecorderActions.CreateRecording,
            }}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}>
            <div class="separator"></div>
            <select
              .disabled=${recordings.length === 0 ||
                __classPrivateFieldGet(this, _RecorderController_replayState, "f").isPlaying ||
                this.isRecording ||
                this.isToggling}
              @click=${(e) => e.stopPropagation()}
              @change=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onRecordingSelected)}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.dropDown('recordings').track({ change: true })}
            >
              ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.repeat(values, item => item.value, item => {
                return html `<option .selected=${item.selected} value=${item.value}>${item.name}</option>`;
            })}
            </select>
            <div class="separator"></div>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}
              @click=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onImportRecording)}
              .data=${{
                variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Variant.TOOLBAR,
                iconName: 'import',
                title: i18nString(UIStrings.importRecording),
                jslogContext: 'import-recording',
            }}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}
              id='origin'
              @click=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onExportRecording)}
              on-render=${_ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_11__.Directives.nodeRenderedCallback(node => {
                __classPrivateFieldSet(this, _RecorderController_exportMenuButton, node, "f");
            })}
              .data=${{
                variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Variant.TOOLBAR,
                iconName: 'download',
                title: i18nString(UIStrings.exportRecording),
                disabled: !this.currentRecording,
            }}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.dropDown('export-recording').track({ click: true })}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}>
            <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.Menu.litTagName}
              @menucloserequest=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onExportMenuClosed)}
              @menuitemselected=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onExportOptionSelected)}
              .origin=${__classPrivateFieldGet(this, _RecorderController_getExportMenuButton, "f")}
              .showDivider=${false}
              .showSelectedItem=${false}
              .showConnector=${false}
              .open=${this.exportMenuExpanded}
            >
              <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuGroup.litTagName} .name=${i18nString(UIStrings.export)}>
                ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.repeat(__classPrivateFieldGet(this, _RecorderController_builtInConverters, "f"), converter => {
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
              @click=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onDeleteRecording)}
              .data=${{
                variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Variant.TOOLBAR,
                iconName: 'bin',
                disabled: !this.currentRecording ||
                    __classPrivateFieldGet(this, _RecorderController_replayState, "f").isPlaying ||
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
                variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Variant.PRIMARY_TOOLBAR,
                iconName: 'resume',
                disabled: !this.recordingPlayer ||
                    !__classPrivateFieldGet(this, _RecorderController_replayState, "f").isPausedOnBreakpoint,
                title: i18nString(UIStrings.continueReplay),
                jslogContext: 'continue-replay',
            }}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}
              @click=${() => this.recordingPlayer?.stepOver()}
              .data=${{
                variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Variant.TOOLBAR,
                iconName: 'step-over',
                disabled: !this.recordingPlayer ||
                    !__classPrivateFieldGet(this, _RecorderController_replayState, "f").isPausedOnBreakpoint,
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
                shortcuts: __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_getShortcutsInfo).call(this),
            }} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.action('show-shortcuts').track({ click: true })}
            ></${_ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_10__.ShortcutDialog.ShortcutDialog.litTagName}>
          </div>
          ${this.importError
                ? html `<div class='error'>Import error: ${this.importError.message}</div>`
                : ''}
          ${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_renderCurrentPage).call(this)}
        </div>
      `;
            // clang-format on
        }
    };
    _RecorderController_storage = new WeakMap();
    _RecorderController_screenshotStorage = new WeakMap();
    _RecorderController_replayAllowed = new WeakMap();
    _RecorderController_replayState = new WeakMap();
    _RecorderController_fileSelector = new WeakMap();
    _RecorderController_exportMenuButton = new WeakMap();
    _RecorderController_stepBreakpointIndexes = new WeakMap();
    _RecorderController_builtInConverters = new WeakMap();
    _RecorderController_recorderSettings = new WeakMap();
    _RecorderController_shortcutHelper = new WeakMap();
    _RecorderController_onAddBreakpoint = new WeakMap();
    _RecorderController_onRemoveBreakpoint = new WeakMap();
    _RecorderController_getExportMenuButton = new WeakMap();
    _RecorderController_instances = new WeakSet();
    _RecorderController_updateExtensions = function _RecorderController_updateExtensions(extensions) {
        this.extensionConverters =
            extensions.filter(extension => extension.getCapabilities().includes('export')).map((extension, idx) => {
                return new _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.ExtensionConverter.ExtensionConverter(idx, extension);
            });
        this.replayExtensions = extensions.filter(extension => extension.getCapabilities().includes('replay'));
    };
    _RecorderController_clearError = function _RecorderController_clearError() {
        this.importError = undefined;
    };
    _RecorderController_importFile = async function _RecorderController_importFile(file) {
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
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentRecording).call(this, await __classPrivateFieldGet(this, _RecorderController_storage, "f").saveRecording(flow));
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentPage).call(this, Pages.RecordingPage);
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_clearError).call(this);
    };
    _RecorderController_setCurrentRecording = function _RecorderController_setCurrentRecording(recording, opts = {}) {
        const { keepBreakpoints = false, updateSession = false } = opts;
        this.recordingPlayer?.abort();
        this.currentStep = undefined;
        this.recordingError = undefined;
        this.lastReplayResult = undefined;
        this.recordingPlayer = undefined;
        __classPrivateFieldGet(this, _RecorderController_replayState, "f").isPlaying = false;
        __classPrivateFieldGet(this, _RecorderController_replayState, "f").isPausedOnBreakpoint = false;
        __classPrivateFieldSet(this, _RecorderController_stepBreakpointIndexes, keepBreakpoints ? __classPrivateFieldGet(this, _RecorderController_stepBreakpointIndexes, "f") : new Set(), "f");
        if (recording) {
            this.currentRecording = recording;
            this.sections = _models_models_js__WEBPACK_IMPORTED_MODULE_19__.Section.buildSections(recording.flow.steps);
            this.settings = __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_buildSettings).call(this, recording.flow);
            if (updateSession && this.currentRecordingSession) {
                this.currentRecordingSession.overwriteUserFlow(recording.flow);
            }
        }
        else {
            this.currentRecording = undefined;
            this.sections = undefined;
            this.settings = undefined;
        }
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_updateScreenshotsForSections).call(this);
    };
    _RecorderController_setCurrentPage = function _RecorderController_setCurrentPage(page) {
        if (page === this.currentPage) {
            return;
        }
        this.previousPage = this.currentPage;
        this.currentPage = page;
    };
    _RecorderController_buildSettings = function _RecorderController_buildSettings(flow) {
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
    };
    _RecorderController_getMainTarget = function _RecorderController_getMainTarget() {
        const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!target) {
            throw new Error('Missing main page target');
        }
        return target;
    };
    _RecorderController_getSectionFromStep = function _RecorderController_getSectionFromStep(step) {
        if (!this.sections) {
            return null;
        }
        for (const section of this.sections) {
            if (section.steps.indexOf(step) !== -1) {
                return section;
            }
        }
        return null;
    };
    _RecorderController_updateScreenshotsForSections = function _RecorderController_updateScreenshotsForSections() {
        if (!this.sections || !this.currentRecording) {
            return;
        }
        const storageName = this.currentRecording.storageName;
        for (let i = 0; i < this.sections.length; i++) {
            const screenshot = __classPrivateFieldGet(this, _RecorderController_screenshotStorage, "f").getScreenshotForSection(storageName, i);
            this.sections[i].screenshot = screenshot || undefined;
        }
        this.requestUpdate();
    };
    _RecorderController_onAbortReplay = function _RecorderController_onAbortReplay() {
        this.recordingPlayer?.abort();
    };
    _RecorderController_onPlayViaExtension = async function _RecorderController_onPlayViaExtension(extension) {
        if (!this.currentRecording || !__classPrivateFieldGet(this, _RecorderController_replayAllowed, "f")) {
            return;
        }
        const pluginManager = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_5__.RecorderPluginManager.RecorderPluginManager.instance();
        const promise = pluginManager.once(_models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_5__.RecorderPluginManager.Events.ShowViewRequested);
        extension.replay(this.currentRecording.flow);
        const descriptor = await promise;
        this.viewDescriptor = descriptor;
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayStarted(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingReplayStarted.ReplayViaExtension);
    };
    _RecorderController_onPlayRecording = async function _RecorderController_onPlayRecording(event) {
        if (!this.currentRecording || !__classPrivateFieldGet(this, _RecorderController_replayAllowed, "f")) {
            return;
        }
        if (this.viewDescriptor) {
            this.viewDescriptor = undefined;
        }
        if (event.data.extension) {
            return __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onPlayViaExtension).call(this, event.data.extension);
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayStarted(event.data.targetPanel !== _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.TargetPanel.Default ?
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingReplayStarted.ReplayWithPerformanceTracing :
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingReplayStarted.ReplayOnly);
        __classPrivateFieldGet(this, _RecorderController_replayState, "f").isPlaying = true;
        this.currentStep = undefined;
        this.recordingError = undefined;
        this.lastReplayResult = undefined;
        const currentRecording = this.currentRecording;
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_clearError).call(this);
        await __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_disableDeviceModeIfEnabled).call(this);
        this.recordingPlayer = new _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingPlayer.RecordingPlayer(this.currentRecording.flow, { speed: event.data.speed, breakpointIndexes: __classPrivateFieldGet(this, _RecorderController_stepBreakpointIndexes, "f") });
        const withPerformanceTrace = event.data.targetPanel === _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.TargetPanel.PerformancePanel;
        const sectionsWithScreenshot = new Set();
        this.recordingPlayer.addEventListener(_models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingPlayer.Events.Step, async ({ data: { step, resolve } }) => {
            this.currentStep = step;
            const currentSection = __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_getSectionFromStep).call(this, step);
            if (this.sections && currentSection && !sectionsWithScreenshot.has(currentSection)) {
                sectionsWithScreenshot.add(currentSection);
                const currentSectionIndex = this.sections.indexOf(currentSection);
                const screenshot = await _models_models_js__WEBPACK_IMPORTED_MODULE_19__.ScreenshotUtils.takeScreenshot();
                currentSection.screenshot = screenshot;
                _models_models_js__WEBPACK_IMPORTED_MODULE_19__.ScreenshotStorage.ScreenshotStorage.instance().storeScreenshotForSection(currentRecording.storageName, currentSectionIndex, screenshot);
            }
            resolve();
        });
        this.recordingPlayer.addEventListener(_models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingPlayer.Events.Stop, () => {
            __classPrivateFieldGet(this, _RecorderController_replayState, "f").isPausedOnBreakpoint = true;
            this.requestUpdate();
        });
        this.recordingPlayer.addEventListener(_models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingPlayer.Events.Continue, () => {
            __classPrivateFieldGet(this, _RecorderController_replayState, "f").isPausedOnBreakpoint = false;
            this.requestUpdate();
        });
        this.recordingPlayer.addEventListener(_models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingPlayer.Events.Error, ({ data: error }) => {
            this.recordingError = error;
            if (!withPerformanceTrace) {
                __classPrivateFieldGet(this, _RecorderController_replayState, "f").isPlaying = false;
                this.recordingPlayer = undefined;
            }
            this.lastReplayResult = _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingPlayer.ReplayResult.Failure;
            const errorMessage = error.message.toLowerCase();
            if (errorMessage.startsWith('could not find element')) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayFinished(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingReplayFinished.TimeoutErrorSelectors);
            }
            else if (errorMessage.startsWith('waiting for target failed')) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayFinished(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingReplayFinished.TimeoutErrorTarget);
            }
            else {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayFinished(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingReplayFinished.OtherError);
            }
        });
        this.recordingPlayer.addEventListener(_models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingPlayer.Events.Done, () => {
            if (!withPerformanceTrace) {
                __classPrivateFieldGet(this, _RecorderController_replayState, "f").isPlaying = false;
                this.recordingPlayer = undefined;
            }
            this.lastReplayResult = _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingPlayer.ReplayResult.Success;
            // Dispatch an event for e2e testing.
            this.dispatchEvent(new _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_22__.ReplayFinishedEvent());
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayFinished(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingReplayFinished.Success);
        });
        this.recordingPlayer.addEventListener(_models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingPlayer.Events.Abort, () => {
            this.currentStep = undefined;
            this.recordingError = undefined;
            this.lastReplayResult = undefined;
            __classPrivateFieldGet(this, _RecorderController_replayState, "f").isPlaying = false;
        });
        let resolveWithEvents = (_events) => { };
        const eventsPromise = new Promise((resolve) => {
            resolveWithEvents = resolve;
        });
        let performanceTracing = null;
        switch (event.data?.targetPanel) {
            case _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.TargetPanel.PerformancePanel:
                performanceTracing = new _services_tracing_tracing_js__WEBPACK_IMPORTED_MODULE_8__.PerformanceTracing.PerformanceTracing(__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_getMainTarget).call(this), {
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
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setTouchEmulationAllowed).call(this, false);
        await this.recordingPlayer.play();
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setTouchEmulationAllowed).call(this, true);
        if (performanceTracing) {
            await performanceTracing.stop();
            const events = await eventsPromise;
            __classPrivateFieldGet(this, _RecorderController_replayState, "f").isPlaying = false;
            this.recordingPlayer = undefined;
            await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.InspectorView.InspectorView.instance().showPanel(event.data?.targetPanel);
            switch (event.data?.targetPanel) {
                case _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.TargetPanel.PerformancePanel:
                    _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_7__.TimelinePanel.TimelinePanel.instance().loadFromEvents(events);
                    break;
            }
        }
    };
    _RecorderController_disableDeviceModeIfEnabled = async function _RecorderController_disableDeviceModeIfEnabled() {
        try {
            const deviceModeWrapper = _panels_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_6__.DeviceModeWrapper.DeviceModeWrapper.instance();
            if (deviceModeWrapper.isDeviceModeOn()) {
                deviceModeWrapper.toggleDeviceMode();
                const emulationModel = __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_getMainTarget).call(this).model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.EmulationModel);
                await emulationModel?.emulateDevice(null);
            }
        }
        catch {
            // in the hosted mode, when the DeviceMode toolbar is not supported,
            // Emulation.DeviceModeWrapper.DeviceModeWrapper.instance throws an exception.
        }
    };
    _RecorderController_setTouchEmulationAllowed = function _RecorderController_setTouchEmulationAllowed(touchEmulationAllowed) {
        const emulationModel = __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_getMainTarget).call(this).model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.EmulationModel);
        emulationModel?.setTouchEmulationAllowed(touchEmulationAllowed);
    };
    _RecorderController_onSetRecording = async function _RecorderController_onSetRecording(event) {
        const json = JSON.parse(event.detail);
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentRecording).call(this, await __classPrivateFieldGet(this, _RecorderController_storage, "f").saveRecording(_models_models_js__WEBPACK_IMPORTED_MODULE_19__.SchemaUtils.parse(json)));
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentPage).call(this, Pages.RecordingPage);
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_clearError).call(this);
    };
    _RecorderController_handleRecordingChanged = async function _RecorderController_handleRecordingChanged(event) {
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
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentRecording).call(this, await __classPrivateFieldGet(this, _RecorderController_storage, "f").updateRecording(recording.storageName, recording.flow), { keepBreakpoints: true, updateSession: true });
    };
    _RecorderController_handleStepAdded = async function _RecorderController_handleStepAdded(event) {
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
            if (event.position === _components_components_js__WEBPACK_IMPORTED_MODULE_16__.StepView.AddStepPosition.AFTER) {
                if (this.sections?.[sectionIdx].steps.length) {
                    step = this.sections?.[sectionIdx].steps[0];
                    position = _components_components_js__WEBPACK_IMPORTED_MODULE_16__.StepView.AddStepPosition.BEFORE;
                }
                else {
                    step = this.sections?.[sectionIdx].causingStep;
                    position = _components_components_js__WEBPACK_IMPORTED_MODULE_16__.StepView.AddStepPosition.AFTER;
                }
            }
            else {
                if (sectionIdx <= 0) {
                    throw new Error('There is no section to add a step to');
                }
                const prevSection = this.sections?.[sectionIdx - 1];
                step = prevSection?.steps[prevSection.steps.length - 1];
                position = _components_components_js__WEBPACK_IMPORTED_MODULE_16__.StepView.AddStepPosition.AFTER;
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
        const indexToInsertAt = currentIndex + (position === _components_components_js__WEBPACK_IMPORTED_MODULE_16__.StepView.AddStepPosition.BEFORE ? 0 : 1);
        steps.splice(indexToInsertAt, 0, { type: _models_models_js__WEBPACK_IMPORTED_MODULE_19__.Schema.StepType.WaitForElement, selectors: ['body'] });
        const recording = { ...this.currentRecording, flow: { ...this.currentRecording.flow, steps } };
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingEdited(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingEdited.StepAdded);
        __classPrivateFieldSet(this, _RecorderController_stepBreakpointIndexes, new Set([...__classPrivateFieldGet(this, _RecorderController_stepBreakpointIndexes, "f").values()].map(breakpointIndex => {
            if (indexToInsertAt > breakpointIndex) {
                return breakpointIndex;
            }
            return breakpointIndex + 1;
        })), "f");
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentRecording).call(this, await __classPrivateFieldGet(this, _RecorderController_storage, "f").updateRecording(recording.storageName, recording.flow), { keepBreakpoints: true, updateSession: true });
    };
    _RecorderController_handleRecordingTitleChanged = async function _RecorderController_handleRecordingTitleChanged(event) {
        if (!this.currentRecording) {
            throw new Error('Current recording expected to be defined.');
        }
        const flow = { ...this.currentRecording.flow, title: event.title };
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentRecording).call(this, await __classPrivateFieldGet(this, _RecorderController_storage, "f").updateRecording(this.currentRecording.storageName, flow));
    };
    _RecorderController_handleStepRemoved = async function _RecorderController_handleStepRemoved(event) {
        if (!this.currentRecording) {
            throw new Error('Current recording expected to be defined.');
        }
        const steps = this.currentRecording.flow.steps;
        const currentIndex = steps.indexOf(event.step);
        steps.splice(currentIndex, 1);
        const flow = { ...this.currentRecording.flow, steps };
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingEdited(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingEdited.StepRemoved);
        __classPrivateFieldSet(this, _RecorderController_stepBreakpointIndexes, new Set([...__classPrivateFieldGet(this, _RecorderController_stepBreakpointIndexes, "f").values()]
            .map(breakpointIndex => {
            if (currentIndex > breakpointIndex) {
                return breakpointIndex;
            }
            if (currentIndex === breakpointIndex) {
                return -1;
            }
            return breakpointIndex - 1;
        })
            .filter(index => index >= 0)), "f");
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentRecording).call(this, await __classPrivateFieldGet(this, _RecorderController_storage, "f").updateRecording(this.currentRecording.storageName, flow), { keepBreakpoints: true, updateSession: true });
    };
    _RecorderController_onNetworkConditionsChanged = async function _RecorderController_onNetworkConditionsChanged(event) {
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
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentRecording).call(this, await __classPrivateFieldGet(this, _RecorderController_storage, "f").updateRecording(this.currentRecording.storageName, this.currentRecording.flow));
    };
    _RecorderController_onTimeoutChanged = async function _RecorderController_onTimeoutChanged(event) {
        if (!this.currentRecording) {
            throw new Error('Current recording expected to be defined.');
        }
        this.currentRecording.flow.timeout = event.data;
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentRecording).call(this, await __classPrivateFieldGet(this, _RecorderController_storage, "f").updateRecording(this.currentRecording.storageName, this.currentRecording.flow));
    };
    _RecorderController_onDeleteRecording = async function _RecorderController_onDeleteRecording(event) {
        event.stopPropagation();
        if (event instanceof _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingListView.DeleteRecordingEvent) {
            await __classPrivateFieldGet(this, _RecorderController_storage, "f").deleteRecording(event.storageName);
            __classPrivateFieldGet(this, _RecorderController_screenshotStorage, "f").deleteScreenshotsForRecording(event.storageName);
            this.requestUpdate();
        }
        else {
            if (!this.currentRecording) {
                return;
            }
            await __classPrivateFieldGet(this, _RecorderController_storage, "f").deleteRecording(this.currentRecording.storageName);
            __classPrivateFieldGet(this, _RecorderController_screenshotStorage, "f").deleteScreenshotsForRecording(this.currentRecording.storageName);
        }
        if ((await __classPrivateFieldGet(this, _RecorderController_storage, "f").getRecordings()).length) {
            __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentPage).call(this, Pages.AllRecordingsPage);
        }
        else {
            __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentPage).call(this, Pages.StartPage);
        }
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentRecording).call(this, undefined);
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_clearError).call(this);
    };
    _RecorderController_onCreateNewRecording = function _RecorderController_onCreateNewRecording(event) {
        event?.stopPropagation();
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentPage).call(this, Pages.CreateRecordingPage);
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_clearError).call(this);
    };
    _RecorderController_onRecordingStarted = async function _RecorderController_onRecordingStarted(event) {
        // Recording is not available in device mode.
        await __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_disableDeviceModeIfEnabled).call(this);
        // Setting up some variables to notify the user we are initializing a recording.
        this.isToggling = true;
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_clearError).call(this);
        // -- Recording logic starts here --
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingToggled(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingToggled.RecordingStarted);
        this.currentRecordingSession = new _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingSession.RecordingSession(__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_getMainTarget).call(this), {
            title: event.name,
            selectorAttribute: event.selectorAttribute,
            selectorTypesToRecord: event.selectorTypesToRecord.length ? event.selectorTypesToRecord :
                Object.values(_models_models_js__WEBPACK_IMPORTED_MODULE_19__.Schema.SelectorType),
        });
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentRecording).call(this, await __classPrivateFieldGet(this, _RecorderController_storage, "f").saveRecording(this.currentRecordingSession.cloneUserFlow()));
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
            __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_updateScreenshotsForSections).call(this);
        };
        this.currentRecordingSession.addEventListener(_models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingSession.Events.RecordingUpdated, async ({ data }) => {
            if (!this.currentRecording) {
                throw new Error('No current recording found');
            }
            __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentRecording).call(this, await __classPrivateFieldGet(this, _RecorderController_storage, "f").updateRecording(this.currentRecording.storageName, data));
            const recordingView = this.shadowRoot?.querySelector('devtools-recording-view');
            recordingView?.scrollToBottom();
            await takeScreenshot(this.currentRecording);
        });
        this.currentRecordingSession.addEventListener(_models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingSession.Events.RecordingStopped, async ({ data }) => {
            if (!this.currentRecording) {
                throw new Error('No current recording found');
            }
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.keyboardShortcutFired(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_20__.RecorderActions.StartRecording);
            __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentRecording).call(this, await __classPrivateFieldGet(this, _RecorderController_storage, "f").updateRecording(this.currentRecording.storageName, data));
            await __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onRecordingFinished).call(this);
        });
        await this.currentRecordingSession.start();
        // -- Recording logic ends here --
        // Setting up some variables to notify the user we are finished initialization.
        this.isToggling = false;
        this.isRecording = true;
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentPage).call(this, Pages.RecordingPage);
        // Dispatch an event for e2e testing.
        this.dispatchEvent(new _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_22__.RecordingStateChangedEvent(this.currentRecording.flow));
    };
    _RecorderController_onRecordingFinished = async function _RecorderController_onRecordingFinished() {
        if (!this.currentRecording || !this.currentRecordingSession) {
            throw new Error('Recording was never started');
        }
        // Setting up some variables to notify the user we are finalizing a recording.
        this.isToggling = true;
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_clearError).call(this);
        // -- Recording logic starts here --
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingToggled(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingToggled.RecordingFinished);
        await this.currentRecordingSession.stop();
        this.currentRecordingSession = undefined;
        // -- Recording logic ends here --
        // Setting up some variables to notify the user we are finished finalizing.
        this.isToggling = false;
        this.isRecording = false;
        // Dispatch an event for e2e testing.
        this.dispatchEvent(new _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_22__.RecordingStateChangedEvent(this.currentRecording.flow));
    };
    _RecorderController_onRecordingCancelled = async function _RecorderController_onRecordingCancelled() {
        if (this.previousPage) {
            __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentPage).call(this, this.previousPage);
        }
    };
    _RecorderController_onRecordingSelected = async function _RecorderController_onRecordingSelected(event) {
        const storageName = event instanceof _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingListView.OpenRecordingEvent ||
            event instanceof _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingListView.PlayRecordingEvent ?
            event.storageName :
            event.target?.value;
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentRecording).call(this, await __classPrivateFieldGet(this, _RecorderController_storage, "f").getRecording(storageName));
        if (this.currentRecording) {
            __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentPage).call(this, Pages.RecordingPage);
        }
        else if (storageName === Pages.StartPage) {
            __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentPage).call(this, Pages.StartPage);
        }
        else if (storageName === Pages.AllRecordingsPage) {
            __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentPage).call(this, Pages.AllRecordingsPage);
        }
    };
    _RecorderController_onExportOptionSelected = async function _RecorderController_onExportOptionSelected(event) {
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
        const converter = __classPrivateFieldGet(this, _RecorderController_builtInConverters, "f").find(byId) || this.extensionConverters.find(byId);
        if (!converter) {
            throw new Error('No recording selected');
        }
        const [content] = await converter.stringify(this.currentRecording.flow);
        await __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_exportContent).call(this, converter.getFilename(this.currentRecording.flow), content);
        const builtInMetric = CONVERTER_ID_TO_METRIC[converter.getId()];
        if (builtInMetric) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingExported(builtInMetric);
        }
        else if (converter.getId().startsWith(_converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.ExtensionConverter.EXTENSION_PREFIX)) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingExported(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingExported.ToExtension);
        }
        else {
            throw new Error('Could not find a metric for the export option with id = ' + id);
        }
    };
    _RecorderController_exportContent = async function _RecorderController_exportContent(suggestedName, data) {
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
    };
    _RecorderController_handleAddAssertionEvent = async function _RecorderController_handleAddAssertionEvent() {
        if (!this.currentRecordingSession || !this.currentRecording) {
            return;
        }
        const flow = this.currentRecordingSession.cloneUserFlow();
        flow.steps.push({ type: 'waitForElement', selectors: [['.cls']] });
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_setCurrentRecording).call(this, await __classPrivateFieldGet(this, _RecorderController_storage, "f").updateRecording(this.currentRecording.storageName, flow), { keepBreakpoints: true, updateSession: true });
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingAssertion(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.RecordingAssertion.AssertionAdded);
        await this.updateComplete;
        this.renderRoot.querySelector('devtools-recording-view')
            ?.shadowRoot?.querySelector('.section:last-child devtools-step-view:last-of-type')
            ?.shadowRoot?.querySelector('.action')
            ?.click();
    };
    _RecorderController_onImportRecording = function _RecorderController_onImportRecording(event) {
        event.stopPropagation();
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_clearError).call(this);
        __classPrivateFieldSet(this, _RecorderController_fileSelector, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createFileSelectorElement(__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_importFile).bind(this)), "f");
        __classPrivateFieldGet(this, _RecorderController_fileSelector, "f").click();
    };
    _RecorderController_onPlayRecordingByName = async function _RecorderController_onPlayRecordingByName(event) {
        await __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onRecordingSelected).call(this, event);
        await __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onPlayRecording).call(this, new _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.PlayRecordingEvent({ targetPanel: _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.TargetPanel.Default, speed: __classPrivateFieldGet(this, _RecorderController_recorderSettings, "f").speed }));
    };
    _RecorderController_onExtensionViewClosed = function _RecorderController_onExtensionViewClosed() {
        this.viewDescriptor = undefined;
    };
    _RecorderController_getShortcutsInfo = function _RecorderController_getShortcutsInfo() {
        const getBindingForAction = (action) => {
            const shortcuts = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ShortcutRegistry.ShortcutRegistry.instance().shortcutsForAction(action);
            return shortcuts.map(shortcut => shortcut.title());
        };
        return [
            {
                title: i18nString(UIStrings.startStopRecording),
                bindings: getBindingForAction(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_20__.RecorderActions.StartRecording),
            },
            {
                title: i18nString(UIStrings.replayRecording),
                bindings: getBindingForAction(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_20__.RecorderActions.ReplayRecording),
            },
            { title: i18nString(UIStrings.copyShortcut), bindings: [`${_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isMac() ? '⌘ C' : 'Ctrl+C'}`] },
            { title: i18nString(UIStrings.toggleCode), bindings: getBindingForAction(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_20__.RecorderActions.ToggleCodeView) },
        ];
    };
    _RecorderController_renderCurrentPage = function _RecorderController_renderCurrentPage() {
        switch (this.currentPage) {
            case Pages.StartPage:
                return __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_renderStartPage).call(this);
            case Pages.AllRecordingsPage:
                return __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_renderAllRecordingsPage).call(this);
            case Pages.RecordingPage:
                return __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_renderRecordingPage).call(this);
            case Pages.CreateRecordingPage:
                return __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_renderCreateRecordingPage).call(this);
        }
    };
    _RecorderController_renderAllRecordingsPage = function _RecorderController_renderAllRecordingsPage() {
        const recordings = __classPrivateFieldGet(this, _RecorderController_storage, "f").getRecordings();
        // clang-format off
        return html `
      <${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingListView.RecordingListView.litTagName}
        .recordings=${recordings.map(recording => ({
            storageName: recording.storageName,
            name: recording.flow.title,
        }))}
        .replayAllowed=${__classPrivateFieldGet(this, _RecorderController_replayAllowed, "f")}
        @createrecording=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onCreateNewRecording)}
        @deleterecording=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onDeleteRecording)}
        @openrecording=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onRecordingSelected)}
        @playrecording=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onPlayRecordingByName)}
        >
      </${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingListView.RecordingListView.litTagName}>
    `;
        // clang-format on
    };
    _RecorderController_renderStartPage = function _RecorderController_renderStartPage() {
        // clang-format off
        return html `
      <${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.StartView.StartView.litTagName}
        @createrecording=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onCreateNewRecording)}
      ></${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.StartView.StartView.litTagName}>
    `;
        // clang-format on
    };
    _RecorderController_renderRecordingPage = function _RecorderController_renderRecordingPage() {
        // clang-format off
        return html `
      <${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.RecordingView.litTagName}
        .data=${{
            recording: this.currentRecording?.flow,
            replayState: __classPrivateFieldGet(this, _RecorderController_replayState, "f"),
            isRecording: this.isRecording,
            recordingTogglingInProgress: this.isToggling,
            currentStep: this.currentStep,
            currentError: this.recordingError,
            sections: this.sections,
            settings: this.settings,
            recorderSettings: __classPrivateFieldGet(this, _RecorderController_recorderSettings, "f"),
            lastReplayResult: this.lastReplayResult,
            replayAllowed: __classPrivateFieldGet(this, _RecorderController_replayAllowed, "f"),
            breakpointIndexes: __classPrivateFieldGet(this, _RecorderController_stepBreakpointIndexes, "f"),
            builtInConverters: __classPrivateFieldGet(this, _RecorderController_builtInConverters, "f"),
            extensionConverters: this.extensionConverters,
            replayExtensions: this.replayExtensions,
            extensionDescriptor: this.viewDescriptor,
        }}
        @networkconditionschanged=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onNetworkConditionsChanged)}
        @timeoutchanged=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onTimeoutChanged)}
        @requestselectorattribute=${(event) => {
            event.send(this.currentRecording?.flow.selectorAttribute);
        }}
        @recordingfinished=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onRecordingFinished)}
        @stepchanged=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_handleRecordingChanged).bind(this)}
        @recordingtitlechanged=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_handleRecordingTitleChanged).bind(this)}
        @addstep=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_handleStepAdded).bind(this)}
        @removestep=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_handleStepRemoved).bind(this)}
        @addbreakpoint=${__classPrivateFieldGet(this, _RecorderController_onAddBreakpoint, "f")}
        @removebreakpoint=${__classPrivateFieldGet(this, _RecorderController_onRemoveBreakpoint, "f")}
        @playrecording=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onPlayRecording)}
        @abortreplay=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onAbortReplay)}
        @recorderextensionviewclosed=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onExtensionViewClosed)}
        @addassertion=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_handleAddAssertionEvent)}
      ></${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.RecordingView.litTagName}>
    `;
        // clang-format on
    };
    _RecorderController_renderCreateRecordingPage = function _RecorderController_renderCreateRecordingPage() {
        // clang-format off
        return html `
      <${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.CreateRecordingView.CreateRecordingView.litTagName}
        .data=${{
            recorderSettings: __classPrivateFieldGet(this, _RecorderController_recorderSettings, "f"),
        }}
        @recordingstarted=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onRecordingStarted)}
        @recordingcancelled=${__classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_onRecordingCancelled)}
      ></${_components_components_js__WEBPACK_IMPORTED_MODULE_16__.CreateRecordingView.CreateRecordingView.litTagName}>
    `;
        // clang-format on
    };
    _RecorderController_onExportRecording = function _RecorderController_onExportRecording(event) {
        event.stopPropagation();
        __classPrivateFieldGet(this, _RecorderController_instances, "m", _RecorderController_clearError).call(this);
        this.exportMenuExpanded = !this.exportMenuExpanded;
    };
    _RecorderController_onExportMenuClosed = function _RecorderController_onExportMenuClosed() {
        this.exportMenuExpanded = false;
    };
    __setFunctionName(_classThis, "RecorderController");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RecorderController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    Object.defineProperty(_classThis, "styles", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './recorderController.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]
    });
    (() => {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RecorderController = _classThis;
})();



/***/ }),

/***/ "./src/panels/recorder/RecorderEvents.ts":
/*!***********************************************!*\
  !*** ./src/panels/recorder/RecorderEvents.ts ***!
  \***********************************************/
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
    constructor() {
        super(ReplayFinishedEvent.eventName, { bubbles: true, composed: true });
    }
}
Object.defineProperty(ReplayFinishedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'replayfinished'
});
class RecordingStateChangedEvent extends Event {
    constructor(recording) {
        super(RecordingStateChangedEvent.eventName, {
            bubbles: true,
            composed: true,
        });
        Object.defineProperty(this, "recording", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: recording
        });
    }
}
Object.defineProperty(RecordingStateChangedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'recordingstatechanged'
});


/***/ }),

/***/ "./src/services/tracing/PerformanceTracing.ts":
/*!****************************************************!*\
  !*** ./src/services/tracing/PerformanceTracing.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerformanceTracing: () => (/* binding */ PerformanceTracing),
/* harmony export */   RawTraceEvents: () => (/* binding */ RawTraceEvents)
/* harmony export */ });
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./src/models/trace/trace.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _PerformanceTracing_traceEvents, _PerformanceTracing_tracingManager, _PerformanceTracing_delegate;

class PerformanceTracing {
    constructor(target, delegate) {
        _PerformanceTracing_traceEvents.set(this, []);
        _PerformanceTracing_tracingManager.set(this, null);
        _PerformanceTracing_delegate.set(this, void 0);
        __classPrivateFieldSet(this, _PerformanceTracing_tracingManager, target.model(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.TracingManager.TracingManager), "f");
        __classPrivateFieldSet(this, _PerformanceTracing_delegate, delegate, "f");
    }
    async start() {
        __classPrivateFieldGet(this, _PerformanceTracing_traceEvents, "f").length = 0;
        if (!__classPrivateFieldGet(this, _PerformanceTracing_tracingManager, "f")) {
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
        const started = await __classPrivateFieldGet(this, _PerformanceTracing_tracingManager, "f").start(this, categories, '');
        if (!started) {
            throw new Error('Unable to start tracing.');
        }
    }
    async stop() {
        return __classPrivateFieldGet(this, _PerformanceTracing_tracingManager, "f")?.stop();
    }
    // Start of implementation of SDK.TracingManager.TracingManagerClient
    getTraceEvents() {
        return __classPrivateFieldGet(this, _PerformanceTracing_traceEvents, "f");
    }
    traceEventsCollected(events) {
        __classPrivateFieldGet(this, _PerformanceTracing_traceEvents, "f").push(...events);
    }
    tracingBufferUsage(usage) {
        __classPrivateFieldGet(this, _PerformanceTracing_delegate, "f").tracingBufferUsage(usage);
    }
    eventsRetrievalProgress(progress) {
        __classPrivateFieldGet(this, _PerformanceTracing_delegate, "f").eventsRetrievalProgress(progress);
    }
    tracingComplete() {
        __classPrivateFieldGet(this, _PerformanceTracing_delegate, "f").tracingComplete(__classPrivateFieldGet(this, _PerformanceTracing_traceEvents, "f"));
    }
}
_PerformanceTracing_traceEvents = new WeakMap(), _PerformanceTracing_tracingManager = new WeakMap(), _PerformanceTracing_delegate = new WeakMap();
// Used by an implementation of Common.Revealer to transfer data from the recorder to the performance panel.
class RawTraceEvents {
    constructor(events) {
        Object.defineProperty(this, "events", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: events
        });
    }
    getEvents() {
        return this.events;
    }
}


/***/ }),

/***/ "./src/services/tracing/tracing.ts":
/*!*****************************************!*\
  !*** ./src/services/tracing/tracing.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerformanceTracing: () => (/* reexport module object */ _PerformanceTracing_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _PerformanceTracing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PerformanceTracing.js */ "./src/services/tracing/PerformanceTracing.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);