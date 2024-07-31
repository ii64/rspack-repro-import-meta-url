"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_line_line_data_js"],{

/***/ "./src/third_party/codemirror/package/src/line/line_data.js":
/*!******************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/line/line_data.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Line: () => (/* binding */ Line),
/* harmony export */   LineView: () => (/* binding */ LineView),
/* harmony export */   buildLineContent: () => (/* binding */ buildLineContent),
/* harmony export */   buildViewArray: () => (/* binding */ buildViewArray),
/* harmony export */   cleanUpLine: () => (/* binding */ cleanUpLine),
/* harmony export */   defaultSpecialCharPlaceholder: () => (/* binding */ defaultSpecialCharPlaceholder),
/* harmony export */   updateLine: () => (/* binding */ updateLine)
/* harmony export */ });
/* harmony import */ var _util_bidi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/bidi.js */ "./src/third_party/codemirror/package/src/util/bidi.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/feature_detection.js */ "./src/third_party/codemirror/package/src/util/feature_detection.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _highlight_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./highlight.js */ "./src/third_party/codemirror/package/src/line/highlight.js");
/* harmony import */ var _spans_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spans.js */ "./src/third_party/codemirror/package/src/line/spans.js");
/* harmony import */ var _utils_line_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");











// LINE DATA STRUCTURE

// Line objects. These hold state related to a line, including
// highlighting info (the styles array).
class Line {
  constructor(text, markedSpans, estimateHeight) {
    this.text = text
    ;(0,_spans_js__WEBPACK_IMPORTED_MODULE_7__.attachMarkedSpans)(this, markedSpans)
    this.height = estimateHeight ? estimateHeight(this) : 1
  }

  lineNo() { return (0,_utils_line_js__WEBPACK_IMPORTED_MODULE_8__.lineNo)(this) }
}
(0,_util_event_js__WEBPACK_IMPORTED_MODULE_3__.eventMixin)(Line)

// Change the content (text, markers) of a line. Automatically
// invalidates cached information and tries to re-estimate the
// line's height.
function updateLine(line, text, markedSpans, estimateHeight) {
  line.text = text
  if (line.stateAfter) line.stateAfter = null
  if (line.styles) line.styles = null
  if (line.order != null) line.order = null
  ;(0,_spans_js__WEBPACK_IMPORTED_MODULE_7__.detachMarkedSpans)(line)
  ;(0,_spans_js__WEBPACK_IMPORTED_MODULE_7__.attachMarkedSpans)(line, markedSpans)
  let estHeight = estimateHeight ? estimateHeight(line) : 1
  if (estHeight != line.height) (0,_utils_line_js__WEBPACK_IMPORTED_MODULE_8__.updateLineHeight)(line, estHeight)
}

// Detach a line from the document tree and its markers.
function cleanUpLine(line) {
  line.parent = null
  ;(0,_spans_js__WEBPACK_IMPORTED_MODULE_7__.detachMarkedSpans)(line)
}

// Convert a style as returned by a mode (either null, or a string
// containing one or more styles) to a CSS style. This is cached,
// and also looks for line-wide styles.
let styleToClassCache = {}, styleToClassCacheWithMode = {}
function interpretTokenStyle(style, options) {
  if (!style || /^\s*$/.test(style)) return null
  let cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache
  return cache[style] ||
    (cache[style] = style.replace(/\S+/g, "cm-$&"))
}

