"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_model_history_js"],{

/***/ "./src/third_party/codemirror/package/src/display/mode_state.js":
/*!**********************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/mode_state.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMode: () => (/* binding */ loadMode),
/* harmony export */   resetModeState: () => (/* binding */ resetModeState)
/* harmony export */ });
/* harmony import */ var _modes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modes.js */ "./src/third_party/codemirror/package/src/modes.js");
/* harmony import */ var _highlight_worker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlight_worker.js */ "./src/third_party/codemirror/package/src/display/highlight_worker.js");
/* harmony import */ var _view_tracking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view_tracking.js */ "./src/third_party/codemirror/package/src/display/view_tracking.js");





// Used to get the editor into a consistent state again when options change.

function loadMode(cm) {
  cm.doc.mode = (0,_modes_js__WEBPACK_IMPORTED_MODULE_0__.getMode)(cm.options, cm.doc.modeOption)
  resetModeState(cm)
}

function resetModeState(cm) {
  cm.doc.iter(line => {
    if (line.stateAfter) line.stateAfter = null
    if (line.styles) line.styles = null
  })
  cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first
  ;(0,_highlight_worker_js__WEBPACK_IMPORTED_MODULE_1__.startWorker)(cm, 100)
  cm.state.modeGen++
  if (cm.curOp) (0,_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__.regChange)(cm)
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/model/change_measurement.js":
/*!****************************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/model/change_measurement.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeEnd: () => (/* binding */ changeEnd),
/* harmony export */   computeReplacedSel: () => (/* binding */ computeReplacedSel),
/* harmony export */   computeSelAfterChange: () => (/* binding */ computeSelAfterChange)
/* harmony export */ });
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selection.js */ "./src/third_party/codemirror/package/src/model/selection.js");





// Compute the position of the end of a change (its 'to' property
// refers to the pre-change end).
function changeEnd(change) {
  if (!change.text) return change.to
  return (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.Pos)(change.from.line + change.text.length - 1,
             (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_1__.lst)(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
}

// Adjust a position to refer to the post-change position of the
// same text, or the end of the change if the change covers it.
function adjustForChange(pos, change) {
  if ((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.cmp)(pos, change.from) < 0) return pos
  if ((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.cmp)(pos, change.to) <= 0) return changeEnd(change)

  let line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch
  if (pos.line == change.to.line) ch += changeEnd(change).ch - change.to.ch
  return (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.Pos)(line, ch)
}

function computeSelAfterChange(doc, change) {
  let out = []
  for (let i = 0; i < doc.sel.ranges.length; i++) {
    let range = doc.sel.ranges[i]
    out.push(new _selection_js__WEBPACK_IMPORTED_MODULE_2__.Range(adjustForChange(range.anchor, change),
                       adjustForChange(range.head, change)))
  }
  return (0,_selection_js__WEBPACK_IMPORTED_MODULE_2__.normalizeSelection)(doc.cm, out, doc.sel.primIndex)
}

function offsetPos(pos, old, nw) {
  if (pos.line == old.line)
    return (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.Pos)(nw.line, pos.ch - old.ch + nw.ch)
  else
    return (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.Pos)(nw.line + (pos.line - old.line), pos.ch)
}

// Used by replaceSelections to allow moving the selection to the
// start or around the replaced test. Hint may be "start" or "around".
function computeReplacedSel(doc, changes, hint) {
  let out = []
  let oldPrev = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.Pos)(doc.first, 0), newPrev = oldPrev
  for (let i = 0; i < changes.length; i++) {
    let change = changes[i]
    let from = offsetPos(change.from, oldPrev, newPrev)
    let to = offsetPos(changeEnd(change), oldPrev, newPrev)
    oldPrev = change.to
    newPrev = to
    if (hint == "around") {
      let range = doc.sel.ranges[i], inv = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.cmp)(range.head, range.anchor) < 0
      out[i] = new _selection_js__WEBPACK_IMPORTED_MODULE_2__.Range(inv ? to : from, inv ? from : to)
    } else {
      out[i] = new _selection_js__WEBPACK_IMPORTED_MODULE_2__.Range(from, from)
    }
  }
  return new _selection_js__WEBPACK_IMPORTED_MODULE_2__.Selection(out, doc.sel.primIndex)
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/model/document_data.js":
/*!***********************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/model/document_data.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachDoc: () => (/* binding */ attachDoc),
/* harmony export */   directionChanged: () => (/* binding */ directionChanged),
/* harmony export */   isWholeLineUpdate: () => (/* binding */ isWholeLineUpdate),
/* harmony export */   linkedDocs: () => (/* binding */ linkedDocs),
/* harmony export */   updateDoc: () => (/* binding */ updateDoc)
/* harmony export */ });
/* harmony import */ var _display_mode_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/mode_state.js */ "./src/third_party/codemirror/package/src/display/mode_state.js");
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/operations.js */ "./src/third_party/codemirror/package/src/display/operations.js");
/* harmony import */ var _display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/view_tracking.js */ "./src/third_party/codemirror/package/src/display/view_tracking.js");
/* harmony import */ var _line_line_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/line_data.js */ "./src/third_party/codemirror/package/src/line/line_data.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/spans.js */ "./src/third_party/codemirror/package/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/operation_group.js */ "./src/third_party/codemirror/package/src/util/operation_group.js");











