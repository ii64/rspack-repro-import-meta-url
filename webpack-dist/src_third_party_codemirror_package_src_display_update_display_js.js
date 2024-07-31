"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_display_update_display_js"],{

/***/ "./src/third_party/codemirror/package/src/display/focus.js":
/*!*****************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/focus.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delayBlurEvent: () => (/* binding */ delayBlurEvent),
/* harmony export */   ensureFocus: () => (/* binding */ ensureFocus),
/* harmony export */   onBlur: () => (/* binding */ onBlur),
/* harmony export */   onFocus: () => (/* binding */ onFocus)
/* harmony export */ });
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selection.js */ "./src/third_party/codemirror/package/src/display/selection.js");






function ensureFocus(cm) {
  if (!cm.hasFocus()) {
    cm.display.input.focus()
    if (!cm.state.focused) onFocus(cm)
  }
}

function delayBlurEvent(cm) {
  cm.state.delayingBlurEvent = true
  setTimeout(() => { if (cm.state.delayingBlurEvent) {
    cm.state.delayingBlurEvent = false
    if (cm.state.focused) onBlur(cm)
  } }, 100)
}

function onFocus(cm, e) {
  if (cm.state.delayingBlurEvent && !cm.state.draggingText) cm.state.delayingBlurEvent = false

  if (cm.options.readOnly == "nocursor") return
  if (!cm.state.focused) {
    (0,_util_event_js__WEBPACK_IMPORTED_MODULE_2__.signal)(cm, "focus", cm, e)
    cm.state.focused = true
    ;(0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(cm.display.wrapper, "CodeMirror-focused")
    // This test prevents this from firing when a context
    // menu is closed (since the input reset would kill the
    // select-all detection hack)
    if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
      cm.display.input.reset()
      if (_util_browser_js__WEBPACK_IMPORTED_MODULE_0__.webkit) setTimeout(() => cm.display.input.reset(true), 20) // Issue #1730
    }
    cm.display.input.receivedFocus()
  }
  (0,_selection_js__WEBPACK_IMPORTED_MODULE_3__.restartBlink)(cm)
}
function onBlur(cm, e) {
  if (cm.state.delayingBlurEvent) return

  if (cm.state.focused) {
    (0,_util_event_js__WEBPACK_IMPORTED_MODULE_2__.signal)(cm, "blur", cm, e)
    cm.state.focused = false
    ;(0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.rmClass)(cm.display.wrapper, "CodeMirror-focused")
  }
  clearInterval(cm.display.blinker)
  setTimeout(() => { if (!cm.state.focused) cm.display.shift = false }, 150)
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/display/highlight_worker.js":
/*!****************************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/highlight_worker.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startWorker: () => (/* binding */ startWorker)
/* harmony export */ });
/* harmony import */ var _line_highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/highlight.js */ "./src/third_party/codemirror/package/src/line/highlight.js");
/* harmony import */ var _modes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modes.js */ "./src/third_party/codemirror/package/src/modes.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations.js */ "./src/third_party/codemirror/package/src/display/operations.js");
/* harmony import */ var _view_tracking_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view_tracking.js */ "./src/third_party/codemirror/package/src/display/view_tracking.js");







// HIGHLIGHT WORKER

function startWorker(cm, time) {
  if (cm.doc.highlightFrontier < cm.display.viewTo)
    cm.state.highlight.set(time, (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_2__.bind)(highlightWorker, cm))
}

function highlightWorker(cm) {
  let doc = cm.doc
  if (doc.highlightFrontier >= cm.display.viewTo) return
  let end = +new Date + cm.options.workTime
  let context = (0,_line_highlight_js__WEBPACK_IMPORTED_MODULE_0__.getContextBefore)(cm, doc.highlightFrontier)
  let changedLines = []

  doc.iter(context.line, Math.min(doc.first + doc.size, cm.display.viewTo + 500), line => {
    if (context.line >= cm.display.viewFrom) { // Visible
      let oldStyles = line.styles
      let resetState = line.text.length > cm.options.maxHighlightLength ? (0,_modes_js__WEBPACK_IMPORTED_MODULE_1__.copyState)(doc.mode, context.state) : null
      let highlighted = (0,_line_highlight_js__WEBPACK_IMPORTED_MODULE_0__.highlightLine)(cm, line, context, true)
      if (resetState) context.state = resetState
      line.styles = highlighted.styles
      let oldCls = line.styleClasses, newCls = highlighted.classes
      if (newCls) line.styleClasses = newCls
      else if (oldCls) line.styleClasses = null
      let ischange = !oldStyles || oldStyles.length != line.styles.length ||
        oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass)
      for (let i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i]
      if (ischange) changedLines.push(context.line)
      line.stateAfter = context.save()
      context.nextLine()
    } else {
      if (line.text.length <= cm.options.maxHighlightLength)
        (0,_line_highlight_js__WEBPACK_IMPORTED_MODULE_0__.processLine)(cm, line.text, context)
      line.stateAfter = context.line % 5 == 0 ? context.save() : null
      context.nextLine()
    }
    if (+new Date > end) {
      startWorker(cm, cm.options.workDelay)
      return true
    }
  })
  doc.highlightFrontier = context.line
  doc.modeFrontier = Math.max(doc.modeFrontier, context.line)
  if (changedLines.length) (0,_operations_js__WEBPACK_IMPORTED_MODULE_3__.runInOp)(cm, () => {
    for (let i = 0; i < changedLines.length; i++)
      (0,_view_tracking_js__WEBPACK_IMPORTED_MODULE_4__.regLineChange)(cm, changedLines[i], "text")
  })
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/display/line_numbers.js":
/*!************************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/line_numbers.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alignHorizontally: () => (/* binding */ alignHorizontally),
/* harmony export */   maybeUpdateLineNumberWidth: () => (/* binding */ maybeUpdateLineNumberWidth)
/* harmony export */ });
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _update_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update_display.js */ "./src/third_party/codemirror/package/src/display/update_display.js");






// Re-align line numbers and gutter marks to compensate for
// horizontal scrolling.
function alignHorizontally(cm) {
  let display = cm.display, view = display.view
  if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return
  let comp = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__.compensateForHScroll)(display) - display.scroller.scrollLeft + cm.doc.scrollLeft
  let gutterW = display.gutters.offsetWidth, left = comp + "px"
  for (let i = 0; i < view.length; i++) if (!view[i].hidden) {
    if (cm.options.fixedGutter) {
      if (view[i].gutter)
        view[i].gutter.style.left = left
      if (view[i].gutterBackground)
        view[i].gutterBackground.style.left = left
    }
    let align = view[i].alignable
    if (align) for (let j = 0; j < align.length; j++)
      align[j].style.left = left
  }
  if (cm.options.fixedGutter)
    display.gutters.style.left = (comp + gutterW) + "px"
}

// Used to ensure that the line number gutter is still the right
// size for the current document size. Returns true when an update
// is needed.
function maybeUpdateLineNumberWidth(cm) {
  if (!cm.options.lineNumbers) return false
  let doc = cm.doc, last = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_0__.lineNumberFor)(cm.options, doc.first + doc.size - 1), display = cm.display
  if (last.length != display.lineNumChars) {
    let test = display.measure.appendChild((0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.elt)("div", [(0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.elt)("div", last)],
                                               "CodeMirror-linenumber CodeMirror-gutter-elt"))
    let innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW
    display.lineGutter.style.width = ""
    display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1
    display.lineNumWidth = display.lineNumInnerWidth + padding
    display.lineNumChars = display.lineNumInnerWidth ? last.length : -1
    display.lineGutter.style.width = display.lineNumWidth + "px"
    ;(0,_update_display_js__WEBPACK_IMPORTED_MODULE_3__.updateGutterSpace)(cm.display)
    return true
  }
  return false
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/display/operations.js":
/*!**********************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/operations.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   docMethodOp: () => (/* binding */ docMethodOp),
/* harmony export */   endOperation: () => (/* binding */ endOperation),
/* harmony export */   methodOp: () => (/* binding */ methodOp),
/* harmony export */   operation: () => (/* binding */ operation),
/* harmony export */   runInOp: () => (/* binding */ runInOp),
/* harmony export */   startOperation: () => (/* binding */ startOperation)
/* harmony export */ });
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/spans.js */ "./src/third_party/codemirror/package/src/line/spans.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/operation_group.js */ "./src/third_party/codemirror/package/src/util/operation_group.js");
/* harmony import */ var _focus_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./focus.js */ "./src/third_party/codemirror/package/src/display/focus.js");
/* harmony import */ var _scrollbars_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scrollbars.js */ "./src/third_party/codemirror/package/src/display/scrollbars.js");
/* harmony import */ var _scrolling_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scrolling.js */ "./src/third_party/codemirror/package/src/display/scrolling.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selection.js */ "./src/third_party/codemirror/package/src/display/selection.js");
/* harmony import */ var _update_display_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update_display.js */ "./src/third_party/codemirror/package/src/display/update_display.js");
/* harmony import */ var _update_lines_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update_lines.js */ "./src/third_party/codemirror/package/src/display/update_lines.js");














