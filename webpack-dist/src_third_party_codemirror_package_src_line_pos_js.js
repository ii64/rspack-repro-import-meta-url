"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_line_pos_js"],{

/***/ "./src/third_party/codemirror/package/src/line/pos.js":
/*!************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/line/pos.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pos: () => (/* binding */ Pos),
/* harmony export */   clipLine: () => (/* binding */ clipLine),
/* harmony export */   clipPos: () => (/* binding */ clipPos),
/* harmony export */   clipPosArray: () => (/* binding */ clipPosArray),
/* harmony export */   cmp: () => (/* binding */ cmp),
/* harmony export */   copyPos: () => (/* binding */ copyPos),
/* harmony export */   equalCursorPos: () => (/* binding */ equalCursorPos),
/* harmony export */   maxPos: () => (/* binding */ maxPos),
/* harmony export */   minPos: () => (/* binding */ minPos)
/* harmony export */ });
/* harmony import */ var _utils_line_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");


// A Pos instance represents a position within the text.
function Pos(line, ch, sticky = null) {
  if (!(this instanceof Pos)) return new Pos(line, ch, sticky)
  this.line = line
  this.ch = ch
  this.sticky = sticky
}

// Compare two positions, return 0 if they are the same, a negative
// number when a is less, and a positive number otherwise.
function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

function equalCursorPos(a, b) { return a.sticky == b.sticky && cmp(a, b) == 0 }

function copyPos(x) {return Pos(x.line, x.ch)}
function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

// Most of the external API clips given positions to make sure they
// actually exist within the document.
function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
function clipPos(doc, pos) {
  if (pos.line < doc.first) return Pos(doc.first, 0)
  let last = doc.first + doc.size - 1
  if (pos.line > last) return Pos(last, (0,_utils_line_js__WEBPACK_IMPORTED_MODULE_0__.getLine)(doc, last).text.length)
  return clipToLen(pos, (0,_utils_line_js__WEBPACK_IMPORTED_MODULE_0__.getLine)(doc, pos.line).text.length)
}
function clipToLen(pos, linelen) {
  let ch = pos.ch
  if (ch == null || ch > linelen) return Pos(pos.line, linelen)
  else if (ch < 0) return Pos(pos.line, 0)
  else return pos
}
function clipPosArray(doc, array) {
  let out = []
  for (let i = 0; i < array.length; i++) out[i] = clipPos(doc, array[i])
  return out
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/line/utils_line.js":
/*!*******************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/line/utils_line.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBetween: () => (/* binding */ getBetween),
/* harmony export */   getLine: () => (/* binding */ getLine),
/* harmony export */   getLines: () => (/* binding */ getLines),
/* harmony export */   isLine: () => (/* binding */ isLine),
/* harmony export */   lineAtHeight: () => (/* binding */ lineAtHeight),
/* harmony export */   lineNo: () => (/* binding */ lineNo),
/* harmony export */   lineNumberFor: () => (/* binding */ lineNumberFor),
/* harmony export */   updateLineHeight: () => (/* binding */ updateLineHeight)
/* harmony export */ });
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");


// Find the line object corresponding to the given line number.
function getLine(doc, n) {
  n -= doc.first
  if (n < 0 || n >= doc.size) throw new Error("There is no line " + (n + doc.first) + " in the document.")
  let chunk = doc
  while (!chunk.lines) {
    for (let i = 0;; ++i) {
      let child = chunk.children[i], sz = child.chunkSize()
      if (n < sz) { chunk = child; break }
      n -= sz
    }
  }
  return chunk.lines[n]
}

// Get the part of a document between two positions, as an array of
// strings.
function getBetween(doc, start, end) {
  let out = [], n = start.line
  doc.iter(start.line, end.line + 1, line => {
    let text = line.text
    if (n == end.line) text = text.slice(0, end.ch)
    if (n == start.line) text = text.slice(start.ch)
    out.push(text)
    ++n
  })
  return out
}
// Get the lines between from and to, as array of strings.
function getLines(doc, from, to) {
  let out = []
  doc.iter(from, to, line => { out.push(line.text) }) // iter aborts when callback returns truthy value
  return out
}

