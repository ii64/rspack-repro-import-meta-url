"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_edit_commands_js"],{

/***/ "./src/third_party/codemirror/package/src/edit/commands.js":
/*!*****************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/edit/commands.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commands: () => (/* binding */ commands)
/* harmony export */ });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./src/third_party/codemirror/package/src/display/operations.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/scrolling.js */ "./src/third_party/codemirror/package/src/display/scrolling.js");
/* harmony import */ var _input_movement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/movement.js */ "./src/third_party/codemirror/package/src/input/movement.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/spans.js */ "./src/third_party/codemirror/package/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _model_selection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/selection.js */ "./src/third_party/codemirror/package/src/model/selection.js");
/* harmony import */ var _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/selection_updates.js */ "./src/third_party/codemirror/package/src/model/selection_updates.js");
/* harmony import */ var _util_bidi_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/bidi.js */ "./src/third_party/codemirror/package/src/util/bidi.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _deleteNearSelection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./deleteNearSelection.js */ "./src/third_party/codemirror/package/src/edit/deleteNearSelection.js");













// Commands are parameter-less actions that can be performed on an
// editor, mostly used for keybindings.
let commands = {
  selectAll: _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_7__.selectAll,
  singleSelection: cm => cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), _util_misc_js__WEBPACK_IMPORTED_MODULE_9__.sel_dontScroll),
  killLine: cm => (0,_deleteNearSelection_js__WEBPACK_IMPORTED_MODULE_10__.deleteNearSelection)(cm, range => {
    if (range.empty()) {
      let len = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.getLine)(cm.doc, range.head.line).text.length
      if (range.head.ch == len && range.head.line < cm.lastLine())
        return {from: range.head, to: (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(range.head.line + 1, 0)}
      else
        return {from: range.head, to: (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(range.head.line, len)}
    } else {
      return {from: range.from(), to: range.to()}
    }
  }),
  deleteLine: cm => (0,_deleteNearSelection_js__WEBPACK_IMPORTED_MODULE_10__.deleteNearSelection)(cm, range => ({
    from: (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(range.from().line, 0),
    to: (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.clipPos)(cm.doc, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(range.to().line + 1, 0))
  })),
  delLineLeft: cm => (0,_deleteNearSelection_js__WEBPACK_IMPORTED_MODULE_10__.deleteNearSelection)(cm, range => ({
    from: (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(range.from().line, 0), to: range.from()
  })),
  delWrappedLineLeft: cm => (0,_deleteNearSelection_js__WEBPACK_IMPORTED_MODULE_10__.deleteNearSelection)(cm, range => {
    let top = cm.charCoords(range.head, "div").top + 5
    let leftPos = cm.coordsChar({left: 0, top: top}, "div")
    return {from: leftPos, to: range.from()}
  }),
  delWrappedLineRight: cm => (0,_deleteNearSelection_js__WEBPACK_IMPORTED_MODULE_10__.deleteNearSelection)(cm, range => {
    let top = cm.charCoords(range.head, "div").top + 5
    let rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
    return {from: range.from(), to: rightPos }
  }),
  undo: cm => cm.undo(),
  redo: cm => cm.redo(),
  undoSelection: cm => cm.undoSelection(),
  redoSelection: cm => cm.redoSelection(),
  goDocStart: cm => cm.extendSelection((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(cm.firstLine(), 0)),
  goDocEnd: cm => cm.extendSelection((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(cm.lastLine())),
  goLineStart: cm => cm.extendSelectionsBy(range => lineStart(cm, range.head.line),
    {origin: "+move", bias: 1}
  ),
  goLineStartSmart: cm => cm.extendSelectionsBy(range => lineStartSmart(cm, range.head),
    {origin: "+move", bias: 1}
  ),
  goLineEnd: cm => cm.extendSelectionsBy(range => lineEnd(cm, range.head.line),
    {origin: "+move", bias: -1}
  ),
  goLineRight: cm => cm.extendSelectionsBy(range => {
    let top = cm.cursorCoords(range.head, "div").top + 5
    return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
  }, _util_misc_js__WEBPACK_IMPORTED_MODULE_9__.sel_move),
  goLineLeft: cm => cm.extendSelectionsBy(range => {
    let top = cm.cursorCoords(range.head, "div").top + 5
    return cm.coordsChar({left: 0, top: top}, "div")
  }, _util_misc_js__WEBPACK_IMPORTED_MODULE_9__.sel_move),
  goLineLeftSmart: cm => cm.extendSelectionsBy(range => {
    let top = cm.cursorCoords(range.head, "div").top + 5
    let pos = cm.coordsChar({left: 0, top: top}, "div")
    if (pos.ch < cm.getLine(pos.line).search(/\S/)) return lineStartSmart(cm, range.head)
    return pos
  }, _util_misc_js__WEBPACK_IMPORTED_MODULE_9__.sel_move),
  goLineUp: cm => cm.moveV(-1, "line"),
  goLineDown: cm => cm.moveV(1, "line"),
  goPageUp: cm => cm.moveV(-1, "page"),
  goPageDown: cm => cm.moveV(1, "page"),
  goCharLeft: cm => cm.moveH(-1, "char"),
  goCharRight: cm => cm.moveH(1, "char"),
  goColumnLeft: cm => cm.moveH(-1, "column"),
  goColumnRight: cm => cm.moveH(1, "column"),
  goWordLeft: cm => cm.moveH(-1, "word"),
  goGroupRight: cm => cm.moveH(1, "group"),
  goGroupLeft: cm => cm.moveH(-1, "group"),
  goWordRight: cm => cm.moveH(1, "word"),
  delCharBefore: cm => cm.deleteH(-1, "codepoint"),
  delCharAfter: cm => cm.deleteH(1, "char"),
  delWordBefore: cm => cm.deleteH(-1, "word"),
  delWordAfter: cm => cm.deleteH(1, "word"),
  delGroupBefore: cm => cm.deleteH(-1, "group"),
  delGroupAfter: cm => cm.deleteH(1, "group"),
  indentAuto: cm => cm.indentSelection("smart"),
  indentMore: cm => cm.indentSelection("add"),
  indentLess: cm => cm.indentSelection("subtract"),
  insertTab: cm => cm.replaceSelection("\t"),
  insertSoftTab: cm => {
    let spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize
    for (let i = 0; i < ranges.length; i++) {
      let pos = ranges[i].from()
      let col = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_9__.countColumn)(cm.getLine(pos.line), pos.ch, tabSize)
      spaces.push((0,_util_misc_js__WEBPACK_IMPORTED_MODULE_9__.spaceStr)(tabSize - col % tabSize))
    }
    cm.replaceSelections(spaces)
  },
  defaultTab: cm => {
    if (cm.somethingSelected()) cm.indentSelection("add")
    else cm.execCommand("insertTab")
  },
  // Swap the two chars left and right of each selection's head.
  // Move cursor behind the two swapped characters afterwards.
  //
  // Doesn't consider line feeds a character.
  // Doesn't scan more than one line above to find a character.
  // Doesn't do anything on an empty line.
  // Doesn't do anything with non-empty selections.
  transposeChars: cm => (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.runInOp)(cm, () => {
    let ranges = cm.listSelections(), newSel = []
    for (let i = 0; i < ranges.length; i++) {
      if (!ranges[i].empty()) continue
      let cur = ranges[i].head, line = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.getLine)(cm.doc, cur.line).text
      if (line) {
        if (cur.ch == line.length) cur = new _line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos(cur.line, cur.ch - 1)
        if (cur.ch > 0) {
          cur = new _line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos(cur.line, cur.ch + 1)
          cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
                          (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(cur.line, cur.ch - 2), cur, "+transpose")
        } else if (cur.line > cm.doc.first) {
          let prev = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.getLine)(cm.doc, cur.line - 1).text
          if (prev) {
            cur = new _line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos(cur.line, 1)
            cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
                            prev.charAt(prev.length - 1),
                            (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(cur.line - 1, prev.length - 1), cur, "+transpose")
          }
        }
      }
      newSel.push(new _model_selection_js__WEBPACK_IMPORTED_MODULE_6__.Range(cur, cur))
    }
    cm.setSelections(newSel)
  }),
  newlineAndIndent: cm => (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.runInOp)(cm, () => {
    let sels = cm.listSelections()
    for (let i = sels.length - 1; i >= 0; i--)
      cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input")
    sels = cm.listSelections()
    for (let i = 0; i < sels.length; i++)
      cm.indentLine(sels[i].from().line, null, true)
    ;(0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.ensureCursorVisible)(cm)
  }),
  openLine: cm => cm.replaceSelection("\n", "start"),
  toggleOverwrite: cm => cm.toggleOverwrite()
}


function lineStart(cm, lineN) {
  let line = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.getLine)(cm.doc, lineN)
  let visual = (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_4__.visualLine)(line)
  if (visual != line) lineN = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.lineNo)(visual)
  return (0,_input_movement_js__WEBPACK_IMPORTED_MODULE_2__.endOfLine)(true, cm, visual, lineN, 1)
}
function lineEnd(cm, lineN) {
  let line = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.getLine)(cm.doc, lineN)
  let visual = (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_4__.visualLineEnd)(line)
  if (visual != line) lineN = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.lineNo)(visual)
  return (0,_input_movement_js__WEBPACK_IMPORTED_MODULE_2__.endOfLine)(true, cm, line, lineN, -1)
}
function lineStartSmart(cm, pos) {
  let start = lineStart(cm, pos.line)
  let line = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.getLine)(cm.doc, start.line)
  let order = (0,_util_bidi_js__WEBPACK_IMPORTED_MODULE_8__.getOrder)(line, cm.doc.direction)
  if (!order || order[0].level == 0) {
    let firstNonWS = Math.max(start.ch, line.text.search(/\S/))
    let inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch
    return (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(start.line, inWS ? 0 : firstNonWS, start.sticky)
  }
  return start
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/edit/deleteNearSelection.js":
/*!****************************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/edit/deleteNearSelection.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteNearSelection: () => (/* binding */ deleteNearSelection)
/* harmony export */ });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./src/third_party/codemirror/package/src/display/operations.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/scrolling.js */ "./src/third_party/codemirror/package/src/display/scrolling.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _model_changes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/changes.js */ "./src/third_party/codemirror/package/src/model/changes.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");






