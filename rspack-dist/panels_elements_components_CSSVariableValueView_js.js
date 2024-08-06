"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_CSSVariableValueView_js"], {
"./panels/elements/components/CSSVariableValueView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSVariableParserError: function() { return CSSVariableParserError; },
  CSSVariableValueView: function() { return CSSVariableValueView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _cssVariableValueView_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssVariableValueView.css.js */ "./panels/elements/components/cssVariableValueView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
        '<div class="registered-property-links">\n            <span role="button" @click=',
        ' class="clickable underlined unbreakable-text"}>\n              ',
        "\n            </span>\n          </div>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "devtools-css-variable-parser-error"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '<span class="monospace css-property">',
        "</span>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n      <div class="variable-value-popup-wrapper">\n        ',
        "\n        ",
        "\n      </div>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "devtools-css-variable-value-view"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        '<div><span class="css-property">initial-value:</span> ',
        "</div>"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        '\n        <hr class=divider />\n        <div class=registered-property-popup-wrapper>\n          <div class="monospace">\n            <div><span class="css-property">syntax:</span> ',
        '</div>\n            <div><span class="css-property">inherits:</span> ',
        "</div>\n            ",
        "\n          </div>\n          ",
        "\n        </div>"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        '<div class="variable-value-popup-wrapper">\n               ',
        "\n             </div>\n             ",
        "\n             "
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}



var UIStrings = {
    /**
     *@description Text for a link from custom property to its defining registration
     */ registeredPropertyLinkTitle: 'View registered property',
    /**
     *@description Error message for a property value that failed to parse because it had an incorrect type. The message
     * is shown in a popover when hovering the property value. The `type` placeholder will be rendered as an HTML element
     * to apply some styling (color and monospace font)
     *@example {<color>} type
     */ invalidPropertyValue: 'Invalid property value, expected type {type}',
    /**
     *@description Text displayed in a tooltip shown when hovering over a var() CSS function in the Styles pane when the custom property in this function does not exist. The parameter is the name of the property.
     *@example {--my-custom-property-name} PH1
     */ sIsNotDefined: '{PH1} is not defined'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/CSSVariableValueView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var i18nTemplate = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.i18nTemplate.bind(undefined, str_);
var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html;
function getLinkSection(details) {
    return html(_templateObject(), details === null || details === void 0 ? void 0 : details.goToDefinition, i18nString(UIStrings.registeredPropertyLinkTitle));
}
var _shadow = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet();
var CSSVariableParserError = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(CSSVariableParserError, HTMLElement1);
    var _super = _create_super(CSSVariableParserError);
    function CSSVariableParserError(details) {
        _class_call_check(this, CSSVariableParserError);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_get(_this, _shadow).adoptedStyleSheets = [
            _cssVariableValueView_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]
        ];
        _class_private_method_get(_this, _render, render1).call(_assert_this_initialized(_this), details);
        return _this;
    }
    return CSSVariableParserError;
}(_wrap_native_super(HTMLElement));
_define_property(CSSVariableParserError, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal(_templateObject1()));
function render1(details) {
    var type = html(_templateObject2(), details.registration.syntax());
    render(html(_templateObject3(), i18nTemplate(UIStrings.invalidPropertyValue, {
        type: type
    }), getLinkSection(details)), _class_private_field_get(this, _shadow), {
        host: this
    });
}
var _shadow1 = /*#__PURE__*/ new WeakMap(), _render1 = /*#__PURE__*/ new WeakSet();
var CSSVariableValueView = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(CSSVariableValueView, HTMLElement1);
    var _super = _create_super(CSSVariableValueView);
    function CSSVariableValueView(param) {
        var variableName = param.variableName, value = param.value, details = param.details;
        _class_call_check(this, CSSVariableValueView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _render1);
        _class_private_field_init(_assert_this_initialized(_this), _shadow1, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _define_property(_assert_this_initialized(_this), "variableName", void 0);
        _define_property(_assert_this_initialized(_this), "value", void 0);
        _define_property(_assert_this_initialized(_this), "details", void 0);
        _class_private_field_get(_this, _shadow1).adoptedStyleSheets = [
            _cssVariableValueView_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]
        ];
        _this.variableName = variableName;
        _this.value = value;
        _this.details = details;
        _class_private_method_get(_this, _render1, render2).call(_assert_this_initialized(_this));
        return _this;
    }
    return CSSVariableValueView;
}(_wrap_native_super(HTMLElement));
_define_property(CSSVariableValueView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal(_templateObject4()));
function render2() {
    var _this_details;
    var initialValue = (_this_details = this.details) === null || _this_details === void 0 ? void 0 : _this_details.registration.initialValue();
    var registrationView = this.details ? html(_templateObject6(), this.details.registration.syntax(), this.details.registration.inherits(), initialValue ? html(_templateObject5(), initialValue) : '', getLinkSection(this.details)) : '';
    var _this_value;
    var valueText = (_this_value = this.value) !== null && _this_value !== void 0 ? _this_value : i18nString(UIStrings.sIsNotDefined, {
        PH1: this.variableName
    });
    render(html(_templateObject7(), valueText, registrationView), _class_private_field_get(this, _shadow1), {
        host: this
    });
}
customElements.define('devtools-css-variable-value-view', CSSVariableValueView);
customElements.define('devtools-css-variable-parser-error', CSSVariableParserError); //# sourceMappingURL=CSSVariableValueView.js.map


}),
"./panels/elements/components/cssVariableValueView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.registered-property-popup-wrapper {\n  max-width: 232px;\n  font-size: 12px;\n  line-height: 1.4;\n}\n\n.monospace {\n  font-family: var(--monospace-font-family);\n  font-size: var(--monospace-font-size);\n}\n\n:host {\n  padding: 11px 7px;\n}\n\n.divider {\n  margin: 8px -7px;\n  border: 1px solid var(--sys-color-divider);\n}\n\n.registered-property-links {\n  margin-top: 8px;\n}\n\n.clickable {\n  color: var(--sys-color-primary);\n  cursor: pointer;\n}\n\n.underlined {\n  text-decoration: underline;\n}\n\n.unbreakable-text {\n  white-space: nowrap;\n}\n\n.css-property {\n  color: var(--webkit-css-property-color, var(--sys-color-token-property-special)); /* stylelint-disable-line plugin/use_theme_colors */ /* See: crbug.com/1152736 for color variable migration. */\n}\n\n.title {\n  color: var(--sys-color-state-disabled);\n}\n\n/*# sourceURL=cssVariableValueView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);