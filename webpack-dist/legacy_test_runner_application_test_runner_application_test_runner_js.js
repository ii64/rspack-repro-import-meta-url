"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["legacy_test_runner_application_test_runner_application_test_runner_js"],{

/***/ "./legacy_test_runner/application_test_runner/ResourceTreeTestRunner.js":
/*!******************************************************************************!*\
  !*** ./legacy_test_runner/application_test_runner/ResourceTreeTestRunner.js ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dumpResourceTreeEverything: () => (/* binding */ dumpResourceTreeEverything),
/* harmony export */   dumpResources: () => (/* binding */ dumpResources),
/* harmony export */   dumpResourcesTree: () => (/* binding */ dumpResourcesTree),
/* harmony export */   dumpResourcesURLMap: () => (/* binding */ dumpResourcesURLMap)
/* harmony export */ });
/* harmony import */ var _panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/application/application.js */ "./panels/application/application.js");
/* harmony import */ var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./panels/sources/sources.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _sources_test_runner_sources_test_runner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sources_test_runner/sources_test_runner.js */ "./legacy_test_runner/sources_test_runner/sources_test_runner.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__]);
_panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

const dumpResources = function(formatter) {
  const results = [];

  function formatterWrapper(resource) {
    if (formatter) {
      results.push({resource: resource, text: formatter(resource)});
    } else {
      results.push({resource: resource, text: resource.url});
    }
  }

  TestRunner.resourceTreeModel.forAllResources(formatterWrapper);

  function comparator(result1, result2) {
    return result1.resource.url.localeCompare(result2.resource.url);
  }

  results.sort(comparator);

  for (let i = 0; i < results.length; ++i) {
    TestRunner.addResult(results[i].text);
  }
};

const dumpResourcesURLMap = function() {
  const results = [];
  TestRunner.resourceTreeModel.forAllResources(collect);

  function collect(resource) {
    results.push({url: resource.url, resource: TestRunner.resourceTreeModel.resourceForURL(resource.url)});
  }

  function comparator(result1, result2) {
    if (result1.url > result2.url) {
      return 1;
    }

    if (result2.url > result1.url) {
      return -1;
    }

    return 0;
  }

  results.sort(comparator);

  for (let i = 0; i < results.length; ++i) {
    TestRunner.addResult(results[i].url + ' == ' + results[i].resource.url);
  }
};

let testSourceNavigator;

const dumpResourcesTree = function() {
  function dump(treeItem, prefix) {
    if (typeof treeItem.resetBubble === 'function') {
      treeItem.resetBubble();
    }

    TestRunner.addResult(prefix + treeItem.listItemElement.textContent);
    treeItem.expand();
    const children = treeItem.children();

    for (let i = 0; children && i < children.length; ++i) {
      dump(children[i], prefix + '    ');
    }
  }

  dump(_panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__.ResourcesPanel.ResourcesPanel.instance().sidebar.resourcesSection.treeElement, '');

  if (!testSourceNavigator) {
    testSourceNavigator = new _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_1__.SourcesNavigator.NetworkNavigatorView();
    testSourceNavigator.show(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.InspectorView.InspectorView.instance().element);
  }

  _sources_test_runner_sources_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.SourcesTestRunner.dumpNavigatorViewInAllModes(testSourceNavigator);
};

const dumpResourceTreeEverything = function() {
  function format(resource) {
    return resource.resourceType().name() + ' ' + resource.url;
  }

  TestRunner.addResult('Resources:');
  dumpResources(format);
  TestRunner.addResult('');
  TestRunner.addResult('Resources URL Map:');
  dumpResourcesURLMap();
  TestRunner.addResult('');
  TestRunner.addResult('Resources Tree:');
  dumpResourcesTree();
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./legacy_test_runner/application_test_runner/ResourcesTestRunner.js":
/*!***************************************************************************!*\
  !*** ./legacy_test_runner/application_test_runner/ResourcesTestRunner.js ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWebSQLDatabase: () => (/* binding */ createWebSQLDatabase),
