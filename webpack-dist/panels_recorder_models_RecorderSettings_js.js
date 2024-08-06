"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_models_RecorderSettings_js"],{

/***/ "./panels/recorder/models/RecorderSettings.js":
/*!****************************************************!*\
  !*** ./panels/recorder/models/RecorderSettings.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecorderSettings: () => (/* binding */ RecorderSettings)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _Schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Schema.js */ "./panels/recorder/models/Schema.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const UIStrings = {
    /**
     * @description This string is used to generate the default name for the create recording form in the Recording panel.
     * The format is similar to the one used by MacOS to generate names for screenshots. Both {DATE} and {TIME} are localized
     * using the current locale.
     *
     * @example {2022-08-04} DATE
     * @example {10:32:48} TIME
     */
    defaultRecordingName: 'Recording {DATE} at {TIME}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/recorder/models/RecorderSettings.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class RecorderSettings {
    #selectorAttribute = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-selector-attribute', '');
    #speed = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-panel-replay-speed', "normal" /* PlayRecordingSpeed.Normal */);
    #replayExtension = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-panel-replay-extension', '');
    #selectorTypes = new Map();
    #preferredCopyFormat = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-preferred-copy-format', "json" /* ConverterIds.JSON */);
    constructor() {
        for (const selectorType of Object.values(_Schema_js__WEBPACK_IMPORTED_MODULE_2__.SelectorType)) {
            this.#selectorTypes.set(selectorType, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting(`recorder-${selectorType}-selector-enabled`, true));
        }
    }
    get selectorAttribute() {
        return this.#selectorAttribute.get();
    }
    set selectorAttribute(value) {
        this.#selectorAttribute.set(value);
    }
    get speed() {
        return this.#speed.get();
    }
    set speed(speed) {
        this.#speed.set(speed);
    }
    get replayExtension() {
        return this.#replayExtension.get();
    }
    set replayExtension(replayExtension) {
        this.#replayExtension.set(replayExtension);
    }
    get defaultTitle() {
        const now = new Date();
        return i18nString(UIStrings.defaultRecordingName, {
            DATE: now.toLocaleDateString(),
            TIME: now.toLocaleTimeString(),
        });
    }
    get defaultSelectors() {
        return Object.values(_Schema_js__WEBPACK_IMPORTED_MODULE_2__.SelectorType)
            .filter(type => this.getSelectorByType(type));
    }
    getSelectorByType(type) {
        return this.#selectorTypes.get(type)?.get();
    }
    setSelectorByType(type, value) {
        this.#selectorTypes.get(type)?.set(value);
    }
    get preferredCopyFormat() {
        return this.#preferredCopyFormat.get();
    }
    set preferredCopyFormat(value) {
        this.#preferredCopyFormat.set(value);
    }
}
//# sourceMappingURL=RecorderSettings.js.map

/***/ }),

/***/ "./panels/recorder/models/Schema.js":
/*!******************************************!*\
  !*** ./panels/recorder/models/Schema.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssertedEventType: () => (/* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.AssertedEventType),
/* harmony export */   SelectorType: () => (/* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.SelectorType),
/* harmony export */   StepType: () => (/* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.StepType)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=Schema.js.map

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