"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_edit_methods_js"],{

/***/ "./src/third_party/codemirror/package/src/edit/methods.js":
/*!****************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/edit/methods.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./src/third_party/codemirror/package/src/display/operations.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/scrolling.js */ "./src/third_party/codemirror/package/src/display/scrolling.js");
/* harmony import */ var _display_update_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/update_display.js */ "./src/third_party/codemirror/package/src/display/update_display.js");
/* harmony import */ var _display_view_tracking_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../display/view_tracking.js */ "./src/third_party/codemirror/package/src/display/view_tracking.js");
/* harmony import */ var _input_indent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input/indent.js */ "./src/third_party/codemirror/package/src/input/indent.js");
/* harmony import */ var _input_input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../input/input.js */ "./src/third_party/codemirror/package/src/input/input.js");
/* harmony import */ var _input_keymap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../input/keymap.js */ "./src/third_party/codemirror/package/src/input/keymap.js");
/* harmony import */ var _input_movement_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../input/movement.js */ "./src/third_party/codemirror/package/src/input/movement.js");
/* harmony import */ var _line_highlight_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../line/highlight.js */ "./src/third_party/codemirror/package/src/line/highlight.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../line/spans.js */ "./src/third_party/codemirror/package/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _model_document_data_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../model/document_data.js */ "./src/third_party/codemirror/package/src/model/document_data.js");
/* harmony import */ var _model_selection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../model/selection.js */ "./src/third_party/codemirror/package/src/model/selection.js");
/* harmony import */ var _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../model/selection_updates.js */ "./src/third_party/codemirror/package/src/model/selection_updates.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../util/operation_group.js */ "./src/third_party/codemirror/package/src/util/operation_group.js");
/* harmony import */ var _commands_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./commands.js */ "./src/third_party/codemirror/package/src/edit/commands.js");
/* harmony import */ var _deleteNearSelection_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./deleteNearSelection.js */ "./src/third_party/codemirror/package/src/edit/deleteNearSelection.js");
/* harmony import */ var _key_events_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./key_events.js */ "./src/third_party/codemirror/package/src/edit/key_events.js");
/* harmony import */ var _mouse_events_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mouse_events.js */ "./src/third_party/codemirror/package/src/edit/mouse_events.js");


























// The publicly visible API. Note that methodOp(f) means
// 'wrap f in an operation, performed on its `this` parameter'.

