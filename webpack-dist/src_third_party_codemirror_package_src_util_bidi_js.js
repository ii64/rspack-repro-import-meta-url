"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_util_bidi_js"],{

/***/ "./src/third_party/codemirror/package/src/util/bidi.js":
/*!*************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/util/bidi.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bidiOther: () => (/* binding */ bidiOther),
/* harmony export */   getBidiPartAt: () => (/* binding */ getBidiPartAt),
/* harmony export */   getOrder: () => (/* binding */ getOrder),
/* harmony export */   iterateBidiSections: () => (/* binding */ iterateBidiSections)
/* harmony export */ });
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");


// BIDI HELPERS

function iterateBidiSections(order, from, to, f) {
  if (!order) return f(from, to, "ltr", 0)
  let found = false
  for (let i = 0; i < order.length; ++i) {
    let part = order[i]
    if (part.from < to && part.to > from || from == to && part.to == from) {
      f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr", i)
      found = true
    }
  }
  if (!found) f(from, to, "ltr")
}

let bidiOther = null
function getBidiPartAt(order, ch, sticky) {
  let found
  bidiOther = null
  for (let i = 0; i < order.length; ++i) {
    let cur = order[i]
    if (cur.from < ch && cur.to > ch) return i
    if (cur.to == ch) {
      if (cur.from != cur.to && sticky == "before") found = i
      else bidiOther = i
    }
    if (cur.from == ch) {
      if (cur.from != cur.to && sticky != "before") found = i
      else bidiOther = i
    }
  }
  return found != null ? found : bidiOther
}

// Bidirectional ordering algorithm
// See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
// that this (partially) implements.

// One-char codes used for character types:
// L (L):   Left-to-Right
// R (R):   Right-to-Left
// r (AL):  Right-to-Left Arabic
// 1 (EN):  European Number
// + (ES):  European Number Separator
// % (ET):  European Number Terminator
// n (AN):  Arabic Number
// , (CS):  Common Number Separator
// m (NSM): Non-Spacing Mark
// b (BN):  Boundary Neutral
// s (B):   Paragraph Separator
// t (S):   Segment Separator
// w (WS):  Whitespace
// N (ON):  Other Neutrals

