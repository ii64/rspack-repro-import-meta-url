"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_ComputedStyleProperty_js"], {
"./panels/elements/components/ComputedStyleProperty.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ComputedStyleProperty: function() { return ComputedStyleProperty; },
  NavigateToSourceEvent: function() { return NavigateToSourceEvent; }
});
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _computedStyleProperty_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computedStyleProperty.css.js */ "./panels/elements/components/computedStyleProperty.css.js");
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
        "devtools-computed-style-property"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '<span class="goto" @click=',
        " jslog=",
        "></span>"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n      <div class="computed-style-property ',
        '">\n        <div class="property-name">\n          <slot name="name"></slot>\n        </div>\n        <span class="hidden" aria-hidden="false">: </span>\n        ',
        '\n        <div class="property-value">\n          <slot name="value"></slot>\n        </div>\n        <span class="hidden" aria-hidden="false">;</span>\n      </div>\n    '
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}



var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html;
var NavigateToSourceEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(NavigateToSourceEvent, Event1);
    var _super = _create_super(NavigateToSourceEvent);
    function NavigateToSourceEvent() {
        _class_call_check(this, NavigateToSourceEvent);
        return _super.call(this, NavigateToSourceEvent.eventName, {
            bubbles: true,
            composed: true
        });
    }
    return NavigateToSourceEvent;
}(_wrap_native_super(Event));
_define_property(NavigateToSourceEvent, "eventName", 'onnavigatetosource');
var _shadow = /*#__PURE__*/ new WeakMap(), _inherited = /*#__PURE__*/ new WeakMap(), _traceable = /*#__PURE__*/ new WeakMap(), _onNavigateToSourceClick = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
var ComputedStyleProperty = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ComputedStyleProperty, HTMLElement1);
    var _super = _create_super(ComputedStyleProperty);
    function ComputedStyleProperty() {
        _class_call_check(this, ComputedStyleProperty);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _onNavigateToSourceClick);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _inherited, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _traceable, {
            writable: true,
            value: false
        });
        return _this;
    }
    _create_class(ComputedStyleProperty, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _computedStyleProperty_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]
                ];
                _class_private_method_get(this, _render, render1).call(this);
            }
        },
        {
            key: "inherited",
            set: function set(inherited) {
                if (inherited === _class_private_field_get(this, _inherited)) {
                    return;
                }
                _class_private_field_set(this, _inherited, inherited);
                _class_private_method_get(this, _render, render1).call(this);
            }
        },
        {
            key: "traceable",
            set: function set(traceable) {
                if (traceable === _class_private_field_get(this, _traceable)) {
                    return;
                }
                _class_private_field_set(this, _traceable, traceable);
                _class_private_method_get(this, _render, render1).call(this);
            }
        }
    ]);
    return ComputedStyleProperty;
}(_wrap_native_super(HTMLElement));
_define_property(ComputedStyleProperty, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal(_templateObject()));
function onNavigateToSourceClick() {
    this.dispatchEvent(new NavigateToSourceEvent());
}
function render1() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html(_templateObject2(), _class_private_field_get(this, _inherited) ? 'inherited' : '', _class_private_field_get(this, _traceable) ? html(_templateObject1(), _class_private_method_get(this, _onNavigateToSourceClick, onNavigateToSourceClick), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.action('elements.jump-to-style').track({
        click: true
    })) : null), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
customElements.define('devtools-computed-style-property', ComputedStyleProperty); //# sourceMappingURL=ComputedStyleProperty.js.map


}),
"./panels/elements/components/computedStyleProperty.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  position: relative;\n  overflow: hidden;\n  flex: auto;\n  text-overflow: ellipsis;\n}\n\n.computed-style-property {\n  --goto-size: 16px;\n\n  font-family: var(--monospace-font-family);\n  font-size: var(--monospace-font-size);\n  min-height: 16px;\n  box-sizing: border-box;\n  padding-top: 2px;\n  white-space: nowrap;\n  user-select: text;\n}\n\n.computed-style-property:hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n  cursor: text;\n}\n\n.computed-style-property.inherited {\n  opacity: 50%;\n}\n\n.property-name,\n.property-value {\n  display: contents;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.property-name {\n  width: 16em;\n  max-width: 52%;\n  margin-right: calc(var(--goto-size) / 2);\n  display: inline-block;\n  vertical-align: text-top;\n  color: var(--webkit-css-property-color, var(--sys-color-token-property-special)); /* stylelint-disable-line plugin/use_theme_colors */ /* See: crbug.com/1152736 for color variable migration. */\n}\n\n.property-value {\n  margin-left: 2em;\n}\n\n.goto {\n  display: none;\n  cursor: pointer;\n  position: absolute;\n  width: var(--goto-size);\n  height: var(--goto-size);\n  margin: -1px 0 0 calc(-1 * var(--goto-size));\n  mask: var(--image-file-goto-filled) center / contain no-repeat;\n  background-color: var(--sys-color-primary-bright);\n}\n\n.computed-style-property:hover .goto {\n  display: inline-block;\n}\n\n.hidden {\n  display: none;\n}\n/* narrowed styles */\n:host-context(.computed-narrow) .computed-style-property {\n  white-space: normal;\n\n  & .goto {\n    display: none;\n    margin-left: 0;\n  }\n}\n\n:host-context(.computed-narrow) .property-name,\n:host-context(.computed-narrow) .property-value {\n  display: inline-block;\n  width: 100%;\n  max-width: 100%;\n  margin-left: 0;\n  white-space: nowrap;\n}\n\n:host-context(.computed-narrow) .computed-style-property:not(.inherited):hover {\n  & .property-value {\n    margin-left: var(--goto-size);\n  }\n\n  & .goto {\n    display: inline-block;\n  }\n}\n/* high-contrast styles */\n@media (forced-colors: active) {\n  .computed-style-property.inherited {\n    opacity: 100%;\n  }\n\n  .computed-style-property:hover {\n    forced-color-adjust: none;\n    background-color: Highlight;\n  }\n\n  .computed-style-property:hover * {\n    color: HighlightText;\n  }\n\n  .goto {\n    background-color: HighlightText;\n  }\n}\n\n/*# sourceURL=computedStyleProperty.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);