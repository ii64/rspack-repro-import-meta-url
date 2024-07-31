"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_edit_global_events_js"],{

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

/***/ "./src/third_party/codemirror/package/src/edit/global_events.js":
/*!**********************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/edit/global_events.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ensureGlobalHandlers: () => (/* binding */ ensureGlobalHandlers)
/* harmony export */ });
/* harmony import */ var _display_focus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/focus.js */ "./src/third_party/codemirror/package/src/display/focus.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");



// These must be handled carefully, because naively registering a
// handler for each editor will cause the editors to never be
// garbage collected.

function forEachCodeMirror(f) {
  if (!document.getElementsByClassName) return
  let byClass = document.getElementsByClassName("CodeMirror"), editors = []
  for (let i = 0; i < byClass.length; i++) {
    let cm = byClass[i].CodeMirror
    if (cm) editors.push(cm)
  }
  if (editors.length) editors[0].operation(() => {
    for (let i = 0; i < editors.length; i++) f(editors[i])
  })
}

let globalsRegistered = false
function ensureGlobalHandlers() {
  if (globalsRegistered) return
  registerGlobalHandlers()
  globalsRegistered = true
}
function registerGlobalHandlers() {
  // When the window resizes, we need to refresh active editors.
  let resizeTimer
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_1__.on)(window, "resize", () => {
    if (resizeTimer == null) resizeTimer = setTimeout(() => {
      resizeTimer = null
      forEachCodeMirror(onResize)
    }, 100)
  })
  // When the window loses focus, we want to show the editor as blurred
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_1__.on)(window, "blur", () => forEachCodeMirror(_display_focus_js__WEBPACK_IMPORTED_MODULE_0__.onBlur))
}
// Called when the window resizes
function onResize(cm) {
  let d = cm.display
  // Might be a text scaling operation, clear size caches.
  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null
  d.scrollbarsClipped = false
  cm.setSize()
}


/***/ })

}]);