"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_SharedStorageModel_js"], {
"./panels/application/SharedStorageModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SharedStorageForOrigin: function() { return SharedStorageForOrigin; },
  SharedStorageModel: function() { return SharedStorageModel; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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


var _model = /*#__PURE__*/ new WeakMap(), _securityOrigin = /*#__PURE__*/ new WeakMap();
var SharedStorageForOrigin = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(SharedStorageForOrigin, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(SharedStorageForOrigin);
    function SharedStorageForOrigin(model, securityOrigin) {
        _class_call_check(this, SharedStorageForOrigin);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _model, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _securityOrigin, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _model, model);
        _class_private_field_set(_assert_this_initialized(_this), _securityOrigin, securityOrigin);
        return _this;
    }
    _create_class(SharedStorageForOrigin, [
        {
            key: "securityOrigin",
            get: function get() {
                return _class_private_field_get(this, _securityOrigin);
            }
        },
        {
            key: "getMetadata",
            value: function getMetadata() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _class_private_field_get(_this, _model).storageAgent.invoke_getSharedStorageMetadata({
                                ownerOrigin: _this.securityOrigin
                            }).then(function(param) {
                                var metadata = param.metadata;
                                return metadata;
                            })
                        ];
                    });
                })();
            }
        },
        {
            key: "getEntries",
            value: function getEntries() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _class_private_field_get(_this, _model).storageAgent.invoke_getSharedStorageEntries({
                                ownerOrigin: _this.securityOrigin
                            }).then(function(param) {
                                var entries = param.entries;
                                return entries;
                            })
                        ];
                    });
                })();
            }
        },
        {
            key: "setEntry",
            value: function setEntry(key, value, ignoreIfPresent) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _model).storageAgent.invoke_setSharedStorageEntry({
                                        ownerOrigin: _this.securityOrigin,
                                        key: key,
                                        value: value,
                                        ignoreIfPresent: ignoreIfPresent
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
            key: "deleteEntry",
            value: function deleteEntry(key) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _model).storageAgent.invoke_deleteSharedStorageEntry({
                                        ownerOrigin: _this.securityOrigin,
                                        key: key
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
            key: "clear",
            value: function clear() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _model).storageAgent.invoke_clearSharedStorageEntries({
                                        ownerOrigin: _this.securityOrigin
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
            key: "resetBudget",
            value: function resetBudget() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _model).storageAgent.invoke_resetSharedStorageBudget({
                                        ownerOrigin: _this.securityOrigin
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
        }
    ]);
    return SharedStorageForOrigin;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var _securityOriginManager = /*#__PURE__*/ new WeakMap(), _storages = /*#__PURE__*/ new WeakMap(), _enabled = /*#__PURE__*/ new WeakMap(), _addAllOrigins = /*#__PURE__*/ new WeakSet(), _removeAllOrigins = /*#__PURE__*/ new WeakSet(), _securityOriginAdded = /*#__PURE__*/ new WeakSet(), _maybeAddOrigin = /*#__PURE__*/ new WeakSet(), _securityOriginRemoved = /*#__PURE__*/ new WeakSet(), _removeOrigin = /*#__PURE__*/ new WeakSet();
var SharedStorageModel = /*#__PURE__*/ function(_SDK_SDKModel_SDKModel) {
    "use strict";
    _inherits(SharedStorageModel, _SDK_SDKModel_SDKModel);
    var _super = _create_super(SharedStorageModel);
    function SharedStorageModel(target) {
        _class_call_check(this, SharedStorageModel);
        var _this;
        _this = _super.call(this, target);
        _class_private_method_init(_assert_this_initialized(_this), _addAllOrigins);
        _class_private_method_init(_assert_this_initialized(_this), _removeAllOrigins);
        _class_private_method_init(_assert_this_initialized(_this), _securityOriginAdded);
        _class_private_method_init(_assert_this_initialized(_this), _maybeAddOrigin);
        _class_private_method_init(_assert_this_initialized(_this), _securityOriginRemoved);
        _class_private_method_init(_assert_this_initialized(_this), _removeOrigin);
        _class_private_field_init(_assert_this_initialized(_this), _securityOriginManager, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _storages, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "storageAgent", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _enabled, {
            writable: true,
            value: void 0
        });
        target.registerStorageDispatcher(_assert_this_initialized(_this));
        _class_private_field_set(_assert_this_initialized(_this), _securityOriginManager, target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.SecurityOriginManager));
        _class_private_field_set(_assert_this_initialized(_this), _storages, new Map());
        _this.storageAgent = target.storageAgent();
        _class_private_field_set(_assert_this_initialized(_this), _enabled, false);
        return _this;
    }
    _create_class(SharedStorageModel, [
        {
            key: "enable",
            value: function enable() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_class_private_field_get(_this, _enabled)) {
                                    return [
                                        2
                                    ];
                                }
                                _class_private_field_get(_this, _securityOriginManager).addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.Events.SecurityOriginAdded, _class_private_method_get(_this, _securityOriginAdded, securityOriginAdded), _this);
                                _class_private_field_get(_this, _securityOriginManager).addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.Events.SecurityOriginRemoved, _class_private_method_get(_this, _securityOriginRemoved, securityOriginRemoved), _this);
                                return [
                                    4,
                                    _this.storageAgent.invoke_setSharedStorageTracking({
                                        enable: true
                                    })
                                ];
                            case 1:
                                _state.sent();
                                _class_private_method_get(_this, _addAllOrigins, addAllOrigins).call(_this);
                                _class_private_field_set(_this, _enabled, true);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "disable",
            value: function disable() {
                if (!_class_private_field_get(this, _enabled)) {
                    return;
                }
                _class_private_field_get(this, _securityOriginManager).removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.Events.SecurityOriginAdded, _class_private_method_get(this, _securityOriginAdded, securityOriginAdded), this);
                _class_private_field_get(this, _securityOriginManager).removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.Events.SecurityOriginRemoved, _class_private_method_get(this, _securityOriginRemoved, securityOriginRemoved), this);
                void this.storageAgent.invoke_setSharedStorageTracking({
                    enable: false
                });
                _class_private_method_get(this, _removeAllOrigins, removeAllOrigins).call(this);
                _class_private_field_set(this, _enabled, false);
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                this.disable();
            }
        },
        {
            key: "storages",
            value: function storages() {
                return _class_private_field_get(this, _storages).values();
            }
        },
        {
            key: "storageForOrigin",
            value: function storageForOrigin(origin) {
                return _class_private_field_get(this, _storages).get(origin) || null;
            }
        },
        {
            key: "numStoragesForTesting",
            value: function numStoragesForTesting() {
                return _class_private_field_get(this, _storages).size;
            }
        },
        {
            key: "isChangeEvent",
            value: function isChangeEvent(event) {
                return [
                    "documentSet" /* Protocol.Storage.SharedStorageAccessType.DocumentSet */ ,
                    "documentAppend" /* Protocol.Storage.SharedStorageAccessType.DocumentAppend */ ,
                    "documentDelete" /* Protocol.Storage.SharedStorageAccessType.DocumentDelete */ ,
                    "documentClear" /* Protocol.Storage.SharedStorageAccessType.DocumentClear */ ,
                    "workletSet" /* Protocol.Storage.SharedStorageAccessType.WorkletSet */ ,
                    "workletAppend" /* Protocol.Storage.SharedStorageAccessType.WorkletAppend */ ,
                    "workletDelete" /* Protocol.Storage.SharedStorageAccessType.WorkletDelete */ ,
                    "workletClear" /* Protocol.Storage.SharedStorageAccessType.WorkletClear */ 
                ].includes(event.type);
            }
        },
        {
            key: "sharedStorageAccessed",
            value: function sharedStorageAccessed(event) {
                if (this.isChangeEvent(event)) {
                    var sharedStorage = this.storageForOrigin(event.ownerOrigin);
                    if (sharedStorage) {
                        var eventData = {
                            accessTime: event.accessTime,
                            type: event.type,
                            mainFrameId: event.mainFrameId,
                            params: event.params
                        };
                        // Forward events that may have changed `sharedStorage` to listeners for `sharedStorage`.
                        sharedStorage.dispatchEventToListeners("SharedStorageChanged" /* SharedStorageForOrigin.Events.SharedStorageChanged */ , eventData);
                    } else {
                        void _class_private_method_get(this, _maybeAddOrigin, maybeAddOrigin).call(this, event.ownerOrigin);
                    }
                }
                this.dispatchEventToListeners("SharedStorageAccess" /* Events.SharedStorageAccess */ , event);
            }
        },
        {
            key: "attributionReportingTriggerRegistered",
            value: function attributionReportingTriggerRegistered(_event) {}
        },
        {
            key: "indexedDBListUpdated",
            value: function indexedDBListUpdated(_event) {}
        },
        {
            key: "indexedDBContentUpdated",
            value: function indexedDBContentUpdated(_event) {}
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
    ]);
    return SharedStorageModel;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel);
