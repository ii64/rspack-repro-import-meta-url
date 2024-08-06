"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_css_overview_css_overview_js"],{

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

/***/ }),

/***/ "./panels/css_overview/css_overview.js":
/*!*********************************************!*\
  !*** ./panels/css_overview/css_overview.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewCompletedView: () => (/* reexport module object */ _CSSOverviewCompletedView_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   CSSOverviewController: () => (/* reexport module object */ _CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   CSSOverviewModel: () => (/* reexport module object */ _CSSOverviewModel_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   CSSOverviewPanel: () => (/* reexport module object */ _CSSOverviewPanel_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   CSSOverviewProcessingView: () => (/* reexport module object */ _CSSOverviewProcessingView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   CSSOverviewSidebarPanel: () => (/* reexport module object */ _CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   CSSOverviewUnusedDeclarations: () => (/* reexport module object */ _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSOverviewController.js */ "./panels/css_overview/CSSOverviewController.js");
/* harmony import */ var _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSOverviewUnusedDeclarations.js */ "./panels/css_overview/CSSOverviewUnusedDeclarations.js");
/* harmony import */ var _CSSOverviewModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSSOverviewModel.js */ "./panels/css_overview/CSSOverviewModel.js");
/* harmony import */ var _CSSOverviewProcessingView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSOverviewProcessingView.js */ "./panels/css_overview/CSSOverviewProcessingView.js");
/* harmony import */ var _CSSOverviewCompletedView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSOverviewCompletedView.js */ "./panels/css_overview/CSSOverviewCompletedView.js");
/* harmony import */ var _CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSSOverviewSidebarPanel.js */ "./panels/css_overview/CSSOverviewSidebarPanel.js");
/* harmony import */ var _CSSOverviewPanel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSOverviewPanel.js */ "./panels/css_overview/CSSOverviewPanel.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.















//# sourceMappingURL=css_overview.js.map

/***/ })

}]);