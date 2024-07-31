"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_display_Display_js"],{

/***/ "./src/third_party/codemirror/package/src/display/Display.js":
/*!*******************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/Display.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Display: () => (/* binding */ Display)
/* harmony export */ });
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _gutters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gutters.js */ "./src/third_party/codemirror/package/src/display/gutters.js");





// The display handles the DOM integration, both for input reading
// and content drawing. It holds references to DOM nodes and
// display-related state.

function Display(place, doc, input, options) {
  let d = this
  this.input = input

  // Covers bottom-right square when both scrollbars are present.
  d.scrollbarFiller = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("div", null, "CodeMirror-scrollbar-filler")
  d.scrollbarFiller.setAttribute("cm-not-content", "true")
  // Covers bottom of gutter when coverGutterNextToScrollbar is on
  // and h scrollbar is present.
  d.gutterFiller = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("div", null, "CodeMirror-gutter-filler")
  d.gutterFiller.setAttribute("cm-not-content", "true")
  // Will contain the actual code, positioned to cover the viewport.
  d.lineDiv = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.eltP)("div", null, "CodeMirror-code")
  // Elements are added to these to represent selection and cursors.
  d.selectionDiv = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("div", null, null, "position: relative; z-index: 1")
  d.cursorDiv = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("div", null, "CodeMirror-cursors")
  // A visibility: hidden element used to find the size of things.
  d.measure = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("div", null, "CodeMirror-measure")
  // When lines outside of the viewport are measured, they are drawn in this.
  d.lineMeasure = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("div", null, "CodeMirror-measure")
  // Wraps everything that needs to exist inside the vertically-padded coordinate system
  d.lineSpace = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.eltP)("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
                    null, "position: relative; outline: none")
  let lines = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.eltP)("div", [d.lineSpace], "CodeMirror-lines")
  // Moved around its parent to cover visible view.
  d.mover = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("div", [lines], null, "position: relative")
  // Set to the height of the document, allowing scrolling.
  d.sizer = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("div", [d.mover], "CodeMirror-sizer")
  d.sizerWidth = null
  // Behavior of elts with overflow: auto and padding is
  // inconsistent across browsers. This is used to ensure the
  // scrollable area is big enough.
  d.heightForcer = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("div", null, null, "position: absolute; height: " + _util_misc_js__WEBPACK_IMPORTED_MODULE_2__.scrollerGap + "px; width: 1px;")
  // Will contain the gutters, if any.
  d.gutters = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("div", null, "CodeMirror-gutters")
  d.lineGutter = null
  // Actual scrollable element.
  d.scroller = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll")
  d.scroller.setAttribute("tabIndex", "-1")
  // The element in which the editor lives.
  d.wrapper = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror")

  // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_0__.ie && _util_browser_js__WEBPACK_IMPORTED_MODULE_0__.ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0 }
  if (!_util_browser_js__WEBPACK_IMPORTED_MODULE_0__.webkit && !(_util_browser_js__WEBPACK_IMPORTED_MODULE_0__.gecko && _util_browser_js__WEBPACK_IMPORTED_MODULE_0__.mobile)) d.scroller.draggable = true

  if (place) {
    if (place.appendChild) place.appendChild(d.wrapper)
    else place(d.wrapper)
  }

  // Current rendered range (may be bigger than the view window).
  d.viewFrom = d.viewTo = doc.first
  d.reportedViewFrom = d.reportedViewTo = doc.first
  // Information about the rendered lines.
  d.view = []
  d.renderedView = null
  // Holds info about a single rendered line when it was rendered
  // for measurement, while not in view.
  d.externalMeasured = null
  // Empty space (in pixels) above the view
  d.viewOffset = 0
  d.lastWrapHeight = d.lastWrapWidth = 0
  d.updateLineNumbers = null

  d.nativeBarWidth = d.barHeight = d.barWidth = 0
  d.scrollbarsClipped = false

  // Used to only resize the line number gutter when necessary (when
  // the amount of lines crosses a boundary that makes its width change)
  d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null
  // Set to true when a non-horizontal-scrolling line widget is
  // added. As an optimization, line widget aligning is skipped when
  // this is false.
  d.alignWidgets = false

  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null

  // Tracks the maximum line length so that the horizontal scrollbar
  // can be kept static when scrolling.
  d.maxLine = null
  d.maxLineLength = 0
  d.maxLineChanged = false

  // Used for measuring wheel scrolling granularity
  d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null

  // True when shift is held down.
  d.shift = false

  // Used to track whether anything happened since the context menu
  // was opened.
  d.selForContextMenu = null

  d.activeTouch = null

  d.gutterSpecs = (0,_gutters_js__WEBPACK_IMPORTED_MODULE_3__.getGutters)(options.gutters, options.lineNumbers)
  ;(0,_gutters_js__WEBPACK_IMPORTED_MODULE_3__.renderGutters)(d)

  input.init(d)
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/display/gutters.js":
/*!*******************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/gutters.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGutters: () => (/* binding */ getGutters),
/* harmony export */   renderGutters: () => (/* binding */ renderGutters),
/* harmony export */   updateGutters: () => (/* binding */ updateGutters)
/* harmony export */ });
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _line_numbers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line_numbers.js */ "./src/third_party/codemirror/package/src/display/line_numbers.js");
/* harmony import */ var _update_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update_display.js */ "./src/third_party/codemirror/package/src/display/update_display.js");
/* harmony import */ var _view_tracking_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view_tracking.js */ "./src/third_party/codemirror/package/src/display/view_tracking.js");






function getGutters(gutters, lineNumbers) {
  let result = [], sawLineNumbers = false
  for (let i = 0; i < gutters.length; i++) {
    let name = gutters[i], style = null
    if (typeof name != "string") { style = name.style; name = name.className }
    if (name == "CodeMirror-linenumbers") {
      if (!lineNumbers) continue
      else sawLineNumbers = true
    }
    result.push({className: name, style})
  }
  if (lineNumbers && !sawLineNumbers) result.push({className: "CodeMirror-linenumbers", style: null})
  return result
}

// Rebuild the gutter elements, ensure the margin to the left of the
// code matches their width.
function renderGutters(display) {
  let gutters = display.gutters, specs = display.gutterSpecs
  ;(0,_util_dom_js__WEBPACK_IMPORTED_MODULE_0__.removeChildren)(gutters)
  display.lineGutter = null
  for (let i = 0; i < specs.length; ++i) {
    let {className, style} = specs[i]
    let gElt = gutters.appendChild((0,_util_dom_js__WEBPACK_IMPORTED_MODULE_0__.elt)("div", null, "CodeMirror-gutter " + className))
    if (style) gElt.style.cssText = style
    if (className == "CodeMirror-linenumbers") {
      display.lineGutter = gElt
      gElt.style.width = (display.lineNumWidth || 1) + "px"
    }
  }
  gutters.style.display = specs.length ? "" : "none"
  ;(0,_update_display_js__WEBPACK_IMPORTED_MODULE_2__.updateGutterSpace)(display)
}

function updateGutters(cm) {
  renderGutters(cm.display)
  ;(0,_view_tracking_js__WEBPACK_IMPORTED_MODULE_3__.regChange)(cm)
  ;(0,_line_numbers_js__WEBPACK_IMPORTED_MODULE_1__.alignHorizontally)(cm)
}


/***/ })

}]);