"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_linear_memory_inspector_LinearMemoryInspectorPane_test_js"],{

/***/ "./panels/linear_memory_inspector/LinearMemoryInspectorPane.test.js":
/*!**************************************************************************!*\
  !*** ./panels/linear_memory_inspector/LinearMemoryInspectorPane.test.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _linear_memory_inspector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear_memory_inspector.js */ "./panels/linear_memory_inspector/linear_memory_inspector.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function createArray() {
    const array = [];
    for (let i = 0; i < 100; ++i) {
        array.push(i);
    }
    return new Uint8Array(array);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('LinearMemoryInspectorPane', () => {
    class Uint8Wrapper {
        array;
        constructor(array) {
            this.array = array;
        }
        getRange(start, end) {
            return Promise.resolve(this.array.slice(start, end));
        }
        length() {
            return this.array.length;
        }
    }
    it('can be created', () => {
        const instance = _linear_memory_inspector_js__WEBPACK_IMPORTED_MODULE_1__.LinearMemoryInspectorPane.LinearMemoryInspectorPane.instance();
        const arrayWrapper = new Uint8Wrapper(createArray());
        const scriptId = 'script-id';
        const title = 'Test Title';
        instance.create(scriptId, title, arrayWrapper, 10);
        const tabbedPane = instance.contentElement.querySelector('.tabbed-pane');
        assert.exists(tabbedPane);
        const inspector = tabbedPane.querySelector('devtools-linear-memory-inspector-inspector');
        assert.notInstanceOf(inspector, HTMLSpanElement);
    });
});
//# sourceMappingURL=LinearMemoryInspectorPane.test.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/linear_memory_inspector.js":
/*!*******************************************************************!*\
  !*** ./panels/linear_memory_inspector/linear_memory_inspector.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearMemoryInspectorController: () => (/* reexport module object */ _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   LinearMemoryInspectorPane: () => (/* reexport module object */ _LinearMemoryInspectorPane_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinearMemoryInspectorController.js */ "./panels/linear_memory_inspector/LinearMemoryInspectorController.js");
/* harmony import */ var _LinearMemoryInspectorPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinearMemoryInspectorPane.js */ "./panels/linear_memory_inspector/LinearMemoryInspectorPane.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



//# sourceMappingURL=linear_memory_inspector.js.map

/***/ })

}]);