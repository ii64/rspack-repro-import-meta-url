"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_formatter_worker_ScopeParser_test_js"],{

/***/ "./entrypoints/formatter_worker/CSSRuleParser.js":
/*!*******************************************************!*\
  !*** ./entrypoints/formatter_worker/CSSRuleParser.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSParserStates: () => (/* binding */ CSSParserStates),
/* harmony export */   parseCSS: () => (/* binding */ parseCSS)
/* harmony export */ });
/* harmony import */ var _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormatterWorker.js */ "./entrypoints/formatter_worker/FormatterWorker.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const CSSParserStates = {
    Initial: 'Initial',
    Selector: 'Selector',
    Style: 'Style',
    PropertyName: 'PropertyName',
    PropertyValue: 'PropertyValue',
    AtRule: 'AtRule',
};
function parseCSS(text, chunkCallback) {
    const chunkSize = 100000; // characters per data chunk
    const lines = text.split('\n');
    let rules = [];
    let processedChunkCharacters = 0;
    let state = CSSParserStates.Initial;
    let rule;
    let property;
    const UndefTokenType = new Set();
    let disabledRules = [];
    function disabledRulesCallback(chunk) {
        disabledRules = disabledRules.concat(chunk.chunk);
    }
    function cssTrim(tokenValue) {
        // https://drafts.csswg.org/css-syntax/#whitespace
        const re = /^(?:\r?\n|[\t\f\r ])+|(?:\r?\n|[\t\f\r ])+$/g;
        return tokenValue.replace(re, '');
    }
    function processToken(tokenValue, tokenTypes, column, newColumn) {
        const tokenType = tokenTypes ? new Set(tokenTypes.split(' ')) : UndefTokenType;
        switch (state) {
            case CSSParserStates.Initial:
                if (tokenType.has('qualifier') || tokenType.has('builtin') || tokenType.has('tag')) {
                    rule = {
                        selectorText: tokenValue,
                        lineNumber: lineNumber,
                        columnNumber: column,
                        properties: [],
                    };
                    state = CSSParserStates.Selector;
                }
                else if (tokenType.has('def')) {
                    rule = {
                        atRule: tokenValue,
                        lineNumber: lineNumber,
                        columnNumber: column,
                    };
                    state = CSSParserStates.AtRule;
                }
                break;
            case CSSParserStates.Selector:
                if (tokenValue === '{' && tokenType === UndefTokenType) {
                    rule.selectorText = cssTrim(rule.selectorText);
                    rule.styleRange = createRange(lineNumber, newColumn);
                    state = CSSParserStates.Style;
                }
                else {
                    rule.selectorText += tokenValue;
                }
                break;
            case CSSParserStates.AtRule:
                if ((tokenValue === ';' || tokenValue === '{') && tokenType === UndefTokenType) {
                    rule.atRule = cssTrim(rule.atRule);
                    rules.push(rule);
                    state = CSSParserStates.Initial;
                }
                else {
                    rule.atRule += tokenValue;
                }
                break;
            case CSSParserStates.Style:
                if (tokenType.has('meta') || tokenType.has('property') || tokenType.has('variable-2')) {
                    property = {
                        name: tokenValue,
                        value: '',
                        range: createRange(lineNumber, column),
                        nameRange: createRange(lineNumber, column),
                    };
                    state = CSSParserStates.PropertyName;
                }
                else if (tokenValue === '}' && tokenType === UndefTokenType) {
                    rule.styleRange.endLine = lineNumber;
                    rule.styleRange.endColumn = column;
                    rules.push(rule);
                    state = CSSParserStates.Initial;
                }
                else if (tokenType.has('comment')) {
                    // The |processToken| is called per-line, so no token spans more than one line.
                    // Support only a one-line comments.
                    if (tokenValue.substring(0, 2) !== '/*' || tokenValue.substring(tokenValue.length - 2) !== '*/') {
                        break;
                    }
                    const uncommentedText = tokenValue.substring(2, tokenValue.length - 2);
                    const fakeRule = 'a{\n' + uncommentedText + '}';
                    disabledRules = [];
                    parseCSS(fakeRule, disabledRulesCallback);
                    if (disabledRules.length === 1 && disabledRules[0].properties.length === 1) {
                        const disabledProperty = disabledRules[0].properties[0];
                        disabledProperty.disabled = true;
                        disabledProperty.range = createRange(lineNumber, column);
                        disabledProperty.range.endColumn = newColumn;
                        const lineOffset = lineNumber - 1;
                        const columnOffset = column + 2;
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
                }
                else if (tokenType.has('property')) {
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
                    }
                    else {
                        state = CSSParserStates.Style;
                    }
                }
                else if (!tokenType.has('comment')) {
                    property.value += tokenValue;
                }
                break;
            default:
                console.assert(false, 'Unknown CSS parser state.');
        }
        processedChunkCharacters += newColumn - column;
        if (processedChunkCharacters > chunkSize) {
            chunkCallback({ chunk: rules, isLastChunk: false });
            rules = [];
            processedChunkCharacters = 0;
        }
    }
    const tokenizer = (0,_FormatterWorker_js__WEBPACK_IMPORTED_MODULE_0__.createTokenizer)('text/css');
    let lineNumber;
    for (lineNumber = 0; lineNumber < lines.length; ++lineNumber) {
        const line = lines[lineNumber];
        tokenizer(line, processToken);
        processToken('\n', null, line.length, line.length + 1);
    }
    chunkCallback({ chunk: rules, isLastChunk: true });
    function createRange(lineNumber, columnNumber) {
        return { startLine: lineNumber, startColumn: columnNumber, endLine: lineNumber, endColumn: columnNumber };
    }
}
//# sourceMappingURL=CSSRuleParser.js.map

