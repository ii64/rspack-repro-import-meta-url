"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_formatter_worker_ScopeParser_test_js"], {
"./entrypoints/formatter_worker/CSSRuleParser.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSParserStates: function() { return CSSParserStates; },
  parseCSS: function() { return parseCSS; }
});
/* harmony import */var _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormatterWorker.js */ "./entrypoints/formatter_worker/FormatterWorker.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var CSSParserStates = {
    Initial: 'Initial',
    Selector: 'Selector',
    Style: 'Style',
    PropertyName: 'PropertyName',
    PropertyValue: 'PropertyValue',
    AtRule: 'AtRule'
};
function parseCSS(text, chunkCallback) {
    var chunkSize = 100000; // characters per data chunk
    var lines = text.split('\n');
    var rules = [];
    var processedChunkCharacters = 0;
    var state = CSSParserStates.Initial;
    var rule;
    var property;
    var UndefTokenType = new Set();
    var disabledRules = [];
    function disabledRulesCallback(chunk) {
        disabledRules = disabledRules.concat(chunk.chunk);
    }
    function cssTrim(tokenValue) {
        // https://drafts.csswg.org/css-syntax/#whitespace
        var re = /^(?:\r?\n|[\t\f\r ])+|(?:\r?\n|[\t\f\r ])+$/g;
        return tokenValue.replace(re, '');
    }
    function processToken(tokenValue, tokenTypes, column, newColumn) {
        var tokenType = tokenTypes ? new Set(tokenTypes.split(' ')) : UndefTokenType;
        switch(state){
            case CSSParserStates.Initial:
                if (tokenType.has('qualifier') || tokenType.has('builtin') || tokenType.has('tag')) {
                    rule = {
                        selectorText: tokenValue,
                        lineNumber: lineNumber,
                        columnNumber: column,
                        properties: []
                    };
                    state = CSSParserStates.Selector;
                } else if (tokenType.has('def')) {
                    rule = {
                        atRule: tokenValue,
                        lineNumber: lineNumber,
                        columnNumber: column
                    };
                    state = CSSParserStates.AtRule;
                }
                break;
            case CSSParserStates.Selector:
                if (tokenValue === '{' && tokenType === UndefTokenType) {
                    rule.selectorText = cssTrim(rule.selectorText);
                    rule.styleRange = createRange(lineNumber, newColumn);
                    state = CSSParserStates.Style;
                } else {
                    rule.selectorText += tokenValue;
                }
                break;
            case CSSParserStates.AtRule:
                if ((tokenValue === ';' || tokenValue === '{') && tokenType === UndefTokenType) {
                    rule.atRule = cssTrim(rule.atRule);
                    rules.push(rule);
                    state = CSSParserStates.Initial;
                } else {
                    rule.atRule += tokenValue;
                }
                break;
            case CSSParserStates.Style:
                if (tokenType.has('meta') || tokenType.has('property') || tokenType.has('variable-2')) {
                    property = {
                        name: tokenValue,
                        value: '',
                        range: createRange(lineNumber, column),
                        nameRange: createRange(lineNumber, column)
                    };
                    state = CSSParserStates.PropertyName;
                } else if (tokenValue === '}' && tokenType === UndefTokenType) {
                    rule.styleRange.endLine = lineNumber;
                    rule.styleRange.endColumn = column;
                    rules.push(rule);
                    state = CSSParserStates.Initial;
                } else if (tokenType.has('comment')) {
                    // The |processToken| is called per-line, so no token spans more than one line.
                    // Support only a one-line comments.
                    if (tokenValue.substring(0, 2) !== '/*' || tokenValue.substring(tokenValue.length - 2) !== '*/') {
                        break;
                    }
                    var uncommentedText = tokenValue.substring(2, tokenValue.length - 2);
                    var fakeRule = 'a{\n' + uncommentedText + '}';
                    disabledRules = [];
                    parseCSS(fakeRule, disabledRulesCallback);
                    if (disabledRules.length === 1 && disabledRules[0].properties.length === 1) {
                        var disabledProperty = disabledRules[0].properties[0];
                        disabledProperty.disabled = true;
                        disabledProperty.range = createRange(lineNumber, column);
                        disabledProperty.range.endColumn = newColumn;
                        var lineOffset = lineNumber - 1;
                        var columnOffset = column + 2;
                        disabledProperty.nameRange.startLine += lineOffset;
                        disabledProperty.nameRange.startColumn += columnOffset;
                        disabledProperty.nameRange.endLine += lineOffset;
                        disabledProperty.nameRange.endColumn += columnOffset;
                        disabledProperty.valueRange.startLine += lineOffset;
                        disabledProperty.valueRange.startColumn += columnOffset;
                        disabledProperty.valueRange.endLine += lineOffset;
                        disabledProperty.valueRange.endColumn += columnOffset;
                        rule.properties.push(disabledProperty);
                    }
                }
                break;
            case CSSParserStates.PropertyName:
                if (tokenValue === ':' && tokenType === UndefTokenType) {
                    property.name = property.name;
                    property.nameRange.endLine = lineNumber;
                    property.nameRange.endColumn = column;
                    property.valueRange = createRange(lineNumber, newColumn);
                    state = CSSParserStates.PropertyValue;
                } else if (tokenType.has('property')) {
                    property.name += tokenValue;
                }
                break;
            case CSSParserStates.PropertyValue:
                if ((tokenValue === ';' || tokenValue === '}') && tokenType === UndefTokenType) {
                    property.value = property.value;
                    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration
                    // @ts-expect-error
                    property.valueRange.endLine = lineNumber;
                    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration
                    // @ts-expect-error
                    property.valueRange.endColumn = column;
                    property.range.endLine = lineNumber;
                    property.range.endColumn = tokenValue === ';' ? newColumn : column;
                    rule.properties.push(property);
                    if (tokenValue === '}') {
                        rule.styleRange.endLine = lineNumber;
                        rule.styleRange.endColumn = column;
                        rules.push(rule);
                        state = CSSParserStates.Initial;
                    } else {
                        state = CSSParserStates.Style;
                    }
                } else if (!tokenType.has('comment')) {
                    property.value += tokenValue;
                }
                break;
            default:
                console.assert(false, 'Unknown CSS parser state.');
        }
        processedChunkCharacters += newColumn - column;
        if (processedChunkCharacters > chunkSize) {
            chunkCallback({
                chunk: rules,
                isLastChunk: false
            });
            rules = [];
            processedChunkCharacters = 0;
        }
    }
    var tokenizer = (0,_FormatterWorker_js__WEBPACK_IMPORTED_MODULE_0__.createTokenizer)('text/css');
    var lineNumber;
    for(lineNumber = 0; lineNumber < lines.length; ++lineNumber){
        var line = lines[lineNumber];
        tokenizer(line, processToken);
        processToken('\n', null, line.length, line.length + 1);
    }
    chunkCallback({
        chunk: rules,
        isLastChunk: true
    });
    function createRange(lineNumber, columnNumber) {
        return {
            startLine: lineNumber,
            startColumn: columnNumber,
            endLine: lineNumber,
            endColumn: columnNumber
        };
    }
} //# sourceMappingURL=CSSRuleParser.js.map


}),
"./entrypoints/formatter_worker/ScopeParser.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatter_worker.js */ "./entrypoints/formatter_worker/formatter_worker.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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

