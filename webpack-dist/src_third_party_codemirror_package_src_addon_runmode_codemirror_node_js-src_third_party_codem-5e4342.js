(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_addon_runmode_codemirror_node_js-src_third_party_codem-5e4342"],{

/***/ "./src/third_party/codemirror/package/addon/runmode/runmode.js":
/*!*********************************************************************!*\
  !*** ./src/third_party/codemirror/package/addon/runmode/runmode.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(/*! ../../lib/codemirror */ "./src/third_party/codemirror/package/lib/codemirror.js"));
  else {}
})(function(CodeMirror) {
"use strict";

CodeMirror.runMode = function(string, modespec, callback, options) {
  var mode = CodeMirror.getMode(CodeMirror.defaults, modespec);
  var tabSize = (options && options.tabSize) || CodeMirror.defaults.tabSize;

  // Create a tokenizing callback function if passed-in callback is a DOM element.
  if (callback.appendChild) {
    var ie = /MSIE \d/.test(navigator.userAgent);
    var ie_lt9 = ie && (document.documentMode == null || document.documentMode < 9);
    var node = callback, col = 0;
    node.innerHTML = "";
    callback = function(text, style) {
      if (text == "\n") {
        // Emitting LF or CRLF on IE8 or earlier results in an incorrect display.
        // Emitting a carriage return makes everything ok.
        node.appendChild(document.createTextNode(ie_lt9 ? '\r' : text));
        col = 0;
        return;
      }
      var content = "";
      // replace tabs
      for (var pos = 0;;) {
        var idx = text.indexOf("\t", pos);
        if (idx == -1) {
          content += text.slice(pos);
          col += text.length - pos;
          break;
        } else {
          col += idx - pos;
          content += text.slice(pos, idx);
          var size = tabSize - col % tabSize;
          col += size;
          for (var i = 0; i < size; ++i) content += " ";
          pos = idx + 1;
        }
      }
      // Create a node with token style and append it to the callback DOM element.
      if (style) {
        var sp = node.appendChild(document.createElement("span"));
        sp.className = "cm-" + style.replace(/ +/g, " cm-");
        sp.appendChild(document.createTextNode(content));
      } else {
        node.appendChild(document.createTextNode(content));
      }
    };
  }

  var lines = CodeMirror.splitLines(string), state = (options && options.state) || CodeMirror.startState(mode);
  for (var i = 0, e = lines.length; i < e; ++i) {
    if (i) callback("\n");
    var stream = new CodeMirror.StringStream(lines[i], null, {
      lookAhead: function(n) { return lines[i + n] },
      baseToken: function() {}
    });
    if (!stream.string && mode.blankLine) mode.blankLine(state);
    while (!stream.eol()) {
      var style = mode.token(stream, state);
      callback(stream.current(), style, i, stream.start, state, mode);
      stream.start = stream.pos;
    }
  }
};

});


/***/ }),

/***/ "./src/third_party/codemirror/package/src/addon/runmode/codemirror.node.js":
/*!*********************************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/addon/runmode/codemirror.node.js ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modes.js */ "./src/third_party/codemirror/package/src/modes.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _util_StringStream_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/StringStream.js */ "./src/third_party/codemirror/package/src/util/StringStream.js");




// Copy StringStream and mode methods into exports (CodeMirror) object.
exports.StringStream = _util_StringStream_js__WEBPACK_IMPORTED_MODULE_2__["default"]
exports.countColumn = _util_misc_js__WEBPACK_IMPORTED_MODULE_1__.countColumn
for (var exported in _modes_js__WEBPACK_IMPORTED_MODULE_0__) exports[exported] = _modes_js__WEBPACK_IMPORTED_MODULE_0__[exported]

