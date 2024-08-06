"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_lantern_core_NetworkAnalyzer_test_js"], {
"./models/trace/lantern/core/NetworkAnalyzer.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../trace.js */ "./models/trace/trace.js");
/* harmony import */var _lantern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lantern.js */ "./models/trace/lantern/lantern.js");
/* harmony import */var _testing_testing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../testing/testing.js */ "./models/trace/lantern/testing/testing.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ts-nocheck TODO(crbug.com/348449529)
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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



var NetworkAnalyzer = _lantern_js__WEBPACK_IMPORTED_MODULE_1__.Core.NetworkAnalyzer;
function createRequests(trace) {
    return _createRequests.apply(this, arguments);
}
function _createRequests() {
    _createRequests = _async_to_generator(function(trace) {
        var traceEngineData;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_testing_js__WEBPACK_IMPORTED_MODULE_2__.runTraceEngine)(trace)
                    ];
                case 1:
                    traceEngineData = _state.sent();
                    return [
                        2,
                        _trace_js__WEBPACK_IMPORTED_MODULE_0__.LanternComputationData.createNetworkRequests(trace, traceEngineData)
                    ];
            }
        });
    });
    return _createRequests.apply(this, arguments);
}
describe('NetworkAnalyzer', function() {
    var createRecord = function createRecord(opts) {
        var url = opts.url || 'https://example.com';
        if (opts.networkRequestTime) {
            opts.networkRequestTime *= 1000;
        }
        if (opts.networkEndTime) {
            opts.networkEndTime *= 1000;
        }
        return Object.assign({
            url: url,
            requestId: recordId++,
            connectionId: 0,
            connectionReused: false,
            networkRequestTime: 10,
            networkEndTime: 10,
            transferSize: 0,
            protocol: opts.protocol || 'http/1.1',
            parsedURL: {
                scheme: url.match(/https?/)[0],
                securityOrigin: url.match(/.*\.com/)[0]
            },
            timing: opts.timing || null
        }, opts);
    };
    var assertCloseEnough = function assertCloseEnough(valueA, valueB) {
        var threshold = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
        var message = "".concat(valueA, " was not close enough to ").concat(valueB);
        assert.ok(Math.abs(valueA - valueB) < threshold, message);
    };
    var trace;
    var traceWithRedirect;
    before(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_testing_js__WEBPACK_IMPORTED_MODULE_2__.loadTrace)(this, 'lantern/paul/trace.json.gz')
                    ];
                case 1:
                    trace = _state.sent();
                    return [
                        4,
                        (0,_testing_testing_js__WEBPACK_IMPORTED_MODULE_2__.loadTrace)(this, 'lantern/redirect/trace.json.gz')
                    ];
                case 2:
                    traceWithRedirect = _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    var recordId;
    beforeEach(function() {
        recordId = 1;
    });
    describe('#estimateIfConnectionWasReused', function() {
        it('should use built-in value when trustworthy', function() {
            var records = [
                {
                    requestId: 1,
                    connectionId: 1,
                    connectionReused: false
                },
                {
                    requestId: 2,
                    connectionId: 1,
                    connectionReused: true
                },
                {
                    requestId: 3,
                    connectionId: 2,
                    connectionReused: false
                },
                {
                    requestId: 4,
                    connectionId: 3,
                    connectionReused: false
                },
                {
                    requestId: 5,
                    connectionId: 2,
                    connectionReused: true
                }
            ];
            var result = NetworkAnalyzer.estimateIfConnectionWasReused(records);
            var expected = new Map([
                [
                    1,
                    false
                ],
                [
                    2,
                    true
                ],
                [
                    3,
                    false
                ],
                [
                    4,
                    false
                ],
                [
                    5,
                    true
                ]
            ]);
            assert.deepStrictEqual(result, expected);
        });
        it('should estimate values when not trustworthy (duplicate IDs)', function() {
            var records = [
                createRecord({
                    requestId: 1,
                    networkRequestTime: 0,
                    networkEndTime: 15
                }),
                createRecord({
                    requestId: 2,
                    networkRequestTime: 10,
                    networkEndTime: 25
                }),
                createRecord({
                    requestId: 3,
                    networkRequestTime: 20,
                    networkEndTime: 40
                }),
                createRecord({
                    requestId: 4,
                    networkRequestTime: 30,
                    networkEndTime: 40
                })
            ];
            var result = NetworkAnalyzer.estimateIfConnectionWasReused(records);
            var expected = new Map([
                [
                    1,
                    false
                ],
                [
                    2,
                    false
                ],
                [
                    3,
                    true
                ],
                [
                    4,
                    true
                ]
            ]);
            assert.deepStrictEqual(result, expected);
        });
        it('should estimate values when not trustworthy (connectionReused nonsense)', function() {
            var records = [
                createRecord({
                    requestId: 1,
                    connectionId: 1,
                    connectionReused: true,
                    networkRequestTime: 0,
                    networkEndTime: 15
                }),
                createRecord({
                    requestId: 2,
                    connectionId: 1,
                    connectionReused: true,
                    networkRequestTime: 10,
                    networkEndTime: 25
                }),
                createRecord({
                    requestId: 3,
                    connectionId: 1,
                    connectionReused: true,
                    networkRequestTime: 20,
                    networkEndTime: 40
                }),
                createRecord({
                    requestId: 4,
                    connectionId: 2,
                    connectionReused: false,
                    networkRequestTime: 30,
                    networkEndTime: 40
                })
            ];
            var result = NetworkAnalyzer.estimateIfConnectionWasReused(records);
            var expected = new Map([
                [
                    1,
                    false
                ],
                [
                    2,
                    false
                ],
                [
                    3,
                    true
                ],
                [
                    4,
                    true
                ]
            ]);
            assert.deepStrictEqual(result, expected);
        });
        it('should estimate with earliest allowed reuse', function() {
            var records = [
                createRecord({
                    requestId: 1,
                    networkRequestTime: 0,
                    networkEndTime: 40
                }),
                createRecord({
                    requestId: 2,
                    networkRequestTime: 10,
                    networkEndTime: 15
                }),
                createRecord({
                    requestId: 3,
                    networkRequestTime: 20,
                    networkEndTime: 30
                }),
                createRecord({
                    requestId: 4,
                    networkRequestTime: 35,
                    networkEndTime: 40
                })
            ];
            var result = NetworkAnalyzer.estimateIfConnectionWasReused(records);
            var expected = new Map([
                [
                    1,
                    false
                ],
                [
                    2,
                    false
                ],
                [
                    3,
                    true
                ],
                [
                    4,
                    true
                ]
            ]);
            assert.deepStrictEqual(result, expected);
        });
        it('should work on a real trace', /*#__PURE__*/ _async_to_generator(function() {
            var requests, result, distinctConnections;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            createRequests(trace)
                        ];
                    case 1:
                        requests = _state.sent();
                        result = NetworkAnalyzer.estimateIfConnectionWasReused(requests);
                        distinctConnections = Array.from(result.values()).filter(function(item) {
                            return !item;
                        }).length;
                        assert.strictEqual(result.size, 25);
                        assert.strictEqual(distinctConnections, 9);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('#estimateRTTByOrigin', function() {
        it('should infer from tcp timing when available', function() {
            var timing = {
                connectStart: 0,
                connectEnd: 99
            };
            var request = createRecord({
                networkRequestTime: 0,
                networkEndTime: 1,
                timing: timing
            });
            var result = NetworkAnalyzer.estimateRTTByOrigin([
                request
            ]);
            var expected = {
                min: 99,
                max: 99,
                avg: 99,
                median: 99
            };
            assert.deepStrictEqual(result.get('https://example.com'), expected);
        });
        it('should infer only one estimate if tcp and ssl start times are equal', function() {
            var timing = {
                connectStart: 0,
                connectEnd: 99,
                sslStart: 0,
                sslEnd: 99
            };
            var request = createRecord({
                networkRequestTime: 0,
                networkEndTime: 1,
                timing: timing
            });
            var result = NetworkAnalyzer.estimateRTTByOrigin([
                request
            ]);
            var expected = {
                min: 99,
                max: 99,
                avg: 99,
                median: 99
            };
            assert.deepStrictEqual(result.get('https://example.com'), expected);
        });
        it('should infer from tcp and ssl timing when available', function() {
            var timing = {
                connectStart: 0,
                connectEnd: 99,
                sslStart: 50,
                sslEnd: 99
            };
            var request = createRecord({
                networkRequestTime: 0,
                networkEndTime: 1,
                timing: timing
            });
            var result = NetworkAnalyzer.estimateRTTByOrigin([
                request
            ]);
            var expected = {
                min: 49,
                max: 50,
                avg: 49.5,
                median: 49.5
            };
            assert.deepStrictEqual(result.get('https://example.com'), expected);
        });
        it('should infer from connection timing when available for h3 (one estimate)', function() {
            var timing = {
                connectStart: 0,
                connectEnd: 99,
                sslStart: 1,
                sslEnd: 99
            };
            var request = createRecord({
                networkRequestTime: 0,
                networkEndTime: 1,
                timing: timing,
                protocol: 'h3'
            });
            var result = NetworkAnalyzer.estimateRTTByOrigin([
                request
            ]);
            var expected = {
                min: 99,
                max: 99,
                avg: 99,
                median: 99
            };
            assert.deepStrictEqual(result.get('https://example.com'), expected);
        });
        it('should infer from sendStart when available', function() {
            var timing = {
                sendStart: 150
            };
            // this request took 150ms before Chrome could send the request
            // i.e. DNS (maybe) + queuing (maybe) + TCP handshake took ~100ms
            // 150ms / 3 round trips ~= 50ms RTT
            var request = createRecord({
                networkRequestTime: 0,
                networkEndTime: 1,
                timing: timing
            });
            var result = NetworkAnalyzer.estimateRTTByOrigin([
                request
            ], {
                coarseEstimateMultiplier: 1
            });
            var expected = {
                min: 50,
                max: 50,
                avg: 50,
                median: 50
            };
            assert.deepStrictEqual(result.get('https://example.com'), expected);
        });
        it('should infer from download timing when available', function() {
            var timing = {
                receiveHeadersEnd: 100
            };
            // this request took 1000ms after the first byte was received to download the payload
            // i.e. it took at least one full additional roundtrip after first byte to download the rest
            // 1000ms / 1 round trip ~= 1000ms RTT
            var request = createRecord({
                networkRequestTime: 0,
                networkEndTime: 1.1,
                transferSize: 28 * 1024,
                timing: timing
            });
            var result = NetworkAnalyzer.estimateRTTByOrigin([
                request
            ], {
                coarseEstimateMultiplier: 1,
                useHeadersEndEstimates: false
            });
            var expected = {
                min: 1000,
                max: 1000,
                avg: 1000,
                median: 1000
            };
            assert.deepStrictEqual(result.get('https://example.com'), expected);
        });
        it('should infer from TTFB when available', function() {
            var timing = {
                receiveHeadersEnd: 1000
            };
            var request = createRecord({
                networkRequestTime: 0,
                networkEndTime: 1,
                timing: timing,
                resourceType: 'Other'
            });
            var result = NetworkAnalyzer.estimateRTTByOrigin([
                request
            ], {
                coarseEstimateMultiplier: 1
            });
            // this request's TTFB was 1000ms, it used SSL and was a fresh connection requiring a handshake
            // which needs ~4 RTs. We don't know its resource type so it'll be assumed that 40% of it was
            // server response time.
            // 600 ms / 4 = 150ms
            var expected = {
                min: 150,
                max: 150,
                avg: 150,
                median: 150
            };
            assert.deepStrictEqual(result.get('https://example.com'), expected);
        });
        it('should use coarse estimates on a per-origin basis', function() {
            var records = [
                createRecord({
                    url: 'https://example.com',
                    timing: {
                        connectStart: 1,
                        connectEnd: 100,
                        sendStart: 150
                    }
                }),
                createRecord({
                    url: 'https://example2.com',
                    timing: {
                        sendStart: 150
                    }
                })
            ];
            var result = NetworkAnalyzer.estimateRTTByOrigin(records);
            assert.deepStrictEqual(result.get('https://example.com'), {
                min: 99,
                max: 99,
                avg: 99,
                median: 99
            });
            assert.deepStrictEqual(result.get('https://example2.com'), {
                min: 15,
                max: 15,
                avg: 15,
                median: 15
            });
        });
        it('should handle untrustworthy connection information', function() {
            var timing = {
                sendStart: 150
            };
            var recordA = createRecord({
                networkRequestTime: 0,
                networkEndTime: 1,
                timing: timing,
                connectionReused: true
            });
            var recordB = createRecord({
                networkRequestTime: 0,
                networkEndTime: 1,
                timing: timing,
                connectionId: 2,
                connectionReused: true
            });
            var result = NetworkAnalyzer.estimateRTTByOrigin([
                recordA,
                recordB
            ], {
                coarseEstimateMultiplier: 1
            });
            var expected = {
                min: 50,
                max: 50,
                avg: 50,
                median: 50
            };
            assert.deepStrictEqual(result.get('https://example.com'), expected);
        });
        it('should work on a real trace', /*#__PURE__*/ _async_to_generator(function() {
            var requests, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            createRequests(trace)
                        ];
                    case 1:
                        requests = _state.sent();
                        result = NetworkAnalyzer.estimateRTTByOrigin(requests);
                        assertCloseEnough(result.get('https://www.paulirish.com').min, 10);
                        assertCloseEnough(result.get('https://www.googletagmanager.com').min, 17);
                        assertCloseEnough(result.get('https://www.google-analytics.com').min, 10);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should approximate well with either method', /*#__PURE__*/ _async_to_generator(function() {
            var requests, result, resultApprox;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            createRequests(trace)
                        ];
                    case 1:
                        requests = _state.sent();
                        result = NetworkAnalyzer.estimateRTTByOrigin(requests).get(NetworkAnalyzer.summary);
                        resultApprox = NetworkAnalyzer.estimateRTTByOrigin(requests, {
                            forceCoarseEstimates: true
                        }).get(NetworkAnalyzer.summary);
                        assertCloseEnough(result.min, resultApprox.min, 20);
                        assertCloseEnough(result.avg, resultApprox.avg, 30);
                        assertCloseEnough(result.median, resultApprox.median, 30);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('#estimateServerResponseTimeByOrigin', function() {
        it('should estimate server response time using ttfb times', function() {
            var timing = {
                sendEnd: 100,
                receiveHeadersEnd: 200
            };
            var request = createRecord({
                networkRequestTime: 0,
                networkEndTime: 1,
                timing: timing
            });
            var rttByOrigin = new Map([
                [
                    NetworkAnalyzer.summary,
                    0
                ]
            ]);
            var result = NetworkAnalyzer.estimateServerResponseTimeByOrigin([
                request
            ], {
                rttByOrigin: rttByOrigin
            });
            var expected = {
                min: 100,
                max: 100,
                avg: 100,
                median: 100
            };
            assert.deepStrictEqual(result.get('https://example.com'), expected);
        });
        it('should subtract out rtt', function() {
            var timing = {
                sendEnd: 100,
                receiveHeadersEnd: 200
            };
            var request = createRecord({
                networkRequestTime: 0,
                networkEndTime: 1,
                timing: timing
            });
            var rttByOrigin = new Map([
                [
                    NetworkAnalyzer.summary,
                    50
                ]
            ]);
            var result = NetworkAnalyzer.estimateServerResponseTimeByOrigin([
                request
            ], {
                rttByOrigin: rttByOrigin
            });
            var expected = {
                min: 50,
                max: 50,
                avg: 50,
                median: 50
            };
            assert.deepStrictEqual(result.get('https://example.com'), expected);
        });
        it('should compute rtts when not provided', function() {
            var timing = {
                connectStart: 5,
                connectEnd: 55,
                sendEnd: 100,
                receiveHeadersEnd: 200
            };
            var request = createRecord({
                networkRequestTime: 0,
                networkEndTime: 1,
                timing: timing
            });
            var result = NetworkAnalyzer.estimateServerResponseTimeByOrigin([
                request
            ]);
            var expected = {
                min: 50,
                max: 50,
                avg: 50,
                median: 50
            };
            assert.deepStrictEqual(result.get('https://example.com'), expected);
        });
        it('should work on a real trace', /*#__PURE__*/ _async_to_generator(function() {
            var requests, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            createRequests(trace)
                        ];
                    case 1:
                        requests = _state.sent();
                        result = NetworkAnalyzer.estimateServerResponseTimeByOrigin(requests);
                        assertCloseEnough(result.get('https://www.paulirish.com').avg, 35);
                        assertCloseEnough(result.get('https://www.googletagmanager.com').avg, 8);
                        assertCloseEnough(result.get('https://www.google-analytics.com').avg, 8);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should approximate well with either method', /*#__PURE__*/ _async_to_generator(function() {
            var requests, result, resultApprox;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            createRequests(trace)
                        ];
                    case 1:
                        requests = _state.sent();
                        result = NetworkAnalyzer.estimateServerResponseTimeByOrigin(requests).get(NetworkAnalyzer.summary);
                        resultApprox = NetworkAnalyzer.estimateServerResponseTimeByOrigin(requests, {
                            forceCoarseEstimates: true
                        }).get(NetworkAnalyzer.summary);
                        assertCloseEnough(result.min, resultApprox.min, 20);
                        assertCloseEnough(result.avg, resultApprox.avg, 30);
                        assertCloseEnough(result.median, resultApprox.median, 30);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('#estimateThroughput', function() {
        var createThroughputRecord = function createThroughputRecord(responseHeadersEndTimeInS, networkEndTimeInS, extras) {
            return Object.assign({
                responseHeadersEndTime: responseHeadersEndTimeInS * 1000,
                networkEndTime: networkEndTimeInS * 1000,
                transferSize: 1000,
                finished: true,
                failed: false,
                statusCode: 200,
                url: 'https://google.com/logo.png',
                parsedURL: {
                    scheme: 'https'
                }
            }, extras);
        };
        var estimateThroughput = NetworkAnalyzer.estimateThroughput;
        it('should return Infinity for no/missing records', function() {
            assert.strictEqual(estimateThroughput([]), Infinity);
            assert.strictEqual(estimateThroughput([
                createThroughputRecord(0, 0, {
                    finished: false
                })
            ]), Infinity);
        });
        it('should compute correctly for a basic waterfall', function() {
            var result = estimateThroughput([
                createThroughputRecord(0, 1),
                createThroughputRecord(1, 2),
                createThroughputRecord(2, 6)
            ]);
            assert.strictEqual(result, 500 * 8);
        });
        it('should compute correctly for concurrent requests', function() {
            var result = estimateThroughput([
                createThroughputRecord(0, 1),
                createThroughputRecord(0.5, 1)
            ]);
            assert.strictEqual(result, 2000 * 8);
        });
        it('should compute correctly for gaps', function() {
            var result = estimateThroughput([
                createThroughputRecord(0, 1),
                createThroughputRecord(3, 4)
            ]);
            assert.strictEqual(result, 1000 * 8);
        });
        it('should compute correctly for partially overlapping requests', function() {
            var result = estimateThroughput([
                createThroughputRecord(0, 1),
                createThroughputRecord(0.5, 1.5),
                createThroughputRecord(1.25, 3),
                createThroughputRecord(1.4, 4),
                createThroughputRecord(5, 9)
            ]);
            assert.strictEqual(result, 625 * 8);
        });
        it('should exclude failed records', function() {
            var result = estimateThroughput([
                createThroughputRecord(0, 2),
                createThroughputRecord(3, 4, {
                    failed: true
                })
            ]);
            assert.strictEqual(result, 500 * 8);
        });
        it('should exclude cached records', function() {
            var result = estimateThroughput([
                createThroughputRecord(0, 2),
                createThroughputRecord(3, 4, {
                    statusCode: 304
                })
            ]);
            assert.strictEqual(result, 500 * 8);
        });
        it('should exclude unfinished records', function() {
            var result = estimateThroughput([
                createThroughputRecord(0, 2),
                createThroughputRecord(3, 4, {
                    finished: false
                })
            ]);
            assert.strictEqual(result, 500 * 8);
        });
        it('should exclude data URIs', function() {
            var result = estimateThroughput([
                createThroughputRecord(0, 2),
                createThroughputRecord(3, 4, {
                    parsedURL: {
                        scheme: 'data'
                    }
                })
            ]);
            assert.strictEqual(result, 500 * 8);
        });
    });
    describe('#computeRTTAndServerResponseTime', function() {
        it('should work', /*#__PURE__*/ _async_to_generator(function() {
            var requests, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            createRequests(trace)
                        ];
                    case 1:
                        requests = _state.sent();
                        result = NetworkAnalyzer.computeRTTAndServerResponseTime(requests);
                        expect(result.rtt).to.be.closeTo(0.082, 0.001);
                        assert.deepStrictEqual(_to_consumable_array(result.additionalRttByOrigin.entries()), [
                            [
                                'https://www.paulirish.com',
                                9.788999999999994
                            ],
                            [
                                'https://www.googletagmanager.com',
                                17.21999999999999
                            ],
                            [
                                'https://fonts.googleapis.com',
                                16.816000000000003
                            ],
                            [
                                'https://fonts.gstatic.com',
                                1.6889999999999998
                            ],
                            [
                                'https://www.google-analytics.com',
                                9.924999999999997
                            ],
                            [
                                'https://paulirish.disqus.com',
                                9.000999999999998
                            ],
                            [
                                'https://firebaseinstallations.googleapis.com',
                                0
                            ],
                            [
                                'https://firebaseremoteconfig.googleapis.com',
                                0.1823
                            ],
                            [
                                '__SUMMARY__',
                                0
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('#findMainDocument', function() {
        it('should find the main document', /*#__PURE__*/ _async_to_generator(function() {
            var requests, mainDocument;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            createRequests(trace)
                        ];
                    case 1:
                        requests = _state.sent();
                        mainDocument = NetworkAnalyzer.findResourceForUrl(requests, 'https://www.paulirish.com/');
                        assert.strictEqual(mainDocument.url, 'https://www.paulirish.com/');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should find the main document if the URL includes a fragment', /*#__PURE__*/ _async_to_generator(function() {
            var requests, mainDocument;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            createRequests(trace)
                        ];
                    case 1:
                        requests = _state.sent();
                        mainDocument = NetworkAnalyzer.findResourceForUrl(requests, 'https://www.paulirish.com/#info');
                        assert.strictEqual(mainDocument.url, 'https://www.paulirish.com/');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('#resolveRedirects', function() {
        it('should resolve to the same document when no redirect', /*#__PURE__*/ _async_to_generator(function() {
            var requests, mainDocument, finalDocument;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            createRequests(trace)
                        ];
                    case 1:
                        requests = _state.sent();
                        mainDocument = NetworkAnalyzer.findResourceForUrl(requests, 'https://www.paulirish.com/');
                        finalDocument = NetworkAnalyzer.resolveRedirects(mainDocument);
                        assert.strictEqual(mainDocument.url, finalDocument.url);
                        assert.strictEqual(finalDocument.url, 'https://www.paulirish.com/');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should resolve to the final document with redirects', /*#__PURE__*/ _async_to_generator(function() {
            var requests, mainDocument, finalDocument;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            createRequests(traceWithRedirect)
                        ];
                    case 1:
                        requests = _state.sent();
                        mainDocument = NetworkAnalyzer.findResourceForUrl(requests, 'http://www.vkontakte.ru/');
                        finalDocument = NetworkAnalyzer.resolveRedirects(mainDocument);
                        assert.notEqual(mainDocument.url, finalDocument.url);
                        assert.strictEqual(finalDocument.url, 'https://m.vk.com/');
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=NetworkAnalyzer.test.js.map


}),
"./models/trace/lantern/testing/MetricTestUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getComputationDataFromFixture: function() { return getComputationDataFromFixture; },
  loadTrace: function() { return loadTrace; },
  runTraceEngine: function() { return runTraceEngine; }
});
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../trace.js */ "./models/trace/trace.js");
/* harmony import */var _lantern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lantern.js */ "./models/trace/lantern/lantern.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Why can other tests import this directly but we get yelled at here?
// eslint-disable-next-line rulesdir/es_modules_import
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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



function loadTrace(context, name) {
    return _loadTrace.apply(this, arguments);
}
function _loadTrace() {
    _loadTrace = _async_to_generator(function(context, name) {
        var traceEvents;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(context, name)
                    ];
                case 1:
                    traceEvents = _state.sent();
                    return [
                        2,
                        {
                            traceEvents: traceEvents
                        }
                    ];
            }
        });
    });
    return _loadTrace.apply(this, arguments);
}
function runTraceEngine(trace) {
    return _runTraceEngine.apply(this, arguments);
}
function _runTraceEngine() {
    _runTraceEngine = _async_to_generator(function(trace) {
        var processor;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    processor = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Processor.TraceProcessor.createWithAllHandlers();
                    return [
                        4,
                        processor.parse(trace.traceEvents)
                    ];
                case 1:
                    _state.sent();
                    if (!processor.traceParsedData) {
                        throw new Error('No data');
                    }
                    return [
                        2,
                        processor.traceParsedData
                    ];
            }
        });
    });
    return _runTraceEngine.apply(this, arguments);
}
function getComputationDataFromFixture(_) {
    return _getComputationDataFromFixture.apply(this, arguments);
}
function _getComputationDataFromFixture() {
    _getComputationDataFromFixture = _async_to_generator(function(param) {
        var trace, settings, url, traceEngineData, requests, networkAnalysis;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    trace = param.trace, settings = param.settings, url = param.url;
                    settings = settings !== null && settings !== void 0 ? settings : {};
                    if (!settings.throttlingMethod) {
                        settings.throttlingMethod = 'simulate';
                    }
                    return [
                        4,
                        runTraceEngine(trace)
                    ];
                case 1:
                    traceEngineData = _state.sent();
                    requests = _trace_js__WEBPACK_IMPORTED_MODULE_1__.LanternComputationData.createNetworkRequests(trace, traceEngineData);
                    networkAnalysis = _lantern_js__WEBPACK_IMPORTED_MODULE_2__.Core.NetworkAnalyzer.analyze(requests);
                    return [
                        2,
                        {
                            simulator: _lantern_js__WEBPACK_IMPORTED_MODULE_2__.Simulation.Simulator.createSimulator(_object_spread_props(_object_spread({}, settings), {
                                networkAnalysis: networkAnalysis
                            })),
                            graph: _trace_js__WEBPACK_IMPORTED_MODULE_1__.LanternComputationData.createGraph(requests, trace, traceEngineData, url),
                            processedNavigation: _trace_js__WEBPACK_IMPORTED_MODULE_1__.LanternComputationData.createProcessedNavigation(traceEngineData)
                        }
                    ];
            }
        });
    });
    return _getComputationDataFromFixture.apply(this, arguments);
}
 //# sourceMappingURL=MetricTestUtils.js.map


}),
"./models/trace/lantern/testing/testing.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getComputationDataFromFixture: function() { return /* reexport safe */ _MetricTestUtils_js__WEBPACK_IMPORTED_MODULE_0__.getComputationDataFromFixture; },
  loadTrace: function() { return /* reexport safe */ _MetricTestUtils_js__WEBPACK_IMPORTED_MODULE_0__.loadTrace; },
  runTraceEngine: function() { return /* reexport safe */ _MetricTestUtils_js__WEBPACK_IMPORTED_MODULE_0__.runTraceEngine; }
});
/* harmony import */var _MetricTestUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetricTestUtils.js */ "./models/trace/lantern/testing/MetricTestUtils.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=testing.js.map


}),

}]);