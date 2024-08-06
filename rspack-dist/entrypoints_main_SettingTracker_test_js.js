"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_main_SettingTracker_test_js"], {
"./entrypoints/main/SettingTracker.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ "./entrypoints/main/main.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('SettingTracker', function() {
    var settingTracker;
    afterEach(function() {
        settingTracker === null || settingTracker === void 0 ? void 0 : settingTracker.dispose();
    });
    it('resets console-insights-onboarding-finished if console-insights-enabled becomes true', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').set(true);
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').set(false);
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('console-insights-onboarding-finished', false).set(true);
            // Force instance that will track the settings.
            settingTracker = new _main_js__WEBPACK_IMPORTED_MODULE_2__.SettingTracker.SettingTracker();
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').set(true);
            assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('console-insights-onboarding-finished', false).get(), false);
            return [
                2
            ];
        });
    }));
    it('sets console-insights-enabled to false if feature is opt-in', /*#__PURE__*/ _async_to_generator(function() {
        var dummyStorage, toggledSetting;
        return _ts_generator(this, function(_state) {
            dummyStorage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({});
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
                forceNew: true,
                syncedStorage: dummyStorage,
                globalStorage: dummyStorage,
                localStorage: dummyStorage,
                config: {
                    'devToolsConsoleInsights': {
                        'blockedByFeatureFlag': false,
                        'enabled': true,
                        'optIn': true
                    }
                }
            });
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').set(true);
            toggledSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('console-insights-toggled', false);
            toggledSetting.set(false);
            settingTracker = new _main_js__WEBPACK_IMPORTED_MODULE_2__.SettingTracker.SettingTracker();
            assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').get(), false);
            assert.strictEqual(toggledSetting.get(), false);
            return [
                2
            ];
        });
    }));
    it('sets console-insights-enabled to true if feature is opt-out', /*#__PURE__*/ _async_to_generator(function() {
        var dummyStorage, toggledSetting;
        return _ts_generator(this, function(_state) {
            dummyStorage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({});
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
                forceNew: true,
                syncedStorage: dummyStorage,
                globalStorage: dummyStorage,
                localStorage: dummyStorage,
                config: {
                    'devToolsConsoleInsights': {
                        'blockedByFeatureFlag': false,
                        'enabled': true,
                        'optIn': false
                    }
                }
            });
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').set(false);
            toggledSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('console-insights-toggled', false);
            toggledSetting.set(false);
            settingTracker = new _main_js__WEBPACK_IMPORTED_MODULE_2__.SettingTracker.SettingTracker();
            assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').get(), true);
            assert.strictEqual(toggledSetting.get(), false);
            return [
                2
            ];
        });
    }));
    it('does not change console-insights-enabled if console-insights-toggled is true', /*#__PURE__*/ _async_to_generator(function() {
        var dummyStorage;
        return _ts_generator(this, function(_state) {
            dummyStorage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({});
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
                forceNew: true,
                syncedStorage: dummyStorage,
                globalStorage: dummyStorage,
                localStorage: dummyStorage,
                config: {
                    'devToolsConsoleInsights': {
                        'blockedByFeatureFlag': false,
                        'enabled': true,
                        'optIn': true
                    }
                }
            });
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').set(true);
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('console-insights-toggled', false).set(true);
            settingTracker = new _main_js__WEBPACK_IMPORTED_MODULE_2__.SettingTracker.SettingTracker();
            assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').get(), true);
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=SettingTracker.test.js.map


}),

}]);