// Operations are used to wrap a series of changes to the editor
// state in such a way that each change won't have to update the
// cursor and display (which would be awkward, slow, and
// error-prone). Instead, display updates are batched and then all
// combined and executed at once.

let nextOpId = 0
// Start a new operation.
function startOperation(cm) {
  cm.curOp = {
    cm: cm,
    viewChanged: false,      // Flag that indicates that lines might need to be redrawn
    startHeight: cm.doc.height, // Used to detect need to update scrollbar
    forceUpdate: false,      // Used to force a redraw
    updateInput: 0,       // Whether to reset the input textarea
    typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
    changeObjs: null,        // Accumulated changes, for firing change events
    cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
    cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
    selectionChanged: false, // Whether the selection needs to be redrawn
    updateMaxLine: false,    // Set when the widest line needs to be determined anew
    scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
    scrollToPos: null,       // Used to scroll to a specific position
    focus: false,
    id: ++nextOpId           // Unique ID
  }
  ;(0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_5__.pushOperation)(cm.curOp)
}

// Finish an operation, updating the display and signalling delayed events
function endOperation(cm) {
  let op = cm.curOp
  if (op) (0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_5__.finishOperation)(op, group => {
    for (let i = 0; i < group.ops.length; i++)
      group.ops[i].cm.curOp = null
    endOperations(group)
  })
}

// The DOM updates done when an operation finishes are batched so
// that the minimum number of relayouts are required.
function endOperations(group) {
  let ops = group.ops
  for (let i = 0; i < ops.length; i++) // Read DOM
    endOperation_R1(ops[i])
  for (let i = 0; i < ops.length; i++) // Write DOM (maybe)
    endOperation_W1(ops[i])
  for (let i = 0; i < ops.length; i++) // Read DOM
    endOperation_R2(ops[i])
  for (let i = 0; i < ops.length; i++) // Write DOM (maybe)
    endOperation_W2(ops[i])
  for (let i = 0; i < ops.length; i++) // Read DOM
    endOperation_finish(ops[i])
}

function endOperation_R1(op) {
  let cm = op.cm, display = cm.display
  ;(0,_update_display_js__WEBPACK_IMPORTED_MODULE_10__.maybeClipScrollbars)(cm)
  if (op.updateMaxLine) (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_1__.findMaxLine)(cm)

  op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
    op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
                       op.scrollToPos.to.line >= display.viewTo) ||
    display.maxLineChanged && cm.options.lineWrapping
  op.update = op.mustUpdate &&
    new _update_display_js__WEBPACK_IMPORTED_MODULE_10__.DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate)
}

function endOperation_W1(op) {
  op.updatedDisplay = op.mustUpdate && (0,_update_display_js__WEBPACK_IMPORTED_MODULE_10__.updateDisplayIfNeeded)(op.cm, op.update)
}

function endOperation_R2(op) {
  let cm = op.cm, display = cm.display
  if (op.updatedDisplay) (0,_update_lines_js__WEBPACK_IMPORTED_MODULE_11__.updateHeightsInViewport)(cm)

  op.barMeasure = (0,_scrollbars_js__WEBPACK_IMPORTED_MODULE_7__.measureForScrollbars)(cm)

  // If the max line changed since it was last measured, measure it,
  // and ensure the document's width matches it.
  // updateDisplay_W2 will use these properties to do the actual resizing
  if (display.maxLineChanged && !cm.options.lineWrapping) {
    op.adjustWidthTo = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__.measureChar)(cm, display.maxLine, display.maxLine.text.length).left + 3
    cm.display.sizerWidth = op.adjustWidthTo
    op.barMeasure.scrollWidth =
      Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__.scrollGap)(cm) + cm.display.barWidth)
    op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__.displayWidth)(cm))
  }

  if (op.updatedDisplay || op.selectionChanged)
    op.preparedSelection = display.input.prepareSelection()
}

function endOperation_W2(op) {
  let cm = op.cm

  if (op.adjustWidthTo != null) {
    cm.display.sizer.style.minWidth = op.adjustWidthTo + "px"
    if (op.maxScrollLeft < cm.doc.scrollLeft)
      (0,_scrolling_js__WEBPACK_IMPORTED_MODULE_8__.setScrollLeft)(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true)
    cm.display.maxLineChanged = false
  }

  let takeFocus = op.focus && op.focus == (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_3__.activeElt)()
  if (op.preparedSelection)
    cm.display.input.showSelection(op.preparedSelection, takeFocus)
  if (op.updatedDisplay || op.startHeight != cm.doc.height)
    (0,_scrollbars_js__WEBPACK_IMPORTED_MODULE_7__.updateScrollbars)(cm, op.barMeasure)
  if (op.updatedDisplay)
    (0,_update_display_js__WEBPACK_IMPORTED_MODULE_10__.setDocumentHeight)(cm, op.barMeasure)

  if (op.selectionChanged) (0,_selection_js__WEBPACK_IMPORTED_MODULE_9__.restartBlink)(cm)

  if (cm.state.focused && op.updateInput)
    cm.display.input.reset(op.typing)
  if (takeFocus) (0,_focus_js__WEBPACK_IMPORTED_MODULE_6__.ensureFocus)(op.cm)
}

function endOperation_finish(op) {
  let cm = op.cm, display = cm.display, doc = cm.doc

  if (op.updatedDisplay) (0,_update_display_js__WEBPACK_IMPORTED_MODULE_10__.postUpdateDisplay)(cm, op.update)

  // Abort mouse wheel delta measurement, when scrolling explicitly
  if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
    display.wheelStartX = display.wheelStartY = null

  // Propagate the scroll position to the actual DOM scroller
  if (op.scrollTop != null) (0,_scrolling_js__WEBPACK_IMPORTED_MODULE_8__.setScrollTop)(cm, op.scrollTop, op.forceScroll)

  if (op.scrollLeft != null) (0,_scrolling_js__WEBPACK_IMPORTED_MODULE_8__.setScrollLeft)(cm, op.scrollLeft, true, true)
  // If we need to scroll a specific position into view, do so.
  if (op.scrollToPos) {
    let rect = (0,_scrolling_js__WEBPACK_IMPORTED_MODULE_8__.scrollPosIntoView)(cm, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.clipPos)(doc, op.scrollToPos.from),
                                 (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.clipPos)(doc, op.scrollToPos.to), op.scrollToPos.margin)
    ;(0,_scrolling_js__WEBPACK_IMPORTED_MODULE_8__.maybeScrollWindow)(cm, rect)
  }

  // Fire events for markers that are hidden/unidden by editing or
  // undoing
  let hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers
  if (hidden) for (let i = 0; i < hidden.length; ++i)
    if (!hidden[i].lines.length) (0,_util_event_js__WEBPACK_IMPORTED_MODULE_4__.signal)(hidden[i], "hide")
  if (unhidden) for (let i = 0; i < unhidden.length; ++i)
    if (unhidden[i].lines.length) (0,_util_event_js__WEBPACK_IMPORTED_MODULE_4__.signal)(unhidden[i], "unhide")

  if (display.wrapper.offsetHeight)
    doc.scrollTop = cm.display.scroller.scrollTop

  // Fire change events, and delayed event handlers
  if (op.changeObjs)
    (0,_util_event_js__WEBPACK_IMPORTED_MODULE_4__.signal)(cm, "changes", cm, op.changeObjs)
  if (op.update)
    op.update.finish()
}