// Update the height of a line, propagating the height change
// upwards to parent nodes.
function updateLineHeight(line, height) {
  let diff = height - line.height
  if (diff) for (let n = line; n; n = n.parent) n.height += diff
}

// Given a line object, find its line number by walking up through
// its parent links.
function lineNo(line) {
  if (line.parent == null) return null
  let cur = line.parent, no = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_0__.indexOf)(cur.lines, line)
  for (let chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
    for (let i = 0;; ++i) {
      if (chunk.children[i] == cur) break
      no += chunk.children[i].chunkSize()
    }
  }
  return no + cur.first
}

// Find the line at the given vertical position, using the height
// information in the document tree.
function lineAtHeight(chunk, h) {
  let n = chunk.first
  outer: do {
    for (let i = 0; i < chunk.children.length; ++i) {
      let child = chunk.children[i], ch = child.height
      if (h < ch) { chunk = child; continue outer }
      h -= ch
      n += child.chunkSize()
    }
    return n
  } while (!chunk.lines)
  let i = 0
  for (; i < chunk.lines.length; ++i) {
    let line = chunk.lines[i], lh = line.height
    if (h < lh) break
    h -= lh
  }
  return n + i
}

function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

function lineNumberFor(options, i) {
  return String(options.lineNumberFormatter(i + options.firstLineNumber))
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/util/misc.js":
/*!*************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/util/misc.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Delayed: () => (/* binding */ Delayed),
/* harmony export */   Pass: () => (/* binding */ Pass),
/* harmony export */   bind: () => (/* binding */ bind),
/* harmony export */   copyObj: () => (/* binding */ copyObj),
/* harmony export */   countColumn: () => (/* binding */ countColumn),
/* harmony export */   createObj: () => (/* binding */ createObj),
/* harmony export */   findColumn: () => (/* binding */ findColumn),
/* harmony export */   findFirst: () => (/* binding */ findFirst),
/* harmony export */   indexOf: () => (/* binding */ indexOf),
/* harmony export */   insertSorted: () => (/* binding */ insertSorted),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   isExtendingChar: () => (/* binding */ isExtendingChar),
/* harmony export */   isWordChar: () => (/* binding */ isWordChar),
/* harmony export */   isWordCharBasic: () => (/* binding */ isWordCharBasic),
/* harmony export */   lst: () => (/* binding */ lst),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   scrollerGap: () => (/* binding */ scrollerGap),
/* harmony export */   sel_dontScroll: () => (/* binding */ sel_dontScroll),
/* harmony export */   sel_mouse: () => (/* binding */ sel_mouse),
/* harmony export */   sel_move: () => (/* binding */ sel_move),
/* harmony export */   skipExtendingChars: () => (/* binding */ skipExtendingChars),
/* harmony export */   spaceStr: () => (/* binding */ spaceStr)
/* harmony export */ });
function bind(f) {
  let args = Array.prototype.slice.call(arguments, 1)
  return function(){return f.apply(null, args)}
}

function copyObj(obj, target, overwrite) {
  if (!target) target = {}
  for (let prop in obj)
    if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
      target[prop] = obj[prop]
  return target
}

// Counts the column offset in a string, taking tabs into account.
// Used mostly to find indentation.
function countColumn(string, end, tabSize, startIndex, startValue) {
  if (end == null) {
    end = string.search(/[^\s\u00a0]/)
    if (end == -1) end = string.length
  }
  for (let i = startIndex || 0, n = startValue || 0;;) {
    let nextTab = string.indexOf("\t", i)
    if (nextTab < 0 || nextTab >= end)
      return n + (end - i)
    n += nextTab - i
    n += tabSize - (n % tabSize)
    i = nextTab + 1
  }
}

