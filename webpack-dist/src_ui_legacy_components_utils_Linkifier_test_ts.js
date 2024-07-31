"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_utils_Linkifier_test_ts"],{

/***/ "./src/testing/ContextMenuHelpers.ts":
/*!*******************************************!*\
  !*** ./src/testing/ContextMenuHelpers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findMenuItemWithLabel: () => (/* binding */ findMenuItemWithLabel),
/* harmony export */   getContextMenuForElement: () => (/* binding */ getContextMenuForElement),
/* harmony export */   getMenuForShiftClick: () => (/* binding */ getMenuForShiftClick),
/* harmony export */   getMenuForToolbarButton: () => (/* binding */ getMenuForToolbarButton),
/* harmony export */   getMenuItemLabels: () => (/* binding */ getMenuItemLabels)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getMenu(action) {
    const sandbox = sinon.createSandbox();
    const contextMenuShow = sandbox.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ContextMenu.ContextMenu.prototype, 'show').resolves();
    action();
    sandbox.restore();
    return contextMenuShow.thisValues[0];
}
function getMenuForToolbarButton(button) {
    return getMenu(() => {
        button.clicked(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));
    });
}
function findMenuItemWithLabel(section, label) {
    return section.items.find((item) => item.buildDescriptor().label === label);
}
function getMenuItemLabels(section) {
    return section.items.map((item) => item.buildDescriptor().label);
}
function getContextMenuForElement(element, target) {
    return getMenu(() => {
        const event = new MouseEvent('contextmenu', { bubbles: true });
        if (target) {
            sinon.stub(event, 'target').value(target);
        }
        element.dispatchEvent(event);
    });
}
function getMenuForShiftClick(element) {
    return getMenu(() => {
        element.dispatchEvent(new MouseEvent('click', { shiftKey: true }));
    });
}


/***/ }),

/***/ "./src/ui/legacy/components/utils/Linkifier.test.ts":
/*!**********************************************************!*\
  !*** ./src/ui/legacy/components/utils/Linkifier.test.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/breakpoints/breakpoints.js */ "./src/models/breakpoints/breakpoints.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../testing/ContextMenuHelpers.js */ "./src/testing/ContextMenuHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../testing/MockScopeChain.js */ "./src/testing/MockScopeChain.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils.js */ "./src/ui/legacy/components/utils/utils.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











