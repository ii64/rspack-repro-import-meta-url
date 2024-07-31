"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_model_mark_text_js"],{

/***/ "./src/third_party/codemirror/package/src/model/mark_text.js":
/*!*******************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/model/mark_text.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedTextMarker: () => (/* binding */ SharedTextMarker),
/* harmony export */   TextMarker: () => (/* binding */ TextMarker),
/* harmony export */   copySharedMarkers: () => (/* binding */ copySharedMarkers),
/* harmony export */   detachSharedMarkers: () => (/* binding */ detachSharedMarkers),
/* harmony export */   findSharedMarkers: () => (/* binding */ findSharedMarkers),
/* harmony export */   markText: () => (/* binding */ markText)
/* harmony export */ });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./src/third_party/codemirror/package/src/display/operations.js");
/* harmony import */ var _display_view_tracking_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/view_tracking.js */ "./src/third_party/codemirror/package/src/display/view_tracking.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/saw_special_spans.js */ "./src/third_party/codemirror/package/src/line/saw_special_spans.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/spans.js */ "./src/third_party/codemirror/package/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");
/* harmony import */ var _measurement_widgets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../measurement/widgets.js */ "./src/third_party/codemirror/package/src/measurement/widgets.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/operation_group.js */ "./src/third_party/codemirror/package/src/util/operation_group.js");
/* harmony import */ var _document_data_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./document_data.js */ "./src/third_party/codemirror/package/src/model/document_data.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./history.js */ "./src/third_party/codemirror/package/src/model/history.js");
/* harmony import */ var _selection_updates_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./selection_updates.js */ "./src/third_party/codemirror/package/src/model/selection_updates.js");

















// TEXTMARKERS

// Created with markText and setBookmark methods. A TextMarker is a
// handle that can be used to clear or find a marked position in the
// document. Line objects hold arrays (markedSpans) containing
// {from, to, marker} object pointing to such marker objects, and
// indicating that such a marker is present on that line. Multiple
// lines may point to the same marker when it spans across lines.
// The spans will have null for their from/to properties when the
// marker continues beyond the start/end of the line. Markers have
// links back to the lines they currently touch.

// Collapsed markers have unique ids, in order to be able to order
// them, which is needed for uniquely determining an outer marker
// when they overlap (they may nest, but not partially overlap).
let nextMarkerId = 0

class TextMarker {
  constructor(doc, type) {
    this.lines = []
    this.type = type
    this.doc = doc
    this.id = ++nextMarkerId
  }

