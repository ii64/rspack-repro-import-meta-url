"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_formatter_worker_JSONFormatter_test_js"], {
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
"./entrypoints/formatter_worker/JSONFormatter.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatter_worker.js */ "./entrypoints/formatter_worker/formatter_worker.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function formatJSON(text) {
    return _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormatterWorker.format('application/json', text, '  ').content;
}
describe('JSONFormatter', function() {
    it('formats simple json objects correctly', function() {
        var formattedCode = formatJSON('{"people":[{"firstName":"Joe","lastName":"Jackson","age":28}]}');
        var expectedCode = '{\n  "people": [\n    {\n      "firstName": "Joe",\n      "lastName": "Jackson",\n      "age": 28\n    }\n  ]\n}';
        assert.strictEqual(formattedCode, expectedCode);
    });
    it('formats arrays correctly', function() {
        var formattedCode = formatJSON('{"people":["Joe", "Jane", "Jack"]}');
        var expectedCode = '{\n  "people": [\n    "Joe",\n    "Jane",\n    "Jack"\n  ]\n}';
        assert.strictEqual(formattedCode, expectedCode);
    });
    it('formats nested json objects correctly', function() {
        var formattedCode = formatJSON('{"people":[{"firstName":"Joe","siblings":{"sister": "Jane"}}]}');
        var expectedCode = '{\n  "people": [\n    {\n      "firstName": "Joe",\n      "siblings": {\n        "sister": "Jane"\n      }\n    }\n  ]\n}';
        assert.strictEqual(formattedCode, expectedCode);
    });
    it('does NOT create a new line break on empty objects or arrays', function() {
        var formattedCode = formatJSON('{"employees":[{"emptyObj":{}},[]]}');
        var expectedCode = '{\n  "employees": [\n    {\n      "emptyObj": {}\n    },\n    []\n  ]\n}';
        assert.strictEqual(formattedCode, expectedCode);
    });
    it('formats nesting levels correctly on more complex json files', function() {
        var formattedCode = formatJSON('{"ddd":0,"ind":2,"ty":3,"nm":"Null 2","parent":1,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"p":{"a":0,"k":[634,587.5,0],"ix":2},"s":{"a":1,"k":[{"i":{"x":[0.638,0.638,0.616],"y":[1,1,1]},"o":{"x":[0.811,0.811,0.153],"y":[0,0,0]},"n":["0p638_1_0p811_0","0p638_1_0p811_0","0p616_1_0p153_0"],"t":30,"s":[0,0,100],"e":[103,103,100]},{"t":46.0000018736184}],"ix":6}},"ao":0,"ip":0,"op":9890.00040282796,"st":0,"bm":0}');
        var expectedCode = '{\n  "ddd": 0,\n  "ind": 2,\n  "ty": 3,\n  "nm": "Null 2",\n  "parent": 1,\n  "sr": 1,\n  "ks": {\n    "o": {\n      "a": 0,\n      "k": 0,\n      "ix": 11\n    },\n    "p": {\n      "a": 0,\n      "k": [\n        634,\n        587.5,\n        0\n      ],\n      "ix": 2\n    },\n    "s": {\n      "a": 1,\n      "k": [\n        {\n          "i": {\n            "x": [\n              0.638,\n              0.638,\n              0.616\n            ],\n            "y": [\n              1,\n              1,\n              1\n            ]\n          },\n          "o": {\n            "x": [\n              0.811,\n              0.811,\n              0.153\n            ],\n            "y": [\n              0,\n              0,\n              0\n            ]\n          },\n          "n": [\n            "0p638_1_0p811_0",\n            "0p638_1_0p811_0",\n            "0p616_1_0p153_0"\n          ],\n          "t": 30,\n          "s": [\n            0,\n            0,\n            100\n          ],\n          "e": [\n            103,\n            103,\n            100\n          ]\n        },\n        {\n          "t": 46.0000018736184\n        }\n      ],\n      "ix": 6\n    }\n  },\n  "ao": 0,\n  "ip": 0,\n  "op": 9890.00040282796,\n  "st": 0,\n  "bm": 0\n}';
        assert.strictEqual(formattedCode, expectedCode);
    });
}); //# sourceMappingURL=JSONFormatter.test.js.map


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