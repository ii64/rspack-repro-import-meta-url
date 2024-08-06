"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_persistence_PersistenceImpl_test_js"], {
"./models/persistence/PersistenceImpl.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./testing/MockScopeChain.js");
/* harmony import */var _testing_PersistenceHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/PersistenceHelpers.js */ "./testing/PersistenceHelpers.js");
/* harmony import */var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */var _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */var _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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










(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('PersistenceImpl', function() {
    var setBreakpointOnFileSystem = function setBreakpointOnFileSystem(fileSystemUiSourceCode, breakpointLine) {
        return _setBreakpointOnFileSystem.apply(this, arguments);
    };
    var attachNetworkScript = function attachNetworkScript(breakpointLine) {
        return _attachNetworkScript.apply(this, arguments);
    };
    var assertBreakLocationUiSourceCodes = function assertBreakLocationUiSourceCodes(uiSourceCodes) {
        var locations = breakpointManager.allBreakpointLocations();
        assert.deepEqual(locations.map(function(loc) {
            return loc.uiLocation.uiSourceCode;
        }), uiSourceCodes);
    };
    var FILE_SYSTEM_BREAK_ID = 'BREAK_ID';
    var FILE_SYSTEM_SCRIPT_ID = 'FILE_SYSTEM_SCRIPT';
    var NETWORK_BREAKPOINT_ID = 'BREAKPOINT_ID';
    var backend;
    var target;
    var breakpointManager;
    var DEFAULT_BREAKPOINT = [
        _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__.BreakpointManager.EMPTY_BREAKPOINT_CONDITION,
        true,
        false,
        "RESTORED" /* Breakpoints.BreakpointManager.BreakpointOrigin.OTHER */ 
    ];
    var SCRIPT_DESCRIPTION = {
        url: 'http://www.google.com/script.js',
        content: 'console.log(1);\nconsole.log(2);\n',
        startLine: 0,
        startColumn: 0,
        hasSourceURL: false
    };
    beforeEach(function() {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        var workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.WorkspaceImpl.instance();
        var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
        var resourceMapping = new _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceMapping.ResourceMapping(targetManager, workspace);
        var debuggerWorkspaceBinding = _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance({
            forceNew: true,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
        breakpointManager = _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__.BreakpointManager.BreakpointManager.instance({
            forceNew: true,
            targetManager: targetManager,
            workspace: workspace,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
        backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_3__.MockProtocolBackend();
        _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.Persistence.PersistenceImpl.instance({
            forceNew: true,
            workspace: workspace,
            breakpointManager: breakpointManager
        });
    });
    function _setBreakpointOnFileSystem() {
        _setBreakpointOnFileSystem = _async_to_generator(function(fileSystemUiSourceCode, breakpointLine) {
            var _breakpointManager, fileSystemBreakpointResponse;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        fileSystemBreakpointResponse = backend.responderToBreakpointByUrlRequest(fileSystemUiSourceCode.url(), breakpointLine)({
                            breakpointId: FILE_SYSTEM_BREAK_ID,
                            locations: [
                                {
                                    scriptId: FILE_SYSTEM_SCRIPT_ID,
                                    lineNumber: breakpointLine,
                                    columnNumber: 0
                                }
                            ]
                        });
                        // Set the breakpoint on the file system uiSourceCode.
                        return [
                            4,
                            (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                                fileSystemUiSourceCode,
                                breakpointLine,
                                0
                            ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            fileSystemBreakpointResponse
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _setBreakpointOnFileSystem.apply(this, arguments);
    }
    function _attachNetworkScript() {
        _attachNetworkScript = _async_to_generator(function(breakpointLine) {
            var script, uiSourceCode;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            backend.addScript(target, SCRIPT_DESCRIPTION, null)
                        ];
                    case 1:
                        script = _state.sent();
                        uiSourceCode = _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().uiSourceCodeForScript(script);
                        assert.exists(uiSourceCode);
                        // Set the breakpoint response for our upcoming request to set the breakpoint on the network file.
                        return [
                            4,
                            backend.responderToBreakpointByUrlRequest(script.sourceURL, breakpointLine)({
                                breakpointId: NETWORK_BREAKPOINT_ID,
                                locations: [
                                    {
                                        scriptId: script.scriptId,
                                        lineNumber: breakpointLine,
                                        columnNumber: 0
                                    }
                                ]
                            })
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2,
                            uiSourceCode
                        ];
                }
            });
        });
        return _attachNetworkScript.apply(this, arguments);
    }
    it('moves breakpoint from file system uiSourceCode to the network uiSourceCode when binding is created', /*#__PURE__*/ _async_to_generator(function() {
        var fileSystemPath, fileSystemFileUrl, _createFileSystemFileForPersistenceTests, fileSystemUiSourceCode, project, breakpointLine, networkUiSourceCode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    fileSystemPath = 'file://path/to/filesystem';
                    fileSystemFileUrl = fileSystemPath + '/script.js';
                    _createFileSystemFileForPersistenceTests = (0,_testing_PersistenceHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createFileSystemFileForPersistenceTests)({
                        fileSystemPath: fileSystemPath,
                        fileSystemFileUrl: fileSystemFileUrl,
                        type: ''
                    }, SCRIPT_DESCRIPTION.url, SCRIPT_DESCRIPTION.content, target), fileSystemUiSourceCode = _createFileSystemFileForPersistenceTests.uiSourceCode, project = _createFileSystemFileForPersistenceTests.project;
                    breakpointLine = 0;
                    // Set the breakpoint response for our upcoming request.
                    return [
                        4,
                        setBreakpointOnFileSystem(fileSystemUiSourceCode, breakpointLine)
                    ];
                case 1:
                    _state.sent();
                    // We should only have one breakpoint location: the one on the file system.
                    assertBreakLocationUiSourceCodes([
                        fileSystemUiSourceCode
                    ]);
                    return [
                        4,
                        attachNetworkScript(breakpointLine)
                    ];
                case 2:
                    networkUiSourceCode = _state.sent();
                    // We should only have one breakpoint location: the one on the network.
                    assertBreakLocationUiSourceCodes([
                        networkUiSourceCode
                    ]);
                    project.dispose();
                    assertBreakLocationUiSourceCodes([
                        networkUiSourceCode
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('copies breakpoint from network uiSourceCode to the file system uiSourceCode when binding is removed ', /*#__PURE__*/ _async_to_generator(function() {
        var fileSystemPath, fileSystemFileUrl, _createFileSystemFileForPersistenceTests, fileSystemUiSourceCode, project, breakpointLine, networkUiSourceCode, persistence, binding, moveResponse;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    fileSystemPath = 'file://path/to/filesystem';
                    fileSystemFileUrl = fileSystemPath + '/script.js';
                    _createFileSystemFileForPersistenceTests = (0,_testing_PersistenceHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createFileSystemFileForPersistenceTests)({
                        fileSystemPath: fileSystemPath,
                        fileSystemFileUrl: fileSystemFileUrl,
                        type: ''
                    }, SCRIPT_DESCRIPTION.url, SCRIPT_DESCRIPTION.content, target), fileSystemUiSourceCode = _createFileSystemFileForPersistenceTests.uiSourceCode, project = _createFileSystemFileForPersistenceTests.project;
                    breakpointLine = 0;
                    // Set the breakpoint response for our upcoming request.
                    return [
                        4,
                        setBreakpointOnFileSystem(fileSystemUiSourceCode, breakpointLine)
                    ];
                case 1:
                    _state.sent();
                    // We should only have one breakpoint location: the one on the file system.
                    assertBreakLocationUiSourceCodes([
                        fileSystemUiSourceCode
                    ]);
                    return [
                        4,
                        attachNetworkScript(breakpointLine)
                    ];
                case 2:
                    networkUiSourceCode = _state.sent();
                    // We should only have one breakpoint location: the one on the network.
                    assertBreakLocationUiSourceCodes([
                        networkUiSourceCode
                    ]);
                    // Prepare to remove the binding. This will cause the breakpoint from the network to be copied
                    // over to the file system uiSourceCode.
                    persistence = _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.Persistence.PersistenceImpl.instance();
                    binding = persistence.binding(fileSystemUiSourceCode);
                    assert.exists(binding);
                    // Set the breakpoint response for our upcoming request on the file system.
                    moveResponse = backend.responderToBreakpointByUrlRequest(fileSystemUiSourceCode.url(), breakpointLine)({
                        breakpointId: FILE_SYSTEM_BREAK_ID,
                        locations: [
                            {
                                scriptId: FILE_SYSTEM_SCRIPT_ID,
                                lineNumber: breakpointLine,
                                columnNumber: 0
                            }
                        ]
                    });
                    return [
                        4,
                        persistence.removeBinding(binding)
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        moveResponse
                    ];
                case 4:
                    _state.sent();
                    assertBreakLocationUiSourceCodes([
                        networkUiSourceCode,
                        fileSystemUiSourceCode
                    ]);
                    project.dispose();
                    return [
                        2
                    ];
            }
        });
    }));
    // Replaces web test: http/tests/devtools/persistence/automapping-bind-committed-network-sourcecode.js
    it('it marks the filesystem UISourceCode dirty when the network UISourceCode was committed before the binding was established', /*#__PURE__*/ _async_to_generator(function() {
        var url, origContent, _createContentProviderUISourceCode, networkUISourceCode, content, mappingPromise, localUrl, uiSourceCode, _ref, network, fileSystem;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    url = 'https://example.com/script.js';
                    origContent = 'window.foo = () => "foo";\n';
                    _createContentProviderUISourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createContentProviderUISourceCode)({
                        url: url,
                        content: origContent,
                        mimeType: 'text/javascript',
                        projectType: _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.projectTypes.Network,
                        metadata: new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.UISourceCode.UISourceCodeMetadata(null, origContent.length)
                    }), networkUISourceCode = _createContentProviderUISourceCode.uiSourceCode;
                    // Modify the content of the network UISourceCode.
                    content = origContent.replace(/foo/g, 'bar');
                    networkUISourceCode.addRevision(content);
                    // Add a filesystem version of 'script.js' with the original content.
                    mappingPromise = _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.Persistence.PersistenceImpl.instance().once(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.Persistence.Events.BindingCreated);
                    localUrl = 'file:///var/www/script.js';
                    uiSourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createFileSystemUISourceCode)({
                        url: localUrl,
                        mimeType: 'text/javascript',
                        content: origContent,
                        autoMapping: true,
                        metadata: new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.UISourceCode.UISourceCodeMetadata(null, origContent.length)
                    }).uiSourceCode;
                    return [
                        4,
                        mappingPromise
                    ];
                case 1:
                    _ref = _state.sent(), network = _ref.network, fileSystem = _ref.fileSystem;
                    assert.strictEqual(network, networkUISourceCode);
                    assert.strictEqual(fileSystem, uiSourceCode);
                    assert.isTrue(fileSystem.isDirty());
                    assert.strictEqual(fileSystem.workingCopy(), content);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=PersistenceImpl.test.js.map


}),
"./testing/PersistenceHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createFileSystemFileForPersistenceTests: function() { return createFileSystemFileForPersistenceTests; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





// This helper sets up a file system and a file system uiSourceCode that can be used for
// Persistence testing. As soon as a script is added that has the given `networkScriptUrl` and the `content`,
// PersistenceImpl will try to bind the network uiSourceCode with this file system uiSourceCode.
function createFileSystemFileForPersistenceTests(fileSystemScript, networkScriptUrl, content, target) {
    // First, set up a network resource that is described by the networkScriptUrl. This resource
    // file is required for a binding to be created.
    var origin = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractOrigin(networkScriptUrl);
    dispatchDocumentOpened(target, origin);
    var mimeType = 'text/javascript';
    var resource = (0,_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createResource)((0,_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target), networkScriptUrl, mimeType, content);
    // Now create the file system uiSourceCode to match the same meta data and content as the
    // created network's resource file.
    var metadata = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCodeMetadata(resource.lastModified(), resource.contentSize());
    return (0,_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createFileSystemUISourceCode)({
        url: fileSystemScript.fileSystemFileUrl,
        content: content,
        fileSystemPath: fileSystemScript.fileSystemPath,
        mimeType: mimeType,
        metadata: metadata,
        autoMapping: true,
        type: fileSystemScript.type
    });
}
function dispatchDocumentOpened(target, origin) {
    (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Page.documentOpened', {
        frame: {
            id: 'main',
            loaderId: 'foo',
            url: "".concat(origin, "/index.html"),
            domainAndRegistry: 'site',
            securityOrigin: origin,
            mimeType: 'text/html',
            secureContextType: "Secure" /* Protocol.Page.SecureContextType.Secure */ ,
            crossOriginIsolatedContextType: "Isolated" /* Protocol.Page.CrossOriginIsolatedContextType.Isolated */ ,
            gatedAPIFeatures: []
        }
    });
} //# sourceMappingURL=PersistenceHelpers.js.map


}),

}]);