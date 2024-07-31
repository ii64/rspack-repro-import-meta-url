"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_edit_CodeMirror_js-src_third_party_codemirror_package_-258c5b"],{

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


/***/ }),

/***/ "./src/third_party/codemirror/package/src/display/scroll_events.js":
/*!*************************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/scroll_events.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onScrollWheel: () => (/* binding */ onScrollWheel),
/* harmony export */   wheelEventPixels: () => (/* binding */ wheelEventPixels)
/* harmony export */ });
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _scrolling_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrolling.js */ "./src/third_party/codemirror/package/src/display/scrolling.js");
/* harmony import */ var _update_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update_display.js */ "./src/third_party/codemirror/package/src/display/update_display.js");






// Since the delta values reported on mouse wheel events are
// unstandardized between browsers and even browser versions, and
// generally horribly unpredictable, this code starts by measuring
// the scroll effect that the first few mouse wheel events have,
// and, from that, detects the way it can convert deltas to pixel
// offsets afterwards.
//
// The reason we want to know the amount a wheel event will scroll
// is that it gives us a chance to update the display before the
// actual scrolling happens, reducing flickering.

let wheelSamples = 0, wheelPixelsPerUnit = null
// Fill in a browser-detected starting value on browsers where we
// know one. These don't have to be accurate -- the result of them
// being wrong would just be a slight flicker on the first wheel
// scroll (if it is large enough).
if (_util_browser_js__WEBPACK_IMPORTED_MODULE_0__.ie) wheelPixelsPerUnit = -.53
else if (_util_browser_js__WEBPACK_IMPORTED_MODULE_0__.gecko) wheelPixelsPerUnit = 15
else if (_util_browser_js__WEBPACK_IMPORTED_MODULE_0__.chrome) wheelPixelsPerUnit = -.7
else if (_util_browser_js__WEBPACK_IMPORTED_MODULE_0__.safari) wheelPixelsPerUnit = -1/3

function wheelEventDelta(e) {
  let dx = e.wheelDeltaX, dy = e.wheelDeltaY
  if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) dx = e.detail
  if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) dy = e.detail
  else if (dy == null) dy = e.wheelDelta
  return {x: dx, y: dy}
}
function wheelEventPixels(e) {
  let delta = wheelEventDelta(e)
  delta.x *= wheelPixelsPerUnit
  delta.y *= wheelPixelsPerUnit
  return delta
}

function onScrollWheel(cm, e) {
  let delta = wheelEventDelta(e), dx = delta.x, dy = delta.y

  let display = cm.display, scroll = display.scroller
  // Quit if there's nothing to scroll here
  let canScrollX = scroll.scrollWidth > scroll.clientWidth
  let canScrollY = scroll.scrollHeight > scroll.clientHeight
  if (!(dx && canScrollX || dy && canScrollY)) return

  // Webkit browsers on OS X abort momentum scrolls when the target
  // of the scroll event is removed from the scrollable element.
  // This hack (see related code in patchDisplay) makes sure the
  // element is kept around.
  if (dy && _util_browser_js__WEBPACK_IMPORTED_MODULE_0__.mac && _util_browser_js__WEBPACK_IMPORTED_MODULE_0__.webkit) {
    outer: for (let cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
      for (let i = 0; i < view.length; i++) {
        if (view[i].node == cur) {
          cm.display.currentWheelTarget = cur
          break outer
        }
      }
    }
  }

  // On some browsers, horizontal scrolling will cause redraws to
  // happen before the gutter has been realigned, causing it to
  // wriggle around in a most unseemly way. When we have an
  // estimated pixels/delta value, we just handle horizontal
  // scrolling entirely here. It'll be slightly off from native, but
  // better than glitching out.
  if (dx && !_util_browser_js__WEBPACK_IMPORTED_MODULE_0__.gecko && !_util_browser_js__WEBPACK_IMPORTED_MODULE_0__.presto && wheelPixelsPerUnit != null) {
    if (dy && canScrollY)
      (0,_scrolling_js__WEBPACK_IMPORTED_MODULE_2__.updateScrollTop)(cm, Math.max(0, scroll.scrollTop + dy * wheelPixelsPerUnit))
    ;(0,_scrolling_js__WEBPACK_IMPORTED_MODULE_2__.setScrollLeft)(cm, Math.max(0, scroll.scrollLeft + dx * wheelPixelsPerUnit))
    // Only prevent default scrolling if vertical scrolling is
    // actually possible. Otherwise, it causes vertical scroll
    // jitter on OSX trackpads when deltaX is small and deltaY
    // is large (issue #3579)
    if (!dy || (dy && canScrollY))
      (0,_util_event_js__WEBPACK_IMPORTED_MODULE_1__.e_preventDefault)(e)
    display.wheelStartX = null // Abort measurement, if in progress
    return
  }

  // 'Project' the visible viewport to cover the area that is being
  // scrolled into view (if we know enough to estimate it).
  if (dy && wheelPixelsPerUnit != null) {
    let pixels = dy * wheelPixelsPerUnit
    let top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight
    if (pixels < 0) top = Math.max(0, top + pixels - 50)
    else bot = Math.min(cm.doc.height, bot + pixels + 50)
    ;(0,_update_display_js__WEBPACK_IMPORTED_MODULE_3__.updateDisplaySimple)(cm, {top: top, bottom: bot})
  }

  if (wheelSamples < 20) {
    if (display.wheelStartX == null) {
      display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop
      display.wheelDX = dx; display.wheelDY = dy
      setTimeout(() => {
        if (display.wheelStartX == null) return
        let movedX = scroll.scrollLeft - display.wheelStartX
        let movedY = scroll.scrollTop - display.wheelStartY
        let sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
          (movedX && display.wheelDX && movedX / display.wheelDX)
        display.wheelStartX = display.wheelStartY = null
        if (!sample) return
        wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1)
        ++wheelSamples
      }, 200)
    } else {
      display.wheelDX += dx; display.wheelDY += dy
    }
  }
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/edit/CodeMirror.js":
/*!*******************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/edit/CodeMirror.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeMirror: () => (/* binding */ CodeMirror),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display_Display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/Display.js */ "./src/third_party/codemirror/package/src/display/Display.js");
/* harmony import */ var _display_focus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/focus.js */ "./src/third_party/codemirror/package/src/display/focus.js");
/* harmony import */ var _display_line_numbers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/line_numbers.js */ "./src/third_party/codemirror/package/src/display/line_numbers.js");
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../display/operations.js */ "./src/third_party/codemirror/package/src/display/operations.js");
/* harmony import */ var _display_scroll_events_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../display/scroll_events.js */ "./src/third_party/codemirror/package/src/display/scroll_events.js");
/* harmony import */ var _display_scrollbars_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../display/scrollbars.js */ "./src/third_party/codemirror/package/src/display/scrollbars.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../display/scrolling.js */ "./src/third_party/codemirror/package/src/display/scrolling.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _measurement_widgets_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../measurement/widgets.js */ "./src/third_party/codemirror/package/src/measurement/widgets.js");
/* harmony import */ var _model_Doc_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/Doc.js */ "./src/third_party/codemirror/package/src/model/Doc.js");
/* harmony import */ var _model_document_data_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../model/document_data.js */ "./src/third_party/codemirror/package/src/model/document_data.js");
/* harmony import */ var _model_selection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../model/selection.js */ "./src/third_party/codemirror/package/src/model/selection.js");
/* harmony import */ var _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../model/selection_updates.js */ "./src/third_party/codemirror/package/src/model/selection_updates.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _drop_events_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./drop_events.js */ "./src/third_party/codemirror/package/src/edit/drop_events.js");
/* harmony import */ var _global_events_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./global_events.js */ "./src/third_party/codemirror/package/src/edit/global_events.js");
/* harmony import */ var _key_events_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./key_events.js */ "./src/third_party/codemirror/package/src/edit/key_events.js");
/* harmony import */ var _mouse_events_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mouse_events.js */ "./src/third_party/codemirror/package/src/edit/mouse_events.js");
/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./options.js */ "./src/third_party/codemirror/package/src/edit/options.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils.js */ "./src/third_party/codemirror/package/src/edit/utils.js");

























// A CodeMirror instance represents an editor. This is the object
// that user code is usually dealing with.

