"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_formatter_worker_JavaScriptFormatter_test_js"], {
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
"./entrypoints/formatter_worker/JavaScriptFormatter.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatter_worker.js */ "./entrypoints/formatter_worker/formatter_worker.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
        "const x=42;let ɵ_escaped;"
    ], [
        "const x=42;let \\u0275_escaped;"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}

function formatJavaScript(text) {
    return _formatter_worker_js__WEBPACK_IMPORTED_MODULE_0__.FormatterWorker.format('text/javascript', text, '  ').content;
}
describe('JavaScriptFormatter', function() {
    it('formats await expressions correctly', function() {
        var formattedCode = formatJavaScript('(async () => { await someFunctionThatNeedsAwaiting(); callSomeOtherFunction(); })();');
        assert.strictEqual(formattedCode, '(async () => {\n  await someFunctionThatNeedsAwaiting();\n  callSomeOtherFunction();\n}\n)();\n');
    });
    it('formats async-function expressions correctly', function() {
        var formattedCode = formatJavaScript('async function foo() {return await Promise.resolve(1);}');
        assert.strictEqual(formattedCode, "async function foo() {\n  return await Promise.resolve(1);\n}\n");
    });
    it('formats top-level await correctly', function() {
        var formattedCode = formatJavaScript('const myFile=await import(\n"my-file.mjs");');
        assert.strictEqual(formattedCode, 'const myFile = await import("my-file.mjs");\n');
    });
    it('formats identifiers containing escaped characters correctly', function() {
        var formattedCode = formatJavaScript(String.raw(_templateObject()));
        assert.strictEqual(formattedCode, 'const x = 42;\nlet \\u0275_escaped;\n');
    });
    it('formats nullish coalescing expressions correctly', function() {
        var formattedCode = formatJavaScript('false??true');
        assert.strictEqual(formattedCode, 'false ?? true\n');
    });
    it('formats optional chaining expressions correctly', function() {
        var formattedCode = formatJavaScript('var x=a?.b;');
        assert.strictEqual(formattedCode, 'var x = a?.b;\n');
    });
    it('formats logical assignment expressions correctly', function() {
        var formattedCode = formatJavaScript('x||=1;');
        assert.strictEqual(formattedCode, 'x ||= 1;\n');
    });
    it('formats numeric separators correctly', function() {
        var formattedCode = formatJavaScript('x=1_000;');
        assert.strictEqual(formattedCode, 'x = 1_000;\n');
    });
    it('formats do-while loops correctly', function() {
        var formattedCode = formatJavaScript("function demo() {\n  do {} while (false);\n  if (true) {}\n}\nfunction demo() {do {} while (false);if (true) {}}");
        assert.strictEqual(formattedCode, "function demo() {\n  do {} while (false);\n  if (true) {}\n}\nfunction demo() {\n  do {} while (false);\n  if (true) {}\n}\n");
    });
    it('formats while loops correctly', function() {
        var formattedCode = formatJavaScript('while(true){print(\'infinity\');}');
        assert.strictEqual(formattedCode, "while (true) {\n  print('infinity');\n}\n");
    });
    it('formats function statements correctly', function() {
        var formattedCode = formatJavaScript('function test(a,b,c){a*=b;return c+a;}');
        assert.strictEqual(formattedCode, "function test(a, b, c) {\n  a *= b;\n  return c + a;\n}\n");
    });
    it('formats variable statements correctly', function() {
        var formattedCode = formatJavaScript('var a=1,b={},c=2,d="hello world";var a,b,c,d=2,e,f=3;var a={};');
        assert.strictEqual(formattedCode, 'var a = 1\n  , b = {}\n  , c = 2\n  , d = "hello world";\nvar a, b, c, d = 2, e, f = 3;\nvar a = {};\n');
    });
    it('formats array-literals correctly', function() {
        var formattedCode = formatJavaScript('var arr=[3,2,1,0]');
        assert.strictEqual(formattedCode, "var arr = [3, 2, 1, 0]\n");
    });
    it('formats ternary expressions correctly', function() {
        var formattedCode = formatJavaScript('a>b?a:b');
        assert.strictEqual(formattedCode, "a > b ? a : b\n");
    });
    it('formats labeled statements correctly', function() {
        var formattedCode = formatJavaScript('firstLoop:while(true){break firstLoop;continue firstLoop;}');
        assert.strictEqual(formattedCode, "firstLoop: while (true) {\n  break firstLoop;\n  continue firstLoop;\n}\n");
    });
    it('formats multiple statements on the same line correctly', function() {
        var formattedCode = formatJavaScript('rebuild(),show(),hasNew?refresh():noop();');
        assert.strictEqual(formattedCode, "rebuild(),\nshow(),\nhasNew ? refresh() : noop();\n");
    });
    it('formats if-statements correctly', function() {
        var formattedCode = formatJavaScript('if(a<b)log(a);else log(b);if(a<b){log(a)}else{log(b);}if(a===b)log(\'equals\');if(a!==b){log(\'non-eq\');}if(a>b&&b>c){print(a);print(b);}');
        assert.strictEqual(formattedCode, "if (a < b)\n  log(a);\nelse\n  log(b);\nif (a < b) {\n  log(a)\n} else {\n  log(b);\n}\nif (a === b)\n  log('equals');\nif (a !== b) {\n  log('non-eq');\n}\nif (a > b && b > c) {\n  print(a);\n  print(b);\n}\n");
    });
    it('formats break- and continue-statements in for-loops correctly', function() {
        var formattedCode = formatJavaScript("for(var i in set)if(i%2===0)break;else continue;\nfunction foo(){while(1){if (a)continue;test();}}");
        assert.strictEqual(formattedCode, "for (var i in set)\n  if (i % 2 === 0)\n    break;\n  else\n    continue;\nfunction foo() {\n  while (1) {\n    if (a)\n      continue;\n    test();\n  }\n}\n");
    });
    it('formats null-keyword correctly', function() {
        var formattedCode = formatJavaScript('1||null;');
        assert.strictEqual(formattedCode, "1 || null;\n");
    });
    it('formats exponential operator correctly', function() {
        var formattedCode = formatJavaScript('2**3');
        assert.strictEqual(formattedCode, "2 ** 3\n");
    });
    it('formats for-loops correctly', function() {
        var formattedCode = formatJavaScript('for(var value of map)if (value.length%3===0)console.log(value);for(var key in myMap)print(key);for(var value of myMap)print(value);');
        assert.strictEqual(formattedCode, "for (var value of map)\n  if (value.length % 3 === 0)\n    console.log(value);\nfor (var key in myMap)\n  print(key);\nfor (var value of myMap)\n  print(value);\n");
    });
    it('formats chained and nested if-statements correctly', function() {
        var formattedCode = formatJavaScript('if(a%7===0)b=1;else if(a%9===1) b =  2;else if(a%5===3){b=a/2;b++;} else b= 3;{if (a>b){a();pretty();}else if (a+b)e();reset();}');
        assert.strictEqual(formattedCode, "if (a % 7 === 0)\n  b = 1;\nelse if (a % 9 === 1)\n  b = 2;\nelse if (a % 5 === 3) {\n  b = a / 2;\n  b++;\n} else\n  b = 3;\n{\n  if (a > b) {\n    a();\n    pretty();\n  } else if (a + b)\n    e();\n  reset();\n}\n");
    });
    it('formats try-catch statements correctly', function() {
        var formattedCode = formatJavaScript('try{a(b());}catch(e){f()}finally{f();}');
        assert.strictEqual(formattedCode, "try {\n  a(b());\n} catch (e) {\n  f()\n} finally {\n  f();\n}\n");
    });
    it('formats object-spreads correctly', function() {
        var formattedCode = formatJavaScript('const a = {a:4,...{a: 5,b: 42}};');
        assert.strictEqual(formattedCode, "const a = {\n  a: 4,\n  ...{\n    a: 5,\n    b: 42\n  }\n};\n");
    });
    it('formats object destructuring correctly', function() {
        var formattedCode = formatJavaScript('let{x,y}=getXYFromTouchOrPointer(e);var test = function({x,y}){foo(x,y);}');
        assert.strictEqual(formattedCode, "let {x, y} = getXYFromTouchOrPointer(e);\nvar test = function({x, y}) {\n  foo(x, y);\n}\n");
    });
    it('formats let declaration for "$" correctly', function() {
        var formattedCode = formatJavaScript('let $=1;');
        assert.strictEqual(formattedCode, 'let $ = 1;\n');
    });
    it('formats let declaration for "_" correctly', function() {
        var formattedCode = formatJavaScript('let _=1;');
        assert.strictEqual(formattedCode, 'let _ = 1;\n');
    });
    it('formats let declaration for unicode name correctly', function() {
        var formattedCode = formatJavaScript('let \u00e1=1;');
        assert.strictEqual(formattedCode, 'let \u00e1 = 1;\n');
    });
    it('formats const declaration for unicode name correctly', function() {
        var formattedCode = formatJavaScript('const \u00e1=1;');
        assert.strictEqual(formattedCode, 'const \u00e1 = 1;\n');
    });
    it('formats yield <number> correctly', function() {
        var formattedCode = formatJavaScript('function *one() {yield 1;}');
        assert.strictEqual(formattedCode, "function *one() {\n  yield 1;\n}\n");
    });
    it('formats object-expressions correctly', function() {
        var formattedCode = formatJavaScript('var mapping={original:[1,2,3],formatted:[],count:0};var obj={\'foo\':1,bar:"2",cat:{dog:\'1989\'}}');
        assert.strictEqual(formattedCode, "var mapping = {\n  original: [1, 2, 3],\n  formatted: [],\n  count: 0\n};\nvar obj = {\n  'foo': 1,\n  bar: \"2\",\n  cat: {\n    dog: '1989'\n  }\n}\n");
    });
    it('formats block-statements correctly', function() {
        var formattedCode = formatJavaScript('{ print(1); print(2); }');
        assert.strictEqual(formattedCode, "{\n  print(1);\n  print(2);\n}\n");
    });
    it('formats assignment expressions correctly', function() {
        var formattedCode = formatJavaScript('var exp=\'a string\';c=+a+(0>a?b:0);c=(1);var a=(1);');
        assert.strictEqual(formattedCode, "var exp = 'a string';\nc = +a + (0 > a ? b : 0);\nc = (1);\nvar a = (1);\n");
    });
    it('formats with-statements correctly', function() {
        var formattedCode = formatJavaScript('with(obj)log(\'first\');with(nice){log(1);log(2);}done();');
        assert.strictEqual(formattedCode, "with (obj)\n  log('first');\nwith (nice) {\n  log(1);\n  log(2);\n}\ndone();\n");
    });
    it('formats switch-statements correctly', function() {
        var formattedCode = formatJavaScript('switch (a) { case 1, 3: log("odd");break;case 2:log("even");break;case 42:case 89: log(a);default:log("interesting");log(a);}log("done");');
        assert.strictEqual(formattedCode, 'switch (a) {\ncase 1, 3:\n  log("odd");\n  break;\ncase 2:\n  log("even");\n  break;\ncase 42:\ncase 89:\n  log(a);\ndefault:\n  log("interesting");\n  log(a);\n}\nlog("done");\n');
    });
    it('formats generator-expressions correctly', function() {
        var formattedCode = formatJavaScript('function *max(){var a=yield;var b=yield 10;if(a>b)return a;else return b;}');
        assert.strictEqual(formattedCode, "function *max() {\n  var a = yield;\n  var b = yield 10;\n  if (a > b)\n    return a;\n  else\n    return b;\n}\n");
    });
    it('formats block-comments correctly', function() {
        var formattedCode = formatJavaScript("/** this\n * is\n * block\n * comment\n */\nvar a = 10;");
        assert.strictEqual(formattedCode, "/** this\n * is\n * block\n * comment\n */\nvar a = 10;\n");
    });
    it('formats let-assignments correctly', function() {
        var formattedCode = formatJavaScript('for(var i=0;i<names.length;++i){let name=names[i];let person=persons[i];}');
        assert.strictEqual(formattedCode, "for (var i = 0; i < names.length; ++i) {\n  let name = names[i];\n  let person = persons[i];\n}\n");
    });
    it('formats anonymous functions correctly', function() {
        var formattedCode = formatJavaScript("setTimeout(function(){alert(1);},2000); function test(arg){console.log(arg);}test(a=>a+2);\nvar onClick = function() { console.log('click!'); };console.log('done');var onStart = function() { a(); }, onFinish = function() { b(); };\nvar onStart = function() {}, delay=1000, belay=document.activeElement;");
        assert.strictEqual(formattedCode, "setTimeout(function() {\n  alert(1);\n}, 2000);\nfunction test(arg) {\n  console.log(arg);\n}\ntest(a => a + 2);\nvar onClick = function() {\n  console.log('click!');\n};\nconsole.log('done');\nvar onStart = function() {\n  a();\n}\n  , onFinish = function() {\n  b();\n};\nvar onStart = function() {}\n  , delay = 1000\n  , belay = document.activeElement;\n");
    });
    it('formats arrow functions correctly', function() {
        var formattedCode1 = formatJavaScript('const double=x=>x*2;');
        var formattedCode2 = formatJavaScript('const sum=(a,b)=>a+b;');
        var formattedCode3 = formatJavaScript('const double=x=>{return x*2;}');
        var formattedCode4 = formatJavaScript('const sum=(a,b,c)=>{const val=a+b+c;return val;}');
        assert.strictEqual(formattedCode1, "const double = x => x * 2;\n");
        assert.strictEqual(formattedCode2, "const sum = (a, b) => a + b;\n");
        assert.strictEqual(formattedCode3, "const double = x => {\n  return x * 2;\n}\n");
        assert.strictEqual(formattedCode4, "const sum = (a, b, c) => {\n  const val = a + b + c;\n  return val;\n}\n");
    });
    describe('formats files with comments', function() {
        it('handles 1 leading comment correctly', function() {
            var formattedCode = formatJavaScript("// This is a starting comment\nconsole.log('5');");
            assert.strictEqual(formattedCode, "// This is a starting comment\nconsole.log('5');\n");
        });
        it('handles leading hashbang correctly', function() {
            var formattedCode = formatJavaScript("#! hashbang\n{{{console.log(1)}}}");
            assert.strictEqual(formattedCode, "#! hashbang\n{\n  {\n    {\n      console.log(1)\n    }\n  }\n}\n");
        });
        it('handles 1 trailing comment correctly', function() {
            var formattedCode = formatJavaScript('console.log(\'5\'); // This is a trailing comment');
            assert.strictEqual(formattedCode, "console.log('5');\n// This is a trailing comment\n");
        });
        it('handles 1 trailing comment on a new line correctly', function() {
            var formattedCode = formatJavaScript("console.log('5');\n// This is a new line comment");
            assert.strictEqual(formattedCode, "console.log('5');\n// This is a new line comment\n");
        });
        it('handles 2 leading comments', function() {
            var formattedCode = formatJavaScript("// This is a starting line comment\n/* This is a starting block comment */\nconsole.log('5');");
            assert.strictEqual(formattedCode, "// This is a starting line comment\n/* This is a starting block comment */\nconsole.log('5');\n");
        });
        it('handles 2 trailing comments correctly', function() {
            var formattedCode = formatJavaScript("console.log('5'); // This is a trailing comment same line\n// This is a trailing new line comment");
            assert.strictEqual(formattedCode, "console.log('5');\n// This is a trailing comment same line\n// This is a trailing new line comment\n");
        });
        it('handles leading and trailing comments correctly', function() {
            var formattedCode = formatJavaScript("// This is a starting line comment\n/* This is a starting block comment */\nconsole.log('5'); // This is a trailing comment same line\n// This is a trailing new line comment");
            assert.strictEqual(formattedCode, "// This is a starting line comment\n/* This is a starting block comment */\nconsole.log('5');\n// This is a trailing comment same line\n// This is a trailing new line comment\n");
        });
        it('handles a hashbang, leading and trailing comments correctly', function() {
            var formattedCode = formatJavaScript("#! hashbang\n// This is a starting line comment\n/* This is a starting block comment */\nconsole.log('5'); // This is a trailing comment same line\n// This is a trailing new line comment");
            assert.strictEqual(formattedCode, "#! hashbang\n// This is a starting line comment\n/* This is a starting block comment */\nconsole.log('5');\n// This is a trailing comment same line\n// This is a trailing new line comment\n");
        });
    });
    describe('formats files with classes', function() {
        it('handles an empty class correctly', function() {
            var formattedCode = formatJavaScript('class Test{}');
            assert.strictEqual(formattedCode, "class Test {\n}\n");
        });
        it('handles an empty constructor correctly', function() {
            var formattedCode = formatJavaScript('class Test{constructor(){}}');
            assert.strictEqual(formattedCode, "class Test {\n  constructor() {}\n}\n");
        });
        it('handles a single method correctly', function() {
            var formattedCode = formatJavaScript('class Test{constructor(){this.bar=10;}givemebar(){return this.bar;}}');
            assert.strictEqual(formattedCode, "class Test {\n  constructor() {\n    this.bar = 10;\n  }\n  givemebar() {\n    return this.bar;\n  }\n}\n");
        });
        it('handles extending a super class correctly', function() {
            var formattedCode = formatJavaScript('class Foo extends Bar{constructor(name){super(name);}getName(){return super.getName();}}');
            assert.strictEqual(formattedCode, "class Foo extends Bar {\n  constructor(name) {\n    super(name);\n  }\n  getName() {\n    return super.getName();\n  }\n}\n");
        });
        it('handles consecutive class declarations correctly', function() {
            var formattedCode = formatJavaScript('class A{}class B extends A{constructor(){super();}}');
            assert.strictEqual(formattedCode, "class A {\n}\nclass B extends A {\n  constructor() {\n    super();\n  }\n}\n");
        });
        it('handles static methods correctly', function() {
            var formattedCode = formatJavaScript('class Employer{static count(){this._counter = (this._counter || 0) + 1; return this._counter;}}');
            assert.strictEqual(formattedCode, "class Employer {\n  static count() {\n    this._counter = (this._counter || 0) + 1;\n    return this._counter;\n  }\n}\n");
        });
        it('handles class expressions correctly', function() {
            var formattedCode = formatJavaScript('new(class{constructor(){debugger}})');
            assert.strictEqual(formattedCode, "new (class {\n  constructor() {\n    debugger\n  }\n}\n)\n");
        });
    });
    describe('formats files with template literals', function() {
        it('handles simple template literal correctly', function() {
            var formattedCode = formatJavaScript('var foo = `bar`;');
            assert.strictEqual(formattedCode, "var foo = `bar`;\n");
        });
        it('handles multi-line template literals correctly', function() {
            var formattedCode = formatJavaScript("var foo = `this\nbar`;");
            assert.strictEqual(formattedCode, "var foo = `this\nbar`;\n");
        });
        it('handles string substitution in template literals correctly', function() {
            var formattedCode = formatJavaScript('var a=`I have ${credit+cash}$`;\nvar a=`${name} has ${credit+cash}${currency?currency:"$"}`;');
            assert.strictEqual(formattedCode, 'var a = `I have ${credit + cash}$`;\nvar a = `${name} has ${credit + cash}${currency ? currency : "$"}`;\n');
        });
        it('handles tagged template literals correctly', function() {
            var formattedCode = formatJavaScript('escapeHtml`<div class=${classnName} width=${a+b}/>`;');
            assert.strictEqual(formattedCode, "escapeHtml`<div class=${classnName} width=${a + b}/>`;\n");
        });
    });
    it('removes consecutive new lines', function() {
        var formattedCode = formatJavaScript("a();\n\n\n\n\n\n\n\n\nb();");
        assert.strictEqual(formattedCode, "a();\n\nb();\n");
    });
    it('formats expressions in parentheses correctly', function() {
        var formattedCode = formatJavaScript('if((a))((b));else (c);');
        assert.strictEqual(formattedCode, "if ((a))\n  ((b));\nelse\n  (c);\n");
    });
    it('formats obfuscated code', function() {
        var formattedCode = formatJavaScript('function formatted1()\n    {\n        var variable1 = 0;\n    }\n\n    function withComments()\n    {\n    // comment\n        return "functionWithComments";\n    }\n\n    try{onmessage=function(event){var source=event.data;var formattedSource=beautify(source);var mapping=buildMapping(source,formattedSource);postMessage({formattedSource:formattedSource,mapping:mapping})};function beautify(source){var ast=parse.parse(source);var beautifyOptions=\n    {indent_level:4,indent_start:0,quote_keys:false,space_colon:false};return process.gen_code(ast,beautifyOptions)}function buildMapping(source,formattedSource){var mapping={original:[],formatted:[]};var lastPosition=0;var regexp=/(^|[^\\])\b((?=D)[$.w]+)\b/g;while(true)\n    {var match=regexp.exec(formattedSource);if(!match)break;var position=source.indexOf(match[2],lastPosition);if(position===-1)throw"No match found in original source for "+match[2];mapping.original.push(position);mapping.formatted.push(match.index+match[1].length);\n    lastPosition=position+match[2].length}return mapping}function require(){return parse}var exports={};importScripts("UglifyJS/parse-js.js");var parse=exports;var exports={};importScripts("UglifyJS/process.js");var process=exports;}catch(e){}\n\n    function formatted2()\n    {\n        var variable2 = 0;\n    }');
        assert.strictEqual(formattedCode, 'function formatted1() {\n  var variable1 = 0;\n}\n\nfunction withComments() {\n  // comment\n  return "functionWithComments";\n}\n\ntry {\n  onmessage = function(event) {\n    var source = event.data;\n    var formattedSource = beautify(source);\n    var mapping = buildMapping(source, formattedSource);\n    postMessage({\n      formattedSource: formattedSource,\n      mapping: mapping\n    })\n  }\n  ;\n  function beautify(source) {\n    var ast = parse.parse(source);\n    var beautifyOptions = {\n      indent_level: 4,\n      indent_start: 0,\n      quote_keys: false,\n      space_colon: false\n    };\n    return process.gen_code(ast, beautifyOptions)\n  }\n  function buildMapping(source, formattedSource) {\n    var mapping = {\n      original: [],\n      formatted: []\n    };\n    var lastPosition = 0;\n    var regexp = /(^|[^\\])\b((?=D)[$.w]+)\b/g;\n    while (true) {\n      var match = regexp.exec(formattedSource);\n      if (!match)\n        break;\n      var position = source.indexOf(match[2], lastPosition);\n      if (position === -1)\n        throw "No match found in original source for " + match[2];\n      mapping.original.push(position);\n      mapping.formatted.push(match.index + match[1].length);\n      lastPosition = position + match[2].length\n    }\n    return mapping\n  }\n  function require() {\n    return parse\n  }\n  var exports = {};\n  importScripts("UglifyJS/parse-js.js");\n  var parse = exports;\n  var exports = {};\n  importScripts("UglifyJS/process.js");\n  var process = exports;\n} catch (e) {}\n\nfunction formatted2() {\n  var variable2 = 0;\n}\n');
    });
    it('formats functions using `import.meta.url` correctly', function() {
        var formattedCode = formatJavaScript('function foo(){console.log(import.meta.url);}');
        assert.strictEqual(formattedCode, "function foo() {\n  console.log(import.meta.url);\n}\n");
    });
    it('formats class fields correctly', function() {
        var formattedCode = formatJavaScript('class Clazz {map=new Map();someMethod(){console.log(42);}map2=new Map();}');
        assert.strictEqual(formattedCode, "class Clazz {\n  map = new Map();\n  someMethod() {\n    console.log(42);\n  }\n  map2 = new Map();\n}\n");
    });
    it('formats template literals correctly', function() {
        var formattedCode = formatJavaScript('`foo${bar}`');
        assert.strictEqual(formattedCode, '`foo${bar}`\n');
    });
}); //# sourceMappingURL=JavaScriptFormatter.test.js.map


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