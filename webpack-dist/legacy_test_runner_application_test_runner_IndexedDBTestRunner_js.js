"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["legacy_test_runner_application_test_runner_IndexedDBTestRunner_js"],{

/***/ "./legacy_test_runner/application_test_runner/IndexedDBTestRunner.js":
/*!***************************************************************************!*\
  !*** ./legacy_test_runner/application_test_runner/IndexedDBTestRunner.js ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addIDBValue: () => (/* binding */ addIDBValue),
/* harmony export */   addIDBValueAsync: () => (/* binding */ addIDBValueAsync),
/* harmony export */   createDatabase: () => (/* binding */ createDatabase),
/* harmony export */   createDatabaseAsync: () => (/* binding */ createDatabaseAsync),
/* harmony export */   createDatabaseWithVersion: () => (/* binding */ createDatabaseWithVersion),
/* harmony export */   createIndexedDBModel: () => (/* binding */ createIndexedDBModel),
/* harmony export */   createObjectStore: () => (/* binding */ createObjectStore),
/* harmony export */   createObjectStoreAsync: () => (/* binding */ createObjectStoreAsync),
/* harmony export */   createObjectStoreIndex: () => (/* binding */ createObjectStoreIndex),
/* harmony export */   createObjectStoreIndexAsync: () => (/* binding */ createObjectStoreIndexAsync),
/* harmony export */   deleteDatabase: () => (/* binding */ deleteDatabase),
/* harmony export */   deleteDatabaseAsync: () => (/* binding */ deleteDatabaseAsync),
/* harmony export */   deleteIDBValueAsync: () => (/* binding */ deleteIDBValueAsync),
/* harmony export */   deleteObjectStore: () => (/* binding */ deleteObjectStore),
/* harmony export */   deleteObjectStoreAsync: () => (/* binding */ deleteObjectStoreAsync),
/* harmony export */   deleteObjectStoreIndex: () => (/* binding */ deleteObjectStoreIndex),
/* harmony export */   deleteObjectStoreIndexAsync: () => (/* binding */ deleteObjectStoreIndexAsync),
/* harmony export */   dumpIndexedDBTree: () => (/* binding */ dumpIndexedDBTree),
/* harmony export */   dumpObjectStores: () => (/* binding */ dumpObjectStores),
/* harmony export */   evaluateWithCallback: () => (/* binding */ evaluateWithCallback),
/* harmony export */   installIndexedDBSniffer: () => (/* binding */ installIndexedDBSniffer),
/* harmony export */   setupIndexedDBHelpers: () => (/* binding */ setupIndexedDBHelpers)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/application/application.js */ "./panels/application/application.js");
/* harmony import */ var _console_test_runner_console_test_runner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../console_test_runner/console_test_runner.js */ "./legacy_test_runner/console_test_runner/console_test_runner.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__]);
_panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

const dumpIndexedDBTree = async function() {
  TestRunner.addResult('Dumping IndexedDB tree:');
  const indexedDBTreeElement = _panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__.ResourcesPanel.ResourcesPanel.instance().sidebar.indexedDBListTreeElement;

  if (!indexedDBTreeElement.childCount()) {
    TestRunner.addResult('    (empty)');
    return;
  }

  for (let i = 0; i < indexedDBTreeElement.childCount(); ++i) {
    const databaseTreeElement = indexedDBTreeElement.childAt(i);
    TestRunner.addResult('    database: ' + databaseTreeElement.title);

    if (!databaseTreeElement.childCount()) {
      TestRunner.addResult('        (no object stores)');
      continue;
    }

    for (let j = 0; j < databaseTreeElement.childCount(); ++j) {
      const objectStoreTreeElement = databaseTreeElement.childAt(j);
      TestRunner.addResult('        Object store: ' + objectStoreTreeElement.title);

      if (!objectStoreTreeElement.childCount()) {
        TestRunner.addResult('            (no indexes)');
        continue;
      }

      for (let k = 0; k < objectStoreTreeElement.childCount(); ++k) {
        const indexTreeElement = objectStoreTreeElement.childAt(k);
        TestRunner.addResult('            Index: ' + indexTreeElement.title);
      }
    }
  }
};

