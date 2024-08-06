"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_PropertyMatchers_test_js"], {
"./panels/elements/PropertyMatchers.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_PropertyParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/PropertyParser.js */ "./testing/PropertyParser.js");
/* harmony import */var _elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements.js */ "./panels/elements/elements.js");
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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



var _found = /*#__PURE__*/ new WeakMap(), _predicate = /*#__PURE__*/ new WeakMap();
var TreeSearch = /*#__PURE__*/ function(_SDK_CSSPropertyParser_TreeWalker) {
    "use strict";
    _inherits(TreeSearch, _SDK_CSSPropertyParser_TreeWalker);
    var _super = _create_super(TreeSearch);
    function TreeSearch(ast, predicate) {
        _class_call_check(this, TreeSearch);
        var _this;
        _this = _super.call(this, ast);
        _class_private_field_init(_assert_this_initialized(_this), _found, {
            writable: true,
            value: null
        });
        _class_private_field_init(_assert_this_initialized(_this), _predicate, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _predicate, predicate);
        return _this;
    }
    _create_class(TreeSearch, [
        {
            key: "enter",
            value: function enter(param) {
                var node = param.node;
                if (_class_private_field_get(this, _found)) {
                    return false;
                }
                if (_class_private_field_get(this, _predicate).call(this, node)) {
                    var _$_class_private_field_get;
                    _class_private_field_set(this, _found, (_$_class_private_field_get = _class_private_field_get(this, _found)) !== null && _$_class_private_field_get !== void 0 ? _$_class_private_field_get : node);
                    return false;
                }
                return true;
            }
        }
    ], [
        {
            key: "find",
            value: function find(ast, predicate) {
                var _TreeSearch_walk;
                return _class_private_field_get(_TreeSearch_walk = TreeSearch.walk(ast, predicate), _found);
            }
        },
        {
            key: "findAll",
            value: function findAll(ast, predicate) {
                var foundNodes = [];
                TreeSearch.walk(ast, function(node) {
                    if (predicate(node)) {
                        foundNodes.push(node);
                    }
                    return false;
                });
                return foundNodes;
            }
        }
    ]);
    return TreeSearch;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.TreeWalker);
