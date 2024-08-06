"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_persistence_NetworkPersistenceManager_test_js"],{

/***/ "./models/persistence/NetworkPersistenceManager.test.js":
/*!**************************************************************!*\
  !*** ./models/persistence/NetworkPersistenceManager.test.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/OverridesHelpers.js */ "./testing/OverridesHelpers.js");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */ var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */ var _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










const setUpEnvironmentWithUISourceCode = (url, resourceType, project) => {
    const { workspace, networkPersistenceManager } = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)();
    if (!project) {
        project = { id: () => url, type: () => _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.projectTypes.Network };
    }
    const uiSourceCode = new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.UISourceCode.UISourceCode(project, url, resourceType);
    project.uiSourceCodes = () => [uiSourceCode];
    workspace.addProject(project);
    return { workspace, project: project, uiSourceCode, networkPersistenceManager };
};
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('NetworkPersistenceManager', () => {
    beforeEach(async () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.dispose();
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
        sinon.stub(target.fetchAgent(), 'invoke_enable');
    });
    it('can create an overridden file with Local Overrides enabled', async () => {
        const url = 'http://www.example.com/list-fetch.json';
        const resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document;
        const { uiSourceCode } = setUpEnvironmentWithUISourceCode(url, resourceType);
        const networkPersistenceManager = await (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createWorkspaceProject)('file:///path/to/overrides', []);
        const saveSpy = sinon.spy(networkPersistenceManager, 'saveUISourceCodeForOverrides');
        const actual = await networkPersistenceManager.setupAndStartLocalOverrides(uiSourceCode);
        saveSpy.restore();
        assert.isTrue(saveSpy.calledOnce, 'should override content once');
        assert.isTrue(actual, 'should complete override successfully');
    });
    it('can create an overridden file with Local Overrides folder set up but disabled', async () => {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(false);
        const url = 'http://www.example.com/list-xhr.json';
        const resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document;
        const { uiSourceCode } = setUpEnvironmentWithUISourceCode(url, resourceType);
        const networkPersistenceManager = await (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createWorkspaceProject)('file:///path/to/overrides', []);
        const saveSpy = sinon.spy(networkPersistenceManager, 'saveUISourceCodeForOverrides');
        const actual = await networkPersistenceManager.setupAndStartLocalOverrides(uiSourceCode);
        saveSpy.restore();
        assert.isTrue(saveSpy.calledOnce, 'should override content once');
        assert.isTrue(actual, 'should complete override successfully');
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('NetworkPersistenceManager', () => {
    it('does not create interception patterns for forbidden URLs', async () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.dispose();
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
        const networkPersistenceManager = await (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createWorkspaceProject)('file:///path/to/overrides', [
            { name: 'helloWorld.html', path: 'www.example.com/', content: 'Hello World!' },
            { name: 'forbidden.html', path: 'chromewebstore.google.com/', content: 'Chrome Web Store' },
            { name: 'flags', path: 'chrome:/', content: 'Chrome Flags' },
            { name: 'index.html', path: 'chrome.google.com/', content: 'Chrome' },
            { name: 'allowed.html', path: 'www.google.com/', content: 'Google Search' },
        ]);
        const stub = sinon.stub(target.fetchAgent(), 'invoke_enable');
        await networkPersistenceManager.updateInterceptionPatternsForTests();
        const patterns = stub.lastCall.args[0].patterns;
        const expected = [
            {
                urlPattern: 'http?://www.example.com/helloWorld.html',
                requestStage: "Response" /* Protocol.Fetch.RequestStage.Response */,
            },
            {
                urlPattern: 'http?://www.google.com/allowed.html',
                requestStage: "Response" /* Protocol.Fetch.RequestStage.Response */,
            },
        ];
        assert.deepStrictEqual(patterns, expected);
    });
    it('recognizes forbidden network URLs', () => {
        assert.isTrue(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.NetworkPersistenceManager.isForbiddenNetworkUrl('chrome://version'));
        assert.isTrue(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.NetworkPersistenceManager.isForbiddenNetworkUrl('https://chromewebstore.google.com/index.html'));
        assert.isTrue(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.NetworkPersistenceManager.isForbiddenNetworkUrl('https://chrome.google.com/script.js'));
        assert.isFalse(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.NetworkPersistenceManager.isForbiddenNetworkUrl('https://www.example.com/script.js'));
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('NetworkPersistenceManager', () => {
    let networkPersistenceManager;
    beforeEach(async () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.dispose();
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_6__.setMockResourceTree)(false);
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
        networkPersistenceManager =
            await (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createWorkspaceProject)('file:///path/to/overrides', [
                {
                    name: '.headers',
                    path: 'www.example.com/',
                    content: `[
            {
              "applyTo": "index.html",
              "headers": [{
                "name": "index-only",
                "value": "only added to index.html"
              }]
            },
            {
              "applyTo": "*.css",
              "headers": [{
                "name": "css-only",
                "value": "only added to css files"
              }]
            },
            {
              "applyTo": "path/to/*.js",
              "headers": [{
                "name": "another-header",
                "value": "only added to specific path"
              }]
            },
            {
              "applyTo": "repeated.html",
              "headers": [
                {
                  "name": "repeated",
                  "value": "first override"
                },
                {
                  "name": "repeated",
                  "value": "second override"
                }
              ]
            }
          ]`,
                },
                {
                    name: '.headers',
                    path: '',
                    content: `[
            {
              "applyTo": "*",
              "headers": [{
                "name": "age",
                "value": "overridden"
              }]
            }
          ]`,
                },
                { name: 'helloWorld.html', path: 'www.example.com/', content: 'Hello World!' },
            ]);
        sinon.stub(target.fetchAgent(), 'invoke_enable');
        await networkPersistenceManager.updateInterceptionPatternsForTests();
    });
    it('merges request headers with override without overlap', async () => {
        const interceptedRequest = {
            request: {
                url: 'https://www.example.com/',
            },
            responseHeaders: [
                { name: 'server', value: 'DevTools mock server' },
            ],
        };
        const expected = [
            { name: 'age', value: 'overridden' },
            { name: 'index-only', value: 'only added to index.html' },
            { name: 'server', value: 'DevTools mock server' },
        ];
        const actual = await networkPersistenceManager.handleHeaderInterception(interceptedRequest);
        assert.deepEqual(actual.sort((a, b) => (a.name.localeCompare(b.name))), expected);
    });
    it('merges request headers with override with overlap', async () => {
        const interceptedRequest = {
            request: {
                url: 'https://www.example.com/index.html',
            },
            responseHeaders: [
                { name: 'server', value: 'DevTools mock server' },
                { name: 'age', value: '1' },
            ],
        };
        const expected = [
            { name: 'age', value: 'overridden' },
            { name: 'index-only', value: 'only added to index.html' },
            { name: 'server', value: 'DevTools mock server' },
        ];
        const actual = await networkPersistenceManager.handleHeaderInterception(interceptedRequest);
        assert.deepEqual(actual.sort((a, b) => (a.name.localeCompare(b.name))), expected);
    });
    it('merges request headers with override with file type wildcard', async () => {
        const interceptedRequest = {
            request: {
                url: 'https://www.example.com/styles.css',
            },
            responseHeaders: [
                { name: 'server', value: 'DevTools mock server' },
                { name: 'age', value: '1' },
            ],
        };
        const expected = [
            { name: 'age', value: 'overridden' },
            { name: 'css-only', value: 'only added to css files' },
            { name: 'server', value: 'DevTools mock server' },
        ];
        const actual = await networkPersistenceManager.handleHeaderInterception(interceptedRequest);
        assert.deepEqual(actual.sort((a, b) => (a.name.localeCompare(b.name))), expected);
    });
    it('merges request headers with override with specific path', async () => {
        const interceptedRequest = {
            request: {
                url: 'https://www.example.com/path/to/script.js',
            },
            responseHeaders: [
                { name: 'server', value: 'DevTools mock server' },
                { name: 'age', value: '1' },
            ],
        };
        const expected = [
            { name: 'age', value: 'overridden' },
            { name: 'another-header', value: 'only added to specific path' },
            { name: 'server', value: 'DevTools mock server' },
        ];
        const actual = await networkPersistenceManager.handleHeaderInterception(interceptedRequest);
        assert.deepEqual(actual.sort((a, b) => (a.name.localeCompare(b.name))), expected);
    });
    it('merges request headers only when domain matches', async () => {
        const interceptedRequest = {
            request: {
                url: 'https://www.web.dev/index.html',
            },
            responseHeaders: [
                { name: 'server', value: 'DevTools mock server' },
            ],
        };
        const expected = [
            { name: 'age', value: 'overridden' },
            { name: 'server', value: 'DevTools mock server' },
        ];
        const actual = await networkPersistenceManager.handleHeaderInterception(interceptedRequest);
        assert.deepEqual(actual.sort((a, b) => (a.name.localeCompare(b.name))), expected);
    });
    it('merges headers while leaving muliple headers with the same name unchanged', async () => {
        const interceptedRequest = {
            request: {
                url: 'https://www.example.com/index.html',
            },
            responseHeaders: [
                { name: 'repeated', value: 'first' },
                { name: 'repeated', value: 'second' },
                { name: 'repeated', value: 'third' },
            ],
        };
        const expected = [
            { name: 'age', value: 'overridden' },
            { name: 'index-only', value: 'only added to index.html' },
            { name: 'repeated', value: 'first' },
            { name: 'repeated', value: 'second' },
            { name: 'repeated', value: 'third' },
        ];
        const actual = await networkPersistenceManager.handleHeaderInterception(interceptedRequest);
        assert.deepEqual(actual.sort((a, b) => (a.name.localeCompare(b.name))), expected);
    });
    it('merges headers and can override muliple headers with the same name', async () => {
        const interceptedRequest = {
            request: {
                url: 'https://www.example.com/repeated.html',
            },
            responseHeaders: [
                { name: 'repeated', value: 'first' },
                { name: 'repeated', value: 'second' },
                { name: 'repeated', value: 'third' },
            ],
        };
        const expected = [
            { name: 'age', value: 'overridden' },
            { name: 'repeated', value: 'first override' },
            { name: 'repeated', value: 'second override' },
        ];
        const actual = await networkPersistenceManager.handleHeaderInterception(interceptedRequest);
        assert.deepEqual(actual.sort((a, b) => (a.name.localeCompare(b.name))), expected);
    });
    it('translates URLs into raw and encoded paths', async () => {
        let toTest = [
            // Simple tests.
            {
                url: 'www.example.com/',
                raw: 'www.example.com/index.html',
                encoded: 'www.example.com/index.html',
            },
            {
                url: 'www.example.com/simple',
                raw: 'www.example.com/simple',
                encoded: 'www.example.com/simple',
            },
            {
                url: 'www.example.com/hello/foo/bar',
                raw: 'www.example.com/hello/foo/bar',
                encoded: 'www.example.com/hello/foo/bar',
            },
            {
                url: 'www.example.com/.',
                raw: 'www.example.com/.',
                encoded: 'www.example.com/',
            },
            {
                url: 'localhost:8090/endswith.',
                raw: 'localhost:8090/endswith.',
                encoded: 'localhost:8090/endswith.',
            },
            // Query parameters.
            {
                url: 'example.com/fo?o/bar',
                raw: 'example.com/fo?o%2Fbar',
                encoded: 'example.com/fo%3Fo%252Fbar',
            },
            {
                url: 'example.com/foo?/bar',
                raw: 'example.com/foo?%2Fbar',
                encoded: 'example.com/foo%3F%252Fbar',
            },
            {
                url: 'example.com/foo/?bar',
                raw: 'example.com/foo/?bar',
                encoded: 'example.com/foo/%3Fbar',
            },
            {
                url: 'example.com/?foo/bar/3',
                raw: 'example.com/?foo%2Fbar%2F3',
                encoded: 'example.com/%3Ffoo%252Fbar%252F3',
            },
            {
                url: 'example.com/foo/bar/?3hello/bar',
                raw: 'example.com/foo/bar/?3hello%2Fbar',
                encoded: 'example.com/foo/bar/%3F3hello%252Fbar',
            },
            { url: 'https://www.example.com/?foo=bar', raw: 'www.example.com/?foo=bar', encoded: 'www.example.com/%3Ffoo=bar' },
            {
                url: 'http://www.example.com/?foo=bar/',
                raw: 'www.example.com/?foo=bar%2F',
                encoded: 'www.example.com/%3Ffoo=bar%252F',
            },
            {
                url: 'http://www.example.com/?foo=bar?',
                raw: 'www.example.com/?foo=bar?',
                encoded: 'www.example.com/%3Ffoo=bar%3F',
            },
            // Hash parameters.
            {
                url: 'example.com/?foo/bar/3#hello/bar',
                raw: 'example.com/?foo%2Fbar%2F3',
                encoded: 'example.com/%3Ffoo%252Fbar%252F3',
            },
            {
                url: 'example.com/#foo/bar/3hello/bar',
                raw: 'example.com/index.html',
                encoded: 'example.com/index.html',
            },
            {
                url: 'example.com/foo/bar/#?3hello/bar',
                raw: 'example.com/foo/bar/index.html',
                encoded: 'example.com/foo/bar/index.html',
            },
            {
                url: 'example.com/foo.js#',
                raw: 'example.com/foo.js',
                encoded: 'example.com/foo.js',
            },
            {
                url: 'http://www.web.dev/path/page.html#anchor',
                raw: 'www.web.dev/path/page.html',
                encoded: 'www.web.dev/path/page.html',
            },
            {
                url: 'http://www.example.com/file&$*?.html',
                raw: 'www.example.com/file&$%2A?.html',
                encoded: 'www.example.com/file&$%252A%3F.html',
            },
            {
                url: 'localhost:8090/',
                raw: 'localhost:8090/index.html',
                encoded: 'localhost:8090/index.html',
            },
            { url: 'localhost:8090/lpt1', raw: 'localhost:8090/lpt1', encoded: 'localhost:8090/lpt1' },
            {
                url: 'example.com/foo .js',
                raw: 'example.com/foo%20.js',
                encoded: 'example.com/foo%2520.js',
            },
            {
                url: 'example.com///foo.js',
                raw: 'example.com/foo.js',
                encoded: 'example.com/foo.js',
            },
            {
                url: 'example.com///',
                raw: 'example.com/index.html',
                encoded: 'example.com/index.html',
            },
            // Very long file names.
            {
                url: 'example.com' +
                    '/THIS/PATH/IS_MORE_THAN/200/Chars'.repeat(8),
                raw: 'example.com/longurls/Chars-141a715a',
                encoded: 'example.com/longurls/Chars-141a715a',
            },
            {
                url: ('example.com' +
                    '/THIS/PATH/IS_LESS_THAN/200/Chars'.repeat(5))
                    .slice(0, -1),
                raw: 'example.com/THIS/PATH/IS_LESS_THAN/200/Chars/THIS/PATH/IS_LESS_THAN/200/Chars/THIS/PATH/IS_LESS_THAN/200/Chars/THIS/PATH/IS_LESS_THAN/200/Chars/THIS/PATH/IS_LESS_THAN/200/Char',
                encoded: 'example.com/THIS/PATH/IS_LESS_THAN/200/Chars/THIS/PATH/IS_LESS_THAN/200/Chars/THIS/PATH/IS_LESS_THAN/200/Chars/THIS/PATH/IS_LESS_THAN/200/Chars/THIS/PATH/IS_LESS_THAN/200/Char',
            },
        ];
        if (_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isWin()) {
            toTest = [
                {
                    url: 'https://www.example.com/?foo=bar',
                    raw: 'www.example.com/%3Ffoo=bar',
                    encoded: 'www.example.com/%253Ffoo=bar',
                },
                {
                    url: 'http://www.web.dev/path/page.html#anchor',
                    raw: 'www.web.dev/path/page.html',
                    encoded: 'www.web.dev/path/page.html',
                },
                {
                    url: 'http://www.example.com/?foo=bar/',
                    raw: 'www.example.com/%3Ffoo=bar%2F',
                    encoded: 'www.example.com/%253Ffoo=bar%252F',
                },
                {
                    url: 'http://www.example.com/?foo=bar?',
                    raw: 'www.example.com/%3Ffoo=bar%3F',
                    encoded: 'www.example.com/%253Ffoo=bar%253F',
                },
                {
                    url: 'http://www.example.com/file&$*?.html',
                    raw: 'www.example.com/file&$%2A%3F.html',
                    encoded: 'www.example.com/file&$%252A%253F.html',
                },
                {
                    url: 'localhost:8090/',
                    raw: 'localhost%3A8090/index.html',
                    encoded: 'localhost%253A8090/index.html',
                },
                // Windows cannot end with . (period) and space.
                {
                    url: 'example.com/foo.js.',
                    raw: 'example.com/foo.js%2E',
                    encoded: 'example.com/foo.js%252E',
                },
                {
                    url: 'localhost:8090/endswith.',
                    raw: 'localhost%3A8090/endswith%2E',
                    encoded: 'localhost%253A8090/endswith%252E',
                },
                {
                    url: 'example.com/foo.js ',
                    raw: 'example.com/foo.js%20',
                    encoded: 'example.com/foo.js%2520',
                },
                // Reserved filenames on Windows.
                {
                    url: 'example.com/CON',
                    raw: 'example.com/%43%4F%4E',
                    encoded: 'example.com/%2543%254F%254E',
                },
                {
                    url: 'example.com/cOn',
                    raw: 'example.com/%63%4F%6E',
                    encoded: 'example.com/%2563%254F%256E',
                },
                {
                    url: 'example.com/cOn/hello',
                    raw: 'example.com/%63%4F%6E/hello',
                    encoded: 'example.com/%2563%254F%256E/hello',
                },
                {
                    url: 'example.com/PRN',
                    raw: 'example.com/%50%52%4E',
                    encoded: 'example.com/%2550%2552%254E',
                },
                {
                    url: 'example.com/AUX',
                    raw: 'example.com/%41%55%58',
                    encoded: 'example.com/%2541%2555%2558',
                },
                {
                    url: 'example.com/NUL',
                    raw: 'example.com/%4E%55%4C',
                    encoded: 'example.com/%254E%2555%254C',
                },
                {
                    url: 'example.com/COM1',
                    raw: 'example.com/%43%4F%4D%31',
                    encoded: 'example.com/%2543%254F%254D%2531',
                },
                {
                    url: 'example.com/COM2',
                    raw: 'example.com/%43%4F%4D%32',
                    encoded: 'example.com/%2543%254F%254D%2532',
                },
                {
                    url: 'example.com/COM3',
                    raw: 'example.com/%43%4F%4D%33',
                    encoded: 'example.com/%2543%254F%254D%2533',
                },
                {
                    url: 'example.com/COM4',
                    raw: 'example.com/%43%4F%4D%34',
                    encoded: 'example.com/%2543%254F%254D%2534',
                },
                {
                    url: 'example.com/COM5',
                    raw: 'example.com/%43%4F%4D%35',
                    encoded: 'example.com/%2543%254F%254D%2535',
                },
                {
                    url: 'example.com/COM6',
                    raw: 'example.com/%43%4F%4D%36',
                    encoded: 'example.com/%2543%254F%254D%2536',
                },
                {
                    url: 'example.com/COM7',
                    raw: 'example.com/%43%4F%4D%37',
                    encoded: 'example.com/%2543%254F%254D%2537',
                },
                {
                    url: 'example.com/COM8',
                    raw: 'example.com/%43%4F%4D%38',
                    encoded: 'example.com/%2543%254F%254D%2538',
                },
                {
                    url: 'example.com/COM9',
                    raw: 'example.com/%43%4F%4D%39',
                    encoded: 'example.com/%2543%254F%254D%2539',
                },
                {
                    url: 'localhost:8090/lpt1',
                    raw: 'localhost%3A8090/%6C%70%74%31',
                    encoded: 'localhost%253A8090/%256C%2570%2574%2531',
                },
                {
                    url: 'example.com/LPT1',
                    raw: 'example.com/%4C%50%54%31',
                    encoded: 'example.com/%254C%2550%2554%2531',
                },
                {
                    url: 'example.com/LPT2',
                    raw: 'example.com/%4C%50%54%32',
                    encoded: 'example.com/%254C%2550%2554%2532',
                },
                {
                    url: 'example.com/LPT3',
                    raw: 'example.com/%4C%50%54%33',
                    encoded: 'example.com/%254C%2550%2554%2533',
                },
                {
                    url: 'example.com/LPT4',
                    raw: 'example.com/%4C%50%54%34',
                    encoded: 'example.com/%254C%2550%2554%2534',
                },
                {
                    url: 'example.com/LPT5',
                    raw: 'example.com/%4C%50%54%35',
                    encoded: 'example.com/%254C%2550%2554%2535',
                },
                {
                    url: 'example.com/LPT6',
                    raw: 'example.com/%4C%50%54%36',
                    encoded: 'example.com/%254C%2550%2554%2536',
                },
                {
                    url: 'example.com/LPT7',
                    raw: 'example.com/%4C%50%54%37',
                    encoded: 'example.com/%254C%2550%2554%2537',
                },
                {
                    url: 'example.com/LPT8',
                    raw: 'example.com/%4C%50%54%38',
                    encoded: 'example.com/%254C%2550%2554%2538',
                },
                {
                    url: 'example.com/LPT9',
                    raw: 'example.com/%4C%50%54%39',
                    encoded: 'example.com/%254C%2550%2554%2539',
                },
            ];
        }
        toTest.forEach(testStrings => {
            assert.deepEqual(networkPersistenceManager.rawPathFromUrl(testStrings.url), testStrings.raw);
            assert.deepEqual(networkPersistenceManager.encodedPathFromUrl(testStrings.url), testStrings.encoded);
        });
    });
    it('is aware of which \'.headers\' files are currently active', done => {
        const workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.WorkspaceImpl.instance();
        const project = {
            type: () => _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.projectTypes.Network,
        };
        const networkUISourceCode = {
            url: () => 'https://www.example.com/hello/world/index.html',
            project: () => project,
            contentType: () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document,
        };
        project.uiSourceCodes = () => [networkUISourceCode];
        const eventURLs = [];
        networkPersistenceManager.addEventListener("RequestsForHeaderOverridesFileChanged" /* Persistence.NetworkPersistenceManager.Events.RequestsForHeaderOverridesFileChanged */, event => {
            eventURLs.push(event.data.url());
        });
        workspace.dispatchEventToListeners(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.Events.UISourceCodeAdded, networkUISourceCode);
        assert.isTrue(networkPersistenceManager.hasMatchingNetworkUISourceCodeForHeaderOverridesFile({
            url: () => 'file:///path/to/overrides/www.example.com/.headers',
            project: () => networkPersistenceManager.project(),
        }));
        assert.isTrue(networkPersistenceManager.hasMatchingNetworkUISourceCodeForHeaderOverridesFile({
            url: () => 'file:///path/to/overrides/.headers',
            project: () => networkPersistenceManager.project(),
        }));
        assert.isFalse(networkPersistenceManager.hasMatchingNetworkUISourceCodeForHeaderOverridesFile({
            url: () => 'file:///path/to/overrides/www.foo.com/.headers',
            project: () => networkPersistenceManager.project(),
        }));
        workspace.dispatchEventToListeners(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.Events.ProjectRemoved, project);
        setTimeout(() => {
            assert.deepStrictEqual(eventURLs, ['file:///path/to/overrides/.headers', 'file:///path/to/overrides/www.example.com/.headers']);
            assert.isFalse(networkPersistenceManager.hasMatchingNetworkUISourceCodeForHeaderOverridesFile({
                url: () => 'file:///path/to/overrides/www.example.com/.headers',
                project: () => networkPersistenceManager.project(),
            }));
            assert.isFalse(networkPersistenceManager.hasMatchingNetworkUISourceCodeForHeaderOverridesFile({
                url: () => 'file:///path/to/overrides/.headers',
                project: () => networkPersistenceManager.project(),
            }));
            assert.isFalse(networkPersistenceManager.hasMatchingNetworkUISourceCodeForHeaderOverridesFile({
                url: () => 'file:///path/to/overrides/www.foo.com/.headers',
                project: () => networkPersistenceManager.project(),
            }));
            done();
        }, 0);
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('NetworkPersistenceManager', () => {
    beforeEach(() => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.dispose();
    });
    it('updates active state when target detach and attach', async () => {
        const { networkPersistenceManager } = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)();
        const { project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createFileSystemUISourceCode)({ url: 'file:///tmp', mimeType: 'text/plain' });
        await networkPersistenceManager.setProject(project);
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
        assert.isNull(targetManager.rootTarget());
        assert.isFalse(networkPersistenceManager.active());
        const target = await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
        assert.isTrue(networkPersistenceManager.active());
        targetManager.removeTarget(target);
        target.dispose('test');
        assert.isFalse(networkPersistenceManager.active());
    });
});
describe('NetworkPersistenceManager', () => {
    before(async () => {
        await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.initializeGlobalVars)();
    });
    after(async () => {
        await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.deinitializeGlobalVars)();
    });
    it('escapes patterns to be used in RegExes', () => {
        assert.strictEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.escapeRegex('www.example.com/'), 'www\\.example\\.com/');
        assert.strictEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.escapeRegex('www.example.com/index.html'), 'www\\.example\\.com/index\\.html');
        assert.strictEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.escapeRegex('www.example.com/*'), 'www\\.example\\.com/.*');
        assert.strictEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.escapeRegex('www.example.com/*.js'), 'www\\.example\\.com/.*\\.js');
        assert.strictEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.escapeRegex('www.example.com/file([{with-special$_^chars}])'), 'www\\.example\\.com/file\\(\\[\\{with\\-special\\$_\\^chars\\}\\]\\)');
        assert.strictEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.escapeRegex('www.example.com/page.html?foo=bar'), 'www\\.example\\.com/page\\.html\\?foo=bar');
        assert.strictEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.escapeRegex('www.example.com/*?foo=bar'), 'www\\.example\\.com/.*\\?foo=bar');
    });
    it('detects when the tail of a path matches with a default index file', () => {
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('index.html'), { head: '', tail: 'index.html' });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('index.htm'), { head: '', tail: 'index.htm' });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('index.php'), { head: '', tail: 'index.php' });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('index.ht'), { head: 'index.ht' });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('*.html'), { head: '', tail: '*.html' });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('*.htm'), { head: '', tail: '*.htm' });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('path/*.html'), { head: 'path/', tail: '*.html' });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('foo*.html'), { head: 'foo*.html' });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('a*'), { head: 'a*' });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('a/*'), { head: 'a/*' });
    });
    it('merges headers which do not overlap', () => {
        const { networkPersistenceManager } = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)();
        const baseHeaders = [{
                name: 'age',
                value: '0',
            }];
        const overrideHeaders = [{
                'name': 'accept-ranges',
                'value': 'bytes',
            }];
        const merged = [
            { name: 'accept-ranges', value: 'bytes' },
            { name: 'age', value: '0' },
        ];
        assert.deepEqual(networkPersistenceManager.mergeHeaders(baseHeaders, overrideHeaders), merged);
    });
    it('merges headers which overlap', () => {
        const { networkPersistenceManager } = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)();
        const baseHeaders = [{
                name: 'age',
                value: '0',
            }];
        const overrideHeaders = [
            { name: 'accept-ranges', value: 'bytes' },
            { name: 'age', value: '1' },
        ];
        const merged = [
            { name: 'accept-ranges', value: 'bytes' },
            { name: 'age', value: '1' },
        ];
        assert.deepEqual(networkPersistenceManager.mergeHeaders(baseHeaders, overrideHeaders), merged);
    });
    it('generates header patterns', async () => {
        const { networkPersistenceManager } = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)();
        const headers = `[
      {
        "applyTo": "*",
        "headers": [{
          "name": "age",
          "value": "0"
        }]
      },
      {
        "applyTo": "page.html",
        "headers": [{
          "name": "age",
          "value": "1"
        }]
      },
      {
        "applyTo": "index.html",
        "headers": [{
          "name": "age",
          "value": "2"
        }]
      },
      {
        "applyTo": "nested/path/*.js",
        "headers": [{
          "name": "age",
          "value": "3"
        }]
      },
      {
        "applyTo": "*/path/*.js",
        "headers": [{
          "name": "age",
          "value": "4"
        }]
      }
    ]`;
        const { uiSourceCode } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createFileSystemUISourceCode)({
            url: 'file:///path/to/overrides/www.example.com/.headers',
            content: headers,
            mimeType: 'text/plain',
            fileSystemPath: 'file:///path/to/overrides',
        });
        const expectedPatterns = [
            'http?://www.example.com/*',
            'http?://www.example.com/page.html',
            'http?://www.example.com/index.html',
            'http?://www.example.com/',
            'http?://www.example.com/nested/path/*.js',
            'http?://www.example.com/*/path/*.js',
        ];
        const { headerPatterns, path, overridesWithRegex } = await networkPersistenceManager.generateHeaderPatterns(uiSourceCode);
        assert.deepEqual(Array.from(headerPatterns).sort(), expectedPatterns.sort());
        const expectedMapping = [
            {
                applyTo: /^www\.example\.com\/.*$/.toString(),
                headers: [{ name: 'age', value: '0' }],
            },
            {
                applyTo: /^www\.example\.com\/page\.html$/.toString(),
                headers: [{ name: 'age', value: '1' }],
            },
            {
                applyTo: /^www\.example\.com\/(index\.html)?$/.toString(),
                headers: [{ name: 'age', value: '2' }],
            },
            {
                applyTo: /^www\.example\.com\/nested\/path\/.*\.js$/.toString(),
                headers: [{ name: 'age', value: '3' }],
            },
            {
                applyTo: /^www\.example\.com\/.*\/path\/.*\.js$/.toString(),
                headers: [{ name: 'age', value: '4' }],
            },
        ];
        assert.strictEqual(path, 'www.example.com/');
        const actualMapping = overridesWithRegex.map(override => ({ applyTo: override.applyToRegex.toString(), headers: override.headers }));
        assert.deepEqual(actualMapping, expectedMapping);
    });
    it('generates header patterns for global header overrides', async () => {
        const { networkPersistenceManager } = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)();
        const headers = `[
      {
        "applyTo": "*",
        "headers": [{
          "name": "age",
          "value": "0"
        }]
      }
    ]`;
        const { uiSourceCode } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createFileSystemUISourceCode)({
            url: 'file:///path/to/overrides/.headers',
            content: headers,
            mimeType: 'text/plain',
            fileSystemPath: 'file:///path/to/overrides',
        });
        const { headerPatterns } = await networkPersistenceManager.generateHeaderPatterns(uiSourceCode);
        assert.deepEqual(Array.from(headerPatterns), ['http?://*', 'file:///*']);
    });
    it('generates header patterns for long URLs', async () => {
        const { networkPersistenceManager } = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)();
        const headers = `[
      {
        "applyTo": "index.html-5b9f4873.html",
        "headers": [{
          "name": "foo",
          "value": "bar"
        }]
      }
    ]`;
        const { uiSourceCode } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createFileSystemUISourceCode)({
            url: 'file:///path/to/overrides/www.longurls.com/longurls/.headers',
            content: headers,
            mimeType: 'text/plain',
            fileSystemPath: 'file:///path/to/overrides',
        });
        const { headerPatterns, path, overridesWithRegex } = await networkPersistenceManager.generateHeaderPatterns(uiSourceCode);
        assert.deepEqual(Array.from(headerPatterns), ['http?://www.longurls.com/*']);
        assert.strictEqual(path, 'www.longurls.com/longurls/');
        const expectedMapping = [
            {
                applyTo: /^www\.longurls\.com\/longurls\/index\.html\-5b9f4873\.html$/.toString(),
                headers: [{ name: 'foo', value: 'bar' }],
            },
        ];
        const actualMapping = overridesWithRegex.map(override => ({ applyTo: override.applyToRegex.toString(), headers: override.headers }));
        assert.deepEqual(actualMapping, expectedMapping);
    });
    it('updates interception patterns upon edit of .headers file', async () => {
        const { networkPersistenceManager } = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)();
        const headers = `[
      {
        "applyTo": "index.html",
        "headers": [{
          "name": "foo",
          "value": "bar"
        }]
      }
    ]`;
        const { uiSourceCode } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createFileSystemUISourceCode)({
            url: 'file:///path/to/overrides/www.example.com/.headers',
            content: headers,
            mimeType: 'text/plain',
            fileSystemPath: 'file:///path/to/overrides',
        });
        const spy = sinon.spy(networkPersistenceManager, 'updateInterceptionPatterns');
        assert.isTrue(spy.notCalled);
        uiSourceCode.setWorkingCopy(`[
      {
        "applyTo": "index.html",
        "headers": [{
          "name": "foo2",
          "value": "bar2"
        }]
      }
    ]`);
        uiSourceCode.commitWorkingCopy();
        assert.isTrue(spy.calledOnce);
    });
});
//# sourceMappingURL=NetworkPersistenceManager.test.js.map

