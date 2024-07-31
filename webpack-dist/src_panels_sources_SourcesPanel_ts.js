"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_SourcesPanel_ts"],{

/***/ "./src/panels/sources/DebuggerPlugin.ts":
/*!**********************************************!*\
  !*** ./src/panels/sources/DebuggerPlugin.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointLocationRevealer: () => (/* binding */ BreakpointLocationRevealer),
/* harmony export */   DebuggerPlugin: () => (/* binding */ DebuggerPlugin),
/* harmony export */   computePopoverHighlightRange: () => (/* binding */ computePopoverHighlightRange),
/* harmony export */   computeScopeMappings: () => (/* binding */ computeScopeMappings),
/* harmony export */   getVariableNamesByLine: () => (/* binding */ getVariableNamesByLine),
/* harmony export */   getVariableValuesByLine: () => (/* binding */ getVariableValuesByLine)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/breakpoints/breakpoints.js */ "./src/models/breakpoints/breakpoints.ts");
/* harmony import */ var _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/formatter/formatter.js */ "./src/models/formatter/formatter.ts");
/* harmony import */ var _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/source_map_scopes/source_map_scopes.js */ "./src/models/source_map_scopes/source_map_scopes.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/components/text_editor/text_editor.js */ "./src/ui/components/text_editor/text_editor.ts");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./src/ui/legacy/components/object_ui/object_ui.ts");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _AddSourceMapURLDialog_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./AddSourceMapURLDialog.js */ "./src/panels/sources/AddSourceMapURLDialog.ts");
/* harmony import */ var _BreakpointEditDialog_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./BreakpointEditDialog.js */ "./src/panels/sources/BreakpointEditDialog.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/sources/components/components.ts");
/* harmony import */ var _Plugin_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Plugin.js */ "./src/panels/sources/Plugin.ts");
/* harmony import */ var _SourcesPanel_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SourcesPanel.js */ "./src/panels/sources/SourcesPanel.ts");
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
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
var _DebuggerPlugin_instances, _DebuggerPlugin_activeBreakpointEditRequest, _DebuggerPlugin_scheduledFinishingActiveDialog, _DebuggerPlugin_sourcesPanelDebuggedMetricsRecorded, _DebuggerPlugin_openEditDialogForLine, _DebuggerPlugin_rawLocationToEditorOffset, _DebuggerPlugin_recordSourcesPanelDebuggedMetrics, _BreakpointGutterMarker_position;
