// Helper for deleting text near the selection(s), used to implement
// backspace, delete, and similar functionality.
function deleteNearSelection(cm, compute) {
  let ranges = cm.doc.sel.ranges, kill = []
  // Build up a set of ranges to kill first, merging overlapping
  // ranges.
  for (let i = 0; i < ranges.length; i++) {
    let toKill = compute(ranges[i])
    while (kill.length && (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.cmp)(toKill.from, (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_4__.lst)(kill).to) <= 0) {
      let replaced = kill.pop()
      if ((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.cmp)(replaced.from, toKill.from) < 0) {
        toKill.from = replaced.from
        break
      }
    }
    kill.push(toKill)
  }
  // Next, remove those actual ranges.
  (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.runInOp)(cm, () => {
    for (let i = kill.length - 1; i >= 0; i--)
      (0,_model_changes_js__WEBPACK_IMPORTED_MODULE_3__.replaceRange)(cm.doc, "", kill[i].from, kill[i].to, "+delete")
    ;(0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.ensureCursorVisible)(cm)
  })
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/input/movement.js":
/*!******************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/input/movement.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endOfLine: () => (/* binding */ endOfLine),
/* harmony export */   moveLogically: () => (/* binding */ moveLogically),
/* harmony export */   moveVisually: () => (/* binding */ moveVisually)
/* harmony export */ });
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _util_bidi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/bidi.js */ "./src/third_party/codemirror/package/src/util/bidi.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");