describe('ScopeParser', function() {
    describe('parseScopes', function() {
        var parseScopes = _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.ScopeParser.parseScopes;
        it('parses simple function', function() {
            var _innerScope_variables_get, _innerScope_variables;
            var scopes = parseScopes('function foo(a){}');
            var innerScope = scopes === null || scopes === void 0 ? void 0 : scopes.children[0];
            assert.strictEqual(innerScope === null || innerScope === void 0 ? void 0 : innerScope.start, 12);
            assert.strictEqual(innerScope === null || innerScope === void 0 ? void 0 : innerScope.end, 17);
            assert.deepEqual(innerScope === null || innerScope === void 0 ? void 0 : (_innerScope_variables = innerScope.variables) === null || _innerScope_variables === void 0 ? void 0 : (_innerScope_variables_get = _innerScope_variables.get('a')) === null || _innerScope_variables_get === void 0 ? void 0 : _innerScope_variables_get.uses.map(function(u) {
                return u.offset;
            }), [
                13
            ]);
        });
        it('parses arrow function', function() {
            var _innerScope_variables, _innerScope_variables_get, _innerScope_variables1;
            var scopes = parseScopes('let f = (a) => {}');
            assert.strictEqual(scopes === null || scopes === void 0 ? void 0 : scopes.children.length, 1);
            var innerScope = scopes === null || scopes === void 0 ? void 0 : scopes.children[0];
            assert.strictEqual(innerScope === null || innerScope === void 0 ? void 0 : innerScope.start, 8);
            assert.strictEqual(innerScope === null || innerScope === void 0 ? void 0 : innerScope.end, 17);
            assert.deepEqual(innerScope === null || innerScope === void 0 ? void 0 : (_innerScope_variables = innerScope.variables) === null || _innerScope_variables === void 0 ? void 0 : _innerScope_variables.size, 1);
            assert.deepEqual(innerScope === null || innerScope === void 0 ? void 0 : (_innerScope_variables1 = innerScope.variables) === null || _innerScope_variables1 === void 0 ? void 0 : (_innerScope_variables_get = _innerScope_variables1.get('a')) === null || _innerScope_variables_get === void 0 ? void 0 : _innerScope_variables_get.uses.map(function(u) {
                return u.offset;
            }), [
                9
            ]);
        });
        it('parses for loop', function() {
            var _innerScope_variables, _innerScope_variables_get, _innerScope_variables1;
            var scopes = parseScopes('for (let i = 0; i < 3; i++) console.log(i);');
            var innerScope = scopes === null || scopes === void 0 ? void 0 : scopes.children[0];
            assert.strictEqual(innerScope === null || innerScope === void 0 ? void 0 : innerScope.start, 0);
            assert.strictEqual(innerScope === null || innerScope === void 0 ? void 0 : innerScope.end, 43);
            assert.deepEqual(innerScope === null || innerScope === void 0 ? void 0 : (_innerScope_variables = innerScope.variables) === null || _innerScope_variables === void 0 ? void 0 : _innerScope_variables.size, 1);
            assert.deepEqual(innerScope === null || innerScope === void 0 ? void 0 : (_innerScope_variables1 = innerScope.variables) === null || _innerScope_variables1 === void 0 ? void 0 : (_innerScope_variables_get = _innerScope_variables1.get('i')) === null || _innerScope_variables_get === void 0 ? void 0 : _innerScope_variables_get.uses.map(function(u) {
                return u.offset;
            }), [
                9,
                16,
                23,
                40
            ]);
        });
        it('parses block scope', function() {
            var _scopes_variables, _scopes_variables_get, _scopes_variables1, _blockScope_variables, _blockScope_variables_get, _blockScope_variables1;
            var scopes = parseScopes('let x; { let y; }');
            assert.strictEqual(scopes === null || scopes === void 0 ? void 0 : scopes.start, 0);
            assert.strictEqual(scopes === null || scopes === void 0 ? void 0 : scopes.end, 17);
            assert.deepEqual(scopes === null || scopes === void 0 ? void 0 : (_scopes_variables = scopes.variables) === null || _scopes_variables === void 0 ? void 0 : _scopes_variables.size, 1);
            assert.deepEqual(scopes === null || scopes === void 0 ? void 0 : (_scopes_variables1 = scopes.variables) === null || _scopes_variables1 === void 0 ? void 0 : (_scopes_variables_get = _scopes_variables1.get('x')) === null || _scopes_variables_get === void 0 ? void 0 : _scopes_variables_get.uses.map(function(u) {
                return u.offset;
            }), [
                4
            ]);
            var blockScope = scopes === null || scopes === void 0 ? void 0 : scopes.children[0];
            assert.strictEqual(blockScope === null || blockScope === void 0 ? void 0 : blockScope.start, 7);
            assert.strictEqual(blockScope === null || blockScope === void 0 ? void 0 : blockScope.end, 17);
            assert.deepEqual(blockScope === null || blockScope === void 0 ? void 0 : (_blockScope_variables = blockScope.variables) === null || _blockScope_variables === void 0 ? void 0 : _blockScope_variables.size, 1);
            assert.deepEqual(blockScope === null || blockScope === void 0 ? void 0 : (_blockScope_variables1 = blockScope.variables) === null || _blockScope_variables1 === void 0 ? void 0 : (_blockScope_variables_get = _blockScope_variables1.get('y')) === null || _blockScope_variables_get === void 0 ? void 0 : _blockScope_variables_get.uses.map(function(u) {
                return u.offset;
            }), [
                13
            ]);
        });
        it('parses object destructuring', function() {
            var source = 'let {x: y} = {}';
            var scopes = parseScopes(source);
            assert.exists(scopes);
            assert.isEmpty(scopes.children);
            assert.strictEqual(scopes.variables.size, 1);
            var _scopes_variables = _sliced_to_array(scopes.variables, 1), _scopes_variables_ = _sliced_to_array(_scopes_variables[0], 2), name = _scopes_variables_[0], uses = _scopes_variables_[1].uses;
            assert.strictEqual(name, 'y');
            assert.lengthOf(uses, 1);
            assert.strictEqual(uses[0].offset, source.indexOf('y'));
        });
        it('parses object destructuring with default values', function() {
            var source = 'let {x: y = 42} = {}';
            var scopes = parseScopes(source);
            assert.exists(scopes);
            assert.isEmpty(scopes.children);
            assert.strictEqual(scopes.variables.size, 1);
            var _scopes_variables = _sliced_to_array(scopes.variables, 1), _scopes_variables_ = _sliced_to_array(_scopes_variables[0], 2), name = _scopes_variables_[0], uses = _scopes_variables_[1].uses;
            assert.strictEqual(name, 'y');
            assert.lengthOf(uses, 1);
            assert.strictEqual(uses[0].offset, source.indexOf('y'));
        });
        it('parses object destructuring with short-hand syntax', function() {
            var source = 'let {x} = {}';
            var scopes = parseScopes(source);
            assert.exists(scopes);
            assert.isEmpty(scopes.children);
            assert.strictEqual(scopes.variables.size, 1);
            var _scopes_variables = _sliced_to_array(scopes.variables, 1), _scopes_variables_ = _sliced_to_array(_scopes_variables[0], 2), name = _scopes_variables_[0], uses = _scopes_variables_[1].uses;
            assert.strictEqual(name, 'x');
            assert.lengthOf(uses, 1);
            assert.strictEqual(uses[0].offset, source.indexOf('x'));
        });
        it('parses object destructuring with short-hand syntax and default values', function() {
            var source = 'let {x = 42} = {}';
            var scopes = parseScopes(source);
            assert.exists(scopes);
            assert.isEmpty(scopes.children);
            assert.strictEqual(scopes.variables.size, 1);
            var _scopes_variables = _sliced_to_array(scopes.variables, 1), _scopes_variables_ = _sliced_to_array(_scopes_variables[0], 2), name = _scopes_variables_[0], uses = _scopes_variables_[1].uses;
            assert.strictEqual(name, 'x');
            assert.lengthOf(uses, 1);
            assert.strictEqual(uses[0].offset, source.indexOf('x'));
        });
        it('parses ES modules', function() {
            var source = 'import * as Foo from "./foo.js"; Foo.foo();';
            var scopes = parseScopes(source, 'module');
            assert.exists(scopes);
            assert.isEmpty(scopes.children);
            assert.strictEqual(scopes.variables.size, 1);
            var _scopes_variables = _sliced_to_array(scopes.variables, 1), _scopes_variables_ = _sliced_to_array(_scopes_variables[0], 2), name = _scopes_variables_[0], uses = _scopes_variables_[1].uses;
            assert.strictEqual(name, 'Foo');
            assert.lengthOf(uses, 1);
            var firstOccurence = source.indexOf('Foo');
            assert.strictEqual(uses[0].offset, source.indexOf('Foo', firstOccurence + 1));
        });
    });
}); //# sourceMappingURL=ScopeParser.test.js.map


}),
"./entrypoints/formatter_worker/formatter_worker.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSFormatter: function() { return /* reexport module object */ _CSSFormatter_js__WEBPACK_IMPORTED_MODULE_4__; },
  CSSRuleParser: function() { return /* reexport module object */ _CSSRuleParser_js__WEBPACK_IMPORTED_MODULE_5__; },
  FormattedContentBuilder: function() { return /* reexport module object */ _FormattedContentBuilder_js__WEBPACK_IMPORTED_MODULE_6__; },
  FormatterWorker: function() { return /* reexport module object */ _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_7__; },
  HTMLFormatter: function() { return /* reexport module object */ _HTMLFormatter_js__WEBPACK_IMPORTED_MODULE_8__; },
  JSONFormatter: function() { return /* reexport module object */ _JSONFormatter_js__WEBPACK_IMPORTED_MODULE_10__; },
  JavaScriptFormatter: function() { return /* reexport module object */ _JavaScriptFormatter_js__WEBPACK_IMPORTED_MODULE_9__; },
  ScopeParser: function() { return /* reexport module object */ _ScopeParser_js__WEBPACK_IMPORTED_MODULE_11__; },
  Substitute: function() { return /* reexport module object */ _Substitute_js__WEBPACK_IMPORTED_MODULE_12__; }
});
/* harmony import */var _third_party_codemirror_package_addon_runmode_runmode_standalone_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/codemirror/package/addon/runmode/runmode-standalone.mjs */ "./third_party/codemirror/package/addon/runmode/runmode-standalone.mjs");
/* harmony import */var _third_party_codemirror_package_mode_css_css_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../third_party/codemirror/package/mode/css/css.mjs */ "./third_party/codemirror/package/mode/css/css.mjs");
/* harmony import */var _third_party_codemirror_package_mode_xml_xml_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../third_party/codemirror/package/mode/xml/xml.mjs */ "./third_party/codemirror/package/mode/xml/xml.mjs");
/* harmony import */var _third_party_codemirror_package_mode_javascript_javascript_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../third_party/codemirror/package/mode/javascript/javascript.mjs */ "./third_party/codemirror/package/mode/javascript/javascript.mjs");
/* harmony import */var _CSSFormatter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSFormatter.js */ "./entrypoints/formatter_worker/CSSFormatter.js");
/* harmony import */var _CSSRuleParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSSRuleParser.js */ "./entrypoints/formatter_worker/CSSRuleParser.js");
/* harmony import */var _FormattedContentBuilder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormattedContentBuilder.js */ "./entrypoints/formatter_worker/FormattedContentBuilder.js");
/* harmony import */var _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormatterWorker.js */ "./entrypoints/formatter_worker/FormatterWorker.js");
/* harmony import */var _HTMLFormatter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HTMLFormatter.js */ "./entrypoints/formatter_worker/HTMLFormatter.js");
/* harmony import */var _JavaScriptFormatter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./JavaScriptFormatter.js */ "./entrypoints/formatter_worker/JavaScriptFormatter.js");
/* harmony import */var _JSONFormatter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./JSONFormatter.js */ "./entrypoints/formatter_worker/JSONFormatter.js");
/* harmony import */var _ScopeParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ScopeParser.js */ "./entrypoints/formatter_worker/ScopeParser.js");
/* harmony import */var _Substitute_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Substitute.js */ "./entrypoints/formatter_worker/Substitute.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.













 //# sourceMappingURL=formatter_worker.js.map


}),

}]);