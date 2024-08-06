"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_css_overview_CSSOverviewController_js"],{

/***/ "./panels/css_overview/CSSOverviewController.js":
/*!******************************************************!*\
  !*** ./panels/css_overview/CSSOverviewController.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewController: () => (/* binding */ OverviewController)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class OverviewController extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    currentUrl;
    constructor() {
        super();
        this.currentUrl = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addEventListener("InspectedURLChanged" /* SDK.TargetManager.Events.InspectedURLChanged */, this.#checkUrlAndResetIfChanged, this);
    }
    #checkUrlAndResetIfChanged() {
        if (this.currentUrl === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL()) {
            return;
        }
        this.currentUrl = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL();
        this.dispatchEventToListeners("Reset" /* Events.Reset */);
    }
}
//# sourceMappingURL=CSSOverviewController.js.map

/***/ })

}]);