function moveCharLogically(line, ch, dir) {
  let target = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_3__.skipExtendingChars)(line.text, ch + dir, dir)
  return target < 0 || target > line.text.length ? null : target
}

function moveLogically(line, start, dir) {
  let ch = moveCharLogically(line, start.ch, dir)
  return ch == null ? null : new _line_pos_js__WEBPACK_IMPORTED_MODULE_0__.Pos(start.line, ch, dir < 0 ? "after" : "before")
}

function endOfLine(visually, cm, lineObj, lineNo, dir) {
  if (visually) {
    if (cm.doc.direction == "rtl") dir = -dir
    let order = (0,_util_bidi_js__WEBPACK_IMPORTED_MODULE_2__.getOrder)(lineObj, cm.doc.direction)
    if (order) {
      let part = dir < 0 ? (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_3__.lst)(order) : order[0]
      let moveInStorageOrder = (dir < 0) == (part.level == 1)
      let sticky = moveInStorageOrder ? "after" : "before"
      let ch
      // With a wrapped rtl chunk (possibly spanning multiple bidi parts),
      // it could be that the last bidi part is not on the last visual line,
      // since visual lines contain content order-consecutive chunks.
      // Thus, in rtl, we are looking for the first (content-order) character
      // in the rtl chunk that is on the last line (that is, the same line
      // as the last (content-order) character).
      if (part.level > 0 || cm.doc.direction == "rtl") {
        let prep = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__.prepareMeasureForLine)(cm, lineObj)
        ch = dir < 0 ? lineObj.text.length - 1 : 0
        let targetTop = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__.measureCharPrepared)(cm, prep, ch).top
        ch = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_3__.findFirst)(ch => (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__.measureCharPrepared)(cm, prep, ch).top == targetTop, (dir < 0) == (part.level == 1) ? part.from : part.to - 1, ch)
        if (sticky == "before") ch = moveCharLogically(lineObj, ch, 1)
      } else ch = dir < 0 ? part.to : part.from
      return new _line_pos_js__WEBPACK_IMPORTED_MODULE_0__.Pos(lineNo, ch, sticky)
    }
  }
  return new _line_pos_js__WEBPACK_IMPORTED_MODULE_0__.Pos(lineNo, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after")
}