const dumpObjectStores = async function() {
  TestRunner.addResult('Dumping ObjectStore data:');
  const idbDatabaseTreeElement =
      _panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__.ResourcesPanel.ResourcesPanel.instance().sidebar.indexedDBListTreeElement.idbDatabaseTreeElements[0];
  for (let i = 0; i < idbDatabaseTreeElement.childCount(); ++i) {
    const objectStoreTreeElement = idbDatabaseTreeElement.childAt(i);
    objectStoreTreeElement.onselect(false);
    TestRunner.addResult('    Object store: ' + objectStoreTreeElement.title);
    const entries = objectStoreTreeElement.view.entries;
    TestRunner.addResult('            Number of entries: ' + entries.length);
    for (let j = 0; j < entries.length; ++j) {
      TestRunner.addResult('            Key = ' + entries[j].key.value + ', value = ' + entries[j].value);
    }

    for (let k = 0; k < objectStoreTreeElement.childCount(); ++k) {
      const indexTreeElement = objectStoreTreeElement.childAt(k);
      TestRunner.addResult('            Index: ' + indexTreeElement.title);
      indexTreeElement.onselect(false);
      const entries = indexTreeElement.view.entries;
      TestRunner.addResult('                Number of entries: ' + entries.length);
      for (let j = 0; j < entries.length; ++j) {
        TestRunner.addResult('                Key = ' + entries[j].primaryKey.value + ', value = ' + entries[j].value);
      }
    }
  }
};

let lastCallbackId = 0;
const callbacks = {};
const callbackIdPrefix = 'InspectorTest.IndexedDB_callback';

const evaluateWithCallback = function(frameId, methodName, parameters, callback) {
  installIndexedDBSniffer();
  const callbackId = ++lastCallbackId;
  callbacks[callbackId] = callback;
  let parametersString = 'dispatchCallback.bind(this, "' + callbackIdPrefix + callbackId + '")';

  for (let i = 0; i < parameters.length; ++i) {
    parametersString += ', ' + JSON.stringify(parameters[i]);
  }

  const requestString = methodName + '(' + parametersString + ')';
  TestRunner.evaluateInPageAnonymously(requestString);
};

const installIndexedDBSniffer = function() {
  _console_test_runner_console_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleTestRunner.addConsoleSniffer(consoleMessageOverride, false);

  function consoleMessageOverride(msg) {
    const text = msg.messageText;

    if (!text.startsWith(callbackIdPrefix)) {
      _console_test_runner_console_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleTestRunner.addConsoleSniffer(consoleMessageOverride, false);
      return;
    }

    const callbackId = text.substring(callbackIdPrefix.length);
    callbacks[callbackId].call();
    delete callbacks[callbackId];
  }
};

const createDatabase = function(frameId, databaseName, callback) {
  evaluateWithCallback(frameId, 'createDatabase', [databaseName], callback);
};

const createDatabaseWithVersion = function(frameId, databaseName, version, callback) {
  evaluateWithCallback(frameId, 'createDatabaseWithVersion', [databaseName, version], callback);
};

const deleteDatabase = function(frameId, databaseName, callback) {
  evaluateWithCallback(frameId, 'deleteDatabase', [databaseName], callback);
};

const createObjectStore = function(frameId, databaseName, objectStoreName, keyPath, autoIncrement, callback) {
  evaluateWithCallback(frameId, 'createObjectStore', [databaseName, objectStoreName, keyPath, autoIncrement], callback);
};

const deleteObjectStore = function(frameId, databaseName, objectStoreName, callback) {
  evaluateWithCallback(frameId, 'deleteObjectStore', [databaseName, objectStoreName], callback);
};

const createObjectStoreIndex = function(
    frameId, databaseName, objectStoreName, objectStoreIndexName, keyPath, unique, multiEntry, callback) {
  evaluateWithCallback(
      frameId, 'createObjectStoreIndex',
      [databaseName, objectStoreName, objectStoreIndexName, keyPath, unique, multiEntry], callback);
};

const deleteObjectStoreIndex = function(frameId, databaseName, objectStoreName, objectStoreIndexName, callback) {
  evaluateWithCallback(
      frameId, 'deleteObjectStoreIndex', [databaseName, objectStoreName, objectStoreIndexName], callback);
};

const addIDBValue = function(frameId, databaseName, objectStoreName, value, key, callback) {
  evaluateWithCallback(frameId, 'addIDBValue', [databaseName, objectStoreName, value, key], callback);
};