/***/ }),

/***/ "./entrypoints/formatter_worker/ScopeParser.test.js":
/*!**********************************************************!*\
  !*** ./entrypoints/formatter_worker/ScopeParser.test.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatter_worker.js */ "./entrypoints/formatter_worker/formatter_worker.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('ScopeParser', () => {
    describe('parseScopes', () => {
        const { parseScopes } = _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.ScopeParser;
        it('parses simple function', () => {
            const scopes = parseScopes('function foo(a){}');
            const innerScope = scopes?.children[0];
            assert.strictEqual(innerScope?.start, 12);
            assert.strictEqual(innerScope?.end, 17);
            assert.deepEqual(innerScope?.variables?.get('a')?.uses.map(u => u.offset), [13]);
        });
        it('parses arrow function', () => {
            const scopes = parseScopes('let f = (a) => {}');
            assert.strictEqual(scopes?.children.length, 1);
            const innerScope = scopes?.children[0];
            assert.strictEqual(innerScope?.start, 8);
            assert.strictEqual(innerScope?.end, 17);
            assert.deepEqual(innerScope?.variables?.size, 1);
            assert.deepEqual(innerScope?.variables?.get('a')?.uses.map(u => u.offset), [9]);
        });
        it('parses for loop', () => {
            const scopes = parseScopes('for (let i = 0; i < 3; i++) console.log(i);');
            const innerScope = scopes?.children[0];
            assert.strictEqual(innerScope?.start, 0);
            assert.strictEqual(innerScope?.end, 43);
            assert.deepEqual(innerScope?.variables?.size, 1);
            assert.deepEqual(innerScope?.variables?.get('i')?.uses.map(u => u.offset), [9, 16, 23, 40]);
        });
        it('parses block scope', () => {
            const scopes = parseScopes('let x; { let y; }');
            assert.strictEqual(scopes?.start, 0);
            assert.strictEqual(scopes?.end, 17);
            assert.deepEqual(scopes?.variables?.size, 1);
            assert.deepEqual(scopes?.variables?.get('x')?.uses.map(u => u.offset), [4]);
            const blockScope = scopes?.children[0];
            assert.strictEqual(blockScope?.start, 7);
            assert.strictEqual(blockScope?.end, 17);
            assert.deepEqual(blockScope?.variables?.size, 1);
            assert.deepEqual(blockScope?.variables?.get('y')?.uses.map(u => u.offset), [13]);
        });
        it('parses object destructuring', () => {
            const source = 'let {x: y} = {}';
            const scopes = parseScopes(source);
            assert.exists(scopes);
            assert.isEmpty(scopes.children);
            assert.strictEqual(scopes.variables.size, 1);
            const [[name, { uses }]] = scopes.variables;
            assert.strictEqual(name, 'y');
            assert.lengthOf(uses, 1);
            assert.strictEqual(uses[0].offset, source.indexOf('y'));
        });
        it('parses object destructuring with default values', () => {
            const source = 'let {x: y = 42} = {}';
            const scopes = parseScopes(source);
            assert.exists(scopes);
            assert.isEmpty(scopes.children);
            assert.strictEqual(scopes.variables.size, 1);
            const [[name, { uses }]] = scopes.variables;
            assert.strictEqual(name, 'y');
            assert.lengthOf(uses, 1);
            assert.strictEqual(uses[0].offset, source.indexOf('y'));
        });
        it('parses object destructuring with short-hand syntax', () => {
            const source = 'let {x} = {}';
            const scopes = parseScopes(source);
            assert.exists(scopes);
            assert.isEmpty(scopes.children);
            assert.strictEqual(scopes.variables.size, 1);
            const [[name, { uses }]] = scopes.variables;
            assert.strictEqual(name, 'x');
            assert.lengthOf(uses, 1);
            assert.strictEqual(uses[0].offset, source.indexOf('x'));
        });
        it('parses object destructuring with short-hand syntax and default values', () => {
            const source = 'let {x = 42} = {}';
            const scopes = parseScopes(source);
            assert.exists(scopes);
            assert.isEmpty(scopes.children);
            assert.strictEqual(scopes.variables.size, 1);
            const [[name, { uses }]] = scopes.variables;
            assert.strictEqual(name, 'x');
            assert.lengthOf(uses, 1);
            assert.strictEqual(uses[0].offset, source.indexOf('x'));
        });
        it('parses ES modules', () => {
            const source = 'import * as Foo from "./foo.js"; Foo.foo();';
            const scopes = parseScopes(source, 'module');
            assert.exists(scopes);
            assert.isEmpty(scopes.children);
            assert.strictEqual(scopes.variables.size, 1);
            const [[name, { uses }]] = scopes.variables;
            assert.strictEqual(name, 'Foo');
            assert.lengthOf(uses, 1);
            const firstOccurence = source.indexOf('Foo');
            assert.strictEqual(uses[0].offset, source.indexOf('Foo', firstOccurence + 1));
        });
    });
});
//# sourceMappingURL=ScopeParser.test.js.map