function CodeMirror(place, options) {
  if (!(this instanceof CodeMirror)) return new CodeMirror(place, options)

  this.options = options = options ? (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_16__.copyObj)(options) : {}
  // Determine effective options based on given values and defaults.
  ;(0,_util_misc_js__WEBPACK_IMPORTED_MODULE_16__.copyObj)(_options_js__WEBPACK_IMPORTED_MODULE_21__.defaults, options, false)

  let doc = options.value
  if (typeof doc == "string") doc = new _model_Doc_js__WEBPACK_IMPORTED_MODULE_10__["default"](doc, options.mode, null, options.lineSeparator, options.direction)
  else if (options.mode) doc.modeOption = options.mode
  this.doc = doc

  let input = new CodeMirror.inputStyles[options.inputStyle](this)
  let display = this.display = new _display_Display_js__WEBPACK_IMPORTED_MODULE_0__.Display(place, doc, input, options)
  display.wrapper.CodeMirror = this
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_22__.themeChanged)(this)
  if (options.lineWrapping)
    this.display.wrapper.className += " CodeMirror-wrap"
  ;(0,_display_scrollbars_js__WEBPACK_IMPORTED_MODULE_5__.initScrollbars)(this)

  this.state = {
    keyMaps: [],  // stores maps added by addKeyMap
    overlays: [], // highlighting overlays, as added by addOverlay
    modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
    overwrite: false,
    delayingBlurEvent: false,
    focused: false,
    suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
    pasteIncoming: -1, cutIncoming: -1, // help recognize paste/cut edits in input.poll
    selectingText: false,
    draggingText: false,
    highlight: new _util_misc_js__WEBPACK_IMPORTED_MODULE_16__.Delayed(), // stores highlight worker timeout
    keySeq: null,  // Unfinished key sequence
    specialChars: null
  }

  if (options.autofocus && !_util_browser_js__WEBPACK_IMPORTED_MODULE_14__.mobile) display.input.focus()

  // Override magic textarea content restore that IE sometimes does
  // on our hidden textarea on reload
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_14__.ie && _util_browser_js__WEBPACK_IMPORTED_MODULE_14__.ie_version < 11) setTimeout(() => this.display.input.reset(true), 20)

  registerEventHandlers(this)
  ;(0,_global_events_js__WEBPACK_IMPORTED_MODULE_18__.ensureGlobalHandlers)()

  ;(0,_display_operations_js__WEBPACK_IMPORTED_MODULE_3__.startOperation)(this)
  this.curOp.forceUpdate = true
  ;(0,_model_document_data_js__WEBPACK_IMPORTED_MODULE_11__.attachDoc)(this, doc)

  if ((options.autofocus && !_util_browser_js__WEBPACK_IMPORTED_MODULE_14__.mobile) || this.hasFocus())
    setTimeout(() => {
      if (this.hasFocus() && !this.state.focused) (0,_display_focus_js__WEBPACK_IMPORTED_MODULE_1__.onFocus)(this)
    }, 20)
  else
    (0,_display_focus_js__WEBPACK_IMPORTED_MODULE_1__.onBlur)(this)

  for (let opt in _options_js__WEBPACK_IMPORTED_MODULE_21__.optionHandlers) if (_options_js__WEBPACK_IMPORTED_MODULE_21__.optionHandlers.hasOwnProperty(opt))
    _options_js__WEBPACK_IMPORTED_MODULE_21__.optionHandlers[opt](this, options[opt], _options_js__WEBPACK_IMPORTED_MODULE_21__.Init)
  ;(0,_display_line_numbers_js__WEBPACK_IMPORTED_MODULE_2__.maybeUpdateLineNumberWidth)(this)
  if (options.finishInit) options.finishInit(this)
  for (let i = 0; i < initHooks.length; ++i) initHooks[i](this)
  ;(0,_display_operations_js__WEBPACK_IMPORTED_MODULE_3__.endOperation)(this)
  // Suppress optimizelegibility in Webkit, since it breaks text
  // measuring on line wrapping boundaries.
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_14__.webkit && options.lineWrapping &&
      getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
    display.lineDiv.style.textRendering = "auto"
}

// The default configuration options.
CodeMirror.defaults = _options_js__WEBPACK_IMPORTED_MODULE_21__.defaults
// Functions to run when options are changed.
CodeMirror.optionHandlers = _options_js__WEBPACK_IMPORTED_MODULE_21__.optionHandlers

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CodeMirror);

// Attach the necessary event handlers when initializing the editor
function registerEventHandlers(cm) {
  let d = cm.display
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(d.scroller, "mousedown", (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_3__.operation)(cm, _mouse_events_js__WEBPACK_IMPORTED_MODULE_20__.onMouseDown))
  // Older IE's will not fire a second mousedown for a double click
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_14__.ie && _util_browser_js__WEBPACK_IMPORTED_MODULE_14__.ie_version < 11)
    (0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(d.scroller, "dblclick", (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_3__.operation)(cm, e => {
      if ((0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.signalDOMEvent)(cm, e)) return
      let pos = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_8__.posFromMouse)(cm, e)
      if (!pos || (0,_mouse_events_js__WEBPACK_IMPORTED_MODULE_20__.clickInGutter)(cm, e) || (0,_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_9__.eventInWidget)(cm.display, e)) return
      ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.e_preventDefault)(e)
      let word = cm.findWordAt(pos)
      ;(0,_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_13__.extendSelection)(cm.doc, word.anchor, word.head)
    }))
  else
    (0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(d.scroller, "dblclick", e => (0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.signalDOMEvent)(cm, e) || (0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.e_preventDefault)(e))
  // Some browsers fire contextmenu *after* opening the menu, at
  // which point we can't mess with it anymore. Context menu is
  // handled in onMouseDown for these browsers.
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(d.scroller, "contextmenu", e => (0,_mouse_events_js__WEBPACK_IMPORTED_MODULE_20__.onContextMenu)(cm, e))
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(d.input.getField(), "contextmenu", e => {
    if (!d.scroller.contains(e.target)) (0,_mouse_events_js__WEBPACK_IMPORTED_MODULE_20__.onContextMenu)(cm, e)
  })

  // Used to suppress mouse event handling when a touch happens
  let touchFinished, prevTouch = {end: 0}
  function finishTouch() {
    if (d.activeTouch) {
      touchFinished = setTimeout(() => d.activeTouch = null, 1000)
      prevTouch = d.activeTouch
      prevTouch.end = +new Date
    }
  }
  function isMouseLikeTouchEvent(e) {
    if (e.touches.length != 1) return false
    let touch = e.touches[0]
    return touch.radiusX <= 1 && touch.radiusY <= 1
  }
  function farAway(touch, other) {
    if (other.left == null) return true
    let dx = other.left - touch.left, dy = other.top - touch.top
    return dx * dx + dy * dy > 20 * 20
  }
  (0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(d.scroller, "touchstart", e => {
    if (!(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.signalDOMEvent)(cm, e) && !isMouseLikeTouchEvent(e) && !(0,_mouse_events_js__WEBPACK_IMPORTED_MODULE_20__.clickInGutter)(cm, e)) {
      d.input.ensurePolled()
      clearTimeout(touchFinished)
      let now = +new Date
      d.activeTouch = {start: now, moved: false,
                       prev: now - prevTouch.end <= 300 ? prevTouch : null}
      if (e.touches.length == 1) {
        d.activeTouch.left = e.touches[0].pageX
        d.activeTouch.top = e.touches[0].pageY
      }
    }
  })
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(d.scroller, "touchmove", () => {
    if (d.activeTouch) d.activeTouch.moved = true
  })
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(d.scroller, "touchend", e => {
    let touch = d.activeTouch
    if (touch && !(0,_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_9__.eventInWidget)(d, e) && touch.left != null &&
        !touch.moved && new Date - touch.start < 300) {
      let pos = cm.coordsChar(d.activeTouch, "page"), range
      if (!touch.prev || farAway(touch, touch.prev)) // Single tap
        range = new _model_selection_js__WEBPACK_IMPORTED_MODULE_12__.Range(pos, pos)
      else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
        range = cm.findWordAt(pos)
      else // Triple tap
        range = new _model_selection_js__WEBPACK_IMPORTED_MODULE_12__.Range((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_7__.Pos)(pos.line, 0), (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_7__.clipPos)(cm.doc, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_7__.Pos)(pos.line + 1, 0)))
      cm.setSelection(range.anchor, range.head)
      cm.focus()
      ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.e_preventDefault)(e)
    }
    finishTouch()
  })
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(d.scroller, "touchcancel", finishTouch)

  // Sync scrolling between fake scrollbars and real scrollable
  // area, ensure viewport is updated when scrolling.
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(d.scroller, "scroll", () => {
    if (d.scroller.clientHeight) {
      (0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_6__.updateScrollTop)(cm, d.scroller.scrollTop)
      ;(0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_6__.setScrollLeft)(cm, d.scroller.scrollLeft, true)
      ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.signal)(cm, "scroll", cm)
    }
  })

  // Listen to wheel events in order to try and update the viewport on time.
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(d.scroller, "mousewheel", e => (0,_display_scroll_events_js__WEBPACK_IMPORTED_MODULE_4__.onScrollWheel)(cm, e))
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(d.scroller, "DOMMouseScroll", e => (0,_display_scroll_events_js__WEBPACK_IMPORTED_MODULE_4__.onScrollWheel)(cm, e))

  // Prevent wrapper from ever scrolling
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(d.wrapper, "scroll", () => d.wrapper.scrollTop = d.wrapper.scrollLeft = 0)

  d.dragFunctions = {
    enter: e => {if (!(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.signalDOMEvent)(cm, e)) (0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.e_stop)(e)},
    over: e => {if (!(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.signalDOMEvent)(cm, e)) { (0,_drop_events_js__WEBPACK_IMPORTED_MODULE_17__.onDragOver)(cm, e); (0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.e_stop)(e) }},
    start: e => (0,_drop_events_js__WEBPACK_IMPORTED_MODULE_17__.onDragStart)(cm, e),
    drop: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_3__.operation)(cm, _drop_events_js__WEBPACK_IMPORTED_MODULE_17__.onDrop),
    leave: e => {if (!(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.signalDOMEvent)(cm, e)) { (0,_drop_events_js__WEBPACK_IMPORTED_MODULE_17__.clearDragCursor)(cm) }}
  }

  let inp = d.input.getField()
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(inp, "keyup", e => _key_events_js__WEBPACK_IMPORTED_MODULE_19__.onKeyUp.call(cm, e))
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(inp, "keydown", (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_3__.operation)(cm, _key_events_js__WEBPACK_IMPORTED_MODULE_19__.onKeyDown))
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(inp, "keypress", (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_3__.operation)(cm, _key_events_js__WEBPACK_IMPORTED_MODULE_19__.onKeyPress))
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(inp, "focus", e => (0,_display_focus_js__WEBPACK_IMPORTED_MODULE_1__.onFocus)(cm, e))
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_15__.on)(inp, "blur", e => (0,_display_focus_js__WEBPACK_IMPORTED_MODULE_1__.onBlur)(cm, e))
}

