"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_inspector_main_InspectorMain_test_js"], {
"./entrypoints/inspector_main/InspectorMain.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/protocol_client/protocol_client.js */ "./core/protocol_client/protocol_client.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector_main.js */ "./entrypoints/inspector_main/inspector_main.js");
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







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('FocusDebuggeeActionDelegate', function() {
    it('uses main frame', /*#__PURE__*/ _async_to_generator(function() {
        var tabTarget, frameTarget, delegate, bringToFront;
        return _ts_generator(this, function(_state) {
            tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Tab
            });
            (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
                parentTarget: tabTarget,
                subtype: 'prerender'
            });
            frameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
                parentTarget: tabTarget
            });
            delegate = new _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.FocusDebuggeeActionDelegate();
            bringToFront = sinon.spy(frameTarget.pageAgent(), 'invoke_bringToFront');
            delegate.handleAction({}, 'foo');
            assert.isTrue(bringToFront.calledOnce);
            return [
                2
            ];
        });
    }));
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('InspectorMainImpl', function() {
    var DEBUGGER_ID = 'debuggerId';
    var runForTabTarget = function() {
        var _ref = _async_to_generator(function() {
            var inspectorMain, runPromise, rootTarget;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({
                            forceNew: true
                        });
                        runPromise = inspectorMain.run();
                        rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget();
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().createTarget('someTargetID', 'someName', _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame, rootTarget, undefined);
                        return [
                            4,
                            runPromise
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return function runForTabTarget() {
            return _ref.apply(this, arguments);
        };
    }();
    beforeEach(function() {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.stubNoopSettings)();
        sinon.stub(_core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__.InspectorBackend.Connection, 'setFactory');
    });
    it('continues only after primary page target is available', /*#__PURE__*/ _async_to_generator(function() {
        var inspectorMain, finished, rootTarget;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', 'tab');
                    inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({
                        forceNew: true
                    });
                    finished = false;
                    inspectorMain.run().then(function() {
                        finished = true;
                    }).catch(function(e) {
                        throw e;
                    });
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 1:
                    _state.sent();
                    assert.isFalse(finished);
                    rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget();
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().createTarget('someTargetID', 'someName', _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame, rootTarget, undefined);
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(finished);
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets main target type to Node if v8only query param present', /*#__PURE__*/ _async_to_generator(function() {
        var _SDK_TargetManager_TargetManager_instance_rootTarget, inspectorMain;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({
                        forceNew: true
                    });
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('v8only', 'true');
                    assert.notExists(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget());
                    return [
                        4,
                        inspectorMain.run()
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual((_SDK_TargetManager_TargetManager_instance_rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget()) === null || _SDK_TargetManager_TargetManager_instance_rootTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_rootTarget.type(), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Node);
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('v8only', '');
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets main target type to Tab if targetType=tab query param present', /*#__PURE__*/ _async_to_generator(function() {
        var _SDK_TargetManager_TargetManager_instance_rootTarget;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', 'tab');
                    assert.notExists(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget());
                    return [
                        4,
                        runForTabTarget()
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual((_SDK_TargetManager_TargetManager_instance_rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget()) === null || _SDK_TargetManager_TargetManager_instance_rootTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_rootTarget.type(), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Tab);
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', '');
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets main target type to Frame by default', /*#__PURE__*/ _async_to_generator(function() {
        var _SDK_TargetManager_TargetManager_instance_rootTarget, inspectorMain;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({
                        forceNew: true
                    });
                    assert.notExists(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget());
                    return [
                        4,
                        inspectorMain.run()
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual((_SDK_TargetManager_TargetManager_instance_rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget()) === null || _SDK_TargetManager_TargetManager_instance_rootTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_rootTarget.type(), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame);
                    return [
                        2
                    ];
            }
        });
    }));
    it('creates main target waiting for debugger if the main target is frame and panel is sources', /*#__PURE__*/ _async_to_generator(function() {
        var inspectorMain, waitForDebugger, debuggerPause;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({
                        forceNew: true
                    });
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('panel', 'sources');
                    assert.notExists(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget());
                    waitForDebugger = sinon.spy();
                    debuggerPause = sinon.spy();
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Page.waitForDebugger', waitForDebugger);
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.enable', function() {
                        return {
                            debuggerId: DEBUGGER_ID
                        };
                    });
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.pause', debuggerPause);
                    return [
                        4,
                        inspectorMain.run()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(waitForDebugger.calledOnce);
                    assert.isTrue(debuggerPause.calledOnce);
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('panel', '');
                    return [
                        2
                    ];
            }
        });
    }));
    it('wait for Debugger.enable before calling Debugger.pause', /*#__PURE__*/ _async_to_generator(function() {
        var inspectorMain, debuggerPause, debuggerPauseCalled, debuggerEnable, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({
                        forceNew: true
                    });
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('panel', 'sources');
                    assert.notExists(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget());
                    debuggerPause = sinon.stub();
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.pause', debuggerPause);
                    debuggerPauseCalled = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_4__.expectCall)(debuggerPause);
                    debuggerEnable = function(_) {};
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.enable', function() {
                        return new Promise(function(resolve) {
                            debuggerEnable = resolve;
                        });
                    });
                    assert.notExists(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget());
                    result = inspectorMain.run();
                    assert.isFalse(debuggerPause.called);
                    debuggerEnable({
                        debuggerId: DEBUGGER_ID,
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        Promise.all([
                            debuggerPauseCalled,
                            result
                        ])
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(debuggerPause.calledOnce);
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('panel', '');
                    return [
                        2
                    ];
            }
        });
    }));
    it('frontend correctly registers if Debugger.enable fails', /*#__PURE__*/ _async_to_generator(function() {
        var inspectorMain, target, debuggerModel;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({
                        forceNew: true
                    });
                    assert.notExists(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget());
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.enable', function() {
                        return {
                            getError: function() {
                                return 'Debugger.enable failed';
                            }
                        };
                    });
                    return [
                        4,
                        inspectorMain.run()
                    ];
                case 1:
                    _state.sent();
                    target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget();
                    assert.isNotNull(target);
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                    assert.isFalse(debuggerModel.debuggerEnabled());
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls Runtime.runIfWaitingForDebugger for Node target', /*#__PURE__*/ _async_to_generator(function() {
        var inspectorMain, runIfWaitingForDebugger;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('v8only', 'true');
                    inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({
                        forceNew: true
                    });
                    runIfWaitingForDebugger = sinon.spy();
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Runtime.runIfWaitingForDebugger', runIfWaitingForDebugger);
                    return [
                        4,
                        inspectorMain.run()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(runIfWaitingForDebugger.calledOnce);
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('v8only', '');
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls Runtime.runIfWaitingForDebugger for frame target', /*#__PURE__*/ _async_to_generator(function() {
        var inspectorMain, runIfWaitingForDebugger;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({
                        forceNew: true
                    });
                    runIfWaitingForDebugger = sinon.spy();
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Runtime.runIfWaitingForDebugger', runIfWaitingForDebugger);
                    return [
                        4,
                        inspectorMain.run()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(runIfWaitingForDebugger.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not call Runtime.runIfWaitingForDebugger for Tab target', /*#__PURE__*/ _async_to_generator(function() {
        var runIfWaitingForDebugger;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', 'tab');
                    runIfWaitingForDebugger = sinon.spy();
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Runtime.runIfWaitingForDebugger', runIfWaitingForDebugger);
                    return [
                        4,
                        runForTabTarget()
                    ];
                case 1:
                    _state.sent();
                    assert.isFalse(runIfWaitingForDebugger.called);
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', '');
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets frame target to "main"', /*#__PURE__*/ _async_to_generator(function() {
        var _SDK_TargetManager_TargetManager_instance_rootTarget, inspectorMain, runIfWaitingForDebugger;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({
                        forceNew: true
                    });
                    runIfWaitingForDebugger = sinon.spy();
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Runtime.runIfWaitingForDebugger', runIfWaitingForDebugger);
                    return [
                        4,
                        inspectorMain.run()
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual((_SDK_TargetManager_TargetManager_instance_rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget()) === null || _SDK_TargetManager_TargetManager_instance_rootTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_rootTarget.name(), 'Main');
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets tab target to "tab"', /*#__PURE__*/ _async_to_generator(function() {
        var _SDK_TargetManager_TargetManager_instance_rootTarget, runIfWaitingForDebugger;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', 'tab');
                    runIfWaitingForDebugger = sinon.spy();
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Runtime.runIfWaitingForDebugger', runIfWaitingForDebugger);
                    return [
                        4,
                        runForTabTarget()
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual((_SDK_TargetManager_TargetManager_instance_rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget()) === null || _SDK_TargetManager_TargetManager_instance_rootTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_rootTarget.name(), 'Tab');
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', '');
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets main frame target to "main"', /*#__PURE__*/ _async_to_generator(function() {
        var inspectorMain, runIfWaitingForDebugger, runPromise, prerenderTarget, mainFrameTarget;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', 'tab');
                    inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({
                        forceNew: true
                    });
                    runIfWaitingForDebugger = sinon.spy();
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Runtime.runIfWaitingForDebugger', runIfWaitingForDebugger);
                    runPromise = inspectorMain.run();
                    prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
                        parentTarget: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget() || undefined,
                        subtype: 'prerender'
                    });
                    mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
                        parentTarget: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget() || undefined
                    });
                    return [
                        4,
                        runPromise
                    ];
                case 1:
                    _state.sent();
                    assert.notStrictEqual(prerenderTarget.name(), 'Main');
                    assert.strictEqual(mainFrameTarget.name(), 'Main');
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', '');
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=InspectorMain.test.js.map


}),
"./entrypoints/inspector_main/inspector_main.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InspectorMain: function() { return /* reexport module object */ _InspectorMain_js__WEBPACK_IMPORTED_MODULE_1__; },
  OutermostTargetSelector: function() { return /* reexport module object */ _OutermostTargetSelector_js__WEBPACK_IMPORTED_MODULE_2__; },
  RenderingOptions: function() { return /* reexport module object */ _RenderingOptions_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _RenderingOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderingOptions.js */ "./entrypoints/inspector_main/RenderingOptions.js");
/* harmony import */var _InspectorMain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectorMain.js */ "./entrypoints/inspector_main/InspectorMain.js");
/* harmony import */var _OutermostTargetSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OutermostTargetSelector.js */ "./entrypoints/inspector_main/OutermostTargetSelector.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





 //# sourceMappingURL=inspector_main.js.map


}),
"./testing/ExpectStubCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  expectCall: function() { return expectCall; },
  expectCalled: function() { return expectCalled; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
function expectCall(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise(function(resolve) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _options_callCount;
            if (stub.callCount < ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1)) {
                return undefined;
            }
            resolve(args);
            return options.fakeFn ? options.fakeFn.apply(this, args) : undefined;
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options_callCount;
    var remainingCalls = ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, _object_spread_props(_object_spread({}, options), {
        callCount: remainingCalls
    }));
} //# sourceMappingURL=ExpectStubCall.js.map


}),

}]);