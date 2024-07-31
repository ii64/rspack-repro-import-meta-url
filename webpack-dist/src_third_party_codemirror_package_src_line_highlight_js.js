"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_line_highlight_js"],{

/***/ "./src/third_party/codemirror/package/src/line/highlight.js":
/*!******************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/line/highlight.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContextBefore: () => (/* binding */ getContextBefore),
/* harmony export */   getLineStyles: () => (/* binding */ getLineStyles),
/* harmony export */   highlightLine: () => (/* binding */ highlightLine),
/* harmony export */   processLine: () => (/* binding */ processLine),
/* harmony export */   retreatFrontier: () => (/* binding */ retreatFrontier),
/* harmony export */   takeToken: () => (/* binding */ takeToken)
/* harmony export */ });
/* harmony import */ var _modes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modes.js */ "./src/third_party/codemirror/package/src/modes.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _util_StringStream_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/StringStream.js */ "./src/third_party/codemirror/package/src/util/StringStream.js");
/* harmony import */ var _pos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _utils_line_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");







class SavedContext {
  constructor(state, lookAhead) {
    this.state = state
    this.lookAhead = lookAhead
  }
}

class Context {
  constructor(doc, state, line, lookAhead) {
    this.state = state
    this.doc = doc
    this.line = line
    this.maxLookAhead = lookAhead || 0
    this.baseTokens = null
    this.baseTokenPos = 1
  }

  lookAhead(n) {
    let line = this.doc.getLine(this.line + n)
    if (line != null && n > this.maxLookAhead) this.maxLookAhead = n
    return line
  }

  baseToken(n) {
    if (!this.baseTokens) return null
    while (this.baseTokens[this.baseTokenPos] <= n)
      this.baseTokenPos += 2
    let type = this.baseTokens[this.baseTokenPos + 1]
    return {type: type && type.replace(/( |^)overlay .*/, ""),
            size: this.baseTokens[this.baseTokenPos] - n}
  }

  nextLine() {
    this.line++
    if (this.maxLookAhead > 0) this.maxLookAhead--
  }

  static fromSaved(doc, saved, line) {
    if (saved instanceof SavedContext)
      return new Context(doc, (0,_modes_js__WEBPACK_IMPORTED_MODULE_0__.copyState)(doc.mode, saved.state), line, saved.lookAhead)
    else
      return new Context(doc, (0,_modes_js__WEBPACK_IMPORTED_MODULE_0__.copyState)(doc.mode, saved), line)
  }

  save(copy) {
    let state = copy !== false ? (0,_modes_js__WEBPACK_IMPORTED_MODULE_0__.copyState)(this.doc.mode, this.state) : this.state
    return this.maxLookAhead > 0 ? new SavedContext(state, this.maxLookAhead) : state
  }
}


// Compute a style array (an array starting with a mode generation
// -- for invalidation -- followed by pairs of end positions and
// style strings), which is used to highlight the tokens on the
// line.
function highlightLine(cm, line, context, forceToEnd) {
  // A styles array always starts with a number identifying the
  // mode/overlays that it is based on (for easy invalidation).
  let st = [cm.state.modeGen], lineClasses = {}
  // Compute the base array of styles
  runMode(cm, line.text, cm.doc.mode, context, (end, style) => st.push(end, style),
          lineClasses, forceToEnd)
  let state = context.state

  // Run overlays, adjust style array.
  for (let o = 0; o < cm.state.overlays.length; ++o) {
    context.baseTokens = st
    let overlay = cm.state.overlays[o], i = 1, at = 0
    context.state = true
    runMode(cm, line.text, overlay.mode, context, (end, style) => {
      let start = i
      // Ensure there's a token end at the current position, and that i points at it
      while (at < end) {
        let i_end = st[i]
        if (i_end > end)
          st.splice(i, 1, end, st[i+1], i_end)
        i += 2
        at = Math.min(end, i_end)
      }
      if (!style) return
      if (overlay.opaque) {
        st.splice(start, i - start, end, "overlay " + style)
        i = start + 2
      } else {
        for (; start < i; start += 2) {
          let cur = st[start+1]
          st[start+1] = (cur ? cur + " " : "") + "overlay " + style
        }
      }
    }, lineClasses)
    context.state = state
    context.baseTokens = null
    context.baseTokenPos = 1
  }

  return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
}

