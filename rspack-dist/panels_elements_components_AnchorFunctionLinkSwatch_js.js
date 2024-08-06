"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_AnchorFunctionLinkSwatch_js"], {
"./panels/elements/components/AnchorFunctionLinkSwatch.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnchorFunctionLinkSwatch: function() { return AnchorFunctionLinkSwatch; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _anchorFunctionLinkSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./anchorFunctionLinkSwatch.css.js */ "./panels/elements/components/anchorFunctionLinkSwatch.css.js");
// Copyright (c) 2024 The Chromium Authors. All rights reserved.
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
        "",
        "",
        ""
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "",
        "",
        ""
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "devtools-anchor-function-link-swatch"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "<",
        "\n      @mouseenter=",
        "\n      @mouseleave=",
        "\n      .data=",
        "></",
        ">"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "<",
        "\n      role='button'\n      title=",
        "\n      class='icon-link'\n      name='open-externally'\n      jslog=",
        "\n      @mouseenter=",
        "\n      @mouseleave=",
        "\n      @mousedown=",
        "\n      @click=",
        "\n    ></",
        ">"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}






var UIStrings = {
    /**
     *@description Title in the styles tab for the icon button for jumping to the anchor node.
     */ jumpToAnchorNode: 'Jump to anchor node'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/AnchorFunctionLinkSwatch.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html;
var _shadow = /*#__PURE__*/ new WeakMap(), _data = /*#__PURE__*/ new WeakMap(), _handleIconClick = /*#__PURE__*/ new WeakSet(), _renderIdentifierLink = /*#__PURE__*/ new WeakSet(), _renderIconLink = /*#__PURE__*/ new WeakSet();
// clang-format on
var AnchorFunctionLinkSwatch = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(AnchorFunctionLinkSwatch, HTMLElement1);
    var _super = _create_super(AnchorFunctionLinkSwatch);
    function AnchorFunctionLinkSwatch(data) {
        _class_call_check(this, AnchorFunctionLinkSwatch);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _handleIconClick);
        _class_private_method_init(_assert_this_initialized(_this), _renderIdentifierLink);
        _class_private_method_init(_assert_this_initialized(_this), _renderIconLink);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _data, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _data, data);
        return _this;
    }
    _create_class(AnchorFunctionLinkSwatch, [
        {
            key: "dataForTest",
            value: function dataForTest() {
                return _class_private_field_get(this, _data);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _anchorFunctionLinkSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ];
                this.render();
            }
        },
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _data, data);
                this.render();
            }
        },
        {
            key: "render",
            value: function render1() {
                if (!_class_private_field_get(this, _data).identifier && !_class_private_field_get(this, _data).anchorNode) {
                    return;
                }
                if (_class_private_field_get(this, _data).identifier) {
                    // clang-format off
                    render(html(_templateObject(), _class_private_method_get(this, _renderIdentifierLink, renderIdentifierLink).call(this), _class_private_field_get(this, _data).needsSpace ? ' ' : ''), _class_private_field_get(this, _shadow), {
                        host: this
                    });
                // clang-format on
                } else {
                    // clang-format off
                    render(html(_templateObject1(), _class_private_method_get(this, _renderIconLink, renderIconLink).call(this), _class_private_field_get(this, _data).needsSpace ? ' ' : ''), _class_private_field_get(this, _shadow), {
                        host: this
                    });
                // clang-format on
                }
            }
        }
    ]);
    return AnchorFunctionLinkSwatch;
}(_wrap_native_super(HTMLElement));
_define_property(AnchorFunctionLinkSwatch, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal(_templateObject2()));
function handleIconClick(ev) {
    ev.stopPropagation();
    _class_private_field_get(this, _data).onLinkActivate();
}
function renderIdentifierLink() {
    // clang-format off
    return html(_templateObject3(), _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.LinkSwatch.LinkSwatch.litTagName, _class_private_field_get(this, _data).onMouseEnter, _class_private_field_get(this, _data).onMouseLeave, {
        text: _class_private_field_get(this, _data).identifier,
        isDefined: Boolean(_class_private_field_get(this, _data).anchorNode),
        jslogContext: 'anchor-link',
        onLinkActivate: _class_private_field_get(this, _data).onLinkActivate
    }, _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.LinkSwatch.LinkSwatch.litTagName);
// clang-format on
}
function renderIconLink() {
    // clang-format off
    return html(_templateObject4(), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName, i18nString(UIStrings.jumpToAnchorNode), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action('jump-to-anchor-node').track({
        click: true
    }), _class_private_field_get(this, _data).onMouseEnter, _class_private_field_get(this, _data).onMouseLeave, function(ev) {
        return ev.stopPropagation();
    }, _class_private_method_get(this, _handleIconClick, handleIconClick), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName);
// clang-format on
}
customElements.define('devtools-anchor-function-link-swatch', AnchorFunctionLinkSwatch); //# sourceMappingURL=AnchorFunctionLinkSwatch.js.map


}),
"./panels/elements/components/anchorFunctionLinkSwatch.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2024 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.icon-link {\n  color: var(--text-link);\n  width: 13px;\n  height: 13px;\n\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n/*# sourceURL=anchorFunctionLinkSwatch.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./ui/legacy/components/inline_editor/inline_editor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnimationTimingModel: function() { return /* reexport module object */ _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_0__; },
  AnimationTimingUI: function() { return /* reexport module object */ _AnimationTimingUI_js__WEBPACK_IMPORTED_MODULE_1__; },
  BezierEditor: function() { return /* reexport module object */ _BezierEditor_js__WEBPACK_IMPORTED_MODULE_2__; },
  BezierUI: function() { return /* reexport module object */ _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__; },
  CSSAngle: function() { return /* reexport module object */ _CSSAngle_js__WEBPACK_IMPORTED_MODULE_6__; },
  CSSAngleUtils: function() { return /* reexport module object */ _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_7__; },
  CSSLength: function() { return /* reexport module object */ _CSSLength_js__WEBPACK_IMPORTED_MODULE_8__; },
  CSSLengthUtils: function() { return /* reexport module object */ _CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_9__; },
  CSSLinearEasingModel: function() { return /* reexport module object */ _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_10__; },
  CSSShadowEditor: function() { return /* reexport module object */ _CSSShadowEditor_js__WEBPACK_IMPORTED_MODULE_11__; },
  ColorMixSwatch: function() { return /* reexport module object */ _ColorMixSwatch_js__WEBPACK_IMPORTED_MODULE_4__; },
  ColorSwatch: function() { return /* reexport module object */ _ColorSwatch_js__WEBPACK_IMPORTED_MODULE_5__; },
  FontEditor: function() { return /* reexport module object */ _FontEditor_js__WEBPACK_IMPORTED_MODULE_12__; },
  FontEditorUnitConverter: function() { return /* reexport module object */ _FontEditorUnitConverter_js__WEBPACK_IMPORTED_MODULE_13__; },
  FontEditorUtils: function() { return /* reexport module object */ _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_14__; },
  InlineEditorUtils: function() { return /* reexport module object */ _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_15__; },
  LinkSwatch: function() { return /* reexport module object */ _LinkSwatch_js__WEBPACK_IMPORTED_MODULE_16__; },
  SwatchPopoverHelper: function() { return /* reexport module object */ _SwatchPopoverHelper_js__WEBPACK_IMPORTED_MODULE_18__; },
  Swatches: function() { return /* reexport module object */ _Swatches_js__WEBPACK_IMPORTED_MODULE_17__; }
});
/* harmony import */var _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationTimingModel.js */ "./ui/legacy/components/inline_editor/AnimationTimingModel.js");
/* harmony import */var _AnimationTimingUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationTimingUI.js */ "./ui/legacy/components/inline_editor/AnimationTimingUI.js");
/* harmony import */var _BezierEditor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BezierEditor.js */ "./ui/legacy/components/inline_editor/BezierEditor.js");
/* harmony import */var _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BezierUI.js */ "./ui/legacy/components/inline_editor/BezierUI.js");
/* harmony import */var _ColorMixSwatch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorMixSwatch.js */ "./ui/legacy/components/inline_editor/ColorMixSwatch.js");
/* harmony import */var _ColorSwatch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ColorSwatch.js */ "./ui/legacy/components/inline_editor/ColorSwatch.js");
/* harmony import */var _CSSAngle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSAngle.js */ "./ui/legacy/components/inline_editor/CSSAngle.js");
/* harmony import */var _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSSAngleUtils.js */ "./ui/legacy/components/inline_editor/CSSAngleUtils.js");
/* harmony import */var _CSSLength_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSLength.js */ "./ui/legacy/components/inline_editor/CSSLength.js");
/* harmony import */var _CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CSSLengthUtils.js */ "./ui/legacy/components/inline_editor/CSSLengthUtils.js");
/* harmony import */var _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CSSLinearEasingModel.js */ "./ui/legacy/components/inline_editor/CSSLinearEasingModel.js");
/* harmony import */var _CSSShadowEditor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CSSShadowEditor.js */ "./ui/legacy/components/inline_editor/CSSShadowEditor.js");
/* harmony import */var _FontEditor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FontEditor.js */ "./ui/legacy/components/inline_editor/FontEditor.js");
/* harmony import */var _FontEditorUnitConverter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FontEditorUnitConverter.js */ "./ui/legacy/components/inline_editor/FontEditorUnitConverter.js");
/* harmony import */var _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FontEditorUtils.js */ "./ui/legacy/components/inline_editor/FontEditorUtils.js");
/* harmony import */var _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./InlineEditorUtils.js */ "./ui/legacy/components/inline_editor/InlineEditorUtils.js");
/* harmony import */var _LinkSwatch_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LinkSwatch.js */ "./ui/legacy/components/inline_editor/LinkSwatch.js");
/* harmony import */var _Swatches_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Swatches.js */ "./ui/legacy/components/inline_editor/Swatches.js");
/* harmony import */var _SwatchPopoverHelper_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SwatchPopoverHelper.js */ "./ui/legacy/components/inline_editor/SwatchPopoverHelper.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



















 //# sourceMappingURL=inline_editor.js.map


}),

}]);