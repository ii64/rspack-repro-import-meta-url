"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_lantern_simulation_ConnectionPool_test_js"], {
"./models/trace/lantern/simulation/ConnectionPool.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _lantern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lantern.js */ "./models/trace/lantern/lantern.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ts-nocheck TODO(crbug.com/348449529)
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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

var ConnectionPool = _lantern_js__WEBPACK_IMPORTED_MODULE_0__.Simulation.ConnectionPool;
describe('ConnectionPool', function() {
    var request = function request() {
        var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var url = data.url || 'http://example.com';
        var origin = new URL(url).origin;
        var scheme = url.split(':')[0];
        return _object_spread({
            requestId: String(requestId++),
            url: url,
            protocol: 'http/1.1',
            parsedURL: {
                scheme: scheme,
                securityOrigin: origin
            }
        }, data);
    };
    var simulationOptions = function simulationOptions(options) {
        return Object.assign({
            rtt: 150,
            throughput: 1024,
            additionalRttByOrigin: new Map(),
            serverResponseTimeByOrigin: new Map()
        }, options);
    };
    var rtt = 100;
    var throughput = 10000 * 1024;
    var requestId;
    beforeEach(function() {
        requestId = 1;
    });
    describe('#constructor', function() {
        it('should create the pool', function() {
            var pool = new ConnectionPool([
                request()
            ], simulationOptions({
                rtt: rtt,
                throughput: throughput
            }));
            // Make sure 6 connections are created for each origin
            assert.strictEqual(pool._connectionsByOrigin.get('http://example.com').length, 6);
            // Make sure it populates connectionWasReused
            assert.strictEqual(pool._connectionReusedByRequestId.get('1'), false);
            var connection = pool._connectionsByOrigin.get('http://example.com')[0];
            assert.strictEqual(connection._rtt, rtt);
            assert.strictEqual(connection._throughput, throughput);
            assert.strictEqual(connection._serverLatency, 30); // sets to default value
        });
        it('should set TLS properly', function() {
            var recordA = request({
                url: 'https://example.com'
            });
            var pool = new ConnectionPool([
                recordA
            ], simulationOptions({
                rtt: rtt,
                throughput: throughput
            }));
            var connection = pool._connectionsByOrigin.get('https://example.com')[0];
            assert.ok(connection._ssl, 'should have set connection TLS');
        });
        it('should set H2 properly', function() {
            var recordA = request({
                protocol: 'h2'
            });
            var pool = new ConnectionPool([
                recordA
            ], simulationOptions({
                rtt: rtt,
                throughput: throughput
            }));
            var connection = pool._connectionsByOrigin.get('http://example.com')[0];
            assert.ok(connection.isH2(), 'should have set HTTP/2');
            assert.strictEqual(pool._connectionsByOrigin.get('http://example.com').length, 1);
        });
        it('should set origin-specific RTT properly', function() {
            var additionalRttByOrigin = new Map([
                [
                    'http://example.com',
                    63
                ]
            ]);
            var pool = new ConnectionPool([
                request()
            ], simulationOptions({
                rtt: rtt,
                throughput: throughput,
                additionalRttByOrigin: additionalRttByOrigin
            }));
            var connection = pool._connectionsByOrigin.get('http://example.com')[0];
            assert.ok(connection._rtt, rtt + 63);
        });
        it('should set origin-specific server latency properly', function() {
            var serverResponseTimeByOrigin = new Map([
                [
                    'http://example.com',
                    63
                ]
            ]);
            var pool = new ConnectionPool([
                request()
            ], simulationOptions({
                rtt: rtt,
                throughput: throughput,
                serverResponseTimeByOrigin: serverResponseTimeByOrigin
            }));
            var connection = pool._connectionsByOrigin.get('http://example.com')[0];
            assert.ok(connection._serverLatency, 63);
        });
    });
    describe('.acquire', function() {
        it('should remember the connection associated with each request', function() {
            var requestA = request();
            var requestB = request();
            var pool = new ConnectionPool([
                requestA,
                requestB
            ], simulationOptions({
                rtt: rtt,
                throughput: throughput
            }));
            var connectionForA = pool.acquire(requestA);
            var connectionForB = pool.acquire(requestB);
            for(var i = 0; i < 10; i++){
                assert.strictEqual(pool.acquireActiveConnectionFromRequest(requestA), connectionForA);
                assert.strictEqual(pool.acquireActiveConnectionFromRequest(requestB), connectionForB);
            }
            assert.deepStrictEqual(pool.connectionsInUse(), [
                connectionForA,
                connectionForB
            ]);
        });
        it('should allocate at least 6 connections', function() {
            var pool = new ConnectionPool([
                request()
            ], simulationOptions({
                rtt: rtt,
                throughput: throughput
            }));
            for(var i = 0; i < 6; i++){
                assert.ok(pool.acquire(request()), "did not find connection for ".concat(i, "th request"));
            }
        });
        it('should allocate all connections', function() {
            var records = new Array(7).fill(undefined, 0, 7).map(function() {
                return request();
            });
            var pool = new ConnectionPool(records, simulationOptions({
                rtt: rtt,
                throughput: throughput
            }));
            var connections = records.map(function(request) {
                return pool.acquire(request);
            });
            assert.ok(connections[0], 'did not find connection for 1st request');
            assert.ok(connections[5], 'did not find connection for 6th request');
            assert.ok(connections[6], 'did not find connection for 7th request');
        });
        it('should be oblivious to connection reuse', function() {
            var coldRecord = request();
            var warmRecord = request();
            var pool = new ConnectionPool([
                coldRecord,
                warmRecord
            ], simulationOptions({
                rtt: rtt,
                throughput: throughput
            }));
            pool._connectionReusedByRequestId.set(warmRecord.requestId, true);
            assert.ok(pool.acquire(coldRecord), 'should have acquired connection');
            assert.ok(pool.acquire(warmRecord), 'should have acquired connection');
            pool.release(coldRecord);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = pool._connectionsByOrigin.get('http://example.com')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var connection = _step.value;
                    connection.setWarmed(true);
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
            assert.ok(pool.acquire(coldRecord), 'should have acquired connection');
            assert.ok(pool.acquireActiveConnectionFromRequest(warmRecord), 'should have acquired connection');
        });
        it('should acquire in order of warmness', function() {
            var recordA = request();
            var recordB = request();
            var recordC = request();
            var pool = new ConnectionPool([
                recordA,
                recordB,
                recordC
            ], simulationOptions({
                rtt: rtt,
                throughput: throughput
            }));
            pool._connectionReusedByRequestId.set(recordA.requestId, true);
            pool._connectionReusedByRequestId.set(recordB.requestId, true);
            pool._connectionReusedByRequestId.set(recordC.requestId, true);
            var _pool__connectionsByOrigin_get = _sliced_to_array(pool._connectionsByOrigin.get('http://example.com'), 3), connectionWarm = _pool__connectionsByOrigin_get[0], connectionWarmer = _pool__connectionsByOrigin_get[1], connectionWarmest = _pool__connectionsByOrigin_get[2];
            connectionWarm.setWarmed(true);
            connectionWarm.setCongestionWindow(10);
            connectionWarmer.setWarmed(true);
            connectionWarmer.setCongestionWindow(100);
            connectionWarmest.setWarmed(true);
            connectionWarmest.setCongestionWindow(1000);
            assert.strictEqual(pool.acquire(recordA), connectionWarmest);
            assert.strictEqual(pool.acquire(recordB), connectionWarmer);
            assert.strictEqual(pool.acquire(recordC), connectionWarm);
        });
    });
    describe('.release', function() {
        it('noop for request without connection', function() {
            var requestA = request();
            var pool = new ConnectionPool([
                requestA
            ], simulationOptions({
                rtt: rtt,
                throughput: throughput
            }));
            assert.strictEqual(pool.release(requestA), undefined);
        });
        it('frees the connection for reissue', function() {
            var requests = new Array(6).fill(undefined, 0, 7).map(function() {
                return request();
            });
            var pool = new ConnectionPool(requests, simulationOptions({
                rtt: rtt,
                throughput: throughput
            }));
            requests.push(request());
            requests.forEach(function(request) {
                return pool.acquire(request);
            });
            assert.strictEqual(pool.connectionsInUse().length, 6);
            assert.ok(!pool.acquire(requests[6]), 'had connection that is in use');
            pool.release(requests[0]);
            assert.strictEqual(pool.connectionsInUse().length, 5);
            assert.ok(pool.acquire(requests[6]), 'could not reissue released connection');
            assert.ok(!pool.acquire(requests[0]), 'had connection that is in use');
        });
    });
}); //# sourceMappingURL=ConnectionPool.test.js.map


}),

}]);