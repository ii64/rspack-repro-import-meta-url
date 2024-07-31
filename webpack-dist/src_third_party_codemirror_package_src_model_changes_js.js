"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_model_changes_js"],{

/***/ "./src/third_party/codemirror/package/src/model/changes.js":
/*!*****************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/model/changes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeLine: () => (/* binding */ changeLine),
/* harmony export */   makeChange: () => (/* binding */ makeChange),
/* harmony export */   makeChangeFromHistory: () => (/* binding */ makeChangeFromHistory),
/* harmony export */   replaceRange: () => (/* binding */ replaceRange)
/* harmony export */ });
/* harmony import */ var _display_highlight_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/highlight_worker.js */ "./src/third_party/codemirror/package/src/display/highlight_worker.js");
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/operations.js */ "./src/third_party/codemirror/package/src/display/operations.js");
/* harmony import */ var _display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/view_tracking.js */ "./src/third_party/codemirror/package/src/display/view_tracking.js");
/* harmony import */ var _line_highlight_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/highlight.js */ "./src/third_party/codemirror/package/src/line/highlight.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../line/saw_special_spans.js */ "./src/third_party/codemirror/package/src/line/saw_special_spans.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../line/spans.js */ "./src/third_party/codemirror/package/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/operation_group.js */ "./src/third_party/codemirror/package/src/util/operation_group.js");
/* harmony import */ var _change_measurement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./change_measurement.js */ "./src/third_party/codemirror/package/src/model/change_measurement.js");
/* harmony import */ var _document_data_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./document_data.js */ "./src/third_party/codemirror/package/src/model/document_data.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./history.js */ "./src/third_party/codemirror/package/src/model/history.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./selection.js */ "./src/third_party/codemirror/package/src/model/selection.js");
/* harmony import */ var _selection_updates_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./selection_updates.js */ "./src/third_party/codemirror/package/src/model/selection_updates.js");



















// UPDATING

// Allow "beforeChange" event handlers to influence a change
function filterChange(doc, change, update) {
  let obj = {
    canceled: false,
    from: change.from,
    to: change.to,
    text: change.text,
    origin: change.origin,
    cancel: () => obj.canceled = true
  }
  if (update) obj.update = (from, to, text, origin) => {
    if (from) obj.from = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(doc, from)
    if (to) obj.to = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(doc, to)
    if (text) obj.text = text
    if (origin !== undefined) obj.origin = origin
  }
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_9__.signal)(doc, "beforeChange", doc, obj)
  if (doc.cm) (0,_util_event_js__WEBPACK_IMPORTED_MODULE_9__.signal)(doc.cm, "beforeChange", doc.cm, obj)

  if (obj.canceled) {
    if (doc.cm) doc.cm.curOp.updateInput = 2
    return null
  }
  return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
}

// Apply a change to a document, and add it to the document's
// history, and propagating it to all linked documents.
function makeChange(doc, change, ignoreReadOnly) {
  if (doc.cm) {
    if (!doc.cm.curOp) return (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_1__.operation)(doc.cm, makeChange)(doc, change, ignoreReadOnly)
    if (doc.cm.state.suppressEdits) return
  }

  if ((0,_util_event_js__WEBPACK_IMPORTED_MODULE_9__.hasHandler)(doc, "beforeChange") || doc.cm && (0,_util_event_js__WEBPACK_IMPORTED_MODULE_9__.hasHandler)(doc.cm, "beforeChange")) {
    change = filterChange(doc, change, true)
    if (!change) return
  }

  // Possibly split or suppress the update based on the presence
  // of read-only spans in its range.
  let split = _line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_5__.sawReadOnlySpans && !ignoreReadOnly && (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_6__.removeReadOnlyRanges)(doc, change.from, change.to)
  if (split) {
    for (let i = split.length - 1; i >= 0; --i)
      makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text, origin: change.origin})
  } else {
    makeChangeInner(doc, change)
  }
}