function matchSingleValue(name, value, matcher) {
    var ast = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.tokenizeDeclaration(name, value);
    if (!ast) {
        return {
            ast: ast,
            match: null,
            text: value
        };
    }
    var matchedResult = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, [
        matcher
    ]);
    var matchedNode = TreeSearch.find(ast, function(n) {
        return _instanceof(matchedResult.getMatch(n), matcher.matchType);
    });
    var match = matchedNode && matchedResult.getMatch(matchedNode);
    return {
        ast: ast,
        match: _instanceof(match, matcher.matchType) ? match : null,
        text: _testing_PropertyParser_js__WEBPACK_IMPORTED_MODULE_1__.Printer.walk(ast).get()
    };
}
function injectVariableSubstitutions(variables) {
    var _SDK_CSSPropertyParser_BottomUpTreeMatching_prototype = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.prototype, getComputedText = _SDK_CSSPropertyParser_BottomUpTreeMatching_prototype.getComputedText, getComputedTextRange = _SDK_CSSPropertyParser_BottomUpTreeMatching_prototype.getComputedTextRange, getMatch = _SDK_CSSPropertyParser_BottomUpTreeMatching_prototype.getMatch;
    var variableNames = new Map();
    function injectChunk(matching) {
        if (matching.computedText.chunkCount === 0) {
            var _matching_ast_propertyName;
            var propertyOffset = matching.ast.rule.indexOf((_matching_ast_propertyName = matching.ast.propertyName) !== null && _matching_ast_propertyName !== void 0 ? _matching_ast_propertyName : '--');
            assert.isAbove(propertyOffset, 0);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = Object.entries(variables)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _step_value = _sliced_to_array(_step.value, 2), varName = _step_value[0], value = _step_value[1];
                    var varText = "var(".concat(varName, ")");
                    for(var offset = matching.ast.rule.indexOf(varText); offset >= 0; offset = matching.ast.rule.indexOf(varText, offset + 1)){
                        matching.computedText.push({
                            text: varText,
                            computedText: function() {
                                return value;
                            },
                            node: {}
                        }, offset - propertyOffset);
                    }
                    variableNames.set(varText, {
                        varName: varName,
                        value: value
                    });
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
    }
    sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.prototype, 'getComputedText').callsFake(function(node) {
        injectChunk(this);
        return getComputedText.call(this, node);
    });
    sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.prototype, 'getComputedTextRange').callsFake(function(from, to) {
        injectChunk(this);
        return getComputedTextRange.call(this, from, to);
    });
    sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.prototype, 'getMatch').callsFake(function(node) {
        injectChunk(this);
        var resolvedValue = variableNames.get(this.ast.text(node));
        if (!resolvedValue) {
            return getMatch.call(this, node);
        }
        return new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.VariableMatch(this.ast.text(node), node, resolvedValue.varName, [], this, function() {
            return resolvedValue.value;
        });
    });
}
describe('Matchers for SDK.CSSPropertyParser.BottomUpTreeMatching', function() {
    it('parses colors', function() {
        for(var _i = 0, _iter = [
            'red-blue',
            '#f',
            '#foobar',
            '',
            'rgbz(1 2 2)',
            'tan(45deg)'
        ]; _i < _iter.length; _i++){
            var fail = _iter[_i];
            var _matchSingleValue = matchSingleValue('color', fail, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMatcher()), match = _matchSingleValue.match, text = _matchSingleValue.text;
            assert.isNull(match, text);
        }
        for(var _i1 = 0, _iter1 = [
            'rgb(/* R */155, /* G */51, /* B */255)',
            'red',
            'rgb(0 0 0)',
            'rgba(0 0 0)',
            '#fff',
            '#ffff',
            '#ffffff',
            '#ffffffff'
        ]; _i1 < _iter1.length; _i1++){
            var succeed = _iter1[_i1];
            var _matchSingleValue1 = matchSingleValue('color', succeed, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMatcher()), match1 = _matchSingleValue1.match, text1 = _matchSingleValue1.text;
            assert.exists(match1, text1);
            assert.strictEqual(match1.text, succeed);
        }
        // The property name matters:
        for(var _i2 = 0, _iter2 = [
            'rgb(/* R */155, /* G */51, /* B */255)',
            'red',
            'rgb(0 0 0)',
            'rgba(0 0 0)',
            '#fff',
            '#ffff',
            '#ffffff',
            '#ffffffff'
        ]; _i2 < _iter2.length; _i2++){
            var fail1 = _iter2[_i2];
            var _matchSingleValue2 = matchSingleValue('width', fail1, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMatcher()), match2 = _matchSingleValue2.match, text2 = _matchSingleValue2.text;
            assert.isNull(match2, text2);
        }
    });
    it('parses colors in logical border properties', function() {
        for(var _i = 0, _iter = [
            'border-block-end',
            'border-block-end-color',
            'border-block-start',
            'border-block-start-color',
            'border-inline-end',
            'border-inline-end-color',
            'border-inline-start',
            'border-inline-start-color'
        ]; _i < _iter.length; _i++){
            var success = _iter[_i];
            var _matchSingleValue = matchSingleValue(success, 'red', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMatcher()), ast = _matchSingleValue.ast, match = _matchSingleValue.match, text = _matchSingleValue.text;
            assert.exists(match, text);
            assert.strictEqual(match.text, 'red');
            assert.strictEqual(ast === null || ast === void 0 ? void 0 : ast.propertyName, success);
        }
    });
    it('parses linear gradients', function() {
        for(var _i = 0, _iter = [
            'linear-gradient(90deg, red, blue)',
            'linear-gradient(to top left, red, blue)',
            'linear-gradient(in oklab, red, blue)'
        ]; _i < _iter.length; _i++){
            var succeed = _iter[_i];
            var _matchSingleValue = matchSingleValue('background', succeed, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.LinearGradientMatcher()), match = _matchSingleValue.match, text = _matchSingleValue.text;
            assert.exists(match, text);
            assert.strictEqual(match.text, succeed);
        }
        for(var _i1 = 0, _iter1 = [
            'linear-gradient(90deg, red, blue)',
            'linear-gradient(to top left, red, blue)',
            'linear-gradient(in oklab, red, blue)'
        ]; _i1 < _iter1.length; _i1++){
            var fail = _iter1[_i1];
            var _matchSingleValue1 = matchSingleValue('width', fail, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMatcher()), match1 = _matchSingleValue1.match, text1 = _matchSingleValue1.text;
            assert.isNull(match1, text1);
        }
    });
    it('parses colors in masks', function() {
        var _loop = function(_i, _iter) {
            var succeed = _iter[_i];
            var ast = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.tokenizeDeclaration(succeed, 'linear-gradient(to top, red, var(--other))');
            assert.exists(ast, succeed);
            var matching = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, [
                new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMatcher()
            ]);
            var colorNode = TreeSearch.find(ast, function(node) {
                return ast.text(node) === 'red';
            });
            assert.exists(colorNode);
            var match = matching.getMatch(colorNode);
            assert.exists(match);
            assert.instanceOf(match, _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMatch);
            assert.strictEqual(match.text, 'red');
        };
        for(var _i = 0, _iter = [
            'mask',
            'mask-image',
            'mask-border',
            'mask-border-source'
        ]; _i < _iter.length; _i++)_loop(_i, _iter);
    });
    it('parses color-mix with vars', function() {
        injectVariableSubstitutions({
            '--interpolation': 'shorter',
            '--color1': 'red',
            '--percentage': '13%',
            '--rgb': 'shorter',
            '--space': 'in srgb',
            '--color2': '25% blue',
            '--multiple-colors': 'red, blue'
        });
        {
            var _matchSingleValue = matchSingleValue('color', 'color-mix(in srgb var(--interpolation) hue, red var(--percentage), rgb(var(--rgb)))', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMixMatcher()), ast = _matchSingleValue.ast, match = _matchSingleValue.match, text = _matchSingleValue.text;
            assert.exists(ast, text);
            assert.exists(match, text);
            assert.deepStrictEqual(match.space.map(function(n) {
                return ast.text(n);
            }), [
                'in',
                'srgb',
                'var(--interpolation)',
                'hue'
            ]);
            assert.strictEqual(match.color1.map(function(n) {
                return ast.text(n);
            }).join(), 'red,var(--percentage)');
            assert.strictEqual(match.color2.map(function(n) {
                return ast.text(n);
            }).join(), 'rgb(var(--rgb))');
        }
        {
            var _matchSingleValue1 = matchSingleValue('color', 'color-mix(var(--space), var(--color1), var(--color2))', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMixMatcher()), ast1 = _matchSingleValue1.ast, match1 = _matchSingleValue1.match, text1 = _matchSingleValue1.text;
            assert.exists(ast1, text1);
            assert.exists(match1, text1);
            assert.strictEqual(match1.space.map(function(n) {
                return ast1.text(n);
            }).join(), 'var(--space)');
            assert.strictEqual(match1.color1.map(function(n) {
                return ast1.text(n);
            }).join(), 'var(--color1)');
            assert.strictEqual(match1.color2.map(function(n) {
                return ast1.text(n);
            }).join(), 'var(--color2)');
        }
        for(var _i = 0, _iter = [
            'color-mix(var(--color1), var(--color1), var(--color2))',
            'color-mix(var(--space), var(--color1) var(--percentage) var(--percentage), var(--color2))',
            'color-mix(var(--space), var(--color1) 10% var(--percentage), var(--color2))',
            'color-mix(var(--space), var(--color1), var(--color2) 15%)',
            'color-mix(var(--space), var(--color1), var(--color2) var(--percentage))',
            'color-mix(var(--space), var(--multiple-colors))'
        ]; _i < _iter.length; _i++){
            var fail = _iter[_i];
            var _matchSingleValue2 = matchSingleValue('color', fail, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMixMatcher()), ast2 = _matchSingleValue2.ast, match2 = _matchSingleValue2.match, text2 = _matchSingleValue2.text;
            assert.exists(ast2, text2);
            assert.isNull(match2, text2);
        }
    });
    it('parses color-mix', function() {
        var check = function check(space, color1, color2) {
            var _matchSingleValue = matchSingleValue('color', "color-mix(".concat(space, ", ").concat(color1, ", ").concat(color2, ")"), new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMixMatcher()), ast = _matchSingleValue.ast, match = _matchSingleValue.match, text = _matchSingleValue.text;
            assert.exists(ast, text);
            assert.exists(match, text);
            assert.deepStrictEqual(match.space.map(function(n) {
                return ast.text(n);
            }).join(' '), space, text);
            assert.strictEqual(match.color1.map(function(n) {
                return ast.text(n);
            }).join(' '), color1, text);
            assert.strictEqual(match.color2.map(function(n) {
                return ast.text(n);
            }).join(' '), color2, text);
        };
        var checkFailure = function checkFailure(space, color1, color2) {
            var _matchSingleValue = matchSingleValue('color', "color-mix(".concat(space, ", ").concat(color1, ", ").concat(color2, ")"), new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMixMatcher()), match = _matchSingleValue.match, text = _matchSingleValue.text;
            assert.isNull(match, text);
        };
        check('in srgb shorter hue', 'red 35%', 'blue');
        check('in /*asd*/ srgb shorter hue', 'red 35%', 'blue');
        check('in srgb', 'red 35%', 'blue');
        check('in srgb', '35% red', 'blue 16%');
        check('in srgb', '/*a*/ 35% /*b*/ red /*c*/', '/*a*/ blue /*b*/ 16% /*c*/');
        checkFailure('insrgb shorter hue', 'red 35%', 'blue');
        checkFailure('/*asd*/srgb in', 'red 35%', 'blue');
        checkFailure('in srgb', '0% red', 'blue 0%');
    });
    it('parses URLs', function() {
        var url = 'http://example.com';
        {
            var _matchSingleValue = matchSingleValue('background-image', "url(".concat(url, ")"), new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.URLMatcher()), match = _matchSingleValue.match, text = _matchSingleValue.text;
            assert.exists(match);
            assert.strictEqual(match.url, url, text);
        }
        {
            var _matchSingleValue1 = matchSingleValue('background-image', 'url("'.concat(url, '")'), new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.URLMatcher()), match1 = _matchSingleValue1.match, text1 = _matchSingleValue1.text;
            assert.exists(match1);
            assert.strictEqual(match1.url, url, text1);
        }
    });
    it('parses angles correctly', function() {
        for(var _i = 0, _iter = [
            '45deg',
            '1.3rad',
            '-25grad',
            '2.3turn'
        ]; _i < _iter.length; _i++){
            var succeed = _iter[_i];
            var _matchSingleValue = matchSingleValue('transform', succeed, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AngleMatcher()), ast = _matchSingleValue.ast, match = _matchSingleValue.match, text = _matchSingleValue.text;
            assert.exists(ast, succeed);
            assert.exists(match, text);
            assert.strictEqual(match.text, succeed);
        }
        for(var _i1 = 0, _iter1 = [
            '0DEG',
            '0',
            '123',
            '2em'
        ]; _i1 < _iter1.length; _i1++){
            var fail = _iter1[_i1];
            var _matchSingleValue1 = matchSingleValue('transform', fail, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AngleMatcher()), match1 = _matchSingleValue1.match, text1 = _matchSingleValue1.text;
            assert.isNull(match1, text1);
        }
    });
    it('parses linkable names correctly', function() {
        var match = function match(name, value) {
            var ast = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.tokenizeDeclaration(name, value);
            assert.exists(ast);
            var matchedResult = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, [
                new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.LinkableNameMatcher()
            ]);
            var matches = TreeSearch.findAll(ast, function(node) {
                return _instanceof(matchedResult.getMatch(node), _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.LinkableNameMatch);
            });
            return matches.map(function(m) {
                var _matchedResult_getMatch;
                return (_matchedResult_getMatch = matchedResult.getMatch(m)) === null || _matchedResult_getMatch === void 0 ? void 0 : _matchedResult_getMatch.text;
            });
        };
        assert.deepStrictEqual(match('animation-name', 'first, second, -moz-third'), [
            'first',
            'second',
            '-moz-third'
        ]);
        assert.deepStrictEqual(match('animation-name', 'first'), [
            'first'
        ]);
        assert.deepStrictEqual(match('font-palette', 'first'), [
            'first'
        ]);
        {
            assert.deepStrictEqual(match('position-try-options', 'flip-block'), []);
            assert.deepStrictEqual(match('position-try-options', '--one'), [
                '--one'
            ]);
            assert.deepStrictEqual(match('position-try-options', '--one, --two'), [
                '--one',
                '--two'
            ]);
        }
        {
            assert.deepStrictEqual(match('position-try', 'flip-block'), []);
            assert.deepStrictEqual(match('position-try', '--one'), [
                '--one'
            ]);
            assert.deepStrictEqual(match('position-try', '--one, --two'), [
                '--one',
                '--two'
            ]);
        }
        {
            injectVariableSubstitutions({
                '--duration-and-easing': '1s linear'
            });
            assert.deepStrictEqual(match('animation', '1s linear --animation-name'), [
                '--animation-name'
            ]);
            assert.deepStrictEqual(match('animation', '1s linear linear'), [
                'linear'
            ]);
            assert.deepStrictEqual(match('animation', '1s linear --first-name, 1s ease-in --second-name'), [
                '--first-name',
                '--second-name'
            ]);
            assert.deepStrictEqual(match('animation', '1s linear'), []);
            // Matching to variable names inside `var()` functions are fine as it is handled by variable renderer in usage.
            assert.deepStrictEqual(match('animation', 'var(--duration-and-easing) linear'), [
                '--duration-and-easing',
                'linear'
            ]);
            assert.deepStrictEqual(match('animation', '1s linear var(--non-existent, --animation-name)'), [
                '--non-existent',
                '--animation-name'
            ]);
        }
    });
    it('parses easing functions properly', function() {
        for(var _i = 0, _iter = [
            'linear',
            'ease',
            'ease-in',
            'ease-out',
            'ease-in-out',
            'linear(0 0%, 1 100%)',
            'cubic-bezier(0.3, 0.3, 0.3, 0.3)'
        ]; _i < _iter.length; _i++){
            var succeed = _iter[_i];
            var _matchSingleValue = matchSingleValue('animation-timing-function', succeed, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.BezierMatcher()), ast = _matchSingleValue.ast, match = _matchSingleValue.match, text = _matchSingleValue.text;
            assert.exists(ast, succeed);
            assert.exists(match, text);
            assert.strictEqual(match.text, succeed);
        }
        var _matchSingleValue1 = matchSingleValue('border', 'ease-in', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.BezierMatcher()), ast1 = _matchSingleValue1.ast, match1 = _matchSingleValue1.match, text1 = _matchSingleValue1.text;
        assert.exists(ast1, 'border');
        assert.isNull(match1, text1);
    });
    it('parses strings correctly', function() {
        var match = function match(name, value) {
            var ast = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.tokenizeDeclaration(name, value);
            assert.exists(ast);
            var matchedResult = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, [
                new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.StringMatcher()
            ]);
            assert.exists(matchedResult);
            var match = TreeSearch.find(ast, function(node) {
                return _instanceof(matchedResult.getMatch(node), _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.StringMatch);
            });
            assert.exists(match);
        };
        match('quotes', '"\'" "\'"');
        match('content', '"foobar"');
        match('--image-file-accelerometer-back', 'url("devtools\:\/\/devtools\/bundled\/Images\/accelerometer-back\.svg")');
    });
    it('parses shadows correctly', function() {
        var _matchSingleValue = matchSingleValue('box-shadow', '/*0*/3px 3px red, -1em 0 .4em /*a*/ olive /*b*/', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ShadowMatcher()), match = _matchSingleValue.match, text = _matchSingleValue.text;
        assert.exists(match, text);
        assert.strictEqual(match.text, '/*0*/3px 3px red, -1em 0 .4em /*a*/ olive');
    });
    it('parses fonts correctly', function() {
        for(var _i = 0, _iter = [
            '-.23',
            'smaller',
            '17px'
        ]; _i < _iter.length; _i++){
            var fontSize = _iter[_i];
            var _matchSingleValue = matchSingleValue('font-size', fontSize, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.FontMatcher()), ast = _matchSingleValue.ast, match = _matchSingleValue.match, text = _matchSingleValue.text;
            assert.exists(ast, text);
            assert.exists(match, text);
            assert.strictEqual(match.text, fontSize);
        }
        {
            var ast1 = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.tokenizeDeclaration('font-family', '"Gill Sans", sans-serif');
            assert.exists(ast1);
            var matchedResult = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.walk(ast1, [
                new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.FontMatcher()
            ]);
            assert.exists(matchedResult);
            var matches = TreeSearch.findAll(ast1, function(node) {
                return _instanceof(matchedResult.getMatch(node), _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.FontMatch);
            });
            assert.deepStrictEqual(matches.map(function(m) {
                var _matchedResult_getMatch;
                return (_matchedResult_getMatch = matchedResult.getMatch(m)) === null || _matchedResult_getMatch === void 0 ? void 0 : _matchedResult_getMatch.text;
            }), [
                '"Gill Sans"',
                'sans-serif'
            ]);
        }
    });
    it('parses grid templates correctly', function() {
        injectVariableSubstitutions({
            '--row': '"a a b"',
            '--row-with-names': '[name1] "a a" [name2]',
            '--line-name': '[name1]',
            '--double-row': '"a b" "b c"'
        });
        {
            var _matchSingleValue = matchSingleValue('grid', '"a a"', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.GridTemplateMatcher()), ast = _matchSingleValue.ast, match = _matchSingleValue.match, text = _matchSingleValue.text;
            assert.exists(ast, text);
            assert.exists(match, text);
            assert.strictEqual(match.lines.map(function(line) {
                return line.map(function(n) {
                    return ast.text(n);
                }).join(' ');
            }).join('\n'), '"a a"');
        }
        {
            var _matchSingleValue1 = matchSingleValue('grid-template-areas', '"a a a" "b b b" "c c c"', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.GridTemplateMatcher()), ast1 = _matchSingleValue1.ast, match1 = _matchSingleValue1.match, text1 = _matchSingleValue1.text;
            assert.exists(ast1, text1);
            assert.exists(match1, text1);
            assert.deepStrictEqual(match1.lines.map(function(line) {
                return line.map(function(n) {
                    return ast1.text(n);
                }).join(' ');
            }), [
                '"a a a"',
                '"b b b"',
                '"c c c"'
            ]);
        }
        {
            var _matchSingleValue2 = matchSingleValue('grid-template', '"a a a" var(--row) / auto 1fr auto', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.GridTemplateMatcher()), ast2 = _matchSingleValue2.ast, match2 = _matchSingleValue2.match, text2 = _matchSingleValue2.text;
            assert.exists(ast2, text2);
            assert.exists(match2, text2);
            assert.deepStrictEqual(match2.lines.map(function(line) {
                return line.map(function(n) {
                    return ast2.text(n);
                }).join(' ');
            }), [
                '"a a a"',
                'var(--row) / auto 1fr auto'
            ]);
        }
        {
            var _matchSingleValue3 = matchSingleValue('grid', '[header-top] "a a" var(--row-with-names) [main-top] "b b b" 1fr [main-bottom] / auto 1fr auto;', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.GridTemplateMatcher()), ast3 = _matchSingleValue3.ast, match3 = _matchSingleValue3.match, text3 = _matchSingleValue3.text;
            assert.exists(ast3, text3);
            assert.exists(match3, text3);
            assert.deepStrictEqual(match3.lines.map(function(line) {
                return line.map(function(n) {
                    return ast3.text(n);
                }).join(' ');
            }), [
                '[header-top] "a a" var(--row-with-names)',
                '[main-top] "b b b" 1fr [main-bottom] / auto 1fr auto'
            ]);
        }
        {
            var _matchSingleValue4 = matchSingleValue('grid', '[header-top] "a a" "b b b" var(--line-name) "c c" / auto 1fr auto;', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.GridTemplateMatcher()), ast4 = _matchSingleValue4.ast, match4 = _matchSingleValue4.match, text4 = _matchSingleValue4.text;
            assert.exists(ast4, text4);
            assert.exists(match4, text4);
            assert.deepStrictEqual(match4.lines.map(function(line) {
                return line.map(function(n) {
                    return ast4.text(n);
                }).join(' ');
            }), [
                '[header-top] "a a"',
                '"b b b" var(--line-name)',
                '"c c" / auto 1fr auto'
            ]);
        }
        {
            var _matchSingleValue5 = matchSingleValue('grid', '[line1] "a a" [line2] var(--double-row) "b b" / auto 1fr auto;', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.GridTemplateMatcher()), ast5 = _matchSingleValue5.ast, match5 = _matchSingleValue5.match, text5 = _matchSingleValue5.text;
            assert.exists(ast5, text5);
            assert.exists(match5, text5);
            assert.deepStrictEqual(match5.lines.map(function(line) {
                return line.map(function(n) {
                    return ast5.text(n);
                }).join(' ');
            }), [
                '[line1] "a a" [line2]',
                'var(--double-row)',
                '"b b" / auto 1fr auto'
            ]);
        }
        {
            var _matchSingleValue6 = matchSingleValue('grid', '"a a" var(--unresolved) / auto 1fr auto;', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.GridTemplateMatcher()), ast6 = _matchSingleValue6.ast, match6 = _matchSingleValue6.match, text6 = _matchSingleValue6.text;
            assert.exists(ast6, text6);
            assert.exists(match6, text6);
            assert.deepStrictEqual(match6.lines.map(function(line) {
                return line.map(function(n) {
                    return ast6.text(n);
                }).join(' ');
            }), [
                '"a a" var(--unresolved) / auto 1fr auto'
            ]);
        }
    });
    it('parses light-dark correctly', function() {
        for(var _i = 0, _iter = [
            'light-dark()',
            'light-dark(red)',
            'light-dark(var(--foo))'
        ]; _i < _iter.length; _i++){
            var fail = _iter[_i];
            var _matchSingleValue = matchSingleValue('color', fail, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.LightDarkColorMatcher()), match = _matchSingleValue.match, text = _matchSingleValue.text;
            assert.isNull(match, text);
        }
        for(var _i1 = 0, _iter1 = [
            'light-dark(red, blue)',
            'light-dark(var(--foo), red)',
            'light-dark(red, var(--foo))',
            'light-dark(var(--foo), var(--bar))'
        ]; _i1 < _iter1.length; _i1++){
            var succeed = _iter1[_i1];
            var _matchSingleValue1 = matchSingleValue('color', succeed, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.LightDarkColorMatcher()), ast = _matchSingleValue1.ast, match1 = _matchSingleValue1.match, text1 = _matchSingleValue1.text;
            assert.exists(ast, text1);
            assert.exists(match1, text1);
            var _succeed_slice_split = _sliced_to_array(succeed.slice('light-dark('.length, -1).split(', '), 2), light = _succeed_slice_split[0], dark = _succeed_slice_split[1];
            assert.lengthOf(match1.light, 1);
            assert.lengthOf(match1.dark, 1);
            assert.strictEqual(ast.text(match1.light[0]), light);
            assert.strictEqual(ast.text(match1.dark[0]), dark);
        }
        // light-dark only applies to color properties
        var _matchSingleValue2 = matchSingleValue('width', 'light-dark(red, blue)', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.LightDarkColorMatcher()), match2 = _matchSingleValue2.match, text2 = _matchSingleValue2.text;
        assert.isNull(match2, text2);
    });
    describe('AnchorFunctionMatcher', function() {
        it('should not match when it is not a call expression', function() {
            var _matchSingleValue = matchSingleValue('left', 'anchor', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AnchorFunctionMatcher()), match = _matchSingleValue.match, text = _matchSingleValue.text;
            assert.isNull(match, text);
        });
        it('should not match if the anchor() and anchor-size() calls dont have any arguments', function() {
            var _matchSingleValue = matchSingleValue('left', 'anchor()', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AnchorFunctionMatcher()), anchorMatch = _matchSingleValue.match;
            assert.isNull(anchorMatch);
            var _matchSingleValue1 = matchSingleValue('width', 'anchor-size()', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AnchorFunctionMatcher()), anchorSizeMatch = _matchSingleValue1.match;
            assert.isNull(anchorSizeMatch);
        });
        it('should match if it is an anchor() or anchor-size() call', function() {
            var _matchSingleValue = matchSingleValue('left', 'anchor(left)', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AnchorFunctionMatcher()), anchorMatch = _matchSingleValue.match, anchorText = _matchSingleValue.text;
            assert.exists(anchorMatch, anchorText);
            var _matchSingleValue1 = matchSingleValue('width', 'anchor-size(width)', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AnchorFunctionMatcher()), anchorSizeMatch = _matchSingleValue1.match, anchorSizeText = _matchSingleValue1.text;
            assert.exists(anchorSizeMatch, anchorSizeText);
        });
        it('should match dashed identifier as name from the first argument', function() {
            var _matchSingleValue = matchSingleValue('left', 'anchor(--dashed-ident left)', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AnchorFunctionMatcher()), anchorAst = _matchSingleValue.ast, anchorMatch = _matchSingleValue.match, anchorText = _matchSingleValue.text;
            assert.exists(anchorMatch, anchorText);
            assert.strictEqual(anchorAst.text(anchorMatch.args[0]), '--dashed-ident');
            var _matchSingleValue1 = matchSingleValue('width', 'anchor-size(--dashed-ident width)', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AnchorFunctionMatcher()), anchorSizeAst = _matchSingleValue1.ast, anchorSizeMatch = _matchSingleValue1.match, anchorSizeText = _matchSingleValue1.text;
            assert.exists(anchorSizeMatch, anchorSizeText);
            assert.strictEqual(anchorSizeAst.text(anchorSizeMatch.args[0]), '--dashed-ident');
        });
    });
    describe('PositionAnchorMatcher', function() {
        it('should match `position-anchor` property with dashed identifier', function() {
            var _matchSingleValue = matchSingleValue('position-anchor', '--dashed-ident', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.PositionAnchorMatcher()), match = _matchSingleValue.match, text = _matchSingleValue.text;
            assert.exists(match, text);
            assert.strictEqual(match.text, '--dashed-ident');
        });
        it('should not match `position-anchor` property when it is not a dashed identifier', function() {
            var match = matchSingleValue('position-anchor', 'something-non-dashed', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.PositionAnchorMatcher()).match;
            assert.isNull(match);
        });
    });
    it('matches lengths', function() {
        var _matchSingleValue = matchSingleValue('min-width', '100px', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.LengthMatcher()), match = _matchSingleValue.match, text = _matchSingleValue.text;
        assert.exists(match, text);
        assert.strictEqual(match.text, '100px');
    });
}); //# sourceMappingURL=PropertyMatchers.test.js.map


}),
"./panels/elements/elements.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AccessibilityTreeUtils: function() { return /* reexport module object */ _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_25__; },
  AccessibilityTreeView: function() { return /* reexport module object */ _AccessibilityTreeView_js__WEBPACK_IMPORTED_MODULE_26__; },
  CSSRuleValidator: function() { return /* reexport module object */ _CSSRuleValidator_js__WEBPACK_IMPORTED_MODULE_20__; },
  ClassesPaneWidget: function() { return /* reexport module object */ _ClassesPaneWidget_js__WEBPACK_IMPORTED_MODULE_22__; },
  ColorSwatchPopoverIcon: function() { return /* reexport module object */ _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_1__; },
  ComputedStyleModel: function() { return /* reexport module object */ _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  ComputedStyleWidget: function() { return /* reexport module object */ _ComputedStyleWidget_js__WEBPACK_IMPORTED_MODULE_19__; },
  DOMLinkifier: function() { return /* reexport module object */ _DOMLinkifier_js__WEBPACK_IMPORTED_MODULE_3__; },
  DOMPath: function() { return /* reexport module object */ _DOMPath_js__WEBPACK_IMPORTED_MODULE_4__; },
  ElementStatePaneWidget: function() { return /* reexport module object */ _ElementStatePaneWidget_js__WEBPACK_IMPORTED_MODULE_23__; },
  ElementsPanel: function() { return /* reexport module object */ _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_21__; },
  ElementsSidebarPane: function() { return /* reexport module object */ _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__; },
  ElementsTreeElement: function() { return /* reexport module object */ _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_6__; },
  ElementsTreeElementHighlighter: function() { return /* reexport module object */ _ElementsTreeElementHighlighter_js__WEBPACK_IMPORTED_MODULE_24__; },
  ElementsTreeOutline: function() { return /* reexport module object */ _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_8__; },
  EventListenersWidget: function() { return /* reexport module object */ _EventListenersWidget_js__WEBPACK_IMPORTED_MODULE_9__; },
  InspectElementModeController: function() { return /* reexport module object */ _InspectElementModeController_js__WEBPACK_IMPORTED_MODULE_0__; },
  LayersWidget: function() { return /* reexport module object */ _LayersWidget_js__WEBPACK_IMPORTED_MODULE_27__; },
  MarkerDecorator: function() { return /* reexport module object */ _MarkerDecorator_js__WEBPACK_IMPORTED_MODULE_10__; },
  MetricsSidebarPane: function() { return /* reexport module object */ _MetricsSidebarPane_js__WEBPACK_IMPORTED_MODULE_11__; },
  NodeStackTraceWidget: function() { return /* reexport module object */ _NodeStackTraceWidget_js__WEBPACK_IMPORTED_MODULE_14__; },
  PlatformFontsWidget: function() { return /* reexport module object */ _PlatformFontsWidget_js__WEBPACK_IMPORTED_MODULE_12__; },
  PropertiesWidget: function() { return /* reexport module object */ _PropertiesWidget_js__WEBPACK_IMPORTED_MODULE_13__; },
  PropertyMatchers: function() { return /* reexport module object */ _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_28__; },
  PropertyRenderer: function() { return /* reexport module object */ _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_29__; },
  StyleEditorWidget: function() { return /* reexport module object */ _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_30__; },
  StylePropertiesSection: function() { return /* reexport module object */ _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_15__; },
  StylePropertyHighlighter: function() { return /* reexport module object */ _StylePropertyHighlighter_js__WEBPACK_IMPORTED_MODULE_16__; },
  StylePropertyTreeElement: function() { return /* reexport module object */ _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_18__; },
  StylePropertyUtils: function() { return /* reexport module object */ _StylePropertyUtils_js__WEBPACK_IMPORTED_MODULE_31__; },
  StylesSidebarPane: function() { return /* reexport module object */ _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_17__; },
  TopLayerContainer: function() { return /* reexport module object */ _TopLayerContainer_js__WEBPACK_IMPORTED_MODULE_7__; },
  WebCustomData: function() { return /* reexport module object */ _WebCustomData_js__WEBPACK_IMPORTED_MODULE_32__; }
});
/* harmony import */var _InspectElementModeController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InspectElementModeController.js */ "./panels/elements/InspectElementModeController.js");
/* harmony import */var _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorSwatchPopoverIcon.js */ "./panels/elements/ColorSwatchPopoverIcon.js");
/* harmony import */var _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputedStyleModel.js */ "./panels/elements/ComputedStyleModel.js");
/* harmony import */var _DOMLinkifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMLinkifier.js */ "./panels/elements/DOMLinkifier.js");
/* harmony import */var _DOMPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMPath.js */ "./panels/elements/DOMPath.js");
/* harmony import */var _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementsSidebarPane.js */ "./panels/elements/ElementsSidebarPane.js");
/* harmony import */var _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ElementsTreeElement.js */ "./panels/elements/ElementsTreeElement.js");
/* harmony import */var _TopLayerContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopLayerContainer.js */ "./panels/elements/TopLayerContainer.js");
/* harmony import */var _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ElementsTreeOutline.js */ "./panels/elements/ElementsTreeOutline.js");
/* harmony import */var _EventListenersWidget_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EventListenersWidget.js */ "./panels/elements/EventListenersWidget.js");
/* harmony import */var _MarkerDecorator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MarkerDecorator.js */ "./panels/elements/MarkerDecorator.js");
/* harmony import */var _MetricsSidebarPane_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MetricsSidebarPane.js */ "./panels/elements/MetricsSidebarPane.js");
/* harmony import */var _PlatformFontsWidget_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PlatformFontsWidget.js */ "./panels/elements/PlatformFontsWidget.js");
/* harmony import */var _PropertiesWidget_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PropertiesWidget.js */ "./panels/elements/PropertiesWidget.js");
/* harmony import */var _NodeStackTraceWidget_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NodeStackTraceWidget.js */ "./panels/elements/NodeStackTraceWidget.js");
/* harmony import */var _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./StylePropertiesSection.js */ "./panels/elements/StylePropertiesSection.js");
/* harmony import */var _StylePropertyHighlighter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./StylePropertyHighlighter.js */ "./panels/elements/StylePropertyHighlighter.js");
/* harmony import */var _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./StylesSidebarPane.js */ "./panels/elements/StylesSidebarPane.js");
/* harmony import */var _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StylePropertyTreeElement.js */ "./panels/elements/StylePropertyTreeElement.js");
/* harmony import */var _ComputedStyleWidget_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ComputedStyleWidget.js */ "./panels/elements/ComputedStyleWidget.js");
/* harmony import */var _CSSRuleValidator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./CSSRuleValidator.js */ "./panels/elements/CSSRuleValidator.js");
/* harmony import */var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ElementsPanel.js */ "./panels/elements/ElementsPanel.js");
/* harmony import */var _ClassesPaneWidget_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ClassesPaneWidget.js */ "./panels/elements/ClassesPaneWidget.js");
/* harmony import */var _ElementStatePaneWidget_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ElementStatePaneWidget.js */ "./panels/elements/ElementStatePaneWidget.js");
/* harmony import */var _ElementsTreeElementHighlighter_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ElementsTreeElementHighlighter.js */ "./panels/elements/ElementsTreeElementHighlighter.js");
/* harmony import */var _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./AccessibilityTreeUtils.js */ "./panels/elements/AccessibilityTreeUtils.js");
/* harmony import */var _AccessibilityTreeView_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./AccessibilityTreeView.js */ "./panels/elements/AccessibilityTreeView.js");
/* harmony import */var _LayersWidget_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./LayersWidget.js */ "./panels/elements/LayersWidget.js");
/* harmony import */var _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./PropertyMatchers.js */ "./panels/elements/PropertyMatchers.js");
/* harmony import */var _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./PropertyRenderer.js */ "./panels/elements/PropertyRenderer.js");
/* harmony import */var _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./StyleEditorWidget.js */ "./panels/elements/StyleEditorWidget.js");
/* harmony import */var _StylePropertyUtils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./StylePropertyUtils.js */ "./panels/elements/StylePropertyUtils.js");
/* harmony import */var _WebCustomData_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./WebCustomData.js */ "./panels/elements/WebCustomData.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




























































 //# sourceMappingURL=elements.js.map


}),
"./testing/PropertyParser.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Printer: function() { return Printer; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) {
            throw new TypeError("attempted to read set only private field");
        }
        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value (v){
                    descriptor.set.call(receiver, v);
                },
                get value () {
                    return descriptor.get.call(receiver);
                }
            };
        }
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
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
function _class_private_field_update(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "update");
    return _class_apply_descriptor_update(receiver, descriptor);
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


