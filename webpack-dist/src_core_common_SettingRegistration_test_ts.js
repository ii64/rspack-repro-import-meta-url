"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_common_SettingRegistration_test_ts"],{

/***/ "./src/core/common/SettingRegistration.test.ts":
/*!*****************************************************!*\
  !*** ./src/core/common/SettingRegistration.test.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/quick_open/quick_open.js */ "./src/ui/legacy/components/quick_open/quick_open.ts");
/* harmony import */ var _i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.js */ "./src/core/common/common.ts");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const settingName = 'mock-setting';
const settingTitle = 'Mock setting';
const enableTitle = 'Enable mock setting';
const disableTitle = 'Disable mock setting';
describe('SettingRegistration', () => {
    // const enum `SettingCategory` not available in top level scope, thats why
    // its initialized here.
    const settingCategory = _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.SettingCategory.CONSOLE;
    before(async () => {
        _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.registerSettingsForTest([{
                category: settingCategory,
                title: _i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedLazyString(settingTitle),
                settingType: _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.SettingType.BOOLEAN,
                settingName,
                defaultValue: false,
                options: [
                    {
                        value: true,
                        title: _i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedLazyString(enableTitle),
                    },
                    {
                        value: false,
                        title: _i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedLazyString(disableTitle),
                    },
                ],
            }], true);
        await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars)({ reset: false });
    });
    after(async () => {
        await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.deinitializeGlobalVars)();
    });
    it('retrieves a registered setting', () => {
        try {
            const preRegisteredSetting = _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.Settings.instance().moduleSetting(settingName);
            assert.strictEqual(preRegisteredSetting.title(), settingTitle, 'Setting title is not returned correctly');
            assert.strictEqual(preRegisteredSetting.category(), settingCategory, 'Setting category is not returned correctly');
            assert.isNotTrue(preRegisteredSetting.get(), 'Setting value is not returned correctly');
        }
        catch (error) {
            assert.fail('Failed to find setting registration');
        }
    });
    it('adds commands for changing a setting\'s value', () => {
        const allCommands = _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_1__.CommandMenu.CommandMenu.instance({ forceNew: true }).commands();
        const disableSettingCommands = allCommands.filter(command => command.title === disableTitle &&
            command.category === _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.getLocalizedSettingsCategory(settingCategory));
        const enableSettingCommands = allCommands.filter(command => command.title === enableTitle &&
            command.category === _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.getLocalizedSettingsCategory(settingCategory));
        assert.strictEqual(disableSettingCommands.length, 1, 'Commands for changing a setting\'s value were not added correctly');
        assert.strictEqual(enableSettingCommands.length, 1, 'Commands for changing a setting\'s value were not added correctly');
    });
    it('triggers a setting\'s change listener when a setting is set', () => {
        const preRegisteredSetting = _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.Settings.instance().moduleSetting(settingName);
        let settingChanged = false;
        preRegisteredSetting.addChangeListener(() => {
            settingChanged = true;
        });
        preRegisteredSetting.set(true);
        assert.isTrue(settingChanged, 'Setting\'s change listener was not triggered after the setting was set');
    });
    it('throws an error when trying to register a duplicated setting name', () => {
        assert.throws(() => {
            _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.registerSettingExtension({
                settingName,
                settingType: _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.SettingType.BOOLEAN,
                defaultValue: false,
            });
        });
    });
    it('deletes a registered setting using its name', () => {
        const removalResult = _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.maybeRemoveSettingExtension(settingName);
        assert.isTrue(removalResult);
        assert.doesNotThrow(() => {
            _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.registerSettingExtension({
                settingName,
                settingType: _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.SettingType.BOOLEAN,
                defaultValue: false,
            });
        });
    });
    it('can handle settings with condition which depends on host config', () => {
        const configSettingName = 'mock-setting-with-host-config';
        _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.registerSettingExtension({
            settingName: configSettingName,
            settingType: _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.SettingType.BOOLEAN,
            defaultValue: false,
            condition: config => {
                return config?.devToolsConsoleInsights.enabled === true;
            },
        });
        assert.throws(() => _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.Settings.instance().moduleSetting(configSettingName));
        const dummyStorage = new _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.SettingsStorage({});
        _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.Settings.instance({
            forceNew: true,
            syncedStorage: dummyStorage,
            globalStorage: dummyStorage,
            localStorage: dummyStorage,
            config: {
                devToolsConsoleInsights: {
                    aidaModelId: 'mockModel',
                    aidaTemperature: 0.2,
                    optIn: false,
                    enabled: true,
                },
            },
        });
        const setting = _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.Settings.instance().moduleSetting(configSettingName);
        assert.isNotNull(setting);
        assert.isFalse(setting.get());
    });
});


/***/ })

}]);