"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_input_indent_js"],{

/***/ "./src/third_party/codemirror/package/src/input/indent.js":
/*!****************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/input/indent.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   indentLine: () => (/* binding */ indentLine)
/* harmony export */ });
/* harmony import */ var _line_highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/highlight.js */ "./src/third_party/codemirror/package/src/line/highlight.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _model_changes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/changes.js */ "./src/third_party/codemirror/package/src/model/changes.js");
/* harmony import */ var _model_selection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/selection.js */ "./src/third_party/codemirror/package/src/model/selection.js");
/* harmony import */ var _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/selection_updates.js */ "./src/third_party/codemirror/package/src/model/selection_updates.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");








// Indent the given line. The how parameter can be "smart",
// "add"/null, "subtract", or "prev". When aggressive is false
// (typically set to true for forced single-line indents), empty
// lines are not indented, and places where the mode returns Pass
// are left alone.
function indentLine(cm, n, how, aggressive) {
  let doc = cm.doc, state
  if (how == null) how = "add"
  if (how == "smart") {
    // Fall back to "prev" when the mode doesn't have an indentation
    // method.
    if (!doc.mode.indent) how = "prev"
    else state = (0,_line_highlight_js__WEBPACK_IMPORTED_MODULE_0__.getContextBefore)(cm, n).state
  }

  let tabSize = cm.options.tabSize
  let line = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__.getLine)(doc, n), curSpace = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_6__.countColumn)(line.text, null, tabSize)
  if (line.stateAfter) line.stateAfter = null
  let curSpaceString = line.text.match(/^\s*/)[0], indentation
  if (!aggressive && !/\S/.test(line.text)) {
    indentation = 0
    how = "not"
  } else if (how == "smart") {
    indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text)
    if (indentation == _util_misc_js__WEBPACK_IMPORTED_MODULE_6__.Pass || indentation > 150) {
      if (!aggressive) return
      how = "prev"
    }
  }
  if (how == "prev") {
    if (n > doc.first) indentation = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_6__.countColumn)((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__.getLine)(doc, n-1).text, null, tabSize)
    else indentation = 0
  } else if (how == "add") {
    indentation = curSpace + cm.options.indentUnit
  } else if (how == "subtract") {
    indentation = curSpace - cm.options.indentUnit
  } else if (typeof how == "number") {
    indentation = curSpace + how
  }
  indentation = Math.max(0, indentation)

  let indentString = "", pos = 0
  if (cm.options.indentWithTabs)
    for (let i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t"}
  if (pos < indentation) indentString += (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_6__.spaceStr)(indentation - pos)

  if (indentString != curSpaceString) {
    (0,_model_changes_js__WEBPACK_IMPORTED_MODULE_3__.replaceRange)(doc, indentString, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.Pos)(n, 0), (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.Pos)(n, curSpaceString.length), "+input")
    line.stateAfter = null
    return true
  } else {
    // Ensure that, if the cursor was in the whitespace at the start
    // of the line, it is moved to the end of that space.
    for (let i = 0; i < doc.sel.ranges.length; i++) {
      let range = doc.sel.ranges[i]
      if (range.head.line == n && range.head.ch < curSpaceString.length) {
        let pos = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.Pos)(n, curSpaceString.length)
        ;(0,_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_5__.replaceOneSelection)(doc, i, new _model_selection_js__WEBPACK_IMPORTED_MODULE_4__.Range(pos, pos))
        break
      }
    }
  }
}


/***/ })

}]);