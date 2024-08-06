"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_lantern_simulation_Simulator_test_js"], {
"./models/trace/lantern/simulation/Simulator.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../trace.js */ "./models/trace/trace.js");
/* harmony import */var _lantern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lantern.js */ "./models/trace/lantern/lantern.js");
/* harmony import */var _testing_testing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../testing/testing.js */ "./models/trace/lantern/testing/testing.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ts-nocheck TODO(crbug.com/348449529)
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




var _Lantern_Graph = _lantern_js__WEBPACK_IMPORTED_MODULE_2__.Graph, NetworkNode = _Lantern_Graph.NetworkNode, CPUNode = _Lantern_Graph.CPUNode;
var _Lantern_Simulation = _lantern_js__WEBPACK_IMPORTED_MODULE_2__.Simulation, Simulator = _Lantern_Simulation.Simulator, DNSCache = _Lantern_Simulation.DNSCache;
var nextRequestId = 1;
var nextTid = 1;
function createGraph(trace) {
    return _createGraph.apply(this, arguments);
}
function _createGraph() {
    _createGraph = _async_to_generator(function(trace) {
        var traceEngineData, requests;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_testing_js__WEBPACK_IMPORTED_MODULE_3__.runTraceEngine)(trace)
                    ];
                case 1:
                    traceEngineData = _state.sent();
                    requests = _trace_js__WEBPACK_IMPORTED_MODULE_1__.LanternComputationData.createNetworkRequests(trace, traceEngineData);
                    return [
                        2,
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.LanternComputationData.createGraph(requests, trace, traceEngineData)
                    ];
            }
        });
    });
    return _createGraph.apply(this, arguments);
}
function request(opts) {
    var scheme = opts.scheme || 'http';
    var url = "".concat(scheme, "://example.com");
    var rendererStartTime = opts.startTime;
    var networkEndTime = opts.endTime;
    delete opts.startTime;
    delete opts.endTime;
    return Object.assign({
        requestId: opts.requestId || nextRequestId++,
        url: url,
        transferSize: opts.transferSize || 1000,
        protocol: scheme,
        parsedURL: {
            scheme: scheme,
            host: 'example.com',
            securityOrigin: url
        },
        timing: opts.timing,
        rendererStartTime: rendererStartTime,
        networkEndTime: networkEndTime
    }, opts);
}
function cpuTask(param) {
    var tid = param.tid, ts = param.ts, duration = param.duration;
    tid = tid || nextTid++;
    ts = ts || 0;
    var dur = (duration || 0) * 1000 / 5;
    return {
        tid: tid,
        ts: ts,
        dur: dur
    };
}
describe('DependencyGraph/Simulator', function() {
    // Insulate the simulator tests from DNS multiplier changes
    var originalDNSMultiplier;
    var trace;
    before(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_testing_js__WEBPACK_IMPORTED_MODULE_3__.loadTrace)(this, 'lantern/progressive-app/trace.json.gz')
                    ];
                case 1:
                    trace = _state.sent();
                    originalDNSMultiplier = DNSCache.rttMultiplier;
                    DNSCache.rttMultiplier = 1;
                    return [
                        2
                    ];
            }
        });
    }));
    after(function() {
        DNSCache.rttMultiplier = originalDNSMultiplier;
    });
    describe('.simulate', function() {
        var assertNodeTiming = function assertNodeTiming(result, node, assertions) {
            var timing = result.nodeTimings.get(node);
            assert.ok(timing, 'missing node timing information');
            Object.keys(assertions).forEach(function(key) {
                assert.strictEqual(timing[key], assertions[key]);
            });
        };
        var serverResponseTimeByOrigin = new Map([
            [
                'http://example.com',
                500
            ]
        ]);
        it('should simulate basic network graphs', function() {
            var rootNode = new NetworkNode(request({}));
            var simulator = new Simulator({
                serverResponseTimeByOrigin: serverResponseTimeByOrigin
            });
            var result = simulator.simulate(rootNode);
            // should be 3 RTTs and 500ms for the server response time
            assert.strictEqual(result.timeInMs, 450 + 500);
            assertNodeTiming(result, rootNode, {
                startTime: 0,
                endTime: 950
            });
        });
        it('should simulate basic mixed graphs', function() {
            var rootNode = new NetworkNode(request({}));
            var cpuNode = new CPUNode(cpuTask({
                duration: 200
            }));
            cpuNode.addDependency(rootNode);
            var simulator = new Simulator({
                serverResponseTimeByOrigin: serverResponseTimeByOrigin,
                cpuSlowdownMultiplier: 5
            });
            var result = simulator.simulate(rootNode);
            // should be 3 RTTs and 500ms for the server response time + 200 CPU
            assert.strictEqual(result.timeInMs, 450 + 500 + 200);
            assertNodeTiming(result, rootNode, {
                startTime: 0,
                endTime: 950
            });
            assertNodeTiming(result, cpuNode, {
                startTime: 950,
                endTime: 1150
            });
        });
        it('should simulate basic network waterfall graphs', function() {
            var nodeA = new NetworkNode(request({
                startTime: 0,
                endTime: 1
            }));
            var nodeB = new NetworkNode(request({
                startTime: 0,
                endTime: 3
            }));
            var nodeC = new NetworkNode(request({
                startTime: 0,
                endTime: 5
            }));
            var nodeD = new NetworkNode(request({
                startTime: 0,
                endTime: 7
            }));
            nodeA.addDependent(nodeB);
            nodeB.addDependent(nodeC);
            nodeC.addDependent(nodeD);
            var simulator = new Simulator({
                serverResponseTimeByOrigin: serverResponseTimeByOrigin
            });
            var result = simulator.simulate(nodeA);
            // should be 950ms for A, 650ms each for B, C, D (no DNS and one-way connection)
            assert.strictEqual(result.timeInMs, 2900);
            assertNodeTiming(result, nodeA, {
                startTime: 0,
                endTime: 950
            });
            assertNodeTiming(result, nodeB, {
                startTime: 950,
                endTime: 1600
            });
            assertNodeTiming(result, nodeC, {
                startTime: 1600,
                endTime: 2250
            });
            assertNodeTiming(result, nodeD, {
                startTime: 2250,
                endTime: 2900
            });
        });
        it('should simulate cached network graphs', function() {
            var nodeA = new NetworkNode(request({
                startTime: 0,
                endTime: 1,
                fromDiskCache: true
            }));
            var nodeB = new NetworkNode(request({
                startTime: 0,
                endTime: 3,
                fromDiskCache: true
            }));
            nodeA.addDependent(nodeB);
            var simulator = new Simulator({
                serverResponseTimeByOrigin: serverResponseTimeByOrigin
            });
            var result = simulator.simulate(nodeA);
            // should be ~8ms each for A, B
            assert.strictEqual(result.timeInMs, 16);
            assertNodeTiming(result, nodeA, {
                startTime: 0,
                endTime: 8
            });
            assertNodeTiming(result, nodeB, {
                startTime: 8,
                endTime: 16
            });
        });
        it('should simulate data URL network graphs', function() {
            var url = 'data:image/jpeg;base64,foobar';
            var protocol = 'data';
            var parsedURL = {
                scheme: 'data',
                host: '',
                securityOrigin: 'null'
            };
            var nodeA = new NetworkNode(request({
                startTime: 0,
                endTime: 1,
                url: url,
                parsedURL: parsedURL,
                protocol: protocol
            }));
            var nodeB = new NetworkNode(request({
                startTime: 0,
                endTime: 3,
                url: url,
                parsedURL: parsedURL,
                protocol: protocol,
                resourceSize: 1024 * 1024
            }));
            nodeA.addDependent(nodeB);
            var simulator = new Simulator({
                serverResponseTimeByOrigin: serverResponseTimeByOrigin
            });
            var result = simulator.simulate(nodeA);
            // should be ~2ms for A (resourceSize 0), ~12ms for B (resourceSize 1MB)
            assert.strictEqual(result.timeInMs, 14);
            assertNodeTiming(result, nodeA, {
                startTime: 0,
                endTime: 2
            });
            assertNodeTiming(result, nodeB, {
                startTime: 2,
                endTime: 14
            });
        });
        it('should simulate basic CPU queue graphs', function() {
            var nodeA = new NetworkNode(request({}));
            var nodeB = new CPUNode(cpuTask({
                duration: 100
            }));
            var nodeC = new CPUNode(cpuTask({
                duration: 600
            }));
            var nodeD = new CPUNode(cpuTask({
                duration: 300
            }));
            nodeA.addDependent(nodeB);
            nodeA.addDependent(nodeC);
            nodeA.addDependent(nodeD);
            var simulator = new Simulator({
                serverResponseTimeByOrigin: serverResponseTimeByOrigin,
                cpuSlowdownMultiplier: 5
            });
            var result = simulator.simulate(nodeA);
            // should be 800ms A, then 1000 ms total for B, C, D in serial
            assert.strictEqual(result.timeInMs, 1950);
            assertNodeTiming(result, nodeA, {
                startTime: 0,
                endTime: 950
            });
            assertNodeTiming(result, nodeB, {
                startTime: 950,
                endTime: 1050
            });
            assertNodeTiming(result, nodeC, {
                startTime: 1050,
                endTime: 1650
            });
            assertNodeTiming(result, nodeD, {
                startTime: 1650,
                endTime: 1950
            });
        });
        it('should simulate basic network waterfall graphs with CPU', function() {
            var nodeA = new NetworkNode(request({}));
            var nodeB = new NetworkNode(request({}));
            var nodeC = new NetworkNode(request({}));
            var nodeD = new NetworkNode(request({}));
            var nodeE = new CPUNode(cpuTask({
                duration: 1000
            }));
            var nodeF = new CPUNode(cpuTask({
                duration: 1000
            }));
            nodeA.addDependent(nodeB);
            nodeB.addDependent(nodeC);
            nodeB.addDependent(nodeE); // finishes 350 ms after C
            nodeC.addDependent(nodeD);
            nodeC.addDependent(nodeF); // finishes 700 ms after D
            var simulator = new Simulator({
                serverResponseTimeByOrigin: serverResponseTimeByOrigin,
                cpuSlowdownMultiplier: 5
            });
            var result = simulator.simulate(nodeA);
            // should be 950ms for A, 650ms each for B, C, D, with F finishing 700 ms after D
            assert.strictEqual(result.timeInMs, 3600);
        });
        it('should simulate basic parallel requests', function() {
            var nodeA = new NetworkNode(request({}));
            var nodeB = new NetworkNode(request({}));
            var nodeC = new NetworkNode(request({
                transferSize: 15000
            }));
            var nodeD = new NetworkNode(request({}));
            nodeA.addDependent(nodeB);
            nodeA.addDependent(nodeC);
            nodeA.addDependent(nodeD);
            var simulator = new Simulator({
                serverResponseTimeByOrigin: serverResponseTimeByOrigin
            });
            var result = simulator.simulate(nodeA);
            // should be 950ms for A and 950ms for C (2 round trips of downloading, but no DNS)
            assert.strictEqual(result.timeInMs, 950 + 950);
        });
        it('should make connections in parallel', function() {
            var nodeA = new NetworkNode(request({
                startTime: 0,
                networkRequestTime: 0,
                endTime: 1
            }));
            var nodeB = new NetworkNode(request({
                startTime: 2,
                networkRequestTime: 2,
                endTime: 3
            }));
            var nodeC = new NetworkNode(request({
                startTime: 2,
                networkRequestTime: 2,
                endTime: 5
            }));
            var nodeD = new NetworkNode(request({
                startTime: 2,
                networkRequestTime: 2,
                endTime: 7
            }));
            nodeA.addDependent(nodeB);
            nodeA.addDependent(nodeC);
            nodeA.addDependent(nodeD);
            var simulator = new Simulator({
                serverResponseTimeByOrigin: serverResponseTimeByOrigin
            });
            var result = simulator.simulate(nodeA);
            // should be 950ms for A, 650ms for B reusing connection, 800ms for C and D in parallel.
            assert.strictEqual(result.timeInMs, 950 + 800);
            assertNodeTiming(result, nodeA, {
                startTime: 0,
                endTime: 950
            });
            assertNodeTiming(result, nodeB, {
                startTime: 950,
                endTime: 1600
            });
            assertNodeTiming(result, nodeC, {
                startTime: 950,
                endTime: 1750
            });
            assertNodeTiming(result, nodeD, {
                startTime: 950,
                endTime: 1750
            });
        });
        it('should adjust throughput based on number of requests', function() {
            var nodeA = new NetworkNode(request({}));
            var nodeB = new NetworkNode(request({}));
            var nodeC = new NetworkNode(request({
                transferSize: 14000
            }));
            var nodeD = new NetworkNode(request({}));
            nodeA.addDependent(nodeB);
            nodeA.addDependent(nodeC);
            nodeA.addDependent(nodeD);
            // 80 kbps while all 3 download at 150ms/RT = ~1460 bytes/RT
            // 240 kbps while the last one finishes at 150ms/RT = ~4380 bytes/RT
            // ~14000 bytes = 5 RTs
            // 1 RT 80 kbps b/c its shared
            // 1 RT 80 kbps b/c it needs to grow congestion window from being shared
            // 1 RT 160 kbps b/c TCP
            // 2 RT 240 kbps b/c throughput cap
            var simulator = new Simulator({
                serverResponseTimeByOrigin: serverResponseTimeByOrigin,
                throughput: 240000
            });
            var result = simulator.simulate(nodeA);
            // should be 950ms for A and 1400ms for C (5 round trips of downloading)
            assert.strictEqual(result.timeInMs, 950 + (150 + 750 + 500));
        });
        it('should start network requests in startTime order', function() {
            var rootNode = new NetworkNode(request({
                startTime: 0,
                endTime: 0.05,
                connectionId: 1
            }));
            var imageNodes = [
                new NetworkNode(request({
                    startTime: 5
                })),
                new NetworkNode(request({
                    startTime: 4
                })),
                new NetworkNode(request({
                    startTime: 3
                })),
                new NetworkNode(request({
                    startTime: 2
                })),
                new NetworkNode(request({
                    startTime: 1
                }))
            ];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = imageNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var imageNode = _step.value;
                    imageNode.request.connectionReused = true;
                    imageNode.request.connectionId = 1;
                    rootNode.addDependent(imageNode);
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
            var simulator = new Simulator({
                serverResponseTimeByOrigin: serverResponseTimeByOrigin,
                maximumConcurrentRequests: 1
            });
            var result = simulator.simulate(rootNode);
            // should be 3 RTs + SRT for rootNode (950ms)
            // should be 1 RT  + SRT for image nodes in observed order (650ms)
            assertNodeTiming(result, rootNode, {
                startTime: 0,
                endTime: 950
            });
            assertNodeTiming(result, imageNodes[4], {
                startTime: 950,
                endTime: 1600
            });
            assertNodeTiming(result, imageNodes[3], {
                startTime: 1600,
                endTime: 2250
            });
            assertNodeTiming(result, imageNodes[2], {
                startTime: 2250,
                endTime: 2900
            });
            assertNodeTiming(result, imageNodes[1], {
                startTime: 2900,
                endTime: 3550
            });
            assertNodeTiming(result, imageNodes[0], {
                startTime: 3550,
                endTime: 4200
            });
        });
        it('should start network requests in priority order to break startTime ties', function() {
            var rootNode = new NetworkNode(request({
                startTime: 0,
                endTime: 0.05,
                connectionId: 1
            }));
            var imageNodes = [
                new NetworkNode(request({
                    startTime: 0.1,
                    priority: 'VeryLow'
                })),
                new NetworkNode(request({
                    startTime: 0.2,
                    priority: 'Low'
                })),
                new NetworkNode(request({
                    startTime: 0.3,
                    priority: 'Medium'
                })),
                new NetworkNode(request({
                    startTime: 0.4,
                    priority: 'High'
                })),
                new NetworkNode(request({
                    startTime: 0.5,
                    priority: 'VeryHigh'
                }))
            ];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = imageNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var imageNode = _step.value;
                    imageNode.request.connectionReused = true;
                    imageNode.request.connectionId = 1;
                    rootNode.addDependent(imageNode);
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
            var simulator = new Simulator({
                serverResponseTimeByOrigin: serverResponseTimeByOrigin,
                maximumConcurrentRequests: 1
            });
            var result = simulator.simulate(rootNode);
            // should be 3 RTs + SRT for rootNode (950ms)
            // should be 1 RT  + SRT for image nodes in priority order (650ms)
            assertNodeTiming(result, rootNode, {
                startTime: 0,
                endTime: 950
            });
            assertNodeTiming(result, imageNodes[4], {
                startTime: 950,
                endTime: 1600
            });
            assertNodeTiming(result, imageNodes[3], {
                startTime: 1600,
                endTime: 2250
            });
            assertNodeTiming(result, imageNodes[2], {
                startTime: 2250,
                endTime: 2900
            });
            assertNodeTiming(result, imageNodes[1], {
                startTime: 2900,
                endTime: 3550
            });
            assertNodeTiming(result, imageNodes[0], {
                startTime: 3550,
                endTime: 4200
            });
        });
        it('should simulate two graphs in a row', function() {
            var simulator = new Simulator({
                serverResponseTimeByOrigin: serverResponseTimeByOrigin
            });
            var nodeA = new NetworkNode(request({}));
            var nodeB = new NetworkNode(request({}));
            var nodeC = new NetworkNode(request({
                transferSize: 15000
            }));
            var nodeD = new NetworkNode(request({}));
            nodeA.addDependent(nodeB);
            nodeA.addDependent(nodeC);
            nodeA.addDependent(nodeD);
            var resultA = simulator.simulate(nodeA);
            // should be 950ms for A and 950ms for C (2 round trips of downloading, no DNS)
            assert.strictEqual(resultA.timeInMs, 950 + 950);
            var nodeE = new NetworkNode(request({}));
            var nodeF = new NetworkNode(request({}));
            var nodeG = new NetworkNode(request({}));
            nodeE.addDependent(nodeF);
            nodeE.addDependent(nodeG);
            var resultB = simulator.simulate(nodeE);
            // should be 950ms for E and 800ms for F/G
            assert.strictEqual(resultB.timeInMs, 950 + 800);
        });
        it('should maximize throughput with H2', function() {
            var simulator = new Simulator({
                serverResponseTimeByOrigin: serverResponseTimeByOrigin
            });
            var connectionDefaults = {
                protocol: 'h2',
                connectionId: 1
            };
            var nodeA = new NetworkNode(request(_object_spread({
                startTime: 0,
                endTime: 1
            }, connectionDefaults)));
            var nodeB = new NetworkNode(request(_object_spread({
                startTime: 1,
                endTime: 2
            }, connectionDefaults)));
            var nodeC = new NetworkNode(request(_object_spread({
                startTime: 2,
                endTime: 3
            }, connectionDefaults)));
            var nodeD = new NetworkNode(request(_object_spread({
                startTime: 3,
                endTime: 4
            }, connectionDefaults)));
            nodeA.addDependent(nodeB);
            nodeB.addDependent(nodeC);
            nodeB.addDependent(nodeD);
            // Run two simulations:
            //  - The first with C & D in parallel.
            //  - The second with C & D in series.
            // Under HTTP/2 simulation these should be equivalent, but definitely parallel
            // shouldn't be slower.
            var resultA = simulator.simulate(nodeA);
            nodeC.addDependent(nodeD);
            var resultB = simulator.simulate(nodeA);
            expect(resultA.timeInMs).to.be.lessThanOrEqual(resultB.timeInMs);
        });
        it('should throw (not hang) on graphs with cycles', function() {
            var rootNode = new NetworkNode(request({}));
            var depNode = new NetworkNode(request({}));
            rootNode.addDependency(depNode);
            depNode.addDependency(rootNode);
            var simulator = new Simulator({
                serverResponseTimeByOrigin: serverResponseTimeByOrigin
            });
            assert.throws(function() {
                return simulator.simulate(rootNode);
            }, /cycle/);
        });
        describe('on a real trace', function() {
            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.setTestTimeout(this);
            it('should compute a timeInMs', /*#__PURE__*/ _async_to_generator(function() {
                var graph, simulator, result;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                createGraph(trace)
                            ];
                        case 1:
                            graph = _state.sent();
                            simulator = new Simulator({
                                serverResponseTimeByOrigin: serverResponseTimeByOrigin
                            });
                            result = simulator.simulate(graph);
                            expect(result.timeInMs).to.be.greaterThan(100);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should sort the task event times', /*#__PURE__*/ _async_to_generator(function() {
                var graph, simulator, result, nodeTimings, i, startTime, previousStartTime;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                createGraph(trace)
                            ];
                        case 1:
                            graph = _state.sent();
                            simulator = new Simulator({
                                serverResponseTimeByOrigin: serverResponseTimeByOrigin
                            });
                            result = simulator.simulate(graph);
                            nodeTimings = Array.from(result.nodeTimings.entries());
                            for(i = 1; i < nodeTimings.length; i++){
                                startTime = nodeTimings[i][1].startTime;
                                previousStartTime = nodeTimings[i - 1][1].startTime;
                                expect(startTime).to.be.greaterThanOrEqual(previousStartTime);
                            }
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
    describe('.simulateTimespan', function() {
        it('calculates savings using throughput', function() {
            var simulator = new Simulator({
                throughput: 1000,
                observedThroughput: 2000
            });
            var wastedMs = simulator.computeWastedMsFromWastedBytes(500);
            expect(wastedMs).to.be.closeTo(4000, 0.1);
        });
        it('falls back to observed throughput if throughput is 0', function() {
            var simulator = new Simulator({
                throughput: 0,
                observedThroughput: 2000
            });
            var wastedMs = simulator.computeWastedMsFromWastedBytes(500);
            expect(wastedMs).to.be.closeTo(2000, 0.1);
        });
        it('returns 0 if throughput and observed throughput are 0', function() {
            var simulator = new Simulator({
                throughput: 0,
                observedThroughput: 0
            });
            var wastedMs = simulator.computeWastedMsFromWastedBytes(500);
            expect(wastedMs).to.equal(0);
        });
    });
}); //# sourceMappingURL=Simulator.test.js.map


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