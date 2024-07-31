"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_bindings_ResourceMapping_test_ts"],{

/***/ "./src/models/bindings/ResourceMapping.test.ts":
/*!*****************************************************!*\
  !*** ./src/models/bindings/ResourceMapping.test.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bindings.js */ "./src/models/bindings/bindings.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('ResourceMapping', () => {
    let debuggerModel;
    let resourceMapping;
    let uiSourceCode;
    let workspace;
    let target;
    // This test simulates the behavior of the ResourceMapping with the
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
    const SCRIPTS = [
        {
            scriptId: '1',
            startLine: 4,
            startColumn: 8,
            endLine: 8,
            endColumn: 0,
            sourceURL: 'webpack:///src/foo.js',
            hasSourceURLComment: true,
        },
        {
            scriptId: '2',
            startLine: 11,
            startColumn: 8,
            endLine: 11,
            endColumn: 27,
            sourceURL: url,
            hasSourceURLComment: false,
        },
    ];
    const OTHER_SCRIPT_ID = '3';
    beforeEach(async () => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const targetManager = target.targetManager();
        targetManager.setScopeTarget(target);
        workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
        resourceMapping = new _bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceMapping.ResourceMapping(targetManager, workspace);
        _bindings_js__WEBPACK_IMPORTED_MODULE_6__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance({ forceNew: true, resourceMapping, targetManager });
        _bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({ forceNew: true, resourceMapping, targetManager });
        // Inject the HTML document resource.
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createResource)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target), url, 'text/html', '');
        uiSourceCode = workspace.uiSourceCodeForURL(url);
        assert.isNotNull(uiSourceCode);
        // Register the inline <script>s.
        const hash = '';
        const length = 0;
        const embedderName = url;
        const executionContextId = 1;
        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerModel);
        SCRIPTS.forEach(({ scriptId, startLine, startColumn, endLine, endColumn, sourceURL, hasSourceURLComment }) => {
            debuggerModel.parsedScriptSource(scriptId, sourceURL, startLine, startColumn, endLine, endColumn, executionContextId, hash, undefined, false, undefined, hasSourceURLComment, false, length, false, null, null, null, null, embedderName);
        });
        assert.lengthOf(debuggerModel.scripts(), SCRIPTS.length);
    });
    it('creates UISourceCode for added target', () => {
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel);
        resourceMapping.modelRemoved(resourceTreeModel);
        assert.isNull(workspace.uiSourceCodeForURL(url));
        resourceMapping.modelAdded(resourceTreeModel);
        assert.isNotNull(workspace.uiSourceCodeForURL(url));
    });
    it('creates UISourceCode for added out of scope target', () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(null);
        const otherUrl = 'http://example.com/other.html';
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createResource)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target), otherUrl, 'text/html', '');
        uiSourceCode = workspace.uiSourceCodeForURL(otherUrl);
        assert.isNotNull(uiSourceCode);
    });
    describe('uiLocationToJSLocations', () => {
        it('does not map locations outside of <script> tags', () => {
            assert.isEmpty(resourceMapping.uiLocationToJSLocations(uiSourceCode, 0, 0));
            SCRIPTS.forEach(({ startLine, startColumn, endLine, endColumn }) => {
                assert.isEmpty(resourceMapping.uiLocationToJSLocations(uiSourceCode, startLine, startColumn - 1));
                assert.isEmpty(resourceMapping.uiLocationToJSLocations(uiSourceCode, endLine, endColumn));
            });
            assert.isEmpty(resourceMapping.uiLocationToJSLocations(uiSourceCode, 12, 1));
        });
        it('correctly maps inline <script> with a //# sourceURL annotation', () => {
            const { scriptId, startLine, startColumn, endLine, endColumn } = SCRIPTS[0];
            // Debugger locations in scripts with sourceURL annotations are relative to the beginning
            // of the script, rather than relative to the start of the surrounding document.
            assert.deepEqual(resourceMapping.uiLocationToJSLocations(uiSourceCode, startLine, startColumn), [
                debuggerModel.createRawLocationByScriptId(scriptId, 0, 0),
            ]);
            assert.deepEqual(resourceMapping.uiLocationToJSLocations(uiSourceCode, startLine, startColumn + 3), [
                // This location does not actually exist in the simulated document, but
                // the ResourceMapping doesn't know (and shouldn't care) about that.
                debuggerModel.createRawLocationByScriptId(scriptId, 0, 3),
            ]);
            assert.deepEqual(resourceMapping.uiLocationToJSLocations(uiSourceCode, startLine + 1, 5), [
                debuggerModel.createRawLocationByScriptId(scriptId, 1, 5),
            ]);
            assert.deepEqual(resourceMapping.uiLocationToJSLocations(uiSourceCode, endLine - 1, endColumn), [
                debuggerModel.createRawLocationByScriptId(scriptId, endLine - startLine - 1, endColumn),
            ]);
        });
        it('correctly maps inline <script> without //# sourceURL annotation', () => {
            const { scriptId, startLine, startColumn, endLine, endColumn } = SCRIPTS[1];
            // Debugger locations in scripts without sourceURL annotations are relative to the
            // beginning of the surrounding document, so this is basically a 1-1 mapping.
            assert.strictEqual(endLine, startLine);
            for (let column = startColumn; column < endColumn; ++column) {
                assert.deepEqual(resourceMapping.uiLocationToJSLocations(uiSourceCode, startLine, column), [
                    debuggerModel.createRawLocationByScriptId(scriptId, startLine, column),
                ]);
            }
        });
    });
    describe('uiLocationRangeToRSLocationRanges', () => {
        it('correctly reports all inline <script>s when querying the whole document', () => {
            const rawLocationRanges = resourceMapping.uiLocationRangeToJSLocationRanges(uiSourceCode, new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextRange.TextRange(0, 0, 14, 0));
            assert.exists(rawLocationRanges);
            assert.lengthOf(rawLocationRanges, SCRIPTS.length);
            for (let i = 0; i < SCRIPTS.length; ++i) {
                let { startLine, startColumn, endLine, endColumn } = SCRIPTS[i];
                const { scriptId, hasSourceURLComment } = SCRIPTS[i];
                const { start, end } = rawLocationRanges[i];
                assert.strictEqual(start.scriptId, scriptId);
                assert.strictEqual(end.scriptId, scriptId);
                if (hasSourceURLComment) {
                    if (endLine === startLine) {
                        endColumn -= startColumn;
                    }
                    endLine -= startLine;
                    startLine = 0;
                    startColumn = 0;
                }
                assert.strictEqual(start.lineNumber, startLine);
                assert.strictEqual(start.columnNumber, startColumn);
                assert.strictEqual(end.lineNumber, endLine);
                assert.strictEqual(end.columnNumber, endColumn);
            }
        });
    });
    describe('jsLocationToUILocation', () => {
        it('does not map locations of unrelated scripts', () => {
            assert.isNull(resourceMapping.jsLocationToUILocation(debuggerModel.createRawLocationByScriptId(OTHER_SCRIPT_ID, 1, 1)));
            SCRIPTS.forEach(({ startLine, startColumn, endLine, endColumn }) => {
                // Check that we also don't reverse map locations that overlap with the existing script locations.
                assert.isNull(resourceMapping.jsLocationToUILocation(debuggerModel.createRawLocationByScriptId(OTHER_SCRIPT_ID, startLine, startColumn)));
                assert.isNull(resourceMapping.jsLocationToUILocation(debuggerModel.createRawLocationByScriptId(OTHER_SCRIPT_ID, endLine, endColumn)));
            });
        });
        it('correctly maps inline <script> with //# sourceURL annotation', () => {
            const { scriptId, startLine, startColumn, endLine, endColumn } = SCRIPTS[0];
            // Debugger locations in scripts with sourceURL annotations are relative to the beginning
            // of the script, rather than relative to the start of the surrounding document.
            assert.deepEqual(resourceMapping.jsLocationToUILocation(debuggerModel.createRawLocationByScriptId(scriptId, 0, 0)), new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocation(uiSourceCode, startLine, startColumn));
            assert.deepEqual(resourceMapping.jsLocationToUILocation(debuggerModel.createRawLocationByScriptId(scriptId, 0, 55)), 
            // This location does not actually exist in the simulated document, but
            // the ResourceMapping doesn't know (and shouldn't care) about that.
            new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocation(uiSourceCode, startLine, startColumn + 55));
            assert.deepEqual(resourceMapping.jsLocationToUILocation(debuggerModel.createRawLocationByScriptId(scriptId, 2, 0)), new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocation(uiSourceCode, startLine + 2, 0));
            assert.deepEqual(resourceMapping.jsLocationToUILocation(debuggerModel.createRawLocationByScriptId(scriptId, endLine - startLine, endColumn)), new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocation(uiSourceCode, endLine, endColumn));
        });
        it('correctly maps inline <script> without //# sourceURL annotation', () => {
            const { scriptId, startLine, startColumn, endLine, endColumn } = SCRIPTS[1];
            // Debugger locations in scripts without sourceURL annotations are relative to the
            // beginning of the surrounding document, so this is basically a 1-1 mapping.
            assert.strictEqual(endLine, startLine);
            for (let column = startColumn; column < endColumn; ++column) {
                assert.deepEqual(resourceMapping.jsLocationToUILocation(debuggerModel.createRawLocationByScriptId(scriptId, startLine, column)), new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocation(uiSourceCode, startLine, column));
            }
        });
    });
    describe('getMappedLines', () => {
        it('reports line numbers for all inline scripts', () => {
            const expectedLines = new Set();
            SCRIPTS.forEach(({ startLine, endLine }) => {
                for (let line = startLine; line <= endLine; ++line) {
                    expectedLines.add(line);
                }
            });
            const mappedLines = resourceMapping.getMappedLines(uiSourceCode);
            assert.deepEqual(mappedLines, expectedLines);
        });
    });
});


/***/ })

}]);