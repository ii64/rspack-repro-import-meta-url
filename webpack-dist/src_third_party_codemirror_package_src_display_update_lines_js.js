"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_display_update_lines_js"],{

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


/***/ })

}]);