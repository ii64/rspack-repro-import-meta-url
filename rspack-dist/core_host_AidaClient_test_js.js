"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_host_AidaClient_test_js"], {
"./core/host/AidaClient.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./host.js */ "./core/host/host.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _async_iterator(iterable) {
    var method, async, sync, retry = 2;
    for("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;){
        if (async && null != (method = iterable[async])) return method.call(iterable);
        if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
        async = "@@asyncIterator", sync = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(s) {
    function AsyncFromSyncIteratorContinuation(r) {
        if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
        var done = r.done;
        return Promise.resolve(r.value).then(function(value) {
            return {
                value: value,
                done: done
            };
        });
    }
    return AsyncFromSyncIterator = function(s) {
        this.s = s, this.n = s.next;
    }, AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function() {
            return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
        },
        return: function(value) {
            var ret = this.s.return;
            return void 0 === ret ? Promise.resolve({
                value: value,
                done: !0
            }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
        },
        throw: function(value) {
            var thr = this.s.return;
            return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
        }
    }, new AsyncFromSyncIterator(s);
}
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


var TEST_MODEL_ID = 'testModelId';
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('AidaClient', function() {
    var getAllResults = function getAllResults(provider) {
        return _getAllResults.apply(this, arguments);
    };
    it('adds no model temperature if console insights is not enabled', function() {
        var stub = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getGetHostConfigStub)({});
        var request = _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.buildConsoleInsightsRequest('foo');
        assert.deepStrictEqual(request, {
            input: 'foo',
            client: 'CHROME_DEVTOOLS',
            client_feature: 1,
            functionality_type: 2
        });
        stub.restore();
    });
    it('adds a model temperature', function() {
        var stub = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getGetHostConfigStub)({
            devToolsConsoleInsights: {
                enabled: true,
                aidaTemperature: 0.5
            }
        });
        var request = _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.buildConsoleInsightsRequest('foo');
        assert.deepStrictEqual(request, {
            input: 'foo',
            client: 'CHROME_DEVTOOLS',
            options: {
                temperature: 0.5
            },
            client_feature: 1,
            functionality_type: 2
        });
        stub.restore();
    });
    it('adds a model temperature of 0', function() {
        var stub = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getGetHostConfigStub)({
            devToolsConsoleInsights: {
                enabled: true,
                aidaTemperature: 0
            }
        });
        var request = _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.buildConsoleInsightsRequest('foo');
        assert.deepStrictEqual(request, {
            input: 'foo',
            client: 'CHROME_DEVTOOLS',
            options: {
                temperature: 0
            },
            client_feature: 1,
            functionality_type: 2
        });
        stub.restore();
    });
    it('adds a model id and temperature', function() {
        var stub = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getGetHostConfigStub)({
            devToolsConsoleInsights: {
                enabled: true,
                aidaModelId: TEST_MODEL_ID,
                aidaTemperature: 0.5
            }
        });
        var request = _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.buildConsoleInsightsRequest('foo');
        assert.deepStrictEqual(request, {
            input: 'foo',
            client: 'CHROME_DEVTOOLS',
            options: {
                model_id: TEST_MODEL_ID,
                temperature: 0.5
            },
            client_feature: 1,
            functionality_type: 2
        });
        stub.restore();
    });
    it('adds metadata to disallow logging', function() {
        var stub = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getGetHostConfigStub)({
            devToolsConsoleInsights: {
                enabled: true,
                aidaTemperature: 0.5,
                disallowLogging: true
            }
        });
        var request = _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.buildConsoleInsightsRequest('foo');
        assert.deepStrictEqual(request, {
            input: 'foo',
            client: 'CHROME_DEVTOOLS',
            metadata: {
                disable_user_content_logging: true
            },
            options: {
                temperature: 0.5
            },
            client_feature: 1,
            functionality_type: 2
        });
        stub.restore();
    });
    function _getAllResults() {
        _getAllResults = _async_to_generator(function(provider) {
            var results, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, result, err;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        results = [];
                        _iteratorAbruptCompletion = false, _didIteratorError = false;
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            6,
                            7,
                            12
                        ]);
                        _iterator = _async_iterator(provider.fetch(_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.buildConsoleInsightsRequest('foo')));
                        _state.label = 2;
                    case 2:
                        return [
                            4,
                            _iterator.next()
                        ];
                    case 3:
                        if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                            3,
                            5
                        ];
                        _value = _step.value;
                        result = _value;
                        results.push(result);
                        _state.label = 4;
                    case 4:
                        _iteratorAbruptCompletion = false;
                        return [
                            3,
                            2
                        ];
                    case 5:
                        return [
                            3,
                            12
                        ];
                    case 6:
                        err = _state.sent();
                        _didIteratorError = true;
                        _iteratorError = err;
                        return [
                            3,
                            12
                        ];
                    case 7:
                        _state.trys.push([
                            7,
                            ,
                            10,
                            11
                        ]);
                        if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                            3,
                            9
                        ];
                        return [
                            4,
                            _iterator.return()
                        ];
                    case 8:
                        _state.sent();
                        _state.label = 9;
                    case 9:
                        return [
                            3,
                            11
                        ];
                    case 10:
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                        return [
                            7
                        ];
                    case 11:
                        return [
                            7
                        ];
                    case 12:
                        return [
                            2,
                            results
                        ];
                }
            });
        });
        return _getAllResults.apply(this, arguments);
    }
    it('handles chunked response', /*#__PURE__*/ _async_to_generator(function() {
        var provider, results;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'doAidaConversation').callsFake(function() {
                        var _ref = _async_to_generator(function(_, streamId, callback) {
                            var response, first, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, chunk, err;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        response = JSON.stringify([
                                            {
                                                textChunk: {
                                                    text: 'hello '
                                                },
                                                metadata: {
                                                    rpcGlobalId: 123
                                                }
                                            },
                                            {
                                                textChunk: {
                                                    text: 'brave '
                                                },
                                                metadata: {
                                                    rpcGlobalId: 123
                                                }
                                            },
                                            {
                                                textChunk: {
                                                    text: 'new world!'
                                                }
                                            }
                                        ]);
                                        first = true;
                                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                        _state.label = 1;
                                    case 1:
                                        _state.trys.push([
                                            1,
                                            6,
                                            7,
                                            8
                                        ]);
                                        _iterator = response.split(',{')[Symbol.iterator]();
                                        _state.label = 2;
                                    case 2:
                                        if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                            3,
                                            5
                                        ];
                                        chunk = _step.value;
                                        return [
                                            4,
                                            new Promise(function(resolve) {
                                                return setTimeout(resolve, 0);
                                            })
                                        ];
                                    case 3:
                                        _state.sent();
                                        _host_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLoader.streamWrite(streamId, first ? chunk : ',{' + chunk);
                                        first = false;
                                        _state.label = 4;
                                    case 4:
                                        _iteratorNormalCompletion = true;
                                        return [
                                            3,
                                            2
                                        ];
                                    case 5:
                                        return [
                                            3,
                                            8
                                        ];
                                    case 6:
                                        err = _state.sent();
                                        _didIteratorError = true;
                                        _iteratorError = err;
                                        return [
                                            3,
                                            8
                                        ];
                                    case 7:
                                        try {
                                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                _iterator.return();
                                            }
                                        } finally{
                                            if (_didIteratorError) {
                                                throw _iteratorError;
                                            }
                                        }
                                        return [
                                            7
                                        ];
                                    case 8:
                                        callback({
                                            statusCode: 200
                                        });
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function(_, streamId, callback) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                    provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
                    return [
                        4,
                        getAllResults(provider)
                    ];
                case 1:
                    results = _state.sent();
                    assert.deepStrictEqual(results, [
                        {
                            explanation: 'hello ',
                            metadata: {
                                rpcGlobalId: 123
                            }
                        },
                        {
                            explanation: 'hello brave ',
                            metadata: {
                                rpcGlobalId: 123
                            }
                        },
                        {
                            explanation: 'hello brave new world!',
                            metadata: {
                                rpcGlobalId: 123
                            }
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('handles single square bracket as a chunk', /*#__PURE__*/ _async_to_generator(function() {
        var provider, results;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'doAidaConversation').callsFake(function() {
                        var _ref = _async_to_generator(function(_, streamId, callback) {
                            var response, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, chunk, err;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        response = [
                                            '[',
                                            JSON.stringify({
                                                textChunk: {
                                                    text: 'hello world'
                                                },
                                                metadata: {
                                                    rpcGlobalId: 123
                                                }
                                            }),
                                            ']'
                                        ];
                                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                        _state.label = 1;
                                    case 1:
                                        _state.trys.push([
                                            1,
                                            6,
                                            7,
                                            8
                                        ]);
                                        _iterator = response[Symbol.iterator]();
                                        _state.label = 2;
                                    case 2:
                                        if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                            3,
                                            5
                                        ];
                                        chunk = _step.value;
                                        return [
                                            4,
                                            new Promise(function(resolve) {
                                                return setTimeout(resolve, 0);
                                            })
                                        ];
                                    case 3:
                                        _state.sent();
                                        _host_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLoader.streamWrite(streamId, chunk);
                                        _state.label = 4;
                                    case 4:
                                        _iteratorNormalCompletion = true;
                                        return [
                                            3,
                                            2
                                        ];
                                    case 5:
                                        return [
                                            3,
                                            8
                                        ];
                                    case 6:
                                        err = _state.sent();
                                        _didIteratorError = true;
                                        _iteratorError = err;
                                        return [
                                            3,
                                            8
                                        ];
                                    case 7:
                                        try {
                                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                _iterator.return();
                                            }
                                        } finally{
                                            if (_didIteratorError) {
                                                throw _iteratorError;
                                            }
                                        }
                                        return [
                                            7
                                        ];
                                    case 8:
                                        callback({
                                            statusCode: 200
                                        });
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function(_, streamId, callback) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                    provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
                    return [
                        4,
                        getAllResults(provider)
                    ];
                case 1:
                    results = _state.sent();
                    assert.deepStrictEqual(results, [
                        {
                            explanation: 'hello world',
                            metadata: {
                                rpcGlobalId: 123
                            }
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('handles chunked response with multiple objects per chunk', /*#__PURE__*/ _async_to_generator(function() {
        var provider, results;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'doAidaConversation').callsFake(function() {
                        var _ref = _async_to_generator(function(_, streamId, callback) {
                            var response, chunks;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        response = JSON.stringify([
                                            {
                                                textChunk: {
                                                    text: 'Friends, Romans, countrymen, lend me your ears;\n'
                                                },
                                                metadata: {
                                                    rpcGlobalId: 123
                                                }
                                            },
                                            {
                                                textChunk: {
                                                    text: 'I come to bury Caesar, not to praise him.\n'
                                                },
                                                metadata: {
                                                    rpcGlobalId: 123
                                                }
                                            },
                                            {
                                                textChunk: {
                                                    text: 'The evil that men do lives after them;\n'
                                                },
                                                metadata: {
                                                    rpcGlobalId: 123
                                                }
                                            },
                                            {
                                                textChunk: {
                                                    text: 'The good is oft interred with their bones;\n'
                                                },
                                                metadata: {
                                                    rpcGlobalId: 123
                                                }
                                            },
                                            {
                                                textChunk: {
                                                    text: 'So let it be with Caesar. The noble Brutus\n'
                                                },
                                                metadata: {
                                                    rpcGlobalId: 123
                                                }
                                            },
                                            {
                                                textChunk: {
                                                    text: 'Hath told you Caesar was ambitious:\n'
                                                },
                                                metadata: {
                                                    rpcGlobalId: 123
                                                }
                                            },
                                            {
                                                textChunk: {
                                                    text: 'If it were so, it was a grievous fault,\n'
                                                },
                                                metadata: {
                                                    rpcGlobalId: 123
                                                }
                                            },
                                            {
                                                textChunk: {
                                                    text: 'And grievously hath Caesar answer’d it.\n'
                                                },
                                                metadata: {
                                                    rpcGlobalId: 123
                                                }
                                            }
                                        ]);
                                        chunks = response.split(',{');
                                        return [
                                            4,
                                            new Promise(function(resolve) {
                                                return setTimeout(resolve, 0);
                                            })
                                        ];
                                    case 1:
                                        _state.sent();
                                        _host_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLoader.streamWrite(streamId, chunks[0] + ',{' + chunks[1]);
                                        return [
                                            4,
                                            new Promise(function(resolve) {
                                                return setTimeout(resolve, 0);
                                            })
                                        ];
                                    case 2:
                                        _state.sent();
                                        _host_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLoader.streamWrite(streamId, ',{' + chunks[2] + ',{' + chunks[3] + ',{' + chunks[4]);
                                        return [
                                            4,
                                            new Promise(function(resolve) {
                                                return setTimeout(resolve, 0);
                                            })
                                        ];
                                    case 3:
                                        _state.sent();
                                        _host_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLoader.streamWrite(streamId, ',{' + chunks[5]);
                                        return [
                                            4,
                                            new Promise(function(resolve) {
                                                return setTimeout(resolve, 0);
                                            })
                                        ];
                                    case 4:
                                        _state.sent();
                                        _host_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLoader.streamWrite(streamId, ',{' + chunks[6] + ',{' + chunks[7]);
                                        callback({
                                            statusCode: 200
                                        });
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function(_, streamId, callback) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                    provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
                    return [
                        4,
                        getAllResults(provider)
                    ];
                case 1:
                    results = _state.sent();
                    assert.deepStrictEqual(results, [
                        {
                            explanation: 'Friends, Romans, countrymen, lend me your ears;\n' + 'I come to bury Caesar, not to praise him.\n',
                            metadata: {
                                rpcGlobalId: 123
                            }
                        },
                        {
                            explanation: 'Friends, Romans, countrymen, lend me your ears;\n' + 'I come to bury Caesar, not to praise him.\n' + 'The evil that men do lives after them;\n' + 'The good is oft interred with their bones;\n' + 'So let it be with Caesar. The noble Brutus\n',
                            metadata: {
                                rpcGlobalId: 123
                            }
                        },
                        {
                            explanation: 'Friends, Romans, countrymen, lend me your ears;\n' + 'I come to bury Caesar, not to praise him.\n' + 'The evil that men do lives after them;\n' + 'The good is oft interred with their bones;\n' + 'So let it be with Caesar. The noble Brutus\n' + 'Hath told you Caesar was ambitious:\n',
                            metadata: {
                                rpcGlobalId: 123
                            }
                        },
                        {
                            explanation: 'Friends, Romans, countrymen, lend me your ears;\n' + 'I come to bury Caesar, not to praise him.\n' + 'The evil that men do lives after them;\n' + 'The good is oft interred with their bones;\n' + 'So let it be with Caesar. The noble Brutus\n' + 'Hath told you Caesar was ambitious:\n' + 'If it were so, it was a grievous fault,\n' + 'And grievously hath Caesar answer’d it.\n',
                            metadata: {
                                rpcGlobalId: 123
                            }
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('handles attributionMetadata', /*#__PURE__*/ _async_to_generator(function() {
        var provider, results;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'doAidaConversation').callsFake(function() {
                        var _ref = _async_to_generator(function(_, streamId, callback) {
                            var response, chunks;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        response = JSON.stringify([
                                            {
                                                textChunk: {
                                                    text: 'Chunk1\n'
                                                },
                                                metadata: {
                                                    rpcGlobalId: 123,
                                                    attributionMetadata: {
                                                        attributionAction: 'BLOCK',
                                                        citations: []
                                                    }
                                                }
                                            },
                                            {
                                                textChunk: {
                                                    text: 'Chunk2\n'
                                                },
                                                metadata: {
                                                    rpcGlobalId: 123,
                                                    attributionMetadata: {
                                                        attributionAction: 'CITE',
                                                        citations: [
                                                            {
                                                                startIndex: 0,
                                                                endIndex: 1,
                                                                url: 'https://example.com'
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        ]);
                                        chunks = response.split(',{');
                                        return [
                                            4,
                                            new Promise(function(resolve) {
                                                return setTimeout(resolve, 0);
                                            })
                                        ];
                                    case 1:
                                        _state.sent();
                                        _host_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLoader.streamWrite(streamId, chunks[0] + ',{' + chunks[1]);
                                        return [
                                            4,
                                            new Promise(function(resolve) {
                                                return setTimeout(resolve, 0);
                                            })
                                        ];
                                    case 2:
                                        _state.sent();
                                        callback({
                                            statusCode: 200
                                        });
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function(_, streamId, callback) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                    provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
                    return [
                        4,
                        getAllResults(provider)
                    ];
                case 1:
                    results = _state.sent();
                    assert.deepStrictEqual(results, [
                        {
                            explanation: 'Chunk1\n' + 'Chunk2\n',
                            metadata: {
                                rpcGlobalId: 123,
                                attributionMetadata: [
                                    {
                                        attributionAction: _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.RecitationAction.BLOCK,
                                        citations: []
                                    },
                                    {
                                        attributionAction: _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.RecitationAction.CITE,
                                        citations: [
                                            {
                                                startIndex: 0,
                                                endIndex: 1,
                                                url: 'https://example.com'
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('handles subsequent code chunks', /*#__PURE__*/ _async_to_generator(function() {
        var provider, results;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'doAidaConversation').callsFake(function() {
                        var _ref = _async_to_generator(function(_, streamId, callback) {
                            var response, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, chunk, err;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        response = JSON.stringify([
                                            {
                                                textChunk: {
                                                    text: 'hello '
                                                }
                                            },
                                            {
                                                codeChunk: {
                                                    code: 'brave '
                                                }
                                            },
                                            {
                                                codeChunk: {
                                                    code: 'new World()'
                                                }
                                            }
                                        ]);
                                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                        _state.label = 1;
                                    case 1:
                                        _state.trys.push([
                                            1,
                                            6,
                                            7,
                                            8
                                        ]);
                                        _iterator = response.split(',')[Symbol.iterator]();
                                        _state.label = 2;
                                    case 2:
                                        if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                            3,
                                            5
                                        ];
                                        chunk = _step.value;
                                        return [
                                            4,
                                            new Promise(function(resolve) {
                                                return setTimeout(resolve, 0);
                                            })
                                        ];
                                    case 3:
                                        _state.sent();
                                        _host_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLoader.streamWrite(streamId, chunk);
                                        _state.label = 4;
                                    case 4:
                                        _iteratorNormalCompletion = true;
                                        return [
                                            3,
                                            2
                                        ];
                                    case 5:
                                        return [
                                            3,
                                            8
                                        ];
                                    case 6:
                                        err = _state.sent();
                                        _didIteratorError = true;
                                        _iteratorError = err;
                                        return [
                                            3,
                                            8
                                        ];
                                    case 7:
                                        try {
                                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                _iterator.return();
                                            }
                                        } finally{
                                            if (_didIteratorError) {
                                                throw _iteratorError;
                                            }
                                        }
                                        return [
                                            7
                                        ];
                                    case 8:
                                        callback({
                                            statusCode: 200
                                        });
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function(_, streamId, callback) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                    provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
                    return [
                        4,
                        getAllResults(provider)
                    ];
                case 1:
                    results = _state.sent().map(function(r) {
                        return r.explanation;
                    });
                    assert.deepStrictEqual(results, [
                        'hello ',
                        'hello \n`````\nbrave \n`````\n',
                        'hello \n`````\nbrave new World()\n`````\n'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('throws a readable error on 403', /*#__PURE__*/ _async_to_generator(function() {
        var provider, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'doAidaConversation').callsArgWith(2, {
                        'statusCode': 403
                    });
                    provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
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
                        getAllResults(provider)
                    ];
                case 2:
                    _state.sent();
                    expect.fail('provider.fetch did not throw');
                    return [
                        3,
                        4
                    ];
                case 3:
                    err = _state.sent();
                    expect(err.message).equals('Server responded: permission denied');
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    }));
    it('throws an error for other codes', /*#__PURE__*/ _async_to_generator(function() {
        var provider, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'doAidaConversation').callsArgWith(2, {
                        'statusCode': 418
                    });
                    provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
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
                        getAllResults(provider)
                    ];
                case 2:
                    _state.sent();
                    expect.fail('provider.fetch did not throw');
                    return [
                        3,
                        4
                    ];
                case 3:
                    err = _state.sent();
                    expect(err.message).equals('Request failed: {"statusCode":418}');
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    }));
    it('throws an error with all details for other failures', /*#__PURE__*/ _async_to_generator(function() {
        var provider, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'doAidaConversation').callsArgWith(2, {
                        'error': 'Cannot get OAuth credentials',
                        'detail': '{\'@type\': \'type.googleapis.com/google.rpc.DebugInfo\', \'detail\': \'DETAILS\'}'
                    });
                    provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
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
                        getAllResults(provider)
                    ];
                case 2:
                    _state.sent();
                    expect.fail('provider.fetch did not throw');
                    return [
                        3,
                        4
                    ];
                case 3:
                    err = _state.sent();
                    expect(err.message).equals('Cannot send request: Cannot get OAuth credentials {\'@type\': \'type.googleapis.com/google.rpc.DebugInfo\', \'detail\': \'DETAILS\'}');
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    }));
    describe('getAidaClientAvailability', function() {
        var mockGetSyncInformation = function mockGetSyncInformation(information) {
            sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'getSyncInformation').callsFake(function(cb) {
                cb(information);
            });
        };
        beforeEach(function() {
            sinon.restore();
        });
        it('should return NO_INTERNET when navigator is not online', /*#__PURE__*/ _async_to_generator(function() {
            var navigatorDescriptor, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        navigatorDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
                        Object.defineProperty(globalThis, 'navigator', {
                            get: function get() {
                                return {
                                    onLine: false
                                };
                            }
                        });
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            ,
                            3,
                            4
                        ]);
                        return [
                            4,
                            _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.getAidaClientAvailability()
                        ];
                    case 2:
                        result = _state.sent();
                        assert.strictEqual(result, _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_INTERNET);
                        return [
                            3,
                            4
                        ];
                    case 3:
                        Object.defineProperty(globalThis, 'navigator', navigatorDescriptor);
                        return [
                            7
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        }));
        it('should return NO_ACCOUNT_EMAIL when the syncInfo doesn\'t contain accountEmail', /*#__PURE__*/ _async_to_generator(function() {
            var result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockGetSyncInformation({
                            accountEmail: undefined,
                            isSyncActive: true
                        });
                        return [
                            4,
                            _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.getAidaClientAvailability()
                        ];
                    case 1:
                        result = _state.sent();
                        assert.strictEqual(result, _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACCOUNT_EMAIL);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should return NO_ACTIVE_SYNC when the syncInfo.isSyncActive is not true', /*#__PURE__*/ _async_to_generator(function() {
            var result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockGetSyncInformation({
                            accountEmail: 'some-email',
                            isSyncActive: false
                        });
                        return [
                            4,
                            _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.getAidaClientAvailability()
                        ];
                    case 1:
                        result = _state.sent();
                        assert.strictEqual(result, _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACTIVE_SYNC);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should return AVAILABLE when navigator is online, accountEmail exists and isSyncActive is true', /*#__PURE__*/ _async_to_generator(function() {
            var result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockGetSyncInformation({
                            accountEmail: 'some-email',
                            isSyncActive: true
                        });
                        return [
                            4,
                            _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.getAidaClientAvailability()
                        ];
                    case 1:
                        result = _state.sent();
                        assert.strictEqual(result, _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('registerClientEvent', function() {
        it('should populate the default value for Aida Client event', /*#__PURE__*/ _async_to_generator(function() {
            var stub, RPC_ID, provider, arg;
            return _ts_generator(this, function(_state) {
                stub = sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'registerAidaClientEvent');
                RPC_ID = 0;
                provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
                void provider.registerClientEvent({
                    corresponding_aida_rpc_global_id: RPC_ID,
                    disable_user_content_logging: false,
                    do_conversation_client_event: {
                        user_feedback: {
                            sentiment: "POSITIVE" /* Host.AidaClient.Rating.POSITIVE */ 
                        }
                    }
                });
                arg = JSON.parse(stub.getCalls()[0].args[0]);
                sinon.assert.match(arg, sinon.match({
                    client: _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.CLIENT_NAME,
                    event_time: sinon.match.string,
                    corresponding_aida_rpc_global_id: RPC_ID,
                    do_conversation_client_event: {
                        user_feedback: {
                            sentiment: 'POSITIVE'
                        }
                    }
                }));
                return [
                    2
                ];
            });
        }));
    });
}); //# sourceMappingURL=AidaClient.test.js.map


}),

}]);