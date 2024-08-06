(self["webpackChunk"] = self["webpackChunk"] || []).push([["legacy_test_runner_sources_test_runner_SearchTestRunner_js"],{

/***/ "./legacy_test_runner/sources_test_runner/SearchTestRunner.js":
/*!********************************************************************!*\
  !*** ./legacy_test_runner/sources_test_runner/SearchTestRunner.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dumpSearchMatches: () => (/* binding */ dumpSearchMatches),
/* harmony export */   dumpSearchResults: () => (/* binding */ dumpSearchResults),
/* harmony export */   replaceAndDumpChange: () => (/* binding */ replaceAndDumpChange),
/* harmony export */   runSearchAndDumpResults: () => (/* binding */ runSearchAndDumpResults)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./panels/sources/sources.js");
/* harmony import */ var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

const dumpSearchResults = function(searchResults) {
  function comparator(a, b) {
    a.url.localeCompare(b.url);
  }

  searchResults.sort(comparator);
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('Search results: ');

  for (let i = 0; i < searchResults.length; i++) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult(
        'url: ' + searchResults[i].url.replace(/VM\d+/, 'VMXX') + ', matchesCount: ' + searchResults[i].matchesCount);
  }

  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('');
};

const dumpSearchMatches = function(searchMatches) {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('Search matches: ');

  for (let i = 0; i < searchMatches.length; i++) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult(
        'lineNumber: ' + searchMatches[i].lineNumber + ', line: \'' + searchMatches[i].lineContent + '\'');
  }

  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('');
};

const runSearchAndDumpResults = function(scope, searchConfig, callback) {
  const searchResults = [];
  const progress = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress();
  scope.performSearch(searchConfig, progress, searchResultCallback, searchFinishedCallback);

  function searchResultCallback(searchResult) {
    searchResults.push(searchResult);
  }

  function searchFinishedCallback() {
    function comparator(searchResultA, searchResultB) {
      const aUrl = searchResultA.uiSourceCode.url();
      const bUrl = searchResultB.uiSourceCode.url();
      return aUrl > bUrl ? 1 : bUrl > aUrl ? -1 : 0;
    }

    searchResults.sort(comparator);

    for (let i = 0; i < searchResults.length; ++i) {
      const searchResult = searchResults[i];
      const uiSourceCode = searchResult.uiSourceCode;
      const searchMatches = searchResult.searchMatches;

      if (!searchMatches.length) {
        continue;
      }

      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult(
          'Search result #' + (i + 1) + ': uiSourceCode.url = ' + uiSourceCode.url().replace(/VM\d+/, 'VMXX'));

      for (let j = 0; j < searchMatches.length; ++j) {
        const lineNumber = searchMatches[j].lineNumber;
        const lineContent = searchMatches[j].lineContent;
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult(
            '  search match #' + (j + 1) + ': lineNumber = ' + lineNumber + ', lineContent = \'' + lineContent + '\'');
      }
    }

    callback();
  }
};

const replaceAndDumpChange = function(sourceFrame, searchConfig, replacement, replaceAll) {
  const modifiers = [];

  if (searchConfig.isRegex) {
    modifiers.push('regex');
  }

  if (searchConfig.caseSensitive) {
    modifiers.push('caseSensitive');
  }

  if (replaceAll) {
    modifiers.push('replaceAll');
  }

  const modifiersString = (modifiers.length ? ' (' + modifiers.join(', ') + ')' : '');
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult(
      'Running replace test for /' + searchConfig.query + '/' + replacement + '/ ' + modifiersString + ':');
  const editor = sourceFrame.textEditor;
  const oldLines = [];

  for (let i = 0; i < editor.linesCount; ++i) {
    oldLines.push(editor.line(i));
  }

  const searchableView = _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_1__.SourcesPanel.SourcesPanel.instance().sourcesView().searchableView();
  searchableView.showSearchField();
  searchableView.caseSensitiveButton.setToggled(searchConfig.caseSensitive);
  searchableView.regexButton.setToggled(searchConfig.isRegex);
  searchableView.searchInputElement.value = searchConfig.query;
  searchableView.replaceToggleButton.setToggled(true);
  searchableView.updateSecondRowVisibility();
  searchableView.replaceInputElement.value = replacement;
  searchableView.performSearch(true, true);

  if (replaceAll) {
    searchableView.replaceAll();
  } else {
    searchableView.replace();
  }

  const newLines = [];

  for (let i = 0; i < editor.linesCount; ++i) {
    newLines.push(editor.line(i));
  }

  for (let i = 0; i < newLines.length; ++i) {
    if (oldLines[i] === newLines[i]) {
      continue;
    }

    const oldLine = oldLines[i];
    const newLine = newLines[i];
    let prefixLength = 0;

    for (let j = 0; j < oldLine.length && j < newLine.length && newLine[j] === oldLine[j]; ++j) {
      ++prefixLength;
    }

    let postfixLength = 0;

    for (let j = 0; j < oldLine.length && j < newLine.length &&
         newLine[newLine.length - j - 1] === oldLine[oldLine.length - j - 1];
         ++j) {
      ++postfixLength;
    }

    const prefix = oldLine.substring(0, prefixLength);
    const removed = oldLine.substring(prefixLength, oldLine.length - postfixLength);
    const added = newLine.substring(prefixLength, newLine.length - postfixLength);
    const postfix = oldLine.substring(oldLine.length - postfixLength);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('  - ' + prefix + '#' + removed + '#' + added + '#' + postfix);
  }
};