function getLineStyles(cm, line, updateFrontier) {
  if (!line.styles || line.styles[0] != cm.state.modeGen) {
    let context = getContextBefore(cm, (0,_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.lineNo)(line))
    let resetState = line.text.length > cm.options.maxHighlightLength && (0,_modes_js__WEBPACK_IMPORTED_MODULE_0__.copyState)(cm.doc.mode, context.state)
    let result = highlightLine(cm, line, context)
    if (resetState) context.state = resetState
    line.stateAfter = context.save(!resetState)
    line.styles = result.styles
    if (result.classes) line.styleClasses = result.classes
    else if (line.styleClasses) line.styleClasses = null
    if (updateFrontier === cm.doc.highlightFrontier)
      cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier)
  }
  return line.styles
}

function getContextBefore(cm, n, precise) {
  let doc = cm.doc, display = cm.display
  if (!doc.mode.startState) return new Context(doc, true, n)
  let start = findStartLine(cm, n, precise)
  let saved = start > doc.first && (0,_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.getLine)(doc, start - 1).stateAfter
  let context = saved ? Context.fromSaved(doc, saved, start) : new Context(doc, (0,_modes_js__WEBPACK_IMPORTED_MODULE_0__.startState)(doc.mode), start)

  doc.iter(start, n, line => {
    processLine(cm, line.text, context)
    let pos = context.line
    line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null
    context.nextLine()
  })
  if (precise) doc.modeFrontier = context.line
  return context
}

// Lightweight form of highlight -- proceed over this line and
// update state, but don't save a style array. Used for lines that
// aren't currently visible.
function processLine(cm, text, context, startAt) {
  let mode = cm.doc.mode
  let stream = new _util_StringStream_js__WEBPACK_IMPORTED_MODULE_2__["default"](text, cm.options.tabSize, context)
  stream.start = stream.pos = startAt || 0
  if (text == "") callBlankLine(mode, context.state)
  while (!stream.eol()) {
    readToken(mode, stream, context.state)
    stream.start = stream.pos
  }
}

function callBlankLine(mode, state) {
  if (mode.blankLine) return mode.blankLine(state)
  if (!mode.innerMode) return
  let inner = (0,_modes_js__WEBPACK_IMPORTED_MODULE_0__.innerMode)(mode, state)
  if (inner.mode.blankLine) return inner.mode.blankLine(inner.state)
}

function readToken(mode, stream, state, inner) {
  for (let i = 0; i < 10; i++) {
    if (inner) inner[0] = (0,_modes_js__WEBPACK_IMPORTED_MODULE_0__.innerMode)(mode, state).mode
    let style = mode.token(stream, state)
    if (stream.pos > stream.start) return style
  }
  throw new Error("Mode " + mode.name + " failed to advance stream.")
}

class Token {
  constructor(stream, type, state) {
    this.start = stream.start; this.end = stream.pos
    this.string = stream.current()
    this.type = type || null
    this.state = state
  }
}

// Utility for getTokenAt and getLineTokens
function takeToken(cm, pos, precise, asArray) {
  let doc = cm.doc, mode = doc.mode, style
  pos = (0,_pos_js__WEBPACK_IMPORTED_MODULE_3__.clipPos)(doc, pos)
  let line = (0,_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.getLine)(doc, pos.line), context = getContextBefore(cm, pos.line, precise)
  let stream = new _util_StringStream_js__WEBPACK_IMPORTED_MODULE_2__["default"](line.text, cm.options.tabSize, context), tokens
  if (asArray) tokens = []
  while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
    stream.start = stream.pos
    style = readToken(mode, stream, context.state)
    if (asArray) tokens.push(new Token(stream, style, (0,_modes_js__WEBPACK_IMPORTED_MODULE_0__.copyState)(doc.mode, context.state)))
  }
  return asArray ? tokens : new Token(stream, style, context.state)
}

