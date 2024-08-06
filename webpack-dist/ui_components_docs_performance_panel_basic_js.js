"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_performance_panel_basic_js"],{

/***/ "./ui/components/docs/performance_panel/basic.js":
/*!*******************************************************!*\
  !*** ./ui/components/docs/performance_panel/basic.js ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../panels/timeline/timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









/**
 * Because the panel is not quite as isolated as other components we have to
 * do a bit of setup globally to ensure the panel can render, primarily creating
 * some actions and settings. We also have to instantiate some instances which
 * would usually be setup in MainImpl when running DevTools, but we can set them
 * up here rather than pull in all of the setup from elsewhere. Over time we
 * should look to reduce this global setup and pass data into the panel.
 **/
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.initializeGlobalVars();
await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_8__.ComponentServerSetup.setup();
const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceMapping.ResourceMapping(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance(), _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance());
_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
    forceNew: true,
    resourceMapping,
    targetManager: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance(),
});
_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.IgnoreListManager.IgnoreListManager.instance({
    forceNew: true,
    debuggerWorkspaceBinding: _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance(),
});
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CPUThrottlingManager.CPUThrottlingManager.instance().setHardwareConcurrency(128);
_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistration.registerActionExtension({
    actionId: 'timeline.record-reload',
    iconClass: "refresh" /* UI.ActionRegistration.IconClass.REFRESH */,
    category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */,
    contextTypes() {
        return [_panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelinePanel.TimelinePanel];
    },
    bindings: [
        {
            platform: "windows,linux" /* UI.ActionRegistration.Platforms.WindowsLinux */,
            shortcut: 'Ctrl+Shift+E',
        },
        {
            platform: "mac" /* UI.ActionRegistration.Platforms.Mac */,
            shortcut: 'Meta+Shift+E',
        },
    ],
});
_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistration.registerActionExtension({
    actionId: 'timeline.show-history',
    category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */,
    contextTypes() {
        return [_panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelinePanel.TimelinePanel];
    },
    async loadActionDelegate() {
        return new _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelinePanel.ActionDelegate();
    },
});
_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistration.registerActionExtension({
    actionId: 'components.collect-garbage',
    category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */,
    iconClass: "mop" /* UI.ActionRegistration.IconClass.MOP */,
});
_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistration.registerActionExtension({
    actionId: 'timeline.toggle-recording',
    title: () => 'Toggle recording',
    toggleable: true,
    category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */,
    iconClass: "record-start" /* UI.ActionRegistration.IconClass.START_RECORDING */,
    contextTypes() {
        return [_panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelinePanel.TimelinePanel];
    },
    bindings: [
        {
            platform: "windows,linux" /* UI.ActionRegistration.Platforms.WindowsLinux */,
            shortcut: 'Ctrl+E',
        },
        {
            platform: "mac" /* UI.ActionRegistration.Platforms.Mac */,
            shortcut: 'Meta+E',
        },
    ],
});
const actionRegistry = _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistry.ActionRegistry.instance();
_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ShortcutRegistry.ShortcutRegistry.instance({ forceNew: true, actionRegistry: actionRegistry });
_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('flamechart-mouse-wheel-action').set('zoom');
const params = new URLSearchParams(window.location.search);
const traceFileName = params.get('trace');
const cpuprofileName = params.get('cpuprofile');
const traceUrl = params.get('loadTimelineFromURL');
const nodeMode = params.get('isNode');
const isNodeMode = nodeMode === 'true' ? true : false;
_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.setEnabled('timeline-invalidation-tracking', params.has('invalidations'));
const timeline = _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelinePanel.TimelinePanel.instance({ forceNew: true, isNode: isNodeMode });
const container = document.getElementById('container');
if (!container) {
    throw new Error('could not find container');
}
container.innerHTML = '';
timeline.markAsRoot();
timeline.show(container);
window.addEventListener('resize', () => timeline.doResize());
let fileName;
if (traceFileName) {
    fileName = `${traceFileName}.json.gz`;
}
else if (cpuprofileName) {
    fileName = `${cpuprofileName}.cpuprofile.gz`;
}
else if (traceUrl) {
    fileName = traceUrl;
}
if (fileName) {
    await loadFromFile(fileName);
}
async function loadFromFile(fileNameWithExtension) {
    // Load from fixture/traces if its a bare filename, but if it's a complete URL, use that.
    const file = new URL(fileNameWithExtension, new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../panels/timeline/fixtures/traces/'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b));
    const response = await fetch(file);
    const asBlob = await response.blob();
    const asFile = new File([asBlob], fileNameWithExtension, {
        type: asBlob.type,
    });
    await timeline.loadFromFile(asFile);
}
// @ts-expect-error
window.loadFromFile = loadFromFile;
//# sourceMappingURL=basic.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);