"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_edit_fromTextArea_js"],{

/***/ "./src/third_party/codemirror/package/src/edit/fromTextArea.js":
/*!*********************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/edit/fromTextArea.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromTextArea: () => (/* binding */ fromTextArea)
/* harmony export */ });
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _util_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/event.js */ "./src/third_party/codemirror/package/src/util/event.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _CodeMirror_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CodeMirror.js */ "./src/third_party/codemirror/package/src/edit/CodeMirror.js");






function fromTextArea(textarea, options) {
  options = options ? (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_2__.copyObj)(options) : {}
  options.value = textarea.value
  if (!options.tabindex && textarea.tabIndex)
    options.tabindex = textarea.tabIndex
  if (!options.placeholder && textarea.placeholder)
    options.placeholder = textarea.placeholder
  // Set autofocus to true if this textarea is focused, or if it has
  // autofocus and no other element is focused.
  if (options.autofocus == null) {
    let hasFocus = (0,_util_dom_js__WEBPACK_IMPORTED_MODULE_0__.activeElt)()
    options.autofocus = hasFocus == textarea ||
      textarea.getAttribute("autofocus") != null && hasFocus == document.body
  }

  function save() {textarea.value = cm.getValue()}

  let realSubmit
  if (textarea.form) {
    (0,_util_event_js__WEBPACK_IMPORTED_MODULE_1__.on)(textarea.form, "submit", save)
    // Deplorable hack to make the submit method do the right thing.
    if (!options.leaveSubmitMethodAlone) {
      let form = textarea.form
      realSubmit = form.submit
      try {
        let wrappedSubmit = form.submit = () => {
          save()
          form.submit = realSubmit
          form.submit()
          form.submit = wrappedSubmit
        }
      } catch(e) {}
    }
  }

  options.finishInit = cm => {
    cm.save = save
    cm.getTextArea = () => textarea
    cm.toTextArea = () => {
      cm.toTextArea = isNaN // Prevent this from being ran twice
      save()
      textarea.parentNode.removeChild(cm.getWrapperElement())
      textarea.style.display = ""
      if (textarea.form) {
        (0,_util_event_js__WEBPACK_IMPORTED_MODULE_1__.off)(textarea.form, "submit", save)
        if (!options.leaveSubmitMethodAlone && typeof textarea.form.submit == "function")
          textarea.form.submit = realSubmit
      }
    }
  }

  textarea.style.display = "none"
  let cm = (0,_CodeMirror_js__WEBPACK_IMPORTED_MODULE_3__.CodeMirror)(node => textarea.parentNode.insertBefore(node, textarea.nextSibling),
    options)
  return cm
}


/***/ })

}]);