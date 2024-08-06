"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_SourcesView_test_js"], {
"./panels/sources/SourcesView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.js */ "./panels/sources/components/components.js");
/* harmony import */var _sources_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sources.js */ "./panels/sources/sources.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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














(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.describeWithEnvironment)('SourcesView', function() {
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var actionRegistryInstance, workspace, targetManager, resourceMapping, debuggerWorkspaceBinding, breakpointManager;
        return _ts_generator(this, function(_state) {
            actionRegistryInstance = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ActionRegistry.ActionRegistry.instance({
                forceNew: true
            });
            workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance();
            targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
            resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceMapping.ResourceMapping(targetManager, workspace);
            debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
                forceNew: true,
                resourceMapping: resourceMapping,
                targetManager: targetManager
            });
            breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_4__.BreakpointManager.BreakpointManager.instance({
                forceNew: true,
                targetManager: targetManager,
                workspace: workspace,
                debuggerWorkspaceBinding: debuggerWorkspaceBinding
            });
            _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__.Persistence.PersistenceImpl.instance({
                forceNew: true,
                workspace: workspace,
                breakpointManager: breakpointManager
            });
            _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__.NetworkPersistenceManager.NetworkPersistenceManager.instance({
                forceNew: true,
                workspace: workspace
            });
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ShortcutRegistry.ShortcutRegistry.instance({
                forceNew: true,
                actionRegistry: actionRegistryInstance
            });
            return [
                2
            ];
        });
    }));
    it('creates new source view of updated type when renamed file requires a different viewer', /*#__PURE__*/ _async_to_generator(function() {
        var sourcesView, workspace, _createFileSystemUISourceCode, uiSourceCode, project;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sourcesView = new _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesView.SourcesView();
                    sourcesView.markAsRoot();
                    sourcesView.show(document.body);
                    workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance();
                    _createFileSystemUISourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createFileSystemUISourceCode)({
                        url: 'file:///path/to/overrides/example.html',
                        mimeType: 'text/html'
                    }), uiSourceCode = _createFileSystemUISourceCode.uiSourceCode, project = _createFileSystemUISourceCode.project;
                    project.canSetFileContent = function() {
                        return true;
                    };
                    project.rename = function(uiSourceCode, newName, callback) {
                        var newURL = 'file:///path/to/overrides/' + newName;
                        var newContentType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document;
                        if (newName.endsWith('.jpg')) {
                            newContentType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Image;
                        } else if (newName.endsWith('.woff')) {
                            newContentType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Font;
                        }
                        callback(true, newName, newURL, newContentType);
                    };
                    sourcesView.viewForFile(uiSourceCode);
                    assert.isTrue(_instanceof(sourcesView.getSourceView(uiSourceCode), _sources_js__WEBPACK_IMPORTED_MODULE_13__.UISourceCodeFrame.UISourceCodeFrame));
                    // Rename, but contentType stays the same
                    return [
                        4,
                        uiSourceCode.rename('newName.html')
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(_instanceof(sourcesView.getSourceView(uiSourceCode), _sources_js__WEBPACK_IMPORTED_MODULE_13__.UISourceCodeFrame.UISourceCodeFrame));
                    // Rename which changes contentType
                    return [
                        4,
                        uiSourceCode.rename('image.jpg')
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(_instanceof(sourcesView.getSourceView(uiSourceCode), _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__.ImageView.ImageView));
                    // Rename which changes contentType
                    return [
                        4,
                        uiSourceCode.rename('font.woff')
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(_instanceof(sourcesView.getSourceView(uiSourceCode), _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__.FontView.FontView));
                    workspace.removeProject(project);
                    sourcesView.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('creates a HeadersView when the filename is \'.headers\'', /*#__PURE__*/ _async_to_generator(function() {
        var sourcesView, uiSourceCode;
        return _ts_generator(this, function(_state) {
            sourcesView = new _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesView.SourcesView();
            uiSourceCode = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.UISourceCode({}, 'file:///path/to/overrides/www.example.com/.headers', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document);
            sourcesView.viewForFile(uiSourceCode);
            assert.isTrue(_instanceof(sourcesView.getSourceView(uiSourceCode), _components_components_js__WEBPACK_IMPORTED_MODULE_12__.HeadersView.HeadersView));
            return [
                2
            ];
        });
    }));
    describe('viewForFile', function() {
        it('records the correct media type in the DevTools.SourcesPanelFileOpened metric', /*#__PURE__*/ _async_to_generator(function() {
            var sourcesView, uiSourceCode, sourcesPanelFileOpenedSpy, contentLoadedPromise, widget, uiSourceCodeFrame;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        sourcesView = new _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesView.SourcesView();
                        uiSourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createFileSystemUISourceCode)({
                            url: 'file:///path/to/project/example.ts',
                            mimeType: 'text/typescript',
                            content: 'export class Foo {}'
                        }).uiSourceCode;
                        sourcesPanelFileOpenedSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'sourcesPanelFileOpened');
                        contentLoadedPromise = new Promise(function(res) {
                            return window.addEventListener('source-file-loaded', res);
                        });
                        widget = sourcesView.viewForFile(uiSourceCode);
                        assert.instanceOf(widget, _sources_js__WEBPACK_IMPORTED_MODULE_13__.UISourceCodeFrame.UISourceCodeFrame);
                        uiSourceCodeFrame = widget;
                        // Skip creating the DebuggerPlugin, which times out and simulate DOM attach/showing.
                        sinon.stub(uiSourceCodeFrame, 'loadPlugins').callsFake(function() {});
                        uiSourceCodeFrame.wasShown();
                        return [
                            4,
                            contentLoadedPromise
                        ];
                    case 1:
                        _state.sent();
                        assert.isTrue(sourcesPanelFileOpenedSpy.calledWithExactly('text/typescript'));
                        return [
                            2
                        ];
                }
            });
        }));
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.describeWithMockConnection)('SourcesView', function() {
    var target1;
    var target2;
    beforeEach(function() {
        var actionRegistryInstance = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ActionRegistry.ActionRegistry.instance({
            forceNew: true
        });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ShortcutRegistry.ShortcutRegistry.instance({
            forceNew: true,
            actionRegistry: actionRegistryInstance
        });
        target1 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
        target2 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
        var targetManager = target1.targetManager();
        targetManager.setScopeTarget(target1);
        var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance();
        var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceMapping.ResourceMapping(targetManager, workspace);
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        var debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.IgnoreListManager.IgnoreListManager.instance({
            forceNew: true,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
        var breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_4__.BreakpointManager.BreakpointManager.instance({
            forceNew: true,
            targetManager: targetManager,
            workspace: workspace,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__.Persistence.PersistenceImpl.instance({
            forceNew: true,
            workspace: workspace,
            breakpointManager: breakpointManager
        });
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__.NetworkPersistenceManager.NetworkPersistenceManager.instance({
            forceNew: true,
            workspace: workspace
        });
    });
    it('creates editor tabs only for in-scope uiSourceCodes', function() {
        var addUISourceCodeSpy = sinon.spy(_sources_js__WEBPACK_IMPORTED_MODULE_13__.TabbedEditorContainer.TabbedEditorContainer.prototype, 'addUISourceCode');
        var removeUISourceCodesSpy = sinon.spy(_sources_js__WEBPACK_IMPORTED_MODULE_13__.TabbedEditorContainer.TabbedEditorContainer.prototype, 'removeUISourceCodes');
        (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createContentProviderUISourceCodes)({
            items: [
                {
                    url: 'http://example.com/a.js',
                    mimeType: 'application/javascript'
                },
                {
                    url: 'http://example.com/b.js',
                    mimeType: 'application/javascript'
                }
            ],
            projectId: 'projectId1',
            projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
            target: target1
        });
        (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createContentProviderUISourceCodes)({
            items: [
                {
                    url: 'http://foo.com/script.js',
                    mimeType: 'application/javascript'
                }
            ],
            projectId: 'projectId2',
            projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
            target: target2
        });
        new _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesView.SourcesView();
        var addedURLs = addUISourceCodeSpy.args.map(function(args) {
            return args[0].url();
        });
        assert.deepEqual(addedURLs, [
            'http://example.com/a.js',
            'http://example.com/b.js'
        ]);
        assert.isTrue(removeUISourceCodesSpy.notCalled);
        addUISourceCodeSpy.resetHistory();
        target2.targetManager().setScopeTarget(target2);
        addedURLs = addUISourceCodeSpy.args.map(function(args) {
            return args[0].url();
        });
        assert.deepEqual(addedURLs, [
            'http://foo.com/script.js'
        ]);
        var removedURLs = removeUISourceCodesSpy.args.map(function(args) {
            return args[0][0].url();
        });
        assert.deepEqual(removedURLs, [
            'http://example.com/a.js',
            'http://example.com/b.js'
        ]);
    });
    it('doesn\'t remove non-network UISourceCodes when changing the scope target', function() {
        (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createFileSystemUISourceCode)({
            url: 'snippet:///foo.js',
            mimeType: 'application/javascript',
            type: 'snippets'
        });
        var sourcesView = new _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesView.SourcesView();
        var removeUISourceCodesSpy = sinon.spy(sourcesView.editorContainer, 'removeUISourceCodes');
        target2.targetManager().setScopeTarget(target2);
        assert.isTrue(removeUISourceCodesSpy.notCalled);
    });
}); //# sourceMappingURL=SourcesView.test.js.map


}),

}]);