"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_testing_EnvironmentHelpers_ts"],{

/***/ "./src/testing/EnvironmentHelpers.ts":
/*!*******************************************!*\
  !*** ./src/testing/EnvironmentHelpers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFakeSetting: () => (/* binding */ createFakeSetting),
/* harmony export */   createTarget: () => (/* binding */ createTarget),
/* harmony export */   deinitializeGlobalLocaleVars: () => (/* binding */ deinitializeGlobalLocaleVars),
/* harmony export */   deinitializeGlobalVars: () => (/* binding */ deinitializeGlobalVars),
/* harmony export */   describeWithEnvironment: () => (/* binding */ describeWithEnvironment),
/* harmony export */   describeWithLocale: () => (/* binding */ describeWithLocale),
/* harmony export */   enableFeatureForTest: () => (/* binding */ enableFeatureForTest),
/* harmony export */   expectConsoleLogs: () => (/* binding */ expectConsoleLogs),
/* harmony export */   getGetHostConfigStub: () => (/* binding */ getGetHostConfigStub),
/* harmony export */   initializeGlobalLocaleVars: () => (/* binding */ initializeGlobalLocaleVars),
/* harmony export */   initializeGlobalVars: () => (/* binding */ initializeGlobalVars),
/* harmony export */   registerNoopActions: () => (/* binding */ registerNoopActions),
/* harmony export */   setupActionRegistry: () => (/* binding */ setupActionRegistry),
/* harmony export */   stubNoopSettings: () => (/* binding */ stubNoopSettings)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/logs/logs.js */ "./src/models/logs/logs.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










