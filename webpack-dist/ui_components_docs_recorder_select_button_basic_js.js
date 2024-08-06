"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_recorder_select_button_basic_js"],{

/***/ "./ui/components/docs/recorder_select_button/basic.js":
/*!************************************************************!*\
  !*** ./ui/components/docs/recorder_select_button/basic.js ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/lit-html/lit-html.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/recorder/components/components.js */ "./panels/recorder/components/components.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



 // eslint-disable-line rulesdir/es_modules_import
await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars();
const container = document.getElementById('container');
const throttlingIconUrl = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../panels/recorder/images/throttling_icon.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b).toString();
const playIconUrl = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../images/play_icon.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b).toString();
const items = [
    {
        value: 'performance',
        label: () => 'Performance panel',
        buttonIconUrl: throttlingIconUrl,
    },
    {
        value: 'performance_insights',
        label: () => 'Performance insights panel',
        buttonIconUrl: throttlingIconUrl,
    },
];
const replayItems = [
    {
        value: 'normal',
        buttonIconUrl: playIconUrl,
        buttonLabel: () => 'Replay',
        label: () => 'Normal (Default)',
    },
    { value: 'slow', buttonIconUrl: playIconUrl, buttonLabel: () => 'Slow replay', label: () => 'Slow' },
    {
        value: 'very_slow',
        buttonIconUrl: playIconUrl,
        buttonLabel: () => 'Very slow replay',
        label: () => 'Very slow',
    },
    {
        value: 'extremely_slow',
        buttonIconUrl: playIconUrl,
        buttonLabel: () => 'Extremely slow replay',
        label: () => 'Extremely slow',
    },
];
function litRender(template) {
    const div = document.createElement('div');
    div.style.width = '400px';
    div.style.display = 'flex';
    div.style.margin = '10px';
    div.style.flexDirection = 'row-reverse';
    container?.appendChild(div);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/lit-html/lit-html.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(template, div); // eslint-disable-line
}
litRender(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/lit-html/lit-html.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) `
    <${_panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.SelectButton.SelectButton.litTagName} .items=${items} .value=${items[0].value}></${_panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.SelectButton.SelectButton.litTagName}>`);
litRender(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/lit-html/lit-html.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) `
    <${_panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.SelectButton.SelectButton.litTagName} .disabled=${true} .items=${items} .value=${items[0].value}></${_panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.SelectButton.SelectButton.litTagName}>`);
litRender(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/lit-html/lit-html.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) `
    <${_panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.SelectButton.SelectButton.litTagName}
    .variant=${"outlined" /* RecorderComponents.SelectButton.Variant.OUTLINED */}
    .items=${replayItems}
    .value=${replayItems[0].value}></${_panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.SelectButton.SelectButton.litTagName}>`);
litRender(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/lit-html/lit-html.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) `
    <${_panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.SelectButton.SelectButton.litTagName}
    .disabled=${true}
    .variant=${"outlined" /* RecorderComponents.SelectButton.Variant.OUTLINED */}
    .items=${replayItems}
    .value=${replayItems[2].value}></${_panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.SelectButton.SelectButton.litTagName}>`);
//# sourceMappingURL=basic.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);