function moveVisually(cm, line, start, dir) {
  let bidi = (0,_util_bidi_js__WEBPACK_IMPORTED_MODULE_2__.getOrder)(line, cm.doc.direction)
  if (!bidi) return moveLogically(line, start, dir)
  if (start.ch >= line.text.length) {
    start.ch = line.text.length
    start.sticky = "before"
  } else if (start.ch <= 0) {
    start.ch = 0
    start.sticky = "after"
  }
  let partPos = (0,_util_bidi_js__WEBPACK_IMPORTED_MODULE_2__.getBidiPartAt)(bidi, start.ch, start.sticky), part = bidi[partPos]
  if (cm.doc.direction == "ltr" && part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
    // Case 1: We move within an ltr part in an ltr editor. Even with wrapped lines,
    // nothing interesting happens.
    return moveLogically(line, start, dir)
  }

  let mv = (pos, dir) => moveCharLogically(line, pos instanceof _line_pos_js__WEBPACK_IMPORTED_MODULE_0__.Pos ? pos.ch : pos, dir)
  let prep
  let getWrappedLineExtent = ch => {
    if (!cm.options.lineWrapping) return {begin: 0, end: line.text.length}
    prep = prep || (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__.prepareMeasureForLine)(cm, line)
    return (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__.wrappedLineExtentChar)(cm, line, prep, ch)
  }
  let wrappedLineExtent = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch)

  if (cm.doc.direction == "rtl" || part.level == 1) {
    let moveInStorageOrder = (part.level == 1) == (dir < 0)
    let ch = mv(start, moveInStorageOrder ? 1 : -1)
    if (ch != null && (!moveInStorageOrder ? ch >= part.from && ch >= wrappedLineExtent.begin : ch <= part.to && ch <= wrappedLineExtent.end)) {
      // Case 2: We move within an rtl part or in an rtl editor on the same visual line
      let sticky = moveInStorageOrder ? "before" : "after"
      return new _line_pos_js__WEBPACK_IMPORTED_MODULE_0__.Pos(start.line, ch, sticky)
    }
  }

  // Case 3: Could not move within this bidi part in this visual line, so leave
  // the current bidi part

  let searchInVisualLine = (partPos, dir, wrappedLineExtent) => {
    let getRes = (ch, moveInStorageOrder) => moveInStorageOrder
      ? new _line_pos_js__WEBPACK_IMPORTED_MODULE_0__.Pos(start.line, mv(ch, 1), "before")
      : new _line_pos_js__WEBPACK_IMPORTED_MODULE_0__.Pos(start.line, ch, "after")

    for (; partPos >= 0 && partPos < bidi.length; partPos += dir) {
      let part = bidi[partPos]
      let moveInStorageOrder = (dir > 0) == (part.level != 1)
      let ch = moveInStorageOrder ? wrappedLineExtent.begin : mv(wrappedLineExtent.end, -1)
      if (part.from <= ch && ch < part.to) return getRes(ch, moveInStorageOrder)
      ch = moveInStorageOrder ? part.from : mv(part.to, -1)
      if (wrappedLineExtent.begin <= ch && ch < wrappedLineExtent.end) return getRes(ch, moveInStorageOrder)
    }
  }

  // Case 3a: Look for other bidi parts on the same visual line
  let res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent)
  if (res) return res

  // Case 3b: Look for other bidi parts on the next visual line
  let nextCh = dir > 0 ? wrappedLineExtent.end : mv(wrappedLineExtent.begin, -1)
  if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
    res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh))
    if (res) return res
  }

  // Case 4: Nowhere to move
  return null
}


/***/ })

}]);