let initHooks = []
CodeMirror.defineInitHook = f => initHooks.push(f)


/***/ }),

/***/ "./src/third_party/codemirror/package/src/edit/drop_events.js":
/*!********************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/edit/drop_events.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearDragCursor: () => (/* binding */ clearDragCursor),
/* harmony export */   onDragOver: () => (/* binding */ onDragOver),
/* harmony export */   onDragStart: () => (/* binding */ onDragStart),
/* harmony export */   onDrop: () => (/* binding */ onDrop)
/* harmony export */ });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./src/third_party/codemirror/package/src/display/operations.js");
/* harmony import */ var _display_selection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/selection.js */ "./src/third_party/codemirror/package/src/display/selection.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _measurement_widgets_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../measurement/widgets.js */ "./src/third_party/codemirror/package/src/measurement/widgets.js");
/* harmony import */ var _model_change_measurement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/change_measurement.js */ "./src/third_party/codemirror/package/src/model/change_measurement.js");
/* harmony import */ var _model_changes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/changes.js */ "./src/third_party/codemirror/package/src/model/changes.js");
/* harmony import */ var _model_selection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/selection.js */ "./src/third_party/codemirror/package/src/model/selection.js");
/* harmony import */ var _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/selection_updates.js */ "./src/third_party/codemirror/package/src/model/selection_updates.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");














// Kludge to work around strange IE behavior where it'll sometimes
// re-fire a series of drag-related events right after the drop (#1551)
let lastDrop = 0

function onDrop(e) {
  let cm = this
  clearDragCursor(cm)
  if ((0,_util_event_js__WEBPACK_IMPORTED_MODULE_11__.signalDOMEvent)(cm, e) || (0,_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_4__.eventInWidget)(cm.display, e))
    return
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_11__.e_preventDefault)(e)
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__.ie) lastDrop = +new Date
  let pos = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.posFromMouse)(cm, e, true), files = e.dataTransfer.files
  if (!pos || cm.isReadOnly()) return
  // Might be a file drop, in which case we simply extract the text
  // and insert it.
  if (files && files.length && window.FileReader && window.File) {
    let n = files.length, text = Array(n), read = 0
    const markAsReadAndPasteIfAllFilesAreRead = () => {
      if (++read == n) {
        (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.operation)(cm, () => {
          pos = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.clipPos)(cm.doc, pos)
          let change = {from: pos, to: pos,
                        text: cm.doc.splitLines(
                            text.filter(t => t != null).join(cm.doc.lineSeparator())),
                        origin: "paste"}
          ;(0,_model_changes_js__WEBPACK_IMPORTED_MODULE_6__.makeChange)(cm.doc, change)
          ;(0,_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__.setSelectionReplaceHistory)(cm.doc, (0,_model_selection_js__WEBPACK_IMPORTED_MODULE_7__.simpleSelection)((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.clipPos)(cm.doc, pos), (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.clipPos)(cm.doc, (0,_model_change_measurement_js__WEBPACK_IMPORTED_MODULE_5__.changeEnd)(change))))
        })()
      }
    }
    const readTextFromFile = (file, i) => {
      if (cm.options.allowDropFileTypes &&
          (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_12__.indexOf)(cm.options.allowDropFileTypes, file.type) == -1) {
        markAsReadAndPasteIfAllFilesAreRead()
        return
      }
      let reader = new FileReader
      reader.onerror = () => markAsReadAndPasteIfAllFilesAreRead()
      reader.onload = () => {
        let content = reader.result
        if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) {
          markAsReadAndPasteIfAllFilesAreRead()
          return
        }
        text[i] = content
        markAsReadAndPasteIfAllFilesAreRead()
      }
      reader.readAsText(file)
    }
    for (let i = 0; i < files.length; i++) readTextFromFile(files[i], i)
  } else { // Normal drop
    // Don't do a replace if the drop happened inside of the selected text.
    if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
      cm.state.draggingText(e)
      // Ensure the editor is re-focused
      setTimeout(() => cm.display.input.focus(), 20)
      return
    }
    try {
      let text = e.dataTransfer.getData("Text")
      if (text) {
        let selected
        if (cm.state.draggingText && !cm.state.draggingText.copy)
          selected = cm.listSelections()
        ;(0,_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__.setSelectionNoUndo)(cm.doc, (0,_model_selection_js__WEBPACK_IMPORTED_MODULE_7__.simpleSelection)(pos, pos))
        if (selected) for (let i = 0; i < selected.length; ++i)
          (0,_model_changes_js__WEBPACK_IMPORTED_MODULE_6__.replaceRange)(cm.doc, "", selected[i].anchor, selected[i].head, "drag")
        cm.replaceSelection(text, "around", "paste")
        cm.display.input.focus()
      }
    }
    catch(e){}
  }
}

function onDragStart(cm, e) {
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__.ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { (0,_util_event_js__WEBPACK_IMPORTED_MODULE_11__.e_stop)(e); return }
  if ((0,_util_event_js__WEBPACK_IMPORTED_MODULE_11__.signalDOMEvent)(cm, e) || (0,_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_4__.eventInWidget)(cm.display, e)) return

  e.dataTransfer.setData("Text", cm.getSelection())
  e.dataTransfer.effectAllowed = "copyMove"

  // Use dummy image instead of default browsers image.
  // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
  if (e.dataTransfer.setDragImage && !_util_browser_js__WEBPACK_IMPORTED_MODULE_9__.safari) {
    let img = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_10__.elt)("img", null, null, "position: fixed; left: 0; top: 0;")
    img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__.presto) {
      img.width = img.height = 1
      cm.display.wrapper.appendChild(img)
      // Force a relayout, or Opera won't use our image for some obscure reason
      img._top = img.offsetTop
    }
    e.dataTransfer.setDragImage(img, 0, 0)
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__.presto) img.parentNode.removeChild(img)
  }
}

