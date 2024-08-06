"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_DockController_test_js"], {
"./ui/legacy/DockController.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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




function registerDockingSettings(currentValue) {
    return _registerDockingSettings.apply(this, arguments);
}
function _registerDockingSettings() {
    _registerDockingSettings = _async_to_generator(function(currentValue) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.registerSettingsForTest([
                        {
                            category: "GLOBAL" /* Common.Settings.SettingCategory.GLOBAL */ ,
                            settingName: 'currentDockState',
                            settingType: "enum" /* Common.Settings.SettingType.ENUM */ ,
                            defaultValue: currentValue,
                            options: [
                                {
                                    value: 'right',
                                    text: function() {
                                        return 'right';
                                    },
                                    title: function() {
                                        return 'Dock to right';
                                    },
                                    raw: false
                                },
                                {
                                    value: 'bottom',
                                    text: function() {
                                        return 'bottom';
                                    },
                                    title: function() {
                                        return 'Dock to bottom';
                                    },
                                    raw: false
                                },
                                {
                                    value: 'left',
                                    text: function() {
                                        return 'left';
                                    },
                                    title: function() {
                                        return 'Dock to left';
                                    },
                                    raw: false
                                },
                                {
                                    value: 'undocked',
                                    text: function() {
                                        return 'undocked';
                                    },
                                    title: function() {
                                        return 'Undock';
                                    },
                                    raw: false
                                }
                            ]
                        }
                    ]);
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.clearForTest();
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars)({
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
    });
    return _registerDockingSettings.apply(this, arguments);
}
describe('DockController', function() {
    after(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.deinitializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('defaults the dockside to undefined when first created', /*#__PURE__*/ _async_to_generator(function() {
        var dockController;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    /* Note: this seems like weird behaviour, but updating DockController to
         * explicitly set DockSide by default seems to cause issues in Chrome web
         * tests, so adding this test here to ensure we don't cause any problems.
         */ return [
                        4,
                        registerDockingSettings('left')
                    ];
                case 1:
                    _state.sent();
                    dockController = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.DockController.DockController.instance({
                        forceNew: true,
                        canDock: true
                    });
                    assert.strictEqual(dockController.dockSide(), undefined);
                    return [
                        2
                    ];
            }
        });
    }));
    it('falls back to undefined if the setting value is unexpected', /*#__PURE__*/ _async_to_generator(function() {
        var dockController;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        registerDockingSettings('woah-not-a-real-setting-value')
                    ];
                case 1:
                    _state.sent();
                    dockController = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.DockController.DockController.instance({
                        forceNew: true,
                        canDock: true
                    });
                    assert.strictEqual(dockController.dockSide(), undefined);
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets the dockSide to undocked if the dock cannot be docked', /*#__PURE__*/ _async_to_generator(function() {
        var dockController;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        registerDockingSettings('left')
                    ];
                case 1:
                    _state.sent();
                    dockController = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.DockController.DockController.instance({
                        forceNew: true,
                        canDock: false
                    });
                    assert.strictEqual(dockController.dockSide(), "undocked" /* LegacyUI.DockController.DockState.UNDOCKED */ );
                    return [
                        2
                    ];
            }
        });
    }));
    it('can toggle the dock between two settings', /*#__PURE__*/ _async_to_generator(function() {
        var dockController;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        registerDockingSettings('left')
                    ];
                case 1:
                    _state.sent();
                    dockController = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.DockController.DockController.instance({
                        forceNew: true,
                        canDock: true
                    });
                    dockController.toggleDockSide();
                    assert.strictEqual(dockController.dockSide(), "bottom" /* LegacyUI.DockController.DockState.BOTTOM */ );
                    dockController.toggleDockSide();
                    assert.strictEqual(dockController.dockSide(), "left" /* LegacyUI.DockController.DockState.LEFT */ );
                    dockController.toggleDockSide();
                    assert.strictEqual(dockController.dockSide(), "bottom" /* LegacyUI.DockController.DockState.BOTTOM */ );
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=DockController.test.js.map


}),

}]);