/***/ }),

/***/ "./entrypoints/formatter_worker/formatter_worker.js":
/*!**********************************************************!*\
  !*** ./entrypoints/formatter_worker/formatter_worker.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSFormatter: () => (/* reexport module object */ _CSSFormatter_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   CSSRuleParser: () => (/* reexport module object */ _CSSRuleParser_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   FormattedContentBuilder: () => (/* reexport module object */ _FormattedContentBuilder_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   FormatterWorker: () => (/* reexport module object */ _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   HTMLFormatter: () => (/* reexport module object */ _HTMLFormatter_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   JSONFormatter: () => (/* reexport module object */ _JSONFormatter_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   JavaScriptFormatter: () => (/* reexport module object */ _JavaScriptFormatter_js__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   ScopeParser: () => (/* reexport module object */ _ScopeParser_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   Substitute: () => (/* reexport module object */ _Substitute_js__WEBPACK_IMPORTED_MODULE_12__)
/* harmony export */ });
/* harmony import */ var _third_party_codemirror_package_addon_runmode_runmode_standalone_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/codemirror/package/addon/runmode/runmode-standalone.mjs */ "./third_party/codemirror/package/addon/runmode/runmode-standalone.mjs");
/* harmony import */ var _third_party_codemirror_package_mode_css_css_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../third_party/codemirror/package/mode/css/css.mjs */ "./third_party/codemirror/package/mode/css/css.mjs");
/* harmony import */ var _third_party_codemirror_package_mode_xml_xml_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../third_party/codemirror/package/mode/xml/xml.mjs */ "./third_party/codemirror/package/mode/xml/xml.mjs");
/* harmony import */ var _third_party_codemirror_package_mode_javascript_javascript_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../third_party/codemirror/package/mode/javascript/javascript.mjs */ "./third_party/codemirror/package/mode/javascript/javascript.mjs");
/* harmony import */ var _CSSFormatter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSFormatter.js */ "./entrypoints/formatter_worker/CSSFormatter.js");
/* harmony import */ var _CSSRuleParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSSRuleParser.js */ "./entrypoints/formatter_worker/CSSRuleParser.js");
/* harmony import */ var _FormattedContentBuilder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormattedContentBuilder.js */ "./entrypoints/formatter_worker/FormattedContentBuilder.js");
/* harmony import */ var _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormatterWorker.js */ "./entrypoints/formatter_worker/FormatterWorker.js");
/* harmony import */ var _HTMLFormatter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HTMLFormatter.js */ "./entrypoints/formatter_worker/HTMLFormatter.js");
/* harmony import */ var _JavaScriptFormatter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./JavaScriptFormatter.js */ "./entrypoints/formatter_worker/JavaScriptFormatter.js");
/* harmony import */ var _JSONFormatter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./JSONFormatter.js */ "./entrypoints/formatter_worker/JSONFormatter.js");
/* harmony import */ var _ScopeParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ScopeParser.js */ "./entrypoints/formatter_worker/ScopeParser.js");
/* harmony import */ var _Substitute_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Substitute.js */ "./entrypoints/formatter_worker/Substitute.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.














//# sourceMappingURL=formatter_worker.js.map

/***/ })

}]);