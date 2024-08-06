"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_utils_JSPresentationUtils_test_js"], {
"./ui/legacy/components/utils/JSPresentationUtils.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./ui/legacy/components/utils/utils.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('JSPresentationUtils', function() {
    var setUpEnvironment = function setUpEnvironment() {
        var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        var linkifier = new _utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier(100, false);
        linkifier.targetAdded(target);
        var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance();
        var forceNew = true;
        var targetManager = target.targetManager();
        var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ResourceMapping.ResourceMapping(targetManager, workspace);
        var debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: forceNew,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.IgnoreListManager.IgnoreListManager.instance({
            forceNew: forceNew,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
        return {
            target: target,
            linkifier: linkifier
        };
    };
    var checkLinkContentForStackTracePreview = function checkLinkContentForStackTracePreview(url, expectedLinkContent) {
        var _setUpEnvironment = setUpEnvironment(), target = _setUpEnvironment.target, linkifier = _setUpEnvironment.linkifier;
        var callFrame = {
            scriptId: 'scriptId',
            functionName: 'func',
            url: url,
            lineNumber: 0,
            columnNumber: 0
        };
        var stackTrace = {
            callFrames: [
                callFrame
            ]
        };
        var options = {
            tabStops: false,
            stackTrace: stackTrace
        };
        var links = _utils_js__WEBPACK_IMPORTED_MODULE_4__.JSPresentationUtils.buildStackTracePreviewContents(target, linkifier, options).links;
        assert.lengthOf(links, 1);
        assert.strictEqual(links[0].textContent, expectedLinkContent);
    };
    it('uses \'unknown\' as link content if url is not available', function() {
        var url = '';
        var expectedLinkContent = 'unknown';
        checkLinkContentForStackTracePreview(url, expectedLinkContent);
    });
    it('uses url as link content if url is available', function() {
        var url = 'https://www.google.com/script.js';
        var expectedLinkContent = 'www.google.com/script.js:1';
        checkLinkContentForStackTracePreview(url, expectedLinkContent);
    });
}); //# sourceMappingURL=JSPresentationUtils.test.js.map


}),

}]);