function extractLineClasses(type, output) {
  if (type) for (;;) {
    let lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/)
    if (!lineClass) break
    type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length)
    let prop = lineClass[1] ? "bgClass" : "textClass"
    if (output[prop] == null)
      output[prop] = lineClass[2]
    else if (!(new RegExp("(?:^|\\s)" + lineClass[2] + "(?:$|\\s)")).test(output[prop]))
      output[prop] += " " + lineClass[2]
  }
  return type
}

// Run the given mode's parser over a line, calling f for each token.
function runMode(cm, text, mode, context, f, lineClasses, forceToEnd) {
  let flattenSpans = mode.flattenSpans
  if (flattenSpans == null) flattenSpans = cm.options.flattenSpans
  let curStart = 0, curStyle = null
  let stream = new _util_StringStream_js__WEBPACK_IMPORTED_MODULE_2__["default"](text, cm.options.tabSize, context), style
  let inner = cm.options.addModeClass && [null]
  if (text == "") extractLineClasses(callBlankLine(mode, context.state), lineClasses)
  while (!stream.eol()) {
    if (stream.pos > cm.options.maxHighlightLength) {
      flattenSpans = false
      if (forceToEnd) processLine(cm, text, context, stream.pos)
      stream.pos = text.length
      style = null
    } else {
      style = extractLineClasses(readToken(mode, stream, context.state, inner), lineClasses)
    }
    if (inner) {
      let mName = inner[0].name
      if (mName) style = "m-" + (style ? mName + " " + style : mName)
    }
    if (!flattenSpans || curStyle != style) {
      while (curStart < stream.start) {
        curStart = Math.min(stream.start, curStart + 5000)
        f(curStart, curStyle)
      }
      curStyle = style
    }
    stream.start = stream.pos
  }
  while (curStart < stream.pos) {
    // Webkit seems to refuse to render text nodes longer than 57444
    // characters, and returns inaccurate measurements in nodes
    // starting around 5000 chars.
    let pos = Math.min(stream.pos, curStart + 5000)
    f(pos, curStyle)
    curStart = pos
  }
}

// Finds the line to start with when starting a parse. Tries to
// find a line with a stateAfter, so that it can start with a
// valid state. If that fails, it returns the line with the
// smallest indentation, which tends to need the least context to
// parse correctly.
function findStartLine(cm, n, precise) {
  let minindent, minline, doc = cm.doc
  let lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100)
  for (let search = n; search > lim; --search) {
    if (search <= doc.first) return doc.first
    let line = (0,_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.getLine)(doc, search - 1), after = line.stateAfter
    if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc.modeFrontier))
      return search
    let indented = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_1__.countColumn)(line.text, null, cm.options.tabSize)
    if (minline == null || minindent > indented) {
      minline = search - 1
      minindent = indented
    }
  }
  return minline
}

function retreatFrontier(doc, n) {
  doc.modeFrontier = Math.min(doc.modeFrontier, n)
  if (doc.highlightFrontier < n - 10) return
  let start = doc.first
  for (let line = n - 1; line > start; line--) {
    let saved = (0,_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.getLine)(doc, line).stateAfter
    // change is on 3
    // state on line 1 looked ahead 2 -- so saw 3
    // test 1 + 2 < 3 should cover this
    if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
      start = line + 1
      break
    }
  }
  doc.highlightFrontier = Math.min(doc.highlightFrontier, start)
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/modes.js":
/*!*********************************************************!*\
  !*** ./src/third_party/codemirror/package/src/modes.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);