  // Clear the marker.
  clear() {
    if (this.explicitlyCleared) return
    let cm = this.doc.cm, withOp = cm && !cm.curOp
    if (withOp) (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.startOperation)(cm)
    if ((0,_util_event_js__WEBPACK_IMPORTED_MODULE_9__.hasHandler)(this, "clear")) {
      let found = this.find()
      if (found) (0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_11__.signalLater)(this, "clear", found.from, found.to)
    }
    let min = null, max = null
    for (let i = 0; i < this.lines.length; ++i) {
      let line = this.lines[i]
      let span = (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_4__.getMarkedSpanFor)(line.markedSpans, this)
      if (cm && !this.collapsed) (0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_1__.regLineChange)(cm, (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.lineNo)(line), "text")
      else if (cm) {
        if (span.to != null) max = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.lineNo)(line)
        if (span.from != null) min = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.lineNo)(line)
      }
      line.markedSpans = (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_4__.removeMarkedSpan)(line.markedSpans, span)
      if (span.from == null && this.collapsed && !(0,_line_spans_js__WEBPACK_IMPORTED_MODULE_4__.lineIsHidden)(this.doc, line) && cm)
        (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.updateLineHeight)(line, (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_6__.textHeight)(cm.display))
    }
    if (cm && this.collapsed && !cm.options.lineWrapping) for (let i = 0; i < this.lines.length; ++i) {
      let visual = (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_4__.visualLine)(this.lines[i]), len = (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_4__.lineLength)(visual)
      if (len > cm.display.maxLineLength) {
        cm.display.maxLine = visual
        cm.display.maxLineLength = len
        cm.display.maxLineChanged = true
      }
    }

    if (min != null && cm && this.collapsed) (0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_1__.regChange)(cm, min, max + 1)
    this.lines.length = 0
    this.explicitlyCleared = true
    if (this.atomic && this.doc.cantEdit) {
      this.doc.cantEdit = false
      if (cm) (0,_selection_updates_js__WEBPACK_IMPORTED_MODULE_14__.reCheckSelection)(cm.doc)
    }
    if (cm) (0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_11__.signalLater)(cm, "markerCleared", cm, this, min, max)
    if (withOp) (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.endOperation)(cm)
    if (this.parent) this.parent.clear()
  }

  // Find the position of the marker in the document. Returns a {from,
  // to} object by default. Side can be passed to get a specific side
  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
  // Pos objects returned contain a line object, rather than a line
  // number (used to prevent looking up the same line twice).
  find(side, lineObj) {
    if (side == null && this.type == "bookmark") side = 1
    let from, to
    for (let i = 0; i < this.lines.length; ++i) {
      let line = this.lines[i]
      let span = (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_4__.getMarkedSpanFor)(line.markedSpans, this)
      if (span.from != null) {
        from = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.Pos)(lineObj ? line : (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.lineNo)(line), span.from)
        if (side == -1) return from
      }
      if (span.to != null) {
        to = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.Pos)(lineObj ? line : (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.lineNo)(line), span.to)
        if (side == 1) return to
      }
    }
    return from && {from: from, to: to}
  }

  // Signals that the marker's widget changed, and surrounding layout
  // should be recomputed.
  changed() {
    let pos = this.find(-1, true), widget = this, cm = this.doc.cm
    if (!pos || !cm) return
    ;(0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.runInOp)(cm, () => {
      let line = pos.line, lineN = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.lineNo)(pos.line)
      let view = (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_6__.findViewForLine)(cm, lineN)
      if (view) {
        (0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_6__.clearLineMeasurementCacheFor)(view)
        cm.curOp.selectionChanged = cm.curOp.forceUpdate = true
      }
      cm.curOp.updateMaxLine = true
      if (!(0,_line_spans_js__WEBPACK_IMPORTED_MODULE_4__.lineIsHidden)(widget.doc, line) && widget.height != null) {
        let oldHeight = widget.height
        widget.height = null
        let dHeight = (0,_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_7__.widgetHeight)(widget) - oldHeight
        if (dHeight)
          (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.updateLineHeight)(line, line.height + dHeight)
      }
      (0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_11__.signalLater)(cm, "markerChanged", cm, this)
    })
  }

  attachLine(line) {
    if (!this.lines.length && this.doc.cm) {
      let op = this.doc.cm.curOp
      if (!op.maybeHiddenMarkers || (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_10__.indexOf)(op.maybeHiddenMarkers, this) == -1)
        (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this)
    }
    this.lines.push(line)
  }

  detachLine(line) {
    this.lines.splice((0,_util_misc_js__WEBPACK_IMPORTED_MODULE_10__.indexOf)(this.lines, line), 1)
    if (!this.lines.length && this.doc.cm) {
      let op = this.doc.cm.curOp
      ;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this)
    }
  }
}
(0,_util_event_js__WEBPACK_IMPORTED_MODULE_9__.eventMixin)(TextMarker)

// Create a marker, wire it up to the right lines, and
function markText(doc, from, to, options, type) {
  // Shared markers (across linked documents) are handled separately
  // (markTextShared will call out to this again, once per
  // document).
  if (options && options.shared) return markTextShared(doc, from, to, options, type)
  // Ensure we are in an operation.
  if (doc.cm && !doc.cm.curOp) return (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.operation)(doc.cm, markText)(doc, from, to, options, type)

  let marker = new TextMarker(doc, type), diff = (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.cmp)(from, to)
  if (options) (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_10__.copyObj)(options, marker, false)
  // Don't connect empty markers unless clearWhenEmpty is false
  if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
    return marker
  if (marker.replacedWith) {
    // Showing up as a widget implies collapsed (widget replaces text)
    marker.collapsed = true
    marker.widgetNode = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_8__.eltP)("span", [marker.replacedWith], "CodeMirror-widget")
    if (!options.handleMouseEvents) marker.widgetNode.setAttribute("cm-ignore-events", "true")
    if (options.insertLeft) marker.widgetNode.insertLeft = true
  }
  if (marker.collapsed) {
    if ((0,_line_spans_js__WEBPACK_IMPORTED_MODULE_4__.conflictingCollapsedRange)(doc, from.line, from, to, marker) ||
        from.line != to.line && (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_4__.conflictingCollapsedRange)(doc, to.line, from, to, marker))
      throw new Error("Inserting collapsed marker partially overlapping an existing one")
    ;(0,_line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_3__.seeCollapsedSpans)()
  }

  if (marker.addToHistory)
    (0,_history_js__WEBPACK_IMPORTED_MODULE_13__.addChangeToHistory)(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN)

  let curLine = from.line, cm = doc.cm, updateMaxLine
  doc.iter(curLine, to.line + 1, line => {
    if (cm && marker.collapsed && !cm.options.lineWrapping && (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_4__.visualLine)(line) == cm.display.maxLine)
      updateMaxLine = true
    if (marker.collapsed && curLine != from.line) (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.updateLineHeight)(line, 0)
    ;(0,_line_spans_js__WEBPACK_IMPORTED_MODULE_4__.addMarkedSpan)(line, new _line_spans_js__WEBPACK_IMPORTED_MODULE_4__.MarkedSpan(marker,
                                       curLine == from.line ? from.ch : null,
                                       curLine == to.line ? to.ch : null))
    ++curLine
  })
  // lineIsHidden depends on the presence of the spans, so needs a second pass
  if (marker.collapsed) doc.iter(from.line, to.line + 1, line => {
    if ((0,_line_spans_js__WEBPACK_IMPORTED_MODULE_4__.lineIsHidden)(doc, line)) (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_5__.updateLineHeight)(line, 0)
  })

  if (marker.clearOnEnter) (0,_util_event_js__WEBPACK_IMPORTED_MODULE_9__.on)(marker, "beforeCursorEnter", () => marker.clear())

  if (marker.readOnly) {
    (0,_line_saw_special_spans_js__WEBPACK_IMPORTED_MODULE_3__.seeReadOnlySpans)()
    if (doc.history.done.length || doc.history.undone.length)
      doc.clearHistory()
  }
  if (marker.collapsed) {
    marker.id = ++nextMarkerId
    marker.atomic = true
  }
  if (cm) {
    // Sync editor state
    if (updateMaxLine) cm.curOp.updateMaxLine = true
    if (marker.collapsed)
      (0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_1__.regChange)(cm, from.line, to.line + 1)
    else if (marker.className || marker.startStyle || marker.endStyle || marker.css ||
             marker.attributes || marker.title)
      for (let i = from.line; i <= to.line; i++) (0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_1__.regLineChange)(cm, i, "text")
    if (marker.atomic) (0,_selection_updates_js__WEBPACK_IMPORTED_MODULE_14__.reCheckSelection)(cm.doc)
    ;(0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_11__.signalLater)(cm, "markerAdded", cm, marker)
  }
  return marker
}

