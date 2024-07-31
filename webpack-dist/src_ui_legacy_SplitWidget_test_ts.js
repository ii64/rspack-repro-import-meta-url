"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_SplitWidget_test_ts"],{

/***/ "./src/ui/legacy/SplitWidget.test.ts":
/*!*******************************************!*\
  !*** ./src/ui/legacy/SplitWidget.test.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('SplitWidget', () => {
    describe('toggling', () => {
        it('returns the open state of the sidebar', async () => {
            const widget = new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.SplitWidget.SplitWidget(true, // isVertical
            false);
            widget.showBoth();
            // Sidebar is showing, so toggling it hides it.
            assert.isFalse(widget.toggleSidebar());
            // Now it toggles to make it visible again
            assert.isTrue(widget.toggleSidebar());
        });
    });
});


/***/ })

}]);