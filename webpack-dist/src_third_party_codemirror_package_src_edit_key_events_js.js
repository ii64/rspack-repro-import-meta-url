"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_edit_key_events_js"],{

/***/ "./src/third_party/codemirror/package/src/edit/key_events.js":
/*!*******************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/edit/key_events.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dispatchKey: () => (/* binding */ dispatchKey),
/* harmony export */   onKeyDown: () => (/* binding */ onKeyDown),
/* harmony export */   onKeyPress: () => (/* binding */ onKeyPress),
/* harmony export */   onKeyUp: () => (/* binding */ onKeyUp)
/* harmony export */ });
/* harmony import */ var _display_selection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/selection.js */ "./src/third_party/codemirror/package/src/display/selection.js");
/* harmony import */ var _input_keymap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input/keymap.js */ "./src/third_party/codemirror/package/src/input/keymap.js");
/* harmony import */ var _measurement_widgets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../measurement/widgets.js */ "./src/third_party/codemirror/package/src/measurement/widgets.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/feature_detection.js */ "./src/third_party/codemirror/package/src/util/feature_detection.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/operation_group.js */ "./src/third_party/codemirror/package/src/util/operation_group.js");
/* harmony import */ var _commands_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./commands.js */ "./src/third_party/codemirror/package/src/edit/commands.js");












// Run a handler that was bound to a key.
function doHandleBinding(cm, bound, dropShift) {
  if (typeof bound == "string") {
    bound = _commands_js__WEBPACK_IMPORTED_MODULE_9__.commands[bound]
    if (!bound) return false
  }
  // Ensure previous input has been read, so that the handler sees a
  // consistent view of the document
  cm.display.input.ensurePolled()
  let prevShift = cm.display.shift, done = false
  try {
    if (cm.isReadOnly()) cm.state.suppressEdits = true
    if (dropShift) cm.display.shift = false
    done = bound(cm) != _util_misc_js__WEBPACK_IMPORTED_MODULE_7__.Pass
  } finally {
    cm.display.shift = prevShift
    cm.state.suppressEdits = false
  }
  return done
}

function lookupKeyForEditor(cm, name, handle) {
  for (let i = 0; i < cm.state.keyMaps.length; i++) {
    let result = (0,_input_keymap_js__WEBPACK_IMPORTED_MODULE_1__.lookupKey)(name, cm.state.keyMaps[i], handle, cm)
    if (result) return result
  }
  return (cm.options.extraKeys && (0,_input_keymap_js__WEBPACK_IMPORTED_MODULE_1__.lookupKey)(name, cm.options.extraKeys, handle, cm))
    || (0,_input_keymap_js__WEBPACK_IMPORTED_MODULE_1__.lookupKey)(name, cm.options.keyMap, handle, cm)
}

// Note that, despite the name, this function is also used to check
// for bound mouse clicks.

let stopSeq = new _util_misc_js__WEBPACK_IMPORTED_MODULE_7__.Delayed

