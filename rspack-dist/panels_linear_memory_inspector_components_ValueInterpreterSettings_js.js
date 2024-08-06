"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_ValueInterpreterSettings_js"], {
"./panels/linear_memory_inspector/components/ValueInterpreterSettings.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TypeToggleEvent: function() { return TypeToggleEvent; },
  ValueInterpreterSettings: function() { return ValueInterpreterSettings; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.js");
/* harmony import */var _valueInterpreterSettings_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./valueInterpreterSettings.css.js */ "./panels/linear_memory_inspector/components/valueInterpreterSettings.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
        "devtools-linear-memory-inspector-interpreter-settings"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n          <div class="value-types-selection">\n            <span class="group">',
        "</span>\n            ",
        "\n          </div>\n        "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n      <div class="settings" jslog=',
        ">\n       ",
        "\n      </div>\n      "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n          <label class="type-label" title=',
        '>\n            <input data-input="true" type="checkbox" .checked=',
        " @change=",
        " jslog=",
        '>\n            <span data-title="true">',
        "</span>\n          </label>\n     "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n      ",
        ""
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}







var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html;
var UIStrings = {
    /**
     *@description Name of a group of selectable value types that do not fall under integer and floating point value types, e.g. Pointer32. The group appears name appears under the Value Interpreter Settings.
     */ otherGroup: 'Other'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/linear_memory_inspector/components/ValueInterpreterSettings.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var GROUP_TO_TYPES = new Map([
    [
        "Integer" /* ValueTypeGroup.Integer */ ,
        [
            "Integer 8-bit" /* ValueType.Int8 */ ,
            "Integer 16-bit" /* ValueType.Int16 */ ,
            "Integer 32-bit" /* ValueType.Int32 */ ,
            "Integer 64-bit" /* ValueType.Int64 */ 
        ]
    ],
    [
        "Floating point" /* ValueTypeGroup.Float */ ,
        [
            "Float 32-bit" /* ValueType.Float32 */ ,
            "Float 64-bit" /* ValueType.Float64 */ 
        ]
    ],
    [
        "Other" /* ValueTypeGroup.Other */ ,
        [
            "Pointer 32-bit" /* ValueType.Pointer32 */ ,
            "Pointer 64-bit" /* ValueType.Pointer64 */ 
        ]
    ]
]);
function valueTypeGroupToLocalizedString(group) {
    if (group === "Other" /* ValueTypeGroup.Other */ ) {
        return i18nString(UIStrings.otherGroup);
    }
    // The remaining group type names should not be localized.
    return group;
}
var TypeToggleEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(TypeToggleEvent, Event1);
    var _super = _create_super(TypeToggleEvent);
    function TypeToggleEvent(type, checked) {
        _class_call_check(this, TypeToggleEvent);
        var _this;
        _this = _super.call(this, TypeToggleEvent.eventName);
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = {
            type: type,
            checked: checked
        };
        return _this;
    }
    return TypeToggleEvent;
}(_wrap_native_super(Event));
_define_property(TypeToggleEvent, "eventName", 'typetoggle');
var _shadow = /*#__PURE__*/ new WeakMap(), _valueTypes = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _plotTypeSelections = /*#__PURE__*/ new WeakSet(), _onTypeToggle = /*#__PURE__*/ new WeakSet();
var ValueInterpreterSettings = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ValueInterpreterSettings, HTMLElement1);
    var _super = _create_super(ValueInterpreterSettings);
    function ValueInterpreterSettings() {
        _class_call_check(this, ValueInterpreterSettings);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _plotTypeSelections);
        _class_private_method_init(_assert_this_initialized(_this), _onTypeToggle);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _valueTypes, {
            writable: true,
            value: new Set()
        });
        return _this;
    }
    _create_class(ValueInterpreterSettings, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__.checkboxStyles,
                    _valueInterpreterSettings_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]
                ];
            }
        },
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _valueTypes, data.valueTypes);
                _class_private_method_get(this, _render, render1).call(this);
            }
        }
    ]);
    return ValueInterpreterSettings;
}(_wrap_native_super(HTMLElement));
_define_property(ValueInterpreterSettings, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal(_templateObject()));
function render1() {
    var _this = this;
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html(_templateObject2(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('settings'), _to_consumable_array(GROUP_TO_TYPES.keys()).map(function(group) {
        return html(_templateObject1(), valueTypeGroupToLocalizedString(group), _class_private_method_get(_this, _plotTypeSelections, plotTypeSelections).call(_this, group));
    })), _class_private_field_get(this, _shadow), {
        host: this
    });
}
function plotTypeSelections(group) {
    var _this = this;
    var types = GROUP_TO_TYPES.get(group);
    if (!types) {
        throw new Error("Unknown group ".concat(group));
    }
    return html(_templateObject4(), types.map(function(type) {
        return html(_templateObject3(), (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.valueTypeToLocalizedString)(type), _class_private_field_get(_this, _valueTypes).has(type), function(e) {
            return _class_private_method_get(_this, _onTypeToggle, onTypeToggle).call(_this, type, e);
        }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toggle().track({
            change: true
        }).context(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(type)), (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.valueTypeToLocalizedString)(type));
    }));
}
function onTypeToggle(type, event) {
    var checkbox = event.target;
    this.dispatchEvent(new TypeToggleEvent(type, checkbox.checked));
}
customElements.define('devtools-linear-memory-inspector-interpreter-settings', ValueInterpreterSettings); //# sourceMappingURL=ValueInterpreterSettings.js.map


}),
"./panels/linear_memory_inspector/components/valueInterpreterSettings.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  flex: auto;\n  display: flex;\n  min-height: 20px;\n}\n\n.settings {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 12px 12px;\n  column-gap: 45px;\n  row-gap: 15px;\n}\n\n.value-types-selection {\n  display: flex;\n  flex-direction: column;\n}\n\n.group {\n  font-weight: bold;\n  margin-bottom: 11px;\n}\n\n.type-label {\n  white-space: nowrap;\n}\n\n.group + .type-label {\n  margin-top: 5px;\n}\n\n.type-label input {\n  margin: 0 6px 0 0;\n  padding: 0;\n}\n\n.type-label + .type-label {\n  margin-top: 6px;\n}\n\n/*# sourceURL=valueInterpreterSettings.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);