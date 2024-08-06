"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_IndexedDBModel_test_js"], {
"./panels/application/IndexedDBModel.test.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _application_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_3__]);
_application_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2022 The Chromium Authors. All rights reserved.
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




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('IndexedDBModel', function() {
    var indexedDBModel;
    var target;
    var indexedDBAgent;
    var manager;
    var testKey = 'test-storage-key/';
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
    var testDBId = new _application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.DatabaseId(testStorageBucket, 'test-database');
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
            indexedDBModel = new _application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.IndexedDBModel(target);
            indexedDBAgent = target.indexedDBAgent();
            manager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.StorageBucketsModel.StorageBucketsModel);
            return [
                2
            ];
        });
    }));
    describe('StorageKeyAdded', function() {
        it('registers database only when the model is enabled', /*#__PURE__*/ _async_to_generator(function() {
            var databaseAdeddSpy, dbNamePromise, _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        databaseAdeddSpy = sinon.spy(indexedDBModel, 'dispatchEventToListeners');
                        dbNamePromise = new Promise(function(resolve) {
                            indexedDBModel.addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.Events.DatabaseAdded, function(event) {
                                resolve(event.data.databaseId.name);
                            });
                        });
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', function() {
                            return {
                                databaseNames: [
                                    'test-database'
                                ]
                            };
                        });
                        manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
                            bucketInfo: testStorageBucketInfo
                        });
                        assert.isFalse(databaseAdeddSpy.calledWithExactly(_application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.Events.DatabaseAdded, {
                            model: indexedDBModel,
                            databaseId: testDBId
                        }));
                        indexedDBModel.enable();
                        manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
                            bucketInfo: testStorageBucketInfo
                        });
                        _ = assert.strictEqual;
                        return [
                            4,
                            dbNamePromise
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            'test-database'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('starts tracking database', function() {
            var trackIndexedDBSpy = sinon.spy(target.storageAgent(), 'invoke_trackIndexedDBForStorageKey');
            indexedDBModel.enable();
            manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
                bucketInfo: testStorageBucketInfo
            });
            assert.isTrue(trackIndexedDBSpy.calledOnceWithExactly({
                storageKey: testKey
            }));
        });
    });
    describe('StorageKeyRemoved', function() {
        it('stops tracking database', function() {
            var untrackIndexedDBSpy = sinon.spy(target.storageAgent(), 'invoke_untrackIndexedDBForStorageKey');
            indexedDBModel.enable();
            manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
                bucketInfo: testStorageBucketInfo
            });
            manager === null || manager === void 0 ? void 0 : manager.storageBucketDeleted({
                bucketId: testStorageBucketInfo.id
            });
            assert.isTrue(untrackIndexedDBSpy.calledOnceWithExactly({
                storageKey: testKey
            }));
        });
    });
    it('calls protocol method on clearObjectStore', function() {
        var clearObjectStoreSpy = sinon.spy(indexedDBAgent, 'invoke_clearObjectStore');
        indexedDBModel.enable();
        void indexedDBModel.clearObjectStore(testDBId, 'test-store');
        assert.isTrue(clearObjectStoreSpy.calledOnceWithExactly({
            storageBucket: testStorageBucket,
            databaseName: 'test-database',
            objectStoreName: 'test-store'
        }));
    });
    it('calls protocol method on deleteEntries', function() {
        var testKeyRange = {
            lower: undefined,
            lowerOpen: false,
            upper: undefined,
            upperOpen: true
        };
        var deleteEntriesSpy = sinon.spy(indexedDBAgent, 'invoke_deleteObjectStoreEntries');
        indexedDBModel.enable();
        void indexedDBModel.deleteEntries(testDBId, 'test-store', testKeyRange);
        assert.isTrue(deleteEntriesSpy.calledOnceWithExactly({
            storageBucket: testStorageBucket,
            databaseName: 'test-database',
            objectStoreName: 'test-store',
            keyRange: testKeyRange
        }));
    });
    it('calls protocol method on refreshDatabaseNames and dispatches event', /*#__PURE__*/ _async_to_generator(function() {
        var requestDBNamesSpy, dbRefreshedPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    requestDBNamesSpy = sinon.spy(indexedDBAgent, 'invoke_requestDatabaseNames');
                    dbRefreshedPromise = new Promise(function(resolve) {
                        indexedDBModel.addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.Events.DatabaseNamesRefreshed, function() {
                            resolve();
                        });
                    });
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', function() {
                        return {
                            databaseNames: [
                                'test-database'
                            ]
                        };
                    });
                    indexedDBModel.enable();
                    manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
                        bucketInfo: testStorageBucketInfo
                    });
                    void indexedDBModel.refreshDatabaseNames();
                    assert.isTrue(requestDBNamesSpy.calledWithExactly({
                        storageBucket: testStorageBucket
                    }));
                    return [
                        4,
                        dbRefreshedPromise
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('requests database with storage key on refreshDatabase', /*#__PURE__*/ _async_to_generator(function() {
        var requestDatabaseSpy;
        return _ts_generator(this, function(_state) {
            requestDatabaseSpy = sinon.spy(indexedDBAgent, 'invoke_requestDatabase');
            indexedDBModel.enable();
            void indexedDBModel.refreshDatabase(testDBId);
            assert.isTrue(requestDatabaseSpy.calledOnceWithExactly({
                storageBucket: testStorageBucket,
                databaseName: 'test-database'
            }));
            return [
                2
            ];
        });
    }));
    it('requests data with storage key on loadObjectStoreData', function() {
        var requestDataSpy = sinon.spy(indexedDBAgent, 'invoke_requestData');
        indexedDBModel.enable();
        indexedDBModel.loadObjectStoreData(testDBId, 'test-store', null, 0, 50, function() {});
        assert.isTrue(requestDataSpy.calledOnceWithExactly({
            storageBucket: testStorageBucket,
            databaseName: 'test-database',
            objectStoreName: 'test-store',
            indexName: '',
            skipCount: 0,
            pageSize: 50,
            keyRange: undefined
        }));
    });
    it('calls protocol method on getMetadata', /*#__PURE__*/ _async_to_generator(function() {
        var getMetadataSpy;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    getMetadataSpy = sinon.stub(indexedDBAgent, 'invoke_getMetadata').resolves({
                        entriesCount: 0,
                        keyGeneratorValue: 0,
                        getError: function() {
                            return undefined;
                        }
                    });
                    indexedDBModel.enable();
                    return [
                        4,
                        indexedDBModel.getMetadata(testDBId, new _application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.ObjectStore('test-store', null, false))
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledOnceWithExactly({
                        storageBucket: testStorageBucket,
                        databaseName: 'test-database',
                        objectStoreName: 'test-store'
                    }));
                    return [
                        2
                    ];
            }
        });
    }));
    it('dispatches event on indexedDBContentUpdated', function() {
        var dispatcherSpy = sinon.spy(indexedDBModel, 'dispatchEventToListeners');
        manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
            bucketInfo: testStorageBucketInfo
        });
        indexedDBModel.indexedDBContentUpdated({
            origin: '',
            storageKey: testKey,
            bucketId: '0',
            databaseName: 'test-database',
            objectStoreName: 'test-store'
        });
        assert.isTrue(dispatcherSpy.calledOnceWithExactly(_application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.Events.IndexedDBContentUpdated, {
            databaseId: testDBId,
            objectStoreName: 'test-store',
            model: indexedDBModel
        }));
    });
    it('requests database names and loads db on indexedDBListUpdated', /*#__PURE__*/ _async_to_generator(function() {
        var requestDBNamesSpy, databaseLoadedPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    requestDBNamesSpy = sinon.spy(indexedDBAgent, 'invoke_requestDatabaseNames');
                    databaseLoadedPromise = new Promise(function(resolve) {
                        indexedDBModel.addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.Events.DatabaseLoaded, function() {
                            resolve();
                        });
                    });
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', function() {
                        return {
                            databaseNames: [
                                'test-database'
                            ]
                        };
                    });
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('IndexedDB.requestDatabase', function() {
                        return {
                            databaseWithObjectStores: {
                                name: 'test-database',
                                version: '1',
                                objectStores: []
                            }
                        };
                    });
                    indexedDBModel.enable();
                    manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
                        bucketInfo: testStorageBucketInfo
                    });
                    indexedDBModel.indexedDBListUpdated({
                        origin: '',
                        storageKey: testKey,
                        bucketId: '0'
                    });
                    assert.isTrue(requestDBNamesSpy.calledWithExactly({
                        storageBucket: testStorageBucket
                    }));
                    return [
                        4,
                        databaseLoadedPromise
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('gets databases added for storage key', /*#__PURE__*/ _async_to_generator(function() {
        var dbNames, databases;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dbNames = [
                        'test-database1',
                        'test-database2'
                    ];
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', function() {
                        return {
                            databaseNames: dbNames
                        };
                    });
                    indexedDBModel.enable();
                    manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
                        bucketInfo: testStorageBucketInfo
                    });
                    return [
                        4,
                        indexedDBModel.refreshDatabaseNames()
                    ];
                case 1:
                    _state.sent();
                    databases = indexedDBModel.databases();
                    assert.deepEqual(databases.map(function(db) {
                        return db.name;
                    }), dbNames);
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls protocol method on deleteDatabase', function() {
        var deleteDBSpy = sinon.spy(indexedDBAgent, 'invoke_deleteDatabase');
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', function() {
            return {
                databaseNames: [
                    'test-database'
                ]
            };
        });
        indexedDBModel.enable();
        manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
            bucketInfo: testStorageBucketInfo
        });
        void indexedDBModel.deleteDatabase(testDBId);
        assert.isTrue(deleteDBSpy.calledOnceWithExactly({
            storageBucket: testStorageBucket,
            databaseName: 'test-database'
        }));
    });
    it('removes databases for storage key on clearForStorageKey', /*#__PURE__*/ _async_to_generator(function() {
        var dbNames;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dbNames = [
                        'test-database1',
                        'test-database-2'
                    ];
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', function() {
                        return {
                            databaseNames: dbNames
                        };
                    });
                    indexedDBModel.enable();
                    manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
                        bucketInfo: testStorageBucketInfo
                    });
                    return [
                        4,
                        indexedDBModel.refreshDatabaseNames()
                    ];
                case 1:
                    _state.sent();
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.clearMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames');
                    indexedDBModel.clearForStorageKey(testKey);
                    assert.isEmpty(indexedDBModel.databases());
                    return [
                        2
                    ];
            }
        });
    }));
    it('dispatches event with storage key on indexedDBContentUpdated when both storage key and origin are set', function() {
        var dispatcherSpy = sinon.spy(indexedDBModel, 'dispatchEventToListeners');
        manager === null || manager === void 0 ? void 0 : manager.storageBucketCreatedOrUpdated({
            bucketInfo: testStorageBucketInfo
        });
        indexedDBModel.indexedDBContentUpdated({
            origin: 'test-origin',
            storageKey: testKey,
            bucketId: '0',
            databaseName: 'test-database',
            objectStoreName: 'test-store'
        });
        assert.isTrue(dispatcherSpy.calledOnceWithExactly(_application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.Events.IndexedDBContentUpdated, {
            databaseId: testDBId,
            objectStoreName: 'test-store',
            model: indexedDBModel
        }));
    });
}); //# sourceMappingURL=IndexedDBModel.test.js.map

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