const { EMPTY_BREAKPOINT_CONDITION, NEVER_PAUSE_HERE_CONDITION } = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__.BreakpointManager;
const UIStrings = {
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */
    thisScriptIsOnTheDebuggersIgnore: 'This script is on the debugger\'s ignore list',
    /**
     *@description Text to stop preventing the debugger from stepping into library code
     */
    removeFromIgnoreList: 'Remove from ignore list',
    /**
     *@description Text of a button in the Sources panel Debugger Plugin to configure ignore listing in Settings
     */
    configure: 'Configure',
    /**
     *@description Text to add a breakpoint
     */
    addBreakpoint: 'Add breakpoint',
    /**
     *@description A context menu item in the Debugger Plugin of the Sources panel
     */
    addConditionalBreakpoint: 'Add conditional breakpoint…',
    /**
     *@description A context menu item in the Debugger Plugin of the Sources panel
     */
    addLogpoint: 'Add logpoint…',
    /**
     *@description A context menu item in the Debugger Plugin of the Sources panel
     */
    neverPauseHere: 'Never pause here',
    /**
     *@description Context menu command to delete/remove a breakpoint that the user
     *has set. One line of code can have multiple breakpoints. Always >= 1 breakpoint.
     */
    removeBreakpoint: '{n, plural, =1 {Remove breakpoint} other {Remove all breakpoints in line}}',
    /**
     *@description A context menu item in the Debugger Plugin of the Sources panel
     */
    editBreakpoint: 'Edit breakpoint…',
    /**
     *@description Context menu command to disable (but not delete) a breakpoint
     *that the user has set. One line of code can have multiple breakpoints. Always
     *>= 1 breakpoint.
     */
    disableBreakpoint: '{n, plural, =1 {Disable breakpoint} other {Disable all breakpoints in line}}',
    /**
     *@description Context menu command to enable a breakpoint that the user has
     *set. One line of code can have multiple breakpoints. Always >= 1 breakpoint.
     */
    enableBreakpoint: '{n, plural, =1 {Enable breakpoint} other {Enable all breakpoints in line}}',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */
    addSourceMap: 'Add source map…',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */
    addWasmDebugInfo: 'Add DWARF debug info…',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */
    sourceMapLoaded: 'Source map loaded.',
    /**
     *@description Title of the Filtered List WidgetProvider of Quick Open
     *@example {Ctrl+P Ctrl+O} PH1
     */
    associatedFilesAreAvailable: 'Associated files are available via file tree or {PH1}.',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */
    associatedFilesShouldBeAdded: 'Associated files should be added to the file tree. You can debug these resolved source files as regular JavaScript files.',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */
    theDebuggerWillSkipStepping: 'The debugger will skip stepping through this script, and will not stop on exceptions.',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */
    sourceMapSkipped: 'Source map skipped for this file.',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */
    sourceMapFailed: 'Source map failed to load.',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */
    debuggingPowerReduced: 'DevTools can\'t show authored sources, but you can debug the deployed code.',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */
    reloadForSourceMap: 'To enable again, make sure the file isn\'t on the ignore list and reload.',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     *@example {http://site.com/lib.js.map} PH1
     *@example {HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME} PH2
     */
    errorLoading: 'Error loading url {PH1}: {PH2}',
    /**
     *@description Error message that is displayed in UI when a file needed for debugging information for a call frame is missing
     *@example {src/myapp.debug.wasm.dwp} PH1
     */
    debugFileNotFound: 'Failed to load debug file "{PH1}".',
    /**
     *@description Error message that is displayed when no debug info could be loaded
     *@example {app.wasm} PH1
     */
    debugInfoNotFound: 'Failed to load any debug info for {PH1}.',
    /**
     *@description Text of a button to open up details on a request when no debug info could be loaded
     */
    showRequest: 'Show request',
    /**
     *@description Tooltip text that shows on hovering over a button to see more details on a request
     */
    openDeveloperResources: 'Opens the request in the Developer resource panel',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/DebuggerPlugin.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
// Note: Line numbers are passed around as zero-based numbers (though
// CodeMirror numbers them from 1).
// Don't scan for possible breakpoints on a line beyond this position;
const MAX_POSSIBLE_BREAKPOINT_LINE = 2500;
// Limits on inline variable view computation.
const MAX_CODE_SIZE_FOR_VALUE_DECORATIONS = 10000;
const MAX_PROPERTIES_IN_SCOPE_FOR_VALUE_DECORATIONS = 500;
const debuggerPluginForUISourceCode = new Map();
class DebuggerPlugin extends _Plugin_js__WEBPACK_IMPORTED_MODULE_22__.Plugin {
    constructor(uiSourceCode, transformer) {
        super(uiSourceCode);
        _DebuggerPlugin_instances.add(this);
        Object.defineProperty(this, "transformer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: transformer
        });
        Object.defineProperty(this, "editor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        // Set if the debugger is stopped on a breakpoint in this file
        Object.defineProperty(this, "executionLocation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        // Track state of the control key because holding it makes debugger
        // target locations show up in the editor
        Object.defineProperty(this, "controlDown", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "controlTimeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        Object.defineProperty(this, "sourceMapInfobar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "scriptsPanel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "breakpointManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // Manages pop-overs shown when the debugger is active and the user
        // hovers over an expression
        Object.defineProperty(this, "popoverHelper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "scriptFileForDebuggerModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // The current set of breakpoints for this file. The locations in
        // here are kept in sync with their editor position. When a file's
        // content is edited and later saved, these are used as a source of
        // truth for re-creating the breakpoints.
        Object.defineProperty(this, "breakpoints", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "continueToLocations", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "liveLocationPool", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // When the editor content is changed by the user, this becomes
        // true. When the plugin is muted, breakpoints show up as disabled
        // and can't be manipulated. It is cleared again when the content is
        // saved.
        Object.defineProperty(this, "muted", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // If the plugin is initialized in muted state, we cannot correlated
        // breakpoint position in the breakpoint manager with editor
        // locations, so breakpoint manipulation is permanently disabled.
        Object.defineProperty(this, "initializedMuted", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ignoreListInfobar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "refreshBreakpointsTimeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        Object.defineProperty(this, "activeBreakpointDialog", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        _DebuggerPlugin_activeBreakpointEditRequest.set(this, undefined);
        _DebuggerPlugin_scheduledFinishingActiveDialog.set(this, false);
        Object.defineProperty(this, "missingDebugInfoBar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        _DebuggerPlugin_sourcesPanelDebuggedMetricsRecorded.set(this, false);
        Object.defineProperty(this, "loader", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ignoreListCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        debuggerPluginForUISourceCode.set(uiSourceCode, this);
        this.scriptsPanel = _SourcesPanel_js__WEBPACK_IMPORTED_MODULE_23__.SourcesPanel.instance();
        this.breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__.BreakpointManager.BreakpointManager.instance();
        this.breakpointManager.addEventListener(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__.BreakpointManager.Events.BreakpointAdded, this.breakpointChange, this);
        this.breakpointManager.addEventListener(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__.BreakpointManager.Events.BreakpointRemoved, this.breakpointChange, this);
        this.uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_11__.UISourceCode.Events.WorkingCopyChanged, this.workingCopyChanged, this);
        this.uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_11__.UISourceCode.Events.WorkingCopyCommitted, this.workingCopyCommitted, this);
        this.scriptFileForDebuggerModel = new Map();
        this.loader = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PageResourceLoader.PageResourceLoader.instance();
        this.loader.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PageResourceLoader.Events.Update, this.showSourceMapInfobarIfNeeded.bind(this), this);
        this.ignoreListCallback = this.showIgnoreListInfobarIfNeeded.bind(this);
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance().addChangeListener(this.ignoreListCallback);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame, this.callFrameChanged, this);
        this.liveLocationPool = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.LiveLocation.LiveLocationPool();
        this.updateScriptFiles();
        this.muted = this.uiSourceCode.isDirty();
        this.initializedMuted = this.muted;
        this.ignoreListInfobar = null;
        this.showIgnoreListInfobarIfNeeded();
        for (const scriptFile of this.scriptFileForDebuggerModel.values()) {
            scriptFile.checkMapping();
        }
    }
    editorExtension() {
        // Kludge to hook editor keyboard events into the ShortcutRegistry
        // system.
        const handlers = this.shortcutHandlers();
        return [
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.EditorView.updateListener.of(update => this.onEditorUpdate(update)),
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.EditorView.domEventHandlers({
                keydown: event => {
                    if (this.onKeyDown(event)) {
                        return true;
                    }
                    handlers(event);
                    return event.defaultPrevented;
                },
                keyup: event => this.onKeyUp(event),
                mousemove: event => this.onMouseMove(event),
                mousedown: event => this.onMouseDown(event),
                focusout: event => this.onBlur(event),
                wheel: event => this.onWheel(event),
            }),
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.lineNumbers({
                domEventHandlers: {
                    click: (view, block, event) => this.handleGutterClick(view.state.doc.lineAt(block.from), event),
                },
            }),
            infobarState,
            breakpointMarkers,
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_14__.ExecutionPositionHighlighter.positionHighlighter('cm-executionLine', 'cm-executionToken'),
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Prec.lowest(continueToMarkers.field),
            markIfContinueTo,
            valueDecorations.field,
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Prec.lowest(evalExpression.field),
            theme,
            this.uiSourceCode.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_11__.Workspace.projectTypes.Debugger ?
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.EditorView.editorAttributes.of({ class: 'source-frame-debugger-script' }) :
                [],
        ];
    }
    shortcutHandlers() {
        const selectionLine = (editor) => {
            return editor.state.doc.lineAt(editor.state.selection.main.head);
        };
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.ShortcutRegistry.ShortcutRegistry.instance().getShortcutListener({
            'debugger.toggle-breakpoint': async () => {
                if (this.muted || !this.editor) {
                    return false;
                }
                await this.toggleBreakpoint(selectionLine(this.editor), false);
                return true;
            },
            'debugger.toggle-breakpoint-enabled': async () => {
                if (this.muted || !this.editor) {
                    return false;
                }
                await this.toggleBreakpoint(selectionLine(this.editor), true);
                return true;
            },
            'debugger.breakpoint-input-window': async () => {
                if (this.muted || !this.editor) {
                    return false;
                }
                const line = selectionLine(this.editor);
                __classPrivateFieldGet(this, _DebuggerPlugin_instances, "m", _DebuggerPlugin_openEditDialogForLine).call(this, line);
                return true;
            },
        });
    }
    editorInitialized(editor) {
        // Start asynchronous actions that require access to the editor
        // instance
        this.editor = editor;
        computeNonBreakableLines(editor.state, this.transformer, this.uiSourceCode).then(linePositions => {
            if (linePositions.length) {
                editor.dispatch({ effects: _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_16__.SourceFrame.addNonBreakableLines.of(linePositions) });
            }
        }, console.error);
        if (this.ignoreListInfobar) {
            this.attachInfobar(this.ignoreListInfobar);
        }
        if (this.missingDebugInfoBar) {
            this.attachInfobar(this.missingDebugInfoBar);
        }
        if (this.sourceMapInfobar) {
            this.attachInfobar(this.sourceMapInfobar);
        }
        if (!this.muted) {
            void this.refreshBreakpoints();
        }
        void this.callFrameChanged();
        this.popoverHelper?.dispose();
        this.popoverHelper =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.PopoverHelper.PopoverHelper(editor, this.getPopoverRequest.bind(this), 'sources.object-properties');
        this.popoverHelper.setDisableOnClick(true);
        this.popoverHelper.setTimeout(250, 250);
        this.popoverHelper.setHasPadding(true);
    }
    static accepts(uiSourceCode) {
        return uiSourceCode.contentType().hasScripts();
    }
    showIgnoreListInfobarIfNeeded() {
        const uiSourceCode = this.uiSourceCode;
        if (!uiSourceCode.contentType().hasScripts()) {
            return;
        }
        if (!_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode)) {
            this.hideIgnoreListInfobar();
            return;
        }
        if (this.ignoreListInfobar) {
            this.ignoreListInfobar.dispose();
        }
        function unIgnoreList() {
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance().unIgnoreListUISourceCode(uiSourceCode);
        }
        const infobar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Infobar.Infobar(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Infobar.Type.Warning, i18nString(UIStrings.thisScriptIsOnTheDebuggersIgnore), [
            {
                text: i18nString(UIStrings.removeFromIgnoreList),
                highlight: false,
                delegate: unIgnoreList,
                dismiss: true,
                jslogContext: 'remove-from-ignore-list',
            },
            {
                text: i18nString(UIStrings.configure),
                highlight: false,
                delegate: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.ViewManager.ViewManager.instance().showView.bind(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.ViewManager.ViewManager.instance(), 'blackbox'),
                dismiss: false,
                jslogContext: 'configure',
            },
        ], undefined, undefined, 'script-on-ignore-list');
        this.ignoreListInfobar = infobar;
        infobar.setCloseCallback(() => this.removeInfobar(this.ignoreListInfobar));
        infobar.createDetailsRowMessage(i18nString(UIStrings.theDebuggerWillSkipStepping));
        this.attachInfobar(this.ignoreListInfobar);
    }
    attachInfobar(bar) {
        if (this.editor) {
            this.editor.dispatch({ effects: addInfobar.of(bar) });
        }
    }
    removeInfobar(bar) {
        if (this.editor && bar) {
            this.editor.dispatch({ effects: removeInfobar.of(bar) });
        }
    }
    hideIgnoreListInfobar() {
        if (!this.ignoreListInfobar) {
            return;
        }
        this.ignoreListInfobar.dispose();
        this.ignoreListInfobar = null;
    }
    willHide() {
        this.popoverHelper?.hidePopover();
    }
    editBreakpointLocation({ breakpoint, uiLocation }) {
        const { lineNumber } = this.transformer.uiLocationToEditorLocation(uiLocation.lineNumber, uiLocation.columnNumber);
        const line = this.editor?.state.doc.line(lineNumber + 1);
        if (!line) {
            return;
        }
        this.editBreakpointCondition({ line, breakpoint, location: null, isLogpoint: breakpoint.isLogpoint() });
    }
    populateLineGutterContextMenu(contextMenu, editorLineNumber) {
        const uiLocation = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_11__.UISourceCode.UILocation(this.uiSourceCode, editorLineNumber, 0);
        this.scriptsPanel.appendUILocationItems(contextMenu, uiLocation);
        if (this.muted || !this.editor) {
            return;
        }
        const line = this.editor.state.doc.line(editorLineNumber + 1);
        const breakpoints = this.lineBreakpoints(line);
        const supportsConditionalBreakpoints = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().supportsConditionalBreakpoints(this.uiSourceCode);
        if (!breakpoints.length) {
            if (this.editor && _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_16__.SourceFrame.isBreakableLine(this.editor.state, line)) {
                contextMenu.debugSection().appendItem(i18nString(UIStrings.addBreakpoint), this.createNewBreakpoint.bind(this, line, EMPTY_BREAKPOINT_CONDITION, /* enabled */ true, /* isLogpoint */ false), { jslogContext: 'add-breakpoint' });
                if (supportsConditionalBreakpoints) {
                    contextMenu.debugSection().appendItem(i18nString(UIStrings.addConditionalBreakpoint), () => {
                        this.editBreakpointCondition({ line, breakpoint: null, location: null, isLogpoint: false });
                    }, { jslogContext: 'add-cnd-breakpoint' });
                    contextMenu.debugSection().appendItem(i18nString(UIStrings.addLogpoint), () => {
                        this.editBreakpointCondition({ line, breakpoint: null, location: null, isLogpoint: true });
                    }, { jslogContext: 'add-logpoint' });
                    contextMenu.debugSection().appendItem(i18nString(UIStrings.neverPauseHere), this.createNewBreakpoint.bind(this, line, NEVER_PAUSE_HERE_CONDITION, /* enabled */ true, /* isLogpoint */ false), { jslogContext: 'never-pause-here' });
                }
            }
        }
        else {
            const removeTitle = i18nString(UIStrings.removeBreakpoint, { n: breakpoints.length });
            contextMenu.debugSection().appendItem(removeTitle, () => breakpoints.forEach(breakpoint => {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointRemovedFromGutterContextMenu);
                void breakpoint.remove(false);
            }), { jslogContext: 'remove-breakpoint' });
            if (breakpoints.length === 1 && supportsConditionalBreakpoints) {
                // Editing breakpoints only make sense for conditional breakpoints
                // and logpoints and both are currently only available for JavaScript
                // debugging.
                contextMenu.debugSection().appendItem(i18nString(UIStrings.editBreakpoint), () => {
                    this.editBreakpointCondition({ line, breakpoint: breakpoints[0], location: null });
                }, { jslogContext: 'edit-breakpoint' });
            }
            const hasEnabled = breakpoints.some(breakpoint => breakpoint.enabled());
            if (hasEnabled) {
                const title = i18nString(UIStrings.disableBreakpoint, { n: breakpoints.length });
                contextMenu.debugSection().appendItem(title, () => breakpoints.forEach(breakpoint => breakpoint.setEnabled(false)), { jslogContext: 'enable-breakpoint' });
            }
            const hasDisabled = breakpoints.some(breakpoint => !breakpoint.enabled());
            if (hasDisabled) {
                const title = i18nString(UIStrings.enableBreakpoint, { n: breakpoints.length });
                contextMenu.debugSection().appendItem(title, () => breakpoints.forEach(breakpoint => breakpoint.setEnabled(true)), { jslogContext: 'disable-breakpoint' });
            }
        }
    }
    populateTextAreaContextMenu(contextMenu) {
        function addSourceMapURL(scriptFile) {
            const dialog = _AddSourceMapURLDialog_js__WEBPACK_IMPORTED_MODULE_19__.AddDebugInfoURLDialog.createAddSourceMapURLDialog(addSourceMapURLDialogCallback.bind(null, scriptFile));
            dialog.show();
        }
        function addSourceMapURLDialogCallback(scriptFile, url) {
            if (!url) {
                return;
            }
            scriptFile.addSourceMapURL(url);
        }
        function addDebugInfoURL(scriptFile) {
            const dialog = _AddSourceMapURLDialog_js__WEBPACK_IMPORTED_MODULE_19__.AddDebugInfoURLDialog.createAddDWARFSymbolsURLDialog(addDebugInfoURLDialogCallback.bind(null, scriptFile));
            dialog.show();
        }
        function addDebugInfoURLDialogCallback(scriptFile, url) {
            if (!url) {
                return;
            }
            scriptFile.addDebugInfoURL(url);
        }
        if (this.uiSourceCode.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_11__.Workspace.projectTypes.Network &&
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('js-source-maps-enabled').get() &&
            !_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance().isUserIgnoreListedURL(this.uiSourceCode.url())) {
            if (this.scriptFileForDebuggerModel.size) {
                const scriptFile = this.scriptFileForDebuggerModel.values().next().value;
                const addSourceMapURLLabel = i18nString(UIStrings.addSourceMap);
                contextMenu.debugSection().appendItem(addSourceMapURLLabel, addSourceMapURL.bind(null, scriptFile), { jslogContext: 'add-source-map' });
                if (scriptFile.script?.isWasm() &&
                    !_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().pluginManager.hasPluginForScript(scriptFile.script)) {
                    contextMenu.debugSection().appendItem(i18nString(UIStrings.addWasmDebugInfo), addDebugInfoURL.bind(null, scriptFile), { jslogContext: 'add-wasm-debug-info' });
                }
            }
        }
    }
    workingCopyChanged() {
        if (!this.scriptFileForDebuggerModel.size) {
            this.setMuted(this.uiSourceCode.isDirty());
        }
    }
    workingCopyCommitted() {
        this.scriptsPanel.updateLastModificationTime();
        if (!this.scriptFileForDebuggerModel.size) {
            this.setMuted(false);
        }
    }
    didMergeToVM() {
        if (this.consistentScripts()) {
            this.setMuted(false);
        }
    }
    didDivergeFromVM() {
        this.setMuted(true);
    }
    setMuted(value) {
        if (this.initializedMuted) {
            return;
        }
        if (value !== this.muted) {
            this.muted = value;
            if (!value) {
                void this.restoreBreakpointsAfterEditing();
            }
            else if (this.editor) {
                this.editor.dispatch({ effects: muteBreakpoints.of(null) });
            }
        }
    }
    consistentScripts() {
        for (const scriptFile of this.scriptFileForDebuggerModel.values()) {
            if (scriptFile.hasDivergedFromVM() || scriptFile.isMergingToVM()) {
                return false;
            }
        }
        return true;
    }
    isVariableIdentifier(tokenType) {
        return tokenType === 'VariableName' || tokenType === 'VariableDefinition';
    }
    isIdentifier(tokenType) {
        return tokenType === 'VariableName' || tokenType === 'VariableDefinition' || tokenType === 'PropertyName' ||
            tokenType === 'PropertyDefinition';
    }
    getPopoverRequest(event) {
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event)) {
            return null;
        }
        const target = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Target);
        const debuggerModel = target ? target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel) : null;
        const { editor } = this;
        if (!debuggerModel || !debuggerModel.isPaused() || !editor) {
            return null;
        }
        const selectedCallFrame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame);
        if (!selectedCallFrame) {
            return null;
        }
        let textPosition = editor.editor.posAtCoords(event);
        if (!textPosition) {
            return null;
        }
        const positionCoords = editor.editor.coordsAtPos(textPosition);
        if (!positionCoords || event.clientY < positionCoords.top || event.clientY > positionCoords.bottom ||
            event.clientX < positionCoords.left - 30 || event.clientX > positionCoords.right + 30) {
            return null;
        }
        if (event.clientX < positionCoords.left && textPosition > editor.state.doc.lineAt(textPosition).from) {
            textPosition -= 1;
        }
        const highlightRange = computePopoverHighlightRange(editor.state, this.uiSourceCode.mimeType(), textPosition);
        if (!highlightRange) {
            return null;
        }
        const highlightLine = editor.state.doc.lineAt(highlightRange.from);
        if (highlightRange.to > highlightLine.to) {
            return null;
        }
        const leftCorner = editor.editor.coordsAtPos(highlightRange.from);
        const rightCorner = editor.editor.coordsAtPos(highlightRange.to);
        if (!leftCorner || !rightCorner) {
            return null;
        }
        const box = new AnchorBox(leftCorner.left, leftCorner.top - 2, rightCorner.right - leftCorner.left, rightCorner.bottom - leftCorner.top);
        const evaluationText = editor.state.sliceDoc(highlightRange.from, highlightRange.to);
        let objectPopoverHelper = null;
        return {
            box,
            show: async (popover) => {
                let resolvedText = '';
                if (selectedCallFrame.script.isJavaScript()) {
                    const nameMap = await _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_9__.NamesResolver.allVariablesInCallFrame(selectedCallFrame);
                    try {
                        resolvedText =
                            await _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_8__.FormatterWorkerPool.formatterWorkerPool().javaScriptSubstitute(evaluationText, nameMap);
                    }
                    catch {
                    }
                }
                // We use side-effect free debug-evaluate when the highlighted expression contains a
                // function/method call. Otherwise we allow side-effects. The motiviation here are
                // frameworks like Vue, that heavily use proxies for caching:
                //
                //   * We deem a simple property access of a proxy as deterministic so it should be
                //     successful even if V8 thinks its side-effecting.
                //   * Explicit function calls on the other hand must be side-effect free. The canonical
                //     example is hovering over {Math.random()} which would result in a different value
                //     each time the user hovers over it.
                const throwOnSideEffect = highlightRange.containsSideEffects;
                const result = await selectedCallFrame.evaluate({
                    expression: resolvedText || evaluationText,
                    objectGroup: 'popover',
                    includeCommandLineAPI: false,
                    silent: true,
                    returnByValue: false,
                    generatePreview: false,
                    throwOnSideEffect,
                    timeout: undefined,
                    disableBreaks: undefined,
                    replMode: undefined,
                    allowUnsafeEvalBlockedByCSP: undefined,
                });
                if (!result || 'error' in result || !result.object ||
                    (result.object.type === 'object' && result.object.subtype === 'error')) {
                    return false;
                }
                objectPopoverHelper =
                    await _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_15__.ObjectPopoverHelper.ObjectPopoverHelper.buildObjectPopover(result.object, popover);
                const potentiallyUpdatedCallFrame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame);
                if (!objectPopoverHelper || selectedCallFrame !== potentiallyUpdatedCallFrame) {
                    debuggerModel.runtimeModel().releaseObjectGroup('popover');
                    if (objectPopoverHelper) {
                        objectPopoverHelper.dispose();
                    }
                    return false;
                }
                const decoration = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration.set(evalExpressionMark.range(highlightRange.from, highlightRange.to));
                editor.dispatch({ effects: evalExpression.update.of(decoration) });
                return true;
            },
            hide: () => {
                if (objectPopoverHelper) {
                    objectPopoverHelper.dispose();
                }
                debuggerModel.runtimeModel().releaseObjectGroup('popover');
                editor.dispatch({ effects: evalExpression.update.of(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration.none) });
            },
        };
    }
    onEditorUpdate(update) {
        if (!update.changes.empty) {
            // If the document changed, adjust known breakpoint positions
            // for that change
            for (const breakpointDesc of this.breakpoints) {
                breakpointDesc.position = update.changes.mapPos(breakpointDesc.position);
            }
        }
    }
    onWheel(event) {
        if (this.executionLocation && _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event)) {
            event.preventDefault();
        }
    }
    onKeyDown(event) {
        const ctrlDown = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event);
        if (!ctrlDown) {
            this.setControlDown(false);
        }
        if (event.key === _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.ESCAPE_KEY) {
            if (this.popoverHelper && this.popoverHelper.isPopoverVisible()) {
                this.popoverHelper.hidePopover();
                event.consume();
                return true;
            }
        }
        if (ctrlDown && this.executionLocation) {
            this.setControlDown(true);
        }
        return false;
    }
    onMouseMove(event) {
        if (this.executionLocation && this.controlDown &&
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event)) {
            if (!this.continueToLocations) {
                void this.showContinueToLocations();
            }
        }
    }
    onMouseDown(event) {
        if (!this.executionLocation || !_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event)) {
            return;
        }
        if (!this.continueToLocations || !this.editor) {
            return;
        }
        event.consume();
        const textPosition = this.editor.editor.posAtCoords(event);
        if (textPosition === null) {
            return;
        }
        for (const { from, to, click } of this.continueToLocations) {
            if (from <= textPosition && to >= textPosition) {
                click();
                break;
            }
        }
    }
    onBlur(_event) {
        this.setControlDown(false);
    }
    onKeyUp(_event) {
        this.setControlDown(false);
    }
    setControlDown(state) {
        if (state !== this.controlDown) {
            this.controlDown = state;
            clearTimeout(this.controlTimeout);
            this.controlTimeout = undefined;
            if (state && this.executionLocation) {
                this.controlTimeout = window.setTimeout(() => {
                    if (this.executionLocation && this.controlDown) {
                        void this.showContinueToLocations();
                    }
                }, 150);
            }
            else {
                this.clearContinueToLocations();
            }
        }
    }
    editBreakpointCondition(breakpointEditRequest) {
        const { line, breakpoint, location, isLogpoint } = breakpointEditRequest;
        if (breakpoint?.isRemoved) {
            // This method can get called for stale breakpoints, e.g. via the revealer.
            // In that case we don't show the edit dialog as to not resurrect the breakpoint
            // unintentionally.
            return;
        }
        __classPrivateFieldSet(this, _DebuggerPlugin_scheduledFinishingActiveDialog, false, "f");
        const isRepeatedEditRequest = __classPrivateFieldGet(this, _DebuggerPlugin_activeBreakpointEditRequest, "f") &&
            isSameEditRequest(__classPrivateFieldGet(this, _DebuggerPlugin_activeBreakpointEditRequest, "f"), breakpointEditRequest);
        if (isRepeatedEditRequest) {
            // Do not re-show the same edit dialog, instead use the already open one.
            return;
        }
        if (this.activeBreakpointDialog) {
            // If this a request to edit a different dialog, make sure to close the current active one
            // to avoid showing two dialogs at the same time.
            this.activeBreakpointDialog.saveAndFinish();
        }
        const editor = this.editor;
        const oldCondition = breakpoint ? breakpoint.condition() : '';
        const isLogpointForDialog = breakpoint?.isLogpoint() ?? Boolean(isLogpoint);
        const decorationElement = document.createElement('div');
        const compartment = new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Compartment();
        const dialog = new _BreakpointEditDialog_js__WEBPACK_IMPORTED_MODULE_20__.BreakpointEditDialog(line.number - 1, oldCondition, isLogpointForDialog, async (result) => {
            this.activeBreakpointDialog = null;
            __classPrivateFieldSet(this, _DebuggerPlugin_activeBreakpointEditRequest, undefined, "f");
            dialog.detach();
            editor.dispatch({ effects: compartment.reconfigure([]) });
            if (!result.committed) {
                _components_components_js__WEBPACK_IMPORTED_MODULE_21__.BreakpointsView.BreakpointsSidebarController.instance().breakpointEditFinished(breakpoint, false);
                return;
            }
            _components_components_js__WEBPACK_IMPORTED_MODULE_21__.BreakpointsView.BreakpointsSidebarController.instance().breakpointEditFinished(breakpoint, oldCondition !== result.condition);
            if (breakpoint) {
                breakpoint.setCondition(result.condition, result.isLogpoint);
            }
            else if (location) {
                await this.setBreakpoint(location.lineNumber, location.columnNumber, result.condition, /* enabled */ true, result.isLogpoint);
            }
            else {
                await this.createNewBreakpoint(line, result.condition, /* enabled */ true, result.isLogpoint);
            }
        });
        editor.dispatch({
            effects: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.StateEffect.appendConfig.of(compartment.of(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.EditorView.decorations.of(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration.set([_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration
                    .widget({
                    block: true, widget: new class extends _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.WidgetType {
                        toDOM() {
                            return decorationElement;
                        }
                    }(),
                    side: 1,
                })
                    .range(line.to)])))),
        });
        dialog.element.addEventListener('blur', async (event) => {
            if (!event.relatedTarget ||
                (event.relatedTarget && !event.relatedTarget.isSelfOrDescendant(dialog.element))) {
                __classPrivateFieldSet(this, _DebuggerPlugin_scheduledFinishingActiveDialog, true, "f");
                // Debounce repeated clicks on opening the edit dialog. Wait for a short amount of time
                // in order to see whether we get a request to open the exact same dialog again.
                setTimeout(() => {
                    if (this.activeBreakpointDialog === dialog) {
                        if (__classPrivateFieldGet(this, _DebuggerPlugin_scheduledFinishingActiveDialog, "f")) {
                            dialog.saveAndFinish();
                            __classPrivateFieldSet(this, _DebuggerPlugin_scheduledFinishingActiveDialog, false, "f");
                        }
                        else {
                            dialog.focusEditor();
                        }
                    }
                }, 200);
            }
        }, true);
        dialog.markAsExternallyManaged();
        dialog.show(decorationElement);
        dialog.focusEditor();
        this.activeBreakpointDialog = dialog;
        __classPrivateFieldSet(this, _DebuggerPlugin_activeBreakpointEditRequest, breakpointEditRequest, "f");
        function isSameEditRequest(editA, editB) {
            if (editA.line.number !== editB.line.number) {
                return false;
            }
            if (editA.line.from !== editB.line.from) {
                return false;
            }
            if (editA.line.text !== editB.line.text) {
                return false;
            }
            if (editA.breakpoint !== editB.breakpoint) {
                return false;
            }
            if (editA.location !== editB.location) {
                return false;
            }
            return editA.isLogpoint === editB.isLogpoint;
        }
    }
    // Show widgets with variable's values after lines that mention the
    // variables, if the debugger is paused in this file.
    async updateValueDecorations() {
        if (!this.editor) {
            return;
        }
        const decorations = this.executionLocation ? await this.computeValueDecorations() : null;
        // After the `await` the DebuggerPlugin could have been disposed. Re-check `this.editor`.
        if (!this.editor) {
            return;
        }
        if (decorations || this.editor.state.field(valueDecorations.field).size) {
            this.editor.dispatch({ effects: valueDecorations.update.of(decorations || _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration.none) });
        }
    }
    async computeValueDecorations() {
        if (!this.editor) {
            return null;
        }
        if (!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('inline-variable-values').get()) {
            return null;
        }
        const executionContext = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.ExecutionContext);
        if (!executionContext) {
            return null;
        }
        const callFrame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame);
        if (!callFrame) {
            return null;
        }
        const url = this.uiSourceCode.url();
        const rawLocationToEditorOffset = location => __classPrivateFieldGet(this, _DebuggerPlugin_instances, "m", _DebuggerPlugin_rawLocationToEditorOffset).call(this, location, url);
        const functionOffsetPromise = __classPrivateFieldGet(this, _DebuggerPlugin_instances, "m", _DebuggerPlugin_rawLocationToEditorOffset).call(this, callFrame.functionLocation(), url);
        const executionOffsetPromise = __classPrivateFieldGet(this, _DebuggerPlugin_instances, "m", _DebuggerPlugin_rawLocationToEditorOffset).call(this, callFrame.location(), url);
        const [functionOffset, executionOffset] = await Promise.all([functionOffsetPromise, executionOffsetPromise]);
        if (!functionOffset || !executionOffset || !this.editor) {
            return null;
        }
        if (functionOffset >= executionOffset || executionOffset - functionOffset > MAX_CODE_SIZE_FOR_VALUE_DECORATIONS) {
            return null;
        }
        while (_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.syntaxParserRunning(this.editor.editor)) {
            await new Promise(resolve => window.requestIdleCallback(resolve));
            // After the `await` the DebuggerPlugin could have been disposed. Re-check `this.editor`.
            if (!this.editor) {
                return null;
            }
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.ensureSyntaxTree(this.editor.state, executionOffset, 16);
        }
        const variableNames = getVariableNamesByLine(this.editor.state, functionOffset, executionOffset, executionOffset);
        if (variableNames.length === 0) {
            return null;
        }
        const scopeMappings = await computeScopeMappings(callFrame, rawLocationToEditorOffset);
        // After the `await` the DebuggerPlugin could have been disposed. Re-check `this.editor`.
        if (!this.editor || scopeMappings.length === 0) {
            return null;
        }
        const variablesByLine = getVariableValuesByLine(scopeMappings, variableNames);
        if (!variablesByLine || !this.editor) {
            return null;
        }
        const decorations = [];
        for (const [line, names] of variablesByLine) {
            const prevLine = variablesByLine.get(line - 1);
            let newNames = prevLine ? Array.from(names).filter(n => prevLine.get(n[0]) !== n[1]) : Array.from(names);
            if (!newNames.length) {
                continue;
            }
            if (newNames.length > 10) {
                newNames = newNames.slice(0, 10);
            }
            decorations.push(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration.widget({ widget: new ValueDecoration(newNames), side: 1 })
                .range(this.editor.state.doc.line(line + 1).to));
        }
        return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration.set(decorations, true);
    }
    // Highlight the locations the debugger can continue to (when
    // Control is held)
    async showContinueToLocations() {
        this.popoverHelper?.hidePopover();
        const executionContext = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.ExecutionContext);
        if (!executionContext || !this.editor) {
            return;
        }
        const callFrame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame);
        if (!callFrame) {
            return;
        }
        const start = callFrame.functionLocation() || callFrame.location();
        const debuggerModel = callFrame.debuggerModel;
        const { state } = this.editor;
        const locations = await debuggerModel.getPossibleBreakpoints(start, null, true);
        this.continueToLocations = [];
        let previousCallLine = -1;
        for (const location of locations.reverse()) {
            const editorLocation = this.transformer.uiLocationToEditorLocation(location.lineNumber, location.columnNumber);
            if (previousCallLine === editorLocation.lineNumber &&
                location.type !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Debugger.BreakLocationType.Call ||
                editorLocation.lineNumber >= state.doc.lines) {
                continue;
            }
            const line = state.doc.line(editorLocation.lineNumber + 1);
            const position = Math.min(line.to, line.from + editorLocation.columnNumber);
            let syntaxNode = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.syntaxTree(state).resolveInner(position, 1);
            if (syntaxNode.firstChild || syntaxNode.from < line.from ||
                syntaxNode.to > line.to) { // Only use leaf nodes within the line
                continue;
            }
            if (syntaxNode.name === '.') {
                const nextNode = syntaxNode.resolve(syntaxNode.to, 1);
                if (nextNode.firstChild || nextNode.from < line.from || nextNode.to > line.to) {
                    continue;
                }
                syntaxNode = nextNode;
            }
            const syntaxType = syntaxNode.name;
            const validKeyword = syntaxType === 'this' || syntaxType === 'return' || syntaxType === 'new' ||
                syntaxType === 'break' || syntaxType === 'continue';
            if (!validKeyword && !this.isIdentifier(syntaxType)) {
                continue;
            }
            this.continueToLocations.push({ from: syntaxNode.from, to: syntaxNode.to, async: false, click: () => location.continueToLocation() });
            if (location.type === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Debugger.BreakLocationType.Call) {
                previousCallLine = editorLocation.lineNumber;
            }
            const identifierName = validKeyword ? '' : line.text.slice(syntaxNode.from - line.from, syntaxNode.to - line.from);
            let asyncCall = null;
            if (identifierName === 'then' && syntaxNode.parent?.name === 'MemberExpression') {
                asyncCall = syntaxNode.parent.parent;
            }
            else if (identifierName === 'setTimeout' || identifierName === 'setInterval' || identifierName === 'postMessage') {
                asyncCall = syntaxNode.parent;
            }
            if (syntaxType === 'new') {
                const callee = syntaxNode.parent?.getChild('Expression');
                if (callee && callee.name === 'VariableName' && state.sliceDoc(callee.from, callee.to) === 'Worker') {
                    asyncCall = syntaxNode.parent;
                }
            }
            if (asyncCall && (asyncCall.name === 'CallExpression' || asyncCall.name === 'NewExpression') &&
                location.type === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Debugger.BreakLocationType.Call) {
                const firstArg = asyncCall.getChild('ArgList')?.firstChild?.nextSibling;
                let highlightNode;
                if (firstArg?.name === 'VariableName') {
                    highlightNode = firstArg;
                }
                else if (firstArg?.name === 'ArrowFunction' || firstArg?.name === 'FunctionExpression') {
                    highlightNode = firstArg.firstChild;
                    if (highlightNode?.name === 'async') {
                        highlightNode = highlightNode.nextSibling;
                    }
                }
                if (highlightNode) {
                    const isCurrentPosition = this.executionLocation &&
                        location.lineNumber === this.executionLocation.lineNumber &&
                        location.columnNumber === this.executionLocation.columnNumber;
                    this.continueToLocations.push({
                        from: highlightNode.from,
                        to: highlightNode.to,
                        async: true,
                        click: () => this.asyncStepIn(location, Boolean(isCurrentPosition)),
                    });
                }
            }
        }
        const decorations = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration.set(this.continueToLocations.map(loc => {
            return (loc.async ? asyncContinueToMark : continueToMark).range(loc.from, loc.to);
        }), true);
        this.editor.dispatch({ effects: continueToMarkers.update.of(decorations) });
    }
    clearContinueToLocations() {
        if (this.editor && this.editor.state.field(continueToMarkers.field).size) {
            this.editor.dispatch({ effects: continueToMarkers.update.of(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration.none) });
        }
    }
    asyncStepIn(location, isCurrentPosition) {
        if (!isCurrentPosition) {
            location.continueToLocation(asyncStepIn);
        }
        else {
            asyncStepIn();
        }
        function asyncStepIn() {
            location.debuggerModel.scheduleStepIntoAsync();
        }
    }
    fetchBreakpoints() {
        if (!this.editor) {
            return [];
        }
        const { editor } = this;
        const breakpointLocations = this.breakpointManager.breakpointLocationsForUISourceCode(this.uiSourceCode);
        return breakpointLocations.map(({ uiLocation, breakpoint }) => {
            const editorLocation = this.transformer.uiLocationToEditorLocation(uiLocation.lineNumber, uiLocation.columnNumber);
            return {
                position: editor.toOffset(editorLocation),
                breakpoint,
            };
        });
    }
    lineBreakpoints(line) {
        return this.breakpoints.filter(b => b.position >= line.from && b.position <= line.to).map(b => b.breakpoint);
    }
    async linePossibleBreakpoints(line) {
        const start = this.transformer.editorLocationToUILocation(line.number - 1, 0);
        const end = this.transformer.editorLocationToUILocation(line.number - 1, Math.min(line.length, MAX_POSSIBLE_BREAKPOINT_LINE));
        const range = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_10__.TextRange.TextRange(start.lineNumber, start.columnNumber || 0, end.lineNumber, end.columnNumber || 0);
        return await this.breakpointManager.possibleBreakpoints(this.uiSourceCode, range);
    }
    // Compute the decorations for existing breakpoints (both on the
    // gutter and inline in the code)
    async computeBreakpointDecoration(state, breakpoints) {
        const decorations = [];
        const gutterMarkers = [];
        const breakpointsByLine = new Map();
        const inlineMarkersByLine = new Map();
        const possibleBreakpointRequests = [];
        const inlineMarkerPositions = new Set();
        const addInlineMarker = (linePos, columnNumber, breakpoint) => {
            let inlineMarkers = inlineMarkersByLine.get(linePos);
            if (!inlineMarkers) {
                inlineMarkers = [];
                inlineMarkersByLine.set(linePos, inlineMarkers);
            }
            inlineMarkers.push({ breakpoint, column: columnNumber });
        };
        for (const { position, breakpoint } of breakpoints) {
            const line = state.doc.lineAt(position);
            let forThisLine = breakpointsByLine.get(line.from);
            if (!forThisLine) {
                forThisLine = [];
                breakpointsByLine.set(line.from, forThisLine);
            }
            if (breakpoint.enabled() && forThisLine.every(b => !b.enabled())) {
                // Start a request for possible breakpoint positions on this line
                possibleBreakpointRequests.push(this.linePossibleBreakpoints(line).then(locations => addPossibleBreakpoints(line, locations)));
            }
            forThisLine.push(breakpoint);
            if (breakpoint.enabled()) {
                inlineMarkerPositions.add(position);
                addInlineMarker(line.from, position - line.from, breakpoint);
            }
        }
        for (const [lineStart, lineBreakpoints] of breakpointsByLine) {
            const main = lineBreakpoints.sort(mostSpecificBreakpoint)[0];
            let gutterClass = 'cm-breakpoint';
            if (!main.enabled()) {
                gutterClass += ' cm-breakpoint-disabled';
            }
            if (!main.bound()) {
                gutterClass += ' cm-breakpoint-unbound';
            }
            if (main.isLogpoint()) {
                gutterClass += ' cm-breakpoint-logpoint';
            }
            else if (main.condition()) {
                gutterClass += ' cm-breakpoint-conditional';
            }
            gutterMarkers.push((new BreakpointGutterMarker(gutterClass, lineStart)).range(lineStart));
        }
        const addPossibleBreakpoints = (line, locations) => {
            for (const location of locations) {
                const editorLocation = this.transformer.uiLocationToEditorLocation(location.lineNumber, location.columnNumber);
                if (editorLocation.lineNumber !== line.number - 1) {
                    continue;
                }
                const position = Math.min(line.to, line.from + editorLocation.columnNumber);
                if (!inlineMarkerPositions.has(position)) {
                    addInlineMarker(line.from, editorLocation.columnNumber, null);
                }
            }
        };
        await Promise.all(possibleBreakpointRequests);
        for (const [linePos, inlineMarkers] of inlineMarkersByLine) {
            if (inlineMarkers.length > 1) {
                for (const { column, breakpoint } of inlineMarkers) {
                    const marker = new BreakpointInlineMarker(breakpoint, this);
                    decorations.push(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration.widget({ widget: marker, side: -1 }).range(linePos + column));
                }
            }
        }
        return { content: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration.set(decorations, true), gutter: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.RangeSet.of(gutterMarkers, true) };
    }
    // If, after editing, the editor is synced again (either by going
    // back to the original document or by saving), we replace any
    // breakpoints the breakpoint manager might have (which point into
    // the old file) with the breakpoints we have, which had their
    // positions tracked through the changes.
    async restoreBreakpointsAfterEditing() {
        const { breakpoints } = this;
        const editor = this.editor;
        this.breakpoints = [];
        await Promise.all(breakpoints.map(async (description) => {
            const { breakpoint, position } = description;
            const condition = breakpoint.condition(), enabled = breakpoint.enabled(), isLogpoint = breakpoint.isLogpoint();
            await breakpoint.remove(false);
            const editorLocation = editor.toLineColumn(position);
            const uiLocation = this.transformer.editorLocationToUILocation(editorLocation.lineNumber, editorLocation.columnNumber);
            await this.setBreakpoint(uiLocation.lineNumber, uiLocation.columnNumber, condition, enabled, isLogpoint);
        }));
    }
    async refreshBreakpoints() {
        if (this.editor) {
            this.breakpoints = this.fetchBreakpoints();
            const forBreakpoints = this.breakpoints;
            const decorations = await this.computeBreakpointDecoration(this.editor.state, forBreakpoints);
            // After the `await` we could have disposed of this DebuggerPlugin, so re-check `this.editor`.
            if (this.editor && this.breakpoints === forBreakpoints &&
                (decorations.gutter.size || this.editor.state.field(breakpointMarkers, false)?.gutter.size)) {
                this.editor.dispatch({ effects: setBreakpointDeco.of(decorations) });
            }
        }
    }
    breakpointChange(event) {
        const { uiLocation } = event.data;
        if (uiLocation.uiSourceCode !== this.uiSourceCode || this.muted) {
            return;
        }
        for (const scriptFile of this.scriptFileForDebuggerModel.values()) {
            if (scriptFile.isDivergingFromVM() || scriptFile.isMergingToVM()) {
                return;
            }
        }
        // These tend to arrive in bursts, so debounce them
        window.clearTimeout(this.refreshBreakpointsTimeout);
        this.refreshBreakpointsTimeout = window.setTimeout(() => this.refreshBreakpoints(), 50);
    }
    onInlineBreakpointMarkerClick(event, breakpoint) {
        event.consume(true);
        if (breakpoint) {
            if (event.shiftKey) {
                breakpoint.setEnabled(!breakpoint.enabled());
            }
            else {
                void breakpoint.remove(false);
            }
        }
        else if (this.editor) {
            const editorLocation = this.editor.editor.posAtDOM(event.target);
            const line = this.editor.state.doc.lineAt(editorLocation);
            const uiLocation = this.transformer.editorLocationToUILocation(line.number - 1, editorLocation - line.from);
            void this.setBreakpoint(uiLocation.lineNumber, uiLocation.columnNumber, EMPTY_BREAKPOINT_CONDITION, /* enabled */ true, 
            /* isLogpoint */ false);
        }
    }
    onInlineBreakpointMarkerContextMenu(event, breakpoint) {
        event.consume(true);
        // If there's events coming from the editor, there must be an editor.
        const editor = this.editor;
        const position = editor.editor.posAtDOM(event.target);
        const line = editor.state.doc.lineAt(position);
        if (!_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_16__.SourceFrame.isBreakableLine(editor.state, line) ||
            // Editing breakpoints only make sense for conditional breakpoints
            // and logpoints.
            !_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().supportsConditionalBreakpoints(this.uiSourceCode)) {
            return;
        }
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.ContextMenu.ContextMenu(event);
        if (breakpoint) {
            contextMenu.debugSection().appendItem(i18nString(UIStrings.editBreakpoint), () => {
                this.editBreakpointCondition({ line, breakpoint, location: null });
            }, { jslogContext: 'edit-breakpoint' });
        }
        else {
            const uiLocation = this.transformer.editorLocationToUILocation(line.number - 1, position - line.from);
            contextMenu.debugSection().appendItem(i18nString(UIStrings.addConditionalBreakpoint), () => {
                this.editBreakpointCondition({ line, breakpoint: null, location: uiLocation, isLogpoint: false });
            }, { jslogContext: 'add-cnd-breakpoint' });
            contextMenu.debugSection().appendItem(i18nString(UIStrings.addLogpoint), () => {
                this.editBreakpointCondition({ line, breakpoint: null, location: uiLocation, isLogpoint: true });
            }, { jslogContext: 'add-logpoint' });
            contextMenu.debugSection().appendItem(i18nString(UIStrings.neverPauseHere), () => this.setBreakpoint(uiLocation.lineNumber, uiLocation.columnNumber, NEVER_PAUSE_HERE_CONDITION, /* enabled */ true, 
            /* isLogpoint */ false), { jslogContext: 'never-pause-here' });
        }
        void contextMenu.show();
    }
    updateScriptFiles() {
        for (const debuggerModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel)) {
            const scriptFile = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().scriptFile(this.uiSourceCode, debuggerModel);
            if (scriptFile) {
                this.updateScriptFile(debuggerModel);
            }
        }
        this.showSourceMapInfobarIfNeeded();
    }
    updateScriptFile(debuggerModel) {
        const oldScriptFile = this.scriptFileForDebuggerModel.get(debuggerModel);
        const newScriptFile = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().scriptFile(this.uiSourceCode, debuggerModel);
        this.scriptFileForDebuggerModel.delete(debuggerModel);
        if (oldScriptFile) {
            oldScriptFile.removeEventListener(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceScriptMapping.ResourceScriptFile.Events.DidMergeToVM, this.didMergeToVM, this);
            oldScriptFile.removeEventListener(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceScriptMapping.ResourceScriptFile.Events.DidDivergeFromVM, this.didDivergeFromVM, this);
            if (this.muted && !this.uiSourceCode.isDirty() && this.consistentScripts()) {
                this.setMuted(false);
            }
        }
        if (!newScriptFile) {
            return;
        }
        this.scriptFileForDebuggerModel.set(debuggerModel, newScriptFile);
        newScriptFile.addEventListener(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceScriptMapping.ResourceScriptFile.Events.DidMergeToVM, this.didMergeToVM, this);
        newScriptFile.addEventListener(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceScriptMapping.ResourceScriptFile.Events.DidDivergeFromVM, this.didDivergeFromVM, this);
        newScriptFile.checkMapping();
        void newScriptFile.missingSymbolFiles().then(resources => {
            if (resources) {
                const details = i18nString(UIStrings.debugInfoNotFound, { PH1: newScriptFile.uiSourceCode.url() });
                this.updateMissingDebugInfoInfobar({ resources, details });
            }
            else {
                this.updateMissingDebugInfoInfobar(null);
            }
        });
    }
    updateMissingDebugInfoInfobar(warning) {
        if (this.missingDebugInfoBar) {
            return;
        }
        if (warning === null) {
            this.removeInfobar(this.missingDebugInfoBar);
            this.missingDebugInfoBar = null;
            return;
        }
        this.missingDebugInfoBar =
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Infobar.Infobar.create(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Infobar.Type.Error, warning.details, [], undefined, 'missing-debug-info');
        if (!this.missingDebugInfoBar) {
            return;
        }
        for (const resource of warning.resources) {
            const detailsRow = this.missingDebugInfoBar?.createDetailsRowMessage(i18nString(UIStrings.debugFileNotFound, { PH1: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractName(resource.resourceUrl) }));
            if (detailsRow) {
                const pageResourceKey = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PageResourceLoader.PageResourceLoader.makeExtensionKey(resource.resourceUrl, resource.initiator);
                if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PageResourceLoader.PageResourceLoader.instance().getResourcesLoaded().get(pageResourceKey)) {
                    const showRequest = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.UIUtils.createTextButton(i18nString(UIStrings.showRequest), () => {
                        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PageResourceLoader.ResourceKey(pageResourceKey));
                    }, { jslogContext: 'show-request', variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_13__.Button.Variant.TEXT });
                    showRequest.style.setProperty('margin-left', '10px');
                    showRequest.title = i18nString(UIStrings.openDeveloperResources);
                    detailsRow.appendChild(showRequest);
                }
                detailsRow.classList.add('infobar-selectable');
            }
        }
        this.missingDebugInfoBar.setCloseCallback(() => {
            this.removeInfobar(this.missingDebugInfoBar);
            this.missingDebugInfoBar = null;
        });
        this.attachInfobar(this.missingDebugInfoBar);
    }
    scriptHasSourceMap() {
        for (const debuggerModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel)) {
            const scriptFile = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().scriptFile(this.uiSourceCode, debuggerModel);
            if (scriptFile && scriptFile.hasSourceMapURL()) {
                return true;
            }
        }
        return false;
    }
    getSourceMapResource() {
        const resourceMap = this.loader.getResourcesLoaded();
        for (const [debuggerModel, script] of this.scriptFileForDebuggerModel.entries()) {
            const url = script.script?.sourceMapURL;
            if (url) {
                const initiatorUrl = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMapManager.SourceMapManager.resolveRelativeSourceURL(debuggerModel.target(), script.script.sourceURL);
                const resolvedUrl = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.completeURL(initiatorUrl, url);
                if (resolvedUrl) {
                    const resource = resourceMap.get(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PageResourceLoader.PageResourceLoader.makeKey(resolvedUrl, script.script.createPageResourceLoadInitiator()));
                    if (resource) {
                        return resource;
                    }
                }
            }
        }
        return null;
    }
    showSourceMapInfobarIfNeeded() {
        if (this.sourceMapInfobar) {
            return;
        }
        if (!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('js-source-maps-enabled').get()) {
            return;
        }
        if (!this.scriptHasSourceMap()) {
            return;
        }
        const resource = this.getSourceMapResource();
        if (resource && resource.success === null) {
            // Don't create the infobar until we know whether loading succeeded or failed.
            return;
        }
        if (!resource) {
            this.sourceMapInfobar = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Infobar.Infobar.create(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Infobar.Type.Info, i18nString(UIStrings.sourceMapSkipped), [], _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('source-map-skipped-infobar-disabled', false), 'source-map-skipped');
            if (!this.sourceMapInfobar) {
                return;
            }
            this.sourceMapInfobar.createDetailsRowMessage(i18nString(UIStrings.debuggingPowerReduced));
            this.sourceMapInfobar.createDetailsRowMessage(i18nString(UIStrings.reloadForSourceMap));
        }
        else if (resource.success) {
            this.sourceMapInfobar = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Infobar.Infobar.create(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Infobar.Type.Info, i18nString(UIStrings.sourceMapLoaded), [], _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('source-map-infobar-disabled', false), 'source-map-loaded');
            if (!this.sourceMapInfobar) {
                return;
            }
            this.sourceMapInfobar.createDetailsRowMessage(i18nString(UIStrings.associatedFilesShouldBeAdded));
            this.sourceMapInfobar.createDetailsRowMessage(i18nString(UIStrings.associatedFilesAreAvailable, {
                PH1: String(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.ShortcutRegistry.ShortcutRegistry.instance().shortcutTitleForAction('quick-open.show')),
            }));
        }
        else {
            this.sourceMapInfobar = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Infobar.Infobar.create(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Infobar.Type.Warning, i18nString(UIStrings.sourceMapFailed), [], undefined, 'source-map-failed');
            if (!this.sourceMapInfobar) {
                return;
            }
            this.sourceMapInfobar.createDetailsRowMessage(i18nString(UIStrings.debuggingPowerReduced));
            if (resource.errorMessage) {
                this.sourceMapInfobar.createDetailsRowMessage(i18nString(UIStrings.errorLoading, {
                    PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.trimMiddle(resource.url, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.UIUtils.MaxLengthForDisplayedURLs),
                    PH2: resource.errorMessage,
                }));
            }
        }
        this.sourceMapInfobar.setCloseCallback(() => {
            this.removeInfobar(this.sourceMapInfobar);
            this.sourceMapInfobar = null;
        });
        this.attachInfobar(this.sourceMapInfobar);
    }
    handleGutterClick(line, event) {
        if (this.muted || event.button !== 0 || event.altKey) {
            return false;
        }
        if (event.metaKey || event.ctrlKey) {
            __classPrivateFieldGet(this, _DebuggerPlugin_instances, "m", _DebuggerPlugin_openEditDialogForLine).call(this, line, event.shiftKey);
            return true;
        }
        void this.toggleBreakpoint(line, event.shiftKey);
        return true;
    }
    async toggleBreakpoint(line, onlyDisable) {
        if (this.muted) {
            return;
        }
        if (this.activeBreakpointDialog) {
            this.activeBreakpointDialog.finishEditing(false, '');
        }
        const breakpoints = this.lineBreakpoints(line);
        if (!breakpoints.length) {
            await this.createNewBreakpoint(line, EMPTY_BREAKPOINT_CONDITION, /* enabled */ true, /* isLogpoint */ false);
            return;
        }
        const hasDisabled = breakpoints.some(b => !b.enabled());
        for (const breakpoint of breakpoints) {
            if (onlyDisable) {
                breakpoint.setEnabled(hasDisabled);
            }
            else {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointRemovedFromGutterToggle);
                void breakpoint.remove(false);
            }
        }
    }
    async defaultBreakpointLocation(line) {
        // If the breakpoint is being set at the execution location, use the execution location exactly,
        // otherwise calculate the location from the line number.
        if (this.executionLocation) {
            const editorExecutionLocation = this.transformer.uiLocationToEditorLocation(this.executionLocation.lineNumber, this.executionLocation.columnNumber);
            if (editorExecutionLocation.lineNumber === line.number - 1) {
                const possibleBreakpoints = await this.linePossibleBreakpoints(line);
                for (const location of possibleBreakpoints) {
                    if (location.compareTo(this.executionLocation) === 0) {
                        return this.executionLocation;
                    }
                }
            }
        }
        return this.transformer.editorLocationToUILocation(line.number - 1);
    }
    async createNewBreakpoint(line, condition, enabled, isLogpoint) {
        if (!this.editor || !_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_16__.SourceFrame.isBreakableLine(this.editor.state, line)) {
            return;
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ScriptsBreakpointSet);
        __classPrivateFieldGet(this, _DebuggerPlugin_instances, "m", _DebuggerPlugin_recordSourcesPanelDebuggedMetrics).call(this);
        const origin = await this.defaultBreakpointLocation(line);
        await this.setBreakpoint(origin.lineNumber, origin.columnNumber, condition, enabled, isLogpoint);
    }
    async setBreakpoint(lineNumber, columnNumber, condition, enabled, isLogpoint) {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('breakpoints-active').set(true);
        const bp = await this.breakpointManager.setBreakpoint(this.uiSourceCode, lineNumber, columnNumber, condition, enabled, isLogpoint, _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__.BreakpointManager.BreakpointOrigin.USER_ACTION);
        this.breakpointWasSetForTest(lineNumber, columnNumber, condition, enabled);
        return bp;
    }
    breakpointWasSetForTest(_lineNumber, _columnNumber, _condition, _enabled) {
    }
    async callFrameChanged() {
        this.liveLocationPool.disposeAll();
        const callFrame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame);
        if (!callFrame) {
            this.setExecutionLocation(null);
        }
        else {
            await _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().createCallFrameLiveLocation(callFrame.location(), async (liveLocation) => {
                const uiLocation = await liveLocation.uiLocation();
                if (uiLocation &&
                    uiLocation.uiSourceCode.canononicalScriptId() === this.uiSourceCode.canononicalScriptId()) {
                    this.setExecutionLocation(uiLocation);
                    this.updateMissingDebugInfoInfobar(callFrame.missingDebugInfoDetails);
                    // We are paused and the user is specifically looking at this UISourceCode either because
                    // this file is on top of stack, or the user explicitly selected a stack frame for this UISourceCode.
                    __classPrivateFieldGet(this, _DebuggerPlugin_instances, "m", _DebuggerPlugin_recordSourcesPanelDebuggedMetrics).call(this);
                }
                else {
                    this.setExecutionLocation(null);
                }
            }, this.liveLocationPool);
        }
    }
    setExecutionLocation(executionLocation) {
        if (this.executionLocation === executionLocation || !this.editor) {
            return;
        }
        this.executionLocation = executionLocation;
        if (executionLocation) {
            const editorLocation = this.transformer.uiLocationToEditorLocation(executionLocation.lineNumber, executionLocation.columnNumber);
            const editorPosition = _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_14__.Position.toOffset(this.editor.state.doc, editorLocation);
            this.editor.dispatch({
                effects: [
                    _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_14__.ExecutionPositionHighlighter.setHighlightedPosition.of(editorPosition),
                ],
            });
            void this.updateValueDecorations();
            if (this.controlDown) {
                void this.showContinueToLocations();
            }
        }
        else {
            this.editor.dispatch({
                effects: [
                    continueToMarkers.update.of(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration.none),
                    valueDecorations.update.of(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration.none),
                    _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_14__.ExecutionPositionHighlighter.clearHighlightedPosition.of(),
                ],
            });
        }
    }
    dispose() {
        this.hideIgnoreListInfobar();
        if (this.sourceMapInfobar) {
            this.sourceMapInfobar.dispose();
        }
        for (const script of this.scriptFileForDebuggerModel.values()) {
            script.removeEventListener(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceScriptMapping.ResourceScriptFile.Events.DidMergeToVM, this.didMergeToVM, this);
            script.removeEventListener(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceScriptMapping.ResourceScriptFile.Events.DidDivergeFromVM, this.didDivergeFromVM, this);
        }
        this.scriptFileForDebuggerModel.clear();
        this.popoverHelper?.hidePopover();
        this.popoverHelper?.dispose();
        this.setExecutionLocation(null);
        this.breakpointManager.removeEventListener(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__.BreakpointManager.Events.BreakpointAdded, this.breakpointChange, this);
        this.breakpointManager.removeEventListener(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__.BreakpointManager.Events.BreakpointRemoved, this.breakpointChange, this);
        this.uiSourceCode.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_11__.UISourceCode.Events.WorkingCopyChanged, this.workingCopyChanged, this);
        this.uiSourceCode.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_11__.UISourceCode.Events.WorkingCopyCommitted, this.workingCopyCommitted, this);
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance().removeChangeListener(this.ignoreListCallback);
        debuggerPluginForUISourceCode.delete(this.uiSourceCode);
        super.dispose();
        window.clearTimeout(this.refreshBreakpointsTimeout);
        // Clear `this.editor` to signal that we are disposed. Any function from this `DebuggerPlugin` instance
        // still running or scheduled will early return and not do any work.
        this.editor = undefined;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.Context.Context.instance().removeFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame, this.callFrameChanged, this);
        this.liveLocationPool.disposeAll();
    }
}
_DebuggerPlugin_activeBreakpointEditRequest = new WeakMap(), _DebuggerPlugin_scheduledFinishingActiveDialog = new WeakMap(), _DebuggerPlugin_sourcesPanelDebuggedMetricsRecorded = new WeakMap(), _DebuggerPlugin_instances = new WeakSet(), _DebuggerPlugin_openEditDialogForLine = function _DebuggerPlugin_openEditDialogForLine(line, isLogpoint) {
    if (this.muted) {
        return;
    }
    if (this.activeBreakpointDialog) {
        this.activeBreakpointDialog.finishEditing(false, '');
    }
    const breakpoint = this.breakpoints.find(b => b.position >= line.from && b.position <= line.to)?.breakpoint || null;
    if (isLogpoint === undefined && breakpoint !== null) {
        isLogpoint = breakpoint.isLogpoint();
    }
    this.editBreakpointCondition({ line, breakpoint, location: null, isLogpoint });
}, _DebuggerPlugin_rawLocationToEditorOffset = async function _DebuggerPlugin_rawLocationToEditorOffset(location, url) {
    const uiLocation = location &&
        await _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(location);
    if (!uiLocation || uiLocation.uiSourceCode.url() !== url) {
        return null;
    }
    const offset = this.editor?.toOffset(this.transformer.uiLocationToEditorLocation(uiLocation.lineNumber, uiLocation.columnNumber));
    return offset ?? null;
}, _DebuggerPlugin_recordSourcesPanelDebuggedMetrics = function _DebuggerPlugin_recordSourcesPanelDebuggedMetrics() {
    if (__classPrivateFieldGet(this, _DebuggerPlugin_sourcesPanelDebuggedMetricsRecorded, "f")) {
        return;
    }
    __classPrivateFieldSet(this, _DebuggerPlugin_sourcesPanelDebuggedMetricsRecorded, true, "f");
    const mimeType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.mimeFromURL(this.uiSourceCode.url());
    const mediaType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.mediaTypeForMetrics(mimeType ?? '', this.uiSourceCode.contentType().isFromSourceMap(), _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_10__.TextUtils.isMinified(this.uiSourceCode.content()));
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.sourcesPanelFileDebugged(mediaType);
};
class BreakpointLocationRevealer {
    async reveal(breakpointLocation, omitFocus) {
        const { uiLocation } = breakpointLocation;
        _SourcesPanel_js__WEBPACK_IMPORTED_MODULE_23__.SourcesPanel.instance().showUILocation(uiLocation, omitFocus);
        const debuggerPlugin = debuggerPluginForUISourceCode.get(uiLocation.uiSourceCode);
        if (debuggerPlugin) {
            debuggerPlugin.editBreakpointLocation(breakpointLocation);
        }
        else {
            _components_components_js__WEBPACK_IMPORTED_MODULE_21__.BreakpointsView.BreakpointsSidebarController.instance().breakpointEditFinished(breakpointLocation.breakpoint, false);
        }
    }
}
// Infobar panel state, used to show additional panels below the editor.
const addInfobar = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.StateEffect.define();
const removeInfobar = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.StateEffect.define();
const infobarState = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.StateField.define({
    create() {
        return [];
    },
    update(current, tr) {
        for (const effect of tr.effects) {
            if (effect.is(addInfobar)) {
                current = current.concat(effect.value);
            }
            else if (effect.is(removeInfobar)) {
                current = current.filter(b => b !== effect.value);
            }
        }
        return current;
    },
    provide: (field) => _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.showPanel.computeN([field], (state) => state.field(field).map((bar) => () => ({ dom: bar.element }))),
});
// Enumerate non-breakable lines (lines without a known corresponding
// position in the UISource).
async function computeNonBreakableLines(state, transformer, sourceCode) {
    const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance();
    const mappedLines = await debuggerWorkspaceBinding.getMappedLines(sourceCode);
    if (!mappedLines) {
        return [];
    }
    const linePositions = [];
    for (let i = 0; i < state.doc.lines; i++) {
        const { lineNumber } = transformer.editorLocationToUILocation(i, 0);
        if (!mappedLines.has(lineNumber)) {
            linePositions.push(state.doc.line(i + 1).from);
        }
    }
    return linePositions;
}
const setBreakpointDeco = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.StateEffect.define();
const muteBreakpoints = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.StateEffect.define();
function muteGutterMarkers(markers, doc) {
    const newMarkers = [];
    markers.between(0, doc.length, (from, _to, marker) => {
        let className = marker.elementClass;
        if (!/cm-breakpoint-disabled/.test(className)) {
            className += ' cm-breakpoint-disabled';
        }
        newMarkers.push(new BreakpointGutterMarker(className, from).range(from));
    });
    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.RangeSet.of(newMarkers, false);
}
// Holds the inline breakpoint marker decorations and the gutter
// markers for lines with breakpoints. When the set of active markers
// changes in non-muted state (the editor content matches the original
// file), it is recomputed and updated with `setBreakpointDeco`. When
// the editor content goes out of sync with the original file, the
// `muteBreakpoints` effect hides the inline markers and makes sure
// all gutter markers are displayed as disabled.
const breakpointMarkers = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.StateField.define({
    create() {
        return { content: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.RangeSet.empty, gutter: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.RangeSet.empty };
    },
    update(deco, tr) {
        if (!tr.changes.empty) {
            deco = { content: deco.content.map(tr.changes), gutter: deco.gutter.map(tr.changes) };
        }
        for (const effect of tr.effects) {
            if (effect.is(setBreakpointDeco)) {
                deco = effect.value;
            }
            else if (effect.is(muteBreakpoints)) {
                deco = { content: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.RangeSet.empty, gutter: muteGutterMarkers(deco.gutter, tr.state.doc) };
            }
        }
        return deco;
    },
    provide: field => [_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.EditorView.decorations.from(field, deco => deco.content),
        _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.lineNumberMarkers.from(field, deco => deco.gutter)],
});
class BreakpointInlineMarker extends _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.WidgetType {
    constructor(breakpoint, parent) {
        super();
        Object.defineProperty(this, "breakpoint", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: breakpoint
        });
        Object.defineProperty(this, "parent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: parent
        });
        Object.defineProperty(this, "class", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // Eagerly compute DOM class so that the widget is recreated when it changes.
        this.class = 'cm-inlineBreakpoint';
        if (breakpoint?.isLogpoint()) {
            this.class += ' cm-inlineBreakpoint-logpoint';
        }
        else if (breakpoint?.condition()) {
            this.class += ' cm-inlineBreakpoint-conditional';
        }
        if (!breakpoint?.enabled()) {
            this.class += ' cm-inlineBreakpoint-disabled';
        }
    }
    eq(other) {
        return other.class === this.class && other.breakpoint === this.breakpoint;
    }
    toDOM() {
        const span = document.createElement('span');
        span.className = this.class;
        span.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_18__.breakpointMarker().track({ click: true })}`);
        span.addEventListener('click', (event) => {
            this.parent.onInlineBreakpointMarkerClick(event, this.breakpoint);
            event.consume();
        });
        span.addEventListener('contextmenu', (event) => {
            this.parent.onInlineBreakpointMarkerContextMenu(event, this.breakpoint);
            event.consume();
        });
        return span;
    }
    ignoreEvent() {
        return true;
    }
}
class BreakpointGutterMarker extends _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.GutterMarker {
    constructor(elementClass, position) {
        super();
        Object.defineProperty(this, "elementClass", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: elementClass
        });
        _BreakpointGutterMarker_position.set(this, void 0);
        __classPrivateFieldSet(this, _BreakpointGutterMarker_position, position, "f");
    }
    eq(other) {
        return other.elementClass === this.elementClass;
    }
    toDOM(view) {
        const div = document.createElement('div'); // We want {display: block} so it uses all of the space.
        div.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_18__.breakpointMarker().track({ click: true })}`);
        const line = view.state.doc.lineAt(__classPrivateFieldGet(this, _BreakpointGutterMarker_position, "f")).number;
        const formatNumber = view.state.facet(_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_16__.SourceFrame.LINE_NUMBER_FORMATTER);
        div.textContent = formatNumber(line, view.state);
        return div;
    }
}
_BreakpointGutterMarker_position = new WeakMap();
function mostSpecificBreakpoint(a, b) {
    if (a.enabled() !== b.enabled()) {
        return a.enabled() ? -1 : 1;
    }
    if (a.bound() !== b.bound()) {
        return a.bound() ? -1 : 1;
    }
    if (Boolean(a.condition()) !== Boolean(b.condition())) {
        return Boolean(a.condition()) ? -1 : 1;
    }
    return 0;
}
// Generic helper for creating pairs of editor state fields and
// effects to model imperatively updated decorations.
function defineStatefulDecoration() {
    const update = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.StateEffect.define();
    const field = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.StateField.define({
        create() {
            return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration.none;
        },
        update(deco, tr) {
            return tr.effects.reduce((deco, effect) => effect.is(update) ? effect.value : deco, deco.map(tr.changes));
        },
        provide: field => _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.EditorView.decorations.from(field),
    });
    return { update, field };
}
// Continue-to markers
const continueToMark = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration.mark({ class: 'cm-continueToLocation' });
const asyncContinueToMark = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration.mark({ class: 'cm-continueToLocation cm-continueToLocation-async' });
const continueToMarkers = defineStatefulDecoration();
const noMarkers = {}, hasContinueMarkers = {
    class: 'cm-hasContinueMarkers',
};
// Add a class to the content element when there are active
// continue-to markers. This hides the background on the current
// execution line.
const markIfContinueTo = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.EditorView.contentAttributes.compute([continueToMarkers.field], state => {
    return state.field(continueToMarkers.field).size ? hasContinueMarkers : noMarkers;
});
// Variable value decorations
class ValueDecoration extends _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.WidgetType {
    constructor(pairs) {
        super();
        Object.defineProperty(this, "pairs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: pairs
        });
    }
    eq(other) {
        return this.pairs.length === other.pairs.length &&
            this.pairs.every((p, i) => p[0] === other.pairs[i][0] && p[1] === other.pairs[i][1]);
    }
    toDOM() {
        const formatter = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_15__.RemoteObjectPreviewFormatter.RemoteObjectPreviewFormatter();
        const widget = document.createElement('div');
        widget.classList.add('cm-variableValues');
        let first = true;
        for (const [name, value] of this.pairs) {
            if (first) {
                first = false;
            }
            else {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.UIUtils.createTextChild(widget, ', ');
            }
            const nameValuePair = widget.createChild('span');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_17__.UIUtils.createTextChild(nameValuePair, name + ' = ');
            const propertyCount = value.preview ? value.preview.properties.length : 0;
            const entryCount = value.preview && value.preview.entries ? value.preview.entries.length : 0;
            if (value.preview && propertyCount + entryCount < 10) {
                formatter.appendObjectPreview(nameValuePair, value.preview, false /* isEntry */);
            }
            else {
                const propertyValue = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_15__.ObjectPropertiesSection.ObjectPropertiesSection.createPropertyValue(value, /* wasThrown */ false, /* showPreview */ false);
                nameValuePair.appendChild(propertyValue.element);
            }
        }
        return widget;
    }
}
const valueDecorations = defineStatefulDecoration();
function isVariableIdentifier(tokenType) {
    return tokenType === 'VariableName' || tokenType === 'VariableDefinition';
}
function isVariableDefinition(tokenType) {
    return tokenType === 'VariableDefinition';
}
function isLetConstDefinition(tokenType) {
    return tokenType === 'let' || tokenType === 'const';
}
function isScopeNode(tokenType) {
    return tokenType === 'Block' || tokenType === 'ForSpec';
}
class SiblingScopeVariables {
    constructor() {
        Object.defineProperty(this, "blockList", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set()
        });
        Object.defineProperty(this, "variables", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
}
function getVariableNamesByLine(editorState, fromPos, toPos, currentPos) {
    const fromLine = editorState.doc.lineAt(fromPos);
    fromPos = Math.min(fromLine.to, fromPos);
    toPos = editorState.doc.lineAt(toPos).from;
    const tree = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.syntaxTree(editorState);
    // Sibling scope is a scope that does not contain the current position.
    // We will exclude variables that are defined (and used in those scopes (since we are currently outside of their lifetime).
    function isSiblingScopeNode(node) {
        return isScopeNode(node.name) && (node.to < currentPos || currentPos < node.from);
    }
    const names = [];
    let curLine = fromLine;
    const siblingStack = [];
    let currentLetConstDefinition = null;
    function currentNames() {
        return siblingStack.length ? siblingStack[siblingStack.length - 1].variables : names;
    }
    tree.iterate({
        from: fromPos,
        to: toPos,
        enter: node => {
            if (node.from < fromPos) {
                return;
            }
            if (isLetConstDefinition(node.name)) {
                currentLetConstDefinition = node.node.nextSibling;
                return;
            }
            if (isSiblingScopeNode(node)) {
                siblingStack.push(new SiblingScopeVariables());
                return;
            }
            const varName = isVariableIdentifier(node.name) && editorState.sliceDoc(node.from, node.to);
            if (!varName) {
                return;
            }
            if (currentLetConstDefinition && isVariableDefinition(node.name) && siblingStack.length > 0) {
                siblingStack[siblingStack.length - 1].blockList.add(varName);
                return;
            }
            if (node.from > curLine.to) {
                curLine = editorState.doc.lineAt(node.from);
            }
            currentNames().push({ line: curLine.number - 1, from: node.from, id: varName });
        },
        leave: node => {
            if (currentLetConstDefinition === node.node) {
                currentLetConstDefinition = null;
            }
            else if (isSiblingScopeNode(node)) {
                const topScope = siblingStack.pop();
                const nameList = currentNames();
                for (const token of topScope?.variables ?? []) {
                    if (!topScope?.blockList.has(token.id)) {
                        nameList.push(token);
                    }
                }
            }
        },
    });
    return names;
}
async function computeScopeMappings(callFrame, rawLocationToEditorOffset) {
    const scopeMappings = [];
    for (const scope of callFrame.scopeChain()) {
        const scopeStart = await rawLocationToEditorOffset(scope.range()?.start ?? null);
        if (!scopeStart) {
            break;
        }
        const scopeEnd = await rawLocationToEditorOffset(scope.range()?.end ?? null);
        if (!scopeEnd) {
            break;
        }
        const { properties } = await _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_9__.NamesResolver.resolveScopeInObject(scope).getAllProperties(false, false);
        if (!properties || properties.length > MAX_PROPERTIES_IN_SCOPE_FOR_VALUE_DECORATIONS) {
            break;
        }
        const variableMap = new Map(properties.map(p => [p.name, p.value]));
        scopeMappings.push({ scopeStart, scopeEnd, variableMap });
        // Let us only get mappings for block scopes until we see a surrounding function (local) scope.
        if (scope.type() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Debugger.ScopeType.Local) {
            break;
        }
    }
    return scopeMappings;
}
function getVariableValuesByLine(scopeMappings, variableNames) {
    const namesPerLine = new Map();
    for (const { line, from, id } of variableNames) {
        const varValue = findVariableInChain(id, from, scopeMappings);
        if (!varValue) {
            continue;
        }
        let names = namesPerLine.get(line);
        if (!names) {
            names = new Map();
            namesPerLine.set(line, names);
        }
        names.set(id, varValue);
    }
    return namesPerLine;
    function findVariableInChain(name, pos, scopeMappings) {
        for (const scope of scopeMappings) {
            if (pos < scope.scopeStart || pos >= scope.scopeEnd) {
                continue;
            }
            const value = scope.variableMap.get(name);
            if (value) {
                return value;
            }
        }
        return null;
    }
}
// Pop-over
function computePopoverHighlightRange(state, mimeType, cursorPos) {
    const { main } = state.selection;
    if (!main.empty) {
        if (cursorPos < main.from || main.to < cursorPos) {
            return null;
        }
        // If the user goes through the trouble of manually selecting an expression, we'll allow side-effects.
        return { from: main.from, to: main.to, containsSideEffects: false };
    }
    const tree = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.ensureSyntaxTree(state, cursorPos, 5 * 1000);
    if (!tree) {
        return null;
    }
    const node = tree.resolveInner(cursorPos, 1);
    // Only do something if the cursor is over a leaf node.
    if (node.firstChild) {
        return null;
    }
    switch (mimeType) {
        case 'application/wasm': {
            if (node.name !== 'Identifier') {
                return null;
            }
            // For $label identifiers we can't show a meaningful preview (https://crbug.com/1155548),
            // so we suppress them for now. Label identifiers can only appear as operands to control
            // instructions[1].
            //
            // [1]: https://webassembly.github.io/spec/core/text/instructions.html#control-instructions
            const controlInstructions = ['block', 'loop', 'if', 'else', 'end', 'br', 'br_if', 'br_table'];
            for (let parent = node.parent; parent; parent = parent.parent) {
                if (parent.name === 'App') {
                    const firstChild = parent.firstChild;
                    const opName = firstChild?.name === 'Keyword' && state.sliceDoc(firstChild.from, firstChild.to);
                    if (opName && controlInstructions.includes(opName)) {
                        return null;
                    }
                }
            }
            return { from: node.from, to: node.to, containsSideEffects: false };
        }
        case 'text/html':
        case 'text/javascript':
        case 'text/jsx':
        case 'text/typescript':
        case 'text/typescript-jsx': {
            let current = node;
            while (current && current.name !== 'this' && current.name !== 'VariableDefinition' &&
                current.name !== 'VariableName' && current.name !== 'MemberExpression' &&
                !(current.name === 'PropertyName' && current.parent?.name === 'PatternProperty' &&
                    current.nextSibling?.name !== ':') &&
                !(current.name === 'PropertyDefinition' && current.parent?.name === 'Property' &&
                    current.nextSibling?.name !== ':')) {
                current = current.parent;
            }
            if (!current) {
                return null;
            }
            return { from: current.from, to: current.to, containsSideEffects: containsSideEffects(state.doc, current) };
        }
        default: {
            // In other languages, just assume a token consisting entirely
            // of identifier-like characters is an identifier.
            if (node.to - node.from > 50 || /[^\w_\-$]/.test(state.sliceDoc(node.from, node.to))) {
                return null;
            }
            return { from: node.from, to: node.to, containsSideEffects: false };
        }
    }
}
function containsSideEffects(doc, root) {
    let containsSideEffects = false;
    root.toTree().iterate({
        enter(node) {
            switch (node.name) {
                case 'AssignmentExpression':
                case 'CallExpression': {
                    containsSideEffects = true;
                    return false;
                }
                case 'ArithOp': {
                    const op = doc.sliceString(root.from + node.from, root.from + node.to);
                    if (op === '++' || op === '--') {
                        containsSideEffects = true;
                        return false;
                    }
                    break;
                }
            }
            return true;
        },
    });
    return containsSideEffects;
}
// Evaluated expression mark for pop-over
const evalExpressionMark = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.Decoration.mark({ class: 'cm-evaluatedExpression' });
const evalExpression = defineStatefulDecoration();
// Styling for plugin-local elements
const theme = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_12__.EditorView.baseTheme({
    '.cm-gutters .cm-gutter.cm-lineNumbers .cm-gutterElement': {
        '&:hover, &.cm-breakpoint': {
            borderStyle: 'solid',
            borderWidth: '1px 4px 1px 1px',
            marginRight: '-4px',
            paddingLeft: '8px',
            // Make sure text doesn't move down due to the border above it.
            lineHeight: 'calc(1.2em - 2px)',
            position: 'relative',
        },
        '&:hover': {
            WebkitBorderImage: lineNumberArrow('#ebeced', '#ebeced'),
        },
        '&.cm-breakpoint': {
            color: '#fff',
            WebkitBorderImage: lineNumberArrow('#4285f4', '#1a73e8'),
        },
        '&.cm-breakpoint-conditional': {
            WebkitBorderImage: lineNumberArrow('#f29900', '#e37400'),
            '&::before': {
                content: '"?"',
                position: 'absolute',
                top: 0,
                left: '1px',
            },
        },
        '&.cm-breakpoint-logpoint': {
            WebkitBorderImage: lineNumberArrow('#f439a0', '#d01884'),
            '&::before': {
                content: '"‥"',
                position: 'absolute',
                top: '-3px',
                left: '1px',
            },
        },
    },
    '&dark .cm-gutters .cm-gutter.cm-lineNumbers .cm-gutterElement': {
        '&:hover': {
            WebkitBorderImage: lineNumberArrow('#3c4043', '#3c4043'),
        },
        '&.cm-breakpoint': {
            WebkitBorderImage: lineNumberArrow('#5186EC', '#1a73e8'),
        },
        '&.cm-breakpoint-conditional': {
            WebkitBorderImage: lineNumberArrow('#e9a33a', '#e37400'),
        },
        '&.cm-breakpoint-logpoint': {
            WebkitBorderImage: lineNumberArrow('#E54D9B', '#d01884'),
        },
    },
    ':host-context(.breakpoints-deactivated) & .cm-gutters .cm-gutter.cm-lineNumbers .cm-gutterElement.cm-breakpoint, .cm-gutters .cm-gutter.cm-lineNumbers .cm-gutterElement.cm-breakpoint-disabled': {
        color: '#1a73e8',
        WebkitBorderImage: lineNumberArrow('#d9e7fd', '#1a73e8'),
        '&.cm-breakpoint-conditional': {
            color: '#e37400',
            WebkitBorderImage: lineNumberArrow('#fcebcc', '#e37400'),
        },
        '&.cm-breakpoint-logpoint': {
            color: '#d01884',
            WebkitBorderImage: lineNumberArrow('#fdd7ec', '#f439a0'),
        },
    },
    ':host-context(.breakpoints-deactivated) &dark .cm-gutters .cm-gutter.cm-lineNumbers .cm-gutterElement.cm-breakpoint, &dark .cm-gutters .cm-gutter.cm-lineNumbers .cm-gutterElement.cm-breakpoint-disabled': {
        WebkitBorderImage: lineNumberArrow('#2a384e', '#1a73e8'),
        '&.cm-breakpoint-conditional': {
            WebkitBorderImage: lineNumberArrow('#4d3c1d', '#e37400'),
        },
        '&.cm-breakpoint-logpoint': {
            WebkitBorderImage: lineNumberArrow('#4e283d', '#f439a0'),
        },
    },
    '.cm-inlineBreakpoint': {
        cursor: 'pointer',
        position: 'relative',
        top: '1px',
        content: inlineBreakpointArrow('#4285F4', '#1A73E8'),
        height: '10px',
        '&.cm-inlineBreakpoint-conditional': {
            content: inlineConditionalBreakpointArrow('#F29900', '#E37400'),
        },
        '&.cm-inlineBreakpoint-logpoint': {
            content: inlineLogpointArrow('#F439A0', '#D01884'),
        },
    },
    '&dark .cm-inlineBreakpoint': {
        content: inlineBreakpointArrow('#5186EC', '#1A73E8'),
        '&.cm-inlineBreakpoint-conditional': {
            content: inlineConditionalBreakpointArrow('#e9a33a', '#E37400'),
        },
        '&.cm-inlineBreakpoint-logpoint': {
            content: inlineLogpointArrow('#E54D9B', '#D01884'),
        },
    },
    ':host-context(.breakpoints-deactivated) & .cm-inlineBreakpoint, .cm-inlineBreakpoint-disabled': {
        content: inlineBreakpointArrow('#4285F4', '#1A73E8', '0.2'),
        '&.cm-inlineBreakpoint-conditional': {
            content: inlineConditionalBreakpointArrow('#F9AB00', '#E37400', '0.2'),
        },
        '&.cm-inlineBreakpoint-logpoint': {
            content: inlineLogpointArrow('#F439A0', '#D01884', '0.2'),
        },
    },
    '.cm-executionLine': {
        backgroundColor: 'var(--sys-color-yellow-container)',
        outline: '1px solid var(--sys-color-yellow-outline)',
        '.cm-hasContinueMarkers &': {
            backgroundColor: 'transparent',
        },
        '&.cm-highlightedLine': {
            animation: 'cm-fading-highlight-execution 2s 0s',
        },
        '&.cm-line::selection, &.cm-line ::selection': {
            backgroundColor: 'var(--sys-color-tonal-container) !important',
        },
    },
    '.cm-executionToken': {
        backgroundColor: 'var(--sys-color-state-focus-select)',
    },
    '@keyframes cm-fading-highlight-execution': {
        from: {
            backgroundColor: 'var(--sys-color-tonal-container)',
        },
        to: {
            backgroundColor: 'var(--sys-color-yellow-container)',
        },
    },
    '.cm-continueToLocation': {
        cursor: 'pointer',
        backgroundColor: 'var(--color-continue-to-location)',
        '&:hover': {
            backgroundColor: 'var(--color-continue-to-location-hover)',
            border: '1px solid var(--color-continue-to-location-hover-border)',
            margin: '0 -1px',
        },
        '&.cm-continueToLocation-async': {
            backgroundColor: 'var(--color-continue-to-location-async)',
            '&:hover': {
                backgroundColor: 'var(--color-continue-to-location-async-hover)',
                border: '1px solid var(--color-continue-to-location-async-hover-border)',
                margin: '0 -1px',
            },
        },
    },
    '.cm-evaluatedExpression': {
        backgroundColor: 'var(--color-evaluated-expression)',
        border: '1px solid var(--color-evaluated-expression-border)',
        margin: '0 -1px',
    },
    '.cm-variableValues': {
        display: 'inline',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '1000px',
        opacity: '80%',
        backgroundColor: 'var(--color-variable-values)',
        marginLeft: '10px',
        padding: '0 5px',
        userSelect: 'text',
        '.cm-executionLine &': {
            backgroundColor: 'transparent',
            opacity: '50%',
        },
    },
});
function lineNumberArrow(color, outline) {
    return `url('data:image/svg+xml,<svg height="11" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M22.8.5l2.7 5-2.7 5H.5V.5z" fill="${encodeURIComponent(color)}" stroke="${encodeURIComponent(outline)}"/></svg>') 1 3 1 1`;
}
function inlineBreakpointArrow(color, outline, opacity = '1') {
    return `url('data:image/svg+xml,<svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H5.80139C6.29382 0.5 6.7549 0.741701 7.03503 1.14669L10.392 6L7.03503 10.8533C6.7549 11.2583 6.29382 11.5 5.80139 11.5H0.5V0.5Z" fill="${encodeURIComponent(color)}" stroke="${encodeURIComponent(outline)}" fill-opacity="${encodeURIComponent(opacity)}"/></svg>')`;
}
function inlineConditionalBreakpointArrow(color, outline, opacity = '1') {
    return `url('data:image/svg+xml,<svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H5.80139C6.29382 0.5 6.75489 0.741701 7.03503 1.14669L10.392 6L7.03503 10.8533C6.75489 11.2583 6.29382 11.5 5.80138 11.5H0.5V0.5Z" fill="${encodeURIComponent(color)}" fill-opacity="${encodeURIComponent(opacity)}" stroke="${encodeURIComponent(outline)}"/><path d="M3.51074 7.75635H4.68408V9H3.51074V7.75635ZM4.68408 7.23779H3.51074V6.56104C3.51074 6.271 3.55615 6.02344 3.64697 5.81836C3.73779 5.61328 3.90039 5.39648 4.13477 5.16797L4.53027 4.77686C4.71484 4.59814 4.83936 4.4502 4.90381 4.33301C4.97119 4.21582 5.00488 4.09424 5.00488 3.96826C5.00488 3.77197 4.9375 3.62402 4.80273 3.52441C4.66797 3.4248 4.46582 3.375 4.19629 3.375C3.9502 3.375 3.69238 3.42773 3.42285 3.5332C3.15625 3.63574 2.88232 3.78955 2.60107 3.99463V2.81689C2.88818 2.65283 3.17822 2.52979 3.47119 2.44775C3.76709 2.36279 4.06299 2.32031 4.35889 2.32031C4.95068 2.32031 5.41504 2.45801 5.75195 2.7334C6.08887 3.00879 6.25732 3.38818 6.25732 3.87158C6.25732 4.09424 6.20752 4.30225 6.10791 4.49561C6.0083 4.68604 5.8208 4.91602 5.54541 5.18555L5.15869 5.56348C4.95947 5.75684 4.83203 5.91504 4.77637 6.03809C4.7207 6.16113 4.69287 6.31201 4.69287 6.49072C4.69287 6.51709 4.69141 6.54785 4.68848 6.58301C4.68848 6.61816 4.68701 6.65625 4.68408 6.69727V7.23779Z" fill="white"/></svg>')`;
}
function inlineLogpointArrow(color, outline, opacity = '1') {
    return `url('data:image/svg+xml,<svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H5.80139C6.29382 0.5 6.7549 0.741701 7.03503 1.14669L10.392 6L7.03503 10.8533C6.7549 11.2583 6.29382 11.5 5.80139 11.5H0.5V0.5Z" fill="${encodeURIComponent(color)}" stroke="${encodeURIComponent(outline)}" fill-opacity="${encodeURIComponent(opacity)}"/><circle cx="3" cy="6" r="1" fill="white"/><circle cx="7" cy="6" r="1" fill="white"/></svg>')`;
}


/***/ }),

