"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_SharedStorageModel_test_js"], {
"./panels/application/SharedStorageModel.test.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _application_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_4__]);
_application_js__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2022 The Chromium Authors. All rights reserved.
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





var _model = /*#__PURE__*/ new WeakMap(), _storagesWatched = /*#__PURE__*/ new WeakMap(), _accessEvents = /*#__PURE__*/ new WeakMap(), _changeEvents = /*#__PURE__*/ new WeakMap(), _sharedStorageAdded = /*#__PURE__*/ new WeakSet(), _sharedStorageRemoved = /*#__PURE__*/ new WeakSet(), _sharedStorageAccess = /*#__PURE__*/ new WeakSet(), _sharedStorageChanged = /*#__PURE__*/ new WeakSet();
var SharedStorageListener = /*#__PURE__*/ function() {
    "use strict";
    function SharedStorageListener(model) {
        _class_call_check(this, SharedStorageListener);
        _class_private_method_init(this, _sharedStorageAdded);
        _class_private_method_init(this, _sharedStorageRemoved);
        _class_private_method_init(this, _sharedStorageAccess);
        _class_private_method_init(this, _sharedStorageChanged);
        _class_private_field_init(this, _model, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _storagesWatched, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _accessEvents, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _changeEvents, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _model, model);
        _class_private_field_set(this, _storagesWatched, new Array());
        _class_private_field_set(this, _accessEvents, new Array());
        _class_private_field_set(this, _changeEvents, new Map());
        _class_private_field_get(this, _model).addEventListener("SharedStorageAdded" /* Resources.SharedStorageModel.Events.SharedStorageAdded */ , _class_private_method_get(this, _sharedStorageAdded, sharedStorageAdded), this);
        _class_private_field_get(this, _model).addEventListener("SharedStorageRemoved" /* Resources.SharedStorageModel.Events.SharedStorageRemoved */ , _class_private_method_get(this, _sharedStorageRemoved, sharedStorageRemoved), this);
        _class_private_field_get(this, _model).addEventListener("SharedStorageAccess" /* Resources.SharedStorageModel.Events.SharedStorageAccess */ , _class_private_method_get(this, _sharedStorageAccess, sharedStorageAccess), this);
    }
    _create_class(SharedStorageListener, [
        {
            key: "dispose",
            value: function dispose() {
                _class_private_field_get(this, _model).removeEventListener("SharedStorageAdded" /* Resources.SharedStorageModel.Events.SharedStorageAdded */ , _class_private_method_get(this, _sharedStorageAdded, sharedStorageAdded), this);
                _class_private_field_get(this, _model).removeEventListener("SharedStorageRemoved" /* Resources.SharedStorageModel.Events.SharedStorageRemoved */ , _class_private_method_get(this, _sharedStorageRemoved, sharedStorageRemoved), this);
                _class_private_field_get(this, _model).removeEventListener("SharedStorageAccess" /* Resources.SharedStorageModel.Events.SharedStorageAccess */ , _class_private_method_get(this, _sharedStorageAccess, sharedStorageAccess), this);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _storagesWatched)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var storage = _step.value;
                        storage.removeEventListener("SharedStorageChanged" /* Resources.SharedStorageModel.SharedStorageForOrigin.Events.SharedStorageChanged */ , _class_private_method_get(this, _sharedStorageChanged, sharedStorageChanged).bind(this, storage), this);
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
        },
        {
            key: "accessEvents",
            get: function get() {
                return _class_private_field_get(this, _accessEvents);
            }
        },
        {
            key: "changeEventsForStorage",
            value: function changeEventsForStorage(storage) {
                return _class_private_field_get(this, _changeEvents).get(storage) || null;
            }
        },
        {
            key: "changeEventsEmpty",
            value: function changeEventsEmpty() {
                return _class_private_field_get(this, _changeEvents).size === 0;
            }
        },
        {
            key: "waitForStoragesAdded",
            value: function waitForStoragesAdded(expectedCount) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(_class_private_field_get(_this, _storagesWatched).length < expectedCount)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _model).once("SharedStorageAdded" /* Resources.SharedStorageModel.Events.SharedStorageAdded */ )
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
    return SharedStorageListener;
}();
function sharedStorageAdded(event) {
    var storage = event.data;
    _class_private_field_get(this, _storagesWatched).push(storage);
    storage.addEventListener("SharedStorageChanged" /* Resources.SharedStorageModel.SharedStorageForOrigin.Events.SharedStorageChanged */ , _class_private_method_get(this, _sharedStorageChanged, sharedStorageChanged).bind(this, storage), this);
}
function sharedStorageRemoved(event) {
    var storage = event.data;
    storage.removeEventListener("SharedStorageChanged" /* Resources.SharedStorageModel.SharedStorageForOrigin.Events.SharedStorageChanged */ , _class_private_method_get(this, _sharedStorageChanged, sharedStorageChanged).bind(this, storage), this);
    var index = _class_private_field_get(this, _storagesWatched).indexOf(storage);
    if (index === -1) {
        return;
    }
    _class_private_field_set(this, _storagesWatched, _class_private_field_get(this, _storagesWatched).splice(index, 1));
}
function sharedStorageAccess(event) {
    _class_private_field_get(this, _accessEvents).push(event.data);
}
function sharedStorageChanged(storage, event) {
    var _class_private_field_get_get;
    if (!_class_private_field_get(this, _changeEvents).has(storage)) {
        _class_private_field_get(this, _changeEvents).set(storage, new Array());
    }
    (_class_private_field_get_get = _class_private_field_get(this, _changeEvents).get(storage)) === null || _class_private_field_get_get === void 0 ? void 0 : _class_private_field_get_get.push(event.data);
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('SharedStorageModel', function() {
    var sharedStorageModel;
    var target;
    var listener;
    var TEST_ORIGIN_A = 'http://a.test';
    var TEST_ORIGIN_B = 'http://b.test';
    var TEST_ORIGIN_C = 'http://c.test';
    var METADATA = {
        creationTime: 100,
        length: 3,
        remainingBudget: 2.5,
        bytesUsed: 30
    };
    var ENTRIES = [
        {
            key: 'key1',
            value: 'a'
        },
        {
            key: 'key2',
            value: 'b'
        },
        {
            key: 'key3',
            value: 'c'
        }
    ];
    var EVENTS = [
        {
            accessTime: 0,
            type: "documentAppend" /* Protocol.Storage.SharedStorageAccessType.DocumentAppend */ ,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: {
                key: 'key0',
                value: 'value0'
            }
        },
        {
            accessTime: 10,
            type: "workletGet" /* Protocol.Storage.SharedStorageAccessType.WorkletGet */ ,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: {
                key: 'key0'
            }
        },
        {
            accessTime: 15,
            type: "workletLength" /* Protocol.Storage.SharedStorageAccessType.WorkletLength */ ,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_B,
            params: {}
        },
        {
            accessTime: 20,
            type: "documentClear" /* Protocol.Storage.SharedStorageAccessType.DocumentClear */ ,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_B,
            params: {}
        },
        {
            accessTime: 100,
            type: "workletSet" /* Protocol.Storage.SharedStorageAccessType.WorkletSet */ ,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: {
                key: 'key0',
                value: 'value1',
                ignoreIfPresent: true
            }
        },
        {
            accessTime: 150,
            type: "workletRemainingBudget" /* Protocol.Storage.SharedStorageAccessType.WorkletRemainingBudget */ ,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: {}
        }
    ];
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                    return [
                        4,
                        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getInitializedResourceTreeModel)(target)
                    ];
                case 1:
                    _state.sent();
                    sharedStorageModel = target.model(_application_js__WEBPACK_IMPORTED_MODULE_4__.SharedStorageModel.SharedStorageModel);
                    listener = new SharedStorageListener(sharedStorageModel);
                    return [
                        2
                    ];
            }
        });
    }));
    it('invokes storageAgent via SharedStorageForOrigin', /*#__PURE__*/ _async_to_generator(function() {
        var getMetadataSpy, getEntriesSpy, setEntrySpy, deleteEntrySpy, clearSpy, sharedStorage, metadata, entries;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata').resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries').resolves({
                        entries: ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    setEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageEntry').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    deleteEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_deleteSharedStorageEntry').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    clearSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_clearSharedStorageEntries').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    sharedStorage = new _application_js__WEBPACK_IMPORTED_MODULE_4__.SharedStorageModel.SharedStorageForOrigin(sharedStorageModel, TEST_ORIGIN_A);
                    assert.strictEqual(sharedStorage.securityOrigin, TEST_ORIGIN_A);
                    return [
                        4,
                        sharedStorage.getMetadata()
                    ];
                case 1:
                    metadata = _state.sent();
                    assert.isTrue(getMetadataSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN_A
                    }));
                    assert.deepEqual(METADATA, metadata);
                    return [
                        4,
                        sharedStorage.getEntries()
                    ];
                case 2:
                    entries = _state.sent();
                    assert.isTrue(getEntriesSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN_A
                    }));
                    assert.deepEqual(ENTRIES, entries);
                    return [
                        4,
                        sharedStorage.setEntry('new-key1', 'new-value1', true)
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(setEntrySpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN_A,
                        key: 'new-key1',
                        value: 'new-value1',
                        ignoreIfPresent: true
                    }));
                    return [
                        4,
                        sharedStorage.deleteEntry('new-key1')
                    ];
                case 4:
                    _state.sent();
                    assert.isTrue(deleteEntrySpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN_A,
                        key: 'new-key1'
                    }));
                    return [
                        4,
                        sharedStorage.clear()
                    ];
                case 5:
                    _state.sent();
                    assert.isTrue(clearSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN_A
                    }));
                    return [
                        2
                    ];
            }
        });
    }));
    it('adds/removes SharedStorageForOrigin on SecurityOrigin events', /*#__PURE__*/ _async_to_generator(function() {
        var setTrackingSpy, manager, addedPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    setTrackingSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageTracking').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        sharedStorageModel.enable()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(setTrackingSpy.calledOnceWithExactly({
                        enable: true
                    }));
                    assert.isEmpty(sharedStorageModel.storages());
                    manager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.SecurityOriginManager);
                    assert.exists(manager);
                    addedPromise = listener.waitForStoragesAdded(1);
                    manager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.Events.SecurityOriginAdded, TEST_ORIGIN_A);
                    return [
                        4,
                        addedPromise
                    ];
                case 2:
                    _state.sent();
                    assert.exists(sharedStorageModel.storageForOrigin(TEST_ORIGIN_A));
                    manager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.Events.SecurityOriginRemoved, TEST_ORIGIN_A);
                    assert.isEmpty(sharedStorageModel.storages());
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not add SharedStorageForOrigin if origin invalid', /*#__PURE__*/ _async_to_generator(function() {
        var setTrackingSpy, manager;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    setTrackingSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageTracking').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        sharedStorageModel.enable()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(setTrackingSpy.calledOnceWithExactly({
                        enable: true
                    }));
                    assert.isEmpty(sharedStorageModel.storages());
                    manager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.SecurityOriginManager);
                    assert.exists(manager);
                    manager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.Events.SecurityOriginAdded, 'invalid');
                    assert.isEmpty(sharedStorageModel.storages());
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not add SharedStorageForOrigin if origin already added', /*#__PURE__*/ _async_to_generator(function() {
        var setTrackingSpy, addedPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    setTrackingSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageTracking').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        sharedStorageModel.enable()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(setTrackingSpy.calledOnceWithExactly({
                        enable: true
                    }));
                    assert.isEmpty(sharedStorageModel.storages());
                    addedPromise = listener.waitForStoragesAdded(1);
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target), {
                        url: TEST_ORIGIN_A
                    });
                    return [
                        4,
                        addedPromise
                    ];
                case 2:
                    _state.sent();
                    assert.exists(sharedStorageModel.storageForOrigin(TEST_ORIGIN_A));
                    assert.strictEqual(1, sharedStorageModel.numStoragesForTesting());
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target), {
                        url: TEST_ORIGIN_A
                    });
                    assert.strictEqual(1, sharedStorageModel.numStoragesForTesting());
                    return [
                        2
                    ];
            }
        });
    }));
    it('adds/removes SecurityOrigins when model is enabled/disabled', /*#__PURE__*/ _async_to_generator(function() {
        var setTrackingSpy, manager, originSet, addedPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    setTrackingSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageTracking').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    manager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.SecurityOriginManager);
                    assert.exists(manager);
                    originSet = new Set([
                        TEST_ORIGIN_A,
                        TEST_ORIGIN_B,
                        TEST_ORIGIN_C
                    ]);
                    manager.updateSecurityOrigins(originSet);
                    assert.strictEqual(3, manager.securityOrigins().length);
                    addedPromise = listener.waitForStoragesAdded(3);
                    return [
                        4,
                        sharedStorageModel.enable()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(setTrackingSpy.calledOnceWithExactly({
                        enable: true
                    }));
                    return [
                        4,
                        addedPromise
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(3, sharedStorageModel.numStoragesForTesting());
                    assert.exists(sharedStorageModel.storageForOrigin(TEST_ORIGIN_A));
                    assert.exists(sharedStorageModel.storageForOrigin(TEST_ORIGIN_B));
                    assert.exists(sharedStorageModel.storageForOrigin(TEST_ORIGIN_C));
                    sharedStorageModel.disable();
                    assert.isEmpty(sharedStorageModel.storages());
                    return [
                        2
                    ];
            }
        });
    }));
    it('dispatches SharedStorageAccess events to listeners', /*#__PURE__*/ _async_to_generator(function() {
        var setTrackingSpy, manager, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    setTrackingSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageTracking').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    manager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.SecurityOriginManager);
                    assert.exists(manager);
                    return [
                        4,
                        sharedStorageModel.enable()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(setTrackingSpy.calledOnceWithExactly({
                        enable: true
                    }));
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = EVENTS[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            sharedStorageModel.sharedStorageAccessed(event);
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
                    assert.deepEqual(EVENTS, listener.accessEvents);
                    return [
                        2
                    ];
            }
        });
    }));
    it('dispatches SharedStorageChanged events to listeners', /*#__PURE__*/ _async_to_generator(function() {
        var setTrackingSpy, manager, addedPromise, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, event1, storageA, storageB, storageC;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    setTrackingSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageTracking').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    manager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.SecurityOriginManager);
                    assert.exists(manager);
                    return [
                        4,
                        sharedStorageModel.enable()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(setTrackingSpy.calledOnceWithExactly({
                        enable: true
                    }));
                    // For change events whose origins aren't yet in the model, the origin is added
                    // to the model, with the `SharedStorageAdded` event being subsequently dispatched
                    // instead of the `SharedStorageChanged` event.
                    addedPromise = listener.waitForStoragesAdded(3);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = EVENTS[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            sharedStorageModel.sharedStorageAccessed(event);
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
                        addedPromise
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(4, sharedStorageModel.numStoragesForTesting());
                    assert.deepEqual(EVENTS, listener.accessEvents);
                    assert.isTrue(listener.changeEventsEmpty());
                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        // All events will be dispatched as `SharedStorageAccess` events, but only change
                        // events for existing origins will be forwarded as `SharedStorageChanged` events.
                        for(_iterator1 = EVENTS[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            event1 = _step1.value;
                            sharedStorageModel.sharedStorageAccessed(event1);
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
                    assert.deepEqual(EVENTS.concat(EVENTS), listener.accessEvents);
                    storageA = sharedStorageModel.storageForOrigin(TEST_ORIGIN_A);
                    assert.exists(storageA);
                    assert.deepEqual(listener.changeEventsForStorage(storageA), [
                        {
                            accessTime: 0,
                            type: "documentAppend" /* Protocol.Storage.SharedStorageAccessType.DocumentAppend */ ,
                            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
                            params: {
                                key: 'key0',
                                value: 'value0'
                            }
                        }
                    ]);
                    storageB = sharedStorageModel.storageForOrigin(TEST_ORIGIN_B);
                    assert.exists(storageB);
                    assert.deepEqual(listener.changeEventsForStorage(storageB), [
                        {
                            accessTime: 20,
                            type: "documentClear" /* Protocol.Storage.SharedStorageAccessType.DocumentClear */ ,
                            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
                            params: {}
                        }
                    ]);
                    storageC = sharedStorageModel.storageForOrigin(TEST_ORIGIN_C);
                    assert.exists(storageC);
                    assert.deepEqual(listener.changeEventsForStorage(storageC), [
                        {
                            accessTime: 100,
                            type: "workletSet" /* Protocol.Storage.SharedStorageAccessType.WorkletSet */ ,
                            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
                            params: {
                                key: 'key0',
                                value: 'value1',
                                ignoreIfPresent: true
                            }
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=SharedStorageModel.test.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./panels/application/application.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AppManifestView: function() { return /* reexport module object */ _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__; },
  ApplicationPanelSidebar: function() { return /* reexport module object */ _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__; },
  BackgroundServiceModel: function() { return /* reexport module object */ _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  BackgroundServiceView: function() { return /* reexport module object */ _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__; },
  BounceTrackingMitigationsTreeElement: function() { return /* reexport module object */ _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__; },
  CookieItemsView: function() { return /* reexport module object */ _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__; },
  DOMStorageItemsView: function() { return /* reexport module object */ _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__; },
  DOMStorageModel: function() { return /* reexport module object */ _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__; },
  IndexedDBModel: function() { return /* reexport module object */ _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__; },
  IndexedDBViews: function() { return /* reexport module object */ _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__; },
  InterestGroupStorageModel: function() { return /* reexport module object */ _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__; },
  InterestGroupStorageView: function() { return /* reexport module object */ _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__; },
  InterestGroupTreeElement: function() { return /* reexport module object */ _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__; },
  OpenedWindowDetailsView: function() { return /* reexport module object */ _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__; },
  PreloadingTreeElement: function() { return /* reexport module object */ _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__; },
  PreloadingView: function() { return /* reexport module object */ _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__; },
  ReportingApiReportsView: function() { return /* reexport module object */ _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__; },
  ReportingApiView: function() { return /* reexport module object */ _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__; },
  ResourcesPanel: function() { return /* reexport module object */ _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__; },
  ServiceWorkerCacheViews: function() { return /* reexport module object */ _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__; },
  ServiceWorkerUpdateCycleView: function() { return /* reexport module object */ _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__; },
  ServiceWorkersView: function() { return /* reexport module object */ _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__; },
  SharedStorageEventsView: function() { return /* reexport module object */ _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__; },
  SharedStorageItemsView: function() { return /* reexport module object */ _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__; },
  SharedStorageListTreeElement: function() { return /* reexport module object */ _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__; },
  SharedStorageModel: function() { return /* reexport module object */ _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__; },
  SharedStorageTreeElement: function() { return /* reexport module object */ _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__; },
  StorageBucketsTreeElement: function() { return /* reexport module object */ _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__; },
  StorageItemsView: function() { return /* reexport module object */ _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__; },
  StorageView: function() { return /* reexport module object */ _StorageView_js__WEBPACK_IMPORTED_MODULE_29__; },
  TrustTokensTreeElement: function() { return /* reexport module object */ _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__; }
});
/* harmony import */var _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationPanelSidebar.js */ "./panels/application/ApplicationPanelSidebar.js");
/* harmony import */var _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppManifestView.js */ "./panels/application/AppManifestView.js");
/* harmony import */var _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackgroundServiceModel.js */ "./panels/application/BackgroundServiceModel.js");
/* harmony import */var _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackgroundServiceView.js */ "./panels/application/BackgroundServiceView.js");
/* harmony import */var _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BounceTrackingMitigationsTreeElement.js */ "./panels/application/BounceTrackingMitigationsTreeElement.js");
/* harmony import */var _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CookieItemsView.js */ "./panels/application/CookieItemsView.js");
/* harmony import */var _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOMStorageItemsView.js */ "./panels/application/DOMStorageItemsView.js");
/* harmony import */var _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DOMStorageModel.js */ "./panels/application/DOMStorageModel.js");
/* harmony import */var _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IndexedDBModel.js */ "./panels/application/IndexedDBModel.js");
/* harmony import */var _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IndexedDBViews.js */ "./panels/application/IndexedDBViews.js");
/* harmony import */var _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InterestGroupStorageModel.js */ "./panels/application/InterestGroupStorageModel.js");
/* harmony import */var _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InterestGroupStorageView.js */ "./panels/application/InterestGroupStorageView.js");
/* harmony import */var _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InterestGroupTreeElement.js */ "./panels/application/InterestGroupTreeElement.js");
/* harmony import */var _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OpenedWindowDetailsView.js */ "./panels/application/OpenedWindowDetailsView.js");
/* harmony import */var _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./preloading/PreloadingView.js */ "./panels/application/preloading/PreloadingView.js");
/* harmony import */var _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PreloadingTreeElement.js */ "./panels/application/PreloadingTreeElement.js");
/* harmony import */var _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ReportingApiReportsView.js */ "./panels/application/ReportingApiReportsView.js");
/* harmony import */var _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ReportingApiView.js */ "./panels/application/ReportingApiView.js");
/* harmony import */var _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ResourcesPanel.js */ "./panels/application/ResourcesPanel.js");
/* harmony import */var _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ServiceWorkerCacheViews.js */ "./panels/application/ServiceWorkerCacheViews.js");
/* harmony import */var _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ServiceWorkersView.js */ "./panels/application/ServiceWorkersView.js");
/* harmony import */var _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ServiceWorkerUpdateCycleView.js */ "./panels/application/ServiceWorkerUpdateCycleView.js");
/* harmony import */var _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SharedStorageEventsView.js */ "./panels/application/SharedStorageEventsView.js");
/* harmony import */var _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SharedStorageItemsView.js */ "./panels/application/SharedStorageItemsView.js");
/* harmony import */var _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SharedStorageListTreeElement.js */ "./panels/application/SharedStorageListTreeElement.js");
/* harmony import */var _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SharedStorageModel.js */ "./panels/application/SharedStorageModel.js");
/* harmony import */var _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./SharedStorageTreeElement.js */ "./panels/application/SharedStorageTreeElement.js");
/* harmony import */var _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./StorageBucketsTreeElement.js */ "./panels/application/StorageBucketsTreeElement.js");
/* harmony import */var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./StorageItemsView.js */ "./panels/application/StorageItemsView.js");
/* harmony import */var _StorageView_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./StorageView.js */ "./panels/application/StorageView.js");
/* harmony import */var _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./TrustTokensTreeElement.js */ "./panels/application/TrustTokensTreeElement.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__]);
([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.































 //# sourceMappingURL=application.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),

}]);