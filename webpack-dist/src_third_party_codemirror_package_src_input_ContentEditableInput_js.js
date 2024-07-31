"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_input_ContentEditableInput_js"],{

/***/ "./src/third_party/codemirror/package/src/input/ContentEditableInput.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/input/ContentEditableInput.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentEditableInput)
/* harmony export */ });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./src/third_party/codemirror/package/src/display/operations.js");
/* harmony import */ var _display_selection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/selection.js */ "./src/third_party/codemirror/package/src/display/selection.js");
/* harmony import */ var _display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/view_tracking.js */ "./src/third_party/codemirror/package/src/display/view_tracking.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _model_changes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/changes.js */ "./src/third_party/codemirror/package/src/model/changes.js");
/* harmony import */ var _model_selection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/selection.js */ "./src/third_party/codemirror/package/src/model/selection.js");
/* harmony import */ var _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/selection_updates.js */ "./src/third_party/codemirror/package/src/model/selection_updates.js");
/* harmony import */ var _util_bidi_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/bidi.js */ "./src/third_party/codemirror/package/src/util/bidi.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./input.js */ "./src/third_party/codemirror/package/src/input/input.js");

















// CONTENTEDITABLE INPUT STYLE

class ContentEditableInput {
  constructor(cm) {
    this.cm = cm
    this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null
    this.polling = new _util_misc_js__WEBPACK_IMPORTED_MODULE_13__.Delayed()
    this.composing = null
    this.gracePeriod = false
    this.readDOMTimeout = null
  }

