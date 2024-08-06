"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_snippets_ScriptSnippetFileSystem_test_js"],{

/***/ "./panels/snippets/ScriptSnippetFileSystem.test.js":
/*!*********************************************************!*\
  !*** ./panels/snippets/ScriptSnippetFileSystem.test.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_MockExecutionContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockExecutionContext.js */ "./testing/MockExecutionContext.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _snippets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./snippets.js */ "./panels/snippets/snippets.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('ScriptSnippetFileSystem', () => {
    it('evaluates snippets with user gesture', async () => {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.ExecutionContext, new _testing_MockExecutionContext_js__WEBPACK_IMPORTED_MODULE_5__.MockExecutionContext((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)()));
        const uiSourceCode = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UISourceCode({}, 'snippet://test.js', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script);
        await _snippets_js__WEBPACK_IMPORTED_MODULE_7__.ScriptSnippetFileSystem.evaluateScriptSnippet(uiSourceCode);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.ExecutionContext, null);
    });
});
//# sourceMappingURL=ScriptSnippetFileSystem.test.js.map

/***/ }),

/***/ "./testing/MockExecutionContext.js":
/*!*****************************************!*\
  !*** ./testing/MockExecutionContext.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockExecutionContext: () => (/* binding */ MockExecutionContext)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class MockExecutionContext extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.ExecutionContext {
    constructor(target) {
        const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNotNullOrUndefined)(runtimeModel);
        super(runtimeModel, 1, 'test id', 'test name', 'test origin', true);
    }
    async evaluate(options, userGesture, _awaitPromise) {
        assert.isTrue(userGesture);
        return { error: 'test' };
    }
}
//# sourceMappingURL=MockExecutionContext.js.map

/***/ })

}]);