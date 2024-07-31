"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_edit_legacy_js"],{

/***/ "./src/third_party/codemirror/package/src/edit/legacy.js":
/*!***************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/edit/legacy.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLegacyProps: () => (/* binding */ addLegacyProps)
/* harmony export */ });
/* harmony import */ var _display_scroll_events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/scroll_events.js */ "./src/third_party/codemirror/package/src/display/scroll_events.js");
/* harmony import */ var _display_scrollbars_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/scrollbars.js */ "./src/third_party/codemirror/package/src/display/scrollbars.js");
/* harmony import */ var _input_keymap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/keymap.js */ "./src/third_party/codemirror/package/src/input/keymap.js");
/* harmony import */ var _input_keynames_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input/keynames.js */ "./src/third_party/codemirror/package/src/input/keynames.js");
/* harmony import */ var _line_line_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../line/line_data.js */ "./src/third_party/codemirror/package/src/line/line_data.js");
/* harmony import */ var _line_pos_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../line/pos.js */ "./src/third_party/codemirror/package/src/line/pos.js");
/* harmony import */ var _model_change_measurement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/change_measurement.js */ "./src/third_party/codemirror/package/src/model/change_measurement.js");
/* harmony import */ var _model_Doc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/Doc.js */ "./src/third_party/codemirror/package/src/model/Doc.js");
/* harmony import */ var _model_line_widget_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/line_widget.js */ "./src/third_party/codemirror/package/src/model/line_widget.js");
/* harmony import */ var _model_mark_text_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/mark_text.js */ "./src/third_party/codemirror/package/src/model/mark_text.js");
/* harmony import */ var _modes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modes.js */ "./src/third_party/codemirror/package/src/modes.js");
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../util/feature_detection.js */ "./src/third_party/codemirror/package/src/util/feature_detection.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _util_StringStream_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../util/StringStream.js */ "./src/third_party/codemirror/package/src/util/StringStream.js");
/* harmony import */ var _commands_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./commands.js */ "./src/third_party/codemirror/package/src/edit/commands.js");



















function addLegacyProps(CodeMirror) {
  CodeMirror.off = _util_event_js__WEBPACK_IMPORTED_MODULE_12__.off
  CodeMirror.on = _util_event_js__WEBPACK_IMPORTED_MODULE_12__.on
  CodeMirror.wheelEventPixels = _display_scroll_events_js__WEBPACK_IMPORTED_MODULE_0__.wheelEventPixels
  CodeMirror.Doc = _model_Doc_js__WEBPACK_IMPORTED_MODULE_7__["default"]
  CodeMirror.splitLines = _util_feature_detection_js__WEBPACK_IMPORTED_MODULE_13__.splitLinesAuto
  CodeMirror.countColumn = _util_misc_js__WEBPACK_IMPORTED_MODULE_14__.countColumn
  CodeMirror.findColumn = _util_misc_js__WEBPACK_IMPORTED_MODULE_14__.findColumn
  CodeMirror.isWordChar = _util_misc_js__WEBPACK_IMPORTED_MODULE_14__.isWordCharBasic
  CodeMirror.Pass = _util_misc_js__WEBPACK_IMPORTED_MODULE_14__.Pass
  CodeMirror.signal = _util_event_js__WEBPACK_IMPORTED_MODULE_12__.signal
  CodeMirror.Line = _line_line_data_js__WEBPACK_IMPORTED_MODULE_4__.Line
  CodeMirror.changeEnd = _model_change_measurement_js__WEBPACK_IMPORTED_MODULE_6__.changeEnd
  CodeMirror.scrollbarModel = _display_scrollbars_js__WEBPACK_IMPORTED_MODULE_1__.scrollbarModel
  CodeMirror.Pos = _line_pos_js__WEBPACK_IMPORTED_MODULE_5__.Pos
  CodeMirror.cmpPos = _line_pos_js__WEBPACK_IMPORTED_MODULE_5__.cmp
  CodeMirror.modes = _modes_js__WEBPACK_IMPORTED_MODULE_10__.modes
  CodeMirror.mimeModes = _modes_js__WEBPACK_IMPORTED_MODULE_10__.mimeModes
  CodeMirror.resolveMode = _modes_js__WEBPACK_IMPORTED_MODULE_10__.resolveMode
  CodeMirror.getMode = _modes_js__WEBPACK_IMPORTED_MODULE_10__.getMode
  CodeMirror.modeExtensions = _modes_js__WEBPACK_IMPORTED_MODULE_10__.modeExtensions
  CodeMirror.extendMode = _modes_js__WEBPACK_IMPORTED_MODULE_10__.extendMode
  CodeMirror.copyState = _modes_js__WEBPACK_IMPORTED_MODULE_10__.copyState
  CodeMirror.startState = _modes_js__WEBPACK_IMPORTED_MODULE_10__.startState
  CodeMirror.innerMode = _modes_js__WEBPACK_IMPORTED_MODULE_10__.innerMode
  CodeMirror.commands = _commands_js__WEBPACK_IMPORTED_MODULE_16__.commands
  CodeMirror.keyMap = _input_keymap_js__WEBPACK_IMPORTED_MODULE_2__.keyMap
  CodeMirror.keyName = _input_keymap_js__WEBPACK_IMPORTED_MODULE_2__.keyName
  CodeMirror.isModifierKey = _input_keymap_js__WEBPACK_IMPORTED_MODULE_2__.isModifierKey
  CodeMirror.lookupKey = _input_keymap_js__WEBPACK_IMPORTED_MODULE_2__.lookupKey
  CodeMirror.normalizeKeyMap = _input_keymap_js__WEBPACK_IMPORTED_MODULE_2__.normalizeKeyMap
  CodeMirror.StringStream = _util_StringStream_js__WEBPACK_IMPORTED_MODULE_15__["default"]
  CodeMirror.SharedTextMarker = _model_mark_text_js__WEBPACK_IMPORTED_MODULE_9__.SharedTextMarker
  CodeMirror.TextMarker = _model_mark_text_js__WEBPACK_IMPORTED_MODULE_9__.TextMarker
  CodeMirror.LineWidget = _model_line_widget_js__WEBPACK_IMPORTED_MODULE_8__.LineWidget
  CodeMirror.e_preventDefault = _util_event_js__WEBPACK_IMPORTED_MODULE_12__.e_preventDefault
  CodeMirror.e_stopPropagation = _util_event_js__WEBPACK_IMPORTED_MODULE_12__.e_stopPropagation
  CodeMirror.e_stop = _util_event_js__WEBPACK_IMPORTED_MODULE_12__.e_stop
  CodeMirror.addClass = _util_dom_js__WEBPACK_IMPORTED_MODULE_11__.addClass
  CodeMirror.contains = _util_dom_js__WEBPACK_IMPORTED_MODULE_11__.contains
  CodeMirror.rmClass = _util_dom_js__WEBPACK_IMPORTED_MODULE_11__.rmClass
  CodeMirror.keyNames = _input_keynames_js__WEBPACK_IMPORTED_MODULE_3__.keyNames
}


/***/ })

}]);