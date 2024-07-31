"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_edit_options_js"],{

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

/***/ "./src/third_party/codemirror/package/src/input/keymap.js":
/*!****************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/input/keymap.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addModifierNames: () => (/* binding */ addModifierNames),
/* harmony export */   getKeyMap: () => (/* binding */ getKeyMap),
/* harmony export */   isModifierKey: () => (/* binding */ isModifierKey),
/* harmony export */   keyMap: () => (/* binding */ keyMap),
/* harmony export */   keyName: () => (/* binding */ keyName),
/* harmony export */   lookupKey: () => (/* binding */ lookupKey),
/* harmony export */   normalizeKeyMap: () => (/* binding */ normalizeKeyMap)
/* harmony export */ });
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _keynames_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keynames.js */ "./src/third_party/codemirror/package/src/input/keynames.js");





let keyMap = {}

keyMap.basic = {
  "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
  "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
  "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
  "Tab": "defaultTab", "Shift-Tab": "indentAuto",
  "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
  "Esc": "singleSelection"
}
// Note that the save and find-related commands aren't defined by
// default. User code or addons can define them. Unknown commands
// are simply ignored.
keyMap.pcDefault = {
  "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
  "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
  "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
  "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
  "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
  "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
  "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
  "fallthrough": "basic"
}
// Very basic readline/emacs-style bindings, which are standard on Mac.
keyMap.emacsy = {
  "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
  "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd", "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp",
  "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine",
  "Ctrl-T": "transposeChars", "Ctrl-O": "openLine"
}
keyMap.macDefault = {
  "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
  "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
  "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
  "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
  "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
  "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
  "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
  "fallthrough": ["basic", "emacsy"]
}
keyMap["default"] = _util_browser_js__WEBPACK_IMPORTED_MODULE_0__.mac ? keyMap.macDefault : keyMap.pcDefault

// KEYMAP DISPATCH

function normalizeKeyName(name) {
  let parts = name.split(/-(?!$)/)
  name = parts[parts.length - 1]
  let alt, ctrl, shift, cmd
  for (let i = 0; i < parts.length - 1; i++) {
    let mod = parts[i]
    if (/^(cmd|meta|m)$/i.test(mod)) cmd = true
    else if (/^a(lt)?$/i.test(mod)) alt = true
    else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true
    else if (/^s(hift)?$/i.test(mod)) shift = true
    else throw new Error("Unrecognized modifier name: " + mod)
  }
  if (alt) name = "Alt-" + name
  if (ctrl) name = "Ctrl-" + name
  if (cmd) name = "Cmd-" + name
  if (shift) name = "Shift-" + name
  return name
}

// This is a kludge to keep keymaps mostly working as raw objects
// (backwards compatibility) while at the same time support features
// like normalization and multi-stroke key bindings. It compiles a
// new normalized keymap, and then updates the old object to reflect
// this.
function normalizeKeyMap(keymap) {
  let copy = {}
  for (let keyname in keymap) if (keymap.hasOwnProperty(keyname)) {
    let value = keymap[keyname]
    if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) continue
    if (value == "...") { delete keymap[keyname]; continue }

    let keys = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_1__.map)(keyname.split(" "), normalizeKeyName)
    for (let i = 0; i < keys.length; i++) {
      let val, name
      if (i == keys.length - 1) {
        name = keys.join(" ")
        val = value
      } else {
        name = keys.slice(0, i + 1).join(" ")
        val = "..."
      }
      let prev = copy[name]
      if (!prev) copy[name] = val
      else if (prev != val) throw new Error("Inconsistent bindings for " + name)
    }
    delete keymap[keyname]
  }
  for (let prop in copy) keymap[prop] = copy[prop]
  return keymap
}

function lookupKey(key, map, handle, context) {
  map = getKeyMap(map)
  let found = map.call ? map.call(key, context) : map[key]
  if (found === false) return "nothing"
  if (found === "...") return "multi"
  if (found != null && handle(found)) return "handled"

  if (map.fallthrough) {
    if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
      return lookupKey(key, map.fallthrough, handle, context)
    for (let i = 0; i < map.fallthrough.length; i++) {
      let result = lookupKey(key, map.fallthrough[i], handle, context)
      if (result) return result
    }
  }
}

// Modifier key presses don't count as 'real' key presses for the
// purpose of keymap fallthrough.
function isModifierKey(value) {
  let name = typeof value == "string" ? value : _keynames_js__WEBPACK_IMPORTED_MODULE_2__.keyNames[value.keyCode]
  return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
}

function addModifierNames(name, event, noShift) {
  let base = name
  if (event.altKey && base != "Alt") name = "Alt-" + name
  if ((_util_browser_js__WEBPACK_IMPORTED_MODULE_0__.flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") name = "Ctrl-" + name
  if ((_util_browser_js__WEBPACK_IMPORTED_MODULE_0__.flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Mod") name = "Cmd-" + name
  if (!noShift && event.shiftKey && base != "Shift") name = "Shift-" + name
  return name
}

// Look up the name of a key as indicated by an event object.
function keyName(event, noShift) {
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_0__.presto && event.keyCode == 34 && event["char"]) return false
  let name = _keynames_js__WEBPACK_IMPORTED_MODULE_2__.keyNames[event.keyCode]
  if (name == null || event.altGraphKey) return false
  // Ctrl-ScrollLock has keyCode 3, same as Ctrl-Pause,
  // so we'll use event.code when available (Chrome 48+, FF 38+, Safari 10.1+)
  if (event.keyCode == 3 && event.code) name = event.code
  return addModifierNames(name, event, noShift)
}

function getKeyMap(val) {
  return typeof val == "string" ? keyMap[val] : val
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/input/keynames.js":
/*!******************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/input/keynames.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   keyNames: () => (/* binding */ keyNames)
/* harmony export */ });
let keyNames = {
  3: "Pause", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
  46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
  106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 145: "ScrollLock",
  173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
  221: "]", 222: "'", 224: "Mod", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
  63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
}

// Number keys
for (let i = 0; i < 10; i++) keyNames[i + 48] = keyNames[i + 96] = String(i)
// Alphabetic keys
for (let i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i)
// Function keys
for (let i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i


/***/ })

}]);