// Shim library CodeMirror with the minimal CodeMirror defined above.
__webpack_require__.c[/*require.resolve*/(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../lib/codemirror'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))] = __webpack_require__.c[/*require.resolve*/(/*! ./runmode.node */ "./src/third_party/codemirror/package/src/addon/runmode/runmode.node.js")]
__webpack_require__.c[/*require.resolve*/(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../addon/runmode/runmode'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))] = __webpack_require__.c[/*require.resolve*/(/*! ./runmode.node */ "./src/third_party/codemirror/package/src/addon/runmode/runmode.node.js")]

// Minimal default mode.
exports.defineMode("null", () => ({token: stream => stream.skipToEnd()}))
exports.defineMIME("text/plain", "null")

exports.registerHelper = exports.registerGlobalHelper = Math.min
exports.splitLines = function(string) { return string.split(/\r?\n|\r/) }

exports.defaults = { indentUnit: 2 }


/***/ }),

/***/ "./src/third_party/codemirror/package/src/addon/runmode/runmode.node.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/addon/runmode/runmode.node.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _codemirror_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codemirror.node.js */ "./src/third_party/codemirror/package/src/addon/runmode/codemirror.node.js");
/* harmony import */ var _addon_runmode_runmode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../addon/runmode/runmode.js */ "./src/third_party/codemirror/package/addon/runmode/runmode.js");
/* harmony import */ var _addon_runmode_runmode_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_addon_runmode_runmode_js__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/third_party/codemirror/package/src/modes.js":
/*!*********************************************************!*\
  !*** ./src/third_party/codemirror/package/src/modes.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyState: () => (/* binding */ copyState),
/* harmony export */   defineMIME: () => (/* binding */ defineMIME),
/* harmony export */   defineMode: () => (/* binding */ defineMode),
/* harmony export */   extendMode: () => (/* binding */ extendMode),
/* harmony export */   getMode: () => (/* binding */ getMode),
/* harmony export */   innerMode: () => (/* binding */ innerMode),
/* harmony export */   mimeModes: () => (/* binding */ mimeModes),
/* harmony export */   modeExtensions: () => (/* binding */ modeExtensions),
/* harmony export */   modes: () => (/* binding */ modes),
/* harmony export */   resolveMode: () => (/* binding */ resolveMode),
/* harmony export */   startState: () => (/* binding */ startState)
/* harmony export */ });
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");


// Known modes, by name and by MIME
let modes = {}, mimeModes = {}

// Extra arguments are stored as the mode's dependencies, which is
// used by (legacy) mechanisms like loadmode.js to automatically
// load a mode. (Preferred mechanism is the require/define calls.)
function defineMode(name, mode) {
  if (arguments.length > 2)
    mode.dependencies = Array.prototype.slice.call(arguments, 2)
  modes[name] = mode
}

function defineMIME(mime, spec) {
  mimeModes[mime] = spec
}

// Given a MIME type, a {name, ...options} config object, or a name
// string, return a mode config object.
function resolveMode(spec) {
  if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
    spec = mimeModes[spec]
  } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
    let found = mimeModes[spec.name]
    if (typeof found == "string") found = {name: found}
    spec = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_0__.createObj)(found, spec)
    spec.name = found.name
  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
    return resolveMode("application/xml")
  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
    return resolveMode("application/json")
  }
  if (typeof spec == "string") return {name: spec}
  else return spec || {name: "null"}
}

// Given a mode spec (anything that resolveMode accepts), find and
// initialize an actual mode object.
function getMode(options, spec) {
  spec = resolveMode(spec)
  let mfactory = modes[spec.name]
  if (!mfactory) return getMode(options, "text/plain")
  let modeObj = mfactory(options, spec)
  if (modeExtensions.hasOwnProperty(spec.name)) {
    let exts = modeExtensions[spec.name]
    for (let prop in exts) {
      if (!exts.hasOwnProperty(prop)) continue
      if (modeObj.hasOwnProperty(prop)) modeObj["_" + prop] = modeObj[prop]
      modeObj[prop] = exts[prop]
    }
  }
  modeObj.name = spec.name
  if (spec.helperType) modeObj.helperType = spec.helperType
  if (spec.modeProps) for (let prop in spec.modeProps)
    modeObj[prop] = spec.modeProps[prop]

  return modeObj
}

// This can be used to attach properties to mode objects from
// outside the actual mode definition.
let modeExtensions = {}
function extendMode(mode, properties) {
  let exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {})
  ;(0,_util_misc_js__WEBPACK_IMPORTED_MODULE_0__.copyObj)(properties, exts)
}

