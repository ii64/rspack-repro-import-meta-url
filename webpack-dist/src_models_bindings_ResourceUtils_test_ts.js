"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_bindings_ResourceUtils_test_ts"],{

/***/ "./src/models/bindings/ResourceUtils.test.ts":
/*!***************************************************!*\
  !*** ./src/models/bindings/ResourceUtils.test.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _bindings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bindings.js */ "./src/models/bindings/bindings.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('ResourceUtils', () => {
    const INSPECTED_URL_SCHEME = 'http://';
    const INSPECTED_URL_DOMAIN = 'example.com';
    const OTHER_DOMAIN = 'example.org';
    const INSPECTED_URL_PATH_COMPONENTS = ['', 'foo', 'bar'];
    const INSPECTED_URL_PATH = INSPECTED_URL_PATH_COMPONENTS.join('/');
    const INSPECTED_URL = INSPECTED_URL_SCHEME + INSPECTED_URL_DOMAIN + INSPECTED_URL_PATH;
    const RESOURCE_URL = INSPECTED_URL + '?RESOURCE_URL';
    const RESOURCE = { displayName: 'RESOURCE_DISPLAY_NAME' };
    const UI_SOURCE_CODE_URL = INSPECTED_URL + '?UI_SOURCE_CODE_URL';
    const UI_SOURCE_CODE = { displayName: () => 'UI_SOURCE_CODE_DISPLAY_NAME' };
    const QUERY_STRING = '?QUERY_STRING';
    const OTHER_PATH = '/OTHER/PATH';
    const INVALID_URL = ':~INVALID_URL~:';
    let target;
    beforeEach(() => {
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget });
        target.setInspectedURL(INSPECTED_URL);
        sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel.prototype, 'resourceForURL')
            .returns(null)
            .withArgs(RESOURCE_URL)
            .returns(RESOURCE);
        const workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance();
        sinon.stub(workspace, 'uiSourceCodeForURL')
            .returns(null)
            .withArgs(RESOURCE_URL)
            .returns(UI_SOURCE_CODE)
            .withArgs(UI_SOURCE_CODE_URL)
            .returns(UI_SOURCE_CODE);
    });
    it('returns a resource name if available', async () => {
        assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(RESOURCE_URL), RESOURCE.displayName);
    });
    it('returns a resource name if available', async () => {
        assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(UI_SOURCE_CODE_URL), UI_SOURCE_CODE.displayName());
    });
    it('returns path relative to the last main URL component if it matches and does not have query string', async () => {
        assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INSPECTED_URL + QUERY_STRING), INSPECTED_URL_PATH_COMPONENTS.slice(-1)[0] + QUERY_STRING);
        assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INSPECTED_URL + OTHER_PATH), INSPECTED_URL_PATH_COMPONENTS.slice(-1)[0] + OTHER_PATH);
    });
    it('returns path relative to the main URL domain if it matches and does have query string', async () => {
        target.setInspectedURL(INSPECTED_URL + QUERY_STRING);
        assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INSPECTED_URL + QUERY_STRING), INSPECTED_URL_PATH + QUERY_STRING);
        assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INSPECTED_URL + OTHER_PATH), INSPECTED_URL_PATH + OTHER_PATH);
    });
    it('returns path relative to the main URL domain if only domain matches', async () => {
        assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INSPECTED_URL_SCHEME + INSPECTED_URL_DOMAIN + OTHER_PATH), OTHER_PATH);
    });
    it('returns path relative to the main URL domain if path partially matches', async () => {
        assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INSPECTED_URL_SCHEME + INSPECTED_URL_DOMAIN + '/' + INSPECTED_URL_PATH_COMPONENTS[1] + '/'), '/' + INSPECTED_URL_PATH_COMPONENTS[1] + '/');
    });
    it('returns main URL domain if it matches and the path is empty', async () => {
        assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INSPECTED_URL_SCHEME + INSPECTED_URL_DOMAIN + '/'), INSPECTED_URL_DOMAIN + '/');
    });
    it('strips scheme if domain does not match main URL', async () => {
        assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INSPECTED_URL_SCHEME + OTHER_DOMAIN + OTHER_PATH), OTHER_DOMAIN + OTHER_PATH);
    });
    it('returns URL as is if it cannot be parsed', async () => {
        assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INVALID_URL), INVALID_URL);
    });
});


/***/ })

}]);