"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_lighthouse_LighthouseProtocolService_test_js"], {
"./panels/lighthouse/LighthouseProtocolService.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
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



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('LighthouseProtocolService', function() {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    var Lighthouse;
    var primaryTarget;
    var rootTarget;
    var suspendAllTargets;
    var resumeAllTargets;
    var createParallelConnection;
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var _primaryTarget_targetInfo, targetManager, childTargetManager, _rootTarget_targetInfo, rootChildTargetManager;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        Promise.all(/*! import() */ [__webpack_require__.e("panels_emulation_components_DeviceSizeInputElement_js"), __webpack_require__.e("panels_emulation_DeviceModeToolbar_js"), __webpack_require__.e("panels_emulation_MediaQueryInspector_js"), __webpack_require__.e("panels_emulation_DeviceModeView_js"), __webpack_require__.e("panels_emulation_DeviceModeWrapper_js"), __webpack_require__.e("panels_emulation_AdvancedApp_js"), __webpack_require__.e("third_party_lighthouse_report_bundle_js"), __webpack_require__.e("panels_lighthouse_LighthouseController_js"), __webpack_require__.e("panels_lighthouse_LighthouseStartView_js"), __webpack_require__.e("panels_lighthouse_LighthouseProtocolService_js"), __webpack_require__.e("panels_lighthouse_LighthouseStatusView_js"), __webpack_require__.e("panels_lighthouse_LighthouseReportRenderer_js"), __webpack_require__.e("panels_lighthouse_LighthouseTimespanView_js"), __webpack_require__.e("third_party_lighthouse_report-assets_report-generator_mjs"), __webpack_require__.e("panels_lighthouse_LighthousePanel_js"), __webpack_require__.e("panels_lighthouse_lighthouse_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./lighthouse.js */ "./panels/lighthouse/lighthouse.js"))
                    ];
                case 1:
                    Lighthouse = _state.sent();
                    rootTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                        type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab
                    });
                    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                        parentTarget: rootTarget,
                        subtype: 'prerender'
                    });
                    primaryTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                        parentTarget: rootTarget
                    });
                    targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
                    suspendAllTargets = sinon.stub(targetManager, 'suspendAllTargets').resolves();
                    resumeAllTargets = sinon.stub(targetManager, 'resumeAllTargets').resolves();
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ChildTargetManager.ChildTargetManager.install();
                    childTargetManager = primaryTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ChildTargetManager.ChildTargetManager);
                    assert.exists(childTargetManager);
                    sinon.stub(childTargetManager, 'getParentTargetId').resolves((_primaryTarget_targetInfo = primaryTarget.targetInfo()) === null || _primaryTarget_targetInfo === void 0 ? void 0 : _primaryTarget_targetInfo.targetId);
                    if (rootTarget === primaryTarget) {
                        createParallelConnection = sinon.stub(childTargetManager, 'createParallelConnection').resolves({
                            connection: {
                                disconnect: function() {}
                            },
                            sessionId: 'foo'
                        });
                    } else {
                        ;
                        rootChildTargetManager = rootTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ChildTargetManager.ChildTargetManager);
                        assert.exists(rootChildTargetManager);
                        sinon.stub(rootChildTargetManager, 'getParentTargetId').resolves((_rootTarget_targetInfo = rootTarget.targetInfo()) === null || _rootTarget_targetInfo === void 0 ? void 0 : _rootTarget_targetInfo.targetId);
                        createParallelConnection = sinon.stub(rootChildTargetManager, 'createParallelConnection').resolves({
                            connection: {
                                disconnect: function() {}
                            },
                            sessionId: 'foo'
                        });
                    }
                    return [
                        2
                    ];
            }
        });
    }));
    it('suspends all targets', /*#__PURE__*/ _async_to_generator(function() {
        var service;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    service = new Lighthouse.LighthouseProtocolService.ProtocolService();
                    return [
                        4,
                        service.attach()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(suspendAllTargets.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('creates a parallel connection', /*#__PURE__*/ _async_to_generator(function() {
        var service;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    service = new Lighthouse.LighthouseProtocolService.ProtocolService();
                    return [
                        4,
                        service.attach()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(createParallelConnection.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('resumes all targets', /*#__PURE__*/ _async_to_generator(function() {
        var service;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    service = new Lighthouse.LighthouseProtocolService.ProtocolService();
                    return [
                        4,
                        service.attach()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        service.detach()
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(resumeAllTargets.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=LighthouseProtocolService.test.js.map


}),

}]);