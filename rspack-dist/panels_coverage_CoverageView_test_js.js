"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_coverage_CoverageView_test_js"], {
"./panels/coverage/CoverageView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _coverage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coverage.js */ "./panels/coverage/coverage.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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








var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
var isShowingLandingPage = function(view) {
    return Boolean(view.contentElement.querySelector('.landing-page'));
};
var isShowingResults = function(view) {
    return Boolean(view.contentElement.querySelector('.coverage-results .vbox.flex-auto'));
};
var isShowingPrerenderPage = function(view) {
    return Boolean(view.contentElement.querySelector('.prerender-page'));
};
var isShowingBfcachePage = function(view) {
    return Boolean(view.contentElement.querySelector('.bfcache-page'));
};
var setupTargetAndModels = function() {
    var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
    var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance({
        forceNew: true
    });
    var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
    var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
    var debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
        forceNew: true,
        resourceMapping: resourceMapping,
        targetManager: targetManager
    });
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance({
        forceNew: true,
        debuggerWorkspaceBinding: debuggerWorkspaceBinding
    });
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance({
        forceNew: true,
        resourceMapping: resourceMapping,
        targetManager: targetManager
    });
    var coverageModel = target.model(_coverage_js__WEBPACK_IMPORTED_MODULE_7__.CoverageModel.CoverageModel);
    assert.exists(coverageModel);
    var startSpy = sinon.spy(coverageModel, 'start');
    var stopSpy = sinon.spy(coverageModel, 'stop');
    var cssModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSModel.CSSModel);
    assert.exists(cssModel);
    sinon.stub(cssModel.agent, 'invoke_startRuleUsageTracking').resolves({
        getError: function() {
            return undefined;
        }
    });
    sinon.stub(cssModel.agent, 'invoke_takeCoverageDelta').resolves({
        coverage: [],
        getError: function() {
            return undefined;
        },
        timestamp: 0
    });
    sinon.stub(cssModel.agent, 'invoke_stopRuleUsageTracking').resolves({
        getError: function() {
            return undefined;
        },
        ruleUsage: []
    });
    var profilerAgent = target.profilerAgent();
    sinon.stub(profilerAgent, 'invoke_startPreciseCoverage').resolves({
        timestamp: 0,
        getError: function() {
            return undefined;
        }
    });
    sinon.stub(profilerAgent, 'invoke_stopPreciseCoverage').resolves({
        getError: function() {
            return undefined;
        }
    });
    sinon.stub(profilerAgent, 'invoke_takePreciseCoverage').resolves({
        result: [],
        getError: function() {
            return undefined;
        },
        timestamp: 0
    });
    return {
        startSpy: startSpy,
        stopSpy: stopSpy,
        target: target
    };
};
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('CoverageView', function() {
    beforeEach(function() {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.registerNoopActions)([
            'coverage.clear',
            'coverage.export',
            'coverage.start-with-reload',
            'coverage.toggle-recording',
            'inspector-main.reload'
        ]);
    });
    it('can handle back/forward cache navigations', /*#__PURE__*/ _async_to_generator(function() {
        var _setupTargetAndModels, startSpy, stopSpy, target, view;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _setupTargetAndModels = setupTargetAndModels(), startSpy = _setupTargetAndModels.startSpy, stopSpy = _setupTargetAndModels.stopSpy, target = _setupTargetAndModels.target;
                    view = _coverage_js__WEBPACK_IMPORTED_MODULE_7__.CoverageView.CoverageView.instance();
                    view.markAsRoot();
                    view.show(document.body);
                    assert.isTrue(isShowingLandingPage(view));
                    assert.isFalse(isShowingResults(view));
                    assert.isFalse(isShowingPrerenderPage(view));
                    assert.isFalse(isShowingBfcachePage(view));
                    assert.isTrue(startSpy.notCalled);
                    return [
                        4,
                        view.startRecording({
                            reload: false,
                            jsCoveragePerBlock: false
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.isFalse(isShowingLandingPage(view));
                    assert.isTrue(isShowingResults(view));
                    assert.isFalse(isShowingPrerenderPage(view));
                    assert.isFalse(isShowingBfcachePage(view));
                    assert.isTrue(startSpy.calledOnce);
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target), {}, "BackForwardCacheRestore" /* Protocol.Page.NavigationType.BackForwardCacheRestore */ );
                    assert.isFalse(isShowingLandingPage(view));
                    assert.isFalse(isShowingResults(view));
                    assert.isFalse(isShowingPrerenderPage(view));
                    assert.isTrue(isShowingBfcachePage(view));
                    assert.isTrue(startSpy.calledOnce);
                    assert.isTrue(stopSpy.notCalled);
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target));
                    assert.isFalse(isShowingLandingPage(view));
                    assert.isTrue(isShowingResults(view));
                    assert.isFalse(isShowingPrerenderPage(view));
                    assert.isFalse(isShowingBfcachePage(view));
                    assert.isTrue(startSpy.calledOnce);
                    assert.isTrue(stopSpy.notCalled);
                    return [
                        4,
                        view.stopRecording()
                    ];
                case 3:
                    _state.sent();
                    view.willHide();
                    view.wasShown();
                    view.detach();
                    _coverage_js__WEBPACK_IMPORTED_MODULE_7__.CoverageView.CoverageView.removeInstance();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can handle prerender activations', /*#__PURE__*/ _async_to_generator(function() {
        var _setupTargetAndModels, startSpy, stopSpy, view, _setupTargetAndModels1, startSpy2, stopSpy2, target2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _setupTargetAndModels = setupTargetAndModels(), startSpy = _setupTargetAndModels.startSpy, stopSpy = _setupTargetAndModels.stopSpy;
                    view = _coverage_js__WEBPACK_IMPORTED_MODULE_7__.CoverageView.CoverageView.instance();
                    view.markAsRoot();
                    view.show(document.body);
                    assert.isTrue(isShowingLandingPage(view));
                    assert.isFalse(isShowingResults(view));
                    assert.isFalse(isShowingPrerenderPage(view));
                    assert.isFalse(isShowingBfcachePage(view));
                    assert.isTrue(startSpy.notCalled);
                    return [
                        4,
                        view.startRecording({
                            reload: false,
                            jsCoveragePerBlock: false
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isFalse(isShowingLandingPage(view));
                    assert.isTrue(isShowingResults(view));
                    assert.isFalse(isShowingPrerenderPage(view));
                    assert.isFalse(isShowingBfcachePage(view));
                    assert.isTrue(startSpy.calledOnce);
                    // Create 2nd target for the prerendered frame.
                    _setupTargetAndModels1 = setupTargetAndModels(), startSpy2 = _setupTargetAndModels1.startSpy, stopSpy2 = _setupTargetAndModels1.stopSpy, target2 = _setupTargetAndModels1.target;
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.activate)(target2);
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 3:
                    _state.sent();
                    assert.isFalse(isShowingLandingPage(view));
                    assert.isFalse(isShowingResults(view));
                    assert.isTrue(isShowingPrerenderPage(view));
                    assert.isFalse(isShowingBfcachePage(view));
                    assert.isTrue(startSpy.calledOnce);
                    assert.isTrue(stopSpy.calledOnce);
                    assert.isTrue(startSpy2.calledOnce);
                    assert.isTrue(stopSpy2.notCalled);
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target2), {
                        url: 'http://www.example.com/page'
                    });
                    assert.isFalse(isShowingLandingPage(view));
                    assert.isTrue(isShowingResults(view));
                    assert.isFalse(isShowingPrerenderPage(view));
                    assert.isFalse(isShowingBfcachePage(view));
                    assert.isTrue(startSpy.calledOnce);
                    assert.isTrue(stopSpy.calledOnce);
                    assert.isTrue(startSpy2.calledOnce);
                    assert.isTrue(stopSpy2.notCalled);
                    return [
                        4,
                        view.stopRecording()
                    ];
                case 4:
                    _state.sent();
                    view.willHide();
                    view.wasShown();
                    view.detach();
                    _coverage_js__WEBPACK_IMPORTED_MODULE_7__.CoverageView.CoverageView.removeInstance();
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=CoverageView.test.js.map


}),
"./panels/coverage/coverage.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CoverageDecorationManager: function() { return /* reexport module object */ _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__; },
  CoverageListView: function() { return /* reexport module object */ _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__; },
  CoverageModel: function() { return /* reexport module object */ _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__; },
  CoverageView: function() { return /* reexport module object */ _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__; }
});
/* harmony import */var _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoverageModel.js */ "./panels/coverage/CoverageModel.js");
/* harmony import */var _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoverageListView.js */ "./panels/coverage/CoverageListView.js");
/* harmony import */var _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoverageView.js */ "./panels/coverage/CoverageView.js");
/* harmony import */var _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoverageDecorationManager.js */ "./panels/coverage/CoverageDecorationManager.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








 //# sourceMappingURL=coverage.js.map


}),

}]);