// DOCUMENT DATA STRUCTURE

// By default, updates that start and end at the beginning of a line
// are treated specially, in order to make the association of line
// widgets and marker elements with the text behave more intuitive.
function isWholeLineUpdate(doc, change) {
  return change.from.ch == 0 && change.to.ch == 0 && (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_8__.lst)(change.text) == "" &&
    (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
}

// Perform a change on the document data structure.
function updateDoc(doc, change, markedSpans, estimateHeight) {
  function spansFor(n) {return markedSpans ? markedSpans[n] : null}
  function update(line, text, spans) {
    (0,_line_line_data_js__WEBPACK_IMPORTED_MODULE_3__.updateLine)(line, text, spans, estimateHeight)
    ;(0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__.signalLater)(line, "change", line, change)
  }
  function linesFor(start, end) {
    let result = []
    for (let i = start; i < end; ++i)
      result.push(new _line_line_data_js__WEBPACK_IMPORTED_MODULE_3__.Line(text[i], spansFor(i), estimateHeight))
    return result
  }

  let from = change.from, to = change.to, text = change.text
  let firstLine = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.getLine)(doc, from.line), lastLine = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.getLine)(doc, to.line)
  let lastText = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_8__.lst)(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line

  // Adjust the line structure
  if (change.full) {
    doc.insert(0, linesFor(0, text.length))
    doc.remove(text.length, doc.size - text.length)
  } else if (isWholeLineUpdate(doc, change)) {
    // This is a whole-line replace. Treated specially to make
    // sure line objects move the way they are supposed to.
    let added = linesFor(0, text.length - 1)
    update(lastLine, lastLine.text, lastSpans)
    if (nlines) doc.remove(from.line, nlines)
    if (added.length) doc.insert(from.line, added)
  } else if (firstLine == lastLine) {
    if (text.length == 1) {
      update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans)
    } else {
      let added = linesFor(1, text.length - 1)
      added.push(new _line_line_data_js__WEBPACK_IMPORTED_MODULE_3__.Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight))
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0))
      doc.insert(from.line + 1, added)
    }
  } else if (text.length == 1) {
    update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0))
    doc.remove(from.line + 1, nlines)
  } else {
    update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0))
    update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans)
    let added = linesFor(1, text.length - 1)
    if (nlines > 1) doc.remove(from.line + 1, nlines - 1)
    doc.insert(from.line + 1, added)
  }

  (0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__.signalLater)(doc, "change", doc, change)
}

// Call f for all linked documents.
function linkedDocs(doc, f, sharedHistOnly) {
  function propagate(doc, skip, sharedHist) {
    if (doc.linked) for (let i = 0; i < doc.linked.length; ++i) {
      let rel = doc.linked[i]
      if (rel.doc == skip) continue
      let shared = sharedHist && rel.sharedHist
      if (sharedHistOnly && !shared) continue
      f(rel.doc, shared)
      propagate(rel.doc, doc, shared)
    }
  }
  propagate(doc, null, true)
}

// Attach a document to an editor.
function attachDoc(cm, doc) {
  if (doc.cm) throw new Error("This document is already in use.")
  cm.doc = doc
  doc.cm = cm
  ;(0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_6__.estimateLineHeights)(cm)
  ;(0,_display_mode_state_js__WEBPACK_IMPORTED_MODULE_0__.loadMode)(cm)
  setDirectionClass(cm)
  if (!cm.options.lineWrapping) (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_4__.findMaxLine)(cm)
  cm.options.mode = doc.modeOption
  ;(0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__.regChange)(cm)
}

