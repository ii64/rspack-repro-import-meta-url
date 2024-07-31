"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_css_overview_CSSOverviewPanel_test_ts"],{

/***/ "./src/panels/css_overview/CSSOverviewPanel.test.ts":
/*!**********************************************************!*\
  !*** ./src/panels/css_overview/CSSOverviewPanel.test.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _css_overview_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css_overview.js */ "./src/panels/css_overview/css_overview.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('CSSOverviewPanel', () => {
    let target;
    beforeEach(async () => {
        const tabTaget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTaget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTaget });
    });
    it('reacts to start event and sends completion event', async () => {
        const controller = new _css_overview_js__WEBPACK_IMPORTED_MODULE_3__.CSSOverviewController.OverviewController();
        new _css_overview_js__WEBPACK_IMPORTED_MODULE_3__.CSSOverviewPanel.CSSOverviewPanel(controller);
        const overviewCompleted = controller.once(_css_overview_js__WEBPACK_IMPORTED_MODULE_3__.CSSOverviewController.Events.OverviewCompleted);
        sinon.stub(target.runtimeAgent(), 'invoke_evaluate').resolves({
            result: {},
        });
        sinon.stub(target.domsnapshotAgent(), 'invoke_captureSnapshot').resolves({
            documents: [],
        });
        sinon.stub(target.cssAgent(), 'invoke_getMediaQueries').resolves({
            medias: [],
        });
        controller.dispatchEventToListeners(_css_overview_js__WEBPACK_IMPORTED_MODULE_3__.CSSOverviewController.Events.RequestOverviewStart);
        await overviewCompleted;
    });
});


/***/ }),

/***/ "./src/panels/css_overview/css_overview.ts":
/*!*************************************************!*\
  !*** ./src/panels/css_overview/css_overview.ts ***!
  \*************************************************/
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
/* harmony import */ var _CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSOverviewController.js */ "./src/panels/css_overview/CSSOverviewController.ts");
/* harmony import */ var _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSOverviewUnusedDeclarations.js */ "./src/panels/css_overview/CSSOverviewUnusedDeclarations.ts");
/* harmony import */ var _CSSOverviewModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSSOverviewModel.js */ "./src/panels/css_overview/CSSOverviewModel.ts");
/* harmony import */ var _CSSOverviewProcessingView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSOverviewProcessingView.js */ "./src/panels/css_overview/CSSOverviewProcessingView.ts");
/* harmony import */ var _CSSOverviewCompletedView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSOverviewCompletedView.js */ "./src/panels/css_overview/CSSOverviewCompletedView.ts");
/* harmony import */ var _CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSSOverviewSidebarPanel.js */ "./src/panels/css_overview/CSSOverviewSidebarPanel.ts");
/* harmony import */ var _CSSOverviewPanel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSOverviewPanel.js */ "./src/panels/css_overview/CSSOverviewPanel.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

















/***/ })

}]);