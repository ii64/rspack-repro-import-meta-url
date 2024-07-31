"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_issues_manager_CheckFormsIssuesTrigger_test_ts"],{

/***/ "./src/models/issues_manager/CheckFormsIssuesTrigger.test.ts":
/*!*******************************************************************!*\
  !*** ./src/models/issues_manager/CheckFormsIssuesTrigger.test.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('CheckFormsIssuesTrigger', () => {
    it('should call `checkFormsIssues` on devtools open.', async () => {
        const parentTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget });
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel);
        _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.CheckFormsIssuesTrigger.CheckFormsIssuesTrigger.instance();
        const auditsAgent = target.auditsAgent();
        assert.exists(resourceTreeModel);
        const spyCheckFormsIssues = sinon.stub(auditsAgent, 'invoke_checkFormsIssues');
        resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.Load, { resourceTreeModel: resourceTreeModel, loadTime: 123 });
        assert.isTrue(spyCheckFormsIssues.called);
    });
});


/***/ })

}]);