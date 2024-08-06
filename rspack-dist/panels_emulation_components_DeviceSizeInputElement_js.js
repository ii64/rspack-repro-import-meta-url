"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_emulation_components_DeviceSizeInputElement_js"], {
"./panels/emulation/components/DeviceSizeInputElement.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SizeInputElement: function() { return SizeInputElement; }
});
/* harmony import */var _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/emulation/emulation.js */ "./models/emulation/emulation.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
function _templateObject() {
    var data = _tagged_template_literal([
        '\n      <style>\n        input {\n          /*\n           * 4 characters for the maximum size of the value,\n           * 2 characters for the width of the step-buttons,\n           * 2 pixels padding between the characters and the\n           * step-buttons.\n           */\n          width: calc(4ch + 2ch + 2px);\n          max-height: 18px;\n          border: var(--sys-color-neutral-outline);\n          border-radius: 4px;\n          margin: 0 2px;\n          text-align: center;\n          font-size: inherit;\n          font-family: inherit;\n        }\n\n        input:disabled {\n          user-select: none;\n        }\n\n        input:focus::-webkit-input-placeholder {\n          color: transparent;\n        }\n      </style>\n      <input type="number"\n             max=',
        "\n             min=",
        "\n             jslog=",
        '\n             maxlength="4"\n             title=',
        "\n             placeholder=",
        "\n             ?disabled=",
        "\n             .value=",
        "\n             @change=",
        "\n             @keydown=",
        " />\n    "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "device-mode-emulation-size-input"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}




var SizeChangedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(SizeChangedEvent, Event1);
    var _super = _create_super(SizeChangedEvent);
    function SizeChangedEvent(size) {
        _class_call_check(this, SizeChangedEvent);
        var _this;
        _this = _super.call(this, SizeChangedEvent.eventName);
        _define_property(_assert_this_initialized(_this), "size", void 0);
        _this.size = size;
        return _this;
    }
    return SizeChangedEvent;
}(_wrap_native_super(Event));
_define_property(SizeChangedEvent, "eventName", 'sizechanged');
function getInputValue(event) {
    return Number(event.target.value);
}
var _root = /*#__PURE__*/ new WeakMap(), _disabled = /*#__PURE__*/ new WeakMap(), _size = /*#__PURE__*/ new WeakMap(), _placeholder = /*#__PURE__*/ new WeakMap(), _title = /*#__PURE__*/ new WeakMap(), _jslogContext = /*#__PURE__*/ new WeakMap(), _fireSizeChange = /*#__PURE__*/ new WeakSet(), _handleModifierKeys = /*#__PURE__*/ new WeakSet();
var SizeInputElement = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(SizeInputElement, HTMLElement1);
    var _super = _create_super(SizeInputElement);
    function SizeInputElement(title, param) {
        var jslogContext = param.jslogContext;
        _class_call_check(this, SizeInputElement);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _fireSizeChange);
        _class_private_method_init(_assert_this_initialized(_this), _handleModifierKeys);
        _class_private_field_init(_assert_this_initialized(_this), _root, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _disabled, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _size, {
            writable: true,
            value: '0'
        });
        _class_private_field_init(_assert_this_initialized(_this), _placeholder, {
            writable: true,
            value: ''
        });
        _class_private_field_init(_assert_this_initialized(_this), _title, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _jslogContext, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _title, title);
        _class_private_field_set(_assert_this_initialized(_this), _jslogContext, jslogContext);
        return _this;
    }
    _create_class(SizeInputElement, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                this.render();
            }
        },
        {
            key: "disabled",
            set: function set(disabled) {
                _class_private_field_set(this, _disabled, disabled);
                this.render();
            }
        },
        {
            key: "size",
            set: function set(size) {
                _class_private_field_set(this, _size, size);
                this.render();
            }
        },
        {
            key: "placeholder",
            set: function set(placeholder) {
                _class_private_field_set(this, _placeholder, placeholder);
                this.render();
            }
        },
        {
            key: "render",
            value: function render() {
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(// Since the emulation code runs in a different frame, we can't
                // use constructed stylesheets (they are disallowed cross-frame).
                // For now, use an inline style tag and later we can refactor this
                // to use proper constructed stylesheets, when the code runs
                // in the correct frame context.
                // eslint-disable-next-line rulesdir/ban_style_tags_in_lit_html
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html(_templateObject(), _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.DeviceModeModel.MaxDeviceSize, _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.DeviceModeModel.MinDeviceSize, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.textField().track({
                    change: true
                }).context(_class_private_field_get(this, _jslogContext)), _class_private_field_get(this, _title), _class_private_field_get(this, _placeholder), _class_private_field_get(this, _disabled), _class_private_field_get(this, _size), _class_private_method_get(this, _fireSizeChange, fireSizeChange), _class_private_method_get(this, _handleModifierKeys, handleModifierKeys)), _class_private_field_get(this, _root), {
                    host: this
                });
            }
        }
    ]);
    return SizeInputElement;
}(_wrap_native_super(HTMLElement));
_define_property(SizeInputElement, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal(_templateObject1()));
function fireSizeChange(event) {
    this.dispatchEvent(new SizeChangedEvent(getInputValue(event)));
}
function handleModifierKeys(event) {
    var modifiedValue = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.modifiedFloatNumber(getInputValue(event), event);
    if (modifiedValue === null) {
        return;
    }
    modifiedValue = Math.min(modifiedValue, _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.DeviceModeModel.MaxDeviceSize);
    modifiedValue = Math.max(modifiedValue, _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.DeviceModeModel.MinDeviceSize);
    event.preventDefault();
    event.target.value = String(modifiedValue);
    this.dispatchEvent(new SizeChangedEvent(modifiedValue));
}
customElements.define('device-mode-emulation-size-input', SizeInputElement); //# sourceMappingURL=DeviceSizeInputElement.js.map


}),

}]);