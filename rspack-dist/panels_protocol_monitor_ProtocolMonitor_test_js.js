"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_protocol_monitor_ProtocolMonitor_test_js"], {
"./panels/protocol_monitor/ProtocolMonitor.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./protocol_monitor.js */ "./panels/protocol_monitor/protocol_monitor.js");
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

describe('ProtocolMonitor', function() {
    describe('parseCommandInput', function() {
        it('parses various JSON formats', /*#__PURE__*/ _async_to_generator(function() {
            var input;
            return _ts_generator(this, function(_state) {
                input = {
                    command: 'Input.dispatchMouseEvent',
                    parameters: {
                        parameter1: 'value1'
                    }
                };
                // "command" variations.
                assert.deepStrictEqual(_protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.parseCommandInput(JSON.stringify({
                    command: input.command,
                    parameters: input.parameters
                })), input);
                assert.deepStrictEqual(_protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.parseCommandInput(JSON.stringify({
                    cmd: input.command,
                    parameters: input.parameters
                })), input);
                assert.deepStrictEqual(_protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.parseCommandInput(JSON.stringify({
                    method: input.command,
                    parameters: input.parameters
                })), input);
                // "parameters" variations.
                assert.deepStrictEqual(_protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.parseCommandInput(JSON.stringify({
                    command: input.command,
                    params: input.parameters
                })), input);
                assert.deepStrictEqual(_protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.parseCommandInput(JSON.stringify({
                    cmd: input.command,
                    args: input.parameters
                })), input);
                assert.deepStrictEqual(_protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.parseCommandInput(JSON.stringify({
                    method: input.command,
                    arguments: input.parameters
                })), input);
                return [
                    2
                ];
            });
        }));
        it('parses non-JSON data as a command name', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                assert.deepStrictEqual(_protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.parseCommandInput('Input.dispatchMouseEvent'), {
                    command: 'Input.dispatchMouseEvent',
                    parameters: {}
                });
                return [
                    2
                ];
            });
        }));
        it('should correctly creates a map of CDP commands with their corresponding metadata', /*#__PURE__*/ _async_to_generator(function() {
            var domains, expectedCommands, metadataByCommand;
            return _ts_generator(this, function(_state) {
                domains = [
                    {
                        domain: 'Test',
                        metadata: {
                            'Test.test': {
                                parameters: [
                                    {
                                        name: 'test',
                                        type: 'test',
                                        optional: true
                                    }
                                ],
                                description: 'Description1',
                                replyArgs: [
                                    'Test1'
                                ]
                            }
                        }
                    },
                    {
                        domain: 'Test2',
                        metadata: {
                            'Test2.test2': {
                                parameters: [
                                    {
                                        name: 'test2',
                                        type: 'test2',
                                        optional: true
                                    }
                                ],
                                description: 'Description2',
                                replyArgs: [
                                    'Test2'
                                ]
                            },
                            'Test2.test3': {
                                parameters: [
                                    {
                                        name: 'test3',
                                        type: 'test3',
                                        optional: true
                                    }
                                ],
                                description: 'Description3',
                                replyArgs: [
                                    'Test3'
                                ]
                            }
                        }
                    }
                ];
                expectedCommands = new Map();
                expectedCommands.set('Test.test', {
                    parameters: [
                        {
                            name: 'test',
                            type: 'test',
                            optional: true
                        }
                    ],
                    description: 'Description1',
                    replyArgs: [
                        'Test1'
                    ]
                });
                expectedCommands.set('Test2.test2', {
                    parameters: [
                        {
                            name: 'test2',
                            type: 'test2',
                            optional: true
                        }
                    ],
                    description: 'Description2',
                    replyArgs: [
                        'Test2'
                    ]
                });
                expectedCommands.set('Test2.test3', {
                    parameters: [
                        {
                            name: 'test3',
                            type: 'test3',
                            optional: true
                        }
                    ],
                    description: 'Description3',
                    replyArgs: [
                        'Test3'
                    ]
                });
                metadataByCommand = _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.buildProtocolMetadata(domains);
                assert.deepStrictEqual(metadataByCommand, expectedCommands);
                return [
                    2
                ];
            });
        }));
    });
    describe('HistoryAutocompleteDataProvider', function() {
        it('should create completions with no history', /*#__PURE__*/ _async_to_generator(function() {
            var provider, _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        provider = new _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.CommandAutocompleteSuggestionProvider();
                        _ = assert.deepStrictEqual;
                        return [
                            4,
                            provider.buildTextPromptCompletions('test', 'test')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            []
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should build completions in the reverse insertion order', /*#__PURE__*/ _async_to_generator(function() {
            var provider, _, _1;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        provider = new _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.CommandAutocompleteSuggestionProvider();
                        provider.addEntry('test1');
                        provider.addEntry('test2');
                        provider.addEntry('test3');
                        _ = assert.deepStrictEqual;
                        return [
                            4,
                            provider.buildTextPromptCompletions('test', 'test')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            [
                                {
                                    text: 'test3'
                                },
                                {
                                    text: 'test2'
                                },
                                {
                                    text: 'test1'
                                }
                            ]
                        ]);
                        provider.addEntry('test1');
                        _1 = assert.deepStrictEqual;
                        return [
                            4,
                            provider.buildTextPromptCompletions('test', 'test')
                        ];
                    case 2:
                        _1.apply(assert, [
                            _state.sent(),
                            [
                                {
                                    text: 'test1'
                                },
                                {
                                    text: 'test3'
                                },
                                {
                                    text: 'test2'
                                }
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should limit the number of completions', /*#__PURE__*/ _async_to_generator(function() {
            var provider, _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        provider = new _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.CommandAutocompleteSuggestionProvider(2);
                        provider.addEntry('test1');
                        provider.addEntry('test2');
                        provider.addEntry('test3');
                        _ = assert.deepStrictEqual;
                        return [
                            4,
                            provider.buildTextPromptCompletions('test', 'test')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            [
                                {
                                    text: 'test3'
                                },
                                {
                                    text: 'test2'
                                }
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=ProtocolMonitor.test.js.map


}),
"./panels/protocol_monitor/protocol_monitor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProtocolMonitor: function() { return /* reexport module object */ _ProtocolMonitor_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ProtocolMonitor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProtocolMonitor.js */ "./panels/protocol_monitor/ProtocolMonitor.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 //# sourceMappingURL=protocol_monitor.js.map


}),

}]);