"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_model_selection_updates_js-_ff1b1"],{

/***/ "./src/third_party/codemirror/package/src/model/selection_updates.js":
/*!***************************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/model/selection_updates.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extendRange: () => (/* binding */ extendRange),
/* harmony export */   extendSelection: () => (/* binding */ extendSelection),
/* harmony export */   extendSelections: () => (/* binding */ extendSelections),
/* harmony export */   reCheckSelection: () => (/* binding */ reCheckSelection),
/* harmony export */   replaceOneSelection: () => (/* binding */ replaceOneSelection),
/* harmony export */   selectAll: () => (/* binding */ selectAll),
/* harmony export */   setSelection: () => (/* binding */ setSelection),
/* harmony export */   setSelectionNoUndo: () => (/* binding */ setSelectionNoUndo),
/* harmony export */   setSelectionReplaceHistory: () => (/* binding */ setSelectionReplaceHistory),
/* harmony export */   setSimpleSelection: () => (/* binding */ setSimpleSelection),
/* harmony export */   skipAtomic: () => (/* binding */ skipAtomic)
/* harmony export */ });
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/scrolling.js */ "./src/third_party/codemirror/package/src/display/scrolling.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/operation_group.js */ "./src/third_party/codemirror/package/src/util/operation_group.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.js */ "./src/third_party/codemirror/package/src/model/history.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selection.js */ "./src/third_party/codemirror/package/src/model/selection.js");










// The 'scroll' parameter given to many of these indicated whether
// the new cursor position should be scrolled into view after
// modifying the selection.

// If shift is held or the extend flag is set, extends a range to
// include a given position (and optionally a second position).
// Otherwise, simply returns the range between the given positions.
// Used for cursor motion and such.
function extendRange(range, head, other, extend) {
  if (extend) {
    let anchor = range.anchor
    if (other) {
      let posBefore = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.cmp)(head, anchor) < 0
      if (posBefore != ((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.cmp)(other, anchor) < 0)) {
        anchor = head
        head = other
      } else if (posBefore != ((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.cmp)(head, other) < 0)) {
        head = other
      }
    }
    return new _selection_js__WEBPACK_IMPORTED_MODULE_7__.Range(anchor, head)
  } else {
    return new _selection_js__WEBPACK_IMPORTED_MODULE_7__.Range(other || head, head)
  }
}

// Extend the primary selection range, discard the rest.
function extendSelection(doc, head, other, options, extend) {
  if (extend == null) extend = doc.cm && (doc.cm.display.shift || doc.extend)
  setSelection(doc, new _selection_js__WEBPACK_IMPORTED_MODULE_7__.Selection([extendRange(doc.sel.primary(), head, other, extend)], 0), options)
}

// Extend all selections (pos is an array of selections with length
// equal the number of selections)
function extendSelections(doc, heads, options) {
  let out = []
  let extend = doc.cm && (doc.cm.display.shift || doc.extend)
  for (let i = 0; i < doc.sel.ranges.length; i++)
    out[i] = extendRange(doc.sel.ranges[i], heads[i], null, extend)
  let newSel = (0,_selection_js__WEBPACK_IMPORTED_MODULE_7__.normalizeSelection)(doc.cm, out, doc.sel.primIndex)
  setSelection(doc, newSel, options)
}

// Updates a single range in the selection.
function replaceOneSelection(doc, i, range, options) {
  let ranges = doc.sel.ranges.slice(0)
  ranges[i] = range
  setSelection(doc, (0,_selection_js__WEBPACK_IMPORTED_MODULE_7__.normalizeSelection)(doc.cm, ranges, doc.sel.primIndex), options)
}

// Reset the selection to a single range.
function setSimpleSelection(doc, anchor, head, options) {
  setSelection(doc, (0,_selection_js__WEBPACK_IMPORTED_MODULE_7__.simpleSelection)(anchor, head), options)
}

// Give beforeSelectionChange handlers a change to influence a
// selection update.
function filterSelectionChange(doc, sel, options) {
  let obj = {
    ranges: sel.ranges,
    update: function(ranges) {
      this.ranges = []
      for (let i = 0; i < ranges.length; i++)
        this.ranges[i] = new _selection_js__WEBPACK_IMPORTED_MODULE_7__.Range((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.clipPos)(doc, ranges[i].anchor),
                                   (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.clipPos)(doc, ranges[i].head))
    },
    origin: options && options.origin
  }
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_3__.signal)(doc, "beforeSelectionChange", doc, obj)
  if (doc.cm) (0,_util_event_js__WEBPACK_IMPORTED_MODULE_3__.signal)(doc.cm, "beforeSelectionChange", doc.cm, obj)
  if (obj.ranges != sel.ranges) return (0,_selection_js__WEBPACK_IMPORTED_MODULE_7__.normalizeSelection)(doc.cm, obj.ranges, obj.ranges.length - 1)
  else return sel
}

function setSelectionReplaceHistory(doc, sel, options) {
  let done = doc.history.done, last = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_4__.lst)(done)
  if (last && last.ranges) {
    done[done.length - 1] = sel
    setSelectionNoUndo(doc, sel, options)
  } else {
    setSelection(doc, sel, options)
  }
}