function onDragOver(cm, e) {
  let pos = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.posFromMouse)(cm, e)
  if (!pos) return
  let frag = document.createDocumentFragment()
  ;(0,_display_selection_js__WEBPACK_IMPORTED_MODULE_1__.drawSelectionCursor)(cm, pos, frag)
  if (!cm.display.dragCursor) {
    cm.display.dragCursor = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_10__.elt)("div", null, "CodeMirror-cursors CodeMirror-dragcursors")
    cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv)
  }
  (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_10__.removeChildrenAndAdd)(cm.display.dragCursor, frag)
}

function clearDragCursor(cm) {
  if (cm.display.dragCursor) {
    cm.display.lineSpace.removeChild(cm.display.dragCursor)
    cm.display.dragCursor = null
  }
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


/***/ }),

/***/ "./src/third_party/codemirror/package/src/edit/options.js":
/*!****************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/edit/options.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Init: () => (/* binding */ Init),
/* harmony export */   defaults: () => (/* binding */ defaults),
/* harmony export */   defineOptions: () => (/* binding */ defineOptions),
/* harmony export */   optionHandlers: () => (/* binding */ optionHandlers)
/* harmony export */ });
/* harmony import */ var _display_focus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/focus.js */ "./src/third_party/codemirror/package/src/display/focus.js");
/* harmony import */ var _display_gutters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/gutters.js */ "./src/third_party/codemirror/package/src/display/gutters.js");
/* harmony import */ var _display_mode_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/mode_state.js */ "./src/third_party/codemirror/package/src/display/mode_state.js");
/* harmony import */ var _display_scrollbars_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../display/scrollbars.js */ "./src/third_party/codemirror/package/src/display/scrollbars.js");
/* harmony import */ var _display_selection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../display/selection.js */ "./src/third_party/codemirror/package/src/display/selection.js");
/* harmony import */ var _display_view_tracking_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../display/view_tracking.js */ "./src/third_party/codemirror/package/src/display/view_tracking.js");
/* harmony import */ var _input_keymap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../input/keymap.js */ "./src/third_party/codemirror/package/src/input/keymap.js");
/* harmony import */ var _line_line_data_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../line/line_data.js */ "./src/third_party/codemirror/package/src/line/line_data.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../line/spans.js */ "./src/third_party/codemirror/package/src/line/spans.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _model_changes_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../model/changes.js */ "./src/third_party/codemirror/package/src/model/changes.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils.js */ "./src/third_party/codemirror/package/src/edit/utils.js");


















let Init = {toString: function(){return "CodeMirror.Init"}}

let defaults = {}
let optionHandlers = {}

function defineOptions(CodeMirror) {
  let optionHandlers = CodeMirror.optionHandlers

  function option(name, deflt, handle, notOnInit) {
    CodeMirror.defaults[name] = deflt
    if (handle) optionHandlers[name] =
      notOnInit ? (cm, val, old) => {if (old != Init) handle(cm, val, old)} : handle
  }

  CodeMirror.defineOption = option

  // Passed to option handlers when there is no old value.
  CodeMirror.Init = Init

  // These two are, on init, called from the constructor because they
  // have to be initialized before the editor can start at all.
  option("value", "", (cm, val) => cm.setValue(val), true)
  option("mode", null, (cm, val) => {
    cm.doc.modeOption = val
    ;(0,_display_mode_state_js__WEBPACK_IMPORTED_MODULE_2__.loadMode)(cm)
  }, true)

  option("indentUnit", 2, _display_mode_state_js__WEBPACK_IMPORTED_MODULE_2__.loadMode, true)
  option("indentWithTabs", false)
  option("smartIndent", true)
  option("tabSize", 4, cm => {
    ;(0,_display_mode_state_js__WEBPACK_IMPORTED_MODULE_2__.resetModeState)(cm)
    ;(0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_10__.clearCaches)(cm)
    ;(0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_5__.regChange)(cm)
  }, true)

  option("lineSeparator", null, (cm, val) => {
    cm.doc.lineSep = val
    if (!val) return
    let newBreaks = [], lineNo = cm.doc.first
    cm.doc.iter(line => {
      for (let pos = 0;;) {
        let found = line.text.indexOf(val, pos)
        if (found == -1) break
        pos = found + val.length
        newBreaks.push((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_8__.Pos)(lineNo, found))
      }
      lineNo++
    })
    for (let i = newBreaks.length - 1; i >= 0; i--)
      (0,_model_changes_js__WEBPACK_IMPORTED_MODULE_11__.replaceRange)(cm.doc, val, newBreaks[i], (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_8__.Pos)(newBreaks[i].line, newBreaks[i].ch + val.length))
  })
  option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, (cm, val, old) => {
    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g")
    if (old != Init) cm.refresh()
  })
  option("specialCharPlaceholder", _line_line_data_js__WEBPACK_IMPORTED_MODULE_7__.defaultSpecialCharPlaceholder, cm => cm.refresh(), true)
  option("electricChars", true)
  option("inputStyle", _util_browser_js__WEBPACK_IMPORTED_MODULE_12__.mobile ? "contenteditable" : "textarea", () => {
    throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
  }, true)
  option("spellcheck", false, (cm, val) => cm.getInputField().spellcheck = val, true)
  option("autocorrect", false, (cm, val) => cm.getInputField().autocorrect = val, true)
  option("autocapitalize", false, (cm, val) => cm.getInputField().autocapitalize = val, true)
  option("rtlMoveVisually", !_util_browser_js__WEBPACK_IMPORTED_MODULE_12__.windows)
  option("wholeLineUpdateBefore", true)

  option("theme", "default", cm => {
    ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_15__.themeChanged)(cm)
    ;(0,_display_gutters_js__WEBPACK_IMPORTED_MODULE_1__.updateGutters)(cm)
  }, true)
  option("keyMap", "default", (cm, val, old) => {
    let next = (0,_input_keymap_js__WEBPACK_IMPORTED_MODULE_6__.getKeyMap)(val)
    let prev = old != Init && (0,_input_keymap_js__WEBPACK_IMPORTED_MODULE_6__.getKeyMap)(old)
    if (prev && prev.detach) prev.detach(cm, next)
    if (next.attach) next.attach(cm, prev || null)
  })
  option("extraKeys", null)
  option("configureMouse", null)

  option("lineWrapping", false, wrappingChanged, true)
  option("gutters", [], (cm, val) => {
    cm.display.gutterSpecs = (0,_display_gutters_js__WEBPACK_IMPORTED_MODULE_1__.getGutters)(val, cm.options.lineNumbers)
    ;(0,_display_gutters_js__WEBPACK_IMPORTED_MODULE_1__.updateGutters)(cm)
  }, true)
  option("fixedGutter", true, (cm, val) => {
    cm.display.gutters.style.left = val ? (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_10__.compensateForHScroll)(cm.display) + "px" : "0"
    cm.refresh()
  }, true)
  option("coverGutterNextToScrollbar", false, cm => (0,_display_scrollbars_js__WEBPACK_IMPORTED_MODULE_3__.updateScrollbars)(cm), true)
  option("scrollbarStyle", "native", cm => {
    ;(0,_display_scrollbars_js__WEBPACK_IMPORTED_MODULE_3__.initScrollbars)(cm)
    ;(0,_display_scrollbars_js__WEBPACK_IMPORTED_MODULE_3__.updateScrollbars)(cm)
    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop)
    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft)
  }, true)
  option("lineNumbers", false, (cm, val) => {
    cm.display.gutterSpecs = (0,_display_gutters_js__WEBPACK_IMPORTED_MODULE_1__.getGutters)(cm.options.gutters, val)
    ;(0,_display_gutters_js__WEBPACK_IMPORTED_MODULE_1__.updateGutters)(cm)
  }, true)
  option("firstLineNumber", 1, _display_gutters_js__WEBPACK_IMPORTED_MODULE_1__.updateGutters, true)
  option("lineNumberFormatter", integer => integer, _display_gutters_js__WEBPACK_IMPORTED_MODULE_1__.updateGutters, true)
  option("showCursorWhenSelecting", false, _display_selection_js__WEBPACK_IMPORTED_MODULE_4__.updateSelection, true)

  option("resetSelectionOnContextMenu", true)
  option("lineWiseCopyCut", true)
  option("pasteLinesPerSelection", true)
  option("selectionsMayTouch", false)

  option("readOnly", false, (cm, val) => {
    if (val == "nocursor") {
      (0,_display_focus_js__WEBPACK_IMPORTED_MODULE_0__.onBlur)(cm)
      cm.display.input.blur()
    }
    cm.display.input.readOnlyChanged(val)
  })

  option("screenReaderLabel", null, (cm, val) => {
    val = (val === '') ? null : val
    cm.display.input.screenReaderLabelChanged(val)
  })

  option("disableInput", false, (cm, val) => {if (!val) cm.display.input.reset()}, true)
  option("dragDrop", true, dragDropChanged)
  option("allowDropFileTypes", null)

  option("cursorBlinkRate", 530)
  option("cursorScrollMargin", 0)
  option("cursorHeight", 1, _display_selection_js__WEBPACK_IMPORTED_MODULE_4__.updateSelection, true)
  option("singleCursorHeightPerLine", true, _display_selection_js__WEBPACK_IMPORTED_MODULE_4__.updateSelection, true)
  option("workTime", 100)
  option("workDelay", 100)
  option("flattenSpans", true, _display_mode_state_js__WEBPACK_IMPORTED_MODULE_2__.resetModeState, true)
  option("addModeClass", false, _display_mode_state_js__WEBPACK_IMPORTED_MODULE_2__.resetModeState, true)
  option("pollInterval", 100)
  option("undoDepth", 200, (cm, val) => cm.doc.history.undoDepth = val)
  option("historyEventDelay", 1250)
  option("viewportMargin", 10, cm => cm.refresh(), true)
  option("maxHighlightLength", 10000, _display_mode_state_js__WEBPACK_IMPORTED_MODULE_2__.resetModeState, true)
  option("moveInputWithCursor", true, (cm, val) => {
    if (!val) cm.display.input.resetPosition()
  })

  option("tabindex", null, (cm, val) => cm.display.input.getField().tabIndex = val || "")
  option("autofocus", null)
  option("direction", "ltr", (cm, val) => cm.doc.setDirection(val), true)
  option("phrases", null)
}