  init(display) {
    let input = this, cm = input.cm
    let div = input.div = display.lineDiv
    div.contentEditable = true
    ;(0,_input_js__WEBPACK_IMPORTED_MODULE_14__.disableBrowserMagic)(div, cm.options.spellcheck, cm.options.autocorrect, cm.options.autocapitalize)

    function belongsToInput(e) {
      for (let t = e.target; t; t = t.parentNode) {
        if (t == div) return true
        if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break
      }
      return false
    }

    (0,_util_event_js__WEBPACK_IMPORTED_MODULE_12__.on)(div, "paste", e => {
      if (!belongsToInput(e) || (0,_util_event_js__WEBPACK_IMPORTED_MODULE_12__.signalDOMEvent)(cm, e) || (0,_input_js__WEBPACK_IMPORTED_MODULE_14__.handlePaste)(e, cm)) return
      // IE doesn't fire input events, so we schedule a read for the pasted content in this way
      if (_util_browser_js__WEBPACK_IMPORTED_MODULE_10__.ie_version <= 11) setTimeout((0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.operation)(cm, () => this.updateFromDOM()), 20)
    })

    ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_12__.on)(div, "compositionstart", e => {
      this.composing = {data: e.data, done: false}
    })
    ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_12__.on)(div, "compositionupdate", e => {
      if (!this.composing) this.composing = {data: e.data, done: false}
    })
    ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_12__.on)(div, "compositionend", e => {
      if (this.composing) {
        if (e.data != this.composing.data) this.readFromDOMSoon()
        this.composing.done = true
      }
    })

    ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_12__.on)(div, "touchstart", () => input.forceCompositionEnd())

    ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_12__.on)(div, "input", () => {
      if (!this.composing) this.readFromDOMSoon()
    })

    function onCopyCut(e) {
      if (!belongsToInput(e) || (0,_util_event_js__WEBPACK_IMPORTED_MODULE_12__.signalDOMEvent)(cm, e)) return
      if (cm.somethingSelected()) {
        (0,_input_js__WEBPACK_IMPORTED_MODULE_14__.setLastCopied)({lineWise: false, text: cm.getSelections()})
        if (e.type == "cut") cm.replaceSelection("", null, "cut")
      } else if (!cm.options.lineWiseCopyCut) {
        return
      } else {
        let ranges = (0,_input_js__WEBPACK_IMPORTED_MODULE_14__.copyableRanges)(cm)
        ;(0,_input_js__WEBPACK_IMPORTED_MODULE_14__.setLastCopied)({lineWise: true, text: ranges.text})
        if (e.type == "cut") {
          cm.operation(() => {
            cm.setSelections(ranges.ranges, 0, _util_misc_js__WEBPACK_IMPORTED_MODULE_13__.sel_dontScroll)
            cm.replaceSelection("", null, "cut")
          })
        }
      }
      if (e.clipboardData) {
        e.clipboardData.clearData()
        let content = _input_js__WEBPACK_IMPORTED_MODULE_14__.lastCopied.text.join("\n")
        // iOS exposes the clipboard API, but seems to discard content inserted into it
        e.clipboardData.setData("Text", content)
        if (e.clipboardData.getData("Text") == content) {
          e.preventDefault()
          return
        }
      }
      // Old-fashioned briefly-focus-a-textarea hack
      let kludge = (0,_input_js__WEBPACK_IMPORTED_MODULE_14__.hiddenTextarea)(), te = kludge.firstChild
      cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild)
      te.value = _input_js__WEBPACK_IMPORTED_MODULE_14__.lastCopied.text.join("\n")
      let hadFocus = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_11__.activeElt)()
      ;(0,_util_dom_js__WEBPACK_IMPORTED_MODULE_11__.selectInput)(te)
      setTimeout(() => {
        cm.display.lineSpace.removeChild(kludge)
        hadFocus.focus()
        if (hadFocus == div) input.showPrimarySelection()
      }, 50)
    }
    (0,_util_event_js__WEBPACK_IMPORTED_MODULE_12__.on)(div, "copy", onCopyCut)
    ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_12__.on)(div, "cut", onCopyCut)
  }

  screenReaderLabelChanged(label) {
    // Label for screenreaders, accessibility
    if(label) {
      this.div.setAttribute('aria-label', label)
    } else {
      this.div.removeAttribute('aria-label')
    }
  }

  prepareSelection() {
    let result = (0,_display_selection_js__WEBPACK_IMPORTED_MODULE_1__.prepareSelection)(this.cm, false)
    result.focus = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_11__.activeElt)() == this.div
    return result
  }

  showSelection(info, takeFocus) {
    if (!info || !this.cm.display.view.length) return
    if (info.focus || takeFocus) this.showPrimarySelection()
    this.showMultipleSelections(info)
  }

  getSelection() {
    return this.cm.display.wrapper.ownerDocument.getSelection()
  }

  showPrimarySelection() {
    let sel = this.getSelection(), cm = this.cm, prim = cm.doc.sel.primary()
    let from = prim.from(), to = prim.to()

    if (cm.display.viewTo == cm.display.viewFrom || from.line >= cm.display.viewTo || to.line < cm.display.viewFrom) {
      sel.removeAllRanges()
      return
    }

    let curAnchor = domToPos(cm, sel.anchorNode, sel.anchorOffset)
    let curFocus = domToPos(cm, sel.focusNode, sel.focusOffset)
    if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
        (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.cmp)((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.minPos)(curAnchor, curFocus), from) == 0 &&
        (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.cmp)((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.maxPos)(curAnchor, curFocus), to) == 0)
      return

    let view = cm.display.view
    let start = (from.line >= cm.display.viewFrom && posToDOM(cm, from)) ||
        {node: view[0].measure.map[2], offset: 0}
    let end = to.line < cm.display.viewTo && posToDOM(cm, to)
    if (!end) {
      let measure = view[view.length - 1].measure
      let map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map
      end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]}
    }

    if (!start || !end) {
      sel.removeAllRanges()
      return
    }

    let old = sel.rangeCount && sel.getRangeAt(0), rng
    try { rng = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_11__.range)(start.node, start.offset, end.offset, end.node) }
    catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
    if (rng) {
      if (!_util_browser_js__WEBPACK_IMPORTED_MODULE_10__.gecko && cm.state.focused) {
        sel.collapse(start.node, start.offset)
        if (!rng.collapsed) {
          sel.removeAllRanges()
          sel.addRange(rng)
        }
      } else {
        sel.removeAllRanges()
        sel.addRange(rng)
      }
      if (old && sel.anchorNode == null) sel.addRange(old)
      else if (_util_browser_js__WEBPACK_IMPORTED_MODULE_10__.gecko) this.startGracePeriod()
    }
    this.rememberSelection()
  }

  startGracePeriod() {
    clearTimeout(this.gracePeriod)
    this.gracePeriod = setTimeout(() => {
      this.gracePeriod = false
      if (this.selectionChanged())
        this.cm.operation(() => this.cm.curOp.selectionChanged = true)
    }, 20)
  }

  showMultipleSelections(info) {
    (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_11__.removeChildrenAndAdd)(this.cm.display.cursorDiv, info.cursors)
    ;(0,_util_dom_js__WEBPACK_IMPORTED_MODULE_11__.removeChildrenAndAdd)(this.cm.display.selectionDiv, info.selection)
  }

  rememberSelection() {
    let sel = this.getSelection()
    this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset
    this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset
  }

  selectionInEditor() {
    let sel = this.getSelection()
    if (!sel.rangeCount) return false
    let node = sel.getRangeAt(0).commonAncestorContainer
    return (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_11__.contains)(this.div, node)
  }

  focus() {
    if (this.cm.options.readOnly != "nocursor") {
      if (!this.selectionInEditor() || (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_11__.activeElt)() != this.div)
        this.showSelection(this.prepareSelection(), true)
      this.div.focus()
    }
  }
  blur() { this.div.blur() }
  getField() { return this.div }

  supportsTouch() { return true }

  receivedFocus() {
    let input = this
    if (this.selectionInEditor())
      this.pollSelection()
    else
      (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.runInOp)(this.cm, () => input.cm.curOp.selectionChanged = true)

    function poll() {
      if (input.cm.state.focused) {
        input.pollSelection()
        input.polling.set(input.cm.options.pollInterval, poll)
      }
    }
    this.polling.set(this.cm.options.pollInterval, poll)
  }

  selectionChanged() {
    let sel = this.getSelection()
    return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
      sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
  }

  pollSelection() {
    if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) return
    let sel = this.getSelection(), cm = this.cm
    // On Android Chrome (version 56, at least), backspacing into an
    // uneditable block element will put the cursor in that element,
    // and then, because it's not editable, hide the virtual keyboard.
    // Because Android doesn't allow us to actually detect backspace
    // presses in a sane way, this code checks for when that happens
    // and simulates a backspace press in this case.
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_10__.android && _util_browser_js__WEBPACK_IMPORTED_MODULE_10__.chrome && this.cm.display.gutterSpecs.length && isInGutter(sel.anchorNode)) {
      this.cm.triggerOnKeyDown({type: "keydown", keyCode: 8, preventDefault: Math.abs})
      this.blur()
      this.focus()
      return
    }
    if (this.composing) return
    this.rememberSelection()
    let anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset)
    let head = domToPos(cm, sel.focusNode, sel.focusOffset)
    if (anchor && head) (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.runInOp)(cm, () => {
      (0,_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__.setSelection)(cm.doc, (0,_model_selection_js__WEBPACK_IMPORTED_MODULE_7__.simpleSelection)(anchor, head), _util_misc_js__WEBPACK_IMPORTED_MODULE_13__.sel_dontScroll)
      if (anchor.bad || head.bad) cm.curOp.selectionChanged = true
    })
  }

  pollContent() {
    if (this.readDOMTimeout != null) {
      clearTimeout(this.readDOMTimeout)
      this.readDOMTimeout = null
    }

    let cm = this.cm, display = cm.display, sel = cm.doc.sel.primary()
    let from = sel.from(), to = sel.to()
    if (from.ch == 0 && from.line > cm.firstLine())
      from = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(from.line - 1, (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.getLine)(cm.doc, from.line - 1).length)
    if (to.ch == (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.getLine)(cm.doc, to.line).text.length && to.line < cm.lastLine())
      to = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(to.line + 1, 0)
    if (from.line < display.viewFrom || to.line > display.viewTo - 1) return false

    let fromIndex, fromLine, fromNode
    if (from.line == display.viewFrom || (fromIndex = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_5__.findViewIndex)(cm, from.line)) == 0) {
      fromLine = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.lineNo)(display.view[0].line)
      fromNode = display.view[0].node
    } else {
      fromLine = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.lineNo)(display.view[fromIndex].line)
      fromNode = display.view[fromIndex - 1].node.nextSibling
    }
    let toIndex = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_5__.findViewIndex)(cm, to.line)
    let toLine, toNode
    if (toIndex == display.view.length - 1) {
      toLine = display.viewTo - 1
      toNode = display.lineDiv.lastChild
    } else {
      toLine = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.lineNo)(display.view[toIndex + 1].line) - 1
      toNode = display.view[toIndex + 1].node.previousSibling
    }

    if (!fromNode) return false
    let newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine))
    let oldText = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.getBetween)(cm.doc, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(fromLine, 0), (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(toLine, (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.getLine)(cm.doc, toLine).text.length))
    while (newText.length > 1 && oldText.length > 1) {
      if ((0,_util_misc_js__WEBPACK_IMPORTED_MODULE_13__.lst)(newText) == (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_13__.lst)(oldText)) { newText.pop(); oldText.pop(); toLine-- }
      else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++ }
      else break
    }

    let cutFront = 0, cutEnd = 0
    let newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length)
    while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
      ++cutFront
    let newBot = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_13__.lst)(newText), oldBot = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_13__.lst)(oldText)
    let maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
                             oldBot.length - (oldText.length == 1 ? cutFront : 0))
    while (cutEnd < maxCutEnd &&
           newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
      ++cutEnd
    // Try to move start of change to start of selection if ambiguous
    if (newText.length == 1 && oldText.length == 1 && fromLine == from.line) {
      while (cutFront && cutFront > from.ch &&
             newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
        cutFront--
        cutEnd++
      }
    }

    newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "")
    newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "")

    let chFrom = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(fromLine, cutFront)
    let chTo = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(toLine, oldText.length ? (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_13__.lst)(oldText).length - cutEnd : 0)
    if (newText.length > 1 || newText[0] || (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.cmp)(chFrom, chTo)) {
      (0,_model_changes_js__WEBPACK_IMPORTED_MODULE_6__.replaceRange)(cm.doc, newText, chFrom, chTo, "+input")
      return true
    }
  }

  ensurePolled() {
    this.forceCompositionEnd()
  }
  reset() {
    this.forceCompositionEnd()
  }
  forceCompositionEnd() {
    if (!this.composing) return
    clearTimeout(this.readDOMTimeout)
    this.composing = null
    this.updateFromDOM()
    this.div.blur()
    this.div.focus()
  }
  readFromDOMSoon() {
    if (this.readDOMTimeout != null) return
    this.readDOMTimeout = setTimeout(() => {
      this.readDOMTimeout = null
      if (this.composing) {
        if (this.composing.done) this.composing = null
        else return
      }
      this.updateFromDOM()
    }, 80)
  }

  updateFromDOM() {
    if (this.cm.isReadOnly() || !this.pollContent())
      (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.runInOp)(this.cm, () => (0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__.regChange)(this.cm))
  }

  setUneditable(node) {
    node.contentEditable = "false"
  }

  onKeyPress(e) {
    if (e.charCode == 0 || this.composing) return
    e.preventDefault()
    if (!this.cm.isReadOnly())
      (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.operation)(this.cm, _input_js__WEBPACK_IMPORTED_MODULE_14__.applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0)
  }

  readOnlyChanged(val) {
    this.div.contentEditable = String(val != "nocursor")
  }

  onContextMenu() {}
  resetPosition() {}
}

