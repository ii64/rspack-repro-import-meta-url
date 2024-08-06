"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_SettingRegistration_test_js"], {
"./core/common/SettingRegistration.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/quick_open/quick_open.js */ "./ui/legacy/components/quick_open/quick_open.js");
/* harmony import */var _i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}




var settingName = 'mock-setting';
var settingTitle = 'Mock setting';
var enableTitle = 'Enable mock setting';
var disableTitle = 'Disable mock setting';
describe('SettingRegistration', function() {
    // const enum `SettingCategory` not available in top level scope, thats why
    // its initialized here.
    var settingCategory = "CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ ;
    before(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.registerSettingsForTest([
                        {
                            category: settingCategory,
                            title: _i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedLazyString(settingTitle),
                            settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */ ,
                            settingName: settingName,
                            defaultValue: false,
                            options: [
                                {
                                    value: true,
                                    title: _i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedLazyString(enableTitle)
                                },
                                {
                                    value: false,
                                    title: _i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedLazyString(disableTitle)
                                }
                            ]
                        }
                    ], true);
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars)({
                            reset: false
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    after(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.deinitializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('retrieves a registered setting', function() {
        try {
            var preRegisteredSetting = _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.Settings.instance().moduleSetting(settingName);
            assert.strictEqual(preRegisteredSetting.title(), settingTitle, 'Setting title is not returned correctly');
            assert.strictEqual(preRegisteredSetting.category(), settingCategory, 'Setting category is not returned correctly');
            assert.isNotTrue(preRegisteredSetting.get(), 'Setting value is not returned correctly');
        } catch (error) {
            assert.fail('Failed to find setting registration');
        }
    });
    it('adds commands for changing a setting\'s value', function() {
        var allCommands = _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_1__.CommandMenu.CommandMenu.instance({
            forceNew: true
        }).commands();
        var disableSettingCommands = allCommands.filter(function(command) {
            return command.title === disableTitle && command.category === _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.getLocalizedSettingsCategory(settingCategory);
        });
        var enableSettingCommands = allCommands.filter(function(command) {
            return command.title === enableTitle && command.category === _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.getLocalizedSettingsCategory(settingCategory);
        });
        assert.strictEqual(disableSettingCommands.length, 1, 'Commands for changing a setting\'s value were not added correctly');
        assert.strictEqual(enableSettingCommands.length, 1, 'Commands for changing a setting\'s value were not added correctly');
    });
    it('triggers a setting\'s change listener when a setting is set', function() {
        var preRegisteredSetting = _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.Settings.instance().moduleSetting(settingName);
        var settingChanged = false;
        preRegisteredSetting.addChangeListener(function() {
            settingChanged = true;
        });
        preRegisteredSetting.set(true);
        assert.isTrue(settingChanged, 'Setting\'s change listener was not triggered after the setting was set');
    });
    it('throws an error when trying to register a duplicated setting name', function() {
        assert.throws(function() {
            _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.registerSettingExtension({
                settingName: settingName,
                settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */ ,
                defaultValue: false
            });
        });
    });
    it('deletes a registered setting using its name', function() {
        var removalResult = _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.maybeRemoveSettingExtension(settingName);
        assert.isTrue(removalResult);
        assert.doesNotThrow(function() {
            _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.registerSettingExtension({
                settingName: settingName,
                settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */ ,
                defaultValue: false
            });
        });
    });
    it('can handle settings with condition which depends on host config', function() {
        var configSettingName = 'mock-setting-with-host-config';
        _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.registerSettingExtension({
            settingName: configSettingName,
            settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */ ,
            defaultValue: false,
            condition: function(config) {
                return (config === null || config === void 0 ? void 0 : config.devToolsConsoleInsights.enabled) === true;
            }
        });
        assert.throws(function() {
            return _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.Settings.instance().moduleSetting(configSettingName);
        });
        var dummyStorage = new _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.SettingsStorage({});
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
                    enabled: true
                }
            }
        });
        var setting = _common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.Settings.instance().moduleSetting(configSettingName);
        assert.isNotNull(setting);
        assert.isFalse(setting.get());
    });
}); //# sourceMappingURL=SettingRegistration.test.js.map


}),

}]);