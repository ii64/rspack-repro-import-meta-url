"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_workspace_diff_WorkspaceDiff_test_js"], {
"./models/workspace_diff/WorkspaceDiff.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */var _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */var _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _workspace_diff_workspace_diff_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../workspace_diff/workspace_diff.js */ "./models/workspace_diff/workspace_diff.js");
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








(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('UISourceCodeDiff', function() {
    it('returns formatted mapping with a diff', /*#__PURE__*/ _async_to_generator(function() {
        var workspace, debuggerWorkspaceBinding, breakpointManager, URL, _createFileSystemUISourceCode, uiSourceCode, project, uiSourceCodeDiff, _ref, diff, formattedCurrentMapping;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance({
                        forceNew: true
                    });
                    debuggerWorkspaceBinding = _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
                        forceNew: true,
                        targetManager: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance(),
                        resourceMapping: new _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceMapping.ResourceMapping(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance(), workspace)
                    });
                    breakpointManager = _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_4__.BreakpointManager.BreakpointManager.instance({
                        forceNew: true,
                        targetManager: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance(),
                        workspace: workspace,
                        debuggerWorkspaceBinding: debuggerWorkspaceBinding
                    });
                    _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__.Persistence.PersistenceImpl.instance({
                        forceNew: true,
                        workspace: workspace,
                        breakpointManager: breakpointManager
                    });
                    _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__.NetworkPersistenceManager.NetworkPersistenceManager.instance({
                        forceNew: true,
                        workspace: workspace
                    });
                    URL = 'file:///tmp/example.html';
                    _createFileSystemUISourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createFileSystemUISourceCode)({
                        url: URL,
                        content: 'const data={original:true}',
                        mimeType: 'text/javascript'
                    }), uiSourceCode = _createFileSystemUISourceCode.uiSourceCode, project = _createFileSystemUISourceCode.project;
                    uiSourceCode.setWorkingCopyGetter(function() {
                        return 'const data={modified:true,original:false}';
                    });
                    uiSourceCodeDiff = new _workspace_diff_workspace_diff_js__WEBPACK_IMPORTED_MODULE_7__.WorkspaceDiff.UISourceCodeDiff(uiSourceCode);
                    return [
                        4,
                        uiSourceCodeDiff.requestDiff({
                            shouldFormatDiff: true
                        })
                    ];
                case 1:
                    _ref = _state.sent(), diff = _ref.diff, formattedCurrentMapping = _ref.formattedCurrentMapping;
                    assert.deepEqual(diff, [
                        {
                            '0': 0,
                            '1': [
                                'const data = {'
                            ]
                        },
                        {
                            '0': -1,
                            '1': [
                                '    original: true'
                            ]
                        },
                        {
                            '0': 1,
                            '1': [
                                '    modified: true,',
                                '    original: false'
                            ]
                        },
                        {
                            '0': 0,
                            '1': [
                                '}',
                                ''
                            ]
                        }
                    ]);
                    assert.deepEqual(formattedCurrentMapping.originalToFormatted(0, 'const data={'.length), [
                        1,
                        4
                    ]);
                    assert.deepEqual(formattedCurrentMapping.originalToFormatted(0, 'const data={modified:true,'.length), [
                        2,
                        4
                    ]);
                    workspace.removeProject(project);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=WorkspaceDiff.test.js.map


}),
"./models/workspace_diff/workspace_diff.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkspaceDiff: function() { return /* reexport module object */ _WorkspaceDiff_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _WorkspaceDiff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkspaceDiff.js */ "./models/workspace_diff/WorkspaceDiff.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=workspace_diff.js.map


}),

}]);