function setDirectionClass(cm) {
  ;(cm.doc.direction == "rtl" ? _util_dom_js__WEBPACK_IMPORTED_MODULE_7__.addClass : _util_dom_js__WEBPACK_IMPORTED_MODULE_7__.rmClass)(cm.display.lineDiv, "CodeMirror-rtl")
}

function directionChanged(cm) {
  (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_1__.runInOp)(cm, () => {
    setDirectionClass(cm)
    ;(0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__.regChange)(cm)
  })
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/model/history.js":
/*!*****************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/model/history.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   History: () => (/* binding */ History),
/* harmony export */   addChangeToHistory: () => (/* binding */ addChangeToHistory),
/* harmony export */   addSelectionToHistory: () => (/* binding */ addSelectionToHistory),
/* harmony export */   copyHistoryArray: () => (/* binding */ copyHistoryArray),
/* harmony export */   historyChangeFromChange: () => (/* binding */ historyChangeFromChange),
/* harmony export */   mergeOldSpans: () => (/* binding */ mergeOldSpans),
/* harmony export */   pushSelectionToHistory: () => (/* binding */ pushSelectionToHistory)
/* harmony export */ });
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/spans.js */ "./src/third_party/codemirror/package/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _change_measurement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change_measurement.js */ "./src/third_party/codemirror/package/src/model/change_measurement.js");
/* harmony import */ var _document_data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./document_data.js */ "./src/third_party/codemirror/package/src/model/document_data.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selection.js */ "./src/third_party/codemirror/package/src/model/selection.js");










function History(prev) {
  // Arrays of change events and selections. Doing something adds an
  // event to done and clears undo. Undoing moves events from done
  // to undone, redoing moves them in the other direction.
  this.done = []; this.undone = []
  this.undoDepth = prev ? prev.undoDepth : Infinity
  // Used to track when changes can be merged into a single undo
  // event
  this.lastModTime = this.lastSelTime = 0
  this.lastOp = this.lastSelOp = null
  this.lastOrigin = this.lastSelOrigin = null
  // Used by the isClean() method
  this.generation = this.maxGeneration = prev ? prev.maxGeneration : 1
}

// Create a history change event from an updateDoc-style change
// object.
function historyChangeFromChange(doc, change) {
  let histChange = {from: (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.copyPos)(change.from), to: (0,_change_measurement_js__WEBPACK_IMPORTED_MODULE_5__.changeEnd)(change), text: (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__.getBetween)(doc, change.from, change.to)}
  attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1)
  ;(0,_document_data_js__WEBPACK_IMPORTED_MODULE_6__.linkedDocs)(doc, doc => attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1), true)
  return histChange
}

// Pop all selection events off the end of a history array. Stop at
// a change event.
function clearSelectionEvents(array) {
  while (array.length) {
    let last = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_4__.lst)(array)
    if (last.ranges) array.pop()
    else break
  }
}

// Find the top change event in the history. Pop off selection
// events that are in the way.
function lastChangeEvent(hist, force) {
  if (force) {
    clearSelectionEvents(hist.done)
    return (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_4__.lst)(hist.done)
  } else if (hist.done.length && !(0,_util_misc_js__WEBPACK_IMPORTED_MODULE_4__.lst)(hist.done).ranges) {
    return (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_4__.lst)(hist.done)
  } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
    hist.done.pop()
    return (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_4__.lst)(hist.done)
  }
}

