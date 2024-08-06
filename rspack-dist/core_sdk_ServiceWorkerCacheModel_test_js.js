"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_ServiceWorkerCacheModel_test_js"], {
"./core/sdk/ServiceWorkerCacheModel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
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



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('ServiceWorkerCacheModel', function() {
    var cacheStorageModel;
    var cache;
    var target;
    var manager;
    var cacheAgent;
    var testKey = 'test-key';
    var testStorageBucket = {
        storageKey: testKey,
        name: 'inbox'
    };
    var testStorageBucketInfo = {
        id: '0',
        bucket: testStorageBucket,
        expiration: 0,
        quota: 0,
        persistent: false,
        durability: "strict" /* Protocol.Storage.StorageBucketsDurability.Strict */ 
    };
    beforeEach(function() {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        cacheStorageModel = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorkerCacheModel.ServiceWorkerCacheModel(target);
        cache = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorkerCacheModel.Cache(cacheStorageModel, testStorageBucket, 'test-cache', 'id');
        manager = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageBucketsModel.StorageBucketsModel);
        cacheAgent = target.cacheStorageAgent();
    });
    describe('StorageKeyAdded', function() {
        it('registers cache only when the model is enabled', /*#__PURE__*/ _async_to_generator(function() {
            var cacheAdeddSpy, cacheNamePromise, _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        cacheAdeddSpy = sinon.spy(cacheStorageModel, 'dispatchEventToListeners');
                        cacheNamePromise = new Promise(function(resolve) {
                            cacheStorageModel.addEventListener("CacheAdded" /* SDK.ServiceWorkerCacheModel.Events.CacheAdded */ , function(event) {
                                resolve(event.data.cache.cacheName);
                            });
                        });
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('CacheStorage.requestCacheNames', function() {
                            return {
                                caches: [
                                    {
                                        cacheId: 'id',
                                        storageKey: testKey,
                                        storageBucket: testStorageBucket,
                                        cacheName: 'test-cache'
                                    }
                                ]
                            };
                        });
                        manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
                            bucketInfo: testStorageBucketInfo
                        });
                        assert.isFalse(cacheAdeddSpy.calledWithExactly("CacheAdded" /* SDK.ServiceWorkerCacheModel.Events.CacheAdded */ , {
                            model: cacheStorageModel,
                            cache: cache
                        }));
                        cacheStorageModel.enable();
                        manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
                            bucketInfo: testStorageBucketInfo
                        });
                        _ = assert.strictEqual;
                        return [
                            4,
                            cacheNamePromise
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            'test-cache'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('starts tracking cache', function() {
            var trackCacheSpy = sinon.spy(target.storageAgent(), 'invoke_trackCacheStorageForStorageKey');
            cacheStorageModel.enable();
            manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
                bucketInfo: testStorageBucketInfo
            });
            assert.isTrue(trackCacheSpy.calledOnceWithExactly({
                storageKey: testKey
            }));
        });
    });
    it('stops tracking cache', function() {
        var untrackCacheSpy = sinon.spy(target.storageAgent(), 'invoke_untrackCacheStorageForStorageKey');
        cacheStorageModel.enable();
        manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
            bucketInfo: testStorageBucketInfo
        });
        manager === null || manager === void 0 ? void 0 : manager.storageBucketDeleted({
            bucketId: testStorageBucketInfo.id
        });
        assert.isTrue(untrackCacheSpy.calledOnceWithExactly({
            storageKey: testKey
        }));
    });
    it('detaches storage key event listeners on dispose', function() {
        var trackCacheSpy = sinon.spy(target.storageAgent(), 'invoke_trackCacheStorageForStorageKey');
        var untrackCacheSpy = sinon.spy(target.storageAgent(), 'invoke_untrackCacheStorageForStorageKey');
        cacheStorageModel.enable();
        cacheStorageModel.dispose();
        manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
            bucketInfo: testStorageBucketInfo
        });
        manager === null || manager === void 0 ? void 0 : manager.storageBucketDeleted({
            bucketId: testStorageBucketInfo.id
        });
        assert.isTrue(trackCacheSpy.notCalled);
        assert.isTrue(untrackCacheSpy.notCalled);
    });
    it('calls protocol method and dispatches event on refreshCacheNames', /*#__PURE__*/ _async_to_generator(function() {
        var requestCacheNamesSpy, cacheAddedPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    requestCacheNamesSpy = sinon.spy(cacheAgent, 'invoke_requestCacheNames');
                    cacheAddedPromise = new Promise(function(resolve) {
                        cacheStorageModel.addEventListener("CacheAdded" /* SDK.ServiceWorkerCacheModel.Events.CacheAdded */ , function() {
                            resolve();
                        });
                    });
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('CacheStorage.requestCacheNames', function() {
                        return {
                            caches: [
                                {
                                    cacheId: 'id',
                                    storageKey: testKey,
                                    storageBucket: testStorageBucket,
                                    cacheName: 'test-cache'
                                }
                            ]
                        };
                    });
                    cacheStorageModel.enable();
                    manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
                        bucketInfo: testStorageBucketInfo
                    });
                    void cacheStorageModel.refreshCacheNames();
                    assert.isTrue(requestCacheNamesSpy.calledWithExactly({
                        storageBucket: testStorageBucket
                    }));
                    return [
                        4,
                        cacheAddedPromise
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('dispatches event on cacheStorageContentUpdated', function() {
        var dispatcherSpy = sinon.spy(cacheStorageModel, 'dispatchEventToListeners');
        manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
            bucketInfo: testStorageBucketInfo
        });
        cacheStorageModel.cacheStorageContentUpdated({
            origin: '',
            storageKey: testKey,
            bucketId: testStorageBucketInfo.id,
            cacheName: 'test-cache'
        });
        assert.isTrue(dispatcherSpy.calledOnceWithExactly("CacheStorageContentUpdated" /* SDK.ServiceWorkerCacheModel.Events.CacheStorageContentUpdated */ , {
            storageBucket: testStorageBucket,
            cacheName: 'test-cache'
        }));
    });
    it('requests cache names on cacheStorageListUpdated', /*#__PURE__*/ _async_to_generator(function() {
        var requestCacheNamesSpy;
        return _ts_generator(this, function(_state) {
            requestCacheNamesSpy = sinon.spy(cacheAgent, 'invoke_requestCacheNames');
            cacheStorageModel.enable();
            manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
                bucketInfo: testStorageBucketInfo
            });
            cacheStorageModel.cacheStorageListUpdated({
                origin: '',
                storageKey: testKey,
                bucketId: testStorageBucketInfo.id
            });
            assert.isTrue(requestCacheNamesSpy.calledWithExactly({
                storageBucket: testStorageBucket
            }));
            return [
                2
            ];
        });
    }));
    it('gets caches added for storage key', /*#__PURE__*/ _async_to_generator(function() {
        var cacheNames, cachesAddedPromise, caches;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cacheNames = [
                        'test-cache-1',
                        'test-cache-2'
                    ];
                    cachesAddedPromise = new Promise(function(resolve) {
                        cacheStorageModel.addEventListener("CacheAdded" /* SDK.ServiceWorkerCacheModel.Events.CacheAdded */ , function() {
                            resolve();
                        });
                    });
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('CacheStorage.requestCacheNames', function() {
                        return {
                            caches: [
                                {
                                    cacheId: 'id1',
                                    storageKey: testKey,
                                    storageBucket: testStorageBucket,
                                    cacheName: 'test-cache-1'
                                },
                                {
                                    cacheId: 'id2',
                                    storageKey: testKey,
                                    storageBucket: testStorageBucket,
                                    cacheName: 'test-cache-2'
                                }
                            ]
                        };
                    });
                    cacheStorageModel.enable();
                    manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
                        bucketInfo: testStorageBucketInfo
                    });
                    // make sure enough time passed for caches to populate
                    return [
                        4,
                        cachesAddedPromise
                    ];
                case 1:
                    _state.sent();
                    caches = cacheStorageModel.caches();
                    assert.deepEqual(caches.map(function(cache) {
                        return cache.cacheName;
                    }), cacheNames);
                    return [
                        2
                    ];
            }
        });
    }));
    it('removes caches for storage key on clearForStorageKey', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('CacheStorage.requestCacheNames', function() {
                return {
                    caches: [
                        {
                            cacheId: 'id1',
                            storageKey: testKey,
                            storageBucket: testStorageBucket,
                            cacheName: 'test-cache-1'
                        },
                        {
                            cacheId: 'id2',
                            storageKey: testKey,
                            storageBucket: testStorageBucket,
                            cacheName: 'test-cache-2'
                        }
                    ]
                };
            });
            cacheStorageModel.enable();
            manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
                bucketInfo: testStorageBucketInfo
            });
            cacheStorageModel.refreshCacheNames();
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.clearMockConnectionResponseHandler)('CacheStorage.requestCacheNames');
            cacheStorageModel.clearForStorageKey(testKey);
            assert.isEmpty(cacheStorageModel.caches());
            return [
                2
            ];
        });
    }));
    it('registers storage key on enable', /*#__PURE__*/ _async_to_generator(function() {
        var trackCacheSpy;
        return _ts_generator(this, function(_state) {
            trackCacheSpy = sinon.spy(target.storageAgent(), 'invoke_trackCacheStorageForStorageKey');
            manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
                bucketInfo: testStorageBucketInfo
            });
            cacheStorageModel.enable();
            assert.isTrue(trackCacheSpy.calledOnceWithExactly({
                storageKey: testKey
            }));
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=ServiceWorkerCacheModel.test.js.map


}),

}]);