"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_SourceMap_test_js"], {
"./core/sdk/SourceMap.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/SourceMapEncoder.js */ "./testing/SourceMapEncoder.js");
/* harmony import */var _root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../root/root.js */ "./core/root/root.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}





var sourceUrlFoo = '<foo>';
describe('SourceMapEntry', function() {
    it('can be instantiated correctly', function() {
        var sourceMapEntry = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMapEntry(1, 1, 'http://www.example.com/', 1, 1, 'example');
        assert.strictEqual(sourceMapEntry.lineNumber, 1, 'line number was not set correctly');
        assert.strictEqual(sourceMapEntry.columnNumber, 1, 'column number was not set correctly');
        assert.strictEqual(sourceMapEntry.sourceURL, 'http://www.example.com/', 'source URL was not set correctly');
        assert.strictEqual(sourceMapEntry.sourceLineNumber, 1, 'source line number was not set correctly');
        assert.strictEqual(sourceMapEntry.sourceColumnNumber, 1, 'source column number was not set correctly');
        assert.strictEqual(sourceMapEntry.name, 'example', 'name was not set correctly');
    });
    describe('comparison', function() {
        it('checks line numbers first', function() {
            var sourceMapEntry1 = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMapEntry(1, 5, sourceUrlFoo, 1, 5, 'foo');
            var sourceMapEntry2 = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMapEntry(2, 5, sourceUrlFoo, 2, 5, 'foo');
            assert.isBelow(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMapEntry.compare(sourceMapEntry1, sourceMapEntry2), 0, 'first entry is not smaller');
        });
        it('checks column numbers second when line numbers are equal', function() {
            var sourceMapEntry1 = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMapEntry(2, 5, sourceUrlFoo, 1, 5, 'foo');
            var sourceMapEntry2 = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMapEntry(2, 25, sourceUrlFoo, 2, 5, 'foo');
            assert.isBelow(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMapEntry.compare(sourceMapEntry1, sourceMapEntry2), 0, 'first entry is not smaller');
        });
        it('works for equal SourceMapEntries', function() {
            var sourceMapEntry1 = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMapEntry(2, 5, sourceUrlFoo, 1, 5, 'foo');
            var sourceMapEntry2 = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMapEntry(2, 5, sourceUrlFoo, 1, 5, 'foo');
            assert.strictEqual(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMapEntry.compare(sourceMapEntry1, sourceMapEntry2), 0);
        });
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('SourceMap', function() {
    var assertMapping = function assertMapping(actual, expectedSourceURL, expectedSourceLineNumber, expectedSourceColumnNumber) {
        assert.exists(actual);
        assert.strictEqual(actual.sourceURL, expectedSourceURL, 'unexpected source URL');
        assert.strictEqual(actual.sourceLineNumber, expectedSourceLineNumber, 'unexpected source line number');
        assert.strictEqual(actual.sourceColumnNumber, expectedSourceColumnNumber, 'unexpected source column number');
    };
    var assertReverseMapping = function assertReverseMapping(actual, expectedCompiledLineNumber, expectedCompiledColumnNumber) {
        assert.exists(actual);
        assert.strictEqual(actual.lineNumber, expectedCompiledLineNumber, 'unexpected compiled line number');
        assert.strictEqual(actual.columnNumber, expectedCompiledColumnNumber, 'unexpected compiled column number');
    };
    var compiledUrl = 'compiled.js';
    var sourceMapJsonUrl = 'source-map.json';
    var sourceUrlExample = 'example.js';
    var sourceUrlOther = 'other.js';
    describe('TokenIterator', function() {
        it('detects when it has reached the end', function() {
            var emptyIterator = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.TokenIterator('');
            assert.isFalse(emptyIterator.hasNext());
            var iterator = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.TokenIterator('foo');
            assert.isTrue(iterator.hasNext());
        });
        it('peeks the next character', function() {
            var emptyIterator = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.TokenIterator('');
            assert.strictEqual(emptyIterator.peek(), '');
            var iterator = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.TokenIterator('foo');
            assert.strictEqual(iterator.peek(), 'f');
        });
        it('advances when {next} is called', function() {
            var iterator = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.TokenIterator('bar');
            assert.strictEqual(iterator.next(), 'b');
            assert.strictEqual(iterator.next(), 'a');
            assert.strictEqual(iterator.next(), 'r');
            assert.isFalse(iterator.hasNext());
        });
        it('peeks the next VLQ number without moving the iterator', function() {
            var cases = [
                [
                    '',
                    null
                ],
                [
                    '0C',
                    42
                ],
                [
                    '0C0C',
                    42
                ],
                [
                    ',0C',
                    null
                ],
                [
                    ';0C',
                    null
                ],
                [
                    '$foo',
                    null
                ]
            ];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = cases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expectedOutput = _step_value[1];
                    var iter = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.TokenIterator(input);
                    // Call twice to make sure the iterator doesn't move in all cases.
                    assert.strictEqual(iter.peekVLQ(), expectedOutput, "'".concat(input, "' must result in '").concat(expectedOutput, "'"));
                    assert.strictEqual(iter.peekVLQ(), expectedOutput, "'".concat(input, "' must result in '").concat(expectedOutput, "'"));
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
    // FIXME(szuend): The following tests are a straight-up port from a corresponding layout test.
    //                These tests should be cleaned up, made more readable and maybe refactor
    //                the underlying code to make the individual parts more testable.
    it('can parse a simple source map', function() {
        /*
              The numbers above the respective scripts are column numbers from 0 to 35.
              example.js:
              0         1         2         3
              012345678901234567890123456789012345
              function add(variable_x, variable_y)
              {
                  return variable_x + variable_y;
              }
    
              var global = "foo";
              ----------------------------------------
              example-compiled.js:
              0         1         2         3
              012345678901234567890123456789012345
              function add(a,b){return a+b}var global="foo";
              foo
        */ var mappingPayload = (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
            // clang-format off
            '0:0 => example.js:0:9@add',
            '0:8 => example.js:0:9@add',
            '0:12 => example.js:0:12',
            '0:13 => example.js:0:13@variable_x',
            '0:14 => example.js:0:12',
            '0:15 => example.js:0:25@variable_y',
            '0:16 => example.js:0:12',
            '0:17 => example.js:1:0',
            '0:18 => example.js:2:4',
            '0:24 => example.js:2:11@variable_x',
            '0:26 => example.js:2:4',
            '0:27 => example.js:2:24@variable_y',
            '0:28 => example.js:1:0',
            '0:29 => example.js:5:0',
            '0:33 => example.js:5:4@global',
            '0:40 => example.js:5:13',
            '1:0'
        ]);
        var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, mappingPayload);
        assertMapping(sourceMap.findEntry(0, 9), 'example.js', 0, 9);
        assertMapping(sourceMap.findEntry(0, 13), 'example.js', 0, 13);
        assertMapping(sourceMap.findEntry(0, 15), 'example.js', 0, 25);
        assertMapping(sourceMap.findEntry(0, 18), 'example.js', 2, 4);
        assertMapping(sourceMap.findEntry(0, 25), 'example.js', 2, 11);
        assertMapping(sourceMap.findEntry(0, 27), 'example.js', 2, 24);
        assertMapping(sourceMap.findEntry(1, 0), undefined, undefined, undefined);
        assertReverseMapping(sourceMap.sourceLineMapping(sourceUrlExample, 0, 0), 0, 0);
        assertReverseMapping(sourceMap.sourceLineMapping(sourceUrlExample, 1, 0), 0, 17);
        assertReverseMapping(sourceMap.sourceLineMapping(sourceUrlExample, 2, 0), 0, 18);
        assert.isNull(sourceMap.sourceLineMapping(sourceUrlExample, 4, 0), 'unexpected source mapping for line 4');
        assertReverseMapping(sourceMap.sourceLineMapping(sourceUrlExample, 5, 0), 0, 29);
    });
    it('can do reverse lookups', function() {
        var mappingPayload = (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
            // clang-format off
            '0:0 => example.js:1:0',
            '1:0 => example.js:3:0',
            '2:0 => example.js:1:0',
            '4:0 => other.js:5:0',
            '5:0 => example.js:3:0',
            '7:2 => example.js:1:0',
            '10:5 => other.js:5:0'
        ]);
        var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, mappingPayload);
        // Exact match for source location.
        assert.deepEqual(sourceMap.findReverseRanges(sourceUrlExample, 3, 0).map(function(r) {
            return r.serializeToObject();
        }), [
            {
                startLine: 1,
                startColumn: 0,
                endLine: 2,
                endColumn: 0
            },
            {
                startLine: 5,
                startColumn: 0,
                endLine: 7,
                endColumn: 2
            }
        ]);
        // Inexact match.
        assert.deepEqual(sourceMap.findReverseRanges(sourceUrlExample, 10, 0).map(function(r) {
            return r.serializeToObject();
        }), [
            {
                startLine: 1,
                startColumn: 0,
                endLine: 2,
                endColumn: 0
            },
            {
                startLine: 5,
                startColumn: 0,
                endLine: 7,
                endColumn: 2
            }
        ]);
        // Match with more than two locations.
        assert.deepEqual(sourceMap.findReverseRanges(sourceUrlExample, 1, 0).map(function(r) {
            return r.serializeToObject();
        }), [
            {
                startLine: 0,
                startColumn: 0,
                endLine: 1,
                endColumn: 0
            },
            {
                startLine: 2,
                startColumn: 0,
                endLine: 4,
                endColumn: 0
            },
            {
                startLine: 7,
                startColumn: 2,
                endLine: 10,
                endColumn: 5
            }
        ]);
        // Match at the end of file.
        assert.deepEqual(sourceMap.findReverseRanges(sourceUrlOther, 5, 0).map(function(r) {
            return r.serializeToObject();
        }), [
            {
                startLine: 4,
                startColumn: 0,
                endLine: 5,
                endColumn: 0
            },
            {
                startLine: 10,
                startColumn: 5,
                endLine: Math.pow(2, 31) - 1,
                endColumn: Math.pow(2, 31) - 1
            }
        ]);
        // No match.
        assert.isEmpty(sourceMap.findReverseRanges(sourceUrlExample, 0, 0));
        assert.isEmpty(sourceMap.findReverseRanges(sourceUrlOther, 1, 0));
        // Also test the reverse lookup that returns points.
        assert.deepEqual(sourceMap.findReverseEntries(sourceUrlOther, 5, 0).map(function(e) {
            return e.lineNumber;
        }), [
            4,
            10
        ]);
        assert.deepEqual(sourceMap.findReverseEntries(sourceUrlOther, 10, 0).map(function(e) {
            return e.lineNumber;
        }), [
            4,
            10
        ]);
    });
    it('can do reverse lookups with merging', function() {
        var mappingPayload = (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
            // clang-format off
            '0:0 => example.js:1:0',
            '1:0 => example.js:3:0',
            '2:0 => example.js:1:0',
            '3:0 => example.js:1:0',
            '4:0 => example.js:1:0',
            '5:0 => example.js:2:0',
            '5:2 => example.js:2:1',
            '5:4 => example.js:2:1',
            '5:6 => example.js:2:2',
            '5:8 => example.js:2:1',
            '6:2 => example.js:2:1',
            '6:4 => example.js:2:2',
            '7:0 => example.js:1:0',
            '8:0 => example.js:1:0'
        ]);
        var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, mappingPayload);
        assert.deepEqual(sourceMap.findReverseRanges(sourceUrlExample, 1, 0).map(function(r) {
            return r.serializeToObject();
        }), [
            {
                startLine: 0,
                startColumn: 0,
                endLine: 1,
                endColumn: 0
            },
            {
                startLine: 2,
                startColumn: 0,
                endLine: 5,
                endColumn: 0
            },
            {
                startLine: 7,
                startColumn: 0,
                endLine: Math.pow(2, 31) - 1,
                endColumn: Math.pow(2, 31) - 1
            }
        ]);
        assert.deepEqual(sourceMap.findReverseRanges(sourceUrlExample, 2, 1).map(function(r) {
            return r.serializeToObject();
        }), [
            {
                startLine: 5,
                startColumn: 2,
                endLine: 5,
                endColumn: 6
            },
            {
                startLine: 5,
                startColumn: 8,
                endLine: 6,
                endColumn: 4
            }
        ]);
    });
    it('can parse source maps with segments that contain no mapping information', function() {
        var mappingPayload = {
            mappings: 'AAAA,C,CAAE;',
            sources: [
                sourceUrlExample
            ],
            version: 3
        };
        var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, mappingPayload);
        assertMapping(sourceMap.findEntry(0, 0), 'example.js', 0, 0);
        assertMapping(sourceMap.findEntry(0, 2), 'example.js', 0, 2);
        var emptyEntry = sourceMap.findEntry(0, 1);
        assert.exists(emptyEntry);
        assert.isUndefined(emptyEntry.sourceURL, 'unexpected url present for empty segment');
        assert.isUndefined(emptyEntry.sourceLineNumber, 'unexpected source line number for empty segment');
        assert.isUndefined(emptyEntry.sourceColumnNumber, 'unexpected source line number for empty segment');
    });
    it('can parse source maps with empty lines', function() {
        var mappingPayload = {
            mappings: 'AAAA;;;CACA',
            sources: [
                sourceUrlExample
            ],
            version: 3
        };
        var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, mappingPayload);
        assertMapping(sourceMap.findEntry(0, 0), 'example.js', 0, 0);
        assertReverseMapping(sourceMap.sourceLineMapping(sourceUrlExample, 1, 0), 3, 1);
    });
    it('can parse source maps with mappings in reverse direction', function() {
        /*
            example.js:
            ABCD
    
            compiled.js:
            DCBA
         */ var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, {
            // mappings go in reversed direction.
            mappings: 'GAAA,DAAC,DAAC,DAAC',
            sources: [
                'example.js'
            ],
            version: 3
        });
        assertMapping(sourceMap.findEntry(0, 0), 'example.js', 0, 3);
        assertMapping(sourceMap.findEntry(0, 1), 'example.js', 0, 2);
        assertMapping(sourceMap.findEntry(0, 2), 'example.js', 0, 1);
        assertMapping(sourceMap.findEntry(0, 3), 'example.js', 0, 0);
    });
    it('can parse the multiple sections format', function() {
        var mappingPayload = {
            sections: [
                {
                    offset: {
                        line: 0,
                        column: 0
                    },
                    map: {
                        mappings: 'AAAA,CAEC',
                        sources: [
                            'source1.js',
                            'source2.js'
                        ],
                        version: 3
                    }
                },
                {
                    offset: {
                        line: 2,
                        column: 10
                    },
                    map: {
                        mappings: 'AAAA,CAEC',
                        sources: [
                            'source3.js'
                        ],
                        version: 3
                    }
                }
            ],
            version: 3
        };
        var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, mappingPayload);
        assert.lengthOf(sourceMap.sourceURLs(), 3, 'unexpected number of original source URLs');
        assertMapping(sourceMap.findEntry(0, 0), 'source1.js', 0, 0);
        assertMapping(sourceMap.findEntry(0, 1), 'source1.js', 2, 1);
        assertMapping(sourceMap.findEntry(2, 10), 'source3.js', 0, 0);
        assertMapping(sourceMap.findEntry(2, 11), 'source3.js', 2, 1);
    });
    it('can parse source maps with ClosureScript names', function() {
        /*
          ------------------------------------------------------------------------------------
          chrome_issue_611738.clj:
          (ns devtools-sample.chrome-issue-611738)
    
          (defmacro m []
            `(let [generated# "value2"]))
          ------------------------------------------------------------------------------------
          chrome_issue_611738.cljs:
          (ns devtools-sample.chrome-issue-611738
          (:require-macros [devtools-sample.chrome-issue-611738 :refer [m]]))
    
          (let [name1 "value1"]
            (m))
          ------------------------------------------------------------------------------------
          chrome_issue_611738.js:
          // Compiled by ClojureScript 1.9.89 {}
          goog.provide('devtools_sample.chrome_issue_611738');
          goog.require('cljs.core');
          var name1_31466 = "value1";
          var generated31465_31467 = "value2";
    
          //# sourceMappingURL=chrome_issue_611738.js.map
          ------------------------------------------------------------------------------------
          chrome_issue_611738.js.map:
          {"version":3,"file":"\/Users\/darwin\/code\/cljs-devtools-sample\/resources\/public\/_compiled\/demo\/devtools_sample\/chrome_issue_611738.js","sources":["chrome_issue_611738.cljs"],"lineCount":7,"mappings":";AAAA;;AAGA,kBAAA,dAAMA;AAAN,AACE,IAAAC,uBAAA;AAAA,AAAA","names":["name1","generated31465"]}
          ------------------------------------------------------------------------------------
        */ var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, {
            version: 3,
            sources: [
                'chrome_issue_611738.cljs'
            ],
            mappings: ';AAAA;;AAGA,kBAAA,dAAMA;AAAN,AACE,IAAAC,uBAAA;AAAA,AAAA',
            names: [
                'name1',
                'generated31465'
            ]
        });
        assert.propertyVal(sourceMap.findEntry(1, 0), 'name', undefined);
        assert.propertyVal(sourceMap.findEntry(3, 0), 'name', undefined);
        assert.propertyVal(sourceMap.findEntry(3, 4), 'name', 'name1');
        assert.propertyVal(sourceMap.findEntry(3, 18), 'name', undefined);
        assert.propertyVal(sourceMap.findEntry(4, 0), 'name', undefined);
        assert.propertyVal(sourceMap.findEntry(4, 4), 'name', 'generated31465');
        assert.propertyVal(sourceMap.findEntry(4, 27), 'name', undefined);
        assert.propertyVal(sourceMap.findEntry(5, 0), 'name', undefined);
    });
    it('resolves duplicate canonical urls', function() {
        var mappingPayload = (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
            // clang-format off
            '0:0 => example.js:1:0',
            '1:0 => ./example.js:3:0',
            '2:0 => example.js:1:0',
            '4:0 => other.js:5:0',
            '5:0 => example.js:3:0',
            '7:2 => example.js:1:0',
            '10:5 => other.js:5:0'
        ], 'wp:///' /* sourceRoot */ );
        var sourceMapJsonUrl = 'wp://test/source-map.json';
        var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, mappingPayload);
        assertMapping(sourceMap.findEntry(1, 0), 'wp:///example.js', 3, 0);
        assertMapping(sourceMap.findEntry(4, 0), 'wp:///other.js', 5, 0);
    });
    describe('compatibleForURL', function() {
        var compiledURL = 'http://example.com/foo.js';
        var sourceMappingURL = "".concat(compiledURL, ".map");
        var sourceRoot = 'webpack:///src';
        var sourceURL = "".concat(sourceRoot, "/foo.ts");
        it('correctly identifies equal sourcemaps with content', function() {
            var payload = {
                mappings: '',
                sourceRoot: sourceRoot,
                sources: [
                    'foo.ts'
                ],
                sourcesContent: [
                    'function foo() {\n  console.log("Hello world!");\n}'
                ],
                version: 3
            };
            var sourceMap1 = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledURL, sourceMappingURL, payload);
            var sourceMap2 = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledURL, sourceMappingURL, payload);
            assert.isTrue(sourceMap1.compatibleForURL(sourceURL, sourceMap2));
            assert.isTrue(sourceMap2.compatibleForURL(sourceURL, sourceMap1));
        });
        it('correctly identifies equal sourcemaps without content', function() {
            var payload = {
                mappings: '',
                sourceRoot: sourceRoot,
                sources: [
                    'foo.ts'
                ],
                version: 3
            };
            var sourceMap1 = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledURL, sourceMappingURL, payload);
            var sourceMap2 = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledURL, sourceMappingURL, payload);
            assert.isTrue(sourceMap1.compatibleForURL(sourceURL, sourceMap2));
            assert.isTrue(sourceMap2.compatibleForURL(sourceURL, sourceMap1));
        });
        it('correctly differentiates based on content', function() {
            var sourceMap1 = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledURL, sourceMappingURL, {
                mappings: '',
                sourceRoot: sourceRoot,
                sources: [
                    'foo.ts'
                ],
                sourcesContent: [
                    'function foo() {\n  console.log("Hello from first!");\n}'
                ],
                version: 3
            });
            var sourceMap2 = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledURL, sourceMappingURL, {
                mappings: '',
                sourceRoot: sourceRoot,
                sources: [
                    'foo.ts'
                ],
                sourcesContent: [
                    'function foo() {\n  console.log("Hello from second!");\n}'
                ],
                version: 3
            });
            assert.isFalse(sourceMap1.compatibleForURL(sourceURL, sourceMap2));
            assert.isFalse(sourceMap2.compatibleForURL(sourceURL, sourceMap1));
        });
        it('correctly differentiates based on ignore-list hint', function() {
            var payload1 = {
                mappings: '',
                sourceRoot: sourceRoot,
                sources: [
                    'foo.ts'
                ],
                sourcesContent: [
                    'function foo() {\n  console.log("Hello world!");\n}'
                ],
                version: 3
            };
            var payload2 = _object_spread_props(_object_spread({}, payload1), {
                'ignoreList': [
                    0
                ]
            });
            var sourceMap1 = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledURL, sourceMappingURL, payload1);
            var sourceMap2 = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledURL, sourceMappingURL, payload2);
            assert.isFalse(sourceMap1.compatibleForURL(sourceURL, sourceMap2));
            assert.isFalse(sourceMap2.compatibleForURL(sourceURL, sourceMap1));
        });
    });
    describe('source URL resolution', function() {
        var noSourceRoot = '';
        var absoluteSourceRootExample = 'http://example.com/src';
        var absoluteSourceRootFoo = 'http://foo.com/src';
        var relativeSourceRootSrc = 'src';
        var relativeSourceRootSlashSrc = '/src';
        var relativeSourceRootSrcSlash = 'src/';
        var relativeSourceRootCSlashD = 'c/d';
        var cases = [
            // No sourceRoot, relative sourceURL. sourceURL is normalized and resolved relative to sourceMapURL.
            {
                sourceRoot: noSourceRoot,
                sourceURL: 'foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'http://example.com/foo.ts'
            },
            {
                sourceRoot: noSourceRoot,
                sourceURL: 'foo.ts',
                sourceMapURL: 'http://example.com/a/foo.js.map',
                expected: 'http://example.com/a/foo.ts'
            },
            {
                sourceRoot: noSourceRoot,
                sourceURL: 'foo.ts',
                sourceMapURL: 'http://example.com/a/b/foo.js.map',
                expected: 'http://example.com/a/b/foo.ts'
            },
            {
                sourceRoot: noSourceRoot,
                sourceURL: '/foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'http://example.com/foo.ts'
            },
            {
                sourceRoot: noSourceRoot,
                sourceURL: '/foo.ts',
                sourceMapURL: 'http://example.com/a/foo.js.map',
                expected: 'http://example.com/foo.ts'
            },
            {
                sourceRoot: noSourceRoot,
                sourceURL: '/foo.ts',
                sourceMapURL: 'http://example.com/a/b/foo.js.map',
                expected: 'http://example.com/foo.ts'
            },
            {
                sourceRoot: noSourceRoot,
                sourceURL: '/./foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'http://example.com/foo.ts'
            },
            {
                sourceRoot: noSourceRoot,
                sourceURL: '/./foo.ts',
                sourceMapURL: 'http://example.com/a/foo.js.map',
                expected: 'http://example.com/foo.ts'
            },
            {
                sourceRoot: noSourceRoot,
                sourceURL: '/./foo.ts',
                sourceMapURL: 'http://example.com/a/b/foo.js.map',
                expected: 'http://example.com/foo.ts'
            },
            {
                sourceRoot: noSourceRoot,
                sourceURL: '../foo.ts',
                sourceMapURL: 'http://example.com/a/b/foo.js.map',
                expected: 'http://example.com/a/foo.ts'
            },
            {
                sourceRoot: noSourceRoot,
                sourceURL: '../../foo.ts',
                sourceMapURL: 'http://example.com/a/b/foo.js.map',
                expected: 'http://example.com/foo.ts'
            },
            {
                sourceRoot: noSourceRoot,
                sourceURL: '../../../foo.ts',
                sourceMapURL: 'http://example.com/a/b/foo.js.map',
                expected: 'http://example.com/foo.ts'
            },
            // No sourceRoot, absolute sourceURL. The sourceURL is normalized and then used as-is.
            {
                sourceRoot: noSourceRoot,
                sourceURL: 'webpack://example/src/foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'webpack://example/src/foo.ts'
            },
            {
                sourceRoot: noSourceRoot,
                sourceURL: 'webpack://example/src/a/b/foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'webpack://example/src/a/b/foo.ts'
            },
            {
                sourceRoot: noSourceRoot,
                sourceURL: 'webpack://example/../../../src/a/b/foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'webpack://example/src/a/b/foo.ts'
            },
            {
                sourceRoot: noSourceRoot,
                sourceURL: 'webpack://example/src/a/../b/foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'webpack://example/src/b/foo.ts'
            },
            // Relative sourceRoot, relative sourceURL. The sourceRoot and sourceURL paths are concatenated and normalized before resolving against the sourceMapURL.
            {
                sourceRoot: relativeSourceRootSrc,
                sourceURL: 'foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'http://example.com/src/foo.ts'
            },
            {
                sourceRoot: relativeSourceRootSrc,
                sourceURL: 'foo.ts',
                sourceMapURL: 'http://example.com/a/foo.js.map',
                expected: 'http://example.com/a/src/foo.ts'
            },
            {
                sourceRoot: relativeSourceRootSrc,
                sourceURL: 'foo.ts',
                sourceMapURL: 'http://example.com/a/b/foo.js.map',
                expected: 'http://example.com/a/b/src/foo.ts'
            },
            {
                sourceRoot: relativeSourceRootSrc,
                sourceURL: '/foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'http://example.com/src/foo.ts'
            },
            {
                sourceRoot: relativeSourceRootSrc,
                sourceURL: '/foo.ts',
                sourceMapURL: 'http://example.com/a/foo.js.map',
                expected: 'http://example.com/a/src/foo.ts'
            },
            {
                sourceRoot: relativeSourceRootSrc,
                sourceURL: '/foo.ts',
                sourceMapURL: 'http://example.com/a/b/foo.js.map',
                expected: 'http://example.com/a/b/src/foo.ts'
            },
            {
                sourceRoot: relativeSourceRootSrcSlash,
                sourceURL: 'foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'http://example.com/src/foo.ts'
            },
            {
                sourceRoot: relativeSourceRootSrcSlash,
                sourceURL: 'foo.ts',
                sourceMapURL: 'http://example.com/a/foo.js.map',
                expected: 'http://example.com/a/src/foo.ts'
            },
            {
                sourceRoot: relativeSourceRootSrcSlash,
                sourceURL: 'foo.ts',
                sourceMapURL: 'http://example.com/a/b/foo.js.map',
                expected: 'http://example.com/a/b/src/foo.ts'
            },
            {
                sourceRoot: relativeSourceRootSlashSrc,
                sourceURL: 'foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'http://example.com/src/foo.ts'
            },
            {
                sourceRoot: relativeSourceRootSlashSrc,
                sourceURL: 'foo.ts',
                sourceMapURL: 'http://example.com/a/foo.js.map',
                expected: 'http://example.com/src/foo.ts'
            },
            {
                sourceRoot: relativeSourceRootSlashSrc,
                sourceURL: 'foo.ts',
                sourceMapURL: 'http://example.com/a/b/foo.js.map',
                expected: 'http://example.com/src/foo.ts'
            },
            {
                sourceRoot: relativeSourceRootSrc,
                sourceURL: '../foo.ts',
                sourceMapURL: 'http://example.com/a/b/foo.js.map',
                expected: 'http://example.com/a/b/foo.ts'
            },
            {
                sourceRoot: relativeSourceRootSrc,
                sourceURL: '../../foo.ts',
                sourceMapURL: 'http://example.com/a/b/foo.js.map',
                expected: 'http://example.com/a/foo.ts'
            },
            {
                sourceRoot: relativeSourceRootSrc,
                sourceURL: '../../../foo.ts',
                sourceMapURL: 'http://example.com/a/foo.js.map',
                expected: 'http://example.com/foo.ts'
            },
            // Relative sourceRoot, absolute sourceURL. Ignore the sourceRoot, normalize the sourceURL.
            {
                sourceRoot: relativeSourceRootCSlashD,
                sourceURL: 'webpack://example/src/foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'webpack://example/src/foo.ts'
            },
            {
                sourceRoot: relativeSourceRootCSlashD,
                sourceURL: 'webpack://example/../../../src/a/b/foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'webpack://example/src/a/b/foo.ts'
            },
            // Absolute sourceRoot, relative sourceURL. Append the sourceURL path into the sourceRoot path, normalize and use the resulting URL.
            {
                sourceRoot: absoluteSourceRootExample,
                sourceURL: 'foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'http://example.com/src/foo.ts'
            },
            {
                sourceRoot: absoluteSourceRootExample,
                sourceURL: 'a/foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'http://example.com/src/a/foo.ts'
            },
            {
                sourceRoot: absoluteSourceRootExample,
                sourceURL: 'a/b/foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'http://example.com/src/a/b/foo.ts'
            },
            {
                sourceRoot: absoluteSourceRootExample,
                sourceURL: '/foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'http://example.com/src/foo.ts'
            },
            {
                sourceRoot: absoluteSourceRootExample,
                sourceURL: '/a/foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'http://example.com/src/a/foo.ts'
            },
            {
                sourceRoot: absoluteSourceRootExample,
                sourceURL: '/a/b/foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'http://example.com/src/a/b/foo.ts'
            },
            {
                sourceRoot: absoluteSourceRootExample,
                sourceURL: '../foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'http://example.com/foo.ts'
            },
            {
                sourceRoot: absoluteSourceRootExample,
                sourceURL: '../../foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'http://example.com/foo.ts'
            },
            {
                sourceRoot: 'http://example.com/src/a/b',
                sourceURL: '../../../foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'http://example.com/foo.ts'
            },
            // Absolute sourceRoot, absolute sourceURL. Ignore the sourceRoot, normalize the sourceURL.
            {
                sourceRoot: absoluteSourceRootFoo,
                sourceURL: 'webpack://example/src/foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'webpack://example/src/foo.ts'
            },
            {
                sourceRoot: absoluteSourceRootFoo,
                sourceURL: 'webpack://example/../../../src/a/b/foo.ts',
                sourceMapURL: 'http://example.com/foo.js.map',
                expected: 'webpack://example/src/a/b/foo.ts'
            },
            {
                sourceRoot: noSourceRoot,
                sourceURL: 'file.ts',
                sourceMapURL: 'https://example.com/some///random/file.js.map',
                expected: 'https://example.com/some///random/file.ts'
            },
            {
                sourceRoot: noSourceRoot,
                sourceURL: 'https://example.com/some///random/file.ts',
                sourceMapURL: 'https://example.com/some///random/file.js.map',
                expected: 'https://example.com/some///random/file.ts'
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var _step_value = _step.value, sourceRoot = _step_value.sourceRoot, sourceURL = _step_value.sourceURL, sourceMapURL = _step_value.sourceMapURL, expected = _step_value.expected;
                it('can resolve sourceURL "'.concat(sourceURL, '" with sourceRoot "').concat(sourceRoot, '" and sourceMapURL "').concat(sourceMapURL, '"'), function() {
                    var mappingPayload = {
                        mappings: 'AAAA;;;CACA',
                        sourceRoot: sourceRoot,
                        sources: [
                            sourceURL
                        ],
                        version: 3
                    };
                    var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapURL, mappingPayload);
                    var sourceURLs = sourceMap.sourceURLs();
                    assert.lengthOf(sourceURLs, 1, 'unexpected number of original source URLs');
                    assert.strictEqual(sourceURLs[0], expected);
                });
            };
            for(var _iterator = cases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
        it('does not touch sourceURLs that conflict with the compiled URL', function() {
            var sourceURL = 'http://localhost:12345/index.js';
            var sourceMappingURL = "".concat(sourceURL, ".map");
            var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(sourceURL, sourceMappingURL, {
                version: 3,
                sources: [
                    sourceURL
                ],
                sourcesContent: [
                    'console.log(42)'
                ],
                mappings: ''
            });
            var sourceURLs = sourceMap.sourceURLs();
            assert.lengthOf(sourceURLs, 1);
            assert.strictEqual(sourceURLs[0], sourceURL);
        });
    });
    describe('automatic ignore-listing', function() {
        it('parses the known third parties from the `ignoreList` section', function() {
            var mappingPayload = (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                // clang-format off
                '0:0 => vendor.js:1:0',
                '1:0 => main.js:1:0',
                '2:0 => example.js:1:0',
                '3:0 => other.js:1:0'
            ], 'wp:///' /* sourceRoot */ );
            mappingPayload.ignoreList = [
                0 /* vendor.js */ ,
                3 /* other.js */ 
            ];
            var sourceMapJsonUrl = 'wp://test/source-map.json';
            var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, mappingPayload);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///vendor.js'), true);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///main.js'), false);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///example.js'), false);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///other.js'), true);
        });
        it('parses the known third parties from the deprecated `x_google_ignoreList` section if `ignoreList` is not present', function() {
            var mappingPayload = (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                // clang-format off
                '0:0 => vendor.js:1:0',
                '1:0 => main.js:1:0',
                '2:0 => example.js:1:0',
                '3:0 => other.js:1:0'
            ], 'wp:///' /* sourceRoot */ );
            mappingPayload.x_google_ignoreList = [
                0 /* vendor.js */ ,
                3 /* other.js */ 
            ];
            var sourceMapJsonUrl = 'wp://test/source-map.json';
            var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, mappingPayload);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///vendor.js'), true);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///main.js'), false);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///example.js'), false);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///other.js'), true);
        });
        it('parses the known third parties from the `ignoreList` section and ignores deprecated `x_google_ignoreList`', function() {
            var mappingPayload = (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                // clang-format off
                '0:0 => vendor.js:1:0',
                '1:0 => main.js:1:0',
                '2:0 => example.js:1:0',
                '3:0 => other.js:1:0'
            ], 'wp:///' /* sourceRoot */ );
            mappingPayload.ignoreList = [
                0 /* vendor.js */ ,
                3 /* other.js */ 
            ];
            mappingPayload.x_google_ignoreList = [
                1 /* main.js */ ,
                2 /* example.js */ 
            ];
            var sourceMapJsonUrl = 'wp://test/source-map.json';
            var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, mappingPayload);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///vendor.js'), true);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///main.js'), false);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///example.js'), false);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///other.js'), true);
        });
        it('computes ranges for third party code in a simple case', function() {
            var mappingPayload = (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                // clang-format off
                '0:0 => vendor1.js:1:0',
                '1:0 => vendor2.js:1:0',
                '2:0 => vendor3.js:1:0',
                '3:0 => foo.js:1:0'
            ], 'wp:///' /* sourceRoot */ );
            mappingPayload.ignoreList = [
                0 /* vendor1.js */ ,
                1 /* vendor2.js */ ,
                2 /* vendor3.js */ 
            ];
            var sourceMapJsonUrl = 'wp://test/source-map.json';
            var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, mappingPayload);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///foo.js'), false);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///vendor1.js'), true);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///vendor2.js'), true);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///vendor3.js'), true);
            assert.deepEqual(sourceMap.findRanges(function(url) {
                return sourceMap.hasIgnoreListHint(url);
            }), [
                {
                    'startLine': 0,
                    'startColumn': 0,
                    'endLine': 3,
                    'endColumn': 0
                }
            ]);
        });
        it('computes ranges for third party code when parts of the script are third-party', function() {
            var mappingPayload = (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                // clang-format off
                '10:9 => foo.js:1:0',
                '11:8 => vendor1.js:1:0',
                '12:7 => vendor1.js:1:0',
                '13:6 => bar.js:1:0',
                '14:5 => vendor1.js:1:0',
                '15:4 => vendor2.js:1:0',
                '16:3 => vendor1.js:1:0',
                '17:2 => foo.js:1:0',
                '18:1 => baz.js:1:0',
                '19:0 => vendor3.js:1:0'
            ], 'wp:///' /* sourceRoot */ );
            mappingPayload.ignoreList = [
                1 /* vendor1.js */ ,
                3 /* vendor2.js */ ,
                5 /* vendor3.js */ 
            ];
            var sourceMapJsonUrl = 'wp://test/source-map.json';
            var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, mappingPayload);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///foo.js'), false);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///bar.js'), false);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///baz.js'), false);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///vendor1.js'), true);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///vendor2.js'), true);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///vendor3.js'), true);
            assert.deepEqual(sourceMap.findRanges(function(url) {
                return sourceMap.hasIgnoreListHint(url);
            }), [
                {
                    'startLine': 11,
                    'startColumn': 8,
                    'endLine': 13,
                    'endColumn': 6
                },
                {
                    'startLine': 14,
                    'startColumn': 5,
                    'endLine': 17,
                    'endColumn': 2
                },
                {
                    'startLine': 19,
                    'startColumn': 0,
                    'endLine': 2147483647,
                    'endColumn': 2147483647
                }
            ]);
        });
        it('computes ranges when the first mapping is for third-party code that is not on the first char', function() {
            var mappingPayload = (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                // clang-format off
                '10:9 => vendor1.js:1:0',
                '11:8 => vendor2.js:1:0',
                '12:7 => vendor3.js:1:0',
                '13:6 => foo.js:1:0'
            ], 'wp:///' /* sourceRoot */ );
            mappingPayload.ignoreList = [
                0 /* vendor1.js */ ,
                1 /* vendor2.js */ ,
                2 /* vendor3.js */ 
            ];
            var sourceMapJsonUrl = 'wp://test/source-map.json';
            var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, mappingPayload);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///foo.js'), false);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///vendor1.js'), true);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///vendor2.js'), true);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///vendor3.js'), true);
            assert.deepEqual(sourceMap.findRanges(function(url) {
                return sourceMap.hasIgnoreListHint(url);
            }), [
                {
                    'startLine': 10,
                    'startColumn': 9,
                    'endLine': 13,
                    'endColumn': 6
                }
            ]);
            assert.deepEqual(sourceMap.findRanges(function(url) {
                return sourceMap.hasIgnoreListHint(url);
            }, {
                isStartMatching: true
            }), [
                {
                    'startLine': 0,
                    'startColumn': 0,
                    'endLine': 13,
                    'endColumn': 6
                }
            ]);
        });
        it('computes ranges when the first mapping is for first-party code that is not on the first char', function() {
            var mappingPayload = (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                // clang-format off
                '5:5 => foo.js:1:0',
                '10:9 => vendor1.js:1:0',
                '11:8 => vendor2.js:1:0',
                '12:7 => vendor3.js:1:0',
                '13:6 => foo.js:1:0'
            ], 'wp:///' /* sourceRoot */ );
            mappingPayload.ignoreList = [
                1 /* vendor1.js */ ,
                2 /* vendor2.js */ ,
                3 /* vendor3.js */ 
            ];
            var sourceMapJsonUrl = 'wp://test/source-map.json';
            var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, mappingPayload);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///foo.js'), false);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///vendor1.js'), true);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///vendor2.js'), true);
            assert.strictEqual(sourceMap.hasIgnoreListHint('wp:///vendor3.js'), true);
            assert.deepEqual(sourceMap.findRanges(function(url) {
                return sourceMap.hasIgnoreListHint(url);
            }), [
                {
                    'startLine': 10,
                    'startColumn': 9,
                    'endLine': 13,
                    'endColumn': 6
                }
            ]);
            assert.deepEqual(sourceMap.findRanges(function(url) {
                return sourceMap.hasIgnoreListHint(url);
            }, {
                isStartMatching: true
            }), [
                {
                    'startLine': 0,
                    'startColumn': 0,
                    'endLine': 5,
                    'endColumn': 5
                },
                {
                    'startLine': 10,
                    'startColumn': 9,
                    'endLine': 13,
                    'endColumn': 6
                }
            ]);
        });
    });
    describe('loadSourceMap', function() {
        var payload = {
            version: 3,
            sources: [],
            mappings: ''
        };
        var parseSourceMap = _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.parseSourceMap;
        it('can parse sourcemap with BOM at the beginning of the file', function() {
            var content = '\uFEFF' + JSON.stringify(payload);
            assert.deepEqual(parseSourceMap(content), payload);
        });
        it('skips over first line when file starts with )]}', function() {
            var content = ')]} {"version": 2}\n' + JSON.stringify(payload);
            assert.deepEqual(parseSourceMap(content), payload);
        });
    });
    describe('reverseMapTextRanges', function() {
        var SourceMap = _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap;
        var TextRange = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.TextRange;
        it('yields an empty array for unknown source URLs', function() {
            var sourceMap = new SourceMap(compiledUrl, sourceMapJsonUrl, (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                '0:0 => example.js:0:0'
            ]));
            assert.isEmpty(sourceMap.reverseMapTextRanges(sourceUrlOther, new TextRange(0, 0, 1, 1)));
        });
        it('yields a single range for trivial single-line, fully contained mappings', function() {
            var sourceMap = new SourceMap(compiledUrl, sourceMapJsonUrl, (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                '0:0 => example.js:0:0',
                '0:5 => example.js:0:6',
                '1:0 => other.js:0:0',
                '1:8 => other.js:0:9'
            ]));
            var exampleRanges = sourceMap.reverseMapTextRanges(sourceUrlExample, new TextRange(0, 0, 0, 6));
            assert.lengthOf(exampleRanges, 1, 'expected a single range');
            assert.deepEqual(exampleRanges[0], new TextRange(0, 0, 0, 5));
            var otherRanges = sourceMap.reverseMapTextRanges(sourceUrlOther, new TextRange(0, 4, 0, 7));
            assert.lengthOf(otherRanges, 1, 'expected a single range');
            assert.deepEqual(otherRanges[0], new TextRange(1, 0, 1, 8));
        });
        it('yields a combined range for adjacent single-line mappings', function() {
            var sourceMap = new SourceMap(compiledUrl, sourceMapJsonUrl, (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                '0:0 => example.js:0:0',
                '0:5 => example.js:0:5',
                '0:9 => example.js:0:9',
                '5:0 => other.js:1:1',
                '5:1 => other.js:1:4',
                '5:8 => other.js:1:8'
            ]));
            var exampleRanges = sourceMap.reverseMapTextRanges(sourceUrlExample, new TextRange(0, 1, 0, 6));
            assert.lengthOf(exampleRanges, 1, 'expected a single range');
            assert.deepEqual(exampleRanges[0], new TextRange(0, 0, 0, 9));
            var otherRanges = sourceMap.reverseMapTextRanges(sourceUrlOther, new TextRange(1, 1, 1, 7));
            assert.lengthOf(otherRanges, 1, 'expected a single range');
            assert.deepEqual(otherRanges[0], new TextRange(5, 0, 5, 8));
        });
        it('yields a combined range for adjacent multi-line mappings', function() {
            var sourceMap = new SourceMap(compiledUrl, sourceMapJsonUrl, (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                '0:0 => example.js:0:0',
                '2:5 => example.js:1:5',
                '9:9 => example.js:1:9'
            ]));
            var exampleRanges = sourceMap.reverseMapTextRanges(sourceUrlExample, new TextRange(0, 0, 1, 6));
            assert.lengthOf(exampleRanges, 1, 'expected a single range');
            assert.deepEqual(exampleRanges[0], new TextRange(0, 0, 9, 9));
            exampleRanges = sourceMap.reverseMapTextRanges(sourceUrlExample, new TextRange(0, 0, 1, 9));
            assert.lengthOf(exampleRanges, 1, 'expected a single range');
            assert.deepEqual(exampleRanges[0], new TextRange(0, 0, 9, 9));
        });
        it('correctly handles exact range matches', function() {
            var sourceMap = new SourceMap(compiledUrl, sourceMapJsonUrl, (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                '0:0 => example.js:0:0',
                '0:1 => example.js:0:3'
            ]));
            var exampleRanges = sourceMap.reverseMapTextRanges(sourceUrlExample, new TextRange(0, 0, 0, 3));
            assert.lengthOf(exampleRanges, 1, 'expected a single range');
            assert.deepEqual(exampleRanges[0], new TextRange(0, 0, 0, 1));
        });
        it('correctly handles un-mapped prefixes in source files', function() {
            var sourceMap = new SourceMap(compiledUrl, sourceMapJsonUrl, (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                '1:2 => example.js:4:0',
                '3:4 => example.js:4:5'
            ]));
            var exampleRanges = sourceMap.reverseMapTextRanges(sourceUrlExample, new TextRange(0, 0, 4, 1));
            assert.lengthOf(exampleRanges, 1, 'expected a single range');
            assert.deepEqual(exampleRanges[0], new TextRange(1, 2, 3, 4));
        });
        it('correctly handles un-mapped suffixes in source files', function() {
            var sourceMap = new SourceMap(compiledUrl, sourceMapJsonUrl, (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                '1:2 => example.js:4:0',
                '3:4 => example.js:4:5'
            ]));
            var exampleRanges = sourceMap.reverseMapTextRanges(sourceUrlExample, new TextRange(4, 0, 10, 0));
            assert.lengthOf(exampleRanges, 1, 'expected a single range');
            assert.deepEqual(exampleRanges[0], TextRange.createUnboundedFromLocation(1, 2));
            exampleRanges = sourceMap.reverseMapTextRanges(sourceUrlExample, new TextRange(4, 1, 10, 0));
            assert.lengthOf(exampleRanges, 1, 'expected a single range');
            assert.deepEqual(exampleRanges[0], TextRange.createUnboundedFromLocation(1, 2));
            exampleRanges = sourceMap.reverseMapTextRanges(sourceUrlExample, new TextRange(4, 5, 10, 0));
            assert.lengthOf(exampleRanges, 1, 'expected a single range');
            assert.deepEqual(exampleRanges[0], TextRange.createUnboundedFromLocation(3, 4));
            exampleRanges = sourceMap.reverseMapTextRanges(sourceUrlExample, new TextRange(4, 8, 10, 0));
            assert.lengthOf(exampleRanges, 1, 'expected a single range');
            assert.deepEqual(exampleRanges[0], TextRange.createUnboundedFromLocation(3, 4));
        });
        it('correctly handles single-line mappings with holes', function() {
            var sourceMap = new SourceMap(compiledUrl, sourceMapJsonUrl, (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                '1:0 => example.js:4:0',
                '1:1 => other.js:6:0',
                '1:4 => example.js:4:5',
                '1:5 => example.js:4:8',
                '1:6 => example.js:1:0',
                '1:7 => example.js:4:9'
            ]));
            var exampleRanges = sourceMap.reverseMapTextRanges(sourceUrlExample, new TextRange(4, 1, 4, 6));
            assert.lengthOf(exampleRanges, 2, 'expected two distinct ranges');
            assert.deepEqual(exampleRanges[0], new TextRange(1, 0, 1, 1));
            assert.deepEqual(exampleRanges[1], new TextRange(1, 4, 1, 5));
            exampleRanges = sourceMap.reverseMapTextRanges(sourceUrlExample, new TextRange(4, 1, 4, 9));
            assert.lengthOf(exampleRanges, 2, 'expected two distinct ranges');
            assert.deepEqual(exampleRanges[0], new TextRange(1, 0, 1, 1));
            assert.deepEqual(exampleRanges[1], new TextRange(1, 4, 1, 6));
        });
        it('correctly handles overlapping mappings', function() {
            // This presents a really weird example, which we believe is unlikely to be relevant
            // in practice. But just in case, this test case serves as a documentation for how
            // DevTools will currently resolve this case: It will purely go by the reverse
            // mapping to figure out which chunks belong together and then afterwards will
            // try to combine mappings in the order in which the reverse mappings are sorted.
            var sourceMap = new SourceMap(compiledUrl, sourceMapJsonUrl, (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                '1:0 => example.js:1:0',
                '1:4 => example.js:1:5',
                '1:5 => example.js:1:8',
                '2:6 => example.js:1:1',
                '2:7 => example.js:1:9'
            ]));
            var exampleRanges = sourceMap.reverseMapTextRanges(sourceUrlExample, new TextRange(1, 2, 1, 7));
            assert.lengthOf(exampleRanges, 2, 'expected two distinct ranges');
            assert.deepEqual(exampleRanges[0], new TextRange(1, 4, 1, 5));
            assert.deepEqual(exampleRanges[1], new TextRange(2, 6, 2, 7));
        });
        it('correctly sorts and merges adjacent mappings even if source map is unsorted', function() {
            // This is a slight variation of the previous test. We want to ensure that
            // no matter how crazy the source map, we always yield a maximally merged
            // and sorted result.
            var sourceMap = new SourceMap(compiledUrl, sourceMapJsonUrl, (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.encodeSourceMap)([
                '1:0 => example.js:1:0',
                '1:5 => example.js:1:8',
                '2:6 => example.js:1:1',
                '2:7 => example.js:1:9'
            ]));
            var exampleRanges = sourceMap.reverseMapTextRanges(sourceUrlExample, new TextRange(1, 0, 1, 9));
            assert.lengthOf(exampleRanges, 1, 'expected a single maximally merged range');
            assert.deepEqual(exampleRanges[0], new TextRange(1, 0, 2, 7));
        });
    });
    describe('findEntry', function() {
        it('can resolve generated positions with inlineFrameIndex', function() {
            _root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.enableForTest("use-source-map-scopes" /* Root.Runtime.ExperimentName.USE_SOURCE_MAP_SCOPES */ );
            // 'foo' calls 'bar', 'bar' calls 'baz'. 'bar' and 'baz' are inlined into 'foo'.
            var names = [];
            var originalScopes = [
                new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.OriginalScopeBuilder(names).start(0, 0, 'global').start(10, 0, 'function', 'foo').end(20, 0).start(30, 0, 'function', 'bar').end(40, 0).start(50, 0, 'function', 'baz').end(60, 0).end(70, 0).build()
            ];
            var generatedRanges = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_2__.GeneratedRangeBuilder(names).start(0, 0, {
                definition: {
                    sourceIdx: 0,
                    scopeIdx: 0
                }
            }).start(0, 0, {
                definition: {
                    sourceIdx: 0,
                    scopeIdx: 1
                },
                isScope: true
            }).start(0, 5, {
                definition: {
                    sourceIdx: 0,
                    scopeIdx: 3
                },
                callsite: {
                    sourceIdx: 0,
                    line: 15,
                    column: 0
                }
            }).start(0, 5, {
                definition: {
                    sourceIdx: 0,
                    scopeIdx: 5
                },
                callsite: {
                    sourceIdx: 0,
                    line: 35,
                    column: 0
                }
            }).end(0, 10).end(0, 10).end(0, 10).end(0, 10).build();
            var sourceMap = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMap.SourceMap(compiledUrl, sourceMapJsonUrl, {
                version: 3,
                sources: [
                    'foo.ts'
                ],
                mappings: '',
                names: names,
                originalScopes: originalScopes,
                generatedRanges: generatedRanges
            });
            assert.isNull(sourceMap.findEntry(0, 7, 0)); // We don't have mappings, so inlineFrameIndex = 0 ('baz') has no entry.
            var barEntry = sourceMap.findEntry(0, 7, 1);
            assert.isNotNull(barEntry);
            assert.strictEqual(barEntry.sourceLineNumber, 35);
            assert.strictEqual(barEntry.sourceColumnNumber, 0);
            var fooEntry = sourceMap.findEntry(0, 7, 2);
            assert.isNotNull(fooEntry);
            assert.strictEqual(fooEntry.sourceLineNumber, 15);
            assert.strictEqual(fooEntry.sourceColumnNumber, 0);
        });
    });
}); //# sourceMappingURL=SourceMap.test.js.map


}),

}]);