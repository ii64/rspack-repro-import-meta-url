"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_models_SchemaUtils_test_ts"],{

/***/ "./src/panels/recorder/models/SchemaUtils.test.ts":
/*!********************************************************!*\
  !*** ./src/panels/recorder/models/SchemaUtils.test.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models.js */ "./src/panels/recorder/models/models.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('SchemaUtils', () => {
    it('should compare step selectors', () => {
        const { areSelectorsEqual } = _models_js__WEBPACK_IMPORTED_MODULE_0__.SchemaUtils;
        assert.isTrue(areSelectorsEqual({ type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll }, { type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll }));
        assert.isFalse(areSelectorsEqual({ type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll, selectors: [['#id']] }, { type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll }));
        assert.isTrue(areSelectorsEqual({ type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll, selectors: [['#id']] }, { type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll, selectors: [['#id']] }));
        assert.isFalse(areSelectorsEqual({ type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll, selectors: [['#id', '#id2']] }, { type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll, selectors: [['#id']] }));
    });
});


/***/ })

}]);