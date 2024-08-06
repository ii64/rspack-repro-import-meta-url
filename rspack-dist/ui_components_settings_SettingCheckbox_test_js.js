"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_settings_SettingCheckbox_test_js"], {
"./ui/components/settings/SettingCheckbox.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.js */ "./ui/components/settings/settings.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





function renderSettingCheckbox(data) {
    var component = new _settings_js__WEBPACK_IMPORTED_MODULE_4__.SettingCheckbox.SettingCheckbox();
    component.data = data;
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
    assert.isNotNull(component.shadowRoot);
    var checkbox = component.shadowRoot.querySelector('input');
    assert.instanceOf(checkbox, HTMLInputElement);
    return {
        component: component,
        checkbox: checkbox
    };
}
describe('SettingCheckbox', function() {
    beforeEach(function() {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.clearForTest();
    });
    afterEach(function() {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.clearForTest();
    });
    it('renders the checkbox ticked when the setting is enabled', function() {
        var setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createFakeSetting)('setting', true);
        var checkbox = renderSettingCheckbox({
            setting: setting
        }).checkbox;
        assert.isTrue(checkbox.checked);
    });
    it('renders the checkbox unticked when the setting is disabled', function() {
        var setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createFakeSetting)('setting', false);
        var checkbox = renderSettingCheckbox({
            setting: setting
        }).checkbox;
        assert.isFalse(checkbox.checked);
    });
    it('updates the checkbox when the setting changes', function() {
        var setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createFakeSetting)('setting', true);
        var checkbox = renderSettingCheckbox({
            setting: setting
        }).checkbox;
        setting.set(false);
        assert.isFalse(checkbox.checked);
    });
    it('can be reassigned to a different settings', function() {
        var setting1 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createFakeSetting)('setting1', true);
        var setting2 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createFakeSetting)('setting2', true);
        var _renderSettingCheckbox = renderSettingCheckbox({
            setting: setting1
        }), component = _renderSettingCheckbox.component, checkbox = _renderSettingCheckbox.checkbox;
        component.data = {
            setting: setting2
        };
        setting1.set(false);
        assert.isTrue(checkbox.checked);
    });
    it('changes the setting when the checkbox changes', function() {
        var setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createFakeSetting)('setting', false);
        var checkbox = renderSettingCheckbox({
            setting: setting
        }).checkbox;
        checkbox.click();
        assert.isTrue(setting.get());
    });
    it('ignores clicks when disabled', function() {
        var setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createFakeSetting)('setting', false);
        setting.setDisabled(true);
        var checkbox = renderSettingCheckbox({
            setting: setting
        }).checkbox;
        checkbox.click();
        assert.isFalse(setting.get());
    });
    it('can be disabled via registration', function() {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.stubNoopSettings)();
        var setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createFakeSetting)('setting', false);
        setting.setRegistration({
            settingName: 'setting',
            settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */ ,
            defaultValue: false,
            disabledCondition: function() {
                return {
                    disabled: true,
                    reason: 'reason'
                };
            }
        });
        var checkbox = renderSettingCheckbox({
            setting: setting
        }).checkbox;
        checkbox.click();
        assert.isFalse(setting.get());
        assert.isTrue(checkbox.disabled);
    });
    it('shows disabled reason', function() {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.stubNoopSettings)();
        var setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createFakeSetting)('setting', false);
        setting.setRegistration({
            settingName: 'setting',
            settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */ ,
            defaultValue: false,
            disabledCondition: function() {
                return {
                    disabled: true,
                    reason: 'reason'
                };
            }
        });
        var component = renderSettingCheckbox({
            setting: setting
        }).component;
        assert.strictEqual(component.shadowRoot.querySelector('.disabled-reason').title, 'reason');
    });
    it('is disabled for a disabled deprecated settings', function() {
        var setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createFakeSetting)('setting', false);
        setting.setRegistration({
            settingName: 'setting',
            settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */ ,
            defaultValue: false,
            deprecationNotice: {
                warning: function() {
                    return 'Setting deprecated';
                },
                disabled: true
            }
        });
        var checkbox = renderSettingCheckbox({
            setting: setting
        }).checkbox;
        assert.isTrue(checkbox.disabled);
    });
    it('is enabled for a disabled deprecated settings with enabled experiment', function() {
        var experiment = 'test-experiment';
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.register(experiment, experiment);
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.setEnabled(experiment, true);
        var setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createFakeSetting)('setting', false);
        setting.setRegistration({
            settingName: 'setting',
            settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */ ,
            defaultValue: false,
            deprecationNotice: {
                warning: function() {
                    return 'Setting deprecated';
                },
                disabled: true,
                experiment: experiment
            }
        });
        var checkbox = renderSettingCheckbox({
            setting: setting
        }).checkbox;
        assert.isTrue(checkbox.disabled);
    });
    it('is enabled for a disabled deprecated settings with disabled experiment', function() {
        var experiment = 'test-experiment';
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.register(experiment, experiment);
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.setEnabled(experiment, false);
        var setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createFakeSetting)('setting', false);
        setting.setRegistration({
            settingName: 'setting',
            settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */ ,
            defaultValue: false,
            deprecationNotice: {
                warning: function() {
                    return 'Setting deprecated';
                },
                disabled: true,
                experiment: experiment
            }
        });
        var checkbox = renderSettingCheckbox({
            setting: setting
        }).checkbox;
        assert.isFalse(checkbox.disabled);
    });
    it('is disabled for an enabled deprecated settings', function() {
        var setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createFakeSetting)('setting', false);
        setting.setRegistration({
            settingName: 'setting',
            settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */ ,
            defaultValue: false,
            deprecationNotice: {
                warning: function() {
                    return 'Setting deprecated';
                },
                disabled: false
            }
        });
        var checkbox = renderSettingCheckbox({
            setting: setting
        }).checkbox;
        assert.isFalse(checkbox.disabled);
    });
}); //# sourceMappingURL=SettingCheckbox.test.js.map


}),

}]);