// This is not the complete set of editor methods. Most of the
// methods defined on the Doc type are also injected into
// CodeMirror.prototype, for backwards compatibility and
// convenience.

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(CodeMirror) {
  let optionHandlers = CodeMirror.optionHandlers

  let helpers = CodeMirror.helpers = {}

  CodeMirror.prototype = {
    constructor: CodeMirror,
    focus: function(){window.focus(); this.display.input.focus()},

    setOption: function(option, value) {
      let options = this.options, old = options[option]
      if (options[option] == value && option != "mode") return
      options[option] = value
      if (optionHandlers.hasOwnProperty(option))
        (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.operation)(this, optionHandlers[option])(this, value, old)
      ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_17__.signal)(this, "optionChange", this, option)
    },

    getOption: function(option) {return this.options[option]},
    getDoc: function() {return this.doc},

    addKeyMap: function(map, bottom) {
      this.state.keyMaps[bottom ? "push" : "unshift"]((0,_input_keymap_js__WEBPACK_IMPORTED_MODULE_6__.getKeyMap)(map))
    },
    removeKeyMap: function(map) {
      let maps = this.state.keyMaps
      for (let i = 0; i < maps.length; ++i)
        if (maps[i] == map || maps[i].name == map) {
          maps.splice(i, 1)
          return true
        }
    },

    addOverlay: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.methodOp)(function(spec, options) {
      let mode = spec.token ? spec : CodeMirror.getMode(this.options, spec)
      if (mode.startState) throw new Error("Overlays may not be stateful.")
      ;(0,_util_misc_js__WEBPACK_IMPORTED_MODULE_18__.insertSorted)(this.state.overlays,
                   {mode: mode, modeSpec: spec, opaque: options && options.opaque,
                    priority: (options && options.priority) || 0},
                   overlay => overlay.priority)
      this.state.modeGen++
      ;(0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_3__.regChange)(this)
    }),
    removeOverlay: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.methodOp)(function(spec) {
      let overlays = this.state.overlays
      for (let i = 0; i < overlays.length; ++i) {
        let cur = overlays[i].modeSpec
        if (cur == spec || typeof spec == "string" && cur.name == spec) {
          overlays.splice(i, 1)
          this.state.modeGen++
          ;(0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_3__.regChange)(this)
          return
        }
      }
    }),

    indentLine: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.methodOp)(function(n, dir, aggressive) {
      if (typeof dir != "string" && typeof dir != "number") {
        if (dir == null) dir = this.options.smartIndent ? "smart" : "prev"
        else dir = dir ? "add" : "subtract"
      }
      if ((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_11__.isLine)(this.doc, n)) (0,_input_indent_js__WEBPACK_IMPORTED_MODULE_4__.indentLine)(this, n, dir, aggressive)
    }),
    indentSelection: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.methodOp)(function(how) {
      let ranges = this.doc.sel.ranges, end = -1
      for (let i = 0; i < ranges.length; i++) {
        let range = ranges[i]
        if (!range.empty()) {
          let from = range.from(), to = range.to()
          let start = Math.max(end, from.line)
          end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1
          for (let j = start; j < end; ++j)
            (0,_input_indent_js__WEBPACK_IMPORTED_MODULE_4__.indentLine)(this, j, how)
          let newRanges = this.doc.sel.ranges
          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
            (0,_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_15__.replaceOneSelection)(this.doc, i, new _model_selection_js__WEBPACK_IMPORTED_MODULE_14__.Range(from, newRanges[i].to()), _util_misc_js__WEBPACK_IMPORTED_MODULE_18__.sel_dontScroll)
        } else if (range.head.line > end) {
          (0,_input_indent_js__WEBPACK_IMPORTED_MODULE_4__.indentLine)(this, range.head.line, how, true)
          end = range.head.line
          if (i == this.doc.sel.primIndex) (0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.ensureCursorVisible)(this)
        }
      }
    }),

    // Fetch the parser token for a given character. Useful for hacks
    // that want to inspect the mode state (say, for completion).
    getTokenAt: function(pos, precise) {
      return (0,_line_highlight_js__WEBPACK_IMPORTED_MODULE_8__.takeToken)(this, pos, precise)
    },

    getLineTokens: function(line, precise) {
      return (0,_line_highlight_js__WEBPACK_IMPORTED_MODULE_8__.takeToken)(this, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_9__.Pos)(line), precise, true)
    },

    getTokenTypeAt: function(pos) {
      pos = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_9__.clipPos)(this.doc, pos)
      let styles = (0,_line_highlight_js__WEBPACK_IMPORTED_MODULE_8__.getLineStyles)(this, (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_11__.getLine)(this.doc, pos.line))
      let before = 0, after = (styles.length - 1) / 2, ch = pos.ch
      let type
      if (ch == 0) type = styles[2]
      else for (;;) {
        let mid = (before + after) >> 1
        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) after = mid
        else if (styles[mid * 2 + 1] < ch) before = mid + 1
        else { type = styles[mid * 2 + 2]; break }
      }
      let cut = type ? type.indexOf("overlay ") : -1
      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
    },

    getModeAt: function(pos) {
      let mode = this.doc.mode
      if (!mode.innerMode) return mode
      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
    },

    getHelper: function(pos, type) {
      return this.getHelpers(pos, type)[0]
    },

    getHelpers: function(pos, type) {
      let found = []
      if (!helpers.hasOwnProperty(type)) return found
      let help = helpers[type], mode = this.getModeAt(pos)
      if (typeof mode[type] == "string") {
        if (help[mode[type]]) found.push(help[mode[type]])
      } else if (mode[type]) {
        for (let i = 0; i < mode[type].length; i++) {
          let val = help[mode[type][i]]
          if (val) found.push(val)
        }
      } else if (mode.helperType && help[mode.helperType]) {
        found.push(help[mode.helperType])
      } else if (help[mode.name]) {
        found.push(help[mode.name])
      }
      for (let i = 0; i < help._global.length; i++) {
        let cur = help._global[i]
        if (cur.pred(mode, this) && (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_18__.indexOf)(found, cur.val) == -1)
          found.push(cur.val)
      }
      return found
    },

    getStateAfter: function(line, precise) {
      let doc = this.doc
      line = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_9__.clipLine)(doc, line == null ? doc.first + doc.size - 1: line)
      return (0,_line_highlight_js__WEBPACK_IMPORTED_MODULE_8__.getContextBefore)(this, line + 1, precise).state
    },

    cursorCoords: function(start, mode) {
      let pos, range = this.doc.sel.primary()
      if (start == null) pos = range.head
      else if (typeof start == "object") pos = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_9__.clipPos)(this.doc, start)
      else pos = start ? range.from() : range.to()
      return (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.cursorCoords)(this, pos, mode || "page")
    },

    charCoords: function(pos, mode) {
      return (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.charCoords)(this, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_9__.clipPos)(this.doc, pos), mode || "page")
    },

    coordsChar: function(coords, mode) {
      coords = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.fromCoordSystem)(this, coords, mode || "page")
      return (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.coordsChar)(this, coords.left, coords.top)
    },

    lineAtHeight: function(height, mode) {
      height = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.fromCoordSystem)(this, {top: height, left: 0}, mode || "page").top
      return (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_11__.lineAtHeight)(this.doc, height + this.display.viewOffset)
    },
    heightAtLine: function(line, mode, includeWidgets) {
      let end = false, lineObj
      if (typeof line == "number") {
        let last = this.doc.first + this.doc.size - 1
        if (line < this.doc.first) line = this.doc.first
        else if (line > last) { line = last; end = true }
        lineObj = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_11__.getLine)(this.doc, line)
      } else {
        lineObj = line
      }
      return (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.intoCoordSystem)(this, lineObj, {top: 0, left: 0}, mode || "page", includeWidgets || end).top +
        (end ? this.doc.height - (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_10__.heightAtLine)(lineObj) : 0)
    },

    defaultTextHeight: function() { return (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.textHeight)(this.display) },
    defaultCharWidth: function() { return (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.charWidth)(this.display) },

    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},

    addWidget: function(pos, node, scroll, vert, horiz) {
      let display = this.display
      pos = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.cursorCoords)(this, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_9__.clipPos)(this.doc, pos))
      let top = pos.bottom, left = pos.left
      node.style.position = "absolute"
      node.setAttribute("cm-ignore-events", "true")
      this.display.input.setUneditable(node)
      display.sizer.appendChild(node)
      if (vert == "over") {
        top = pos.top
      } else if (vert == "above" || vert == "near") {
        let vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth)
        // Default to positioning above (if specified and possible); otherwise default to positioning below
        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
          top = pos.top - node.offsetHeight
        else if (pos.bottom + node.offsetHeight <= vspace)
          top = pos.bottom
        if (left + node.offsetWidth > hspace)
          left = hspace - node.offsetWidth
      }
      node.style.top = top + "px"
      node.style.left = node.style.right = ""
      if (horiz == "right") {
        left = display.sizer.clientWidth - node.offsetWidth
        node.style.right = "0px"
      } else {
        if (horiz == "left") left = 0
        else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2
        node.style.left = left + "px"
      }
      if (scroll)
        (0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.scrollIntoView)(this, {left, top, right: left + node.offsetWidth, bottom: top + node.offsetHeight})
    },

    triggerOnKeyDown: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.methodOp)(_key_events_js__WEBPACK_IMPORTED_MODULE_22__.onKeyDown),
    triggerOnKeyPress: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.methodOp)(_key_events_js__WEBPACK_IMPORTED_MODULE_22__.onKeyPress),
    triggerOnKeyUp: _key_events_js__WEBPACK_IMPORTED_MODULE_22__.onKeyUp,
    triggerOnMouseDown: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.methodOp)(_mouse_events_js__WEBPACK_IMPORTED_MODULE_23__.onMouseDown),

    execCommand: function(cmd) {
      if (_commands_js__WEBPACK_IMPORTED_MODULE_20__.commands.hasOwnProperty(cmd))
        return _commands_js__WEBPACK_IMPORTED_MODULE_20__.commands[cmd].call(null, this)
    },

    triggerElectric: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.methodOp)(function(text) { (0,_input_input_js__WEBPACK_IMPORTED_MODULE_5__.triggerElectric)(this, text) }),

    findPosH: function(from, amount, unit, visually) {
      let dir = 1
      if (amount < 0) { dir = -1; amount = -amount }
      let cur = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_9__.clipPos)(this.doc, from)
      for (let i = 0; i < amount; ++i) {
        cur = findPosH(this.doc, cur, dir, unit, visually)
        if (cur.hitSide) break
      }
      return cur
    },

    moveH: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.methodOp)(function(dir, unit) {
      this.extendSelectionsBy(range => {
        if (this.display.shift || this.doc.extend || range.empty())
          return findPosH(this.doc, range.head, dir, unit, this.options.rtlMoveVisually)
        else
          return dir < 0 ? range.from() : range.to()
      }, _util_misc_js__WEBPACK_IMPORTED_MODULE_18__.sel_move)
    }),

    deleteH: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.methodOp)(function(dir, unit) {
      let sel = this.doc.sel, doc = this.doc
      if (sel.somethingSelected())
        doc.replaceSelection("", null, "+delete")
      else
        (0,_deleteNearSelection_js__WEBPACK_IMPORTED_MODULE_21__.deleteNearSelection)(this, range => {
          let other = findPosH(doc, range.head, dir, unit, false)
          return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other}
        })
    }),

    findPosV: function(from, amount, unit, goalColumn) {
      let dir = 1, x = goalColumn
      if (amount < 0) { dir = -1; amount = -amount }
      let cur = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_9__.clipPos)(this.doc, from)
      for (let i = 0; i < amount; ++i) {
        let coords = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.cursorCoords)(this, cur, "div")
        if (x == null) x = coords.left
        else coords.left = x
        cur = findPosV(this, coords, dir, unit)
        if (cur.hitSide) break
      }
      return cur
    },

    moveV: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.methodOp)(function(dir, unit) {
      let doc = this.doc, goals = []
      let collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected()
      doc.extendSelectionsBy(range => {
        if (collapse)
          return dir < 0 ? range.from() : range.to()
        let headPos = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.cursorCoords)(this, range.head, "div")
        if (range.goalColumn != null) headPos.left = range.goalColumn
        goals.push(headPos.left)
        let pos = findPosV(this, headPos, dir, unit)
        if (unit == "page" && range == doc.sel.primary())
          (0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.addToScrollTop)(this, (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.charCoords)(this, pos, "div").top - headPos.top)
        return pos
      }, _util_misc_js__WEBPACK_IMPORTED_MODULE_18__.sel_move)
      if (goals.length) for (let i = 0; i < doc.sel.ranges.length; i++)
        doc.sel.ranges[i].goalColumn = goals[i]
    }),

    // Find the word at the given position (as returned by coordsChar).
    findWordAt: function(pos) {
      let doc = this.doc, line = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_11__.getLine)(doc, pos.line).text
      let start = pos.ch, end = pos.ch
      if (line) {
        let helper = this.getHelper(pos, "wordChars")
        if ((pos.sticky == "before" || end == line.length) && start) --start; else ++end
        let startChar = line.charAt(start)
        let check = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_18__.isWordChar)(startChar, helper)
          ? ch => (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_18__.isWordChar)(ch, helper)
          : /\s/.test(startChar) ? ch => /\s/.test(ch)
          : ch => (!/\s/.test(ch) && !(0,_util_misc_js__WEBPACK_IMPORTED_MODULE_18__.isWordChar)(ch))
        while (start > 0 && check(line.charAt(start - 1))) --start
        while (end < line.length && check(line.charAt(end))) ++end
      }
      return new _model_selection_js__WEBPACK_IMPORTED_MODULE_14__.Range((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_9__.Pos)(pos.line, start), (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_9__.Pos)(pos.line, end))
    },

    toggleOverwrite: function(value) {
      if (value != null && value == this.state.overwrite) return
      if (this.state.overwrite = !this.state.overwrite)
        (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_16__.addClass)(this.display.cursorDiv, "CodeMirror-overwrite")
      else
        (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_16__.rmClass)(this.display.cursorDiv, "CodeMirror-overwrite")

      ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_17__.signal)(this, "overwriteToggle", this, this.state.overwrite)
    },
    hasFocus: function() { return this.display.input.getField() == (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_16__.activeElt)() },
    isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },

    scrollTo: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.methodOp)(function (x, y) { (0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.scrollToCoords)(this, x, y) }),
    getScrollInfo: function() {
      let scroller = this.display.scroller
      return {left: scroller.scrollLeft, top: scroller.scrollTop,
              height: scroller.scrollHeight - (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.scrollGap)(this) - this.display.barHeight,
              width: scroller.scrollWidth - (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.scrollGap)(this) - this.display.barWidth,
              clientHeight: (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.displayHeight)(this), clientWidth: (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.displayWidth)(this)}
    },

    scrollIntoView: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.methodOp)(function(range, margin) {
      if (range == null) {
        range = {from: this.doc.sel.primary().head, to: null}
        if (margin == null) margin = this.options.cursorScrollMargin
      } else if (typeof range == "number") {
        range = {from: (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_9__.Pos)(range, 0), to: null}
      } else if (range.from == null) {
        range = {from: range, to: null}
      }
      if (!range.to) range.to = range.from
      range.margin = margin || 0

      if (range.from.line != null) {
        (0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.scrollToRange)(this, range)
      } else {
        (0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.scrollToCoordsRange)(this, range.from, range.to, range.margin)
      }
    }),

    setSize: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.methodOp)(function(width, height) {
      let interpret = val => typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val
      if (width != null) this.display.wrapper.style.width = interpret(width)
      if (height != null) this.display.wrapper.style.height = interpret(height)
      if (this.options.lineWrapping) (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.clearLineMeasurementCache)(this)
      let lineNo = this.display.viewFrom
      this.doc.iter(lineNo, this.display.viewTo, line => {
        if (line.widgets) for (let i = 0; i < line.widgets.length; i++)
          if (line.widgets[i].noHScroll) { (0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_3__.regLineChange)(this, lineNo, "widget"); break }
        ++lineNo
      })
      this.curOp.forceUpdate = true
      ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_17__.signal)(this, "refresh", this)
    }),

    operation: function(f){return (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.runInOp)(this, f)},
    startOperation: function(){return (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.startOperation)(this)},
    endOperation: function(){return (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.endOperation)(this)},

    refresh: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.methodOp)(function() {
      let oldHeight = this.display.cachedTextHeight
      ;(0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_3__.regChange)(this)
      this.curOp.forceUpdate = true
      ;(0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.clearCaches)(this)
      ;(0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.scrollToCoords)(this, this.doc.scrollLeft, this.doc.scrollTop)
      ;(0,_display_update_display_js__WEBPACK_IMPORTED_MODULE_2__.updateGutterSpace)(this.display)
      if (oldHeight == null || Math.abs(oldHeight - (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.textHeight)(this.display)) > .5 || this.options.lineWrapping)
        (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.estimateLineHeights)(this)
      ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_17__.signal)(this, "refresh", this)
    }),

    swapDoc: (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.methodOp)(function(doc) {
      let old = this.doc
      old.cm = null
      // Cancel the current text selection if any (#5821)
      if (this.state.selectingText) this.state.selectingText()
      ;(0,_model_document_data_js__WEBPACK_IMPORTED_MODULE_13__.attachDoc)(this, doc)
      ;(0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.clearCaches)(this)
      this.display.input.reset()
      ;(0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.scrollToCoords)(this, doc.scrollLeft, doc.scrollTop)
      this.curOp.forceScroll = true
      ;(0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_19__.signalLater)(this, "swapDoc", this, old)
      return old
    }),

    phrase: function(phraseText) {
      let phrases = this.options.phrases
      return phrases && Object.prototype.hasOwnProperty.call(phrases, phraseText) ? phrases[phraseText] : phraseText
    },

    getInputField: function(){return this.display.input.getField()},
    getWrapperElement: function(){return this.display.wrapper},
    getScrollerElement: function(){return this.display.scroller},
    getGutterElement: function(){return this.display.gutters}
  }
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_17__.eventMixin)(CodeMirror)

  CodeMirror.registerHelper = function(type, name, value) {
    if (!helpers.hasOwnProperty(type)) helpers[type] = CodeMirror[type] = {_global: []}
    helpers[type][name] = value
  }
  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
    CodeMirror.registerHelper(type, name, value)
    helpers[type]._global.push({pred: predicate, val: value})
  }
}

