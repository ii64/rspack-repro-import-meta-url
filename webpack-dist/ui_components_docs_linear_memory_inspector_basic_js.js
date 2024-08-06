"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_linear_memory_inspector_basic_js"],{

/***/ "./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js":
/*!******************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=LinearMemoryViewerUtils.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/components.js":
/*!*****************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/components.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearMemoryHighlightChipList: () => (/* reexport module object */ _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   LinearMemoryInspector: () => (/* reexport module object */ _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   LinearMemoryInspectorUtils: () => (/* reexport module object */ _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   LinearMemoryNavigator: () => (/* reexport module object */ _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   LinearMemoryValueInterpreter: () => (/* reexport module object */ _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   LinearMemoryViewer: () => (/* reexport module object */ _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   LinearMemoryViewerUtils: () => (/* reexport module object */ _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   ValueInterpreterDisplay: () => (/* reexport module object */ _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   ValueInterpreterDisplayUtils: () => (/* reexport module object */ _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   ValueInterpreterSettings: () => (/* reexport module object */ _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__)
/* harmony export */ });
/* harmony import */ var _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinearMemoryHighlightChipList.js */ "./panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.js");
/* harmony import */ var _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinearMemoryInspector.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspector.js");
/* harmony import */ var _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinearMemoryInspectorUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.js");
/* harmony import */ var _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinearMemoryNavigator.js */ "./panels/linear_memory_inspector/components/LinearMemoryNavigator.js");
/* harmony import */ var _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinearMemoryValueInterpreter.js */ "./panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.js");
/* harmony import */ var _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryViewer.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewer.js");
/* harmony import */ var _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinearMemoryViewerUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js");
/* harmony import */ var _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ValueInterpreterDisplay.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplay.js");
/* harmony import */ var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.js");
/* harmony import */ var _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ValueInterpreterSettings.js */ "./panels/linear_memory_inspector/components/ValueInterpreterSettings.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./ui/components/docs/linear_memory_inspector/basic.js":
/*!*************************************************************!*\
  !*** ./ui/components/docs/linear_memory_inspector/basic.js ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panels_linear_memory_inspector_components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../panels/linear_memory_inspector/components/components.js */ "./panels/linear_memory_inspector/components/components.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars();
const array = [];
const string = 'Hello this is a string from the memory buffer!';
for (let i = 0; i < string.length; ++i) {
    array.push(string.charCodeAt(i));
}
for (let i = -1000; i < 1000; ++i) {
    array.push(i);
}
const memory = new Uint8Array(array);
const memoryInspector = new _panels_linear_memory_inspector_components_components_js__WEBPACK_IMPORTED_MODULE_0__.LinearMemoryInspector.LinearMemoryInspector();
document.getElementById('container')?.appendChild(memoryInspector);
memoryInspector.data = {
    memory: memory,
    address: 0,
    memoryOffset: 0,
    outerMemoryLength: memory.length,
};
//# sourceMappingURL=basic.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);