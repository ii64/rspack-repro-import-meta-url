"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_text_utils_TextUtils_test_js"], {
"./models/text_utils/TextUtils.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_utils.js */ "./models/text_utils/text_utils.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _templateObject() {
    var data = _tagged_template_literal([
        "/complex/regex/"
    ], [
        "/complex\\/regex/"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "/regex?/"
    ], [
        "/regex\\?/"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "/regex//"
    ], [
        "/regex\\//"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "/regex?/ text"
    ], [
        "/regex\\?/ text"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}

describe('TextUtils', function() {
    describe('Utils', function() {
        describe('isSpaceChar', function() {
            it('returns the correct result for various inputs', function() {
                assert.strictEqual(_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.isSpaceChar(' '), true, 'space was not a space char');
                assert.strictEqual(_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.isSpaceChar('\t'), true, 'tab was not a space char');
                assert.strictEqual(_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.isSpaceChar('\f'), true, 'formfeed was not a space char');
                assert.strictEqual(_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.isSpaceChar('\r'), true, 'return was not a space char');
                assert.strictEqual(_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.isSpaceChar('\v'), true, 'vertical tab was not a space char');
                assert.strictEqual(_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.isSpaceChar('\xA0'), true, 'non-breaking space was not a space char');
                assert.strictEqual(_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.isSpaceChar('\0'), false, 'null was a space char');
                assert.strictEqual(_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.isSpaceChar('a'), false, 'a was a space char');
                assert.strictEqual(_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.isSpaceChar('A'), false, 'A was a space char');
            });
        });
        describe('lineIndent', function() {
            it('returns the correct result for various inputs', function() {
                assert.strictEqual(_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.lineIndent(''), '', 'indent was not empty');
                assert.strictEqual(_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.lineIndent('\tabc'), '\t', 'indent should have one tab');
                assert.strictEqual(_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.lineIndent(' \t abc'), ' \t ', 'indent was wrong');
            });
        });
        describe('splitStringByRegexes', function() {
            it('returns the correct result for a single regex', function() {
                var result = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.splitStringByRegexes('', [
                    /a/
                ]);
                assert.strictEqual(result.length, 0, 'length was wrong');
                result = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.splitStringByRegexes('a', [
                    /a/
                ]);
                assert.strictEqual(result.length, 1, 'length was wrong');
                assert.strictEqual(result[0].value, 'a', 'value was wrong');
                assert.strictEqual(result[0].position, 0, 'position was wrong');
                assert.strictEqual(result[0].regexIndex, 0, 'regex index was wrong');
                assert.deepEqual(result[0].captureGroups, [], 'capture groups was not empty');
                result = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.splitStringByRegexes('ba b', [
                    /a/
                ]);
                assert.strictEqual(result.length, 3, 'length was wrong');
                assert.strictEqual(result[0].value, 'b', 'value was wrong');
                assert.strictEqual(result[0].position, 0, 'position was wrong');
                assert.strictEqual(result[0].regexIndex, -1, 'regex index was wrong');
                assert.deepEqual(result[0].captureGroups, [], 'capture groups was not empty');
                assert.strictEqual(result[1].value, 'a', 'value was wrong');
                assert.strictEqual(result[1].position, 1, 'position was wrong');
                assert.strictEqual(result[1].regexIndex, 0, 'regex index was wrong');
                assert.deepEqual(result[1].captureGroups, [], 'capture groups was not empty');
                assert.strictEqual(result[2].value, ' b', 'value was wrong');
                assert.strictEqual(result[2].position, 2, 'position was wrong');
                assert.strictEqual(result[2].regexIndex, -1, 'regex index was wrong');
                assert.deepEqual(result[2].captureGroups, [], 'capture groups was not empty');
            });
            it('returns the correct result for a multiple regexs', function() {
                var result = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.splitStringByRegexes('', [
                    /a/,
                    /b/
                ]);
                assert.strictEqual(result.length, 0, 'length was wrong');
                result = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.splitStringByRegexes('a', [
                    /a/,
                    /b/
                ]);
                assert.strictEqual(result.length, 1, 'length was wrong');
                assert.strictEqual(result[0].value, 'a', 'value was wrong');
                assert.strictEqual(result[0].position, 0, 'position was wrong');
                assert.strictEqual(result[0].regexIndex, 0, 'regex index was wrong');
                assert.deepEqual(result[0].captureGroups, [], 'capture groups was not empty');
                result = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.splitStringByRegexes('ba b', [
                    /a/,
                    /b/
                ]);
                assert.strictEqual(result.length, 4, 'length was wrong');
                assert.strictEqual(result[0].value, 'b', 'value was wrong');
                assert.strictEqual(result[0].position, 0, 'position was wrong');
                assert.strictEqual(result[0].regexIndex, 1, 'regex index was wrong');
                assert.deepEqual(result[0].captureGroups, [], 'capture groups was not empty');
                assert.strictEqual(result[1].value, 'a', 'value was wrong');
                assert.strictEqual(result[1].position, 1, 'position was wrong');
                assert.strictEqual(result[1].regexIndex, 0, 'regex index was wrong');
                assert.deepEqual(result[1].captureGroups, [], 'capture groups was not empty');
                assert.strictEqual(result[2].value, ' ', 'value was wrong');
                assert.strictEqual(result[2].position, 2, 'position was wrong');
                assert.strictEqual(result[2].regexIndex, -1, 'regex index was wrong');
                assert.deepEqual(result[2].captureGroups, [], 'capture groups was not empty');
                assert.strictEqual(result[3].value, 'b', 'value was wrong');
                assert.strictEqual(result[3].position, 3, 'position was wrong');
                assert.strictEqual(result[3].regexIndex, 1, 'regex index was wrong');
                assert.deepEqual(result[3].captureGroups, [], 'capture groups was not empty');
            });
            it('returns the correct result for global regexs', function() {
                var result = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.splitStringByRegexes('', [
                    /a/g,
                    /b/g
                ]);
                assert.strictEqual(result.length, 0, 'length was wrong');
                result = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.Utils.splitStringByRegexes('a', [
                    /a/g,
                    /b/g
                ]);
                assert.strictEqual(result.length, 1, 'length was wrong');
                assert.strictEqual(result[0].value, 'a', 'value was wrong');
                assert.strictEqual(result[0].position, 0, 'position was wrong');
                assert.strictEqual(result[0].regexIndex, 0, 'regex index was wrong');
                assert.deepEqual(result[0].captureGroups, [], 'capture groups was not empty');
            });
        });
    });
    describe('FilterParser', function() {
        it('can be instantiated successfully', function() {
            var testVal = 'TestVal1';
            var filterParser = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.FilterParser([
                'TestVal1'
            ]);
            var result = filterParser.parse(testVal);
            assert.strictEqual(result[0].text, testVal, 'text value was not returned correctly');
            assert.strictEqual(result[0].negative, false, 'negative value was not returned correctly');
        });
        describe('parse', function() {
            it('returns empty for empty string', function() {
                var testVal = '';
                var filterParser = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.FilterParser([
                    'TestVal1'
                ]);
                var result = filterParser.parse(testVal);
                assert.deepEqual(result, [], 'result was not empty');
            });
            // Ported from a web test: http/tests/devtools/unit/parse-filter-query.js
            it('returns correct results for a range of inputs', function() {
                var filterParser = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.FilterParser([
                    'key1',
                    'key2'
                ]);
                var parse = function(text) {
                    return filterParser.parse(text);
                };
                var result = parse('text');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: undefined,
                    text: 'text',
                    negative: false
                }, 'result was incorrect');
                result = parse('spaced text');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: undefined,
                    text: 'spaced',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: undefined,
                    regex: undefined,
                    text: 'text',
                    negative: false
                }, 'result was incorrect');
                result = parse('-');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: undefined,
                    text: '-',
                    negative: false
                }, 'result was incorrect');
                result = parse('-text');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: undefined,
                    text: 'text',
                    negative: true
                }, 'result was incorrect');
                result = parse('//');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: undefined,
                    text: '//',
                    negative: false
                }, 'result was incorrect');
                result = parse('/regex/');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: /regex/i,
                    text: undefined,
                    negative: false
                }, 'result was incorrect');
                result = parse('/regex/ /another/');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: /regex/i,
                    text: undefined,
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: undefined,
                    regex: /another/i,
                    text: undefined,
                    negative: false
                }, 'result was incorrect');
                result = parse(String.raw(_templateObject()));
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: /complex\/regex/i,
                    text: undefined,
                    negative: false
                }, 'result was incorrect');
                result = parse(String.raw(_templateObject1()));
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: /regex\?/i,
                    text: undefined,
                    negative: false
                }, 'result was incorrect');
                result = parse(String.raw(_templateObject2()));
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: /regex\//i,
                    text: undefined,
                    negative: false
                }, 'result was incorrect');
                result = parse(String.raw(_templateObject3()));
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: /regex\?/i,
                    text: undefined,
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: undefined,
                    regex: undefined,
                    text: 'text',
                    negative: false
                }, 'result was incorrect');
                result = parse('/regex with spaces/');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: /regex with spaces/i,
                    text: undefined,
                    negative: false
                }, 'result was incorrect');
                result = parse('/regex/ text');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: /regex/i,
                    text: undefined,
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: undefined,
                    regex: undefined,
                    text: 'text',
                    negative: false
                }, 'result was incorrect');
                result = parse('/regex with spaces/ text');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: /regex with spaces/i,
                    text: undefined,
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: undefined,
                    regex: undefined,
                    text: 'text',
                    negative: false
                }, 'result was incorrect');
                result = parse('key1:foo');
                assert.deepEqual(result[0], {
                    key: 'key1',
                    regex: undefined,
                    text: 'foo',
                    negative: false
                }, 'result was incorrect');
                result = parse('-key1:foo');
                assert.deepEqual(result[0], {
                    key: 'key1',
                    regex: undefined,
                    text: 'foo',
                    negative: true
                }, 'result was incorrect');
                result = parse('key1:foo key2:bar');
                assert.deepEqual(result[0], {
                    key: 'key1',
                    regex: undefined,
                    text: 'foo',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: 'key2',
                    regex: undefined,
                    text: 'bar',
                    negative: false
                }, 'result was incorrect');
                result = parse('-key1:foo key2:bar');
                assert.deepEqual(result[0], {
                    key: 'key1',
                    regex: undefined,
                    text: 'foo',
                    negative: true
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: 'key2',
                    regex: undefined,
                    text: 'bar',
                    negative: false
                }, 'result was incorrect');
                result = parse('key1:foo -key2:bar');
                assert.deepEqual(result[0], {
                    key: 'key1',
                    regex: undefined,
                    text: 'foo',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: 'key2',
                    regex: undefined,
                    text: 'bar',
                    negative: true
                }, 'result was incorrect');
                result = parse('-key1:foo -key2:bar');
                assert.deepEqual(result[0], {
                    key: 'key1',
                    regex: undefined,
                    text: 'foo',
                    negative: true
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: 'key2',
                    regex: undefined,
                    text: 'bar',
                    negative: true
                }, 'result was incorrect');
                result = parse('key1:/regex/');
                assert.deepEqual(result[0], {
                    key: 'key1',
                    regex: undefined,
                    text: '/regex/',
                    negative: false
                }, 'result was incorrect');
                result = parse('key1:foo innerText key2:bar');
                assert.deepEqual(result[0], {
                    key: 'key1',
                    regex: undefined,
                    text: 'foo',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: undefined,
                    regex: undefined,
                    text: 'innerText',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[2], {
                    key: 'key2',
                    regex: undefined,
                    text: 'bar',
                    negative: false
                }, 'result was incorrect');
                result = parse('bar key1 foo');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: undefined,
                    text: 'bar',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: undefined,
                    regex: undefined,
                    text: 'key1',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[2], {
                    key: undefined,
                    regex: undefined,
                    text: 'foo',
                    negative: false
                }, 'result was incorrect');
                result = parse('bar key1:foo');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: undefined,
                    text: 'bar',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: 'key1',
                    regex: undefined,
                    text: 'foo',
                    negative: false
                }, 'result was incorrect');
                result = parse('bar key1:foo baz');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: undefined,
                    text: 'bar',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: 'key1',
                    regex: undefined,
                    text: 'foo',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[2], {
                    key: undefined,
                    regex: undefined,
                    text: 'baz',
                    negative: false
                }, 'result was incorrect');
                result = parse('bar key1:foo yek:roo baz');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: undefined,
                    text: 'bar',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: 'key1',
                    regex: undefined,
                    text: 'foo',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[2], {
                    key: undefined,
                    regex: undefined,
                    text: 'yek:roo',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[3], {
                    key: undefined,
                    regex: undefined,
                    text: 'baz',
                    negative: false
                }, 'result was incorrect');
                result = parse('bar key1:foo -yek:roo baz');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: undefined,
                    text: 'bar',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: 'key1',
                    regex: undefined,
                    text: 'foo',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[2], {
                    key: undefined,
                    regex: undefined,
                    text: 'yek:roo',
                    negative: true
                }, 'result was incorrect');
                assert.deepEqual(result[3], {
                    key: undefined,
                    regex: undefined,
                    text: 'baz',
                    negative: false
                }, 'result was incorrect');
                result = parse('bar baz key1:foo goo zoo');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: undefined,
                    text: 'bar',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: undefined,
                    regex: undefined,
                    text: 'baz',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[2], {
                    key: 'key1',
                    regex: undefined,
                    text: 'foo',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[3], {
                    key: undefined,
                    regex: undefined,
                    text: 'goo',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[4], {
                    key: undefined,
                    regex: undefined,
                    text: 'zoo',
                    negative: false
                }, 'result was incorrect');
                result = parse('bar key1:key1:foo');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: undefined,
                    text: 'bar',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: 'key1',
                    regex: undefined,
                    text: 'key1:foo',
                    negative: false
                }, 'result was incorrect');
                result = parse('bar :key1:foo baz');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: undefined,
                    text: 'bar',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: undefined,
                    regex: undefined,
                    text: ':key1:foo',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[2], {
                    key: undefined,
                    regex: undefined,
                    text: 'baz',
                    negative: false
                }, 'result was incorrect');
                result = parse('bar -:key1:foo baz');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: undefined,
                    text: 'bar',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: undefined,
                    regex: undefined,
                    text: '-:key1:foo',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[2], {
                    key: undefined,
                    regex: undefined,
                    text: 'baz',
                    negative: false
                }, 'result was incorrect');
                result = parse('bar key1:-foo baz');
                assert.deepEqual(result[0], {
                    key: undefined,
                    regex: undefined,
                    text: 'bar',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[1], {
                    key: 'key1',
                    regex: undefined,
                    text: '-foo',
                    negative: false
                }, 'result was incorrect');
                assert.deepEqual(result[2], {
                    key: undefined,
                    regex: undefined,
                    text: 'baz',
                    negative: false
                }, 'result was incorrect');
            });
        });
        it('cloneFilter gives a correct copy', function() {
            var filter = {
                key: 'a',
                text: 'b',
                regex: /a/,
                negative: true
            };
            var cloned = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.FilterParser.cloneFilter(filter);
            assert.strictEqual(cloned.key, 'a', 'key was incorrect');
            assert.strictEqual(cloned.text, 'b', 'text was incorrect');
            assert.deepEqual(cloned.regex, /a/, 'regex was incorrect');
            assert.strictEqual(cloned.negative, true, 'negative was incorrect');
        });
    });
    describe('BalancedJSONTokenizer', function() {
        it('can be instantiated successfully', function() {
            var callback = function() {};
            var findMultiple = false;
            var tokenizer = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.BalancedJSONTokenizer(callback, findMultiple);
            assert.strictEqual(tokenizer.remainder(), '', 'remainder was not empty');
        });
        it('can balance simple patterns', function() {
            var callbackResults = [];
            var callback = function(str) {
                callbackResults.push(str);
            };
            var findMultiple = false;
            var tokenizer = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.BalancedJSONTokenizer(callback, findMultiple);
            var result = tokenizer.write('a');
            assert.strictEqual(result, true, 'return value was incorrect');
            assert.deepEqual(callbackResults, [], 'callback was called');
            result = tokenizer.write('{}');
            assert.strictEqual(result, true, 'return value was incorrect');
            assert.deepEqual(callbackResults, [
                'a{}'
            ], 'callback had unexpected results');
        });
        it('can find simple unbalanced patterns', function() {
            var callbackResults = [];
            var callback = function(str) {
                callbackResults.push(str);
            };
            var findMultiple = false;
            var tokenizer = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.BalancedJSONTokenizer(callback, findMultiple);
            var result = tokenizer.write('{}}');
            assert.strictEqual(result, true, 'return value was incorrect');
            assert.deepEqual(callbackResults, [
                '{}'
            ], 'callback had unexpected results');
            assert.strictEqual(tokenizer.remainder(), '}', 'remainder was incorrect');
        });
        it('can find simple unbalanced quote patterns', function() {
            var callbackResults = [];
            var callback = function(str) {
                callbackResults.push(str);
            };
            var findMultiple = false;
            var tokenizer = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.BalancedJSONTokenizer(callback, findMultiple);
            var result = tokenizer.write('"""');
            assert.strictEqual(result, true, 'return value was incorrect');
            assert.deepEqual(callbackResults, [], 'callback had unexpected results');
            assert.strictEqual(tokenizer.remainder(), '"""', 'remainder was incorrect');
        });
        it('can find unbalanced patterns that start with }', function() {
            var callbackResults = [];
            var callback = function(str) {
                callbackResults.push(str);
            };
            var findMultiple = false;
            var tokenizer = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.BalancedJSONTokenizer(callback, findMultiple);
            var result = tokenizer.write('}}');
            assert.strictEqual(result, false, 'return value was incorrect');
            assert.deepEqual(callbackResults, [], 'callback had unexpected results');
            assert.strictEqual(tokenizer.remainder(), '}}', 'remainder was incorrect');
        });
        it('can find unbalanced patterns that start with ]', function() {
            var callbackResults = [];
            var callback = function(str) {
                callbackResults.push(str);
            };
            var findMultiple = false;
            var tokenizer = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.BalancedJSONTokenizer(callback, findMultiple);
            var result = tokenizer.write(']]');
            assert.strictEqual(result, false, 'return value was incorrect');
            assert.deepEqual(callbackResults, [], 'callback had unexpected results');
            assert.strictEqual(tokenizer.remainder(), ']]', 'remainder was incorrect');
        });
    });
    describe('isMinified', function() {
        var isMinified = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.isMinified;
        it('handles empty string', function() {
            var result = isMinified('');
            assert.strictEqual(result, false, 'was minified');
        });
        it('correctly detects a minified HTML document', function() {
            var text = "\n<!DOCTYPE html>\n<html><head><title>Amazing document</title></head><body>".concat('<p>Some paragraph</p>'.repeat(100), "</body>\n<script>function something() {}</script>\n<style>* { color: black; }</style>\n</html>\n");
            assert.strictEqual(isMinified(text), true);
        });
        it('correctly detects minified Closure-style modules', function() {
            var text = 'try{\nexport class BalancedJSONTokenizer{constructor(e,t){this.callback=e,this.index=0,this.balance=0,this.buffer="",this.findMultiple=t||!1,this.closingDoubleQuoteRegex=/[^\\](?:\\\\)*"/g}\nwrite(e){this.buffer+=e;const t=this.buffer.length,i=this.buffer;let n;for(n=this.index;n<t;++n){const e=i[n];if(\'"\'===e){if(this.closingDoubleQuoteRegex.lastIndex=n,!this.closingDoubleQuoteRegex.test(i))break;n=this.closingDoubleQuoteRegex.lastIndex-1}else if("{"===e)++this.balance;else if("}"===e){if(--this.balance,this.balance<0)return this.reportBalanced(),!1;if(!this.balance&&(this.lastBalancedIndex=n+1,!this.findMultiple))break}else if("]"===e&&!this.balance)return this.reportBalanced(),!1}return this.index=n,this.reportBalanced(),!0}\nreportBalanced(){this.lastBalancedIndex&&(this.callback(this.buffer.slice(0,this.lastBalancedIndex)),this.buffer=this.buffer.slice(this.lastBalancedIndex),this.index-=this.lastBalancedIndex,this.lastBalancedIndex=0)}remainder(){return this.buffer}};\n}catch(e){_._DumpException(e)}\n\ntry {\n\nexport const isMinified=function(e){let t=0;for(let i=0;i<e.length;++t){let t=e.indexOf("\n",i);\nt<0&&(t=e.length),i=t+1}return(e.length-t)/t>=80};export const performSearchInContent=function(e,t,i,n){const s=Platform.StringUtilities.createSearchRegex(t,i,n),l=new Text(e),a=[];\nfor(let e=0;e<l.lineCount();++e){const t=l.lineAt(e);s.lastIndex=0;const i=s.exec(t);i&&a.push(new SearchMatch(e,t,i.index))}return a};\n}catch(e){_._DumpException(e)}\n//# sourceMappingURL=http://some.staging-system.some-company.com/path/to/my/amazing/sourcemap/for/this/file.js.map\n// Some Company.';
            assert.strictEqual(isMinified(text), true);
        });
        it('doesn\'t detect JavaScript with one very long line in the end as minified', function() {
            var functions = 'const foo = 1;\n', exports = 'export {foo';
            for(var i = 0; i < 100; ++i){
                functions += "function aSomewhatLongFunctionName".concat(i, "(x) {\n  return x + ").concat(i, ";\n}\n");
                exports += ", aSomewhatLongFunctionName".concat(i, " as func").concat(i);
            }
            exports += '};\n';
            var text = "".concat(functions).concat(exports);
            assert.strictEqual(isMinified(text), false);
        });
    });
    describe('detectIndentation', function() {
        var detectIndentation = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.detectIndentation;
        it('returns `null` when no lines are given', function() {
            assert.isNull(detectIndentation([]));
        });
        it('returns `null` when all lines are empty', function() {
            assert.isNull(detectIndentation([
                '',
                '        ',
                '        ',
                '  ',
                ''
            ]));
        });
        it('correctly detects tab indentation', function() {
            assert.strictEqual(detectIndentation([
                '\ta',
                '\t\tb',
                'c',
                'd',
                '\t\t\tf'
            ]), '\t');
            assert.strictEqual(detectIndentation([
                'hello():',
                '\tworld();',
                '\treturn;'
            ]), '\t');
            assert.strictEqual(detectIndentation("/**\n * Heuristic to check whether a given text was likely minified. Intended to\n * be used for HTML, CSS, and JavaScript inputs.\n *\n * A text is considered to be the result of minification if the average\n * line length for the whole text is 80 characters or more.\n *\n * @param text The input text to check.\n * @returns\n */\nfunction isMinified(text) {\n	let lineCount = 0;\n	for (let lastIndex = 0; lastIndex < text.length; ++lineCount) {\n		let eolIndex = text.indexOf('\n', lastIndex);\n		if (eolIndex < 0) {\n			eolIndex = text.length;\n		}\n		lastIndex = eolIndex + 1;\n	}\n	return (text.length - lineCount) / lineCount >= 80;\n}".split('\n')), '\t');
        });
        it('correctly detects 1-space indentation', function() {
            assert.strictEqual(detectIndentation("/**\n * Heuristic to check whether a given text was likely minified. Intended to\n * be used for HTML, CSS, and JavaScript inputs.\n *\n * A text is considered to be the result of minification if the average\n * line length for the whole text is 80 characters or more.\n *\n * @param text The input text to check.\n * @returns\n */\nfunction isMinified(text) {\n let lineCount = 0;\n for (let lastIndex = 0; lastIndex < text.length; ++lineCount) {\n  let eolIndex = text.indexOf('\n', lastIndex);\n  if (eolIndex < 0) {\n   eolIndex = text.length;\n  }\n  lastIndex = eolIndex + 1;\n }\n return (text.length - lineCount) / lineCount >= 80;\n}".split('\n')), ' ');
        });
        it('correctly detects 2-space indentation', function() {
            assert.strictEqual(detectIndentation("/**\n * Heuristic to check whether a given text was likely minified. Intended to\n * be used for HTML, CSS, and JavaScript inputs.\n *\n * A text is considered to be the result of minification if the average\n * line length for the whole text is 80 characters or more.\n *\n * @param text The input text to check.\n * @returns\n */\nfunction isMinified(text) {\n  let lineCount = 0;\n  for (let lastIndex = 0; lastIndex < text.length; ++lineCount) {\n    let eolIndex = text.indexOf('\n', lastIndex);\n    if (eolIndex < 0) {\n      eolIndex = text.length;\n    }\n    lastIndex = eolIndex + 1;\n  }\n  return (text.length - lineCount) / lineCount >= 80;\n}".split('\n')), '  ');
        });
        it('correctly detects 4-space indentation', function() {
            assert.strictEqual(detectIndentation([
                'hello():',
                '    world();',
                '    return;'
            ]), '    ');
            assert.strictEqual(detectIndentation("/**\n * Heuristic to check whether a given text was likely minified. Intended to\n * be used for HTML, CSS, and JavaScript inputs.\n *\n * A text is considered to be the result of minification if the average\n * line length for the whole text is 80 characters or more.\n *\n * @param text The input text to check.\n * @returns\n */\nfunction isMinified(text) {\n    let lineCount = 0;\n    for (let lastIndex = 0; lastIndex < text.length; ++lineCount) {\n        let eolIndex = text.indexOf('\n', lastIndex);\n        if (eolIndex < 0) {\n            eolIndex = text.length;\n        }\n        lastIndex = eolIndex + 1;\n    }\n    return (text.length - lineCount) / lineCount >= 80;\n}".split('\n')), '    ');
            // Below is the problematic example explicitly called out
            // in go/chrome-devtools:indentation-markers-proposal
            assert.strictEqual(detectIndentation("import { HOOK_PLUGIN_SETTINGS_SET } from './const.js';\nimport { now } from './time.js';\nexport class ApiProxy {\n    constructor(plugin, hook) {\n        this.target = null;\n        this.targetQueue = [];\n        this.onQueue = [];\n        this.plugin = plugin;\n        this.hook = hook;\n        const defaultSettings = {};\n        if (plugin.settings) {\n            for (const id in plugin.settings) {\n                const item = plugin.settings[id];\n                defaultSettings[id] = item.defaultValue;\n            }\n        }\n        const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;\n        let currentSettings = Object.assign({}, defaultSettings);\n        try {\n            const raw = localStorage.getItem(localSettingsSaveId);\n            const data = JSON.parse(raw);\n            Object.assign(currentSettings, data);\n        }\n        catch (e) {\n            // noop\n        }\n        this.fallbacks = {\n            getSettings() {\n                return currentSettings;\n            },\n            setSettings(value) {\n                try {\n                    localStorage.setItem(localSettingsSaveId, JSON.stringify(value));\n                }\n                catch (e) {\n                    // noop\n                }\n                currentSettings = value;\n            },\n            now() {\n                return now();\n            },\n        };\n        if (hook) {\n            hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {\n                if (pluginId === this.plugin.id) {\n                    this.fallbacks.setSettings(value);\n                }\n            });\n        }\n        this.proxiedOn = new Proxy({}, {\n            get: (_target, prop) => {\n                if (this.target) {\n                    return this.target.on[prop];\n                }\n                else {\n                    return (...args) => {\n                        this.onQueue.push({\n                            method: prop,\n                            args,\n                        });\n                    };\n                }\n            },\n        });\n        this.proxiedTarget = new Proxy({}, {\n            get: (_target, prop) => {\n                if (this.target) {\n                    return this.target[prop];\n                }\n                else if (prop === 'on') {\n                    return this.proxiedOn;\n                }\n                else if (Object.keys(this.fallbacks).includes(prop)) {\n                    return (...args) => {\n                        this.targetQueue.push({\n                            method: prop,\n                            args,\n                            resolve: () => { },\n                        });\n                        return this.fallbacks[prop](...args);\n                    };\n                }\n                else {\n                    return (...args) => {\n                        return new Promise(resolve => {\n                            this.targetQueue.push({\n                                method: prop,\n                                args,\n                                resolve,\n                            });\n                        });\n                    };\n                }\n            },\n        });\n    }\n    async setRealTarget(target) {\n        this.target = target;\n        for (const item of this.onQueue) {\n            this.target.on[item.method](...item.args);\n        }\n        for (const item of this.targetQueue) {\n            item.resolve(await this.target[item.method](...item.args));\n        }\n    }\n}".split('\n')), '    ');
        });
    });
    describe('performExtendedSearchInContent', function() {
        it('returns an entry for each match on the same line', function() {
            var lines = [
                'The first line with a second "the".',
                'The second line.'
            ];
            var result = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.performSearchInContent(lines.join('\n'), 'the', false, false);
            assert.deepEqual(result, [
                new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentProvider.SearchMatch(0, lines[0], 0, 3),
                new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentProvider.SearchMatch(0, lines[0], 30, 3),
                new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentProvider.SearchMatch(1, lines[1], 0, 3)
            ]);
        });
    });
    describe('performExtendedSearchInSearchMatches', function() {
        it('returns an entry for each match on the same line', function() {
            var lines = [
                'The first line with a second "the".',
                'The second line.'
            ];
            var searchMatches = [
                {
                    lineContent: lines[0],
                    lineNumber: 5
                },
                {
                    lineContent: lines[1],
                    lineNumber: 42
                }
            ];
            var result = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.performSearchInSearchMatches(searchMatches, 'the', false, false);
            assert.deepEqual(result, [
                new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentProvider.SearchMatch(5, lines[0], 0, 3),
                new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentProvider.SearchMatch(5, lines[0], 30, 3),
                new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentProvider.SearchMatch(42, lines[1], 0, 3)
            ]);
        });
    });
}); //# sourceMappingURL=TextUtils.test.js.map


}),

}]);