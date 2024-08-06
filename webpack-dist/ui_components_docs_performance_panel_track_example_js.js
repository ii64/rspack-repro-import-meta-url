"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_performance_panel_track_example_js"],{

/***/ "./ui/components/docs/performance_panel/track_example.js":
/*!***************************************************************!*\
  !*** ./ui/components/docs/performance_panel/track_example.js ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../panels/timeline/timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.initializeGlobalVars();
const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance({ forceNew: true });
const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance({ forceNew: true });
const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
    forceNew: true,
    resourceMapping,
    targetManager,
});
_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance({
    forceNew: true,
    debuggerWorkspaceBinding,
});
const params = new URLSearchParams(window.location.search);
const track = params.get('track');
const fileName = params.get('fileName');
const expanded = params.get('expanded');
const darkMode = params.get('darkMode');
const additionalTrackFilter = params.get('trackFilter') || undefined;
const customStartWindowTime = params.get('windowStart');
const customEndWindowTime = params.get('windowEnd');
const p = document.createElement('p');
// Expand the track by default for test.
await renderContent(expanded === 'false' ? false : true);
async function renderContent(expanded) {
    if (darkMode) {
        document.documentElement.classList.add('theme-with-dark-background');
    }
    const container = document.getElementById('container');
    if (!container) {
        throw new Error('could not find container');
    }
    container.appendChild(p);
    if (!track || !fileName) {
        document.title = 'Performance panel track example';
        p.innerText =
            'Use the `track` and `fileName` URL search params to load a track example (f.e. track_example.html?track=Timings&fileName=timings-track)';
        return;
    }
    const file = `${fileName}.json.gz`;
    document.title = `Performance panel ${track} track`;
    p.innerText = `${track} track is loading`;
    p.classList.add('loading');
    let flameChartData;
    try {
        // @ts-expect-error: allow to check if a const string array contains a string.
        if (_panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.CompatibilityTracksAppender.TrackNames.includes(track)) {
            const trackAppenderName = track;
            flameChartData = await _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFlameChartWithTracks(file, new Set([trackAppenderName]), expanded, additionalTrackFilter);
        }
        else if (track === 'Network') {
            flameChartData = await _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getNetworkFlameChart(file, expanded);
        }
        else {
            p.classList.remove('loading');
            p.innerText = `Invalid track name: ${track}`;
            return;
        }
        container.innerHTML = '';
        const { flameChart, dataProvider } = flameChartData;
        const timingsTrackOffset = flameChart.levelToOffset(dataProvider.maxStackDepth());
        container.style.height = `${timingsTrackOffset}px`;
        if (customStartWindowTime && customEndWindowTime) {
            flameChart.setWindowTimes(Number(customStartWindowTime), Number(customEndWindowTime), false);
        }
        flameChart.show(container);
    }
    catch (error) {
        p.classList.remove('loading');
        p.innerText = error;
        console.error(error);
    }
}
//# sourceMappingURL=track_example.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);