"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_model_document_data_js"],{

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


/***/ })

}]);