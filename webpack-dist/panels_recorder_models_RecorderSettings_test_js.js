"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_models_RecorderSettings_test_js"],{

/***/ "./panels/recorder/models/RecorderSettings.test.js":
/*!*********************************************************!*\
  !*** ./panels/recorder/models/RecorderSettings.test.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _models_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('RecorderSettings', () => {
    let recorderSettings;
    beforeEach(() => {
        recorderSettings = new _models_js__WEBPACK_IMPORTED_MODULE_2__.RecorderSettings.RecorderSettings();
    });
    it('should have correct default values', async () => {
        assert.isTrue(recorderSettings.selectorAttribute === '');
        assert.isTrue(recorderSettings.speed === "normal" /* Models.RecordingPlayer.PlayRecordingSpeed.Normal */);
        Object.values(_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.SelectorType).forEach(type => {
            assert.isTrue(recorderSettings.getSelectorByType(type));
        });
    });
    it('should get default Title', async () => {
        const now = new Date('2022-12-01 15:30');
        const clock = sinon.useFakeTimers(now.getTime());
        assert.strictEqual(recorderSettings.defaultTitle, `Recording ${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`);
        clock.restore();
    });
    it('should save selector attribute change', () => {
        const value = 'custom-selector';
        recorderSettings.selectorAttribute = value;
        assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().settingForTest('recorder-selector-attribute').get(), value);
    });
    it('should save speed attribute change', () => {
        recorderSettings.speed = "extremely_slow" /* Models.RecordingPlayer.PlayRecordingSpeed.ExtremelySlow */;
        assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().settingForTest('recorder-panel-replay-speed').get(), "extremely_slow" /* Models.RecordingPlayer.PlayRecordingSpeed.ExtremelySlow */);
    });
    it('should save selector type change', () => {
        const selectorType = _models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.SelectorType.CSS;
        recorderSettings.setSelectorByType(selectorType, false);
        assert.isFalse(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().settingForTest(`recorder-${selectorType}-selector-enabled`).get());
    });
});
//# sourceMappingURL=RecorderSettings.test.js.map

/***/ })

}]);