function dragDropChanged(cm, value, old) {
  let wasOn = old && old != Init
  if (!value != !wasOn) {
    let funcs = cm.display.dragFunctions
    let toggle = value ? _util_event_js__WEBPACK_IMPORTED_MODULE_14__.on : _util_event_js__WEBPACK_IMPORTED_MODULE_14__.off
    toggle(cm.display.scroller, "dragstart", funcs.start)
    toggle(cm.display.scroller, "dragenter", funcs.enter)
    toggle(cm.display.scroller, "dragover", funcs.over)
    toggle(cm.display.scroller, "dragleave", funcs.leave)
    toggle(cm.display.scroller, "drop", funcs.drop)
  }
}

function wrappingChanged(cm) {
  if (cm.options.lineWrapping) {
    (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_13__.addClass)(cm.display.wrapper, "CodeMirror-wrap")
    cm.display.sizer.style.minWidth = ""
    cm.display.sizerWidth = null
  } else {
    (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_13__.rmClass)(cm.display.wrapper, "CodeMirror-wrap")
    ;(0,_line_spans_js__WEBPACK_IMPORTED_MODULE_9__.findMaxLine)(cm)
  }
  (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_10__.estimateLineHeights)(cm)
  ;(0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_5__.regChange)(cm)
  ;(0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_10__.clearCaches)(cm)
  setTimeout(() => (0,_display_scrollbars_js__WEBPACK_IMPORTED_MODULE_3__.updateScrollbars)(cm), 100)
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/edit/utils.js":
/*!**************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/edit/utils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   themeChanged: () => (/* binding */ themeChanged)
/* harmony export */ });
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");


function themeChanged(cm) {
  cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
    cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-")
  ;(0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_0__.clearCaches)(cm)
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/model/Doc.js":
/*!*************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/model/Doc.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./src/third_party/codemirror/package/src/display/operations.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/scrolling.js */ "./src/third_party/codemirror/package/src/display/scrolling.js");
/* harmony import */ var _edit_CodeMirror_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit/CodeMirror.js */ "./src/third_party/codemirror/package/src/edit/CodeMirror.js");
/* harmony import */ var _line_line_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/line_data.js */ "./src/third_party/codemirror/package/src/line/line_data.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../line/spans.js */ "./src/third_party/codemirror/package/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/feature_detection.js */ "./src/third_party/codemirror/package/src/util/feature_detection.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _change_measurement_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./change_measurement.js */ "./src/third_party/codemirror/package/src/model/change_measurement.js");
/* harmony import */ var _changes_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./changes.js */ "./src/third_party/codemirror/package/src/model/changes.js");
/* harmony import */ var _chunk_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chunk.js */ "./src/third_party/codemirror/package/src/model/chunk.js");
/* harmony import */ var _document_data_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./document_data.js */ "./src/third_party/codemirror/package/src/model/document_data.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./history.js */ "./src/third_party/codemirror/package/src/model/history.js");
/* harmony import */ var _line_widget_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./line_widget.js */ "./src/third_party/codemirror/package/src/model/line_widget.js");
/* harmony import */ var _mark_text_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mark_text.js */ "./src/third_party/codemirror/package/src/model/mark_text.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./selection.js */ "./src/third_party/codemirror/package/src/model/selection.js");
/* harmony import */ var _selection_updates_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./selection_updates.js */ "./src/third_party/codemirror/package/src/model/selection_updates.js");





















let nextDocId = 0
let Doc = function(text, mode, firstLine, lineSep, direction) {
  if (!(this instanceof Doc)) return new Doc(text, mode, firstLine, lineSep, direction)
  if (firstLine == null) firstLine = 0

  _chunk_js__WEBPACK_IMPORTED_MODULE_12__.BranchChunk.call(this, [new _chunk_js__WEBPACK_IMPORTED_MODULE_12__.LeafChunk([new _line_line_data_js__WEBPACK_IMPORTED_MODULE_3__.Line("", null)])])
  this.first = firstLine
  this.scrollTop = this.scrollLeft = 0
  this.cantEdit = false
  this.cleanGeneration = 1
  this.modeFrontier = this.highlightFrontier = firstLine
  let start = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.Pos)(firstLine, 0)
  this.sel = (0,_selection_js__WEBPACK_IMPORTED_MODULE_17__.simpleSelection)(start)
  this.history = new _history_js__WEBPACK_IMPORTED_MODULE_14__.History(null)
  this.id = ++nextDocId
  this.modeOption = mode
  this.lineSep = lineSep
  this.direction = (direction == "rtl") ? "rtl" : "ltr"
  this.extend = false

  if (typeof text == "string") text = this.splitLines(text)
  ;(0,_document_data_js__WEBPACK_IMPORTED_MODULE_13__.updateDoc)(this, {from: start, to: start, text: text})
  ;(0,_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__.setSelection)(this, (0,_selection_js__WEBPACK_IMPORTED_MODULE_17__.simpleSelection)(start), _util_misc_js__WEBPACK_IMPORTED_MODULE_9__.sel_dontScroll)
}

