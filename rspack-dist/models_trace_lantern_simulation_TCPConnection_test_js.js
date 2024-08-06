"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_lantern_simulation_TCPConnection_test_js"], {
"./models/trace/lantern/simulation/TCPConnection.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _lantern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lantern.js */ "./models/trace/lantern/lantern.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var TCPConnection = _lantern_js__WEBPACK_IMPORTED_MODULE_0__.Simulation.TCPConnection;
describe('TCPConnection', function() {
    describe('#constructor', function() {
        it('should create the connection', function() {
            var rtt = 150;
            var throughput = 1600 * 1024;
            var connection = new TCPConnection(rtt, throughput);
            assert.ok(connection);
            assert.strictEqual(connection._rtt, rtt);
        });
    });
    describe('#maximumSaturatedConnections', function() {
        it('should compute number of supported simulated requests', function() {
            var availableThroughput = 1460 * 8 * 10; // 10 TCP segments/second
            assert.strictEqual(TCPConnection.maximumSaturatedConnections(100, availableThroughput), 1);
            assert.strictEqual(TCPConnection.maximumSaturatedConnections(300, availableThroughput), 3);
            assert.strictEqual(TCPConnection.maximumSaturatedConnections(1000, availableThroughput), 10);
        });
    });
    describe('.setWarmed', function() {
        it('adjusts the time to download appropriately', function() {
            var connection = new TCPConnection(100, Infinity);
            assert.strictEqual(connection.simulateDownloadUntil(0).timeElapsed, 300);
            connection.setWarmed(true);
            assert.strictEqual(connection.simulateDownloadUntil(0).timeElapsed, 100);
        });
    });
    describe('.setCongestionWindow', function() {
        it('adjusts the time to download appropriately', function() {
            var connection = new TCPConnection(100, Infinity);
            assert.deepEqual(connection.simulateDownloadUntil(50000), {
                bytesDownloaded: 50000,
                extraBytesDownloaded: 0,
                congestionWindow: 40,
                roundTrips: 5,
                timeElapsed: 500,
                connectionTiming: {
                    connectionTime: 250,
                    dnsResolutionTime: 0,
                    sslTime: 100,
                    timeToFirstByte: 300
                }
            });
            connection.setCongestionWindow(40); // will download all in one round trip
            assert.deepEqual(connection.simulateDownloadUntil(50000), {
                bytesDownloaded: 50000,
                extraBytesDownloaded: 0,
                congestionWindow: 40,
                roundTrips: 3,
                timeElapsed: 300,
                connectionTiming: {
                    connectionTime: 250,
                    dnsResolutionTime: 0,
                    sslTime: 100,
                    timeToFirstByte: 300
                }
            });
        });
    });
    describe('.setH2OverflowBytesDownloaded', function() {
        it('adjusts the time to download appropriately for H2 connections', function() {
            var connection = new TCPConnection(100, Infinity, 0, true, true);
            connection.setWarmed(true);
            assert.strictEqual(connection.simulateDownloadUntil(30000).timeElapsed, 200);
            connection.setH2OverflowBytesDownloaded(20000);
            assert.strictEqual(connection.simulateDownloadUntil(30000).timeElapsed, 100);
            connection.setH2OverflowBytesDownloaded(50000);
            assert.strictEqual(connection.simulateDownloadUntil(30000).timeElapsed, 0);
        });
        it('does not adjust the time to download for non-H2 connections', function() {
            var connection = new TCPConnection(100, Infinity, 0, true, false);
            connection.setWarmed(true);
            assert.strictEqual(connection.simulateDownloadUntil(30000).timeElapsed, 200);
            connection.setH2OverflowBytesDownloaded(20000);
            assert.strictEqual(connection.simulateDownloadUntil(30000).timeElapsed, 200);
            connection.setH2OverflowBytesDownloaded(50000);
            assert.strictEqual(connection.simulateDownloadUntil(30000).timeElapsed, 200);
        });
    });
    describe('.simulateDownloadUntil', function() {
        describe('when maximumTime is not set', function() {
            it('should provide the correct values small payload non-SSL', function() {
                var connection = new TCPConnection(100, Infinity, 0, false);
                assert.deepEqual(connection.simulateDownloadUntil(7300), {
                    bytesDownloaded: 7300,
                    extraBytesDownloaded: 0,
                    congestionWindow: 10,
                    roundTrips: 2,
                    timeElapsed: 200,
                    connectionTiming: {
                        connectionTime: 150,
                        dnsResolutionTime: 0,
                        sslTime: undefined,
                        timeToFirstByte: 200
                    }
                });
            });
            it('should provide the correct values small payload SSL', function() {
                var connection = new TCPConnection(100, Infinity, 0, true);
                assert.deepEqual(connection.simulateDownloadUntil(7300), {
                    bytesDownloaded: 7300,
                    extraBytesDownloaded: 0,
                    congestionWindow: 10,
                    roundTrips: 3,
                    timeElapsed: 300,
                    connectionTiming: {
                        connectionTime: 250,
                        dnsResolutionTime: 0,
                        sslTime: 100,
                        timeToFirstByte: 300
                    }
                });
            });
            it('should provide the correct values small payload H2', function() {
                var connection = new TCPConnection(100, Infinity, 0, true, true);
                assert.deepEqual(connection.simulateDownloadUntil(7300), {
                    bytesDownloaded: 7300,
                    extraBytesDownloaded: 7300,
                    congestionWindow: 10,
                    roundTrips: 3,
                    timeElapsed: 300,
                    connectionTiming: {
                        connectionTime: 250,
                        dnsResolutionTime: 0,
                        sslTime: 100,
                        timeToFirstByte: 300
                    }
                });
            });
            it('should provide the correct values response time', function() {
                var responseTime = 78;
                var connection = new TCPConnection(100, Infinity, responseTime, true);
                assert.deepEqual(connection.simulateDownloadUntil(7300), {
                    bytesDownloaded: 7300,
                    extraBytesDownloaded: 0,
                    congestionWindow: 10,
                    roundTrips: 3,
                    timeElapsed: 300 + responseTime,
                    connectionTiming: {
                        connectionTime: 250,
                        dnsResolutionTime: 0,
                        sslTime: 100,
                        timeToFirstByte: 378
                    }
                });
            });
            it('should provide the correct values large payload', function() {
                var connection = new TCPConnection(100, 8 * 1000 * 1000);
                var bytesToDownload = 10 * 1000 * 1000; // 10 mb
                assert.deepEqual(connection.simulateDownloadUntil(bytesToDownload), {
                    bytesDownloaded: bytesToDownload,
                    extraBytesDownloaded: 0,
                    congestionWindow: 68,
                    roundTrips: 105,
                    timeElapsed: 10500,
                    connectionTiming: {
                        connectionTime: 250,
                        dnsResolutionTime: 0,
                        sslTime: 100,
                        timeToFirstByte: 300
                    }
                });
            });
            it('should provide the correct values resumed small payload', function() {
                var connection = new TCPConnection(100, Infinity, 0, true);
                assert.deepEqual(connection.simulateDownloadUntil(7300, {
                    timeAlreadyElapsed: 250
                }), {
                    bytesDownloaded: 7300,
                    extraBytesDownloaded: 0,
                    congestionWindow: 10,
                    roundTrips: 3,
                    timeElapsed: 50,
                    connectionTiming: {
                        connectionTime: 250,
                        dnsResolutionTime: 0,
                        sslTime: 100,
                        timeToFirstByte: 300
                    }
                });
            });
            it('should provide the correct values resumed small payload H2', function() {
                var connection = new TCPConnection(100, Infinity, 0, true, true);
                connection.setWarmed(true);
                connection.setH2OverflowBytesDownloaded(10000);
                assert.deepEqual(connection.simulateDownloadUntil(7300), {
                    bytesDownloaded: 0,
                    extraBytesDownloaded: 2700,
                    congestionWindow: 10,
                    roundTrips: 0,
                    timeElapsed: 0,
                    connectionTiming: {
                        timeToFirstByte: 0
                    }
                });
            });
            it('should provide the correct values resumed large payload', function() {
                var connection = new TCPConnection(100, 8 * 1000 * 1000);
                var bytesToDownload = 5 * 1000 * 1000; // 5 mb
                connection.setCongestionWindow(68);
                assert.deepEqual(connection.simulateDownloadUntil(bytesToDownload, {
                    timeAlreadyElapsed: 5234
                }), {
                    bytesDownloaded: bytesToDownload,
                    extraBytesDownloaded: 0,
                    congestionWindow: 68,
                    roundTrips: 51,
                    timeElapsed: 5100,
                    connectionTiming: {
                        connectionTime: 250,
                        dnsResolutionTime: 0,
                        sslTime: 100,
                        timeToFirstByte: 300
                    }
                });
            });
        });
        describe('when maximumTime is set', function() {
            it('should provide the correct values less than TTFB', function() {
                var connection = new TCPConnection(100, Infinity, 0, false);
                assert.deepEqual(connection.simulateDownloadUntil(7300, {
                    timeAlreadyElapsed: 0,
                    maximumTimeToElapse: 68
                }), {
                    bytesDownloaded: 7300,
                    extraBytesDownloaded: 0,
                    congestionWindow: 10,
                    roundTrips: 2,
                    timeElapsed: 200,
                    connectionTiming: {
                        connectionTime: 150,
                        dnsResolutionTime: 0,
                        sslTime: undefined,
                        timeToFirstByte: 200
                    }
                });
            });
            it('should provide the correct values just over TTFB', function() {
                var connection = new TCPConnection(100, Infinity, 0, false);
                assert.deepEqual(connection.simulateDownloadUntil(7300, {
                    timeAlreadyElapsed: 0,
                    maximumTimeToElapse: 250
                }), {
                    bytesDownloaded: 7300,
                    extraBytesDownloaded: 0,
                    congestionWindow: 10,
                    roundTrips: 2,
                    timeElapsed: 200,
                    connectionTiming: {
                        connectionTime: 150,
                        dnsResolutionTime: 0,
                        sslTime: undefined,
                        timeToFirstByte: 200
                    }
                });
            });
            it('should provide the correct values with already elapsed', function() {
                var connection = new TCPConnection(100, Infinity, 0, false);
                assert.deepEqual(connection.simulateDownloadUntil(7300, {
                    timeAlreadyElapsed: 75,
                    maximumTimeToElapse: 250
                }), {
                    bytesDownloaded: 7300,
                    extraBytesDownloaded: 0,
                    congestionWindow: 10,
                    roundTrips: 2,
                    timeElapsed: 125,
                    connectionTiming: {
                        connectionTime: 150,
                        dnsResolutionTime: 0,
                        sslTime: undefined,
                        timeToFirstByte: 200
                    }
                });
            });
            it('should provide the correct values large payloads', function() {
                var connection = new TCPConnection(100, 8 * 1000 * 1000);
                var bytesToDownload = 10 * 1000 * 1000; // 10 mb
                assert.deepEqual(connection.simulateDownloadUntil(bytesToDownload, {
                    timeAlreadyElapsed: 500,
                    maximumTimeToElapse: 740
                }), {
                    bytesDownloaded: 683280,
                    extraBytesDownloaded: 0,
                    congestionWindow: 68,
                    roundTrips: 8,
                    timeElapsed: 800,
                    connectionTiming: {
                        connectionTime: 250,
                        dnsResolutionTime: 0,
                        sslTime: 100,
                        timeToFirstByte: 300
                    }
                });
            });
            it('should all add up', function() {
                var connection = new TCPConnection(100, 8 * 1000 * 1000);
                var bytesToDownload = 10 * 1000 * 1000; // 10 mb
                var firstStoppingPoint = 5234;
                var secondStoppingPoint = 315;
                var thirdStoppingPoint = 10500 - firstStoppingPoint - secondStoppingPoint;
                var firstSegment = connection.simulateDownloadUntil(bytesToDownload, {
                    timeAlreadyElapsed: 0,
                    maximumTimeToElapse: firstStoppingPoint
                });
                var firstOvershoot = firstSegment.timeElapsed - firstStoppingPoint;
                connection.setCongestionWindow(firstSegment.congestionWindow);
                var secondSegment = connection.simulateDownloadUntil(bytesToDownload - firstSegment.bytesDownloaded, {
                    timeAlreadyElapsed: firstSegment.timeElapsed,
                    maximumTimeToElapse: secondStoppingPoint - firstOvershoot
                });
                var secondOvershoot = firstOvershoot + secondSegment.timeElapsed - secondStoppingPoint;
                connection.setCongestionWindow(secondSegment.congestionWindow);
                var thirdSegment = connection.simulateDownloadUntil(bytesToDownload - firstSegment.bytesDownloaded - secondSegment.bytesDownloaded, {
                    timeAlreadyElapsed: firstSegment.timeElapsed + secondSegment.timeElapsed
                });
                var thirdOvershoot = secondOvershoot + thirdSegment.timeElapsed - thirdStoppingPoint;
                assert.strictEqual(thirdOvershoot, 0);
                assert.strictEqual(firstSegment.bytesDownloaded + secondSegment.bytesDownloaded + thirdSegment.bytesDownloaded, bytesToDownload);
                assert.strictEqual(firstSegment.timeElapsed + secondSegment.timeElapsed + thirdSegment.timeElapsed, 10500);
            });
        });
    });
}); //# sourceMappingURL=TCPConnection.test.js.map


}),

}]);