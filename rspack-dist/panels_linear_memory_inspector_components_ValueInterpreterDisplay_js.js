"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_ValueInterpreterDisplay_js"], {
"./panels/linear_memory_inspector/components/ValueInterpreterDisplay.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  JumpToPointerAddressEvent: function() { return JumpToPointerAddressEvent; },
  ValueInterpreterDisplay: function() { return ValueInterpreterDisplay; },
  ValueTypeModeChangedEvent: function() { return ValueTypeModeChangedEvent; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_inspectorCommon_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/legacy/inspectorCommon.css.js */ "./ui/legacy/inspectorCommon.css.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _valueInterpreterDisplay_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./valueInterpreterDisplay.css.js */ "./panels/linear_memory_inspector/components/valueInterpreterDisplay.css.js");
/* harmony import */var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.js");
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
        "devtools-linear-memory-inspector-interpreter-display"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n      <div class="value-types">\n        ',
        "\n      </div>\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n              <button class="jump-to-button" data-jump="true" title=',
        " ?disabled=",
        "\n                jslog=",
        "\n                @click=",
        ">\n                <",
        " .data=",
        ">\n                </",
        ">\n              </button>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n      <span class="value-type-cell-no-mode value-type-cell selectable-text">',
        '</span>\n      <div class="value-type-cell">\n        <div class="value-type-value-with-link" data-value="true">\n        <span class="selectable-text">',
        "</span>\n          ",
        "\n        </div>\n      </div>\n    "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n                <option value=",
        " .selected=",
        "\n                        jslog=",
        ">",
        "\n                </option>"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        '\n      <span class="value-type-cell selectable-text">',
        "</span>\n      <div>\n        <select title=",
        '\n          data-mode-settings="true"\n          class="chrome-select"\n          style="border: none; background-color: transparent; cursor: pointer; color: var(--sys-color-token-subtle);"\n          jslog=',
        "\n          @change=",
        ">\n            ",
        "\n        </select>\n      </div>\n      ",
        "\n    "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        '<span class="value-type-cell selectable-text"  title=',
        ' data-value="true">',
        "</span>"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        '<span class="selectable-text" data-value="true" title=',
        ">",
        "</span>"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        '\n        <div class="value-type-cell">\n          ',
        "\n          ",
        "\n        </div>\n        "
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        '\n      <div class="value-type-cell" style="flex-direction: row;">\n        ',
        '\n        <span class="signed-divider"></span>\n        ',
        "\n      </div>\n    "
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}


// eslint-disable-next-line rulesdir/es_modules_import





var UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over an unsigned interpretation of the memory under the Value Interpreter
     */ unsignedValue: '`Unsigned` value',
    /**
     *@description Tooltip text that appears when hovering over the element to change value type modes of under the Value Interpreter. Value type modes
     *             are different ways of viewing a certain value, e.g.: 10 (decimal) can be 0xa in hexadecimal mode, or 12 in octal mode.
     */ changeValueTypeMode: 'Change mode',
    /**
     *@description Tooltip text that appears when hovering over a signed interpretation of the memory under the Value Interpreter
     */ signedValue: '`Signed` value',
    /**
     *@description Tooltip text that appears when hovering over a 'jump-to-address' button that is next to a pointer (32-bit or 64-bit) under the Value Interpreter
     */ jumpToPointer: 'Jump to address',
    /**
     *@description Tooltip text that appears when hovering over a 'jump-to-address' button that is next to a pointer (32-bit or 64-bit) with an invalid address under the Value Interpreter.
     */ addressOutOfRange: 'Address out of memory range'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/linear_memory_inspector/components/ValueInterpreterDisplay.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html;
var SORTED_VALUE_TYPES = Array.from((0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.getDefaultValueTypeMapping)().keys());
var ValueTypeModeChangedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(ValueTypeModeChangedEvent, Event1);
    var _super = _create_super(ValueTypeModeChangedEvent);
    function ValueTypeModeChangedEvent(type, mode) {
        _class_call_check(this, ValueTypeModeChangedEvent);
        var _this;
        _this = _super.call(this, ValueTypeModeChangedEvent.eventName, {
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = {
            type: type,
            mode: mode
        };
        return _this;
    }
    return ValueTypeModeChangedEvent;
}(_wrap_native_super(Event));
_define_property(ValueTypeModeChangedEvent, "eventName", 'valuetypemodechanged');
var JumpToPointerAddressEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(JumpToPointerAddressEvent, Event1);
    var _super = _create_super(JumpToPointerAddressEvent);
    function JumpToPointerAddressEvent(address) {
        _class_call_check(this, JumpToPointerAddressEvent);
        var _this;
        _this = _super.call(this, JumpToPointerAddressEvent.eventName, {
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = address;
        return _this;
    }
    return JumpToPointerAddressEvent;
}(_wrap_native_super(Event));
_define_property(JumpToPointerAddressEvent, "eventName", 'jumptopointeraddress');
var _shadow = /*#__PURE__*/ new WeakMap(), _endianness = /*#__PURE__*/ new WeakMap(), _buffer = /*#__PURE__*/ new WeakMap(), _valueTypes = /*#__PURE__*/ new WeakMap(), _valueTypeModeConfig = /*#__PURE__*/ new WeakMap(), _memoryLength = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _showValue = /*#__PURE__*/ new WeakSet(), _renderPointerValue = /*#__PURE__*/ new WeakSet(), _onJumpToAddressClicked = /*#__PURE__*/ new WeakSet(), _renderNumberValues = /*#__PURE__*/ new WeakSet(), _renderSignedAndUnsigned = /*#__PURE__*/ new WeakSet(), _onValueTypeModeChange = /*#__PURE__*/ new WeakSet(), _parse = /*#__PURE__*/ new WeakSet();
var ValueInterpreterDisplay = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ValueInterpreterDisplay, HTMLElement1);
    var _super = _create_super(ValueInterpreterDisplay);
    function ValueInterpreterDisplay() {
        _class_call_check(this, ValueInterpreterDisplay);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _showValue);
        _class_private_method_init(_assert_this_initialized(_this), _renderPointerValue);
        _class_private_method_init(_assert_this_initialized(_this), _onJumpToAddressClicked);
        _class_private_method_init(_assert_this_initialized(_this), _renderNumberValues);
        _class_private_method_init(_assert_this_initialized(_this), _renderSignedAndUnsigned);
        _class_private_method_init(_assert_this_initialized(_this), _onValueTypeModeChange);
        _class_private_method_init(_assert_this_initialized(_this), _parse);
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
            value: (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.getDefaultValueTypeMapping)()
        });
        _class_private_field_init(_assert_this_initialized(_this), _memoryLength, {
            writable: true,
            value: 0
        });
        _class_private_field_get(_this, _shadow).adoptedStyleSheets = [
            _ui_legacy_inspectorCommon_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]
        ];
        return _this;
    }
    _create_class(ValueInterpreterDisplay, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _valueInterpreterDisplay_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ];
            }
        },
        {
            key: "data",
            set: function set(data) {
                var _this = this;
                _class_private_field_set(this, _buffer, data.buffer);
                _class_private_field_set(this, _endianness, data.endianness);
                _class_private_field_set(this, _valueTypes, data.valueTypes);
                _class_private_field_set(this, _memoryLength, data.memoryLength);
                if (data.valueTypeModes) {
                    data.valueTypeModes.forEach(function(mode, valueType) {
                        if ((0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.isValidMode)(valueType, mode)) {
                            _class_private_field_get(_this, _valueTypeModeConfig).set(valueType, mode);
                        }
                    });
                }
                _class_private_method_get(this, _render, render1).call(this);
            }
        }
    ]);
    return ValueInterpreterDisplay;
}(_wrap_native_super(HTMLElement));
_define_property(ValueInterpreterDisplay, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal(_templateObject()));
function render1() {
    var _this = this;
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html(_templateObject1(), SORTED_VALUE_TYPES.map(function(type) {
        return _class_private_field_get(_this, _valueTypes).has(type) ? _class_private_method_get(_this, _showValue, showValue).call(_this, type) : '';
    })), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
function showValue(type) {
    if ((0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.isNumber)(type)) {
        return _class_private_method_get(this, _renderNumberValues, renderNumberValues).call(this, type);
    }
    if ((0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.isPointer)(type)) {
        return _class_private_method_get(this, _renderPointerValue, renderPointerValue).call(this, type);
    }
    throw new Error("No known way to format ".concat(type));
}
function renderPointerValue(type) {
    var unsignedValue = _class_private_method_get(this, _parse, parse).call(this, {
        type: type,
        signed: false
    });
    var address = (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.getPointerAddress)(type, _class_private_field_get(this, _buffer), _class_private_field_get(this, _endianness));
    var jumpDisabled = Number.isNaN(address) || BigInt(address) >= BigInt(_class_private_field_get(this, _memoryLength));
    var buttonTitle = jumpDisabled ? i18nString(UIStrings.addressOutOfRange) : i18nString(UIStrings.jumpToPointer);
    var iconColor = jumpDisabled ? 'var(--icon-default)' : 'var(--icon-link)';
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html(_templateObject3(), _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString(type), unsignedValue, html(_templateObject2(), buttonTitle, jumpDisabled, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action('linear-memory-inspector.jump-to-address').track({
        click: true
    }), _class_private_method_get(this, _onJumpToAddressClicked, onJumpToAddressClicked).bind(this, Number(address)), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName, {
        iconName: 'open-externally',
        color: iconColor,
        width: '16px'
    }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName));
// clang-format on
}
function onJumpToAddressClicked(address) {
    this.dispatchEvent(new JumpToPointerAddressEvent(address));
}
function renderNumberValues(type) {
    var _this = this;
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html(_templateObject5(), _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString(type), i18nString(UIStrings.changeValueTypeMode), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.dropDown('linear-memory-inspector.value-type-mode').track({
        change: true
    }), _class_private_method_get(this, _onValueTypeModeChange, onValueTypeModeChange).bind(this, type), _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.VALUE_TYPE_MODE_LIST.filter(function(x) {
        return (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.isValidMode)(type, x);
    }).map(function(mode) {
        return html(_templateObject4(), mode, _class_private_field_get(_this, _valueTypeModeConfig).get(type) === mode, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.item(mode).track({
            click: true
        }), _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString(mode));
    }), _class_private_method_get(this, _renderSignedAndUnsigned, renderSignedAndUnsigned).call(this, type));
// clang-format on
}
function renderSignedAndUnsigned(type) {
    var unsignedValue = _class_private_method_get(this, _parse, parse).call(this, {
        type: type,
        signed: false
    });
    var signedValue = _class_private_method_get(this, _parse, parse).call(this, {
        type: type,
        signed: true
    });
    var mode = _class_private_field_get(this, _valueTypeModeConfig).get(type);
    var showSignedAndUnsigned = signedValue !== unsignedValue && mode !== "hex" /* ValueTypeMode.Hexadecimal */  && mode !== "oct" /* ValueTypeMode.Octal */ ;
    var unsignedRendered = html(_templateObject6(), i18nString(UIStrings.unsignedValue), unsignedValue);
    if (!showSignedAndUnsigned) {
        return unsignedRendered;
    }
    // Some values are too long to show in one line, we're putting them into the next line.
    var showInMultipleLines = type === "Integer 32-bit" /* ValueType.Int32 */  || type === "Integer 64-bit" /* ValueType.Int64 */ ;
    var signedRendered = html(_templateObject7(), i18nString(UIStrings.signedValue), signedValue);
    if (showInMultipleLines) {
        return html(_templateObject8(), unsignedRendered, signedRendered);
    }
    return html(_templateObject9(), unsignedRendered, signedRendered);
}
function onValueTypeModeChange(type, event) {
    event.preventDefault();
    var select = event.target;
    var mode = select.value;
    this.dispatchEvent(new ValueTypeModeChangedEvent(type, mode));
}
function parse(data) {
    var mode = _class_private_field_get(this, _valueTypeModeConfig).get(data.type);
    return (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.format)({
        buffer: _class_private_field_get(this, _buffer),
        type: data.type,
        endianness: _class_private_field_get(this, _endianness),
        signed: data.signed || false,
        mode: mode
    });
}
customElements.define('devtools-linear-memory-inspector-interpreter-display', ValueInterpreterDisplay); //# sourceMappingURL=ValueInterpreterDisplay.js.map


}),
"./panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  VALUE_INTEPRETER_MAX_NUM_BYTES: function() { return VALUE_INTEPRETER_MAX_NUM_BYTES; },
  VALUE_TYPE_MODE_LIST: function() { return VALUE_TYPE_MODE_LIST; },
  format: function() { return format; },
  formatFloat: function() { return formatFloat; },
  formatInteger: function() { return formatInteger; },
  getDefaultValueTypeMapping: function() { return getDefaultValueTypeMapping; },
  getPointerAddress: function() { return getPointerAddress; },
  isNumber: function() { return isNumber; },
  isPointer: function() { return isPointer; },
  isValidMode: function() { return isValidMode; },
  valueTypeToLocalizedString: function() { return valueTypeToLocalizedString; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var UIStrings = {
    /**
     *@description Text that is shown in the LinearMemoryInspector if a value could not be correctly formatted
     *             for the requested mode (e.g. we do not floats to be represented as hexadecimal numbers).
     *             Abbreviation stands for 'not applicable'.
     */ notApplicable: 'N/A'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var VALUE_INTEPRETER_MAX_NUM_BYTES = 8;
function getDefaultValueTypeMapping() {
    return new Map(DEFAULT_MODE_MAPPING);
}
var DEFAULT_MODE_MAPPING = new Map([
    [
        "Integer 8-bit" /* ValueType.Int8 */ ,
        "dec" /* ValueTypeMode.Decimal */ 
    ],
    [
        "Integer 16-bit" /* ValueType.Int16 */ ,
        "dec" /* ValueTypeMode.Decimal */ 
    ],
    [
        "Integer 32-bit" /* ValueType.Int32 */ ,
        "dec" /* ValueTypeMode.Decimal */ 
    ],
    [
        "Integer 64-bit" /* ValueType.Int64 */ ,
        "dec" /* ValueTypeMode.Decimal */ 
    ],
    [
        "Float 32-bit" /* ValueType.Float32 */ ,
        "dec" /* ValueTypeMode.Decimal */ 
    ],
    [
        "Float 64-bit" /* ValueType.Float64 */ ,
        "dec" /* ValueTypeMode.Decimal */ 
    ],
    [
        "Pointer 32-bit" /* ValueType.Pointer32 */ ,
        "hex" /* ValueTypeMode.Hexadecimal */ 
    ],
    [
        "Pointer 64-bit" /* ValueType.Pointer64 */ ,
        "hex" /* ValueTypeMode.Hexadecimal */ 
    ]
]);
var VALUE_TYPE_MODE_LIST = [
    "dec" /* ValueTypeMode.Decimal */ ,
    "hex" /* ValueTypeMode.Hexadecimal */ ,
    "oct" /* ValueTypeMode.Octal */ ,
    "sci" /* ValueTypeMode.Scientific */ 
];
function valueTypeToLocalizedString(valueType) {
    return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString(valueType);
}
function isValidMode(type, mode) {
    switch(type){
        case "Integer 8-bit" /* ValueType.Int8 */ :
        case "Integer 16-bit" /* ValueType.Int16 */ :
        case "Integer 32-bit" /* ValueType.Int32 */ :
        case "Integer 64-bit" /* ValueType.Int64 */ :
            return mode === "dec" /* ValueTypeMode.Decimal */  || mode === "hex" /* ValueTypeMode.Hexadecimal */  || mode === "oct" /* ValueTypeMode.Octal */ ;
        case "Float 32-bit" /* ValueType.Float32 */ :
        case "Float 64-bit" /* ValueType.Float64 */ :
            return mode === "sci" /* ValueTypeMode.Scientific */  || mode === "dec" /* ValueTypeMode.Decimal */ ;
        case "Pointer 32-bit" /* ValueType.Pointer32 */ :
        case "Pointer 64-bit" /* ValueType.Pointer64 */ :
            return mode === "hex" /* ValueTypeMode.Hexadecimal */ ;
        default:
            return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNever(type, "Unknown value type: ".concat(type));
    }
}
function isNumber(type) {
    switch(type){
        case "Integer 8-bit" /* ValueType.Int8 */ :
        case "Integer 16-bit" /* ValueType.Int16 */ :
        case "Integer 32-bit" /* ValueType.Int32 */ :
        case "Integer 64-bit" /* ValueType.Int64 */ :
        case "Float 32-bit" /* ValueType.Float32 */ :
        case "Float 64-bit" /* ValueType.Float64 */ :
            return true;
        default:
            return false;
    }
}
function getPointerAddress(type, buffer, endianness) {
    if (!isPointer(type)) {
        console.error("Requesting address of a non-pointer type: ".concat(type, ".\n"));
        return NaN;
    }
    try {
        var dataView = new DataView(buffer);
        var isLittleEndian = endianness === "Little Endian" /* Endianness.Little */ ;
        return type === "Pointer 32-bit" /* ValueType.Pointer32 */  ? dataView.getUint32(0, isLittleEndian) : dataView.getBigUint64(0, isLittleEndian);
    } catch (e) {
        return NaN;
    }
}
function isPointer(type) {
    return type === "Pointer 32-bit" /* ValueType.Pointer32 */  || type === "Pointer 64-bit" /* ValueType.Pointer64 */ ;
}
function format(formatData) {
    if (!formatData.mode) {
        console.error("No known way of showing value for ".concat(formatData.type));
        return i18nString(UIStrings.notApplicable);
    }
    var valueView = new DataView(formatData.buffer);
    var isLittleEndian = formatData.endianness === "Little Endian" /* Endianness.Little */ ;
    var value;
    try {
        switch(formatData.type){
            case "Integer 8-bit" /* ValueType.Int8 */ :
                value = formatData.signed ? valueView.getInt8(0) : valueView.getUint8(0);
                return formatInteger(value, formatData.mode);
            case "Integer 16-bit" /* ValueType.Int16 */ :
                value = formatData.signed ? valueView.getInt16(0, isLittleEndian) : valueView.getUint16(0, isLittleEndian);
                return formatInteger(value, formatData.mode);
            case "Integer 32-bit" /* ValueType.Int32 */ :
                value = formatData.signed ? valueView.getInt32(0, isLittleEndian) : valueView.getUint32(0, isLittleEndian);
                return formatInteger(value, formatData.mode);
            case "Integer 64-bit" /* ValueType.Int64 */ :
                value = formatData.signed ? valueView.getBigInt64(0, isLittleEndian) : valueView.getBigUint64(0, isLittleEndian);
                return formatInteger(value, formatData.mode);
            case "Float 32-bit" /* ValueType.Float32 */ :
                value = valueView.getFloat32(0, isLittleEndian);
                return formatFloat(value, formatData.mode);
            case "Float 64-bit" /* ValueType.Float64 */ :
                value = valueView.getFloat64(0, isLittleEndian);
                return formatFloat(value, formatData.mode);
            case "Pointer 32-bit" /* ValueType.Pointer32 */ :
                value = valueView.getUint32(0, isLittleEndian);
                return formatInteger(value, "hex" /* ValueTypeMode.Hexadecimal */ );
            case "Pointer 64-bit" /* ValueType.Pointer64 */ :
                value = valueView.getBigUint64(0, isLittleEndian);
                return formatInteger(value, "hex" /* ValueTypeMode.Hexadecimal */ );
            default:
                return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNever(formatData.type, "Unknown value type: ".concat(formatData.type));
        }
    } catch (e) {
        return i18nString(UIStrings.notApplicable);
    }
}
function formatFloat(value, mode) {
    switch(mode){
        case "dec" /* ValueTypeMode.Decimal */ :
            return value.toFixed(2).toString();
        case "sci" /* ValueTypeMode.Scientific */ :
            return value.toExponential(2).toString();
        default:
            throw new Error("Unknown mode for floats: ".concat(mode, "."));
    }
}
function formatInteger(value, mode) {
    switch(mode){
        case "dec" /* ValueTypeMode.Decimal */ :
            return value.toString();
        case "hex" /* ValueTypeMode.Hexadecimal */ :
            if (value < 0) {
                return i18nString(UIStrings.notApplicable);
            }
            return '0x' + value.toString(16).toUpperCase();
        case "oct" /* ValueTypeMode.Octal */ :
            if (value < 0) {
                return i18nString(UIStrings.notApplicable);
            }
            return value.toString(8);
        default:
            throw new Error("Unknown mode for integers: ".concat(mode, "."));
    }
} //# sourceMappingURL=ValueInterpreterDisplayUtils.js.map


}),
"./panels/linear_memory_inspector/components/valueInterpreterDisplay.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  flex: auto;\n  display: flex;\n}\n\n.value-types {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto auto 1fr;\n  gap: 4px 24px;\n  min-height: 24px;\n  overflow: hidden;\n  padding: 2px 12px;\n  align-items: baseline;\n  justify-content: start;\n}\n\n.value-type-cell {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 24px;\n}\n\n.value-type-value-with-link {\n  display: flex;\n  align-items: center;\n}\n\n.value-type-cell-no-mode {\n  grid-column: 1 / 3;\n}\n\n.jump-to-button {\n  display: flex;\n  width: 20px;\n  height: 20px;\n  border: none;\n  padding: 0;\n  outline: none;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.signed-divider {\n  width: 1px;\n  height: 15px;\n  background-color: var(--sys-color-divider);\n  margin: 0 4px;\n}\n\n.selectable-text {\n  user-select: text;\n}\n\n.selectable-text::selection {\n  background-color: var(--sys-color-tonal-container);\n}\n\n/*# sourceURL=valueInterpreterDisplay.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);