function addAllOrigins() {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _class_private_field_get(this, _securityOriginManager).securityOrigins()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var securityOrigin = _step.value;
            void _class_private_method_get(this, _maybeAddOrigin, maybeAddOrigin).call(this, securityOrigin);
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
function removeAllOrigins() {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _class_private_field_get(this, _storages).keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var securityOrigin = _step.value;
            _class_private_method_get(this, _removeOrigin, removeOrigin).call(this, securityOrigin);
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
function securityOriginAdded(event) {
    _class_private_method_get(this, _maybeAddOrigin, maybeAddOrigin).call(this, event.data);
}
function maybeAddOrigin(securityOrigin) {
    var parsedSecurityOrigin = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(securityOrigin);
    // These are "opaque" origins which are not supposed to support shared storage.
    if (!parsedSecurityOrigin.isValid || parsedSecurityOrigin.scheme === 'data' || parsedSecurityOrigin.scheme === 'about' || parsedSecurityOrigin.scheme === 'javascript') {
        return;
    }
    // Only add origin if it's not already added.
    if (_class_private_field_get(this, _storages).has(securityOrigin)) {
        return;
    }
    var storage = new SharedStorageForOrigin(this, securityOrigin);
    _class_private_field_get(this, _storages).set(securityOrigin, storage);
    this.dispatchEventToListeners("SharedStorageAdded" /* Events.SharedStorageAdded */ , storage);
}
function securityOriginRemoved(event) {
    _class_private_method_get(this, _removeOrigin, removeOrigin).call(this, event.data);
}
function removeOrigin(securityOrigin) {
    var storage = this.storageForOrigin(securityOrigin);
    if (!storage) {
        return;
    }
    _class_private_field_get(this, _storages).delete(securityOrigin);
    this.dispatchEventToListeners("SharedStorageRemoved" /* Events.SharedStorageRemoved */ , storage);
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel.register(SharedStorageModel, {
    capabilities: 8192 /* SDK.Target.Capability.Storage */ ,
    autostart: false
}); //# sourceMappingURL=SharedStorageModel.js.map


}),

}]);