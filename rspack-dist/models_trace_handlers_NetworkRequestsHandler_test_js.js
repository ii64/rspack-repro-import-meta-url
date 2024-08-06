"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_NetworkRequestsHandler_test_js"], {
"./models/trace/handlers/NetworkRequestsHandler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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


describe('NetworkRequestsHandler', function() {
    describe('error handling', function() {
        it('throws if handleEvent is called before it is initialized', function() {
            assert.throws(function() {
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.handleEvent({});
            }, 'Network Request handler is not initialized');
        });
        it('throws if finalize is called before initialize', /*#__PURE__*/ _async_to_generator(function() {
            var thrown, e;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        thrown = null;
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
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.finalize()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            3,
                            4
                        ];
                    case 3:
                        e = _state.sent();
                        thrown = e;
                        return [
                            3,
                            4
                        ];
                    case 4:
                        assert.strictEqual(thrown === null || thrown === void 0 ? void 0 : thrown.message, 'Network Request handler is not initialized');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('network requests calculations', function() {
        beforeEach(function() {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.initialize();
        });
        it('calculates network requests correctly', /*#__PURE__*/ _async_to_generator(function() {
            var traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, requestsByOrigin, topLevelRequests, pageRequestExpected, cssRequestExpected, cssRequestBlockingStatusExpected, blockingJSRequestExpected, blockingJSBlockingStatusExpected, moduleRequestExpected, moduleRequestBlockingStatusExpected, fontCSSRequests, fontCSSRequestExpected, fontCSSBlockingStatusExpected, fontDataRequests, fontDataRequestExpected, fontDataRequestBlockingStatusExpected;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'load-simple.json.gz')
                        ];
                    case 1:
                        traceEvents = _state.sent();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.handleEvent(event);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.finalize()
                        ];
                    case 3:
                        _state.sent();
                        requestsByOrigin = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.data().byOrigin;
                        assert.strictEqual(requestsByOrigin.size, 3, 'Too many origins detected');
                        topLevelRequests = requestsByOrigin.get('localhost:8080') || {
                            all: []
                        };
                        assert.strictEqual(topLevelRequests.all.length, 4, 'Incorrect number of requests');
                        // Page Request.
                        pageRequestExpected = new Map([
                            [
                                'queueing',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(25085)
                            ],
                            [
                                'stalled',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(5670)
                            ],
                            [
                                'dnsLookup',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(105)
                            ],
                            [
                                'initialConnection',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(498)
                            ],
                            [
                                'ssl',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'requestSent',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(363)
                            ],
                            [
                                'waiting',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(1383)
                            ],
                            [
                                'download',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(4827)
                            ],
                            [
                                'networkDuration',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(38503)
                            ]
                        ]);
                        assertDataArgsProcessedDataStats(topLevelRequests.all, 'http://localhost:8080/', pageRequestExpected);
                        // CSS Request.
                        cssRequestExpected = new Map([
                            [
                                'queueing',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'stalled',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(2175)
                            ],
                            [
                                'dnsLookup',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'initialConnection',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'ssl',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'requestSent',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'waiting',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'download',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(1294)
                            ],
                            [
                                'networkDuration',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ]
                        ]);
                        cssRequestBlockingStatusExpected = new Map([
                            [
                                'renderBlocking',
                                'blocking'
                            ]
                        ]);
                        assertDataArgsProcessedDataStats(topLevelRequests.all, 'http://localhost:8080/styles.css', cssRequestExpected);
                        assertDataArgsStats(topLevelRequests.all, 'http://localhost:8080/styles.css', cssRequestBlockingStatusExpected);
                        // Blocking JS Request.
                        blockingJSRequestExpected = new Map([
                            [
                                'queueing',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'stalled',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(2126)
                            ],
                            [
                                'dnsLookup',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'initialConnection',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'ssl',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'requestSent',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'waiting',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'download',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(1207)
                            ],
                            [
                                'networkDuration',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ]
                        ]);
                        blockingJSBlockingStatusExpected = new Map([
                            [
                                'renderBlocking',
                                'in_body_parser_blocking'
                            ]
                        ]);
                        assertDataArgsProcessedDataStats(topLevelRequests.all, 'http://localhost:8080/blocking.js', blockingJSRequestExpected);
                        assertDataArgsStats(topLevelRequests.all, 'http://localhost:8080/blocking.js', blockingJSBlockingStatusExpected);
                        // Module JS Request (cached).
                        moduleRequestExpected = new Map([
                            [
                                'queueing',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'stalled',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(76865)
                            ],
                            [
                                'dnsLookup',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'initialConnection',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'ssl',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'requestSent',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'waiting',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'download',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(27839)
                            ],
                            [
                                'networkDuration',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ]
                        ]);
                        moduleRequestBlockingStatusExpected = new Map([
                            [
                                'renderBlocking',
                                'non_blocking'
                            ]
                        ]);
                        assertDataArgsProcessedDataStats(topLevelRequests.all, 'http://localhost:8080/module.js', moduleRequestExpected);
                        assertDataArgsStats(topLevelRequests.all, 'http://localhost:8080/module.js', moduleRequestBlockingStatusExpected);
                        // Google Fonts CSS Request (cached).
                        fontCSSRequests = requestsByOrigin.get('fonts.googleapis.com') || {
                            all: []
                        };
                        assert.strictEqual(fontCSSRequests.all.length, 1, 'Incorrect number of requests');
                        fontCSSRequestExpected = new Map([
                            [
                                'queueing',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'stalled',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(3178)
                            ],
                            [
                                'dnsLookup',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'initialConnection',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'ssl',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'requestSent',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'waiting',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'download',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(1203)
                            ],
                            [
                                'networkDuration',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ]
                        ]);
                        fontCSSBlockingStatusExpected = new Map([
                            [
                                'renderBlocking',
                                'blocking'
                            ]
                        ]);
                        assertDataArgsProcessedDataStats(fontCSSRequests.all, 'https://fonts.googleapis.com/css2?family=Orelega+One&display=swap', fontCSSRequestExpected);
                        assertDataArgsStats(fontCSSRequests.all, 'https://fonts.googleapis.com/css2?family=Orelega+One&display=swap', fontCSSBlockingStatusExpected);
                        // Google Fonts Data Request (cached).
                        fontDataRequests = requestsByOrigin.get('fonts.gstatic.com') || {
                            all: []
                        };
                        assert.strictEqual(fontDataRequests.all.length, 1, 'Incorrect number of requests');
                        fontDataRequestExpected = new Map([
                            [
                                'queueing',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'stalled',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(1929)
                            ],
                            [
                                'dnsLookup',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'initialConnection',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'ssl',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'requestSent',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'waiting',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ],
                            [
                                'download',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(962)
                            ],
                            [
                                'networkDuration',
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)
                            ]
                        ]);
                        fontDataRequestBlockingStatusExpected = new Map([
                            [
                                'renderBlocking',
                                'non_blocking'
                            ]
                        ]);
                        assertDataArgsProcessedDataStats(fontDataRequests.all, 'https://fonts.gstatic.com/s/orelegaone/v1/3qTpojOggD2XtAdFb-QXZFt93kY.woff2', fontDataRequestExpected);
                        assertDataArgsStats(fontDataRequests.all, 'https://fonts.gstatic.com/s/orelegaone/v1/3qTpojOggD2XtAdFb-QXZFt93kY.woff2', fontDataRequestBlockingStatusExpected);
                        return [
                            2
                        ];
                }
            });
        }));
        it('calculates Websocket events correctly', /*#__PURE__*/ _async_to_generator(function() {
            var traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, webSocketEvents;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'network-websocket-messages.json.gz')
                        ];
                    case 1:
                        traceEvents = _state.sent();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.handleEvent(event);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.finalize()
                        ];
                    case 3:
                        _state.sent();
                        webSocketEvents = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.data().webSocket;
                        assert.strictEqual(webSocketEvents[0].events.length, 9, 'Incorrect number of events');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('parses the change priority request', function() {
        beforeEach(function() {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.initialize();
        });
        it('changes priority of the resouce', /*#__PURE__*/ _async_to_generator(function() {
            var traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, byTime, imageRequest;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'changing-priority.json.gz')
                        ];
                    case 1:
                        traceEvents = _state.sent();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.handleEvent(event);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.finalize()
                        ];
                    case 3:
                        _state.sent();
                        byTime = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.data().byTime;
                        imageRequest = byTime.find(function(request) {
                            return request.args.data.url === 'https://via.placeholder.com/3000.jpg';
                        });
                        if (!imageRequest) {
                            throw new Error('Could not find expected network request.');
                        }
                        assert.strictEqual(imageRequest.args.data.priority, 'High');
                        assert.strictEqual(imageRequest.args.data.initialPriority, 'Medium');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('redirects', function() {
        beforeEach(function() {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.initialize();
        });
        it('calculates redirects correctly (navigations)', /*#__PURE__*/ _async_to_generator(function() {
            var traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, byTime;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'redirects.json.gz')
                        ];
                    case 1:
                        traceEvents = _state.sent();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.handleEvent(event);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.finalize()
                        ];
                    case 3:
                        _state.sent();
                        byTime = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.data().byTime;
                        assert.strictEqual(byTime.length, 2, 'Incorrect number of requests');
                        assert.strictEqual(byTime[0].args.data.redirects.length, 0, 'Incorrect number of redirects (request 0)');
                        assert.deepStrictEqual(byTime[1].args.data.redirects, [
                            {
                                url: 'http://localhost:3000/foo',
                                priority: 'VeryHigh',
                                requestMethod: 'GET',
                                ts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(1311223447642),
                                dur: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(7845)
                            },
                            {
                                url: 'http://localhost:3000/bar',
                                priority: 'VeryHigh',
                                requestMethod: 'GET',
                                ts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(1311223455487),
                                dur: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(3771)
                            }
                        ], 'Incorrect number of redirects (request 1)');
                        return [
                            2
                        ];
                }
            });
        }));
        it('calculates redirects correctly (subresources)', /*#__PURE__*/ _async_to_generator(function() {
            var traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, byTime;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'redirects-subresource-multiple.json.gz')
                        ];
                    case 1:
                        traceEvents = _state.sent();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.handleEvent(event);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.finalize()
                        ];
                    case 3:
                        _state.sent();
                        byTime = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.data().byTime;
                        assert.strictEqual(byTime.length, 2, 'Incorrect number of requests');
                        assert.strictEqual(byTime[0].args.data.redirects.length, 0, 'Incorrect number of redirects (request 0)');
                        assert.deepStrictEqual(byTime[1].args.data.redirects, [
                            {
                                url: 'http://localhost:3000/foo.js',
                                priority: 'Low',
                                requestMethod: 'GET',
                                ts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(183611568786),
                                dur: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(506233)
                            },
                            {
                                url: 'http://localhost:3000/bar.js',
                                priority: 'Low',
                                requestMethod: 'GET',
                                ts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(183612075019),
                                dur: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(802726)
                            }
                        ], 'Incorrect number of redirects (request 1)');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('initiators', function() {
        beforeEach(function() {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.initialize();
        });
        it('calculate the initiator by `initiator` field correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _event_args_data_initiator, traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, _TraceModel_Handlers_ModelHandlers_NetworkRequests_data, eventToInitiator, byTime, event1, initiator;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'network-requests-initiators.json.gz')
                        ];
                    case 1:
                        traceEvents = _state.sent();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.handleEvent(event);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.finalize()
                        ];
                    case 3:
                        _state.sent();
                        _TraceModel_Handlers_ModelHandlers_NetworkRequests_data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.data(), eventToInitiator = _TraceModel_Handlers_ModelHandlers_NetworkRequests_data.eventToInitiator, byTime = _TraceModel_Handlers_ModelHandlers_NetworkRequests_data.byTime;
                        // Find the network request to test, it is initiated by `youtube.com`.
                        event1 = byTime.find(function(event) {
                            return event.ts === 1491680762420;
                        });
                        if (!event1) {
                            throw new Error('Could not find the network request.');
                        }
                        assert.strictEqual(event1.args.data.url, 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=YouTube+Sans:wght@300..900&display=swap');
                        initiator = eventToInitiator.get(event1);
                        if (!initiator) {
                            throw new Error('Did not find expected initiator for the network request');
                        }
                        assert.strictEqual(initiator.args.data.url, 'https://www.youtube.com/');
                        assert.strictEqual(initiator.args.data.url, (_event_args_data_initiator = event1.args.data.initiator) === null || _event_args_data_initiator === void 0 ? void 0 : _event_args_data_initiator.url);
                        return [
                            2
                        ];
                }
            });
        }));
        it('calculate the initiator by top frame correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _event_args_data_initiator, _event_args_data_stackTrace, traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, _TraceModel_Handlers_ModelHandlers_NetworkRequests_data, eventToInitiator, byTime, event1, initiator;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'network-requests-initiators.json.gz')
                        ];
                    case 1:
                        traceEvents = _state.sent();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.handleEvent(event);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.finalize()
                        ];
                    case 3:
                        _state.sent();
                        _TraceModel_Handlers_ModelHandlers_NetworkRequests_data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.data(), eventToInitiator = _TraceModel_Handlers_ModelHandlers_NetworkRequests_data.eventToInitiator, byTime = _TraceModel_Handlers_ModelHandlers_NetworkRequests_data.byTime;
                        // Find the network request to test, it is initiated by `                `.
                        event1 = byTime.find(function(event) {
                            return event.ts === 1491681999060;
                        });
                        if (!event1) {
                            throw new Error('Could not find the network request.');
                        }
                        assert.strictEqual(event1.args.data.url, 'https://www.youtube.com/s/player/5b22937f/player_ias.vflset/en_US/base.js');
                        initiator = eventToInitiator.get(event1);
                        if (!initiator) {
                            throw new Error('Did not find expected initiator for the network request');
                        }
                        assert.strictEqual(initiator.args.data.url, 'https://www.youtube.com/s/desktop/28bb7000/jsbin/desktop_polymer.vflset/desktop_polymer.js');
                        assert.isUndefined((_event_args_data_initiator = event1.args.data.initiator) === null || _event_args_data_initiator === void 0 ? void 0 : _event_args_data_initiator.url);
                        assert.strictEqual(initiator.args.data.url, (_event_args_data_stackTrace = event1.args.data.stackTrace) === null || _event_args_data_stackTrace === void 0 ? void 0 : _event_args_data_stackTrace[0].url);
                        return [
                            2
                        ];
                }
            });
        }));
    });
});
function assertDataArgsStats(requests, url, stats) {
    var request = requests.find(function(request) {
        return request.args.data.url === url;
    });
    if (!request) {
        assert.fail("Unable to find request for URL ".concat(url));
        return;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = stats.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), name = _step_value[0], value = _step_value[1];
            if (typeof request.args.data[name] === 'number') {
                var expectedValue = value;
                var actualValueRounded = Number(request.args.data[name].toPrecision(5));
                assert.strictEqual(actualValueRounded, expectedValue, url);
            } else {
                assert.strictEqual(request.args.data[name], value, url);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function assertDataArgsProcessedDataStats(requests, url, stats) {
    var request = requests.find(function(request) {
        return request.args.data.url === url;
    });
    if (!request) {
        assert.fail("Unable to find request for URL ".concat(url));
        return;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = stats.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), name = _step_value[0], value = _step_value[1];
            if (typeof request.args.data.syntheticData[name] === 'number') {
                var expectedValue = value;
                var actualValueRounded = Number(request.args.data.syntheticData[name].toPrecision(5));
                assert.strictEqual(actualValueRounded, expectedValue, url);
            } else {
                assert.strictEqual(request.args.data.syntheticData[name], value, url);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
} //# sourceMappingURL=NetworkRequestsHandler.test.js.map


}),

}]);