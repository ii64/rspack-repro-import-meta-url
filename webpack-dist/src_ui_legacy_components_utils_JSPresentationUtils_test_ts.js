"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_utils_JSPresentationUtils_test_ts"],{

/***/ "./src/ui/legacy/components/utils/JSPresentationUtils.test.ts":
/*!********************************************************************!*\
  !*** ./src/ui/legacy/components/utils/JSPresentationUtils.test.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./src/ui/legacy/components/utils/utils.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('JSPresentationUtils', () => {
    function setUpEnvironment() {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        const linkifier = new _utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier(100, false);
        linkifier.targetAdded(target);
        const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance();
        const forceNew = true;
        const targetManager = target.targetManager();
        const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ResourceMapping.ResourceMapping(targetManager, workspace);
        const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew,
            resourceMapping,
            targetManager,
        });
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.IgnoreListManager.IgnoreListManager.instance({ forceNew, debuggerWorkspaceBinding });
        return { target, linkifier };
    }
    function checkLinkContentForStackTracePreview(url, expectedLinkContent) {
        const { target, linkifier } = setUpEnvironment();
        const callFrame = { scriptId: 'scriptId', functionName: 'func', url, lineNumber: 0, columnNumber: 0 };
        const stackTrace = { callFrames: [callFrame] };
        const options = { tabStops: false, stackTrace };
        const { links } = _utils_js__WEBPACK_IMPORTED_MODULE_4__.JSPresentationUtils.buildStackTracePreviewContents(target, linkifier, options);
        assert.lengthOf(links, 1);
        assert.strictEqual(links[0].textContent, expectedLinkContent);
    }
    it('uses \'unknown\' as link content if url is not available', () => {
        const url = '';
        const expectedLinkContent = 'unknown';
        checkLinkContentForStackTracePreview(url, expectedLinkContent);
    });
    it('uses url as link content if url is available', () => {
        const url = 'https://www.google.com/script.js';
        const expectedLinkContent = 'www.google.com/script.js:1';
        checkLinkContentForStackTracePreview(url, expectedLinkContent);
    });
});


/***/ })

}]);