/***/ "./src/panels/sources/EditingLocationHistoryManager.ts":
/*!*************************************************************!*\
  !*** ./src/panels/sources/EditingLocationHistoryManager.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditingLocationHistoryManager: () => (/* binding */ EditingLocationHistoryManager),
/* harmony export */   HistoryDepth: () => (/* binding */ HistoryDepth)
/* harmony export */ });
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/*
 * Copyright (C) 2014 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


const HistoryDepth = 20;
class EditingLocationHistoryManager {
    constructor(sourcesView) {
        Object.defineProperty(this, "sourcesView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: sourcesView
        });
        Object.defineProperty(this, "entries", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "current", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: -1
        });
        Object.defineProperty(this, "revealing", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
    trackSourceFrameCursorJumps(sourceFrame) {
        sourceFrame.addEventListener(_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_1__.SourceFrame.Events.EditorUpdate, event => this.onEditorUpdate(event.data, sourceFrame));
    }
    onEditorUpdate(update, sourceFrame) {
        if (update.docChanged) {
            this.mapEntriesFor(sourceFrame.uiSourceCode(), update.changes);
        }
        const prevPos = update.startState.selection.main;
        const newPos = update.state.selection.main;
        const isJump = !this.revealing && prevPos.anchor !== newPos.anchor && update.transactions.some(tr => {
            return Boolean(tr.isUserEvent('select.pointer') || tr.isUserEvent('select.reveal') || tr.isUserEvent('select.search'));
        });
        if (isJump) {
            this.updateCurrentState(sourceFrame.uiSourceCode(), prevPos.head);
            if (this.entries.length > this.current + 1) {
                this.entries.length = this.current + 1;
            }
            this.entries.push(new EditingLocationHistoryEntry(sourceFrame.uiSourceCode(), newPos.head));
            this.current++;
            if (this.entries.length > HistoryDepth) {
                this.entries.shift();
                this.current--;
            }
        }
    }
    updateCurrentState(uiSourceCode, position) {
        if (!this.revealing) {
            const top = this.current >= 0 ? this.entries[this.current] : null;
            if (top?.matches(uiSourceCode)) {
                top.position = position;
            }
        }
    }
    mapEntriesFor(uiSourceCode, change) {
        for (const entry of this.entries) {
            if (entry.matches(uiSourceCode)) {
                entry.position = change.mapPos(entry.position);
            }
        }
    }
    reveal(entry) {
        const uiSourceCode = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__.Workspace.WorkspaceImpl.instance().uiSourceCode(entry.projectId, entry.url);
        if (uiSourceCode) {
            this.revealing = true;
            this.sourcesView.showSourceLocation(uiSourceCode, entry.position, false, true);
            this.revealing = false;
        }
    }
    rollback() {
        if (this.current > 0) {
            this.current--;
            this.reveal(this.entries[this.current]);
        }
    }
    rollover() {
        if (this.current < this.entries.length - 1) {
            this.current++;
            this.reveal(this.entries[this.current]);
        }
    }
    removeHistoryForSourceCode(uiSourceCode) {
        for (let i = this.entries.length - 1; i >= 0; i--) {
            if (this.entries[i].matches(uiSourceCode)) {
                this.entries.splice(i, 1);
                if (this.current >= i) {
                    this.current--;
                }
            }
        }
    }
}
class EditingLocationHistoryEntry {
    constructor(uiSourceCode, position) {
        Object.defineProperty(this, "projectId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "position", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.projectId = uiSourceCode.project().id();
        this.url = uiSourceCode.url();
        this.position = position;
    }
    matches(uiSourceCode) {
        return this.url === uiSourceCode.url() && this.projectId === uiSourceCode.project().id();
    }
}


/***/ }),

