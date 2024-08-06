"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_ColorMixSwatch_js"], {
"./ui/legacy/components/inline_editor/ColorMixSwatch.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ColorMixSwatch: function() { return ColorMixSwatch; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _colorMixSwatch_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colorMixSwatch.css.js */ "./ui/legacy/components/inline_editor/colorMixSwatch.css.js");
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
        "devtools-color-mix-swatch"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '<div class="swatch-icon" jslog=',
        ' style="--color: ',
        '">\n        <span class="swatch swatch-left" id="swatch-1" style="--color: ',
        '"></span>\n        <span class="swatch swatch-right" id="swatch-2" style="--color: ',
        '"></span>\n        <span class="swatch swatch-mix" id="mix-result" style="--color: ',
        '"></span>\n      </div><slot>',
        "</slot>"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}





var _Common_ObjectWrapper_eventMixin, _registerPopoverCallback = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet();
var ColorMixSwatch = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(ColorMixSwatch, _superClass);
    var _super = _create_super(ColorMixSwatch);
    function ColorMixSwatch() {
        _class_call_check(this, ColorMixSwatch);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _define_property(_assert_this_initialized(_this), "shadow", _this.attachShadow({
            mode: 'open'
        }));
        _define_property(_assert_this_initialized(_this), "colorMixText", '') // color-mix(in srgb, hotpink, white)
        ;
        _define_property(_assert_this_initialized(_this), "firstColorText", '') // hotpink
        ;
        _define_property(_assert_this_initialized(_this), "secondColorText", '') // white
        ;
        _class_private_field_init(_assert_this_initialized(_this), _registerPopoverCallback, {
            writable: true,
            value: void 0
        });
        _this.shadow.adoptedStyleSheets = [
            _colorMixSwatch_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
        ];
        return _this;
    }
    _create_class(ColorMixSwatch, [
        {
            key: "icon",
            get: function get() {
                return this.shadow.firstElementChild;
            }
        },
        {
            key: "mixedColor",
            value: function mixedColor() {
                var _this_icon_computedStyleMap_get, _this_icon;
                var _this_icon_computedStyleMap_get_toString;
                var colorText = (_this_icon_computedStyleMap_get_toString = (_this_icon = this.icon) === null || _this_icon === void 0 ? void 0 : (_this_icon_computedStyleMap_get = _this_icon.computedStyleMap().get('color')) === null || _this_icon_computedStyleMap_get === void 0 ? void 0 : _this_icon_computedStyleMap_get.toString()) !== null && _this_icon_computedStyleMap_get_toString !== void 0 ? _this_icon_computedStyleMap_get_toString : null;
                return colorText ? _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colorText) : null;
            }
        },
        {
            key: "setFirstColor",
            value: function setFirstColor(text) {
                // We need to replace `colorMixText` because it is the CSS for the
                // the middle section where we actually show the mixed colors.
                // So, when a color changed, we need to update colorMixText to
                // reflect the new color (not the old one).
                if (this.firstColorText) {
                    this.colorMixText = this.colorMixText.replace(this.firstColorText, text);
                }
                this.firstColorText = text;
                this.dispatchEventToListeners("colorChanged" /* Events.ColorChanged */ , {
                    text: this.colorMixText
                });
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "setSecondColor",
            value: function setSecondColor(text) {
                // We need to replace from the last to handle the same colors case
                // i.e. replacing the second color of `color-mix(in srgb, red 50%, red 10%)`
                // to `blue` should result in `color-mix(in srgb, red 50%, blue 10%)`.
                if (this.secondColorText) {
                    this.colorMixText = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.replaceLast(this.colorMixText, this.secondColorText, text);
                }
                this.secondColorText = text;
                this.dispatchEventToListeners("colorChanged" /* Events.ColorChanged */ , {
                    text: this.colorMixText
                });
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "setColorMixText",
            value: function setColorMixText(text) {
                this.colorMixText = text;
                this.dispatchEventToListeners("colorChanged" /* Events.ColorChanged */ , {
                    text: this.colorMixText
                });
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "setRegisterPopoverCallback",
            value: function setRegisterPopoverCallback(callback) {
                _class_private_field_set(this, _registerPopoverCallback, callback);
                callback(this);
            }
        },
        {
            key: "getText",
            value: function getText() {
                return this.colorMixText;
            }
        }
    ]);
    return ColorMixSwatch;
}(_Common_ObjectWrapper_eventMixin = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(HTMLElement));
_define_property(ColorMixSwatch, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal(_templateObject()));
function render() {
    if (!this.colorMixText || !this.firstColorText || !this.secondColorText) {
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(this.colorMixText, this.shadow, {
            host: this
        });
        return;
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    // Note that we use a <slot> with a default value here to display the color text. Consumers of this component are
    // free to append any content to replace what is being shown here.
    // Note also that whitespace between nodes is removed on purpose to avoid pushing these elements apart. Do not
    // re-format the HTML code.
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html(_templateObject1(), _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.cssColorMix(), this.colorMixText, this.firstColorText, this.secondColorText, this.colorMixText, this.colorMixText), this.shadow, {
        host: this
    });
    // clang-format on
    _class_private_field_get(this, _registerPopoverCallback) && _class_private_field_get(this, _registerPopoverCallback).call(this, this);
}
customElements.define('devtools-color-mix-swatch', ColorMixSwatch); //# sourceMappingURL=ColorMixSwatch.js.map


}),
"./ui/legacy/components/inline_editor/colorMixSwatch.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2022 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n/* stylelint-disable */\n.swatch-icon {\n  display: inline-grid;\n  inline-size: 15px;\n  grid: [stack] 1fr / [stack] 1fr;\n  margin-left: 1px;\n  margin-right: 2px;\n  color: var(--color);\n}\n\n.swatch {\n  aspect-ratio: 1 / 1;\n  display: inline-block;\n  width: 10px;\n  border-radius: 1e5px;\n  background:\n    linear-gradient(var(--color), var(--color)),\n    var(--image-file-checker);\n  box-shadow: inset 0 0 0 .5px rgb(128 128 128 / 60%);\n  grid-area: stack;\n}\n/* stylelint-enable */\n\n.swatch-right {\n  justify-self: end;\n}\n\n.swatch-mix {\n  box-shadow: none;\n  justify-self: end;\n  mask: radial-gradient(circle at 0% center, rgb(0 0 0) 50%, rgb(0 0 0 / 0%) calc(50% + 0.5px));\n}\n\n/*# sourceURL=colorMixSwatch.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);