Doc.prototype = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_9__.createObj)(_chunk_js__WEBPACK_IMPORTED_MODULE_12__.BranchChunk.prototype, {
  constructor: Doc,
  // Iterate over the document. Supports two forms -- with only one
  // argument, it calls that for each line in the document. With
  // three, it iterates over the range given by the first two (with
  // the second being non-inclusive).
  iter: function(from, to, op) {
    if (op) this.iterN(from - this.first, to - from, op)
    else this.iterN(this.first, this.first + this.size, from)
  },

  // Non-public interface for adding and removing lines.
  insert: function(at, lines) {
    let height = 0
    for (let i = 0; i < lines.length; ++i) height += lines[i].height
    this.insertInner(at - this.first, lines, height)
  },
  remove: function(at, n) { this.removeInner(at - this.first, n) },

  // From here, the methods are part of the public interface. Most
  // are also available from CodeMirror (editor) instances.

  getValue: function(lineSep) {
    let lines = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__.getLines)(this, this.first, this.first + this.size)
    if (lineSep === false) return lines
    return lines.join(lineSep || this.lineSeparator())
  },
  setValue: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function(code) {
    let top = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.Pos)(this.first, 0), last = this.first + this.size - 1
    ;(0,_changes_js__WEBPACK_IMPORTED_MODULE_11__.makeChange)(this, {from: top, to: (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.Pos)(last, (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__.getLine)(this, last).text.length),
                      text: this.splitLines(code), origin: "setValue", full: true}, true)
    if (this.cm) (0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.scrollToCoords)(this.cm, 0, 0)
    ;(0,_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__.setSelection)(this, (0,_selection_js__WEBPACK_IMPORTED_MODULE_17__.simpleSelection)(top), _util_misc_js__WEBPACK_IMPORTED_MODULE_9__.sel_dontScroll)
  }),
  replaceRange: function(code, from, to, origin) {
    from = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, from)
    to = to ? (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, to) : from
    ;(0,_changes_js__WEBPACK_IMPORTED_MODULE_11__.replaceRange)(this, code, from, to, origin)
  },
  getRange: function(from, to, lineSep) {
    let lines = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__.getBetween)(this, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, from), (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, to))
    if (lineSep === false) return lines
    return lines.join(lineSep || this.lineSeparator())
  },

  getLine: function(line) {let l = this.getLineHandle(line); return l && l.text},

  getLineHandle: function(line) {if ((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__.isLine)(this, line)) return (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__.getLine)(this, line)},
  getLineNumber: function(line) {return (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__.lineNo)(line)},

  getLineHandleVisualStart: function(line) {
    if (typeof line == "number") line = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__.getLine)(this, line)
    return (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_5__.visualLine)(line)
  },

  lineCount: function() {return this.size},
  firstLine: function() {return this.first},
  lastLine: function() {return this.first + this.size - 1},

  clipPos: function(pos) {return (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, pos)},

  getCursor: function(start) {
    let range = this.sel.primary(), pos
    if (start == null || start == "head") pos = range.head
    else if (start == "anchor") pos = range.anchor
    else if (start == "end" || start == "to" || start === false) pos = range.to()
    else pos = range.from()
    return pos
  },
  listSelections: function() { return this.sel.ranges },
  somethingSelected: function() {return this.sel.somethingSelected()},

  setCursor: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function(line, ch, options) {
    (0,_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__.setSimpleSelection)(this, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, typeof line == "number" ? (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.Pos)(line, ch || 0) : line), null, options)
  }),
  setSelection: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function(anchor, head, options) {
    (0,_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__.setSimpleSelection)(this, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, anchor), (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, head || anchor), options)
  }),
  extendSelection: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function(head, other, options) {
    (0,_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__.extendSelection)(this, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, head), other && (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, other), options)
  }),
  extendSelections: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function(heads, options) {
    (0,_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__.extendSelections)(this, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPosArray)(this, heads), options)
  }),
  extendSelectionsBy: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function(f, options) {
    let heads = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_9__.map)(this.sel.ranges, f)
    ;(0,_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__.extendSelections)(this, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPosArray)(this, heads), options)
  }),
  setSelections: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function(ranges, primary, options) {
    if (!ranges.length) return
    let out = []
    for (let i = 0; i < ranges.length; i++)
      out[i] = new _selection_js__WEBPACK_IMPORTED_MODULE_17__.Range((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, ranges[i].anchor),
                         (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, ranges[i].head || ranges[i].anchor))
    if (primary == null) primary = Math.min(ranges.length - 1, this.sel.primIndex)
    ;(0,_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__.setSelection)(this, (0,_selection_js__WEBPACK_IMPORTED_MODULE_17__.normalizeSelection)(this.cm, out, primary), options)
  }),
  addSelection: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function(anchor, head, options) {
    let ranges = this.sel.ranges.slice(0)
    ranges.push(new _selection_js__WEBPACK_IMPORTED_MODULE_17__.Range((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, anchor), (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, head || anchor)))
    ;(0,_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__.setSelection)(this, (0,_selection_js__WEBPACK_IMPORTED_MODULE_17__.normalizeSelection)(this.cm, ranges, ranges.length - 1), options)
  }),

  getSelection: function(lineSep) {
    let ranges = this.sel.ranges, lines
    for (let i = 0; i < ranges.length; i++) {
      let sel = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__.getBetween)(this, ranges[i].from(), ranges[i].to())
      lines = lines ? lines.concat(sel) : sel
    }
    if (lineSep === false) return lines
    else return lines.join(lineSep || this.lineSeparator())
  },
  getSelections: function(lineSep) {
    let parts = [], ranges = this.sel.ranges
    for (let i = 0; i < ranges.length; i++) {
      let sel = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__.getBetween)(this, ranges[i].from(), ranges[i].to())
      if (lineSep !== false) sel = sel.join(lineSep || this.lineSeparator())
      parts[i] = sel
    }
    return parts
  },
  replaceSelection: function(code, collapse, origin) {
    let dup = []
    for (let i = 0; i < this.sel.ranges.length; i++)
      dup[i] = code
    this.replaceSelections(dup, collapse, origin || "+input")
  },
  replaceSelections: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function(code, collapse, origin) {
    let changes = [], sel = this.sel
    for (let i = 0; i < sel.ranges.length; i++) {
      let range = sel.ranges[i]
      changes[i] = {from: range.from(), to: range.to(), text: this.splitLines(code[i]), origin: origin}
    }
    let newSel = collapse && collapse != "end" && (0,_change_measurement_js__WEBPACK_IMPORTED_MODULE_10__.computeReplacedSel)(this, changes, collapse)
    for (let i = changes.length - 1; i >= 0; i--)
      (0,_changes_js__WEBPACK_IMPORTED_MODULE_11__.makeChange)(this, changes[i])
    if (newSel) (0,_selection_updates_js__WEBPACK_IMPORTED_MODULE_18__.setSelectionReplaceHistory)(this, newSel)
    else if (this.cm) (0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.ensureCursorVisible)(this.cm)
  }),
  undo: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function() {(0,_changes_js__WEBPACK_IMPORTED_MODULE_11__.makeChangeFromHistory)(this, "undo")}),
  redo: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function() {(0,_changes_js__WEBPACK_IMPORTED_MODULE_11__.makeChangeFromHistory)(this, "redo")}),
  undoSelection: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function() {(0,_changes_js__WEBPACK_IMPORTED_MODULE_11__.makeChangeFromHistory)(this, "undo", true)}),
  redoSelection: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function() {(0,_changes_js__WEBPACK_IMPORTED_MODULE_11__.makeChangeFromHistory)(this, "redo", true)}),

  setExtending: function(val) {this.extend = val},
  getExtending: function() {return this.extend},

  historySize: function() {
    let hist = this.history, done = 0, undone = 0
    for (let i = 0; i < hist.done.length; i++) if (!hist.done[i].ranges) ++done
    for (let i = 0; i < hist.undone.length; i++) if (!hist.undone[i].ranges) ++undone
    return {undo: done, redo: undone}
  },
  clearHistory: function() {
    this.history = new _history_js__WEBPACK_IMPORTED_MODULE_14__.History(this.history)
    ;(0,_document_data_js__WEBPACK_IMPORTED_MODULE_13__.linkedDocs)(this, doc => doc.history = this.history, true)
  },

  markClean: function() {
    this.cleanGeneration = this.changeGeneration(true)
  },
  changeGeneration: function(forceSplit) {
    if (forceSplit)
      this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null
    return this.history.generation
  },
  isClean: function (gen) {
    return this.history.generation == (gen || this.cleanGeneration)
  },

  getHistory: function() {
    return {done: (0,_history_js__WEBPACK_IMPORTED_MODULE_14__.copyHistoryArray)(this.history.done),
            undone: (0,_history_js__WEBPACK_IMPORTED_MODULE_14__.copyHistoryArray)(this.history.undone)}
  },
  setHistory: function(histData) {
    let hist = this.history = new _history_js__WEBPACK_IMPORTED_MODULE_14__.History(this.history)
    hist.done = (0,_history_js__WEBPACK_IMPORTED_MODULE_14__.copyHistoryArray)(histData.done.slice(0), null, true)
    hist.undone = (0,_history_js__WEBPACK_IMPORTED_MODULE_14__.copyHistoryArray)(histData.undone.slice(0), null, true)
  },

  setGutterMarker: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function(line, gutterID, value) {
    return (0,_changes_js__WEBPACK_IMPORTED_MODULE_11__.changeLine)(this, line, "gutter", line => {
      let markers = line.gutterMarkers || (line.gutterMarkers = {})
      markers[gutterID] = value
      if (!value && (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_9__.isEmpty)(markers)) line.gutterMarkers = null
      return true
    })
  }),

  clearGutter: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function(gutterID) {
    this.iter(line => {
      if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
        (0,_changes_js__WEBPACK_IMPORTED_MODULE_11__.changeLine)(this, line, "gutter", () => {
          line.gutterMarkers[gutterID] = null
          if ((0,_util_misc_js__WEBPACK_IMPORTED_MODULE_9__.isEmpty)(line.gutterMarkers)) line.gutterMarkers = null
          return true
        })
      }
    })
  }),

  lineInfo: function(line) {
    let n
    if (typeof line == "number") {
      if (!(0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__.isLine)(this, line)) return null
      n = line
      line = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__.getLine)(this, line)
      if (!line) return null
    } else {
      n = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__.lineNo)(line)
      if (n == null) return null
    }
    return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
            textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
            widgets: line.widgets}
  },

  addLineClass: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function(handle, where, cls) {
    return (0,_changes_js__WEBPACK_IMPORTED_MODULE_11__.changeLine)(this, handle, where == "gutter" ? "gutter" : "class", line => {
      let prop = where == "text" ? "textClass"
               : where == "background" ? "bgClass"
               : where == "gutter" ? "gutterClass" : "wrapClass"
      if (!line[prop]) line[prop] = cls
      else if ((0,_util_dom_js__WEBPACK_IMPORTED_MODULE_7__.classTest)(cls).test(line[prop])) return false
      else line[prop] += " " + cls
      return true
    })
  }),
  removeLineClass: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function(handle, where, cls) {
    return (0,_changes_js__WEBPACK_IMPORTED_MODULE_11__.changeLine)(this, handle, where == "gutter" ? "gutter" : "class", line => {
      let prop = where == "text" ? "textClass"
               : where == "background" ? "bgClass"
               : where == "gutter" ? "gutterClass" : "wrapClass"
      let cur = line[prop]
      if (!cur) return false
      else if (cls == null) line[prop] = null
      else {
        let found = cur.match((0,_util_dom_js__WEBPACK_IMPORTED_MODULE_7__.classTest)(cls))
        if (!found) return false
        let end = found.index + found[0].length
        line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null
      }
      return true
    })
  }),

  addLineWidget: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function(handle, node, options) {
    return (0,_line_widget_js__WEBPACK_IMPORTED_MODULE_15__.addLineWidget)(this, handle, node, options)
  }),
  removeLineWidget: function(widget) { widget.clear() },

  markText: function(from, to, options) {
    return (0,_mark_text_js__WEBPACK_IMPORTED_MODULE_16__.markText)(this, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, from), (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, to), options, options && options.type || "range")
  },
  setBookmark: function(pos, options) {
    let realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
                    insertLeft: options && options.insertLeft,
                    clearWhenEmpty: false, shared: options && options.shared,
                    handleMouseEvents: options && options.handleMouseEvents}
    pos = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, pos)
    return (0,_mark_text_js__WEBPACK_IMPORTED_MODULE_16__.markText)(this, pos, pos, realOpts, "bookmark")
  },
  findMarksAt: function(pos) {
    pos = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, pos)
    let markers = [], spans = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__.getLine)(this, pos.line).markedSpans
    if (spans) for (let i = 0; i < spans.length; ++i) {
      let span = spans[i]
      if ((span.from == null || span.from <= pos.ch) &&
          (span.to == null || span.to >= pos.ch))
        markers.push(span.marker.parent || span.marker)
    }
    return markers
  },
  findMarks: function(from, to, filter) {
    from = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, from); to = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, to)
    let found = [], lineNo = from.line
    this.iter(from.line, to.line + 1, line => {
      let spans = line.markedSpans
      if (spans) for (let i = 0; i < spans.length; i++) {
        let span = spans[i]
        if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
              span.from == null && lineNo != from.line ||
              span.from != null && lineNo == to.line && span.from >= to.ch) &&
            (!filter || filter(span.marker)))
          found.push(span.marker.parent || span.marker)
      }
      ++lineNo
    })
    return found
  },
  getAllMarks: function() {
    let markers = []
    this.iter(line => {
      let sps = line.markedSpans
      if (sps) for (let i = 0; i < sps.length; ++i)
        if (sps[i].from != null) markers.push(sps[i].marker)
    })
    return markers
  },

  posFromIndex: function(off) {
    let ch, lineNo = this.first, sepSize = this.lineSeparator().length
    this.iter(line => {
      let sz = line.text.length + sepSize
      if (sz > off) { ch = off; return true }
      off -= sz
      ++lineNo
    })
    return (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.Pos)(lineNo, ch))
  },
  indexFromPos: function (coords) {
    coords = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_4__.clipPos)(this, coords)
    let index = coords.ch
    if (coords.line < this.first || coords.ch < 0) return 0
    let sepSize = this.lineSeparator().length
    this.iter(this.first, coords.line, line => { // iter aborts when callback returns a truthy value
      index += line.text.length + sepSize
    })
    return index
  },

  copy: function(copyHistory) {
    let doc = new Doc((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__.getLines)(this, this.first, this.first + this.size),
                      this.modeOption, this.first, this.lineSep, this.direction)
    doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft
    doc.sel = this.sel
    doc.extend = false
    if (copyHistory) {
      doc.history.undoDepth = this.history.undoDepth
      doc.setHistory(this.getHistory())
    }
    return doc
  },

  linkedDoc: function(options) {
    if (!options) options = {}
    let from = this.first, to = this.first + this.size
    if (options.from != null && options.from > from) from = options.from
    if (options.to != null && options.to < to) to = options.to
    let copy = new Doc((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_6__.getLines)(this, from, to), options.mode || this.modeOption, from, this.lineSep, this.direction)
    if (options.sharedHist) copy.history = this.history
    ;(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist})
    copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}]
    ;(0,_mark_text_js__WEBPACK_IMPORTED_MODULE_16__.copySharedMarkers)(copy, (0,_mark_text_js__WEBPACK_IMPORTED_MODULE_16__.findSharedMarkers)(this))
    return copy
  },
  unlinkDoc: function(other) {
    if (other instanceof _edit_CodeMirror_js__WEBPACK_IMPORTED_MODULE_2__["default"]) other = other.doc
    if (this.linked) for (let i = 0; i < this.linked.length; ++i) {
      let link = this.linked[i]
      if (link.doc != other) continue
      this.linked.splice(i, 1)
      other.unlinkDoc(this)
      ;(0,_mark_text_js__WEBPACK_IMPORTED_MODULE_16__.detachSharedMarkers)((0,_mark_text_js__WEBPACK_IMPORTED_MODULE_16__.findSharedMarkers)(this))
      break
    }
    // If the histories were shared, split them again
    if (other.history == this.history) {
      let splitIds = [other.id]
      ;(0,_document_data_js__WEBPACK_IMPORTED_MODULE_13__.linkedDocs)(other, doc => splitIds.push(doc.id), true)
      other.history = new _history_js__WEBPACK_IMPORTED_MODULE_14__.History(null)
      other.history.done = (0,_history_js__WEBPACK_IMPORTED_MODULE_14__.copyHistoryArray)(this.history.done, splitIds)
      other.history.undone = (0,_history_js__WEBPACK_IMPORTED_MODULE_14__.copyHistoryArray)(this.history.undone, splitIds)
    }
  },
  iterLinkedDocs: function(f) {(0,_document_data_js__WEBPACK_IMPORTED_MODULE_13__.linkedDocs)(this, f)},

  getMode: function() {return this.mode},
  getEditor: function() {return this.cm},

  splitLines: function(str) {
    if (this.lineSep) return str.split(this.lineSep)
    return (0,_util_feature_detection_js__WEBPACK_IMPORTED_MODULE_8__.splitLinesAuto)(str)
  },
  lineSeparator: function() { return this.lineSep || "\n" },

  setDirection: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.docMethodOp)(function (dir) {
    if (dir != "rtl") dir = "ltr"
    if (dir == this.direction) return
    this.direction = dir
    this.iter(line => line.order = null)
    if (this.cm) (0,_document_data_js__WEBPACK_IMPORTED_MODULE_13__.directionChanged)(this.cm)
  })
})

