"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_models_SchemaUtils_ts"],{

/***/ "./src/panels/recorder/models/Schema.ts":
/*!**********************************************!*\
  !*** ./src/panels/recorder/models/Schema.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssertedEventType: () => (/* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.AssertedEventType),
/* harmony export */   SelectorType: () => (/* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.SelectorType),
/* harmony export */   StepType: () => (/* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.StepType)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./src/third_party/puppeteer-replay/puppeteer-replay.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ }),

/***/ "./src/panels/recorder/models/SchemaUtils.ts":
/*!***************************************************!*\
  !*** ./src/panels/recorder/models/SchemaUtils.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areSelectorsEqual: () => (/* binding */ areSelectorsEqual),
/* harmony export */   createEmulateNetworkConditionsStep: () => (/* binding */ createEmulateNetworkConditionsStep),
/* harmony export */   createViewportStep: () => (/* binding */ createViewportStep),
/* harmony export */   maxTimeout: () => (/* binding */ maxTimeout),
/* harmony export */   minTimeout: () => (/* binding */ minTimeout),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseStep: () => (/* binding */ parseStep)
/* harmony export */ });
/* harmony import */ var _Schema_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Schema.js */ "./src/panels/recorder/models/Schema.ts");
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./src/third_party/puppeteer-replay/puppeteer-replay.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function createViewportStep(viewport) {
    return {
        type: _Schema_js__WEBPACK_IMPORTED_MODULE_0__.StepType.SetViewport,
        width: viewport.clientWidth,
        height: viewport.clientHeight,
        // TODO read real parameters here
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false,
    };
}
function createEmulateNetworkConditionsStep(conditions) {
    return { type: _Schema_js__WEBPACK_IMPORTED_MODULE_0__.StepType.EmulateNetworkConditions, ...conditions };
}
function areSelectorsEqual(stepA, stepB) {
    if ('selectors' in stepA && 'selectors' in stepB) {
        return JSON.stringify(stepA.selectors) === JSON.stringify(stepB.selectors);
    }
    return !('selectors' in stepA) && !('selectors' in stepB);
}
const minTimeout = 1;
const maxTimeout = 30000;
const parse = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_1__.parse;
const parseStep = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_1__.parseStep;


/***/ }),

/***/ "./src/third_party/puppeteer-replay/puppeteer-replay.ts":
/*!**************************************************************!*\
  !*** ./src/third_party/puppeteer-replay/puppeteer-replay.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssertedEventType: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.AssertedEventType),
/* harmony export */   JSONStringifyExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.JSONStringifyExtension),
/* harmony export */   LighthouseRunnerExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.LighthouseRunnerExtension),
/* harmony export */   LighthouseStringifyExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.LighthouseStringifyExtension),
/* harmony export */   PuppeteerReplayStringifyExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerReplayStringifyExtension),
/* harmony export */   PuppeteerRunnerExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerRunnerExtension),
/* harmony export */   PuppeteerRunnerOwningBrowserExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerRunnerOwningBrowserExtension),
/* harmony export */   PuppeteerStringifyExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerStringifyExtension),
/* harmony export */   Runner: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.Runner),
/* harmony export */   RunnerExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.RunnerExtension),
/* harmony export */   Schema: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.Schema),
/* harmony export */   SelectorType: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.SelectorType),
/* harmony export */   StepType: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.StepType),
/* harmony export */   StringifyExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.StringifyExtension),
/* harmony export */   assertAllStepTypesAreHandled: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.assertAllStepTypesAreHandled),
/* harmony export */   createRunner: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.createRunner),
/* harmony export */   formatAsJSLiteral: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.formatAsJSLiteral),
/* harmony export */   formatJSONAsJS: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.formatJSONAsJS),
/* harmony export */   getSelectorType: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.getSelectorType),
/* harmony export */   maxTimeout: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.maxTimeout),
/* harmony export */   minTimeout: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.minTimeout),
/* harmony export */   mouseButtonMap: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.mouseButtonMap),
/* harmony export */   parse: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.parse),
/* harmony export */   parseSourceMap: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap),
/* harmony export */   parseStep: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.parseStep),
/* harmony export */   pointerDeviceTypes: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.pointerDeviceTypes),
/* harmony export */   selectorToPElementSelector: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.selectorToPElementSelector),
/* harmony export */   stringify: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.stringify),
/* harmony export */   stringifyStep: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.stringifyStep),
/* harmony export */   stripSourceMap: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap),
/* harmony export */   typeableInputTypes: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.typeableInputTypes),
/* harmony export */   validTimeout: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.validTimeout)
/* harmony export */ });
/* harmony import */ var _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/lib/main.js */ "./src/third_party/puppeteer-replay/package/lib/main.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ })

}]);