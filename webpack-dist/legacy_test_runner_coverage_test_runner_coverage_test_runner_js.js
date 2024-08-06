"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["legacy_test_runner_coverage_test_runner_coverage_test_runner_js"],{

/***/ "./legacy_test_runner/coverage_test_runner/coverage_test_runner.js":
/*!*************************************************************************!*\
  !*** ./legacy_test_runner/coverage_test_runner/coverage_test_runner.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoverageTestRunner: () => (/* binding */ CoverageTestRunner)
/* harmony export */ });
/* harmony import */ var _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/coverage/coverage.js */ "./panels/coverage/coverage.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _sources_test_runner_sources_test_runner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sources_test_runner/sources_test_runner.js */ "./legacy_test_runner/sources_test_runner/sources_test_runner.js");
/* harmony import */ var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */
const CoverageTestRunner = {};

/**
 * @param jsCoveragePerBlock - Collect per Block coverage if `true`, per function coverage otherwise.
 * @return {!Promise}
 */
CoverageTestRunner.startCoverage = async function(jsCoveragePerBlock) {
  _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ViewManager.ViewManager.instance().showView('coverage');
  const coverageView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance();
  await coverageView.startRecording({reload: false, jsCoveragePerBlock});
};

/**
 * @return {!Promise}
 */
CoverageTestRunner.stopCoverage = function() {
  const coverageView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance();
  return coverageView.stopRecording();
};

/**
 * @return {!Promise}
 */
CoverageTestRunner.suspendCoverageModel = async function() {
  const coverageView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance();
  await coverageView.model.preSuspendModel();
  await coverageView.model.suspendModel();
};

/**
 * @return {!Promise}
 */
CoverageTestRunner.resumeCoverageModel = async function() {
  const coverageView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance();
  await coverageView.model.resumeModel();
  await coverageView.model.postResumeModel();
};

/**
 * @return {!Promise}
 */
CoverageTestRunner.pollCoverage = async function() {
  const coverageView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance();
  // Make sure not to have two instances of _pollAndCallback running at the same time.
  await coverageView.model.currentPollPromise;
  return coverageView.model.pollAndCallback();
};

/**
 * @return {!Promise<Coverage.CoverageModel.CoverageModel>}
 */
CoverageTestRunner.getCoverageModel = function() {
  const coverageView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance();
  return coverageView.model;
};

/**
 * @return {!Promise<string>}
 */
CoverageTestRunner.exportReport = async function() {
  const coverageView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance();
  let data;
  await coverageView.model.exportReport({
    write: d => {
      data = d;
    },
    close: _ => 0
  });
  return data;
};

/**
 * @return {!Promise<!SourceFrame.SourceFrame>}
 */
CoverageTestRunner.sourceDecorated = async function(source) {
  await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.InspectorView.InspectorView.instance().showPanel('sources');
  const decoratePromise = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addSnifferPromise(_panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.LineDecorator.prototype, 'innerDecorate');
  const sourceFrame = await _sources_test_runner_sources_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.SourcesTestRunner.showScriptSourcePromise(source);
  await decoratePromise;
  return sourceFrame;
};

CoverageTestRunner.dumpDecorations = async function(source) {
  const sourceFrame = await CoverageTestRunner.sourceDecorated(source);
  CoverageTestRunner.dumpDecorationsInSourceFrame(sourceFrame);
};

/**
 * @return {?DataGrid.DataGridNode}
 */
CoverageTestRunner.findCoverageNodeForURL = function(url) {
  const coverageListView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance().listView;
  const rootNode = coverageListView.dataGrid.rootNode();

  for (const child of rootNode.children) {
    if (child.coverageInfo.url().endsWith(url)) {
      return child;
    }
  }

  return null;
};

CoverageTestRunner.dumpDecorationsInSourceFrame = function(sourceFrame) {
  const markerMap = new Map([['used', '+'], ['unused', '-']]);
  const codeMirror = sourceFrame.textEditor.codeMirror();

  for (let line = 0; line < codeMirror.lineCount(); ++line) {
    const text = codeMirror.getLine(line);
    let markerType = ' ';
    const lineInfo = codeMirror.lineInfo(line);

    if (!lineInfo) {
      continue;
    }

    const gutterElement = lineInfo.gutterMarkers && lineInfo.gutterMarkers['CodeMirror-gutter-coverage'];

    if (gutterElement) {
      const markerClass = /^text-editor-coverage-(\w*)-marker$/.exec(gutterElement.classList)[1];
      markerType = markerMap.get(markerClass) || gutterElement.classList;
    }

    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult(`${line}: ${markerType} ${text}`);
  }
};

CoverageTestRunner.dumpCoverageListView = function() {
  const coverageListView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance().listView;
  const dataGrid = coverageListView.dataGrid;
  dataGrid.updateInstantly();

  for (const child of dataGrid.rootNode().children) {
    const data = child.coverageInfo;
    const url = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.formatters.formatAsURL(data.url());

    if (url.startsWith('test://')) {
      continue;
    }

    const type = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageListView.coverageTypeToString(data.type());
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult(`${url} ${type} used: ${data.usedSize()} unused: ${data.unusedSize()} total: ${data.size()}`);
  }
};


/***/ })

}]);