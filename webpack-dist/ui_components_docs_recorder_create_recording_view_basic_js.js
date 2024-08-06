"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_recorder_create_recording_view_basic_js"],{

/***/ "./ui/components/docs/recorder_create_recording_view/basic.js":
/*!********************************************************************!*\
  !*** ./ui/components/docs/recorder_create_recording_view/basic.js ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/recorder/components/components.js */ "./panels/recorder/components/components.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 // eslint-disable-line rulesdir/es_modules_import
await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars();
async function initializeGlobalActions() {
    const UI = await Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/legacy/legacy.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
    const actionRegistry = UI.ActionRegistry.ActionRegistry.instance();
    UI.ShortcutRegistry.ShortcutRegistry.instance({
        forceNew: true,
        actionRegistry,
    });
}
await initializeGlobalActions();
const component1 = new _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.CreateRecordingView.CreateRecordingView();
document.getElementById('container')?.appendChild(component1);
const component2 = new _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.CreateRecordingView.CreateRecordingView();
document.getElementById('container')?.appendChild(component2);
component2.shadowRoot?.querySelector('devtools-control-button')?.click();
//# sourceMappingURL=basic.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);