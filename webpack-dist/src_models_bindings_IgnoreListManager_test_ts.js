"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_bindings_IgnoreListManager_test_ts"],{

/***/ "./src/models/bindings/IgnoreListManager.test.ts":
/*!*******************************************************!*\
  !*** ./src/models/bindings/IgnoreListManager.test.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./src/testing/UISourceCodeHelpers.ts");
/* harmony import */ var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bindings.js */ "./src/models/bindings/bindings.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







// Same as in IgnoreListManager.ts.
const UIStrings = {
    removeFromIgnoreList: 'Remove from ignore list',
    addScriptToIgnoreList: 'Add script to ignore list',
    addDirectoryToIgnoreList: 'Add directory to ignore list',
    addAllContentScriptsToIgnoreList: 'Add all extension scripts to ignore list',
    addAllThirdPartyScriptsToIgnoreList: 'Add all third-party scripts to ignore list',
};
const sourceMapThirdPartyFolderUrl = 'http://a.b.c/lib';
const sourceMapThirdPartyUrl = 'http://a.b.c/lib/source1.ts';
const sourceMapNodeModulesUrl = 'http://a.b.c/node_modules/library/source3.ts';
const sourceMapFolderUrl = 'http://a.b.c/myapp';
const sourceMapFile1Url = 'http://a.b.c/myapp/file1.ts';
const sourceMapFile2Url = 'http://a.b.c/myapp/file2.ts';
const sourceMap = {
    version: 3,
    file: './foo.js',
    mappings: '',
    sources: [sourceMapThirdPartyUrl, sourceMapFile1Url, sourceMapFile2Url, sourceMapNodeModulesUrl],
    sourcesContent: ['// File 1\n'],
    names: [],
    sourceRoot: '',
    x_google_ignoreList: [0],
};
function notNull(val) {
    assert.exists(val);
    return val;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('IgnoreListManager', () => {
    let debuggerModel;
    let ignoreListManager;
    let uiSourceCode;
    let webpackUiSourceCode;
    let thirdPartyUiSourceCode;
    let nodeModulesUiSourceCode;
    let sourceMapFile1UiSourceCode;
    let sourceMapFile2UiSourceCode;
    let contentScriptUiSourceCode;
    // This test simulates the behavior of the IgnoreListManager with the
    // following document, which contains two inline <script>s, one with
    // a `//# sourceURL` annotation and one without.
    //
    //  <!DOCTYPE html>
    //  <html>
    //  <head>
    //  <meta charset=utf-8>
    //  <script>
    //  function foo() { console.log("foo"); }
    //  foo();
    //  //# sourceURL=webpack:///src/foo.js
    //  </script>
    //  </head>
    //  <body>
    //  <script>console.log("bar");</script>
    //  </body>
    //  </html>
    //
    const url = 'http://example.com/index.html';
    const webpackUrl = 'webpack:///src/subfolder/foo.js';
    const webpackFolderUrl = 'webpack:///src';
    const webpackSubfolderUrl = 'webpack:///src/subfolder';
    const contentScriptFolderUrl = 'chrome-extension://abc';
    const contentScriptUrl = 'chrome-extension://abc/content.js';
    const SCRIPTS = [
        {
            scriptId: '1',
            startLine: 4,
            startColumn: 8,
            endLine: 8,
            endColumn: 0,
            sourceURL: webpackUrl,
            hasSourceURLComment: true,
            executionContextAuxData: undefined,
        },
        {
            scriptId: '2',
            startLine: 11,
            startColumn: 8,
            endLine: 11,
            endColumn: 27,
            sourceURL: url,
            sourceMapURL: 'data:,' + encodeURIComponent(JSON.stringify(sourceMap)),
            hasSourceURLComment: false,
        },
        {
            scriptId: '3',
            startLine: 4,
            startColumn: 8,
            endLine: 8,
            endColumn: 0,
            sourceURL: contentScriptUrl,
            executionContextAuxData: { isDefault: false },
            hasSourceURLComment: true,
        },
    ];
    const ALL_URLS = [...sourceMap.sources, ...SCRIPTS.map(({ sourceURL }) => sourceURL)];
    beforeEach(async () => {
        const forceNew = true;
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const targetManager = target.targetManager();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PageResourceLoader.PageResourceLoader.instance({ forceNew, maxConcurrentLoads: 1, loadOverride: null });
        const workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
        const resourceMapping = new _bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceMapping.ResourceMapping(targetManager, workspace);
        const debuggerWorkspaceBinding = _bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({ forceNew, resourceMapping, targetManager });
        ignoreListManager = _bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance({ forceNew, debuggerWorkspaceBinding });
        // Inject the HTML document resource.
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createResource)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target), url, 'text/html', '');
        uiSourceCode = notNull(workspace.uiSourceCodeForURL(url));
        // Register the inline <script>s.
        const hash = '';
        const length = 0;
        const embedderName = url;
        const executionContextId = 1;
        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerModel);
        SCRIPTS.forEach(({ scriptId, startLine, startColumn, endLine, endColumn, executionContextAuxData, sourceURL, hasSourceURLComment, sourceMapURL, }) => {
            debuggerModel.parsedScriptSource(scriptId, sourceURL, startLine, startColumn, endLine, endColumn, executionContextId, hash, executionContextAuxData, false, sourceMapURL, hasSourceURLComment, false, length, false, null, null, null, null, embedderName);
        });
        assert.lengthOf(debuggerModel.scripts(), SCRIPTS.length);
        webpackUiSourceCode = notNull(workspace.uiSourceCodeForURL(webpackUrl));
        contentScriptUiSourceCode = notNull(workspace.uiSourceCodeForURL(contentScriptUrl));
        thirdPartyUiSourceCode = await debuggerWorkspaceBinding.waitForUISourceCodeAdded(sourceMapThirdPartyUrl, target);
        sourceMapFile1UiSourceCode = notNull(workspace.uiSourceCodeForURL(sourceMapFile1Url));
        sourceMapFile2UiSourceCode = notNull(workspace.uiSourceCodeForURL(sourceMapFile2Url));
        nodeModulesUiSourceCode = notNull(workspace.uiSourceCodeForURL(sourceMapNodeModulesUrl));
    });
    // Wrapper around getIgnoreListURLContextMenuItems to make its result more convenient for testing
    function getContextMenu(uiSourceCode) {
        const items = [];
        const callbacks = new Map();
        for (const { text, callback } of ignoreListManager.getIgnoreListURLContextMenuItems(uiSourceCode)) {
            items.push(text);
            callbacks.set(text, callback);
        }
        return { items, callbacks };
    }
    // Wrapper around getIgnoreListFolderContextMenuItems to make its result more convenient for testing
    function getFolderContextMenu(url) {
        const items = [];
        const callbacks = new Map();
        const workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
        const options = {
            isContentScript: url === contentScriptFolderUrl,
            isKnownThirdParty: url === sourceMapThirdPartyFolderUrl,
            isCurrentlyIgnoreListed: ALL_URLS.every(scriptUrl => !scriptUrl.startsWith(url) ||
                ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(notNull(workspace.uiSourceCodeForURL(scriptUrl)))),
        };
        for (const { text, callback } of ignoreListManager.getIgnoreListFolderContextMenuItems(url, options)) {
            items.push(text);
            callbacks.set(text, callback);
        }
        return { items, callbacks };
    }
    it('default is do not ignore', () => {
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
    });
    it('default is ignore third party', () => {
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(thirdPartyUiSourceCode));
    });
    it('default is ignore content scripts from extensions', () => {
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(contentScriptUiSourceCode));
    });
    it('script context menu enables and disables ignore listing', () => {
        let { items, callbacks } = getContextMenu(webpackUiSourceCode);
        assert.sameMembers(items, [UIStrings.addScriptToIgnoreList]);
        notNull(callbacks.get(UIStrings.addScriptToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        ({ items, callbacks } = getContextMenu(webpackUiSourceCode));
        assert.sameMembers(items, [UIStrings.removeFromIgnoreList]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
    });
    it('script context menu enables and disables ignore listing for content scripts', () => {
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(contentScriptUiSourceCode));
        let { items, callbacks } = getContextMenu(contentScriptUiSourceCode);
        assert.sameMembers(items, [UIStrings.removeFromIgnoreList]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(contentScriptUiSourceCode));
        ({ items, callbacks } = getContextMenu(contentScriptUiSourceCode));
        assert.sameMembers(items, [UIStrings.addScriptToIgnoreList, UIStrings.addAllContentScriptsToIgnoreList]);
        notNull(callbacks.get(UIStrings.addAllContentScriptsToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(contentScriptUiSourceCode));
    });
    it('folder context menu enables and disables ignore listing for content scripts', () => {
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(contentScriptUiSourceCode));
        let { items, callbacks } = getFolderContextMenu(contentScriptFolderUrl);
        assert.sameMembers(items, [UIStrings.removeFromIgnoreList]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(contentScriptUiSourceCode));
        ({ items, callbacks } = getFolderContextMenu(contentScriptFolderUrl));
        assert.sameMembers(items, [UIStrings.addDirectoryToIgnoreList, UIStrings.addAllContentScriptsToIgnoreList]);
        notNull(callbacks.get(UIStrings.addAllContentScriptsToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(contentScriptUiSourceCode));
    });
    it('script context menu enables and disables ignore listing for third party scripts', () => {
        let { items, callbacks } = getContextMenu(thirdPartyUiSourceCode);
        assert.sameMembers(items, [UIStrings.removeFromIgnoreList]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(thirdPartyUiSourceCode));
        ({ items, callbacks } = getContextMenu(thirdPartyUiSourceCode));
        assert.sameMembers(items, [UIStrings.addScriptToIgnoreList, UIStrings.addAllThirdPartyScriptsToIgnoreList]);
        notNull(callbacks.get(UIStrings.addAllThirdPartyScriptsToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(thirdPartyUiSourceCode));
    });
    it('folder context menu enables and disables ignore listing for third party scripts', () => {
        let { items, callbacks } = getFolderContextMenu(sourceMapThirdPartyFolderUrl);
        assert.sameMembers(items, [UIStrings.removeFromIgnoreList]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(thirdPartyUiSourceCode));
        ({ items, callbacks } = getFolderContextMenu(sourceMapThirdPartyFolderUrl));
        assert.sameMembers(items, [UIStrings.addDirectoryToIgnoreList, UIStrings.addAllThirdPartyScriptsToIgnoreList]);
        notNull(callbacks.get(UIStrings.addAllThirdPartyScriptsToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(thirdPartyUiSourceCode));
    });
    it('folder context menu disables default node_modules ignore listing rule', () => {
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(nodeModulesUiSourceCode));
        const { items, callbacks } = getFolderContextMenu(sourceMapNodeModulesUrl);
        assert.sameMembers(items, [UIStrings.removeFromIgnoreList]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(nodeModulesUiSourceCode));
    });
    it('folder context menu enables and disables ignore listing', () => {
        let { items, callbacks } = getFolderContextMenu(webpackFolderUrl);
        assert.sameMembers(items, [UIStrings.addDirectoryToIgnoreList]);
        notNull(callbacks.get(UIStrings.addDirectoryToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        ({ items, callbacks } = getFolderContextMenu(webpackFolderUrl));
        assert.sameMembers(items, [UIStrings.removeFromIgnoreList]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
    });
    it('ignore listed folder can be reenabled by script context menu', () => {
        let { items, callbacks } = getFolderContextMenu(webpackFolderUrl);
        assert.sameMembers(items, [UIStrings.addDirectoryToIgnoreList]);
        notNull(callbacks.get(UIStrings.addDirectoryToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        ({ items, callbacks } = getContextMenu(webpackUiSourceCode));
        assert.sameMembers(items, [UIStrings.removeFromIgnoreList]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        ({ items, callbacks } = getFolderContextMenu(webpackFolderUrl));
        assert.sameMembers(items, [UIStrings.addDirectoryToIgnoreList]);
        notNull(callbacks.get(UIStrings.addDirectoryToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
    });
    it('ignore listed folder can be reenabled by subfolder context menu', () => {
        let { items, callbacks } = getFolderContextMenu(webpackFolderUrl);
        assert.sameMembers(items, [UIStrings.addDirectoryToIgnoreList]);
        notNull(callbacks.get(UIStrings.addDirectoryToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        ({ items, callbacks } = getFolderContextMenu(webpackSubfolderUrl));
        assert.sameMembers(items, [UIStrings.removeFromIgnoreList]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        ({ items, callbacks } = getFolderContextMenu(webpackFolderUrl));
        assert.sameMembers(items, [UIStrings.addDirectoryToIgnoreList]);
        notNull(callbacks.get(UIStrings.addDirectoryToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
    });
    it('enable ignore listing undoes disable', () => {
        // Ignore the folder
        let { items, callbacks } = getFolderContextMenu(sourceMapFolderUrl);
        assert.sameMembers(items, [UIStrings.addDirectoryToIgnoreList]);
        notNull(callbacks.get(UIStrings.addDirectoryToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile1UiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile2UiSourceCode));
        // Disable the folder ignore list rule by way of the script context menu
        ({ items, callbacks } = getContextMenu(sourceMapFile1UiSourceCode));
        assert.sameMembers(items, [UIStrings.removeFromIgnoreList]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile1UiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile2UiSourceCode));
        // Verify that we have option to add folder to ignore list (but we won't use it)
        ({ items, callbacks } = getFolderContextMenu(sourceMapFolderUrl));
        assert.sameMembers(items, [UIStrings.addDirectoryToIgnoreList]);
        // Reenable from same context menu on same file
        ({ items, callbacks } = getContextMenu(sourceMapFile1UiSourceCode));
        assert.sameMembers(items, [UIStrings.addScriptToIgnoreList]);
        notNull(callbacks.get(UIStrings.addScriptToIgnoreList))();
        // This undoes the disable -- reenabling the directory rule
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile1UiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile2UiSourceCode));
        // Verify that we have option to remove folder from ignore list
        ({ items, callbacks } = getFolderContextMenu(sourceMapFolderUrl));
        assert.sameMembers(items, [UIStrings.removeFromIgnoreList]);
        // Remove folder from ignore list to verify there are no other ignore listing rules
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile1UiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile2UiSourceCode));
    });
    it('enable ignore listing does not undo disable if done from a different file', () => {
        // Ignore the folder
        let { items, callbacks } = getFolderContextMenu(sourceMapFolderUrl);
        assert.sameMembers(items, [UIStrings.addDirectoryToIgnoreList]);
        notNull(callbacks.get(UIStrings.addDirectoryToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile1UiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile2UiSourceCode));
        // Disable the folder ignore list rule by way of the script context menu
        ({ items, callbacks } = getContextMenu(sourceMapFile1UiSourceCode));
        assert.sameMembers(items, [UIStrings.removeFromIgnoreList]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile1UiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile2UiSourceCode));
        // Enable ignore listing on a different file in same folder
        ({ items, callbacks } = getContextMenu(sourceMapFile2UiSourceCode));
        assert.sameMembers(items, [UIStrings.addScriptToIgnoreList]);
        notNull(callbacks.get(UIStrings.addScriptToIgnoreList))();
        // This creates a rule for just that file
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile1UiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile2UiSourceCode));
    });
    it('script context menu enables global ignore listing toggle', () => {
        let { items, callbacks } = getContextMenu(webpackUiSourceCode);
        assert.sameMembers(items, [UIStrings.addScriptToIgnoreList]);
        notNull(callbacks.get(UIStrings.addScriptToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        ignoreListManager.enableIgnoreListing = false;
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        ({ items, callbacks } = getContextMenu(webpackUiSourceCode));
        assert.sameMembers(items, [UIStrings.addScriptToIgnoreList]);
        notNull(callbacks.get(UIStrings.addScriptToIgnoreList))();
        assert.isTrue(ignoreListManager.enableIgnoreListing);
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
    });
    it('content script context menu enables global ignore listing toggle', () => {
        ignoreListManager.enableIgnoreListing = false;
        const { items, callbacks } = getContextMenu(contentScriptUiSourceCode);
        assert.sameMembers(items, [UIStrings.addScriptToIgnoreList, UIStrings.addAllContentScriptsToIgnoreList]);
        notNull(callbacks.get(UIStrings.addAllContentScriptsToIgnoreList))();
        assert.isTrue(ignoreListManager.enableIgnoreListing);
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(contentScriptUiSourceCode));
    });
    it('third party script context menu enables global ignore listing toggle', () => {
        ignoreListManager.enableIgnoreListing = false;
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(thirdPartyUiSourceCode));
        const { items, callbacks } = getContextMenu(thirdPartyUiSourceCode);
        assert.sameMembers(items, [UIStrings.addScriptToIgnoreList, UIStrings.addAllThirdPartyScriptsToIgnoreList]);
        notNull(callbacks.get(UIStrings.addAllThirdPartyScriptsToIgnoreList))();
        assert.isTrue(ignoreListManager.enableIgnoreListing);
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(thirdPartyUiSourceCode));
    });
    it('provides no context menu items when all contents in folder are individually ignored', () => {
        let { items, callbacks } = getContextMenu(webpackUiSourceCode);
        assert.sameMembers(items, [UIStrings.addScriptToIgnoreList]);
        // Disable webpack script
        notNull(callbacks.get(UIStrings.addScriptToIgnoreList))();
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        // Get context menu for folder only containing the script we disabled
        ({ items, callbacks } = getFolderContextMenu(webpackFolderUrl));
        // Verify that no context menu items are provided
        assert.sameMembers(items, []);
    });
    describe('isUserOrSourceMapIgnoreListedUISourceCode', () => {
        it('ignores UISourceCodes that are marked', () => {
            const { uiSourceCode } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createContentProviderUISourceCode)({
                url: 'debugger://foo',
                projectType: _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.Debugger,
                mimeType: 'text/javascript',
            });
            uiSourceCode.markAsUnconditionallyIgnoreListed();
            assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        });
    });
});


/***/ }),

/***/ "./src/testing/UISourceCodeHelpers.ts":
/*!********************************************!*\
  !*** ./src/testing/UISourceCodeHelpers.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentProviderUISourceCode: () => (/* binding */ createContentProviderUISourceCode),
/* harmony export */   createContentProviderUISourceCodes: () => (/* binding */ createContentProviderUISourceCodes),
/* harmony export */   createFakeScriptMapping: () => (/* binding */ createFakeScriptMapping),
/* harmony export */   createFileSystemUISourceCode: () => (/* binding */ createFileSystemUISourceCode),
/* harmony export */   setupMockedUISourceCode: () => (/* binding */ setupMockedUISourceCode)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TestPlatformFileSystem_mimeType, _TestPlatformFileSystem_autoMapping, _TestFileSystem_content, _TestFileSystem_metadata;






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
    constructor(path, type, mimeType, autoMapping) {
        super(path, type);
        _TestPlatformFileSystem_mimeType.set(this, void 0);
        _TestPlatformFileSystem_autoMapping.set(this, void 0);
        __classPrivateFieldSet(this, _TestPlatformFileSystem_mimeType, mimeType, "f");
        __classPrivateFieldSet(this, _TestPlatformFileSystem_autoMapping, autoMapping, "f");
    }
    supportsAutomapping() {
        return __classPrivateFieldGet(this, _TestPlatformFileSystem_autoMapping, "f");
    }
    mimeFromPath(_path) {
        return __classPrivateFieldGet(this, _TestPlatformFileSystem_mimeType, "f");
    }
}
_TestPlatformFileSystem_mimeType = new WeakMap(), _TestPlatformFileSystem_autoMapping = new WeakMap();
class TestFileSystem extends _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.FileSystemWorkspaceBinding.FileSystem {
    constructor(options) {
        super(options.fileSystemWorkspaceBinding, options.platformFileSystem, options.workspace);
        _TestFileSystem_content.set(this, void 0);
        _TestFileSystem_metadata.set(this, void 0);
        __classPrivateFieldSet(this, _TestFileSystem_content, options.content, "f");
        __classPrivateFieldSet(this, _TestFileSystem_metadata, options.metadata, "f");
    }
    requestFileContent(_uiSourceCode) {
        return Promise.resolve(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentData.ContentData(__classPrivateFieldGet(this, _TestFileSystem_content, "f"), /* isBase64 */ false, 'text/plain'));
    }
    requestMetadata(_uiSourceCode) {
        return Promise.resolve(__classPrivateFieldGet(this, _TestFileSystem_metadata, "f"));
    }
}
_TestFileSystem_content = new WeakMap(), _TestFileSystem_metadata = new WeakMap();
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


/***/ })

}]);