"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_formatter_worker_FormattedContentBuilder_test_js"], {
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
"./entrypoints/formatter_worker/FormattedContentBuilder.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatter_worker.js */ "./entrypoints/formatter_worker/formatter_worker.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('FormattedContentBuilder', function() {
    it('can add a token successfully', function() {
        var formattedContentBuilder = new _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormattedContentBuilder.FormattedContentBuilder('  ');
        formattedContentBuilder.addToken('Test Script', 0);
        assert.strictEqual(formattedContentBuilder.content(), 'Test Script');
    });
    it('returns the previous enforceSpaceBetweenWords value', function() {
        var formattedContentBuilder = new _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormattedContentBuilder.FormattedContentBuilder('  ');
        formattedContentBuilder.setEnforceSpaceBetweenWords(false);
        var result = formattedContentBuilder.setEnforceSpaceBetweenWords(true);
        assert.strictEqual(result, false);
    });
    it('should squash new lines by default', function() {
        var builder = new _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormattedContentBuilder.FormattedContentBuilder('  ');
        builder.addToken('Token 1', 0);
        builder.addNewLine();
        builder.addNewLine();
        builder.addToken('Token 2', 0);
        assert.strictEqual(builder.content(), 'Token 1\nToken 2');
    });
    it('should respect the noSquash parameter', function() {
        var builder = new _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormattedContentBuilder.FormattedContentBuilder('  ');
        builder.addToken('Token 1', 0);
        builder.addNewLine();
        builder.addNewLine(true);
        builder.addToken('Token 2', 0);
        assert.strictEqual(builder.content(), 'Token 1\n\nToken 2');
    });
    it('should avoid leading newlines', function() {
        var builder = new _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormattedContentBuilder.FormattedContentBuilder('  ');
        builder.addNewLine();
        builder.addToken('Token', 0);
        assert.strictEqual(builder.content(), 'Token');
    });
    it('not add more than one newline at the end', function() {
        var builder = new _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormattedContentBuilder.FormattedContentBuilder('  ');
        builder.addToken('Token', 0);
        builder.addNewLine();
        builder.addNewLine(true);
        assert.strictEqual(builder.content(), 'Token\n');
    });
    it('should not collapse hard spaces', function() {
        var builder = new _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormattedContentBuilder.FormattedContentBuilder('  ');
        builder.addToken('Token 1', 0);
        builder.addHardSpace();
        builder.addHardSpace();
        builder.addHardSpace();
        builder.addToken('Token 2', 0);
        assert.strictEqual(builder.content(), 'Token 1   Token 2', 'expected three spaces between the tokens');
    });
    it('should collapse soft spaces', function() {
        var builder = new _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormattedContentBuilder.FormattedContentBuilder('  ');
        builder.addToken('Token 1', 0);
        builder.addSoftSpace();
        builder.addSoftSpace();
        builder.addSoftSpace();
        builder.addToken('Token 2', 0);
        assert.strictEqual(builder.content(), 'Token 1 Token 2', 'expected a single space between the tokens');
    });
    it('should ignore a soft space after a hard space', function() {
        var builder = new _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormattedContentBuilder.FormattedContentBuilder('  ');
        builder.addToken('Token 1', 0);
        builder.addHardSpace();
        builder.addSoftSpace();
        builder.addToken('Token 2', 0);
        assert.strictEqual(builder.content(), 'Token 1 Token 2', 'expected a single space between the tokens');
    });
    it('should ignore a soft space before a hard space', function() {
        var builder = new _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormattedContentBuilder.FormattedContentBuilder('  ');
        builder.addToken('Token 1', 0);
        builder.addSoftSpace();
        builder.addHardSpace();
        builder.addToken('Token 2', 0);
        assert.strictEqual(builder.content(), 'Token 1 Token 2', 'expected a single space between the tokens');
    });
    it('should handle the nesting level correctly', function() {
        var builder = new _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormattedContentBuilder.FormattedContentBuilder('  ');
        builder.addToken('Token 1', 0);
        builder.addNewLine();
        builder.increaseNestingLevel();
        builder.addToken('Token 2', 0);
        builder.addNewLine();
        builder.increaseNestingLevel();
        builder.addToken('Token 3', 0);
        builder.addNewLine();
        builder.decreaseNestingLevel();
        builder.addToken('Token 4', 0);
        builder.addNewLine();
        builder.decreaseNestingLevel();
        builder.addToken('Token 5', 0);
        builder.addNewLine();
        builder.decreaseNestingLevel();
        builder.addToken('Token 6', 0);
        assert.strictEqual(builder.content(), 'Token 1\n  Token 2\n    Token 3\n  Token 4\nToken 5\nToken 6');
    });
    it('should allow mapping from unformatted source positions to formatted ones', function() {
        var builder = new _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormattedContentBuilder.FormattedContentBuilder('  ');
        builder.addToken('#main', 0);
        builder.addSoftSpace();
        builder.addToken('{', 5);
        builder.addNewLine();
        builder.increaseNestingLevel();
        builder.addToken('color', 6);
        builder.addToken(':', 11);
        builder.addSoftSpace();
        builder.addToken('red', 13);
        builder.addToken(';', 16);
        builder.addNewLine();
        builder.decreaseNestingLevel();
        builder.addToken('}', 17);
        builder.addNewLine();
        var _builder_mapping = builder.mapping, original = _builder_mapping.original, formatted = _builder_mapping.formatted;
        assert.deepEqual(original, [
            0,
            5,
            6,
            17
        ]);
        assert.deepEqual(formatted, [
            0,
            6,
            10,
            22
        ]);
        assert.strictEqual(builder.content(), '#main {\n  color: red;\n}\n');
    });
    it('should not cache the identation for more than 20 nesting levels', function() {
        var x = 0;
        var builder = new _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormattedContentBuilder.FormattedContentBuilder({
            toString: function toString() {
                return x++;
            }
        });
        for(var i = 0; i < 20; i++){
            builder.increaseNestingLevel();
        }
        builder.addToken('Token 1', 0);
        builder.addNewLine();
        builder.addToken('Token 2', 0);
        assert.strictEqual(builder.content(), 'Token 1\n012345678910111213141516171819Token 2');
        builder.addNewLine();
        builder.addToken('Token 3', 0);
        assert.strictEqual(builder.content(), 'Token 1\n012345678910111213141516171819Token 2\n012345678910111213141516171819Token 3');
        builder.increaseNestingLevel();
        builder.addNewLine();
        builder.addToken('Token 4', 0);
        assert.strictEqual(builder.content(), 'Token 1\n012345678910111213141516171819Token 2\n012345678910111213141516171819Token 3\n202122232425262728293031323334353637383940Token 4');
    });
}); //# sourceMappingURL=FormattedContentBuilder.test.js.map


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