// Render the DOM representation of the text of a line. Also builds
// up a 'line map', which points at the DOM nodes that represent
// specific stretches of text, and is used by the measuring code.
// The returned object contains the DOM node, this map, and
// information about line-wide styles that were set by the mode.
function buildLineContent(cm, lineView) {
  // The padding-right forces the element to have a 'border', which
  // is needed on Webkit to be able to get line-level bounding
  // rectangles for it (in measureChar).
  let content = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.eltP)("span", null, null, _util_browser_js__WEBPACK_IMPORTED_MODULE_1__.webkit ? "padding-right: .1px" : null)
  let builder = {pre: (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.eltP)("pre", [content], "CodeMirror-line"), content: content,
                 col: 0, pos: 0, cm: cm,
                 trailingSpace: false,
                 splitSpaces: cm.getOption("lineWrapping")}
  lineView.measure = {}

  // Iterate over the logical lines that make up this visual line.
  for (let i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
    let line = i ? lineView.rest[i - 1] : lineView.line, order
    builder.pos = 0
    builder.addToken = buildToken
    // Optionally wire in some hacks into the token-rendering
    // algorithm, to deal with browser quirks.
    if ((0,_util_feature_detection_js__WEBPACK_IMPORTED_MODULE_4__.hasBadBidiRects)(cm.display.measure) && (order = (0,_util_bidi_js__WEBPACK_IMPORTED_MODULE_0__.getOrder)(line, cm.doc.direction)))
      builder.addToken = buildTokenBadBidi(builder.addToken, order)
    builder.map = []
    let allowFrontierUpdate = lineView != cm.display.externalMeasured && (0,_utils_line_js__WEBPACK_IMPORTED_MODULE_8__.lineNo)(line)
    insertLineContent(line, builder, (0,_highlight_js__WEBPACK_IMPORTED_MODULE_6__.getLineStyles)(cm, line, allowFrontierUpdate))
    if (line.styleClasses) {
      if (line.styleClasses.bgClass)
        builder.bgClass = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(line.styleClasses.bgClass, builder.bgClass || "")
      if (line.styleClasses.textClass)
        builder.textClass = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(line.styleClasses.textClass, builder.textClass || "")
    }

    // Ensure at least a single node is present, for measuring.
    if (builder.map.length == 0)
      builder.map.push(0, 0, builder.content.appendChild((0,_util_feature_detection_js__WEBPACK_IMPORTED_MODULE_4__.zeroWidthElement)(cm.display.measure)))

    // Store the map and a cache object for the current logical line
    if (i == 0) {
      lineView.measure.map = builder.map
      lineView.measure.cache = {}
    } else {
      ;(lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
      ;(lineView.measure.caches || (lineView.measure.caches = [])).push({})
    }
  }

  // See issue #2901
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_1__.webkit) {
    let last = builder.content.lastChild
    if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
      builder.content.className = "cm-tab-wrap-hack"
  }

  (0,_util_event_js__WEBPACK_IMPORTED_MODULE_3__.signal)(cm, "renderLine", cm, lineView.line, builder.pre)
  if (builder.pre.className)
    builder.textClass = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(builder.pre.className, builder.textClass || "")

  return builder
}

function defaultSpecialCharPlaceholder(ch) {
  let token = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.elt)("span", "\u2022", "cm-invalidchar")
  token.title = "\\u" + ch.charCodeAt(0).toString(16)
  token.setAttribute("aria-label", token.title)
  return token
}