// Register a change in the history. Merges changes that are within
// a single operation, or are close together with an origin that
// allows merging (starting with "+") into a single event.
function addChangeToHistory(doc, change, selAfter, opId) {
  let hist = doc.history
  hist.undone.length = 0
  let time = +new Date, cur
  let last

  if ((hist.lastOp == opId ||
       hist.lastOrigin == change.origin && change.origin &&
       ((change.origin.charAt(0) == "+" && hist.lastModTime > time - (doc.cm ? doc.cm.options.historyEventDelay : 500)) ||
        change.origin.charAt(0) == "*")) &&
      (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
    // Merge this change into the last event
    last = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_4__.lst)(cur.changes)
    if ((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.cmp)(change.from, change.to) == 0 && (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.cmp)(change.from, last.to) == 0) {
      // Optimized case for simple insertion -- don't want to add
      // new changesets for every character typed
      last.to = (0,_change_measurement_js__WEBPACK_IMPORTED_MODULE_5__.changeEnd)(change)
    } else {
      // Add new sub-event
      cur.changes.push(historyChangeFromChange(doc, change))
    }
  } else {
    // Can not be merged, start a new event.
    let before = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_4__.lst)(hist.done)
    if (!before || !before.ranges)
      pushSelectionToHistory(doc.sel, hist.done)
    cur = {changes: [historyChangeFromChange(doc, change)],
           generation: hist.generation}
    hist.done.push(cur)
    while (hist.done.length > hist.undoDepth) {
      hist.done.shift()
      if (!hist.done[0].ranges) hist.done.shift()
    }
  }
  hist.done.push(selAfter)
  hist.generation = ++hist.maxGeneration
  hist.lastModTime = hist.lastSelTime = time
  hist.lastOp = hist.lastSelOp = opId
  hist.lastOrigin = hist.lastSelOrigin = change.origin

  if (!last) (0,_util_event_js__WEBPACK_IMPORTED_MODULE_3__.signal)(doc, "historyAdded")
}

function selectionEventCanBeMerged(doc, origin, prev, sel) {
  let ch = origin.charAt(0)
  return ch == "*" ||
    ch == "+" &&
    prev.ranges.length == sel.ranges.length &&
    prev.somethingSelected() == sel.somethingSelected() &&
    new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
}

// Called whenever the selection changes, sets the new selection as
// the pending selection in the history, and pushes the old pending
// selection into the 'done' array when it was significantly
// different (in number of selected ranges, emptiness, or time).
function addSelectionToHistory(doc, sel, opId, options) {
  let hist = doc.history, origin = options && options.origin

  // A new event is started when the previous origin does not match
  // the current, or the origins don't allow matching. Origins
  // starting with * are always merged, those starting with + are
  // merged when similar and close together in time.
  if (opId == hist.lastSelOp ||
      (origin && hist.lastSelOrigin == origin &&
       (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
        selectionEventCanBeMerged(doc, origin, (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_4__.lst)(hist.done), sel))))
    hist.done[hist.done.length - 1] = sel
  else
    pushSelectionToHistory(sel, hist.done)

  hist.lastSelTime = +new Date
  hist.lastSelOrigin = origin
  hist.lastSelOp = opId
  if (options && options.clearRedo !== false)
    clearSelectionEvents(hist.undone)
}

function pushSelectionToHistory(sel, dest) {
  let top = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_4__.lst)(dest)
  if (!(top && top.ranges && top.equals(sel)))
    dest.push(sel)
}

// Used to store marked span information in the history.
function attachLocalSpans(doc, change, from, to) {
  let existing = change["spans_" + doc.id], n = 0
  doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), line => {
    if (line.markedSpans)
      (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans
    ++n
  })
}

// When un/re-doing restores text containing marked spans, those
// that have been explicitly cleared should not be restored.
function removeClearedSpans(spans) {
  if (!spans) return null
  let out
  for (let i = 0; i < spans.length; ++i) {
    if (spans[i].marker.explicitlyCleared) { if (!out) out = spans.slice(0, i) }
    else if (out) out.push(spans[i])
  }
  return !out ? spans : out.length ? out : null
}

// Retrieve and filter the old marked spans stored in a change event.
function getOldSpans(doc, change) {
  let found = change["spans_" + doc.id]
  if (!found) return null
  let nw = []
  for (let i = 0; i < change.text.length; ++i)
    nw.push(removeClearedSpans(found[i]))
  return nw
}

// Used for un/re-doing changes from the history. Combines the
// result of computing the existing spans with the set of spans that
// existed in the history (so that deleting around a span and then
// undoing brings back the span).
function mergeOldSpans(doc, change) {
  let old = getOldSpans(doc, change)
  let stretched = (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_1__.stretchSpansOverChange)(doc, change)
  if (!old) return stretched
  if (!stretched) return old

  for (let i = 0; i < old.length; ++i) {
    let oldCur = old[i], stretchCur = stretched[i]
    if (oldCur && stretchCur) {
      spans: for (let j = 0; j < stretchCur.length; ++j) {
        let span = stretchCur[j]
        for (let k = 0; k < oldCur.length; ++k)
          if (oldCur[k].marker == span.marker) continue spans
        oldCur.push(span)
      }
    } else if (stretchCur) {
      old[i] = stretchCur
    }
  }
  return old
}

