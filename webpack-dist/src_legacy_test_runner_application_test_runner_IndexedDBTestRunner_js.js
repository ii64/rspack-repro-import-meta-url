"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_legacy_test_runner_application_test_runner_IndexedDBTestRunner_js"],{

/***/ "./src/legacy_test_runner/application_test_runner/IndexedDBTestRunner.js":
/*!*******************************************************************************!*\
  !*** ./src/legacy_test_runner/application_test_runner/IndexedDBTestRunner.js ***!
  \*******************************************************************************/
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
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/application/application.js */ "./src/panels/application/application.ts");
/* harmony import */ var _console_test_runner_console_test_runner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../console_test_runner/console_test_runner.js */ "./src/legacy_test_runner/console_test_runner/console_test_runner.js");
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

/***/ })

}]);