// Build up the DOM representation for a single token, and add it to
// the line map. Takes care to render special characters separately.
function buildToken(builder, text, style, startStyle, endStyle, css, attributes) {
  if (!text) return
  let displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text
  let special = builder.cm.state.specialChars, mustWrap = false
  let content
  if (!special.test(text)) {
    builder.col += text.length
    content = document.createTextNode(displayText)
    builder.map.push(builder.pos, builder.pos + text.length, content)
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_1__.ie && _util_browser_js__WEBPACK_IMPORTED_MODULE_1__.ie_version < 9) mustWrap = true
    builder.pos += text.length
  } else {
    content = document.createDocumentFragment()
    let pos = 0
    while (true) {
      special.lastIndex = pos
      let m = special.exec(text)
      let skipped = m ? m.index - pos : text.length - pos
      if (skipped) {
        let txt = document.createTextNode(displayText.slice(pos, pos + skipped))
        if (_util_browser_js__WEBPACK_IMPORTED_MODULE_1__.ie && _util_browser_js__WEBPACK_IMPORTED_MODULE_1__.ie_version < 9) content.appendChild((0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.elt)("span", [txt]))
        else content.appendChild(txt)
        builder.map.push(builder.pos, builder.pos + skipped, txt)
        builder.col += skipped
        builder.pos += skipped
      }
      if (!m) break
      pos += skipped + 1
      let txt
      if (m[0] == "\t") {
        let tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize
        txt = content.appendChild((0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.elt)("span", (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_5__.spaceStr)(tabWidth), "cm-tab"))
        txt.setAttribute("role", "presentation")
        txt.setAttribute("cm-text", "\t")
        builder.col += tabWidth
      } else if (m[0] == "\r" || m[0] == "\n") {
        txt = content.appendChild((0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.elt)("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"))
        txt.setAttribute("cm-text", m[0])
        builder.col += 1
      } else {
        txt = builder.cm.options.specialCharPlaceholder(m[0])
        txt.setAttribute("cm-text", m[0])
        if (_util_browser_js__WEBPACK_IMPORTED_MODULE_1__.ie && _util_browser_js__WEBPACK_IMPORTED_MODULE_1__.ie_version < 9) content.appendChild((0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.elt)("span", [txt]))
        else content.appendChild(txt)
        builder.col += 1
      }
      builder.map.push(builder.pos, builder.pos + 1, txt)
      builder.pos++
    }
  }
  builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32
  if (style || startStyle || endStyle || mustWrap || css || attributes) {
    let fullStyle = style || ""
    if (startStyle) fullStyle += startStyle
    if (endStyle) fullStyle += endStyle
    let token = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_2__.elt)("span", [content], fullStyle, css)
    if (attributes) {
      for (let attr in attributes) if (attributes.hasOwnProperty(attr) && attr != "style" && attr != "class")
        token.setAttribute(attr, attributes[attr])
    }
    return builder.content.appendChild(token)
  }
  builder.content.appendChild(content)
}

// Change some spaces to NBSP to prevent the browser from collapsing
// trailing spaces at the end of a line when rendering text (issue #1362).
function splitSpaces(text, trailingBefore) {
  if (text.length > 1 && !/  /.test(text)) return text
  let spaceBefore = trailingBefore, result = ""
  for (let i = 0; i < text.length; i++) {
    let ch = text.charAt(i)
    if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
      ch = "\u00a0"
    result += ch
    spaceBefore = ch == " "
  }
  return result
}

// Work around nonsense dimensions being reported for stretches of
// right-to-left text.
function buildTokenBadBidi(inner, order) {
  return (builder, text, style, startStyle, endStyle, css, attributes) => {
    style = style ? style + " cm-force-border" : "cm-force-border"
    let start = builder.pos, end = start + text.length
    for (;;) {
      // Find the part that overlaps with the start of this text
      let part
      for (let i = 0; i < order.length; i++) {
        part = order[i]
        if (part.to > start && part.from <= start) break
      }
      if (part.to >= end) return inner(builder, text, style, startStyle, endStyle, css, attributes)
      inner(builder, text.slice(0, part.to - start), style, startStyle, null, css, attributes)
      startStyle = null
      text = text.slice(part.to - start)
      start = part.to
    }
  }
}

function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
  let widget = !ignoreWidget && marker.widgetNode
  if (widget) builder.map.push(builder.pos, builder.pos + size, widget)
  if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
    if (!widget)
      widget = builder.content.appendChild(document.createElement("span"))
    widget.setAttribute("cm-marker", marker.id)
  }
  if (widget) {
    builder.cm.display.input.setUneditable(widget)
    builder.content.appendChild(widget)
  }
  builder.pos += size
  builder.trailingSpace = false
}

