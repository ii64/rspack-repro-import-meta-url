"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_LinearMemoryValueInterpreter_js"], {
"./panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EndiannessChangedEvent: function() { return EndiannessChangedEvent; },
  LinearMemoryValueInterpreter: function() { return LinearMemoryValueInterpreter; },
  ValueTypeToggledEvent: function() { return ValueTypeToggledEvent; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _linearMemoryValueInterpreter_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linearMemoryValueInterpreter.css.js */ "./panels/linear_memory_inspector/components/linearMemoryValueInterpreter.css.js");
/* harmony import */var _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ValueInterpreterDisplay.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplay.js");
/* harmony import */var _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ValueInterpreterSettings.js */ "./panels/linear_memory_inspector/components/ValueInterpreterSettings.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
        "devtools-linear-memory-inspector-interpreter"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n              <",
        "\n                .data=",
        "\n                @typetoggle=",
        ">\n              </",
        ">"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n              <",
        "\n                .data=",
        ">\n              </",
        ">"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n      <div class="value-interpreter">\n        <div class="settings-toolbar">\n          ',
        '\n          <button data-settings="true" class="settings-toolbar-button ',
        '"\n              title=',
        " @click=",
        "\n              jslog=",
        ">\n            <",
        " name=",
        "></",
        '>\n          </button>\n        </div>\n        <span class="divider"></span>\n        <div>\n          ',
        "\n        </div>\n      </div>\n    "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "<option value=",
        " .selected=",
        "\n            jslog=",
        ">",
        "</option>"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        '\n    <label data-endianness-setting="true" title=',
        '>\n      <select class="chrome-select"\n        jslog=',
        '\n        style="border: none; background-color: transparent; cursor: pointer;"\n        data-endianness="true" @change=',
        ">\n        ",
        "\n      </select>\n    </label>\n    "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}








var UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over the gear button to open and close settings in the Linear memory inspector. These settings
     *             allow the user to change the value type to view, such as 32-bit Integer, or 32-bit Float.
     */ toggleValueTypeSettings: 'Toggle value type settings',
    /**
     *@description Tooltip text that appears when hovering over the 'Little Endian' or 'Big Endian' setting in the Linear memory inspector.
     */ changeEndianness: 'Change `Endianness`'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html;
var EndiannessChangedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(EndiannessChangedEvent, Event1);
    var _super = _create_super(EndiannessChangedEvent);
    function EndiannessChangedEvent(endianness) {
        _class_call_check(this, EndiannessChangedEvent);
        var _this;
        _this = _super.call(this, EndiannessChangedEvent.eventName);
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = endianness;
        return _this;
    }
    return EndiannessChangedEvent;
}(_wrap_native_super(Event));
_define_property(EndiannessChangedEvent, "eventName", 'endiannesschanged');
var ValueTypeToggledEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(ValueTypeToggledEvent, Event1);
    var _super = _create_super(ValueTypeToggledEvent);
    function ValueTypeToggledEvent(type, checked) {
        _class_call_check(this, ValueTypeToggledEvent);
        var _this;
        _this = _super.call(this, ValueTypeToggledEvent.eventName);
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = {
            type: type,
            checked: checked
        };
        return _this;
    }
    return ValueTypeToggledEvent;
}(_wrap_native_super(Event));
_define_property(ValueTypeToggledEvent, "eventName", 'valuetypetoggled');
var _shadow = /*#__PURE__*/ new WeakMap(), _endianness = /*#__PURE__*/ new WeakMap(), _buffer = /*#__PURE__*/ new WeakMap(), _valueTypes = /*#__PURE__*/ new WeakMap(), _valueTypeModeConfig = /*#__PURE__*/ new WeakMap(), _memoryLength = /*#__PURE__*/ new WeakMap(), _showSettings = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _onEndiannessChange = /*#__PURE__*/ new WeakSet(), _renderEndiannessSetting = /*#__PURE__*/ new WeakSet(), _onSettingsToggle = /*#__PURE__*/ new WeakSet(), _onTypeToggle = /*#__PURE__*/ new WeakSet();
var LinearMemoryValueInterpreter = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(LinearMemoryValueInterpreter, HTMLElement1);
    var _super = _create_super(LinearMemoryValueInterpreter);
    function LinearMemoryValueInterpreter() {
        _class_call_check(this, LinearMemoryValueInterpreter);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _onEndiannessChange);
        _class_private_method_init(_assert_this_initialized(_this), _renderEndiannessSetting);
        _class_private_method_init(_assert_this_initialized(_this), _onSettingsToggle);
        _class_private_method_init(_assert_this_initialized(_this), _onTypeToggle);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _endianness, {
            writable: true,
            value: "Little Endian" /* Endianness.Little */ 
        });
        _class_private_field_init(_assert_this_initialized(_this), _buffer, {
            writable: true,
            value: new ArrayBuffer(0)
        });
        _class_private_field_init(_assert_this_initialized(_this), _valueTypes, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _valueTypeModeConfig, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _memoryLength, {
            writable: true,
            value: 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _showSettings, {
            writable: true,
            value: false
        });
        return _this;
    }
    _create_class(LinearMemoryValueInterpreter, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _linearMemoryValueInterpreter_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ];
            }
        },
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _endianness, data.endianness);
                _class_private_field_set(this, _buffer, data.value);
                _class_private_field_set(this, _valueTypes, data.valueTypes);
                _class_private_field_set(this, _valueTypeModeConfig, data.valueTypeModes || new Map());
                _class_private_field_set(this, _memoryLength, data.memoryLength);
                _class_private_method_get(this, _render, render1).call(this);
            }
        }
    ]);
    return LinearMemoryValueInterpreter;
}(_wrap_native_super(HTMLElement));
_define_property(LinearMemoryValueInterpreter, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal(_templateObject()));
function render1() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html(_templateObject3(), _class_private_method_get(this, _renderEndiannessSetting, renderEndiannessSetting).call(this), _class_private_field_get(this, _showSettings) ? 'active' : '', i18nString(UIStrings.toggleValueTypeSettings), _class_private_method_get(this, _onSettingsToggle, onSettingsToggle), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toggleSubpane('linear-memory-inspector.toggle-value-settings').track({
        click: true
    }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName, _class_private_field_get(this, _showSettings) ? 'gear-filled' : 'gear', _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName, _class_private_field_get(this, _showSettings) ? html(_templateObject1(), _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_7__.ValueInterpreterSettings.litTagName, {
        valueTypes: _class_private_field_get(this, _valueTypes)
    }, _class_private_method_get(this, _onTypeToggle, onTypeToggle), _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_7__.ValueInterpreterSettings.litTagName) : html(_templateObject2(), _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_6__.ValueInterpreterDisplay.litTagName, {
        buffer: _class_private_field_get(this, _buffer),
        valueTypes: _class_private_field_get(this, _valueTypes),
        endianness: _class_private_field_get(this, _endianness),
        valueTypeModes: _class_private_field_get(this, _valueTypeModeConfig),
        memoryLength: _class_private_field_get(this, _memoryLength)
    }, _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_6__.ValueInterpreterDisplay.litTagName)), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
function onEndiannessChange(event) {
    event.preventDefault();
    var select = event.target;
    var endianness = select.value;
    this.dispatchEvent(new EndiannessChangedEvent(endianness));
}
function renderEndiannessSetting() {
    var _this = this;
    var onEnumSettingChange = _class_private_method_get(this, _onEndiannessChange, onEndiannessChange).bind(this);
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html(_templateObject5(), i18nString(UIStrings.changeEndianness), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.dropDown('linear-memory-inspector.endianess').track({
        change: true
    }), onEnumSettingChange, [
        "Little Endian" /* Endianness.Little */ ,
        "Big Endian" /* Endianness.Big */ 
    ].map(function(endianness) {
        return html(_templateObject4(), endianness, _class_private_field_get(_this, _endianness) === endianness, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.item(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(endianness)).track({
            click: true
        }), _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString(endianness));
    }));
// clang-format on
}
function onSettingsToggle() {
    _class_private_field_set(this, _showSettings, !_class_private_field_get(this, _showSettings));
    _class_private_method_get(this, _render, render1).call(this);
}
function onTypeToggle(e) {
    this.dispatchEvent(new ValueTypeToggledEvent(e.data.type, e.data.checked));
}
customElements.define('devtools-linear-memory-inspector-interpreter', LinearMemoryValueInterpreter); //# sourceMappingURL=LinearMemoryValueInterpreter.js.map


}),
"./panels/linear_memory_inspector/components/linearMemoryValueInterpreter.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  flex: auto;\n  display: flex;\n}\n\n.value-interpreter {\n  border: 1px solid var(--sys-color-divider);\n  background-color: var(--sys-color-cdt-base-container);\n  overflow: hidden;\n  width: 400px;\n}\n\n.settings-toolbar {\n  min-height: 26px;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  padding-left: 12px;\n  padding-right: 12px;\n  align-items: center;\n}\n\n.settings-toolbar-button {\n  padding: 0;\n  width: 20px;\n  height: 20px;\n  border: none;\n  outline: none;\n  background-color: transparent;\n}\n\n.settings-toolbar-button.active devtools-icon {\n  color: var(--icon-toggled);\n}\n\n.divider {\n  display: block;\n  height: 1px;\n  margin-bottom: 12px;\n  background-color: var(--sys-color-divider);\n}\n\n/*# sourceURL=linearMemoryValueInterpreter.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);