// SHARED TEXTMARKERS

// A shared marker spans multiple linked documents. It is
// implemented as a meta-marker-object controlling multiple normal
// markers.
class SharedTextMarker {
  constructor(markers, primary) {
    this.markers = markers
    this.primary = primary
    for (let i = 0; i < markers.length; ++i)
      markers[i].parent = this
  }

  clear() {
    if (this.explicitlyCleared) return
    this.explicitlyCleared = true
    for (let i = 0; i < this.markers.length; ++i)
      this.markers[i].clear()
    ;(0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_11__.signalLater)(this, "clear")
  }

  find(side, lineObj) {
    return this.primary.find(side, lineObj)
  }
}
(0,_util_event_js__WEBPACK_IMPORTED_MODULE_9__.eventMixin)(SharedTextMarker)

function markTextShared(doc, from, to, options, type) {
  options = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_10__.copyObj)(options)
  options.shared = false
  let markers = [markText(doc, from, to, options, type)], primary = markers[0]
  let widget = options.widgetNode
  ;(0,_document_data_js__WEBPACK_IMPORTED_MODULE_12__.linkedDocs)(doc, doc => {
    if (widget) options.widgetNode = widget.cloneNode(true)
    markers.push(markText(doc, (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.clipPos)(doc, from), (0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.clipPos)(doc, to), options, type))
    for (let i = 0; i < doc.linked.length; ++i)
      if (doc.linked[i].isParent) return
    primary = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_10__.lst)(markers)
  })
  return new SharedTextMarker(markers, primary)
}

function findSharedMarkers(doc) {
  return doc.findMarks((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.Pos)(doc.first, 0), doc.clipPos((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.Pos)(doc.lastLine())), m => m.parent)
}

function copySharedMarkers(doc, markers) {
  for (let i = 0; i < markers.length; i++) {
    let marker = markers[i], pos = marker.find()
    let mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to)
    if ((0,_line_pos_js__WEBPACK_IMPORTED_MODULE_2__.cmp)(mFrom, mTo)) {
      let subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type)
      marker.markers.push(subMark)
      subMark.parent = marker
    }
  }
}

function detachSharedMarkers(markers) {
  for (let i = 0; i < markers.length; i++) {
    let marker = markers[i], linked = [marker.primary.doc]
    ;(0,_document_data_js__WEBPACK_IMPORTED_MODULE_12__.linkedDocs)(marker.primary.doc, d => linked.push(d))
    for (let j = 0; j < marker.markers.length; j++) {
      let subMarker = marker.markers[j]
      if ((0,_util_misc_js__WEBPACK_IMPORTED_MODULE_10__.indexOf)(linked, subMarker.doc) == -1) {
        subMarker.parent = null
        marker.markers.splice(j--, 1)
      }
    }
  }
}


/***/ })

}]);