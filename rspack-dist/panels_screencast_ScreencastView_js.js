"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_screencast_ScreencastView_js"], {
"./panels/screencast/InputModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InputModel: function() { return InputModel; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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

var BUTTONS = [
    "left" /* Protocol.Input.MouseButton.Left */ ,
    "middle" /* Protocol.Input.MouseButton.Middle */ ,
    "right" /* Protocol.Input.MouseButton.Right */ ,
    "back" /* Protocol.Input.MouseButton.Back */ ,
    "forward" /* Protocol.Input.MouseButton.Forward */ 
];
var MOUSE_EVENT_TYPES = {
    mousedown: "mousePressed" /* Protocol.Input.DispatchMouseEventRequestType.MousePressed */ ,
    mouseup: "mouseReleased" /* Protocol.Input.DispatchMouseEventRequestType.MouseReleased */ ,
    mousemove: "mouseMoved" /* Protocol.Input.DispatchMouseEventRequestType.MouseMoved */ 
};
var InputModel = /*#__PURE__*/ function(_SDK_SDKModel_SDKModel) {
    "use strict";
    _inherits(InputModel, _SDK_SDKModel_SDKModel);
    var _super = _create_super(InputModel);
    function InputModel(target) {
        _class_call_check(this, InputModel);
        var _this;
        _this = _super.call(this, target);
        _define_property(_assert_this_initialized(_this), "inputAgent", void 0);
        _define_property(_assert_this_initialized(_this), "activeMouseOffsetTop", void 0);
        _this.inputAgent = target.inputAgent();
        _this.activeMouseOffsetTop = null;
        return _this;
    }
    _create_class(InputModel, [
        {
            key: "emitKeyEvent",
            value: function emitKeyEvent(event) {
                var type;
                switch(event.type){
                    case 'keydown':
                        type = "keyDown" /* Protocol.Input.DispatchKeyEventRequestType.KeyDown */ ;
                        break;
                    case 'keyup':
                        type = "keyUp" /* Protocol.Input.DispatchKeyEventRequestType.KeyUp */ ;
                        break;
                    case 'keypress':
                        type = "char" /* Protocol.Input.DispatchKeyEventRequestType.Char */ ;
                        break;
                    default:
                        return;
                }
                var text = event.type === 'keypress' ? String.fromCharCode(event.charCode) : undefined;
                void this.inputAgent.invoke_dispatchKeyEvent({
                    type: type,
                    modifiers: this.modifiersForEvent(event),
                    text: text,
                    unmodifiedText: text ? text.toLowerCase() : undefined,
                    keyIdentifier: event.keyIdentifier,
                    code: event.code,
                    key: event.key,
                    windowsVirtualKeyCode: event.keyCode,
                    nativeVirtualKeyCode: event.keyCode,
                    autoRepeat: event.repeat,
                    isKeypad: event.location === 3,
                    isSystemKey: false,
                    location: event.location !== 3 ? event.location : undefined
                });
            }
        },
        {
            key: "emitMouseEvent",
            value: function emitMouseEvent(event, offsetTop, zoom) {
                if (!(event.type in MOUSE_EVENT_TYPES)) {
                    return;
                }
                if (event.type === 'mousedown' || this.activeMouseOffsetTop === null) {
                    this.activeMouseOffsetTop = offsetTop;
                }
                void this.inputAgent.invoke_dispatchMouseEvent({
                    type: MOUSE_EVENT_TYPES[event.type],
                    x: Math.round(event.offsetX / zoom),
                    y: Math.round(event.offsetY / zoom - this.activeMouseOffsetTop),
                    modifiers: this.modifiersForEvent(event),
                    button: BUTTONS[event.button],
                    clickCount: event.detail
                });
                if (event.type === 'mouseup') {
                    this.activeMouseOffsetTop = null;
                }
            }
        },
        {
            key: "emitWheelEvent",
            value: function emitWheelEvent(event, offsetTop, zoom) {
                if (this.activeMouseOffsetTop === null) {
                    this.activeMouseOffsetTop = offsetTop;
                }
                void this.inputAgent.invoke_dispatchMouseEvent({
                    type: "mouseWheel" /* Protocol.Input.DispatchMouseEventRequestType.MouseWheel */ ,
                    x: Math.round(event.offsetX / zoom),
                    y: Math.round(event.offsetY / zoom - this.activeMouseOffsetTop),
                    modifiers: this.modifiersForEvent(event),
                    button: BUTTONS[event.button],
                    clickCount: event.detail,
                    deltaX: event.deltaX / zoom,
                    deltaY: event.deltaY / zoom
                });
            }
        },
        {
            key: "modifiersForEvent",
            value: function modifiersForEvent(event) {
                return Number(event.getModifierState('Alt')) | Number(event.getModifierState('Control')) << 1 | Number(event.getModifierState('Meta')) << 2 | Number(event.getModifierState('Shift')) << 3;
            }
        }
    ]);
    return InputModel;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel);
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(InputModel, {
    capabilities: 1024 /* SDK.Target.Capability.Input */ ,
    autostart: false
}); //# sourceMappingURL=InputModel.js.map


}),
"./panels/screencast/ScreencastView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BORDERS_SIZE: function() { return BORDERS_SIZE; },
  HTTP_REGEX: function() { return HTTP_REGEX; },
  NAVBAR_HEIGHT: function() { return NAVBAR_HEIGHT; },
  ProgressTracker: function() { return ProgressTracker; },
  SCHEME_REGEX: function() { return SCHEME_REGEX; },
  ScreencastView: function() { return ScreencastView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _InputModel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InputModel.js */ "./panels/screencast/InputModel.js");