// Used both to provide a JSON-safe object in .getHistory, and, when
// detaching a document, to split the history in two
function copyHistoryArray(events, newGroup, instantiateSel) {
  let copy = []
  for (let i = 0; i < events.length; ++i) {
    let event = events[i]
    if (event.ranges) {
      copy.push(instantiateSel ? _selection_js__WEBPACK_IMPORTED_MODULE_7__.Selection.prototype.deepCopy.call(event) : event)
      continue
    }
    let changes = event.changes, newChanges = []
    copy.push({changes: newChanges})
    for (let j = 0; j < changes.length; ++j) {
      let change = changes[j], m
      newChanges.push({from: change.from, to: change.to, text: change.text})
      if (newGroup) for (var prop in change) if (m = prop.match(/^spans_(\d+)$/)) {
        if ((0,_util_misc_js__WEBPACK_IMPORTED_MODULE_4__.indexOf)(newGroup, Number(m[1])) > -1) {
          (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_4__.lst)(newChanges)[prop] = change[prop]
          delete change[prop]
        }
      }
    }
  }
  return copy
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/model/selection.js":
/*!*******************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/model/selection.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Range: () => (/* binding */ Range),
/* harmony export */   Selection: () => (/* binding */ Selection),
/* harmony export */   normalizeSelection: () => (/* binding */ normalizeSelection),
/* harmony export */   simpleSelection: () => (/* binding */ simpleSelection)
/* harmony export */ });
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");



// Selection objects are immutable. A new one is created every time
// the selection changes. A selection is one or more non-overlapping
// (and non-touching) ranges, sorted, and an integer that indicates
// which one is the primary selection (the one that's scrolled into
// view, that getCursor returns, etc).
class Selection {
  constructor(ranges, primIndex) {
    this.ranges = ranges
    this.primIndex = primIndex
  }

  primary() { return this.ranges[this.primIndex] }

  equals(other) {
    if (other == this) return true
    if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) return false
    for (let i = 0; i < this.ranges.length; i++) {
      let here = this.ranges[i], there = other.ranges[i]
      if (!(0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.equalCursorPos)(here.anchor, there.anchor) || !(0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.equalCursorPos)(here.head, there.head)) return false
    }
    return true
  }

  deepCopy() {
    let out = []
    for (let i = 0; i < this.ranges.length; i++)
      out[i] = new Range((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.copyPos)(this.ranges[i].anchor), (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.copyPos)(this.ranges[i].head))
    return new Selection(out, this.primIndex)
  }

  somethingSelected() {
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].empty()) return true
    return false
  }

  contains(pos, end) {
    if (!end) end = pos
    for (let i = 0; i < this.ranges.length; i++) {
      let range = this.ranges[i]
      if ((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.cmp)(end, range.from()) >= 0 && (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.cmp)(pos, range.to()) <= 0)
        return i
    }
    return -1
  }
}

class Range {
  constructor(anchor, head) {
    this.anchor = anchor; this.head = head
  }

  from() { return (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.minPos)(this.anchor, this.head) }
  to() { return (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.maxPos)(this.anchor, this.head) }
  empty() { return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch }
}

// Take an unsorted, potentially overlapping set of ranges, and
// build a selection out of it. 'Consumes' ranges array (modifying
// it).
function normalizeSelection(cm, ranges, primIndex) {
  let mayTouch = cm && cm.options.selectionsMayTouch
  let prim = ranges[primIndex]
  ranges.sort((a, b) => (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.cmp)(a.from(), b.from()))
  primIndex = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_1__.indexOf)(ranges, prim)
  for (let i = 1; i < ranges.length; i++) {
    let cur = ranges[i], prev = ranges[i - 1]
    let diff = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.cmp)(prev.to(), cur.from())
    if (mayTouch && !cur.empty() ? diff > 0 : diff >= 0) {
      let from = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.minPos)(prev.from(), cur.from()), to = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.maxPos)(prev.to(), cur.to())
      let inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head
      if (i <= primIndex) --primIndex
      ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to))
    }
  }
  return new Selection(ranges, primIndex)
}

function simpleSelection(anchor, head) {
  return new Selection([new Range(anchor, head || anchor)], 0)
}


/***/ })

}]);