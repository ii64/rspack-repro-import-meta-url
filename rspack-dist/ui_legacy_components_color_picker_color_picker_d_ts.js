"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_color_picker_color_picker_d_ts"], {
"./ui/legacy/components/color_picker/ContrastInfo.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ContrastInfo: function() { return ContrastInfo; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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

var ContrastInfo = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(ContrastInfo, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(ContrastInfo);
    function ContrastInfo(contrastInfo) {
        _class_call_check(this, ContrastInfo);
        var _this;
        var _Common_Color_parse;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "isNullInternal", void 0);
        _define_property(_assert_this_initialized(_this), "contrastRatioInternal", void 0);
        _define_property(_assert_this_initialized(_this), "contrastRatioAPCAInternal", void 0);
        _define_property(_assert_this_initialized(_this), "contrastRatioThresholds", void 0);
        _define_property(_assert_this_initialized(_this), "contrastRationAPCAThreshold", void 0);
        _define_property(_assert_this_initialized(_this), "fgColor", void 0);
        _define_property(_assert_this_initialized(_this), "bgColorInternal", void 0);
        _define_property(_assert_this_initialized(_this), "colorFormatInternal", void 0);
        _this.isNullInternal = true;
        _this.contrastRatioInternal = null;
        _this.contrastRatioAPCAInternal = null;
        _this.contrastRatioThresholds = null;
        _this.contrastRationAPCAThreshold = 0;
        _this.fgColor = null;
        _this.bgColorInternal = null;
        if (!contrastInfo) {
            return _possible_constructor_return(_this);
        }
        if (!contrastInfo.computedFontSize || !contrastInfo.computedFontWeight || !contrastInfo.backgroundColors || contrastInfo.backgroundColors.length !== 1) {
            return _possible_constructor_return(_this);
        }
        _this.isNullInternal = false;
        _this.contrastRatioThresholds = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getContrastThreshold(contrastInfo.computedFontSize, contrastInfo.computedFontWeight);
        _this.contrastRationAPCAThreshold = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getAPCAThreshold(contrastInfo.computedFontSize, contrastInfo.computedFontWeight);
        var bgColorText = contrastInfo.backgroundColors[0];
        var bgColor = (_Common_Color_parse = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(bgColorText)) === null || _Common_Color_parse === void 0 ? void 0 : _Common_Color_parse.asLegacyColor();
        if (bgColor) {
            _this.setBgColorInternal(bgColor);
        }
        return _this;
    }
    _create_class(ContrastInfo, [
        {
            key: "isNull",
            value: function isNull() {
                return this.isNullInternal;
            }
        },
        {
            key: "setColor",
            value: function setColor(fgColor, colorFormat) {
                this.fgColor = fgColor;
                this.colorFormatInternal = colorFormat;
                this.updateContrastRatio();
                this.dispatchEventToListeners("ContrastInfoUpdated" /* Events.ContrastInfoUpdated */ );
            }
        },
        {
            key: "colorFormat",
            value: function colorFormat() {
                return this.colorFormatInternal;
            }
        },
        {
            key: "color",
            value: function color() {
                return this.fgColor;
            }
        },
        {
            key: "contrastRatio",
            value: function contrastRatio() {
                return this.contrastRatioInternal;
            }
        },
        {
            key: "contrastRatioAPCA",
            value: function contrastRatioAPCA() {
                return this.contrastRatioAPCAInternal;
            }
        },
        {
            key: "contrastRatioAPCAThreshold",
            value: function contrastRatioAPCAThreshold() {
                return this.contrastRationAPCAThreshold;
            }
        },
        {
            key: "setBgColor",
            value: function setBgColor(bgColor) {
                this.setBgColorInternal(bgColor);
                this.dispatchEventToListeners("ContrastInfoUpdated" /* Events.ContrastInfoUpdated */ );
            }
        },
        {
            key: "setBgColorInternal",
            value: function setBgColorInternal(bgColor) {
                this.bgColorInternal = bgColor;
                if (!this.fgColor) {
                    return;
                }
                var fgRGBA = this.fgColor.rgba();
                // If we have a semi-transparent background color over an unknown
                // background, draw the line for the "worst case" scenario: where
                // the unknown background is the same color as the text.
                if (bgColor.hasAlpha()) {
                    var blendedRGBA = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.blendColors(bgColor.rgba(), fgRGBA);
                    this.bgColorInternal = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy(blendedRGBA, "rgba" /* Common.Color.Format.RGBA */ );
                }
                this.contrastRatioInternal = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatio(fgRGBA, this.bgColorInternal.rgba());
                this.contrastRatioAPCAInternal = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatioAPCA(this.fgColor.rgba(), this.bgColorInternal.rgba());
            }
        },
        {
            key: "bgColor",
            value: function bgColor() {
                return this.bgColorInternal;
            }
        },
        {
            key: "updateContrastRatio",
            value: function updateContrastRatio() {
                if (!this.bgColorInternal || !this.fgColor) {
                    return;
                }
                this.contrastRatioInternal = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatio(this.fgColor.rgba(), this.bgColorInternal.rgba());
                this.contrastRatioAPCAInternal = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatioAPCA(this.fgColor.rgba(), this.bgColorInternal.rgba());
            }
        },
        {
            key: "contrastRatioThreshold",
            value: function contrastRatioThreshold(level) {
                if (!this.contrastRatioThresholds) {
                    return null;
                }
                return this.contrastRatioThresholds[level];
            }
        }
    ]);
    return ContrastInfo;
} //# sourceMappingURL=ContrastInfo.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);


}),
"./ui/legacy/components/color_picker/color_picker.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ColorFormatSpec: function() { return /* reexport module object */ _ColorFormatSpec_js__WEBPACK_IMPORTED_MODULE_0__; },
  ContrastDetails: function() { return /* reexport module object */ _ContrastDetails_js__WEBPACK_IMPORTED_MODULE_1__; },
  ContrastInfo: function() { return /* reexport module object */ _ContrastInfo_js__WEBPACK_IMPORTED_MODULE_2__; },
  ContrastOverlay: function() { return /* reexport module object */ _ContrastOverlay_js__WEBPACK_IMPORTED_MODULE_3__; },
  FormatPickerContextMenu: function() { return /* reexport module object */ _FormatPickerContextMenu_js__WEBPACK_IMPORTED_MODULE_4__; },
  Spectrum: function() { return /* reexport module object */ _Spectrum_js__WEBPACK_IMPORTED_MODULE_5__; }
});
/* harmony import */var _ColorFormatSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorFormatSpec.js */ "./ui/legacy/components/color_picker/ColorFormatSpec.js");
/* harmony import */var _ContrastDetails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContrastDetails.js */ "./ui/legacy/components/color_picker/ContrastDetails.js");
/* harmony import */var _ContrastInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContrastInfo.js */ "./ui/legacy/components/color_picker/ContrastInfo.js");
/* harmony import */var _ContrastOverlay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContrastOverlay.js */ "./ui/legacy/components/color_picker/ContrastOverlay.js");
/* harmony import */var _FormatPickerContextMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormatPickerContextMenu.js */ "./ui/legacy/components/color_picker/FormatPickerContextMenu.js");
/* harmony import */var _Spectrum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spectrum.js */ "./ui/legacy/components/color_picker/Spectrum.js");









}),

}]);