class Delayed {
  constructor() {
    this.id = null
    this.f = null
    this.time = 0
    this.handler = bind(this.onTimeout, this)
  }
  onTimeout(self) {
    self.id = 0
    if (self.time <= +new Date) {
      self.f()
    } else {
      setTimeout(self.handler, self.time - +new Date)
    }
  }
  set(ms, f) {
    this.f = f
    const time = +new Date + ms
    if (!this.id || time < this.time) {
      clearTimeout(this.id)
      this.id = setTimeout(this.handler, ms)
      this.time = time
    }
  }
}

function indexOf(array, elt) {
  for (let i = 0; i < array.length; ++i)
    if (array[i] == elt) return i
  return -1
}

// Number of pixels added to scroller and sizer to hide scrollbar
let scrollerGap = 50

// Returned or thrown by various protocols to signal 'I'm not
// handling this'.
let Pass = {toString: function(){return "CodeMirror.Pass"}}

// Reused option objects for setSelection & friends
let sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"}

// The inverse of countColumn -- find the offset that corresponds to
// a particular column.
function findColumn(string, goal, tabSize) {
  for (let pos = 0, col = 0;;) {
    let nextTab = string.indexOf("\t", pos)
    if (nextTab == -1) nextTab = string.length
    let skipped = nextTab - pos
    if (nextTab == string.length || col + skipped >= goal)
      return pos + Math.min(skipped, goal - col)
    col += nextTab - pos
    col += tabSize - (col % tabSize)
    pos = nextTab + 1
    if (col >= goal) return pos
  }
}

let spaceStrs = [""]
function spaceStr(n) {
  while (spaceStrs.length <= n)
    spaceStrs.push(lst(spaceStrs) + " ")
  return spaceStrs[n]
}

function lst(arr) { return arr[arr.length-1] }

function map(array, f) {
  let out = []
  for (let i = 0; i < array.length; i++) out[i] = f(array[i], i)
  return out
}

function insertSorted(array, value, score) {
  let pos = 0, priority = score(value)
  while (pos < array.length && score(array[pos]) <= priority) pos++
  array.splice(pos, 0, value)
}

function nothing() {}

function createObj(base, props) {
  let inst
  if (Object.create) {
    inst = Object.create(base)
  } else {
    nothing.prototype = base
    inst = new nothing()
  }
  if (props) copyObj(props, inst)
  return inst
}

let nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
function isWordCharBasic(ch) {
  return /\w/.test(ch) || ch > "\x80" &&
    (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
}
function isWordChar(ch, helper) {
  if (!helper) return isWordCharBasic(ch)
  if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) return true
  return helper.test(ch)
}

function isEmpty(obj) {
  for (let n in obj) if (obj.hasOwnProperty(n) && obj[n]) return false
  return true
}

// Extending unicode characters. A series of a non-extending char +
// any number of extending chars is treated as a single unit as far
// as editing and measuring is concerned. This is not fully correct,
// since some scripts/fonts/browsers also treat other configurations
// of code points as a group.
let extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

// Returns a number from the range [`0`; `str.length`] unless `pos` is outside that range.
function skipExtendingChars(str, pos, dir) {
  while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) pos += dir
  return pos
}

// Returns the value from the range [`from`; `to`] that satisfies
// `pred` and is closest to `from`. Assumes that at least `to`
// satisfies `pred`. Supports `from` being greater than `to`.
function findFirst(pred, from, to) {
  // At any point we are certain `to` satisfies `pred`, don't know
  // whether `from` does.
  let dir = from > to ? -1 : 1
  for (;;) {
    if (from == to) return from
    let midF = (from + to) / 2, mid = dir < 0 ? Math.ceil(midF) : Math.floor(midF)
    if (mid == from) return pred(mid) ? from : to
    if (pred(mid)) to = mid
    else from = mid + dir
  }
}


/***/ })

}]);