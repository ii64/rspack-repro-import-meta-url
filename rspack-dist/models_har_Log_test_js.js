"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_har_Log_test_js"], {
"./models/har/Log.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _har_har_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../har/har.js */ "./models/har/har.js");
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



describe('HAR.Log', function() {
    it('blocked time when no response received is returned in milliseconds (crbug.com/1145177)', /*#__PURE__*/ _async_to_generator(function() {
        var requestId, request, issueTime, entry;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    requestId = 'r0';
                    request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create(requestId, 'p0.com', _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString, null, null, null);
                    issueTime = new Date(2020, 1, 3).getTime() / 1000;
                    request.setIssueTime(issueTime, issueTime);
                    request.endTime = issueTime + 5;
                    return [
                        4,
                        _har_har_js__WEBPACK_IMPORTED_MODULE_2__.Log.Entry.build(request)
                    ];
                case 1:
                    entry = _state.sent();
                    assert.strictEqual(entry.timings.blocked, 5000, 'HARLog entry\'s blocked time is incorrect');
                    return [
                        2
                    ];
            }
        });
    }));
    it('_initiator.requestId is exported', /*#__PURE__*/ _async_to_generator(function() {
        var _entry__initiator, requestId, request, entry;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    requestId = 'r0';
                    request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create(requestId, 'p0.com', _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString, null, null, {
                        requestId: requestId,
                        type: "script" /* Protocol.Network.InitiatorType.Script */ 
                    });
                    return [
                        4,
                        _har_har_js__WEBPACK_IMPORTED_MODULE_2__.Log.Entry.build(request)
                    ];
                case 1:
                    entry = _state.sent();
                    assert.strictEqual((_entry__initiator = entry._initiator) === null || _entry__initiator === void 0 ? void 0 : _entry__initiator.requestId, requestId);
                    return [
                        2
                    ];
            }
        });
    }));
    it('Exports Service worker info', /*#__PURE__*/ _async_to_generator(function() {
        var requestId, request, cacheName, timingInfo, entry;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    requestId = 'r0';
                    request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create(requestId, 'p0.com', _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString, null, null, {
                        requestId: requestId,
                        type: "script" /* Protocol.Network.InitiatorType.Script */ 
                    });
                    cacheName = 'v1';
                    request.fetchedViaServiceWorker = true;
                    request.setResponseCacheStorageCacheName(cacheName);
                    request.setServiceWorkerResponseSource("cache-storage" /* Protocol.Network.ServiceWorkerResponseSource.CacheStorage */ );
                    timingInfo = {
                        requestTime: 500,
                        proxyStart: 0,
                        proxyEnd: 0,
                        dnsStart: 0,
                        dnsEnd: 0,
                        connectStart: 0,
                        connectEnd: 0,
                        sslStart: 0,
                        sslEnd: 0,
                        workerStart: 500,
                        workerReady: 1000,
                        workerFetchStart: 1050,
                        workerRespondWithSettled: 3000,
                        sendStart: 0,
                        sendEnd: 0,
                        pushStart: 0,
                        pushEnd: 0,
                        receiveHeadersStart: 0,
                        receiveHeadersEnd: 0
                    };
                    request.timing = timingInfo;
                    return [
                        4,
                        _har_har_js__WEBPACK_IMPORTED_MODULE_2__.Log.Entry.build(request)
                    ];
                case 1:
                    entry = _state.sent();
                    assert.strictEqual(entry.response._fetchedViaServiceWorker, true);
                    assert.strictEqual(entry.response._responseCacheStorageCacheName, cacheName);
                    assert.strictEqual(entry.response._serviceWorkerResponseSource, "cache-storage" /* Protocol.Network.ServiceWorkerResponseSource.CacheStorage */ );
                    assert.strictEqual(entry.timings._workerStart, timingInfo.workerStart);
                    assert.strictEqual(entry.timings._workerReady, timingInfo.workerReady);
                    assert.strictEqual(entry.timings._workerFetchStart, timingInfo.workerFetchStart);
                    assert.strictEqual(entry.timings._workerRespondWithSettled, timingInfo.workerRespondWithSettled);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=Log.test.js.map


}),

}]);