// Public alias.
Doc.prototype.eachLine = Doc.prototype.iter

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Doc);


/***/ }),

/***/ "./src/third_party/codemirror/package/src/model/chunk.js":
/*!***************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/model/chunk.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BranchChunk: () => (/* binding */ BranchChunk),
/* harmony export */   LeafChunk: () => (/* binding */ LeafChunk)
/* harmony export */ });
/* harmony import */ var _line_line_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/line_data.js */ "./src/third_party/codemirror/package/src/line/line_data.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/operation_group.js */ "./src/third_party/codemirror/package/src/util/operation_group.js");




// The document is represented as a BTree consisting of leaves, with
// chunk of lines in them, and branches, with up to ten leaves or
// other branch nodes below them. The top node is always a branch
// node, and is the document object itself (meaning it has
// additional methods and properties).
//
// All nodes have parent links. The tree is used both to go from
// line numbers to line objects, and to go from objects to numbers.
// It also indexes by height, and is used to convert between height
// and line object, and to find the total height of the document.
//
// See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

function LeafChunk(lines) {
  this.lines = lines
  this.parent = null
  let height = 0
  for (let i = 0; i < lines.length; ++i) {
    lines[i].parent = this
    height += lines[i].height
  }
  this.height = height
}

LeafChunk.prototype = {
  chunkSize() { return this.lines.length },

  // Remove the n lines at offset 'at'.
  removeInner(at, n) {
    for (let i = at, e = at + n; i < e; ++i) {
      let line = this.lines[i]
      this.height -= line.height
      ;(0,_line_line_data_js__WEBPACK_IMPORTED_MODULE_0__.cleanUpLine)(line)
      ;(0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_2__.signalLater)(line, "delete")
    }
    this.lines.splice(at, n)
  },

  // Helper used to collapse a small branch into a single leaf.
  collapse(lines) {
    lines.push.apply(lines, this.lines)
  },

  // Insert the given array of lines at offset 'at', count them as
  // having the given height.
  insertInner(at, lines, height) {
    this.height += height
    this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at))
    for (let i = 0; i < lines.length; ++i) lines[i].parent = this
  },

  // Used to iterate over a part of the tree.
  iterN(at, n, op) {
    for (let e = at + n; at < e; ++at)
      if (op(this.lines[at])) return true
  }
}

