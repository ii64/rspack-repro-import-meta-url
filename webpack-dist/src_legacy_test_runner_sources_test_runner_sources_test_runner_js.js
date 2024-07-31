"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_legacy_test_runner_sources_test_runner_sources_test_runner_js"],{

/***/ "./src/legacy_test_runner/sources_test_runner/AutocompleteTestRunner.js":
/*!******************************************************************************!*\
  !*** ./src/legacy_test_runner/sources_test_runner/AutocompleteTestRunner.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dumpSuggestions: () => (/* binding */ dumpSuggestions)
/* harmony export */ });
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./src/legacy_test_runner/test_runner/test_runner.js");
/* harmony import */ var _EditorTestRunner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorTestRunner.js */ "./src/legacy_test_runner/sources_test_runner/EditorTestRunner.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

const dumpSuggestions = function(textEditor, lines) {
  let resolve;
  const promise = new Promise(fulfill => {
    resolve = fulfill;
  });
  let lineNumber = -1;
  let columnNumber;

  for (let i = 0; i < lines.length; ++i) {
    columnNumber = lines[i].indexOf('|');

    if (columnNumber !== -1) {
      lineNumber = i;
      break;
    }
  }

  if (lineNumber === -1) {
    throw new Error('Test case is invalid: cursor position is not marked with \'|\' symbol.');
  }

  textEditor.setText(lines.join('\n').replace('|', ''));
  textEditor.setSelection(_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.TextRange.createFromLocation(lineNumber, columnNumber));
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addSniffer(
      TextEditor.TextEditorAutocompleteController.prototype, 'onSuggestionsShownForTest', suggestionsShown);
  textEditor.autocompleteController.autocomplete();

  function suggestionsShown(words) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult('========= Selection In Editor =========');
    (0,_EditorTestRunner_js__WEBPACK_IMPORTED_MODULE_2__.dumpTextWithSelection)(textEditor);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult('======= Autocomplete Suggestions =======');
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult('[' + words.map(item => item.text).join(', ') + ']');
    resolve();
  }

  return promise;
};


/***/ }),

/***/ "./src/legacy_test_runner/sources_test_runner/LiveEditTestRunner.js":
/*!**************************************************************************!*\
  !*** ./src/legacy_test_runner/sources_test_runner/LiveEditTestRunner.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commitSource: () => (/* binding */ commitSource),
/* harmony export */   replaceInSource: () => (/* binding */ replaceInSource),
/* harmony export */   undoSourceEditing: () => (/* binding */ undoSourceEditing)
/* harmony export */ });
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

const replaceInSource = function(sourceFrame, string, replacement) {
  sourceFrame.textEditor.setReadOnly(false);

  for (let i = 0; i < sourceFrame.textEditor.linesCount; ++i) {
    const line = sourceFrame.textEditor.line(i);
    const column = line.indexOf(string);

    if (column === -1) {
      continue;
    }

    const range = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.TextRange(i, column, i, column + string.length);
    sourceFrame.textEditor.editRange(range, replacement);
    break;
  }
};

const commitSource = function(sourceFrame) {
  sourceFrame.commitEditing();
};

const undoSourceEditing = function(sourceFrame) {
  sourceFrame.textEditor.undo();
};


/***/ }),

/***/ "./src/legacy_test_runner/sources_test_runner/SearchTestRunner.js":
/*!************************************************************************!*\
  !*** ./src/legacy_test_runner/sources_test_runner/SearchTestRunner.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dumpSearchMatches: () => (/* binding */ dumpSearchMatches),
/* harmony export */   dumpSearchResults: () => (/* binding */ dumpSearchResults),
/* harmony export */   replaceAndDumpChange: () => (/* binding */ replaceAndDumpChange),
/* harmony export */   runSearchAndDumpResults: () => (/* binding */ runSearchAndDumpResults)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./src/panels/sources/sources.ts");
/* harmony import */ var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./src/legacy_test_runner/test_runner/test_runner.js");
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

/***/ "./src/legacy_test_runner/sources_test_runner/SourcesTestRunner.js":
/*!*************************************************************************!*\
  !*** ./src/legacy_test_runner/sources_test_runner/SourcesTestRunner.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addScriptUISourceCode: () => (/* binding */ addScriptUISourceCode),
/* harmony export */   dumpNavigatorView: () => (/* binding */ dumpNavigatorView),
/* harmony export */   dumpNavigatorViewInAllModes: () => (/* binding */ dumpNavigatorViewInAllModes),
/* harmony export */   dumpNavigatorViewInMode: () => (/* binding */ dumpNavigatorViewInMode),
/* harmony export */   dumpSwatchPositions: () => (/* binding */ dumpSwatchPositions)
/* harmony export */ });
/* harmony import */ var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./src/panels/sources/sources.ts");
/* harmony import */ var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./src/legacy_test_runner/test_runner/test_runner.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */




/**
 * @param {!Sources.NavigatorView.NavigatorView} navigatorView
 * @param {boolean=} dumpIcons
 */