const scriptId1 = '1';
const scriptId2 = '2';
const executionContextId = 1234;
const simpleScriptContent = `
function foo(x) {
  const y = x + 3;
  return y;
}
`;
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.describeWithMockConnection)('Linkifier', () => {
    function setUpEnvironment() {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
        const linkifier = new _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier(100, false);
        linkifier.targetAdded(target);
        const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
        const forceNew = true;
        const targetManager = target.targetManager();
        const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
        const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew,
            resourceMapping,
            targetManager,
        });
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance({ forceNew, debuggerWorkspaceBinding });
        _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance({ forceNew, targetManager, workspace, debuggerWorkspaceBinding });
        const backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_8__.MockProtocolBackend();
        return { target, linkifier, backend };
    }
    describe('Linkifier.linkifyURL', () => {
        it('prefers text over the URL if it is present', async () => {
            const url = 'http://www.example.com';
            const link = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkifyURL(url, {
                text: 'foo',
                showColumnNumber: false,
                inlineFrameIndex: 1,
            });
            assert.strictEqual(link.innerText, 'foo');
        });
        it('falls back to the URL if given an empty text value', async () => {
            const url = 'http://www.example.com';
            const link = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkifyURL(url, {
                text: '',
                showColumnNumber: false,
                inlineFrameIndex: 1,
            });
            assert.strictEqual(link.innerText, 'www.example.com');
        });
        it('falls back to unknown if the URL and text are empty', async () => {
            const url = '';
            const link = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkifyURL(url, {
                text: '',
                showColumnNumber: false,
                inlineFrameIndex: 1,
            });
            assert.strictEqual(link.innerText, '(unknown)');
        });
    });
    it('creates an empty placeholder anchor if the debugger is disabled and no url exists', () => {
        const { target, linkifier } = setUpEnvironment();
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        void debuggerModel.suspendModel();
        const lineNumber = 4;
        const url = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString;
        const anchor = linkifier.maybeLinkifyScriptLocation(target, scriptId1, url, lineNumber);
        assert.exists(anchor);
        assert.strictEqual(anchor.textContent, '');
        const info = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkInfo(anchor);
        assert.exists(info);
        assert.isNull(info.uiLocation);
    });
    it('resolves url and updates link as soon as debugger is enabled', done => {
        const { target, linkifier } = setUpEnvironment();
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        void debuggerModel.suspendModel();
        const lineNumber = 4;
        // Explicitly set url to empty string and let it resolve through the live location.
        const url = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString;
        const anchor = linkifier.maybeLinkifyScriptLocation(target, scriptId1, url, lineNumber);
        assert.exists(anchor);
        assert.strictEqual(anchor.textContent, '');
        void debuggerModel.resumeModel();
        const scriptParsedEvent = {
            scriptId: scriptId1,
            url: 'https://www.google.com/script.js',
            startLine: 0,
            startColumn: 0,
            endLine: 10,
            endColumn: 10,
            executionContextId,
            hash: '',
            isLiveEdit: false,
            sourceMapURL: undefined,
            hasSourceURL: false,
            length: 10,
        };
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.dispatchEvent)(target, 'Debugger.scriptParsed', scriptParsedEvent);
        const callback = function (mutations) {
            for (const mutation of mutations) {
                if (mutation.type === 'childList') {
                    const info = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkInfo(anchor);
                    assert.exists(info);
                    assert.exists(info.uiLocation);
                    assert.strictEqual(anchor.textContent, `script.js:${lineNumber + 1}`);
                    observer.disconnect();
                    done();
                }
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(anchor, { childList: true });
    });
    it('always favors script ID over url', done => {
        const { target, linkifier } = setUpEnvironment();
        const lineNumber = 4;
        const url = 'https://www.google.com/script.js';
        const scriptParsedEvent1 = {
            scriptId: scriptId1,
            url,
            startLine: 0,
            startColumn: 0,
            endLine: 10,
            endColumn: 10,
            executionContextId,
            hash: '',
            isLiveEdit: false,
            sourceMapURL: undefined,
            hasSourceURL: false,
            length: 10,
        };
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.dispatchEvent)(target, 'Debugger.scriptParsed', scriptParsedEvent1);
        // Ask for a link to a script that has not been registered yet, but has the same url.
        const anchor = linkifier.maybeLinkifyScriptLocation(target, scriptId2, url, lineNumber);
        assert.exists(anchor);
        // This link should not pick up the first script with the same url, since there's no
        // warranty that the first script has anything to do with this one (other than having
        // the same url).
        const info = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkInfo(anchor);
        assert.exists(info);
        assert.isNull(info.uiLocation);
        const scriptParsedEvent2 = {
            scriptId: scriptId2,
            url,
            startLine: 0,
            startColumn: 0,
            endLine: 10,
            endColumn: 10,
            executionContextId,
            hash: '',
            isLiveEdit: false,
            sourceMapURL: undefined,
            hasSourceURL: false,
            length: 10,
        };
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.dispatchEvent)(target, 'Debugger.scriptParsed', scriptParsedEvent2);
        const callback = function (mutations) {
            for (const mutation of mutations) {
                if (mutation.type === 'childList') {
                    const info = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkInfo(anchor);
                    assert.exists(info);
                    assert.exists(info.uiLocation);
                    // Make sure that a uiSourceCode is linked to that anchor.
                    assert.exists(info.uiLocation.uiSourceCode);
                    observer.disconnect();
                    done();
                }
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(anchor, { childList: true });
    });
    it('optionally shows column numbers in the link text', done => {
        const { target, linkifier } = setUpEnvironment();
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        void debuggerModel.suspendModel();
        const lineNumber = 4;
        const options = { columnNumber: 8, showColumnNumber: true, inlineFrameIndex: 0 };
        // Explicitly set url to empty string and let it resolve through the live location.
        const url = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString;
        const anchor = linkifier.maybeLinkifyScriptLocation(target, scriptId1, url, lineNumber, options);
        assert.exists(anchor);
        assert.strictEqual(anchor.textContent, '');
        void debuggerModel.resumeModel();
        const scriptParsedEvent = {
            scriptId: scriptId1,
            url: 'https://www.google.com/script.js',
            startLine: 0,
            startColumn: 0,
            endLine: 10,
            endColumn: 10,
            executionContextId,
            hash: '',
            isLiveEdit: false,
            sourceMapURL: undefined,
            hasSourceURL: false,
            length: 10,
        };
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.dispatchEvent)(target, 'Debugger.scriptParsed', scriptParsedEvent);
        const callback = function (mutations) {
            for (const mutation of mutations) {
                if (mutation.type === 'childList') {
                    const info = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkInfo(anchor);
                    assert.exists(info);
                    assert.exists(info.uiLocation);
                    assert.strictEqual(anchor.textContent, `script.js:${lineNumber + 1}:${options.columnNumber + 1}`);
                    observer.disconnect();
                    done();
                }
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(anchor, { childList: true });
    });
    it('linkifyStackTraceTopFrame without a target returns an initiator link', () => {
        const lineNumber = 165;
        const { linkifier } = setUpEnvironment();
        const anchor = linkifier.linkifyStackTraceTopFrame(null, {
            callFrames: [{
                    url: 'https://w.com/a.js',
                    functionName: 'wow',
                    scriptId: '1',
                    lineNumber,
                    columnNumber: 15,
                }],
        });
        assert.exists(anchor);
        assert.strictEqual(anchor.textContent, `w.com/a.js:${lineNumber + 1}`);
    });
    describe('maybeLinkifyScriptLocation', () => {
        it('uses the BreakLocation as a revealable if the option is provided and a breakpoint is at the given location', async () => {
            const { target, linkifier, backend } = setUpEnvironment();
            const breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance();
            const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance();
            const lineNumber = 1;
            const columnNumber = 0;
            const url = 'https://www.google.com/script.js';
            const script = await backend.addScript(target, { content: simpleScriptContent, url }, null);
            const uiSourceCode = debuggerWorkspaceBinding.uiSourceCodeForScript(script);
            assert.exists(uiSourceCode);
            const responder = backend.responderToBreakpointByUrlRequest(url, lineNumber);
            void responder({
                breakpointId: 'BREAK_ID',
                locations: [
                    {
                        scriptId: script.scriptId,
                        lineNumber,
                        columnNumber,
                    },
                ],
            });
            const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, lineNumber, columnNumber, 'x', 
            /* enabled */ true, /* isLogpoint */ true, _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointOrigin.USER_ACTION);
            assert.exists(breakpoint);
            // Create a link that matches exactly the breakpoint location.
            const anchor = linkifier.maybeLinkifyScriptLocation(target, script.scriptId, url, lineNumber, { inlineFrameIndex: 0, revealBreakpoint: true });
            assert.exists(anchor);
            await debuggerWorkspaceBinding.pendingLiveLocationChangesPromise();
            // Assert that the linkinfo has the `BreakLocation` as its revealable.
            // When clicking the link, `revealables` have predecence over e.g. the
            // UILocation or url.
            const linkInfo = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkInfo(anchor);
            assert.exists(linkInfo);
            assert.propertyVal(linkInfo.revealable, 'breakpoint', breakpoint);
        });
        it('fires the LiveLocationUpdate event for each LiveLocation update', async () => {
            const { target, linkifier, backend } = setUpEnvironment();
            const eventCallback = sinon.stub();
            linkifier.addEventListener(_utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Events.LiveLocationUpdated, eventCallback);
            const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance();
            const lineNumber = 1;
            const url = 'https://www.google.com/script.js';
            const sourceMapContent = JSON.stringify({
                'version': 3,
                'names': ['adder', 'param1', 'param2', 'result'],
                'sources': ['/original-script.js'],
                'sourcesContent': ['function adder(param1, param2) {\n  const result = param1 + param2;\n  return result;\n}\n\n'],
                'mappings': 'AAAA,SAASA,MAAMC,EAAQC,GACrB,MAAMC,EAASF,EAASC,EACxB,OAAOC,CACT',
            });
            const script = await backend.addScript(target, { content: 'function adder(n,r){const t=n+r;return t}', url }, {
                url: 'https://www.google.com/script.js.map',
                content: sourceMapContent,
            });
            linkifier.maybeLinkifyScriptLocation(target, script.scriptId, url, lineNumber);
            await debuggerWorkspaceBinding.pendingLiveLocationChangesPromise();
            assert.isTrue(eventCallback.calledOnce);
            // Detach the source map and check we get the update event.
            const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
            assert.exists(debuggerModel);
            debuggerModel.sourceMapManager().detachSourceMap(script);
            await debuggerWorkspaceBinding.pendingLiveLocationChangesPromise();
            // We currently receive more than one event after detaching the source map.
            // This is also valid but might constitute unnecessary work.
            assert.isTrue(eventCallback.callCount >= 2);
        });
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.describeWithEnvironment)('ContentProviderContextMenuProvider', () => {
    it('does not add \'Open in new tab\'-entry for file URLs', async () => {
        const provider = new _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.ContentProviderContextMenuProvider();
        let contextMenu = new _legacy_js__WEBPACK_IMPORTED_MODULE_9__.ContextMenu.ContextMenu({});
        let uiSourceCode = {
            contentURL: () => 'https://www.example.com/index.html',
        };
        provider.appendApplicableItems({}, contextMenu, uiSourceCode);
        let openInNewTabItem = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_5__.findMenuItemWithLabel)(contextMenu.revealSection(), 'Open in new tab');
        assert.exists(openInNewTabItem);
        contextMenu = new _legacy_js__WEBPACK_IMPORTED_MODULE_9__.ContextMenu.ContextMenu({});
        uiSourceCode = {
            contentURL: () => 'file://usr/local/example/index.html',
        };
        provider.appendApplicableItems({}, contextMenu, uiSourceCode);
        openInNewTabItem = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_5__.findMenuItemWithLabel)(contextMenu.revealSection(), 'Open in new tab');
        assert.isUndefined(openInNewTabItem);
    });
});


/***/ })

}]);