/* harmony export */   databaseModel: () => (/* binding */ databaseModel),
/* harmony export */   domStorageModel: () => (/* binding */ domStorageModel),
/* harmony export */   dumpCookieDomains: () => (/* binding */ dumpCookieDomains),
/* harmony export */   dumpCookies: () => (/* binding */ dumpCookies),
/* harmony export */   findTreeElement: () => (/* binding */ findTreeElement),
/* harmony export */   indexedDBModel: () => (/* binding */ indexedDBModel),
/* harmony export */   requestURLComparer: () => (/* binding */ requestURLComparer),
/* harmony export */   resetState: () => (/* binding */ resetState),
/* harmony export */   resourceMatchingURL: () => (/* binding */ resourceMatchingURL),
/* harmony export */   runAfterCachedResourcesProcessed: () => (/* binding */ runAfterCachedResourcesProcessed),
/* harmony export */   runAfterResourcesAreFinished: () => (/* binding */ runAfterResourcesAreFinished),
/* harmony export */   showResource: () => (/* binding */ showResource),
/* harmony export */   waitForCookies: () => (/* binding */ waitForCookies)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/application/application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__]);
_panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

/**
 * Many application panel tests are flaky because storage state (e.g. IndexedDB)
 * doesn't get reset between tests.
 */
const resetState = async function() {
  const targets = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().targets();
  for (const target of targets) {
    if (target.type() === 'tab') {
      continue;
    }
    const securityOrigin = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(target.inspectedURL()).securityOrigin();
    await target.storageAgent().clearDataForOrigin(securityOrigin, _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.StorageView.AllStorageTypes.join(','));
  }
};

const createWebSQLDatabase = function(name) {
  return TestRunner.evaluateInPageAsync(`_openWebSQLDatabase("${name}")`);
};

const requestURLComparer = function(r1, r2) {
  return r1.request.url.localeCompare(r2.request.url);
};

const runAfterCachedResourcesProcessed = function(callback) {
  if (!TestRunner.resourceTreeModel.cachedResourcesProcessed) {
    TestRunner.resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.CachedResourcesLoaded, callback);
  } else {
    callback();
  }
};

const runAfterResourcesAreFinished = function(resourceURLs, callback) {
  const resourceURLsMap = new Set(resourceURLs);

  function checkResources() {
    for (const url of resourceURLsMap) {
      const resource = resourceMatchingURL(url);

      if (resource) {
        resourceURLsMap.delete(url);
      }
    }

    if (!resourceURLsMap.size) {
      TestRunner.resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.ResourceAdded, checkResources);
      callback();
    }
  }

  checkResources();

  if (resourceURLsMap.size) {
    TestRunner.resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.ResourceAdded, checkResources);
  }
};

const showResource = function(resourceURL, callback) {
  let reported = false;

  function callbackWrapper(sourceFrame) {
    if (reported) {
      return;
    }

    callback(sourceFrame);
    reported = true;
  }

  function showResourceCallback() {
    const resource = resourceMatchingURL(resourceURL);

    if (!resource) {
      return;
    }

    _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().showResource(resource, 1);
    const sourceFrame = _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().resourceViewForResource(resource);

    if (sourceFrame.loaded) {
      callbackWrapper(sourceFrame);
    } else {
      TestRunner.addSniffer(sourceFrame, 'setContent', callbackWrapper.bind(null, sourceFrame));
    }
  }

  runAfterResourcesAreFinished([resourceURL], showResourceCallback);
};

const resourceMatchingURL = function(resourceURL) {
  let result = null;
  TestRunner.resourceTreeModel.forAllResources(visit);

  function visit(resource) {
    if (resource.url.indexOf(resourceURL) !== -1) {
      result = resource;
      return true;
    }
  }

  return result;
};

const findTreeElement = function(parent, path) {
  if (path.length === 0) {
    return parent;
  }
  const child = parent.children().find(child => child.title === path[0]);
  if (!child) {
    return null;
  }
  child.expand();
  return findTreeElement(child, path.slice(1));
};

const waitForCookies = function() {
  return new Promise(resolve => {
    TestRunner.addSniffer(CookieTable.CookiesTable.prototype, 'rebuildTable', resolve);
  });
};

const dumpCookieDomains = function() {
  const cookieListChildren =
      _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().sidebar.cookieListTreeElement.children();
  TestRunner.addResult('Available cookie domains:');
  for (const child of cookieListChildren) {
    TestRunner.addResult(child.cookieDomain);
  }
};

const dumpCookies = function() {
  if (!_panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().cookieView || !UI.panels.resources.cookieView.isShowing()) {
    TestRunner.addResult('No cookies visible');
    return;
  }

  TestRunner.addResult('Visible cookies');
  for (const item of _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().cookieView.cookiesTable.data) {
    const cookies = item.cookies || [];
    for (const cookie of cookies) {
      TestRunner.addResult(`${cookie.name()}=${cookie.value()}`);
    }
  }
};