// Run the given function in an operation
function runInOp(cm, f) {
  if (cm.curOp) return f()
  startOperation(cm)
  try { return f() }
  finally { endOperation(cm) }
}
// Wraps a function in an operation. Returns the wrapped function.
function operation(cm, f) {
  return function() {
    if (cm.curOp) return f.apply(cm, arguments)
    startOperation(cm)
    try { return f.apply(cm, arguments) }
    finally { endOperation(cm) }
  }
}
// Used to add methods to editor and doc instances, wrapping them in
// operations.
function methodOp(f) {
  return function() {
    if (this.curOp) return f.apply(this, arguments)
    startOperation(this)
    try { return f.apply(this, arguments) }
    finally { endOperation(this) }
  }
}
function docMethodOp(f) {
  return function() {
    let cm = this.cm
    if (!cm || cm.curOp) return f.apply(this, arguments)
    startOperation(cm)
    try { return f.apply(this, arguments) }
    finally { endOperation(cm) }
  }
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/display/scrollbars.js":
/*!**********************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/scrollbars.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initScrollbars: () => (/* binding */ initScrollbars),
/* harmony export */   measureForScrollbars: () => (/* binding */ measureForScrollbars),
/* harmony export */   scrollbarModel: () => (/* binding */ scrollbarModel),
/* harmony export */   updateScrollbars: () => (/* binding */ updateScrollbars)
/* harmony export */ });
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _scrolling_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrolling.js */ "./src/third_party/codemirror/package/src/display/scrolling.js");
/* harmony import */ var _update_lines_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update_lines.js */ "./src/third_party/codemirror/package/src/display/update_lines.js");









// SCROLLBARS

// Prepare DOM reads needed to update the scrollbars. Done in one
// shot to minimize update/measure roundtrips.
function measureForScrollbars(cm) {
  let d = cm.display, gutterW = d.gutters.offsetWidth
  let docH = Math.round(cm.doc.height + (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_0__.paddingVert)(cm.display))
  return {
    clientHeight: d.scroller.clientHeight,
    viewHeight: d.wrapper.clientHeight,
    scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
    viewWidth: d.wrapper.clientWidth,
    barLeft: cm.options.fixedGutter ? gutterW : 0,
    docHeight: docH,
    scrollHeight: docH + (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_0__.scrollGap)(cm) + d.barHeight,
    nativeBarWidth: d.nativeBarWidth,
    gutterWidth: gutterW
  }
}

class NativeScrollbars {
  constructor(place, scroll, cm) {
    this.cm = cm
    let vert = this.vert = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.elt)("div", [(0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.elt)("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
    let horiz = this.horiz = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.elt)("div", [(0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.elt)("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar")
    vert.tabIndex = horiz.tabIndex = -1
    place(vert); place(horiz)

    ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_3__.on)(vert, "scroll", () => {
      if (vert.clientHeight) scroll(vert.scrollTop, "vertical")
    })
    ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_3__.on)(horiz, "scroll", () => {
      if (horiz.clientWidth) scroll(horiz.scrollLeft, "horizontal")
    })

    this.checkedZeroWidth = false
    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_1__.ie && _util_browser_js__WEBPACK_IMPORTED_MODULE_1__.ie_version < 8) this.horiz.style.minHeight = this.vert.style.minWidth = "18px"
  }

  update(measure) {
    let needsH = measure.scrollWidth > measure.clientWidth + 1
    let needsV = measure.scrollHeight > measure.clientHeight + 1
    let sWidth = measure.nativeBarWidth

    if (needsV) {
      this.vert.style.display = "block"
      this.vert.style.bottom = needsH ? sWidth + "px" : "0"
      let totalHeight = measure.viewHeight - (needsH ? sWidth : 0)
      // A bug in IE8 can cause this value to be negative, so guard it.
      this.vert.firstChild.style.height =
        Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px"
    } else {
      this.vert.style.display = ""
      this.vert.firstChild.style.height = "0"
    }

    if (needsH) {
      this.horiz.style.display = "block"
      this.horiz.style.right = needsV ? sWidth + "px" : "0"
      this.horiz.style.left = measure.barLeft + "px"
      let totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0)
      this.horiz.firstChild.style.width =
        Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px"
    } else {
      this.horiz.style.display = ""
      this.horiz.firstChild.style.width = "0"
    }

    if (!this.checkedZeroWidth && measure.clientHeight > 0) {
      if (sWidth == 0) this.zeroWidthHack()
      this.checkedZeroWidth = true
    }

    return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
  }

  setScrollLeft(pos) {
    if (this.horiz.scrollLeft != pos) this.horiz.scrollLeft = pos
    if (this.disableHoriz) this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
  }

  setScrollTop(pos) {
    if (this.vert.scrollTop != pos) this.vert.scrollTop = pos
    if (this.disableVert) this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
  }

  zeroWidthHack() {
    let w = _util_browser_js__WEBPACK_IMPORTED_MODULE_1__.mac && !_util_browser_js__WEBPACK_IMPORTED_MODULE_1__.mac_geMountainLion ? "12px" : "18px"
    this.horiz.style.height = this.vert.style.width = w
    this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none"
    this.disableHoriz = new _util_misc_js__WEBPACK_IMPORTED_MODULE_4__.Delayed
    this.disableVert = new _util_misc_js__WEBPACK_IMPORTED_MODULE_4__.Delayed
  }

  enableZeroWidthBar(bar, delay, type) {
    bar.style.pointerEvents = "auto"
    function maybeDisable() {
      // To find out whether the scrollbar is still visible, we
      // check whether the element under the pixel in the bottom
      // right corner of the scrollbar box is the scrollbar box
      // itself (when the bar is still visible) or its filler child
      // (when the bar is hidden). If it is still visible, we keep
      // it enabled, if it's hidden, we disable pointer events.
      let box = bar.getBoundingClientRect()
      let elt = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2)
          : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1)
      if (elt != bar) bar.style.pointerEvents = "none"
      else delay.set(1000, maybeDisable)
    }
    delay.set(1000, maybeDisable)
  }

  clear() {
    let parent = this.horiz.parentNode
    parent.removeChild(this.horiz)
    parent.removeChild(this.vert)
  }
}

class NullScrollbars {
  update() { return {bottom: 0, right: 0} }
  setScrollLeft() {}
  setScrollTop() {}
  clear() {}
}

function updateScrollbars(cm, measure) {
  if (!measure) measure = measureForScrollbars(cm)
  let startWidth = cm.display.barWidth, startHeight = cm.display.barHeight
  updateScrollbarsInner(cm, measure)
  for (let i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
    if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
      (0,_update_lines_js__WEBPACK_IMPORTED_MODULE_6__.updateHeightsInViewport)(cm)
    updateScrollbarsInner(cm, measureForScrollbars(cm))
    startWidth = cm.display.barWidth; startHeight = cm.display.barHeight
  }
}

// Re-synchronize the fake scrollbars with the actual size of the
// content.
function updateScrollbarsInner(cm, measure) {
  let d = cm.display
  let sizes = d.scrollbars.update(measure)

  d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px"
  d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px"
  d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent"

  if (sizes.right && sizes.bottom) {
    d.scrollbarFiller.style.display = "block"
    d.scrollbarFiller.style.height = sizes.bottom + "px"
    d.scrollbarFiller.style.width = sizes.right + "px"
  } else d.scrollbarFiller.style.display = ""
  if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
    d.gutterFiller.style.display = "block"
    d.gutterFiller.style.height = sizes.bottom + "px"
    d.gutterFiller.style.width = measure.gutterWidth + "px"
  } else d.gutterFiller.style.display = ""
}

let scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars}

