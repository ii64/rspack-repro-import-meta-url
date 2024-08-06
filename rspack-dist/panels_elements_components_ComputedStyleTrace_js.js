"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_ComputedStyleTrace_js"], {
"./panels/elements/components/ComputedStyleTrace.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ComputedStyleTrace: function() { return ComputedStyleTrace; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _computedStyleTrace_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computedStyleTrace.css.js */ "./panels/elements/components/computedStyleTrace.css.js");
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
        "devtools-computed-style-trace"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n      <div class="computed-style-trace ',
        '">\n        <span class="goto" @click=',
        '></span>\n        <slot name="trace-value" @click=',
        '></slot>\n        <span class="trace-selector">',
        '</span>\n        <span class="trace-link">',
        "</span>\n      </div>\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}



var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html;
var _shadow = /*#__PURE__*/ new WeakMap(), _selector = /*#__PURE__*/ new WeakMap(), _active = /*#__PURE__*/ new WeakMap(), _onNavigateToSource = /*#__PURE__*/ new WeakMap(), _ruleOriginNode = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet();
var ComputedStyleTrace = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ComputedStyleTrace, HTMLElement1);
    var _super = _create_super(ComputedStyleTrace);
    function ComputedStyleTrace() {
        _class_call_check(this, ComputedStyleTrace);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _selector, {
            writable: true,
            value: ''
        });
        _class_private_field_init(_assert_this_initialized(_this), _active, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _onNavigateToSource, {
            writable: true,
            value: function() {}
        });
        _class_private_field_init(_assert_this_initialized(_this), _ruleOriginNode, {
            writable: true,
            value: void 0
        });
        return _this;
    }
    _create_class(ComputedStyleTrace, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _computedStyleTrace_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]
                ];
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.injectCoreStyles(_class_private_field_get(this, _shadow));
            }
        },
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _selector, data.selector);
                _class_private_field_set(this, _active, data.active);
                _class_private_field_set(this, _onNavigateToSource, data.onNavigateToSource);
                _class_private_field_set(this, _ruleOriginNode, data.ruleOriginNode);
                _class_private_method_get(this, _render, render1).call(this);
            }
        }
    ]);
    return ComputedStyleTrace;
}(_wrap_native_super(HTMLElement));
_define_property(ComputedStyleTrace, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal(_templateObject()));
function render1() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html(_templateObject1(), _class_private_field_get(this, _active) ? 'active' : 'inactive', _class_private_field_get(this, _onNavigateToSource), _class_private_field_get(this, _onNavigateToSource), _class_private_field_get(this, _selector), _class_private_field_get(this, _ruleOriginNode)), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
customElements.define('devtools-computed-style-trace', ComputedStyleTrace); //# sourceMappingURL=ComputedStyleTrace.js.map


}),
"./panels/elements/components/computedStyleTrace.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  flex-grow: 1;\n}\n\n.computed-style-trace {\n  margin-left: 16px;\n  font-family: var(--monospace-font-family);\n  font-size: var(--monospace-font-size);\n}\n\n.computed-style-trace:hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n  cursor: text;\n}\n\n.goto {\n  /* TODO: reuse with ComputedStyleProperty */\n  --size: 16px;\n\n  display: none;\n  cursor: pointer;\n  position: absolute;\n  width: var(--size);\n  height: var(--size);\n  margin: -1px 0 0 calc(-1 * var(--size));\n  mask: var(--image-file-goto-filled) center / contain no-repeat;\n  background-color: var(--sys-color-surface-variant);\n}\n\n.computed-style-trace:hover .goto {\n  display: inline-block;\n}\n\n.devtools-link {\n  color: var(--sys-color-on-surface);\n  text-decoration-color: var(--sys-color-token-subtle);\n  text-decoration-line: underline;\n  cursor: pointer;\n}\n\n.trace-value {\n  margin-left: 16px;\n}\n\n.computed-style-trace.inactive slot[name="trace-value"] {\n  text-decoration: line-through;\n}\n\n.trace-selector {\n  --override-trace-selector-color: var(--sys-color-neutral-bright);\n\n  color: var(--override-trace-selector-color);\n  padding-left: 2em;\n}\n\n.trace-link {\n  user-select: none;\n  float: right;\n  padding-left: 1em;\n  position: relative;\n  z-index: 1;\n}\n/* high-contrast styles */\n@media (forced-colors: active) {\n  .computed-style-trace:hover {\n    forced-color-adjust: none;\n    background-color: Highlight;\n  }\n\n  .goto {\n    background-color: Highlight;\n  }\n\n  .computed-style-trace:hover * {\n    color: HighlightText;\n  }\n\n  .computed-style-trace:hover .trace-selector {\n    --override-trace-selector-color: HighlightText;\n  }\n}\n\n/*# sourceURL=computedStyleTrace.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);