"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_converters_ExtensionConverter_js"],{

/***/ "./panels/recorder/converters/ExtensionConverter.js":
/*!**********************************************************!*\
  !*** ./panels/recorder/converters/ExtensionConverter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXTENSION_PREFIX: () => (/* binding */ EXTENSION_PREFIX),
/* harmony export */   ExtensionConverter: () => (/* binding */ ExtensionConverter)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const EXTENSION_PREFIX = 'extension_';
class ExtensionConverter {
    #idx;
    #extension;
    constructor(idx, extension) {
        this.#idx = idx;
        this.#extension = extension;
    }
    getId() {
        return EXTENSION_PREFIX + this.#idx;
    }
    getFormatName() {
        return this.#extension.getName();
    }
    getMediaType() {
        return this.#extension.getMediaType();
    }
    getFilename(flow) {
        const fileExtension = this.#mediaTypeToExtension(this.#extension.getMediaType());
        return `${flow.title}${fileExtension}`;
    }
    async stringify(flow) {
        const text = await this.#extension.stringify(flow);
        const sourceMap = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap(text);
        return [_third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap(text), sourceMap];
    }
    async stringifyStep(step) {
        return await this.#extension.stringifyStep(step);
    }
    #mediaTypeToExtension(mediaType) {
        // See https://www.iana.org/assignments/media-types/media-types.xhtml
        switch (mediaType) {
            case 'application/json':
                return '.json';
            case 'application/javascript':
            case 'text/javascript':
                return '.js';
            case 'application/typescript':
            case 'text/typescript':
                return '.ts';
            default:
                // TODO: think of exhaustive mapping once the feature gets traction.
                return '';
        }
    }
}
//# sourceMappingURL=ExtensionConverter.js.map

/***/ }),

/***/ "./third_party/puppeteer-replay/puppeteer-replay.js":
/*!**********************************************************!*\
  !*** ./third_party/puppeteer-replay/puppeteer-replay.js ***!
  \**********************************************************/
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
/* harmony import */ var _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/lib/main.js */ "./third_party/puppeteer-replay/package/lib/main.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=puppeteer-replay.js.map

/***/ })

}]);