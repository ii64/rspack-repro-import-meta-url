"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_ResourceOriginPlugin_test_ts"],{

/***/ "./src/panels/sources/ResourceOriginPlugin.test.ts":
/*!*********************************************************!*\
  !*** ./src/panels/sources/ResourceOriginPlugin.test.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _sources_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sources.js */ "./src/panels/sources/sources.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const { ResourceOriginPlugin } = _sources_js__WEBPACK_IMPORTED_MODULE_2__.ResourceOriginPlugin;
describe('ResourceOriginPlugin', () => {
    describe('accepts', () => {
        it('holds true for documents', () => {
            const uiSourceCode = sinon.createStubInstance(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
            uiSourceCode.contentType.returns(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document);
            assert.isTrue(ResourceOriginPlugin.accepts(uiSourceCode));
        });
        it('holds true for scripts', () => {
            const uiSourceCode = sinon.createStubInstance(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
            uiSourceCode.contentType.returns(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script);
            assert.isTrue(ResourceOriginPlugin.accepts(uiSourceCode));
        });
        it('holds true for source mapped scripts', () => {
            const uiSourceCode = sinon.createStubInstance(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
            uiSourceCode.contentType.returns(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.SourceMapScript);
            assert.isTrue(ResourceOriginPlugin.accepts(uiSourceCode));
        });
        it('holds true for source mapped style sheets', () => {
            const uiSourceCode = sinon.createStubInstance(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
            uiSourceCode.contentType.returns(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.SourceMapStyleSheet);
            assert.isTrue(ResourceOriginPlugin.accepts(uiSourceCode));
        });
    });
});


/***/ })

}]);