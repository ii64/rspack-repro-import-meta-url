"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_MutationHelpers_test_js"], {
"./testing/MutationHelpers.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MutationHelpers.js */ "./testing/MutationHelpers.js");
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
var _this = undefined;
function _templateObject() {
    var data = _tagged_template_literal([
        "<span>",
        "</span>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "<span>",
        "</span>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "<span>",
        "</span>"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "<span>",
        "</span>"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}



function assertThrowsAsync(fn, errorMessage) {
    return _assertThrowsAsync.apply(this, arguments);
}
function _assertThrowsAsync() {
    _assertThrowsAsync = /**
 * Needed because assert.throws from chai does not work async.
 */ _async_to_generator(function(fn, errorMessage) {
        var caught, e;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    caught = false;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        fn()
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    e = _state.sent();
                    caught = true;
                    assert.strictEqual(e.message, errorMessage);
                    return [
                        3,
                        4
                    ];
                case 4:
                    if (!caught) {
                        assert.fail('Expected error but got none.');
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return _assertThrowsAsync.apply(this, arguments);
}
function assertNotThrowsAsync(fn) {
    return _assertNotThrowsAsync.apply(this, arguments);
}
function _assertNotThrowsAsync() {
    _assertNotThrowsAsync = _async_to_generator(function(fn) {
        var errorMessage, e;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    errorMessage = '';
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        fn()
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    e = _state.sent();
                    errorMessage = e.message;
                    return [
                        3,
                        4
                    ];
                case 4:
                    if (errorMessage) {
                        assert.fail("Expected no error but got:\n".concat(errorMessage));
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return _assertNotThrowsAsync.apply(this, arguments);
}
describe('MutationHelpers', function() {
    describe('withMutations', function() {
        it('fails if there are no mutations', /*#__PURE__*/ _async_to_generator(function() {
            var div;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        div = document.createElement('div');
                        return [
                            4,
                            assertThrowsAsync(/*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([
                                                    {
                                                        target: 'div'
                                                    }
                                                ], div, function() {})
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }), 'Expected at least one mutation for ADD/REMOVE div, but got 0')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('allows up to 10 mutations unless specified', /*#__PURE__*/ _async_to_generator(function() {
            var div;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        div = document.createElement('div');
                        (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
                        return [
                            4,
                            assertNotThrowsAsync(/*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([
                                                    {
                                                        target: 'div'
                                                    }
                                                ], div, function() {
                                                    for(var i = 0; i < 10; i++){
                                                        div.appendChild(document.createElement('div'));
                                                    }
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }))
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('errors if there are >10 mutations', /*#__PURE__*/ _async_to_generator(function() {
            var div;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        div = document.createElement('div');
                        (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
                        return [
                            4,
                            assertThrowsAsync(/*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([
                                                    {
                                                        target: 'div'
                                                    }
                                                ], div, function() {
                                                    for(var i = 0; i < 11; i++){
                                                        div.appendChild(document.createElement('div'));
                                                    }
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }), 'Expected no more than 10 mutations for ADD/REMOVE div, but got 11')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('lets the user provide the max', /*#__PURE__*/ _async_to_generator(function() {
            var div;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        div = document.createElement('div');
                        (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
                        return [
                            4,
                            assertThrowsAsync(/*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([
                                                    {
                                                        target: 'div',
                                                        max: 5
                                                    }
                                                ], div, function() {
                                                    for(var i = 0; i < 6; i++){
                                                        div.appendChild(document.createElement('div'));
                                                    }
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }), 'Expected no more than 5 mutations for ADD/REMOVE div, but got 6')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('supports a max of 0', /*#__PURE__*/ _async_to_generator(function() {
            var div;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        div = document.createElement('div');
                        (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
                        return [
                            4,
                            assertThrowsAsync(/*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([
                                                    {
                                                        target: 'div',
                                                        max: 0
                                                    }
                                                ], div, function() {
                                                    div.appendChild(document.createElement('div'));
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }), 'Expected no more than 0 mutations for ADD/REMOVE div, but got 1')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('supports checking multiple expected mutations', /*#__PURE__*/ _async_to_generator(function() {
            var div;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        div = document.createElement('div');
                        (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
                        return [
                            4,
                            assertThrowsAsync(/*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([
                                                    {
                                                        target: 'div',
                                                        max: 1
                                                    },
                                                    {
                                                        target: 'span',
                                                        max: 0
                                                    }
                                                ], div, function() {
                                                    div.appendChild(document.createElement('div'));
                                                    div.appendChild(document.createElement('span'));
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }), 'Expected no more than 0 mutations for ADD/REMOVE span, but got 1')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('errors if other unexpected mutations occur', /*#__PURE__*/ _async_to_generator(function() {
            var div;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        div = document.createElement('div');
                        (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
                        return [
                            4,
                            assertThrowsAsync(/*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([
                                                    {
                                                        target: 'div',
                                                        max: 1
                                                    }
                                                ], div, function() {
                                                    // this is OK as we are expecting one div mutation
                                                    div.appendChild(document.createElement('div'));
                                                    // not OK - we have not declared any span mutations
                                                    div.appendChild(document.createElement('span'));
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }), 'Additional unexpected mutations were detected:\nspan: 1 addition')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        var _this1 = _this;
        it('lets you declare any expected text updates', /*#__PURE__*/ _async_to_generator(function() {
            var div, renderList;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        div = document.createElement('div');
                        renderList = function(list) {
                            var html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject1(), list.map(function(l) {
                                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject(), l);
                            }));
                            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(html, div, {
                                host: _this1
                            });
                        };
                        (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
                        renderList([
                            'a',
                            'b'
                        ]);
                        return [
                            4,
                            assertNotThrowsAsync(/*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([
                                                    {
                                                        target: 'div'
                                                    },
                                                    {
                                                        target: _MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.TEXT_NODE
                                                    }
                                                ], div, function(div) {
                                                    renderList([
                                                        'b',
                                                        'a'
                                                    ]);
                                                    div.appendChild(document.createElement('div'));
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }))
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        var _this2 = _this;
        it('fails if there are undeclared text updates', /*#__PURE__*/ _async_to_generator(function() {
            var div, renderList;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        div = document.createElement('div');
                        renderList = function(list) {
                            var html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject3(), list.map(function(l) {
                                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject2(), l);
                            }));
                            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(html, div, {
                                host: _this2
                            });
                        };
                        (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
                        renderList([
                            'a',
                            'b'
                        ]);
                        return [
                            4,
                            assertThrowsAsync(/*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([
                                                    {
                                                        target: 'div'
                                                    }
                                                ], div, function(div) {
                                                    renderList([
                                                        'b',
                                                        'a'
                                                    ]);
                                                    div.appendChild(document.createElement('div'));
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }), 'Additional unexpected mutations were detected:\nTEXT_NODE: 2 updates')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('withNoMutations', function() {
        it('fails if there are DOM additions', /*#__PURE__*/ _async_to_generator(function() {
            var div;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        div = document.createElement('div');
                        (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
                        return [
                            4,
                            assertThrowsAsync(/*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withNoMutations)(div, function(element) {
                                                    var child = document.createElement('span');
                                                    element.appendChild(child);
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }), 'Expected no mutations, but got 1: \nspan: 1 addition')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('fails if there are DOM removals', /*#__PURE__*/ _async_to_generator(function() {
            var div, child;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        div = document.createElement('div');
                        child = document.createElement('span');
                        div.appendChild(child);
                        (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
                        return [
                            4,
                            assertThrowsAsync(/*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withNoMutations)(div, function(element) {
                                                    element.removeChild(child);
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }), 'Expected no mutations, but got 1: \nspan: 1 removal')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('correctly displays multiple unexpected mutations', /*#__PURE__*/ _async_to_generator(function() {
            var div;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        div = document.createElement('div');
                        (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
                        return [
                            4,
                            assertThrowsAsync(/*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withNoMutations)(div, function(element) {
                                                    var child = document.createElement('span');
                                                    element.appendChild(child);
                                                    element.removeChild(child);
                                                    element.appendChild(document.createElement('p'));
                                                    element.appendChild(document.createElement('p'));
                                                    element.appendChild(document.createElement('p'));
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }), 'Expected no mutations, but got 5: \nspan: 1 addition, 1 removal\np: 3 additions')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        var _this1 = _this;
        it('fails if there are text re-orderings', /*#__PURE__*/ _async_to_generator(function() {
            var div, renderList;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        div = document.createElement('div');
                        renderList = function(list) {
                            var html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject5(), list.map(function(l) {
                                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject4(), l);
                            }));
                            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(html, div, {
                                host: _this1
                            });
                        };
                        (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
                        renderList([
                            'a',
                            'b'
                        ]);
                        return [
                            4,
                            assertThrowsAsync(/*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withNoMutations)(div, function() {
                                                    renderList([
                                                        'b',
                                                        'a'
                                                    ]);
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }), 'Expected no mutations, but got 2: \nTEXT_NODE: 2 updates')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        var _this2 = _this;
        it('fails if there are text re-orderings and DOM additions', /*#__PURE__*/ _async_to_generator(function() {
            var div, renderList;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        div = document.createElement('div');
                        renderList = function(list) {
                            var html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject7(), list.map(function(l) {
                                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject6(), l);
                            }));
                            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(html, div, {
                                host: _this2
                            });
                        };
                        (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
                        renderList([
                            'a',
                            'b'
                        ]);
                        return [
                            4,
                            assertThrowsAsync(/*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withNoMutations)(div, function(div) {
                                                    renderList([
                                                        'b',
                                                        'a'
                                                    ]);
                                                    div.appendChild(document.createElement('ul'));
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }), 'Expected no mutations, but got 3: \nTEXT_NODE: 2 updates\nul: 1 addition')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=MutationHelpers.test.js.map


}),

}]);