// Used for horizontal relative motion. Dir is -1 or 1 (left or
// right), unit can be "codepoint", "char", "column" (like char, but
// doesn't cross line boundaries), "word" (across next word), or
// "group" (to the start of next group of word or
// non-word-non-whitespace chars). The visually param controls
// whether, in right-to-left text, direction 1 means to move towards
// the next index in the string, or towards the character to the right
// of the current position. The resulting position will have a
// hitSide=true property if it reached the end of the document.
function findPosH(doc, pos, dir, unit, visually) {
  let oldPos = pos
  let origDir = dir
  let lineObj = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_11__.getLine)(doc, pos.line)
  let lineDir = visually && doc.direction == "rtl" ? -dir : dir
  function findNextLine() {
    let l = pos.line + lineDir
    if (l < doc.first || l >= doc.first + doc.size) return false
    pos = new _line_pos_js__WEBPACK_IMPORTED_MODULE_9__.Pos(l, pos.ch, pos.sticky)
    return lineObj = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_11__.getLine)(doc, l)
  }
  function moveOnce(boundToLine) {
    let next
    if (unit == "codepoint") {
      let ch = lineObj.text.charCodeAt(pos.ch + (dir > 0 ? 0 : -1))
      if (isNaN(ch)) {
        next = null
      } else {
        let astral = dir > 0 ? ch >= 0xD800 && ch < 0xDC00 : ch >= 0xDC00 && ch < 0xDFFF
        next = new _line_pos_js__WEBPACK_IMPORTED_MODULE_9__.Pos(pos.line, Math.max(0, Math.min(lineObj.text.length, pos.ch + dir * (astral ? 2 : 1))), -dir)
      }
    } else if (visually) {
      next = (0,_input_movement_js__WEBPACK_IMPORTED_MODULE_7__.moveVisually)(doc.cm, lineObj, pos, dir)
    } else {
      next = (0,_input_movement_js__WEBPACK_IMPORTED_MODULE_7__.moveLogically)(lineObj, pos, dir)
    }
    if (next == null) {
      if (!boundToLine && findNextLine())
        pos = (0,_input_movement_js__WEBPACK_IMPORTED_MODULE_7__.endOfLine)(visually, doc.cm, lineObj, pos.line, lineDir)
      else
        return false
    } else {
      pos = next
    }
    return true
  }

  if (unit == "char" || unit == "codepoint") {
    moveOnce()
  } else if (unit == "column") {
    moveOnce(true)
  } else if (unit == "word" || unit == "group") {
    let sawType = null, group = unit == "group"
    let helper = doc.cm && doc.cm.getHelper(pos, "wordChars")
    for (let first = true;; first = false) {
      if (dir < 0 && !moveOnce(!first)) break
      let cur = lineObj.text.charAt(pos.ch) || "\n"
      let type = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_18__.isWordChar)(cur, helper) ? "w"
        : group && cur == "\n" ? "n"
        : !group || /\s/.test(cur) ? null
        : "p"
      if (group && !first && !type) type = "s"
      if (sawType && sawType != type) {
        if (dir < 0) {dir = 1; moveOnce(); pos.sticky = "after"}
        break
      }

      if (type) sawType = type
      if (dir > 0 && !moveOnce(!first)) break
    }
  }
  let result = (0,_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_15__.skipAtomic)(doc, pos, oldPos, origDir, true)
  if ((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_9__.equalCursorPos)(oldPos, result)) result.hitSide = true
  return result
}