const databaseModel = function() {
  return TestRunner.mainTarget.model(_panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.DatabaseModel.DatabaseModel);
};

const domStorageModel = function() {
  return TestRunner.mainTarget.model(_panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.DOMStorageModel.DOMStorageModel);
};

const indexedDBModel = function() {
  return TestRunner.mainTarget.model(_panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.IndexedDBModel.IndexedDBModel);
};

TestRunner.deprecatedInitAsync(`
  function _openWebSQLDatabase(name) {
    return new Promise(resolve => openDatabase(name, '1.0', '', 1024 * 1024, resolve));
  }
`);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./legacy_test_runner/application_test_runner/ServiceWorkersTestRunner.js":
/*!********************************************************************************!*\
  !*** ./legacy_test_runner/application_test_runner/ServiceWorkersTestRunner.js ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteServiceWorkerRegistration: () => (/* binding */ deleteServiceWorkerRegistration),
/* harmony export */   dumpServiceWorkersView: () => (/* binding */ dumpServiceWorkersView),
/* harmony export */   makeFetchInServiceWorker: () => (/* binding */ makeFetchInServiceWorker),
/* harmony export */   postToServiceWorker: () => (/* binding */ postToServiceWorker),
/* harmony export */   registerServiceWorker: () => (/* binding */ registerServiceWorker),
/* harmony export */   unregisterServiceWorker: () => (/* binding */ unregisterServiceWorker),
/* harmony export */   waitForActivated: () => (/* binding */ waitForActivated),
/* harmony export */   waitForServiceWorker: () => (/* binding */ waitForServiceWorker)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/application/application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__]);
_panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

const registerServiceWorker = function(script, scope) {
  return TestRunner.callFunctionInPageAsync('registerServiceWorker', [script, scope]);
};

const waitForActivated = function(scope) {
  return TestRunner.callFunctionInPageAsync('waitForActivated', [scope]);
};

const unregisterServiceWorker = function(scope) {
  return TestRunner.callFunctionInPageAsync('unregisterServiceWorker', [scope]);
};

const postToServiceWorker = function(scope, message) {
  return TestRunner.evaluateInPageAnonymously('postToServiceWorker("' + scope + '","' + message + '")');
};

const waitForServiceWorker = function(callback) {
  _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().observeTargets({
    targetAdded: function(target) {
      if (target.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.ServiceWorker && callback) {
        setTimeout(callback.bind(null, target), 0);
        callback = null;
      }
    },

    targetRemoved: function(target) {}
  });
};

const dumpServiceWorkersView = function() {
  const swView = _panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__.ResourcesPanel.ResourcesPanel.instance().visibleView;

  return swView.currentWorkersView.sectionList.childTextNodes()
      .map(function(node) {
        if (node.textContent === 'Received ' + (new Date(0)).toLocaleString()) {
          return 'Invalid scriptResponseTime (unix epoch)';
        }
        return node.textContent.replace(/Received.*/, 'Received')
            .replace(/#\d+/, '#N')
            .replace(/Start time.*/, 'Start time')
            .replace(/End time.*/, 'End time');
      })
      .join('\n');
};

const deleteServiceWorkerRegistration = function(scope) {
  for (const registration of TestRunner.serviceWorkerManager.registrations().values()) {
    if (registration.scopeURL === scope) {
      TestRunner.serviceWorkerManager.deleteRegistration(registration.id);
    }
  }
};

const makeFetchInServiceWorker = function(scope, url, requestInitializer, callback) {
  TestRunner.callFunctionInPageAsync('makeFetchInServiceWorker', [scope, url, requestInitializer]).then(callback);
};

TestRunner.deprecatedInitAsync(`
  let registrations = {};

  function registerServiceWorker(script, scope) {
    return navigator.serviceWorker.register(script, {
      scope: scope
    })
    .then(reg => registrations[scope] = reg)
    .catch(err => {
      return Promise.reject(new Error('Service Worker registration error: ' +
                                      err.toString()));
    });
  }

  function waitForActivated(scope) {
    let reg = registrations[scope];
    if (!reg)
      return Promise.reject(new Error('The registration'));
    let worker = reg.installing || reg.waiting || reg.active;
    if (worker.state === 'activated')
      return Promise.resolve();
    if (worker.state === 'redundant')
      return Promise.reject(new Error('The worker is redundant'));
    return new Promise(resolve => {
        worker.addEventListener('statechange', () => {
            if (worker.state === 'activated')
              resolve();
          });
      });
  }

  function postToServiceWorker(scope, message) {
    registrations[scope].active.postMessage(message);
  }

  function unregisterServiceWorker(scope) {
    let registration = registrations[scope];

    if (!registration)
      return Promise.reject('ServiceWorker for ' + scope + ' is not registered');

    return registration.unregister().then(() => delete registrations[scope]);
  }

  function makeFetchInServiceWorker(scope, url, requestInitializer) {
    let script = 'resources/network-fetch-worker.js';

    return navigator.serviceWorker.register(script, {
      scope: scope
    }).then(registration => {
      let worker = registration.installing;

      return new Promise(resolve => {
        navigator.serviceWorker.onmessage = e => {
          resolve(e.data);
        };

        worker.postMessage({
          url: url,
          init: requestInitializer
        });
      });
    });
  }
`);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./legacy_test_runner/application_test_runner/StorageTestRunner.js":
/*!*************************************************************************!*\
  !*** ./legacy_test_runner/application_test_runner/StorageTestRunner.js ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isStorageView: () => (/* binding */ isStorageView)
