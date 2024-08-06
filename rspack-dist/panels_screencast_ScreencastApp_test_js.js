"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_screencast_ScreencastApp_test_js"], {
"./panels/screencast/ScreencastApp.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScreencastApp: function() { return ScreencastApp; },
  ScreencastAppProvider: function() { return ScreencastAppProvider; },
  ToolbarButtonProvider: function() { return ToolbarButtonProvider; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ScreencastView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScreencastView.js */ "./panels/screencast/ScreencastView.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}





var UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over largeicon phone button in Screencast App of the Remote Devices tab when toggling screencast
     */ toggleScreencast: 'Toggle screencast'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/screencast/ScreencastApp.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var appInstance;
var ScreencastApp = /*#__PURE__*/ function() {
    "use strict";
    function ScreencastApp() {
        _class_call_check(this, ScreencastApp);
        _define_property(this, "enabledSetting", void 0);
        _define_property(this, "toggleButton", void 0);
        _define_property(this, "rootSplitWidget", void 0);
        _define_property(this, "screenCaptureModel", void 0);
        _define_property(this, "screencastView", void 0);
        _define_property(this, "rootView", void 0);
        this.enabledSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('screencast-enabled', true);
        this.toggleButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarToggle(i18nString(UIStrings.toggleScreencast), 'devices');
        this.toggleButton.setToggled(this.enabledSetting.get());
        this.toggleButton.setEnabled(false);
        this.toggleButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , this.toggleButtonClicked, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ScreenCaptureModel.ScreenCaptureModel, this);
    }
    _create_class(ScreencastApp, [
        {
            key: "presentUI",
            value: function presentUI(document) {
                this.rootView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.RootView.RootView();
                this.rootSplitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SplitWidget.SplitWidget(false, true, 'inspector-view.screencast-split-view-state', 300, 300);
                this.rootSplitWidget.setVertical(true);
                this.rootSplitWidget.setSecondIsSidebar(true);
                this.rootSplitWidget.show(this.rootView.element);
                this.rootSplitWidget.hideMain();
                this.rootSplitWidget.setSidebarWidget(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.InspectorView.InspectorView.instance());
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.InspectorView.InspectorView.instance().setOwnerSplit(this.rootSplitWidget);
                this.rootView.attachToDocument(document);
                this.rootView.focus();
            }
        },
        {
            key: "modelAdded",
            value: function modelAdded(screenCaptureModel) {
                if (screenCaptureModel.target() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget()) {
                    return;
                }
                this.screenCaptureModel = screenCaptureModel;
                this.toggleButton.setEnabled(true);
                this.screencastView = new _ScreencastView_js__WEBPACK_IMPORTED_MODULE_4__.ScreencastView(screenCaptureModel);
                if (this.rootSplitWidget) {
                    this.rootSplitWidget.setMainWidget(this.screencastView);
                }
                this.screencastView.initialize();
                this.onScreencastEnabledChanged();
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(screenCaptureModel) {
                if (this.screenCaptureModel !== screenCaptureModel) {
                    return;
                }
                delete this.screenCaptureModel;
                this.toggleButton.setEnabled(false);
                if (this.screencastView) {
                    this.screencastView.detach();
                    delete this.screencastView;
                }
                this.onScreencastEnabledChanged();
            }
        },
        {
            key: "toggleButtonClicked",
            value: function toggleButtonClicked() {
                var enabled = !this.toggleButton.isToggled();
                this.enabledSetting.set(enabled);
                this.onScreencastEnabledChanged();
            }
        },
        {
            key: "onScreencastEnabledChanged",
            value: function onScreencastEnabledChanged() {
                if (!this.rootSplitWidget) {
                    return;
                }
                var enabled = Boolean(this.enabledSetting.get() && this.screencastView);
                this.toggleButton.setToggled(enabled);
                if (enabled) {
                    this.rootSplitWidget.showBoth();
                } else {
                    this.rootSplitWidget.hideMain();
                }
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                if (!appInstance) {
                    appInstance = new ScreencastApp();
                }
                return appInstance;
            }
        }
    ]);
    return ScreencastApp;
}();
var toolbarButtonProviderInstance;
var ToolbarButtonProvider = /*#__PURE__*/ function() {
    "use strict";
    function ToolbarButtonProvider() {
        _class_call_check(this, ToolbarButtonProvider);
    }
    _create_class(ToolbarButtonProvider, [
        {
            key: "item",
            value: function item() {
                return ScreencastApp.instance().toggleButton;
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: false
                };
                var forceNew = opts.forceNew;
                if (!toolbarButtonProviderInstance || forceNew) {
                    toolbarButtonProviderInstance = new ToolbarButtonProvider();
                }
                return toolbarButtonProviderInstance;
            }
        }
    ]);
    return ToolbarButtonProvider;
}();
var screencastAppProviderInstance;
var ScreencastAppProvider = /*#__PURE__*/ function() {
    "use strict";
    function ScreencastAppProvider() {
        _class_call_check(this, ScreencastAppProvider);
    }
    _create_class(ScreencastAppProvider, [
        {
            key: "createApp",
            value: function createApp() {
                return ScreencastApp.instance();
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: false
                };
                var forceNew = opts.forceNew;
                if (!screencastAppProviderInstance || forceNew) {
                    screencastAppProviderInstance = new ScreencastAppProvider();
                }
                return screencastAppProviderInstance;
            }
        }
    ]);
    return ScreencastAppProvider;
} //# sourceMappingURL=ScreencastApp.js.map
();


}),
"./panels/screencast/ScreencastApp.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _screencast_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screencast.js */ "./panels/screencast/screencast.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('ScreencastApp', function() {
    it('can start casting', /*#__PURE__*/ _async_to_generator(function() {
        var _screencastApp_rootView, screencastApp, tabTarget, target, screenCaptureModel;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    screencastApp = new _screencast_js__WEBPACK_IMPORTED_MODULE_4__.ScreencastApp.ScreencastApp();
                    screencastApp.presentUI(document);
                    tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                        type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab
                    });
                    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                        parentTarget: tabTarget,
                        subtype: 'prerender'
                    });
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                        parentTarget: tabTarget
                    });
                    screenCaptureModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ScreenCaptureModel.ScreenCaptureModel);
                    assert.exists(screenCaptureModel);
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_2__.expectCall)(sinon.stub(screenCaptureModel, 'startScreencast'))
                    ];
                case 1:
                    _state.sent();
                    (_screencastApp_rootView = screencastApp.rootView) === null || _screencastApp_rootView === void 0 ? void 0 : _screencastApp_rootView.detach();
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=ScreencastApp.test.js.map


}),
"./panels/screencast/screencast.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InputModel: function() { return /* reexport module object */ _InputModel_js__WEBPACK_IMPORTED_MODULE_0__; },
  ScreencastApp: function() { return /* reexport module object */ _ScreencastApp_js__WEBPACK_IMPORTED_MODULE_1__; },
  ScreencastView: function() { return /* reexport module object */ _ScreencastView_js__WEBPACK_IMPORTED_MODULE_2__; }
});
/* harmony import */var _InputModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputModel.js */ "./panels/screencast/InputModel.js");
/* harmony import */var _ScreencastApp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScreencastApp.js */ "./panels/screencast/ScreencastApp.js");
/* harmony import */var _ScreencastView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScreencastView.js */ "./panels/screencast/ScreencastView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



 //# sourceMappingURL=screencast.js.map


}),
"./testing/ExpectStubCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  expectCall: function() { return expectCall; },
  expectCalled: function() { return expectCalled; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function expectCall(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise(function(resolve) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _options_callCount;
            if (stub.callCount < ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1)) {
                return undefined;
            }
            resolve(args);
            return options.fakeFn ? options.fakeFn.apply(this, args) : undefined;
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options_callCount;
    var remainingCalls = ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, _object_spread_props(_object_spread({}, options), {
        callCount: remainingCalls
    }));
} //# sourceMappingURL=ExpectStubCall.js.map


}),

}]);