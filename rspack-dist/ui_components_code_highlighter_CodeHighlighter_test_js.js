"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_code_highlighter_CodeHighlighter_test_js"], {
"./ui/components/code_highlighter/CodeHighlighter.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _code_highlighter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code_highlighter.js */ "./ui/components/code_highlighter/code_highlighter.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}

function parseTokens(code) {
    var token = /\[(\S+) ([^\]]+)\]/g, tokens = [];
    for(var pos = 0;;){
        var match = token.exec(code);
        var next = match ? match.index : code.length;
        if (next > pos) {
            tokens.push([
                code.slice(pos, next),
                ''
            ]);
        }
        if (!match) {
            break;
        }
        tokens.push([
            match[2],
            match[1]
        ]);
        pos = match.index + match[0].length;
    }
    return tokens;
}
function testHighlight(code, mimeType) {
    return /*#__PURE__*/ _async_to_generator(function() {
        var tokens, rawCode, highlighter, i;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    tokens = parseTokens(code), rawCode = tokens.map(function(t) {
                        return t[0];
                    }).join('');
                    return [
                        4,
                        _code_highlighter_js__WEBPACK_IMPORTED_MODULE_0__.CodeHighlighter.create(rawCode, mimeType)
                    ];
                case 1:
                    highlighter = _state.sent();
                    i = 0;
                    highlighter.highlight(function(text, style) {
                        assert.strictEqual(JSON.stringify([
                            text,
                            style.replace(/\btoken-/g, '').split(' ').sort().join('&')
                        ]), JSON.stringify(tokens[i++] || [
                            '',
                            ''
                        ]));
                    });
                    return [
                        2
                    ];
            }
        });
    });
}
describe('CodeHighlighter', function() {
    describe('languageFromMIMEType', function() {
        it('also supports common legacy MIME types for JavaScript', /*#__PURE__*/ _async_to_generator(function() {
            var _i, _iter, mimeType, language;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _i = 0, _iter = [
                            'application/ecmascript',
                            'application/javascript',
                            'text/jscript'
                        ];
                        _state.label = 1;
                    case 1:
                        if (!(_i < _iter.length)) return [
                            3,
                            4
                        ];
                        mimeType = _iter[_i];
                        return [
                            4,
                            _code_highlighter_js__WEBPACK_IMPORTED_MODULE_0__.CodeHighlighter.languageFromMIME(mimeType)
                        ];
                    case 2:
                        language = _state.sent();
                        assert.isNotNull(language, "legacy MIME type '".concat(mimeType, "' not recognized"));
                        _state.label = 3;
                    case 3:
                        _i++;
                        return [
                            3,
                            1
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        }));
    });
    // clang-format off
    it('can highlight JavaScript', testHighlight("\n[keyword function] [definition foo]([definition bar]) {\n  [keyword return] [number 22];\n}", 'text/javascript'));
    it('can highlight JavaScript compatible with CodeMirror 5', testHighlight("\n[keyword function] [definition name]([definition params]) {\n  [keyword var] [definition x] = [number 1];\n  [keyword const] [definition y] = [number 2];\n  [keyword let] [definition z] = [number 3];\n  [keyword return] [variable x] + [variable params];\n}", 'text/javascript')), it('can highlight JavaScript with `import { default as name }` syntax', testHighlight("\n[keyword import] {[keyword default] [keyword as] [definition name]} [keyword from] [string 'module'];\n", 'text/javascript')), it('can highlight JavaScript with `new.target` syntax', testHighlight("\n[keyword new].[property target]\n", 'text/javascript'));
    it('can highlight TypeScript', testHighlight("\n[keyword type] [type X] = {\n  [property x]: [type boolean]\n}", 'text/typescript'));
    it('can highlight TypeScript with the new `using` keyword', testHighlight("\n[keyword using] [definition resource] = [variable getResource]()\n", 'text/typescript'));
    it('can highlight JSX', testHighlight('\n[keyword function] [definition App]() {\n  [keyword return] (\n    <[tag div] [attribute className]=[attribute-value "App"]>\n          Hello World!\n    </[tag div]>);\n }', 'text/jsx'));
    it('can highlight JSX within JavaScript files', testHighlight("\n[keyword const] [definition t] = <[tag div] [attribute disabled]>hello</[tag div]>\n", 'text/javascript'));
    it('can highlight HTML', testHighlight("\n[meta <!doctype html>]\n<[tag html] [attribute lang]=[attribute-value ar]>\n  ...\n</[tag html]>", 'text/html'));
    it('can highlight HTML with <script type="importmap"> blocks', testHighlight('\n[meta <!DOCTYPE html>]\n<[tag script] [attribute type]=[attribute-value "importmap"]>\n{\n  [string "imports"]: {\n    [string "moment"]: [string "/node_modules/moment/src/moment.js"],\n    [string "lodash"]: [string "/node_modules/lodash-es/lodash.js"]\n  }\n}\n</[tag script]>', 'text/html'));
    it('can highlight HTML with <script type="speculationrules"> blocks', testHighlight('\n[meta <!DOCTYPE html>]\n<[tag script] [attribute type]=[attribute-value "speculationrules"]>\n{\n  [string "prefetch"]: [\n    {\n      [string "source"]: [string "list"],\n      [string "urls"]: [\n        [string "prefetch.html?2"]\n      ]\n    }\n  ],\n  [string "prerender"]: [\n    {\n      [string "source"]: [string "list"],\n      [string "urls"]: [\n        [string "prerender.html?2"]\n      ]\n    }\n  ]\n}\n</[tag script]>', 'text/html'));
    it('can highlight HTML with <script type="application/json"> blocks', testHighlight('\n[meta <!DOCTYPE html>]\n<[tag script] [attribute type]=[attribute-value "application/json"]>\n{\n  [string "one"]: [number 2],\n  [string "two"]: [atom true]\n}\n</[tag script]>', 'text/html'));
    it('can highlight HTML with <script type="application/ld+json"> blocks', testHighlight('\n[meta <!DOCTYPE html>]\n<[tag script] [attribute type]=[attribute-value "application/ld+json"]>\n{\n  [string "@type"]: [string "PostalAddress"],\n  [string "streetAddress"]: [string "Musterstrasse 1"],\n  [string "addressLocality"]: [string "Musterstadt"],\n  [string "postalCode"]: [string "12345"],\n  [string "addressCountry"]: [string "DE"],\n}\n</[tag script]>', 'text/html'));
    it('can highlight HTML with <script type="text/jsx"> blocks', testHighlight("\n[meta <!DOCTYPE html>]\n<[tag script] [attribute type]=[attribute-value \"text/jsx\"]>\n  [keyword const] [definition app] = [variable document].[property getElementById]([string 'app']);\n  [variable ReactDOM].[property render](<[tag h1]>Develop. Preview. Ship. \uD83D\uDE80</[tag h1]>, [variable app]);\n</[tag script]>", 'text/html'));
    it('can highlight HTML with onclick inline JavaScript', testHighlight("\n[meta <!DOCTYPE html>]\n<[tag button] [attribute onclick]=[variable handleClick]()>Click me</[tag button]>", 'text/html'));
    it('can highlight HTML with element style', testHighlight("\n[meta <!DOCTYPE html>]\n<[tag button] [attribute style]=[property color]:[atom green]]>Don't click me</[tag button]>", 'text/html'));
    it('can highlight SVG', testHighlight('\n<[tag svg] [attribute viewBox]=[attribute-value "0 0 10 10"]>\n  <[tag circle] />\n</[tag svg]>', 'image/svg+xml'));
    it('can highlight XHTML', testHighlight('[meta <?xml version="1.0" encoding="UTF-8"?>]\n  [meta <!DOCTYPE html>]\n  <[tag html] [attribute xmlns]=[attribute-value "http://www.w3.org/1999/xhtml"]>\n  </[tag html]>', 'application/xhtml+xml'));
    it('can highlight Angular Templates', testHighlight('\n<[tag div] [attribute class]=[attribute-value "title"]>{{[variable obj].[property title]}}</[tag div]>\n<[tag app-button] ([attribute clicked])=[variable onClick]()></[tag app-button]>\n', 'text/x.angular'));
    it('can highlight Svelte Templates', testHighlight("\n<[tag script]>\n[keyword import] [definition Widget] [keyword from] [string './Widget.svelte'];\n</[tag script]>\n\n<[tag button] [attribute disabled]={[variable clickable]}>Click me!</[tag button]>\n\n<[tag style]>\n[tag button] {\n  [property font-weight]: [atom bold];\n  [property color]: [number #ff2];\n}\n</[tag style]>\n", 'text/x.svelte'));
    it('can highlight Vue Templates', testHighlight('\n<[tag template]>\n  <[tag Header] [keyword v-show]=[attribute-value "][variable view][attribute-value "] />\n  <[tag Main] @[variable hide]=[attribute-value "][variable onHide][attribute-value "] />\n  <[tag router-view] />\n</[tag template]>', 'text/x.vue'));
    it('can highlight CSS', testHighlight("\n[tag span].[type cls]#[atom id] {\n  [property font-weight]: [atom bold];\n  [property color]: [number #ff2];\n  [property width]: [number 4px];\n}", 'text/css'));
    it('can highlight GSS', testHighlight("\n[definition @component] {\n  [tag foo] {\n    [property color]: [keyword black];\n  }\n}\n", 'text/x-gss'));
    it('can highlight LESS', testHighlight("\n[variable @width]: [number 10px];\n[variable @height]: [variable @width] + [number 10px];\n\n#[atom header] {\n  [property width]: [variable @width];\n  [property height]: [variable @height];\n}\n", 'text/x-less'));
    it('can highlight SCSS', testHighlight("\n[variable $width]: [number 10px];\n[variable $height]: [variable $width] + [number 10px];\n\n#[atom header] {\n  [property width]: [variable $width];\n  [property height]: [variable $height];\n}\n", 'text/x-scss'));
    it('can highlight SASS', testHighlight("\n[variable $width]: [number 10px]\n[variable $height]: [variable $width] + [number 10px]\n\n#[atom header]\n  [property width]: [variable $width]\n  [property height]: [variable $height]\n", 'text/x-sass'));
    it('can highlight WAST', testHighlight("\n([keyword module]\n ([keyword type] [variable $t] ([keyword func] ([keyword param] [type i32])))\n ([keyword func] [variable $max] [comment (; 1 ;)] ([keyword param] [variable $0] [type i32]) ([keyword result] [type i32])\n   ([keyword get_local] [variable $0])))\n", 'application/wasm'));
    it('can highlight JSON', testHighlight('\n{\n  [string "one"]: [number 2],\n  [string "two"]: [atom true]\n}', 'application/json'));
    it('can highlight Markdown', testHighlight("\n[heading&meta #][heading  Head]\n\nParagraph with [emphasis&meta *][emphasis emphasized][emphasis&meta *] text.\n", 'text/markdown'));
    it('can highlight Python', testHighlight("\n[keyword def] [definition f]([variable x] = [atom True]):\n  [keyword return] [variable x] * [number 10];\n", 'text/x-python'));
    it('can highlight PHP', testHighlight("\n[meta <?] [keyword echo] [string 'Hello World!']; [meta ?>]\n", 'application/x-httpd-php'));
    it('can highlight Shell code', testHighlight('\n[builtin cat] [string "a"]\n', 'text/x-sh'));
    it('can highlight Dart code', testHighlight("\n[builtin void] [variable main]() {\n  [variable print]([string 'Hello, World!']);\n}\n", 'application/vnd.dart'));
    it('can highlight Go code', testHighlight('\n[keyword package] [variable main]\n\n[keyword import] [string "fmt"]\n\n[keyword func] [variable main]() {\n  [variable fmt][number .][variable Println]([string "hello world"])\n}\n', 'text/x-go'));
    it('can highlight Kotlin code', testHighlight('\n[keyword fun] [definition main]([variable args] : [variable Array]<[type String]>) {\n    [variable println]([string "Hello, World!"])\n}\n', 'text/x-kotlin'));
    it('can highlight Scala code', testHighlight('\n[keyword object] [definition HelloWord] [keyword extends] [type App] {\n  [keyword println]([string "Hello, world"])\n}\n', 'text/x-scala'));
    it('can highlight Web app manifests', testHighlight('\n{\n  [string "name"]: [string "Test"],\n  [string "start_url"]: [string "."]\n}\n  ', 'application/manifest+json'));
// clang_format on
}); //# sourceMappingURL=CodeHighlighter.test.js.map


}),

}]);