"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_ResourceOriginPlugin_test_js"], {
"./panels/sources/ResourceOriginPlugin.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _sources_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sources.js */ "./panels/sources/sources.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



var ResourceOriginPlugin = _sources_js__WEBPACK_IMPORTED_MODULE_2__.ResourceOriginPlugin.ResourceOriginPlugin;
describe('ResourceOriginPlugin', function() {
    describe('accepts', function() {
        it('holds true for documents', function() {
            var uiSourceCode = sinon.createStubInstance(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
            uiSourceCode.contentType.returns(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document);
            assert.isTrue(ResourceOriginPlugin.accepts(uiSourceCode));
        });
        it('holds true for scripts', function() {
            var uiSourceCode = sinon.createStubInstance(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
            uiSourceCode.contentType.returns(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script);
            assert.isTrue(ResourceOriginPlugin.accepts(uiSourceCode));
        });
        it('holds true for source mapped scripts', function() {
            var uiSourceCode = sinon.createStubInstance(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
            uiSourceCode.contentType.returns(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.SourceMapScript);
            assert.isTrue(ResourceOriginPlugin.accepts(uiSourceCode));
        });
        it('holds true for source mapped style sheets', function() {
            var uiSourceCode = sinon.createStubInstance(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
            uiSourceCode.contentType.returns(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.SourceMapStyleSheet);
            assert.isTrue(ResourceOriginPlugin.accepts(uiSourceCode));
        });
    });
}); //# sourceMappingURL=ResourceOriginPlugin.test.js.map


}),

}]);