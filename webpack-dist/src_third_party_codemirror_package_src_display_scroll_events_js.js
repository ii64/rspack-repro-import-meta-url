"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_display_scroll_events_js"],{

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


/***/ })

}]);