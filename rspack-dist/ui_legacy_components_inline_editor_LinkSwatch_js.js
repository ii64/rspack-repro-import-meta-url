"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_LinkSwatch_js"], {
"./ui/legacy/components/inline_editor/LinkSwatch.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSVarSwatch: function() { return CSSVarSwatch; },
  LinkSwatch: function() { return LinkSwatch; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _textButton_css_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../textButton.css.legacy.js */ "./ui/legacy/textButton.css.legacy.js");
/* harmony import */var _theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */var _linkSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linkSwatch.css.js */ "./ui/legacy/components/inline_editor/linkSwatch.css.js");
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
        "<button .disabled=",
        " class=",
        " title=",
        " data-title=",
        " @click=",
        ' role="link" tabindex="-1">',
        "</button>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "devtools-base-link-swatch"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "<span data-title=",
        "\n          jslog=",
        "\n        >var(",
        '<slot name="fallback">',
        "</slot>)</span>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "devtools-css-var-swatch"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "<span title=",
        " jslog=",
        "><",
        " .data=",
        "></",
        "></span>"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "devtools-link-swatch"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}






var UIStrings = {
    /**
     *@description Text displayed in a tooltip shown when hovering over a var() CSS function in the Styles pane when the custom property in this function does not exist. The parameter is the name of the property.
     *@example {--my-custom-property-name} PH1
     */ sIsNotDefined: '{PH1} is not defined'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('ui/legacy/components/inline_editor/LinkSwatch.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var render = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render, html = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html, Directives = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives;
var _linkElement = /*#__PURE__*/ new WeakMap();
var BaseLinkSwatch = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(BaseLinkSwatch, HTMLElement1);
    var _super = _create_super(BaseLinkSwatch);
    function BaseLinkSwatch() {
        _class_call_check(this, BaseLinkSwatch);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "shadow", _this.attachShadow({
            mode: 'open'
        }));
        _define_property(_assert_this_initialized(_this), "onLinkActivate", function() {
            return undefined;
        });
        _class_private_field_init(_assert_this_initialized(_this), _linkElement, {
            writable: true,
            value: void 0
        });
        return _this;
    }
    _create_class(BaseLinkSwatch, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                this.shadow.adoptedStyleSheets = [
                    _linkSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ];
                _theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().appendStyle(this.shadow, _textButton_css_legacy_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
            }
        },
        {
            key: "data",
            set: function set(data) {
                this.onLinkActivate = function(linkText, event) {
                    if (_instanceof(event, MouseEvent) && event.button !== 0) {
                        return;
                    }
                    data.onLinkActivate(linkText);
                    event.consume(true);
                };
                data.showTitle = data.showTitle === undefined ? true : data.showTitle;
                this.render(data);
            }
        },
        {
            key: "linkElement",
            get: function get() {
                return _class_private_field_get(this, _linkElement);
            }
        },
        {
            key: "render",
            value: function render1(data) {
                var isDefined = data.isDefined, text = data.text, title = data.title;
                var classes = Directives.classMap({
                    'link-style': true,
                    'text-button': true,
                    'link-swatch-link': true,
                    'undefined': !isDefined
                });
                // The linkText's space must be removed, otherwise it cannot be triggered when clicked.
                var onActivate = isDefined ? this.onLinkActivate.bind(this, text.trim()) : null;
                // We added var popover, so don't need the title attribute when no need for showing title and
                // only provide the data-title for the popover to get the data.
                var startNode = render(html(_templateObject(), !isDefined, classes, _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.ifDefined(data.showTitle ? title : null), _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.ifDefined(!data.showTitle ? title : null), onActivate, text), this.shadow, {
                    host: this
                }).startNode;
                if (_instanceof(startNode === null || startNode === void 0 ? void 0 : startNode.nextSibling, HTMLButtonElement)) {
                    _class_private_field_set(this, _linkElement, startNode === null || startNode === void 0 ? void 0 : startNode.nextSibling);
                }
            }
        }
    ]);
    return BaseLinkSwatch;
}(_wrap_native_super(HTMLElement));
_define_property(BaseLinkSwatch, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal(_templateObject1()));
var _link = /*#__PURE__*/ new WeakMap();
var CSSVarSwatch = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(CSSVarSwatch, HTMLElement1);
    var _super = _create_super(CSSVarSwatch);
    function CSSVarSwatch() {
        _class_call_check(this, CSSVarSwatch);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "shadow", _this.attachShadow({
            mode: 'open'
        }));
        _class_private_field_init(_assert_this_initialized(_this), _link, {
            writable: true,
            value: void 0
        });
        _this.tabIndex = -1;
        _this.addEventListener('focus', function() {
            var link = _this.shadow.querySelector('[role="link"]');
            if (link) {
                link.focus();
            }
        });
        return _this;
    }
    _create_class(CSSVarSwatch, [
        {
            key: "data",
            set: function set(data) {
                this.render(data);
            }
        },
        {
            key: "link",
            get: function get() {
                return _class_private_field_get(this, _link);
            }
        },
        {
            key: "render",
            value: function render1(data) {
                var variableName = data.variableName, fromFallback = data.fromFallback, computedValue = data.computedValue, onLinkActivate = data.onLinkActivate;
                var isDefined = Boolean(computedValue) && !fromFallback;
                var title = isDefined ? computedValue !== null && computedValue !== void 0 ? computedValue : '' : i18nString(UIStrings.sIsNotDefined, {
                    PH1: variableName
                });
                _class_private_field_set(this, _link, new BaseLinkSwatch());
                _class_private_field_get(this, _link).data = {
                    title: title,
                    showTitle: false,
                    text: variableName,
                    isDefined: isDefined,
                    onLinkActivate: onLinkActivate
                };
                _class_private_field_get(this, _link).classList.add('css-var-link');
                // clang-format off
                render(html(_templateObject2(), data.computedValue || '', _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.link('css-variable').track({
                    click: true,
                    hover: true
                }), _class_private_field_get(this, _link), data.fallbackText ? ", ".concat(data.fallbackText) : ''), this.shadow, {
                    host: this
                });
            // clang-format on
            }
        }
    ]);
    return CSSVarSwatch;
}(_wrap_native_super(HTMLElement));
_define_property(CSSVarSwatch, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal(_templateObject3()));
var LinkSwatch = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(LinkSwatch, HTMLElement1);
    var _super = _create_super(LinkSwatch);
    function LinkSwatch() {
        _class_call_check(this, LinkSwatch);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "shadow", _this.attachShadow({
            mode: 'open'
        }));
        return _this;
    }
    _create_class(LinkSwatch, [
        {
            key: "data",
            set: function set(data) {
                this.render(data);
            }
        },
        {
            key: "render",
            value: function render1(data) {
                var text = data.text, isDefined = data.isDefined, onLinkActivate = data.onLinkActivate, jslogContext = data.jslogContext;
                var title = isDefined ? text : i18nString(UIStrings.sIsNotDefined, {
                    PH1: text
                });
                render(html(_templateObject4(), data.text, _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.link().track({
                    click: true
                }).context(jslogContext), BaseLinkSwatch.litTagName, {
                    text: text,
                    isDefined: isDefined,
                    title: title,
                    onLinkActivate: onLinkActivate
                }, BaseLinkSwatch.litTagName), this.shadow, {
                    host: this
                });
            }
        }
    ]);
    return LinkSwatch;
}(_wrap_native_super(HTMLElement));
_define_property(LinkSwatch, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal(_templateObject5()));
customElements.define('devtools-base-link-swatch', BaseLinkSwatch);
customElements.define('devtools-link-swatch', LinkSwatch);
customElements.define('devtools-css-var-swatch', CSSVarSwatch); //# sourceMappingURL=LinkSwatch.js.map


}),
"./ui/legacy/components/inline_editor/linkSwatch.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.link-swatch-link {\n  display: inline;\n}\n\n.link-swatch-link:not(.undefined) {\n  cursor: pointer;\n  text-underline-offset: 2px;\n  color: var(--text-link);\n}\n\n.link-swatch-link:hover:not(.undefined) {\n  text-decoration: underline;\n}\n\n.link-swatch-link:focus:not(:focus-visible) {\n  outline: none;\n}\n\n.link-swatch-link.undefined {\n  opacity: 100%;\n  color: var(--text-disabled);\n}\n\n/*# sourceURL=linkSwatch.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);