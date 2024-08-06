"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_emulation_AdvancedApp_test_js"], {
"./panels/emulation/AdvancedApp.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */var _emulation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emulation.js */ "./panels/emulation/emulation.js");
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






(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('AdvancedApp', function() {
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.deinitializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.registerSettingsForTest([
                        {
                            category: "GLOBAL" /* Common.Settings.SettingCategory.GLOBAL */ ,
                            settingName: 'currentDockState',
                            settingType: "enum" /* Common.Settings.SettingType.ENUM */ ,
                            defaultValue: 'right',
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
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars)({
                            reset: false
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    afterEach(/*#__PURE__*/ _async_to_generator(function() {
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
    it('updates colors node link on ColorThemeChanged', /*#__PURE__*/ _async_to_generator(function() {
        var advancedApp, fetchColorsSpy;
        return _ts_generator(this, function(_state) {
            advancedApp = _emulation_js__WEBPACK_IMPORTED_MODULE_5__.AdvancedApp.AdvancedApp.instance();
            assert.exists(advancedApp);
            fetchColorsSpy = sinon.spy(_ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance(), 'fetchColorsAndApplyHostTheme');
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.dispatchEventToListeners(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.ColorThemeChanged);
            assert.isTrue(fetchColorsSpy.called);
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=AdvancedApp.test.js.map


}),
"./panels/emulation/emulation.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AdvancedApp: function() { return /* reexport module object */ _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__; },
  DeviceModeToolbar: function() { return /* reexport module object */ _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__; },
  DeviceModeView: function() { return /* reexport module object */ _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__; },
  DeviceModeWrapper: function() { return /* reexport module object */ _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__; },
  InspectedPagePlaceholder: function() { return /* reexport module object */ _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__; },
  MediaQueryInspector: function() { return /* reexport module object */ _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__; }
});
/* harmony import */var _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedApp.js */ "./panels/emulation/AdvancedApp.js");
/* harmony import */var _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectedPagePlaceholder.js */ "./panels/emulation/InspectedPagePlaceholder.js");
/* harmony import */var _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaQueryInspector.js */ "./panels/emulation/MediaQueryInspector.js");
/* harmony import */var _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeviceModeToolbar.js */ "./panels/emulation/DeviceModeToolbar.js");
/* harmony import */var _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeviceModeView.js */ "./panels/emulation/DeviceModeView.js");
/* harmony import */var _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeviceModeWrapper.js */ "./panels/emulation/DeviceModeWrapper.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.












 //# sourceMappingURL=emulation.js.map


}),

}]);