// For relative vertical movement. Dir may be -1 or 1. Unit can be
// "page" or "line". The resulting position will have a hitSide=true
// property if it reached the end of the document.
function findPosV(cm, pos, dir, unit) {
  let doc = cm.doc, x = pos.left, y
  if (unit == "page") {
    let pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight)
    let moveAmount = Math.max(pageSize - .5 * (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.textHeight)(cm.display), 3)
    y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount

  } else if (unit == "line") {
    y = dir > 0 ? pos.bottom + 3 : pos.top - 3
  }
  let target
  for (;;) {
    target = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_12__.coordsChar)(cm, x, y)
    if (!target.outside) break
    if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
    y += dir * 5
  }
  return target
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/input/indent.js":
/*!****************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/input/indent.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   indentLine: () => (/* binding */ indentLine)
/* harmony export */ });
/* harmony import */ var _line_highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/highlight.js */ "./src/third_party/codemirror/package/src/line/highlight.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _model_changes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/changes.js */ "./src/third_party/codemirror/package/src/model/changes.js");
/* harmony import */ var _model_selection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/selection.js */ "./src/third_party/codemirror/package/src/model/selection.js");
/* harmony import */ var _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/selection_updates.js */ "./src/third_party/codemirror/package/src/model/selection_updates.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");








