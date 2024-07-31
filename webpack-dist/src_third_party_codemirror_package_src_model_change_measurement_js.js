"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_model_change_measurement_js"],{

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