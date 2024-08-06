"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_color_picker_Spectrum_js"], {
"./ui/components/srgb_overlay/srgb_overlay.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SrgbOverlay: function() { return /* reexport module object */ _SrgbOverlay_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _SrgbOverlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SrgbOverlay.js */ "./ui/components/srgb_overlay/SrgbOverlay.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=srgb_overlay.js.map


}),
"./ui/legacy/components/color_picker/Spectrum.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ChangeSource: function() { return ChangeSource; },
  MaterialPalette: function() { return MaterialPalette; },
  PaletteGenerator: function() { return PaletteGenerator; },
  Spectrum: function() { return Spectrum; },
  Swatch: function() { return Swatch; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _components_srgb_overlay_srgb_overlay_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/srgb_overlay/srgb_overlay.js */ "./ui/components/srgb_overlay/srgb_overlay.js");
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ColorFormatSpec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ColorFormatSpec.js */ "./ui/legacy/components/color_picker/ColorFormatSpec.js");
/* harmony import */var _ContrastDetails_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ContrastDetails.js */ "./ui/legacy/components/color_picker/ContrastDetails.js");
/* harmony import */var _ContrastOverlay_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ContrastOverlay.js */ "./ui/legacy/components/color_picker/ContrastOverlay.js");
/* harmony import */var _FormatPickerContextMenu_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormatPickerContextMenu.js */ "./ui/legacy/components/color_picker/FormatPickerContextMenu.js");
/* harmony import */var _spectrum_css_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./spectrum.css.js */ "./ui/legacy/components/color_picker/spectrum.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2011 Brian Grinstead All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self1, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self1);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}














var UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over largeicon eyedropper button in Spectrum of the Color Picker
     * @example {c} PH1
     */ toggleColorPicker: 'Eye dropper [{PH1}]',
    /**
     *@description Aria label for hue slider in Color Picker
     */ changeHue: 'Change hue',
    /**
     * @description Aria label for alpha slider in Color Picker. Alpha refers to the alpha channel of a
     * color, and this tool allows the user to change the alpha value.
     */ changeAlpha: 'Change alpha',
    /**
     *@description Aria label for HEX color format input
     */ hex: 'HEX',
    /**
     *@description Aria label for color format switcher button in Color Picker
     */ changeColorFormat: 'Change color format',
    /**
     *@description Screen reader reads this text when palette switcher button receives focus
     */ previewPalettes: 'Preview palettes',
    /**
     *@description Tooltip text that appears when hovering over the largeicon add button in the Spectrum of the Color Picker
     */ addToPalette: 'Add to palette',
    /**
     *@description Title text content in Spectrum of the Color Picker
     */ colorPalettes: 'Color Palettes',
    /**
     *@description Label for close button in Color Picker
     */ returnToColorPicker: 'Return to color picker',
    /**
     *@description Aria label which declares hex value of a swatch in the Color Picker
     *@example {#969696} PH1
     */ colorS: 'Color {PH1}',
    /**
     *@description Color element title in Spectrum of the Color Picker
     *@example {#9c1724} PH1
     */ longclickOrLongpressSpaceToShow: 'Long-click or long-press space to show alternate shades of {PH1}',
    /**
     *@description A context menu item in the Color Picker to organize the user-defined color palette (removes the user-defined color to which this action is performed)"
     */ removeColor: 'Remove color',
    /**
     *@description A context menu item in the Color Picker to organize the user-defined color palette (removes all user-defined colors to the right of the color to which this action is performed)"
     */ removeAllToTheRight: 'Remove all to the right',
    /**
     *@description A context menu item in the Color Picker to organize the user-defined color palette (removes all user-defined colors)"
     */ clearPalette: 'Clear palette',
    /**
     *@description Aria label for RGBA and HSLA color format inputs in Color Picker
     *@example {R} PH1
     *@example {RGBA} PH2
     */ sInS: '{PH1} in {PH2}',
    /**
     *@description Swatch copy icon title in Spectrum of the Color Picker
     */ copyColorToClipboard: 'Copy color to clipboard',
    /**
     *@description Aria text for the swatch position. Swatch is the color picker spectrum tool.
     */ pressArrowKeysMessage: 'Press arrow keys with or without modifiers to move swatch position. Arrow key with Shift key moves position largely, with Ctrl key it is less and with Alt key it is even less'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('ui/legacy/components/color_picker/Spectrum.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var colorElementToMutable = new WeakMap();
var colorElementToColor = new WeakMap();
var srgbGamutFormats = [
    "srgb" /* Common.Color.Format.SRGB */ ,
    "rgb" /* Common.Color.Format.RGB */ ,
    "hex" /* Common.Color.Format.HEX */ ,
    "hsl" /* Common.Color.Format.HSL */ ,
    "hwb" /* Common.Color.Format.HWB */ 
];
var IS_NATIVE_EYE_DROPPER_AVAILABLE = 'EyeDropper' in window;
function doesFormatSupportDisplayP3(format) {
    return !srgbGamutFormats.includes(format);
}
function convertColorFormat(colorFormat) {
    if (colorFormat === "rgba" /* Common.Color.Format.RGBA */ ) {
        return "rgb" /* Common.Color.Format.RGB */ ;
    }
    if (colorFormat === "hsla" /* Common.Color.Format.HSLA */ ) {
        return "hsl" /* Common.Color.Format.HSL */ ;
    }
    if (colorFormat === "hwba" /* Common.Color.Format.HWBA */ ) {
        return "hwb" /* Common.Color.Format.HWB */ ;
    }
    if (colorFormat === "hexa" /* Common.Color.Format.HEXA */ ) {
        return "hex" /* Common.Color.Format.HEX */ ;
    }
    return colorFormat;
}
// HSV by itself, without a color space, doesn't map to a color and
// it is usually interpreted as an sRGB color. However, it can also
// represent colors in other color spaces since `HSV` -> `RGB` mapping
// is not color space dependent. For example, color(display-p3 1 1 1) and rgb(1 1 1)
// map to the same HSV values. The tricky thing is, `hsl()` syntax is interpreted
// as it is in sRGB in CSS. So, when you convert those two colors and use as `hsl()`, it will
// show an sRGB color. Though, if there was a function `color-hsl(<color-space> h s l)`
// it was going to show the color in the color-space represented with `hsl`.
// This function, gets the HSV values by interpreting them in the given gamut.
function getHsvFromColor(gamut, color) {
    switch(gamut){
        case "display-p3" /* SpectrumGamut.DISPLAY_P3 */ :
            {
                var displayP3color = color.as("display-p3" /* Common.Color.Format.DISPLAY_P3 */ );
                return _to_consumable_array(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.rgb2hsv([
                    displayP3color.p0,
                    displayP3color.p1,
                    displayP3color.p2
                ])).concat([
                    displayP3color.alpha || 1
                ]);
            }
        case "srgb" /* SpectrumGamut.SRGB */ :
            {
                return color.as("hsl" /* Common.Color.Format.HSL */ ).hsva();
            }
    }
}
// Interprets the given `hsva` values in the given gamut and returns the concrete `Color` object.
function getColorFromHsva(gamut, hsva) {
    var color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromHSVA(hsva);
    switch(gamut){
        case "display-p3" /* SpectrumGamut.DISPLAY_P3 */ :
            {
                var rgba = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.hsva2rgba(hsva);
                return new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.ColorFunction("display-p3" /* Common.Color.Format.DISPLAY_P3 */ , rgba[0], rgba[1], rgba[2], rgba[3], undefined);
            }
        case "srgb" /* SpectrumGamut.SRGB */ :
            {
                return color;
            }
    }
}
var Spectrum = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(Spectrum, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(Spectrum);
    function Spectrum(contrastInfo) {
        _class_call_check(this, Spectrum);
        var _this;
        var getUpdatedSliderPosition = function getUpdatedSliderPosition(element, event) {
            var keyboardEvent = event;
            var elementPosition = element.getBoundingClientRect();
            switch(keyboardEvent.key){
                case 'ArrowLeft':
                case 'ArrowDown':
                    return elementPosition.left - 1;
                case 'ArrowRight':
                case 'ArrowUp':
                    return elementPosition.right + 1;
                default:
                    return event.x;
            }
        };
        var positionHue = function positionHue(event) {
            var hsva = this.hsv.slice();
            var sliderPosition = getUpdatedSliderPosition(this.hueSlider, event);
            var hueAlphaLeft = this.hueElement.getBoundingClientRect().left;
            var positionFraction = (sliderPosition - hueAlphaLeft) / this.hueAlphaWidth;
            var newHue = 1 - positionFraction;
            hsva[0] = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.clamp(newHue, 0, 1);
            this.innerSetColor(hsva, '', undefined /* colorName */ , undefined, ChangeSource.Other);
            var color = getColorFromHsva(this.gamut, hsva);
            var colorValues = color.as("hsl" /* Common.Color.Format.HSL */ ).canonicalHSLA();
            _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setValueNow(this.hueElement, colorValues[0]);
        };
        var positionAlpha = function positionAlpha(event) {
            var hsva = this.hsv.slice();
            var sliderPosition = getUpdatedSliderPosition(this.alphaSlider, event);
            var hueAlphaLeft = this.hueElement.getBoundingClientRect().left;
            var positionFraction = (sliderPosition - hueAlphaLeft) / this.hueAlphaWidth;
            var newAlpha = Math.round(positionFraction * 100) / 100;
            hsva[3] = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.clamp(newAlpha, 0, 1);
            this.innerSetColor(hsva, '', undefined /* colorName */ , undefined, ChangeSource.Other);
            var color = getColorFromHsva(this.gamut, hsva);
            var colorValues = color.as("hsl" /* Common.Color.Format.HSL */ ).canonicalHSLA();
            _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setValueText(this.alphaElement, colorValues[3]);
        };
        var positionColor = function positionColor(event) {
            var hsva = this.hsv.slice();
            var colorPosition = getUpdatedColorPosition(this.colorDragElement, event);
            this.colorOffset = this.colorElement.getBoundingClientRect();
            hsva[1] = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.clamp((colorPosition.x - this.colorOffset.left) / this.dragWidth, 0, 1);
            hsva[2] = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.clamp(1 - (colorPosition.y - this.colorOffset.top) / this.dragHeight, 0, 1);
            this.innerSetColor(hsva, '', undefined /* colorName */ , undefined, ChangeSource.Other);
        };
        var getUpdatedColorPosition = function getUpdatedColorPosition(dragElement, event) {
            var elementPosition = dragElement.getBoundingClientRect();
            var verticalX = elementPosition.x + elementPosition.width / 2;
            var horizontalY = elementPosition.y + elementPosition.width / 2;
            var defaultUnit = elementPosition.width / 4;
            var unit = getUnitToMove(defaultUnit, event);
            var keyboardEvent = event;
            switch(keyboardEvent.key){
                case 'ArrowLeft':
                    return {
                        x: elementPosition.left - unit,
                        y: horizontalY
                    };
                case 'ArrowRight':
                    return {
                        x: elementPosition.right + unit,
                        y: horizontalY
                    };
                case 'ArrowDown':
                    return {
                        x: verticalX,
                        y: elementPosition.bottom + unit
                    };
                case 'ArrowUp':
                    return {
                        x: verticalX,
                        y: elementPosition.top - unit
                    };
                default:
                    return {
                        x: event.x,
                        y: event.y
                    };
            }
        };
        var getUnitToMove = function getUnitToMove(unit, event) {
            var keyboardEvent = event;
            if (keyboardEvent.altKey) {
                unit = 1;
            } else if (keyboardEvent.ctrlKey) {
                unit = 10;
            } else if (keyboardEvent.shiftKey) {
                unit = 20;
            }
            return unit;
        };
        var appendSwitcherIcon = function appendSwitcherIcon(parentElement) {
            var switcherIcon = new _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
            switcherIcon.data = {
                iconName: 'fold-more',
                color: 'var(--icon-default)',
                width: '16px',
                height: '16px'
            };
            parentElement.appendChild(switcherIcon);
        };
        var _toggleEyeDropperShortcut_;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "colorInternal", void 0);
        _define_property(_assert_this_initialized(_this), "gamut", "srgb" /* SpectrumGamut.SRGB */ );
        _define_property(_assert_this_initialized(_this), "colorElement", void 0);
        _define_property(_assert_this_initialized(_this), "colorDragElement", void 0);
        _define_property(_assert_this_initialized(_this), "dragX", void 0);
        _define_property(_assert_this_initialized(_this), "dragY", void 0);
        _define_property(_assert_this_initialized(_this), "colorPickerButton", void 0);
        _define_property(_assert_this_initialized(_this), "swatch", void 0);
        _define_property(_assert_this_initialized(_this), "hueElement", void 0);
        _define_property(_assert_this_initialized(_this), "hueSlider", void 0);
        _define_property(_assert_this_initialized(_this), "alphaElement", void 0);
        _define_property(_assert_this_initialized(_this), "alphaElementBackground", void 0);
        _define_property(_assert_this_initialized(_this), "alphaSlider", void 0);
        _define_property(_assert_this_initialized(_this), "displayContainer", void 0);
        _define_property(_assert_this_initialized(_this), "textValues", void 0);
        _define_property(_assert_this_initialized(_this), "textLabels", void 0);
        _define_property(_assert_this_initialized(_this), "hexContainer", void 0);
        _define_property(_assert_this_initialized(_this), "hexValue", void 0);
        _define_property(_assert_this_initialized(_this), "contrastInfo", void 0);
        _define_property(_assert_this_initialized(_this), "srgbOverlay", void 0);
        _define_property(_assert_this_initialized(_this), "contrastOverlay", void 0);
        _define_property(_assert_this_initialized(_this), "contrastDetails", void 0);
        _define_property(_assert_this_initialized(_this), "contrastDetailsBackgroundColorPickedToggledBound", void 0);
        _define_property(_assert_this_initialized(_this), "palettes", void 0);
        _define_property(_assert_this_initialized(_this), "palettePanel", void 0);
        _define_property(_assert_this_initialized(_this), "palettePanelShowing", void 0);
        _define_property(_assert_this_initialized(_this), "paletteSectionContainer", void 0);
        _define_property(_assert_this_initialized(_this), "paletteContainer", void 0);
        _define_property(_assert_this_initialized(_this), "shadesContainer", void 0);
        _define_property(_assert_this_initialized(_this), "deleteIconToolbar", void 0);
        _define_property(_assert_this_initialized(_this), "deleteButton", void 0);
        _define_property(_assert_this_initialized(_this), "addColorToolbar", void 0);
        _define_property(_assert_this_initialized(_this), "colorPickedBound", void 0);
        _define_property(_assert_this_initialized(_this), "hsv", void 0);
        _define_property(_assert_this_initialized(_this), "hueAlphaWidth", void 0);
        _define_property(_assert_this_initialized(_this), "dragWidth", void 0);
        _define_property(_assert_this_initialized(_this), "dragHeight", void 0);
        _define_property(_assert_this_initialized(_this), "colorDragElementHeight", void 0);
        _define_property(_assert_this_initialized(_this), "slideHelperWidth", void 0);
        _define_property(_assert_this_initialized(_this), "numPaletteRowsShown", void 0);
        _define_property(_assert_this_initialized(_this), "selectedColorPalette", void 0);
        _define_property(_assert_this_initialized(_this), "customPaletteSetting", void 0);
        _define_property(_assert_this_initialized(_this), "colorOffset", void 0);
        _define_property(_assert_this_initialized(_this), "closeButton", void 0);
        _define_property(_assert_this_initialized(_this), "paletteContainerMutable", void 0);
        _define_property(_assert_this_initialized(_this), "shadesCloseHandler", void 0);
        _define_property(_assert_this_initialized(_this), "dragElement", void 0);
        _define_property(_assert_this_initialized(_this), "dragHotSpotX", void 0);
        _define_property(_assert_this_initialized(_this), "dragHotSpotY", void 0);
        _define_property(_assert_this_initialized(_this), "colorNameInternal", void 0);
        _define_property(_assert_this_initialized(_this), "colorFormat", "rgb" /* Common.Color.Format.RGB */ );
        _define_property(_assert_this_initialized(_this), "eyeDropperAbortController", null);
        _define_property(_assert_this_initialized(_this), "isFormatPickerShown", false);
        // Used to represent how the current color
        // should be stringified externally (emitted event etc.).
        // For example, this is used when a color variable
        // selected form the palettes. That time, we don't
        // want to return the value of the variable but the
        // actual variable string.
        _define_property(_assert_this_initialized(_this), "colorStringInternal", void 0);
        _this.contentElement.tabIndex = 0;
        _this.contentElement.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.dialog('colorPicker').parent('mapped').track({
            keydown: 'Enter|Escape'
        })));
        _this.colorElement = _this.contentElement.createChild('div', 'spectrum-color');
        _this.colorElement.tabIndex = 0;
        _this.colorElement.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.canvas('color').track({
            click: true,
            drag: true,
            keydown: 'ArrowLeft|ArrowRight|ArrowDown|ArrowUp'
        })));
        _this.setDefaultFocusedElement(_this.colorElement);
        _this.colorElement.addEventListener('keydown', _this.onSliderKeydown.bind(_assert_this_initialized(_this), positionColor.bind(_assert_this_initialized(_this))));
        var swatchAriaText = i18nString(UIStrings.pressArrowKeysMessage);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(_this.colorElement, swatchAriaText);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsApplication(_this.colorElement);
        _this.colorDragElement = _this.colorElement.createChild('div', 'spectrum-sat fill').createChild('div', 'spectrum-val fill').createChild('div', 'spectrum-dragger');
        _this.dragX = 0;
        _this.dragY = 0;
        var toolsContainer = _this.contentElement.createChild('div', 'spectrum-tools');
        var toolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Toolbar('spectrum-eye-dropper', toolsContainer);
        var toggleEyeDropperShortcut = _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ShortcutRegistry.ShortcutRegistry.instance().shortcutsForAction('elements.toggle-eye-dropper');
        var definedShortcutKey = (_toggleEyeDropperShortcut_ = toggleEyeDropperShortcut[0]) === null || _toggleEyeDropperShortcut_ === void 0 ? void 0 : _toggleEyeDropperShortcut_.descriptors.flatMap(function(descriptor) {
            return descriptor.name.split(' + ');
        })[0];
        _this.colorPickerButton = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarToggle(i18nString(UIStrings.toggleColorPicker, {
            PH1: definedShortcutKey || ''
        }), 'color-picker', 'color-picker-filled', 'color-eye-dropper');
        _this.colorPickerButton.setToggled(true);
        _this.colorPickerButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , _this.toggleColorPicker.bind(_assert_this_initialized(_this), undefined));
        toolbar.appendToolbarItem(_this.colorPickerButton);
        _this.colorPickerButton.element.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.colorEyeDropper().track({
            click: true
        })));
        _this.swatch = new Swatch(toolsContainer);
        _this.hueElement = toolsContainer.createChild('div', 'spectrum-hue');
        _this.hueElement.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.slider('hue').track({
            click: true,
            drag: true,
            keydown: 'ArrowLeft|ArrowRight|ArrowDown|ArrowUp'
        })));
        _this.hueElement.tabIndex = 0;
        _this.hueElement.addEventListener('keydown', _this.onSliderKeydown.bind(_assert_this_initialized(_this), positionHue.bind(_assert_this_initialized(_this))));
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(_this.hueElement, i18nString(UIStrings.changeHue));
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsSlider(_this.hueElement, 0, 360);
        _this.hueSlider = _this.hueElement.createChild('div', 'spectrum-slider');
        _this.alphaElement = toolsContainer.createChild('div', 'spectrum-alpha');
        _this.alphaElement.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.slider('alpha').track({
            click: true,
            drag: true,
            keydown: 'ArrowLeft|ArrowRight|ArrowDown|ArrowUp'
        })));
        _this.alphaElement.tabIndex = 0;
        _this.alphaElement.addEventListener('keydown', _this.onSliderKeydown.bind(_assert_this_initialized(_this), positionAlpha.bind(_assert_this_initialized(_this))));
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(_this.alphaElement, i18nString(UIStrings.changeAlpha));
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsSlider(_this.alphaElement, 0, 1);
        _this.alphaElementBackground = _this.alphaElement.createChild('div', 'spectrum-alpha-background');
        _this.alphaSlider = _this.alphaElement.createChild('div', 'spectrum-slider');
        // RGBA/HSLA/HWBA display.
        _this.displayContainer = toolsContainer.createChild('div', 'spectrum-text source-code');
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsPoliteLiveRegion(_this.displayContainer, true);
        _this.textValues = [];
        for(var i = 0; i < 4; ++i){
            var inputValue = _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createInput('spectrum-text-value');
            inputValue.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.value().track({
                change: true,
                keydown: 'ArrowUp|ArrowDown'
            }).context(i)));
            _this.displayContainer.appendChild(inputValue);
            inputValue.maxLength = 4;
            _this.textValues.push(inputValue);
            inputValue.addEventListener('keydown', _this.inputChanged.bind(_assert_this_initialized(_this)), false);
            inputValue.addEventListener('input', _this.inputChanged.bind(_assert_this_initialized(_this)), false);
            inputValue.addEventListener('wheel', _this.inputChanged.bind(_assert_this_initialized(_this)), false);
            inputValue.addEventListener('paste', _this.pasted.bind(_assert_this_initialized(_this)), false);
        }
        _this.textLabels = _this.displayContainer.createChild('div', 'spectrum-text-label');
        // HEX display.
        _this.hexContainer = toolsContainer.createChild('div', 'spectrum-text spectrum-text-hex source-code');
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsPoliteLiveRegion(_this.hexContainer, true);
        _this.hexValue = _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createInput('spectrum-text-value');
        _this.hexValue.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.value('hex').track({
            keydown: 'ArrowUp|ArrowDown',
            change: true
        })));
        _this.hexContainer.appendChild(_this.hexValue);
        _this.hexValue.maxLength = 9;
        _this.hexValue.addEventListener('keydown', _this.inputChanged.bind(_assert_this_initialized(_this)), false);
        _this.hexValue.addEventListener('input', _this.inputChanged.bind(_assert_this_initialized(_this)), false);
        _this.hexValue.addEventListener('wheel', _this.inputChanged.bind(_assert_this_initialized(_this)), false);
        _this.hexValue.addEventListener('paste', _this.pasted.bind(_assert_this_initialized(_this)), false);
        var label = _this.hexContainer.createChild('div', 'spectrum-text-label');
        label.textContent = i18nString(UIStrings.hex);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(_this.hexValue, label.textContent);
        var displaySwitcher = toolsContainer.createChild('button', 'spectrum-display-switcher spectrum-switcher');
        displaySwitcher.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.dropDown('color-format').track({
            click: true
        })));
        appendSwitcherIcon(displaySwitcher);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.setTitle(displaySwitcher, i18nString(UIStrings.changeColorFormat));
        displaySwitcher.tabIndex = 0;
        displaySwitcher.addEventListener('click', function(ev) {
            void _this.showFormatPicker(ev);
        });
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.installDragHandle(_this.hueElement, _this.dragStart.bind(_assert_this_initialized(_this), positionHue.bind(_assert_this_initialized(_this))), positionHue.bind(_assert_this_initialized(_this)), null, 'ew-resize', 'crosshair');
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.installDragHandle(_this.alphaElement, _this.dragStart.bind(_assert_this_initialized(_this), positionAlpha.bind(_assert_this_initialized(_this))), positionAlpha.bind(_assert_this_initialized(_this)), null, 'ew-resize', 'crosshair');
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.installDragHandle(_this.colorElement, _this.dragStart.bind(_assert_this_initialized(_this), positionColor.bind(_assert_this_initialized(_this))), positionColor.bind(_assert_this_initialized(_this)), null, 'move', 'crosshair');
        // Color contrast business.
        if (contrastInfo) {
            _this.contrastInfo = contrastInfo;
            _this.contrastOverlay = new _ContrastOverlay_js__WEBPACK_IMPORTED_MODULE_11__.ContrastOverlay(_this.contrastInfo, _this.colorElement);
            _this.contrastDetails = new _ContrastDetails_js__WEBPACK_IMPORTED_MODULE_10__.ContrastDetails(_this.contrastInfo, _this.contentElement, _this.toggleColorPicker.bind(_assert_this_initialized(_this)), _this.contrastPanelExpandedChanged.bind(_assert_this_initialized(_this)), _this.colorSelected.bind(_assert_this_initialized(_this)));
            _this.contrastDetailsBackgroundColorPickedToggledBound = _this.contrastDetailsBackgroundColorPickedToggled.bind(_assert_this_initialized(_this));
        }
        _this.element.classList.add('flex-none');
        _this.palettes = new Map();
        _this.palettePanel = _this.contentElement.createChild('div', 'palette-panel');
        _this.palettePanel.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('palette-panel')));
        _this.palettePanelShowing = false;
        _this.paletteSectionContainer = _this.contentElement.createChild('div', 'spectrum-palette-container');
        _this.paletteContainer = _this.paletteSectionContainer.createChild('div', 'spectrum-palette');
        _this.paletteContainer.addEventListener('contextmenu', _this.showPaletteColorContextMenu.bind(_assert_this_initialized(_this), -1));
        _this.shadesContainer = _this.contentElement.createChild('div', 'palette-color-shades hidden');
        _this.shadesContainer.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.paletteColorShades()));
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.installDragHandle(_this.paletteContainer, _this.paletteDragStart.bind(_assert_this_initialized(_this)), _this.paletteDrag.bind(_assert_this_initialized(_this)), _this.paletteDragEnd.bind(_assert_this_initialized(_this)), 'default');
        var paletteSwitcher = _this.paletteSectionContainer.createChild('div', 'spectrum-palette-switcher spectrum-switcher');
        paletteSwitcher.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.dropDown('palette-switcher').track({
            click: true
        })));
        appendSwitcherIcon(paletteSwitcher);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.setTitle(paletteSwitcher, i18nString(UIStrings.previewPalettes));
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsButton(paletteSwitcher);
        paletteSwitcher.tabIndex = 0;
        self.onInvokeElement(paletteSwitcher, function(event) {
            _this.togglePalettePanel(true);
            event.consume(true);
        });
        _this.deleteIconToolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Toolbar('delete-color-toolbar');
        _this.deleteButton = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton('', 'bin');
        _this.deleteIconToolbar.appendToolbarItem(_this.deleteButton);
        var overlay = _this.contentElement.createChild('div', 'spectrum-overlay fill');
        overlay.addEventListener('click', _this.togglePalettePanel.bind(_assert_this_initialized(_this), false));
        _this.addColorToolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Toolbar('add-color-toolbar');
        var addColorButton = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.addToPalette), 'plus', undefined, 'add-color');
        addColorButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , _this.onAddColorMousedown.bind(_assert_this_initialized(_this)));
        addColorButton.element.addEventListener('keydown', _this.onAddColorKeydown.bind(_assert_this_initialized(_this)));
        _this.addColorToolbar.appendToolbarItem(addColorButton);
        _this.colorPickedBound = _this.colorPicked.bind(_assert_this_initialized(_this));
        _this.numPaletteRowsShown = -1;
        _this.contentElement.addEventListener('focusout', function(ev) {
            // Do not propagate 'focusout' event when the format picker
            // context menu is shown. The reason is, when it is shown,
            // 'focusout' event is emitted and SwatchPopoverHelper listens
            // to it and closes the color picker. However, we don't want
            // color picker to be closed when the focus is gone for the
            // format picker context menu. That's why we stop the propagation.
            if (_this.isFormatPickerShown) {
                ev.stopImmediatePropagation();
            }
        });
        _this.srgbOverlay = new _components_srgb_overlay_srgb_overlay_js__WEBPACK_IMPORTED_MODULE_6__.SrgbOverlay.SrgbOverlay();
        _this.loadPalettes();
        new PaletteGenerator(function(palette) {
            if (palette.colors.length) {
                _this.addPalette(palette);
            } else if (_this.selectedColorPalette.get() === palette.title) {
                _this.paletteSelected(MaterialPalette);
            }
        });
        return _this;
    }
    _create_class(Spectrum, [
        {
            key: "dragStart",
            value: function dragStart(callback, event) {
                this.colorOffset = this.colorElement.getBoundingClientRect();
                callback(event);
                return true;
            }
        },
        {
            key: "contrastDetailsBackgroundColorPickedToggled",
            value: function contrastDetailsBackgroundColorPickedToggled(event) {
                if (event.data) {
                    void this.toggleColorPicker(false);
                }
            }
        },
        {
            key: "contrastPanelExpandedChanged",
            value: function contrastPanelExpandedChanged() {
                if (!this.contrastOverlay || !this.contrastDetails) {
                    return;
                }
                this.contrastOverlay.setVisible(this.contrastDetails.expanded());
                this.resizeForSelectedPalette(true);
                if (this.contrastDetails.expanded()) {
                    this.hideSrgbOverlay();
                } else {
                    this.showSrgbOverlay();
                }
            }
        },
        {
            key: "updatePalettePanel",
            value: function updatePalettePanel() {
                this.palettePanel.removeChildren();
                var title = this.palettePanel.createChild('div', 'palette-title');
                title.textContent = i18nString(UIStrings.colorPalettes);
                var toolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Toolbar('', this.palettePanel);
                this.closeButton = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.returnToColorPicker), 'cross');
                this.closeButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , this.togglePalettePanel.bind(this, false));
                this.closeButton.element.addEventListener('keydown', this.onCloseBtnKeydown.bind(this));
                this.closeButton.element.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.close().track({
                    click: true
                })));
                toolbar.appendToolbarItem(this.closeButton);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.palettes.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var palette = _step.value;
                        this.palettePanel.appendChild(this.createPreviewPaletteElement(palette));
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
                this.contentElement.scrollIntoView({
                    block: 'end'
                });
            }
        },
        {
            key: "togglePalettePanel",
            value: function togglePalettePanel(show) {
                if (this.palettePanelShowing === show) {
                    return;
                }
                if (show) {
                    this.updatePalettePanel();
                }
                this.palettePanelShowing = show;
                this.contentElement.classList.toggle('palette-panel-showing', show);
                this.focusInternal();
            }
        },
        {
            key: "onCloseBtnKeydown",
            value: function onCloseBtnKeydown(event) {
                if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEscKey(event) || _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEnterOrSpaceKey(event)) {
                    this.togglePalettePanel(false);
                    event.consume(true);
                }
            }
        },
        {
            key: "onSliderKeydown",
            value: function onSliderKeydown(sliderNewPosition, event) {
                var keyboardEvent = event;
                switch(keyboardEvent.key){
                    case 'ArrowLeft':
                    case 'ArrowRight':
                    case 'ArrowDown':
                    case 'ArrowUp':
                        sliderNewPosition(event);
                        event.consume(true);
                }
            }
        },
        {
            /**
     * (Suppress warning about preventScroll)
     */ key: "focusInternal",
            value: function focusInternal() {
                if (!this.isShowing()) {
                    return;
                }
                if (this.palettePanelShowing && this.closeButton) {
                    this.closeButton.element.focus({
                        preventScroll: true
                    });
                } else {
                    this.contentElement.focus();
                }
            }
        },
        {
            key: "createPaletteColor",
            value: function createPaletteColor(colorText, colorName, animationDelay) {
                var element = document.createElement('div');
                element.classList.add('spectrum-palette-color');
                element.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.item().track({
                    click: true,
                    drag: true,
                    keydown: 'ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Escape|Tab'
                })));
                element.style.background = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.sprintf('linear-gradient(%s, %s), var(--image-file-checker)', colorText, colorText);
                if (animationDelay) {
                    element.animate([
                        {
                            opacity: 0
                        },
                        {
                            opacity: 1
                        }
                    ], {
                        duration: 100,
                        delay: animationDelay,
                        fill: 'backwards'
                    });
                }
                _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Tooltip.Tooltip.install(element, colorName || colorText);
                return element;
            }
        },
        {
            key: "showPalette",
            value: function showPalette(palette, animate, _event) {
                this.resizeForSelectedPalette();
                this.paletteContainer.removeChildren();
                for(var i = 0; i < palette.colors.length; i++){
                    var animationDelay = animate ? i * 100 / palette.colors.length : 0;
                    var colorElement = this.createPaletteColor(palette.colors[i], palette.colorNames[i], animationDelay);
                    _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsButton(colorElement);
                    _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(colorElement, i18nString(UIStrings.colorS, {
                        PH1: palette.colors[i]
                    }));
                    colorElement.tabIndex = -1;
                    colorElement.addEventListener('mousedown', this.paletteColorSelected.bind(this, palette.colors[i], palette.colorNames[i], Boolean(palette.matchUserFormat)));
                    colorElement.addEventListener('focus', this.paletteColorSelected.bind(this, palette.colors[i], palette.colorNames[i], Boolean(palette.matchUserFormat)));
                    colorElement.addEventListener('keydown', this.onPaletteColorKeydown.bind(this, i));
                    if (palette.mutable) {
                        colorElementToMutable.set(colorElement, true);
                        colorElementToColor.set(colorElement, palette.colors[i]);
                        colorElement.addEventListener('contextmenu', this.showPaletteColorContextMenu.bind(this, i));
                    } else if (palette === MaterialPalette) {
                        colorElement.classList.add('has-material-shades');
                        var shadow = colorElement.createChild('div', 'spectrum-palette-color spectrum-palette-color-shadow');
                        shadow.style.background = palette.colors[i];
                        shadow = colorElement.createChild('div', 'spectrum-palette-color spectrum-palette-color-shadow');
                        shadow.style.background = palette.colors[i];
                        var tooltipText = i18nString(UIStrings.longclickOrLongpressSpaceToShow, {
                            PH1: palette.colors[i]
                        });
                        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Tooltip.Tooltip.install(colorElement, tooltipText);
                        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(colorElement, tooltipText);
                        new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.LongClickController(colorElement, this.showLightnessShades.bind(this, colorElement, palette.colors[i]));
                    }
                    this.paletteContainer.appendChild(colorElement);
                }
                if (this.paletteContainer.childNodes.length > 0) {
                    this.paletteContainer.childNodes[0].tabIndex = 0;
                }
                this.paletteContainerMutable = palette.mutable;
                if (palette.mutable) {
                    this.paletteContainer.appendChild(this.addColorToolbar.element);
                    this.paletteContainer.appendChild(this.deleteIconToolbar.element);
                } else {
                    this.addColorToolbar.element.remove();
                    this.deleteIconToolbar.element.remove();
                }
                this.togglePalettePanel(false);
                this.focusInternal();
            }
        },
        {
            key: "showLightnessShades",
            value: function showLightnessShades(colorElement, colorText, _event) {
                function closeLightnessShades(element) {
                    this.shadesContainer.classList.add('hidden');
                    element.classList.remove('spectrum-shades-shown');
                    if (this.shadesCloseHandler) {
                        this.shadesContainer.ownerDocument.removeEventListener('mousedown', this.shadesCloseHandler, true);
                    }
                    delete this.shadesCloseHandler;
                }
                if (this.shadesCloseHandler) {
                    this.shadesCloseHandler();
                }
                this.shadesContainer.classList.remove('hidden');
                this.shadesContainer.removeChildren();
                this.shadesContainer.animate([
                    {
                        transform: 'scaleY(0)',
                        opacity: '0'
                    },
                    {
                        transform: 'scaleY(1)',
                        opacity: '1'
                    }
                ], {
                    duration: 200,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
                });
                var shadesTop = this.paletteContainer.offsetTop + colorElement.offsetTop + (colorElement.parentElement ? colorElement.parentElement.offsetTop : 0);
                if (this.contrastDetails) {
                    shadesTop += this.contrastDetails.element().offsetHeight;
                }
                this.shadesContainer.style.top = shadesTop + 'px';
                this.shadesContainer.style.left = colorElement.offsetLeft + 'px';
                colorElement.classList.add('spectrum-shades-shown');
                var shades = MaterialPaletteShades.get(colorText);
                if (shades !== undefined) {
                    for(var i = shades.length - 1; i >= 0; i--){
                        var shadeElement = this.createPaletteColor(shades[i], undefined /* colorName */ , i * 200 / shades.length + 100);
                        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsButton(shadeElement);
                        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(shadeElement, i18nString(UIStrings.colorS, {
                            PH1: shades[i]
                        }));
                        shadeElement.tabIndex = -1;
                        shadeElement.addEventListener('mousedown', this.paletteColorSelected.bind(this, shades[i], shades[i], false));
                        shadeElement.addEventListener('focus', this.paletteColorSelected.bind(this, shades[i], shades[i], false));
                        shadeElement.addEventListener('keydown', this.onShadeColorKeydown.bind(this, colorElement));
                        this.shadesContainer.appendChild(shadeElement);
                    }
                }
                if (this.shadesContainer.childNodes.length > 0) {
                    this.shadesContainer.childNodes[this.shadesContainer.childNodes.length - 1].focus();
                }
                this.shadesCloseHandler = closeLightnessShades.bind(this, colorElement);
                this.shadesContainer.ownerDocument.addEventListener('mousedown', this.shadesCloseHandler, true);
            }
        },
        {
            key: "slotIndexForEvent",
            value: function slotIndexForEvent(event) {
                var mouseEvent = event;
                var localX = mouseEvent.pageX - this.paletteContainer.getBoundingClientRect().left;
                var localY = mouseEvent.pageY - this.paletteContainer.getBoundingClientRect().top;
                var col = Math.min(localX / COLOR_CHIP_SIZE | 0, ITEMS_PER_PALETTE_ROW - 1);
                var row = localY / COLOR_CHIP_SIZE | 0;
                return Math.min(row * ITEMS_PER_PALETTE_ROW + col, this.customPaletteSetting.get().colors.length - 1);
            }
        },
        {
            key: "isDraggingToBin",
            value: function isDraggingToBin(event) {
                var mouseEvent = event;
                return mouseEvent.pageX > this.deleteIconToolbar.element.getBoundingClientRect().left;
            }
        },
        {
            key: "paletteDragStart",
            value: function paletteDragStart(event) {
                var element = _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.deepElementFromEvent(event);
                if (!element || !colorElementToMutable.get(element)) {
                    return false;
                }
                var index = this.slotIndexForEvent(event);
                this.dragElement = element;
                var mouseEvent = event;
                this.dragHotSpotX = mouseEvent.pageX - index % ITEMS_PER_PALETTE_ROW * COLOR_CHIP_SIZE;
                this.dragHotSpotY = mouseEvent.pageY - (index / ITEMS_PER_PALETTE_ROW | 0) * COLOR_CHIP_SIZE;
                return true;
            }
        },
        {
            key: "paletteDrag",
            value: function paletteDrag(event) {
                var mouseEvent = event;
                if (mouseEvent.pageX < this.paletteContainer.getBoundingClientRect().left || mouseEvent.pageY < this.paletteContainer.getBoundingClientRect().top) {
                    return;
                }
                if (!this.dragElement || this.dragHotSpotX === undefined || this.dragHotSpotY === undefined) {
                    return;
                }
                var newIndex = this.slotIndexForEvent(event);
                var offsetX = mouseEvent.pageX - newIndex % ITEMS_PER_PALETTE_ROW * COLOR_CHIP_SIZE;
                var offsetY = mouseEvent.pageY - (newIndex / ITEMS_PER_PALETTE_ROW | 0) * COLOR_CHIP_SIZE;
                var isDeleting = this.isDraggingToBin(event);
                this.deleteIconToolbar.element.classList.add('dragging');
                this.deleteIconToolbar.element.classList.toggle('delete-color-toolbar-active', isDeleting);
                var dragElementTransform = 'translateX(' + (offsetX - this.dragHotSpotX) + 'px) translateY(' + (offsetY - this.dragHotSpotY) + 'px)';
                this.dragElement.style.transform = isDeleting ? dragElementTransform + ' scale(0.8)' : dragElementTransform;
                var children = _to_consumable_array(this.paletteContainer.children);
                var index = children.indexOf(this.dragElement);
                var swatchOffsets = new Map();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var swatch = _step.value;
                        swatchOffsets.set(swatch, swatch.getBoundingClientRect());
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
                if (index !== newIndex) {
                    this.paletteContainer.insertBefore(this.dragElement, children[newIndex > index ? newIndex + 1 : newIndex]);
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = children[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var swatch1 = _step1.value;
                        if (swatch1 === this.dragElement) {
                            continue;
                        }
                        var before = swatchOffsets.get(swatch1);
                        var after = swatch1.getBoundingClientRect();
                        if (before && (before.left !== after.left || before.top !== after.top)) {
                            swatch1.animate([
                                {
                                    transform: 'translateX(' + (before.left - after.left) + 'px) translateY(' + (before.top - after.top) + 'px)'
                                },
                                {
                                    transform: 'none'
                                }
                            ], {
                                duration: 100,
                                easing: 'cubic-bezier(0, 0, 0.2, 1)'
                            });
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
        },
        {
            key: "paletteDragEnd",
            value: function paletteDragEnd(e) {
                if (!this.dragElement) {
                    return;
                }
                if (this.isDraggingToBin(e)) {
                    this.dragElement.remove();
                }
                this.dragElement.style.removeProperty('transform');
                var children = this.paletteContainer.children;
                var colors = [];
                for(var i = 0; i < children.length; ++i){
                    var color = colorElementToColor.get(children[i]);
                    if (color) {
                        colors.push(color);
                    }
                }
                var palette = this.customPaletteSetting.get();
                palette.colors = colors;
                this.customPaletteSetting.set(palette);
                this.showPalette(palette, false);
                this.deleteIconToolbar.element.classList.remove('dragging');
                this.deleteIconToolbar.element.classList.remove('delete-color-toolbar-active');
            }
        },
        {
            key: "loadPalettes",
            value: function loadPalettes() {
                this.palettes.set(MaterialPalette.title, MaterialPalette);
                var defaultCustomPalette = {
                    title: 'Custom',
                    colors: [],
                    colorNames: [],
                    mutable: true,
                    matchUserFormat: undefined
                };
                this.customPaletteSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('custom-color-palette', defaultCustomPalette);
                var customPalette = this.customPaletteSetting.get();
                // Fallback case for custom palettes created pre-m67
                customPalette.colorNames = customPalette.colorNames || [];
                this.palettes.set(customPalette.title, customPalette);
                this.selectedColorPalette = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('selected-color-palette', GeneratedPaletteTitle);
                var palette = this.palettes.get(this.selectedColorPalette.get());
                if (palette) {
                    this.showPalette(palette, true);
                }
            }
        },
        {
            key: "addPalette",
            value: function addPalette(palette) {
                this.palettes.set(palette.title, palette);
                if (this.selectedColorPalette.get() === palette.title) {
                    this.showPalette(palette, true);
                }
            }
        },
        {
            key: "createPreviewPaletteElement",
            value: function createPreviewPaletteElement(palette) {
                var _this = this;
                var colorsPerPreviewRow = 5;
                var previewElement = document.createElement('div');
                previewElement.classList.add('palette-preview');
                _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsButton(previewElement);
                previewElement.tabIndex = 0;
                var titleElement = previewElement.createChild('div', 'palette-preview-title');
                titleElement.textContent = palette.title;
                var i;
                for(i = 0; i < colorsPerPreviewRow && i < palette.colors.length; i++){
                    previewElement.appendChild(this.createPaletteColor(palette.colors[i], palette.colorNames[i]));
                }
                for(; i < colorsPerPreviewRow; i++){
                    previewElement.createChild('div', 'spectrum-palette-color empty-color');
                }
                self.onInvokeElement(previewElement, function(event) {
                    _this.paletteSelected(palette);
                    event.consume(true);
                });
                return previewElement;
            }
        },
        {
            key: "paletteSelected",
            value: function paletteSelected(palette) {
                this.selectedColorPalette.set(palette.title);
                this.showPalette(palette, true);
            }
        },
        {
            key: "resizeForSelectedPalette",
            value: function resizeForSelectedPalette(force) {
                var palette = this.palettes.get(this.selectedColorPalette.get());
                if (!palette) {
                    return;
                }
                var numColors = palette.colors.length;
                if (palette === this.customPaletteSetting.get()) {
                    numColors++;
                }
                var rowsNeeded = Math.max(1, Math.ceil(numColors / ITEMS_PER_PALETTE_ROW));
                if (this.numPaletteRowsShown === rowsNeeded && !force) {
                    return;
                }
                this.numPaletteRowsShown = rowsNeeded;
                var paletteColorHeight = 12;
                var paletteMargin = 12;
                var paletteTop = 236;
                if (this.contrastDetails) {
                    if (this.contrastDetails.expanded()) {
                        paletteTop += 78;
                    } else {
                        paletteTop += 36;
                    }
                }
                this.element.style.height = paletteTop + paletteMargin + (paletteColorHeight + paletteMargin) * rowsNeeded + 'px';
                this.dispatchEventToListeners("SizeChanged" /* Events.SizeChanged */ );
            }
        },
        {
            key: "paletteColorSelected",
            value: function paletteColorSelected(colorText, colorName, matchUserFormat) {
                var color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colorText);
                if (!color) {
                    return;
                }
                this.innerSetColor(color, colorText, colorName, matchUserFormat ? this.colorFormat : color.format(), ChangeSource.Other);
            }
        },
        {
            key: "onPaletteColorKeydown",
            value: function onPaletteColorKeydown(colorIndex, event) {
                var keyboardEvent = event;
                var nextColorIndex;
                switch(keyboardEvent.key){
                    case 'ArrowLeft':
                        nextColorIndex = colorIndex - 1;
                        break;
                    case 'ArrowRight':
                        nextColorIndex = colorIndex + 1;
                        break;
                    case 'ArrowUp':
                        nextColorIndex = colorIndex - ITEMS_PER_PALETTE_ROW;
                        break;
                    case 'ArrowDown':
                        nextColorIndex = colorIndex + ITEMS_PER_PALETTE_ROW;
                        break;
                }
                if (nextColorIndex !== undefined && nextColorIndex > -1 && nextColorIndex < this.paletteContainer.childNodes.length) {
                    this.paletteContainer.childNodes[nextColorIndex].focus();
                }
            }
        },
        {
            key: "onShadeColorKeydown",
            value: function onShadeColorKeydown(colorElement, event) {
                var target = event.target;
                if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEscKey(event) || event.key === 'Tab') {
                    colorElement.focus();
                    if (this.shadesCloseHandler) {
                        this.shadesCloseHandler();
                    }
                    event.consume(true);
                } else if (event.key === 'ArrowUp' && target.previousElementSibling) {
                    target.previousElementSibling.focus();
                    event.consume(true);
                } else if (event.key === 'ArrowDown' && target.nextElementSibling) {
                    target.nextElementSibling.focus();
                    event.consume(true);
                }
            }
        },
        {
            key: "onAddColorMousedown",
            value: function onAddColorMousedown() {
                this.addColorToCustomPalette();
            }
        },
        {
            key: "onAddColorKeydown",
            value: function onAddColorKeydown(event) {
                if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEnterOrSpaceKey(event)) {
                    this.addColorToCustomPalette();
                    event.consume(true);
                }
            }
        },
        {
            key: "addColorToCustomPalette",
            value: function addColorToCustomPalette() {
                var palette = this.customPaletteSetting.get();
                palette.colors.push(this.colorString());
                this.customPaletteSetting.set(palette);
                this.showPalette(palette, false);
                var colorElements = this.paletteContainer.querySelectorAll('.spectrum-palette-color');
                colorElements[colorElements.length - 1].focus();
            }
        },
        {
            key: "showPaletteColorContextMenu",
            value: function showPaletteColorContextMenu(colorIndex, event) {
                if (!this.paletteContainerMutable) {
                    return;
                }
                var contextMenu = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ContextMenu.ContextMenu(event);
                if (colorIndex !== -1) {
                    contextMenu.defaultSection().appendItem(i18nString(UIStrings.removeColor), this.deletePaletteColors.bind(this, colorIndex, false), {
                        jslogContext: 'remove-color'
                    });
                    contextMenu.defaultSection().appendItem(i18nString(UIStrings.removeAllToTheRight), this.deletePaletteColors.bind(this, colorIndex, true), {
                        jslogContext: 'remove-all-to-the-right'
                    });
                }
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.clearPalette), this.deletePaletteColors.bind(this, -1, true), {
                    jslogContext: 'clear-palette'
                });
                void contextMenu.show();
            }
        },
        {
            key: "deletePaletteColors",
            value: function deletePaletteColors(colorIndex, toRight) {
                var palette = this.customPaletteSetting.get();
                if (toRight) {
                    palette.colors.splice(colorIndex + 1, palette.colors.length - colorIndex - 1);
                } else {
                    palette.colors.splice(colorIndex, 1);
                }
                this.customPaletteSetting.set(palette);
                this.showPalette(palette, false);
            }
        },
        {
            key: "setColor",
            value: function setColor(color) {
                this.innerSetColor(color, '', undefined /* colorName */ , color.format(), ChangeSource.Model);
                var colorValues = color.as("hsl" /* Common.Color.Format.HSL */ ).canonicalHSLA();
                _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setValueNow(this.hueElement, colorValues[0]);
                _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setValueText(this.alphaElement, colorValues[3]);
            }
        },
        {
            key: "colorSelected",
            value: function colorSelected(color) {
                this.innerSetColor(color, '', undefined /* colorName */ , undefined /* colorFormat */ , ChangeSource.Other);
            }
        },
        {
            key: "color",
            get: function get() {
                if (this.colorInternal) {
                    return this.colorInternal;
                }
                return getColorFromHsva(this.gamut, this.hsv);
            }
        },
        {
            key: "innerSetColor",
            value: function innerSetColor(colorOrHsv, colorString, colorName, colorFormat, changeSource) {
                // It is important to do `undefined` check here since we want to update the
                // `colorStringInternal` to be empty specifically. The difference is:
                // * If we give `undefined` as an argument to this function, it means
                // we don't want to change `colorStringInternal`
                // * If we give "" as an argument to this funciton, it means
                // we want to clear the `colorStringInternal`.
                if (colorString !== undefined) {
                    this.colorStringInternal = colorString;
                }
                if (colorFormat !== undefined) {
                    this.colorFormat = convertColorFormat(colorFormat);
                    this.gamut = doesFormatSupportDisplayP3(this.colorFormat) ? "display-p3" /* SpectrumGamut.DISPLAY_P3 */  : "srgb" /* SpectrumGamut.SRGB */ ;
                }
                // For decreasing the conversion errors, if a color is given as is
                // we're storing it in `colorInternal` and using it properly.
                // Otherwise, if an `HSV` is given, we're discarding the `colorInternal`
                // and keeping HSV values as the source of truth.
                // This logic enables us to
                // * Keep color picker and the reflected color consistent (ex: lch(100 55.30 34.40) is
                //   shown with values 100, 55.30 and 34.40). If we were to get `HSV` from it
                //   and convert that HSV to `lch` color when needed, it might have resulted in rounding errors
                //   where color picker shows inconsistent values (i.e. inputs) with the selected color.
                // * Allow `HSV` values to be set independently from the color it represents.
                //   for example, lch(100 0 50) and lch(100 0 30) represents the same colors (both white)
                //   and hue component is powerless. This results in converted `h` in `hsv` to be
                //   0 as well. Meaning that, when the user comes to white, the hue will be reset to
                //   `0` which will change the state of the color picker unintentionally.
                if (Array.isArray(colorOrHsv)) {
                    this.colorInternal = undefined;
                    this.hsv = colorOrHsv;
                } else if (colorOrHsv !== undefined) {
                    this.colorInternal = colorOrHsv;
                    var oldHue = this.hsv ? this.hsv[0] : null;
                    this.hsv = getHsvFromColor(this.gamut, colorOrHsv);
                    // When the hue is powerless in lch color space
                    // its `h` is directly set to 0 which results in
                    // hue in hsv representation being 0 too.
                    // For that case, we don't want to update the
                    // hue slider of the color picker to keep its state consistent.
                    // Otherwise, when the hue slider is set in the middle and the user
                    // drags the cursor to the left most line (where c is 0)
                    // it will reset hue slider of color picker to be 0 too and we don't want this.
                    // The reason we convert to LCH instead of HSL to check hue's powerlessness is that
                    // we don't want the color to be clipped for doing this check.
                    if (oldHue !== null && colorOrHsv.as("lch" /* Common.Color.Format.LCH */ ).isHuePowerless()) {
                        this.hsv[0] = oldHue;
                    }
                }
                this.colorNameInternal = colorName;
                if (this.contrastInfo) {
                    this.contrastInfo.setColor(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromHSVA(this.hsv), this.colorFormat);
                }
                this.updateHelperLocations();
                this.updateUI();
                if (changeSource !== ChangeSource.Input) {
                    this.updateInput();
                }
                if (changeSource !== ChangeSource.Model) {
                    this.dispatchEventToListeners("ColorChanged" /* Events.ColorChanged */ , this.colorString());
                }
            }
        },
        {
            key: "colorName",
            value: function colorName() {
                return this.colorNameInternal;
            }
        },
        {
            key: "colorString",
            value: function colorString() {
                // If the `colorStringInternal` exists and
                // if it is not an empty string, we will show that.
                // Empty string check is important here since we use
                // that to point that the colorStringInternal is cleared
                // and should not be used.
                if (this.colorStringInternal) {
                    return this.colorStringInternal;
                }
                var color = this.color;
                var _color_getAuthoredText;
                var colorString = this.colorFormat && this.colorFormat !== color.format() ? color.asString(this.colorFormat) : (_color_getAuthoredText = color.getAuthoredText()) !== null && _color_getAuthoredText !== void 0 ? _color_getAuthoredText : color.asString();
                if (colorString) {
                    return colorString;
                }
                if (this.colorFormat === "hex" /* Common.Color.Format.HEX */ ) {
                    colorString = color.asString("hexa" /* Common.Color.Format.HEXA */ );
                } else if (this.colorFormat === "hsl" /* Common.Color.Format.HSL */ ) {
                    colorString = color.asString("hsla" /* Common.Color.Format.HSLA */ );
                } else if (this.colorFormat === "hwb" /* Common.Color.Format.HWB */ ) {
                    colorString = color.asString("hwba" /* Common.Color.Format.HWBA */ );
                } else {
                    colorString = color.asString("rgba" /* Common.Color.Format.RGBA */ );
                }
                console.assert(Boolean(colorString));
                return colorString || '';
            }
        },
        {
            key: "updateHelperLocations",
            value: function updateHelperLocations() {
                var h = this.hsv[0];
                var s = this.hsv[1];
                var v = this.hsv[2];
                var alpha = this.hsv[3];
                // Where to show the little circle that displays your current selected color.
                this.dragX = s * this.dragWidth;
                this.dragY = this.dragHeight - v * this.dragHeight;
                var dragX = Math.max(-this.colorDragElementHeight, Math.min(this.dragWidth - this.colorDragElementHeight, this.dragX - this.colorDragElementHeight));
                var dragY = Math.max(-this.colorDragElementHeight, Math.min(this.dragHeight - this.colorDragElementHeight, this.dragY - this.colorDragElementHeight));
                this.colorDragElement.positionAt(dragX, dragY);
                // Where to show the bar that displays your current selected hue.
                var hueSlideX = (1 - h) * this.hueAlphaWidth - this.slideHelperWidth;
                this.hueSlider.style.left = hueSlideX + 'px';
                var alphaSlideX = alpha * this.hueAlphaWidth - this.slideHelperWidth;
                this.alphaSlider.style.left = alphaSlideX + 'px';
            }
        },
        {
            key: "updateInput",
            value: function updateInput() {
                if (this.colorFormat === "hex" /* Common.Color.Format.HEX */ ) {
                    this.hexContainer.hidden = false;
                    this.displayContainer.hidden = true;
                    var _this_color_alpha;
                    this.hexValue.value = this.color.asString(((_this_color_alpha = this.color.alpha) !== null && _this_color_alpha !== void 0 ? _this_color_alpha : 1) !== 1 ? "hexa" /* Common.Color.Format.HEXA */  : "hex" /* Common.Color.Format.HEX */ );
                } else {
                    // RGBA, HSLA, HWBA, color() display.
                    this.hexContainer.hidden = true;
                    this.displayContainer.hidden = false;
                    var spec = _ColorFormatSpec_js__WEBPACK_IMPORTED_MODULE_9__.colorFormatSpec[this.colorFormat];
                    var colorValues = spec.toValues(this.color);
                    this.textLabels.textContent = spec.label;
                    for(var i = 0; i < this.textValues.length; ++i){
                        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(this.textValues[i], /** R in RGBA */ i18nString(UIStrings.sInS, {
                            PH1: this.textLabels.textContent.charAt(i),
                            PH2: this.textLabels.textContent
                        }));
                        this.textValues[i].value = String(colorValues[i]);
                    }
                }
            }
        },
        {
            key: "hideSrgbOverlay",
            value: function hideSrgbOverlay() {
                if (this.colorElement.contains(this.srgbOverlay)) {
                    this.colorElement.removeChild(this.srgbOverlay);
                }
            }
        },
        {
            key: "showSrgbOverlay",
            value: function showSrgbOverlay() {
                if (this.contrastDetails && this.contrastDetails.expanded() || this.gamut !== "display-p3" /* SpectrumGamut.DISPLAY_P3 */ ) {
                    return;
                }
                void this.srgbOverlay.render({
                    hue: this.hsv[0],
                    width: this.dragWidth,
                    height: this.dragHeight
                });
                if (!this.colorElement.contains(this.srgbOverlay)) {
                    this.colorElement.appendChild(this.srgbOverlay);
                }
            }
        },
        {
            key: "updateSrgbOverlay",
            value: function updateSrgbOverlay() {
                if (this.gamut === "display-p3" /* SpectrumGamut.DISPLAY_P3 */ ) {
                    this.showSrgbOverlay();
                } else {
                    this.hideSrgbOverlay();
                }
            }
        },
        {
            key: "updateUI",
            value: function updateUI() {
                this.colorElement.style.backgroundColor = getColorFromHsva(this.gamut, [
                    this.hsv[0],
                    1,
                    1,
                    1
                ]).asString();
                if (this.contrastOverlay) {
                    this.contrastOverlay.setDimensions(this.dragWidth, this.dragHeight);
                }
                this.updateSrgbOverlay();
                this.swatch.setColor(this.color, this.colorString());
                this.colorDragElement.style.backgroundColor = this.color.asString("lch" /* Common.Color.Format.LCH */ );
                var noAlpha = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromHSVA(this.hsv.slice(0, 3).concat(1));
                this.alphaElementBackground.style.backgroundImage = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.sprintf('linear-gradient(to right, rgba(0,0,0,0), %s)', noAlpha.asString("lch" /* Common.Color.Format.LCH */ ));
                this.hueElement.classList.toggle('display-p3', doesFormatSupportDisplayP3(this.colorFormat));
            }
        },
        {
            key: "showFormatPicker",
            value: function showFormatPicker(event) {
                var _this = this;
                return _async_to_generator(function() {
                    var contextMenu;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                contextMenu = new _FormatPickerContextMenu_js__WEBPACK_IMPORTED_MODULE_12__.FormatPickerContextMenu(_this.color);
                                _this.isFormatPickerShown = true;
                                return [
                                    4,
                                    contextMenu.show(event, function(newColor) {
                                        _this.innerSetColor(newColor, undefined, undefined, newColor.format(), ChangeSource.Other);
                                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.colorConvertedFrom(1 /* Host.UserMetrics.ColorConvertedFrom.ColorPicker */ );
                                    })
                                ];
                            case 1:
                                _state.sent();
                                _this.isFormatPickerShown = false;
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
     * If the pasted input is parsable as a color, applies it converting to the current user format
     */ key: "pasted",
            value: function pasted(event) {
                if (!event.clipboardData) {
                    return;
                }
                var text = event.clipboardData.getData('text');
                var color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(text);
                if (!color) {
                    return;
                }
                this.innerSetColor(color, text, undefined /* colorName */ , undefined /* colorFormat */ , ChangeSource.Other);
                event.preventDefault();
            }
        },
        {
            key: "inputChanged",
            value: function inputChanged(event) {
                var inputElement = event.currentTarget;
                var newValue = _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createReplacementString(inputElement.value, event);
                if (newValue) {
                    inputElement.value = newValue;
                    inputElement.selectionStart = 0;
                    inputElement.selectionEnd = newValue.length;
                    event.consume(true);
                }
                var color = null;
                var colorFormat;
                if (this.colorFormat === "hex" /* Common.Color.Format.HEX */ ) {
                    color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(this.hexValue.value);
                } else {
                    var spec = _ColorFormatSpec_js__WEBPACK_IMPORTED_MODULE_9__.colorFormatSpec[this.colorFormat];
                    var colorTextValues = this.textValues.map(function(element) {
                        return element.value;
                    });
                    if (colorTextValues.length !== 4) {
                        // Somehow the `textValues` array updated to contain more elements
                        // This shouldn't happen.
                        return;
                    }
                    // Since we know that `textValues` is an array with 4 elements we're safe
                    // to assert that `colorTextValues` is an array with 4 strings.
                    color = spec.fromValues(colorTextValues);
                }
                if (!color) {
                    return;
                }
                this.innerSetColor(color, undefined, undefined /* colorName */ , colorFormat, ChangeSource.Input);
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                this.registerCSSFiles([
                    _spectrum_css_js__WEBPACK_IMPORTED_MODULE_13__["default"]
                ]);
                this.hueAlphaWidth = this.hueElement.offsetWidth;
                this.slideHelperWidth = this.hueSlider.offsetWidth / 2;
                this.dragWidth = this.colorElement.offsetWidth;
                this.dragHeight = this.colorElement.offsetHeight;
                this.colorDragElementHeight = this.colorDragElement.offsetHeight / 2;
                this.innerSetColor(undefined, undefined, undefined /* colorName */ , undefined, ChangeSource.Model);
                // When flag is turned on, eye dropper is not turned on by default.
                // This is because the global change of the cursor into a dropper will disturb the user.
                if (!IS_NATIVE_EYE_DROPPER_AVAILABLE) {
                    void this.toggleColorPicker(true);
                } else {
                    this.colorPickerButton.setToggled(false);
                }
                if (this.contrastDetails && this.contrastDetailsBackgroundColorPickedToggledBound) {
                    this.contrastDetails.addEventListener("BackgroundColorPickerWillBeToggled" /* ContrastDetailsEvents.BackgroundColorPickerWillBeToggled */ , this.contrastDetailsBackgroundColorPickedToggledBound);
                }
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                void this.toggleColorPicker(false);
                if (this.contrastDetails && this.contrastDetailsBackgroundColorPickedToggledBound) {
                    this.contrastDetails.removeEventListener("BackgroundColorPickerWillBeToggled" /* ContrastDetailsEvents.BackgroundColorPickerWillBeToggled */ , this.contrastDetailsBackgroundColorPickedToggledBound);
                }
            }
        },
        {
            key: "toggleColorPicker",
            value: function toggleColorPicker(enabled) {
                var _this = this;
                return _async_to_generator(function() {
                    var eyeDropper, hexColor, color, error, _this_eyeDropperAbortController;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (enabled === undefined) {
                                    enabled = !_this.colorPickerButton.isToggled();
                                }
                                _this.colorPickerButton.setToggled(enabled);
                                // This is to make sure that only one picker is open at a time
                                // Also have a look at this.contrastDetailsBackgroundColorPickedToggled
                                if (_this.contrastDetails && enabled && _this.contrastDetails.backgroundColorPickerEnabled()) {
                                    _this.contrastDetails.toggleBackgroundColorPicker(false);
                                }
                                if (!!IS_NATIVE_EYE_DROPPER_AVAILABLE) return [
                                    3,
                                    1
                                ];
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.setEyeDropperActive(enabled);
                                if (enabled) {
                                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.EyeDropperPickedColor, _this.colorPickedBound);
                                } else {
                                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.removeEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.EyeDropperPickedColor, _this.colorPickedBound);
                                }
                                return [
                                    3,
                                    7
                                ];
                            case 1:
                                if (!(IS_NATIVE_EYE_DROPPER_AVAILABLE && enabled)) return [
                                    3,
                                    6
                                ];
                                // Use EyeDropper API, can pick up colors outside the browser window,
                                // Note: The current EyeDropper API is not designed to pick up colors continuously.
                                // Wait for TypeScript to support the definition of EyeDropper API:
                                // https://github.com/microsoft/TypeScript/issues/48638
                                /* eslint-disable  @typescript-eslint/no-explicit-any */ eyeDropper = new window.EyeDropper();
                                _this.eyeDropperAbortController = new AbortController();
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    4,
                                    ,
                                    5
                                ]);
                                return [
                                    4,
                                    eyeDropper.open({
                                        signal: _this.eyeDropperAbortController.signal
                                    })
                                ];
                            case 3:
                                hexColor = _state.sent();
                                color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(hexColor.sRGBHex);
                                _this.innerSetColor(color !== null && color !== void 0 ? color : undefined, '', undefined /* colorName */ , undefined, ChangeSource.Other);
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                error = _state.sent();
                                if (error.name !== 'AbortError') {
                                    console.error(error);
                                }
                                return [
                                    3,
                                    5
                                ];
                            case 5:
                                _this.colorPickerButton.setToggled(false);
                                return [
                                    3,
                                    7
                                ];
                            case 6:
                                if (IS_NATIVE_EYE_DROPPER_AVAILABLE && !enabled) {
                                    ;
                                    (_this_eyeDropperAbortController = _this.eyeDropperAbortController) === null || _this_eyeDropperAbortController === void 0 ? void 0 : _this_eyeDropperAbortController.abort();
                                    _this.eyeDropperAbortController = null;
                                }
                                _state.label = 7;
                            case 7:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "colorPicked",
            value: function colorPicked(param) {
                var rgbColor = param.data;
                var rgba = [
                    rgbColor.r,
                    rgbColor.g,
                    rgbColor.b,
                    (rgbColor.a / 2.55 | 0) / 100
                ];
                var color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromRGBA(rgba);
                this.innerSetColor(color, '', undefined /* colorName */ , undefined, ChangeSource.Other);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.bringToFront();
            }
        }
    ]);
    return Spectrum;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox));
