"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_RequestTimingView_test_js"], {
"./panels/network/RequestTimingView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestTimingView.js */ "./panels/network/RequestTimingView.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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


function createNetworkRequest(matchedSource, actualSource) {
    var request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkRequest.NetworkRequest.create('requestId', 'http://devtools-frontend.test', '', null, null, null);
    request.mimeType = 'application/wasm';
    request.finished = true;
    var timingInfo = {
        requestTime: 500,
        proxyStart: 0,
        proxyEnd: 0,
        dnsStart: 0,
        dnsEnd: 0,
        connectStart: 0,
        connectEnd: 0,
        sslStart: 0,
        sslEnd: 0,
        workerReady: 400,
        workerStart: 500,
        workerRouterEvaluationStart: -200,
        workerFetchStart: 600,
        workerRespondWithSettled: 700,
        sendStart: 800,
        sendEnd: 900,
        pushStart: 0,
        pushEnd: 0,
        receiveHeadersStart: 1000,
        receiveHeadersEnd: 0
    };
    if (matchedSource === "cache" /* Protocol.Network.ServiceWorkerRouterSource.Cache */ ) {
        timingInfo.workerCacheLookupStart = -100;
    }
    request.timing = timingInfo;
    request.serviceWorkerRouterInfo = {
        ruleIdMatched: 1,
        matchedSourceType: matchedSource,
        actualSourceType: actualSource
    };
    return request;
}
describe('ResourceTimingView', function() {
    it('RequestTimeRanges has router evaluation field with SW router source as network', /*#__PURE__*/ _async_to_generator(function() {
        var request, timingInfo, timeRanges, routerEvaluationTime, sendStart, routerEvaluation, cacheLookup;
        return _ts_generator(this, function(_state) {
            request = createNetworkRequest("network" /* Protocol.Network.ServiceWorkerRouterSource.Network */ , "network" /* Protocol.Network.ServiceWorkerRouterSource.Network */ );
            timingInfo = request.timing;
            timeRanges = _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_1__.RequestTimingView.calculateRequestTimeRanges(request, 100);
            routerEvaluationTime = timingInfo.workerRouterEvaluationStart;
            sendStart = timingInfo.sendStart;
            routerEvaluation = timeRanges.find(function(timeRange) {
                return timeRange.name === "serviceworker-routerevaluation" /* RequestTimingView.RequestTimeRangeNames.ServiceWorkerRouterEvaluation */ ;
            });
            assert.isTrue(Boolean(routerEvaluation), 'worker router evaluation exists');
            assert.strictEqual(routerEvaluation === null || routerEvaluation === void 0 ? void 0 : routerEvaluation.start, timingInfo.requestTime + routerEvaluationTime / 1000);
            assert.strictEqual(routerEvaluation === null || routerEvaluation === void 0 ? void 0 : routerEvaluation.end, timingInfo.requestTime + sendStart / 1000);
            cacheLookup = timeRanges.find(function(timeRange) {
                return timeRange.name === "serviceworker-cachelookup" /* RequestTimingView.RequestTimeRangeNames.ServiceWorkerCacheLookup */ ;
            });
            assert.isFalse(Boolean(cacheLookup), 'worker cache lookup does not exist');
            return [
                2
            ];
        });
    }));
    it('RequestTimeRanges has router evaluation field with SW router source as fetch-event', /*#__PURE__*/ _async_to_generator(function() {
        var request, timingInfo, timeRanges, routerEvaluationTime, workerStart, routerEvaluation, cacheLookup;
        return _ts_generator(this, function(_state) {
            request = createNetworkRequest("fetch-event" /* Protocol.Network.ServiceWorkerRouterSource.FetchEvent */ , "fetch-event" /* Protocol.Network.ServiceWorkerRouterSource.FetchEvent */ );
            timingInfo = request.timing;
            timeRanges = _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_1__.RequestTimingView.calculateRequestTimeRanges(request, 100);
            routerEvaluationTime = timingInfo.workerRouterEvaluationStart;
            workerStart = timingInfo.workerStart;
            routerEvaluation = timeRanges.find(function(timeRange) {
                return timeRange.name === "serviceworker-routerevaluation" /* RequestTimingView.RequestTimeRangeNames.ServiceWorkerRouterEvaluation */ ;
            });
            assert.isTrue(Boolean(routerEvaluation), 'worker router evaluation exists');
            assert.strictEqual(routerEvaluation === null || routerEvaluation === void 0 ? void 0 : routerEvaluation.start, timingInfo.requestTime + routerEvaluationTime / 1000);
            assert.strictEqual(routerEvaluation === null || routerEvaluation === void 0 ? void 0 : routerEvaluation.end, timingInfo.requestTime + workerStart / 1000);
            cacheLookup = timeRanges.find(function(timeRange) {
                return timeRange.name === "serviceworker-cachelookup" /* RequestTimingView.RequestTimeRangeNames.ServiceWorkerCacheLookup */ ;
            });
            assert.isFalse(Boolean(cacheLookup), 'worker cache lookup does not exist');
            return [
                2
            ];
        });
    }));
    it('RequestTimeRanges has router evaluation field with SW router source as cache hit', /*#__PURE__*/ _async_to_generator(function() {
        var request, timingInfo, timeRanges, routerEvaluationTime, cacheLookupStart, routerEvaluation, cacheLookup;
        return _ts_generator(this, function(_state) {
            request = createNetworkRequest("cache" /* Protocol.Network.ServiceWorkerRouterSource.Cache */ , "cache" /* Protocol.Network.ServiceWorkerRouterSource.Cache */ );
            timingInfo = request.timing;
            timeRanges = _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_1__.RequestTimingView.calculateRequestTimeRanges(request, 100);
            routerEvaluationTime = timingInfo.workerRouterEvaluationStart;
            cacheLookupStart = timingInfo.workerCacheLookupStart;
            routerEvaluation = timeRanges.find(function(timeRange) {
                return timeRange.name === "serviceworker-routerevaluation" /* RequestTimingView.RequestTimeRangeNames.ServiceWorkerRouterEvaluation */ ;
            });
            assert.isTrue(Boolean(routerEvaluation), 'worker router evaluation exists');
            assert.strictEqual(routerEvaluation === null || routerEvaluation === void 0 ? void 0 : routerEvaluation.start, timingInfo.requestTime + routerEvaluationTime / 1000);
            assert.strictEqual(routerEvaluation === null || routerEvaluation === void 0 ? void 0 : routerEvaluation.end, timingInfo.requestTime + cacheLookupStart / 1000);
            cacheLookup = timeRanges.find(function(timeRange) {
                return timeRange.name === "serviceworker-cachelookup" /* RequestTimingView.RequestTimeRangeNames.ServiceWorkerCacheLookup */ ;
            });
            assert.isTrue(Boolean(cacheLookup), 'worker cache lookup does not exist');
            assert.strictEqual(cacheLookup === null || cacheLookup === void 0 ? void 0 : cacheLookup.start, timingInfo.requestTime + cacheLookupStart / 1000);
            assert.strictEqual(cacheLookup === null || cacheLookup === void 0 ? void 0 : cacheLookup.end, timingInfo.requestTime + timingInfo.receiveHeadersStart / 1000);
            return [
                2
            ];
        });
    }));
    it('RequestTimeRanges has router evaluation field with SW router source as cache miss', /*#__PURE__*/ _async_to_generator(function() {
        var request, timingInfo, timeRanges, routerEvaluationTime, cacheLookupStart, routerEvaluation, cacheLookup;
        return _ts_generator(this, function(_state) {
            request = createNetworkRequest("cache" /* Protocol.Network.ServiceWorkerRouterSource.Cache */ , "network" /* Protocol.Network.ServiceWorkerRouterSource.Network */ );
            timingInfo = request.timing;
            timeRanges = _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_1__.RequestTimingView.calculateRequestTimeRanges(request, 100);
            routerEvaluationTime = timingInfo.workerRouterEvaluationStart;
            cacheLookupStart = timingInfo.workerCacheLookupStart;
            routerEvaluation = timeRanges.find(function(timeRange) {
                return timeRange.name === "serviceworker-routerevaluation" /* RequestTimingView.RequestTimeRangeNames.ServiceWorkerRouterEvaluation */ ;
            });
            assert.isTrue(Boolean(routerEvaluation), 'worker router evaluation exists');
            assert.strictEqual(routerEvaluation === null || routerEvaluation === void 0 ? void 0 : routerEvaluation.start, timingInfo.requestTime + routerEvaluationTime / 1000);
            assert.strictEqual(routerEvaluation === null || routerEvaluation === void 0 ? void 0 : routerEvaluation.end, timingInfo.requestTime + cacheLookupStart / 1000);
            cacheLookup = timeRanges.find(function(timeRange) {
                return timeRange.name === "serviceworker-cachelookup" /* RequestTimingView.RequestTimeRangeNames.ServiceWorkerCacheLookup */ ;
            });
            assert.isTrue(Boolean(cacheLookup), 'worker cache lookup does not exist');
            assert.strictEqual(cacheLookup === null || cacheLookup === void 0 ? void 0 : cacheLookup.start, timingInfo.requestTime + cacheLookupStart / 1000);
            assert.strictEqual(cacheLookup === null || cacheLookup === void 0 ? void 0 : cacheLookup.end, timingInfo.requestTime + timingInfo.sendStart / 1000);
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=RequestTimingView.test.js.map


}),

}]);