// Outputs a number of spans to make up a line, taking highlighting
// and marked text into account.
function insertLineContent(line, builder, styles) {
  let spans = line.markedSpans, allText = line.text, at = 0
  if (!spans) {
    for (let i = 1; i < styles.length; i+=2)
      builder.addToken(builder, allText.slice(at, at = styles[i]), interpretTokenStyle(styles[i+1], builder.cm.options))
    return
  }

  let len = allText.length, pos = 0, i = 1, text = "", style, css
  let nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, collapsed, attributes
  for (;;) {
    if (nextChange == pos) { // Update current marker set
      spanStyle = spanEndStyle = spanStartStyle = css = ""
      attributes = null
      collapsed = null; nextChange = Infinity
      let foundBookmarks = [], endStyles
      for (let j = 0; j < spans.length; ++j) {
        let sp = spans[j], m = sp.marker
        if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
          foundBookmarks.push(m)
        } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
          if (sp.to != null && sp.to != pos && nextChange > sp.to) {
            nextChange = sp.to
            spanEndStyle = ""
          }
          if (m.className) spanStyle += " " + m.className
          if (m.css) css = (css ? css + ";" : "") + m.css
          if (m.startStyle && sp.from == pos) spanStartStyle += " " + m.startStyle
          if (m.endStyle && sp.to == nextChange) (endStyles || (endStyles = [])).push(m.endStyle, sp.to)
          // support for the old title property
          // https://github.com/codemirror/CodeMirror/pull/5673
          if (m.title) (attributes || (attributes = {})).title = m.title
          if (m.attributes) {
            for (let attr in m.attributes)
              (attributes || (attributes = {}))[attr] = m.attributes[attr]
          }
          if (m.collapsed && (!collapsed || (0,_spans_js__WEBPACK_IMPORTED_MODULE_7__.compareCollapsedMarkers)(collapsed.marker, m) < 0))
            collapsed = sp
        } else if (sp.from > pos && nextChange > sp.from) {
          nextChange = sp.from
        }
      }
      if (endStyles) for (let j = 0; j < endStyles.length; j += 2)
        if (endStyles[j + 1] == nextChange) spanEndStyle += " " + endStyles[j]

      if (!collapsed || collapsed.from == pos) for (let j = 0; j < foundBookmarks.length; ++j)
        buildCollapsedSpan(builder, 0, foundBookmarks[j])
      if (collapsed && (collapsed.from || 0) == pos) {
        buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                           collapsed.marker, collapsed.from == null)
        if (collapsed.to == null) return
        if (collapsed.to == pos) collapsed = false
      }
    }
    if (pos >= len) break

    let upto = Math.min(len, nextChange)
    while (true) {
      if (text) {
        let end = pos + text.length
        if (!collapsed) {
          let tokenText = end > upto ? text.slice(0, upto - pos) : text
          builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                           spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", css, attributes)
        }
        if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
        pos = end
        spanStartStyle = ""
      }
      text = allText.slice(at, at = styles[i++])
      style = interpretTokenStyle(styles[i++], builder.cm.options)
    }
  }
}


// These objects are used to represent the visible (currently drawn)
// part of the document. A LineView may correspond to multiple
// logical lines, if those are connected by collapsed ranges.
function LineView(doc, line, lineN) {
  // The starting line
  this.line = line
  // Continuing lines, if any
  this.rest = (0,_spans_js__WEBPACK_IMPORTED_MODULE_7__.visualLineContinued)(line)
  // Number of logical lines in this visual line
  this.size = this.rest ? (0,_utils_line_js__WEBPACK_IMPORTED_MODULE_8__.lineNo)((0,_util_misc_js__WEBPACK_IMPORTED_MODULE_5__.lst)(this.rest)) - lineN + 1 : 1
  this.node = this.text = null
  this.hidden = (0,_spans_js__WEBPACK_IMPORTED_MODULE_7__.lineIsHidden)(doc, line)
}

// Create a range of LineView objects for the given lines.
function buildViewArray(cm, from, to) {
  let array = [], nextPos
  for (let pos = from; pos < to; pos = nextPos) {
    let view = new LineView(cm.doc, (0,_utils_line_js__WEBPACK_IMPORTED_MODULE_8__.getLine)(cm.doc, pos), pos)
    nextPos = pos + view.size
    array.push(view)
  }
  return array
}


