"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_SourceMapScopes_test_js"], {
"./core/sdk/SourceMapScopes.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/SourceMapEncoder.js */ "./testing/SourceMapEncoder.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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


var _SDK_SourceMapScopes = _sdk_js__WEBPACK_IMPORTED_MODULE_1__.SourceMapScopes, decodeOriginalScopes = _SDK_SourceMapScopes.decodeOriginalScopes, decodeGeneratedRanges = _SDK_SourceMapScopes.decodeGeneratedRanges;
describe('decodeOriginalScopes', function() {
    it('throws for empty input', function() {
        assert.throws(function() {
            return decodeOriginalScopes([
                ''
            ], []);
        });
    });
    it('throws for unexpected commas', function() {
        var brokenScopes = (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeVlq)(42) + ',' + (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeVlq)(21);
        assert.throws(function() {
            return decodeOriginalScopes([
                brokenScopes
            ], []);
        }, /Unexpected char ','/);
    });
    it('throws for missing "end" item', function() {
        var names = [];
        var brokenScopes = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(0, 0, 'global').build();
        assert.throws(function() {
            return decodeOriginalScopes([
                brokenScopes
            ], names);
        }, /Malformed/);
    });
    it('throws if positions of subsequent start/end items are not monotonically increasing', function() {
        var names = [];
        var scopes = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(0, 40, 'global').start(0, 25, 'function').end(0, 30).end(0, 50).build();
        assert.throws(function() {
            return decodeOriginalScopes([
                scopes
            ], names);
        }, /Malformed/);
    });
    it('decodes a global scope', function() {
        var names = [];
        var scope = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(0, 0, 'global').end(5, 0).build();
        var originalScopes = decodeOriginalScopes([
            scope
        ], names);
        assert.lengthOf(originalScopes, 1);
        var _originalScopes_ = originalScopes[0], root = _originalScopes_.root, scopeForItemIndex = _originalScopes_.scopeForItemIndex;
        assert.deepEqual(root.start, {
            line: 0,
            column: 0
        });
        assert.deepEqual(root.end, {
            line: 5,
            column: 0
        });
        assert.strictEqual(root.kind, 'global');
        assert.strictEqual(scopeForItemIndex.get(0), root);
    });
    it('ignores all but the first global scope (multiple top-level siblings)', function() {
        var names = [];
        var scope = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(0, 0, 'global').end(5, 0).start(10, 0, 'global').end(20, 0).build();
        var originalScopes = decodeOriginalScopes([
            scope
        ], names);
        assert.lengthOf(originalScopes, 1);
        var _originalScopes_ = originalScopes[0], root = _originalScopes_.root, scopeForItemIndex = _originalScopes_.scopeForItemIndex;
        assert.deepEqual(root.start, {
            line: 0,
            column: 0
        });
        assert.deepEqual(root.end, {
            line: 5,
            column: 0
        });
        assert.lengthOf(root.children, 0);
        assert.isUndefined(scopeForItemIndex.get(2));
    });
    it('decodes nested scopes', function() {
        var names = [];
        var scope = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(0, 0, 'global').start(2, 5, 'function').start(4, 10, 'block').end(6, 5).end(8, 0).end(40, 0).build();
        var originalScopes = decodeOriginalScopes([
            scope
        ], names);
        assert.lengthOf(originalScopes, 1);
        var _originalScopes_ = originalScopes[0], root = _originalScopes_.root, scopeForItemIndex = _originalScopes_.scopeForItemIndex;
        assert.lengthOf(root.children, 1);
        assert.lengthOf(root.children[0].children, 1);
        assert.strictEqual(scopeForItemIndex.get(1), root.children[0]);
        var innerMost = root.children[0].children[0];
        assert.deepEqual(innerMost.start, {
            line: 4,
            column: 10
        });
        assert.deepEqual(innerMost.end, {
            line: 6,
            column: 5
        });
        assert.strictEqual(innerMost.kind, 'block');
        assert.strictEqual(scopeForItemIndex.get(2), innerMost);
    });
    it('decodes sibling scopes', function() {
        var names = [];
        var scope = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(0, 0, 'global').start(2, 5, 'function').end(4, 0).start(6, 6, 'function').end(8, 0).end(10, 0).build();
        var originalScopes = decodeOriginalScopes([
            scope
        ], names);
        assert.lengthOf(originalScopes, 1);
        var _originalScopes_ = originalScopes[0], root = _originalScopes_.root, scopeForItemIndex = _originalScopes_.scopeForItemIndex;
        assert.lengthOf(root.children, 2);
        assert.strictEqual(root.children[0].kind, 'function');
        assert.strictEqual(root.children[1].kind, 'function');
        assert.strictEqual(scopeForItemIndex.get(1), root.children[0]);
        assert.strictEqual(scopeForItemIndex.get(3), root.children[1]);
    });
    it('decodes scope names', function() {
        var names = [];
        var scope = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(0, 0, 'global').start(2, 5, 'class', 'FooClass').start(4, 10, 'function', 'fooMethod').end(6, 5).end(8, 0).end(40, 0).build();
        var originalScopes = decodeOriginalScopes([
            scope
        ], names);
        assert.lengthOf(originalScopes, 1);
        var root = originalScopes[0].root;
        assert.lengthOf(root.children, 1);
        assert.strictEqual(root.children[0].name, 'FooClass');
        assert.lengthOf(root.children[0].children, 1);
        assert.strictEqual(root.children[0].children[0].name, 'fooMethod');
    });
    it('decodes variable names', function() {
        var names = [];
        var scope = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(0, 0, 'global').start(2, 5, 'function', 'fooFunction', [
            'functionVarFoo'
        ]).start(4, 10, 'block', undefined, [
            'blockVarFoo',
            'blockVarBar'
        ]).end(6, 5).end(8, 0).end(40, 0).build();
        var originalScopes = decodeOriginalScopes([
            scope
        ], names);
        assert.lengthOf(originalScopes, 1);
        var root = originalScopes[0].root;
        assert.lengthOf(root.children, 1);
        assert.deepEqual(root.children[0].variables, [
            'functionVarFoo'
        ]);
        assert.lengthOf(root.children[0].children, 1);
        assert.deepEqual(root.children[0].children[0].variables, [
            'blockVarFoo',
            'blockVarBar'
        ]);
    });
});
describe('decodeGeneratedRanges', function() {
    it('returns an empty array for empty input', function() {
        assert.lengthOf(decodeGeneratedRanges('', [], []), 0);
    });
    it('throws for missing "end" item', function() {
        var brokenRanges = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder([]).start(0, 0).build();
        assert.throws(function() {
            return decodeGeneratedRanges(brokenRanges, [], []);
        }, /Malformed/);
    });
    it('decodes a single range', function() {
        var range = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder([]).start(0, 0).end(5, 0).build();
        var _decodeGeneratedRanges = _sliced_to_array(decodeGeneratedRanges(range, [], []), 1), generatedRange = _decodeGeneratedRanges[0];
        assert.deepEqual(generatedRange.start, {
            line: 0,
            column: 0
        });
        assert.deepEqual(generatedRange.end, {
            line: 5,
            column: 0
        });
    });
    it('decodes multiple top-level ranges', function() {
        var range = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder([]).start(0, 0).end(0, 10).start(0, 11).end(0, 20).build();
        var _decodeGeneratedRanges = _sliced_to_array(decodeGeneratedRanges(range, [], []), 2), generatedRange1 = _decodeGeneratedRanges[0], generatedRange2 = _decodeGeneratedRanges[1];
        assert.deepEqual(generatedRange1.start, {
            line: 0,
            column: 0
        });
        assert.deepEqual(generatedRange1.end, {
            line: 0,
            column: 10
        });
        assert.deepEqual(generatedRange2.start, {
            line: 0,
            column: 11
        });
        assert.deepEqual(generatedRange2.end, {
            line: 0,
            column: 20
        });
    });
    it('decodes a nested range on a single line', function() {
        var range = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder([]).start(0, 0).start(0, 5).end(0, 10).end(0, 15).build();
        var _decodeGeneratedRanges = _sliced_to_array(decodeGeneratedRanges(range, [], []), 1), generatedRange = _decodeGeneratedRanges[0];
        assert.deepEqual(generatedRange.start, {
            line: 0,
            column: 0
        });
        assert.deepEqual(generatedRange.end, {
            line: 0,
            column: 15
        });
        assert.lengthOf(generatedRange.children, 1);
        assert.deepEqual(generatedRange.children[0].start, {
            line: 0,
            column: 5
        });
        assert.deepEqual(generatedRange.children[0].end, {
            line: 0,
            column: 10
        });
    });
    it('decodes sibling ranges on a single line', function() {
        var range = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder([]).start(0, 0).start(0, 5).end(0, 10).start(0, 15).end(0, 20).end(0, 25).build();
        var _decodeGeneratedRanges = _sliced_to_array(decodeGeneratedRanges(range, [], []), 1), generatedRange = _decodeGeneratedRanges[0];
        assert.deepEqual(generatedRange.start, {
            line: 0,
            column: 0
        });
        assert.deepEqual(generatedRange.end, {
            line: 0,
            column: 25
        });
        assert.lengthOf(generatedRange.children, 2);
        assert.deepEqual(generatedRange.children[0].start, {
            line: 0,
            column: 5
        });
        assert.deepEqual(generatedRange.children[0].end, {
            line: 0,
            column: 10
        });
        assert.deepEqual(generatedRange.children[1].start, {
            line: 0,
            column: 15
        });
        assert.deepEqual(generatedRange.children[1].end, {
            line: 0,
            column: 20
        });
    });
    it('decodes nested and sibling ranges over multiple lines', function() {
        var range = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder([]).start(0, 0).start(5, 0).start(10, 8).end(15, 4).end(20, 0).start(25, 4).end(30, 0).end(35, 0).build();
        var _decodeGeneratedRanges = _sliced_to_array(decodeGeneratedRanges(range, [], []), 1), generatedRange = _decodeGeneratedRanges[0];
        assert.deepEqual(generatedRange.start, {
            line: 0,
            column: 0
        });
        assert.deepEqual(generatedRange.end, {
            line: 35,
            column: 0
        });
        assert.lengthOf(generatedRange.children, 2);
        assert.deepEqual(generatedRange.children[0].start, {
            line: 5,
            column: 0
        });
        assert.deepEqual(generatedRange.children[0].end, {
            line: 20,
            column: 0
        });
        assert.lengthOf(generatedRange.children[0].children, 1);
        assert.deepEqual(generatedRange.children[0].children[0].start, {
            line: 10,
            column: 8
        });
        assert.deepEqual(generatedRange.children[0].children[0].end, {
            line: 15,
            column: 4
        });
        assert.deepEqual(generatedRange.children[1].start, {
            line: 25,
            column: 4
        });
        assert.deepEqual(generatedRange.children[1].end, {
            line: 30,
            column: 0
        });
    });
    it('throws if the definition references has an invalid source index', function() {
        var names = [];
        var originEncodedScpoes = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(2, 0, 'function').end(5, 0).build();
        var originalScopes = decodeOriginalScopes([
            originEncodedScpoes
        ], names);
        var range = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder([]).start(0, 0, {
            definition: {
                sourceIdx: 1,
                scopeIdx: 0
            }
        }).end(0, 20).build();
        assert.throws(function() {
            return decodeGeneratedRanges(range, originalScopes, []);
        }, /Invalid source index/);
    });
    it('throws if the definition references has an invalid scope index', function() {
        var names = [];
        var originEncodedScpoes = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(2, 0, 'function').end(5, 0).build();
        var originalScopes = decodeOriginalScopes([
            originEncodedScpoes
        ], names);
        var range = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder([]).start(0, 0, {
            definition: {
                sourceIdx: 0,
                scopeIdx: 4
            }
        }).end(0, 20).build();
        assert.throws(function() {
            return decodeGeneratedRanges(range, originalScopes, []);
        }, /Invalid original scope index/);
    });
    it('decodes original scope (definition) references', function() {
        var names = [];
        var originEncodedScpoes = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(0, 0, 'global').start(5, 0, 'function').end(10, 0).end(20, 0).build();
        var originalScopes = decodeOriginalScopes([
            originEncodedScpoes
        ], names);
        var range = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder([]).start(0, 0, {
            definition: {
                sourceIdx: 0,
                scopeIdx: 0
            }
        }).start(0, 5, {
            definition: {
                sourceIdx: 0,
                scopeIdx: 1
            }
        }).end(0, 10).end(0, 20).build();
        var _decodeGeneratedRanges = _sliced_to_array(decodeGeneratedRanges(range, originalScopes, []), 1), generatedRange = _decodeGeneratedRanges[0];
        assert.strictEqual(generatedRange.originalScope, originalScopes[0].root, 'range does not reference global scope');
        assert.strictEqual(generatedRange.children[0].originalScope, originalScopes[0].root.children[0], 'range does not reference function scope');
    });
    it('decodes original scope (definition) references across multiple original sources', function() {
        var names = [];
        var originEncodedScopes1 = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(0, 0, 'global').start(5, 0, 'function').end(10, 0).end(20, 0).build();
        var originEncodedScopes2 = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(0, 0, 'global').start(5, 0, 'function').end(10, 0).end(20, 0).build();
        var originalScopes = decodeOriginalScopes([
            originEncodedScopes1,
            originEncodedScopes2
        ], names);
        var range = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder([]).start(0, 0).start(0, 0, {
            definition: {
                sourceIdx: 0,
                scopeIdx: 1
            }
        }).end(0, 5).start(0, 10, {
            definition: {
                sourceIdx: 1,
                scopeIdx: 1
            }
        }).end(0, 15).end(0, 16).build();
        var _decodeGeneratedRanges = _sliced_to_array(decodeGeneratedRanges(range, originalScopes, []), 1), generatedRange = _decodeGeneratedRanges[0];
        assert.strictEqual(generatedRange.children[0].originalScope, originalScopes[0].root.children[0]);
        assert.strictEqual(generatedRange.children[1].originalScope, originalScopes[1].root.children[0]);
    });
    it('throws if an inlined range\'s callsite references an invalid source index', function() {
        var names = [];
        var originEncodedScpoes = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(2, 0, 'function').end(5, 0).build();
        var originalScopes = decodeOriginalScopes([
            originEncodedScpoes
        ], names);
        var range = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder([]).start(0, 0, {
            callsite: {
                sourceIdx: 1,
                line: 0,
                column: 0
            }
        }).end(0, 20).build();
        assert.throws(function() {
            return decodeGeneratedRanges(range, originalScopes, []);
        }, /Invalid source index/);
    });
    it('decodes multiple callsite references in the same source file and the same line', function() {
        var names = [];
        var originEncodedScpoes = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(0, 0, 'global').start(1, 0, 'function').end(4, 0).end(10, 0).build();
        var originalScopes = decodeOriginalScopes([
            originEncodedScpoes
        ], names);
        var range = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder([]).start(0, 0, {
            definition: {
                sourceIdx: 0,
                scopeIdx: 0
            }
        }).start(0, 5, {
            definition: {
                sourceIdx: 0,
                scopeIdx: 1
            },
            callsite: {
                sourceIdx: 0,
                line: 6,
                column: 0
            }
        }).end(0, 7).start(0, 8, {
            definition: {
                sourceIdx: 0,
                scopeIdx: 1
            },
            callsite: {
                sourceIdx: 0,
                line: 8,
                column: 5
            }
        }).end(0, 12).start(0, 13, {
            definition: {
                sourceIdx: 0,
                scopeIdx: 1
            },
            callsite: {
                sourceIdx: 0,
                line: 8,
                column: 15
            }
        }).end(0, 18).end(0, 20).build();
        var _decodeGeneratedRanges = _sliced_to_array(decodeGeneratedRanges(range, originalScopes, []), 1), generatedRange = _decodeGeneratedRanges[0];
        assert.lengthOf(generatedRange.children, 3);
        assert.deepEqual(generatedRange.children[0].callsite, {
            sourceIndex: 0,
            line: 6,
            column: 0
        });
        assert.deepEqual(generatedRange.children[1].callsite, {
            sourceIndex: 0,
            line: 8,
            column: 5
        });
        assert.deepEqual(generatedRange.children[2].callsite, {
            sourceIndex: 0,
            line: 8,
            column: 15
        });
    });
    it('decodes multiple callsite refrences over multiple source files', function() {
        // A single function in the first file, is called in the first and second file. The bundler inlines both call-sites.
        var names = [];
        var originalEncodedScopes1 = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(0, 0, 'global').start(1, 0, 'function').end(4, 0).end(10, 0).build();
        var originalEncodedScopes2 = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(0, 0, 'global').end(10, 0).build();
        var originalScopes = decodeOriginalScopes([
            originalEncodedScopes1,
            originalEncodedScopes2
        ], names);
        var range = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder([]).start(0, 0) // Pseudo root range so we can have multiple global ranges. This will be fixed soon in the spec.
        .start(0, 0, {
            definition: {
                sourceIdx: 0,
                scopeIdx: 0
            }
        }).start(5, 0, {
            definition: {
                sourceIdx: 0,
                scopeIdx: 1
            },
            callsite: {
                sourceIdx: 0,
                line: 7,
                column: 5
            }
        }).end(8, 0).end(20, 0).start(21, 0, {
            definition: {
                sourceIdx: 1,
                scopeIdx: 0
            }
        }).start(22, 0, {
            definition: {
                sourceIdx: 0,
                scopeIdx: 1
            },
            callsite: {
                sourceIdx: 1,
                line: 3,
                column: 7
            }
        }).end(25, 0).end(40, 0).end(40, 0).build();
        var _decodeGeneratedRanges = _sliced_to_array(decodeGeneratedRanges(range, originalScopes, []), 1), generatedRange = _decodeGeneratedRanges[0];
        assert.lengthOf(generatedRange.children, 2);
        assert.lengthOf(generatedRange.children[0].children, 1);
        assert.deepEqual(generatedRange.children[0].children[0].callsite, {
            sourceIndex: 0,
            line: 7,
            column: 5
        });
        assert.lengthOf(generatedRange.children[1].children, 1);
        assert.deepEqual(generatedRange.children[1].children[0].callsite, {
            sourceIndex: 1,
            line: 3,
            column: 7
        });
    });
    it('decodes bindings that are available/unavailable for the full range', function() {
        var names = [];
        var originalEncodedScopes = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(0, 0, 'global', undefined, [
            'foo',
            'bar',
            'baz'
        ]).end(10, 0).build();
        var originalScopes = decodeOriginalScopes([
            originalEncodedScopes
        ], names);
        var range = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder(names).start(0, 0, {
            definition: {
                sourceIdx: 0,
                scopeIdx: 0
            },
            bindings: [
                'x',
                undefined,
                'y'
            ]
        }).end(0, 100).build();
        var _decodeGeneratedRanges = _sliced_to_array(decodeGeneratedRanges(range, originalScopes, names), 1), generatedRange = _decodeGeneratedRanges[0];
        assert.lengthOf(generatedRange.values, 3);
        assert.deepEqual(generatedRange.values, [
            'x',
            undefined,
            'y'
        ]);
    });
    it('decodes bindings that are available with different expressions throughout a range', function() {
        var names = [];
        var originalEncodedScopes = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names).start(0, 0, 'global', undefined, [
            'foo'
        ]).end(10, 0).build();
        var originalScopes = decodeOriginalScopes([
            originalEncodedScopes
        ], names);
        var range = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder(names).start(0, 0, {
            definition: {
                sourceIdx: 0,
                scopeIdx: 0
            },
            bindings: [
                [
                    {
                        line: 0,
                        column: 0,
                        name: 'x'
                    },
                    {
                        line: 0,
                        column: 30,
                        name: undefined
                    },
                    {
                        line: 0,
                        column: 60,
                        name: 'y'
                    }
                ]
            ]
        }).end(0, 100).build();
        var _decodeGeneratedRanges = _sliced_to_array(decodeGeneratedRanges(range, originalScopes, names), 1), generatedRange = _decodeGeneratedRanges[0];
        assert.lengthOf(generatedRange.values, 1);
        assert.deepEqual(generatedRange.values[0], [
            {
                from: {
                    line: 0,
                    column: 0
                },
                to: {
                    line: 0,
                    column: 30
                },
                value: 'x'
            },
            {
                from: {
                    line: 0,
                    column: 30
                },
                to: {
                    line: 0,
                    column: 60
                },
                value: undefined
            },
            {
                from: {
                    line: 0,
                    column: 60
                },
                to: {
                    line: 0,
                    column: 100
                },
                value: 'y'
            }
        ]);
    });
    it('decodes the "isScope" flag', function() {
        var range = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder([]).start(0, 0).start(5, 0, {
            isScope: true
        }).end(10, 0).start(20, 4, {
            isScope: false
        }).end(30, 0).end(40, 0).build();
        var _decodeGeneratedRanges = _sliced_to_array(decodeGeneratedRanges(range, [], []), 1), generatedRange = _decodeGeneratedRanges[0];
        assert.lengthOf(generatedRange.children, 2);
        assert.isTrue(generatedRange.children[0].isScope);
        assert.isFalse(generatedRange.children[1].isScope);
    });
}); //# sourceMappingURL=SourceMapScopes.test.js.map


}),

}]);