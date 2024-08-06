"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_CSSPropertyParser_test_js"], {
"./core/sdk/CSSPropertyParser.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_PropertyParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/PropertyParser.js */ "./testing/PropertyParser.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _to_array(arr) {
    return _array_with_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_rest();
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


describe('CSSPropertyParser', function() {
    var matchSingleValue = function matchSingleValue(name, value, matcher) {
        var ast = _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.tokenizeDeclaration(name, value);
        if (!ast) {
            return {
                ast: ast,
                match: null,
                text: value
            };
        }
        var matchedResult = _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, [
            matcher
        ]);
        var matchedNode = TreeSearch.find(ast, function(n) {
            return _instanceof(matchedResult.getMatch(n), matcher.matchType);
        });
        var match = matchedNode && matchedResult.getMatch(matchedNode);
        return {
            ast: ast,
            match: _instanceof(match, matcher.matchType) ? match : null,
            text: _testing_PropertyParser_js__WEBPACK_IMPORTED_MODULE_0__.Printer.walk(ast).get()
        };
    };
    var tokenizeDeclaration = function tokenizeDeclaration(name, value) {
        var ast = _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.tokenizeDeclaration(name, value);
        assert.exists(ast, _testing_PropertyParser_js__WEBPACK_IMPORTED_MODULE_0__.Printer.rule("*{".concat(name, ": ").concat(value, ";}")));
        return ast;
    };
    describe('stripComments', function() {
        var stripComments = _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.stripComments;
        it('should strip a single comment', function() {
            assert.strictEqual(stripComments('text /* comment */ text'), 'text  text');
        });
        it('should strip a multiline comment', function() {
            assert.strictEqual(stripComments("text /* comment\n      some other comment */ text"), 'text  text');
        });
        it('should strip a comment with a comment start string', function() {
            assert.strictEqual(stripComments('text /* comment /* comment */ text'), 'text  text');
        });
        it('should strip multiple commnets', function() {
            assert.strictEqual(stripComments('text /* comment */ text /* comment */ text'), 'text  text  text');
        });
    });
    describe('parseFontVariationSettings', function() {
        var parseFontVariationSettings = _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.parseFontVariationSettings;
        it('should parse settings with a single value', function() {
            assert.deepEqual(parseFontVariationSettings('"wght" 10'), [
                {
                    tag: 'wght',
                    value: 10
                }
            ]);
        });
        it('should parse settings with multiple values', function() {
            assert.deepEqual(parseFontVariationSettings('"wght" 10, "wdth" 20'), [
                {
                    tag: 'wght',
                    value: 10
                },
                {
                    tag: 'wdth',
                    value: 20
                }
            ]);
        });
        it('should parse settings with a single float value', function() {
            assert.deepEqual(parseFontVariationSettings('"wght" 5.5'), [
                {
                    tag: 'wght',
                    value: 5.5
                }
            ]);
        });
    });
    describe('parseFontFamily', function() {
        var parseFontFamily = _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.parseFontFamily;
        it('should parse a single unquoted name', function() {
            assert.deepEqual(parseFontFamily('Arial'), [
                'Arial'
            ]);
        });
        it('should parse a double quoted name with spaces', function() {
            assert.deepEqual(parseFontFamily('"Some font"'), [
                'Some font'
            ]);
        });
        it('should parse a single quoted name with spaces', function() {
            assert.deepEqual(parseFontFamily('\'Some font\''), [
                'Some font'
            ]);
        });
        it('should parse multiple names', function() {
            assert.deepEqual(parseFontFamily('  Arial  , "Some font" , serif'), [
                'Arial',
                'Some font',
                'serif'
            ]);
        });
    });
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
    }(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.TreeWalker);
    describe('PropertyParser', function() {
        it('correctly identifies spacing', function() {
            var requiresSpace = function(a, b) {
                return _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.requiresSpace([
                    document.createTextNode(a)
                ], [
                    document.createTextNode(b)
                ]);
            };
            assert.isTrue(requiresSpace('a', 'b'));
            assert.isFalse(requiresSpace('', 'text'));
            assert.isFalse(requiresSpace('(', 'text'));
            assert.isFalse(requiresSpace(' ', 'text'));
            assert.isFalse(requiresSpace('{', 'text'));
            assert.isFalse(requiresSpace('}', 'text'));
            assert.isFalse(requiresSpace(';', 'text'));
            assert.isFalse(requiresSpace('text(', 'text'));
            assert.isFalse(requiresSpace('text ', 'text'));
            assert.isFalse(requiresSpace('text{', 'text'));
            assert.isFalse(requiresSpace('text}', 'text'));
            assert.isFalse(requiresSpace('text;', 'text'));
            assert.isFalse(requiresSpace('text', ''));
            assert.isFalse(requiresSpace('text', '('));
            assert.isFalse(requiresSpace('text', ')'));
            assert.isFalse(requiresSpace('text', ','));
            assert.isFalse(requiresSpace('text', ':'));
            assert.isFalse(requiresSpace('text', ' '));
            assert.isFalse(requiresSpace('text', '*'));
            assert.isFalse(requiresSpace('text', '{'));
            assert.isFalse(requiresSpace('text', ';'));
            assert.isFalse(requiresSpace('text', '( text'));
            assert.isFalse(requiresSpace('text', ') text'));
            assert.isFalse(requiresSpace('text', ', text'));
            assert.isFalse(requiresSpace('text', ': text'));
            assert.isFalse(requiresSpace('text', ' text'));
            assert.isFalse(requiresSpace('text', '* text'));
            assert.isFalse(requiresSpace('text', '{ text'));
            assert.isFalse(requiresSpace('text', '; text'));
            assert.isTrue(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.requiresSpace([
                document.createTextNode('text'),
                document.createElement('div')
            ], [
                document.createTextNode('text')
            ]));
            assert.isTrue(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.requiresSpace([
                document.createTextNode('text')
            ], [
                document.createElement('div'),
                document.createTextNode('text')
            ]));
            assert.isTrue(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.requiresSpace([
                document.createTextNode('text'),
                document.createElement('div')
            ], [
                document.createElement('div'),
                document.createTextNode('text')
            ]));
            assert.isFalse(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.requiresSpace([
                document.createTextNode('text'),
                document.createElement('div')
            ], [
                document.createTextNode(' text')
            ]));
            assert.isFalse(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.requiresSpace([
                document.createTextNode('text')
            ], [
                document.createElement('div'),
                document.createTextNode(' text')
            ]));
            assert.isFalse(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.requiresSpace([
                document.createTextNode('text'),
                document.createElement('div')
            ], [
                document.createElement('div'),
                document.createTextNode(' text')
            ]));
        });
        it('parses comments', function() {
            var _ast_tree_parent_parent, _ast_tree_parent;
            var property = '/* color: red */blue/* color: red */';
            var ast = tokenizeDeclaration('--property', property);
            var topNode = (_ast_tree_parent = ast.tree.parent) === null || _ast_tree_parent === void 0 ? void 0 : (_ast_tree_parent_parent = _ast_tree_parent.parent) === null || _ast_tree_parent_parent === void 0 ? void 0 : _ast_tree_parent_parent.parent;
            assert.exists(topNode);
            assert.strictEqual(_testing_PropertyParser_js__WEBPACK_IMPORTED_MODULE_0__.Printer.walk(ast.subtree(topNode)).get(), " StyleSheet: *{--property: /* color: red */blue/* color: red */;}\n| RuleSet: *{--property: /* color: red */blue/* color: red */;}\n|| UniversalSelector: *\n|| Block: {--property: /* color: red */blue/* color: red */;}\n||| {\n||| Declaration: --property: /* color: red */blue\n|||| VariableName: --property\n|||| :\n|||| Comment: /* color: red */\n|||| ValueName: blue\n||| Comment: /* color: red */\n||| ;\n||| }");
        });
        it('correctly tokenizes invalid text', function() {
            assert.isNull(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.tokenizeDeclaration('--p', ''));
            assert.isNull(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.tokenizeDeclaration('--p', '/*'));
            assert.isNull(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.tokenizeDeclaration('--p', '}'));
        });
        it('correctly parses property names', function() {
            var _tokenizeDeclaration, _tokenizeDeclaration1, _tokenizeDeclaration2, _tokenizeDeclaration3;
            assert.strictEqual((_tokenizeDeclaration = tokenizeDeclaration('color /*comment*/', 'red')) === null || _tokenizeDeclaration === void 0 ? void 0 : _tokenizeDeclaration.propertyName, 'color');
            assert.strictEqual((_tokenizeDeclaration1 = tokenizeDeclaration('/*comment*/color/*comment*/', 'red')) === null || _tokenizeDeclaration1 === void 0 ? void 0 : _tokenizeDeclaration1.propertyName, 'color');
            assert.strictEqual((_tokenizeDeclaration2 = tokenizeDeclaration(' /*comment*/color', 'red')) === null || _tokenizeDeclaration2 === void 0 ? void 0 : _tokenizeDeclaration2.propertyName, 'color');
            assert.strictEqual((_tokenizeDeclaration3 = tokenizeDeclaration('co/*comment*/lor', 'red')) === null || _tokenizeDeclaration3 === void 0 ? void 0 : _tokenizeDeclaration3.propertyName, 'lor');
            assert.isNull(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.tokenizeDeclaration('co:lor', 'red'));
        });
        var ComputedTextMatch = /*#__PURE__*/ function() {
            "use strict";
            function ComputedTextMatch(text, constructedText) {
                _class_call_check(this, ComputedTextMatch);
                _define_property(this, "text", void 0);
                _define_property(this, "constructedText", void 0);
                _define_property(this, "node", void 0);
                this.text = text;
                this.constructedText = constructedText;
                this.node = {};
            }
            _create_class(ComputedTextMatch, [
                {
                    key: "computedText",
                    value: function computedText() {
                        return this.constructedText;
                    }
                }
            ]);
            return ComputedTextMatch;
        }();
        it('computes ComputedText', function() {
            var originalText = 'abcdefghijklmnopqrstuvwxyz';
            // computed text:    '        +++--     ------  '
            // Where + means a replacement, - means a deletion, i.e., computed texts are shorter than the corresponding
            // original snippet.
            var computedText = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.ComputedText(originalText);
            // 'abcdefghijklmnopqrstuvwxyz'
            //    |----|
            assert.strictEqual(computedText.get(2, 8), 'cdefgh');
            computedText.push(new ComputedTextMatch('ijklm', '012'), originalText.indexOf('i'));
            computedText.push(new ComputedTextMatch('stuvwx', ''), originalText.indexOf('s'));
            // Range starts in original text before the first chunk, ends in original text before the first chunk
            // 'abcdefghijklmnopqrstuvwxyz'
            //    |----|
            // 'abcdefgh012  nopqr      yz'
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('h')), 'cdefg');
            // Range ends in original text after the first chunk
            // 'abcdefghijklmnopqrstuvwxyz'
            //    |-----------|
            // 'abcdefgh012  nopqr      yz'
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('o')), 'cdefgh 012 n');
            // Range ends in original text ends on the beginning of a chunk
            // 'abcdefghijklmnopqrstuvwxyz'
            //    |-----|
            // 'abcdefgh012  nopqr      yz'
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('i')), 'cdefgh');
            // Range ends in original text ends on the end of a chunk
            // 'abcdefghijklmnopqrstuvwxyz'
            //    |----------|
            // 'abcdefgh012  nopqr      yz'
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('n')), 'cdefgh 012');
            // Range ends in original text after the second chunk
            // 'abcdefghijklmnopqrstuvwxyz'
            //    |----------------------|
            // 'abcdefgh012  nopqr      yz'
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('z')), 'cdefgh 012 nopqr y');
            // Range ends in original text after the second chunk containing no chunk
            // 'abcdefghijklmnopqrstuvwxyz'
            //                          ||
            // 'abcdefgh012  nopqr      yz'
            assert.strictEqual(computedText.get(originalText.indexOf('y'), originalText.indexOf('z') + 1), 'yz');
            // Range ends in original text on the end of the second chunk
            // 'abcdefghijklmnopqrstuvwxyz'
            //    |---------------------|
            // 'abcdefgh012  nopqr      yz'
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('y')), 'cdefgh 012 nopqr');
            // range starts in original text after the chunk
            // 'abcdefghijklmnopqrstuvwxyz'
            //                |-|
            // 'abcdefgh012  nopqr      yz'
            assert.strictEqual(computedText.get(originalText.indexOf('o'), originalText.indexOf('q')), 'op');
            // range starts on the first chunk
            // 'abcdefghijklmnopqrstuvwxyz'
            //          |-------|
            // 'abcdefgh012  nopqr      yz'
            assert.strictEqual(computedText.get(originalText.indexOf('i'), originalText.indexOf('q')), '012 nop');
            // range starts on the second chunk
            // 'abcdefghijklmnopqrstuvwxyz'
            //                    |------|
            // 'abcdefgh012  nopqr      yz'
            assert.strictEqual(computedText.get(originalText.indexOf('s'), originalText.indexOf('z')), 'y');
            // range starts in the middle of a chunk
            // 'abcdefghijklmnopqrstuvwxyz'
            //           |-----|
            // 'abcdefgh012  nopqr      yz'
            assert.strictEqual(computedText.get(originalText.indexOf('j'), originalText.indexOf('p')), 'jklmno');
            // range ends in the middle of a chunk
            // 'abcdefghijklmnopqrstuvwxyz'
            //       |-----|
            // 'abcdefgh012  nopqr      yz'
            assert.strictEqual(computedText.get(originalText.indexOf('f'), originalText.indexOf('l')), 'fghijk');
        });
        it('computes ComputedText with overlapping ranges', function() {
            var originalText = 'abcdefghijklmnopqrstuvwxyz';
            var computedText = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.ComputedText(originalText);
            var push = function(from, to) {
                var text = originalText.substring(originalText.indexOf(from), originalText.indexOf(to) + 1);
                assert.isAbove(text.length, 1);
                // This means computed and authored test have identical length, but we're testing the computed text stitching
                // sufficiently above.
                computedText.push(new ComputedTextMatch(text, text.toUpperCase()), originalText.indexOf(text[0]));
            };
            // 'abcdefghijklmnopqrstuvwxyz'
            //    |-----------|
            //    |----|
            //   ++++++++++++++++          (requested ranges)
            //    +++++++++++++++
            //   ++++++++
            //   +++++++
            //    +++++++
            //    ++++++
            computedText.clear();
            push('c', 'o');
            push('c', 'h');
            assert.strictEqual(computedText.get(originalText.indexOf('b'), originalText.indexOf('q') + 1), 'b CDEFGHIJKLMNO pq');
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('q') + 1), 'CDEFGHIJKLMNO pq');
            assert.strictEqual(computedText.get(originalText.indexOf('b'), originalText.indexOf('i') + 1), 'b CDEFGH i');
            assert.strictEqual(computedText.get(originalText.indexOf('b'), originalText.indexOf('h') + 1), 'b CDEFGH');
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('i') + 1), 'CDEFGH i');
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('h') + 1), 'CDEFGH');
            // 'abcdefghijklmnopqrstuvwxyz'
            //    |-----------|
            //         |----|
            //   ++++++++++++++++
            //         +++++++
            //        ++++++++
            //   ++++++++++++
            //    +++++++++++
            computedText.clear();
            push('c', 'o');
            push('h', 'm');
            assert.strictEqual(computedText.get(originalText.indexOf('b'), originalText.indexOf('q') + 1), 'b CDEFGHIJKLMNO pq');
            assert.strictEqual(computedText.get(originalText.indexOf('h'), originalText.indexOf('n') + 1), 'HIJKLM n');
            assert.strictEqual(computedText.get(originalText.indexOf('g'), originalText.indexOf('n') + 1), 'g HIJKLM n');
            assert.strictEqual(computedText.get(originalText.indexOf('b'), originalText.indexOf('m') + 1), 'bcdefg HIJKLM');
            assert.strictEqual(computedText.get(originalText.indexOf('d'), originalText.indexOf('m') + 1), 'defg HIJKLM');
            // 'abcdefghijklmnopqrstuvwxyz'
            //    |-----------|
            //           |----|
            //   ++++++++++++++++
            //           ++++++
            //          +++++++
            computedText.clear();
            // Swap the insertion order around to test sorting behavior.
            push('j', 'o');
            push('c', 'o');
            assert.strictEqual(computedText.get(originalText.indexOf('b'), originalText.indexOf('q') + 1), 'b CDEFGHIJKLMNO pq');
            assert.strictEqual(computedText.get(originalText.indexOf('j'), originalText.indexOf('o') + 1), 'JKLMNO');
            assert.strictEqual(computedText.get(originalText.indexOf('i'), originalText.indexOf('o') + 1), 'i JKLMNO');
            // 'abcdefghijklmnopqrstuvwxyz'
            //    |-----------|
            //    |----| |--|
            //   ++++++++++++++++
            //    +++++++++++
            //    ++++++++++++
            //    +++++++
            //    ++++++
            //          +++++
            //          ++++++
            computedText.clear();
            push('c', 'o');
            push('c', 'h');
            push('j', 'm');
            assert.strictEqual(computedText.get(originalText.indexOf('b'), originalText.indexOf('q') + 1), 'b CDEFGHIJKLMNO pq');
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('n') + 1), 'CDEFGH i JKLM n');
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('m') + 1), 'CDEFGH i JKLM');
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('i') + 1), 'CDEFGH i');
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('h') + 1), 'CDEFGH');
            assert.strictEqual(computedText.get(originalText.indexOf('i'), originalText.indexOf('m') + 1), 'i JKLM');
            assert.strictEqual(computedText.get(originalText.indexOf('i'), originalText.indexOf('n') + 1), 'i JKLM n');
            // 'abcdefghijklmnopqrstuvwxyz';
            //    |-----------|
            //     |----| |--|
            //   ++++++++++++++++
            //    ++++++++++++
            //    +++++++++++++
            //     +++++++++++
            //     ++++++++++++
            // 'abcdefghijklmnopqrstuvwxyz';
            //    +++++++
            //    ++++++++
            //     ++++++
            //     +++++++
            // 'abcdefghijklmnopqrstuvwxyz';
            //           +++++
            //            ++++
            //           ++++++
            //            +++++
            // 'abcdefghijklmnopqrstuvwxyz';
            computedText.clear();
            // Swap the insertion order around to test sorting behavior.
            push('k', 'n');
            push('c', 'o');
            push('d', 'i');
            assert.strictEqual(computedText.get(originalText.indexOf('b'), originalText.indexOf('q') + 1), 'b CDEFGHIJKLMNO pq');
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('n') + 1), 'c DEFGHI j KLMN');
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('o') + 1), 'CDEFGHIJKLMNO');
            assert.strictEqual(computedText.get(originalText.indexOf('d'), originalText.indexOf('n') + 1), 'DEFGHI j KLMN');
            assert.strictEqual(computedText.get(originalText.indexOf('d'), originalText.indexOf('o') + 1), 'DEFGHI j KLMN o');
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('i') + 1), 'c DEFGHI');
            assert.strictEqual(computedText.get(originalText.indexOf('c'), originalText.indexOf('j') + 1), 'c DEFGHI j');
            assert.strictEqual(computedText.get(originalText.indexOf('d'), originalText.indexOf('i') + 1), 'DEFGHI');
            assert.strictEqual(computedText.get(originalText.indexOf('d'), originalText.indexOf('j') + 1), 'DEFGHI j');
            assert.strictEqual(computedText.get(originalText.indexOf('j'), originalText.indexOf('n') + 1), 'j KLMN');
            assert.strictEqual(computedText.get(originalText.indexOf('k'), originalText.indexOf('n') + 1), 'KLMN');
            assert.strictEqual(computedText.get(originalText.indexOf('j'), originalText.indexOf('o') + 1), 'j KLMN o');
            assert.strictEqual(computedText.get(originalText.indexOf('k'), originalText.indexOf('o') + 1), 'KLMN o');
        });
        it('computes ComputedText with back-to-back chunks', function() {
            var computedText = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.ComputedText('abcdefgh');
            computedText.push(new ComputedTextMatch('abcd', '01234'), 0);
            computedText.push(new ComputedTextMatch('efgh', '56789'), 4);
            assert.strictEqual(computedText.get(0, 8), '01234 56789');
        });
        it('correctly produces the computed text during matching', function() {
            var ast = tokenizeDeclaration('--property', '1px /* red */ solid');
            var width = ast.tree.getChild('NumberLiteral');
            assert.exists(width);
            var style = ast.tree.getChild('ValueName');
            assert.exists(style);
            var matching = _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, []);
            assert.strictEqual(matching.getComputedText(ast.tree), '--property: 1px  solid');
            assert.strictEqual(matching.getComputedText(width), '1px');
            assert.strictEqual(matching.getComputedText(style), 'solid');
        });
        it('retains tokenization in the computed text', function() {
            var ast = tokenizeDeclaration('--property', 'dark/**/gray');
            var matching = _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, []);
            assert.strictEqual(matching.getComputedText(ast.tree), '--property: dark gray');
        });
        it('parses vars correctly', function() {
            var _loop = function(_i, _iter) {
                var succeed = _iter[_i];
                var _matchSingleValue = matchSingleValue('width', succeed, new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.VariableMatcher(function() {
                    return '';
                })), ast = _matchSingleValue.ast, match = _matchSingleValue.match, text = _matchSingleValue.text;
                assert.exists(ast, succeed);
                assert.exists(match, text);
                assert.strictEqual(match.text, succeed);
                assert.strictEqual(match.name, '--a');
                var _succeed_substring_split = _to_array(succeed.substring(4, succeed.length - 1).split(', ')), name = _succeed_substring_split[0], fallback = _succeed_substring_split.slice(1);
                assert.strictEqual(match.name, name);
                assert.strictEqual(match.fallback.map(function(n) {
                    return ast.text(n);
                }).join(' '), fallback.join(', '));
            };
            for(var _i = 0, _iter = [
                'var(--a)',
                'var(--a, 123)',
                'var(--a, calc(1+1))',
                'var(--a, var(--b))',
                'var(--a, var(--b, 123))',
                'var(--a, a b c)'
            ]; _i < _iter.length; _i++)_loop(_i, _iter);
            for(var _i1 = 0, _iter1 = [
                'var',
                'var(--a, 123, 123)',
                'var(a)',
                'var(--a'
            ]; _i1 < _iter1.length; _i1++){
                var fail = _iter1[_i1];
                var _matchSingleValue = matchSingleValue('width', fail, new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.VariableMatcher(function() {
                    return '';
                })), match = _matchSingleValue.match, text = _matchSingleValue.text;
                assert.isNull(match, text);
            }
        });
    });
}); //# sourceMappingURL=CSSPropertyParser.test.js.map


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