"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_sources_test_runner_SearchTestRunner_js"], {
"./legacy_test_runner/sources_test_runner/SearchTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  dumpSearchMatches: function() { return dumpSearchMatches; },
  dumpSearchResults: function() { return dumpSearchResults; },
  replaceAndDumpChange: function() { return replaceAndDumpChange; },
  runSearchAndDumpResults: function() { return runSearchAndDumpResults; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./panels/sources/sources.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__);
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var dumpSearchResults = function dumpSearchResults(searchResults) {
    function comparator(a, b) {
        a.url.localeCompare(b.url);
    }
    searchResults.sort(comparator);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('Search results: ');
    for(var i = 0; i < searchResults.length; i++){
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('url: ' + searchResults[i].url.replace(/VM\d+/, 'VMXX') + ', matchesCount: ' + searchResults[i].matchesCount);
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('');
};
var dumpSearchMatches = function dumpSearchMatches(searchMatches) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('Search matches: ');
    for(var i = 0; i < searchMatches.length; i++){
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('lineNumber: ' + searchMatches[i].lineNumber + ', line: \'' + searchMatches[i].lineContent + '\'');
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('');
};
var runSearchAndDumpResults = function runSearchAndDumpResults(scope, searchConfig, callback) {
    var searchResults = [];
    var progress = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress();
    scope.performSearch(searchConfig, progress, searchResultCallback, searchFinishedCallback);
    function searchResultCallback(searchResult) {
        searchResults.push(searchResult);
    }
    function searchFinishedCallback() {
        function comparator(searchResultA, searchResultB) {
            var aUrl = searchResultA.uiSourceCode.url();
            var bUrl = searchResultB.uiSourceCode.url();
            return aUrl > bUrl ? 1 : bUrl > aUrl ? -1 : 0;
        }
        searchResults.sort(comparator);
        for(var i = 0; i < searchResults.length; ++i){
            var searchResult = searchResults[i];
            var uiSourceCode = searchResult.uiSourceCode;
            var searchMatches = searchResult.searchMatches;
            if (!searchMatches.length) {
                continue;
            }
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('Search result #' + (i + 1) + ': uiSourceCode.url = ' + uiSourceCode.url().replace(/VM\d+/, 'VMXX'));
            for(var j = 0; j < searchMatches.length; ++j){
                var lineNumber = searchMatches[j].lineNumber;
                var lineContent = searchMatches[j].lineContent;
                _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('  search match #' + (j + 1) + ': lineNumber = ' + lineNumber + ', lineContent = \'' + lineContent + '\'');
            }
        }
        callback();
    }
};
var replaceAndDumpChange = function replaceAndDumpChange(sourceFrame, searchConfig, replacement, replaceAll) {
    var modifiers = [];
    if (searchConfig.isRegex) {
        modifiers.push('regex');
    }
    if (searchConfig.caseSensitive) {
        modifiers.push('caseSensitive');
    }
    if (replaceAll) {
        modifiers.push('replaceAll');
    }
    var modifiersString = modifiers.length ? ' (' + modifiers.join(', ') + ')' : '';
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('Running replace test for /' + searchConfig.query + '/' + replacement + '/ ' + modifiersString + ':');
    var editor = sourceFrame.textEditor;
    var oldLines = [];
    for(var i = 0; i < editor.linesCount; ++i){
        oldLines.push(editor.line(i));
    }
    var searchableView = _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_1__.SourcesPanel.SourcesPanel.instance().sourcesView().searchableView();
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
    var newLines = [];
    for(var i1 = 0; i1 < editor.linesCount; ++i1){
        newLines.push(editor.line(i1));
    }
    for(var i2 = 0; i2 < newLines.length; ++i2){
        if (oldLines[i2] === newLines[i2]) {
            continue;
        }
        var oldLine = oldLines[i2];
        var newLine = newLines[i2];
        var prefixLength = 0;
        for(var j = 0; j < oldLine.length && j < newLine.length && newLine[j] === oldLine[j]; ++j){
            ++prefixLength;
        }
        var postfixLength = 0;
        for(var j1 = 0; j1 < oldLine.length && j1 < newLine.length && newLine[newLine.length - j1 - 1] === oldLine[oldLine.length - j1 - 1]; ++j1){
            ++postfixLength;
        }
        var prefix = oldLine.substring(0, prefixLength);
        var removed = oldLine.substring(prefixLength, oldLine.length - postfixLength);
        var added = newLine.substring(prefixLength, newLine.length - postfixLength);
        var postfix = oldLine.substring(oldLine.length - postfixLength);
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('  - ' + prefix + '#' + removed + '#' + added + '#' + postfix);
    }
};
_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.deprecatedInitAsync("\n  if (window.GCController)\n    GCController.collect();\n");


}),

}]);