/***/ "./src/panels/sources/ProfilePlugin.ts":
/*!*********************************************!*\
  !*** ./src/panels/sources/ProfilePlugin.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemoryProfilePlugin: () => (/* binding */ MemoryProfilePlugin),
/* harmony export */   PerformanceProfilePlugin: () => (/* binding */ PerformanceProfilePlugin)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _Plugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Plugin.js */ "./src/panels/sources/Plugin.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





// Defines plugins that show profiling information in the editor
// gutter when available.
const UIStrings = {
    /**
     *@description The milisecond unit
     */
    ms: 'ms',
    /**
     *@description Unit for data size in DevTools
     */
    mb: 'MB',
    /**
     *@description A unit
     */
    kb: 'kB',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/ProfilePlugin.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class MemoryMarker extends _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.GutterMarker {
    constructor(value) {
        super();
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
        });
    }
    eq(other) {
        return this.value === other.value;
    }
    toDOM() {
        const element = document.createElement('div');
        element.className = 'cm-profileMarker';
        let value = this.value;
        const intensity = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.clamp(Math.log10(1 + 2e-3 * value) / 5, 0.02, 1);
        element.style.backgroundColor = `hsla(217, 100%, 70%, ${intensity.toFixed(3)})`;
        value /= 1e3;
        let units;
        let fractionDigits;
        if (value >= 1e3) {
            units = i18nString(UIStrings.mb);
            value /= 1e3;
            fractionDigits = value >= 20 ? 0 : 1;
        }
        else {
            units = i18nString(UIStrings.kb);
            fractionDigits = 0;
        }
        element.textContent = value.toFixed(fractionDigits);
        const unitElement = element.appendChild(document.createElement('span'));
        unitElement.className = 'cm-units';
        unitElement.textContent = units;
        return element;
    }
}
class PerformanceMarker extends _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.GutterMarker {
    constructor(value) {
        super();
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
        });
    }
    eq(other) {
        return this.value === other.value;
    }
    toDOM() {
        const element = document.createElement('div');
        element.className = 'cm-profileMarker';
        const intensity = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.clamp(Math.log10(1 + 10 * this.value) / 5, 0.02, 1);
        element.textContent = this.value.toFixed(1);
        element.style.backgroundColor = `hsla(44, 100%, 50%, ${intensity.toFixed(3)})`;
        const span = document.createElement('span');
        span.className = 'cm-units';
        span.textContent = i18nString(UIStrings.ms);
        element.appendChild(span);
        return element;
    }
}
function markersFromProfileData(map, state, type) {
    const markerType = type === _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__.SourceFrame.DecoratorType.PERFORMANCE ? PerformanceMarker : MemoryMarker;
    const markers = [];
    for (const [line, value] of map) {
        if (line <= state.doc.lines) {
            const { from } = state.doc.line(line);
            markers.push(new markerType(value).range(from));
        }
    }
    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.RangeSet.of(markers, true);
}
const makeLineLevelProfilePlugin = (type) => class extends _Plugin_js__WEBPACK_IMPORTED_MODULE_4__.Plugin {
    constructor(uiSourceCode) {
        super(uiSourceCode);
        Object.defineProperty(this, "updateEffect", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.StateEffect.define()
        });
        Object.defineProperty(this, "field", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "gutter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "compartment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.Compartment()
        });
        this.field = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.StateField.define({
            create() {
                return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.RangeSet.empty;
            },
            update: (markers, tr) => {
                return tr.effects.reduce((markers, effect) => {
                    return effect.is(this.updateEffect) ? markersFromProfileData(effect.value, tr.state, type) : markers;
                }, markers.map(tr.changes));
            },
        });
        this.gutter = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.gutter({
            markers: view => view.state.field(this.field),
            class: `cm-${type}Gutter`,
        });
    }
    static accepts(uiSourceCode) {
        return uiSourceCode.contentType().hasScripts();
    }
    getLineMap() {
        return this.uiSourceCode.getDecorationData(type);
    }
    editorExtension() {
        const map = this.getLineMap();
        return this.compartment.of(!map ? [] : [this.field.init(state => markersFromProfileData(map, state, type)), this.gutter, theme]);
    }
    decorationChanged(type, editor) {
        const installed = Boolean(editor.state.field(this.field, false));
        const map = this.getLineMap();
        if (!map) {
            if (installed) {
                editor.dispatch({ effects: this.compartment.reconfigure([]) });
            }
        }
        else if (!installed) {
            editor.dispatch({
                effects: this.compartment.reconfigure([this.field.init(state => markersFromProfileData(map, state, type)), this.gutter, theme]),
            });
        }
        else {
            editor.dispatch({ effects: this.updateEffect.of(map) });
        }
    }
};
const theme = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.EditorView.baseTheme({
    '.cm-performanceGutter': {
        width: '60px',
        backgroundColor: 'var(--sys-color-cdt-base-container)',
        marginLeft: '3px',
    },
    '.cm-memoryGutter': {
        width: '48px',
        backgroundColor: 'var(--sys-color-cdt-base-container)',
        marginLeft: '3px',
    },
    '.cm-profileMarker': {
        textAlign: 'right',
        paddingRight: '3px',
    },
    '.cm-profileMarker .cm-units': {
        color: 'var(--sys-color-token-subtle)',
        fontSize: '75%',
        marginLeft: '3px',
    },
});
const MemoryProfilePlugin = makeLineLevelProfilePlugin(_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__.SourceFrame.DecoratorType.MEMORY);
const PerformanceProfilePlugin = makeLineLevelProfilePlugin(_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__.SourceFrame.DecoratorType.PERFORMANCE);


/***/ }),

/***/ "./src/panels/sources/ResourceOriginPlugin.ts":
/*!****************************************************!*\
  !*** ./src/panels/sources/ResourceOriginPlugin.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourceOriginPlugin: () => (/* binding */ ResourceOriginPlugin),
/* harmony export */   linkifier: () => (/* binding */ linkifier)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _Plugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Plugin.js */ "./src/panels/sources/Plugin.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     * @description Text in the bottom toolbar of the Sources panel that lists the source mapped origin scripts.
     * @example {bundle.min.js} PH1
     */
    fromS: '(From {PH1})',
    /**
     * @description Tooltip text for links in the bottom toolbar of the Sources panel that point to source mapped scripts.
     * @example {bundle.min.js} PH1
     */
    sourceMappedFromS: '(Source mapped from {PH1})',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/ResourceOriginPlugin.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class ResourceOriginPlugin extends _Plugin_js__WEBPACK_IMPORTED_MODULE_4__.Plugin {
    static accepts(uiSourceCode) {
        const contentType = uiSourceCode.contentType();
        return contentType.hasScripts() || contentType.isFromSourceMap();
    }
    rightToolbarItems() {
        const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance();
        // Handle source mapped scripts and stylesheets.
        if (this.uiSourceCode.contentType().isFromSourceMap()) {
            const links = [];
            for (const script of debuggerWorkspaceBinding.scriptsForUISourceCode(this.uiSourceCode)) {
                const uiSourceCode = debuggerWorkspaceBinding.uiSourceCodeForScript(script);
                if (!uiSourceCode) {
                    continue;
                }
                const url = uiSourceCode.url();
                const text = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceUtils.displayNameForURL(url);
                const title = i18nString(UIStrings.sourceMappedFromS, { PH1: text });
                links.push(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.Linkifier.Linkifier.linkifyRevealable(uiSourceCode, text, url, title, undefined, 'original-script-location'));
            }
            for (const originURL of _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.SASSSourceMapping.SASSSourceMapping.uiSourceOrigin(this.uiSourceCode)) {
                links.push(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.Linkifier.Linkifier.linkifyURL(originURL));
            }
            if (links.length === 0) {
                return [];
            }
            const element = document.createElement('span');
            links.forEach((link, index) => {
                if (index > 0) {
                    element.append(', ');
                }
                element.append(link);
            });
            return [new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarItem(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getFormatLocalizedString(str_, UIStrings.fromS, { PH1: element }))];
        }
        // Handle anonymous scripts with an originStackTrace.
        for (const script of debuggerWorkspaceBinding.scriptsForUISourceCode(this.uiSourceCode)) {
            if (script.originStackTrace) {
                const link = linkifier.linkifyStackTraceTopFrame(script.debuggerModel.target(), script.originStackTrace);
                return [new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarItem(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getFormatLocalizedString(str_, UIStrings.fromS, { PH1: link }))];
            }
        }
        return [];
    }
}
const linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.Linkifier.Linkifier();


/***/ }),

/***/ "./src/panels/sources/SnippetsPlugin.ts":
/*!**********************************************!*\
  !*** ./src/panels/sources/SnippetsPlugin.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnippetsPlugin: () => (/* binding */ SnippetsPlugin)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/text_editor/text_editor.js */ "./src/ui/components/text_editor/text_editor.ts");
/* harmony import */ var _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../snippets/snippets.js */ "./src/panels/snippets/snippets.ts");
/* harmony import */ var _Plugin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Plugin.js */ "./src/panels/sources/Plugin.ts");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Text in Snippets Plugin of the Sources panel
     */
    enter: '⌘+Enter',
    /**
     *@description Text in Snippets Plugin of the Sources panel
     */
    ctrlenter: 'Ctrl+Enter',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/sources/SnippetsPlugin.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class SnippetsPlugin extends _Plugin_js__WEBPACK_IMPORTED_MODULE_5__.Plugin {
    static accepts(uiSourceCode) {
        return _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_4__.ScriptSnippetFileSystem.isSnippetsUISourceCode(uiSourceCode);
    }
    rightToolbarItems() {
        const runSnippet = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar.createActionButtonForId('debugger.run-snippet');
        runSnippet.setText(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.Platform.isMac() ? i18nString(UIStrings.enter) : i18nString(UIStrings.ctrlenter));
        return [runSnippet];
    }
    editorExtension() {
        return _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_3__.JavaScript.completion();
    }
}


/***/ }),

/***/ "./src/panels/sources/SourcesPanel.ts":
/*!********************************************!*\
  !*** ./src/panels/sources/SourcesPanel.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   DebuggerLocationRevealer: () => (/* binding */ DebuggerLocationRevealer),
/* harmony export */   DebuggerPausedDetailsRevealer: () => (/* binding */ DebuggerPausedDetailsRevealer),
/* harmony export */   QuickSourceView: () => (/* binding */ QuickSourceView),
/* harmony export */   RevealingActionDelegate: () => (/* binding */ RevealingActionDelegate),
/* harmony export */   SourcesPanel: () => (/* binding */ SourcesPanel),
/* harmony export */   UILocationRangeRevealer: () => (/* binding */ UILocationRangeRevealer),
/* harmony export */   UILocationRevealer: () => (/* binding */ UILocationRevealer),
/* harmony export */   UISourceCodeRevealer: () => (/* binding */ UISourceCodeRevealer),
/* harmony export */   lastModificationTimeout: () => (/* binding */ lastModificationTimeout),
/* harmony export */   minToolbarWidth: () => (/* binding */ minToolbarWidth)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/breakpoints/breakpoints.js */ "./src/models/breakpoints/breakpoints.ts");
/* harmony import */ var _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/extensions/extensions.js */ "./src/models/extensions/extensions.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./src/ui/legacy/components/object_ui/object_ui.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../snippets/snippets.js */ "./src/panels/snippets/snippets.ts");
/* harmony import */ var _CallStackSidebarPane_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CallStackSidebarPane.js */ "./src/panels/sources/CallStackSidebarPane.ts");
/* harmony import */ var _DebuggerPausedMessage_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./DebuggerPausedMessage.js */ "./src/panels/sources/DebuggerPausedMessage.ts");
/* harmony import */ var _NavigatorView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./NavigatorView.js */ "./src/panels/sources/NavigatorView.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './sourcesPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _SourcesView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SourcesView.js */ "./src/panels/sources/SourcesView.ts");
/* harmony import */ var _ThreadsSidebarPane_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ThreadsSidebarPane.js */ "./src/panels/sources/ThreadsSidebarPane.ts");
/* harmony import */ var _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./UISourceCodeFrame.js */ "./src/panels/sources/UISourceCodeFrame.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
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
var _a, _UILocationRangeRevealer_instance;
/*
 * Copyright (C) 2008 Apple Inc. All Rights Reserved.
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */























const UIStrings = {
    /**
     *@description Text that appears when user drag and drop something (for example, a file) in Sources Panel of the Sources panel
     */
    dropWorkspaceFolderHere: 'Drop workspace folder here',
    /**
     *@description Text to show more options
     */
    moreOptions: 'More options',
    /**
     * @description Tooltip for the the navigator toggle in the Sources panel. Command to open/show the
     * sidebar containing the navigator tool.
     */
    showNavigator: 'Show navigator',
    /**
     * @description Tooltip for the the navigator toggle in the Sources panel. Command to close/hide
     * the sidebar containing the navigator tool.
     */
    hideNavigator: 'Hide navigator',
    /**
     * @description Screen reader announcement when the navigator sidebar is shown in the Sources panel.
     */
    navigatorShown: 'Navigator sidebar shown',
    /**
     * @description Screen reader announcement when the navigator sidebar is hidden in the Sources panel.
     */
    navigatorHidden: 'Navigator sidebar hidden',
    /**
     * @description Screen reader announcement when the navigator sidebar is shown in the Sources panel.
     */
    debuggerShown: 'Debugger sidebar shown',
    /**
     * @description Screen reader announcement when the navigator sidebar is hidden in the Sources panel.
     */
    debuggerHidden: 'Debugger sidebar hidden',
    /**
     * @description Tooltip for the the debugger toggle in the Sources panel. Command to open/show the
     * sidebar containing the debugger tool.
     */
    showDebugger: 'Show debugger',
    /**
     * @description Tooltip for the the debugger toggle in the Sources panel. Command to close/hide the
     * sidebar containing the debugger tool.
     */
    hideDebugger: 'Hide debugger',
    /**
     *@description Text in Sources Panel of the Sources panel
     */
    groupByFolder: 'Group by folder',
    /**
     *@description Text in Sources Panel of the Sources panel
     */
    groupByAuthored: 'Group by Authored/Deployed',
    /**
     *@description Text in Sources Panel of the Sources panel
     */
    hideIgnoreListed: 'Hide ignore-listed sources',
    /**
     *@description Tooltip text that appears when hovering over the largeicon play button in the Sources Panel of the Sources panel
     */
    resumeWithAllPausesBlockedForMs: 'Resume with all pauses blocked for 500 ms',
    /**
     *@description Tooltip text that appears when hovering over the largeicon terminate execution button in the Sources Panel of the Sources panel
     */
    terminateCurrentJavascriptCall: 'Terminate current JavaScript call',
    /**
     *@description Text in Sources Panel of the Sources panel
     */
    pauseOnCaughtExceptions: 'Pause on caught exceptions',
    /**
     *@description A context menu item in the Sources Panel of the Sources panel
     */
    revealInSidebar: 'Reveal in navigator sidebar',
    /**
     *@description A context menu item in the Sources Panel of the Sources panel when debugging JS code.
     * When clicked, the execution is resumed until it reaches the line specified by the right-click that
     * opened the context menu.
     */
    continueToHere: 'Continue to here',
    /**
     *@description A context menu item in the Console that stores selection as a temporary global variable
     */
    storeAsGlobalVariable: 'Store as global variable',
    /**
     *@description A context menu item in the Console, Sources, and Network panel
     *@example {string} PH1
     */
    copyS: 'Copy {PH1}',
    /**
     *@description A context menu item for strings in the Console, Sources, and Network panel.
     * When clicked, the raw contents of the string is copied to the clipboard.
     */
    copyStringContents: 'Copy string contents',
    /**
     *@description A context menu item for strings in the Console, Sources, and Network panel.
     * When clicked, the string is copied to the clipboard as a valid JavaScript literal.
     */
    copyStringAsJSLiteral: 'Copy string as JavaScript literal',
    /**
     *@description A context menu item for strings in the Console, Sources, and Network panel.
     * When clicked, the string is copied to the clipboard as a valid JSON literal.
     */
    copyStringAsJSONLiteral: 'Copy string as JSON literal',
    /**
     *@description A context menu item in the Sources Panel of the Sources panel
     */
    showFunctionDefinition: 'Show function definition',
    /**
     *@description Text in Sources Panel of the Sources panel
     */
    openInSourcesPanel: 'Open in Sources panel',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/SourcesPanel.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const primitiveRemoteObjectTypes = new Set(['number', 'boolean', 'bigint', 'undefined']);
let sourcesPanelInstance;
class SourcesPanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Panel.Panel {
    constructor() {
        super('sources');
        Object.defineProperty(this, "workspace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "togglePauseAction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "stepOverAction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "stepIntoAction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "stepOutAction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "stepAction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toggleBreakpointsActiveAction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "debugToolbar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "debugToolbarDrawer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "debuggerPausedMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "overlayLoggables", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "splitWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "editorView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "navigatorTabbedLocation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sourcesViewInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toggleNavigatorSidebarButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toggleDebuggerSidebarButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "threadsSidebarPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "watchSidebarPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "callstackPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "liveLocationPool", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastModificationTime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pausedInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "switchToPausedTargetTimeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ignoreExecutionLineEvents", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "executionLineLocation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pauseOnExceptionButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sidebarPaneStack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tabbedLocationHeader", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "extensionSidebarPanesContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sidebarPaneView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.DropTarget.DropTarget(this.element, [_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.DropTarget.Type.Folder], i18nString(UIStrings.dropWorkspaceFolderHere), this.handleDrop.bind(this));
        this.workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.Workspace.WorkspaceImpl.instance();
        this.togglePauseAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ActionRegistry.ActionRegistry.instance().getAction('debugger.toggle-pause');
        this.stepOverAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ActionRegistry.ActionRegistry.instance().getAction('debugger.step-over');
        this.stepIntoAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ActionRegistry.ActionRegistry.instance().getAction('debugger.step-into');
        this.stepOutAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ActionRegistry.ActionRegistry.instance().getAction('debugger.step-out');
        this.stepAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ActionRegistry.ActionRegistry.instance().getAction('debugger.step');
        this.toggleBreakpointsActiveAction =
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ActionRegistry.ActionRegistry.instance().getAction('debugger.toggle-breakpoints-active');
        this.debugToolbar = this.createDebugToolbar();
        this.debugToolbarDrawer = this.createDebugToolbarDrawer();
        this.debuggerPausedMessage = new _DebuggerPausedMessage_js__WEBPACK_IMPORTED_MODULE_17__.DebuggerPausedMessage();
        const initialDebugSidebarWidth = 225;
        this.splitWidget =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.SplitWidget.SplitWidget(true, true, 'sources-panel-split-view-state', initialDebugSidebarWidth);
        this.splitWidget.enableShowModeSaving();
        this.splitWidget.show(this.element);
        // Create scripts navigator
        const initialNavigatorWidth = 225;
        this.editorView =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.SplitWidget.SplitWidget(true, false, 'sources-panel-navigator-split-view-state', initialNavigatorWidth);
        this.editorView.enableShowModeSaving();
        this.splitWidget.setMainWidget(this.editorView);
        // Create navigator tabbed pane with toolbar.
        this.navigatorTabbedLocation = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ViewManager.ViewManager.instance().createTabbedLocation(this.revealNavigatorSidebar.bind(this), 'navigator-view', true, true);
        const tabbedPane = this.navigatorTabbedLocation.tabbedPane();
        tabbedPane.setMinimumSize(100, 25);
        tabbedPane.element.classList.add('navigator-tabbed-pane');
        tabbedPane.headerElement().setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.toolbar('navigator').track({ keydown: 'ArrowUp|ArrowLeft|ArrowDown|ArrowRight|Enter|Space' })}`);
        const navigatorMenuButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Toolbar.ToolbarMenuButton(this.populateNavigatorMenu.bind(this), /* isIconDropdown */ true, /* useSoftMenu */ true, 'more-options');
        navigatorMenuButton.setGlyph('dots-vertical');
        navigatorMenuButton.setTitle(i18nString(UIStrings.moreOptions));
        tabbedPane.rightToolbar().appendToolbarItem(navigatorMenuButton);
        tabbedPane.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.TabbedPane.Events.TabSelected, ({ data: { tabId } }) => _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.sourcesSidebarTabShown(tabId));
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ViewManager.ViewManager.instance().hasViewsForLocation('run-view-sidebar')) {
            const navigatorSplitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.SplitWidget.SplitWidget(false, true, 'source-panel-navigator-sidebar-split-view-state');
            navigatorSplitWidget.setMainWidget(tabbedPane);
            const runViewTabbedPane = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ViewManager.ViewManager.instance()
                .createTabbedLocation(this.revealNavigatorSidebar.bind(this), 'run-view-sidebar')
                .tabbedPane();
            navigatorSplitWidget.setSidebarWidget(runViewTabbedPane);
            navigatorSplitWidget.installResizer(runViewTabbedPane.headerElement());
            this.editorView.setSidebarWidget(navigatorSplitWidget);
        }
        else {
            this.editorView.setSidebarWidget(tabbedPane);
        }
        this.sourcesViewInternal = new _SourcesView_js__WEBPACK_IMPORTED_MODULE_20__.SourcesView();
        this.sourcesViewInternal.addEventListener(_SourcesView_js__WEBPACK_IMPORTED_MODULE_20__.Events.EditorSelected, this.editorSelected.bind(this));
        this.toggleNavigatorSidebarButton = this.editorView.createShowHideSidebarButton(i18nString(UIStrings.showNavigator), i18nString(UIStrings.hideNavigator), i18nString(UIStrings.navigatorShown), i18nString(UIStrings.navigatorHidden), 'navigator');
        this.toggleDebuggerSidebarButton = this.splitWidget.createShowHideSidebarButton(i18nString(UIStrings.showDebugger), i18nString(UIStrings.hideDebugger), i18nString(UIStrings.debuggerShown), i18nString(UIStrings.debuggerHidden), 'debugger');
        this.editorView.setMainWidget(this.sourcesViewInternal);
        this.threadsSidebarPane = null;
        this.watchSidebarPane = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ViewManager.ViewManager.instance().view('sources.watch');
        this.callstackPane = _CallStackSidebarPane_js__WEBPACK_IMPORTED_MODULE_16__.CallStackSidebarPane.instance();
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
            .moduleSetting('sidebar-position')
            .addChangeListener(this.updateSidebarPosition.bind(this));
        this.updateSidebarPosition();
        void this.updateDebuggerButtonsAndStatus();
        this.liveLocationPool = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_7__.LiveLocation.LiveLocationPool();
        this.setTarget(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target));
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
            .moduleSetting('breakpoints-active')
            .addChangeListener(this.breakpointsActiveStateChanged, this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target, this.onCurrentTargetChanged, this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.CallFrame, this.callFrameChanged, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.Events.DebuggerWasEnabled, this.debuggerWasEnabled, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.Events.DebuggerPaused, this.debuggerPaused, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.Events.DebugInfoAttached, this.debugInfoAttached, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.Events.DebuggerResumed, event => this.debuggerResumed(event.data));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.Events.GlobalObjectCleared, event => this.debuggerResumed(event.data));
        _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_9__.ExtensionServer.ExtensionServer.instance().addEventListener(_models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_9__.ExtensionServer.Events.SidebarPaneAdded, this.extensionSidebarPaneAdded, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeTargets(this);
        this.lastModificationTime = -Infinity;
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!sourcesPanelInstance || forceNew) {
            sourcesPanelInstance = new SourcesPanel();
        }
        return sourcesPanelInstance;
    }
    static updateResizerAndSidebarButtons(panel) {
        panel.sourcesViewInternal.leftToolbar().removeToolbarItems();
        panel.sourcesViewInternal.rightToolbar().removeToolbarItems();
        panel.sourcesViewInternal.bottomToolbar().removeToolbarItems();
        const isInWrapper = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(QuickSourceView) &&
            !_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.InspectorView.InspectorView.instance().isDrawerMinimized();
        if (panel.splitWidget.isVertical() || isInWrapper) {
            panel.splitWidget.uninstallResizer(panel.sourcesViewInternal.toolbarContainerElement());
        }
        else {
            panel.splitWidget.installResizer(panel.sourcesViewInternal.toolbarContainerElement());
        }
        if (!isInWrapper) {
            panel.sourcesViewInternal.leftToolbar().appendToolbarItem(panel.toggleNavigatorSidebarButton);
            if (panel.splitWidget.isVertical()) {
                panel.sourcesViewInternal.rightToolbar().appendToolbarItem(panel.toggleDebuggerSidebarButton);
            }
            else {
                panel.sourcesViewInternal.bottomToolbar().appendToolbarItem(panel.toggleDebuggerSidebarButton);
            }
        }
    }
    targetAdded(_target) {
        this.showThreadsIfNeeded();
    }
    targetRemoved(_target) {
    }
    showThreadsIfNeeded() {
        if (_ThreadsSidebarPane_js__WEBPACK_IMPORTED_MODULE_21__.ThreadsSidebarPane.shouldBeShown() && !this.threadsSidebarPane) {
            this.threadsSidebarPane = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ViewManager.ViewManager.instance().view('sources.threads');
            if (this.sidebarPaneStack && this.threadsSidebarPane) {
                this.sidebarPaneStack.appendView(this.threadsSidebarPane, this.splitWidget.isVertical() ? this.watchSidebarPane : this.callstackPane);
            }
        }
    }
    setTarget(target) {
        if (!target) {
            return;
        }
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel);
        if (!debuggerModel) {
            return;
        }
        if (debuggerModel.isPaused()) {
            this.showDebuggerPausedDetails(debuggerModel.debuggerPausedDetails());
        }
        else {
            this.pausedInternal = false;
            this.clearInterface();
            this.toggleDebuggerSidebarButton.setEnabled(true);
        }
    }
    onCurrentTargetChanged({ data: target }) {
        this.setTarget(target);
    }
    paused() {
        return this.pausedInternal || false;
    }
    wasShown() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().setFlavor(SourcesPanel, this);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './sourcesPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        super.wasShown();
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(QuickSourceView)) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.InspectorView.InspectorView.instance().setDrawerMinimized(true);
            SourcesPanel.updateResizerAndSidebarButtons(this);
        }
        this.editorView.setMainWidget(this.sourcesViewInternal);
    }
    willHide() {
        super.willHide();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().setFlavor(SourcesPanel, null);
        const wrapperView = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(QuickSourceView);
        if (wrapperView) {
            wrapperView.showViewInWrapper();
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.InspectorView.InspectorView.instance().setDrawerMinimized(false);
            SourcesPanel.updateResizerAndSidebarButtons(this);
        }
    }
    resolveLocation(locationName) {
        if (locationName === 'sources.sidebar-top' || locationName === 'sources.sidebar-bottom' ||
            locationName === 'sources.sidebar-tabs') {
            return this.sidebarPaneStack || null;
        }
        return this.navigatorTabbedLocation;
    }
    ensureSourcesViewVisible() {
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(QuickSourceView)) {
            return true;
        }
        if (!_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.InspectorView.InspectorView.instance().canSelectPanel('sources')) {
            return false;
        }
        void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ViewManager.ViewManager.instance().showView('sources');
        return true;
    }
    onResize() {
        if (_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('sidebar-position').get() === 'auto') {
            this.element.window().requestAnimationFrame(this.updateSidebarPosition.bind(this));
        } // Do not force layout.
    }
    searchableView() {
        return this.sourcesViewInternal.searchableView();
    }
    toggleNavigatorSidebar() {
        this.editorView.toggleSidebar();
    }
    toggleDebuggerSidebar() {
        this.splitWidget.toggleSidebar();
    }
    debuggerPaused(event) {
        const debuggerModel = event.data;
        const details = debuggerModel.debuggerPausedDetails();
        if (!this.pausedInternal &&
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('auto-focus-on-debugger-paused-enabled').get()) {
            void this.setAsCurrentPanel();
        }
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target) === debuggerModel.target()) {
            this.showDebuggerPausedDetails(details);
        }
        else if (!this.pausedInternal) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target, debuggerModel.target());
        }
    }
    debugInfoAttached(event) {
        const { debuggerModel } = event.data;
        if (!debuggerModel.isPaused()) {
            return;
        }
        const details = debuggerModel.debuggerPausedDetails();
        if (details && _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target) === debuggerModel.target()) {
            this.showDebuggerPausedDetails(details);
        }
    }
    showDebuggerPausedDetails(details) {
        this.pausedInternal = true;
        void this.updateDebuggerButtonsAndStatus();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerPausedDetails, details);
        this.toggleDebuggerSidebarButton.setEnabled(false);
        this.revealDebuggerSidebar();
        window.focus();
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.bringToFront();
        const withOverlay = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target)?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.OverlayModel.OverlayModel) &&
            !_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('disable-paused-state-overlay').get();
        if (withOverlay && !this.overlayLoggables) {
            this.overlayLoggables = { debuggerPausedMessage: {}, resumeButton: {}, stepOverButton: {} };
            _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.registerLoggable(this.overlayLoggables.debuggerPausedMessage, `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.dialog('debugger-paused')}`, null);
            _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.registerLoggable(this.overlayLoggables.resumeButton, `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.action('debugger.toggle-pause')}`, this.overlayLoggables.debuggerPausedMessage);
            _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.registerLoggable(this.overlayLoggables.stepOverButton, `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.action('debugger.step-over')}`, this.overlayLoggables.debuggerPausedMessage);
        }
    }
    maybeLogOverlayAction() {
        if (!this.overlayLoggables) {
            return;
        }
        const byOverlayButton = !document.hasFocus();
        // In the overlary we show two buttons: resume and step over. Both trigger
        // the Debugger.resumed event. The latter however will trigger
        // Debugger.paused shortly after, while the former won't. Here we guess
        // which one was clicked by checking if we are paused again after 0.5s.
        window.setTimeout(() => {
            if (!this.overlayLoggables) {
                return;
            }
            if (byOverlayButton) {
                const details = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerPausedDetails);
                _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.logClick(this.pausedInternal && details?.reason === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.Debugger.PausedEventReason.Step ?
                    this.overlayLoggables.stepOverButton :
                    this.overlayLoggables.resumeButton, new MouseEvent('click'));
            }
            if (!this.pausedInternal) {
                _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.logResize(this.overlayLoggables.debuggerPausedMessage, new DOMRect(0, 0, 0, 0));
                this.overlayLoggables = undefined;
            }
        }, 500);
    }
    debuggerResumed(debuggerModel) {
        this.maybeLogOverlayAction();
        const target = debuggerModel.target();
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target) !== target) {
            return;
        }
        this.pausedInternal = false;
        this.clearInterface();
        this.toggleDebuggerSidebarButton.setEnabled(true);
        this.switchToPausedTargetTimeout = window.setTimeout(this.switchToPausedTarget.bind(this, debuggerModel), 500);
    }
    debuggerWasEnabled(event) {
        const debuggerModel = event.data;
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target) !== debuggerModel.target()) {
            return;
        }
        void this.updateDebuggerButtonsAndStatus();
    }
    get visibleView() {
        return this.sourcesViewInternal.visibleView();
    }
    showUISourceCode(uiSourceCode, location, omitFocus) {
        if (omitFocus) {
            if (!this.isShowing() && !_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(QuickSourceView)) {
                return;
            }
        }
        else {
            this.showEditor();
        }
        this.sourcesViewInternal.showSourceLocation(uiSourceCode, location, omitFocus);
    }
    showEditor() {
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(QuickSourceView)) {
            return;
        }
        void this.setAsCurrentPanel();
    }
    showUILocation(uiLocation, omitFocus) {
        const { uiSourceCode, lineNumber, columnNumber } = uiLocation;
        this.showUISourceCode(uiSourceCode, { lineNumber, columnNumber }, omitFocus);
    }
    async revealInNavigator(uiSourceCode, skipReveal) {
        const viewManager = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ViewManager.ViewManager.instance();
        for (const view of viewManager.viewsForLocation(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ViewManager.ViewLocationValues.NAVIGATOR_VIEW)) {
            const navigatorView = await view.widget();
            if (navigatorView instanceof _NavigatorView_js__WEBPACK_IMPORTED_MODULE_18__.NavigatorView && navigatorView.acceptProject(uiSourceCode.project())) {
                navigatorView.revealUISourceCode(uiSourceCode, true);
                this.navigatorTabbedLocation.tabbedPane().selectTab(view.viewId(), true);
                if (!skipReveal) {
                    this.editorView.showBoth(true);
                    navigatorView.focus();
                }
                break;
            }
        }
    }
    addExperimentMenuItem(menuSection, experiment, menuItem) {
        // menu handler
        function toggleExperiment() {
            const checked = _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled(experiment);
            _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.setEnabled(experiment, !checked);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.experimentChanged(experiment, checked);
            // Need to signal to the NavigatorView that grouping has changed. Unfortunately,
            // it can't listen to an experiment, and this class doesn't directly interact
            // with it, so we will convince it a different grouping setting changed. When we switch
            // from using an experiment to a setting, it will listen to that setting and we
            // won't need to do this.
            const groupByFolderSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('navigator-group-by-folder');
            groupByFolderSetting.set(groupByFolderSetting.get());
        }
        menuSection.appendCheckboxItem(menuItem, toggleExperiment, {
            checked: _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled(experiment),
            additionalElement: _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_11__.Icon.create('experiment'),
            jslogContext: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toKebabCase(experiment),
        });
    }
    populateNavigatorMenu(contextMenu) {
        const groupByFolderSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('navigator-group-by-folder');
        contextMenu.appendItemsAtLocation('navigatorMenu');
        contextMenu.viewSection().appendCheckboxItem(i18nString(UIStrings.groupByFolder), () => groupByFolderSetting.set(!groupByFolderSetting.get()), { checked: groupByFolderSetting.get(), jslogContext: groupByFolderSetting.name });
        this.addExperimentMenuItem(contextMenu.viewSection(), _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.ExperimentName.AUTHORED_DEPLOYED_GROUPING, i18nString(UIStrings.groupByAuthored));
        this.addExperimentMenuItem(contextMenu.viewSection(), _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.ExperimentName.JUST_MY_CODE, i18nString(UIStrings.hideIgnoreListed));
    }
    setIgnoreExecutionLineEvents(ignoreExecutionLineEvents) {
        this.ignoreExecutionLineEvents = ignoreExecutionLineEvents;
    }
    updateLastModificationTime() {
        this.lastModificationTime = window.performance.now();
    }
    async executionLineChanged(liveLocation) {
        const uiLocation = await liveLocation.uiLocation();
        if (liveLocation.isDisposed()) {
            return;
        }
        if (!uiLocation) {
            return;
        }
        if (window.performance.now() - this.lastModificationTime < lastModificationTimeout) {
            return;
        }
        this.sourcesViewInternal.showSourceLocation(uiLocation.uiSourceCode, uiLocation, undefined, true);
    }
    lastModificationTimeoutPassedForTest() {
        lastModificationTimeout = Number.MIN_VALUE;
    }
    updateLastModificationTimeForTest() {
        lastModificationTimeout = Number.MAX_VALUE;
    }
    async callFrameChanged() {
        const callFrame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.CallFrame);
        if (!callFrame) {
            return;
        }
        if (this.executionLineLocation) {
            this.executionLineLocation.dispose();
        }
        this.executionLineLocation =
            await _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().createCallFrameLiveLocation(callFrame.location(), this.executionLineChanged.bind(this), this.liveLocationPool);
    }
    async updateDebuggerButtonsAndStatus() {
        const currentTarget = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target);
        const currentDebuggerModel = currentTarget ? currentTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel) : null;
        if (!currentDebuggerModel) {
            this.togglePauseAction.setEnabled(false);
            this.stepOverAction.setEnabled(false);
            this.stepIntoAction.setEnabled(false);
            this.stepOutAction.setEnabled(false);
            this.stepAction.setEnabled(false);
        }
        else if (this.pausedInternal) {
            this.togglePauseAction.setToggled(true);
            this.togglePauseAction.setEnabled(true);
            this.stepOverAction.setEnabled(true);
            this.stepIntoAction.setEnabled(true);
            this.stepOutAction.setEnabled(true);
            this.stepAction.setEnabled(true);
        }
        else {
            this.togglePauseAction.setToggled(false);
            this.togglePauseAction.setEnabled(!currentDebuggerModel.isPausing());
            this.stepOverAction.setEnabled(false);
            this.stepIntoAction.setEnabled(false);
            this.stepOutAction.setEnabled(false);
            this.stepAction.setEnabled(false);
        }
        const details = currentDebuggerModel ? currentDebuggerModel.debuggerPausedDetails() : null;
        await this.debuggerPausedMessage.render(details, _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance(), _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_8__.BreakpointManager.BreakpointManager.instance());
        if (details) {
            this.updateDebuggerButtonsAndStatusForTest();
        }
    }
    updateDebuggerButtonsAndStatusForTest() {
    }
    clearInterface() {
        void this.updateDebuggerButtonsAndStatus();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerPausedDetails, null);
        if (this.switchToPausedTargetTimeout) {
            clearTimeout(this.switchToPausedTargetTimeout);
        }
        this.liveLocationPool.disposeAll();
    }
    switchToPausedTarget(debuggerModel) {
        delete this.switchToPausedTargetTimeout;
        if (this.pausedInternal || debuggerModel.isPaused()) {
            return;
        }
        for (const debuggerModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel)) {
            if (debuggerModel.isPaused()) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target, debuggerModel.target());
                break;
            }
        }
    }
    runSnippet() {
        const uiSourceCode = this.sourcesViewInternal.currentUISourceCode();
        if (uiSourceCode) {
            void _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_15__.ScriptSnippetFileSystem.evaluateScriptSnippet(uiSourceCode);
        }
    }
    editorSelected(event) {
        const uiSourceCode = event.data;
        if (this.editorView.mainWidget() &&
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('auto-reveal-in-navigator').get()) {
            void this.revealInNavigator(uiSourceCode, true);
        }
    }
    togglePause() {
        const target = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target);
        if (!target) {
            return true;
        }
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel);
        if (!debuggerModel) {
            return true;
        }
        if (this.pausedInternal) {
            this.pausedInternal = false;
            debuggerModel.resume();
        }
        else {
            // Make sure pauses didn't stick skipped.
            debuggerModel.pause();
        }
        this.clearInterface();
        return true;
    }
    prepareToResume() {
        if (!this.pausedInternal) {
            return null;
        }
        this.pausedInternal = false;
        this.clearInterface();
        const target = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target);
        return target ? target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel) : null;
    }
    longResume() {
        const debuggerModel = this.prepareToResume();
        if (debuggerModel) {
            debuggerModel.skipAllPausesUntilReloadOrTimeout(500);
            debuggerModel.resume();
        }
    }
    terminateExecution() {
        const debuggerModel = this.prepareToResume();
        if (debuggerModel) {
            void debuggerModel.runtimeModel().terminateExecution();
            debuggerModel.resume();
        }
    }
    stepOver() {
        const debuggerModel = this.prepareToResume();
        if (debuggerModel) {
            void debuggerModel.stepOver();
        }
        return true;
    }
    stepInto() {
        const debuggerModel = this.prepareToResume();
        if (debuggerModel) {
            void debuggerModel.stepInto();
        }
        return true;
    }
    stepIntoAsync() {
        const debuggerModel = this.prepareToResume();
        if (debuggerModel) {
            debuggerModel.scheduleStepIntoAsync();
        }
        return true;
    }
    stepOut() {
        const debuggerModel = this.prepareToResume();
        if (debuggerModel) {
            void debuggerModel.stepOut();
        }
        return true;
    }
    async continueToLocation(uiLocation) {
        const executionContext = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.RuntimeModel.ExecutionContext);
        if (!executionContext) {
            return;
        }
        // Always use 0 column.
        const rawLocations = await _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().uiLocationToRawLocations(uiLocation.uiSourceCode, uiLocation.lineNumber, 0);
        const rawLocation = rawLocations.find(location => location.debuggerModel === executionContext.debuggerModel);
        if (rawLocation && this.prepareToResume()) {
            rawLocation.continueToLocation();
        }
    }
    toggleBreakpointsActive() {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
            .moduleSetting('breakpoints-active')
            .set(!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('breakpoints-active').get());
    }
    breakpointsActiveStateChanged() {
        const active = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('breakpoints-active').get();
        this.toggleBreakpointsActiveAction.setToggled(!active);
        this.sourcesViewInternal.toggleBreakpointsActiveState(active);
    }
    createDebugToolbar() {
        const debugToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Toolbar.Toolbar('scripts-debug-toolbar');
        debugToolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.toolbar('debug').track({ keydown: 'ArrowUp|ArrowLeft|ArrowDown|ArrowRight|Enter|Space' })}`);
        const longResumeButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Toolbar.ToolbarButton(i18nString(UIStrings.resumeWithAllPausesBlockedForMs), 'play');
        longResumeButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Toolbar.ToolbarButton.Events.Click, this.longResume, this);
        const terminateExecutionButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Toolbar.ToolbarButton(i18nString(UIStrings.terminateCurrentJavascriptCall), 'stop');
        terminateExecutionButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Toolbar.ToolbarButton.Events.Click, this.terminateExecution, this);
        const pauseActionButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Toolbar.Toolbar.createLongPressActionButton(this.togglePauseAction, [terminateExecutionButton, longResumeButton], []);
        pauseActionButton.toggleOnClick(false);
        debugToolbar.appendToolbarItem(pauseActionButton);
        debugToolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Toolbar.Toolbar.createActionButton(this.stepOverAction));
        debugToolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Toolbar.Toolbar.createActionButton(this.stepIntoAction));
        debugToolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Toolbar.Toolbar.createActionButton(this.stepOutAction));
        debugToolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Toolbar.Toolbar.createActionButton(this.stepAction));
        debugToolbar.appendSeparator();
        debugToolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Toolbar.Toolbar.createActionButton(this.toggleBreakpointsActiveAction));
        return debugToolbar;
    }
    createDebugToolbarDrawer() {
        const debugToolbarDrawer = document.createElement('div');
        debugToolbarDrawer.classList.add('scripts-debug-toolbar-drawer');
        const label = i18nString(UIStrings.pauseOnCaughtExceptions);
        const setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('pause-on-caught-exception');
        debugToolbarDrawer.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.SettingsUI.createSettingCheckbox(label, setting, true));
        return debugToolbarDrawer;
    }
    appendApplicableItems(event, contextMenu, target) {
        if (target instanceof _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.UISourceCode.UISourceCode) {
            this.appendUISourceCodeItems(event, contextMenu, target);
            return;
        }
        if (target instanceof _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_22__.UISourceCodeFrame) {
            this.appendUISourceCodeFrameItems(contextMenu, target);
            return;
        }
        if (target instanceof _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.UISourceCode.UILocation) {
            this.appendUILocationItems(contextMenu, target);
            return;
        }
        if (target instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.RemoteObject.RemoteObject) {
            this.appendRemoteObjectItems(contextMenu, target);
            return;
        }
        this.appendNetworkRequestItems(contextMenu, target);
    }
    appendUISourceCodeItems(event, contextMenu, uiSourceCode) {
        if (!event.target) {
            return;
        }
        const eventTarget = event.target;
        if (!uiSourceCode.project().isServiceProject() &&
            !eventTarget.isSelfOrDescendant(this.navigatorTabbedLocation.widget().element) &&
            !(_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled(_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.ExperimentName.JUST_MY_CODE) &&
                _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_7__.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode))) {
            contextMenu.revealSection().appendItem(i18nString(UIStrings.revealInSidebar), this.revealInNavigator.bind(this, uiSourceCode), {
                jslogContext: 'sources.reveal-in-navigator-sidebar',
            });
        }
        // Ignore list only works for JavaScript debugging.
        if (uiSourceCode.contentType().hasScripts() &&
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance()
                .scriptsForUISourceCode(uiSourceCode)
                .every(script => script.isJavaScript())) {
            this.callstackPane.appendIgnoreListURLContextMenuItems(contextMenu, uiSourceCode);
        }
    }
    appendUISourceCodeFrameItems(contextMenu, target) {
        if (target.uiSourceCode().contentType().isFromSourceMap() || target.textEditor.state.selection.main.empty) {
            return;
        }
        contextMenu.debugSection().appendAction('debugger.evaluate-selection');
    }
    appendUILocationItems(contextMenu, uiLocation) {
        const uiSourceCode = uiLocation.uiSourceCode;
        if (!_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance()
            .scriptsForUISourceCode(uiSourceCode)
            .every(script => script.isJavaScript())) {
            // Ignore List and 'Continue to here' currently only works for JavaScript debugging.
            return;
        }
        const contentType = uiSourceCode.contentType();
        if (contentType.hasScripts()) {
            const target = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target);
            const debuggerModel = target ? target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel) : null;
            if (debuggerModel && debuggerModel.isPaused()) {
                contextMenu.debugSection().appendItem(i18nString(UIStrings.continueToHere), this.continueToLocation.bind(this, uiLocation), { jslogContext: 'continue-to-here' });
            }
            this.callstackPane.appendIgnoreListURLContextMenuItems(contextMenu, uiSourceCode);
        }
    }
    appendRemoteObjectItems(contextMenu, remoteObject) {
        const indent = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').get();
        const executionContext = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.RuntimeModel.ExecutionContext);
        function getObjectTitle() {
            if (remoteObject.type === 'wasm') {
                return remoteObject.subtype;
            }
            if (remoteObject.subtype === 'node') {
                return 'outerHTML';
            }
            return remoteObject.type;
        }
        const copyContextMenuTitle = getObjectTitle();
        contextMenu.debugSection().appendItem(i18nString(UIStrings.storeAsGlobalVariable), () => executionContext?.target()
            .model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ConsoleModel.ConsoleModel)
            ?.saveToTempVariable(executionContext, remoteObject), { jslogContext: 'store-as-global-variable' });
        const ctxMenuClipboardSection = contextMenu.clipboardSection();
        const inspectorFrontendHost = _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance;
        if (remoteObject.type === 'string') {
            ctxMenuClipboardSection.appendItem(i18nString(UIStrings.copyStringContents), () => {
                inspectorFrontendHost.copyText(remoteObject.value);
            }, { jslogContext: 'copy-string-contents' });
            ctxMenuClipboardSection.appendItem(i18nString(UIStrings.copyStringAsJSLiteral), () => {
                inspectorFrontendHost.copyText(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.formatAsJSLiteral(remoteObject.value));
            }, { jslogContext: 'copy-string-as-js-literal' });
            ctxMenuClipboardSection.appendItem(i18nString(UIStrings.copyStringAsJSONLiteral), () => {
                inspectorFrontendHost.copyText(JSON.stringify(remoteObject.value));
            }, { jslogContext: 'copy-string-as-json-literal' });
        }
        // We are trying to copy a primitive value.
        else if (primitiveRemoteObjectTypes.has(remoteObject.type)) {
            ctxMenuClipboardSection.appendItem(i18nString(UIStrings.copyS, { PH1: String(copyContextMenuTitle) }), () => {
                inspectorFrontendHost.copyText(remoteObject.description);
            }, { jslogContext: 'copy-primitive' });
        }
        // We are trying to copy a remote object.
        else if (remoteObject.type === 'object') {
            const copyDecodedValueHandler = async () => {
                const result = await remoteObject.callFunctionJSON(toStringForClipboard, [{
                        value: {
                            subtype: remoteObject.subtype,
                            indent: indent,
                        },
                    }]);
                inspectorFrontendHost.copyText(result);
            };
            ctxMenuClipboardSection.appendItem(i18nString(UIStrings.copyS, { PH1: String(copyContextMenuTitle) }), copyDecodedValueHandler, { jslogContext: 'copy-object' });
        }
        else if (remoteObject.type === 'function') {
            contextMenu.debugSection().appendItem(i18nString(UIStrings.showFunctionDefinition), this.showFunctionDefinition.bind(this, remoteObject), { jslogContext: 'show-function-definition' });
        }
        function toStringForClipboard(data) {
            const subtype = data.subtype;
            const indent = data.indent;
            if (subtype === 'map') {
                if (this instanceof Map) {
                    const elements = Array.from(this.entries());
                    const literal = elements.length === 0 ? '' : JSON.stringify(elements, null, indent);
                    return `new Map(${literal})`;
                }
                return undefined;
            }
            if (subtype === 'set') {
                if (this instanceof Set) {
                    const values = Array.from(this.values());
                    const literal = values.length === 0 ? '' : JSON.stringify(values, null, indent);
                    return `new Set(${literal})`;
                }
                return undefined;
            }
            if (subtype === 'node') {
                return this instanceof Element ? this.outerHTML : undefined;
            }
            if (subtype && typeof this === 'undefined') {
                return String(subtype);
            }
            try {
                return JSON.stringify(this, null, indent);
            }
            catch (error) {
                return String(this);
            }
        }
    }
    appendNetworkRequestItems(contextMenu, request) {
        const uiSourceCode = this.workspace.uiSourceCodeForURL(request.url());
        if (!uiSourceCode) {
            return;
        }
        const openText = i18nString(UIStrings.openInSourcesPanel);
        const callback = this.showUILocation.bind(this, uiSourceCode.uiLocation(0, 0));
        contextMenu.revealSection().appendItem(openText, callback, { jslogContext: 'reveal-in-sources' });
    }
    showFunctionDefinition(remoteObject) {
        void _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.RemoteObject.RemoteFunction.objectAsFunction(remoteObject)
            .targetFunction()
            .then(targetFunction => targetFunction.debuggerModel()
            .functionDetailsPromise(targetFunction)
            .then(this.didGetFunctionDetails.bind(this)));
    }
    async didGetFunctionDetails(response) {
        if (!response || !response.location) {
            return;
        }
        const uiLocation = await _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(response.location);
        if (uiLocation) {
            this.showUILocation(uiLocation);
        }
    }
    revealNavigatorSidebar() {
        void this.setAsCurrentPanel();
        this.editorView.showBoth(true);
    }
    revealDebuggerSidebar() {
        if (!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('auto-focus-on-debugger-paused-enabled').get()) {
            return;
        }
        void this.setAsCurrentPanel();
        this.splitWidget.showBoth(true);
    }
    updateSidebarPosition() {
        let vertically;
        const position = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('sidebar-position').get();
        if (position === 'right') {
            vertically = false;
        }
        else if (position === 'bottom') {
            vertically = true;
        }
        else {
            vertically = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.InspectorView.InspectorView.instance().element.offsetWidth < 680;
        }
        if (this.sidebarPaneView && vertically === !this.splitWidget.isVertical()) {
            return;
        }
        if (this.sidebarPaneView && this.sidebarPaneView.shouldHideOnDetach()) {
            return;
        } // We can't reparent extension iframes.
        if (this.sidebarPaneView) {
            this.sidebarPaneView.detach();
        }
        this.splitWidget.setVertical(!vertically);
        this.splitWidget.element.classList.toggle('sources-split-view-vertical', vertically);
        SourcesPanel.updateResizerAndSidebarButtons(this);
        // Create vertical box with stack.
        const vbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Widget.VBox();
        vbox.element.appendChild(this.debugToolbar.element);
        vbox.element.appendChild(this.debugToolbarDrawer);
        vbox.setMinimumAndPreferredSizes(minToolbarWidth, 25, minToolbarWidth, 100);
        this.sidebarPaneStack = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ViewManager.ViewManager.instance().createStackLocation(this.revealDebuggerSidebar.bind(this), undefined, 'debug');
        this.sidebarPaneStack.widget().element.classList.add('overflow-auto');
        this.sidebarPaneStack.widget().show(vbox.element);
        this.sidebarPaneStack.widget().element.appendChild(this.debuggerPausedMessage.element());
        this.sidebarPaneStack.appendApplicableItems('sources.sidebar-top');
        if (this.threadsSidebarPane) {
            this.sidebarPaneStack.appendView(this.threadsSidebarPane);
        }
        const jsBreakpoints = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ViewManager.ViewManager.instance().view('sources.js-breakpoints');
        const scopeChainView = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ViewManager.ViewManager.instance().view('sources.scope-chain');
        if (this.tabbedLocationHeader) {
            this.splitWidget.uninstallResizer(this.tabbedLocationHeader);
            this.tabbedLocationHeader = null;
        }
        if (!vertically) {
            // Populate the rest of the stack.
            this.sidebarPaneStack.appendView(this.watchSidebarPane);
            void this.sidebarPaneStack.showView(jsBreakpoints);
            void this.sidebarPaneStack.showView(scopeChainView);
            void this.sidebarPaneStack.showView(this.callstackPane);
            this.extensionSidebarPanesContainer = this.sidebarPaneStack;
            this.sidebarPaneView = vbox;
            this.splitWidget.uninstallResizer(this.debugToolbar.gripElementForResize());
        }
        else {
            const splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.SplitWidget.SplitWidget(true, true, 'sources-panel-debugger-sidebar-split-view-state', 0.5);
            splitWidget.setMainWidget(vbox);
            // Populate the left stack.
            void this.sidebarPaneStack.showView(jsBreakpoints);
            void this.sidebarPaneStack.showView(this.callstackPane);
            const tabbedLocation = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ViewManager.ViewManager.instance().createTabbedLocation(this.revealDebuggerSidebar.bind(this));
            splitWidget.setSidebarWidget(tabbedLocation.tabbedPane());
            this.tabbedLocationHeader = tabbedLocation.tabbedPane().headerElement();
            this.splitWidget.installResizer(this.tabbedLocationHeader);
            this.splitWidget.installResizer(this.debugToolbar.gripElementForResize());
            tabbedLocation.appendView(scopeChainView);
            tabbedLocation.appendView(this.watchSidebarPane);
            tabbedLocation.appendApplicableItems('sources.sidebar-tabs');
            this.extensionSidebarPanesContainer = tabbedLocation;
            this.sidebarPaneView = splitWidget;
        }
        this.sidebarPaneStack.appendApplicableItems('sources.sidebar-bottom');
        const extensionSidebarPanes = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_9__.ExtensionServer.ExtensionServer.instance().sidebarPanes();
        for (let i = 0; i < extensionSidebarPanes.length; ++i) {
            this.addExtensionSidebarPane(extensionSidebarPanes[i]);
        }
        this.splitWidget.setSidebarWidget(this.sidebarPaneView);
    }
    setAsCurrentPanel() {
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ViewManager.ViewManager.instance().showView('sources');
    }
    extensionSidebarPaneAdded(event) {
        this.addExtensionSidebarPane(event.data);
    }
    addExtensionSidebarPane(pane) {
        if (pane.panelName() === this.name) {
            this.extensionSidebarPanesContainer.appendView(pane);
        }
    }
    sourcesView() {
        return this.sourcesViewInternal;
    }
    handleDrop(dataTransfer) {
        const items = dataTransfer.items;
        if (!items.length) {
            return;
        }
        const entry = items[0].webkitGetAsEntry();
        if (entry && entry.isDirectory) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.upgradeDraggedFileSystemPermissions(entry.filesystem);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.WorkspaceDropFolder);
            void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ViewManager.ViewManager.instance().showView('navigator-files');
        }
    }
}
let lastModificationTimeout = 200;
const minToolbarWidth = 215;
class UILocationRevealer {
    async reveal(uiLocation, omitFocus) {
        SourcesPanel.instance().showUILocation(uiLocation, omitFocus);
    }
}
class UILocationRangeRevealer {
    static instance(opts = { forceNew: false }) {
        if (!__classPrivateFieldGet(_a, _a, "f", _UILocationRangeRevealer_instance) || opts.forceNew) {
            __classPrivateFieldSet(_a, _a, new _a(), "f", _UILocationRangeRevealer_instance);
        }
        return __classPrivateFieldGet(_a, _a, "f", _UILocationRangeRevealer_instance);
    }
    async reveal(uiLocationRange, omitFocus) {
        const { uiSourceCode, range: { start: from, end: to } } = uiLocationRange;
        SourcesPanel.instance().showUISourceCode(uiSourceCode, { from, to }, omitFocus);
    }
}
_a = UILocationRangeRevealer;
_UILocationRangeRevealer_instance = { value: void 0 };
class DebuggerLocationRevealer {
    async reveal(rawLocation, omitFocus) {
        const uiLocation = await _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(rawLocation);
        if (uiLocation) {
            SourcesPanel.instance().showUILocation(uiLocation, omitFocus);
        }
    }
}
class UISourceCodeRevealer {
    async reveal(uiSourceCode, omitFocus) {
        SourcesPanel.instance().showUISourceCode(uiSourceCode, undefined, omitFocus);
    }
}
class DebuggerPausedDetailsRevealer {
    async reveal(_object) {
        if (_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('auto-focus-on-debugger-paused-enabled').get()) {
            return SourcesPanel.instance().setAsCurrentPanel();
        }
    }
}
class RevealingActionDelegate {
    handleAction(context, actionId) {
        const panel = SourcesPanel.instance();
        if (!panel.ensureSourcesViewVisible()) {
            return false;
        }
        switch (actionId) {
            case 'debugger.toggle-pause': {
                // This action can be triggered both on the DevTools front-end itself,
                // or on the inspected target. If triggered on the DevTools front-end,
                // it will take care of resuming.
                //
                // If triggered on the target, NOT in hosted mode:
                //   * ..and the paused overlay is enabled:
                //       => do not take any action here, as the paused overlay will resume
                //   * ..and the paused overlay is disabled:
                //       => take care of the resume here
                // If triggered on the target in hosted mode:
                //   * ..and the paused overlay is enabled:
                //       => execution will not reach here, as shortcuts are not forwarded
                //          and the paused overlay will resume
                //   * ..and the paused overlay is disabled:
                //       => overlay will not take care of resume, and neither will
                //          DevTools as no shortcuts are forwarded from the target
                // Do not trigger a resume action, if: the shortcut was forwarded and the
                // paused overlay is enabled.
                const actionHandledInPausedOverlay = context.flavor(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ShortcutRegistry.ForwardedShortcut) &&
                    !_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('disable-paused-state-overlay').get();
                if (actionHandledInPausedOverlay) {
                    // Taken care of by inspector overlay: handled set to true to
                    // register user metric.
                    return true;
                }
                panel.togglePause();
                return true;
            }
        }
        return false;
    }
}
class ActionDelegate {
    handleAction(context, actionId) {
        const panel = SourcesPanel.instance();
        switch (actionId) {
            case 'debugger.step-over': {
                panel.stepOver();
                return true;
            }
            case 'debugger.step-into': {
                panel.stepIntoAsync();
                return true;
            }
            case 'debugger.step': {
                panel.stepInto();
                return true;
            }
            case 'debugger.step-out': {
                panel.stepOut();
                return true;
            }
            case 'debugger.run-snippet': {
                panel.runSnippet();
                return true;
            }
            case 'debugger.toggle-breakpoints-active': {
                panel.toggleBreakpointsActive();
                return true;
            }
            case 'debugger.evaluate-selection': {
                const frame = context.flavor(_UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_22__.UISourceCodeFrame);
                if (frame) {
                    const { state: editorState } = frame.textEditor;
                    let text = editorState.sliceDoc(editorState.selection.main.from, editorState.selection.main.to);
                    const executionContext = context.flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.RuntimeModel.ExecutionContext);
                    const consoleModel = executionContext?.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ConsoleModel.ConsoleModel);
                    if (executionContext && consoleModel) {
                        const message = consoleModel.addCommandMessage(executionContext, text);
                        text = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_12__.JavaScriptREPL.JavaScriptREPL.wrapObjectLiteral(text);
                        void consoleModel.evaluateCommandInConsole(executionContext, message, text, /* useCommandLineAPI */ true);
                    }
                }
                return true;
            }
            case 'sources.reveal-in-navigator-sidebar': {
                const uiSourceCode = panel.sourcesView().currentUISourceCode();
                if (uiSourceCode === null) {
                    return false;
                }
                void panel.revealInNavigator(uiSourceCode);
                return true;
            }
            case 'sources.toggle-navigator-sidebar': {
                panel.toggleNavigatorSidebar();
                return true;
            }
            case 'sources.toggle-debugger-sidebar': {
                panel.toggleDebuggerSidebar();
                return true;
            }
        }
        return false;
    }
}
class QuickSourceView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Widget.VBox {
    constructor() {
        super();
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.classList.add('sources-view-wrapper');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.panel('sources.quick').track({ resize: true })}`);
        this.view = SourcesPanel.instance().sourcesView();
    }
    wasShown() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().setFlavor(QuickSourceView, this);
        super.wasShown();
        if (!SourcesPanel.instance().isShowing()) {
            this.showViewInWrapper();
        }
        else {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.InspectorView.InspectorView.instance().setDrawerMinimized(true);
        }
        SourcesPanel.updateResizerAndSidebarButtons(SourcesPanel.instance());
    }
    willHide() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.InspectorView.InspectorView.instance().setDrawerMinimized(false);
        queueMicrotask(() => {
            SourcesPanel.updateResizerAndSidebarButtons(SourcesPanel.instance());
        });
        super.willHide();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().setFlavor(QuickSourceView, null);
    }
    showViewInWrapper() {
        this.view.show(this.element);
    }
}


/***/ }),

/***/ "./src/panels/sources/SourcesView.ts":
/*!*******************************************!*\
  !*** ./src/panels/sources/SourcesView.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   SourcesView: () => (/* binding */ SourcesView),
/* harmony export */   SwitchFileActionDelegate: () => (/* binding */ SwitchFileActionDelegate),
/* harmony export */   getRegisteredEditorActions: () => (/* binding */ getRegisteredEditorActions),
/* harmony export */   registerEditorAction: () => (/* binding */ registerEditorAction)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/components/quick_open/quick_open.js */ "./src/ui/legacy/components/quick_open/quick_open.ts");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/sources/components/components.ts");
/* harmony import */ var _EditingLocationHistoryManager_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EditingLocationHistoryManager.js */ "./src/panels/sources/EditingLocationHistoryManager.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './sourcesView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _TabbedEditorContainer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TabbedEditorContainer.js */ "./src/panels/sources/TabbedEditorContainer.ts");
/* harmony import */ var _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./UISourceCodeFrame.js */ "./src/panels/sources/UISourceCodeFrame.ts");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SourcesView_instances, _SourcesView_onScopeChange, _SourcesView_sourceViewTypeForWidget, _SourcesView_sourceViewTypeForUISourceCode, _SourcesView_uiSourceCodeTitleChanged;

















const UIStrings = {
    /**
     *@description Text to open a file
     */
    openFile: 'Open file',
    /**
     *@description Text to run commands
     */
    runCommand: 'Run command',
    /**
     *@description Text in Sources View of the Sources panel. This sentence follows by a list of actions.
     */
    workspaceDropInAFolderToSyncSources: 'To sync edits to the workspace, drop a folder with your sources here or',
    /**
     *@description Text in Sources View of the Sources panel.
     */
    selectFolder: 'Select folder',
    /**
     *@description Accessible label for Sources placeholder view actions list
     */
    sourceViewActions: 'Source View Actions',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/SourcesView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class SourcesView extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.VBox) {
    constructor() {
        super();
        _SourcesView_instances.add(this);
        Object.defineProperty(this, "selectedIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchableViewInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sourceViewByUISourceCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "editorContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "historyManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toolbarContainerElementInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "scriptViewToolbar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bottomToolbarInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toolbarChangedListener", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "focusedPlaceholderElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.id = 'sources-panel-sources-view';
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.pane('editor').track({ keydown: 'Escape' })}`);
        this.setMinimumAndPreferredSizes(88, 52, 150, 100);
        this.selectedIndex = 0;
        const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.WorkspaceImpl.instance();
        this.searchableViewInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.SearchableView.SearchableView(this, this, 'sources-view-search-config');
        this.searchableViewInternal.setMinimalSearchQuerySize(0);
        this.searchableViewInternal.show(this.element);
        this.sourceViewByUISourceCode = new Map();
        this.editorContainer = new _TabbedEditorContainer_js__WEBPACK_IMPORTED_MODULE_15__.TabbedEditorContainer(this, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('previously-viewed-files', []), this.placeholderElement(), this.focusedPlaceholderElement);
        this.editorContainer.show(this.searchableViewInternal.element);
        this.editorContainer.addEventListener(_TabbedEditorContainer_js__WEBPACK_IMPORTED_MODULE_15__.Events.EditorSelected, this.editorSelected, this);
        this.editorContainer.addEventListener(_TabbedEditorContainer_js__WEBPACK_IMPORTED_MODULE_15__.Events.EditorClosed, this.editorClosed, this);
        this.historyManager = new _EditingLocationHistoryManager_js__WEBPACK_IMPORTED_MODULE_13__.EditingLocationHistoryManager(this);
        this.toolbarContainerElementInternal = this.element.createChild('div', 'sources-toolbar');
        this.toolbarContainerElementInternal.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.toolbar('bottom')}`);
        this.scriptViewToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar('', this.toolbarContainerElementInternal);
        this.scriptViewToolbar.element.style.flex = 'auto';
        this.bottomToolbarInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar('', this.toolbarContainerElementInternal);
        this.toolbarChangedListener = null;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.startBatchUpdate();
        workspace.uiSourceCodes().forEach(this.addUISourceCode.bind(this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.endBatchUpdate();
        workspace.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.Events.UISourceCodeAdded, this.uiSourceCodeAdded, this);
        workspace.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.Events.UISourceCodeRemoved, this.uiSourceCodeRemoved, this);
        workspace.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.Events.ProjectRemoved, this.projectRemoved.bind(this), this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addScopeChangeListener(__classPrivateFieldGet(this, _SourcesView_instances, "m", _SourcesView_onScopeChange).bind(this));
        function handleBeforeUnload(event) {
            if (event.returnValue) {
                return;
            }
            const unsavedSourceCodes = [];
            const projects = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.WorkspaceImpl.instance().projectsForType(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.projectTypes.FileSystem);
            for (const project of projects) {
                for (const uiSourceCode of project.uiSourceCodes()) {
                    if (uiSourceCode.isDirty()) {
                        unsavedSourceCodes.push(uiSourceCode);
                    }
                }
            }
            if (!unsavedSourceCodes.length) {
                return;
            }
            event.returnValue = true;
            void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('sources');
            for (const sourceCode of unsavedSourceCodes) {
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(sourceCode);
            }
        }
        if (!window.opener) {
            window.addEventListener('beforeunload', handleBeforeUnload, true);
        }
    }
    placeholderElement() {
        const shortcuts = [
            { actionId: 'quick-open.show', description: i18nString(UIStrings.openFile) },
            { actionId: 'quick-open.show-command-menu', description: i18nString(UIStrings.runCommand) },
            {
                actionId: 'sources.add-folder-to-workspace',
                description: i18nString(UIStrings.workspaceDropInAFolderToSyncSources),
                isWorkspace: true,
            },
        ];
        const list = document.createElement('div');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.markAsList(list);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(list, i18nString(UIStrings.sourceViewActions));
        for (const shortcut of shortcuts) {
            const shortcutKeyText = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ShortcutRegistry.ShortcutRegistry.instance().shortcutTitleForAction(shortcut.actionId);
            const listItemElement = list.createChild('div', 'tabbed-pane-placeholder-row');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.markAsListitem(listItemElement);
            if (shortcutKeyText) {
                const title = listItemElement.createChild('span');
                title.textContent = shortcutKeyText;
                const button = listItemElement.createChild('button');
                button.textContent = shortcut.description;
                const action = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ActionRegistry.ActionRegistry.instance().getAction(shortcut.actionId);
                button.addEventListener('click', () => action.execute());
            }
            if (shortcut.isWorkspace) {
                const workspace = listItemElement.createChild('span', 'workspace');
                workspace.textContent = shortcut.description;
                const browseButton = workspace.createChild('button');
                browseButton.textContent = i18nString(UIStrings.selectFolder);
                browseButton.addEventListener('click', this.addFileSystemClicked.bind(this));
            }
        }
        return list;
    }
    async addFileSystemClicked() {
        const result = await _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance().addFileSystem();
        if (!result) {
            return;
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.WorkspaceSelectFolder);
        void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('navigator-files');
    }
    static defaultUISourceCodeScores() {
        const defaultScores = new Map();
        const sourcesView = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().flavor(SourcesView);
        if (sourcesView) {
            const uiSourceCodes = sourcesView.editorContainer.historyUISourceCodes();
            for (let i = 1; i < uiSourceCodes.length; ++i) // Skip current element
             {
                defaultScores.set(uiSourceCodes[i], uiSourceCodes.length - i);
            }
        }
        return defaultScores;
    }
    leftToolbar() {
        return this.editorContainer.leftToolbar();
    }
    rightToolbar() {
        return this.editorContainer.rightToolbar();
    }
    bottomToolbar() {
        return this.bottomToolbarInternal;
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './sourcesView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().setFlavor(SourcesView, this);
    }
    willHide() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().setFlavor(SourcesView, null);
        super.willHide();
    }
    toolbarContainerElement() {
        return this.toolbarContainerElementInternal;
    }
    searchableView() {
        return this.searchableViewInternal;
    }
    visibleView() {
        return this.editorContainer.visibleView;
    }
    currentSourceFrame() {
        const view = this.visibleView();
        if (!(view instanceof _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_16__.UISourceCodeFrame)) {
            return null;
        }
        return view;
    }
    currentUISourceCode() {
        return this.editorContainer.currentFile();
    }
    onCloseEditorTab() {
        const uiSourceCode = this.editorContainer.currentFile();
        if (!uiSourceCode) {
            return false;
        }
        this.editorContainer.closeFile(uiSourceCode);
        return true;
    }
    onJumpToPreviousLocation() {
        this.historyManager.rollback();
    }
    onJumpToNextLocation() {
        this.historyManager.rollover();
    }
    uiSourceCodeAdded(event) {
        const uiSourceCode = event.data;
        this.addUISourceCode(uiSourceCode);
    }
    addUISourceCode(uiSourceCode) {
        const project = uiSourceCode.project();
        if (project.isServiceProject()) {
            return;
        }
        switch (project.type()) {
            case _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.projectTypes.FileSystem: {
                if (_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.fileSystemType(project) === 'overrides') {
                    return;
                }
                break;
            }
            case _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.projectTypes.Network: {
                const target = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.NetworkProject.NetworkProject.targetForUISourceCode(uiSourceCode);
                if (!_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().isInScope(target)) {
                    return;
                }
            }
        }
        this.editorContainer.addUISourceCode(uiSourceCode);
    }
    uiSourceCodeRemoved(event) {
        const uiSourceCode = event.data;
        this.removeUISourceCodes([uiSourceCode]);
    }
    removeUISourceCodes(uiSourceCodes) {
        this.editorContainer.removeUISourceCodes(uiSourceCodes);
        for (let i = 0; i < uiSourceCodes.length; ++i) {
            this.removeSourceFrame(uiSourceCodes[i]);
            this.historyManager.removeHistoryForSourceCode(uiSourceCodes[i]);
        }
    }
    projectRemoved(event) {
        const project = event.data;
        const uiSourceCodes = project.uiSourceCodes();
        this.removeUISourceCodes([...uiSourceCodes]);
    }
    updateScriptViewToolbarItems() {
        const view = this.visibleView();
        if (view instanceof _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.View.SimpleView) {
            void view.toolbarItems().then(items => {
                this.scriptViewToolbar.removeToolbarItems();
                for (const action of getRegisteredEditorActions()) {
                    this.scriptViewToolbar.appendToolbarItem(action.getOrCreateButton(this));
                }
                items.map(item => this.scriptViewToolbar.appendToolbarItem(item));
            });
        }
    }
    showSourceLocation(uiSourceCode, location, omitFocus, omitHighlight) {
        const currentFrame = this.currentSourceFrame();
        if (currentFrame) {
            this.historyManager.updateCurrentState(currentFrame.uiSourceCode(), currentFrame.textEditor.state.selection.main.head);
        }
        this.editorContainer.showFile(uiSourceCode);
        const currentSourceFrame = this.currentSourceFrame();
        if (currentSourceFrame && location) {
            currentSourceFrame.revealPosition(location, !omitHighlight);
        }
        const visibleView = this.visibleView();
        if (!omitFocus && visibleView) {
            visibleView.focus();
        }
    }
    createSourceView(uiSourceCode) {
        let sourceView;
        const contentType = uiSourceCode.contentType();
        if (contentType === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Image) {
            sourceView = new _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_9__.ImageView.ImageView(uiSourceCode.mimeType(), uiSourceCode);
        }
        else if (contentType === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Font) {
            sourceView = new _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_9__.FontView.FontView(uiSourceCode.mimeType(), uiSourceCode);
        }
        else if (uiSourceCode.name() === HEADER_OVERRIDES_FILENAME) {
            sourceView = new _components_components_js__WEBPACK_IMPORTED_MODULE_12__.HeadersView.HeadersView(uiSourceCode);
        }
        else {
            sourceView = new _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_16__.UISourceCodeFrame(uiSourceCode);
            this.historyManager.trackSourceFrameCursorJumps(sourceView);
        }
        uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.UISourceCode.Events.TitleChanged, __classPrivateFieldGet(this, _SourcesView_instances, "m", _SourcesView_uiSourceCodeTitleChanged), this);
        this.sourceViewByUISourceCode.set(uiSourceCode, sourceView);
        return sourceView;
    }
    getSourceView(uiSourceCode) {
        return this.sourceViewByUISourceCode.get(uiSourceCode);
    }
    getOrCreateSourceView(uiSourceCode) {
        return this.sourceViewByUISourceCode.get(uiSourceCode) || this.createSourceView(uiSourceCode);
    }
    recycleUISourceCodeFrame(sourceFrame, uiSourceCode) {
        sourceFrame.uiSourceCode().removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.UISourceCode.Events.TitleChanged, __classPrivateFieldGet(this, _SourcesView_instances, "m", _SourcesView_uiSourceCodeTitleChanged), this);
        this.sourceViewByUISourceCode.delete(sourceFrame.uiSourceCode());
        sourceFrame.setUISourceCode(uiSourceCode);
        this.sourceViewByUISourceCode.set(uiSourceCode, sourceFrame);
        uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.UISourceCode.Events.TitleChanged, __classPrivateFieldGet(this, _SourcesView_instances, "m", _SourcesView_uiSourceCodeTitleChanged), this);
    }
    viewForFile(uiSourceCode) {
        return this.getOrCreateSourceView(uiSourceCode);
    }
    removeSourceFrame(uiSourceCode) {
        const sourceView = this.sourceViewByUISourceCode.get(uiSourceCode);
        this.sourceViewByUISourceCode.delete(uiSourceCode);
        if (sourceView && sourceView instanceof _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_16__.UISourceCodeFrame) {
            sourceView.dispose();
        }
        uiSourceCode.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.UISourceCode.Events.TitleChanged, __classPrivateFieldGet(this, _SourcesView_instances, "m", _SourcesView_uiSourceCodeTitleChanged), this);
    }
    editorClosed(event) {
        const uiSourceCode = event.data;
        this.historyManager.removeHistoryForSourceCode(uiSourceCode);
        let wasSelected = false;
        if (!this.editorContainer.currentFile()) {
            wasSelected = true;
        }
        // SourcesNavigator does not need to update on EditorClosed.
        this.removeToolbarChangedListener();
        this.updateScriptViewToolbarItems();
        this.searchableViewInternal.resetSearch();
        const data = {
            uiSourceCode: uiSourceCode,
            wasSelected: wasSelected,
        };
        this.dispatchEventToListeners(Events.EditorClosed, data);
    }
    editorSelected(event) {
        const previousSourceFrame = event.data.previousView instanceof _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_16__.UISourceCodeFrame ? event.data.previousView : null;
        if (previousSourceFrame) {
            previousSourceFrame.setSearchableView(null);
        }
        const currentSourceFrame = event.data.currentView instanceof _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_16__.UISourceCodeFrame ? event.data.currentView : null;
        if (currentSourceFrame) {
            currentSourceFrame.setSearchableView(this.searchableViewInternal);
        }
        this.searchableViewInternal.setReplaceable(Boolean(currentSourceFrame?.canEditSource()));
        this.searchableViewInternal.refreshSearch();
        this.updateToolbarChangedListener();
        this.updateScriptViewToolbarItems();
        const currentFile = this.editorContainer.currentFile();
        if (currentFile) {
            this.dispatchEventToListeners(Events.EditorSelected, currentFile);
        }
    }
    removeToolbarChangedListener() {
        if (this.toolbarChangedListener) {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners([this.toolbarChangedListener]);
        }
        this.toolbarChangedListener = null;
    }
    updateToolbarChangedListener() {
        this.removeToolbarChangedListener();
        const sourceFrame = this.currentSourceFrame();
        if (!sourceFrame) {
            return;
        }
        this.toolbarChangedListener = sourceFrame.addEventListener(_UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_16__.Events.ToolbarItemsChanged, this.updateScriptViewToolbarItems, this);
    }
    onSearchCanceled() {
        if (this.searchView) {
            this.searchView.onSearchCanceled();
        }
        delete this.searchView;
        delete this.searchConfig;
    }
    performSearch(searchConfig, shouldJump, jumpBackwards) {
        const sourceFrame = this.currentSourceFrame();
        if (!sourceFrame) {
            return;
        }
        this.searchView = sourceFrame;
        this.searchConfig = searchConfig;
        this.searchView.performSearch(this.searchConfig, shouldJump, jumpBackwards);
    }
    jumpToNextSearchResult() {
        if (!this.searchView) {
            return;
        }
        if (this.searchConfig && this.searchView !== this.currentSourceFrame()) {
            this.performSearch(this.searchConfig, true);
            return;
        }
        this.searchView.jumpToNextSearchResult();
    }
    jumpToPreviousSearchResult() {
        if (!this.searchView) {
            return;
        }
        if (this.searchConfig && this.searchView !== this.currentSourceFrame()) {
            this.performSearch(this.searchConfig, true);
            if (this.searchView) {
                this.searchView.jumpToLastSearchResult();
            }
            return;
        }
        this.searchView.jumpToPreviousSearchResult();
    }
    supportsCaseSensitiveSearch() {
        return true;
    }
    supportsRegexSearch() {
        return true;
    }
    replaceSelectionWith(searchConfig, replacement) {
        const sourceFrame = this.currentSourceFrame();
        if (!sourceFrame) {
            console.assert(Boolean(sourceFrame));
            return;
        }
        sourceFrame.replaceSelectionWith(searchConfig, replacement);
    }
    replaceAllWith(searchConfig, replacement) {
        const sourceFrame = this.currentSourceFrame();
        if (!sourceFrame) {
            console.assert(Boolean(sourceFrame));
            return;
        }
        sourceFrame.replaceAllWith(searchConfig, replacement);
    }
    showOutlineQuickOpen() {
        _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_8__.QuickOpen.QuickOpenImpl.show('@');
    }
    showGoToLineQuickOpen() {
        if (this.editorContainer.currentFile()) {
            _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_8__.QuickOpen.QuickOpenImpl.show(':');
        }
    }
    save() {
        this.saveSourceFrame(this.currentSourceFrame());
    }
    saveAll() {
        const sourceFrames = this.editorContainer.fileViews();
        sourceFrames.forEach(this.saveSourceFrame.bind(this));
    }
    saveSourceFrame(sourceFrame) {
        if (!(sourceFrame instanceof _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_16__.UISourceCodeFrame)) {
            return;
        }
        const uiSourceCodeFrame = sourceFrame;
        uiSourceCodeFrame.commitEditing();
    }
    toggleBreakpointsActiveState(active) {
        this.editorContainer.view.element.classList.toggle('breakpoints-deactivated', !active);
    }
}
_SourcesView_instances = new WeakSet(), _SourcesView_onScopeChange = function _SourcesView_onScopeChange() {
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.WorkspaceImpl.instance();
    for (const uiSourceCode of workspace.uiSourceCodes()) {
        if (uiSourceCode.project().type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.projectTypes.Network) {
            continue;
        }
        const target = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.NetworkProject.NetworkProject.targetForUISourceCode(uiSourceCode);
        if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().isInScope(target)) {
            this.addUISourceCode(uiSourceCode);
        }
        else {
            this.removeUISourceCodes([uiSourceCode]);
        }
    }
}, _SourcesView_sourceViewTypeForWidget = function _SourcesView_sourceViewTypeForWidget(widget) {
    if (widget instanceof _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_9__.ImageView.ImageView) {
        return SourceViewType.ImageView;
    }
    if (widget instanceof _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_9__.FontView.FontView) {
        return SourceViewType.FontView;
    }
    if (widget instanceof _components_components_js__WEBPACK_IMPORTED_MODULE_12__.HeadersView.HeadersView) {
        return SourceViewType.HeadersView;
    }
    return SourceViewType.SourceView;
}, _SourcesView_sourceViewTypeForUISourceCode = function _SourcesView_sourceViewTypeForUISourceCode(uiSourceCode) {
    if (uiSourceCode.name() === HEADER_OVERRIDES_FILENAME) {
        return SourceViewType.HeadersView;
    }
    const contentType = uiSourceCode.contentType();
    switch (contentType) {
        case _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Image:
            return SourceViewType.ImageView;
        case _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Font:
            return SourceViewType.FontView;
        default:
            return SourceViewType.SourceView;
    }
}, _SourcesView_uiSourceCodeTitleChanged = function _SourcesView_uiSourceCodeTitleChanged(event) {
    const uiSourceCode = event.data;
    const widget = this.sourceViewByUISourceCode.get(uiSourceCode);
    if (widget) {
        if (__classPrivateFieldGet(this, _SourcesView_instances, "m", _SourcesView_sourceViewTypeForWidget).call(this, widget) !== __classPrivateFieldGet(this, _SourcesView_instances, "m", _SourcesView_sourceViewTypeForUISourceCode).call(this, uiSourceCode)) {
            // Remove the exisiting editor tab and create a new one of the correct type.
            this.removeUISourceCodes([uiSourceCode]);
            this.showSourceLocation(uiSourceCode);
        }
    }
};
var Events;
(function (Events) {
    Events["EditorClosed"] = "EditorClosed";
    Events["EditorSelected"] = "EditorSelected";
})(Events || (Events = {}));
const registeredEditorActions = [];
function registerEditorAction(editorAction) {
    registeredEditorActions.push(editorAction);
}
function getRegisteredEditorActions() {
    return registeredEditorActions.map(editorAction => editorAction());
}
class SwitchFileActionDelegate {
    static nextFile(currentUISourceCode) {
        function fileNamePrefix(name) {
            const lastDotIndex = name.lastIndexOf('.');
            const namePrefix = name.substr(0, lastDotIndex !== -1 ? lastDotIndex : name.length);
            return namePrefix.toLowerCase();
        }
        const candidates = [];
        const url = currentUISourceCode.parentURL();
        const name = currentUISourceCode.name();
        const namePrefix = fileNamePrefix(name);
        for (const uiSourceCode of currentUISourceCode.project().uiSourceCodes()) {
            if (url !== uiSourceCode.parentURL()) {
                continue;
            }
            if (fileNamePrefix(uiSourceCode.name()) === namePrefix) {
                candidates.push(uiSourceCode.name());
            }
        }
        candidates.sort(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.naturalOrderComparator);
        const index = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.mod(candidates.indexOf(name) + 1, candidates.length);
        const fullURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.concatenate((url ? _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.concatenate(url, '/') : ''), candidates[index]);
        const nextUISourceCode = currentUISourceCode.project().uiSourceCodeForURL(fullURL);
        return nextUISourceCode !== currentUISourceCode ? nextUISourceCode : null;
    }
    handleAction(context, _actionId) {
        const sourcesView = context.flavor(SourcesView);
        if (!sourcesView) {
            return false;
        }
        const currentUISourceCode = sourcesView.currentUISourceCode();
        if (!currentUISourceCode) {
            return false;
        }
        const nextUISourceCode = SwitchFileActionDelegate.nextFile(currentUISourceCode);
        if (!nextUISourceCode) {
            return false;
        }
        sourcesView.showSourceLocation(nextUISourceCode);
        return true;
    }
}
class ActionDelegate {
    handleAction(context, actionId) {
        const sourcesView = context.flavor(SourcesView);
        if (!sourcesView) {
            return false;
        }
        switch (actionId) {
            case 'sources.close-all':
                sourcesView.editorContainer.closeAllFiles();
                return true;
            case 'sources.jump-to-previous-location':
                sourcesView.onJumpToPreviousLocation();
                return true;
            case 'sources.jump-to-next-location':
                sourcesView.onJumpToNextLocation();
                return true;
            case 'sources.next-editor-tab':
                sourcesView.editorContainer.selectNextTab();
                return true;
            case 'sources.previous-editor-tab':
                sourcesView.editorContainer.selectPrevTab();
                return true;
            case 'sources.close-editor-tab':
                return sourcesView.onCloseEditorTab();
            case 'sources.go-to-line':
                sourcesView.showGoToLineQuickOpen();
                return true;
            case 'sources.go-to-member':
                sourcesView.showOutlineQuickOpen();
                return true;
            case 'sources.save':
                sourcesView.save();
                return true;
            case 'sources.save-all':
                sourcesView.saveAll();
                return true;
        }
        return false;
    }
}
const HEADER_OVERRIDES_FILENAME = '.headers';
var SourceViewType;
(function (SourceViewType) {
    SourceViewType["ImageView"] = "ImageView";
    SourceViewType["FontView"] = "FontView";
    SourceViewType["HeadersView"] = "HeadersView";
    SourceViewType["SourceView"] = "SourceView";
})(SourceViewType || (SourceViewType = {}));


/***/ }),

/***/ "./src/panels/sources/TabbedEditorContainer.ts":
/*!*****************************************************!*\
  !*** ./src/panels/sources/TabbedEditorContainer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorContainerTabDelegate: () => (/* binding */ EditorContainerTabDelegate),
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   History: () => (/* binding */ History),
/* harmony export */   HistoryItem: () => (/* binding */ HistoryItem),
/* harmony export */   TabbedEditorContainer: () => (/* binding */ TabbedEditorContainer)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/extensions/extensions.js */ "./src/models/extensions/extensions.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../snippets/snippets.js */ "./src/panels/snippets/snippets.ts");
/* harmony import */ var _SourcesView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SourcesView.js */ "./src/panels/sources/SourcesView.ts");
/* harmony import */ var _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UISourceCodeFrame.js */ "./src/panels/sources/UISourceCodeFrame.ts");
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TabbedEditorContainer_instances, _TabbedEditorContainer_onRequestsForHeaderOverridesFileChanged;














const UIStrings = {
    /**
     *@description Text in Tabbed Editor Container of the Sources panel
     *@example {example.file} PH1
     */
    areYouSureYouWantToCloseUnsaved: 'Are you sure you want to close unsaved file: {PH1}?',
    /**
     *@description Error message for tooltip showing that a file in Sources could not be loaded
     */
    unableToLoadThisContent: 'Unable to load this content.',
    /**
     *@description Icon title in Tabbed Editor Container of the Sources panel
     */
    changesToThisFileWereNotSavedTo: 'Changes to this file were not saved to file system.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/sources/TabbedEditorContainer.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
let tabId = 0;
class TabbedEditorContainer extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor(delegate, setting, placeholderElement, focusedPlaceholderElement) {
        super();
        _TabbedEditorContainer_instances.add(this);
        Object.defineProperty(this, "delegate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tabbedPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tabIds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "files", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "previouslyViewedFilesSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "history", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "uriToUISourceCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "idToUISourceCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "currentFileInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "currentView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "scrollTimer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reentrantShow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.delegate = delegate;
        this.tabbedPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TabbedPane.TabbedPane();
        this.tabbedPane.setPlaceholderElement(placeholderElement, focusedPlaceholderElement);
        this.tabbedPane.setTabDelegate(new EditorContainerTabDelegate(this));
        this.tabbedPane.setCloseableTabs(true);
        this.tabbedPane.setAllowTabReorder(true, true);
        this.tabbedPane.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TabbedPane.Events.TabClosed, this.tabClosed, this);
        this.tabbedPane.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TabbedPane.Events.TabSelected, this.tabSelected, this);
        this.tabbedPane.headerElement().setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.toolbar('top').track({ keydown: 'ArrowUp|ArrowLeft|ArrowDown|ArrowRight|Enter|Space' })}`);
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().addEventListener(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.Events.BindingCreated, this.onBindingCreated, this);
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().addEventListener(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.Events.BindingRemoved, this.onBindingRemoved, this);
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.NetworkPersistenceManager.NetworkPersistenceManager.instance().addEventListener(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.NetworkPersistenceManager.Events.RequestsForHeaderOverridesFileChanged, __classPrivateFieldGet(this, _TabbedEditorContainer_instances, "m", _TabbedEditorContainer_onRequestsForHeaderOverridesFileChanged), this);
        this.tabIds = new Map();
        this.files = new Map();
        this.previouslyViewedFilesSetting = setting;
        this.history = History.fromObject(this.previouslyViewedFilesSetting.get());
        this.uriToUISourceCode = new Map();
        this.idToUISourceCode = new Map();
        this.reentrantShow = false;
    }
    onBindingCreated(event) {
        const binding = event.data;
        this.updateFileTitle(binding.fileSystem);
        const networkTabId = this.tabIds.get(binding.network);
        let fileSystemTabId = this.tabIds.get(binding.fileSystem);
        const wasSelectedInNetwork = this.currentFileInternal === binding.network;
        const networkKey = historyItemKey(binding.network);
        const currentSelectionRange = this.history.selectionRange(networkKey);
        const currentScrollLineNumber = this.history.scrollLineNumber(networkKey);
        this.history.remove(networkKey);
        if (!networkTabId) {
            return;
        }
        if (!fileSystemTabId) {
            const networkView = this.tabbedPane.tabView(networkTabId);
            const tabIndex = this.tabbedPane.tabIndex(networkTabId);
            if (networkView instanceof _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_13__.UISourceCodeFrame) {
                this.delegate.recycleUISourceCodeFrame(networkView, binding.fileSystem);
                fileSystemTabId = this.appendFileTab(binding.fileSystem, false, tabIndex, networkView);
            }
            else {
                fileSystemTabId = this.appendFileTab(binding.fileSystem, false, tabIndex);
                const fileSystemTabView = this.tabbedPane.tabView(fileSystemTabId);
                this.restoreEditorProperties(fileSystemTabView, currentSelectionRange, currentScrollLineNumber);
            }
        }
        this.closeTabs([networkTabId], true);
        if (wasSelectedInNetwork) {
            this.tabbedPane.selectTab(fileSystemTabId, false);
        }
        this.updateHistory();
    }
    onBindingRemoved(event) {
        const binding = event.data;
        this.updateFileTitle(binding.fileSystem);
    }
    get view() {
        return this.tabbedPane;
    }
    get visibleView() {
        return this.tabbedPane.visibleView;
    }
    fileViews() {
        return this.tabbedPane.tabViews();
    }
    leftToolbar() {
        return this.tabbedPane.leftToolbar();
    }
    rightToolbar() {
        return this.tabbedPane.rightToolbar();
    }
    show(parentElement) {
        this.tabbedPane.show(parentElement);
    }
    showFile(uiSourceCode) {
        const binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(uiSourceCode);
        uiSourceCode = binding ? binding.fileSystem : uiSourceCode;
        const frame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().flavor(_SourcesView_js__WEBPACK_IMPORTED_MODULE_12__.SourcesView);
        // If the content has already been set and the current frame is showing
        // the incoming uiSourceCode, then fire the event that the file has been loaded.
        // Otherwise, this event will fire as soon as the content has been set.
        if (frame?.currentSourceFrame()?.contentSet && this.currentFileInternal === uiSourceCode &&
            frame?.currentUISourceCode() === uiSourceCode) {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.fireEvent('source-file-loaded', uiSourceCode.displayName(true));
        }
        else {
            this.innerShowFile(uiSourceCode, true);
        }
    }
    closeFile(uiSourceCode) {
        const tabId = this.tabIds.get(uiSourceCode);
        if (!tabId) {
            return;
        }
        this.closeTabs([tabId]);
    }
    closeAllFiles() {
        this.closeTabs(this.tabbedPane.tabIds());
    }
    historyUISourceCodes() {
        const result = [];
        for (const { url, resourceType } of this.history.keys()) {
            const uiSourceCode = this.uriToUISourceCode.get(url);
            if (uiSourceCode !== undefined && uiSourceCode.contentType() === resourceType) {
                result.push(uiSourceCode);
            }
        }
        return result;
    }
    selectNextTab() {
        this.tabbedPane.selectNextTab();
    }
    selectPrevTab() {
        this.tabbedPane.selectPrevTab();
    }
    addViewListeners() {
        if (!this.currentView || !(this.currentView instanceof _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_8__.SourceFrame.SourceFrameImpl)) {
            return;
        }
        this.currentView.addEventListener(_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_8__.SourceFrame.Events.EditorUpdate, this.onEditorUpdate, this);
        this.currentView.addEventListener(_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_8__.SourceFrame.Events.EditorScroll, this.onScrollChanged, this);
    }
    removeViewListeners() {
        if (!this.currentView || !(this.currentView instanceof _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_8__.SourceFrame.SourceFrameImpl)) {
            return;
        }
        this.currentView.removeEventListener(_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_8__.SourceFrame.Events.EditorUpdate, this.onEditorUpdate, this);
        this.currentView.removeEventListener(_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_8__.SourceFrame.Events.EditorScroll, this.onScrollChanged, this);
    }
    onScrollChanged() {
        if (this.currentView instanceof _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_8__.SourceFrame.SourceFrameImpl) {
            if (this.scrollTimer) {
                clearTimeout(this.scrollTimer);
            }
            this.scrollTimer = window.setTimeout(() => this.previouslyViewedFilesSetting.set(this.history.toObject()), 100);
            if (this.currentFileInternal) {
                const { editor } = this.currentView.textEditor;
                const topBlock = editor.lineBlockAtHeight(editor.scrollDOM.getBoundingClientRect().top - editor.documentTop);
                const topLine = editor.state.doc.lineAt(topBlock.from).number - 1;
                this.history.updateScrollLineNumber(historyItemKey(this.currentFileInternal), topLine);
            }
        }
    }
    onEditorUpdate({ data: update }) {
        if (update.docChanged || update.selectionSet) {
            const { main } = update.state.selection;
            const lineFrom = update.state.doc.lineAt(main.from), lineTo = update.state.doc.lineAt(main.to);
            const range = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__.TextRange.TextRange(lineFrom.number - 1, main.from - lineFrom.from, lineTo.number - 1, main.to - lineTo.from);
            if (this.currentFileInternal) {
                this.history.updateSelectionRange(historyItemKey(this.currentFileInternal), range);
            }
            this.previouslyViewedFilesSetting.set(this.history.toObject());
            if (this.currentFileInternal) {
                _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_3__.ExtensionServer.ExtensionServer.instance().sourceSelectionChanged(this.currentFileInternal.url(), range);
            }
        }
    }
    innerShowFile(uiSourceCode, userGesture) {
        if (this.reentrantShow) {
            return;
        }
        const canonicalSourceCode = this.canonicalUISourceCode(uiSourceCode);
        const binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(uiSourceCode);
        uiSourceCode = binding ? binding.fileSystem : uiSourceCode;
        if (this.currentFileInternal === uiSourceCode) {
            return;
        }
        this.removeViewListeners();
        this.currentFileInternal = uiSourceCode;
        try {
            // Selecting the tab may cause showFile to be called again, but with the canonical source code,
            // which is not what we want, so we prevent reentrant calls.
            this.reentrantShow = true;
            const tabId = this.tabIds.get(canonicalSourceCode) || this.appendFileTab(canonicalSourceCode, userGesture);
            this.tabbedPane.selectTab(tabId, userGesture);
        }
        finally {
            this.reentrantShow = false;
        }
        if (userGesture) {
            this.editorSelectedByUserAction();
        }
        const previousView = this.currentView;
        this.currentView = this.visibleView;
        this.addViewListeners();
        if (this.currentView instanceof _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_13__.UISourceCodeFrame && this.currentView.uiSourceCode() !== uiSourceCode) {
            // We are showing a different UISourceCode in the same tab (because it has the same URL). This
            // commonly happens when switching between workers or iframes containing the same code, and while the
            // contents are usually identical they may not be and it is important to show users when they aren't.
            this.delegate.recycleUISourceCodeFrame(this.currentView, uiSourceCode);
            if (uiSourceCode.project().type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.FileSystem) {
                // Disable editing, because it may confuse users that only one of the copies of this code changes.
                uiSourceCode.disableEdit();
            }
        }
        const eventData = {
            currentFile: this.currentFileInternal,
            currentView: this.currentView,
            previousView: previousView,
            userGesture: userGesture,
        };
        this.dispatchEventToListeners(Events.EditorSelected, eventData);
    }
    titleForFile(uiSourceCode) {
        const maxDisplayNameLength = 30;
        let title = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.trimMiddle(uiSourceCode.displayName(true), maxDisplayNameLength);
        if (uiSourceCode.isDirty()) {
            title += '*';
        }
        return title;
    }
    maybeCloseTab(id, nextTabId) {
        const uiSourceCode = this.files.get(id);
        if (!uiSourceCode) {
            return false;
        }
        const shouldPrompt = uiSourceCode.isDirty() && uiSourceCode.project().canSetFileContent();
        // FIXME: this should be replaced with common Save/Discard/Cancel dialog.
        if (!shouldPrompt || confirm(i18nString(UIStrings.areYouSureYouWantToCloseUnsaved, { PH1: uiSourceCode.name() }))) {
            uiSourceCode.resetWorkingCopy();
            if (nextTabId) {
                this.tabbedPane.selectTab(nextTabId, true);
            }
            this.tabbedPane.closeTab(id, true);
            return true;
        }
        return false;
    }
    closeTabs(ids, forceCloseDirtyTabs) {
        const dirtyTabs = [];
        const cleanTabs = [];
        for (let i = 0; i < ids.length; ++i) {
            const id = ids[i];
            const uiSourceCode = this.files.get(id);
            if (uiSourceCode) {
                if (!forceCloseDirtyTabs && uiSourceCode.isDirty()) {
                    dirtyTabs.push(id);
                }
                else {
                    cleanTabs.push(id);
                }
            }
        }
        if (dirtyTabs.length) {
            this.tabbedPane.selectTab(dirtyTabs[0], true);
        }
        this.tabbedPane.closeTabs(cleanTabs, true);
        for (let i = 0; i < dirtyTabs.length; ++i) {
            const nextTabId = i + 1 < dirtyTabs.length ? dirtyTabs[i + 1] : null;
            if (!this.maybeCloseTab(dirtyTabs[i], nextTabId)) {
                break;
            }
        }
    }
    onContextMenu(tabId, contextMenu) {
        const uiSourceCode = this.files.get(tabId);
        if (uiSourceCode) {
            contextMenu.appendApplicableItems(uiSourceCode);
        }
    }
    canonicalUISourceCode(uiSourceCode) {
        // Check if we have already a UISourceCode for this url
        const existingSourceCode = this.idToUISourceCode.get(uiSourceCode.canononicalScriptId());
        if (existingSourceCode) {
            // Ignore incoming uiSourceCode, we already have this file.
            return existingSourceCode;
        }
        this.idToUISourceCode.set(uiSourceCode.canononicalScriptId(), uiSourceCode);
        this.uriToUISourceCode.set(uiSourceCode.url(), uiSourceCode);
        return uiSourceCode;
    }
    addUISourceCode(uiSourceCode) {
        const canonicalSourceCode = this.canonicalUISourceCode(uiSourceCode);
        const duplicated = canonicalSourceCode !== uiSourceCode;
        const binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(canonicalSourceCode);
        uiSourceCode = binding ? binding.fileSystem : canonicalSourceCode;
        if (duplicated && uiSourceCode.project().type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.FileSystem) {
            uiSourceCode.disableEdit();
        }
        if (this.currentFileInternal?.canononicalScriptId() === uiSourceCode.canononicalScriptId()) {
            return;
        }
        const index = this.history.index(historyItemKey(uiSourceCode));
        if (index === -1) {
            return;
        }
        if (!this.tabIds.has(uiSourceCode)) {
            this.appendFileTab(uiSourceCode, false);
        }
        // Select tab if this file was the last to be shown.
        if (!index) {
            this.innerShowFile(uiSourceCode, false);
            return;
        }
        if (!this.currentFileInternal) {
            return;
        }
        const currentProjectIsSnippets = _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_11__.ScriptSnippetFileSystem.isSnippetsUISourceCode(this.currentFileInternal);
        const addedProjectIsSnippets = _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_11__.ScriptSnippetFileSystem.isSnippetsUISourceCode(uiSourceCode);
        if (this.history.index(historyItemKey(this.currentFileInternal)) && currentProjectIsSnippets &&
            !addedProjectIsSnippets) {
            this.innerShowFile(uiSourceCode, false);
        }
    }
    removeUISourceCode(uiSourceCode) {
        this.removeUISourceCodes([uiSourceCode]);
    }
    removeUISourceCodes(uiSourceCodes) {
        const tabIds = [];
        for (const uiSourceCode of uiSourceCodes) {
            const tabId = this.tabIds.get(uiSourceCode);
            if (tabId) {
                tabIds.push(tabId);
            }
            if (this.uriToUISourceCode.get(uiSourceCode.url()) === uiSourceCode) {
                this.uriToUISourceCode.delete(uiSourceCode.url());
            }
            if (this.idToUISourceCode.get(uiSourceCode.canononicalScriptId()) === uiSourceCode) {
                this.idToUISourceCode.delete(uiSourceCode.canononicalScriptId());
            }
        }
        this.tabbedPane.closeTabs(tabIds);
    }
    editorClosedByUserAction(uiSourceCode) {
        this.history.remove(historyItemKey(uiSourceCode));
        this.updateHistory();
    }
    editorSelectedByUserAction() {
        this.updateHistory();
    }
    updateHistory() {
        const historyItemKeys = [];
        for (const tabId of this.tabbedPane.lastOpenedTabIds(MAX_PREVIOUSLY_VIEWED_FILES_COUNT)) {
            const uiSourceCode = this.files.get(tabId);
            if (uiSourceCode !== undefined) {
                historyItemKeys.push(historyItemKey(uiSourceCode));
            }
        }
        this.history.update(historyItemKeys);
        this.previouslyViewedFilesSetting.set(this.history.toObject());
    }
    tooltipForFile(uiSourceCode) {
        uiSourceCode = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().network(uiSourceCode) || uiSourceCode;
        return uiSourceCode.url();
    }
    appendFileTab(uiSourceCode, userGesture, index, replaceView) {
        const view = replaceView || this.delegate.viewForFile(uiSourceCode);
        const title = this.titleForFile(uiSourceCode);
        const tooltip = this.tooltipForFile(uiSourceCode);
        const tabId = this.generateTabId();
        this.tabIds.set(uiSourceCode, tabId);
        this.files.set(tabId, uiSourceCode);
        if (!replaceView) {
            const savedSelectionRange = this.history.selectionRange(historyItemKey(uiSourceCode));
            const savedScrollLineNumber = this.history.scrollLineNumber(historyItemKey(uiSourceCode));
            this.restoreEditorProperties(view, savedSelectionRange, savedScrollLineNumber);
        }
        this.tabbedPane.appendTab(tabId, title, view, tooltip, userGesture, undefined, undefined, index);
        this.updateFileTitle(uiSourceCode);
        this.addUISourceCodeListeners(uiSourceCode);
        if (uiSourceCode.loadError()) {
            this.addLoadErrorIcon(tabId);
        }
        else if (!uiSourceCode.contentLoaded()) {
            void uiSourceCode.requestContent().then(_content => {
                if (uiSourceCode.loadError()) {
                    this.addLoadErrorIcon(tabId);
                }
            });
        }
        return tabId;
    }
    addLoadErrorIcon(tabId) {
        const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon();
        icon.data = { iconName: 'cross-circle-filled', color: 'var(--icon-error)', width: '14px', height: '14px' };
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(icon, i18nString(UIStrings.unableToLoadThisContent));
        if (this.tabbedPane.tabView(tabId)) {
            this.tabbedPane.setTabIcon(tabId, icon);
        }
    }
    restoreEditorProperties(editorView, selection, firstLineNumber) {
        const sourceFrame = editorView instanceof _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_8__.SourceFrame.SourceFrameImpl ?
            editorView :
            null;
        if (!sourceFrame) {
            return;
        }
        if (selection) {
            sourceFrame.setSelection(selection);
        }
        if (typeof firstLineNumber === 'number') {
            sourceFrame.scrollToLine(firstLineNumber);
        }
    }
    tabClosed(event) {
        const { tabId, isUserGesture } = event.data;
        const uiSourceCode = this.files.get(tabId);
        if (this.currentFileInternal &&
            this.currentFileInternal.canononicalScriptId() === uiSourceCode?.canononicalScriptId()) {
            this.removeViewListeners();
            this.currentView = null;
            this.currentFileInternal = null;
        }
        if (uiSourceCode) {
            this.tabIds.delete(uiSourceCode);
        }
        this.files.delete(tabId);
        if (uiSourceCode) {
            this.removeUISourceCodeListeners(uiSourceCode);
            this.dispatchEventToListeners(Events.EditorClosed, uiSourceCode);
            if (isUserGesture) {
                this.editorClosedByUserAction(uiSourceCode);
            }
        }
    }
    tabSelected(event) {
        const { tabId, isUserGesture } = event.data;
        const uiSourceCode = this.files.get(tabId);
        if (uiSourceCode) {
            this.innerShowFile(uiSourceCode, isUserGesture);
        }
    }
    addUISourceCodeListeners(uiSourceCode) {
        uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.TitleChanged, this.uiSourceCodeTitleChanged, this);
        uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.WorkingCopyChanged, this.uiSourceCodeWorkingCopyChanged, this);
        uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.WorkingCopyCommitted, this.uiSourceCodeWorkingCopyCommitted, this);
    }
    removeUISourceCodeListeners(uiSourceCode) {
        uiSourceCode.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.TitleChanged, this.uiSourceCodeTitleChanged, this);
        uiSourceCode.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.WorkingCopyChanged, this.uiSourceCodeWorkingCopyChanged, this);
        uiSourceCode.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.WorkingCopyCommitted, this.uiSourceCodeWorkingCopyCommitted, this);
    }
    updateFileTitle(uiSourceCode) {
        const tabId = this.tabIds.get(uiSourceCode);
        if (tabId) {
            const title = this.titleForFile(uiSourceCode);
            const tooltip = this.tooltipForFile(uiSourceCode);
            this.tabbedPane.changeTabTitle(tabId, title, tooltip);
            let icon = null;
            if (uiSourceCode.loadError()) {
                icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon();
                icon.data = { iconName: 'cross-circle-filled', color: 'var(--icon-error)', width: '14px', height: '14px' };
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(icon, i18nString(UIStrings.unableToLoadThisContent));
            }
            else if (_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().hasUnsavedCommittedChanges(uiSourceCode)) {
                icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon();
                icon.data = { iconName: 'warning-filled', color: 'var(--icon-warning)', width: '14px', height: '14px' };
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(icon, i18nString(UIStrings.changesToThisFileWereNotSavedTo));
            }
            else {
                icon = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.PersistenceUtils.PersistenceUtils.iconForUISourceCode(uiSourceCode);
            }
            this.tabbedPane.setTabIcon(tabId, icon);
        }
    }
    uiSourceCodeTitleChanged(event) {
        const uiSourceCode = event.data;
        this.updateFileTitle(uiSourceCode);
        this.updateHistory();
        // Remove from map under old url if it has changed.
        for (const [k, v] of this.uriToUISourceCode) {
            if (v === uiSourceCode && k !== v.url()) {
                this.uriToUISourceCode.delete(k);
            }
        }
        // Remove from map under old id if it has changed.
        for (const [k, v] of this.idToUISourceCode) {
            if (v === uiSourceCode && k !== v.canononicalScriptId()) {
                this.idToUISourceCode.delete(k);
            }
        }
        // Ensure it is mapped under current url and id.
        this.canonicalUISourceCode(uiSourceCode);
    }
    uiSourceCodeWorkingCopyChanged(event) {
        const uiSourceCode = event.data;
        this.updateFileTitle(uiSourceCode);
    }
    uiSourceCodeWorkingCopyCommitted(event) {
        const uiSourceCode = event.data.uiSourceCode;
        this.updateFileTitle(uiSourceCode);
    }
    generateTabId() {
        return 'tab-' + (tabId++);
    }
    currentFile() {
        return this.currentFileInternal || null;
    }
}
_TabbedEditorContainer_instances = new WeakSet(), _TabbedEditorContainer_onRequestsForHeaderOverridesFileChanged = function _TabbedEditorContainer_onRequestsForHeaderOverridesFileChanged(event) {
    this.updateFileTitle(event.data);
};
var Events;
(function (Events) {
    Events["EditorSelected"] = "EditorSelected";
    Events["EditorClosed"] = "EditorClosed";
})(Events || (Events = {}));
const MAX_PREVIOUSLY_VIEWED_FILES_COUNT = 30;
const MAX_SERIALIZABLE_URL_LENGTH = 4096;
function historyItemKey(uiSourceCode) {
    return { url: uiSourceCode.url(), resourceType: uiSourceCode.contentType() };
}
class HistoryItem {
    constructor(url, resourceType, selectionRange, scrollLineNumber) {
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "resourceType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectionRange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "scrollLineNumber", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.url = url;
        this.resourceType = resourceType;
        this.selectionRange = selectionRange;
        this.scrollLineNumber = scrollLineNumber;
    }
    static fromObject(serializedHistoryItem) {
        const resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromName(serializedHistoryItem.resourceTypeName);
        if (resourceType === null) {
            throw new TypeError(`Invalid resource type name "${serializedHistoryItem.resourceTypeName}"`);
        }
        const selectionRange = serializedHistoryItem.selectionRange ?
            _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__.TextRange.TextRange.fromObject(serializedHistoryItem.selectionRange) :
            undefined;
        return new HistoryItem(serializedHistoryItem.url, resourceType, selectionRange, serializedHistoryItem.scrollLineNumber);
    }
    toObject() {
        if (this.url.length >= MAX_SERIALIZABLE_URL_LENGTH) {
            return null;
        }
        return {
            url: this.url,
            resourceTypeName: this.resourceType.name(),
            selectionRange: this.selectionRange,
            scrollLineNumber: this.scrollLineNumber,
        };
    }
}
class History {
    constructor(items) {
        Object.defineProperty(this, "items", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.items = items;
    }
    static fromObject(serializedHistoryItems) {
        const items = [];
        for (const serializedHistoryItem of serializedHistoryItems) {
            try {
                items.push(HistoryItem.fromObject(serializedHistoryItem));
            }
            catch {
            }
        }
        return new History(items);
    }
    index({ url, resourceType }) {
        return this.items.findIndex(item => item.url === url && item.resourceType === resourceType);
    }
    selectionRange(key) {
        const index = this.index(key);
        if (index === -1) {
            return undefined;
        }
        return this.items[index].selectionRange;
    }
    updateSelectionRange(key, selectionRange) {
        if (!selectionRange) {
            return;
        }
        const index = this.index(key);
        if (index === -1) {
            return;
        }
        this.items[index].selectionRange = selectionRange;
    }
    scrollLineNumber(key) {
        const index = this.index(key);
        if (index === -1) {
            return;
        }
        return this.items[index].scrollLineNumber;
    }
    updateScrollLineNumber(key, scrollLineNumber) {
        const index = this.index(key);
        if (index === -1) {
            return;
        }
        this.items[index].scrollLineNumber = scrollLineNumber;
    }
    update(keys) {
        for (let i = keys.length - 1; i >= 0; --i) {
            const index = this.index(keys[i]);
            let item;
            if (index !== -1) {
                item = this.items[index];
                this.items.splice(index, 1);
            }
            else {
                item = new HistoryItem(keys[i].url, keys[i].resourceType);
            }
            this.items.unshift(item);
        }
    }
    remove(key) {
        const index = this.index(key);
        if (index === -1) {
            return;
        }
        this.items.splice(index, 1);
    }
    toObject() {
        const serializedHistoryItems = [];
        for (const item of this.items) {
            const serializedItem = item.toObject();
            if (serializedItem) {
                serializedHistoryItems.push(serializedItem);
            }
            if (serializedHistoryItems.length === MAX_PREVIOUSLY_VIEWED_FILES_COUNT) {
                break;
            }
        }
        return serializedHistoryItems;
    }
    // eslint-disable-next-line rulesdir/prefer_readonly_keyword
    keys() {
        return this.items;
    }
}
class EditorContainerTabDelegate {
    constructor(editorContainer) {
        Object.defineProperty(this, "editorContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.editorContainer = editorContainer;
    }
    closeTabs(_tabbedPane, ids) {
        this.editorContainer.closeTabs(ids);
    }
    onContextMenu(tabId, contextMenu) {
        this.editorContainer.onContextMenu(tabId, contextMenu);
    }
}


/***/ }),

