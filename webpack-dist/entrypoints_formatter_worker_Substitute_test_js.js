"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_formatter_worker_Substitute_test_js"],{

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

/***/ "./entrypoints/formatter_worker/Substitute.test.js":
/*!*********************************************************!*\
  !*** ./entrypoints/formatter_worker/Substitute.test.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatter_worker.js */ "./entrypoints/formatter_worker/formatter_worker.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const mapping = new Map([
    ['varX', 'x'],
    ['varY', 'y'],
    ['varZ', 'z'],
    ['this', 'this_1'],
    ['rename_to_this', 'this'],
    ['rename_to_arguments', 'arguments'],
    ['varQ', null],
]);
function substitute(expression) {
    return _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.Substitute.substituteExpression(expression, mapping);
}
describe('Substitute', () => {
    it('Preserves unrelated variable', () => {
        assert.strictEqual(substitute('x'), 'x');
    });
    it('Substitutes single variable', () => {
        assert.strictEqual(substitute('varY'), 'y');
    });
    it('Substitutes await', () => {
        assert.strictEqual(substitute('await varX'), 'await x');
    });
    it('Substitutes array elements', () => {
        assert.strictEqual(substitute('[0, varY, varZ]'), '[0, y, z]');
        assert.strictEqual(substitute('[0, varY, ...varZ]'), '[0, y, ...z]');
    });
    it('Substitutes binary expressions, assignments, sequences', () => {
        assert.strictEqual(substitute('varX + varY'), 'x + y');
        assert.strictEqual(substitute('varX, varY'), 'x, y');
        assert.strictEqual(substitute('varX = varZ'), 'x = z');
        assert.strictEqual(substitute('varX += varZ'), 'x += z');
    });
    it('Substitutes arrow functions', () => {
        assert.strictEqual(substitute('(a) => a + varX'), '(a) => a + x');
        assert.strictEqual(substitute('(varX) => a + varX'), '(varX) => a + varX');
        // Capture avoiding substitution.
        assert.strictEqual(substitute('(x) => x + varX'), '(x_1) => x_1 + x');
        assert.strictEqual(substitute('(x) => (x) => x + varX'), '(x_2) => (x_1) => x_1 + x');
        assert.strictEqual(substitute('(x) => (x_1) => x + varX'), '(x_2) => (x_1) => x_2 + x');
    });
    it('Substitutes in blocks', () => {
        assert.strictEqual(substitute('{console.log(varY)}'), '{console.log(y)}');
        assert.strictEqual(substitute('{var y; console.log(varY + y)}'), '{var y_1; console.log(y + y_1)}');
        // Technically it would be correct to rename all instances of y to y_1,
        // but let us check we treat the let variables independently.
        assert.strictEqual(substitute('var y; {let y; console.log(varY + y)}; y'), 'var y_2; {let y_1; console.log(y + y_1)}; y_2');
        // Var hoisting out of blocks.
        assert.strictEqual(substitute('{var y; console.log(varY + y)}; y'), '{var y_1; console.log(y + y_1)}; y_1');
        assert.strictEqual(substitute('{let varY; console.log(varX + varY)}; varY'), '{let varY; console.log(x + varY)}; y');
        assert.strictEqual(substitute('{const varY = 1; console.log(varX + varY)}; varY'), '{const varY = 1; console.log(x + varY)}; y');
        assert.strictEqual(substitute('{var varY; console.log(varX + varY)}; varY'), '{var varY; console.log(x + varY)}; varY');
    });
    it('Substitutes in member expressions', () => {
        assert.strictEqual(substitute('varY.varX?.varZ'), 'y.varX?.varZ');
    });
    it('Substitutes in conditionals', () => {
        assert.strictEqual(substitute('varX ? varY : varZ'), 'x ? y : z');
        assert.strictEqual(substitute('if (varX) varY; else varZ;'), 'if (x) y; else z;');
    });
    it('Substitutes in loops', () => {
        assert.strictEqual(substitute('do { console.log(varX) } while (varY);'), 'do { console.log(x) } while (y);');
        assert.strictEqual(substitute('for (varX in varY) console.log(varZ);'), 'for (x in y) console.log(z);');
        assert.strictEqual(substitute('for (let varX in varY) console.log(varZ + varX);'), 'for (let varX in y) console.log(z + varX);');
        assert.strictEqual(substitute('for (let varX of varY) console.log(varZ + varX);'), 'for (let varX of y) console.log(z + varX);');
        assert.strictEqual(substitute('for (let x of varY) console.log(x + varX);'), 'for (let x_1 of y) console.log(x_1 + x);');
        assert.strictEqual(substitute('for (varX = 1; varX < 100; varX++) console.log(varX);'), 'for (x = 1; x < 100; x++) console.log(x);');
        assert.strictEqual(substitute('for (var varX = 1; varX < 100; varX++) console.log(varX);'), 'for (var varX = 1; varX < 100; varX++) console.log(varX);');
        assert.strictEqual(substitute('while (varX) { varY; }'), 'while (x) { y; }');
    });
    it('Substitutes in functions', () => {
        assert.strictEqual(substitute('function f(a) { a + varX; }'), 'function f(a) { a + x; }');
        assert.strictEqual(substitute('function f(varX) { a + varX; }'), 'function f(varX) { a + varX; }');
        // Capture avoiding substitution.
        assert.strictEqual(substitute('function f(x) { return (x_1) => x + varX; }'), 'function f(x_2) { return (x_1) => x_2 + x; }');
        assert.strictEqual(substitute('function f(...varX) { varX[0] }'), 'function f(...varX) { varX[0] }');
        assert.strictEqual(substitute('function f(...x) { varX[0] }'), 'function f(...x_1) { x[0] }');
        assert.strictEqual(substitute('function f() { this; }; this'), 'function f() { this; }; this_1');
    });
    it('Substitutes in object literals', () => {
        assert.strictEqual(substitute('{ varX: varX }'), '{ varX: x }');
        assert.strictEqual(substitute('({ [varY]: varX })'), '({ [y]: x })');
        assert.strictEqual(substitute('({ ...varX })'), '({ ...x })');
        assert.strictEqual(substitute('({ varX })'), '({ varX: x })');
    });
    it('Substitutes in switch', () => {
        assert.strictEqual(substitute('switch (varX) { case varY: varZ; }'), 'switch (x) { case y: z; }');
        assert.strictEqual(substitute('switch (varY) { case varZ: varX; case 2: let x = 1; }'), 'switch (y) { case z: x; case 2: let x_1 = 1; }');
    });
    it('Substitutes in generators', () => {
        assert.strictEqual(substitute('function* f(x) { yield varX + x; }'), 'function* f(x_1) { yield x + x_1; }');
    });
    it('Substitutes in template literals', () => {
        assert.strictEqual(substitute('`${varX}`'), '`${x}`');
        assert.strictEqual(substitute('varY`${varX} varZ`'), 'y`${x} varZ`');
    });
    it('Substitutes in patterns', () => {
        assert.strictEqual(substitute('[varX, varY] = [varZ, 1]'), '[x, y] = [z, 1]');
        assert.strictEqual(substitute('[varX[varY]] = [3]'), '[x[y]] = [3]');
        assert.strictEqual(substitute('[varX.varY] = [3]'), '[x.varY] = [3]');
        assert.strictEqual(substitute('({varX: varZ} = {varX: 3})'), '({varX: z} = {varX: 3})');
        assert.strictEqual(substitute('[varX = varY] = []'), '[x = y] = []');
        assert.strictEqual(substitute('({varX: varZ.x} = {varX: 3})'), '({varX: z.x} = {varX: 3})');
        assert.strictEqual(substitute('let [varX, varY] = [varZ, 1]; varX'), 'let [varX, varY] = [z, 1]; varX');
        assert.strictEqual(substitute('let [varX = varY] = []'), 'let [varX = y] = []');
        assert.strictEqual(substitute('var {varX: varZ} = {varX: 3}; varZ'), 'var {varX: varZ} = {varX: 3}; varZ');
        // Avoid captures.
        assert.strictEqual(substitute('let [y, x] = [varX, varY]; x'), 'let [y_1, x_1] = [x, y]; x_1');
        assert.strictEqual(substitute('var {varX: x} = {varX}; x'), 'var {varX: x_1} = {varX: x}; x_1');
    });
    it('Does not substitute in strings', () => {
        assert.strictEqual(substitute('\'varX\''), '\'varX\'');
        assert.strictEqual(substitute('\"varX\"'), '\"varX\"');
        assert.strictEqual(substitute('\`varX\`'), '\`varX\`');
    });
    it('Does not substitute in comments', () => {
        assert.strictEqual(substitute('/* varX */'), '/* varX */');
        assert.strictEqual(substitute('// varX'), '// varX');
    });
    it('Throws on to-be-captured "this" and "arguments" bound by a function', () => {
        assert.throws(() => substitute('function f() { return rename_to_this; }'), 'Cannot avoid capture of \'this\'');
        assert.throws(() => substitute('function f() { return rename_to_arguments; }'), 'Cannot avoid capture of \'arguments\'');
    });
    it('Throws on parse error', () => {
        assert.throws(() => substitute('('), SyntaxError);
    });
    it('Throws if the renamed variable is unavailable', () => {
        assert.throws(() => substitute('varQ'), Error);
    });
});
//# sourceMappingURL=Substitute.test.js.map

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