const dumpNavigatorView = function(navigatorView, dumpIcons) {
  dumpNavigatorTreeOutline(navigatorView.scriptsTree);

  /**
   * @param {string} prefix
   * @param {!UI.TreeElement} treeElement
   */
  function dumpNavigatorTreeElement(prefix, treeElement) {
    let titleText = '';
    if (treeElement.leadingIconsElement && dumpIcons) {
      let icons = treeElement.leadingIconsElement.querySelectorAll('[is=ui-icon]');
      icons = Array.prototype.slice.call(icons);
      const iconTypes = icons.map(icon => icon.iconType);
      if (iconTypes.length) {
        titleText = titleText + '[' + iconTypes.join(', ') + '] ';
      }
    }
    titleText += treeElement.title;
    if (treeElement.nodeType === _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_0__.NavigatorView.Types.FileSystem ||
        treeElement.nodeType === _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_0__.NavigatorView.Types.FileSystemFolder) {
      const hasMappedFiles = treeElement.listItemElement.classList.contains('has-mapped-files');
      if (!hasMappedFiles) {
        titleText += ' [dimmed]';
      }
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult(prefix + titleText);
    treeElement.expand();
    const children = treeElement.children();
    for (let i = 0; i < children.length; ++i) {
      dumpNavigatorTreeElement(prefix + '  ', children[i]);
    }
  }

  /**
   * @param {!UI.TreeOutline} treeOutline
   */
  function dumpNavigatorTreeOutline(treeOutline) {
    const children = treeOutline.rootElement().children();
    for (let i = 0; i < children.length; ++i) {
      dumpNavigatorTreeElement('', children[i]);
    }
  }
};

/**
 * @param {!Sources.NavigatorView.NavigatorView} view
 */
const dumpNavigatorViewInAllModes = function(view) {
  ['frame', 'frame/domain', 'frame/domain/folder', 'domain', 'domain/folder'].forEach(
      dumpNavigatorViewInMode.bind(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner, view));
};

/**
 * @param {!Sources.NavigatorView.NavigatorView} view
 * @param {string} mode
 */
const dumpNavigatorViewInMode = function(view, mode) {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult(view instanceof _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_0__.SourcesNavigator.NetworkNavigatorView ? 'Sources:' : 'Content Scripts:');
  view.groupByFrame = mode.includes('frame');
  view.groupByDomain = mode.includes('domain');
  view.groupByFolder = mode.includes('folder');
  view.resetForTest();
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult('-------- Setting mode: [' + mode + ']');
  dumpNavigatorView(view);
};

/**
 * @param {string} url
 * @param {string} content
 * @param {boolean=} isContentScript
 * @param {number=} worldId
 * @return {!Promise}
 */
const addScriptUISourceCode = function(url, content, isContentScript, worldId) {
  content += '\n//# sourceURL=' + url;
  if (isContentScript) {
    content = `testRunner.evaluateScriptInIsolatedWorld(${worldId}, \`${content}\`)`;
  }
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.evaluateInPageAnonymously(content);
  return _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.waitForUISourceCode(url);
};

const dumpSwatchPositions = function(sourceFrame, bookmarkType) {
  const textEditor = sourceFrame.textEditor;
  const markers = textEditor.bookmarks(textEditor.fullRange(), bookmarkType);

  for (let i = 0; i < markers.length; i++) {
    const position = markers[i].position();
    const swatch = markers[i].marker.widgetNode.firstChild;
    let text = swatch.textContent;
    if (swatch.localName === 'devtools-color-swatch') {
      text = swatch.color.asString(swatch.format);
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult('Line ' + position.startLine + ', Column ' + position.startColumn + ': ' + text);
  }
};


/***/ }),

/***/ "./src/legacy_test_runner/sources_test_runner/sources_test_runner.js":
/*!***************************************************************************!*\
  !*** ./src/legacy_test_runner/sources_test_runner/sources_test_runner.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourcesTestRunner: () => (/* binding */ SourcesTestRunner)
/* harmony export */ });
/* harmony import */ var _AutocompleteTestRunner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutocompleteTestRunner.js */ "./src/legacy_test_runner/sources_test_runner/AutocompleteTestRunner.js");
/* harmony import */ var _DebuggerTestRunner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DebuggerTestRunner.js */ "./src/legacy_test_runner/sources_test_runner/DebuggerTestRunner.js");
/* harmony import */ var _EditorTestRunner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorTestRunner.js */ "./src/legacy_test_runner/sources_test_runner/EditorTestRunner.js");
/* harmony import */ var _LiveEditTestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LiveEditTestRunner.js */ "./src/legacy_test_runner/sources_test_runner/LiveEditTestRunner.js");
/* harmony import */ var _SearchTestRunner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchTestRunner.js */ "./src/legacy_test_runner/sources_test_runner/SearchTestRunner.js");
/* harmony import */ var _SourcesTestRunner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SourcesTestRunner.js */ "./src/legacy_test_runner/sources_test_runner/SourcesTestRunner.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const SourcesTestRunner = {
  ..._SourcesTestRunner_js__WEBPACK_IMPORTED_MODULE_5__,
  ..._DebuggerTestRunner_js__WEBPACK_IMPORTED_MODULE_1__,
  ..._LiveEditTestRunner_js__WEBPACK_IMPORTED_MODULE_3__,
  ..._SearchTestRunner_js__WEBPACK_IMPORTED_MODULE_4__,
  ..._EditorTestRunner_js__WEBPACK_IMPORTED_MODULE_2__,
  ..._AutocompleteTestRunner_js__WEBPACK_IMPORTED_MODULE_0__,
};


/***/ })

}]);