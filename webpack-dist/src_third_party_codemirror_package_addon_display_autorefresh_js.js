(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_addon_display_autorefresh_js"],{

/***/ "./src/third_party/codemirror/package/addon/display/autorefresh.js":
/*!*************************************************************************!*\
  !*** ./src/third_party/codemirror/package/addon/display/autorefresh.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(/*! ../../lib/codemirror */ "./src/third_party/codemirror/package/lib/codemirror.js"))
  else {}
})(function(CodeMirror) {
  "use strict"

  CodeMirror.defineOption("autoRefresh", false, function(cm, val) {
    if (cm.state.autoRefresh) {
      stopListening(cm, cm.state.autoRefresh)
      cm.state.autoRefresh = null
    }
    if (val && cm.display.wrapper.offsetHeight == 0)
      startListening(cm, cm.state.autoRefresh = {delay: val.delay || 250})
  })

  function startListening(cm, state) {
    function check() {
      if (cm.display.wrapper.offsetHeight) {
        stopListening(cm, state)
        if (cm.display.lastWrapHeight != cm.display.wrapper.clientHeight)
          cm.refresh()
      } else {
        state.timeout = setTimeout(check, state.delay)
      }
    }
    state.timeout = setTimeout(check, state.delay)
    state.hurry = function() {
      clearTimeout(state.timeout)
      state.timeout = setTimeout(check, 50)
    }
    CodeMirror.on(window, "mouseup", state.hurry)
    CodeMirror.on(window, "keyup", state.hurry)
  }

  function stopListening(_cm, state) {
    clearTimeout(state.timeout)
    CodeMirror.off(window, "mouseup", state.hurry)
    CodeMirror.off(window, "keyup", state.hurry)
  }
});


/***/ })

}]);