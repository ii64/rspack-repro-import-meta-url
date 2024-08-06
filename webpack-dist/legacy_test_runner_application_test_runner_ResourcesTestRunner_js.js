"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["legacy_test_runner_application_test_runner_ResourcesTestRunner_js"],{

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