/* harmony export */ });
/* harmony import */ var _panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/application/application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__]);
_panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

const isStorageView = function(view) {
  return view instanceof _panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__.StorageView.StorageView;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./legacy_test_runner/application_test_runner/application_test_runner.js":
/*!*******************************************************************************!*\
  !*** ./legacy_test_runner/application_test_runner/application_test_runner.js ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplicationTestRunner: () => (/* binding */ ApplicationTestRunner)
/* harmony export */ });
/* harmony import */ var _CacheStorageTestRunner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheStorageTestRunner.js */ "./legacy_test_runner/application_test_runner/CacheStorageTestRunner.js");
/* harmony import */ var _IndexedDBTestRunner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexedDBTestRunner.js */ "./legacy_test_runner/application_test_runner/IndexedDBTestRunner.js");
/* harmony import */ var _ResourcesTestRunner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResourcesTestRunner.js */ "./legacy_test_runner/application_test_runner/ResourcesTestRunner.js");
/* harmony import */ var _ResourceTreeTestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResourceTreeTestRunner.js */ "./legacy_test_runner/application_test_runner/ResourceTreeTestRunner.js");
/* harmony import */ var _ServiceWorkersTestRunner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServiceWorkersTestRunner.js */ "./legacy_test_runner/application_test_runner/ServiceWorkersTestRunner.js");
/* harmony import */ var _StorageTestRunner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StorageTestRunner.js */ "./legacy_test_runner/application_test_runner/StorageTestRunner.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CacheStorageTestRunner_js__WEBPACK_IMPORTED_MODULE_0__, _IndexedDBTestRunner_js__WEBPACK_IMPORTED_MODULE_1__, _ResourcesTestRunner_js__WEBPACK_IMPORTED_MODULE_2__, _ResourceTreeTestRunner_js__WEBPACK_IMPORTED_MODULE_3__, _ServiceWorkersTestRunner_js__WEBPACK_IMPORTED_MODULE_4__, _StorageTestRunner_js__WEBPACK_IMPORTED_MODULE_5__]);
([_CacheStorageTestRunner_js__WEBPACK_IMPORTED_MODULE_0__, _IndexedDBTestRunner_js__WEBPACK_IMPORTED_MODULE_1__, _ResourcesTestRunner_js__WEBPACK_IMPORTED_MODULE_2__, _ResourceTreeTestRunner_js__WEBPACK_IMPORTED_MODULE_3__, _ServiceWorkersTestRunner_js__WEBPACK_IMPORTED_MODULE_4__, _StorageTestRunner_js__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const ApplicationTestRunner = {
  ..._CacheStorageTestRunner_js__WEBPACK_IMPORTED_MODULE_0__,
  ..._IndexedDBTestRunner_js__WEBPACK_IMPORTED_MODULE_1__,
  ..._ResourcesTestRunner_js__WEBPACK_IMPORTED_MODULE_2__,
  ..._ResourceTreeTestRunner_js__WEBPACK_IMPORTED_MODULE_3__,
  ..._ServiceWorkersTestRunner_js__WEBPACK_IMPORTED_MODULE_4__,
  ..._StorageTestRunner_js__WEBPACK_IMPORTED_MODULE_5__,
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);