// Set a new selection.
function setSelection(doc, sel, options) {
  setSelectionNoUndo(doc, sel, options)
  ;(0,_history_js__WEBPACK_IMPORTED_MODULE_6__.addSelectionToHistory)(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options)
}

function setSelectionNoUndo(doc, sel, options) {
  if ((0,_util_event_js__WEBPACK_IMPORTED_MODULE_3__.hasHandler)(doc, "beforeSelectionChange") || doc.cm && (0,_util_event_js__WEBPACK_IMPORTED_MODULE_3__.hasHandler)(doc.cm, "beforeSelectionChange"))
    sel = filterSelectionChange(doc, sel, options)

  let bias = options && options.bias ||
    ((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.cmp)(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1)
  setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true))

  if (!(options && options.scroll === false) && doc.cm && doc.cm.getOption("readOnly") != "nocursor")
    (0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_0__.ensureCursorVisible)(doc.cm)
}

function setSelectionInner(doc, sel) {
  if (sel.equals(doc.sel)) return

  doc.sel = sel

  if (doc.cm) {
    doc.cm.curOp.updateInput = 1
    doc.cm.curOp.selectionChanged = true
    ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_3__.signalCursorActivity)(doc.cm)
  }
  (0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_5__.signalLater)(doc, "cursorActivity", doc)
}

// Verify that the selection does not partially select any atomic
// marked ranges.
function reCheckSelection(doc) {
  setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false))
}

// Return a selection that does not partially select any atomic
// ranges.
function skipAtomicInSelection(doc, sel, bias, mayClear) {
  let out
  for (let i = 0; i < sel.ranges.length; i++) {
    let range = sel.ranges[i]
    let old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i]
    let newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear)
    let newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear)
    if (out || newAnchor != range.anchor || newHead != range.head) {
      if (!out) out = sel.ranges.slice(0, i)
      out[i] = new _selection_js__WEBPACK_IMPORTED_MODULE_7__.Range(newAnchor, newHead)
    }
  }
  return out ? (0,_selection_js__WEBPACK_IMPORTED_MODULE_7__.normalizeSelection)(doc.cm, out, sel.primIndex) : sel
}

function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
  let line = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__.getLine)(doc, pos.line)
  if (line.markedSpans) for (let i = 0; i < line.markedSpans.length; ++i) {
    let sp = line.markedSpans[i], m = sp.marker

    // Determine if we should prevent the cursor being placed to the left/right of an atomic marker
    // Historically this was determined using the inclusiveLeft/Right option, but the new way to control it
    // is with selectLeft/Right
    let preventCursorLeft = ("selectLeft" in m) ? !m.selectLeft : m.inclusiveLeft
    let preventCursorRight = ("selectRight" in m) ? !m.selectRight : m.inclusiveRight

    if ((sp.from == null || (preventCursorLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
        (sp.to == null || (preventCursorRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
      if (mayClear) {
        (0,_util_event_js__WEBPACK_IMPORTED_MODULE_3__.signal)(m, "beforeCursorEnter")
        if (m.explicitlyCleared) {
          if (!line.markedSpans) break
          else {--i; continue}
        }
      }
      if (!m.atomic) continue

      if (oldPos) {
        let near = m.find(dir < 0 ? 1 : -1), diff
        if (dir < 0 ? preventCursorRight : preventCursorLeft)
          near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null)
        if (near && near.line == pos.line && (diff = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.cmp)(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
          return skipAtomicInner(doc, near, pos, dir, mayClear)
      }

      let far = m.find(dir < 0 ? -1 : 1)
      if (dir < 0 ? preventCursorLeft : preventCursorRight)
        far = movePos(doc, far, dir, far.line == pos.line ? line : null)
      return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
    }
  }
  return pos
}

// Ensure a given position is not inside an atomic range.
function skipAtomic(doc, pos, oldPos, bias, mayClear) {
  let dir = bias || 1
  let found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
      (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
      skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
      (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true))
  if (!found) {
    doc.cantEdit = true
    return (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.Pos)(doc.first, 0)
  }
  return found
}

function movePos(doc, pos, dir, line) {
  if (dir < 0 && pos.ch == 0) {
    if (pos.line > doc.first) return (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.clipPos)(doc, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.Pos)(pos.line - 1))
    else return null
  } else if (dir > 0 && pos.ch == (line || (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__.getLine)(doc, pos.line)).text.length) {
    if (pos.line < doc.first + doc.size - 1) return (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.Pos)(pos.line + 1, 0)
    else return null
  } else {
    return new _line_pos_js__WEBPACK_IMPORTED_MODULE_1__.Pos(pos.line, pos.ch + dir)
  }
}

function selectAll(cm) {
  cm.setSelection((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.Pos)(cm.firstLine(), 0), (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.Pos)(cm.lastLine()), _util_misc_js__WEBPACK_IMPORTED_MODULE_4__.sel_dontScroll)
}


/***/ })

}]);