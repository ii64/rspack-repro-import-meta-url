"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_sources_test_runner_LiveEditTestRunner_js"], {
"./legacy_test_runner/sources_test_runner/LiveEditTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  commitSource: function() { return commitSource; },
  replaceInSource: function() { return replaceInSource; },
  undoSourceEditing: function() { return undoSourceEditing; }
});
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var replaceInSource = function replaceInSource(sourceFrame, string, replacement) {
    sourceFrame.textEditor.setReadOnly(false);
    for(var i = 0; i < sourceFrame.textEditor.linesCount; ++i){
        var line = sourceFrame.textEditor.line(i);
        var column = line.indexOf(string);
        if (column === -1) {
            continue;
        }
        var range = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.TextRange(i, column, i, column + string.length);
        sourceFrame.textEditor.editRange(range, replacement);
        break;
    }
};
var commitSource = function commitSource(sourceFrame) {
    sourceFrame.commitEditing();
};
var undoSourceEditing = function undoSourceEditing(sourceFrame) {
    sourceFrame.textEditor.undo();
};


}),

}]);