// Indent the given line. The how parameter can be "smart",
// "add"/null, "subtract", or "prev". When aggressive is false
// (typically set to true for forced single-line indents), empty
// lines are not indented, and places where the mode returns Pass
// are left alone.
function indentLine(cm, n, how, aggressive) {
  let doc = cm.doc, state
  if (how == null) how = "add"
  if (how == "smart") {
    // Fall back to "prev" when the mode doesn't have an indentation
    // method.
    if (!doc.mode.indent) how = "prev"
    else state = (0,_line_highlight_js__WEBPACK_IMPORTED_MODULE_0__.getContextBefore)(cm, n).state
  }

  let tabSize = cm.options.tabSize
  let line = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__.getLine)(doc, n), curSpace = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_6__.countColumn)(line.text, null, tabSize)
  if (line.stateAfter) line.stateAfter = null
  let curSpaceString = line.text.match(/^\s*/)[0], indentation
  if (!aggressive && !/\S/.test(line.text)) {
    indentation = 0
    how = "not"
  } else if (how == "smart") {
    indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text)
    if (indentation == _util_misc_js__WEBPACK_IMPORTED_MODULE_6__.Pass || indentation > 150) {
      if (!aggressive) return
      how = "prev"
    }
  }
  if (how == "prev") {
    if (n > doc.first) indentation = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_6__.countColumn)((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_2__.getLine)(doc, n-1).text, null, tabSize)
    else indentation = 0
  } else if (how == "add") {
    indentation = curSpace + cm.options.indentUnit
  } else if (how == "subtract") {
    indentation = curSpace - cm.options.indentUnit
  } else if (typeof how == "number") {
    indentation = curSpace + how
  }
  indentation = Math.max(0, indentation)

  let indentString = "", pos = 0
  if (cm.options.indentWithTabs)
    for (let i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t"}
  if (pos < indentation) indentString += (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_6__.spaceStr)(indentation - pos)

  if (indentString != curSpaceString) {
    (0,_model_changes_js__WEBPACK_IMPORTED_MODULE_3__.replaceRange)(doc, indentString, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.Pos)(n, 0), (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.Pos)(n, curSpaceString.length), "+input")
    line.stateAfter = null
    return true
  } else {
    // Ensure that, if the cursor was in the whitespace at the start
    // of the line, it is moved to the end of that space.
    for (let i = 0; i < doc.sel.ranges.length; i++) {
      let range = doc.sel.ranges[i]
      if (range.head.line == n && range.head.ch < curSpaceString.length) {
        let pos = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_1__.Pos)(n, curSpaceString.length)
        ;(0,_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_5__.replaceOneSelection)(doc, i, new _model_selection_js__WEBPACK_IMPORTED_MODULE_4__.Range(pos, pos))
        break
      }
    }
  }
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/input/input.js":
/*!***************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/input/input.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyTextInput: () => (/* binding */ applyTextInput),
/* harmony export */   copyableRanges: () => (/* binding */ copyableRanges),
/* harmony export */   disableBrowserMagic: () => (/* binding */ disableBrowserMagic),
/* harmony export */   handlePaste: () => (/* binding */ handlePaste),
/* harmony export */   hiddenTextarea: () => (/* binding */ hiddenTextarea),
/* harmony export */   lastCopied: () => (/* binding */ lastCopied),
/* harmony export */   setLastCopied: () => (/* binding */ setLastCopied),
/* harmony export */   triggerElectric: () => (/* binding */ triggerElectric)
/* harmony export */ });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./src/third_party/codemirror/package/src/display/operations.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/scrolling.js */ "./src/third_party/codemirror/package/src/display/scrolling.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _model_changes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/changes.js */ "./src/third_party/codemirror/package/src/model/changes.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/feature_detection.js */ "./src/third_party/codemirror/package/src/util/feature_detection.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/operation_group.js */ "./src/third_party/codemirror/package/src/util/operation_group.js");
/* harmony import */ var _indent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./indent.js */ "./src/third_party/codemirror/package/src/input/indent.js");