// Don't import UI at this stage because it will fail without
// the environment. Instead we do the import at the end of the
// initialization phase.
// eslint-disable-next-line @typescript-eslint/naming-convention
let UI;
let uniqueTargetId = 0;
function createTarget({ id, name, type = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame, parentTarget, subtype, url = 'http://example.com' } = {}) {
    if (!id) {
        if (!uniqueTargetId++) {
            id = 'test';
        }
        else {
            id = ('test' + uniqueTargetId);
        }
    }
    const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance();
    return targetManager.createTarget(id, name ?? id, type, parentTarget ? parentTarget : null, /* sessionId=*/ parentTarget ? id : undefined, 
    /* suspended=*/ false, 
    /* connection=*/ undefined, { targetId: id, url, subtype });
}
function createSettingValue(category, settingName, defaultValue, settingType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN) {
    return { category, settingName, defaultValue, settingType };
}
function stubNoopSettings() {
    sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings, 'instance').returns({
        createSetting: () => ({
            get: () => [],
            set: () => { },
            addChangeListener: () => { },
            removeChangeListener: () => { },
            setDisabled: () => { },
            setTitle: () => { },
            title: () => { },
            asRegExp: () => { },
            type: () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN,
            getAsArray: () => [],
        }),
        moduleSetting: () => ({
            get: () => [],
            set: () => { },
            addChangeListener: () => { },
            removeChangeListener: () => { },
            setDisabled: () => { },
            setTitle: () => { },
            title: () => { },
            asRegExp: () => { },
            type: () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN,
            getAsArray: () => [],
        }),
        createLocalSetting: () => ({
            get: () => [],
            set: () => { },
            addChangeListener: () => { },
            removeChangeListener: () => { },
            setDisabled: () => { },
            setTitle: () => { },
            title: () => { },
            asRegExp: () => { },
            type: () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN,
            getAsArray: () => [],
        }),
        getHostConfig: () => { },
    });
}
function registerNoopActions(actionIds) {
    for (const actionId of actionIds) {
        UI.ActionRegistration.maybeRemoveActionExtension(actionId);
        UI.ActionRegistration.registerActionExtension({
            actionId,
            category: UI.ActionRegistration.ActionCategory.NONE,
            title: () => 'mock',
        });
    }
    const actionRegistryInstance = UI.ActionRegistry.ActionRegistry.instance({ forceNew: true });
    UI.ShortcutRegistry.ShortcutRegistry.instance({ forceNew: true, actionRegistry: actionRegistryInstance });
}
const REGISTERED_EXPERIMENTS = [
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.CAPTURE_NODE_CREATION_STACKS,
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.PROTOCOL_MONITOR,
    'timeline-show-all-events',
    'timeline-v8-runtime-call-stats',
    'timeline-invalidation-tracking',
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS,
    'css-type-component-length-deprecate',
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.STYLES_PANE_CSS_CHANGES,
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.HEADER_OVERRIDES,
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.HIGHLIGHT_ERRORS_ELEMENTS_PANEL,
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.USE_SOURCE_MAP_SCOPES,
    'font-editor',
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN,
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.INDENTATION_MARKERS_TEMP_DISABLE,
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.AUTOFILL_VIEW,
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.TIMELINE_ANNOTATIONS_OVERLAYS,
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.TIMELINE_SIDEBAR,
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.TIMELINE_DEBUG_MODE,
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.TIMELINE_OBSERVATIONS,
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.FULL_ACCESSIBILITY_TREE,
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.TIMELINE_SHOW_POST_MESSAGE_EVENTS,
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.ExperimentName.TIMELINE_ENHANCED_TRACES,
];
async function initializeGlobalVars({ reset = true } = {}) {
    await initializeGlobalLocaleVars();
    // Create the appropriate settings needed to boot.
    const settings = [
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.ADORNER, 'adorner-settings', [], _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ARRAY),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.APPEARANCE, 'disable-paused-state-overlay', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.APPEARANCE, 'sidebar-position', 'auto', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.CONSOLE, 'custom-formatters', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.DEBUGGER, 'pause-on-exception-enabled', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.DEBUGGER, 'pause-on-caught-exception', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.DEBUGGER, 'pause-on-uncaught-exception', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.DEBUGGER, 'disable-async-stack-traces', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.DEBUGGER, 'breakpoints-active', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.DEBUGGER, 'java-script-disabled', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.DEBUGGER, 'skip-content-scripts', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.DEBUGGER, 'automatically-ignore-list-known-third-party-scripts', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.DEBUGGER, 'enable-ignore-listing', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.DEBUGGER, 'skip-stack-frames-pattern', '/node_modules/|/bower_components/', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.REGEX),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.DEBUGGER, 'navigator-group-by-folder', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.ELEMENTS, 'show-detailed-inspect-tooltip', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.ELEMENTS, 'show-html-comments', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.ELEMENTS, 'show-ua-shadow-dom', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.NETWORK, 'cache-disabled', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'avif-format-disabled', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'emulated-css-media', '', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'emulated-css-media-feature-prefers-color-scheme', '', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'emulated-css-media-feature-forced-colors', '', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'emulated-css-media-feature-prefers-reduced-motion', '', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'emulated-css-media-feature-prefers-contrast', '', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'emulated-css-media-feature-prefers-reduced-data', '', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'emulated-css-media-feature-prefers-reduced-transparency', '', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'emulated-css-media-feature-color-gamut', '', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'emulated-vision-deficiency', '', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'emulate-auto-dark-mode', '', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'local-fonts-disabled', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'show-paint-rects', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'show-layout-shift-regions', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'show-ad-highlights', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'show-debug-borders', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'show-fps-counter', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'show-scroll-bottleneck-rects', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'show-web-vitals', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.RENDERING, 'webp-format-disabled', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.SOURCES, 'allow-scroll-past-eof', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.SOURCES, 'css-source-maps-enabled', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.SOURCES, 'inline-variable-values', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.SOURCES, 'auto-pretty-print-minified', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.SOURCES, 'js-source-maps-enabled', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.SOURCES, 'show-whitespaces-in-editor', 'none'),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.SOURCES, 'text-editor-autocompletion', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.SOURCES, 'text-editor-auto-detect-indent', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.SOURCES, 'text-editor-bracket-closing', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.SOURCES, 'text-editor-bracket-matching', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.SOURCES, 'text-editor-code-folding', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.SOURCES, 'text-editor-indent', '    '),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.SOURCES, 'text-editor-tab-moves-focus', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.SOURCES, 'dom-word-wrap', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.EMULATION, 'emulation.touch', '', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.EMULATION, 'emulation.idle-detection', '', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.GRID, 'show-grid-line-labels', 'none', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.GRID, 'extend-grid-lines', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.GRID, 'show-grid-areas', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.GRID, 'show-grid-track-sizes', true),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.NONE, 'active-keybind-set', '', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.NONE, 'user-shortcuts', [], _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ARRAY),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.APPEARANCE, 'help.show-release-note', true, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.NETWORK, 'request-blocking-enabled', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.CONSOLE, 'monitoring-xhr-enabled', false),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.NONE, 'custom-network-conditions', [], _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ARRAY),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.APPEARANCE, 'ui-theme', 'systemPreferred', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.APPEARANCE, 'language', 'en-US', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.PERSISTENCE, 'persistence-network-overrides-enabled', true, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.NETWORK, 'network-log.preserve-log', true, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.NETWORK, 'network-log.record-log', true, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.SOURCES, 'network.enable-remote-file-loading', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.CONSOLE, 'hide-network-messages', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.CONSOLE, 'selected-context-filter-enabled', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.CONSOLE, 'console-group-similar', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.CONSOLE, 'console-shows-cors-errors', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.CONSOLE, 'console-timestamps-enabled', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.CONSOLE, 'console-insights-enabled', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.CONSOLE, 'console-insights-onboarding-finished', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.CONSOLE, 'console-history-autocomplete', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.CONSOLE, 'console-autocomplete-on-enter', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.CONSOLE, 'preserve-console-log', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.CONSOLE, 'console-eager-eval', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.CONSOLE, 'console-user-activation-eval', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.CONSOLE, 'console-trace-expand', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.PERFORMANCE, 'flamechart-mouse-wheel-action', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.ELEMENTS, 'show-css-property-documentation-on-hover', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
        createSettingValue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.NONE, 'freestyler-dogfood-consent-onboarding-finished', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN),
    ];
    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.registerSettingsForTest(settings, reset);
    // Instantiate the storage.
    const storage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({}, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.NOOP_STORAGE, 'test');
    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({ forceNew: reset, syncedStorage: storage, globalStorage: storage, localStorage: storage });
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.clearForTest();
    for (const experimentName of REGISTERED_EXPERIMENTS) {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.register(experimentName, '');
    }
    // Dynamically import UI after the rest of the environment is set up, otherwise it will fail.
    UI = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts"));
    UI.ZoomManager.ZoomManager.instance({ forceNew: true, win: window, frontendHost: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance });
    // Initialize theme support and context menus.
    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('uiTheme', 'systemPreferred');
    UI.UIUtils.initializeUIUtils(document);
}
async function deinitializeGlobalVars() {
    // Remove the global SDK.
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const globalObject = globalThis;
    delete globalObject.SDK;
    delete globalObject.ls;
    for (const target of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().targets()) {
        target.dispose('deinitializeGlobalVars');
    }
    // Remove instances.
    await deinitializeGlobalLocaleVars();
    _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_7__.NetworkLog.NetworkLog.removeInstance();
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.removeInstance();
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.Runtime.removeInstance();
    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.removeInstance();
    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerRegistry.removeInstance();
    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.removeInstance();
    _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.WorkspaceImpl.removeInstance();
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.IgnoreListManager.IgnoreListManager.removeInstance();
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.removeInstance();
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.CSSWorkspaceBinding.CSSWorkspaceBinding.removeInstance();
    _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssuesManager.removeInstance();
    _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.IsolatedFileSystemManager.IsolatedFileSystemManager.removeInstance();
    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.resetSettings();
    // Protect against the dynamic import not having happened.
    if (UI) {
        UI.ZoomManager.ZoomManager.removeInstance();
        UI.ViewManager.ViewManager.removeInstance();
        UI.ViewManager.resetViewRegistration();
        UI.Context.Context.removeInstance();
        UI.InspectorView.InspectorView.removeInstance();
        UI.ActionRegistry.ActionRegistry.reset();
    }
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.clearForTest();
}
function describeWithEnvironment(title, fn, opts = {
    reset: true,
}) {
    return describe(title, function () {
        before(async () => await initializeGlobalVars(opts));
        fn.call(this);
        after(async () => await deinitializeGlobalVars());
    });
}
describeWithEnvironment.only = function (title, fn, opts = {
    reset: true,
}) {
    // eslint-disable-next-line mocha/no-exclusive-tests
    return describe.only(title, function () {
        before(async () => await initializeGlobalVars(opts));
        fn.call(this);
        after(async () => await deinitializeGlobalVars());
    });
};
async function initializeGlobalLocaleVars() {
    // Expose the locale.
    _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.DevToolsLocale.DevToolsLocale.instance({
        create: true,
        data: {
            navigatorLanguage: 'en-US',
            settingLanguage: 'en-US',
            lookupClosestDevToolsLocale: () => 'en-US',
        },
    });
    if (_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.hasLocaleDataForTest('en-US')) {
        return;
    }
    // Load the strings from the resource file.
    try {
        await _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.fetchAndRegisterLocaleData('en-US');
    }
    catch (error) {
        // eslint-disable-next-line no-console
        console.warn('EnvironmentHelper: Loading en-US locale failed', error.message);
    }
}
function deinitializeGlobalLocaleVars() {
    _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.DevToolsLocale.DevToolsLocale.removeInstance();
}
function describeWithLocale(title, fn) {
    return describe(title, function () {
        before(async () => await initializeGlobalLocaleVars());
        fn.call(this);
        after(deinitializeGlobalLocaleVars);
    });
}
describeWithLocale.only = function (title, fn) {
    // eslint-disable-next-line mocha/no-exclusive-tests
    return describe.only(title, function () {
        before(async () => await initializeGlobalLocaleVars());
        fn.call(this);
        after(deinitializeGlobalLocaleVars);
    });
};
describeWithLocale.skip = function (title, fn) {
    // eslint-disable-next-line rulesdir/check_test_definitions
    return describe.skip(title, function () {
        fn.call(this);
    });
};
function createFakeSetting(name, defaultValue) {
    const storage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({}, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.NOOP_STORAGE, 'test');
    return new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Setting(name, defaultValue, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper(), storage);
}
function enableFeatureForTest(feature) {
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.enableForTest(feature);
}
function setupActionRegistry() {
    before(function () {
        const actionRegistry = UI.ActionRegistry.ActionRegistry.instance();
        UI.ShortcutRegistry.ShortcutRegistry.instance({
            forceNew: true,
            actionRegistry,
        });
    });
    after(function () {
        if (UI) {
            UI.ShortcutRegistry.ShortcutRegistry.removeInstance();
            UI.ActionRegistry.ActionRegistry.removeInstance();
        }
    });
}
function expectConsoleLogs(expectedLogs) {
    const { error, warn, log } = console;
    before(() => {
        if (expectedLogs.log) {
            // eslint-disable-next-line no-console
            console.log = (...data) => {
                if (!expectedLogs.log?.includes(data.join(' '))) {
                    log(...data);
                }
            };
        }
        if (expectedLogs.warn) {
            console.warn = (...data) => {
                if (!expectedLogs.warn?.includes(data.join(' '))) {
                    warn(...data);
                }
            };
        }
        if (expectedLogs.error) {
            console.error = (...data) => {
                if (!expectedLogs.error?.includes(data.join(' '))) {
                    error(...data);
                }
            };
        }
    });
    after(() => {
        if (expectedLogs.log) {
            // eslint-disable-next-line no-console
            console.log = log;
        }
        if (expectedLogs.warn) {
            console.warn = warn;
        }
        if (expectedLogs.error) {
            console.error = error;
        }
    });
}
function getGetHostConfigStub(config) {
    const settings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance();
    return sinon.stub(settings, 'getHostConfig').returns({
        devToolsConsoleInsights: {
            enabled: false,
            aidaModelId: '',
            aidaTemperature: 0.2,
            ...config.devToolsConsoleInsights,
        },
        devToolsFreestylerDogfood: {
            aidaModelId: '',
            aidaTemperature: 0,
            enabled: false,
            ...config.devToolsFreestylerDogfood,
        },
        devToolsVeLogging: {
            enabled: true,
            testing: false,
        },
    });
}


/***/ })

}]);