function makeChangeInner(doc, change) {
  if (change.text.length == 1 && change.text[0] == "" && (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.cmp)(change.from, change.to) == 0) return
  let selAfter = (0,_change_measurement_js__WEBPACK_IMPORTED_MODULE_12__.computeSelAfterChange)(doc, change)
  ;(0,_history_js__WEBPACK_IMPORTED_MODULE_14__.addChangeToHistory)(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN)

  makeChangeSingleDoc(doc, change, selAfter, (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_6__.stretchSpansOverChange)(doc, change))
  let rebased = []

  ;(0,_document_data_js__WEBPACK_IMPORTED_MODULE_13__.linkedDocs)(doc, (doc, sharedHist) => {
    if (!sharedHist && (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_10__.indexOf)(rebased, doc.history) == -1) {
      rebaseHist(doc.history, change)
      rebased.push(doc.history)
    }
    makeChangeSingleDoc(doc, change, null, (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_6__.stretchSpansOverChange)(doc, change))
  })
}

// Revert a change stored in a document's history.
function makeChangeFromHistory(doc, type, allowSelectionOnly) {
  let suppress = doc.cm && doc.cm.state.suppressEdits
  if (suppress && !allowSelectionOnly) return

  let hist = doc.history, event, selAfter = doc.sel
  let source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done

  // Verify that there is a useable event (so that ctrl-z won't
  // needlessly clear selection events)
  let i = 0
  for (; i < source.length; i++) {
    event = source[i]
    if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
      break
  }
  if (i == source.length) return
  hist.lastOrigin = hist.lastSelOrigin = null

  for (;;) {
    event = source.pop()
    if (event.ranges) {
      (0,_history_js__WEBPACK_IMPORTED_MODULE_14__.pushSelectionToHistory)(event, dest)
      if (allowSelectionOnly && !event.equals(doc.sel)) {
        (0,_selection_updates_js__WEBPACK_IMPORTED_MODULE_16__.setSelection)(doc, event, {clearRedo: false})
        return
      }
      selAfter = event
    } else if (suppress) {
      source.push(event)
      return
    } else break
  }

  // Build up a reverse change object to add to the opposite history
  // stack (redo when undoing, and vice versa).
  let antiChanges = []
  ;(0,_history_js__WEBPACK_IMPORTED_MODULE_14__.pushSelectionToHistory)(selAfter, dest)
  dest.push({changes: antiChanges, generation: hist.generation})
  hist.generation = event.generation || ++hist.maxGeneration

  let filter = (0,_util_event_js__WEBPACK_IMPORTED_MODULE_9__.hasHandler)(doc, "beforeChange") || doc.cm && (0,_util_event_js__WEBPACK_IMPORTED_MODULE_9__.hasHandler)(doc.cm, "beforeChange")

  for (let i = event.changes.length - 1; i >= 0; --i) {
    let change = event.changes[i]
    change.origin = type
    if (filter && !filterChange(doc, change, false)) {
      source.length = 0
      return
    }

    antiChanges.push((0,_history_js__WEBPACK_IMPORTED_MODULE_14__.historyChangeFromChange)(doc, change))

    let after = i ? (0,_change_measurement_js__WEBPACK_IMPORTED_MODULE_12__.computeSelAfterChange)(doc, change) : (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_10__.lst)(source)
    makeChangeSingleDoc(doc, change, after, (0,_history_js__WEBPACK_IMPORTED_MODULE_14__.mergeOldSpans)(doc, change))
    if (!i && doc.cm) doc.cm.scrollIntoView({from: change.from, to: (0,_change_measurement_js__WEBPACK_IMPORTED_MODULE_12__.changeEnd)(change)})
    let rebased = []

    // Propagate to the linked documents
    ;(0,_document_data_js__WEBPACK_IMPORTED_MODULE_13__.linkedDocs)(doc, (doc, sharedHist) => {
      if (!sharedHist && (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_10__.indexOf)(rebased, doc.history) == -1) {
        rebaseHist(doc.history, change)
        rebased.push(doc.history)
      }
      makeChangeSingleDoc(doc, change, null, (0,_history_js__WEBPACK_IMPORTED_MODULE_14__.mergeOldSpans)(doc, change))
    })
  }
}

