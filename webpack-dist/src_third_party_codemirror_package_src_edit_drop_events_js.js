"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_edit_drop_events_js"],{

/***/ "./src/third_party/codemirror/package/src/edit/drop_events.js":
/*!********************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/edit/drop_events.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearDragCursor: () => (/* binding */ clearDragCursor),
/* harmony export */   onDragOver: () => (/* binding */ onDragOver),
/* harmony export */   onDragStart: () => (/* binding */ onDragStart),
/* harmony export */   onDrop: () => (/* binding */ onDrop)
/* harmony export */ });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./src/third_party/codemirror/package/src/display/operations.js");
/* harmony import */ var _display_selection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/selection.js */ "./src/third_party/codemirror/package/src/display/selection.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _measurement_widgets_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../measurement/widgets.js */ "./src/third_party/codemirror/package/src/measurement/widgets.js");
/* harmony import */ var _model_change_measurement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/change_measurement.js */ "./src/third_party/codemirror/package/src/model/change_measurement.js");
/* harmony import */ var _model_changes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/changes.js */ "./src/third_party/codemirror/package/src/model/changes.js");
/* harmony import */ var _model_selection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/selection.js */ "./src/third_party/codemirror/package/src/model/selection.js");
/* harmony import */ var _model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/selection_updates.js */ "./src/third_party/codemirror/package/src/model/selection_updates.js");
/* harmony import */ var _util_browser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");














// Kludge to work around strange IE behavior where it'll sometimes
// re-fire a series of drag-related events right after the drop (#1551)
let lastDrop = 0

function onDrop(e) {
  let cm = this
  clearDragCursor(cm)
  if ((0,_util_event_js__WEBPACK_IMPORTED_MODULE_11__.signalDOMEvent)(cm, e) || (0,_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_4__.eventInWidget)(cm.display, e))
    return
  ;(0,_util_event_js__WEBPACK_IMPORTED_MODULE_11__.e_preventDefault)(e)
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__.ie) lastDrop = +new Date
  let pos = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.posFromMouse)(cm, e, true), files = e.dataTransfer.files
  if (!pos || cm.isReadOnly()) return
  // Might be a file drop, in which case we simply extract the text
  // and insert it.
  if (files && files.length && window.FileReader && window.File) {
    let n = files.length, text = Array(n), read = 0
    const markAsReadAndPasteIfAllFilesAreRead = () => {
      if (++read == n) {
        (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.operation)(cm, () => {
          pos = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.clipPos)(cm.doc, pos)
          let change = {from: pos, to: pos,
                        text: cm.doc.splitLines(
                            text.filter(t => t != null).join(cm.doc.lineSeparator())),
                        origin: "paste"}
          ;(0,_model_changes_js__WEBPACK_IMPORTED_MODULE_6__.makeChange)(cm.doc, change)
          ;(0,_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__.setSelectionReplaceHistory)(cm.doc, (0,_model_selection_js__WEBPACK_IMPORTED_MODULE_7__.simpleSelection)((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.clipPos)(cm.doc, pos), (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.clipPos)(cm.doc, (0,_model_change_measurement_js__WEBPACK_IMPORTED_MODULE_5__.changeEnd)(change))))
        })()
      }
    }
    const readTextFromFile = (file, i) => {
      if (cm.options.allowDropFileTypes &&
          (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_12__.indexOf)(cm.options.allowDropFileTypes, file.type) == -1) {
        markAsReadAndPasteIfAllFilesAreRead()
        return
      }
      let reader = new FileReader
      reader.onerror = () => markAsReadAndPasteIfAllFilesAreRead()
      reader.onload = () => {
        let content = reader.result
        if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) {
          markAsReadAndPasteIfAllFilesAreRead()
          return
        }
        text[i] = content
        markAsReadAndPasteIfAllFilesAreRead()
      }
      reader.readAsText(file)
    }
    for (let i = 0; i < files.length; i++) readTextFromFile(files[i], i)
  } else { // Normal drop
    // Don't do a replace if the drop happened inside of the selected text.
    if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
      cm.state.draggingText(e)
      // Ensure the editor is re-focused
      setTimeout(() => cm.display.input.focus(), 20)
      return
    }
    try {
      let text = e.dataTransfer.getData("Text")
      if (text) {
        let selected
        if (cm.state.draggingText && !cm.state.draggingText.copy)
          selected = cm.listSelections()
        ;(0,_model_selection_updates_js__WEBPACK_IMPORTED_MODULE_8__.setSelectionNoUndo)(cm.doc, (0,_model_selection_js__WEBPACK_IMPORTED_MODULE_7__.simpleSelection)(pos, pos))
        if (selected) for (let i = 0; i < selected.length; ++i)
          (0,_model_changes_js__WEBPACK_IMPORTED_MODULE_6__.replaceRange)(cm.doc, "", selected[i].anchor, selected[i].head, "drag")
        cm.replaceSelection(text, "around", "paste")
        cm.display.input.focus()
      }
    }
    catch(e){}
  }
}

function onDragStart(cm, e) {
  if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__.ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { (0,_util_event_js__WEBPACK_IMPORTED_MODULE_11__.e_stop)(e); return }
  if ((0,_util_event_js__WEBPACK_IMPORTED_MODULE_11__.signalDOMEvent)(cm, e) || (0,_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_4__.eventInWidget)(cm.display, e)) return

  e.dataTransfer.setData("Text", cm.getSelection())
  e.dataTransfer.effectAllowed = "copyMove"

  // Use dummy image instead of default browsers image.
  // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
  if (e.dataTransfer.setDragImage && !_util_browser_js__WEBPACK_IMPORTED_MODULE_9__.safari) {
    let img = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_10__.elt)("img", null, null, "position: fixed; left: 0; top: 0;")
    img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__.presto) {
      img.width = img.height = 1
      cm.display.wrapper.appendChild(img)
      // Force a relayout, or Opera won't use our image for some obscure reason
      img._top = img.offsetTop
    }
    e.dataTransfer.setDragImage(img, 0, 0)
    if (_util_browser_js__WEBPACK_IMPORTED_MODULE_9__.presto) img.parentNode.removeChild(img)
  }
}

function onDragOver(cm, e) {
  let pos = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_3__.posFromMouse)(cm, e)
  if (!pos) return
  let frag = document.createDocumentFragment()
  ;(0,_display_selection_js__WEBPACK_IMPORTED_MODULE_1__.drawSelectionCursor)(cm, pos, frag)
  if (!cm.display.dragCursor) {
    cm.display.dragCursor = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_10__.elt)("div", null, "CodeMirror-cursors CodeMirror-dragcursors")
    cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv)
  }
  (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_10__.removeChildrenAndAdd)(cm.display.dragCursor, frag)
}

function clearDragCursor(cm) {
  if (cm.display.dragCursor) {
    cm.display.lineSpace.removeChild(cm.display.dragCursor)
    cm.display.dragCursor = null
  }
}


/***/ })

}]);