function BranchChunk(children) {
  this.children = children
  let size = 0, height = 0
  for (let i = 0; i < children.length; ++i) {
    let ch = children[i]
    size += ch.chunkSize(); height += ch.height
    ch.parent = this
  }
  this.size = size
  this.height = height
  this.parent = null
}

BranchChunk.prototype = {
  chunkSize() { return this.size },

  removeInner(at, n) {
    this.size -= n
    for (let i = 0; i < this.children.length; ++i) {
      let child = this.children[i], sz = child.chunkSize()
      if (at < sz) {
        let rm = Math.min(n, sz - at), oldHeight = child.height
        child.removeInner(at, rm)
        this.height -= oldHeight - child.height
        if (sz == rm) { this.children.splice(i--, 1); child.parent = null }
        if ((n -= rm) == 0) break
        at = 0
      } else at -= sz
    }
    // If the result is smaller than 25 lines, ensure that it is a
    // single leaf node.
    if (this.size - n < 25 &&
        (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
      let lines = []
      this.collapse(lines)
      this.children = [new LeafChunk(lines)]
      this.children[0].parent = this
    }
  },

  collapse(lines) {
    for (let i = 0; i < this.children.length; ++i) this.children[i].collapse(lines)
  },

  insertInner(at, lines, height) {
    this.size += lines.length
    this.height += height
    for (let i = 0; i < this.children.length; ++i) {
      let child = this.children[i], sz = child.chunkSize()
      if (at <= sz) {
        child.insertInner(at, lines, height)
        if (child.lines && child.lines.length > 50) {
          // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
          // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
          let remaining = child.lines.length % 25 + 25
          for (let pos = remaining; pos < child.lines.length;) {
            let leaf = new LeafChunk(child.lines.slice(pos, pos += 25))
            child.height -= leaf.height
            this.children.splice(++i, 0, leaf)
            leaf.parent = this
          }
          child.lines = child.lines.slice(0, remaining)
          this.maybeSpill()
        }
        break
      }
      at -= sz
    }
  },

  // When a node has grown, check whether it should be split.
  maybeSpill() {
    if (this.children.length <= 10) return
    let me = this
    do {
      let spilled = me.children.splice(me.children.length - 5, 5)
      let sibling = new BranchChunk(spilled)
      if (!me.parent) { // Become the parent node
        let copy = new BranchChunk(me.children)
        copy.parent = me
        me.children = [copy, sibling]
        me = copy
     } else {
        me.size -= sibling.size
        me.height -= sibling.height
        let myIndex = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_1__.indexOf)(me.parent.children, me)
        me.parent.children.splice(myIndex + 1, 0, sibling)
      }
      sibling.parent = me.parent
    } while (me.children.length > 10)
    me.parent.maybeSpill()
  },

  iterN(at, n, op) {
    for (let i = 0; i < this.children.length; ++i) {
      let child = this.children[i], sz = child.chunkSize()
      if (at < sz) {
        let used = Math.min(n, sz - at)
        if (child.iterN(at, used, op)) return true
        if ((n -= used) == 0) break
        at = 0
      } else at -= sz
    }
  }
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/model/line_widget.js":
/*!*********************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/model/line_widget.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineWidget: () => (/* binding */ LineWidget),
/* harmony export */   addLineWidget: () => (/* binding */ addLineWidget)
/* harmony export */ });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./src/third_party/codemirror/package/src/display/operations.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/scrolling.js */ "./src/third_party/codemirror/package/src/display/scrolling.js");
/* harmony import */ var _display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/view_tracking.js */ "./src/third_party/codemirror/package/src/display/view_tracking.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/spans.js */ "./src/third_party/codemirror/package/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _measurement_widgets_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../measurement/widgets.js */ "./src/third_party/codemirror/package/src/measurement/widgets.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/operation_group.js */ "./src/third_party/codemirror/package/src/util/operation_group.js");
/* harmony import */ var _changes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./changes.js */ "./src/third_party/codemirror/package/src/model/changes.js");











// Line widgets are block elements displayed above or below a line.

class LineWidget {
  constructor(doc, node, options) {
    if (options) for (let opt in options) if (options.hasOwnProperty(opt))
      this[opt] = options[opt]
    this.doc = doc
    this.node = node
  }

  clear() {
    let cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.lineNo)(line)
    if (no == null || !ws) return
    for (let i = 0; i < ws.length; ++i) if (ws[i] == this) ws.splice(i--, 1)
    if (!ws.length) line.widgets = null
    let height = (0,_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_5__.widgetHeight)(this)
    ;(0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.updateLineHeight)(line, Math.max(0, line.height - height))
    if (cm) {
      (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.runInOp)(cm, () => {
        adjustScrollWhenAboveVisible(cm, line, -height)
        ;(0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__.regLineChange)(cm, no, "widget")
      })
      ;(0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_7__.signalLater)(cm, "lineWidgetCleared", cm, this, no)
    }
  }

  changed() {
    let oldH = this.height, cm = this.doc.cm, line = this.line
    this.height = null
    let diff = (0,_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_5__.widgetHeight)(this) - oldH
    if (!diff) return
    if (!(0,_line_spans_js__WEBPACK_IMPORTED_MODULE_3__.lineIsHidden)(this.doc, line)) (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.updateLineHeight)(line, line.height + diff)
    if (cm) {
      (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.runInOp)(cm, () => {
        cm.curOp.forceUpdate = true
        adjustScrollWhenAboveVisible(cm, line, diff)
        ;(0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_7__.signalLater)(cm, "lineWidgetChanged", cm, this, (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.lineNo)(line))
      })
    }
  }
}
(0,_util_event_js__WEBPACK_IMPORTED_MODULE_6__.eventMixin)(LineWidget)

function adjustScrollWhenAboveVisible(cm, line, diff) {
  if ((0,_line_spans_js__WEBPACK_IMPORTED_MODULE_3__.heightAtLine)(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
    (0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.addToScrollTop)(cm, diff)
}

function addLineWidget(doc, handle, node, options) {
  let widget = new LineWidget(doc, node, options)
  let cm = doc.cm
  if (cm && widget.noHScroll) cm.display.alignWidgets = true
  ;(0,_changes_js__WEBPACK_IMPORTED_MODULE_8__.changeLine)(doc, handle, "widget", line => {
    let widgets = line.widgets || (line.widgets = [])
    if (widget.insertAt == null) widgets.push(widget)
    else widgets.splice(Math.min(widgets.length, Math.max(0, widget.insertAt)), 0, widget)
    widget.line = line
    if (cm && !(0,_line_spans_js__WEBPACK_IMPORTED_MODULE_3__.lineIsHidden)(doc, line)) {
      let aboveVisible = (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_3__.heightAtLine)(line) < doc.scrollTop
      ;(0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.updateLineHeight)(line, line.height + (0,_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_5__.widgetHeight)(widget))
      if (aboveVisible) (0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.addToScrollTop)(cm, widget.height)
      cm.curOp.forceUpdate = true
    }
    return true
  })
  if (cm) (0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_7__.signalLater)(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.lineNo)(handle))
  return widget
}


/***/ })

}]);