// Returns null if characters are ordered as they appear
// (left-to-right), or an array of sections ({from, to, level}
// objects) in the order in which they occur visually.
let bidiOrdering = (function() {
  // Character types for codepoints 0 to 0xff
  let lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN"
  // Character types for codepoints 0x600 to 0x6f9
  let arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111"
  function charType(code) {
    if (code <= 0xf7) return lowTypes.charAt(code)
    else if (0x590 <= code && code <= 0x5f4) return "R"
    else if (0x600 <= code && code <= 0x6f9) return arabicTypes.charAt(code - 0x600)
    else if (0x6ee <= code && code <= 0x8ac) return "r"
    else if (0x2000 <= code && code <= 0x200b) return "w"
    else if (code == 0x200c) return "b"
    else return "L"
  }

  let bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/
  let isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/

  function BidiSpan(level, from, to) {
    this.level = level
    this.from = from; this.to = to
  }

  return function(str, direction) {
    let outerType = direction == "ltr" ? "L" : "R"

    if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) return false
    let len = str.length, types = []
    for (let i = 0; i < len; ++i)
      types.push(charType(str.charCodeAt(i)))

    // W1. Examine each non-spacing mark (NSM) in the level run, and
    // change the type of the NSM to the type of the previous
    // character. If the NSM is at the start of the level run, it will
    // get the type of sor.
    for (let i = 0, prev = outerType; i < len; ++i) {
      let type = types[i]
      if (type == "m") types[i] = prev
      else prev = type
    }

    // W2. Search backwards from each instance of a European number
    // until the first strong type (R, L, AL, or sor) is found. If an
    // AL is found, change the type of the European number to Arabic
    // number.
    // W3. Change all ALs to R.
    for (let i = 0, cur = outerType; i < len; ++i) {
      let type = types[i]
      if (type == "1" && cur == "r") types[i] = "n"
      else if (isStrong.test(type)) { cur = type; if (type == "r") types[i] = "R" }
    }

    // W4. A single European separator between two European numbers
    // changes to a European number. A single common separator between
    // two numbers of the same type changes to that type.
    for (let i = 1, prev = types[0]; i < len - 1; ++i) {
      let type = types[i]
      if (type == "+" && prev == "1" && types[i+1] == "1") types[i] = "1"
      else if (type == "," && prev == types[i+1] &&
               (prev == "1" || prev == "n")) types[i] = prev
      prev = type
    }

    // W5. A sequence of European terminators adjacent to European
    // numbers changes to all European numbers.
    // W6. Otherwise, separators and terminators change to Other
    // Neutral.
    for (let i = 0; i < len; ++i) {
      let type = types[i]
      if (type == ",") types[i] = "N"
      else if (type == "%") {
        let end
        for (end = i + 1; end < len && types[end] == "%"; ++end) {}
        let replace = (i && types[i-1] == "!") || (end < len && types[end] == "1") ? "1" : "N"
        for (let j = i; j < end; ++j) types[j] = replace
        i = end - 1
      }
    }

    // W7. Search backwards from each instance of a European number
    // until the first strong type (R, L, or sor) is found. If an L is
    // found, then change the type of the European number to L.
    for (let i = 0, cur = outerType; i < len; ++i) {
      let type = types[i]
      if (cur == "L" && type == "1") types[i] = "L"
      else if (isStrong.test(type)) cur = type
    }

    // N1. A sequence of neutrals takes the direction of the
    // surrounding strong text if the text on both sides has the same
    // direction. European and Arabic numbers act as if they were R in
    // terms of their influence on neutrals. Start-of-level-run (sor)
    // and end-of-level-run (eor) are used at level run boundaries.
    // N2. Any remaining neutrals take the embedding direction.
    for (let i = 0; i < len; ++i) {
      if (isNeutral.test(types[i])) {
        let end
        for (end = i + 1; end < len && isNeutral.test(types[end]); ++end) {}
        let before = (i ? types[i-1] : outerType) == "L"
        let after = (end < len ? types[end] : outerType) == "L"
        let replace = before == after ? (before ? "L" : "R") : outerType
        for (let j = i; j < end; ++j) types[j] = replace
        i = end - 1
      }
    }

    // Here we depart from the documented algorithm, in order to avoid
    // building up an actual levels array. Since there are only three
    // levels (0, 1, 2) in an implementation that doesn't take
    // explicit embedding into account, we can build up the order on
    // the fly, without following the level-based algorithm.
    let order = [], m
    for (let i = 0; i < len;) {
      if (countsAsLeft.test(types[i])) {
        let start = i
        for (++i; i < len && countsAsLeft.test(types[i]); ++i) {}
        order.push(new BidiSpan(0, start, i))
      } else {
        let pos = i, at = order.length, isRTL = direction == "rtl" ? 1 : 0
        for (++i; i < len && types[i] != "L"; ++i) {}
        for (let j = pos; j < i;) {
          if (countsAsNum.test(types[j])) {
            if (pos < j) { order.splice(at, 0, new BidiSpan(1, pos, j)); at += isRTL }
            let nstart = j
            for (++j; j < i && countsAsNum.test(types[j]); ++j) {}
            order.splice(at, 0, new BidiSpan(2, nstart, j))
            at += isRTL
            pos = j
          } else ++j
        }
        if (pos < i) order.splice(at, 0, new BidiSpan(1, pos, i))
      }
    }
    if (direction == "ltr") {
      if (order[0].level == 1 && (m = str.match(/^\s+/))) {
        order[0].from = m[0].length
        order.unshift(new BidiSpan(0, 0, m[0].length))
      }
      if ((0,_misc_js__WEBPACK_IMPORTED_MODULE_0__.lst)(order).level == 1 && (m = str.match(/\s+$/))) {
        (0,_misc_js__WEBPACK_IMPORTED_MODULE_0__.lst)(order).to -= m[0].length
        order.push(new BidiSpan(0, len - m[0].length, len))
      }
    }

    return direction == "rtl" ? order.reverse() : order
  }
})()

// Get the bidi ordering for the given line (and cache it). Returns
// false for lines that are fully left-to-right, and an array of
// BidiSpan objects otherwise.
function getOrder(line, direction) {
  let order = line.order
  if (order == null) order = line.order = bidiOrdering(line.text, direction)
  return order
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