ContentEditableInput.prototype.needsContentAttribute = true

function posToDOM(cm, pos) {
  let view = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_5__.findViewForLine)(cm, pos.line)
  if (!view || view.hidden) return null
  let line = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.getLine)(cm.doc, pos.line)
  let info = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_5__.mapFromLineView)(view, line, pos.line)

  let order = (0,_util_bidi_js__WEBPACK_IMPORTED_MODULE_9__.getOrder)(line, cm.doc.direction), side = "left"
  if (order) {
    let partPos = (0,_util_bidi_js__WEBPACK_IMPORTED_MODULE_9__.getBidiPartAt)(order, pos.ch)
    side = partPos % 2 ? "right" : "left"
  }
  let result = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_5__.nodeAndOffsetInLineMap)(info.map, pos.ch, side)
  result.offset = result.collapse == "right" ? result.end : result.start
  return result
}

function isInGutter(node) {
  for (let scan = node; scan; scan = scan.parentNode)
    if (/CodeMirror-gutter-wrapper/.test(scan.className)) return true
  return false
}

function badPos(pos, bad) { if (bad) pos.bad = true; return pos }

function domTextBetween(cm, from, to, fromLine, toLine) {
  let text = "", closing = false, lineSep = cm.doc.lineSeparator(), extraLinebreak = false
  function recognizeMarker(id) { return marker => marker.id == id }
  function close() {
    if (closing) {
      text += lineSep
      if (extraLinebreak) text += lineSep
      closing = extraLinebreak = false
    }
  }
  function addText(str) {
    if (str) {
      close()
      text += str
    }
  }
  function walk(node) {
    if (node.nodeType == 1) {
      let cmText = node.getAttribute("cm-text")
      if (cmText) {
        addText(cmText)
        return
      }
      let markerID = node.getAttribute("cm-marker"), range
      if (markerID) {
        let found = cm.findMarks((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(fromLine, 0), (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(toLine + 1, 0), recognizeMarker(+markerID))
        if (found.length && (range = found[0].find(0)))
          addText((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.getBetween)(cm.doc, range.from, range.to).join(lineSep))
        return
      }
      if (node.getAttribute("contenteditable") == "false") return
      let isBlock = /^(pre|div|p|li|table|br)$/i.test(node.nodeName)
      if (!/^br$/i.test(node.nodeName) && node.textContent.length == 0) return

      if (isBlock) close()
      for (let i = 0; i < node.childNodes.length; i++)
        walk(node.childNodes[i])

      if (/^(pre|p)$/i.test(node.nodeName)) extraLinebreak = true
      if (isBlock) closing = true
    } else if (node.nodeType == 3) {
      addText(node.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "))
    }
  }
  for (;;) {
    walk(from)
    if (from == to) break
    from = from.nextSibling
    extraLinebreak = false
  }
  return text
}

function domToPos(cm, node, offset) {
  let lineNode
  if (node == cm.display.lineDiv) {
    lineNode = cm.display.lineDiv.childNodes[offset]
    if (!lineNode) return badPos(cm.clipPos((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(cm.display.viewTo - 1)), true)
    node = null; offset = 0
  } else {
    for (lineNode = node;; lineNode = lineNode.parentNode) {
      if (!lineNode || lineNode == cm.display.lineDiv) return null
      if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) break
    }
  }
  for (let i = 0; i < cm.display.view.length; i++) {
    let lineView = cm.display.view[i]
    if (lineView.node == lineNode)
      return locateNodeInLineView(lineView, node, offset)
  }
}

function locateNodeInLineView(lineView, node, offset) {
  let wrapper = lineView.text.firstChild, bad = false
  if (!node || !(0,_util_dom_js__WEBPACK_IMPORTED_MODULE_11__.contains)(wrapper, node)) return badPos((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.lineNo)(lineView.line), 0), true)
  if (node == wrapper) {
    bad = true
    node = wrapper.childNodes[offset]
    offset = 0
    if (!node) {
      let line = lineView.rest ? (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_13__.lst)(lineView.rest) : lineView.line
      return badPos((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)((0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.lineNo)(line), line.text.length), bad)
    }
  }

  let textNode = node.nodeType == 3 ? node : null, topNode = node
  if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
    textNode = node.firstChild
    if (offset) offset = textNode.nodeValue.length
  }
  while (topNode.parentNode != wrapper) topNode = topNode.parentNode
  let measure = lineView.measure, maps = measure.maps

  function find(textNode, topNode, offset) {
    for (let i = -1; i < (maps ? maps.length : 0); i++) {
      let map = i < 0 ? measure.map : maps[i]
      for (let j = 0; j < map.length; j += 3) {
        let curNode = map[j + 2]
        if (curNode == textNode || curNode == topNode) {
          let line = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.lineNo)(i < 0 ? lineView.line : lineView.rest[i])
          let ch = map[j] + offset
          if (offset < 0 || curNode != textNode) ch = map[j + (offset ? 1 : 0)]
          return (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(line, ch)
        }
      }
    }
  }
  let found = find(textNode, topNode, offset)
  if (found) return badPos(found, bad)

  // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
  for (let after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
    found = find(after, after.firstChild, 0)
    if (found)
      return badPos((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(found.line, found.ch - dist), bad)
    else
      dist += after.textContent.length
  }
  for (let before = topNode.previousSibling, dist = offset; before; before = before.previousSibling) {
    found = find(before, before.firstChild, -1)
    if (found)
      return badPos((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_3__.Pos)(found.line, found.ch + dist), bad)
    else
      dist += before.textContent.length
  }
}


/***/ })

}]);