/***/ }),

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

/***/ "./src/third_party/codemirror/package/src/util/dom.js":
/*!************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/util/dom.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeElt: () => (/* binding */ activeElt),
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   classTest: () => (/* binding */ classTest),
/* harmony export */   contains: () => (/* binding */ contains),
/* harmony export */   elt: () => (/* binding */ elt),
/* harmony export */   eltP: () => (/* binding */ eltP),
/* harmony export */   joinClasses: () => (/* binding */ joinClasses),
/* harmony export */   range: () => (/* binding */ range),
/* harmony export */   removeChildren: () => (/* binding */ removeChildren),
/* harmony export */   removeChildrenAndAdd: () => (/* binding */ removeChildrenAndAdd),
/* harmony export */   rmClass: () => (/* binding */ rmClass),
/* harmony export */   selectInput: () => (/* binding */ selectInput)
/* harmony export */ });
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");


function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

let rmClass = function(node, cls) {
  let current = node.className
  let match = classTest(cls).exec(current)
  if (match) {
    let after = current.slice(match.index + match[0].length)
    node.className = current.slice(0, match.index) + (after ? match[1] + after : "")
  }
}

function removeChildren(e) {
  for (let count = e.childNodes.length; count > 0; --count)
    e.removeChild(e.firstChild)
  return e
}

function removeChildrenAndAdd(parent, e) {
  return removeChildren(parent).appendChild(e)
}

function elt(tag, content, className, style) {
  let e = document.createElement(tag)
  if (className) e.className = className
  if (style) e.style.cssText = style
  if (typeof content == "string") e.appendChild(document.createTextNode(content))
  else if (content) for (let i = 0; i < content.length; ++i) e.appendChild(content[i])
  return e
}
// wrapper for elt, which removes the elt from the accessibility tree
function eltP(tag, content, className, style) {
  let e = elt(tag, content, className, style)
  e.setAttribute("role", "presentation")
  return e
}

let range
if (document.createRange) range = function(node, start, end, endNode) {
  let r = document.createRange()
  r.setEnd(endNode || node, end)
  r.setStart(node, start)
  return r
}
else range = function(node, start, end) {
  let r = document.body.createTextRange()
  try { r.moveToElementText(node.parentNode) }
  catch(e) { return r }
  r.collapse(true)
  r.moveEnd("character", end)
  r.moveStart("character", start)
  return r
}

function contains(parent, child) {
  if (child.nodeType == 3) // Android browser always returns false when child is a textnode
    child = child.parentNode
  if (parent.contains)
    return parent.contains(child)
  do {
    if (child.nodeType == 11) child = child.host
    if (child == parent) return true
  } while (child = child.parentNode)
}

function activeElt() {
  // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
  // IE < 10 will throw when accessed while the page is loading or in an iframe.
  // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
  let activeElement
  try {
    activeElement = document.activeElement
  } catch(e) {
    activeElement = document.body || null
  }
  while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement)
    activeElement = activeElement.shadowRoot.activeElement
  return activeElement
}

function addClass(node, cls) {
  let current = node.className
  if (!classTest(cls).test(current)) node.className += (current ? " " : "") + cls
}
function joinClasses(a, b) {
  let as = a.split(" ")
  for (let i = 0; i < as.length; i++)
    if (as[i] && !classTest(as[i]).test(b)) b += " " + as[i]
  return b
}

let selectInput = function(node) { node.select() }
if (_browser_js__WEBPACK_IMPORTED_MODULE_0__.ios) // Mobile Safari apparently has a bug where select() is broken.
  selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length }
else if (_browser_js__WEBPACK_IMPORTED_MODULE_0__.ie) // Suppress mysterious IE10 errors
  selectInput = function(node) { try { node.select() } catch(_e) {} }


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

