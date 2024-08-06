"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_OutlineQuickOpen_test_js"], {
"./panels/sources/OutlineQuickOpen.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _sources_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sources.js */ "./panels/sources/sources.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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



describe('OutlineQuickOpen', function() {
    describe('generates a correct JavaScript outline', function() {
        var javaScriptOutline = function javaScriptOutline(doc) {
            var extensions = [
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.javascript.javascript()
            ];
            var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.create({
                doc: doc,
                extensions: extensions
            });
            return _sources_js__WEBPACK_IMPORTED_MODULE_2__.OutlineQuickOpen.outline(state);
        };
        it('for empty scripts', function() {
            assert.isEmpty(javaScriptOutline(''));
        });
        it('for simple function statements', function() {
            assert.deepEqual(javaScriptOutline('function f() {}'), [
                {
                    title: 'f',
                    subtitle: '()',
                    lineNumber: 0,
                    columnNumber: 9
                }
            ]);
            assert.deepEqual(javaScriptOutline('function func(param) { return param; }'), [
                {
                    title: 'func',
                    subtitle: '(param)',
                    lineNumber: 0,
                    columnNumber: 9
                }
            ]);
            assert.deepEqual(javaScriptOutline('function foo(a, b, c) {}'), [
                {
                    title: 'foo',
                    subtitle: '(a, b, c)',
                    lineNumber: 0,
                    columnNumber: 9
                }
            ]);
        });
        it('for function statements with rest arguments', function() {
            assert.deepEqual(javaScriptOutline('function func(...rest) {}'), [
                {
                    title: 'func',
                    subtitle: '(...rest)',
                    lineNumber: 0,
                    columnNumber: 9
                }
            ]);
            assert.deepEqual(javaScriptOutline('function foo(a, b, ...c) {}'), [
                {
                    title: 'foo',
                    subtitle: '(a, b, ...c)',
                    lineNumber: 0,
                    columnNumber: 9
                }
            ]);
        });
        it('for function statements with pattern parameters', function() {
            assert.deepEqual(javaScriptOutline('function foo({a, b}, c) { return a + b; }\n' + 'function bar(a, [b, [c]]) { return a+b; }'), [
                {
                    title: 'foo',
                    subtitle: '({‥}, c)',
                    lineNumber: 0,
                    columnNumber: 9
                },
                {
                    title: 'bar',
                    subtitle: '(a, [‥])',
                    lineNumber: 1,
                    columnNumber: 9
                }
            ]);
        });
        it('for nested function statements', function() {
            assert.deepEqual(javaScriptOutline('function foo(){ function bar() {} function baz(a,b ,c) { }}'), [
                {
                    title: 'foo',
                    subtitle: '()',
                    lineNumber: 0,
                    columnNumber: 9
                },
                {
                    title: 'bar',
                    subtitle: '()',
                    lineNumber: 0,
                    columnNumber: 25
                },
                {
                    title: 'baz',
                    subtitle: '(a, b, c)',
                    lineNumber: 0,
                    columnNumber: 43
                }
            ]);
        });
        it('for async function statements', function() {
            assert.deepEqual(javaScriptOutline('async function foo() { };\n' + 'async function sum(x, y) { return x + y; }'), [
                {
                    title: 'async foo',
                    subtitle: '()',
                    lineNumber: 0,
                    columnNumber: 15
                },
                {
                    title: 'async sum',
                    subtitle: '(x, y)',
                    lineNumber: 1,
                    columnNumber: 15
                }
            ]);
        });
        it('for generator function statements', function() {
            assert.deepEqual(javaScriptOutline('function* foo() { }\n' + 'async function* bar(a,b){}'), [
                {
                    title: '*foo',
                    subtitle: '()',
                    lineNumber: 0,
                    columnNumber: 10
                },
                {
                    title: 'async *bar',
                    subtitle: '(a, b)',
                    lineNumber: 1,
                    columnNumber: 16
                }
            ]);
        });
        it('for function expressions in variable declarations', function() {
            assert.deepEqual(javaScriptOutline('const a = function(a,b) { }, b = function bar(c,d) { }'), [
                {
                    title: 'a',
                    subtitle: '(a, b)',
                    lineNumber: 0,
                    columnNumber: 6
                },
                {
                    title: 'b',
                    subtitle: '(c, d)',
                    lineNumber: 0,
                    columnNumber: 29
                }
            ]);
            assert.deepEqual(javaScriptOutline('let a = function(a,b) { }, b = function bar(c,d) { }'), [
                {
                    title: 'a',
                    subtitle: '(a, b)',
                    lineNumber: 0,
                    columnNumber: 4
                },
                {
                    title: 'b',
                    subtitle: '(c, d)',
                    lineNumber: 0,
                    columnNumber: 27
                }
            ]);
            assert.deepEqual(javaScriptOutline('var a = function(a,b) { }, b = function bar(c,d) { }'), [
                {
                    title: 'a',
                    subtitle: '(a, b)',
                    lineNumber: 0,
                    columnNumber: 4
                },
                {
                    title: 'b',
                    subtitle: '(c, d)',
                    lineNumber: 0,
                    columnNumber: 27
                }
            ]);
        });
        it('for function expressions in property assignments', function() {
            assert.deepEqual(javaScriptOutline('a.b.c = function(d, e) { };\n' + 'a.b[c] = function() { };\n' + 'a.b[c].d = function() { };\n' + '(a || b).c = function() { };\n'), [
                {
                    title: 'c',
                    subtitle: '(d, e)',
                    lineNumber: 0,
                    columnNumber: 4
                },
                {
                    title: 'd',
                    subtitle: '()',
                    lineNumber: 2,
                    columnNumber: 7
                },
                {
                    title: 'c',
                    subtitle: '()',
                    lineNumber: 3,
                    columnNumber: 9
                }
            ]);
        });
        it('for function expressions in object literals', function() {
            assert.deepEqual(javaScriptOutline('x = { run: function() { }, get count() { }, set count(value) { }};\n' + 'var foo = { "bar": function() { }};\n' + 'var foo = { 42: function() { }}\n'), [
                {
                    title: 'run',
                    subtitle: '()',
                    lineNumber: 0,
                    columnNumber: 6
                },
                {
                    title: 'get count',
                    subtitle: '()',
                    lineNumber: 0,
                    columnNumber: 31
                },
                {
                    title: 'set count',
                    subtitle: '(value)',
                    lineNumber: 0,
                    columnNumber: 48
                }
            ]);
        });
        it('for arrow functions in variable declarations', function() {
            assert.deepEqual(javaScriptOutline('var a = x => x + 2;\n' + 'var b = (x, y) => x + y'), [
                {
                    title: 'a',
                    subtitle: '(x)',
                    lineNumber: 0,
                    columnNumber: 4
                },
                {
                    title: 'b',
                    subtitle: '(x, y)',
                    lineNumber: 1,
                    columnNumber: 4
                }
            ]);
            assert.deepEqual(javaScriptOutline('let x = (a,b) => a + b, y = a => { return a; };\n' + 'const z = x => x'), [
                {
                    title: 'x',
                    subtitle: '(a, b)',
                    lineNumber: 0,
                    columnNumber: 4
                },
                {
                    title: 'y',
                    subtitle: '(a)',
                    lineNumber: 0,
                    columnNumber: 24
                },
                {
                    title: 'z',
                    subtitle: '(x)',
                    lineNumber: 1,
                    columnNumber: 6
                }
            ]);
        });
        it('for arrow functions in property assignments', function() {
            assert.deepEqual(javaScriptOutline('a.b.c = (d, e) => d + e;\n' + 'a.b[c] = () => { };\n' + 'a.b[c].d = () => { };\n' + '(a || b).c = () => { };\n'), [
                {
                    title: 'c',
                    subtitle: '(d, e)',
                    lineNumber: 0,
                    columnNumber: 4
                },
                {
                    title: 'd',
                    subtitle: '()',
                    lineNumber: 2,
                    columnNumber: 7
                },
                {
                    title: 'c',
                    subtitle: '()',
                    lineNumber: 3,
                    columnNumber: 9
                }
            ]);
        });
        it('for arrow functions in object literals', function() {
            assert.deepEqual(javaScriptOutline('const object = {\n' + '  foo: x => x,\n' + '  bar: (a, b) => { return a + b };\n' + '};'), [
                {
                    title: 'foo',
                    subtitle: '(x)',
                    lineNumber: 1,
                    columnNumber: 2
                },
                {
                    title: 'bar',
                    subtitle: '(a, b)',
                    lineNumber: 2,
                    columnNumber: 2
                }
            ]);
        });
        it('for async function expressions', function() {
            assert.deepEqual(javaScriptOutline('const foo = async function() { };\n' + 'var sum = async (x, y) => x + y;'), [
                {
                    title: 'async foo',
                    subtitle: '()',
                    lineNumber: 0,
                    columnNumber: 6
                },
                {
                    title: 'async sum',
                    subtitle: '(x, y)',
                    lineNumber: 1,
                    columnNumber: 4
                }
            ]);
            assert.deepEqual(javaScriptOutline('obj.foo = async function() { return this; }'), [
                {
                    title: 'async foo',
                    subtitle: '()',
                    lineNumber: 0,
                    columnNumber: 4
                }
            ]);
            assert.deepEqual(javaScriptOutline('({\n' + '  async foo(x) { },\n' + '  async get x() { },\n' + '  async set x(x) { },\n' + '  bar: async function() {},\n' + ' })'), [
                {
                    title: 'async foo',
                    subtitle: '(x)',
                    lineNumber: 1,
                    columnNumber: 8
                },
                {
                    title: 'async get x',
                    subtitle: '()',
                    lineNumber: 2,
                    columnNumber: 12
                },
                {
                    title: 'async set x',
                    subtitle: '(x)',
                    lineNumber: 3,
                    columnNumber: 12
                },
                {
                    title: 'async bar',
                    subtitle: '()',
                    lineNumber: 4,
                    columnNumber: 2
                }
            ]);
        });
        it('for generator function expressions', function() {
            assert.deepEqual(javaScriptOutline('const foo = function*(x) { }\n' + 'var bar = async function*() {}'), [
                {
                    title: '*foo',
                    subtitle: '(x)',
                    lineNumber: 0,
                    columnNumber: 6
                },
                {
                    title: 'async *bar',
                    subtitle: '()',
                    lineNumber: 1,
                    columnNumber: 4
                }
            ]);
            assert.deepEqual(javaScriptOutline('const object = { foo: function*(x) { } };\n' + '({ *bar() {}, async *baz() {} })'), [
                {
                    title: '*foo',
                    subtitle: '(x)',
                    lineNumber: 0,
                    columnNumber: 17
                },
                {
                    title: '*bar',
                    subtitle: '()',
                    lineNumber: 1,
                    columnNumber: 4
                },
                {
                    title: 'async *baz',
                    subtitle: '()',
                    lineNumber: 1,
                    columnNumber: 21
                }
            ]);
        });
        it('for class statements', function() {
            assert.deepEqual(javaScriptOutline('class C {}'), [
                {
                    title: 'class C',
                    lineNumber: 0,
                    columnNumber: 6
                }
            ]);
            assert.deepEqual(javaScriptOutline('class MyAwesomeClass extends C {}'), [
                {
                    title: 'class MyAwesomeClass',
                    lineNumber: 0,
                    columnNumber: 6
                }
            ]);
        });
        it('for class expressions in variable declarations', function() {
            assert.deepEqual(javaScriptOutline('const C = class C {};\n' + 'let A = class extends C {};'), [
                {
                    title: 'class C',
                    lineNumber: 0,
                    columnNumber: 6
                },
                {
                    title: 'class A',
                    lineNumber: 1,
                    columnNumber: 4
                }
            ]);
        });
        it('for class expressions in property assignments', function() {
            assert.deepEqual(javaScriptOutline('a.b.c = class klass { };'), [
                {
                    title: 'class c',
                    lineNumber: 0,
                    columnNumber: 4
                }
            ]);
        });
        it('for class expressions in object literals', function() {
            assert.deepEqual(javaScriptOutline('const object = { klass: class { } }'), [
                {
                    title: 'class klass',
                    lineNumber: 0,
                    columnNumber: 17
                }
            ]);
        });
        it('for class constructors', function() {
            assert.deepEqual(javaScriptOutline('class Test { constructor(foo, bar) { }}'), [
                {
                    title: 'class Test',
                    lineNumber: 0,
                    columnNumber: 6
                },
                {
                    title: 'constructor',
                    subtitle: '(foo, bar)',
                    lineNumber: 0,
                    columnNumber: 13
                }
            ]);
        });
        it('for class methods', function() {
            assert.deepEqual(javaScriptOutline('class Test { foo() {} static bar() { }};\n' + '(class { baz() {} });'), [
                {
                    title: 'class Test',
                    lineNumber: 0,
                    columnNumber: 6
                },
                {
                    title: 'foo',
                    subtitle: '()',
                    lineNumber: 0,
                    columnNumber: 13
                },
                {
                    title: 'static bar',
                    subtitle: '()',
                    lineNumber: 0,
                    columnNumber: 29
                },
                {
                    title: 'baz',
                    subtitle: '()',
                    lineNumber: 1,
                    columnNumber: 9
                }
            ]);
            assert.deepEqual(javaScriptOutline('class A {\n' + '  get x() { return 1; }\n' + '  set x(x) {}\n' + '  async foo(){}\n' + '  *bar() {}\n' + '  async*baz() {}\n' + '  static async foo(){}\n' + '}'), [
                {
                    title: 'class A',
                    lineNumber: 0,
                    columnNumber: 6
                },
                {
                    title: 'get x',
                    subtitle: '()',
                    lineNumber: 1,
                    columnNumber: 6
                },
                {
                    title: 'set x',
                    subtitle: '(x)',
                    lineNumber: 2,
                    columnNumber: 6
                },
                {
                    title: 'async foo',
                    subtitle: '()',
                    lineNumber: 3,
                    columnNumber: 8
                },
                {
                    title: '*bar',
                    subtitle: '()',
                    lineNumber: 4,
                    columnNumber: 3
                },
                {
                    title: 'async *baz',
                    subtitle: '()',
                    lineNumber: 5,
                    columnNumber: 8
                },
                {
                    title: 'static async foo',
                    subtitle: '()',
                    lineNumber: 6,
                    columnNumber: 15
                }
            ]);
        });
        it('for private methods', function() {
            assert.deepEqual(javaScriptOutline('class A {\n' + '  private #foo() {}\n' + '  public static #bar(x) {}\n' + '  protected async #baz(){}\n' + '}'), [
                {
                    title: 'class A',
                    lineNumber: 0,
                    columnNumber: 6
                },
                {
                    title: '#foo',
                    subtitle: '()',
                    lineNumber: 1,
                    columnNumber: 10
                },
                {
                    title: 'static #bar',
                    subtitle: '(x)',
                    lineNumber: 2,
                    columnNumber: 16
                },
                {
                    title: 'async #baz',
                    subtitle: '()',
                    lineNumber: 3,
                    columnNumber: 18
                }
            ]);
        });
        it('even in the presence of syntax errors', function() {
            assert.deepEqual(javaScriptOutline("\nfunction foo(a, b) {\n  if (a > b) {\n    return a;\n}\n\nfunction bar(eee) {\n  yield foo(eee, 2 * eee);\n}"), [
                {
                    title: 'foo',
                    subtitle: '(a, b)',
                    lineNumber: 1,
                    columnNumber: 9
                },
                {
                    title: 'bar',
                    subtitle: '(eee)',
                    lineNumber: 6,
                    columnNumber: 9
                }
            ]);
        });
        it('for ES5-style class definitions', function() {
            assert.deepEqual(javaScriptOutline("var Klass = (function(_super) {\n  function Klass() {\n    _super.apply(this, arguments);\n  }\n\n  Klass.prototype.initialize = function(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n  return Klass;\n})(BaseKlass);\n"), [
                {
                    title: 'Klass',
                    subtitle: '()',
                    lineNumber: 1,
                    columnNumber: 11
                },
                {
                    title: 'initialize',
                    subtitle: '(x, y)',
                    lineNumber: 5,
                    columnNumber: 18
                }
            ]);
        });
    });
    describe('generates a correct JSX outline', function() {
        var jsxOutline = function jsxOutline(doc) {
            var extensions = [
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.javascript.javascript({
                    jsx: true
                })
            ];
            var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.create({
                doc: doc,
                extensions: extensions
            });
            return _sources_js__WEBPACK_IMPORTED_MODULE_2__.OutlineQuickOpen.outline(state);
        };
        it('for an empty script', function() {
            assert.deepEqual(jsxOutline(''), []);
        });
        it('for a simple hello world template', function() {
            assert.deepEqual(jsxOutline("\nfunction getGreeting(user) {\n  if (user) {\n    return <h1>Hello, {formatName(user)}!</h1>;\n  }\n  return <h1>Hello, Stranger.</h1>;\n}\n\nconst formatName = (name) => {\n  return <blink>{name}</blink>;\n}"), [
                {
                    title: 'getGreeting',
                    subtitle: '(user)',
                    lineNumber: 1,
                    columnNumber: 9
                },
                {
                    title: 'formatName',
                    subtitle: '(name)',
                    lineNumber: 8,
                    columnNumber: 6
                }
            ]);
        });
    });
    describe('generates a correct TypeScript outline', function() {
        var typeScriptOutline = function typeScriptOutline(doc) {
            var extensions = [
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.javascript.javascript({
                    typescript: true
                })
            ];
            var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.create({
                doc: doc,
                extensions: extensions
            });
            return _sources_js__WEBPACK_IMPORTED_MODULE_2__.OutlineQuickOpen.outline(state);
        };
        it('for an empty script', function() {
            assert.deepEqual(typeScriptOutline(''), []);
        });
        it('for function definitions with types', function() {
            assert.deepEqual(typeScriptOutline('function foo(x: T): T { return x; }\n' + 'async function func(param: Klass): Promise<Klass> { return param; }'), [
                {
                    title: 'foo',
                    subtitle: '(x)',
                    lineNumber: 0,
                    columnNumber: 9
                },
                {
                    title: 'async func',
                    subtitle: '(param)',
                    lineNumber: 1,
                    columnNumber: 15
                }
            ]);
            assert.deepEqual(typeScriptOutline('const sum = (o: {a: number; b: number, c: number}) => o.a + o.b + o.c;'), [
                {
                    title: 'sum',
                    subtitle: '(o)',
                    lineNumber: 0,
                    columnNumber: 6
                }
            ]);
        });
        it('for variable declarations with types', function() {
            assert.deepEqual(typeScriptOutline('let foo: (a: string) => string = a => a;\n' + 'const bar:(x:number,y:number)=>number = function(x:number, y:number) { return x + y; }'), [
                {
                    title: 'foo',
                    subtitle: '(a)',
                    lineNumber: 0,
                    columnNumber: 4
                },
                {
                    title: 'bar',
                    subtitle: '(x, y)',
                    lineNumber: 1,
                    columnNumber: 6
                }
            ]);
        });
        it('for classes, functions, and methods that use type parameters', function() {
            assert.deepEqual(typeScriptOutline('class Foo<Bar> {}'), [
                {
                    title: 'class Foo',
                    lineNumber: 0,
                    columnNumber: 6
                }
            ]);
            assert.deepEqual(typeScriptOutline('function foo<Bar>(bar: Bar): Bar { return new Bar(); }\n' + 'function bar<A, B, C>(): A { return a; }'), [
                {
                    title: 'foo',
                    subtitle: '(bar)',
                    lineNumber: 0,
                    columnNumber: 9
                },
                {
                    title: 'bar',
                    subtitle: '()',
                    lineNumber: 1,
                    columnNumber: 9
                }
            ]);
            assert.deepEqual(typeScriptOutline('class A { foo<D>(d: D): D { return d; } }'), [
                {
                    title: 'class A',
                    lineNumber: 0,
                    columnNumber: 6
                },
                {
                    title: 'foo',
                    subtitle: '(d)',
                    lineNumber: 0,
                    columnNumber: 10
                }
            ]);
        });
        it('for abstract classes', function() {
            assert.deepEqual(typeScriptOutline('abstract class Foo {};'), [
                {
                    title: 'class Foo',
                    lineNumber: 0,
                    columnNumber: 15
                }
            ]);
        });
        it('for abstract methods', function() {
            assert.deepEqual(typeScriptOutline('class Foo { abstract foo() {} abstract async bar() {} };'), [
                {
                    title: 'class Foo',
                    lineNumber: 0,
                    columnNumber: 6
                },
                {
                    title: 'abstract foo',
                    subtitle: '()',
                    lineNumber: 0,
                    columnNumber: 21
                },
                {
                    title: 'abstract async bar',
                    subtitle: '()',
                    lineNumber: 0,
                    columnNumber: 45
                }
            ]);
        });
        it('for overriden methods', function() {
            assert.deepEqual(typeScriptOutline('class Foo extends Bar {\n' + ' override foo() {}\n' + ' override *bar() {}\n' + '};'), [
                {
                    title: 'class Foo',
                    lineNumber: 0,
                    columnNumber: 6
                },
                {
                    title: 'foo',
                    subtitle: '()',
                    lineNumber: 1,
                    columnNumber: 10
                },
                {
                    title: '*bar',
                    subtitle: '()',
                    lineNumber: 2,
                    columnNumber: 11
                }
            ]);
        });
        it('for private methods', function() {
            assert.deepEqual(typeScriptOutline('class A {\n' + '  private #foo() {}\n' + '  public static #bar(x) {}\n' + '  protected async #baz(){}\n' + '}'), [
                {
                    title: 'class A',
                    lineNumber: 0,
                    columnNumber: 6
                },
                {
                    title: '#foo',
                    subtitle: '()',
                    lineNumber: 1,
                    columnNumber: 10
                },
                {
                    title: 'static #bar',
                    subtitle: '(x)',
                    lineNumber: 2,
                    columnNumber: 16
                },
                {
                    title: 'async #baz',
                    subtitle: '()',
                    lineNumber: 3,
                    columnNumber: 18
                }
            ]);
        });
        it('for classes and methods with privacy modifiers', function() {
            assert.deepEqual(typeScriptOutline('class A {\n' + '  private foo() {}\n' + '  public static bar(x) {}\n' + '  protected async baz(){}\n' + '}'), [
                {
                    title: 'class A',
                    lineNumber: 0,
                    columnNumber: 6
                },
                {
                    title: 'foo',
                    subtitle: '()',
                    lineNumber: 1,
                    columnNumber: 10
                },
                {
                    title: 'static bar',
                    subtitle: '(x)',
                    lineNumber: 2,
                    columnNumber: 16
                },
                {
                    title: 'async baz',
                    subtitle: '()',
                    lineNumber: 3,
                    columnNumber: 18
                }
            ]);
        });
        it('for functions and methods that use null types', function() {
            assert.deepEqual(typeScriptOutline('function foo():null { return null; }'), [
                {
                    title: 'foo',
                    subtitle: '()',
                    lineNumber: 0,
                    columnNumber: 9
                }
            ]);
            assert.deepEqual(typeScriptOutline('class Klass {\n' + '  foo(x:null):null { return x ?? null; }\n' + '    bar():null { return null; }\n' + '      baz():Klass|null { return this; }\n' + '}\n'), [
                {
                    title: 'class Klass',
                    lineNumber: 0,
                    columnNumber: 6
                },
                {
                    title: 'foo',
                    subtitle: '(x)',
                    lineNumber: 1,
                    columnNumber: 2
                },
                {
                    title: 'bar',
                    subtitle: '()',
                    lineNumber: 2,
                    columnNumber: 4
                },
                {
                    title: 'baz',
                    subtitle: '()',
                    lineNumber: 3,
                    columnNumber: 6
                }
            ]);
        });
        it('ignoring interface declarations', function() {
            assert.deepEqual(typeScriptOutline('interface IFoo { name(): string; }'), []);
        });
        it('for class expressions after extends', function() {
            var outline = typeScriptOutline('class A extends class { foo() } { bar() }');
            assert.lengthOf(outline, 3);
            assert.strictEqual(outline[0].title, 'class A');
            assert.strictEqual(outline[1].title, 'foo');
            assert.strictEqual(outline[2].title, 'bar');
        });
        describe('when using decorators', function() {
            it('on classes', function() {
                assert.deepEqual(typeScriptOutline('@Simple @Something.Complex({x: 1}) class A {\n' + '  constructor() {}\n' + '}\n'), [
                    {
                        title: 'class A',
                        lineNumber: 0,
                        columnNumber: 41
                    },
                    {
                        title: 'constructor',
                        subtitle: '()',
                        lineNumber: 1,
                        columnNumber: 2
                    }
                ]);
            });
            it('on methods', function() {
                assert.deepEqual(typeScriptOutline('new (class {\n' + '  @Simple @Something.Complex({x: 1}) onInit(x, y) {}\n' + '})\n'), [
                    {
                        title: 'onInit',
                        subtitle: '(x, y)',
                        lineNumber: 1,
                        columnNumber: 37
                    }
                ]);
            });
            it('on function parameters', function() {
                assert.deepEqual(typeScriptOutline('function foo(@Simple xyz, @Something.Complex({x: 1}) abc) {}'), [
                    {
                        title: 'foo',
                        subtitle: '(xyz, abc)',
                        lineNumber: 0,
                        columnNumber: 9
                    }
                ]);
            });
            it('on method parameters', function() {
                assert.deepEqual(typeScriptOutline('new (class {\n' + '  onInit(@Simple y, @Something.Complex({x: 1}) x) {}\n' + '})\n'), [
                    {
                        title: 'onInit',
                        subtitle: '(y, x)',
                        lineNumber: 1,
                        columnNumber: 2
                    }
                ]);
            });
        });
    });
    describe('generates a correct CSS outline', function() {
        var cssOutline = function cssOutline(doc) {
            var extensions = [
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.css.css()
            ];
            var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.create({
                doc: doc,
                extensions: extensions
            });
            return _sources_js__WEBPACK_IMPORTED_MODULE_2__.OutlineQuickOpen.outline(state);
        };
        it('for an empty style sheet', function() {
            assert.deepEqual(cssOutline(''), []);
        });
        it('for universal selectors', function() {
            assert.deepEqual(cssOutline('* { color: green; }\n' + '  *{\n' + '    background-color: red;\n' + '}'), [
                {
                    title: '*',
                    lineNumber: 0,
                    columnNumber: 0
                },
                {
                    title: '*',
                    lineNumber: 1,
                    columnNumber: 2
                }
            ]);
        });
        it('for type selectors', function() {
            assert.deepEqual(cssOutline('input {\n' + '  --custom-color: blue;\n' + '  color: var(--custom-color);\n' + '}\n' + 'a { font-size: 12px; };\n'), [
                {
                    title: 'input',
                    lineNumber: 0,
                    columnNumber: 0
                },
                {
                    title: 'a',
                    lineNumber: 4,
                    columnNumber: 0
                }
            ]);
        });
        it('for class selectors', function() {
            assert.deepEqual(cssOutline('  .large {\n' + '    font-size: 20px;\n' + '   }\n' + ' a.small { font-size: 12px; };\n'), [
                {
                    title: '.large',
                    lineNumber: 0,
                    columnNumber: 2
                },
                {
                    title: 'a.small',
                    lineNumber: 3,
                    columnNumber: 1
                }
            ]);
        });
        it('for ID selectors', function() {
            assert.deepEqual(cssOutline('#large {font-size: 20px;} button#small { font-size: 12px; };'), [
                {
                    title: '#large',
                    lineNumber: 0,
                    columnNumber: 0
                },
                {
                    title: 'button#small',
                    lineNumber: 0,
                    columnNumber: 26
                }
            ]);
        });
        it('for attribute selectors', function() {
            assert.deepEqual(cssOutline('[aria-label="Exit button"] {}\n' + 'details[open]{}\n' + 'a[href*="example"]\n'), [
                {
                    title: '[aria-label="Exit button"]',
                    lineNumber: 0,
                    columnNumber: 0
                },
                {
                    title: 'details[open]',
                    lineNumber: 1,
                    columnNumber: 0
                },
                {
                    title: 'a[href*="example"]',
                    lineNumber: 2,
                    columnNumber: 0
                }
            ]);
        });
        it('for selector lists', function() {
            assert.deepEqual(cssOutline('a#id1, a.cls1, hr { content: ""}'), [
                {
                    title: 'a#id1',
                    lineNumber: 0,
                    columnNumber: 0
                },
                {
                    title: 'a.cls1',
                    lineNumber: 0,
                    columnNumber: 7
                },
                {
                    title: 'hr',
                    lineNumber: 0,
                    columnNumber: 15
                }
            ]);
        });
        it('for combinators', function() {
            assert.deepEqual(cssOutline('div a {}\n' + '.dark > div {}\n' + '.light ~ div {}\n' + ' head + body{}\n'), [
                {
                    title: 'div a',
                    lineNumber: 0,
                    columnNumber: 0
                },
                {
                    title: '.dark > div',
                    lineNumber: 1,
                    columnNumber: 0
                },
                {
                    title: '.light ~ div',
                    lineNumber: 2,
                    columnNumber: 0
                },
                {
                    title: 'head + body',
                    lineNumber: 3,
                    columnNumber: 1
                }
            ]);
        });
        it('for pseudo-classes', function() {
            assert.deepEqual(cssOutline('a:visited{}button:hover{}\n' + ':host {}\n'), [
                {
                    title: 'a:visited',
                    lineNumber: 0,
                    columnNumber: 0
                },
                {
                    title: 'button:hover',
                    lineNumber: 0,
                    columnNumber: 11
                },
                {
                    title: ':host',
                    lineNumber: 1,
                    columnNumber: 0
                }
            ]);
        });
    });
    describe('generates a correct HTML outline', function() {
        var htmlOutline = function htmlOutline(doc) {
            var extensions = [
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.html.html()
            ];
            var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.create({
                doc: doc,
                extensions: extensions
            });
            return _sources_js__WEBPACK_IMPORTED_MODULE_2__.OutlineQuickOpen.outline(state);
        };
        it('for an empty document', function() {
            assert.deepEqual(htmlOutline('<!DOCTYPE html><html></html>'), []);
        });
        it('for a document with a single inline <script>', function() {
            assert.deepEqual(htmlOutline('<!DOCTYPE html><script>function foo(){}</script>'), [
                {
                    title: 'foo',
                    subtitle: '()',
                    lineNumber: 0,
                    columnNumber: 32
                }
            ]);
            assert.deepEqual(htmlOutline('<!DOCTYPE html>\n' + '<html>\n' + '  <head>\n' + '    <script type="text/javascript">\n' + '      async function bar(x) { return x; }\n' + '      function baz(a,b, ...rest) { return rest; };\n' + '    </script>\n' + '  </head>\n' + '</html>'), [
                {
                    title: 'async bar',
                    subtitle: '(x)',
                    lineNumber: 4,
                    columnNumber: 21
                },
                {
                    title: 'baz',
                    subtitle: '(a, b, ...rest)',
                    lineNumber: 5,
                    columnNumber: 15
                }
            ]);
            assert.deepEqual(htmlOutline("<script>\n  function first() {}\n  function IrrelevantFunctionSeekOrMissEKGFreqUnderflow() {}\n  function someFunction1() {}\n  function someFunction2() {}\n  debugger;\n</script>"), [
                {
                    title: 'first',
                    subtitle: '()',
                    lineNumber: 1,
                    columnNumber: 11
                },
                {
                    title: 'IrrelevantFunctionSeekOrMissEKGFreqUnderflow',
                    subtitle: '()',
                    lineNumber: 2,
                    columnNumber: 11
                },
                {
                    title: 'someFunction1',
                    subtitle: '()',
                    lineNumber: 3,
                    columnNumber: 11
                },
                {
                    title: 'someFunction2',
                    subtitle: '()',
                    lineNumber: 4,
                    columnNumber: 11
                }
            ]);
        });
        it('for a document with multiple inline <script>s', function() {
            assert.deepEqual(htmlOutline('<!DOCTYPE html>\n<html>\n  <head>\n    <script type="text/javascript">function add(x, y) { return x + y; }</script>\n  </head>\n  <body>\n    <script>\n      const sub = (a, b) => {\n        return x + y;\n      }\n    </script>\n  </body>\n</html>'), [
                {
                    title: 'add',
                    subtitle: '(x, y)',
                    lineNumber: 3,
                    columnNumber: 44
                },
                {
                    title: 'sub',
                    subtitle: '(a, b)',
                    lineNumber: 7,
                    columnNumber: 12
                }
            ]);
        });
        it('for a document with inline <script>s and <style>s', function() {
            assert.deepEqual(htmlOutline("<!DOCTYPE html>\n<html>\n<head>\n  <script>function add(x, y) { return x + y; }</script>\n  <style>\n    body { background-color: green; }\n  </style>\n</head>\n<body>\n<script defer>\nconst sub = (x, y) => x - y;\n</script>\n<style>\n:host {\n  --custom-variable: 5px;\n}\n</style>\n</body>\n</html>"), [
                {
                    title: 'add',
                    subtitle: '(x, y)',
                    lineNumber: 3,
                    columnNumber: 19
                },
                {
                    title: 'body',
                    lineNumber: 5,
                    columnNumber: 4
                },
                {
                    title: 'sub',
                    subtitle: '(x, y)',
                    lineNumber: 10,
                    columnNumber: 6
                },
                {
                    title: ':host',
                    lineNumber: 13,
                    columnNumber: 0
                }
            ]);
        });
        it('for a document with <script type="text/jsx">', function() {
            assert.deepEqual(htmlOutline('<!DOCTYPE html>\n' + '<html>\n' + '  <head>\n' + '    <script type="text/jsx">\n' + '      function hello(name) { return (<h1>Hello {name}</h1>); }\n' + '      function goodbye(name) { return (<h1>Goodbye, {name}, until next time!</h1>); };\n' + '    </script>\n' + '  </head>\n' + '</html>'), [
                {
                    title: 'hello',
                    subtitle: '(name)',
                    lineNumber: 4,
                    columnNumber: 15
                },
                {
                    title: 'goodbye',
                    subtitle: '(name)',
                    lineNumber: 5,
                    columnNumber: 15
                }
            ]);
        });
    });
    describe('generates a reasonable C++ outline', function() {
        var cppOutline = function cppOutline(doc) {
            var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.create({
                doc: doc,
                extensions: extensions
            });
            return _sources_js__WEBPACK_IMPORTED_MODULE_2__.OutlineQuickOpen.outline(state);
        };
        var extensions;
        before(/*#__PURE__*/ _async_to_generator(function() {
            var cpp;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.cpp()
                        ];
                    case 1:
                        cpp = _state.sent();
                        extensions = [
                            cpp.cpp()
                        ];
                        return [
                            2
                        ];
                }
            });
        }));
        it('for an empty program', function() {
            assert.deepEqual(cppOutline(''), []);
        });
        it('for a hello world program', function() {
            assert.deepEqual(cppOutline('#include <stdio.h>\n' + '\n' + 'int main(int argc, char** argv){\n' + '  printf("Hello world!\n");\n' + '  return 0;\n' + '}\n'), [
                {
                    title: 'main',
                    lineNumber: 2,
                    columnNumber: 4
                }
            ]);
        });
        it('for classes, structs, and methods', function() {
            assert.deepEqual(cppOutline('struct S {\n' + '  int foo(int x) { return x; }\n' + '};\n' + '\n' + 'class K {\n' + ' public:\n' + '  K& bar() { return *this; }\n' + '  static K*baz() { return nullptr; }\n' + '};\n'), [
                {
                    title: 'struct S',
                    lineNumber: 0,
                    columnNumber: 7
                },
                {
                    title: 'foo',
                    lineNumber: 1,
                    columnNumber: 6
                },
                {
                    title: 'class K',
                    lineNumber: 4,
                    columnNumber: 6
                },
                {
                    title: 'bar',
                    lineNumber: 6,
                    columnNumber: 5
                },
                {
                    title: 'baz',
                    lineNumber: 7,
                    columnNumber: 11
                }
            ]);
        });
    });
    describe('generates a correct WebAssembly outline', function() {
        var wastOutline = function wastOutline(doc) {
            var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.create({
                doc: doc,
                extensions: extensions
            });
            return _sources_js__WEBPACK_IMPORTED_MODULE_2__.OutlineQuickOpen.outline(state);
        };
        var extensions;
        before(/*#__PURE__*/ _async_to_generator(function() {
            var wast;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.wast()
                        ];
                    case 1:
                        wast = _state.sent();
                        extensions = [
                            wast.wast()
                        ];
                        return [
                            2
                        ];
                }
            });
        }));
        it('for empty modules', function() {
            assert.deepEqual(wastOutline('(module)'), []);
            assert.deepEqual(wastOutline('(module $foo)'), [
                {
                    title: '$foo',
                    lineNumber: 0,
                    columnNumber: 8
                }
            ]);
        });
        it('for named functions', function() {
            assert.deepEqual(wastOutline("(module\n  (func $add (param $lhs i32) (param $rhs i32) (result i32)\n    local.get $lhs\n    local.get $rhs\n    i32.add)\n  (func (param $x i32) (param $y) (result i32)\n    i32.const 1)\n  (func $id (param $x i32) (result i32))\n    local.get $x)\n)"), [
                {
                    title: '$add',
                    subtitle: '($lhs, $rhs)',
                    lineNumber: 1,
                    columnNumber: 8
                },
                {
                    title: '$id',
                    subtitle: '($x)',
                    lineNumber: 7,
                    columnNumber: 8
                }
            ]);
        });
        it('for functions with unnamed parameters', function() {
            assert.deepEqual(wastOutline("(module\n  (func $foo (param $x i32) (param i32) (param i64) (param $y f32) (result i32)\n    i32.const 42)\n  (func $bar (param i32) (result i32))\n    i32.const 21)\n)"), [
                {
                    title: '$foo',
                    subtitle: '($x, $1, $2, $y)',
                    lineNumber: 1,
                    columnNumber: 8
                },
                {
                    title: '$bar',
                    subtitle: '($0)',
                    lineNumber: 3,
                    columnNumber: 8
                }
            ]);
        });
    });
});
describe('OutlineQuickOpen', function() {
    var OutlineQuickOpen = _sources_js__WEBPACK_IMPORTED_MODULE_2__.OutlineQuickOpen.OutlineQuickOpen;
    it('reports no items before attached', function() {
        var provider = new OutlineQuickOpen();
        assert.strictEqual(provider.itemCount(), 0);
    });
    it('reports no items when attached while no SourcesView is active', function() {
        var provider = new OutlineQuickOpen();
        provider.attach();
        assert.strictEqual(provider.itemCount(), 0);
    });
    it('correctly scores items within a JavaScript file', function() {
        var scoredKeys = function scoredKeys(query) {
            var result = [];
            for(var i = 0; i < provider.itemCount(); ++i){
                result.push({
                    key: provider.itemKeyAt(i),
                    score: provider.itemScoreAt(i, query)
                });
            }
            result.sort(function(a, b) {
                return b.score - a.score;
            });
            return result.map(function(param) {
                var key = param.key;
                return key;
            });
        };
        var doc = "\nfunction testFoo(arg2) { }\nfunction test(arg1) { }\nfunction testBar(arg3) { }";
        var extensions = [
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.javascript.javascript()
        ];
        var textEditor = {
            state: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.create({
                doc: doc,
                extensions: extensions
            })
        };
        var sourceFrame = sinon.createStubInstance(_sources_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCodeFrame.UISourceCodeFrame);
        sourceFrame.editorLocationToUILocation.callThrough();
        sinon.stub(sourceFrame, 'textEditor').value(textEditor);
        var sourcesView = sinon.createStubInstance(_sources_js__WEBPACK_IMPORTED_MODULE_2__.SourcesView.SourcesView);
        sourcesView.currentSourceFrame.returns(sourceFrame);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Context.Context.instance().setFlavor(_sources_js__WEBPACK_IMPORTED_MODULE_2__.SourcesView.SourcesView, sourcesView);
        var provider = new OutlineQuickOpen();
        provider.attach();
        assert.deepEqual(scoredKeys('te'), [
            'testFoo(arg2)',
            'test(arg1)',
            'testBar(arg3)'
        ]);
        assert.deepEqual(scoredKeys('test'), [
            'test(arg1)',
            'testFoo(arg2)',
            'testBar(arg3)'
        ]);
        assert.deepEqual(scoredKeys('test('), [
            'test(arg1)',
            'testFoo(arg2)',
            'testBar(arg3)'
        ]);
        assert.deepEqual(scoredKeys('test(arg'), [
            'test(arg1)',
            'testFoo(arg2)',
            'testBar(arg3)'
        ]);
    });
}); //# sourceMappingURL=OutlineQuickOpen.test.js.map


}),

}]);