_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.deprecatedInitAsync(`
  if (window.GCController)
    GCController.collect();
`);


/***/ }),

/***/ "./legacy_test_runner/test_runner/test_runner.js":
/*!*******************************************************!*\
  !*** ./legacy_test_runner/test_runner/test_runner.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestRunner: () => (/* binding */ globalTestRunner),
/* harmony export */   _TestObserver: () => (/* binding */ _TestObserver),
/* harmony export */   _executeTestScript: () => (/* binding */ _executeTestScript)
/* harmony export */ });
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */ var _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestRunner.js */ "./legacy_test_runner/test_runner/TestRunner.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ts-nocheck This file is not checked by TypeScript as it has a lot of legacy code.




/**
 * @param {!SDK.Target.Target} target
 */
function _setupTestHelpers(target) {
    self.TestRunner.BrowserAgent = target.browserAgent();
    self.TestRunner.CSSAgent = target.cssAgent();
    self.TestRunner.DeviceOrientationAgent = target.deviceOrientationAgent();
    self.TestRunner.DOMAgent = target.domAgent();
    self.TestRunner.DOMDebuggerAgent = target.domdebuggerAgent();
    self.TestRunner.DebuggerAgent = target.debuggerAgent();
    self.TestRunner.EmulationAgent = target.emulationAgent();
    self.TestRunner.HeapProfilerAgent = target.heapProfilerAgent();
    self.TestRunner.InputAgent = target.inputAgent();
    self.TestRunner.InspectorAgent = target.inspectorAgent();
    self.TestRunner.NetworkAgent = target.networkAgent();
    self.TestRunner.OverlayAgent = target.overlayAgent();
    self.TestRunner.PageAgent = target.pageAgent();
    self.TestRunner.ProfilerAgent = target.profilerAgent();
    self.TestRunner.RuntimeAgent = target.runtimeAgent();
    self.TestRunner.TargetAgent = target.targetAgent();
    self.TestRunner.networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.NetworkManager);
    self.TestRunner.securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.SecurityOriginManager);
    self.TestRunner.storageKeyManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageKeyManager.StorageKeyManager);
    self.TestRunner.resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
    self.TestRunner.debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
    self.TestRunner.runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
    self.TestRunner.domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
    self.TestRunner.domDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerModel);
    self.TestRunner.cssModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
    self.TestRunner.cpuProfilerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CPUProfilerModel.CPUProfilerModel);
    self.TestRunner.overlayModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.OverlayModel);
    self.TestRunner.serviceWorkerManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorkerManager.ServiceWorkerManager);
    self.TestRunner.tracingManager = target.model(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.TracingManager.TracingManager);
    self.TestRunner.mainTarget = target;
}
async function _executeTestScript() {
    const testScriptURL = /** @type {string} */ (_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.Runtime.queryParam('test'));
    if (_TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.isDebugTest()) {
        /* eslint-disable no-console */
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.setInnerResult(console.log);
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.setInnerCompleteTest(() => console.log('Test completed'));
        /* eslint-enable no-console */
        // Auto-start unit tests
        self.test = async function () {
            await __webpack_require__("./legacy_test_runner/test_runner lazy recursive")(testScriptURL);
        };
        return;
    }
    try {
        await __webpack_require__("./legacy_test_runner/test_runner lazy recursive")(testScriptURL);
    }
    catch (err) {
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult('TEST ENDED EARLY DUE TO UNCAUGHT ERROR:');
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult(err && err.stack || err);
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult('=== DO NOT COMMIT THIS INTO -expected.txt ===');
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.completeTest();
    }
}
/** @type {boolean} */
let _startedTest = false;
/**
 * @implements {SDK.TargetManager.Observer}
 */
class _TestObserver {
    /**
     * @param {!SDK.Target.Target} target
     * @override
     */
    targetAdded(target) {
        if (target.id() === 'main' && target.type() === 'frame' ||
            target.parentTarget()?.type() === 'tab' && target.type() === 'frame' && !target.targetInfo()?.subtype?.length) {
            _setupTestHelpers(target);
            if (_startedTest) {
                return;
            }
            _startedTest = true;
            _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.loadHTML(`
        <head>
          <base href="${_TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.url()}">
        </head>
        <body>
        </body>
      `).then(() => _executeTestScript());
        }
    }
    /**
     * @param {!SDK.Target.Target} target
     * @override
     */
    targetRemoved(target) {
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().observeTargets(new _TestObserver());
const globalTestRunner = self.TestRunner;

//# sourceMappingURL=test_runner.js.map

/***/ }),

/***/ "./legacy_test_runner/test_runner lazy recursive":
/*!***************************************************************!*\
  !*** ./legacy_test_runner/test_runner/ lazy namespace object ***!
  \***************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./legacy_test_runner/test_runner lazy recursive";
module.exports = webpackEmptyAsyncContext;

/***/ })

}]);