/***/ "./src/third_party/codemirror/package/src/util/feature_detection.js":
/*!**************************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/util/feature_detection.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dragAndDrop: () => (/* binding */ dragAndDrop),
/* harmony export */   hasBadBidiRects: () => (/* binding */ hasBadBidiRects),
/* harmony export */   hasBadZoomedRects: () => (/* binding */ hasBadZoomedRects),
/* harmony export */   hasCopyEvent: () => (/* binding */ hasCopyEvent),
/* harmony export */   hasSelection: () => (/* binding */ hasSelection),
/* harmony export */   splitLinesAuto: () => (/* binding */ splitLinesAuto),
/* harmony export */   zeroWidthElement: () => (/* binding */ zeroWidthElement)
/* harmony export */ });
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");



// Detect drag-and-drop
let dragAndDrop = function() {
  // There is *some* kind of drag-and-drop support in IE6-8, but I
  // couldn't get it to work yet.
  if (_browser_js__WEBPACK_IMPORTED_MODULE_0__.ie && _browser_js__WEBPACK_IMPORTED_MODULE_0__.ie_version < 9) return false
  let div = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)('div')
  return "draggable" in div || "dragDrop" in div
}()

let zwspSupported
function zeroWidthElement(measure) {
  if (zwspSupported == null) {
    let test = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("span", "\u200b")
    ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.removeChildrenAndAdd)(measure, (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("span", [test, document.createTextNode("x")]))
    if (measure.firstChild.offsetHeight != 0)
      zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(_browser_js__WEBPACK_IMPORTED_MODULE_0__.ie && _browser_js__WEBPACK_IMPORTED_MODULE_0__.ie_version < 8)
  }
  let node = zwspSupported ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("span", "\u200b") :
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px")
  node.setAttribute("cm-text", "")
  return node
}

// Feature-detect IE's crummy client rect reporting for bidi text
let badBidiRects
function hasBadBidiRects(measure) {
  if (badBidiRects != null) return badBidiRects
  let txt = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.removeChildrenAndAdd)(measure, document.createTextNode("A\u062eA"))
  let r0 = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.range)(txt, 0, 1).getBoundingClientRect()
  let r1 = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.range)(txt, 1, 2).getBoundingClientRect()
  ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.removeChildren)(measure)
  if (!r0 || r0.left == r0.right) return false // Safari returns null in some cases (#2780)
  return badBidiRects = (r1.right - r0.right < 3)
}

// See if "".split is the broken IE version, if so, provide an
// alternative way to split lines.
let splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? string => {
  let pos = 0, result = [], l = string.length
  while (pos <= l) {
    let nl = string.indexOf("\n", pos)
    if (nl == -1) nl = string.length
    let line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl)
    let rt = line.indexOf("\r")
    if (rt != -1) {
      result.push(line.slice(0, rt))
      pos += rt + 1
    } else {
      result.push(line)
      pos = nl + 1
    }
  }
  return result
} : string => string.split(/\r\n?|\n/)

let hasSelection = window.getSelection ? te => {
  try { return te.selectionStart != te.selectionEnd }
  catch(e) { return false }
} : te => {
  let range
  try {range = te.ownerDocument.selection.createRange()}
  catch(e) {}
  if (!range || range.parentElement() != te) return false
  return range.compareEndPoints("StartToEnd", range) != 0
}

let hasCopyEvent = (() => {
  let e = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("div")
  if ("oncopy" in e) return true
  e.setAttribute("oncopy", "return;")
  return typeof e.oncopy == "function"
})()

let badZoomedRects = null
function hasBadZoomedRects(measure) {
  if (badZoomedRects != null) return badZoomedRects
  let node = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.removeChildrenAndAdd)(measure, (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.elt)("span", "x"))
  let normal = node.getBoundingClientRect()
  let fromRange = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.range)(node, 0, 1).getBoundingClientRect()
  return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
}


/***/ })

}]);