/***/ "./src/panels/sources/ThreadsSidebarPane.ts":
/*!**************************************************!*\
  !*** ./src/panels/sources/ThreadsSidebarPane.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThreadsSidebarPane: () => (/* binding */ ThreadsSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './threadsSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Text in Threads Sidebar Pane of the Sources panel
     */
    paused: 'paused',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/ThreadsSidebarPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class ThreadsSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox {
    constructor() {
        super(true);
        Object.defineProperty(this, "items", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "list", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectedModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.section('sources.threads')}`);
        this.items = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListModel.ListModel();
        this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListControl.ListControl(this.items, this, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListControl.ListMode.NonViewport);
        const currentTarget = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target);
        this.selectedModel = currentTarget !== null ? currentTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel) : null;
        this.contentElement.appendChild(this.list.element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target, this.targetFlavorChanged, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel, this);
    }
    static shouldBeShown() {
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel).length >= 2;
    }
    createElementForItem(debuggerModel) {
        const element = document.createElement('div');
        element.classList.add('thread-item');
        const title = element.createChild('div', 'thread-item-title');
        const pausedState = element.createChild('div', 'thread-item-paused-state');
        const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon();
        icon.data = {
            iconName: 'large-arrow-right-filled',
            color: 'var(--icon-arrow-main-thread)',
            width: '14px',
            height: '14px',
        };
        icon.classList.add('selected-thread-icon');
        element.appendChild(icon);
        element.tabIndex = -1;
        self.onInvokeElement(element, event => {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target, debuggerModel.target());
            event.consume(true);
        });
        const isSelected = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target) === debuggerModel.target();
        element.classList.toggle('selected', isSelected);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setSelected(element, isSelected);
        function updateTitle() {
            const executionContext = debuggerModel.runtimeModel().defaultExecutionContext();
            title.textContent =
                executionContext && executionContext.label() ? executionContext.label() : debuggerModel.target().name();
        }
        function updatePausedState() {
            pausedState.textContent = debuggerModel.isPaused() ? i18nString(UIStrings.paused) : '';
        }
        function targetNameChanged(event) {
            const target = event.data;
            if (target === debuggerModel.target()) {
                updateTitle();
            }
        }
        debuggerModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Events.DebuggerPaused, updatePausedState);
        debuggerModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Events.DebuggerResumed, updatePausedState);
        debuggerModel.runtimeModel().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.Events.ExecutionContextChanged, updateTitle);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.Events.NameChanged, targetNameChanged);
        updatePausedState();
        updateTitle();
        return element;
    }
    heightForItem(_debuggerModel) {
        console.assert(false); // Should not be called.
        return 0;
    }
    isItemSelectable(_debuggerModel) {
        return true;
    }
    selectedItemChanged(_from, _to, fromElement, toElement) {
        const fromEle = fromElement;
        if (fromEle) {
            fromEle.tabIndex = -1;
        }
        const toEle = toElement;
        if (toEle) {
            this.setDefaultFocusedElement(toEle);
            toEle.tabIndex = 0;
            if (this.hasFocus()) {
                toEle.focus();
            }
        }
    }
    updateSelectedItemARIA(_fromElement, _toElement) {
        return false;
    }
    modelAdded(debuggerModel) {
        this.items.insert(this.items.length, debuggerModel);
        const currentTarget = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target);
        if (currentTarget === debuggerModel.target()) {
            this.list.selectItem(debuggerModel);
        }
    }
    modelRemoved(debuggerModel) {
        this.items.remove(this.items.indexOf(debuggerModel));
    }
    targetFlavorChanged({ data: target }) {
        const hadFocus = this.hasFocus();
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
        this.list.selectItem(debuggerModel);
        if (debuggerModel) {
            this.list.refreshItem(debuggerModel);
        }
        if (this.selectedModel !== null) {
            this.list.refreshItem(this.selectedModel);
        }
        this.selectedModel = debuggerModel;
        if (hadFocus) {
            this.focus();
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './threadsSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}


/***/ }),

/***/ "./src/panels/sources/UISourceCodeFrame.ts":
/*!*************************************************!*\
  !*** ./src/panels/sources/UISourceCodeFrame.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   UISourceCodeFrame: () => (/* binding */ UISourceCodeFrame)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _entrypoints_formatter_worker_FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entrypoints/formatter_worker/FormatterActions.js */ "./src/entrypoints/formatter_worker/FormatterActions.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/components/issue_counter/issue_counter.js */ "./src/ui/components/issue_counter/issue_counter.ts");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _CoveragePlugin_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CoveragePlugin.js */ "./src/panels/sources/CoveragePlugin.ts");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CSSPlugin.js */ "./src/panels/sources/CSSPlugin.ts");
/* harmony import */ var _DebuggerPlugin_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DebuggerPlugin.js */ "./src/panels/sources/DebuggerPlugin.ts");
/* harmony import */ var _ProfilePlugin_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ProfilePlugin.js */ "./src/panels/sources/ProfilePlugin.ts");
/* harmony import */ var _ResourceOriginPlugin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ResourceOriginPlugin.js */ "./src/panels/sources/ResourceOriginPlugin.ts");
/* harmony import */ var _SnippetsPlugin_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SnippetsPlugin.js */ "./src/panels/sources/SnippetsPlugin.ts");
/* harmony import */ var _SourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SourcesPanel.js */ "./src/panels/sources/SourcesPanel.ts");
/*
 * Copyright (C) 2012 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
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
var _UISourceCodeFrame_instances, _UISourceCodeFrame_sourcesPanelOpenedMetricsRecorded, _UISourceCodeFrame_recordSourcesPanelOpenedMetrics, _RowMessage_lineNumber, _RowMessage_columnNumber;


 // eslint-disable-line rulesdir/es_modules_import
















function sourceFramePlugins() {
    // The order of these plugins matters for toolbar items and editor
    // extension precedence
    return [
        _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_13__.CSSPlugin,
        _DebuggerPlugin_js__WEBPACK_IMPORTED_MODULE_14__.DebuggerPlugin,
        _SnippetsPlugin_js__WEBPACK_IMPORTED_MODULE_17__.SnippetsPlugin,
        _ResourceOriginPlugin_js__WEBPACK_IMPORTED_MODULE_16__.ResourceOriginPlugin,
        _CoveragePlugin_js__WEBPACK_IMPORTED_MODULE_12__.CoveragePlugin,
        _ProfilePlugin_js__WEBPACK_IMPORTED_MODULE_15__.MemoryProfilePlugin,
        _ProfilePlugin_js__WEBPACK_IMPORTED_MODULE_15__.PerformanceProfilePlugin,
    ];
}
class UISourceCodeFrame extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__.SourceFrame.SourceFrameImpl) {
    constructor(uiSourceCode) {
        super(() => this.workingCopy());
        _UISourceCodeFrame_instances.add(this);
        Object.defineProperty(this, "uiSourceCodeInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "muteSourceCodeEvents", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "persistenceBinding", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "uiSourceCodeEventListeners", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "messageAndDecorationListeners", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "boundOnBindingChanged", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // The active plugins. These are created in setContent, and
        // recreated when the binding changes
        Object.defineProperty(this, "plugins", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "errorPopoverHelper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _UISourceCodeFrame_sourcesPanelOpenedMetricsRecorded.set(this, false);
        this.uiSourceCodeInternal = uiSourceCode;
        this.muteSourceCodeEvents = false;
        this.persistenceBinding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(uiSourceCode);
        this.uiSourceCodeEventListeners = [];
        this.messageAndDecorationListeners = [];
        this.boundOnBindingChanged = this.onBindingChanged.bind(this);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
            .moduleSetting('persistence-network-overrides-enabled')
            .addChangeListener(this.onNetworkPersistenceChanged, this);
        this.errorPopoverHelper = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.PopoverHelper.PopoverHelper(this.textEditor.editor.contentDOM, this.getErrorPopoverContent.bind(this), 'sources.error');
        this.errorPopoverHelper.setHasPadding(true);
        this.errorPopoverHelper.setTimeout(100, 100);
        this.initializeUISourceCode();
    }
    async workingCopy() {
        if (this.uiSourceCodeInternal.isDirty()) {
            return { content: this.uiSourceCodeInternal.workingCopy(), isEncoded: false };
        }
        return this.uiSourceCodeInternal.requestContent();
    }
    editorConfiguration(doc) {
        return [
            super.editorConfiguration(doc),
            rowMessages(this.allMessages()),
            // Inject editor extensions from plugins
            pluginCompartment.of(this.plugins.map(plugin => plugin.editorExtension())),
        ];
    }
    onFocus() {
        super.onFocus();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().setFlavor(UISourceCodeFrame, this);
    }
    onBlur() {
        super.onBlur();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().setFlavor(UISourceCodeFrame, null);
    }
    installMessageAndDecorationListeners() {
        if (this.persistenceBinding) {
            const networkSourceCode = this.persistenceBinding.network;
            const fileSystemSourceCode = this.persistenceBinding.fileSystem;
            this.messageAndDecorationListeners = [
                networkSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.MessageAdded, this.onMessageAdded, this),
                networkSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.MessageRemoved, this.onMessageRemoved, this),
                networkSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.DecorationChanged, this.onDecorationChanged, this),
                fileSystemSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.MessageAdded, this.onMessageAdded, this),
                fileSystemSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.MessageRemoved, this.onMessageRemoved, this),
            ];
        }
        else {
            this.messageAndDecorationListeners = [
                this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.MessageAdded, this.onMessageAdded, this),
                this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.MessageRemoved, this.onMessageRemoved, this),
                this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.DecorationChanged, this.onDecorationChanged, this),
            ];
        }
    }
    uiSourceCode() {
        return this.uiSourceCodeInternal;
    }
    setUISourceCode(uiSourceCode) {
        const loaded = uiSourceCode.contentLoaded() ? Promise.resolve() : uiSourceCode.requestContent();
        const startUISourceCode = this.uiSourceCodeInternal;
        loaded.then(async () => {
            if (this.uiSourceCodeInternal !== startUISourceCode) {
                return;
            }
            this.unloadUISourceCode();
            this.uiSourceCodeInternal = uiSourceCode;
            if (uiSourceCode.workingCopy() !== this.textEditor.state.doc.toString()) {
                await this.setDeferredContent(Promise.resolve(uiSourceCode.workingCopyContent()));
            }
            else {
                this.reloadPlugins();
            }
            this.initializeUISourceCode();
        }, console.error);
    }
    unloadUISourceCode() {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.messageAndDecorationListeners);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.uiSourceCodeEventListeners);
        this.uiSourceCodeInternal.removeWorkingCopyGetter();
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().unsubscribeFromBindingEvent(this.uiSourceCodeInternal, this.boundOnBindingChanged);
    }
    initializeUISourceCode() {
        this.uiSourceCodeEventListeners = [
            this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.WorkingCopyChanged, this.onWorkingCopyChanged, this),
            this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.WorkingCopyCommitted, this.onWorkingCopyCommitted, this),
            this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.TitleChanged, this.onTitleChanged, this),
        ];
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().subscribeForBindingEvent(this.uiSourceCodeInternal, this.boundOnBindingChanged);
        this.installMessageAndDecorationListeners();
        this.updateStyle();
        const canPrettyPrint = _entrypoints_formatter_worker_FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.FORMATTABLE_MEDIA_TYPES.includes(this.contentType) &&
            !this.uiSourceCodeInternal.project().canSetFileContent() &&
            _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(this.uiSourceCodeInternal) === null;
        const autoPrettyPrint = !this.uiSourceCodeInternal.contentType().isFromSourceMap();
        this.setCanPrettyPrint(canPrettyPrint, autoPrettyPrint);
    }
    wasShown() {
        super.wasShown();
        this.setEditable(this.canEditSourceInternal());
    }
    willHide() {
        for (const plugin of this.plugins) {
            plugin.willHide();
        }
        super.willHide();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().setFlavor(UISourceCodeFrame, null);
        this.uiSourceCodeInternal.removeWorkingCopyGetter();
    }
    getContentType() {
        const binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(this.uiSourceCodeInternal);
        const mimeType = binding ? binding.network.mimeType() : this.uiSourceCodeInternal.mimeType();
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.simplifyContentType(mimeType);
    }
    canEditSourceInternal() {
        if (this.hasLoadError()) {
            return false;
        }
        if (this.uiSourceCodeInternal.editDisabled()) {
            return false;
        }
        if (this.uiSourceCodeInternal.mimeType() === 'application/wasm') {
            return false;
        }
        if (_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(this.uiSourceCodeInternal)) {
            return true;
        }
        if (this.uiSourceCodeInternal.project().canSetFileContent()) {
            return true;
        }
        if (this.uiSourceCodeInternal.project().isServiceProject()) {
            return false;
        }
        if (this.uiSourceCodeInternal.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network &&
            _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.NetworkPersistenceManager.NetworkPersistenceManager.instance().active()) {
            return true;
        }
        // Because live edit fails on large whitespace changes, pretty printed scripts are not editable.
        if (this.pretty && this.uiSourceCodeInternal.contentType().hasScripts()) {
            return false;
        }
        return this.uiSourceCodeInternal.contentType() !== _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document;
    }
    onNetworkPersistenceChanged() {
        this.setEditable(this.canEditSourceInternal());
    }
    commitEditing() {
        if (!this.uiSourceCodeInternal.isDirty()) {
            return;
        }
        this.muteSourceCodeEvents = true;
        this.uiSourceCodeInternal.commitWorkingCopy();
        this.muteSourceCodeEvents = false;
    }
    async setContent(content) {
        this.disposePlugins();
        this.loadPlugins();
        await super.setContent(content);
        for (const plugin of this.plugins) {
            plugin.editorInitialized(this.textEditor);
        }
        __classPrivateFieldGet(this, _UISourceCodeFrame_instances, "m", _UISourceCodeFrame_recordSourcesPanelOpenedMetrics).call(this);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.fireEvent('source-file-loaded', this.uiSourceCodeInternal.displayName(true));
    }
    createMessage(origin) {
        const { lineNumber, columnNumber } = this.uiLocationToEditorLocation(origin.lineNumber(), origin.columnNumber());
        return new RowMessage(origin, lineNumber, columnNumber);
    }
    allMessages() {
        const origins = this.persistenceBinding !== null ?
            [...this.persistenceBinding.network.messages(), ...this.persistenceBinding.fileSystem.messages()] :
            [...this.uiSourceCodeInternal.messages()];
        return origins.map(origin => this.createMessage(origin));
    }
    onTextChanged() {
        const wasPretty = this.pretty;
        super.onTextChanged();
        this.errorPopoverHelper.hidePopover();
        _SourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__.SourcesPanel.instance().updateLastModificationTime();
        this.muteSourceCodeEvents = true;
        if (this.isClean()) {
            this.uiSourceCodeInternal.resetWorkingCopy();
        }
        else {
            this.uiSourceCodeInternal.setWorkingCopyGetter(() => this.textEditor.state.sliceDoc());
        }
        this.muteSourceCodeEvents = false;
        if (wasPretty !== this.pretty) {
            this.updateStyle();
            this.reloadPlugins();
        }
    }
    onWorkingCopyChanged() {
        if (this.muteSourceCodeEvents) {
            return;
        }
        this.maybeSetContent(this.uiSourceCodeInternal.workingCopyContent());
    }
    onWorkingCopyCommitted() {
        if (!this.muteSourceCodeEvents) {
            this.maybeSetContent(this.uiSourceCode().workingCopyContent());
        }
        this.contentCommitted();
        this.updateStyle();
    }
    reloadPlugins() {
        this.disposePlugins();
        this.loadPlugins();
        const editor = this.textEditor;
        editor.dispatch({ effects: pluginCompartment.reconfigure(this.plugins.map(plugin => plugin.editorExtension())) });
        for (const plugin of this.plugins) {
            plugin.editorInitialized(editor);
        }
    }
    onTitleChanged() {
        this.updateLanguageMode('').then(() => this.reloadPlugins(), console.error);
    }
    loadPlugins() {
        const binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(this.uiSourceCodeInternal);
        const pluginUISourceCode = binding ? binding.network : this.uiSourceCodeInternal;
        for (const pluginType of sourceFramePlugins()) {
            if (pluginType.accepts(pluginUISourceCode)) {
                this.plugins.push(new pluginType(pluginUISourceCode, this));
            }
        }
        this.dispatchEventToListeners(Events.ToolbarItemsChanged);
    }
    disposePlugins() {
        for (const plugin of this.plugins) {
            plugin.dispose();
        }
        this.plugins = [];
    }
    onBindingChanged() {
        const binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(this.uiSourceCodeInternal);
        if (binding === this.persistenceBinding) {
            return;
        }
        this.unloadUISourceCode();
        this.persistenceBinding = binding;
        this.initializeUISourceCode();
        this.reloadMessages();
        this.reloadPlugins();
    }
    reloadMessages() {
        const messages = this.allMessages();
        const { editor } = this.textEditor;
        editor.dispatch({ effects: setRowMessages.of(RowMessages.create(messages)) });
    }
    updateStyle() {
        this.setEditable(this.canEditSourceInternal());
    }
    maybeSetContent(content) {
        if (this.textEditor.state.doc.toString() !== content.content) {
            void this.setDeferredContent(Promise.resolve(content));
        }
    }
    populateTextAreaContextMenu(contextMenu, lineNumber, columnNumber) {
        super.populateTextAreaContextMenu(contextMenu, lineNumber, columnNumber);
        contextMenu.appendApplicableItems(this.uiSourceCodeInternal);
        const location = this.editorLocationToUILocation(lineNumber, columnNumber);
        contextMenu.appendApplicableItems(new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.UILocation(this.uiSourceCodeInternal, location.lineNumber, location.columnNumber));
        for (const plugin of this.plugins) {
            plugin.populateTextAreaContextMenu(contextMenu, lineNumber, columnNumber);
        }
    }
    populateLineGutterContextMenu(contextMenu, lineNumber) {
        super.populateLineGutterContextMenu(contextMenu, lineNumber);
        for (const plugin of this.plugins) {
            plugin.populateLineGutterContextMenu(contextMenu, lineNumber);
        }
    }
    dispose() {
        this.errorPopoverHelper.dispose();
        this.disposePlugins();
        this.unloadUISourceCode();
        this.textEditor.editor.destroy();
        this.detach();
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
            .moduleSetting('persistence-network-overrides-enabled')
            .removeChangeListener(this.onNetworkPersistenceChanged, this);
    }
    onMessageAdded(event) {
        const { editor } = this.textEditor, shownMessages = editor.state.field(showRowMessages, false);
        if (shownMessages) {
            const message = this.createMessage(event.data);
            editor.dispatch({ effects: setRowMessages.of(shownMessages.messages.add(message)) });
        }
    }
    onMessageRemoved(event) {
        const { editor } = this.textEditor, shownMessages = editor.state.field(showRowMessages, false);
        if (shownMessages) {
            const message = this.createMessage(event.data);
            editor.dispatch({ effects: setRowMessages.of(shownMessages.messages.remove(message)) });
        }
    }
    onDecorationChanged(event) {
        for (const plugin of this.plugins) {
            plugin.decorationChanged(event.data, this.textEditor);
        }
    }
    async toolbarItems() {
        const leftToolbarItems = await super.toolbarItems();
        const rightToolbarItems = [];
        for (const plugin of this.plugins) {
            leftToolbarItems.push(...plugin.leftToolbarItems());
            rightToolbarItems.push(...plugin.rightToolbarItems());
        }
        if (!rightToolbarItems.length) {
            return leftToolbarItems;
        }
        return [...leftToolbarItems, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarSeparator(true), ...rightToolbarItems];
    }
    getErrorPopoverContent(event) {
        const mouseEvent = event;
        const eventTarget = event.target;
        const anchorElement = eventTarget.enclosingNodeOrSelfWithClass('cm-messageIcon-error') ||
            eventTarget.enclosingNodeOrSelfWithClass('cm-messageIcon-issue');
        if (!anchorElement) {
            return null;
        }
        const messageField = this.textEditor.state.field(showRowMessages, false);
        if (!messageField || messageField.messages.rows.length === 0) {
            return null;
        }
        const { editor } = this.textEditor;
        const position = editor.posAtCoords(mouseEvent);
        if (position === null) {
            return null;
        }
        const line = editor.state.doc.lineAt(position);
        if (position !== line.to) {
            return null;
        }
        const row = messageField.messages.rows.find(row => row[0].lineNumber() === line.number - 1);
        if (!row) {
            return null;
        }
        const issues = anchorElement.classList.contains('cm-messageIcon-issue');
        const messages = row.filter(msg => (msg.level() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Message.Level.Issue) === issues);
        if (!messages.length) {
            return null;
        }
        const anchor = anchorElement ? anchorElement.boxInWindow() : new AnchorBox(mouseEvent.clientX, mouseEvent.clientY, 1, 1);
        const counts = countDuplicates(messages);
        const element = document.createElement('div');
        element.classList.add('text-editor-messages-description-container');
        for (let i = 0; i < messages.length; i++) {
            if (counts[i]) {
                element.appendChild(renderMessage(messages[i], counts[i]));
            }
        }
        return {
            box: anchor,
            hide() { },
            show: async (popover) => {
                popover.contentElement.append(element);
                return true;
            },
        };
    }
}
_UISourceCodeFrame_sourcesPanelOpenedMetricsRecorded = new WeakMap(), _UISourceCodeFrame_instances = new WeakSet(), _UISourceCodeFrame_recordSourcesPanelOpenedMetrics = function _UISourceCodeFrame_recordSourcesPanelOpenedMetrics() {
    if (__classPrivateFieldGet(this, _UISourceCodeFrame_sourcesPanelOpenedMetricsRecorded, "f")) {
        return;
    }
    __classPrivateFieldSet(this, _UISourceCodeFrame_sourcesPanelOpenedMetricsRecorded, true, "f");
    const mimeType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.mimeFromURL(this.uiSourceCodeInternal.url());
    const mediaType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.mediaTypeForMetrics(mimeType ?? '', this.uiSourceCodeInternal.contentType().isFromSourceMap(), _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__.TextUtils.isMinified(this.uiSourceCodeInternal.content()));
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.sourcesPanelFileOpened(mediaType);
};
function getIconDataForLevel(level) {
    if (level === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Message.Level.Error) {
        return { color: 'var(--icon-error)', width: '16px', height: '14px', iconName: 'cross-circle-filled' };
    }
    if (level === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Message.Level.Warning) {
        return { color: 'var(--icon-warning)', width: '18px', height: '14px', iconName: 'warning-filled' };
    }
    if (level === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Message.Level.Issue) {
        return { color: 'var(--icon-warning)', width: '17px', height: '14px', iconName: 'issue-exclamation-filled' };
    }
    return { color: 'var(--icon-error)', width: '16px', height: '14px', iconName: 'cross-circle-filled' };
}
function getBubbleTypePerLevel(level) {
    switch (level) {
        case _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Message.Level.Error:
            return 'error';
        case _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Message.Level.Warning:
            return 'warning';
        case _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Message.Level.Issue:
            return 'warning';
    }
}
function messageLevelComparator(a, b) {
    const messageLevelPriority = {
        [_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Message.Level.Issue]: 2,
        [_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Message.Level.Warning]: 3,
        [_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Message.Level.Error]: 4,
    };
    return messageLevelPriority[a.level()] - messageLevelPriority[b.level()];
}
function getIconDataForMessage(message) {
    if (message.origin instanceof _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.SourceFrameIssuesManager.IssueMessage) {
        return {
            ..._ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_9__.IssueCounter.getIssueKindIconData(message.origin.getIssueKind()),
            width: '12px',
            height: '12px',
        };
    }
    return getIconDataForLevel(message.level());
}
var Events;
(function (Events) {
    Events["ToolbarItemsChanged"] = "ToolbarItemsChanged";
})(Events || (Events = {}));
const pluginCompartment = new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.Compartment();
// Row message management and display logic. The frame manages a
// collection of messages, organized by line (row), as a wavy
// underline starting at the start of the first message, up to the end
// of the line, with icons indicating the message severity and content
// at the end of the line.
class RowMessage {
    constructor(origin, lineNumber, columnNumber) {
        Object.defineProperty(this, "origin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _RowMessage_lineNumber.set(this, void 0);
        _RowMessage_columnNumber.set(this, void 0);
        this.origin = origin;
        __classPrivateFieldSet(this, _RowMessage_lineNumber, lineNumber, "f");
        __classPrivateFieldSet(this, _RowMessage_columnNumber, columnNumber, "f");
    }
    level() {
        return this.origin.level();
    }
    text() {
        return this.origin.text();
    }
    clickHandler() {
        return this.origin.clickHandler();
    }
    lineNumber() {
        return __classPrivateFieldGet(this, _RowMessage_lineNumber, "f");
    }
    columnNumber() {
        return __classPrivateFieldGet(this, _RowMessage_columnNumber, "f");
    }
    isEqual(that) {
        return this.origin.isEqual(that.origin);
    }
}
_RowMessage_lineNumber = new WeakMap(), _RowMessage_columnNumber = new WeakMap();
function addMessage(rows, message) {
    const lineNumber = message.lineNumber();
    let i = 0;
    for (; i < rows.length; i++) {
        const diff = rows[i][0].lineNumber() - lineNumber;
        if (diff === 0) {
            rows[i] = rows[i].concat(message);
            return rows;
        }
        if (diff > 0) {
            break;
        }
    }
    rows.splice(i, 0, [message]);
    return rows;
}
function removeMessage(rows, message) {
    for (let i = 0; i < rows.length; i++) {
        if (rows[i][0].lineNumber() === message.lineNumber()) {
            const remaining = rows[i].filter(m => !m.isEqual(message));
            if (remaining.length) {
                rows[i] = remaining;
            }
            else {
                rows.splice(i, 1);
            }
            break;
        }
    }
}
class RowMessages {
    constructor(rows) {
        Object.defineProperty(this, "rows", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: rows
        });
    }
    static create(messages) {
        const rows = [];
        for (const message of messages) {
            addMessage(rows, message);
        }
        return new RowMessages(rows);
    }
    remove(message) {
        const rows = this.rows.slice();
        removeMessage(rows, message);
        return new RowMessages(rows);
    }
    add(message) {
        return new RowMessages(addMessage(this.rows.slice(), message));
    }
}
const setRowMessages = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.StateEffect.define();
const underlineMark = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.Decoration.mark({ class: 'cm-waveUnderline' });
// The widget shown at the end of a message annotation.
class MessageWidget extends _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.WidgetType {
    constructor(messages) {
        super();
        Object.defineProperty(this, "messages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: messages
        });
    }
    eq(other) {
        return other.messages === this.messages;
    }
    toDOM() {
        const wrap = document.createElement('span');
        wrap.classList.add('cm-messageIcon');
        const nonIssues = this.messages.filter(msg => msg.level() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Message.Level.Issue);
        if (nonIssues.length) {
            const maxIssue = nonIssues.sort(messageLevelComparator)[nonIssues.length - 1];
            const errorIcon = wrap.appendChild(new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon());
            errorIcon.data = getIconDataForLevel(maxIssue.level());
            errorIcon.classList.add('cm-messageIcon-error');
        }
        const issue = this.messages.find(m => m.level() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Message.Level.Issue);
        if (issue) {
            const issueIcon = wrap.appendChild(new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon());
            issueIcon.data = getIconDataForLevel(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Message.Level.Issue);
            issueIcon.classList.add('cm-messageIcon-issue');
            issueIcon.addEventListener('click', () => (issue.clickHandler() || Math.min)());
        }
        return wrap;
    }
    ignoreEvents() {
        return true;
    }
}
class RowMessageDecorations {
    constructor(messages, decorations) {
        Object.defineProperty(this, "messages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: messages
        });
        Object.defineProperty(this, "decorations", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: decorations
        });
    }
    static create(messages, doc) {
        const builder = new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.RangeSetBuilder();
        for (const row of messages.rows) {
            const line = doc.line(Math.min(doc.lines, row[0].lineNumber() + 1));
            const minCol = row.reduce((col, msg) => Math.min(col, msg.columnNumber() || 0), line.length);
            if (minCol < line.length) {
                builder.add(line.from + minCol, line.to, underlineMark);
            }
            builder.add(line.to, line.to, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.Decoration.widget({ side: 1, widget: new MessageWidget(row) }));
        }
        return new RowMessageDecorations(messages, builder.finish());
    }
    apply(tr) {
        let result = this;
        if (tr.docChanged) {
            result = new RowMessageDecorations(this.messages, this.decorations.map(tr.changes));
        }
        for (const effect of tr.effects) {
            if (effect.is(setRowMessages)) {
                result = RowMessageDecorations.create(effect.value, tr.state.doc);
            }
        }
        return result;
    }
}
const showRowMessages = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.StateField.define({
    create(state) {
        return RowMessageDecorations.create(new RowMessages([]), state.doc);
    },
    update(value, tr) {
        return value.apply(tr);
    },
    provide: field => _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.Prec.lowest(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorView.decorations.from(field, value => value.decorations)),
});
function countDuplicates(messages) {
    const counts = [];
    for (let i = 0; i < messages.length; i++) {
        counts[i] = 0;
        for (let j = 0; j <= i; j++) {
            if (messages[j].isEqual(messages[i])) {
                counts[j]++;
                break;
            }
        }
    }
    return counts;
}
function renderMessage(message, count) {
    const element = document.createElement('div');
    element.classList.add('text-editor-row-message');
    element.style.display = 'flex';
    element.style.alignItems = 'center';
    element.style.gap = '4px';
    if (count === 1) {
        const icon = element.appendChild(new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon());
        icon.data = getIconDataForMessage(message);
        icon.classList.add('text-editor-row-message-icon');
        icon.addEventListener('click', () => (message.clickHandler() || Math.min)());
    }
    else {
        const repeatCountElement = document.createElement('span', { is: 'dt-small-bubble' });
        repeatCountElement.textContent = String(count);
        repeatCountElement.classList.add('text-editor-row-message-repeat-count');
        repeatCountElement.style.flexShrink = '0';
        element.appendChild(repeatCountElement);
        repeatCountElement.type = getBubbleTypePerLevel(message.level());
    }
    const linesContainer = element.createChild('div');
    for (const line of message.text().split('\n')) {
        linesContainer.createChild('div').textContent = line;
    }
    return element;
}
const rowMessageTheme = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorView.baseTheme({
    '.cm-tooltip-message': {
        padding: '4px',
    },
    '.cm-waveUnderline': {
        backgroundImage: 'var(--image-file-errorWave)',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'bottom',
        paddingBottom: '1px',
    },
    '.cm-messageIcon': {
        cursor: 'pointer',
        '& > *': {
            verticalAlign: 'text-bottom',
            marginLeft: '2px',
        },
    },
    '.cm-messageIcon-issue, .cm-messageIcon-error': {
        marginTop: '-1px',
        marginBottom: '-1px',
    },
});
function rowMessages(initialMessages) {
    return [
        showRowMessages.init(state => RowMessageDecorations.create(RowMessages.create(initialMessages), state.doc)),
        rowMessageTheme,
    ];
}


/***/ }),

/***/ "./src/panels/sources/components/components.ts":
/*!*****************************************************!*\
  !*** ./src/panels/sources/components/components.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointsView: () => (/* reexport module object */ _BreakpointsView_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   BreakpointsViewUtils: () => (/* reexport module object */ _BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   HeadersView: () => (/* reexport module object */ _HeadersView_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _BreakpointsView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreakpointsView.js */ "./src/panels/sources/components/BreakpointsView.ts");
/* harmony import */ var _BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreakpointsViewUtils.js */ "./src/panels/sources/components/BreakpointsViewUtils.ts");
/* harmony import */ var _HeadersView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeadersView.js */ "./src/panels/sources/components/HeadersView.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






/***/ })

}]);