/***/ }),

/***/ "./testing/OverridesHelpers.js":
/*!*************************************!*\
  !*** ./testing/OverridesHelpers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWorkspaceProject: () => (/* binding */ createWorkspaceProject),
/* harmony export */   setUpEnvironment: () => (/* binding */ setUpEnvironment)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





function setUpEnvironment() {
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
    const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
    const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
    const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({ forceNew: true, resourceMapping, targetManager });
    const breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__.BreakpointManager.BreakpointManager.instance({ forceNew: true, targetManager, workspace, debuggerWorkspaceBinding });
    _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.Persistence.PersistenceImpl.instance({ forceNew: true, workspace, breakpointManager });
    const networkPersistenceManager = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.NetworkPersistenceManager.NetworkPersistenceManager.instance({ forceNew: true, workspace });
    return { networkPersistenceManager, workspace, debuggerWorkspaceBinding };
}
async function createWorkspaceProject(baseUrl, files) {
    const { networkPersistenceManager } = setUpEnvironment();
    const fileSystem = {
        fileSystemPath: () => baseUrl,
        fileSystemBaseURL: baseUrl + '/',
        type: () => _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.FileSystem,
        fileSystemInternal: {
            supportsAutomapping: () => false,
        },
    };
    const uiSourceCodes = new Map();
    const mockProject = {
        uiSourceCodes: () => Array.from(uiSourceCodes.values()),
        id: () => baseUrl,
        fileSystemPath: () => baseUrl,
        uiSourceCodeForURL: (url) => {
            return uiSourceCodes.get(url) || null;
        },
        type: () => _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.FileSystem,
        initialGitFolders: () => [],
        fileSystemInternal: {
            type: () => 'filesystem',
        },
        fileSystemBaseURL: baseUrl + '/',
        createFile: () => { },
    };
    await networkPersistenceManager.setProject(mockProject);
    for (const file of files) {
        const url = file.path.concat(file.name);
        const fileUrl = networkPersistenceManager.fileUrlFromNetworkUrl(url, true);
        uiSourceCodes.set(fileUrl, {
            requestContent: () => Promise.resolve({ content: file.content }),
            url: () => fileUrl,
            project: () => {
                return { ...fileSystem, requestFileBlob: () => new Blob([file.content]) };
            },
            name: () => file.name,
            setWorkingCopy: () => { },
            commitWorkingCopy: () => { },
        });
    }
    await networkPersistenceManager.setProject(mockProject);
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
    workspace.addProject(mockProject);
    return networkPersistenceManager;
}
//# sourceMappingURL=OverridesHelpers.js.map