function initScrollbars(cm) {
  if (cm.display.scrollbars) {
    cm.display.scrollbars.clear()
    if (cm.display.scrollbars.addClass)
      (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.rmClass)(cm.display.wrapper, cm.display.scrollbars.addClass)
  }

  cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](node => {
    cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller)
    // Prevent clicks in the scrollbars from killing focus
    ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_3__.on)(node, "mousedown", () => {
      if (cm.state.focused) setTimeout(() => cm.display.input.focus(), 0)
    })
    node.setAttribute("cm-not-content", "true")
  }, (pos, axis) => {
    if (axis == "horizontal") (0,_scrolling_js__WEBPACK_IMPORTED_MODULE_5__.setScrollLeft)(cm, pos)
    else (0,_scrolling_js__WEBPACK_IMPORTED_MODULE_5__.updateScrollTop)(cm, pos)
  }, cm)
  if (cm.display.scrollbars.addClass)
    (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(cm.display.wrapper, cm.display.scrollbars.addClass)
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/display/scrolling.js":
/*!*********************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/scrolling.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToScrollTop: () => (/* binding */ addToScrollTop),
/* harmony export */   ensureCursorVisible: () => (/* binding */ ensureCursorVisible),
/* harmony export */   maybeScrollWindow: () => (/* binding */ maybeScrollWindow),
/* harmony export */   scrollIntoView: () => (/* binding */ scrollIntoView),
/* harmony export */   scrollPosIntoView: () => (/* binding */ scrollPosIntoView),
/* harmony export */   scrollToCoords: () => (/* binding */ scrollToCoords),
/* harmony export */   scrollToCoordsRange: () => (/* binding */ scrollToCoordsRange),
/* harmony export */   scrollToRange: () => (/* binding */ scrollToRange),
/* harmony export */   setScrollLeft: () => (/* binding */ setScrollLeft),
/* harmony export */   setScrollTop: () => (/* binding */ setScrollTop),
/* harmony export */   updateScrollTop: () => (/* binding */ updateScrollTop)
/* harmony export */ });
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _highlight_worker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highlight_worker.js */ "./src/third_party/codemirror/package/src/display/highlight_worker.js");
/* harmony import */ var _line_numbers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./line_numbers.js */ "./src/third_party/codemirror/package/src/display/line_numbers.js");
/* harmony import */ var _update_display_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update_display.js */ "./src/third_party/codemirror/package/src/display/update_display.js");










// SCROLLING THINGS INTO VIEW

// If an editor sits on the top or bottom of the window, partially
// scrolled out of view, this ensures that the cursor is visible.
function maybeScrollWindow(cm, rect) {
  if ((0,_util_event_js__WEBPACK_IMPORTED_MODULE_4__.signalDOMEvent)(cm, "scrollCursorIntoView")) return

  let display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null
  if (rect.top + box.top < 0) doScroll = true
  else if (rect.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) doScroll = false
  if (doScroll != null && !_util_browser_js__WEBPACK_IMPORTED_MODULE_2__.phantom) {
    let scrollNode = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_3__.elt)("div", "\u200b", null, `position: absolute;
                         top: ${rect.top - display.viewOffset - (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__.paddingTop)(cm.display)}px;
                         height: ${rect.bottom - rect.top + (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__.scrollGap)(cm) + display.barHeight}px;
                         left: ${rect.left}px; width: ${Math.max(2, rect.right - rect.left)}px;`)
    cm.display.lineSpace.appendChild(scrollNode)
    scrollNode.scrollIntoView(doScroll)
    cm.display.lineSpace.removeChild(scrollNode)
  }
}

// Scroll a given position into view (immediately), verifying that
// it actually became visible (as line heights are accurately
// measured, the position of something may 'drift' during drawing).
function scrollPosIntoView(cm, pos, end, margin) {
  if (margin == null) margin = 0
  let rect
  if (!cm.options.lineWrapping && pos == end) {
    // Set pos and end to the cursor positions around the character pos sticks to
    // If pos.sticky == "before", that is around pos.ch - 1, otherwise around pos.ch
    // If pos == Pos(_, 0, "before"), pos and end are unchanged
    pos = pos.ch ? (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.Pos)(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos
    end = pos.sticky == "before" ? (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.Pos)(pos.line, pos.ch + 1, "before") : pos
  }
  for (let limit = 0; limit < 5; limit++) {
    let changed = false
    let coords = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__.cursorCoords)(cm, pos)
    let endCoords = !end || end == pos ? coords : (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__.cursorCoords)(cm, end)
    rect = {left: Math.min(coords.left, endCoords.left),
            top: Math.min(coords.top, endCoords.top) - margin,
            right: Math.max(coords.left, endCoords.left),
            bottom: Math.max(coords.bottom, endCoords.bottom) + margin}
    let scrollPos = calculateScrollPos(cm, rect)
    let startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft
    if (scrollPos.scrollTop != null) {
      updateScrollTop(cm, scrollPos.scrollTop)
      if (Math.abs(cm.doc.scrollTop - startTop) > 1) changed = true
    }
    if (scrollPos.scrollLeft != null) {
      setScrollLeft(cm, scrollPos.scrollLeft)
      if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) changed = true
    }
    if (!changed) break
  }
  return rect
}

// Scroll a given set of coordinates into view (immediately).
function scrollIntoView(cm, rect) {
  let scrollPos = calculateScrollPos(cm, rect)
  if (scrollPos.scrollTop != null) updateScrollTop(cm, scrollPos.scrollTop)
  if (scrollPos.scrollLeft != null) setScrollLeft(cm, scrollPos.scrollLeft)
}

// Calculate a new scroll position needed to scroll the given
// rectangle into view. Returns an object with scrollTop and
// scrollLeft properties. When these are undefined, the
// vertical/horizontal position does not need to be adjusted.
function calculateScrollPos(cm, rect) {
  let display = cm.display, snapMargin = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__.textHeight)(cm.display)
  if (rect.top < 0) rect.top = 0
  let screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop
  let screen = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__.displayHeight)(cm), result = {}
  if (rect.bottom - rect.top > screen) rect.bottom = rect.top + screen
  let docBottom = cm.doc.height + (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__.paddingVert)(display)
  let atTop = rect.top < snapMargin, atBottom = rect.bottom > docBottom - snapMargin
  if (rect.top < screentop) {
    result.scrollTop = atTop ? 0 : rect.top
  } else if (rect.bottom > screentop + screen) {
    let newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen)
    if (newTop != screentop) result.scrollTop = newTop
  }

  let gutterSpace = cm.options.fixedGutter ? 0 : display.gutters.offsetWidth
  let screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft - gutterSpace
  let screenw = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__.displayWidth)(cm) - display.gutters.offsetWidth
  let tooWide = rect.right - rect.left > screenw
  if (tooWide) rect.right = rect.left + screenw
  if (rect.left < 10)
    result.scrollLeft = 0
  else if (rect.left < screenleft)
    result.scrollLeft = Math.max(0, rect.left + gutterSpace - (tooWide ? 0 : 10))
  else if (rect.right > screenw + screenleft - 3)
    result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw
  return result
}

// Store a relative adjustment to the scroll position in the current
// operation (to be applied when the operation finishes).
function addToScrollTop(cm, top) {
  if (top == null) return
  resolveScrollToPos(cm)
  cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top
}

// Make sure that at the end of the operation the current cursor is
// shown.
function ensureCursorVisible(cm) {
  resolveScrollToPos(cm)
  let cur = cm.getCursor()
  cm.curOp.scrollToPos = {from: cur, to: cur, margin: cm.options.cursorScrollMargin}
}

function scrollToCoords(cm, x, y) {
  if (x != null || y != null) resolveScrollToPos(cm)
  if (x != null) cm.curOp.scrollLeft = x
  if (y != null) cm.curOp.scrollTop = y
}

function scrollToRange(cm, range) {
  resolveScrollToPos(cm)
  cm.curOp.scrollToPos = range
}

// When an operation has its scrollToPos property set, and another
// scroll action is applied before the end of the operation, this
// 'simulates' scrolling that position into view in a cheap way, so
// that the effect of intermediate scroll commands is not ignored.
function resolveScrollToPos(cm) {
  let range = cm.curOp.scrollToPos
  if (range) {
    cm.curOp.scrollToPos = null
    let from = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__.estimateCoords)(cm, range.from), to = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_1__.estimateCoords)(cm, range.to)
    scrollToCoordsRange(cm, from, to, range.margin)
  }
}

