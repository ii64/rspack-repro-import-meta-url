"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_model_line_widget_js"],{

/***/ "./src/third_party/codemirror/package/src/model/line_widget.js":
/*!*********************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/model/line_widget.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineWidget: () => (/* binding */ LineWidget),
/* harmony export */   addLineWidget: () => (/* binding */ addLineWidget)
/* harmony export */ });
/* harmony import */ var _display_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/operations.js */ "./src/third_party/codemirror/package/src/display/operations.js");
/* harmony import */ var _display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/scrolling.js */ "./src/third_party/codemirror/package/src/display/scrolling.js");
/* harmony import */ var _display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/view_tracking.js */ "./src/third_party/codemirror/package/src/display/view_tracking.js");
/* harmony import */ var _line_spans_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line/spans.js */ "./src/third_party/codemirror/package/src/line/spans.js");
/* harmony import */ var _line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/utils_line.js */ "./src/third_party/codemirror/package/src/line/utils_line.js");
/* harmony import */ var _measurement_widgets_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../measurement/widgets.js */ "./src/third_party/codemirror/package/src/measurement/widgets.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/operation_group.js */ "./src/third_party/codemirror/package/src/util/operation_group.js");
/* harmony import */ var _changes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./changes.js */ "./src/third_party/codemirror/package/src/model/changes.js");











// Line widgets are block elements displayed above or below a line.

class LineWidget {
  constructor(doc, node, options) {
    if (options) for (let opt in options) if (options.hasOwnProperty(opt))
      this[opt] = options[opt]
    this.doc = doc
    this.node = node
  }

  clear() {
    let cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.lineNo)(line)
    if (no == null || !ws) return
    for (let i = 0; i < ws.length; ++i) if (ws[i] == this) ws.splice(i--, 1)
    if (!ws.length) line.widgets = null
    let height = (0,_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_5__.widgetHeight)(this)
    ;(0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.updateLineHeight)(line, Math.max(0, line.height - height))
    if (cm) {
      (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.runInOp)(cm, () => {
        adjustScrollWhenAboveVisible(cm, line, -height)
        ;(0,_display_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__.regLineChange)(cm, no, "widget")
      })
      ;(0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_7__.signalLater)(cm, "lineWidgetCleared", cm, this, no)
    }
  }

  changed() {
    let oldH = this.height, cm = this.doc.cm, line = this.line
    this.height = null
    let diff = (0,_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_5__.widgetHeight)(this) - oldH
    if (!diff) return
    if (!(0,_line_spans_js__WEBPACK_IMPORTED_MODULE_3__.lineIsHidden)(this.doc, line)) (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.updateLineHeight)(line, line.height + diff)
    if (cm) {
      (0,_display_operations_js__WEBPACK_IMPORTED_MODULE_0__.runInOp)(cm, () => {
        cm.curOp.forceUpdate = true
        adjustScrollWhenAboveVisible(cm, line, diff)
        ;(0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_7__.signalLater)(cm, "lineWidgetChanged", cm, this, (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.lineNo)(line))
      })
    }
  }
}
(0,_util_event_js__WEBPACK_IMPORTED_MODULE_6__.eventMixin)(LineWidget)

function adjustScrollWhenAboveVisible(cm, line, diff) {
  if ((0,_line_spans_js__WEBPACK_IMPORTED_MODULE_3__.heightAtLine)(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
    (0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.addToScrollTop)(cm, diff)
}

function addLineWidget(doc, handle, node, options) {
  let widget = new LineWidget(doc, node, options)
  let cm = doc.cm
  if (cm && widget.noHScroll) cm.display.alignWidgets = true
  ;(0,_changes_js__WEBPACK_IMPORTED_MODULE_8__.changeLine)(doc, handle, "widget", line => {
    let widgets = line.widgets || (line.widgets = [])
    if (widget.insertAt == null) widgets.push(widget)
    else widgets.splice(Math.min(widgets.length, Math.max(0, widget.insertAt)), 0, widget)
    widget.line = line
    if (cm && !(0,_line_spans_js__WEBPACK_IMPORTED_MODULE_3__.lineIsHidden)(doc, line)) {
      let aboveVisible = (0,_line_spans_js__WEBPACK_IMPORTED_MODULE_3__.heightAtLine)(line) < doc.scrollTop
      ;(0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.updateLineHeight)(line, line.height + (0,_measurement_widgets_js__WEBPACK_IMPORTED_MODULE_5__.widgetHeight)(widget))
      if (aboveVisible) (0,_display_scrolling_js__WEBPACK_IMPORTED_MODULE_1__.addToScrollTop)(cm, widget.height)
      cm.curOp.forceUpdate = true
    }
    return true
  })
  if (cm) (0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_7__.signalLater)(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : (0,_line_utils_line_js__WEBPACK_IMPORTED_MODULE_4__.lineNo)(handle))
  return widget
}


/***/ })

}]);