/***/ }),

/***/ "./testing/UISourceCodeHelpers.js":
/*!****************************************!*\
  !*** ./testing/UISourceCodeHelpers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentProviderUISourceCode: () => (/* binding */ createContentProviderUISourceCode),
/* harmony export */   createContentProviderUISourceCodes: () => (/* binding */ createContentProviderUISourceCodes),
/* harmony export */   createFakeScriptMapping: () => (/* binding */ createFakeScriptMapping),
/* harmony export */   createFileSystemUISourceCode: () => (/* binding */ createFileSystemUISourceCode),
/* harmony export */   setupMockedUISourceCode: () => (/* binding */ setupMockedUISourceCode)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






function createContentProviderUISourceCodes(options) {
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
    const projectType = options.projectType || _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.Formatter;
    assert.notEqual(projectType, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.FileSystem, 'For creating file system UISourceCodes use \'createFileSystemUISourceCode\' helper.');
    const project = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ContentProviderBasedProject.ContentProviderBasedProject(workspace, options.projectId || 'PROJECT_ID', projectType, 'Test project', false /* isServiceProject*/);
    if (options.target) {
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.NetworkProject.NetworkProject.setTargetForProject(project, options.target);
    }
    const uiSourceCodes = [];
    for (const item of options.items) {
        const resourceType = item.resourceType || _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(item.mimeType);
        const uiSourceCode = project.createUISourceCode(item.url, resourceType);
        const contentProvider = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.StaticContentProvider.StaticContentProvider.fromString(item.url, resourceType, item.content || '');
        const metadata = item.metadata || new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCodeMetadata(null, null);
        project.addUISourceCodeWithProvider(uiSourceCode, contentProvider, metadata, item.mimeType);
        uiSourceCodes.push(uiSourceCode);
    }
    return { project, uiSourceCodes };
}
function createContentProviderUISourceCode(options) {
    const { url, content, mimeType, metadata, projectType, projectId, target } = options;
    const { project, uiSourceCodes } = createContentProviderUISourceCodes({ items: [{ url, content, mimeType, metadata }], projectType, projectId, target });
    return { project, uiSourceCode: uiSourceCodes[0] };
}
class TestPlatformFileSystem extends _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.PlatformFileSystem.PlatformFileSystem {
    #mimeType;
    #autoMapping;
    constructor(path, type, mimeType, autoMapping) {
        super(path, type);
        this.#mimeType = mimeType;
        this.#autoMapping = autoMapping;
    }
    supportsAutomapping() {
        return this.#autoMapping;
    }
    mimeFromPath(_path) {
        return this.#mimeType;
    }
}
class TestFileSystem extends _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.FileSystemWorkspaceBinding.FileSystem {
    #content;
    #metadata;
    constructor(options) {
        super(options.fileSystemWorkspaceBinding, options.platformFileSystem, options.workspace);
        this.#content = options.content;
        this.#metadata = options.metadata;
    }
    requestFileContent(_uiSourceCode) {
        return Promise.resolve(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentData.ContentData(this.#content, /* isBase64 */ false, 'text/plain'));
    }
    requestMetadata(_uiSourceCode) {
        return Promise.resolve(this.#metadata);
    }
}
function createFileSystemUISourceCode(options) {
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
    const isolatedFileSystemManager = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance();
    const fileSystemWorkspaceBinding = new _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding(isolatedFileSystemManager, workspace);
    const fileSystemPath = (options.fileSystemPath || '');
    const type = options.type || '';
    const content = options.content || '';
    const platformFileSystem = new TestPlatformFileSystem(fileSystemPath, type, options.mimeType, Boolean(options.autoMapping));
    const metadata = options.metadata || new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCodeMetadata(null, null);
    const project = new TestFileSystem({ fileSystemWorkspaceBinding, platformFileSystem, workspace, content, metadata });
    const uiSourceCode = project.createUISourceCode(options.url, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(options.mimeType));
    project.addUISourceCode(uiSourceCode);
    return { uiSourceCode, project };
}
function setupMockedUISourceCode(url = 'https://example.com/') {
    const projectStub = sinon.createStubInstance(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ContentProviderBasedProject.ContentProviderBasedProject);
    const urlStringTagExample = url;
    const contentTypeStub = sinon.createStubInstance(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType);
    const uiSourceCode = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCode(projectStub, urlStringTagExample, contentTypeStub);
    return { sut: uiSourceCode, projectStub: projectStub, contentTypeStub: contentTypeStub };
}
function createFakeScriptMapping(debuggerModel, uiSourceCode, uiLineNumber, scriptId) {
    const sdkLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location(debuggerModel, scriptId, 13);
    const uiLocation = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocation(uiSourceCode, uiLineNumber);
    const mapping = {
        rawLocationToUILocation: (_) => uiLocation,
        uiLocationToRawLocations: (_uiSourceCode, _lineNumber, _columnNumber) => [sdkLocation],
        uiLocationRangeToRawLocationRanges: (_uiSourceCode, _textRange) => {
            throw new Error('Not implemented');
        },
    };
    return mapping;
}
//# sourceMappingURL=UISourceCodeHelpers.js.map

/***/ })

}]);