var ChangeSource = {
    Input: 'Input',
    Model: 'Model',
    Other: 'Other'
};
var COLOR_CHIP_SIZE = 24;
var ITEMS_PER_PALETTE_ROW = 8;
var GeneratedPaletteTitle = 'Page colors';
var PaletteGenerator = /*#__PURE__*/ function() {
    "use strict";
    function PaletteGenerator(callback) {
        _class_call_check(this, PaletteGenerator);
        _define_property(this, "callback", void 0);
        _define_property(this, "frequencyMap", void 0);
        this.callback = callback;
        this.frequencyMap = new Map();
        var stylesheetPromises = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSModel.CSSModel)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var cssModel = _step.value;
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = cssModel.allStyleSheets()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var stylesheet = _step1.value;
                        stylesheetPromises.push(this.processStylesheet(stylesheet));
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
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
        void Promise.all(stylesheetPromises).catch(function(error) {
            console.error(error);
        }).then(this.finish.bind(this));
    }
    _create_class(PaletteGenerator, [
        {
            key: "frequencyComparator",
            value: function frequencyComparator(a, b) {
                return this.frequencyMap.get(b) - this.frequencyMap.get(a);
            }
        },
        {
            key: "finish",
            value: function finish() {
                function hueComparator(a, b) {
                    var hsva = paletteColors.get(a).as("hsl" /* Common.Color.Format.HSL */ ).hsva();
                    var hsvb = paletteColors.get(b).as("hsl" /* Common.Color.Format.HSL */ ).hsva();
                    // First trim the shades of gray
                    if (hsvb[1] < 0.12 && hsva[1] < 0.12) {
                        return hsvb[2] * hsvb[3] - hsva[2] * hsva[3];
                    }
                    if (hsvb[1] < 0.12) {
                        return -1;
                    }
                    if (hsva[1] < 0.12) {
                        return 1;
                    }
                    // Equal hue -> sort by sat
                    if (hsvb[0] === hsva[0]) {
                        return hsvb[1] * hsvb[3] - hsva[1] * hsva[3];
                    }
                    return (hsvb[0] + 0.94) % 1 - (hsva[0] + 0.94) % 1;
                }
                var colors = _to_consumable_array(this.frequencyMap.keys());
                colors = colors.sort(this.frequencyComparator.bind(this));
                var paletteColors = new Map();
                var colorsPerRow = 24;
                while(paletteColors.size < colorsPerRow && colors.length){
                    var colorText = colors.shift();
                    var color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colorText);
                    if (!color) {
                        continue;
                    }
                    paletteColors.set(colorText, color);
                }
                this.callback({
                    title: GeneratedPaletteTitle,
                    colors: _to_consumable_array(paletteColors.keys()).sort(hueComparator),
                    colorNames: [],
                    mutable: false,
                    matchUserFormat: undefined
                });
            }
        },
        {
            key: "processStylesheet",
            value: function processStylesheet(stylesheet) {
                var _this = this;
                return _async_to_generator(function() {
                    var text, regexResult, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, c, index, _this_frequencyMap_get, frequency;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    stylesheet.requestContent()
                                ];
                            case 1:
                                text = _state.sent().content || '';
                                text = text.toLowerCase();
                                regexResult = text.matchAll(/((?:rgb|hsl|hwb)a?\([^)]+\)|#[0-9a-f]{6}|#[0-9a-f]{3})/g);
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = regexResult[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        _step_value = _step.value, c = _step_value[0], index = _step_value.index;
                                        // Check whether the match occured in a property value and not in a property name or a selector by verifying
                                        // that there's no colon after the match and before the next semicolon.
                                        if (text.indexOf(';', index) < 0 || text.indexOf(':', index) > -1 && text.indexOf(':', index) < text.indexOf(';', index)) {
                                            continue;
                                        }
                                        ;
                                        frequency = 1 + ((_this_frequencyMap_get = _this.frequencyMap.get(c)) !== null && _this_frequencyMap_get !== void 0 ? _this_frequencyMap_get : 0);
                                        _this.frequencyMap.set(c, frequency);
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
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return PaletteGenerator;
}();
var MaterialPaletteShades = new Map([
    [
        '#F44336',
        [
            '#FFEBEE',
            '#FFCDD2',
            '#EF9A9A',
            '#E57373',
            '#EF5350',
            '#F44336',
            '#E53935',
            '#D32F2F',
            '#C62828',
            '#B71C1C'
        ]
    ],
    [
        '#E91E63',
        [
            '#FCE4EC',
            '#F8BBD0',
            '#F48FB1',
            '#F06292',
            '#EC407A',
            '#E91E63',
            '#D81B60',
            '#C2185B',
            '#AD1457',
            '#880E4F'
        ]
    ],
    [
        '#9C27B0',
        [
            '#F3E5F5',
            '#E1BEE7',
            '#CE93D8',
            '#BA68C8',
            '#AB47BC',
            '#9C27B0',
            '#8E24AA',
            '#7B1FA2',
            '#6A1B9A',
            '#4A148C'
        ]
    ],
    [
        '#673AB7',
        [
            '#EDE7F6',
            '#D1C4E9',
            '#B39DDB',
            '#9575CD',
            '#7E57C2',
            '#673AB7',
            '#5E35B1',
            '#512DA8',
            '#4527A0',
            '#311B92'
        ]
    ],
    [
        '#3F51B5',
        [
            '#E8EAF6',
            '#C5CAE9',
            '#9FA8DA',
            '#7986CB',
            '#5C6BC0',
            '#3F51B5',
            '#3949AB',
            '#303F9F',
            '#283593',
            '#1A237E'
        ]
    ],
    [
        '#2196F3',
        [
            '#E3F2FD',
            '#BBDEFB',
            '#90CAF9',
            '#64B5F6',
            '#42A5F5',
            '#2196F3',
            '#1E88E5',
            '#1976D2',
            '#1565C0',
            '#0D47A1'
        ]
    ],
    [
        '#03A9F4',
        [
            '#E1F5FE',
            '#B3E5FC',
            '#81D4FA',
            '#4FC3F7',
            '#29B6F6',
            '#03A9F4',
            '#039BE5',
            '#0288D1',
            '#0277BD',
            '#01579B'
        ]
    ],
    [
        '#00BCD4',
        [
            '#E0F7FA',
            '#B2EBF2',
            '#80DEEA',
            '#4DD0E1',
            '#26C6DA',
            '#00BCD4',
            '#00ACC1',
            '#0097A7',
            '#00838F',
            '#006064'
        ]
    ],
    [
        '#009688',
        [
            '#E0F2F1',
            '#B2DFDB',
            '#80CBC4',
            '#4DB6AC',
            '#26A69A',
            '#009688',
            '#00897B',
            '#00796B',
            '#00695C',
            '#004D40'
        ]
    ],
    [
        '#4CAF50',
        [
            '#E8F5E9',
            '#C8E6C9',
            '#A5D6A7',
            '#81C784',
            '#66BB6A',
            '#4CAF50',
            '#43A047',
            '#388E3C',
            '#2E7D32',
            '#1B5E20'
        ]
    ],
    [
        '#8BC34A',
        [
            '#F1F8E9',
            '#DCEDC8',
            '#C5E1A5',
            '#AED581',
            '#9CCC65',
            '#8BC34A',
            '#7CB342',
            '#689F38',
            '#558B2F',
            '#33691E'
        ]
    ],
    [
        '#CDDC39',
        [
            '#F9FBE7',
            '#F0F4C3',
            '#E6EE9C',
            '#DCE775',
            '#D4E157',
            '#CDDC39',
            '#C0CA33',
            '#AFB42B',
            '#9E9D24',
            '#827717'
        ]
    ],
    [
        '#FFEB3B',
        [
            '#FFFDE7',
            '#FFF9C4',
            '#FFF59D',
            '#FFF176',
            '#FFEE58',
            '#FFEB3B',
            '#FDD835',
            '#FBC02D',
            '#F9A825',
            '#F57F17'
        ]
    ],
    [
        '#FFC107',
        [
            '#FFF8E1',
            '#FFECB3',
            '#FFE082',
            '#FFD54F',
            '#FFCA28',
            '#FFC107',
            '#FFB300',
            '#FFA000',
            '#FF8F00',
            '#FF6F00'
        ]
    ],
    [
        '#FF9800',
        [
            '#FFF3E0',
            '#FFE0B2',
            '#FFCC80',
            '#FFB74D',
            '#FFA726',
            '#FF9800',
            '#FB8C00',
            '#F57C00',
            '#EF6C00',
            '#E65100'
        ]
    ],
    [
        '#FF5722',
        [
            '#FBE9E7',
            '#FFCCBC',
            '#FFAB91',
            '#FF8A65',
            '#FF7043',
            '#FF5722',
            '#F4511E',
            '#E64A19',
            '#D84315',
            '#BF360C'
        ]
    ],
    [
        '#795548',
        [
            '#EFEBE9',
            '#D7CCC8',
            '#BCAAA4',
            '#A1887F',
            '#8D6E63',
            '#795548',
            '#6D4C41',
            '#5D4037',
            '#4E342E',
            '#3E2723'
        ]
    ],
    [
        '#9E9E9E',
        [
            '#FAFAFA',
            '#F5F5F5',
            '#EEEEEE',
            '#E0E0E0',
            '#BDBDBD',
            '#9E9E9E',
            '#757575',
            '#616161',
            '#424242',
            '#212121'
        ]
    ],
    [
        '#607D8B',
        [
            '#ECEFF1',
            '#CFD8DC',
            '#B0BEC5',
            '#90A4AE',
            '#78909C',
            '#607D8B',
            '#546E7A',
            '#455A64',
            '#37474F',
            '#263238'
        ]
    ]
]);
var MaterialPalette = {
    title: 'Material',
    mutable: false,
    matchUserFormat: true,
    colors: _to_consumable_array(MaterialPaletteShades.keys()),
    colorNames: []
};
var Swatch = /*#__PURE__*/ function() {
    "use strict";
    function Swatch(parentElement) {
        _class_call_check(this, Swatch);
        _define_property(this, "colorString", void 0);
        _define_property(this, "swatchInnerElement", void 0);
        _define_property(this, "swatchOverlayElement", void 0);
        _define_property(this, "swatchCopyIcon", void 0);
        var swatchElement = parentElement.createChild('span', 'swatch');
        swatchElement.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.action('copy-color').track({
            click: true
        })));
        this.swatchInnerElement = swatchElement.createChild('span', 'swatch-inner');
        this.swatchOverlayElement = swatchElement.createChild('span', 'swatch-overlay');
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsButton(this.swatchOverlayElement);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setPressed(this.swatchOverlayElement, false);
        this.swatchOverlayElement.tabIndex = 0;
        self.onInvokeElement(this.swatchOverlayElement, this.onCopyText.bind(this));
        this.swatchOverlayElement.addEventListener('mouseout', this.onCopyIconMouseout.bind(this));
        this.swatchOverlayElement.addEventListener('blur', this.onCopyIconMouseout.bind(this));
        this.swatchCopyIcon = _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('copy', 'copy-color-icon');
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Tooltip.Tooltip.install(this.swatchCopyIcon, i18nString(UIStrings.copyColorToClipboard));
        this.swatchOverlayElement.appendChild(this.swatchCopyIcon);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(this.swatchOverlayElement, this.swatchCopyIcon.title);
    }
    _create_class(Swatch, [
        {
            key: "setColor",
            value: function setColor(color, colorString) {
                var lchColor = color.as("lch" /* Common.Color.Format.LCH */ );
                this.swatchInnerElement.style.backgroundColor = lchColor.asString();
                // Show border if the swatch is white.
                this.swatchInnerElement.classList.toggle('swatch-inner-white', lchColor.l > 90);
                this.colorString = colorString || null;
                if (colorString) {
                    this.swatchOverlayElement.hidden = false;
                } else {
                    this.swatchOverlayElement.hidden = true;
                }
            }
        },
        {
            key: "onCopyText",
            value: function onCopyText(event) {
                this.swatchCopyIcon.name = 'checkmark';
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(this.colorString);
                _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setPressed(this.swatchOverlayElement, true);
                event.consume();
            }
        },
        {
            key: "onCopyIconMouseout",
            value: function onCopyIconMouseout() {
                this.swatchCopyIcon.name = 'copy';
                _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setPressed(this.swatchOverlayElement, false);
            }
        }
    ]);
    return Swatch;
} //# sourceMappingURL=Spectrum.js.map
();


}),

}]);