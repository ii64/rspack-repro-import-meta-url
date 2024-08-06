"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_formatter_worker_HTMLFormatter_test_js"],{

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

/***/ "./entrypoints/formatter_worker/HTMLFormatter.test.js":
/*!************************************************************!*\
  !*** ./entrypoints/formatter_worker/HTMLFormatter.test.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatter_worker.js */ "./entrypoints/formatter_worker/formatter_worker.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function formatHTML(text) {
    return _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormatterWorker.format('text/html', text, '  ').content;
}
describe('HTMLFormatter', () => {
    it('formats simple HTML correctly', () => {
        const formattedCode = formatHTML('<html><head><title>test</title></head></html>');
        assert.strictEqual(formattedCode, `<html>
  <head>
    <title>test</title>
  </head>
</html>
`);
    });
    it('formats self-closing tags correctly', () => {
        const formattedCode = formatHTML('<html><head><meta></head><img><hr/></html>');
        assert.strictEqual(formattedCode, `<html>
  <head>
    <meta>
  </head>
  <img>
  <hr/>
</html>
`);
    });
    it('formats incorrect self-closing tags', () => {
        const formattedCode = formatHTML('<head><meta><meta></meta><br/></br><link></link><title>test</title></head>');
        assert.strictEqual(formattedCode, `<head>
  <meta>
  <meta></meta>
  <br/></br>
  <link></link>
  <title>test</title>
</head>
`);
    });
    it('formats attributes correctly', () => {
        const formattedCode = formatHTML('<body><canvas width=100 height=100 data-bad-attr=\'</canvas>\'></canvas></body>');
        assert.strictEqual(formattedCode, `<body>
  <canvas width=100 height=100 data-bad-attr=\'</canvas>\'></canvas>
</body>
`);
    });
    it('formats custom elements correctly', () => {
        const formattedCode = formatHTML('<body><custom-time year=2016 day=1 month=1><div>minutes/seconds</div></custom-time></body>');
        assert.strictEqual(formattedCode, `<body>
  <custom-time year=2016 day=1 month=1>
    <div>minutes/seconds</div>
  </custom-time>
</body>
`);
    });
    it('formats doctype correctly', () => {
        const formattedCode = formatHTML('<!DOCTYPE HTML><body>hello, world</body>');
        assert.strictEqual(formattedCode, `<!DOCTYPE HTML>
<body>hello, world</body>
`);
    });
    it('formats comments correctly', () => {
        const formattedCode = formatHTML('<!-- comment 1 --><html><!-- comment 2--><meta/><body><!-- comment 3--><a>link</a></body></html>');
        assert.strictEqual(formattedCode, `<!-- comment 1 -->
<html>
  <!-- comment 2-->
  <meta/>
  <body>
    <!-- comment 3-->
    <a>link</a>
  </body>
</html>
`);
    });
    it('formats non-javascript script tag correctly', () => {
        const formattedCode = formatHTML('<div><script type=\'text/K\'>2_&{&/x!/:2_!x}\'!R<\/script></div>');
        assert.strictEqual(formattedCode, `<div>
  <script type=\'text/K\'>
    2_&{&/x!/:2_!x}\'!R
  <\/script>
</div>
`);
    });
    it('formats lists correctly', () => {
        const formattedCode = formatHTML('<ul><li>foo<li> hello <b>world</b>!<li> hello <b>world</b> <b>i\'m here</b><li>bar<li>baz<li>hello <b>world</b><li>another</ul>');
        assert.strictEqual(formattedCode, `<ul>
  <li>foo
  <li>
    hello <b>world</b>
    !
  <li>
    hello <b>world</b>
    <b>i'm here</b>
  <li>bar
  <li>baz
  <li>
    hello <b>world</b>
  <li>another
</ul>
`);
    });
    it('formats automatically closing tags correctly', () => {
        const formattedCode = formatHTML('<a>aaaa<b>bbbb1<c>cccc<d>dddd</c>bbbb2</a>');
        assert.strictEqual(formattedCode, `<a>
  aaaa
  <b>
    bbbb1
    <c>
      cccc<d>dddd
    </c>
    bbbb2
</a>
`);
    });
    it('formats a comment after a link correctly', () => {
        const formattedCode = formatHTML('<link href=\'a/b/c.css\' rel=\'stylesheet\'><!-- some comment -->');
        assert.strictEqual(formattedCode, `<link href=\'a/b/c.css\' rel=\'stylesheet\'>
<!-- some comment -->
`);
    });
    it('formats inline JavaScript classic scripts correctly', () => {
        const formattedCode = formatHTML('<html><script type="text/javascript">for(var i=0;i<10;++i)console.log(\'test \'+i);<\/script></html>');
        assert.strictEqual(formattedCode, `<html>
  <script type="text/javascript">
    for (var i = 0; i < 10; ++i)
      console.log('test ' + i);
  <\/script>
</html>
`);
    });
    it('formats inline JavaScript modules correctly', () => {
        const formattedCode = formatHTML('<html><script type="module">import foo from"foo";foo();</script><script type=module>bar();foo();</script></html>');
        assert.strictEqual(formattedCode, `<html>
  <script type="module">
    import foo from "foo";
    foo();
  </script>
  <script type=module>
    bar();
    foo();
  </script>
</html>
`);
    });
    it('formats inline <script>s with characters whose lower case representation is longer correctly', () => {
        const formattedCode = formatHTML('<html><script>console.log(\'İ\');</script></html>');
        assert.strictEqual(formattedCode, `<html>
  <script>
    console.log('İ');
  </script>
</html>
`);
    });
    it('formats inline <script>s with speculation rules correctly', () => {
        const formattedCode = formatHTML('<html><script type="speculationrules">{"prefetch": [{"source": "list","urls": ["prefetch.html?2"]}],"prerender": [{"source": "list","urls": ["prerender.html?2"]}]}</script></html>');
        assert.strictEqual(formattedCode, `<html>
  <script type="speculationrules">
    {
      "prefetch": [
        {
          "source": "list",
          "urls": [
            "prefetch.html?2"
          ]
        }
      ],
      "prerender": [
        {
          "source": "list",
          "urls": [
            "prerender.html?2"
          ]
        }
      ]
    }</script>
</html>
`);
    });
    it('formats inline <script>s with import maps correctly', () => {
        const formattedCode = formatHTML('<html><script type=importmap>{"imports": {"moment": "/node_modules/moment/src/moment.js","lodash": "/node_modules/lodash-es/lodash.js"}}</script></html>');
        assert.strictEqual(formattedCode, `<html>
  <script type=importmap>
    {
      "imports": {
        "moment": "/node_modules/moment/src/moment.js",
        "lodash": "/node_modules/lodash-es/lodash.js"
      }
    }</script>
</html>
`);
    });
    it('formats inline css correctly', () => {
        const formattedCode = formatHTML('<html><style>div{color:red;border:1px solid black;}</style></html>');
        assert.strictEqual(formattedCode, `<html>
  <style>
    div {
      color: red;
      border: 1px solid black;
    }
  </style>
</html>
`);
    });
    it('formats multiple inline formats correctly', () => {
        const formattedCode = formatHTML(`<html>
    <head>
    <meta name=\"ROBOTS\" content=\"NOODP\">
    <meta name='viewport' content='text/html'>
    <title>foobar</title>
    <body>
    <script>if(1<2){if(2<3){if(3<4){if(4<5){console.log("magic")}}}}<\/script>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIA...">
    <style>div{display:flex;align-items:center;justify-content:center;}body{width:100%}*{border:1px solid black}</style>
    </body>
    </html>`);
        assert.strictEqual(formattedCode, `<html>
  <head>
    <meta name=\"ROBOTS\" content=\"NOODP\">
    <meta name='viewport' content='text/html'>
    <title>foobar</title>
  <body>
    <script>
      if (1 < 2) {
        if (2 < 3) {
          if (3 < 4) {
            if (4 < 5) {
              console.log("magic")
            }
          }
        }
      }
    <\/script>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIA...">
    <style>
      div {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      body {
        width: 100%
      }

      * {
        border: 1px solid black
      }
    </style>
  </body>
</html>
`);
    });
    it('formats unquoted attribute values with trailing slashes correctly', () => {
        const code = `<link href=https://web.dev/ rel=canonical>
<link rel=alternate hreflang=es href=https://web.dev/i18n/es/>
`;
        assert.strictEqual(formatHTML(code), code);
    });
    it('formats inline JSON script tag correctly', () => {
        const formattedCode = formatHTML('<div><script type=\'application\/json\'>{"foo":"bar","data":{"hello":"world","meaning":42}}<\/script></div>');
        assert.strictEqual(formattedCode, `<div>
  <script type=\'application/json\'>
    {
      "foo": "bar",
      "data": {
        "hello": "world",
        "meaning": 42
      }
    }<\/script>
</div>
`);
    });
    it('formats inline JSON-LD script tag correctly', () => {
        const formattedCode = formatHTML('<div><script type=\'application\/ld+json\'>{  "@context": "https://json-ld.org/contexts/person.jsonld","@id": "http://dbpedia.org/resource/John_Lennon","name": "John Lennon","born": "1940-10-09","spouse": "http://dbpedia.org/resource/Cynthia_Lennon"}<\/script></div>');
        assert.strictEqual(formattedCode, `<div>
  <script type=\'application/ld+json\'>
    {
      "@context": "https://json-ld.org/contexts/person.jsonld",
      "@id": "http://dbpedia.org/resource/John_Lennon",
      "name": "John Lennon",
      "born": "1940-10-09",
      "spouse": "http://dbpedia.org/resource/Cynthia_Lennon"
    }<\/script>
</div>
`);
    });
    it('formats ampersands in text correctly', () => {
        assert.strictEqual(formatHTML('This&'), `This&
`);
        assert.strictEqual(formatHTML('Me&You'), `Me&You
`);
        const url = 'http://www.example.com/index.html?a=1&b=2&c=3&d=1234567890abcdef1234567890abcdef1';
        assert.strictEqual(formatHTML(url).trimEnd(), url);
    });
    it('formats ampersands in attribute values correctly', () => {
        assert.strictEqual(formatHTML('<link href="http://www.example.com/index.html?a=1&b=2">'), `<link href="http://www.example.com/index.html?a=1&b=2">
`);
        assert.strictEqual(formatHTML('<link href=http://www.example.com/index.html?a&b/>'), `<link href=http://www.example.com/index.html?a&b/>
`);
        assert.strictEqual(formatHTML('<link href=http://www.example.com/index.html?a&b/ rel=canonical>'), `<link href=http://www.example.com/index.html?a&b/ rel=canonical>
`);
    });
});
//# sourceMappingURL=HTMLFormatter.test.js.map

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