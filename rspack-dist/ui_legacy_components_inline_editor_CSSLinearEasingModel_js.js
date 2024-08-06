"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_CSSLinearEasingModel_js"], {
"./ui/legacy/components/inline_editor/CSSLinearEasingModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSLinearEasingModel: function() { return CSSLinearEasingModel; }
});
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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

var cssParser = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.css.cssLanguage.parser;
var numberFormatter = new Intl.NumberFormat('en', {
    maximumFractionDigits: 2
});
function findNextDefinedInputIndex(points, currentIndex) {
    for(var i = currentIndex; i < points.length; i++){
        if (!isNaN(points[i].input)) {
            return i;
        }
    }
    return -1;
}
function consumeLinearStop(cursor, referenceText) {
    var tokens = [];
    while(cursor.type.name !== ',' && cursor.type.name !== ')'){
        var token = referenceText.substring(cursor.from, cursor.to);
        if (cursor.type.name !== 'NumberLiteral') {
            // There is something that is not a number inside the argument.
            return null;
        }
        tokens.push(token);
        cursor.next(false);
    }
    // Invalid syntax `linear(0 50% 60% 40%, 1)`.
    if (tokens.length > 3) {
        return null;
    }
    var percentages = tokens.filter(function(token) {
        return token.includes('%');
    });
    // There can't be more than 2 percentages.
    if (percentages.length > 2) {
        return null;
    }
    var numbers = tokens.filter(function(token) {
        return !token.includes('%');
    });
    // There must only be 1 number.
    if (numbers.length !== 1) {
        return null;
    }
    return {
        number: Number(numbers[0]),
        lengthA: percentages[0] ? Number(percentages[0].substring(0, percentages[0].length - 1)) : undefined,
        lengthB: percentages[1] ? Number(percentages[1].substring(0, percentages[1].length - 1)) : undefined
    };
}
function consumeLinearFunction(text) {
    var textToParse = "*{--a: ".concat(text, "}");
    var parsed = cssParser.parse(textToParse);
    // Take the cursor from declaration
    var cursor = parsed.cursorAt(textToParse.indexOf(':') + 1);
    // Move until the `ArgList`
    while(cursor.name !== 'ArgList' && cursor.next(true)){
        // If the callee is not the `linear` function, return null
        if (cursor.name === 'Callee' && textToParse.substring(cursor.from, cursor.to) !== 'linear') {
            return null;
        }
    }
    if (cursor.name !== 'ArgList') {
        return null;
    }
    // We're on the `ArgList`, enter into it
    cursor.firstChild();
    var stops = [];
    while(cursor.type.name !== ')' && cursor.next(false)){
        var linearStop = consumeLinearStop(cursor, textToParse);
        if (!linearStop) {
            // Parsing a `linearStop` was invalid; abort.
            return null;
        }
        stops.push(linearStop);
    }
    return stops;
}
var KeywordToValue = {
    'linear': 'linear(0 0%, 1 100%)'
};
var _points = /*#__PURE__*/ new WeakMap();
var CSSLinearEasingModel = /*#__PURE__*/ function() {
    "use strict";
    function CSSLinearEasingModel(points) {
        _class_call_check(this, CSSLinearEasingModel);
        _class_private_field_init(this, _points, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _points, points);
    }
    _create_class(CSSLinearEasingModel, [
        {
            key: "addPoint",
            value: function addPoint(point, index) {
                if (index !== undefined) {
                    _class_private_field_get(this, _points).splice(index, 0, point);
                    return;
                }
                _class_private_field_get(this, _points).push(point);
            }
        },
        {
            key: "removePoint",
            value: function removePoint(index) {
                _class_private_field_get(this, _points).splice(index, 1);
            }
        },
        {
            key: "setPoint",
            value: function setPoint(index, point) {
                _class_private_field_get(this, _points)[index] = point;
            }
        },
        {
            key: "points",
            value: function points() {
                return _class_private_field_get(this, _points);
            }
        },
        {
            key: "asCSSText",
            value: function asCSSText() {
                var args = _class_private_field_get(this, _points).map(function(point) {
                    return "".concat(numberFormatter.format(point.output), " ").concat(numberFormatter.format(point.input), "%");
                }).join(', ');
                var text = "linear(".concat(args, ")");
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    // If a keyword matches to this function, return the keyword value of it.
                    for(var _iterator = Object.entries(KeywordToValue)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), keyword = _step_value[0], value = _step_value[1];
                        if (value === text) {
                            return keyword;
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
                return text;
            }
        }
    ], [
        {
            key: "parse",
            value: // https://w3c.github.io/csswg-drafts/css-easing/#linear-easing-function-parsing
            function parse(text) {
                // Parse `linear` keyword as `linear(0 0%, 1 100%)` function.
                if (KeywordToValue[text]) {
                    return CSSLinearEasingModel.parse(KeywordToValue[text]);
                }
                var stops = consumeLinearFunction(text);
                // 1. Let function be a new linear easing function.
                // 2. Let largestInput be negative infinity.
                // 3. If there are less than two items in stopList, then return failure.
                if (!stops || stops.length < 2) {
                    return null;
                }
                // 4. For each stop in stopList:
                var largestInput = -Infinity;
                var points = [];
                for(var i = 0; i < stops.length; i++){
                    var stop = stops[i];
                    // 4.1. Let point be a new linear easing point with its output set
                    // to stop’s <number> as a number.
                    var point = {
                        input: NaN,
                        output: stop.number
                    };
                    // 4.2. Append point to function’s points.
                    points.push(point);
                    // 4.3. If stop has a <linear-stop-length>, then:
                    if (stop.lengthA !== undefined) {
                        // 4.3.1. Set point’s input to whichever is greater:
                        // stop’s <linear-stop-length>'s first <percentage> as a number,
                        // or largestInput.
                        point.input = Math.max(stop.lengthA, largestInput);
                        // 4.3.2. Set largestInput to point’s input.
                        largestInput = point.input;
                        // 4.3.3. If stop’s <linear-stop-length> has a second <percentage>, then:
                        if (stop.lengthB !== undefined) {
                            // 4.3.3.1. Let extraPoint be a new linear easing point with its output
                            // set to stop’s <number> as a number.
                            var extraPoint = {
                                input: NaN,
                                output: point.output
                            };
                            // 4.3.3.2. Append extraPoint to function’s points.
                            points.push(extraPoint);
                            // 4.3.3.3. Set extraPoint’s input to whichever is greater:
                            // stop’s <linear-stop-length>'s second <percentage>
                            // as a number, or largestInput.
                            extraPoint.input = Math.max(stop.lengthB, largestInput);
                            // 4.3.3.4. Set largestInput to extraPoint’s input.
                            largestInput = extraPoint.input;
                        }
                    // 4.4. Otherwise, if stop is the first item in stopList, then:
                    } else if (i === 0) {
                        // 4.4.1. Set point’s input to 0.
                        point.input = 0;
                        // 4.4.2. Set largestInput to 0.
                        largestInput = 0;
                    // 4.5. Otherwise, if stop is the last item in stopList,
                    // then set point’s input to whichever is greater: 1 or largestInput.
                    } else if (i === stops.length - 1) {
                        point.input = Math.max(100, largestInput);
                    }
                }
                // 5. For runs of items in function’s points that have a null input, assign a
                // number to the input by linearly interpolating between the closest previous
                // and next points that have a non-null input.
                var upperIndex = 0;
                for(var i1 = 1; i1 < points.length; i1++){
                    if (isNaN(points[i1].input)) {
                        if (i1 > upperIndex) {
                            // Since the last point's input is always defined
                            // we know that `upperIndex` cannot be `-1`.
                            upperIndex = findNextDefinedInputIndex(points, i1);
                        }
                        points[i1].input = points[i1 - 1].input + (points[upperIndex].input - points[i1 - 1].input) / (upperIndex - (i1 - 1));
                    }
                }
                return new CSSLinearEasingModel(points);
            }
        }
    ]);
    return CSSLinearEasingModel;
} //# sourceMappingURL=CSSLinearEasingModel.js.map
();


}),

}]);