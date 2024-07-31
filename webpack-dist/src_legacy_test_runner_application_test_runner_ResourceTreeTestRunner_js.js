"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_legacy_test_runner_application_test_runner_ResourceTreeTestRunner_js"],{

/***/ "./src/legacy_test_runner/application_test_runner/ResourceTreeTestRunner.js":
/*!**********************************************************************************!*\
  !*** ./src/legacy_test_runner/application_test_runner/ResourceTreeTestRunner.js ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dumpResourceTreeEverything: () => (/* binding */ dumpResourceTreeEverything),
/* harmony export */   dumpResources: () => (/* binding */ dumpResources),
/* harmony export */   dumpResourcesTree: () => (/* binding */ dumpResourcesTree),
/* harmony export */   dumpResourcesURLMap: () => (/* binding */ dumpResourcesURLMap)
/* harmony export */ });
/* harmony import */ var _panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/application/application.js */ "./src/panels/application/application.ts");
/* harmony import */ var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./src/panels/sources/sources.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _sources_test_runner_sources_test_runner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sources_test_runner/sources_test_runner.js */ "./src/legacy_test_runner/sources_test_runner/sources_test_runner.js");
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

/***/ })

}]);