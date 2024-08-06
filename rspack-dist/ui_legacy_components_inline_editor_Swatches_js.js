"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_Swatches_js"], {
"./ui/legacy/components/inline_editor/Swatches.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BezierSwatch: function() { return BezierSwatch; },
  CSSShadowSwatch: function() { return CSSShadowSwatch; }
});
/* harmony import */var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _bezierSwatch_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bezierSwatch.css.js */ "./ui/legacy/components/inline_editor/bezierSwatch.css.js");
/* harmony import */var _cssShadowSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cssShadowSwatch.css.js */ "./ui/legacy/components/inline_editor/cssShadowSwatch.css.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
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
        "<",
        ' name="shadow" class="shadow-swatch-icon"></',
        "><slot></slot>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "css-shadow-swatch"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}






var BezierSwatch = /*#__PURE__*/ function(HTMLSpanElement1) {
    "use strict";
    _inherits(BezierSwatch, HTMLSpanElement1);
    var _super = _create_super(BezierSwatch);
    function BezierSwatch() {
        _class_call_check(this, BezierSwatch);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "iconElementInternal", void 0);
        _define_property(_assert_this_initialized(_this), "textElement", void 0);
        var root = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createShadowRootWithCoreStyles(_assert_this_initialized(_this), {
            cssFile: [
                _bezierSwatch_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
            ],
            delegatesFocus: undefined
        });
        _this.iconElementInternal = _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.create('bezier-curve-filled', 'bezier-swatch-icon');
        _this.iconElementInternal.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.showStyleEditor('bezier')));
        root.appendChild(_this.iconElementInternal);
        _this.textElement = _this.createChild('span');
        root.createChild('slot');
        return _this;
    }
    _create_class(BezierSwatch, [
        {
            key: "bezierText",
            value: function bezierText() {
                return this.textElement.textContent || '';
            }
        },
        {
            key: "setBezierText",
            value: function setBezierText(text) {
                this.textElement.textContent = text;
            }
        },
        {
            key: "hideText",
            value: function hideText(hide) {
                this.textElement.hidden = hide;
            }
        },
        {
            key: "iconElement",
            value: function iconElement() {
                return this.iconElementInternal;
            }
        }
    ], [
        {
            key: "create",
            value: function create() {
                var constructor = BezierSwatch.constructorInternal;
                if (!constructor) {
                    constructor = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.registerCustomElement('span', 'bezier-swatch', BezierSwatch);
                    BezierSwatch.constructorInternal = constructor;
                }
                return constructor();
            }
        }
    ]);
    return BezierSwatch;
}(_wrap_native_super(HTMLSpanElement));
_define_property(BezierSwatch, "constructorInternal", null);
var _shadow = /*#__PURE__*/ new WeakMap(), _icon = /*#__PURE__*/ new WeakMap(), _model = /*#__PURE__*/ new WeakMap();
var CSSShadowSwatch = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(CSSShadowSwatch, HTMLElement1);
    var _super = _create_super(CSSShadowSwatch);
    function CSSShadowSwatch(model) {
        _class_call_check(this, CSSShadowSwatch);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _icon, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _model, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _model, model);
        _class_private_field_get(_this, _shadow).adoptedStyleSheets = [
            _cssShadowSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
        ];
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject(), _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName, _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName), _class_private_field_get(_assert_this_initialized(_this), _shadow), {
            host: _assert_this_initialized(_this)
        });
        _class_private_field_set(_assert_this_initialized(_this), _icon, _class_private_field_get(_this, _shadow).querySelector(_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName.value));
        return _this;
    }
    _create_class(CSSShadowSwatch, [
        {
            key: "model",
            value: function model() {
                return _class_private_field_get(this, _model);
            }
        },
        {
            key: "iconElement",
            value: function iconElement() {
                return _class_private_field_get(this, _icon);
            }
        }
    ]);
    return CSSShadowSwatch;
}(_wrap_native_super(HTMLElement));
_define_property(CSSShadowSwatch, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal(_templateObject1()));
customElements.define('css-shadow-swatch', CSSShadowSwatch); //# sourceMappingURL=Swatches.js.map


}),
"./ui/legacy/components/inline_editor/bezierSwatch.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  white-space: nowrap;\n}\n\ndevtools-icon.bezier-swatch-icon {\n  position: relative;\n  transform: scale(0.7);\n  margin: -5px -2px -3px -4px;\n  user-select: none;\n  color: var(--icon-css);\n  cursor: default;\n}\n\ndevtools-icon.bezier-swatch-icon:hover {\n  color: var(--icon-css-hover);\n}\n\n/*# sourceURL=bezierSwatch.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./ui/legacy/components/inline_editor/cssShadowSwatch.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  white-space: nowrap;\n}\n\ndevtools-icon.shadow-swatch-icon {\n  color: var(--icon-css);\n  transform: scale(0.7);\n  position: relative;\n  margin: -5px -2px -5px -4px;\n  user-select: none;\n  vertical-align: baseline;\n  cursor: pointer;\n\n  &:hover {\n    color: var(--icon-css-hover);\n  }\n}\n\n/*# sourceURL=cssShadowSwatch.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);