"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_display_update_line_js"],{

/***/ "./src/third_party/codemirror/package/src/display/update_line.js":
/*!***********************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/update_line.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLineElement: () => (/* binding */ buildLineElement),
/* harmony export */   updateLineForChanges: () => (/* binding */ updateLineForChanges)
/* harmony export */ });
/* harmony import */ var _line_line_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/line_data.js */ "./src/third_party/codemirror/package/src/line/line_data.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/operation_group.js */ "./src/third_party/codemirror/package/src/util/operation_group.js");






// When an aspect of a line changes, a string is added to
// lineView.changes. This updates the relevant part of the line's
// DOM structure.
function updateLineForChanges(cm, lineView, lineN, dims) {
  for (let j = 0; j < lineView.changes.length; j++) {
    let type = lineView.changes[j]
    if (type == "text") updateLineText(cm, lineView)
    else if (type == "gutter") updateLineGutter(cm, lineView, lineN, dims)
    else if (type == "class") updateLineClasses(cm, lineView)
    else if (type == "widget") updateLineWidgets(cm, lineView, dims)
  }
  lineView.changes = null
}

// Lines with gutter elements, widgets or a background class need to
// be wrapped, and have the extra elements added to the wrapper div
function ensureLineWrapped(lineView) {
  if (lineView.node == lineView.text) {
    lineView.node = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_3__.elt)("div", null, null, "position: relative")
    if (lineView.text.parentNode)
      lineView.text.parentNode.replaceChild(lineView.node, lineView.text)
    lineView.node.appendChild(lineView.text)
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_2__.ie && _util_browser_js__WEBPACK_IMPORTED_MODULE_2__.ie_version < 8) lineView.node.style.zIndex = 2
  }
  return lineView.node
}

function updateLineBackground(cm, lineView) {
  let cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass
  if (cls) cls += " CodeMirror-linebackground"
  if (lineView.background) {
    if (cls) lineView.background.className = cls
    else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null }
  } else if (cls) {
    let wrap = ensureLineWrapped(lineView)
    lineView.background = wrap.insertBefore((0,_util_dom_js__WEBPACK_IMPORTED_MODULE_3__.elt)("div", null, cls), wrap.firstChild)
    cm.display.input.setUneditable(lineView.background)
  }
}

// Wrapper around buildLineContent which will reuse the structure
// in display.externalMeasured when possible.
function getLineContent(cm, lineView) {
  let ext = cm.display.externalMeasured
  if (ext && ext.line == lineView.line) {
    cm.display.externalMeasured = null
    lineView.measure = ext.measure
    return ext.built
  }
  return (0,_line_line_data_js__WEBPACK_IMPORTED_MODULE_0__.buildLineContent)(cm, lineView)
}

// Redraw the line's text. Interacts with the background and text
// classes because the mode may output tokens that influence these
// classes.
function updateLineText(cm, lineView) {
  let cls = lineView.text.className
  let built = getLineContent(cm, lineView)
  if (lineView.text == lineView.node) lineView.node = built.pre
  lineView.text.parentNode.replaceChild(built.pre, lineView.text)
  lineView.text = built.pre
  if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
    lineView.bgClass = built.bgClass
    lineView.textClass = built.textClass
    updateLineClasses(cm, lineView)
  } else if (cls) {
    lineView.text.className = cls
  }
}

function updateLineClasses(cm, lineView) {
  updateLineBackground(cm, lineView)
  if (lineView.line.wrapClass)
    ensureLineWrapped(lineView).className = lineView.line.wrapClass
  else if (lineView.node != lineView.text)
    lineView.node.className = ""
  let textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass
  lineView.text.className = textClass || ""
}

function updateLineGutter(cm, lineView, lineN, dims) {
  if (lineView.gutter) {
    lineView.node.removeChild(lineView.gutter)
    lineView.gutter = null
  }
  if (lineView.gutterBackground) {
    lineView.node.removeChild(lineView.gutterBackground)
    lineView.gutterBackground = null
  }
  if (lineView.line.gutterClass) {
    let wrap = ensureLineWrapped(lineView)
    lineView.gutterBackground = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_3__.elt)("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
                                    `left: ${cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth}px; width: ${dims.gutterTotalWidth}px`)
    cm.display.input.setUneditable(lineView.gutterBackground)
    wrap.insertBefore(lineView.gutterBackground, lineView.text)
  }
  let markers = lineView.line.gutterMarkers
  if (cm.options.lineNumbers || markers) {
    let wrap = ensureLineWrapped(lineView)
    let gutterWrap = lineView.gutter = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_3__.elt)("div", null, "CodeMirror-gutter-wrapper", `left: ${cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth}px`)
    gutterWrap.setAttribute("aria-hidden", "true")
    cm.display.input.setUneditable(gutterWrap)
    wrap.insertBefore(gutterWrap, lineView.text)
    if (lineView.line.gutterClass)
      gutterWrap.className += " " + lineView.line.gutterClass
    if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
      lineView.lineNumber = gutterWrap.appendChild(
        (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_3__.elt)("div", (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_1__.lineNumberFor)(cm.options, lineN),
            "CodeMirror-linenumber CodeMirror-gutter-elt",
            `left: ${dims.gutterLeft["CodeMirror-linenumbers"]}px; width: ${cm.display.lineNumInnerWidth}px`))
    if (markers) for (let k = 0; k < cm.display.gutterSpecs.length; ++k) {
      let id = cm.display.gutterSpecs[k].className, found = markers.hasOwnProperty(id) && markers[id]
      if (found)
        gutterWrap.appendChild((0,_util_dom_js__WEBPACK_IMPORTED_MODULE_3__.elt)("div", [found], "CodeMirror-gutter-elt",
                                   `left: ${dims.gutterLeft[id]}px; width: ${dims.gutterWidth[id]}px`))
    }
  }
}

