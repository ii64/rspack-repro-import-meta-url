"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_emulation_DeviceModeWrapper_js"], {
"./panels/emulation/DeviceModeWrapper.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; },
  DeviceModeWrapper: function() { return DeviceModeWrapper; }
});
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/emulation/emulation.js */ "./models/emulation/emulation.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeviceModeView.js */ "./panels/emulation/DeviceModeView.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
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





var deviceModeWrapperInstance;
var DeviceModeWrapper = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(DeviceModeWrapper, _UI_Widget_VBox);
    var _super = _create_super(DeviceModeWrapper);
    function DeviceModeWrapper(inspectedPagePlaceholder) {
        _class_call_check(this, DeviceModeWrapper);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "inspectedPagePlaceholder", void 0);
        _define_property(_assert_this_initialized(_this), "deviceModeView", void 0);
        _define_property(_assert_this_initialized(_this), "toggleDeviceModeAction", void 0);
        _define_property(_assert_this_initialized(_this), "showDeviceModeSetting", void 0);
        _this.inspectedPagePlaceholder = inspectedPagePlaceholder;
        _this.deviceModeView = null;
        _this.toggleDeviceModeAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ActionRegistry.ActionRegistry.instance().getAction('emulation.toggle-device-mode');
        var model = _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_2__.DeviceModeModel.DeviceModeModel.instance();
        _this.showDeviceModeSetting = model.enabledSetting();
        _this.showDeviceModeSetting.setRequiresUserAction(Boolean(_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.Runtime.queryParam('hasOtherClients')));
        _this.showDeviceModeSetting.addChangeListener(_this.update.bind(_assert_this_initialized(_this), false));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.OverlayModel, "ScreenshotRequested" /* SDK.OverlayModel.Events.ScreenshotRequested */ , _this.screenshotRequestedFromOverlay, _assert_this_initialized(_this));
        _this.update(true);
        return _this;
    }
    _create_class(DeviceModeWrapper, [
        {
            key: "toggleDeviceMode",
            value: function toggleDeviceMode() {
                this.showDeviceModeSetting.set(!this.showDeviceModeSetting.get());
            }
        },
        {
            key: "isDeviceModeOn",
            value: function isDeviceModeOn() {
                return this.showDeviceModeSetting.get();
            }
        },
        {
            key: "captureScreenshot",
            value: function captureScreenshot(fullSize, clip) {
                if (!this.deviceModeView) {
                    this.deviceModeView = new _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeView();
                }
                this.deviceModeView.setNonEmulatedAvailableSize(this.inspectedPagePlaceholder.element);
                if (fullSize) {
                    void this.deviceModeView.captureFullSizeScreenshot();
                } else if (clip) {
                    void this.deviceModeView.captureAreaScreenshot(clip);
                } else {
                    void this.deviceModeView.captureScreenshot();
                }
                return true;
            }
        },
        {
            key: "screenshotRequestedFromOverlay",
            value: function screenshotRequestedFromOverlay(event) {
                var clip = event.data;
                this.captureScreenshot(false, clip);
            }
        },
        {
            key: "update",
            value: function update(force) {
                this.toggleDeviceModeAction.setToggled(this.showDeviceModeSetting.get());
                if (!force) {
                    var showing = this.deviceModeView && this.deviceModeView.isShowing();
                    if (this.showDeviceModeSetting.get() === showing) {
                        return;
                    }
                }
                if (this.showDeviceModeSetting.get()) {
                    if (!this.deviceModeView) {
                        this.deviceModeView = new _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeView();
                    }
                    this.deviceModeView.show(this.element);
                    this.inspectedPagePlaceholder.clearMinimumSize();
                    this.inspectedPagePlaceholder.show(this.deviceModeView.element);
                } else {
                    if (this.deviceModeView) {
                        this.deviceModeView.exitHingeMode();
                        this.deviceModeView.detach();
                    }
                    this.inspectedPagePlaceholder.restoreMinimumSize();
                    this.inspectedPagePlaceholder.show(this.element);
                }
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null,
                    inspectedPagePlaceholder: null
                };
                var forceNew = opts.forceNew, inspectedPagePlaceholder = opts.inspectedPagePlaceholder;
                if (!deviceModeWrapperInstance || forceNew) {
                    if (!inspectedPagePlaceholder) {
                        throw new Error("Unable to create DeviceModeWrapper: inspectedPagePlaceholder must be provided: ".concat(new Error().stack));
                    }
                    deviceModeWrapperInstance = new DeviceModeWrapper(inspectedPagePlaceholder);
                }
                return deviceModeWrapperInstance;
            }
        }
    ]);
    return DeviceModeWrapper;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox);
var ActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ActionDelegate() {
        _class_call_check(this, ActionDelegate);
    }
    _create_class(ActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(context, actionId) {
                switch(actionId){
                    case 'emulation.capture-screenshot':
                        return DeviceModeWrapper.instance().captureScreenshot();
                    case 'emulation.capture-node-screenshot':
                        {
                            var captureClip = function captureClip() {
                                return _captureClip.apply(this, arguments);
                            };
                            var node = context.flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode);
                            if (!node) {
                                return true;
                            }
                            function _captureClip() {
                                _captureClip = _async_to_generator(function() {
                                    var object, result, clip, response, error, zoom;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                if (!node) {
                                                    return [
                                                        2
                                                    ];
                                                }
                                                return [
                                                    4,
                                                    node.resolveToObject()
                                                ];
                                            case 1:
                                                object = _state.sent();
                                                if (!object) {
                                                    return [
                                                        2
                                                    ];
                                                }
                                                return [
                                                    4,
                                                    object.callFunction(function() {
                                                        var rect = this.getBoundingClientRect();
                                                        var docRect = this.ownerDocument.documentElement.getBoundingClientRect();
                                                        return JSON.stringify({
                                                            x: rect.left - docRect.left,
                                                            y: rect.top - docRect.top,
                                                            width: rect.width,
                                                            height: rect.height,
                                                            scale: 1
                                                        });
                                                    })
                                                ];
                                            case 2:
                                                result = _state.sent();
                                                if (!result.object) {
                                                    throw new Error('Clipping error: could not get object data.');
                                                }
                                                clip = JSON.parse(result.object.value);
                                                return [
                                                    4,
                                                    node.domModel().target().pageAgent().invoke_getLayoutMetrics()
                                                ];
                                            case 3:
                                                response = _state.sent();
                                                error = response.getError();
                                                zoom = !error && response.visualViewport.zoom || 1;
                                                clip.x *= zoom;
                                                clip.y *= zoom;
                                                clip.width *= zoom;
                                                clip.height *= zoom;
                                                DeviceModeWrapper.instance().captureScreenshot(false, clip);
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                });
                                return _captureClip.apply(this, arguments);
                            }
                            void captureClip();
                            return true;
                        }
                    case 'emulation.capture-full-height-screenshot':
                        return DeviceModeWrapper.instance().captureScreenshot(true);
                    case 'emulation.toggle-device-mode':
                        DeviceModeWrapper.instance().toggleDeviceMode();
                        return true;
                }
                return false;
            }
        }
    ]);
    return ActionDelegate;
} //# sourceMappingURL=DeviceModeWrapper.js.map
();


}),

}]);