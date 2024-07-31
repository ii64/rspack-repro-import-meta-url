"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_input_input_js-_5b8a0"],{

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


/***/ }),

/***/ "./src/third_party/codemirror/package/src/input/input.js":
/*!***************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/input/input.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyTextInput: () => (/* binding */ applyTextInput),
/* harmony export */   copyableRanges: () => (/* binding */ copyableRanges),
/* harmony export */   disableBrowserMagic: () => (/* binding */ disableBrowserMagic),
/* harmony export */   handlePaste: () => (/* binding */ handlePaste),
/* harmony export */   hiddenTextarea: () => (/* binding */ hiddenTextarea),
/* harmony export */   lastCopied: () => (/* binding */ lastCopied),
/* harmony export */   setLastCopied: () => (/* binding */ setLastCopied),
/* harmony export */   triggerElectric: () => (/* binding */ triggerElectric)
/* harmony export */ });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./src/third_party/codemirror/package/src/display/operations.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/scrolling.js */ "./src/third_party/codemirror/package/src/display/scrolling.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _model_changes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/changes.js */ "./src/third_party/codemirror/package/src/model/changes.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/feature_detection.js */ "./src/third_party/codemirror/package/src/util/feature_detection.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/operation_group.js */ "./src/third_party/codemirror/package/src/util/operation_group.js");
/* harmony import */ var _indent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./indent.js */ "./src/third_party/codemirror/package/src/input/indent.js");













// This will be set to a {lineWise: bool, text: [string]} object, so
// that, when pasting, we know what kind of selections the copied
// text was made out of.
let lastCopied = null

function setLastCopied(newLastCopied) {
  lastCopied = newLastCopied
}

function applyTextInput(cm, inserted, deleted, sel, origin) {
  let doc = cm.doc
  cm.display.shift = false
  if (!sel) sel = doc.sel

  let recent = +new Date - 200
  let paste = origin == "paste" || cm.state.pasteIncoming > recent
  let textLines = (0,_util_feature_detection_js__WEBPACK_IMPORTED_MODULE_7__.splitLinesAuto)(inserted), multiPaste = null
  // When pasting N lines into N selections, insert one line per selection
  if (paste && sel.ranges.length > 1) {
    if (lastCopied && lastCopied.text.join("\n") == inserted) {
      if (sel.ranges.length % lastCopied.text.length == 0) {
        multiPaste = []
        for (let i = 0; i < lastCopied.text.length; i++)
          multiPaste.push(doc.splitLines(lastCopied.text[i]))
      }
    } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
      multiPaste = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_8__.map)(textLines, l => [l])
    }
  }

  let updateInput = cm.curOp.updateInput
  // Normal behavior is to insert the new text into every selection
  for (let i = sel.ranges.length - 1; i >= 0; i--) {
    let range = sel.ranges[i]
    let from = range.from(), to = range.to()
    if (range.empty()) {
      if (deleted && deleted > 0) // Handle deletion
        from = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.Pos)(from.line, from.ch - deleted)
      else if (cm.state.overwrite && !paste) // Handle overwrite
        to = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.Pos)(to.line, Math.min((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__.getLine)(doc, to.line).text.length, to.ch + (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_8__.lst)(textLines).length))
      else if (paste && lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == textLines.join("\n"))
        from = to = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.Pos)(from.line, 0)
    }
    let changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i % multiPaste.length] : textLines,
                       origin: origin || (paste ? "paste" : cm.state.cutIncoming > recent ? "cut" : "+input")}
    ;(0,_model_changes_js__WEBPACK_IMPORTED_MODULE_4__.makeChange)(cm.doc, changeEvent)
    ;(0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__.signalLater)(cm, "inputRead", cm, changeEvent)
  }
  if (inserted && !paste)
    triggerElectric(cm, inserted)

  ;(0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.ensureCursorVisible)(cm)
  if (cm.curOp.updateInput < 2) cm.curOp.updateInput = updateInput
  cm.curOp.typing = true
  cm.state.pasteIncoming = cm.state.cutIncoming = -1
}

function handlePaste(e, cm) {
  let pasted = e.clipboardData && e.clipboardData.getData("Text")
  if (pasted) {
    e.preventDefault()
    if (!cm.isReadOnly() && !cm.options.disableInput)
      (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.runInOp)(cm, () => applyTextInput(cm, pasted, 0, null, "paste"))
    return true
  }
}

function triggerElectric(cm, inserted) {
  // When an 'electric' character is inserted, immediately trigger a reindent
  if (!cm.options.electricChars || !cm.options.smartIndent) return
  let sel = cm.doc.sel

  for (let i = sel.ranges.length - 1; i >= 0; i--) {
    let range = sel.ranges[i]
    if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) continue
    let mode = cm.getModeAt(range.head)
    let indented = false
    if (mode.electricChars) {
      for (let j = 0; j < mode.electricChars.length; j++)
        if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
          indented = (0,_indent_js__WEBPACK_IMPORTED_MODULE_10__.indentLine)(cm, range.head.line, "smart")
          break
        }
    } else if (mode.electricInput) {
      if (mode.electricInput.test((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__.getLine)(cm.doc, range.head.line).text.slice(0, range.head.ch)))
        indented = (0,_indent_js__WEBPACK_IMPORTED_MODULE_10__.indentLine)(cm, range.head.line, "smart")
    }
    if (indented) (0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__.signalLater)(cm, "electricInput", cm, range.head.line)
  }
}

function copyableRanges(cm) {
  let text = [], ranges = []
  for (let i = 0; i < cm.doc.sel.ranges.length; i++) {
    let line = cm.doc.sel.ranges[i].head.line
    let lineRange = {anchor: (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.Pos)(line, 0), head: (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.Pos)(line + 1, 0)}
    ranges.push(lineRange)
    text.push(cm.getRange(lineRange.anchor, lineRange.head))
  }
  return {text: text, ranges: ranges}
}

function disableBrowserMagic(field, spellcheck, autocorrect, autocapitalize) {
  field.setAttribute("autocorrect", autocorrect ? "" : "off")
  field.setAttribute("autocapitalize", autocapitalize ? "" : "off")
  field.setAttribute("spellcheck", !!spellcheck)
}

function hiddenTextarea() {
  let te = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_6__.elt)("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none")
  let div = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_6__.elt)("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;")
  // The textarea is kept positioned near the cursor to prevent the
  // fact that it'll be scrolled into view on input from scrolling
  // our fake cursor out of view. On webkit, when wrap=off, paste is
  // very slow. So make the area wide instead.
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_5__.webkit) te.style.width = "1000px"
  else te.setAttribute("wrap", "off")
  // If border: 0; -- iOS fails to open keyboard (issue #1287)
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_5__.ios) te.style.border = "1px solid black"
  disableBrowserMagic(te)
  return div
}


/***/ })

}]);