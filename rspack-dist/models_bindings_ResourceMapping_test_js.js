"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_bindings_ResourceMapping_test_js"], {
"./models/bindings/ResourceMapping.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bindings.js */ "./models/bindings/bindings.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('ResourceMapping', function() {
    var debuggerModel;
    var resourceMapping;
    var uiSourceCode;
    var workspace;
    var target;
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
    var url = 'http://example.com/index.html';
    var SCRIPTS = [
        {
            scriptId: '1',
            startLine: 4,
            startColumn: 8,
            endLine: 8,
            endColumn: 0,
            sourceURL: 'webpack:///src/foo.js',
            hasSourceURLComment: true
        },
        {
            scriptId: '2',
            startLine: 11,
            startColumn: 8,
            endLine: 11,
            endColumn: 27,
            sourceURL: url,
            hasSourceURLComment: false
        }
    ];
    var OTHER_SCRIPT_ID = '3';
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var targetManager, hash, length, embedderName, executionContextId;
        return _ts_generator(this, function(_state) {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
            targetManager = target.targetManager();
            targetManager.setScopeTarget(target);
            workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
            resourceMapping = new _bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceMapping.ResourceMapping(targetManager, workspace);
            _bindings_js__WEBPACK_IMPORTED_MODULE_6__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance({
                forceNew: true,
                resourceMapping: resourceMapping,
                targetManager: targetManager
            });
            _bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
                forceNew: true,
                resourceMapping: resourceMapping,
                targetManager: targetManager
            });
            // Inject the HTML document resource.
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createResource)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target), url, 'text/html', '');
            uiSourceCode = workspace.uiSourceCodeForURL(url);
            assert.isNotNull(uiSourceCode);
            // Register the inline <script>s.
            hash = '';
            length = 0;
            embedderName = url;
            executionContextId = 1;
            debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerModel);
            SCRIPTS.forEach(function(param) {
                var scriptId = param.scriptId, startLine = param.startLine, startColumn = param.startColumn, endLine = param.endLine, endColumn = param.endColumn, sourceURL = param.sourceURL, hasSourceURLComment = param.hasSourceURLComment;
                debuggerModel.parsedScriptSource(scriptId, sourceURL, startLine, startColumn, endLine, endColumn, executionContextId, hash, undefined, false, undefined, hasSourceURLComment, false, length, false, null, null, null, null, embedderName);
            });
            assert.lengthOf(debuggerModel.scripts(), SCRIPTS.length);
            return [
                2
            ];
        });
    }));
    it('creates UISourceCode for added target', function() {
        var resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel);
        resourceMapping.modelRemoved(resourceTreeModel);
        assert.isNull(workspace.uiSourceCodeForURL(url));
        resourceMapping.modelAdded(resourceTreeModel);
        assert.isNotNull(workspace.uiSourceCodeForURL(url));
    });
    it('creates UISourceCode for added out of scope target', function() {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(null);
        var otherUrl = 'http://example.com/other.html';
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createResource)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target), otherUrl, 'text/html', '');
        uiSourceCode = workspace.uiSourceCodeForURL(otherUrl);
        assert.isNotNull(uiSourceCode);
    });
    describe('uiLocationToJSLocations', function() {
        it('does not map locations outside of <script> tags', function() {
            assert.isEmpty(resourceMapping.uiLocationToJSLocations(uiSourceCode, 0, 0));
            SCRIPTS.forEach(function(param) {
                var startLine = param.startLine, startColumn = param.startColumn, endLine = param.endLine, endColumn = param.endColumn;
                assert.isEmpty(resourceMapping.uiLocationToJSLocations(uiSourceCode, startLine, startColumn - 1));
                assert.isEmpty(resourceMapping.uiLocationToJSLocations(uiSourceCode, endLine, endColumn));
            });
            assert.isEmpty(resourceMapping.uiLocationToJSLocations(uiSourceCode, 12, 1));
        });
        it('correctly maps inline <script> with a //# sourceURL annotation', function() {
            var _SCRIPTS_ = SCRIPTS[0], scriptId = _SCRIPTS_.scriptId, startLine = _SCRIPTS_.startLine, startColumn = _SCRIPTS_.startColumn, endLine = _SCRIPTS_.endLine, endColumn = _SCRIPTS_.endColumn;
            // Debugger locations in scripts with sourceURL annotations are relative to the beginning
            // of the script, rather than relative to the start of the surrounding document.
            assert.deepEqual(resourceMapping.uiLocationToJSLocations(uiSourceCode, startLine, startColumn), [
                debuggerModel.createRawLocationByScriptId(scriptId, 0, 0)
            ]);
            assert.deepEqual(resourceMapping.uiLocationToJSLocations(uiSourceCode, startLine, startColumn + 3), [
                // This location does not actually exist in the simulated document, but
                // the ResourceMapping doesn't know (and shouldn't care) about that.
                debuggerModel.createRawLocationByScriptId(scriptId, 0, 3)
            ]);
            assert.deepEqual(resourceMapping.uiLocationToJSLocations(uiSourceCode, startLine + 1, 5), [
                debuggerModel.createRawLocationByScriptId(scriptId, 1, 5)
            ]);
            assert.deepEqual(resourceMapping.uiLocationToJSLocations(uiSourceCode, endLine - 1, endColumn), [
                debuggerModel.createRawLocationByScriptId(scriptId, endLine - startLine - 1, endColumn)
            ]);
        });
        it('correctly maps inline <script> without //# sourceURL annotation', function() {
            var _SCRIPTS_ = SCRIPTS[1], scriptId = _SCRIPTS_.scriptId, startLine = _SCRIPTS_.startLine, startColumn = _SCRIPTS_.startColumn, endLine = _SCRIPTS_.endLine, endColumn = _SCRIPTS_.endColumn;
            // Debugger locations in scripts without sourceURL annotations are relative to the
            // beginning of the surrounding document, so this is basically a 1-1 mapping.
            assert.strictEqual(endLine, startLine);
            for(var column = startColumn; column < endColumn; ++column){
                assert.deepEqual(resourceMapping.uiLocationToJSLocations(uiSourceCode, startLine, column), [
                    debuggerModel.createRawLocationByScriptId(scriptId, startLine, column)
                ]);
            }
        });
    });
    describe('uiLocationRangeToRSLocationRanges', function() {
        it('correctly reports all inline <script>s when querying the whole document', function() {
            var rawLocationRanges = resourceMapping.uiLocationRangeToJSLocationRanges(uiSourceCode, new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextRange.TextRange(0, 0, 14, 0));
            assert.exists(rawLocationRanges);
            assert.lengthOf(rawLocationRanges, SCRIPTS.length);
            for(var i = 0; i < SCRIPTS.length; ++i){
                var _SCRIPTS_i = SCRIPTS[i], startLine = _SCRIPTS_i.startLine, startColumn = _SCRIPTS_i.startColumn, endLine = _SCRIPTS_i.endLine, endColumn = _SCRIPTS_i.endColumn;
                var _SCRIPTS_i1 = SCRIPTS[i], scriptId = _SCRIPTS_i1.scriptId, hasSourceURLComment = _SCRIPTS_i1.hasSourceURLComment;
                var _rawLocationRanges_i = rawLocationRanges[i], start = _rawLocationRanges_i.start, end = _rawLocationRanges_i.end;
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
    describe('jsLocationToUILocation', function() {
        it('does not map locations of unrelated scripts', function() {
            assert.isNull(resourceMapping.jsLocationToUILocation(debuggerModel.createRawLocationByScriptId(OTHER_SCRIPT_ID, 1, 1)));
            SCRIPTS.forEach(function(param) {
                var startLine = param.startLine, startColumn = param.startColumn, endLine = param.endLine, endColumn = param.endColumn;
                // Check that we also don't reverse map locations that overlap with the existing script locations.
                assert.isNull(resourceMapping.jsLocationToUILocation(debuggerModel.createRawLocationByScriptId(OTHER_SCRIPT_ID, startLine, startColumn)));
                assert.isNull(resourceMapping.jsLocationToUILocation(debuggerModel.createRawLocationByScriptId(OTHER_SCRIPT_ID, endLine, endColumn)));
            });
        });
        it('correctly maps inline <script> with //# sourceURL annotation', function() {
            var _SCRIPTS_ = SCRIPTS[0], scriptId = _SCRIPTS_.scriptId, startLine = _SCRIPTS_.startLine, startColumn = _SCRIPTS_.startColumn, endLine = _SCRIPTS_.endLine, endColumn = _SCRIPTS_.endColumn;
            // Debugger locations in scripts with sourceURL annotations are relative to the beginning
            // of the script, rather than relative to the start of the surrounding document.
            assert.deepEqual(resourceMapping.jsLocationToUILocation(debuggerModel.createRawLocationByScriptId(scriptId, 0, 0)), new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocation(uiSourceCode, startLine, startColumn));
            assert.deepEqual(resourceMapping.jsLocationToUILocation(debuggerModel.createRawLocationByScriptId(scriptId, 0, 55)), // This location does not actually exist in the simulated document, but
            // the ResourceMapping doesn't know (and shouldn't care) about that.
            new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocation(uiSourceCode, startLine, startColumn + 55));
            assert.deepEqual(resourceMapping.jsLocationToUILocation(debuggerModel.createRawLocationByScriptId(scriptId, 2, 0)), new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocation(uiSourceCode, startLine + 2, 0));
            assert.deepEqual(resourceMapping.jsLocationToUILocation(debuggerModel.createRawLocationByScriptId(scriptId, endLine - startLine, endColumn)), new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocation(uiSourceCode, endLine, endColumn));
        });
        it('correctly maps inline <script> without //# sourceURL annotation', function() {
            var _SCRIPTS_ = SCRIPTS[1], scriptId = _SCRIPTS_.scriptId, startLine = _SCRIPTS_.startLine, startColumn = _SCRIPTS_.startColumn, endLine = _SCRIPTS_.endLine, endColumn = _SCRIPTS_.endColumn;
            // Debugger locations in scripts without sourceURL annotations are relative to the
            // beginning of the surrounding document, so this is basically a 1-1 mapping.
            assert.strictEqual(endLine, startLine);
            for(var column = startColumn; column < endColumn; ++column){
                assert.deepEqual(resourceMapping.jsLocationToUILocation(debuggerModel.createRawLocationByScriptId(scriptId, startLine, column)), new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocation(uiSourceCode, startLine, column));
            }
        });
    });
    describe('getMappedLines', function() {
        it('reports line numbers for all inline scripts', function() {
            var expectedLines = new Set();
            SCRIPTS.forEach(function(param) {
                var startLine = param.startLine, endLine = param.endLine;
                for(var line = startLine; line <= endLine; ++line){
                    expectedLines.add(line);
                }
            });
            var mappedLines = resourceMapping.getMappedLines(uiSourceCode);
            assert.deepEqual(mappedLines, expectedLines);
        });
    });
}); //# sourceMappingURL=ResourceMapping.test.js.map


}),

}]);