const createIndexedDBModel = function() {
  const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().primaryPageTarget();
  const storageBucketModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.StorageBucketsModel.StorageBucketsModel);
  storageBucketModel.enable();
  const indexedDBModel = target.model(_panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__.IndexedDBModel.IndexedDBModel);
  indexedDBModel.enable();
  return indexedDBModel;
};

const createDatabaseAsync = function(databaseName) {
  return TestRunner.evaluateInPageAsync('createDatabaseAsync(\'' + databaseName + '\')');
};

const deleteDatabaseAsync = function(databaseName) {
  return TestRunner.evaluateInPageAsync('deleteDatabaseAsync(\'' + databaseName + '\')');
};

const createObjectStoreAsync = function(databaseName, objectStoreName, indexName) {
  return TestRunner.evaluateInPageAsync(
      'createObjectStoreAsync(\'' + databaseName + '\', \'' + objectStoreName + '\', \'' + indexName + '\')');
};

const deleteObjectStoreAsync = function(databaseName, objectStoreName) {
  return TestRunner.evaluateInPageAsync(
      'deleteObjectStoreAsync(\'' + databaseName + '\', \'' + objectStoreName + '\')');
};

const createObjectStoreIndexAsync = function(databaseName, objectStoreName, indexName) {
  return TestRunner.evaluateInPageAsync(
      'createObjectStoreIndexAsync(\'' + databaseName + '\', \'' + objectStoreName + '\', \'' + indexName + '\')');
};

const deleteObjectStoreIndexAsync = function(databaseName, objectStoreName, indexName) {
  return TestRunner.evaluateInPageAsync(
      'deleteObjectStoreIndexAsync(\'' + databaseName + '\', \'' + objectStoreName + '\', \'' + indexName + '\')');
};

const addIDBValueAsync = function(databaseName, objectStoreName, key, value) {
  return TestRunner.evaluateInPageAsync(
      'addIDBValueAsync(\'' + databaseName + '\', \'' + objectStoreName + '\', \'' + key + '\', \'' + value + '\')');
};

const deleteIDBValueAsync = function(databaseName, objectStoreName, key) {
  return TestRunner.evaluateInPageAsync(
      'deleteIDBValueAsync(\'' + databaseName + '\', \'' + objectStoreName + '\', \'' + key + '\')');
};