function dispatchKey(cm, name, e, handle) {
  let seq = cm.state.keySeq
  if (seq) {
    if ((0,_input_keymap_js__WEBPACK_IMPORTED_MODULE_1__.isModifierKey)(name)) return "handled"
    if (/\'$/.test(name))
      cm.state.keySeq = null
    else
      stopSeq.set(50, () => {
        if (cm.state.keySeq == seq) {
          cm.state.keySeq = null
          cm.display.input.reset()
        }
      })
    if (dispatchKeyInner(cm, seq + " " + name, e, handle)) return true
  }
  return dispatchKeyInner(cm, name, e, handle)
}

function dispatchKeyInner(cm, name, e, handle) {
  let result = lookupKeyForEditor(cm, name, handle)

  if (result == "multi")
    cm.state.keySeq = name
  if (result == "handled")
    (0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_8__.signalLater)(cm, "keyHandled", cm, name, e)

  if (result == "handled" || result == "multi") {
    (0,_util_event_js__WEBPACK_IMPORTED_MODULE_5__.e_preventDefault)(e)
    ;(0,_display_selection_js__WEBPACK_IMPORTED_MODULE_0__.restartBlink)(cm)
  }

  return !!result
}

// Handle a key from the keydown event.
function handleKeyBinding(cm, e) {
  let name = (0,_input_keymap_js__WEBPACK_IMPORTED_MODULE_1__.keyName)(e, true)
  if (!name) return false

  if (e.shiftKey && !cm.state.keySeq) {
    // First try to resolve full name (including 'Shift-'). Failing
    // that, see if there is a cursor-motion command (starting with
    // 'go') bound to the keyname without 'Shift-'.
    return dispatchKey(cm, "Shift-" + name, e, b => doHandleBinding(cm, b, true))
        || dispatchKey(cm, name, e, b => {
             if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
               return doHandleBinding(cm, b)
           })
  } else {
    return dispatchKey(cm, name, e, b => doHandleBinding(cm, b))
  }
}

// Handle a key from the keypress event
function handleCharBinding(cm, e, ch) {
  return dispatchKey(cm, "'" + ch + "'", e, b => doHandleBinding(cm, b, true))
}

let lastStoppedKey = null
function onKeyDown(e) {
  let cm = this
  if (e.target && e.target != cm.display.input.getField()) return
  cm.curOp.focus = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_4__.activeElt)()
  if ((0,_util_event_js__WEBPACK_IMPORTED_MODULE_5__.signalDOMEvent)(cm, e)) return
  // IE does strange things with escape.
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_3__.ie && _util_browser_js__WEBPACK_IMPORTED_MODULE_3__.ie_version < 11 && e.keyCode == 27) e.returnValue = false
  let code = e.keyCode
  cm.display.shift = code == 16 || e.shiftKey
  let handled = handleKeyBinding(cm, e)
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_3__.presto) {
    lastStoppedKey = handled ? code : null
    // Opera has no cut event... we try to at least catch the key combo
    if (!handled && code == 88 && !_util_feature_detection_js__WEBPACK_IMPORTED_MODULE_6__.hasCopyEvent && (_util_browser_js__WEBPACK_IMPORTED_MODULE_3__.mac ? e.metaKey : e.ctrlKey))
      cm.replaceSelection("", null, "cut")
  }
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_3__.gecko && !_util_browser_js__WEBPACK_IMPORTED_MODULE_3__.mac && !handled && code == 46 && e.shiftKey && !e.ctrlKey && document.execCommand)
    document.execCommand("cut")

  // Turn mouse into crosshair when Alt is held on Mac.
  if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
    showCrossHair(cm)
}

function showCrossHair(cm) {
  let lineDiv = cm.display.lineDiv
  ;(0,_util_dom_js__WEBPACK_IMPORTED_MODULE_4__.addClass)(lineDiv, "CodeMirror-crosshair")

  function up(e) {
    if (e.keyCode == 18 || !e.altKey) {
      (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_4__.rmClass)(lineDiv, "CodeMirror-crosshair")
      ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_5__.off)(document, "keyup", up)
      ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_5__.off)(document, "mouseover", up)
    }
  }
  (0,_util_event_js__WEBPACK_IMPORTED_MODULE_5__.on)(document, "keyup", up)
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_5__.on)(document, "mouseover", up)
}

function onKeyUp(e) {
  if (e.keyCode == 16) this.doc.sel.shift = false
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_5__.signalDOMEvent)(this, e)
}

function onKeyPress(e) {
  let cm = this
  if (e.target && e.target != cm.display.input.getField()) return
  if ((0,_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_2__.eventInWidget)(cm.display, e) || (0,_util_event_js__WEBPACK_IMPORTED_MODULE_5__.signalDOMEvent)(cm, e) || e.ctrlKey && !e.altKey || _util_browser_js__WEBPACK_IMPORTED_MODULE_3__.mac && e.metaKey) return
  let keyCode = e.keyCode, charCode = e.charCode
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_3__.presto && keyCode == lastStoppedKey) {lastStoppedKey = null; (0,_util_event_js__WEBPACK_IMPORTED_MODULE_5__.e_preventDefault)(e); return}
  if ((_util_browser_js__WEBPACK_IMPORTED_MODULE_3__.presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) return
  let ch = String.fromCharCode(charCode == null ? keyCode : charCode)
  // Some browsers fire keypress events for backspace
  if (ch == "\x08") return
  if (handleCharBinding(cm, e, ch)) return
  cm.display.input.onKeyPress(e)
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