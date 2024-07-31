"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_CSSPlugin_test_ts"],{

/***/ "./src/panels/sources/CSSPlugin.test.ts":
/*!**********************************************!*\
  !*** ./src/panels/sources/CSSPlugin.test.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _sources_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sources.js */ "./src/panels/sources/sources.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const { CSSPlugin } = _sources_js__WEBPACK_IMPORTED_MODULE_7__.CSSPlugin;
describe('CSSPlugin', () => {
    describe('accepts', () => {
        it('holds true for documents', () => {
            const uiSourceCode = sinon.createStubInstance(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UISourceCode);
            uiSourceCode.contentType.returns(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document);
            assert.isTrue(CSSPlugin.accepts(uiSourceCode));
        });
        it('holds true for style sheets', () => {
            const uiSourceCode = sinon.createStubInstance(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UISourceCode);
            uiSourceCode.contentType.returns(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Stylesheet);
            assert.isTrue(CSSPlugin.accepts(uiSourceCode));
        });
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('CSSPlugin', () => {
    beforeEach(() => {
        sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ShortcutRegistry.ShortcutRegistry, 'instance').returns({
            shortcutTitleForAction: () => { },
            shortcutsForAction: () => [],
            getShortcutListener: () => { },
        });
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget });
    });
    function findAutocompletion(extensions) {
        if ('value' in extensions && extensions.value.override) {
            return extensions.value.override[0] || null;
        }
        if ('length' in extensions) {
            for (let i = 0; i < extensions.length; ++i) {
                const result = findAutocompletion(extensions[i]);
                if (result) {
                    return result;
                }
            }
        }
        return null;
    }
    it('suggests CSS class names from the stylesheet', async () => {
        const URL = 'http://example.com/styles.css';
        const uiSourceCode = sinon.createStubInstance(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UISourceCode);
        uiSourceCode.url.returns(URL);
        const plugin = new CSSPlugin(uiSourceCode);
        const autocompletion = findAutocompletion(plugin.editorExtension());
        const FROM = 42;
        sinon.stub(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_5__.Tree.prototype, 'resolveInner')
            .returns({ name: 'ClassName', from: FROM });
        const STYLESHEET_ID = 'STYLESHEET_ID';
        sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel.prototype, 'getStyleSheetIdsForURL').withArgs(URL).returns([STYLESHEET_ID]);
        const CLASS_NAMES = ['foo', 'bar', 'baz'];
        sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel.prototype, 'getClassNames').withArgs(STYLESHEET_ID).resolves(CLASS_NAMES);
        const completionResult = await autocompletion({ state: { field: () => { } } });
        assert.deepStrictEqual(completionResult, {
            from: FROM,
            options: [
                { type: 'constant', label: CLASS_NAMES[0] },
                { type: 'constant', label: CLASS_NAMES[1] },
                { type: 'constant', label: CLASS_NAMES[2] },
            ],
        });
    });
});


/***/ })

}]);