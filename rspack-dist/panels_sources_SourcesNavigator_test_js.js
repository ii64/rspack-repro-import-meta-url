"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_SourcesNavigator_test_js"], {
"./panels/sources/SourcesNavigator.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./testing/MockScopeChain.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _sources_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sources.js */ "./panels/sources/sources.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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














(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.describeWithMockConnection)('NetworkNavigatorView', function() {
    var workspace;
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var actionRegistryInstance, targetManager, resourceMapping, debuggerWorkspaceBinding, breakpointManager;
        return _ts_generator(this, function(_state) {
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_10__.setMockResourceTree)(false);
            actionRegistryInstance = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ActionRegistry.ActionRegistry.instance({
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
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.IgnoreListManager.IgnoreListManager.instance({
                forceNew: true,
                debuggerWorkspaceBinding: debuggerWorkspaceBinding
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
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ShortcutRegistry.ShortcutRegistry.instance({
                forceNew: true,
                actionRegistry: actionRegistryInstance
            });
            _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.register("authored-deployed-grouping" /* Root.Runtime.ExperimentName.AUTHORED_DEPLOYED_GROUPING */ , '');
            _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.register("just-my-code" /* Root.Runtime.ExperimentName.JUST_MY_CODE */ , '');
            return [
                2
            ];
        });
    }));
    describe('reveals main target', function() {
        var target;
        var project;
        beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            var tabTarget;
            return _ts_generator(this, function(_state) {
                tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)({
                    type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Tab
                });
                (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)({
                    parentTarget: tabTarget,
                    subtype: 'prerender'
                });
                target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)({
                    parentTarget: tabTarget
                });
                project = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                    items: [
                        {
                            url: 'http://example.com/',
                            mimeType: 'text/html'
                        },
                        {
                            url: 'http://example.com/favicon.ico',
                            mimeType: 'image/x-icon'
                        },
                        {
                            url: 'http://example.com/gtm.js',
                            mimeType: 'application/javascript'
                        }
                    ],
                    projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                    target: target
                }).project;
                return [
                    2
                ];
            });
        }));
        afterEach(function() {
            _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance().removeProject(project);
        });
        it('shows folder with scripts requests', /*#__PURE__*/ _async_to_generator(function() {
            var project, navigatorView, rootElement, folder, file;
            return _ts_generator(this, function(_state) {
                project = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                    items: [
                        {
                            url: 'http://example.com/script.js',
                            mimeType: 'application/javascript',
                            resourceType: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script
                        }
                    ],
                    projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                    target: target
                }).project;
                navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({
                    forceNew: true
                });
                rootElement = navigatorView.scriptsTree.rootElement();
                folder = rootElement.firstChild();
                file = folder === null || folder === void 0 ? void 0 : folder.firstChild();
                assert.strictEqual(folder === null || folder === void 0 ? void 0 : folder.title, 'example.com');
                assert.strictEqual(file === null || file === void 0 ? void 0 : file.title, 'script.js');
                project.removeProject();
                return [
                    2
                ];
            });
        }));
        it('does not show Fetch and XHR requests', /*#__PURE__*/ _async_to_generator(function() {
            var project, navigatorView, rootElement;
            return _ts_generator(this, function(_state) {
                project = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                    items: [
                        {
                            url: 'http://example.com/list-xhr.json',
                            mimeType: 'application/json',
                            resourceType: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.XHR
                        },
                        {
                            url: 'http://example.com/list-fetch.json',
                            mimeType: 'application/json',
                            resourceType: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Fetch
                        }
                    ],
                    projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                    target: target
                }).project;
                navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({
                    forceNew: true
                });
                rootElement = navigatorView.scriptsTree.rootElement();
                assert.strictEqual(rootElement.children().length, 0);
                project.removeProject();
                return [
                    2
                ];
            });
        }));
        it('reveals main frame target on navigation', /*#__PURE__*/ _async_to_generator(function() {
            var _rootElement_firstChild, _rootElement_firstChild1, _rootElement_firstChild2, _navigatorView_scriptsTree_firstChild, _navigatorView_scriptsTree_firstChild_firstChild, _navigatorView_scriptsTree_firstChild1, navigatorView, rootElement;
            return _ts_generator(this, function(_state) {
                navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({
                    forceNew: true
                });
                rootElement = navigatorView.scriptsTree.rootElement();
                assert.strictEqual(rootElement.childCount(), 1);
                assert.strictEqual((_rootElement_firstChild = rootElement.firstChild()) === null || _rootElement_firstChild === void 0 ? void 0 : _rootElement_firstChild.childCount(), 3);
                assert.isFalse((_rootElement_firstChild1 = rootElement.firstChild()) === null || _rootElement_firstChild1 === void 0 ? void 0 : _rootElement_firstChild1.expanded);
                assert.isTrue((_rootElement_firstChild2 = rootElement.firstChild()) === null || _rootElement_firstChild2 === void 0 ? void 0 : _rootElement_firstChild2.selected);
                target.setInspectedURL('http://example.com/');
                assert.isTrue((_navigatorView_scriptsTree_firstChild = navigatorView.scriptsTree.firstChild()) === null || _navigatorView_scriptsTree_firstChild === void 0 ? void 0 : _navigatorView_scriptsTree_firstChild.expanded);
                assert.isTrue((_navigatorView_scriptsTree_firstChild1 = navigatorView.scriptsTree.firstChild()) === null || _navigatorView_scriptsTree_firstChild1 === void 0 ? void 0 : (_navigatorView_scriptsTree_firstChild_firstChild = _navigatorView_scriptsTree_firstChild1.firstChild()) === null || _navigatorView_scriptsTree_firstChild_firstChild === void 0 ? void 0 : _navigatorView_scriptsTree_firstChild_firstChild.selected);
                return [
                    2
                ];
            });
        }));
        it('reveals main frame target when added', /*#__PURE__*/ _async_to_generator(function() {
            var _rootElement_firstChild, _navigatorView_scriptsTree_firstChild, _navigatorView_scriptsTree_firstChild_firstChild, _navigatorView_scriptsTree_firstChild1, navigatorView, rootElement;
            return _ts_generator(this, function(_state) {
                target.setInspectedURL('http://example.com/');
                navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({
                    forceNew: true
                });
                rootElement = navigatorView.scriptsTree.rootElement();
                assert.strictEqual(rootElement.childCount(), 1);
                assert.strictEqual((_rootElement_firstChild = rootElement.firstChild()) === null || _rootElement_firstChild === void 0 ? void 0 : _rootElement_firstChild.childCount(), 3);
                assert.isTrue((_navigatorView_scriptsTree_firstChild = navigatorView.scriptsTree.firstChild()) === null || _navigatorView_scriptsTree_firstChild === void 0 ? void 0 : _navigatorView_scriptsTree_firstChild.expanded);
                assert.isTrue((_navigatorView_scriptsTree_firstChild1 = navigatorView.scriptsTree.firstChild()) === null || _navigatorView_scriptsTree_firstChild1 === void 0 ? void 0 : (_navigatorView_scriptsTree_firstChild_firstChild = _navigatorView_scriptsTree_firstChild1.firstChild()) === null || _navigatorView_scriptsTree_firstChild_firstChild === void 0 ? void 0 : _navigatorView_scriptsTree_firstChild_firstChild.selected);
                return [
                    2
                ];
            });
        }));
    });
    it('updates in scope change', function() {
        var _rootElement_firstChild, _rootElement_firstChild1, _rootElement_firstChild2, _rootElement_firstChild3;
        var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
        var project = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
            items: [
                {
                    url: 'http://example.com/',
                    mimeType: 'text/html'
                },
                {
                    url: 'http://example.com/favicon.ico',
                    mimeType: 'image/x-icon'
                },
                {
                    url: 'http://example.com/gtm.js',
                    mimeType: 'application/javascript'
                }
            ],
            projectId: 'project',
            projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
            target: target
        }).project;
        var anotherTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
        var _createContentProviderUISourceCodes = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
            items: [
                {
                    url: 'http://example.org/',
                    mimeType: 'text/html'
                },
                {
                    url: 'http://example.org/background.bmp',
                    mimeType: 'image/x-icon'
                }
            ],
            projectId: 'anotherProject',
            projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
            target: anotherTarget
        }), anotherProject = _createContentProviderUISourceCodes.project;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
        var navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({
            forceNew: true
        });
        var rootElement = navigatorView.scriptsTree.rootElement();
        assert.strictEqual(rootElement.childCount(), 1);
        assert.strictEqual((_rootElement_firstChild = rootElement.firstChild()) === null || _rootElement_firstChild === void 0 ? void 0 : _rootElement_firstChild.childCount(), 3);
        assert.deepEqual((_rootElement_firstChild1 = rootElement.firstChild()) === null || _rootElement_firstChild1 === void 0 ? void 0 : _rootElement_firstChild1.children().map(function(i) {
            return i.title;
        }), [
            '(index)',
            'gtm.js',
            'favicon.ico'
        ]);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(anotherTarget);
        rootElement = navigatorView.scriptsTree.rootElement();
        assert.strictEqual(rootElement.childCount(), 1);
        assert.strictEqual((_rootElement_firstChild2 = rootElement.firstChild()) === null || _rootElement_firstChild2 === void 0 ? void 0 : _rootElement_firstChild2.childCount(), 2);
        assert.deepEqual((_rootElement_firstChild3 = rootElement.firstChild()) === null || _rootElement_firstChild3 === void 0 ? void 0 : _rootElement_firstChild3.children().map(function(i) {
            return i.title;
        }), [
            '(index)',
            'background.bmp'
        ]);
        project.removeProject();
        anotherProject.removeProject();
    });
    describe('removing source codes selection throttling', function() {
        var target;
        beforeEach(function() {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
        });
        it('selects just once when removing multiple sibling source codes', function() {
            var project = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
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
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                target: target
            }).project;
            var _createContentProviderUISourceCodes = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                items: [
                    {
                        url: 'http://example.com/c.js',
                        mimeType: 'application/javascript'
                    }
                ],
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                projectId: 'other',
                target: target
            }), otherProject = _createContentProviderUISourceCodes.project;
            var navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({
                forceNew: true
            });
            var rootElement = navigatorView.scriptsTree.rootElement();
            var exampleComNode = rootElement.firstChild();
            assert.exists(exampleComNode);
            var nodeA = exampleComNode.childAt(0);
            var nodeB = exampleComNode.childAt(1);
            var nodeC = exampleComNode.childAt(2);
            assert.exists(nodeA);
            assert.exists(nodeB);
            assert.exists(nodeC);
            // Select the 'http://example.com/a.js' node. Remove the project with a.js and b.js and verify
            // that the selection is moved from 'a.js' to 'c.js', without temporarily selecting 'b.js'.
            nodeA.select();
            var nodeBSelectSpy = sinon.spy(nodeB, 'select');
            var nodeCSelectSpy = sinon.spy(nodeC, 'select');
            project.removeProject();
            assert.isTrue(nodeBSelectSpy.notCalled);
            assert.isTrue(nodeCSelectSpy.called);
            otherProject.removeProject();
        });
        it('selects parent after removing all children', function() {
            var project = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                items: [
                    {
                        url: 'http://example.com/a.js',
                        mimeType: 'application/javascript'
                    },
                    {
                        url: 'http://example.com/b.js',
                        mimeType: 'application/javascript'
                    },
                    {
                        url: 'http://example.com/c.js',
                        mimeType: 'application/javascript'
                    }
                ],
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                target: target
            }).project;
            var navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({
                forceNew: true
            });
            var rootElement = navigatorView.scriptsTree.rootElement();
            var nodeExampleCom = rootElement.firstChild();
            assert.exists(nodeExampleCom);
            var nodeA = nodeExampleCom.childAt(0);
            var nodeB = nodeExampleCom.childAt(1);
            var nodeC = nodeExampleCom.childAt(2);
            assert.exists(nodeA);
            assert.exists(nodeB);
            assert.exists(nodeC);
            // Select the 'http://example.com/a.js' node. Remove all the source codenodes and check the selection
            // is not propagated forward to the siblings as we remove them. Instead, the selection will be moved
            // directly to the parent.
            nodeA.select();
            var nodeBSelectSpy = sinon.spy(nodeB, 'select');
            var nodeCSelectSpy = sinon.spy(nodeC, 'select');
            var nodeExampleComSelectSpy = sinon.spy(nodeExampleCom, 'select');
            project.removeProject();
            assert.isTrue(nodeBSelectSpy.notCalled);
            assert.isTrue(nodeCSelectSpy.notCalled);
            assert.isTrue(nodeExampleComSelectSpy.called);
            // Note that the last asserion is slightly misleading since the empty example.com node is removed.
            // Let us make that clear here.
            assert.strictEqual(rootElement.childCount(), 0);
        });
        it('selects sibling after removing folder children', /*#__PURE__*/ _async_to_generator(function() {
            var project, _createContentProviderUISourceCodes, otherProject, navigatorView, rootElement, exampleComNode, nodeD, nodeA, nodeB, nodeC, nodeBSelectSpy, nodeCSelectSpy;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        project = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                            items: [
                                {
                                    url: 'http://example.com/d/a.js',
                                    mimeType: 'application/javascript'
                                },
                                {
                                    url: 'http://example.com/d/b.js',
                                    mimeType: 'application/javascript'
                                }
                            ],
                            projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                            target: target
                        }).project;
                        _createContentProviderUISourceCodes = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                            items: [
                                {
                                    url: 'http://example.com/c.js',
                                    mimeType: 'application/javascript'
                                }
                            ],
                            projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                            projectId: 'other',
                            target: target
                        }), otherProject = _createContentProviderUISourceCodes.project;
                        navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({
                            forceNew: true
                        });
                        rootElement = navigatorView.scriptsTree.rootElement();
                        exampleComNode = rootElement.firstChild();
                        assert.exists(exampleComNode);
                        nodeD = exampleComNode.childAt(0);
                        assert.exists(nodeD);
                        return [
                            4,
                            nodeD.expand()
                        ];
                    case 1:
                        _state.sent();
                        nodeA = nodeD.childAt(0);
                        nodeB = nodeD.childAt(1);
                        nodeC = exampleComNode.childAt(1);
                        assert.exists(nodeA);
                        assert.exists(nodeB);
                        assert.exists(nodeC);
                        // Select the 'http://example.com/a.js' node.
                        nodeA.select();
                        nodeBSelectSpy = sinon.spy(nodeB, 'select');
                        nodeCSelectSpy = sinon.spy(nodeC, 'select');
                        // Remove the project with the a.js and b.js nodes.
                        project.removeProject();
                        // Let us check that we do not push the selection forward over node 'b.js'.
                        // Instead, the selection will be pushed to 'c.js' (with an intermediate step at 'd').
                        // (Ideally, it would move directly from 'a.js' to 'c.js', but we are currently only
                        // optimizing away the moves to siblings.)
                        assert.isTrue(nodeBSelectSpy.notCalled);
                        assert.isTrue(nodeCSelectSpy.called);
                        // Also note that the folder 'd' is removed. Let us make that explicit.
                        assert.strictEqual(exampleComNode.childCount(), 1);
                        assert.strictEqual(exampleComNode.childAt(0), nodeC);
                        otherProject.removeProject();
                        return [
                            2
                        ];
                }
            });
        }));
        it('selects sibling after removing individual folder children', /*#__PURE__*/ _async_to_generator(function() {
            var project, _createContentProviderUISourceCodes, otherProject, navigatorView, rootElement, exampleComNode, nodeD, nodeE, nodeC, nodeA, nodeB, nodeESelectSpy, nodeBSelectSpy, nodeCSelectSpy;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        project = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                            items: [
                                {
                                    url: 'http://example.com/d/a.js',
                                    mimeType: 'application/javascript'
                                },
                                {
                                    url: 'http://example.com/e/b.js',
                                    mimeType: 'application/javascript'
                                }
                            ],
                            projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                            target: target
                        }).project;
                        _createContentProviderUISourceCodes = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                            items: [
                                {
                                    url: 'http://example.com/c.js',
                                    mimeType: 'application/javascript'
                                }
                            ],
                            projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                            projectId: 'other',
                            target: target
                        }), otherProject = _createContentProviderUISourceCodes.project;
                        navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({
                            forceNew: true
                        });
                        rootElement = navigatorView.scriptsTree.rootElement();
                        exampleComNode = rootElement.firstChild();
                        assert.exists(exampleComNode);
                        nodeD = exampleComNode.childAt(0);
                        nodeE = exampleComNode.childAt(1);
                        nodeC = exampleComNode.childAt(2);
                        assert.exists(nodeD);
                        assert.exists(nodeE);
                        return [
                            4,
                            nodeD.expand()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            nodeE.expand()
                        ];
                    case 2:
                        _state.sent();
                        nodeA = nodeD.childAt(0);
                        nodeB = nodeE.childAt(0);
                        assert.exists(nodeA);
                        assert.exists(nodeB);
                        assert.exists(nodeC);
                        // Select the 'http://example.com/a.js' node.
                        nodeA.select();
                        nodeESelectSpy = sinon.spy(nodeE, 'select');
                        nodeBSelectSpy = sinon.spy(nodeB, 'select');
                        nodeCSelectSpy = sinon.spy(nodeC, 'select');
                        // Remove a.js and b.js nodes. This will remove their nodes, including the containing folders.
                        // The selection will be moved from 'a.js' to its parent (folder 'd') and when that gets removed,
                        // it should move to 'c' rather being pushed forward to 'e'.
                        project.removeProject();
                        assert.isTrue(nodeESelectSpy.notCalled);
                        assert.isTrue(nodeBSelectSpy.notCalled);
                        assert.isTrue(nodeCSelectSpy.called);
                        // Also note that nodeD and nodeE are removed. Let us make that explicit.
                        assert.strictEqual(exampleComNode.childCount(), 1);
                        assert.strictEqual(exampleComNode.childAt(0), nodeC);
                        otherProject.removeProject();
                        return [
                            2
                        ];
                }
            });
        }));
        it('selects just once when excution-context-destroyed event removes sibling source codes', /*#__PURE__*/ _async_to_generator(function() {
            var backend, navigatorView, rootElement, exampleComNode, nodeA, nodeB, nodeC, nodeBSelectSpy, nodeCSelectSpy;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_9__.MockProtocolBackend();
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.dispatchEvent)(target, 'Runtime.executionContextCreated', {
                            context: {
                                id: 2,
                                origin: 'http://example.com',
                                name: 'c2',
                                uniqueId: 'c2',
                                auxData: {
                                    frameId: 'f2'
                                }
                            }
                        });
                        return [
                            4,
                            backend.addScript(target, {
                                content: '42',
                                url: 'http://example.com/a.js',
                                executionContextId: 2,
                                hasSourceURL: false
                            }, null)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            backend.addScript(target, {
                                content: '42',
                                url: 'http://example.com/b.js',
                                executionContextId: 2,
                                hasSourceURL: false
                            }, null)
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            backend.addScript(target, {
                                content: '42',
                                url: 'http://example.com/c.js',
                                hasSourceURL: false
                            }, null)
                        ];
                    case 3:
                        _state.sent();
                        navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({
                            forceNew: true
                        });
                        rootElement = navigatorView.scriptsTree.rootElement();
                        exampleComNode = rootElement.firstChild();
                        assert.exists(exampleComNode);
                        nodeA = exampleComNode.childAt(0);
                        nodeB = exampleComNode.childAt(1);
                        nodeC = exampleComNode.childAt(2);
                        assert.exists(nodeA);
                        assert.exists(nodeB);
                        assert.exists(nodeC);
                        // Select the 'http://example.com/a.js' node. Remove the project with a.js and b.js and verify
                        // that the selection is moved from 'a.js' to 'c.js', without temporarily selecting 'b.js'.
                        nodeA.select();
                        nodeBSelectSpy = sinon.spy(nodeB, 'select');
                        nodeCSelectSpy = sinon.spy(nodeC, 'select');
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.dispatchEvent)(target, 'Runtime.executionContextDestroyed', {
                            executionContextId: 2,
                            executionContextUniqueId: 'c2'
                        });
                        assert.isTrue(nodeBSelectSpy.notCalled);
                        assert.isTrue(nodeCSelectSpy.called);
                        // Sanity check - we should have only one source now.
                        assert.strictEqual(exampleComNode.childCount(), 1);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('with ignore listing', function() {
        var target;
        var resolveFn = null;
        beforeEach(function() {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.IgnoreListManager.IgnoreListManager.instance().addChangeListener(function() {
                if (resolveFn) {
                    resolveFn();
                    resolveFn = null;
                }
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.setMockConnectionResponseHandler)('Debugger.setBlackboxPatterns', function() {
                return {};
            });
        });
        var updatePatternSetting = function() {
            var _ref = _async_to_generator(function(settingValue) {
                var setting, promise;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('skip-stack-frames-pattern');
                            promise = new Promise(function(resolve) {
                                resolveFn = resolve;
                            });
                            setting.setAsArray(settingValue);
                            return [
                                4,
                                promise
                            ];
                        case 1:
                            void _state.sent();
                            return [
                                2
                            ];
                    }
                });
            });
            return function updatePatternSetting(settingValue) {
                return _ref.apply(this, arguments);
            };
        }();
        var enableIgnoreListing = function() {
            return updatePatternSetting([
                {
                    pattern: '-hidden',
                    disabled: false
                }
            ]);
        };
        var disableIgnoreListing = function() {
            return updatePatternSetting([]);
        };
        it('shows folder with only ignore listed content as ignore listed', /*#__PURE__*/ _async_to_generator(function() {
            var project, navigatorView, rootElement, nodeExampleCom, ignoredFolder, mixedFolder;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            enableIgnoreListing()
                        ];
                    case 1:
                        _state.sent();
                        project = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                            items: [
                                {
                                    url: 'http://example.com/ignored/a/a-hidden.js',
                                    mimeType: 'application/javascript'
                                },
                                {
                                    url: 'http://example.com/ignored/b/b-hidden.js',
                                    mimeType: 'application/javascript'
                                },
                                {
                                    url: 'http://example.com/mixed/a/a-hidden.js',
                                    mimeType: 'application/javascript'
                                },
                                {
                                    url: 'http://example.com/mixed/b/b.js',
                                    mimeType: 'application/javascript'
                                }
                            ],
                            projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                            target: target
                        }).project;
                        navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({
                            forceNew: true
                        });
                        rootElement = navigatorView.scriptsTree.rootElement();
                        nodeExampleCom = rootElement.firstChild();
                        ignoredFolder = nodeExampleCom.childAt(0);
                        mixedFolder = nodeExampleCom.childAt(1);
                        assert.strictEqual(mixedFolder.tooltip, 'mixed');
                        assert.strictEqual(ignoredFolder.tooltip, 'ignored (ignore listed)');
                        project.removeProject();
                        return [
                            2
                        ];
                }
            });
        }));
        it('updates folders when ignore listing rules change', /*#__PURE__*/ _async_to_generator(function() {
            var project, navigatorView, rootElement, nodeExampleCom, ignoredFolder, mixedFolder;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        project = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                            items: [
                                {
                                    url: 'http://example.com/ignored/a/a-hidden.js',
                                    mimeType: 'application/javascript'
                                },
                                {
                                    url: 'http://example.com/ignored/b/b-hidden.js',
                                    mimeType: 'application/javascript'
                                },
                                {
                                    url: 'http://example.com/mixed/a/a-hidden.js',
                                    mimeType: 'application/javascript'
                                },
                                {
                                    url: 'http://example.com/mixed/b/b.js',
                                    mimeType: 'application/javascript'
                                }
                            ],
                            projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                            target: target
                        }).project;
                        navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({
                            forceNew: true
                        });
                        rootElement = navigatorView.scriptsTree.rootElement();
                        nodeExampleCom = rootElement.firstChild();
                        ignoredFolder = nodeExampleCom.childAt(0);
                        mixedFolder = nodeExampleCom.childAt(1);
                        assert.strictEqual(mixedFolder.tooltip, 'mixed');
                        assert.strictEqual(ignoredFolder.tooltip, 'ignored');
                        return [
                            4,
                            enableIgnoreListing()
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(mixedFolder.tooltip, 'mixed');
                        assert.strictEqual(ignoredFolder.tooltip, 'ignored (ignore listed)');
                        return [
                            4,
                            disableIgnoreListing()
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(mixedFolder.tooltip, 'mixed');
                        assert.strictEqual(ignoredFolder.tooltip, 'ignored');
                        project.removeProject();
                        return [
                            2
                        ];
                }
            });
        }));
        it('updates folders when files are added or removed', /*#__PURE__*/ _async_to_generator(function() {
            var project, navigatorView, rootElement, nodeExampleCom, ignoredFolder, mixedFolder, _createContentProviderUISourceCodes, otherProject;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            enableIgnoreListing()
                        ];
                    case 1:
                        _state.sent();
                        project = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                            items: [
                                {
                                    url: 'http://example.com/ignored/a/a-hidden.js',
                                    mimeType: 'application/javascript'
                                },
                                {
                                    url: 'http://example.com/ignored/b/b-hidden.js',
                                    mimeType: 'application/javascript'
                                },
                                {
                                    url: 'http://example.com/mixed/a/a-hidden.js',
                                    mimeType: 'application/javascript'
                                }
                            ],
                            projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                            target: target
                        }).project;
                        navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({
                            forceNew: true
                        });
                        rootElement = navigatorView.scriptsTree.rootElement();
                        nodeExampleCom = rootElement.firstChild();
                        ignoredFolder = nodeExampleCom.childAt(0);
                        mixedFolder = nodeExampleCom.childAt(1);
                        assert.strictEqual(mixedFolder.tooltip, 'mixed/a (ignore listed)');
                        assert.strictEqual(ignoredFolder.tooltip, 'ignored (ignore listed)');
                        _createContentProviderUISourceCodes = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                            items: [
                                {
                                    url: 'http://example.com/mixed/b/b.js',
                                    mimeType: 'application/javascript'
                                }
                            ],
                            projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                            target: target
                        }), otherProject = _createContentProviderUISourceCodes.project;
                        assert.strictEqual(mixedFolder.tooltip, 'mixed');
                        assert.strictEqual(ignoredFolder.tooltip, 'ignored (ignore listed)');
                        otherProject.removeProject();
                        assert.strictEqual(mixedFolder.tooltip, 'mixed (ignore listed)');
                        assert.strictEqual(ignoredFolder.tooltip, 'ignored (ignore listed)');
                        project.removeProject();
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=SourcesNavigator.test.js.map


}),

}]);