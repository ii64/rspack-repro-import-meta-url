"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_FilteredUISourceCodeListProvider_test_js"], {
"./panels/sources/FilteredUISourceCodeListProvider.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/OverridesHelpers.js */ "./testing/OverridesHelpers.js");
/* harmony import */var _sources_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sources.js */ "./panels/sources/sources.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







var setUpEnvironmentWithUISourceCode = function(url, resourceType, project) {
    var _setUpEnvironment = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)(), workspace = _setUpEnvironment.workspace, debuggerWorkspaceBinding = _setUpEnvironment.debuggerWorkspaceBinding;
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance({
        forceNew: false,
        debuggerWorkspaceBinding: debuggerWorkspaceBinding
    });
    if (!project) {
        project = {
            id: function() {
                return url;
            },
            type: function() {
                return _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.projectTypes.Network;
            }
        };
    }
    var uiSourceCode = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.UISourceCode.UISourceCode(project, url, resourceType);
    project.uiSourceCodes = function() {
        return [
            uiSourceCode
        ];
    };
    workspace.addProject(project);
    return {
        workspace: workspace,
        project: project,
        uiSourceCode: uiSourceCode
    };
};
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.describeWithEnvironment)('FilteredUISourceCodeListProvider', function() {
    before(function() {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.register("just-my-code" /* Root.Runtime.ExperimentName.JUST_MY_CODE */ , '');
    });
    it('should exclude Fetch requests in the result', function() {
        var url = 'http://www.example.com/list-fetch.json';
        var resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Fetch;
        var _setUpEnvironmentWithUISourceCode = setUpEnvironmentWithUISourceCode(url, resourceType), workspace = _setUpEnvironmentWithUISourceCode.workspace, project = _setUpEnvironmentWithUISourceCode.project;
        var filteredUISourceCodeListProvider = new _sources_js__WEBPACK_IMPORTED_MODULE_6__.FilteredUISourceCodeListProvider.FilteredUISourceCodeListProvider('test');
        filteredUISourceCodeListProvider.attach();
        var result = filteredUISourceCodeListProvider.itemCount();
        workspace.removeProject(project);
        assert.strictEqual(result, 0);
    });
    it('should exclude XHR requests in the result', function() {
        var url = 'http://www.example.com/list-xhr.json';
        var resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.XHR;
        var _setUpEnvironmentWithUISourceCode = setUpEnvironmentWithUISourceCode(url, resourceType), workspace = _setUpEnvironmentWithUISourceCode.workspace, project = _setUpEnvironmentWithUISourceCode.project;
        var filteredUISourceCodeListProvider = new _sources_js__WEBPACK_IMPORTED_MODULE_6__.FilteredUISourceCodeListProvider.FilteredUISourceCodeListProvider('test');
        filteredUISourceCodeListProvider.attach();
        var result = filteredUISourceCodeListProvider.itemCount();
        workspace.removeProject(project);
        assert.strictEqual(result, 0);
    });
    it('should include Document requests in the result', function() {
        var url = 'http://www.example.com/index.html';
        var resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document;
        var _setUpEnvironmentWithUISourceCode = setUpEnvironmentWithUISourceCode(url, resourceType), workspace = _setUpEnvironmentWithUISourceCode.workspace, project = _setUpEnvironmentWithUISourceCode.project;
        var filteredUISourceCodeListProvider = new _sources_js__WEBPACK_IMPORTED_MODULE_6__.FilteredUISourceCodeListProvider.FilteredUISourceCodeListProvider('test');
        filteredUISourceCodeListProvider.attach();
        var resultUrl = filteredUISourceCodeListProvider.itemKeyAt(0);
        var resultCount = filteredUISourceCodeListProvider.itemCount();
        workspace.removeProject(project);
        assert.strictEqual(resultUrl, url);
        assert.strictEqual(resultCount, 1);
    });
    it('should exclude ignored script requests in the result', function() {
        var url = 'http://www.example.com/some-script.js';
        var resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script;
        var _setUpEnvironmentWithUISourceCode = setUpEnvironmentWithUISourceCode(url, resourceType), workspace = _setUpEnvironmentWithUISourceCode.workspace, project = _setUpEnvironmentWithUISourceCode.project, uiSourceCode = _setUpEnvironmentWithUISourceCode.uiSourceCode;
        // ignore the uiSourceCode
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.setEnabled("just-my-code" /* Root.Runtime.ExperimentName.JUST_MY_CODE */ , true);
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance().ignoreListUISourceCode(uiSourceCode);
        var filteredUISourceCodeListProvider = new _sources_js__WEBPACK_IMPORTED_MODULE_6__.FilteredUISourceCodeListProvider.FilteredUISourceCodeListProvider('test');
        filteredUISourceCodeListProvider.attach();
        var result = filteredUISourceCodeListProvider.itemCount();
        workspace.removeProject(project);
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.setEnabled("just-my-code" /* Root.Runtime.ExperimentName.JUST_MY_CODE */ , false);
        assert.strictEqual(result, 0);
    });
    it('should include Image requests in the result', function() {
        var url = 'http://www.example.com/img.png';
        var resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Image;
        var _setUpEnvironmentWithUISourceCode = setUpEnvironmentWithUISourceCode(url, resourceType), workspace = _setUpEnvironmentWithUISourceCode.workspace, project = _setUpEnvironmentWithUISourceCode.project;
        var filteredUISourceCodeListProvider = new _sources_js__WEBPACK_IMPORTED_MODULE_6__.FilteredUISourceCodeListProvider.FilteredUISourceCodeListProvider('test');
        filteredUISourceCodeListProvider.attach();
        var resultUrl = filteredUISourceCodeListProvider.itemKeyAt(0);
        var resultCount = filteredUISourceCodeListProvider.itemCount();
        workspace.removeProject(project);
        assert.strictEqual(resultCount, 1);
        assert.strictEqual(resultUrl, url);
    });
    it('should include Script requests in the result', function() {
        var url = 'http://www.example.com/some-script.js';
        var resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script;
        var _setUpEnvironmentWithUISourceCode = setUpEnvironmentWithUISourceCode(url, resourceType), workspace = _setUpEnvironmentWithUISourceCode.workspace, project = _setUpEnvironmentWithUISourceCode.project;
        var filteredUISourceCodeListProvider = new _sources_js__WEBPACK_IMPORTED_MODULE_6__.FilteredUISourceCodeListProvider.FilteredUISourceCodeListProvider('test');
        filteredUISourceCodeListProvider.attach();
        var resultUrl = filteredUISourceCodeListProvider.itemKeyAt(0);
        var resultCount = filteredUISourceCodeListProvider.itemCount();
        workspace.removeProject(project);
        assert.strictEqual(resultCount, 1);
        assert.strictEqual(resultUrl, url);
    });
}); //# sourceMappingURL=FilteredUISourceCodeListProvider.test.js.map


}),

}]);