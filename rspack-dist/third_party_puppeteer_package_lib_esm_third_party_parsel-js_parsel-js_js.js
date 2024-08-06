"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_third_party_parsel-js_parsel-js_js"], {
"./third_party/puppeteer/package/lib/esm/third_party/parsel-js/parsel-js.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TOKENS: function() { return TOKENS; },
  stringify: function() { return stringify; },
  tokenize: function() { return tokenize; }
});
/**
MIT License

Copyright (c) 2020 Lea Verou

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/ // ../../node_modules/parsel-js/dist/parsel.js
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
function _ts_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
var TOKENS = {
    attribute: RegExp("\\[\\s*(?:(?<namespace>\\*|[-\\w\\P{ASCII}]*)\\|)?(?<name>[-\\w\\P{ASCII}]+)\\s*(?:(?<operator>\\W?=)\\s*(?<value>.+?)\\s*(\\s(?<caseSensitive>[iIsS]))?\\s*)?\\]", "gu"),
    id: RegExp("#(?<name>[-\\w\\P{ASCII}]+)", "gu"),
    class: RegExp("\\.(?<name>[-\\w\\P{ASCII}]+)", "gu"),
    comma: /\s*,\s*/g,
    combinator: /\s*[\s>+~]\s*/g,
    "pseudo-element": RegExp("::(?<name>[-\\w\\P{ASCII}]+)(?:\\((?<argument>\xb6*)\\))?", "gu"),
    "pseudo-class": RegExp(":(?<name>[-\\w\\P{ASCII}]+)(?:\\((?<argument>\xb6*)\\))?", "gu"),
    universal: RegExp("(?:(?<namespace>\\*|[-\\w\\P{ASCII}]*)\\|)?\\*", "gu"),
    type: RegExp("(?:(?<namespace>\\*|[-\\w\\P{ASCII}]*)\\|)?(?<name>[-\\w\\P{ASCII}]+)", "gu")
};
var TRIM_TOKENS = /* @__PURE__ */ new Set([
    "combinator",
    "comma"
]);
var getArgumentPatternByType = function(type) {
    switch(type){
        case "pseudo-element":
        case "pseudo-class":
            return new RegExp(TOKENS[type].source.replace("(?<argument>\xB6*)", "(?<argument>.*)"), "gu");
        default:
            return TOKENS[type];
    }
};
function gobbleParens(text, offset) {
    var nesting = 0;
    var result = "";
    for(; offset < text.length; offset++){
        var char = text[offset];
        switch(char){
            case "(":
                ++nesting;
                break;
            case ")":
                --nesting;
                break;
        }
        result += char;
        if (nesting === 0) {
            return result;
        }
    }
    return result;
}
function tokenizeBy(text) {
    var grammar = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : TOKENS;
    if (!text) {
        return [];
    }
    var tokens = [
        text
    ];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(grammar)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), type = _step_value[0], pattern = _step_value[1];
            for(var i = 0; i < tokens.length; i++){
                var _tokens;
                var token = tokens[i];
                if (typeof token !== "string") {
                    continue;
                }
                pattern.lastIndex = 0;
                var match = pattern.exec(token);
                if (!match) {
                    continue;
                }
                var from = match.index - 1;
                var args = [];
                var content = match[0];
                var before = token.slice(0, from + 1);
                if (before) {
                    args.push(before);
                }
                args.push(_object_spread_props(_object_spread({}, match.groups), {
                    type: type,
                    content: content
                }));
                var after = token.slice(from + content.length + 1);
                if (after) {
                    args.push(after);
                }
                (_tokens = tokens).splice.apply(_tokens, [
                    i,
                    1
                ].concat(_to_consumable_array(args)));
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
    var offset = 0;
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = tokens[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var token1 = _step1.value;
            switch(typeof token1 === "undefined" ? "undefined" : _type_of(token1)){
                case "string":
                    throw new Error("Unexpected sequence ".concat(token1, " found at index ").concat(offset));
                case "object":
                    offset += token1.content.length;
                    token1.pos = [
                        offset - token1.content.length,
                        offset
                    ];
                    if (TRIM_TOKENS.has(token1.type)) {
                        token1.content = token1.content.trim() || " ";
                    }
                    break;
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
    return tokens;
}
var STRING_PATTERN = /(['"])([^\\\n]+?)\1/g;
var ESCAPE_PATTERN = /\\./g;
function tokenize(selector) {
    var grammar = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : TOKENS;
    selector = selector.trim();
    if (selector === "") {
        return [];
    }
    var replacements = [];
    selector = selector.replace(ESCAPE_PATTERN, function(value, offset) {
        replacements.push({
            value: value,
            offset: offset
        });
        return "\uE000".repeat(value.length);
    });
    selector = selector.replace(STRING_PATTERN, function(value, quote, content, offset) {
        replacements.push({
            value: value,
            offset: offset
        });
        return "".concat(quote).concat("\uE001".repeat(content.length)).concat(quote);
    });
    {
        var pos = 0;
        var offset;
        while((offset = selector.indexOf("(", pos)) > -1){
            var value = gobbleParens(selector, offset);
            replacements.push({
                value: value,
                offset: offset
            });
            selector = "".concat(selector.substring(0, offset), "(").concat("\xB6".repeat(value.length - 2), ")").concat(selector.substring(offset + value.length));
            pos = offset + value.length;
        }
    }
    var tokens = tokenizeBy(selector, grammar);
    var changedTokens = /* @__PURE__ */ new Set();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = replacements.reverse()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var replacement = _step.value;
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = tokens[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var token = _step1.value;
                    var offset1 = replacement.offset, value1 = replacement.value;
                    if (!(token.pos[0] <= offset1 && offset1 + value1.length <= token.pos[1])) {
                        continue;
                    }
                    var content = token.content;
                    var tokenOffset = offset1 - token.pos[0];
                    token.content = content.slice(0, tokenOffset) + value1 + content.slice(tokenOffset + value1.length);
                    if (token.content !== content) {
                        changedTokens.add(token);
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
    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
    try {
        for(var _iterator2 = changedTokens[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
            var token1 = _step2.value;
            var pattern = getArgumentPatternByType(token1.type);
            if (!pattern) {
                throw new Error("Unknown token type: ".concat(token1.type));
            }
            pattern.lastIndex = 0;
            var match = pattern.exec(token1.content);
            if (!match) {
                throw new Error("Unable to parse content for ".concat(token1.type, ": ").concat(token1.content));
            }
            Object.assign(token1, match.groups);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
            }
        } finally{
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
    return tokens;
}
function flatten(node, parent) {
    var _, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child, err;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                _ = node.type;
                switch(_){
                    case "list":
                        return [
                            3,
                            1
                        ];
                    case "complex":
                        return [
                            3,
                            10
                        ];
                    case "compound":
                        return [
                            3,
                            13
                        ];
                }
                return [
                    3,
                    15
                ];
            case 1:
                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                _state.label = 2;
            case 2:
                _state.trys.push([
                    2,
                    7,
                    8,
                    9
                ]);
                _iterator = node.list[Symbol.iterator]();
                _state.label = 3;
            case 3:
                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                    3,
                    6
                ];
                child = _step.value;
                return [
                    5,
                    _ts_values(flatten(child, node))
                ];
            case 4:
                _state.sent();
                _state.label = 5;
            case 5:
                _iteratorNormalCompletion = true;
                return [
                    3,
                    3
                ];
            case 6:
                return [
                    3,
                    9
                ];
            case 7:
                err = _state.sent();
                _didIteratorError = true;
                _iteratorError = err;
                return [
                    3,
                    9
                ];
            case 8:
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
                return [
                    7
                ];
            case 9:
                return [
                    3,
                    17
                ];
            case 10:
                return [
                    5,
                    _ts_values(flatten(node.left, node))
                ];
            case 11:
                _state.sent();
                return [
                    5,
                    _ts_values(flatten(node.right, node))
                ];
            case 12:
                _state.sent();
                return [
                    3,
                    17
                ];
            case 13:
                return [
                    5,
                    _ts_values(node.list.map(function(token) {
                        return [
                            token,
                            node
                        ];
                    }))
                ];
            case 14:
                _state.sent();
                return [
                    3,
                    17
                ];
            case 15:
                return [
                    4,
                    [
                        node,
                        parent
                    ]
                ];
            case 16:
                _state.sent();
                _state.label = 17;
            case 17:
                return [
                    2
                ];
        }
    });
}
function stringify(listOrNode) {
    var tokens;
    if (Array.isArray(listOrNode)) {
        tokens = listOrNode;
    } else {
        tokens = _to_consumable_array(flatten(listOrNode)).map(function(param) {
            var _param = _sliced_to_array(param, 1), token = _param[0];
            return token;
        });
    }
    return tokens.map(function(token) {
        return token.content;
    }).join("");
}



}),

}]);