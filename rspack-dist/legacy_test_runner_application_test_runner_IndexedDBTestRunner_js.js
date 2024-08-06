"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_application_test_runner_IndexedDBTestRunner_js"], {
"./legacy_test_runner/application_test_runner/IndexedDBTestRunner.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addIDBValue: function() { return addIDBValue; },
  addIDBValueAsync: function() { return addIDBValueAsync; },
  createDatabase: function() { return createDatabase; },
  createDatabaseAsync: function() { return createDatabaseAsync; },
  createDatabaseWithVersion: function() { return createDatabaseWithVersion; },
  createIndexedDBModel: function() { return createIndexedDBModel; },
  createObjectStore: function() { return createObjectStore; },
  createObjectStoreAsync: function() { return createObjectStoreAsync; },
  createObjectStoreIndex: function() { return createObjectStoreIndex; },
  createObjectStoreIndexAsync: function() { return createObjectStoreIndexAsync; },
  deleteDatabase: function() { return deleteDatabase; },
  deleteDatabaseAsync: function() { return deleteDatabaseAsync; },
  deleteIDBValueAsync: function() { return deleteIDBValueAsync; },
  deleteObjectStore: function() { return deleteObjectStore; },
  deleteObjectStoreAsync: function() { return deleteObjectStoreAsync; },
  deleteObjectStoreIndex: function() { return deleteObjectStoreIndex; },
  deleteObjectStoreIndexAsync: function() { return deleteObjectStoreIndexAsync; },
  dumpIndexedDBTree: function() { return dumpIndexedDBTree; },
  dumpObjectStores: function() { return dumpObjectStores; },
  evaluateWithCallback: function() { return evaluateWithCallback; },
  installIndexedDBSniffer: function() { return installIndexedDBSniffer; },
  setupIndexedDBHelpers: function() { return setupIndexedDBHelpers; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/application/application.js */ "./panels/application/application.js");
/* harmony import */var _console_test_runner_console_test_runner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../console_test_runner/console_test_runner.js */ "./legacy_test_runner/console_test_runner/console_test_runner.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__]);
_panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2017 The Chromium Authors. All rights reserved.
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



/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var dumpIndexedDBTree = function() {
    var _ref = _async_to_generator(function() {
        var indexedDBTreeElement, i, databaseTreeElement, j, objectStoreTreeElement, k, indexTreeElement;
        return _ts_generator(this, function(_state) {
            TestRunner.addResult('Dumping IndexedDB tree:');
            indexedDBTreeElement = _panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__.ResourcesPanel.ResourcesPanel.instance().sidebar.indexedDBListTreeElement;
            if (!indexedDBTreeElement.childCount()) {
                TestRunner.addResult('    (empty)');
                return [
                    2
                ];
            }
            for(i = 0; i < indexedDBTreeElement.childCount(); ++i){
                databaseTreeElement = indexedDBTreeElement.childAt(i);
                TestRunner.addResult('    database: ' + databaseTreeElement.title);
                if (!databaseTreeElement.childCount()) {
                    TestRunner.addResult('        (no object stores)');
                    continue;
                }
                for(j = 0; j < databaseTreeElement.childCount(); ++j){
                    objectStoreTreeElement = databaseTreeElement.childAt(j);
                    TestRunner.addResult('        Object store: ' + objectStoreTreeElement.title);
                    if (!objectStoreTreeElement.childCount()) {
                        TestRunner.addResult('            (no indexes)');
                        continue;
                    }
                    for(k = 0; k < objectStoreTreeElement.childCount(); ++k){
                        indexTreeElement = objectStoreTreeElement.childAt(k);
                        TestRunner.addResult('            Index: ' + indexTreeElement.title);
                    }
                }
            }
            return [
                2
            ];
        });
    });
    return function dumpIndexedDBTree() {
        return _ref.apply(this, arguments);
    };
}();
var dumpObjectStores = function() {
    var _ref = _async_to_generator(function() {
        var idbDatabaseTreeElement, i, objectStoreTreeElement, entries, j, k, indexTreeElement, entries1, j1;
        return _ts_generator(this, function(_state) {
            TestRunner.addResult('Dumping ObjectStore data:');
            idbDatabaseTreeElement = _panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__.ResourcesPanel.ResourcesPanel.instance().sidebar.indexedDBListTreeElement.idbDatabaseTreeElements[0];
            for(i = 0; i < idbDatabaseTreeElement.childCount(); ++i){
                objectStoreTreeElement = idbDatabaseTreeElement.childAt(i);
                objectStoreTreeElement.onselect(false);
                TestRunner.addResult('    Object store: ' + objectStoreTreeElement.title);
                entries = objectStoreTreeElement.view.entries;
                TestRunner.addResult('            Number of entries: ' + entries.length);
                for(j = 0; j < entries.length; ++j){
                    TestRunner.addResult('            Key = ' + entries[j].key.value + ', value = ' + entries[j].value);
                }
                for(k = 0; k < objectStoreTreeElement.childCount(); ++k){
                    indexTreeElement = objectStoreTreeElement.childAt(k);
                    TestRunner.addResult('            Index: ' + indexTreeElement.title);
                    indexTreeElement.onselect(false);
                    entries1 = indexTreeElement.view.entries;
                    TestRunner.addResult('                Number of entries: ' + entries1.length);
                    for(j1 = 0; j1 < entries1.length; ++j1){
                        TestRunner.addResult('                Key = ' + entries1[j1].primaryKey.value + ', value = ' + entries1[j1].value);
                    }
                }
            }
            return [
                2
            ];
        });
    });
    return function dumpObjectStores() {
        return _ref.apply(this, arguments);
    };
}();
var lastCallbackId = 0;
var callbacks = {};
var callbackIdPrefix = 'InspectorTest.IndexedDB_callback';
var evaluateWithCallback = function evaluateWithCallback(frameId, methodName, parameters, callback) {
    installIndexedDBSniffer();
    var callbackId = ++lastCallbackId;
    callbacks[callbackId] = callback;
    var parametersString = 'dispatchCallback.bind(this, "' + callbackIdPrefix + callbackId + '")';
    for(var i = 0; i < parameters.length; ++i){
        parametersString += ', ' + JSON.stringify(parameters[i]);
    }
    var requestString = methodName + '(' + parametersString + ')';
    TestRunner.evaluateInPageAnonymously(requestString);
};
var installIndexedDBSniffer = function installIndexedDBSniffer() {
    _console_test_runner_console_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleTestRunner.addConsoleSniffer(consoleMessageOverride, false);
    function consoleMessageOverride(msg) {
        var text = msg.messageText;
        if (!text.startsWith(callbackIdPrefix)) {
            _console_test_runner_console_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleTestRunner.addConsoleSniffer(consoleMessageOverride, false);
            return;
        }
        var callbackId = text.substring(callbackIdPrefix.length);
        callbacks[callbackId].call();
        delete callbacks[callbackId];
    }
};
var createDatabase = function createDatabase(frameId, databaseName, callback) {
    evaluateWithCallback(frameId, 'createDatabase', [
        databaseName
    ], callback);
};
var createDatabaseWithVersion = function createDatabaseWithVersion(frameId, databaseName, version, callback) {
    evaluateWithCallback(frameId, 'createDatabaseWithVersion', [
        databaseName,
        version
    ], callback);
};
var deleteDatabase = function deleteDatabase(frameId, databaseName, callback) {
    evaluateWithCallback(frameId, 'deleteDatabase', [
        databaseName
    ], callback);
};
var createObjectStore = function createObjectStore(frameId, databaseName, objectStoreName, keyPath, autoIncrement, callback) {
    evaluateWithCallback(frameId, 'createObjectStore', [
        databaseName,
        objectStoreName,
        keyPath,
        autoIncrement
    ], callback);
};
var deleteObjectStore = function deleteObjectStore(frameId, databaseName, objectStoreName, callback) {
    evaluateWithCallback(frameId, 'deleteObjectStore', [
        databaseName,
        objectStoreName
    ], callback);
};
var createObjectStoreIndex = function createObjectStoreIndex(frameId, databaseName, objectStoreName, objectStoreIndexName, keyPath, unique, multiEntry, callback) {
    evaluateWithCallback(frameId, 'createObjectStoreIndex', [
        databaseName,
        objectStoreName,
        objectStoreIndexName,
        keyPath,
        unique,
        multiEntry
    ], callback);
};
var deleteObjectStoreIndex = function deleteObjectStoreIndex(frameId, databaseName, objectStoreName, objectStoreIndexName, callback) {
    evaluateWithCallback(frameId, 'deleteObjectStoreIndex', [
        databaseName,
        objectStoreName,
        objectStoreIndexName
    ], callback);
};
var addIDBValue = function addIDBValue(frameId, databaseName, objectStoreName, value, key, callback) {
    evaluateWithCallback(frameId, 'addIDBValue', [
        databaseName,
        objectStoreName,
        value,
        key
    ], callback);
};
var createIndexedDBModel = function createIndexedDBModel() {
    var target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().primaryPageTarget();
    var storageBucketModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.StorageBucketsModel.StorageBucketsModel);
    storageBucketModel.enable();
    var indexedDBModel = target.model(_panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__.IndexedDBModel.IndexedDBModel);
    indexedDBModel.enable();
    return indexedDBModel;
};
var createDatabaseAsync = function createDatabaseAsync(databaseName) {
    return TestRunner.evaluateInPageAsync('createDatabaseAsync(\'' + databaseName + '\')');
};
var deleteDatabaseAsync = function deleteDatabaseAsync(databaseName) {
    return TestRunner.evaluateInPageAsync('deleteDatabaseAsync(\'' + databaseName + '\')');
};
var createObjectStoreAsync = function createObjectStoreAsync(databaseName, objectStoreName, indexName) {
    return TestRunner.evaluateInPageAsync('createObjectStoreAsync(\'' + databaseName + '\', \'' + objectStoreName + '\', \'' + indexName + '\')');
};
var deleteObjectStoreAsync = function deleteObjectStoreAsync(databaseName, objectStoreName) {
    return TestRunner.evaluateInPageAsync('deleteObjectStoreAsync(\'' + databaseName + '\', \'' + objectStoreName + '\')');
};
var createObjectStoreIndexAsync = function createObjectStoreIndexAsync(databaseName, objectStoreName, indexName) {
    return TestRunner.evaluateInPageAsync('createObjectStoreIndexAsync(\'' + databaseName + '\', \'' + objectStoreName + '\', \'' + indexName + '\')');
};
var deleteObjectStoreIndexAsync = function deleteObjectStoreIndexAsync(databaseName, objectStoreName, indexName) {
    return TestRunner.evaluateInPageAsync('deleteObjectStoreIndexAsync(\'' + databaseName + '\', \'' + objectStoreName + '\', \'' + indexName + '\')');
};
var addIDBValueAsync = function addIDBValueAsync(databaseName, objectStoreName, key, value) {
    return TestRunner.evaluateInPageAsync('addIDBValueAsync(\'' + databaseName + '\', \'' + objectStoreName + '\', \'' + key + '\', \'' + value + '\')');
};
var deleteIDBValueAsync = function deleteIDBValueAsync(databaseName, objectStoreName, key) {
    return TestRunner.evaluateInPageAsync('deleteIDBValueAsync(\'' + databaseName + '\', \'' + objectStoreName + '\', \'' + key + '\')');
};
var __indexedDBHelpers = "\n  function dispatchCallback(callbackId) {\n    console.log(callbackId);\n  }\n\n  function onIndexedDBError(e) {\n    console.error('IndexedDB error: ' + e);\n  }\n\n  function onIndexedDBBlocked(e) {\n    console.error('IndexedDB blocked: ' + e);\n  }\n\n  function doWithDatabase(databaseName, callback) {\n    function innerCallback() {\n      let db = request.result;\n      callback(db);\n    }\n\n    let request = indexedDB.open(databaseName);\n    request.onblocked = onIndexedDBBlocked;\n    request.onerror = onIndexedDBError;\n    request.onsuccess = innerCallback;\n  }\n\n  function doWithVersionTransaction(databaseName, callback, commitCallback) {\n    doWithDatabase(databaseName, step2);\n\n    function step2(db) {\n      let version = db.version;\n      db.close();\n      request = indexedDB.open(databaseName, version + 1);\n      request.onerror = onIndexedDBError;\n      request.onupgradeneeded = onUpgradeNeeded;\n      request.onsuccess = onOpened;\n\n      function onUpgradeNeeded(e) {\n        let db = e.target.result;\n        let trans = e.target.transaction;\n        callback(db, trans);\n      }\n\n      function onOpened(e) {\n        let db = e.target.result;\n        db.close();\n        commitCallback();\n      }\n    }\n  }\n\n  function doWithReadWriteTransaction(databaseName, objectStoreName, callback, commitCallback) {\n    doWithDatabase(databaseName, step2);\n\n    function step2(db) {\n      let transaction = db.transaction([objectStoreName], 'readwrite');\n      let objectStore = transaction.objectStore(objectStoreName);\n      callback(objectStore, innerCommitCallback);\n\n      function innerCommitCallback() {\n        db.close();\n        commitCallback();\n      }\n    }\n  }\n\n  function createDatabase(callback, databaseName) {\n    let request = indexedDB.open(databaseName);\n    request.onerror = onIndexedDBError;\n    request.onsuccess = closeDatabase;\n\n    function closeDatabase() {\n      request.result.close();\n      callback();\n    }\n  }\n\n  function createDatabaseWithVersion(callback, databaseName, version) {\n    let request = indexedDB.open(databaseName, version);\n    request.onerror = onIndexedDBError;\n    request.onsuccess = closeDatabase;\n\n    function closeDatabase() {\n      request.result.close();\n      callback();\n    }\n  }\n\n  function deleteDatabase(callback, databaseName) {\n    let request = indexedDB.deleteDatabase(databaseName);\n    request.onerror = onIndexedDBError;\n    request.onsuccess = callback;\n  }\n\n  function createObjectStore(callback, databaseName, objectStoreName, keyPath, autoIncrement) {\n    doWithVersionTransaction(databaseName, withTransactionCallback, callback);\n\n    function withTransactionCallback(db, transaction) {\n      let store = db.createObjectStore(objectStoreName, {\n        keyPath: keyPath,\n        autoIncrement: autoIncrement\n      });\n    }\n  }\n\n  function deleteObjectStore(callback, databaseName, objectStoreName) {\n    doWithVersionTransaction(databaseName, withTransactionCallback, callback);\n\n    function withTransactionCallback(db, transaction) {\n      let store = db.deleteObjectStore(objectStoreName);\n    }\n  }\n\n  function createObjectStoreIndex(callback, databaseName, objectStoreName, objectStoreIndexName, keyPath, unique, multiEntry) {\n    doWithVersionTransaction(databaseName, withTransactionCallback, callback);\n\n    function withTransactionCallback(db, transaction) {\n      let objectStore = transaction.objectStore(objectStoreName);\n\n      objectStore.createIndex(objectStoreIndexName, keyPath, {\n        unique: unique,\n        multiEntry: multiEntry\n      });\n    }\n  }\n\n  function deleteObjectStoreIndex(callback, databaseName, objectStoreName, objectStoreIndexName) {\n    doWithVersionTransaction(databaseName, withTransactionCallback, callback);\n\n    function withTransactionCallback(db, transaction) {\n      let objectStore = transaction.objectStore(objectStoreName);\n      objectStore.deleteIndex(objectStoreIndexName);\n    }\n  }\n\n  function addIDBValue(callback, databaseName, objectStoreName, value, key) {\n    doWithReadWriteTransaction(databaseName, objectStoreName, withTransactionCallback, callback);\n\n    function withTransactionCallback(objectStore, commitCallback) {\n      let request;\n\n      if (key)\n        request = objectStore.add(value, key);\n      else\n        request = objectStore.add(value);\n\n      request.onerror = onIndexedDBError;\n      request.onsuccess = commitCallback;\n    }\n  }\n\n  function createDatabaseAsync(databaseName) {\n    return new Promise((resolve) => {\n      createDatabase(resolve, databaseName);\n    });\n  }\n\n  function upgradeRequestAsync(databaseName, onUpgradeNeeded, callback) {\n    let request = indexedDB.open(databaseName);\n    request.onerror = onIndexedDBError;\n    request.onsuccess = function(event) {\n      let db = request.result;\n      let version = db.version;\n      db.close();\n\n      let upgradeRequest = indexedDB.open(databaseName, version + 1);\n      upgradeRequest.onerror = onIndexedDBError;\n      upgradeRequest.onupgradeneeded = function(e) {\n        onUpgradeNeeded(e.target.result, e.target.transaction, callback);\n      }\n      upgradeRequest.onsuccess = function(e) {\n        let upgradeDb = e.target.result;\n        upgradeDb.close();\n        callback();\n      }\n    }\n  }\n\n  function deleteDatabaseAsync(databaseName) {\n    let callback;\n    let promise = new Promise((fulfill) => callback = fulfill);\n    let request = indexedDB.deleteDatabase(databaseName);\n    request.onerror = onIndexedDBError;\n    request.onsuccess = callback;\n    return promise;\n  }\n\n  function createObjectStoreAsync(databaseName, objectStoreName, indexName) {\n    let callback;\n    let promise = new Promise((fulfill) => callback = fulfill);\n    let onUpgradeNeeded = function(upgradeDb, transaction, callback) {\n      let store = upgradeDb.createObjectStore(objectStoreName, { keyPath: \"test\", autoIncrement: false });\n      store.createIndex(indexName, \"test\", { unique: false, multiEntry: false });\n      callback();\n    }\n    upgradeRequestAsync(databaseName, onUpgradeNeeded, callback)\n    return promise;\n  }\n\n  function deleteObjectStoreAsync(databaseName, objectStoreName) {\n    let callback;\n    let promise = new Promise((fulfill) => callback = fulfill);\n    let onUpgradeNeeded = function(upgradeDb, transaction, callback) {\n      upgradeDb.deleteObjectStore(objectStoreName);\n      callback();\n    }\n    upgradeRequestAsync(databaseName, onUpgradeNeeded, callback)\n    return promise;\n  }\n\n  function createObjectStoreIndexAsync(databaseName, objectStoreName, indexName) {\n    let callback;\n    let promise = new Promise((fulfill) => callback = fulfill);\n    let onUpgradeNeeded = function(upgradeDb, transaction, callback) {\n      let store = transaction.objectStore(objectStoreName);\n      store.createIndex(indexName, \"test\", { unique: false, multiEntry: false });\n      callback();\n    }\n    upgradeRequestAsync(databaseName, onUpgradeNeeded, callback)\n    return promise;\n  }\n\n  function deleteObjectStoreIndexAsync(databaseName, objectStoreName, indexName) {\n    let callback;\n    let promise = new Promise((fulfill) => callback = fulfill);\n    let onUpgradeNeeded = function(upgradeDb, transaction, callback) {\n      let store = transaction.objectStore(objectStoreName);\n      store.deleteIndex(indexName);\n      callback();\n    }\n    upgradeRequestAsync(databaseName, onUpgradeNeeded, callback)\n    return promise;\n  }\n\n  function addIDBValueAsync(databaseName, objectStoreName, key, value) {\n    let callback;\n    let promise = new Promise(fulfill => callback = fulfill);\n    let request = indexedDB.open(databaseName);\n    request.onerror = onIndexedDBError;\n\n    request.onsuccess = function(event) {\n      let db = request.result;\n      let transaction = db.transaction(objectStoreName, 'readwrite');\n      let store = transaction.objectStore(objectStoreName);\n\n      store.put({\n        test: key,\n        testValue: value\n      });\n\n      transaction.onerror = onIndexedDBError;\n\n      transaction.oncomplete = function() {\n        db.close();\n        callback();\n      };\n    };\n\n    return promise;\n  }\n\n  function deleteIDBValueAsync(databaseName, objectStoreName, key) {\n    let callback;\n    let promise = new Promise((fulfill) => callback = fulfill);\n    let request = indexedDB.open(databaseName);\n    request.onerror = onIndexedDBError;\n    request.onsuccess = function(event) {\n      let db = request.result;\n      let transaction = db.transaction(objectStoreName, \"readwrite\");\n      let store = transaction.objectStore(objectStoreName);\n      store.delete(key);\n\n      transaction.onerror = onIndexedDBError;\n      transaction.oncomplete = function() {\n        db.close();\n        callback();\n      };\n    }\n    return promise;\n  }\n";
var setupIndexedDBHelpers = function setupIndexedDBHelpers() {
    return TestRunner.evaluateInPagePromise(__indexedDBHelpers);
};
TestRunner.deprecatedInitAsync(__indexedDBHelpers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),

}]);