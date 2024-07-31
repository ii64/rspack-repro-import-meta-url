"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_recorder_recording_view_basic_ts"],{

/***/ "./src/ui/components/docs/recorder_recording_view/basic.ts":
/*!*****************************************************************!*\
  !*** ./src/ui/components/docs/recorder_recording_view/basic.ts ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/recorder/components/components.js */ "./src/panels/recorder/components/components.ts");
/* harmony import */ var _panels_recorder_models_models_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../panels/recorder/models/models.js */ "./src/panels/recorder/models/models.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



 // eslint-disable-line rulesdir/es_modules_import
await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.initializeGlobalVars();
async function initializeGlobalActions() {
    const UI = await Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/legacy/legacy.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
    const actionRegistry = UI.ActionRegistry.ActionRegistry.instance();
    UI.ShortcutRegistry.ShortcutRegistry.instance({
        forceNew: true,
        actionRegistry,
    });
}
await initializeGlobalActions();
const recording = {
    title: 'Test',
    steps: [
        {
            type: _panels_recorder_models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Navigate,
            url: 'http://example.com',
        },
        {
            type: _panels_recorder_models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Click,
            target: 'main',
            selectors: [['.click']],
            offsetX: 1,
            offsetY: 2,
            assertedEvents: [{
                    type: _panels_recorder_models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.AssertedEventType.Navigation,
                    title: 'Test',
                    url: 'http://example.com/2',
                }],
        },
        {
            type: _panels_recorder_models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Click,
            target: 'main',
            selectors: [['.click2']],
            offsetX: 3,
            offsetY: 4,
        },
    ],
};
const data = {
    replayState: {
        isPlaying: false,
        isPausedOnBreakpoint: false,
    },
    isRecording: false,
    recordingTogglingInProgress: false,
    replayAllowed: true,
    recording,
    breakpointIndexes: new Set(),
    sections: [
        {
            title: 'Section title',
            url: 'http://example.com',
            steps: [recording.steps[1]],
            causingStep: recording.steps[0],
        },
        {
            title: 'Section title 2',
            url: 'http://example.com/2',
            steps: [recording.steps[2]],
            causingStep: recording.steps[1],
        },
    ],
    settings: {
        networkConditionsSettings: {
            download: 3000,
            upload: 3000,
            latency: 3000,
            type: _panels_recorder_models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.EmulateNetworkConditions,
        },
        viewportSettings: {
            deviceScaleFactor: 1,
            hasTouch: false,
            height: 800,
            width: 600,
            isLandscape: false,
            isMobile: false,
            type: _panels_recorder_models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.SetViewport,
        },
    },
    builtInConverters: [],
    extensionConverters: [],
    recorderSettings: new _panels_recorder_models_models_js__WEBPACK_IMPORTED_MODULE_2__.RecorderSettings.RecorderSettings(),
    replayExtensions: [],
};
const component1 = new _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.RecordingView.RecordingView();
component1.data = data;
document.getElementById('container')?.appendChild(component1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);