function scrollToCoordsRange(cm, from, to, margin) {
  let sPos = calculateScrollPos(cm, {
    left: Math.min(from.left, to.left),
    top: Math.min(from.top, to.top) - margin,
    right: Math.max(from.right, to.right),
    bottom: Math.max(from.bottom, to.bottom) + margin
  })
  scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop)
}

// Sync the scrollable area and scrollbars, ensure the viewport
// covers the visible area.
function updateScrollTop(cm, val) {
  if (Math.abs(cm.doc.scrollTop - val) < 2) return
  if (!_util_browser_js__WEBPACK_IMPORTED_MODULE_2__.gecko) (0,_update_display_js__WEBPACK_IMPORTED_MODULE_7__.updateDisplaySimple)(cm, {top: val})
  setScrollTop(cm, val, true)
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_2__.gecko) (0,_update_display_js__WEBPACK_IMPORTED_MODULE_7__.updateDisplaySimple)(cm)
  ;(0,_highlight_worker_js__WEBPACK_IMPORTED_MODULE_5__.startWorker)(cm, 100)
}

function setScrollTop(cm, val, forceScroll) {
  val = Math.max(0, Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val))
  if (cm.display.scroller.scrollTop == val && !forceScroll) return
  cm.doc.scrollTop = val
  cm.display.scrollbars.setScrollTop(val)
  if (cm.display.scroller.scrollTop != val) cm.display.scroller.scrollTop = val
}

// Sync scroller and scrollbar, ensure the gutter elements are
// aligned.
function setScrollLeft(cm, val, isScroller, forceScroll) {
  val = Math.max(0, Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth))
  if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) return
  cm.doc.scrollLeft = val
  ;(0,_line_numbers_js__WEBPACK_IMPORTED_MODULE_6__.alignHorizontally)(cm)
  if (cm.display.scroller.scrollLeft != val) cm.display.scroller.scrollLeft = val
  cm.display.scrollbars.setScrollLeft(val)
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/display/selection.js":
/*!*********************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/selection.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawSelectionCursor: () => (/* binding */ drawSelectionCursor),
/* harmony export */   prepareSelection: () => (/* binding */ prepareSelection),
/* harmony export */   restartBlink: () => (/* binding */ restartBlink),
/* harmony export */   updateSelection: () => (/* binding */ updateSelection)
/* harmony export */ });
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/spans.js */ "./src/third_party/codemirror/package/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _util_bidi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/bidi.js */ "./src/third_party/codemirror/package/src/util/bidi.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _focus_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./focus.js */ "./src/third_party/codemirror/package/src/display/focus.js");








function updateSelection(cm) {
  cm.display.input.showSelection(cm.display.input.prepareSelection())
}

function prepareSelection(cm, primary = true) {
  let doc = cm.doc, result = {}
  let curFragment = result.cursors = document.createDocumentFragment()
  let selFragment = result.selection = document.createDocumentFragment()

  for (let i = 0; i < doc.sel.ranges.length; i++) {
    if (!primary && i == doc.sel.primIndex) continue
    let range = doc.sel.ranges[i]
    if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) continue
    let collapsed = range.empty()
    if (collapsed || cm.options.showCursorWhenSelecting)
      drawSelectionCursor(cm, range.head, curFragment)
    if (!collapsed)
      drawSelectionRange(cm, range, selFragment)
  }
  return result
}

// Draws a cursor for the given range
function drawSelectionCursor(cm, head, output) {
  let pos = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.cursorCoords)(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine)

  let cursor = output.appendChild((0,_util_dom_js__WEBPACK_IMPORTED_MODULE_5__.elt)("div", "\u00a0", "CodeMirror-cursor"))
  cursor.style.left = pos.left + "px"
  cursor.style.top = pos.top + "px"
  cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px"

  if (pos.other) {
    // Secondary cursor, shown when on a 'jump' in bi-directional text
    let otherCursor = output.appendChild((0,_util_dom_js__WEBPACK_IMPORTED_MODULE_5__.elt)("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"))
    otherCursor.style.display = ""
    otherCursor.style.left = pos.other.left + "px"
    otherCursor.style.top = pos.other.top + "px"
    otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px"
  }
}

function cmpCoords(a, b) { return a.top - b.top || a.left - b.left }

// Draws the given range as a highlighted selection
function drawSelectionRange(cm, range, output) {
  let display = cm.display, doc = cm.doc
  let fragment = document.createDocumentFragment()
  let padding = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.paddingH)(cm.display), leftSide = padding.left
  let rightSide = Math.max(display.sizerWidth, (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.displayWidth)(cm) - display.sizer.offsetLeft) - padding.right
  let docLTR = doc.direction == "ltr"

  function add(left, top, width, bottom) {
    if (top < 0) top = 0
    top = Math.round(top)
    bottom = Math.round(bottom)
    fragment.appendChild((0,_util_dom_js__WEBPACK_IMPORTED_MODULE_5__.elt)("div", null, "CodeMirror-selected", `position: absolute; left: ${left}px;
                             top: ${top}px; width: ${width == null ? rightSide - left : width}px;
                             height: ${bottom - top}px`))
  }

  function drawForLine(line, fromArg, toArg) {
    let lineObj = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__.getLine)(doc, line)
    let lineLen = lineObj.text.length
    let start, end
    function coords(ch, bias) {
      return (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.charCoords)(cm, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_0__.Pos)(line, ch), "div", lineObj, bias)
    }

    function wrapX(pos, dir, side) {
      let extent = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.wrappedLineExtentChar)(cm, lineObj, null, pos)
      let prop = (dir == "ltr") == (side == "after") ? "left" : "right"
      let ch = side == "after" ? extent.begin : extent.end - (/\s/.test(lineObj.text.charAt(extent.end - 1)) ? 2 : 1)
      return coords(ch, prop)[prop]
    }

    let order = (0,_util_bidi_js__WEBPACK_IMPORTED_MODULE_4__.getOrder)(lineObj, doc.direction)
    ;(0,_util_bidi_js__WEBPACK_IMPORTED_MODULE_4__.iterateBidiSections)(order, fromArg || 0, toArg == null ? lineLen : toArg, (from, to, dir, i) => {
      let ltr = dir == "ltr"
      let fromPos = coords(from, ltr ? "left" : "right")
      let toPos = coords(to - 1, ltr ? "right" : "left")

      let openStart = fromArg == null && from == 0, openEnd = toArg == null && to == lineLen
      let first = i == 0, last = !order || i == order.length - 1
      if (toPos.top - fromPos.top <= 3) { // Single line
        let openLeft = (docLTR ? openStart : openEnd) && first
        let openRight = (docLTR ? openEnd : openStart) && last
        let left = openLeft ? leftSide : (ltr ? fromPos : toPos).left
        let right = openRight ? rightSide : (ltr ? toPos : fromPos).right
        add(left, fromPos.top, right - left, fromPos.bottom)
      } else { // Multiple lines
        let topLeft, topRight, botLeft, botRight
        if (ltr) {
          topLeft = docLTR && openStart && first ? leftSide : fromPos.left
          topRight = docLTR ? rightSide : wrapX(from, dir, "before")
          botLeft = docLTR ? leftSide : wrapX(to, dir, "after")
          botRight = docLTR && openEnd && last ? rightSide : toPos.right
        } else {
          topLeft = !docLTR ? leftSide : wrapX(from, dir, "before")
          topRight = !docLTR && openStart && first ? rightSide : fromPos.right
          botLeft = !docLTR && openEnd && last ? leftSide : toPos.left
          botRight = !docLTR ? rightSide : wrapX(to, dir, "after")
        }
        add(topLeft, fromPos.top, topRight - topLeft, fromPos.bottom)
        if (fromPos.bottom < toPos.top) add(leftSide, fromPos.bottom, null, toPos.top)
        add(botLeft, toPos.top, botRight - botLeft, toPos.bottom)
      }

      if (!start || cmpCoords(fromPos, start) < 0) start = fromPos
      if (cmpCoords(toPos, start) < 0) start = toPos
      if (!end || cmpCoords(fromPos, end) < 0) end = fromPos
      if (cmpCoords(toPos, end) < 0) end = toPos
    })
    return {start: start, end: end}
  }

  let sFrom = range.from(), sTo = range.to()
  if (sFrom.line == sTo.line) {
    drawForLine(sFrom.line, sFrom.ch, sTo.ch)
  } else {
    let fromLine = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__.getLine)(doc, sFrom.line), toLine = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__.getLine)(doc, sTo.line)
    let singleVLine = (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_1__.visualLine)(fromLine) == (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_1__.visualLine)(toLine)
    let leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end
    let rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start
    if (singleVLine) {
      if (leftEnd.top < rightStart.top - 2) {
        add(leftEnd.right, leftEnd.top, null, leftEnd.bottom)
        add(leftSide, rightStart.top, rightStart.left, rightStart.bottom)
      } else {
        add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom)
      }
    }
    if (leftEnd.bottom < rightStart.top)
      add(leftSide, leftEnd.bottom, null, rightStart.top)
  }

  output.appendChild(fragment)
}

