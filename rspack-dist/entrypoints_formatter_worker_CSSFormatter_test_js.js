"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_formatter_worker_CSSFormatter_test_js"], {
"./entrypoints/formatter_worker/CSSFormatter.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatter_worker.js */ "./entrypoints/formatter_worker/formatter_worker.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function formatCSS(text) {
    return _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormatterWorker.format('text/css', text, '  ').content;
}
describe('CSSFormatter', function() {
    it('formats simple selector correctly', function() {
        var formattedCode = formatCSS('a{color:red;}');
        assert.strictEqual(formattedCode, "a {\n  color: red;\n}\n");
    });
    it('formats selector with quotes', function() {
        var formattedCode = formatCSS('a[href=\'/\']');
        assert.strictEqual(formattedCode, 'a[href=\'/\']');
    });
    it('formats compound selector', function() {
        var formattedCode = formatCSS('#content > a:hover');
        assert.strictEqual(formattedCode, '#content > a:hover');
    });
    it('formats color values', function() {
        var formattedCode = formatCSS('p { color: color; red: red; color: #000; color: #FFF; color: #123AbC; color: #faebfe; color:papayawhip; }');
        assert.strictEqual(formattedCode, "p {\n  color: color;\n  red: red;\n  color: #000;\n  color: #FFF;\n  color: #123AbC;\n  color: #faebfe;\n  color: papayawhip;\n}\n");
    });
    it('formats important declaration', function() {
        var formattedCode = formatCSS('p { margin: -10px !important; }');
        assert.strictEqual(formattedCode, "p {\n  margin: -10px !important;\n}\n");
    });
    it('formats with comments correctly', function() {
        var formattedCode = formatCSS('a { /* pre-comment */ color /* after name */ : /* before value */ red /* post-comment */ }');
        assert.strictEqual(formattedCode, "a {\n  /* pre-comment */\n  color /* after name */ : /* before value */ red /* post-comment */\n}\n");
    });
    it('formats media queries correctly', function() {
        var formattedCode = formatCSS('@media screen{  html{color:green;foo-property:bar-value}} body{background-color:black;} @media screen,print{body{line-height:1.2}}span{line-height:10px}');
        assert.strictEqual(formattedCode, "@media screen {\n  html {\n    color: green;\n    foo-property: bar-value\n  }\n}\n\nbody {\n  background-color: black;\n}\n\n@media screen,print {\n  body {\n    line-height: 1.2\n  }\n}\n\nspan {\n  line-height: 10px\n}\n");
    });
    it('formats styles with prepending new lines correctly', function() {
        var formattedCode = formatCSS("\n\ndiv { color: red; }");
        assert.strictEqual(formattedCode, "div {\n  color: red;\n}\n");
    });
    it('formats complex selectors correctly', function() {
        var formattedCode = formatCSS('a.b.c:hover,.d.e.f.g::before,h.i{color:red;}');
        assert.strictEqual(formattedCode, "a.b.c:hover,.d.e.f.g::before,h.i {\n  color: red;\n}\n");
    });
    it('formats font-face selectors correctly', function() {
        var formattedCode = formatCSS('@font-face{font-family:MyHelvetica;src:local(\'Helvetica Neue Bold\'),local(\'HelveticaNeue-Bold\'),url(MgOpenModernaBold.ttf);font-weight:bold;}div{color:red}');
        assert.strictEqual(formattedCode, "@font-face {\n  font-family: MyHelvetica;\n  src: local('Helvetica Neue Bold'),local('HelveticaNeue-Bold'),url(MgOpenModernaBold.ttf);\n  font-weight: bold;\n}\n\ndiv {\n  color: red\n}\n");
    });
    it('formats charset rule correctly', function() {
        var formattedCode = formatCSS('@charset \'iso-8859-15\';p{margin:0}');
        assert.strictEqual(formattedCode, "@charset 'iso-8859-15';p {\n  margin: 0\n}\n");
    });
    it('formats import rule correctly', function() {
        var formattedCode = formatCSS('@import url(\'bluish.css\') projection,tv;span{border:1px solid black}');
        assert.strictEqual(formattedCode, "@import url('bluish.css') projection,tv;span {\n  border: 1px solid black\n}\n");
    });
    it('formats import rule with media query correctly', function() {
        var formattedCode = formatCSS('@import url(\'landscape.css\') screen and (orientation:landscape);article{background:yellow}');
        assert.strictEqual(formattedCode, "@import url('landscape.css') screen and (orientation: landscape);\narticle {\n  background: yellow\n}\n");
    });
    it('formats import rule with media query correctly', function() {
        var formattedCode = formatCSS('p{animation-duration:3s;}@keyframes slidein{from{margin-left:100%;width:300%;}to{margin-left:0%;width:100%;}}p{animation-name:slidein}');
        assert.strictEqual(formattedCode, "p {\n  animation-duration: 3s;\n}\n\n@keyframes slidein {\n  from {\n    margin-left: 100%;\n    width: 300%;\n  }\n\n  to {\n    margin-left: 0%;\n    width: 100%;\n  }\n}\n\np {\n  animation-name: slidein\n}\n");
    });
    it('formats namespace rule correctly', function() {
        var formattedCode = formatCSS('@namespace svg url(http://www.w3.org/2000/svg);g{color:red}');
        assert.strictEqual(formattedCode, "@namespace svg url(http://www.w3.org/2000/svg);g {\n  color: red\n}\n");
    });
    it('formats page rule correctly', function() {
        var formattedCode = formatCSS('@page :first{margin:2in 3in;}span{color:blue}');
        assert.strictEqual(formattedCode, "@page :first {\n  margin: 2in 3in;\n}\n\nspan {\n  color: blue\n}\n");
    });
    it('formats supports rule correctly', function() {
        var formattedCode = formatCSS('@supports(--foo:green){body{color:green;}}#content{font-size:14px}');
        assert.strictEqual(formattedCode, "@supports(--foo: green) {\n  body {\n    color:green;\n  }\n}\n\n#content {\n  font-size: 14px\n}\n");
    });
    it('formats css-variable definitions and usages correctly', function() {
        var formattedCode = formatCSS('html { --foo: bar; --color: red; background-color: var(--foo); }');
        assert.strictEqual(formattedCode, "html {\n  --foo: bar;\n  --color: red;\n  background-color: var(--foo);\n}\n");
    });
}); //# sourceMappingURL=CSSFormatter.test.js.map


}),
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