const __indexedDBHelpers = `
  function dispatchCallback(callbackId) {
    console.log(callbackId);
  }

  function onIndexedDBError(e) {
    console.error('IndexedDB error: ' + e);
  }

  function onIndexedDBBlocked(e) {
    console.error('IndexedDB blocked: ' + e);
  }

  function doWithDatabase(databaseName, callback) {
    function innerCallback() {
      let db = request.result;
      callback(db);
    }

    let request = indexedDB.open(databaseName);
    request.onblocked = onIndexedDBBlocked;
    request.onerror = onIndexedDBError;
    request.onsuccess = innerCallback;
  }

  function doWithVersionTransaction(databaseName, callback, commitCallback) {
    doWithDatabase(databaseName, step2);

    function step2(db) {
      let version = db.version;
      db.close();
      request = indexedDB.open(databaseName, version + 1);
      request.onerror = onIndexedDBError;
      request.onupgradeneeded = onUpgradeNeeded;
      request.onsuccess = onOpened;

      function onUpgradeNeeded(e) {
        let db = e.target.result;
        let trans = e.target.transaction;
        callback(db, trans);
      }

      function onOpened(e) {
        let db = e.target.result;
        db.close();
        commitCallback();
      }
    }
  }

  function doWithReadWriteTransaction(databaseName, objectStoreName, callback, commitCallback) {
    doWithDatabase(databaseName, step2);

    function step2(db) {
      let transaction = db.transaction([objectStoreName], 'readwrite');
      let objectStore = transaction.objectStore(objectStoreName);
      callback(objectStore, innerCommitCallback);

      function innerCommitCallback() {
        db.close();
        commitCallback();
      }
    }
  }

  function createDatabase(callback, databaseName) {
    let request = indexedDB.open(databaseName);
    request.onerror = onIndexedDBError;
    request.onsuccess = closeDatabase;

    function closeDatabase() {
      request.result.close();
      callback();
    }
  }

  function createDatabaseWithVersion(callback, databaseName, version) {
    let request = indexedDB.open(databaseName, version);
    request.onerror = onIndexedDBError;
    request.onsuccess = closeDatabase;

    function closeDatabase() {
      request.result.close();
      callback();
    }
  }

  function deleteDatabase(callback, databaseName) {
    let request = indexedDB.deleteDatabase(databaseName);
    request.onerror = onIndexedDBError;
    request.onsuccess = callback;
  }

  function createObjectStore(callback, databaseName, objectStoreName, keyPath, autoIncrement) {
    doWithVersionTransaction(databaseName, withTransactionCallback, callback);

    function withTransactionCallback(db, transaction) {
      let store = db.createObjectStore(objectStoreName, {
        keyPath: keyPath,
        autoIncrement: autoIncrement
      });
    }
  }

  function deleteObjectStore(callback, databaseName, objectStoreName) {
    doWithVersionTransaction(databaseName, withTransactionCallback, callback);

    function withTransactionCallback(db, transaction) {
      let store = db.deleteObjectStore(objectStoreName);
    }
  }

  function createObjectStoreIndex(callback, databaseName, objectStoreName, objectStoreIndexName, keyPath, unique, multiEntry) {
    doWithVersionTransaction(databaseName, withTransactionCallback, callback);

    function withTransactionCallback(db, transaction) {
      let objectStore = transaction.objectStore(objectStoreName);

      objectStore.createIndex(objectStoreIndexName, keyPath, {
        unique: unique,
        multiEntry: multiEntry
      });
    }
  }

  function deleteObjectStoreIndex(callback, databaseName, objectStoreName, objectStoreIndexName) {
    doWithVersionTransaction(databaseName, withTransactionCallback, callback);

    function withTransactionCallback(db, transaction) {
      let objectStore = transaction.objectStore(objectStoreName);
      objectStore.deleteIndex(objectStoreIndexName);
    }
  }

  function addIDBValue(callback, databaseName, objectStoreName, value, key) {
    doWithReadWriteTransaction(databaseName, objectStoreName, withTransactionCallback, callback);

    function withTransactionCallback(objectStore, commitCallback) {
      let request;

      if (key)
        request = objectStore.add(value, key);
      else
        request = objectStore.add(value);

      request.onerror = onIndexedDBError;
      request.onsuccess = commitCallback;
    }
  }

  function createDatabaseAsync(databaseName) {
    return new Promise((resolve) => {
      createDatabase(resolve, databaseName);
    });
  }

  function upgradeRequestAsync(databaseName, onUpgradeNeeded, callback) {
    let request = indexedDB.open(databaseName);
    request.onerror = onIndexedDBError;
    request.onsuccess = function(event) {
      let db = request.result;
      let version = db.version;
      db.close();

      let upgradeRequest = indexedDB.open(databaseName, version + 1);
      upgradeRequest.onerror = onIndexedDBError;
      upgradeRequest.onupgradeneeded = function(e) {
        onUpgradeNeeded(e.target.result, e.target.transaction, callback);
      }
      upgradeRequest.onsuccess = function(e) {
        let upgradeDb = e.target.result;
        upgradeDb.close();
        callback();
      }
    }
  }

  function deleteDatabaseAsync(databaseName) {
    let callback;
    let promise = new Promise((fulfill) => callback = fulfill);
    let request = indexedDB.deleteDatabase(databaseName);
    request.onerror = onIndexedDBError;
    request.onsuccess = callback;
    return promise;
  }

  function createObjectStoreAsync(databaseName, objectStoreName, indexName) {
    let callback;
    let promise = new Promise((fulfill) => callback = fulfill);
    let onUpgradeNeeded = function(upgradeDb, transaction, callback) {
      let store = upgradeDb.createObjectStore(objectStoreName, { keyPath: "test", autoIncrement: false });
      store.createIndex(indexName, "test", { unique: false, multiEntry: false });
      callback();
    }
    upgradeRequestAsync(databaseName, onUpgradeNeeded, callback)
    return promise;
  }

  function deleteObjectStoreAsync(databaseName, objectStoreName) {
    let callback;
    let promise = new Promise((fulfill) => callback = fulfill);
    let onUpgradeNeeded = function(upgradeDb, transaction, callback) {
      upgradeDb.deleteObjectStore(objectStoreName);
      callback();
    }
    upgradeRequestAsync(databaseName, onUpgradeNeeded, callback)
    return promise;
  }

  function createObjectStoreIndexAsync(databaseName, objectStoreName, indexName) {
    let callback;
    let promise = new Promise((fulfill) => callback = fulfill);
    let onUpgradeNeeded = function(upgradeDb, transaction, callback) {
      let store = transaction.objectStore(objectStoreName);
      store.createIndex(indexName, "test", { unique: false, multiEntry: false });
      callback();
    }
    upgradeRequestAsync(databaseName, onUpgradeNeeded, callback)
    return promise;
  }

  function deleteObjectStoreIndexAsync(databaseName, objectStoreName, indexName) {
    let callback;
    let promise = new Promise((fulfill) => callback = fulfill);
    let onUpgradeNeeded = function(upgradeDb, transaction, callback) {
      let store = transaction.objectStore(objectStoreName);
      store.deleteIndex(indexName);
      callback();
    }
    upgradeRequestAsync(databaseName, onUpgradeNeeded, callback)
    return promise;
  }

  function addIDBValueAsync(databaseName, objectStoreName, key, value) {
    let callback;
    let promise = new Promise(fulfill => callback = fulfill);
    let request = indexedDB.open(databaseName);
    request.onerror = onIndexedDBError;

    request.onsuccess = function(event) {
      let db = request.result;
      let transaction = db.transaction(objectStoreName, 'readwrite');
      let store = transaction.objectStore(objectStoreName);

      store.put({
        test: key,
        testValue: value
      });

      transaction.onerror = onIndexedDBError;

      transaction.oncomplete = function() {
        db.close();
        callback();
      };
    };

    return promise;
  }

  function deleteIDBValueAsync(databaseName, objectStoreName, key) {
    let callback;
    let promise = new Promise((fulfill) => callback = fulfill);
    let request = indexedDB.open(databaseName);
    request.onerror = onIndexedDBError;
    request.onsuccess = function(event) {
      let db = request.result;
      let transaction = db.transaction(objectStoreName, "readwrite");
      let store = transaction.objectStore(objectStoreName);
      store.delete(key);

      transaction.onerror = onIndexedDBError;
      transaction.oncomplete = function() {
        db.close();
        callback();
      };
    }
    return promise;
  }
`;

