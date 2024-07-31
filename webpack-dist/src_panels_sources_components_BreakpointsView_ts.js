"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_components_BreakpointsView_ts"],{

/***/ "./src/panels/sources/components/BreakpointsView.ts":
/*!**********************************************************!*\
  !*** ./src/panels/sources/components/BreakpointsView.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointStatus: () => (/* binding */ BreakpointStatus),
/* harmony export */   BreakpointsSidebarController: () => (/* binding */ BreakpointsSidebarController),
/* harmony export */   BreakpointsView: () => (/* binding */ BreakpointsView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/breakpoints/breakpoints.js */ "./src/models/breakpoints/breakpoints.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./src/ui/components/input/input.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './breakpointsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./BreakpointsViewUtils.js */ "./src/panels/sources/components/BreakpointsViewUtils.ts");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
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
var _BreakpointsSidebarController_instances, _BreakpointsSidebarController_breakpointManager, _BreakpointsSidebarController_breakpointItemToLocationMap, _BreakpointsSidebarController_breakpointsActiveSetting, _BreakpointsSidebarController_pauseOnUncaughtExceptionSetting, _BreakpointsSidebarController_pauseOnCaughtExceptionSetting, _BreakpointsSidebarController_collapsedFilesSettings, _BreakpointsSidebarController_collapsedFiles, _BreakpointsSidebarController_outstandingBreakpointEdited, _BreakpointsSidebarController_updateScheduled, _BreakpointsSidebarController_updateRunning, _BreakpointsSidebarController_onBreakpointAdded, _BreakpointsSidebarController_onBreakpointRemoved, _BreakpointsSidebarController_saveSettings, _BreakpointsSidebarController_getBreakpointTypeAndDetails, _BreakpointsSidebarController_getLocationsForBreakpointItem, _BreakpointsSidebarController_getHitUILocation, _BreakpointsSidebarController_getBreakpointLocations, _BreakpointsSidebarController_groupBreakpointLocationsById, _BreakpointsSidebarController_getLocationIdsByLineId, _BreakpointsSidebarController_getBreakpointState, _BreakpointsSidebarController_getContent, _BreakpointsView_instances, _BreakpointsView_controller, _BreakpointsView_shadow, _BreakpointsView_pauseOnUncaughtExceptions, _BreakpointsView_pauseOnCaughtExceptions, _BreakpointsView_independentPauseToggles, _BreakpointsView_breakpointsActive, _BreakpointsView_breakpointGroups, _BreakpointsView_urlToDifferentiatingPath, _BreakpointsView_keyDownHandler, _BreakpointsView_setSelected, _BreakpointsView_handleArrowKey, _BreakpointsView_handleHomeOrEndKey, _BreakpointsView_renderEditBreakpointButton, _BreakpointsView_renderRemoveBreakpointButton, _BreakpointsView_onBreakpointGroupContextMenu, _BreakpointsView_renderBreakpointGroup, _BreakpointsView_renderGroupCheckbox, _BreakpointsView_renderFileIcon, _BreakpointsView_onBreakpointEntryContextMenu, _BreakpointsView_renderBreakpointEntry, _BreakpointsView_getCodeSnippetTooltip, _BreakpointsView_getBreakpointItemDescription, _BreakpointsView_onCheckboxToggled, _BreakpointsView_onPauseOnCaughtExceptionsStateChanged, _BreakpointsView_onPauseOnUncaughtExceptionsStateChanged;



















const UIStrings = {
    /**
     *@description Label for a checkbox to toggle pausing on uncaught exceptions in the breakpoint sidebar of the Sources panel. When the checkbox is checked, DevTools will pause if an uncaught exception is thrown at runtime.
     */
    pauseOnUncaughtExceptions: 'Pause on uncaught exceptions',
    /**
     *@description Label for a checkbox to toggling pausing on caught exceptions in the breakpoint sidebar of the Sources panel. When the checkbox is checked, DevTools will pause if an exception is thrown, but caught (handled) at runtime.
     */
    pauseOnCaughtExceptions: 'Pause on caught exceptions',
    /**
     *@description Text exposed to screen readers on checked items.
     */
    checked: 'checked',
    /**
     *@description Accessible text exposed to screen readers when the screen reader encounters an unchecked checkbox.
     */
    unchecked: 'unchecked',
    /**
     *@description Accessible text for a breakpoint collection with a combination of checked states.
     */
    indeterminate: 'mixed',
    /**
     *@description Accessibility label for hit breakpoints in the Sources panel.
     *@example {checked} PH1
     */
    breakpointHit: '{PH1} breakpoint hit',
    /**
     *@description Tooltip text that shows when hovered over a remove button that appears next to a filename in the breakpoint sidebar of the sources panel. Also used in the context menu for breakpoint groups.
     */
    removeAllBreakpointsInFile: 'Remove all breakpoints in file',
    /**
     *@description Context menu item in the Breakpoints Sidebar Pane of the Sources panel that disables all breakpoints in a file.
     */
    disableAllBreakpointsInFile: 'Disable all breakpoints in file',
    /**
     *@description Context menu item in the Breakpoints Sidebar Pane of the Sources panel that enables all breakpoints in a file.
     */
    enableAllBreakpointsInFile: 'Enable all breakpoints in file',
    /**
     *@description Tooltip text that shows when hovered over an edit button that appears next to a breakpoint or conditional breakpoint in the breakpoint sidebar of the sources panel.
     */
    editCondition: 'Edit condition',
    /**
     *@description Tooltip text that shows when hovered over an edit button that appears next to a logpoint in the breakpoint sidebar of the sources panel.
     */
    editLogpoint: 'Edit logpoint',
    /**
     *@description Context menu item in the Breakpoints Sidebar Pane of the Sources panel that disables all breakpoints.
     */
    disableAllBreakpoints: 'Disable all breakpoints',
    /**
     *@description Context menu item in the Breakpoints Sidebar Pane of the Sources panel that enables all breakpoints.
     */
    enableAllBreakpoints: 'Enable all breakpoints',
    /**
     *@description Tooltip text that shows when hovered over a remove button that appears next to a breakpoint in the breakpoint sidebar of the sources panel. Also used in the context menu for breakpoint items.
     */
    removeBreakpoint: 'Remove breakpoint',
    /**
     *@description Text to remove all breakpoints
     */
    removeAllBreakpoints: 'Remove all breakpoints',
    /**
     *@description Text in Breakpoints Sidebar Pane of the Sources panel
     */
    removeOtherBreakpoints: 'Remove other breakpoints',
    /**
     *@description Context menu item that reveals the source code location of a breakpoint in the Sources panel.
     */
    revealLocation: 'Reveal location',
    /**
     *@description Tooltip text that shows when hovered over a piece of code of a breakpoint in the breakpoint sidebar of the sources panel. It shows the condition, on which the breakpoint will stop.
     *@example {x < 3} PH1
     */
    conditionCode: 'Condition: {PH1}',
    /**
     *@description Tooltip text that shows when hovered over a piece of code of a breakpoint in the breakpoint sidebar of the sources panel. It shows what is going to be printed in the console, if execution hits this breakpoint.
     *@example {'hello'} PH1
     */
    logpointCode: 'Logpoint: {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/components/BreakpointsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_12__.RenderCoordinator.RenderCoordinator.instance();
const MAX_SNIPPET_LENGTH = 200;
var BreakpointStatus;
(function (BreakpointStatus) {
    BreakpointStatus["ENABLED"] = "ENABLED";
    BreakpointStatus["DISABLED"] = "DISABLED";
    BreakpointStatus["INDETERMINATE"] = "INDETERMINATE";
})(BreakpointStatus || (BreakpointStatus = {}));
let breakpointsViewInstance;
let breakpointsViewControllerInstance;
class BreakpointsSidebarController {
    constructor(breakpointManager, settings) {
        _BreakpointsSidebarController_instances.add(this);
        _BreakpointsSidebarController_breakpointManager.set(this, void 0);
        _BreakpointsSidebarController_breakpointItemToLocationMap.set(this, new WeakMap());
        _BreakpointsSidebarController_breakpointsActiveSetting.set(this, void 0);
        _BreakpointsSidebarController_pauseOnUncaughtExceptionSetting.set(this, void 0);
        _BreakpointsSidebarController_pauseOnCaughtExceptionSetting.set(this, void 0);
        _BreakpointsSidebarController_collapsedFilesSettings.set(this, void 0);
        _BreakpointsSidebarController_collapsedFiles.set(this, void 0);
        // This is used to keep track of outstanding edits to breakpoints that were initiated
        // by the breakpoint edit button (for UMA).
        _BreakpointsSidebarController_outstandingBreakpointEdited.set(this, void 0);
        _BreakpointsSidebarController_updateScheduled.set(this, false);
        _BreakpointsSidebarController_updateRunning.set(this, false);
        __classPrivateFieldSet(this, _BreakpointsSidebarController_collapsedFilesSettings, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('collapsed-files', []), "f");
        __classPrivateFieldSet(this, _BreakpointsSidebarController_collapsedFiles, new Set(__classPrivateFieldGet(this, _BreakpointsSidebarController_collapsedFilesSettings, "f").get()), "f");
        __classPrivateFieldSet(this, _BreakpointsSidebarController_breakpointManager, breakpointManager, "f");
        __classPrivateFieldGet(this, _BreakpointsSidebarController_breakpointManager, "f").addEventListener(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__.BreakpointManager.Events.BreakpointAdded, __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_onBreakpointAdded), this);
        __classPrivateFieldGet(this, _BreakpointsSidebarController_breakpointManager, "f").addEventListener(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__.BreakpointManager.Events.BreakpointRemoved, __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_onBreakpointRemoved), this);
        __classPrivateFieldSet(this, _BreakpointsSidebarController_breakpointsActiveSetting, settings.moduleSetting('breakpoints-active'), "f");
        __classPrivateFieldGet(this, _BreakpointsSidebarController_breakpointsActiveSetting, "f").addChangeListener(this.update, this);
        __classPrivateFieldSet(this, _BreakpointsSidebarController_pauseOnUncaughtExceptionSetting, settings.moduleSetting('pause-on-uncaught-exception'), "f");
        __classPrivateFieldGet(this, _BreakpointsSidebarController_pauseOnUncaughtExceptionSetting, "f").addChangeListener(this.update, this);
        __classPrivateFieldSet(this, _BreakpointsSidebarController_pauseOnCaughtExceptionSetting, settings.moduleSetting('pause-on-caught-exception'), "f");
        __classPrivateFieldGet(this, _BreakpointsSidebarController_pauseOnCaughtExceptionSetting, "f").addChangeListener(this.update, this);
    }
    static instance({ forceNew, breakpointManager, settings } = {
        forceNew: null,
        breakpointManager: _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__.BreakpointManager.BreakpointManager.instance(),
        settings: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance(),
    }) {
        if (!breakpointsViewControllerInstance || forceNew) {
            breakpointsViewControllerInstance = new BreakpointsSidebarController(breakpointManager, settings);
        }
        return breakpointsViewControllerInstance;
    }
    static removeInstance() {
        breakpointsViewControllerInstance = null;
    }
    static targetSupportsIndependentPauseOnExceptionToggles() {
        const hasNodeTargets = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().targets().some(target => target.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Node);
        return !hasNodeTargets;
    }
    flavorChanged(_object) {
        void this.update();
    }
    breakpointEditFinished(breakpoint, edited) {
        if (__classPrivateFieldGet(this, _BreakpointsSidebarController_outstandingBreakpointEdited, "f") && __classPrivateFieldGet(this, _BreakpointsSidebarController_outstandingBreakpointEdited, "f") === breakpoint) {
            if (edited) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointConditionEditedFromSidebar);
            }
            __classPrivateFieldSet(this, _BreakpointsSidebarController_outstandingBreakpointEdited, undefined, "f");
        }
    }
    breakpointStateChanged(breakpointItem, checked) {
        const locations = __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_getLocationsForBreakpointItem).call(this, breakpointItem);
        locations.forEach((value) => {
            const breakpoint = value.breakpoint;
            breakpoint.setEnabled(checked);
        });
    }
    async breakpointEdited(breakpointItem, editButtonClicked) {
        const locations = __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_getLocationsForBreakpointItem).call(this, breakpointItem);
        let location;
        for (const locationCandidate of locations) {
            if (!location || locationCandidate.uiLocation.compareTo(location.uiLocation) < 0) {
                location = locationCandidate;
            }
        }
        if (location) {
            if (editButtonClicked) {
                __classPrivateFieldSet(this, _BreakpointsSidebarController_outstandingBreakpointEdited, location.breakpoint, "f");
            }
            await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(location);
        }
    }
    breakpointsRemoved(breakpointItems) {
        const locations = breakpointItems.flatMap(breakpointItem => __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_getLocationsForBreakpointItem).call(this, breakpointItem));
        locations.forEach(location => location?.breakpoint.remove(false /* keepInStorage */));
    }
    expandedStateChanged(url, expanded) {
        if (expanded) {
            __classPrivateFieldGet(this, _BreakpointsSidebarController_collapsedFiles, "f").delete(url);
        }
        else {
            __classPrivateFieldGet(this, _BreakpointsSidebarController_collapsedFiles, "f").add(url);
        }
        __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_saveSettings).call(this);
    }
    async jumpToSource(breakpointItem) {
        const uiLocations = __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_getLocationsForBreakpointItem).call(this, breakpointItem).map(location => location.uiLocation);
        let uiLocation;
        for (const uiLocationCandidate of uiLocations) {
            if (!uiLocation || uiLocationCandidate.compareTo(uiLocation) < 0) {
                uiLocation = uiLocationCandidate;
            }
        }
        if (uiLocation) {
            await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiLocation);
        }
    }
    setPauseOnUncaughtExceptions(value) {
        __classPrivateFieldGet(this, _BreakpointsSidebarController_pauseOnUncaughtExceptionSetting, "f").set(value);
    }
    setPauseOnCaughtExceptions(value) {
        __classPrivateFieldGet(this, _BreakpointsSidebarController_pauseOnCaughtExceptionSetting, "f").set(value);
    }
    async update() {
        __classPrivateFieldSet(this, _BreakpointsSidebarController_updateScheduled, true, "f");
        if (__classPrivateFieldGet(this, _BreakpointsSidebarController_updateRunning, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _BreakpointsSidebarController_updateRunning, true, "f");
        while (__classPrivateFieldGet(this, _BreakpointsSidebarController_updateScheduled, "f")) {
            __classPrivateFieldSet(this, _BreakpointsSidebarController_updateScheduled, false, "f");
            const data = await this.getUpdatedBreakpointViewData();
            BreakpointsView.instance().data = data;
        }
        __classPrivateFieldSet(this, _BreakpointsSidebarController_updateRunning, false, "f");
    }
    async getUpdatedBreakpointViewData() {
        const breakpointsActive = __classPrivateFieldGet(this, _BreakpointsSidebarController_breakpointsActiveSetting, "f").get();
        const independentPauseToggles = BreakpointsSidebarController.targetSupportsIndependentPauseOnExceptionToggles();
        const pauseOnUncaughtExceptions = __classPrivateFieldGet(this, _BreakpointsSidebarController_pauseOnUncaughtExceptionSetting, "f").get();
        const pauseOnCaughtExceptions = __classPrivateFieldGet(this, _BreakpointsSidebarController_pauseOnCaughtExceptionSetting, "f").get();
        const breakpointLocations = __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_getBreakpointLocations).call(this);
        if (!breakpointLocations.length) {
            return {
                breakpointsActive,
                pauseOnCaughtExceptions,
                pauseOnUncaughtExceptions,
                independentPauseToggles,
                groups: [],
            };
        }
        const locationsGroupedById = __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_groupBreakpointLocationsById).call(this, breakpointLocations);
        const locationIdsByLineId = __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_getLocationIdsByLineId).call(this, breakpointLocations);
        const [content, selectedUILocation] = await Promise.all([
            __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_getContent).call(this, locationsGroupedById),
            __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_getHitUILocation).call(this),
        ]);
        const scriptIdToGroup = new Map();
        for (let idx = 0; idx < locationsGroupedById.length; idx++) {
            const locations = locationsGroupedById[idx];
            const fstLocation = locations[0];
            const sourceURL = fstLocation.uiLocation.uiSourceCode.url();
            const scriptId = fstLocation.uiLocation.uiSourceCode.canononicalScriptId();
            const uiLocation = fstLocation.uiLocation;
            const isHit = selectedUILocation !== null &&
                locations.some(location => location.uiLocation.id() === selectedUILocation.id());
            const numBreakpointsOnLine = locationIdsByLineId.get(uiLocation.lineId()).size;
            const showColumn = numBreakpointsOnLine > 1;
            const locationText = uiLocation.lineAndColumnText(showColumn);
            const text = content[idx];
            const codeSnippet = text instanceof _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_7__.Text.Text ?
                text.lineAt(uiLocation.lineNumber) :
                text.lines[text.bytecodeOffsetToLineNumber(uiLocation.columnNumber ?? 0)] ?? '';
            if (isHit && __classPrivateFieldGet(this, _BreakpointsSidebarController_collapsedFiles, "f").has(sourceURL)) {
                __classPrivateFieldGet(this, _BreakpointsSidebarController_collapsedFiles, "f").delete(sourceURL);
                __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_saveSettings).call(this);
            }
            const expanded = !__classPrivateFieldGet(this, _BreakpointsSidebarController_collapsedFiles, "f").has(sourceURL);
            const status = __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_getBreakpointState).call(this, locations);
            const { type, hoverText } = __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_getBreakpointTypeAndDetails).call(this, locations);
            const item = {
                id: fstLocation.breakpoint.breakpointStorageId(),
                location: locationText,
                codeSnippet,
                isHit,
                status,
                type,
                hoverText,
            };
            __classPrivateFieldGet(this, _BreakpointsSidebarController_breakpointItemToLocationMap, "f").set(item, locations);
            let group = scriptIdToGroup.get(scriptId);
            if (group) {
                group.breakpointItems.push(item);
                group.expanded || (group.expanded = expanded);
            }
            else {
                const editable = __classPrivateFieldGet(this, _BreakpointsSidebarController_breakpointManager, "f").supportsConditionalBreakpoints(uiLocation.uiSourceCode);
                group = {
                    url: sourceURL,
                    name: uiLocation.uiSourceCode.displayName(),
                    editable,
                    expanded,
                    breakpointItems: [item],
                };
                scriptIdToGroup.set(scriptId, group);
            }
        }
        return {
            breakpointsActive,
            pauseOnCaughtExceptions,
            pauseOnUncaughtExceptions,
            independentPauseToggles,
            groups: Array.from(scriptIdToGroup.values()),
        };
    }
}
_BreakpointsSidebarController_breakpointManager = new WeakMap(), _BreakpointsSidebarController_breakpointItemToLocationMap = new WeakMap(), _BreakpointsSidebarController_breakpointsActiveSetting = new WeakMap(), _BreakpointsSidebarController_pauseOnUncaughtExceptionSetting = new WeakMap(), _BreakpointsSidebarController_pauseOnCaughtExceptionSetting = new WeakMap(), _BreakpointsSidebarController_collapsedFilesSettings = new WeakMap(), _BreakpointsSidebarController_collapsedFiles = new WeakMap(), _BreakpointsSidebarController_outstandingBreakpointEdited = new WeakMap(), _BreakpointsSidebarController_updateScheduled = new WeakMap(), _BreakpointsSidebarController_updateRunning = new WeakMap(), _BreakpointsSidebarController_instances = new WeakSet(), _BreakpointsSidebarController_onBreakpointAdded = function _BreakpointsSidebarController_onBreakpointAdded(event) {
    const breakpoint = event.data.breakpoint;
    if (breakpoint.origin === _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__.BreakpointManager.BreakpointOrigin.USER_ACTION &&
        __classPrivateFieldGet(this, _BreakpointsSidebarController_collapsedFiles, "f").has(breakpoint.url())) {
        // Auto-expand if a new breakpoint was added to a collapsed group.
        __classPrivateFieldGet(this, _BreakpointsSidebarController_collapsedFiles, "f").delete(breakpoint.url());
        __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_saveSettings).call(this);
    }
    return this.update();
}, _BreakpointsSidebarController_onBreakpointRemoved = function _BreakpointsSidebarController_onBreakpointRemoved(event) {
    const breakpoint = event.data.breakpoint;
    if (__classPrivateFieldGet(this, _BreakpointsSidebarController_collapsedFiles, "f").has(breakpoint.url())) {
        const locations = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__.BreakpointManager.BreakpointManager.instance().allBreakpointLocations();
        const otherBreakpointsOnSameFileExist = locations.some(location => location.breakpoint.url() === breakpoint.url());
        if (!otherBreakpointsOnSameFileExist) {
            // Clear up the #collapsedFiles set from this url if no breakpoint is left in this group.
            __classPrivateFieldGet(this, _BreakpointsSidebarController_collapsedFiles, "f").delete(breakpoint.url());
            __classPrivateFieldGet(this, _BreakpointsSidebarController_instances, "m", _BreakpointsSidebarController_saveSettings).call(this);
        }
    }
    return this.update();
}, _BreakpointsSidebarController_saveSettings = function _BreakpointsSidebarController_saveSettings() {
    __classPrivateFieldGet(this, _BreakpointsSidebarController_collapsedFilesSettings, "f").set(Array.from(__classPrivateFieldGet(this, _BreakpointsSidebarController_collapsedFiles, "f").values()));
}, _BreakpointsSidebarController_getBreakpointTypeAndDetails = function _BreakpointsSidebarController_getBreakpointTypeAndDetails(locations) {
    const breakpointWithCondition = locations.find(location => Boolean(location.breakpoint.condition()));
    const breakpoint = breakpointWithCondition?.breakpoint;
    if (!breakpoint || !breakpoint.condition()) {
        return { type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT };
    }
    const condition = breakpoint.condition();
    if (breakpoint.isLogpoint()) {
        return { type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.BreakpointType.LOGPOINT, hoverText: condition };
    }
    return { type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT, hoverText: condition };
}, _BreakpointsSidebarController_getLocationsForBreakpointItem = function _BreakpointsSidebarController_getLocationsForBreakpointItem(breakpointItem) {
    const locations = __classPrivateFieldGet(this, _BreakpointsSidebarController_breakpointItemToLocationMap, "f").get(breakpointItem);
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.assertNotNullOrUndefined)(locations);
    return locations;
}, _BreakpointsSidebarController_getHitUILocation = async function _BreakpointsSidebarController_getHitUILocation() {
    const details = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerPausedDetails);
    if (details && details.callFrames.length) {
        return await _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(details.callFrames[0].location());
    }
    return null;
}, _BreakpointsSidebarController_getBreakpointLocations = function _BreakpointsSidebarController_getBreakpointLocations() {
    const locations = __classPrivateFieldGet(this, _BreakpointsSidebarController_breakpointManager, "f").allBreakpointLocations().filter(breakpointLocation => breakpointLocation.uiLocation.uiSourceCode.project().type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.Debugger);
    locations.sort((item1, item2) => item1.uiLocation.compareTo(item2.uiLocation));
    const result = [];
    let lastBreakpoint = null;
    let lastLocation = null;
    for (const location of locations) {
        if (location.breakpoint !== lastBreakpoint || (lastLocation && location.uiLocation.compareTo(lastLocation))) {
            result.push(location);
            lastBreakpoint = location.breakpoint;
            lastLocation = location.uiLocation;
        }
    }
    return result;
}, _BreakpointsSidebarController_groupBreakpointLocationsById = function _BreakpointsSidebarController_groupBreakpointLocationsById(breakpointLocations) {
    const map = new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.MapUtilities.Multimap();
    for (const breakpointLocation of breakpointLocations) {
        const uiLocation = breakpointLocation.uiLocation;
        map.set(uiLocation.id(), breakpointLocation);
    }
    const arr = [];
    for (const id of map.keysArray()) {
        const locations = Array.from(map.get(id));
        if (locations.length) {
            arr.push(locations);
        }
    }
    return arr;
}, _BreakpointsSidebarController_getLocationIdsByLineId = function _BreakpointsSidebarController_getLocationIdsByLineId(breakpointLocations) {
    const result = new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.MapUtilities.Multimap();
    for (const breakpointLocation of breakpointLocations) {
        const uiLocation = breakpointLocation.uiLocation;
        result.set(uiLocation.lineId(), uiLocation.id());
    }
    return result;
}, _BreakpointsSidebarController_getBreakpointState = function _BreakpointsSidebarController_getBreakpointState(locations) {
    const hasEnabled = locations.some(location => location.breakpoint.enabled());
    const hasDisabled = locations.some(location => !location.breakpoint.enabled());
    let status;
    if (hasEnabled) {
        status = hasDisabled ? BreakpointStatus.INDETERMINATE : BreakpointStatus.ENABLED;
    }
    else {
        status = BreakpointStatus.DISABLED;
    }
    return status;
}, _BreakpointsSidebarController_getContent = function _BreakpointsSidebarController_getContent(locations) {
    // Use a cache to share the Text objects between all breakpoints. This way
    // we share the cached line ending information that Text calculates. This
    // was very slow to calculate with a lot of breakpoints in the same very
    // large source file.
    const contentToTextMap = new Map();
    return Promise.all(locations.map(async ([{ uiLocation: { uiSourceCode } }]) => {
        const deferredContent = await uiSourceCode.requestContent({ cachedWasmOnly: true });
        if ('wasmDisassemblyInfo' in deferredContent && deferredContent.wasmDisassemblyInfo) {
            return deferredContent.wasmDisassemblyInfo;
        }
        const contentText = deferredContent.content || '';
        if (contentToTextMap.has(contentText)) {
            return contentToTextMap.get(contentText);
        }
        const text = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_7__.Text.Text(contentText);
        contentToTextMap.set(contentText, text);
        return text;
    }));
};
class BreakpointsView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_11__.LegacyWrapper.WrappableComponent {
    static instance({ forceNew } = { forceNew: false }) {
        if (!breakpointsViewInstance || forceNew) {
            breakpointsViewInstance = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_11__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Widget.Widget, new BreakpointsView());
        }
        return breakpointsViewInstance.getComponent();
    }
    constructor() {
        super();
        _BreakpointsView_instances.add(this);
        _BreakpointsView_controller.set(this, void 0);
        _BreakpointsView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _BreakpointsView_pauseOnUncaughtExceptions.set(this, false);
        _BreakpointsView_pauseOnCaughtExceptions.set(this, false);
        // TODO(crbug.com/1382762): Remove special casing with dependent toggles as soon as Node LTS caught up on independent pause of exception toggles.
        _BreakpointsView_independentPauseToggles.set(this, false);
        _BreakpointsView_breakpointsActive.set(this, true);
        _BreakpointsView_breakpointGroups.set(this, []);
        _BreakpointsView_urlToDifferentiatingPath.set(this, new Map());
        __classPrivateFieldSet(this, _BreakpointsView_controller, BreakpointsSidebarController.instance(), "f");
        this.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.section('sources.js-breakpoints')}`);
        void __classPrivateFieldGet(this, _BreakpointsView_controller, "f").update();
    }
    set data(data) {
        __classPrivateFieldSet(this, _BreakpointsView_pauseOnUncaughtExceptions, data.pauseOnUncaughtExceptions, "f");
        __classPrivateFieldSet(this, _BreakpointsView_pauseOnCaughtExceptions, data.pauseOnCaughtExceptions, "f");
        __classPrivateFieldSet(this, _BreakpointsView_independentPauseToggles, data.independentPauseToggles, "f");
        __classPrivateFieldSet(this, _BreakpointsView_breakpointsActive, data.breakpointsActive, "f");
        __classPrivateFieldSet(this, _BreakpointsView_breakpointGroups, data.groups, "f");
        const titleInfos = [];
        for (const group of data.groups) {
            titleInfos.push({ name: group.name, url: group.url });
        }
        __classPrivateFieldSet(this, _BreakpointsView_urlToDifferentiatingPath, (0,_BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_17__.getDifferentiatingPathMap)(titleInfos), "f");
        void this.render();
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _BreakpointsView_shadow, "f").adoptedStyleSheets = [_ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_10__.checkboxStyles, Object(function webpackMissingModule() { var e = new Error("Cannot find module './breakpointsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    async render() {
        await coordinator.write('BreakpointsView render', () => {
            const clickHandler = async (event) => {
                const currentTarget = event.currentTarget;
                await __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_setSelected).call(this, currentTarget);
                event.consume();
            };
            const pauseOnCaughtIsChecked = (__classPrivateFieldGet(this, _BreakpointsView_independentPauseToggles, "f") || __classPrivateFieldGet(this, _BreakpointsView_pauseOnUncaughtExceptions, "f")) && __classPrivateFieldGet(this, _BreakpointsView_pauseOnCaughtExceptions, "f");
            const pauseOnCaughtExceptionIsDisabled = !__classPrivateFieldGet(this, _BreakpointsView_independentPauseToggles, "f") && !__classPrivateFieldGet(this, _BreakpointsView_pauseOnUncaughtExceptions, "f");
            // clang-format off
            const out = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html `
        <div class='pause-on-uncaught-exceptions'
            tabindex='0'
            @click=${clickHandler}
            @keydown=${__classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_keyDownHandler)}
            role='checkbox'
            aria-checked=${__classPrivateFieldGet(this, _BreakpointsView_pauseOnUncaughtExceptions, "f")}
            data-first-pause>
          <label class='checkbox-label'>
            <input type='checkbox' tabindex=-1 class="small" ?checked=${__classPrivateFieldGet(this, _BreakpointsView_pauseOnUncaughtExceptions, "f")} @change=${__classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_onPauseOnUncaughtExceptionsStateChanged).bind(this)} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.toggle('pause-uncaught').track({ change: true })}>
            <span>${i18nString(UIStrings.pauseOnUncaughtExceptions)}</span>
          </label>
        </div>
        <div class='pause-on-caught-exceptions'
              tabindex='-1'
              @click=${clickHandler}
              @keydown=${__classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_keyDownHandler)}
              role='checkbox'
              aria-checked=${pauseOnCaughtIsChecked}
              data-last-pause>
            <label class='checkbox-label'>
              <input data-pause-on-caught-checkbox type='checkbox' class="small" tabindex=-1 ?checked=${pauseOnCaughtIsChecked} ?disabled=${pauseOnCaughtExceptionIsDisabled} @change=${__classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_onPauseOnCaughtExceptionsStateChanged).bind(this)} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.toggle('pause-on-caught-exception').track({ change: true })}>
              <span>${i18nString(UIStrings.pauseOnCaughtExceptions)}</span>
            </label>
        </div>
        <div role=tree>
          ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.repeat(__classPrivateFieldGet(this, _BreakpointsView_breakpointGroups, "f"), group => group.url, (group, groupIndex) => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html `${__classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_renderBreakpointGroup).call(this, group, groupIndex)}`)}
        </div>`;
            // clang-format on
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.render(out, __classPrivateFieldGet(this, _BreakpointsView_shadow, "f"), { host: this });
        });
        // If no element is tabbable, set the pause-on-exceptions to be tabbable. This can happen
        // if the previously focused element was removed.
        await coordinator.write('BreakpointsView make pause-on-exceptions focusable', () => {
            if (__classPrivateFieldGet(this, _BreakpointsView_shadow, "f").querySelector('[tabindex="0"]') === null) {
                const element = __classPrivateFieldGet(this, _BreakpointsView_shadow, "f").querySelector('[data-first-pause]');
                element?.setAttribute('tabindex', '0');
            }
        });
    }
}
_BreakpointsView_controller = new WeakMap(), _BreakpointsView_shadow = new WeakMap(), _BreakpointsView_pauseOnUncaughtExceptions = new WeakMap(), _BreakpointsView_pauseOnCaughtExceptions = new WeakMap(), _BreakpointsView_independentPauseToggles = new WeakMap(), _BreakpointsView_breakpointsActive = new WeakMap(), _BreakpointsView_breakpointGroups = new WeakMap(), _BreakpointsView_urlToDifferentiatingPath = new WeakMap(), _BreakpointsView_instances = new WeakSet(), _BreakpointsView_keyDownHandler = async function _BreakpointsView_keyDownHandler(event) {
    if (!event.target || !(event.target instanceof HTMLElement)) {
        return;
    }
    if (event.key === 'Home' || event.key === 'End') {
        event.consume(true);
        return __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_handleHomeOrEndKey).call(this, event.key);
    }
    if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.keyIsArrowKey(event.key)) {
        event.consume(true);
        return __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_handleArrowKey).call(this, event.key, event.target);
    }
    if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEnterOrSpaceKey(event)) {
        const currentTarget = event.currentTarget;
        await __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_setSelected).call(this, currentTarget);
        const input = currentTarget.querySelector('input');
        if (input) {
            input.click();
        }
        event.consume();
    }
    return;
}, _BreakpointsView_setSelected = async function _BreakpointsView_setSelected(element) {
    if (!element) {
        return;
    }
    void coordinator.write('BreakpointsView focus on selected element', () => {
        const prevSelected = __classPrivateFieldGet(this, _BreakpointsView_shadow, "f").querySelector('[tabindex="0"]');
        prevSelected?.setAttribute('tabindex', '-1');
        element.setAttribute('tabindex', '0');
        element.focus();
    });
}, _BreakpointsView_handleArrowKey = async function _BreakpointsView_handleArrowKey(key, target) {
    const setGroupExpandedState = (detailsElement, expanded) => {
        if (expanded) {
            return coordinator.write('BreakpointsView expand', () => {
                detailsElement.setAttribute('open', '');
            });
        }
        return coordinator.write('BreakpointsView expand', () => {
            detailsElement.removeAttribute('open');
        });
    };
    const nextNode = await (0,_BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_17__.findNextNodeForKeyboardNavigation)(target, key, setGroupExpandedState);
    return __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_setSelected).call(this, nextNode);
}, _BreakpointsView_handleHomeOrEndKey = async function _BreakpointsView_handleHomeOrEndKey(key) {
    if (key === 'Home') {
        const pauseOnExceptionsNode = __classPrivateFieldGet(this, _BreakpointsView_shadow, "f").querySelector('[data-first-pause]');
        return __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_setSelected).call(this, pauseOnExceptionsNode);
    }
    if (key === 'End') {
        const numGroups = __classPrivateFieldGet(this, _BreakpointsView_breakpointGroups, "f").length;
        if (numGroups === 0) {
            const lastPauseOnExceptionsNode = __classPrivateFieldGet(this, _BreakpointsView_shadow, "f").querySelector('[data-last-pause]');
            return __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_setSelected).call(this, lastPauseOnExceptionsNode);
        }
        const lastGroupIndex = numGroups - 1;
        const lastGroup = __classPrivateFieldGet(this, _BreakpointsView_breakpointGroups, "f")[lastGroupIndex];
        if (lastGroup.expanded) {
            const lastBreakpointItem = __classPrivateFieldGet(this, _BreakpointsView_shadow, "f").querySelector('[data-last-group] > [data-last-breakpoint]');
            return __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_setSelected).call(this, lastBreakpointItem);
        }
        const lastGroupSummaryElement = __classPrivateFieldGet(this, _BreakpointsView_shadow, "f").querySelector('[data-last-group] > summary');
        return __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_setSelected).call(this, lastGroupSummaryElement);
    }
    return;
}, _BreakpointsView_renderEditBreakpointButton = function _BreakpointsView_renderEditBreakpointButton(breakpointItem) {
    const clickHandler = (event) => {
        void __classPrivateFieldGet(this, _BreakpointsView_controller, "f").breakpointEdited(breakpointItem, true /* editButtonClicked */);
        event.consume();
    };
    const title = breakpointItem.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.BreakpointType.LOGPOINT ?
        i18nString(UIStrings.editLogpoint) :
        i18nString(UIStrings.editCondition);
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html `
    <button data-edit-breakpoint @click=${clickHandler} title=${title} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.action('edit-breakpoint').track({ click: true })}>
      <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.Icon.litTagName} name="edit"></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.Icon.litTagName}>
    </button>
      `;
    // clang-format on
}, _BreakpointsView_renderRemoveBreakpointButton = function _BreakpointsView_renderRemoveBreakpointButton(breakpointItems, tooltipText, action) {
    const clickHandler = (event) => {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(action);
        void __classPrivateFieldGet(this, _BreakpointsView_controller, "f").breakpointsRemoved(breakpointItems);
        event.consume();
    };
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html `
    <button data-remove-breakpoint @click=${clickHandler} title=${tooltipText} aria-label=${tooltipText} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.action('remove-breakpoint').track({ click: true })}>
      <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.Icon.litTagName} name="bin"></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.Icon.litTagName}>
    </button>
      `;
    // clang-format on
}, _BreakpointsView_onBreakpointGroupContextMenu = function _BreakpointsView_onBreakpointGroupContextMenu(event, breakpointGroup) {
    const { breakpointItems } = breakpointGroup;
    const menu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ContextMenu.ContextMenu(event);
    menu.defaultSection().appendItem(i18nString(UIStrings.removeAllBreakpointsInFile), () => {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointsInFileRemovedFromContextMenu);
        void __classPrivateFieldGet(this, _BreakpointsView_controller, "f").breakpointsRemoved(breakpointItems);
    }, { jslogContext: 'remove-file-breakpoints' });
    const otherGroups = __classPrivateFieldGet(this, _BreakpointsView_breakpointGroups, "f").filter(group => group !== breakpointGroup);
    menu.defaultSection().appendItem(i18nString(UIStrings.removeOtherBreakpoints), () => {
        const breakpointItems = otherGroups.map(({ breakpointItems }) => breakpointItems).flat();
        void __classPrivateFieldGet(this, _BreakpointsView_controller, "f").breakpointsRemoved(breakpointItems);
    }, { disabled: otherGroups.length === 0, jslogContext: 'remove-other-breakpoints' });
    menu.defaultSection().appendItem(i18nString(UIStrings.removeAllBreakpoints), () => {
        const breakpointItems = __classPrivateFieldGet(this, _BreakpointsView_breakpointGroups, "f").map(({ breakpointItems }) => breakpointItems).flat();
        void __classPrivateFieldGet(this, _BreakpointsView_controller, "f").breakpointsRemoved(breakpointItems);
    }, { jslogContext: 'remove-all-breakpoints' });
    const notEnabledItems = breakpointItems.filter(breakpointItem => breakpointItem.status !== BreakpointStatus.ENABLED);
    menu.debugSection().appendItem(i18nString(UIStrings.enableAllBreakpointsInFile), () => {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointsInFileEnabledDisabledFromContextMenu);
        for (const breakpointItem of notEnabledItems) {
            __classPrivateFieldGet(this, _BreakpointsView_controller, "f").breakpointStateChanged(breakpointItem, true);
        }
    }, { disabled: notEnabledItems.length === 0, jslogContext: 'enable-file-breakpoints' });
    const notDisabledItems = breakpointItems.filter(breakpointItem => breakpointItem.status !== BreakpointStatus.DISABLED);
    menu.debugSection().appendItem(i18nString(UIStrings.disableAllBreakpointsInFile), () => {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointsInFileEnabledDisabledFromContextMenu);
        for (const breakpointItem of notDisabledItems) {
            __classPrivateFieldGet(this, _BreakpointsView_controller, "f").breakpointStateChanged(breakpointItem, false);
        }
    }, { disabled: notDisabledItems.length === 0, jslogContext: 'disable-file-breakpoints' });
    void menu.show();
}, _BreakpointsView_renderBreakpointGroup = function _BreakpointsView_renderBreakpointGroup(group, groupIndex) {
    const contextmenuHandler = (event) => {
        __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_onBreakpointGroupContextMenu).call(this, event, group);
        event.consume();
    };
    const toggleHandler = (event) => {
        const htmlDetails = event.target;
        group.expanded = htmlDetails.open;
        void __classPrivateFieldGet(this, _BreakpointsView_controller, "f").expandedStateChanged(group.url, group.expanded);
    };
    const clickHandler = async (event) => {
        const selected = event.currentTarget;
        await __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_setSelected).call(this, selected);
        // Record the metric for expanding/collapsing in the click handler,
        // as we only then get the number of expand/collapse actions that were
        // initiated by the user.
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointGroupExpandedStateChanged);
        event.consume();
    };
    const classMap = {
        active: __classPrivateFieldGet(this, _BreakpointsView_breakpointsActive, "f"),
    };
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html `
      <details class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.classMap(classMap)}
               ?data-first-group=${groupIndex === 0}
               ?data-last-group=${groupIndex === __classPrivateFieldGet(this, _BreakpointsView_breakpointGroups, "f").length - 1}
               role=group
               aria-label='${group.name}'
               aria-description='${group.url}'
               ?open=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.live(group.expanded)}
               @toggle=${toggleHandler}>
          <summary @contextmenu=${contextmenuHandler}
                   tabindex='-1'
                   @keydown=${__classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_keyDownHandler)}
                   @click=${clickHandler}>
            <span class='group-header' aria-hidden=true><span class='group-icon-or-disable'>${__classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_renderFileIcon).call(this)}${__classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_renderGroupCheckbox).call(this, group)}</span><span class='group-header-title' title='${group.url}'>${group.name}<span class='group-header-differentiator'>${__classPrivateFieldGet(this, _BreakpointsView_urlToDifferentiatingPath, "f").get(group.url)}</span></span></span>
            <span class='group-hover-actions'>
              ${__classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_renderRemoveBreakpointButton).call(this, group.breakpointItems, i18nString(UIStrings.removeAllBreakpointsInFile), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointsInFileRemovedFromRemoveButton)}
            </span>
          </summary>
        ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.repeat(group.breakpointItems, item => item.id, (item, breakpointItemIndex) => __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_renderBreakpointEntry).call(this, item, group.editable, groupIndex, breakpointItemIndex))}
      </details>
      `;
    // clang-format on
}, _BreakpointsView_renderGroupCheckbox = function _BreakpointsView_renderGroupCheckbox(group) {
    const groupCheckboxToggled = (e) => {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointsInFileCheckboxToggled);
        const element = e.target;
        const updatedStatus = element.checked ? BreakpointStatus.ENABLED : BreakpointStatus.DISABLED;
        const itemsToUpdate = group.breakpointItems.filter(item => item.status !== updatedStatus);
        itemsToUpdate.forEach(item => {
            __classPrivateFieldGet(this, _BreakpointsView_controller, "f").breakpointStateChanged(item, element.checked);
        });
        e.consume();
    };
    const checked = group.breakpointItems.some(item => item.status === BreakpointStatus.ENABLED);
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html `
      <input class='group-checkbox small' type='checkbox'
            aria-label=''
            .checked=${checked}
            @change=${groupCheckboxToggled}
            tabindex=-1
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.toggle('breakpoint-group').track({
        change: true,
    })}>
    `;
}, _BreakpointsView_renderFileIcon = function _BreakpointsView_renderFileIcon() {
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html `<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.Icon.litTagName} name="file-script"></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.Icon.litTagName}>`;
}, _BreakpointsView_onBreakpointEntryContextMenu = function _BreakpointsView_onBreakpointEntryContextMenu(event, breakpointItem, editable) {
    const items = __classPrivateFieldGet(this, _BreakpointsView_breakpointGroups, "f").map(({ breakpointItems }) => breakpointItems).flat();
    const otherItems = items.filter(item => item !== breakpointItem);
    const menu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ContextMenu.ContextMenu(event);
    const editBreakpointText = breakpointItem.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.BreakpointType.LOGPOINT ?
        i18nString(UIStrings.editLogpoint) :
        i18nString(UIStrings.editCondition);
    menu.revealSection().appendItem(i18nString(UIStrings.revealLocation), () => {
        void __classPrivateFieldGet(this, _BreakpointsView_controller, "f").jumpToSource(breakpointItem);
    }, { jslogContext: 'jump-to-breakpoint' });
    menu.editSection().appendItem(editBreakpointText, () => {
        void __classPrivateFieldGet(this, _BreakpointsView_controller, "f").breakpointEdited(breakpointItem, false /* editButtonClicked */);
    }, { disabled: !editable, jslogContext: 'edit-breakpoint' });
    menu.defaultSection().appendItem(i18nString(UIStrings.enableAllBreakpoints), items.forEach.bind(items, item => __classPrivateFieldGet(this, _BreakpointsView_controller, "f").breakpointStateChanged(item, true)), {
        disabled: items.every(item => item.status === BreakpointStatus.ENABLED),
        jslogContext: 'enable-all-breakpoints',
    });
    menu.defaultSection().appendItem(i18nString(UIStrings.disableAllBreakpoints), items.forEach.bind(items, item => __classPrivateFieldGet(this, _BreakpointsView_controller, "f").breakpointStateChanged(item, false)), {
        disabled: items.every(item => item.status === BreakpointStatus.DISABLED),
        jslogContext: 'disable-all-breakpoints',
    });
    menu.footerSection().appendItem(i18nString(UIStrings.removeBreakpoint), () => {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointRemovedFromContextMenu);
        void __classPrivateFieldGet(this, _BreakpointsView_controller, "f").breakpointsRemoved([breakpointItem]);
    }, { jslogContext: 'remove-breakpoint' });
    menu.footerSection().appendItem(i18nString(UIStrings.removeOtherBreakpoints), () => {
        void __classPrivateFieldGet(this, _BreakpointsView_controller, "f").breakpointsRemoved(otherItems);
    }, { disabled: otherItems.length === 0, jslogContext: 'remove-other-breakpoints' });
    menu.footerSection().appendItem(i18nString(UIStrings.removeAllBreakpoints), () => {
        const breakpointItems = __classPrivateFieldGet(this, _BreakpointsView_breakpointGroups, "f").map(({ breakpointItems }) => breakpointItems).flat();
        void __classPrivateFieldGet(this, _BreakpointsView_controller, "f").breakpointsRemoved(breakpointItems);
    }, { jslogContext: 'remove-all-breakpoints' });
    void menu.show();
}, _BreakpointsView_renderBreakpointEntry = function _BreakpointsView_renderBreakpointEntry(breakpointItem, editable, groupIndex, breakpointItemIndex) {
    const codeSnippetClickHandler = (event) => {
        void __classPrivateFieldGet(this, _BreakpointsView_controller, "f").jumpToSource(breakpointItem);
        event.consume();
    };
    const breakpointItemClickHandler = async (event) => {
        const target = event.currentTarget;
        await __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_setSelected).call(this, target);
        event.consume();
    };
    const contextmenuHandler = (event) => {
        __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_onBreakpointEntryContextMenu).call(this, event, breakpointItem, editable);
        event.consume();
    };
    const classMap = {
        'breakpoint-item': true,
        'hit': breakpointItem.isHit,
        'conditional-breakpoint': breakpointItem.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT,
        'logpoint': breakpointItem.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.BreakpointType.LOGPOINT,
    };
    const breakpointItemDescription = __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_getBreakpointItemDescription).call(this, breakpointItem);
    const codeSnippet = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.trimEndWithMaxLength(breakpointItem.codeSnippet, MAX_SNIPPET_LENGTH);
    const codeSnippetTooltip = __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_getCodeSnippetTooltip).call(this, breakpointItem.type, breakpointItem.hoverText);
    const itemsInGroup = __classPrivateFieldGet(this, _BreakpointsView_breakpointGroups, "f")[groupIndex].breakpointItems;
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html `
    <div class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.classMap(classMap)}
         ?data-first-breakpoint=${breakpointItemIndex === 0}
         ?data-last-breakpoint=${breakpointItemIndex === itemsInGroup.length - 1}
         aria-label=${breakpointItemDescription}
         role=treeitem
         tabindex='-1'
         @contextmenu=${contextmenuHandler}
         @click=${breakpointItemClickHandler}
         @keydown=${__classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_keyDownHandler)}>
      <label class='checkbox-label'>
        <span class='type-indicator'></span>
        <input type='checkbox'
              aria-label=${breakpointItem.location}
              class='small'
              ?indeterminate=${breakpointItem.status === BreakpointStatus.INDETERMINATE}
              .checked=${breakpointItem.status === BreakpointStatus.ENABLED}
              @change=${(e) => __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_onCheckboxToggled).call(this, e, breakpointItem)}
              tabindex=-1
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.toggle('breakpoint').track({ change: true })}>
      </label>
      <span class='code-snippet' @click=${codeSnippetClickHandler} title=${codeSnippetTooltip} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.action('sources.jump-to-breakpoint').track({ click: true })}>${codeSnippet}</span>
      <span class='breakpoint-item-location-or-actions'>
        ${editable ? __classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_renderEditBreakpointButton).call(this, breakpointItem) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.nothing}
        ${__classPrivateFieldGet(this, _BreakpointsView_instances, "m", _BreakpointsView_renderRemoveBreakpointButton).call(this, [breakpointItem], i18nString(UIStrings.removeBreakpoint), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointRemovedFromRemoveButton)}
        <span class='location'>${breakpointItem.location}</span>
      </span>
    </div>
    `;
    // clang-format on
}, _BreakpointsView_getCodeSnippetTooltip = function _BreakpointsView_getCodeSnippetTooltip(type, hoverText) {
    switch (type) {
        case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT:
            return undefined;
        case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT:
            (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.assertNotNullOrUndefined)(hoverText);
            return i18nString(UIStrings.conditionCode, { PH1: hoverText });
        case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.BreakpointType.LOGPOINT:
            (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.assertNotNullOrUndefined)(hoverText);
            return i18nString(UIStrings.logpointCode, { PH1: hoverText });
    }
}, _BreakpointsView_getBreakpointItemDescription = function _BreakpointsView_getBreakpointItemDescription(breakpointItem) {
    let checkboxDescription;
    switch (breakpointItem.status) {
        case BreakpointStatus.ENABLED:
            checkboxDescription = i18nString(UIStrings.checked);
            break;
        case BreakpointStatus.DISABLED:
            checkboxDescription = i18nString(UIStrings.unchecked);
            break;
        case BreakpointStatus.INDETERMINATE:
            checkboxDescription = i18nString(UIStrings.indeterminate);
            break;
    }
    if (!breakpointItem.isHit) {
        return checkboxDescription;
    }
    return i18nString(UIStrings.breakpointHit, { PH1: checkboxDescription });
}, _BreakpointsView_onCheckboxToggled = function _BreakpointsView_onCheckboxToggled(e, item) {
    const element = e.target;
    __classPrivateFieldGet(this, _BreakpointsView_controller, "f").breakpointStateChanged(item, element.checked);
}, _BreakpointsView_onPauseOnCaughtExceptionsStateChanged = function _BreakpointsView_onPauseOnCaughtExceptionsStateChanged(e) {
    const { checked } = e.target;
    __classPrivateFieldGet(this, _BreakpointsView_controller, "f").setPauseOnCaughtExceptions(checked);
}, _BreakpointsView_onPauseOnUncaughtExceptionsStateChanged = function _BreakpointsView_onPauseOnUncaughtExceptionsStateChanged(e) {
    const { checked } = e.target;
    if (!__classPrivateFieldGet(this, _BreakpointsView_independentPauseToggles, "f")) {
        const pauseOnCaughtCheckbox = __classPrivateFieldGet(this, _BreakpointsView_shadow, "f").querySelector('[data-pause-on-caught-checkbox]');
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.assertNotNullOrUndefined)(pauseOnCaughtCheckbox);
        if (!checked && pauseOnCaughtCheckbox.checked) {
            // If we can only pause on caught exceptions if we pause on uncaught exceptions, make sure to
            // uncheck the pause on caught exception checkbox.
            pauseOnCaughtCheckbox.click();
        }
        void coordinator.write('BreakpointsView update pause-on-uncaught-exception', () => {
            // Disable/enable the pause on caught exception checkbox depending on whether
            // or not we are pausing on uncaught exceptions.
            if (checked) {
                pauseOnCaughtCheckbox.disabled = false;
            }
            else {
                pauseOnCaughtCheckbox.disabled = true;
            }
        });
    }
    __classPrivateFieldGet(this, _BreakpointsView_controller, "f").setPauseOnUncaughtExceptions(checked);
};
Object.defineProperty(BreakpointsView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.literal `devtools-breakpoint-view`
});
customElements.define('devtools-breakpoint-view', BreakpointsView);


/***/ })

}]);