var _printedText = /*#__PURE__*/ new WeakMap(), _indent = /*#__PURE__*/ new WeakMap();
var Printer = /*#__PURE__*/ function(_SDK_CSSPropertyParser_TreeWalker) {
    "use strict";
    _inherits(Printer, _SDK_CSSPropertyParser_TreeWalker);
    var _super = _create_super(Printer);
    function Printer() {
        _class_call_check(this, Printer);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_field_init(_assert_this_initialized(_this), _printedText, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _indent, {
            writable: true,
            value: 0
        });
        return _this;
    }
    _create_class(Printer, [
        {
            key: "enter",
            value: function enter(param) {
                var node = param.node;
                var text = this.ast.text(node);
                _class_private_field_get(this, _printedText).push("".concat('|'.repeat(_class_private_field_get(this, _indent)), " ").concat(node.name).concat(text !== node.name ? ": ".concat(text) : ''));
                _class_private_field_update(this, _indent).value++;
                return true;
            }
        },
        {
            key: "leave",
            value: function leave() {
                _class_private_field_update(this, _indent).value--;
            }
        },
        {
            key: "get",
            value: function get() {
                return _class_private_field_get(this, _printedText).join('\n');
            }
        }
    ], [
        {
            key: "log",
            value: function log(ast) {
                /* eslint-disable-next-line no-console */ console.log(Printer.walk(ast).get());
            }
        },
        {
            key: "rule",
            value: function rule(rule) {
                var ast = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.SyntaxTree('', rule, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.css.cssLanguage.parser.parse(rule).topNode);
                return Printer.walk(ast).get();
            }
        }
    ]);
    return Printer;
} //# sourceMappingURL=PropertyParser.js.map
(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.TreeWalker);


}),

}]);