// This will be set to a {lineWise: bool, text: [string]} object, so
// that, when pasting, we know what kind of selections the copied
// text was made out of.
let lastCopied = null

function setLastCopied(newLastCopied) {
  lastCopied = newLastCopied
}

function applyTextInput(cm, inserted, deleted, sel, origin) {
  let doc = cm.doc
  cm.display.shift = false
  if (!sel) sel = doc.sel

  let recent = +new Date - 200
  let paste = origin == "paste" || cm.state.pasteIncoming > recent
  let textLines = (0,_util_feature_detection_js__WEBPACK_IMPORTED_MODULE_7__.splitLinesAuto)(inserted), multiPaste = null
  // When pasting N lines into N selections, insert one line per selection
  if (paste && sel.ranges.length > 1) {
    if (lastCopied && lastCopied.text.join("\n") == inserted) {
      if (sel.ranges.length % lastCopied.text.length == 0) {
        multiPaste = []
        for (let i = 0; i < lastCopied.text.length; i++)
          multiPaste.push(doc.splitLines(lastCopied.text[i]))
      }
    } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
      multiPaste = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_8__.map)(textLines, l => [l])
    }
  }

  let updateInput = cm.curOp.updateInput
  // Normal behavior is to insert the new text into every selection
  for (let i = sel.ranges.length - 1; i >= 0; i--) {
    let range = sel.ranges[i]
    let from = range.from(), to = range.to()
    if (range.empty()) {
      if (deleted && deleted > 0) // Handle deletion
        from = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.Pos)(from.line, from.ch - deleted)
      else if (cm.state.overwrite && !paste) // Handle overwrite
        to = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.Pos)(to.line, Math.min((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__.getLine)(doc, to.line).text.length, to.ch + (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_8__.lst)(textLines).length))
      else if (paste && lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == textLines.join("\n"))
        from = to = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.Pos)(from.line, 0)
    }
    let changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i % multiPaste.length] : textLines,
                       origin: origin || (paste ? "paste" : cm.state.cutIncoming > recent ? "cut" : "+input")}
    ;(0,_model_changes_js__WEBPACK_IMPORTED_MODULE_4__.makeChange)(cm.doc, changeEvent)
    ;(0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__.signalLater)(cm, "inputRead", cm, changeEvent)
  }
  if (inserted && !paste)
    triggerElectric(cm, inserted)

  ;(0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.ensureCursorVisible)(cm)
  if (cm.curOp.updateInput < 2) cm.curOp.updateInput = updateInput
  cm.curOp.typing = true
  cm.state.pasteIncoming = cm.state.cutIncoming = -1
}

