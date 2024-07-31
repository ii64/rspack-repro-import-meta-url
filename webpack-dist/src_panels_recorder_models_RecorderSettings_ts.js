"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_models_RecorderSettings_ts"],{

/***/ "./src/panels/recorder/models/ConverterIds.ts":
/*!****************************************************!*\
  !*** ./src/panels/recorder/models/ConverterIds.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConverterIds: () => (/* binding */ ConverterIds)
/* harmony export */ });
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var ConverterIds;
(function (ConverterIds) {
    ConverterIds["JSON"] = "json";
    ConverterIds["Puppeteer"] = "puppeteer";
    ConverterIds["Replay"] = "@puppeteer/replay";
    ConverterIds["Lighthouse"] = "lighthouse";
})(ConverterIds || (ConverterIds = {}));


/***/ }),

/***/ "./src/panels/recorder/models/RecorderSettings.ts":
/*!********************************************************!*\
  !*** ./src/panels/recorder/models/RecorderSettings.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecorderSettings: () => (/* binding */ RecorderSettings)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ConverterIds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConverterIds.js */ "./src/panels/recorder/models/ConverterIds.ts");
/* harmony import */ var _RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecordingPlayer.js */ "./src/panels/recorder/models/RecordingPlayer.ts");
/* harmony import */ var _Schema_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Schema.js */ "./src/panels/recorder/models/Schema.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RecorderSettings_selectorAttribute, _RecorderSettings_speed, _RecorderSettings_replayExtension, _RecorderSettings_selectorTypes, _RecorderSettings_preferredCopyFormat;





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
    constructor() {
        _RecorderSettings_selectorAttribute.set(this, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-selector-attribute', ''));
        _RecorderSettings_speed.set(this, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-panel-replay-speed', _RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_3__.PlayRecordingSpeed.Normal));
        _RecorderSettings_replayExtension.set(this, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-panel-replay-extension', ''));
        _RecorderSettings_selectorTypes.set(this, new Map());
        _RecorderSettings_preferredCopyFormat.set(this, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-preferred-copy-format', _ConverterIds_js__WEBPACK_IMPORTED_MODULE_2__.ConverterIds.JSON));
        for (const selectorType of Object.values(_Schema_js__WEBPACK_IMPORTED_MODULE_4__.SelectorType)) {
            __classPrivateFieldGet(this, _RecorderSettings_selectorTypes, "f").set(selectorType, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting(`recorder-${selectorType}-selector-enabled`, true));
        }
    }
    get selectorAttribute() {
        return __classPrivateFieldGet(this, _RecorderSettings_selectorAttribute, "f").get();
    }
    set selectorAttribute(value) {
        __classPrivateFieldGet(this, _RecorderSettings_selectorAttribute, "f").set(value);
    }
    get speed() {
        return __classPrivateFieldGet(this, _RecorderSettings_speed, "f").get();
    }
    set speed(speed) {
        __classPrivateFieldGet(this, _RecorderSettings_speed, "f").set(speed);
    }
    get replayExtension() {
        return __classPrivateFieldGet(this, _RecorderSettings_replayExtension, "f").get();
    }
    set replayExtension(replayExtension) {
        __classPrivateFieldGet(this, _RecorderSettings_replayExtension, "f").set(replayExtension);
    }
    get defaultTitle() {
        const now = new Date();
        return i18nString(UIStrings.defaultRecordingName, {
            DATE: now.toLocaleDateString(),
            TIME: now.toLocaleTimeString(),
        });
    }
    get defaultSelectors() {
        return Object.values(_Schema_js__WEBPACK_IMPORTED_MODULE_4__.SelectorType)
            .filter(type => this.getSelectorByType(type));
    }
    getSelectorByType(type) {
        return __classPrivateFieldGet(this, _RecorderSettings_selectorTypes, "f").get(type)?.get();
    }
    setSelectorByType(type, value) {
        __classPrivateFieldGet(this, _RecorderSettings_selectorTypes, "f").get(type)?.set(value);
    }
    get preferredCopyFormat() {
        return __classPrivateFieldGet(this, _RecorderSettings_preferredCopyFormat, "f").get();
    }
    set preferredCopyFormat(value) {
        __classPrivateFieldGet(this, _RecorderSettings_preferredCopyFormat, "f").set(value);
    }
}
_RecorderSettings_selectorAttribute = new WeakMap(), _RecorderSettings_speed = new WeakMap(), _RecorderSettings_replayExtension = new WeakMap(), _RecorderSettings_selectorTypes = new WeakMap(), _RecorderSettings_preferredCopyFormat = new WeakMap();


/***/ }),

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



/***/ })

}]);