/* harmony import */var _screencastView_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screencastView.css.js */ "./panels/screencast/screencastView.css.js");
/*
 * Copyright (C) 2013 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _assert_this_initialized(self) {
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
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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








var UIStrings = {
    /**
     *@description Accessible alt text for the screencast canvas rendering of the debug target webpage
     */ screencastViewOfDebugTarget: 'Screencast view of debug target',
    /**
     *@description Glass pane element text content in Screencast View of the Remote Devices tab when toggling screencast
     */ theTabIsInactive: 'The tab is inactive',
    /**
     *@description Glass pane element text content in Screencast View of the Remote Devices tab when toggling screencast
     */ profilingInProgress: 'Profiling in progress',
    /**
     *@description Accessible text for the screencast back button
     */ back: 'back',
    /**
     *@description Accessible text for the screencast forward button
     */ forward: 'forward',
    /**
     *@description Accessible text for the screencast reload button
     */ reload: 'reload',
    /**
     *@description Accessible text for the address bar in screencast view
     */ addressBar: 'Address bar',
    /**
     *@description Accessible text for the touch emulation button.
     */ touchInput: 'Use touch',
    /**
     *@description Accessible text for the mouse emulation button.
     */ mouseInput: 'Use mouse'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/screencast/ScreencastView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var _toggleTouchEmulation = /*#__PURE__*/ new WeakSet();
