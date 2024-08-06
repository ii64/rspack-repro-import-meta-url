"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_screencast_InputModel_js"], {
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

}]);