// Cursor-blinking
function restartBlink(cm) {
  if (!cm.state.focused) return
  let display = cm.display
  clearInterval(display.blinker)
  let on = true
  display.cursorDiv.style.visibility = ""
  if (cm.options.cursorBlinkRate > 0)
    display.blinker = setInterval(() => {
      if (!cm.hasFocus()) (0,_focus_js__WEBPACK_IMPORTED_MODULE_6__.onBlur)(cm)
      display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden"
    }, cm.options.cursorBlinkRate)
  else if (cm.options.cursorBlinkRate < 0)
    display.cursorDiv.style.visibility = "hidden"
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/display/update_display.js":
/*!**************************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/update_display.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayUpdate: () => (/* binding */ DisplayUpdate),
/* harmony export */   maybeClipScrollbars: () => (/* binding */ maybeClipScrollbars),
/* harmony export */   postUpdateDisplay: () => (/* binding */ postUpdateDisplay),
/* harmony export */   setDocumentHeight: () => (/* binding */ setDocumentHeight),
/* harmony export */   updateDisplayIfNeeded: () => (/* binding */ updateDisplayIfNeeded),
/* harmony export */   updateDisplaySimple: () => (/* binding */ updateDisplaySimple),
/* harmony export */   updateGutterSpace: () => (/* binding */ updateGutterSpace)
/* harmony export */ });
/* harmony import */ var _line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/saw_special_spans.js */ "./src/third_party/codemirror/package/src/line/saw_special_spans.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/spans.js */ "./src/third_party/codemirror/package/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/operation_group.js */ "./src/third_party/codemirror/package/src/util/operation_group.js");
/* harmony import */ var _highlight_worker_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./highlight_worker.js */ "./src/third_party/codemirror/package/src/display/highlight_worker.js");
/* harmony import */ var _line_numbers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./line_numbers.js */ "./src/third_party/codemirror/package/src/display/line_numbers.js");
/* harmony import */ var _scrollbars_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scrollbars.js */ "./src/third_party/codemirror/package/src/display/scrollbars.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selection.js */ "./src/third_party/codemirror/package/src/display/selection.js");
/* harmony import */ var _update_line_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./update_line.js */ "./src/third_party/codemirror/package/src/display/update_line.js");
/* harmony import */ var _update_lines_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./update_lines.js */ "./src/third_party/codemirror/package/src/display/update_lines.js");
/* harmony import */ var _view_tracking_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view_tracking.js */ "./src/third_party/codemirror/package/src/display/view_tracking.js");


















// DISPLAY DRAWING

class DisplayUpdate {
  constructor(cm, viewport, force) {
    let display = cm.display

    this.viewport = viewport
    // Store some values that we'll need later (but don't want to force a relayout for)
    this.visible = (0,_update_lines_js__WEBPACK_IMPORTED_MODULE_14__.visibleLines)(display, cm.doc, viewport)
    this.editorIsHidden = !display.wrapper.offsetWidth
    this.wrapperHeight = display.wrapper.clientHeight
    this.wrapperWidth = display.wrapper.clientWidth
    this.oldDisplayWidth = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.displayWidth)(cm)
    this.force = force
    this.dims = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.getDimensions)(cm)
    this.events = []
  }

  signal(emitter, type) {
    if ((0,_util_event_js__WEBPACK_IMPORTED_MODULE_6__.hasHandler)(emitter, type))
      this.events.push(arguments)
  }
  finish() {
    for (let i = 0; i < this.events.length; i++)
      _util_event_js__WEBPACK_IMPORTED_MODULE_6__.signal.apply(null, this.events[i])
  }
}

function maybeClipScrollbars(cm) {
  let display = cm.display
  if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
    display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth
    display.heightForcer.style.height = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.scrollGap)(cm) + "px"
    display.sizer.style.marginBottom = -display.nativeBarWidth + "px"
    display.sizer.style.borderRightWidth = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.scrollGap)(cm) + "px"
    display.scrollbarsClipped = true
  }
}

function selectionSnapshot(cm) {
  if (cm.hasFocus()) return null
  let active = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_5__.activeElt)()
  if (!active || !(0,_util_dom_js__WEBPACK_IMPORTED_MODULE_5__.contains)(cm.display.lineDiv, active)) return null
  let result = {activeElt: active}
  if (window.getSelection) {
    let sel = window.getSelection()
    if (sel.anchorNode && sel.extend && (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_5__.contains)(cm.display.lineDiv, sel.anchorNode)) {
      result.anchorNode = sel.anchorNode
      result.anchorOffset = sel.anchorOffset
      result.focusNode = sel.focusNode
      result.focusOffset = sel.focusOffset
    }
  }
  return result
}

function restoreSelection(snapshot) {
  if (!snapshot || !snapshot.activeElt || snapshot.activeElt == (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_5__.activeElt)()) return
  snapshot.activeElt.focus()
  if (!/^(INPUT|TEXTAREA)$/.test(snapshot.activeElt.nodeName) &&
      snapshot.anchorNode && (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_5__.contains)(document.body, snapshot.anchorNode) && (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_5__.contains)(document.body, snapshot.focusNode)) {
    let sel = window.getSelection(), range = document.createRange()
    range.setEnd(snapshot.anchorNode, snapshot.anchorOffset)
    range.collapse(false)
    sel.removeAllRanges()
    sel.addRange(range)
    sel.extend(snapshot.focusNode, snapshot.focusOffset)
  }
}

// Does the actual updating of the line display. Bails out
// (returning false) when there is nothing to be done and forced is
// false.
function updateDisplayIfNeeded(cm, update) {
  let display = cm.display, doc = cm.doc

  if (update.editorIsHidden) {
    (0,_view_tracking_js__WEBPACK_IMPORTED_MODULE_15__.resetView)(cm)
    return false
  }

  // Bail out if the visible area is already rendered and nothing changed.
  if (!update.force &&
      update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
      display.renderedView == display.view && (0,_view_tracking_js__WEBPACK_IMPORTED_MODULE_15__.countDirtyView)(cm) == 0)
    return false

  if ((0,_line_numbers_js__WEBPACK_IMPORTED_MODULE_10__.maybeUpdateLineNumberWidth)(cm)) {
    (0,_view_tracking_js__WEBPACK_IMPORTED_MODULE_15__.resetView)(cm)
    update.dims = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.getDimensions)(cm)
  }

  // Compute a suitable new viewport (from & to)
  let end = doc.first + doc.size
  let from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first)
  let to = Math.min(end, update.visible.to + cm.options.viewportMargin)
  if (display.viewFrom < from && from - display.viewFrom < 20) from = Math.max(doc.first, display.viewFrom)
  if (display.viewTo > to && display.viewTo - to < 20) to = Math.min(end, display.viewTo)
  if (_line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_0__.sawCollapsedSpans) {
    from = (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_1__.visualLineNo)(cm.doc, from)
    to = (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_1__.visualLineEndNo)(cm.doc, to)
  }

  let different = from != display.viewFrom || to != display.viewTo ||
    display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth
  ;(0,_view_tracking_js__WEBPACK_IMPORTED_MODULE_15__.adjustView)(cm, from, to)

  display.viewOffset = (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_1__.heightAtLine)((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__.getLine)(cm.doc, display.viewFrom))
  // Position the mover div to align with the current scroll position
  cm.display.mover.style.top = display.viewOffset + "px"

  let toUpdate = (0,_view_tracking_js__WEBPACK_IMPORTED_MODULE_15__.countDirtyView)(cm)
  if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
    return false

  // For big changes, we hide the enclosing element during the
  // update, since that speeds up the operations on most browsers.
  let selSnapshot = selectionSnapshot(cm)
  if (toUpdate > 4) display.lineDiv.style.display = "none"
  patchDisplay(cm, display.updateLineNumbers, update.dims)
  if (toUpdate > 4) display.lineDiv.style.display = ""
  display.renderedView = display.view
  // There might have been a widget with a focused element that got
  // hidden or updated, if so re-focus it.
  restoreSelection(selSnapshot)

  // Prevent selection and cursors from interfering with the scroll
  // width and height.
  ;(0,_util_dom_js__WEBPACK_IMPORTED_MODULE_5__.removeChildren)(display.cursorDiv)
  ;(0,_util_dom_js__WEBPACK_IMPORTED_MODULE_5__.removeChildren)(display.selectionDiv)
  display.gutters.style.height = display.sizer.style.minHeight = 0

  if (different) {
    display.lastWrapHeight = update.wrapperHeight
    display.lastWrapWidth = update.wrapperWidth
    ;(0,_highlight_worker_js__WEBPACK_IMPORTED_MODULE_9__.startWorker)(cm, 400)
  }

  display.updateLineNumbers = null

  return true
}

