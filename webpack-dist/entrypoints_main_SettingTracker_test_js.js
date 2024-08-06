"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_main_SettingTracker_test_js"],{

/***/ "./entrypoints/main/SettingTracker.test.js":
/*!*************************************************!*\
  !*** ./entrypoints/main/SettingTracker.test.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ "./entrypoints/main/main.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('SettingTracker', () => {
    let settingTracker;
    afterEach(() => {
        settingTracker?.dispose();
    });
    it('resets console-insights-onboarding-finished if console-insights-enabled becomes true', async () => {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').set(true);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').set(false);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('console-insights-onboarding-finished', false).set(true);
        // Force instance that will track the settings.
        settingTracker = new _main_js__WEBPACK_IMPORTED_MODULE_2__.SettingTracker.SettingTracker();
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').set(true);
        assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('console-insights-onboarding-finished', false).get(), false);
    });
    it('sets console-insights-enabled to false if feature is opt-in', async () => {
        const dummyStorage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({});
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
            forceNew: true,
            syncedStorage: dummyStorage,
            globalStorage: dummyStorage,
            localStorage: dummyStorage,
            config: { 'devToolsConsoleInsights': { 'blockedByFeatureFlag': false, 'enabled': true, 'optIn': true } },
        });
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').set(true);
        const toggledSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('console-insights-toggled', false);
        toggledSetting.set(false);
        settingTracker = new _main_js__WEBPACK_IMPORTED_MODULE_2__.SettingTracker.SettingTracker();
        assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').get(), false);
        assert.strictEqual(toggledSetting.get(), false);
    });
    it('sets console-insights-enabled to true if feature is opt-out', async () => {
        const dummyStorage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({});
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
            forceNew: true,
            syncedStorage: dummyStorage,
            globalStorage: dummyStorage,
            localStorage: dummyStorage,
            config: { 'devToolsConsoleInsights': { 'blockedByFeatureFlag': false, 'enabled': true, 'optIn': false } },
        });
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').set(false);
        const toggledSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('console-insights-toggled', false);
        toggledSetting.set(false);
        settingTracker = new _main_js__WEBPACK_IMPORTED_MODULE_2__.SettingTracker.SettingTracker();
        assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').get(), true);
        assert.strictEqual(toggledSetting.get(), false);
    });
    it('does not change console-insights-enabled if console-insights-toggled is true', async () => {
        const dummyStorage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({});
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
            forceNew: true,
            syncedStorage: dummyStorage,
            globalStorage: dummyStorage,
            localStorage: dummyStorage,
            config: { 'devToolsConsoleInsights': { 'blockedByFeatureFlag': false, 'enabled': true, 'optIn': true } },
        });
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').set(true);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('console-insights-toggled', false).set(true);
        settingTracker = new _main_js__WEBPACK_IMPORTED_MODULE_2__.SettingTracker.SettingTracker();
        assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').get(), true);
    });
});
//# sourceMappingURL=SettingTracker.test.js.map

/***/ })

}]);