var ScreencastView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(ScreencastView, _UI_Widget_VBox);
    var _super = _create_super(ScreencastView);
    function ScreencastView(screenCaptureModel) {
        _class_call_check(this, ScreencastView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _toggleTouchEmulation);
        _define_property(_assert_this_initialized(_this), "screenCaptureModel", void 0);
        _define_property(_assert_this_initialized(_this), "domModel", void 0);
        _define_property(_assert_this_initialized(_this), "overlayModel", void 0);
        _define_property(_assert_this_initialized(_this), "resourceTreeModel", void 0);
        _define_property(_assert_this_initialized(_this), "networkManager", void 0);
        _define_property(_assert_this_initialized(_this), "inputModel", void 0);
        _define_property(_assert_this_initialized(_this), "shortcuts", void 0);
        _define_property(_assert_this_initialized(_this), "scrollOffsetX", void 0);
        _define_property(_assert_this_initialized(_this), "scrollOffsetY", void 0);
        _define_property(_assert_this_initialized(_this), "screenZoom", void 0);
        _define_property(_assert_this_initialized(_this), "screenOffsetTop", void 0);
        _define_property(_assert_this_initialized(_this), "pageScaleFactor", void 0);
        _define_property(_assert_this_initialized(_this), "imageElement", void 0);
        _define_property(_assert_this_initialized(_this), "viewportElement", void 0);
        _define_property(_assert_this_initialized(_this), "glassPaneElement", void 0);
        _define_property(_assert_this_initialized(_this), "canvasElement", void 0);
        _define_property(_assert_this_initialized(_this), "titleElement", void 0);
        _define_property(_assert_this_initialized(_this), "context", void 0);
        _define_property(_assert_this_initialized(_this), "imageZoom", void 0);
        _define_property(_assert_this_initialized(_this), "tagNameElement", void 0);
        _define_property(_assert_this_initialized(_this), "attributeElement", void 0);
        _define_property(_assert_this_initialized(_this), "nodeWidthElement", void 0);
        _define_property(_assert_this_initialized(_this), "nodeHeightElement", void 0);
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "highlightConfig", void 0);
        _define_property(_assert_this_initialized(_this), "navigationUrl", void 0);
        _define_property(_assert_this_initialized(_this), "navigationBack", void 0);
        _define_property(_assert_this_initialized(_this), "navigationForward", void 0);
        _define_property(_assert_this_initialized(_this), "canvasContainerElement", void 0);
        _define_property(_assert_this_initialized(_this), "isCasting", void 0);
        _define_property(_assert_this_initialized(_this), "checkerboardPattern", void 0);
        _define_property(_assert_this_initialized(_this), "targetInactive", void 0);
        _define_property(_assert_this_initialized(_this), "deferredCasting", void 0);
        _define_property(_assert_this_initialized(_this), "highlightNode", void 0);
        _define_property(_assert_this_initialized(_this), "config", void 0);
        _define_property(_assert_this_initialized(_this), "node", void 0);
        _define_property(_assert_this_initialized(_this), "inspectModeConfig", void 0);
        _define_property(_assert_this_initialized(_this), "navigationBar", void 0);
        _define_property(_assert_this_initialized(_this), "navigationReload", void 0);
        _define_property(_assert_this_initialized(_this), "navigationProgressBar", void 0);
        _define_property(_assert_this_initialized(_this), "touchInputToggle", void 0);
        _define_property(_assert_this_initialized(_this), "mouseInputToggle", void 0);
        _define_property(_assert_this_initialized(_this), "touchInputToggleIcon", void 0);
        _define_property(_assert_this_initialized(_this), "mouseInputToggleIcon", void 0);
        _define_property(_assert_this_initialized(_this), "historyIndex", void 0);
        _define_property(_assert_this_initialized(_this), "historyEntries", void 0);
        _this.screenCaptureModel = screenCaptureModel;
        _this.domModel = screenCaptureModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMModel);
        _this.overlayModel = screenCaptureModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.OverlayModel);
        _this.resourceTreeModel = screenCaptureModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
        _this.networkManager = screenCaptureModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NetworkManager);
        _this.inputModel = screenCaptureModel.target().model(_InputModel_js__WEBPACK_IMPORTED_MODULE_6__.InputModel);
        _this.setMinimumSize(150, 150);
        _this.shortcuts = {};
        _this.scrollOffsetX = 0;
        _this.scrollOffsetY = 0;
        _this.screenZoom = 1;
        _this.screenOffsetTop = 0;
        _this.pageScaleFactor = 1;
        _this.imageZoom = 1;
        return _this;
    }
    _create_class(ScreencastView, [
        {
            key: "initialize",
            value: function initialize() {
                this.element.classList.add('screencast');
                this.createNavigationBar();
                this.viewportElement = this.element.createChild('div', 'screencast-viewport hidden');
                this.canvasContainerElement = this.viewportElement.createChild('div', 'screencast-canvas-container');
                this.glassPaneElement = this.canvasContainerElement.createChild('div', 'screencast-glasspane fill hidden');
                this.canvasElement = this.canvasContainerElement.createChild('canvas');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(this.canvasElement, i18nString(UIStrings.screencastViewOfDebugTarget));
                this.canvasElement.tabIndex = 0;
                this.canvasElement.addEventListener('mousedown', this.handleMouseEvent.bind(this), false);
                this.canvasElement.addEventListener('mouseup', this.handleMouseEvent.bind(this), false);
                this.canvasElement.addEventListener('mousemove', this.handleMouseEvent.bind(this), false);
                this.canvasElement.addEventListener('wheel', this.handleWheelEvent.bind(this), false);
                this.canvasElement.addEventListener('click', this.handleMouseEvent.bind(this), false);
                this.canvasElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), false);
                this.canvasElement.addEventListener('keydown', this.handleKeyEvent.bind(this), false);
                this.canvasElement.addEventListener('keyup', this.handleKeyEvent.bind(this), false);
                this.canvasElement.addEventListener('keypress', this.handleKeyEvent.bind(this), false);
                this.canvasElement.addEventListener('blur', this.handleBlurEvent.bind(this), false);
                this.titleElement = this.canvasContainerElement.createChild('div', 'screencast-element-title monospace hidden');
                this.tagNameElement = this.titleElement.createChild('span', 'screencast-tag-name');
                this.attributeElement = this.titleElement.createChild('span', 'screencast-attribute');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextChild(this.titleElement, ' ');
                var dimension = this.titleElement.createChild('span', 'screencast-dimension');
                this.nodeWidthElement = dimension.createChild('span');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextChild(dimension, ' × ');
                this.nodeHeightElement = dimension.createChild('span');
                this.titleElement.style.top = '0';
                this.titleElement.style.left = '0';
                this.imageElement = new Image();
                this.isCasting = false;
                this.context = this.canvasElement.getContext('2d');
                this.checkerboardPattern = this.createCheckerboardPattern(this.context);
                this.shortcuts[_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyboardShortcut.makeKey('l', _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.Modifiers.Ctrl)] = this.focusNavigationBar.bind(this);
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addEventListener("SuspendStateChanged" /* SDK.TargetManager.Events.SuspendStateChanged */ , this.onSuspendStateChange, this);
                this.updateGlasspane();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                this.startCasting();
                this.registerCSSFiles([
                    _screencastView_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ]);
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.stopCasting();
            }
        },
        {
            key: "startCasting",
            value: function startCasting() {
                if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().allTargetsSuspended()) {
                    return;
                }
                if (this.isCasting) {
                    return;
                }
                this.isCasting = true;
                var maxImageDimension = 2048;
                var dimensions = this.viewportDimensions();
                if (dimensions.width < 0 || dimensions.height < 0) {
                    this.isCasting = false;
                    return;
                }
                dimensions.width *= window.devicePixelRatio;
                dimensions.height *= window.devicePixelRatio;
                // Note: startScreencast width and height are expected to be integers so must be floored.
                this.screenCaptureModel.startScreencast("jpeg" /* Protocol.Page.StartScreencastRequestFormat.Jpeg */ , 80, Math.floor(Math.min(maxImageDimension, dimensions.width)), Math.floor(Math.min(maxImageDimension, dimensions.height)), undefined, this.screencastFrame.bind(this), this.screencastVisibilityChanged.bind(this));
                if (this.overlayModel) {
                    this.overlayModel.setHighlighter(this);
                }
            }
        },
        {
            key: "stopCasting",
            value: function stopCasting() {
                if (!this.isCasting) {
                    return;
                }
                this.isCasting = false;
                this.screenCaptureModel.stopScreencast();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.EmulationModel)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var emulationModel = _step.value;
                        void emulationModel.overrideEmulateTouch(false);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                if (this.overlayModel) {
                    this.overlayModel.setHighlighter(null);
                }
            }
        },
        {
            key: "screencastFrame",
            value: function screencastFrame(base64Data, metadata) {
                var _this = this;
                this.imageElement.onload = function() {
                    _this.pageScaleFactor = metadata.pageScaleFactor;
                    _this.screenOffsetTop = metadata.offsetTop;
                    _this.scrollOffsetX = metadata.scrollOffsetX;
                    _this.scrollOffsetY = metadata.scrollOffsetY;
                    var deviceSizeRatio = metadata.deviceHeight / metadata.deviceWidth;
                    var dimensionsCSS = _this.viewportDimensions();
                    _this.imageZoom = Math.min(dimensionsCSS.width / _this.imageElement.naturalWidth, dimensionsCSS.height / (_this.imageElement.naturalWidth * deviceSizeRatio));
                    _this.viewportElement.classList.remove('hidden');
                    var bordersSize = BORDERS_SIZE;
                    if (_this.imageZoom < 1.01 / window.devicePixelRatio) {
                        _this.imageZoom = 1 / window.devicePixelRatio;
                    }
                    _this.screenZoom = _this.imageElement.naturalWidth * _this.imageZoom / metadata.deviceWidth;
                    _this.viewportElement.style.width = metadata.deviceWidth * _this.screenZoom + bordersSize + 'px';
                    _this.viewportElement.style.height = metadata.deviceHeight * _this.screenZoom + bordersSize + 'px';
                    var data = _this.highlightNode ? {
                        node: _this.highlightNode,
                        selectorList: undefined
                    } : {
                        clear: true
                    };
                    void _this.updateHighlightInOverlayAndRepaint(data, _this.highlightConfig);
                };
                this.imageElement.src = 'data:image/jpg;base64,' + base64Data;
            }
        },
        {
            key: "isGlassPaneActive",
            value: function isGlassPaneActive() {
                return !this.glassPaneElement.classList.contains('hidden');
            }
        },
        {
            key: "screencastVisibilityChanged",
            value: function screencastVisibilityChanged(visible) {
                this.targetInactive = !visible;
                this.updateGlasspane();
            }
        },
        {
            key: "onSuspendStateChange",
            value: function onSuspendStateChange() {
                if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().allTargetsSuspended()) {
                    this.stopCasting();
                } else {
                    this.startCasting();
                }
                this.updateGlasspane();
            }
        },
        {
            key: "updateGlasspane",
            value: function updateGlasspane() {
                if (this.targetInactive) {
                    this.glassPaneElement.textContent = i18nString(UIStrings.theTabIsInactive);
                    this.glassPaneElement.classList.remove('hidden');
                } else if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().allTargetsSuspended()) {
                    this.glassPaneElement.textContent = i18nString(UIStrings.profilingInProgress);
                    this.glassPaneElement.classList.remove('hidden');
                } else {
                    this.glassPaneElement.classList.add('hidden');
                }
            }
        },
        {
            key: "handleMouseEvent",
            value: function handleMouseEvent(event) {
                var _this = this;
                return _async_to_generator(function() {
                    var position, node;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.isGlassPaneActive()) {
                                    event.consume();
                                    return [
                                        2
                                    ];
                                }
                                if (!_this.pageScaleFactor || !_this.domModel) {
                                    return [
                                        2
                                    ];
                                }
                                if (!_this.inspectModeConfig) {
                                    if (_this.inputModel) {
                                        _this.inputModel.emitMouseEvent(event, _this.screenOffsetTop, _this.screenZoom);
                                    }
                                    event.preventDefault();
                                    if (event.type === 'mousedown') {
                                        _this.canvasElement.focus();
                                    }
                                    return [
                                        2
                                    ];
                                }
                                position = _this.convertIntoScreenSpace(event);
                                return [
                                    4,
                                    _this.domModel.nodeForLocation(Math.floor(position.x / _this.pageScaleFactor + _this.scrollOffsetX), Math.floor(position.y / _this.pageScaleFactor + _this.scrollOffsetY), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-ua-shadow-dom').get())
                                ];
                            case 1:
                                node = _state.sent();
                                if (!node) {
                                    return [
                                        2
                                    ];
                                }
                                if (event.type === 'mousemove') {
                                    void _this.updateHighlightInOverlayAndRepaint({
                                        node: node,
                                        selectorList: undefined
                                    }, _this.inspectModeConfig);
                                    _this.domModel.overlayModel().nodeHighlightRequested({
                                        nodeId: node.id
                                    });
                                } else if (event.type === 'click') {
                                    _this.domModel.overlayModel().inspectNodeRequested({
                                        backendNodeId: node.backendNodeId()
                                    });
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "handleWheelEvent",
            value: function handleWheelEvent(event) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        if (_this.isGlassPaneActive()) {
                            event.consume();
                            return [
                                2
                            ];
                        }
                        if (!_this.pageScaleFactor || !_this.domModel) {
                            return [
                                2
                            ];
                        }
                        if (_this.inputModel) {
                            _this.inputModel.emitWheelEvent(event, _this.screenOffsetTop, _this.screenZoom);
                        }
                        event.preventDefault();
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "handleKeyEvent",
            value: function handleKeyEvent(event) {
                if (this.isGlassPaneActive()) {
                    event.consume();
                    return;
                }
                var shortcutKey = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyboardShortcut.makeKeyFromEvent(event);
                var handler = this.shortcuts[shortcutKey];
                if (handler && handler(event)) {
                    event.consume();
                    return;
                }
                if (this.inputModel) {
                    this.inputModel.emitKeyEvent(event);
                }
                event.consume();
                this.canvasElement.focus();
            }
        },
        {
            key: "handleBlurEvent",
            value: function handleBlurEvent() {
                var _this_mouseInputToggle;
                if (this.inputModel && ((_this_mouseInputToggle = this.mouseInputToggle) === null || _this_mouseInputToggle === void 0 ? void 0 : _this_mouseInputToggle.disabled)) {
                    var event = new MouseEvent('mouseup');
                    this.inputModel.emitMouseEvent(event, this.screenOffsetTop, this.screenZoom);
                }
            }
        },
        {
            key: "handleContextMenuEvent",
            value: function handleContextMenuEvent(event) {
                event.consume(true);
            }
        },
        {
            key: "convertIntoScreenSpace",
            value: function convertIntoScreenSpace(event) {
                return {
                    x: Math.round(event.offsetX / this.screenZoom),
                    y: Math.round(event.offsetY / this.screenZoom - this.screenOffsetTop)
                };
            }
        },
        {
            key: "onResize",
            value: function onResize() {
                if (this.deferredCasting) {
                    clearTimeout(this.deferredCasting);
                    delete this.deferredCasting;
                }
                this.stopCasting();
                this.deferredCasting = window.setTimeout(this.startCasting.bind(this), 100);
            }
        },
        {
            key: "highlightInOverlay",
            value: function highlightInOverlay(data, config) {
                void this.updateHighlightInOverlayAndRepaint(data, config);
            }
        },
        {
            key: "updateHighlightInOverlayAndRepaint",
            value: function updateHighlightInOverlayAndRepaint(data, config) {
                var _this = this;
                return _async_to_generator(function() {
                    var node, domModel;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                node = null;
                                if ('node' in data) {
                                    node = data.node;
                                }
                                if (!(!node && 'deferredNode' in data)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    data.deferredNode.resolvePromise()
                                ];
                            case 1:
                                node = _state.sent();
                                _state.label = 2;
                            case 2:
                                if (!(!node && 'object' in data)) return [
                                    3,
                                    4
                                ];
                                domModel = data.object.runtimeModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMModel);
                                if (!domModel) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    domModel.pushObjectAsNodeToFrontend(data.object)
                                ];
                            case 3:
                                node = _state.sent();
                                _state.label = 4;
                            case 4:
                                _this.highlightNode = node;
                                _this.highlightConfig = config;
                                if (!node) {
                                    _this.model = null;
                                    _this.config = null;
                                    _this.node = null;
                                    _this.titleElement.classList.add('hidden');
                                    _this.repaint();
                                    return [
                                        2
                                    ];
                                }
                                _this.node = node;
                                void node.boxModel().then(function(model) {
                                    if (!model || !_this.pageScaleFactor) {
                                        _this.repaint();
                                        return;
                                    }
                                    _this.model = _this.scaleModel(model);
                                    _this.config = config;
                                    _this.repaint();
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "scaleModel",
            value: function scaleModel(model) {
                function scaleQuad(quad) {
                    for(var i = 0; i < quad.length; i += 2){
                        quad[i] = quad[i] * this.pageScaleFactor * this.screenZoom;
                        quad[i + 1] = (quad[i + 1] * this.pageScaleFactor + this.screenOffsetTop) * this.screenZoom;
                    }
                }
                scaleQuad.call(this, model.content);
                scaleQuad.call(this, model.padding);
                scaleQuad.call(this, model.border);
                scaleQuad.call(this, model.margin);
                return model;
            }
        },
        {
            key: "repaint",
            value: function repaint() {
                var model = this.model;
                var config = this.config;
                var canvasWidth = this.canvasElement.getBoundingClientRect().width;
                var canvasHeight = this.canvasElement.getBoundingClientRect().height;
                this.canvasElement.width = window.devicePixelRatio * canvasWidth;
                this.canvasElement.height = window.devicePixelRatio * canvasHeight;
                this.context.save();
                this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
                // Paint top and bottom gutter.
                this.context.save();
                if (this.checkerboardPattern) {
                    this.context.fillStyle = this.checkerboardPattern;
                }
                this.context.fillRect(0, 0, canvasWidth, this.screenOffsetTop * this.screenZoom);
                this.context.fillRect(0, this.screenOffsetTop * this.screenZoom + this.imageElement.naturalHeight * this.imageZoom, canvasWidth, canvasHeight);
                this.context.restore();
                if (model && config) {
                    this.context.save();
                    var quads = [];
                    var isTransparent = function(color) {
                        return Boolean(color.a && color.a === 0);
                    };
                    if (model.content && config.contentColor && !isTransparent(config.contentColor)) {
                        quads.push({
                            quad: model.content,
                            color: config.contentColor
                        });
                    }
                    if (model.padding && config.paddingColor && !isTransparent(config.paddingColor)) {
                        quads.push({
                            quad: model.padding,
                            color: config.paddingColor
                        });
                    }
                    if (model.border && config.borderColor && !isTransparent(config.borderColor)) {
                        quads.push({
                            quad: model.border,
                            color: config.borderColor
                        });
                    }
                    if (model.margin && config.marginColor && !isTransparent(config.marginColor)) {
                        quads.push({
                            quad: model.margin,
                            color: config.marginColor
                        });
                    }
                    for(var i = quads.length - 1; i > 0; --i){
                        this.drawOutlinedQuadWithClip(quads[i].quad, quads[i - 1].quad, quads[i].color);
                    }
                    if (quads.length > 0) {
                        this.drawOutlinedQuad(quads[0].quad, quads[0].color);
                    }
                    this.context.restore();
                    this.drawElementTitle();
                    this.context.globalCompositeOperation = 'destination-over';
                }
                this.context.drawImage(this.imageElement, 0, this.screenOffsetTop * this.screenZoom, this.imageElement.naturalWidth * this.imageZoom, this.imageElement.naturalHeight * this.imageZoom);
                this.context.restore();
            }
        },
        {
            key: "cssColor",
            value: function cssColor(color) {
                if (!color) {
                    return 'transparent';
                }
                return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromRGBA([
                    color.r,
                    color.g,
                    color.b,
                    color.a !== undefined ? color.a : 1
                ]).asString("rgba" /* Common.Color.Format.RGBA */ ) || '';
            }
        },
        {
            key: "quadToPath",
            value: function quadToPath(quad) {
                this.context.beginPath();
                this.context.moveTo(quad[0], quad[1]);
                this.context.lineTo(quad[2], quad[3]);
                this.context.lineTo(quad[4], quad[5]);
                this.context.lineTo(quad[6], quad[7]);
                this.context.closePath();
                return this.context;
            }
        },
        {
            key: "drawOutlinedQuad",
            value: function drawOutlinedQuad(quad, fillColor) {
                this.context.save();
                this.context.lineWidth = 2;
                this.quadToPath(quad).clip();
                this.context.fillStyle = this.cssColor(fillColor);
                this.context.fill();
                this.context.restore();
            }
        },
        {
            key: "drawOutlinedQuadWithClip",
            value: function drawOutlinedQuadWithClip(quad, clipQuad, fillColor) {
                this.context.fillStyle = this.cssColor(fillColor);
                this.context.save();
                this.context.lineWidth = 0;
                this.quadToPath(quad).fill();
                this.context.globalCompositeOperation = 'destination-out';
                this.context.fillStyle = 'red';
                this.quadToPath(clipQuad).fill();
                this.context.restore();
            }
        },
        {
            key: "drawElementTitle",
            value: function drawElementTitle() {
                if (!this.node) {
                    return;
                }
                var canvasWidth = this.canvasElement.getBoundingClientRect().width;
                var canvasHeight = this.canvasElement.getBoundingClientRect().height;
                var lowerCaseName = this.node.localName() || this.node.nodeName().toLowerCase();
                this.tagNameElement.textContent = lowerCaseName;
                this.attributeElement.textContent = getAttributesForElementTitle(this.node);
                this.nodeWidthElement.textContent = String(this.model ? this.model.width : 0);
                this.nodeHeightElement.textContent = String(this.model ? this.model.height : 0);
                this.titleElement.classList.remove('hidden');
                var titleWidth = this.titleElement.offsetWidth + 6;
                var titleHeight = this.titleElement.offsetHeight + 4;
                var anchorTop = this.model ? this.model.margin[1] : 0;
                var anchorBottom = this.model ? this.model.margin[7] : 0;
                var arrowHeight = 7;
                var renderArrowUp = false;
                var renderArrowDown = false;
                var boxX = Math.max(2, this.model ? this.model.margin[0] : 0);
                if (boxX + titleWidth > canvasWidth) {
                    boxX = canvasWidth - titleWidth - 2;
                }
                var boxY;
                if (anchorTop > canvasHeight) {
                    boxY = canvasHeight - titleHeight - arrowHeight;
                    renderArrowDown = true;
                } else if (anchorBottom < 0) {
                    boxY = arrowHeight;
                    renderArrowUp = true;
                } else if (anchorBottom + titleHeight + arrowHeight < canvasHeight) {
                    boxY = anchorBottom + arrowHeight - 4;
                    renderArrowUp = true;
                } else if (anchorTop - titleHeight - arrowHeight > 0) {
                    boxY = anchorTop - titleHeight - arrowHeight + 3;
                    renderArrowDown = true;
                } else {
                    boxY = arrowHeight;
                }
                this.context.save();
                this.context.translate(0.5, 0.5);
                this.context.beginPath();
                this.context.moveTo(boxX, boxY);
                if (renderArrowUp) {
                    this.context.lineTo(boxX + 2 * arrowHeight, boxY);
                    this.context.lineTo(boxX + 3 * arrowHeight, boxY - arrowHeight);
                    this.context.lineTo(boxX + 4 * arrowHeight, boxY);
                }
                this.context.lineTo(boxX + titleWidth, boxY);
                this.context.lineTo(boxX + titleWidth, boxY + titleHeight);
                if (renderArrowDown) {
                    this.context.lineTo(boxX + 4 * arrowHeight, boxY + titleHeight);
                    this.context.lineTo(boxX + 3 * arrowHeight, boxY + titleHeight + arrowHeight);
                    this.context.lineTo(boxX + 2 * arrowHeight, boxY + titleHeight);
                }
                this.context.lineTo(boxX, boxY + titleHeight);
                this.context.closePath();
                this.context.fillStyle = 'var(--sys-color-yellow-container)';
                this.context.fill();
                this.context.strokeStyle = 'var(--sys-color-outline)';
                this.context.stroke();
                this.context.restore();
                this.titleElement.style.top = boxY + 3 + 'px';
                this.titleElement.style.left = boxX + 3 + 'px';
            }
        },
        {
            key: "viewportDimensions",
            value: function viewportDimensions() {
                var gutterSize = 30;
                var bordersSize = BORDERS_SIZE;
                var width = this.element.offsetWidth - bordersSize - gutterSize;
                var height = this.element.offsetHeight - bordersSize - gutterSize - NAVBAR_HEIGHT;
                return {
                    width: width,
                    height: height
                };
            }
        },
        {
            key: "setInspectMode",
            value: function setInspectMode(mode, config) {
                this.inspectModeConfig = mode !== "none" /* Protocol.Overlay.InspectMode.None */  ? config : null;
                return Promise.resolve();
            }
        },
        {
            key: "highlightFrame",
            value: function highlightFrame(_frameId) {}
        },
        {
            key: "createCheckerboardPattern",
            value: function createCheckerboardPattern(context) {
                var pattern = document.createElement('canvas');
                var size = 32;
                pattern.width = size * 2;
                pattern.height = size * 2;
                var pctx = pattern.getContext('2d');
                pctx.fillStyle = 'var(--sys-color-neutral-outline)';
                pctx.fillRect(0, 0, size * 2, size * 2);
                pctx.fillStyle = 'var(--sys-color-surface-variant)';
                pctx.fillRect(0, 0, size, size);
                pctx.fillRect(size, size, size, size);
                return context.createPattern(pattern, 'repeat');
            }
        },
        {
            key: "createNavigationBar",
            value: function createNavigationBar() {
                this.navigationBar = this.element.createChild('div', 'screencast-navigation');
                this.navigationBack = this.navigationBar.createChild('button', 'navigation');
                {
                    var icon = this.navigationBack.appendChild(new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon());
                    icon.data = {
                        color: 'var(--icon-default)',
                        iconName: 'arrow-back'
                    };
                }
                this.navigationBack.disabled = true;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(this.navigationBack, i18nString(UIStrings.back));
                this.navigationForward = this.navigationBar.createChild('button', 'navigation');
                {
                    var icon1 = this.navigationForward.appendChild(new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon());
                    icon1.data = {
                        color: 'var(--icon-default)',
                        iconName: 'arrow-forward'
                    };
                }
                this.navigationForward.disabled = true;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(this.navigationForward, i18nString(UIStrings.forward));
                this.navigationReload = this.navigationBar.createChild('button', 'navigation');
                {
                    var icon2 = this.navigationReload.appendChild(new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon());
                    icon2.data = {
                        color: 'var(--icon-default)',
                        iconName: 'refresh'
                    };
                }
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(this.navigationReload, i18nString(UIStrings.reload));
                this.navigationUrl = this.navigationBar.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createInput());
                this.navigationUrl.type = 'text';
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(this.navigationUrl, i18nString(UIStrings.addressBar));
                this.mouseInputToggle = this.navigationBar.createChild('button');
                this.mouseInputToggle.disabled = true;
                {
                    this.mouseInputToggleIcon = this.mouseInputToggle.appendChild(new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon());
                    this.mouseInputToggleIcon.data = {
                        color: 'var(--icon-toggled)',
                        iconName: 'mouse'
                    };
                }
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(this.mouseInputToggle, i18nString(UIStrings.mouseInput));
                this.touchInputToggle = this.navigationBar.createChild('button');
                {
                    this.touchInputToggleIcon = this.touchInputToggle.appendChild(new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon());
                    this.touchInputToggleIcon.data = {
                        color: 'var(--icon-default)',
                        iconName: 'touch-app'
                    };
                }
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(this.touchInputToggle, i18nString(UIStrings.touchInput));
                this.navigationProgressBar = new ProgressTracker(this.resourceTreeModel, this.networkManager, this.navigationBar.createChild('div', 'progress'));
                if (this.resourceTreeModel) {
                    this.navigationBack.addEventListener('click', this.navigateToHistoryEntry.bind(this, -1), false);
                    this.navigationForward.addEventListener('click', this.navigateToHistoryEntry.bind(this, 1), false);
                    this.navigationReload.addEventListener('click', this.navigateReload.bind(this), false);
                    this.navigationUrl.addEventListener('keyup', this.navigationUrlKeyUp.bind(this), true);
                    this.touchInputToggle.addEventListener('click', _class_private_method_get(this, _toggleTouchEmulation, toggleTouchEmulation).bind(this, true), false);
                    this.mouseInputToggle.addEventListener('click', _class_private_method_get(this, _toggleTouchEmulation, toggleTouchEmulation).bind(this, false), false);
                    void this.requestNavigationHistory();
                    this.resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.PrimaryPageChanged, this.requestNavigationHistoryEvent, this);
                    this.resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.CachedResourcesLoaded, this.requestNavigationHistoryEvent, this);
                }
            }
        },
        {
            key: "navigateToHistoryEntry",
            value: function navigateToHistoryEntry(offset) {
                if (!this.resourceTreeModel) {
                    return;
                }
                var newIndex = (this.historyIndex || 0) + offset;
                if (!this.historyEntries || newIndex < 0 || newIndex >= this.historyEntries.length) {
                    return;
                }
                this.resourceTreeModel.navigateToHistoryEntry(this.historyEntries[newIndex]);
                void this.requestNavigationHistory();
            }
        },
        {
            key: "navigateReload",
            value: function navigateReload() {
                if (!this.resourceTreeModel) {
                    return;
                }
                this.resourceTreeModel.reloadPage();
            }
        },
        {
            key: "navigationUrlKeyUp",
            value: function navigationUrlKeyUp(event) {
                if (event.key !== 'Enter') {
                    return;
                }
                var url = this.navigationUrl.value;
                if (!url) {
                    return;
                }
                if (!url.match(SCHEME_REGEX)) {
                    url = 'http://' + url;
                }
                if (this.resourceTreeModel) {
                    void this.resourceTreeModel.navigate(url);
                }
                this.canvasElement.focus();
            }
        },
        {
            key: "requestNavigationHistoryEvent",
            value: function requestNavigationHistoryEvent() {
                void this.requestNavigationHistory();
            }
        },
        {
            key: "requestNavigationHistory",
            value: function requestNavigationHistory() {
                var _this = this;
                return _async_to_generator(function() {
                    var history, _tmp, url, match;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.resourceTreeModel) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.resourceTreeModel.navigationHistory()
                                ];
                            case 1:
                                _tmp = _state.sent();
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                _tmp = null;
                                _state.label = 3;
                            case 3:
                                history = _tmp;
                                if (!history) {
                                    return [
                                        2
                                    ];
                                }
                                _this.historyIndex = history.currentIndex;
                                _this.historyEntries = history.entries;
                                _this.navigationBack.disabled = _this.historyIndex === 0;
                                _this.navigationForward.disabled = _this.historyIndex === _this.historyEntries.length - 1;
                                url = _this.historyEntries[_this.historyIndex].url;
                                match = url.match(HTTP_REGEX);
                                if (match) {
                                    url = match[1];
                                }
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.inspectedURLChanged(url);
                                _this.navigationUrl.value = decodeURI(url);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "focusNavigationBar",
            value: function focusNavigationBar() {
                this.navigationUrl.focus();
                this.navigationUrl.select();
                return true;
            }
        }
    ]);
    return ScreencastView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox);
function toggleTouchEmulation(value) {
    if (!this.canvasContainerElement || !this.isCasting || !this.mouseInputToggle || !this.touchInputToggle || !this.mouseInputToggleIcon || !this.touchInputToggleIcon) {
        return;
    }
    var models = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.EmulationModel);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = models[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var model = _step.value;
            void model.overrideEmulateTouch(value);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    this.mouseInputToggle.disabled = !value;
    this.touchInputToggle.disabled = value;
    this.mouseInputToggleIcon.data = _object_spread_props(_object_spread({}, this.mouseInputToggleIcon.data), {
        color: this.mouseInputToggle.disabled ? 'var(--icon-toggled)' : 'var(--icon-default)'
    });
    this.touchInputToggleIcon.data = _object_spread_props(_object_spread({}, this.touchInputToggleIcon.data), {
        color: this.touchInputToggle.disabled ? 'var(--icon-toggled)' : 'var(--icon-default)'
    });
    this.canvasContainerElement.classList.toggle('touchable', value);
}
var BORDERS_SIZE = 44;
var NAVBAR_HEIGHT = 29;
var HTTP_REGEX = /^http:\/\/(.+)/;
var SCHEME_REGEX = /^(https?|about|chrome):/;
var ProgressTracker = /*#__PURE__*/ function() {
    "use strict";
    function ProgressTracker(resourceTreeModel, networkManager, element) {
        _class_call_check(this, ProgressTracker);
        _define_property(this, "element", void 0);
        _define_property(this, "requestIds", void 0);
        _define_property(this, "startedRequests", void 0);
        _define_property(this, "finishedRequests", void 0);
        _define_property(this, "maxDisplayedProgress", void 0);
        this.element = element;
        if (resourceTreeModel) {
            resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.PrimaryPageChanged, this.onPrimaryPageChanged, this);
            resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, this.onLoad, this);
        }
        if (networkManager) {
            networkManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Events.RequestStarted, this.onRequestStarted, this);
            networkManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Events.RequestFinished, this.onRequestFinished, this);
        }
        this.requestIds = null;
        this.startedRequests = 0;
        this.finishedRequests = 0;
        this.maxDisplayedProgress = 0;
    }
    _create_class(ProgressTracker, [
        {
            key: "onPrimaryPageChanged",
            value: function onPrimaryPageChanged() {
                this.requestIds = new Map();
                this.startedRequests = 0;
                this.finishedRequests = 0;
                this.maxDisplayedProgress = 0;
                this.updateProgress(0.1); // Display first 10% on navigation start.
            }
        },
        {
            key: "onLoad",
            value: function onLoad() {
                var _this = this;
                this.requestIds = null;
                this.updateProgress(1); // Display 100% progress on load, hide it in 0.5s.
                window.setTimeout(function() {
                    if (!_this.navigationProgressVisible()) {
                        _this.displayProgress(0);
                    }
                }, 500);
            }
        },
        {
            key: "navigationProgressVisible",
            value: function navigationProgressVisible() {
                return this.requestIds !== null;
            }
        },
        {
            key: "onRequestStarted",
            value: function onRequestStarted(event) {
                if (!this.navigationProgressVisible()) {
                    return;
                }
                var request = event.data.request;
                // Ignore long-living WebSockets for the sake of progress indicator, as we won't be waiting them anyway.
                if (request.resourceType() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket) {
                    return;
                }
                if (this.requestIds) {
                    this.requestIds.set(request.requestId(), request);
                }
                ++this.startedRequests;
            }
        },
        {
            key: "onRequestFinished",
            value: function onRequestFinished(event) {
                var _this = this;
                if (!this.navigationProgressVisible()) {
                    return;
                }
                var request = event.data;
                if (this.requestIds && !this.requestIds.has(request.requestId())) {
                    return;
                }
                ++this.finishedRequests;
                window.setTimeout(function() {
                    _this.updateProgress(_this.finishedRequests / _this.startedRequests * 0.9); // Finished requests drive the progress up to 90%.
                }, 500); // Delay to give the new requests time to start. This makes the progress smoother.
            }
        },
        {
            key: "updateProgress",
            value: function updateProgress(progress) {
                if (!this.navigationProgressVisible()) {
                    return;
                }
                if (this.maxDisplayedProgress >= progress) {
                    return;
                }
                this.maxDisplayedProgress = progress;
                this.displayProgress(progress);
            }
        },
        {
            key: "displayProgress",
            value: function displayProgress(progress) {
                this.element.style.width = 100 * progress + '%';
            }
        }
    ]);
    return ProgressTracker;
}();
function getAttributesForElementTitle(node) {
    var id = node.getAttribute('id');
    var className = node.getAttribute('class');
    var selector = id ? '#' + id : '';
    if (className) {
        selector += '.' + className.trim().replace(/\s+/g, '.');
    }
    if (selector.length > 50) {
        selector = selector.substring(0, 50) + '…';
    }
    return selector;
} //# sourceMappingURL=ScreencastView.js.map


}),
"./panels/screencast/screencastView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (C) 2013 Google Inc. All rights reserved.\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions are\n * met:\n *\n *     * Redistributions of source code must retain the above copyright\n * notice, this list of conditions and the following disclaimer.\n *     * Redistributions in binary form must reproduce the above\n * copyright notice, this list of conditions and the following disclaimer\n * in the documentation and/or other materials provided with the\n * distribution.\n *     * Neither the name of Google Inc. nor the names of its\n * contributors may be used to endorse or promote products derived from\n * this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n.screencast {\n  overflow: hidden;\n}\n\n.screencast-navigation {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding-left: 1px;\n  border-bottom: 1px solid var(--sys-color-divider);\n  background-origin: padding-box;\n  background-clip: padding-box;\n}\n\n.screencast-navigation button {\n  border-width: 0;\n  padding: 5px;\n  width: 28px;\n  height: 26px;\n  background: none;\n}\n\n.screencast-navigation button devtools-icon {\n  width: 100%;\n  height: 100%;\n}\n\n.screencast-navigation button[disabled].navigation {\n  opacity: 50%;\n}\n\n.screencast-navigation input {\n  flex: 1;\n  margin: 2px;\n  max-height: 19px;\n}\n\n.screencast-navigation .progress {\n  background-color: var(--sys-color-primary-bright);\n  height: 3px;\n  left: 0;\n  position: absolute;\n  top: 100%;  /* Align with the bottom edge of the parent. */\n  width: 0;\n  z-index: 2;  /* Above .screencast-glasspane. */\n}\n\n.screencast-viewport {\n  display: flex;\n  border: 1px solid var(--sys-color-divider);\n  border-radius: 20px;\n  flex: none;\n  padding: 20px;\n  margin: auto;\n  background-color: var(--sys-color-surface-variant);\n}\n\n.screencast-canvas-container {\n  flex: auto;\n  display: flex;\n  border: 1px solid var(--sys-color-divider);\n  position: relative;\n}\n\n.screencast-canvas-container.touchable {\n  cursor: image-set(var(--image-file-touchCursor) 1x, var(--image-file-touchCursor_2x) 2x), default;\n}\n\n.screencast canvas {\n  flex: auto;\n  position: relative;\n}\n\n.screencast-element-title {\n  position: absolute;\n  z-index: 10;\n}\n\n.screencast-tag-name {\n  color: var(--sys-color-token-tag);\n}\n\n.screencast-attribute {\n  color: var(--sys-color-token-attribute);\n}\n\n.screencast-dimension {\n  /* Keep this in sync with tool_highlight.css (.dimensions) */\n  color: var(--sys-color-outline);\n}\n\n.screencast-glasspane {\n  background-color: var(--color-background-opacity-80);\n  font-size: 30px;\n  z-index: 100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*# sourceURL=screencastView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);