const setupIndexedDBHelpers = function() {
  return TestRunner.evaluateInPagePromise(__indexedDBHelpers);
};

TestRunner.deprecatedInitAsync(__indexedDBHelpers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./panels/application/application.js":
/*!*******************************************!*\
  !*** ./panels/application/application.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppManifestView: () => (/* reexport module object */ _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   ApplicationPanelSidebar: () => (/* reexport module object */ _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   BackgroundServiceModel: () => (/* reexport module object */ _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   BackgroundServiceView: () => (/* reexport module object */ _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   BounceTrackingMitigationsTreeElement: () => (/* reexport module object */ _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   CookieItemsView: () => (/* reexport module object */ _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   DOMStorageItemsView: () => (/* reexport module object */ _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   DOMStorageModel: () => (/* reexport module object */ _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   IndexedDBModel: () => (/* reexport module object */ _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   IndexedDBViews: () => (/* reexport module object */ _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   InterestGroupStorageModel: () => (/* reexport module object */ _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   InterestGroupStorageView: () => (/* reexport module object */ _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   InterestGroupTreeElement: () => (/* reexport module object */ _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   OpenedWindowDetailsView: () => (/* reexport module object */ _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   PreloadingTreeElement: () => (/* reexport module object */ _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   PreloadingView: () => (/* reexport module object */ _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   ReportingApiReportsView: () => (/* reexport module object */ _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__),
/* harmony export */   ReportingApiView: () => (/* reexport module object */ _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__),
/* harmony export */   ResourcesPanel: () => (/* reexport module object */ _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__),
/* harmony export */   ServiceWorkerCacheViews: () => (/* reexport module object */ _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__),
/* harmony export */   ServiceWorkerUpdateCycleView: () => (/* reexport module object */ _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__),
/* harmony export */   ServiceWorkersView: () => (/* reexport module object */ _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__),
/* harmony export */   SharedStorageEventsView: () => (/* reexport module object */ _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__),
/* harmony export */   SharedStorageItemsView: () => (/* reexport module object */ _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__),
/* harmony export */   SharedStorageListTreeElement: () => (/* reexport module object */ _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__),
/* harmony export */   SharedStorageModel: () => (/* reexport module object */ _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__),
/* harmony export */   SharedStorageTreeElement: () => (/* reexport module object */ _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__),
/* harmony export */   StorageBucketsTreeElement: () => (/* reexport module object */ _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__),
/* harmony export */   StorageItemsView: () => (/* reexport module object */ _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__),
/* harmony export */   StorageView: () => (/* reexport module object */ _StorageView_js__WEBPACK_IMPORTED_MODULE_29__),
/* harmony export */   TrustTokensTreeElement: () => (/* reexport module object */ _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__)
/* harmony export */ });
/* harmony import */ var _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationPanelSidebar.js */ "./panels/application/ApplicationPanelSidebar.js");
/* harmony import */ var _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppManifestView.js */ "./panels/application/AppManifestView.js");
/* harmony import */ var _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackgroundServiceModel.js */ "./panels/application/BackgroundServiceModel.js");
/* harmony import */ var _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackgroundServiceView.js */ "./panels/application/BackgroundServiceView.js");
/* harmony import */ var _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BounceTrackingMitigationsTreeElement.js */ "./panels/application/BounceTrackingMitigationsTreeElement.js");
/* harmony import */ var _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CookieItemsView.js */ "./panels/application/CookieItemsView.js");
/* harmony import */ var _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOMStorageItemsView.js */ "./panels/application/DOMStorageItemsView.js");
/* harmony import */ var _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DOMStorageModel.js */ "./panels/application/DOMStorageModel.js");
/* harmony import */ var _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IndexedDBModel.js */ "./panels/application/IndexedDBModel.js");
/* harmony import */ var _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IndexedDBViews.js */ "./panels/application/IndexedDBViews.js");
/* harmony import */ var _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InterestGroupStorageModel.js */ "./panels/application/InterestGroupStorageModel.js");
/* harmony import */ var _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InterestGroupStorageView.js */ "./panels/application/InterestGroupStorageView.js");
/* harmony import */ var _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InterestGroupTreeElement.js */ "./panels/application/InterestGroupTreeElement.js");
/* harmony import */ var _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OpenedWindowDetailsView.js */ "./panels/application/OpenedWindowDetailsView.js");
/* harmony import */ var _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./preloading/PreloadingView.js */ "./panels/application/preloading/PreloadingView.js");
/* harmony import */ var _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PreloadingTreeElement.js */ "./panels/application/PreloadingTreeElement.js");
/* harmony import */ var _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ReportingApiReportsView.js */ "./panels/application/ReportingApiReportsView.js");
/* harmony import */ var _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ReportingApiView.js */ "./panels/application/ReportingApiView.js");
/* harmony import */ var _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ResourcesPanel.js */ "./panels/application/ResourcesPanel.js");
/* harmony import */ var _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ServiceWorkerCacheViews.js */ "./panels/application/ServiceWorkerCacheViews.js");
/* harmony import */ var _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ServiceWorkersView.js */ "./panels/application/ServiceWorkersView.js");
/* harmony import */ var _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ServiceWorkerUpdateCycleView.js */ "./panels/application/ServiceWorkerUpdateCycleView.js");
/* harmony import */ var _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SharedStorageEventsView.js */ "./panels/application/SharedStorageEventsView.js");
/* harmony import */ var _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SharedStorageItemsView.js */ "./panels/application/SharedStorageItemsView.js");
/* harmony import */ var _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SharedStorageListTreeElement.js */ "./panels/application/SharedStorageListTreeElement.js");
/* harmony import */ var _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SharedStorageModel.js */ "./panels/application/SharedStorageModel.js");
/* harmony import */ var _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./SharedStorageTreeElement.js */ "./panels/application/SharedStorageTreeElement.js");
/* harmony import */ var _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./StorageBucketsTreeElement.js */ "./panels/application/StorageBucketsTreeElement.js");
/* harmony import */ var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./StorageItemsView.js */ "./panels/application/StorageItemsView.js");
/* harmony import */ var _StorageView_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./StorageView.js */ "./panels/application/StorageView.js");
/* harmony import */ var _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./TrustTokensTreeElement.js */ "./panels/application/TrustTokensTreeElement.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__]);
([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
































//# sourceMappingURL=application.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);