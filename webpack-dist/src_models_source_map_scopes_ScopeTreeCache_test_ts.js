"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_source_map_scopes_ScopeTreeCache_test_ts"],{

/***/ "./src/models/source_map_scopes/ScopeTreeCache.test.ts":
/*!*************************************************************!*\
  !*** ./src/models/source_map_scopes/ScopeTreeCache.test.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formatter/formatter.js */ "./src/models/formatter/formatter.ts");
/* harmony import */ var _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../source_map_scopes/source_map_scopes.js */ "./src/models/source_map_scopes/source_map_scopes.ts");
/* harmony import */ var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





describe('ScopeTreeCache', () => {
    describe('scopeTreeForScript', () => {
        const { scopeTreeForScript } = _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_3__.ScopeTreeCache;
        let javaScriptScopeTreeStub;
        let script;
        beforeEach(() => {
            javaScriptScopeTreeStub = sinon.stub(_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_2__.FormatterWorkerPool.formatterWorkerPool(), 'javaScriptScopeTree');
            script = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Script.Script, { requestContentData: Promise.resolve(new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentData.ContentData('', false, 'text/javascript')) });
        });
        it('requests the scope tree once for a script', async () => {
            const scopeTree = { start: 0, end: 20, variables: [], children: [] };
            javaScriptScopeTreeStub.returns(Promise.resolve(scopeTree));
            const actualScopeTree1 = await scopeTreeForScript(script);
            const actualScopeTree2 = await scopeTreeForScript(script);
            assert.isTrue(javaScriptScopeTreeStub.calledOnce);
            assert.strictEqual(actualScopeTree1, scopeTree);
            assert.strictEqual(actualScopeTree2, scopeTree);
        });
        it('requests the scope tree once for a script that fails to parse', async () => {
            javaScriptScopeTreeStub.returns(null);
            const actualScopeTree1 = await scopeTreeForScript(script);
            const actualScopeTree2 = await scopeTreeForScript(script);
            assert.isTrue(javaScriptScopeTreeStub.calledOnce);
            assert.isNull(actualScopeTree1);
            assert.isNull(actualScopeTree2);
        });
        it('requests the scope tree once for a script, even if the first request is not done yet', async () => {
            const scopeTree = { start: 0, end: 20, variables: [], children: [] };
            const { promise: scopeTreePromise, resolve: scopeTreeResolve } = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.PromiseUtilities.promiseWithResolvers();
            javaScriptScopeTreeStub.returns(scopeTreePromise);
            const scopeTreePromise1 = scopeTreeForScript(script);
            const scopeTreePromise2 = scopeTreeForScript(script);
            scopeTreeResolve(scopeTree);
            const [actualScopeTree1, actualScopeTree2] = await Promise.all([scopeTreePromise1, scopeTreePromise2]);
            assert.isTrue(javaScriptScopeTreeStub.calledOnce);
            assert.strictEqual(actualScopeTree1, scopeTree);
            assert.strictEqual(actualScopeTree2, scopeTree);
        });
    });
});


/***/ })

}]);