function copyState(mode, state) {
  if (state === true) return state
  if (mode.copyState) return mode.copyState(state)
  let nstate = {}
  for (let n in state) {
    let val = state[n]
    if (val instanceof Array) val = val.concat([])
    nstate[n] = val
  }
  return nstate
}

// Given a mode and a state (for that mode), find the inner mode and
// state at the position that the state refers to.
function innerMode(mode, state) {
  let info
  while (mode.innerMode) {
    info = mode.innerMode(state)
    if (!info || info.mode == mode) break
    state = info.state
    mode = info.mode
  }
  return info || {mode: mode, state: state}
}

function startState(mode, a1, a2) {
  return mode.startState ? mode.startState(a1, a2) : true
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/util/StringStream.js":
/*!*********************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/util/StringStream.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");


// STRING STREAM

// Fed to the mode parsers, provides helper functions to make
// parsers more succinct.

class StringStream {
  constructor(string, tabSize, lineOracle) {
    this.pos = this.start = 0
    this.string = string
    this.tabSize = tabSize || 8
    this.lastColumnPos = this.lastColumnValue = 0
    this.lineStart = 0
    this.lineOracle = lineOracle
  }

  eol() {return this.pos >= this.string.length}
  sol() {return this.pos == this.lineStart}
  peek() {return this.string.charAt(this.pos) || undefined}
  next() {
    if (this.pos < this.string.length)
      return this.string.charAt(this.pos++)
  }
  eat(match) {
    let ch = this.string.charAt(this.pos)
    let ok
    if (typeof match == "string") ok = ch == match
    else ok = ch && (match.test ? match.test(ch) : match(ch))
    if (ok) {++this.pos; return ch}
  }
  eatWhile(match) {
    let start = this.pos
    while (this.eat(match)){}
    return this.pos > start
  }
  eatSpace() {
    let start = this.pos
    while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos
    return this.pos > start
  }
  skipToEnd() {this.pos = this.string.length}
  skipTo(ch) {
    let found = this.string.indexOf(ch, this.pos)
    if (found > -1) {this.pos = found; return true}
  }
  backUp(n) {this.pos -= n}
  column() {
    if (this.lastColumnPos < this.start) {
      this.lastColumnValue = (0,_misc_js__WEBPACK_IMPORTED_MODULE_0__.countColumn)(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue)
      this.lastColumnPos = this.start
    }
    return this.lastColumnValue - (this.lineStart ? (0,_misc_js__WEBPACK_IMPORTED_MODULE_0__.countColumn)(this.string, this.lineStart, this.tabSize) : 0)
  }
  indentation() {
    return (0,_misc_js__WEBPACK_IMPORTED_MODULE_0__.countColumn)(this.string, null, this.tabSize) -
      (this.lineStart ? (0,_misc_js__WEBPACK_IMPORTED_MODULE_0__.countColumn)(this.string, this.lineStart, this.tabSize) : 0)
  }
  match(pattern, consume, caseInsensitive) {
    if (typeof pattern == "string") {
      let cased = str => caseInsensitive ? str.toLowerCase() : str
      let substr = this.string.substr(this.pos, pattern.length)
      if (cased(substr) == cased(pattern)) {
        if (consume !== false) this.pos += pattern.length
        return true
      }
    } else {
      let match = this.string.slice(this.pos).match(pattern)
      if (match && match.index > 0) return null
      if (match && consume !== false) this.pos += match[0].length
      return match
    }
  }
  current(){return this.string.slice(this.start, this.pos)}
  hideFirstChars(n, inner) {
    this.lineStart += n
    try { return inner() }
    finally { this.lineStart -= n }
  }
  lookAhead(n) {
    let oracle = this.lineOracle
    return oracle && oracle.lookAhead(n)
  }
  baseToken() {
    let oracle = this.lineOracle
    return oracle && oracle.baseToken(this.pos)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StringStream);


/***/ }),

/***/ "./src/third_party/codemirror/package/src/util/misc.js":
/*!*************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/util/misc.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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