function handlePaste(e, cm) {
  let pasted = e.clipboardData && e.clipboardData.getData("Text")
  if (pasted) {
    e.preventDefault()
    if (!cm.isReadOnly() && !cm.options.disableInput)
      (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.runInOp)(cm, () => applyTextInput(cm, pasted, 0, null, "paste"))
    return true
  }
}

function triggerElectric(cm, inserted) {
  // When an 'electric' character is inserted, immediately trigger a reindent
  if (!cm.options.electricChars || !cm.options.smartIndent) return
  let sel = cm.doc.sel

  for (let i = sel.ranges.length - 1; i >= 0; i--) {
    let range = sel.ranges[i]
    if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) continue
    let mode = cm.getModeAt(range.head)
    let indented = false
    if (mode.electricChars) {
      for (let j = 0; j < mode.electricChars.length; j++)
        if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
          indented = (0,_indent_js__WEBPACK_IMPORTED_MODULE_10__.indentLine)(cm, range.head.line, "smart")
          break
        }
    } else if (mode.electricInput) {
      if (mode.electricInput.test((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_3__.getLine)(cm.doc, range.head.line).text.slice(0, range.head.ch)))
        indented = (0,_indent_js__WEBPACK_IMPORTED_MODULE_10__.indentLine)(cm, range.head.line, "smart")
    }
    if (indented) (0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_9__.signalLater)(cm, "electricInput", cm, range.head.line)
  }
}

