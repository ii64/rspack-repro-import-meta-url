"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_AdornerSettingsPane_js"], {
"./panels/elements/components/AdornerSettingsPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AdornerSettingUpdatedEvent: function() { return AdornerSettingUpdatedEvent; },
  AdornerSettingsPane: function() { return AdornerSettingsPane; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _adornerSettingsPane_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adornerSettingsPane.css.js */ "./panels/elements/components/adornerSettingsPane.css.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
        "devtools-adorner-settings-pane"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n        <label class="setting" title=',
        '>\n          <input\n            class="adorner-status"\n            type="checkbox" name=',
        "\n            .checked=",
        "\n            jslog=",
        "\n            data-adorner=",
        '>\n          <span class="adorner-name">',
        "</span>\n        </label>\n      "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n      <div class="adorner-settings-pane" tabindex="-1" jslog=',
        '>\n        <div class="settings-title">',
        '</div>\n        <div class="setting-list" @change=',
        ">\n          ",
        "\n        </div>\n        <",
        " aria-label=",
        "\n                                             .iconName=",
        "\n                                             .size=",
        "\n                                             .title=",
        "\n                                             .variant=",
        "\n                                             jslog=",
        "\n                                             @click=",
        "></",
        ">\n      </div>\n    "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}






var UIStrings = {
    /**
     * @description Title of a list of settings to toggle badges.
     */ settingsTitle: 'Show badges',
    /**
     * @description ARIA label of the button to close the badge settings pane
     */ closeButton: 'Close'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/AdornerSettingsPane.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html;
var AdornerSettingUpdatedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(AdornerSettingUpdatedEvent, Event1);
    var _super = _create_super(AdornerSettingUpdatedEvent);
    function AdornerSettingUpdatedEvent(adornerName, isEnabledNow, newSettings) {
        _class_call_check(this, AdornerSettingUpdatedEvent);
        var _this;
        _this = _super.call(this, AdornerSettingUpdatedEvent.eventName, {});
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = {
            adornerName: adornerName,
            isEnabledNow: isEnabledNow,
            newSettings: newSettings
        };
        return _this;
    }
    return AdornerSettingUpdatedEvent;
}(_wrap_native_super(Event));
_define_property(AdornerSettingUpdatedEvent, "eventName", 'adornersettingupdated');
var _shadow = /*#__PURE__*/ new WeakMap(), _settings = /*#__PURE__*/ new WeakMap(), _onChange = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
var AdornerSettingsPane = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(AdornerSettingsPane, HTMLElement1);
    var _super = _create_super(AdornerSettingsPane);
    function AdornerSettingsPane() {
        _class_call_check(this, AdornerSettingsPane);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _onChange);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _settings, {
            writable: true,
            value: new Map()
        });
        return _this;
    }
    _create_class(AdornerSettingsPane, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__.checkboxStyles,
                    _adornerSettingsPane_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ];
            }
        },
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _settings, new Map(data.settings.entries()));
                _class_private_method_get(this, _render, render1).call(this);
            }
        },
        {
            key: "show",
            value: function show() {
                this.classList.remove('hidden');
                var settingsPane = _class_private_field_get(this, _shadow).querySelector('.adorner-settings-pane');
                if (settingsPane) {
                    settingsPane.focus();
                }
            }
        },
        {
            key: "hide",
            value: function hide() {
                this.classList.add('hidden');
            }
        }
    ]);
    return AdornerSettingsPane;
}(_wrap_native_super(HTMLElement));
_define_property(AdornerSettingsPane, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal(_templateObject()));
function onChange(ev) {
    var inputEl = ev.target;
    var adorner = inputEl.dataset.adorner;
    if (adorner === undefined) {
        return;
    }
    var isEnabledNow = inputEl.checked;
    _class_private_field_get(this, _settings).set(adorner, isEnabledNow);
    this.dispatchEvent(new AdornerSettingUpdatedEvent(adorner, isEnabledNow, _class_private_field_get(this, _settings)));
    _class_private_method_get(this, _render, render1).call(this);
}
function render1() {
    var settingTemplates = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _class_private_field_get(this, _settings)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), adorner = _step_value[0], isEnabled = _step_value[1];
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            settingTemplates.push(html(_templateObject1(), adorner, adorner, isEnabled, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toggle(adorner).track({
                change: true
            }), adorner, adorner));
        // clang-format on
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
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html(_templateObject2(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('adorner-settings'), i18nString(UIStrings.settingsTitle), _class_private_method_get(this, _onChange, onChange), settingTemplates, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName, i18nString(UIStrings.closeButton), 'cross', "SMALL" /* Buttons.Button.Size.SMALL */ , i18nString(UIStrings.closeButton), "icon" /* Buttons.Button.Variant.ICON */ , _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.close().track({
        click: true
    }), this.hide, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
customElements.define('devtools-adorner-settings-pane', AdornerSettingsPane); //# sourceMappingURL=AdornerSettingsPane.js.map


}),
"./panels/elements/components/adornerSettingsPane.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.adorner-settings-pane {\n  display: flex;\n  height: auto;\n  padding: 6px 12px;\n  color: var(--sys-color-on-surface);\n  font-size: 12px;\n  align-items: center;\n}\n\n.settings-title {\n  font-weight: 500;\n  margin-right: 6px;\n}\n\n.setting {\n  margin-left: 1em;\n}\n\n.adorner-status {\n  margin: auto 0.4em auto 0;\n}\n\n.adorner-status,\n.adorner-name {\n  vertical-align: middle;\n}\n\n/*# sourceURL=adornerSettingsPane.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);