function updateLineWidgets(cm, lineView, dims) {
  if (lineView.alignable) lineView.alignable = null
  let isWidget = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_3__.classTest)("CodeMirror-linewidget")
  for (let node = lineView.node.firstChild, next; node; node = next) {
    next = node.nextSibling
    if (isWidget.test(node.className)) lineView.node.removeChild(node)
  }
  insertLineWidgets(cm, lineView, dims)
}

// Build a line's DOM representation from scratch
function buildLineElement(cm, lineView, lineN, dims) {
  let built = getLineContent(cm, lineView)
  lineView.text = lineView.node = built.pre
  if (built.bgClass) lineView.bgClass = built.bgClass
  if (built.textClass) lineView.textClass = built.textClass

  updateLineClasses(cm, lineView)
  updateLineGutter(cm, lineView, lineN, dims)
  insertLineWidgets(cm, lineView, dims)
  return lineView.node
}

// A lineView may contain multiple logical lines (when merged by
// collapsed spans). The widgets for all of them need to be drawn.
function insertLineWidgets(cm, lineView, dims) {
  insertLineWidgetsFor(cm, lineView.line, lineView, dims, true)
  if (lineView.rest) for (let i = 0; i < lineView.rest.length; i++)
    insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false)
}

function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
  if (!line.widgets) return
  let wrap = ensureLineWrapped(lineView)
  for (let i = 0, ws = line.widgets; i < ws.length; ++i) {
    let widget = ws[i], node = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_3__.elt)("div", [widget.node], "CodeMirror-linewidget" + (widget.className ? " " + widget.className : ""))
    if (!widget.handleMouseEvents) node.setAttribute("cm-ignore-events", "true")
    positionLineWidget(widget, node, lineView, dims)
    cm.display.input.setUneditable(node)
    if (allowAbove && widget.above)
      wrap.insertBefore(node, lineView.gutter || lineView.text)
    else
      wrap.appendChild(node)
    ;(0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_4__.signalLater)(widget, "redraw")
  }
}

function positionLineWidget(widget, node, lineView, dims) {
  if (widget.noHScroll) {
    ;(lineView.alignable || (lineView.alignable = [])).push(node)
    let width = dims.wrapperWidth
    node.style.left = dims.fixedPos + "px"
    if (!widget.coverGutter) {
      width -= dims.gutterTotalWidth
      node.style.paddingLeft = dims.gutterTotalWidth + "px"
    }
    node.style.width = width + "px"
  }
  if (widget.coverGutter) {
    node.style.zIndex = 5
    node.style.position = "relative"
    if (!widget.noHScroll) node.style.marginLeft = -dims.gutterTotalWidth + "px"
  }
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/util/operation_group.js":
/*!************************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/util/operation_group.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   finishOperation: () => (/* binding */ finishOperation),
/* harmony export */   pushOperation: () => (/* binding */ pushOperation),
/* harmony export */   signalLater: () => (/* binding */ signalLater)
/* harmony export */ });
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.js */ "./src/third_party/codemirror/package/src/util/event.js");


let operationGroup = null

function pushOperation(op) {
  if (operationGroup) {
    operationGroup.ops.push(op)
  } else {
    op.ownsGroup = operationGroup = {
      ops: [op],
      delayedCallbacks: []
    }
  }
}

function fireCallbacksForOps(group) {
  // Calls delayed callbacks and cursorActivity handlers until no
  // new ones appear
  let callbacks = group.delayedCallbacks, i = 0
  do {
    for (; i < callbacks.length; i++)
      callbacks[i].call(null)
    for (let j = 0; j < group.ops.length; j++) {
      let op = group.ops[j]
      if (op.cursorActivityHandlers)
        while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
          op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm)
    }
  } while (i < callbacks.length)
}

function finishOperation(op, endCb) {
  let group = op.ownsGroup
  if (!group) return

  try { fireCallbacksForOps(group) }
  finally {
    operationGroup = null
    endCb(group)
  }
}

let orphanDelayedCallbacks = null

// Often, we want to signal events at a point where we are in the
// middle of some work, but don't want the handler to start calling
// other methods on the editor, which might be in an inconsistent
// state or simply not expect any other events to happen.
// signalLater looks whether there are any handlers, and schedules
// them to be executed when the last operation ends, or, if no
// operation is active, when a timeout fires.
function signalLater(emitter, type /*, values...*/) {
  let arr = (0,_event_js__WEBPACK_IMPORTED_MODULE_0__.getHandlers)(emitter, type)
  if (!arr.length) return
  let args = Array.prototype.slice.call(arguments, 2), list
  if (operationGroup) {
    list = operationGroup.delayedCallbacks
  } else if (orphanDelayedCallbacks) {
    list = orphanDelayedCallbacks
  } else {
    list = orphanDelayedCallbacks = []
    setTimeout(fireOrphanDelayed, 0)
  }
  for (let i = 0; i < arr.length; ++i)
    list.push(() => arr[i].apply(null, args))
}

function fireOrphanDelayed() {
  let delayed = orphanDelayedCallbacks
  orphanDelayedCallbacks = null
  for (let i = 0; i < delayed.length; ++i) delayed[i]()
}


/***/ })

}]);