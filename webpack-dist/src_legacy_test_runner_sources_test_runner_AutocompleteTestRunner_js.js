"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_legacy_test_runner_sources_test_runner_AutocompleteTestRunner_js"],{

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


/***/ })

}]);