"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_bindings_DebuggerWorkspaceBinding_test_js"], {
"./models/bindings/DebuggerWorkspaceBinding.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./testing/MockScopeChain.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bindings.js */ "./models/bindings/bindings.js");
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






(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('DebuggerWorkspaceBinding', function() {
    var target;
    var backend;
    var debuggerWorkspaceBinding;
    beforeEach(function() {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            id: 'main',
            name: 'main',
            type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Frame
        });
        var targetManager = target.targetManager();
        var workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
        var resourceMapping = new _bindings_js__WEBPACK_IMPORTED_MODULE_5__.ResourceMapping.ResourceMapping(targetManager, workspace);
        debuggerWorkspaceBinding = _bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: false,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_3__.MockProtocolBackend();
        _bindings_js__WEBPACK_IMPORTED_MODULE_5__.IgnoreListManager.IgnoreListManager.instance({
            forceNew: false,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
    });
    it('can wait for a uiSourceCode if it is not yet available', /*#__PURE__*/ _async_to_generator(function() {
        var scriptUrl, scriptInfo, workerTarget, uiSourceCodePromise, uiSourceCode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(target);
                    scriptUrl = 'http://script-host/script.js';
                    scriptInfo = {
                        url: scriptUrl,
                        content: 'console.log(1);',
                        startLine: 0,
                        startColumn: 0,
                        hasSourceURL: false
                    };
                    // Create a second target.
                    workerTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                        id: 'worker',
                        name: 'worker',
                        type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.ServiceWorker,
                        parentTarget: target
                    });
                    // Before any script is registered, there shouldn't be any uiSourceCodes.
                    assert.isNull(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(scriptUrl));
                    // Create promise to await the uiSourceCode given the url and its target.
                    uiSourceCodePromise = debuggerWorkspaceBinding.waitForUISourceCodeAdded(scriptUrl, target);
                    // Register the script, which will kick off creating the uiSourceCode.
                    return [
                        4,
                        backend.addScript(target, scriptInfo, null)
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        backend.addScript(workerTarget, scriptInfo, null)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        uiSourceCodePromise
                    ];
                case 3:
                    uiSourceCode = _state.sent();
                    // Check if the uiSourceCode is the expected one (from the main target, and having the correct sourceURL).
                    assert.strictEqual(uiSourceCode.url(), scriptUrl);
                    assert.deepEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_5__.NetworkProject.NetworkProject.targetForUISourceCode(uiSourceCode), target);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=DebuggerWorkspaceBinding.test.js.map


}),

}]);