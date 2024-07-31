"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_util_event_js"],{

/***/ "./src/third_party/codemirror/package/src/util/browser.js":
/*!****************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/util/browser.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   android: () => (/* binding */ android),
/* harmony export */   captureRightClick: () => (/* binding */ captureRightClick),
/* harmony export */   chrome: () => (/* binding */ chrome),
/* harmony export */   chromeOS: () => (/* binding */ chromeOS),
/* harmony export */   flipCtrlCmd: () => (/* binding */ flipCtrlCmd),
/* harmony export */   gecko: () => (/* binding */ gecko),
/* harmony export */   ie: () => (/* binding */ ie),
/* harmony export */   ie_version: () => (/* binding */ ie_version),
/* harmony export */   ios: () => (/* binding */ ios),
/* harmony export */   mac: () => (/* binding */ mac),
/* harmony export */   mac_geMountainLion: () => (/* binding */ mac_geMountainLion),
/* harmony export */   mobile: () => (/* binding */ mobile),
/* harmony export */   phantom: () => (/* binding */ phantom),
/* harmony export */   presto: () => (/* binding */ presto),
/* harmony export */   safari: () => (/* binding */ safari),
/* harmony export */   webkit: () => (/* binding */ webkit),
/* harmony export */   windows: () => (/* binding */ windows)
/* harmony export */ });
// Kludges for bugs and behavior differences that can't be feature
// detected are enabled based on userAgent etc sniffing.
let userAgent = navigator.userAgent
let platform = navigator.platform

let gecko = /gecko\/\d/i.test(userAgent)
let ie_upto10 = /MSIE \d/.test(userAgent)
let ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent)
let edge = /Edge\/(\d+)/.exec(userAgent)
let ie = ie_upto10 || ie_11up || edge
let ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1])
let webkit = !edge && /WebKit\//.test(userAgent)
let qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent)
let chrome = !edge && /Chrome\//.test(userAgent)
let presto = /Opera\//.test(userAgent)
let safari = /Apple Computer/.test(navigator.vendor)
let mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent)
let phantom = /PhantomJS/.test(userAgent)

let ios = safari && (/Mobile\/\w+/.test(userAgent) || navigator.maxTouchPoints > 2)
let android = /Android/.test(userAgent)
// This is woefully incomplete. Suggestions for alternative methods welcome.
let mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent)
let mac = ios || /Mac/.test(platform)
let chromeOS = /\bCrOS\b/.test(userAgent)
let windows = /win/i.test(platform)

let presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/)
if (presto_version) presto_version = Number(presto_version[1])
if (presto_version && presto_version >= 15) { presto = false; webkit = true }
// Some browsers use the wrong event properties to signal cmd/ctrl on OS X
let flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11))
let captureRightClick = gecko || (ie && ie_version >= 9)


/***/ }),

/***/ "./src/third_party/codemirror/package/src/util/event.js":
/*!**************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/util/event.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e_button: () => (/* binding */ e_button),
/* harmony export */   e_defaultPrevented: () => (/* binding */ e_defaultPrevented),
/* harmony export */   e_preventDefault: () => (/* binding */ e_preventDefault),
/* harmony export */   e_stop: () => (/* binding */ e_stop),
/* harmony export */   e_stopPropagation: () => (/* binding */ e_stopPropagation),
/* harmony export */   e_target: () => (/* binding */ e_target),
/* harmony export */   eventMixin: () => (/* binding */ eventMixin),
/* harmony export */   getHandlers: () => (/* binding */ getHandlers),
/* harmony export */   hasHandler: () => (/* binding */ hasHandler),
/* harmony export */   off: () => (/* binding */ off),
/* harmony export */   on: () => (/* binding */ on),
/* harmony export */   signal: () => (/* binding */ signal),
/* harmony export */   signalCursorActivity: () => (/* binding */ signalCursorActivity),
/* harmony export */   signalDOMEvent: () => (/* binding */ signalDOMEvent)
/* harmony export */ });
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");



// EVENT HANDLING

// Lightweight event framework. on/off also work on DOM nodes,
// registering native DOM handlers.

const noHandlers = []

let on = function(emitter, type, f) {
  if (emitter.addEventListener) {
    emitter.addEventListener(type, f, false)
  } else if (emitter.attachEvent) {
    emitter.attachEvent("on" + type, f)
  } else {
    let map = emitter._handlers || (emitter._handlers = {})
    map[type] = (map[type] || noHandlers).concat(f)
  }
}

function getHandlers(emitter, type) {
  return emitter._handlers && emitter._handlers[type] || noHandlers
}

function off(emitter, type, f) {
  if (emitter.removeEventListener) {
    emitter.removeEventListener(type, f, false)
  } else if (emitter.detachEvent) {
    emitter.detachEvent("on" + type, f)
  } else {
    let map = emitter._handlers, arr = map && map[type]
    if (arr) {
      let index = (0,_misc_js__WEBPACK_IMPORTED_MODULE_1__.indexOf)(arr, f)
      if (index > -1)
        map[type] = arr.slice(0, index).concat(arr.slice(index + 1))
    }
  }
}

function signal(emitter, type /*, values...*/) {
  let handlers = getHandlers(emitter, type)
  if (!handlers.length) return
  let args = Array.prototype.slice.call(arguments, 2)
  for (let i = 0; i < handlers.length; ++i) handlers[i].apply(null, args)
}

// The DOM events that CodeMirror handles can be overridden by
// registering a (non-DOM) handler on the editor for the event name,
// and preventDefault-ing the event in that handler.
function signalDOMEvent(cm, e, override) {
  if (typeof e == "string")
    e = {type: e, preventDefault: function() { this.defaultPrevented = true }}
  signal(cm, override || e.type, cm, e)
  return e_defaultPrevented(e) || e.codemirrorIgnore
}

function signalCursorActivity(cm) {
  let arr = cm._handlers && cm._handlers.cursorActivity
  if (!arr) return
  let set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = [])
  for (let i = 0; i < arr.length; ++i) if ((0,_misc_js__WEBPACK_IMPORTED_MODULE_1__.indexOf)(set, arr[i]) == -1)
    set.push(arr[i])
}

function hasHandler(emitter, type) {
  return getHandlers(emitter, type).length > 0
}

// Add on and off methods to a constructor's prototype, to make
// registering events on such objects more convenient.
function eventMixin(ctor) {
  ctor.prototype.on = function(type, f) {on(this, type, f)}
  ctor.prototype.off = function(type, f) {off(this, type, f)}
}

// Due to the fact that we still support jurassic IE versions, some
// compatibility wrappers are needed.

function e_preventDefault(e) {
  if (e.preventDefault) e.preventDefault()
  else e.returnValue = false
}
function e_stopPropagation(e) {
  if (e.stopPropagation) e.stopPropagation()
  else e.cancelBubble = true
}
function e_defaultPrevented(e) {
  return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
}
function e_stop(e) {e_preventDefault(e); e_stopPropagation(e)}

function e_target(e) {return e.target || e.srcElement}
function e_button(e) {
  let b = e.which
  if (b == null) {
    if (e.button & 1) b = 1
    else if (e.button & 2) b = 3
    else if (e.button & 4) b = 2
  }
  if (_browser_js__WEBPACK_IMPORTED_MODULE_0__.mac && e.ctrlKey && b == 1) b = 3
  return b
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