function postUpdateDisplay(cm, update) {
  let viewport = update.viewport

  for (let first = true;; first = false) {
    if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.displayWidth)(cm)) {
      // Clip forced viewport to actual scrollable area.
      if (viewport && viewport.top != null)
        viewport = {top: Math.min(cm.doc.height + (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.paddingVert)(cm.display) - (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.displayHeight)(cm), viewport.top)}
      // Updated line heights might result in the drawn area not
      // actually covering the viewport. Keep looping until it does.
      update.visible = (0,_update_lines_js__WEBPACK_IMPORTED_MODULE_14__.visibleLines)(cm.display, cm.doc, viewport)
      if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
        break
    } else if (first) {
      update.visible = (0,_update_lines_js__WEBPACK_IMPORTED_MODULE_14__.visibleLines)(cm.display, cm.doc, viewport)
    }
    if (!updateDisplayIfNeeded(cm, update)) break
    ;(0,_update_lines_js__WEBPACK_IMPORTED_MODULE_14__.updateHeightsInViewport)(cm)
    let barMeasure = (0,_scrollbars_js__WEBPACK_IMPORTED_MODULE_11__.measureForScrollbars)(cm)
    ;(0,_selection_js__WEBPACK_IMPORTED_MODULE_12__.updateSelection)(cm)
    ;(0,_scrollbars_js__WEBPACK_IMPORTED_MODULE_11__.updateScrollbars)(cm, barMeasure)
    setDocumentHeight(cm, barMeasure)
    update.force = false
  }

  update.signal(cm, "update", cm)
  if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
    update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo)
    cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo
  }
}

function updateDisplaySimple(cm, viewport) {
  let update = new DisplayUpdate(cm, viewport)
  if (updateDisplayIfNeeded(cm, update)) {
    (0,_update_lines_js__WEBPACK_IMPORTED_MODULE_14__.updateHeightsInViewport)(cm)
    postUpdateDisplay(cm, update)
    let barMeasure = (0,_scrollbars_js__WEBPACK_IMPORTED_MODULE_11__.measureForScrollbars)(cm)
    ;(0,_selection_js__WEBPACK_IMPORTED_MODULE_12__.updateSelection)(cm)
    ;(0,_scrollbars_js__WEBPACK_IMPORTED_MODULE_11__.updateScrollbars)(cm, barMeasure)
    setDocumentHeight(cm, barMeasure)
    update.finish()
  }
}

// Sync the actual display DOM structure with display.view, removing
// nodes for lines that are no longer in view, and creating the ones
// that are not there yet, and updating the ones that are out of
// date.
function patchDisplay(cm, updateNumbersFrom, dims) {
  let display = cm.display, lineNumbers = cm.options.lineNumbers
  let container = display.lineDiv, cur = container.firstChild

  function rm(node) {
    let next = node.nextSibling
    // Works around a throw-scroll bug in OS X Webkit
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_4__.webkit && _util_browser_js__WEBPACK_IMPORTED_MODULE_4__.mac && cm.display.currentWheelTarget == node)
      node.style.display = "none"
    else
      node.parentNode.removeChild(node)
    return next
  }

  let view = display.view, lineN = display.viewFrom
  // Loop over the elements in the view, syncing cur (the DOM nodes
  // in display.lineDiv) with the view as we go.
  for (let i = 0; i < view.length; i++) {
    let lineView = view[i]
    if (lineView.hidden) {
    } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
      let node = (0,_update_line_js__WEBPACK_IMPORTED_MODULE_13__.buildLineElement)(cm, lineView, lineN, dims)
      container.insertBefore(node, cur)
    } else { // Already drawn
      while (cur != lineView.node) cur = rm(cur)
      let updateNumber = lineNumbers && updateNumbersFrom != null &&
        updateNumbersFrom <= lineN && lineView.lineNumber
      if (lineView.changes) {
        if ((0,_util_misc_js__WEBPACK_IMPORTED_MODULE_7__.indexOf)(lineView.changes, "gutter") > -1) updateNumber = false
        ;(0,_update_line_js__WEBPACK_IMPORTED_MODULE_13__.updateLineForChanges)(cm, lineView, lineN, dims)
      }
      if (updateNumber) {
        (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_5__.removeChildren)(lineView.lineNumber)
        lineView.lineNumber.appendChild(document.createTextNode((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__.lineNumberFor)(cm.options, lineN)))
      }
      cur = lineView.node.nextSibling
    }
    lineN += lineView.size
  }
  while (cur) cur = rm(cur)
}

function updateGutterSpace(display) {
  let width = display.gutters.offsetWidth
  display.sizer.style.marginLeft = width + "px"
  // Send an event to consumers responding to changes in gutter width.
  ;(0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_8__.signalLater)(display, "gutterChanged", display)
}

function setDocumentHeight(cm, measure) {
  cm.display.sizer.style.minHeight = measure.docHeight + "px"
  cm.display.heightForcer.style.top = measure.docHeight + "px"
  cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.scrollGap)(cm)) + "px"
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/display/update_lines.js":
/*!************************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/update_lines.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateHeightsInViewport: () => (/* binding */ updateHeightsInViewport),
/* harmony export */   visibleLines: () => (/* binding */ visibleLines)
/* harmony export */ });
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/spans.js */ "./src/third_party/codemirror/package/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");





// Read the actual heights of the rendered lines, and update their
// stored heights to match.
function updateHeightsInViewport(cm) {
  let display = cm.display
  let prevBottom = display.lineDiv.offsetTop
  for (let i = 0; i < display.view.length; i++) {
    let cur = display.view[i], wrapping = cm.options.lineWrapping
    let height, width = 0
    if (cur.hidden) continue
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_3__.ie && _util_browser_js__WEBPACK_IMPORTED_MODULE_3__.ie_version < 8) {
      let bot = cur.node.offsetTop + cur.node.offsetHeight
      height = bot - prevBottom
      prevBottom = bot
    } else {
      let box = cur.node.getBoundingClientRect()
      height = box.bottom - box.top
      // Check that lines don't extend past the right of the current
      // editor width
      if (!wrapping && cur.text.firstChild)
        width = cur.text.firstChild.getBoundingClientRect().right - box.left - 1
    }
    let diff = cur.line.height - height
    if (diff > .005 || diff < -.005) {
      (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__.updateLineHeight)(cur.line, height)
      updateWidgetHeight(cur.line)
      if (cur.rest) for (let j = 0; j < cur.rest.length; j++)
        updateWidgetHeight(cur.rest[j])
    }
    if (width > cm.display.sizerWidth) {
      let chWidth = Math.ceil(width / (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__.charWidth)(cm.display))
      if (chWidth > cm.display.maxLineLength) {
        cm.display.maxLineLength = chWidth
        cm.display.maxLine = cur.line
        cm.display.maxLineChanged = true
      }
    }
  }
}

