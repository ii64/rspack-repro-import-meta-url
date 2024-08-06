"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_color_picker_ColorFormatSpec_js"], {
"./ui/legacy/components/color_picker/ColorFormatSpec.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  colorFormatSpec: function() { return colorFormatSpec; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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


var roundAndStringify = function(arr) {
    return arr.map(function(el) {
        return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.stringifyWithPrecision(el, 2);
    });
};
var functionParamsText = function(values) {
    return "".concat(values[0], " ").concat(values[1], " ").concat(values[2], " / ").concat(values[3]);
};
var _obj;
var colorFormatSpec = (_obj = {}, _define_property(_obj, "rgb" /* Common.Color.Format.RGB */ , {
    label: 'RGBA',
    toValues: function toValues(color) {
        return roundAndStringify(color.as("rgba" /* Common.Color.Format.RGBA */ ).canonicalRGBA());
    },
    fromValues: function fromValues(values) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("rgb(".concat(functionParamsText(values), ")"));
    }
}), _define_property(_obj, "hsl" /* Common.Color.Format.HSL */ , {
    label: 'HSLA',
    toValues: function toValues(color) {
        var canonicalHslParams = roundAndStringify(color.as("hsla" /* Common.Color.Format.HSLA */ ).canonicalHSLA());
        canonicalHslParams[1] = canonicalHslParams[1] + '%';
        canonicalHslParams[2] = canonicalHslParams[2] + '%';
        return canonicalHslParams;
    },
    fromValues: function fromValues(values) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("hsl(".concat(functionParamsText(values), ")"));
    }
}), _define_property(_obj, "hwb" /* Common.Color.Format.HWB */ , {
    label: 'HWBA',
    toValues: function toValues(color) {
        var canonicalHwbParams = roundAndStringify(color.as("hwba" /* Common.Color.Format.HWBA */ ).canonicalHWBA());
        canonicalHwbParams[1] = canonicalHwbParams[1] + '%';
        canonicalHwbParams[2] = canonicalHwbParams[2] + '%';
        return canonicalHwbParams;
    },
    fromValues: function fromValues(values) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("hwb(".concat(functionParamsText(values), ")"));
    }
}), _define_property(_obj, "lch" /* Common.Color.Format.LCH */ , {
    label: 'lchA',
    toValues: function toValues(color) {
        var lchColor = color.as("lch" /* Common.Color.Format.LCH */ );
        var _lchColor_alpha;
        return roundAndStringify([
            lchColor.l,
            lchColor.c,
            lchColor.h,
            (_lchColor_alpha = lchColor.alpha) !== null && _lchColor_alpha !== void 0 ? _lchColor_alpha : 1
        ]);
    },
    fromValues: function fromValues(values) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("lch(".concat(functionParamsText(values), ")"));
    }
}), _define_property(_obj, "oklch" /* Common.Color.Format.OKLCH */ , {
    label: 'lchA',
    toValues: function toValues(color) {
        var lchColor = color.as("oklch" /* Common.Color.Format.OKLCH */ );
        var _lchColor_alpha;
        return roundAndStringify([
            lchColor.l,
            lchColor.c,
            lchColor.h,
            (_lchColor_alpha = lchColor.alpha) !== null && _lchColor_alpha !== void 0 ? _lchColor_alpha : 1
        ]);
    },
    fromValues: function fromValues(values) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("oklch(".concat(functionParamsText(values), ")"));
    }
}), _define_property(_obj, "lab" /* Common.Color.Format.LAB */ , {
    label: 'labA',
    toValues: function toValues(color) {
        var labColor = color.as("lab" /* Common.Color.Format.LAB */ );
        var _labColor_alpha;
        return roundAndStringify([
            labColor.l,
            labColor.a,
            labColor.b,
            (_labColor_alpha = labColor.alpha) !== null && _labColor_alpha !== void 0 ? _labColor_alpha : 1
        ]);
    },
    fromValues: function fromValues(values) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("lab(".concat(functionParamsText(values), ")"));
    }
}), _define_property(_obj, "oklab" /* Common.Color.Format.OKLAB */ , {
    label: 'labA',
    toValues: function toValues(color) {
        var labColor = color.as("oklab" /* Common.Color.Format.OKLAB */ );
        var _labColor_alpha;
        return roundAndStringify([
            labColor.l,
            labColor.a,
            labColor.b,
            (_labColor_alpha = labColor.alpha) !== null && _labColor_alpha !== void 0 ? _labColor_alpha : 1
        ]);
    },
    fromValues: function fromValues(values) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("oklab(".concat(functionParamsText(values), ")"));
    }
}), _define_property(_obj, "srgb" /* Common.Color.Format.SRGB */ , {
    label: 'RGBA',
    toValues: function toValues(color) {
        var srgbColor = color.as("srgb" /* Common.Color.Format.SRGB */ );
        var _srgbColor_alpha;
        return roundAndStringify([
            srgbColor.p0,
            srgbColor.p1,
            srgbColor.p2,
            (_srgbColor_alpha = srgbColor.alpha) !== null && _srgbColor_alpha !== void 0 ? _srgbColor_alpha : 1
        ]);
    },
    fromValues: function fromValues(values) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(srgb ".concat(functionParamsText(values), ")"));
    }
}), _define_property(_obj, "srgb-linear" /* Common.Color.Format.SRGB_LINEAR */ , {
    label: 'RGBA',
    toValues: function toValues(color) {
        var srgbLinearColor = color.as("srgb-linear" /* Common.Color.Format.SRGB_LINEAR */ );
        var _srgbLinearColor_alpha;
        return roundAndStringify([
            srgbLinearColor.p0,
            srgbLinearColor.p1,
            srgbLinearColor.p2,
            (_srgbLinearColor_alpha = srgbLinearColor.alpha) !== null && _srgbLinearColor_alpha !== void 0 ? _srgbLinearColor_alpha : 1
        ]);
    },
    fromValues: function fromValues(values) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(srgb-linear ".concat(functionParamsText(values), ")"));
    }
}), _define_property(_obj, "display-p3" /* Common.Color.Format.DISPLAY_P3 */ , {
    label: 'RGBA',
    toValues: function toValues(color) {
        var displayP3Color = color.as("display-p3" /* Common.Color.Format.DISPLAY_P3 */ );
        return roundAndStringify([
            displayP3Color.p0,
            displayP3Color.p1,
            displayP3Color.p2,
            1
        ]);
    },
    fromValues: function fromValues(values) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(display-p3 ".concat(functionParamsText(values), ")"));
    }
}), _define_property(_obj, "a98-rgb" /* Common.Color.Format.A98_RGB */ , {
    label: 'RGBA',
    toValues: function toValues(color) {
        var a98Color = color.as("a98-rgb" /* Common.Color.Format.A98_RGB */ );
        var _a98Color_alpha;
        return roundAndStringify([
            a98Color.p0,
            a98Color.p1,
            a98Color.p2,
            (_a98Color_alpha = a98Color.alpha) !== null && _a98Color_alpha !== void 0 ? _a98Color_alpha : 1
        ]);
    },
    fromValues: function fromValues(values) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(a98-rgb ".concat(functionParamsText(values), ")"));
    }
}), _define_property(_obj, "prophoto-rgb" /* Common.Color.Format.PROPHOTO_RGB */ , {
    label: 'RGBA',
    toValues: function toValues(color) {
        var proPhotoRGBColor = color.as("prophoto-rgb" /* Common.Color.Format.PROPHOTO_RGB */ );
        var _proPhotoRGBColor_alpha;
        return roundAndStringify([
            proPhotoRGBColor.p0,
            proPhotoRGBColor.p1,
            proPhotoRGBColor.p2,
            (_proPhotoRGBColor_alpha = proPhotoRGBColor.alpha) !== null && _proPhotoRGBColor_alpha !== void 0 ? _proPhotoRGBColor_alpha : 1
        ]);
    },
    fromValues: function fromValues(values) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(prophoto-rgb ".concat(functionParamsText(values), ")"));
    }
}), _define_property(_obj, "rec2020" /* Common.Color.Format.REC_2020 */ , {
    label: 'RGBA',
    toValues: function toValues(color) {
        var rec2020Color = color.as("rec2020" /* Common.Color.Format.REC_2020 */ );
        var _rec2020Color_alpha;
        return roundAndStringify([
            rec2020Color.p0,
            rec2020Color.p1,
            rec2020Color.p2,
            (_rec2020Color_alpha = rec2020Color.alpha) !== null && _rec2020Color_alpha !== void 0 ? _rec2020Color_alpha : 1
        ]);
    },
    fromValues: function fromValues(values) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(rec2020 ".concat(functionParamsText(values), ")"));
    }
}), _define_property(_obj, "xyz" /* Common.Color.Format.XYZ */ , {
    label: 'xyzA',
    toValues: function toValues(color) {
        var xyzColor = color.as("xyz" /* Common.Color.Format.XYZ */ );
        var _xyzColor_alpha;
        return roundAndStringify([
            xyzColor.p0,
            xyzColor.p1,
            xyzColor.p2,
            (_xyzColor_alpha = xyzColor.alpha) !== null && _xyzColor_alpha !== void 0 ? _xyzColor_alpha : 1
        ]);
    },
    fromValues: function fromValues(values) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(xyz ".concat(functionParamsText(values), ")"));
    }
}), _define_property(_obj, "xyz-d50" /* Common.Color.Format.XYZ_D50 */ , {
    label: 'xyzA',
    toValues: function toValues(color) {
        var xyzColor = color.as("xyz-d50" /* Common.Color.Format.XYZ_D50 */ );
        var _xyzColor_alpha;
        return roundAndStringify([
            xyzColor.p0,
            xyzColor.p1,
            xyzColor.p2,
            (_xyzColor_alpha = xyzColor.alpha) !== null && _xyzColor_alpha !== void 0 ? _xyzColor_alpha : 1
        ]);
    },
    fromValues: function fromValues(values) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(xyz-d50 ".concat(functionParamsText(values), ")"));
    }
}), _define_property(_obj, "xyz-d65" /* Common.Color.Format.XYZ_D65 */ , {
    label: 'xyzA',
    toValues: function toValues(color) {
        var xyzColor = color.as("xyz-d65" /* Common.Color.Format.XYZ_D65 */ );
        var _xyzColor_alpha;
        return roundAndStringify([
            xyzColor.p0,
            xyzColor.p1,
            xyzColor.p2,
            (_xyzColor_alpha = xyzColor.alpha) !== null && _xyzColor_alpha !== void 0 ? _xyzColor_alpha : 1
        ]);
    },
    fromValues: function fromValues(values) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(xyz-d65 ".concat(functionParamsText(values), ")"));
    }
}), _obj); //# sourceMappingURL=ColorFormatSpec.js.map


}),

}]);