function copyableRanges(cm) {
  let text = [], ranges = []
  for (let i = 0; i < cm.doc.sel.ranges.length; i++) {
    let line = cm.doc.sel.ranges[i].head.line
    let lineRange = {anchor: (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.Pos)(line, 0), head: (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.Pos)(line + 1, 0)}
    ranges.push(lineRange)
    text.push(cm.getRange(lineRange.anchor, lineRange.head))
  }
  return {text: text, ranges: ranges}
}

function disableBrowserMagic(field, spellcheck, autocorrect, autocapitalize) {
  field.setAttribute("autocorrect", autocorrect ? "" : "off")
  field.setAttribute("autocapitalize", autocapitalize ? "" : "off")
  field.setAttribute("spellcheck", !!spellcheck)
}

function hiddenTextarea() {
  let te = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_6__.elt)("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none")
  let div = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_6__.elt)("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;")
  // The textarea is kept positioned near the cursor to prevent the
  // fact that it'll be scrolled into view on input from scrolling
  // our fake cursor out of view. On webkit, when wrap=off, paste is
  // very slow. So make the area wide instead.
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_5__.webkit) te.style.width = "1000px"
  else te.setAttribute("wrap", "off")
  // If border: 0; -- iOS fails to open keyboard (issue #1287)
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_5__.ios) te.style.border = "1px solid black"
  disableBrowserMagic(te)
  return div
}


/***/ })

}]);