// Read and store the height of line widgets associated with the
// given line.
function updateWidgetHeight(line) {
  if (line.widgets) for (let i = 0; i < line.widgets.length; ++i) {
    let w = line.widgets[i], parent = w.node.parentNode
    if (parent) w.height = parent.offsetHeight
  }
}

// Compute the lines that are visible in a given viewport (defaults
// the the current scroll position). viewport may contain top,
// height, and ensure (see op.scrollToPos) properties.
function visibleLines(display, doc, viewport) {
  let top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop
  top = Math.floor(top - (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_2__.paddingTop)(display))
  let bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight

  let from = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__.lineAtHeight)(doc, top), to = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__.lineAtHeight)(doc, bottom)
  // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
  // forces those lines into the viewport (if possible).
  if (viewport && viewport.ensure) {
    let ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line
    if (ensureFrom < from) {
      from = ensureFrom
      to = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__.lineAtHeight)(doc, (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_0__.heightAtLine)((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__.getLine)(doc, ensureFrom)) + display.wrapper.clientHeight)
    } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
      from = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__.lineAtHeight)(doc, (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_0__.heightAtLine)((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__.getLine)(doc, ensureTo)) - display.wrapper.clientHeight)
      to = ensureTo
    }
  }
  return {from: from, to: Math.max(to, from + 1)}
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/display/view_tracking.js":
/*!*************************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/view_tracking.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustView: () => (/* binding */ adjustView),
/* harmony export */   countDirtyView: () => (/* binding */ countDirtyView),
/* harmony export */   regChange: () => (/* binding */ regChange),
/* harmony export */   regLineChange: () => (/* binding */ regLineChange),
/* harmony export */   resetView: () => (/* binding */ resetView)
/* harmony export */ });
/* harmony import */ var _line_line_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/line_data.js */ "./src/third_party/codemirror/package/src/line/line_data.js");
/* harmony import */ var _line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/saw_special_spans.js */ "./src/third_party/codemirror/package/src/line/saw_special_spans.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/spans.js */ "./src/third_party/codemirror/package/src/line/spans.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");






// Updates the display.view data structure for a given change to the
// document. From and to are in pre-change coordinates. Lendiff is
// the amount of lines added or subtracted by the change. This is
// used for changes that span multiple lines, or change the way
// lines are divided into visual lines. regLineChange (below)
// registers single-line changes.
function regChange(cm, from, to, lendiff) {
  if (from == null) from = cm.doc.first
  if (to == null) to = cm.doc.first + cm.doc.size
  if (!lendiff) lendiff = 0

  let display = cm.display
  if (lendiff && to < display.viewTo &&
      (display.updateLineNumbers == null || display.updateLineNumbers > from))
    display.updateLineNumbers = from

  cm.curOp.viewChanged = true

  if (from >= display.viewTo) { // Change after
    if (_line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_1__.sawCollapsedSpans && (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_2__.visualLineNo)(cm.doc, from) < display.viewTo)
      resetView(cm)
  } else if (to <= display.viewFrom) { // Change before
    if (_line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_1__.sawCollapsedSpans && (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_2__.visualLineEndNo)(cm.doc, to + lendiff) > display.viewFrom) {
      resetView(cm)
    } else {
      display.viewFrom += lendiff
      display.viewTo += lendiff
    }
  } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
    resetView(cm)
  } else if (from <= display.viewFrom) { // Top overlap
    let cut = viewCuttingPoint(cm, to, to + lendiff, 1)
    if (cut) {
      display.view = display.view.slice(cut.index)
      display.viewFrom = cut.lineN
      display.viewTo += lendiff
    } else {
      resetView(cm)
    }
  } else if (to >= display.viewTo) { // Bottom overlap
    let cut = viewCuttingPoint(cm, from, from, -1)
    if (cut) {
      display.view = display.view.slice(0, cut.index)
      display.viewTo = cut.lineN
    } else {
      resetView(cm)
    }
  } else { // Gap in the middle
    let cutTop = viewCuttingPoint(cm, from, from, -1)
    let cutBot = viewCuttingPoint(cm, to, to + lendiff, 1)
    if (cutTop && cutBot) {
      display.view = display.view.slice(0, cutTop.index)
        .concat((0,_line_line_data_js__WEBPACK_IMPORTED_MODULE_0__.buildViewArray)(cm, cutTop.lineN, cutBot.lineN))
        .concat(display.view.slice(cutBot.index))
      display.viewTo += lendiff
    } else {
      resetView(cm)
    }
  }

  let ext = display.externalMeasured
  if (ext) {
    if (to < ext.lineN)
      ext.lineN += lendiff
    else if (from < ext.lineN + ext.size)
      display.externalMeasured = null
  }
}

// Register a change to a single line. Type must be one of "text",
// "gutter", "class", "widget"
function regLineChange(cm, line, type) {
  cm.curOp.viewChanged = true
  let display = cm.display, ext = cm.display.externalMeasured
  if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
    display.externalMeasured = null

  if (line < display.viewFrom || line >= display.viewTo) return
  let lineView = display.view[(0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.findViewIndex)(cm, line)]
  if (lineView.node == null) return
  let arr = lineView.changes || (lineView.changes = [])
  if ((0,_util_misc_js__WEBPACK_IMPORTED_MODULE_4__.indexOf)(arr, type) == -1) arr.push(type)
}

// Clear the view.
function resetView(cm) {
  cm.display.viewFrom = cm.display.viewTo = cm.doc.first
  cm.display.view = []
  cm.display.viewOffset = 0
}

function viewCuttingPoint(cm, oldN, newN, dir) {
  let index = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.findViewIndex)(cm, oldN), diff, view = cm.display.view
  if (!_line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_1__.sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
    return {index: index, lineN: newN}
  let n = cm.display.viewFrom
  for (let i = 0; i < index; i++)
    n += view[i].size
  if (n != oldN) {
    if (dir > 0) {
      if (index == view.length - 1) return null
      diff = (n + view[index].size) - oldN
      index++
    } else {
      diff = n - oldN
    }
    oldN += diff; newN += diff
  }
  while ((0,_line_spans_js__WEBPACK_IMPORTED_MODULE_2__.visualLineNo)(cm.doc, newN) != newN) {
    if (index == (dir < 0 ? 0 : view.length - 1)) return null
    newN += dir * view[index - (dir < 0 ? 1 : 0)].size
    index += dir
  }
  return {index: index, lineN: newN}
}

// Force the view to cover a given range, adding empty view element
// or clipping off existing ones as needed.
function adjustView(cm, from, to) {
  let display = cm.display, view = display.view
  if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
    display.view = (0,_line_line_data_js__WEBPACK_IMPORTED_MODULE_0__.buildViewArray)(cm, from, to)
    display.viewFrom = from
  } else {
    if (display.viewFrom > from)
      display.view = (0,_line_line_data_js__WEBPACK_IMPORTED_MODULE_0__.buildViewArray)(cm, from, display.viewFrom).concat(display.view)
    else if (display.viewFrom < from)
      display.view = display.view.slice((0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.findViewIndex)(cm, from))
    display.viewFrom = from
    if (display.viewTo < to)
      display.view = display.view.concat((0,_line_line_data_js__WEBPACK_IMPORTED_MODULE_0__.buildViewArray)(cm, display.viewTo, to))
    else if (display.viewTo > to)
      display.view = display.view.slice(0, (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.findViewIndex)(cm, to))
  }
  display.viewTo = to
}

// Count the number of lines in the view whose DOM representation is
// out of date (or nonexistent).
function countDirtyView(cm) {
  let view = cm.display.view, dirty = 0
  for (let i = 0; i < view.length; i++) {
    let lineView = view[i]
    if (!lineView.hidden && (!lineView.node || lineView.changes)) ++dirty
  }
  return dirty
}


/***/ })

}]);