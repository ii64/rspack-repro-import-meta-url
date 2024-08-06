"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_OverridesHelpers_js"], {
"./testing/OverridesHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createWorkspaceProject: function() { return createWorkspaceProject; },
  setUpEnvironment: function() { return setUpEnvironment; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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





function setUpEnvironment() {
    var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
    var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
    var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
    var debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
        forceNew: true,
        resourceMapping: resourceMapping,
        targetManager: targetManager
    });
    var breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__.BreakpointManager.BreakpointManager.instance({
        forceNew: true,
        targetManager: targetManager,
        workspace: workspace,
        debuggerWorkspaceBinding: debuggerWorkspaceBinding
    });
    _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.Persistence.PersistenceImpl.instance({
        forceNew: true,
        workspace: workspace,
        breakpointManager: breakpointManager
    });
    var networkPersistenceManager = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.NetworkPersistenceManager.NetworkPersistenceManager.instance({
        forceNew: true,
        workspace: workspace
    });
    return {
        networkPersistenceManager: networkPersistenceManager,
        workspace: workspace,
        debuggerWorkspaceBinding: debuggerWorkspaceBinding
    };
}
function createWorkspaceProject(baseUrl, files) {
    return _createWorkspaceProject.apply(this, arguments);
} //# sourceMappingURL=OverridesHelpers.js.map
function _createWorkspaceProject() {
    _createWorkspaceProject = _async_to_generator(function(baseUrl, files) {
        var networkPersistenceManager, fileSystem, uiSourceCodes, mockProject, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, workspace;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    networkPersistenceManager = setUpEnvironment().networkPersistenceManager;
                    fileSystem = {
                        fileSystemPath: function() {
                            return baseUrl;
                        },
                        fileSystemBaseURL: baseUrl + '/',
                        type: function() {
                            return _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.FileSystem;
                        },
                        fileSystemInternal: {
                            supportsAutomapping: function() {
                                return false;
                            }
                        }
                    };
                    uiSourceCodes = new Map();
                    mockProject = {
                        uiSourceCodes: function() {
                            return Array.from(uiSourceCodes.values());
                        },
                        id: function() {
                            return baseUrl;
                        },
                        fileSystemPath: function() {
                            return baseUrl;
                        },
                        uiSourceCodeForURL: function(url) {
                            return uiSourceCodes.get(url) || null;
                        },
                        type: function() {
                            return _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.FileSystem;
                        },
                        initialGitFolders: function() {
                            return [];
                        },
                        fileSystemInternal: {
                            type: function() {
                                return 'filesystem';
                            }
                        },
                        fileSystemBaseURL: baseUrl + '/',
                        createFile: function() {}
                    };
                    return [
                        4,
                        networkPersistenceManager.setProject(mockProject)
                    ];
                case 1:
                    _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        _loop = function() {
                            var file = _step.value;
                            var url = file.path.concat(file.name);
                            var fileUrl = networkPersistenceManager.fileUrlFromNetworkUrl(url, true);
                            uiSourceCodes.set(fileUrl, {
                                requestContent: function() {
                                    return Promise.resolve({
                                        content: file.content
                                    });
                                },
                                url: function() {
                                    return fileUrl;
                                },
                                project: function() {
                                    return _object_spread_props(_object_spread({}, fileSystem), {
                                        requestFileBlob: function() {
                                            return new Blob([
                                                file.content
                                            ]);
                                        }
                                    });
                                },
                                name: function() {
                                    return file.name;
                                },
                                setWorkingCopy: function() {},
                                commitWorkingCopy: function() {}
                            });
                        };
                        for(_iterator = files[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return [
                        4,
                        networkPersistenceManager.setProject(mockProject)
                    ];
                case 2:
                    _state.sent();
                    workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
                    workspace.addProject(mockProject);
                    return [
                        2,
                        networkPersistenceManager
                    ];
            }
        });
    });
    return _createWorkspaceProject.apply(this, arguments);
}


}),

}]);