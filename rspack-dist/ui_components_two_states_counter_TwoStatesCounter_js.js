"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_two_states_counter_TwoStatesCounter_js"], {
"./ui/components/two_states_counter/TwoStatesCounter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TwoStatesCounter: function() { return TwoStatesCounter; }
});
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _twoStatesCounter_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./twoStatesCounter.css.js */ "./ui/components/two_states_counter/twoStatesCounter.css.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
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
        "devtools-two-states-counter"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n    <div class='counter'>\n      ",
        "\n      ",
        "\n    </div>\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n       <span class=",
        " style=",
        " title=",
        ">\n          ",
        "\n       </span>\n      "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}



var isString = function(value) {
    return value !== undefined;
};
var _boundRender = /*#__PURE__*/ new WeakMap(), _shadow = /*#__PURE__*/ new WeakMap(), _numActive = /*#__PURE__*/ new WeakMap(), _numInactive = /*#__PURE__*/ new WeakMap(), _width = /*#__PURE__*/ new WeakMap(), _height = /*#__PURE__*/ new WeakMap(), _activeTitle = /*#__PURE__*/ new WeakMap(), _inactiveTitle = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _renderPart = /*#__PURE__*/ new WeakSet();
var TwoStatesCounter = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(TwoStatesCounter, HTMLElement1);
    var _super = _create_super(TwoStatesCounter);
    function TwoStatesCounter() {
        _class_call_check(this, TwoStatesCounter);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _renderPart);
        _class_private_field_init(_assert_this_initialized(_this), _boundRender, {
            writable: true,
            value: _class_private_method_get(_this, _render, render).bind(_assert_this_initialized(_this))
        });
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _numActive, {
            writable: true,
            value: 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _numInactive, {
            writable: true,
            value: 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _width, {
            writable: true,
            value: '14px'
        });
        _class_private_field_init(_assert_this_initialized(_this), _height, {
            writable: true,
            value: '14px'
        });
        _class_private_field_init(_assert_this_initialized(_this), _activeTitle, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _inactiveTitle, {
            writable: true,
            value: void 0
        });
        return _this;
    }
    _create_class(TwoStatesCounter, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _twoStatesCounter_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]
                ];
                void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _boundRender));
            }
        },
        {
            key: "data",
            set: function set(data) {
                if (data.active < 0 || data.inactive < 0) {
                    throw new Error('Values need to be greater or equal to zero.');
                }
                _class_private_field_set(this, _numActive, data.active);
                _class_private_field_set(this, _numInactive, data.inactive);
                _class_private_field_set(this, _width, isString(data.width) ? data.width : _class_private_field_get(this, _width));
                _class_private_field_set(this, _height, isString(data.height) ? data.height : _class_private_field_get(this, _height));
                _class_private_field_set(this, _activeTitle, data.activeTitle);
                _class_private_field_set(this, _inactiveTitle, data.inactiveTitle);
                void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _boundRender));
            }
        }
    ]);
    return TwoStatesCounter;
}(_wrap_native_super(HTMLElement));
_define_property(TwoStatesCounter, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal(_templateObject()));
function render() {
    if (_class_private_field_get(this, _numActive) === 0 && _class_private_field_get(this, _numInactive) === 0) {
        return;
    }
    var showBothNumbers = _class_private_field_get(this, _numActive) > 0 && _class_private_field_get(this, _numInactive) > 0;
    var commonClasses = {
        part: true,
        split: showBothNumbers
    };
    var activeClassMap = _object_spread_props(_object_spread({}, commonClasses), {
        active: true
    });
    var inactiveClassMap = _object_spread_props(_object_spread({}, commonClasses), {
        inactive: true
    });
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject1(), _class_private_method_get(this, _renderPart, renderPart).call(this, _class_private_field_get(this, _numActive), activeClassMap, _class_private_field_get(this, _activeTitle)), _class_private_method_get(this, _renderPart, renderPart).call(this, _class_private_field_get(this, _numInactive), inactiveClassMap, _class_private_field_get(this, _inactiveTitle))), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
function renderPart(count, classInfo, title) {
    var styles = {
        width: _class_private_field_get(this, _width),
        height: _class_private_field_get(this, _height)
    };
    // clang-format off
    return count > 0 ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject2(), _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap(classInfo), _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.styleMap(styles), title, count) : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
// clang-format on
}
customElements.define('devtools-two-states-counter', TwoStatesCounter); //# sourceMappingURL=TwoStatesCounter.js.map


}),
"./ui/components/two_states_counter/twoStatesCounter.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2022 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.active.split {\n  border-radius: 50% 0% 0% 50%;\n}\n\n.inactive.split {\n  border-radius: 0% 50% 50% 0%;\n}\n\n.counter {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.part {\n  display: flex;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.active {\n  color: var(--sys-color-on-primary);\n  background-color: var(--sys-color-primary);\n}\n\n.inactive {\n  color: var(--sys-color-state-disabled);\n  background-color: var(--sys-color-state-disabled-container);\n}\n\n/*# sourceURL=twoStatesCounter.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);