"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_FontEditorUtils_js"], {
"./ui/legacy/components/inline_editor/FontEditorUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FontFamilyRegex: function() { return FontFamilyRegex; },
  FontPropertiesRegex: function() { return FontPropertiesRegex; },
  FontSizeStaticParams: function() { return FontSizeStaticParams; },
  FontWeightStaticParams: function() { return FontWeightStaticParams; },
  GenericFonts: function() { return GenericFonts; },
  GlobalValues: function() { return GlobalValues; },
  LetterSpacingStaticParams: function() { return LetterSpacingStaticParams; },
  LineHeightStaticParams: function() { return LineHeightStaticParams; },
  SystemFonts: function() { return SystemFonts; },
  generateComputedFontArray: function() { return generateComputedFontArray; },
  getRoundingPrecision: function() { return getRoundingPrecision; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _panels_css_overview_css_overview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/css_overview/css_overview.js */ "./panels/css_overview/css_overview.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
var _fontSizeKeyValuesArray, _lineHeightKeyValuesArray, _fontWeightKeyValuesArray, _letterSpacingKeyValuesArray;


// The following regexes are used within in the StylesSidebarPropertyRenderer class
// and will parse both invalid and valid values. They both match full strings.
// [^- ][a-zA-Z-]+ matches property key values (e.g. smaller, x-large, initial)
// -?\+?(?:[0-9]+\.[0-9]+|\.[0-9]+|[0-9]+) matches numeric property values (e.g. -.23, 3.3, 55)
// [a-zA-Z%]{0,4} matches the units of numeric property values (e.g. px, vmin, or blank units)
var FontPropertiesRegex = /^[^- ][a-zA-Z-]+$|^-?\+?(?:[0-9]+\.[0-9]+|\.[0-9]+|[0-9]+)[a-zA-Z%]{0,4}$/;
// "[\w \,-]+",? ? matches double quoted values and the trailing comma/space (e.g. "Tahoma", )
// ('[\w \,-]+',? ?) matches single quoted values and the trailing comma/space (e.g. 'Segoe UI', )
// ([\w \,-]+,? ?) matches non quoted values and the trailing comma/space (e.g. Helvetica)
// (?: ...)+ will match 1 or more of the groups above such that it would match a value with fallbacks (e.g. "Tahoma", 'Segoe UI', Helvetica)
var FontFamilyRegex = /^"[\w \,-]+"$|^'[\w \,-]+'$|^[\w \-]+$/;
// The following regexes are used within the Font Editor and will only parse valid property values.
// Example Input/Outputs:
// font-size: "20px" -> (20)(px)
// line-height: "0.5em" -> (0.5)(em)
// font-weight: "300" -> (300);
// letter-spacing: -.625rem -> (-.625)(rem)
var fontSizeRegex = /(^[\+\d\.]+)([a-zA-Z%]+)/;
var lineHeightRegex = /(^[\+\d\.]+)([a-zA-Z%]*)/;
var fontWeightRegex = /(^[\+\d\.]+)/;
var letterSpacingRegex = /([\+-0-9\.]+)([a-zA-Z%]+)/;
var fontSizeUnits = new Set([
    'px',
    'em',
    'rem',
    '%',
    'vh',
    'vw'
]);
var lineHeightUnits = new Set([
    '',
    'px',
    'em',
    '%'
]);
var letterSpacingUnits = new Set([
    'em',
    'rem',
    'px'
]);
var fontSizeKeyValuesArray = [
    '',
    'xx-small',
    'x-small',
    'smaller',
    'small',
    'medium',
    'large',
    'larger',
    'x-large',
    'xx-large'
];
var lineHeightKeyValuesArray = [
    '',
    'normal'
];
var fontWeightKeyValuesArray = [
    '',
    'lighter',
    'normal',
    'bold',
    'bolder'
];
var letterSpacingKeyValuesArray = [
    '',
    'normal'
];
var GlobalValues = [
    'inherit',
    'initial',
    'unset'
];
(_fontSizeKeyValuesArray = fontSizeKeyValuesArray).push.apply(_fontSizeKeyValuesArray, _to_consumable_array(GlobalValues));
(_lineHeightKeyValuesArray = lineHeightKeyValuesArray).push.apply(_lineHeightKeyValuesArray, _to_consumable_array(GlobalValues));
(_fontWeightKeyValuesArray = fontWeightKeyValuesArray).push.apply(_fontWeightKeyValuesArray, _to_consumable_array(GlobalValues));
(_letterSpacingKeyValuesArray = letterSpacingKeyValuesArray).push.apply(_letterSpacingKeyValuesArray, _to_consumable_array(GlobalValues));
var fontSizeKeyValues = new Set(fontSizeKeyValuesArray);
var lineHeightKeyValues = new Set(lineHeightKeyValuesArray);
var fontWeightKeyValues = new Set(fontWeightKeyValuesArray);
var letterSpacingKeyValues = new Set(letterSpacingKeyValuesArray);
var fontSizeRangeMap = new Map([
    // Common Units
    [
        'px',
        {
            min: 0,
            max: 72,
            step: 1
        }
    ],
    [
        'em',
        {
            min: 0,
            max: 4.5,
            step: .1
        }
    ],
    [
        'rem',
        {
            min: 0,
            max: 4.5,
            step: .1
        }
    ],
    [
        '%',
        {
            min: 0,
            max: 450,
            step: 1
        }
    ],
    [
        'vh',
        {
            min: 0,
            max: 10,
            step: .1
        }
    ],
    [
        'vw',
        {
            min: 0,
            max: 10,
            step: .1
        }
    ],
    // Extra Units
    [
        'vmin',
        {
            min: 0,
            max: 10,
            step: .1
        }
    ],
    [
        'vmax',
        {
            min: 0,
            max: 10,
            step: .1
        }
    ],
    [
        'cm',
        {
            min: 0,
            max: 2,
            step: .1
        }
    ],
    [
        'mm',
        {
            min: 0,
            max: 20,
            step: .1
        }
    ],
    [
        'in',
        {
            min: 0,
            max: 1,
            step: .01
        }
    ],
    [
        'pt',
        {
            min: 0,
            max: 54,
            step: 1
        }
    ],
    [
        'pc',
        {
            min: 0,
            max: 4.5,
            step: .1
        }
    ]
]);
var lineHeightRangeMap = new Map([
    // Common Units
    [
        '',
        {
            min: 0,
            max: 2,
            step: .1
        }
    ],
    [
        'em',
        {
            min: 0,
            max: 2,
            step: .1
        }
    ],
    [
        '%',
        {
            min: 0,
            max: 200,
            step: 1
        }
    ],
    [
        'px',
        {
            min: 0,
            max: 32,
            step: 1
        }
    ],
    // Extra Units
    [
        'rem',
        {
            min: 0,
            max: 2,
            step: .1
        }
    ],
    [
        'vh',
        {
            min: 0,
            max: 4.5,
            step: .1
        }
    ],
    [
        'vw',
        {
            min: 0,
            max: 4.5,
            step: .1
        }
    ],
    [
        'vmin',
        {
            min: 0,
            max: 4.5,
            step: .1
        }
    ],
    [
        'vmax',
        {
            min: 0,
            max: 4.5,
            step: .1
        }
    ],
    [
        'cm',
        {
            min: 0,
            max: 1,
            step: .1
        }
    ],
    [
        'mm',
        {
            min: 0,
            max: 8.5,
            step: .1
        }
    ],
    [
        'in',
        {
            min: 0,
            max: .5,
            step: .1
        }
    ],
    [
        'pt',
        {
            min: 0,
            max: 24,
            step: 1
        }
    ],
    [
        'pc',
        {
            min: 0,
            max: 2,
            step: .1
        }
    ]
]);
var fontWeightRangeMap = new Map([
    [
        '',
        {
            min: 100,
            max: 700,
            step: 100
        }
    ]
]);
var letterSpacingRangeMap = new Map([
    // Common Units
    [
        'px',
        {
            min: -10,
            max: 10,
            step: .01
        }
    ],
    [
        'em',
        {
            min: -0.625,
            max: 0.625,
            step: .001
        }
    ],
    [
        'rem',
        {
            min: -0.625,
            max: 0.625,
            step: .001
        }
    ],
    // Extra Units
    [
        '%',
        {
            min: -62.5,
            max: 62.5,
            step: .1
        }
    ],
    [
        'vh',
        {
            min: -1.5,
            max: 1.5,
            step: .01
        }
    ],
    [
        'vw',
        {
            min: -1.5,
            max: 1.5,
            step: .01
        }
    ],
    [
        'vmin',
        {
            min: -1.5,
            max: 1.5,
            step: .01
        }
    ],
    [
        'vmax',
        {
            min: -1.5,
            max: 1.5,
            step: .01
        }
    ],
    [
        'cm',
        {
            min: -0.25,
            max: .025,
            step: .001
        }
    ],
    [
        'mm',
        {
            min: -2.5,
            max: 2.5,
            step: .01
        }
    ],
    [
        'in',
        {
            min: -0.1,
            max: 0.1,
            step: .001
        }
    ],
    [
        'pt',
        {
            min: -7.5,
            max: 7.5,
            step: .01
        }
    ],
    [
        'pc',
        {
            min: -0.625,
            max: 0.625,
            step: .001
        }
    ]
]);
var FontSizeStaticParams = {
    regex: fontSizeRegex,
    units: fontSizeUnits,
    keyValues: fontSizeKeyValues,
    rangeMap: fontSizeRangeMap,
    defaultUnit: 'px'
};
var LineHeightStaticParams = {
    regex: lineHeightRegex,
    units: lineHeightUnits,
    keyValues: lineHeightKeyValues,
    rangeMap: lineHeightRangeMap,
    defaultUnit: ''
};
var FontWeightStaticParams = {
    regex: fontWeightRegex,
    units: null,
    keyValues: fontWeightKeyValues,
    rangeMap: fontWeightRangeMap,
    defaultUnit: null
};
var LetterSpacingStaticParams = {
    regex: letterSpacingRegex,
    units: letterSpacingUnits,
    keyValues: letterSpacingKeyValues,
    rangeMap: letterSpacingRangeMap,
    defaultUnit: 'em'
};
var SystemFonts = [
    'Arial',
    'Bookman',
    'Candara',
    'Comic Sans MS',
    'Courier New',
    'Garamond',
    'Georgia',
    'Helvetica',
    'Impact',
    'Palatino',
    'Roboto',
    'Times New Roman',
    'Verdana'
];
var GenericFonts = [
    'serif',
    'sans-serif',
    'monspace',
    'cursive',
    'fantasy',
    'system-ui',
    'ui-serif',
    'ui-sans-serif',
    'ui-monospace',
    'ui-rounded',
    'emoji',
    'math',
    'fangsong'
];
function generateComputedFontArray() {
    return _generateComputedFontArray.apply(this, arguments);
}
function _generateComputedFontArray() {
    _generateComputedFontArray = _async_to_generator(function() {
        var modelArray, cssOverviewModel, fontInfo, computedFontArray;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    modelArray = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().models(_panels_css_overview_css_overview_js__WEBPACK_IMPORTED_MODULE_1__.CSSOverviewModel.CSSOverviewModel);
                    if (!modelArray) return [
                        3,
                        2
                    ];
                    cssOverviewModel = modelArray[0];
                    if (!cssOverviewModel) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        cssOverviewModel.getNodeStyleStats()
                    ];
                case 1:
                    fontInfo = _state.sent().fontInfo;
                    computedFontArray = Array.from(fontInfo.keys());
                    return [
                        2,
                        computedFontArray
                    ];
                case 2:
                    return [
                        2,
                        []
                    ];
            }
        });
    });
    return _generateComputedFontArray.apply(this, arguments);
}
function getRoundingPrecision(step) {
    switch(step){
        case 1:
            return 0;
        case .1:
            return 1;
        case .01:
            return 2;
        case .001:
            return 3;
        default:
            return 0;
    }
} //# sourceMappingURL=FontEditorUtils.js.map


}),

}]);