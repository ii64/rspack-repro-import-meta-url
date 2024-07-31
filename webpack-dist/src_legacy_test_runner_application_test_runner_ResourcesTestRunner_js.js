"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_legacy_test_runner_application_test_runner_ResourcesTestRunner_js"],{

/***/ "./src/legacy_test_runner/application_test_runner/ResourcesTestRunner.js":
/*!*******************************************************************************!*\
  !*** ./src/legacy_test_runner/application_test_runner/ResourcesTestRunner.js ***!
  \*******************************************************************************/
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
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/application/application.js */ "./src/panels/application/application.ts");
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

/***/ })

}]);