"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_PreloadingTreeElement_test_ts"],{

/***/ "./src/panels/application/PreloadingTreeElement.test.ts":
/*!**************************************************************!*\
  !*** ./src/panels/application/PreloadingTreeElement.test.ts ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_3__]);
_application_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('PreloadingTreeElement', () => {
    it('shows view even if initialization happens after selection', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingModel);
        assert.exists(model);
        const spy = sinon.spy();
        const panel = {
            showView: spy,
        };
        const preloadingRuleSetTreeElement = new _application_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingTreeElement.PreloadingRuleSetTreeElement(panel);
        preloadingRuleSetTreeElement.onselect(false);
        assert.isTrue(spy.notCalled);
        preloadingRuleSetTreeElement.initialize(model);
        assert.isTrue(spy.calledOnce);
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);