// Sub-views need their line numbers shifted when text is added
// above or below them in the parent document.
function shiftDoc(doc, distance) {
  if (distance == 0) return
  doc.first += distance
  doc.sel = new _selection_js__WEBPACK_IMPORTED_MODULE_15__.Selection((0,_util_misc_js__WEBPACK_IMPORTED_MODULE_10__.map)(doc.sel.ranges, range => new _selection_js__WEBPACK_IMPORTED_MODULE_15__.Range(
    (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.Pos)(range.anchor.line + distance, range.anchor.ch),
    (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.Pos)(range.head.line + distance, range.head.ch)
  )), doc.sel.primIndex)
  if (doc.cm) {
    (0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__.regChange)(doc.cm, doc.first, doc.first - distance, distance)
    for (let d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
      (0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__.regLineChange)(doc.cm, l, "gutter")
  }
}

// More lower-level change function, handling only a single document
// (not linked ones).
function makeChangeSingleDoc(doc, change, selAfter, spans) {
  if (doc.cm && !doc.cm.curOp)
    return (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_1__.operation)(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans)

  if (change.to.line < doc.first) {
    shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line))
    return
  }
  if (change.from.line > doc.lastLine()) return

  // Clip the change to the size of this doc
  if (change.from.line < doc.first) {
    let shift = change.text.length - 1 - (doc.first - change.from.line)
    shiftDoc(doc, shift)
    change = {from: (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.Pos)(doc.first, 0), to: (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.Pos)(change.to.line + shift, change.to.ch),
              text: [(0,_util_misc_js__WEBPACK_IMPORTED_MODULE_10__.lst)(change.text)], origin: change.origin}
  }
  let last = doc.lastLine()
  if (change.to.line > last) {
    change = {from: change.from, to: (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.Pos)(last, (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_7__.getLine)(doc, last).text.length),
              text: [change.text[0]], origin: change.origin}
  }

  change.removed = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_7__.getBetween)(doc, change.from, change.to)

  if (!selAfter) selAfter = (0,_change_measurement_js__WEBPACK_IMPORTED_MODULE_12__.computeSelAfterChange)(doc, change)
  if (doc.cm) makeChangeSingleDocInEditor(doc.cm, change, spans)
  else (0,_document_data_js__WEBPACK_IMPORTED_MODULE_13__.updateDoc)(doc, change, spans)
  ;(0,_selection_updates_js__WEBPACK_IMPORTED_MODULE_16__.setSelectionNoUndo)(doc, selAfter, _util_misc_js__WEBPACK_IMPORTED_MODULE_10__.sel_dontScroll)

  if (doc.cantEdit && (0,_selection_updates_js__WEBPACK_IMPORTED_MODULE_16__.skipAtomic)(doc, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.Pos)(doc.firstLine(), 0)))
    doc.cantEdit = false
}

