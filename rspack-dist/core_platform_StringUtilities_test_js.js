"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_platform_StringUtilities_test_js"], {
"./core/platform/StringUtilities.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ "./core/platform/platform.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _templateObject() {
    var data = _tagged_template_literal([
        "'foo'"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "'foo' and 'bar'"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\"'foo' and 'bar'\""
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "'foo' and \"bar\""
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "<!-- <script </script"
    ], [
        "\\x3C!-- \\x3Cscript \\x3C/script"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\\"
    ], [
        "\\\\"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}

describe('StringUtilities', function() {
    describe('escapeCharacters', function() {
        it('escapes the given characters', function() {
            var inputString = 'My string with a single quote \' in the middle';
            var charsToEscape = '\'';
            var outputString = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.escapeCharacters(inputString, charsToEscape);
            assert.strictEqual(outputString, 'My string with a single quote \\\' in the middle');
        });
        it('leaves the string alone if the characters are not found', function() {
            var inputString = 'Just a boring string';
            var charsToEscape = '\'';
            var outputString = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.escapeCharacters(inputString, charsToEscape);
            assert.strictEqual(outputString, inputString);
        });
    });
    describe('toBase64', function() {
        it('encodes correctly and supports unicode characters', function() {
            var fixtures = new Map([
                [
                    '',
                    ''
                ],
                [
                    'a',
                    'YQ=='
                ],
                [
                    'bc',
                    'YmM='
                ],
                [
                    'def',
                    'ZGVm'
                ],
                [
                    'ghij',
                    'Z2hpag=='
                ],
                [
                    'klmno',
                    'a2xtbm8='
                ],
                [
                    'pqrstu',
                    'cHFyc3R1'
                ],
                [
                    '\u0444\u5555\u6666\u7777',
                    '0YTllZXmmabnnbc='
                ]
            ]);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = fixtures[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _step_value = _sliced_to_array(_step.value, 2), inputString = _step_value[0], encodedString = _step_value[1];
                    assert.strictEqual(encodedString, _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.toBase64(inputString), "failed to encode ".concat(inputString, " correctly"));
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
        });
    });
    describe('findIndexesOfSubstring', function() {
        it('finds the expected indexes', function() {
            var inputString = '111111F1111111F11111111F';
            var indexes = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findIndexesOfSubString(inputString, 'F');
            assert.deepEqual(indexes, [
                6,
                14,
                23
            ]);
        });
    });
    describe('findLineEndingIndexes', function() {
        it('finds the indexes of the line endings and returns them', function() {
            var inputString = "1234\n56\n78\n9";
            var indexes = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findLineEndingIndexes(inputString);
            assert.deepEqual(indexes, [
                4,
                7,
                10,
                12
            ]);
        });
    });
    describe('isWhitespace', function() {
        it('correctly recognizes different kinds of whitespace', function() {
            assert.isTrue(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.isWhitespace(''));
            assert.isTrue(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.isWhitespace('  '));
            assert.isTrue(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.isWhitespace('\t'));
            assert.isTrue(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.isWhitespace('\n'));
            assert.isFalse(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.isWhitespace('  foo '));
        });
    });
    describe('trimURL', function() {
        it('trims the protocol and an optional domain from URLs', function() {
            var baseURLDomain = 'www.chromium.org';
            var fixtures = new Map([
                [
                    'http://www.chromium.org/foo/bar',
                    '/foo/bar'
                ],
                [
                    'https://www.CHromium.ORG/BAZ/zoo',
                    '/BAZ/zoo'
                ],
                [
                    'https://example.com/foo[]',
                    'example.com/foo[]'
                ]
            ]);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = fixtures[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _step_value = _sliced_to_array(_step.value, 2), url = _step_value[0], expected = _step_value[1];
                    assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.trimURL(url, baseURLDomain), expected, url);
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
        });
    });
    describe('collapseWhitespace', function() {
        it('collapses consecutive whitespace chars down to a single one', function() {
            var inputString = 'look                at this!';
            var outputString = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.collapseWhitespace(inputString);
            assert.strictEqual(outputString, 'look at this!');
        });
        it('matches globally and collapses all whitespace sections', function() {
            var inputString = 'a     b           c';
            var outputString = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.collapseWhitespace(inputString);
            assert.strictEqual(outputString, 'a b c');
        });
    });
    describe('reverse', function() {
        it('reverses the string', function() {
            var inputString = 'abc';
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.reverse(inputString), 'cba');
        });
        it('does nothing to an empty string', function() {
            assert.strictEqual('', _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.reverse(''));
        });
    });
    describe('replaceControlCharacters', function() {
        it('replaces C0 and C1 control character sets with the replacement character', function() {
            var charsThatShouldBeEscaped = [
                '\0',
                '\x01',
                '\x02',
                '\x03',
                '\x04',
                '\x05',
                '\x06',
                '\x07',
                '\b',
                '\x0B',
                '\f',
                '\x0E',
                '\x0F',
                '\x10',
                '\x11',
                '\x12',
                '\x13',
                '\x14',
                '\x15',
                '\x16',
                '\x17',
                '\x18',
                '\x19',
                '\x1A',
                '\x1B',
                '\x1C',
                '\x1D',
                '\x1E',
                '\x1F',
                '\x80',
                '\x81',
                '\x82',
                '\x83',
                '\x84',
                '\x85',
                '\x86',
                '\x87',
                '\x88',
                '\x89',
                '\x8A',
                '\x8B',
                '\x8C',
                '\x8D',
                '\x8E',
                '\x8F',
                '\x90',
                '\x91',
                '\x92',
                '\x93',
                '\x94',
                '\x95',
                '\x96',
                '\x97',
                '\x98',
                '\x99',
                '\x9A',
                '\x9B',
                '\x9C',
                '\x9D',
                '\x9E',
                '\x9F'
            ];
            var inputString = charsThatShouldBeEscaped.join('');
            var outputString = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.replaceControlCharacters(inputString);
            var replacementCharacter = '\uFFFD';
            var expectedString = charsThatShouldBeEscaped.fill(replacementCharacter).join('');
            assert.strictEqual(outputString, expectedString);
        });
        it('does not replace \n \t or \r', function() {
            var inputString = '\nhello world\t\r';
            var outputString = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.replaceControlCharacters(inputString);
            assert.strictEqual(inputString, outputString);
        });
    });
    describe('countWtf8Bytes', function() {
        it('produces the correct WTF-8 byte size', function() {
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countWtf8Bytes('a'), 1);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countWtf8Bytes('\x7F'), 1);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countWtf8Bytes('\u07FF'), 2);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countWtf8Bytes('\uD800'), 3);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countWtf8Bytes('\uDBFF'), 3);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countWtf8Bytes('\uDC00'), 3);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countWtf8Bytes('\uDFFF'), 3);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countWtf8Bytes('\uFFFF'), 3);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countWtf8Bytes('\u{10FFFF}'), 4);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countWtf8Bytes('Iñtërnâtiônàlizætiøn☃💩'), 34);
            // An arbitrary lead surrogate (D800..DBFF).
            var leadSurrogate = '\uDABC';
            // An arbitrary trail surrogate (DC00..DFFF).
            var trailSurrogate = '\uDEF0';
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countWtf8Bytes("".concat(leadSurrogate).concat(trailSurrogate)), 4);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countWtf8Bytes("".concat(trailSurrogate).concat(leadSurrogate)), 6);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countWtf8Bytes("".concat(leadSurrogate)), 3);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countWtf8Bytes("".concat(trailSurrogate)), 3);
        });
    });
    describe('stripLineBreaks', function() {
        it('strips linebreaks from strings', function() {
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.stripLineBreaks('a\nb'), 'ab');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.stripLineBreaks('a\r\nb'), 'ab');
        });
    });
    describe('isExtendedKebab', function() {
        var isExtendedKebabCase = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.isExtendedKebabCase;
        it('yields `true` for kebab case strings', function() {
            assert.isTrue(isExtendedKebabCase('a-b-c'));
            assert.isTrue(isExtendedKebabCase('a-b'));
            assert.isTrue(isExtendedKebabCase('abc'));
        });
        it('yields `true` for kebab case strings with dots', function() {
            assert.isTrue(isExtendedKebabCase('quick-open.show'));
            assert.isTrue(isExtendedKebabCase('main.target.reload-page'));
        });
        it('yields `false` for broken kebab case', function() {
            assert.isFalse(isExtendedKebabCase('a-b-'));
            assert.isFalse(isExtendedKebabCase('-abc'));
            assert.isFalse(isExtendedKebabCase('a--c'));
        });
        it('yields `false` for other cases', function() {
            assert.isFalse(isExtendedKebabCase('quickOpen.show'));
            assert.isFalse(isExtendedKebabCase('inspector_main.reload'));
            assert.isFalse(isExtendedKebabCase('Main.target.ReloadPage'));
        });
    });
    describe('toTitleCase', function() {
        it('converts a string to title case', function() {
            var output = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.toTitleCase('foo bar baz');
            assert.strictEqual(output, 'Foo bar baz');
        });
    });
    describe('removeURLFragment', function() {
        it('removes the URL fragment if found', function() {
            var input = 'http://www.example.com/foo.html#blah';
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.removeURLFragment(input), 'http://www.example.com/foo.html');
        });
        it('returns the same string if there is no fragment', function() {
            var input = 'http://www.example.com/foo.html';
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.removeURLFragment(input), input);
        });
        it('does not strip query parameters', function() {
            var input = 'http://www.example.com/foo.html?x=1#blah';
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.removeURLFragment(input), 'http://www.example.com/foo.html?x=1');
        });
    });
    describe('filterRegex', function() {
        it('should prepend [^\\0 ]* patterns for all characters', function() {
            var regex = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.filterRegex('bar');
            assert.strictEqual(regex.toString(), '/^(?:.*\\0)?[^\\0b]*b[^\\0a]*a[^\\0r]*r/i');
        });
        it('should escape special characters', function() {
            var regex = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.filterRegex('{?}');
            assert.strictEqual(regex.toString(), '/^(?:.*\\0)?[^\\0\\{]*\\{[^\\0\\?]*\\?[^\\0\\}]*\\}/i');
        });
        it('should match strings that have the query characters in the same order', function() {
            var testCases = [
                {
                    query: 'abc',
                    pos: [
                        'abc',
                        'adabxac',
                        'AbC',
                        'a\x00abc'
                    ],
                    neg: [
                        'ab',
                        'acb',
                        'a\x00bc'
                    ]
                },
                {
                    query: 'aba',
                    pos: [
                        'abba',
                        'abracadabra'
                    ],
                    neg: [
                        'ab',
                        'aab',
                        'baa'
                    ]
                },
                {
                    query: '.?a*',
                    pos: [
                        'x.y?ax*b'
                    ],
                    neg: [
                        '',
                        'a?a*',
                        'a*',
                        '.?'
                    ]
                }
            ];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = testCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _step_value = _step.value, query = _step_value.query, pos = _step_value.pos, neg = _step_value.neg;
                    var regex = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.filterRegex(query);
                    assert.exists(regex, 'Could not create regex from query "'.concat(query, '"'));
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = pos[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var example = _step1.value;
                            assert.isTrue(regex.test(example), 'query "'.concat(query, '" should match "').concat(example, '"'));
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
                    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                    try {
                        for(var _iterator2 = neg[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                            var example1 = _step2.value;
                            assert.isFalse(regex.test(example1), 'query "'.concat(query, '" should not match "').concat(example1, '"'));
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
        });
    });
    describe('createSearchRegex', function() {
        it('returns a case sensitive regex if the call states it is case sensitive', function() {
            var regex = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.createSearchRegex('foo', true, false);
            assert.strictEqual(regex.ignoreCase, false);
            assert.strictEqual(regex.source, 'foo');
        });
        it('creates a regex from plain text if the given input is not already a regex', function() {
            var regex = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.createSearchRegex('[foo]', false, false);
            assert.strictEqual(regex.source, '\\[foo\\]');
        });
        it('leaves the input be if it is already a regex', function() {
            var regex = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.createSearchRegex('[foo]', false, true);
            assert.strictEqual(regex.source, '[foo]');
        });
    });
    describe('hashCode', function() {
        it('hashes strings', function() {
            var stringA = ' '.repeat(10000);
            var stringB = stringA + ' ';
            var hashA = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.hashCode(stringA);
            assert.isTrue(hashA !== _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.hashCode(stringB));
            assert.isTrue(isFinite(hashA));
            assert.isTrue(hashA + 1 !== hashA);
        });
    });
    describe('compare', function() {
        it('returns 1 if the string is > the other string', function() {
            var result = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.compare('b', 'a');
            assert.strictEqual(result, 1);
        });
        it('returns -1 if the string is < the other string', function() {
            var result = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.compare('a', 'b');
            assert.strictEqual(result, -1);
        });
        it('returns 0 if the strings are equal', function() {
            var result = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.compare('a', 'a');
            assert.strictEqual(result, 0);
        });
    });
    describe('trimMiddle', function() {
        var _loop = function(i) {
            var string = fixtures[i];
            it("trims the middle of strings, fixture ".concat(i), function() {
                for(var maxLength = string.length + 1; maxLength > 0; --maxLength){
                    var trimmed = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.trimMiddle(string, maxLength);
                    assert.isTrue(trimmed.length <= maxLength);
                }
            });
        };
        var fixtures = [
            '',
            '!',
            '\u{1F648}A\u{1F648}L\u{1F648}I\u{1F648}N\u{1F648}A\u{1F648}\u{1F648}',
            'test'
        ];
        for(var i = 0; i < fixtures.length; i++)_loop(i);
    });
    describe('escapeForRegExp', function() {
        it('escapes regex characters', function() {
            var inputString = '^[]{}()\\.^$*+?|-';
            var outputString = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.escapeForRegExp(inputString);
            assert.strictEqual(outputString, '\\^\\[\\]\\{\\}\\(\\)\\\\\\.\\^\\$\\*\\+\\?\\|\\-');
        });
    });
    describe('naturalOrderComparator', function() {
        it('sorts natural order', function() {
            var testArray = [
                'dup',
                'a1',
                'a4222',
                'a91',
                'a07',
                'dup',
                'a7',
                'a007',
                'abc00',
                'abc0',
                'abc',
                'abcd',
                'abc000',
                'x10y20z30',
                'x9y19z29',
                'dup',
                'x09y19z29',
                'x10y22z23',
                'x10y19z43',
                '1',
                '10',
                '11',
                'dup',
                '2',
                '2',
                '2',
                '555555',
                '5',
                '5555',
                'dup'
            ];
            for(var i = 0, n = testArray.length; i < n; ++i){
                assert.strictEqual(0, _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.naturalOrderComparator(testArray[i], testArray[i]), 'comparing equal strings');
            }
            testArray.sort(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.naturalOrderComparator);
            // Check comparator's transitivity.
            for(var i1 = 0, n1 = testArray.length; i1 < n1; ++i1){
                for(var j = 0; j < n1; ++j){
                    var a = testArray[i1];
                    var b = testArray[j];
                    var diff = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.naturalOrderComparator(a, b);
                    if (diff === 0) {
                        assert.strictEqual(a, b, 'zero diff');
                    } else if (diff < 0) {
                        assert.isTrue(i1 < j);
                    } else {
                        assert.isTrue(i1 > j);
                    }
                }
            }
        });
    });
    describe('base64ToSize', function() {
        it('calculates length correctly', function() {
            var inputString = 'foo';
            var base64String = btoa(inputString);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.base64ToSize(base64String), inputString.length);
        });
        it('calculates length of null string correctly', function() {
            var inputString = null;
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.base64ToSize(inputString), 0);
        });
        it('calcualtes length of string with two = at the end', function() {
            var inputString = 'fooo';
            var base64String = btoa(inputString);
            assert.strictEqual(base64String, 'Zm9vbw==');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.base64ToSize(base64String), inputString.length);
        });
        it('calcualtes length of string with one = at the end', function() {
            var inputString = 'foooo';
            var base64String = btoa(inputString);
            assert.strictEqual(base64String, 'Zm9vb28=');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.base64ToSize(base64String), inputString.length);
        });
    });
    describe('formatAsJSLiteral', function() {
        it('wraps plain string in single quotes', function() {
            var inputString = 'foo';
            assert.strictEqual(String.raw(_templateObject()), _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.formatAsJSLiteral(inputString));
        });
        it('wraps string containing single quotes in double quotes', function() {
            var inputString = String.raw(_templateObject1());
            assert.strictEqual(String.raw(_templateObject2()), _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.formatAsJSLiteral(inputString));
        });
        it('wraps string containing both single and double quotes in back ticks', function() {
            var inputString = String.raw(_templateObject3());
            assert.strictEqual('`\'foo\' and "bar"`', _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.formatAsJSLiteral(inputString));
        });
        it('wraps string containing all three quotes in single quotes', function() {
            var inputString = '\'foo\' `and` "bar"';
            assert.strictEqual('\'\\\'foo\\\' `and` "bar"\'', _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.formatAsJSLiteral(inputString));
        });
        it('does not use back ticks when content contains ${', function() {
            var inputString = '\'foo\' "and" ${bar}';
            assert.strictEqual('\'\\\'foo\\\' "and" ${bar}\'', _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.formatAsJSLiteral(inputString));
        });
        it('should escape lone leading surrogates', function() {
            var inputString = '\uD800 \uDA00 \uDBFF';
            assert.strictEqual('\'\\uD800 \\uDA00 \\uDBFF\'', _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.formatAsJSLiteral(inputString));
        });
        it('should escape lone trail surrogates', function() {
            var inputString = '\uDC00 \uDEEE \uDFFF';
            assert.strictEqual('\'\\uDC00 \\uDEEE \\uDFFF\'', _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.formatAsJSLiteral(inputString));
        });
        it('should not escape valid surrogate pairs', function() {
            var inputString = '\uD800\uDC00 \uDA00\uDEEE \uDBFF\uDFFF';
            assert.strictEqual("'".concat(inputString, "'"), _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.formatAsJSLiteral(inputString));
        });
        it('should escape invalid surrogate pairs', function() {
            var inputString = '\uDC00\uD800 \uDA00\uDA00 \uDEEE\uDEEE';
            var expectedString = '\'\\uDC00\\uD800 \\uDA00\\uDA00 \\uDEEE\\uDEEE\'';
            assert.strictEqual(expectedString, _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.formatAsJSLiteral(inputString));
        });
        it('escapes whitespace characters appropriately', function() {
            var inputString = '\t\n\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000';
            var expectedString = '\\t\\n\\v\\f\\r \\x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000';
            assert.strictEqual('\'' + expectedString + '\'', _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.formatAsJSLiteral(inputString));
        });
        it('escapes problematic script tags', function() {
            var inputString = '<!-- <script </script';
            var expectedString = String.raw(_templateObject4());
            assert.strictEqual('\'' + expectedString + '\'', _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.formatAsJSLiteral(inputString));
        });
        it('escapes \\x00-\\x1F and \\x7F-\\x9F', function() {
            var inputStrings = [
                '\x00',
                '\x01',
                '\x02',
                '\x03',
                '\x04',
                '\x05',
                '\x06',
                '\x07',
                '\b',
                '\v',
                '\f',
                '\x0E',
                '\x0F',
                '\x10',
                '\x11',
                '\x12',
                '\x13',
                '\x14',
                '\x15',
                '\x16',
                '\x17',
                '\x18',
                '\x19',
                '\x1A',
                '\x1B',
                '\x1C',
                '\x1D',
                '\x1E',
                '\x1F',
                '\x80',
                '\x81',
                '\x82',
                '\x83',
                '\x84',
                '\x85',
                '\x86',
                '\x87',
                '\x88',
                '\x89',
                '\x8A',
                '\x8B',
                '\x8C',
                '\x8D',
                '\x8E',
                '\x8F',
                '\x90',
                '\x91',
                '\x92',
                '\x93',
                '\x94',
                '\x95',
                '\x96',
                '\x97',
                '\x98',
                '\x99',
                '\x9A',
                '\x9B',
                '\x9C',
                '\x9D',
                '\x9E',
                '\x9F'
            ];
            var expectedStrings = [
                '\'\\x00\'',
                '\'\\x01\'',
                '\'\\x02\'',
                '\'\\x03\'',
                '\'\\x04\'',
                '\'\\x05\'',
                '\'\\x06\'',
                '\'\\x07\'',
                '\'\\b\'',
                '\'\\v\'',
                '\'\\f\'',
                '\'\\x0E\'',
                '\'\\x0F\'',
                '\'\\x10\'',
                '\'\\x11\'',
                '\'\\x12\'',
                '\'\\x13\'',
                '\'\\x14\'',
                '\'\\x15\'',
                '\'\\x16\'',
                '\'\\x17\'',
                '\'\\x18\'',
                '\'\\x19\'',
                '\'\\x1A\'',
                '\'\\x1B\'',
                '\'\\x1C\'',
                '\'\\x1D\'',
                '\'\\x1E\'',
                '\'\\x1F\'',
                '\'\\x80\'',
                '\'\\x81\'',
                '\'\\x82\'',
                '\'\\x83\'',
                '\'\\x84\'',
                '\'\\x85\'',
                '\'\\x86\'',
                '\'\\x87\'',
                '\'\\x88\'',
                '\'\\x89\'',
                '\'\\x8A\'',
                '\'\\x8B\'',
                '\'\\x8C\'',
                '\'\\x8D\'',
                '\'\\x8E\'',
                '\'\\x8F\'',
                '\'\\x90\'',
                '\'\\x91\'',
                '\'\\x92\'',
                '\'\\x93\'',
                '\'\\x94\'',
                '\'\\x95\'',
                '\'\\x96\'',
                '\'\\x97\'',
                '\'\\x98\'',
                '\'\\x99\'',
                '\'\\x9A\'',
                '\'\\x9B\'',
                '\'\\x9C\'',
                '\'\\x9D\'',
                '\'\\x9E\'',
                '\'\\x9F\''
            ];
            assert.strictEqual(expectedStrings.join(), inputStrings.map(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.formatAsJSLiteral).join());
        });
        it('escapes backslashes', function() {
            var inputString = '\\';
            var expectedString = String.raw(_templateObject5());
            assert.strictEqual('\'' + expectedString + '\'', _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.formatAsJSLiteral(inputString));
        });
    });
    describe('findUnclosedCssQuote', function() {
        it('correctly finds unclosed quotes', function() {
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findUnclosedCssQuote('\'de'), _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.SINGLE_QUOTE);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findUnclosedCssQuote('abc\'de\'f\'g'), _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.SINGLE_QUOTE);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findUnclosedCssQuote('abc\\\'de\'fg'), _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.SINGLE_QUOTE);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findUnclosedCssQuote('\'ab"c\'de\\\'f\'g'), _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.SINGLE_QUOTE);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findUnclosedCssQuote('"de'), _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.DOUBLE_QUOTE);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findUnclosedCssQuote('a\\"b\\""c\'de\'f\'g'), _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.DOUBLE_QUOTE);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findUnclosedCssQuote('"ab"c"de\\\'f\'g'), _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.DOUBLE_QUOTE);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findUnclosedCssQuote('a'), '');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findUnclosedCssQuote('"ab"c\'de\'f'), '');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findUnclosedCssQuote('"a\\\'b"c\\\'de\'f\\\'\''), '');
        });
    });
    describe('countUnmatchedLeftParentheses', function() {
        it('correctly counts unmatched left parentheses', function() {
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countUnmatchedLeftParentheses('a(b'), 1);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countUnmatchedLeftParentheses('a(b)'), 0);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countUnmatchedLeftParentheses(')a(b)'), 0);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.countUnmatchedLeftParentheses(')a(()bc(d(f)('), 3);
        });
    });
    describe('sprintf', function() {
        it('correctly deals with empty format string', function() {
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf(''), '');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('', 1), '');
        });
        it('replaces %% with %', function() {
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%%s %%d %%f'), '%s %d %f');
        });
        it('correctly substitutes %d', function() {
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%d', NaN), '0');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%d days', 1.5), '1 days');
        });
        it('correctly substitutes %d with precision', function() {
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%.1d', 2), '2');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%.2d', 3), '03');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%.2d', 333), '333');
        });
        it('correctly substitutes %f', function() {
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%f', NaN), '0');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%f', 1), '1');
        });
        it('correctly substitutes %f with precision', function() {
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%.2f', NaN), '0.00');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%.2f', 1), '1.00');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%.2f', 1.23456), '1.23');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%.3f', 1.23456), '1.235');
        });
        it('correctly substitutes %s', function() {
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('Hello %s!', 'World'), 'Hello World!');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('Hello %s!', '%d', 1), 'Hello %d!');
        });
        it('correctly substitutes %s with precision', function() {
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('Hello %.1s!', 'World'), 'Hello W!');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('Hello %.10s!', 'World'), 'Hello World!');
        });
        it('triggers correct type conversion', function() {
            var obj = {
                toString: function toString() {
                    return '5';
                },
                valueOf: function valueOf() {
                    return 6;
                }
            };
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%d', obj), '6');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%.2f', obj), '6.00');
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%s', obj), '5');
        });
        it('deals with parameter indices', function() {
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%2$s %1$s!', 'World', 'Hello'), 'Hello World!');
            assert.throws(function() {
                return _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%0$s', 'World');
            });
        });
        it('signals error when too few parameters are given', function() {
            assert.throws(function() {
                return _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%2$s', 'World');
            });
            assert.throws(function() {
                return _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%2$s %s!', 'World', 'Hello');
            });
            assert.throws(function() {
                return _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('%s %d', 'World');
            });
        });
    });
    describe('LowerCaseString', function() {
        var fnExpectingLowerCaseString = function fnExpectingLowerCaseString(lowerCaseString) {
            lowerCaseString;
        };
        // @ts-expect-error Passing a plain string when LowerCaseString is expected
        fnExpectingLowerCaseString('Foo');
        var lower = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.toLowerCaseString('lower case string');
        fnExpectingLowerCaseString(lower);
    });
    describe('replaceLast', function() {
        it('should return the input string when the search is not found', function() {
            var output = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.replaceLast('input', 'search', 'repl');
            assert.strictEqual(output, 'input');
        });
        it('should replace the occurrance when the search exists inside the input', function() {
            var output = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.replaceLast('input', 'pu', 'r');
            assert.strictEqual(output, 'inrt');
        });
        it('should replace the last occurrence when there are multiple matches', function() {
            var output = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.replaceLast('inpuput', 'pu', 'r');
            assert.strictEqual(output, 'inpurt');
        });
    });
    describe('stringifyWithPrecision', function() {
        it('should stringify with 2 precision if precision argument is not given', function() {
            assert.strictEqual('0.69', _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.stringifyWithPrecision(0.685733));
        });
        it('should stringify with given precision', function() {
            assert.strictEqual('0.686', _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.stringifyWithPrecision(0.685733, 3));
        });
    });
    describe('concatBase64', function() {
        it('correctly concatenates two base64 strings', function() {
            var str = 'This is a small sample sentence for encoding.';
            var strAsBase64 = window.btoa(str);
            for(var i = 0; i < str.length; ++i){
                var lhs = window.btoa(str.substring(0, i));
                var rhs = window.btoa(str.substring(i));
                assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.concatBase64(lhs, rhs), strAsBase64);
            }
        });
    });
    describe('toKebabCase', function() {
        var toKebabCase = _platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.toKebabCase;
        it('should convert camelCase to kebab-case', function() {
            assert.strictEqual(toKebabCase('activeKeybindSet'), 'active-keybind-set');
        });
        it('should convert PascalCase to kebab-case', function() {
            assert.strictEqual(toKebabCase('MediaPanelSplitViewState'), 'media-panel-split-view-state');
        });
        it('should convert snake_case to kebab-case', function() {
            assert.strictEqual(toKebabCase('recorder_preferred_copy_format'), 'recorder-preferred-copy-format');
        });
        it('should convert UPPER_SNAKE_CASE to kebab-case', function() {
            assert.strictEqual(toKebabCase('REGULAR_BREAKPOINT'), 'regular-breakpoint');
        });
        it('should handle uppercase acronyms as words', function() {
            assert.strictEqual(toKebabCase('showUAShadowDOM'), 'show-ua-shadow-dom');
        });
        it('should handle uppercase acronyms as words', function() {
            assert.strictEqual(toKebabCase('showUAShadowDOM'), 'show-ua-shadow-dom');
        });
        it('should preserve \'.\' characters', function() {
            assert.strictEqual(toKebabCase('InspectorView.screencastSplitViewState'), 'inspector-view.screencast-split-view-state');
            assert.strictEqual(toKebabCase('version1.2.3'), 'version-1.2.3');
        });
        it('should handle numeronyms', function() {
            assert.strictEqual(toKebabCase('lighthouse.cat_a11y'), 'lighthouse.cat-a11y');
            assert.strictEqual(toKebabCase('i18n'), 'i18n');
            assert.strictEqual(toKebabCase('timeline-v8-runtime-call-stats'), 'timeline-v8-runtime-call-stats');
        });
        it('should handle numbers', function() {
            assert.strictEqual(toKebabCase('Margin: 2px'), 'margin-2px');
            assert.strictEqual(toKebabCase('Margin2px'), 'margin-2px');
            assert.strictEqual(toKebabCase('Layers 3D display'), 'layers-3d-display');
            assert.strictEqual(toKebabCase('perfmonActiveIndicators2'), 'perfmon-active-indicators-2');
            assert.strictEqual(toKebabCase('HideIssueByCodeSetting-Experiment-2021'), 'hide-issue-by-code-setting-experiment-2021');
        });
        it('should handle mixed cases', function() {
            assert.strictEqual(toKebabCase('CamelCase_with.DOTS123'), 'camel-case-with.dots-123');
        });
    });
}); //# sourceMappingURL=StringUtilities.test.js.map


}),

}]);