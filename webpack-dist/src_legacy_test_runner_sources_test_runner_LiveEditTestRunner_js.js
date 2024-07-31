"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_legacy_test_runner_sources_test_runner_LiveEditTestRunner_js"],{

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


/***/ })

}]);