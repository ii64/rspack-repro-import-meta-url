"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_freestyler_FreestylerAgent_test_js"], {
"./panels/freestyler/FreestylerAgent.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _freestyler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./freestyler.js */ "./panels/freestyler/freestyler.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _async_generator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) {
                back = back.next = request;
            } else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg) {
        try {
            var result = gen[key](arg);
            var value = result.value;
            var wrappedAwait = value instanceof _await_value;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) {
            resume(front.key, front.arg);
        } else {
            back = null;
        }
    }
    this._invoke = send;
    if (typeof gen.return !== "function") {
        this.return = undefined;
    }
}
if (typeof Symbol === "function" && Symbol.asyncIterator) {
    _async_generator.prototype[Symbol.asyncIterator] = function() {
        return this;
    };
}
_async_generator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
_async_generator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
_async_generator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};
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
function _await_value(value) {
    this.wrapped = value;
}
function _wrap_async_generator(fn) {
    return function() {
        return new _async_generator(fn.apply(this, arguments));
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



var FreestylerAgent = _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.FreestylerAgent;
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('FreestylerAgent', function() {
    var mockHostConfig = function mockHostConfig(modelId) {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getGetHostConfigStub)({
            devToolsFreestylerDogfood: {
                aidaModelId: modelId
            }
        });
    };
    describe('parseResponse', function() {
        it('parses a thought', /*#__PURE__*/ _async_to_generator(function() {
            var payload;
            return _ts_generator(this, function(_state) {
                payload = 'some response';
                assert.deepStrictEqual(FreestylerAgent.parseResponse("THOUGHT: ".concat(payload)), {
                    action: undefined,
                    thought: payload,
                    answer: undefined
                });
                assert.deepStrictEqual(FreestylerAgent.parseResponse("   THOUGHT: ".concat(payload)), {
                    action: undefined,
                    thought: payload,
                    answer: undefined
                });
                assert.deepStrictEqual(FreestylerAgent.parseResponse("Something\n   THOUGHT: ".concat(payload)), {
                    action: undefined,
                    thought: payload,
                    answer: undefined
                });
                return [
                    2
                ];
            });
        }));
        it('parses a answer', /*#__PURE__*/ _async_to_generator(function() {
            var payload;
            return _ts_generator(this, function(_state) {
                payload = 'some response';
                assert.deepStrictEqual(FreestylerAgent.parseResponse("ANSWER: ".concat(payload)), {
                    action: undefined,
                    thought: undefined,
                    answer: payload
                });
                assert.deepStrictEqual(FreestylerAgent.parseResponse("   ANSWER: ".concat(payload)), {
                    action: undefined,
                    thought: undefined,
                    answer: payload
                });
                assert.deepStrictEqual(FreestylerAgent.parseResponse("Something\n   ANSWER: ".concat(payload)), {
                    action: undefined,
                    thought: undefined,
                    answer: payload
                });
                return [
                    2
                ];
            });
        }));
        it('parses a multiline answer', /*#__PURE__*/ _async_to_generator(function() {
            var payload;
            return _ts_generator(this, function(_state) {
                payload = "a\nb\nc";
                assert.deepStrictEqual(FreestylerAgent.parseResponse("ANSWER: ".concat(payload)), {
                    action: undefined,
                    thought: undefined,
                    answer: payload
                });
                assert.deepStrictEqual(FreestylerAgent.parseResponse("   ANSWER: ".concat(payload)), {
                    action: undefined,
                    thought: undefined,
                    answer: payload
                });
                assert.deepStrictEqual(FreestylerAgent.parseResponse("Something\n   ANSWER: ".concat(payload)), {
                    action: undefined,
                    thought: undefined,
                    answer: payload
                });
                assert.deepStrictEqual(FreestylerAgent.parseResponse("ANSWER: ".concat(payload, "\nTHOUGHT: thought")), {
                    action: undefined,
                    thought: 'thought',
                    answer: payload
                });
                assert.deepStrictEqual(FreestylerAgent.parseResponse("ANSWER: ".concat(payload, "\nOBSERVATION: observation")), {
                    action: undefined,
                    thought: undefined,
                    answer: payload
                });
                assert.deepStrictEqual(FreestylerAgent.parseResponse("ANSWER: ".concat(payload, "\nACTION\naction\nSTOP")), {
                    action: 'action',
                    thought: undefined,
                    answer: payload
                });
                return [
                    2
                ];
            });
        }));
        it('parses an action', /*#__PURE__*/ _async_to_generator(function() {
            var payload;
            return _ts_generator(this, function(_state) {
                payload = 'const data = {\n  someKey: "value",\n}';
                assert.deepStrictEqual(FreestylerAgent.parseResponse("ACTION\n".concat(payload, "\nSTOP")), {
                    action: payload,
                    thought: undefined,
                    answer: undefined
                });
                assert.deepStrictEqual(FreestylerAgent.parseResponse("ACTION\n".concat(payload)), {
                    action: payload,
                    thought: undefined,
                    answer: undefined
                });
                assert.deepStrictEqual(FreestylerAgent.parseResponse("ACTION\n\n".concat(payload, "\n\nSTOP")), {
                    action: payload,
                    thought: undefined,
                    answer: undefined
                });
                return [
                    2
                ];
            });
        }));
        it('parses an action with backticks in the code', /*#__PURE__*/ _async_to_generator(function() {
            var payload;
            return _ts_generator(this, function(_state) {
                payload = 'const data = {\n  someKey: "value",\n}';
                assert.deepStrictEqual(FreestylerAgent.parseResponse("ACTION\n```\n".concat(payload, "\n```\nSTOP")), {
                    action: payload,
                    thought: undefined,
                    answer: undefined
                });
                return [
                    2
                ];
            });
        }));
        it('parses an action with 5 backticks in the code and `js` text in the prelude', /*#__PURE__*/ _async_to_generator(function() {
            var payload;
            return _ts_generator(this, function(_state) {
                payload = 'const data = {\n  someKey: "value",\n}';
                assert.deepStrictEqual(FreestylerAgent.parseResponse("ACTION\n`````\njs\n".concat(payload, "\n`````\nSTOP")), {
                    action: payload,
                    thought: undefined,
                    answer: undefined
                });
                return [
                    2
                ];
            });
        }));
        it('parses a thought and an action', /*#__PURE__*/ _async_to_generator(function() {
            var actionPayload, thoughtPayload;
            return _ts_generator(this, function(_state) {
                actionPayload = 'const data = {\n  someKey: "value",\n}';
                thoughtPayload = 'thought';
                assert.deepStrictEqual(FreestylerAgent.parseResponse("THOUGHT:".concat(thoughtPayload, "\nACTION\n").concat(actionPayload, "\nSTOP")), {
                    action: actionPayload,
                    thought: thoughtPayload,
                    answer: undefined
                });
                return [
                    2
                ];
            });
        }));
        it('parses a response as an answer', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                assert.deepStrictEqual(FreestylerAgent.parseResponse('This is also an answer'), {
                    action: undefined,
                    thought: undefined,
                    answer: 'This is also an answer'
                });
                return [
                    2
                ];
            });
        }));
    });
    describe('buildRequest', function() {
        beforeEach(function() {
            sinon.restore();
        });
        it('builds a request with a model id', /*#__PURE__*/ _async_to_generator(function() {
            var _FreestylerAgent_buildRequest_options;
            return _ts_generator(this, function(_state) {
                mockHostConfig('test model');
                assert.strictEqual((_FreestylerAgent_buildRequest_options = FreestylerAgent.buildRequest({
                    input: 'test input'
                }).options) === null || _FreestylerAgent_buildRequest_options === void 0 ? void 0 : _FreestylerAgent_buildRequest_options.model_id, 'test model');
                return [
                    2
                ];
            });
        }));
        it('builds a request with logging', /*#__PURE__*/ _async_to_generator(function() {
            var _FreestylerAgent_buildRequest_metadata;
            return _ts_generator(this, function(_state) {
                mockHostConfig('test model');
                assert.strictEqual((_FreestylerAgent_buildRequest_metadata = FreestylerAgent.buildRequest({
                    input: 'test input',
                    serverSideLoggingEnabled: true
                }).metadata) === null || _FreestylerAgent_buildRequest_metadata === void 0 ? void 0 : _FreestylerAgent_buildRequest_metadata.disable_user_content_logging, false);
                return [
                    2
                ];
            });
        }));
        it('builds a request without logging', /*#__PURE__*/ _async_to_generator(function() {
            var _FreestylerAgent_buildRequest_metadata;
            return _ts_generator(this, function(_state) {
                mockHostConfig('test model');
                assert.strictEqual((_FreestylerAgent_buildRequest_metadata = FreestylerAgent.buildRequest({
                    input: 'test input',
                    serverSideLoggingEnabled: false
                }).metadata) === null || _FreestylerAgent_buildRequest_metadata === void 0 ? void 0 : _FreestylerAgent_buildRequest_metadata.disable_user_content_logging, true);
                return [
                    2
                ];
            });
        }));
        it('builds a request with input', /*#__PURE__*/ _async_to_generator(function() {
            var request;
            return _ts_generator(this, function(_state) {
                mockHostConfig();
                request = FreestylerAgent.buildRequest({
                    input: 'test input'
                });
                assert.strictEqual(request.input, 'test input');
                assert.strictEqual(request.preamble, undefined);
                assert.strictEqual(request.chat_history, undefined);
                return [
                    2
                ];
            });
        }));
        it('builds a request with a sessionId', /*#__PURE__*/ _async_to_generator(function() {
            var _request_metadata, request;
            return _ts_generator(this, function(_state) {
                mockHostConfig();
                request = FreestylerAgent.buildRequest({
                    input: 'test input',
                    sessionId: 'sessionId'
                });
                assert.strictEqual((_request_metadata = request.metadata) === null || _request_metadata === void 0 ? void 0 : _request_metadata.string_session_id, 'sessionId');
                return [
                    2
                ];
            });
        }));
        it('builds a request with preamble', /*#__PURE__*/ _async_to_generator(function() {
            var request;
            return _ts_generator(this, function(_state) {
                mockHostConfig();
                request = FreestylerAgent.buildRequest({
                    input: 'test input',
                    preamble: 'preamble'
                });
                assert.strictEqual(request.input, 'test input');
                assert.strictEqual(request.preamble, 'preamble');
                assert.strictEqual(request.chat_history, undefined);
                return [
                    2
                ];
            });
        }));
        it('builds a request with chat history', /*#__PURE__*/ _async_to_generator(function() {
            var request;
            return _ts_generator(this, function(_state) {
                mockHostConfig();
                request = FreestylerAgent.buildRequest({
                    input: 'test input',
                    chatHistory: [
                        {
                            text: 'test',
                            entity: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.Entity.USER
                        }
                    ]
                });
                assert.strictEqual(request.input, 'test input');
                assert.strictEqual(request.preamble, undefined);
                assert.deepStrictEqual(request.chat_history, [
                    {
                        text: 'test',
                        entity: 1
                    }
                ]);
                return [
                    2
                ];
            });
        }));
        it('structure matches the snapshot', function() {
            mockHostConfig('test model');
            assert.deepStrictEqual(FreestylerAgent.buildRequest({
                input: 'test input',
                preamble: 'preamble',
                chatHistory: [
                    {
                        text: 'first',
                        entity: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.Entity.UNKNOWN
                    },
                    {
                        text: 'second',
                        entity: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.Entity.SYSTEM
                    },
                    {
                        text: 'third',
                        entity: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.Entity.USER
                    }
                ],
                serverSideLoggingEnabled: true,
                sessionId: 'sessionId'
            }), {
                input: 'test input',
                client: 'CHROME_DEVTOOLS',
                preamble: 'preamble',
                chat_history: [
                    {
                        entity: 0,
                        text: 'first'
                    },
                    {
                        entity: 2,
                        text: 'second'
                    },
                    {
                        entity: 1,
                        text: 'third'
                    }
                ],
                metadata: {
                    disable_user_content_logging: false,
                    string_session_id: 'sessionId'
                },
                options: {
                    model_id: 'test model',
                    temperature: 0
                },
                client_feature: 2,
                functionality_type: 1
            });
        });
    });
    describe('run', function() {
        var mockAidaClient = function mockAidaClient(fetch) {
            return {
                fetch: fetch,
                registerClientEvent: function() {
                    return Promise.resolve({});
                }
            };
        };
        beforeEach(function() {
            mockHostConfig();
        });
        describe('side effect handling', function() {
            it('calls confirmSideEffect when the code execution contains a side effect', /*#__PURE__*/ _async_to_generator(function() {
                var count, execJs, confirmSideEffect, agent;
                function generateActionAndAnswer() {
                    return _generateActionAndAnswer.apply(this, arguments);
                }
                function _generateActionAndAnswer() {
                    _generateActionAndAnswer = _wrap_async_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!(count === 0)) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        {
                                            explanation: "ACTION\n              $0.style.backgroundColor = 'red'\n              STOP",
                                            metadata: {}
                                        }
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        3,
                                        4
                                    ];
                                case 2:
                                    return [
                                        4,
                                        {
                                            explanation: 'ANSWER: This is the answer',
                                            metadata: {}
                                        }
                                    ];
                                case 3:
                                    _state.sent();
                                    _state.label = 4;
                                case 4:
                                    count++;
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return _generateActionAndAnswer.apply(this, arguments);
                }
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            count = 0;
                            execJs = sinon.mock().throws(new _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.SideEffectError('EvalError: Possible side-effect in debug-evaluate'));
                            confirmSideEffect = sinon.mock().resolves(false);
                            agent = new FreestylerAgent({
                                aidaClient: mockAidaClient(generateActionAndAnswer),
                                confirmSideEffect: confirmSideEffect,
                                execJs: execJs
                            });
                            return [
                                4,
                                Array.fromAsync(agent.run('test'))
                            ];
                        case 1:
                            _state.sent();
                            sinon.assert.match(execJs.getCall(0).args[1], sinon.match({
                                throwOnSideEffect: true
                            }));
                            sinon.assert.calledOnce(confirmSideEffect);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('calls execJs with allowing side effects when confirmSideEffect resolves to true', /*#__PURE__*/ _async_to_generator(function() {
                var count, execJs, confirmSideEffect, agent;
                function generateActionAndAnswer() {
                    return _generateActionAndAnswer.apply(this, arguments);
                }
                function _generateActionAndAnswer() {
                    _generateActionAndAnswer = _wrap_async_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!(count === 0)) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        {
                                            explanation: "ACTION\n              $0.style.backgroundColor = 'red'\n              STOP",
                                            metadata: {}
                                        }
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        3,
                                        4
                                    ];
                                case 2:
                                    return [
                                        4,
                                        {
                                            explanation: 'ANSWER: This is the answer',
                                            metadata: {}
                                        }
                                    ];
                                case 3:
                                    _state.sent();
                                    _state.label = 4;
                                case 4:
                                    count++;
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return _generateActionAndAnswer.apply(this, arguments);
                }
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            count = 0;
                            execJs = sinon.mock().twice();
                            execJs.onCall(0).throws(new _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.SideEffectError('EvalError: Possible side-effect in debug-evaluate'));
                            execJs.onCall(1).resolves('value');
                            confirmSideEffect = sinon.mock().resolves(true);
                            agent = new FreestylerAgent({
                                aidaClient: mockAidaClient(generateActionAndAnswer),
                                confirmSideEffect: confirmSideEffect,
                                execJs: execJs
                            });
                            return [
                                4,
                                Array.fromAsync(agent.run('test'))
                            ];
                        case 1:
                            _state.sent();
                            sinon.assert.calledOnce(confirmSideEffect);
                            assert.strictEqual(execJs.getCalls().length, 2);
                            sinon.assert.match(execJs.getCall(1).args[1], sinon.match({
                                throwOnSideEffect: false
                            }));
                            return [
                                2
                            ];
                    }
                });
            }));
            it('returns side effect error when confirmSideEffect resolves to false', /*#__PURE__*/ _async_to_generator(function() {
                var count, execJs, confirmSideEffect, agent, steps, actionStep;
                function generateActionAndAnswer() {
                    return _generateActionAndAnswer.apply(this, arguments);
                }
                function _generateActionAndAnswer() {
                    _generateActionAndAnswer = _wrap_async_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!(count === 0)) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        {
                                            explanation: "ACTION\n              $0.style.backgroundColor = 'red'\n              STOP",
                                            metadata: {}
                                        }
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        3,
                                        4
                                    ];
                                case 2:
                                    return [
                                        4,
                                        {
                                            explanation: 'ANSWER: This is the answer',
                                            metadata: {}
                                        }
                                    ];
                                case 3:
                                    _state.sent();
                                    _state.label = 4;
                                case 4:
                                    count++;
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return _generateActionAndAnswer.apply(this, arguments);
                }
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            count = 0;
                            execJs = sinon.mock().twice();
                            execJs.onCall(0).throws(new _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.SideEffectError('EvalError: Possible side-effect in debug-evaluate'));
                            confirmSideEffect = sinon.mock().resolves(false);
                            agent = new FreestylerAgent({
                                aidaClient: mockAidaClient(generateActionAndAnswer),
                                confirmSideEffect: confirmSideEffect,
                                execJs: execJs
                            });
                            return [
                                4,
                                Array.fromAsync(agent.run('test'))
                            ];
                        case 1:
                            steps = _state.sent();
                            actionStep = steps.find(function(step) {
                                return step.step === _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ACTION;
                            });
                            sinon.assert.calledOnce(confirmSideEffect);
                            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */ assert.strictEqual(actionStep.output, 'Error: EvalError: Possible side-effect in debug-evaluate');
                            assert.strictEqual(execJs.getCalls().length, 1);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('calls execJs with allowing side effects when the query includes "Fix this issue" prompt', /*#__PURE__*/ _async_to_generator(function() {
                var count, execJs, confirmSideEffect, agent, optionsArg;
                function generateActionAndAnswer() {
                    return _generateActionAndAnswer.apply(this, arguments);
                }
                function _generateActionAndAnswer() {
                    _generateActionAndAnswer = _wrap_async_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!(count === 0)) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        {
                                            explanation: "ACTION\n              $0.style.backgroundColor = 'red'\n              STOP",
                                            metadata: {}
                                        }
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        3,
                                        4
                                    ];
                                case 2:
                                    return [
                                        4,
                                        {
                                            explanation: 'ANSWER: This is the answer',
                                            metadata: {}
                                        }
                                    ];
                                case 3:
                                    _state.sent();
                                    _state.label = 4;
                                case 4:
                                    count++;
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return _generateActionAndAnswer.apply(this, arguments);
                }
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            count = 0;
                            execJs = sinon.mock().once();
                            confirmSideEffect = sinon.mock();
                            agent = new FreestylerAgent({
                                aidaClient: mockAidaClient(generateActionAndAnswer),
                                confirmSideEffect: confirmSideEffect,
                                execJs: execJs
                            });
                            return [
                                4,
                                Array.fromAsync(agent.run(_freestyler_js__WEBPACK_IMPORTED_MODULE_2__.FIX_THIS_ISSUE_PROMPT, {
                                    isFixQuery: true
                                }))
                            ];
                        case 1:
                            _state.sent();
                            optionsArg = execJs.lastCall.args[1];
                            sinon.assert.notCalled(confirmSideEffect);
                            sinon.assert.match(optionsArg, sinon.match({
                                throwOnSideEffect: false
                            }));
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('long `Observation` text handling', function() {
            it('errors with too long input', /*#__PURE__*/ _async_to_generator(function() {
                var count, execJs, confirmSideEffect, agent, result, lastStepData;
                function generateActionAndAnswer() {
                    return _generateActionAndAnswer.apply(this, arguments);
                }
                function _generateActionAndAnswer() {
                    _generateActionAndAnswer = _wrap_async_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!(count === 0)) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        {
                                            explanation: "ACTION\n              $0.style.backgroundColor = 'red'\n              STOP",
                                            metadata: {}
                                        }
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        3,
                                        4
                                    ];
                                case 2:
                                    return [
                                        4,
                                        {
                                            explanation: 'ANSWER: This is the answer',
                                            metadata: {}
                                        }
                                    ];
                                case 3:
                                    _state.sent();
                                    _state.label = 4;
                                case 4:
                                    count++;
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return _generateActionAndAnswer.apply(this, arguments);
                }
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            count = 0;
                            execJs = sinon.mock().returns(new Array(10000).fill('<div>...</div>').join());
                            confirmSideEffect = sinon.mock().resolves(false);
                            agent = new FreestylerAgent({
                                aidaClient: mockAidaClient(generateActionAndAnswer),
                                confirmSideEffect: confirmSideEffect,
                                execJs: execJs
                            });
                            return [
                                4,
                                Array.fromAsync(agent.run('test'))
                            ];
                        case 1:
                            result = _state.sent();
                            lastStepData = result.at(-3);
                            assert(lastStepData.step === _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ACTION, 'Not an Action step');
                            assert(lastStepData.output.includes('Error: Output exceeded the maximum allowed length.'));
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        it('generates an answer immediately', /*#__PURE__*/ _async_to_generator(function() {
            var execJs, agent, steps;
            function generateAnswer() {
                return _generateAnswer.apply(this, arguments);
            }
            function _generateAnswer() {
                _generateAnswer = _wrap_async_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    {
                                        explanation: 'ANSWER: this is the answer',
                                        metadata: {}
                                    }
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                });
                return _generateAnswer.apply(this, arguments);
            }
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        execJs = sinon.spy();
                        agent = new FreestylerAgent({
                            aidaClient: mockAidaClient(generateAnswer),
                            confirmSideEffect: function() {
                                return Promise.resolve(true);
                            },
                            execJs: execJs
                        });
                        return [
                            4,
                            Array.fromAsync(agent.run('test'))
                        ];
                    case 1:
                        steps = _state.sent();
                        assert.deepStrictEqual(steps, [
                            {
                                step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.QUERYING
                            },
                            {
                                step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ANSWER,
                                text: 'this is the answer',
                                rpcId: undefined
                            }
                        ]);
                        sinon.assert.notCalled(execJs);
                        assert.deepStrictEqual(agent.chatHistoryForTesting, [
                            {
                                entity: 1,
                                text: 'QUERY: test'
                            },
                            {
                                entity: 2,
                                text: 'ANSWER: this is the answer'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('generates an rpcId for the answer', /*#__PURE__*/ _async_to_generator(function() {
            var agent, steps;
            function generateAnswer() {
                return _generateAnswer.apply(this, arguments);
            }
            function _generateAnswer() {
                _generateAnswer = _wrap_async_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    {
                                        explanation: 'ANSWER: this is the answer',
                                        metadata: {
                                            rpcGlobalId: 123
                                        }
                                    }
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                });
                return _generateAnswer.apply(this, arguments);
            }
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        agent = new FreestylerAgent({
                            aidaClient: mockAidaClient(generateAnswer),
                            confirmSideEffect: function() {
                                return Promise.resolve(true);
                            },
                            execJs: sinon.spy()
                        });
                        return [
                            4,
                            Array.fromAsync(agent.run('test'))
                        ];
                    case 1:
                        steps = _state.sent();
                        assert.deepStrictEqual(steps, [
                            {
                                step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.QUERYING
                            },
                            {
                                step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ANSWER,
                                text: 'this is the answer',
                                rpcId: 123
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('throws an error based on the attribution metadata including RecitationAction.BLOCK', /*#__PURE__*/ _async_to_generator(function() {
            var agent, steps;
            function generateAnswer() {
                return _generateAnswer.apply(this, arguments);
            }
            function _generateAnswer() {
                _generateAnswer = _wrap_async_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    {
                                        explanation: 'ANSWER: this is the answer',
                                        metadata: {
                                            rpcGlobalId: 123,
                                            attributionMetadata: [
                                                {
                                                    attributionAction: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.RecitationAction.BLOCK,
                                                    citations: []
                                                }
                                            ]
                                        }
                                    }
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                });
                return _generateAnswer.apply(this, arguments);
            }
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        agent = new FreestylerAgent({
                            aidaClient: mockAidaClient(generateAnswer),
                            confirmSideEffect: function() {
                                return Promise.resolve(true);
                            },
                            execJs: sinon.spy()
                        });
                        return [
                            4,
                            Array.fromAsync(agent.run('test'))
                        ];
                    case 1:
                        steps = _state.sent();
                        assert.deepStrictEqual(steps, [
                            {
                                step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.QUERYING
                            },
                            {
                                rpcId: undefined,
                                step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ERROR,
                                text: 'Sorry, I could not help you with this query.'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('does not throw an error based on attribution metadata not including RecitationAction.BLOCK', /*#__PURE__*/ _async_to_generator(function() {
            var agent, steps;
            function generateAnswer() {
                return _generateAnswer.apply(this, arguments);
            }
            function _generateAnswer() {
                _generateAnswer = _wrap_async_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    {
                                        explanation: 'ANSWER: this is the answer',
                                        metadata: {
                                            rpcGlobalId: 123,
                                            attributionMetadata: [
                                                {
                                                    attributionAction: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.RecitationAction.ACTION_UNSPECIFIED,
                                                    citations: []
                                                }
                                            ]
                                        }
                                    }
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                });
                return _generateAnswer.apply(this, arguments);
            }
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        agent = new FreestylerAgent({
                            aidaClient: mockAidaClient(generateAnswer),
                            confirmSideEffect: function() {
                                return Promise.resolve(true);
                            },
                            execJs: sinon.spy()
                        });
                        return [
                            4,
                            Array.fromAsync(agent.run('test'))
                        ];
                    case 1:
                        steps = _state.sent();
                        assert.deepStrictEqual(steps, [
                            {
                                step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.QUERYING
                            },
                            {
                                step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ANSWER,
                                text: 'this is the answer',
                                rpcId: 123
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('generates a response if nothing is returned', /*#__PURE__*/ _async_to_generator(function() {
            var execJs, agent, steps;
            function generateNothing() {
                return _generateNothing.apply(this, arguments);
            }
            function _generateNothing() {
                _generateNothing = _wrap_async_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    {
                                        explanation: '',
                                        metadata: {}
                                    }
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                });
                return _generateNothing.apply(this, arguments);
            }
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        execJs = sinon.spy();
                        agent = new FreestylerAgent({
                            aidaClient: mockAidaClient(generateNothing),
                            confirmSideEffect: function() {
                                return Promise.resolve(true);
                            },
                            execJs: execJs
                        });
                        return [
                            4,
                            Array.fromAsync(agent.run('test'))
                        ];
                    case 1:
                        steps = _state.sent();
                        assert.deepStrictEqual(steps, [
                            {
                                step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.QUERYING
                            },
                            {
                                step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ANSWER,
                                text: 'Sorry, I could not help you with this query.',
                                rpcId: undefined
                            }
                        ]);
                        sinon.assert.notCalled(execJs);
                        assert.deepStrictEqual(agent.chatHistoryForTesting, [
                            {
                                entity: 1,
                                text: 'QUERY: test'
                            },
                            {
                                entity: 2,
                                text: ''
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('generates an action response if action and answer both present', /*#__PURE__*/ _async_to_generator(function() {
            var i, execJs, agent, steps;
            function generateNothing() {
                return _generateNothing.apply(this, arguments);
            }
            function _generateNothing() {
                _generateNothing = _wrap_async_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(i !== 0)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    {
                                        explanation: 'ANSWER: this is the actual answer',
                                        metadata: {}
                                    }
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                            case 2:
                                return [
                                    4,
                                    {
                                        explanation: "THOUGHT: I am thinking.\n\nACTION\nconsole.log('hello');\nSTOP\n\nANSWER: this is the answer",
                                        metadata: {}
                                    }
                                ];
                            case 3:
                                _state.sent();
                                i++;
                                return [
                                    2
                                ];
                        }
                    });
                });
                return _generateNothing.apply(this, arguments);
            }
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        i = 0;
                        execJs = sinon.mock().once();
                        execJs.onCall(0).returns('hello');
                        agent = new FreestylerAgent({
                            aidaClient: mockAidaClient(generateNothing),
                            confirmSideEffect: function() {
                                return Promise.resolve(true);
                            },
                            execJs: execJs
                        });
                        return [
                            4,
                            Array.fromAsync(agent.run('test'))
                        ];
                    case 1:
                        steps = _state.sent();
                        assert.deepStrictEqual(steps, [
                            {
                                step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.QUERYING
                            },
                            {
                                step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.THOUGHT,
                                text: 'I am thinking.',
                                rpcId: undefined
                            },
                            {
                                step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ACTION,
                                code: 'console.log(\'hello\');',
                                output: 'hello',
                                rpcId: undefined
                            },
                            {
                                step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.QUERYING
                            },
                            {
                                step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ANSWER,
                                text: 'this is the actual answer',
                                rpcId: undefined
                            }
                        ]);
                        sinon.assert.calledOnce(execJs);
                        return [
                            2
                        ];
                }
            });
        }));
        it('generates history for multiple actions', /*#__PURE__*/ _async_to_generator(function() {
            var count, execJs, agent;
            function generateMultipleTimes() {
                return _generateMultipleTimes.apply(this, arguments);
            }
            function _generateMultipleTimes() {
                _generateMultipleTimes = _wrap_async_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(count === 3)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    {
                                        explanation: 'ANSWER: this is the answer',
                                        metadata: {}
                                    }
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                            case 2:
                                count++;
                                return [
                                    4,
                                    {
                                        explanation: "THOUGHT: thought ".concat(count, "\nACTION\nconsole.log('test')\nSTOP\n"),
                                        metadata: {}
                                    }
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                });
                return _generateMultipleTimes.apply(this, arguments);
            }
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        count = 0;
                        execJs = sinon.spy(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    'undefined'
                                ];
                            });
                        }));
                        agent = new FreestylerAgent({
                            aidaClient: mockAidaClient(generateMultipleTimes),
                            confirmSideEffect: function() {
                                return Promise.resolve(true);
                            },
                            execJs: execJs
                        });
                        return [
                            4,
                            Array.fromAsync(agent.run('test'))
                        ];
                    case 1:
                        _state.sent();
                        assert.deepStrictEqual(agent.chatHistoryForTesting, [
                            {
                                entity: 1,
                                text: 'QUERY: test'
                            },
                            {
                                entity: 2,
                                text: 'THOUGHT: thought 1\nACTION\nconsole.log(\'test\')\nSTOP\n'
                            },
                            {
                                entity: 1,
                                text: 'OBSERVATION: undefined'
                            },
                            {
                                entity: 2,
                                text: 'THOUGHT: thought 2\nACTION\nconsole.log(\'test\')\nSTOP\n'
                            },
                            {
                                entity: 1,
                                text: 'OBSERVATION: undefined'
                            },
                            {
                                entity: 2,
                                text: 'THOUGHT: thought 3\nACTION\nconsole.log(\'test\')\nSTOP\n'
                            },
                            {
                                entity: 1,
                                text: 'OBSERVATION: undefined'
                            },
                            {
                                entity: 2,
                                text: 'ANSWER: this is the answer'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('stops when aborted', /*#__PURE__*/ _async_to_generator(function() {
            var count, execJs, agent, controller;
            function generateMultipleTimes() {
                return _generateMultipleTimes.apply(this, arguments);
            }
            function _generateMultipleTimes() {
                _generateMultipleTimes = _wrap_async_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(count === 3)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    {
                                        explanation: 'ANSWER: this is the answer',
                                        metadata: {}
                                    }
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                            case 2:
                                count++;
                                return [
                                    4,
                                    {
                                        explanation: "THOUGHT: thought ".concat(count, "\nACTION\nconsole.log('test')\nSTOP\n"),
                                        metadata: {}
                                    }
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                });
                return _generateMultipleTimes.apply(this, arguments);
            }
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        count = 0;
                        execJs = sinon.spy();
                        agent = new FreestylerAgent({
                            aidaClient: mockAidaClient(generateMultipleTimes),
                            confirmSideEffect: function() {
                                return Promise.resolve(true);
                            },
                            execJs: execJs
                        });
                        controller = new AbortController();
                        controller.abort();
                        return [
                            4,
                            Array.fromAsync(agent.run('test', {
                                signal: controller.signal,
                                isFixQuery: false
                            }))
                        ];
                    case 1:
                        _state.sent();
                        assert.deepStrictEqual(agent.chatHistoryForTesting, []);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=FreestylerAgent.test.js.map


}),
"./panels/freestyler/freestyler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return /* reexport safe */ _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__.ActionDelegate; },
  DOGFOOD_INFO: function() { return /* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.DOGFOOD_INFO; },
  ExecutionError: function() { return /* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.ExecutionError; },
  FIX_THIS_ISSUE_PROMPT: function() { return /* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.FIX_THIS_ISSUE_PROMPT; },
  FOR_TEST: function() { return /* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.FOR_TEST; },
  FreestylerAgent: function() { return /* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.FreestylerAgent; },
  FreestylerChatUi: function() { return /* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.FreestylerChatUi; },
  FreestylerEvaluateAction: function() { return /* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.FreestylerEvaluateAction; },
  FreestylerPanel: function() { return /* reexport safe */ _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel; },
  ProvideFeedback: function() { return /* reexport safe */ _components_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_1__.ProvideFeedback; },
  SideEffectError: function() { return /* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.SideEffectError; },
  Step: function() { return /* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.Step; }
});
/* harmony import */var _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FreestylerEvaluateAction.js */ "./panels/freestyler/FreestylerEvaluateAction.js");
/* harmony import */var _components_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProvideFeedback.js */ "./panels/freestyler/components/ProvideFeedback.js");
/* harmony import */var _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FreestylerChatUi.js */ "./panels/freestyler/components/FreestylerChatUi.js");
/* harmony import */var _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FreestylerPanel.js */ "./panels/freestyler/FreestylerPanel.js");
/* harmony import */var _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FreestylerAgent.js */ "./panels/freestyler/FreestylerAgent.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




 //# sourceMappingURL=freestyler.js.map


}),

}]);