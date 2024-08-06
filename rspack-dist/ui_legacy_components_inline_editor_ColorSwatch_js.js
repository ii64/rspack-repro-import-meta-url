"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_ColorSwatch_js"], {
"./ui/legacy/components/inline_editor/ColorSwatch.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ClickEvent: function() { return ClickEvent; },
  ColorChangedEvent: function() { return ColorChangedEvent; },
  ColorSwatch: function() { return ColorSwatch; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../legacy/components/color_picker/color_picker.js */ "./ui/legacy/components/color_picker/color_picker.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _colorSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorSwatch.css.js */ "./ui/legacy/components/inline_editor/colorSwatch.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
        "<span class=",
        " title=",
        '><span class="color-swatch-inner"\n        style="background-color: ',
        ';"\n        jslog=',
        "\n        @click=",
        "\n        @mousedown=",
        "\n        @dblclick=",
        "></span></span><slot><span>",
        "</span></slot>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "devtools-color-swatch"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}






var UIStrings = {
    /**
     *@description Icon element title in Color Swatch of the inline editor in the Styles tab
     */ shiftclickToChangeColorFormat: 'Shift-click to change color format'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('ui/legacy/components/inline_editor/ColorSwatch.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var ColorChangedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(ColorChangedEvent, Event1);
    var _super = _create_super(ColorChangedEvent);
    function ColorChangedEvent(color) {
        _class_call_check(this, ColorChangedEvent);
        var _this;
        _this = _super.call(this, ColorChangedEvent.eventName, {});
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = {
            color: color
        };
        return _this;
    }
    return ColorChangedEvent;
}(_wrap_native_super(Event));
_define_property(ColorChangedEvent, "eventName", 'colorchanged');
var ClickEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(ClickEvent, Event1);
    var _super = _create_super(ClickEvent);
    function ClickEvent() {
        _class_call_check(this, ClickEvent);
        return _super.call(this, ClickEvent.eventName, {});
    }
    return ClickEvent;
}(_wrap_native_super(Event));
_define_property(ClickEvent, "eventName", 'swatchclick');
var ColorSwatch = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ColorSwatch, HTMLElement1);
    var _super = _create_super(ColorSwatch);
    function ColorSwatch(tooltip) {
        _class_call_check(this, ColorSwatch);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "shadow", _this.attachShadow({
            mode: 'open'
        }));
        _define_property(_assert_this_initialized(_this), "tooltip", i18nString(UIStrings.shiftclickToChangeColorFormat));
        _define_property(_assert_this_initialized(_this), "color", null);
        _define_property(_assert_this_initialized(_this), "readonly", false);
        _this.shadow.adoptedStyleSheets = [
            _colorSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
        ];
        if (tooltip) {
            _this.tooltip = tooltip;
        }
        return _this;
    }
    _create_class(ColorSwatch, [
        {
            key: "getReadonly",
            value: function getReadonly() {
                return this.readonly;
            }
        },
        {
            key: "setReadonly",
            value: function setReadonly(readonly) {
                if (this.readonly === readonly) {
                    return;
                }
                this.readonly = readonly;
                if (this.color) {
                    this.renderColor(this.color);
                }
            }
        },
        {
            key: "getColor",
            value: function getColor() {
                return this.color;
            }
        },
        {
            key: "anchorBox",
            get: function get() {
                var swatch = this.shadow.querySelector('.color-swatch');
                return swatch ? swatch.boxInWindow() : null;
            }
        },
        {
            key: "getText",
            value: function getText() {
                var _this_color, _this_color1;
                var _this_color_getAuthoredText;
                return (_this_color_getAuthoredText = (_this_color = this.color) === null || _this_color === void 0 ? void 0 : _this_color.getAuthoredText()) !== null && _this_color_getAuthoredText !== void 0 ? _this_color_getAuthoredText : (_this_color1 = this.color) === null || _this_color1 === void 0 ? void 0 : _this_color1.asString();
            }
        },
        {
            /**
     * Render this swatch given a color object or text to be parsed as a color.
     * @param color The color object or string to use for this swatch.
     */ key: "renderColor",
            value: function renderColor(color) {
                this.color = color;
                var colorSwatchClasses = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.Directives.classMap({
                    'color-swatch': true,
                    'readonly': this.readonly
                });
                // Disabled until https://crbug.com/1079231 is fixed.
                // clang-format off
                // Note that we use a <slot> with a default value here to display the color text. Consumers of this component are
                // free to append any content to replace what is being shown here.
                // Note also that whitespace between nodes is removed on purpose to avoid pushing these elements apart. Do not
                // re-format the HTML code.
                _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject(), colorSwatchClasses, this.tooltip, this.getText(), _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.showStyleEditor('color').track({
                    click: true
                }), this.onClick, this.consume, this.consume, this.getText()), this.shadow, {
                    host: this
                });
            // clang-format on
            }
        },
        {
            key: "onClick",
            value: function onClick(e) {
                if (this.readonly) {
                    return;
                }
                if (e.shiftKey) {
                    e.stopPropagation();
                    this.showFormatPicker(e);
                    return;
                }
                this.dispatchEvent(new ClickEvent());
            }
        },
        {
            key: "consume",
            value: function consume(e) {
                e.stopPropagation();
            }
        },
        {
            key: "setColor",
            value: function setColor(color) {
                this.renderColor(color);
                this.dispatchEvent(new ColorChangedEvent(color));
            }
        },
        {
            key: "setColorText",
            value: function setColorText(color) {
                var _this_firstElementChild;
                (_this_firstElementChild = this.firstElementChild) === null || _this_firstElementChild === void 0 ? void 0 : _this_firstElementChild.remove();
                this.renderColor(color);
                var span = this.appendChild(document.createElement('span'));
                var _color_getAuthoredText;
                span.appendChild(document.createTextNode((_color_getAuthoredText = color.getAuthoredText()) !== null && _color_getAuthoredText !== void 0 ? _color_getAuthoredText : color.asString()));
                this.dispatchEvent(new ColorChangedEvent(color));
            }
        },
        {
            key: "showFormatPicker",
            value: function showFormatPicker(e) {
                var _this = this;
                if (!this.color) {
                    return;
                }
                var contextMenu = new _legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_2__.FormatPickerContextMenu.FormatPickerContextMenu(this.color);
                void contextMenu.show(e, function(color) {
                    _this.setColorText(color);
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.colorConvertedFrom(0 /* Host.UserMetrics.ColorConvertedFrom.ColorSwatch */ );
                });
            }
        }
    ], [
        {
            key: "isColorSwatch",
            value: function isColorSwatch(element) {
                return element.localName === 'devtools-color-swatch';
            }
        }
    ]);
    return ColorSwatch;
}(_wrap_native_super(HTMLElement));
_define_property(ColorSwatch, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal(_templateObject1()));
customElements.define('devtools-color-swatch', ColorSwatch); //# sourceMappingURL=ColorSwatch.js.map


}),
"./ui/legacy/components/inline_editor/colorSwatch.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  white-space: nowrap;\n}\n\n.color-swatch {\n  position: relative;\n  margin-left: 1px;\n  margin-right: 2px;\n  width: 12px;\n  height: 12px;\n  transform: scale(0.8);\n  vertical-align: -2px;\n  display: inline-block;\n  user-select: none;\n  background-image: var(--image-file-checker);\n  line-height: 10px;\n}\n\n.color-swatch-inner {\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  border: 1px solid var(--sys-color-neutral-outline);\n  box-sizing: border-box;\n  cursor: pointer;\n}\n\n.color-swatch.readonly .color-swatch-inner {\n  cursor: unset;\n}\n\n.color-swatch:not(.readonly) .color-swatch-inner:hover {\n  border: 1px solid var(--sys-color-outline);\n}\n\n@media (forced-colors: active) {\n  .color-swatch {\n    forced-color-adjust: none;\n  }\n}\n\n/*# sourceURL=colorSwatch.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);