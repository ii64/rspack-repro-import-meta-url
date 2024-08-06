"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_IndexedDBModel_js"], {
"./panels/application/IndexedDBModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Database: function() { return Database; },
  DatabaseId: function() { return DatabaseId; },
  Entry: function() { return Entry; },
  Events: function() { return Events; },
  Index: function() { return Index; },
  IndexedDBModel: function() { return IndexedDBModel; },
  ObjectStore: function() { return ObjectStore; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/*
 * Copyright (C) 2012 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
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


var DEFAULT_BUCKET = ''; // Empty string is not a valid bucket name
var IndexedDBModel = /*#__PURE__*/ function(_SDK_SDKModel_SDKModel) {
    "use strict";
    _inherits(IndexedDBModel, _SDK_SDKModel_SDKModel);
    var _super = _create_super(IndexedDBModel);
    function IndexedDBModel(target) {
        _class_call_check(this, IndexedDBModel);
        var _this;
        _this = _super.call(this, target);
        _define_property(_assert_this_initialized(_this), "storageBucketModel", void 0);
        _define_property(_assert_this_initialized(_this), "indexedDBAgent", void 0);
        _define_property(_assert_this_initialized(_this), "storageAgent", void 0);
        _define_property(_assert_this_initialized(_this), "databasesInternal", void 0);
        _define_property(_assert_this_initialized(_this), "databaseNamesByStorageKeyAndBucket", void 0);
        _define_property(_assert_this_initialized(_this), "updatedStorageBuckets", void 0);
        _define_property(_assert_this_initialized(_this), "throttler", void 0);
        _define_property(_assert_this_initialized(_this), "enabled", void 0);
        target.registerStorageDispatcher(_assert_this_initialized(_this));
        _this.storageBucketModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.StorageBucketsModel);
        _this.indexedDBAgent = target.indexedDBAgent();
        _this.storageAgent = target.storageAgent();
        _this.databasesInternal = new Map();
        _this.databaseNamesByStorageKeyAndBucket = new Map();
        _this.updatedStorageBuckets = new Set();
        _this.throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(1000);
        return _this;
    }
    _create_class(IndexedDBModel, [
        {
            key: "enable",
            value: function enable() {
                if (this.enabled) {
                    return;
                }
                void this.indexedDBAgent.invoke_enable();
                if (this.storageBucketModel) {
                    this.storageBucketModel.addEventListener("BucketAdded" /* SDK.StorageBucketsModel.Events.BucketAdded */ , this.storageBucketAdded, this);
                    this.storageBucketModel.addEventListener("BucketRemoved" /* SDK.StorageBucketsModel.Events.BucketRemoved */ , this.storageBucketRemoved, this);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.storageBucketModel.getBuckets()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var bucket = _step.value.bucket;
                            this.addStorageBucket(bucket);
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
                this.enabled = true;
            }
        },
        {
            key: "clearForStorageKey",
            value: function clearForStorageKey(storageKey) {
                var _this_storageBucketModel;
                if (!this.enabled || !this.databaseNamesByStorageKeyAndBucket.has(storageKey)) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = (this.databaseNamesByStorageKeyAndBucket.get(storageKey) || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 1), storageBucketName = _step_value[0];
                        var _this_storageBucketModel_getBucketByName, _this_storageBucketModel1;
                        var storageBucket = (_this_storageBucketModel1 = this.storageBucketModel) === null || _this_storageBucketModel1 === void 0 ? void 0 : (_this_storageBucketModel_getBucketByName = _this_storageBucketModel1.getBucketByName(storageKey, storageBucketName !== null && storageBucketName !== void 0 ? storageBucketName : undefined)) === null || _this_storageBucketModel_getBucketByName === void 0 ? void 0 : _this_storageBucketModel_getBucketByName.bucket;
                        if (storageBucket) {
                            this.removeStorageBucket(storageBucket);
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
                this.databaseNamesByStorageKeyAndBucket.delete(storageKey);
                var bucketInfos = ((_this_storageBucketModel = this.storageBucketModel) === null || _this_storageBucketModel === void 0 ? void 0 : _this_storageBucketModel.getBucketsForStorageKey(storageKey)) || [];
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = bucketInfos[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var bucket = _step1.value.bucket;
                        this.addStorageBucket(bucket);
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
        },
        {
            key: "deleteDatabase",
            value: function deleteDatabase(databaseId) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.enabled) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _this.indexedDBAgent.invoke_deleteDatabase({
                                        storageBucket: databaseId.storageBucket,
                                        databaseName: databaseId.name
                                    })
                                ];
                            case 1:
                                _state.sent();
                                void _this.loadDatabaseNamesByStorageBucket(databaseId.storageBucket);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "refreshDatabaseNames",
            value: function refreshDatabaseNames() {
                var _this = this;
                return _async_to_generator(function() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, storageKey, _this_databaseNamesByStorageKeyAndBucket_get, storageBucketNames, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, storageBucketName, _this_storageBucketModel_getBucketByName, _this_storageBucketModel, storageBucket, err, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    12,
                                    13,
                                    14
                                ]);
                                _iterator = _this.databaseNamesByStorageKeyAndBucket[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    11
                                ];
                                _step_value = _sliced_to_array(_step.value, 1), storageKey = _step_value[0];
                                storageBucketNames = ((_this_databaseNamesByStorageKeyAndBucket_get = _this.databaseNamesByStorageKeyAndBucket.get(storageKey)) === null || _this_databaseNamesByStorageKeyAndBucket_get === void 0 ? void 0 : _this_databaseNamesByStorageKeyAndBucket_get.keys()) || [];
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                _state.label = 3;
                            case 3:
                                _state.trys.push([
                                    3,
                                    8,
                                    9,
                                    10
                                ]);
                                _iterator1 = storageBucketNames[Symbol.iterator]();
                                _state.label = 4;
                            case 4:
                                if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                                    3,
                                    7
                                ];
                                storageBucketName = _step1.value;
                                storageBucket = (_this_storageBucketModel = _this.storageBucketModel) === null || _this_storageBucketModel === void 0 ? void 0 : (_this_storageBucketModel_getBucketByName = _this_storageBucketModel.getBucketByName(storageKey, storageBucketName !== null && storageBucketName !== void 0 ? storageBucketName : undefined)) === null || _this_storageBucketModel_getBucketByName === void 0 ? void 0 : _this_storageBucketModel_getBucketByName.bucket;
                                if (!storageBucket) return [
                                    3,
                                    6
                                ];
                                return [
                                    4,
                                    _this.loadDatabaseNamesByStorageBucket(storageBucket)
                                ];
                            case 5:
                                _state.sent();
                                _state.label = 6;
                            case 6:
                                _iteratorNormalCompletion1 = true;
                                return [
                                    3,
                                    4
                                ];
                            case 7:
                                return [
                                    3,
                                    10
                                ];
                            case 8:
                                err = _state.sent();
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                                return [
                                    3,
                                    10
                                ];
                            case 9:
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 10:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 11:
                                return [
                                    3,
                                    14
                                ];
                            case 12:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    14
                                ];
                            case 13:
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
                            case 14:
                                _this.dispatchEventToListeners(Events.DatabaseNamesRefreshed);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "refreshDatabase",
            value: function refreshDatabase(databaseId) {
                void this.loadDatabase(databaseId, true);
            }
        },
        {
            key: "clearObjectStore",
            value: function clearObjectStore(databaseId, objectStoreName) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.indexedDBAgent.invoke_clearObjectStore({
                                        storageBucket: databaseId.storageBucket,
                                        databaseName: databaseId.name,
                                        objectStoreName: objectStoreName
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "deleteEntries",
            value: function deleteEntries(databaseId, objectStoreName, idbKeyRange) {
                var _this = this;
                return _async_to_generator(function() {
                    var keyRange;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                keyRange = IndexedDBModel.keyRangeFromIDBKeyRange(idbKeyRange);
                                return [
                                    4,
                                    _this.indexedDBAgent.invoke_deleteObjectStoreEntries({
                                        storageBucket: databaseId.storageBucket,
                                        databaseName: databaseId.name,
                                        objectStoreName: objectStoreName,
                                        keyRange: keyRange
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "storageBucketAdded",
            value: function storageBucketAdded(param) {
                var _param_data = param.data, bucket = _param_data.bucketInfo.bucket;
                this.addStorageBucket(bucket);
            }
        },
        {
            key: "storageBucketRemoved",
            value: function storageBucketRemoved(param) {
                var _param_data = param.data, bucket = _param_data.bucketInfo.bucket;
                this.removeStorageBucket(bucket);
            }
        },
        {
            key: "addStorageBucket",
            value: function addStorageBucket(storageBucket) {
                var storageKey = storageBucket.storageKey;
                if (!this.databaseNamesByStorageKeyAndBucket.has(storageKey)) {
                    this.databaseNamesByStorageKeyAndBucket.set(storageKey, new Map());
                    void this.storageAgent.invoke_trackIndexedDBForStorageKey({
                        storageKey: storageKey
                    });
                }
                var storageKeyBuckets = this.databaseNamesByStorageKeyAndBucket.get(storageKey) || new Map();
                var _storageBucket_name;
                console.assert(!storageKeyBuckets.has((_storageBucket_name = storageBucket.name) !== null && _storageBucket_name !== void 0 ? _storageBucket_name : DEFAULT_BUCKET));
                var _storageBucket_name1;
                storageKeyBuckets.set((_storageBucket_name1 = storageBucket.name) !== null && _storageBucket_name1 !== void 0 ? _storageBucket_name1 : DEFAULT_BUCKET, new Set());
                void this.loadDatabaseNamesByStorageBucket(storageBucket);
            }
        },
        {
            key: "removeStorageBucket",
            value: function removeStorageBucket(storageBucket) {
                var storageKey = storageBucket.storageKey;
                console.assert(this.databaseNamesByStorageKeyAndBucket.has(storageKey));
                var storageKeyBuckets = this.databaseNamesByStorageKeyAndBucket.get(storageKey) || new Map();
                var _storageBucket_name;
                console.assert(storageKeyBuckets.has((_storageBucket_name = storageBucket.name) !== null && _storageBucket_name !== void 0 ? _storageBucket_name : DEFAULT_BUCKET));
                var _storageBucket_name1;
                var databaseIds = storageKeyBuckets.get((_storageBucket_name1 = storageBucket.name) !== null && _storageBucket_name1 !== void 0 ? _storageBucket_name1 : DEFAULT_BUCKET) || new Map();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = databaseIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var databaseId = _step.value;
                        this.databaseRemovedForStorageBucket(databaseId);
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
                var _storageBucket_name2;
                storageKeyBuckets.delete((_storageBucket_name2 = storageBucket.name) !== null && _storageBucket_name2 !== void 0 ? _storageBucket_name2 : DEFAULT_BUCKET);
                if (storageKeyBuckets.size === 0) {
                    this.databaseNamesByStorageKeyAndBucket.delete(storageKey);
                    void this.storageAgent.invoke_untrackIndexedDBForStorageKey({
                        storageKey: storageKey
                    });
                }
            }
        },
        {
            key: "updateStorageKeyDatabaseNames",
            value: function updateStorageKeyDatabaseNames(storageBucket, databaseNames) {
                var storageKeyBuckets = this.databaseNamesByStorageKeyAndBucket.get(storageBucket.storageKey);
                if (storageKeyBuckets === undefined) {
                    return;
                }
                var newDatabases = new Set(databaseNames.map(function(databaseName) {
                    return new DatabaseId(storageBucket, databaseName);
                }));
                var _storageBucket_name;
                var oldDatabases = new Set(storageKeyBuckets.get((_storageBucket_name = storageBucket.name) !== null && _storageBucket_name !== void 0 ? _storageBucket_name : DEFAULT_BUCKET));
                var _storageBucket_name1;
                storageKeyBuckets.set((_storageBucket_name1 = storageBucket.name) !== null && _storageBucket_name1 !== void 0 ? _storageBucket_name1 : DEFAULT_BUCKET, newDatabases);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = oldDatabases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var database = _step.value;
                        if (!database.inSet(newDatabases)) {
                            this.databaseRemovedForStorageBucket(database);
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
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = newDatabases[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var database1 = _step1.value;
                        if (!database1.inSet(oldDatabases)) {
                            this.databaseAddedForStorageBucket(database1);
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
        },
        {
            key: "databases",
            value: function databases() {
                var result = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.databaseNamesByStorageKeyAndBucket[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), buckets = _step_value[1];
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = buckets[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var _step_value1 = _sliced_to_array(_step1.value, 2), databases = _step_value1[1];
                                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                try {
                                    for(var _iterator2 = databases[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                        var database = _step2.value;
                                        result.push(database);
                                    }
                                } catch (err) {
                                    _didIteratorError2 = true;
                                    _iteratorError2 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                            _iterator2.return();
                                        }
                                    } finally{
                                        if (_didIteratorError2) {
                                            throw _iteratorError2;
                                        }
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
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
                return result;
            }
        },
        {
            key: "databaseAddedForStorageBucket",
            value: function databaseAddedForStorageBucket(databaseId) {
                this.dispatchEventToListeners(Events.DatabaseAdded, {
                    model: this,
                    databaseId: databaseId
                });
            }
        },
        {
            key: "databaseRemovedForStorageBucket",
            value: function databaseRemovedForStorageBucket(databaseId) {
                this.dispatchEventToListeners(Events.DatabaseRemoved, {
                    model: this,
                    databaseId: databaseId
                });
            }
        },
        {
            key: "loadDatabaseNamesByStorageBucket",
            value: function loadDatabaseNamesByStorageBucket(storageBucket) {
                var _this = this;
                return _async_to_generator(function() {
                    var storageKey, databaseNames, storageKeyBuckets, _storageBucket_name;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                storageKey = storageBucket.storageKey;
                                return [
                                    4,
                                    _this.indexedDBAgent.invoke_requestDatabaseNames({
                                        storageBucket: storageBucket
                                    })
                                ];
                            case 1:
                                databaseNames = _state.sent().databaseNames;
                                if (!databaseNames) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                if (!_this.databaseNamesByStorageKeyAndBucket.has(storageKey)) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                storageKeyBuckets = _this.databaseNamesByStorageKeyAndBucket.get(storageKey) || new Map();
                                if (!storageKeyBuckets.has((_storageBucket_name = storageBucket.name) !== null && _storageBucket_name !== void 0 ? _storageBucket_name : DEFAULT_BUCKET)) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                _this.updateStorageKeyDatabaseNames(storageBucket, databaseNames);
                                return [
                                    2,
                                    databaseNames
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "loadDatabase",
            value: function loadDatabase(databaseId, entriesUpdated) {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_databaseNamesByStorageKeyAndBucket_get, databaseWithObjectStores, _databaseId_storageBucket_name, databaseModel, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, objectStore, objectStoreIDBKeyPath, objectStoreModel, j, index, indexIDBKeyPath, indexModel;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.indexedDBAgent.invoke_requestDatabase({
                                        storageBucket: databaseId.storageBucket,
                                        databaseName: databaseId.name
                                    })
                                ];
                            case 1:
                                databaseWithObjectStores = _state.sent().databaseWithObjectStores;
                                if (!((_this_databaseNamesByStorageKeyAndBucket_get = _this.databaseNamesByStorageKeyAndBucket.get(databaseId.storageBucket.storageKey)) === null || _this_databaseNamesByStorageKeyAndBucket_get === void 0 ? void 0 : _this_databaseNamesByStorageKeyAndBucket_get.has((_databaseId_storageBucket_name = databaseId.storageBucket.name) !== null && _databaseId_storageBucket_name !== void 0 ? _databaseId_storageBucket_name : DEFAULT_BUCKET))) {
                                    return [
                                        2
                                    ];
                                }
                                if (!databaseWithObjectStores) {
                                    return [
                                        2
                                    ];
                                }
                                databaseModel = new Database(databaseId, databaseWithObjectStores.version);
                                _this.databasesInternal.set(databaseId, databaseModel);
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = databaseWithObjectStores.objectStores[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        objectStore = _step.value;
                                        objectStoreIDBKeyPath = IndexedDBModel.idbKeyPathFromKeyPath(objectStore.keyPath);
                                        objectStoreModel = new ObjectStore(objectStore.name, objectStoreIDBKeyPath, objectStore.autoIncrement);
                                        for(j = 0; j < objectStore.indexes.length; ++j){
                                            index = objectStore.indexes[j];
                                            indexIDBKeyPath = IndexedDBModel.idbKeyPathFromKeyPath(index.keyPath);
                                            indexModel = new Index(index.name, indexIDBKeyPath, index.unique, index.multiEntry);
                                            objectStoreModel.indexes.set(indexModel.name, indexModel);
                                        }
                                        databaseModel.objectStores.set(objectStoreModel.name, objectStoreModel);
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
                                _this.dispatchEventToListeners(Events.DatabaseLoaded, {
                                    model: _this,
                                    database: databaseModel,
                                    entriesUpdated: entriesUpdated
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "loadObjectStoreData",
            value: function loadObjectStoreData(databaseId, objectStoreName, idbKeyRange, skipCount, pageSize, callback) {
                void this.requestData(databaseId, databaseId.name, objectStoreName, '', idbKeyRange, skipCount, pageSize, callback);
            }
        },
        {
            key: "loadIndexData",
            value: function loadIndexData(databaseId, objectStoreName, indexName, idbKeyRange, skipCount, pageSize, callback) {
                void this.requestData(databaseId, databaseId.name, objectStoreName, indexName, idbKeyRange, skipCount, pageSize, callback);
            }
        },
        {
            key: "requestData",
            value: function requestData(databaseId, databaseName, objectStoreName, indexName, idbKeyRange, skipCount, pageSize, callback) {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_databaseNamesByStorageKeyAndBucket_get, keyRange, runtimeModel, response, _databaseId_storageBucket_name, dataEntries, entries, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, dataEntry, key, primaryKey, value;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                keyRange = idbKeyRange ? IndexedDBModel.keyRangeFromIDBKeyRange(idbKeyRange) : undefined;
                                runtimeModel = _this.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
                                return [
                                    4,
                                    _this.indexedDBAgent.invoke_requestData({
                                        storageBucket: databaseId.storageBucket,
                                        databaseName: databaseName,
                                        objectStoreName: objectStoreName,
                                        indexName: indexName,
                                        skipCount: skipCount,
                                        pageSize: pageSize,
                                        keyRange: keyRange
                                    })
                                ];
                            case 1:
                                response = _state.sent();
                                if (!runtimeModel || !((_this_databaseNamesByStorageKeyAndBucket_get = _this.databaseNamesByStorageKeyAndBucket.get(databaseId.storageBucket.storageKey)) === null || _this_databaseNamesByStorageKeyAndBucket_get === void 0 ? void 0 : _this_databaseNamesByStorageKeyAndBucket_get.has((_databaseId_storageBucket_name = databaseId.storageBucket.name) !== null && _databaseId_storageBucket_name !== void 0 ? _databaseId_storageBucket_name : DEFAULT_BUCKET))) {
                                    return [
                                        2
                                    ];
                                }
                                if (response.getError()) {
                                    console.error('IndexedDBAgent error: ' + response.getError());
                                    return [
                                        2
                                    ];
                                }
                                dataEntries = response.objectStoreDataEntries;
                                entries = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = dataEntries[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        dataEntry = _step.value;
                                        key = runtimeModel === null || runtimeModel === void 0 ? void 0 : runtimeModel.createRemoteObject(dataEntry.key);
                                        primaryKey = runtimeModel === null || runtimeModel === void 0 ? void 0 : runtimeModel.createRemoteObject(dataEntry.primaryKey);
                                        value = runtimeModel === null || runtimeModel === void 0 ? void 0 : runtimeModel.createRemoteObject(dataEntry.value);
                                        if (!key || !primaryKey || !value) {
                                            return [
                                                2
                                            ];
                                        }
                                        entries.push(new Entry(key, primaryKey, value));
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
                                callback(entries, response.hasMore);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getMetadata",
            value: function getMetadata(databaseId, objectStore) {
                var _this = this;
                return _async_to_generator(function() {
                    var databaseName, objectStoreName, response;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                databaseName = databaseId.name;
                                objectStoreName = objectStore.name;
                                return [
                                    4,
                                    _this.indexedDBAgent.invoke_getMetadata({
                                        storageBucket: databaseId.storageBucket,
                                        databaseName: databaseName,
                                        objectStoreName: objectStoreName
                                    })
                                ];
                            case 1:
                                response = _state.sent();
                                if (response.getError()) {
                                    console.error('IndexedDBAgent error: ' + response.getError());
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                return [
                                    2,
                                    {
                                        entriesCount: response.entriesCount,
                                        keyGeneratorValue: response.keyGeneratorValue
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "refreshDatabaseListForStorageBucket",
            value: function refreshDatabaseListForStorageBucket(storageBucket) {
                var _this = this;
                return _async_to_generator(function() {
                    var databaseNames, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, databaseName;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.loadDatabaseNamesByStorageBucket(storageBucket)
                                ];
                            case 1:
                                databaseNames = _state.sent();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = databaseNames[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        databaseName = _step.value;
                                        void _this.loadDatabase(new DatabaseId(storageBucket, databaseName), false);
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
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "indexedDBListUpdated",
            value: function indexedDBListUpdated(param) {
                var _this = this;
                var storageKey = param.storageKey, bucketId = param.bucketId;
                var _this_storageBucketModel_getBucketById, _this_storageBucketModel;
                var storageBucket = (_this_storageBucketModel = this.storageBucketModel) === null || _this_storageBucketModel === void 0 ? void 0 : (_this_storageBucketModel_getBucketById = _this_storageBucketModel.getBucketById(bucketId)) === null || _this_storageBucketModel_getBucketById === void 0 ? void 0 : _this_storageBucketModel_getBucketById.bucket;
                if (storageKey && storageBucket) {
                    this.updatedStorageBuckets.add(storageBucket);
                    void this.throttler.schedule(function() {
                        var promises = Array.from(_this.updatedStorageBuckets, function(storageBucket) {
                            void _this.refreshDatabaseListForStorageBucket(storageBucket);
                        });
                        _this.updatedStorageBuckets.clear();
                        return Promise.all(promises);
                    });
                }
            }
        },
        {
            key: "indexedDBContentUpdated",
            value: function indexedDBContentUpdated(param) {
                var bucketId = param.bucketId, databaseName = param.databaseName, objectStoreName = param.objectStoreName;
                var _this_storageBucketModel_getBucketById, _this_storageBucketModel;
                var storageBucket = (_this_storageBucketModel = this.storageBucketModel) === null || _this_storageBucketModel === void 0 ? void 0 : (_this_storageBucketModel_getBucketById = _this_storageBucketModel.getBucketById(bucketId)) === null || _this_storageBucketModel_getBucketById === void 0 ? void 0 : _this_storageBucketModel_getBucketById.bucket;
                if (storageBucket) {
                    var databaseId = new DatabaseId(storageBucket, databaseName);
                    this.dispatchEventToListeners(Events.IndexedDBContentUpdated, {
                        databaseId: databaseId,
                        objectStoreName: objectStoreName,
                        model: this
                    });
                }
            }
        },
        {
            key: "attributionReportingTriggerRegistered",
            value: function attributionReportingTriggerRegistered(_event) {}
        },
        {
            key: "cacheStorageListUpdated",
            value: function cacheStorageListUpdated(_event) {}
        },
        {
            key: "cacheStorageContentUpdated",
            value: function cacheStorageContentUpdated(_event) {}
        },
        {
            key: "interestGroupAccessed",
            value: function interestGroupAccessed(_event) {}
        },
        {
            key: "interestGroupAuctionEventOccurred",
            value: function interestGroupAuctionEventOccurred(_event) {}
        },
        {
            key: "interestGroupAuctionNetworkRequestCreated",
            value: function interestGroupAuctionNetworkRequestCreated(_event) {}
        },
        {
            key: "sharedStorageAccessed",
            value: function sharedStorageAccessed(_event) {}
        },
        {
            key: "storageBucketCreatedOrUpdated",
            value: function storageBucketCreatedOrUpdated(_event) {}
        },
        {
            key: "storageBucketDeleted",
            value: function storageBucketDeleted(_event) {}
        },
        {
            key: "attributionReportingSourceRegistered",
            value: function attributionReportingSourceRegistered(_event) {}
        }
    ], [
        {
            key: "keyFromIDBKey",
            value: // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function keyFromIDBKey(idbKey) {
                if (typeof idbKey === 'undefined' || idbKey === null) {
                    return undefined;
                }
                var key;
                switch(typeof idbKey === "undefined" ? "undefined" : _type_of(idbKey)){
                    case 'number':
                        key = {
                            type: "number" /* Protocol.IndexedDB.KeyType.Number */ ,
                            number: idbKey
                        };
                        break;
                    case 'string':
                        key = {
                            type: "string" /* Protocol.IndexedDB.KeyType.String */ ,
                            string: idbKey
                        };
                        break;
                    case 'object':
                        if (_instanceof(idbKey, Date)) {
                            key = {
                                type: "date" /* Protocol.IndexedDB.KeyType.Date */ ,
                                date: idbKey.getTime()
                            };
                        } else if (Array.isArray(idbKey)) {
                            var array = [];
                            for(var i = 0; i < idbKey.length; ++i){
                                var nestedKey = IndexedDBModel.keyFromIDBKey(idbKey[i]);
                                if (nestedKey) {
                                    array.push(nestedKey);
                                }
                            }
                            key = {
                                type: "array" /* Protocol.IndexedDB.KeyType.Array */ ,
                                array: array
                            };
                        } else {
                            return undefined;
                        }
                        break;
                    default:
                        return undefined;
                }
                return key;
            }
        },
        {
            key: "keyRangeFromIDBKeyRange",
            value: function keyRangeFromIDBKeyRange(idbKeyRange) {
                return {
                    lower: IndexedDBModel.keyFromIDBKey(idbKeyRange.lower),
                    upper: IndexedDBModel.keyFromIDBKey(idbKeyRange.upper),
                    lowerOpen: Boolean(idbKeyRange.lowerOpen),
                    upperOpen: Boolean(idbKeyRange.upperOpen)
                };
            }
        },
        {
            key: "idbKeyPathFromKeyPath",
            value: function idbKeyPathFromKeyPath(keyPath) {
                var idbKeyPath;
                switch(keyPath.type){
                    case "null" /* Protocol.IndexedDB.KeyPathType.Null */ :
                        idbKeyPath = null;
                        break;
                    case "string" /* Protocol.IndexedDB.KeyPathType.String */ :
                        idbKeyPath = keyPath.string;
                        break;
                    case "array" /* Protocol.IndexedDB.KeyPathType.Array */ :
                        idbKeyPath = keyPath.array;
                        break;
                }
                return idbKeyPath;
            }
        },
        {
            key: "keyPathStringFromIDBKeyPath",
            value: function keyPathStringFromIDBKeyPath(idbKeyPath) {
                if (typeof idbKeyPath === 'string') {
                    return '"' + idbKeyPath + '"';
                }
                if (_instanceof(idbKeyPath, Array)) {
                    return '["' + idbKeyPath.join('", "') + '"]';
                }
                return null;
            }
        }
    ]);
    return IndexedDBModel;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel);
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel.register(IndexedDBModel, {
    capabilities: 8192 /* SDK.Target.Capability.Storage */ ,
    autostart: false
});
var Events;
(function(Events) {
    Events["DatabaseAdded"] = "DatabaseAdded";
    Events["DatabaseRemoved"] = "DatabaseRemoved";
    Events["DatabaseLoaded"] = "DatabaseLoaded";
    Events["DatabaseNamesRefreshed"] = "DatabaseNamesRefreshed";
    Events["IndexedDBContentUpdated"] = "IndexedDBContentUpdated";
})(Events || (Events = {}));
var Entry = function Entry(key, primaryKey, value) {
    "use strict";
    _class_call_check(this, Entry);
    _define_property(this, "key", void 0);
    _define_property(this, "primaryKey", void 0);
    _define_property(this, "value", void 0);
    this.key = key;
    this.primaryKey = primaryKey;
    this.value = value;
};
var DatabaseId = /*#__PURE__*/ function() {
    "use strict";
    function DatabaseId(storageBucket, name) {
        _class_call_check(this, DatabaseId);
        _define_property(this, "storageBucket", void 0);
        _define_property(this, "name", void 0);
        this.storageBucket = storageBucket;
        this.name = name;
    }
    _create_class(DatabaseId, [
        {
            key: "inBucket",
            value: function inBucket(storageBucket) {
                return this.storageBucket.name === storageBucket.name;
            }
        },
        {
            key: "equals",
            value: function equals(databaseId) {
                return this.name === databaseId.name && this.storageBucket.name === databaseId.storageBucket.name && this.storageBucket.storageKey === databaseId.storageBucket.storageKey;
            }
        },
        {
            key: "inSet",
            value: function inSet(databaseSet) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = databaseSet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var database = _step.value;
                        if (this.equals(database)) {
                            return true;
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
                return false;
            }
        }
    ]);
    return DatabaseId;
}();
var Database = function Database(databaseId, version) {
    "use strict";
    _class_call_check(this, Database);
    _define_property(this, "databaseId", void 0);
    _define_property(this, "version", void 0);
    _define_property(this, "objectStores", void 0);
    this.databaseId = databaseId;
    this.version = version;
    this.objectStores = new Map();
};
var ObjectStore = /*#__PURE__*/ function() {
    "use strict";
    function ObjectStore(name, keyPath, autoIncrement) {
        _class_call_check(this, ObjectStore);
        _define_property(this, "name", void 0);
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _define_property(this, "keyPath", void 0);
        _define_property(this, "autoIncrement", void 0);
        _define_property(this, "indexes", void 0);
        this.name = name;
        this.keyPath = keyPath;
        this.autoIncrement = autoIncrement;
        this.indexes = new Map();
    }
    _create_class(ObjectStore, [
        {
            key: "keyPathString",
            get: function get() {
                // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                // @ts-expect-error
                return IndexedDBModel.keyPathStringFromIDBKeyPath(this.keyPath);
            }
        }
    ]);
    return ObjectStore;
}();
var Index = /*#__PURE__*/ function() {
    "use strict";
    function Index(name, keyPath, unique, multiEntry) {
        _class_call_check(this, Index);
        _define_property(this, "name", void 0);
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _define_property(this, "keyPath", void 0);
        _define_property(this, "unique", void 0);
        _define_property(this, "multiEntry", void 0);
        this.name = name;
        this.keyPath = keyPath;
        this.unique = unique;
        this.multiEntry = multiEntry;
    }
    _create_class(Index, [
        {
            key: "keyPathString",
            get: function get() {
                return IndexedDBModel.keyPathStringFromIDBKeyPath(this.keyPath);
            }
        }
    ]);
    return Index;
} //# sourceMappingURL=IndexedDBModel.js.map
();


}),

}]);