"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_StorageBucketsModel_test_js"], {
"./core/sdk/StorageBucketsModel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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



var _model = /*#__PURE__*/ new WeakMap(), _bucketEvents = /*#__PURE__*/ new WeakMap(), _addEventListener = /*#__PURE__*/ new WeakSet();
var StorageBucketModelListener = /*#__PURE__*/ function() {
    "use strict";
    function StorageBucketModelListener(model) {
        _class_call_check(this, StorageBucketModelListener);
        _class_private_method_init(this, _addEventListener);
        _class_private_field_init(this, _model, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _bucketEvents, {
            writable: true,
            value: new Map()
        });
        _class_private_field_set(this, _model, model);
        _class_private_method_get(this, _addEventListener, addEventListener).call(this, "BucketAdded" /* BucketEvents.BucketAdded */ );
        _class_private_method_get(this, _addEventListener, addEventListener).call(this, "BucketRemoved" /* BucketEvents.BucketRemoved */ );
        _class_private_method_get(this, _addEventListener, addEventListener).call(this, "BucketChanged" /* BucketEvents.BucketChanged */ );
    }
    _create_class(StorageBucketModelListener, [
        {
            key: "events",
            value: function events(eventType) {
                var bucketEvents = _class_private_field_get(this, _bucketEvents).get(eventType);
                if (!bucketEvents) {
                    bucketEvents = new Array();
                    _class_private_field_get(this, _bucketEvents).set(eventType, bucketEvents);
                }
                return bucketEvents;
            }
        },
        {
            key: "bucketInfos",
            value: function bucketInfos(eventType) {
                return this.events(eventType).map(function(event) {
                    return event.bucketInfo;
                });
            }
        },
        {
            key: "eventCount",
            value: function eventCount(eventType) {
                return this.events(eventType).length;
            }
        },
        {
            key: "waitForBucketEvents",
            value: function waitForBucketEvents(eventType, eventCount) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(_this.eventCount(eventType) < eventCount)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _model).once(eventType)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    3,
                                    0
                                ];
                            case 2:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return StorageBucketModelListener;
}();
function addEventListener(eventType) {
    var _this = this;
    _class_private_field_get(this, _model).addEventListener(eventType, function(event) {
        _this.events(eventType).push(event.data);
    });
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('StorageBucketsModel', function() {
    var storageKeyManager;
    var storageBucketsModel;
    var target;
    var listener;
    var STORAGE_KEYS = [
        'storagekey1',
        'storagekey2',
        'storagekey3'
    ];
    var STORAGE_BUCKET_INFOS = [
        {
            bucket: {
                storageKey: STORAGE_KEYS[0]
            },
            id: '0',
            expiration: 0,
            quota: 0,
            persistent: false,
            durability: "strict" /* Protocol.Storage.StorageBucketsDurability.Strict */ 
        },
        {
            bucket: {
                storageKey: STORAGE_KEYS[0],
                name: 'bucket1'
            },
            id: '1',
            expiration: 0,
            quota: 0,
            persistent: false,
            durability: "strict" /* Protocol.Storage.StorageBucketsDurability.Strict */ 
        },
        {
            bucket: {
                storageKey: STORAGE_KEYS[1],
                name: 'bucket2'
            },
            id: '2',
            expiration: 0,
            quota: 0,
            persistent: false,
            durability: "strict" /* Protocol.Storage.StorageBucketsDurability.Strict */ 
        },
        {
            bucket: {
                storageKey: STORAGE_KEYS[2],
                name: 'bucket3'
            },
            id: '3',
            expiration: 0,
            quota: 0,
            persistent: false,
            durability: "strict" /* Protocol.Storage.StorageBucketsDurability.Strict */ 
        }
    ];
    var getBucketsForStorageKeys = function() {
        for(var _len = arguments.length, storageKeys = new Array(_len), _key = 0; _key < _len; _key++){
            storageKeys[_key] = arguments[_key];
        }
        return STORAGE_BUCKET_INFOS.filter(function(param) {
            var bucket = param.bucket;
            return storageKeys.includes(bucket.storageKey);
        });
    };
    var setStorageBucketTrackingStub = function(param) {
        var storageKey = param.storageKey;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = getBucketsForStorageKeys(storageKey)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var bucketInfo = _step.value;
                storageBucketsModel.storageBucketCreatedOrUpdated({
                    bucketInfo: bucketInfo
                });
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
        return Promise.resolve({
            getError: function() {
                return undefined;
            }
        });
    };
    beforeEach(function() {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        storageKeyManager = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.StorageKeyManager);
        storageBucketsModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageBucketsModel.StorageBucketsModel);
        listener = new StorageBucketModelListener(storageBucketsModel);
    });
    describe('StorageKeyAdded', function() {
        it('starts tracking for the storage key', /*#__PURE__*/ _async_to_generator(function() {
            var storageKey, setStorageBucketTrackingSpy;
            return _ts_generator(this, function(_state) {
                storageKey = STORAGE_KEYS[0];
                setStorageBucketTrackingSpy = sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking').resolves({
                    getError: function() {
                        return undefined;
                    }
                });
                storageBucketsModel.enable();
                assert.isTrue(setStorageBucketTrackingSpy.notCalled);
                storageKeyManager.updateStorageKeys(new Set([
                    storageKey
                ]));
                assert.isTrue(setStorageBucketTrackingSpy.calledOnceWithExactly({
                    storageKey: storageKey,
                    enable: true
                }));
                return [
                    2
                ];
            });
        }));
        it('adds buckets for storage keys that already have been added', /*#__PURE__*/ _async_to_generator(function() {
            var storageKeys, bucketsForStorageKeyCount;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        storageKeys = [
                            STORAGE_KEYS[0],
                            STORAGE_KEYS[2]
                        ];
                        bucketsForStorageKeyCount = 3;
                        sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking').callsFake(setStorageBucketTrackingStub);
                        storageKeyManager.updateStorageKeys(new Set(storageKeys));
                        storageBucketsModel.enable();
                        return [
                            4,
                            listener.waitForBucketEvents("BucketAdded" /* BucketEvents.BucketAdded */ , bucketsForStorageKeyCount)
                        ];
                    case 1:
                        _state.sent();
                        assert.isTrue(listener.eventCount("BucketAdded" /* BucketEvents.BucketAdded */ ) === bucketsForStorageKeyCount);
                        assert.deepEqual(getBucketsForStorageKeys.apply(void 0, _to_consumable_array(storageKeys)), listener.bucketInfos("BucketAdded" /* BucketEvents.BucketAdded */ ));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('StorageKeyRemoved', function() {
        it('stops tracking for the storage key', /*#__PURE__*/ _async_to_generator(function() {
            var storageKey, setStorageBucketTrackingSpy;
            return _ts_generator(this, function(_state) {
                storageKey = STORAGE_KEYS[0];
                setStorageBucketTrackingSpy = sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking').resolves({
                    getError: function() {
                        return undefined;
                    }
                });
                storageBucketsModel.enable();
                assert.isTrue(setStorageBucketTrackingSpy.notCalled);
                storageKeyManager.updateStorageKeys(new Set([
                    storageKey
                ]));
                storageKeyManager.updateStorageKeys(new Set([]));
                assert.isTrue(setStorageBucketTrackingSpy.callCount === 2);
                assert.isTrue(setStorageBucketTrackingSpy.secondCall.calledWithExactly({
                    storageKey: storageKey,
                    enable: false
                }));
                return [
                    2
                ];
            });
        }));
        it('removes all buckets for removed storage key', /*#__PURE__*/ _async_to_generator(function() {
            var storageKeys, removedStorageKey;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        storageKeys = [
                            STORAGE_KEYS[2],
                            STORAGE_KEYS[0]
                        ];
                        sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking').callsFake(setStorageBucketTrackingStub);
                        storageBucketsModel.enable();
                        storageKeyManager.updateStorageKeys(new Set(storageKeys));
                        return [
                            4,
                            listener.waitForBucketEvents("BucketAdded" /* BucketEvents.BucketAdded */ , 3)
                        ];
                    case 1:
                        _state.sent();
                        removedStorageKey = storageKeys.pop();
                        storageKeyManager.updateStorageKeys(new Set(storageKeys));
                        return [
                            4,
                            listener.waitForBucketEvents("BucketRemoved" /* BucketEvents.BucketRemoved */ , 2)
                        ];
                    case 2:
                        _state.sent();
                        assert.isTrue(listener.eventCount("BucketRemoved" /* BucketEvents.BucketRemoved */ ) === 2);
                        assert.deepEqual(getBucketsForStorageKeys(removedStorageKey), listener.bucketInfos("BucketRemoved" /* BucketEvents.BucketRemoved */ ));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('CreatedUpdatedDeletedBucket', function() {
        it('notifies when a bucket is created', /*#__PURE__*/ _async_to_generator(function() {
            var STORAGE_BUCKET_INFO_TO_CREATE, storageKeys, expectedBuckets;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        STORAGE_BUCKET_INFO_TO_CREATE = {
                            bucket: {
                                storageKey: STORAGE_KEYS[0],
                                name: 'bucket4'
                            },
                            id: '4',
                            expiration: 0,
                            quota: 0,
                            persistent: false,
                            durability: "strict" /* Protocol.Storage.StorageBucketsDurability.Strict */ 
                        };
                        storageKeys = [
                            STORAGE_KEYS[0],
                            STORAGE_KEYS[2]
                        ];
                        sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking').callsFake(setStorageBucketTrackingStub);
                        storageBucketsModel.enable();
                        storageKeyManager.updateStorageKeys(new Set(storageKeys));
                        return [
                            4,
                            listener.waitForBucketEvents("BucketAdded" /* BucketEvents.BucketAdded */ , 3)
                        ];
                    case 1:
                        _state.sent();
                        assert.isTrue(listener.eventCount("BucketAdded" /* BucketEvents.BucketAdded */ ) === 3);
                        expectedBuckets = getBucketsForStorageKeys.apply(void 0, _to_consumable_array(storageKeys));
                        assert.deepEqual(expectedBuckets, listener.bucketInfos("BucketAdded" /* BucketEvents.BucketAdded */ ));
                        storageBucketsModel.storageBucketCreatedOrUpdated({
                            bucketInfo: STORAGE_BUCKET_INFO_TO_CREATE
                        });
                        return [
                            4,
                            listener.waitForBucketEvents("BucketAdded" /* BucketEvents.BucketAdded */ , 4)
                        ];
                    case 2:
                        _state.sent();
                        assert.isTrue(listener.eventCount("BucketAdded" /* BucketEvents.BucketAdded */ ) === 4);
                        expectedBuckets.push(STORAGE_BUCKET_INFO_TO_CREATE);
                        assert.deepEqual(expectedBuckets, listener.bucketInfos("BucketAdded" /* BucketEvents.BucketAdded */ ));
                        return [
                            2
                        ];
                }
            });
        }));
        it('notifies when a bucket is updated', /*#__PURE__*/ _async_to_generator(function() {
            var STORAGE_BUCKET_INFO_UPDATED, storageKeys;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        STORAGE_BUCKET_INFO_UPDATED = _object_spread_props(_object_spread({}, STORAGE_BUCKET_INFOS[0]), {
                            expiration: 100
                        });
                        storageKeys = [
                            STORAGE_KEYS[0],
                            STORAGE_KEYS[2]
                        ];
                        sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking').callsFake(setStorageBucketTrackingStub);
                        storageBucketsModel.enable();
                        storageKeyManager.updateStorageKeys(new Set(storageKeys));
                        return [
                            4,
                            listener.waitForBucketEvents("BucketAdded" /* BucketEvents.BucketAdded */ , 3)
                        ];
                    case 1:
                        _state.sent();
                        assert.isTrue(listener.eventCount("BucketChanged" /* BucketEvents.BucketChanged */ ) === 0);
                        storageBucketsModel.storageBucketCreatedOrUpdated({
                            bucketInfo: STORAGE_BUCKET_INFO_UPDATED
                        });
                        return [
                            4,
                            listener.waitForBucketEvents("BucketChanged" /* BucketEvents.BucketChanged */ , 1)
                        ];
                    case 2:
                        _state.sent();
                        assert.isTrue(listener.eventCount("BucketChanged" /* BucketEvents.BucketChanged */ ) === 1);
                        assert.deepEqual(listener.bucketInfos("BucketChanged" /* BucketEvents.BucketChanged */ )[0], STORAGE_BUCKET_INFO_UPDATED);
                        return [
                            2
                        ];
                }
            });
        }));
        it('notifies when a bucket is deleted', /*#__PURE__*/ _async_to_generator(function() {
            var STORAGE_BUCKET_INFO_REMOVED, storageKeys;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        STORAGE_BUCKET_INFO_REMOVED = STORAGE_BUCKET_INFOS[0];
                        storageKeys = [
                            STORAGE_KEYS[0],
                            STORAGE_KEYS[2]
                        ];
                        sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking').callsFake(setStorageBucketTrackingStub);
                        storageBucketsModel.enable();
                        storageKeyManager.updateStorageKeys(new Set(storageKeys));
                        return [
                            4,
                            listener.waitForBucketEvents("BucketAdded" /* BucketEvents.BucketAdded */ , 3)
                        ];
                    case 1:
                        _state.sent();
                        assert.isTrue(listener.eventCount("BucketRemoved" /* BucketEvents.BucketRemoved */ ) === 0);
                        storageBucketsModel.storageBucketDeleted({
                            bucketId: STORAGE_BUCKET_INFO_REMOVED.id
                        });
                        return [
                            4,
                            listener.waitForBucketEvents("BucketRemoved" /* BucketEvents.BucketRemoved */ , 1)
                        ];
                    case 2:
                        _state.sent();
                        assert.isTrue(listener.eventCount("BucketRemoved" /* BucketEvents.BucketRemoved */ ) === 1);
                        assert.deepEqual(listener.bucketInfos("BucketRemoved" /* BucketEvents.BucketRemoved */ )[0], STORAGE_BUCKET_INFO_REMOVED);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('GetBucketFunctions', function() {
        it('gets all buckets', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking').callsFake(setStorageBucketTrackingStub);
                        storageBucketsModel.enable();
                        storageKeyManager.updateStorageKeys(new Set(STORAGE_KEYS));
                        return [
                            4,
                            listener.waitForBucketEvents("BucketAdded" /* BucketEvents.BucketAdded */ , 4)
                        ];
                    case 1:
                        _state.sent();
                        assert.deepEqual(new Set(STORAGE_BUCKET_INFOS), storageBucketsModel.getBuckets());
                        return [
                            2
                        ];
                }
            });
        }));
        it('gets buckets for storage key', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking').callsFake(setStorageBucketTrackingStub);
                        storageBucketsModel.enable();
                        storageKeyManager.updateStorageKeys(new Set(STORAGE_KEYS));
                        return [
                            4,
                            listener.waitForBucketEvents("BucketAdded" /* BucketEvents.BucketAdded */ , 4)
                        ];
                    case 1:
                        _state.sent();
                        assert.deepEqual(new Set(getBucketsForStorageKeys(STORAGE_KEYS[0])), storageBucketsModel.getBucketsForStorageKey(STORAGE_KEYS[0]));
                        assert.deepEqual(new Set(getBucketsForStorageKeys(STORAGE_KEYS[1])), storageBucketsModel.getBucketsForStorageKey(STORAGE_KEYS[1]));
                        assert.deepEqual(new Set(getBucketsForStorageKeys(STORAGE_KEYS[2])), storageBucketsModel.getBucketsForStorageKey(STORAGE_KEYS[2]));
                        return [
                            2
                        ];
                }
            });
        }));
        it('gets buckets by id', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking').callsFake(setStorageBucketTrackingStub);
                        storageBucketsModel.enable();
                        storageKeyManager.updateStorageKeys(new Set(STORAGE_KEYS));
                        return [
                            4,
                            listener.waitForBucketEvents("BucketAdded" /* BucketEvents.BucketAdded */ , 4)
                        ];
                    case 1:
                        _state.sent();
                        assert.deepEqual(STORAGE_BUCKET_INFOS[0], storageBucketsModel.getBucketById(STORAGE_BUCKET_INFOS[0].id));
                        assert.deepEqual(STORAGE_BUCKET_INFOS[1], storageBucketsModel.getBucketById(STORAGE_BUCKET_INFOS[1].id));
                        assert.deepEqual(STORAGE_BUCKET_INFOS[2], storageBucketsModel.getBucketById(STORAGE_BUCKET_INFOS[2].id));
                        assert.deepEqual(STORAGE_BUCKET_INFOS[3], storageBucketsModel.getBucketById(STORAGE_BUCKET_INFOS[3].id));
                        return [
                            2
                        ];
                }
            });
        }));
        it('gets bucket by name', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking').callsFake(setStorageBucketTrackingStub);
                        storageBucketsModel.enable();
                        storageKeyManager.updateStorageKeys(new Set(STORAGE_KEYS));
                        return [
                            4,
                            listener.waitForBucketEvents("BucketAdded" /* BucketEvents.BucketAdded */ , 4)
                        ];
                    case 1:
                        _state.sent();
                        assert.deepEqual(STORAGE_BUCKET_INFOS[0], storageBucketsModel.getBucketByName(STORAGE_BUCKET_INFOS[0].bucket.storageKey, STORAGE_BUCKET_INFOS[0].bucket.name));
                        assert.deepEqual(STORAGE_BUCKET_INFOS[1], storageBucketsModel.getBucketByName(STORAGE_BUCKET_INFOS[1].bucket.storageKey, STORAGE_BUCKET_INFOS[1].bucket.name));
                        assert.deepEqual(STORAGE_BUCKET_INFOS[2], storageBucketsModel.getBucketByName(STORAGE_BUCKET_INFOS[2].bucket.storageKey, STORAGE_BUCKET_INFOS[2].bucket.name));
                        assert.deepEqual(STORAGE_BUCKET_INFOS[3], storageBucketsModel.getBucketByName(STORAGE_BUCKET_INFOS[3].bucket.storageKey, STORAGE_BUCKET_INFOS[3].bucket.name));
                        return [
                            2
                        ];
                }
            });
        }));
        it('gets default bucket when name isnt given', /*#__PURE__*/ _async_to_generator(function() {
            var bucketInfo, _bucketInfo_bucket, storageKey, name, bucketInfo1, _bucketInfo_bucket1, storageKey1, name1, bucketInfo2, _bucketInfo_bucket2, storageKey2, name2, bucketInfo3, _bucketInfo_bucket3, storageKey3, name3;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking').callsFake(setStorageBucketTrackingStub);
                        storageBucketsModel.enable();
                        storageKeyManager.updateStorageKeys(new Set(STORAGE_KEYS));
                        return [
                            4,
                            listener.waitForBucketEvents("BucketAdded" /* BucketEvents.BucketAdded */ , 4)
                        ];
                    case 1:
                        _state.sent();
                        {
                            bucketInfo = STORAGE_BUCKET_INFOS[0];
                            _bucketInfo_bucket = bucketInfo.bucket, storageKey = _bucketInfo_bucket.storageKey, name = _bucketInfo_bucket.name;
                            assert.deepEqual(bucketInfo, storageBucketsModel.getBucketByName(storageKey, name));
                        }
                        {
                            bucketInfo1 = STORAGE_BUCKET_INFOS[1];
                            _bucketInfo_bucket1 = bucketInfo1.bucket, storageKey1 = _bucketInfo_bucket1.storageKey, name1 = _bucketInfo_bucket1.name;
                            assert.deepEqual(bucketInfo1, storageBucketsModel.getBucketByName(storageKey1, name1));
                        }
                        {
                            bucketInfo2 = STORAGE_BUCKET_INFOS[2];
                            _bucketInfo_bucket2 = bucketInfo2.bucket, storageKey2 = _bucketInfo_bucket2.storageKey, name2 = _bucketInfo_bucket2.name;
                            assert.deepEqual(bucketInfo2, storageBucketsModel.getBucketByName(storageKey2, name2));
                        }
                        {
                            bucketInfo3 = STORAGE_BUCKET_INFOS[3];
                            _bucketInfo_bucket3 = bucketInfo3.bucket, storageKey3 = _bucketInfo_bucket3.storageKey, name3 = _bucketInfo_bucket3.name;
                            assert.deepEqual(bucketInfo3, storageBucketsModel.getBucketByName(storageKey3, name3));
                        }
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('deletes the bucket', function() {
        var bucket = STORAGE_BUCKET_INFOS[0].bucket;
        var setStorageBucketTrackingSpy = sinon.stub(storageBucketsModel.storageAgent, 'invoke_deleteStorageBucket').resolves({
            getError: function() {
                return undefined;
            }
        });
        storageBucketsModel.deleteBucket(bucket);
        assert.isTrue(setStorageBucketTrackingSpy.calledOnceWithExactly({
            bucket: bucket
        }));
    });
}); //# sourceMappingURL=StorageBucketsModel.test.js.map


}),

}]);