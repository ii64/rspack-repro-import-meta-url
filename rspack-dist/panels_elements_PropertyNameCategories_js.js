"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_PropertyNameCategories_js"], {
"./panels/elements/PropertyNameCategories.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DefaultCategoryOrder: function() { return DefaultCategoryOrder; },
  categorizePropertyName: function() { return categorizePropertyName; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

var DefaultCategoryOrder = [
    "Layout" /* Category.Layout */ ,
    "Text" /* Category.Text */ ,
    "Appearance" /* Category.Appearance */ ,
    "Animation" /* Category.Animation */ ,
    "CSS Variables" /* Category.CSSVariables */ ,
    "Grid" /* Category.Grid */ ,
    "Flex" /* Category.Flex */ ,
    "Table" /* Category.Table */ ,
    "Generated Content" /* Category.GeneratedContent */ ,
    "Other" /* Category.Other */ 
];
// These categories are manually updated for now. In the future
// we can try to find a way to automatically categorize them
// or find an authoritative source for the categorization:
// https://crbug.com/1117405
var CategorizedProperties = new Map([
    [
        "Layout" /* Category.Layout */ ,
        [
            'display',
            'margin',
            'padding',
            'height',
            'width',
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'float',
            'clear',
            'overflow',
            'resize',
            'clip',
            'visibility',
            'box-sizing',
            'align-content',
            'align-items',
            'align-self',
            'flex',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-wrap',
            'justify-content',
            'order',
            'inline-size',
            'block-size',
            'min-inline-size',
            'min-block-size',
            'max-inline-size',
            'max-block-size',
            'min-width',
            'max-width',
            'min-height',
            'max-height'
        ]
    ],
    [
        "Text" /* Category.Text */ ,
        [
            'font',
            'font-family',
            'font-size',
            'font-size-adjust',
            'font-stretch',
            'font-style',
            'font-variant',
            'font-weight',
            'font-smoothing',
            'direction',
            'tab-size',
            'text-align',
            'text-align-last',
            'text-decoration',
            'text-decoration-color',
            'text-decoration-line',
            'text-decoration-style',
            'text-indent',
            'text-justify',
            'text-overflow',
            'text-shadow',
            'text-transform',
            'text-size-adjust',
            'line-height',
            'vertical-align',
            'letter-spacing',
            'word-spacing',
            'white-space',
            'word-break',
            'word-wrap'
        ]
    ],
    [
        "Appearance" /* Category.Appearance */ ,
        [
            'color',
            'outline',
            'outline-color',
            'outline-offset',
            'outline-style',
            'Outline-width',
            'border',
            'border-image',
            'background',
            'cursor',
            'box-shadow',
            '≈',
            'tap-highlight-color'
        ]
    ],
    [
        "Animation" /* Category.Animation */ ,
        [
            'animation',
            'animation-delay',
            'animation-direction',
            'animation-duration',
            'animation-fill-mode',
            'animation-iteration-count',
            'animation-name',
            'animation-play-state',
            'animation-timing-function',
            'transition',
            'transition-delay',
            'transition-duration',
            'transition-property',
            'transition-timing-function'
        ]
    ],
    [
        "Grid" /* Category.Grid */ ,
        [
            'grid',
            'grid-column',
            'grid-row',
            'order',
            'place-items',
            'place-content',
            'place-self'
        ]
    ],
    [
        "Flex" /* Category.Flex */ ,
        [
            'flex',
            'order',
            'place-items',
            'place-content',
            'place-self'
        ]
    ],
    [
        "Table" /* Category.Table */ ,
        [
            'border-collapse',
            'border-spacing',
            'caption-side',
            'empty-cells',
            'table-layout'
        ]
    ],
    [
        "Generated Content" /* Category.GeneratedContent */ ,
        [
            'content',
            'quotes',
            'counter-reset',
            'counter-increment'
        ]
    ]
]);
var CategoriesByPropertyName = new Map();
var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
try {
    for(var _iterator = CategorizedProperties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
        var _step_value = _sliced_to_array(_step.value, 2), category = _step_value[0], styleNames = _step_value[1];
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = styleNames[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var styleName = _step1.value;
                if (!CategoriesByPropertyName.has(styleName)) {
                    CategoriesByPropertyName.set(styleName, []);
                }
                var categories = CategoriesByPropertyName.get(styleName);
                categories.push(category);
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
var matchCategoriesByPropertyName = function(propertyName) {
    if (CategoriesByPropertyName.has(propertyName)) {
        return CategoriesByPropertyName.get(propertyName);
    }
    if (propertyName.startsWith('--')) {
        return [
            "CSS Variables" /* Category.CSSVariables */ 
        ];
    }
    return [];
};
/**
 * Categorize a given property name to one or more categories.
 *
 * It matches against the static CategoriesByPropertyName first. It then
 * matches against several dynamic rules. It then tries to use the canonical
 * name's shorthands for matching. If nothing matches, it returns the "Other"
 * category.
 */ var categorizePropertyName = function(propertyName) {
    var cssMetadata = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSMetadata.cssMetadata();
    var canonicalName = cssMetadata.canonicalPropertyName(propertyName);
    var categories = matchCategoriesByPropertyName(canonicalName);
    if (categories.length > 0) {
        return categories;
    }
    var shorthands = cssMetadata.getShorthands(canonicalName);
    if (shorthands) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = shorthands[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var shorthand = _step.value;
                var shorthandCategories = matchCategoriesByPropertyName(shorthand);
                if (shorthandCategories.length > 0) {
                    return shorthandCategories;
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
    }
    return [
        "Other" /* Category.Other */ 
    ];
}; //# sourceMappingURL=PropertyNameCategories.js.map


}),

}]);