// Handle the interaction of a change to a document with the editor
// that this document is part of.
function makeChangeSingleDocInEditor(cm, change, spans) {
  let doc = cm.doc, display = cm.display, from = change.from, to = change.to

  let recomputeMaxLength = false, checkWidthStart = from.line
  if (!cm.options.lineWrapping) {
    checkWidthStart = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_7__.lineNo)((0,_line_spans_js__WEBPACK_IMPORTED_MODULE_6__.visualLine)((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_7__.getLine)(doc, from.line)))
    doc.iter(checkWidthStart, to.line + 1, line => {
      if (line == display.maxLine) {
        recomputeMaxLength = true
        return true
      }
    })
  }

  if (doc.sel.contains(change.from, change.to) > -1)
    (0,_util_event_js__WEBPACK_IMPORTED_MODULE_9__.signalCursorActivity)(cm)

  ;(0,_document_data_js__WEBPACK_IMPORTED_MODULE_13__.updateDoc)(doc, change, spans, (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_8__.estimateHeight)(cm))

  if (!cm.options.lineWrapping) {
    doc.iter(checkWidthStart, from.line + change.text.length, line => {
      let len = (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_6__.lineLength)(line)
      if (len > display.maxLineLength) {
        display.maxLine = line
        display.maxLineLength = len
        display.maxLineChanged = true
        recomputeMaxLength = false
      }
    })
    if (recomputeMaxLength) cm.curOp.updateMaxLine = true
  }

  (0,_line_highlight_js__WEBPACK_IMPORTED_MODULE_3__.retreatFrontier)(doc, from.line)
  ;(0,_display_highlight_worker_js__WEBPACK_IMPORTED_MODULE_0__.startWorker)(cm, 400)

  let lendiff = change.text.length - (to.line - from.line) - 1
  // Remember that these lines changed, for updating the display
  if (change.full)
    (0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__.regChange)(cm)
  else if (from.line == to.line && change.text.length == 1 && !(0,_document_data_js__WEBPACK_IMPORTED_MODULE_13__.isWholeLineUpdate)(cm.doc, change))
    (0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__.regLineChange)(cm, from.line, "text")
  else
    (0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__.regChange)(cm, from.line, to.line + 1, lendiff)

  let changesHandler = (0,_util_event_js__WEBPACK_IMPORTED_MODULE_9__.hasHandler)(cm, "changes"), changeHandler = (0,_util_event_js__WEBPACK_IMPORTED_MODULE_9__.hasHandler)(cm, "change")
  if (changeHandler || changesHandler) {
    let obj = {
      from: from, to: to,
      text: change.text,
      removed: change.removed,
      origin: change.origin
    }
    if (changeHandler) (0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_11__.signalLater)(cm, "change", cm, obj)
    if (changesHandler) (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj)
  }
  cm.display.selForContextMenu = null
}

function replaceRange(doc, code, from, to, origin) {
  if (!to) to = from
  if ((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.cmp)(to, from) < 0) [from, to] = [to, from]
  if (typeof code == "string") code = doc.splitLines(code)
  makeChange(doc, {from, to, text: code, origin})
}

// Rebasing/resetting history to deal with externally-sourced changes

function rebaseHistSelSingle(pos, from, to, diff) {
  if (to < pos.line) {
    pos.line += diff
  } else if (from < pos.line) {
    pos.line = from
    pos.ch = 0
  }
}

// Tries to rebase an array of history events given a change in the
// document. If the change touches the same lines as the event, the
// event, and everything 'behind' it, is discarded. If the change is
// before the event, the event's positions are updated. Uses a
// copy-on-write scheme for the positions, to avoid having to
// reallocate them all on every rebase, but also avoid problems with
// shared position objects being unsafely updated.
function rebaseHistArray(array, from, to, diff) {
  for (let i = 0; i < array.length; ++i) {
    let sub = array[i], ok = true
    if (sub.ranges) {
      if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true }
      for (let j = 0; j < sub.ranges.length; j++) {
        rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff)
        rebaseHistSelSingle(sub.ranges[j].head, from, to, diff)
      }
      continue
    }
    for (let j = 0; j < sub.changes.length; ++j) {
      let cur = sub.changes[j]
      if (to < cur.from.line) {
        cur.from = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.Pos)(cur.from.line + diff, cur.from.ch)
        cur.to = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.Pos)(cur.to.line + diff, cur.to.ch)
      } else if (from <= cur.to.line) {
        ok = false
        break
      }
    }
    if (!ok) {
      array.splice(0, i + 1)
      i = 0
    }
  }
}

function rebaseHist(hist, change) {
  let from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1
  rebaseHistArray(hist.done, from, to, diff)
  rebaseHistArray(hist.undone, from, to, diff)
}

// Utility for applying a change to a line by handle or number,
// returning the number and optionally registering the line as
// changed.
function changeLine(doc, handle, changeType, op) {
  let no = handle, line = handle
  if (typeof handle == "number") line = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_7__.getLine)(doc, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipLine)(doc, handle))
  else no = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_7__.lineNo)(handle)
  if (no == null) return null
  if (op(line, no) && doc.cm) (0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__.regLineChange)(doc.cm, no, changeType)
  return line
}


/***/ }),

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