"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_source_map_scopes_ScopeChainModel_test_js"], {
"./models/source_map_scopes/ScopeChainModel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./source_map_scopes.js */ "./models/source_map_scopes/source_map_scopes.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('ScopeChainModel', function() {
    var clock;
    var stubPluginManager;
    beforeEach(function() {
        clock = sinon.useFakeTimers();
        var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance();
        var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance();
        var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
        var debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance({
            forceNew: true,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
        stubPluginManager = sinon.createStubInstance(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerLanguagePlugins.DebuggerLanguagePluginManager, {
            resolveScopeChain: Promise.resolve(null)
        });
        sinon.stub(debuggerWorkspaceBinding, 'pluginManager').value(stubPluginManager);
    });
    afterEach(function() {
        clock.restore();
    });
    it('emits an event after it was constructed with the scope chain', /*#__PURE__*/ _async_to_generator(function() {
        var target, debuggerModel, fakeFrame, scopeChainModel, listenerStub;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
                    fakeFrame = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame);
                    fakeFrame.debuggerModel = debuggerModel;
                    // @ts-ignore readonly for test.
                    fakeFrame.script = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Script.Script, {
                        isWasm: false
                    });
                    fakeFrame.scopeChain.returns([]);
                    scopeChainModel = new _source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.ScopeChainModel.ScopeChainModel(fakeFrame);
                    listenerStub = sinon.stub();
                    scopeChainModel.addEventListener("ScopeChainUpdated" /* SourceMapScopes.ScopeChainModel.Events.ScopeChainUpdated */ , listenerStub);
                    return [
                        4,
                        clock.tickAsync(10)
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(listenerStub.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not emit an event after it was disposed even with an update still in-flight', /*#__PURE__*/ _async_to_generator(function() {
        var _Platform_PromiseUtilities_promiseWithResolvers, promise, resolve, target, debuggerModel, fakeFrame, scopeChainModel, listenerStub;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Stub out the pluginManagers `resolveScopeChain` with a promise that we control.
                    _Platform_PromiseUtilities_promiseWithResolvers = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.PromiseUtilities.promiseWithResolvers(), promise = _Platform_PromiseUtilities_promiseWithResolvers.promise, resolve = _Platform_PromiseUtilities_promiseWithResolvers.resolve;
                    stubPluginManager.resolveScopeChain.returns(promise);
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
                    fakeFrame = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame);
                    fakeFrame.debuggerModel = debuggerModel;
                    // @ts-ignore readonly for test.
                    fakeFrame.script = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Script.Script, {
                        isWasm: false
                    });
                    fakeFrame.scopeChain.returns([]);
                    scopeChainModel = new _source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.ScopeChainModel.ScopeChainModel(fakeFrame);
                    listenerStub = sinon.stub();
                    scopeChainModel.addEventListener("ScopeChainUpdated" /* SourceMapScopes.ScopeChainModel.Events.ScopeChainUpdated */ , listenerStub);
                    return [
                        4,
                        clock.tickAsync(10)
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(stubPluginManager.resolveScopeChain.calledOnce);
                    assert.isFalse(listenerStub.calledOnce);
                    scopeChainModel.dispose();
                    resolve(null);
                    return [
                        4,
                        clock.tickAsync(10)
                    ];
                case 2:
                    _state.sent();
                    assert.isFalse(listenerStub.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=ScopeChainModel.test.js.map


}),

}]);